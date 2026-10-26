'use client';

import { useEffect, useState, useRef, useSyncExternalStore } from 'react';
import {
  Languages,
  ArrowLeftRight,
  Loader2,
  Volume2,
  Copy,
  Check,
  Plus,
  BookOpen,
  Lightbulb,
  X,
  Minus,
  Sparkles,
  RotateCcw,
  BookMarked,
  Clock,
  History,
} from 'lucide-react';
import {
  TranslationResult,
  RecentTranslation,
  translateText,
  getRecentTranslations,
  clearRecentTranslations,
  subscribeRecentTranslations,
} from '@/lib/translateService';
import { addWordToDeck, getSavedDecks, getOrCreateDefaultDeck } from '@/lib/vocabService';
import { addEnglishNote } from '@/lib/englishNotesService';

function speak(text: string, lang = 'en') {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text.trim());
  utterance.lang = lang === 'zh' ? 'zh-CN' : lang === 'vi' ? 'vi-VN' : 'en-US';
  utterance.rate = 0.88;
  const voices = window.speechSynthesis.getVoices();
  const voice = voices.find((v) =>
    v.lang.toLowerCase().startsWith(lang === 'zh' ? 'zh' : lang === 'vi' ? 'vi' : 'en'),
  );
  if (voice) utterance.voice = voice;
  window.speechSynthesis.speak(utterance);
}

