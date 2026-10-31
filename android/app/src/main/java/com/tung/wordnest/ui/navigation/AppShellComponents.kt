package com.tung.wordnest.ui.navigation

import androidx.compose.animation.*
import androidx.compose.animation.core.tween
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.*
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.text.SpanStyle
import androidx.compose.ui.text.buildAnnotatedString
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.withStyle
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.tung.wordnest.ui.theme.FrauncesFontFamily
import com.tung.wordnest.ui.theme.TimerMonoStyle
import com.tung.wordnest.ui.theme.WordNestTheme

@Composable
fun WordNestTopBar(
    onOpenTimerSheet: () -> Unit,
    onNavigateToHistory: () -> Unit,
    onNavigateToMe: () -> Unit,
    modifier: Modifier = Modifier
) {
    Row(
        modifier = modifier
            .fillMaxWidth()
            .height(56.dp)
            .background(WordNestTheme.colors.surface)
            .padding(horizontal = 16.dp),
        verticalAlignment = Alignment.CenterVertically,
        horizontalArrangement = Arrangement.SpaceBetween
    ) {
        // App Logo
        Row(verticalAlignment = Alignment.CenterVertically) {
            Box(
                modifier = Modifier
                    .size(32.dp)
                    .clip(RoundedCornerShape(8.dp))
                    .background(WordNestTheme.colors.forest900),
                contentAlignment = Alignment.Center
            ) {
                Icon(
                    imageVector = Icons.Default.Book,
                    contentDescription = "WordNest Logo",
                    tint = WordNestTheme.colors.surfaceWhite,
                    modifier = Modifier.size(20.dp)
                )
            }
            Spacer(modifier = Modifier.width(8.dp))
            Text(
                text = buildAnnotatedString {
                    withStyle(style = SpanStyle(color = WordNestTheme.colors.forest900)) {
                        append("Word")
                    }
                    withStyle(style = SpanStyle(color = WordNestTheme.colors.amber500)) {
                        append("Nest")
                    }
                },
                fontFamily = FrauncesFontFamily,
                fontSize = 20.sp,
                fontWeight = FontWeight.Bold
            )
        }

        // Actions
        Row(
            verticalAlignment = Alignment.CenterVertically,
            horizontalArrangement = Arrangement.spacedBy(8.dp)
        ) {
            // Timer Capsule
            Row(
                modifier = Modifier
                    .height(32.dp)
                    .clip(CircleShape)
                    .background(WordNestTheme.colors.beige100)
                    .clickable(onClick = onOpenTimerSheet)
                    .padding(horizontal = 12.dp),
                verticalAlignment = Alignment.CenterVertically,
                horizontalArrangement = Arrangement.spacedBy(6.dp)
            ) {
                Box(
                    modifier = Modifier
                        .size(8.dp)
                        .clip(CircleShape)
                        .background(WordNestTheme.colors.mint500)
                )
                Text(
                    text = "00:15:20",
                    style = TimerMonoStyle,
                    color = WordNestTheme.colors.ink900
                )
            }

            // Streak Chip
            Row(
                modifier = Modifier
                    .height(32.dp)
                    .clip(CircleShape)
                    .background(WordNestTheme.colors.orangeTint)
                    .clickable(onClick = onNavigateToHistory)
                    .padding(horizontal = 10.dp),
                verticalAlignment = Alignment.CenterVertically,
                horizontalArrangement = Arrangement.spacedBy(4.dp)
            ) {
                Text(text = "🔥", fontSize = 14.sp)
                Text(
                    text = "12",
                    style = WordNestTheme.typography.labelMedium.copy(fontWeight = FontWeight.Bold),
                    color = WordNestTheme.colors.orange600
                )
            }

            // Avatar
            Box(
                modifier = Modifier
                    .size(32.dp)
                    .clip(CircleShape)
                    .background(WordNestTheme.colors.line200)
                    .clickable(onClick = onNavigateToMe),
                contentAlignment = Alignment.Center
            ) {
                Icon(
                    imageVector = Icons.Default.Person,
                    contentDescription = "Profile",
                    tint = WordNestTheme.colors.slate500,
                    modifier = Modifier.size(20.dp)
                )
            }
        }
    }
}

