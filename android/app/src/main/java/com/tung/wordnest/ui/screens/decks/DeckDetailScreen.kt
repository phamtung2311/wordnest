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
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import com.tung.wordnest.WordNestApplication
import com.tung.wordnest.data.model.WordLevel
import com.tung.wordnest.ui.components.core.OutlinedWordNestButton
import com.tung.wordnest.ui.components.core.PrimaryButton
import com.tung.wordnest.ui.components.core.ShimmerSkeletonBox
import com.tung.wordnest.ui.theme.WordNestTheme
import com.tung.wordnest.util.TtsProvider
import kotlinx.coroutines.launch

data class WordItemUiModel(
    val id: String,
    val term: String,
    val ipa: String?,
    val partOfSpeech: String?,
    val meaning: String,
    val example: String? = null,
    val status: WordLearningStatus
)

enum class WordLearningStatus {
    NEW, LEARNING, MASTERED
}

/**
 * Host màn hình chi tiết bộ từ — nạp dữ liệu THẬT từ Room + đồng bộ Firestore.
 *
 * - Danh sách từ: `repository.getWordsByDeckFlow(deckId)` (stream, tự refresh).
 * - Trạng thái từ → `WordLearningStatus` (NEW/LEARNING/MASTERED) theo `level`.
 * - Nút loa → TtsProvider; "Ôn tập bộ này" → điều hướng study(deckId).
 * - Menu 3 chấm bộ từ (Sửa/Reset/Xóa) & menu 3 chấm từng từ (Sửa/Xóa):
 *   mở sheet qua callback `onOpenSheet` (host ở NavGraph) + sync Firestore.
 */
