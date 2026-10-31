package com.tung.wordnest.ui.screens.toeic

import androidx.compose.foundation.BorderStroke
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.SpanStyle
import androidx.compose.ui.text.buildAnnotatedString
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.text.style.TextDecoration
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.withStyle
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.tung.wordnest.ui.components.core.OutlinedWordNestButton
import com.tung.wordnest.ui.components.core.PrimaryButton
import com.tung.wordnest.ui.components.core.WordNestProgressBar
import com.tung.wordnest.ui.theme.TimerMonoStyle
import com.tung.wordnest.ui.theme.WordNestTheme

// ==========================================
// MODELS
// ==========================================
data class AudioState(
    val isPlaying: Boolean,
    val isLoading: Boolean,
    val isError: Boolean,
    val currentTimeStr: String,
    val totalTimeStr: String,
    val progress: Float,
    val isLooping: Boolean,
    val speed: Float
)

enum class DiffType { CORRECT, INCORRECT, MISSING }
data class DiffWordUiModel(val text: String, val type: DiffType, val correctText: String? = null)

data class IntensiveListeningUiState(
    val testName: String,
    val partName: String,
    val questionNumber: Int,
    val totalQuestions: Int,
    
    val audioState: AudioState,
    
    val userInput: String,
    val isChecked: Boolean,
    
    val diffResult: List<DiffWordUiModel>,
    val transcriptTranslation: String
)

// ==========================================
// SCREEN
// ==========================================
@Composable
fun IntensiveListeningScreen(
    state: IntensiveListeningUiState,
    onCloseClick: () -> Unit,
    onSelectorClick: () -> Unit,
    
    // Audio controls
    onPlayPauseClick: () -> Unit,
    onLoopToggle: () -> Unit,
    onSeekBackward: () -> Unit,
    onSeekForward: () -> Unit,
    onSpeedChangeClick: () -> Unit,
    onRetryAudioClick: () -> Unit,
    
    // Transcript
    onUserInputChange: (String) -> Unit,
    onCheckClick: () -> Unit,
    onWordClick: (String) -> Unit,
    
    // Bottom Bar
    onPrevClick: () -> Unit,
    onNextClick: () -> Unit,
    
    modifier: Modifier = Modifier
) {
    Scaffold(
        modifier = modifier.fillMaxSize(),
        containerColor = WordNestTheme.colors.background,
        contentWindowInsets = WindowInsets.systemBars,
        topBar = {
            TopBar(
                testName = state.testName,
                partName = state.partName,
                questionNumber = state.questionNumber,
                onCloseClick = onCloseClick,
                onSelectorClick = onSelectorClick
            )
        },
        bottomBar = {
            BottomNavigationRow(
                currentQ = state.questionNumber,
                totalQ = state.totalQuestions,
                onPrevClick = onPrevClick,
                onNextClick = onNextClick
            )
        }
    ) { innerPadding ->
        Column(
            modifier = Modifier
                .padding(innerPadding)
                .fillMaxSize()
                .imePadding() // Tối ưu bàn phím ảo
                .padding(horizontal = 16.dp),
            verticalArrangement = Arrangement.spacedBy(16.dp)
        ) {
            Spacer(modifier = Modifier.height(8.dp))
            
            // Audio Card
            AudioControlCard(
                audioState = state.audioState,
                onPlayPauseClick = onPlayPauseClick,
                onLoopToggle = onLoopToggle,
                onSeekBackward = onSeekBackward,
                onSeekForward = onSeekForward,
                onSpeedChangeClick = onSpeedChangeClick,
                onRetryAudioClick = onRetryAudioClick
            )

            // Transcript Area
            if (!state.isChecked) {
                TranscriptInputArea(
                    userInput = state.userInput,
                    onUserInputChange = onUserInputChange,
                    onCheckClick = onCheckClick
                )
            } else {
                TranscriptResultArea(
                    diffResult = state.diffResult,
                    translation = state.transcriptTranslation,
                    onWordClick = onWordClick
                )
            }
        }
    }
}

