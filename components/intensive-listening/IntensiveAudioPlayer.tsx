'use client';

import { useEffect, useRef, useState } from 'react';
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
  Gauge,
  Sparkles,
} from 'lucide-react';

interface IntensiveAudioPlayerProps {
  audioSrc: string;
  title: string;
  questionRange: string;
  isLooping: boolean;
  autoAdvance: boolean;
  onToggleLoop: () => void;
  onToggleAutoAdvance: () => void;
  onNext: () => void;
  onPrev: () => void;
  hasNext: boolean;
  hasPrev: boolean;
}

export function IntensiveAudioPlayer({
  audioSrc,
  title,
  questionRange,
  isLooping,
  autoAdvance,
  onToggleLoop,
  onToggleAutoAdvance,
  onNext,
  onPrev,
  hasNext,
  hasPrev,
}: IntensiveAudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const progressBarRef = useRef<HTMLDivElement | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState(1.0);
  const [volume, setVolume] = useState(1);
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

  const togglePlay = () => {
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
  };

  const skipSeconds = (seconds: number) => {
    if (!audioRef.current) return;
    const newTime = Math.max(0, Math.min(duration, audioRef.current.currentTime + seconds));
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

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

  return (
    <div className="bg-white rounded-2xl sm:rounded-3xl border-2 border-[#213a34]/10 shadow-sm p-3.5 sm:p-5 transition-all">
      <audio
        ref={audioRef}
        src={audioSrc}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleEnded}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      {/* Header Info */}
      <div className="flex items-center justify-between gap-2 mb-3">
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-black uppercase tracking-wider bg-[#f8d467] text-[#213a34]">
              {questionRange}
            </span>
            <span className="text-xs text-gray-500 font-bold truncate hidden sm:inline">
              ETS TOEIC 2026 Test 1
            </span>
          </div>
          <h2 className="font-black text-[#213a34] text-sm sm:text-base truncate mt-0.5">
            {title}
          </h2>
        </div>

        {/* Quick Toggles */}
        <div className="flex items-center gap-1.5 shrink-0">
          {/* Loop Button */}
          <button
            type="button"
            onClick={onToggleLoop}
            title={isLooping ? 'Đang lặp lại bài nghe' : 'Bật lặp lại bài nghe'}
            className={`flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-xs font-black transition-all ${
              isLooping
                ? 'bg-[#eb6a52] text-white shadow-sm ring-2 ring-[#eb6a52]/20'
                : 'bg-[#e9f2ed] text-[#213a34] hover:bg-[#d5e5db]'
            }`}
          >
            <Repeat className={`w-3.5 h-3.5 ${isLooping ? 'animate-spin-slow' : ''}`} />
            <span className="hidden sm:inline">Lặp đoạn</span>
            <span className="text-[10px] sm:hidden">{isLooping ? 'ON' : 'OFF'}</span>
          </button>

          {/* Auto Advance Button */}
          <button
            type="button"
            onClick={onToggleAutoAdvance}
            title={autoAdvance ? 'Tự động chuyển bài khi nghe xong' : 'Tắt tự chuyển bài'}
            className={`flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-xs font-black transition-all ${
              autoAdvance && !isLooping
                ? 'bg-[#213a34] text-white shadow-sm'
                : 'bg-[#e9f2ed] text-gray-600 hover:bg-[#d5e5db]'
            }`}
          >
            <FastForward className="w-3.5 h-3.5 text-[#f8d467]" />
            <span className="hidden md:inline">Tự chuyển bài</span>
          </button>
        </div>
      </div>

      {/* Progress Bar & Timestamps */}
      <div className="space-y-1.5 mb-3">
        <div
          ref={progressBarRef}
          onClick={handleProgressBarClick}
          className="relative w-full h-3 bg-[#e9f2ed] rounded-full cursor-pointer group overflow-hidden"
        >
          <div
            className="h-full bg-gradient-to-r from-[#213a34] to-[#f29f77] rounded-full transition-[width] duration-100 relative"
            style={{ width: `${progressPercent}%` }}
          >
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-white border-2 border-[#213a34] rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>

        <div className="flex items-center justify-between text-[11px] font-bold text-gray-500 font-mono">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      {/* Main Controls Row */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-1 border-t border-gray-100">
        {/* Speed Controls */}
        <div className="flex items-center gap-1 bg-[#f5f0e6]/70 p-1 rounded-xl">
          <span className="text-[11px] font-black text-[#213a34] px-1.5 hidden sm:inline">
            Tốc độ:
          </span>
          {speeds.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setPlaybackSpeed(s)}
              className={`px-2 py-1 rounded-lg text-xs font-black transition-all ${
                playbackSpeed === s
                  ? 'bg-[#213a34] text-white shadow-sm'
                  : 'text-gray-600 hover:text-[#213a34] hover:bg-white/60'
              }`}
            >
              {s}x
            </button>
          ))}
        </div>

        {/* Audio Skip & Play Controls */}
        <div className="flex items-center gap-1 sm:gap-2">
          {/* Previous item */}
          <button
            type="button"
            onClick={onPrev}
            disabled={!hasPrev}
            title="Đoạn trước"
            className="p-2 rounded-full text-[#213a34] hover:bg-[#e9f2ed] disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
          >
            <SkipBack className="w-4 h-4" />
          </button>

          {/* Rewind 5s */}
          <button
            type="button"
            onClick={() => skipSeconds(-5)}
            title="Tua lùi 5 giây"
            className="flex items-center justify-center p-2 rounded-full text-[#213a34] hover:bg-[#e9f2ed] active:scale-95 transition-all group"
          >
            <RotateCcw className="w-5 h-5 group-hover:-rotate-45 transition-transform" />
            <span className="text-[10px] font-extrabold ml-0.5">-5s</span>
          </button>

          {/* Big Play / Pause Button */}
          <button
            type="button"
            onClick={togglePlay}
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#213a34] hover:bg-[#2c4e46] text-white flex items-center justify-center shadow-md hover:shadow-lg active:scale-95 transition-all"
          >
            {isPlaying ? (
              <Pause className="w-6 h-6 text-[#f8d467] fill-current" />
            ) : (
              <Play className="w-6 h-6 text-[#f8d467] fill-current ml-0.5" />
            )}
          </button>

          {/* Forward 5s */}
          <button
            type="button"
            onClick={() => skipSeconds(5)}
            title="Tua tới 5 giây"
            className="flex items-center justify-center p-2 rounded-full text-[#213a34] hover:bg-[#e9f2ed] active:scale-95 transition-all group"
          >
            <span className="text-[10px] font-extrabold mr-0.5">+5s</span>
            <RotateCw className="w-5 h-5 group-hover:rotate-45 transition-transform" />
          </button>

          {/* Next item */}
          <button
            type="button"
            onClick={onNext}
            disabled={!hasNext}
            title="Đoạn tiếp theo"
            className="p-2 rounded-full text-[#213a34] hover:bg-[#e9f2ed] disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
          >
            <SkipForward className="w-4 h-4" />
          </button>
        </div>

        {/* Volume & Status */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleMute}
            className="p-2 rounded-full text-gray-500 hover:text-[#213a34] hover:bg-[#e9f2ed] transition-colors"
            title={isMuted ? 'Bật tiếng' : 'Tắt tiếng'}
          >
            {isMuted ? <VolumeX className="w-4 h-4 text-red-500" /> : <Volume2 className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </div>
  );
}
