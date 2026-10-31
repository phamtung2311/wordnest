package com.tung.wordnest.ui.components.sheets

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Info
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.tung.wordnest.ui.components.core.OutlinedWordNestButton
import com.tung.wordnest.ui.components.core.PrimaryButton
import com.tung.wordnest.ui.components.core.WordNestProgressBar
import com.tung.wordnest.ui.theme.TimerMonoStyle
import com.tung.wordnest.ui.theme.WordNestTheme

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun StudyTimerSheet(
    timeString: String,
    isPaused: Boolean,
    progress: Float,
    todayMinutes: Int,
    goalMinutes: Int,
    onTogglePause: () -> Unit,
    onEndSession: () -> Unit,
    onDismissRequest: () -> Unit,
    modifier: Modifier = Modifier
) {
    val sheetState = rememberModalBottomSheetState(skipPartiallyExpanded = true)

    ModalBottomSheet(
        onDismissRequest = onDismissRequest,
        sheetState = sheetState,
        containerColor = WordNestTheme.colors.surface,
        shape = WordNestTheme.shapes.extraLarge, // 28.dp
        dragHandle = { BottomSheetDefaults.DragHandle() },
        modifier = modifier
    ) {
        Column(
            modifier = Modifier
                .fillMaxWidth()
                .padding(horizontal = 24.dp)
                .padding(bottom = 32.dp)
                .windowInsetsPadding(WindowInsets.navigationBars)
                .imePadding(),
            horizontalAlignment = Alignment.CenterHorizontally
        ) {
            // 1. Status Pill
            val pillColor = if (isPaused) WordNestTheme.colors.amberTint else WordNestTheme.colors.mint500.copy(alpha = 0.15f)
            val pillTextColor = if (isPaused) WordNestTheme.colors.amber500 else WordNestTheme.colors.mint500
            val pillText = if (isPaused) "Đang tạm dừng" else "Đang ghi nhận thời gian học"

            Box(
                modifier = Modifier
                    .clip(CircleShape)
                    .background(pillColor)
                    .padding(horizontal = 16.dp, vertical = 6.dp)
            ) {
                Text(
                    text = pillText,
                    style = WordNestTheme.typography.labelMedium,
                    color = pillTextColor
                )
            }

            Spacer(modifier = Modifier.height(24.dp))

            // 2. Large Clock
            Text(
                text = timeString,
                style = TimerMonoStyle.copy(fontSize = 48.sp, lineHeight = 56.sp),
                color = WordNestTheme.colors.ink900
            )

            Spacer(modifier = Modifier.height(32.dp))

            // 3. Goal Progress
            Column(modifier = Modifier.fillMaxWidth()) {
                Row(
                    modifier = Modifier.fillMaxWidth(),
                    horizontalArrangement = Arrangement.SpaceBetween
                ) {
                    Text("Mục tiêu hôm nay", style = WordNestTheme.typography.labelMedium, color = WordNestTheme.colors.slate500)
                    Text("$todayMinutes / $goalMinutes phút", style = WordNestTheme.typography.labelMedium, color = WordNestTheme.colors.forest900)
                }
                Spacer(modifier = Modifier.height(8.dp))
                WordNestProgressBar(progress = progress, height = 8.dp)
            }

            Spacer(modifier = Modifier.height(32.dp))

            // 4. Controls
            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.spacedBy(16.dp)
            ) {
                OutlinedWordNestButton(
                    text = "Kết thúc",
                    onClick = onEndSession,
                    modifier = Modifier.weight(1f)
                )
                
                PrimaryButton(
                    text = if (isPaused) "Tiếp tục" else "Tạm dừng",
                    onClick = onTogglePause,
                    modifier = Modifier.weight(1f)
                )
            }

            Spacer(modifier = Modifier.height(24.dp))

            // 5. Info Note
            Surface(
                color = WordNestTheme.colors.beige100,
                shape = WordNestTheme.shapes.small,
                modifier = Modifier.fillMaxWidth()
            ) {
                Row(
                    modifier = Modifier.padding(12.dp),
                    verticalAlignment = Alignment.Top,
                    horizontalArrangement = Arrangement.spacedBy(8.dp)
                ) {
                    Icon(Icons.Default.Info, contentDescription = null, tint = WordNestTheme.colors.slate500, modifier = Modifier.size(16.dp))
                    Text(
                        text = "Tự động tạm dừng khi bạn thoát ứng dụng hoặc không có tương tác nào trong vòng 5 phút.",
                        style = WordNestTheme.typography.labelSmall,
                        color = WordNestTheme.colors.slate500,
                        textAlign = TextAlign.Start
                    )
                }
            }
        }
    }
}

@Preview(showBackground = true)
@Composable
fun StudyTimerSheetPreview() {
    WordNestTheme {
        StudyTimerSheet(
            timeString = "00:15:42",
            isPaused = false,
            progress = 0.65f,
            todayMinutes = 15,
            goalMinutes = 30,
            onTogglePause = {},
            onEndSession = {},
            onDismissRequest = {}
        )
    }
}
