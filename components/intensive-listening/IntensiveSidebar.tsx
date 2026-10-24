'use client';

import { useState } from 'react';
import type { IntensiveListeningItem } from '@/data/intensive_listening_test1';
import type { PartFilter } from './types';
import {
  Search,
  CheckCircle2,
  Headphones,
  X,
  Sparkles,
  BookMarked,
  Filter,
} from 'lucide-react';

interface IntensiveSidebarProps {
  items: IntensiveListeningItem[];
  currentItemId: string;
  onSelectItem: (id: string) => void;
  completedItems: Record<string, boolean>;
  isOpenMobile: boolean;
  onCloseMobile: () => void;
}

export function IntensiveSidebar({
  items,
  currentItemId,
  onSelectItem,
  completedItems,
  isOpenMobile,
  onCloseMobile,
}: IntensiveSidebarProps) {
  const [selectedPart, setSelectedPart] = useState<PartFilter>('all');
  const [searchQuery, setSearchQuery] = useState('');

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
                ETS 2026 - Test 1
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

        {/* Part Filter Tabs */}
        <div className="flex items-center gap-1 mt-3 overflow-x-auto pb-0.5 scrollbar-none">
          {parts.map((p) => {
            const isSelected = selectedPart === p.key;
            return (
              <button
                key={p.key}
                type="button"
                onClick={() => setSelectedPart(p.key as PartFilter)}
                className={`shrink-0 px-2.5 py-1 rounded-lg text-[11px] font-black transition-all ${
                  isSelected
                    ? 'bg-[#213a34] text-white shadow-xs'
                    : 'bg-white text-gray-600 hover:bg-[#e9f2ed] border border-[#213a34]/10'
                }`}
              >
                {p.label} ({p.count})
              </button>
            );
          })}
        </div>
      </div>

      {/* Item List Scroll Area */}
      <div className="flex-1 overflow-y-auto p-2.5 sm:p-3 space-y-1.5 divide-y-0">
        {filteredItems.length === 0 ? (
          <div className="text-center py-8 text-xs text-gray-400 font-bold">
            Không tìm thấy bài nghe phù hợp.
          </div>
        ) : (
          filteredItems.map((item) => {
            const isCurrent = item.id === currentItemId;
            const isCompleted = completedItems[item.id];

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  onSelectItem(item.id);
                  onCloseMobile();
                }}
                className={`w-full text-left p-3 rounded-2xl border-2 transition-all flex items-start justify-between gap-2.5 group ${
                  isCurrent
                    ? 'bg-[#213a34] text-white border-[#213a34] shadow-sm'
                    : 'bg-white text-[#213a34] border-[#213a34]/10 hover:border-[#f29f77] hover:bg-[#f5f0e6]/40'
                }`}
              >
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5 mb-1">
                    <span
                      className={`px-1.5 py-0.5 rounded text-[10px] font-black uppercase border ${
                        isCurrent
                          ? 'bg-[#f8d467] text-[#213a34] border-[#f8d467]'
                          : getPartBadge(item.part)
                      }`}
                    >
                      P{item.part}
                    </span>
                    <span
                      className={`text-xs font-black truncate ${
                        isCurrent ? 'text-[#f8d467]' : 'text-[#213a34]'
                      }`}
                    >
                      {item.questionRange}
                    </span>
                  </div>

                  <p
                    className={`text-xs font-bold leading-snug line-clamp-1 ${
                      isCurrent ? 'text-white/90' : 'text-gray-600 group-hover:text-[#213a34]'
                    }`}
                  >
                    {item.title.replace(/^Part \d - Câu [\d-]+:\s*/, '')}
                  </p>
                </div>

                {/* Completed Badge */}
                <div className="shrink-0 pt-0.5">
                  {isCompleted ? (
                    <CheckCircle2
                      className={`w-4 h-4 ${
                        isCurrent ? 'text-green-300' : 'text-green-600'
                      }`}
                    />
                  ) : (
                    <span
                      className={`w-2 h-2 rounded-full block ${
                        isCurrent ? 'bg-[#f8d467]' : 'bg-gray-300'
                      }`}
                    />
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
      <div className="hidden lg:block w-80 h-[calc(100vh-6rem)] sticky top-20 shrink-0">
        {content}
      </div>

      {/* Mobile Drawer Backdrop */}
      {isOpenMobile && (
        <div
          onClick={onCloseMobile}
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-xs lg:hidden"
        />
      )}

      {/* Mobile Slide-over Drawer */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-80 max-w-[85vw] bg-white shadow-2xl transform transition-transform duration-300 lg:hidden ${
          isOpenMobile ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {content}
      </div>
    </>
  );
}
