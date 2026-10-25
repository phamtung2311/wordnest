'use client';

import { useEffect, useState, useRef, useSyncExternalStore } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import {
  Timer,
  RotateCcw,
  Check,
  X,
  Award,
  BarChart2,
  Sparkles,
  Coffee,
  BookOpen,
} from 'lucide-react';
import {
  getSavedProgress,
  subscribeProgress,
  getTodayKey,
  incrementTodaySeconds,
  resetTodaySeconds,
  addTodaySeconds,
  formatStudyTime,
  emptyProgress,
} from '@/lib/studyTimeService';

function isAudioActiveCheck(lastAudioActiveTimestamp: number): boolean {
  // 1. If an audio event fired within the last 2.5 seconds, consider active
  if (Date.now() - lastAudioActiveTimestamp < 2500) {
    return true;
  }

  // 2. Check DOM audio and video elements
  if (typeof document !== 'undefined') {
    const audios = document.querySelectorAll('audio, video');
    for (const a of audios) {
      const media = a as HTMLMediaElement;
      if (!media.paused && !media.ended) {
        return true;
      }
    }
  }

  // 3. Check window.speechSynthesis
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    if (window.speechSynthesis.speaking || window.speechSynthesis.pending) {
      return true;
    }
  }

  return false;
}

function isStudyContextActive(pathname: string, lastAudioActiveTimestamp: number): boolean {
  // 1. Any TOEIC reading test routes (/practice-test or /practice-test/[id])
  if (pathname.startsWith('/practice-test')) {
    return true;
  }

  // 2. Any TOEIC listening test routes (/listening-test or /listening-test/[id])
  if (pathname.startsWith('/listening-test')) {
    return true;
  }

  // 3. Intensive listening route (/intensive-listening)
  if (pathname.startsWith('/intensive-listening')) {
    return true;
  }

  // 4. Any page where audio is playing (listening to test audio or word pronunciation)
  if (isAudioActiveCheck(lastAudioActiveTimestamp)) {
    return true;
  }

  // 5. On the home page: ONLY when actively studying vocabulary (inside a deck / flashcard arena)
  // When user is just on the home dashboard overview, return FALSE.
  if (typeof document !== 'undefined') {
    if (document.body.dataset.vocabStudying === 'true') {
      return true;
    }
    if (document.querySelector('[data-study-arena="true"]')) {
      return true;
    }
  }

  return false;
}

