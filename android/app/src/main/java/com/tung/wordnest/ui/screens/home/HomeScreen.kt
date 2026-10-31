package com.tung.wordnest.ui.screens.home

import androidx.compose.foundation.BorderStroke
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.AddBox
import androidx.compose.material.icons.filled.CheckCircle
import androidx.compose.material.icons.filled.Headphones
import androidx.compose.material.icons.automirrored.filled.MenuBook
import androidx.compose.material.icons.filled.Notifications
import androidx.compose.material.icons.filled.PlayArrow
import androidx.compose.material3.Icon
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.tung.wordnest.ui.components.core.*
import com.tung.wordnest.ui.theme.HeroShape
import com.tung.wordnest.ui.theme.WordNestTheme

@Composable
fun HomeScreen(
    state: HomeUiState,
    onStudyClick: () -> Unit,
    onCreateDeckClick: () -> Unit,
    onWordClick: (String) -> Unit,
    onSpeakerClick: (String) -> Unit,
    onViewAllWordsClick: () -> Unit,
    onAddWordClick: () -> Unit,
    onSessionClick: (String) -> Unit,
    onToeicReadingClick: () -> Unit,
    onToeicListeningClick: () -> Unit,
    onAdjustGoalClick: () -> Unit,
    onViewHistoryClick: () -> Unit,
    modifier: Modifier = Modifier
) {
    if (state.isLoading) {
        HomeSkeleton(modifier = modifier)
        return
    }

    LazyColumn(
        modifier = modifier.fillMaxSize(),
        contentPadding = PaddingValues(start = 16.dp, end = 16.dp, top = 16.dp, bottom = 120.dp), // Bottom padding extra to account for FAB & BottomBar safely
        verticalArrangement = Arrangement.spacedBy(20.dp)
    ) {
        if (state.isOffline) {
            item {
                OfflineBanner(
                    modifier = Modifier.clip(WordNestTheme.shapes.small)
                )
            }
        }

        // Section A: Hero
        item {
            HomeHeroSection(
                state = state,
                onStudyClick = onStudyClick,
                onCreateDeckClick = onCreateDeckClick
            )
        }

        // Section B & C & D only visible if user has decks
        if (state.hasAnyDeck) {
            item {
                HomeRecentWordsSection(
                    state = state,
                    onWordClick = onWordClick,
                    onSpeakerClick = onSpeakerClick,
                    onViewAllWordsClick = onViewAllWordsClick,
                    onAddWordClick = onAddWordClick
                )
            }

            item {
                HomeShortcutsSection(
                    state = state,
                    onSessionClick = onSessionClick,
                    onToeicReadingClick = onToeicReadingClick,
                    onToeicListeningClick = onToeicListeningClick
                )
            }

            item {
                HomeProgressSection(
                    state = state,
                    onAdjustGoalClick = onAdjustGoalClick,
                    onViewHistoryClick = onViewHistoryClick
                )
            }
        }
    }
}

