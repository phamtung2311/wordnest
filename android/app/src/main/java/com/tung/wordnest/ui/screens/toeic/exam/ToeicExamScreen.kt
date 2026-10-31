package com.tung.wordnest.ui.screens.toeic.exam

import androidx.compose.animation.AnimatedVisibility
import androidx.compose.animation.fadeIn
import androidx.compose.animation.fadeOut
import androidx.compose.foundation.BorderStroke
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.gestures.detectTransformGestures
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.grid.GridCells
import androidx.compose.foundation.lazy.grid.LazyVerticalGrid
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.automirrored.filled.ArrowBack
import androidx.compose.material.icons.automirrored.filled.ArrowForward
import androidx.compose.material.icons.filled.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.graphicsLayer
import androidx.compose.ui.input.pointer.pointerInput
import androidx.compose.ui.platform.LocalConfiguration
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.compose.ui.window.Dialog
import androidx.compose.ui.window.DialogProperties
import com.tung.wordnest.ui.components.core.PrimaryButton
import com.tung.wordnest.ui.components.core.WordNestProgressBar
import com.tung.wordnest.ui.theme.TimerMonoStyle
import com.tung.wordnest.ui.theme.WordNestTheme

// ==========================================
// MODELS
// ==========================================
data class ExamQuestionUiModel(
    val id: String,
    val number: Int,
    val part: String,
    val questionText: String?,
    val options: List<String>,
    val selectedOptionIndex: Int?,
    val isFlagged: Boolean,
    val passageText: String? = null,
    val imageUrl: String? = null // Giả lập hình ảnh Part 1
)

data class ExamState(
    val examName: String,
    val timeRemainingStr: String,
    val currentQuestionIndex: Int,
    val questions: List<ExamQuestionUiModel>,
    val isSaving: Boolean,
    val showNavigator: Boolean,
    val isListeningMode: Boolean
)

// ==========================================
// MAIN SCREEN
// ==========================================
@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun ToeicExamScreen(
    state: ExamState,
    onCloseClick: () -> Unit,
    onSubmitClick: () -> Unit,
    onNavigatorToggle: () -> Unit,
    onQuestionSelect: (Int) -> Unit,
    onOptionSelect: (Int) -> Unit,
    onFlagToggle: () -> Unit,
    onPrevClick: () -> Unit,
    onNextClick: () -> Unit,
    modifier: Modifier = Modifier
) {
    var showExitDialog by remember { mutableStateOf(false) }
    var showImageDialog by remember { mutableStateOf<String?>(null) }
    
    val currentQuestion = state.questions.getOrNull(state.currentQuestionIndex)
    
    Scaffold(
        modifier = modifier.fillMaxSize(),
        containerColor = WordNestTheme.colors.background,
        contentWindowInsets = WindowInsets.systemBars,
        topBar = {
            TopExamBar(
                partName = currentQuestion?.part ?: "",
                questionNumber = (state.currentQuestionIndex + 1),
                timeRemaining = state.timeRemainingStr,
                onCloseClick = { showExitDialog = true },
                onNavigatorClick = onNavigatorToggle,
                onSubmitClick = onSubmitClick
            )
        },
        bottomBar = {
            BottomExamBar(
                isFirst = state.currentQuestionIndex == 0,
                isLast = state.currentQuestionIndex == state.questions.size - 1,
                isFlagged = currentQuestion?.isFlagged == true,
                isSaving = state.isSaving,
                onPrevClick = onPrevClick,
                onNextClick = onNextClick,
                onFlagToggle = onFlagToggle
            )
        }
    ) { innerPadding ->
        Box(modifier = Modifier.padding(innerPadding).fillMaxSize()) {
            if (currentQuestion != null) {
                if (currentQuestion.passageText != null) {
                    // Part 6, 7: Split View with BottomSheetScaffold
                    ToeicReadingPassageContent(
                        question = currentQuestion,
                        onOptionSelect = onOptionSelect
                    )
                } else if (state.isListeningMode) {
                    // Part 1, 2, 3, 4
                    ToeicListeningContent(
                        question = currentQuestion,
                        onOptionSelect = onOptionSelect,
                        onImageClick = { showImageDialog = it }
                    )
                } else {
                    // Part 5
                    ToeicReadingSingleContent(
                        question = currentQuestion,
                        onOptionSelect = onOptionSelect
                    )
                }
            }
        }
    }

    // Dialog Xác nhận thoát
    if (showExitDialog) {
        AlertDialog(
            onDismissRequest = { showExitDialog = false },
            title = { Text("Tạm dừng làm bài?", style = WordNestTheme.typography.headlineMedium) },
            text = { Text("Tiến trình của bạn sẽ được lưu lại. Bạn có muốn thoát phòng thi ngay bây giờ?", style = WordNestTheme.typography.bodyMedium) },
            confirmButton = {
                PrimaryButton(text = "Lưu & Thoát", onClick = { showExitDialog = false; onCloseClick() })
            },
            dismissButton = {
                TextButton(onClick = { showExitDialog = false }) {
                    Text("Hủy", style = WordNestTheme.typography.labelMedium, color = WordNestTheme.colors.ink900)
                }
            },
            containerColor = WordNestTheme.colors.surface
        )
    }

    // Modal Navigator
    if (state.showNavigator) {
        ModalBottomSheet(
            onDismissRequest = onNavigatorToggle,
            containerColor = WordNestTheme.colors.surface
        ) {
            QuestionNavigatorSheet(
                questions = state.questions,
                currentIndex = state.currentQuestionIndex,
                onQuestionSelect = { 
                    onQuestionSelect(it)
                    onNavigatorToggle()
                }
            )
        }
    }

    // Fullscreen Image Zoom
    if (showImageDialog != null) {
        ImageZoomDialog(
            imageUrl = showImageDialog!!,
            onDismiss = { showImageDialog = null }
        )
    }
}

