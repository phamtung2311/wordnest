'use client';

import React, { Component, ErrorInfo, ReactNode, useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { 
  ArrowLeftRight, 
  EyeOff, 
  Sparkles, 
  ChevronUp, 
  Languages, 
  Lightbulb, 
  BookOpen, 
  CalendarCheck 
} from 'lucide-react';
import StudyStopwatchWidget from '@/components/StudyStopwatchWidget';
import TranslateFloatingWidget from '@/components/TranslateFloatingWidget';
import EnglishNotesFloatingWidget from '@/components/EnglishNotesFloatingWidget';
import VocabFloatingWidget from '@/components/VocabFloatingWidget';
import TodoFloatingWidget from '@/components/TodoFloatingWidget';
import QuickTranslateTooltip from '@/components/QuickTranslateTooltip';

interface SafeWidgetBoundaryProps {
  name: string;
  children: ReactNode;
}

interface SafeWidgetBoundaryState {
  hasError: boolean;
}

export class SafeWidgetBoundary extends Component<
  SafeWidgetBoundaryProps,
  SafeWidgetBoundaryState
> {
  constructor(props: SafeWidgetBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): SafeWidgetBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.warn(`[FloatingWidget] Captured error in ${this.props.name}:`, error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return null;
    }
    return this.props.children;
  }
}

export default function FloatingWidgetsContainer() {
  const pathname = usePathname() || '/';
  const isTestPage =
    pathname.startsWith('/practice-test') ||
    pathname.startsWith('/listening-test') ||
    pathname.startsWith('/intensive-listening');

  // Position: On practice & listening test pages, default to 'left' so the right answer sheet is completely unobstructed!
  // On other pages (home, vocab, etc.), default to 'right'.
  const [position, setPosition] = useState<'left' | 'right'>(isTestPage ? 'left' : 'right');

  // Collapse state: On test pages, default to collapsed into a small non-intrusive pill so the PDF is clean.
  const [isCollapsed, setIsCollapsed] = useState<boolean>(isTestPage);

  // Sync state whenever navigating between test pages and normal pages
  useEffect(() => {
    if (isTestPage) {
      setPosition('left');
      setIsCollapsed(true);
    } else {
      setPosition('right');
      setIsCollapsed(false);
    }
  }, [pathname, isTestPage]);

  // Expand when explicit open events are dispatched (e.g. from header nav)
  useEffect(() => {
    const handleExplicitOpen = () => {
      setIsCollapsed(false);
    };
    window.addEventListener('wordnest-open-translate', handleExplicitOpen);
    window.addEventListener('wordnest-open-english-notes', handleExplicitOpen);
    return () => {
      window.removeEventListener('wordnest-open-translate', handleExplicitOpen);
      window.removeEventListener('wordnest-open-english-notes', handleExplicitOpen);
    };
  }, []);

  const togglePosition = () => {
    setPosition((prev) => (prev === 'left' ? 'right' : 'left'));
  };

  const toggleCollapse = () => {
    setIsCollapsed((prev) => !prev);
  };

  return (
    <>
      <SafeWidgetBoundary name="StudyStopwatchWidget">
        <StudyStopwatchWidget />
      </SafeWidgetBoundary>

      <SafeWidgetBoundary name="TranslateFloatingWidget">
        <TranslateFloatingWidget position={position} isCollapsed={isCollapsed} />
      </SafeWidgetBoundary>

      <SafeWidgetBoundary name="EnglishNotesFloatingWidget">
        <EnglishNotesFloatingWidget position={position} isCollapsed={isCollapsed} />
      </SafeWidgetBoundary>

      <SafeWidgetBoundary name="VocabFloatingWidget">
        <VocabFloatingWidget position={position} isCollapsed={isCollapsed} />
      </SafeWidgetBoundary>

      <SafeWidgetBoundary name="TodoFloatingWidget">
        <TodoFloatingWidget position={position} isCollapsed={isCollapsed} />
      </SafeWidgetBoundary>

      <SafeWidgetBoundary name="QuickTranslateTooltip">
        <QuickTranslateTooltip />
      </SafeWidgetBoundary>

      {/* Floating Control Toolbar / Collapsed Trigger */}
      {isCollapsed ? (
        /* Collapsed pill: discreet, non-intrusive, zero overlap with answer sheet */
        <div
          className={`fixed z-[9995] bottom-5 sm:bottom-6 pointer-events-auto select-none transition-all duration-200 animate-in fade-in ${
            position === 'left' ? 'left-4 sm:left-6' : 'right-4 sm:right-6'
          }`}
        >
          <button
            type="button"
            onClick={toggleCollapse}
            aria-label="Mở tiện ích học tập"
            className="flex items-center gap-2 bg-[#213a34] hover:bg-[#2c4a42] text-amber-300 hover:text-white px-3.5 py-2 sm:py-2.5 rounded-full shadow-2xl border-2 border-amber-400/80 transition-all hover:scale-105 active:scale-95 cursor-pointer font-black text-xs group"
            style={{
              boxShadow:
                '0 8px 24px -4px rgba(33, 58, 52, 0.45), 0 2px 6px 0 rgba(0,0,0,0.1)',
            }}
          >
            <div className="flex items-center -space-x-1">
              <span className="w-5 h-5 rounded-full bg-sky-400 text-[#213a34] flex items-center justify-center text-[10px] font-bold shadow-xs">
                <Languages size={11} />
              </span>
              <span className="w-5 h-5 rounded-full bg-amber-400 text-[#213a34] flex items-center justify-center text-[10px] font-bold shadow-xs">
                <Lightbulb size={11} />
              </span>
            </div>
            <span className="font-extrabold tracking-tight">Tiện ích (4)</span>
            <ChevronUp size={14} className="text-amber-400 group-hover:translate-y-[-1px] transition-transform" />
          </button>
        </div>
      ) : (
        /* Expanded mode: mini control toolbar sitting above the top bubble */
        <div
          className={`fixed z-[9995] bottom-[276px] sm:bottom-[290px] pointer-events-auto select-none transition-all duration-200 animate-in fade-in ${
            position === 'left' ? 'left-4 sm:left-6' : 'right-4 sm:right-6'
          }`}
        >
          <div
            className="flex items-center gap-1.5 bg-[#213a34]/95 backdrop-blur-md text-white py-1 px-2.5 rounded-full shadow-xl border border-white/20 text-[11px] font-black"
            style={{
              boxShadow: '0 4px 14px rgba(0,0,0,0.25)',
            }}
          >
            <button
              type="button"
              onClick={togglePosition}
              title={position === 'left' ? 'Chuyển sang bên phải' : 'Chuyển sang bên trái'}
              className="flex items-center gap-1 hover:text-amber-300 px-1.5 py-0.5 rounded-md hover:bg-white/10 transition-colors cursor-pointer text-[10px]"
            >
              <ArrowLeftRight size={11} />
              <span>{position === 'left' ? 'Đổi qua Phải' : 'Đổi qua Trái'}</span>
            </button>

            <span className="w-px h-3 bg-white/20" />

            <button
              type="button"
              onClick={toggleCollapse}
              title="Thu gọn tiện ích"
              className="flex items-center gap-1 hover:text-amber-300 px-1.5 py-0.5 rounded-md hover:bg-white/10 transition-colors cursor-pointer text-[10px]"
            >
              <EyeOff size={11} />
              <span>Thu gọn</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
