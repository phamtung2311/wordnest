package com.tung.wordnest.data.local

import android.content.Context
import android.content.SharedPreferences
import android.util.Log
import com.tung.wordnest.data.remote.ExamHistoryEntry
import org.json.JSONArray
import org.json.JSONObject

/**
 * Lưu trữ tiến độ thi TOEIC & lịch sử thi khớp 100% với Web (localStorage).
 * Keys:
 * - toeic_reading_progress_{testId}: JSON map { "101": "A", ... }
 * - toeic_listening_progress_{testId}: JSON map { "1": "B", ... }
 * - toeic_listening_time_{testId}: String biểu diễn số giây audio (vd "142")
 * - toeic_exam_history_v2: List JSON các bài thi đã nộp
 */
class ToeicProgressStore(context: Context) {
    private val prefs: SharedPreferences =
        context.getSharedPreferences("wordnest_toeic_prefs", Context.MODE_PRIVATE)

    companion object {
        private const val TAG = "ToeicProgressStore"
        private const val KEY_EXAM_HISTORY = "toeic_exam_history_v2"
    }

    // ==========================================
    // READING PROGRESS
    // ==========================================
    fun getReadingProgress(testId: String): Map<Int, String> {
        val key = "toeic_reading_progress_$testId"
        val jsonStr = prefs.getString(key, null) ?: return emptyMap()
        return try {
            val obj = JSONObject(jsonStr)
            val result = mutableMapOf<Int, String>()
            val keys = obj.keys()
            while (keys.hasNext()) {
                val qStr = keys.next()
                val qNum = qStr.toIntOrNull()
                if (qNum != null) {
                    result[qNum] = obj.getString(qStr)
                }
            }
            result
        } catch (e: Exception) {
            Log.e(TAG, "Error parsing reading progress for $testId", e)
            emptyMap()
        }
    }

    fun saveReadingProgress(testId: String, answers: Map<Int, String>) {
        val key = "toeic_reading_progress_$testId"
        try {
            val obj = JSONObject()
            answers.forEach { (qNum, ans) ->
                obj.put(qNum.toString(), ans)
            }
            prefs.edit().putString(key, obj.toString()).apply()
        } catch (e: Exception) {
            Log.e(TAG, "Error saving reading progress for $testId", e)
        }
    }

    fun clearReadingProgress(testId: String) {
        val key = "toeic_reading_progress_$testId"
        prefs.edit().remove(key).apply()
    }

    // ==========================================
    // LISTENING PROGRESS
    // ==========================================
    fun getListeningProgress(testId: String): Map<Int, String> {
        val key = "toeic_listening_progress_$testId"
        val jsonStr = prefs.getString(key, null) ?: return emptyMap()
        return try {
            val obj = JSONObject(jsonStr)
            val result = mutableMapOf<Int, String>()
            val keys = obj.keys()
            while (keys.hasNext()) {
                val qStr = keys.next()
                val qNum = qStr.toIntOrNull()
                if (qNum != null) {
                    result[qNum] = obj.getString(qStr)
                }
            }
            result
        } catch (e: Exception) {
            Log.e(TAG, "Error parsing listening progress for $testId", e)
            emptyMap()
        }
    }

    fun saveListeningProgress(testId: String, answers: Map<Int, String>) {
        val key = "toeic_listening_progress_$testId"
        try {
            val obj = JSONObject()
            answers.forEach { (qNum, ans) ->
                obj.put(qNum.toString(), ans)
            }
            prefs.edit().putString(key, obj.toString()).apply()
        } catch (e: Exception) {
            Log.e(TAG, "Error saving listening progress for $testId", e)
        }
    }

    fun clearListeningProgress(testId: String) {
        val key = "toeic_listening_progress_$testId"
        prefs.edit().remove(key).apply()
    }

    // ==========================================
    // LISTENING AUDIO TIMESTAMP
    // ==========================================
    fun getListeningAudioTime(testId: String): Long {
        val key = "toeic_listening_time_$testId"
        val str = prefs.getString(key, null) ?: return 0L
        return str.toLongOrNull() ?: 0L
    }

    fun saveListeningAudioTime(testId: String, seconds: Long) {
        val key = "toeic_listening_time_$testId"
        prefs.edit().putString(key, seconds.toString()).apply()
    }

    fun clearListeningAudioTime(testId: String) {
        val key = "toeic_listening_time_$testId"
        prefs.edit().remove(key).apply()
    }

    // ==========================================
    // EXAM HISTORY (LOCAL)
    // ==========================================
    fun recordExamHistory(entry: ExamHistoryEntry, maxEntries: Int = 50) {
        val current = getExamHistory().toMutableList()
        current.add(0, entry)
        val limited = current.take(maxEntries)
        try {
            val arr = JSONArray()
            limited.forEach { item ->
                val obj = JSONObject()
                obj.put("testId", item.testId)
                obj.put("kind", item.kind)
                obj.put("score", item.score)
                obj.put("date", item.date)
                arr.put(obj)
            }
            prefs.edit().putString(KEY_EXAM_HISTORY, arr.toString()).apply()
        } catch (e: Exception) {
            Log.e(TAG, "Error saving exam history locally", e)
        }
    }

    fun getExamHistory(): List<ExamHistoryEntry> {
        val jsonStr = prefs.getString(KEY_EXAM_HISTORY, null) ?: return emptyList()
        return try {
            val arr = JSONArray(jsonStr)
            val list = mutableListOf<ExamHistoryEntry>()
            for (i in 0 until arr.length()) {
                val obj = arr.getJSONObject(i)
                list.add(
                    ExamHistoryEntry(
                        testId = obj.optString("testId", ""),
                        kind = obj.optString("kind", "reading"),
                        score = obj.optInt("score", 0),
                        date = obj.optString("date", "")
                    )
                )
            }
            list
        } catch (e: Exception) {
            Log.e(TAG, "Error reading exam history locally", e)
            emptyList()
        }
    }

    fun getBestScore(testId: String, kind: String? = null): Int? {
        val history = getExamHistory()
        val normalizedId = testId.replace('-', '_')
        val scores = history.filter {
            it.testId.replace('-', '_') == normalizedId && (kind == null || it.kind == kind)
        }.map { it.score }
        return scores.maxOrNull()
    }

    fun getLatestScore(testId: String, kind: String? = null): Int? {
        val history = getExamHistory()
        val normalizedId = testId.replace('-', '_')
        val entry = history.firstOrNull {
            it.testId.replace('-', '_') == normalizedId && (kind == null || it.kind == kind)
        }
        return entry?.score
    }
}
