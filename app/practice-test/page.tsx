'use client';

import { useRouter } from 'next/navigation';

export default function PracticeTestPage() {
  const router = useRouter();

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#f5f0e6]">
      {/* Left Column: PDF Area */}
      <div className="flex h-full w-1/2 flex-col items-center justify-center bg-gray-200 border-r border-[#213a34]/10">
        <span className="text-xl font-bold text-gray-500">
          Khu vực hiển thị PDF
        </span>
      </div>

      {/* Right Column: Answers / Controls */}
      <div className="flex h-full w-1/2 flex-col bg-[#e9f2ed] p-6 relative">
        <div className="flex justify-between items-center border-b border-[#213a34]/10 pb-4 mb-4">
          <h2 className="font-display text-2xl font-black text-[#213a34]">Phiếu trả lời</h2>
          <button
            onClick={() => router.push('/')}
            className="rounded-full bg-white border border-gray-300 px-6 py-2.5 font-bold text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Đóng (Về trang chủ)
          </button>
        </div>
        <div className="flex-1 overflow-y-auto">
          {/* Answer sheet placeholder */}
        </div>
      </div>
    </div>
  );
}
