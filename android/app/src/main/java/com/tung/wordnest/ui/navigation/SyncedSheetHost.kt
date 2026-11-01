package com.tung.wordnest.ui.navigation

import android.speech.tts.TextToSpeech
import android.util.Log
import androidx.compose.runtime.*
import androidx.compose.ui.Modifier
import androidx.compose.ui.platform.LocalContext
import com.tung.wordnest.WordNestApplication
import com.tung.wordnest.data.local.ProgressStore
import com.tung.wordnest.data.local.StoredNote
import com.tung.wordnest.data.local.StoredTodo
import com.tung.wordnest.data.local.SyncStateStore
import com.tung.wordnest.ui.components.sheets.NotebookSheet
import com.tung.wordnest.ui.components.sheets.NoteUiModel
import com.tung.wordnest.ui.components.sheets.QuickTranslateSheet
import com.tung.wordnest.ui.components.sheets.StudyTimerSheet
import com.tung.wordnest.ui.components.sheets.TodoSheet
import com.tung.wordnest.ui.components.sheets.TodoUiModel
import com.google.firebase.auth.FirebaseAuth
import com.tung.wordnest.data.local.WordEntity
import com.tung.wordnest.data.model.WordLevel
import com.tung.wordnest.ui.components.sheets.TranslateResult
import kotlinx.coroutines.delay
import kotlinx.coroutines.isActive
import kotlinx.coroutines.cancel
import kotlinx.coroutines.launch
import org.json.JSONArray
import java.net.HttpURLConnection
import java.net.URL
import java.util.Locale
import java.util.UUID

/**
 * Điểm truy cập nhanh (QuickDock): 4 action "Dịch nhanh / Sổ tay ghi chú /
 * Ôn từ đến hạn / Việc cần làm" giờ chạy với dữ liệu THẬT và đồng bộ 2 chiều
 * với web qua Firestore (users/{uid}.englishNotes / .todos / .progress).
 *
 * activeSheet: nhãn action đang mở (khớp actionItems trong QuickActionDock), null = đóng hết.
 */
