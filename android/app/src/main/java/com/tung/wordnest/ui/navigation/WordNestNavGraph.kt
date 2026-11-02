package com.tung.wordnest.ui.navigation

import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.ui.unit.dp
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
import androidx.navigation.navArgument
import androidx.navigation.NavType
import com.tung.wordnest.data.local.ProgressStore
import com.tung.wordnest.data.model.WordLevel
import com.tung.wordnest.ui.screens.decks.DeckListScreen
import com.tung.wordnest.ui.screens.home.HomeScreen
import com.tung.wordnest.ui.screens.home.HomeUiState
import com.tung.wordnest.ui.screens.home.WordPreviewUiModel
import com.tung.wordnest.ui.screens.life.LifeTopicUiModel
import com.tung.wordnest.ui.screens.life.LifeTopicsScreen
import com.tung.wordnest.ui.screens.onboarding.AuthScreen
import com.tung.wordnest.ui.screens.onboarding.AuthStatus
import com.tung.wordnest.ui.screens.onboarding.OnboardingPagerScreen
import com.tung.wordnest.ui.screens.onboarding.SplashView
import com.tung.wordnest.ui.screens.profile.DailyStudyRecord
import com.tung.wordnest.ui.screens.profile.ProfileAndSettingsScreen
import com.tung.wordnest.ui.screens.profile.ProfileUiState
import com.tung.wordnest.ui.screens.profile.StudyHistoryScreen
import com.tung.wordnest.ui.screens.profile.StudyHistoryUiState
import com.tung.wordnest.ui.screens.profile.SyncStatus
import com.tung.wordnest.ui.screens.profile.UserProfileUiModel
import com.tung.wordnest.ui.screens.profile.UserSettingsUiModel
import com.tung.wordnest.ui.screens.study.StudyScreenHost
import com.tung.wordnest.ui.screens.toeic.ToeicHubScreen
import com.tung.wordnest.ui.screens.toeic.ToeicHubUiState
import com.tung.wordnest.ui.theme.WordNestTheme
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Add
import androidx.compose.ui.graphics.Color
import com.google.firebase.auth.FirebaseAuth
import com.tung.wordnest.util.TtsProvider
import java.time.LocalDate
import kotlinx.coroutines.delay
import kotlinx.coroutines.launch

