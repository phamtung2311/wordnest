package com.tung.wordnest.data.local

import android.content.Context
import android.content.SharedPreferences
import org.json.JSONObject
import java.time.LocalDate

/**
 * Lưu trữ tiến độ học trên máy (ghép khi sync với Firestore).
 *
 * Cấu trúc khớp với web (lib/studyTimeService.ts):
 * - dailySeconds: map "yyyy-MM-dd" -> số giây học trong ngày
 * - completedDays: map "yyyy-MM-dd" -> true
 * - targetMinutes: mục tiêu học mỗi ngày (phút, 0 = chưa đặt)
 *
 * Web push lên Firestore: users/{uid}.progress = { dailySeconds, completedDays, targetMinutes }
 * App pull về và merge (giá trị nào LỚN hơn thắng).
 */
class ProgressStore(context: Context) {
    private val prefs = context.getSharedPreferences("wordnest_progress", Context.MODE_PRIVATE)

    private fun readIntMap(key: String): MutableMap<String, Int> {
        val json = JSONObject(prefs.getString(key, "{}") ?: "{}")
        val map = mutableMapOf<String, Int>()
        json.keys().forEach { k -> map[k] = json.getInt(k) }
        return map
    }

    private fun readBoolMap(key: String): MutableMap<String, Boolean> {
        val json = JSONObject(prefs.getString(key, "{}") ?: "{}")
        val map = mutableMapOf<String, Boolean>()
        json.keys().forEach { k -> map[k] = json.getBoolean(k) }
        return map
    }

    var dailySeconds: MutableMap<String, Int>
        get() = readIntMap("dailySeconds")
        set(value) {
            val json = JSONObject()
            value.forEach { (k, v) -> json.put(k, v) }
            prefs.edit().putString("dailySeconds", json.toString()).apply()
        }

    var completedDays: MutableMap<String, Boolean>
        get() = readBoolMap("completedDays")
        set(value) {
            val json = JSONObject()
            value.forEach { (k, v) -> json.put(k, v) }
            prefs.edit().putString("completedDays", json.toString()).apply()
        }

    var targetMinutes: Int
        get() = prefs.getInt("targetMinutes", 0)
        set(value) = prefs.edit().putInt("targetMinutes", value).apply()

    /** Trả về giây đã học trong "todayKey" (định dạng web: yyyy-MM-dd). */
    fun getSecondsOn(dateKey: String): Int = dailySeconds[dateKey] ?: 0

    /** Tăng giây học trong "todayKey" — gọi định kỳ (mỗi 1s khi session học chạy). */
    fun addSeconds(dateKey: String, seconds: Int) {
        val map = dailySeconds
        map[dateKey] = getSecondsOn(dateKey) + seconds
        dailySeconds = map
    }

    /** Đặt/trị thay giây học của một ngày (dùng khi pull data từ Firestore). */
    fun setSecondsOn(dateKey: String, seconds: Int) {
        val map = dailySeconds
        map[dateKey] = seconds
        dailySeconds = map
    }

    /** Tổng giây học trong N ngày gần nhất (dùng cho "Tuần này" ở tab Tôi). */
    fun getSecondsInLastDays(days: Int): Int {
        val now = LocalDate.now()
        return (0 until days).sumOf { getSecondsOn(now.minusDays(it.toLong()).toString()) }
    }

    /** Streak: đếm ngược từ hôm nay (hoặc hôm qua nếu hôm nay chưa học) những ngày liên tiếp có học. */
    fun getStreakDays(): Int {
        var streak = 0
        var day = LocalDate.now()
        if (getSecondsOn(day.toString()) == 0) day = day.minusDays(1)
        while (getSecondsOn(day.toString()) > 0) {
            streak++
            day = day.minusDays(1)
        }
        return streak
    }

    fun isCompletedToday(dateKey: String): Boolean =
        targetMinutes > 0 && getSecondsOn(dateKey) >= targetMinutes * 60

    // ===== Flag khởi động: ghi nhớ đã hoàn thành onboarding (để lần mở sau
    // không phải chạy lại splash -> onboarding -> đăng nhập khi vẫn còn đăng nhập) =====

    var onboardingDone: Boolean
        get() = prefs.getBoolean("onboardingDone", false)
        set(value) = prefs.edit().putBoolean("onboardingDone", value).apply()

    companion object {
        /** Khớp getTodayKey() của web: "yyyy-MM-dd". */
        fun todayKey(): String = LocalDate.now().toString()
    }
}
