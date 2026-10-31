package com.tung.wordnest.ui.screens.study

import androidx.compose.animation.Crossfade
import androidx.compose.animation.core.animateFloatAsState
import androidx.compose.animation.core.tween
import androidx.compose.foundation.BorderStroke
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.automirrored.filled.Undo
import androidx.compose.material.icons.automirrored.filled.VolumeUp
import androidx.compose.material.icons.filled.Close
import androidx.compose.material.icons.filled.Settings
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.graphicsLayer
import androidx.compose.ui.text.SpanStyle
import androidx.compose.ui.text.buildAnnotatedString
import androidx.compose.ui.text.font.FontStyle
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.text.withStyle
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.tung.wordnest.ui.components.core.*
import com.tung.wordnest.ui.theme.FlashcardTermStyle
import com.tung.wordnest.ui.theme.TimerMonoStyle
import com.tung.wordnest.ui.theme.WordNestTheme

// ==============================================================================
// DATA MODELS
// ==============================================================================
data class StudyWordUiModel(
    val id: String,
    val term: String,
    val ipa: String?,
    val pos: String?,
    val meaning: String,
    val exampleEn: String?,
    val exampleVi: String?,
    val note: String?,
    val isNew: Boolean
)

data class RatingIntervals(
    val hard: String, // Chưa nhớ
    val good: String, // Hơi nhớ
    val easy: String  // Đã thuộc
)

data class StudySessionState(
    val words: List<StudyWordUiModel>,
    val currentIndex: Int,
    val isFlipped: Boolean,
    val canUndo: Boolean,
    val timerText: String,
    val intervals: RatingIntervals,
    val isCompleted: Boolean,
    val reduceMotion: Boolean = false
)

data class StudySummaryStats(
    val totalTime: String,
    val masteredCount: Int,
    val learningCount: Int,
    val forgotCount: Int,
    val forgotWords: List<StudyWordUiModel>
)

data class StudySettingsState(
    val autoPronounce: Boolean = true,
    val reverseCards: Boolean = false,
    val hapticFeedback: Boolean = true,
    val swipeGestures: Boolean = true
)

