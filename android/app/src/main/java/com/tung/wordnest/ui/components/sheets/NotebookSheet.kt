package com.tung.wordnest.ui.components.sheets

import androidx.compose.foundation.BorderStroke
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.LazyRow
import androidx.compose.foundation.lazy.items
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.font.FontStyle
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import com.tung.wordnest.ui.components.core.OutlinedWordNestButton
import com.tung.wordnest.ui.components.core.PrimaryButton
import com.tung.wordnest.ui.components.core.WordNestFilterChip
import com.tung.wordnest.ui.components.core.WordNestSearchField
import com.tung.wordnest.ui.theme.WordNestTheme

data class NoteUiModel(
    val id: String,
    val title: String,
    val content: String,
    val example: String?,
    val tag: String
)

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun NotebookSheet(
    notes: List<NoteUiModel>,
    onSaveNote: (title: String, content: String, example: String?, tag: String) -> Unit,
    onDeleteNote: (String) -> Unit,
    onDismissRequest: () -> Unit,
    modifier: Modifier = Modifier
) {
    val sheetState = rememberModalBottomSheetState(skipPartiallyExpanded = true)
    
    var isEditing by remember { mutableStateOf(false) }
    var searchQuery by remember { mutableStateOf("") }
    var selectedFilter by remember { mutableStateOf("Tất cả") }
    val tags = listOf("Tất cả", "Ngữ pháp", "Cấu trúc", "Từ vựng")

    ModalBottomSheet(
        onDismissRequest = onDismissRequest,
        sheetState = sheetState,
        containerColor = WordNestTheme.colors.background,
        shape = WordNestTheme.shapes.extraLarge,
        dragHandle = { BottomSheetDefaults.DragHandle() },
        modifier = modifier
    ) {
        Column(
            modifier = Modifier
                .fillMaxWidth()
                .padding(horizontal = 16.dp)
                .padding(bottom = 32.dp)
                .windowInsetsPadding(WindowInsets.navigationBars)
                .imePadding()
        ) {
            if (!isEditing) {
                // LIST MODE
                Row(
                    modifier = Modifier.fillMaxWidth(),
                    horizontalArrangement = Arrangement.SpaceBetween,
                    verticalAlignment = Alignment.CenterVertically
                ) {
                    Text("Sổ tay ghi chú", style = WordNestTheme.typography.headlineMedium, color = WordNestTheme.colors.primaryText)
                    TextButton(onClick = { isEditing = true }) {
                        Text("+ Thêm mới", style = WordNestTheme.typography.labelMedium.copy(fontWeight = FontWeight.Bold), color = WordNestTheme.colors.forest900)
                    }
                }
                
                Spacer(modifier = Modifier.height(16.dp))
                
                WordNestSearchField(
                    query = searchQuery,
                    onQueryChange = { searchQuery = it },
                    placeholder = "Tìm kiếm ghi chú..."
                )
                
                Spacer(modifier = Modifier.height(12.dp))
                
                LazyRow(horizontalArrangement = Arrangement.spacedBy(8.dp)) {
                    items(tags) { tag ->
                        WordNestFilterChip(
                            text = tag,
                            selected = tag == selectedFilter,
                            onClick = { selectedFilter = tag }
                        )
                    }
                }
                
                Spacer(modifier = Modifier.height(16.dp))
                
                LazyColumn(
                    modifier = Modifier.fillMaxWidth(),
                    verticalArrangement = Arrangement.spacedBy(12.dp)
                ) {
                    val filteredNotes = notes.filter { 
                        (selectedFilter == "Tất cả" || it.tag == selectedFilter) && 
                        (it.title.contains(searchQuery, ignoreCase = true) || it.content.contains(searchQuery, ignoreCase = true))
                    }
                    items(filteredNotes) { note ->
                        NoteCard(note = note, onDelete = { onDeleteNote(note.id) })
                    }
                }
            } else {
                // EDIT MODE
                var editTitle by remember { mutableStateOf("") }
                var editContent by remember { mutableStateOf("") }
                var editExample by remember { mutableStateOf("") }
                var editTag by remember { mutableStateOf("Ngữ pháp") }

                Text("Tạo ghi chú", style = WordNestTheme.typography.headlineMedium, color = WordNestTheme.colors.primaryText)
                Spacer(modifier = Modifier.height(16.dp))
                
                LazyRow(horizontalArrangement = Arrangement.spacedBy(8.dp)) {
                    items(tags.filter { it != "Tất cả" }) { tag ->
                        WordNestFilterChip(
                            text = tag,
                            selected = tag == editTag,
                            onClick = { editTag = tag }
                        )
                    }
                }
                
                Spacer(modifier = Modifier.height(16.dp))
                
                OutlinedTextField(
                    value = editTitle,
                    onValueChange = { editTitle = it },
                    label = { Text("Tiêu đề *") },
                    modifier = Modifier.fillMaxWidth(),
                    shape = WordNestTheme.shapes.small,
                    colors = OutlinedTextFieldDefaults.colors(focusedBorderColor = WordNestTheme.colors.forest900)
                )
                
                Spacer(modifier = Modifier.height(12.dp))
                
                OutlinedTextField(
                    value = editContent,
                    onValueChange = { editContent = it },
                    label = { Text("Nội dung giải thích *") },
                    modifier = Modifier.fillMaxWidth().height(120.dp),
                    shape = WordNestTheme.shapes.small,
                    colors = OutlinedTextFieldDefaults.colors(focusedBorderColor = WordNestTheme.colors.forest900)
                )

                Spacer(modifier = Modifier.height(12.dp))
                
                OutlinedTextField(
                    value = editExample,
                    onValueChange = { editExample = it },
                    label = { Text("Câu ví dụ (tùy chọn)") },
                    modifier = Modifier.fillMaxWidth().height(80.dp),
                    shape = WordNestTheme.shapes.small,
                    colors = OutlinedTextFieldDefaults.colors(focusedBorderColor = WordNestTheme.colors.forest900)
                )

                Spacer(modifier = Modifier.height(24.dp))

                Row(horizontalArrangement = Arrangement.spacedBy(12.dp)) {
                    OutlinedWordNestButton(text = "Hủy", onClick = { isEditing = false }, modifier = Modifier.weight(1f))
                    PrimaryButton(
                        text = "Lưu",
                        onClick = { 
                            if (editTitle.isNotBlank() && editContent.isNotBlank()) {
                                onSaveNote(editTitle, editContent, editExample.takeIf { it.isNotBlank() }, editTag)
                                isEditing = false
                            }
                        },
                        modifier = Modifier.weight(1f),
                        enabled = editTitle.isNotBlank() && editContent.isNotBlank()
                    )
                }
            }
        }
    }
}