// ==========================================
// COMPONENTS
// ==========================================
@Composable
private fun TopBar(
    testName: String,
    partName: String,
    questionNumber: Int,
    onCloseClick: () -> Unit,
    onSelectorClick: () -> Unit
) {
    Row(
        modifier = Modifier
            .fillMaxWidth()
            .height(56.dp)
            .padding(horizontal = 8.dp),
        verticalAlignment = Alignment.CenterVertically,
        horizontalArrangement = Arrangement.SpaceBetween
    ) {
        IconButton(onClick = onCloseClick) {
            Icon(Icons.Default.Close, contentDescription = "Close", tint = WordNestTheme.colors.ink900)
        }
        
        Surface(
            onClick = onSelectorClick,
            shape = CircleShape,
            color = WordNestTheme.colors.surface,
            border = BorderStroke(1.dp, WordNestTheme.colors.line200)
        ) {
            Row(
                modifier = Modifier.padding(horizontal = 12.dp, vertical = 6.dp),
                verticalAlignment = Alignment.CenterVertically,
                horizontalArrangement = Arrangement.spacedBy(4.dp)
            ) {
                Text(
                    text = "$testName • $partName • Q$questionNumber",
                    style = WordNestTheme.typography.labelMedium,
                    color = WordNestTheme.colors.ink900
                )
                Icon(Icons.Default.ArrowDropDown, contentDescription = null, tint = WordNestTheme.colors.slate500, modifier = Modifier.size(18.dp))
            }
        }
        
        // Cân bằng layout
        IconButton(onClick = { }, enabled = false) {
            Icon(Icons.Default.Close, contentDescription = null, tint = Color.Transparent)
        }
    }
}

@Composable
private fun AudioControlCard(
    audioState: AudioState,
    onPlayPauseClick: () -> Unit,
    onLoopToggle: () -> Unit,
    onSeekBackward: () -> Unit,
    onSeekForward: () -> Unit,
    onSpeedChangeClick: () -> Unit,
    onRetryAudioClick: () -> Unit
) {
    Surface(
        shape = WordNestTheme.shapes.medium, // 20.dp
        color = WordNestTheme.colors.surface,
        border = BorderStroke(1.dp, WordNestTheme.colors.line200),
        modifier = Modifier.fillMaxWidth()
    ) {
        if (audioState.isError) {
            Column(
                modifier = Modifier.padding(24.dp),
                horizontalAlignment = Alignment.CenterHorizontally
            ) {
                Text("Không tải được audio", style = WordNestTheme.typography.bodyMedium, color = WordNestTheme.colors.error600)
                Spacer(modifier = Modifier.height(12.dp))
                PrimaryButton(text = "Thử lại", onClick = onRetryAudioClick)
            }
        } else {
            Column(modifier = Modifier.padding(16.dp)) {
                // Waveform / Slider mockup
                Row(verticalAlignment = Alignment.CenterVertically, horizontalArrangement = Arrangement.spacedBy(12.dp)) {
                    Text(audioState.currentTimeStr, style = TimerMonoStyle, color = WordNestTheme.colors.slate500)
                    Box(modifier = Modifier.weight(1f)) {
                        WordNestProgressBar(progress = audioState.progress, height = 4.dp, progressColor = WordNestTheme.colors.amber500)
                    }
                    Text(audioState.totalTimeStr, style = TimerMonoStyle, color = WordNestTheme.colors.slate500)
                }
                
                Spacer(modifier = Modifier.height(20.dp))
                
                // Controls
                Row(
                    modifier = Modifier.fillMaxWidth(),
                    verticalAlignment = Alignment.CenterVertically,
                    horizontalArrangement = Arrangement.SpaceBetween
                ) {
                    // Loop
                    IconButton(onClick = onLoopToggle) {
                        Icon(
                            imageVector = Icons.Default.Loop,
                            contentDescription = "Loop",
                            tint = if (audioState.isLooping) WordNestTheme.colors.amber500 else WordNestTheme.colors.slate400
                        )
                    }
                    
                    // -5s
                    IconButton(onClick = onSeekBackward) {
                        Icon(Icons.Default.Replay5, contentDescription = "-5s", tint = WordNestTheme.colors.ink900)
                    }
                    
                    // Play/Pause
                    Box(
                        modifier = Modifier
                            .size(56.dp)
                            .clip(CircleShape)
                            .background(WordNestTheme.colors.forest900)
                            .clickable(onClick = onPlayPauseClick),
                        contentAlignment = Alignment.Center
                    ) {
                        if (audioState.isLoading) {
                            CircularProgressIndicator(modifier = Modifier.size(24.dp), color = WordNestTheme.colors.amber500, strokeWidth = 2.dp)
                        } else {
                            Icon(
                                imageVector = if (audioState.isPlaying) Icons.Default.Pause else Icons.Default.PlayArrow,
                                contentDescription = "Play/Pause",
                                tint = WordNestTheme.colors.amber500,
                                modifier = Modifier.size(32.dp)
                            )
                        }
                    }
                    
                    // +5s
                    IconButton(onClick = onSeekForward) {
                        Icon(Icons.Default.Forward5, contentDescription = "+5s", tint = WordNestTheme.colors.ink900)
                    }
                    
                    // Speed
                    TextButton(onClick = onSpeedChangeClick, contentPadding = PaddingValues(0.dp)) {
                        Text("${audioState.speed}x", style = WordNestTheme.typography.labelMedium.copy(fontWeight = FontWeight.Bold), color = WordNestTheme.colors.ink900)
                    }
                }
            }
        }
    }
}