// ==============================================================================
// MAIN SCREEN
// ==============================================================================
@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun FlashcardStudyScreen(
    state: StudySessionState,
    summaryStats: StudySummaryStats?,
    settings: StudySettingsState,
    onCloseClick: () -> Unit,
    onSettingsClick: () -> Unit,
    onUndoClick: () -> Unit,
    onCardClick: () -> Unit,
    onPronounceClick: () -> Unit,
    onRateHard: () -> Unit,
    onRateGood: () -> Unit,
    onRateEasy: () -> Unit,
    onContinueStudy: () -> Unit,
    onBackToHome: () -> Unit,
    onReviewForgotWords: () -> Unit,
    onUpdateSettings: (StudySettingsState) -> Unit,
    modifier: Modifier = Modifier
) {
    var showExitDialog by remember { mutableStateOf(false) }
    var showSettingsSheet by remember { mutableStateOf(false) }

    val currentWord = state.words.getOrNull(state.currentIndex)

    Scaffold(
        modifier = modifier.fillMaxSize(),
        containerColor = WordNestTheme.colors.background,
        contentWindowInsets = WindowInsets.systemBars // Handles full screen properly
    ) { innerPadding ->
        Box(modifier = Modifier.padding(innerPadding).fillMaxSize()) {
            if (state.isCompleted && summaryStats != null) {
                StudySessionSummaryView(
                    stats = summaryStats,
                    onContinueStudy = onContinueStudy,
                    onBackToHome = onBackToHome
                )
            } else if (currentWord != null) {
                Column(modifier = Modifier.fillMaxSize()) {
                    // 1. Top Study Bar
                    StudyTopBar(
                        currentIndex = state.currentIndex,
                        totalWords = state.words.size,
                        isNewWord = currentWord.isNew,
                        timerText = state.timerText,
                        onCloseClick = { showExitDialog = true },
                        onSettingsClick = { showSettingsSheet = true }
                    )

                    // 2. Progress & Undo
                    StudyProgressRow(
                        currentIndex = state.currentIndex,
                        totalWords = state.words.size,
                        canUndo = state.canUndo,
                        onUndoClick = onUndoClick
                    )

                    Spacer(modifier = Modifier.height(24.dp))

                    // 3. Flashcard (takes remaining space minus bottom bar)
                    Box(
                        modifier = Modifier
                            .weight(1f)
                            .padding(horizontal = 24.dp),
                        contentAlignment = Alignment.Center
                    ) {
                        FlippableFlashcard(
                            word = currentWord,
                            isFlipped = state.isFlipped,
                            reduceMotion = state.reduceMotion,
                            onClick = onCardClick,
                            onPronounceClick = onPronounceClick
                        )
                    }

                    Spacer(modifier = Modifier.height(24.dp))

                    // 4. Rating Bar
                    StudyRatingBar(
                        intervals = state.intervals,
                        isEnabled = state.isFlipped, // Only enabled/visible when flipped
                        onRateHard = onRateHard,
                        onRateGood = onRateGood,
                        onRateEasy = onRateEasy,
                        modifier = Modifier
                            .fillMaxWidth()
                            .padding(horizontal = 16.dp, vertical = 24.dp)
                    )
                }
            }
        }
    }

    // Exit Dialog
    if (showExitDialog) {
        AlertDialog(
            onDismissRequest = { showExitDialog = false },
            title = { Text("Dừng học?", style = WordNestTheme.typography.headlineMedium) },
            text = { Text("Tiến độ của thẻ hiện tại sẽ không được lưu. Bạn có chắc chắn muốn thoát phiên học này?", style = WordNestTheme.typography.bodyMedium) },
            confirmButton = {
                Button(
                    onClick = { showExitDialog = false; onCloseClick() },
                    colors = ButtonDefaults.buttonColors(containerColor = WordNestTheme.colors.error600)
                ) { Text("Thoát", style = WordNestTheme.typography.labelMedium) }
            },
            dismissButton = {
                TextButton(onClick = { showExitDialog = false }) {
                    Text("Tiếp tục học", style = WordNestTheme.typography.labelMedium, color = WordNestTheme.colors.ink900)
                }
            },
            containerColor = WordNestTheme.colors.surface
        )
    }

    // Settings BottomSheet
    if (showSettingsSheet) {
        ModalBottomSheet(
            onDismissRequest = { showSettingsSheet = false },
            containerColor = WordNestTheme.colors.surface
        ) {
            StudySettingsSheetContent(
                settings = settings,
                onSettingsChange = onUpdateSettings,
                modifier = Modifier.padding(bottom = 32.dp)
            )
        }
    }
}

// ==============================================================================
// COMPONENTS
// ==============================================================================
@Composable
private fun StudyTopBar(
    currentIndex: Int,
    totalWords: Int,
    isNewWord: Boolean,
    timerText: String,
    onCloseClick: () -> Unit,
    onSettingsClick: () -> Unit
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
            Icon(Icons.Default.Close, contentDescription = "Đóng", tint = WordNestTheme.colors.ink900)
        }

        Row(verticalAlignment = Alignment.CenterVertically, horizontalArrangement = Arrangement.spacedBy(12.dp)) {
            // Chip Mới/Ôn tập
            val chipBg = if (isNewWord) WordNestTheme.colors.coralTint else WordNestTheme.colors.amberTint
            val chipText = if (isNewWord) WordNestTheme.colors.coral500 else WordNestTheme.colors.amber500
            val chipLabel = if (isNewWord) "Từ mới" else "Ôn tập"
            
            Box(
                modifier = Modifier
                    .clip(CircleShape)
                    .background(chipBg)
                    .padding(horizontal = 8.dp, vertical = 2.dp)
            ) {
                Text(chipLabel, style = WordNestTheme.typography.labelSmall, color = chipText)
            }

            Text(
                text = "${currentIndex + 1} / $totalWords",
                style = WordNestTheme.typography.titleMedium,
                color = WordNestTheme.colors.ink900
            )

            Text(
                text = timerText,
                style = TimerMonoStyle,
                color = WordNestTheme.colors.slate500
            )
        }

        IconButton(onClick = onSettingsClick) {
            Icon(Icons.Default.Settings, contentDescription = "Cài đặt", tint = WordNestTheme.colors.ink900)
        }
    }
}

