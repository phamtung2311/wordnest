package com.tung.wordnest.ui.screens.toeic

import android.content.Context
import android.util.Log
import org.json.JSONObject
import java.io.BufferedReader
import java.io.InputStreamReader

data class ToeicTestMetadata(
    val id: String,
    val year: Int,
    val testNumber: Int,
    val title: String,
    val totalQuestions: Int = 100,
    val hasTextContent: Boolean = false
)

object ToeicAssets {
    const val TOEIC_ASSET_BASE_URL = "https://wordnest-english-vocab.web.app"

    val READING_TESTS: List<ToeicTestMetadata> = buildList {
        for (year in listOf(2024, 2023)) {
            for (i in 1..10) {
                val testId = "${year}_$i"
                add(
                    ToeicTestMetadata(
                        id = testId,
                        year = year,
                        testNumber = i,
                        title = "ETS $year · Test $i",
                        totalQuestions = 100,
                        hasTextContent = (testId == "2024_1")
                    )
                )
            }
        }
    }

    val LISTENING_TESTS: List<ToeicTestMetadata> = buildList {
        for (year in listOf(2024, 2023)) {
            for (i in 1..10) {
                add(
                    ToeicTestMetadata(
                        id = "${year}_$i",
                        year = year,
                        testNumber = i,
                        title = "ETS $year · Test $i",
                        totalQuestions = 100
                    )
                )
            }
        }
    }

    fun parseYearAndNumber(testId: String): Pair<Int, Int> {
        val parts = testId.split('_', '-')
        val year = parts.getOrNull(0)?.toIntOrNull() ?: 2024
        val num = parts.getOrNull(1)?.toIntOrNull() ?: 1
        return Pair(year, num)
    }

    fun getToeicTitle(testId: String): String {
        val (year, num) = parseYearAndNumber(testId)
        return "ETS $year · Test $num"
    }

    fun getTestTitle(testId: String): String = getToeicTitle(testId)

    fun getToeicReadingPdfUrl(testId: String): String {
        val (year, num) = parseYearAndNumber(testId)
        return "$TOEIC_ASSET_BASE_URL/tests/reading${year}_$num.pdf"
    }

    fun getToeicAudioUrl(testId: String): String {
        val (year, num) = parseYearAndNumber(testId)
        return "$TOEIC_ASSET_BASE_URL/audio/test${num}_$year.mp3"
    }
}

object ToeicAnswerKeyStore {
    private const val TAG = "ToeicAnswerKeyStore"

    private var readingCache: Map<String, Map<String, String>>? = null
    private var listeningCache: Map<String, Map<String, String>>? = null

    @Synchronized
    fun getReadingKey(context: Context, testId: String): Map<String, String> {
        if (readingCache == null) {
            readingCache = loadAnswers(context, "toeic/answers_reading.json")
        }
        val cache = readingCache ?: emptyMap()
        return cache[testId]
            ?: cache[testId.replace('_', '-')]
            ?: cache[testId.replace('-', '_')]
            ?: emptyMap()
    }

    @Synchronized
    fun getListeningKey(context: Context, testId: String): Map<String, String> {
        if (listeningCache == null) {
            listeningCache = loadAnswers(context, "toeic/answers_listening.json")
        }
        val cache = listeningCache ?: emptyMap()
        return cache[testId]
            ?: cache[testId.replace('_', '-')]
            ?: cache[testId.replace('-', '_')]
            ?: emptyMap()
    }

    private fun loadAnswers(context: Context, assetPath: String): Map<String, Map<String, String>> {
        val resultMap = mutableMapOf<String, Map<String, String>>()
        try {
            val inputStream = context.assets.open(assetPath)
            val reader = BufferedReader(InputStreamReader(inputStream))
            val jsonString = reader.use { it.readText() }
            val rootObj = JSONObject(jsonString)

            val keys = rootObj.keys()
            while (keys.hasNext()) {
                val testId = keys.next()
                val testObj = rootObj.getJSONObject(testId)
                val questionMap = mutableMapOf<String, String>()
                val qKeys = testObj.keys()
                while (qKeys.hasNext()) {
                    val qNum = qKeys.next()
                    questionMap[qNum] = testObj.getString(qNum)
                }
                resultMap[testId] = questionMap
            }
            Log.d(TAG, "Loaded $assetPath successfully with ${resultMap.size} test keys")
        } catch (e: Exception) {
            Log.e(TAG, "Error loading $assetPath", e)
        }
        return resultMap
    }
}
