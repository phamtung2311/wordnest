package com.tung.wordnest.ui.screens.study

import androidx.activity.ComponentActivity
import androidx.compose.runtime.Composable
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.remember
import androidx.compose.ui.Modifier
import androidx.compose.ui.platform.LocalContext
import androidx.lifecycle.viewmodel.compose.viewModel
import com.tung.wordnest.WordNestApplication
import com.tung.wordnest.data.model.ReviewAction
import com.tung.wordnest.util.TtsProvider

/**
 * Host wire StudySessionViewModel -> FlashcardStudyScreen (giao diện thế hệ mới).
 *
 * "Đồng bộ 2 chiều" tại đây:
 *  - READ: startSession() kéo từ cần ôn từ Room (đã sync từ Firestore)
 *  - WRITE: rate() chạy SRS + pushWordUpdate lên Firestore + tích lũy
 *    progress (time) vào ProgressStore, pushProgress khi kết thúc
 */
@Composable
fun StudyScreenHost(
    app: WordNestApplication,
    deckIdString: String, // "all" = toàn bộ từ đến hạn; ngược lại = Long id của deck
    onClose: () -> Unit,
    modifier: Modifier = Modifier
) {
    val activity = LocalContext.current as ComponentActivity
    val vm: StudySessionViewModel = viewModel(
        viewModelStoreOwner = activity,
        factory = StudySessionViewModel.factory(
            repository = app.repository,
            syncRepository = app.syncRepository,
            progressStore = app.progressStore,
            appScope = app.appScope
        )
    )
    val state by vm.state.collectAsState()

    val deckId: Long? = if (deckIdString == "all") null else deckIdString.toLongOrNull()

    // Khởi động phiên khi host mount (lần đầu)
    LaunchedEffect(deckIdString) {
        vm.startSession(deckId)
    }

    FlashcardStudyScreen(
        state = state,
        summaryStats = vm.summaryStats(),
        settings = remember { StudySettingsState() },
        onCloseClick = onClose,
        onSettingsClick = {},
        onUndoClick = { vm.undo() },
        onCardClick = { vm.flipCard() },
        onPronounceClick = {
            state.words.getOrNull(state.currentIndex)?.term?.let {
                TtsProvider.speak(it)
            }
        },
        onRateHard = { vm.rate(ReviewAction.FORGOT) },
        onRateGood = { vm.rate(ReviewAction.HARD) },
        onRateEasy = { vm.rate(ReviewAction.EASY) },
        onContinueStudy = { vm.startSession(deckId) },
        onBackToHome = onClose,
        onReviewForgotWords = { vm.startSession(deckId) },
        onUpdateSettings = {},
        modifier = modifier
    )
}