@Composable
fun WordNestBottomBar(
    currentRoute: String?,
    onNavigate: (String) -> Unit,
    modifier: Modifier = Modifier
) {
    NavigationBar(
        modifier = modifier.height(68.dp + WindowInsets.navigationBars.asPaddingValues().calculateBottomPadding()),
        containerColor = WordNestTheme.colors.surface,
        contentColor = WordNestTheme.colors.forest900,
        tonalElevation = 8.dp
    ) {
        MainBottomNavItems.forEach { item ->
            val isSelected = currentRoute == item.route

            NavigationBarItem(
                selected = isSelected,
                onClick = {
                    if (!isSelected) {
                        onNavigate(item.route)
                    }
                },
                icon = {
                    if (item.hasBadge && item.badgeCount > 0) {
                        BadgedBox(
                            badge = {
                                Badge(
                                    containerColor = WordNestTheme.colors.coral500,
                                    contentColor = WordNestTheme.colors.surfaceWhite
                                ) {
                                    Text(text = item.badgeCount.toString())
                                }
                            }
                        ) {
                            Icon(imageVector = item.icon, contentDescription = item.title)
                        }
                    } else {
                        Icon(imageVector = item.icon, contentDescription = item.title)
                    }
                },
                label = {
                    Text(
                        text = item.title,
                        style = WordNestTheme.typography.labelSmall
                    )
                },
                colors = NavigationBarItemDefaults.colors(
                    selectedIconColor = WordNestTheme.colors.forest900,
                    unselectedIconColor = WordNestTheme.colors.slate500,
                    selectedTextColor = WordNestTheme.colors.forest900,
                    unselectedTextColor = WordNestTheme.colors.slate500,
                    indicatorColor = WordNestTheme.colors.amberTint
                )
            )
        }
    }
}

@Composable
fun QuickActionDock(
    isExpanded: Boolean,
    isVisible: Boolean,
    onToggle: () -> Unit,
    onActionSelected: (String) -> Unit,
    modifier: Modifier = Modifier
) {
    val actionItems = listOf(
        "Dịch nhanh" to Icons.Default.Language,
        "Sổ tay ghi chú" to Icons.Default.Edit,
        "Ôn từ đến hạn" to Icons.Default.Alarm,
        "Việc cần làm" to Icons.Default.List
    )

    Box(
        modifier = modifier.fillMaxSize(),
        contentAlignment = Alignment.BottomEnd
    ) {
        // Scrim
        AnimatedVisibility(
            visible = isExpanded,
            enter = fadeIn(tween(220)),
            exit = fadeOut(tween(220))
        ) {
            Box(
                modifier = Modifier
                    .fillMaxSize()
                    .background(Color.Black.copy(alpha = 0.4f))
                    .clickable(onClick = onToggle)
            )
        }

        // Action Buttons with staggered animation
        Column(
            horizontalAlignment = Alignment.End,
            modifier = Modifier.padding(bottom = 80.dp, end = 16.dp)
        ) {
            actionItems.forEachIndexed { index, (label, icon) ->
                AnimatedVisibility(
                    visible = isExpanded,
                    enter = slideInVertically(
                        initialOffsetY = { 50 },
                        animationSpec = tween(durationMillis = 220, delayMillis = (3 - index) * 40)
                    ) + fadeIn(),
                    exit = slideOutVertically(
                        targetOffsetY = { 50 },
                        animationSpec = tween(durationMillis = 150)
                    ) + fadeOut()
                ) {
                    Row(
                        verticalAlignment = Alignment.CenterVertically,
                        modifier = Modifier.padding(bottom = 16.dp)
                    ) {
                        Surface(
                            shape = RoundedCornerShape(8.dp),
                            color = WordNestTheme.colors.surface,
                            modifier = Modifier.padding(end = 12.dp)
                        ) {
                            Text(
                                text = label,
                                style = WordNestTheme.typography.labelMedium,
                                color = WordNestTheme.colors.ink900,
                                modifier = Modifier.padding(horizontal = 12.dp, vertical = 8.dp)
                            )
                        }
                        
                        FloatingActionButton(
                            onClick = {
                                onActionSelected(label)
                                onToggle()
                            },
                            modifier = Modifier.size(48.dp),
                            containerColor = WordNestTheme.colors.surfaceWhite,
                            contentColor = WordNestTheme.colors.forest900,
                            shape = CircleShape,
                            elevation = FloatingActionButtonDefaults.elevation(4.dp)
                        ) {
                            Icon(imageVector = icon, contentDescription = label)
                        }
                    }
                }
            }
        }

        // Main FAB (Dock Trigger)
        AnimatedVisibility(
            visible = isVisible || isExpanded,
            enter = scaleIn() + fadeIn(),
            exit = scaleOut() + fadeOut()
        ) {
            FloatingActionButton(
                onClick = onToggle,
                modifier = Modifier
                    .padding(end = 16.dp, bottom = 16.dp)
                    .size(56.dp),
                containerColor = WordNestTheme.colors.forest900,
                contentColor = WordNestTheme.colors.amber500,
                shape = CircleShape,
                elevation = FloatingActionButtonDefaults.elevation(8.dp)
            ) {
                Icon(
                    imageVector = if (isExpanded) Icons.Default.Close else Icons.Default.Bolt,
                    contentDescription = if (isExpanded) "Đóng" else "Quick Actions",
                    modifier = Modifier.size(28.dp)
                )
            }
        }
    }
}
