package com.tung.wordnest.ui.listening

import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.automirrored.filled.ArrowForward
import androidx.compose.material.icons.filled.PlayArrow
import androidx.compose.material.icons.filled.Replay
import androidx.compose.material.icons.filled.Stop
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun IntensiveListeningScreen(
    viewModel: IntensiveListeningViewModel,
    modifier: Modifier = Modifier
) {
    val state by viewModel.uiState.collectAsState()
    val context = LocalContext.current

    LaunchedEffect(Unit) {
        viewModel.initPlayer(context)
    }

    Scaffold(
        topBar = {
            TopAppBar(
                title = { Text("Luyện nghe chép chính tả", fontWeight = FontWeight.Bold) },
                colors = TopAppBarDefaults.topAppBarColors(
                    containerColor = MaterialTheme.colorScheme.surface
                )
            )
        },
        modifier = modifier
    ) { padding ->
        Column(
            modifier = Modifier
                .fillMaxSize()
                .padding(padding)
                .padding(20.dp),
            horizontalAlignment = Alignment.CenterHorizontally
        ) {
            state.currentSegment?.let { segment ->
                Text(
                    text = segment.title,
                    style = MaterialTheme.typography.titleMedium,
                    color = MaterialTheme.colorScheme.primary,
                    fontWeight = FontWeight.SemiBold
                )

                Spacer(modifier = Modifier.height(16.dp))

                // Card Audio Player
                Card(
                    modifier = Modifier.fillMaxWidth(),
                    shape = RoundedCornerShape(16.dp),
                    colors = CardDefaults.cardColors(
                        containerColor = MaterialTheme.colorScheme.surfaceVariant
                    )
                ) {
                    Row(
                        modifier = Modifier
                            .fillMaxWidth()
                            .padding(16.dp),
                        verticalAlignment = Alignment.CenterVertically,
                        horizontalArrangement = Arrangement.Center
                    ) {
                        FilledIconButton(
                            onClick = {
                                if (state.isPlaying) viewModel.stopAudio() else viewModel.playCurrentSegment()
                            },
                            modifier = Modifier.size(56.dp)
                        ) {
                            Icon(
                                imageVector = if (state.isPlaying) Icons.Default.Stop else Icons.Default.PlayArrow,
                                contentDescription = "Play/Stop"
                            )
                        }

                        Spacer(modifier = Modifier.width(16.dp))

                        OutlinedIconButton(
                            onClick = { viewModel.playCurrentSegment() },
                            modifier = Modifier.size(56.dp)
                        ) {
                            Icon(
                                imageVector = Icons.Default.Replay,
                                contentDescription = "Nghe lại"
                            )
                        }
                    }
                }

                Spacer(modifier = Modifier.height(24.dp))

                // Ô nhập nội dung nghe được
                OutlinedTextField(
                    value = state.userInput,
                    onValueChange = { viewModel.updateUserInput(it) },
                    label = { Text("Gõ lại những gì bạn nghe được...") },
                    modifier = Modifier
                        .fillMaxWidth()
                        .height(140.dp),
                    shape = RoundedCornerShape(16.dp)
                )

                Spacer(modifier = Modifier.height(16.dp))

                Button(
                    onClick = { viewModel.checkAnswer() },
                    modifier = Modifier
                        .fillMaxWidth()
                        .height(50.dp),
                    shape = RoundedCornerShape(12.dp)
                ) {
                    Text("Kiểm tra đáp án", fontSize = 16.sp, fontWeight = FontWeight.Bold)
                }

                Spacer(modifier = Modifier.height(20.dp))

                // Kết quả & Transcript
                if (state.isAnswerRevealed) {
                    Card(
                        modifier = Modifier.fillMaxWidth(),
                        shape = RoundedCornerShape(16.dp),
                        colors = CardDefaults.cardColors(
                            containerColor = if (state.isCorrect == true) Color(0xFFDCFCE7) else Color(0xFFFEE2E2)
                        )
                    ) {
                        Column(modifier = Modifier.padding(16.dp)) {
                            Text(
                                text = if (state.isCorrect == true) "🎉 Chính xác!" else "❌ Chưa chính xác!",
                                fontWeight = FontWeight.Bold,
                                color = if (state.isCorrect == true) Color(0xFF166534) else Color(0xFF991B1B)
                            )
                            Spacer(modifier = Modifier.height(8.dp))
                            Text(
                                text = "Đáp án: ${segment.transcript}",
                                fontWeight = FontWeight.SemiBold,
                                color = Color.Black
                            )
                            Spacer(modifier = Modifier.height(4.dp))
                            Text(
                                text = "Dịch nghĩa: ${segment.translation}",
                                style = MaterialTheme.typography.bodyMedium,
                                color = Color.DarkGray
                            )
                        }
                    }

                    Spacer(modifier = Modifier.height(16.dp))

                    Button(
                        onClick = { viewModel.nextSegment() },
                        modifier = Modifier.align(Alignment.End),
                        shape = RoundedCornerShape(12.dp)
                    ) {
                        Text("Câu tiếp theo")
                        Spacer(modifier = Modifier.width(6.dp))
                        Icon(imageVector = Icons.AutoMirrored.Filled.ArrowForward, contentDescription = null)
                    }
                }
            }
        }
    }
}
