package com.tung.wordnest.ui.components.core

import androidx.compose.foundation.BorderStroke
import androidx.compose.foundation.layout.*
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Star
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.tung.wordnest.ui.theme.*

@Composable
fun PrimaryButton(
    text: String,
    onClick: () -> Unit,
    modifier: Modifier = Modifier,
    enabled: Boolean = true,
    isLoading: Boolean = false,
    leadingIcon: @Composable (() -> Unit)? = null,
    trailingIcon: @Composable (() -> Unit)? = null,
) {
    Button(
        onClick = onClick,
        modifier = modifier.defaultMinSize(minHeight = 48.dp),
        enabled = enabled && !isLoading,
        shape = WordNestTheme.shapes.small, // 14.dp from theme
        colors = ButtonDefaults.buttonColors(
            containerColor = WordNestTheme.colors.amber400,
            contentColor = WordNestTheme.colors.forest900,
            disabledContainerColor = WordNestTheme.colors.line200,
            disabledContentColor = WordNestTheme.colors.slate400
        )
    ) {
        if (isLoading) {
            CircularProgressIndicator(
                modifier = Modifier.size(20.dp),
                color = WordNestTheme.colors.forest900,
                strokeWidth = 2.dp
            )
        } else {
            Row(
                horizontalArrangement = Arrangement.spacedBy(8.dp),
                verticalAlignment = Alignment.CenterVertically
            ) {
                leadingIcon?.invoke()
                Text(
                    text = text,
                    fontWeight = FontWeight.Bold,
                    style = WordNestTheme.typography.titleMedium
                )
                trailingIcon?.invoke()
            }
        }
    }
}

@Composable
fun DarkButton(
    text: String,
    onClick: () -> Unit,
    modifier: Modifier = Modifier,
    enabled: Boolean = true,
    isLoading: Boolean = false,
    leadingIcon: @Composable (() -> Unit)? = null,
    trailingIcon: @Composable (() -> Unit)? = null,
) {
    Button(
        onClick = onClick,
        modifier = modifier.defaultMinSize(minHeight = 48.dp),
        enabled = enabled && !isLoading,
        shape = WordNestTheme.shapes.small,
        colors = ButtonDefaults.buttonColors(
            containerColor = WordNestTheme.colors.forest900,
            contentColor = WordNestTheme.colors.surfaceWhite,
            disabledContainerColor = WordNestTheme.colors.line200,
            disabledContentColor = WordNestTheme.colors.slate400
        )
    ) {
        if (isLoading) {
            CircularProgressIndicator(
                modifier = Modifier.size(20.dp),
                color = WordNestTheme.colors.surfaceWhite,
                strokeWidth = 2.dp
            )
        } else {
            Row(
                horizontalArrangement = Arrangement.spacedBy(8.dp),
                verticalAlignment = Alignment.CenterVertically
            ) {
                leadingIcon?.invoke()
                Text(
                    text = text,
                    fontWeight = FontWeight.Bold,
                    style = WordNestTheme.typography.titleMedium
                )
                trailingIcon?.invoke()
            }
        }
    }
}

@Composable
fun OutlinedWordNestButton(
    text: String,
    onClick: () -> Unit,
    modifier: Modifier = Modifier,
    enabled: Boolean = true,
    isLoading: Boolean = false,
    leadingIcon: @Composable (() -> Unit)? = null,
    trailingIcon: @Composable (() -> Unit)? = null,
) {
    OutlinedButton(
        onClick = onClick,
        modifier = modifier.defaultMinSize(minHeight = 48.dp),
        enabled = enabled && !isLoading,
        shape = WordNestTheme.shapes.small,
        border = BorderStroke(
            width = 1.dp,
            color = if (enabled) WordNestTheme.colors.forest900 else WordNestTheme.colors.line200
        ),
        colors = ButtonDefaults.outlinedButtonColors(
            contentColor = WordNestTheme.colors.forest900,
            disabledContentColor = WordNestTheme.colors.slate400
        )
    ) {
        if (isLoading) {
            CircularProgressIndicator(
                modifier = Modifier.size(20.dp),
                color = WordNestTheme.colors.forest900,
                strokeWidth = 2.dp
            )
        } else {
            Row(
                horizontalArrangement = Arrangement.spacedBy(8.dp),
                verticalAlignment = Alignment.CenterVertically
            ) {
                leadingIcon?.invoke()
                Text(
                    text = text,
                    fontWeight = FontWeight.Bold,
                    style = WordNestTheme.typography.titleMedium
                )
                trailingIcon?.invoke()
            }
        }
    }
}

@Composable
fun TextLinkButton(
    text: String,
    onClick: () -> Unit,
    modifier: Modifier = Modifier,
    enabled: Boolean = true
) {
    TextButton(
        onClick = onClick,
        modifier = modifier.defaultMinSize(minWidth = 48.dp, minHeight = 48.dp),
        enabled = enabled,
        colors = ButtonDefaults.textButtonColors(
            contentColor = WordNestTheme.colors.forest900,
            disabledContentColor = WordNestTheme.colors.slate400
        )
    ) {
        Text(
            text = text,
            fontWeight = FontWeight.Bold,
            fontSize = 13.sp,
            style = WordNestTheme.typography.labelMedium
        )
    }
}

@Preview(showBackground = true, name = "WordNest Buttons")
@Composable
fun WordNestButtonsPreview() {
    WordNestTheme {
        Column(
            modifier = Modifier
                .fillMaxWidth()
                .padding(16.dp),
            verticalArrangement = Arrangement.spacedBy(16.dp)
        ) {
            PrimaryButton(text = "Primary Default", onClick = {})
            PrimaryButton(text = "Primary Disabled", onClick = {}, enabled = false)
            PrimaryButton(text = "Primary Loading", onClick = {}, isLoading = true)
            PrimaryButton(
                text = "With Icon",
                onClick = {},
                leadingIcon = { Icon(Icons.Default.Star, contentDescription = null, modifier = Modifier.size(18.dp)) }
            )
            
            HorizontalDivider(color = WordNestTheme.colors.line200)

            DarkButton(text = "Dark Default", onClick = {})
            DarkButton(text = "Dark Loading", onClick = {}, isLoading = true)

            HorizontalDivider(color = WordNestTheme.colors.line200)

            OutlinedWordNestButton(text = "Outlined Default", onClick = {})
            OutlinedWordNestButton(text = "Outlined Loading", onClick = {}, isLoading = true)
            OutlinedWordNestButton(text = "Outlined Disabled", onClick = {}, enabled = false)

            HorizontalDivider(color = WordNestTheme.colors.line200)

            TextLinkButton(text = "Text Link Button", onClick = {})
        }
    }
}
