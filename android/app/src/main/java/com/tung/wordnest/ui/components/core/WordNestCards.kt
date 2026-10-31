package com.tung.wordnest.ui.components.core

import androidx.compose.foundation.BorderStroke
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.isSystemInDarkTheme
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.automirrored.filled.VolumeUp
import androidx.compose.material.icons.filled.AutoAwesome
import androidx.compose.material.icons.filled.ChevronRight
import androidx.compose.material.icons.filled.MoreVert
import androidx.compose.material.icons.filled.PlayArrow
import androidx.compose.material.icons.filled.VolumeUp
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.tung.wordnest.ui.theme.*

@Composable
fun WordChip(
    englishWord: String,
    vietnameseMeaning: String,
    onClick: () -> Unit,
    onSpeakerClick: () -> Unit,
    modifier: Modifier = Modifier
) {
    val backgroundColor = if (isSystemInDarkTheme()) {
        WordNestTheme.colors.surface
    } else {
        WordNestTheme.colors.beige100
    }

    Row(
        modifier = modifier
            .fillMaxWidth()
            .defaultMinSize(minHeight = 60.dp)
            .clip(WordNestTheme.shapes.small) // 14.dp
            .background(backgroundColor)
            .clickable(onClick = onClick)
            .padding(horizontal = 16.dp, vertical = 10.dp),
        verticalAlignment = Alignment.CenterVertically
    ) {
        Column(
            modifier = Modifier.weight(1f),
            verticalArrangement = Arrangement.Center
        ) {
            Text(
                text = englishWord,
                style = WordNestTheme.typography.titleMedium,
                color = WordNestTheme.colors.primaryText,
                maxLines = 1,
                overflow = TextOverflow.Ellipsis
            )
            Spacer(modifier = Modifier.height(2.dp))
            Text(
                text = vietnameseMeaning,
                style = WordNestTheme.typography.bodyMedium,
                color = WordNestTheme.colors.slate500,
                maxLines = 1,
                overflow = TextOverflow.Ellipsis
            )
        }
        
        Spacer(modifier = Modifier.width(8.dp))
        
        IconButton(
            onClick = onSpeakerClick,
            modifier = Modifier.size(32.dp)
        ) {
            Icon(
                imageVector = Icons.AutoMirrored.Filled.VolumeUp,
                contentDescription = "Pronounce",
                tint = WordNestTheme.colors.forest700,
                modifier = Modifier.size(20.dp)
            )
        }
    }
}

@Composable
fun DeckCard(
    deckName: String,
    totalWords: Int,
    wordsToReview: Int,
    progress: Float,
    emoji: String,
    emojiBackgroundColor: Color,
    onClick: () -> Unit,
    onMenuClick: () -> Unit,
    modifier: Modifier = Modifier
) {
    Surface(
        modifier = modifier
            .fillMaxWidth()
            .clip(WordNestTheme.shapes.medium) // 20.dp
            .clickable(onClick = onClick),
        shape = WordNestTheme.shapes.medium,
        color = WordNestTheme.colors.surface,
        border = BorderStroke(1.dp, WordNestTheme.colors.line200)
    ) {
        Column(modifier = Modifier.padding(16.dp)) {
            Row(
                verticalAlignment = Alignment.CenterVertically,
                modifier = Modifier.fillMaxWidth()
            ) {
                // Emoji Icon Box
                Box(
                    modifier = Modifier
                        .size(48.dp)
                        .clip(WordNestTheme.shapes.small)
                        .background(emojiBackgroundColor),
                    contentAlignment = Alignment.Center
                ) {
                    Text(text = emoji, fontSize = 24.sp)
                }
                
                Spacer(modifier = Modifier.width(12.dp))
                
                // Content
                Column(modifier = Modifier.weight(1f)) {
                    Text(
                        text = deckName,
                        style = WordNestTheme.typography.titleMedium,
                        color = WordNestTheme.colors.primaryText,
                        maxLines = 1,
                        overflow = TextOverflow.Ellipsis
                    )
                    Spacer(modifier = Modifier.height(4.dp))
                    Row(
                        verticalAlignment = Alignment.CenterVertically,
                        horizontalArrangement = Arrangement.spacedBy(8.dp)
                    ) {
                        Text(
                            text = "$totalWords words",
                            style = WordNestTheme.typography.labelMedium,
                            color = WordNestTheme.colors.slate500
                        )
                        if (wordsToReview > 0) {
                            Box(
                                modifier = Modifier
                                    .clip(CircleShape)
                                    .background(WordNestTheme.colors.coralTint)
                                    .padding(horizontal = 6.dp, vertical = 2.dp)
                            ) {
                                Text(
                                    text = "$wordsToReview review",
                                    style = WordNestTheme.typography.labelSmall,
                                    color = WordNestTheme.colors.coral500
                                )
                            }
                        }
                    }
                }
                
                // Menu Button
                IconButton(
                    onClick = onMenuClick,
                    modifier = Modifier.size(36.dp)
                ) {
                    Icon(
                        imageVector = Icons.Default.MoreVert,
                        contentDescription = "More Options",
                        tint = WordNestTheme.colors.slate500
                    )
                }
            }
            
            Spacer(modifier = Modifier.height(16.dp))
            WordNestProgressBar(progress = progress, height = 6.dp)
        }
    }
}

