package com.tung.wordnest.ui.profile

import android.content.Context
import androidx.lifecycle.ViewModel
import androidx.lifecycle.ViewModelProvider
import androidx.lifecycle.viewModelScope
import com.google.firebase.auth.FirebaseUser
import com.tung.wordnest.data.remote.AuthRepository
import com.tung.wordnest.data.remote.SyncRepository
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.flow.update
import kotlinx.coroutines.launch

data class ProfileUiState(
    val user: FirebaseUser? = null,
    val isLoading: Boolean = false,
    val syncMessage: String? = null
)

class ProfileViewModel(
    private val authRepository: AuthRepository,
    private val syncRepository: SyncRepository
) : ViewModel() {

    private val _uiState = MutableStateFlow(ProfileUiState())
    val uiState: StateFlow<ProfileUiState> = _uiState.asStateFlow()

    init {
        viewModelScope.launch {
            authRepository.currentUser.collect { user ->
                _uiState.update { it.copy(user = user) }
            }
        }
    }

    fun signInWithGoogle(context: Context, webClientId: String) {
        viewModelScope.launch {
            _uiState.update { it.copy(isLoading = true, syncMessage = null) }
            val result = authRepository.signInWithGoogle(context, webClientId)
            
            _uiState.update { 
                it.copy(
                    isLoading = false,
                    syncMessage = if (result.isSuccess) "Đăng nhập thành công" else "Đăng nhập thất bại"
                )
            }
        }
    }

    fun signOut() {
        authRepository.signOut()
        _uiState.update { it.copy(syncMessage = "Đã đăng xuất") }
    }

    fun syncData() {
        val user = _uiState.value.user ?: return
        viewModelScope.launch {
            _uiState.update { it.copy(isLoading = true, syncMessage = "Đang đồng bộ...") }
            
            val result = syncRepository.syncDecksAndWords(user.uid)
            
            _uiState.update { 
                it.copy(
                    isLoading = false,
                    syncMessage = if (result.isSuccess) "Đồng bộ thành công!" else "Lỗi đồng bộ dữ liệu"
                )
            }
        }
    }

    fun clearMessage() {
        _uiState.update { it.copy(syncMessage = null) }
    }
}

class ProfileViewModelFactory(
    private val authRepository: AuthRepository,
    private val syncRepository: SyncRepository
) : ViewModelProvider.Factory {
    @Suppress("UNCHECKED_CAST")
    override fun <T : ViewModel> create(modelClass: Class<T>): T {
        return ProfileViewModel(authRepository, syncRepository) as T
    }
}