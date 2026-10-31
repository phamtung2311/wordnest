package com.tung.wordnest.ui.navigation

import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.tooling.preview.Preview
import com.tung.wordnest.ui.theme.WordNestTheme

@Composable
fun WordNestAppShell(
    currentRoute: String?,
    onNavigate: (String) -> Unit,
    onOpenTimerSheet: () -> Unit,
    modifier: Modifier = Modifier,
    isScrollInProgress: Boolean = false, // Hỗ trợ ẩn FAB khi cuộn
    overrideMainFab: @Composable (() -> Unit)? = null, // Nếu màn hình có FAB riêng, gộp hoặc vô hiệu hóa Dock
    content: @Composable () -> Unit
) {
    val showAppShell = WordNestRoutes.shouldShowAppShell(currentRoute)
    
    // QuickActionDock State
    var isDockExpanded by remember { mutableStateOf(false) }
    
    // Logic: Nếu màn hình có FAB riêng (overrideMainFab != null) thì ẩn Dock gốc để tránh xung đột
    val shouldShowQuickDock = overrideMainFab == null && !isScrollInProgress

    if (showAppShell) {
        Box(modifier = modifier.fillMaxSize()) {
            Scaffold(
                topBar = {
                    WordNestTopBar(
                        onOpenTimerSheet = onOpenTimerSheet,
                        onNavigateToHistory = { onNavigate(WordNestRoutes.HISTORY) },
                        onNavigateToMe = { onNavigate(WordNestRoutes.ME) }
                    )
                },
                bottomBar = {
                    WordNestBottomBar(
                        currentRoute = currentRoute,
                        onNavigate = onNavigate
                    )
                },
                floatingActionButton = {
                    // Hiển thị FAB gốc (ví dụ "+ Tạo bộ mới") nếu có
                    if (overrideMainFab != null && !isDockExpanded) {
                        overrideMainFab()
                    }
                },
                containerColor = WordNestTheme.colors.background
            ) { innerPadding ->
                Box(modifier = Modifier.padding(innerPadding).fillMaxSize()) {
                    content()
                }
            }

            // QuickActionDock nằm đè lên trên Scaffold để Scrim có thể phủ kín toàn màn hình (kể cả TopBar/BottomBar)
            if (overrideMainFab == null) {
                QuickActionDock(
                    isExpanded = isDockExpanded,
                    isVisible = shouldShowQuickDock,
                    onToggle = { isDockExpanded = !isDockExpanded },
                    onActionSelected = { action ->
                        // Xử lý logic khi chọn action trong Dock
                        isDockExpanded = false
                    }
                )
            }
        }
    } else {
        // Chế độ Focus: Không hiển thị TopBar, BottomBar, QuickDock
        Box(modifier = modifier.fillMaxSize()) {
            content()
        }
    }
}

@Preview(showBackground = true, name = "App Shell - Default")
@Composable
fun WordNestAppShellPreview() {
    WordNestTheme {
        WordNestAppShell(
            currentRoute = WordNestRoutes.HOME,
            onNavigate = {},
            onOpenTimerSheet = {}
        ) {
            Box(modifier = Modifier.fillMaxSize(), contentAlignment = Alignment.Center) {
                Text(text = "Nội dung màn hình Trang chủ", style = WordNestTheme.typography.bodyMedium)
            }
        }
    }
}

@Preview(showBackground = true, name = "App Shell - Dock Expanded")
@Composable
fun WordNestAppShellExpandedPreview() {
    WordNestTheme {
        WordNestAppShell(
            currentRoute = WordNestRoutes.DECKS,
            onNavigate = {},
            onOpenTimerSheet = {}
        ) {
            Box(modifier = Modifier.fillMaxSize(), contentAlignment = Alignment.Center) {
                Text(text = "Nội dung màn hình Bộ từ", style = WordNestTheme.typography.bodyMedium)
            }
        }
    }
}
