package com.tung.wordnest.ui.screens.onboarding

import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.pager.HorizontalPager
import androidx.compose.foundation.pager.rememberPagerState
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.SpanStyle
import androidx.compose.ui.text.buildAnnotatedString
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.text.withStyle
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.tung.wordnest.ui.components.core.OutlinedWordNestButton
import com.tung.wordnest.ui.components.core.PrimaryButton
import com.tung.wordnest.ui.theme.FrauncesFontFamily
import com.tung.wordnest.ui.theme.WordNestTheme
import kotlinx.coroutines.delay
import kotlinx.coroutines.launch

// ==========================================
// 1. SPLASH SCREEN
// ==========================================
@Composable
fun SplashView(
    onSplashComplete: () -> Unit,
    modifier: Modifier = Modifier
) {
    LaunchedEffect(Unit) {
        delay(1500) // Giả lập thời gian load
        onSplashComplete()
    }

    Box(
        modifier = modifier
            .fillMaxSize()
            .background(WordNestTheme.colors.forest900),
        contentAlignment = Alignment.Center
    ) {
        Column(horizontalAlignment = Alignment.CenterHorizontally) {
            Text(
                text = buildAnnotatedString {
                    withStyle(style = SpanStyle(color = WordNestTheme.colors.cream50)) {
                        append("Word")
                    }
                    withStyle(style = SpanStyle(color = WordNestTheme.colors.amber400)) {
                        append("Nest")
                    }
                },
                fontFamily = FrauncesFontFamily,
                fontSize = 48.sp,
                fontWeight = FontWeight.Bold
            )
            Spacer(modifier = Modifier.height(8.dp))
            Text(
                text = "Học từ vựng & TOEIC",
                style = WordNestTheme.typography.titleMedium,
                color = WordNestTheme.colors.sage300
            )
        }
    }
}

// ==========================================
// 2. ONBOARDING SCREEN
// ==========================================
data class OnboardingPage(val title: String, val description: String, val icon: String)

@Composable
fun OnboardingPagerScreen(
    onFinishOnboarding: () -> Unit,
    modifier: Modifier = Modifier
) {
    val pages = listOf(
        OnboardingPage(
            title = "Học từ vựng thông minh",
            description = "Ghi nhớ lâu hơn với Flashcard kết hợp thuật toán lặp lại ngắt quãng (Spaced Repetition).",
            icon = "🗂️"
        ),
        OnboardingPage(
            title = "Luyện thi TOEIC thực chiến",
            description = "Giải đề Reading & Listening, đặc biệt chế độ Nghe chép chính tả giúp tăng band điểm thần tốc.",
            icon = "🎧"
        ),
        OnboardingPage(
            title = "Theo dõi tiến độ & Đồng bộ",
            description = "Duy trì thói quen học mỗi ngày, lưu trữ dữ liệu an toàn trên đám mây.",
            icon = "📈"
        )
    )

    val pagerState = rememberPagerState(pageCount = { pages.size })
    val coroutineScope = rememberCoroutineScope()

    Scaffold(
        modifier = modifier.fillMaxSize(),
        containerColor = WordNestTheme.colors.background,
        contentWindowInsets = WindowInsets.systemBars
    ) { innerPadding ->
        Column(
            modifier = Modifier
                .padding(innerPadding)
                .fillMaxSize()
        ) {
            // Nút Bỏ qua (Skip)
            Row(
                modifier = Modifier.fillMaxWidth().padding(16.dp),
                horizontalArrangement = Arrangement.End
            ) {
                if (pagerState.currentPage < pages.size - 1) {
                    TextButton(onClick = onFinishOnboarding) {
                        Text("Bỏ qua", style = WordNestTheme.typography.labelMedium, color = WordNestTheme.colors.slate500)
                    }
                } else {
                    Spacer(modifier = Modifier.height(48.dp))
                }
            }

            HorizontalPager(
                state = pagerState,
                modifier = Modifier.weight(1f)
            ) { page ->
                Column(
                    modifier = Modifier.fillMaxSize().padding(horizontal = 32.dp),
                    horizontalAlignment = Alignment.CenterHorizontally,
                    verticalArrangement = Arrangement.Center
                ) {
                    Box(
                        modifier = Modifier
                            .size(120.dp)
                            .clip(CircleShape)
                            .background(WordNestTheme.colors.amberTint),
                        contentAlignment = Alignment.Center
                    ) {
                        Text(pages[page].icon, fontSize = 64.sp)
                    }
                    Spacer(modifier = Modifier.height(40.dp))
                    Text(
                        text = pages[page].title,
                        style = WordNestTheme.typography.headlineMedium,
                        color = WordNestTheme.colors.ink900,
                        textAlign = TextAlign.Center
                    )
                    Spacer(modifier = Modifier.height(16.dp))
                    Text(
                        text = pages[page].description,
                        style = WordNestTheme.typography.bodyMedium,
                        color = WordNestTheme.colors.slate500,
                        textAlign = TextAlign.Center
                    )
                }
            }

            // Controls
            Row(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(32.dp),
                horizontalArrangement = Arrangement.SpaceBetween,
                verticalAlignment = Alignment.CenterVertically
            ) {
                // Indicators
                Row(horizontalArrangement = Arrangement.spacedBy(8.dp)) {
                    repeat(pages.size) { iteration ->
                        val color = if (pagerState.currentPage == iteration) WordNestTheme.colors.forest900 else WordNestTheme.colors.line200
                        val width = if (pagerState.currentPage == iteration) 24.dp else 8.dp
                        Box(
                            modifier = Modifier
                                .height(8.dp)
                                .width(width)
                                .clip(CircleShape)
                                .background(color)
                        )
                    }
                }

                // Nút Tiếp theo
                PrimaryButton(
                    text = if (pagerState.currentPage == pages.size - 1) "Bắt đầu ngay" else "Tiếp theo",
                    onClick = {
                        if (pagerState.currentPage == pages.size - 1) {
                            onFinishOnboarding()
                        } else {
                            coroutineScope.launch {
                                pagerState.animateScrollToPage(pagerState.currentPage + 1)
                            }
                        }
                    }
                )
            }
        }
    }
}

