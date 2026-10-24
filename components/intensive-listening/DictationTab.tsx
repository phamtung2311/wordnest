'use client';

import { useState, useEffect, useRef } from 'react';
import type { DialogueLine } from '@/data/intensive_listening_test1';
import {
  Volume2,
  Lightbulb,
  Check,
  RotateCcw,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  Eye,
  EyeOff,
  Trophy,
} from 'lucide-react';

interface DictationTabProps {
  transcript: DialogueLine[];
  onCompleteItem?: () => void;
}

// Helper to normalize words for comparison
function cleanWord(w: string) {
  return w
    .toLowerCase()
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?"'’]/g, '')
    .trim();
}

export function DictationTab({ transcript, onCompleteItem }: DictationTabProps) {
  const [currentSentenceIdx, setCurrentSentenceIdx] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [hintIndex, setHintIndex] = useState(0);
  const [completedSentences, setCompletedSentences] = useState<Record<number, boolean>>({});
  const [accuracy, setAccuracy] = useState<number | null>(null);

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  // Current line
  const currentLine = transcript[currentSentenceIdx] || transcript[0];
  const targetWords = currentLine ? currentLine.text.split(/\s+/) : [];

  // Reset when sentence changes
  useEffect(() => {
    setUserInput('');
    setIsChecked(false);
    setShowAnswer(false);
    setHintIndex(0);
    setAccuracy(null);
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [currentSentenceIdx, transcript]);

  // Speech synthesis for the current line
  const speakCurrentLine = () => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window) || !currentLine) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(currentLine.text);
    utterance.lang = 'en-US';
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  };

  // Play audio on load of line
  useEffect(() => {
    if (currentLine) {
      speakCurrentLine();
    }
  }, [currentSentenceIdx]);

  // Give hint: reveal words up to hintIndex + 1
  const handleGiveHint = () => {
    if (hintIndex < targetWords.length) {
      const nextWord = targetWords[hintIndex];
      const newIndex = hintIndex + 1;
      setHintIndex(newIndex);
      // Append or set hint in input
      const hintText = targetWords.slice(0, newIndex).join(' ');
      setUserInput(hintText + ' ');
      if (textareaRef.current) {
        textareaRef.current.focus();
      }
    }
  };

  // Check answer comparing user input with target sentence
  const handleCheck = () => {
    if (!userInput.trim()) return;
    setIsChecked(true);

    const userWords = userInput.trim().split(/\s+/);
    let correctWordsCount = 0;

    targetWords.forEach((tw, idx) => {
      const uw = userWords[idx];
      if (uw && cleanWord(uw) === cleanWord(tw)) {
        correctWordsCount += 1;
      }
    });

    const acc = Math.round((correctWordsCount / targetWords.length) * 100);
    setAccuracy(acc);

    if (acc >= 90) {
      setCompletedSentences((prev) => ({
        ...prev,
        [currentSentenceIdx]: true,
      }));
      // Check if all sentences completed
      const totalSentences = transcript.length;
      const willBeCompleted = Object.keys(completedSentences).length + 1;
      if (willBeCompleted >= totalSentences && onCompleteItem) {
        onCompleteItem();
      }
    }
  };

  const handleNextSentence = () => {
    if (currentSentenceIdx < transcript.length - 1) {
      setCurrentSentenceIdx((prev) => prev + 1);
    }
  };

  const handlePrevSentence = () => {
    if (currentSentenceIdx > 0) {
      setCurrentSentenceIdx((prev) => prev - 1);
    }
  };

  const handleReset = () => {
    setUserInput('');
    setIsChecked(false);
    setShowAnswer(false);
    setHintIndex(0);
    setAccuracy(null);
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  };

  // Render Diff visualization
  const renderWordDiff = () => {
    const userWords = userInput.trim().split(/\s+/);

    return (
      <div className="flex flex-wrap gap-2 p-4 rounded-2xl bg-white border border-[#213a34]/15 leading-relaxed text-base sm:text-lg">
        {targetWords.map((targetWord, idx) => {
          const userWord = userWords[idx];
          const isMatch = userWord && cleanWord(userWord) === cleanWord(targetWord);

          if (!userWord) {
            return (
              <span
                key={idx}
                className="px-2 py-0.5 rounded bg-gray-100 text-gray-400 border border-dashed border-gray-300 font-mono text-sm"
              >
                {showAnswer ? targetWord : '____'}
              </span>
            );
          }

          if (isMatch) {
            return (
              <span
                key={idx}
                className="px-2 py-0.5 rounded bg-green-100 text-green-800 font-bold border border-green-300"
              >
                {userWord}
              </span>
            );
          }

          return (
            <span
              key={idx}
              className="inline-flex flex-col items-center px-2 py-0.5 rounded bg-red-100 text-red-800 font-bold border border-red-300 text-sm"
            >
              <span>{userWord}</span>
              {showAnswer && (
                <span className="text-[10px] text-green-700 font-normal">
                  ({targetWord})
                </span>
              )}
            </span>
          );
        })}
      </div>
    );
  };

  const completedCount = Object.keys(completedSentences).length;

  return (
    <div className="space-y-6">
      {/* Intro Header */}
      <div className="bg-[#f5f0e6] rounded-2xl p-4 border border-[#213a34]/10 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-[#213a34] text-[#f8d467] flex items-center justify-center font-black text-sm shrink-0">
            🎧
          </div>
          <div>
            <h3 className="font-black text-[#213a34] text-sm">
              Chép chính tả (Dictation) theo từng câu thoại
            </h3>
            <p className="text-xs text-gray-600 font-medium">
              Bấm loa nghe câu thoại, gõ lại chính xác từng từ để rèn phản xạ và phát hiện từ nối.
            </p>
          </div>
        </div>

        {/* Sentence Counter */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-black bg-white px-3 py-1 rounded-full text-[#213a34] border border-[#213a34]/10 shadow-xs">
            Đã hoàn thành: {completedCount}/{transcript.length} câu
          </span>
        </div>
      </div>

      {/* Sentence Navigation Pills */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
        {transcript.map((line, idx) => {
          const isCurrent = idx === currentSentenceIdx;
          const isDone = completedSentences[idx];

          return (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentSentenceIdx(idx)}
              className={`shrink-0 px-3 py-1.5 rounded-xl text-xs font-black transition-all flex items-center gap-1 ${
                isCurrent
                  ? 'bg-[#213a34] text-white shadow-sm ring-2 ring-[#213a34]/20'
                  : isDone
                  ? 'bg-green-100 text-green-800 border border-green-300'
                  : 'bg-white text-gray-600 hover:bg-[#e9f2ed] border border-[#213a34]/10'
              }`}
            >
              <span>Câu {idx + 1}</span>
              {isDone && <Check className="w-3 h-3 text-green-700" />}
            </button>
          );
        })}
      </div>

      {/* Dictation Box */}
      <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 border-2 border-[#213a34]/10 shadow-sm space-y-4">
        {/* Speaker & Audio Replay Button */}
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-gray-400">
              Câu {currentSentenceIdx + 1}/{transcript.length}:
            </span>
            {currentLine.speaker && (
              <span className="px-2.5 py-0.5 rounded-full text-xs font-black bg-[#e9f2ed] text-[#213a34]">
                {currentLine.speaker}
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={speakCurrentLine}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#213a34] hover:bg-[#2c4e46] text-[#f8d467] font-black text-xs shadow-xs active:scale-95 transition-all"
          >
            <Volume2 className="w-4 h-4 fill-current" />
            <span>Nghe lại câu này</span>
          </button>
        </div>

        {/* Input Area */}
        <div className="space-y-2">
          <textarea
            ref={textareaRef}
            rows={3}
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleCheck();
              }
            }}
            placeholder="Gõ lại chính xác câu thoại bạn nghe được vào đây..."
            className="w-full p-4 rounded-2xl border-2 border-[#213a34]/15 focus:border-[#213a34] focus:outline-none focus:ring-4 focus:ring-[#213a34]/10 text-base sm:text-lg font-medium text-[#213a34] placeholder:text-gray-400 resize-none transition-all"
          />

          <div className="flex items-center justify-between text-xs text-gray-500 font-medium px-1">
            <span>Bấm <b>Enter</b> để kiểm tra câu</span>
            <span>{userInput.trim().split(/\s+/).filter(Boolean).length} / {targetWords.length} từ</span>
          </div>
        </div>

        {/* Result & Diff Section */}
        {isChecked && (
          <div className="space-y-3 pt-2 border-t border-gray-100 animate-in fade-in duration-200">
            <div className="flex items-center justify-between">
              <span className="text-xs font-black text-[#213a34]">
                So sánh từ vựng:
              </span>
              {accuracy !== null && (
                <span
                  className={`px-3 py-0.5 rounded-full text-xs font-black ${
                    accuracy >= 90
                      ? 'bg-green-100 text-green-800 border border-green-300'
                      : 'bg-amber-100 text-amber-800 border border-amber-300'
                  }`}
                >
                  Độ chính xác: {accuracy}%
                </span>
              )}
            </div>

            {renderWordDiff()}

            {/* Perfect celebration */}
            {accuracy !== null && accuracy >= 90 && (
              <div className="p-3 bg-green-50 rounded-xl border border-green-200 flex items-center gap-2 text-green-800 text-xs sm:text-sm font-bold">
                <Trophy className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Xuất sắc! Bạn đã chép chính xác câu thoại này. 🎉</span>
              </div>
            )}
          </div>
        )}

        {/* Show Answer Toggle */}
        {showAnswer && (
          <div className="p-4 rounded-2xl bg-[#f5f0e6] border border-[#213a34]/10 space-y-2 animate-in fade-in duration-200">
            <div className="text-xs font-black text-[#213a34]">
              Đáp án câu thoại gốc:
            </div>
            <p className="font-extrabold text-[#213a34] text-base sm:text-lg">
              {currentLine.text}
            </p>
            <p className="text-xs sm:text-sm text-gray-600 font-medium">
              Dịch: {currentLine.vietnamese}
            </p>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-between gap-2.5 pt-3 border-t border-gray-100">
          <div className="flex items-center gap-2">
            {/* Hint Button */}
            <button
              type="button"
              onClick={handleGiveHint}
              disabled={hintIndex >= targetWords.length}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-black bg-[#f5f0e6] hover:bg-[#e7e0d3] text-[#213a34] border border-[#213a34]/10 disabled:opacity-40 transition-colors"
            >
              <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
              <span>Gợi ý ({hintIndex}/{targetWords.length})</span>
            </button>

            {/* Show Answer Button */}
            <button
              type="button"
              onClick={() => setShowAnswer(!showAnswer)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-black bg-[#e9f2ed] hover:bg-[#d5e5db] text-[#213a34] transition-colors"
            >
              {showAnswer ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
              <span>{showAnswer ? 'Ẩn đáp án' : 'Xem đáp án'}</span>
            </button>

            {/* Reset */}
            <button
              type="button"
              onClick={handleReset}
              title="Làm lại câu này"
              className="p-2 rounded-xl text-gray-500 hover:text-[#213a34] hover:bg-[#e9f2ed] transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>

          <div className="flex items-center gap-2">
            {/* Check Button */}
            <button
              type="button"
              onClick={handleCheck}
              disabled={!userInput.trim()}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-black bg-[#213a34] hover:bg-[#2c4e46] text-white shadow-sm disabled:opacity-40 transition-all active:scale-95"
            >
              <Check className="w-4 h-4 text-[#f8d467]" />
              <span>Kiểm tra</span>
            </button>

            {/* Next Sentence */}
            {currentSentenceIdx < transcript.length - 1 && (
              <button
                type="button"
                onClick={handleNextSentence}
                className="flex items-center gap-1 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-black bg-[#eb6a52] hover:bg-[#d85c45] text-white shadow-sm transition-all"
              >
                <span>Câu tiếp</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
