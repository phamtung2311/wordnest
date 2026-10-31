package com.tung.wordnest.ui.components.core

import androidx.compose.animation.core.animateFloatAsState
import androidx.compose.animation.core.tween
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.isSystemInDarkTheme
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.text.BasicTextField
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Close
import androidx.compose.material.icons.filled.Search
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.SolidColor
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.dp
import com.tung.wordnest.ui.theme.WordNestTheme

@Composable
fun WordNestSearchField(
    query: String,
    onQueryChange: (String) -> Unit,
    modifier: Modifier = Modifier,
    placeholder: String = "Search..."
) {
    val backgroundColor = if (isSystemInDarkTheme()) {
        WordNestTheme.colors.surface
    } else {
        WordNestTheme.colors.beige100
    }
    
    val textColor = WordNestTheme.colors.primaryText
    val iconColor = WordNestTheme.colors.slate500

    BasicTextField(
        value = query,
        onValueChange = onQueryChange,
        modifier = modifier
            .fillMaxWidth()
            .height(48.dp)
            .background(backgroundColor, WordNestTheme.shapes.small) // 14.dp shape
            .padding(horizontal = 16.dp),
        textStyle = WordNestTheme.typography.bodyMedium.copy(color = textColor),
        cursorBrush = SolidColor(WordNestTheme.colors.forest900),
        singleLine = true,
        decorationBox = { innerTextField ->
            Row(
                verticalAlignment = Alignment.CenterVertically,
                modifier = Modifier.fillMaxSize()
            ) {
                Icon(
                    imageVector = Icons.Default.Search,
                    contentDescription = "Search",
                    tint = iconColor,
                    modifier = Modifier.size(20.dp)
                )
                Spacer(modifier = Modifier.width(8.dp))
                Box(modifier = Modifier.weight(1f)) {
                    if (query.isEmpty()) {
                        Text(
                            text = placeholder,
                            style = WordNestTheme.typography.bodyMedium,
                            color = WordNestTheme.colors.slate400
                        )
                    }
                    innerTextField()
                }
                if (query.isNotEmpty()) {
                    IconButton(
                        onClick = { onQueryChange("") },
                        modifier = Modifier.size(24.dp)
                    ) {
                        Icon(
                            imageVector = Icons.Default.Close,
                            contentDescription = "Clear",
                            tint = iconColor,
                            modifier = Modifier.size(16.dp)
                        )
                    }
                }
            }
        }
    )
}

@Composable
fun WordNestFilterChip(
    text: String,
    selected: Boolean,
    onClick: () -> Unit,
    modifier: Modifier = Modifier
) {
    val backgroundColor = if (selected) {
        WordNestTheme.colors.forest900
    } else {
        if (isSystemInDarkTheme()) WordNestTheme.colors.background else WordNestTheme.colors.beige100
    }
    
    val textColor = if (selected) {
        WordNestTheme.colors.surfaceWhite
    } else {
        WordNestTheme.colors.ink900
    }
    
    val borderColor = if (selected) {
        Color.Transparent
    } else {
        WordNestTheme.colors.line200
    }

    Box(
        modifier = modifier
            .height(32.dp)
            .clip(CircleShape) // 50.dp radius for this height is effectively CircleShape
            .background(backgroundColor)
            .then(
                if (!selected) Modifier.border(1.dp, borderColor, CircleShape)
                else Modifier
            )
            .clickable(onClick = onClick)
            .padding(horizontal = 16.dp),
        contentAlignment = Alignment.Center
    ) {
        Text(
            text = text,
            style = WordNestTheme.typography.labelMedium,
            color = textColor
        )
    }
}

@Composable
fun WordNestProgressBar(
    progress: Float, // 0.0 to 1.0
    modifier: Modifier = Modifier,
    height: Dp = 8.dp,
    progressColor: Color = WordNestTheme.colors.mint500
) {
    val animatedProgress by animateFloatAsState(
        targetValue = progress.coerceIn(0f, 1f),
        animationSpec = tween(500),
        label = "progress"
    )

    Box(
        modifier = modifier
            .fillMaxWidth()
            .height(height)
            .clip(CircleShape)
            .background(WordNestTheme.colors.line200)
    ) {
        Box(
            modifier = Modifier
                .fillMaxHeight()
                .fillMaxWidth(animatedProgress)
                .clip(CircleShape)
                .background(progressColor)
        )
    }
}

@Preview(showBackground = true, name = "Inputs And Chips")
@Composable
fun InputsAndChipsPreview() {
    WordNestTheme {
        Column(
            modifier = Modifier
                .fillMaxWidth()
                .padding(16.dp),
            verticalArrangement = Arrangement.spacedBy(16.dp)
        ) {
            // Search Fields
            var searchQuery by remember { mutableStateOf("") }
            WordNestSearchField(
                query = searchQuery,
                onQueryChange = { searchQuery = it }
            )

            WordNestSearchField(
                query = "Nature",
                onQueryChange = {}
            )

            HorizontalDivider(color = WordNestTheme.colors.line200)

            // Chips
            Row(horizontalArrangement = Arrangement.spacedBy(8.dp)) {
                WordNestFilterChip(
                    text = "All",
                    selected = true,
                    onClick = {}
                )
                WordNestFilterChip(
                    text = "Beginner",
                    selected = false,
                    onClick = {}
                )
                WordNestFilterChip(
                    text = "Intermediate",
                    selected = false,
                    onClick = {}
                )
            }

            HorizontalDivider(color = WordNestTheme.colors.line200)

            // Progress Bars
            WordNestProgressBar(progress = 0.3f, progressColor = WordNestTheme.colors.amber500)
            WordNestProgressBar(progress = 0.7f, height = 6.dp)
            WordNestProgressBar(progress = 1.0f)
        }
    }
}
