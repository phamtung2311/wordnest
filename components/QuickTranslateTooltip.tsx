'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Volume2, Plus, Check, ExternalLink, X, Loader2, Sparkles, BookOpen } from 'lucide-react';
import { TranslationResult, translateText } from '@/lib/translateService';
import { addWordToDeck, getSavedDecks, getOrCreateDefaultDeck } from '@/lib/vocabService';

function speak(text: string, lang = 'en') {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
  try {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text.trim());
    utterance.lang = lang === 'zh' ? 'zh-CN' : lang === 'vi' ? 'vi-VN' : 'en-US';
    utterance.rate = 0.88;
    const voices = window.speechSynthesis.getVoices();
    const voice = voices.find((v) =>
      v.lang.toLowerCase().startsWith(lang === 'zh' ? 'zh' : lang === 'vi' ? 'vi' : 'en')
    );
    if (voice) utterance.voice = voice;
    window.speechSynthesis.speak(utterance);
  } catch (e) {
    console.warn('TTS error:', e);
  }
}

export default function QuickTranslateTooltip() {
  const [isVisible, setIsVisible] = useState(false);
  const [targetWord, setTargetWord] = useState('');
  const [result, setResult] = useState<TranslationResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [saved, setSaved] = useState(false);
  const [pos, setPos] = useState<{ top: number; left: number; placeBelow: boolean }>({
    top: 0,
    left: 0,
    placeBelow: false,
  });

  const tooltipRef = useRef<HTMLDivElement>(null);
  const currentReqRef = useRef<number>(0);

  // Trigger translation for a clean string at a viewport rect
  const handleTrigger = async (
    rawText: string,
    rect: { top: number; left: number; width: number; height: number; bottom: number },
    offset: { top: number; left: number } = { top: 0, left: 0 }
  ) => {
    // Clean text: strip question/option prefix like "(A) " or "132. "
    let text = rawText.trim().replace(/^\([A-D]\)\s*|^\d+[\.\)]\s*/i, '');
    if (!text.includes(' ')) {
      text = text.replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, '');
    }
    if (!text || text.length < 2) return;

    // Viewport dimensions
    const vpHeight = typeof window !== 'undefined' ? window.innerHeight : 800;
    const vpWidth = typeof window !== 'undefined' ? window.innerWidth : 1200;

    const tooltipWidth = 310;
    // Real height with translation & examples is ~180-195px
    const tooltipHeight = 190;
    const verticalGap = 24; // Generous space so it floats clearly above the word

    const wordCenterX = offset.left + rect.left + rect.width / 2;
    const wordTop = offset.top + rect.top;
    const wordBottom = offset.top + rect.bottom;

    // Can we place above the word?
    const canPlaceAbove = wordTop >= tooltipHeight + verticalGap + 60;
    let top = canPlaceAbove ? wordTop - tooltipHeight - verticalGap : wordBottom + verticalGap;

    // Strict clamping within viewport
    const maxTop = Math.max(65, vpHeight - tooltipHeight - 16);
    top = Math.max(65, Math.min(maxTop, top));

    const maxLeft = Math.max(12, vpWidth - tooltipWidth - 12);
    const left = Math.max(12, Math.min(maxLeft, wordCenterX - tooltipWidth / 2));

    setPos({ top, left, placeBelow: !canPlaceAbove });
    setTargetWord(text);
    setIsVisible(true);
    setIsLoading(true);
    setResult(null);
    setSaved(false);

    const reqId = ++currentReqRef.current;
    try {
      const res = await translateText(text, 'en', 'vi');
      if (reqId === currentReqRef.current) {
        setResult(res);
        setIsLoading(false);
      }
    } catch (e) {
      if (reqId === currentReqRef.current) {
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    // 1. Listen to messages from PDF.js iframe
    const handleWindowMessage = (event: MessageEvent) => {
      if (event.data?.type === 'WORDNEST_QUICK_TRANSLATE') {
        const { text, rect } = event.data;
        if (!text || !rect) return;
        console.log('[QuickTranslate] Received translation request:', text, rect);

        // Find iframe offset in parent window
        const iframes = document.querySelectorAll('iframe');
        let offset = { top: 0, left: 0 };
        for (const iframe of iframes) {
          if (iframe.contentWindow === event.source) {
            const ifrRect = iframe.getBoundingClientRect();
            offset = { top: ifrRect.top, left: ifrRect.left };
            break;
          }
        }

        handleTrigger(text, rect, offset);
      } else if (event.data?.type === 'WORDNEST_DISMISS_QUICK_TRANSLATE') {
        setIsVisible(false);
      }
    };

    // 2. Listen to dblclick in the main parent page (outside iframe, e.g. in questions / review)
    const handleDocumentDblClick = () => {
      setTimeout(() => {
        const sel = window.getSelection();
        if (!sel || sel.rangeCount === 0) return;
        const text = sel.toString().trim();
        if (!text || text.length < 2) return;
        try {
          const range = sel.getRangeAt(0);
          const rect = range.getBoundingClientRect();
          if (rect.width === 0 && rect.height === 0) return;
          handleTrigger(text, {
            top: rect.top,
            left: rect.left,
            bottom: rect.bottom,
            width: rect.width,
            height: rect.height,
          });
        } catch (e) {}
      }, 40);
    };

    // 3. Listen to click outside or escape key
    const handleMouseDown = (e: MouseEvent) => {
      if (tooltipRef.current && !tooltipRef.current.contains(e.target as Node)) {
        setIsVisible(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsVisible(false);
      }
    };

    window.addEventListener('message', handleWindowMessage);
    document.addEventListener('dblclick', handleDocumentDblClick);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('message', handleWindowMessage);
      document.removeEventListener('dblclick', handleDocumentDblClick);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  if (!isVisible) return null;

  const handleSaveToVocab = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!result) return;
    try {
      const decks = getSavedDecks();
      const targetDeck = decks.length > 0 ? decks[0] : getOrCreateDefaultDeck();
      addWordToDeck(targetDeck.id, {
        term: result.original,
        meaning: result.translated,
        phonetic: result.phonetic,
        partOfSpeech: result.partOfSpeech,
        example: result.examples?.[0]?.en,
      });
      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
    } catch (e) {
      console.error('Error saving word:', e);
    }
  };

  const handleOpenFullTranslate = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsVisible(false);
    window.dispatchEvent(
      new CustomEvent('wordnest-open-translate', {
        detail: targetWord,
      })
    );
  };

  return (
    <div
      ref={tooltipRef}
      role="tooltip"
      aria-live="polite"
      className="fixed z-[99999] w-[310px] max-w-[90vw] bg-white text-[#213a34] rounded-2xl shadow-2xl border border-[#213a34]/15 overflow-hidden animate-in fade-in zoom-in-95 duration-150 backdrop-blur-md"
      style={{
        top: `${pos.top}px`,
        left: `${pos.left}px`,
        boxShadow: '0 12px 36px -6px rgba(33, 58, 52, 0.35), 0 4px 12px 0 rgba(0,0,0,0.08)',
      }}
    >
      {/* Header bar */}
      <div className="flex items-center justify-between px-3.5 py-2 bg-[#213a34] text-white select-none">
        <div className="flex items-center gap-1.5 min-w-0">
          <Sparkles className="w-3.5 h-3.5 text-amber-300 shrink-0" />
          <span className="text-xs font-black tracking-wide truncate max-w-[170px]" title={targetWord}>
            {targetWord}
          </span>
          {result?.partOfSpeech && (
            <span className="text-[10px] font-bold bg-white/20 text-amber-200 px-1.5 py-0.2 rounded-full shrink-0">
              {result.partOfSpeech}
            </span>
          )}
        </div>
        <div className="flex items-center gap-1 shrink-0">
          <button
            type="button"
            onClick={() => speak(targetWord)}
            className="p-1 rounded-full text-amber-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            title="Nghe phát âm chuẩn"
          >
            <Volume2 className="w-3.5 h-3.5" />
          </button>
          <button
            type="button"
            onClick={() => setIsVisible(false)}
            className="p-1 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            title="Đóng (Esc)"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Body content */}
      <div className="p-3 bg-white">
        {isLoading ? (
          <div className="flex items-center justify-center py-4 text-gray-400 gap-2 text-xs font-bold">
            <Loader2 className="w-4 h-4 animate-spin text-[#213a34]" />
            <span>Đang tra từ...</span>
          </div>
        ) : result ? (
          <div className="flex flex-col gap-1.5">
            {result.phonetic && (
              <div className="text-[11px] font-mono font-medium text-gray-500">
                {result.phonetic}
              </div>
            )}
            <div className="text-sm font-extrabold text-[#213a34] leading-snug">
              {result.translated}
            </div>
            {result.examples?.[0]?.en && (
              <div className="text-[11px] text-gray-600 italic bg-amber-50/70 p-1.5 rounded-lg border border-amber-200/50 mt-1 line-clamp-2">
                &ldquo;{result.examples[0].en}&rdquo;
              </div>
            )}
          </div>
        ) : (
          <div className="text-xs text-gray-500 py-1">Không tìm thấy bản dịch.</div>
        )}
      </div>

      {/* Action Footer */}
      <div className="flex items-center justify-between px-3 py-2 bg-gray-50 border-t border-gray-100 text-xs">
        <button
          type="button"
          onClick={handleSaveToVocab}
          disabled={!result}
          className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg font-bold text-[11px] transition-all cursor-pointer ${
            saved
              ? 'bg-green-100 text-green-700 border border-green-300'
              : 'bg-[#213a34] text-amber-300 hover:bg-[#2c4e46] shadow-xs'
          }`}
          title="Lưu từ này vào Sổ từ vựng Flashcard"
        >
          {saved ? <Check className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
          <span>{saved ? 'Đã lưu' : '+ Sổ từ'}</span>
        </button>

        <button
          type="button"
          onClick={handleOpenFullTranslate}
          className="flex items-center gap-1 text-[11px] font-bold text-gray-600 hover:text-[#213a34] px-2 py-1.5 rounded-lg hover:bg-gray-200/60 transition-colors cursor-pointer"
          title="Mở toàn bộ ví dụ và ngữ cảnh trong Bong bóng dịch"
        >
          <span>Mở rộng</span>
          <ExternalLink className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
}
