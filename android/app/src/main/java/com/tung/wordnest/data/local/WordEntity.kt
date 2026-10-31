package com.tung.wordnest.data.local

import androidx.room.Entity
import androidx.room.ForeignKey
import androidx.room.Index
import androidx.room.PrimaryKey

@Entity(
    tableName = "words",
    foreignKeys = [
        ForeignKey(
            entity = DeckEntity::class,
            parentColumns = ["id"],
            childColumns = ["deckId"],
            onDelete = ForeignKey.CASCADE
        )
    ],
    indices = [Index(value = ["deckId"]), Index(value = ["nextReviewTime"])]
)
data class WordEntity(
    @PrimaryKey(autoGenerate = true)
    val id: Long = 0,
    val deckId: Long,
    val term: String,
    val meaning: String,
    val phonetic: String? = null,
    val example: String? = null,
    val level: String = "NEW", // NEW, LEARNING, KNOWN
    val nextReviewTime: Long = System.currentTimeMillis(),
    val reviewCount: Int = 0,
    val createdAt: Long = System.currentTimeMillis()
)