// ==========================================
// TOP & BOTTOM BARS
// ==========================================
@Composable
private fun TopExamBar(
    partName: String,
    questionNumber: Int,
    timeRemaining: String,
    onCloseClick: () -> Unit,
    onNavigatorClick: () -> Unit,
    onSubmitClick: () -> Unit
) {
    Surface(
        color = WordNestTheme.colors.surface,
        shadowElevation = 2.dp,
        modifier = Modifier.fillMaxWidth()
    ) {
        Row(
            modifier = Modifier.fillMaxWidth().height(56.dp).padding(horizontal = 8.dp),
            verticalAlignment = Alignment.CenterVertically,
            horizontalArrangement = Arrangement.SpaceBetween
        ) {
            IconButton(onClick = onCloseClick) {
                Icon(Icons.Default.Close, contentDescription = "Thoát", tint = WordNestTheme.colors.ink900)
            }
            
            Column(horizontalAlignment = Alignment.CenterHorizontally) {
                Text(
                    text = "$partName • Q.$questionNumber",
                    style = WordNestTheme.typography.labelMedium,
                    color = WordNestTheme.colors.slate500
                )
                Text(
                    text = timeRemaining,
                    style = TimerMonoStyle,
                    color = WordNestTheme.colors.forest900
                )
            }
            
            Row(verticalAlignment = Alignment.CenterVertically) {
                IconButton(onClick = onNavigatorClick) {
                    Icon(Icons.Default.GridView, contentDescription = "Danh sách câu hỏi", tint = WordNestTheme.colors.ink900)
                }
                TextButton(onClick = onSubmitClick) {
                    Text("Nộp bài", style = WordNestTheme.typography.labelMedium.copy(fontWeight = FontWeight.Bold), color = WordNestTheme.colors.coral500)
                }
            }
        }
    }
}

