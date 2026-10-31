package com.tung.wordnest.ui.flashcard

import androidx.lifecycle.ViewModel
import androidx.lifecycle.ViewModelProvider
import androidx.lifecycle.viewModelScope
import com.google.firebase.auth.FirebaseAuth
import com.tung.wordnest.data.model.ReviewAction
import com.tung.wordnest.data.model.WordItem
import com.tung.wordnest.data.remote.SyncRepository
import com.tung.wordnest.data.repository.WordRepository
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.flow.first
import kotlinx.coroutines.flow.update
import kotlinx.coroutines.launch

data class FlashcardUiState(
    val words: List<WordItem> = emptyList(),
    val currentIndex: Int = 0,
    val isFlipped: Boolean = false,
    val isLoading: Boolean = true,
    val reviewedCount: Int = 0
) {
    val currentWord: WordItem?
        get() = if (words.isNotEmpty() && currentIndex in words.indices) words[currentIndex] else null

    val isSessionComplete: Boolean
        get() = !isLoading && (words.isEmpty() || currentIndex >= words.size)

    val progress: Float
        get() = if (words.isEmpty()) 1f else currentIndex.toFloat() / words.size.toFloat()
}

class FlashcardViewModel(
    private val repository: WordRepository,
    private val syncRepository: SyncRepository? = null
) : ViewModel() {

    private val _uiState = MutableStateFlow(FlashcardUiState())
    val uiState: StateFlow<FlashcardUiState> = _uiState.asStateFlow()

    init {
        // loadDueWords() will be called from outside
    }

    fun loadDueWords(deckId: Long? = null) {
        viewModelScope.launch {
            _uiState.update { it.copy(isLoading = true) }
            val flow = if (deckId != null) {
                repository.getDueWordsByDeck(deckId)
            } else {
                repository.getDueWords()
            }
            val due = flow.first()
            _uiState.update {
                it.copy(
                    words = due,
                    currentIndex = 0,
                    isFlipped = false,
                    isLoading = false,
                    reviewedCount = 0
                )
            }
        }
    }

    fun flipCard() {
        _uiState.update { it.copy(isFlipped = !it.isFlipped) }
    }

    fun reviewCurrentWord(action: ReviewAction) {
        val current = _uiState.value.currentWord ?: return

        viewModelScope.launch {
            val updatedWord = repository.reviewWord(current, action)
            _uiState.update {
                it.copy(
                    currentIndex = it.currentIndex + 1,
                    isFlipped = false,
                    reviewedCount = it.reviewedCount + 1
                )
            }
            
            // Push update lên Firestore nếu đang login
            FirebaseAuth.getInstance().currentUser?.uid?.let { userId ->
                syncRepository?.pushWordUpdate(userId, updatedWord.deckId, updatedWord)
            }
        }
    }
}

class FlashcardViewModelFactory(
    private val repository: WordRepository,
    private val syncRepository: SyncRepository? = null
) : ViewModelProvider.Factory {
    @Suppress("UNCHECKED_CAST")
    override fun <T : ViewModel> create(modelClass: Class<T>): T {
        return FlashcardViewModel(repository, syncRepository) as T
    }
}