@Composable
private fun TranscriptInputArea(
    userInput: String,
    onUserInputChange: (String) -> Unit,
    onCheckClick: () -> Unit
) {
    Column(modifier = Modifier.fillMaxWidth()) {
        OutlinedTextField(
            value = userInput,
            onValueChange = onUserInputChange,
            placeholder = { Text("Nghe và gõ lại chính xác câu bạn nghe được...", color = WordNestTheme.colors.slate400) },
            modifier = Modifier
                .fillMaxWidth()
                .height(200.dp),
            textStyle = WordNestTheme.typography.bodyMedium.copy(color = WordNestTheme.colors.ink900),
            colors = OutlinedTextFieldDefaults.colors(
                unfocusedContainerColor = WordNestTheme.colors.beige100,
                focusedContainerColor = WordNestTheme.colors.surface,
                unfocusedBorderColor = Color.Transparent,
                focusedBorderColor = WordNestTheme.colors.forest900
            ),
            shape = WordNestTheme.shapes.small // 14.dp
        )
        
        Spacer(modifier = Modifier.height(16.dp))
        
        PrimaryButton(
            text = "Kiểm tra",
            onClick = onCheckClick,
            modifier = Modifier.fillMaxWidth(),
            enabled = userInput.isNotBlank()
        )
    }
}

@Composable
private fun TranscriptResultArea(
    diffResult: List<DiffWordUiModel>,
    translation: String,
    onWordClick: (String) -> Unit
) {
    Column(modifier = Modifier.fillMaxWidth()) {
        Text("Kết quả đối chiếu", style = WordNestTheme.typography.titleMedium, color = WordNestTheme.colors.ink900)
        Spacer(modifier = Modifier.height(12.dp))
        
        Surface(
            shape = WordNestTheme.shapes.small,
            color = WordNestTheme.colors.surface,
            border = BorderStroke(1.dp, WordNestTheme.colors.line200),
            modifier = Modifier.fillMaxWidth()
        ) {
            Column(modifier = Modifier.padding(16.dp)) {
                // Diff Text
                val annotatedString = buildAnnotatedString {
                    diffResult.forEach { word ->
                        when (word.type) {
                            DiffType.CORRECT -> {
                                withStyle(SpanStyle(color = WordNestTheme.colors.mint500, fontWeight = FontWeight.Bold)) {
                                    append(word.text)
                                }
                                append(" ")
                            }
                            DiffType.INCORRECT -> {
                                withStyle(SpanStyle(color = WordNestTheme.colors.coral500, textDecoration = TextDecoration.LineThrough)) {
                                    append(word.text)
                                }
                                append(" ")
                                if (word.correctText != null) {
                                    withStyle(SpanStyle(color = WordNestTheme.colors.mint500, fontWeight = FontWeight.Bold)) {
                                        append(word.correctText)
                                    }
                                    append(" ")
                                }
                            }
                            DiffType.MISSING -> {
                                withStyle(SpanStyle(color = WordNestTheme.colors.mint500, fontWeight = FontWeight.Bold)) {
                                    append(word.text)
                                }
                                append(" ")
                            }
                        }
                    }
                }
                
                Text(
                    text = annotatedString,
                    style = WordNestTheme.typography.bodyMedium.copy(fontSize = 16.sp, lineHeight = 24.sp)
                )
                
                Spacer(modifier = Modifier.height(16.dp))
                HorizontalDivider(color = WordNestTheme.colors.line200)
                Spacer(modifier = Modifier.height(16.dp))
                
                Text("Dịch nghĩa:", style = WordNestTheme.typography.labelSmall, color = WordNestTheme.colors.slate500)
                Spacer(modifier = Modifier.height(4.dp))
                Text(translation, style = WordNestTheme.typography.bodyMedium, color = WordNestTheme.colors.ink900)
                
                Spacer(modifier = Modifier.height(16.dp))
                Text(
                    text = "(Chạm vào từ bị sai ở trên để thêm vào Bộ từ vựng - Mô phỏng)",
                    style = WordNestTheme.typography.labelMedium,
                    color = WordNestTheme.colors.amber500,
                    textAlign = TextAlign.Center,
                    modifier = Modifier.fillMaxWidth()
                )
            }
        }
    }
}