// ==========================================
// 3. AUTH SCREEN
// ==========================================
@Composable
fun AuthScreen(
    isNetworkError: Boolean,
    onGoogleSignInClick: () -> Unit,
    onGuestModeClick: () -> Unit,
    modifier: Modifier = Modifier
) {
    var isLoading by remember { mutableStateOf(false) }

    Scaffold(
        modifier = modifier.fillMaxSize(),
        containerColor = WordNestTheme.colors.background,
        contentWindowInsets = WindowInsets.systemBars
    ) { innerPadding ->
        Column(
            modifier = Modifier
                .padding(innerPadding)
                .fillMaxSize()
                .padding(horizontal = 32.dp),
            horizontalAlignment = Alignment.CenterHorizontally,
            verticalArrangement = Arrangement.Center
        ) {
            Box(
                modifier = Modifier
                    .size(80.dp)
                    .clip(WordNestTheme.shapes.medium)
                    .background(WordNestTheme.colors.forest900),
                contentAlignment = Alignment.Center
            ) {
                Text(
                    text = buildAnnotatedString {
                        withStyle(style = SpanStyle(color = WordNestTheme.colors.cream50)) { append("W") }
                        withStyle(style = SpanStyle(color = WordNestTheme.colors.amber400)) { append("N") }
                    },
                    fontFamily = FrauncesFontFamily,
                    fontSize = 32.sp,
                    fontWeight = FontWeight.Bold
                )
            }
            
            Spacer(modifier = Modifier.height(32.dp))
            
            Text(
                text = "Chào mừng đến WordNest",
                style = WordNestTheme.typography.headlineMedium,
                color = WordNestTheme.colors.ink900,
                textAlign = TextAlign.Center
            )
            
            Spacer(modifier = Modifier.height(16.dp))
            Text(
                text = "Đăng nhập để đồng bộ dữ liệu trên nhiều thiết bị và không bao giờ mất tiến trình học.",
                style = WordNestTheme.typography.bodyMedium,
                color = WordNestTheme.colors.slate500,
                textAlign = TextAlign.Center
            )
            
            Spacer(modifier = Modifier.height(48.dp))

            if (isNetworkError) {
                Surface(
                    color = WordNestTheme.colors.coralTint,
                    shape = WordNestTheme.shapes.small,
                    modifier = Modifier.fillMaxWidth().padding(bottom = 16.dp)
                ) {
                    Text(
                        text = "Không có kết nối mạng. Vui lòng thử lại.",
                        style = WordNestTheme.typography.labelMedium,
                        color = WordNestTheme.colors.error600,
                        modifier = Modifier.padding(12.dp),
                        textAlign = TextAlign.Center
                    )
                }
            }

            PrimaryButton(
                text = "Tiếp tục với Google",
                onClick = { 
                    isLoading = true
                    onGoogleSignInClick()
                },
                isLoading = isLoading,
                modifier = Modifier.fillMaxWidth()
            )
            
            Spacer(modifier = Modifier.height(16.dp))
            
            OutlinedWordNestButton(
                text = "Trải nghiệm ngay không cần đăng nhập",
                onClick = onGuestModeClick,
                modifier = Modifier.fillMaxWidth(),
                enabled = !isLoading
            )
        }
    }
}

// ==========================================
// PREVIEWS
// ==========================================
@Preview(showBackground = true)
@Composable
fun SplashPreview() {
    WordNestTheme { SplashView(onSplashComplete = {}) }
}

@Preview(showBackground = true)
@Composable
fun OnboardingPreview() {
    WordNestTheme { OnboardingPagerScreen(onFinishOnboarding = {}) }
}

@Preview(showBackground = true)
@Composable
fun AuthPreview() {
    WordNestTheme { 
        AuthScreen(
            isNetworkError = true, 
            onGoogleSignInClick = {}, 
            onGuestModeClick = {}
        ) 
    }
}
