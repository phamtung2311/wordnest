'use client';

import { useRouter } from 'next/navigation';
import { ArrowLeft, FileText } from 'lucide-react';

export default function PracticeTestSelectionPage() {
  const router = useRouter();

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

        <div className="bg-white rounded-3xl p-8 shadow-sm border border-[#213a34]/10">
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
                <span className="font-bold text-[#213a34] text-lg">Đề {testId}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
