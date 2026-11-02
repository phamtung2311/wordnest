package com.tung.wordnest.ui.screens.toeic

import android.content.Context
import androidx.compose.animation.AnimatedVisibility
import androidx.compose.animation.Crossfade
import androidx.compose.foundation.BorderStroke
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.LazyRow
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.lazy.itemsIndexed
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.automirrored.filled.ArrowBack
import androidx.compose.material.icons.filled.*
import androidx.compose.material3.*
import androidx.compose.material3.TabRowDefaults.tabIndicatorOffset
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.text.style.TextDecoration
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.media3.common.MediaItem
import androidx.media3.common.PlaybackParameters
import androidx.media3.common.Player
import androidx.media3.exoplayer.ExoPlayer
import coil.compose.AsyncImage
import com.tung.wordnest.ui.components.core.OutlinedWordNestButton
import com.tung.wordnest.ui.components.core.PrimaryButton
import com.tung.wordnest.ui.components.core.WordNestFilterChip
import com.tung.wordnest.ui.components.core.WordNestProgressBar
import com.tung.wordnest.ui.theme.TimerMonoStyle
import com.tung.wordnest.ui.theme.WordNestTheme
import com.tung.wordnest.util.TtsProvider
import kotlinx.coroutines.delay
import kotlinx.coroutines.isActive

// ==========================================
// 1. DATA MODELS & DIFF-CHECK ALGORITHM
// ==========================================

enum class IntensivePracticeTab(val label: String) {
    DICTATION("🎧 Chép chính tả"),
    QUIZ("📝 Trắc nghiệm"),
    TRANSCRIPT("📜 Lời thoại")
}

enum class DiffType { CORRECT, INCORRECT, MISSING }

data class DiffWordUiModel(
    val userWord: String?,
    val targetWord: String,
    val type: DiffType
)

object DiffChecker {
    private val PUNCTUATION_REGEX = Regex("[.,/#!$%^&*;:{}=\\-_`~()?\"'’]")

    fun cleanWord(w: String): String {
        return w.lowercase().replace(PUNCTUATION_REGEX, "").trim()
    }

    fun cleanLineForDictation(rawText: String): String {
        return rawText
            .replace(Regex("^\\([A-Da-d]\\)\\s*"), "")
            .replace(Regex("^[A-Da-d]\\.\\s*"), "")
            .trim()
    }

    fun calculateDiff(userInput: String, targetSentence: String): Pair<List<DiffWordUiModel>, Int> {
        val cleanedTarget = cleanLineForDictation(targetSentence)
        val targetWords = cleanedTarget.split(Regex("\\s+")).filter { it.isNotBlank() }
        val userWords = userInput.trim().split(Regex("\\s+")).filter { it.isNotBlank() }

        if (targetWords.isEmpty()) return emptyList<DiffWordUiModel>() to 0

        val result = mutableListOf<DiffWordUiModel>()
        var correctCount = 0

        for (i in targetWords.indices) {
            val tw = targetWords[i]
            val uw = userWords.getOrNull(i)

            if (uw == null) {
                result.add(DiffWordUiModel(userWord = null, targetWord = tw, type = DiffType.MISSING))
            } else if (cleanWord(uw) == cleanWord(tw)) {
                correctCount++
                result.add(DiffWordUiModel(userWord = uw, targetWord = tw, type = DiffType.CORRECT))
            } else {
                result.add(DiffWordUiModel(userWord = uw, targetWord = tw, type = DiffType.INCORRECT))
            }
        }

        val accuracy = ((correctCount.toFloat() / targetWords.size.toFloat()) * 100f).toInt()
        return result to accuracy
    }

    fun getNextHint(currentInput: String, targetSentence: String): String {
        val cleanedTarget = cleanLineForDictation(targetSentence)
        val targetWords = cleanedTarget.split(Regex("\\s+")).filter { it.isNotBlank() }
        val userWords = currentInput.trim().split(Regex("\\s+")).filter { it.isNotBlank() }

        var matchedCount = 0
        while (matchedCount < userWords.size && matchedCount < targetWords.size &&
            cleanWord(userWords[matchedCount]) == cleanWord(targetWords[matchedCount])
        ) {
            matchedCount++
        }

        val nextIndex = (matchedCount + 1).coerceAtMost(targetWords.size)
        return targetWords.take(nextIndex).joinToString(" ") + " "
    }
}

