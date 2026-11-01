package com.tung.wordnest.data.model

import com.tung.wordnest.data.local.WordEntity

enum class WordLevel {
    NEW,
    LEARNING,
    KNOWN
}

enum class ReviewAction {
    FORGOT, // Chưa nhớ (lặp lại sau 5 - 10 phút)
    HARD,   // Hơi nhớ (lặp lại sau 1 ngày)
    EASY    // Đã thuộc (lặp lại sau 14 ngày - nửa tháng)
}

data class WordItem(
    val id: Long = 0,
    val deckId: Long,
    val term: String,
    val meaning: String,
    val phonetic: String? = null,
    val partOfSpeech: String? = null,
    val example: String? = null,
    val level: WordLevel = WordLevel.NEW,
    val nextReviewTime: Long = System.currentTimeMillis(),
    val reviewCount: Int = 0,
    val createdAt: Long = 0L
)

/** Chuyển mô hình domain → Room entity (đủ SRS fields + createdAt để REPLACE giữ nguyên lịch sử). */
fun WordItem.toEntity(): WordEntity = WordEntity(
    id = id,
    deckId = deckId,
    term = term,
    meaning = meaning,
    phonetic = phonetic,
    partOfSpeech = partOfSpeech,
    example = example,
    level = level.name,
    nextReviewTime = nextReviewTime,
    reviewCount = reviewCount,
    createdAt = createdAt
)

data class DeckItem(
    val id: Long = 0,
    val name: String,
    val emoji: String,
    val description: String,
    val totalWords: Int = 0,
    val dueWords: Int = 0
)