@Composable
fun WordNestNavGraph(modifier: Modifier = Modifier) {
    val app = LocalContext.current.applicationContext as com.tung.wordnest.WordNestApplication
    val scope = app.appScope
    val navController = rememberNavController()
    val navBackStackEntry by navController.currentBackStackEntryAsState()
    val currentRoute = navBackStackEntry?.destination?.route

    // Sheet dock đang mở: "Sổ tay ghi chú" | "Ôn từ đến hạn" | "Việc cần làm" | "Dịch nhanh"
    var activeSheet by remember { mutableStateOf<String?>(null) }
    // Sheet quản lý Bộ từ & Từ vựng: Tạo/Sửa bộ, Thêm/Sửa từ, Chi tiết từ
    var activeDeckSheet by remember { mutableStateOf<com.tung.wordnest.ui.screens.decks.DeckSheet?>(null) }
    var showGoalDialog by remember { mutableStateOf(false) }

    val progress = app.progressStore
    val todaySec = remember(progress) { progress.getSecondsOn(ProgressStore.todayKey()) }
    val hours = todaySec / 3600
    val mins = (todaySec % 3600) / 60
    val secs = todaySec % 60
    val timerText = String.format("%02d:%02d:%02d", hours, mins, secs)
    val streakDays = remember(progress) { progress.getStreakDays() }

    Box(modifier = modifier) {
        WordNestAppShell(
            currentRoute = currentRoute,
            onNavigate = { route ->
                navController.navigate(route) {
                    popUpTo(WordNestRoutes.HOME) { saveState = true }
                    launchSingleTop = true
                    restoreState = true
                }
            },
            onOpenTimerSheet = { activeSheet = "Ôn từ đến hạn" },
            onDockAction = { action -> activeSheet = action },
            timerText = timerText,
            streakDays = streakDays,
            overrideMainFab = if (currentRoute == WordNestRoutes.DECKS) {
                {
                    androidx.compose.material3.ExtendedFloatingActionButton(
                        onClick = {
                            activeDeckSheet = com.tung.wordnest.ui.screens.decks.DeckSheet.DeckEditor(initial = null)
                        },
                        icon = { androidx.compose.material3.Icon(androidx.compose.material.icons.Icons.Default.Add, contentDescription = null, tint = WordNestTheme.colors.forest900) },
                        text = { androidx.compose.material3.Text("Tạo bộ mới", style = WordNestTheme.typography.labelLarge, color = WordNestTheme.colors.forest900) },
                        containerColor = WordNestTheme.colors.amber400,
                        contentColor = WordNestTheme.colors.forest900,
                        modifier = Modifier.padding(bottom = 16.dp)
                    )
                }
            } else null,
            modifier = Modifier.fillMaxSize()
        ) {
            NavHost(
                navController = navController,
                startDestination = WordNestRoutes.SPLASH
            ) {
            composable(WordNestRoutes.SPLASH) {
                val progress = (LocalContext.current.applicationContext as com.tung.wordnest.WordNestApplication).progressStore
                SplashView(onSplashComplete = {
                    // Đã hoàn thành onboarding + còn đăng nhập Firebase -> vào thẳng HOME
                    // (không lặp lại splash -> onboarding -> auth mỗi lần mở app)
                    val stillLoggedIn = com.google.firebase.auth.FirebaseAuth.getInstance().currentUser != null
                    if (progress.onboardingDone && stillLoggedIn) {
                        navController.navigate(WordNestRoutes.HOME) {
                            popUpTo(WordNestRoutes.SPLASH) { inclusive = true }
                        }
                    } else {
                        navController.navigate(WordNestRoutes.ONBOARDING) {
                            popUpTo(WordNestRoutes.SPLASH) { inclusive = true }
                        }
                    }
                })
            }

            composable(WordNestRoutes.ONBOARDING) {
                val progress = (LocalContext.current.applicationContext as com.tung.wordnest.WordNestApplication).progressStore
                OnboardingPagerScreen(
                    onFinishOnboarding = {
                        // Ghi nhớ đã qua onboarding (điều kiện skip-login lần sau)
                        progress.onboardingDone = true
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
                val app = LocalContext.current.applicationContext as com.tung.wordnest.WordNestApplication
                val progress = app.progressStore

                // Dữ liệu thật từ Room (đã sync từ Firestore)
                val deckItems by app.repository.getDecksWithCounts()
                    .collectAsState(initial = emptyList())
                val recentWords by app.repository.getRecentWords(6)
                    .collectAsState(initial = emptyList())
                val dueNow = System.currentTimeMillis()

                val totalDue = deckItems.sumOf { it.dueWords }
                val totalWords = deckItems.sumOf { it.totalWords }
                val totalNew = recentWords.count { it.level == WordLevel.NEW }

                val homeState = HomeUiState(
                    dueWordsCount = totalDue,
                    newWordsCount = totalNew,
                    reviewWordsCount = totalDue.coerceAtMost(999),
                    isTodayCompleted = progress.isCompletedToday(ProgressStore.todayKey()),
                    hasAnyDeck = deckItems.isNotEmpty(),
                    recentWords = recentWords.take(6).map {
                        WordPreviewUiModel(it.id.toString(), it.term, it.meaning)
                    },
                    totalAddedWords = totalWords,
                    todayStudyMinutes = progress.getSecondsOn(ProgressStore.todayKey()) / 60,
                    dailyGoalMinutes = progress.targetMinutes.takeIf { it > 0 } ?: 15,
                    currentStreakDays = progress.getStreakDays(),
                    totalSuccessDays = progress.completedDays.count { it.value }
                )

                HomeScreen(
                    state = homeState,
                    onStudyClick = {
                        navController.navigate(WordNestRoutes.study("all"))
                    },
                    onCreateDeckClick = { navController.navigate(WordNestRoutes.DECKS) },
                    onWordClick = {},
                    onSpeakerClick = { term -> TtsProvider.speak(term) },
                    onViewAllWordsClick = { navController.navigate(WordNestRoutes.DECKS) },
                    onAddWordClick = {
                        activeDeckSheet = com.tung.wordnest.ui.screens.decks.DeckSheet.WordEditor(
                            deckId = null,
                            initial = null
                        )
                    },
                    onSessionClick = { sessionId ->
                        // sessionId = deckId (hoặc "all") → mở phiên học
                        navController.navigate(WordNestRoutes.study(sessionId))
                    },
                    onToeicReadingClick = { navController.navigate(WordNestRoutes.TOEIC) },
                    onToeicListeningClick = { navController.navigate(WordNestRoutes.TOEIC) },
                    onAdjustGoalClick = { showGoalDialog = true },
                    onViewHistoryClick = { navController.navigate(WordNestRoutes.HISTORY) }
                )

                if (showGoalDialog) {
                    com.tung.wordnest.ui.screens.home.DailyGoalDialog(
                        currentMinutes = progress.targetMinutes,
                        onDismiss = { showGoalDialog = false },
                        onConfirm = { newTarget ->
                            progress.targetMinutes = newTarget
                            showGoalDialog = false
                            val uid = FirebaseAuth.getInstance().currentUser?.uid
                            if (uid != null) {
                                scope.launch {
                                    app.syncRepository.syncAll(uid)
                                }
                            }
                        }
                    )
                }
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
                        activeDeckSheet = com.tung.wordnest.ui.screens.decks.DeckSheet.DeckEditor(initial = null)
                    },
                    onDeckClick = { deckIdStr ->
                        navController.navigate(WordNestRoutes.deckDetail(deckIdStr))
                    },
                    onEditDeck = { deckIdStr ->
                        scope.launch {
                            val entity = deckIdStr.toLongOrNull()?.let { app.repository.getDeckById(it) }
                            activeDeckSheet = com.tung.wordnest.ui.screens.decks.DeckSheet.DeckEditor(initial = entity)
                        }
                    },
                    onAddWordToDeck = { deckIdStr ->
                        activeDeckSheet = com.tung.wordnest.ui.screens.decks.DeckSheet.WordEditor(
                            deckId = deckIdStr.toLongOrNull(),
                            initial = null
                        )
                    },
                    onResetProgress = { deckIdStr ->
                        scope.launch {
                            val uid = FirebaseAuth.getInstance().currentUser?.uid
                            deckIdStr.toLongOrNull()?.let {
                                app.syncRepository.resetDeckProgressAndSync(uid, it)
                            }
                        }
                    },
                    onDeleteDeck = { deckIdStr ->
                        scope.launch {
                            val uid = FirebaseAuth.getInstance().currentUser?.uid
                            deckIdStr.toLongOrNull()?.let {
                                app.syncRepository.deleteDeckAndSync(uid, it)
                            }
                        }
                    }
                )
            }

            composable(WordNestRoutes.TOEIC) {
                val context = LocalContext.current
                val app = context.applicationContext as com.tung.wordnest.WordNestApplication
                val progressStore = app.toeicProgressStore

                val readingTests = remember {
                    com.tung.wordnest.ui.screens.toeic.ToeicAssets.READING_TESTS.map { meta ->
                        val savedProgress = progressStore.getReadingProgress(meta.id)
                        val bestScore = progressStore.getBestScore(meta.id, "reading")
                        com.tung.wordnest.ui.screens.toeic.ToeicMockTestUiModel(
                            id = meta.id,
                            name = meta.title,
                            completedQuestions = savedProgress.size,
                            totalQuestions = 100,
                            bestScore = bestScore,
                            kind = "reading",
                            hasTextContent = meta.hasTextContent
                        )
                    }
                }

                val listeningTests = remember {
                    com.tung.wordnest.ui.screens.toeic.ToeicAssets.LISTENING_TESTS.map { meta ->
                        val savedProgress = progressStore.getListeningProgress(meta.id)
                        val bestScore = progressStore.getBestScore(meta.id, "listening")
                        com.tung.wordnest.ui.screens.toeic.ToeicMockTestUiModel(
                            id = meta.id,
                            name = meta.title,
                            completedQuestions = savedProgress.size,
                            totalQuestions = 100,
                            bestScore = bestScore,
                            kind = "listening"
                        )
                    }
                }

                val allTests = remember(readingTests, listeningTests) {
                    readingTests + listeningTests
                }

                com.tung.wordnest.ui.screens.toeic.ToeicHubScreen(
                    state = com.tung.wordnest.ui.screens.toeic.ToeicHubUiState(
                        currentScoreGoal = 850,
                        activeSession = null,
                        mockTests = allTests
                    ),
                    onEditGoalClick = {},
                    onActiveSessionClick = {},
                    onIntensiveListeningClick = {
                        navController.navigate(WordNestRoutes.toeicIntensive("2024_1"))
                    },
                    onReadingTestClick = { testId ->
                        navController.navigate(WordNestRoutes.toeicReading(testId))
                    },
                    onListeningTestClick = { testId ->
                        navController.navigate(WordNestRoutes.toeicListening(testId))
                    },
                    onMockTestClick = { testId, kind ->
                        if (kind == "reading") {
                            navController.navigate(WordNestRoutes.toeicReading(testId))
                        } else {
                            navController.navigate(WordNestRoutes.toeicListening(testId))
                        }
                    }
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
                                // Đồng bộ 2 chiều TOÀN BỘ: decks/words/SRS + progress + notes + todos
                                val result = app.syncRepository.syncAll(uid)
                                syncState = if (result.isSuccess) SyncStatus.SYNCED else SyncStatus.ERROR
                            }
                        }
                    },
                    onOpenHistoryClick = { navController.navigate(WordNestRoutes.HISTORY) },
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

            // ===== PHIÊN HỌC (toàn màn hình, SRS + progress sync 2 chiều) =====
            composable(
                route = WordNestRoutes.STUDY_PATH,
                arguments = listOf(
                    navArgument("deckId") {
                        defaultValue = "all"
                    }
                )
            ) { backStackEntry ->
                val app = LocalContext.current.applicationContext as com.tung.wordnest.WordNestApplication
                val deckIdArg = backStackEntry.arguments?.getString("deckId") ?: "all"
                StudyScreenHost(
                    app = app,
                    deckIdString = deckIdArg,
                    onClose = { navController.popBackStack() }
                )
            }

            // ===== LỊCH SỬ HỌC (data thật từ ProgressStore) =====
            composable(WordNestRoutes.HISTORY) {
                val app = LocalContext.current.applicationContext as com.tung.wordnest.WordNestApplication
                val progress = app.progressStore
                val today = java.time.LocalDate.now()

                fun recordFor(day: java.time.LocalDate) = DailyStudyRecord(
                    date = day,
                    minutes = progress.getSecondsOn(day.toString()) / 60,
                    wordsLearned = 0,
                    testsTaken = 0
                )

                val weekly = (0 until 7).map { recordFor(today.minusDays((6 - it).toLong())) }
                val monthly = (0 until 35).map { recordFor(today.minusDays((34 - it).toLong())) }

                StudyHistoryScreen(
                    state = StudyHistoryUiState(
                        weeklyMinutes = weekly.sumOf { it.minutes.toLong() }.toInt(),
                        currentStreak = progress.getStreakDays(),
                        bestStreak = progress.getStreakDays(),
                        dailyGoalMinutes = progress.targetMinutes,
                        weeklyRecords = weekly,
                        monthlyRecords = monthly
                    ),
                    onBackClick = { navController.popBackStack() }
                )
            }

            // ===== PHÒNG THI TOEIC READING (PDF + Phiếu 101-200) =====
            composable(
                route = WordNestRoutes.TOEIC_READING_PATH,
                arguments = listOf(navArgument("testId") { type = NavType.StringType })
            ) { backStackEntry ->
                val testId = backStackEntry.arguments?.getString("testId") ?: "2024_1"
                com.tung.wordnest.ui.screens.toeic.ToeicReadingScreen(
                    testId = testId,
                    onBackClick = { navController.popBackStack() }
                )
            }

            // ===== PHÒNG THI TOEIC LISTENING (Audio + Phiếu 1-100) =====
            composable(
                route = WordNestRoutes.TOEIC_LISTENING_PATH,
                arguments = listOf(navArgument("testId") { type = NavType.StringType })
            ) { backStackEntry ->
                val testId = backStackEntry.arguments?.getString("testId") ?: "2024_1"
                com.tung.wordnest.ui.screens.toeic.ToeicListeningScreen(
                    testId = testId,
                    onBackClick = { navController.popBackStack() }
                )
            }

            // ===== PHÒNG THI INTENSIVE LISTENING (Dictation + Quiz + Transcript song ngữ) =====
            composable(
                route = WordNestRoutes.TOEIC_INTENSIVE_PATH,
                arguments = listOf(navArgument("testId") { type = NavType.StringType })
            ) { backStackEntry ->
                val testId = backStackEntry.arguments?.getString("testId") ?: "2024_1"
                com.tung.wordnest.ui.screens.toeic.IntensiveListeningScreen(
                    testId = testId,
                    onBackClick = { navController.popBackStack() },
                    onOpenSaveWordSheet = { term, meaning, ipa, pos, example ->
                        activeDeckSheet = com.tung.wordnest.ui.screens.decks.DeckSheet.WordEditor(
                            deckId = null,
                            initial = com.tung.wordnest.data.model.WordItem(
                                deckId = 0,
                                term = term,
                                meaning = meaning,
                                phonetic = ipa,
                                partOfSpeech = pos,
                                example = example
                            )
                        )
                    }
                )
            }

            // ===== CHI TIẾT BỘ TỪ (danh sách từ thật, phát âm, sửa/xóa/thêm) =====
            composable(
                route = WordNestRoutes.DECK_DETAIL_PATH,
                arguments = listOf(navArgument("deckId") { type = NavType.StringType })
            ) { backStackEntry ->
                val deckIdStr = backStackEntry.arguments?.getString("deckId") ?: return@composable
                val deckId = deckIdStr.toLongOrNull() ?: return@composable
                com.tung.wordnest.ui.screens.decks.DeckDetailScreenHost(
                    app = app,
                    deckId = deckId,
                    onBack = { navController.popBackStack() },
                    onStudy = { id -> navController.navigate(WordNestRoutes.study(id.toString())) },
                    onOpenSheet = { activeDeckSheet = it }
                )
            }
        }
    }

    // Overlay: sheets đồng bộ 2 chiều (Notes / Todos / Timer / Dịch) — nằm trên shell
    SyncedSheetHost(
        app = app,
        activeSheet = activeSheet,
        onDismiss = { activeSheet = null },
        modifier = Modifier.fillMaxSize()
    )

    // Overlay: ModalBottomSheet quản lý Bộ từ & Từ vựng (Tạo/Sửa deck, Thêm/Sửa word, Chi tiết word)
    com.tung.wordnest.ui.screens.decks.DeckWordSheetHost(
        app = app,
        activeSheet = activeDeckSheet,
        onSheetChange = { activeDeckSheet = it },
        modifier = Modifier.fillMaxSize()
    )
    }
}
