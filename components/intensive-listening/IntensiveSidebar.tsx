'use client';

import { useState, useEffect, useRef } from 'react';
import type { IntensiveListeningItem, IntensiveTestOption } from '@/data/intensive_listening_index';
import type { PartFilter, QuizItemResult } from './types';
import {
  Search,
  CheckCircle2,
  XCircle,
  X,
  ChevronRight,
  Trophy,
  AlertCircle,
  Check,
  FileText,
} from 'lucide-react';

interface IntensiveSidebarProps {
  items: IntensiveListeningItem[];
  currentItemId: string;
  onSelectItem: (id: string) => void;
  completedItems: Record<string, boolean>;
  quizResults?: Record<string, QuizItemResult>;
  isOpenMobile: boolean;
  onCloseMobile: () => void;
  currentTestId?: number;
  onSelectTest?: (testId: number) => void;
  availableTests?: IntensiveTestOption[];
  onOpenTestSelector?: () => void;
  onOpenResultModal?: () => void;
  onOpenQuestionMap?: () => void;
  statusFilter?: 'all' | 'wrong' | 'correct';
  onStatusFilterChange?: (filter: 'all' | 'wrong' | 'correct') => void;
}

export function IntensiveSidebar({
  items,
  currentItemId,
  onSelectItem,
  completedItems,
  quizResults = {},
  isOpenMobile,
  onCloseMobile,
  currentTestId = 1,
  onSelectTest,
  availableTests,
  onOpenTestSelector,
  onOpenResultModal,
  onOpenQuestionMap,
  statusFilter: propStatusFilter,
  onStatusFilterChange,
}: IntensiveSidebarProps) {
  const [selectedPart, setSelectedPart] = useState<PartFilter>('all');
  const [internalStatusFilter, setInternalStatusFilter] = useState<'all' | 'wrong' | 'correct'>('all');
  const statusFilter = propStatusFilter !== undefined ? propStatusFilter : internalStatusFilter;

  const setStatusFilter = (newFilter: 'all' | 'wrong' | 'correct') => {
    if (onStatusFilterChange) {
      onStatusFilterChange(newFilter);
    }
    setInternalStatusFilter(newFilter);
  };

  const searchQueryRef = useRef('');
  const [searchQuery, setSearchQuery] = useState('');
  const activeItemRef = useRef<HTMLButtonElement | null>(null);

  // Auto-scroll active item into view
  useEffect(() => {
    if (activeItemRef.current) {
      activeItemRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      });
    }
  }, [currentItemId]);

  // Calculate question stats for each part
  const getPartStats = (partKey: 'all' | 1 | 2 | 3 | 4) => {
    const partItems = partKey === 'all' ? items : items.filter((i) => i.part === partKey);
    let totalQuestions = 0;
    let correctQuestions = 0;
    let attemptedQuestions = 0;
    let wrongItemsCount = 0;

    partItems.forEach((item) => {
      totalQuestions += item.questions.length;
      const res = quizResults[item.id];
      if (res) {
        correctQuestions += res.correct;
        attemptedQuestions += res.total;
        if (!res.isCorrect) {
          wrongItemsCount += 1;
        }
      }
    });

    return {
      totalQuestions,
      correctQuestions,
      attemptedQuestions,
      wrongItemsCount,
      percentage: totalQuestions > 0 ? Math.round((correctQuestions / totalQuestions) * 100) : 0,
    };
  };

  const allStats = getPartStats('all');
  const p1Stats = getPartStats(1);
  const p2Stats = getPartStats(2);
  const p3Stats = getPartStats(3);
  const p4Stats = getPartStats(4);

  // Filtering items by Part, Status (Wrong / Correct), and Search Query
  const filteredItems = items.filter((item) => {
    if (selectedPart !== 'all' && item.part !== selectedPart) {
      return false;
    }

    const res = quizResults[item.id];
    if (statusFilter === 'wrong') {
      if (!res || res.isCorrect) return false;
    } else if (statusFilter === 'correct') {
      if (!res || !res.isCorrect) return false;
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      const inRange = item.questionRange.toLowerCase().includes(q);
      const inTitle = item.title.toLowerCase().includes(q);
      return inRange || inTitle;
    }
    return true;
  });

  const parts = [
    { key: 'all', label: 'Tất cả', stats: allStats },
    { key: 1, label: 'Part 1', stats: p1Stats },
    { key: 2, label: 'Part 2', stats: p2Stats },
    { key: 3, label: 'Part 3', stats: p3Stats },
    { key: 4, label: 'Part 4', stats: p4Stats },
  ];

  const getPartBadge = (part: number) => {
    switch (part) {
      case 1:
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 2:
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 3:
        return 'bg-amber-100 text-amber-800 border-amber-200';
      case 4:
        return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const currentTest = availableTests?.find((t) => t.id === currentTestId);

  const content = (
    <div className="flex flex-col h-full bg-white sm:rounded-3xl border-2 border-[#213a34]/10 shadow-sm overflow-hidden">
      {/* Sidebar Header */}
      <div className="p-3.5 sm:p-4 border-b border-[#213a34]/10 bg-[#f5f0e6]/50 space-y-2.5">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-[#213a34] text-[#f8d467] flex items-center justify-center font-black text-xs">
              🎧
            </span>
            <div>
              <h2 className="font-black text-[#213a34] text-xs sm:text-sm leading-tight">
                {currentTest ? currentTest.title : `ETS 2026 - Test ${currentTestId}`}
              </h2>
              <span className="text-[10px] text-gray-500 font-bold">
                {allStats.correctQuestions}/{allStats.totalQuestions} câu đúng ({allStats.percentage}%)
              </span>
            </div>
          </div>

          {/* Mobile close button */}
          <button
            type="button"
            onClick={onCloseMobile}
            className="sm:hidden p-1 rounded-lg text-gray-500 hover:text-[#213a34]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Test Selector Dropdown Button */}
        {availableTests && onOpenTestSelector && (
          <button
            type="button"
            onClick={onOpenTestSelector}
            className="w-full flex items-center justify-between p-2 rounded-xl bg-white border border-[#213a34]/15 hover:border-[#213a34]/35 hover:bg-[#e9f2ed]/50 transition-all shadow-2xs group text-left cursor-pointer"
          >
            <div className="flex items-center gap-2 min-w-0">
              <div className="w-auto min-w-[24px] px-1.5 h-6 rounded-md bg-[#213a34] text-[#f8d467] flex items-center justify-center text-[10px] font-black shrink-0">
                {currentTest?.badge || `T${currentTestId}`}
              </div>
              <div className="text-xs font-black text-[#213a34] truncate">
                {currentTest ? currentTest.title : `ETS 2026 - Test ${currentTestId}`}
              </div>
            </div>
            <div className="flex items-center gap-1 text-[11px] font-black text-[#eb6a52] shrink-0">
              <span>Đổi đề</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </div>
          </button>
        )}

        {/* Shortcut to full test in /listening-test */}
        <a
          href={`/listening-test/${
            currentTestId >= 20231 && currentTestId <= 202310
              ? `2023-${currentTestId - 20230}`
              : currentTestId >= 20241 && currentTestId <= 202410
              ? `2024-${currentTestId - 20240}`
              : String(currentTestId)
          }`}
          className="w-full flex items-center justify-between px-2.5 py-1.5 rounded-xl bg-white/70 hover:bg-white text-[#213a34] border border-[#213a34]/15 hover:border-[#213a34]/30 text-[11px] font-bold transition-all shadow-2xs group/full"
          title="Làm bài thi trắc nghiệm bấm giờ (100 câu + PDF) của đề này"
        >
          <div className="flex items-center gap-1.5">
            <FileText className="w-3.5 h-3.5 text-[#b45309]" />
            <span>Làm full đề (100 câu + PDF)</span>
          </div>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400 group-hover/full:translate-x-0.5 transition-transform" />
        </a>

        {/* STATS SCOREBOARD: Đếm số câu đúng từng Part */}
        <div
          onClick={onOpenResultModal}
          className={`p-2 rounded-xl bg-white border border-[#213a34]/12 shadow-2xs space-y-1.5 ${
            onOpenResultModal ? 'cursor-pointer hover:border-emerald-500 hover:shadow-xs transition-all group' : ''
          }`}
          title="Nhấn để xem bảng tổng kết kết quả & quy đổi TOEIC"
        >
          <div className="flex items-center justify-between text-[11px] font-black text-[#213a34]">
            <span className="flex items-center gap-1 group-hover:text-emerald-800 transition-colors">
              <Trophy className="w-3 h-3 text-amber-500" />
              <span>Số câu đúng từng Part:</span>
            </span>
            <span className="text-emerald-700 font-bold group-hover:underline flex items-center gap-0.5">
              <span>{allStats.correctQuestions}/{allStats.totalQuestions}</span>
              <span className="text-[10px] text-gray-400 group-hover:text-emerald-700">&rarr;</span>
            </span>
          </div>

          <div className="grid grid-cols-4 gap-1 text-center">
            <div className="p-1 rounded-lg bg-purple-50/70 border border-purple-200/60">
              <div className="text-[9px] font-extrabold text-purple-800">Part 1</div>
              <div className="text-[11px] font-black text-purple-950">
                {p1Stats.correctQuestions}/{p1Stats.totalQuestions}
              </div>
            </div>
            <div className="p-1 rounded-lg bg-blue-50/70 border border-blue-200/60">
              <div className="text-[9px] font-extrabold text-blue-800">Part 2</div>
              <div className="text-[11px] font-black text-blue-950">
                {p2Stats.correctQuestions}/{p2Stats.totalQuestions}
              </div>
            </div>
            <div className="p-1 rounded-lg bg-amber-50/70 border border-amber-200/60">
              <div className="text-[9px] font-extrabold text-amber-800">Part 3</div>
              <div className="text-[11px] font-black text-amber-950">
                {p3Stats.correctQuestions}/{p3Stats.totalQuestions}
              </div>
            </div>
            <div className="p-1 rounded-lg bg-emerald-50/70 border border-emerald-200/60">
              <div className="text-[9px] font-extrabold text-emerald-800">Part 4</div>
              <div className="text-[11px] font-black text-emerald-950">
                {p4Stats.correctQuestions}/{p4Stats.totalQuestions}
              </div>
            </div>
          </div>
        </div>

        {/* Search Input */}
        <div className="relative">
          <Search className="w-3.5 h-3.5 text-gray-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Tìm theo số câu (ví dụ: 15, 32)..."
            className="w-full pl-8 pr-7 py-1.5 rounded-xl bg-white border border-[#213a34]/15 text-xs text-[#213a34] placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#213a34]/20"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <X className="w-3 h-3" />
            </button>
          )}
        </div>

        {/* Part Filters Pills */}
        <div className="flex items-center gap-1 overflow-x-auto pb-0.5 scrollbar-none">
          {parts.map((p) => {
            const isSelected = selectedPart === p.key;
            return (
              <button
                key={p.key}
                type="button"
                onClick={() => setSelectedPart(p.key as PartFilter)}
                className={`px-2 py-1 rounded-lg text-xs font-black whitespace-nowrap transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#213a34] text-white shadow-2xs'
                    : 'bg-white text-gray-600 hover:bg-[#e9f2ed] hover:text-[#213a34] border border-[#213a34]/10'
                }`}
              >
                {p.label}
                <span className="ml-1 text-[10px] opacity-80">
                  ({p.stats.correctQuestions}/{p.stats.totalQuestions})
                </span>
              </button>
            );
          })}
        </div>

        {/* Status Quick Filters (Tất cả / Chỉ xem câu sai) */}
        {allStats.attemptedQuestions > 0 && (
          <div className="flex items-center gap-1.5 pt-0.5">
            <button
              type="button"
              onClick={() => setStatusFilter('all')}
              className={`px-2 py-0.5 rounded-md text-[10px] font-black transition-all cursor-pointer ${
                statusFilter === 'all'
                  ? 'bg-gray-800 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Tất cả ({items.length})
            </button>

            {allStats.wrongItemsCount > 0 && (
              <button
                type="button"
                onClick={() => setStatusFilter(statusFilter === 'wrong' ? 'all' : 'wrong')}
                className={`flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-black transition-all cursor-pointer ${
                  statusFilter === 'wrong'
                    ? 'bg-rose-600 text-white ring-1 ring-rose-400'
                    : 'bg-rose-100 text-rose-700 hover:bg-rose-200'
                }`}
              >
                <XCircle className="w-3 h-3" />
                <span>Câu sai ({allStats.wrongItemsCount})</span>
              </button>
            )}

            <button
              type="button"
              onClick={() => setStatusFilter(statusFilter === 'correct' ? 'all' : 'correct')}
              className={`flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-black transition-all cursor-pointer ${
                statusFilter === 'correct'
                  ? 'bg-emerald-700 text-white ring-1 ring-emerald-500'
                  : 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200'
              }`}
            >
              <Check className="w-3 h-3" />
              <span>Câu đúng</span>
            </button>
          </div>
        )}
      </div>

      {/* List of items */}
      <div className="flex-1 overflow-y-auto divide-y divide-gray-100 p-2 space-y-1 scrollbar-thin">
        {filteredItems.length === 0 ? (
          <div className="p-8 text-center text-xs text-gray-400 font-bold">
            {statusFilter === 'wrong'
              ? 'Tuyệt vời! Không có câu nào làm sai trong mục này. 🎉'
              : 'Không tìm thấy bài nghe phù hợp.'}
          </div>
        ) : (
          filteredItems.map((item) => {
            const isSelected = item.id === currentItemId;
            const res = quizResults[item.id];
            const hasAttempted = Boolean(res);
            const isCorrect = Boolean(res?.isCorrect);
            const isWrong = hasAttempted && !isCorrect;

            // Item card styling
            let cardStyle = 'hover:bg-[#f5f0e6]/70 text-[#213a34] border border-transparent';
            if (isSelected) {
              cardStyle = 'bg-[#213a34] text-white shadow-md ring-2 ring-[#213a34]/30';
            } else if (isWrong) {
              // CÂU LÀM SAI: HIỆN MÀU ĐỎ RỰC RỠ NỔI BẬT!
              cardStyle = 'bg-rose-50/80 hover:bg-rose-100 text-rose-950 border-2 border-rose-300 shadow-2xs';
            } else if (isCorrect) {
              cardStyle = 'bg-emerald-50/40 hover:bg-emerald-50 text-[#213a34] border border-emerald-200/50';
            }

            return (
              <button
                key={item.id}
                ref={isSelected ? activeItemRef : null}
                type="button"
                onClick={() => {
                  onSelectItem(item.id);
                  onCloseMobile();
                }}
                className={`w-full text-left p-2.5 rounded-xl sm:rounded-2xl transition-all flex items-center gap-2.5 cursor-pointer ${cardStyle}`}
              >
                {/* Status Icon */}
                <div className="shrink-0 flex items-center justify-center">
                  {isWrong ? (
                    // SAI: Hiện X đỏ
                    <XCircle
                      className={`w-4 h-4 ${
                        isSelected ? 'text-rose-300 fill-rose-900/40' : 'text-rose-600 fill-rose-100'
                      }`}
                    />
                  ) : isCorrect ? (
                    // ĐÚNG: Hiện check xanh
                    <CheckCircle2
                      className={`w-4 h-4 ${
                        isSelected ? 'text-[#f8d467]' : 'text-emerald-500 fill-emerald-100'
                      }`}
                    />
                  ) : (
                    // Chưa làm: vòng tròn xám
                    <div
                      className={`w-4 h-4 rounded-full border-2 ${
                        isSelected ? 'border-white/40' : 'border-gray-300'
                      }`}
                    />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0 flex items-center justify-between gap-1.5">
                  <div className="flex items-center gap-1.5 min-w-0">
                    <span
                      className={`px-1.5 py-0.5 rounded text-[10px] font-black uppercase tracking-wider border ${
                        isSelected
                          ? 'bg-white/20 text-[#f8d467] border-white/20'
                          : isWrong
                          ? 'bg-rose-100 text-rose-800 border-rose-200'
                          : getPartBadge(item.part)
                      }`}
                    >
                      P{item.part}
                    </span>
                    <span
                      className={`text-xs font-black truncate ${
                        isSelected
                          ? 'text-white'
                          : isWrong
                          ? 'text-rose-950 font-black'
                          : 'text-[#213a34]'
                      }`}
                    >
                      {item.questionRange}
                    </span>
                  </div>

                  {/* Status Badges on right */}
                  <div className="flex items-center gap-1 shrink-0">
                    {/* Wrong Badge */}
                    {isWrong && !isSelected && (
                      <span className="px-1.5 py-0.5 rounded text-[10px] font-black bg-rose-600 text-white shadow-2xs">
                        {item.questions.length > 1
                          ? `${res.correct}/${res.total} đúng`
                          : 'Sai'}
                      </span>
                    )}

                    {/* Correct Badge */}
                    {isCorrect && !isSelected && (
                      <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800">
                        {item.questions.length > 1 ? `${res.total}/${res.total}` : 'Đúng'}
                      </span>
                    )}

                    {/* Active playing indicator */}
                    {isSelected && (
                      <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full text-[10px] font-black bg-[#f8d467] text-[#213a34] shrink-0">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#213a34] animate-pulse" />
                        Đang làm
                      </span>
                    )}
                  </div>
                </div>
              </button>
            );
          })
        )}
      </div>

      {/* Sticky Bottom Result & Question Map Buttons */}
      {(onOpenResultModal || onOpenQuestionMap) && (
        <div className="p-2.5 border-t border-[#213a34]/10 bg-[#f5f0e6]/60 shrink-0 flex flex-col gap-1.5">
          {onOpenResultModal && (
            <button
              type="button"
              onClick={onOpenResultModal}
              className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-[#213a34] hover:bg-[#2c4e46] text-white text-xs font-black shadow-xs transition-all active:scale-95 cursor-pointer"
            >
              <Trophy className="w-4 h-4 text-amber-300" />
              <span>Xem bảng kết quả ({allStats.correctQuestions}/{allStats.totalQuestions})</span>
            </button>
          )}
          {onOpenQuestionMap && (
            <button
              type="button"
              onClick={onOpenQuestionMap}
              className="w-full flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 text-emerald-900 text-xs font-black shadow-2xs transition-all active:scale-95 cursor-pointer"
              title="Xem bản đồ câu hỏi và phổ đáp án chi tiết"
            >
              <span>🗺️</span>
              <span>Bản đồ câu hỏi (Phổ đáp án)</span>
            </button>
          )}
        </div>
      )}
    </div>
  );

  return (
    <>
      {/* Desktop Persistent Sidebar */}
      <aside className="hidden lg:block w-72 xl:w-80 shrink-0 h-full overflow-hidden">
        {content}
      </aside>

      {/* Mobile Slide-over Drawer */}
      {isOpenMobile && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
            onClick={onCloseMobile}
          />

          {/* Drawer Panel */}
          <div className="relative ml-auto w-full max-w-sm bg-white h-full shadow-2xl flex flex-col z-10 animate-in slide-in-from-right duration-200">
            {content}
          </div>
        </div>
      )}
    </>
  );
}
