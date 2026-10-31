package com.tung.wordnest.ui.screens.decks

import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.automirrored.filled.VolumeUp
import androidx.compose.material.icons.filled.Check
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
import com.tung.wordnest.ui.components.core.OutlinedWordNestButton
import com.tung.wordnest.ui.components.core.PrimaryButton
import com.tung.wordnest.ui.components.core.WordNestFilterChip
import com.tung.wordnest.ui.theme.WordNestTheme

// ==========================================
// 1. Create / Edit Deck Sheet Content
// ==========================================
@Composable
fun CreateEditDeckSheetContent(
    initialName: String = "",
    initialEmoji: String = "📚",
    initialColor: Color = Color(0xFFFEF3C7), // AmberTint mockup
    initialDescription: String = "",
    onSave: (name: String, emoji: String, color: Color, description: String) -> Unit,
    modifier: Modifier = Modifier
) {
    var name by remember { mutableStateOf(initialName) }
    var emoji by remember { mutableStateOf(initialEmoji) }
    var selectedColor by remember { mutableStateOf(initialColor) }
    var description by remember { mutableStateOf(initialDescription) }
    var nameError by remember { mutableStateOf(false) }

    val palette = listOf(
        Color(0xFFFEF3C7), // AmberTint
        Color(0xFFFDE4E4), // CoralTint
        Color(0xFFFFF1E6), // OrangeTint
        Color(0xFFFDF2F8), // PinkTint
        Color(0xFFE0F2FE), // BlueTint
        Color(0xFFDCFCE7)  // GreenTint
    )

    Column(
        modifier = modifier
            .fillMaxWidth()
            .padding(horizontal = 24.dp, vertical = 16.dp)
            .imePadding()
    ) {
        Text(
            text = if (initialName.isEmpty()) "Tạo bộ từ mới" else "Sửa bộ từ",
            style = WordNestTheme.typography.headlineMedium,
            color = WordNestTheme.colors.primaryText
        )
        Spacer(modifier = Modifier.height(24.dp))

        // Name Input
        OutlinedTextField(
            value = name,
            onValueChange = { 
                name = it
                if (it.isNotEmpty()) nameError = false
            },
            label = { Text("Tên bộ từ *") },
            isError = nameError,
            supportingText = if (nameError) { { Text("Tên bộ từ không được để trống") } } else null,
            modifier = Modifier.fillMaxWidth(),
            singleLine = true,
            shape = WordNestTheme.shapes.small,
            colors = OutlinedTextFieldDefaults.colors(
                focusedBorderColor = WordNestTheme.colors.forest900,
                focusedLabelColor = WordNestTheme.colors.forest900,
                cursorColor = WordNestTheme.colors.forest900
            )
        )
        
        Spacer(modifier = Modifier.height(16.dp))

        // Emoji & Color Row
        Row(
            verticalAlignment = Alignment.CenterVertically,
            horizontalArrangement = Arrangement.spacedBy(16.dp)
        ) {
            OutlinedTextField(
                value = emoji,
                onValueChange = { if (it.length <= 2) emoji = it },
                label = { Text("Biểu tượng") },
                modifier = Modifier.width(100.dp),
                singleLine = true,
                shape = WordNestTheme.shapes.small,
                colors = OutlinedTextFieldDefaults.colors(
                    focusedBorderColor = WordNestTheme.colors.forest900,
                    focusedLabelColor = WordNestTheme.colors.forest900
                )
            )

            Column(verticalArrangement = Arrangement.spacedBy(8.dp)) {
                Text("Màu nền", style = WordNestTheme.typography.labelMedium, color = WordNestTheme.colors.slate500)
                Row(horizontalArrangement = Arrangement.spacedBy(8.dp)) {
                    palette.forEach { color ->
                        Box(
                            modifier = Modifier
                                .size(32.dp)
                                .clip(CircleShape)
                                .background(color)
                                .border(
                                    width = if (selectedColor == color) 2.dp else 1.dp,
                                    color = if (selectedColor == color) WordNestTheme.colors.forest900 else WordNestTheme.colors.line200,
                                    shape = CircleShape
                                )
                                .clickable { selectedColor = color },
                            contentAlignment = Alignment.Center
                        ) {
                            if (selectedColor == color) {
                                Icon(Icons.Default.Check, contentDescription = null, tint = WordNestTheme.colors.forest900, modifier = Modifier.size(16.dp))
                            }
                        }
                    }
                }
            }
        }

        Spacer(modifier = Modifier.height(16.dp))

        // Description Input
        OutlinedTextField(
            value = description,
            onValueChange = { description = it },
            label = { Text("Mô tả (tùy chọn)") },
            modifier = Modifier
                .fillMaxWidth()
                .height(100.dp),
            shape = WordNestTheme.shapes.small,
            colors = OutlinedTextFieldDefaults.colors(
                focusedBorderColor = WordNestTheme.colors.forest900,
                focusedLabelColor = WordNestTheme.colors.forest900
            )
        )

        Spacer(modifier = Modifier.height(24.dp))

        PrimaryButton(
            text = "Lưu bộ từ",
            onClick = {
                if (name.isBlank()) {
                    nameError = true
                } else {
                    onSave(name, emoji, selectedColor, description)
                }
            },
            modifier = Modifier.fillMaxWidth()
        )
        Spacer(modifier = Modifier.height(16.dp))
    }
}

