'use client';

import { useParams, useRouter } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { getLcAnswers } from '@/data/lc_answers';
import { 
  CheckCircle2, 
  XCircle, 
  AlertCircle, 
  ArrowLeft, 
  ExternalLink, 
  FileText, 
  Headphones, 
  Play, 
  Pause, 
  RotateCcw, 
  ChevronLeft, 
  ChevronRight, 
  ChevronDown, 
  ChevronUp, 
  FastForward, 
  Volume2,
  Sparkles
} from 'lucide-react';
import { QuestionMap, QuestionMapModal } from '@/components/QuestionMap';
import { getListeningToeicScore } from '@/lib/toeicScoreConverter';

type AppState = 'playing' | 'confirming' | 'result' | 'reviewing' | 'partial_reviewing';
type FilterPart = 'all' | 'part1' | 'part2' | 'part3' | 'part4' | 'unanswered';

export default function ListeningTestPlayPage() {
  const params = useParams();
  const router = useRouter();
  const testId = params.id as string;
  
  const questions = Array.from({ length: 100 }, (_, i) => i + 1);
  const options = ['A', 'B', 'C', 'D'];
  const part2Options = ['A', 'B', 'C'];
  
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [mounted, setMounted] = useState(false);
  const [appState, setAppState] = useState<AppState>('playing');
  const [results, setResults] = useState<any>(null);
  const [partialResults, setPartialResults] = useState<any>(null);

  // Audio player state
  const audioRef = useRef<HTMLAudioElement>(null);
  const targetTimeRef = useRef<number | null>(null);
  const isRestoredRef = useRef<boolean>(false);
  const lastSavedTime = useRef<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1.0);

  // Mobile enhancements
  const [mobileTab, setMobileTab] = useState<'pdf' | 'sheet'>('pdf');
  const [activeQuestion, setActiveQuestion] = useState<number>(1);
  const [autoAdvance, setAutoAdvance] = useState<boolean>(true);
  const [dockCollapsed, setDockCollapsed] = useState<boolean>(false);
  const [filterPart, setFilterPart] = useState<FilterPart>('all');
  const [pdfLoading, setPdfLoading] = useState<boolean>(true);
  const [showMapModal, setShowMapModal] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    setPdfLoading(true);
    setIsPlaying(false);
    setDuration(0);
    setAppState('playing');
    setResults(null);
    setPartialResults(null);
    setActiveQuestion(1);

    try {
      const savedProgress = localStorage.getItem(`toeic_listening_progress_${testId}`);
      if (savedProgress) {
        setAnswers(JSON.parse(savedProgress));
      } else {
        setAnswers({});
      }
    } catch (e) {
      setAnswers({});
    }

    try {
      const savedTime = localStorage.getItem(`toeic_listening_time_${testId}`);
      if (savedTime) {
        const parsed = parseFloat(savedTime);
        if (!isNaN(parsed) && parsed > 0) {
          targetTimeRef.current = parsed;
          setCurrentTime(parsed);
          lastSavedTime.current = parsed;
          isRestoredRef.current = false;
          if (audioRef.current && audioRef.current.readyState >= 1) {
            audioRef.current.currentTime = parsed;
            isRestoredRef.current = true;
          }
        } else {
          targetTimeRef.current = 0;
          setCurrentTime(0);
          lastSavedTime.current = 0;
          isRestoredRef.current = true;
          if (audioRef.current) audioRef.current.currentTime = 0;
        }
      } else {
        targetTimeRef.current = 0;
        setCurrentTime(0);
        lastSavedTime.current = 0;
        isRestoredRef.current = true;
        if (audioRef.current) audioRef.current.currentTime = 0;
      }
    } catch (e) {
      targetTimeRef.current = 0;
      setCurrentTime(0);
      lastSavedTime.current = 0;
      isRestoredRef.current = true;
      if (audioRef.current) audioRef.current.currentTime = 0;
    }
  }, [testId]);

  // Save audio progress when user leaves, closes window, switches tabs, or minimizes
  useEffect(() => {
    const saveAudioTime = () => {
      if (audioRef.current && audioRef.current.currentTime > 0) {
        try {
          localStorage.setItem(`toeic_listening_time_${testId}`, String(audioRef.current.currentTime));
        } catch (e) {}
      }
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        saveAudioTime();
      }
    };

    window.addEventListener('beforeunload', saveAudioTime);
    window.addEventListener('pagehide', saveAudioTime);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      saveAudioTime();
      window.removeEventListener('beforeunload', saveAudioTime);
      window.removeEventListener('pagehide', saveAudioTime);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [testId]);

  const applySavedTime = (audio: HTMLAudioElement) => {
    if (targetTimeRef.current !== null && targetTimeRef.current > 0 && !isRestoredRef.current) {
      try {
        if (audio.duration && targetTimeRef.current < audio.duration) {
          audio.currentTime = targetTimeRef.current;
          setCurrentTime(targetTimeRef.current);
          lastSavedTime.current = targetTimeRef.current;
          isRestoredRef.current = true;
        } else if (!audio.duration) {
          audio.currentTime = targetTimeRef.current;
          setCurrentTime(targetTimeRef.current);
          lastSavedTime.current = targetTimeRef.current;
        }
      } catch (e) {}
    }
  };
  
  const handleTimeUpdate = (e: React.SyntheticEvent<HTMLAudioElement>) => {
    const audio = e.currentTarget;
    const time = audio.currentTime;

    // Guard: Prevent initial 0 timeupdate from wiping out unsought targetTime
    if (!isRestoredRef.current && targetTimeRef.current !== null && targetTimeRef.current > 1) {
      if (time < 1) {
        applySavedTime(audio);
        return;
      } else {
        isRestoredRef.current = true;
      }
    }

    setCurrentTime(time);
    if (Math.abs(time - lastSavedTime.current) >= 1) {
      lastSavedTime.current = time;
      try {
        localStorage.setItem(`toeic_listening_time_${testId}`, String(time));
      } catch (err) {}
    }
  };

  const handleLoadedMetadata = (e: React.SyntheticEvent<HTMLAudioElement>) => {
    const audio = e.currentTarget;
    setDuration(audio.duration);
    applySavedTime(audio);
  };

  const handleCanPlay = (e: React.SyntheticEvent<HTMLAudioElement>) => {
    const audio = e.currentTarget;
    applySavedTime(audio);
  };
  
  const handlePause = (e: React.SyntheticEvent<HTMLAudioElement>) => {
    setIsPlaying(false);
    const time = e.currentTarget.currentTime;
    lastSavedTime.current = time;
    targetTimeRef.current = time;
    isRestoredRef.current = true;
    try {
      localStorage.setItem(`toeic_listening_time_${testId}`, String(time));
    } catch (err) {}
  };

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      if (!isRestoredRef.current && targetTimeRef.current !== null && targetTimeRef.current > 0) {
        applySavedTime(audioRef.current);
      }
      audioRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const skipSeconds = (seconds: number) => {
    if (!audioRef.current) return;
    const audio = audioRef.current;
    const dur = audio.duration || duration || 99999;
    const newTime = Math.max(0, Math.min(dur, audio.currentTime + seconds));
    audio.currentTime = newTime;
    setCurrentTime(newTime);
    lastSavedTime.current = newTime;
    targetTimeRef.current = newTime;
    isRestoredRef.current = true;
    try {
      localStorage.setItem(`toeic_listening_time_${testId}`, String(newTime));
    } catch (err) {}
  };

  const cyclePlaybackSpeed = () => {
    const speeds = [1.0, 1.1, 1.2, 1.5, 0.8];
    const nextIdx = (speeds.indexOf(playbackSpeed) + 1) % speeds.length;
    const nextSpeed = speeds[nextIdx];
    setPlaybackSpeed(nextSpeed);
    if (audioRef.current) {
      audioRef.current.playbackRate = nextSpeed;
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    setCurrentTime(time);
    lastSavedTime.current = time;
    targetTimeRef.current = time;
    isRestoredRef.current = true;
    if (audioRef.current) {
      audioRef.current.currentTime = time;
    }
    try {
      localStorage.setItem(`toeic_listening_time_${testId}`, String(time));
    } catch (err) {}
  };

  const formatTime = (secs: number) => {
    if (isNaN(secs) || secs < 0) return '00:00';
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };
  
  const handleClose = () => {
    if (audioRef.current && audioRef.current.currentTime > 0) {
      try {
        localStorage.setItem(`toeic_listening_time_${testId}`, String(audioRef.current.currentTime));
      } catch (err) {}
    }
    router.push('/listening-test');
  };

  const answeredCount = Object.keys(answers).length;
  const unansweredCount = 100 - answeredCount;

  const pdfUrl = testId.toString().includes("-") 
    ? `/tests/listening${testId.toString().split("-")[0]}_${testId.toString().split("-")[1]}.pdf?v=3` 
    : `/tests/listening${testId}.pdf?v=3`;

  const audioUrl = testId.toString().includes("-") 
    ? `/audio/test${testId.toString().split("-")[1]}_${testId.toString().split("-")[0]}.mp3` 
    : `/audio/test${testId}.mp3`;

  const testTitle = testId.toString().includes("-") 
    ? `ETS ${testId.toString().split("-")[0]} Đề ${testId.toString().split("-")[1]}` 
    : `ETS 2026 Đề ${testId}`;

  const getIntensiveTestId = () => {
    const str = testId.toString();
    if (str.startsWith('2023-')) {
      const num = parseInt(str.replace('2023-', ''), 10);
      return 20230 + num;
    }
    if (str.startsWith('2024-')) {
      const num = parseInt(str.replace('2024-', ''), 10);
      return 20240 + num;
    }
    const num = parseInt(str, 10);
    return isNaN(num) ? 1 : num;
  };

  const intensiveTestId = getIntensiveTestId();
  const testYear = testId.toString().includes('-') ? testId.toString().split('-')[0] : '2026';
  const testNum = testId.toString().includes('-') ? testId.toString().split('-')[1] : testId.toString();

  const handleSelect = (q: number, opt: string) => {
    if (appState === 'playing') {
      setAnswers(prev => {
        const newAnswers = { ...prev, [q]: opt };
        try {
          localStorage.setItem(`toeic_listening_progress_${testId}`, JSON.stringify(newAnswers));
        } catch (e) {}
        return newAnswers;
      });

      if (autoAdvance && q < 100) {
        setActiveQuestion(q + 1);
      }
    }
  };

  const handlePartialCheck = () => {
    const key = getLcAnswers(testId);
    let answered = 0;
    let correct = 0;
    let part1 = { correct: 0, total: 6 };
    let part2 = { correct: 0, total: 25 };
    let part3 = { correct: 0, total: 39 };
    let part4 = { correct: 0, total: 30 };

    for (const [qStr, ans] of Object.entries(answers)) {
      answered++;
      const qNum = parseInt(qStr);
      const isCorrect = key[qStr] === ans;
      if (isCorrect) {
        correct++;
        if (qNum <= 6) part1.correct++;
        else if (qNum <= 31) part2.correct++;
        else if (qNum <= 70) part3.correct++;
        else part4.correct++;
      }
    }
    setPartialResults({ answered, correct, part1, part2, part3, part4, key });
    setAppState('partial_reviewing');
    setMobileTab('sheet');
  };

  const handlePreSubmit = () => {
    setAppState('confirming');
  };

  const calculateResults = () => {
    const key = getLcAnswers(testId);
    let totalCorrect = 0;
    let part1 = { correct: 0, total: 6 };
    let part2 = { correct: 0, total: 25 };
    let part3 = { correct: 0, total: 39 };
    let part4 = { correct: 0, total: 30 };

    for (let i = 1; i <= 100; i++) {
      const isCorrect = answers[i] === key[String(i)];
      if (isCorrect) {
        totalCorrect++;
        if (i <= 6) part1.correct++;
        else if (i <= 31) part2.correct++;
        else if (i <= 70) part3.correct++;
        else part4.correct++;
      }
    }

    setResults({ totalCorrect, part1, part2, part3, part4, key });
    setAppState('result');
    setMobileTab('sheet');
    
    try {
      localStorage.removeItem(`toeic_listening_progress_${testId}`);
      localStorage.removeItem(`toeic_listening_time_${testId}`);
    } catch (e) {}
    
    try {
      const historyStr = localStorage.getItem('toeic_listening_history');
      const history = historyStr ? JSON.parse(historyStr) : [];
      history.unshift({
        testId,
        score: totalCorrect,
        date: new Date().toISOString(),
      });
      localStorage.setItem('toeic_listening_history', JSON.stringify(history.slice(0, 50)));
    } catch (e) {}
  };

  const jumpToQuestionInPdf = (q: number) => {
    setActiveQuestion(q);
    setMobileTab('pdf');
  };

  const filteredQuestions = questions.filter((q) => {
    if (filterPart === 'part1') return q <= 6;
    if (filterPart === 'part2') return q >= 7 && q <= 31;
    if (filterPart === 'part3') return q >= 32 && q <= 70;
    if (filterPart === 'part4') return q >= 71;
    if (filterPart === 'unanswered') return !answers[q];
    return true;
  });

  const getQuestionOptions = (q: number) => {
    return (q >= 7 && q <= 31) ? part2Options : options;
  };

  const renderBubble = (q: number, opt: string) => {
    const isSelected = answers[q] === opt;
    const isAnswered = !!answers[q];
    
    if (appState === 'reviewing' || (appState === 'partial_reviewing' && isAnswered)) {
      const keyObj = appState === 'reviewing' ? results?.key : partialResults?.key;
      const isCorrectOption = keyObj?.[String(q)] === opt;
      const isWrongSelected = isSelected && !isCorrectOption;

      let bubbleClass = 'bg-white text-gray-400 border-gray-200';
      if (isCorrectOption) {
        bubbleClass = 'bg-green-500 text-white border-green-500';
      } else if (isWrongSelected) {
        bubbleClass = 'bg-red-500 text-white border-red-500';
      }

      return (
        <div
          key={opt}
          className={`w-9 h-9 sm:w-8 sm:h-8 rounded-full font-bold flex items-center justify-center border-2 text-sm sm:text-base ${bubbleClass}`}
        >
          {opt}
        </div>
      );
    }

    // Playing state
    return (
      <button
        key={opt}
        onClick={() => handleSelect(q, opt)}
        className={`w-10 h-10 sm:w-8 sm:h-8 rounded-full font-bold flex items-center justify-center border-2 transition-transform active:scale-95 text-sm sm:text-base ${
          isSelected 
            ? 'bg-[#213a34] text-white border-[#213a34] shadow-sm' 
            : 'bg-white text-gray-500 border-gray-200 hover:border-[#f29f77] hover:text-[#f29f77]'
        }`}
      >
        {opt}
      </button>
    );
  };

  return (
    <div className="flex flex-col lg:flex-row h-[100dvh] w-screen overflow-hidden bg-[#f5f0e6]">
      {/* Single native audio element synced with state */}
      <audio 
        key={testId}
        ref={audioRef} 
        src={audioUrl}
        preload="metadata"
        onTimeUpdate={handleTimeUpdate} 
        onLoadedMetadata={handleLoadedMetadata}
        onCanPlay={handleCanPlay}
        onPause={handlePause} 
        onPlay={() => setIsPlaying(true)}
        onEnded={() => setIsPlaying(false)}
      />

      {/* Mobile Top Header (Screens < lg) */}
      <div className="lg:hidden flex flex-col bg-white border-b border-[#213a34]/10 shrink-0 z-20">
        <div className="flex items-center justify-between px-3 py-2 border-b border-gray-100">
          <div className="flex items-center gap-1.5">
            <button
              onClick={handleClose}
              className="flex items-center gap-1 text-xs font-bold text-gray-600 bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-full transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Đóng
            </button>
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs font-bold text-gray-600 bg-gray-100 hover:bg-gray-200 px-2.5 py-1.5 rounded-full transition-colors"
              title="Mở PDF ra tab mới"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span className="hidden xs:inline">PDF</span>
            </a>
          </div>
          <div className="text-center flex flex-col items-center">
            <div className="flex items-center gap-1.5">
              <span className={`px-2 py-0.5 rounded text-[10px] font-black ${
                testYear === '2023' 
                  ? 'bg-amber-100 text-amber-900 border border-amber-300' 
                  : testYear === '2024'
                  ? 'bg-blue-100 text-blue-900 border border-blue-300'
                  : 'bg-emerald-100 text-emerald-900 border border-emerald-300'
              }`}>
                ETS {testYear}
              </span>
              <span className="font-extrabold text-sm text-[#213a34]">Đề {testNum}</span>
            </div>
            <span className="text-[10px] font-semibold text-gray-500">Đã làm: <b className="text-[#f29f77]">{answeredCount}</b>/100</span>
          </div>
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => router.push(`/intensive-listening?test=${intensiveTestId}`)}
              className="flex items-center gap-1 text-[11px] font-black text-[#213a34] bg-[#f8d467] hover:bg-[#f5c842] px-2.5 py-1.5 rounded-full transition-all shadow-2xs shrink-0 cursor-pointer active:scale-95"
              title="Chuyển sang chế độ Luyện nghe chi tiết từng câu cho đề này"
            >
              <Sparkles className="w-3 h-3 text-[#213a34]" />
              <span className="hidden xs:inline">Chi tiết</span>
            </button>
            <button
              onClick={() => setShowMapModal(true)}
              className="flex items-center gap-1 text-[11px] font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200/80 px-2.5 py-1.5 rounded-full transition-colors cursor-pointer"
              title="Xem bản đồ câu hỏi"
            >
              <span>🗺️</span>
              <span className="hidden xs:inline">Bản đồ</span>
            </button>
            {appState === 'playing' && (
              <>
                <button
                  onClick={handlePartialCheck}
                  className="text-[11px] font-bold bg-[#e9f2ed] text-[#213a34] px-2.5 py-1.5 rounded-full"
                >
                  Chấm nhanh
                </button>
                <button
                  onClick={handlePreSubmit}
                  className="text-[11px] font-bold bg-[#f29f77] text-white px-3 py-1.5 rounded-full shadow-sm"
                >
                  Nộp
                </button>
              </>
            )}
            {appState === 'partial_reviewing' && (
              <button
                onClick={() => setAppState('playing')}
                className="text-[11px] font-bold bg-[#213a34] text-white px-3 py-1.5 rounded-full"
              >
                Làm tiếp
              </button>
            )}
          </div>
        </div>

        {/* Persistent Sticky Audio Player Bar on Mobile */}
        <div className="px-3 py-2 bg-[#213a34] text-white flex flex-col gap-1.5">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <button
                onClick={togglePlay}
                className="w-8 h-8 rounded-full bg-[#f8d467] text-[#213a34] flex items-center justify-center font-bold shadow active:scale-95 transition-transform"
                title={isPlaying ? "Tạm dừng" : "Phát Audio"}
              >
                {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
              </button>

              <button
                onClick={() => skipSeconds(-5)}
                className="text-xs bg-white/10 hover:bg-white/20 px-2 py-1 rounded-md font-bold text-gray-200"
                title="Lùi 5 giây"
              >
                -5s
              </button>

              <button
                onClick={() => skipSeconds(5)}
                className="text-xs bg-white/10 hover:bg-white/20 px-2 py-1 rounded-md font-bold text-gray-200"
                title="Tua tới 5 giây"
              >
                +5s
              </button>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono text-gray-300">
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>

              <button
                onClick={cyclePlaybackSpeed}
                className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-white/15 text-[#f8d467] border border-white/20"
                title="Tốc độ đọc"
              >
                {playbackSpeed}x
              </button>
            </div>
          </div>

          {/* Progress Seek Bar */}
          <input
            type="range"
            min={0}
            max={Math.max(duration || 0, currentTime || 0, 100)}
            step={0.5}
            value={currentTime}
            onChange={handleSeek}
            onInput={handleSeek as any}
            className="w-full h-1.5 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#f8d467]"
          />
        </div>

        {/* Mobile View Tab Switcher */}
        <div className="flex p-1 bg-[#f5f0e6] gap-1">
          <button
            onClick={() => setMobileTab('pdf')}
            className={`flex-1 py-2 text-xs font-black rounded-lg flex items-center justify-center gap-1.5 transition-colors ${
              mobileTab === 'pdf'
                ? 'bg-white text-[#213a34] shadow-sm'
                : 'text-gray-500 hover:text-gray-800'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            Đề thi (PDF)
          </button>
          <button
            onClick={() => setMobileTab('sheet')}
            className={`flex-1 py-2 text-xs font-black rounded-lg flex items-center justify-center gap-1.5 transition-colors ${
              mobileTab === 'sheet'
                ? 'bg-white text-[#213a34] shadow-sm'
                : 'text-gray-500 hover:text-gray-800'
            }`}
          >
            <span>✍️ Phiếu đáp án</span>
            <span className={`px-1.5 py-0.2 rounded-full text-[10px] ${
              answeredCount === 100 ? 'bg-green-100 text-green-700' : 'bg-gray-200 text-gray-700'
            }`}>
              {answeredCount}/100
            </span>
          </button>
        </div>
      </div>

      {/* Left Column: PDF Viewer */}
      <div 
        className={`relative flex-col bg-[#212529] border-r border-[#213a34]/10 
          ${mobileTab === 'pdf' ? 'flex flex-1 h-full' : 'hidden'} 
          lg:flex lg:h-full lg:w-[70%]`}
      >

        {/* Loading Spinner / Overlay */}
        {pdfLoading && (
          <div className="absolute inset-0 bg-[#212529] flex flex-col items-center justify-center text-white z-10 p-6 text-center">
            <div className="w-10 h-10 border-4 border-[#f8d467] border-t-transparent rounded-full animate-spin mb-3" />
            <p className="font-extrabold text-sm text-[#f8d467] mb-1">Đang tải đề thi (PDF)...</p>
            <p className="text-xs text-gray-300 max-w-xs mb-3">Vui lòng đợi vài giây để hệ thống hiển thị tài liệu.</p>
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#f8d467] hover:underline flex items-center gap-1"
            >
              <ExternalLink className="w-3 h-3" /> Bấm vào đây nếu muốn mở PDF trực tiếp
            </a>
          </div>
        )}

        {mounted && (
          <iframe 
            key={testId}
            src={`/pdfjs/web/viewer.html?file=${encodeURIComponent(pdfUrl)}#zoom=page-width&pagemode=none`}
            onLoad={() => setPdfLoading(false)}
            className="w-full h-full border-0 relative z-0" 
            title={`Listening Test ${testId} PDF`} 
            allow="fullscreen"
          />
        )}

        {/* Mobile Sticky Floating Quick Answer Bar (Only on Mobile & In PDF tab) */}
        {appState === 'playing' && (
          <div className="lg:hidden absolute bottom-3 inset-x-0 mx-auto w-[94%] max-w-sm z-30 pointer-events-auto">
            <div className="bg-white/95 backdrop-blur-md border border-[#213a34]/20 rounded-2xl shadow-xl p-2.5 transition-all">
              {/* Collapsed Bar State */}
              {dockCollapsed ? (
                <div className="flex items-center justify-between px-2 py-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-black text-[#213a34]">Câu {activeQuestion}:</span>
                    <span className="text-xs font-bold bg-[#f29f77] text-white px-2 py-0.5 rounded-full">
                      {answers[activeQuestion] || 'Chưa chọn'}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setMobileTab('sheet')}
                      className="text-xs font-bold text-gray-600 hover:text-black underline"
                    >
                      Mở phiếu ({answeredCount}/100)
                    </button>
                    <button
                      onClick={() => setDockCollapsed(false)}
                      className="p-1 rounded-full bg-gray-100 text-gray-700"
                    >
                      <ChevronUp className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ) : (
                /* Expanded Quick Answering Dock */
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between border-b border-gray-100 pb-1.5 text-xs">
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => setActiveQuestion(prev => Math.max(1, prev - 1))}
                        disabled={activeQuestion <= 1}
                        className="p-1 rounded-full bg-gray-100 disabled:opacity-30 hover:bg-gray-200 text-[#213a34]"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <span className="font-black text-sm text-[#213a34] min-w-[70px] text-center">
                        Câu {activeQuestion}
                      </span>
                      <button
                        onClick={() => setActiveQuestion(prev => Math.min(100, prev + 1))}
                        disabled={activeQuestion >= 100}
                        className="p-1 rounded-full bg-gray-100 disabled:opacity-30 hover:bg-gray-200 text-[#213a34]"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setAutoAdvance(!autoAdvance)}
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-full border transition-colors ${
                          autoAdvance 
                            ? 'bg-[#213a34] text-[#f8d467] border-[#213a34]' 
                            : 'bg-gray-100 text-gray-500 border-gray-200'
                        }`}
                        title="Tự động chuyển sang câu tiếp theo sau khi tô đáp án"
                      >
                        Tự nhảy: {autoAdvance ? 'Bật' : 'Tắt'}
                      </button>
                      <button
                        onClick={() => setDockCollapsed(true)}
                        className="p-1 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500"
                        title="Thu gọn thanh tô đáp án"
                      >
                        <ChevronDown className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Touch Option Buttons (A, B, C for Part 2, or A, B, C, D) */}
                  <div className={`grid ${activeQuestion >= 7 && activeQuestion <= 31 ? 'grid-cols-3' : 'grid-cols-4'} gap-2`}>
                    {getQuestionOptions(activeQuestion).map((opt) => {
                      const isSelected = answers[activeQuestion] === opt;
                      return (
                        <button
                          key={opt}
                          onClick={() => handleSelect(activeQuestion, opt)}
                          className={`h-11 rounded-xl font-black text-base flex items-center justify-center transition-transform active:scale-95 border-2 ${
                            isSelected
                              ? 'bg-[#213a34] text-white border-[#213a34] shadow-md scale-105'
                              : 'bg-white text-gray-700 border-gray-200 hover:border-[#f29f77]'
                          }`}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Right Column: Answer Sheet */}
      <div 
        className={`flex-col bg-[#e9f2ed] relative shadow-[-10px_0_15px_-3px_rgba(0,0,0,0.1)] 
          ${mobileTab === 'sheet' ? 'flex flex-1 h-full min-h-0' : 'hidden'} 
          lg:flex lg:h-full lg:min-h-0 lg:w-[30%]`
        }
      >
        {/* Desktop Header */}
        <div className="hidden lg:flex justify-between items-center border-b border-[#213a34]/10 p-4 sm:p-5 bg-white shrink-0 lg:pr-36">
          <div className="flex items-center gap-3">
            <span className={`px-2.5 py-1 rounded-xl text-xs font-black uppercase tracking-wider ${
              testYear === '2023' 
                ? 'bg-amber-100 text-amber-900 border border-amber-300' 
                : testYear === '2024'
                ? 'bg-blue-100 text-blue-900 border border-blue-300'
                : 'bg-emerald-100 text-emerald-900 border border-emerald-300'
            }`}>
              ETS {testYear}
            </span>
            <div>
              <h2 className="font-display text-lg sm:text-xl font-black text-[#213a34]">Đề thi {testNum} (Listening)</h2>
              <p className="text-xs text-gray-500 font-bold mt-0.5">
                100 câu hỏi (1 - 100) · Đã làm: <b className="text-[#f29f77]">{answeredCount}</b>/100
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowMapModal(true)}
              className="flex items-center gap-1.5 rounded-full bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 text-emerald-900 px-3.5 py-1.5 font-bold text-xs transition-colors shadow-2xs cursor-pointer"
              title="Xem bản đồ câu hỏi / phổ đáp án"
            >
              <span>🗺️</span>
              Bản đồ câu hỏi
            </button>
            <button
              onClick={() => router.push(`/intensive-listening?test=${intensiveTestId}`)}
              className="flex items-center gap-1.5 rounded-full bg-[#f8d467] hover:bg-[#f5c842] text-[#213a34] px-3.5 py-1.5 font-black text-xs transition-transform active:scale-95 shadow-xs cursor-pointer"
              title="Chuyển sang chế độ Luyện nghe chi tiết (STUDY4 style) cho đề này"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#213a34]" />
              Luyện chi tiết
            </button>
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-full bg-white hover:bg-gray-100 border border-gray-300 px-3.5 py-1.5 font-bold text-xs text-gray-700 transition-colors shadow-sm"
              title="Mở PDF gốc sang tab mới"
            >
              <ExternalLink className="w-3.5 h-3.5 text-[#213a34]" />
              Mở PDF
            </a>
            <button
              onClick={handleClose}
              className="rounded-full bg-white border border-gray-300 px-4 py-1.5 font-bold text-xs text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer"
            >
              Đóng
            </button>
          </div>
        </div>

        {/* Desktop Audio Player - Unified with single audioRef */}
        <div className="hidden lg:flex flex-col p-4 bg-white border-b border-[#213a34]/10 shrink-0 gap-2.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button
                onClick={togglePlay}
                className="w-8 h-8 rounded-full bg-[#213a34] text-[#f8d467] flex items-center justify-center font-bold shadow hover:bg-[#2c4e46] active:scale-95 transition-all"
                title={isPlaying ? "Tạm dừng" : "Phát Audio"}
              >
                {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
              </button>

              <button
                onClick={() => skipSeconds(-5)}
                className="text-xs bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded font-bold text-gray-700 transition-colors"
                title="Lùi 5 giây"
              >
                -5s
              </button>
              <button
                onClick={() => skipSeconds(5)}
                className="text-xs bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded font-bold text-gray-700 transition-colors"
                title="Tua tới 5 giây"
              >
                +5s
              </button>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-gray-600">
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>
              <button
                onClick={cyclePlaybackSpeed}
                className="text-xs font-bold px-2 py-0.5 rounded bg-gray-100 hover:bg-gray-200 text-[#213a34] border border-gray-200 transition-colors"
                title="Tốc độ đọc"
              >
                {playbackSpeed}x
              </button>
            </div>
          </div>

          {/* Progress Seek Bar */}
          <input
            type="range"
            min={0}
            max={Math.max(duration || 0, currentTime || 0, 100)}
            step={0.5}
            value={currentTime}
            onChange={handleSeek}
            onInput={handleSeek as any}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#213a34]"
          />
        </div>

        {/* Part Quick Filter Bar */}
        <div className="p-3 bg-white border-b border-gray-200 shrink-0 flex items-center gap-1.5 overflow-x-auto scrollbar-none">
          <button
            onClick={() => setFilterPart('all')}
            className={`px-3 py-1 text-xs font-bold rounded-full whitespace-nowrap transition-colors ${
              filterPart === 'all'
                ? 'bg-[#213a34] text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Tất cả (100)
          </button>
          <button
            onClick={() => setFilterPart('part1')}
            className={`px-2.5 py-1 text-xs font-bold rounded-full whitespace-nowrap transition-colors ${
              filterPart === 'part1'
                ? 'bg-[#213a34] text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Part 1 (1-6)
          </button>
          <button
            onClick={() => setFilterPart('part2')}
            className={`px-2.5 py-1 text-xs font-bold rounded-full whitespace-nowrap transition-colors ${
              filterPart === 'part2'
                ? 'bg-[#213a34] text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Part 2 (7-31)
          </button>
          <button
            onClick={() => setFilterPart('part3')}
            className={`px-2.5 py-1 text-xs font-bold rounded-full whitespace-nowrap transition-colors ${
              filterPart === 'part3'
                ? 'bg-[#213a34] text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Part 3 (32-70)
          </button>
          <button
            onClick={() => setFilterPart('part4')}
            className={`px-2.5 py-1 text-xs font-bold rounded-full whitespace-nowrap transition-colors ${
              filterPart === 'part4'
                ? 'bg-[#213a34] text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Part 4 (71-100)
          </button>
          {unansweredCount > 0 && (
            <button
              onClick={() => setFilterPart('unanswered')}
              className={`px-2.5 py-1 text-xs font-bold rounded-full whitespace-nowrap transition-colors ${
                filterPart === 'unanswered'
                  ? 'bg-red-500 text-white'
                  : 'bg-red-50 text-red-600 border border-red-200 hover:bg-red-100'
              }`}
            >
              Chưa làm ({unansweredCount})
            </button>
          )}
          <button
            onClick={() => setShowMapModal(true)}
            className="flex items-center gap-1 text-[11px] font-black text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 px-2.5 py-1 rounded-full transition-colors whitespace-nowrap cursor-pointer shadow-2xs ml-auto shrink-0"
            title="Mở bản đồ câu hỏi toàn màn hình"
          >
            <span>🗺️</span>
            Bản đồ
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 min-h-0 overflow-y-auto p-4 sm:p-6 scrollbar-thin relative pb-8 sm:pb-12">
          
          {appState === 'confirming' && (
            <div className="absolute inset-0 bg-white/95 backdrop-blur-sm z-30 flex items-center justify-center p-6">
              <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-xl max-w-sm w-full border border-gray-100 text-center">
                <AlertCircle className="w-14 h-14 text-orange-500 mx-auto mb-3" />
                <h3 className="text-xl sm:text-2xl font-black text-[#213a34] mb-2">Nộp bài ngay?</h3>
                <p className="text-gray-600 mb-5 font-medium text-sm sm:text-base">
                  Bạn đang bỏ trống <span className="text-red-500 font-bold text-lg">{unansweredCount}</span> câu hỏi. Bạn có chắc chắn muốn kết thúc bài thi?
                </p>
                <div className="flex flex-col gap-2.5">
                  <button onClick={calculateResults} className="w-full bg-[#f29f77] hover:bg-[#e08b63] text-white font-bold py-3 px-6 rounded-full transition-colors shadow-sm text-sm sm:text-base">
                    Xác nhận nộp bài
                  </button>
                  <button onClick={() => setAppState('playing')} className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-3 px-6 rounded-full transition-colors text-sm sm:text-base">
                    Tiếp tục làm bài
                  </button>
                </div>
              </div>
            </div>
          )}

          {appState === 'result' && (
            <div className="absolute inset-0 bg-white z-30 flex flex-col p-6 sm:p-8 overflow-y-auto">
              <h2 className="text-2xl sm:text-3xl font-black text-[#213a34] mb-6 text-center">Kết Quả Bài Làm</h2>
              
              <div className="bg-[#e9f2ed] rounded-3xl p-6 mb-6 text-center border border-[#213a34]/10">
                <p className="text-gray-500 font-bold mb-1 text-sm">Tổng điểm Listening</p>
                <div className="text-4xl sm:text-5xl font-black text-[#213a34] mb-1">
                  {results.totalCorrect} <span className="text-xl sm:text-2xl text-gray-400">/ 100</span>
                </div>
                <div className="inline-flex items-center gap-1.5 bg-[#213a34] text-white px-4 py-1.5 rounded-full text-xs font-bold mt-2 shadow-xs">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  <span>Điểm TOEIC Listening ước tính: ~{getListeningToeicScore(results.totalCorrect)} / 495</span>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mb-6">
                <div className="bg-white p-3 rounded-2xl border border-gray-100 shadow-xs text-center">
                  <div className="text-xs text-gray-500 font-semibold mb-0.5">Part 1</div>
                  <div className="font-black text-base sm:text-lg text-[#213a34]">{results.part1.correct}/{results.part1.total}</div>
                </div>
                <div className="bg-white p-3 rounded-2xl border border-gray-100 shadow-xs text-center">
                  <div className="text-xs text-gray-500 font-semibold mb-0.5">Part 2</div>
                  <div className="font-black text-base sm:text-lg text-[#213a34]">{results.part2.correct}/{results.part2.total}</div>
                </div>
                <div className="bg-white p-3 rounded-2xl border border-gray-100 shadow-xs text-center">
                  <div className="text-xs text-gray-500 font-semibold mb-0.5">Part 3</div>
                  <div className="font-black text-base sm:text-lg text-[#213a34]">{results.part3.correct}/{results.part3.total}</div>
                </div>
                <div className="bg-white p-3 rounded-2xl border border-gray-100 shadow-xs text-center">
                  <div className="text-xs text-gray-500 font-semibold mb-0.5">Part 4</div>
                  <div className="font-black text-base sm:text-lg text-[#213a34]">{results.part4.correct}/{results.part4.total}</div>
                </div>
              </div>

              {/* BẢN ĐỒ CÂU HỎI TRỰC TIẾP TRÊN TRANG KẾT QUẢ */}
              <div className="mb-6">
                <QuestionMap
                  mode="result"
                  testType="listening"
                  testId={testId}
                  testTitle={`ETS ${testYear} Đề ${testNum} (Listening)`}
                  answers={answers}
                  keyObj={results.key}
                  onSelectQuestion={(q) => {
                    setActiveQuestion(q);
                    setAppState('reviewing');
                    jumpToQuestionInPdf(q);
                  }}
                />
              </div>

              <div className="flex flex-col gap-2 mt-auto">
                <button onClick={() => setAppState('reviewing')} className="w-full bg-[#213a34] hover:bg-[#1a2f2a] text-white font-bold py-3.5 px-6 rounded-full transition-colors shadow-md text-sm sm:text-base">
                  Xem chi tiết đáp án
                </button>
                <button onClick={() => router.push('/listening-test')} className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-3 px-6 rounded-full transition-colors text-sm">
                  Trở về danh sách đề thi
                </button>
              </div>
            </div>
          )}

          {(appState === 'playing' || appState === 'reviewing' || appState === 'confirming' || appState === 'partial_reviewing') && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 max-w-md mx-auto pb-6 sm:pb-8">
              {filteredQuestions.map((q) => {
                const userAns = answers[q];
                const isReviewing = appState === 'reviewing';
                const correctAns = (appState === 'partial_reviewing' ? partialResults?.key : results?.key)?.[String(q)];
                const isCorrect = userAns === correctAns;
                const isUnanswered = !userAns;
                const isWrong = userAns && !isCorrect;
                
                const qOptions = getQuestionOptions(q);
                const isPartialReviewing = appState === 'partial_reviewing';
                
                let rowClass = "bg-white";
                if (isReviewing && isUnanswered) {
                  rowClass = "bg-gray-200 border-gray-300 opacity-80";
                } else if (isPartialReviewing && !isUnanswered) {
                  rowClass = isCorrect ? "bg-green-50 border-green-100" : "bg-red-50 border-red-100";
                }

                return (
                  <div 
                    key={q} 
                    className={`flex items-center justify-between px-3.5 py-2 rounded-xl shadow-sm border border-gray-100 relative ${rowClass} transition-colors`}
                  >
                    <div className="flex items-center gap-1.5">
                      {(isReviewing || (isPartialReviewing && !isUnanswered)) && isCorrect && <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />}
                      {(isReviewing || (isPartialReviewing && !isUnanswered)) && isWrong && <XCircle className="w-4 h-4 text-red-500 shrink-0" />}
                      <button
                        onClick={() => jumpToQuestionInPdf(q)}
                        className="font-black text-[#213a34] hover:text-[#f29f77] flex items-center gap-1 text-sm sm:text-base"
                        title="Bấm để xem câu này trong Đề thi PDF"
                      >
                        <span>{q}.</span>
                        <FileText className="w-3 h-3 text-gray-400 hover:text-[#f29f77] hidden sm:inline" />
                      </button>
                    </div>
                    <div className="flex gap-1.5 sm:gap-2">
                      {qOptions.map((opt) => renderBubble(q, opt))}
                    </div>
                  </div>
                );
              })}

              {filteredQuestions.length === 0 && (
                <div className="text-center py-12 text-gray-500 font-bold">
                  Không có câu hỏi nào trong mục này.
                </div>
              )}
            </div>
          )}
        </div>
        
        {/* Footer actions */}
        {(appState === 'playing' || appState === 'confirming') && (
          <div className="w-full p-3 sm:p-4 bg-white/95 backdrop-blur-md border-t border-[#213a34]/10 shrink-0 flex justify-between items-center gap-2 z-20">
            <span className="text-xs font-bold text-gray-600 hidden sm:inline">
              Đã làm: <b>{answeredCount}</b>/100
            </span>
            <div className="flex gap-2 w-full sm:w-auto justify-end">
              <button 
                onClick={handlePartialCheck} 
                className="flex-1 sm:flex-initial bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-2.5 sm:py-3 px-4 sm:px-6 rounded-full transition-colors text-xs sm:text-sm shadow-sm"
              >
                Chấm điểm nhanh
              </button>
              <button 
                onClick={handlePreSubmit} 
                className="flex-1 sm:flex-initial bg-[#f29f77] hover:bg-[#e08b63] text-white font-bold py-2.5 sm:py-3 px-5 sm:px-8 rounded-full transition-colors text-xs sm:text-sm shadow-sm"
              >
                Nộp bài
              </button>
            </div>
          </div>
        )}
        
        {appState === 'partial_reviewing' && (
          <div className="w-full p-3 sm:p-4 bg-white/95 backdrop-blur-md border-t border-[#213a34]/10 shrink-0 flex flex-col sm:flex-row justify-between items-center gap-2 z-20">
            <div className="font-bold text-[#213a34] flex gap-2 overflow-x-auto whitespace-nowrap scrollbar-none items-center text-xs sm:text-sm w-full sm:w-auto">
              <div>Đã làm: <span>{partialResults?.answered}</span> | Đúng: <span className="text-green-600">{partialResults?.correct}</span></div>
              <div className="h-3 w-px bg-gray-300"></div>
              <div>P1: <span className="text-green-600">{partialResults?.part1?.correct}</span>/6</div>
              <div>P2: <span className="text-green-600">{partialResults?.part2?.correct}</span>/25</div>
              <div>P3: <span className="text-green-600">{partialResults?.part3?.correct}</span>/39</div>
              <div>P4: <span className="text-green-600">{partialResults?.part4?.correct}</span>/30</div>
            </div>
            <button 
              onClick={() => setAppState('playing')} 
              className="w-full sm:w-auto bg-[#213a34] hover:bg-[#1a2f2a] text-white font-bold py-2.5 px-6 rounded-full transition-colors shadow-sm text-xs sm:text-sm"
            >
              Tiếp tục làm bài
            </button>
          </div>
        )}
        
        {appState === 'reviewing' && (
          <div className="w-full p-3 sm:p-4 bg-white/95 backdrop-blur-md border-t border-[#213a34]/10 shrink-0 flex justify-between items-center z-20">
            <button 
              onClick={() => setAppState('result')} 
              className="text-[#213a34] font-bold py-2 px-4 hover:bg-gray-100 rounded-full transition-colors flex items-center text-xs sm:text-sm"
            >
               <ArrowLeft className="w-4 h-4 mr-1.5" /> Bảng điểm
            </button>
            <div className="flex gap-3 font-bold text-xs">
               <span className="flex items-center text-green-600"><CheckCircle2 className="w-3.5 h-3.5 mr-1"/> Đúng</span>
               <span className="flex items-center text-red-500"><XCircle className="w-3.5 h-3.5 mr-1"/> Sai</span>
            </div>
          </div>
        )}
      </div>

      {/* Question Map Modal */}
      <QuestionMapModal
        isOpen={showMapModal}
        onClose={() => setShowMapModal(false)}
        mode={appState === 'playing' ? 'playing' : (appState === 'result' ? 'result' : 'reviewing')}
        testType="listening"
        testId={testId}
        testTitle={`ETS ${testYear} Đề ${testNum} (Listening)`}
        answers={answers}
        keyObj={results?.key || partialResults?.key}
        currentQuestion={activeQuestion}
        onSelectQuestion={(q) => {
          setActiveQuestion(q);
          jumpToQuestionInPdf(q);
        }}
      />
    </div>
  );
}