@Composable
private fun BottomExamBar(
    isFirst: Boolean,
    isLast: Boolean,
    isFlagged: Boolean,
    isSaving: Boolean,
    onPrevClick: () -> Unit,
    onNextClick: () -> Unit,
    onFlagToggle: () -> Unit
) {
    Surface(
        color = WordNestTheme.colors.surface,
        border = BorderStroke(1.dp, WordNestTheme.colors.line200),
        modifier = Modifier.fillMaxWidth()
    ) {
        Row(
            modifier = Modifier.fillMaxWidth().padding(horizontal = 16.dp, vertical = 12.dp),
            horizontalArrangement = Arrangement.SpaceBetween,
            verticalAlignment = Alignment.CenterVertically
        ) {
            TextButton(
                onClick = onPrevClick,
                enabled = !isFirst,
                modifier = Modifier.weight(1f)
            ) {
                Row(verticalAlignment = Alignment.CenterVertically) {
                    Icon(Icons.AutoMirrored.Filled.ArrowBack, contentDescription = null, modifier = Modifier.size(18.dp))
                    Spacer(modifier = Modifier.width(4.dp))
                    Text("Câu trước", style = WordNestTheme.typography.labelMedium)
                }
            }
            
            Column(
                horizontalAlignment = Alignment.CenterHorizontally,
                modifier = Modifier.weight(1f)
            ) {
                IconButton(
                    onClick = onFlagToggle,
                    modifier = Modifier.size(36.dp).background(
                        if (isFlagged) WordNestTheme.colors.amberTint else Color.Transparent, 
                        CircleShape
                    )
                ) {
                    Icon(
                        imageVector = if (isFlagged) Icons.Default.Bookmark else Icons.Default.BookmarkBorder,
                        contentDescription = "Đánh dấu",
                        tint = if (isFlagged) WordNestTheme.colors.amber500 else WordNestTheme.colors.slate500
                    )
                }
                AnimatedVisibility(visible = isSaving, enter = fadeIn(), exit = fadeOut()) {
                    Text("Đã lưu", style = WordNestTheme.typography.labelSmall.copy(fontSize = 10.sp), color = WordNestTheme.colors.mint500)
                }
            }
            
            TextButton(
                onClick = onNextClick,
                enabled = !isLast,
                modifier = Modifier.weight(1f)
            ) {
                Row(verticalAlignment = Alignment.CenterVertically) {
                    Text("Câu sau", style = WordNestTheme.typography.labelMedium)
                    Spacer(modifier = Modifier.width(4.dp))
                    Icon(Icons.AutoMirrored.Filled.ArrowForward, contentDescription = null, modifier = Modifier.size(18.dp))
                }
            }
        }
    }
}

// ==========================================
// READING & LISTENING CONTENT
// ==========================================
@Composable
private fun ToeicReadingSingleContent(
    question: ExamQuestionUiModel,
    onOptionSelect: (Int) -> Unit
) {
    LazyColumn(
        modifier = Modifier.fillMaxSize().padding(16.dp),
        verticalArrangement = Arrangement.spacedBy(24.dp)
    ) {
        item {
            Text(
                text = question.questionText ?: "",
                style = WordNestTheme.typography.titleMedium.copy(fontSize = 18.sp, lineHeight = 28.sp),
                color = WordNestTheme.colors.ink900
            )
        }
        
        item {
            Column(verticalArrangement = Arrangement.spacedBy(12.dp)) {
                question.options.forEachIndexed { index, optionText ->
                    AnswerCard(
                        prefix = ('A' + index).toString(),
                        text = optionText,
                        isSelected = index == question.selectedOptionIndex,
                        onClick = { onOptionSelect(index) }
                    )
                }
            }
        }
    }
}