@Composable
private fun HomeHeroSection(
    state: HomeUiState,
    onStudyClick: () -> Unit,
    onCreateDeckClick: () -> Unit
) {
    val totalPending = state.dueWordsCount + state.newWordsCount
    val isCompleted = state.isTodayCompleted
    val hasDecks = state.hasAnyDeck

    val iconBgColor = when {
        !hasDecks -> WordNestTheme.colors.amberTint
        isCompleted -> WordNestTheme.colors.mint500.copy(alpha = 0.15f)
        else -> WordNestTheme.colors.coralTint
    }
    
    val iconTintColor = when {
        !hasDecks -> WordNestTheme.colors.amber500
        isCompleted -> WordNestTheme.colors.mint500
        else -> WordNestTheme.colors.coral500
    }
    
    val iconVector = when {
        !hasDecks -> Icons.Default.AddBox
        isCompleted -> Icons.Default.CheckCircle
        else -> Icons.Default.Notifications
    }

    val overlineText = when {
        !hasDecks -> "BẮT ĐẦU NGAY"
        isCompleted -> "HOÀN THÀNH"
        else -> "CẦN HỌC HÔM NAY"
    }

    val title = when {
        !hasDecks -> "Tạo bộ từ đầu tiên của bạn"
        isCompleted -> "Bạn đã học xong hôm nay!"
        else -> "$totalPending từ đang chờ bạn"
    }

    val subtitle = when {
        !hasDecks -> "Hãy bắt đầu hành trình xây dựng vốn từ vựng bằng cách tạo bộ từ đầu tiên."
        isCompleted -> "Tuyệt vời! Hãy tiếp tục duy trì chuỗi học tập nhé."
        else -> "${state.newWordsCount} từ mới · ${state.reviewWordsCount} từ cần ôn"
    }

    val buttonText = when {
        !hasDecks -> "Tạo bộ từ"
        isCompleted -> "Học thêm"
        else -> "Học ngay →"
    }

    Surface(
        shape = HeroShape, // 24.dp
        color = WordNestTheme.colors.surfaceWhite,
        border = BorderStroke(1.dp, WordNestTheme.colors.line200),
        modifier = Modifier.fillMaxWidth()
    ) {
        Column(modifier = Modifier.padding(20.dp)) {
            Row(verticalAlignment = Alignment.CenterVertically) {
                Box(
                    modifier = Modifier
                        .size(44.dp)
                        .clip(CircleShape)
                        .background(iconBgColor),
                    contentAlignment = Alignment.Center
                ) {
                    Icon(
                        imageVector = iconVector,
                        contentDescription = null,
                        tint = iconTintColor
                    )
                }
                Spacer(modifier = Modifier.width(12.dp))
                Text(
                    text = overlineText,
                    style = WordNestTheme.typography.labelSmall, // Overline style
                    color = iconTintColor
                )
            }
            
            Spacer(modifier = Modifier.height(16.dp))
            
            Text(
                text = title,
                style = WordNestTheme.typography.headlineMedium,
                color = WordNestTheme.colors.primaryText
            )
            
            Spacer(modifier = Modifier.height(6.dp))
            
            Text(
                text = subtitle,
                style = WordNestTheme.typography.bodyMedium,
                color = WordNestTheme.colors.slate500
            )
            
            Spacer(modifier = Modifier.height(24.dp))
            
            PrimaryButton(
                text = buttonText,
                onClick = if (!hasDecks) onCreateDeckClick else onStudyClick,
                modifier = Modifier.fillMaxWidth()
            )
        }
    }
}

@Composable
private fun HomeRecentWordsSection(
    state: HomeUiState,
    onWordClick: (String) -> Unit,
    onSpeakerClick: (String) -> Unit,
    onViewAllWordsClick: () -> Unit,
    onAddWordClick: () -> Unit
) {
    Column(verticalArrangement = Arrangement.spacedBy(16.dp)) {
        SectionHeader(
            title = "TỪ BẠN VỪA THÊM",
            subtitle = "${state.totalAddedWords} từ vựng",
            actionText = "Xem tất cả",
            onActionClick = onViewAllWordsClick
        )

        // Grid 2 cột
        Column(verticalArrangement = Arrangement.spacedBy(8.dp)) {
            val chunkedWords = state.recentWords.take(6).chunked(2)
            if (chunkedWords.isEmpty()) {
                EmptyStateView(
                    title = "Chưa có từ nào",
                    description = "Thêm các từ vựng mới để bắt đầu học.",
                    buttonText = "Thêm từ",
                    onButtonClick = onAddWordClick
                )
            } else {
                chunkedWords.forEach { rowItems ->
                    Row(
                        horizontalArrangement = Arrangement.spacedBy(8.dp),
                        modifier = Modifier.fillMaxWidth()
                    ) {
                        rowItems.forEach { word ->
                            WordChip(
                                englishWord = word.word,
                                vietnameseMeaning = word.meaning,
                                onClick = { onWordClick(word.id) },
                                onSpeakerClick = { onSpeakerClick(word.id) },
                                modifier = Modifier.weight(1f)
                            )
                        }
                        // Nếu hàng lẻ 1 item thì chèn spacer cho cân bằng
                        if (rowItems.size == 1) {
                            Spacer(modifier = Modifier.weight(1f))
                        }
                    }
                }
                
                Spacer(modifier = Modifier.height(4.dp))
                
                OutlinedWordNestButton(
                    text = "+ Thêm từ",
                    onClick = onAddWordClick,
                    modifier = Modifier.fillMaxWidth()
                )
            }
        }
    }
}

