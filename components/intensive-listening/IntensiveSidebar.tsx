'use client';

import { useState, useEffect, useRef } from 'react';
import type { IntensiveListeningItem, IntensiveTestOption } from '@/data/intensive_listening_index';
import type { PartFilter } from './types';
import {
  Search,
  CheckCircle2,
  Headphones,
  X,
  Sparkles,
  BookMarked,
  Filter,
  ChevronRight,
  ChevronDown,
} from 'lucide-react';

interface IntensiveSidebarProps {
  items: IntensiveListeningItem[];
  currentItemId: string;
  onSelectItem: (id: string) => void;
  completedItems: Record<string, boolean>;
  isOpenMobile: boolean;
  onCloseMobile: () => void;
  currentTestId?: number;
  onSelectTest?: (testId: number) => void;
  availableTests?: IntensiveTestOption[];
  onOpenTestSelector?: () => void;
}

export function IntensiveSidebar({
  items,
  currentItemId,
  onSelectItem,
  completedItems,
  isOpenMobile,
  onCloseMobile,
  currentTestId = 1,
  onSelectTest,
  availableTests,
  onOpenTestSelector,
}: IntensiveSidebarProps) {
  const [selectedPart, setSelectedPart] = useState<PartFilter>('all');
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

  // Filtering
  const filteredItems = items.filter((item) => {
    if (selectedPart !== 'all' && item.part !== selectedPart) {
      return false;
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
    { key: 'all', label: 'Tất cả', count: items.length },
    { key: 1, label: 'Part 1', count: items.filter((i) => i.part === 1).length },
    { key: 2, label: 'Part 2', count: items.filter((i) => i.part === 2).length },
    { key: 3, label: 'Part 3', count: items.filter((i) => i.part === 3).length },
    { key: 4, label: 'Part 4', count: items.filter((i) => i.part === 4).length },
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

  const completedCount = Object.keys(completedItems).length;
  const currentTest = availableTests?.find((t) => t.id === currentTestId);

  const content = (
    <div className="flex flex-col h-full bg-white sm:rounded-3xl border-2 border-[#213a34]/10 shadow-sm overflow-hidden">
      {/* Sidebar Header */}
      <div className="p-4 sm:p-5 border-b border-[#213a34]/10 bg-[#f5f0e6]/50">
        <div className="flex items-center justify-between gap-2 mb-2">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-xl bg-[#213a34] text-[#f8d467] flex items-center justify-center font-black text-sm">
              🎧
            </span>
            <div>
              <h2 className="font-black text-[#213a34] text-sm sm:text-base leading-tight">
                {currentTest ? currentTest.title : `ETS 2026 - Test ${currentTestId}`}
              </h2>
              <span className="text-[11px] text-gray-500 font-bold">
                Luyện nghe chi tiết ({completedCount}/{items.length} bài)
              </span>
            </div>
          </div>

          {/* Mobile close button */}
          <button
            type="button"
            onClick={onCloseMobile}
            className="sm:hidden p-1.5 rounded-xl text-gray-500 hover:text-[#213a34] hover:bg-[#e9f2ed]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Test Selector Button & Quick Chips */}
        {availableTests && (
          <div className="mt-3 space-y-2">
            {onOpenTestSelector && (
              <button
                type="button"
                onClick={onOpenTestSelector}
                className="w-full flex items-center justify-between p-2.5 rounded-2xl bg-white border border-[#213a34]/15 hover:border-[#213a34]/35 hover:bg-[#e9f2ed]/50 transition-all shadow-2xs group text-left"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-8 h-8 rounded-xl bg-[#213a34] text-[#f8d467] flex items-center justify-center text-xs font-black shrink-0">
                    T{currentTestId}
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-black text-[#213a34] truncate">
                      {currentTest ? currentTest.title : `ETS 2026 - Test ${currentTestId}`}
                    </div>
                    <div className="text-[10px] text-gray-500 font-bold">
                      Nhấn để chọn trong 10 đề thi
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-xs font-black text-[#eb6a52] shrink-0 group-hover:translate-x-0.5 transition-transform">
                  <span>Đổi đề</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </button>
            )}

            {/* Quick Test Chips (10 Tests horizontal scroll) */}
            {onSelectTest && (
              <div className="flex items-center gap-1.5 overflow-x-auto py-1 scrollbar-none">
                {availableTests.map((t) => {
                  const isSelected = t.id === currentTestId;
                  return (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => onSelectTest(t.id)}
                      className={`px-2.5 py-1 rounded-lg text-xs font-black whitespace-nowrap transition-all shrink-0 ${
                        isSelected
                          ? 'bg-[#213a34] text-[#f8d467] shadow-xs'
                          : 'bg-white/80 text-gray-600 hover:text-[#213a34] hover:bg-white border border-[#213a34]/10'
                      }`}
                    >
                      {t.shortTitle}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* Search Input */}
        <div className="relative mt-3">
          <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Tìm theo số câu, chủ đề..."
            className="w-full pl-9 pr-3 py-1.5 rounded-xl bg-white border border-[#213a34]/15 text-xs text-[#213a34] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#213a34]/15"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Part Filters Pills */}
        <div className="flex items-center gap-1 overflow-x-auto pb-1 mt-3 scrollbar-none">
          {parts.map((p) => {
            const isSelected = selectedPart === p.key;
            return (
              <button
                key={p.key}
                type="button"
                onClick={() => setSelectedPart(p.key as PartFilter)}
                className={`px-2.5 py-1 rounded-lg text-xs font-black whitespace-nowrap transition-all ${
                  isSelected
                    ? 'bg-[#213a34] text-white shadow-xs'
                    : 'bg-white/80 text-gray-600 hover:bg-[#e9f2ed] hover:text-[#213a34]'
                }`}
              >
                {p.label} <span className="opacity-70 text-[10px]">({p.count})</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* List of items */}
      <div className="flex-1 overflow-y-auto divide-y divide-gray-100 p-2 space-y-1">
        {filteredItems.length === 0 ? (
          <div className="p-8 text-center text-xs text-gray-400 font-bold">
            Không tìm thấy bài nghe phù hợp.
          </div>
        ) : (
          filteredItems.map((item, index) => {
            const isSelected = item.id === currentItemId;
            const isDone = completedItems[item.id];

            return (
              <button
                key={item.id}
                ref={isSelected ? activeItemRef : null}
                type="button"
                onClick={() => {
                  onSelectItem(item.id);
                  onCloseMobile();
                }}
                className={`w-full text-left p-2.5 rounded-xl sm:rounded-2xl transition-all flex items-center gap-2.5 cursor-pointer ${
                  isSelected
                    ? 'bg-[#213a34] text-white shadow-md ring-2 ring-[#213a34]/30'
                    : 'hover:bg-[#f5f0e6]/70 text-[#213a34]'
                }`}
              >
                {/* Status Icon */}
                <div className="shrink-0 flex items-center justify-center">
                  {isDone ? (
                    <CheckCircle2
                      className={`w-4 h-4 ${
                        isSelected ? 'text-[#f8d467]' : 'text-emerald-500'
                      }`}
                    />
                  ) : (
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
                          : getPartBadge(item.part)
                      }`}
                    >
                      P{item.part}
                    </span>
                    <span
                      className={`text-xs font-black truncate ${
                        isSelected ? 'text-white' : 'text-[#213a34]'
                      }`}
                    >
                      {item.questionRange}
                    </span>
                  </div>

                  {isSelected && (
                    <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full text-[10px] font-black bg-[#f8d467] text-[#213a34] shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#213a34] animate-pulse" />
                      Đang làm
                    </span>
                  )}
                </div>
              </button>
            );
          })
        )}
      </div>
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
