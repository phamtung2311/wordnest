package com.tung.wordnest.data.local

import androidx.room.Dao
import androidx.room.Insert
import androidx.room.OnConflictStrategy
import androidx.room.Query
import androidx.room.Update
import kotlinx.coroutines.flow.Flow

@Dao
interface WordDao {
    @Query("SELECT * FROM decks ORDER BY createdAt DESC")
    fun getAllDecks(): Flow<List<DeckEntity>>

    @Query("SELECT d.*, (SELECT COUNT(*) FROM words WHERE deckId = d.id) as totalWords, (SELECT COUNT(*) FROM words WHERE deckId = d.id AND nextReviewTime <= :currentTime) as dueWords FROM decks d ORDER BY d.createdAt DESC")
    fun getDecksWithCounts(currentTime: Long): Flow<List<DeckWithCounts>>

    @Insert(onConflict = OnConflictStrategy.REPLACE)
    suspend fun insertDeck(deck: DeckEntity): Long

    @Query("SELECT * FROM words WHERE deckId = :deckId ORDER BY id ASC")
    fun getWordsByDeck(deckId: Long): Flow<List<WordEntity>>

    @Query("SELECT * FROM words WHERE nextReviewTime <= :currentTime ORDER BY nextReviewTime ASC")
    fun getDueWords(currentTime: Long): Flow<List<WordEntity>>

    @Query("SELECT * FROM words WHERE deckId = :deckId AND nextReviewTime <= :currentTime ORDER BY nextReviewTime ASC")
    fun getDueWordsByDeck(deckId: Long, currentTime: Long): Flow<List<WordEntity>>

    @Query("SELECT COUNT(*) FROM words WHERE nextReviewTime <= :currentTime")
    suspend fun getDueWordsCount(currentTime: Long): Int

    @Insert(onConflict = OnConflictStrategy.REPLACE)
    suspend fun insertWord(word: WordEntity): Long

    @Insert(onConflict = OnConflictStrategy.REPLACE)
    suspend fun insertWords(words: List<WordEntity>)

    @Update
    suspend fun updateWord(word: WordEntity)

    @Query("SELECT COUNT(*) FROM decks")
    suspend fun getDeckCount(): Int
}
