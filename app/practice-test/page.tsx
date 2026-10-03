'use client';

import { useRouter } from 'next/navigation';
import { ArrowLeft, FileText, History } from 'lucide-react';
import { useState, useEffect } from 'react';

type TestHistory = {
  testId: string;
  score: number;
  date: string;
};

export default function PracticeTestSelectionPage() {
  const router = useRouter();
  const [history, setHistory] = useState<TestHistory[]>([]);

  useEffect(() => {
    try {
      const historyStr = localStorage.getItem('toeic_reading_history');
      if (historyStr) {
        setHistory(JSON.parse(historyStr));
      }
    } catch (e) {}
  }, []);

  const tests = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <div className="min-h-screen bg-[#f5f0e6] p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-8">
          <button
            onClick={() => router.push('/')}
            className="flex items-center text-[#213a34] hover:text-[#213a34]/70 font-bold transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Quay lại Trang chủ
          </button>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-sm border border-[#213a34]/10 mb-8">
          <h1 className="font-display text-4xl font-black text-[#213a34] mb-2 text-center">
            Luyện Đề TOEIC Reading
          </h1>
          <p className="text-center text-gray-500 mb-8">
            Chọn một đề bên dưới để bắt đầu làm bài.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {tests.map((testId) => (
              <button
                key={testId}
                onClick={() => router.push(`/practice-test/${testId}`)}
                className="flex flex-col items-center justify-center bg-[#e9f2ed] hover:bg-[#d5e5db] transition-colors rounded-2xl p-6 border border-[#213a34]/10 group"
              >
                <div className="bg-white p-4 rounded-full mb-4 shadow-sm group-hover:scale-110 transition-transform">
                  <FileText className="w-8 h-8 text-[#f29f77]" />
                </div>
                <span className="font-bold text-[#213a34] text-center">ETS 2026<br/>Đề {testId}</span>
              </button>
            ))}
          </div>
        </div>

        {history.length > 0 && (
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-[#213a34]/10">
            <h2 className="font-display text-2xl font-black text-[#213a34] mb-6 flex items-center">
              <History className="w-6 h-6 mr-3 text-[#f29f77]" /> Lịch sử làm bài
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b-2 border-gray-100">
                    <th className="pb-3 text-gray-500 font-bold">Thời gian</th>
                    <th className="pb-3 text-gray-500 font-bold">Đề thi</th>
                    <th className="pb-3 text-gray-500 font-bold">Số câu đúng</th>
                  </tr>
                </thead>
                <tbody>
                  {history.map((h, idx) => (
                    <tr key={idx} className="border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors">
                      <td className="py-4 text-gray-700">
                        {new Date(h.date).toLocaleString('vi-VN', { 
                          hour: '2-digit', minute: '2-digit', 
                          day: '2-digit', month: '2-digit', year: 'numeric' 
                        })}
                      </td>
                      <td className="py-4 font-bold text-[#213a34]">ETS 2026 Đề {h.testId}</td>
                      <td className="py-4">
                        <span className="bg-[#e9f2ed] text-[#213a34] font-bold px-3 py-1 rounded-full">
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
