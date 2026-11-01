'use client';

import { useRouter } from 'next/navigation';
import { ArrowLeft, Headphones, History, FileText, Sparkles, RotateCcw, Trash2, X, CheckCircle2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import { MobileBottomNav } from '@/components/navigation/MobileBottomNav';

type TestHistory = {
  testId: string;
  score: number;
  date: string;
};

export default function ListeningTestSelectionPage() {
  const router = useRouter();
  const [history, setHistory] = useState<TestHistory[]>([]);
  const [inProgress, setInProgress] = useState<Record<string, boolean>>({});
  const [selectedYear, setSelectedYear] = useState<'2026' | '2024' | '2023'>('2026');
  const [resetModalTest, setResetModalTest] = useState<{ id: string; name: string } | null>(null);
  const [confirmClearAllHistory, setConfirmClearAllHistory] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleResetTestPart = (testId: string, part: 'part1' | 'part2' | 'part3' | 'part4' | 'all', openDirectly = false) => {
    try {
      const progressKey = `toeic_listening_progress_${testId}`;
      const timeKey = `toeic_listening_time_${testId}`;

      if (part === 'all') {
        localStorage.removeItem(progressKey);
        localStorage.removeItem(timeKey);
      } else {
        const currentStr = localStorage.getItem(progressKey);
        if (currentStr) {
          const answers = JSON.parse(currentStr);
          if (part === 'part1') {
            for (let i = 1; i <= 6; i++) delete answers[i];
          } else if (part === 'part2') {
            for (let i = 7; i <= 31; i++) delete answers[i];
          } else if (part === 'part3') {
            for (let i = 32; i <= 70; i++) delete answers[i];
          } else if (part === 'part4') {
            for (let i = 71; i <= 100; i++) delete answers[i];
          }
          if (Object.keys(answers).length > 0) {
            localStorage.setItem(progressKey, JSON.stringify(answers));
          } else {
            localStorage.removeItem(progressKey);
            localStorage.removeItem(timeKey);
          }
        }
      }

      // Re-scan inProgress state
      const progress: Record<string, boolean> = {};
      for (let i = 0; i < localStorage.length; i++) {
        const k = localStorage.key(i);
        if (k?.startsWith('toeic_listening_progress_')) {
          const id = k.replace('toeic_listening_progress_', '');
          progress[id] = true;
        }
      }
      setInProgress(progress);

      const partLabel = part === 'part1' ? 'Part 1' : part === 'part2' ? 'Part 2' : part === 'part3' ? 'Part 3' : part === 'part4' ? 'Part 4' : 'toàn bộ đề';
      showToast(`Đã xóa đáp án ${partLabel}!`);
      setResetModalTest(null);

      if (openDirectly) {
        router.push(`/listening-test/${testId}`);
      }
    } catch (e) {
      console.error('Reset listening test error:', e);
    }
  };

  const handleDeleteHistoryItem = (indexToDelete: number) => {
    try {
      const newHistory = history.filter((_, idx) => idx !== indexToDelete);
      setHistory(newHistory);
      localStorage.setItem('toeic_listening_history', JSON.stringify(newHistory));
      showToast('Đã xóa 1 mục lịch sử làm bài!');
    } catch (e) {
      console.error('Delete history item error:', e);
    }
  };

  const handleClearAllHistory = () => {
    try {
      localStorage.removeItem('toeic_listening_history');
      setHistory([]);
      setConfirmClearAllHistory(false);
      showToast('Đã xóa toàn bộ lịch sử luyện nghe!');
    } catch (e) {
      console.error('Clear all history error:', e);
    }
  };

  useEffect(() => {
    try {
      const savedYear = localStorage.getItem('toeic_listening_selected_year') as '2026' | '2024' | '2023' | null;
      if (savedYear && ['2026', '2024', '2023'].includes(savedYear)) {
        setSelectedYear(savedYear);
      }

      const historyStr = localStorage.getItem('toeic_listening_history');
      if (historyStr) {
        setHistory(JSON.parse(historyStr));
      }
      
      const progress: Record<string, boolean> = {};
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key?.startsWith('toeic_listening_progress_')) {
          const id = key.replace('toeic_listening_progress_', '');
          progress[id] = true;
        }
      }
      setInProgress(progress);
    } catch (e) {}
  }, []);

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
              onClick={() => router.push('/practice-test')}
              className="flex items-center text-xs sm:text-sm text-[#14362d] font-black transition-all bg-[#f4f8f5] hover:bg-[#e9f2ed] px-4 py-2 rounded-full border border-[#14362d]/10 shadow-sm"
            >
              <FileText className="w-4 h-4 mr-1.5 text-[#14362d]" />
              Luyện Reading TOEIC
            </button>
            <button
              onClick={() => router.push('/intensive-listening')}
              className="flex items-center text-xs sm:text-sm text-white font-black transition-all bg-[#14362d] hover:bg-[#1a473b] px-4 py-2 rounded-full shadow-sm"
            >
              <Sparkles className="w-4 h-4 mr-1.5 text-[#f59e0b]" />
              Luyện nghe chi tiết
            </button>
          </div>
        </div>

        {/* Hero Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-[#14362d]/8 mb-6">
          <div className="text-center mb-6">
            <span className="inline-flex items-center gap-1.5 bg-[#fef3c7] text-[#92400e] text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-3 border border-amber-200">
              <Headphones className="w-4 h-4 text-[#b45309]" /> TOEIC Listening · 100 câu + Audio tua ±5s
            </span>
            <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-black text-[#14362d] mb-1.5 tracking-tight">
              Luyện Đề TOEIC Listening
            </h1>
            <p className="text-xs sm:text-sm text-[#637770] font-medium">
              Audio giọng chuẩn đề thi ETS · Tối ưu trải nghiệm làm bài trên điện thoại
            </p>
          </div>

          {/* Year Switcher Segmented Tabs */}
          <div className="flex items-center justify-center p-1 bg-[#faf8f5] rounded-2xl max-w-sm mx-auto mb-6 border border-[#14362d]/8">
            <button
              onClick={() => {
                setSelectedYear('2026');
                try { localStorage.setItem('toeic_listening_selected_year', '2026'); } catch {}
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
                try { localStorage.setItem('toeic_listening_selected_year', '2024'); } catch {}
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
                try { localStorage.setItem('toeic_listening_selected_year', '2023'); } catch {}
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
                  onClick={() => router.push(`/listening-test/${test.id}`)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      router.push(`/listening-test/${test.id}`);
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
                      title="Làm lại đề / Xóa đáp án đã làm"
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
                    <Headphones className="w-5 h-5 text-[#b45309]" />
                  </div>
                  <span className="font-black text-[#14362d] text-xs sm:text-sm">Đề {idx + 1}</span>
                  <span className="text-[10px] text-[#637770] mt-0.5 font-bold">100 câu + Audio</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* History Table */}
        {history.length > 0 && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-[#14362d]/8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-display text-lg sm:text-xl font-black text-[#14362d] flex items-center">
                <History className="w-5 h-5 mr-2 text-[#b45309]" /> Lịch sử luyện nghe gần đây
              </h2>
              <button
                type="button"
                onClick={() => setConfirmClearAllHistory(true)}
                className="flex items-center gap-1.5 text-xs font-bold text-rose-600 hover:text-rose-700 bg-rose-50 hover:bg-rose-100 px-3 py-1.5 rounded-xl border border-rose-200/60 transition-colors cursor-pointer"
                title="Xóa toàn bộ lịch sử luyện nghe"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Xóa tất cả</span>
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="pb-2.5 text-[#637770] font-bold">Thời gian</th>
                    <th className="pb-2.5 text-[#637770] font-bold">Đề thi</th>
                    <th className="pb-2.5 text-[#637770] font-bold">Điểm số</th>
                    <th className="pb-2.5 text-[#637770] font-bold text-right">Xóa</th>
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
                      <td className="py-3">
                        <span className="bg-[#fef3c7] text-[#92400e] font-black px-2.5 py-1 rounded-full text-xs border border-amber-200">
                          {h.score}/100 câu
                        </span>
                      </td>
                      <td className="py-3 text-right">
                        <button
                          type="button"
                          onClick={() => handleDeleteHistoryItem(idx)}
                          className="p-1.5 rounded-lg text-gray-400 hover:text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer inline-flex items-center"
                          title="Xóa lần làm bài này"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
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
          <div className="bg-white rounded-3xl p-6 sm:p-7 max-w-md w-full shadow-2xl border border-[#14362d]/10 animate-in fade-in zoom-in-95 duration-150 max-h-[90vh] overflow-y-auto">
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
                className="p-1.5 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-700 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-[#637770] font-medium mb-4">
              Chọn phần bạn muốn xoá đáp án đã chọn để bắt đầu làm lại:
            </p>

            <div className="space-y-2.5 mb-5">
              {/* Option Part 1 */}
              <div className="p-3.5 rounded-2xl bg-[#faf8f5] hover:bg-[#f4f8f5] border border-[#14362d]/8 transition-all flex items-center justify-between gap-3">
                <div className="text-left">
                  <div className="flex items-center gap-1.5">
                    <span className="font-black text-sm text-[#14362d]">Part 1 (Câu 1 - 6)</span>
                    <span className="text-[10px] bg-emerald-100 text-emerald-800 font-extrabold px-1.5 py-0.2 rounded-full">6 câu</span>
                  </div>
                  <p className="text-[11px] text-[#637770] mt-0.5">Mô tả hình ảnh</p>
                </div>
                <button
                  onClick={() => handleResetTestPart(resetModalTest.id, 'part1', true)}
                  className="px-3.5 py-2 rounded-xl bg-[#14362d] hover:bg-[#1f4e42] text-white text-xs font-black shadow-xs transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Làm lại ngay
                </button>
              </div>

              {/* Option Part 2 */}
              <div className="p-3.5 rounded-2xl bg-[#faf8f5] hover:bg-[#f4f8f5] border border-[#14362d]/8 transition-all flex items-center justify-between gap-3">
                <div className="text-left">
                  <div className="flex items-center gap-1.5">
                    <span className="font-black text-sm text-[#14362d]">Part 2 (Câu 7 - 31)</span>
                    <span className="text-[10px] bg-blue-100 text-blue-800 font-extrabold px-1.5 py-0.2 rounded-full">25 câu</span>
                  </div>
                  <p className="text-[11px] text-[#637770] mt-0.5">Hỏi - Đáp</p>
                </div>
                <button
                  onClick={() => handleResetTestPart(resetModalTest.id, 'part2', true)}
                  className="px-3.5 py-2 rounded-xl bg-[#14362d] hover:bg-[#1f4e42] text-white text-xs font-black shadow-xs transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Làm lại ngay
                </button>
              </div>

              {/* Option Part 3 */}
              <div className="p-3.5 rounded-2xl bg-[#faf8f5] hover:bg-[#f4f8f5] border border-[#14362d]/8 transition-all flex items-center justify-between gap-3">
                <div className="text-left">
                  <div className="flex items-center gap-1.5">
                    <span className="font-black text-sm text-[#14362d]">Part 3 (Câu 32 - 70)</span>
                    <span className="text-[10px] bg-purple-100 text-purple-800 font-extrabold px-1.5 py-0.2 rounded-full">39 câu</span>
                  </div>
                  <p className="text-[11px] text-[#637770] mt-0.5">Đoạn hội thoại</p>
                </div>
                <button
                  onClick={() => handleResetTestPart(resetModalTest.id, 'part3', true)}
                  className="px-3.5 py-2 rounded-xl bg-[#14362d] hover:bg-[#1f4e42] text-white text-xs font-black shadow-xs transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Làm lại ngay
                </button>
              </div>

              {/* Option Part 4 */}
              <div className="p-3.5 rounded-2xl bg-[#faf8f5] hover:bg-[#f4f8f5] border border-[#14362d]/8 transition-all flex items-center justify-between gap-3">
                <div className="text-left">
                  <div className="flex items-center gap-1.5">
                    <span className="font-black text-sm text-[#14362d]">Part 4 (Câu 71 - 100)</span>
                    <span className="text-[10px] bg-amber-100 text-amber-800 font-extrabold px-1.5 py-0.2 rounded-full">30 câu</span>
                  </div>
                  <p className="text-[11px] text-[#637770] mt-0.5">Bài nói ngắn</p>
                </div>
                <button
                  onClick={() => handleResetTestPart(resetModalTest.id, 'part4', true)}
                  className="px-3.5 py-2 rounded-xl bg-[#14362d] hover:bg-[#1f4e42] text-white text-xs font-black shadow-xs transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Làm lại ngay
                </button>
              </div>

              {/* Option Reset All */}
              <div className="p-3.5 rounded-2xl bg-red-50/60 hover:bg-red-50 border border-red-200/80 transition-all">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="font-black text-sm text-red-900">Toàn bộ 100 câu</span>
                  <span className="text-[10px] bg-red-100 text-red-800 font-extrabold px-2 py-0.5 rounded-full">Full Test + Tua Audio về 00:00</span>
                </div>
                <p className="text-[11px] text-red-700/80 mb-3">Xóa toàn bộ đáp án đã chọn và đưa audio về đầu bài.</p>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => handleResetTestPart(resetModalTest.id, 'all', false)}
                    className="w-full py-2 px-3 rounded-xl bg-white hover:bg-gray-100 text-gray-700 border border-gray-200 text-xs font-bold transition-all text-center cursor-pointer"
                  >
                    Chỉ xóa đáp án
                  </button>
                  <button
                    onClick={() => handleResetTestPart(resetModalTest.id, 'all', true)}
                    className="w-full py-2 px-3 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-black shadow-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    Xóa & Làm lại
                  </button>
                </div>
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

      {/* Confirm Clear All History Modal */}
      {confirmClearAllHistory && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 max-w-sm w-full shadow-2xl border border-gray-100 text-center animate-in fade-in zoom-in-95 duration-150">
            <div className="w-12 h-12 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center mx-auto mb-3">
              <Trash2 className="w-6 h-6" />
            </div>
            <h3 className="font-display text-lg font-black text-[#14362d] mb-1.5">
              Xóa toàn bộ lịch sử?
            </h3>
            <p className="text-xs text-[#637770] mb-5">
              Tất cả kết quả các lần luyện nghe trước đây sẽ bị xóa hoàn toàn khỏi trình duyệt và không thể khôi phục.
            </p>
            <div className="grid grid-cols-2 gap-2.5">
              <button
                type="button"
                onClick={() => setConfirmClearAllHistory(false)}
                className="py-2.5 px-4 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-bold transition-colors cursor-pointer"
              >
                Hủy bỏ
              </button>
              <button
                type="button"
                onClick={handleClearAllHistory}
                className="py-2.5 px-4 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-black transition-colors cursor-pointer shadow-xs"
              >
                Xác nhận xóa
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50 bg-[#14362d] text-white px-4 py-2.5 rounded-full shadow-lg text-xs font-black flex items-center gap-2 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          {toastMessage}
        </div>
      )}

      <MobileBottomNav />
    </div>
  );
}
