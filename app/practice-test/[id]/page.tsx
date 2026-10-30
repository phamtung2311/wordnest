'use client';

import { useParams, useRouter } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { getAnswers } from '@/data/test_answers';
import { 
  CheckCircle2, 
  XCircle, 
  AlertCircle, 
  ArrowLeft, 
  ExternalLink, 
  FileText, 
  ListFilter, 
  ChevronLeft, 
  ChevronRight, 
  ChevronDown, 
  ChevronUp, 
  Check, 
  Maximize2,
  RotateCcw,
  Sparkles,
  X
} from 'lucide-react';
import { QuestionMap, QuestionMapModal } from '@/components/QuestionMap';
import { getReadingToeicScore } from '@/lib/toeicScoreConverter';

type AppState = 'playing' | 'confirming' | 'result' | 'reviewing' | 'partial_reviewing';
type FilterPart = 'all' | 'part5' | 'part6' | 'part7' | 'unanswered';

export default function PracticeTestPlayPage() {
  const params = useParams();
  const router = useRouter();
  const testId = params.id as string;
  
  const questions = Array.from({ length: 100 }, (_, i) => 101 + i);
  const options = ['A', 'B', 'C', 'D'];
  
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [mounted, setMounted] = useState(false);
  const [appState, setAppState] = useState<AppState>('playing');
  const [results, setResults] = useState<any>(null);
  const [partialResults, setPartialResults] = useState<any>(null);

  // Mobile enhancements
  const [mobileTab, setMobileTab] = useState<'pdf' | 'sheet'>('pdf');
  const [activeQuestion, setActiveQuestion] = useState<number>(101);
  const [autoAdvance, setAutoAdvance] = useState<boolean>(true);
  const [dockCollapsed, setDockCollapsed] = useState<boolean>(false);
  const [filterPart, setFilterPart] = useState<FilterPart>('all');
  const [pdfLoading, setPdfLoading] = useState<boolean>(true);
  const [showResetModal, setShowResetModal] = useState<boolean>(false);
  const [showMapModal, setShowMapModal] = useState<boolean>(false);
  const [resetToast, setResetToast] = useState<string | null>(null);

  const questionItemRefs = useRef<Record<number, HTMLDivElement | null>>({});

  useEffect(() => {
    setMounted(true);
    setPdfLoading(true);
    setAppState('playing');
    setResults(null);
    setPartialResults(null);
    setActiveQuestion(101);

    try {
      const savedProgress = localStorage.getItem(`toeic_reading_progress_${testId}`);
      if (savedProgress) {
        setAnswers(JSON.parse(savedProgress));
      } else {
        setAnswers({});
      }
    } catch (e) {
      setAnswers({});
    }

    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const partParam = urlParams.get('part');
      if (partParam === 'part5') {
        setFilterPart('part5');
        setActiveQuestion(101);
      } else if (partParam === 'part6') {
        setFilterPart('part6');
        setActiveQuestion(131);
      } else if (partParam === 'part7') {
        setFilterPart('part7');
        setActiveQuestion(147);
      }
    }
  }, [testId]);

  const answeredCount = Object.keys(answers).length;
  const unansweredCount = 100 - answeredCount;

  const part5AnsweredCount = Object.keys(answers).filter(q => Number(q) >= 101 && Number(q) <= 130).length;
  const part6AnsweredCount = Object.keys(answers).filter(q => Number(q) >= 131 && Number(q) <= 146).length;
  const part7AnsweredCount = Object.keys(answers).filter(q => Number(q) >= 147 && Number(q) <= 200).length;

  const handleResetPart = (part: 'part5' | 'part6' | 'part7' | 'all') => {
    try {
      const key = `toeic_reading_progress_${testId}`;
      const newAnswers: Record<number, string> = { ...answers };

      if (part === 'all') {
        localStorage.removeItem(key);
        setAnswers({});
        setFilterPart('all');
        setActiveQuestion(101);
      } else if (part === 'part5') {
        for (let i = 101; i <= 130; i++) delete newAnswers[i];
        if (Object.keys(newAnswers).length > 0) {
          localStorage.setItem(key, JSON.stringify(newAnswers));
        } else {
          localStorage.removeItem(key);
        }
        setAnswers(newAnswers);
        setFilterPart('part5');
        setActiveQuestion(101);
      } else if (part === 'part6') {
        for (let i = 131; i <= 146; i++) delete newAnswers[i];
        if (Object.keys(newAnswers).length > 0) {
          localStorage.setItem(key, JSON.stringify(newAnswers));
        } else {
          localStorage.removeItem(key);
        }
        setAnswers(newAnswers);
        setFilterPart('part6');
        setActiveQuestion(131);
      } else if (part === 'part7') {
        for (let i = 147; i <= 200; i++) delete newAnswers[i];
        if (Object.keys(newAnswers).length > 0) {
          localStorage.setItem(key, JSON.stringify(newAnswers));
        } else {
          localStorage.removeItem(key);
        }
        setAnswers(newAnswers);
        setFilterPart('part7');
        setActiveQuestion(147);
      }

      setAppState('playing');
      setShowResetModal(false);
      setResults(null);
      setPartialResults(null);

      const partLabel = part === 'part5' ? 'Part 5' : part === 'part6' ? 'Part 6' : part === 'part7' ? 'Part 7' : 'toàn bộ đề';
      setResetToast(`Đã làm lại ${partLabel}! Bắt đầu làm bài.`);
      setTimeout(() => setResetToast(null), 3000);
    } catch (e) {
      console.error('Reset error:', e);
    }
  };

  const pdfUrl = testId.toString().includes("-") 
    ? `/tests/reading${testId.toString().split("-")[0]}_${testId.toString().split("-")[1]}.pdf?v=ocr_v3` 
    : `/tests/test${testId}.pdf?v=ocr_v3`;

  const testTitle = testId.toString().includes("-") 
    ? `ETS ${testId.toString().split("-")[0]} Đề ${testId.toString().split("-")[1]}` 
    : `ETS 2026 Đề ${testId}`;

  const handleSelect = (q: number, opt: string) => {
    if (appState === 'playing') {
      setAnswers(prev => {
        const newAnswers = { ...prev, [q]: opt };
        try {
          localStorage.setItem(`toeic_reading_progress_${testId}`, JSON.stringify(newAnswers));
        } catch (e) {}
        return newAnswers;
      });

      // If called from quick dock with auto-advance, move to next question
      if (autoAdvance && q < 200) {
        setActiveQuestion(q + 1);
      }
    }
  };

  const handlePartialCheck = () => {
    const key = getAnswers(testId);
    let answered = 0;
    let correct = 0;
    let part5 = { correct: 0, total: 30 };
    let part6 = { correct: 0, total: 16 };
    let part7 = { correct: 0, total: 54 };

    for (const [qStr, ans] of Object.entries(answers)) {
      answered++;
      const qNum = parseInt(qStr);
      const isCorrect = key[qStr] === ans;
      if (isCorrect) {
        correct++;
        if (qNum <= 130) part5.correct++;
        else if (qNum <= 146) part6.correct++;
        else part7.correct++;
      }
    }
    setPartialResults({ answered, correct, part5, part6, part7, key });
    setAppState('partial_reviewing');
    setMobileTab('sheet');
  };

  const handlePreSubmit = () => {
    setAppState('confirming');
  };

  const calculateResults = () => {
    const key = getAnswers(testId);
    let totalCorrect = 0;
    let part5 = { correct: 0, total: 30 };
    let part6 = { correct: 0, total: 16 };
    let part7 = { correct: 0, total: 54 };

    for (let i = 101; i <= 200; i++) {
      const isCorrect = answers[i] === key[String(i)];
      if (isCorrect) {
        totalCorrect++;
        if (i <= 130) part5.correct++;
        else if (i <= 146) part6.correct++;
        else part7.correct++;
      }
    }

    setResults({ totalCorrect, part5, part6, part7, key });
    setAppState('result');
    setMobileTab('sheet');
    
    try {
      localStorage.removeItem(`toeic_reading_progress_${testId}`);
    } catch (e) {}
    
    try {
      const historyStr = localStorage.getItem('toeic_reading_history');
      const history = historyStr ? JSON.parse(historyStr) : [];
      history.unshift({
        testId,
        score: totalCorrect,
        date: new Date().toISOString(),
      });
      localStorage.setItem('toeic_reading_history', JSON.stringify(history.slice(0, 50)));
    } catch (e) {}
  };

  const jumpToQuestionInPdf = (q: number) => {
    setActiveQuestion(q);
    setMobileTab('pdf');
  };

  const filteredQuestions = questions.filter((q) => {
    if (filterPart === 'part5') return q <= 130;
    if (filterPart === 'part6') return q >= 131 && q <= 146;
    if (filterPart === 'part7') return q >= 147;
    if (filterPart === 'unanswered') return !answers[q];
    return true;
  });

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
      {/* Mobile Top Header (Visible on screens < lg) */}
      <div className="lg:hidden flex flex-col bg-white border-b border-[#213a34]/10 shrink-0 z-20">
        <div className="flex items-center justify-between px-3 py-2 border-b border-gray-100">
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => router.push('/practice-test')}
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
            <button
              onClick={() => setShowResetModal(true)}
              className="flex items-center gap-1 text-xs font-bold text-amber-800 bg-amber-50 hover:bg-amber-100 border border-amber-200/80 px-2.5 py-1.5 rounded-full transition-colors cursor-pointer"
              title="Làm lại đề hoặc từng Part"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span className="hidden xs:inline">Làm lại</span>
            </button>
            <button
              onClick={() => setShowMapModal(true)}
              className="flex items-center gap-1 text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200/80 px-2.5 py-1.5 rounded-full transition-colors cursor-pointer"
              title="Xem bản đồ câu hỏi"
            >
              <span>🗺️</span>
              <span className="hidden xs:inline">Bản đồ</span>
            </button>
          </div>
          <div className="text-center">
            <span className="font-extrabold text-sm text-[#213a34] block leading-tight">{testTitle}</span>
            <span className="text-[11px] font-semibold text-gray-500">Đã làm: <b className="text-[#f29f77]">{answeredCount}</b>/100</span>
          </div>
          <div className="flex items-center gap-1.5">
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

      {/* PDF Viewer: Desktop always visible, Mobile visible when mobileTab === 'pdf' */}
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
            src={`/pdfjs/web/viewer.html?v=ocr3&file=${encodeURIComponent(pdfUrl)}#zoom=page-width&pagemode=none`}
            onLoad={() => setPdfLoading(false)}
            className="w-full h-full border-0 relative z-0" 
            title={`Test ${testId} PDF`} 
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
                        onClick={() => setActiveQuestion(prev => Math.max(101, prev - 1))}
                        disabled={activeQuestion <= 101}
                        className="p-1 rounded-full bg-gray-100 disabled:opacity-30 hover:bg-gray-200 text-[#213a34]"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <span className="font-black text-sm text-[#213a34] min-w-[70px] text-center">
                        Câu {activeQuestion}
                      </span>
                      <button
                        onClick={() => setActiveQuestion(prev => Math.min(200, prev + 1))}
                        disabled={activeQuestion >= 200}
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

                  {/* 4 Large Touch Option Buttons */}
                  <div className="grid grid-cols-4 gap-2">
                    {options.map((opt) => {
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

      {/* Answer Sheet Column: Desktop 30%, Mobile full view when mobileTab === 'sheet' */}
      <div 
        className={`flex-col bg-[#e9f2ed] relative shadow-[-10px_0_15px_-3px_rgba(0,0,0,0.1)] 
          ${mobileTab === 'sheet' ? 'flex flex-1 h-full min-h-0' : 'hidden'} 
          lg:flex lg:h-full lg:min-h-0 lg:w-[30%]`
        }
      >
        {/* Desktop Header (hidden on mobile, mobile uses its own top header) */}
        <div className="hidden lg:flex justify-between items-center border-b border-[#213a34]/10 p-5 bg-white shrink-0 lg:pr-36">
          <div>
            <h2 className="font-display text-xl font-black text-[#213a34]">{testTitle}</h2>
            <p className="text-xs text-gray-500 font-bold mt-0.5">
              100 câu hỏi (101 - 200) · Đã làm: <b className="text-[#f29f77]">{answeredCount}</b>/100
            </p>
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
              onClick={() => setShowResetModal(true)}
              className="flex items-center gap-1.5 rounded-full bg-amber-50 hover:bg-amber-100 border border-amber-300 text-amber-900 px-3.5 py-1.5 font-bold text-xs transition-colors shadow-2xs cursor-pointer"
              title="Làm lại bài thi hoặc từng Part"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Làm lại đề
            </button>
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-full bg-white hover:bg-gray-100 border border-gray-300 px-3.5 py-1.5 font-bold text-xs text-gray-700 transition-colors shadow-sm"
              title="Mở PDF gốc sang tab mới"
            >
              <ExternalLink className="w-3.5 h-3.5 text-[#213a34]" />
              Mở PDF tab mới
            </a>
            <button
              onClick={() => router.push('/practice-test')}
              className="rounded-full bg-white border border-gray-300 px-4 py-1.5 font-bold text-xs text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer"
            >
              Đóng
            </button>
          </div>
        </div>

        {/* Part Quick Filter Bar */}
        <div className="p-3 bg-white border-b border-gray-200 shrink-0 flex items-center justify-between gap-1.5 overflow-x-auto scrollbar-none">
          <div className="flex items-center gap-1.5 shrink-0">
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
              onClick={() => setFilterPart('part5')}
              className={`px-2.5 py-1 text-xs font-bold rounded-full whitespace-nowrap transition-colors ${
                filterPart === 'part5'
                  ? 'bg-[#213a34] text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Part 5 (101-130)
            </button>
            <button
              onClick={() => setFilterPart('part6')}
              className={`px-2.5 py-1 text-xs font-bold rounded-full whitespace-nowrap transition-colors ${
                filterPart === 'part6'
                  ? 'bg-[#213a34] text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Part 6 (131-146)
            </button>
            <button
              onClick={() => setFilterPart('part7')}
              className={`px-2.5 py-1 text-xs font-bold rounded-full whitespace-nowrap transition-colors ${
                filterPart === 'part7'
                  ? 'bg-[#213a34] text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Part 7 (147-200)
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
          </div>

          {/* Quick Contextual Redo button inside filter bar */}
          <div className="shrink-0 pl-1">
            {filterPart === 'part5' && part5AnsweredCount > 0 && (
              <button
                onClick={() => handleResetPart('part5')}
                className="flex items-center gap-1 text-[11px] font-black text-amber-800 bg-amber-50 hover:bg-amber-100 border border-amber-200 px-2.5 py-1 rounded-full transition-colors whitespace-nowrap cursor-pointer shadow-2xs"
                title="Xoá đáp án 30 câu Part 5 để làm lại"
              >
                <RotateCcw className="w-3 h-3" />
                Làm lại Part 5
              </button>
            )}
            {filterPart === 'part6' && part6AnsweredCount > 0 && (
              <button
                onClick={() => handleResetPart('part6')}
                className="flex items-center gap-1 text-[11px] font-black text-amber-800 bg-amber-50 hover:bg-amber-100 border border-amber-200 px-2.5 py-1 rounded-full transition-colors whitespace-nowrap cursor-pointer shadow-2xs"
                title="Xoá đáp án 16 câu Part 6 để làm lại"
              >
                <RotateCcw className="w-3 h-3" />
                Làm lại Part 6
              </button>
            )}
            {filterPart === 'part7' && part7AnsweredCount > 0 && (
              <button
                onClick={() => handleResetPart('part7')}
                className="flex items-center gap-1 text-[11px] font-black text-amber-800 bg-amber-50 hover:bg-amber-100 border border-amber-200 px-2.5 py-1 rounded-full transition-colors whitespace-nowrap cursor-pointer shadow-2xs"
                title="Xoá đáp án 54 câu Part 7 để làm lại"
              >
                <RotateCcw className="w-3 h-3" />
                Làm lại Part 7
              </button>
            )}
            {filterPart === 'all' && answeredCount > 0 && (
              <button
                onClick={() => setShowResetModal(true)}
                className="flex items-center gap-1 text-[11px] font-black text-amber-800 bg-amber-50 hover:bg-amber-100 border border-amber-200 px-2.5 py-1 rounded-full transition-colors whitespace-nowrap cursor-pointer shadow-2xs"
                title="Chọn phần muốn làm lại"
              >
                <RotateCcw className="w-3 h-3" />
                Làm lại...
              </button>
            )}
            <button
              onClick={() => setShowMapModal(true)}
              className="flex items-center gap-1 text-[11px] font-black text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 px-2.5 py-1 rounded-full transition-colors whitespace-nowrap cursor-pointer shadow-2xs ml-1"
              title="Mở bản đồ câu hỏi toàn màn hình"
            >
              <span>🗺️</span>
              Bản đồ
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 min-h-0 overflow-y-auto p-4 sm:p-6 pb-8 sm:pb-12 scrollbar-thin relative">
          
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
                <p className="text-gray-500 font-bold mb-1 text-sm">Tổng điểm Reading</p>
                <div className="text-4xl sm:text-5xl font-black text-[#213a34] mb-1">
                  {results.totalCorrect} <span className="text-xl sm:text-2xl text-gray-400">/ 100</span>
                </div>
                <div className="inline-flex items-center gap-1.5 bg-[#213a34] text-white px-4 py-1.5 rounded-full text-xs font-bold mt-2 shadow-xs">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  <span>Điểm TOEIC Reading ước tính: ~{getReadingToeicScore(results.totalCorrect)} / 495</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-6">
                <div className="bg-white p-3 rounded-2xl border border-gray-100 shadow-xs text-center">
                  <div className="text-xs text-gray-500 font-semibold mb-0.5">Part 5</div>
                  <div className="font-black text-base sm:text-lg text-[#213a34]">{results.part5.correct}/{results.part5.total}</div>
                </div>
                <div className="bg-white p-3 rounded-2xl border border-gray-100 shadow-xs text-center">
                  <div className="text-xs text-gray-500 font-semibold mb-0.5">Part 6</div>
                  <div className="font-black text-base sm:text-lg text-[#213a34]">{results.part6.correct}/{results.part6.total}</div>
                </div>
                <div className="bg-white p-3 rounded-2xl border border-gray-100 shadow-xs text-center">
                  <div className="text-xs text-gray-500 font-semibold mb-0.5">Part 7</div>
                  <div className="font-black text-base sm:text-lg text-[#213a34]">{results.part7.correct}/{results.part7.total}</div>
                </div>
              </div>

              {/* BẢN ĐỒ CÂU HỎI TRỰC TIẾP TRÊN TRANG KẾT QUẢ */}
              <div className="mb-6">
                <QuestionMap
                  mode="result"
                  testType="reading"
                  testId={testId}
                  testTitle={testTitle}
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
                <button onClick={() => setAppState('reviewing')} className="w-full bg-[#213a34] hover:bg-[#1a2f2a] text-white font-bold py-3.5 px-6 rounded-full transition-colors shadow-md text-sm sm:text-base cursor-pointer">
                  Xem chi tiết đáp án
                </button>
                <button 
                  onClick={() => handleResetPart('part5')} 
                  className="w-full bg-amber-500 hover:bg-amber-600 text-white font-black py-3 px-6 rounded-full transition-colors shadow-sm flex items-center justify-center gap-2 text-sm cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" />
                  Làm lại Part 5 (Ôn tập ngữ pháp & từ vựng)
                </button>
                <button 
                  onClick={() => setShowResetModal(true)} 
                  className="w-full bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 font-bold py-2.5 px-6 rounded-full transition-colors flex items-center justify-center gap-2 text-xs cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5 text-gray-500" />
                  Tùy chọn làm lại phần khác...
                </button>
                <button onClick={() => router.push('/practice-test')} className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-2.5 px-6 rounded-full transition-colors text-xs cursor-pointer">
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

                let rowClass = "bg-white";
                if (isReviewing && isUnanswered) {
                  rowClass = "bg-gray-200 border-gray-300 opacity-80";
                }

                return (
                  <div 
                    key={q} 
                    ref={el => { questionItemRefs.current[q] = el; }}
                    className={`flex items-center justify-between px-3.5 py-2 rounded-xl shadow-sm border border-gray-100 ${rowClass} transition-colors`}
                  >
                    <div className="flex items-center gap-1.5">
                      {isReviewing && isCorrect && <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />}
                      {isReviewing && isWrong && <XCircle className="w-4 h-4 text-red-500 shrink-0" />}
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
                      {options.map((opt) => renderBubble(q, opt))}
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
        
        {/* Bottom Footer Actions (Desktop & Mobile) */}
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
              <div>P5: <span className="text-green-600">{partialResults?.part5?.correct}</span>/30</div>
              <div>P6: <span className="text-green-600">{partialResults?.part6?.correct}</span>/16</div>
              <div>P7: <span className="text-green-600">{partialResults?.part7?.correct}</span>/54</div>
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
            <div className="flex items-center gap-2">
              <button 
                onClick={() => setAppState('result')} 
                className="text-[#213a34] font-bold py-1.5 px-3 hover:bg-gray-100 rounded-full transition-colors flex items-center text-xs sm:text-sm cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4 mr-1.5" /> Bảng điểm
              </button>
              <button 
                onClick={() => setShowResetModal(true)} 
                className="text-amber-800 bg-amber-50 hover:bg-amber-100 border border-amber-200 font-black py-1.5 px-3 rounded-full transition-colors flex items-center text-xs gap-1.5 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" /> Làm lại Part / Đề
              </button>
            </div>
            <div className="flex gap-3 font-bold text-xs">
              <span className="flex items-center text-green-600"><CheckCircle2 className="w-3.5 h-3.5 mr-1"/> Đúng</span>
              <span className="flex items-center text-red-500"><XCircle className="w-3.5 h-3.5 mr-1"/> Sai</span>
            </div>
          </div>
        )}
      </div>

      {/* Reset Confirmation Modal */}
      {showResetModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-7 max-w-md w-full shadow-2xl border border-[#213a34]/10 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between pb-3.5 border-b border-gray-100 mb-4">
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
                  Làm lại bài thi
                </span>
                <h3 className="font-display text-lg sm:text-xl font-black text-[#213a34] mt-1">
                  {testTitle}
                </h3>
              </div>
              <button
                onClick={() => setShowResetModal(false)}
                className="p-1.5 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-700 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-gray-600 font-medium mb-4">
              Chọn phần bạn muốn xoá đáp án đã chọn để bắt đầu làm lại:
            </p>

            <div className="space-y-2.5 mb-5">
              {/* Option Part 5 */}
              <div className="p-3.5 rounded-2xl bg-[#faf8f5] hover:bg-[#f4f8f5] border border-[#213a34]/8 transition-all flex items-center justify-between gap-3">
                <div className="text-left">
                  <div className="flex items-center gap-1.5">
                    <span className="font-black text-sm text-[#213a34]">Part 5 (Câu 101 - 130)</span>
                    <span className="text-[10px] bg-emerald-100 text-emerald-800 font-extrabold px-1.5 py-0.2 rounded-full">30 câu</span>
                  </div>
                  <p className="text-[11px] text-gray-500 mt-0.5">
                    Ôn tập Ngữ pháp & Từ vựng {part5AnsweredCount > 0 && `(đã làm ${part5AnsweredCount}/30)`}
                  </p>
                </div>
                <button
                  onClick={() => handleResetPart('part5')}
                  className="px-3.5 py-2 rounded-xl bg-[#213a34] hover:bg-[#1a2f2a] text-white text-xs font-black shadow-xs transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Làm lại
                </button>
              </div>

              {/* Option Part 6 */}
              <div className="p-3.5 rounded-2xl bg-[#faf8f5] hover:bg-[#f4f8f5] border border-[#213a34]/8 transition-all flex items-center justify-between gap-3">
                <div className="text-left">
                  <div className="flex items-center gap-1.5">
                    <span className="font-black text-sm text-[#213a34]">Part 6 (Câu 131 - 146)</span>
                    <span className="text-[10px] bg-blue-100 text-blue-800 font-extrabold px-1.5 py-0.2 rounded-full">16 câu</span>
                  </div>
                  <p className="text-[11px] text-gray-500 mt-0.5">
                    Hoàn thành đoạn văn {part6AnsweredCount > 0 && `(đã làm ${part6AnsweredCount}/16)`}
                  </p>
                </div>
                <button
                  onClick={() => handleResetPart('part6')}
                  className="px-3.5 py-2 rounded-xl bg-[#213a34] hover:bg-[#1a2f2a] text-white text-xs font-black shadow-xs transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Làm lại
                </button>
              </div>

              {/* Option Part 7 */}
              <div className="p-3.5 rounded-2xl bg-[#faf8f5] hover:bg-[#f4f8f5] border border-[#213a34]/8 transition-all flex items-center justify-between gap-3">
                <div className="text-left">
                  <div className="flex items-center gap-1.5">
                    <span className="font-black text-sm text-[#213a34]">Part 7 (Câu 147 - 200)</span>
                    <span className="text-[10px] bg-purple-100 text-purple-800 font-extrabold px-1.5 py-0.2 rounded-full">54 câu</span>
                  </div>
                  <p className="text-[11px] text-gray-500 mt-0.5">
                    Đọc hiểu văn bản {part7AnsweredCount > 0 && `(đã làm ${part7AnsweredCount}/54)`}
                  </p>
                </div>
                <button
                  onClick={() => handleResetPart('part7')}
                  className="px-3.5 py-2 rounded-xl bg-[#213a34] hover:bg-[#1a2f2a] text-white text-xs font-black shadow-xs transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Làm lại
                </button>
              </div>

              {/* Option Reset All */}
              <div className="p-3.5 rounded-2xl bg-red-50/50 hover:bg-red-50 border border-red-200/60 transition-all flex items-center justify-between gap-3">
                <div className="text-left">
                  <div className="flex items-center gap-1.5">
                    <span className="font-black text-sm text-red-900">Toàn bộ 100 câu</span>
                  </div>
                  <p className="text-[11px] text-red-700/70 mt-0.5">Xóa tất cả Part 5, 6, 7 làm lại cả đề</p>
                </div>
                <button
                  onClick={() => handleResetPart('all')}
                  className="px-3.5 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-black shadow-xs transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Xóa cả đề
                </button>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => setShowResetModal(false)}
                className="w-full py-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-bold transition-colors cursor-pointer"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toast Notification */}
      {resetToast && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50 bg-[#213a34] text-white px-4 py-2.5 rounded-full shadow-lg text-xs font-black flex items-center gap-2 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          {resetToast}
        </div>
      )}

      {/* Question Map Modal */}
      <QuestionMapModal
        isOpen={showMapModal}
        onClose={() => setShowMapModal(false)}
        mode={appState === 'playing' ? 'playing' : (appState === 'result' ? 'result' : 'reviewing')}
        testType="reading"
        testId={testId}
        testTitle={testTitle}
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
