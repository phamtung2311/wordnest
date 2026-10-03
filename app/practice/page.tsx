'use client';

import { useRouter } from 'next/navigation';

export default function PracticePage() {
  const router = useRouter();

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-white">
      <div className="text-3xl font-bold mb-6 text-[#213a34]">Test Page</div>
      <button
        onClick={() => router.push('/')}
        className="rounded-full bg-gray-100 px-6 py-2.5 font-bold text-gray-700 hover:bg-gray-200 transition-colors"
      >
        Đóng (Về trang chủ)
      </button>
    </div>
  );
}
