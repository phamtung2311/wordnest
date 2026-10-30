'use client';

import React, { useState, useMemo } from 'react';
import { X, CheckCircle2, XCircle, HelpCircle, Sparkles, Eye, ArrowRight } from 'lucide-react';
import { getAnswers } from '@/data/test_answers';
import { getLcAnswers } from '@/data/lc_answers';
import { getReadingToeicScore, getListeningToeicScore } from '@/lib/toeicScoreConverter';

export type QuestionMapMode = 'playing' | 'reviewing' | 'result';
export type QuestionMapTab = 'all' | 'listening' | 'reading';

export interface QuestionMapProps {
  mode: QuestionMapMode;
  testType: 'reading' | 'listening';
  testId: string;
  testTitle?: string;
  answers: Record<number, string>;
  keyObj?: Record<string, string>;
  currentQuestion?: number;
  onSelectQuestion?: (q: number) => void;
  className?: string;
  initialTab?: QuestionMapTab;
}

interface PartConfig {
  id: number;
  name: string;
  start: number;
  end: number;
  type: 'listening' | 'reading';
}

const PARTS: PartConfig[] = [
  { id: 1, name: 'Part 1 (1-6)', start: 1, end: 6, type: 'listening' },
  { id: 2, name: 'Part 2 (7-31)', start: 7, end: 31, type: 'listening' },
  { id: 3, name: 'Part 3 (32-70)', start: 32, end: 70, type: 'listening' },
  { id: 4, name: 'Part 4 (71-100)', start: 71, end: 100, type: 'listening' },
  { id: 5, name: 'Part 5 (101-130)', start: 101, end: 130, type: 'reading' },
  { id: 6, name: 'Part 6 (131-146)', start: 131, end: 146, type: 'reading' },
  { id: 7, name: 'Part 7 (147-200)', start: 147, end: 200, type: 'reading' },
];

