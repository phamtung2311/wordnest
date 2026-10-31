package com.tung.wordnest.ui.components.sheets

import androidx.compose.foundation.clickable
import androidx.compose.foundation.border
import androidx.compose.foundation.BorderStroke
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Add
import androidx.compose.material.icons.filled.CheckCircle
import androidx.compose.material.icons.filled.Notifications
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextDecoration
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import com.tung.wordnest.ui.components.core.PrimaryButton
import com.tung.wordnest.ui.theme.TimerMonoStyle
import com.tung.wordnest.ui.theme.WordNestTheme

data class TodoUiModel(
    val id: String,
    val title: String,
    val timeStr: String?,
    val isDone: Boolean
)

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun TodoSheet(
    todos: List<TodoUiModel>,
    onToggleTodo: (String, Boolean) -> Unit,
    onAddTodo: (title: String, time: String?, notify: Boolean) -> Unit,
    onDismissRequest: () -> Unit,
    modifier: Modifier = Modifier
) {
    val sheetState = rememberModalBottomSheetState(skipPartiallyExpanded = true)
    
    var selectedSegment by remember { mutableStateOf("Hôm nay") }
    val segments = listOf("Hôm nay", "Ngày mai", "Sắp tới")

    var newTaskTitle by remember { mutableStateOf("") }
    var newTaskTime by remember { mutableStateOf("") }
    var notify by remember { mutableStateOf(false) }

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
            Text("Việc cần làm", style = WordNestTheme.typography.headlineMedium, color = WordNestTheme.colors.primaryText)
            Spacer(modifier = Modifier.height(16.dp))
            
            // Segmented Control (Custom using Row and Surface for WordNest styling)
            Surface(
                color = WordNestTheme.colors.surface,
                shape = WordNestTheme.shapes.small,
                border = BorderStroke(1.dp, WordNestTheme.colors.line200),
                modifier = Modifier.fillMaxWidth().height(40.dp)
            ) {
                Row(modifier = Modifier.fillMaxSize()) {
                    segments.forEach { segment ->
                        val isSelected = selectedSegment == segment
                        val bgColor = if (isSelected) WordNestTheme.colors.forest900 else Color.Transparent
                        val textColor = if (isSelected) WordNestTheme.colors.surfaceWhite else WordNestTheme.colors.slate500
                        
                        Box(
                            modifier = Modifier
                                .weight(1f)
                                .fillMaxHeight()
                                .background(bgColor)
                                .clickable { selectedSegment = segment },
                            contentAlignment = Alignment.Center
                        ) {
                            Text(segment, style = WordNestTheme.typography.labelMedium.copy(fontWeight = FontWeight.Bold), color = textColor)
                        }
                    }
                }
            }
            
            Spacer(modifier = Modifier.height(20.dp))
            
            // Todo List
            LazyColumn(
                modifier = Modifier.weight(1f, fill = false),
                verticalArrangement = Arrangement.spacedBy(12.dp)
            ) {
                items(todos) { todo ->
                    TodoItemRow(todo = todo, onToggle = { onToggleTodo(todo.id, it) })
                }
            }

            Spacer(modifier = Modifier.height(24.dp))
            HorizontalDivider(color = WordNestTheme.colors.line200)
            Spacer(modifier = Modifier.height(16.dp))

            // Quick Add Form
            Text("Thêm việc nhanh", style = WordNestTheme.typography.titleMedium, color = WordNestTheme.colors.ink900)
            Spacer(modifier = Modifier.height(12.dp))
            
            OutlinedTextField(
                value = newTaskTitle,
                onValueChange = { newTaskTitle = it },
                placeholder = { Text("Tên công việc...") },
                modifier = Modifier.fillMaxWidth(),
                singleLine = true,
                shape = WordNestTheme.shapes.small,
                colors = OutlinedTextFieldDefaults.colors(focusedBorderColor = WordNestTheme.colors.forest900)
            )
            
            Spacer(modifier = Modifier.height(12.dp))
            
            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.spacedBy(12.dp),
                verticalAlignment = Alignment.CenterVertically
            ) {
                OutlinedTextField(
                    value = newTaskTime,
                    onValueChange = { newTaskTime = it },
                    placeholder = { Text("20:00") },
                    modifier = Modifier.weight(1f),
                    singleLine = true,
                    shape = WordNestTheme.shapes.small,
                    colors = OutlinedTextFieldDefaults.colors(focusedBorderColor = WordNestTheme.colors.forest900)
                )
                
                Surface(
                    onClick = { notify = !notify },
                    shape = WordNestTheme.shapes.small,
                    color = if (notify) WordNestTheme.colors.amberTint else WordNestTheme.colors.surface,
                    border = BorderStroke(1.dp, if (notify) WordNestTheme.colors.amber500 else WordNestTheme.colors.line200),
                    modifier = Modifier.height(56.dp)
                ) {
                    Row(modifier = Modifier.padding(horizontal = 12.dp), verticalAlignment = Alignment.CenterVertically, horizontalArrangement = Arrangement.spacedBy(4.dp)) {
                        Icon(Icons.Default.Notifications, contentDescription = null, tint = if (notify) WordNestTheme.colors.amber500 else WordNestTheme.colors.slate400, modifier = Modifier.size(20.dp))
                        Text("Nhắc", style = WordNestTheme.typography.labelMedium, color = if (notify) WordNestTheme.colors.amber500 else WordNestTheme.colors.slate500)
                    }
                }
                
                PrimaryButton(
                    text = "Thêm",
                    onClick = { 
                        if (newTaskTitle.isNotBlank()) {
                            onAddTodo(newTaskTitle, newTaskTime.takeIf { it.isNotBlank() }, notify)
                            newTaskTitle = ""
                            newTaskTime = ""
                            notify = false
                        }
                    },
                    modifier = Modifier.height(56.dp),
                    enabled = newTaskTitle.isNotBlank()
                )
            }
        }
    }
}

