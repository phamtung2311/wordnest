package com.tung.wordnest.ui.screens.home

data class WordPreviewUiModel(
    val id: String,
    val word: String,
    val meaning: String
)

data class ActiveSessionUiModel(
    val sessionId: String,
    val title: String,
    val progress: Float
)

data class HomeUiState(
    val isLoading: Boolean = false,
    val isOffline: Boolean = false,
    val errorMessage: String? = null,
    
    // Dữ liệu Hero
    val dueWordsCount: Int = 0,
    val newWordsCount: Int = 0,
    val reviewWordsCount: Int = 0,
    val isTodayCompleted: Boolean = false,
    val hasAnyDeck: Boolean = true, // Quản lý trạng thái New User (chưa có thẻ/bộ nào)
    
    // Dữ liệu Từ vừa thêm
    val recentWords: List<WordPreviewUiModel> = emptyList(),
    val totalAddedWords: Int = 0,
    
    // Dữ liệu Luyện thi & Học dở
    val activeSessionSpotlight: ActiveSessionUiModel? = null,
    
    // Dữ liệu Tiến độ
    val todayStudyMinutes: Int = 0,
    val dailyGoalMinutes: Int = 15,
    val currentStreakDays: Int = 0,
    val totalSuccessDays: Int = 0
)
