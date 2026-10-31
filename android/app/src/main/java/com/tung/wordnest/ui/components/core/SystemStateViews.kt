package com.tung.wordnest.ui.components.core

import androidx.compose.animation.core.*
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.CloudOff
import androidx.compose.material.icons.filled.Inbox
import androidx.compose.material3.Icon
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.dp
import com.tung.wordnest.ui.theme.WordNestTheme

@Composable
fun EmptyStateView(
    title: String,
    description: String,
    modifier: Modifier = Modifier,
    buttonText: String? = null,
    onButtonClick: (() -> Unit)? = null,
    icon: @Composable () -> Unit = {
        Icon(
            imageVector = Icons.Default.Inbox,
            contentDescription = null,
            modifier = Modifier.size(80.dp),
            tint = WordNestTheme.colors.slate400
        )
    }
) {
    Column(
        modifier = modifier
            .fillMaxWidth()
            .padding(32.dp),
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.Center
    ) {
        icon()
        Spacer(modifier = Modifier.height(24.dp))
        Text(
            text = title,
            style = WordNestTheme.typography.headlineMedium,
            color = WordNestTheme.colors.primaryText,
            textAlign = TextAlign.Center
        )
        Spacer(modifier = Modifier.height(8.dp))
        Text(
            text = description,
            style = WordNestTheme.typography.bodyMedium,
            color = WordNestTheme.colors.slate500,
            textAlign = TextAlign.Center
        )
        if (buttonText != null && onButtonClick != null) {
            Spacer(modifier = Modifier.height(24.dp))
            PrimaryButton(
                text = buttonText,
                onClick = onButtonClick
            )
        }
    }
}

@Composable
fun ShimmerSkeletonBox(
    modifier: Modifier = Modifier,
    cornerRadius: Dp = 14.dp
) {
    val shimmerColors = listOf(
        WordNestTheme.colors.line200.copy(alpha = 0.6f),
        WordNestTheme.colors.line200.copy(alpha = 0.2f),
        WordNestTheme.colors.line200.copy(alpha = 0.6f),
    )

    val transition = rememberInfiniteTransition(label = "shimmer")
    val translateAnim by transition.animateFloat(
        initialValue = 0f,
        targetValue = 1000f,
        animationSpec = infiniteRepeatable(
            animation = tween(durationMillis = 1000, easing = LinearEasing),
            repeatMode = RepeatMode.Restart
        ),
        label = "shimmer_translate"
    )

    val brush = Brush.linearGradient(
        colors = shimmerColors,
        start = Offset.Zero,
        end = Offset(x = translateAnim, y = translateAnim)
    )

    Box(
        modifier = modifier
            .background(brush, shape = RoundedCornerShape(cornerRadius))
    )
}

@Composable
fun OfflineBanner(
    modifier: Modifier = Modifier
) {
    Row(
        modifier = modifier
            .fillMaxWidth()
            .background(WordNestTheme.colors.amberTint)
            .padding(horizontal = 16.dp, vertical = 8.dp),
        verticalAlignment = Alignment.CenterVertically,
        horizontalArrangement = Arrangement.Center
    ) {
        Icon(
            imageVector = Icons.Default.CloudOff,
            contentDescription = "Offline Mode",
            tint = WordNestTheme.colors.amber500,
            modifier = Modifier.size(16.dp)
        )
        Spacer(modifier = Modifier.width(8.dp))
        Text(
            text = "You're learning in offline mode",
            style = WordNestTheme.typography.labelMedium,
            color = WordNestTheme.colors.ink900
        )
    }
}

@Preview(showBackground = true, name = "System State Views")
@Composable
fun SystemStateViewsPreview() {
    WordNestTheme {
        Column(
            modifier = Modifier
                .fillMaxSize()
                .background(WordNestTheme.colors.background),
            verticalArrangement = Arrangement.spacedBy(24.dp)
        ) {
            OfflineBanner()

            EmptyStateView(
                title = "No Flashcards Yet",
                description = "You haven't created any flashcards in this deck. Start adding words to build your vocabulary.",
                buttonText = "Add First Word",
                onButtonClick = {}
            )
            
            // Skeleton Loading Example
            Column(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(horizontal = 16.dp),
                verticalArrangement = Arrangement.spacedBy(16.dp)
            ) {
                Text(
                    text = "Loading State Example:",
                    style = WordNestTheme.typography.labelSmall,
                    color = WordNestTheme.colors.slate500
                )
                
                ShimmerSkeletonBox(
                    modifier = Modifier
                        .fillMaxWidth()
                        .height(80.dp),
                    cornerRadius = 20.dp
                )
                
                ShimmerSkeletonBox(
                    modifier = Modifier
                        .fillMaxWidth()
                        .height(60.dp),
                    cornerRadius = 14.dp
                )
            }
        }
    }
}
