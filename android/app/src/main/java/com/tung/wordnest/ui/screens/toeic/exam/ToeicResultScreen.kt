package com.tung.wordnest.ui.screens.toeic.exam

import androidx.compose.foundation.BorderStroke
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.automirrored.filled.ArrowBack
import androidx.compose.material.icons.filled.CheckCircle
import androidx.compose.material.icons.filled.Cancel
import androidx.compose.material.icons.filled.RemoveCircle
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.tung.wordnest.ui.components.core.OutlinedWordNestButton
import com.tung.wordnest.ui.components.core.PrimaryButton
import com.tung.wordnest.ui.theme.WordNestTheme

// ==========================================
// MODELS
// ==========================================
data class PartResultUiModel(
    val partName: String,
    val correct: Int,
    val total: Int
)

data class ResultState(
    val examName: String,
    val totalScore: Int,
    val correctCount: Int,
    val incorrectCount: Int,
    val skippedCount: Int,
    val partResults: List<PartResultUiModel>
)

// ==========================================
// SCREEN
// ==========================================
@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun ToeicResultScreen(
    state: ResultState,
    onBackHomeClick: () -> Unit,
    onRetryIncorrectClick: () -> Unit,
    onViewExplanationsClick: () -> Unit,
    modifier: Modifier = Modifier
) {
    Scaffold(
        modifier = modifier.fillMaxSize(),
        containerColor = WordNestTheme.colors.background,
        contentWindowInsets = WindowInsets.systemBars,
        topBar = {
            TopAppBar(
                title = { Text("Kết quả bài thi", style = WordNestTheme.typography.titleMedium, color = WordNestTheme.colors.ink900) },
                navigationIcon = {
                    IconButton(onClick = onBackHomeClick) {
                        Icon(Icons.AutoMirrored.Filled.ArrowBack, contentDescription = "Trở về", tint = WordNestTheme.colors.ink900)
                    }
                },
                colors = TopAppBarDefaults.topAppBarColors(containerColor = WordNestTheme.colors.surface)
            )
        }
    ) { innerPadding ->
        LazyColumn(
            modifier = Modifier.fillMaxSize().padding(innerPadding),
            contentPadding = PaddingValues(16.dp),
            verticalArrangement = Arrangement.spacedBy(24.dp)
        ) {
            // 1. Hero Score
            item {
                Column(
                    modifier = Modifier.fillMaxWidth(),
                    horizontalAlignment = Alignment.CenterHorizontally
                ) {
                    Text(
                        text = state.examName,
                        style = WordNestTheme.typography.titleMedium,
                        color = WordNestTheme.colors.slate500,
                        textAlign = TextAlign.Center
                    )
                    Spacer(modifier = Modifier.height(16.dp))
                    Box(
                        modifier = Modifier
                            .size(160.dp)
                            .clip(CircleShape)
                            .background(WordNestTheme.colors.amberTint)
                            .padding(8.dp),
                        contentAlignment = Alignment.Center
                    ) {
                        Box(
                            modifier = Modifier
                                .fillMaxSize()
                                .clip(CircleShape)
                                .background(WordNestTheme.colors.surfaceWhite),
                            contentAlignment = Alignment.Center
                        ) {
                            Column(horizontalAlignment = Alignment.CenterHorizontally) {
                                Text(
                                    text = state.totalScore.toString(),
                                    style = WordNestTheme.typography.displayLarge.copy(fontSize = 48.sp),
                                    color = WordNestTheme.colors.amber500
                                )
                                Text(
                                    text = "Điểm ước tính",
                                    style = WordNestTheme.typography.labelMedium,
                                    color = WordNestTheme.colors.slate500
                                )
                            }
                        }
                    }
                }
            }

            // 2. Summary Stats
            item {
                Row(
                    modifier = Modifier.fillMaxWidth(),
                    horizontalArrangement = Arrangement.spacedBy(12.dp)
                ) {
                    StatBox(
                        icon = Icons.Default.CheckCircle,
                        label = "Đúng",
                        count = state.correctCount,
                        color = WordNestTheme.colors.mint500,
                        bgColor = WordNestTheme.colors.mint500.copy(alpha = 0.1f),
                        modifier = Modifier.weight(1f)
                    )
                    StatBox(
                        icon = Icons.Default.Cancel,
                        label = "Sai",
                        count = state.incorrectCount,
                        color = WordNestTheme.colors.coral500,
                        bgColor = WordNestTheme.colors.coralTint,
                        modifier = Modifier.weight(1f)
                    )
                    StatBox(
                        icon = Icons.Default.RemoveCircle,
                        label = "Bỏ trống",
                        count = state.skippedCount,
                        color = WordNestTheme.colors.slate500,
                        bgColor = WordNestTheme.colors.line200,
                        modifier = Modifier.weight(1f)
                    )
                }
            }

            // 3. Actions
            item {
                Column(verticalArrangement = Arrangement.spacedBy(12.dp)) {
                    PrimaryButton(
                        text = "Xem giải thích chi tiết",
                        onClick = onViewExplanationsClick,
                        modifier = Modifier.fillMaxWidth()
                    )
                    if (state.incorrectCount > 0 || state.skippedCount > 0) {
                        OutlinedWordNestButton(
                            text = "Làm lại các câu sai",
                            onClick = onRetryIncorrectClick,
                            modifier = Modifier.fillMaxWidth()
                        )
                    }
                }
            }

            // 4. Breakdown per Part
            item {
                Spacer(modifier = Modifier.height(16.dp))
                Text(
                    text = "Thống kê chi tiết",
                    style = WordNestTheme.typography.headlineMedium,
                    color = WordNestTheme.colors.ink900
                )
                Spacer(modifier = Modifier.height(16.dp))
            }

            items(state.partResults) { part ->
                Surface(
                    shape = WordNestTheme.shapes.small,
                    color = WordNestTheme.colors.surface,
                    border = BorderStroke(1.dp, WordNestTheme.colors.line200),
                    modifier = Modifier.fillMaxWidth().padding(bottom = 12.dp)
                ) {
                    Row(
                        modifier = Modifier.padding(16.dp),
                        verticalAlignment = Alignment.CenterVertically,
                        horizontalArrangement = Arrangement.SpaceBetween
                    ) {
                        Text(
                            text = part.partName,
                            style = WordNestTheme.typography.titleMedium,
                            color = WordNestTheme.colors.ink900
                        )
                        Row(verticalAlignment = Alignment.Bottom) {
                            Text(
                                text = part.correct.toString(),
                                style = WordNestTheme.typography.titleMedium.copy(fontWeight = FontWeight.Bold),
                                color = WordNestTheme.colors.mint500
                            )
                            Text(
                                text = " / ${part.total}",
                                style = WordNestTheme.typography.labelMedium,
                                color = WordNestTheme.colors.slate400,
                                modifier = Modifier.padding(bottom = 2.dp)
                            )
                        }
                    }
                }
            }
        }
    }
}