@Composable
private fun StudyProgressRow(
    currentIndex: Int,
    totalWords: Int,
    canUndo: Boolean,
    onUndoClick: () -> Unit
) {
    val progress = if (totalWords > 0) (currentIndex.toFloat() / totalWords) else 0f
    Row(
        modifier = Modifier
            .fillMaxWidth()
            .padding(horizontal = 24.dp),
        verticalAlignment = Alignment.CenterVertically,
        horizontalArrangement = Arrangement.spacedBy(16.dp)
    ) {
        WordNestProgressBar(
            progress = progress,
            height = 6.dp,
            modifier = Modifier.weight(1f)
        )
        if (canUndo) {
            IconButton(
                onClick = onUndoClick,
                modifier = Modifier.size(24.dp)
            ) {
                Icon(
                    imageVector = Icons.AutoMirrored.Filled.Undo,
                    contentDescription = "Hoàn tác",
                    tint = WordNestTheme.colors.slate500,
                    modifier = Modifier.size(20.dp)
                )
            }
        }
    }
}

@Composable
private fun FlippableFlashcard(
    word: StudyWordUiModel,
    isFlipped: Boolean,
    reduceMotion: Boolean,
    onClick: () -> Unit,
    onPronounceClick: () -> Unit
) {
    if (reduceMotion) {
        Crossfade(targetState = isFlipped, animationSpec = tween(300), label = "card_crossfade") { flipped ->
            CardSurface(onClick = onClick) {
                if (!flipped) FrontFace(word, onPronounceClick) else BackFace(word)
            }
        }
    } else {
        val rotation by animateFloatAsState(
            targetValue = if (isFlipped) 180f else 0f,
            animationSpec = tween(320),
            label = "card_rotation"
        )
        
        CardSurface(
            onClick = onClick,
            modifier = Modifier.graphicsLayer {
                rotationY = rotation
                cameraDistance = 12f * density
            }
        ) {
            if (rotation <= 90f) {
                FrontFace(word, onPronounceClick)
            } else {
                // Rotate back 180 degrees so text isn't mirrored
                Box(modifier = Modifier.graphicsLayer { rotationY = 180f }) {
                    BackFace(word)
                }
            }
        }
    }
}

@Composable
private fun CardSurface(
    onClick: () -> Unit,
    modifier: Modifier = Modifier,
    content: @Composable () -> Unit
) {
    Surface(
        modifier = modifier
            .fillMaxWidth()
            .aspectRatio(3f / 4f)
            .clickable(onClick = onClick),
        shape = WordNestTheme.shapes.extraLarge, // 28.dp roughly like BottomSheetTopShape for a big card
        color = WordNestTheme.colors.surfaceWhite,
        border = BorderStroke(2.dp, WordNestTheme.colors.line200),
        shadowElevation = 8.dp
    ) {
        Box(modifier = Modifier.fillMaxSize()) {
            content()
        }
    }
}

