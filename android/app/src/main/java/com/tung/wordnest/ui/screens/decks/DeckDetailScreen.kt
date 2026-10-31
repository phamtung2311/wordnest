package com.tung.wordnest.ui.screens.decks

import androidx.compose.foundation.BorderStroke
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.automirrored.filled.ArrowBack
import androidx.compose.material.icons.automirrored.filled.VolumeUp
import androidx.compose.material.icons.filled.Add
import androidx.compose.material.icons.filled.MoreVert
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import com.tung.wordnest.ui.components.core.OutlinedWordNestButton
import com.tung.wordnest.ui.components.core.PrimaryButton
import com.tung.wordnest.ui.theme.WordNestTheme

data class WordItemUiModel(
    val id: String,
    val term: String,
    val ipa: String?,
    val partOfSpeech: String?,
    val meaning: String,
    val status: WordLearningStatus
)

enum class WordLearningStatus {
    NEW, LEARNING, MASTERED
}

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun DeckDetailScreen(
    deckName: String,
    totalWords: Int,
    newWords: Int,
    learningWords: Int,
    masteredWords: Int,
    words: List<WordItemUiModel>,
    onBackClick: () -> Unit,
    onMenuClick: () -> Unit,
    onStudyClick: () -> Unit,
    onReviewClick: () -> Unit,
    onWordClick: (String) -> Unit,
    onSpeakerClick: (String) -> Unit,
    onAddWordClick: () -> Unit,
    modifier: Modifier = Modifier
) {
    Scaffold(
        topBar = {
            TopAppBar(
                title = {
                    Text(
                        text = deckName,
                        style = WordNestTheme.typography.titleMedium,
                        maxLines = 1,
                        overflow = TextOverflow.Ellipsis
                    )
                },
                navigationIcon = {
                    IconButton(onClick = onBackClick) {
                        Icon(Icons.AutoMirrored.Filled.ArrowBack, contentDescription = "Back")
                    }
                },
                actions = {
                    IconButton(onClick = onMenuClick) {
                        Icon(Icons.Default.MoreVert, contentDescription = "More options")
                    }
                },
                colors = TopAppBarDefaults.topAppBarColors(
                    containerColor = WordNestTheme.colors.surface,
                    titleContentColor = WordNestTheme.colors.primaryText,
                    navigationIconContentColor = WordNestTheme.colors.primaryText,
                    actionIconContentColor = WordNestTheme.colors.slate500
                )
            )
        },
        floatingActionButton = {
            FloatingActionButton(
                onClick = onAddWordClick,
                containerColor = WordNestTheme.colors.forest900,
                contentColor = WordNestTheme.colors.amber500,
                shape = WordNestTheme.shapes.medium
            ) {
                Icon(Icons.Default.Add, contentDescription = "Thêm từ")
            }
        },
        containerColor = WordNestTheme.colors.background,
        modifier = modifier.fillMaxSize()
    ) { innerPadding ->
        LazyColumn(
            modifier = Modifier
                .fillMaxSize()
                .padding(innerPadding),
            contentPadding = PaddingValues(bottom = 100.dp)
        ) {
            // Stats Header
            item {
                Column(modifier = Modifier.padding(16.dp)) {
                    DeckStatsGrid(
                        totalWords = totalWords,
                        newWords = newWords,
                        learningWords = learningWords,
                        masteredWords = masteredWords
                    )

                    Spacer(modifier = Modifier.height(24.dp))

                    Row(
                        modifier = Modifier.fillMaxWidth(),
                        horizontalArrangement = Arrangement.spacedBy(12.dp)
                    ) {
                        PrimaryButton(
                            text = "Học bộ này",
                            onClick = onStudyClick,
                            modifier = Modifier.weight(1f)
                        )
                        OutlinedWordNestButton(
                            text = "Ôn tập",
                            onClick = onReviewClick,
                            modifier = Modifier.weight(1f)
                        )
                    }
                    
                    Spacer(modifier = Modifier.height(24.dp))
                    HorizontalDivider(color = WordNestTheme.colors.line200)
                }
            }

            // Word List
            items(words) { word ->
                WordListItem(
                    word = word,
                    onClick = { onWordClick(word.id) },
                    onSpeakerClick = { onSpeakerClick(word.id) }
                )
                HorizontalDivider(
                    color = WordNestTheme.colors.line200,
                    modifier = Modifier.padding(start = 16.dp)
                )
            }
        }
    }
}

@Composable
private fun DeckStatsGrid(
    totalWords: Int,
    newWords: Int,
    learningWords: Int,
    masteredWords: Int
) {
    Surface(
        color = WordNestTheme.colors.surface,
        shape = WordNestTheme.shapes.medium, // 20.dp
        border = BorderStroke(1.dp, WordNestTheme.colors.line200),
        modifier = Modifier.fillMaxWidth()
    ) {
        Column(modifier = Modifier.padding(16.dp)) {
            Row(modifier = Modifier.fillMaxWidth()) {
                StatItem(label = "Tổng số từ", value = totalWords.toString(), modifier = Modifier.weight(1f))
                StatItem(
                    label = "Từ mới",
                    value = newWords.toString(),
                    color = WordNestTheme.colors.coral500,
                    modifier = Modifier.weight(1f)
                )
            }
            Spacer(modifier = Modifier.height(16.dp))
            Row(modifier = Modifier.fillMaxWidth()) {
                StatItem(
                    label = "Đang học",
                    value = learningWords.toString(),
                    color = WordNestTheme.colors.amber500,
                    modifier = Modifier.weight(1f)
                )
                StatItem(
                    label = "Đã thuộc",
                    value = masteredWords.toString(),
                    color = WordNestTheme.colors.mint500,
                    modifier = Modifier.weight(1f)
                )
            }
        }
    }
}

