package com.tung.wordnest.ui.screens.life

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.LazyRow
import androidx.compose.foundation.lazy.items
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import com.tung.wordnest.ui.components.core.DeckCard
import com.tung.wordnest.ui.components.core.SectionHeader
import com.tung.wordnest.ui.components.core.WordNestFilterChip
import com.tung.wordnest.ui.theme.WordNestTheme

data class LifeTopicUiModel(
    val id: String,
    val name: String,
    val totalItems: Int,
    val reviewItems: Int,
    val progress: Float,
    val emoji: String,
    val color: Color
)

@Composable
fun LifeTopicsScreen(
    topics: List<LifeTopicUiModel>,
    onTopicClick: (String) -> Unit,
    modifier: Modifier = Modifier
) {
    var selectedFilter by remember { mutableStateOf("Tất cả") }
    val filters = listOf("Tất cả", "Giao tiếp hàng ngày", "Du lịch", "Công sở", "Mua sắm", "Ăn uống")

    LazyColumn(
        modifier = modifier
            .fillMaxSize()
            .background(WordNestTheme.colors.background),
        contentPadding = PaddingValues(start = 16.dp, end = 16.dp, top = 16.dp, bottom = 100.dp),
        verticalArrangement = Arrangement.spacedBy(24.dp)
    ) {
        // 1. Header
        item {
            SectionHeader(
                title = "Tiếng Anh Đời sống",
                subtitle = "Khám phá các từ vựng và mẫu câu giao tiếp thực tế"
            )
        }

        // 2. Filters
        item {
            LazyRow(horizontalArrangement = Arrangement.spacedBy(8.dp)) {
                items(filters) { filter ->
                    WordNestFilterChip(
                        text = filter,
                        selected = filter == selectedFilter,
                        onClick = { selectedFilter = filter }
                    )
                }
            }
        }

        // 3. Topics List
        items(topics) { topic ->
            DeckCard(
                deckName = topic.name,
                totalWords = topic.totalItems,
                wordsToReview = topic.reviewItems,
                progress = topic.progress,
                emoji = topic.emoji,
                emojiBackgroundColor = topic.color,
                onClick = { onTopicClick(topic.id) },
                onMenuClick = { /* Maybe show sheet to download/add to my decks */ }
            )
        }
    }
}

@Preview(showBackground = true)
@Composable
fun LifeTopicsScreenPreview() {
    WordNestTheme {
        val sampleTopics = listOf(
            LifeTopicUiModel("1", "Giao tiếp tại Sân bay", 45, 0, 0.2f, "✈️", WordNestTheme.colors.blue600.copy(alpha = 0.2f)),
            LifeTopicUiModel("2", "Gọi món ở Nhà hàng", 30, 5, 0.8f, "🍔", WordNestTheme.colors.coralTint),
            LifeTopicUiModel("3", "Từ vựng Công sở cơ bản", 100, 12, 0.4f, "💼", WordNestTheme.colors.orangeTint)
        )
        LifeTopicsScreen(
            topics = sampleTopics,
            onTopicClick = {}
        )
    }
}
