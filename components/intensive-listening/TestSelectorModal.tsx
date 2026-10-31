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
  RotateCcw,
} from 'lucide-react';
import {
  availableIntensiveTests,
  type IntensiveTestMeta,
} from '@/data/intensive_listening_index';

interface TestSelectorModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentTestId: number;
  onSelectTest: (testId: number) => void;
  onResetTest?: (testId: number) => void;
}

export function TestSelectorModal({
  isOpen,
  onClose,
  currentTestId,
  onSelectTest,
  onResetTest,
}: TestSelectorModalProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedEdition, setSelectedEdition] = useState<string>('all');
  const [testStats, setTestStats] = useState<
    Record<number, { completed: number; total: number; percentage: number }>
  >({});
  const [lastActiveItems, setLastActiveItems] = useState<
    Record<number, { range: string; title: string }>
  >({});
  const [hasHistoryMap, setHasHistoryMap] = useState<Record<number, boolean>>({});
  const [confirmResetTestId, setConfirmResetTestId] = useState<number | null>(null);

  // Read stats and last active item from localStorage whenever modal opens
  useEffect(() => {
    if (!isOpen) return;

    const stats: Record<number, { completed: number; total: number; percentage: number }> = {};
    const activeMap: Record<number, { range: string; title: string }> = {};
    const histMap: Record<number, boolean> = {};

    availableIntensiveTests.forEach((t) => {
      try {
        const raw =
          localStorage.getItem(`toeic_intensive_completed_t${t.id}`) ||
          (t.id === 1 ? localStorage.getItem('toeic_intensive_completed') : null);
        let completed = 0;
        if (raw) {
          const parsed = JSON.parse(raw);
          completed = Object.keys(parsed).filter((k) => parsed[k]).length;
          const total = t.itemCount || 54;
          const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
          stats[t.id] = { completed, total, percentage };
        } else {
          stats[t.id] = { completed: 0, total: t.itemCount || 54, percentage: 0 };
        }

        // Find last active item (metadata được lưu sẵn khi chọn câu trong Hub,
        // không cần tải data để tránh kéo 30 chunk)
        const lastItemId =
          localStorage.getItem(`toeic_intensive_last_item_t${t.id}`) ||
          (t.id === 1 ? localStorage.getItem('toeic_intensive_last_item') : null);

        if (lastItemId) {
          let found: { range: string; title: string } | null = null;
          try {
            const metaRaw = localStorage.getItem(`toeic_intensive_last_item_meta_t${t.id}`);
            if (metaRaw) found = JSON.parse(metaRaw);
          } catch {}
          if (found) {
            activeMap[t.id] = found;
          }
        }

        // Check if test has quiz results or attempts in localStorage
        const rawResults = localStorage.getItem(`toeic_intensive_results_t${t.id}`);
        let hasQuizResults = false;
        if (rawResults) {
          try {
            hasQuizResults = Object.keys(JSON.parse(rawResults)).length > 0;
          } catch {}
        }

        let hasQuizKeys = false;
        for (let i = 0; i < localStorage.length; i++) {
          const k = localStorage.key(i);
          if (k && k.startsWith(`toeic_intensive_quiz_t${t.id}_`)) {
            hasQuizKeys = true;
            break;
          }
          if (t.id === 1 && k && k.startsWith('toeic_intensive_quiz_part')) {
            hasQuizKeys = true;
            break;
          }
        }

        histMap[t.id] = completed > 0 || Boolean(lastItemId) || hasQuizResults || hasQuizKeys;
      } catch {
        stats[t.id] = { completed: 0, total: t.itemCount || 54, percentage: 0 };
        histMap[t.id] = false;
      }
    });

    setTestStats(stats);
    setLastActiveItems(activeMap);
    setHasHistoryMap(histMap);
  }, [isOpen]);

  const executeResetTest = (testId: number) => {
    try {
      // 1. Remove completed items
      localStorage.removeItem(`toeic_intensive_completed_t${testId}`);
      if (testId === 1) {
        localStorage.removeItem('toeic_intensive_completed');
      }

      // 2. Remove results map
      localStorage.removeItem(`toeic_intensive_results_t${testId}`);

      // 3. Remove last item
      localStorage.removeItem(`toeic_intensive_last_item_t${testId}`);
      if (testId === 1) {
        localStorage.removeItem('toeic_intensive_last_item');
      }

      // 4. Remove all individual quiz item attempts
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

      // 5. Update global history if it pointed to this test
      try {
        const histRaw = localStorage.getItem('toeic_intensive_global_history');
        if (histRaw) {
          const hist = JSON.parse(histRaw);
          if (hist && hist.testId === testId) {
            localStorage.removeItem('toeic_intensive_global_history');
          }
        }
      } catch {}

      // 6. Update local modal state immediately
      setTestStats((prev) => ({
        ...prev,
        [testId]: { completed: 0, total: 54, percentage: 0 },
      }));
      setLastActiveItems((prev) => {
        const next = { ...prev };
        delete next[testId];
        return next;
      });
      setHasHistoryMap((prev) => ({
        ...prev,
        [testId]: false,
      }));
      setConfirmResetTestId(null);

      // 7. Notify parent component
      if (onResetTest) {
        onResetTest(testId);
      }
    } catch (e) {
      console.error('Error resetting test history', e);
    }
  };

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
    if (selectedEdition !== 'all' && t.edition !== selectedEdition) {
      return false;
    }
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase().trim();
    return (
      t.title.toLowerCase().includes(q) ||
      t.shortTitle.toLowerCase().includes(q) ||
      (t.edition && t.edition.toLowerCase().includes(q)) ||
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
                  ETS TOEIC LC
                </span>
                <span className="text-xs text-white/70 font-semibold">{availableIntensiveTests.length} Đề Hoàn Chỉnh</span>
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
        <div className="p-4 bg-white border-b border-[#213a34]/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 shrink-0">
          {/* Edition filter pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
            {[
              { key: 'all', label: 'Tất cả', count: availableIntensiveTests.length },
              { key: 'ETS 2026', label: 'ETS 2026', count: availableIntensiveTests.filter((t) => t.edition === 'ETS 2026').length },
              { key: 'ETS 2024', label: 'ETS 2024', count: availableIntensiveTests.filter((t) => t.edition === 'ETS 2024').length },
              { key: 'ETS 2023', label: 'ETS 2023', count: availableIntensiveTests.filter((t) => t.edition === 'ETS 2023').length },
            ]
              .filter((g) => g.key === 'all' || g.count > 0)
              .map((group) => (
                <button
                  key={group.key}
                  type="button"
                  onClick={() => setSelectedEdition(group.key)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all shrink-0 cursor-pointer ${
                    selectedEdition === group.key
                      ? 'bg-[#213a34] text-[#f8d467] shadow-xs'
                      : 'bg-[#f5f0e6] text-[#213a34] hover:bg-[#e9f2ed]'
                  }`}
                >
                  {group.label} ({group.count})
                </button>
              ))}
          </div>

          <div className="flex items-center gap-3">
            <div className="relative w-full sm:w-60">
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm theo số đề (ví dụ: Test 1, 2024)..."
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

            <div className="text-xs text-gray-500 font-bold shrink-0 hidden md:block">
              Hiển thị <span className="text-[#213a34] font-black">{filteredTests.length}</span>/{availableIntensiveTests.length} đề thi
            </div>
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
                          {test.badge || (test.id > 100 ? `'24` : `T${test.id}`)}
                        </span>
                        <div>
                          <span className="text-[10px] font-black tracking-wider uppercase text-gray-400">
                            {test.edition || 'Bộ đề 2026'}
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
                    {/* Active Question Info */}
                    <div className="flex items-center justify-between text-[11px] font-bold text-gray-500 mb-1.5">
                      <span className="flex items-center gap-1">
                        <span className="text-[#eb6a52]">📍</span>
                        {lastActiveItems[test.id] ? (
                          <>
                            Đang làm: <span className="text-[#213a34] font-black">{lastActiveItems[test.id].range}</span>
                          </>
                        ) : (
                          <span>Chưa bắt đầu</span>
                        )}
                      </span>
                      <span className="text-gray-400">
                        {stats.completed}/{stats.total} bài ({stats.percentage}%)
                      </span>
                    </div>

                    {/* Progress track */}
                    <div className="w-full h-1.5 rounded-full bg-gray-200 overflow-hidden mb-3">
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

                    {/* Action button row */}
                    <div className="flex items-center justify-between gap-2 pt-1">
                      {/* Left: Reset button or Confirmation */}
                      {confirmResetTestId === test.id ? (
                        <div
                          className="flex items-center gap-1.5 p-1 px-2 rounded-xl bg-rose-50 border border-rose-200"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <span className="text-[11px] font-black text-rose-800">
                            Xóa dữ liệu {test.shortTitle}?
                          </span>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              executeResetTest(test.id);
                            }}
                            className="px-2 py-1 rounded-lg text-[11px] font-black bg-rose-600 hover:bg-rose-700 text-white shadow-2xs cursor-pointer active:scale-95 transition-all"
                          >
                            Xác nhận
                          </button>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setConfirmResetTestId(null);
                            }}
                            className="px-2 py-1 rounded-lg text-[11px] font-bold bg-white hover:bg-gray-100 text-gray-700 border border-gray-200 cursor-pointer active:scale-95 transition-all"
                          >
                            Hủy
                          </button>
                        </div>
                      ) : hasHistoryMap[test.id] ? (
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setConfirmResetTestId(test.id);
                          }}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-black text-rose-600 hover:text-rose-700 bg-rose-50 hover:bg-rose-100 border border-rose-200 transition-all cursor-pointer group/reset shadow-2xs active:scale-95"
                          title={`Xóa lịch sử làm bài của ${test.title} để bắt đầu lại từ đầu`}
                        >
                          <RotateCcw className="w-3.5 h-3.5 text-rose-500 group-hover/reset:-rotate-90 transition-transform" />
                          <span>Làm lại từ đầu</span>
                        </button>
                      ) : (
                        <div />
                      )}

                      {/* Right: Enter test button */}
                      <button
                        type="button"
                        className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-black transition-all ${
                          isSelected
                            ? 'bg-[#213a34] text-[#f8d467] shadow-xs'
                            : 'bg-white border border-[#213a34]/20 text-[#213a34] group-hover:bg-[#213a34] group-hover:text-white'
                        }`}
                      >
                        <span>
                          {isSelected
                            ? `Đang luyện · ${lastActiveItems[test.id]?.range || 'Bài 1'}`
                            : lastActiveItems[test.id]
                            ? `Tiếp tục ${lastActiveItems[test.id].range}`
                            : 'Vào luyện đề này'}
                        </span>
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
