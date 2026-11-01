package com.tung.wordnest.ui.screens.decks

import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.imePadding
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.AutoAwesome
import androidx.compose.material.icons.filled.KeyboardArrowDown
import androidx.compose.material3.CircularProgressIndicator
import androidx.compose.material3.DropdownMenu
import androidx.compose.material3.DropdownMenuItem
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.Icon
import androidx.compose.material3.ModalBottomSheet
import androidx.compose.material3.OutlinedTextField
import androidx.compose.material3.Text
import androidx.compose.material3.TextButton
import androidx.compose.material3.rememberModalBottomSheetState
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import com.google.firebase.auth.FirebaseAuth
import com.tung.wordnest.WordNestApplication
import com.tung.wordnest.data.local.DeckEntity
import com.tung.wordnest.data.model.WordItem
import com.tung.wordnest.data.model.toEntity
import com.tung.wordnest.data.remote.VocabEnrichmentService
import com.tung.wordnest.ui.components.core.OutlinedWordNestButton
import com.tung.wordnest.ui.components.core.PrimaryButton
import com.tung.wordnest.ui.components.core.WordNestFilterChip
import com.tung.wordnest.ui.theme.WordNestTheme
import com.tung.wordnest.util.TtsProvider
import java.time.Instant
import java.time.ZoneId
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.SupervisorJob
import kotlinx.coroutines.launch

// ==========================================
// State các sheet cấp app (quy tắc: chỉ 1 sheet mở cùng lúc)
// ==========================================

sealed class DeckSheet {
    /** "Tạo / Sửa bộ từ" — initial == null nghĩa là tạo mới. */
    data class DeckEditor(val initial: DeckEntity?) : DeckSheet()
    /**
     * "Thêm / Sửa từ".
     * - Thêm mới (initial == null): deckId có thể null → hiện trình chọn bộ đích
     *   (cho "Thêm từ nhanh" từ Trang chủ); có deckId → thêm thẳng vào bộ đó.
     * - Sửa (initial != null): deckId bắt buộc (= initial.deckId).
     */
    data class WordEditor(val deckId: Long?, val initial: WordItem?) : DeckSheet()
    /** Xem chi tiết từ + Sửa / Xóa. */
    data class WordDetail(val word: WordItem) : DeckSheet()
}

/** Item trình chọn bộ từ đích (khi Thêm từ nhanh từ Trang chủ). */
data class DeckPickerItem(val id: Long, val name: String, val emoji: String)

/**
 * Host các ModalBottomSheet quản lý Bộ từ & Từ vựng.
 *
 * Nối form (CreateEditDeckSheetContent / AddEditWordSheetContent /
 * WordDetailSheetContent trong DeckAndWordForms.kt) với dữ liệu THẬT:
 * Room (WordRepository) + Firestore (SyncRepository) + VocabEnrichmentService
 * cho nút "Tự điền thông minh ✨".
 *
 * - Sheet Tạo/Sửa bộ: lưu Room + sync Firestore (createDeckAndSync / updateDeckAndSync).
 * - Sheet Thêm/Sửa từ: chống trùng từ (cảnh báo đỏ), "Lưu & thêm tiếp" (giữ mở +
 *   reset form) / "Lưu" (đóng sheet).
 * - Sheet Chi tiết từ: Sửa (chuyển sang WordEditor) / Xóa (Room + Firestore).
 */
