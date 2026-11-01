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

    /** Từ mới nhất (theo thời gian tạo) — dùng cho mục "Từ vừa thêm" ở Trang chủ. */
    fun getRecentWords(limit: Int = 6): Flow<List<WordItem>> {
        return wordDao.getRecentWords(limit).map { entities ->
            entities.map { it.toModel() }
        }
    }

    // ===== CRUD đầy đủ (quản lý Bộ từ & Từ vựng) =====

    /** Nạp danh sách từ của 1 bộ (stream, tự refresh khi Room đổi). */
    fun getWordsByDeckFlow(deckId: Long): Flow<List<WordItem>> {
        return wordDao.getWordsByDeck(deckId).map { entities ->
            entities.map { it.toModel() }
        }
    }

    suspend fun getDeckById(deckId: Long): DeckEntity? = wordDao.getDeckById(deckId)

    /** Stream 1 bộ từ (tự refresh khi đổi) — cho màn chi tiết bộ từ. */
    fun deckById(deckId: Long): Flow<DeckEntity?> = wordDao.getDeckFlow(deckId)

    suspend fun getWordById(wordId: Long): WordEntity? = wordDao.getWordById(wordId)

    /** Lấy 1 từ dưới dạng model (dùng cho sheet chi tiết từ từ Trang chủ). */
    suspend fun getWordItemById(wordId: Long): WordItem? =
        wordDao.getWordById(wordId)?.toModel()

    /** Kiểm tra chống trùng từ trong cùng 1 bộ (bỏ hoa thường, khớp web). */
    suspend fun hasTermInDeck(deckId: Long, term: String): Boolean {
        return wordDao.countWordsByTermInDeck(deckId, term) > 0
    }

    suspend fun insertWord(word: WordEntity): Long = wordDao.insertWord(word)

    /** Thêm từ mới (id auto-gen) — trả về id của từ vừa tạo. */
    suspend fun addWord(word: WordEntity): Long {
        val id = wordDao.insertWord(word)
        return id
    }

    suspend fun updateWord(word: WordEntity) = wordDao.updateWord(word)

    suspend fun deleteWord(wordId: Long) = wordDao.deleteWord(wordId)

    suspend fun updateDeck(deck: DeckEntity) = wordDao.updateDeck(deck)

    /** Xóa bộ + toàn bộ từ trong bộ (CASCADE trong Room, nhưng xóa cả Firestore). */
    suspend fun deleteDeck(deckId: Long) = wordDao.deleteDeck(deckId)

    /** Lấy toàn bộ từ của 1 bộ (snapshot, dùng cho reset tiến độ / sync). */
    suspend fun getWordsOfDeck(deckId: Long): List<WordEntity> =
        wordDao.getWordsByDeckSync(deckId)

    suspend fun resetProgressOfWord(word: WordEntity): WordEntity {
        val now = System.currentTimeMillis()
        val reset = word.copy(level = WordLevel.NEW.name, nextReviewTime = now, reviewCount = 0)
        wordDao.updateWord(reset)
        return reset
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
            partOfSpeech = partOfSpeech,
            example = example,
            level = wordLevel,
            nextReviewTime = nextReviewTime,
            reviewCount = reviewCount,
            createdAt = createdAt
        )
    }

    private fun WordItem.toEntity(): WordEntity {
        return WordEntity(
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
            createdAt = createdAt.takeIf { it > 0 } ?: System.currentTimeMillis()
        )
    }
}