// ==========================================
// 2. MAIN INTENSIVE LISTENING SCREEN
// ==========================================

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun IntensiveListeningScreen(
    testId: String = "2024_1",
    onBackClick: () -> Unit,
    onOpenSaveWordSheet: (term: String, meaning: String, ipa: String?, pos: String?, example: String?) -> Unit,
    modifier: Modifier = Modifier
) {
    val context = LocalContext.current
    var currentTestId by remember { mutableStateOf(testId) }

    // Nạp dữ liệu các câu/đoạn thi Intensive
    val items = remember(currentTestId) {
        IntensiveListeningStore.loadTest(context, currentTestId)
    }

    var currentItemIndex by remember { mutableIntStateOf(0) }
    val currentItem = items.getOrNull(currentItemIndex)

    // Sub-tab: Chép chính tả / Trắc nghiệm / Lời thoại
    var selectedTab by remember { mutableStateOf(IntensivePracticeTab.DICTATION) }

    // Sheet chọn câu hỏi / lọc theo Part
    var showSelectorSheet by remember { mutableStateOf(false) }
    var selectedPartFilter by remember { mutableIntStateOf(0) } // 0 = Tất cả

    // Dictation state
    var currentSentenceIdx by remember { mutableIntStateOf(0) }
    var userInput by remember { mutableStateOf("") }
    var isChecked by remember { mutableStateOf(false) }
    var diffResult by remember { mutableStateOf<List<DiffWordUiModel>>(emptyList()) }
    var accuracy by remember { mutableStateOf<Int?>(null) }

    // Quiz state (lưu đáp án trắc nghiệm theo câu hỏi số: questionNum -> optionKey)
    val quizAnswers = remember { mutableStateMapOf<Int, String>() }

    // Audio Player State
    var isPlaying by remember { mutableStateOf(false) }
    var isLoadingAudio by remember { mutableStateOf(false) }
    var isLooping by remember { mutableStateOf(true) }
    var playbackSpeed by remember { mutableFloatStateOf(1.0f) }
    var currentPositionMs by remember { mutableLongStateOf(0L) }

    // Khởi tạo ExoPlayer
    val audioUrl = remember(currentTestId) {
        ToeicAssets.getToeicAudioUrl(currentTestId)
    }

    val exoPlayer = remember {
        ExoPlayer.Builder(context).build().apply {
            val mediaItem = MediaItem.fromUri(audioUrl)
            setMediaItem(mediaItem)
            prepare()
        }
    }

    // Đổi media item nếu đổi đề thi
    LaunchedEffect(audioUrl) {
        exoPlayer.setMediaItem(MediaItem.fromUri(audioUrl))
        exoPlayer.prepare()
    }

    // Lắng nghe Player events
    DisposableEffect(exoPlayer) {
        val listener = object : Player.Listener {
            override fun onIsPlayingChanged(playing: Boolean) {
                isPlaying = playing
            }
            override fun onPlaybackStateChanged(playbackState: Int) {
                isLoadingAudio = playbackState == Player.STATE_BUFFERING
            }
        }
        exoPlayer.addListener(listener)
        onDispose {
            exoPlayer.removeListener(listener)
            exoPlayer.release()
        }
    }

    // Điều khiển phân đoạn âm thanh (SeekTo startTime)
    val startMs = ((currentItem?.startTime ?: 0.0) * 1000.0).toLong()
    val endMs = ((currentItem?.endTime ?: 0.0) * 1000.0).toLong().coerceAtLeast(startMs + 1000L)
    val durationMs = (endMs - startMs).coerceAtLeast(1000L)

    // Khi chuyển Item: reset câu hỏi, input, tua audio đến startTime
    LaunchedEffect(currentItemIndex, currentTestId) {
        userInput = ""
        isChecked = false
        diffResult = emptyList()
        accuracy = null
        currentSentenceIdx = 0
        exoPlayer.seekTo(startMs)
    }

    // Ticker theo dõi giây và Loop phân đoạn
    LaunchedEffect(isPlaying, isLooping, startMs, endMs) {
        while (isActive && isPlaying) {
            val pos = exoPlayer.currentPosition
            currentPositionMs = pos

            // Nếu vượt quá endTime của phân đoạn
            if (pos >= endMs) {
                if (isLooping) {
                    exoPlayer.seekTo(startMs)
                } else {
                    exoPlayer.pause()
                    exoPlayer.seekTo(startMs)
                }
            }
            delay(100)
        }
    }

    // Danh sách câu thoại của Item hiện tại
    val transcriptLines = currentItem?.transcript ?: emptyList()
    val currentLine = transcriptLines.getOrNull(currentSentenceIdx) ?: transcriptLines.firstOrNull()

    // Reset input khi chuyển sentence trong cùng 1 item
    LaunchedEffect(currentSentenceIdx) {
        userInput = ""
        isChecked = false
        diffResult = emptyList()
        accuracy = null
    }

    Scaffold(
        topBar = {
            TopAppBar(
                title = {
                    Column {
                        Text(
                            text = ToeicAssets.getTestTitle(currentTestId),
                            style = WordNestTheme.typography.titleMedium,
                            color = WordNestTheme.colors.ink900,
                            maxLines = 1,
                            overflow = TextOverflow.Ellipsis
                        )
                        Surface(
                            onClick = { showSelectorSheet = true },
                            shape = CircleShape,
                            color = WordNestTheme.colors.beige100,
                            modifier = Modifier.padding(top = 2.dp)
                        ) {
                            Row(
                                modifier = Modifier.padding(horizontal = 8.dp, vertical = 2.dp),
                                verticalAlignment = Alignment.CenterVertically
                            ) {
                                Text(
                                    text = "${currentItem?.questionRange ?: "Câu 1"} • ${currentItem?.partTitle ?: "Part 1"}",
                                    style = WordNestTheme.typography.labelSmall,
                                    color = WordNestTheme.colors.forest900
                                )
                                Icon(
                                    Icons.Default.ArrowDropDown,
                                    contentDescription = null,
                                    tint = WordNestTheme.colors.forest900,
                                    modifier = Modifier.size(16.dp)
                                )
                            }
                        }
                    }
                },
                navigationIcon = {
                    IconButton(onClick = onBackClick) {
                        Icon(
                            Icons.AutoMirrored.Filled.ArrowBack,
                            contentDescription = "Quay lại",
                            tint = WordNestTheme.colors.ink900
                        )
                    }
                },
                colors = TopAppBarDefaults.topAppBarColors(
                    containerColor = WordNestTheme.colors.surface
                )
            )
        },
        bottomBar = {
            Surface(
                color = WordNestTheme.colors.surface,
                border = BorderStroke(1.dp, WordNestTheme.colors.line200),
                modifier = Modifier.fillMaxWidth()
            ) {
                Row(
                    modifier = Modifier
                        .fillMaxWidth()
                        .padding(horizontal = 16.dp, vertical = 10.dp)
                        .navigationBarsPadding(),
                    horizontalArrangement = Arrangement.SpaceBetween,
                    verticalAlignment = Alignment.CenterVertically
                ) {
                    OutlinedWordNestButton(
                        text = "Câu trước",
                        onClick = {
                            if (currentItemIndex > 0) currentItemIndex--
                        },
                        enabled = currentItemIndex > 0,
                        modifier = Modifier.weight(1f)
                    )

                    Text(
                        text = "${currentItemIndex + 1} / ${items.size}",
                        style = WordNestTheme.typography.labelMedium.copy(fontWeight = FontWeight.Bold),
                        color = WordNestTheme.colors.slate500,
                        textAlign = TextAlign.Center,
                        modifier = Modifier.weight(1f)
                    )

                    PrimaryButton(
                        text = "Câu tiếp",
                        onClick = {
                            if (currentItemIndex < items.size - 1) currentItemIndex++
                        },
                        enabled = currentItemIndex < items.size - 1,
                        modifier = Modifier.weight(1f)
                    )
                }
            }
        },
        containerColor = WordNestTheme.colors.background,
        modifier = modifier.fillMaxSize()
    ) { innerPadding ->
        Column(
            modifier = Modifier
                .padding(innerPadding)
                .fillMaxSize()
                .imePadding()
        ) {
            // ==========================================
            // A. STICKY AUDIO PLAYER CARD
            // ==========================================
            AudioPlayerCard(
                isPlaying = isPlaying,
                isLoading = isLoadingAudio,
                isLooping = isLooping,
                speed = playbackSpeed,
                elapsedMs = (currentPositionMs - startMs).coerceIn(0L, durationMs),
                durationMs = durationMs,
                onPlayPause = {
                    if (isPlaying) {
                        exoPlayer.pause()
                    } else {
                        if (exoPlayer.currentPosition < startMs || exoPlayer.currentPosition >= endMs) {
                            exoPlayer.seekTo(startMs)
                        }
                        exoPlayer.play()
                    }
                },
                onToggleLoop = { isLooping = !isLooping },
                onSeekBackward = {
                    val target = (exoPlayer.currentPosition - 5000L).coerceAtLeast(startMs)
                    exoPlayer.seekTo(target)
                },
                onSeekForward = {
                    val target = (exoPlayer.currentPosition + 5000L).coerceAtMost(endMs)
                    exoPlayer.seekTo(target)
                },
                onSpeedChange = {
                    playbackSpeed = when (playbackSpeed) {
                        0.8f -> 1.0f
                        1.0f -> 1.2f
                        1.2f -> 1.5f
                        else -> 0.8f
                    }
                    exoPlayer.playbackParameters = PlaybackParameters(playbackSpeed)
                }
            )

            // ==========================================
            // B. 3 TABS SWITCHER (Dictation / Quiz / Transcript)
            // ==========================================
            TabRow(
                selectedTabIndex = selectedTab.ordinal,
                containerColor = WordNestTheme.colors.surface,
                contentColor = WordNestTheme.colors.forest900,
                indicator = {
                    TabRowDefaults.SecondaryIndicator(
                        modifier = Modifier.tabIndicatorOffset(it[selectedTab.ordinal]),
                        color = WordNestTheme.colors.forest900
                    )
                }
            ) {
                IntensivePracticeTab.values().forEach { tab ->
                    Tab(
                        selected = selectedTab == tab,
                        onClick = { selectedTab = tab },
                        text = {
                            Text(
                                text = tab.label,
                                style = WordNestTheme.typography.labelMedium.copy(
                                    fontWeight = if (selectedTab == tab) FontWeight.Bold else FontWeight.Normal
                                )
                            )
                        }
                    )
                }
            }

            // ==========================================
            // C. TAB CONTENT
            // ==========================================
            Box(modifier = Modifier.weight(1f)) {
                if (currentItem == null) {
                    Box(modifier = Modifier.fillMaxSize(), contentAlignment = Alignment.Center) {
                        CircularProgressIndicator(color = WordNestTheme.colors.forest900)
                    }
                } else {
                    Crossfade(targetState = selectedTab, label = "TabFade") { tab ->
                        when (tab) {
                            IntensivePracticeTab.DICTATION -> {
                                DictationTabContent(
                                    item = currentItem,
                                    currentSentenceIdx = currentSentenceIdx,
                                    totalSentences = transcriptLines.size,
                                    currentLine = currentLine,
                                    userInput = userInput,
                                    isChecked = isChecked,
                                    diffResult = diffResult,
                                    accuracy = accuracy,
                                    onUserInputChange = { userInput = it },
                                    onCheck = {
                                        if (currentLine != null && userInput.isNotBlank()) {
                                            val (diff, acc) = DiffChecker.calculateDiff(userInput, currentLine.text)
                                            diffResult = diff
                                            accuracy = acc
                                            isChecked = true
                                        }
                                    },
                                    onReset = {
                                        userInput = ""
                                        isChecked = false
                                        diffResult = emptyList()
                                        accuracy = null
                                    },
                                    onHint = {
                                        if (currentLine != null) {
                                            userInput = DiffChecker.getNextHint(userInput, currentLine.text)
                                        }
                                    },
                                    onPrevSentence = {
                                        if (currentSentenceIdx > 0) currentSentenceIdx--
                                    },
                                    onNextSentence = {
                                        if (currentSentenceIdx < transcriptLines.size - 1) currentSentenceIdx++
                                    },
                                    onSpeakSentence = {
                                        currentLine?.let { TtsProvider.speak(it.text) }
                                    }
                                )
                            }
                            IntensivePracticeTab.QUIZ -> {
                                QuizTabContent(
                                    questions = currentItem.questions,
                                    quizAnswers = quizAnswers,
                                    onSelectAnswer = { qNum, optKey ->
                                        quizAnswers[qNum] = optKey
                                    }
                                )
                            }
                            IntensivePracticeTab.TRANSCRIPT -> {
                                TranscriptTabContent(
                                    transcript = currentItem.transcript,
                                    vocabulary = currentItem.vocabulary,
                                    imageUrl = currentItem.imageUrl,
                                    onSpeak = { text -> TtsProvider.speak(text) },
                                    onSaveWord = onOpenSaveWordSheet
                                )
                            }
                        }
                    }
                }
            }
        }
    }

    // ==========================================
    // D. ITEM SELECTOR MODAL BOTTOM SHEET
    // ==========================================
    if (showSelectorSheet) {
        ModalBottomSheet(
            onDismissRequest = { showSelectorSheet = false },
            containerColor = WordNestTheme.colors.surface
        ) {
            Column(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(horizontal = 20.dp, vertical = 12.dp)
            ) {
                Text(
                    text = "Chọn phân đoạn luyện nghe",
                    style = WordNestTheme.typography.titleMedium,
                    color = WordNestTheme.colors.ink900
                )
                Spacer(modifier = Modifier.height(12.dp))

                // Part Filter Chips
                val partFilters = listOf("Tất cả", "Part 1", "Part 2", "Part 3", "Part 4")
                LazyRow(
                    horizontalArrangement = Arrangement.spacedBy(8.dp),
                    modifier = Modifier.fillMaxWidth()
                ) {
                    itemsIndexed(partFilters) { idx, label ->
                        WordNestFilterChip(
                            text = label,
                            selected = selectedPartFilter == idx,
                            onClick = { selectedPartFilter = idx }
                        )
                    }
                }

                Spacer(modifier = Modifier.height(16.dp))

                val filteredItems = items.filter {
                    selectedPartFilter == 0 || it.part == selectedPartFilter
                }

                LazyColumn(
                    verticalArrangement = Arrangement.spacedBy(8.dp),
                    modifier = Modifier
                        .fillMaxWidth()
                        .heightIn(max = 420.dp)
                ) {
                    itemsIndexed(filteredItems) { _, item ->
                        val originalIndex = items.indexOf(item)
                        val isSelected = originalIndex == currentItemIndex

                        Surface(
                            onClick = {
                                currentItemIndex = originalIndex
                                showSelectorSheet = false
                            },
                            shape = WordNestTheme.shapes.small,
                            color = if (isSelected) WordNestTheme.colors.amberTint else WordNestTheme.colors.beige100,
                            border = BorderStroke(
                                1.dp,
                                if (isSelected) WordNestTheme.colors.amber500 else Color.Transparent
                            ),
                            modifier = Modifier.fillMaxWidth()
                        ) {
                            Row(
                                modifier = Modifier.padding(14.dp),
                                verticalAlignment = Alignment.CenterVertically
                            ) {
                                Surface(
                                    shape = CircleShape,
                                    color = if (isSelected) WordNestTheme.colors.amber500 else WordNestTheme.colors.forest900,
                                    modifier = Modifier.size(32.dp)
                                ) {
                                    Box(contentAlignment = Alignment.Center) {
                                        Text(
                                            text = "P${item.part}",
                                            style = WordNestTheme.typography.labelSmall.copy(fontWeight = FontWeight.Bold),
                                            color = if (isSelected) WordNestTheme.colors.forest900 else Color.White
                                        )
                                    }
                                }
                                Spacer(modifier = Modifier.width(12.dp))
                                Column(modifier = Modifier.weight(1f)) {
                                    Text(
                                        text = "${item.questionRange}: ${item.title}",
                                        style = WordNestTheme.typography.bodyMedium.copy(
                                            fontWeight = if (isSelected) FontWeight.Bold else FontWeight.Normal
                                        ),
                                        color = WordNestTheme.colors.ink900,
                                        maxLines = 2,
                                        overflow = TextOverflow.Ellipsis
                                    )
                                }
                            }
                        }
                    }
                }
                Spacer(modifier = Modifier.height(24.dp))
            }
        }
    }
}

