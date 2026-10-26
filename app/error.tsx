'use client';

import { useEffect } from 'react';
import { RotateCcw, Home, AlertCircle } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('WordNest Page Error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#14362d] flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-[#213a34]/10 text-center space-y-5 animate-in fade-in zoom-in-95 duration-200">
        <div className="size-16 mx-auto rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center shadow-inner">
          <AlertCircle size={32} />
        </div>

        <div className="space-y-2">
          <h1 className="font-display text-2xl font-black text-[#213a34]">
            Có chút trục trặc nhỏ
          </h1>
          <p className="text-sm text-[#5f716b] leading-relaxed">
            Hệ thống vừa cập nhật dữ liệu mới. Bạn hãy nhấn thử tải lại hoặc quay về trang chủ nhé.
          </p>
          {error?.message && (
            <p className="text-xs text-gray-400 font-mono bg-gray-50 p-2.5 rounded-xl border border-gray-100 break-words">
              {error.message}
            </p>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <button
            onClick={() => reset()}
            className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#213a34] text-white font-bold text-sm shadow-md hover:bg-[#2c4e46] transition-all cursor-pointer"
          >
            <RotateCcw size={16} />
            Thử tải lại
          </button>
          <a
            href="/"
            className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#f5f0e6] text-[#213a34] font-bold text-sm hover:bg-[#e9f2ed] transition-all cursor-pointer"
          >
            <Home size={16} />
            Trang chủ
          </a>
        </div>
      </div>
    </div>
  );
}
