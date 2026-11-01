package com.tung.wordnest.data.local

import android.content.Context
import org.json.JSONArray
import org.json.JSONObject

/**
 * Lưu ghi chú & việc cần làm trên máy.
 *
 * Cấu trúc ghép với web:
 * - EnglishNoteItem: { id, structure, explanation, createdAt, updatedAt }
 *   (app dùng title/content/example/tag -> map khi push)
 * - LifeTask (todo): { id, title, done, time }
 *
 * Khi có tài khoản Google, push/pull qua Firestore:
 *   users/{uid}.englishNotes  (mảng object)
 *   users/{uid}.lifeData.dailyTasks  (web dùng; app lưu mảng riêng "todos")
 */
data class StoredNote(
    val id: String,
    val title: String,
    val content: String,
    val example: String?,
    val tag: String,
    val createdAt: Long
)

data class StoredTodo(
    val id: String,
    val title: String,
    val timeStr: String?,
    val isDone: Boolean
)

class SyncStateStore(context: Context) {
    private val prefs = context.getSharedPreferences("wordnest_state", Context.MODE_PRIVATE)

    // ===== Notes =====
    fun getNotes(): List<StoredNote> {
        val arr = JSONArray(prefs.getString("notes", "[]") ?: "[]")
        return (0 until arr.length()).map { i ->
            val o = arr.getJSONObject(i)
            StoredNote(
                id = o.getString("id"),
                title = o.optString("title"),
                content = o.optString("content"),
                example = o.optString("example").ifBlank { null },
                tag = o.optString("tag", "Từ vựng"),
                createdAt = o.optLong("createdAt", 0L)
            )
        }
    }

    fun saveNotes(notes: List<StoredNote>) {
        val arr = JSONArray()
        notes.forEach { n ->
            val o = JSONObject()
            o.put("id", n.id)
            o.put("title", n.title)
            o.put("content", n.content)
            if (n.example != null) o.put("example", n.example)
            o.put("tag", n.tag)
            o.put("createdAt", n.createdAt)
            arr.put(o)
        }
        prefs.edit().putString("notes", arr.toString()).apply()
    }

    fun addNote(note: StoredNote) {
        val list = getNotes().toMutableList()
        list.add(note)
        saveNotes(list)
    }

    fun deleteNote(id: String) {
        saveNotes(getNotes().filterNot { it.id == id })
    }

    // ===== Todos =====
    fun getTodos(): List<StoredTodo> {
        val arr = JSONArray(prefs.getString("todos", "[]") ?: "[]")
        return (0 until arr.length()).map { i ->
            val o = arr.getJSONObject(i)
            StoredTodo(
                id = o.getString("id"),
                title = o.optString("title"),
                timeStr = o.optString("timeStr").ifBlank { null },
                isDone = o.optBoolean("isDone", false)
            )
        }
    }

    fun saveTodos(todos: List<StoredTodo>) {
        val arr = JSONArray()
        todos.forEach { t ->
            val o = JSONObject()
            o.put("id", t.id)
            o.put("title", t.title)
            if (t.timeStr != null) o.put("timeStr", t.timeStr)
            o.put("isDone", t.isDone)
            arr.put(o)
        }
        prefs.edit().putString("todos", arr.toString()).apply()
    }

    fun addTodo(todo: StoredTodo) {
        val list = getTodos().toMutableList()
        list.add(todo)
        saveTodos(list)
    }

    fun toggleTodo(id: String, isDone: Boolean) {
        saveTodos(getTodos().map { if (it.id == id) it.copy(isDone = isDone) else it })
    }

    fun deleteTodo(id: String) {
        saveTodos(getTodos().filterNot { it.id == id })
    }
}
