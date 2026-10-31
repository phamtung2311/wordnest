package com.tung.wordnest.ui.listening

import android.content.Context
import androidx.lifecycle.ViewModel
import androidx.media3.common.MediaItem
import androidx.media3.common.Player
import androidx.media3.exoplayer.ExoPlayer
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.flow.update

data class ListeningSegment(
    val id: Int,
    val title: String,
    val audioUrl: String,
    val transcript: String,
    val translation: String,
    val startTimeMs: Long = 0,
    val endTimeMs: Long = 5000
)

data class IntensiveListeningUiState(
    val currentSegmentIndex: Int = 0,
    val userInput: String = "",
    val isAnswerRevealed: Boolean = false,
    val isCorrect: Boolean? = null,
    val isPlaying: Boolean = false,
    val segments: List<ListeningSegment> = listOf(
        ListeningSegment(
            id = 1,
            title = "TOEIC Part 1 - Photo 1",
            audioUrl = "https://actions.google.com/sounds/v1/speech/greeting_male.ogg",
            transcript = "They are sitting at a table.",
            translation = "Họ đang ngồi ở một cái bàn.",
            startTimeMs = 0,
            endTimeMs = 3000
        ),
        ListeningSegment(
            id = 2,
            title = "TOEIC Part 1 - Photo 2",
            audioUrl = "https://actions.google.com/sounds/v1/speech/greeting_male.ogg",
            transcript = "The man is pointing at a screen.",
            translation = "Người đàn ông đang chỉ vào màn hình.",
            startTimeMs = 0,
            endTimeMs = 4000
        ),
        ListeningSegment(
            id = 3,
            title = "TOEIC Part 2 - Question 1",
            audioUrl = "https://actions.google.com/sounds/v1/speech/greeting_male.ogg",
            transcript = "Where is the new branch office located?",
            translation = "Chi nhánh văn phòng mới nằm ở đâu?",
            startTimeMs = 0,
            endTimeMs = 4500
        ),
        ListeningSegment(
            id = 4,
            title = "TOEIC Part 2 - Question 2",
            audioUrl = "https://actions.google.com/sounds/v1/speech/greeting_male.ogg",
            transcript = "Who is in charge of training the new employees?",
            translation = "Ai là người phụ trách đào tạo nhân viên mới?",
            startTimeMs = 0,
            endTimeMs = 4500
        ),
        ListeningSegment(
            id = 5,
            title = "TOEIC Part 2 - Question 3",
            audioUrl = "https://actions.google.com/sounds/v1/speech/greeting_male.ogg",
            transcript = "Would you like me to book the flight for you?",
            translation = "Bạn có muốn tôi đặt vé chuyến bay cho bạn không?",
            startTimeMs = 0,
            endTimeMs = 4500
        )
    )
) {
    val currentSegment: ListeningSegment?
        get() = if (segments.isNotEmpty() && currentSegmentIndex in segments.indices) segments[currentSegmentIndex] else null
}

class IntensiveListeningViewModel : ViewModel() {

    private val _uiState = MutableStateFlow(IntensiveListeningUiState())
    val uiState: StateFlow<IntensiveListeningUiState> = _uiState.asStateFlow()

    private var exoPlayer: ExoPlayer? = null

    fun initPlayer(context: Context) {
        if (exoPlayer == null) {
            exoPlayer = ExoPlayer.Builder(context).build().apply {
                addListener(object : Player.Listener {
                    override fun onIsPlayingChanged(isPlaying: Boolean) {
                        _uiState.update { it.copy(isPlaying = isPlaying) }
                    }
                })
            }
        }
    }

    fun playCurrentSegment() {
        val segment = _uiState.value.currentSegment ?: return
        exoPlayer?.let { player ->
            player.setMediaItem(MediaItem.fromUri(segment.audioUrl))
            player.prepare()
            player.play()
        }
    }

    fun stopAudio() {
        exoPlayer?.pause()
    }

    fun updateUserInput(input: String) {
        _uiState.update { it.copy(userInput = input) }
    }

    fun checkAnswer() {
        val current = _uiState.value.currentSegment ?: return
        val normalizedUser = _uiState.value.userInput.trim().lowercase().replace(Regex("[^a-zA-Z0-9 ]"), "")
        val normalizedCorrect = current.transcript.trim().lowercase().replace(Regex("[^a-zA-Z0-9 ]"), "")

        val correct = normalizedUser == normalizedCorrect
        _uiState.update {
            it.copy(
                isAnswerRevealed = true,
                isCorrect = correct
            )
        }
    }

    fun nextSegment() {
        if (_uiState.value.currentSegmentIndex < _uiState.value.segments.size - 1) {
            _uiState.update {
                it.copy(
                    currentSegmentIndex = it.currentSegmentIndex + 1,
                    userInput = "",
                    isAnswerRevealed = false,
                    isCorrect = null
                )
            }
            playCurrentSegment()
        }
    }

    override fun onCleared() {
        super.onCleared()
        exoPlayer?.release()
        exoPlayer = null
    }
}
