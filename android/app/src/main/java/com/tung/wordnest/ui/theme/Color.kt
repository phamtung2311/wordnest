package com.tung.wordnest.ui.theme

import androidx.compose.runtime.Immutable
import androidx.compose.runtime.staticCompositionLocalOf
import androidx.compose.ui.graphics.Color

// --- Light Theme Colors ---
val Forest900 = Color(0xFF1B3A32)
val Forest700 = Color(0xFF2F5D50)
val Sage300 = Color(0xFF9CCBB8)
val Mint500 = Color(0xFF10B981)
val Amber400 = Color(0xFFF6D365)
val Amber500 = Color(0xFFF59E0B)
val AmberTint = Color(0xFFFEF3C7)
val Coral500 = Color(0xFFE8503A)
val CoralTint = Color(0xFFFDE4E4)
val Orange600 = Color(0xFFEA580C)
val OrangeTint = Color(0xFFFFF1E6)
val Pink600 = Color(0xFFDB2777)
val PinkTint = Color(0xFFFDF2F8)
val Blue600 = Color(0xFF1E6FA8)
val Cream50 = Color(0xFFFBF9F4)
val Beige100 = Color(0xFFF6F3EC)
val SurfaceWhite = Color(0xFFFFFFFF)
val Ink900 = Color(0xFF0F172A)
val Slate500 = Color(0xFF64748B)
val Slate400 = Color(0xFF94A3B8)
val Line200 = Color(0xFFE7E2D8)
val Error600 = Color(0xFFDC2626)

// --- Dark Theme Colors ---
val DarkBackground = Color(0xFF0E1A17)
val DarkSurface = Color(0xFF16261F)
val DarkBorder = Color(0xFF243A32)
val DarkPrimaryText = Color(0xFFF1F5F2)
val DarkSecondaryText = Color(0xFF9FB3AA)
val DarkSpotlight = Color(0xFF234A3E)

@Immutable
data class WordNestColors(
    val forest900: Color,
    val forest700: Color,
    val sage300: Color,
    val mint500: Color,
    val amber400: Color,
    val amber500: Color,
    val amberTint: Color,
    val coral500: Color,
    val coralTint: Color,
    val orange600: Color,
    val orangeTint: Color,
    val pink600: Color,
    val pinkTint: Color,
    val blue600: Color,
    val cream50: Color,
    val beige100: Color,
    val surfaceWhite: Color,
    val ink900: Color,
    val slate500: Color,
    val slate400: Color,
    val line200: Color,
    val error600: Color,
    
    // Semantic structural colors
    val background: Color,
    val surface: Color,
    val border: Color,
    val primaryText: Color,
    val secondaryText: Color,
    val spotlight: Color
)

val lightWordNestColors = WordNestColors(
    forest900 = Forest900,
    forest700 = Forest700,
    sage300 = Sage300,
    mint500 = Mint500,
    amber400 = Amber400,
    amber500 = Amber500,
    amberTint = AmberTint,
    coral500 = Coral500,
    coralTint = CoralTint,
    orange600 = Orange600,
    orangeTint = OrangeTint,
    pink600 = Pink600,
    pinkTint = PinkTint,
    blue600 = Blue600,
    cream50 = Cream50,
    beige100 = Beige100,
    surfaceWhite = SurfaceWhite,
    ink900 = Ink900,
    slate500 = Slate500,
    slate400 = Slate400,
    line200 = Line200,
    error600 = Error600,
    
    background = Cream50,
    surface = SurfaceWhite,
    border = Line200,
    primaryText = Ink900,
    secondaryText = Slate500,
    spotlight = Forest900
)

val darkWordNestColors = WordNestColors(
    forest900 = Forest900,
    forest700 = Forest700,
    sage300 = Sage300,
    mint500 = Mint500,
    amber400 = Amber400,
    amber500 = Amber500,
    amberTint = AmberTint,
    coral500 = Coral500,
    coralTint = CoralTint,
    orange600 = Orange600,
    orangeTint = OrangeTint,
    pink600 = Pink600,
    pinkTint = PinkTint,
    blue600 = Blue600,
    cream50 = Cream50,
    beige100 = Beige100,
    surfaceWhite = SurfaceWhite,
    ink900 = Ink900,
    slate500 = Slate500,
    slate400 = Slate400,
    line200 = Line200,
    error600 = Error600,
    
    background = DarkBackground,
    surface = DarkSurface,
    border = DarkBorder,
    primaryText = DarkPrimaryText,
    secondaryText = DarkSecondaryText,
    spotlight = DarkSpotlight
)

val LocalWordNestColors = staticCompositionLocalOf<WordNestColors> {
    error("No WordNestColors provided")
}
