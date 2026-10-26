'use client';

import { useEffect, useState, useRef, useSyncExternalStore } from 'react';
import {
  BookOpen,
  Volume2,
  Plus,
  X,
  Minus,
  ExternalLink,
  Search,
  Sparkles,
  Layers,
  GraduationCap,
  Eye,
  Check,
} from 'lucide-react';
import {
  WordItem,
  getSavedDecks,
  subscribeDecks,
  addWordToDeck,
  updateWordReview,
  getOrCreateDefaultDeck,
} from '@/lib/vocabService';
import { translateText } from '@/lib/translateService';

function speak(text: string, lang = 'en') {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text.trim());
  utterance.lang = lang === 'zh' ? 'zh-CN' : 'en-US';
  utterance.rate = lang === 'zh' ? 0.8 : 0.86;
  const voices = window.speechSynthesis.getVoices();
  const voice = voices.find((v) =>
    v.lang.toLowerCase().startsWith(lang === 'zh' ? 'zh' : 'en'),
  );
  if (voice) utterance.voice = voice;
  window.speechSynthesis.speak(utterance);
}

const EMPTY_DECKS: DeckItem[] = [];
const getDecksServerSnapshot = () => EMPTY_DECKS;

export default function VocabFloatingWidget() {
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
  const decks = useSyncExternalStore(
    subscribeDecks,
    getSavedDecks,
    getDecksServerSnapshot,
  );

  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'study' | 'add' | 'list'>('study');
  const [selectedDeckId, setSelectedDeckId] = useState<number | 'all'>('all');

  // Flashcard study state
  const [cardIndex, setCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  // Quick add form state
  const [addDeckId, setAddDeckId] = useState<number>(0);
  const [addTerm, setAddTerm] = useState('');
  const [addMeaning, setAddMeaning] = useState('');
  const [addExample, setAddExample] = useState('');
  const [addPhonetic, setAddPhonetic] = useState('');
  const [addSuccessMsg, setAddSuccessMsg] = useState('');

  // Search in list
  const [searchQuery, setSearchQuery] = useState('');
  const [reviewTimestamp] = useState(() => (typeof Date !== 'undefined' ? Date.now() : 0));

  const widgetRef = useRef<HTMLDivElement>(null);
  const termInputRef = useRef<HTMLInputElement>(null);

  // Listen to active-bubble events to close if another bubble opens
  useEffect(() => {
    const handleActive = (e: Event) => {
      const custom = e as CustomEvent<string>;
      if (custom.detail !== 'vocab') {
        setIsOpen(false);
      }
    };
    window.addEventListener('wordnest-active-bubble', handleActive);
    return () =>
      window.removeEventListener('wordnest-active-bubble', handleActive);
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
        new CustomEvent('wordnest-active-bubble', { detail: 'vocab' }),
      );
    }
  };

  const handleOpenLibraryPage = () => {
    if (window.location.pathname === '/') {
      window.location.hash = 'library';
      window.dispatchEvent(new HashChangeEvent('hashchange'));
    } else {
      window.location.href = '/#library';
    }
  };

  // Determine current deck and words to study
  const activeDeck =
    selectedDeckId === 'all'
      ? null
      : decks.find((d) => d.id === selectedDeckId);

  const allWords: (WordItem & {
    deckName?: string;
    deckLanguage?: string;
    deckId: number;
  })[] =
    selectedDeckId === 'all'
      ? decks.flatMap((d) =>
          d.words.map((w) => ({
            ...w,
            deckName: d.name,
            deckLanguage: d.language ?? 'en',
            deckId: d.id,
          })),
        )
      : (activeDeck?.words ?? []).map((w) => ({
          ...w,
          deckName: activeDeck?.name,
          deckLanguage: activeDeck?.language ?? 'en',
          deckId: activeDeck?.id ?? 0,
        }));

  // Filter due words for review using stored timestamp
  const dueWords = allWords.filter((w) => w.nextReview <= reviewTimestamp);
  // If no due words, fallback to all words so user can always study!
  const studyQueue = dueWords.length > 0 ? dueWords : allWords;
  const currentCard = studyQueue[cardIndex % Math.max(studyQueue.length, 1)];

  // Total review due count across all decks
  const totalDueCount = decks.reduce(
    (sum, d) =>
      sum + d.words.filter((w) => w.nextReview <= reviewTimestamp).length,
    0,
  );

  const effectiveAddDeckId = addDeckId || (decks[0]?.id ?? 0);

  const handlePlayVoice = (text: string, lang = 'en') => {
    setIsSpeaking(true);
    speak(text, lang);
    setTimeout(() => setIsSpeaking(false), 900);
  };

  const handleRateCard = (rating: 'again' | 'learning' | 'known') => {
    if (!currentCard) return;
    updateWordReview(currentCard.deckId, currentCard.id, rating);
    setIsFlipped(false);
    if (cardIndex + 1 < studyQueue.length) {
      setCardIndex((prev) => prev + 1);
    } else {
      setCardIndex(0);
    }
  };

  const handleQuickAdd = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const term = addTerm.trim();
    const meaning = addMeaning.trim();
    if (!term) return;

    let targetDeckId = effectiveAddDeckId;
    if (!targetDeckId) {
      const defaultDeck = getOrCreateDefaultDeck();
      targetDeckId = defaultDeck.id;
    }

    const res = addWordToDeck(targetDeckId, {
      term,
      meaning: meaning || 'Đang cập nhật...',
      example: addExample.trim(),
      phonetic: addPhonetic.trim(),
    });

    if (res.success) {
      setAddSuccessMsg(`Đã lưu "${term}" vào bộ từ!`);
      setAddTerm('');
      setAddMeaning('');
      setAddExample('');
      setAddPhonetic('');
      termInputRef.current?.focus();
      setTimeout(() => setAddSuccessMsg(''), 2500);
    } else {
      setAddSuccessMsg(res.message);
      setTimeout(() => setAddSuccessMsg(''), 3000);
    }
  };

  const filteredWordsList = allWords.filter(
    (w) =>
      w.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
      w.meaning.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div
      ref={widgetRef}
      className="fixed z-[9998] bottom-[84px] right-5 sm:bottom-[92px] sm:right-6 flex flex-col items-end pointer-events-none select-none font-sans"
    >
      {/* 1. EXPANDED MESSENGER-LIKE VOCABULARY WINDOW */}
      {isOpen && (
        <section
          aria-label="Cửa sổ học từ vựng"
          className="pointer-events-auto mb-3 w-[calc(100vw-32px)] sm:w-[410px] max-h-[80vh] flex flex-col bg-[#fffdf8] border-2 border-[#213a34] rounded-2xl shadow-2xl overflow-hidden transition-all animate-in fade-in zoom-in-95 duration-200"
          style={{ boxShadow: '6px 6px 0px #213a34' }}
        >
          {/* Header */}
          <div className="bg-[#213a34] text-white px-4 py-3 flex items-center justify-between border-b-2 border-[#213a34]">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-8 h-8 rounded-xl bg-[#f8d467] text-[#213a34] flex items-center justify-center font-bold shadow-sm shrink-0">
                <BookOpen size={18} />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-1.5">
                  <h3 className="font-extrabold text-[15px] leading-tight text-white">
                    Học từ vựng
                  </h3>
                  {totalDueCount > 0 && (
                    <span className="text-[10px] font-black bg-[#eb6a52] text-white px-1.5 py-0.2 rounded-md">
                      {totalDueCount} cần ôn
                    </span>
                  )}
                </div>

                {/* Deck selector dropdown in header */}
                <div className="mt-0.5">
                  <select
                    value={selectedDeckId}
                    onChange={(e) => {
                      const val = e.target.value;
                      setSelectedDeckId(val === 'all' ? 'all' : Number(val));
                      setCardIndex(0);
                      setIsFlipped(false);
                    }}
                    className="bg-white/10 hover:bg-white/20 text-[#f8d467] text-[11px] font-bold rounded px-1 py-0.5 border-0 outline-none cursor-pointer max-w-[200px] truncate"
                  >
                    <option value="all" className="bg-[#213a34] text-white">
                      📚 Tất cả bộ từ ({allWords.length} từ)
                    </option>
                    {decks.map((deck) => (
                      <option
                        key={deck.id}
                        value={deck.id}
                        className="bg-[#213a34] text-white"
                      >
                        {deck.emoji} {deck.name} ({deck.words.length})
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1 shrink-0">
              <button
                type="button"
                onClick={handleOpenLibraryPage}
                title="Mở toàn màn hình trong Bộ từ"
                className="p-1.5 text-[#e7e0d3] hover:text-[#f8d467] hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
              >
                <ExternalLink size={16} />
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                title="Thu nhỏ bong bóng"
                className="p-1.5 text-[#e7e0d3] hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
              >
                <Minus size={18} />
              </button>
            </div>
          </div>

          {/* Sub Navigation Tabs */}
          <div className="bg-[#f5f0e6] px-3 py-1.5 border-b border-[#213a34]/15 flex items-center justify-between gap-1.5 text-xs font-black">
            <button
              type="button"
              onClick={() => setActiveTab('study')}
              className={`flex-1 py-1 px-2 rounded-xl transition-all flex items-center justify-center gap-1 cursor-pointer ${
                activeTab === 'study'
                  ? 'bg-[#213a34] text-[#f8d467] shadow-sm'
                  : 'bg-white/60 text-[#213a34] hover:bg-white'
              }`}
            >
              <GraduationCap size={14} />
              <span>Ôn tập</span>
              {studyQueue.length > 0 && (
                <span className="text-[10px] opacity-75">
                  ({studyQueue.length})
                </span>
              )}
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('add')}
              className={`flex-1 py-1 px-2 rounded-xl transition-all flex items-center justify-center gap-1 cursor-pointer ${
                activeTab === 'add'
                  ? 'bg-[#213a34] text-[#f8d467] shadow-sm'
                  : 'bg-white/60 text-[#213a34] hover:bg-white'
              }`}
            >
              <Plus size={14} />
              <span>Thêm từ</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('list')}
              className={`flex-1 py-1 px-2 rounded-xl transition-all flex items-center justify-center gap-1 cursor-pointer ${
                activeTab === 'list'
                  ? 'bg-[#213a34] text-[#f8d467] shadow-sm'
                  : 'bg-white/60 text-[#213a34] hover:bg-white'
              }`}
            >
              <Layers size={14} />
              <span>Sổ từ</span>
            </button>
          </div>

          {/* TAB 1: FLASHCARD STUDY */}
          {activeTab === 'study' && (
            <div className="p-3.5 flex-1 flex flex-col justify-between overflow-y-auto">
              {studyQueue.length === 0 ? (
                <div className="py-10 text-center space-y-3">
                  <div className="w-12 h-12 mx-auto rounded-full bg-[#f8d467]/30 flex items-center justify-center text-[#213a34]">
                    <Sparkles size={24} />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-[#213a34] text-base">
                      Chưa có từ vựng nào!
                    </h4>
                    <p className="text-xs text-[#71817b] mt-1 font-semibold">
                      Chuyển sang tab <b>Thêm từ</b> để lưu từ mới bạn vừa học
                      nhé.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setActiveTab('add')}
                    className="mt-2 bg-[#213a34] text-white text-xs font-black px-4 py-2 rounded-xl inline-flex items-center gap-1 cursor-pointer"
                  >
                    <Plus size={14} /> Thêm từ ngay
                  </button>
                </div>
              ) : (
                <div className="space-y-3">
                  {/* Progress & Card Index */}
                  <div className="flex items-center justify-between text-xs font-black text-[#71817b]">
                    <span>
                      {dueWords.length > 0 ? 'Cần ôn hôm nay' : 'Đang ôn tự do'}:{' '}
                      <b className="text-[#213a34]">
                        {cardIndex + 1}/{studyQueue.length}
                      </b>
                    </span>
                    {currentCard?.deckName && (
                      <span className="text-[10px] bg-[#f5f0e6] text-[#213a34] px-1.5 py-0.5 rounded-md truncate max-w-[150px]">
                        {currentCard.deckName}
                      </span>
                    )}
                  </div>

                  {/* Flashcard Box */}
                  <div
                    className="border-2 border-[#213a34] rounded-2xl p-4 bg-white shadow-md transition-all flex flex-col justify-between min-h-[170px]"
                    style={{ boxShadow: '4px 4px 0px #f8d467' }}
                  >
                    {/* Front: Term + Phonetic + Audio */}
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <span
                          className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md ${
                            currentCard?.level === 'known'
                              ? 'bg-[#edf5f1] text-[#49a078]'
                              : currentCard?.level === 'learning'
                                ? 'bg-[#fff5e5] text-[#9a4f00]'
                                : 'bg-[#eef2ff] text-[#4f46e5]'
                          }`}
                        >
                          {currentCard?.level === 'known'
                            ? 'Đã thuộc'
                            : currentCard?.level === 'learning'
                              ? 'Đang học'
                              : 'Từ mới'}
                        </span>

                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            if (currentCard) {
                              handlePlayVoice(
                                currentCard.term,
                                currentCard.deckLanguage ?? 'en',
                              );
                            }
                          }}
                          className={`p-1.5 rounded-lg border border-[#213a34]/20 hover:bg-[#f8d467] text-[#213a34] transition-all cursor-pointer ${
                            isSpeaking
                              ? 'bg-[#f8d467] scale-110'
                              : 'bg-[#f5f0e6]'
                          }`}
                          title="Nghe phát âm"
                        >
                          <Volume2 size={16} />
                        </button>
                      </div>

                      <div className="mt-2 text-center">
                        <h2 className="text-2xl font-black text-[#213a34] tracking-tight">
                          {currentCard?.term}
                        </h2>
                        {currentCard?.phonetic && (
                          <p className="text-xs font-bold text-[#71817b] mt-0.5">
                            {currentCard.phonetic}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Back / Meaning (revealed or hint) */}
                    <div className="mt-3 pt-3 border-t border-dashed border-[#213a34]/15">
                      {isFlipped ? (
                        <div className="text-center animate-in fade-in duration-150">
                          <p className="text-base font-extrabold text-[#213a34]">
                            {currentCard?.meaning}
                          </p>
                          {currentCard?.example && (
                            <p className="text-xs text-[#547169] font-semibold mt-1 italic">
                              &ldquo;{currentCard.example}&rdquo;
                            </p>
                          )}
                        </div>
                      ) : (
                        <div className="flex items-center justify-center gap-1 text-xs font-bold text-[#71817b]">
                          <Eye size={13} />
                          <span>Bấm để xem nghĩa tiếng Việt</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Rating Response Buttons */}
                  {isFlipped ? (
                    <div className="grid grid-cols-3 gap-2 pt-1">
                      <button
                        type="button"
                        onClick={() => handleRateCard('again')}
                        className="py-2 px-1 rounded-xl bg-[#fbe5df] hover:bg-[#f8cfc7] text-[#b84b3c] font-black text-xs border border-[#b84b3c]/30 flex flex-col items-center gap-0.5 cursor-pointer transition-all"
                      >
                        <span>🔴 Chưa nhớ</span>
                        <span className="text-[9px] font-semibold opacity-75">
                          Ôn lại ngay
                        </span>
                      </button>
                      <button
                        type="button"
                        onClick={() => handleRateCard('learning')}
                        className="py-2 px-1 rounded-xl bg-[#fff5e5] hover:bg-[#ffe8c2] text-[#9a4f00] font-black text-xs border border-[#9a4f00]/30 flex flex-col items-center gap-0.5 cursor-pointer transition-all"
                      >
                        <span>🟡 Đang học</span>
                        <span className="text-[9px] font-semibold opacity-75">
                          + 1 ngày
                        </span>
                      </button>
                      <button
                        type="button"
                        onClick={() => handleRateCard('known')}
                        className="py-2 px-1 rounded-xl bg-[#edf5f1] hover:bg-[#d6ecdf] text-[#49a078] font-black text-xs border border-[#49a078]/30 flex flex-col items-center gap-0.5 cursor-pointer transition-all"
                      >
                        <span>🟢 Đã thuộc</span>
                        <span className="text-[9px] font-semibold opacity-75">
                          + 3 ngày
                        </span>
                      </button>
                    </div>
                  ) : (
                    <div className="flex justify-between items-center pt-1">
                      <button
                        type="button"
                        onClick={() => {
                          setCardIndex((prev) =>
                            prev > 0 ? prev - 1 : studyQueue.length - 1,
                          );
                          setIsFlipped(false);
                        }}
                        className="text-xs font-bold text-[#71817b] hover:text-[#213a34] px-2 py-1 rounded cursor-pointer"
                      >
                        ‹ Từ trước
                      </button>
                      <button
                        type="button"
                        onClick={() => setIsFlipped(true)}
                        className="bg-[#213a34] text-white px-4 py-2 rounded-xl text-xs font-black hover:bg-[#2d4f47] cursor-pointer"
                      >
                        Lật thẻ xem nghĩa
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setCardIndex((prev) =>
                            prev + 1 < studyQueue.length ? prev + 1 : 0,
                          );
                          setIsFlipped(false);
                        }}
                        className="text-xs font-bold text-[#71817b] hover:text-[#213a34] px-2 py-1 rounded cursor-pointer"
                      >
                        Từ tiếp ›
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* TAB 2: QUICK ADD WORD */}
          {activeTab === 'add' && (
            <form
              onSubmit={handleQuickAdd}
              className="p-3.5 space-y-2.5 overflow-y-auto"
            >
              {addSuccessMsg && (
                <div className="p-2 rounded-xl bg-[#edf5f1] border border-[#49a078] text-[#213a34] text-xs font-bold flex items-center gap-1.5 animate-in fade-in duration-200">
                  <Check size={14} className="text-[#49a078]" />
                  <span>{addSuccessMsg}</span>
                </div>
              )}

              {/* Target deck selection */}
              <div>
                <label className="text-[10px] font-black text-[#71817b] uppercase tracking-wider block mb-1">
                  Lưu vào bộ từ:
                  <select
                    value={effectiveAddDeckId}
                    onChange={(e) => setAddDeckId(Number(e.target.value))}
                    className="w-full bg-white border border-[#213a34]/25 rounded-xl px-2.5 py-1.5 text-xs font-bold text-[#213a34] mt-1 normal-case"
                  >
                    {decks.map((deck) => (
                      <option key={deck.id} value={deck.id}>
                        {deck.emoji} {deck.name}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-black text-[#71817b] uppercase tracking-wider">
                    Từ vựng (bắt buộc):
                  </span>
                  {addTerm.trim() && (
                    <button
                      type="button"
                      onClick={async () => {
                        const res = await translateText(addTerm.trim(), 'en', 'vi');
                        if (res) {
                          setAddMeaning(res.translated);
                          if (res.phonetic) setAddPhonetic(res.phonetic);
                          if (res.examples?.[0]?.en) setAddExample(res.examples[0].en);
                        }
                      }}
                      className="text-[10px] font-black text-[#213a34] bg-sky-100 hover:bg-sky-200 px-1.5 py-0.5 rounded flex items-center gap-1 cursor-pointer"
                    >
                      <Sparkles size={11} className="text-sky-600" />
                      <span>Tự tìm nghĩa</span>
                    </button>
                  )}
                </div>
                <input
                  ref={termInputRef}
                  value={addTerm}
                  onChange={(e) => setAddTerm(e.target.value)}
                  placeholder="Ví dụ: itinerary, destination..."
                  className="w-full bg-white border border-[#213a34]/25 focus:border-[#213a34] rounded-xl px-3 py-2 text-sm font-bold text-[#213a34] outline-none normal-case font-sans"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-[10px] font-black text-[#71817b] uppercase tracking-wider block mb-1">
                    Nghĩa tiếng Việt:
                    <input
                      value={addMeaning}
                      onChange={(e) => setAddMeaning(e.target.value)}
                      placeholder="Ví dụ: lịch trình..."
                      className="w-full bg-white border border-[#213a34]/25 focus:border-[#213a34] rounded-xl px-3 py-1.5 text-xs font-bold text-[#213a34] outline-none mt-1 normal-case font-sans"
                      required
                    />
                  </label>
                </div>
                <div>
                  <label className="text-[10px] font-black text-[#71817b] uppercase tracking-wider block mb-1">
                    Phiên âm (tùy chọn):
                    <input
                      value={addPhonetic}
                      onChange={(e) => setAddPhonetic(e.target.value)}
                      placeholder="/aɪˈtɪnəreri/"
                      className="w-full bg-white border border-[#213a34]/25 focus:border-[#213a34] rounded-xl px-3 py-1.5 text-xs font-bold text-[#213a34] outline-none mt-1 normal-case font-sans"
                    />
                  </label>
                </div>
              </div>

              <div>
                <label className="text-[10px] font-black text-[#71817b] uppercase tracking-wider block mb-1">
                  Câu ví dụ (tùy chọn):
                  <input
                    value={addExample}
                    onChange={(e) => setAddExample(e.target.value)}
                    placeholder="Ví dụ: Let's check the itinerary."
                    className="w-full bg-white border border-[#213a34]/25 focus:border-[#213a34] rounded-xl px-3 py-1.5 text-xs font-bold text-[#213a34] outline-none mt-1 normal-case font-sans"
                  />
                </label>
              </div>

              <button
                type="submit"
                disabled={!addTerm.trim()}
                className="w-full mt-1 bg-[#213a34] disabled:opacity-40 hover:bg-[#2d4f47] text-[#f8d467] font-black text-xs py-2.5 rounded-xl flex items-center justify-center gap-1.5 cursor-pointer shadow-sm transition-all"
              >
                <Plus size={16} /> Lưu từ vào bộ
              </button>
            </form>
          )}

          {/* TAB 3: BROWSE & SEARCH */}
          {activeTab === 'list' && (
            <div className="p-3 space-y-2 flex-1 flex flex-col overflow-hidden">
              <div className="relative">
                <Search
                  size={14}
                  className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Tìm từ trong bộ..."
                  className="w-full bg-white border border-[#213a34]/20 rounded-xl pl-8 pr-3 py-1.5 text-xs font-bold text-[#213a34] outline-none"
                />
              </div>

              <div className="overflow-y-auto space-y-1.5 flex-1 max-h-[280px]">
                {filteredWordsList.length === 0 ? (
                  <p className="text-center text-xs text-gray-400 py-6">
                    Không tìm thấy từ vựng nào.
                  </p>
                ) : (
                  filteredWordsList.map((w) => (
                    <div
                      key={`${w.deckId}-${w.id}`}
                      className="p-2 bg-white rounded-xl border border-[#213a34]/10 hover:border-[#213a34]/30 flex items-center justify-between gap-2 text-xs"
                    >
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-1.5">
                          <b className="text-[#213a34] font-black">{w.term}</b>
                          {w.phonetic && (
                            <small className="text-[#71817b] font-semibold">
                              {w.phonetic}
                            </small>
                          )}
                        </div>
                        <p className="text-[#547169] text-[11px] truncate">
                          {w.meaning}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() =>
                          handlePlayVoice(w.term, w.deckLanguage ?? 'en')
                        }
                        className="p-1.5 rounded-lg bg-[#f5f0e6] hover:bg-[#f8d467] text-[#213a34] cursor-pointer"
                        title="Phát âm"
                      >
                        <Volume2 size={13} />
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}
        </section>
      )}

      {/* 2. MESSENGER VOCABULARY CHAT BUBBLE BUTTON */}
      <button
        type="button"
        onClick={toggleOpen}
        aria-label="Mở Học từ vựng"
        className={`pointer-events-auto relative w-14 h-14 sm:w-15 sm:h-15 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer shadow-xl ${
          isOpen
            ? 'bg-[#213a34] text-[#f8d467] rotate-90 scale-95 border-2 border-[#f8d467]'
            : 'bg-[#f8d467] text-[#213a34] hover:scale-110 active:scale-95 border-2 border-[#213a34]'
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
            <BookOpen size={26} strokeWidth={2.4} />
          </div>
        )}

        {/* Due review badge */}
        {!isOpen && totalDueCount > 0 && (
          <span className="absolute -top-1 -right-1 min-w-[22px] h-[22px] px-1.5 flex items-center justify-center rounded-full text-[11px] font-black text-white bg-[#eb6a52] shadow-md border-2 border-white transition-all">
            {totalDueCount}
          </span>
        )}
      </button>
    </div>
  );
}