@Composable
fun SyncedSheetHost(
    app: WordNestApplication,
    activeSheet: String?,
    onDismiss: () -> Unit,
    modifier: Modifier = Modifier
) {
    val store: SyncStateStore = app.stateStore
    val progress: ProgressStore = app.progressStore
    val scope = app.appScope
    val uid = remember { FirebaseAuth.getInstance().currentUser?.uid }

    when (activeSheet) {
        "Sổ tay ghi chú" -> {
            var notes by remember {
                mutableStateOf(store.getNotes().map { it.toUi() })
            }

            fun persist(list: List<NoteUiModel>) {
                notes = list
                scope.launch {
                    val prior = store.getNotes().associateBy { it.id }
                    val stored = list.map {
                        StoredNote(
                            id = it.id,
                            title = it.title,
                            content = it.content,
                            example = it.example,
                            tag = it.tag,
                            // giữ createdAt của note cũ nếu là sửa, mới tính khi note mới thật
                            createdAt = prior[it.id]?.createdAt ?: System.currentTimeMillis()
                        )
                    }
                    store.saveNotes(stored)
                    if (uid != null) app.syncRepository.pushNotes(uid)
                }
            }

            NotebookSheet(
                notes = notes,
                onSaveNote = { title, content, example, tag ->
                    // "Lưu" dùng cho cả tạo mới lẫn chỉnh sửa (sheet không truyền id):
                    // note đã có cùng title => giữ id/createdAt, chỉ cập nhật nội dung
                    val existing = notes.find { it.title == title }
                    val updated = NoteUiModel(
                        id = existing?.id ?: java.util.UUID.randomUUID().toString(),
                        title = title,
                        content = content,
                        example = example,
                        tag = tag
                    )
                    persist(notes.filterNot { it.id == updated.id || it.title == title } + updated)
                },
                onDeleteNote = { id -> persist(notes.filterNot { it.id == id }) },
                onDismissRequest = onDismiss,
                modifier = modifier
            )
        }

        "Việc cần làm" -> {
            var todos by remember {
                mutableStateOf(store.getTodos().map { it.toUi() })
            }
            fun persist(list: List<TodoUiModel>) {
                todos = list
                scope.launch {
                    store.saveTodos(list.map {
                        StoredTodo(it.id, it.title, it.timeStr, it.isDone)
                    })
                    if (uid != null) app.syncRepository.pushTodos(uid)
                }
            }

            TodoSheet(
                todos = todos,
                onToggleTodo = { id, done ->
                    persist(todos.map { if (it.id == id) it.copy(isDone = done) else it })
                },
                onAddTodo = { title, time, _ ->
                    persist(todos + TodoUiModel(
                        id = java.util.UUID.randomUUID().toString(),
                        title = title,
                        timeStr = time,
                        isDone = false
                    ))
                },
                onDismissRequest = onDismiss,
                modifier = modifier
            )
        }

        "Ôn từ đến hạn" -> {
            val timer = remember { StudySessionTimer(progress, app.appScope) }
            var displaySec by remember { mutableStateOf(progress.getSecondsOn(ProgressStore.todayKey())) }
            var paused by remember { mutableStateOf(false) }

            DisposableEffect(Unit) {
                timer.start()
                val job = scope.launch {
                    while (true) {
                        kotlinx.coroutines.delay(1000)
                        displaySec = progress.getSecondsOn(ProgressStore.todayKey())
                    }
                }
                onDispose {
                    timer.stop()
                    job.cancel()
                }
            }

            StudyTimerSheet(
                timeString = "%02d:%02d".format(displaySec / 60, displaySec % 60),
                isPaused = paused,
                progress = if (progress.targetMinutes > 0)
                    (displaySec.toFloat() / (progress.targetMinutes * 60)).coerceIn(0f, 1f)
                else 0f,
                todayMinutes = displaySec / 60,
                goalMinutes = progress.targetMinutes,
                onTogglePause = { paused = !paused },
                onEndSession = {
                    val u = uid
                    if (u != null) scope.launch { app.syncRepository.pushProgress(u) }
                    onDismiss()
                },
                onDismissRequest = onDismiss,
                modifier = modifier
            )
        }

        "Dịch nhanh" -> {
            var tts by remember { mutableStateOf<TextToSpeech?>(null) }
            val ctx = LocalContext.current
            DisposableEffect(Unit) {
                tts = TextToSpeech(ctx) { status ->
                    if (status == TextToSpeech.SUCCESS) tts?.language = Locale.US
                }
                onDispose { tts?.shutdown() }
            }
            val recent = remember {
                store.getNotes().take(6).map { it.title }.ifEmpty { listOf("accommodate", "implement") }
            }
            val deckList = app.repository.getDecksWithCounts()
                .collectAsState(initial = emptyList())
                .value
            val deckNames = deckList.map { it.name }

            var isLoading by remember { mutableStateOf(false) }
            var isOffline by remember { mutableStateOf(false) }
            var result by remember { mutableStateOf<TranslateResult?>(null) }
            var currentWord by remember { mutableStateOf("") }

            QuickTranslateSheet(
                recentWords = recent,
                decks = deckNames,
                isLoading = isLoading,
                isOffline = isOffline,
                result = result,
                onTranslate = { word ->
                    currentWord = word
                    isLoading = true
                    isOffline = false
                    result = null
                    scope.launch {
                        try {
                            val url = URL("https://api.dictionaryapi.dev/api/v2/entries/en/${word.trim()}")
                            val conn = url.openConnection() as HttpURLConnection
                            conn.connectTimeout = 10000
                            conn.readTimeout = 10000
                            
                            if (conn.responseCode == 200) {
                                val jsonStr = conn.inputStream.bufferedReader().use { it.readText() }
                                val jsonArray = JSONArray(jsonStr)
                                if (jsonArray.length() > 0) {
                                    val firstEntry = jsonArray.getJSONObject(0)
                                    val phoneticStr = firstEntry.optString("phonetic", "")
                                    val phonetic = if (phoneticStr.isNotEmpty()) phoneticStr else firstEntry.optJSONArray("phonetics")?.let { p ->
                                        if (p.length() > 0) p.getJSONObject(0).optString("text", "") else ""
                                    }?.takeIf { it.isNotEmpty() }
                                    
                                    val meanings = firstEntry.optJSONArray("meanings")
                                    if (meanings != null && meanings.length() > 0) {
                                        val firstMeaning = meanings.getJSONObject(0)
                                        val pos = firstMeaning.optString("partOfSpeech", null)
                                        val defs = firstMeaning.optJSONArray("definitions")
                                        if (defs != null && defs.length() > 0) {
                                            val firstDef = defs.getJSONObject(0)
                                            val definition = firstDef.optString("definition", "")
                                            val example = firstDef.optString("example", "")
                                            val meaningStr = if (example.isNotEmpty()) "$definition\nVD: $example" else definition
                                            
                                            result = TranslateResult(
                                                meaning = meaningStr,
                                                ipa = phonetic,
                                                pos = pos
                                            )
                                        }
                                    }
                                }
                            } else {
                                isOffline = true
                            }
                        } catch (e: Exception) {
                            isOffline = true
                        } finally {
                            isLoading = false
                        }
                    }
                },
                onSaveToDeck = { deckName ->
                    val deck = deckList.find { it.name == deckName }
                    if (deck != null && result != null && currentWord.isNotBlank()) {
                        val wordEntity = WordEntity(
                            deckId = deck.id,
                            term = currentWord,
                            meaning = result!!.meaning,
                            level = "new",
                            nextReviewTime = System.currentTimeMillis(),
                            reviewCount = 0
                        )
                        scope.launch {
                            try {
                                app.syncRepository.addWordAndSync(uid, deck.id, wordEntity)
                            } catch (e: Exception) {
                                Log.e("TranslateSheet", "Error saving word", e)
                            }
                        }
                    }
                },
                onPasteClick = {},
                onTTSClick = { word ->
                    tts?.speak(word, TextToSpeech.QUEUE_FLUSH, null, "word")
                },
                onRecentWordClick = {},
                onDismissRequest = onDismiss,
                modifier = modifier
            )
        }

        null -> {
            // Không sheet nào đang mở
        }

        else -> {}
    }
}