// ==========================================
// 3. AUDIO CONTROL CARD
// ==========================================

@Composable
private fun AudioPlayerCard(
    isPlaying: Boolean,
    isLoading: Boolean,
    isLooping: Boolean,
    speed: Float,
    elapsedMs: Long,
    durationMs: Long,
    onPlayPause: () -> Unit,
    onToggleLoop: () -> Unit,
    onSeekBackward: () -> Unit,
    onSeekForward: () -> Unit,
    onSpeedChange: () -> Unit
) {
    Surface(
        color = WordNestTheme.colors.surface,
        border = BorderStroke(1.dp, WordNestTheme.colors.line200),
        modifier = Modifier.fillMaxWidth()
    ) {
        Column(modifier = Modifier.padding(horizontal = 16.dp, vertical = 12.dp)) {
            // Seekbar + Time
            val progress = (elapsedMs.toFloat() / durationMs.toFloat()).coerceIn(0f, 1f)
            Row(
                verticalAlignment = Alignment.CenterVertically,
                horizontalArrangement = Arrangement.spacedBy(10.dp)
            ) {
                Text(
                    text = formatMs(elapsedMs),
                    style = TimerMonoStyle,
                    color = WordNestTheme.colors.slate500
                )
                Box(modifier = Modifier.weight(1f)) {
                    WordNestProgressBar(
                        progress = progress,
                        height = 6.dp,
                        progressColor = WordNestTheme.colors.forest900
                    )
                }
                Text(
                    text = formatMs(durationMs),
                    style = TimerMonoStyle,
                    color = WordNestTheme.colors.slate500
                )
            }

            Spacer(modifier = Modifier.height(10.dp))

            // Buttons row
            Row(
                modifier = Modifier.fillMaxWidth(),
                verticalAlignment = Alignment.CenterVertically,
                horizontalArrangement = Arrangement.SpaceBetween
            ) {
                // Loop toggle
                IconButton(onClick = onToggleLoop) {
                    Icon(
                        imageVector = Icons.Default.Loop,
                        contentDescription = "Lặp đoạn",
                        tint = if (isLooping) WordNestTheme.colors.forest900 else WordNestTheme.colors.slate400
                    )
                }

                // Tua -5s
                IconButton(onClick = onSeekBackward) {
                    Icon(
                        imageVector = Icons.Default.Replay5,
                        contentDescription = "Tua lùi 5s",
                        tint = WordNestTheme.colors.ink900
                    )
                }

                // Play/Pause Big Button
                Box(
                    modifier = Modifier
                        .size(52.dp)
                        .clip(CircleShape)
                        .background(WordNestTheme.colors.forest900)
                        .clickable(onClick = onPlayPause),
                    contentAlignment = Alignment.Center
                ) {
                    if (isLoading) {
                        CircularProgressIndicator(
                            modifier = Modifier.size(24.dp),
                            color = WordNestTheme.colors.amber400,
                            strokeWidth = 2.dp
                        )
                    } else {
                        Icon(
                            imageVector = if (isPlaying) Icons.Default.Pause else Icons.Default.PlayArrow,
                            contentDescription = "Phát/Tạm dừng",
                            tint = WordNestTheme.colors.amber400,
                            modifier = Modifier.size(30.dp)
                        )
                    }
                }

                // Tua +5s
                IconButton(onClick = onSeekForward) {
                    Icon(
                        imageVector = Icons.Default.Forward5,
                        contentDescription = "Tua tiến 5s",
                        tint = WordNestTheme.colors.ink900
                    )
                }

                // Speed button
                TextButton(
                    onClick = onSpeedChange,
                    contentPadding = PaddingValues(horizontal = 8.dp)
                ) {
                    Text(
                        text = "${speed}x",
                        style = WordNestTheme.typography.labelMedium.copy(fontWeight = FontWeight.Bold),
                        color = WordNestTheme.colors.forest900
                    )
                }
            }
        }
    }
}

