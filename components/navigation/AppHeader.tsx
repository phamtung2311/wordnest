'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import type { User } from 'firebase/auth';
import {
  BookOpen,
  Headphones,
  FileText,
  Flame,
  Timer,
  Cloud,
  LogOut,
  LogIn,
  ChevronDown,
  Sparkles,
  Calendar,
  CheckCircle2,
  BarChart2,
  Menu,
  X,
  Layers,
} from 'lucide-react';

interface AppHeaderProps {
  compact?: boolean;
  onHome?: () => void;
  onLibrary?: () => void;
  onLife?: () => void;
  onAbout?: () => void;
  user: User | null;
  authReady: boolean;
  syncStatus: 'local' | 'loading' | 'saved' | 'error';
  onSignIn: () => void;
  onSignOut: () => void;
  streak?: number;
  todayMinutes?: number;
  todaySeconds?: number;
}

export function AppHeader({
  compact,
  onHome,
  onLibrary,
  onLife,
  onAbout,
  user,
  authReady,
  syncStatus,
  onSignIn,
  onSignOut,
  streak = 0,
  todayMinutes = 0,
  todaySeconds = 0,
}: AppHeaderProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [activeHash, setActiveHash] = useState('');
  const [toeicMenuOpen, setToeicMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toeicRef = useRef<HTMLDivElement>(null);
  const userRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setActiveHash(window.location.hash || '#home');
    const handleHashChange = () => setActiveHash(window.location.hash || '#home');
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Close menus on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (toeicRef.current && !toeicRef.current.contains(e.target as Node)) {
        setToeicMenuOpen(false);
      }
      if (userRef.current && !userRef.current.contains(e.target as Node)) {
        setUserMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isMainPage = pathname === '/';

  const navigateTo = (action?: () => void, hash?: string) => {
    setMobileMenuOpen(false);
    if (isMainPage && action) {
      action();
    } else {
      router.push(`/${hash ? hash : ''}`);
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#14362d]/8 bg-[#faf8f5]/85 backdrop-blur-md transition-all">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand / Logo */}
        <div className="flex items-center gap-6">
          <button
            onClick={() => navigateTo(onHome, '#home')}
            className="group flex items-center gap-2.5 transition-transform active:scale-95 text-left"
          >
            <div className="flex size-10 items-center justify-center rounded-xl bg-[#14362d] text-[#f59e0b] shadow-sm transition-all group-hover:bg-[#1a473b] group-hover:shadow-md">
              <BookOpen size={20} className="transition-transform group-hover:scale-105" />
            </div>
            <div>
              <span className="font-display block text-xl font-black tracking-tight text-[#14362d]">
                Word<span className="text-[#f59e0b]">Nest</span>
              </span>
              <span className="hidden text-[10px] font-bold uppercase tracking-wider text-[#637770] sm:block">
                Học từ vựng & TOEIC
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          {!compact && (
            <nav className="hidden lg:flex items-center gap-1.5 ml-4">
              <button
                type="button"
                onClick={() => navigateTo(onHome, '#home')}
                className={`rounded-full px-3.5 py-1.5 text-xs font-black transition-all ${
                  isMainPage && activeHash === '#home'
                    ? 'bg-[#14362d] text-white shadow-sm'
                    : 'text-[#14362d] hover:bg-[#14362d]/5'
                }`}
              >
                Trang chủ
              </button>

              <button
                type="button"
                onClick={() => navigateTo(onLibrary, '#library')}
                className={`rounded-full px-3.5 py-1.5 text-xs font-black transition-all ${
                  isMainPage && activeHash === '#library'
                    ? 'bg-[#14362d] text-white shadow-sm'
                    : 'text-[#14362d] hover:bg-[#14362d]/5'
                }`}
              >
                Bộ từ vựng
              </button>

              {/* TOEIC Dropdown */}
              <div className="relative" ref={toeicRef}>
                <button
                  type="button"
                  onClick={() => setToeicMenuOpen(!toeicMenuOpen)}
                  className={`flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-black transition-all ${
                    pathname.includes('test') || pathname.includes('intensive')
                      ? 'bg-[#fef3c7] text-[#92400e]'
                      : 'text-[#14362d] hover:bg-[#14362d]/5'
                  }`}
                >
                  <Headphones size={14} className="text-[#f59e0b]" />
                  <span>Luyện thi TOEIC</span>
                  <ChevronDown size={13} className={`transition-transform duration-200 ${toeicMenuOpen ? 'rotate-180' : ''}`} />
                </button>

                {toeicMenuOpen && (
                  <div className="absolute left-0 mt-2 w-64 rounded-2xl border border-[#14362d]/10 bg-white p-2 shadow-xl backdrop-blur-xl animate-in fade-in zoom-in-95 z-50">
                    <button
                      onClick={() => {
                        setToeicMenuOpen(false);
                        router.push('/practice-test');
                      }}
                      className="flex w-full items-start gap-3 rounded-xl p-2.5 text-left transition-colors hover:bg-[#f4f8f5]"
                    >
                      <div className="rounded-lg bg-[#e9f2ed] p-2 text-[#14362d]">
                        <FileText size={16} className="text-[#f97316]" />
                      </div>
                      <div>
                        <div className="text-xs font-black text-[#14362d]">Luyện Reading TOEIC</div>
                        <div className="text-[11px] text-[#637770]">100 câu Part 5, 6, 7 · Đề ETS 2026/24/23</div>
                      </div>
                    </button>

                    <button
                      onClick={() => {
                        setToeicMenuOpen(false);
                        router.push('/listening-test');
                      }}
                      className="flex w-full items-start gap-3 rounded-xl p-2.5 text-left transition-colors hover:bg-[#f4f8f5]"
                    >
                      <div className="rounded-lg bg-[#e9f2ed] p-2 text-[#14362d]">
                        <Headphones size={16} className="text-[#f97316]" />
                      </div>
                      <div>
                        <div className="text-xs font-black text-[#14362d]">Luyện Listening TOEIC</div>
                        <div className="text-[11px] text-[#637770]">Audio tua ±5s · 100 câu Part 1-4</div>
                      </div>
                    </button>

                    <button
                      onClick={() => {
                        setToeicMenuOpen(false);
                        router.push('/intensive-listening');
                      }}
                      className="flex w-full items-start gap-3 rounded-xl p-2.5 text-left transition-colors hover:bg-[#f4f8f5] border-t border-gray-100"
                    >
                      <div className="rounded-lg bg-[#14362d] p-2 text-[#f59e0b]">
                        <Sparkles size={16} />
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5 text-xs font-black text-[#14362d]">
                          <span>Luyện Nghe Chi Tiết</span>
                          <span className="rounded-full bg-[#fef3c7] px-1.5 py-0.2 text-[9px] font-black text-[#92400e]">Study4</span>
                        </div>
                        <div className="text-[11px] text-[#637770]">Cắt lẻ audio · Song ngữ · Chép chính tả</div>
                      </div>
                    </button>
                  </div>
                )}
              </div>

              <button
                type="button"
                onClick={() => navigateTo(onLife, '#life')}
                className={`rounded-full px-3.5 py-1.5 text-xs font-black transition-all ${
                  isMainPage && activeHash === '#life'
                    ? 'bg-[#14362d] text-white shadow-sm'
                    : 'text-[#14362d] hover:bg-[#14362d]/5'
                }`}
              >
                Đời sống
              </button>

              <button
                type="button"
                onClick={() => router.push('/study-history')}
                className={`rounded-full px-3.5 py-1.5 text-xs font-black transition-all ${
                  pathname === '/study-history'
                    ? 'bg-[#14362d] text-white shadow-sm'
                    : 'text-[#14362d] hover:bg-[#14362d]/5'
                }`}
              >
                Lịch sử học
              </button>
            </nav>
          )}
        </div>

        {/* Right Section: Stats Pills & Account */}
        <div className="flex items-center gap-2.5 md:mr-36">
          {/* Quick Streak & Time Pills */}
          <div className="hidden sm:flex items-center gap-2">
            <div
              onClick={() => router.push('/study-history')}
              className="flex cursor-pointer items-center gap-1 rounded-full border border-amber-200/80 bg-[#fffbeb] px-2.5 py-1 text-xs font-black text-[#b45309] shadow-sm transition-transform hover:scale-105"
              title="Chuỗi ngày học liên tiếp"
            >
              <Flame size={14} className="text-[#f59e0b] fill-[#f59e0b]" />
              <span>{streak} ngày</span>
            </div>
          </div>

          {/* User Account / Google Sync */}
          {user ? (
            <div className="relative" ref={userRef}>
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="flex items-center gap-2 rounded-full border border-[#14362d]/10 bg-white p-1 pr-2.5 shadow-sm transition-all hover:shadow-md"
              >
                <div className="relative">
                  {user.photoURL ? (
                    <img
                      src={user.photoURL}
                      alt={user.displayName || ''}
                      className="size-7 rounded-full object-cover"
                    />
                  ) : (
                    <div className="flex size-7 items-center justify-center rounded-full bg-[#14362d] text-xs font-bold text-white">
                      {(user.displayName || user.email || 'U')[0].toUpperCase()}
                    </div>
                  )}
                  {/* Sync status pulse dot */}
                  <span
                    className={`absolute -bottom-0.5 -right-0.5 size-2.5 rounded-full border-2 border-white ${
                      syncStatus === 'loading'
                        ? 'bg-amber-500 animate-ping'
                        : syncStatus === 'error'
                        ? 'bg-rose-500'
                        : 'bg-emerald-500'
                    }`}
                  />
                </div>
                <span className="hidden sm:inline max-w-[100px] truncate text-xs font-black text-[#14362d]">
                  {user.displayName?.split(' ')[0] || 'Tài khoản'}
                </span>
                <ChevronDown size={12} className="text-[#637770]" />
              </button>

              {userMenuOpen && (
                <div className="absolute right-0 mt-2 w-56 rounded-2xl border border-[#14362d]/10 bg-white p-2 shadow-xl backdrop-blur-xl animate-in fade-in zoom-in-95 z-50">
                  <div className="border-b border-gray-100 px-3 py-2">
                    <p className="text-xs font-black text-[#14362d] truncate">
                      {user.displayName || 'Người dùng'}
                    </p>
                    <p className="text-[11px] text-[#637770] truncate">{user.email}</p>
                    <div className="mt-1.5 flex items-center gap-1.5 text-[10px] font-bold text-emerald-700">
                      <Cloud size={12} />
                      <span>{syncStatus === 'saved' ? 'Đã đồng bộ đám mây' : syncStatus === 'loading' ? 'Đang lưu...' : 'Lỗi đồng bộ'}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setUserMenuOpen(false);
                      router.push('/study-history');
                    }}
                    className="flex w-full items-center gap-2.5 rounded-xl px-3 py-2 text-left text-xs font-bold text-[#14362d] hover:bg-[#f4f8f5]"
                  >
                    <BarChart2 size={14} className="text-[#637770]" />
                    <span>Lịch sử học & Điểm danh</span>
                  </button>

                  <button
                    onClick={() => {
                      setUserMenuOpen(false);
                      onSignOut();
                    }}
                    className="flex w-full items-center gap-2.5 rounded-xl px-3 py-2 text-left text-xs font-bold text-rose-600 hover:bg-rose-50"
                  >
                    <LogOut size={14} />
                    <span>Đăng xuất</span>
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={onSignIn}
              disabled={!authReady}
              className="flex items-center gap-1.5 rounded-full bg-[#14362d] px-3.5 py-1.5 text-xs font-black text-white shadow-sm transition-all hover:bg-[#1c4a3e] active:scale-95 disabled:opacity-50"
            >
              <LogIn size={14} />
              <span>{authReady ? 'Đăng nhập Google' : 'Đang tải…'}</span>
            </button>
          )}

          {/* Mobile Menu Toggle Button */}
          {!compact && (
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex size-9 items-center justify-center rounded-xl border border-[#14362d]/10 bg-white text-[#14362d] lg:hidden"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          )}
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="border-b border-[#14362d]/10 bg-white px-4 py-4 lg:hidden animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-1.5">
            <button
              type="button"
              onClick={() => navigateTo(onHome, '#home')}
              className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-left text-xs font-black text-[#14362d] hover:bg-[#f4f8f5]"
            >
              <BookOpen size={16} className="text-[#14362d]" />
              <span>Trang chủ</span>
            </button>

            <button
              type="button"
              onClick={() => navigateTo(onLibrary, '#library')}
              className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-left text-xs font-black text-[#14362d] hover:bg-[#f4f8f5]"
            >
              <Layers size={16} className="text-[#14362d]" />
              <span>Bộ từ vựng</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                router.push('/practice-test');
              }}
              className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-left text-xs font-black text-[#14362d] hover:bg-[#f4f8f5]"
            >
              <FileText size={16} className="text-[#f97316]" />
              <span>Luyện Reading TOEIC</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                router.push('/listening-test');
              }}
              className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-left text-xs font-black text-[#14362d] hover:bg-[#f4f8f5]"
            >
              <Headphones size={16} className="text-[#f97316]" />
              <span>Luyện Listening TOEIC</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                router.push('/intensive-listening');
              }}
              className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-left text-xs font-black text-[#14362d] bg-[#f4f8f5]"
            >
              <Sparkles size={16} className="text-[#f59e0b]" />
              <span>Luyện Nghe Chi Tiết (Study4)</span>
            </button>

            <button
              type="button"
              onClick={() => navigateTo(onLife, '#life')}
              className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-left text-xs font-black text-[#14362d] hover:bg-[#f4f8f5]"
            >
              <Calendar size={16} className="text-[#10b981]" />
              <span>Đời sống (Planner / Chi tiêu / Thói quen)</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                router.push('/study-history');
              }}
              className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-left text-xs font-black text-[#14362d] hover:bg-[#f4f8f5]"
            >
              <BarChart2 size={16} className="text-[#637770]" />
              <span>Lịch sử học & Thống kê</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