private fun StoredNote.toUi(): NoteUiModel = NoteUiModel(
    id = id,
    title = title,
    content = content,
    example = example,
    tag = tag
)

private fun StoredTodo.toUi(): TodoUiModel = TodoUiModel(
    id = id,
    title = title,
    timeStr = timeStr,
    isDone = isDone
)

/**
 * Timer phiên học "Ôn từ đến hạn": ticker đếm giây, lưu 10s/lần vào
 * ProgressStore (SharedPreferences) và push Firestore mỗi 30s (debounce),
 * khớp cấu trúc progress của web.
 */
class StudySessionTimer(
    private val progressStore: ProgressStore,
    private val scope: kotlinx.coroutines.CoroutineScope
) {
    var seconds: Int = 0
        private set
    private var pendingSeconds = 0
    private var tickJob: kotlinx.coroutines.Job? = null
    private var flushJob: kotlinx.coroutines.Job? = null

    fun start() {
        if (tickJob?.isActive == true) return
        tickJob = scope.launch {
            while (isActive) {
                delay(1000)
                seconds++
                pendingSeconds++
                if (pendingSeconds >= 10) {
                    progressStore.addSeconds(ProgressStore.todayKey(), pendingSeconds)
                    pendingSeconds = 0
                }
            }
        }
        flushJob = scope.launch {
            while (isActive) {
                delay(30_000)
                flushNow()
            }
        }
    }

    fun flushNow() {
        if (pendingSeconds > 0) {
            progressStore.addSeconds(ProgressStore.todayKey(), pendingSeconds)
            pendingSeconds = 0
        }
    }

    fun stop() {
        tickJob?.cancel()
        flushJob?.cancel()
        flushNow()
    }
}
