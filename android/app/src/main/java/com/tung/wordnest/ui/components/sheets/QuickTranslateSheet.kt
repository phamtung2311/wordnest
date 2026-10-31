package com.tung.wordnest.ui.components.sheets

import androidx.compose.animation.AnimatedVisibility
import androidx.compose.animation.fadeIn
import androidx.compose.animation.fadeOut
import androidx.compose.foundation.BorderStroke
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyRow
import androidx.compose.foundation.lazy.items
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.automirrored.filled.VolumeUp
import androidx.compose.material.icons.filled.ArrowDropDown
import androidx.compose.material.icons.filled.Clear
import androidx.compose.material.icons.filled.ContentPaste
import androidx.compose.material.icons.filled.SyncAlt
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
import com.tung.wordnest.ui.components.core.PrimaryButton
import com.tung.wordnest.ui.components.core.ShimmerSkeletonBox
import com.tung.wordnest.ui.components.core.WordNestFilterChip
import com.tung.wordnest.ui.theme.WordNestTheme

data class TranslateResult(
    val meaning: String,
    val ipa: String? = null,
    val pos: String? = null
)

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun QuickTranslateSheet(
    recentWords: List<String>,
    decks: List<String>,
    isLoading: Boolean = false,
    isOffline: Boolean = false,
    result: TranslateResult? = null,
    onTranslate: (String) -> Unit,
    onSaveToDeck: (deckName: String) -> Unit,
    onPasteClick: () -> Unit,
    onTTSClick: (String) -> Unit,
    onRecentWordClick: (String) -> Unit,
    onDismissRequest: () -> Unit,
    modifier: Modifier = Modifier
) {
    val sheetState = rememberModalBottomSheetState(skipPartiallyExpanded = true)
    
    var inputText by remember { mutableStateOf("") }
    var isEnglishToVietnamese by remember { mutableStateOf(true) }
    var selectedDeck by remember { mutableStateOf(decks.firstOrNull() ?: "") }
    var expandedDeckDropdown by remember { mutableStateOf(false) }

    ModalBottomSheet(
        onDismissRequest = onDismissRequest,
        sheetState = sheetState,
        containerColor = WordNestTheme.colors.surface,
        shape = WordNestTheme.shapes.extraLarge,
        dragHandle = { BottomSheetDefaults.DragHandle() },
        modifier = modifier
    ) {
        Column(
            modifier = Modifier
                .fillMaxWidth()
                .padding(horizontal = 20.dp)
                .padding(bottom = 32.dp)
                .windowInsetsPadding(WindowInsets.navigationBars)
                .imePadding()
        ) {
            // 1. Header (Swap Language)
            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.SpaceBetween,
                verticalAlignment = Alignment.CenterVertically
            ) {
                Text("Dịch nhanh", style = WordNestTheme.typography.headlineMedium, color = WordNestTheme.colors.primaryText)
                
                Surface(
                    onClick = { isEnglishToVietnamese = !isEnglishToVietnamese },
                    shape = WordNestTheme.shapes.extraSmall,
                    color = WordNestTheme.colors.beige100
                ) {
                    Row(
                        modifier = Modifier.padding(horizontal = 12.dp, vertical = 6.dp),
                        verticalAlignment = Alignment.CenterVertically,
                        horizontalArrangement = Arrangement.spacedBy(8.dp)
                    ) {
                        Text(if (isEnglishToVietnamese) "EN" else "VI", style = WordNestTheme.typography.labelMedium, color = WordNestTheme.colors.forest900)
                        Icon(Icons.Default.SyncAlt, contentDescription = "Swap", tint = WordNestTheme.colors.forest900, modifier = Modifier.size(16.dp))
                        Text(if (isEnglishToVietnamese) "VI" else "EN", style = WordNestTheme.typography.labelMedium, color = WordNestTheme.colors.forest900)
                    }
                }
            }
            
            Spacer(modifier = Modifier.height(16.dp))
            
            // 2. Input Area
            OutlinedTextField(
                value = inputText,
                onValueChange = { inputText = it; onTranslate(it) },
                placeholder = { Text("Nhập từ cần dịch...") },
                modifier = Modifier.fillMaxWidth().height(120.dp),
                shape = WordNestTheme.shapes.small,
                colors = OutlinedTextFieldDefaults.colors(
                    unfocusedBorderColor = WordNestTheme.colors.line200,
                    focusedBorderColor = WordNestTheme.colors.forest900
                )
            )
            
            // Quick Actions Bar
            Row(
                modifier = Modifier.fillMaxWidth().padding(vertical = 8.dp),
                horizontalArrangement = Arrangement.End
            ) {
                IconButton(onClick = onPasteClick) {
                    Icon(Icons.Default.ContentPaste, contentDescription = "Paste", tint = WordNestTheme.colors.slate500)
                }
                if (inputText.isNotEmpty()) {
                    IconButton(onClick = { inputText = ""; onTranslate("") }) {
                        Icon(Icons.Default.Clear, contentDescription = "Clear", tint = WordNestTheme.colors.slate500)
                    }
                    IconButton(onClick = { onTTSClick(inputText) }) {
                        Icon(Icons.AutoMirrored.Filled.VolumeUp, contentDescription = "TTS", tint = WordNestTheme.colors.forest900)
                    }
                }
            }

            // 3. Result Area
            AnimatedVisibility(
                visible = inputText.isNotEmpty(),
                enter = fadeIn(),
                exit = fadeOut()
            ) {
                Surface(
                    shape = WordNestTheme.shapes.small,
                    color = WordNestTheme.colors.beige100,
                    modifier = Modifier.fillMaxWidth()
                ) {
                    Box(modifier = Modifier.padding(16.dp).defaultMinSize(minHeight = 100.dp)) {
                        when {
                            isOffline -> {
                                Text("Lỗi kết nối mạng. Không thể dịch trực tuyến.", color = WordNestTheme.colors.error600, style = WordNestTheme.typography.bodyMedium)
                            }
                            isLoading -> {
                                Column(verticalArrangement = Arrangement.spacedBy(8.dp)) {
                                    ShimmerSkeletonBox(modifier = Modifier.width(120.dp).height(24.dp))
                                    ShimmerSkeletonBox(modifier = Modifier.fillMaxWidth().height(20.dp))
                                    ShimmerSkeletonBox(modifier = Modifier.fillMaxWidth(0.7f).height(20.dp))
                                }
                            }
                            result != null -> {
                                Column {
                                    Row(verticalAlignment = Alignment.Bottom) {
                                        if (result.pos != null) {
                                            WordNestFilterChip(text = result.pos, selected = false, onClick = {})
                                            Spacer(modifier = Modifier.width(8.dp))
                                        }
                                        if (result.ipa != null) {
                                            Text(result.ipa, style = WordNestTheme.typography.labelMedium, color = WordNestTheme.colors.slate500, modifier = Modifier.padding(bottom = 2.dp))
                                        }
                                    }
                                    Spacer(modifier = Modifier.height(12.dp))
                                    Text(result.meaning, style = WordNestTheme.typography.headlineMedium.copy(fontSize = 20.sp), color = WordNestTheme.colors.ink900)
                                    
                                    Spacer(modifier = Modifier.height(20.dp))
                                    
                                    // Save Action
                                    Row(
                                        modifier = Modifier.fillMaxWidth(),
                                        horizontalArrangement = Arrangement.spacedBy(8.dp),
                                        verticalAlignment = Alignment.CenterVertically
                                    ) {
                                        Box(modifier = Modifier.weight(1f)) {
                                            Surface(
                                                shape = WordNestTheme.shapes.small,
                                                border = BorderStroke(1.dp, WordNestTheme.colors.line200),
                                                color = WordNestTheme.colors.surfaceWhite,
                                                onClick = { expandedDeckDropdown = true },
                                                modifier = Modifier.fillMaxWidth().height(48.dp)
                                            ) {
                                                Row(
                                                    modifier = Modifier.padding(horizontal = 12.dp),
                                                    verticalAlignment = Alignment.CenterVertically,
                                                    horizontalArrangement = Arrangement.SpaceBetween
                                                ) {
                                                    Text(selectedDeck, style = WordNestTheme.typography.bodyMedium, color = WordNestTheme.colors.ink900, maxLines = 1)
                                                    Icon(Icons.Default.ArrowDropDown, contentDescription = null, tint = WordNestTheme.colors.slate500)
                                                }
                                            }
                                            DropdownMenu(
                                                expanded = expandedDeckDropdown,
                                                onDismissRequest = { expandedDeckDropdown = false }
                                            ) {
                                                decks.forEach { deck ->
                                                    DropdownMenuItem(
                                                        text = { Text(deck) },
                                                        onClick = { selectedDeck = deck; expandedDeckDropdown = false }
                                                    )
                                                }
                                            }
                                        }
                                        
                                        PrimaryButton(text = "Lưu vào bộ", onClick = { onSaveToDeck(selectedDeck) }, modifier = Modifier.weight(1f))
                                    }
                                }
                            }
                        }
                    }
                }
            }
            
            // 4. Recent Searches
            if (inputText.isEmpty() && recentWords.isNotEmpty()) {
                Spacer(modifier = Modifier.height(16.dp))
                Text("Gần đây", style = WordNestTheme.typography.labelSmall, color = WordNestTheme.colors.slate500)
                Spacer(modifier = Modifier.height(8.dp))
                LazyRow(horizontalArrangement = Arrangement.spacedBy(8.dp)) {
                    items(recentWords) { word ->
                        Surface(
                            onClick = { inputText = word; onTranslate(word); onRecentWordClick(word) },
                            shape = WordNestTheme.shapes.small,
                            color = WordNestTheme.colors.surface,
                            border = BorderStroke(1.dp, WordNestTheme.colors.line200)
                        ) {
                            Text(word, style = WordNestTheme.typography.bodyMedium, color = WordNestTheme.colors.ink900, modifier = Modifier.padding(horizontal = 12.dp, vertical = 6.dp))
                        }
                    }
                }
            }
        }
    }
}

@Preview(showBackground = true)
@Composable
fun QuickTranslateSheetPreview() {
    WordNestTheme {
        QuickTranslateSheet(
            recentWords = listOf("Serendipity", "Ephemeral", "Meticulous", "Cognitive"),
            decks = listOf("IELTS Vocabulary", "TOEIC Part 5"),
            isLoading = false,
            result = TranslateResult("Sự tình cờ may mắn", "/ˌser.ənˈdɪp.ə.ti/", "n"),
            onTranslate = {},
            onSaveToDeck = {},
            onPasteClick = {},
            onTTSClick = {},
            onRecentWordClick = {},
            onDismissRequest = {}
        )
    }
}