@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun DeckDetailScreenHost(
    app: WordNestApplication,
    deckId: Long,
    onBack: () -> Unit,
    onStudy: (deckId: Long) -> Unit,
    onOpenSheet: (DeckSheet) -> Unit,
    modifier: Modifier = Modifier
) {
    val scope = remember { kotlinx.coroutines.CoroutineScope(kotlinx.coroutines.SupervisorJob() + kotlinx.coroutines.Dispatchers.Main) }
    val uid = remember { com.google.firebase.auth.FirebaseAuth.getInstance().currentUser?.uid }

    val deck by app.repository.deckById(deckId)
        .collectAsState(initial = null)
    val words by app.repository.getWordsByDeckFlow(deckId)
        .collectAsState(initial = emptyList())

    val statusOf: (WordLevel) -> WordLearningStatus = {
        when (it) {
            WordLevel.NEW -> WordLearningStatus.NEW
            WordLevel.LEARNING -> WordLearningStatus.LEARNING
            WordLevel.KNOWN -> WordLearningStatus.MASTERED
        }
    }
    val uiWords = words.map {
        WordItemUiModel(
            id = it.id.toString(),
            term = it.term,
            ipa = it.phonetic,
            partOfSpeech = it.partOfSpeech,
            meaning = it.meaning,
            example = it.example,
            status = statusOf(it.level)
        )
    }
    val totalWords = uiWords.size
    val newWords = uiWords.count { it.status == WordLearningStatus.NEW }
    val learningWords = uiWords.count { it.status == WordLearningStatus.LEARNING }
    val masteredWords = uiWords.count { it.status == WordLearningStatus.MASTERED }

    var deckToDelete by remember { mutableStateOf(false) }

    DeckDetailScreen(
        deckName = deck?.name ?: "Bộ từ",
        totalWords = totalWords,
        newWords = newWords,
        learningWords = learningWords,
        masteredWords = masteredWords,
        words = uiWords,
        isLoading = deck == null,
        onBackClick = onBack,
        onDeckMenuEdit = {
            deck?.let { onOpenSheet(DeckSheet.DeckEditor(initial = it)) }
        },
        onDeckMenuReset = {
            scope.launch {
                val u = uid
                app.syncRepository.resetDeckProgressAndSync(u, deckId)
            }
        },
        onDeckMenuDelete = {
            deckToDelete = true
        },
        onStudyClick = { onStudy(deckId) },
        onReviewClick = { onStudy(deckId) },
        onWordClick = { word ->
            words.firstOrNull { it.id.toString() == word.id }
                ?.let { onOpenSheet(DeckSheet.WordDetail(word = it)) }
        },
        onWordMenuEdit = { word ->
            words.firstOrNull { it.id.toString() == word.id }
                ?.let { onOpenSheet(DeckSheet.WordEditor(deckId = deckId, initial = it)) }
        },
        onWordMenuDelete = { word ->
            words.firstOrNull { it.id.toString() == word.id }?.let { entity ->
                scope.launch {
                    val u = uid
                    app.syncRepository.deleteWordAndSync(u, entity.id, entity.deckId)
                }
            }
        },
        onSpeakerClick = { term -> TtsProvider.speak(term) },
        onAddWordClick = { onOpenSheet(DeckSheet.WordEditor(deckId = deckId, initial = null)) },
        modifier = modifier
    )

    if (deckToDelete) {
        AlertDialog(
            onDismissRequest = { deckToDelete = false },
            title = { Text("Xóa bộ từ?", style = WordNestTheme.typography.headlineMedium) },
            text = {
                Text(
                    "Bạn có chắc chắn muốn xóa '${deck?.name}' không? Toàn bộ từ vựng và tiến độ sẽ bị mất.",
                    style = WordNestTheme.typography.bodyMedium,
                    color = WordNestTheme.colors.slate500
                )
            },
            confirmButton = {
                Button(
                    onClick = {
                        deckToDelete = false
                        scope.launch {
                            val u = uid
                            app.syncRepository.deleteDeckAndSync(u, deckId)
                        }
                        onBack()
                    },
                    colors = ButtonDefaults.buttonColors(containerColor = WordNestTheme.colors.error600)
                ) { Text("Xóa", style = WordNestTheme.typography.labelMedium) }
            },
            dismissButton = {
                TextButton(onClick = { deckToDelete = false }) {
                    Text("Hủy", style = WordNestTheme.typography.labelMedium, color = WordNestTheme.colors.ink900)
                }
            },
            containerColor = WordNestTheme.colors.surface
        )
    }
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
    isLoading: Boolean = false,
    onBackClick: () -> Unit,
    onDeckMenuEdit: () -> Unit,
    onDeckMenuReset: () -> Unit,
    onDeckMenuDelete: () -> Unit,
    onStudyClick: () -> Unit,
    onReviewClick: () -> Unit,
    onWordClick: (WordItemUiModel) -> Unit,
    onWordMenuEdit: (WordItemUiModel) -> Unit,
    onWordMenuDelete: (WordItemUiModel) -> Unit,
    onSpeakerClick: (String) -> Unit,
    onAddWordClick: () -> Unit,
    modifier: Modifier = Modifier
) {
    // Menu 3 chấm bộ từ (anchor ở TopBar)
    var deckMenuOpen by remember { mutableStateOf(false) }
    // Menu 3 chấm từng từ (anchor theo id)
    var openWordMenuId by remember { mutableStateOf<String?>(null) }

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
                    Box {
                        IconButton(onClick = { deckMenuOpen = true }) {
                            Icon(
                                Icons.Default.MoreVert,
                                contentDescription = "Menu bộ từ",
                                tint = WordNestTheme.colors.slate500
                            )
                        }
                        DropdownMenu(
                            expanded = deckMenuOpen,
                            onDismissRequest = { deckMenuOpen = false }
                        ) {
                            DropdownMenuItem(
                                text = { Text("Sửa bộ từ", style = WordNestTheme.typography.bodyMedium) },
                                onClick = { deckMenuOpen = false; onDeckMenuEdit() }
                            )
                            DropdownMenuItem(
                                text = { Text("Reset tiến độ", style = WordNestTheme.typography.bodyMedium) },
                                onClick = { deckMenuOpen = false; onDeckMenuReset() }
                            )
                            HorizontalDivider(color = WordNestTheme.colors.line200)
                            DropdownMenuItem(
                                text = {
                                    Text(
                                        "Xóa bộ từ",
                                        style = WordNestTheme.typography.bodyMedium,
                                        color = WordNestTheme.colors.error600
                                    )
                                },
                                onClick = { deckMenuOpen = false; onDeckMenuDelete() }
                            )
                        }
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
                    if (isLoading) {
                        ShimmerSkeletonBox(modifier = Modifier.fillMaxWidth().height(96.dp))
                    } else {
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
                                text = "Ôn tập bộ này",
                                onClick = onStudyClick,
                                modifier = Modifier.weight(1f)
                            )
                            OutlinedWordNestButton(
                                text = "Xem & ôn",
                                onClick = onReviewClick,
                                modifier = Modifier.weight(1f)
                            )
                        }

                        Spacer(modifier = Modifier.height(24.dp))
                        HorizontalDivider(color = WordNestTheme.colors.line200)
                    }
                }
            }

            if (words.isEmpty() && !isLoading) {
                item {
                    Box(
                        modifier = Modifier
                            .fillMaxWidth()
                            .padding(horizontal = 16.dp, vertical = 32.dp),
                        contentAlignment = Alignment.Center
                    ) {
                        Column(horizontalAlignment = Alignment.CenterHorizontally) {
                            Text(
                                "Chưa có từ nào trong bộ này",
                                style = WordNestTheme.typography.titleMedium,
                                color = WordNestTheme.colors.slate500
                            )
                            Spacer(modifier = Modifier.height(8.dp))
                            Text(
                                "Bấm nút + để thêm từ đầu tiên (có hỗ trợ Tự điền ✨).",
                                style = WordNestTheme.typography.bodyMedium,
                                color = WordNestTheme.colors.slate400
                            )
                        }
                    }
                }
            }

            // Word List
            items(words) { word ->
                val menuOpen = openWordMenuId == word.id
                Row(
                    modifier = Modifier
                        .fillMaxWidth()
                        .padding(vertical = 4.dp),
                    verticalAlignment = Alignment.CenterVertically
                ) {
                    WordListItem(
                        word = word,
                        onClick = { onWordClick(word) },
                        onSpeakerClick = { onSpeakerClick(word.term) },
                        modifier = Modifier.weight(1f)
                    )
                    Box {
                        IconButton(
                            onClick = { openWordMenuId = word.id },
                            modifier = Modifier.size(36.dp)
                        ) {
                            Icon(
                                Icons.Default.MoreVert,
                                contentDescription = "Menu từ",
                                tint = WordNestTheme.colors.slate500,
                                modifier = Modifier.size(20.dp)
                            )
                        }
                        DropdownMenu(
                            expanded = menuOpen,
                            onDismissRequest = { openWordMenuId = null }
                        ) {
                            DropdownMenuItem(
                                text = { Text("Sửa từ", style = WordNestTheme.typography.bodyMedium) },
                                onClick = {
                                    openWordMenuId = null
                                    onWordMenuEdit(word)
                                }
                            )
                            DropdownMenuItem(
                                text = {
                                    Text(
                                        "Xóa từ",
                                        style = WordNestTheme.typography.bodyMedium,
                                        color = WordNestTheme.colors.error600
                                    )
                                },
                                onClick = {
                                    openWordMenuId = null
                                    onWordMenuDelete(word)
                                }
                            )
                        }
                    }
                }
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
        shape = WordNestTheme.shapes.medium,
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
    onSpeakerClick: () -> Unit,
    modifier: Modifier = Modifier
) {
    Row(
        modifier = modifier
            .fillMaxWidth()
            .clickable(onClick = onClick)
            .padding(vertical = 12.dp, horizontal = 16.dp),
        verticalAlignment = Alignment.CenterVertically
    ) {
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
                text = word.example?.takeIf { it.isNotBlank() } ?: word.meaning,
                style = WordNestTheme.typography.bodyMedium,
                color = WordNestTheme.colors.slate500,
                maxLines = 2,
                overflow = TextOverflow.Ellipsis
            )
        }

        Spacer(modifier = Modifier.width(4.dp))

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
            WordItemUiModel("1", "Meticulous", "/məˈtɪk.jə.ləs/", "adj", "Tỉ mỉ, quá kỹ càng về chi tiết", null, WordLearningStatus.MASTERED),
            WordItemUiModel("2", "Serendipity", "/ˌser.ənˈdɪp.ə.ti/", "n", "Sự tình cờ may mắn", null, WordLearningStatus.LEARNING),
            WordItemUiModel("3", "Ephemeral", "/ɪˈfem.ər.əl/", "adj", "Chóng tàn, phù du", null, WordLearningStatus.NEW),
            WordItemUiModel("4", "Lucid", "/ˈluː.sɪd/", "adj", "Sáng sủa, rõ ràng, dễ hiểu", null, WordLearningStatus.LEARNING)
        )
        DeckDetailScreen(
            deckName = "IELTS Advanced Vocabulary",
            totalWords = 150,
            newWords = 20,
            learningWords = 45,
            masteredWords = 85,
            words = sampleWords,
            onBackClick = {},
            onDeckMenuEdit = {},
            onDeckMenuReset = {},
            onDeckMenuDelete = {},
            onStudyClick = {},
            onReviewClick = {},
            onWordClick = {},
            onWordMenuEdit = {},
            onWordMenuDelete = {},
            onSpeakerClick = {},
            onAddWordClick = {}
        )
    }
}
