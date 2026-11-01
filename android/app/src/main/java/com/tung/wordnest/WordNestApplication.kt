package com.tung.wordnest

import android.app.Application
import androidx.work.ExistingPeriodicWorkPolicy
import androidx.work.PeriodicWorkRequestBuilder
import androidx.work.WorkManager
import com.tung.wordnest.data.local.AppDatabase
import com.tung.wordnest.data.local.ProgressStore
import com.tung.wordnest.data.local.SyncStateStore
import com.tung.wordnest.data.repository.WordRepository
import com.tung.wordnest.data.remote.AuthRepository
import com.tung.wordnest.data.remote.SyncRepository
import com.tung.wordnest.service.notification.SrsReviewWorker
import com.tung.wordnest.util.TtsProvider
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.SupervisorJob
import kotlinx.coroutines.launch
import java.util.concurrent.TimeUnit

class WordNestApplication : Application() {

    lateinit var repository: WordRepository
        private set

    lateinit var authRepository: AuthRepository
        private set

    lateinit var progressStore: ProgressStore
        private set

    lateinit var stateStore: SyncStateStore
        private set

    lateinit var syncRepository: SyncRepository
        private set

    lateinit var toeicProgressStore: com.tung.wordnest.data.local.ToeicProgressStore
        private set

    // Scope sống cùng Application — an toàn cho các tác vụ sync nền / chạy ngang việc
    // (không nên dùng rememberCoroutineScope của Composable vì bị forget khi màn hình rời composition)
    val appScope = CoroutineScope(SupervisorJob() + Dispatchers.IO)

    override fun onCreate() {
        super.onCreate()

        TtsProvider.init(this)

        val database = AppDatabase.getDatabase(this)
        repository = WordRepository(database.wordDao())

        authRepository = AuthRepository()
        progressStore = ProgressStore(this)
        stateStore = SyncStateStore(this)
        toeicProgressStore = com.tung.wordnest.data.local.ToeicProgressStore(this)
        syncRepository = SyncRepository(database.wordDao(), progressStore, stateStore)

        // Nạp dữ liệu ban đầu chạy ngầm
        CoroutineScope(Dispatchers.IO).launch {
            repository.checkAndSeedInitialData()
        }

        // Lên lịch WorkManager định kỳ kiểm tra từ đến hạn
        scheduleSrsReminder()
    }

    private fun scheduleSrsReminder() {
        val workRequest = PeriodicWorkRequestBuilder<SrsReviewWorker>(4, TimeUnit.HOURS)
            .build()

        WorkManager.getInstance(this).enqueueUniquePeriodicWork(
            "WordNestSrsReminder",
            ExistingPeriodicWorkPolicy.KEEP,
            workRequest
        )
    }
}