@Composable
private fun TodoItemRow(todo: TodoUiModel, onToggle: (Boolean) -> Unit) {
    Row(
        modifier = Modifier.fillMaxWidth(),
        verticalAlignment = Alignment.CenterVertically
    ) {
        IconToggleButton(
            checked = todo.isDone,
            onCheckedChange = onToggle,
            modifier = Modifier.size(32.dp)
        ) {
            if (todo.isDone) {
                Icon(Icons.Default.CheckCircle, contentDescription = "Done", tint = WordNestTheme.colors.mint500, modifier = Modifier.size(24.dp))
            } else {
                Box(modifier = Modifier.size(20.dp).background(Color.Transparent, CircleShape).border(2.dp, WordNestTheme.colors.slate400, CircleShape))
            }
        }
        
        Spacer(modifier = Modifier.width(12.dp))
        
        Text(
            text = todo.title,
            style = if (todo.isDone) WordNestTheme.typography.bodyMedium.copy(textDecoration = TextDecoration.LineThrough) else WordNestTheme.typography.titleMedium,
            color = if (todo.isDone) WordNestTheme.colors.slate400 else WordNestTheme.colors.ink900,
            modifier = Modifier.weight(1f)
        )
        
        if (todo.timeStr != null) {
            Spacer(modifier = Modifier.width(8.dp))
            Surface(color = WordNestTheme.colors.beige100, shape = CircleShape) {
                Text(todo.timeStr, style = TimerMonoStyle, color = WordNestTheme.colors.slate500, modifier = Modifier.padding(horizontal = 8.dp, vertical = 4.dp))
            }
        }
    }
}

@Preview(showBackground = true)
@Composable
fun TodoSheetPreview() {
    WordNestTheme {
        TodoSheet(
            todos = listOf(
                TodoUiModel("1", "Ôn tập 20 từ vựng IELTS", "20:00", false),
                TodoUiModel("2", "Làm đề Reading Part 5", "21:30", false),
                TodoUiModel("3", "Thêm từ mới hôm nay", null, true)
            ),
            onToggleTodo = { _, _ -> },
            onAddTodo = { _, _, _ -> },
            onDismissRequest = {}
        )
    }
}
