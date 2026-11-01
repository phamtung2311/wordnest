package com.tung.wordnest.ui.screens.toeic

import androidx.compose.foundation.BorderStroke
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.LazyRow
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.ChevronRight
import androidx.compose.material.icons.filled.Edit
import androidx.compose.material.icons.filled.Headphones
import androidx.compose.material.icons.filled.MenuBook
import androidx.compose.material.icons.filled.PlayArrow
import androidx.compose.material.icons.filled.Translate
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
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
    val bestScore: Int?,
    val kind: String = "reading", // "reading" | "listening"
    val hasTextContent: Boolean = false
)

@Composable
fun ToeicHubScreen(
    state: ToeicHubUiState,
    onEditGoalClick: () -> Unit,
    onActiveSessionClick: (String) -> Unit,
    onIntensiveListeningClick: () -> Unit,
    onReadingTestClick: (String) -> Unit,
    onListeningTestClick: (String) -> Unit,
    onMockTestClick: (String, String) -> Unit,
    modifier: Modifier = Modifier
) {
    var selectedFilter by remember { mutableStateOf("ALL") } // "ALL", "READING", "LISTENING"

    val filteredTests = remember(state.mockTests, selectedFilter) {
        when (selectedFilter) {
            "READING" -> state.mockTests.filter { it.kind == "reading" }
            "LISTENING" -> state.mockTests.filter { it.kind == "listening" }
            else -> state.mockTests
        }
    }

    LazyColumn(
        modifier = modifier
            .fillMaxSize()
            .background(WordNestTheme.colors.background),
        contentPadding = PaddingValues(start = 16.dp, end = 16.dp, top = 16.dp, bottom = 100.dp),
        verticalArrangement = Arrangement.spacedBy(20.dp)
    ) {
        // 1. Header & Goal
        item {
            Column(verticalArrangement = Arrangement.spacedBy(16.dp)) {
                SectionHeader(title = "Luyện thi TOEIC")
                
                Surface(
                    onClick = onEditGoalClick,
                    shape = WordNestTheme.shapes.medium,
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
            Column(verticalArrangement = Arrangement.spacedBy(12.dp)) {
                Text(
                    text = "Chế độ luyện tập",
                    style = WordNestTheme.typography.titleMedium,
                    color = WordNestTheme.colors.ink900
                )
                
                ShortcutCard(
                    title = "Intensive Listening",
                    subtitle = "Nghe chép chính tả từng câu (Sắp có)",
                    icon = { Icon(Icons.Default.Translate, contentDescription = null, tint = WordNestTheme.colors.forest900) },
                    onClick = onIntensiveListeningClick
                )
                ShortcutCard(
                    title = "Luyện đề Reading",
                    subtitle = "20 đề chuẩn ETS · Part 5, 6, 7 (PDF)",
                    icon = { Icon(Icons.Default.MenuBook, contentDescription = null, tint = WordNestTheme.colors.forest900) },
                    onClick = {
                        val firstReading = state.mockTests.firstOrNull { it.kind == "reading" }?.id ?: "2024_1"
                        onReadingTestClick(firstReading)
                    }
                )
                ShortcutCard(
                    title = "Luyện đề Listening",
                    subtitle = "20 đề chuẩn ETS · Part 1–4 (Audio)",
                    icon = { Icon(Icons.Default.Headphones, contentDescription = null, tint = WordNestTheme.colors.forest900) },
                    onClick = {
                        val firstListening = state.mockTests.firstOrNull { it.kind == "listening" }?.id ?: "2024_1"
                        onListeningTestClick(firstListening)
                    }
                )
            }
        }

        // 4. Mock Tests List Header + Filter Chips
        item {
            Column(verticalArrangement = Arrangement.spacedBy(12.dp)) {
                Row(
                    modifier = Modifier.fillMaxWidth(),
                    horizontalArrangement = Arrangement.SpaceBetween,
                    verticalAlignment = Alignment.CenterVertically
                ) {
                    Text(
                        text = "Bộ đề thi (${filteredTests.size})",
                        style = WordNestTheme.typography.titleMedium,
                        color = WordNestTheme.colors.ink900
                    )
                }

                // Filter chips
                Row(horizontalArrangement = Arrangement.spacedBy(8.dp)) {
                    FilterChip(
                        selected = selectedFilter == "ALL",
                        onClick = { selectedFilter = "ALL" },
                        label = { Text("Tất cả (40)") },
                        colors = FilterChipDefaults.filterChipColors(
                            selectedContainerColor = WordNestTheme.colors.forest900,
                            selectedLabelColor = Color.White
                        )
                    )
                    FilterChip(
                        selected = selectedFilter == "READING",
                        onClick = { selectedFilter = "READING" },
                        label = { Text("Reading (20)") },
                        colors = FilterChipDefaults.filterChipColors(
                            selectedContainerColor = WordNestTheme.colors.forest900,
                            selectedLabelColor = Color.White
                        )
                    )
                    FilterChip(
                        selected = selectedFilter == "LISTENING",
                        onClick = { selectedFilter = "LISTENING" },
                        label = { Text("Listening (20)") },
                        colors = FilterChipDefaults.filterChipColors(
                            selectedContainerColor = WordNestTheme.colors.forest900,
                            selectedLabelColor = Color.White
                        )
                    )
                }
            }
        }

        items(filteredTests, key = { "${it.kind}_${it.id}" }) { test ->
            val isReading = test.kind == "reading"
            Surface(
                onClick = { onMockTestClick(test.id, test.kind) },
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
                        Row(verticalAlignment = Alignment.CenterVertically, horizontalArrangement = Arrangement.spacedBy(10.dp)) {
                            Box(
                                modifier = Modifier
                                    .size(36.dp)
                                    .clip(CircleShape)
                                    .background(if (isReading) WordNestTheme.colors.coralTint else WordNestTheme.colors.amberTint),
                                contentAlignment = Alignment.Center
                            ) {
                                Icon(
                                    imageVector = if (isReading) Icons.Default.MenuBook else Icons.Default.Headphones,
                                    contentDescription = null,
                                    tint = if (isReading) WordNestTheme.colors.coral500 else WordNestTheme.colors.forest900,
                                    modifier = Modifier.size(18.dp)
                                )
                            }
                            Column {
                                Text(
                                    text = test.name,
                                    style = WordNestTheme.typography.titleMedium,
                                    color = WordNestTheme.colors.ink900
                                )
                                Row(
                                    verticalAlignment = Alignment.CenterVertically,
                                    horizontalArrangement = Arrangement.spacedBy(6.dp)
                                ) {
                                    Text(
                                        text = if (isReading) "Reading · 100 câu" else "Listening · 100 câu",
                                        style = WordNestTheme.typography.labelSmall,
                                        color = WordNestTheme.colors.slate500
                                    )
                                    if (test.hasTextContent) {
                                        Surface(
                                            shape = RoundedCornerShape(4.dp),
                                            color = WordNestTheme.colors.mint500.copy(alpha = 0.12f)
                                        ) {
                                            Text(
                                                text = "📄 Bản chữ",
                                                style = WordNestTheme.typography.labelSmall.copy(
                                                    fontWeight = FontWeight.Bold,
                                                    fontSize = 10.sp
                                                ),
                                                color = WordNestTheme.colors.mint500,
                                                modifier = Modifier.padding(horizontal = 4.dp, vertical = 2.dp)
                                            )
                                        }
                                    }
                                }
                            }
                        }
                        Icon(Icons.Default.ChevronRight, contentDescription = null, tint = WordNestTheme.colors.slate400)
                    }
                    
                    Spacer(modifier = Modifier.height(12.dp))
                    
                    Row(
                        modifier = Modifier.fillMaxWidth(),
                        horizontalArrangement = Arrangement.SpaceBetween,
                        verticalAlignment = Alignment.CenterVertically
                    ) {
                        Text(
                            text = if (test.completedQuestions > 0) "Tiến độ: ${test.completedQuestions}/${test.totalQuestions}" else "Chưa làm",
                            style = WordNestTheme.typography.labelMedium,
                            color = WordNestTheme.colors.slate500
                        )
                        if (test.bestScore != null) {
                            Text(
                                text = "Điểm cao nhất: ${test.bestScore}",
                                style = WordNestTheme.typography.labelMedium.copy(fontWeight = FontWeight.Bold),
                                color = WordNestTheme.colors.mint500
                            )
                        }
                    }
                    
                    if (test.completedQuestions > 0) {
                        Spacer(modifier = Modifier.height(8.dp))
                        val progress = test.completedQuestions.toFloat() / test.totalQuestions
                        WordNestProgressBar(progress = progress, height = 6.dp)
                    }
                }
            }
        }
    }
}
