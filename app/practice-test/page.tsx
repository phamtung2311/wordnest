'use client';

import { useRouter } from 'next/navigation';
import { ArrowLeft, FileText, History, Headphones, Sparkles, ChevronRight, Award, RotateCcw, X, CheckCircle2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import { MobileBottomNav } from '@/components/navigation/MobileBottomNav';

type TestHistory = {
  testId: string;
  score: number;
  date: string;
};

export default function PracticeTestSelectionPage() {
  const router = useRouter();
  const [history, setHistory] = useState<TestHistory[]>([]);
  const [inProgress, setInProgress] = useState<Record<string, boolean>>({});
  const [selectedYear, setSelectedYear] = useState<'2026' | '2024' | '2023'>('2026');
  const [resetModalTest, setResetModalTest] = useState<{ id: string; name: string } | null>(null);
  const [resetToast, setResetToast] = useState<string | null>(null);

  useEffect(() => {
    try {
      const savedYear = localStorage.getItem('toeic_reading_selected_year') as '2026' | '2024' | '2023' | null;
      if (savedYear && ['2026', '2024', '2023'].includes(savedYear)) {
        setSelectedYear(savedYear);
      }

      const historyStr = localStorage.getItem('toeic_reading_history');
      if (historyStr) {
        setHistory(JSON.parse(historyStr));
      }
      
      const progress: Record<string, boolean> = {};
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key?.startsWith('toeic_reading_progress_')) {
          const id = key.replace('toeic_reading_progress_', '');
          progress[id] = true;
        }
      }
      setInProgress(progress);
    } catch (e) {}
  }, []);

  const handleResetTestPart = (testId: string, part: 'part5' | 'part6' | 'part7' | 'all', openDirectly = false) => {
    try {
      const key = `toeic_reading_progress_${testId}`;
      if (part === 'all') {
        localStorage.removeItem(key);
      } else {
        const currentStr = localStorage.getItem(key);
        if (currentStr) {
          const answers = JSON.parse(currentStr);
          if (part === 'part5') {
            for (let i = 101; i <= 130; i++) delete answers[i];
          } else if (part === 'part6') {
            for (let i = 131; i <= 146; i++) delete answers[i];
          } else if (part === 'part7') {
            for (let i = 147; i <= 200; i++) delete answers[i];
          }
          if (Object.keys(answers).length > 0) {
            localStorage.setItem(key, JSON.stringify(answers));
          } else {
            localStorage.removeItem(key);
          }
        }
      }
      
      // Update inProgress state
      const progress: Record<string, boolean> = {};
      for (let i = 0; i < localStorage.length; i++) {
        const k = localStorage.key(i);
        if (k?.startsWith('toeic_reading_progress_')) {
          const id = k.replace('toeic_reading_progress_', '');
          progress[id] = true;
        }
      }
      setInProgress(progress);

      const partLabel = part === 'part5' ? 'Part 5' : part === 'part6' ? 'Part 6' : part === 'part7' ? 'Part 7' : 'toàn bộ đề';
      setResetToast(`Đã làm lại ${partLabel}!`);
      setTimeout(() => setResetToast(null), 3000);
      setResetModalTest(null);

      if (openDirectly) {
        router.push(`/practice-test/${testId}?part=${part}`);
      }
    } catch (e) {
      console.error('Reset error:', e);
    }
  };

  const tests2026 = Array.from({ length: 10 }, (_, i) => ({ id: `${i + 1}`, name: `ETS 2026 Đề ${i + 1}` }));
  const tests2024 = Array.from({ length: 10 }, (_, i) => ({ id: `2024-${i + 1}`, name: `ETS 2024 Đề ${i + 1}` }));
  const tests2023 = Array.from({ length: 10 }, (_, i) => ({ id: `2023-${i + 1}`, name: `ETS 2023 Đề ${i + 1}` }));

  const currentTests = selectedYear === '2026' ? tests2026 : selectedYear === '2024' ? tests2024 : tests2023;

  const getTestName = (testId: string) => {
    if (testId.startsWith('2024-')) return `ETS 2024 Đề ${testId.replace('2024-', '')}`;
    if (testId.startsWith('2023-')) return `ETS 2023 Đề ${testId.replace('2023-', '')}`;
    return `ETS 2026 Đề ${testId}`;
  };

  const getLatestScore = (testId: string) => {
    const item = history.find((h) => String(h.testId) === String(testId));
    return item ? item.score : null;
  };

  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#14362d] p-4 sm:p-6 md:p-8 pb-28 lg:pb-12">
      <div className="max-w-4xl mx-auto">
        {/* Top bar */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => router.push('/')}
            className="flex items-center text-xs sm:text-sm text-[#14362d] hover:text-[#14362d]/70 font-black transition-all bg-white px-4 py-2 rounded-full border border-[#14362d]/8 shadow-sm hover:shadow"
          >
            <ArrowLeft className="w-4 h-4 mr-1.5" />
            Trang chủ
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={() => router.push('/listening-test')}
              className="flex items-center text-xs sm:text-sm text-[#14362d] font-black transition-all bg-[#fef3c7] hover:bg-[#fde68a] px-4 py-2 rounded-full border border-amber-300/40 shadow-sm"
            >
              <Headphones className="w-4 h-4 mr-1.5 text-[#b45309]" />
              Luyện Listening TOEIC
            </button>
          </div>
        </div>

        {/* Hero Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-[#14362d]/8 mb-6">
          <div className="text-center mb-6">
            <span className="inline-flex items-center gap-1.5 bg-[#f4f8f5] text-[#14362d] text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-3 border border-[#14362d]/10">
              <FileText className="w-4 h-4 text-[#e11d48]" /> TOEIC Reading · 100 câu Part 5, 6, 7
            </span>
            <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-black text-[#14362d] mb-1.5 tracking-tight">
              Luyện Đề TOEIC Reading
            </h1>
            <p className="text-xs sm:text-sm text-[#637770] font-medium">
              Đầy đủ 30 đề thi chuẩn format ETS · Tự lưu tiến trình làm bài
            </p>
          </div>

          {/* Year Switcher Segmented Tabs */}
          <div className="flex items-center justify-center p-1 bg-[#faf8f5] rounded-2xl max-w-sm mx-auto mb-6 border border-[#14362d]/8">
            <button
              onClick={() => {
                setSelectedYear('2026');
                try { localStorage.setItem('toeic_reading_selected_year', '2026'); } catch {}
              }}
              className={`flex-1 py-2 px-3 rounded-xl text-xs font-black transition-all cursor-pointer ${
                selectedYear === '2026'
                  ? 'bg-white text-[#14362d] shadow-sm'
                  : 'text-[#637770] hover:text-[#14362d]'
              }`}
            >
              🌟 ETS 2026 (10 đề)
            </button>
            <button
              onClick={() => {
                setSelectedYear('2024');
                try { localStorage.setItem('toeic_reading_selected_year', '2024'); } catch {}
              }}
              className={`flex-1 py-2 px-3 rounded-xl text-xs font-black transition-all cursor-pointer ${
                selectedYear === '2024'
                  ? 'bg-white text-[#14362d] shadow-sm'
                  : 'text-[#637770] hover:text-[#14362d]'
              }`}
            >
              📘 ETS 2024 (10 đề)
            </button>
            <button
              onClick={() => {
                setSelectedYear('2023');
                try { localStorage.setItem('toeic_reading_selected_year', '2023'); } catch {}
              }}
              className={`flex-1 py-2 px-3 rounded-xl text-xs font-black transition-all cursor-pointer ${
                selectedYear === '2023'
                  ? 'bg-white text-[#14362d] shadow-sm'
                  : 'text-[#637770] hover:text-[#14362d]'
              }`}
            >
              📙 ETS 2023 (10 đề)
            </button>
          </div>

          {/* Test Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
            {currentTests.map((test, idx) => {
              const score = getLatestScore(test.id);
              const hasProgress = inProgress[test.id];

              return (
                <div
                  key={test.id}
                  role="button"
                  tabIndex={0}
                  onClick={() => router.push(`/practice-test/${test.id}`)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      router.push(`/practice-test/${test.id}`);
                    }
                  }}
                  className="flex flex-col items-center justify-center bg-[#faf8f5] hover:bg-white transition-all hover:-translate-y-1 hover:shadow-md active:scale-95 rounded-2xl p-4 border border-[#14362d]/8 group relative text-center cursor-pointer select-none"
                >
                  {/* Reset Redo Button on card */}
                  {(hasProgress || score !== null) && (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setResetModalTest(test);
                      }}
                      className="absolute top-2 left-2 p-1.5 rounded-xl bg-white/95 hover:bg-amber-100 text-amber-700 border border-amber-200/80 shadow-xs transition-all z-10 opacity-70 hover:opacity-100 group-hover:opacity-100"
                      title="Làm lại đề / Làm lại Part 5"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                    </button>
                  )}

                  {hasProgress && (
                    <span className="absolute -top-2 -right-2 bg-[#f59e0b] text-white text-[9px] font-black px-2 py-0.5 rounded-full shadow-sm z-10 border border-white">
                      Đang làm
                    </span>
                  )}
                  {score !== null && !hasProgress && (
                    <span className="absolute -top-2 -right-2 bg-emerald-600 text-white text-[9px] font-black px-2 py-0.5 rounded-full shadow-sm z-10 border border-white">
                      {score}/100
                    </span>
                  )}
                  <div className="flex items-center gap-1 mb-1.5">
                    <span className={`px-2 py-0.5 rounded-md text-[10px] font-black ${
                      selectedYear === '2023'
                        ? 'bg-amber-100 text-amber-900 border border-amber-200'
                        : selectedYear === '2024'
                        ? 'bg-blue-100 text-blue-900 border border-blue-200'
                        : 'bg-emerald-100 text-emerald-900 border border-emerald-200'
                    }`}>
                      {selectedYear === '2023' ? 'ETS 2023' : selectedYear === '2024' ? 'ETS 2024' : 'ETS 2026'}
                    </span>
                  </div>
                  <div className="bg-white p-3 rounded-2xl mb-2 shadow-sm group-hover:scale-110 transition-transform border border-[#14362d]/6">
                    <FileText className="w-5 h-5 text-[#14362d]" />
                  </div>
                  <span className="font-black text-[#14362d] text-xs sm:text-sm">Đề {idx + 1}</span>
                  <span className="text-[10px] text-[#637770] mt-0.5 font-bold">100 câu</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* History Table */}
        {history.length > 0 && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-[#14362d]/8">
            <h2 className="font-display text-lg sm:text-xl font-black text-[#14362d] mb-4 flex items-center">
              <History className="w-5 h-5 mr-2 text-[#e11d48]" /> Lịch sử làm bài gần đây
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="pb-2.5 text-[#637770] font-bold">Thời gian</th>
                    <th className="pb-2.5 text-[#637770] font-bold">Đề thi</th>
                    <th className="pb-2.5 text-[#637770] font-bold text-right sm:text-left">Điểm số</th>
                  </tr>
                </thead>
                <tbody>
                  {history.slice(0, 15).map((h, idx) => (
                    <tr key={idx} className="border-b border-gray-50 last:border-0 hover:bg-[#faf8f5] transition-colors">
                      <td className="py-3 text-[#637770] whitespace-nowrap">
                        {new Date(h.date).toLocaleString('vi-VN', { 
                          hour: '2-digit', minute: '2-digit', 
                          day: '2-digit', month: '2-digit'
                        })}
                      </td>
                      <td className="py-3 font-black text-[#14362d]">{getTestName(String(h.testId))}</td>
                      <td className="py-3 text-right sm:text-left">
                        <span className="bg-[#f4f8f5] text-[#14362d] font-black px-2.5 py-1 rounded-full text-xs border border-[#14362d]/10">
                          {h.score}/100 câu
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* Reset Options Modal */}
      {resetModalTest && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-7 max-w-md w-full shadow-2xl border border-[#14362d]/10 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between pb-3.5 border-b border-gray-100 mb-4">
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
                  Làm lại bài thi
                </span>
                <h3 className="font-display text-lg sm:text-xl font-black text-[#14362d] mt-1">
                  {resetModalTest.name}
                </h3>
              </div>
              <button
                onClick={() => setResetModalTest(null)}
                className="p-1.5 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-700 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-[#637770] font-medium mb-4">
              Chọn phần bạn muốn xoá đáp án đã chọn để bắt đầu làm lại:
            </p>

            <div className="space-y-2.5 mb-5">
              {/* Option Part 5 */}
              <div className="p-3.5 rounded-2xl bg-[#faf8f5] hover:bg-[#f4f8f5] border border-[#14362d]/8 transition-all flex items-center justify-between gap-3">
                <div className="text-left">
                  <div className="flex items-center gap-1.5">
                    <span className="font-black text-sm text-[#14362d]">Part 5 (Câu 101 - 130)</span>
                    <span className="text-[10px] bg-emerald-100 text-emerald-800 font-extrabold px-1.5 py-0.2 rounded-full">30 câu</span>
                  </div>
                  <p className="text-[11px] text-[#637770] mt-0.5">Ôn tập Ngữ pháp & Từ vựng</p>
                </div>
                <button
                  onClick={() => handleResetTestPart(resetModalTest.id, 'part5', true)}
                  className="px-3.5 py-2 rounded-xl bg-[#14362d] hover:bg-[#1f4e42] text-white text-xs font-black shadow-xs transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Làm lại ngay
                </button>
              </div>

              {/* Option Part 6 */}
              <div className="p-3.5 rounded-2xl bg-[#faf8f5] hover:bg-[#f4f8f5] border border-[#14362d]/8 transition-all flex items-center justify-between gap-3">
                <div className="text-left">
                  <div className="flex items-center gap-1.5">
                    <span className="font-black text-sm text-[#14362d]">Part 6 (Câu 131 - 146)</span>
                    <span className="text-[10px] bg-blue-100 text-blue-800 font-extrabold px-1.5 py-0.2 rounded-full">16 câu</span>
                  </div>
                  <p className="text-[11px] text-[#637770] mt-0.5">Hoàn thành đoạn văn</p>
                </div>
                <button
                  onClick={() => handleResetTestPart(resetModalTest.id, 'part6', true)}
                  className="px-3.5 py-2 rounded-xl bg-[#14362d] hover:bg-[#1f4e42] text-white text-xs font-black shadow-xs transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Làm lại ngay
                </button>
              </div>

              {/* Option Part 7 */}
              <div className="p-3.5 rounded-2xl bg-[#faf8f5] hover:bg-[#f4f8f5] border border-[#14362d]/8 transition-all flex items-center justify-between gap-3">
                <div className="text-left">
                  <div className="flex items-center gap-1.5">
                    <span className="font-black text-sm text-[#14362d]">Part 7 (Câu 147 - 200)</span>
                    <span className="text-[10px] bg-purple-100 text-purple-800 font-extrabold px-1.5 py-0.2 rounded-full">54 câu</span>
                  </div>
                  <p className="text-[11px] text-[#637770] mt-0.5">Đọc hiểu văn bản</p>
                </div>
                <button
                  onClick={() => handleResetTestPart(resetModalTest.id, 'part7', true)}
                  className="px-3.5 py-2 rounded-xl bg-[#14362d] hover:bg-[#1f4e42] text-white text-xs font-black shadow-xs transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Làm lại ngay
                </button>
              </div>

              {/* Option Reset All */}
              <div className="p-3.5 rounded-2xl bg-red-50/50 hover:bg-red-50 border border-red-200/60 transition-all flex items-center justify-between gap-3">
                <div className="text-left">
                  <div className="flex items-center gap-1.5">
                    <span className="font-black text-sm text-red-900">Toàn bộ 100 câu</span>
                  </div>
                  <p className="text-[11px] text-red-700/70 mt-0.5">Xóa tất cả Part 5, 6, 7 làm lại cả đề</p>
                </div>
                <button
                  onClick={() => handleResetTestPart(resetModalTest.id, 'all', true)}
                  className="px-3.5 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-black shadow-xs transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Xóa cả đề
                </button>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => setResetModalTest(null)}
                className="w-full py-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-bold transition-colors cursor-pointer"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toast Notification */}
      {resetToast && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50 bg-[#14362d] text-white px-4 py-2.5 rounded-full shadow-lg text-xs font-black flex items-center gap-2 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          {resetToast}
        </div>
      )}

      <MobileBottomNav />
    </div>
  );
}
