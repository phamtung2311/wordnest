'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  test1IntensiveData,
  getIntensiveItemById,
} from '@/data/intensive_listening_test1';
import type { PracticeTab } from './types';
import { IntensiveSidebar } from './IntensiveSidebar';
import { IntensiveAudioPlayer } from './IntensiveAudioPlayer';
import { QuizTab } from './QuizTab';
import { TranscriptTab } from './TranscriptTab';
import { DictationTab } from './DictationTab';
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
  Sparkles,
  Trophy,
} from 'lucide-react';

export function IntensiveListeningHub() {
  const router = useRouter();

  // State
  const [currentItemId, setCurrentItemId] = useState<string>(
    test1IntensiveData[0]?.id || 'part1-1'
  );
  const [activeTab, setActiveTab] = useState<PracticeTab>('quiz');
  const [isLooping, setIsLooping] = useState<boolean>(false);
  const [autoAdvance, setAutoAdvance] = useState<boolean>(true);
  const [completedItems, setCompletedItems] = useState<Record<string, boolean>>({});
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);

  // Load saved preferences from localStorage
  useEffect(() => {
    setMounted(true);
    try {
      const savedLastItem = localStorage.getItem('toeic_intensive_last_item');
      if (savedLastItem && getIntensiveItemById(savedLastItem)) {
        setCurrentItemId(savedLastItem);
      }

      const savedCompleted = localStorage.getItem('toeic_intensive_completed');
      if (savedCompleted) {
        setCompletedItems(JSON.parse(savedCompleted));
      }

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

  // Save current item
  const handleSelectItem = (id: string) => {
    setCurrentItemId(id);
    try {
      localStorage.setItem('toeic_intensive_last_item', id);
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
        localStorage.setItem('toeic_intensive_completed', JSON.stringify(updated));
      } catch (e) {}
      return updated;
    });
  };

  // Find current item and indices
  const currentItemIndex = test1IntensiveData.findIndex((i) => i.id === currentItemId);
  const currentItem = test1IntensiveData[currentItemIndex] || test1IntensiveData[0];

  const hasNext = currentItemIndex < test1IntensiveData.length - 1;
  const hasPrev = currentItemIndex > 0;

  const handleNextItem = () => {
    if (hasNext) {
      handleSelectItem(test1IntensiveData[currentItemIndex + 1].id);
    }
  };

  const handlePrevItem = () => {
    if (hasPrev) {
      handleSelectItem(test1IntensiveData[currentItemIndex - 1].id);
    }
  };

  const completedCount = Object.keys(completedItems).length;
  const totalCount = test1IntensiveData.length;
  const completionPercentage = Math.round((completedCount / totalCount) * 100);

  return (
    <div className="min-h-screen bg-[#f5f0e6] text-[#213a34] flex flex-col font-sans">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b-2 border-[#213a34]/10 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-3">
          {/* Left: Back & Title */}
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <Link
              href="/"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-black text-[#213a34] bg-[#e9f2ed] hover:bg-[#d5e5db] transition-colors shrink-0"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Trang chủ</span>
            </Link>

            <div className="h-5 w-[1px] bg-gray-200 hidden sm:block shrink-0" />

            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="font-black text-sm sm:text-base text-[#213a34] truncate">
                  Luyện nghe chi tiết
                </span>
                <span className="hidden md:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-[#eb6a52] text-white">
                  STUDY4 Style
                </span>
              </div>
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
              <span>Danh sách ({completedCount}/{totalCount})</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Layout Body */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-3 sm:p-6 flex gap-6">
        {/* Left Sidebar */}
        <IntensiveSidebar
          items={test1IntensiveData}
          currentItemId={currentItemId}
          onSelectItem={handleSelectItem}
          completedItems={completedItems}
          isOpenMobile={isMobileSidebarOpen}
          onCloseMobile={() => setIsMobileSidebarOpen(false)}
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
                key={`quiz-${currentItem.id}`}
                itemId={currentItem.id}
                part={currentItem.part}
                imageUrl={currentItem.imageUrl}
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
                key={`trans-${currentItem.id}`}
                imageUrl={currentItem.imageUrl}
                transcript={currentItem.transcript}
                vocabulary={currentItem.vocabulary}
              />
            )}

            {activeTab === 'dictation' && (
              <DictationTab
                key={`dict-${currentItem.id}`}
                imageUrl={currentItem.imageUrl}
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
              Bài {currentItemIndex + 1} / {totalCount}
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
    </div>
  );
}