@OptIn(ExperimentalMaterial3Api::class)
@Composable
private fun ToeicReadingPassageContent(
    question: ExamQuestionUiModel,
    onOptionSelect: (Int) -> Unit
) {
    val screenHeight = LocalConfiguration.current.screenHeightDp.dp
    val scaffoldState = rememberBottomSheetScaffoldState(
        bottomSheetState = rememberStandardBottomSheetState(initialValue = SheetValue.PartiallyExpanded)
    )
    var fontSizeMultiplier by remember { mutableFloatStateOf(1f) }

    BottomSheetScaffold(
        scaffoldState = scaffoldState,
        sheetPeekHeight = screenHeight * 0.45f,
        sheetContainerColor = WordNestTheme.colors.surface,
        sheetShape = RoundedCornerShape(topStart = 24.dp, topEnd = 24.dp),
        sheetDragHandle = {
            Column(horizontalAlignment = Alignment.CenterHorizontally, modifier = Modifier.fillMaxWidth().padding(top = 12.dp, bottom = 8.dp)) {
                BottomSheetDefaults.DragHandle()
                Text("Kéo để mở rộng câu hỏi", style = WordNestTheme.typography.labelSmall, color = WordNestTheme.colors.slate400)
            }
        },
        content = { innerPadding ->
            // Reading Passage Area
            Column(
                modifier = Modifier
                    .fillMaxSize()
                    .padding(innerPadding)
                    .padding(horizontal = 16.dp)
            ) {
                Row(
                    modifier = Modifier.fillMaxWidth().padding(vertical = 8.dp),
                    horizontalArrangement = Arrangement.End
                ) {
                    IconButton(onClick = { fontSizeMultiplier = (fontSizeMultiplier - 0.1f).coerceAtLeast(0.8f) }) {
                        Text("A-", style = WordNestTheme.typography.titleMedium, color = WordNestTheme.colors.slate500)
                    }
                    IconButton(onClick = { fontSizeMultiplier = (fontSizeMultiplier + 0.1f).coerceAtMost(1.5f) }) {
                        Text("A+", style = WordNestTheme.typography.titleMedium, color = WordNestTheme.colors.slate500)
                    }
                }
                
                Surface(
                    color = WordNestTheme.colors.beige100,
                    shape = WordNestTheme.shapes.medium,
                    modifier = Modifier.fillMaxWidth().weight(1f)
                ) {
                    Text(
                        text = question.passageText ?: "",
                        style = WordNestTheme.typography.bodyMedium.copy(
                            fontSize = (15 * fontSizeMultiplier).sp, 
                            lineHeight = (24 * fontSizeMultiplier).sp
                        ),
                        color = WordNestTheme.colors.ink900,
                        modifier = Modifier.verticalScroll(rememberScrollState()).padding(16.dp)
                    )
                }
                Spacer(modifier = Modifier.height(16.dp))
            }
        },
        sheetContent = {
            // Questions Area inside bottom sheet
            LazyColumn(
                modifier = Modifier.fillMaxWidth().padding(horizontal = 16.dp),
                contentPadding = PaddingValues(bottom = 32.dp),
                verticalArrangement = Arrangement.spacedBy(16.dp)
            ) {
                item {
                    Text(
                        text = "Q.${question.number}: ${question.questionText ?: ""}",
                        style = WordNestTheme.typography.titleMedium.copy(fontSize = 16.sp),
                        color = WordNestTheme.colors.ink900
                    )
                }
                item {
                    Column(verticalArrangement = Arrangement.spacedBy(12.dp)) {
                        question.options.forEachIndexed { index, optionText ->
                            AnswerCard(
                                prefix = ('A' + index).toString(),
                                text = optionText,
                                isSelected = index == question.selectedOptionIndex,
                                onClick = { onOptionSelect(index) }
                            )
                        }
                    }
                }
            }
        }
    )
}

@Composable
private fun ToeicListeningContent(
    question: ExamQuestionUiModel,
    onOptionSelect: (Int) -> Unit,
    onImageClick: (String) -> Unit
) {
    Column(
        modifier = Modifier.fillMaxSize().padding(16.dp),
        verticalArrangement = Arrangement.spacedBy(24.dp)
    ) {
        // Pseudo Audio Player
        Surface(
            shape = WordNestTheme.shapes.small,
            color = WordNestTheme.colors.surface,
            border = BorderStroke(1.dp, WordNestTheme.colors.line200),
            modifier = Modifier.fillMaxWidth()
        ) {
            Row(
                modifier = Modifier.padding(12.dp),
                verticalAlignment = Alignment.CenterVertically,
                horizontalArrangement = Arrangement.spacedBy(12.dp)
            ) {
                Icon(Icons.Default.PlayArrow, contentDescription = "Play", tint = WordNestTheme.colors.forest900)
                WordNestProgressBar(progress = 0.3f, height = 4.dp, modifier = Modifier.weight(1f))
                Text("00:15 / 00:45", style = TimerMonoStyle, color = WordNestTheme.colors.slate500)
            }
        }

        if (question.imageUrl != null) {
            Box(
                modifier = Modifier
                    .fillMaxWidth()
                    .height(200.dp)
                    .clip(WordNestTheme.shapes.medium)
                    .background(WordNestTheme.colors.line200)
                    .clickable { onImageClick(question.imageUrl) },
                contentAlignment = Alignment.Center
            ) {
                Icon(Icons.Default.Image, contentDescription = "Image", tint = WordNestTheme.colors.slate400, modifier = Modifier.size(48.dp))
                Text("Chạm để phóng to", color = WordNestTheme.colors.slate500, modifier = Modifier.align(Alignment.BottomCenter).padding(8.dp), style = WordNestTheme.typography.labelSmall)
            }
        } else {
            if (!question.questionText.isNullOrEmpty()) {
                Text(
                    text = question.questionText,
                    style = WordNestTheme.typography.titleMedium.copy(fontSize = 18.sp),
                    color = WordNestTheme.colors.ink900
                )
            }
        }
        
        Column(verticalArrangement = Arrangement.spacedBy(12.dp)) {
            question.options.forEachIndexed { index, optionText ->
                AnswerCard(
                    prefix = ('A' + index).toString(),
                    text = optionText,
                    isSelected = index == question.selectedOptionIndex,
                    onClick = { onOptionSelect(index) }
                )
            }
        }
    }
}