@Composable
private fun HomeShortcutsSection(
    state: HomeUiState,
    onSessionClick: (String) -> Unit,
    onToeicReadingClick: () -> Unit,
    onToeicListeningClick: () -> Unit
) {
    Column(verticalArrangement = Arrangement.spacedBy(16.dp)) {
        SectionHeader(
            title = "LUYỆN THI TOEIC"
        )
        
        state.activeSessionSpotlight?.let { session ->
            ShortcutCard(
                title = session.title,
                subtitle = "Tiếp tục bài làm dở",
                isSpotlight = true,
                progress = session.progress,
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
                onClick = { onSessionClick(session.sessionId) }
            )
        }

        ShortcutCard(
            title = "Luyện đề Reading",
            subtitle = "Part 5, 6, 7",
            icon = {
                Icon(Icons.AutoMirrored.Filled.MenuBook, contentDescription = null, tint = WordNestTheme.colors.forest900)
            },
            onClick = onToeicReadingClick
        )

        ShortcutCard(
            title = "Luyện đề Listening",
            subtitle = "Part 1–4, có audio",
            icon = {
                Icon(Icons.Default.Headphones, contentDescription = null, tint = WordNestTheme.colors.forest900)
            },
            onClick = onToeicListeningClick
        )
    }
}

@Composable
private fun HomeProgressSection(
    state: HomeUiState,
    onAdjustGoalClick: () -> Unit,
    onViewHistoryClick: () -> Unit
) {
    Column(verticalArrangement = Arrangement.spacedBy(16.dp)) {
        SectionHeader(
            title = "TIẾN ĐỘ HỌC",
            actionText = "Mục tiêu",
            onActionClick = onAdjustGoalClick
        )

        // Today Progress Card
        Surface(
            shape = WordNestTheme.shapes.medium, // 20.dp
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
                        text = "Hôm nay",
                        style = WordNestTheme.typography.labelMedium,
                        color = WordNestTheme.colors.slate500
                    )
                    Text(
                        text = "${state.todayStudyMinutes} / ${state.dailyGoalMinutes} phút",
                        style = WordNestTheme.typography.titleMedium,
                        color = WordNestTheme.colors.ink900
                    )
                }
                Spacer(modifier = Modifier.height(12.dp))
                WordNestProgressBar(
                    progress = if (state.dailyGoalMinutes > 0) state.todayStudyMinutes.toFloat() / state.dailyGoalMinutes else 0f,
                    height = 8.dp
                )
            }
        }

        // Stats Row
        Row(
            modifier = Modifier.fillMaxWidth(),
            horizontalArrangement = Arrangement.spacedBy(16.dp)
        ) {
            StatCard(
                number = "${state.currentStreakDays}",
                label = "Streak hiện tại",
                icon = { Text("🔥", fontSize = 20.sp) },
                backgroundColor = WordNestTheme.colors.orangeTint,
                modifier = Modifier.weight(1f)
            )
            
            StatCard(
                number = "${state.totalSuccessDays}",
                label = "Ngày thành công",
                icon = { Text("🏆", fontSize = 20.sp) },
                backgroundColor = WordNestTheme.colors.pinkTint,
                modifier = Modifier.weight(1f)
            )
        }
        
        Box(modifier = Modifier.fillMaxWidth(), contentAlignment = Alignment.Center) {
            TextLinkButton(
                text = "Xem lịch sử học",
                onClick = onViewHistoryClick
            )
        }
    }
}

