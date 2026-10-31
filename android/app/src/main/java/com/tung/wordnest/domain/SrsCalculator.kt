package com.tung.wordnest.domain

import com.tung.wordnest.data.model.ReviewAction
import com.tung.wordnest.data.model.WordLevel

data class SrsResult(
    val newLevel: WordLevel,
    val nextReviewTime: Long
)

object SrsCalculator {
    private const val TEN_MINUTES_MS = 10 * 60 * 1000L
    private const val ONE_DAY_MS = 24 * 60 * 60 * 1000L
    private const val SEVEN_DAYS_MS = 7 * ONE_DAY_MS

    fun calculate(
        action: ReviewAction,
        now: Long = System.currentTimeMillis()
    ): SrsResult {
        return when (action) {
            ReviewAction.FORGOT -> {
                SrsResult(
                    newLevel = WordLevel.LEARNING,
                    nextReviewTime = now + TEN_MINUTES_MS
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
                    nextReviewTime = now + SEVEN_DAYS_MS
                )
            }
        }
    }
}