@Composable
private fun AnswerCard(
    prefix: String,
    text: String,
    isSelected: Boolean,
    onClick: () -> Unit
) {
    val bgColor = if (isSelected) WordNestTheme.colors.amberTint else WordNestTheme.colors.surface
    val borderColor = if (isSelected) WordNestTheme.colors.forest900 else WordNestTheme.colors.line200
    val borderWidth = if (isSelected) 2.dp else 1.dp

    Surface(
        onClick = onClick,
        shape = RoundedCornerShape(14.dp),
        color = bgColor,
        border = BorderStroke(borderWidth, borderColor),
        modifier = Modifier.fillMaxWidth().defaultMinSize(minHeight = 52.dp)
    ) {
        Row(
            modifier = Modifier.padding(horizontal = 16.dp, vertical = 12.dp),
            verticalAlignment = Alignment.CenterVertically
        ) {
            Box(
                modifier = Modifier
                    .size(28.dp)
                    .clip(CircleShape)
                    .background(if (isSelected) WordNestTheme.colors.forest900 else WordNestTheme.colors.line200),
                contentAlignment = Alignment.Center
            ) {
                Text(
                    text = prefix,
                    style = WordNestTheme.typography.labelMedium.copy(fontWeight = FontWeight.Bold),
                    color = if (isSelected) WordNestTheme.colors.amber500 else WordNestTheme.colors.slate500
                )
            }
            Spacer(modifier = Modifier.width(16.dp))
            Text(
                text = text,
                style = WordNestTheme.typography.bodyMedium,
                color = WordNestTheme.colors.ink900
            )
        }
    }
}

// ==========================================
// UTILS & DIALOGS
// ==========================================
@Composable
fun QuestionNavigatorSheet(
    questions: List<ExamQuestionUiModel>,
    currentIndex: Int,
    onQuestionSelect: (Int) -> Unit
) {
    Column(modifier = Modifier.fillMaxWidth().padding(horizontal = 16.dp, vertical = 24.dp)) {
        Text("Bảng câu hỏi", style = WordNestTheme.typography.headlineMedium, color = WordNestTheme.colors.primaryText)
        Spacer(modifier = Modifier.height(16.dp))
        
        Row(horizontalArrangement = Arrangement.spacedBy(16.dp), modifier = Modifier.padding(bottom = 16.dp)) {
            LegendItem("Chưa làm", WordNestTheme.colors.surface, WordNestTheme.colors.line200, WordNestTheme.colors.ink900)
            LegendItem("Đã làm", WordNestTheme.colors.forest900, WordNestTheme.colors.forest900, WordNestTheme.colors.amber500)
            LegendItem("Đánh dấu", WordNestTheme.colors.amberTint, WordNestTheme.colors.amber500, WordNestTheme.colors.amber500)
        }
        
        LazyVerticalGrid(
            columns = GridCells.Adaptive(48.dp),
            horizontalArrangement = Arrangement.spacedBy(8.dp),
            verticalArrangement = Arrangement.spacedBy(8.dp)
        ) {
            items(questions.size) { index ->
                val q = questions[index]
                val isAnswered = q.selectedOptionIndex != null
                val isFlagged = q.isFlagged
                val isCurrent = index == currentIndex
                
                val bgColor = when {
                    isFlagged -> WordNestTheme.colors.amberTint
                    isAnswered -> WordNestTheme.colors.forest900
                    else -> WordNestTheme.colors.surface
                }
                val contentColor = when {
                    isFlagged -> WordNestTheme.colors.amber500
                    isAnswered -> WordNestTheme.colors.amber500
                    else -> WordNestTheme.colors.ink900
                }
                val borderColor = when {
                    isCurrent -> WordNestTheme.colors.coral500
                    isFlagged -> WordNestTheme.colors.amber500
                    isAnswered -> WordNestTheme.colors.forest900
                    else -> WordNestTheme.colors.line200
                }

                Box(
                    modifier = Modifier
                        .aspectRatio(1f)
                        .clip(WordNestTheme.shapes.small)
                        .background(bgColor)
                        .border(if (isCurrent) 2.dp else 1.dp, borderColor, WordNestTheme.shapes.small)
                        .clickable { onQuestionSelect(index) },
                    contentAlignment = Alignment.Center
                ) {
                    Text(
                        text = q.number.toString(),
                        style = WordNestTheme.typography.labelMedium.copy(fontWeight = FontWeight.Bold),
                        color = contentColor
                    )
                }
            }
        }
    }
}

