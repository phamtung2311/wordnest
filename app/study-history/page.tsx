'use client';

import { useState, useEffect, useSyncExternalStore, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import {
  ArrowLeft,
  Timer,
  Flame,
  Award,
  Calendar,
  Clock,
  TrendingUp,
  CheckCircle2,
  XCircle,
  Plus,
  BarChart2,
  BookOpen,
  Headphones,
  FileText,
  RotateCcw,
  Sparkles,
} from 'lucide-react';
import {
  getSavedProgress,
  subscribeProgress,
  getTodayKey,
  formatStudyTime,
  calculateStreak,
  updateDateSeconds,
  emptyProgress,
  StudyProgress,
} from '@/lib/studyTimeService';

type FilterRange = '7' | '14' | '30' | 'all';

export default function StudyHistoryPage() {
  const router = useRouter();

  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  const progress = useSyncExternalStore(
    subscribeProgress,
    getSavedProgress,
    () => emptyProgress,
  );

  const [filterRange, setFilterRange] = useState<FilterRange>('7');
  const [showAddModal, setShowAddModal] = useState(false);
  const [modalDate, setModalDate] = useState(getTodayKey());
  const [modalMinutes, setModalMinutes] = useState('15');

  const todayKey = getTodayKey();
  const todaySeconds = progress.dailySeconds[todayKey] ?? 0;
  const streak = calculateStreak(progress);

  // All recorded dates with study seconds > 0 or completedDays
  const allRecordedDates = useMemo(() => {
    const set = new Set<string>([
      ...Object.keys(progress.dailySeconds),
      ...Object.keys(progress.completedDays || {}),
      todayKey, // Always include today
    ]);
    return Array.from(set).sort((a, b) => b.localeCompare(a));
  }, [progress, todayKey]);

  // Overall Statistics
  const totalSecondsAllTime = useMemo(() => {
    return Object.values(progress.dailySeconds).reduce((sum, s) => sum + s, 0);
  }, [progress.dailySeconds]);

  const totalSuccessfulDays = useMemo(() => {
    const dates = new Set([
      ...Object.keys(progress.dailySeconds),
      ...Object.keys(progress.completedDays || {}),
    ]);
    return Array.from(dates).filter(
      (d) =>
        (progress.dailySeconds[d] ?? 0) >= 600 ||
        progress.completedDays?.[d] === true,
    ).length;
  }, [progress]);

  const totalDaysWithStudy = useMemo(() => {
    return Object.values(progress.dailySeconds).filter((s) => s > 0).length;
  }, [progress.dailySeconds]);

  const averageDailyMinutes = useMemo(() => {
    if (totalDaysWithStudy === 0) return 0;
    return Math.round(totalSecondsAllTime / 60 / totalDaysWithStudy);
  }, [totalSecondsAllTime, totalDaysWithStudy]);

  // Format Helper for Vietnamese date
  const formatVietnameseDate = (dateStr: string) => {
    if (dateStr === todayKey) return 'Hôm nay';
    const [y, m, d] = dateStr.split('-').map(Number);
    const dateObj = new Date(y, m - 1, d);

    const yesterdayObj = new Date();
    yesterdayObj.setDate(yesterdayObj.getDate() - 1);
    const yesterdayKey = getTodayKey(yesterdayObj);
    if (dateStr === yesterdayKey) return 'Hôm qua';

    const dayOfWeek = ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'][
      dateObj.getDay()
    ];
    return `${dayOfWeek}, ${d.toString().padStart(2, '0')}/${m.toString().padStart(2, '0')}/${y}`;
  };

  // Date list for display based on selected filter
  const displayedDates = useMemo(() => {
    const numDays = filterRange === 'all' ? 0 : parseInt(filterRange, 10);
    if (numDays === 0) {
      return allRecordedDates;
    }

    const result: string[] = [];
    const now = new Date();
    for (let i = 0; i < numDays; i++) {
      const d = new Date(now);
      d.setDate(d.getDate() - i);
      const y = d.getFullYear();
      const m = String(d.getMonth() + 1).padStart(2, '0');
      const day = String(d.getDate()).padStart(2, '0');
      result.push(`${y}-${m}-${day}`);
    }
    return result;
  }, [filterRange, allRecordedDates]);

  // Chart data: 7 or 14 days in chronological order (oldest -> newest)
  const chartDays = useMemo(() => {
    const count = filterRange === '7' ? 7 : filterRange === '14' ? 14 : 7;
    const list: { dateStr: string; label: string; seconds: number; isGoalMet: boolean }[] = [];
    const now = new Date();

    for (let i = count - 1; i >= 0; i--) {
      const d = new Date(now);
      d.setDate(d.getDate() - i);
      const y = d.getFullYear();
      const m = String(d.getMonth() + 1).padStart(2, '0');
      const day = String(d.getDate()).padStart(2, '0');
      const dateStr = `${y}-${m}-${day}`;
      const secs = progress.dailySeconds[dateStr] ?? 0;
      const dayOfWeekShort = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'][d.getDay()];

      list.push({
        dateStr,
        label: i === 0 ? 'Hôm nay' : `${dayOfWeekShort} ${day}`,
        seconds: secs,
        isGoalMet: secs >= 600 || progress.completedDays?.[dateStr] === true,
      });
    }
    return list;
  }, [progress, filterRange]);

  const maxChartSeconds = useMemo(() => {
    const maxInDays = Math.max(...chartDays.map((d) => d.seconds), 600);
    return Math.ceil(maxInDays / 300) * 300; // Round up to nearest 5 minutes
  }, [chartDays]);

  const handleSaveCustomTime = () => {
    const mins = parseFloat(modalMinutes);
    if (isNaN(mins) || mins < 0) return;
    const secs = Math.round(mins * 60);
    updateDateSeconds(modalDate, secs);
    setShowAddModal(false);
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-[#f5f0e6] text-[#213a34] font-sans pb-16">
      {/* Top Header */}
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b-2 border-[#213a34]/10 shadow-xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <button
              onClick={() => router.push('/')}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#e9f2ed] hover:bg-[#d5e5db] text-[#213a34] font-black text-xs sm:text-sm transition-all cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Trang chủ</span>
            </button>

            <div className="h-5 w-[1px] bg-gray-200 hidden sm:block" />

            <div className="flex items-center gap-2">
              <span className="grid size-8 place-items-center rounded-xl bg-[#213a34] text-[#f8d467] shadow-xs">
                <BookOpen size={17} />
              </span>
              <span className="font-display text-base sm:text-lg font-black hidden sm:inline">
                Word<span className="text-[#eb6a52]">Nest</span>
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => router.push('/intensive-listening')}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#213a34] hover:bg-[#2c4e46] text-white text-xs font-black transition-colors shadow-2xs"
            >
              <Headphones className="w-3.5 h-3.5 text-[#f8d467]" />
              <span>Luyện nghe chi tiết</span>
            </button>
            <button
              onClick={() => router.push('/practice-test')}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#e9f2ed] hover:bg-[#d5e5db] text-[#213a34] text-xs font-black transition-colors"
            >
              <FileText className="w-3.5 h-3.5 text-[#f29f77]" />
              <span>Luyện Reading</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-6 sm:pt-8 space-y-6">
        {/* Page Title & Intro */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-black uppercase tracking-wider mb-2">
              <Timer className="w-3.5 h-3.5" />
              <span>Tiến độ học tập</span>
            </div>
            <h1 className="font-display text-2xl sm:text-3xl font-black text-[#213a34] tracking-tight">
              Lịch sử thời gian học
            </h1>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">
              Thống kê chi tiết thời gian học mỗi ngày, chuỗi ngày liên tiếp và tiến độ đạt mục tiêu 10 phút.
            </p>
          </div>

          <button
            type="button"
            onClick={() => {
              setModalDate(todayKey);
              setModalMinutes('15');
              setShowAddModal(true);
            }}
            className="self-start sm:self-auto flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-[#213a34] hover:bg-[#2c4e46] text-white text-xs sm:text-sm font-black shadow-sm transition-all active:scale-95 cursor-pointer"
          >
            <Plus className="w-4 h-4 text-[#f8d467]" />
            <span>Ghi nhận thời gian học</span>
          </button>
        </div>

        {/* Top 4 KPI Summary Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {/* Card 1: Tổng thời gian học */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-5 border-2 border-[#213a34]/12 shadow-sm space-y-1">
            <div className="flex items-center justify-between text-gray-500">
              <span className="text-xs font-bold">Tổng thời gian học</span>
              <span className="p-2 rounded-xl bg-[#e9f2ed] text-[#213a34]">
                <Clock className="w-4 h-4 text-[#eb6a52]" />
              </span>
            </div>
            <div className="font-mono text-xl sm:text-2xl font-black text-[#213a34]">
              {formatStudyTime(totalSecondsAllTime).formattedShort}
            </div>
            <p className="text-[11px] text-gray-500 font-semibold truncate">
              {formatStudyTime(totalSecondsAllTime).formattedDetailed}
            </p>
          </div>

          {/* Card 2: Hôm nay */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-5 border-2 border-[#213a34]/12 shadow-sm space-y-1">
            <div className="flex items-center justify-between text-gray-500">
              <span className="text-xs font-bold">Hôm nay ({formatVietnameseDate(todayKey)})</span>
              <span className="p-2 rounded-xl bg-amber-50 text-amber-600">
                <Timer className="w-4 h-4 text-amber-600" />
              </span>
            </div>
            <div className="font-mono text-xl sm:text-2xl font-black text-[#213a34]">
              {formatStudyTime(todaySeconds).formattedShort}
            </div>
            <p className="text-[11px] font-semibold text-gray-500">
              {todaySeconds >= 600 ? (
                <span className="text-emerald-700 font-bold">✓ Đã đạt mục tiêu 10 phút</span>
              ) : (
                `Tiến độ: ${Math.round((todaySeconds / 600) * 100)}% (${Math.floor(todaySeconds / 60)}/10 phút)`
              )}
            </p>
          </div>

          {/* Card 3: Chuỗi ngày liên tiếp */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-5 border-2 border-[#213a34]/12 shadow-sm space-y-1">
            <div className="flex items-center justify-between text-gray-500">
              <span className="text-xs font-bold">Chuỗi ngày liên tiếp</span>
              <span className="p-2 rounded-xl bg-red-50 text-red-500">
                <Flame className="w-4 h-4 text-[#eb6a52]" />
              </span>
            </div>
            <div className="font-display text-xl sm:text-2xl font-black text-[#213a34]">
              {streak} <span className="text-xs font-normal text-gray-500">ngày</span>
            </div>
            <p className="text-[11px] font-semibold text-gray-500">
              {streak > 0 ? 'Giữ vững phong độ học tập!' : 'Bắt đầu chuỗi học mới ngay hôm nay.'}
            </p>
          </div>

          {/* Card 4: Ngày đạt mục tiêu */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-5 border-2 border-[#213a34]/12 shadow-sm space-y-1">
            <div className="flex items-center justify-between text-gray-500">
              <span className="text-xs font-bold">Ngày hoàn thành 10m</span>
              <span className="p-2 rounded-xl bg-emerald-50 text-emerald-600">
                <Award className="w-4 h-4 text-emerald-600" />
              </span>
            </div>
            <div className="font-display text-xl sm:text-2xl font-black text-[#213a34]">
              {totalSuccessfulDays} <span className="text-xs font-normal text-gray-500">ngày</span>
            </div>
            <p className="text-[11px] font-semibold text-gray-500">
              Trung bình: <b>{averageDailyMinutes} phút</b>/ngày học
            </p>
          </div>
        </div>

        {/* Visual Bar Chart Section */}
        <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 border-2 border-[#213a34]/12 shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h2 className="font-display text-base sm:text-lg font-black text-[#213a34] flex items-center gap-2">
                <BarChart2 className="w-4 h-4 text-[#eb6a52]" />
                <span>Biểu đồ thời gian học gần đây</span>
              </h2>
              <p className="text-xs text-gray-500 mt-0.5">
                Đường đứt nét màu xanh hiển thị mốc mục tiêu 10 phút mỗi ngày (600 giây).
              </p>
            </div>

            {/* Filter Toggle */}
            <div className="flex items-center bg-[#f5f0e6] p-1 rounded-xl self-start sm:self-auto">
              <button
                type="button"
                onClick={() => setFilterRange('7')}
                className={`px-3 py-1 rounded-lg text-xs font-black transition-all cursor-pointer ${
                  filterRange === '7'
                    ? 'bg-[#213a34] text-white shadow-2xs'
                    : 'text-gray-600 hover:text-[#213a34]'
                }`}
              >
                7 ngày qua
              </button>
              <button
                type="button"
                onClick={() => setFilterRange('14')}
                className={`px-3 py-1 rounded-lg text-xs font-black transition-all cursor-pointer ${
                  filterRange === '14'
                    ? 'bg-[#213a34] text-white shadow-2xs'
                    : 'text-gray-600 hover:text-[#213a34]'
                }`}
              >
                14 ngày qua
              </button>
              <button
                type="button"
                onClick={() => setFilterRange('30')}
                className={`px-3 py-1 rounded-lg text-xs font-black transition-all cursor-pointer ${
                  filterRange === '30'
                    ? 'bg-[#213a34] text-white shadow-2xs'
                    : 'text-gray-600 hover:text-[#213a34]'
                }`}
              >
                30 ngày
              </button>
              <button
                type="button"
                onClick={() => setFilterRange('all')}
                className={`px-3 py-1 rounded-lg text-xs font-black transition-all cursor-pointer ${
                  filterRange === 'all'
                    ? 'bg-[#213a34] text-white shadow-2xs'
                    : 'text-gray-600 hover:text-[#213a34]'
                }`}
              >
                Tất cả
              </button>
            </div>
          </div>

          {/* Chart Canvas */}
          <div className="pt-6 pb-2">
            <div className="relative h-48 sm:h-56 flex items-end justify-between gap-2 sm:gap-4 px-2 border-b border-gray-200">
              {/* Target Line at 10 Minutes (600s) */}
              <div
                className="absolute left-0 right-0 border-b-2 border-dashed border-emerald-500/80 pointer-events-none z-10"
                style={{
                  bottom: `${Math.min(95, Math.max(10, (600 / maxChartSeconds) * 100))}%`,
                }}
              >
                <span className="absolute -top-5 right-2 text-[10px] font-black text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-300">
                  🎯 Mục tiêu: 10 phút
                </span>
              </div>

              {/* Bars */}
              {chartDays.map((d) => {
                const heightPercent =
                  d.seconds > 0
                    ? Math.max(6, Math.min(100, Math.round((d.seconds / maxChartSeconds) * 100)))
                    : 2;
                const minutes = Math.floor(d.seconds / 60);
                const seconds = d.seconds % 60;

                return (
                  <div
                    key={d.dateStr}
                    className="flex-1 flex flex-col items-center h-full justify-end group relative"
                  >
                    {/* Tooltip on Hover */}
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute -top-12 z-20 pointer-events-none bg-[#213a34] text-white text-[11px] font-bold py-1 px-2.5 rounded-xl shadow-lg whitespace-nowrap">
                      {d.label}: <b>{minutes}p {seconds}s</b>
                      {d.isGoalMet && ' ✓'}
                    </div>

                    {/* Bar Column */}
                    <div
                      className={`w-full max-w-[40px] rounded-t-xl transition-all duration-300 relative ${
                        d.seconds === 0
                          ? 'bg-gray-100 border border-gray-200'
                          : d.isGoalMet
                          ? 'bg-gradient-to-t from-emerald-600 to-green-400 group-hover:brightness-110 shadow-xs'
                          : 'bg-gradient-to-t from-[#213a34] to-[#eb6a52] group-hover:brightness-110'
                      }`}
                      style={{ height: `${heightPercent}%` }}
                    >
                      {d.isGoalMet && (
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px]">
                          ⭐
                        </div>
                      )}
                    </div>

                    {/* X Axis Label */}
                    <span
                      className={`text-[10px] sm:text-xs font-bold mt-2 truncate max-w-full ${
                        d.dateStr === todayKey ? 'text-[#eb6a52] font-black' : 'text-gray-500'
                      }`}
                    >
                      {d.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Detailed Daily History Table / List */}
        <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 border-2 border-[#213a34]/12 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-base sm:text-lg font-black text-[#213a34] flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#eb6a52]" />
              <span>Nhật ký thời gian học từng ngày</span>
            </h2>
            <span className="text-xs font-bold text-gray-500">
              Hiển thị {displayedDates.length} ngày
            </span>
          </div>

          <div className="space-y-2.5">
            {displayedDates.map((dateStr) => {
              const seconds = progress.dailySeconds[dateStr] ?? 0;
              const isGoalMet = seconds >= 600 || progress.completedDays?.[dateStr] === true;
              const percent = Math.min(100, Math.round((seconds / 600) * 100));
              const { formattedDetailed, formattedShort } = formatStudyTime(seconds);

              return (
                <div
                  key={dateStr}
                  className={`p-3.5 sm:p-4 rounded-2xl border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                    dateStr === todayKey
                      ? 'bg-[#fbf9f5] border-[#eb6a52]/40 shadow-xs'
                      : isGoalMet
                      ? 'bg-white border-emerald-500/20 hover:border-emerald-500/40'
                      : 'bg-white border-gray-200 hover:border-gray-300'
                  }`}
                >
                  {/* Left: Date & Status */}
                  <div className="flex items-center gap-3">
                    <span
                      className={`p-2.5 rounded-xl shrink-0 ${
                        isGoalMet
                          ? 'bg-emerald-100 text-emerald-800'
                          : seconds > 0
                          ? 'bg-[#e9f2ed] text-[#213a34]'
                          : 'bg-gray-100 text-gray-400'
                      }`}
                    >
                      {isGoalMet ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                      ) : (
                        <Timer className="w-5 h-5 text-gray-500" />
                      )}
                    </span>

                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-black text-sm text-[#213a34]">
                          {formatVietnameseDate(dateStr)}
                        </span>
                        <span className="text-xs font-mono text-gray-400">({dateStr})</span>
                        {dateStr === todayKey && (
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-[#eb6a52] text-white">
                            Hôm nay
                          </span>
                        )}
                      </div>

                      <p className="text-xs text-gray-500 mt-0.5">
                        {seconds > 0 ? (
                          <>
                            Thời gian học: <b className="text-[#213a34]">{formattedDetailed}</b>
                          </>
                        ) : (
                          <span className="italic text-gray-400">Chưa ghi nhận thời gian học</span>
                        )}
                      </p>
                    </div>
                  </div>

                  {/* Right: Progress bar & Badges */}
                  <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0">
                    {/* Mini Progress Bar */}
                    <div className="w-28 sm:w-36 flex flex-col gap-1">
                      <div className="flex items-center justify-between text-[11px] font-bold text-gray-500">
                        <span>{percent}%</span>
                        <span>{Math.floor(seconds / 60)}/10m</span>
                      </div>
                      <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-300 ${
                            isGoalMet
                              ? 'bg-gradient-to-r from-emerald-500 to-green-400'
                              : 'bg-gradient-to-r from-[#213a34] to-[#eb6a52]'
                          }`}
                          style={{ width: `${percent}%` }}
                        />
                      </div>
                    </div>

                    {/* Status Badge */}
                    {isGoalMet ? (
                      <span className="px-3 py-1 rounded-full text-xs font-black bg-emerald-100 text-emerald-800 border border-emerald-300 shrink-0">
                        ✓ Đạt chuẩn 10m
                      </span>
                    ) : seconds > 0 ? (
                      <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-800 border border-amber-200 shrink-0">
                        {Math.floor(seconds / 60)} phút
                      </span>
                    ) : (
                      <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-500 shrink-0">
                        Chưa học
                      </span>
                    )}

                    {/* Quick Edit Time Button */}
                    <button
                      type="button"
                      onClick={() => {
                        setModalDate(dateStr);
                        setModalMinutes(String(Math.round(seconds / 60)));
                        setShowAddModal(true);
                      }}
                      className="p-1.5 rounded-lg text-gray-400 hover:text-[#213a34] hover:bg-[#e9f2ed] transition-colors cursor-pointer"
                      title="Sửa thời gian học ngày này"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>

      {/* Manual Time Input Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4 animate-in fade-in duration-150">
          <div className="bg-white rounded-3xl border-2 border-[#213a34]/15 shadow-2xl p-6 w-full max-w-md space-y-4">
            <div className="flex items-center justify-between border-b border-gray-100 pb-3">
              <h3 className="font-display font-black text-base text-[#213a34] flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#eb6a52]" />
                <span>Ghi nhận thời gian học</span>
              </h3>
              <button
                type="button"
                onClick={() => setShowAddModal(false)}
                className="p-1.5 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100"
              >
                <XCircle className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-gray-600 mb-1">Chọn ngày</label>
                <input
                  type="date"
                  value={modalDate}
                  onChange={(e) => setModalDate(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-gray-300 font-bold text-sm focus:outline-none focus:border-[#213a34]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-600 mb-1">
                  Số phút đã học (ví dụ: 15 hoặc 30)
                </label>
                <input
                  type="number"
                  min="0"
                  max="1440"
                  value={modalMinutes}
                  onChange={(e) => setModalMinutes(e.target.value)}
                  placeholder="Nhập số phút"
                  className="w-full px-3.5 py-2 rounded-xl border border-gray-300 font-bold text-sm focus:outline-none focus:border-[#213a34]"
                />
              </div>

              {/* Preset buttons */}
              <div className="flex items-center gap-1.5 pt-1">
                <span className="text-xs font-bold text-gray-500 mr-1">Gợi ý:</span>
                {[10, 15, 30, 45, 60].map((m) => (
                  <button
                    key={m}
                    type="button"
                    onClick={() => setModalMinutes(String(m))}
                    className="px-2.5 py-1 rounded-lg text-xs font-black bg-[#e9f2ed] hover:bg-[#d5e5db] text-[#213a34] transition-colors"
                  >
                    {m}p
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-end gap-2 pt-3 border-t border-gray-100">
              <button
                type="button"
                onClick={() => setShowAddModal(false)}
                className="px-4 py-2 rounded-xl text-xs font-bold text-gray-600 hover:bg-gray-100 transition-colors"
              >
                Hủy
              </button>
              <button
                type="button"
                onClick={handleSaveCustomTime}
                className="px-5 py-2 rounded-xl text-xs font-black bg-[#213a34] hover:bg-[#2c4e46] text-white shadow-sm transition-colors"
              >
                Lưu thời gian
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
