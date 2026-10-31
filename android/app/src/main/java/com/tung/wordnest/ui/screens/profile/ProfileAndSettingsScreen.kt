package com.tung.wordnest.ui.screens.profile

import androidx.compose.foundation.BorderStroke
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.automirrored.filled.ArrowForwardIos
import androidx.compose.material.icons.filled.AccountCircle
import androidx.compose.material.icons.filled.CheckCircle
import androidx.compose.material.icons.filled.CloudOff
import androidx.compose.material.icons.filled.Error
import androidx.compose.material.icons.filled.Sync
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import com.tung.wordnest.ui.components.core.OutlinedWordNestButton
import com.tung.wordnest.ui.components.core.PrimaryButton
import com.tung.wordnest.ui.theme.WordNestTheme

// ==========================================
// MODELS
// ==========================================
enum class SyncStatus { SYNCED, SYNCING, NOT_SYNCED, ERROR }

data class UserProfileUiModel(
    val name: String,
    val email: String?,
    val isGuest: Boolean,
    val avatarUrl: String? = null
)

data class UserSettingsUiModel(
    val dailyGoalMinutes: Int,
    val reminderDaily: Boolean,
    val reminderStreak: Boolean,
    val reminderDueWords: Boolean,
    val themeMode: String, // "Light", "Dark", "System"
    val dockPosition: String, // "Right", "Left"
    val autoPronounce: Boolean,
    val ttsVoice: String, // "US", "UK"
    val hapticFeedback: Boolean,
    val swipeGestures: Boolean
)

data class ProfileUiState(
    val user: UserProfileUiModel,
    val syncStatus: SyncStatus,
    val thisWeekMinutes: Int,
    val settings: UserSettingsUiModel
)

// ==========================================
// SCREEN
// ==========================================
@Composable
fun ProfileAndSettingsScreen(
    state: ProfileUiState,
    onLinkGoogleClick: () -> Unit,
    onSyncNowClick: () -> Unit,
    onOpenHistoryClick: () -> Unit,
    onSettingsChange: (UserSettingsUiModel) -> Unit,
    onExportDataClick: () -> Unit,
    onClearCacheClick: () -> Unit,
    onLogoutClick: () -> Unit,
    onDeleteAccountClick: () -> Unit,
    modifier: Modifier = Modifier
) {
    LazyColumn(
        modifier = modifier
            .fillMaxSize()
            .background(WordNestTheme.colors.background),
        contentPadding = PaddingValues(16.dp),
        verticalArrangement = Arrangement.spacedBy(24.dp)
    ) {
        // 1. Profile & Sync Card
        item {
            ProfileCard(
                user = state.user,
                syncStatus = state.syncStatus,
                onLinkGoogleClick = onLinkGoogleClick,
                onSyncNowClick = onSyncNowClick
            )
        }

        // 2. History Summary
        item {
            HistorySummaryCard(
                thisWeekMinutes = state.thisWeekMinutes,
                onClick = onOpenHistoryClick
            )
        }

        // 3. Settings Sections
        item {
            SettingsGroup(title = "Mục tiêu & Nhắc nhở") {
                SettingClickableRow(
                    label = "Mục tiêu học mỗi ngày",
                    value = "${state.settings.dailyGoalMinutes} phút",
                    onClick = { /* Open Dialog logic */ }
                )
                SettingSwitchRow(
                    label = "Nhắc nhở học hàng ngày",
                    checked = state.settings.reminderDaily,
                    onCheckedChange = { onSettingsChange(state.settings.copy(reminderDaily = it)) }
                )
                SettingSwitchRow(
                    label = "Nhắc nhở giữ chuỗi (Streak)",
                    checked = state.settings.reminderStreak,
                    onCheckedChange = { onSettingsChange(state.settings.copy(reminderStreak = it)) }
                )
                SettingSwitchRow(
                    label = "Nhắc ôn từ đến hạn",
                    checked = state.settings.reminderDueWords,
                    onCheckedChange = { onSettingsChange(state.settings.copy(reminderDueWords = it)) }
                )
            }
        }

        item {
            SettingsGroup(title = "Giao diện & Hiển thị") {
                SettingClickableRow(
                    label = "Giao diện",
                    value = state.settings.themeMode,
                    onClick = { /* Open selection sheet */ }
                )
                SettingClickableRow(
                    label = "Vị trí Quick Dock",
                    value = state.settings.dockPosition,
                    onClick = { /* Open selection sheet */ }
                )
            }
        }

        item {
            SettingsGroup(title = "Tùy chọn Học tập") {
                SettingSwitchRow(
                    label = "Tự động phát âm khi lật thẻ",
                    checked = state.settings.autoPronounce,
                    onCheckedChange = { onSettingsChange(state.settings.copy(autoPronounce = it)) }
                )
                SettingClickableRow(
                    label = "Giọng đọc (TTS)",
                    value = state.settings.ttsVoice,
                    onClick = { /* Open selection sheet */ }
                )
                SettingSwitchRow(
                    label = "Rung phản hồi (Haptic)",
                    checked = state.settings.hapticFeedback,
                    onCheckedChange = { onSettingsChange(state.settings.copy(hapticFeedback = it)) }
                )
                SettingSwitchRow(
                    label = "Cử chỉ vuốt Flashcard",
                    checked = state.settings.swipeGestures,
                    onCheckedChange = { onSettingsChange(state.settings.copy(swipeGestures = it)) }
                )
            }
        }

        item {
            SettingsGroup(title = "Dữ liệu & Tài khoản") {
                SettingActionRow(label = "Xuất dữ liệu", onClick = onExportDataClick)
                SettingActionRow(label = "Xóa bộ nhớ đệm", onClick = onClearCacheClick)
                
                Spacer(modifier = Modifier.height(8.dp))
                HorizontalDivider(color = WordNestTheme.colors.line200)
                Spacer(modifier = Modifier.height(8.dp))

                SettingActionRow(
                    label = if (state.user.isGuest) "Đăng nhập" else "Đăng xuất", 
                    onClick = onLogoutClick
                )
                if (!state.user.isGuest) {
                    SettingActionRow(
                        label = "Xóa tài khoản", 
                        onClick = onDeleteAccountClick,
                        isDestructive = true
                    )
                }
            }
        }
        
        item { Spacer(modifier = Modifier.height(80.dp)) } // Safe space for bottom bar
    }
}