// ==========================================
// 4. TAB 1: DICTATION CONTENT
// ==========================================

@Composable
private fun DictationTabContent(
    item: IntensiveListeningItem,
    currentSentenceIdx: Int,
    totalSentences: Int,
    currentLine: IntensiveDialogueLine?,
    userInput: String,
    isChecked: Boolean,
    diffResult: List<DiffWordUiModel>,
    accuracy: Int?,
    onUserInputChange: (String) -> Unit,
    onCheck: () -> Unit,
    onReset: () -> Unit,
    onHint: () -> Unit,
    onPrevSentence: () -> Unit,
    onNextSentence: () -> Unit,
    onSpeakSentence: () -> Unit
) {
    LazyColumn(
        modifier = Modifier
            .fillMaxSize()
            .padding(horizontal = 16.dp),
        verticalArrangement = Arrangement.spacedBy(14.dp),
        contentPadding = PaddingValues(top = 14.dp, bottom = 40.dp)
    ) {
        // Ảnh câu hỏi Part 1 nếu có
        if (!item.imageUrl.isNullOrBlank()) {
            item {
                Surface(
                    shape = WordNestTheme.shapes.small,
                    border = BorderStroke(1.dp, WordNestTheme.colors.line200),
                    modifier = Modifier.fillMaxWidth()
                ) {
                    AsyncImage(
                        model = "${ToeicAssets.TOEIC_ASSET_BASE_URL}${item.imageUrl}",
                        contentDescription = "Part 1 Picture",
                        modifier = Modifier
                            .fillMaxWidth()
                            .heightIn(max = 200.dp),
                        contentScale = ContentScale.Fit
                    )
                }
            }
        }

        // Sentence Carousel Nav (nếu có nhiều hơn 1 câu thoại)
        if (totalSentences > 1) {
            item {
                Row(
                    modifier = Modifier.fillMaxWidth(),
                    horizontalArrangement = Arrangement.SpaceBetween,
                    verticalAlignment = Alignment.CenterVertically
                ) {
                    OutlinedWordNestButton(
                        text = "Câu trước",
                        onClick = onPrevSentence,
                        enabled = currentSentenceIdx > 0,
                        modifier = Modifier.height(36.dp)
                    )
                    Text(
                        text = "Câu ${currentSentenceIdx + 1} / $totalSentences",
                        style = WordNestTheme.typography.labelMedium.copy(fontWeight = FontWeight.Bold),
                        color = WordNestTheme.colors.forest900
                    )
                    OutlinedWordNestButton(
                        text = "Câu sau",
                        onClick = onNextSentence,
                        enabled = currentSentenceIdx < totalSentences - 1,
                        modifier = Modifier.height(36.dp)
                    )
                }
            }
        }

        // Action tools: Loa phát câu & Gợi ý từ tiếp theo
        item {
            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.spacedBy(10.dp)
            ) {
                OutlinedWordNestButton(
                    text = "🔊 Nghe lại câu",
                    onClick = onSpeakSentence,
                    modifier = Modifier.weight(1f)
                )
                OutlinedWordNestButton(
                    text = "💡 Gợi ý từ",
                    onClick = onHint,
                    modifier = Modifier.weight(1f)
                )
            }
        }

        // Ô nhập chính tả
        item {
            OutlinedTextField(
                value = userInput,
                onValueChange = onUserInputChange,
                placeholder = {
                    Text(
                        text = "Nghe audio và gõ lại câu bạn nghe được...",
                        color = WordNestTheme.colors.slate400
                    )
                },
                modifier = Modifier
                    .fillMaxWidth()
                    .heightIn(min = 120.dp),
                shape = WordNestTheme.shapes.small,
                colors = OutlinedTextFieldDefaults.colors(
                    focusedBorderColor = WordNestTheme.colors.forest900,
                    focusedLabelColor = WordNestTheme.colors.forest900
                )
            )
        }

        // Nút Kiểm tra / Làm lại
        item {
            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.spacedBy(10.dp)
            ) {
                if (isChecked) {
                    OutlinedWordNestButton(
                        text = "Làm lại câu này",
                        onClick = onReset,
                        modifier = Modifier.weight(1f)
                    )
                }
                PrimaryButton(
                    text = if (isChecked) "Kiểm tra lại" else "Kiểm tra đáp án",
                    onClick = onCheck,
                    enabled = userInput.isNotBlank(),
                    modifier = Modifier.weight(1f)
                )
            }
        }

        // Kết quả Diff-Check
        if (isChecked && diffResult.isNotEmpty()) {
            item {
                Surface(
                    shape = WordNestTheme.shapes.small,
                    color = WordNestTheme.colors.surface,
                    border = BorderStroke(1.dp, WordNestTheme.colors.line200),
                    modifier = Modifier.fillMaxWidth()
                ) {
                    Column(modifier = Modifier.padding(16.dp)) {
                        Row(
                            modifier = Modifier.fillMaxWidth(),
                            horizontalArrangement = Arrangement.SpaceBetween,
                            verticalAlignment = Alignment.CenterVertically
                        ) {
                            Text(
                                text = "Kết quả đối chiếu:",
                                style = WordNestTheme.typography.titleMedium,
                                color = WordNestTheme.colors.ink900
                            )
                            accuracy?.let { acc ->
                                Surface(
                                    shape = CircleShape,
                                    color = if (acc >= 90) WordNestTheme.colors.mint500.copy(alpha = 0.2f) else WordNestTheme.colors.amberTint
                                ) {
                                    Text(
                                        text = "Chính xác: $acc%",
                                        style = WordNestTheme.typography.labelSmall.copy(fontWeight = FontWeight.Bold),
                                        color = if (acc >= 90) WordNestTheme.colors.mint500 else WordNestTheme.colors.orange600,
                                        modifier = Modifier.padding(horizontal = 8.dp, vertical = 4.dp)
                                    )
                                }
                            }
                        }

                        Spacer(modifier = Modifier.height(12.dp))

                        // Diff Word Badges Flow
                        OptInDiffWordsFlow(diffResult)

                        Spacer(modifier = Modifier.height(14.dp))
                        HorizontalDivider(color = WordNestTheme.colors.line200)
                        Spacer(modifier = Modifier.height(12.dp))

                        // Dịch nghĩa câu
                        currentLine?.let { line ->
                            Text(
                                text = "Bản dịch nghĩa:",
                                style = WordNestTheme.typography.labelSmall,
                                color = WordNestTheme.colors.slate500
                            )
                            Spacer(modifier = Modifier.height(4.dp))
                            Text(
                                text = line.vietnamese,
                                style = WordNestTheme.typography.bodyMedium,
                                color = WordNestTheme.colors.ink900
                            )
                        }
                    }
                }
            }
        }
    }
}

