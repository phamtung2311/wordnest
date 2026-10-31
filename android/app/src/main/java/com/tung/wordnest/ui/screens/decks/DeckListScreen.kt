package com.tung.wordnest.ui.screens.decks

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyRow
import androidx.compose.foundation.lazy.grid.GridCells
import androidx.compose.foundation.lazy.grid.LazyVerticalGrid
import androidx.compose.foundation.lazy.grid.items
import androidx.compose.foundation.lazy.items
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Add
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Modifier
import androidx.compose.ui.Alignment
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import com.tung.wordnest.ui.components.core.*
import com.tung.wordnest.ui.theme.WordNestTheme

data class DeckUiModel(
    val id: String,
    val name: String,
    val totalWords: Int,
    val reviewWords: Int,
    val progress: Float,
    val emoji: String,
    val color: Color
)

@Composable
fun DeckListScreen(
    decks: List<DeckUiModel>,
    onCreateDeckClick: () -> Unit,
    onDeckClick: (String) -> Unit,
    onEditDeck: (String) -> Unit,
    onAddWordToDeck: (String) -> Unit,
    onResetProgress: (String) -> Unit,
    onDeleteDeck: (String) -> Unit,
    modifier: Modifier = Modifier
) {
    var searchQuery by remember { mutableStateOf("") }
    var selectedFilter by remember { mutableStateOf("Tất cả") }
    val filters = listOf("Tất cả", "Cần ôn", "Của tôi", "TOEIC", "Chủ đề")

    // Trạng thái cho Dropdown Menu & Dialog Xóa
    var expandedDeckId by remember { mutableStateOf<String?>(null) }
    var deckToDelete by remember { mutableStateOf<DeckUiModel?>(null) }

    Column(
        modifier = modifier
            .fillMaxSize()
            .background(WordNestTheme.colors.background)
    ) {
        // Top Section: Search & Filters
        Column(
            modifier = Modifier
                .fillMaxWidth()
                .background(WordNestTheme.colors.surface)
                .padding(top = 16.dp, bottom = 12.dp)
        ) {
            WordNestSearchField(
                query = searchQuery,
                onQueryChange = { searchQuery = it },
                placeholder = "Tìm kiếm bộ từ...",
                modifier = Modifier.padding(horizontal = 16.dp)
            )

            Spacer(modifier = Modifier.height(16.dp))

            LazyRow(
                contentPadding = PaddingValues(horizontal = 16.dp),
                horizontalArrangement = Arrangement.spacedBy(8.dp)
            ) {
                items(filters) { filter ->
                    WordNestFilterChip(
                        text = filter,
                        selected = filter == selectedFilter,
                        onClick = { selectedFilter = filter }
                    )
                }
            }
        }

        HorizontalDivider(color = WordNestTheme.colors.line200)

        // Main Content
        BoxWithConstraints(modifier = Modifier.weight(1f)) {
            val columns = if (maxWidth >= 600.dp) 2 else 1

            if (decks.isEmpty()) {
                EmptyStateView(
                    title = "Chưa có bộ từ nào",
                    description = "Tạo bộ từ đầu tiên của bạn để bắt đầu lưu trữ và ôn tập từ vựng mỗi ngày.",
                    buttonText = "Tạo bộ từ đầu tiên",
                    onButtonClick = onCreateDeckClick
                )
            } else {
                LazyVerticalGrid(
                    columns = GridCells.Fixed(columns),
                    contentPadding = PaddingValues(start = 16.dp, end = 16.dp, top = 16.dp, bottom = 100.dp),
                    horizontalArrangement = Arrangement.spacedBy(16.dp),
                    verticalArrangement = Arrangement.spacedBy(16.dp),
                    modifier = Modifier.fillMaxSize()
                ) {
                    items(decks) { deck ->
                        Box {
                            DeckCard(
                                deckName = deck.name,
                                totalWords = deck.totalWords,
                                wordsToReview = deck.reviewWords,
                                progress = deck.progress,
                                emoji = deck.emoji,
                                emojiBackgroundColor = deck.color,
                                onClick = { onDeckClick(deck.id) },
                                onMenuClick = { expandedDeckId = deck.id }
                            )

                            // Dropdown Menu cho từng Card
                            DropdownMenu(
                                expanded = expandedDeckId == deck.id,
                                onDismissRequest = { expandedDeckId = null }
                            ) {
                                DropdownMenuItem(
                                    text = { Text("Thêm từ", style = WordNestTheme.typography.bodyMedium) },
                                    onClick = {
                                        expandedDeckId = null
                                        onAddWordToDeck(deck.id)
                                    }
                                )
                                DropdownMenuItem(
                                    text = { Text("Sửa bộ", style = WordNestTheme.typography.bodyMedium) },
                                    onClick = {
                                        expandedDeckId = null
                                        onEditDeck(deck.id)
                                    }
                                )
                                DropdownMenuItem(
                                    text = { Text("Đặt lại tiến độ", style = WordNestTheme.typography.bodyMedium) },
                                    onClick = {
                                        expandedDeckId = null
                                        onResetProgress(deck.id)
                                    }
                                )
                                HorizontalDivider(color = WordNestTheme.colors.line200)
                                DropdownMenuItem(
                                    text = {
                                        Text(
                                            "Xóa bộ",
                                            style = WordNestTheme.typography.bodyMedium,
                                            color = WordNestTheme.colors.error600
                                        )
                                    },
                                    onClick = {
                                        expandedDeckId = null
                                        deckToDelete = deck
                                    }
                                )
                            }
                        }
                    }
                }
            }
        }
    }

    // Nút FAB giả lập gốc màn hình (khi dùng trong AppShell, truyền vào overrideMainFab)
    Box(modifier = Modifier.fillMaxSize(), contentAlignment = Alignment.BottomEnd) {
        FloatingActionButton(
            onClick = onCreateDeckClick,
            modifier = Modifier.padding(16.dp),
            containerColor = WordNestTheme.colors.forest900,
            contentColor = WordNestTheme.colors.amber500,
            shape = WordNestTheme.shapes.medium
        ) {
            Icon(Icons.Default.Add, contentDescription = "Tạo bộ mới")
        }
    }

    // Dialog Xác nhận xóa
    if (deckToDelete != null) {
        AlertDialog(
            onDismissRequest = { deckToDelete = null },
            title = {
                Text("Xóa bộ từ?", style = WordNestTheme.typography.headlineMedium)
            },
            text = {
                Text(
                    "Bạn có chắc chắn muốn xóa bộ từ '${deckToDelete?.name}' không? Toàn bộ từ vựng và tiến độ trong bộ này sẽ bị mất vĩnh viễn.",
                    style = WordNestTheme.typography.bodyMedium,
                    color = WordNestTheme.colors.slate500
                )
            },
            confirmButton = {
                Button(
                    onClick = {
                        deckToDelete?.id?.let { onDeleteDeck(it) }
                        deckToDelete = null
                    },
                    colors = ButtonDefaults.buttonColors(containerColor = WordNestTheme.colors.error600)
                ) {
                    Text("Xóa", style = WordNestTheme.typography.labelMedium)
                }
            },
            dismissButton = {
                TextButton(
                    onClick = { deckToDelete = null }
                ) {
                    Text("Hủy", style = WordNestTheme.typography.labelMedium, color = WordNestTheme.colors.ink900)
                }
            },
            containerColor = WordNestTheme.colors.surface
        )
    }
}