@Composable
private fun LegendItem(label: String, bgColor: Color, borderColor: Color, contentColor: Color) {
    Row(verticalAlignment = Alignment.CenterVertically) {
        Box(modifier = Modifier.size(16.dp).clip(CircleShape).background(bgColor).border(1.dp, borderColor, CircleShape))
        Spacer(modifier = Modifier.width(6.dp))
        Text(label, style = WordNestTheme.typography.labelSmall, color = WordNestTheme.colors.slate500)
    }
}

@Composable
fun ImageZoomDialog(imageUrl: String, onDismiss: () -> Unit) {
    var scale by remember { mutableFloatStateOf(1f) }
    var offset by remember { mutableStateOf(Offset.Zero) }
    
    Dialog(
        onDismissRequest = onDismiss,
        properties = DialogProperties(usePlatformDefaultWidth = false, dismissOnClickOutside = true)
    ) {
        Box(
            modifier = Modifier
                .fillMaxSize()
                .background(Color.Black.copy(alpha = 0.9f))
                .pointerInput(Unit) {
                    detectTransformGestures { _, pan, zoom, _ ->
                        scale = (scale * zoom).coerceIn(1f, 4f)
                        offset += pan
                    }
                },
            contentAlignment = Alignment.Center
        ) {
            IconButton(onClick = onDismiss, modifier = Modifier.align(Alignment.TopEnd).padding(16.dp)) {
                Icon(Icons.Default.Close, contentDescription = "Đóng", tint = Color.White)
            }
            
            // Giả lập Image, thực tế sẽ dùng AsyncImage (Coil)
            Box(
                modifier = Modifier
                    .graphicsLayer(scaleX = scale, scaleY = scale, translationX = offset.x, translationY = offset.y)
                    .size(300.dp)
                    .background(WordNestTheme.colors.line200),
                contentAlignment = Alignment.Center
            ) {
                Icon(Icons.Default.Image, contentDescription = null, tint = WordNestTheme.colors.slate400, modifier = Modifier.size(64.dp))
            }
        }
    }
}

// ==========================================
// PREVIEWS
// ==========================================
private val samplePart5Question = ExamQuestionUiModel(
    id = "1", number = 101, part = "Part 5",
    questionText = "The board of directors is scheduled to _______ the proposed budget on Friday.",
    options = listOf("review", "reviews", "reviewing", "reviewed"),
    selectedOptionIndex = 0, isFlagged = false
)

private val samplePart7Question = ExamQuestionUiModel(
    id = "2", number = 153, part = "Part 7",
    questionText = "What is the main purpose of the memo?",
    passageText = "To all staff,\n\nPlease be advised that the main elevator in the south wing will be closed for maintenance from Monday to Wednesday next week. We apologize for any inconvenience this may cause and appreciate your cooperation.\n\nThank you,\nManagement",
    options = listOf("To announce a promotion", "To notify staff of maintenance", "To request budget approval", "To schedule a meeting"),
    selectedOptionIndex = null, isFlagged = true
)

@Preview(showBackground = true, name = "1. Part 5 (Câu đơn)")
@Composable
fun ToeicExamScreenPart5Preview() {
    WordNestTheme {
        ToeicExamScreen(
            state = ExamState("Đề thi thử TOEIC", "45:12", 0, listOf(samplePart5Question), isSaving = true, showNavigator = false, isListeningMode = false),
            onCloseClick = {}, onSubmitClick = {}, onNavigatorToggle = {}, onQuestionSelect = {}, onOptionSelect = {}, onFlagToggle = {}, onPrevClick = {}, onNextClick = {}
        )
    }
}

@Preview(showBackground = true, name = "2. Part 7 (Split View)")
@Composable
fun ToeicExamScreenPart7Preview() {
    WordNestTheme {
        ToeicExamScreen(
            state = ExamState("Đề thi thử TOEIC", "20:05", 0, listOf(samplePart7Question), isSaving = false, showNavigator = false, isListeningMode = false),
            onCloseClick = {}, onSubmitClick = {}, onNavigatorToggle = {}, onQuestionSelect = {}, onOptionSelect = {}, onFlagToggle = {}, onPrevClick = {}, onNextClick = {}
        )
    }
}