@OptIn(ExperimentalLayoutApi::class)
@Composable
private fun OptInDiffWordsFlow(diffWords: List<DiffWordUiModel>) {
    FlowRow(
        horizontalArrangement = Arrangement.spacedBy(8.dp),
        verticalArrangement = Arrangement.spacedBy(8.dp),
        modifier = Modifier.fillMaxWidth()
    ) {
        diffWords.forEach { dw ->
            when (dw.type) {
                DiffType.CORRECT -> {
                    Surface(
                        shape = RoundedCornerShape(6.dp),
                        color = WordNestTheme.colors.mint500.copy(alpha = 0.15f),
                        border = BorderStroke(1.dp, WordNestTheme.colors.mint500)
                    ) {
                        Text(
                            text = dw.targetWord,
                            style = WordNestTheme.typography.bodyMedium.copy(fontWeight = FontWeight.Bold),
                            color = WordNestTheme.colors.mint500,
                            modifier = Modifier.padding(horizontal = 8.dp, vertical = 4.dp)
                        )
                    }
                }
                DiffType.INCORRECT -> {
                    Surface(
                        shape = RoundedCornerShape(6.dp),
                        color = WordNestTheme.colors.coralTint,
                        border = BorderStroke(1.dp, WordNestTheme.colors.coral500)
                    ) {
                        Column(
                            horizontalAlignment = Alignment.CenterHorizontally,
                            modifier = Modifier.padding(horizontal = 8.dp, vertical = 2.dp)
                        ) {
                            Text(
                                text = dw.userWord ?: "",
                                style = WordNestTheme.typography.bodyMedium.copy(
                                    fontWeight = FontWeight.Bold,
                                    textDecoration = TextDecoration.LineThrough
                                ),
                                color = WordNestTheme.colors.coral500
                            )
                            Text(
                                text = "(${dw.targetWord})",
                                style = WordNestTheme.typography.labelSmall,
                                color = WordNestTheme.colors.mint500
                            )
                        }
                    }
                }
                DiffType.MISSING -> {
                    Surface(
                        shape = RoundedCornerShape(6.dp),
                        color = WordNestTheme.colors.beige100,
                        border = BorderStroke(1.dp, WordNestTheme.colors.amber500)
                    ) {
                        Text(
                            text = "____ (${dw.targetWord})",
                            style = WordNestTheme.typography.bodyMedium,
                            color = WordNestTheme.colors.slate500,
                            modifier = Modifier.padding(horizontal = 8.dp, vertical = 4.dp)
                        )
                    }
                }
            }
        }
    }
}

