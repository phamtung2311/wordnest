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
  Maximize2 
} from 'lucide-react';

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
  }, [testId]);

  const answeredCount = Object.keys(answers).length;
  const unansweredCount = 100 - answeredCount;

  const pdfUrl = testId.toString().includes("-") 
    ? `/tests/reading${testId.toString().split("-")[0]}_${testId.toString().split("-")[1]}.pdf?v=2` 
    : `/tests/test${testId}.pdf?v=2`;

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
            src={`/pdfjs/web/viewer.html?file=${encodeURIComponent(pdfUrl)}#zoom=page-width`}
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
        <div className="hidden lg:flex justify-between items-center border-b border-[#213a34]/10 p-5 bg-white shrink-0">
          <div>
            <h2 className="font-display text-xl font-black text-[#213a34]">{testTitle}</h2>
            <p className="text-xs text-gray-500 font-bold mt-0.5">
              100 câu hỏi (101 - 200) · Đã làm: <b className="text-[#f29f77]">{answeredCount}</b>/100
            </p>
          </div>
          <div className="flex items-center gap-2">
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
              className="rounded-full bg-white border border-gray-300 px-4 py-1.5 font-bold text-xs text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Đóng
            </button>
          </div>
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
              </div>

              <div className="grid gap-3 mb-6">
                <div className="bg-white p-3.5 rounded-2xl border border-gray-100 shadow-sm flex justify-between items-center text-sm sm:text-base">
                  <span className="font-bold text-gray-700">Part 5 (101-130)</span>
                  <span className="font-black text-[#f29f77]">{results.part5.correct}/{results.part5.total}</span>
                </div>
                <div className="bg-white p-3.5 rounded-2xl border border-gray-100 shadow-sm flex justify-between items-center text-sm sm:text-base">
                  <span className="font-bold text-gray-700">Part 6 (131-146)</span>
                  <span className="font-black text-[#f29f77]">{results.part6.correct}/{results.part6.total}</span>
                </div>
                <div className="bg-white p-3.5 rounded-2xl border border-gray-100 shadow-sm flex justify-between items-center text-sm sm:text-base">
                  <span className="font-bold text-gray-700">Part 7 (147-200)</span>
                  <span className="font-black text-[#f29f77]">{results.part7.correct}/{results.part7.total}</span>
                </div>
              </div>

              <div className="flex flex-col gap-2 mt-auto">
                <button onClick={() => setAppState('reviewing')} className="w-full bg-[#213a34] hover:bg-[#1a2f2a] text-white font-bold py-3.5 px-6 rounded-full transition-colors shadow-md text-sm sm:text-base">
                  Xem chi tiết đáp án
                </button>
                <button onClick={() => router.push('/practice-test')} className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-3 px-6 rounded-full transition-colors text-sm">
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
    </div>
  );
}