// ==========================================
// COMPONENTS
// ==========================================
@Composable
private fun ProfileCard(
    user: UserProfileUiModel,
    syncStatus: SyncStatus,
    onLinkGoogleClick: () -> Unit,
    onSyncNowClick: () -> Unit
) {
    Surface(
        shape = WordNestTheme.shapes.medium, // 20.dp
        color = WordNestTheme.colors.surface,
        border = BorderStroke(1.dp, WordNestTheme.colors.line200),
        modifier = Modifier.fillMaxWidth()
    ) {
        Column(modifier = Modifier.padding(16.dp)) {
            // Header Info
            Row(verticalAlignment = Alignment.CenterVertically) {
                Box(
                    modifier = Modifier
                        .size(56.dp)
                        .clip(CircleShape)
                        .background(WordNestTheme.colors.line200),
                    contentAlignment = Alignment.Center
                ) {
                    Icon(Icons.Default.AccountCircle, contentDescription = null, tint = WordNestTheme.colors.slate400, modifier = Modifier.size(40.dp))
                }
                Spacer(modifier = Modifier.width(16.dp))
                Column {
                    Text(
                        text = if (user.isGuest) "Chế độ Khách" else user.name,
                        style = WordNestTheme.typography.headlineMedium,
                        color = WordNestTheme.colors.ink900
                    )
                    Text(
                        text = if (user.isGuest) "Dữ liệu lưu trên máy" else user.email ?: "",
                        style = WordNestTheme.typography.bodyMedium,
                        color = WordNestTheme.colors.slate500
                    )
                }
            }
            
            if (user.isGuest) {
                Spacer(modifier = Modifier.height(16.dp))
                PrimaryButton(
                    text = "Liên kết tài khoản Google",
                    onClick = onLinkGoogleClick,
                    modifier = Modifier.fillMaxWidth()
                )
            }
            
            Spacer(modifier = Modifier.height(16.dp))
            HorizontalDivider(color = WordNestTheme.colors.line200)
            Spacer(modifier = Modifier.height(12.dp))
            
            // Sync Status
            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.SpaceBetween,
                verticalAlignment = Alignment.CenterVertically
            ) {
                val (icon, color, text) = when (syncStatus) {
                    SyncStatus.SYNCED -> Triple(Icons.Default.CheckCircle, WordNestTheme.colors.mint500, "Đã đồng bộ")
                    SyncStatus.SYNCING -> Triple(Icons.Default.Sync, WordNestTheme.colors.amber500, "Đang đồng bộ...")
                    SyncStatus.NOT_SYNCED -> Triple(Icons.Default.CloudOff, WordNestTheme.colors.slate500, "Chưa đồng bộ")
                    SyncStatus.ERROR -> Triple(Icons.Default.Error, WordNestTheme.colors.error600, "Lỗi đồng bộ")
                }
                
                Row(verticalAlignment = Alignment.CenterVertically, horizontalArrangement = Arrangement.spacedBy(8.dp)) {
                    Icon(imageVector = icon, contentDescription = null, tint = color, modifier = Modifier.size(18.dp))
                    Text(text = text, style = WordNestTheme.typography.labelMedium, color = color)
                }
                
                if (syncStatus != SyncStatus.SYNCING) {
                    TextButton(onClick = onSyncNowClick, contentPadding = PaddingValues(0.dp)) {
                        Text("Đồng bộ ngay", style = WordNestTheme.typography.labelMedium.copy(fontWeight = FontWeight.Bold), color = WordNestTheme.colors.forest900)
                    }
                }
            }
        }
    }
}

