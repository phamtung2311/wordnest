package com.tung.wordnest

import android.app.Application
import androidx.work.ExistingPeriodicWorkPolicy
import androidx.work.PeriodicWorkRequestBuilder
import androidx.work.WorkManager
import com.tung.wordnest.data.local.AppDatabase
import com.tung.wordnest.data.repository.WordRepository
import com.tung.wordnest.data.remote.AuthRepository
import com.tung.wordnest.data.remote.SyncRepository
import com.tung.wordnest.service.notification.SrsReviewWorker
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import java.util.concurrent.TimeUnit

class WordNestApplication : Application() {

    lateinit var repository: WordRepository
        private set
        
    lateinit var authRepository: AuthRepository
        private set
        
    lateinit var syncRepository: SyncRepository
        private set

    override fun onCreate() {
        super.onCreate()

        val database = AppDatabase.getDatabase(this)
        repository = WordRepository(database.wordDao())
        
        authRepository = AuthRepository()
        syncRepository = SyncRepository(database.wordDao())

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