@Composable
private fun StatBox(
    icon: ImageVector,
    label: String,
    count: Int,
    color: Color,
    bgColor: Color,
    modifier: Modifier = Modifier
) {
    Surface(
        shape = WordNestTheme.shapes.medium,
        color = bgColor,
        modifier = modifier
    ) {
        Column(
            modifier = Modifier.padding(12.dp),
            horizontalAlignment = Alignment.CenterHorizontally
        ) {
            Icon(imageVector = icon, contentDescription = null, tint = color, modifier = Modifier.size(24.dp))
            Spacer(modifier = Modifier.height(8.dp))
            Text(
                text = count.toString(),
                style = WordNestTheme.typography.headlineMedium.copy(fontSize = 24.sp),
                color = color
            )
            Text(
                text = label,
                style = WordNestTheme.typography.labelSmall,
                color = color.copy(alpha = 0.8f)
            )
        }
    }
}

// ==========================================
// PREVIEW
// ==========================================
@Preview(showBackground = true, name = "Kết quả bài thi")
@Composable
fun ToeicResultScreenPreview() {
    WordNestTheme {
        ToeicResultScreen(
            state = ResultState(
                examName = "ETS 2024 - Test 1",
                totalScore = 850,
                correctCount = 175,
                incorrectCount = 20,
                skippedCount = 5,
                partResults = listOf(
                    PartResultUiModel("Part 1: Photographs", 5, 6),
                    PartResultUiModel("Part 2: Question-Response", 22, 25),
                    PartResultUiModel("Part 3: Conversations", 35, 39),
                    PartResultUiModel("Part 4: Talks", 28, 30),
                    PartResultUiModel("Part 5: Incomplete Sentences", 25, 30),
                    PartResultUiModel("Part 6: Text Completion", 14, 16),
                    PartResultUiModel("Part 7: Reading Comprehension", 46, 54)
                )
            ),
            onBackHomeClick = {},
            onRetryIncorrectClick = {},
            onViewExplanationsClick = {}
        )
    }
}
