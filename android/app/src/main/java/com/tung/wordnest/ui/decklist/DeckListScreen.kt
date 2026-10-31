package com.tung.wordnest.ui.decklist

import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.grid.GridCells
import androidx.compose.foundation.lazy.grid.LazyVerticalGrid
import androidx.compose.foundation.lazy.grid.items
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Add
import androidx.compose.material.icons.filled.AddCircleOutline
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.tung.wordnest.data.repository.DeckItem

@Composable
fun DeckListScreen(
    viewModel: DeckListViewModel,
    onDeckClick: (Long) -> Unit,
    modifier: Modifier = Modifier
) {
    val uiState by viewModel.uiState.collectAsState()
    var showCreateDeckDialog by remember { mutableStateOf(false) }
    var selectedDeckForNewWord by remember { mutableStateOf<Long?>(null) }

    Scaffold(
        modifier = modifier,
        floatingActionButton = {
            FloatingActionButton(onClick = { showCreateDeckDialog = true }) {
                Icon(Icons.Default.Add, contentDescription = "Tạo bộ từ")
            }
        }
    ) { innerPadding ->
        if (uiState.isLoading) {
            Box(modifier = Modifier.fillMaxSize().padding(innerPadding), contentAlignment = Alignment.Center) {
                CircularProgressIndicator()
            }
        } else if (uiState.decks.isEmpty()) {
            Box(modifier = Modifier.fillMaxSize().padding(innerPadding), contentAlignment = Alignment.Center) {
                Text("Chưa có bộ từ vựng nào.", style = MaterialTheme.typography.bodyLarge)
            }
        } else {
            LazyVerticalGrid(
                columns = GridCells.Fixed(2),
                contentPadding = PaddingValues(16.dp),
                horizontalArrangement = Arrangement.spacedBy(16.dp),
                verticalArrangement = Arrangement.spacedBy(16.dp),
                modifier = Modifier.padding(innerPadding)
            ) {
                items(uiState.decks) { deck ->
                    DeckCard(
                        deck = deck,
                        onClick = { onDeckClick(deck.id) },
                        onAddWordClick = { selectedDeckForNewWord = deck.id }
                    )
                }
            }
        }

        if (showCreateDeckDialog) {
            CreateDeckDialog(
                onDismiss = { showCreateDeckDialog = false },
                onConfirm = { name, emoji, desc ->
                    viewModel.createDeck(name, emoji, desc)
                    showCreateDeckDialog = false
                }
            )
        }

        selectedDeckForNewWord?.let { deckId ->
            AddWordDialog(
                onDismiss = { selectedDeckForNewWord = null },
                onConfirm = { term, meaning, phonetic, example ->
                    viewModel.addWordToDeck(deckId, term, meaning, phonetic, example)
                    selectedDeckForNewWord = null
                }
            )
        }
    }
}

@Composable
fun DeckCard(deck: DeckItem, onClick: () -> Unit, onAddWordClick: () -> Unit) {
    Card(
        modifier = Modifier
            .fillMaxWidth()
            .clickable(onClick = onClick)
            .height(180.dp),
        shape = RoundedCornerShape(16.dp),
        colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.surfaceVariant)
    ) {
        Column(
            modifier = Modifier.padding(16.dp).fillMaxSize(),
            verticalArrangement = Arrangement.SpaceBetween
        ) {
            Column {
                Text(text = deck.emoji, fontSize = 40.sp)
                Spacer(modifier = Modifier.height(8.dp))
                Text(
                    text = deck.name,
                    style = MaterialTheme.typography.titleMedium,
                    fontWeight = FontWeight.Bold,
                    maxLines = 1,
                    overflow = TextOverflow.Ellipsis
                )
                Text(
                    text = "${deck.dueWords} cần ôn / ${deck.totalWords} từ",
                    style = MaterialTheme.typography.bodySmall,
                    color = MaterialTheme.colorScheme.primary,
                    modifier = Modifier.padding(top = 4.dp)
                )
            }
            
            IconButton(
                onClick = onAddWordClick,
                modifier = Modifier.align(Alignment.End)
            ) {
                Icon(
                    Icons.Default.AddCircleOutline, 
                    contentDescription = "Thêm từ",
                    tint = MaterialTheme.colorScheme.primary
                )
            }
        }
    }
}

@Composable
fun CreateDeckDialog(onDismiss: () -> Unit, onConfirm: (String, String, String) -> Unit) {
    var name by remember { mutableStateOf("") }
    var emoji by remember { mutableStateOf("📚") }
    var description by remember { mutableStateOf("") }

    AlertDialog(
        onDismissRequest = onDismiss,
        title = { Text("Tạo bộ từ mới") },
        text = {
            Column(verticalArrangement = Arrangement.spacedBy(8.dp)) {
                OutlinedTextField(
                    value = emoji,
                    onValueChange = { if (it.length <= 2) emoji = it },
                    label = { Text("Emoji") },
                    singleLine = true
                )
                OutlinedTextField(
                    value = name,
                    onValueChange = { name = it },
                    label = { Text("Tên bộ từ") },
                    singleLine = true
                )
                OutlinedTextField(
                    value = description,
                    onValueChange = { description = it },
                    label = { Text("Mô tả") }
                )
            }
        },
        confirmButton = {
            Button(
                onClick = { onConfirm(name, emoji, description) },
                enabled = name.isNotBlank()
            ) {
                Text("Tạo")
            }
        },
        dismissButton = {
            TextButton(onClick = onDismiss) {
                Text("Hủy")
            }
        }
    )
}

@Composable
fun AddWordDialog(onDismiss: () -> Unit, onConfirm: (String, String, String, String) -> Unit) {
    var term by remember { mutableStateOf("") }
    var meaning by remember { mutableStateOf("") }
    var phonetic by remember { mutableStateOf("") }
    var example by remember { mutableStateOf("") }

    AlertDialog(
        onDismissRequest = onDismiss,
        title = { Text("Thêm từ mới") },
        text = {
            Column(verticalArrangement = Arrangement.spacedBy(8.dp)) {
                OutlinedTextField(
                    value = term,
                    onValueChange = { term = it },
                    label = { Text("Từ tiếng Anh (*)") },
                    singleLine = true
                )
                OutlinedTextField(
                    value = meaning,
                    onValueChange = { meaning = it },
                    label = { Text("Nghĩa tiếng Việt (*)") },
                    singleLine = true
                )
                OutlinedTextField(
                    value = phonetic,
                    onValueChange = { phonetic = it },
                    label = { Text("Phiên âm") },
                    singleLine = true
                )
                OutlinedTextField(
                    value = example,
                    onValueChange = { example = it },
                    label = { Text("Ví dụ") }
                )
            }
        },
        confirmButton = {
            Button(
                onClick = { onConfirm(term, meaning, phonetic, example) },
                enabled = term.isNotBlank() && meaning.isNotBlank()
            ) {
                Text("Thêm")
            }
        },
        dismissButton = {
            TextButton(onClick = onDismiss) {
                Text("Hủy")
            }
        }
    )
}
