package com.tung.wordnest.ui.screens.toeic

import androidx.compose.foundation.BorderStroke
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.ChevronRight
import androidx.compose.material.icons.filled.Edit
import androidx.compose.material.icons.filled.Headphones
import androidx.compose.material.icons.filled.MenuBook
import androidx.compose.material.icons.filled.PlayArrow
import androidx.compose.material.icons.filled.Translate
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.tung.wordnest.ui.components.core.SectionHeader
import com.tung.wordnest.ui.components.core.ShortcutCard
import com.tung.wordnest.ui.components.core.WordNestProgressBar
import com.tung.wordnest.ui.screens.home.ActiveSessionUiModel
import com.tung.wordnest.ui.theme.WordNestTheme

data class ToeicHubUiState(
    val currentScoreGoal: Int,
    val activeSession: ActiveSessionUiModel?,
    val mockTests: List<ToeicMockTestUiModel>
)

data class ToeicMockTestUiModel(
    val id: String,
    val name: String,
    val completedQuestions: Int,
    val totalQuestions: Int,
    val bestScore: Int?
)

@Composable
fun ToeicHubScreen(
    state: ToeicHubUiState,
    onEditGoalClick: () -> Unit,
    onActiveSessionClick: (String) -> Unit,
    onIntensiveListeningClick: () -> Unit,
    onReadingTestClick: () -> Unit,
    onListeningTestClick: () -> Unit,
    onMockTestClick: (String) -> Unit,
    modifier: Modifier = Modifier
) {
    LazyColumn(
        modifier = modifier
            .fillMaxSize()
            .background(WordNestTheme.colors.background),
        contentPadding = PaddingValues(start = 16.dp, end = 16.dp, top = 16.dp, bottom = 100.dp),
        verticalArrangement = Arrangement.spacedBy(24.dp)
    ) {
        // 1. Header & Goal
        item {
            Column(verticalArrangement = Arrangement.spacedBy(16.dp)) {
                SectionHeader(title = "Luyện thi TOEIC")
                
                Surface(
                    onClick = onEditGoalClick,
                    shape = WordNestTheme.shapes.medium, // 20.dp
                    color = WordNestTheme.colors.surface,
                    border = BorderStroke(1.dp, WordNestTheme.colors.line200),
                    modifier = Modifier.fillMaxWidth()
                ) {
                    Row(
                        modifier = Modifier.padding(16.dp),
                        verticalAlignment = Alignment.CenterVertically,
                        horizontalArrangement = Arrangement.SpaceBetween
                    ) {
                        Column {
                            Text(
                                text = "Mục tiêu hiện tại",
                                style = WordNestTheme.typography.labelMedium,
                                color = WordNestTheme.colors.slate500
                            )
                            Spacer(modifier = Modifier.height(4.dp))
                            Row(verticalAlignment = Alignment.Bottom, horizontalArrangement = Arrangement.spacedBy(4.dp)) {
                                Text(
                                    text = state.currentScoreGoal.toString(),
                                    style = WordNestTheme.typography.displayLarge,
                                    color = WordNestTheme.colors.amber500
                                )
                                Text(
                                    text = "điểm",
                                    style = WordNestTheme.typography.titleMedium,
                                    color = WordNestTheme.colors.slate500,
                                    modifier = Modifier.padding(bottom = 4.dp)
                                )
                            }
                        }
                        
                        Box(
                            modifier = Modifier
                                .size(40.dp)
                                .clip(CircleShape)
                                .background(WordNestTheme.colors.beige100),
                            contentAlignment = Alignment.Center
                        ) {
                            Icon(Icons.Default.Edit, contentDescription = "Edit Goal", tint = WordNestTheme.colors.forest900, modifier = Modifier.size(20.dp))
                        }
                    }
                }
            }
        }

        // 2. Active Session Spotlight (If any)
        if (state.activeSession != null) {
            item {
                ShortcutCard(
                    title = state.activeSession.title,
                    subtitle = "Tiếp tục bài đang làm dở",
                    icon = {
                        Box(
                            modifier = Modifier
                                .fillMaxSize()
                                .clip(CircleShape)
                                .background(WordNestTheme.colors.amber400),
                            contentAlignment = Alignment.Center
                        ) {
                            Icon(Icons.Default.PlayArrow, contentDescription = null, tint = WordNestTheme.colors.forest900)
                        }
                    },
                    isSpotlight = true,
                    progress = state.activeSession.progress,
                    onClick = { onActiveSessionClick(state.activeSession.sessionId) }
                )
            }
        }

        // 3. Shortcuts
        item {
            Column(verticalArrangement = Arrangement.spacedBy(16.dp)) {
                Text(
                    text = "Chế độ luyện tập",
                    style = WordNestTheme.typography.titleMedium,
                    color = WordNestTheme.colors.ink900
                )
                
                ShortcutCard(
                    title = "Intensive Listening",
                    subtitle = "Nghe chép chính tả từng câu",
                    icon = { Icon(Icons.Default.Translate, contentDescription = null, tint = WordNestTheme.colors.forest900) },
                    onClick = onIntensiveListeningClick
                )
                ShortcutCard(
                    title = "Luyện đề Reading",
                    subtitle = "Part 5, 6, 7",
                    icon = { Icon(Icons.Default.MenuBook, contentDescription = null, tint = WordNestTheme.colors.forest900) },
                    onClick = onReadingTestClick
                )
                ShortcutCard(
                    title = "Luyện đề Listening",
                    subtitle = "Part 1–4, có audio",
                    icon = { Icon(Icons.Default.Headphones, contentDescription = null, tint = WordNestTheme.colors.forest900) },
                    onClick = onListeningTestClick
                )
            }
        }

        // 4. Mock Tests List
        item {
            Text(
                text = "Bộ đề thi thử",
                style = WordNestTheme.typography.titleMedium,
                color = WordNestTheme.colors.ink900
            )
        }

        items(state.mockTests) { test ->
            Surface(
                onClick = { onMockTestClick(test.id) },
                shape = WordNestTheme.shapes.medium,
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
                            text = test.name,
                            style = WordNestTheme.typography.titleMedium,
                            color = WordNestTheme.colors.ink900,
                            modifier = Modifier.weight(1f)
                        )
                        Icon(Icons.Default.ChevronRight, contentDescription = null, tint = WordNestTheme.colors.slate400)
                    }
                    
                    Spacer(modifier = Modifier.height(12.dp))
                    
                    Row(
                        modifier = Modifier.fillMaxWidth(),
                        horizontalArrangement = Arrangement.SpaceBetween,
                        verticalAlignment = Alignment.CenterVertically
                    ) {
                        Text(
                            text = "Tiến độ: ${test.completedQuestions}/${test.totalQuestions}",
                            style = WordNestTheme.typography.labelMedium,
                            color = WordNestTheme.colors.slate500
                        )
                        if (test.bestScore != null) {
                            Text(
                                text = "Best: ${test.bestScore}",
                                style = WordNestTheme.typography.labelMedium.copy(fontWeight = FontWeight.Bold),
                                color = WordNestTheme.colors.mint500
                            )
                        }
                    }
                    
                    Spacer(modifier = Modifier.height(8.dp))
                    
                    val progress = if (test.totalQuestions > 0) test.completedQuestions.toFloat() / test.totalQuestions else 0f
                    WordNestProgressBar(progress = progress, height = 6.dp)
                }
            }
        }
    }
}

@Preview(showBackground = true, name = "Toeic Hub")
@Composable
fun ToeicHubScreenPreview() {
    WordNestTheme {
        ToeicHubScreen(
            state = ToeicHubUiState(
                currentScoreGoal = 850,
                activeSession = ActiveSessionUiModel("s1", "ETS 2024 - Test 1 (Part 5)", 0.35f),
                mockTests = listOf(
                    ToeicMockTestUiModel("1", "ETS 2024 - Test 1", 120, 200, 750),
                    ToeicMockTestUiModel("2", "ETS 2024 - Test 2", 0, 200, null),
                    ToeicMockTestUiModel("3", "Hacker TOEIC - Test 1", 200, 200, 820)
                )
            ),
            onEditGoalClick = {},
            onActiveSessionClick = {},
            onIntensiveListeningClick = {},
            onReadingTestClick = {},
            onListeningTestClick = {},
            onMockTestClick = {}
        )
    }
}
