'use client';

import { useState } from 'react';
import {
  X,
  Trophy,
  Sparkles,
  CheckCircle2,
  XCircle,
  RotateCcw,
  BookOpen,
  ChevronRight,
  Flame,
  Target,
  BarChart3,
  Award,
} from 'lucide-react';
import type { IntensiveListeningItem } from '@/data/intensive_listening_index';
import type { QuizItemResult } from './types';

// Authentic ETS TOEIC Listening Scaled Score Table (100 questions -> 5 to 495)
export function calculateToeicListeningScore(correct: number): number {
  if (correct <= 0) return 5;
  if (correct >= 96) return 495;

  const scale: [number, number][] = [
    [100, 495], [98, 495], [96, 495], [95, 490], [93, 480],
    [90, 465], [87, 450], [84, 435], [81, 420], [78, 405],
    [75, 390], [72, 375], [69, 360], [66, 345], [64, 330],
    [61, 315], [58, 300], [55, 285], [52, 270], [49, 250],
    [46, 235], [43, 215], [40, 195], [37, 180], [34, 160],
    [31, 140], [28, 120], [25, 100], [22, 85], [19, 70],
    [16, 55], [13, 40], [10, 30], [7, 20], [4, 10], [0, 5],
  ];

  for (let i = 0; i < scale.length - 1; i++) {
    const [highQ, highS] = scale[i];
    const [lowQ, lowS] = scale[i + 1];
    if (correct >= lowQ) {
      const ratio = (correct - lowQ) / (highQ - lowQ || 1);
      const interpolated = Math.round(lowS + ratio * (highS - lowS));
      const roundedScore = Math.round(interpolated / 5) * 5;
      return Math.min(495, Math.max(5, roundedScore));
    }
  }

  return 5;
}

export function getScoreEvaluation(score: number): {
  badge: string;
  level: string;
  description: string;
  color: string;
} {
  if (score >= 450) {
    return {
      badge: 'Xuất sắc · Master',
      level: 'C1 - C2 Advanced',
      description: 'Kỹ năng nghe vượt trội! Khả năng nắm bắt ý chính và chi tiết gần như hoàn hảo.',
      color: 'text-emerald-700 bg-emerald-100 border-emerald-300',
    };
  }
  if (score >= 380) {
    return {
      badge: 'Rất tốt · B2 Upper-Intermediate',
      level: 'Mục tiêu 800 - 900+ TOEIC',
      description: 'Nghe hiểu rất chắc chắn, chỉ cần chú ý bẫy từ đồng nghĩa và ngữ cảnh phức tạp Part 3 & 4.',
      color: 'text-teal-700 bg-teal-100 border-teal-300',
    };
  }
  if (score >= 300) {
    return {
      badge: 'Khá tốt · B1+ Intermediate',
      level: 'Mục tiêu 650 - 750 TOEIC',
      description: 'Nắm được hầu hết thông tin cơ bản. Cần luyện thêm phản xạ Part 2 và tốc độ nghe Part 3.',
      color: 'text-amber-800 bg-amber-100 border-amber-300',
    };
  }
  if (score >= 200) {
    return {
      badge: 'Trung bình · B1 Threshold',
      level: 'Mục tiêu 500 - 600 TOEIC',
      description: 'Đã nắm được các câu đơn giản. Cần mở rộng từ vựng và tập trung luyện chép chính tả.',
      color: 'text-orange-800 bg-orange-100 border-orange-300',
    };
  }
  return {
    badge: 'Cần bồi dưỡng căn bản',
    level: 'Mục tiêu 350 - 450 TOEIC',
    description: 'Hãy luyện nghe từng câu ngắn, làm quen phát âm nối âm và học bộ từ vựng cốt lõi.',
    color: 'text-rose-800 bg-rose-100 border-rose-300',
  };
}