@Composable
private fun FrontFace(word: StudyWordUiModel, onPronounceClick: () -> Unit) {
    Column(
        modifier = Modifier.fillMaxSize().padding(24.dp),
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.Center
    ) {
        Spacer(modifier = Modifier.weight(1f))
        
        Text(
            text = word.term,
            style = FlashcardTermStyle,
            color = WordNestTheme.colors.primaryText,
            textAlign = TextAlign.Center
        )
        
        if (!word.ipa.isNullOrEmpty()) {
            Spacer(modifier = Modifier.height(8.dp))
            Text(
                text = word.ipa,
                style = WordNestTheme.typography.titleMedium,
                color = WordNestTheme.colors.slate500,
                textAlign = TextAlign.Center
            )
        }
        
        Spacer(modifier = Modifier.height(32.dp))
        
        IconButton(
            onClick = onPronounceClick,
            modifier = Modifier
                .size(48.dp)
                .clip(CircleShape)
                .background(WordNestTheme.colors.beige100)
        ) {
            Icon(Icons.AutoMirrored.Filled.VolumeUp, contentDescription = "Phát âm", tint = WordNestTheme.colors.forest700)
        }
        
        Spacer(modifier = Modifier.weight(1f))
        
        Text(
            text = "Chạm vào thẻ để xem nghĩa",
            style = WordNestTheme.typography.labelMedium,
            color = WordNestTheme.colors.slate400,
            textAlign = TextAlign.Center
        )
    }
}

@Composable
private fun BackFace(word: StudyWordUiModel) {
    Column(
        modifier = Modifier.fillMaxSize().padding(24.dp)
    ) {
        if (!word.pos.isNullOrEmpty()) {
            WordNestFilterChip(text = word.pos, selected = false, onClick = {})
            Spacer(modifier = Modifier.height(16.dp))
        }
        
        Text(
            text = word.meaning,
            style = WordNestTheme.typography.headlineMedium.copy(fontSize = 24.sp),
            color = WordNestTheme.colors.primaryText
        )
        
        Spacer(modifier = Modifier.height(20.dp))
        HorizontalDivider(color = WordNestTheme.colors.line200)
        Spacer(modifier = Modifier.height(20.dp))
        
        if (!word.exampleEn.isNullOrEmpty()) {
            Text(
                text = "VÍ DỤ",
                style = WordNestTheme.typography.labelSmall,
                color = WordNestTheme.colors.coral500
            )
            Spacer(modifier = Modifier.height(8.dp))
            // Giả lập từ khóa được highlight bằng in đậm nghiêng
            Text(
                text = buildAnnotatedString {
                    withStyle(style = SpanStyle(fontStyle = FontStyle.Italic)) {
                        append(word.exampleEn)
                    }
                },
                style = WordNestTheme.typography.bodyMedium,
                color = WordNestTheme.colors.ink900
            )
            if (!word.exampleVi.isNullOrEmpty()) {
                Spacer(modifier = Modifier.height(4.dp))
                Text(
                    text = word.exampleVi,
                    style = WordNestTheme.typography.bodyMedium,
                    color = WordNestTheme.colors.slate500
                )
            }
        }

        if (!word.note.isNullOrEmpty()) {
            Spacer(modifier = Modifier.height(20.dp))
            Text("GHI CHÚ", style = WordNestTheme.typography.labelSmall, color = WordNestTheme.colors.coral500)
            Spacer(modifier = Modifier.height(4.dp))
            Text(
                text = word.note,
                style = WordNestTheme.typography.bodyMedium,
                color = WordNestTheme.colors.ink900
            )
        }
    }
}

