package com.tung.wordnest.data.remote

import android.util.Log
import com.google.firebase.firestore.FirebaseFirestore
import com.google.firebase.firestore.SetOptions
import com.tung.wordnest.data.local.DeckEntity
import com.tung.wordnest.data.local.WordDao
import com.tung.wordnest.data.local.WordEntity
import kotlinx.coroutines.tasks.await

class SyncRepository(
    private val wordDao: WordDao,
    private val firestore: FirebaseFirestore = FirebaseFirestore.getInstance()
) {
    suspend fun syncDecksAndWords(userId: String): Result<Unit> {
        return try {
            val userDecksRef = firestore.collection("users").document(userId).collection("decks")
            val decksSnapshot = userDecksRef.get().await()

            for (deckDoc in decksSnapshot.documents) {
                val deckId = deckDoc.getLong("id") ?: continue
                val name = deckDoc.getString("name") ?: ""
                val emoji = deckDoc.getString("emoji") ?: ""
                val description = deckDoc.getString("description") ?: ""

                val deckEntity = DeckEntity(
                    id = deckId,
                    name = name,
                    emoji = emoji,
                    description = description
                )
                
                // Lưu vào Room
                wordDao.insertDeck(deckEntity)

                // Kéo Words của Deck này
                val wordsSnapshot = deckDoc.reference.collection("words").get().await()
                val wordEntities = wordsSnapshot.documents.mapNotNull { wordDoc ->
                    val wordId = wordDoc.getLong("id") ?: return@mapNotNull null
                    WordEntity(
                        id = wordId,
                        deckId = deckId,
                        term = wordDoc.getString("term") ?: "",
                        meaning = wordDoc.getString("meaning") ?: "",
                        phonetic = wordDoc.getString("phonetic") ?: "",
                        example = wordDoc.getString("example") ?: "",
                        level = wordDoc.getString("level")?.uppercase() ?: "NEW", // web lưu chữ thường ("new"/"learning"/"known"), app dùng hoa
                        nextReviewTime = wordDoc.getLong("nextReview") ?: 0L,
                        createdAt = wordDoc.getLong("createdAt") ?: 0L
                    )
                }
                
                if (wordEntities.isNotEmpty()) {
                    wordDao.insertWords(wordEntities)
                }
            }
            Result.success(Unit)
        } catch (e: Exception) {
            Log.e("SyncRepository", "Lỗi đồng bộ", e)
            Result.failure(e)
        }
    }

    suspend fun pushWordUpdate(userId: String, deckId: Long, word: WordEntity): Result<Unit> {
        return try {
            // Cập nhật ngược lại Firestore trạng thái học của từ
            val wordRef = firestore.collection("users").document(userId)
                .collection("decks").document(deckId.toString())
                .collection("words").document(word.id.toString())

            // Web dùng level chữ thường ("new"/"learning"/"known") — phải push đúng case này
            val updates = mapOf(
                "level" to word.level.lowercase(),
                "nextReview" to word.nextReviewTime,
                "reviewCount" to word.reviewCount
            )
            
            // Dùng SetOptions.merge() để tránh đè mất các trường khác nếu có
            wordRef.set(updates, SetOptions.merge()).await()
            Result.success(Unit)
        } catch (e: Exception) {
            Log.e("SyncRepository", "Lỗi push update", e)
            Result.failure(e)
        }
    }

    suspend fun createDeckAndSync(userId: String?, deck: DeckEntity): Result<Long> {
        return try {
            val deckId = wordDao.insertDeck(deck)
            if (userId != null) {
                val deckRef = firestore.collection("users").document(userId)
                    .collection("decks").document(deckId.toString())
                
                val deckData = mapOf(
                    "id" to deckId,
                    "name" to deck.name,
                    "emoji" to deck.emoji,
                    "description" to deck.description,
                    "createdAt" to deck.createdAt
                )
                deckRef.set(deckData, SetOptions.merge()).await()
            }
            Result.success(deckId)
        } catch (e: Exception) {
            Log.e("SyncRepository", "Lỗi create deck", e)
            Result.failure(e)
        }
    }

    suspend fun addWordAndSync(userId: String?, deckId: Long, word: WordEntity): Result<Long> {
        return try {
            val wordId = wordDao.insertWord(word)
            if (userId != null) {
                val wordRef = firestore.collection("users").document(userId)
                    .collection("decks").document(deckId.toString())
                    .collection("words").document(wordId.toString())

                val wordData = mapOf(
                    "id" to wordId,
                    "deckId" to deckId,
                    "term" to word.term,
                    "meaning" to word.meaning,
                    "phonetic" to word.phonetic,
                    "example" to word.example,
                    "level" to word.level.lowercase(),
                    "nextReview" to word.nextReviewTime,
                    "reviewCount" to word.reviewCount,
                    "createdAt" to word.createdAt
                )
                wordRef.set(wordData, SetOptions.merge()).await()
            }
            Result.success(wordId)
        } catch (e: Exception) {
            Log.e("SyncRepository", "Lỗi add word", e)
            Result.failure(e)
        }
    }
}