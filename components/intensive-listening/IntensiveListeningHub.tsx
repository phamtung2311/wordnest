'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  availableIntensiveTests,
  getIntensiveDataByTestId,
} from '@/data/intensive_listening_index';
import type { IntensiveListeningItem } from '@/data/intensive_listening_index';
import type { PracticeTab } from './types';
import { IntensiveSidebar } from './IntensiveSidebar';
import { IntensiveAudioPlayer } from './IntensiveAudioPlayer';
import { QuizTab } from './QuizTab';
import { TranscriptTab } from './TranscriptTab';
import { DictationTab } from './DictationTab';
import { TestSelectorModal } from './TestSelectorModal';
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

export function IntensiveListeningHub() {
  const router = useRouter();

  // Test Selection state (Test 1 to 10)
  const [currentTestId, setCurrentTestId] = useState<number>(1);
  const [isTestSelectorOpen, setIsTestSelectorOpen] = useState<boolean>(false);
  const currentTestData = getIntensiveDataByTestId(currentTestId);

  // Item & practice State
  const [currentItemId, setCurrentItemId] = useState<string>(
    currentTestData[0]?.id || 'part1-1'
  );
  const [activeTab, setActiveTab] = useState<PracticeTab>('quiz');
  const [isLooping, setIsLooping] = useState<boolean>(false);
  const [autoAdvance, setAutoAdvance] = useState<boolean>(true);
  const [completedItems, setCompletedItems] = useState<Record<string, boolean>>({});
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);

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

      // 3. Load completed items for that test
      const savedCompleted =
        localStorage.getItem(`toeic_intensive_completed_t${initialTestId}`) ||
        (initialTestId === 1 ? localStorage.getItem('toeic_intensive_completed') : null);

      if (savedCompleted) {
        setCompletedItems(JSON.parse(savedCompleted));
      } else {
        setCompletedItems({});
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
    } catch (e) {
      console.error('Error loading intensive listening preferences', e);
    }
  }, []);

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

      // Load completed items for the new test
      const savedCompleted = localStorage.getItem(`toeic_intensive_completed_t${testId}`);
      if (savedCompleted) {
        setCompletedItems(JSON.parse(savedCompleted));
      } else {
        setCompletedItems({});
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

  return (
    <div className="min-h-screen bg-[#f5f0e6] text-[#213a34] flex flex-col font-sans">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b-2 border-[#213a34]/10 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-3">
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
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-black text-[#213a34] bg-[#e9f2ed] hover:bg-[#d5e5db] active:scale-95 transition-all shrink-0 cursor-pointer shadow-2xs"
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
            {/* Progress Pill */}
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#f5f0e6] border border-[#213a34]/10">
              <Trophy className="w-4 h-4 text-amber-500" />
              <span className="text-xs font-black text-[#213a34]">
                {completedCount}/{totalCount} ({completionPercentage}%)
              </span>
            </div>

            {/* Mobile Open Sidebar Button */}
            <button
              type="button"
              onClick={() => setIsMobileSidebarOpen(true)}
              className="lg:hidden flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#213a34] text-white text-xs font-black shadow-xs active:scale-95 transition-all"
            >
              <Menu className="w-4 h-4 text-[#f8d467]" />
              <span>{activeTestInfo?.shortTitle} ({completedCount}/{totalCount})</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Layout Body */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-3 sm:p-6 flex gap-6">
        {/* Left Sidebar */}
        <IntensiveSidebar
          items={currentTestData}
          currentItemId={currentItem.id}
          onSelectItem={handleSelectItem}
          completedItems={completedItems}
          isOpenMobile={isMobileSidebarOpen}
          onCloseMobile={() => setIsMobileSidebarOpen(false)}
          currentTestId={currentTestId}
          onSelectTest={handleSelectTest}
          availableTests={availableIntensiveTests}
          onOpenTestSelector={() => setIsTestSelectorOpen(true)}
        />

        {/* Right Study Area */}
        <div className="flex-1 min-w-0 space-y-5">
          {/* Audio Player Card */}
          <IntensiveAudioPlayer
            audioSrc={currentItem.audioSrc}
            title={currentItem.title}
            questionRange={currentItem.questionRange}
            isLooping={isLooping}
            autoAdvance={autoAdvance}
            onToggleLoop={handleToggleLoop}
            onToggleAutoAdvance={handleToggleAutoAdvance}
            onNext={handleNextItem}
            onPrev={handlePrevItem}
            hasNext={hasNext}
            hasPrev={hasPrev}
          />

          {/* 3 Practice Mode Tabs Switcher */}
          <div className="flex items-center gap-1.5 p-1.5 bg-white rounded-2xl border-2 border-[#213a34]/10 shadow-xs">
            <button
              type="button"
              onClick={() => setActiveTab('quiz')}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-black transition-all ${
                activeTab === 'quiz'
                  ? 'bg-[#213a34] text-white shadow-sm'
                  : 'text-gray-600 hover:text-[#213a34] hover:bg-[#e9f2ed]'
              }`}
            >
              <PenTool className="w-4 h-4 text-[#f8d467]" />
              <span>1. Làm trắc nghiệm</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('transcript')}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-black transition-all ${
                activeTab === 'transcript'
                  ? 'bg-[#213a34] text-white shadow-sm'
                  : 'text-gray-600 hover:text-[#213a34] hover:bg-[#e9f2ed]'
              }`}
            >
              <MessageSquare className="w-4 h-4 text-[#f8d467]" />
              <span>2. Lời thoại & Dịch</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('dictation')}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-black transition-all ${
                activeTab === 'dictation'
                  ? 'bg-[#213a34] text-white shadow-sm'
                  : 'text-gray-600 hover:text-[#213a34] hover:bg-[#e9f2ed]'
              }`}
            >
              <Headphones className="w-4 h-4 text-[#f8d467]" />
              <span>3. Chép chính tả</span>
            </button>
          </div>

          {/* Active Tab View */}
          <div className="min-h-[400px]">
            {activeTab === 'quiz' && (
              <QuizTab
                key={`quiz-${currentTestId}-${currentItem.id}`}
                itemId={currentItem.id}
                part={currentItem.part}
                imageUrl={currentItem.imageUrl || (currentItem as any).image || (currentItem as any).graphicImage}
                transcript={currentItem.transcript}
                questions={currentItem.questions}
                onCompleteItem={(score, total) => {
                  if (score / total >= 0.6) {
                    markItemCompleted(currentItem.id);
                  }
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
          </div>

          {/* Bottom Next/Prev Pagination Footer */}
          <div className="flex items-center justify-between p-4 bg-white rounded-2xl border-2 border-[#213a34]/10 shadow-xs">
            <button
              type="button"
              onClick={handlePrevItem}
              disabled={!hasPrev}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-black text-[#213a34] bg-[#e9f2ed] hover:bg-[#d5e5db] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Bài trước</span>
            </button>

            <div className="text-xs font-bold text-gray-500">
              {activeTestInfo?.shortTitle} · Bài {currentItemIndex + 1} / {totalCount}
            </div>

            <button
              type="button"
              onClick={handleNextItem}
              disabled={!hasNext}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-black text-white bg-[#213a34] hover:bg-[#2c4e46] disabled:opacity-40 disabled:cursor-not-allowed shadow-xs transition-colors"
            >
              <span>Bài tiếp</span>
              <ChevronRight className="w-4 h-4 text-[#f8d467]" />
            </button>
          </div>
        </div>
      </main>

      {/* Dedicated Test Selection Modal */}
      <TestSelectorModal
        isOpen={isTestSelectorOpen}
        onClose={() => setIsTestSelectorOpen(false)}
        currentTestId={currentTestId}
        onSelectTest={handleSelectTest}
      />
    </div>
  );
}