@Composable
private fun StudyRatingBar(
    intervals: RatingIntervals,
    isEnabled: Boolean,
    onRateHard: () -> Unit,
    onRateGood: () -> Unit,
    onRateEasy: () -> Unit,
    modifier: Modifier = Modifier
) {
    if (!isEnabled) {
        // Chiếm chỗ trống để Layout không giật khi hiển thị
        Spacer(modifier = modifier.height(56.dp))
        return
    }

    val mintTint = WordNestTheme.colors.mint500.copy(alpha = 0.15f)

    Row(
        modifier = modifier.height(IntrinsicSize.Min), // to make buttons stretch equally in height if text wraps
        horizontalArrangement = Arrangement.spacedBy(12.dp)
    ) {
        RatingButton(
            title = "Chưa nhớ",
            interval = intervals.hard,
            containerColor = WordNestTheme.colors.coralTint,
            contentColor = WordNestTheme.colors.coral500,
            onClick = onRateHard,
            modifier = Modifier.weight(1f).defaultMinSize(minHeight = 56.dp)
        )
        RatingButton(
            title = "Hơi nhớ",
            interval = intervals.good,
            containerColor = WordNestTheme.colors.amberTint,
            contentColor = WordNestTheme.colors.amber500,
            onClick = onRateGood,
            modifier = Modifier.weight(1f).defaultMinSize(minHeight = 56.dp)
        )
        RatingButton(
            title = "Đã thuộc",
            interval = intervals.easy,
            containerColor = mintTint,
            contentColor = WordNestTheme.colors.mint500,
            onClick = onRateEasy,
            modifier = Modifier.weight(1f).defaultMinSize(minHeight = 56.dp)
        )
    }
}

@Composable
private fun RatingButton(
    title: String,
    interval: String,
    containerColor: Color,
    contentColor: Color,
    onClick: () -> Unit,
    modifier: Modifier = Modifier
) {
    Surface(
        onClick = onClick,
        modifier = modifier,
        shape = WordNestTheme.shapes.small, // 14.dp
        color = containerColor,
        border = BorderStroke(1.dp, contentColor)
    ) {
        Column(
            modifier = Modifier.padding(vertical = 8.dp, horizontal = 4.dp),
            horizontalAlignment = Alignment.CenterHorizontally,
            verticalArrangement = Arrangement.Center
        ) {
            Text(
                text = title,
                style = WordNestTheme.typography.labelMedium.copy(fontWeight = FontWeight.Bold),
                color = contentColor
            )
            Spacer(modifier = Modifier.height(2.dp))
            Text(
                text = interval,
                style = WordNestTheme.typography.labelSmall,
                color = contentColor.copy(alpha = 0.8f)
            )
        }
    }
}

@Composable
private fun StudySettingsSheetContent(
    settings: StudySettingsState,
    onSettingsChange: (StudySettingsState) -> Unit,
    modifier: Modifier = Modifier
) {
    Column(modifier = modifier.padding(horizontal = 24.dp, vertical = 16.dp)) {
        Text("Tùy chỉnh phiên học", style = WordNestTheme.typography.headlineMedium, color = WordNestTheme.colors.primaryText)
        Spacer(modifier = Modifier.height(24.dp))
        
        SettingSwitchRow("Tự động phát âm khi lật", settings.autoPronounce) {
            onSettingsChange(settings.copy(autoPronounce = it))
        }
        SettingSwitchRow("Đảo mặt thẻ (Việt -> Anh)", settings.reverseCards) {
            onSettingsChange(settings.copy(reverseCards = it))
        }
        SettingSwitchRow("Rung phản hồi (Haptic)", settings.hapticFeedback) {
            onSettingsChange(settings.copy(hapticFeedback = it))
        }
        SettingSwitchRow("Cử chỉ vuốt thẻ", settings.swipeGestures) {
            onSettingsChange(settings.copy(swipeGestures = it))
        }
    }
}

@Composable
private fun SettingSwitchRow(label: String, checked: Boolean, onCheckedChange: (Boolean) -> Unit) {
    Row(
        modifier = Modifier.fillMaxWidth().padding(vertical = 12.dp),
        horizontalArrangement = Arrangement.SpaceBetween,
        verticalAlignment = Alignment.CenterVertically
    ) {
        Text(label, style = WordNestTheme.typography.bodyMedium, color = WordNestTheme.colors.ink900)
        Switch(
            checked = checked,
            onCheckedChange = onCheckedChange,
            colors = SwitchDefaults.colors(
                checkedThumbColor = WordNestTheme.colors.surfaceWhite,
                checkedTrackColor = WordNestTheme.colors.mint500,
                uncheckedThumbColor = WordNestTheme.colors.slate400,
                uncheckedTrackColor = WordNestTheme.colors.line200
            )
        )
    }
}

