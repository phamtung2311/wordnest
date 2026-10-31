package com.tung.wordnest.data.repository

import com.tung.wordnest.data.local.DeckEntity
import com.tung.wordnest.data.local.WordDao
import com.tung.wordnest.data.local.WordEntity
import com.tung.wordnest.data.model.ReviewAction
import com.tung.wordnest.data.model.WordItem
import com.tung.wordnest.data.model.WordLevel
import com.tung.wordnest.data.local.DeckWithCounts
import com.tung.wordnest.domain.SrsCalculator
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.map

data class DeckItem(
    val id: Long,
    val name: String,
    val emoji: String,
    val description: String,
    val totalWords: Int,
    val dueWords: Int
)

class WordRepository(private val wordDao: WordDao) {

    fun getDecksWithCounts(currentTime: Long = System.currentTimeMillis()): Flow<List<DeckItem>> {
        return wordDao.getDecksWithCounts(currentTime).map { entities ->
            entities.map { 
                DeckItem(
                    id = it.deck.id,
                    name = it.deck.name,
                    emoji = it.deck.emoji,
                    description = it.deck.description,
                    totalWords = it.totalWords,
                    dueWords = it.dueWords
                )
            }
        }
    }

    fun getDueWords(currentTime: Long = System.currentTimeMillis()): Flow<List<WordItem>> {
        return wordDao.getDueWords(currentTime).map { entities ->
            entities.map { it.toModel() }
        }
    }

    fun getDueWordsByDeck(deckId: Long, currentTime: Long = System.currentTimeMillis()): Flow<List<WordItem>> {
        return wordDao.getDueWordsByDeck(deckId, currentTime).map { entities ->
            entities.map { it.toModel() }
        }
    }

    suspend fun checkAndSeedInitialData() {
        if (wordDao.getDeckCount() == 0) {
            val deckId = wordDao.insertDeck(SampleData.defaultDeck)
            wordDao.insertWords(SampleData.getInitialWords(deckId))
        }
    }

    suspend fun reviewWord(word: WordItem, action: ReviewAction): WordEntity {
        val srsResult = SrsCalculator.calculate(action)
        val updatedEntity = word.toEntity().copy(
            level = srsResult.newLevel.name,
            nextReviewTime = srsResult.nextReviewTime,
            reviewCount = word.reviewCount + 1
        )
        wordDao.updateWord(updatedEntity)
        return updatedEntity
    }

    private fun WordEntity.toModel(): WordItem {
        val wordLevel = try {
            WordLevel.valueOf(level)
        } catch (e: Exception) {
            WordLevel.NEW
        }
        return WordItem(
            id = id,
            deckId = deckId,
            term = term,
            meaning = meaning,
            phonetic = phonetic,
            example = example,
            level = wordLevel,
            nextReviewTime = nextReviewTime,
            reviewCount = reviewCount
        )
    }

    private fun WordItem.toEntity(): WordEntity {
        return WordEntity(
            id = id,
            deckId = deckId,
            term = term,
            meaning = meaning,
            phonetic = phonetic,
            example = example,
            level = level.name,
            nextReviewTime = nextReviewTime,
            reviewCount = reviewCount
        )
    }
}