@Composable
private fun NoteCard(note: NoteUiModel, onDelete: () -> Unit) {
    Surface(
        shape = WordNestTheme.shapes.small,
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
                    text = note.title,
                    style = WordNestTheme.typography.titleMedium,
                    color = WordNestTheme.colors.ink900
                )
                TextButton(onClick = onDelete, contentPadding = PaddingValues(0.dp), modifier = Modifier.height(24.dp)) {
                    Text("Xóa", style = WordNestTheme.typography.labelSmall, color = WordNestTheme.colors.error600)
                }
            }
            
            Spacer(modifier = Modifier.height(8.dp))
            Text(note.content, style = WordNestTheme.typography.bodyMedium, color = WordNestTheme.colors.slate500)
            
            if (!note.example.isNullOrBlank()) {
                Spacer(modifier = Modifier.height(8.dp))
                Surface(color = WordNestTheme.colors.beige100, shape = WordNestTheme.shapes.extraSmall) {
                    Text(
                        text = "\"${note.example}\"",
                        style = WordNestTheme.typography.bodyMedium.copy(fontStyle = FontStyle.Italic),
                        color = WordNestTheme.colors.slate500,
                        modifier = Modifier.padding(8.dp).fillMaxWidth()
                    )
                }
            }
            
            Spacer(modifier = Modifier.height(12.dp))
            WordNestFilterChip(text = note.tag, selected = false, onClick = {})
        }
    }
}

@Preview(showBackground = true)
@Composable
fun NotebookSheetPreview() {
    WordNestTheme {
        NotebookSheet(
            notes = listOf(
                NoteUiModel("1", "Cấu trúc Despite / In spite of", "Dùng để diễn tả sự nhượng bộ. Sau Despite/In spite of luôn là một Danh động từ (V-ing) hoặc Danh từ.", "Despite the rain, we went out.", "Ngữ pháp"),
                NoteUiModel("2", "Phân biệt See / Look / Watch", "See: thấy không chủ đích. Look: Nhìn có chủ đích. Watch: Xem một quá trình (TV, trận đấu).", null, "Từ vựng")
            ),
            onSaveNote = { _, _, _, _ -> },
            onDeleteNote = {},
            onDismissRequest = {}
        )
    }
}
