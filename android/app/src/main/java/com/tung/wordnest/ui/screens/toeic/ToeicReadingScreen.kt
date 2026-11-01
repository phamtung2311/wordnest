package com.tung.wordnest.ui.screens.toeic

import android.annotation.SuppressLint
import android.content.Intent
import android.net.Uri
import android.view.ViewGroup
import android.webkit.WebChromeClient
import android.webkit.WebView
import android.webkit.WebViewClient
import androidx.compose.animation.AnimatedVisibility
import androidx.compose.animation.expandVertically
import androidx.compose.animation.fadeIn
import androidx.compose.animation.fadeOut
import androidx.compose.animation.shrinkVertically
import androidx.compose.foundation.BorderStroke
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.gestures.detectVerticalDragGestures
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.grid.GridCells
import androidx.compose.foundation.lazy.grid.LazyVerticalGrid
import androidx.compose.foundation.lazy.grid.items
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.automirrored.filled.ArrowBack
import androidx.compose.material.icons.automirrored.filled.ArrowForward
import androidx.compose.material.icons.automirrored.filled.MenuBook
import androidx.compose.material.icons.filled.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.input.pointer.pointerInput
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.compose.ui.viewinterop.AndroidView
import coil.compose.AsyncImage
import com.google.firebase.auth.FirebaseAuth
import com.tung.wordnest.WordNestApplication
import com.tung.wordnest.data.remote.ExamHistoryEntry
import com.tung.wordnest.ui.components.core.PrimaryButton
import com.tung.wordnest.ui.screens.toeic.exam.PartResultUiModel
import com.tung.wordnest.ui.screens.toeic.exam.ResultState
import com.tung.wordnest.ui.screens.toeic.exam.ToeicResultScreen
import com.tung.wordnest.ui.theme.WordNestTheme
import kotlinx.coroutines.launch
import java.time.LocalDateTime
import java.time.format.DateTimeFormatter

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun ToeicReadingScreen(
    testId: String,
    onBackClick: () -> Unit,
    modifier: Modifier = Modifier
) {
    val context = LocalContext.current
    val app = context.applicationContext as WordNestApplication
    val progressStore = app.toeicProgressStore
    val syncRepo = app.syncRepository
    val scope = app.appScope

    // Kiểm tra xem đề thi có sẵn dữ liệu văn bản text không
    val textData = remember(testId) { ReadingTextStore.getReadingTest(context, testId) }

    val testTitle = remember(testId) { ToeicAssets.getToeicTitle(testId) }
    val answerKey = remember(testId) { ToeicAnswerKeyStore.getReadingKey(context, testId) }

    // State đáp án người dùng đã chọn: Map 101..200 -> "A"|"B"|"C"|"D"
    val userAnswers = remember {
        mutableStateMapOf<Int, String>().apply {
            putAll(progressStore.getReadingProgress(testId))
        }
    }

    var currentQuestionNum by remember { mutableIntStateOf(101) }
    var selectedPartFilter by remember { mutableStateOf("ALL") } // "ALL", "P5", "P6", "P7", "UNANSWERED"
    var showQuestionMapModal by remember { mutableStateOf(false) }
    var showExitConfirmDialog by remember { mutableStateOf(false) }
    var showSubmitConfirmDialog by remember { mutableStateOf(false) }
    var isSubmitted by remember { mutableStateOf(false) }
    var resultState by remember { mutableStateOf<ResultState?>(null) }

    fun onOptionSelected(qNum: Int, optionLetter: String) {
        if (isSubmitted) return
        userAnswers[qNum] = optionLetter
        progressStore.saveReadingProgress(testId, userAnswers)

        // Tự động chuyển sang câu tiếp theo
        if (qNum < 200) {
            currentQuestionNum = qNum + 1
        }
    }

    fun submitExam() {
        val totalCorrect = (101..200).count { qNum ->
            userAnswers[qNum] != null && userAnswers[qNum] == answerKey[qNum.toString()]
        }
        val p5Correct = (101..130).count { userAnswers[it] != null && userAnswers[it] == answerKey[it.toString()] }
        val p6Correct = (131..146).count { userAnswers[it] != null && userAnswers[it] == answerKey[it.toString()] }
        val p7Correct = (147..200).count { userAnswers[it] != null && userAnswers[it] == answerKey[it.toString()] }

        val finalScore = ToeicScoreConverter.getReadingToeicScore(totalCorrect)

        val dateStr = LocalDateTime.now().format(DateTimeFormatter.ISO_LOCAL_DATE_TIME)
        val historyEntry = ExamHistoryEntry(
            testId = testId,
            kind = "reading",
            score = finalScore,
            date = dateStr
        )

        // Lưu local + xóa tiến độ dở dang
        progressStore.recordExamHistory(historyEntry)
        progressStore.clearReadingProgress(testId)

        // Đẩy lên Firestore nếu đã đăng nhập
        val uid = FirebaseAuth.getInstance().currentUser?.uid
        if (uid != null) {
            scope.launch {
                syncRepo.pushExamHistory(uid, historyEntry)
            }
        }

        resultState = ResultState(
            examName = "$testTitle (Reading)",
            totalScore = finalScore,
            correctCount = totalCorrect,
            incorrectCount = (101..200).count { userAnswers[it] != null && userAnswers[it] != answerKey[it.toString()] },
            skippedCount = (101..200).count { userAnswers[it] == null },
            partResults = listOf(
                PartResultUiModel("Part 5: Incomplete Sentences (101-130)", p5Correct, 30),
                PartResultUiModel("Part 6: Text Completion (131-146)", p6Correct, 16),
                PartResultUiModel("Part 7: Reading Comprehension (147-200)", p7Correct, 54)
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
                        Row(verticalAlignment = Alignment.CenterVertically, horizontalArrangement = Arrangement.spacedBy(6.dp)) {
                            Text(
                                text = testTitle,
                                style = WordNestTheme.typography.titleMedium,
                                color = WordNestTheme.colors.ink900
                            )
                            if (textData != null) {
                                Surface(
                                    shape = RoundedCornerShape(4.dp),
                                    color = WordNestTheme.colors.mint500.copy(alpha = 0.12f)
                                ) {
                                    Text(
                                        text = "Bản chữ",
                                        style = WordNestTheme.typography.labelSmall.copy(fontWeight = FontWeight.Bold, fontSize = 9.sp),
                                        color = WordNestTheme.colors.mint500,
                                        modifier = Modifier.padding(horizontal = 4.dp, vertical = 2.dp)
                                    )
                                }
                            }
                        }
                        Text(
                            text = "Câu $currentQuestionNum/200 · Đã làm: ${userAnswers.size}/100",
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
            // Thanh Filter Chips (Phần thi)
            Row(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(horizontal = 12.dp, vertical = 6.dp),
                horizontalArrangement = Arrangement.spacedBy(6.dp)
            ) {
                FilterChip(
                    selected = selectedPartFilter == "ALL",
                    onClick = { selectedPartFilter = "ALL" },
                    label = { Text("Tất cả", fontSize = 11.sp) }
                )
                FilterChip(
                    selected = selectedPartFilter == "P5",
                    onClick = {
                        selectedPartFilter = "P5"
                        if (currentQuestionNum !in 101..130) currentQuestionNum = 101
                    },
                    label = { Text("Part 5", fontSize = 11.sp) }
                )
                FilterChip(
                    selected = selectedPartFilter == "P6",
                    onClick = {
                        selectedPartFilter = "P6"
                        if (currentQuestionNum !in 131..146) currentQuestionNum = 131
                    },
                    label = { Text("Part 6", fontSize = 11.sp) }
                )
                FilterChip(
                    selected = selectedPartFilter == "P7",
                    onClick = {
                        selectedPartFilter = "P7"
                        if (currentQuestionNum !in 147..200) currentQuestionNum = 147
                    },
                    label = { Text("Part 7", fontSize = 11.sp) }
                )
                FilterChip(
                    selected = selectedPartFilter == "UNANSWERED",
                    onClick = { selectedPartFilter = "UNANSWERED" },
                    label = { Text("Chưa làm (${100 - userAnswers.size})", fontSize = 11.sp) }
                )
            }

            HorizontalDivider(color = WordNestTheme.colors.line200)

            // NỘI DUNG CHÍNH: Nếu có Text Data -> Chạy Text Mode; Nếu không có -> Fallback PDF Split-Pane
            if (textData != null) {
                ToeicReadingTextContent(
                    textData = textData,
                    currentQuestionNum = currentQuestionNum,
                    userAnswers = userAnswers,
                    onOptionSelected = { optLetter -> onOptionSelected(currentQuestionNum, optLetter) },
                    onPrevClick = { if (currentQuestionNum > 101) currentQuestionNum-- },
                    onNextClick = { if (currentQuestionNum < 200) currentQuestionNum++ },
                    modifier = Modifier.fillMaxSize()
                )
            } else {
                // Fallback PDF mode cho các đề chưa số hóa text
                ToeicReadingPdfFallbackContent(
                    testId = testId,
                    currentQuestionNum = currentQuestionNum,
                    userAnswers = userAnswers,
                    onOptionSelected = { optLetter -> onOptionSelected(currentQuestionNum, optLetter) },
                    onPrevClick = { if (currentQuestionNum > 101) currentQuestionNum-- },
                    onNextClick = { if (currentQuestionNum < 200) currentQuestionNum++ },
                    modifier = Modifier.fillMaxSize()
                )
            }
        }
    }

    // Modal Question Map Grid (100 ô 101–200)
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
                        text = "Danh sách câu hỏi (101 - 200)",
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
                    modifier = Modifier.height(380.dp)
                ) {
                    items((101..200).toList()) { qNum ->
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
            text = { Text("Tiến trình đã làm (${userAnswers.size}/100 câu) đã được tự động lưu. Bạn có thể quay lại làm tiếp bất cứ lúc nào.") },
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

/**
 * GIAO DIỆN TEXT READING HIỆN ĐẠI (BỎ PDF)
 * Hiển thị khối đoạn văn/thư/bảng biểu đã cắt gán cho câu hỏi phía trên,
 * và câu hỏi kèm 4 options ở phía dưới.
 */
@Composable
fun ToeicReadingTextContent(
    textData: ToeicReadingTestData,
    currentQuestionNum: Int,
    userAnswers: Map<Int, String>,
    onOptionSelected: (String) -> Unit,
    onPrevClick: () -> Unit,
    onNextClick: () -> Unit,
    modifier: Modifier = Modifier
) {
    val question = remember(currentQuestionNum, textData) {
        textData.questions.firstOrNull { it.num == currentQuestionNum }
            ?: ToeicReadingTextQuestion(
                num = currentQuestionNum,
                part = when (currentQuestionNum) {
                    in 101..130 -> 5
                    in 131..146 -> 6
                    else -> 7
                },
                text = "Nội dung câu hỏi $currentQuestionNum chưa được số hóa.",
                options = listOf("A. Option A", "B. Option B", "C. Option C", "D. Option D"),
                blockRefs = emptyList()
            )
    }

    // Các block văn bản (đoạn văn, thư, bảng, charts) gắn với câu hỏi này
    val relatedBlocks = remember(currentQuestionNum, textData) {
        textData.blocks.filter { b -> b.questionNumbers.contains(currentQuestionNum) }
    }

    // Trạng thái mở rộng block đọc: mặc định mở nếu là câu đầu của block hoặc Part 7
    var isPassageExpanded by remember(relatedBlocks) {
        mutableStateOf(true)
    }

    val currentAnswer = userAnswers[currentQuestionNum]

    Column(
        modifier = modifier
            .fillMaxSize()
            .background(WordNestTheme.colors.background)
    ) {
        // Vùng nội dung cuộn được (chứa Passage + Question + Options)
        Column(
            modifier = Modifier
                .weight(1f)
                .fillMaxWidth()
                .verticalScroll(rememberScrollState())
                .padding(16.dp),
            verticalArrangement = Arrangement.spacedBy(16.dp)
        ) {
            // 1. KHỐI VĂN BẢN ĐOẠN VĂN / THƯ / BẢNG BIỂU (Part 6 & Part 7)
            if (relatedBlocks.isNotEmpty() && question.part in listOf(6, 7)) {
                relatedBlocks.forEach { block ->
                    val isFirstInBlock = block.questionNumbers.firstOrNull() == currentQuestionNum
                    Surface(
                        shape = RoundedCornerShape(16.dp),
                        color = WordNestTheme.colors.surface,
                        border = BorderStroke(1.dp, WordNestTheme.colors.line200),
                        modifier = Modifier.fillMaxWidth()
                    ) {
                        Column(modifier = Modifier.padding(16.dp)) {
                            // Header của khối văn bản
                            Row(
                                modifier = Modifier
                                    .fillMaxWidth()
                                    .clickable { isPassageExpanded = !isPassageExpanded },
                                horizontalArrangement = Arrangement.SpaceBetween,
                                verticalAlignment = Alignment.CenterVertically
                            ) {
                                Row(
                                    verticalAlignment = Alignment.CenterVertically,
                                    horizontalArrangement = Arrangement.spacedBy(8.dp)
                                ) {
                                    Icon(
                                        imageVector = when (block.type) {
                                            "letter" -> Icons.Default.Email
                                            "table" -> Icons.Default.TableChart
                                            "chart" -> Icons.Default.BarChart
                                            else -> Icons.AutoMirrored.Filled.MenuBook
                                        },
                                        contentDescription = null,
                                        tint = WordNestTheme.colors.forest900,
                                        modifier = Modifier.size(20.dp)
                                    )
                                    Text(
                                        text = block.label.ifEmpty { "Nội dung bài đọc" },
                                        style = WordNestTheme.typography.titleSmall.copy(fontWeight = FontWeight.Bold),
                                        color = WordNestTheme.colors.forest900
                                    )
                                }

                                Row(verticalAlignment = Alignment.CenterVertically) {
                                    Text(
                                        text = if (isPassageExpanded) "Thu gọn" else "Xem nội dung",
                                        style = WordNestTheme.typography.labelSmall,
                                        color = WordNestTheme.colors.slate500
                                    )
                                    Icon(
                                        imageVector = if (isPassageExpanded) Icons.Default.KeyboardArrowUp else Icons.Default.KeyboardArrowDown,
                                        contentDescription = null,
                                        tint = WordNestTheme.colors.slate500
                                    )
                                }
                            }

                            // Nội dung chi tiết của khối văn bản (collapsible)
                            AnimatedVisibility(
                                visible = isPassageExpanded,
                                enter = expandVertically() + fadeIn(),
                                exit = shrinkVertically() + fadeOut()
                            ) {
                                Column(modifier = Modifier.padding(top = 12.dp)) {
                                    HorizontalDivider(color = WordNestTheme.colors.line200)
                                    Spacer(modifier = Modifier.height(12.dp))

                                    // Nếu có ảnh biểu đồ/bảng không OCR được
                                    if (!block.imageUrl.isNullOrEmpty()) {
                                        AsyncImage(
                                            model = block.imageUrl,
                                            contentDescription = block.label,
                                            modifier = Modifier
                                                .fillMaxWidth()
                                                .heightIn(max = 240.dp)
                                                .clip(RoundedCornerShape(8.dp))
                                        )
                                        Spacer(modifier = Modifier.height(8.dp))
                                    }

                                    // Dòng chữ văn bản (font thoải mái >= 14sp)
                                    Text(
                                        text = block.text,
                                        style = WordNestTheme.typography.bodyMedium.copy(
                                            fontSize = 15.sp,
                                            lineHeight = 23.sp
                                        ),
                                        color = WordNestTheme.colors.ink900
                                    )
                                }
                            }
                        }
                    }
                }
            }

            // 2. KHỐI CÂU HỎI VÀ CÁC LỰA CHỌN ĐÁP ÁN (A, B, C, D)
            Surface(
                shape = RoundedCornerShape(16.dp),
                color = WordNestTheme.colors.surface,
                border = BorderStroke(1.dp, WordNestTheme.colors.line200),
                modifier = Modifier.fillMaxWidth()
            ) {
                Column(modifier = Modifier.padding(16.dp)) {
                    // Header câu hỏi
                    Row(
                        modifier = Modifier.fillMaxWidth(),
                        horizontalArrangement = Arrangement.SpaceBetween,
                        verticalAlignment = Alignment.CenterVertically
                    ) {
                        Text(
                            text = "Câu ${question.num}",
                            style = WordNestTheme.typography.headlineMedium.copy(fontWeight = FontWeight.Bold),
                            color = WordNestTheme.colors.forest900
                        )
                        Surface(
                            shape = RoundedCornerShape(8.dp),
                            color = WordNestTheme.colors.beige100
                        ) {
                            Text(
                                text = when (question.part) {
                                    5 -> "Part 5 · Điền câu"
                                    6 -> "Part 6 · Điền đoạn"
                                    else -> "Part 7 · Đọc hiểu"
                                },
                                style = WordNestTheme.typography.labelSmall,
                                color = WordNestTheme.colors.forest900,
                                modifier = Modifier.padding(horizontal = 8.dp, vertical = 4.dp)
                            )
                        }
                    }

                    Spacer(modifier = Modifier.height(12.dp))

                    // Nội dung văn bản câu hỏi
                    Text(
                        text = question.text,
                        style = WordNestTheme.typography.bodyLarge.copy(
                            fontWeight = FontWeight.Medium,
                            fontSize = 16.sp,
                            lineHeight = 24.sp
                        ),
                        color = WordNestTheme.colors.ink900
                    )

                    Spacer(modifier = Modifier.height(20.dp))

                    // Danh sách 4 lựa chọn đáp án A, B, C, D
                    Column(verticalArrangement = Arrangement.spacedBy(10.dp)) {
                        question.options.forEach { optString ->
                            val optLetter = optString.trim().take(1).uppercase()
                            val isSelected = currentAnswer == optLetter

                            Surface(
                                onClick = { onOptionSelected(optLetter) },
                                shape = RoundedCornerShape(12.dp),
                                color = if (isSelected) WordNestTheme.colors.forest900 else WordNestTheme.colors.surface,
                                border = BorderStroke(
                                    width = if (isSelected) 2.dp else 1.dp,
                                    color = if (isSelected) WordNestTheme.colors.forest900 else WordNestTheme.colors.line200
                                ),
                                modifier = Modifier.fillMaxWidth()
                            ) {
                                Row(
                                    modifier = Modifier
                                        .fillMaxWidth()
                                        .padding(horizontal = 16.dp, vertical = 14.dp),
                                    verticalAlignment = Alignment.CenterVertically,
                                    horizontalArrangement = Arrangement.spacedBy(12.dp)
                                ) {
                                    // Vòng tròn chữ cái A/B/C/D
                                    Box(
                                        modifier = Modifier
                                            .size(28.dp)
                                            .clip(CircleShape)
                                            .background(
                                                if (isSelected) WordNestTheme.colors.amber400 else WordNestTheme.colors.beige100
                                            ),
                                        contentAlignment = Alignment.Center
                                    ) {
                                        Text(
                                            text = optLetter,
                                            style = WordNestTheme.typography.labelMedium.copy(fontWeight = FontWeight.Bold),
                                            color = WordNestTheme.colors.forest900
                                        )
                                    }

                                    // Nội dung phương án
                                    val optContent = optString.replace(Regex("^[A-D][.\\s)]+"), "").trim()
                                    Text(
                                        text = optContent.ifEmpty { optString },
                                        style = WordNestTheme.typography.bodyMedium.copy(
                                            fontWeight = if (isSelected) FontWeight.SemiBold else FontWeight.Normal,
                                            fontSize = 15.sp
                                        ),
                                        color = if (isSelected) Color.White else WordNestTheme.colors.ink900,
                                        modifier = Modifier.weight(1f)
                                    )
                                }
                            }
                        }
                    }
                }
            }
        }

        // 3. Bottom Bar điều hướng (Câu trước / Câu sau)
        Surface(
            color = WordNestTheme.colors.surface,
            border = BorderStroke(1.dp, WordNestTheme.colors.line200),
            modifier = Modifier.fillMaxWidth()
        ) {
            Row(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(horizontal = 16.dp, vertical = 10.dp),
                horizontalArrangement = Arrangement.SpaceBetween,
                verticalAlignment = Alignment.CenterVertically
            ) {
                TextButton(
                    onClick = onPrevClick,
                    enabled = currentQuestionNum > 101
                ) {
                    Row(verticalAlignment = Alignment.CenterVertically) {
                        Icon(Icons.AutoMirrored.Filled.ArrowBack, contentDescription = null, modifier = Modifier.size(16.dp))
                        Spacer(modifier = Modifier.width(4.dp))
                        Text("Câu trước")
                    }
                }

                Text(
                    text = "Câu $currentQuestionNum / 200",
                    style = WordNestTheme.typography.labelMedium,
                    color = WordNestTheme.colors.slate500
                )

                TextButton(
                    onClick = onNextClick,
                    enabled = currentQuestionNum < 200
                ) {
                    Row(verticalAlignment = Alignment.CenterVertically) {
                        Text("Câu sau")
                        Spacer(modifier = Modifier.width(4.dp))
                        Icon(Icons.AutoMirrored.Filled.ArrowForward, contentDescription = null, modifier = Modifier.size(16.dp))
                    }
                }
            }
        }
    }
}

/**
 * Fallback chế độ PDF Split-Pane (chỉ dùng cho các đề chưa số hóa text)
 */
@Composable
fun ToeicReadingPdfFallbackContent(
    testId: String,
    currentQuestionNum: Int,
    userAnswers: Map<Int, String>,
    onOptionSelected: (String) -> Unit,
    onPrevClick: () -> Unit,
    onNextClick: () -> Unit,
    modifier: Modifier = Modifier
) {
    val context = LocalContext.current
    val pdfUrl = remember(testId) { ToeicAssets.getToeicReadingPdfUrl(testId) }
    var splitRatio by remember { mutableFloatStateOf(0.45f) }
    val currentAnswer = userAnswers[currentQuestionNum]

    BoxWithConstraints(modifier = modifier) {
        val totalHeight = maxHeight
        val pdfHeight = totalHeight * splitRatio
        val answerHeight = totalHeight * (1f - splitRatio) - 24.dp

        Column(modifier = Modifier.fillMaxSize()) {
            Box(
                modifier = Modifier
                    .fillMaxWidth()
                    .height(pdfHeight)
                    .background(Color.White)
            ) {
                PdfWebView(pdfUrl = pdfUrl, modifier = Modifier.fillMaxSize())

                SmallFloatingActionButton(
                    onClick = {
                        val intent = Intent(Intent.ACTION_VIEW, Uri.parse(pdfUrl))
                        context.startActivity(intent)
                    },
                    containerColor = WordNestTheme.colors.surface.copy(alpha = 0.9f),
                    contentColor = WordNestTheme.colors.forest900,
                    modifier = Modifier
                        .align(Alignment.BottomEnd)
                        .padding(8.dp)
                        .size(36.dp)
                ) {
                    Icon(Icons.Default.OpenInNew, contentDescription = "Mở PDF ngoài", modifier = Modifier.size(16.dp))
                }
            }

            Box(
                modifier = Modifier
                    .fillMaxWidth()
                    .height(24.dp)
                    .background(WordNestTheme.colors.beige100)
                    .pointerInput(Unit) {
                        detectVerticalDragGestures { _, dragAmount ->
                            val deltaRatio = dragAmount / totalHeight.toPx()
                            splitRatio = (splitRatio + deltaRatio).coerceIn(0.25f, 0.75f)
                        }
                    },
                contentAlignment = Alignment.Center
            ) {
                Box(
                    modifier = Modifier
                        .width(48.dp)
                        .height(4.dp)
                        .clip(CircleShape)
                        .background(WordNestTheme.colors.slate400)
                )
            }

            Column(
                modifier = Modifier
                    .fillMaxWidth()
                    .height(answerHeight)
                    .background(WordNestTheme.colors.surface)
                    .padding(16.dp),
                verticalArrangement = Arrangement.SpaceBetween
            ) {
                Column {
                    Text(
                        text = "Câu $currentQuestionNum",
                        style = WordNestTheme.typography.headlineMedium,
                        color = WordNestTheme.colors.forest900
                    )
                    Spacer(modifier = Modifier.height(16.dp))

                    Row(
                        modifier = Modifier.fillMaxWidth(),
                        horizontalArrangement = Arrangement.spacedBy(10.dp)
                    ) {
                        listOf("A", "B", "C", "D").forEach { opt ->
                            val isSelected = currentAnswer == opt
                            Surface(
                                onClick = { onOptionSelected(opt) },
                                shape = RoundedCornerShape(12.dp),
                                color = if (isSelected) WordNestTheme.colors.forest900 else WordNestTheme.colors.surface,
                                border = BorderStroke(
                                    width = if (isSelected) 2.dp else 1.dp,
                                    color = if (isSelected) WordNestTheme.colors.forest900 else WordNestTheme.colors.line200
                                ),
                                modifier = Modifier
                                    .weight(1f)
                                    .height(56.dp)
                            ) {
                                Box(contentAlignment = Alignment.Center) {
                                    Text(
                                        text = opt,
                                        style = WordNestTheme.typography.titleMedium.copy(fontWeight = FontWeight.Bold),
                                        color = if (isSelected) Color.White else WordNestTheme.colors.ink900
                                    )
                                }
                            }
                        }
                    }
                }

                Row(
                    modifier = Modifier.fillMaxWidth(),
                    horizontalArrangement = Arrangement.SpaceBetween,
                    verticalAlignment = Alignment.CenterVertically
                ) {
                    TextButton(onClick = onPrevClick, enabled = currentQuestionNum > 101) {
                        Text("Câu trước")
                    }
                    Text(text = "Câu $currentQuestionNum / 200", style = WordNestTheme.typography.labelMedium)
                    TextButton(onClick = onNextClick, enabled = currentQuestionNum < 200) {
                        Text("Câu sau")
                    }
                }
            }
        }
    }
}

@SuppressLint("SetJavaScriptEnabled")
@Composable
fun PdfWebView(
    pdfUrl: String,
    modifier: Modifier = Modifier
) {
    val googleDocsUrl = remember(pdfUrl) {
        "https://docs.google.com/gview?embedded=true&url=" + Uri.encode(pdfUrl)
    }

    AndroidView(
        factory = { ctx ->
            WebView(ctx).apply {
                layoutParams = ViewGroup.LayoutParams(
                    ViewGroup.LayoutParams.MATCH_PARENT,
                    ViewGroup.LayoutParams.MATCH_PARENT
                )
                settings.apply {
                    javaScriptEnabled = true
                    domStorageEnabled = true
                    loadWithOverviewMode = true
                    useWideViewPort = true
                    builtInZoomControls = true
                    displayZoomControls = false
                }
                webChromeClient = WebChromeClient()
                webViewClient = WebViewClient()
                loadUrl(googleDocsUrl)
            }
        },
        update = { webView ->
            if (webView.url != googleDocsUrl) {
                webView.loadUrl(googleDocsUrl)
            }
        },
        modifier = modifier
    )
}
