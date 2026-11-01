package com.tung.wordnest.data.remote

import android.util.Log
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.withContext
import org.json.JSONArray
import org.json.JSONObject
import java.net.HttpURLConnection
import java.net.URL
import java.net.URLEncoder

/**
 * Kết quả "Tự điền thông minh ✨" cho 1 từ: phiên âm IPA, từ loại, câu ví dụ
 * (Free Dictionary API) + nghĩa tiếng Việt (Google Translate GTX, fallback MyMemory).
 *
 * Các trường nullable — service chỉ điền tối đa, UI chỉ ghi đè trường CHƯA nhập.
 */
data class EnrichedVocab(
    val ipa: String? = null,
    val partOfSpeech: String? = null,
    val vietnameseMeaning: String? = null,
    val example: String? = null
)

/**
 * Dịch vụ tra từ tự động (Auto-Enrichment). Port 1:1 logic của `lib/translateService.ts`
 * (web) để "Tự điền thông minh" cho kết quả khớp giữa 2 nền tảng.
 *
 * - Dictionary API: https://api.dictionaryapi.dev/api/v2/entries/en/{term}
 *   → IPA (`phonetic` / `phonetics[0].text`), từ loại (`meanings[0].partOfSpeech`),
 *   câu ví dụ EN đầu tiên chứa từ (`meanings[i].definitions[j].example`).
 * - Google Translate GTX: .../translate_a/single?client=gtx&sl=en&tl=vi&dt=t
 *   → nghĩa tiếng Việt (nối các chunk của mảng response[0]).
 * - Fallback MyMemory: https://api.mymemory.translated.net/get?q=...&langpair=en|vi
 *
 * Chạy trên Dispatchers.IO, timeout 5s/request. Parse tách thành hàm thuần
 * (companion) để unit-test được không cần mạng.
 */
class VocabEnrichmentService {

    /**
     * Enrich 1 từ tiếng Anh. Không fail: mọi lỗi mạng → các trường null,
     * UI tự quyết định toast/hide. Trả `null` = "không enrich được gì cả".
     */
    suspend fun enrich(term: String): Result<EnrichedVocab> = withContext(Dispatchers.IO) {
        val clean = term.trim()
        if (clean.isEmpty()) {
            return@withContext Result.success(EnrichedVocab())
        }

        // Dictionary API chỉ hữu ích với từ đơn 1 tiếng (đúng như web)
        val singleWord = !clean.contains(' ')
        val dict = if (singleWord) fetchJson(FREE_DICT_TEMPLATE.format(clean.lowercase()))?.let { parseDictionary(it) } else null

        val viet = translateVietnamese(clean)

        Result.success(
            EnrichedVocab(
                ipa = dict?.ipa,
                partOfSpeech = normalizePartOfSpeech(dict?.partOfSpeech),
                vietnameseMeaning = viet,
                example = dict?.example
            )
        )
    }

    // ---------- HTTP ----------

    private fun fetchJson(urlStr: String): String? {
        return try {
            val conn = openConnection(URL(urlStr))
            if (conn.responseCode != 200) return null
            conn.inputStream.bufferedReader().use { it.readText() }
        } catch (e: Exception) {
            Log.d(TAG, "GET $urlStr lỗi (bỏ qua): ${e.message}")
            null
        }
    }

    private fun openConnection(url: URL): HttpURLConnection {
        val conn = url.openConnection() as HttpURLConnection
        conn.connectTimeout = TIMEOUT_MS
        conn.readTimeout = TIMEOUT_MS
        conn.setRequestProperty("User-Agent", "WordNest/1.0")
        conn.setRequestProperty("Accept", "application/json")
        return conn
    }

    private fun translateVietnamese(term: String): String? {
        val q = URLEncoder.encode(term, "UTF-8")
        val gtxJson = fetchJson(GTX_URL_TEMPLATE.format(q))
        val gtx = gtxJson?.let { parseGoogleTranslateGtx(it) }
        if (!gtx.isNullOrBlank()) return gtx
        // Fallback MyMemory (khớp web)
        val mmJson = fetchJson(MY_MEMORY_TEMPLATE.format(q))
        return mmJson?.let { parseMyMemory(it, term) }
    }

    // ---------- Parse (thuần, unit-test được) ----------

