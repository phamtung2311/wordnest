package com.tung.wordnest.ui.screens.toeic

import androidx.compose.animation.AnimatedVisibility
import androidx.compose.foundation.BorderStroke
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.grid.GridCells
import androidx.compose.foundation.lazy.grid.LazyVerticalGrid
import androidx.compose.foundation.lazy.grid.items
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.automirrored.filled.ArrowBack
import androidx.compose.material.icons.filled.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.media3.common.MediaItem
import androidx.media3.common.PlaybackParameters
import androidx.media3.common.Player
import androidx.media3.common.util.UnstableApi
import androidx.media3.exoplayer.ExoPlayer
import com.google.firebase.auth.FirebaseAuth
import com.tung.wordnest.WordNestApplication
import com.tung.wordnest.data.remote.ExamHistoryEntry
import com.tung.wordnest.ui.components.core.PrimaryButton
import com.tung.wordnest.ui.screens.toeic.exam.PartResultUiModel
import com.tung.wordnest.ui.screens.toeic.exam.ResultState
import com.tung.wordnest.ui.screens.toeic.exam.ToeicResultScreen
import com.tung.wordnest.ui.theme.WordNestTheme
import kotlinx.coroutines.delay
import kotlinx.coroutines.launch
import java.time.LocalDateTime
import java.time.format.DateTimeFormatter
import java.util.Locale