@Composable
private fun HistorySummaryCard(
    thisWeekMinutes: Int,
    onClick: () -> Unit
) {
    Surface(
        onClick = onClick,
        shape = WordNestTheme.shapes.medium,
        color = WordNestTheme.colors.forest900,
        modifier = Modifier.fillMaxWidth()
    ) {
        Row(
            modifier = Modifier.padding(16.dp),
            verticalAlignment = Alignment.CenterVertically,
            horizontalArrangement = Arrangement.SpaceBetween
        ) {
            Column {
                Text("Lịch sử học tập", style = WordNestTheme.typography.titleMedium, color = WordNestTheme.colors.surfaceWhite)
                Spacer(modifier = Modifier.height(4.dp))
                Row(verticalAlignment = Alignment.Bottom) {
                    Text(
                        text = thisWeekMinutes.toString(),
                        style = WordNestTheme.typography.displayLarge,
                        color = WordNestTheme.colors.amber400
                    )
                    Text(
                        text = " phút tuần này",
                        style = WordNestTheme.typography.labelMedium,
                        color = WordNestTheme.colors.amberTint,
                        modifier = Modifier.padding(bottom = 6.dp, start = 4.dp)
                    )
                }
            }
            Box(
                modifier = Modifier.size(40.dp).clip(CircleShape).background(WordNestTheme.colors.surfaceWhite.copy(alpha = 0.15f)),
                contentAlignment = Alignment.Center
            ) {
                Icon(Icons.AutoMirrored.Filled.ArrowForwardIos, contentDescription = null, tint = WordNestTheme.colors.surfaceWhite, modifier = Modifier.size(18.dp))
            }
        }
    }
}

@Composable
private fun SettingsGroup(title: String, content: @Composable ColumnScope.() -> Unit) {
    Column(modifier = Modifier.fillMaxWidth()) {
        Text(
            text = title,
            style = WordNestTheme.typography.titleMedium,
            color = WordNestTheme.colors.ink900,
            modifier = Modifier.padding(bottom = 12.dp)
        )
        Surface(
            shape = WordNestTheme.shapes.medium,
            color = WordNestTheme.colors.surface,
            border = BorderStroke(1.dp, WordNestTheme.colors.line200),
            modifier = Modifier.fillMaxWidth()
        ) {
            Column(modifier = Modifier.padding(vertical = 8.dp)) {
                content()
            }
        }
    }
}

