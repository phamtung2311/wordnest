package com.tung.wordnest

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.viewModels
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material3.*
import androidx.compose.ui.Modifier
import com.tung.wordnest.ui.navigation.WordNestNavGraph
import com.tung.wordnest.ui.theme.WordNestTheme

import com.tung.wordnest.ui.flashcard.FlashcardViewModel
import com.tung.wordnest.ui.flashcard.FlashcardViewModelFactory
import com.tung.wordnest.ui.listening.IntensiveListeningViewModel
import com.tung.wordnest.ui.profile.ProfileViewModel
import com.tung.wordnest.ui.profile.ProfileViewModelFactory
import com.tung.wordnest.ui.decklist.DeckListViewModel
import com.tung.wordnest.ui.decklist.DeckListViewModelFactory

class MainActivity : ComponentActivity() {

    private val flashcardViewModel: FlashcardViewModel by viewModels {
        FlashcardViewModelFactory(
            (application as WordNestApplication).repository,
            (application as WordNestApplication).syncRepository
        )
    }

    private val deckListViewModel: DeckListViewModel by viewModels {
        val app = application as WordNestApplication
        DeckListViewModelFactory(app.repository, app.syncRepository)
    }

    private val listeningViewModel: IntensiveListeningViewModel by viewModels()
    
    private val profileViewModel: ProfileViewModel by viewModels {
        val app = application as WordNestApplication
        ProfileViewModelFactory(app.authRepository, app.syncRepository)
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
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
}