interface TestResultModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentTestId: number;
  testTitle?: string;
  items: IntensiveListeningItem[];
  quizResults: Record<string, QuizItemResult>;
  onReviewWrong: () => void;
  onResetTest: (testId: number) => void;
  onOpenTestSelector: () => void;
}

export function TestResultModal({
  isOpen,
  onClose,
  currentTestId,
  testTitle,
  items,
  quizResults,
  onReviewWrong,
  onResetTest,
  onOpenTestSelector,
}: TestResultModalProps) {
  const [showConfirmReset, setShowConfirmReset] = useState(false);

  if (!isOpen) return null;

  // Calculate stats
  let totalQuestions = 0;
  let totalCorrect = 0;
  let attemptedQuestions = 0;
  let wrongItemsCount = 0;

  // Part stats breakdown
  const partStats: Record<
    number,
    { total: number; correct: number; attempted: number; wrongItems: number; name: string }
  > = {
    1: { total: 0, correct: 0, attempted: 0, wrongItems: 0, name: 'Part 1: Mô tả tranh' },
    2: { total: 0, correct: 0, attempted: 0, wrongItems: 0, name: 'Part 2: Hỏi & Đáp' },
    3: { total: 0, correct: 0, attempted: 0, wrongItems: 0, name: 'Part 3: Đoạn hội thoại' },
    4: { total: 0, correct: 0, attempted: 0, wrongItems: 0, name: 'Part 4: Bài nói ngắn' },
  };

  items.forEach((item) => {
    const qCount = item.questions.length;
    totalQuestions += qCount;

    if (partStats[item.part]) {
      partStats[item.part].total += qCount;
    }

    const res = quizResults[item.id];
    if (res) {
      totalCorrect += res.correct;
      attemptedQuestions += res.total;
      if (!res.isCorrect) {
        wrongItemsCount += 1;
      }

      if (partStats[item.part]) {
        partStats[item.part].correct += res.correct;
        partStats[item.part].attempted += res.total;
        if (!res.isCorrect) {
          partStats[item.part].wrongItems += 1;
        }
      }
    }
  });

  const scaledScore = calculateToeicListeningScore(totalCorrect);
  const evaluation = getScoreEvaluation(scaledScore);
  const accuracyPercentage = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;
  const totalWrongQuestions = totalQuestions - totalCorrect;

  const handleConfirmReset = () => {
    onResetTest(currentTestId);
    setShowConfirmReset(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="relative w-full max-w-2xl bg-[#fcfaf6] rounded-3xl shadow-2xl border-2 border-[#213a34]/15 overflow-hidden flex flex-col max-h-[92vh] animate-in zoom-in-95 duration-200">
        {/* Modal Header with Festive Gradient Banner */}
        <div className="relative bg-gradient-to-r from-[#213a34] via-[#28483f] to-[#1c322c] text-white p-5 sm:p-6 pb-7 shrink-0 overflow-hidden">
          {/* Subtle Decorative Background Circles */}
          <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-[#f8d467]/10 blur-2xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-[#49a078]/20 blur-xl pointer-events-none" />

          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-colors cursor-pointer"
            title="Đóng kết quả"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Banner content */}
          <div className="flex flex-col items-center text-center space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f8d467] text-[#213a34] text-xs font-black shadow-md uppercase tracking-wider">
              <Trophy className="w-4 h-4 text-[#eb6a52]" />
              <span>Bảng Tổng Kết Kết Quả Bài Thi</span>
            </div>

            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              {testTitle || `ETS 2026 · Test ${currentTestId}`}
            </h2>

            <p className="text-xs sm:text-sm text-gray-200 max-w-md">
              Chúc mừng bạn đã hoàn thành đợt luyện nghe chi tiết 100 câu hỏi theo chuẩn đề thi thật!
            </p>
          </div>
        </div>

        {/* Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-5 scrollbar-thin">
          {/* 3 Metric Score Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {/* 1. Correct Questions */}
            <div className="bg-white p-4 rounded-2xl border-2 border-emerald-500/20 shadow-xs flex flex-col items-center text-center relative overflow-hidden">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-black mb-2">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-gray-500">
                Số câu đúng
              </span>
              <div className="text-2xl sm:text-3xl font-black text-emerald-800 mt-0.5">
                {totalCorrect}
                <span className="text-sm font-bold text-gray-400">/{totalQuestions}</span>
              </div>
              <span className="text-xs font-bold text-emerald-700 mt-1">
                Độ chính xác: {accuracyPercentage}%
              </span>
            </div>

            {/* 2. Scaled TOEIC Score */}
            <div className="bg-gradient-to-b from-[#fbf4de] to-[#f7ebd0] p-4 rounded-2xl border-2 border-[#f8d467] shadow-xs flex flex-col items-center text-center relative overflow-hidden">
              <span className="absolute top-2 right-2 px-1.5 py-0.5 rounded text-[9px] font-black bg-[#213a34] text-[#f8d467]">
                ETS Scale
              </span>
              <div className="w-10 h-10 rounded-xl bg-[#213a34] text-[#f8d467] flex items-center justify-center font-black mb-2">
                <Award className="w-5 h-5 text-amber-300" />
              </div>
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#213a34]">
                Điểm TOEIC Nghe dự kiến
              </span>
              <div className="text-2xl sm:text-3xl font-black text-[#213a34] mt-0.5">
                ~{scaledScore}
                <span className="text-sm font-bold text-gray-600">/495</span>
              </div>
              <span className="text-xs font-bold text-[#eb6a52] mt-1">
                {evaluation.level}
              </span>
            </div>

            {/* 3. Wrong Items Need Review */}
            <div className="bg-white p-4 rounded-2xl border-2 border-rose-500/20 shadow-xs flex flex-col items-center text-center relative overflow-hidden">
              <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center font-black mb-2">
                <XCircle className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-gray-500">
                Số câu sai
              </span>
              <div className="text-2xl sm:text-3xl font-black text-rose-700 mt-0.5">
                {totalWrongQuestions}
                <span className="text-sm font-bold text-gray-400"> câu</span>
              </div>
              <span className="text-xs font-bold text-rose-600 mt-1">
                {wrongItemsCount} bài cần xem lại
              </span>
            </div>
          </div>

          {/* Assessment & Advice Banner */}
          <div className={`p-4 rounded-2xl border ${evaluation.color} flex items-start gap-3 shadow-2xs`}>
            <Sparkles className="w-5 h-5 shrink-0 mt-0.5 text-amber-600" />
            <div className="text-xs space-y-1">
              <div className="font-black text-sm">
                Đánh giá: {evaluation.badge}
              </div>
              <p className="leading-relaxed opacity-90">{evaluation.description}</p>
            </div>
          </div>

          {/* Part-by-Part Scorecard Breakdown */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-xs sm:text-sm font-black text-[#213a34] flex items-center gap-1.5">
                <BarChart3 className="w-4 h-4 text-[#eb6a52]" />
                <span>Chi tiết số câu đúng từng Part:</span>
              </h3>
              <span className="text-xs font-bold text-gray-500">
                100 câu chia 4 phần
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[1, 2, 3, 4].map((partNum) => {
                const p = partStats[partNum];
                const pct = p.total > 0 ? Math.round((p.correct / p.total) * 100) : 0;
                const isGreat = pct >= 75;
                const isOkay = pct >= 50 && pct < 75;

                return (
                  <div
                    key={partNum}
                    className="p-3.5 rounded-2xl bg-white border border-[#213a34]/12 shadow-2xs space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-lg bg-[#213a34] text-[#f8d467] text-[10px] font-black flex items-center justify-center">
                          P{partNum}
                        </span>
                        <span className="text-xs font-black text-[#213a34]">
                          {p.name}
                        </span>
                      </div>
                      <span className="text-xs font-black text-[#213a34]">
                        {p.correct}/{p.total}
                        <span className="text-[11px] font-bold text-gray-500 ml-1">
                          ({pct}%)
                        </span>
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full h-2 rounded-full bg-gray-100 overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-500 ${
                          isGreat
                            ? 'bg-emerald-500'
                            : isOkay
                            ? 'bg-amber-500'
                            : 'bg-rose-500'
                        }`}
                        style={{ width: `${pct}%` }}
                      />
                    </div>

                    <div className="flex items-center justify-between text-[11px] text-gray-500 font-bold">
                      <span>Đã làm: {p.attempted}/{p.total} câu</span>
                      <span className={p.wrongItems > 0 ? 'text-rose-600 font-extrabold' : 'text-emerald-700 font-extrabold'}>
                        {p.wrongItems > 0 ? `${p.wrongItems} bài sai` : '✓ Đúng toàn bộ'}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Reset Confirmation Box if triggered */}
          {showConfirmReset && (
            <div className="p-4 rounded-2xl bg-rose-50 border-2 border-rose-300 text-rose-950 space-y-3 animate-in fade-in duration-150">
              <div className="flex items-start gap-2">
                <Target className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <div className="font-black text-sm">Xác nhận làm lại bài thi từ đầu?</div>
                  <p className="mt-0.5 text-rose-800">
                    Toàn bộ đáp án bạn đã chọn và kết quả của đề thi này sẽ được xóa để bạn làm lại từ câu 1.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowConfirmReset(false)}
                  className="px-3 py-1.5 rounded-xl text-xs font-bold bg-white text-gray-700 border border-gray-300 hover:bg-gray-100 cursor-pointer"
                >
                  Hủy bỏ
                </button>
                <button
                  type="button"
                  onClick={handleConfirmReset}
                  className="px-3.5 py-1.5 rounded-xl text-xs font-black bg-rose-600 hover:bg-rose-700 text-white cursor-pointer shadow-xs"
                >
                  Đồng ý làm lại từ đầu
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-5 bg-white border-t border-[#213a34]/10 shrink-0 space-y-2.5">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            {/* 1. Review Wrong Answers Button */}
            {totalWrongQuestions > 0 ? (
              <button
                type="button"
                onClick={onReviewWrong}
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-2xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-black shadow-md active:scale-95 transition-all cursor-pointer"
              >
                <XCircle className="w-4 h-4 text-white" />
                <span>Luyện lại câu sai ({totalWrongQuestions})</span>
              </button>
            ) : (
              <button
                type="button"
                disabled
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-2xl bg-emerald-100 text-emerald-800 text-xs font-black cursor-default opacity-80"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                <span>Không có câu sai 🎉</span>
              </button>
            )}

            {/* 2. Choose Another Test Button */}
            <button
              type="button"
              onClick={() => {
                onClose();
                onOpenTestSelector();
              }}
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-2xl bg-[#213a34] hover:bg-[#2c4e46] text-[#f8d467] text-xs font-black shadow-md active:scale-95 transition-all cursor-pointer"
            >
              <BookOpen className="w-4 h-4 text-[#f8d467]" />
              <span>Luyện đề khác (10 Đề)</span>
            </button>

            {/* 3. Reset and Retake Button */}
            <button
              type="button"
              onClick={() => setShowConfirmReset(true)}
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-2xl bg-[#f5f0e6] hover:bg-[#e9f2ed] text-[#213a34] border border-[#213a34]/20 text-xs font-black active:scale-95 transition-all cursor-pointer"
            >
              <RotateCcw className="w-4 h-4 text-[#eb6a52]" />
              <span>Làm lại đề này</span>
            </button>
          </div>

          {/* Dismiss and review questions on page */}
          <div className="text-center pt-1">
            <button
              type="button"
              onClick={onClose}
              className="text-xs font-bold text-gray-500 hover:text-[#213a34] underline decoration-gray-300 transition-colors cursor-pointer"
            >
              Đóng bảng kết quả & xem lại chi tiết bài làm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
