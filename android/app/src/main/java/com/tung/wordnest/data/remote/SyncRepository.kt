package com.tung.wordnest.data.remote

import android.util.Log
import com.google.firebase.firestore.FieldValue
import com.google.firebase.firestore.FirebaseFirestore
import com.google.firebase.firestore.SetOptions
import com.tung.wordnest.data.local.DeckEntity
import com.tung.wordnest.data.local.ProgressStore
import com.tung.wordnest.data.local.StoredNote
import com.tung.wordnest.data.local.StoredTodo
import com.tung.wordnest.data.local.SyncStateStore
import com.tung.wordnest.data.local.WordDao
import com.tung.wordnest.data.local.WordEntity
import kotlinx.coroutines.tasks.await

class SyncRepository(
    private val wordDao: WordDao,
    private val progressStore: ProgressStore,
    private val stateStore: SyncStateStore,
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
                        partOfSpeech = wordDoc.getString("partOfSpeech") ?: "",
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
                    "partOfSpeech" to word.partOfSpeech,
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

    /** Sửa nội dung bộ từ (name/emoji/description) — Room + Firestore merge. */
    suspend fun updateDeckAndSync(userId: String?, deck: DeckEntity): Result<Unit> {
        return try {
            wordDao.updateDeck(deck)
            if (userId != null) {
                val deckRef = firestore.collection("users").document(userId)
                    .collection("decks").document(deck.id.toString())
                deckRef.set(
                    mapOf(
                        "name" to deck.name,
                        "emoji" to deck.emoji,
                        "description" to deck.description
                    ),
                    SetOptions.merge()
                ).await()
            }
            Result.success(Unit)
        } catch (e: Exception) {
            Log.e("SyncRepository", "Lỗi sửa bộ từ", e)
            Result.failure(e)
        }
    }

    /**
     * Sửa nội dung từ (term/meaning/phonetic/partOfSpeech/example) — Room REPLACE
     * (giữ nguyên id) + Firestore merge (giữ level/nextReview/reviewCount SRS).
     * Đầy đủ cho hành động "Sửa từ".
     */
    suspend fun updateWordAndSync(userId: String?, word: WordEntity): Result<Unit> {
        return try {
            wordDao.insertWord(word) // id cố định + REPLACE → cập nhật
            if (userId != null) {
                val wordRef = firestore.collection("users").document(userId)
                    .collection("decks").document(word.deckId.toString())
                    .collection("words").document(word.id.toString())
                val data = mapOf(
                    "term" to word.term,
                    "meaning" to word.meaning,
                    "phonetic" to word.phonetic,
                    "partOfSpeech" to word.partOfSpeech,
                    "example" to word.example
                )
                wordRef.set(data, SetOptions.merge()).await()
            }
            Result.success(Unit)
        } catch (e: Exception) {
            Log.e("SyncRepository", "Lỗi sửa từ", e)
            Result.failure(e)
        }
    }

    /** Xóa 1 từ — Room + Firestore. */
    suspend fun deleteWordAndSync(userId: String?, wordId: Long, deckId: Long): Result<Unit> {
        return try {
            wordDao.deleteWord(wordId)
            if (userId != null) {
                val wordRef = firestore.collection("users").document(userId)
                    .collection("decks").document(deckId.toString())
                    .collection("words").document(wordId.toString())
                wordRef.delete().await()
            }
            Result.success(Unit)
        } catch (e: Exception) {
            Log.e("SyncRepository", "Lỗi xóa từ", e)
            Result.failure(e)
        }
    }

    // ============================================================
    // 2-CHUỀU: tiến độ học, ghi chú, việc cần làm
    // Web lưu tại users/{uid}.progress / .englishNotes / .todos
    // ============================================================

    /** Kéo progress (thời gian học, mục tiêu) từ Firestore và merge với dữ liệu máy. */
    suspend fun pullProgress(userId: String): Result<Unit> {
        return try {
            val doc = firestore.collection("users").document(userId).get().await()
            @Suppress("UNCHECKED_CAST")
            val remote: Map<String, Any> = (doc.get("progress") as? Map<String, Any>) ?: emptyMap()

            @Suppress("UNCHECKED_CAST")
            val remoteDaily: Map<String, Any> = (remote["dailySeconds"] as? Map<String, Any>) ?: emptyMap()
            @Suppress("UNCHECKED_CAST")
            val remoteCompleted: Map<String, Any> = (remote["completedDays"] as? Map<String, Any>) ?: emptyMap()
            val remoteTarget = (remote["targetMinutes"] as? Number)?.toInt() ?: 0

            // Merge: mỗi ngày lấy giá trị LỚN hơn (giây học), completed thì OR, target lấy lớn hơn
            val localDaily = progressStore.dailySeconds.toMutableMap()
            remoteDaily.forEach { key, v ->
                val n = (v as? Number)?.toInt() ?: 0
                if (n > (localDaily[key] ?: 0)) localDaily[key] = n
            }
            progressStore.dailySeconds = localDaily

            val localCompleted = progressStore.completedDays.toMutableMap()
            remoteCompleted.forEach { key, v -> if (v == true) localCompleted[key] = true }
            progressStore.completedDays = localCompleted

            if (remoteTarget > progressStore.targetMinutes) progressStore.targetMinutes = remoteTarget

            Result.success(Unit)
        } catch (e: Exception) {
            Log.e("SyncRepository", "Lỗi pull progress", e)
            Result.failure(e)
        }
    }

    /** Đẩy progress từ máy lên Firestore (merge, không đè mất dữ liệu web). */
    suspend fun pushProgress(userId: String): Result<Unit> {
        return try {
            val data = mapOf(
                "progress" to mapOf(
                    "dailySeconds" to progressStore.dailySeconds,
                    "completedDays" to progressStore.completedDays,
                    "targetMinutes" to progressStore.targetMinutes
                )
            )
            firestore.collection("users").document(userId)
                .set(data, SetOptions.merge()).await()
            Result.success(Unit)
        } catch (e: Exception) {
            Log.e("SyncRepository", "Lỗi push progress", e)
            Result.failure(e)
        }
    }

    /** Kéo ghi chú (englishNotes) từ Firestore → máy. */
    suspend fun pullNotes(userId: String): Result<Unit> {
        return try {
            val doc = firestore.collection("users").document(userId).get().await()
            @Suppress("UNCHECKED_CAST")
            val raw: List<Map<String, Any>> = (doc.get("englishNotes") as? List<Map<String, Any>>) ?: emptyList()
            val byId = stateStore.getNotes().associateBy { it.id }.toMutableMap()
            raw.forEach { m ->
                val id = (m["id"] as? String) ?: return@forEach
                // Map web {structure, explanation} → app {title, content}
                val title = (m["structure"] as? String) ?: (m["title"] as? String) ?: ""
                val content = (m["explanation"] as? String) ?: (m["content"] as? String) ?: ""
                val example = (m["example"] as? String).takeIf { !it.isNullOrBlank() }
                val createdAt = (m["createdAt"] as? Number)?.toLong() ?: 0L
                val tag = (m["tag"] as? String) ?: "Ngữ pháp"
                byId[id] = StoredNote(id, title, content, example, tag, createdAt)
            }
            stateStore.saveNotes(byId.values.toList())
            Result.success(Unit)
        } catch (e: Exception) {
            Log.e("SyncRepository", "Lỗi pull notes", e)
            Result.failure(e)
        }
    }

    /** Đẩy ghi chú từ máy lên Firestore (map app → web {structure, explanation}). */
    suspend fun pushNotes(userId: String): Result<Unit> {
        return try {
            val notes = stateStore.getNotes()
            val arr = notes.map { n ->
                mapOf(
                    "id" to n.id,
                    "structure" to n.title,
                    "explanation" to (n.example?.let { "${n.content}\nVD: $it" } ?: n.content),
                    "tag" to n.tag,
                    "createdAt" to n.createdAt
                )
            }
            firestore.collection("users").document(userId)
                .set(mapOf("englishNotes" to arr), SetOptions.merge()).await()
            Result.success(Unit)
        } catch (e: Exception) {
            Log.e("SyncRepository", "Lỗi push notes", e)
            Result.failure(e)
        }
    }

    /** Kéo việc cần làm từ Firestore → máy. */
    suspend fun pullTodos(userId: String): Result<Unit> {
        return try {
            val doc = firestore.collection("users").document(userId).get().await()
            @Suppress("UNCHECKED_CAST")
            val raw: List<Map<String, Any>> = (doc.get("todos") as? List<Map<String, Any>>) ?: emptyList()
            val byId = stateStore.getTodos().associateBy { it.id }.toMutableMap()
            raw.forEach { m ->
                val id = (m["id"] as? String) ?: return@forEach
                byId[id] = StoredTodo(
                    id = id,
                    title = (m["title"] as? String) ?: "",
                    timeStr = (m["timeStr"] as? String).takeIf { !it.isNullOrBlank() },
                    isDone = (m["isDone"] as? Boolean) ?: false
                )
            }
            stateStore.saveTodos(byId.values.toList())
            Result.success(Unit)
        } catch (e: Exception) {
            Log.e("SyncRepository", "Lỗi pull todos", e)
            Result.failure(e)
        }
    }

    /** Đẩy việc cần làm từ máy lên Firestore. */
    suspend fun pushTodos(userId: String): Result<Unit> {
        return try {
            val todos = stateStore.getTodos()
            val arr = todos.map { t ->
                mapOf(
                    "id" to t.id,
                    "title" to t.title,
                    "timeStr" to (t.timeStr ?: ""),
                    "isDone" to t.isDone
                )
            }
            firestore.collection("users").document(userId)
                .set(mapOf("todos" to arr), SetOptions.merge()).await()
            Result.success(Unit)
        } catch (e: Exception) {
            Log.e("SyncRepository", "Lỗi push todos", e)
            Result.failure(e)
        }
    }

    /**
     * Đồng bộ TOÀN BỘ: kéo mọi thứ từ Firestore về máy, rồi đẩy (merge) lại những thứ
     * có trên máy mà chưa có trên cloud. Dùng ngay sau khi đăng nhập & khi "Đồng bộ ngay".
     */
    suspend fun syncAll(userId: String): Result<Unit> {
        val results = mutableListOf<Result<Unit>>()
        results += syncDecksAndWords(userId)
        results += pullProgress(userId)
        results += pullNotes(userId)
        results += pullTodos(userId)
        // Đẩy ngược (merge) dữ liệu local lên cloud
        results += pushProgress(userId)
        results += pushNotes(userId)
        results += pushTodos(userId)
        return if (results.all { it.isSuccess }) Result.success(Unit)
        else Result.failure(Exception("Đồng bộ một phần — có lỗi: " +
            results.filter { it.isFailure }.joinToString(" | ") { it.exceptionOrNull()?.message ?: "" }))
    }

    suspend fun deleteDeckAndSync(userId: String?, deckId: Long): Result<Unit> {
        return try {
            wordDao.deleteWordsOfDeck(deckId)
            wordDao.deleteDeck(deckId)

            if (userId != null) {
                val deckRef = firestore.collection("users").document(userId)
                    .collection("decks").document(deckId.toString())
                
                val wordsSnapshot = deckRef.collection("words").get().await()
                val batch = firestore.batch()
                for (doc in wordsSnapshot.documents) {
                    batch.delete(doc.reference)
                }
                batch.delete(deckRef)
                batch.commit().await()
            }
            Result.success(Unit)
        } catch (e: Exception) {
            Log.e("SyncRepository", "Lỗi xóa bộ từ", e)
            Result.failure(e)
        }
    }

    suspend fun resetDeckProgressAndSync(userId: String?, deckId: Long): Result<Unit> {
        return try {
            val words = wordDao.getWordsByDeckSync(deckId)
            val batch = firestore.batch()
            
            for (word in words) {
                val resetWord = word.copy(
                    level = "new",
                    nextReviewTime = System.currentTimeMillis(),
                    reviewCount = 0
                )
                wordDao.updateWord(resetWord)
                
                if (userId != null) {
                    val wordRef = firestore.collection("users").document(userId)
                        .collection("decks").document(deckId.toString())
                        .collection("words").document(word.id.toString())
                        
                    batch.set(wordRef, mapOf(
                        "level" to "new",
                        "nextReviewTime" to resetWord.nextReviewTime,
                        "reviewCount" to 0
                    ), SetOptions.merge())
                }
            }
            
            if (userId != null) {
                batch.commit().await()
            }
            Result.success(Unit)
        } catch (e: Exception) {
            Log.e("SyncRepository", "Lỗi reset tiến độ bộ từ", e)
            Result.failure(e)
        }
    }

    suspend fun pushExamHistory(userId: String, entry: ExamHistoryEntry): Result<Unit> {
        return try {
            val userDocRef = firestore.collection("users").document(userId)
            val snapshot = userDocRef.get().await()
            val currentList = (snapshot.get("examHistory") as? List<*>)?.mapNotNull {
                it as? Map<String, Any>
            } ?: emptyList()

            val newEntryMap = mapOf(
                "testId" to entry.testId,
                "kind" to entry.kind,
                "score" to entry.score,
                "date" to entry.date
            )
            val updatedList = (listOf(newEntryMap) + currentList).take(50)
            userDocRef.set(mapOf("examHistory" to updatedList), SetOptions.merge()).await()
            Log.d("SyncRepository", "Đã đồng bộ examHistory thành công cho user: $userId")
            Result.success(Unit)
        } catch (e: Exception) {
            Log.e("SyncRepository", "Lỗi đồng bộ examHistory", e)
            Result.failure(e)
        }
    }
}

data class ExamHistoryEntry(
    val testId: String,
    val kind: String, // "reading" | "listening" | "intensive"
    val score: Int,
    val date: String // ISO "yyyy-MM-dd'T'HH:mm:ss"
)