'use client';

import { useParams, useRouter } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { getLcAnswers } from '@/data/lc_answers';
import { CheckCircle2, XCircle, AlertCircle, ArrowLeft } from 'lucide-react';

type AppState = 'playing' | 'confirming' | 'result' | 'reviewing' | 'partial_reviewing';

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
  const [partialResults, setPartialResults] = useState<{answered: number, correct: number, key: any} | null>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const lastSavedTime = useRef<number>(0);

  useEffect(() => {
    setMounted(true);
    try {
      const savedProgress = localStorage.getItem(`toeic_listening_progress_${testId}`);
      if (savedProgress) {
        setAnswers(JSON.parse(savedProgress));
      }
      const savedTime = localStorage.getItem(`toeic_listening_time_${testId}`);
      if (savedTime && audioRef.current) {
        audioRef.current.currentTime = Number(savedTime);
      }
    } catch (e) {}
  }, [testId]);
  
  const handleTimeUpdate = (e: React.SyntheticEvent<HTMLAudioElement>) => {
    const time = e.currentTarget.currentTime;
    if (Math.abs(time - lastSavedTime.current) > 2) {
      lastSavedTime.current = time;
      try {
        localStorage.setItem(`toeic_listening_time_${testId}`, String(time));
      } catch (err) {}
    }
  };
  
  const handlePause = (e: React.SyntheticEvent<HTMLAudioElement>) => {
    const time = e.currentTarget.currentTime;
    lastSavedTime.current = time;
    try {
      localStorage.setItem(`toeic_listening_time_${testId}`, String(time));
    } catch (err) {}
  };
  
  const handleClose = () => {
    if (audioRef.current) {
      try {
        localStorage.setItem(`toeic_listening_time_${testId}`, String(audioRef.current.currentTime));
      } catch (err) {}
    }
    router.push('/listening-test');
  };

  const handleSelect = (q: number, opt: string) => {
    if (appState === 'playing') {
      setAnswers(prev => {
        const newAnswers = { ...prev, [q]: opt };
        try {
          localStorage.setItem(`toeic_listening_progress_${testId}`, JSON.stringify(newAnswers));
        } catch (e) {}
        return newAnswers;
      });
    }
  };

  
  const handlePartialCheck = () => {
    const key = getLcAnswers(testId);
    let answered = 0;
    let correct = 0;
    for (const [qStr, ans] of Object.entries(answers)) {
      answered++;
      if (key[qStr] === ans) correct++;
    }
    setPartialResults({ answered, correct, key });
    setAppState('partial_reviewing');
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

  const getUnansweredCount = () => {
    return 100 - Object.keys(answers).length;
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
          className={`w-8 h-8 rounded-full font-bold flex items-center justify-center border-2 ${bubbleClass}`}
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
        className={`w-8 h-8 rounded-full font-bold flex items-center justify-center border-2 transition-colors ${
          isSelected 
            ? 'bg-[#213a34] text-white border-[#213a34]' 
            : 'bg-white text-gray-400 border-gray-200 hover:border-[#f29f77] hover:text-[#f29f77]'
        }`}
      >
        {opt}
      </button>
    );
  };

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#f5f0e6]">
      {/* Left Column: PDF Viewer */}
      <div className="flex h-full w-[60%] flex-col bg-gray-600 border-r border-[#213a34]/10 relative">
        {mounted && (
          <iframe 
            src={testId.toString().includes("-") ? `/tests/listening${testId.toString().split("-")[0]}_${testId.toString().split("-")[1]}.pdf?v=2` : `/tests/listening${testId}.pdf?v=2`}
            className="w-full h-full border-0" 
            title={`Listening Test ${testId} PDF`} 
          />
        )}
      </div>

      {/* Right Column */}
      <div className="flex h-full w-[40%] flex-col bg-[#e9f2ed] relative shadow-[-10px_0_15px_-3px_rgba(0,0,0,0.1)]">
        
        {/* Header */}
        <div className="flex justify-between items-center border-b border-[#213a34]/10 p-6 bg-white shrink-0">
          <div>
            <h2 className="font-display text-2xl font-black text-[#213a34]">Listening {testId.toString().includes("-") ? `ETS ${testId.toString().split("-")[0]} Đề ${testId.toString().split("-")[1]}` : `ETS 2026 Đề ${testId}`}</h2>
            <p className="text-sm text-gray-500 font-bold mt-1">100 câu hỏi (1 - 100)</p>
          </div>
          <button
            onClick={handleClose}
            className="rounded-full bg-white border border-gray-300 px-6 py-2.5 font-bold text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Đóng
          </button>
        </div>
        
        {/* Audio Player */}
        <div className="p-4 bg-white border-b border-[#213a34]/10 shrink-0">
          <p className="text-sm font-bold text-gray-600 mb-2">Audio {testId.toString().includes("-") ? `ETS ${testId.toString().split("-")[0]} Đề ${testId.toString().split("-")[1]}` : `ETS 2026 Đề ${testId}`}:</p>
          <audio ref={audioRef} controls onTimeUpdate={handleTimeUpdate} onPause={handlePause} className="w-full h-10 outline-none">
            <source src={testId.toString().includes("-") ? `/audio/test${testId.toString().split("-")[1]}_${testId.toString().split("-")[0]}.mp3` : `/audio/test${testId}.mp3`} type="audio/mpeg" />
            Trình duyệt của bạn không hỗ trợ thẻ audio.
          </audio>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-6 scrollbar-thin relative">
          
          {appState === 'confirming' && (
            <div className="absolute inset-0 bg-white/90 backdrop-blur-sm z-10 flex items-center justify-center p-6">
              <div className="bg-white p-8 rounded-3xl shadow-xl max-w-sm w-full border border-gray-100 text-center">
                <AlertCircle className="w-16 h-16 text-orange-500 mx-auto mb-4" />
                <h3 className="text-2xl font-black text-[#213a34] mb-2">Nộp bài ngay?</h3>
                <p className="text-gray-600 mb-6 font-medium">
                  Bạn đang bỏ trống <span className="text-red-500 font-bold text-lg">{getUnansweredCount()}</span> câu hỏi. Bạn có chắc chắn muốn kết thúc bài thi?
                </p>
                <div className="flex flex-col gap-3">
                  <button onClick={calculateResults} className="w-full bg-[#f29f77] hover:bg-[#e08b63] text-white font-bold py-3 px-6 rounded-full transition-colors shadow-sm">
                    Xác nhận nộp bài
                  </button>
                  <button onClick={() => setAppState('playing')} className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-3 px-6 rounded-full transition-colors">
                    Tiếp tục làm bài
                  </button>
                </div>
              </div>
            </div>
          )}

          {appState === 'result' && (
            <div className="absolute inset-0 bg-white z-20 flex flex-col p-8 overflow-y-auto">
              <h2 className="text-3xl font-black text-[#213a34] mb-8 text-center">Kết Quả Bài Làm</h2>
              
              <div className="bg-[#e9f2ed] rounded-3xl p-6 mb-6 text-center border border-[#213a34]/10">
                <p className="text-gray-500 font-bold mb-2">Tổng điểm Listening</p>
                <div className="text-5xl font-black text-[#213a34] mb-2">
                  {results.totalCorrect} <span className="text-2xl text-gray-400">/ 100</span>
                </div>
              </div>

              <div className="grid gap-3 mb-8">
                <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex justify-between items-center">
                  <span className="font-bold text-gray-700">Part 1 (1-6)</span>
                  <span className="font-black text-[#f29f77]">{results.part1.correct}/{results.part1.total}</span>
                </div>
                <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex justify-between items-center">
                  <span className="font-bold text-gray-700">Part 2 (7-31)</span>
                  <span className="font-black text-[#f29f77]">{results.part2.correct}/{results.part2.total}</span>
                </div>
                <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex justify-between items-center">
                  <span className="font-bold text-gray-700">Part 3 (32-70)</span>
                  <span className="font-black text-[#f29f77]">{results.part3.correct}/{results.part3.total}</span>
                </div>
                <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex justify-between items-center">
                  <span className="font-bold text-gray-700">Part 4 (71-100)</span>
                  <span className="font-black text-[#f29f77]">{results.part4.correct}/{results.part4.total}</span>
                </div>
              </div>

              <button onClick={() => setAppState('reviewing')} className="w-full bg-[#213a34] hover:bg-[#1a2f2a] text-white font-bold py-4 px-6 rounded-full transition-colors shadow-md mt-auto">
                Xem chi tiết đáp án
              </button>
            </div>
          )}

          {(appState === 'playing' || appState === 'reviewing' || appState === 'confirming' || appState === 'partial_reviewing') && (
            <div className="grid grid-cols-1 gap-y-4 max-w-xs mx-auto pb-20">
              {questions.map((q) => {
                const userAns = answers[q];
                const isReviewing = appState === 'reviewing';
                const correctAns = (appState === 'partial_reviewing' ? partialResults?.key : results?.key)?.[String(q)];
                const isCorrect = userAns === correctAns;
                const isUnanswered = !userAns;
                const isWrong = userAns && !isCorrect;
                
                const qOptions = (q >= 7 && q <= 31) ? part2Options : options;

                const isPartialReviewing = appState === 'partial_reviewing';
                
                let rowClass = "bg-white";
                if (isReviewing && isUnanswered) {
                  rowClass = "bg-gray-200 border-gray-300 opacity-80";
                } else if (isPartialReviewing && !isUnanswered) {
                  rowClass = isCorrect ? "bg-green-50 border-green-100" : "bg-red-50 border-red-100";
                }

                return (
                  <div key={q} className={`flex items-center justify-between px-4 py-2 rounded-xl shadow-sm border border-gray-100 relative ${rowClass}`}>
                    <div className="flex items-center w-10 relative">
                      {(isReviewing || (isPartialReviewing && isAnswered)) && isCorrect && <CheckCircle2 className="w-4 h-4 text-green-500 absolute -left-4" />}
                      {(isReviewing || (isPartialReviewing && isAnswered)) && isWrong && <XCircle className="w-4 h-4 text-red-500 absolute -left-4" />}
                      <span className="font-bold text-[#213a34]">{q}.</span>
                    </div>
                    <div className="flex gap-2">
                      {qOptions.map((opt) => renderBubble(q, opt))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
        
        {/* Footer actions */}
        {(appState === 'playing' || appState === 'confirming') && (
          <div className="absolute bottom-0 w-full p-4 bg-white border-t border-[#213a34]/10 shrink-0 flex justify-end gap-3">
            <button onClick={handlePartialCheck} className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-3 px-6 rounded-full transition-colors shadow-sm">
              Chấm điểm nhanh
            </button>
            <button onClick={handlePreSubmit} className="bg-[#f29f77] hover:bg-[#e08b63] text-white font-bold py-3 px-8 rounded-full transition-colors shadow-sm">
              Nộp bài
            </button>
          </div>
        )}
        
        {appState === 'partial_reviewing' && (
          <div className="absolute bottom-0 w-full p-4 bg-white border-t border-[#213a34]/10 shrink-0 flex justify-between items-center">
            <div className="font-bold text-[#213a34]">
              Đã làm: <span className="text-gray-700">{partialResults?.answered}</span> | Đúng: <span className="text-green-600">{partialResults?.correct}</span>
            </div>
            <button onClick={() => setAppState('playing')} className="bg-[#213a34] hover:bg-[#1a2f2a] text-white font-bold py-3 px-6 rounded-full transition-colors shadow-sm">
              Tiếp tục làm bài
            </button>
          </div>
        )}
        
        {appState === 'reviewing' && (
          <div className="absolute bottom-0 w-full p-4 bg-white border-t border-[#213a34]/10 shrink-0 flex justify-between items-center">
            <button onClick={() => setAppState('result')} className="text-[#213a34] font-bold py-3 px-6 hover:bg-gray-100 rounded-full transition-colors flex items-center">
               <ArrowLeft className="w-5 h-5 mr-2" /> Quay lại bảng điểm
            </button>
            <div className="flex gap-4 font-bold text-sm">
               <span className="flex items-center text-green-600"><CheckCircle2 className="w-4 h-4 mr-1"/> Đúng</span>
               <span className="flex items-center text-red-500"><XCircle className="w-4 h-4 mr-1"/> Sai</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
