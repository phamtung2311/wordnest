'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import {
  Home,
  BookOpen,
  Headphones,
  Calendar,
  BarChart2,
} from 'lucide-react';

interface MobileBottomNavProps {
  onHome?: () => void;
  onLibrary?: () => void;
  onLife?: () => void;
}

export function MobileBottomNav({
  onHome,
  onLibrary,
  onLife,
}: MobileBottomNavProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState<'home' | 'library' | 'toeic' | 'life' | 'history'>('home');

  useEffect(() => {
    if (pathname === '/study-history') {
      setActiveTab('history');
    } else if (pathname.includes('test') || pathname.includes('intensive')) {
      setActiveTab('toeic');
    } else if (pathname === '/') {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'library') setActiveTab('library');
      else if (hash === 'life') setActiveTab('life');
      else setActiveTab('home');
    }

    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'library') setActiveTab('library');
      else if (hash === 'life') setActiveTab('life');
      else if (hash === 'home' || !hash) setActiveTab('home');
    };

    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, [pathname]);

  const handleTabClick = (tab: 'home' | 'library' | 'toeic' | 'life' | 'history') => {
    setActiveTab(tab);
    if (tab === 'home') {
      if (pathname === '/') {
        if (onHome) onHome();
        window.location.hash = 'home';
      } else {
        router.push('/#home');
      }
    } else if (tab === 'library') {
      if (pathname === '/') {
        if (onLibrary) onLibrary();
        window.location.hash = 'library';
      } else {
        router.push('/#library');
      }
    } else if (tab === 'toeic') {
      router.push('/practice-test');
    } else if (tab === 'life') {
      if (pathname === '/') {
        if (onLife) onLife();
        window.location.hash = 'life';
      } else {
        router.push('/#life');
      }
    } else if (tab === 'history') {
      router.push('/study-history');
    }
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 block lg:hidden border-t border-[#14362d]/10 bg-white/95 backdrop-blur-lg px-2 py-1.5 shadow-[0_-4px_16px_rgba(0,0,0,0.04)]">
      <div className="flex items-center justify-around max-w-md mx-auto">
        <button
          onClick={() => handleTabClick('home')}
          className={`flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-all ${
            activeTab === 'home'
              ? 'text-[#14362d] font-black'
              : 'text-[#637770] hover:text-[#14362d]'
          }`}
        >
          <div className={`p-1 rounded-xl transition-all ${activeTab === 'home' ? 'bg-[#14362d] text-[#f59e0b]' : ''}`}>
            <Home size={18} />
          </div>
          <span className="text-[10px] mt-0.5 font-bold">Trang chủ</span>
        </button>

        <button
          onClick={() => handleTabClick('library')}
          className={`flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-all ${
            activeTab === 'library'
              ? 'text-[#14362d] font-black'
              : 'text-[#637770] hover:text-[#14362d]'
          }`}
        >
          <div className={`p-1 rounded-xl transition-all ${activeTab === 'library' ? 'bg-[#14362d] text-[#f59e0b]' : ''}`}>
            <BookOpen size={18} />
          </div>
          <span className="text-[10px] mt-0.5 font-bold">Bộ từ</span>
        </button>

        <button
          onClick={() => handleTabClick('toeic')}
          className={`flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-all ${
            activeTab === 'toeic'
              ? 'text-[#14362d] font-black'
              : 'text-[#637770] hover:text-[#14362d]'
          }`}
        >
          <div className={`p-1 rounded-xl transition-all ${activeTab === 'toeic' ? 'bg-[#14362d] text-[#f59e0b]' : ''}`}>
            <Headphones size={18} />
          </div>
          <span className="text-[10px] mt-0.5 font-bold">Luyện thi</span>
        </button>

        <button
          onClick={() => handleTabClick('life')}
          className={`flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-all ${
            activeTab === 'life'
              ? 'text-[#14362d] font-black'
              : 'text-[#637770] hover:text-[#14362d]'
          }`}
        >
          <div className={`p-1 rounded-xl transition-all ${activeTab === 'life' ? 'bg-[#14362d] text-[#f59e0b]' : ''}`}>
            <Calendar size={18} />
          </div>
          <span className="text-[10px] mt-0.5 font-bold">Đời sống</span>
        </button>

        <button
          onClick={() => handleTabClick('history')}
          className={`flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-all ${
            activeTab === 'history'
              ? 'text-[#14362d] font-black'
              : 'text-[#637770] hover:text-[#14362d]'
          }`}
        >
          <div className={`p-1 rounded-xl transition-all ${activeTab === 'history' ? 'bg-[#14362d] text-[#f59e0b]' : ''}`}>
            <BarChart2 size={18} />
          </div>
          <span className="text-[10px] mt-0.5 font-bold">Lịch sử</span>
        </button>
      </div>
    </nav>
  );
}