// ==========================================
// 5. TAB 2: QUIZ CONTENT
// ==========================================

@Composable
private fun QuizTabContent(
    questions: List<IntensiveQuestion>,
    quizAnswers: Map<Int, String>,
    onSelectAnswer: (qNum: Int, optKey: String) -> Unit
) {
    if (questions.isEmpty()) {
        Box(
            modifier = Modifier
                .fillMaxSize()
                .padding(32.dp),
            contentAlignment = Alignment.Center
        ) {
            Text(
                text = "Phần này là câu ngắn/đơn, không có câu hỏi trắc nghiệm riêng.\nHãy luyện nghe chép chính tả ở tab bên cạnh nhé!",
                style = WordNestTheme.typography.bodyMedium,
                color = WordNestTheme.colors.slate500,
                textAlign = TextAlign.Center
            )
        }
        return
    }

    LazyColumn(
        modifier = Modifier
            .fillMaxSize()
            .padding(horizontal = 16.dp),
        verticalArrangement = Arrangement.spacedBy(16.dp),
        contentPadding = PaddingValues(top = 16.dp, bottom = 40.dp)
    ) {
        items(questions) { q ->
            val selectedOption = quizAnswers[q.num]
            val isSubmitted = selectedOption != null

            Surface(
                shape = WordNestTheme.shapes.small,
                color = WordNestTheme.colors.surface,
                border = BorderStroke(1.dp, WordNestTheme.colors.line200),
                modifier = Modifier.fillMaxWidth()
            ) {
                Column(modifier = Modifier.padding(16.dp)) {
                    Text(
                        text = "Câu ${q.num}: ${q.question}",
                        style = WordNestTheme.typography.titleMedium,
                        color = WordNestTheme.colors.ink900
                    )

                    q.vietnameseQuestion?.let { vq ->
                        Spacer(modifier = Modifier.height(4.dp))
                        Text(
                            text = vq,
                            style = WordNestTheme.typography.bodySmall,
                            color = WordNestTheme.colors.slate500
                        )
                    }

                    Spacer(modifier = Modifier.height(14.dp))

                    // Options A, B, C, D
                    q.options.forEach { opt ->
                        val isPicked = selectedOption == opt.key
                        val isCorrectKey = opt.key == q.correctAnswer

                        val containerColor = when {
                            !isSubmitted -> if (isPicked) WordNestTheme.colors.amberTint else WordNestTheme.colors.beige100
                            isCorrectKey -> WordNestTheme.colors.mint500.copy(alpha = 0.15f)
                            isPicked && !isCorrectKey -> WordNestTheme.colors.coralTint
                            else -> WordNestTheme.colors.beige100
                        }

                        val borderColor = when {
                            !isSubmitted -> if (isPicked) WordNestTheme.colors.forest900 else Color.Transparent
                            isCorrectKey -> WordNestTheme.colors.mint500
                            isPicked && !isCorrectKey -> WordNestTheme.colors.coral500
                            else -> Color.Transparent
                        }

                        Surface(
                            onClick = { onSelectAnswer(q.num, opt.key) },
                            shape = WordNestTheme.shapes.small,
                            color = containerColor,
                            border = BorderStroke(1.dp, borderColor),
                            modifier = Modifier
                                .fillMaxWidth()
                                .padding(vertical = 4.dp)
                        ) {
                            Row(
                                modifier = Modifier.padding(12.dp),
                                verticalAlignment = Alignment.CenterVertically
                            ) {
                                Surface(
                                    shape = CircleShape,
                                    color = if (isPicked) WordNestTheme.colors.forest900 else WordNestTheme.colors.surface,
                                    border = BorderStroke(1.dp, WordNestTheme.colors.line200),
                                    modifier = Modifier.size(28.dp)
                                ) {
                                    Box(contentAlignment = Alignment.Center) {
                                        Text(
                                            text = opt.key,
                                            style = WordNestTheme.typography.labelSmall.copy(fontWeight = FontWeight.Bold),
                                            color = if (isPicked) Color.White else WordNestTheme.colors.ink900
                                        )
                                    }
                                }
                                Spacer(modifier = Modifier.width(10.dp))
                                Column {
                                    Text(
                                        text = opt.text,
                                        style = WordNestTheme.typography.bodyMedium,
                                        color = WordNestTheme.colors.ink900
                                    )
                                    opt.vietnamese?.let { ov ->
                                        Text(
                                            text = ov,
                                            style = WordNestTheme.typography.labelSmall,
                                            color = WordNestTheme.colors.slate500
                                        )
                                    }
                                }
                            }
                        }
                    }

                    // Explanation & Clue text
                    if (isSubmitted && (!q.explanation.isNullOrBlank() || !q.clueText.isNullOrBlank())) {
                        Spacer(modifier = Modifier.height(14.dp))
                        Surface(
                            shape = WordNestTheme.shapes.small,
                            color = WordNestTheme.colors.amberTint,
                            modifier = Modifier.fillMaxWidth()
                        ) {
                            Column(modifier = Modifier.padding(12.dp)) {
                                Text(
                                    text = "💡 Giải thích & Dẫn chứng:",
                                    style = WordNestTheme.typography.labelMedium.copy(fontWeight = FontWeight.Bold),
                                    color = WordNestTheme.colors.forest900
                                )
                                q.explanation?.let { exp ->
                                    Spacer(modifier = Modifier.height(4.dp))
                                    Text(
                                        text = exp,
                                        style = WordNestTheme.typography.bodySmall,
                                        color = WordNestTheme.colors.ink900
                                    )
                                }
                                q.clueText?.let { clue ->
                                    Spacer(modifier = Modifier.height(4.dp))
                                    Text(
                                        text = "Dẫn chứng: $clue",
                                        style = WordNestTheme.typography.bodySmall.copy(fontWeight = FontWeight.SemiBold),
                                        color = WordNestTheme.colors.forest900
                                    )
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

// ==========================================
// 6. TAB 3: TRANSCRIPT & VOCAB CONTENT
// ==========================================

@Composable
private fun TranscriptTabContent(
    transcript: List<IntensiveDialogueLine>,
    vocabulary: List<IntensiveVocab>,
    imageUrl: String?,
    onSpeak: (String) -> Unit,
    onSaveWord: (term: String, meaning: String, ipa: String?, pos: String?, example: String?) -> Unit
) {
    LazyColumn(
        modifier = Modifier
            .fillMaxSize()
            .padding(horizontal = 16.dp),
        verticalArrangement = Arrangement.spacedBy(14.dp),
        contentPadding = PaddingValues(top = 16.dp, bottom = 40.dp)
    ) {
        // Ảnh nếu có
        if (!imageUrl.isNullOrBlank()) {
            item {
                Surface(
                    shape = WordNestTheme.shapes.small,
                    border = BorderStroke(1.dp, WordNestTheme.colors.line200),
                    modifier = Modifier.fillMaxWidth()
                ) {
                    AsyncImage(
                        model = "${ToeicAssets.TOEIC_ASSET_BASE_URL}$imageUrl",
                        contentDescription = "Graphic Image",
                        modifier = Modifier
                            .fillMaxWidth()
                            .heightIn(max = 200.dp),
                        contentScale = ContentScale.Fit
                    )
                }
            }
        }

        // Section Lời thoại
        item {
            Text(
                text = "Lời thoại song ngữ",
                style = WordNestTheme.typography.titleMedium,
                color = WordNestTheme.colors.forest900
            )
        }

        items(transcript) { line ->
            Surface(
                shape = WordNestTheme.shapes.small,
                color = WordNestTheme.colors.surface,
                border = BorderStroke(1.dp, WordNestTheme.colors.line200),
                modifier = Modifier.fillMaxWidth()
            ) {
                Row(
                    modifier = Modifier.padding(14.dp),
                    verticalAlignment = Alignment.Top
                ) {
                    IconButton(
                        onClick = { onSpeak(line.text) },
                        modifier = Modifier.size(32.dp)
                    ) {
                        Icon(
                            Icons.Default.VolumeUp,
                            contentDescription = "Nghe",
                            tint = WordNestTheme.colors.forest900,
                            modifier = Modifier.size(20.dp)
                        )
                    }
                    Spacer(modifier = Modifier.width(8.dp))
                    Column(modifier = Modifier.weight(1f)) {
                        if (line.speaker.isNotBlank()) {
                            Text(
                                text = line.speaker,
                                style = WordNestTheme.typography.labelSmall.copy(fontWeight = FontWeight.Bold),
                                color = WordNestTheme.colors.amber500
                            )
                            Spacer(modifier = Modifier.height(2.dp))
                        }
                        Text(
                            text = line.text,
                            style = WordNestTheme.typography.bodyMedium.copy(fontWeight = FontWeight.SemiBold),
                            color = WordNestTheme.colors.ink900
                        )
                        Spacer(modifier = Modifier.height(4.dp))
                        Text(
                            text = line.vietnamese,
                            style = WordNestTheme.typography.bodySmall,
                            color = WordNestTheme.colors.slate500
                        )
                    }
                }
            }
        }

        // Section Từ vựng trọng tâm
        if (vocabulary.isNotEmpty()) {
            item {
                Spacer(modifier = Modifier.height(10.dp))
                Text(
                    text = "Từ vựng trọng tâm (${vocabulary.size})",
                    style = WordNestTheme.typography.titleMedium,
                    color = WordNestTheme.colors.forest900
                )
            }

            items(vocabulary) { v ->
                Surface(
                    shape = WordNestTheme.shapes.small,
                    color = WordNestTheme.colors.surface,
                    border = BorderStroke(1.dp, WordNestTheme.colors.line200),
                    modifier = Modifier.fillMaxWidth()
                ) {
                    Row(
                        modifier = Modifier.padding(14.dp),
                        verticalAlignment = Alignment.CenterVertically
                    ) {
                        Column(modifier = Modifier.weight(1f)) {
                            Row(
                                verticalAlignment = Alignment.CenterVertically,
                                horizontalArrangement = Arrangement.spacedBy(8.dp)
                            ) {
                                Text(
                                    text = v.word,
                                    style = WordNestTheme.typography.bodyMedium.copy(fontWeight = FontWeight.Bold),
                                    color = WordNestTheme.colors.forest900
                                )
                                v.partOfSpeech?.let { p ->
                                    Text(
                                        text = "($p)",
                                        style = WordNestTheme.typography.labelSmall,
                                        color = WordNestTheme.colors.slate400
                                    )
                                }
                                v.phonetic?.let { ipa ->
                                    Text(
                                        text = ipa,
                                        style = WordNestTheme.typography.labelSmall,
                                        color = WordNestTheme.colors.amber500
                                    )
                                }
                            }
                            Spacer(modifier = Modifier.height(4.dp))
                            Text(
                                text = v.meaning,
                                style = WordNestTheme.typography.bodySmall,
                                color = WordNestTheme.colors.ink900
                            )
                        }

                        // Nút thêm vào bộ từ
                        OutlinedWordNestButton(
                            text = "+ Lưu",
                            onClick = {
                                onSaveWord(v.word, v.meaning, v.phonetic, v.partOfSpeech, v.example)
                            },
                            modifier = Modifier.height(34.dp)
                        )
                    }
                }
            }
        }
    }
}

// ==========================================
// 7. HELPER FUNCTIONS
// ==========================================

private fun formatMs(ms: Long): String {
    val totalSec = (ms / 1000L).coerceAtLeast(0L)
    val m = totalSec / 60
    val s = totalSec % 60
    return String.format("%02d:%02d", m, s)
}