@Composable
fun HomeSkeleton(modifier: Modifier = Modifier) {
    Column(
        modifier = modifier
            .fillMaxSize()
            .padding(16.dp),
        verticalArrangement = Arrangement.spacedBy(24.dp)
    ) {
        // Hero Skeleton
        ShimmerSkeletonBox(
            modifier = Modifier.fillMaxWidth().height(200.dp),
            cornerRadius = 24.dp
        )
        
        // Recent words Skeleton
        Column(verticalArrangement = Arrangement.spacedBy(16.dp)) {
            ShimmerSkeletonBox(modifier = Modifier.width(150.dp).height(24.dp))
            Row(modifier = Modifier.fillMaxWidth(), horizontalArrangement = Arrangement.spacedBy(8.dp)) {
                ShimmerSkeletonBox(modifier = Modifier.weight(1f).height(60.dp))
                ShimmerSkeletonBox(modifier = Modifier.weight(1f).height(60.dp))
            }
            Row(modifier = Modifier.fillMaxWidth(), horizontalArrangement = Arrangement.spacedBy(8.dp)) {
                ShimmerSkeletonBox(modifier = Modifier.weight(1f).height(60.dp))
                ShimmerSkeletonBox(modifier = Modifier.weight(1f).height(60.dp))
            }
        }
        
        // Shortcuts Skeleton
        Column(verticalArrangement = Arrangement.spacedBy(16.dp)) {
            ShimmerSkeletonBox(modifier = Modifier.width(150.dp).height(24.dp))
            ShimmerSkeletonBox(modifier = Modifier.fillMaxWidth().height(80.dp), cornerRadius = 20.dp)
            ShimmerSkeletonBox(modifier = Modifier.fillMaxWidth().height(80.dp), cornerRadius = 20.dp)
        }
    }
}


// --- Previews ---

private val sampleRecentWords = listOf(
    WordPreviewUiModel("1", "Meticulous", "Tỉ mỉ, quá kỹ càng"),
    WordPreviewUiModel("2", "Serendipity", "Sự tình cờ may mắn"),
    WordPreviewUiModel("3", "Ephemeral", "Chóng tàn, phù du"),
    WordPreviewUiModel("4", "Lucid", "Sáng sủa, rõ ràng")
)

@Preview(showBackground = true, name = "1. Có từ cần học")
@Composable
fun HomeScreenPreviewPending() {
    WordNestTheme {
        HomeScreen(
            state = HomeUiState(
                dueWordsCount = 20,
                newWordsCount = 10,
                reviewWordsCount = 10,
                isTodayCompleted = false,
                hasAnyDeck = true,
                recentWords = sampleRecentWords,
                totalAddedWords = 145,
                todayStudyMinutes = 5,
                dailyGoalMinutes = 15,
                currentStreakDays = 12,
                totalSuccessDays = 45,
                activeSessionSpotlight = ActiveSessionUiModel("s1", "Test 3: Reading Part 7", 0.45f)
            ),
            onStudyClick = {},
            onCreateDeckClick = {},
            onWordClick = {},
            onSpeakerClick = {},
            onViewAllWordsClick = {},
            onAddWordClick = {},
            onSessionClick = {},
            onToeicReadingClick = {},
            onToeicListeningClick = {},
            onAdjustGoalClick = {},
            onViewHistoryClick = {}
        )
    }
}

@Preview(showBackground = true, name = "2. Đã hoàn thành hôm nay")
@Composable
fun HomeScreenPreviewCompleted() {
    WordNestTheme {
        HomeScreen(
            state = HomeUiState(
                dueWordsCount = 0,
                newWordsCount = 0,
                reviewWordsCount = 0,
                isTodayCompleted = true,
                hasAnyDeck = true,
                recentWords = sampleRecentWords,
                totalAddedWords = 145,
                todayStudyMinutes = 18,
                dailyGoalMinutes = 15,
                currentStreakDays = 13,
                totalSuccessDays = 46,
                activeSessionSpotlight = null
            ),
            onStudyClick = {},
            onCreateDeckClick = {},
            onWordClick = {},
            onSpeakerClick = {},
            onViewAllWordsClick = {},
            onAddWordClick = {},
            onSessionClick = {},
            onToeicReadingClick = {},
            onToeicListeningClick = {},
            onAdjustGoalClick = {},
            onViewHistoryClick = {}
        )
    }
}

@Preview(showBackground = true, name = "3. Đang tải (Skeleton)")
@Composable
fun HomeScreenPreviewLoading() {
    WordNestTheme {
        HomeScreen(
            state = HomeUiState(isLoading = true),
            onStudyClick = {},
            onCreateDeckClick = {},
            onWordClick = {},
            onSpeakerClick = {},
            onViewAllWordsClick = {},
            onAddWordClick = {},
            onSessionClick = {},
            onToeicReadingClick = {},
            onToeicListeningClick = {},
            onAdjustGoalClick = {},
            onViewHistoryClick = {}
        )
    }
}
