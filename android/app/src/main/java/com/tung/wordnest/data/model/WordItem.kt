package com.tung.wordnest.data.model

enum class WordLevel {
    NEW,
    LEARNING,
    KNOWN
}

enum class ReviewAction {
    FORGOT, // Chưa nhớ (lặp lại sau 5 - 10 phút)
    HARD,   // Hơi nhớ (lặp lại sau 1 ngày)
    EASY    // Đã thuộc (lặp lại sau 7 ngày)
}

data class WordItem(
    val id: Long = 0,
    val deckId: Long,
    val term: String,
    val meaning: String,
    val phonetic: String? = null,
    val example: String? = null,
    val level: WordLevel = WordLevel.NEW,
    val nextReviewTime: Long = System.currentTimeMillis(),
    val reviewCount: Int = 0
)

data class DeckItem(
    val id: Long = 0,
    val name: String,
    val emoji: String,
    val description: String,
    val totalWords: Int = 0,
    val dueWords: Int = 0
)