@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun DeckWordSheetHost(
    app: WordNestApplication,
    activeSheet: DeckSheet?,
    onSheetChange: (DeckSheet?) -> Unit,
    modifier: Modifier = Modifier
) {
    val scope = remember { CoroutineScope(SupervisorJob() + Dispatchers.Main) }
    val uid = remember { FirebaseAuth.getInstance().currentUser?.uid }
    val repo = app.repository
    val sync = app.syncRepository
    val enrichment = remember { VocabEnrichmentService() }
    val sheetState = rememberModalBottomSheetState()

    activeSheet?.let { sheet ->
        ModalBottomSheet(
            onDismissRequest = { onSheetChange(null) },
            sheetState = sheetState,
            containerColor = WordNestTheme.colors.surface,
            modifier = modifier
        ) {
            Box(modifier = Modifier.fillMaxWidth().padding(bottom = 40.dp)) {
                when (sheet) {
                    is DeckSheet.DeckEditor -> {
                        CreateEditDeckSheetContent(
                            initialName = sheet.initial?.name ?: "",
                            initialEmoji = sheet.initial?.emoji ?: "📚",
                            initialDescription = sheet.initial?.description ?: "",
                            onSave = { name, emoji, _, description ->
                                if (sheet.initial == null) {
                                    // Tạo mới: Room insert (id auto-gen) + Firestore set
                                    val entity = DeckEntity(name = name, emoji = emoji, description = description)
                                    scope.launch {
                                        sync.createDeckAndSync(uid, entity)
                                        onSheetChange(null)
                                    }
                                } else {
                                    // Sửa: cập nhật name/emoji/description (giữ id + words)
                                    val entity = sheet.initial.copy(name = name, emoji = emoji, description = description)
                                    scope.launch {
                                        sync.updateDeckAndSync(uid, entity)
                                        onSheetChange(null)
                                    }
                                }
                            },
                            modifier = Modifier.fillMaxWidth()
                        )
                    }

                    is DeckSheet.WordEditor -> {
                        // deckOptions chỉ phục vụ chế độ "Thêm từ nhanh" (initial == null,
                        // deckId == null) — cho chọn bộ đích.
                        val deckItems by app.repository.getDecksWithCounts()
                            .collectAsState(initial = emptyList())
                        val isQuickAdd = sheet.initial == null && sheet.deckId == null

                        // Danh sách từ CẤU (stream Room) của bộ đang chọn — cho cảnh báo trùng.
                        val activeDeckId = sheet.initial?.deckId ?: sheet.deckId
                        val dedupWords = if (activeDeckId != null) {
                            val list by repo.getWordsByDeckFlow(activeDeckId)
                                .collectAsState(initial = emptyList())
                            list
                        } else emptyList()
                        val editId = sheet.initial?.id
                        val existingTerms = remember(dedupWords, editId) {
                            dedupWords.filter { it.id != editId }.map { it.term.lowercase() }
                        }

                        WordEditorSheet(
                            initial = sheet.initial,
                            deckOptions = if (isQuickAdd) deckItems.map {
                                DeckPickerItem(it.id, it.name, it.emoji)
                            } else null,
                            selectedDeckId = sheet.deckId,
                            existingTerms = existingTerms,
                            enrichment = enrichment,
                            onScope = { block -> scope.launch { block() } },
                            onPickDeck = { pickedId ->
                                onSheetChange(DeckSheet.WordEditor(deckId = pickedId, initial = null))
                            },
                            onSave = { term, meaning, pos, ipa, example, keepOpen ->
                                val targetDeckId = sheet.initial?.deckId ?: sheet.deckId
                                if (targetDeckId != null) {
                                    val base = buildWordItemForSave(
                                        DeckSheet.WordEditor(deckId = targetDeckId, initial = sheet.initial),
                                        term, meaning, pos, ipa, example
                                    )
                                    scope.launch {
                                        if (sheet.initial == null) {
                                            sync.addWordAndSync(uid, targetDeckId, base.toEntity())
                                        } else {
                                            sync.updateWordAndSync(
                                                uid,
                                                base.toEntity().copy(id = sheet.initial.id)
                                            )
                                        }
                                        if (!keepOpen) onSheetChange(null)
                                    }
                                }
                            },
                            modifier = Modifier.fillMaxWidth()
                        )
                    }

                    is DeckSheet.WordDetail -> {
                        val w = sheet.word
                        val nextReview = Instant.ofEpochMilli(w.nextReviewTime)
                            .atZone(ZoneId.systemDefault())
                            .let { d ->
                                "%02d/%02d %02d:%02d".format(
                                    d.monthValue, d.dayOfMonth, d.hour, d.minute
                                )
                            }
                        WordDetailSheetContent(
                            term = w.term,
                            ipa = w.phonetic,
                            pos = w.partOfSpeech,
                            meaning = w.meaning,
                            example = w.example,
                            note = null,
                            nextReviewDate = nextReview,
                            onSpeakerClick = { TtsProvider.speak(w.term) },
                            onEditClick = {
                                onSheetChange(DeckSheet.WordEditor(deckId = w.deckId, initial = w))
                            },
                            onDeleteClick = {
                                scope.launch { sync.deleteWordAndSync(uid, w.id, w.deckId) }
                                onSheetChange(null)
                            },
                            modifier = Modifier.fillMaxWidth()
                        )
                    }
                }
            }
        }
    }
}