@OptIn(UnstableApi::class, ExperimentalMaterial3Api::class)
@Composable
fun ToeicListeningScreen(
    testId: String,
    onBackClick: () -> Unit,
    modifier: Modifier = Modifier
) {
    val context = LocalContext.current
    val app = context.applicationContext as WordNestApplication
    val progressStore = app.toeicProgressStore
    val syncRepo = app.syncRepository
    val scope = app.appScope

    val testTitle = remember(testId) { ToeicAssets.getToeicTitle(testId) }
    val audioUrl = remember(testId) { ToeicAssets.getToeicAudioUrl(testId) }
    val answerKey = remember(testId) { ToeicAnswerKeyStore.getListeningKey(context, testId) }

    // State đáp án người dùng đã chọn: Map 1..100 -> "A"|"B"|"C"|"D"
    val userAnswers = remember {
        mutableStateMapOf<Int, String>().apply {
            putAll(progressStore.getListeningProgress(testId))
        }
    }

    var currentQuestionNum by remember { mutableIntStateOf(1) }
    var selectedPartFilter by remember { mutableStateOf("ALL") } // "ALL", "P1", "P2", "P3", "P4", "UNANSWERED"
    var showQuestionMapModal by remember { mutableStateOf(false) }
    var showExitConfirmDialog by remember { mutableStateOf(false) }
    var showSubmitConfirmDialog by remember { mutableStateOf(false) }
    var isSubmitted by remember { mutableStateOf(false) }
    var resultState by remember { mutableStateOf<ResultState?>(null) }

    // Audio Player State
    var isPlaying by remember { mutableStateOf(false) }
    var currentPositionMs by remember { mutableLongStateOf(0L) }
    var durationMs by remember { mutableLongStateOf(0L) }
    var playbackSpeed by remember { mutableFloatStateOf(1.0f) }
    var showSpeedMenu by remember { mutableStateOf(false) }

    // Khởi tạo ExoPlayer
    val exoPlayer = remember {
        ExoPlayer.Builder(context).build().apply {
            val mediaItem = MediaItem.fromUri(audioUrl)
            setMediaItem(mediaItem)
            prepare()
            // Khôi phục mốc giây đã lưu
            val savedSeconds = progressStore.getListeningAudioTime(testId)
            if (savedSeconds > 0) {
                seekTo(savedSeconds * 1000L)
            }
        }
    }

    // Lắng nghe trạng thái player & ticker cập nhật thời gian
    DisposableEffect(exoPlayer) {
        val listener = object : Player.Listener {
            override fun onIsPlayingChanged(playing: Boolean) {
                isPlaying = playing
            }

            override fun onPlaybackStateChanged(state: Int) {
                if (state == Player.STATE_READY) {
                    durationMs = exoPlayer.duration.coerceAtLeast(0L)
                }
            }
        }
        exoPlayer.addListener(listener)

        onDispose {
            exoPlayer.removeListener(listener)
            // Lưu lại giây audio trước khi thoát
            val currentSec = exoPlayer.currentPosition / 1000L
            progressStore.saveListeningAudioTime(testId, currentSec)
            exoPlayer.release()
        }
    }

    // Ticker định kỳ lưu mốc giây và cập nhật progress bar
    LaunchedEffect(isPlaying) {
        while (isPlaying) {
            currentPositionMs = exoPlayer.currentPosition
            durationMs = exoPlayer.duration.coerceAtLeast(0L)
            // Tự động lưu mỗi giây
            progressStore.saveListeningAudioTime(testId, currentPositionMs / 1000L)
            delay(500)
        }
    }

    fun onOptionSelected(qNum: Int, option: String) {
        if (isSubmitted) return
        userAnswers[qNum] = option
        progressStore.saveListeningProgress(testId, userAnswers)

        // Auto-advance sang câu tiếp theo nếu chưa phải câu cuối
        if (qNum < 100) {
            currentQuestionNum = qNum + 1
        }
    }

    fun submitExam() {
        exoPlayer.pause()

        val totalCorrect = (1..100).count { qNum ->
            userAnswers[qNum] != null && userAnswers[qNum] == answerKey[qNum.toString()]
        }
        val p1Correct = (1..6).count { userAnswers[it] != null && userAnswers[it] == answerKey[it.toString()] }
        val p2Correct = (7..31).count { userAnswers[it] != null && userAnswers[it] == answerKey[it.toString()] }
        val p3Correct = (32..70).count { userAnswers[it] != null && userAnswers[it] == answerKey[it.toString()] }
        val p4Correct = (71..100).count { userAnswers[it] != null && userAnswers[it] == answerKey[it.toString()] }

        val finalScore = ToeicScoreConverter.getListeningToeicScore(totalCorrect)

        val dateStr = LocalDateTime.now().format(DateTimeFormatter.ISO_LOCAL_DATE_TIME)
        val historyEntry = ExamHistoryEntry(
            testId = testId,
            kind = "listening",
            score = finalScore,
            date = dateStr
        )

        // Lưu local + xóa tiến độ dở dang
        progressStore.recordExamHistory(historyEntry)
        progressStore.clearListeningProgress(testId)
        progressStore.clearListeningAudioTime(testId)

        // Đẩy lên Firestore nếu đăng nhập
        val uid = FirebaseAuth.getInstance().currentUser?.uid
        if (uid != null) {
            scope.launch {
                syncRepo.pushExamHistory(uid, historyEntry)
            }
        }

        resultState = ResultState(
            examName = "$testTitle (Listening)",
            totalScore = finalScore,
            correctCount = totalCorrect,
            incorrectCount = (1..100).count { userAnswers[it] != null && userAnswers[it] != answerKey[it.toString()] },
            skippedCount = (1..100).count { userAnswers[it] == null },
            partResults = listOf(
                PartResultUiModel("Part 1: Photographs (1-6)", p1Correct, 6),
                PartResultUiModel("Part 2: Question-Response (7-31)", p2Correct, 25),
                PartResultUiModel("Part 3: Conversations (32-70)", p3Correct, 39),
                PartResultUiModel("Part 4: Short Talks (71-100)", p4Correct, 30)
            )
        )
        isSubmitted = true
    }

    if (isSubmitted && resultState != null) {
        ToeicResultScreen(
            state = resultState!!,
            onBackHomeClick = onBackClick,
            onRetryIncorrectClick = { isSubmitted = false },
            onViewExplanationsClick = { isSubmitted = false }
        )
        return
    }

    Scaffold(
        modifier = modifier.fillMaxSize(),
        containerColor = WordNestTheme.colors.background,
        contentWindowInsets = WindowInsets.systemBars,
        topBar = {
            TopAppBar(
                title = {
                    Column {
                        Text(
                            text = testTitle,
                            style = WordNestTheme.typography.titleMedium,
                            color = WordNestTheme.colors.ink900
                        )
                        Text(
                            text = "Listening · Câu $currentQuestionNum/100 · Đã làm: ${userAnswers.size}/100",
                            style = WordNestTheme.typography.labelSmall,
                            color = WordNestTheme.colors.slate500
                        )
                    }
                },
                navigationIcon = {
                    IconButton(onClick = { showExitConfirmDialog = true }) {
                        Icon(Icons.AutoMirrored.Filled.ArrowBack, contentDescription = "Thoát", tint = WordNestTheme.colors.ink900)
                    }
                },
                actions = {
                    IconButton(onClick = { showQuestionMapModal = true }) {
                        Icon(Icons.Default.GridView, contentDescription = "Bảng câu hỏi", tint = WordNestTheme.colors.forest900)
                    }
                    TextButton(onClick = { showSubmitConfirmDialog = true }) {
                        Text("Nộp bài", style = WordNestTheme.typography.labelMedium.copy(fontWeight = FontWeight.Bold), color = WordNestTheme.colors.coral500)
                    }
                },
                colors = TopAppBarDefaults.topAppBarColors(containerColor = WordNestTheme.colors.surface)
            )
        }
    ) { innerPadding ->
        Column(
            modifier = Modifier
                .fillMaxSize()
                .padding(innerPadding)
        ) {
            // 1. Sticky Audio Bar (ExoPlayer Controller)
            Surface(
                color = WordNestTheme.colors.forest900,
                shadowElevation = 4.dp,
                modifier = Modifier.fillMaxWidth()
            ) {
                Column(
                    modifier = Modifier
                        .fillMaxWidth()
                        .padding(horizontal = 16.dp, vertical = 12.dp)
                ) {
                    // Thanh thời gian Slider
                    Row(
                        modifier = Modifier.fillMaxWidth(),
                        horizontalArrangement = Arrangement.SpaceBetween,
                        verticalAlignment = Alignment.CenterVertically
                    ) {
                        Text(
                            text = formatTime(currentPositionMs),
                            style = WordNestTheme.typography.labelSmall,
                            color = Color.White.copy(alpha = 0.8f)
                        )
                        Slider(
                            value = if (durationMs > 0) currentPositionMs.toFloat() / durationMs.toFloat() else 0f,
                            onValueChange = { ratio ->
                                val targetMs = (ratio * durationMs).toLong()
                                currentPositionMs = targetMs
                                exoPlayer.seekTo(targetMs)
                            },
                            colors = SliderDefaults.colors(
                                thumbColor = WordNestTheme.colors.amber400,
                                activeTrackColor = WordNestTheme.colors.amber400,
                                inactiveTrackColor = Color.White.copy(alpha = 0.3f)
                            ),
                            modifier = Modifier
                                .weight(1f)
                                .padding(horizontal = 8.dp)
                        )
                        Text(
                            text = formatTime(durationMs),
                            style = WordNestTheme.typography.labelSmall,
                            color = Color.White.copy(alpha = 0.8f)
                        )
                    }

                    // Nút điều khiển audio
                    Row(
                        modifier = Modifier.fillMaxWidth(),
                        horizontalArrangement = Arrangement.SpaceBetween,
                        verticalAlignment = Alignment.CenterVertically
                    ) {
                        // Chọn tốc độ (0.8x, 1.0x, 1.2x, 1.5x)
                        Box {
                            TextButton(
                                onClick = { showSpeedMenu = true },
                                colors = ButtonDefaults.textButtonColors(contentColor = Color.White)
                            ) {
                                Text("${playbackSpeed}x", fontWeight = FontWeight.Bold)
                            }
                            DropdownMenu(
                                expanded = showSpeedMenu,
                                onDismissRequest = { showSpeedMenu = false }
                            ) {
                                listOf(0.8f, 1.0f, 1.2f, 1.5f).forEach { speed ->
                                    DropdownMenuItem(
                                        text = { Text("${speed}x") },
                                        onClick = {
                                            playbackSpeed = speed
                                            exoPlayer.playbackParameters = PlaybackParameters(speed)
                                            showSpeedMenu = false
                                        }
                                    )
                                }
                            }
                        }

                        // Cụm Play/Pause & Tua
                        Row(
                            horizontalArrangement = Arrangement.spacedBy(16.dp),
                            verticalAlignment = Alignment.CenterVertically
                        ) {
                            IconButton(onClick = {
                                val newPos = (exoPlayer.currentPosition - 5000L).coerceAtLeast(0L)
                                exoPlayer.seekTo(newPos)
                                currentPositionMs = newPos
                            }) {
                                Icon(Icons.Default.Replay5, contentDescription = "Tua lùi 5s", tint = Color.White)
                            }

                            FilledIconButton(
                                onClick = {
                                    if (isPlaying) {
                                        exoPlayer.pause()
                                    } else {
                                        exoPlayer.play()
                                    }
                                },
                                colors = IconButtonDefaults.filledIconButtonColors(
                                    containerColor = WordNestTheme.colors.amber400,
                                    contentColor = WordNestTheme.colors.forest900
                                ),
                                modifier = Modifier.size(52.dp)
                            ) {
                                Icon(
                                    imageVector = if (isPlaying) Icons.Default.Pause else Icons.Default.PlayArrow,
                                    contentDescription = if (isPlaying) "Tạm dừng" else "Phát",
                                    modifier = Modifier.size(28.dp)
                                )
                            }

                            IconButton(onClick = {
                                val newPos = (exoPlayer.currentPosition + 5000L).coerceAtMost(durationMs)
                                exoPlayer.seekTo(newPos)
                                currentPositionMs = newPos
                            }) {
                                Icon(Icons.Default.Forward5, contentDescription = "Tua tới 5s", tint = Color.White)
                            }
                        }

                        // Nút reset về đầu
                        IconButton(onClick = {
                            exoPlayer.seekTo(0L)
                            currentPositionMs = 0L
                        }) {
                            Icon(Icons.Default.RestartAlt, contentDescription = "Phát lại từ đầu", tint = Color.White.copy(alpha = 0.8f))
                        }
                    }
                }
            }

            // 2. Filter Part Chips
            Row(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(horizontal = 12.dp, vertical = 8.dp),
                horizontalArrangement = Arrangement.spacedBy(6.dp)
            ) {
                FilterChip(
                    selected = selectedPartFilter == "ALL",
                    onClick = { selectedPartFilter = "ALL" },
                    label = { Text("Tất cả", fontSize = 11.sp) }
                )
                FilterChip(
                    selected = selectedPartFilter == "P1",
                    onClick = {
                        selectedPartFilter = "P1"
                        if (currentQuestionNum !in 1..6) currentQuestionNum = 1
                    },
                    label = { Text("Part 1 (1-6)", fontSize = 11.sp) }
                )
                FilterChip(
                    selected = selectedPartFilter == "P2",
                    onClick = {
                        selectedPartFilter = "P2"
                        if (currentQuestionNum !in 7..31) currentQuestionNum = 7
                    },
                    label = { Text("Part 2 (7-31)", fontSize = 11.sp) }
                )
                FilterChip(
                    selected = selectedPartFilter == "P3",
                    onClick = {
                        selectedPartFilter = "P3"
                        if (currentQuestionNum !in 32..70) currentQuestionNum = 32
                    },
                    label = { Text("Part 3 (32-70)", fontSize = 11.sp) }
                )
                FilterChip(
                    selected = selectedPartFilter == "P4",
                    onClick = {
                        selectedPartFilter = "P4"
                        if (currentQuestionNum !in 7..100) currentQuestionNum = 71
                    },
                    label = { Text("Part 4 (71-100)", fontSize = 11.sp) }
                )
            }

            HorizontalDivider(color = WordNestTheme.colors.line200)

            // 3. Phiếu đáp án câu hỏi hiện tại
            val partTitle = when (currentQuestionNum) {
                in 1..6 -> "Part 1 · Photographs"
                in 7..31 -> "Part 2 · Question - Response"
                in 32..70 -> "Part 3 · Conversations"
                else -> "Part 4 · Short Talks"
            }
            // Part 1 và Part 2: đặc thù chỉ có A, B, C (hoặc A, B, C, D cho part 3, 4)
            val availableOptions = if (currentQuestionNum in 1..31) listOf("A", "B", "C") else listOf("A", "B", "C", "D")
            val currentAnswer = userAnswers[currentQuestionNum]

            Column(
                modifier = Modifier
                    .fillMaxSize()
                    .padding(20.dp),
                verticalArrangement = Arrangement.SpaceBetween
            ) {
                Column {
                    Row(
                        modifier = Modifier.fillMaxWidth(),
                        horizontalArrangement = Arrangement.SpaceBetween,
                        verticalAlignment = Alignment.CenterVertically
                    ) {
                        Text(
                            text = "Câu $currentQuestionNum",
                            style = WordNestTheme.typography.headlineMedium,
                            color = WordNestTheme.colors.forest900
                        )
                        Surface(
                            shape = RoundedCornerShape(8.dp),
                            color = WordNestTheme.colors.beige100,
                            modifier = Modifier.padding(vertical = 4.dp)
                        ) {
                            Text(
                                text = partTitle,
                                style = WordNestTheme.typography.labelSmall,
                                color = WordNestTheme.colors.forest900,
                                modifier = Modifier.padding(horizontal = 8.dp, vertical = 4.dp)
                            )
                        }
                    }

                    Spacer(modifier = Modifier.height(24.dp))

                    // Lựa chọn đáp án
                    Row(
                        modifier = Modifier.fillMaxWidth(),
                        horizontalArrangement = Arrangement.spacedBy(12.dp)
                    ) {
                        availableOptions.forEach { opt ->
                            val isSelected = currentAnswer == opt
                            Surface(
                                onClick = { onOptionSelected(currentQuestionNum, opt) },
                                shape = RoundedCornerShape(12.dp),
                                color = if (isSelected) WordNestTheme.colors.forest900 else WordNestTheme.colors.surface,
                                border = BorderStroke(
                                    width = if (isSelected) 2.dp else 1.dp,
                                    color = if (isSelected) WordNestTheme.colors.forest900 else WordNestTheme.colors.line200
                                ),
                                modifier = Modifier
                                    .weight(1f)
                                    .height(64.dp)
                            ) {
                                Box(contentAlignment = Alignment.Center) {
                                    Text(
                                        text = opt,
                                        style = WordNestTheme.typography.titleLarge.copy(fontWeight = FontWeight.Bold),
                                        color = if (isSelected) Color.White else WordNestTheme.colors.ink900
                                    )
                                }
                            }
                        }
                    }
                }

                // Chuyển câu trước / sau
                Row(
                    modifier = Modifier.fillMaxWidth(),
                    horizontalArrangement = Arrangement.SpaceBetween,
                    verticalAlignment = Alignment.CenterVertically
                ) {
                    TextButton(
                        onClick = {
                            if (currentQuestionNum > 1) currentQuestionNum--
                        },
                        enabled = currentQuestionNum > 1
                    ) {
                        Row(verticalAlignment = Alignment.CenterVertically) {
                            Icon(Icons.AutoMirrored.Filled.ArrowBack, contentDescription = null, modifier = Modifier.size(16.dp))
                            Spacer(modifier = Modifier.width(4.dp))
                            Text("Câu trước")
                        }
                    }

                    Text(
                        text = "Câu $currentQuestionNum / 100",
                        style = WordNestTheme.typography.labelMedium,
                        color = WordNestTheme.colors.slate500
                    )

                    TextButton(
                        onClick = {
                            if (currentQuestionNum < 100) currentQuestionNum++
                        },
                        enabled = currentQuestionNum < 100
                    ) {
                        Row(verticalAlignment = Alignment.CenterVertically) {
                            Text("Câu sau")
                            Spacer(modifier = Modifier.width(4.dp))
                            Icon(Icons.Default.ArrowForward, contentDescription = null, modifier = Modifier.size(16.dp))
                        }
                    }
                }
            }
        }
    }

    // Modal Question Map
    if (showQuestionMapModal) {
        ModalBottomSheet(
            onDismissRequest = { showQuestionMapModal = false },
            containerColor = WordNestTheme.colors.surface
        ) {
            Column(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(16.dp)
            ) {
                Row(
                    modifier = Modifier.fillMaxWidth(),
                    horizontalArrangement = Arrangement.SpaceBetween,
                    verticalAlignment = Alignment.CenterVertically
                ) {
                    Text(
                        text = "Bảng câu hỏi (1 - 100)",
                        style = WordNestTheme.typography.titleMedium,
                        color = WordNestTheme.colors.ink900
                    )
                    Text(
                        text = "Đã làm: ${userAnswers.size}/100",
                        style = WordNestTheme.typography.labelMedium.copy(fontWeight = FontWeight.Bold),
                        color = WordNestTheme.colors.mint500
                    )
                }

                Spacer(modifier = Modifier.height(12.dp))

                LazyVerticalGrid(
                    columns = GridCells.Fixed(5),
                    horizontalArrangement = Arrangement.spacedBy(8.dp),
                    verticalArrangement = Arrangement.spacedBy(8.dp),
                    modifier = Modifier.height(360.dp)
                ) {
                    items((1..100).toList()) { qNum ->
                        val ans = userAnswers[qNum]
                        val isCurrent = qNum == currentQuestionNum
                        Surface(
                            onClick = {
                                currentQuestionNum = qNum
                                showQuestionMapModal = false
                            },
                            shape = RoundedCornerShape(8.dp),
                            color = when {
                                isCurrent -> WordNestTheme.colors.amber400
                                ans != null -> WordNestTheme.colors.forest900
                                else -> WordNestTheme.colors.beige100
                            },
                            border = BorderStroke(
                                width = 1.dp,
                                color = if (isCurrent) WordNestTheme.colors.forest900 else Color.Transparent
                            ),
                            modifier = Modifier.height(44.dp)
                        ) {
                            Box(contentAlignment = Alignment.Center) {
                                Text(
                                    text = "$qNum" + if (ans != null) " ($ans)" else "",
                                    style = WordNestTheme.typography.labelSmall.copy(fontWeight = FontWeight.Bold),
                                    color = when {
                                        isCurrent -> WordNestTheme.colors.forest900
                                        ans != null -> Color.White
                                        else -> WordNestTheme.colors.ink900
                                    }
                                )
                            }
                        }
                    }
                }
            }
        }
    }

    // Dialog Thoát
    if (showExitConfirmDialog) {
        AlertDialog(
            onDismissRequest = { showExitConfirmDialog = false },
            title = { Text("Tạm dừng làm bài?") },
            text = { Text("Tiến trình (${userAnswers.size}/100 câu) và giây audio (${formatTime(currentPositionMs)}) đã được tự động lưu. Bạn có thể quay lại làm tiếp bất cứ lúc nào.") },
            confirmButton = {
                PrimaryButton(text = "Lưu & Thoát", onClick = {
                    showExitConfirmDialog = false
                    onBackClick()
                })
            },
            dismissButton = {
                TextButton(onClick = { showExitConfirmDialog = false }) {
                    Text("Làm tiếp")
                }
            }
        )
    }

    // Dialog Nộp bài
    if (showSubmitConfirmDialog) {
        val unanswered = 100 - userAnswers.size
        AlertDialog(
            onDismissRequest = { showSubmitConfirmDialog = false },
            title = { Text("Nộp bài thi?") },
            text = {
                Text(
                    if (unanswered > 0)
                        "Bạn còn $unanswered câu chưa làm. Bạn có chắc chắn muốn nộp bài để xem điểm ETS?"
                    else
                        "Bạn đã hoàn thành toàn bộ 100 câu! Nộp bài ngay để chấm điểm chuẩn ETS?"
                )
            },
            confirmButton = {
                PrimaryButton(text = "Nộp bài", onClick = {
                    showSubmitConfirmDialog = false
                    submitExam()
                })
            },
            dismissButton = {
                TextButton(onClick = { showSubmitConfirmDialog = false }) {
                    Text("Kiểm tra lại")
                }
            }
        )
    }
}

private fun formatTime(ms: Long): String {
    val totalSeconds = (ms / 1000).coerceAtLeast(0)
    val minutes = totalSeconds / 60
    val seconds = totalSeconds % 60
    return String.format(Locale.getDefault(), "%02d:%02d", minutes, seconds)
}
