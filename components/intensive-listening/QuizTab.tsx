'use client';

import { useState, useEffect } from 'react';
import type { QuestionItem, DialogueLine } from '@/data/intensive_listening_test1';
import {
  CheckCircle2,
  XCircle,
  RotateCcw,
  Eye,
  EyeOff,
  Check,
  FileText,
  Languages,
  Maximize2,
  X,
  Columns3,
  Columns2,
  List,
} from 'lucide-react';

function formatQuestionText(text: string): string {
  if (!text) return '';
  return text
    // Strip trailing scan/page/test artifacts
    .replace(
      /\s*(?:GO\s*ON\s*TO\s*THE\s*NEXT\s*PAGE|GOONTOTHENEXTPAGE|GOON\s*TOTHENEXTPAGE|GO\s*ONTO\s*THENEXT\s*PAGE|TEST\s*\d+|This is the\s*end of the Listening test|heListeningtest).*$/i,
      ''
    )
    // Strip trailing scan page numbers like ' 40', ' 42', ' 44'
    .replace(/\s+\d{2}$/, '')
    // Strip leading A. or B.
    .replace(/^[A-Z]\.\s+/, '')
    .replace(/([.?!])\s+[A-Z]\.\s+/g, '$1 ')
    // Fix common concatenated questions
    .replace(/Whatproblemdoes\s*/gi, 'What problem does ')
    .replace(/Whatproblemdoestheman\s*/gi, 'What problem does the man ')
    .replace(/Whatproblemdoesthewoman\s*/gi, 'What problem does the woman ')
    .replace(/Whatproblemdoesthespeaker\s*/gi, 'What problem does the speaker ')
    .replace(/Whatproblemarethespeakersdiscussing\s*/gi, 'What problem are the speakers discussing')
    .replace(/the womanmention/gi, 'the woman mention')
    .replace(/the manmention/gi, 'the man mention')
    .replace(/the speakermention/gi, 'the speaker mention')
    .replace(/Whydo the speakersmention/gi, 'Why do the speakers mention')
    .replace(/Whatdothespeakers likeabout/gi, 'What do the speakers like about')
    .replace(/Whatdoesthewomanoffertodo/gi, 'What does the woman offer to do')
    .replace(/Whatdoesthespeakers'companyproduce/gi, "What does the speakers' company produce")
    .replace(/Whatis the woman concerned about/gi, 'What is the woman concerned about')
    .replace(/Whatwill themandonext/gi, 'What will the man do next')
    .replace(/Whywill theCEObepleased/gi, 'Why will the CEO be pleased')
    .replace(/Whatismarkedonsomemaps/gi, 'What is marked on some maps')
    .replace(/Whodoes thewomansayshewill senda reminder to/gi, 'Who does the woman say she will send a reminder to')
    .replace(/Whydoesthespeakersay,"myapartmentis on a very high floor"/gi, 'Why does the speaker say, "my apartment is on a very high floor"')
    .replace(/Whatdoes the speaker imply when hesays, "IsawthereviewsfromToronto"/gi, 'What does the speaker imply when he says, "I saw the reviews from Toronto"')
    .replace(/What does theman mean when he says, suppose no one willreally be disappointed"/gi, 'What does the man mean when he says, "I suppose no one will really be disappointed"')
    .replace(/What does the speaker mean when she says,"It's been a mixed bag"/gi, 'What does the speaker mean when she says, "It\'s been a mixed bag"')
    .replace(/Where does the speaker most likelywork/gi, 'Where does the speaker most likely work')
    .replace(/Where isthe announcementmost likely being made/gi, 'Where is the announcement most likely being made')
    .replace(/What doesthespeaker say about some Shopsmartproducts/gi, 'What does the speaker say about some Shopsmart products')
    // Fix common concatenated options
    .replace(/Tohelpacustomerchooseaproduct/gi, 'To help a customer choose a product')
    .replace(/Tocheck on a customer's satisfaction/gi, "To check on a customer's satisfaction")
    .replace(/To inform a customer of aprice estimate/gi, 'To inform a customer of a price estimate')
    .replace(/Send workerstothewoman's house/gi, "Send workers to the woman's house")
    .replace(/Afasterpaceofwork/gi, 'A faster pace of work')
    .replace(/Additionalemployees/gi, 'Additional employees')
    .replace(/Therearenot enough peopleworking there/gi, 'There are not enough people working there')
    .replace(/It ismoremodernthanthelocal airport/gi, 'It is more modern than the local airport')
    .replace(/Givehimadiscountonhisreservation/gi, 'Give him a discount on his reservation')
    .replace(/Thecostthemanhasestimated/gi, 'The cost the man has estimated')
    .replace(/Customerfeedback/gi, 'Customer feedback')
    .replace(/Performancereviews/gi, 'Performance reviews')
    .replace(/Arealestatefirm/gi, 'A real estate firm')
    .replace(/Asalesstrategy/gi, 'A sales strategy')
    .replace(/Aperformancehasbeen canceled/gi, 'A performance has been canceled')
    .replace(/Locationswhereworkcanbedone/gi, 'Locations where work can be done')
    .replace(/Deliverfirewood/gi, 'Deliver firewood')
    .replace(/Abaseballplayer/gi, 'A baseball player')
    .replace(/Customerreviews have beenpositive/gi, 'Customer reviews have been positive')
    .replace(/There isno timetocreate centerpieces/gi, 'There is no time to create centerpieces')
    .replace(/It was designed manyyears ago/gi, 'It was designed many years ago')
    .replace(/Torentafacility/gi, 'To rent a facility')
    .replace(/Torequestapricelist/gi, 'To request a price list')
    .replace(/Toschedulearepair/gi, 'To schedule a repair')
    .replace(/Tohireaphotographer/gi, 'To hire a photographer')
    .trim();
}

type Part34LayoutMode = 'grid3' | 'compact2' | 'list';

interface QuizTabProps {
  itemId: string;
  testId?: number;
  questions: QuestionItem[];
  part?: 1 | 2 | 3 | 4;
  imageUrl?: string;
  transcript?: DialogueLine[];
  onCompleteItem?: (score: number, total: number) => void;
  onResetItem?: () => void;
}

export function QuizTab({
  itemId,
  testId = 1,
  questions,
  part = 1,
  imageUrl,
  transcript,
  onCompleteItem,
  onResetItem,
}: QuizTabProps) {
  // Selected answers: { [questionNum]: 'A' | 'B' | 'C' | 'D' }
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [showExplanation, setShowExplanation] = useState<boolean>(false);
  const [peekTranscript, setPeekTranscript] = useState<boolean>(false);
  const [showTranslation, setShowTranslation] = useState<boolean>(false);
  const [showScript, setShowScript] = useState<boolean>(false);
  const [isImageModalOpen, setIsImageModalOpen] = useState<boolean>(false);

  // Layout mode for Part 3 & 4: 'grid3' (3 columns side-by-side) | 'compact2' (2-col options) | 'list' (1 col)
  const [part34Layout, setPart34Layout] = useState<Part34LayoutMode>('grid3');

  useEffect(() => {
    try {
      const saved = localStorage.getItem('wordnest-part34-layout');
      if (saved === 'grid3' || saved === 'compact2' || saved === 'list') {
        setPart34Layout(saved as Part34LayoutMode);
      }
    } catch {}
  }, []);

  const handleLayoutChange = (mode: Part34LayoutMode) => {
    setPart34Layout(mode);
    try {
      localStorage.setItem('wordnest-part34-layout', mode);
    } catch {}
  };

  const getStorageKey = () => `toeic_intensive_quiz_t${testId}_${itemId}`;

  // Save quiz answers to localStorage
  const persistQuizState = (answers: Record<number, string>, submitted: boolean) => {
    try {
      localStorage.setItem(
        getStorageKey(),
        JSON.stringify({
          selectedAnswers: answers,
          isSubmitted: submitted,
          updatedAt: Date.now(),
        })
      );
    } catch {}
  };

  // Load saved state when switching items or mounting
  useEffect(() => {
    try {
      const primaryKey = getStorageKey();
      let savedRaw = localStorage.getItem(primaryKey);
      // Fallback only for testId === 1 to migrate legacy un-prefixed keys
      if (!savedRaw && testId === 1) {
        savedRaw = localStorage.getItem(`toeic_intensive_quiz_${itemId}`);
        if (savedRaw) {
          try {
            localStorage.setItem(primaryKey, savedRaw);
          } catch {}
        }
      }

      if (savedRaw) {
        const parsed = JSON.parse(savedRaw);
        setSelectedAnswers(parsed.selectedAnswers || {});
        setIsSubmitted(Boolean(parsed.isSubmitted));
        setShowExplanation(Boolean(parsed.isSubmitted));
        setShowScript(Boolean(parsed.isSubmitted));
      } else {
        setSelectedAnswers({});
        setIsSubmitted(false);
        setShowExplanation(false);
        setShowScript(false);
      }
    } catch {
      setSelectedAnswers({});
      setIsSubmitted(false);
      setShowExplanation(false);
      setShowScript(false);
    }
    setPeekTranscript(false);
    setShowTranslation(false);
    setIsImageModalOpen(false);
  }, [itemId, testId]);

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
      setShowScript(true);
      persistQuizState(nextAnswers, true);
      const isRight = key === questions[0]?.correctAnswer;
      if (onCompleteItem) {
        onCompleteItem(isRight ? 1 : 0, 1);
      }
    } else {
      persistQuizState(nextAnswers, false);
    }
  };

  const handleCheckAnswers = () => {
    setIsSubmitted(true);
    setShowExplanation(true);
    setShowScript(true);
    persistQuizState(selectedAnswers, true);
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

  const handleResetQuiz = () => {
    setSelectedAnswers({});
    setIsSubmitted(false);
    setShowExplanation(false);
    setShowScript(false);
    setPeekTranscript(false);
    try {
      localStorage.removeItem(getStorageKey());
      if (testId === 1) {
        localStorage.removeItem(`toeic_intensive_quiz_${itemId}`);
      }
    } catch {}
    if (onResetItem) {
      onResetItem();
    }
  };

  const totalQuestions = questions.length;
  const answeredCount = Object.keys(selectedAnswers).length;
  const correctCount = questions.filter(
    (q) => selectedAnswers[q.num] === q.correctAnswer
  ).length;

  const isAudioOnlyExamPart = part === 1 || part === 2;
  const isPart3or4 = part === 3 || part === 4;
  const canShowTranscriptText = isSubmitted || peekTranscript || !isAudioOnlyExamPart;

  // Render question list
  const renderQuestions = () => {
    let containerClass = 'space-y-3';
    let optionsGridClass = 'space-y-1.5';

    if (isPart3or4) {
      if (part34Layout === 'grid3' && !imageUrl) {
        containerClass = 'grid grid-cols-1 md:grid-cols-3 gap-2.5 sm:gap-3 items-stretch';
        optionsGridClass = 'space-y-1.5';
      } else if (part34Layout === 'compact2' || (part34Layout === 'grid3' && imageUrl)) {
        containerClass = 'space-y-2.5';
        optionsGridClass = 'grid grid-cols-1 sm:grid-cols-2 gap-1.5';
      } else {
        containerClass = 'space-y-2.5';
        optionsGridClass = 'space-y-1.5';
      }
    }

    return (
      <div className="space-y-3">
        <div className={containerClass}>
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
                className={`bg-white rounded-2xl p-2.5 sm:p-3 border-2 transition-all flex flex-col justify-between ${
                  isSubmitted
                    ? isCorrect
                      ? 'border-green-300 shadow-2xs bg-green-50/20'
                      : 'border-red-200 shadow-2xs bg-red-50/10'
                    : 'border-[#213a34]/12 shadow-2xs hover:border-[#213a34]/25'
                }`}
              >
                <div>
                  {/* Question Header */}
                  <div className="flex items-start gap-2 mb-2 pb-1.5 border-b border-gray-100/80">
                    <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-lg bg-[#213a34] text-[#f8d467] flex items-center justify-center font-black text-xs shrink-0 mt-0.5 shadow-2xs">
                      {q.num}
                    </span>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-[#213a34] text-xs sm:text-[13px] leading-snug">
                        {formatQuestionText(questionTitle)}
                      </h4>
                      {part === 2 && !canShowTranscriptText && (
                        <p className="text-[11px] text-amber-700 font-medium mt-0.5">
                          💡 Đề thi thật Part 2 không in câu hỏi và đáp án trên giấy.
                        </p>
                      )}
                      {showTranslation && q.vietnameseQuestion && (
                        <p className="text-[11px] text-gray-500 font-semibold mt-0.5">
                          Dịch: {q.vietnameseQuestion}
                        </p>
                      )}
                    </div>

                    {/* Status indicator if submitted */}
                    {isSubmitted && (
                      <div className="shrink-0">
                        {isCorrect ? (
                          <span className="flex items-center gap-1 text-green-700 bg-green-100 px-1.5 py-0.5 rounded-full text-[10px] font-black">
                            <CheckCircle2 className="w-3 h-3" />
                            <span className="hidden sm:inline">Đúng</span>
                          </span>
                        ) : (
                          <span className="flex items-center gap-1 text-red-700 bg-red-100 px-1.5 py-0.5 rounded-full text-[10px] font-black">
                            <XCircle className="w-3 h-3" />
                            <span className="hidden sm:inline">Sai</span>
                          </span>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Options */}
                  <div className={optionsGridClass}>
                    {q.options.map((opt) => {
                      const isSelected = userAns === opt.key;
                      const isThisCorrect = opt.key === q.correctAnswer;

                      let optStyle =
                        'border-[#213a34]/10 hover:border-[#213a34]/30 hover:bg-[#f5f0e6]/40 bg-white text-gray-800';
                      let badgeStyle = 'bg-[#e9f2ed] text-[#213a34]';

                      if (isSubmitted) {
                        if (isThisCorrect) {
                          optStyle =
                            'border-green-500 bg-green-50/70 text-green-950 font-bold ring-1 ring-green-400/30';
                          badgeStyle = 'bg-green-600 text-white';
                        } else if (isSelected && !isThisCorrect) {
                          optStyle =
                            'border-red-400 bg-red-50 text-red-950 ring-1 ring-red-400/30';
                          badgeStyle = 'bg-red-500 text-white';
                        } else {
                          optStyle = 'border-gray-200 opacity-60 bg-gray-50/50';
                          badgeStyle = 'bg-gray-200 text-gray-600';
                        }
                      } else if (isSelected) {
                        optStyle =
                          'border-[#213a34] bg-[#e9f2ed] ring-1 ring-[#213a34]/30 font-bold text-[#213a34]';
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
                          onClick={() => handleSelectOption(q.num, opt.key)}
                          disabled={isSubmitted}
                          className={`w-full py-2 px-2.5 rounded-xl border text-left transition-all flex items-start justify-between gap-2 cursor-pointer disabled:cursor-default ${optStyle}`}
                        >
                          <div className="flex items-start gap-2 min-w-0 flex-1">
                            <span
                              className={`w-5 h-5 rounded-lg font-black text-xs flex items-center justify-center shrink-0 mt-0.5 ${badgeStyle}`}
                            >
                              {opt.key}
                            </span>
                            <span className="text-xs sm:text-[13px] font-semibold leading-snug break-words flex-1">
                              {formatQuestionText(optionDisplayText)}
                              {showTranslation && opt.vietnamese && (
                                <span className="block text-[11px] text-gray-500 font-normal mt-0.5">
                                  {formatQuestionText(opt.vietnamese)}
                                </span>
                              )}
                            </span>
                          </div>

                          {isSubmitted && isThisCorrect && (
                            <Check className="w-3.5 h-3.5 text-green-600 shrink-0 mt-0.5" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Explanation box after submit */}
                {isSubmitted && (
                  <div className="mt-2.5 pt-2 border-t border-gray-100 text-xs space-y-1 bg-[#fbf9f5] p-2 rounded-xl">
                    <div className="flex items-center gap-1.5">
                      <span className="font-black text-[#213a34]">Đáp án đúng:</span>
                      <span className="px-1.5 py-0.2 rounded-md bg-green-600 text-white font-black text-xs">
                        {q.correctAnswer}
                      </span>
                    </div>
                    {q.explanation && (
                      <p className="text-gray-700 text-[11px] sm:text-xs leading-relaxed font-medium">
                        {formatQuestionText(q.explanation)}
                      </p>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Part 3 & 4: Check Answers Button */}
        {!isAudioOnlyExamPart && (
          <div className="flex items-center justify-between gap-2 pt-2 border-t border-[#213a34]/10 bg-[#faf8f5] p-2.5 rounded-2xl">
            <div className="text-xs font-bold text-gray-500">
              {answeredCount === totalQuestions ? (
                <span className="text-emerald-700 font-black flex items-center gap-1">
                  ✓ Đã chọn đủ cả {totalQuestions} câu
                </span>
              ) : (
                <span>Đã chọn: <b className="text-[#213a34]">{answeredCount}</b>/{totalQuestions} câu</span>
              )}
            </div>

            <div className="flex items-center gap-2">
              {isSubmitted ? (
                <button
                  type="button"
                  onClick={handleResetQuiz}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold text-gray-700 bg-white border border-[#213a34]/15 hover:bg-[#e9f2ed] shadow-2xs transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Làm lại đoạn này</span>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleCheckAnswers}
                  disabled={answeredCount === 0}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-black bg-[#213a34] hover:bg-[#2c4e46] text-[#f8d467] disabled:opacity-40 shadow-sm transition-all active:scale-95 cursor-pointer"
                >
                  <Check className="w-4 h-4" />
                  <span>Kiểm tra đáp án ({answeredCount}/{totalQuestions})</span>
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="space-y-3">
      {/* Sleek Top Toolbar (No oversized banner) */}
      <div className="flex items-center justify-between gap-2 px-1 flex-wrap">
        <div className="flex items-center gap-2">
          <span className="text-xs font-black text-[#213a34] flex items-center gap-1.5">
            ✍️ {isAudioOnlyExamPart ? `Trắc nghiệm Part ${part} (Chọn là chấm ngay)` : `Part ${part} (${totalQuestions} câu hỏi)`}
          </span>
          {isSubmitted && (
            <span
              className={`px-2 py-0.5 rounded-full text-[10px] font-black ${
                correctCount === totalQuestions
                  ? 'bg-green-100 text-green-800'
                  : 'bg-amber-100 text-amber-800'
              }`}
            >
              {correctCount}/{totalQuestions} đúng
            </span>
          )}
        </div>

        <div className="flex items-center gap-1.5 flex-wrap">
          {/* Layout Switcher for Part 3 & 4 */}
          {isPart3or4 && (
            <div className="flex items-center bg-[#f5f0e6] p-0.5 rounded-xl border border-[#213a34]/12 text-xs font-bold shrink-0">
              <button
                type="button"
                onClick={() => handleLayoutChange('grid3')}
                title="Xem cả 3 câu theo 3 cột ngang (Vừa màn hình, không cần cuộn)"
                className={`flex items-center gap-1 px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                  part34Layout === 'grid3'
                    ? 'bg-[#213a34] text-[#f8d467] shadow-xs'
                    : 'text-gray-600 hover:text-[#213a34]'
                }`}
              >
                <Columns3 size={13} />
                <span className="hidden sm:inline">3 Cột (Xem hết)</span>
              </button>
              <button
                type="button"
                onClick={() => handleLayoutChange('compact2')}
                title="3 câu xếp dọc, đáp án chia 2 cột A-B / C-D"
                className={`flex items-center gap-1 px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                  part34Layout === 'compact2'
                    ? 'bg-[#213a34] text-[#f8d467] shadow-xs'
                    : 'text-gray-600 hover:text-[#213a34]'
                }`}
              >
                <Columns2 size={13} />
                <span className="hidden sm:inline">2 Cột</span>
              </button>
              <button
                type="button"
                onClick={() => handleLayoutChange('list')}
                title="Dạng danh sách 1 cột truyền thống"
                className={`flex items-center gap-1 px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                  part34Layout === 'list'
                    ? 'bg-[#213a34] text-[#f8d467] shadow-xs'
                    : 'text-gray-600 hover:text-[#213a34]'
                }`}
              >
                <List size={13} />
                <span className="hidden sm:inline">1 Cột</span>
              </button>
            </div>
          )}

          {/* Peeking toggle for Part 1 & 2 */}
          {isAudioOnlyExamPart && !isSubmitted && (
            <button
              type="button"
              onClick={() => setPeekTranscript(!peekTranscript)}
              className="flex items-center gap-1 px-2.5 py-1 rounded-xl text-xs font-bold text-[#213a34] bg-white border border-[#213a34]/15 hover:bg-[#e9f2ed] shadow-2xs transition-colors cursor-pointer"
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
              className={`flex items-center gap-1 px-2.5 py-1 rounded-xl text-xs font-bold border shadow-2xs transition-colors cursor-pointer ${
                showScript
                  ? 'bg-[#213a34] text-white border-[#213a34]'
                  : 'bg-white text-[#213a34] border-[#213a34]/15 hover:bg-[#e9f2ed]'
              }`}
            >
              <FileText className={`w-3.5 h-3.5 ${showScript ? 'text-[#f8d467]' : 'text-blue-600'}`} />
              <span>{showScript ? 'Ẩn Script' : 'Hiện Script'}</span>
            </button>
          )}

          {/* Translation Toggle for all parts */}
          <button
            type="button"
            onClick={() => setShowTranslation(!showTranslation)}
            className={`flex items-center gap-1 px-2.5 py-1 rounded-xl text-xs font-bold border shadow-2xs transition-colors cursor-pointer ${
              showTranslation
                ? 'bg-emerald-700 text-white border-emerald-700'
                : 'bg-white text-[#213a34] border-[#213a34]/15 hover:bg-[#e9f2ed]'
            }`}
          >
            <Languages className={`w-3.5 h-3.5 ${showTranslation ? 'text-[#f8d467]' : 'text-emerald-700'}`} />
            <span>{showTranslation ? 'Ẩn dịch' : 'Hiện dịch'}</span>
          </button>
        </div>
      </div>

      {/* Part 3 & 4 Expandable Script Box */}
      {(part === 3 || part === 4) && showScript && transcript && transcript.length > 0 && (
        <div className="p-3 rounded-2xl bg-white border border-[#213a34]/15 shadow-2xs space-y-2 animate-in fade-in duration-150">
          <div className="flex items-center justify-between border-b border-[#213a34]/10 pb-1.5">
            <span className="text-xs font-black uppercase tracking-wider text-[#213a34]">
              📜 Lời thoại {part === 3 ? 'hội thoại' : 'bài nói'}
            </span>
          </div>

          <div className="space-y-1.5 max-h-56 overflow-y-auto pr-1">
            {transcript.map((line, idx) => (
              <div key={line.id || idx} className="text-xs">
                <div className="flex items-start gap-1.5">
                  {line.speaker && (
                    <span
                      className={`text-[9px] font-black px-1.5 py-0.5 rounded shrink-0 mt-0.5 ${
                        line.speaker.toLowerCase().includes('w')
                          ? 'bg-rose-100 text-rose-700'
                          : 'bg-blue-100 text-blue-800'
                      }`}
                    >
                      {line.speaker}
                    </span>
                  )}
                  <p className="font-bold text-[#213a34] leading-relaxed flex-1">
                    {formatQuestionText(line.text)}
                  </p>
                </div>
                {showTranslation && line.vietnamese && (
                  <p className="text-[11px] text-gray-500 font-medium ml-8 mt-0.5">
                    {formatQuestionText(line.vietnamese)}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Main Study Area: Side-by-side grid if imageUrl exists */}
      {imageUrl ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-start">
          {/* Left Column: Image with click to zoom */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-2.5 border border-[#213a34]/12 shadow-2xs flex flex-col items-center sticky top-2">
            <div
              onClick={() => setIsImageModalOpen(true)}
              className="relative overflow-hidden rounded-xl border border-gray-200/80 max-w-full bg-[#fbf9f5] cursor-zoom-in group"
              title="Nhấn để phóng to hình ảnh"
            >
              <img
                src={imageUrl}
                alt={part === 1 ? 'Part 1 bức tranh' : 'Bảng biểu / Sơ đồ đính kèm'}
                className="w-auto max-h-[260px] sm:max-h-[300px] object-contain rounded-xl group-hover:scale-[1.02] transition-transform duration-200"
              />
              <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                <span className="px-2.5 py-1 rounded-full bg-black/80 text-white text-[11px] font-bold flex items-center gap-1 shadow-sm">
                  <Maximize2 className="w-3 h-3 text-[#f8d467]" /> Phóng to
                </span>
              </div>
            </div>
            <span className="text-[10px] font-bold text-gray-400 mt-1.5 flex items-center gap-1">
              📸 {part === 1 ? 'Bức tranh câu hỏi' : 'Bảng biểu / Sơ đồ đính kèm (Look at the graphic)'}
            </span>
          </div>

          {/* Right Column: Questions */}
          <div className="lg:col-span-7">
            {renderQuestions()}
          </div>
        </div>
      ) : (
        renderQuestions()
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
              className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 rounded-2xl bg-black/60 hover:bg-black/80 text-white transition-colors z-10 cursor-pointer"
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
    </div>
  );
}
