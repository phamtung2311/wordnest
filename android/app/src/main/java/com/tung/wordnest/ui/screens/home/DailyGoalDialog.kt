package com.tung.wordnest.ui.screens.home

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.ExperimentalLayoutApi
import androidx.compose.foundation.layout.FlowRow
import androidx.compose.material3.AlertDialog
import androidx.compose.material3.Button
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.FilterChip
import androidx.compose.material3.FilterChipDefaults
import androidx.compose.material3.Text
import androidx.compose.material3.TextButton
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableIntStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.unit.dp
import com.tung.wordnest.ui.theme.WordNestTheme

@OptIn(ExperimentalLayoutApi::class)
@Composable
fun DailyGoalDialog(
    currentMinutes: Int,
    onDismiss: () -> Unit,
    onConfirm: (Int) -> Unit
) {
    var selectedMinutes by remember { mutableIntStateOf(currentMinutes.takeIf { it > 0 } ?: 15) }
    val presets = listOf(15, 30, 45, 60, 90, 120)

    AlertDialog(
        onDismissRequest = onDismiss,
        title = {
            Text(
                text = "Mục tiêu học mỗi ngày",
                style = WordNestTheme.typography.titleMedium,
                color = WordNestTheme.colors.forest900
            )
        },
        text = {
            Column(verticalArrangement = Arrangement.spacedBy(16.dp)) {
                Text(
                    text = "Duy trì thói quen học tập đều đặn giúp bạn ghi nhớ từ vựng lâu hơn gấp 3 lần.",
                    style = WordNestTheme.typography.bodySmall,
                    color = WordNestTheme.colors.slate500
                )
                FlowRow(
                    horizontalArrangement = Arrangement.spacedBy(8.dp),
                    verticalArrangement = Arrangement.spacedBy(8.dp)
                ) {
                    presets.forEach { mins ->
                        FilterChip(
                            selected = selectedMinutes == mins,
                            onClick = { selectedMinutes = mins },
                            label = { Text("$mins phút") },
                            colors = FilterChipDefaults.filterChipColors(
                                selectedContainerColor = WordNestTheme.colors.amber400,
                                selectedLabelColor = WordNestTheme.colors.forest900
                            )
                        )
                    }
                }
            }
        },
        confirmButton = {
            Button(
                onClick = { onConfirm(selectedMinutes) },
                colors = ButtonDefaults.buttonColors(
                    containerColor = WordNestTheme.colors.forest900,
                    contentColor = WordNestTheme.colors.amber400
                )
            ) {
                Text("Lưu mục tiêu")
            }
        },
        dismissButton = {
            TextButton(onClick = onDismiss) {
                Text("Hủy", color = WordNestTheme.colors.slate500)
            }
        },
        containerColor = WordNestTheme.colors.surfaceWhite,
        shape = WordNestTheme.shapes.medium
    )
}

