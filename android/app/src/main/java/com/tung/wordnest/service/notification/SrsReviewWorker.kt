package com.tung.wordnest.service.notification

import android.app.NotificationChannel
import android.app.NotificationManager
import android.content.Context
import android.os.Build
import androidx.core.app.NotificationCompat
import androidx.work.CoroutineWorker
import androidx.work.WorkerParameters
import com.tung.wordnest.data.local.AppDatabase

class SrsReviewWorker(
    private val context: Context,
    params: WorkerParameters
) : CoroutineWorker(context, params) {

    companion object {
        const val CHANNEL_ID = "srs_review_channel"
        const val CHANNEL_NAME = "Nhắc nhở ôn tập từ vựng"
        const val NOTIFICATION_ID = 1001
    }

    override suspend fun doWork(): Result {
        val database = AppDatabase.getDatabase(context)
        val dueCount = database.wordDao().getDueWordsCount(System.currentTimeMillis())

        if (dueCount > 0) {
            sendNotification(dueCount)
        }

        return Result.success()
    }

    private fun sendNotification(count: Int) {
        val notificationManager =
            context.getSystemService(Context.NOTIFICATION_SERVICE) as NotificationManager

        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            val channel = NotificationChannel(
                CHANNEL_ID,
                CHANNEL_NAME,
                NotificationManager.IMPORTANCE_DEFAULT
            ).apply {
                description = "Thông báo khi có từ vựng đến hạn ôn tập (Spaced Repetition)"
            }
            notificationManager.createNotificationChannel(channel)
        }

        val notification = NotificationCompat.Builder(context, CHANNEL_ID)
            .setSmallIcon(android.R.drawable.ic_dialog_info)
            .setContentTitle("WordNest - Đến giờ ôn từ vựng!")
            .setContentText("Bạn có $count từ vựng cần ôn tập ngay bây giờ để ghi nhớ lâu dài.")
            .setPriority(NotificationCompat.PRIORITY_DEFAULT)
            .setAutoCancel(true)
            .build()

        notificationManager.notify(NOTIFICATION_ID, notification)
    }
}