@Composable
private fun StatItem(
    label: String,
    value: String,
    modifier: Modifier = Modifier,
    color: Color = WordNestTheme.colors.ink900
) {
    Column(modifier = modifier) {
        Text(
            text = label,
            style = WordNestTheme.typography.labelMedium,
            color = WordNestTheme.colors.slate500
        )
        Spacer(modifier = Modifier.height(4.dp))
        Text(
            text = value,
            style = WordNestTheme.typography.headlineMedium,
            color = color
        )
    }
}

@Composable
private fun WordListItem(
    word: WordItemUiModel,
    onClick: () -> Unit,
    onSpeakerClick: () -> Unit
) {
    Row(
        modifier = Modifier
            .fillMaxWidth()
            .clickable(onClick = onClick)
            .padding(vertical = 12.dp, horizontal = 16.dp),
        verticalAlignment = Alignment.CenterVertically
    ) {
        // Status Dot
        val statusColor = when (word.status) {
            WordLearningStatus.NEW -> WordNestTheme.colors.coral500
            WordLearningStatus.LEARNING -> WordNestTheme.colors.amber500
            WordLearningStatus.MASTERED -> WordNestTheme.colors.mint500
        }
        Box(
            modifier = Modifier
                .size(8.dp)
                .clip(CircleShape)
                .background(statusColor)
        )
        
        Spacer(modifier = Modifier.width(12.dp))

        // Content
        Column(modifier = Modifier.weight(1f)) {
            Row(verticalAlignment = Alignment.Bottom) {
                Text(
                    text = word.term,
                    style = WordNestTheme.typography.titleMedium,
                    color = WordNestTheme.colors.primaryText,
                    fontWeight = FontWeight.Bold
                )
                
                val metaData = buildString {
                    if (!word.ipa.isNullOrEmpty()) append(word.ipa)
                    if (!word.ipa.isNullOrEmpty() && !word.partOfSpeech.isNullOrEmpty()) append(" • ")
                    if (!word.partOfSpeech.isNullOrEmpty()) append(word.partOfSpeech)
                }
                
                if (metaData.isNotEmpty()) {
                    Spacer(modifier = Modifier.width(8.dp))
                    Text(
                        text = metaData,
                        style = WordNestTheme.typography.labelMedium,
                        color = WordNestTheme.colors.slate500,
                        modifier = Modifier.padding(bottom = 2.dp)
                    )
                }
            }
            Spacer(modifier = Modifier.height(2.dp))
            Text(
                text = word.meaning,
                style = WordNestTheme.typography.bodyMedium,
                color = WordNestTheme.colors.slate500,
                maxLines = 2,
                overflow = TextOverflow.Ellipsis
            )
        }

        Spacer(modifier = Modifier.width(8.dp))

        // Speaker Button
        IconButton(
            onClick = onSpeakerClick,
            modifier = Modifier.size(36.dp)
        ) {
            Icon(
                imageVector = Icons.AutoMirrored.Filled.VolumeUp,
                contentDescription = "Phát âm",
                tint = WordNestTheme.colors.forest700,
                modifier = Modifier.size(22.dp)
            )
        }
    }
}

@Preview(showBackground = true, name = "Chi tiết Bộ từ")
@Composable
fun DeckDetailScreenPreview() {
    WordNestTheme {
        val sampleWords = listOf(
            WordItemUiModel("1", "Meticulous", "/məˈtɪk.jə.ləs/", "adj", "Tỉ mỉ, quá kỹ càng về chi tiết", WordLearningStatus.MASTERED),
            WordItemUiModel("2", "Serendipity", "/ˌser.ənˈdɪp.ə.ti/", "n", "Sự tình cờ may mắn", WordLearningStatus.LEARNING),
            WordItemUiModel("3", "Ephemeral", "/ɪˈfem.ər.əl/", "adj", "Chóng tàn, phù du", WordLearningStatus.NEW),
            WordItemUiModel("4", "Lucid", "/ˈluː.sɪd/", "adj", "Sáng sủa, rõ ràng, dễ hiểu", WordLearningStatus.LEARNING)
        )
        DeckDetailScreen(
            deckName = "IELTS Advanced Vocabulary",
            totalWords = 150,
            newWords = 20,
            learningWords = 45,
            masteredWords = 85,
            words = sampleWords,
            onBackClick = {},
            onMenuClick = {},
            onStudyClick = {},
            onReviewClick = {},
            onWordClick = {},
            onSpeakerClick = {},
            onAddWordClick = {}
        )
    }
}
