package com.tung.wordnest.ui.theme

import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Shapes
import androidx.compose.ui.unit.dp

val HeroShape = RoundedCornerShape(24.dp)
val CardShape = RoundedCornerShape(20.dp)
val SmallCardShape = RoundedCornerShape(14.dp)
val ChipShape = RoundedCornerShape(50.dp)
val BottomSheetTopShape = RoundedCornerShape(topStart = 28.dp, topEnd = 28.dp)

val Shapes = Shapes(
    extraSmall = RoundedCornerShape(8.dp),
    small = SmallCardShape,
    medium = CardShape,
    large = HeroShape,
    extraLarge = BottomSheetTopShape
)