export function QuestionMap({
  mode,
  testType,
  testId,
  testTitle,
  answers,
  keyObj,
  currentQuestion,
  onSelectQuestion,
  className = '',
  initialTab,
}: QuestionMapProps) {
  // Default tab based on testType unless specified
  const [activeTab, setActiveTab] = useState<QuestionMapTab>(
    initialTab || (testType === 'listening' ? 'listening' : 'reading')
  );

  // Load the other section from localStorage if viewing "all" or the other tab
  const mergedData = useMemo(() => {
    let readingAnswers: Record<number, string> = {};
    let listeningAnswers: Record<number, string> = {};

    let readingKey: Record<string, string> = {};
    let listeningKey: Record<string, string> = {};

    if (testType === 'reading') {
      readingAnswers = { ...answers };
      readingKey = keyObj || getAnswers(testId);

      // Attempt to load listening answers for this testId from localStorage
      try {
        const storedLc = localStorage.getItem(`toeic_listening_progress_${testId}`);
        if (storedLc) listeningAnswers = JSON.parse(storedLc);
      } catch (e) {}
      listeningKey = getLcAnswers(testId);
    } else {
      listeningAnswers = { ...answers };
      listeningKey = keyObj || getLcAnswers(testId);

      // Attempt to load reading answers for this testId from localStorage
      try {
        const storedRc = localStorage.getItem(`toeic_reading_progress_${testId}`);
        if (storedRc) readingAnswers = JSON.parse(storedRc);
      } catch (e) {}
      readingKey = getAnswers(testId);
    }

    const allAnswers: Record<number, string> = { ...listeningAnswers, ...readingAnswers };
    const allKeys: Record<string, string> = { ...listeningKey, ...readingKey };

    // Calculate score metrics
    let correctListening = 0;
    let answeredListening = 0;
    for (let i = 1; i <= 100; i++) {
      if (listeningAnswers[i]) answeredListening++;
      if (listeningAnswers[i] && listeningKey[String(i)] && listeningAnswers[i] === listeningKey[String(i)]) {
        correctListening++;
      }
    }

    let correctReading = 0;
    let answeredReading = 0;
    for (let i = 101; i <= 200; i++) {
      if (readingAnswers[i]) answeredReading++;
      if (readingAnswers[i] && readingKey[String(i)] && readingAnswers[i] === readingKey[String(i)]) {
        correctReading++;
      }
    }

    return {
      answers: allAnswers,
      keys: allKeys,
      stats: {
        listening: {
          answered: answeredListening,
          correct: correctListening,
          wrong: answeredListening - correctListening,
          unanswered: 100 - answeredListening,
          score: getListeningToeicScore(correctListening),
        },
        reading: {
          answered: answeredReading,
          correct: correctReading,
          wrong: answeredReading - correctReading,
          unanswered: 100 - answeredReading,
          score: getReadingToeicScore(correctReading),
        },
        total: {
          answered: answeredListening + answeredReading,
          correct: correctListening + correctReading,
          wrong: (answeredListening + answeredReading) - (correctListening + correctReading),
          unanswered: 200 - (answeredListening + answeredReading),
          score: getListeningToeicScore(correctListening) + getReadingToeicScore(correctReading),
        }
      }
    };
  }, [answers, keyObj, testId, testType]);

  const visibleParts = useMemo(() => {
    if (activeTab === 'listening') return PARTS.filter((p) => p.type === 'listening');
    if (activeTab === 'reading') return PARTS.filter((p) => p.type === 'reading');
    return PARTS;
  }, [activeTab]);

  const isReviewOrResult = mode === 'result' || mode === 'reviewing';

  return (
    <div className={`bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-7 shadow-xs border border-gray-100 flex flex-col ${className}`}>
      {/* Header section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-gray-100">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-xl sm:text-2xl font-black text-[#213a34] tracking-tight uppercase">
              BẢN ĐỒ CÂU HỎI
            </h2>
            {testTitle && (
              <span className="text-xs font-bold text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full">
                {testTitle}
              </span>
            )}
          </div>
          <p className="text-xs text-gray-500 font-medium mt-0.5">
            Phổ đáp án chi tiết từng câu hỏi theo chuẩn ETS TOEIC
          </p>
        </div>

        {/* Tab switchers: Tất cả (1-200), Listening (1-100), Reading (101-200) */}
        <div className="flex items-center gap-1 bg-gray-100 p-1 rounded-xl self-start sm:self-center">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'all'
                ? 'bg-white text-[#213a34] shadow-xs'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Tất cả (1-200)
          </button>
          <button
            onClick={() => setActiveTab('listening')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'listening'
                ? 'bg-white text-[#213a34] shadow-xs'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Listening (1-100)
          </button>
          <button
            onClick={() => setActiveTab('reading')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'reading'
                ? 'bg-white text-[#213a34] shadow-xs'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Reading (101-200)
          </button>
        </div>
      </div>

      {/* Summary Score Bar (Shown prominently in Result or Review mode) */}
      {isReviewOrResult && (
        <div className="my-4 p-3.5 sm:p-4 bg-[#f8faf9] rounded-2xl border border-gray-100 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm font-bold">
            <span className="flex items-center gap-1.5 text-emerald-700">
              <span className="w-2.5 h-2.5 rounded-full bg-[#10b981]" />
              Đúng:{' '}
              {activeTab === 'all'
                ? `${mergedData.stats.total.correct}/200`
                : activeTab === 'listening'
                ? `${mergedData.stats.listening.correct}/100`
                : `${mergedData.stats.reading.correct}/100`}
            </span>
            <span className="flex items-center gap-1.5 text-red-700">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444]" />
              Sai:{' '}
              {activeTab === 'all'
                ? `${mergedData.stats.total.wrong}`
                : activeTab === 'listening'
                ? `${mergedData.stats.listening.wrong}`
                : `${mergedData.stats.reading.wrong}`}
            </span>
            <span className="flex items-center gap-1.5 text-gray-600">
              <span className="w-2.5 h-2.5 rounded-full bg-white border border-gray-300" />
              Bỏ qua:{' '}
              {activeTab === 'all'
                ? `${mergedData.stats.total.unanswered}`
                : activeTab === 'listening'
                ? `${mergedData.stats.listening.unanswered}`
                : `${mergedData.stats.reading.unanswered}`}
            </span>
          </div>

          {/* Estimated TOEIC Score */}
          <div className="flex items-center gap-2 bg-[#213a34] text-white px-3.5 py-1.5 rounded-xl shadow-xs text-xs sm:text-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span className="font-semibold text-gray-200">Điểm TOEIC ước tính:</span>
            <span className="font-black text-amber-300 text-sm sm:text-base">
              {activeTab === 'all'
                ? `~${mergedData.stats.total.score} / 990`
                : activeTab === 'listening'
                ? `~${mergedData.stats.listening.score} / 495`
                : `~${mergedData.stats.reading.score} / 495`}
            </span>
          </div>
        </div>
      )}

      {/* Grid of Parts matching the user's reference image */}
      <div className="py-2 space-y-5 overflow-x-auto">
        {visibleParts.map((part) => {
          const qCount = part.end - part.start + 1;
          const questionsInPart = Array.from({ length: qCount }, (_, i) => part.start + i);

          return (
            <div key={part.id} className="space-y-2">
              <h3 className="text-xs sm:text-sm font-bold text-gray-700 flex items-center justify-between">
                <span>{part.name}</span>
              </h3>

              {/* Circles Row / Grid */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2 items-center">
                {questionsInPart.map((q) => {
                  const userAns = mergedData.answers[q];
                  const correctAns = mergedData.keys[String(q)];
                  const isAnswered = !!userAns;
                  const isCurrent = currentQuestion === q;

                  let circleStyle = 'bg-white text-gray-600 border border-gray-300 hover:border-gray-400';
                  let statusTitle = `Câu ${q}: Chưa trả lời`;

                  if (isReviewOrResult) {
                    if (isAnswered) {
                      const isCorrect = correctAns && userAns === correctAns;
                      if (isCorrect) {
                        circleStyle = 'bg-[#10b981] hover:bg-[#059669] text-white border-transparent shadow-xs';
                        statusTitle = `Câu ${q}: Đúng (${userAns})`;
                      } else {
                        circleStyle = 'bg-[#ef4444] hover:bg-[#dc2626] text-white border-transparent shadow-xs';
                        statusTitle = `Câu ${q}: Sai (Bạn chọn ${userAns}, Đáp án đúng: ${correctAns || '?'})`;
                      }
                    } else {
                      circleStyle = 'bg-white hover:bg-gray-100 text-gray-400 border border-gray-300';
                      statusTitle = `Câu ${q}: Bỏ qua (Đáp án đúng: ${correctAns || '?'})`;
                    }
                  } else {
                    // Playing mode
                    if (isAnswered) {
                      circleStyle = 'bg-[#213a34] hover:bg-[#1a2f2a] text-white border-transparent shadow-xs';
                      statusTitle = `Câu ${q}: Đã chọn ${userAns}`;
                    } else {
                      circleStyle = 'bg-white hover:bg-gray-100 text-gray-700 border border-gray-300';
                      statusTitle = `Câu ${q}: Chưa làm`;
                    }
                  }

                  if (isCurrent) {
                    circleStyle += ' ring-2 ring-amber-400 ring-offset-2 scale-110 z-10';
                  }

                  // 3-digit numbers get tighter tracking and slightly smaller font to fit comfortably
                  const isThreeDigit = q >= 100;
                  const textSize = isThreeDigit 
                    ? 'text-[10px] sm:text-[11px] tracking-tighter' 
                    : 'text-[11px] sm:text-xs tracking-tight';

                  return (
                    <button
                      key={q}
                      type="button"
                      onClick={() => onSelectQuestion?.(q)}
                      className={`w-7 h-7 sm:w-8 sm:h-8 min-w-[28px] sm:min-w-[32px] rounded-full flex items-center justify-center font-bold ${textSize} cursor-pointer transition-all hover:scale-110 active:scale-95 ${circleStyle}`}
                      title={`${statusTitle} - Bấm để chuyển đến câu này`}
                    >
                      {q}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Legend Footer matching the exact bottom legend of user's image */}
      <div className="mt-5 pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-3 text-xs font-semibold text-gray-600">
        <div className="flex items-center gap-5">
          {isReviewOrResult ? (
            <>
              <div className="flex items-center gap-1.5">
                <span className="w-3.5 h-3.5 rounded-full bg-[#10b981]" />
                <span>Đúng</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3.5 h-3.5 rounded-full bg-[#ef4444]" />
                <span>Sai</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3.5 h-3.5 rounded-full bg-white border border-gray-300" />
                <span>Bỏ qua</span>
              </div>
            </>
          ) : (
            <>
              <div className="flex items-center gap-1.5">
                <span className="w-3.5 h-3.5 rounded-full bg-[#213a34]" />
                <span>Đã làm</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3.5 h-3.5 rounded-full bg-white border border-gray-300" />
                <span>Chưa làm</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3.5 h-3.5 rounded-full bg-white border-2 border-amber-400" />
                <span>Đang chọn</span>
              </div>
            </>
          )}
        </div>

        <span className="text-[11px] text-gray-400 italic">
          💡 Bấm vào số câu bất kỳ để xem câu hỏi đó
        </span>
      </div>
    </div>
  );
}

export interface QuestionMapModalProps extends QuestionMapProps {
  isOpen: boolean;
  onClose: () => void;
}

export function QuestionMapModal({
  isOpen,
  onClose,
  ...props
}: QuestionMapModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-gray-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-5 sm:px-7 py-3.5 bg-gray-50 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <span className="text-lg">🗺️</span>
            <span className="font-extrabold text-[#213a34] text-base sm:text-lg">
              Phổ Đáp Án & Bản Đồ Câu Hỏi
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-200 transition-colors cursor-pointer"
            title="Đóng bản đồ"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Map Body */}
        <div className="overflow-y-auto p-3 sm:p-6 flex-1">
          <QuestionMap
            {...props}
            onSelectQuestion={(q) => {
              props.onSelectQuestion?.(q);
              onClose();
            }}
          />
        </div>

        {/* Modal Footer */}
        <div className="px-5 sm:px-7 py-3 bg-gray-50 border-t border-gray-200 flex justify-between items-center text-xs text-gray-500 font-bold">
          <span>Hệ thống chấm điểm chuẩn ETS TOEIC</span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full bg-[#213a34] hover:bg-[#1a2f2a] text-white font-bold transition-colors cursor-pointer"
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
}
