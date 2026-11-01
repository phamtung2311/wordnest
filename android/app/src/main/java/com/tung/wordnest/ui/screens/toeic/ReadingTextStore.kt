package com.tung.wordnest.ui.screens.toeic

import android.content.Context
import android.util.Log
import org.json.JSONObject
import java.io.BufferedReader
import java.io.InputStreamReader

data class ToeicReadingTextBlock(
    val id: String,
    val part: Int,
    val type: String, // "item", "passage", "letter", "chart", "table"
    val label: String,
    val text: String,
    val imageUrl: String?,
    val questionNumbers: List<Int>
)

data class ToeicReadingTextQuestion(
    val num: Int,
    val part: Int,
    val text: String,
    val options: List<String>,
    val blockRefs: List<String>
)

data class ToeicReadingTestData(
    val testId: String,
    val title: String,
    val blocks: List<ToeicReadingTextBlock>,
    val questions: List<ToeicReadingTextQuestion>
)

object ReadingTextStore {
    private const val TAG = "ReadingTextStore"
    private val cache = mutableMapOf<String, ToeicReadingTestData>()

    @Synchronized
    fun getReadingTest(context: Context, testId: String): ToeicReadingTestData? {
        val normalizedId = testId.replace('-', '_')
        if (cache.containsKey(normalizedId)) {
            return cache[normalizedId]
        }

        val assetFileName = "toeic/texts/reading_$normalizedId.json"
        return try {
            val inputStream = context.assets.open(assetFileName)
            val jsonString = BufferedReader(InputStreamReader(inputStream)).use { it.readText() }
            val root = JSONObject(jsonString)

            val parsedTestId = root.optString("testId", normalizedId)
            val title = root.optString("title", "ETS Reading")

            val blocksArray = root.getJSONArray("blocks")
            val blocksList = mutableListOf<ToeicReadingTextBlock>()
            for (i in 0 until blocksArray.length()) {
                val bObj = blocksArray.getJSONObject(i)
                val qNumsArray = bObj.getJSONArray("questionNumbers")
                val qNums = mutableListOf<Int>()
                for (j in 0 until qNumsArray.length()) {
                    qNums.add(qNumsArray.getInt(j))
                }
                blocksList.add(
                    ToeicReadingTextBlock(
                        id = bObj.getString("id"),
                        part = bObj.getInt("part"),
                        type = bObj.optString("type", "passage"),
                        label = bObj.optString("label", ""),
                        text = bObj.optString("text", ""),
                        imageUrl = if (bObj.isNull("imageUrl")) null else bObj.optString("imageUrl"),
                        questionNumbers = qNums
                    )
                )
            }

            val questionsArray = root.getJSONArray("questions")
            val questionsList = mutableListOf<ToeicReadingTextQuestion>()
            for (i in 0 until questionsArray.length()) {
                val qObj = questionsArray.getJSONObject(i)
                val optsArray = qObj.getJSONArray("options")
                val opts = mutableListOf<String>()
                for (j in 0 until optsArray.length()) {
                    opts.add(optsArray.getString(j))
                }
                val refsArray = qObj.getJSONArray("blockRefs")
                val refs = mutableListOf<String>()
                for (j in 0 until refsArray.length()) {
                    refs.add(refsArray.getString(j))
                }
                questionsList.add(
                    ToeicReadingTextQuestion(
                        num = qObj.getInt("num"),
                        part = qObj.getInt("part"),
                        text = qObj.optString("text", ""),
                        options = opts,
                        blockRefs = refs
                    )
                )
            }

            val testData = ToeicReadingTestData(
                testId = parsedTestId,
                title = title,
                blocks = blocksList,
                questions = questionsList
            )
            cache[normalizedId] = testData
            Log.d(TAG, "Loaded reading text data for $testId successfully with ${questionsList.size} questions and ${blocksList.size} blocks")
            testData
        } catch (e: Exception) {
            Log.d(TAG, "No text asset found for $testId ($assetFileName): ${e.message}")
            null
        }
    }

    fun hasReadingTestText(context: Context, testId: String): Boolean {
        return getReadingTest(context, testId) != null
    }
}
