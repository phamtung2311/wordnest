package com.tung.wordnest.ui.theme

import androidx.compose.material3.Typography
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.sp
// import androidx.compose.ui.text.font.Font
// import com.tung.wordnest.R

// TODO: Place your .ttf/.otf files in the res/font/ folder and replace Fallbacks with FontListFontFamily
// Example:
// val FrauncesFontFamily = FontFamily(
//     Font(R.font.fraunces_bold, FontWeight.Bold)
// )
val FrauncesFontFamily = FontFamily.Serif // Fallback

// Example:
// val BeVietnamProFontFamily = FontFamily(
//     Font(R.font.be_vietnam_pro_regular, FontWeight.Normal),
//     Font(R.font.be_vietnam_pro_medium, FontWeight.Medium),
//     Font(R.font.be_vietnam_pro_semibold, FontWeight.SemiBold),
//     Font(R.font.be_vietnam_pro_extrabold, FontWeight.ExtraBold)
// )
val BeVietnamProFontFamily = FontFamily.SansSerif // Fallback

// Example:
// val JetBrainsMonoFontFamily = FontFamily(
//     Font(R.font.jetbrains_mono_bold, FontWeight.Bold)
// )
val JetBrainsMonoFontFamily = FontFamily.Monospace // Fallback

// Extra Custom Text Styles
val FlashcardTermStyle = TextStyle(
    fontFamily = FrauncesFontFamily,
    fontWeight = FontWeight.Bold,
    fontSize = 34.sp,
    lineHeight = 42.sp
)

val TimerMonoStyle = TextStyle(
    fontFamily = JetBrainsMonoFontFamily,
    fontWeight = FontWeight.Bold,
    fontSize = 13.sp,
    lineHeight = 18.sp
)

val Typography = Typography(
    displayLarge = TextStyle(
        fontFamily = FrauncesFontFamily,
        fontWeight = FontWeight.Bold,
        fontSize = 28.sp,
        lineHeight = 36.sp
    ),
    headlineMedium = TextStyle(
        fontFamily = FrauncesFontFamily,
        fontWeight = FontWeight.Bold,
        fontSize = 22.sp,
        lineHeight = 28.sp
    ),
    titleMedium = TextStyle(
        fontFamily = BeVietnamProFontFamily,
        fontWeight = FontWeight.SemiBold,
        fontSize = 16.sp,
        lineHeight = 24.sp
    ),
    bodyMedium = TextStyle(
        fontFamily = BeVietnamProFontFamily,
        fontWeight = FontWeight.Normal,
        fontSize = 14.sp,
        lineHeight = 20.sp
    ),
    // Used as LabelMedium (Caption)
    labelMedium = TextStyle(
        fontFamily = BeVietnamProFontFamily,
        fontWeight = FontWeight.Medium,
        fontSize = 12.sp,
        lineHeight = 16.sp
    ),
    // Used as Overline
    labelSmall = TextStyle(
        fontFamily = BeVietnamProFontFamily,
        fontWeight = FontWeight.ExtraBold,
        fontSize = 11.sp,
        lineHeight = 16.sp,
        letterSpacing = 1.2.sp
    )
)