@Composable
fun ShortcutCard(
    title: String,
    subtitle: String,
    icon: @Composable () -> Unit,
    onClick: () -> Unit,
    modifier: Modifier = Modifier,
    isSpotlight: Boolean = false,
    progress: Float? = null
) {
    val backgroundColor = if (isSpotlight) {
        if (isSystemInDarkTheme()) WordNestTheme.colors.spotlight else WordNestTheme.colors.forest900
    } else {
        WordNestTheme.colors.surface
    }
    
    val contentColor = if (isSpotlight) {
        WordNestTheme.colors.surfaceWhite
    } else {
        WordNestTheme.colors.primaryText
    }
    
    val subtitleColor = if (isSpotlight) {
        WordNestTheme.colors.surfaceWhite.copy(alpha = 0.8f)
    } else {
        WordNestTheme.colors.slate500
    }

    Surface(
        modifier = modifier
            .fillMaxWidth()
            .defaultMinSize(minHeight = 80.dp)
            .clip(WordNestTheme.shapes.medium)
            .clickable(onClick = onClick),
        shape = WordNestTheme.shapes.medium,
        color = backgroundColor,
        border = if (isSpotlight) null else BorderStroke(1.dp, WordNestTheme.colors.line200)
    ) {
        Column(
            modifier = Modifier.padding(16.dp),
            verticalArrangement = Arrangement.Center
        ) {
            Row(
                verticalAlignment = Alignment.CenterVertically,
                modifier = Modifier.fillMaxWidth()
            ) {
                // Icon wrapper
                Box(
                    modifier = Modifier.size(44.dp),
                    contentAlignment = Alignment.Center
                ) {
                    icon()
                }
                
                Spacer(modifier = Modifier.width(12.dp))
                
                Column(modifier = Modifier.weight(1f)) {
                    Text(
                        text = title,
                        style = WordNestTheme.typography.titleMedium,
                        color = contentColor,
                        maxLines = 1,
                        overflow = TextOverflow.Ellipsis
                    )
                    Spacer(modifier = Modifier.height(2.dp))
                    Text(
                        text = subtitle,
                        style = WordNestTheme.typography.bodyMedium,
                        color = subtitleColor,
                        maxLines = 1,
                        overflow = TextOverflow.Ellipsis
                    )
                }
                
                Spacer(modifier = Modifier.width(8.dp))
                
                Icon(
                    imageVector = Icons.Default.ChevronRight,
                    contentDescription = null,
                    tint = if (isSpotlight) WordNestTheme.colors.surfaceWhite.copy(alpha = 0.5f) else WordNestTheme.colors.slate400
                )
            }
            
            if (isSpotlight && progress != null) {
                Spacer(modifier = Modifier.height(12.dp))
                WordNestProgressBar(
                    progress = progress,
                    height = 6.dp,
                    progressColor = WordNestTheme.colors.amber400
                )
            }
        }
    }
}

