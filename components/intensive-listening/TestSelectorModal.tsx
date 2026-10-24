'use client';

import { useState, useEffect } from 'react';
import {
  X,
  CheckCircle2,
  Headphones,
  BookOpen,
  Sparkles,
  Trophy,
  ChevronRight,
  Flame,
  Search,
  Check,
  Layers,
  GraduationCap,
} from 'lucide-react';
import {
  availableIntensiveTests,
  type IntensiveTestOption,
} from '@/data/intensive_listening_index';

interface TestSelectorModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentTestId: number;
  onSelectTest: (testId: number) => void;
}

export function TestSelectorModal({
  isOpen,
  onClose,
  currentTestId,
  onSelectTest,
}: TestSelectorModalProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [testStats, setTestStats] = useState<
    Record<number, { completed: number; total: number; percentage: number }>
  >({});

  // Read stats from localStorage whenever modal opens
  useEffect(() => {
    if (!isOpen) return;

    const stats: Record<number, { completed: number; total: number; percentage: number }> = {};
    availableIntensiveTests.forEach((t) => {
      try {
        const raw =
          localStorage.getItem(`toeic_intensive_completed_t${t.id}`) ||
          (t.id === 1 ? localStorage.getItem('toeic_intensive_completed') : null);
        if (raw) {
          const parsed = JSON.parse(raw);
          const completed = Object.keys(parsed).filter((k) => parsed[k]).length;
          const total = t.itemCount || 54;
          const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
          stats[t.id] = { completed, total, percentage };
        } else {
          stats[t.id] = { completed: 0, total: t.itemCount || 54, percentage: 0 };
        }
      } catch {
        stats[t.id] = { completed: 0, total: t.itemCount || 54, percentage: 0 };
      }
    });

    setTestStats(stats);
  }, [isOpen]);

  // Handle escape key to close
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredTests = availableIntensiveTests.filter((t) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase().trim();
    return (
      t.title.toLowerCase().includes(q) ||
      t.shortTitle.toLowerCase().includes(q) ||
      t.id.toString() === q
    );
  });

  const totalCompletedAllTests = Object.values(testStats).reduce(
    (acc, curr) => acc + curr.completed,
    0
  );
  const totalQuestionsAllTests = availableIntensiveTests.reduce(
    (acc, curr) => acc + (curr.itemCount || 54),
    0
  );
  const totalPercentage =
    totalQuestionsAllTests > 0
      ? Math.round((totalCompletedAllTests / totalQuestionsAllTests) * 100)
      : 0;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-4xl bg-[#fbf9f4] rounded-3xl border-2 border-[#213a34]/15 shadow-2xl flex flex-col max-h-[90vh] overflow-hidden animate-in zoom-in-95 duration-200"
      >
        {/* Header */}
        <div className="p-4 sm:p-6 bg-[#213a34] text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[#213a34]/20 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-2xl shrink-0 border border-white/15">
              📚
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-[#f8d467] text-[#213a34]">
                  ETS TOEIC 2026
                </span>
                <span className="text-xs text-white/70 font-semibold">10 Đề Hoàn Chỉnh</span>
              </div>
              <h2 className="text-lg sm:text-xl font-black text-white mt-1">
                Chọn Đề Luyện Nghe Chi Tiết
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
            {/* Total progress pill */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-2xl bg-white/10 border border-white/10 text-xs">
              <Trophy className="w-4 h-4 text-[#f8d467]" />
              <div className="text-left leading-tight">
                <div className="text-[10px] text-white/70 font-bold">Tổng tiến độ</div>
                <div className="font-black text-white">
                  {totalCompletedAllTests}/{totalQuestionsAllTests} bài ({totalPercentage}%)
                </div>
              </div>
            </div>

            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-2xl bg-white/10 hover:bg-white/20 text-white transition-colors shrink-0"
              title="Đóng"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="p-4 bg-white border-b border-[#213a34]/10 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="relative w-full sm:max-w-xs">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm theo số đề (ví dụ: Test 5)..."
              className="w-full pl-9 pr-3 py-2 rounded-xl bg-[#f5f0e6]/60 border border-[#213a34]/15 text-xs text-[#213a34] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#213a34]/20"
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

          <div className="text-xs text-gray-500 font-bold self-end sm:self-center">
            Hiển thị <span className="text-[#213a34] font-black">{filteredTests.length}</span>/10 đề thi
          </div>
        </div>

        {/* Test Cards Grid */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4">
            {filteredTests.map((test) => {
              const isSelected = test.id === currentTestId;
              const stats = testStats[test.id] || { completed: 0, total: 54, percentage: 0 };

              return (
                <div
                  key={test.id}
                  onClick={() => {
                    onSelectTest(test.id);
                    onClose();
                  }}
                  className={`group relative p-4 sm:p-5 rounded-2xl border-2 transition-all cursor-pointer text-left flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[#e9f2ed] border-[#213a34] shadow-md ring-2 ring-[#213a34]/15'
                      : 'bg-white border-[#213a34]/15 hover:border-[#213a34]/40 hover:shadow-md hover:bg-[#faf8f2]'
                  }`}
                >
                  {/* Top card row */}
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        <span className="w-8 h-8 rounded-xl bg-[#213a34] text-[#f8d467] font-black text-xs flex items-center justify-center shrink-0">
                          T{test.id}
                        </span>
                        <div>
                          <span className="text-[10px] font-black tracking-wider uppercase text-gray-400">
                            Bộ đề 2026
                          </span>
                          <h3 className="font-black text-[#213a34] text-base leading-tight group-hover:text-[#eb6a52] transition-colors">
                            {test.title}
                          </h3>
                        </div>
                      </div>

                      {/* Active indicator */}
                      {isSelected ? (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-black bg-[#213a34] text-[#f8d467] shadow-xs shrink-0">
                          <span className="w-2 h-2 rounded-full bg-[#4ade80] animate-pulse" />
                          Đang học
                        </span>
                      ) : stats.percentage === 100 ? (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-black bg-emerald-100 text-emerald-800 shrink-0">
                          <Check className="w-3.5 h-3.5" />
                          Hoàn thành
                        </span>
                      ) : null}
                    </div>

                    {/* Features Badges */}
                    <div className="flex flex-wrap items-center gap-1.5 my-3">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg text-[11px] font-bold bg-[#f5f0e6] text-[#213a34] border border-[#213a34]/10">
                        <Headphones className="w-3 h-3 text-[#eb6a52]" />
                        54 bài nghe
                      </span>
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg text-[11px] font-bold bg-[#f5f0e6] text-[#213a34] border border-[#213a34]/10">
                        <BookOpen className="w-3 h-3 text-[#213a34]" />
                        100 câu trắc nghiệm
                      </span>
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg text-[11px] font-bold bg-[#f5f0e6] text-[#213a34] border border-[#213a34]/10">
                        <Sparkles className="w-3 h-3 text-[#f8d467]" />
                        Chép chính tả
                      </span>
                    </div>
                  </div>

                  {/* Bottom: Progress Bar & Button */}
                  <div className="pt-3 border-t border-[#213a34]/10 mt-2">
                    <div className="flex items-center justify-between text-xs font-bold mb-1.5">
                      <span className="text-gray-500">
                        Đã làm: <span className="text-[#213a34] font-black">{stats.completed}</span>/{stats.total} bài
                      </span>
                      <span
                        className={`font-black ${
                          stats.percentage > 0 ? 'text-[#213a34]' : 'text-gray-400'
                        }`}
                      >
                        {stats.percentage}%
                      </span>
                    </div>

                    {/* Progress track */}
                    <div className="w-full h-2 rounded-full bg-gray-200 overflow-hidden mb-3">
                      <div
                        className={`h-full transition-all duration-300 ${
                          stats.percentage === 100
                            ? 'bg-emerald-500'
                            : stats.percentage > 0
                            ? 'bg-[#213a34]'
                            : 'bg-transparent'
                        }`}
                        style={{ width: `${stats.percentage}%` }}
                      />
                    </div>

                    {/* Action button */}
                    <div className="flex items-center justify-end">
                      <button
                        type="button"
                        className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-black transition-all ${
                          isSelected
                            ? 'bg-[#213a34] text-[#f8d467]'
                            : 'bg-white border border-[#213a34]/20 text-[#213a34] group-hover:bg-[#213a34] group-hover:text-white'
                        }`}
                      >
                        <span>{isSelected ? 'Đang luyện đề này' : 'Vào luyện đề này'}</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer info note */}
        <div className="p-3 sm:p-4 bg-[#f5f0e6] border-t border-[#213a34]/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-600 shrink-0">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-[#213a34]" />
            <span>
              Mỗi đề gồm đầy đủ 54 bài nghe (Part 1, 2, 3, 4) kèm Audio cắt lẻ chuẩn, transcript song ngữ và hình ảnh minh họa.
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl bg-white border border-[#213a34]/20 text-[#213a34] font-black hover:bg-[#e9f2ed] transition-colors self-end sm:self-auto shrink-0"
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
}