@Composable
private fun SettingClickableRow(label: String, value: String, onClick: () -> Unit) {
    Row(
        modifier = Modifier.fillMaxWidth().clickable(onClick = onClick).padding(horizontal = 16.dp, vertical = 12.dp),
        horizontalArrangement = Arrangement.SpaceBetween,
        verticalAlignment = Alignment.CenterVertically
    ) {
        Text(label, style = WordNestTheme.typography.bodyMedium, color = WordNestTheme.colors.ink900)
        Row(verticalAlignment = Alignment.CenterVertically, horizontalArrangement = Arrangement.spacedBy(8.dp)) {
            Text(value, style = WordNestTheme.typography.labelMedium, color = WordNestTheme.colors.slate500)
            Icon(Icons.AutoMirrored.Filled.ArrowForwardIos, contentDescription = null, tint = WordNestTheme.colors.slate400, modifier = Modifier.size(14.dp))
        }
    }
}

@Composable
private fun SettingSwitchRow(label: String, checked: Boolean, onCheckedChange: (Boolean) -> Unit) {
    Row(
        modifier = Modifier.fillMaxWidth().clickable { onCheckedChange(!checked) }.padding(horizontal = 16.dp, vertical = 8.dp),
        horizontalArrangement = Arrangement.SpaceBetween,
        verticalAlignment = Alignment.CenterVertically
    ) {
        Text(label, style = WordNestTheme.typography.bodyMedium, color = WordNestTheme.colors.ink900)
        Switch(
            checked = checked,
            onCheckedChange = onCheckedChange,
            colors = SwitchDefaults.colors(
                checkedThumbColor = WordNestTheme.colors.surfaceWhite,
                checkedTrackColor = WordNestTheme.colors.mint500,
                uncheckedThumbColor = WordNestTheme.colors.slate400,
                uncheckedTrackColor = WordNestTheme.colors.line200
            )
        )
    }
}

@Composable
private fun SettingActionRow(label: String, onClick: () -> Unit, isDestructive: Boolean = false) {
    Row(
        modifier = Modifier.fillMaxWidth().clickable(onClick = onClick).padding(horizontal = 16.dp, vertical = 14.dp),
        verticalAlignment = Alignment.CenterVertically
    ) {
        Text(
            text = label,
            style = WordNestTheme.typography.bodyMedium,
            color = if (isDestructive) WordNestTheme.colors.error600 else WordNestTheme.colors.ink900
        )
    }
}

// ==========================================
// PREVIEWS
// ==========================================
val defaultSettings = UserSettingsUiModel(
    dailyGoalMinutes = 30,
    reminderDaily = true,
    reminderStreak = true,
    reminderDueWords = false,
    themeMode = "System",
    dockPosition = "Right",
    autoPronounce = true,
    ttsVoice = "US",
    hapticFeedback = true,
    swipeGestures = true
)

@Preview(showBackground = true, name = "Guest Profile")
@Composable
fun ProfileScreenGuestPreview() {
    WordNestTheme {
        ProfileAndSettingsScreen(
            state = ProfileUiState(
                user = UserProfileUiModel("Guest", null, true),
                syncStatus = SyncStatus.NOT_SYNCED,
                thisWeekMinutes = 45,
                settings = defaultSettings
            ),
            onLinkGoogleClick = {}, onSyncNowClick = {}, onOpenHistoryClick = {}, onSettingsChange = {},
            onExportDataClick = {}, onClearCacheClick = {}, onLogoutClick = {}, onDeleteAccountClick = {}
        )
    }
}

@Preview(showBackground = true, name = "Logged In Profile")
@Composable
fun ProfileScreenLoggedInPreview() {
    WordNestTheme {
        ProfileAndSettingsScreen(
            state = ProfileUiState(
                user = UserProfileUiModel("Tung Nguyen", "tung.nguyen@email.com", false),
                syncStatus = SyncStatus.SYNCED,
                thisWeekMinutes = 120,
                settings = defaultSettings.copy(themeMode = "Dark")
            ),
            onLinkGoogleClick = {}, onSyncNowClick = {}, onOpenHistoryClick = {}, onSettingsChange = {},
            onExportDataClick = {}, onClearCacheClick = {}, onLogoutClick = {}, onDeleteAccountClick = {}
        )
    }
}