@Preview(showBackground = true, name = "Danh sách Bộ từ")
@Composable
fun DeckListScreenPreview() {
    WordNestTheme {
        val sampleDecks = listOf(
            DeckUiModel("1", "IELTS Advanced", 320, 15, 0.4f, "🚀", WordNestTheme.colors.amberTint),
            DeckUiModel("2", "Tiếng Anh Giao tiếp", 150, 0, 0.8f, "💬", WordNestTheme.colors.coralTint),
            DeckUiModel("3", "Toeic Listening", 500, 42, 0.1f, "🎧", WordNestTheme.colors.orangeTint)
        )
        DeckListScreen(
            decks = sampleDecks,
            onCreateDeckClick = {},
            onDeckClick = {},
            onEditDeck = {},
            onAddWordToDeck = {},
            onResetProgress = {},
            onDeleteDeck = {}
        )
    }
}

@Preview(showBackground = true, name = "Danh sách Bộ từ - Trống")
@Composable
fun DeckListScreenEmptyPreview() {
    WordNestTheme {
        DeckListScreen(
            decks = emptyList(),
            onCreateDeckClick = {},
            onDeckClick = {},
            onEditDeck = {},
            onAddWordToDeck = {},
            onResetProgress = {},
            onDeleteDeck = {}
        )
    }
}