@Composable
private fun BottomNavigationRow(
    currentQ: Int,
    totalQ: Int,
    onPrevClick: () -> Unit,
    onNextClick: () -> Unit
) {
    Surface(
        color = WordNestTheme.colors.surface,
        border = BorderStroke(1.dp, WordNestTheme.colors.line200),
        modifier = Modifier.fillMaxWidth()
    ) {
        Row(
            modifier = Modifier
                .fillMaxWidth()
                .padding(horizontal = 16.dp, vertical = 12.dp),
            horizontalArrangement = Arrangement.SpaceBetween,
            verticalAlignment = Alignment.CenterVertically
        ) {
            OutlinedWordNestButton(
                text = "Câu trước",
                onClick = onPrevClick,
                enabled = currentQ > 1,
                modifier = Modifier.weight(1f)
            )
            
            Text(
                text = "$currentQ / $totalQ",
                style = WordNestTheme.typography.labelMedium.copy(fontWeight = FontWeight.Bold),
                color = WordNestTheme.colors.slate500,
                textAlign = TextAlign.Center,
                modifier = Modifier.weight(1f)
            )
            
            PrimaryButton(
                text = if (currentQ < totalQ) "Câu tiếp" else "Hoàn thành",
                onClick = onNextClick,
                modifier = Modifier.weight(1f)
            )
        }
    }
}

// ==========================================
// PREVIEWS
// ==========================================
val dummyAudio = AudioState(
    isPlaying = false,
    isLoading = false,
    isError = false,
    currentTimeStr = "00:03",
    totalTimeStr = "00:15",
    progress = 0.2f,
    isLooping = true,
    speed = 1.0f
)

@Preview(showBackground = true, name = "1. Intensive - Đang gõ")
@Composable
fun IntensiveListeningScreenTypingPreview() {
    WordNestTheme {
        IntensiveListeningScreen(
            state = IntensiveListeningUiState(
                testName = "Test 1", partName = "Part 1", questionNumber = 3, totalQuestions = 10,
                audioState = dummyAudio,
                userInput = "The man is ",
                isChecked = false,
                diffResult = emptyList(),
                transcriptTranslation = ""
            ),
            onCloseClick = {}, onSelectorClick = {}, onPlayPauseClick = {}, onLoopToggle = {},
            onSeekBackward = {}, onSeekForward = {}, onSpeedChangeClick = {}, onRetryAudioClick = {},
            onUserInputChange = {}, onCheckClick = {}, onWordClick = {}, onPrevClick = {}, onNextClick = {}
        )
    }
}

@Preview(showBackground = true, name = "2. Intensive - Kết quả")
@Composable
fun IntensiveListeningScreenResultPreview() {
    WordNestTheme {
        val diff = listOf(
            DiffWordUiModel("The", DiffType.CORRECT),
            DiffWordUiModel("man", DiffType.CORRECT),
            DiffWordUiModel("is", DiffType.CORRECT),
            DiffWordUiModel("walking", DiffType.INCORRECT, "working"),
            DiffWordUiModel("at", DiffType.CORRECT),
            DiffWordUiModel("his", DiffType.CORRECT),
            DiffWordUiModel("desk", DiffType.CORRECT)
        )
        IntensiveListeningScreen(
            state = IntensiveListeningUiState(
                testName = "Test 1", partName = "Part 1", questionNumber = 3, totalQuestions = 10,
                audioState = dummyAudio,
                userInput = "The man is walking at his desk",
                isChecked = true,
                diffResult = diff,
                transcriptTranslation = "Người đàn ông đang làm việc tại bàn của anh ấy."
            ),
            onCloseClick = {}, onSelectorClick = {}, onPlayPauseClick = {}, onLoopToggle = {},
            onSeekBackward = {}, onSeekForward = {}, onSpeedChangeClick = {}, onRetryAudioClick = {},
            onUserInputChange = {}, onCheckClick = {}, onWordClick = {}, onPrevClick = {}, onNextClick = {}
        )
    }
}
