package com.tung.wordnest.ui.components.core

import androidx.compose.foundation.layout.*
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import com.tung.wordnest.ui.theme.WordNestTheme

@Composable
fun SectionHeader(
    title: String,
    modifier: Modifier = Modifier,
    overline: String? = null,
    subtitle: String? = null,
    actionText: String? = null,
    overlineColor: Color = WordNestTheme.colors.coral500,
    onActionClick: (() -> Unit)? = null
) {
    Column(
        modifier = modifier.fillMaxWidth(),
        verticalArrangement = Arrangement.spacedBy(4.dp)
    ) {
        if (overline != null) {
            Text(
                text = overline.uppercase(),
                style = WordNestTheme.typography.labelSmall, // labelSmall is Overline
                color = overlineColor
            )
        }
        Row(
            modifier = Modifier.fillMaxWidth(),
            horizontalArrangement = Arrangement.SpaceBetween,
            verticalAlignment = Alignment.CenterVertically
        ) {
            Text(
                text = title,
                style = WordNestTheme.typography.headlineMedium, // Fraunces 22.sp Bold
                color = WordNestTheme.colors.primaryText,
                modifier = Modifier.weight(1f)
            )
            if (actionText != null && onActionClick != null) {
                TextLinkButton(
                    text = actionText,
                    onClick = onActionClick,
                    modifier = Modifier.padding(start = 16.dp)
                )
            }
        }
        if (subtitle != null) {
            Text(
                text = subtitle,
                style = WordNestTheme.typography.bodyMedium,
                color = WordNestTheme.colors.secondaryText
            )
        }
    }
}

@Preview(showBackground = true)
@Composable
fun SectionHeaderPreview() {
    WordNestTheme {
        Column(
            modifier = Modifier
                .fillMaxWidth()
                .padding(16.dp),
            verticalArrangement = Arrangement.spacedBy(24.dp)
        ) {
            SectionHeader(
                title = "Daily Vocabulary"
            )
            
            SectionHeader(
                overline = "Recommended",
                title = "Popular Topics",
                subtitle = "Choose a topic to start learning"
            )

            SectionHeader(
                overline = "In Progress",
                title = "My Flashcards",
                actionText = "View All",
                onActionClick = {}
            )
            
            SectionHeader(
                overline = "Review",
                overlineColor = WordNestTheme.colors.forest700,
                title = "Words to Practice",
                subtitle = "You have 15 words to review today",
                actionText = "Start",
                onActionClick = {}
            )
        }
    }
}
