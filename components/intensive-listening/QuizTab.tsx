'use client';

import { useState, useEffect } from 'react';
import type { QuestionItem, DialogueLine } from '@/data/intensive_listening_test1';
import {
  CheckCircle2,
  XCircle,
  RotateCcw,
  Sparkles,
  Eye,
  EyeOff,
  Check,
  FileText,
  Languages,
  Maximize2,
  X,
} from 'lucide-react';

interface QuizTabProps {
  itemId: string;
  questions: QuestionItem[];
  part?: 1 | 2 | 3 | 4;
  imageUrl?: string;
  transcript?: DialogueLine[];
  onCompleteItem?: (score: number, total: number) => void;
}

export function QuizTab({
  itemId,
  questions,
  part = 1,
  imageUrl,
  transcript,
  onCompleteItem,
}: QuizTabProps) {
  // Selected answers: { [questionNum]: 'A' | 'B' | 'C' | 'D' }
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [showExplanation, setShowExplanation] = useState<boolean>(false);
  const [peekTranscript, setPeekTranscript] = useState<boolean>(false);
  const [showTranslation, setShowTranslation] = useState<boolean>(false);
  const [showScript, setShowScript] = useState<boolean>(false);
  const [isImageModalOpen, setIsImageModalOpen] = useState<boolean>(false);

  // Reset state when switching items
  useEffect(() => {
    setSelectedAnswers({});
    setIsSubmitted(false);
    setShowExplanation(false);
    setPeekTranscript(false);
    setShowTranslation(false);
    setShowScript(false);
    setIsImageModalOpen(false);
    setShowScript(false);
  }, [itemId]);

  const handleSelectOption = (qNum: number, key: string) => {
    if (isSubmitted) return;
    const nextAnswers = {
      ...selectedAnswers,
      [qNum]: key,
    };
    setSelectedAnswers(nextAnswers);

    // Part 1 & Part 2: Kiểm tra đáp án chính xác NGAY LẬP TỨC sau khi chọn
    if (part === 1 || part === 2) {
      setIsSubmitted(true);
      setShowExplanation(true);
      const isRight = key === questions[0]?.correctAnswer;
      if (onCompleteItem) {
        onCompleteItem(isRight ? 1 : 0, 1);
      }
    }
  };

  const handleCheckAnswers = () => {
    setIsSubmitted(true);
    setShowExplanation(true);
    let correctCount = 0;
    questions.forEach((q) => {
      if (selectedAnswers[q.num] === q.correctAnswer) {
        correctCount += 1;
      }
    });
    if (onCompleteItem) {
      onCompleteItem(correctCount, questions.length);
    }
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setIsSubmitted(false);
    setShowExplanation(false);
    setPeekTranscript(false);
  };

  const totalQuestions = questions.length;
  const answeredCount = Object.keys(selectedAnswers).length;
  const correctCount = questions.filter(
    (q) => selectedAnswers[q.num] === q.correctAnswer
  ).length;

  const isAudioOnlyExamPart = part === 1 || part === 2;
  const canShowTranscriptText = isSubmitted || peekTranscript || !isAudioOnlyExamPart;

  return (
    <div className="space-y-6">
      {/* Intro banner & Control Toggles */}
      <div className="bg-[#f5f0e6] rounded-2xl p-4 border border-[#213a34]/10 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-[#213a34] text-[#f8d467] flex items-center justify-center font-black text-sm shrink-0">
            ✍️
          </div>
          <div>
            <h3 className="font-black text-[#213a34] text-sm">
              Luyện trắc nghiệm {isAudioOnlyExamPart ? '(Ẩn Lời Thoại · Chọn Là Chấm Điểm)' : `(Part ${part})`}
            </h3>
            <p className="text-xs text-gray-600 font-medium">
              {isAudioOnlyExamPart
                ? 'Bấm chọn đáp án để kiểm tra kết quả ngay lập tức kèm lời giải.'
                : 'Tập trung nghe audio, chọn đáp án và bấm "Kiểm tra đáp án".'}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {/* Peeking toggle for Part 1 & 2 */}
          {isAudioOnlyExamPart && !isSubmitted && (
            <button
              type="button"
              onClick={() => setPeekTranscript(!peekTranscript)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-black text-[#213a34] bg-white border border-[#213a34]/15 hover:bg-[#e9f2ed] shadow-xs transition-colors"
            >
              {peekTranscript ? (
                <>
                  <EyeOff className="w-3.5 h-3.5 text-amber-600" />
                  <span>Ẩn lời thoại</span>
                </>
              ) : (
                <>
                  <Eye className="w-3.5 h-3.5 text-blue-600" />
                  <span>Xem trước lời thoại</span>
                </>
              )}
            </button>
          )}

          {/* Script Toggle for Part 3 & 4 */}
          {(part === 3 || part === 4) && transcript && transcript.length > 0 && (
            <button
              type="button"
              onClick={() => setShowScript(!showScript)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-black border shadow-xs transition-colors ${
                showScript
                  ? 'bg-[#213a34] text-white border-[#213a34]'
                  : 'bg-white text-[#213a34] border-[#213a34]/15 hover:bg-[#e9f2ed]'
              }`}
            >
              <FileText className={`w-3.5 h-3.5 ${showScript ? 'text-[#f8d467]' : 'text-blue-600'}`} />
              <span>{showScript ? 'Ẩn lời thoại (Script)' : 'Hiện lời thoại (Script)'}</span>
            </button>
          )}

          {/* Translation Toggle for all parts */}
          <button
            type="button"
            onClick={() => setShowTranslation(!showTranslation)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-black border shadow-xs transition-colors ${
              showTranslation
                ? 'bg-emerald-700 text-white border-emerald-700'
                : 'bg-white text-[#213a34] border-[#213a34]/15 hover:bg-[#e9f2ed]'
            }`}
          >
            <Languages className={`w-3.5 h-3.5 ${showTranslation ? 'text-[#f8d467]' : 'text-emerald-700'}`} />
            <span>{showTranslation ? 'Ẩn dịch Tiếng Việt' : 'Hiện dịch Tiếng Việt'}</span>
          </button>

          {isSubmitted && (
            <span
              className={`px-3 py-1 rounded-full text-xs font-black ${
                correctCount === totalQuestions
                  ? 'bg-green-100 text-green-800 border border-green-300'
                  : 'bg-amber-100 text-amber-800 border border-amber-300'
              }`}
            >
              {correctCount}/{totalQuestions} câu đúng
            </span>
          )}
        </div>
      </div>

      {/* Part 3 & 4 Expandable Script Box */}
      {(part === 3 || part === 4) && showScript && transcript && transcript.length > 0 && (
        <div className="p-4 sm:p-5 rounded-2xl sm:rounded-3xl bg-white border-2 border-[#213a34]/15 shadow-sm space-y-3 animate-in fade-in duration-200">
          <div className="flex items-center justify-between border-b border-[#213a34]/10 pb-2.5">
            <span className="text-xs font-black uppercase tracking-wider text-[#213a34] flex items-center gap-1.5">
              📜 Lời thoại đoạn nghe ({part === 3 ? 'Hội thoại' : 'Bài nói'})
            </span>
            <span className="text-[11px] text-gray-500 font-bold">
              {showTranslation ? 'Đang bật bản dịch Tiếng Việt' : 'Bấm nút "Hiện dịch Tiếng Việt" để đối chiếu'}
            </span>
          </div>

          <div className="space-y-3">
            {transcript.map((line, idx) => (
              <div key={line.id || idx} className="text-sm">
                <div className="flex items-start gap-2.5">
                  {line.speaker && (
                    <span
                      className={`text-[11px] font-black px-2.5 py-0.5 rounded-full shrink-0 mt-0.5 ${
                        line.speaker.toLowerCase().includes('w')
                          ? 'bg-rose-100 text-rose-700 border border-rose-200'
                          : 'bg-blue-100 text-blue-800 border border-blue-200'
                      }`}
                    >
                      {line.speaker}
                    </span>
                  )}
                  <p className="font-extrabold text-[#213a34] leading-relaxed flex-1">
                    {line.text}
                  </p>
                </div>
                {showTranslation && line.vietnamese && (
                  <p className="text-xs text-gray-600 font-medium ml-12 sm:ml-14 mt-1 bg-[#fbf9f5] p-2 rounded-xl border border-gray-100">
                    {line.vietnamese}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Image / Graphic Display for Part 1, Part 3 & Part 4 */}
      {imageUrl && (
        <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-5 border-2 border-[#213a34]/10 shadow-sm flex flex-col items-center justify-center">
          <div
            onClick={() => setIsImageModalOpen(true)}
            className="relative overflow-hidden rounded-xl border border-gray-200/80 max-w-full bg-[#fbf9f5] cursor-zoom-in group"
            title="Nhấn để phóng to hình ảnh"
          >
            <img
              src={imageUrl}
              alt={part === 1 ? 'Part 1 bức tranh' : 'Bảng biểu / Sơ đồ đính kèm'}
              className="w-auto max-h-[380px] sm:max-h-[440px] object-contain rounded-xl group-hover:scale-[1.01] transition-transform"
            />
            <div className="absolute bottom-2 right-2 px-2.5 py-1 rounded-lg bg-black/65 text-white text-[11px] font-bold opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5 shadow-sm">
              <Maximize2 className="w-3.5 h-3.5 text-[#f8d467]" />
              <span>Phóng to</span>
            </div>
          </div>
          <span className="text-xs font-bold text-gray-500 mt-2.5 flex items-center gap-1.5">
            {part === 1 ? (
              `📸 Bức tranh câu hỏi ${questions[0]?.num}`
            ) : (
              `📊 Bảng biểu / Sơ đồ đính kèm câu hỏi (Look at the graphic)`
            )}
            <span className="text-gray-400 font-normal">· Nhấn ảnh để xem to</span>
          </span>
        </div>
      )}

      {/* Image Zoom Lightbox Modal */}
      {isImageModalOpen && imageUrl && (
        <div
          onClick={() => setIsImageModalOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-sm cursor-zoom-out animate-in fade-in duration-150"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl max-h-[92vh] bg-white p-3 sm:p-4 rounded-3xl shadow-2xl flex flex-col items-center border-2 border-white/20"
          >
            <button
              type="button"
              onClick={() => setIsImageModalOpen(false)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 rounded-2xl bg-black/60 hover:bg-black/80 text-white transition-colors z-10"
              title="Đóng (hoặc nhấn ra ngoài)"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={imageUrl}
              alt="Phóng to hình ảnh / bảng biểu"
              className="max-h-[82vh] w-auto max-w-full object-contain rounded-2xl"
            />
            <div className="text-xs font-bold text-gray-500 mt-2">
              {part === 1 ? 'Part 1: Bức tranh mô tả' : 'Part 3/4: Bảng biểu / sơ đồ minh họa (Look at the graphic)'}
            </div>
          </div>
        </div>
      )}

      {/* Question List */}
      <div className="space-y-5">
        {questions.map((q) => {
          const userAns = selectedAnswers[q.num];
          const isCorrect = userAns === q.correctAnswer;

          // Question header text
          let questionTitle = q.question;
          if (part === 1) {
            questionTitle = `Nhìn hình ảnh và nghe 4 câu miêu tả (A, B, C, D)`;
          } else if (part === 2 && !canShowTranscriptText) {
            questionTitle = `Nghe câu hỏi và chọn câu phản hồi đúng nhất (A, B, C)`;
          }

          return (
            <div
              key={q.num}
              className={`bg-white rounded-2xl sm:rounded-3xl p-5 border-2 transition-all ${
                isSubmitted
                  ? isCorrect
                    ? 'border-green-300 shadow-sm bg-green-50/20'
                    : 'border-red-200 shadow-sm bg-red-50/10'
                  : 'border-[#213a34]/10 shadow-sm hover:border-[#213a34]/20'
              }`}
            >
              {/* Question Header */}
              <div className="flex items-start gap-3 mb-4">
                <span className="w-8 h-8 rounded-xl bg-[#213a34] text-[#f8d467] flex items-center justify-center font-black text-sm shrink-0 mt-0.5">
                  {q.num}
                </span>
                <div className="flex-1">
                  <h4 className="font-extrabold text-[#213a34] text-base sm:text-lg leading-snug">
                    {questionTitle}
                  </h4>
                  {part === 2 && !canShowTranscriptText && (
                    <p className="text-xs text-amber-700/80 font-semibold mt-1">
                      💡 TOEIC Part 2 không in sẵn câu hỏi hay phương án trên đề thi.
                    </p>
                  )}
                  {showTranslation && q.vietnameseQuestion && (
                    <p className="text-xs text-gray-500 font-bold mt-1">
                      Dịch: {q.vietnameseQuestion}
                    </p>
                  )}
                </div>

                {/* Status indicator if submitted */}
                {isSubmitted && (
                  <div className="shrink-0">
                    {isCorrect ? (
                      <span className="flex items-center gap-1 text-green-700 bg-green-100 px-2.5 py-1 rounded-full text-xs font-black">
                        <CheckCircle2 className="w-4 h-4" /> Đúng
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-red-700 bg-red-100 px-2.5 py-1 rounded-full text-xs font-black">
                        <XCircle className="w-4 h-4" /> Sai
                      </span>
                    )}
                  </div>
                )}
              </div>

              {/* Options */}
              <div className="space-y-2.5">
                {q.options.map((opt) => {
                  const isSelected = userAns === opt.key;
                  const isThisCorrect = opt.key === q.correctAnswer;

                  let optStyle =
                    'border-[#213a34]/10 hover:border-[#213a34]/30 hover:bg-[#f5f0e6]/40 bg-white';
                  let badgeStyle = 'bg-[#e9f2ed] text-[#213a34]';

                  if (isSubmitted) {
                    if (isThisCorrect) {
                      optStyle =
                        'border-green-500 bg-green-50/70 text-green-950 font-bold ring-2 ring-green-400/20';
                      badgeStyle = 'bg-green-600 text-white';
                    } else if (isSelected && !isThisCorrect) {
                      optStyle =
                        'border-red-400 bg-red-50 text-red-950 ring-2 ring-red-400/20';
                      badgeStyle = 'bg-red-500 text-white';
                    } else {
                      optStyle = 'border-gray-200 opacity-60 bg-gray-50/50';
                      badgeStyle = 'bg-gray-200 text-gray-600';
                    }
                  } else if (isSelected) {
                    optStyle =
                      'border-[#213a34] bg-[#e9f2ed] ring-2 ring-[#213a34]/20';
                    badgeStyle = 'bg-[#213a34] text-white';
                  }

                  // Determine display text for the option
                  let optionDisplayText = opt.text;
                  if (isAudioOnlyExamPart && !canShowTranscriptText) {
                    optionDisplayText = `Phương án ${opt.key}`;
                  }

                  return (
                    <button
                      key={opt.key}
                      type="button"
                      disabled={isSubmitted}
                      onClick={() => handleSelectOption(q.num, opt.key)}
                      className={`w-full flex items-start gap-3 p-3 sm:p-3.5 rounded-xl sm:rounded-2xl border-2 text-left transition-all ${optStyle}`}
                    >
                      <span
                        className={`w-7 h-7 rounded-lg flex items-center justify-center font-black text-xs shrink-0 mt-0.5 transition-colors ${badgeStyle}`}
                      >
                        {opt.key}
                      </span>
                      <div className="flex-1">
                        <div className="font-extrabold text-[#213a34] text-sm sm:text-base leading-relaxed">
                          {optionDisplayText}
                        </div>
                        {showTranslation && opt.vietnamese && (
                          <div className="text-xs text-gray-500 font-medium mt-0.5">
                            {opt.vietnamese}
                          </div>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Explanation Section */}
              {isSubmitted && showExplanation && q.explanation && (
                <div className="mt-4 p-4 rounded-2xl bg-[#f5f0e6] border border-[#213a34]/10 space-y-2 animate-in fade-in duration-300">
                  <div className="flex items-center gap-1.5 text-xs font-black text-[#213a34]">
                    <Sparkles className="w-4 h-4 text-[#eb6a52]" />
                    <span>Giải thích chi tiết & Đáp án đúng: {q.correctAnswer}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-medium">
                    {q.explanation}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Bottom Action Controls */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-[#213a34]/10">
        <div className="text-xs text-gray-500 font-bold">
          {isAudioOnlyExamPart ? (
            isSubmitted ? 'Đã kiểm tra kết quả' : 'Chưa chọn đáp án'
          ) : (
            `Đã chọn ${answeredCount}/${totalQuestions} câu`
          )}
        </div>

        <div className="flex items-center gap-2">
          {isSubmitted ? (
            <>
              <button
                type="button"
                onClick={() => setShowExplanation(!showExplanation)}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-black bg-[#e9f2ed] hover:bg-[#d5e5db] text-[#213a34] transition-colors"
              >
                {showExplanation ? (
                  <>
                    <EyeOff className="w-4 h-4" /> Ẩn giải thích
                  </>
                ) : (
                  <>
                    <Eye className="w-4 h-4" /> Xem giải thích
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={handleReset}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-black bg-[#213a34] hover:bg-[#2c4e46] text-white shadow-sm transition-colors"
              >
                <RotateCcw className="w-4 h-4 text-[#f8d467]" /> Làm lại
              </button>
            </>
          ) : (
            !isAudioOnlyExamPart && (
              <button
                type="button"
                disabled={answeredCount === 0}
                onClick={handleCheckAnswers}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-black bg-[#213a34] hover:bg-[#2c4e46] text-white shadow-md disabled:opacity-40 disabled:cursor-not-allowed transition-all active:scale-95"
              >
                <Check className="w-4 h-4 text-[#f8d467]" /> Kiểm tra đáp án
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
}
