'use client';

import { useRouter } from 'next/navigation';
import { ArrowLeft, FileText, History, Headphones, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';

type TestHistory = {
  testId: string;
  score: number;
  date: string;
};

export default function PracticeTestSelectionPage() {
  const router = useRouter();
  const [history, setHistory] = useState<TestHistory[]>([]);
  const [inProgress, setInProgress] = useState<Record<string, boolean>>({});

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

  const getTestName = (testId: string) => {
    if (testId.startsWith('2024-')) return `ETS 2024 Đề ${testId.replace('2024-', '')}`;
    if (testId.startsWith('2023-')) return `ETS 2023 Đề ${testId.replace('2023-', '')}`;
    return `ETS 2026 Đề ${testId}`;
  };

  return (
    <div className="min-h-screen bg-[#f5f0e6] p-3 sm:p-6 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <button
            onClick={() => router.push('/')}
            className="flex items-center text-xs sm:text-sm text-[#213a34] hover:text-[#213a34]/70 font-bold transition-colors bg-white/80 backdrop-blur px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-[#213a34]/10 shadow-sm"
          >
            <ArrowLeft className="w-4 h-4 mr-1.5" />
            Trang chủ
          </button>

          <button
            onClick={() => router.push('/listening-test')}
            className="flex items-center text-xs sm:text-sm text-[#213a34] hover:bg-[#e9f2ed] font-extrabold transition-colors bg-[#f8d467] px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full border border-[#213a34]/15 shadow-sm"
          >
            <Headphones className="w-4 h-4 mr-1.5" />
            Luyện Listening TOEIC
          </button>
        </div>

        <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-sm border border-[#213a34]/10 mb-6 sm:mb-8">
          <div className="text-center mb-6">
            <span className="inline-flex items-center gap-1.5 bg-[#e9f2ed] text-[#213a34] text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full mb-2">
              <FileText className="w-3.5 h-3.5 text-[#f29f77]" /> TOEIC Reading (100 câu)
            </span>
            <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-black text-[#213a34] mb-1">
              Luyện Đề TOEIC Reading
            </h1>
            <p className="text-xs sm:text-sm text-gray-500">
              Giao diện tối ưu cho điện thoại & máy tính · Tự lưu tiến trình
            </p>
          </div>

          {/* Section: ETS 2026 */}
          <div className="mb-6">
            <h2 className="font-bold text-base sm:text-lg mb-3 text-[#213a34] flex items-center justify-between">
              <span>Bộ đề ETS 2026</span>
              <span className="text-xs text-gray-400 font-semibold">10 đề</span>
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2.5 sm:gap-3.5">
              {tests2026.map((test) => (
                <button
                  key={test.id}
                  onClick={() => router.push(`/practice-test/${test.id}`)}
                  className="flex flex-col items-center justify-center bg-[#e9f2ed] hover:bg-[#d5e5db] transition-transform active:scale-95 rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-[#213a34]/10 group relative"
                >
                  {inProgress[test.id] && (
                    <span className="absolute -top-1.5 -right-1.5 bg-[#f29f77] text-white text-[9px] font-black px-1.5 py-0.5 rounded-full shadow-sm z-10 border border-white">
                      Đang làm
                    </span>
                  )}
                  <div className="bg-white p-2.5 rounded-full mb-2 shadow-sm group-hover:scale-110 transition-transform">
                    <FileText className="w-5 h-5 text-[#f29f77]" />
                  </div>
                  <span className="font-black text-[#213a34] text-center text-xs sm:text-sm">{test.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Section: ETS 2024 */}
          <div className="mb-6">
            <h2 className="font-bold text-base sm:text-lg mb-3 text-[#213a34] flex items-center justify-between">
              <span>Bộ đề ETS 2024</span>
              <span className="text-xs text-gray-400 font-semibold">10 đề</span>
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2.5 sm:gap-3.5">
              {tests2024.map((test) => (
                <button
                  key={test.id}
                  onClick={() => router.push(`/practice-test/${test.id}`)}
                  className="flex flex-col items-center justify-center bg-[#e9f2ed] hover:bg-[#d5e5db] transition-transform active:scale-95 rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-[#213a34]/10 group relative"
                >
                  {inProgress[test.id] && (
                    <span className="absolute -top-1.5 -right-1.5 bg-[#f29f77] text-white text-[9px] font-black px-1.5 py-0.5 rounded-full shadow-sm z-10 border border-white">
                      Đang làm
                    </span>
                  )}
                  <div className="bg-white p-2.5 rounded-full mb-2 shadow-sm group-hover:scale-110 transition-transform">
                    <FileText className="w-5 h-5 text-[#f29f77]" />
                  </div>
                  <span className="font-black text-[#213a34] text-center text-xs sm:text-sm">{test.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Section: ETS 2023 */}
          <div>
            <h2 className="font-bold text-base sm:text-lg mb-3 text-[#213a34] flex items-center justify-between">
              <span>Bộ đề ETS 2023</span>
              <span className="text-xs text-gray-400 font-semibold">10 đề</span>
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2.5 sm:gap-3.5">
              {tests2023.map((test) => (
                <button
                  key={test.id}
                  onClick={() => router.push(`/practice-test/${test.id}`)}
                  className="flex flex-col items-center justify-center bg-[#e9f2ed] hover:bg-[#d5e5db] transition-transform active:scale-95 rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-[#213a34]/10 group relative"
                >
                  {inProgress[test.id] && (
                    <span className="absolute -top-1.5 -right-1.5 bg-[#f29f77] text-white text-[9px] font-black px-1.5 py-0.5 rounded-full shadow-sm z-10 border border-white">
                      Đang làm
                    </span>
                  )}
                  <div className="bg-white p-2.5 rounded-full mb-2 shadow-sm group-hover:scale-110 transition-transform">
                    <FileText className="w-5 h-5 text-[#f29f77]" />
                  </div>
                  <span className="font-black text-[#213a34] text-center text-xs sm:text-sm">{test.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {history.length > 0 && (
          <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-sm border border-[#213a34]/10">
            <h2 className="font-display text-lg sm:text-xl font-black text-[#213a34] mb-4 flex items-center">
              <History className="w-5 h-5 mr-2 text-[#f29f77]" /> Lịch sử làm bài
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-100">
                    <th className="pb-2.5 text-gray-500 font-bold">Thời gian</th>
                    <th className="pb-2.5 text-gray-500 font-bold">Đề thi</th>
                    <th className="pb-2.5 text-gray-500 font-bold text-right sm:text-left">Điểm số</th>
                  </tr>
                </thead>
                <tbody>
                  {history.map((h, idx) => (
                    <tr key={idx} className="border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors">
                      <td className="py-3 text-gray-600 whitespace-nowrap">
                        {new Date(h.date).toLocaleString('vi-VN', { 
                          hour: '2-digit', minute: '2-digit', 
                          day: '2-digit', month: '2-digit'
                        })}
                      </td>
                      <td className="py-3 font-bold text-[#213a34]">{getTestName(String(h.testId))}</td>
                      <td className="py-3 text-right sm:text-left">
                        <span className="bg-[#e9f2ed] text-[#213a34] font-black px-2.5 py-0.5 rounded-full text-xs">
                          {h.score}/100
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
    </div>
  );
}
