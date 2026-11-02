package com.tung.wordnest.ui.screens.toeic

import android.content.Context
import org.json.JSONArray
import org.json.JSONObject

data class IntensiveDialogueLine(
    val id: String,
    val speaker: String,
    val text: String,
    val vietnamese: String
)

data class IntensiveQuestionOption(
    val key: String,
    val text: String,
    val vietnamese: String? = null
)

data class IntensiveQuestion(
    val num: Int,
    val question: String,
    val vietnameseQuestion: String? = null,
    val options: List<IntensiveQuestionOption>,
    val correctAnswer: String,
    val explanation: String? = null,
    val clueText: String? = null
)

data class IntensiveVocab(
    val word: String,
    val meaning: String,
    val partOfSpeech: String? = null,
    val phonetic: String? = null,
    val example: String? = null
)

data class IntensiveListeningItem(
    val id: String,
    val part: Int,
    val partTitle: String,
    val questionRange: String,
    val title: String,
    val audioSrc: String,
    val startTime: Double,
    val endTime: Double,
    val imageUrl: String? = null,
    val transcript: List<IntensiveDialogueLine>,
    val questions: List<IntensiveQuestion>,
    val vocabulary: List<IntensiveVocab>
)

object IntensiveListeningStore {
    private val cache = mutableMapOf<String, List<IntensiveListeningItem>>()

    fun loadTest(context: Context, testId: String): List<IntensiveListeningItem> {
        val normalizedId = testId.replace("-", "_")
        cache[normalizedId]?.let { return it }

        val candidatePaths = listOf(
            "toeic/intensive/test_$normalizedId.json",
            "toeic/intensive/test_2026_$normalizedId.json",
            "toeic/intensive/test_${normalizedId.replace("2026_", "")}.json"
        )

        for (assetPath in candidatePaths) {
            try {
                val jsonStr = context.assets.open(assetPath).bufferedReader().use { it.readText() }
                val arr = JSONArray(jsonStr)
                val list = mutableListOf<IntensiveListeningItem>()

                for (i in 0 until arr.length()) {
                    val obj = arr.getJSONObject(i)
                    val transcriptArr = obj.optJSONArray("transcript") ?: JSONArray()
                    val transcriptList = mutableListOf<IntensiveDialogueLine>()
                    for (j in 0 until transcriptArr.length()) {
                        val tObj = transcriptArr.getJSONObject(j)
                        val text = tObj.optString("text", "")
                        val vietnamese = tObj.optString("vietnamese", "")
                        if (text.isNotEmpty() || vietnamese.isNotEmpty()) {
                            transcriptList.add(
                                IntensiveDialogueLine(
                                    id = tObj.optString("id", "line-$j"),
                                    speaker = tObj.optString("speaker", ""),
                                    text = text,
                                    vietnamese = vietnamese
                                )
                            )
                        }
                    }

                    val questionsArr = obj.optJSONArray("questions") ?: JSONArray()
                    val questionsList = mutableListOf<IntensiveQuestion>()
                    for (j in 0 until questionsArr.length()) {
                        val qObj = questionsArr.getJSONObject(j)
                        val optArr = qObj.optJSONArray("options") ?: JSONArray()
                        val optList = mutableListOf<IntensiveQuestionOption>()
                        for (k in 0 until optArr.length()) {
                            val oObj = optArr.getJSONObject(k)
                            optList.add(
                                IntensiveQuestionOption(
                                    key = oObj.optString("key", ""),
                                    text = oObj.optString("text", ""),
                                    vietnamese = oObj.optString("vietnamese").takeIf { it.isNotEmpty() }
                                )
                            )
                        }
                        questionsList.add(
                            IntensiveQuestion(
                                num = qObj.optInt("num", j + 1),
                                question = qObj.optString("question", ""),
                                vietnameseQuestion = qObj.optString("vietnameseQuestion").takeIf { it.isNotEmpty() },
                                options = optList,
                                correctAnswer = qObj.optString("correctAnswer", "A"),
                                explanation = qObj.optString("explanation").takeIf { it.isNotEmpty() },
                                clueText = qObj.optString("clueText").takeIf { it.isNotEmpty() }
                            )
                        )
                    }

                    val vocabArr = obj.optJSONArray("vocabulary") ?: JSONArray()
                    val vocabList = mutableListOf<IntensiveVocab>()
                    for (j in 0 until vocabArr.length()) {
                        val vObj = vocabArr.getJSONObject(j)
                        vocabList.add(
                            IntensiveVocab(
                                word = vObj.optString("word", ""),
                                meaning = vObj.optString("meaning", ""),
                                partOfSpeech = vObj.optString("partOfSpeech").takeIf { it.isNotEmpty() },
                                phonetic = vObj.optString("phonetic").takeIf { it.isNotEmpty() },
                                example = vObj.optString("example").takeIf { it.isNotEmpty() }
                            )
                        )
                    }

                    list.add(
                        IntensiveListeningItem(
                            id = obj.optString("id", "item-$i"),
                            part = obj.optInt("part", 1),
                            partTitle = obj.optString("partTitle", ""),
                            questionRange = obj.optString("questionRange", ""),
                            title = obj.optString("title", ""),
                            audioSrc = obj.optString("audioSrc", ""),
                            startTime = obj.optDouble("startTime", 0.0),
                            endTime = obj.optDouble("endTime", 0.0),
                            imageUrl = obj.optString("imageUrl").takeIf { it.isNotEmpty() },
                            transcript = transcriptList,
                            questions = questionsList,
                            vocabulary = vocabList
                        )
                    )
                }

                cache[normalizedId] = list
                return list
            } catch (ignored: Exception) {
                // Thử file tiếp theo
            }
        }
        return emptyList()
    }
}