export default function TranslateFloatingWidget() {
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  const recents = useSyncExternalStore(
    subscribeRecentTranslations,
    getRecentTranslations,
    () => [],
  );

  const [isOpen, setIsOpen] = useState(false);
  const [inputText, setInputText] = useState('');
  const [sourceLang, setSourceLang] = useState<'en' | 'vi' | 'zh'>('en');
  const [targetLang, setTargetLang] = useState<'vi' | 'en'>('vi');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<TranslationResult | null>(null);

  // Success messages
  const [copied, setCopied] = useState(false);
  const [savedToVocab, setSavedToVocab] = useState(false);
  const [savedToNotes, setSavedToNotes] = useState(false);

  const widgetRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Close when another bubble opens, or open on explicit event
  useEffect(() => {
    const handleActive = (e: Event) => {
      const custom = e as CustomEvent<string>;
      if (custom.detail !== 'translate') {
        setIsOpen(false);
      }
    };
    const handleOpen = () => {
      setIsOpen(true);
      window.dispatchEvent(
        new CustomEvent('wordnest-active-bubble', { detail: 'translate' }),
      );
    };

    window.addEventListener('wordnest-active-bubble', handleActive);
    window.addEventListener('wordnest-open-translate', handleOpen);
    return () => {
      window.removeEventListener('wordnest-active-bubble', handleActive);
      window.removeEventListener('wordnest-open-translate', handleOpen);
    };
  }, []);

  // Close widget when clicking outside or pressing Escape
  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      if (widgetRef.current && !widgetRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  if (!mounted) return null;

  const toggleOpen = () => {
    const next = !isOpen;
    setIsOpen(next);
    if (next) {
      window.dispatchEvent(
        new CustomEvent('wordnest-active-bubble', { detail: 'translate' }),
      );
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  };

  const handleTranslate = async (textToTranslate?: string) => {
    const query = (textToTranslate !== undefined ? textToTranslate : inputText).trim();
    if (!query) return;

    setIsLoading(true);
    setCopied(false);
    setSavedToVocab(false);
    setSavedToNotes(false);

    const res = await translateText(query, sourceLang, targetLang);
    setResult(res);
    setIsLoading(false);
  };

  const handleSwapLang = () => {
    if (sourceLang === 'zh') {
      setSourceLang('en');
      setTargetLang('vi');
    } else if (sourceLang === 'en') {
      setSourceLang('vi');
      setTargetLang('en');
    } else {
      setSourceLang('en');
      setTargetLang('vi');
    }
    if (result) {
      setInputText(result.translated);
      setResult(null);
    }
  };

  const handleCopyMeaning = () => {
    if (!result?.translated) return;
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      void navigator.clipboard.writeText(result.translated);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }
  };

  const handleSaveToVocabDeck = () => {
    if (!result) return;
    const decks = getSavedDecks();
    const targetDeck = decks.length > 0 ? decks[0] : getOrCreateDefaultDeck();

    addWordToDeck(targetDeck.id, {
      term: result.original,
      meaning: result.translated,
      phonetic: result.phonetic,
      partOfSpeech: result.partOfSpeech,
      example: result.examples?.[0]?.en,
    });

    setSavedToVocab(true);
    setTimeout(() => setSavedToVocab(false), 2000);
  };

  const handleSaveToEnglishNotes = () => {
    if (!result) return;
    addEnglishNote({
      structure: result.original,
      explanation: `${result.translated}${result.phonetic ? ` (${result.phonetic})` : ''}`,
    });

    setSavedToNotes(true);
    setTimeout(() => setSavedToNotes(false), 2000);
  };

  const handleSelectRecent = (recent: RecentTranslation) => {
    setInputText(recent.original);
    setSourceLang(recent.sourceLang as any);
    setTargetLang(recent.targetLang as any);
    handleTranslate(recent.original);
  };

  return (
    <div
      ref={widgetRef}
      className="fixed z-[9996] bottom-[212px] right-5 sm:bottom-[224px] sm:right-6 flex flex-col items-end pointer-events-none select-none font-sans"
    >
      {/* 1. EXPANDED INSTANT TRANSLATION WINDOW */}
      {isOpen && (
        <section
          aria-label="Cửa sổ dịch nghĩa và tra từ"
          className="pointer-events-auto mb-2 w-[calc(100vw-24px)] sm:w-[480px] max-h-[calc(100dvh-175px)] sm:max-h-[calc(100dvh-185px)] flex flex-col bg-[#fffdf8] border-2 border-[#213a34] rounded-2xl shadow-2xl overflow-hidden transition-all animate-in fade-in zoom-in-95 duration-150"
          style={{ boxShadow: '6px 6px 0px #213a34' }}
        >
          {/* Header */}
          <div className="bg-[#213a34] text-white px-3.5 py-2.5 flex items-center justify-between border-b-2 border-[#213a34] shrink-0">
            <div className="flex items-center gap-2 min-w-0">
              <div className="w-7 h-7 rounded-lg bg-sky-400 text-[#213a34] flex items-center justify-center font-bold shadow-xs shrink-0">
                <Languages size={17} />
              </div>
              <div>
                <h3 className="font-extrabold text-sm leading-tight text-white flex items-center gap-1.5">
                  Dịch nghĩa & Tra từ
                  <span className="text-[10px] font-black bg-sky-400 text-[#213a34] px-1.5 py-0.2 rounded-md">
                    Trực tiếp
                  </span>
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-1 shrink-0">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                title="Thu nhỏ"
                className="p-1 text-[#e7e0d3] hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
              >
                <Minus size={18} />
              </button>
            </div>
          </div>

          {/* Language Pair Toolbar */}
          <div className="bg-[#f5f0e6] px-3 py-1.5 border-b border-[#213a34]/15 flex items-center justify-between gap-2 text-xs font-black shrink-0">
            <div className="flex items-center gap-1.5">
              <span className="text-[#213a34] bg-white px-2 py-0.5 rounded-lg border border-gray-200">
                {sourceLang === 'en' ? '🇬🇧 Tiếng Anh' : sourceLang === 'zh' ? '🇨🇳 Tiếng Trung' : '🇻🇳 Tiếng Việt'}
              </span>

              <button
                type="button"
                onClick={handleSwapLang}
                title="Đổi chiều dịch"
                className="p-1 hover:bg-white rounded-md text-[#213a34] transition-colors cursor-pointer border border-transparent hover:border-gray-200"
              >
                <ArrowLeftRight size={13} />
              </button>

              <span className="text-[#213a34] bg-white px-2 py-0.5 rounded-lg border border-gray-200">
                {targetLang === 'vi' ? '🇻🇳 Tiếng Việt' : '🇬🇧 Tiếng Anh'}
              </span>
            </div>

            <div className="flex items-center gap-1 text-[11px]">
              <button
                type="button"
                onClick={() => {
                  setSourceLang('en');
                  setTargetLang('vi');
                }}
                className={`px-1.5 py-0.5 rounded ${sourceLang === 'en' && targetLang === 'vi' ? 'bg-[#213a34] text-white' : 'text-[#637770] hover:bg-white'}`}
              >
                Anh-Việt
              </button>
              <button
                type="button"
                onClick={() => {
                  setSourceLang('zh');
                  setTargetLang('vi');
                }}
                className={`px-1.5 py-0.5 rounded ${sourceLang === 'zh' ? 'bg-[#213a34] text-white' : 'text-[#637770] hover:bg-white'}`}
              >
                Trung-Việt
              </button>
              <button
                type="button"
                onClick={() => {
                  setSourceLang('vi');
                  setTargetLang('en');
                }}
                className={`px-1.5 py-0.5 rounded ${sourceLang === 'vi' ? 'bg-[#213a34] text-white' : 'text-[#637770] hover:bg-white'}`}
              >
                Việt-Anh
              </button>
            </div>
          </div>

          {/* Input & Action Area */}
          <div className="p-3 bg-white border-b border-[#213a34]/10 shrink-0">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleTranslate();
              }}
              className="flex items-center gap-1.5"
            >
              <div className="relative flex-1">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Nhập từ, cụm từ hoặc câu cần dịch..."
                  className="w-full bg-[#faf8f5] border border-[#213a34]/25 focus:border-[#213a34] rounded-xl pl-3 pr-8 py-2 text-xs font-bold text-[#213a34] outline-none"
                />
                {inputText && (
                  <button
                    type="button"
                    onClick={() => {
                      setInputText('');
                      setResult(null);
                      inputRef.current?.focus();
                    }}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 p-0.5"
                  >
                    <X size={13} />
                  </button>
                )}
              </div>

              <button
                type="submit"
                disabled={!inputText.trim() || isLoading}
                className="bg-[#213a34] hover:bg-[#2c4a42] disabled:opacity-40 text-sky-300 font-black text-xs px-3.5 py-2 rounded-xl flex items-center gap-1 cursor-pointer transition-all shrink-0 shadow-xs"
              >
                {isLoading ? <Loader2 size={14} className="animate-spin" /> : <Languages size={14} />}
                <span>Dịch</span>
              </button>
            </form>
          </div>

          {/* Results Area */}
          <div className="flex-1 overflow-y-auto p-3 space-y-3">
            {result ? (
              <div className="space-y-3 animate-in fade-in duration-150">
                {/* Main Translated Card */}
                <div
                  className="p-3.5 bg-white rounded-2xl border-2 border-[#213a34] shadow-sm space-y-2.5"
                  style={{ boxShadow: '4px 4px 0px #38bdf8' }}
                >
                  {/* Original text + Phonetic + Audio */}
                  <div className="flex items-start justify-between gap-2 border-b border-gray-100 pb-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-extrabold text-sm text-[#213a34]">
                          {result.original}
                        </span>
                        {result.partOfSpeech && (
                          <span className="text-[10px] font-black uppercase px-1.5 py-0.2 rounded bg-sky-100 text-sky-800">
                            {result.partOfSpeech}
                          </span>
                        )}
                      </div>
                      {result.phonetic && (
                        <p className="text-xs font-mono font-bold text-gray-500 mt-0.5">
                          {result.phonetic}
                        </p>
                      )}
                    </div>

                    <button
                      type="button"
                      onClick={() => speak(result.original, result.sourceLang)}
                      className="p-1.5 bg-[#f5f0e6] hover:bg-sky-200 text-[#213a34] rounded-lg transition-colors cursor-pointer"
                      title="Phát âm từ gốc"
                    >
                      <Volume2 size={15} />
                    </button>
                  </div>

                  {/* Vietnamese Meaning Result */}
                  <div className="space-y-1">
                    <span className="text-[10px] font-black uppercase tracking-wider text-gray-400 block">
                      Nghĩa tiếng Việt:
                    </span>
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-base font-black text-emerald-800 leading-tight">
                        {result.translated}
                      </p>
                      <div className="flex items-center gap-1 shrink-0">
                        <button
                          type="button"
                          onClick={() => speak(result.translated, result.targetLang)}
                          className="p-1 text-gray-400 hover:text-[#213a34] rounded cursor-pointer"
                          title="Đọc nghĩa tiếng Việt"
                        >
                          <Volume2 size={13} />
                        </button>
                        <button
                          type="button"
                          onClick={handleCopyMeaning}
                          className="p-1 text-gray-400 hover:text-[#213a34] rounded cursor-pointer"
                          title="Sao chép nghĩa"
                        >
                          {copied ? <Check size={13} className="text-emerald-600" /> : <Copy size={13} />}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* English Definition / Examples (if single word) */}
                  {result.definitions && result.definitions.length > 0 && (
                    <div className="pt-2 border-t border-dashed border-gray-200 text-xs space-y-1">
                      <span className="text-[10px] font-bold text-gray-400">Định nghĩa tiếng Anh:</span>
                      <p className="italic text-gray-600 leading-snug">
                        {result.definitions[0]}
                      </p>
                    </div>
                  )}

                  {result.examples && result.examples.length > 0 && (
                    <div className="pt-1.5 border-t border-dashed border-gray-200 text-xs">
                      <span className="text-[10px] font-bold text-gray-400">Ví dụ minh họa:</span>
                      <p className="font-semibold text-[#213a34] mt-0.5">
                        &ldquo;{result.examples[0].en}&rdquo;
                      </p>
                    </div>
                  )}
                </div>

                {/* Quick 1-Click Save Buttons */}
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={handleSaveToVocabDeck}
                    className="py-2 px-2.5 rounded-xl bg-[#213a34] hover:bg-[#2c4a42] text-amber-300 font-black text-xs flex items-center justify-center gap-1.5 transition-all shadow-xs cursor-pointer"
                  >
                    {savedToVocab ? (
                      <>
                        <Check size={14} className="text-emerald-400" />
                        <span>Đã lưu vào bộ từ!</span>
                      </>
                    ) : (
                      <>
                        <BookOpen size={14} />
                        <span>Lưu vào Bộ từ vựng</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handleSaveToEnglishNotes}
                    className="py-2 px-2.5 rounded-xl bg-amber-100 hover:bg-amber-200 text-[#213a34] font-black text-xs flex items-center justify-center gap-1.5 transition-all border border-amber-300 shadow-xs cursor-pointer"
                  >
                    {savedToNotes ? (
                      <>
                        <Check size={14} className="text-emerald-600" />
                        <span>Đã lưu vào bảng mẹo!</span>
                      </>
                    ) : (
                      <>
                        <BookMarked size={14} />
                        <span>Lưu vào Cấu trúc & Mẹo</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            ) : (
              /* Empty state / Welcome */
              <div className="py-6 text-center space-y-2">
                <div className="w-10 h-10 mx-auto rounded-full bg-sky-100 text-sky-800 flex items-center justify-center">
                  <Languages size={20} />
                </div>
                <p className="text-xs font-black text-[#213a34]">
                  Nhập bất kỳ từ hoặc câu nào để dịch
                </p>
                <p className="text-[11px] text-gray-500 max-w-xs mx-auto">
                  Tự động tra nghĩa tiếng Việt, phiên âm IPA, phát âm giọng bản xứ và cho phép lưu 1-chạm vào bộ từ vựng hoặc bảng ghi chú!
                </p>
              </div>
            )}

            {/* Recent Lookups Section */}
            {recents.length > 0 && (
              <div className="pt-2 border-t border-gray-100 space-y-1.5">
                <div className="flex items-center justify-between text-[11px] font-black text-gray-400">
                  <span className="flex items-center gap-1">
                    <History size={11} /> Tra cứu gần đây:
                  </span>
                  <button
                    type="button"
                    onClick={() => clearRecentTranslations()}
                    className="text-gray-400 hover:text-red-500 cursor-pointer"
                  >
                    Xóa
                  </button>
                </div>

                <div className="flex items-center gap-1.5 flex-wrap">
                  {recents.slice(0, 8).map((r) => (
                    <button
                      key={r.id}
                      type="button"
                      onClick={() => handleSelectRecent(r)}
                      className="px-2 py-1 rounded-lg bg-white border border-gray-200 hover:border-[#213a34] text-[11px] font-bold text-[#213a34] flex items-center gap-1 cursor-pointer transition-colors shadow-2xs"
                    >
                      <span>{r.original}</span>
                      <span className="text-gray-400 text-[10px]">→ {r.translated}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* 2. MESSENGER TRANSLATION CHAT BUBBLE BUTTON */}
      <button
        type="button"
        onClick={toggleOpen}
        aria-label="Mở Dịch nghĩa & Tra từ"
        className={`pointer-events-auto relative w-14 h-14 sm:w-15 sm:h-15 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer shadow-xl ${
          isOpen
            ? 'bg-[#213a34] text-sky-400 rotate-90 scale-95 border-2 border-sky-400'
            : 'bg-[#213a34] text-sky-400 hover:scale-110 active:scale-95 border-2 border-sky-400/80 hover:border-sky-400'
        }`}
        style={{
          boxShadow:
            '0 8px 24px -4px rgba(33, 58, 52, 0.45), 0 2px 6px 0 rgba(0,0,0,0.1)',
        }}
      >
        {isOpen ? (
          <X size={26} strokeWidth={2.5} />
        ) : (
          <div className="relative flex items-center justify-center">
            <Languages size={26} strokeWidth={2.3} />
            <Sparkles size={11} className="absolute -top-1 -right-1 text-sky-300 animate-pulse" />
          </div>
        )}
      </button>
    </div>
  );
}
