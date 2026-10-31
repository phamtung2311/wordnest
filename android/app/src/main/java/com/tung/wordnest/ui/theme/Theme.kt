package com.tung.wordnest.ui.theme

import android.content.res.Configuration
import androidx.compose.foundation.isSystemInDarkTheme
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.background
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Shapes
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.material3.darkColorScheme
import androidx.compose.material3.lightColorScheme
import androidx.compose.runtime.Composable
import androidx.compose.runtime.CompositionLocalProvider
import androidx.compose.runtime.ReadOnlyComposable
import androidx.compose.ui.Modifier
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp

private fun lightMaterialColorScheme(colors: WordNestColors) = lightColorScheme(
    primary = colors.forest900,
    onPrimary = colors.surfaceWhite,
    secondary = colors.mint500,
    onSecondary = colors.surfaceWhite,
    background = colors.background,
    surface = colors.surface,
    error = colors.error600,
    onBackground = colors.primaryText,
    onSurface = colors.primaryText
)

private fun darkMaterialColorScheme(colors: WordNestColors) = darkColorScheme(
    primary = colors.mint500,
    onPrimary = colors.ink900,
    secondary = colors.sage300,
    onSecondary = colors.ink900,
    background = colors.background,
    surface = colors.surface,
    error = colors.error600,
    onBackground = colors.primaryText,
    onSurface = colors.primaryText
)

@Composable
fun WordNestTheme(
    darkTheme: Boolean = isSystemInDarkTheme(),
    content: @Composable () -> Unit
) {
    val wordNestColors = if (darkTheme) darkWordNestColors else lightWordNestColors
    val materialColorScheme = if (darkTheme) {
        darkMaterialColorScheme(wordNestColors)
    } else {
        lightMaterialColorScheme(wordNestColors)
    }

    CompositionLocalProvider(
        LocalWordNestColors provides wordNestColors
    ) {
        MaterialTheme(
            colorScheme = materialColorScheme,
            typography = Typography,
            shapes = Shapes,
            content = content
        )
    }
}

object WordNestTheme {
    val colors: WordNestColors
        @Composable
        @ReadOnlyComposable
        get() = LocalWordNestColors.current

    val typography: androidx.compose.material3.Typography
        @Composable
        @ReadOnlyComposable
        get() = MaterialTheme.typography

    val shapes: Shapes
        @Composable
        @ReadOnlyComposable
        get() = MaterialTheme.shapes
}

@Preview(showBackground = true, name = "Light Theme Preview")
@Preview(showBackground = true, uiMode = Configuration.UI_MODE_NIGHT_YES, name = "Dark Theme Preview")
@Composable
fun WordNestThemePreview() {
    WordNestTheme {
        Surface(
            modifier = Modifier
                .fillMaxWidth()
                .padding(16.dp),
            color = WordNestTheme.colors.background,
            shape = HeroShape
        ) {
            Column(
                modifier = Modifier.padding(24.dp),
                verticalArrangement = Arrangement.spacedBy(16.dp)
            ) {
                Text(
                    text = "Display Large",
                    style = WordNestTheme.typography.displayLarge,
                    color = WordNestTheme.colors.primaryText
                )
                Text(
                    text = "Headline Medium",
                    style = WordNestTheme.typography.headlineMedium,
                    color = WordNestTheme.colors.primaryText
                )
                Text(
                    text = "Flashcard Term",
                    style = FlashcardTermStyle,
                    color = WordNestTheme.colors.forest700
                )
                Text(
                    text = "Title Medium",
                    style = WordNestTheme.typography.titleMedium,
                    color = WordNestTheme.colors.primaryText
                )
                Text(
                    text = "Body Medium",
                    style = WordNestTheme.typography.bodyMedium,
                    color = WordNestTheme.colors.secondaryText
                )
                Text(
                    text = "LABEL MEDIUM",
                    style = WordNestTheme.typography.labelMedium,
                    color = WordNestTheme.colors.coral500
                )
                Text(
                    text = "OVERLINE",
                    style = WordNestTheme.typography.labelSmall,
                    color = WordNestTheme.colors.slate400
                )
                Text(
                    text = "12:34",
                    style = TimerMonoStyle,
                    color = WordNestTheme.colors.orange600
                )
                
                // Color Palette row
                Row(
                    horizontalArrangement = Arrangement.spacedBy(8.dp),
                    modifier = Modifier.fillMaxWidth()
                ) {
                    Box(modifier = Modifier.size(40.dp).background(WordNestTheme.colors.forest900, SmallCardShape))
                    Box(modifier = Modifier.size(40.dp).background(WordNestTheme.colors.mint500, SmallCardShape))
                    Box(modifier = Modifier.size(40.dp).background(WordNestTheme.colors.amber500, SmallCardShape))
                    Box(modifier = Modifier.size(40.dp).background(WordNestTheme.colors.coral500, SmallCardShape))
                    Box(modifier = Modifier.size(40.dp).background(WordNestTheme.colors.blue600, SmallCardShape))
                }
            }
        }
    }
}