    /** Parse response Free Dictionary API → (ipa, partOfSpeech, example). */
    fun parseDictionary(json: String): DictParseResult {
        return try {
            val arr = JSONArray(json)
            if (arr.length() == 0) return DictParseResult()
            val entry = arr.getJSONObject(0)

            val phonetic = entry.optString("phonetic", "")
            val ipa = if (phonetic.isNotEmpty()) phonetic
            else entry.optJSONArray("phonetics")?.let { p ->
                if (p.length() > 0) p.getJSONObject(0).optString("text", "") else ""
            }?.takeIf { it.isNotEmpty() }

            var pos: String? = null
            var example: String? = null
            val meanings = entry.optJSONArray("meanings")
            if (meanings != null) {
                for (i in 0 until meanings.length()) {
                    val m = meanings.getJSONObject(i)
                    if (pos == null) pos = m.optString("partOfSpeech", "").takeIf { it.isNotEmpty() }
                    val defs = m.optJSONArray("definitions")
                    if (defs != null) {
                        for (j in 0 until defs.length()) {
                            val ex = defs.getJSONObject(j).optString("example", "")
                            if (ex.isNotEmpty()) { example = ex; break }
                        }
                    }
                    if (example != null) break
                }
            }
            DictParseResult(ipa = ipa, partOfSpeech = pos, example = example)
        } catch (e: Exception) {
            Log.d(TAG, "Parse dictionary lỗi: ${e.message}")
            DictParseResult()
        }
    }

    /** Parse response Google Translate GTX (mảng) → chuỗi nghĩa tiếng Việt. */
    fun parseGoogleTranslateGtx(json: String): String? {
        return try {
            val arr = JSONArray(json)
            val sentences = arr.optJSONArray(0) ?: return null
            val sb = StringBuilder()
            for (i in 0 until sentences.length()) {
                val first = (sentences.opt(i) as? JSONArray)?.opt(0)
                if (first is String) sb.append(first)
            }
            sb.toString().trim().takeIf { it.isNotEmpty() }
        } catch (e: Exception) {
            Log.d(TAG, "Parse GTX lỗi: ${e.message}")
            null
        }
    }

    /** Parse response MyMemory → nghĩa tiếng Việt (trả null nếu rỗng/đúng từ gốc). */
    fun parseMyMemory(json: String, originalTerm: String): String? {
        return try {
            val root = JSONObject(json)
            val translated = root.optJSONObject("responseData")
                ?.optString("translatedText", "")
                ?.trim()
                ?: return null
            // MyMemory trả nguyên từ khi không có bản dịch — coi như rỗng
            translated.takeIf { it.isNotEmpty() && !it.equals(originalTerm, ignoreCase = true) }
        } catch (e: Exception) {
            Log.d(TAG, "Parse MyMemory lỗi: ${e.message}")
            null
        }
    }

    /** Rút gọn partOfSpeech của Dictionary API ("noun"/"verb"/...) → chip UI (n/v/adj/adv/phr). */
    fun normalizePartOfSpeech(raw: String?): String? {
        if (raw.isNullOrBlank()) return null
        val r = raw.trim().lowercase()
        return when {
            r.startsWith("noun") -> "n"
            r.startsWith("verb") -> "v"
            r.startsWith("adjective") -> "adj"
            r.startsWith("adverb") -> "adv"
            r.startsWith("preposition") || r.startsWith("conjunction") ||
                r.startsWith("pronoun") || r.startsWith("determiner") ||
                r.startsWith("phrase") -> "phr"
            r.length <= 4 -> r // đã là dạng ngắn ("n", "v")
            else -> null
        }
    }

    companion object {
        private const val TAG = "VocabEnrichment"
        const val TIMEOUT_MS = 5000

        private const val FREE_DICT_TEMPLATE =
            "https://api.dictionaryapi.dev/api/v2/entries/en/%s"
        private const val GTX_URL_TEMPLATE =
            "https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=vi&dt=t&dt=bd&dt=rm&q=%s"
        private const val MY_MEMORY_TEMPLATE =
            "https://api.mymemory.translated.net/get?q=%s&langpair=en|vi"
    }
}

data class DictParseResult(
    val ipa: String? = null,
    val partOfSpeech: String? = null,
    val example: String? = null
)