// ==========================================
// 2. Add / Edit Word Sheet Content
// ==========================================
@Composable
fun AddEditWordSheetContent(
    onSaveAndContinue: (term: String, meaning: String, pos: String?, ipa: String?, example: String?, note: String?) -> Unit,
    onSave: (term: String, meaning: String, pos: String?, ipa: String?, example: String?, note: String?) -> Unit,
    modifier: Modifier = Modifier
) {
    var term by remember { mutableStateOf("") }
    var meaning by remember { mutableStateOf("") }
    var pos by remember { mutableStateOf<String?>(null) }
    var ipa by remember { mutableStateOf("") }
    var example by remember { mutableStateOf("") }
    var note by remember { mutableStateOf("") }

    var termError by remember { mutableStateOf(false) }
    var meaningError by remember { mutableStateOf(false) }

    val partsOfSpeech = listOf("n", "v", "adj", "adv", "phr")

    val validateAndRun = { action: () -> Unit ->
        termError = term.isBlank()
        meaningError = meaning.isBlank()
        if (!termError && !meaningError) action()
    }

    Column(
        modifier = modifier
            .fillMaxWidth()
            .padding(horizontal = 24.dp, vertical = 16.dp)
    ) {
        Text(
            text = "Thêm từ mới",
            style = WordNestTheme.typography.headlineMedium,
            color = WordNestTheme.colors.primaryText
        )
        Spacer(modifier = Modifier.height(16.dp))

        Column(
            modifier = Modifier
                .weight(1f, fill = false)
                .verticalScroll(rememberScrollState()),
            verticalArrangement = Arrangement.spacedBy(16.dp)
        ) {
            // Required Fields
            Row(horizontalArrangement = Arrangement.spacedBy(12.dp)) {
                OutlinedTextField(
                    value = term,
                    onValueChange = { term = it; if(it.isNotEmpty()) termError = false },
                    label = { Text("Từ tiếng Anh *") },
                    isError = termError,
                    singleLine = true,
                    modifier = Modifier.weight(1f),
                    shape = WordNestTheme.shapes.small
                )
                OutlinedTextField(
                    value = ipa,
                    onValueChange = { ipa = it },
                    label = { Text("Phiên âm IPA") },
                    singleLine = true,
                    modifier = Modifier.weight(1f),
                    shape = WordNestTheme.shapes.small
                )
            }

            OutlinedTextField(
                value = meaning,
                onValueChange = { meaning = it; if(it.isNotEmpty()) meaningError = false },
                label = { Text("Nghĩa tiếng Việt *") },
                isError = meaningError,
                modifier = Modifier.fillMaxWidth(),
                shape = WordNestTheme.shapes.small
            )

            // Parts of Speech
            Column {
                Text("Loại từ", style = WordNestTheme.typography.labelMedium, color = WordNestTheme.colors.slate500)
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

            // Optional Fields
            OutlinedTextField(
                value = example,
                onValueChange = { example = it },
                label = { Text("Câu ví dụ (kèm dịch)") },
                modifier = Modifier
                    .fillMaxWidth()
                    .height(80.dp),
                shape = WordNestTheme.shapes.small
            )

            OutlinedTextField(
                value = note,
                onValueChange = { note = it },
                label = { Text("Ghi chú cá nhân") },
                modifier = Modifier
                    .fillMaxWidth()
                    .height(80.dp),
                shape = WordNestTheme.shapes.small
            )
            
            // Add spacer for keyboard
            Spacer(modifier = Modifier.imePadding())
        }

        Spacer(modifier = Modifier.height(16.dp))

        // Actions
        Row(horizontalArrangement = Arrangement.spacedBy(12.dp)) {
            OutlinedWordNestButton(
                text = "Lưu & thêm tiếp",
                onClick = { 
                    validateAndRun { 
                        onSaveAndContinue(term, meaning, pos, ipa, example, note) 
                        term = ""; meaning = ""; pos = null; ipa = ""; example = ""; note = ""
                    } 
                },
                modifier = Modifier.weight(1f)
            )
            PrimaryButton(
                text = "Lưu",
                onClick = { validateAndRun { onSave(term, meaning, pos, ipa, example, note) } },
                modifier = Modifier.weight(1f)
            )
        }
        Spacer(modifier = Modifier.height(16.dp))
    }
}

// ==========================================
// 3. Word Detail Sheet Content
// ==========================================
@Composable
fun WordDetailSheetContent(
    term: String,
    ipa: String?,
    pos: String?,
    meaning: String,
    example: String?,
    note: String?,
    nextReviewDate: String,
    onSpeakerClick: () -> Unit,
    onEditClick: () -> Unit,
    onDeleteClick: () -> Unit,
    modifier: Modifier = Modifier
) {
    Column(
        modifier = modifier
            .fillMaxWidth()
            .padding(horizontal = 24.dp, vertical = 16.dp)
    ) {
        Row(
            modifier = Modifier.fillMaxWidth(),
            horizontalArrangement = Arrangement.SpaceBetween,
            verticalAlignment = Alignment.Top
        ) {
            Column(modifier = Modifier.weight(1f)) {
                Text(
                    text = term,
                    style = WordNestTheme.typography.displayLarge.copy(fontSize = 34.sp), // Fraunces 34.sp
                    color = WordNestTheme.colors.primaryText,
                    fontWeight = FontWeight.Bold
                )
                
                val metaData = buildString {
                    if (!ipa.isNullOrEmpty()) append(ipa)
                    if (!ipa.isNullOrEmpty() && !pos.isNullOrEmpty()) append(" • ")
                    if (!pos.isNullOrEmpty()) append(pos)
                }
                
                if (metaData.isNotEmpty()) {
                    Spacer(modifier = Modifier.height(4.dp))
                    Text(
                        text = metaData,
                        style = WordNestTheme.typography.titleMedium,
                        color = WordNestTheme.colors.slate500
                    )
                }
            }
            
            IconButton(
                onClick = onSpeakerClick,
                modifier = Modifier
                    .size(48.dp)
                    .clip(CircleShape)
                    .background(WordNestTheme.colors.amberTint)
            ) {
                Icon(Icons.AutoMirrored.Filled.VolumeUp, contentDescription = "Phát âm", tint = WordNestTheme.colors.forest900)
            }
        }

        Spacer(modifier = Modifier.height(24.dp))

        // Meaning
        Text("NGHĨA", style = WordNestTheme.typography.labelSmall, color = WordNestTheme.colors.coral500)
        Spacer(modifier = Modifier.height(4.dp))
        Text(meaning, style = WordNestTheme.typography.bodyMedium, color = WordNestTheme.colors.ink900)

        // Example
        if (!example.isNullOrBlank()) {
            Spacer(modifier = Modifier.height(20.dp))
            Text("VÍ DỤ", style = WordNestTheme.typography.labelSmall, color = WordNestTheme.colors.coral500)
            Spacer(modifier = Modifier.height(4.dp))
            Text(example, style = WordNestTheme.typography.bodyMedium, color = WordNestTheme.colors.ink900)
        }

        // Note
        if (!note.isNullOrBlank()) {
            Spacer(modifier = Modifier.height(20.dp))
            Text("GHI CHÚ", style = WordNestTheme.typography.labelSmall, color = WordNestTheme.colors.coral500)
            Spacer(modifier = Modifier.height(4.dp))
            Surface(
                color = WordNestTheme.colors.beige100,
                shape = WordNestTheme.shapes.small,
                modifier = Modifier.fillMaxWidth()
            ) {
                Text(note, style = WordNestTheme.typography.bodyMedium, color = WordNestTheme.colors.slate500, modifier = Modifier.padding(12.dp))
            }
        }

        Spacer(modifier = Modifier.height(20.dp))
        HorizontalDivider(color = WordNestTheme.colors.line200)
        Spacer(modifier = Modifier.height(16.dp))

        Row(
            modifier = Modifier.fillMaxWidth(),
            horizontalArrangement = Arrangement.SpaceBetween,
            verticalAlignment = Alignment.CenterVertically
        ) {
            Column {
                Text("Lịch ôn tiếp theo", style = WordNestTheme.typography.labelMedium, color = WordNestTheme.colors.slate500)
                Text(nextReviewDate, style = WordNestTheme.typography.titleMedium, color = WordNestTheme.colors.forest900)
            }
            
            Row(horizontalArrangement = Arrangement.spacedBy(8.dp)) {
                TextButton(onClick = onDeleteClick) {
                    Text("Xóa", color = WordNestTheme.colors.error600, style = WordNestTheme.typography.labelMedium)
                }
                OutlinedWordNestButton(text = "Sửa", onClick = onEditClick)
            }
        }
        
        Spacer(modifier = Modifier.height(16.dp))
    }
}

// ==========================================
// Previews
// ==========================================
@Preview(showBackground = true, name = "1. Tạo Bộ Từ Sheet")
@Composable
fun CreateEditDeckSheetPreview() {
    WordNestTheme {
        CreateEditDeckSheetContent(
            onSave = { _, _, _, _ -> }
        )
    }
}

@Preview(showBackground = true, name = "2. Thêm Từ Sheet")
@Composable
fun AddEditWordSheetPreview() {
    WordNestTheme {
        AddEditWordSheetContent(
            onSaveAndContinue = { _, _, _, _, _, _ -> },
            onSave = { _, _, _, _, _, _ -> }
        )
    }
}

@Preview(showBackground = true, name = "3. Chi Tiết Từ Sheet")
@Composable
fun WordDetailSheetPreview() {
    WordNestTheme {
        WordDetailSheetContent(
            term = "Serendipity",
            ipa = "/ˌser.ənˈdɪp.ə.ti/",
            pos = "n",
            meaning = "Sự tình cờ may mắn, duyên kỳ ngộ khi tìm ra một thứ gì đó tốt đẹp mà không chủ ý tìm kiếm.",
            example = "Meeting her like that, and there of all places, was true serendipity! \n(Gặp cô ấy như vậy, ở chính nơi đó, quả là một duyên kỳ ngộ!)",
            note = "Từ này nghe rất thơ, hay dùng trong IELTS Writing Task 2 chủ đề Life experiences.",
            nextReviewDate = "Ngày mai, 08:00",
            onSpeakerClick = {},
            onEditClick = {},
            onDeleteClick = {}
        )
    }
}