@Composable
fun StudySessionSummaryView(
    stats: StudySummaryStats,
    onContinueStudy: () -> Unit,
    onBackToHome: () -> Unit,
    modifier: Modifier = Modifier
) {
    Column(
        modifier = modifier.fillMaxSize().padding(24.dp),
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        Spacer(modifier = Modifier.height(32.dp))
        Text(
            text = "Hoàn thành!",
            style = WordNestTheme.typography.displayLarge,
            color = WordNestTheme.colors.forest900
        )
        Spacer(modifier = Modifier.height(8.dp))
        Text(
            text = "Thời gian học: ${stats.totalTime}",
            style = WordNestTheme.typography.bodyMedium,
            color = WordNestTheme.colors.slate500
        )
        
        Spacer(modifier = Modifier.height(40.dp))
        
        // Stats Grid
        Row(modifier = Modifier.fillMaxWidth(), horizontalArrangement = Arrangement.spacedBy(12.dp)) {
            SummaryStatBox("Đã thuộc", stats.masteredCount, WordNestTheme.colors.mint500, WordNestTheme.colors.mint500.copy(0.15f), Modifier.weight(1f))
            SummaryStatBox("Hơi nhớ", stats.learningCount, WordNestTheme.colors.amber500, WordNestTheme.colors.amberTint, Modifier.weight(1f))
            SummaryStatBox("Chưa nhớ", stats.forgotCount, WordNestTheme.colors.coral500, WordNestTheme.colors.coralTint, Modifier.weight(1f))
        }

        Spacer(modifier = Modifier.height(32.dp))

        if (stats.forgotCount > 0 && stats.forgotWords.isNotEmpty()) {
            Text(
                text = "Các từ cần lưu ý",
                style = WordNestTheme.typography.titleMedium,
                color = WordNestTheme.colors.ink900,
                modifier = Modifier.fillMaxWidth(),
                textAlign = TextAlign.Start
            )
            Spacer(modifier = Modifier.height(12.dp))
            LazyColumn(
                modifier = Modifier.weight(1f),
                verticalArrangement = Arrangement.spacedBy(8.dp)
            ) {
                items(stats.forgotWords) { word ->
                    Row(
                        modifier = Modifier.fillMaxWidth().background(WordNestTheme.colors.surface, WordNestTheme.shapes.small).border(1.dp, WordNestTheme.colors.line200, WordNestTheme.shapes.small).padding(12.dp),
                        horizontalArrangement = Arrangement.SpaceBetween
                    ) {
                        Text(word.term, style = WordNestTheme.typography.titleMedium, color = WordNestTheme.colors.ink900)
                        Text(word.meaning, style = WordNestTheme.typography.bodyMedium, color = WordNestTheme.colors.slate500)
                    }
                }
            }
        } else {
            Spacer(modifier = Modifier.weight(1f))
            Icon(Icons.Default.Settings, contentDescription = null, tint = Color.Transparent) // filler
        }
        
        Spacer(modifier = Modifier.height(24.dp))
        
        if (stats.forgotCount > 0) {
            PrimaryButton(text = "Ôn lại các từ chưa nhớ ngay", onClick = onContinueStudy, modifier = Modifier.fillMaxWidth())
            Spacer(modifier = Modifier.height(12.dp))
        } else {
            PrimaryButton(text = "Học tiếp bộ khác", onClick = onContinueStudy, modifier = Modifier.fillMaxWidth())
            Spacer(modifier = Modifier.height(12.dp))
        }
        
        OutlinedWordNestButton(text = "Về trang chủ", onClick = onBackToHome, modifier = Modifier.fillMaxWidth())
    }
}

