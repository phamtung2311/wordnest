package com.tung.wordnest.ui.navigation

import androidx.compose.runtime.Composable
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.platform.LocalContext
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
import com.tung.wordnest.ui.screens.onboarding.AuthStatus
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
import kotlinx.coroutines.launch

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
                val context = LocalContext.current
                val application = context.applicationContext as com.tung.wordnest.WordNestApplication
                val authRepository = application.authRepository
                val syncRepository = application.syncRepository
                var authStatus by remember { mutableStateOf<AuthStatus>(AuthStatus.IDLE) }
                val scope = application.appScope

                AuthScreen(
                    isNetworkError = false,
                    onGoogleSignInClick = {
                        val webClientId =
                            context.resources.getString(
                                com.tung.wordnest.R.string.default_web_client_id
                            )
                        val result =
                            authRepository.signInWithGoogle(context, webClientId)
                        if (result.isSuccess) {
                            authStatus = AuthStatus.SUCCESS
                            // Kéo dữ liệu từ trang web (Firestore) về Room ngay sau khi đăng nhập
                            scope.launch {
                                val user = result.getOrNull() ?: return@launch
                                syncRepository.syncDecksAndWords(user.uid)
                            }
                        } else {
                            authStatus =
                                AuthStatus.ERROR(
                                    result.exceptionOrNull()?.message
                                        ?: "Lỗi không xác định"
                                )
                        }
                    },
                    onGuestModeClick = {
                        navController.navigate(WordNestRoutes.HOME) {
                            popUpTo(WordNestRoutes.AUTH) { inclusive = true }
                        }
                    },
                    authStatus = authStatus,
                    onNavigateHome = {
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
                val context = LocalContext.current
                val app = context.applicationContext as com.tung.wordnest.WordNestApplication
                val scope = app.appScope

                // Dữ liệu bộ từ thật từ Room (đã được sync từ Firestore khi đăng nhập)
                val deckItems by remember {
                    app.repository.getDecksWithCounts()
                }.collectAsState(initial = emptyList())
                val deckColors = listOf(
                    WordNestTheme.colors.amberTint,
                    WordNestTheme.colors.coralTint,
                    WordNestTheme.colors.orangeTint,
                    Color(0xFFFDF2F8),
                    Color(0xFFE0F2FE),
                    Color(0xFFDCFCE7)
                )
                val decks = deckItems.mapIndexed { index, deck ->
                    com.tung.wordnest.ui.screens.decks.DeckUiModel(
                        id = deck.id.toString(),
                        name = deck.name,
                        totalWords = deck.totalWords,
                        reviewWords = deck.dueWords,
                        progress = if (deck.totalWords > 0) (deck.totalWords - deck.dueWords).toFloat() / deck.totalWords else 0f,
                        emoji = deck.emoji,
                        color = deckColors[index % deckColors.size]
                    )
                }

                DeckListScreen(
                    decks = decks,
                    onCreateDeckClick = {
                        scope.launch {
                            val uid = com.google.firebase.auth.FirebaseAuth.getInstance()
                                .currentUser?.uid
                            val deck = com.tung.wordnest.data.local.DeckEntity(
                                name = "Bộ từ mới",
                                emoji = "📚",
                                description = "Tạo trên ứng dụng WordNest"
                            )
                            app.syncRepository.createDeckAndSync(uid, deck)
                        }
                    },
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
                val context = LocalContext.current
                val app = context.applicationContext as com.tung.wordnest.WordNestApplication
                val scope = app.appScope

                // Theo dõi người dùng Firebase + trạng thái sync thật
                var firebaseUser by remember {
                    mutableStateOf(
                        com.google.firebase.auth.FirebaseAuth.getInstance().currentUser
                    )
                }
                var syncState by remember {
                    mutableStateOf<SyncStatus>(SyncStatus.NOT_SYNCED)
                }
                val authListener = remember {
                    com.google.firebase.auth.FirebaseAuth.AuthStateListener { auth ->
                        firebaseUser = auth.currentUser
                    }
                }
                androidx.compose.runtime.DisposableEffect(Unit) {
                    com.google.firebase.auth.FirebaseAuth.getInstance()
                        .addAuthStateListener(authListener)
                    onDispose {
                        com.google.firebase.auth.FirebaseAuth.getInstance()
                            .removeAuthStateListener(authListener)
                    }
                }

                val profileUser = if (firebaseUser != null) {
                    UserProfileUiModel(
                        name = firebaseUser?.displayName ?: "Người dùng",
                        email = firebaseUser?.email,
                        isGuest = false
                    )
                } else {
                    UserProfileUiModel("Chế độ Khách", null, isGuest = true)
                }

                ProfileAndSettingsScreen(
                    state = ProfileUiState(
                        user = profileUser,
                        syncStatus = syncState,
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
                    onLinkGoogleClick = {
                        navController.navigate(WordNestRoutes.AUTH) {
                            popUpTo(0) { inclusive = true }
                        }
                    },
                    onSyncNowClick = {
                        val uid = firebaseUser?.uid
                        if (uid == null) {
                            syncState = SyncStatus.NOT_SYNCED
                        } else {
                            scope.launch {
                                syncState = SyncStatus.SYNCING
                                val result = app.syncRepository.syncDecksAndWords(uid)
                                syncState = if (result.isSuccess) SyncStatus.SYNCED else SyncStatus.ERROR
                            }
                        }
                    },
                    onOpenHistoryClick = {},
                    onSettingsChange = {},
                    onExportDataClick = {},
                    onClearCacheClick = {},
                    onLogoutClick = {
                        scope.launch {
                            app.authRepository.signOut()
                            navController.navigate(WordNestRoutes.AUTH) {
                                popUpTo(0) { inclusive = true }
                            }
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
