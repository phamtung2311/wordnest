'use client';

import { useRouter } from 'next/navigation';
import { ArrowLeft, FileText, History, Headphones, Sparkles, ChevronRight, Award } from 'lucide-react';
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

  useEffect(() => {
    try {
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
              onClick={() => setSelectedYear('2026')}
              className={`flex-1 py-2 px-3 rounded-xl text-xs font-black transition-all ${
                selectedYear === '2026'
                  ? 'bg-white text-[#14362d] shadow-sm'
                  : 'text-[#637770] hover:text-[#14362d]'
              }`}
            >
              🌟 ETS 2026 (10 đề)
            </button>
            <button
              onClick={() => setSelectedYear('2024')}
              className={`flex-1 py-2 px-3 rounded-xl text-xs font-black transition-all ${
                selectedYear === '2024'
                  ? 'bg-white text-[#14362d] shadow-sm'
                  : 'text-[#637770] hover:text-[#14362d]'
              }`}
            >
              📘 ETS 2024 (10 đề)
            </button>
            <button
              onClick={() => setSelectedYear('2023')}
              className={`flex-1 py-2 px-3 rounded-xl text-xs font-black transition-all ${
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
            {currentTests.map((test) => {
              const score = getLatestScore(test.id);
              const hasProgress = inProgress[test.id];

              return (
                <button
                  key={test.id}
                  onClick={() => router.push(`/practice-test/${test.id}`)}
                  className="flex flex-col items-center justify-center bg-[#faf8f5] hover:bg-white transition-all hover:-translate-y-1 hover:shadow-md active:scale-95 rounded-2xl p-4 border border-[#14362d]/8 group relative text-center"
                >
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
                  <div className="bg-white p-3 rounded-2xl mb-2.5 shadow-sm group-hover:scale-110 transition-transform border border-[#14362d]/6">
                    <FileText className="w-5 h-5 text-[#14362d]" />
                  </div>
                  <span className="font-black text-[#14362d] text-xs sm:text-sm">{test.name}</span>
                  <span className="text-[10px] text-[#637770] mt-0.5 font-bold">100 câu</span>
                </button>
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

      <MobileBottomNav />
    </div>
  );
}