@Composable
private fun SummaryStatBox(label: String, count: Int, color: Color, bgColor: Color, modifier: Modifier = Modifier) {
    Column(
        modifier = modifier.clip(WordNestTheme.shapes.small).background(bgColor).padding(16.dp),
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        Text(text = count.toString(), style = WordNestTheme.typography.displayLarge.copy(fontSize = 32.sp), color = color)
        Spacer(modifier = Modifier.height(4.dp))
        Text(text = label, style = WordNestTheme.typography.labelSmall, color = color)
    }
}

// ==============================================================================
// PREVIEWS
// ==============================================================================
private val sampleStudyWord = StudyWordUiModel(
    id = "1",
    term = "Serendipity",
    ipa = "/ˌser.ənˈdɪp.ə.ti/",
    pos = "n",
    meaning = "Sự tình cờ may mắn, duyên kỳ ngộ",
    exampleEn = "Meeting her there was pure serendipity.",
    exampleVi = "Gặp cô ấy ở đó quả là một duyên kỳ ngộ.",
    note = "Hay dùng trong văn cảnh lãng mạn hoặc khoa học",
    isNew = true
)

@Preview(showBackground = true, name = "1. Mặt Trước (Chưa lật)")
@Composable
fun FlashcardStudyScreenFrontPreview() {
    WordNestTheme {
        FlashcardStudyScreen(
            state = StudySessionState(
                words = listOf(sampleStudyWord),
                currentIndex = 0,
                isFlipped = false,
                canUndo = false,
                timerText = "05:12",
                intervals = RatingIntervals("< 10p", "1 ngày", "4 ngày"),
                isCompleted = false
            ),
            summaryStats = null,
            settings = StudySettingsState(),
            onCloseClick = {}, onSettingsClick = {}, onUndoClick = {}, onCardClick = {},
            onPronounceClick = {}, onRateHard = {}, onRateGood = {}, onRateEasy = {},
            onContinueStudy = {}, onBackToHome = {}, onReviewForgotWords = {}, onUpdateSettings = {}
        )
    }
}

@Preview(showBackground = true, name = "2. Mặt Sau (Đã lật + Rating)")
@Composable
fun FlashcardStudyScreenBackPreview() {
    WordNestTheme {
        FlashcardStudyScreen(
            state = StudySessionState(
                words = listOf(sampleStudyWord),
                currentIndex = 0,
                isFlipped = true, // Đã lật
                canUndo = true,
                timerText = "05:14",
                intervals = RatingIntervals("< 10p", "1 ngày", "4 ngày"),
                isCompleted = false
            ),
            summaryStats = null,
            settings = StudySettingsState(),
            onCloseClick = {}, onSettingsClick = {}, onUndoClick = {}, onCardClick = {},
            onPronounceClick = {}, onRateHard = {}, onRateGood = {}, onRateEasy = {},
            onContinueStudy = {}, onBackToHome = {}, onReviewForgotWords = {}, onUpdateSettings = {}
        )
    }
}

@Preview(showBackground = true, name = "3. Tổng kết phiên học")
@Composable
fun FlashcardStudyScreenSummaryPreview() {
    WordNestTheme {
        FlashcardStudyScreen(
            state = StudySessionState(
                words = listOf(sampleStudyWord), currentIndex = 10, isFlipped = false,
                canUndo = false, timerText = "12:45", intervals = RatingIntervals("","",""),
                isCompleted = true // Hoàn thành
            ),
            summaryStats = StudySummaryStats(
                totalTime = "12 phút 45 giây",
                masteredCount = 15,
                learningCount = 3,
                forgotCount = 2,
                forgotWords = listOf(
                    sampleStudyWord,
                    sampleStudyWord.copy(term = "Ephemeral", meaning = "Phù du, chóng tàn")
                )
            ),
            settings = StudySettingsState(),
            onCloseClick = {}, onSettingsClick = {}, onUndoClick = {}, onCardClick = {},
            onPronounceClick = {}, onRateHard = {}, onRateGood = {}, onRateEasy = {},
            onContinueStudy = {}, onBackToHome = {}, onReviewForgotWords = {}, onUpdateSettings = {}
        )
    }
}
