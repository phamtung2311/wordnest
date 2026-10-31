package com.tung.wordnest.ui.navigation

import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.ui.Modifier
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.compose.currentBackStackEntryAsState
import androidx.navigation.compose.rememberNavController
import com.tung.wordnest.ui.screens.decks.DeckListScreen
import com.tung.wordnest.ui.screens.home.HomeUiState
import com.tung.wordnest.ui.screens.home.HomeScreen
import com.tung.wordnest.ui.screens.life.LifeTopicUiModel
import com.tung.wordnest.ui.screens.life.LifeTopicsScreen
import com.tung.wordnest.ui.screens.onboarding.AuthScreen
import com.tung.wordnest.ui.screens.onboarding.OnboardingPagerScreen
import com.tung.wordnest.ui.screens.onboarding.SplashView
import com.tung.wordnest.ui.screens.profile.ProfileAndSettingsScreen
import com.tung.wordnest.ui.screens.profile.ProfileUiState
import com.tung.wordnest.ui.screens.profile.SyncStatus
import com.tung.wordnest.ui.screens.profile.UserProfileUiModel
import com.tung.wordnest.ui.screens.profile.UserSettingsUiModel
import com.tung.wordnest.ui.screens.toeic.ToeicHubScreen
import com.tung.wordnest.ui.screens.toeic.ToeicHubUiState
import com.tung.wordnest.ui.theme.WordNestTheme
import androidx.compose.ui.graphics.Color

@Composable
fun WordNestNavGraph(modifier: Modifier = Modifier) {
    val navController = rememberNavController()
    val navBackStackEntry by navController.currentBackStackEntryAsState()
    val currentRoute = navBackStackEntry?.destination?.route

    WordNestAppShell(
        currentRoute = currentRoute,
        onNavigate = { route -> 
            navController.navigate(route) {
                popUpTo(WordNestRoutes.HOME) { saveState = true }
                launchSingleTop = true
                restoreState = true
            }
        },
        onOpenTimerSheet = { /* Mở Timer Sheet logic */ },
        modifier = modifier
    ) {
        NavHost(
            navController = navController,
            startDestination = WordNestRoutes.SPLASH
        ) {
            composable(WordNestRoutes.SPLASH) {
                SplashView(onSplashComplete = {
                    navController.navigate(WordNestRoutes.ONBOARDING) {
                        popUpTo(WordNestRoutes.SPLASH) { inclusive = true }
                    }
                })
            }

            composable(WordNestRoutes.ONBOARDING) {
                OnboardingPagerScreen(
                    onFinishOnboarding = {
                        navController.navigate(WordNestRoutes.AUTH) {
                            popUpTo(WordNestRoutes.ONBOARDING) { inclusive = true }
                        }
                    }
                )
            }

            composable(WordNestRoutes.AUTH) {
                AuthScreen(
                    isNetworkError = false,
                    onGoogleSignInClick = { 
                        navController.navigate(WordNestRoutes.HOME) {
                            popUpTo(WordNestRoutes.AUTH) { inclusive = true }
                        }
                    },
                    onGuestModeClick = {
                        navController.navigate(WordNestRoutes.HOME) {
                            popUpTo(WordNestRoutes.AUTH) { inclusive = true }
                        }
                    }
                )
            }

            composable(WordNestRoutes.HOME) {
                HomeScreen(
                    state = HomeUiState(), // Mock empty state
                    onStudyClick = {},
                    onCreateDeckClick = { navController.navigate(WordNestRoutes.DECKS) },
                    onWordClick = {},
                    onSpeakerClick = {},
                    onViewAllWordsClick = {},
                    onAddWordClick = {},
                    onSessionClick = {},
                    onToeicReadingClick = {},
                    onToeicListeningClick = {},
                    onAdjustGoalClick = {},
                    onViewHistoryClick = {}
                )
            }

            composable(WordNestRoutes.DECKS) {
                DeckListScreen(
                    decks = emptyList(), // Mock empty
                    onCreateDeckClick = {},
                    onDeckClick = {},
                    onEditDeck = {},
                    onAddWordToDeck = {},
                    onResetProgress = {},
                    onDeleteDeck = {}
                )
            }

            composable(WordNestRoutes.TOEIC) {
                ToeicHubScreen(
                    state = ToeicHubUiState(850, null, emptyList()),
                    onEditGoalClick = {},
                    onActiveSessionClick = {},
                    onIntensiveListeningClick = {},
                    onReadingTestClick = {},
                    onListeningTestClick = {},
                    onMockTestClick = {}
                )
            }

            composable(WordNestRoutes.ME) {
                ProfileAndSettingsScreen(
                    state = ProfileUiState(
                        user = UserProfileUiModel("Tung Nguyen", "tung.nguyen@email.com", false),
                        syncStatus = SyncStatus.SYNCED,
                        thisWeekMinutes = 120,
                        settings = UserSettingsUiModel(
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
                    ),
                    onLinkGoogleClick = {},
                    onSyncNowClick = {},
                    onOpenHistoryClick = {},
                    onSettingsChange = {},
                    onExportDataClick = {},
                    onClearCacheClick = {},
                    onLogoutClick = {
                        navController.navigate(WordNestRoutes.AUTH) {
                            popUpTo(0) { inclusive = true }
                        }
                    },
                    onDeleteAccountClick = {}
                )
            }

            composable(WordNestRoutes.LIFE) {
                LifeTopicsScreen(
                    topics = listOf(
                        LifeTopicUiModel("1", "Giao tiếp Sân bay", 45, 0, 0f, "✈️", Color(0xFFE0F2FE))
                    ),
                    onTopicClick = {}
                )
            }
        }
    }
}
