package com.tung.wordnest.ui.screens.study

import androidx.lifecycle.ViewModel
import androidx.lifecycle.ViewModelProvider
import com.google.firebase.auth.FirebaseAuth
import com.tung.wordnest.data.local.ProgressStore
import com.tung.wordnest.data.model.ReviewAction
import com.tung.wordnest.data.model.WordItem
import com.tung.wordnest.data.remote.SyncRepository
import com.tung.wordnest.data.repository.WordRepository
import kotlinx.coroutines.*
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.flow.first
import kotlinx.coroutines.flow.update

/**
 * ViewModel phiên học flashcard — đồng bộ 2 chiều:
 *
 * READ  : kéo từ cần ôn từ Room (đã được sync từ Firestore khi đăng nhập).
 * WRITE : mỗi lượt đánh giá → SrsCalculator cập nhật Room, rồi pushWordUpdate
 *         ngược lên Firestore (level thường, khớp web). Thời gian học tích lũy
 *         vào ProgressStore (SharedPreferences) và pushProgress khi kết thúc
 *         phiên, web đọc lại từ users/{uid}.progress.
 *
 * Dùng appScope (sống cùng Application) cho ticker 1s để tránh
 * ForgottenCoroutineScopeException khi màn học rời composition giữa chừng.
 */
class StudySessionViewModel(
    private val repository: WordRepository,
    private val syncRepository: SyncRepository?,
    private val progressStore: ProgressStore,
    private val appScope: CoroutineScope
) : ViewModel() {

    private val _state = MutableStateFlow(
        StudySessionState(
            words = emptyList(),
            currentIndex = 0,
            isFlipped = false,
            canUndo = false,
            timerText = "00:00",
            intervals = RatingIntervals("5 phút", "1 ngày", "14 ngày"),
            isCompleted = false
        )
    )
    val state: StateFlow<StudySessionState> = _state.asStateFlow()

    private var sessionWords: List<WordItem> = emptyList()
    private var sessionSeconds = 0
    private var tickJob: Job? = null
    private var lastPushedSecond = 0

    // Đếm để tổng kết phiên
    private var mastered = 0
    private var learning = 0
    private var forgot = 0
    private val forgotTerms = mutableListOf<String>()

    /** Mở phiên ôn: deckId = null → toàn bộ từ đến hạn (mặc định), hoặc 1 deck cụ thể. */
    fun startSession(deckId: Long? = null) {
        appScope.launch {
            val due = if (deckId != null) {
                repository.getDueWordsByDeck(deckId).first()
            } else {
                repository.getDueWords().first()
            }
            sessionWords = due
            sessionSeconds = 0
            lastPushedSecond = 0
            mastered = 0; learning = 0; forgot = 0; forgotTerms.clear()

            _state.update {
                it.copy(
                    words = sessionWords.map { w -> toUiWord(w) },
                    currentIndex = 0,
                    isFlipped = false,
                    canUndo = false,
                    timerText = "00:00",
                    isCompleted = sessionWords.isEmpty()
                )
            }
            if (sessionWords.isNotEmpty()) startTicker()
        }
    }

    private fun startTicker() {
        tickJob?.cancel()
        tickJob = appScope.launch {
            while (isActive) {
                delay(1000)
                sessionSeconds++
                // Ghi nhận 1 giây học cho ngày hôm nay (key yyyy-MM-dd, khớp web)
                progressStore.addSeconds(ProgressStore.todayKey(), 1)
                _state.update { it.copy(timerText = formatTimer(sessionSeconds)) }
                // Push progress lên cloud mỗi 30s (debounce nhẹ, tránh spam Firestore)
                if (sessionSeconds - lastPushedSecond >= 30) {
                    lastPushedSecond = sessionSeconds
                    pushProgressIfLogged()
                }
            }
        }
    }

    fun flipCard() = _state.update { it.copy(isFlipped = !it.isFlipped, canUndo = true) }

    fun undo() = _state.update {
        it.copy(
            currentIndex = (it.currentIndex - 1).coerceAtLeast(0),
            isFlipped = false,
            canUndo = it.currentIndex > 1
        )
    }

    /** Đánh giá từ hiện tại → SRS (Room) + push Firestore (2 chiều). */
    fun rate(action: ReviewAction) {
        val index = _state.value.currentIndex
        val word = sessionWords.getOrNull(index) ?: return

        appScope.launch {
            val updated = repository.reviewWord(word, action)

            when (action) {
                ReviewAction.FORGOT -> { forgot++; forgotTerms.add(word.term) }
                ReviewAction.HARD -> learning++
                ReviewAction.EASY -> mastered++
            }

            // Đẩy SRS lên Firestore (level lowercase, web đọc được)
            FirebaseAuth.getInstance().currentUser?.uid?.let { uid ->
                syncRepository?.pushWordUpdate(uid, updated.deckId, updated)
            }

            val nextIndex = index + 1
            val done = nextIndex >= sessionWords.size
            _state.update {
                it.copy(
                    currentIndex = nextIndex,
                    isFlipped = false,
                    canUndo = nextIndex > 0,
                    isCompleted = done
                )
            }
            if (done) endSession()
        }
    }

    /** Kết thúc phiên: chốt progress ngày + push cloud. */
    private fun endSession() {
        tickJob?.cancel()
        val todayKey = ProgressStore.todayKey()
        if (progressStore.targetMinutes > 0 &&
            progressStore.getSecondsOn(todayKey) >= progressStore.targetMinutes * 60) {
            val completed = progressStore.completedDays.toMutableMap()
            completed[todayKey] = true
            progressStore.completedDays = completed
        }
        pushProgressIfLogged()
    }

    private fun pushProgressIfLogged() {
        val uid = FirebaseAuth.getInstance().currentUser?.uid ?: return
        val sync = syncRepository ?: return
        appScope.launch {
            sync.pushProgress(uid)
        }
    }

    fun summaryStats(): StudySummaryStats? {
        if (!_state.value.isCompleted && sessionWords.isNotEmpty()) return null
        val totalMin = sessionSeconds / 60
        val totalSec = sessionSeconds % 60
        return StudySummaryStats(
            totalTime = String.format("%d phút %02d giây", totalMin, totalSec),
            masteredCount = mastered,
            learningCount = learning,
            forgotCount = forgot,
            forgotWords = sessionWords.filter { it.term in forgotTerms }.map { toUiWord(it) }
        )
    }

    private fun toUiWord(w: WordItem): StudyWordUiModel = StudyWordUiModel(
        id = w.id.toString(),
        term = w.term,
        ipa = w.phonetic,
        pos = null,
        meaning = w.meaning,
        exampleEn = w.example,
        exampleVi = null,
        note = null,
        isNew = w.level.name == "NEW"
    )

    private fun formatTimer(totalSec: Int): String = String.format("%02d:%02d", totalSec / 60, totalSec % 60)

    companion object {
        fun factory(
            repository: WordRepository,
            syncRepository: SyncRepository?,
            progressStore: ProgressStore,
            appScope: CoroutineScope
        ): ViewModelProvider.Factory = object : ViewModelProvider.Factory {
            @Suppress("UNCHECKED_CAST")
            override fun <T : ViewModel> create(modelClass: Class<T>): T =
                StudySessionViewModel(repository, syncRepository, progressStore, appScope) as T
        }
    }
}
