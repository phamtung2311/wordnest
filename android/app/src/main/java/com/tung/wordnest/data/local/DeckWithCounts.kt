package com.tung.wordnest.data.local

import androidx.room.Embedded

data class DeckWithCounts(
    @Embedded val deck: DeckEntity,
    val totalWords: Int,
    val dueWords: Int
)
