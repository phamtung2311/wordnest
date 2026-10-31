package com.tung.wordnest.ui.navigation

import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Home
import androidx.compose.material.icons.filled.LibraryBooks
import androidx.compose.material.icons.filled.Person
import androidx.compose.material.icons.filled.School
import androidx.compose.ui.graphics.vector.ImageVector

object WordNestRoutes {
    const val SPLASH = "splash"
    const val ONBOARDING = "onboarding"
    const val AUTH = "auth"
    const val LIFE = "life"

    const val HOME = "home"
    const val DECKS = "decks"
    const val TOEIC = "toeic"
    const val ME = "me"

    const val HISTORY = "history"
    const val SETTINGS = "settings"

    // Dynamic routes
    fun deckDetail(deckId: String) = "deck/$deckId"
    fun wordDetail(wordId: String) = "word/$wordId"
    fun study(deckId: String) = "study/$deckId"
    fun toeicReading(testId: String) = "toeic/reading/$testId"
    fun toeicListening(testId: String) = "toeic/listening/$testId"
    fun toeicIntensive(testId: String) = "toeic/intensive/$testId"

    fun shouldShowAppShell(currentRoute: String?): Boolean {
        if (currentRoute == null) return true
        
        // Return false for full-screen modes
        if (currentRoute in listOf(SPLASH, ONBOARDING, AUTH)) return false
        
        // Return false for focus modes (study, toeic testing)
        // Hidden TopBar, BottomBar and QuickDock
        return !currentRoute.startsWith("study/") &&
               !currentRoute.startsWith("toeic/reading/") &&
               !currentRoute.startsWith("toeic/listening/") &&
               !currentRoute.startsWith("toeic/intensive/")
    }
}

data class BottomNavItem(
    val route: String,
    val title: String,
    val icon: ImageVector,
    val hasBadge: Boolean = false,
    val badgeCount: Int = 0
)

val MainBottomNavItems = listOf(
    BottomNavItem(
        route = WordNestRoutes.HOME,
        title = "Trang chủ",
        icon = Icons.Default.Home
    ),
    BottomNavItem(
        route = WordNestRoutes.DECKS,
        title = "Bộ từ",
        icon = Icons.Default.LibraryBooks,
        hasBadge = true,
        badgeCount = 12 // Mẫu 12 từ cần ôn
    ),
    BottomNavItem(
        route = WordNestRoutes.TOEIC,
        title = "Luyện thi",
        icon = Icons.Default.School
    ),
    BottomNavItem(
        route = WordNestRoutes.ME,
        title = "Tôi",
        icon = Icons.Default.Person
    )
)
