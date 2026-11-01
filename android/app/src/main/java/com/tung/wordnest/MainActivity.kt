package com.tung.wordnest

import android.Manifest
import android.content.pm.PackageManager
import android.os.Build
import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.result.contract.ActivityResultContracts
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Surface
import androidx.compose.ui.Modifier
import androidx.core.content.ContextCompat
import com.google.firebase.auth.FirebaseAuth
import com.tung.wordnest.ui.navigation.WordNestNavGraph
import com.tung.wordnest.ui.theme.WordNestTheme
import kotlinx.coroutines.launch

class MainActivity : ComponentActivity() {

    private val requestPermissionLauncher = registerForActivityResult(
        ActivityResultContracts.RequestPermission()
    ) { isGranted: Boolean ->
        // Khách từ chối thì app vẫn chạy, SrsReviewWorker chỉ im lặng
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        // TASK 1: Request POST_NOTIFICATIONS
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.TIRAMISU) {
            if (ContextCompat.checkSelfPermission(this, Manifest.permission.POST_NOTIFICATIONS) != PackageManager.PERMISSION_GRANTED) {
                requestPermissionLauncher.launch(Manifest.permission.POST_NOTIFICATIONS)
            }
        }

        setContent {
            WordNestTheme {
                Surface(
                    modifier = Modifier.fillMaxSize(),
                    color = MaterialTheme.colorScheme.background
                ) {
                    WordNestNavGraph()
                }
            }
        }
    }

    private var lastSyncTime = 0L

    override fun onResume() {
        super.onResume()
        val currentUser = FirebaseAuth.getInstance().currentUser
        if (currentUser != null) {
            val currentTime = System.currentTimeMillis()
            if (currentTime - lastSyncTime > 60_000) {
                lastSyncTime = currentTime
                val app = application as WordNestApplication
                app.appScope.launch {
                    val uid = currentUser.uid
                    app.syncRepository.pullProgress(uid)
                    app.syncRepository.pullNotes(uid)
                    app.syncRepository.pullTodos(uid)
                }
            }
        }
    }
}
