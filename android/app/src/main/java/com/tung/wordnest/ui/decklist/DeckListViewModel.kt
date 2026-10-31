package com.tung.wordnest.ui.decklist

import androidx.lifecycle.ViewModel
import androidx.lifecycle.ViewModelProvider
import androidx.lifecycle.viewModelScope
import com.google.firebase.auth.FirebaseAuth
import com.tung.wordnest.data.local.DeckEntity
import com.tung.wordnest.data.local.WordEntity
import com.tung.wordnest.data.remote.SyncRepository
import com.tung.wordnest.data.repository.DeckItem
import com.tung.wordnest.data.repository.WordRepository
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.launch

data class DeckListUiState(
    val decks: List<DeckItem> = emptyList(),
    val isLoading: Boolean = true
)

class DeckListViewModel(
    private val repository: WordRepository,
    private val syncRepository: SyncRepository
) : ViewModel() {

    private val _uiState = MutableStateFlow(DeckListUiState())
    val uiState: StateFlow<DeckListUiState> = _uiState.asStateFlow()

    init {
        viewModelScope.launch {
            repository.getDecksWithCounts().collect { decks ->
                _uiState.value = DeckListUiState(decks = decks, isLoading = false)
            }
        }
    }

    fun createDeck(name: String, emoji: String, description: String) {
        viewModelScope.launch {
            val deck = DeckEntity(
                name = name,
                emoji = emoji,
                description = description
            )
            val userId = FirebaseAuth.getInstance().currentUser?.uid
            syncRepository.createDeckAndSync(userId, deck)
        }
    }

    fun addWordToDeck(deckId: Long, term: String, meaning: String, phonetic: String, example: String) {
        viewModelScope.launch {
            val word = WordEntity(
                deckId = deckId,
                term = term,
                meaning = meaning,
                phonetic = phonetic,
                example = example
            )
            val userId = FirebaseAuth.getInstance().currentUser?.uid
            syncRepository.addWordAndSync(userId, deckId, word)
        }
    }
}

class DeckListViewModelFactory(
    private val repository: WordRepository,
    private val syncRepository: SyncRepository
) : ViewModelProvider.Factory {
    @Suppress("UNCHECKED_CAST")
    override fun <T : ViewModel> create(modelClass: Class<T>): T {
        return DeckListViewModel(repository, syncRepository) as T
    }
}