// ==========================================
// Sheet "Thêm / Sửa từ" — Tự điền ✨ + chống trùng
// ==========================================
@Composable
private fun WordEditorSheet(
    initial: WordItem?,
    deckOptions: List<DeckPickerItem>?, // != null → cho chọn bộ đích ("Thêm từ nhanh")
    selectedDeckId: Long?,
    existingTerms: List<String>, // lowercase, đã loại trừ id của từ đang sửa
    enrichment: VocabEnrichmentService,
    onScope: (suspend () -> Unit) -> Unit,
    onPickDeck: (Long) -> Unit,
    onSave: (
        term: String, meaning: String, pos: String?, ipa: String?,
        example: String?, keepOpen: Boolean
    ) -> Unit,
    modifier: Modifier
) {
    var term by remember { mutableStateOf(initial?.term ?: "") }
    var meaning by remember { mutableStateOf(initial?.meaning ?: "") }
    var pos by remember { mutableStateOf(initial?.partOfSpeech) }
    var ipa by remember { mutableStateOf(initial?.phonetic ?: "") }
    var example by remember { mutableStateOf(initial?.example ?: "") }

    var termError by remember { mutableStateOf(false) }
    var meaningError by remember { mutableStateOf(false) }
    var isEnriching by remember { mutableStateOf(false) }

    // Chống trùng: từ gõ (lowercase) trùng từ KHÁC trong cùng bộ
    val myTermLower = term.trim().lowercase()
    val isDuplicate = myTermLower.isNotEmpty() && myTermLower in existingTerms

    val partsOfSpeech = listOf("n", "v", "adj", "adv", "phr")
    val canSave = !isDuplicate && !term.isBlank() && !meaning.isBlank() &&
        (selectedDeckId != null || deckOptions == null)

    Column(
        modifier = modifier
            .fillMaxWidth()
            .padding(horizontal = 24.dp, vertical = 16.dp)
            .imePadding()
    ) {
        Text(
            text = if (initial == null) "Thêm từ mới" else "Sửa từ vựng: ${initial?.term}",
            style = WordNestTheme.typography.headlineMedium,
            color = WordNestTheme.colors.primaryText
        )
        Spacer(modifier = Modifier.height(16.dp))

        // Dropdown chọn bộ đích (chế độ "Thêm từ nhanh" từ Trang chủ)
        if (deckOptions != null) {
            val options = deckOptions
            var pickerExpanded by remember { mutableStateOf(false) }
            val selectedDeck = options.firstOrNull { it.id == selectedDeckId }
            Text(
                text = "Bộ từ đích *",
                style = WordNestTheme.typography.labelMedium,
                color = WordNestTheme.colors.slate500,
                modifier = Modifier.padding(bottom = 6.dp)
            )
            Row(
                modifier = Modifier
                    .fillMaxWidth()
                    .clickable { pickerExpanded = true }
                    .border(
                        width = 1.dp,
                        color = WordNestTheme.colors.forest900,
                        shape = WordNestTheme.shapes.small
                    )
                    .background(WordNestTheme.colors.surface)
                    .padding(horizontal = 14.dp, vertical = 14.dp),
                horizontalArrangement = Arrangement.SpaceBetween,
                verticalAlignment = Alignment.CenterVertically
            ) {
                Text(
                    text = if (selectedDeck != null) "${selectedDeck.emoji} ${selectedDeck.name}" else "Chọn bộ từ...",
                    style = WordNestTheme.typography.bodyMedium,
                    color = if (selectedDeck != null) WordNestTheme.colors.primaryText
                    else WordNestTheme.colors.slate500
                )
                Icon(
                    imageVector = Icons.Default.KeyboardArrowDown,
                    contentDescription = "Chọn bộ từ",
                    tint = WordNestTheme.colors.forest900
                )
            }
            DropdownMenu(
                expanded = pickerExpanded,
                onDismissRequest = { pickerExpanded = false }
            ) {
                options.forEach { opt ->
                    DropdownMenuItem(
                        text = { Text("${opt.emoji} ${opt.name}") },
                        onClick = {
                            pickerExpanded = false
                            onPickDeck(opt.id)
                        }
                    )
                }
            }
            Spacer(modifier = Modifier.height(16.dp))
        }

        // Từ tiếng Anh + nút "Tự điền thông minh ✨"
        Row(
            modifier = Modifier.fillMaxWidth(),
            horizontalArrangement = Arrangement.spacedBy(8.dp),
            verticalAlignment = Alignment.Top
        ) {
            OutlinedTextField(
                value = term,
                onValueChange = {
                    term = it
                    if (it.isNotEmpty()) termError = false
                },
                label = { Text("Từ tiếng Anh *") },
                isError = termError || isDuplicate,
                supportingText = {
                    when {
                        isDuplicate -> Text(
                            text = "Từ này đã có trong bộ từ!",
                            style = WordNestTheme.typography.labelMedium,
                            color = WordNestTheme.colors.error600
                        )
                        termError -> Text(
                            text = "Trường bắt buộc",
                            style = WordNestTheme.typography.labelMedium
                        )
                        else -> {}
                    }
                },
                singleLine = true,
                modifier = Modifier.weight(1f),
                shape = WordNestTheme.shapes.small
            )

            if (isEnriching) {
                Box(
                    modifier = Modifier
                        .padding(top = 8.dp)
                        .size(48.dp),
                    contentAlignment = Alignment.Center
                ) {
                    CircularProgressIndicator(
                        modifier = Modifier.size(20.dp),
                        strokeWidth = 2.dp,
                        color = WordNestTheme.colors.forest900
                    )
                }
            } else {
                TextButton(
                    onClick = {
                        if (term.isBlank()) return@TextButton
                        isEnriching = true
                        onScope {
                            enrichment.enrich(term).onSuccess { filled ->
                                if (ipa.isBlank()) ipa = filled.ipa ?: ""
                                if (pos == null) pos = filled.partOfSpeech
                                if (meaning.isBlank()) meaning = filled.vietnameseMeaning ?: ""
                                if (example.isBlank()) example = filled.example ?: ""
                            }
                            isEnriching = false
                        }
                    },
                    enabled = term.isNotBlank(),
                    modifier = Modifier.padding(top = 10.dp)
                ) {
                    Icon(
                        imageVector = Icons.Default.AutoAwesome,
                        contentDescription = "Tự điền thông minh",
                        tint = WordNestTheme.colors.forest900,
                        modifier = Modifier.size(18.dp)
                    )
                    Spacer(modifier = Modifier.width(4.dp))
                    Text(
                        text = "Tự điền ✨",
                        style = WordNestTheme.typography.labelMedium,
                        color = if (term.isBlank()) WordNestTheme.colors.slate400
                        else WordNestTheme.colors.forest900,
                        fontWeight = FontWeight.Bold
                    )
                }
            }
        }

        Spacer(modifier = Modifier.height(16.dp))

        OutlinedTextField(
            value = ipa,
            onValueChange = { ipa = it },
            label = { Text("Phiên âm IPA") },
            singleLine = true,
            modifier = Modifier.fillMaxWidth(),
            shape = WordNestTheme.shapes.small
        )

        Spacer(modifier = Modifier.height(16.dp))

        OutlinedTextField(
            value = meaning,
            onValueChange = {
                meaning = it
                if (it.isNotEmpty()) meaningError = false
            },
            label = { Text("Nghĩa tiếng Việt *") },
            isError = meaningError,
            supportingText = if (meaningError) {
                { Text("Trường bắt buộc", style = WordNestTheme.typography.labelMedium) }
            } else null,
            modifier = Modifier.fillMaxWidth(),
            shape = WordNestTheme.shapes.small
        )

        Spacer(modifier = Modifier.height(16.dp))

        Column {
            Text(
                text = "Loại từ",
                style = WordNestTheme.typography.labelMedium,
                color = WordNestTheme.colors.slate500
            )
            Spacer(modifier = Modifier.height(8.dp))
            Row(horizontalArrangement = Arrangement.spacedBy(8.dp)) {
                partsOfSpeech.forEach { p ->
                    WordNestFilterChip(
                        text = p,
                        selected = p == pos,
                        onClick = { pos = if (pos == p) null else p }
                    )
                }
            }
        }

        Spacer(modifier = Modifier.height(16.dp))

        OutlinedTextField(
            value = example,
            onValueChange = { example = it },
            label = { Text("Câu ví dụ (kèm dịch)") },
            modifier = Modifier.fillMaxWidth().height(80.dp),
            shape = WordNestTheme.shapes.small
        )

        Spacer(modifier = Modifier.height(24.dp))

        // Chế độ "Thêm từ nhanh": nhắc chọn bộ đích trước khi lưu
        if (deckOptions != null && selectedDeckId == null) {
            Text(
                text = "Hãy chọn bộ từ đích để lưu.",
                style = WordNestTheme.typography.labelMedium,
                color = WordNestTheme.colors.coral500,
                modifier = Modifier.padding(start = 4.dp, bottom = 8.dp)
            )
        }

        Row(horizontalArrangement = Arrangement.spacedBy(12.dp)) {
            OutlinedWordNestButton(
                text = "Lưu & thêm tiếp",
                onClick = {
                    if (!canSave) {
                        termError = term.isBlank()
                        meaningError = meaning.isBlank()
                        return@OutlinedWordNestButton
                    }
                    onSave(term, meaning, pos, ipa, example, true)
                    // Giữ mở + reset form (nội dung vừa lưu đã commit nên stream Room
                    // tự refresh danh sách chống trùng ở host)
                    term = ""; meaning = ""; pos = null; ipa = ""; example = ""
                },
                modifier = Modifier.weight(1f),
                enabled = initial == null && canSave
            )
            PrimaryButton(
                text = "Lưu",
                onClick = {
                    if (!canSave) {
                        termError = term.isBlank()
                        meaningError = meaning.isBlank()
                        return@PrimaryButton
                    }
                    onSave(term, meaning, pos, ipa, example, false)
                },
                modifier = Modifier.weight(1f),
                enabled = canSave
            )
        }
        Spacer(modifier = Modifier.height(16.dp))
    }
}

/** Dựng WordItem từ form (giữ SRS fields + createdAt của từ cũ khi sửa). */
private fun buildWordItemForSave(
    sheet: DeckSheet.WordEditor,
    term: String,
    meaning: String,
    pos: String?,
    ipa: String?,
    example: String?
): WordItem {
    val initial = sheet.initial
    return WordItem(
        id = initial?.id ?: 0L,
        deckId = sheet.deckId ?: initial?.deckId ?: 0L,
        term = term,
        meaning = meaning,
        phonetic = ipa?.trim()?.takeIf { it.isNotBlank() },
        partOfSpeech = pos?.takeIf { it.isNotBlank() },
        example = example?.trim()?.takeIf { it.isNotBlank() },
        level = initial?.level ?: com.tung.wordnest.data.model.WordLevel.NEW,
        nextReviewTime = initial?.nextReviewTime ?: System.currentTimeMillis(),
        reviewCount = initial?.reviewCount ?: 0,
        createdAt = initial?.createdAt?.takeIf { it > 0 } ?: System.currentTimeMillis()
    )
}
