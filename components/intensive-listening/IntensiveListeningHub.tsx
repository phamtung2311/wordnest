'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  availableIntensiveTests,
  getIntensiveDataByTestId,
} from '@/data/intensive_listening_index';
import type { IntensiveListeningItem } from '@/data/intensive_listening_index';
import type { PracticeTab, QuizItemResult } from './types';
import { IntensiveSidebar } from './IntensiveSidebar';
import { IntensiveAudioPlayer } from './IntensiveAudioPlayer';
import { QuizTab } from './QuizTab';
import { TranscriptTab } from './TranscriptTab';
import { DictationTab } from './DictationTab';
import { TestSelectorModal } from './TestSelectorModal';
import { TestResultModal } from './TestResultModal';
import {
  ArrowLeft,
  Headphones,
  CheckCircle2,
  FileText,
  MessageSquare,
  PenTool,
  Menu,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Sparkles,
  Trophy,
  Layers,
} from 'lucide-react';

function loadQuizResultsForTest(
  testId: number,
  items: IntensiveListeningItem[]
): Record<string, QuizItemResult> {
  const results: Record<string, QuizItemResult> = {};
  if (typeof window === 'undefined') return results;

  // Scan individual quiz items strictly scoped by testId
  items.forEach((item) => {
    try {
      const primaryKey = `toeic_intensive_quiz_t${testId}_${item.id}`;
      // ONLY testId === 1 falls back to legacy un-prefixed keys
      const legacyKey = testId === 1 ? `toeic_intensive_quiz_${item.id}` : null;
      let quizRaw = localStorage.getItem(primaryKey);
      if (!quizRaw && legacyKey) {
        quizRaw = localStorage.getItem(legacyKey);
        if (quizRaw) {
          try {
            localStorage.setItem(primaryKey, quizRaw);
          } catch {}
        }
      }

      if (quizRaw) {
        const quizData = JSON.parse(quizRaw);
        if (quizData && quizData.isSubmitted && quizData.selectedAnswers) {
          const total = item.questions.length;
          const correct = item.questions.filter(
            (q) => quizData.selectedAnswers[q.num] === q.correctAnswer
          ).length;
          results[item.id] = {
            correct,
            total,
            isCorrect: total > 0 && correct === total,
            answeredAt: quizData.updatedAt || Date.now(),
          };
        }
      }
    } catch {}
  });

  // Always rewrite test results cache with clean, scoped data
  try {
    localStorage.setItem(
      `toeic_intensive_results_t${testId}`,
      JSON.stringify(results)
    );
  } catch {}

  return results;
}

