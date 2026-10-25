'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import type { PracticeTab } from './types';
import {
  Play,
  Pause,
  RotateCcw,
  RotateCw,
  Repeat,
  FastForward,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
  PenTool,
  MessageSquare,
  Headphones,
  Keyboard,
} from 'lucide-react';

interface IntensiveAudioPlayerProps {
  audioSrc: string;
  title: string;
  questionRange: string;
  part?: number;
  isLooping: boolean;
  autoAdvance: boolean;
  onToggleLoop: () => void;
  onToggleAutoAdvance: () => void;
  onNext: () => void;
  onPrev: () => void;
  hasNext: boolean;
  hasPrev: boolean;
  activeTab: PracticeTab;
  onChangeTab: (tab: PracticeTab) => void;
}

export function IntensiveAudioPlayer({
  audioSrc,
  title,
  questionRange,
  part,
  isLooping,
  autoAdvance,
  onToggleLoop,
  onToggleAutoAdvance,
  onNext,
  onPrev,
  hasNext,
  hasPrev,
  activeTab,
  onChangeTab,
}: IntensiveAudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const progressBarRef = useRef<HTMLDivElement | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState(1.0);
  const [isMuted, setIsMuted] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  // Speed options
  const speeds = [0.75, 0.9, 1.0, 1.25];

  // Auto reset and play on audioSrc change
  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.playbackRate = playbackSpeed;
    setCurrentTime(0);
    setIsPlaying(false);
    audioRef.current.load();
    const playPromise = audioRef.current.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  }, [audioSrc]);

  // Sync playbackRate when changed
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.playbackRate = playbackSpeed;
    }
  }, [playbackSpeed]);

  const togglePlay = useCallback(() => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.log('Playback error:', err));
    }
  }, [isPlaying]);

  const skipSeconds = useCallback(
    (seconds: number) => {
      if (!audioRef.current) return;
      const targetTime = Math.max(0, Math.min(duration || 9999, audioRef.current.currentTime + seconds));
      audioRef.current.currentTime = targetTime;
      setCurrentTime(targetTime);
    },
    [duration]
  );

  // KEYBOARD SHORTCUTS LISTENER (STUDY4 Style: Space, Arrows, 1,2,3, [, ])
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const activeEl = document.activeElement;
      const isTyping =
        activeEl &&
        (activeEl.tagName === 'INPUT' ||
          activeEl.tagName === 'TEXTAREA' ||
          (activeEl as HTMLElement).isContentEditable);

      if (isTyping) return;

      if (e.code === 'Space') {
        e.preventDefault();
        togglePlay();
      } else if (e.code === 'ArrowLeft') {
        e.preventDefault();
        skipSeconds(-5);
      } else if (e.code === 'ArrowRight') {
        e.preventDefault();
        skipSeconds(5);
      } else if (e.code === 'KeyL' || e.code === 'KeyR') {
        e.preventDefault();
        onToggleLoop();
      } else if (e.key === '1') {
        e.preventDefault();
        onChangeTab('quiz');
      } else if (e.key === '2') {
        e.preventDefault();
        onChangeTab('transcript');
      } else if (e.key === '3') {
        e.preventDefault();
        onChangeTab('dictation');
      } else if (e.code === 'BracketLeft') {
        e.preventDefault();
        if (hasPrev) onPrev();
      } else if (e.code === 'BracketRight') {
        e.preventDefault();
        if (hasNext) onNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [togglePlay, skipSeconds, onToggleLoop, onChangeTab, hasPrev, hasNext, onPrev, onNext]);

  const handleTimeUpdate = () => {
    if (audioRef.current && !isDragging) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration || 0);
      audioRef.current.playbackRate = playbackSpeed;
    }
  };

  const handleEnded = () => {
    if (isLooping) {
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play();
        setIsPlaying(true);
      }
    } else if (autoAdvance && hasNext) {
      onNext();
    } else {
      setIsPlaying(false);
    }
  };

  const handleProgressBarClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!progressBarRef.current || !audioRef.current || duration === 0) return;
    const rect = progressBarRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(1, clickX / rect.width));
    const newTime = percentage * duration;
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const formatTime = (timeInSeconds: number) => {
    if (isNaN(timeInSeconds)) return '00:00';
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  // Clean neutral part label without spoiling question translation
  const getPartLabel = () => {
    if (part === 1) return 'Part 1 · Mô tả tranh';
    if (part === 2) return 'Part 2 · Hỏi - Đáp';
    if (part === 3) return 'Part 3 · Đoạn hội thoại';
    if (part === 4) return 'Part 4 · Bài nói chuyện';
    return `Part ${part || 2} · Luyện nghe ETS 2026`;
  };

  return (
    <div className="bg-white rounded-2xl border-2 border-[#213a34]/12 shadow-sm p-2.5 sm:p-3 space-y-2 transition-all">
      <audio
        ref={audioRef}
        src={audioSrc}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleEnded}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      {/* ROW 1: Range, Title & Controls/Speed */}
      <div className="flex items-center justify-between gap-2">
        {/* Left: Question Range badge + Title */}
        <div className="flex items-center gap-2 min-w-0 flex-1">
          <span className="inline-flex items-center px-2 py-0.5 rounded-lg text-[11px] font-black uppercase tracking-wider bg-[#213a34] text-[#f8d467] shrink-0">
            {questionRange}
          </span>
          <h2 className="font-bold text-[#213a34] text-xs sm:text-sm truncate">
            {getPartLabel()}
          </h2>
        </div>

        {/* Right: Quick Settings (Loop, Auto-advance, Speed, Mute) */}
        <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
          {/* Loop Button */}
          <button
            type="button"
            onClick={onToggleLoop}
            title={isLooping ? 'Đang bật lặp lại (Phím L)' : 'Bật lặp lại câu này (Phím L)'}
            className={`flex items-center gap-1 px-2 py-1 rounded-lg text-[11px] font-black transition-all cursor-pointer ${
              isLooping
                ? 'bg-[#eb6a52] text-white shadow-2xs ring-2 ring-[#eb6a52]/20'
                : 'bg-[#e9f2ed] text-[#213a34] hover:bg-[#d5e5db]'
            }`}
          >
            <Repeat className="w-3 h-3" />
            <span className="hidden sm:inline">Lặp</span>
          </button>

          {/* Auto Advance Button */}
          <button
            type="button"
            onClick={onToggleAutoAdvance}
            title={autoAdvance ? 'Đang bật tự chuyển bài' : 'Bật tự chuyển sang bài tiếp'}
            className={`flex items-center gap-1 px-2 py-1 rounded-lg text-[11px] font-black transition-all cursor-pointer ${
              autoAdvance && !isLooping
                ? 'bg-[#213a34] text-white shadow-2xs'
                : 'bg-[#e9f2ed] text-gray-600 hover:bg-[#d5e5db]'
            }`}
          >
            <FastForward className="w-3 h-3 text-[#f8d467]" />
            <span className="hidden md:inline">Tự chuyển</span>
          </button>

          {/* Speed Selector Pills */}
          <div className="hidden sm:flex items-center bg-[#f5f0e6] p-0.5 rounded-lg">
            {speeds.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setPlaybackSpeed(s)}
                className={`px-1.5 py-0.5 rounded text-[10px] font-black transition-all cursor-pointer ${
                  playbackSpeed === s
                    ? 'bg-[#213a34] text-white shadow-2xs'
                    : 'text-gray-600 hover:text-[#213a34]'
                }`}
              >
                {s}x
              </button>
            ))}
          </div>

          {/* Mute button */}
          <button
            type="button"
            onClick={toggleMute}
            className="p-1 rounded-lg text-gray-500 hover:text-[#213a34] hover:bg-[#e9f2ed] transition-colors cursor-pointer"
            title={isMuted ? 'Bật tiếng' : 'Tắt tiếng'}
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5 text-red-500" /> : <Volume2 className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* ROW 2: Playback Controls & Progress Bar */}
      <div className="flex items-center gap-2 sm:gap-3 pt-0.5">
        {/* Buttons cluster */}
        <div className="flex items-center gap-1 shrink-0">
          {/* Previous item */}
          <button
            type="button"
            onClick={onPrev}
            disabled={!hasPrev}
            title="Bài trước (Phím [)"
            className="p-1.5 rounded-lg text-[#213a34] hover:bg-[#e9f2ed] disabled:opacity-30 disabled:hover:bg-transparent transition-colors cursor-pointer"
          >
            <SkipBack className="w-3.5 h-3.5" />
          </button>

          {/* Rewind 5s */}
          <button
            type="button"
            onClick={() => skipSeconds(-5)}
            title="Tua lùi 5s (Phím ←)"
            className="flex items-center p-1.5 rounded-lg text-[#213a34] hover:bg-[#e9f2ed] active:scale-95 transition-all cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span className="text-[10px] font-black ml-0.5">-5s</span>
          </button>

          {/* Big Play / Pause Button */}
          <button
            type="button"
            onClick={togglePlay}
            title={isPlaying ? 'Tạm dừng (Phím Space)' : 'Phát âm thanh (Phím Space)'}
            className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shadow-xs active:scale-95 transition-all cursor-pointer ${
              isPlaying
                ? 'bg-[#213a34] text-[#f8d467] ring-2 ring-[#213a34]/20'
                : 'bg-[#213a34] hover:bg-[#2c4e46] text-white'
            }`}
          >
            {isPlaying ? (
              <Pause className="w-4 h-4 fill-current text-[#f8d467]" />
            ) : (
              <Play className="w-4 h-4 fill-current text-[#f8d467] ml-0.5" />
            )}
          </button>

          {/* Forward 5s */}
          <button
            type="button"
            onClick={() => skipSeconds(5)}
            title="Tua tới 5s (Phím →)"
            className="flex items-center p-1.5 rounded-lg text-[#213a34] hover:bg-[#e9f2ed] active:scale-95 transition-all cursor-pointer"
          >
            <span className="text-[10px] font-black mr-0.5">+5s</span>
            <RotateCw className="w-3.5 h-3.5" />
          </button>

          {/* Next item */}
          <button
            type="button"
            onClick={onNext}
            disabled={!hasNext}
            title="Bài tiếp theo (Phím ])"
            className="p-1.5 rounded-lg text-[#213a34] hover:bg-[#e9f2ed] disabled:opacity-30 disabled:hover:bg-transparent transition-colors cursor-pointer"
          >
            <SkipForward className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Progress Bar & Timestamps */}
        <div className="flex-1 flex items-center gap-2 min-w-0">
          <span className="text-[10px] sm:text-[11px] font-bold text-gray-500 font-mono shrink-0 w-9 text-right">
            {formatTime(currentTime)}
          </span>

          <div
            ref={progressBarRef}
            onClick={handleProgressBarClick}
            className="relative flex-1 h-2.5 bg-[#e9f2ed] rounded-full cursor-pointer group overflow-hidden"
          >
            <div
              className="h-full bg-gradient-to-r from-[#213a34] to-[#f29f77] rounded-full transition-[width] duration-75 relative"
              style={{ width: `${progressPercent}%` }}
            >
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white border-2 border-[#213a34] rounded-full shadow-xs opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>

          <span className="text-[10px] sm:text-[11px] font-bold text-gray-500 font-mono shrink-0 w-9">
            {formatTime(duration)}
          </span>
        </div>
      </div>

      {/* ROW 3: Integrated 3 Practice Tabs + Keyboard Shortcut Hint */}
      <div className="flex items-center justify-between gap-2 pt-1 border-t border-gray-100">
        {/* Practice Mode Tabs */}
        <div className="flex items-center gap-1 sm:gap-1.5 flex-1 min-w-0">
          <button
            type="button"
            onClick={() => onChangeTab('quiz')}
            className={`flex-1 sm:flex-none flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-xl text-xs font-black transition-all cursor-pointer ${
              activeTab === 'quiz'
                ? 'bg-[#213a34] text-white shadow-2xs'
                : 'text-gray-600 hover:text-[#213a34] hover:bg-[#e9f2ed]'
            }`}
          >
            <PenTool className="w-3.5 h-3.5 text-[#f8d467]" />
            <span>1. Trắc nghiệm</span>
          </button>

          <button
            type="button"
            onClick={() => onChangeTab('transcript')}
            className={`flex-1 sm:flex-none flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-xl text-xs font-black transition-all cursor-pointer ${
              activeTab === 'transcript'
                ? 'bg-[#213a34] text-white shadow-2xs'
                : 'text-gray-600 hover:text-[#213a34] hover:bg-[#e9f2ed]'
            }`}
          >
            <MessageSquare className="w-3.5 h-3.5 text-[#f8d467]" />
            <span>2. Lời thoại & Dịch</span>
          </button>

          <button
            type="button"
            onClick={() => onChangeTab('dictation')}
            className={`flex-1 sm:flex-none flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-xl text-xs font-black transition-all cursor-pointer ${
              activeTab === 'dictation'
                ? 'bg-[#213a34] text-white shadow-2xs'
                : 'text-gray-600 hover:text-[#213a34] hover:bg-[#e9f2ed]'
            }`}
          >
            <Headphones className="w-3.5 h-3.5 text-[#f8d467]" />
            <span>3. Chép chính tả</span>
          </button>
        </div>

        {/* Keyboard Shortcut Helper Badge */}
        <div className="hidden lg:flex items-center gap-1 text-[10px] font-bold text-gray-500 bg-[#f5f0e6] px-2 py-1 rounded-lg shrink-0">
          <Keyboard className="w-3 h-3 text-[#eb6a52]" />
          <span>
            {activeTab === 'dictation'
              ? 'Ctrl: Phát lại câu · Enter: Kiểm tra · 1/2/3: Đổi tab'
              : 'Space: Dừng/Phát · ←/→: Tua 5s · 1/2/3: Đổi tab'}
          </span>
        </div>
      </div>
    </div>
  );
}
