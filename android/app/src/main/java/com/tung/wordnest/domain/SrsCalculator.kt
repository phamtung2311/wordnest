package com.tung.wordnest.domain

import com.tung.wordnest.data.model.ReviewAction
import com.tung.wordnest.data.model.WordLevel

data class SrsResult(
    val newLevel: WordLevel,
    val nextReviewTime: Long
)

object SrsCalculator {
    // Căn đúng interval của web:
    // - Chưa nhớ (FORGOT) → 5 phút
    // - Hơi nhớ (HARD) → 1 ngày (24 giờ)
    // - Đã thuộc (EASY) → 14 ngày (nửa tháng, khớp chuẩn web)
    private const val FIVE_MINUTES_MS = 5 * 60 * 1000L
    private const val ONE_DAY_MS = 24 * 60 * 60 * 1000L
    private const val FOURTEEN_DAYS_MS = 14 * ONE_DAY_MS

    fun calculate(
        action: ReviewAction,
        now: Long = System.currentTimeMillis()
    ): SrsResult {
        return when (action) {
            ReviewAction.FORGOT -> {
                SrsResult(
                    newLevel = WordLevel.LEARNING,
                    nextReviewTime = now + FIVE_MINUTES_MS
                )
            }
            ReviewAction.HARD -> {
                SrsResult(
                    newLevel = WordLevel.LEARNING,
                    nextReviewTime = now + ONE_DAY_MS
                )
            }
            ReviewAction.EASY -> {
                SrsResult(
                    newLevel = WordLevel.KNOWN,
                    nextReviewTime = now + FOURTEEN_DAYS_MS
                )
            }
        }
    }
}
