package com.tung.wordnest.ui.screens.profile

import androidx.compose.foundation.BorderStroke
import androidx.compose.foundation.Canvas
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.automirrored.filled.ArrowBack
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.geometry.CornerRadius
import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.geometry.Size
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.PathEffect
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.tung.wordnest.ui.components.core.StatCard
import com.tung.wordnest.ui.theme.WordNestTheme
import java.time.LocalDate
import java.time.format.DateTimeFormatter
import java.time.format.TextStyle
import java.util.Locale
import kotlin.math.max

// ==========================================
// MODELS
// ==========================================
data class DailyStudyRecord(
    val date: LocalDate,
    val minutes: Int,
    val wordsLearned: Int,
    val testsTaken: Int
)

data class StudyHistoryUiState(
    val weeklyMinutes: Int,
    val currentStreak: Int,
    val bestStreak: Int,
    val dailyGoalMinutes: Int,
    val weeklyRecords: List<DailyStudyRecord>, // 7 days ending today
    val monthlyRecords: List<DailyStudyRecord> // For the heatmap (e.g. past 35 days)
)

enum class HeatmapLevel { NONE, PARTIAL, COMPLETED }

// ==========================================
// SCREEN
// ==========================================
@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun StudyHistoryScreen(
    state: StudyHistoryUiState,
    onBackClick: () -> Unit,
    modifier: Modifier = Modifier
) {
    var selectedRecord by remember { mutableStateOf<DailyStudyRecord?>(null) }
    
    // Auto-select today if not null
    LaunchedEffect(state.monthlyRecords) {
        if (selectedRecord == null && state.monthlyRecords.isNotEmpty()) {
            selectedRecord = state.monthlyRecords.lastOrNull()
        }
    }

    Scaffold(
        modifier = modifier.fillMaxSize(),
        containerColor = WordNestTheme.colors.background,
        contentWindowInsets = WindowInsets.systemBars,
        topBar = {
            TopAppBar(
                title = { Text("Lịch sử học tập", style = WordNestTheme.typography.titleMedium, color = WordNestTheme.colors.ink900) },
                navigationIcon = {
                    IconButton(onClick = onBackClick) {
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
            // 1. Stat Cards Row
            item {
                Row(
                    modifier = Modifier.fillMaxWidth(),
                    horizontalArrangement = Arrangement.spacedBy(12.dp)
                ) {
                    StatCard(
                        number = state.weeklyMinutes.toString(),
                        label = "Phút tuần này",
                        icon = { Text("⏱️", fontSize = 18.sp) },
                        backgroundColor = WordNestTheme.colors.surfaceWhite,
                        modifier = Modifier.weight(1f)
                    )
                    StatCard(
                        number = state.currentStreak.toString(),
                        label = "Streak",
                        icon = { Text("🔥", fontSize = 18.sp) },
                        backgroundColor = WordNestTheme.colors.orangeTint,
                        modifier = Modifier.weight(1f)
                    )
                    StatCard(
                        number = state.bestStreak.toString(),
                        label = "Kỷ lục",
                        icon = { Text("🏆", fontSize = 18.sp) },
                        backgroundColor = WordNestTheme.colors.pinkTint,
                        modifier = Modifier.weight(1f)
                    )
                }
            }

            // 2. Weekly Bar Chart
            item {
                Text("Hoạt động 7 ngày qua", style = WordNestTheme.typography.headlineMedium, color = WordNestTheme.colors.ink900)
                Spacer(modifier = Modifier.height(16.dp))
                Surface(
                    shape = WordNestTheme.shapes.medium,
                    color = WordNestTheme.colors.surface,
                    border = BorderStroke(1.dp, WordNestTheme.colors.line200),
                    modifier = Modifier.fillMaxWidth()
                ) {
                    WeeklyStudyBarChart(
                        records = state.weeklyRecords,
                        goalMinutes = state.dailyGoalMinutes,
                        modifier = Modifier.fillMaxWidth().height(220.dp).padding(16.dp)
                    )
                }
            }

            // 3. Monthly Heatmap
            item {
                Text("Mức độ duy trì", style = WordNestTheme.typography.headlineMedium, color = WordNestTheme.colors.ink900)
                Spacer(modifier = Modifier.height(16.dp))
                MonthlyStudyHeatmap(
                    records = state.monthlyRecords,
                    goalMinutes = state.dailyGoalMinutes,
                    selectedDate = selectedRecord?.date,
                    onDayClick = { selectedRecord = it }
                )
            }

            // 4. Selected Day Detail
            item {
                selectedRecord?.let { record ->
                    SelectedDayDetailCard(record = record)
                }
            }
        }
    }
}

// ==========================================
// COMPONENTS
// ==========================================
@Composable
private fun WeeklyStudyBarChart(
    records: List<DailyStudyRecord>,
    goalMinutes: Int,
    modifier: Modifier = Modifier
) {
    val barColor = WordNestTheme.colors.mint500
    val goalColor = WordNestTheme.colors.coral500
    val labelColor = WordNestTheme.colors.slate500

    val maxMinutes = max(goalMinutes, records.maxOfOrNull { it.minutes } ?: 0)
    // Add 20% padding to the top of the chart so the max bar doesn't hit the ceiling
    val yMax = (maxMinutes * 1.2f).coerceAtLeast(10f)

    Canvas(modifier = modifier) {
        val width = size.width
        val height = size.height
        
        // Text configuration is not natively simple in plain Canvas without native Canvas APIs.
        // For standard Compose, we'll draw shapes. The X-axis text labels are better done with 
        // a Row placed below the canvas in a Column. For this exact UI, we'll draw the bars here
        // and assume a companion layout handles text if needed, OR we can draw the bars and the goal line.
        
        // Calculate dimensions
        val barWidth = width / (records.size * 2f)
        val spaceWidth = barWidth
        
        // Draw Daily Goal Dashed Line
        val goalY = height - (goalMinutes / yMax * height)
        drawLine(
            color = goalColor,
            start = Offset(0f, goalY),
            end = Offset(width, goalY),
            strokeWidth = 3f,
            pathEffect = PathEffect.dashPathEffect(floatArrayOf(10f, 10f), 0f)
        )
        
        // Draw Bars
        records.forEachIndexed { index, record ->
            val barHeight = (record.minutes / yMax * height)
            val left = index * (barWidth + spaceWidth) + (spaceWidth / 2f)
            val top = height - barHeight
            
            drawRoundRect(
                color = barColor,
                topLeft = Offset(left, top),
                size = Size(barWidth, barHeight),
                cornerRadius = CornerRadius(16f, 16f) // Rounded top
            )
        }
    }
    
    // Overlay X-axis Labels (Custom layout since Canvas drawText is complex in generic compose)
    Row(
        modifier = Modifier.fillMaxWidth().padding(top = 8.dp),
        horizontalArrangement = Arrangement.SpaceAround
    ) {
        records.forEach { record ->
            Text(
                text = record.date.dayOfWeek.getDisplayName(TextStyle.SHORT, Locale.Builder().setLanguage("vi").build()).take(2),
                style = WordNestTheme.typography.labelSmall,
                color = labelColor
            )
        }
    }
}

@Composable
private fun MonthlyStudyHeatmap(
    records: List<DailyStudyRecord>,
    goalMinutes: Int,
    selectedDate: LocalDate?,
    onDayClick: (DailyStudyRecord) -> Unit
) {
    Surface(
        shape = WordNestTheme.shapes.medium,
        color = WordNestTheme.colors.surface,
        border = BorderStroke(1.dp, WordNestTheme.colors.line200),
        modifier = Modifier.fillMaxWidth()
    ) {
        Column(modifier = Modifier.padding(16.dp)) {
            // Days of week header
            Row(modifier = Modifier.fillMaxWidth(), horizontalArrangement = Arrangement.SpaceBetween) {
                listOf("T2", "T3", "T4", "T5", "T6", "T7", "CN").forEach { day ->
                    Text(day, style = WordNestTheme.typography.labelSmall, color = WordNestTheme.colors.slate400, modifier = Modifier.weight(1f), textAlign = TextAlign.Center)
                }
            }
            Spacer(modifier = Modifier.height(8.dp))

            // Chunk records into weeks (7 days)
            // Note: In real app, you need to pad the start/end to align with real calendar weeks.
            // Assuming records are pre-padded for simplicity of this UI layout.
            val weeks = records.chunked(7)
            
            Column(verticalArrangement = Arrangement.spacedBy(8.dp)) {
                weeks.forEach { weekRecords ->
                    Row(
                        modifier = Modifier.fillMaxWidth(),
                        horizontalArrangement = Arrangement.spacedBy(8.dp)
                    ) {
                        weekRecords.forEach { record ->
                            val level = when {
                                record.minutes == 0 -> HeatmapLevel.NONE
                                record.minutes < goalMinutes -> HeatmapLevel.PARTIAL
                                else -> HeatmapLevel.COMPLETED
                            }
                            val isSelected = record.date == selectedDate
                            
                            HeatmapSquare(
                                level = level,
                                isSelected = isSelected,
                                onClick = { onDayClick(record) },
                                modifier = Modifier.weight(1f).aspectRatio(1f)
                            )
                        }
                        
                        // Fill empty space if week < 7 days
                        repeat(7 - weekRecords.size) {
                            Spacer(modifier = Modifier.weight(1f).aspectRatio(1f))
                        }
                    }
                }
            }

            Spacer(modifier = Modifier.height(24.dp))
            
            // Legend
            Row(verticalAlignment = Alignment.CenterVertically, horizontalArrangement = Arrangement.spacedBy(16.dp)) {
                LegendItemHeatmap(HeatmapLevel.NONE, "Nghỉ")
                LegendItemHeatmap(HeatmapLevel.PARTIAL, "Chưa đạt")
                LegendItemHeatmap(HeatmapLevel.COMPLETED, "Hoàn thành")
            }
        }
    }
}

@Composable
private fun HeatmapSquare(
    level: HeatmapLevel,
    isSelected: Boolean,
    onClick: () -> Unit,
    modifier: Modifier = Modifier
) {
    val bgColor = when (level) {
        HeatmapLevel.NONE -> WordNestTheme.colors.beige100
        HeatmapLevel.PARTIAL -> WordNestTheme.colors.sage300
        HeatmapLevel.COMPLETED -> WordNestTheme.colors.mint500
    }
    
    val borderColor = if (isSelected) WordNestTheme.colors.ink900 else Color.Transparent
    val borderWidth = if (isSelected) 2.dp else 0.dp

    Box(
        modifier = modifier
            .clip(WordNestTheme.shapes.extraSmall)
            .background(bgColor)
            .border(borderWidth, borderColor, WordNestTheme.shapes.extraSmall)
            .clickable(onClick = onClick),
        contentAlignment = Alignment.Center
    ) {
        // Accessibility / Visual aid for completed
        if (level == HeatmapLevel.COMPLETED) {
            Box(modifier = Modifier.size(4.dp).clip(CircleShape).background(WordNestTheme.colors.surfaceWhite))
        }
    }
}

@Composable
private fun LegendItemHeatmap(level: HeatmapLevel, label: String) {
    val bgColor = when (level) {
        HeatmapLevel.NONE -> WordNestTheme.colors.beige100
        HeatmapLevel.PARTIAL -> WordNestTheme.colors.sage300
        HeatmapLevel.COMPLETED -> WordNestTheme.colors.mint500
    }
    Row(verticalAlignment = Alignment.CenterVertically) {
        Box(
            modifier = Modifier.size(16.dp).clip(WordNestTheme.shapes.extraSmall).background(bgColor),
            contentAlignment = Alignment.Center
        ) {
            if (level == HeatmapLevel.COMPLETED) {
                Box(modifier = Modifier.size(2.dp).clip(CircleShape).background(WordNestTheme.colors.surfaceWhite))
            }
        }
        Spacer(modifier = Modifier.width(6.dp))
        Text(label, style = WordNestTheme.typography.labelSmall, color = WordNestTheme.colors.slate500)
    }
}

@Composable
private fun SelectedDayDetailCard(record: DailyStudyRecord) {
    val formatter = DateTimeFormatter.ofPattern("dd 'tháng' MM, yyyy", Locale.Builder().setLanguage("vi").build())
    
    Surface(
        shape = WordNestTheme.shapes.medium,
        color = WordNestTheme.colors.surfaceWhite,
        border = BorderStroke(1.dp, WordNestTheme.colors.line200),
        modifier = Modifier.fillMaxWidth()
    ) {
        Column(modifier = Modifier.padding(16.dp)) {
            Text(
                text = record.date.format(formatter),
                style = WordNestTheme.typography.titleMedium,
                color = WordNestTheme.colors.ink900
            )
            Spacer(modifier = Modifier.height(16.dp))
            
            Row(modifier = Modifier.fillMaxWidth(), horizontalArrangement = Arrangement.SpaceBetween) {
                DetailStat("Thời gian học", "${record.minutes}p")
                DetailStat("Từ vựng đã học", "${record.wordsLearned}")
                DetailStat("Bài kiểm tra", "${record.testsTaken}")
            }
        }
    }
}

@Composable
private fun DetailStat(label: String, value: String) {
    Column(horizontalAlignment = Alignment.Start) {
        Text(label, style = WordNestTheme.typography.labelSmall, color = WordNestTheme.colors.slate500)
        Spacer(modifier = Modifier.height(4.dp))
        Text(value, style = WordNestTheme.typography.titleMedium.copy(fontWeight = FontWeight.Bold), color = WordNestTheme.colors.forest900)
    }
}

// ==========================================
// PREVIEW
// ==========================================
@Preview(showBackground = true)
@Composable
fun StudyHistoryScreenPreview() {
    val today = LocalDate.now()
    val sampleRecords = (34 downTo 0).map { i ->
        val date = today.minusDays(i.toLong())
        val minutes = when {
            i % 5 == 0 -> 0 // Missed
            i % 3 == 0 -> 10 // Partial
            else -> (25..45).random() // Completed
        }
        DailyStudyRecord(date, minutes, minutes * 2, minutes / 15)
    }
    
    val weekly = sampleRecords.takeLast(7)

    WordNestTheme {
        StudyHistoryScreen(
            state = StudyHistoryUiState(
                weeklyMinutes = 145,
                currentStreak = 12,
                bestStreak = 45,
                dailyGoalMinutes = 20,
                weeklyRecords = weekly,
                monthlyRecords = sampleRecords
            ),
            onBackClick = {}
        )
    }
}
