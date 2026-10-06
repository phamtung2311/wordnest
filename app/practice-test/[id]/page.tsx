'use client';

import { useParams, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { getAnswers } from '@/data/test_answers';
import { CheckCircle2, XCircle, AlertCircle, ArrowLeft } from 'lucide-react';

type AppState = 'playing' | 'confirming' | 'result' | 'reviewing' | 'partial_reviewing';

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

  useEffect(() => {
    setMounted(true);
    try {
      const savedProgress = localStorage.getItem(`toeic_reading_progress_${testId}`);
      if (savedProgress) {
        setAnswers(JSON.parse(savedProgress));
      }
    } catch (e) {}
  }, [testId]);

  const handleSelect = (q: number, opt: string) => {
    if (appState === 'playing') {
      setAnswers(prev => {
        const newAnswers = { ...prev, [q]: opt };
        try {
          localStorage.setItem(`toeic_reading_progress_${testId}`, JSON.stringify(newAnswers));
        } catch (e) {}
        return newAnswers;
      });
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
            src={testId.toString().includes("-") ? `/tests/reading${testId.toString().split("-")[0]}_${testId.toString().split("-")[1]}.pdf?v=2` : `/tests/test${testId}.pdf?v=2`}
            className="w-full h-full border-0" 
            title={`Test ${testId} PDF`} 
          />
        )}
      </div>

      {/* Right Column */}
      <div className="flex h-full w-[40%] flex-col bg-[#e9f2ed] relative shadow-[-10px_0_15px_-3px_rgba(0,0,0,0.1)]">
        
        {/* Header */}
        <div className="flex justify-between items-center border-b border-[#213a34]/10 p-6 bg-white shrink-0">
          <div>
            <h2 className="font-display text-2xl font-black text-[#213a34]">{testId.toString().includes("-") ? `ETS ${testId.toString().split("-")[0]} Đề ${testId.toString().split("-")[1]}` : `ETS 2026 Đề ${testId}`}</h2>
            <p className="text-sm text-gray-500 font-bold mt-1">100 câu hỏi (101 - 200)</p>
          </div>
          <button
            onClick={() => router.push('/practice-test')}
            className="rounded-full bg-white border border-gray-300 px-6 py-2.5 font-bold text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Đóng
          </button>
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
                <p className="text-gray-500 font-bold mb-2">Tổng điểm Reading</p>
                <div className="text-5xl font-black text-[#213a34] mb-2">
                  {results.totalCorrect} <span className="text-2xl text-gray-400">/ 100</span>
                </div>
              </div>

              <div className="grid gap-4 mb-8">
                <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex justify-between items-center">
                  <span className="font-bold text-gray-700">Part 5 (101-130)</span>
                  <span className="font-black text-[#f29f77]">{results.part5.correct}/{results.part5.total}</span>
                </div>
                <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex justify-between items-center">
                  <span className="font-bold text-gray-700">Part 6 (131-146)</span>
                  <span className="font-black text-[#f29f77]">{results.part6.correct}/{results.part6.total}</span>
                </div>
                <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex justify-between items-center">
                  <span className="font-bold text-gray-700">Part 7 (147-200)</span>
                  <span className="font-black text-[#f29f77]">{results.part7.correct}/{results.part7.total}</span>
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

                let rowClass = "bg-white";
                if (isReviewing && isUnanswered) {
                  rowClass = "bg-gray-200 border-gray-300 opacity-80";
                }

                return (
                  <div key={q} className={`flex items-center justify-between px-4 py-2 rounded-xl shadow-sm border border-gray-100 ${rowClass}`}>
                    <div className="flex items-center w-10 relative">
                      {isReviewing && isCorrect && <CheckCircle2 className="w-4 h-4 text-green-500 absolute -left-4" />}
                      {isReviewing && isWrong && <XCircle className="w-4 h-4 text-red-500 absolute -left-4" />}
                      <span className="font-bold text-[#213a34]">{q}.</span>
                    </div>
                    <div className="flex gap-2">
                      {options.map((opt) => renderBubble(q, opt))}
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
          <div className="absolute bottom-0 w-full p-4 bg-white border-t border-[#213a34]/10 shrink-0 flex justify-between items-center gap-4">
            <div className="font-bold text-[#213a34] flex gap-3 overflow-x-auto whitespace-nowrap scrollbar-none items-center text-sm md:text-base">
              <div>Đã làm: <span className="text-gray-700">{partialResults?.answered}</span> | Đúng: <span className="text-green-600">{partialResults?.correct}</span></div>
              <div className="h-4 w-px bg-gray-300"></div>
              <div>P5: <span className="text-green-600">{partialResults?.part5?.correct}</span>/30</div>
              <div>P6: <span className="text-green-600">{partialResults?.part6?.correct}</span>/16</div>
              <div>P7: <span className="text-green-600">{partialResults?.part7?.correct}</span>/54</div>
            </div>
            <button onClick={() => setAppState('playing')} className="bg-[#213a34] hover:bg-[#1a2f2a] text-white font-bold py-3 px-6 rounded-full transition-colors shadow-sm whitespace-nowrap">
              Tiếp tục
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
