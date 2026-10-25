'use client';

import { useEffect, useState, useRef, useSyncExternalStore } from 'react';
import {
  Timer,
  Play,
  Pause,
  RotateCcw,
  Check,
  X,
  Plus,
  Flame,
  Award,
} from 'lucide-react';
import {
  getSavedProgress,
  saveProgress,
  subscribeProgress,
  getTodayKey,
  incrementTodaySeconds,
  resetTodaySeconds,
  addTodaySeconds,
  formatStudyTime,
  emptyProgress,
} from '@/lib/studyTimeService';

export default function StudyStopwatchWidget() {
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

  const [isOpen, setIsOpen] = useState(false);
  const [isRunning, setIsRunning] = useState(true);
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const today = getTodayKey();
  const todaySeconds = progress.dailySeconds[today] ?? 0;
  const todayMinutes = Math.floor(todaySeconds / 60);
  const isGoalReached = todaySeconds >= 600; // 10 minutes = 600 seconds
  const progressPercent = Math.min(100, Math.round((todaySeconds / 600) * 100));

  const { formattedShort, formattedDetailed } = formatStudyTime(todaySeconds);

  // Load timer running preference from localStorage
  useEffect(() => {
    try {
      const savedRunning = localStorage.getItem('wordnest_stopwatch_running');
      if (savedRunning !== null) {
        setIsRunning(savedRunning === 'true');
      }
    } catch {}
  }, []);

  // Timer interval: ticks every 1s when active and visible
  useEffect(() => {
    if (!isRunning) return;

    const interval = window.setInterval(() => {
      if (document.visibilityState !== 'visible') return;
      incrementTodaySeconds();
    }, 1000);

    return () => window.clearInterval(interval);
  }, [isRunning]);

  // Click outside to close expanded popover
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
        setShowResetConfirm(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
        setShowResetConfirm(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const toggleRunning = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const nextVal = !isRunning;
    setIsRunning(nextVal);
    try {
      localStorage.setItem('wordnest_stopwatch_running', String(nextVal));
    } catch {}
  };

  const handleReset = () => {
    resetTodaySeconds();
    setShowResetConfirm(false);
  };

  const handleAddMinutes = (mins: number) => {
    addTodaySeconds(mins * 60);
  };

  if (!mounted) return null;

  return (
    <div
      ref={containerRef}
      className="fixed top-3 right-4 sm:top-3.5 sm:right-6 z-[9995] hidden md:flex flex-col items-end select-none font-sans"
    >
      {/* COMPACT PILL (Fixed at top-right on laptops/desktops) */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 px-3 py-1.5 rounded-full border-2 transition-all cursor-pointer shadow-xs hover:shadow-md ${
          isOpen
            ? 'bg-[#213a34] text-white border-[#213a34] ring-2 ring-[#213a34]/20'
            : isGoalReached
            ? 'bg-white/95 backdrop-blur-md border-emerald-500/40 hover:border-emerald-600 text-[#213a34]'
            : 'bg-white/95 backdrop-blur-md border-[#213a34]/15 hover:border-[#213a34]/35 text-[#213a34]'
        }`}
        title="Nhấn để xem chi tiết đồng hồ bấm giờ học & mục tiêu hôm nay"
      >
        {/* Status Dot */}
        <span
          className={`w-2 h-2 rounded-full shrink-0 ${
            isRunning
              ? 'bg-emerald-500 animate-pulse shadow-[0_0_8px_#10b981]'
              : 'bg-amber-400'
          }`}
        />

        {/* Stopwatch Icon */}
        <Timer
          className={`w-3.5 h-3.5 shrink-0 transition-transform ${
            isOpen ? 'text-[#f8d467] scale-110' : 'text-[#eb6a52]'
          }`}
        />

        {/* Digital Time Display */}
        <span className="font-mono text-xs font-black tracking-tight shrink-0">
          {formattedShort}
        </span>

        {/* Goal Indicator Badge */}
        {isGoalReached ? (
          <span
            className={`text-[10px] font-black px-1.5 py-0.2 rounded-full shrink-0 ${
              isOpen
                ? 'bg-emerald-500 text-white'
                : 'bg-emerald-100 text-emerald-800'
            }`}
          >
            ✓ 10m
          </span>
        ) : (
          <span
            className={`text-[10px] font-bold shrink-0 ${
              isOpen ? 'text-gray-300' : 'text-gray-500'
            }`}
          >
            {todayMinutes}/10m
          </span>
        )}

        {/* Quick Play/Pause Button inside pill */}
        <button
          type="button"
          onClick={toggleRunning}
          title={isRunning ? 'Tạm dừng tính giờ' : 'Tiếp tục tính giờ'}
          className={`p-1 rounded-full transition-colors cursor-pointer shrink-0 ${
            isOpen
              ? 'hover:bg-white/20 text-gray-200'
              : 'hover:bg-[#e9f2ed] text-[#213a34]'
          }`}
        >
          {isRunning ? (
            <Pause className="w-3 h-3 fill-current" />
          ) : (
            <Play className="w-3 h-3 fill-current" />
          )}
        </button>
      </div>

      {/* EXPANDED DETAILS POPOVER */}
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-84 bg-white rounded-3xl border-2 border-[#213a34]/15 shadow-2xl p-5 z-[9996] space-y-4 animate-in fade-in slide-in-from-top-2 duration-150">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-gray-100 pb-3">
            <div className="flex items-center gap-2">
              <span className="p-2 rounded-xl bg-[#e9f2ed] text-[#213a34]">
                <Timer className="w-4 h-4 text-[#eb6a52]" />
              </span>
              <div>
                <h3 className="font-display font-black text-sm text-[#213a34] leading-tight">
                  Đồng hồ bấm giờ học
                </h3>
                <span
                  className={`inline-flex items-center gap-1 text-[11px] font-bold ${
                    isRunning ? 'text-emerald-600' : 'text-amber-600'
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      isRunning ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'
                    }`}
                  />
                  {isRunning ? 'Đang tự động đếm giờ' : 'Đang tạm dừng'}
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                setIsOpen(false);
                setShowResetConfirm(false);
              }}
              className="p-1.5 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Big Digital Clock Box */}
          <div className="bg-[#f5f0e6] rounded-2xl p-4 text-center border border-[#213a34]/10 shadow-inner">
            <div className="font-mono text-3xl font-black text-[#213a34] tracking-wider">
              {formattedShort}
            </div>
            <p className="text-xs font-semibold text-gray-600 mt-1">
              ⏱ Đã học <b className="text-[#213a34]">{formattedDetailed}</b> hôm nay
            </p>
          </div>

          {/* Goal Progress Section */}
          <div className="space-y-1.5 bg-[#fbf9f5] rounded-2xl p-3.5 border border-[#213a34]/8">
            <div className="flex items-center justify-between text-xs font-black text-[#213a34]">
              <span className="flex items-center gap-1">
                <Award className="w-3.5 h-3.5 text-[#eb6a52]" />
                Mục tiêu 10 phút/ngày
              </span>
              <span className={isGoalReached ? 'text-emerald-600 font-bold' : 'text-gray-500'}>
                {isGoalReached ? 'Đã đạt ✓' : `${Math.min(todayMinutes, 10)}/10 phút`}
              </span>
            </div>

            {/* Progress Bar */}
            <div className="h-2.5 w-full bg-gray-200/80 rounded-full overflow-hidden p-0.5">
              <div
                className={`h-full rounded-full transition-all duration-300 ${
                  isGoalReached
                    ? 'bg-gradient-to-r from-emerald-500 to-green-400'
                    : 'bg-gradient-to-r from-[#213a34] to-[#eb6a52]'
                }`}
                style={{ width: `${progressPercent}%` }}
              />
            </div>

            <p className="text-[11px] text-gray-500 font-medium">
              {isGoalReached ? (
                <span className="text-emerald-700 font-bold flex items-center gap-1">
                  <Check className="w-3 h-3 text-emerald-600" />
                  Bạn đã hoàn thành mục tiêu 10 phút học hôm nay!
                </span>
              ) : (
                `Học thêm ${Math.max(1, Math.ceil((600 - todaySeconds) / 60))} phút để hoàn thành mục tiêu hôm nay.`
              )}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="space-y-2 pt-1">
            {/* Primary Toggle Button */}
            <button
              type="button"
              onClick={() => toggleRunning()}
              className={`w-full py-2.5 px-4 rounded-xl font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xs active:scale-98 transition-all cursor-pointer ${
                isRunning
                  ? 'bg-amber-100 hover:bg-amber-200 text-amber-900 border border-amber-300'
                  : 'bg-[#213a34] hover:bg-[#2c4e46] text-white'
              }`}
            >
              {isRunning ? (
                <>
                  <Pause className="w-4 h-4 fill-current" />
                  <span>Tạm dừng tính giờ</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 fill-current" />
                  <span>Tiếp tục tính giờ</span>
                </>
              )}
            </button>

            {/* Quick Add Minutes & Reset */}
            <div className="flex items-center justify-between gap-1.5 pt-1">
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => handleAddMinutes(5)}
                  className="px-2 py-1 rounded-lg text-[11px] font-bold text-gray-700 bg-gray-100 hover:bg-[#e9f2ed] hover:text-[#213a34] transition-colors cursor-pointer"
                  title="Cộng thêm 5 phút"
                >
                  +5 phút
                </button>
                <button
                  type="button"
                  onClick={() => handleAddMinutes(10)}
                  className="px-2 py-1 rounded-lg text-[11px] font-bold text-gray-700 bg-gray-100 hover:bg-[#e9f2ed] hover:text-[#213a34] transition-colors cursor-pointer"
                  title="Cộng thêm 10 phút"
                >
                  +10 phút
                </button>
              </div>

              {/* Reset Button */}
              {showResetConfirm ? (
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-2 py-1 rounded-lg text-[11px] font-black text-white bg-red-600 hover:bg-red-700 cursor-pointer transition-colors"
                  >
                    Xóa
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowResetConfirm(false)}
                    className="px-2 py-1 rounded-lg text-[11px] font-bold text-gray-600 hover:bg-gray-100 cursor-pointer"
                  >
                    Hủy
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => setShowResetConfirm(true)}
                  className="flex items-center gap-1 text-[11px] font-bold text-gray-400 hover:text-red-600 px-2 py-1 rounded-lg transition-colors cursor-pointer"
                  title="Đặt lại thời gian học hôm nay về 0"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Đặt lại</span>
                </button>
              )}
            </div>
          </div>

          {/* Sync Note Footer */}
          <div className="text-[10px] text-gray-400 text-center border-t border-gray-100 pt-2.5">
            🔗 Tự động đồng bộ với mục tiêu học tập tại <b className="text-[#213a34]">Trang chủ</b>
          </div>
        </div>
      )}
    </div>
  );
}