export function IntensiveListeningHub() {
  const router = useRouter();

  // Test Selection state (Test 1 to 10)
  const [currentTestId, setCurrentTestId] = useState<number>(1);
  const [isTestSelectorOpen, setIsTestSelectorOpen] = useState<boolean>(false);
  const [isResultModalOpen, setIsResultModalOpen] = useState<boolean>(false);
  const [statusFilter, setStatusFilter] = useState<'all' | 'wrong' | 'correct'>('all');
  const currentTestData = getIntensiveDataByTestId(currentTestId);

  // Item & practice State
  const [currentItemId, setCurrentItemId] = useState<string>(
    currentTestData[0]?.id || 'part1-1'
  );
  const [activeTab, setActiveTab] = useState<PracticeTab>('quiz');
  const [isLooping, setIsLooping] = useState<boolean>(false);
  const [autoAdvance, setAutoAdvance] = useState<boolean>(true);
  const [completedItems, setCompletedItems] = useState<Record<string, boolean>>({});
  const [quizResults, setQuizResults] = useState<Record<string, QuizItemResult>>({});
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);

  // Ref to scroll right content area back to top on item switch
  const studyAreaRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (studyAreaRef.current) {
      studyAreaRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentItemId]);

  // Load saved preferences and current test from localStorage on initial mount
  useEffect(() => {
    setMounted(true);
    try {
      // 1. Load active test (Priority: URL query > global history > localStorage)
      const searchParams = new URLSearchParams(window.location.search);
      const urlTest = searchParams.get('test');
      const savedTest = localStorage.getItem('toeic_intensive_current_test');
      let initialTestId = 1;
      let initialItemId: string | null = null;

      try {
        const histRaw = localStorage.getItem('toeic_intensive_global_history');
        if (histRaw) {
          const hist = JSON.parse(histRaw);
          if (hist.testId && availableIntensiveTests.some((t) => t.id === hist.testId)) {
            initialTestId = hist.testId;
            initialItemId = hist.itemId || null;
          }
        }
      } catch {}

      if (urlTest) {
        const parsedUrl = parseInt(urlTest, 10);
        if (availableIntensiveTests.some((t) => t.id === parsedUrl)) {
          initialTestId = parsedUrl;
          initialItemId = null;
        }
      } else if (savedTest && !initialItemId) {
        const parsedTest = parseInt(savedTest, 10);
        if (availableIntensiveTests.some((t) => t.id === parsedTest)) {
          initialTestId = parsedTest;
        }
      }
      setCurrentTestId(initialTestId);

      const activeData = getIntensiveDataByTestId(initialTestId);

      // 2. Load last active item for that test (chính xác câu đang làm dở)
      const savedLastItem =
        initialItemId ||
        localStorage.getItem(`toeic_intensive_last_item_t${initialTestId}`) ||
        (initialTestId === 1 ? localStorage.getItem('toeic_intensive_last_item') : null);

      if (savedLastItem && activeData.some((i) => i.id === savedLastItem)) {
        setCurrentItemId(savedLastItem);
      } else if (activeData.length > 0) {
        setCurrentItemId(activeData[0].id);
      }

      // Auto-cleanup dirty cross-contaminated test caches (t2 to t10)
      const hasCleaned = localStorage.getItem('toeic_intensive_scoped_v1');
      if (!hasCleaned) {
        for (let t = 2; t <= 10; t++) {
          let hasScopedKey = false;
          for (let i = 0; i < localStorage.length; i++) {
            const k = localStorage.key(i);
            if (k && k.startsWith(`toeic_intensive_quiz_t${t}_`)) {
              hasScopedKey = true;
              break;
            }
          }
          if (!hasScopedKey) {
            localStorage.removeItem(`toeic_intensive_results_t${t}`);
            localStorage.removeItem(`toeic_intensive_completed_t${t}`);
          }
        }
        localStorage.setItem('toeic_intensive_scoped_v1', 'true');
      }

      // 3. Load quiz results & score stats for that test
      const initialResults = loadQuizResultsForTest(initialTestId, activeData);
      setQuizResults(initialResults);

      // 4. Load completed items for that test
      const savedCompleted =
        localStorage.getItem(`toeic_intensive_completed_t${initialTestId}`) ||
        (initialTestId === 1 ? localStorage.getItem('toeic_intensive_completed') : null);

      if (savedCompleted && (initialTestId === 1 || Object.keys(initialResults).length > 0)) {
        setCompletedItems(JSON.parse(savedCompleted));
      } else {
        setCompletedItems({});
        try {
          if (initialTestId > 1 && Object.keys(initialResults).length === 0) {
            localStorage.removeItem(`toeic_intensive_completed_t${initialTestId}`);
          }
        } catch {}
      }

      // 4. Other playback settings
      const savedLoop = localStorage.getItem('toeic_intensive_loop');
      if (savedLoop !== null) {
        setIsLooping(savedLoop === 'true');
      }

      const savedAutoAdvance = localStorage.getItem('toeic_intensive_autoadvance');
      if (savedAutoAdvance !== null) {
        setAutoAdvance(savedAutoAdvance === 'true');
      }

      const savedTab = localStorage.getItem('toeic_intensive_active_tab') as PracticeTab | null;
      if (savedTab && ['quiz', 'transcript', 'dictation'].includes(savedTab)) {
        setActiveTab(savedTab);
      }
    } catch (e) {
      console.error('Error loading intensive listening preferences', e);
    }
  }, []);

  const handleTabChange = (tab: PracticeTab) => {
    setActiveTab(tab);
    try {
      localStorage.setItem('toeic_intensive_active_tab', tab);
    } catch {}
  };

  // Handler: Change Test
  const handleSelectTest = (testId: number) => {
    if (testId === currentTestId) return;
    setCurrentTestId(testId);
    const newTestData = getIntensiveDataByTestId(testId);

    try {
      localStorage.setItem('toeic_intensive_current_test', String(testId));

      // Load saved item for the new test (câu đang làm dở của đề đó)
      const savedItemForTest = localStorage.getItem(`toeic_intensive_last_item_t${testId}`);
      let targetItem = newTestData[0];
      if (savedItemForTest && newTestData.some((i) => i.id === savedItemForTest)) {
        targetItem = newTestData.find((i) => i.id === savedItemForTest) || newTestData[0];
        setCurrentItemId(savedItemForTest);
      } else if (newTestData.length > 0) {
        setCurrentItemId(newTestData[0].id);
      }

      // Save global history
      if (targetItem) {
        const testInfo = availableIntensiveTests.find((t) => t.id === testId);
        const histData = {
          testId: testId,
          testTitle: testInfo?.title || `ETS TOEIC 2026 - Test ${testId}`,
          testShortTitle: testInfo?.shortTitle || `Test ${testId}`,
          itemId: targetItem.id,
          itemRange: targetItem.questionRange,
          itemTitle: targetItem.title,
          part: targetItem.part,
          updatedAt: Date.now(),
        };
        localStorage.setItem('toeic_intensive_global_history', JSON.stringify(histData));
      }

      // Load quiz results for the new test first
      const testResults = loadQuizResultsForTest(testId, newTestData);
      setQuizResults(testResults);

      // Load completed items for the new test
      const savedCompleted = localStorage.getItem(`toeic_intensive_completed_t${testId}`);
      if (savedCompleted && (testId === 1 || Object.keys(testResults).length > 0)) {
        setCompletedItems(JSON.parse(savedCompleted));
      } else {
        setCompletedItems({});
        try {
          if (testId > 1 && Object.keys(testResults).length === 0) {
            localStorage.removeItem(`toeic_intensive_completed_t${testId}`);
          }
        } catch {}
      }
    } catch (e) {
      console.error('Error switching test', e);
    }
  };

  // Handler: Select an item in current test
  const handleSelectItem = (id: string) => {
    setCurrentItemId(id);
    const targetItem = currentTestData.find((i) => i.id === id);
    try {
      localStorage.setItem('toeic_intensive_current_test', String(currentTestId));
      localStorage.setItem(`toeic_intensive_last_item_t${currentTestId}`, id);
      if (currentTestId === 1) {
        localStorage.setItem('toeic_intensive_last_item', id);
      }
      if (targetItem) {
        const histData = {
          testId: currentTestId,
          testTitle: activeTestInfo?.title || `ETS TOEIC 2026 - Test ${currentTestId}`,
          testShortTitle: activeTestInfo?.shortTitle || `Test ${currentTestId}`,
          itemId: id,
          itemRange: targetItem.questionRange,
          itemTitle: targetItem.title,
          part: targetItem.part,
          updatedAt: Date.now(),
        };
        localStorage.setItem('toeic_intensive_global_history', JSON.stringify(histData));
      }
    } catch (e) {}
  };

  const handleToggleLoop = () => {
    const nextVal = !isLooping;
    setIsLooping(nextVal);
    try {
      localStorage.setItem('toeic_intensive_loop', String(nextVal));
    } catch (e) {}
  };

  const handleToggleAutoAdvance = () => {
    const nextVal = !autoAdvance;
    setAutoAdvance(nextVal);
    try {
      localStorage.setItem('toeic_intensive_autoadvance', String(nextVal));
    } catch (e) {}
  };

  const markItemCompleted = (id: string) => {
    setCompletedItems((prev) => {
      const updated = { ...prev, [id]: true };
      try {
        localStorage.setItem(
          `toeic_intensive_completed_t${currentTestId}`,
          JSON.stringify(updated)
        );
        if (currentTestId === 1) {
          localStorage.setItem('toeic_intensive_completed', JSON.stringify(updated));
        }
      } catch (e) {}
      return updated;
    });
  };

  const handleRecordQuizResult = (itemId: string, correct: number, total: number) => {
    setQuizResults((prev) => {
      const isCorrect = total > 0 && correct === total;
      const updated: Record<string, QuizItemResult> = {
        ...prev,
        [itemId]: {
          correct,
          total,
          isCorrect,
          answeredAt: Date.now(),
        },
      };
      try {
        localStorage.setItem(
          `toeic_intensive_results_t${currentTestId}`,
          JSON.stringify(updated)
        );
      } catch (e) {}
      return updated;
    });

    // Mark as completed in the item progress
    markItemCompleted(itemId);
  };

  const handleResetQuizResult = (itemId: string) => {
    setQuizResults((prev) => {
      const updated = { ...prev };
      delete updated[itemId];
      try {
        localStorage.setItem(
          `toeic_intensive_results_t${currentTestId}`,
          JSON.stringify(updated)
        );
      } catch (e) {}
      return updated;
    });
  };

  const handleResetEntireTest = (testId: number) => {
    try {
      localStorage.removeItem(`toeic_intensive_completed_t${testId}`);
      if (testId === 1) {
        localStorage.removeItem('toeic_intensive_completed');
      }
      localStorage.removeItem(`toeic_intensive_results_t${testId}`);
      localStorage.removeItem(`toeic_intensive_last_item_t${testId}`);
      if (testId === 1) {
        localStorage.removeItem('toeic_intensive_last_item');
      }
      const keysToRemove: string[] = [];
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (!key) continue;
        if (key.startsWith(`toeic_intensive_quiz_t${testId}_`)) {
          keysToRemove.push(key);
        }
        if (testId === 1 && key.startsWith('toeic_intensive_quiz_part')) {
          keysToRemove.push(key);
        }
      }
      keysToRemove.forEach((k) => localStorage.removeItem(k));
    } catch {}

    if (testId === currentTestId) {
      setQuizResults({});
      setCompletedItems({});
      setStatusFilter('all');
      const testData = getIntensiveDataByTestId(testId);
      if (testData.length > 0) {
        setCurrentItemId(testData[0].id);
      }
      setActiveTab('quiz');
    }
  };

  const handleReviewWrong = () => {
    setIsResultModalOpen(false);
    setStatusFilter('wrong');
    // Find the first wrong item
    const firstWrong = currentTestData.find((item) => {
      const res = quizResults[item.id];
      return res && !res.isCorrect;
    });
    if (firstWrong) {
      handleSelectItem(firstWrong.id);
      setActiveTab('quiz');
    }
  };

  // Find current item and indices within active test
  const currentItemIndex = currentTestData.findIndex((i) => i.id === currentItemId);
  const currentItem: IntensiveListeningItem =
    currentTestData[currentItemIndex >= 0 ? currentItemIndex : 0] || currentTestData[0];

  const hasNext = currentItemIndex < currentTestData.length - 1;
  const hasPrev = currentItemIndex > 0;

  const handleNextItem = () => {
    if (hasNext) {
      handleSelectItem(currentTestData[currentItemIndex + 1].id);
    }
  };

  const handlePrevItem = () => {
    if (hasPrev) {
      handleSelectItem(currentTestData[currentItemIndex - 1].id);
    }
  };

  const completedCount = Object.keys(completedItems).length;
  const totalCount = currentTestData.length;
  const completionPercentage = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;
  const activeTestInfo = availableIntensiveTests.find((t) => t.id === currentTestId);

  const totalCorrectQuestions = Object.values(quizResults).reduce(
    (acc, res) => acc + (res?.correct || 0),
    0
  );
  const totalQuestionsInTest = currentTestData.reduce(
    (acc, item) => acc + item.questions.length,
    0
  );

  return (
    <div className="min-h-screen lg:h-screen lg:overflow-hidden bg-[#faf8f5] text-[#14362d] flex flex-col font-sans pb-16 lg:pb-0">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-30 bg-[#faf8f5]/85 backdrop-blur-md border-b border-[#14362d]/8 shadow-xs shrink-0">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 h-14 flex items-center justify-between gap-3 md:pr-36">
          {/* Left: Back & Title */}
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                try {
                  router.push('/');
                } catch {
                  window.location.href = '/';
                }
                setTimeout(() => {
                  if (typeof window !== 'undefined' && window.location.pathname !== '/') {
                    window.location.href = '/';
                  }
                }, 100);
              }}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-black text-[#14362d] bg-white hover:bg-gray-50 border border-[#14362d]/10 active:scale-95 transition-all shrink-0 cursor-pointer shadow-xs"
              title="Quay lại Trang chủ"
            >
              <ArrowLeft className="w-4 h-4 shrink-0" />
              <span>Trang chủ</span>
            </a>

            <div className="h-5 w-[1px] bg-gray-200 hidden sm:block shrink-0" />

            <div className="min-w-0 flex items-center gap-2">
              <span className="font-black text-sm sm:text-base text-[#213a34] truncate">
                Luyện nghe chi tiết
              </span>
              <span className="hidden md:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-[#eb6a52] text-white">
                STUDY4 Style
              </span>
            </div>
          </div>

          {/* Center / Header Test Selector & Question Indicator Button */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsTestSelectorOpen(true)}
              className="flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-[#213a34] text-white hover:bg-[#2c4e46] shadow-xs text-xs font-black transition-all group active:scale-95 cursor-pointer"
              title="Nhấn để mở danh sách 10 đề thi ETS 2026"
            >
              <span className="w-2 h-2 rounded-full bg-[#4ade80] animate-pulse" />
              <span>ETS 2026 · {activeTestInfo?.shortTitle || `Test ${currentTestId}`}</span>
              <span className="hidden sm:inline-flex px-1.5 py-0.5 rounded-md text-[10px] bg-white/10 text-[#f8d467]">
                10 Đề
              </span>
              <ChevronDown className="w-3.5 h-3.5 text-gray-300 group-hover:translate-y-0.5 transition-transform" />
            </button>

            {/* Current Item Indicator (Đang làm đến câu nào) */}
            <div className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#e9f2ed] text-[#213a34] border border-[#213a34]/15 text-xs font-black shadow-2xs">
              <span className="text-[#eb6a52]">📍</span>
              <span className="truncate max-w-[150px]">{currentItem?.questionRange}</span>
            </div>
          </div>

          {/* Right: Progress & Mobile Menu Toggle */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Score & Progress Pill (Desktop) */}
            <button
              type="button"
              onClick={() => setIsResultModalOpen(true)}
              className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f5f0e6] border border-[#213a34]/15 hover:border-emerald-600 hover:bg-emerald-50 cursor-pointer transition-all group shadow-2xs"
              title="Nhấn để xem bảng tổng kết kết quả chi tiết & quy đổi điểm TOEIC"
            >
              <Trophy className="w-4 h-4 text-amber-500 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-black text-[#213a34] group-hover:text-emerald-800">
                {totalCorrectQuestions}/{totalQuestionsInTest} câu đúng
              </span>
              <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-emerald-600 text-white shadow-2xs">
                Xem kết quả
              </span>
            </button>

            {/* Mobile Score / Result Button */}
            <button
              type="button"
              onClick={() => setIsResultModalOpen(true)}
              className="sm:hidden flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-emerald-600 text-white text-xs font-black shadow-xs active:scale-95 transition-all cursor-pointer"
              title="Xem bảng kết quả bài thi"
            >
              <Trophy className="w-3.5 h-3.5 text-amber-300" />
              <span>{totalCorrectQuestions}/{totalQuestionsInTest}</span>
            </button>

            {/* Mobile Open Sidebar Button */}
            <button
              type="button"
              onClick={() => setIsMobileSidebarOpen(true)}
              className="lg:hidden flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-[#213a34] text-white text-xs font-black shadow-xs active:scale-95 transition-all cursor-pointer"
            >
              <Menu className="w-4 h-4 text-[#f8d467]" />
              <span className="hidden xs:inline">DS Câu</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Layout Body */}
      <main className="flex-1 lg:overflow-hidden max-w-7xl w-full mx-auto p-2 sm:p-3 sm:px-6 flex gap-4">
        {/* Left Sidebar */}
        <IntensiveSidebar
          items={currentTestData}
          currentItemId={currentItem.id}
          onSelectItem={handleSelectItem}
          completedItems={completedItems}
          quizResults={quizResults}
          isOpenMobile={isMobileSidebarOpen}
          onCloseMobile={() => setIsMobileSidebarOpen(false)}
          currentTestId={currentTestId}
          onSelectTest={handleSelectTest}
          availableTests={availableIntensiveTests}
          onOpenTestSelector={() => setIsTestSelectorOpen(true)}
          onOpenResultModal={() => setIsResultModalOpen(true)}
          statusFilter={statusFilter}
          onStatusFilterChange={setStatusFilter}
        />

        {/* Right Study Area */}
        <div className="flex-1 min-w-0 h-full flex flex-col lg:overflow-hidden">
          {/* Pinned Audio Player & Tabs at top (Never scrolls away) */}
          <div className="shrink-0 mb-2.5 sticky top-14 lg:static z-20">
            <IntensiveAudioPlayer
              audioSrc={currentItem.audioSrc}
              title={currentItem.title}
              questionRange={currentItem.questionRange}
              part={currentItem.part}
              isLooping={isLooping}
              autoAdvance={autoAdvance}
              onToggleLoop={handleToggleLoop}
              onToggleAutoAdvance={handleToggleAutoAdvance}
              onNext={handleNextItem}
              onPrev={handlePrevItem}
              hasNext={hasNext}
              hasPrev={hasPrev}
              activeTab={activeTab}
              onChangeTab={handleTabChange}
            />
          </div>

          {/* Scrollable Content Container */}
          <div
            ref={studyAreaRef}
            className="flex-1 lg:overflow-y-auto pr-1 space-y-3.5 pb-6 scrollbar-thin"
          >
            {activeTab === 'quiz' && (
              <QuizTab
                key={`quiz-${currentTestId}-${currentItem.id}`}
                testId={currentTestId}
                itemId={currentItem.id}
                part={currentItem.part}
                imageUrl={currentItem.imageUrl || (currentItem as any).image || (currentItem as any).graphicImage}
                transcript={currentItem.transcript}
                questions={currentItem.questions}
                onCompleteItem={(score, total) => {
                  handleRecordQuizResult(currentItem.id, score, total);
                }}
                onResetItem={() => {
                  handleResetQuizResult(currentItem.id);
                }}
              />
            )}

            {activeTab === 'transcript' && (
              <TranscriptTab
                key={`trans-${currentTestId}-${currentItem.id}`}
                imageUrl={currentItem.imageUrl || (currentItem as any).image || (currentItem as any).graphicImage}
                transcript={currentItem.transcript}
                vocabulary={currentItem.vocabulary}
              />
            )}

            {activeTab === 'dictation' && (
              <DictationTab
                key={`dict-${currentTestId}-${currentItem.id}`}
                imageUrl={currentItem.imageUrl || (currentItem as any).image || (currentItem as any).graphicImage}
                transcript={currentItem.transcript}
                onCompleteItem={() => markItemCompleted(currentItem.id)}
              />
            )}

            {/* Compact Bottom Next/Prev Pagination Footer */}
            <div className="flex items-center justify-between p-2.5 sm:p-3 bg-white rounded-2xl border border-[#213a34]/12 shadow-2xs mt-3 gap-2">
              <button
                type="button"
                onClick={handlePrevItem}
                disabled={!hasPrev}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-black text-[#213a34] bg-[#e9f2ed] hover:bg-[#d5e5db] disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer shrink-0"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Bài trước</span>
              </button>

              <div className="flex items-center gap-2">
                <span className="hidden sm:inline text-xs font-bold text-gray-500">
                  {activeTestInfo?.shortTitle} · Bài {currentItemIndex + 1} / {totalCount}
                </span>

                <button
                  type="button"
                  onClick={() => setIsResultModalOpen(true)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-black text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300/80 transition-all cursor-pointer shadow-2xs"
                  title="Nhấn để mở bảng tổng kết kết quả đề thi"
                >
                  <Trophy className="w-3.5 h-3.5 text-amber-500" />
                  <span>Xem kết quả</span>
                </button>
              </div>

              {!hasNext ? (
                <button
                  type="button"
                  onClick={() => setIsResultModalOpen(true)}
                  className="flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-2 rounded-xl text-xs font-black text-white bg-gradient-to-r from-emerald-600 via-teal-600 to-[#213a34] hover:from-emerald-500 hover:to-[#2c4e46] shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:scale-95 cursor-pointer ring-2 ring-emerald-400/50 shrink-0"
                  title="Chúc mừng bạn đã hoàn thành câu hỏi cuối cùng! Nhấn để xem tổng kết điểm"
                >
                  <span>🎉 Hoàn thành bài thi</span>
                  <Trophy className="w-4 h-4 text-amber-300 animate-bounce" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleNextItem}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-black text-white bg-[#213a34] hover:bg-[#2c4e46] shadow-2xs transition-colors cursor-pointer shrink-0"
                >
                  <span>Bài tiếp</span>
                  <ChevronRight className="w-4 h-4 text-[#f8d467]" />
                </button>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Dedicated Test Selection Modal */}
      <TestSelectorModal
        isOpen={isTestSelectorOpen}
        onClose={() => setIsTestSelectorOpen(false)}
        currentTestId={currentTestId}
        onSelectTest={handleSelectTest}
        onResetTest={handleResetEntireTest}
      />

      {/* Test Result Summary Modal */}
      <TestResultModal
        isOpen={isResultModalOpen}
        onClose={() => setIsResultModalOpen(false)}
        currentTestId={currentTestId}
        testTitle={activeTestInfo?.title || `ETS TOEIC 2026 - Test ${currentTestId}`}
        items={currentTestData}
        quizResults={quizResults}
        onReviewWrong={handleReviewWrong}
        onResetTest={handleResetEntireTest}
        onOpenTestSelector={() => setIsTestSelectorOpen(true)}
      />
    </div>
  );
}