@Composable
fun StatCard(
    number: String,
    label: String,
    icon: @Composable () -> Unit,
    backgroundColor: Color,
    modifier: Modifier = Modifier
) {
    Surface(
        modifier = modifier
            .width(IntrinsicSize.Min)
            .clip(WordNestTheme.shapes.medium),
        shape = WordNestTheme.shapes.medium,
        color = backgroundColor,
    ) {
        Column(
            modifier = Modifier.padding(16.dp),
            horizontalAlignment = Alignment.Start
        ) {
            Box(
                modifier = Modifier
                    .size(44.dp)
                    .clip(CircleShape)
                    .background(WordNestTheme.colors.surfaceWhite.copy(alpha = 0.5f)),
                contentAlignment = Alignment.Center
            ) {
                icon()
            }
            Spacer(modifier = Modifier.height(12.dp))
            Text(
                text = number,
                style = WordNestTheme.typography.displayLarge,
                color = WordNestTheme.colors.ink900
            )
            Spacer(modifier = Modifier.height(4.dp))
            Text(
                text = label,
                style = WordNestTheme.typography.labelMedium,
                color = WordNestTheme.colors.slate500
            )
        }
    }
}

@Preview(showBackground = true, name = "WordNest Cards")
@Composable
fun WordNestCardsPreview() {
    WordNestTheme {
        Column(
            modifier = Modifier
                .fillMaxWidth()
                .background(WordNestTheme.colors.background)
                .padding(16.dp),
            verticalArrangement = Arrangement.spacedBy(16.dp)
        ) {
            WordChip(
                englishWord = "Serendipity",
                vietnameseMeaning = "Sự tình cờ may mắn, duyên kỳ ngộ",
                onClick = {},
                onSpeakerClick = {}
            )
            
            DeckCard(
                deckName = "IELTS Vocabulary Advanced",
                totalWords = 150,
                wordsToReview = 12,
                progress = 0.6f,
                emoji = "📚",
                emojiBackgroundColor = WordNestTheme.colors.amberTint,
                onClick = {},
                onMenuClick = {}
            )
            
            ShortcutCard(
                title = "Continue Learning",
                subtitle = "Unit 3: Science & Tech",
                isSpotlight = true,
                progress = 0.45f,
                icon = {
                    Box(
                        modifier = Modifier
                            .fillMaxSize()
                            .clip(CircleShape)
                            .background(WordNestTheme.colors.amber400),
                        contentAlignment = Alignment.Center
                    ) {
                        Icon(Icons.Default.PlayArrow, contentDescription = null, tint = WordNestTheme.colors.forest900)
                    }
                },
                onClick = {}
            )
            
            ShortcutCard(
                title = "Daily Quizzes",
                subtitle = "Test your memory",
                icon = {
                    Box(
                        modifier = Modifier
                            .fillMaxSize()
                            .clip(CircleShape)
                            .background(WordNestTheme.colors.coralTint),
                        contentAlignment = Alignment.Center
                    ) {
                        Icon(Icons.Default.AutoAwesome, contentDescription = null, tint = WordNestTheme.colors.coral500)
                    }
                },
                onClick = {}
            )

            Row(horizontalArrangement = Arrangement.spacedBy(16.dp)) {
                StatCard(
                    number = "45",
                    label = "Day Streak",
                    icon = { Text("🔥", fontSize = 20.sp) },
                    backgroundColor = WordNestTheme.colors.orangeTint,
                    modifier = Modifier.weight(1f)
                )
                StatCard(
                    number = "320",
                    label = "Words Learnt",
                    icon = { Text("🧠", fontSize = 20.sp) },
                    backgroundColor = WordNestTheme.colors.pinkTint,
                    modifier = Modifier.weight(1f)
                )
            }
        }
    }
}