export default function StudyStopwatchWidget() {
  const router = useRouter();
  const rawPathname = usePathname();
  const pathname = rawPathname || '/';

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
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const [showCustomInput, setShowCustomInput] = useState(false);
  const [customMinutes, setCustomMinutes] = useState('');
  const [isIdle, setIsIdle] = useState(false);
  const [isInStudyContext, setIsInStudyContext] = useState(false);
  const lastActiveRef = useRef<number>(Date.now());
  const lastAudioActiveRef = useRef<number>(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const today = getTodayKey();
  const todaySeconds = progress.dailySeconds[today] ?? 0;
  const todayMinutes = Math.floor(todaySeconds / 60);
  const isGoalReached = todaySeconds >= 600; // 10 minutes = 600 seconds
  const progressPercent = Math.min(100, Math.round((todaySeconds / 600) * 100));

  const { formattedShort, formattedDetailed } = formatStudyTime(todaySeconds);

  // Sync study context state (Học từ vựng / Luyện đọc / Luyện nghe vs Trang chủ)
  useEffect(() => {
    const updateContext = () => {
      const active = isStudyContextActive(pathname, lastAudioActiveRef.current);
      setIsInStudyContext(active);
    };

    updateContext();
    const interval = window.setInterval(updateContext, 500);
    return () => window.clearInterval(interval);
  }, [pathname]);

  // Listen for user activity (Mouse, Keyboard, Scroll, Touch)
  useEffect(() => {
    const handleActivity = () => {
      lastActiveRef.current = Date.now();
      setIsIdle(false);
    };

    const events = ['mousemove', 'mousedown', 'keydown', 'scroll', 'touchstart', 'wheel'];
    events.forEach((evt) => window.addEventListener(evt, handleActivity, { passive: true }));

    return () => {
      events.forEach((evt) => window.removeEventListener(evt, handleActivity));
    };
  }, []);

  // Listen for media events, speech synthesis, and audio button clicks globally
  useEffect(() => {
    const handleMediaPlay = () => {
      lastAudioActiveRef.current = Date.now();
      lastActiveRef.current = Date.now();
      setIsIdle(false);
    };

    // Capture media playback events on window (works for ALL <audio> elements anywhere in DOM)
    const mediaEvents = ['play', 'playing', 'timeupdate', 'seeking', 'seeked'];
    mediaEvents.forEach((evt) => {
      window.addEventListener(evt, handleMediaPlay, true);
    });

    // Capture clicks on audio/listen buttons across any section
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const btn = target.closest('button, [role="button"], a');
      if (btn) {
        const text = (btn.textContent || '').toLowerCase();
        const title = (btn.getAttribute('title') || '').toLowerCase();
        const aria = (btn.getAttribute('aria-label') || '').toLowerCase();
        const isAudioTrigger =
          text.includes('nghe') ||
          text.includes('phát') ||
          text.includes('audio') ||
          text.includes('listen') ||
          title.includes('nghe') ||
          title.includes('audio') ||
          title.includes('phát') ||
          aria.includes('nghe') ||
          aria.includes('audio');

        if (isAudioTrigger) {
          handleMediaPlay();
        }
      }
    };
    window.addEventListener('click', handleGlobalClick, true);

    // Hook window.speechSynthesis.speak to detect pronunciation audio
    let originalSpeak: typeof window.speechSynthesis.speak | null = null;
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      originalSpeak = window.speechSynthesis.speak;
      window.speechSynthesis.speak = function (utterance: SpeechSynthesisUtterance) {
        handleMediaPlay();
        if (utterance) {
          const prevBoundary = utterance.onboundary;
          const prevEnd = utterance.onend;
          utterance.onboundary = function (ev) {
            handleMediaPlay();
            if (prevBoundary) prevBoundary.call(utterance, ev);
          };
          utterance.onend = function (ev) {
            handleMediaPlay();
            if (prevEnd) prevEnd.call(utterance, ev);
          };
        }
        return originalSpeak!.call(window.speechSynthesis, utterance);
      };
    }

    return () => {
      mediaEvents.forEach((evt) => {
        window.removeEventListener(evt, handleMediaPlay, true);
      });
      window.removeEventListener('click', handleGlobalClick, true);
      if (originalSpeak && typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.speak = originalSpeak;
      }
    };
  }, []);

  // Timer interval: 100% automatic - ONLY ticks when actively studying (Học từ / Luyện đọc / Luyện nghe)
  // Pauses when on home dashboard overview or idle >90s
  useEffect(() => {
    const interval = window.setInterval(() => {
      const audioActive = isAudioActiveCheck(lastAudioActiveRef.current);
      const isStudying = isStudyContextActive(pathname, lastAudioActiveRef.current);

      // CRITICAL: Do NOT count time if user is just on the home dashboard overview!
      if (!isStudying) {
        return;
      }

      // If document is in background, ONLY count if audio is playing!
      if (document.visibilityState !== 'visible' && !audioActive) {
        return;
      }

      if (audioActive) {
        lastActiveRef.current = Date.now();
        setIsIdle(false);
      } else {
        const inactiveDuration = Date.now() - lastActiveRef.current;
        if (inactiveDuration >= 90000) {
          setIsIdle(true);
          return; // AFK / Inactive: Stop counting!
        }
      }

      setIsIdle(false);
      incrementTodaySeconds();
    }, 1000);

    return () => window.clearInterval(interval);
  }, [pathname]);

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

  const handleReset = () => {
    resetTodaySeconds();
    setShowResetConfirm(false);
  };

  const handleAddMinutes = (mins: number) => {
    addTodaySeconds(mins * 60);
  };

  const handleCustomAdjust = (multiplier: 1 | -1) => {
    const mins = parseFloat(customMinutes);
    if (isNaN(mins) || mins <= 0) return;
    handleAddMinutes(mins * multiplier);
    setCustomMinutes('');
    setShowCustomInput(false);
  };

  if (!mounted) return null;

  return (
    <div
      ref={containerRef}
      className="fixed top-2.5 right-3 sm:top-3.5 sm:right-6 z-[9995] flex flex-col items-end select-none font-sans"
    >
      {/* COMPACT PILL (Fixed at top-right, responsive on all screens) */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 px-3 py-1.5 rounded-full border-2 transition-all cursor-pointer shadow-xs hover:shadow-md ${
          isOpen
            ? 'bg-[#213a34] text-white border-[#213a34] ring-2 ring-[#213a34]/20'
            : !isInStudyContext
            ? 'bg-white/95 backdrop-blur-md border-gray-200 text-gray-500 hover:border-gray-300'
            : isGoalReached
            ? 'bg-white/95 backdrop-blur-md border-emerald-500/40 hover:border-emerald-600 text-[#213a34]'
            : isIdle
            ? 'bg-white/95 backdrop-blur-md border-amber-400/50 hover:border-amber-500 text-[#213a34]'
            : 'bg-white/95 backdrop-blur-md border-[#213a34]/15 hover:border-[#213a34]/35 text-[#213a34]'
        }`}
        title={
          !isInStudyContext
            ? 'Trang chủ không tính giờ học. Hãy vào Học từ vựng, Luyện đọc hoặc Luyện nghe để tính giờ.'
            : isIdle
            ? 'Đang tạm dừng do không tương tác >90s. Di chuột hoặc bấm phím để tiếp tục.'
            : 'Đang tự động đếm giờ học. Nhấn để xem chi tiết & mục tiêu hôm nay.'
        }
      >
        {/* Status Dot */}
        <span
          className={`w-2 h-2 rounded-full shrink-0 ${
            !isInStudyContext
              ? 'bg-gray-300'
              : isIdle
              ? 'bg-amber-400 animate-ping'
              : 'bg-emerald-500 animate-pulse shadow-[0_0_8px_#10b981]'
          }`}
        />

        {/* Stopwatch Icon */}
        <Timer
          className={`w-3.5 h-3.5 shrink-0 transition-transform ${
            isOpen
              ? 'text-[#f8d467] scale-110'
              : !isInStudyContext
              ? 'text-gray-400'
              : isIdle
              ? 'text-amber-500'
              : 'text-[#eb6a52]'
          }`}
        />

        {/* Digital Time Display */}
        <span
          className={`font-mono text-xs font-black tracking-tight shrink-0 ${
            !isInStudyContext && !isOpen ? 'text-gray-600' : ''
          }`}
        >
          {formattedShort}
        </span>

        {/* Status Badge */}
        {!isInStudyContext ? (
          <span className="text-[10px] font-bold text-gray-400 shrink-0">
            Trang chủ
          </span>
        ) : isIdle ? (
          <span className="text-[10px] font-black px-1.5 py-0.2 rounded-full shrink-0 bg-amber-100 text-amber-800 animate-in fade-in flex items-center gap-0.5">
            <Coffee className="w-2.5 h-2.5" /> Nghỉ
          </span>
        ) : isGoalReached ? (
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
      </div>

      {/* EXPANDED DETAILS POPOVER */}
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-[calc(100vw-24px)] max-w-sm sm:w-84 bg-white rounded-3xl border-2 border-[#213a34]/15 shadow-2xl p-4 sm:p-5 z-[9996] space-y-4 animate-in fade-in slide-in-from-top-2 duration-150">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-gray-100 pb-3">
            <div className="flex items-center gap-2">
              <span className="p-2 rounded-xl bg-[#e9f2ed] text-[#213a34]">
                <Timer className="w-4 h-4 text-[#eb6a52]" />
              </span>
              <div>
                <h3 className="font-display font-black text-sm text-[#213a34] leading-tight">
                  Thời gian học hôm nay
                </h3>
                <span
                  className={`inline-flex items-center gap-1 text-[11px] font-bold ${
                    !isInStudyContext
                      ? 'text-gray-500'
                      : isIdle
                      ? 'text-amber-600'
                      : 'text-emerald-600'
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      !isInStudyContext
                        ? 'bg-gray-400'
                        : isIdle
                        ? 'bg-amber-500 animate-ping'
                        : 'bg-emerald-500 animate-pulse'
                    }`}
                  />
                  {!isInStudyContext
                    ? 'Trang chủ (vào học từ hoặc làm bài để tính giờ)'
                    : isIdle
                    ? 'Treo máy >90s (chạm chuột để học tiếp)'
                    : 'Đang tự động đếm giờ (học thật)'}
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

          {/* Smart Automatic Tracking Info Badge */}
          <div className="p-3 rounded-2xl bg-[#e9f2ed]/70 border border-[#213a34]/10 flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-xl bg-[#213a34] text-[#f8d467] flex items-center justify-center shrink-0 shadow-xs">
              {isInStudyContext ? <Sparkles className="w-3.5 h-3.5" /> : <BookOpen className="w-3.5 h-3.5" />}
            </div>
            <div className="min-w-0">
              <div className="text-xs font-black text-[#213a34] flex items-center gap-1">
                {isInStudyContext
                  ? 'Đang trong bài học — Tự động tính giờ'
                  : 'Trang chủ — Tạm dừng tính giờ'}
              </div>
              <p className="text-[11px] text-gray-600 leading-snug mt-0.5">
                {isInStudyContext
                  ? 'Hệ thống đang tự động đếm giờ học thật và tự dừng khi rời máy >90 giây.'
                  : 'Trang chủ không tính giờ học. Thời gian chỉ tự động tính khi bạn vào Học từ vựng, Luyện đọc TOEIC hoặc Luyện nghe.'}
              </p>
            </div>
          </div>

          {/* Quick Adjust Minutes & Reset */}
          <div className="space-y-2 pt-1 border-t border-gray-100">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-black uppercase tracking-wider text-gray-500">
                Điều chỉnh thời gian
              </span>
              {/* Reset Button */}
              {showResetConfirm ? (
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-2 py-0.5 rounded-lg text-[10px] font-black text-white bg-red-600 hover:bg-red-700 cursor-pointer transition-colors"
                  >
                    Xóa về 0
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowResetConfirm(false)}
                    className="px-2 py-0.5 rounded-lg text-[10px] font-bold text-gray-600 hover:bg-gray-100 cursor-pointer"
                  >
                    Hủy
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => setShowResetConfirm(true)}
                  className="flex items-center gap-1 text-[11px] font-bold text-gray-400 hover:text-red-600 px-1.5 py-0.5 rounded-lg transition-colors cursor-pointer"
                  title="Đặt lại thời gian học hôm nay về 0"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Đặt lại về 0</span>
                </button>
              )}
            </div>

            {/* Quick Adjustment Grid: -10, -5, +5, +10 */}
            <div className="grid grid-cols-4 gap-1.5">
              <button
                type="button"
                onClick={() => handleAddMinutes(-10)}
                disabled={todaySeconds === 0}
                className="py-1.5 px-1.5 rounded-xl text-[11px] font-black text-rose-700 bg-rose-50 hover:bg-rose-100 border border-rose-200/60 disabled:opacity-40 disabled:pointer-events-none transition-all active:scale-95 cursor-pointer text-center"
                title="Giảm 10 phút (khi quên tắt tính giờ)"
              >
                -10 phút
              </button>
              <button
                type="button"
                onClick={() => handleAddMinutes(-5)}
                disabled={todaySeconds === 0}
                className="py-1.5 px-1.5 rounded-xl text-[11px] font-black text-rose-700 bg-rose-50 hover:bg-rose-100 border border-rose-200/60 disabled:opacity-40 disabled:pointer-events-none transition-all active:scale-95 cursor-pointer text-center"
                title="Giảm 5 phút (khi quên tắt tính giờ)"
              >
                -5 phút
              </button>
              <button
                type="button"
                onClick={() => handleAddMinutes(5)}
                className="py-1.5 px-1.5 rounded-xl text-[11px] font-black text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200/60 transition-all active:scale-95 cursor-pointer text-center"
                title="Cộng thêm 5 phút"
              >
                +5 phút
              </button>
              <button
                type="button"
                onClick={() => handleAddMinutes(10)}
                className="py-1.5 px-1.5 rounded-xl text-[11px] font-black text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200/60 transition-all active:scale-95 cursor-pointer text-center"
                title="Cộng thêm 10 phút"
              >
                +10 phút
              </button>
            </div>

            {/* Custom Minutes Expander */}
            {!showCustomInput ? (
              <button
                type="button"
                onClick={() => setShowCustomInput(true)}
                className="w-full text-center text-[11px] font-bold text-gray-500 hover:text-[#213a34] py-0.5 transition-colors cursor-pointer"
              >
                ✎ Nhập số phút tùy chỉnh khác
              </button>
            ) : (
              <div className="flex items-center gap-1.5 p-2 rounded-xl bg-gray-50 border border-gray-200 animate-in fade-in duration-150">
                <input
                  type="number"
                  min="1"
                  max="600"
                  placeholder="Số phút..."
                  value={customMinutes}
                  onChange={(e) => setCustomMinutes(e.target.value)}
                  className="w-20 px-2 py-1 text-xs font-bold rounded-lg border border-gray-300 bg-white text-gray-800 outline-none focus:border-[#213a34]"
                  autoFocus
                />
                <button
                  type="button"
                  onClick={() => handleCustomAdjust(-1)}
                  disabled={!customMinutes || todaySeconds === 0}
                  className="flex-1 py-1 px-1.5 rounded-lg text-[10px] font-black text-rose-700 bg-rose-100 hover:bg-rose-200 disabled:opacity-40 transition-colors cursor-pointer"
                >
                  - Giảm
                </button>
                <button
                  type="button"
                  onClick={() => handleCustomAdjust(1)}
                  disabled={!customMinutes}
                  className="flex-1 py-1 px-1.5 rounded-lg text-[10px] font-black text-emerald-800 bg-emerald-100 hover:bg-emerald-200 disabled:opacity-40 transition-colors cursor-pointer"
                >
                  + Cộng
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowCustomInput(false);
                    setCustomMinutes('');
                  }}
                  className="text-gray-400 hover:text-gray-600 p-1 text-xs"
                  title="Đóng"
                >
                  ✕
                </button>
              </div>
            )}
          </div>

          {/* History Link Button */}
          <button
            type="button"
            onClick={() => {
              setIsOpen(false);
              router.push('/study-history');
            }}
            className="w-full py-2 px-3 rounded-xl bg-[#e9f2ed] hover:bg-[#d5e5db] text-[#213a34] font-black text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
          >
            <BarChart2 className="w-3.5 h-3.5 text-[#eb6a52]" />
            <span>Xem lịch sử học các ngày trong quá khứ →</span>
          </button>

          {/* Sync Note Footer */}
          <div className="text-[10px] text-gray-400 text-center border-t border-gray-100 pt-2.5">
            🔗 Tự động đồng bộ với mục tiêu học tập tại <b className="text-[#213a34]">Trang chủ</b>
          </div>
        </div>
      )}
    </div>
  );
}
