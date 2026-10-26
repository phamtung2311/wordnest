'use client';

import { useEffect, useState, useRef, useSyncExternalStore } from 'react';
import {
  Lightbulb,
  Sparkles,
  Search,
  Plus,
  Pin,
  Trash2,
  Edit3,
  Copy,
  Check,
  Volume2,
  X,
  Minus,
  RotateCcw,
  BookMarked,
  Zap,
  GraduationCap,
  Eye,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  Shuffle,
  AlertCircle,
  Hash,
} from 'lucide-react';
import {
  EnglishNoteItem,
  EnglishNoteCategory,
  CATEGORY_LABELS,
  getSavedEnglishNotes,
  saveEnglishNotes,
  addEnglishNote,
  updateEnglishNote,
  deleteEnglishNote,
  togglePinEnglishNote,
  resetToDefaultNotes,
  subscribeEnglishNotes,
} from '@/lib/englishNotesService';

function speak(text: string) {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text.trim());
  utterance.lang = 'en-US';
  utterance.rate = 0.88;
  const voices = window.speechSynthesis.getVoices();
  const voice = voices.find((v) => v.lang.toLowerCase().startsWith('en'));
  if (voice) utterance.voice = voice;
  window.speechSynthesis.speak(utterance);
}

export default function EnglishNotesFloatingWidget() {
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  const notes = useSyncExternalStore(
    subscribeEnglishNotes,
    getSavedEnglishNotes,
    () => [],
  );

  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'browse' | 'quiz' | 'add'>('browse');

  // Filter & Search states
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<EnglishNoteCategory | 'all' | 'pinned'>('all');

  // Quick Copy Feedback state
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Audio playing state
  const [speakingText, setSpeakingText] = useState<string | null>(null);

  // Add / Edit Form State
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formTitle, setFormTitle] = useState('');
  const [formCategory, setFormCategory] = useState<EnglishNoteCategory>('toeic');
  const [formPattern, setFormPattern] = useState('');
  const [formExplanation, setFormExplanation] = useState('');
  const [formExEn, setFormExEn] = useState('');
  const [formExVi, setFormExVi] = useState('');
  const [formTip, setFormTip] = useState('');
  const [formTags, setFormTags] = useState('');
  const [formIsPinned, setFormIsPinned] = useState(false);
  const [formSuccessMsg, setFormSuccessMsg] = useState('');

  // Flashcard / Rapid Review State
  const [quizIndex, setQuizIndex] = useState(0);
  const [isQuizFlipped, setIsQuizFlipped] = useState(false);

  const widgetRef = useRef<HTMLDivElement>(null);
  const titleInputRef = useRef<HTMLInputElement>(null);

  // Listen to active-bubble events to close if another bubble opens, or open if requested
  useEffect(() => {
    const handleActive = (e: Event) => {
      const custom = e as CustomEvent<string>;
      if (custom.detail !== 'english-notes') {
        setIsOpen(false);
      }
    };
    const handleExplicitOpen = () => {
      setIsOpen(true);
      window.dispatchEvent(
        new CustomEvent('wordnest-active-bubble', { detail: 'english-notes' }),
      );
    };

    window.addEventListener('wordnest-active-bubble', handleActive);
    window.addEventListener('wordnest-open-english-notes', handleExplicitOpen);
    return () => {
      window.removeEventListener('wordnest-active-bubble', handleActive);
      window.removeEventListener('wordnest-open-english-notes', handleExplicitOpen);
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
        new CustomEvent('wordnest-active-bubble', { detail: 'english-notes' }),
      );
    }
  };

  const handleCopy = (text: string, id: string) => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      void navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 1800);
    }
  };

  const handleSpeak = (text: string) => {
    setSpeakingText(text);
    speak(text);
    setTimeout(() => setSpeakingText(null), 1500);
  };

  // Filter notes
  const filteredNotes = notes.filter((item) => {
    // Category match
    if (selectedCategory === 'pinned') {
      if (!item.isPinned) return false;
    } else if (selectedCategory !== 'all') {
      if (item.category !== selectedCategory) return false;
    }

    // Search query match
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchTitle = item.title.toLowerCase().includes(q);
      const matchPattern = item.pattern?.toLowerCase().includes(q);
      const matchExplanation = item.explanation.toLowerCase().includes(q);
      const matchTags = item.tags?.some((t) => t.toLowerCase().includes(q));
      const matchExamples = item.examples?.some(
        (ex) => ex.en.toLowerCase().includes(q) || ex.vi.toLowerCase().includes(q),
      );
      return matchTitle || matchPattern || matchExplanation || matchTags || matchExamples;
    }

    return true;
  });

  // Sort pinned items to the top
  const sortedNotes = [...filteredNotes].sort((a, b) => {
    if (a.isPinned && !b.isPinned) return -1;
    if (!a.isPinned && b.isPinned) return 1;
    return b.createdAt - a.createdAt;
  });

  const pinnedCount = notes.filter((n) => n.isPinned).length;

  // Form handlers
  const handleOpenEdit = (item: EnglishNoteItem) => {
    setEditingId(item.id);
    setFormTitle(item.title);
    setFormCategory(item.category);
    setFormPattern(item.pattern || '');
    setFormExplanation(item.explanation);
    setFormExEn(item.examples?.[0]?.en || '');
    setFormExVi(item.examples?.[0]?.vi || '');
    setFormTip(item.tip || '');
    setFormTags(item.tags?.join(', ') || '');
    setFormIsPinned(item.isPinned || false);
    setActiveTab('add');
    titleInputRef.current?.focus();
  };

  const handleResetForm = () => {
    setEditingId(null);
    setFormTitle('');
    setFormCategory('toeic');
    setFormPattern('');
    setFormExplanation('');
    setFormExEn('');
    setFormExVi('');
    setFormTip('');
    setFormTags('');
    setFormIsPinned(false);
    setFormSuccessMsg('');
  };

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formTitle.trim() || !formExplanation.trim()) return;

    const parsedTags = formTags
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean);

    const examples = formExEn.trim()
      ? [{ en: formExEn.trim(), vi: formExVi.trim() }]
      : [];

    if (editingId) {
      updateEnglishNote(editingId, {
        title: formTitle.trim(),
        category: formCategory,
        pattern: formPattern.trim() || undefined,
        explanation: formExplanation.trim(),
        examples,
        tip: formTip.trim() || undefined,
        tags: parsedTags,
        isPinned: formIsPinned,
      });
      setFormSuccessMsg('Đã cập nhật ghi chú thành công!');
    } else {
      addEnglishNote({
        title: formTitle.trim(),
        category: formCategory,
        pattern: formPattern.trim() || undefined,
        explanation: formExplanation.trim(),
        examples,
        tip: formTip.trim() || undefined,
        tags: parsedTags,
        isPinned: formIsPinned,
      });
      setFormSuccessMsg('Đã lưu ghi chú mới vào sổ tay!');
    }

    setTimeout(() => {
      handleResetForm();
      setActiveTab('browse');
    }, 1200);
  };

  // Flashcard items
  const quizItems = sortedNotes.length > 0 ? sortedNotes : notes;
  const currentQuizCard = quizItems[quizIndex % Math.max(quizItems.length, 1)];

  return (
    <div
      ref={widgetRef}
      className="fixed z-[9997] bottom-[148px] right-5 sm:bottom-[158px] sm:right-6 flex flex-col items-end pointer-events-none select-none font-sans"
    >
      {/* 1. EXPANDED MESSENGER-STYLE WINDOW */}
      {isOpen && (
        <section
          aria-label="Cửa sổ ghi chú cấu trúc & mẹo tiếng Anh"
          className="pointer-events-auto mb-3 w-[calc(100vw-32px)] sm:w-[440px] max-h-[82vh] flex flex-col bg-[#fffdf8] border-2 border-[#213a34] rounded-2xl shadow-2xl overflow-hidden transition-all animate-in fade-in zoom-in-95 duration-200"
          style={{ boxShadow: '6px 6px 0px #213a34' }}
        >
          {/* Header */}
          <div className="bg-[#213a34] text-white px-4 py-3 flex items-center justify-between border-b-2 border-[#213a34]">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-8 h-8 rounded-xl bg-amber-400 text-[#213a34] flex items-center justify-center font-bold shadow-sm shrink-0">
                <Lightbulb size={18} className="fill-[#213a34]" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <h3 className="font-extrabold text-[15px] leading-tight text-white">
                    Cấu trúc & Mẹo tiếng Anh
                  </h3>
                  <span className="text-[10px] font-black bg-amber-400 text-[#213a34] px-1.5 py-0.2 rounded-md">
                    {notes.length} ghi chú
                  </span>
                </div>
                <p className="text-[11px] text-[#e7e0d3] font-semibold mt-0.5 truncate">
                  Công thức, mẹo làm bài TOEIC & bẫy đề thi
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1 shrink-0">
              <button
                type="button"
                onClick={() => {
                  if (confirm('Khôi phục lại danh sách các mẹo & cấu trúc TOEIC mẫu ban đầu?')) {
                    resetToDefaultNotes();
                  }
                }}
                title="Khôi phục mẹo & cấu trúc mẫu"
                className="p-1.5 text-[#e7e0d3] hover:text-amber-300 hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
              >
                <RotateCcw size={15} />
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
              onClick={() => setActiveTab('browse')}
              className={`flex-1 py-1 px-2 rounded-xl transition-all flex items-center justify-center gap-1 cursor-pointer ${
                activeTab === 'browse'
                  ? 'bg-[#213a34] text-amber-300 shadow-sm'
                  : 'bg-white/60 text-[#213a34] hover:bg-white'
              }`}
            >
              <BookMarked size={14} />
              <span>Sổ tay</span>
              <span className="text-[10px] opacity-75">({notes.length})</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setIsQuizFlipped(false);
                setActiveTab('quiz');
              }}
              className={`flex-1 py-1 px-2 rounded-xl transition-all flex items-center justify-center gap-1 cursor-pointer ${
                activeTab === 'quiz'
                  ? 'bg-[#213a34] text-amber-300 shadow-sm'
                  : 'bg-white/60 text-[#213a34] hover:bg-white'
              }`}
            >
              <GraduationCap size={14} />
              <span>Ôn & Lướt</span>
            </button>

            <button
              type="button"
              onClick={() => {
                handleResetForm();
                setActiveTab('add');
              }}
              className={`flex-1 py-1 px-2 rounded-xl transition-all flex items-center justify-center gap-1 cursor-pointer ${
                activeTab === 'add'
                  ? 'bg-[#213a34] text-amber-300 shadow-sm'
                  : 'bg-white/60 text-[#213a34] hover:bg-white'
              }`}
            >
              <Plus size={14} />
              <span>{editingId ? 'Sửa mẹo' : 'Thêm mẹo'}</span>
            </button>
          </div>

          {/* TAB 1: BROWSE & SEARCH NOTES */}
          {activeTab === 'browse' && (
            <div className="flex-1 flex flex-col overflow-hidden">
              {/* Search Bar & Category Filter Bar */}
              <div className="p-3 bg-[#faf8f5] border-b border-[#213a34]/10 space-y-2">
                <div className="relative">
                  <Search
                    size={14}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  />
                  <input
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Tìm theo cấu trúc, mẹo TOEIC, từ khóa..."
                    className="w-full bg-white border border-[#213a34]/20 rounded-xl pl-8 pr-7 py-1.5 text-xs font-bold text-[#213a34] outline-none focus:border-[#213a34]"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery('')}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      <X size={13} />
                    </button>
                  )}
                </div>

                {/* Filter Pills */}
                <div className="flex items-center gap-1 overflow-x-auto pb-0.5 text-[11px] font-black scrollbar-none">
                  <button
                    type="button"
                    onClick={() => setSelectedCategory('all')}
                    className={`px-2 py-0.5 rounded-lg shrink-0 transition-all cursor-pointer ${
                      selectedCategory === 'all'
                        ? 'bg-[#213a34] text-white shadow-xs'
                        : 'bg-white border border-gray-200 text-[#637770] hover:bg-gray-50'
                    }`}
                  >
                    Tất cả ({notes.length})
                  </button>

                  {pinnedCount > 0 && (
                    <button
                      type="button"
                      onClick={() => setSelectedCategory('pinned')}
                      className={`px-2 py-0.5 rounded-lg shrink-0 flex items-center gap-1 transition-all cursor-pointer ${
                        selectedCategory === 'pinned'
                          ? 'bg-amber-500 text-white shadow-xs'
                          : 'bg-amber-50 border border-amber-200 text-amber-800 hover:bg-amber-100'
                      }`}
                    >
                      <Pin size={10} className="fill-current" />
                      <span>Đã ghim ({pinnedCount})</span>
                    </button>
                  )}

                  {(Object.keys(CATEGORY_LABELS) as EnglishNoteCategory[]).map((cat) => {
                    const info = CATEGORY_LABELS[cat];
                    const count = notes.filter((n) => n.category === cat).length;
                    if (count === 0) return null;
                    const isActive = selectedCategory === cat;
                    return (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-2 py-0.5 rounded-lg shrink-0 flex items-center gap-1 transition-all cursor-pointer ${
                          isActive
                            ? 'bg-[#213a34] text-white shadow-xs'
                            : 'bg-white border border-gray-200 text-[#637770] hover:bg-gray-50'
                        }`}
                      >
                        <span>{info.emoji}</span>
                        <span>{info.label}</span>
                        <span className="opacity-70 text-[9px]">({count})</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Note Cards List */}
              <div className="flex-1 overflow-y-auto p-3 space-y-3 max-h-[460px]">
                {sortedNotes.length === 0 ? (
                  <div className="py-12 text-center space-y-2">
                    <div className="w-10 h-10 mx-auto rounded-full bg-amber-100 text-amber-800 flex items-center justify-center">
                      <Search size={18} />
                    </div>
                    <p className="text-xs font-black text-[#213a34]">
                      Không tìm thấy mẹo hoặc cấu trúc phù hợp
                    </p>
                    <p className="text-[11px] text-gray-500">
                      Thử đổi từ khóa tìm kiếm hoặc chọn chuyên mục khác.
                    </p>
                  </div>
                ) : (
                  sortedNotes.map((item) => {
                    const catInfo = CATEGORY_LABELS[item.category] || CATEGORY_LABELS.toeic;
                    const isCopied = copiedId === item.id;

                    return (
                      <article
                        key={item.id}
                        className={`rounded-2xl border p-3.5 transition-all bg-white hover:shadow-md ${
                          item.isPinned
                            ? 'border-amber-300 ring-1 ring-amber-200/60 shadow-xs'
                            : 'border-[#213a34]/12'
                        }`}
                      >
                        {/* Card Header: Category + Title + Controls */}
                        <div className="flex items-start justify-between gap-2">
                          <div className="space-y-1 min-w-0 flex-1">
                            <div className="flex items-center gap-1.5 flex-wrap">
                              <span
                                className="inline-flex items-center gap-1 text-[10px] font-black px-2 py-0.5 rounded-md"
                                style={{
                                  backgroundColor: catInfo.badgeBg,
                                  color: catInfo.color,
                                }}
                              >
                                <span>{catInfo.emoji}</span>
                                <span>{catInfo.label}</span>
                              </span>

                              {item.isPinned && (
                                <span className="inline-flex items-center gap-0.5 text-[9px] font-black bg-amber-100 text-amber-800 px-1.5 py-0.2 rounded-md">
                                  <Pin size={9} className="fill-current" /> Đã ghim
                                </span>
                              )}
                            </div>

                            <h4 className="font-extrabold text-sm text-[#213a34] leading-snug">
                              {item.title}
                            </h4>
                          </div>

                          {/* Quick Actions */}
                          <div className="flex items-center gap-1 shrink-0">
                            <button
                              type="button"
                              onClick={() => togglePinEnglishNote(item.id)}
                              className={`p-1 rounded-md transition-colors cursor-pointer ${
                                item.isPinned
                                  ? 'text-amber-500 hover:bg-amber-50'
                                  : 'text-gray-300 hover:text-amber-500 hover:bg-gray-100'
                              }`}
                              title={item.isPinned ? 'Bỏ ghim' : 'Ghim lên đầu'}
                            >
                              <Pin size={13} className={item.isPinned ? 'fill-current' : ''} />
                            </button>

                            <button
                              type="button"
                              onClick={() => handleOpenEdit(item)}
                              className="p-1 text-gray-300 hover:text-[#213a34] hover:bg-gray-100 rounded-md transition-colors cursor-pointer"
                              title="Sửa mẹo này"
                            >
                              <Edit3 size={13} />
                            </button>

                            <button
                              type="button"
                              onClick={() => {
                                if (confirm(`Xóa ghi chú "${item.title}"?`)) {
                                  deleteEnglishNote(item.id);
                                }
                              }}
                              className="p-1 text-gray-300 hover:text-rose-600 hover:bg-rose-50 rounded-md transition-colors cursor-pointer"
                              title="Xóa ghi chú"
                            >
                              <Trash2 size={13} />
                            </button>
                          </div>
                        </div>

                        {/* Formula / Pattern Box (If present) */}
                        {item.pattern && (
                          <div className="mt-2.5 p-2 rounded-xl bg-[#f5f8f6] border border-[#213a34]/15 flex items-center justify-between gap-2">
                            <code className="text-xs font-mono font-black text-[#14362d] break-all">
                              {item.pattern}
                            </code>
                            <button
                              type="button"
                              onClick={() => handleCopy(item.pattern || '', item.id)}
                              className="p-1 rounded-md text-gray-500 hover:text-[#14362d] hover:bg-white transition-colors shrink-0 cursor-pointer"
                              title="Sao chép công thức"
                            >
                              {isCopied ? (
                                <Check size={13} className="text-emerald-600" />
                              ) : (
                                <Copy size={13} />
                              )}
                            </button>
                          </div>
                        )}

                        {/* Explanation */}
                        <p className="mt-2 text-xs font-semibold text-[#4a5551] leading-relaxed">
                          {item.explanation}
                        </p>

                        {/* Example Sentences */}
                        {item.examples && item.examples.length > 0 && (
                          <div className="mt-2.5 space-y-1.5 pt-2 border-t border-dashed border-[#213a34]/10">
                            {item.examples.map((ex, idx) => (
                              <div
                                key={idx}
                                className="p-2 rounded-xl bg-[#fffefc] border border-gray-100 flex items-start justify-between gap-2 text-xs"
                              >
                                <div className="space-y-0.5 min-w-0">
                                  <p className="font-bold text-[#14362d] italic">
                                    &ldquo;{ex.en}&rdquo;
                                  </p>
                                  {ex.vi && (
                                    <p className="text-[11px] text-[#637770]">
                                      👉 {ex.vi}
                                    </p>
                                  )}
                                </div>
                                <button
                                  type="button"
                                  onClick={() => handleSpeak(ex.en)}
                                  className={`p-1 rounded-md text-[#213a34] transition-colors shrink-0 cursor-pointer ${
                                    speakingText === ex.en
                                      ? 'bg-amber-300 scale-110'
                                      : 'hover:bg-amber-100 bg-[#f5f0e6]'
                                  }`}
                                  title="Nghe phát âm ví dụ"
                                >
                                  <Volume2 size={12} />
                                </button>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Tip / Hack Box */}
                        {item.tip && (
                          <div className="mt-2.5 p-2 rounded-xl bg-amber-50/80 border border-amber-200 text-xs font-bold text-amber-900 flex items-start gap-1.5">
                            <Zap size={14} className="text-amber-600 shrink-0 mt-0.5" />
                            <div className="leading-snug">
                              <span className="font-black text-amber-800">Mẹo nhớ: </span>
                              <span>{item.tip}</span>
                            </div>
                          </div>
                        )}

                        {/* Tags */}
                        {item.tags && item.tags.length > 0 && (
                          <div className="mt-2.5 flex items-center gap-1 flex-wrap">
                            {item.tags.map((tag) => (
                              <span
                                key={tag}
                                onClick={() => setSearchQuery(tag)}
                                className="cursor-pointer text-[10px] font-bold text-gray-500 bg-gray-100 hover:bg-gray-200 px-1.5 py-0.5 rounded-md transition-colors"
                              >
                                #{tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </article>
                    );
                  })
                )}
              </div>
            </div>
          )}

          {/* TAB 2: FLASHCARD / RAPID QUIZ REVIEW */}
          {activeTab === 'quiz' && (
            <div className="p-4 flex-1 flex flex-col justify-between overflow-y-auto">
              {quizItems.length === 0 ? (
                <div className="text-center py-10 space-y-2">
                  <p className="font-extrabold text-[#213a34]">Chưa có ghi chú nào để ôn tập!</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {/* Progress & Card Index */}
                  <div className="flex items-center justify-between text-xs font-black text-[#71817b]">
                    <span>
                      Thẻ ôn tập:{' '}
                      <b className="text-[#213a34]">
                        {quizIndex + 1}/{quizItems.length}
                      </b>
                    </span>
                    <button
                      type="button"
                      onClick={() => {
                        setQuizIndex(Math.floor(Math.random() * quizItems.length));
                        setIsQuizFlipped(false);
                      }}
                      className="text-[11px] font-bold text-[#14362d] hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <Shuffle size={12} /> Trộn ngẫu nhiên
                    </button>
                  </div>

                  {/* Flashcard Box */}
                  <div
                    onClick={() => setIsQuizFlipped(!isQuizFlipped)}
                    className="border-2 border-[#213a34] rounded-2xl p-4 bg-white shadow-md transition-all cursor-pointer min-h-[220px] flex flex-col justify-between"
                    style={{ boxShadow: '4px 4px 0px #f59e0b' }}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span
                          className="text-[10px] font-black px-2 py-0.5 rounded-md"
                          style={{
                            backgroundColor:
                              CATEGORY_LABELS[currentQuizCard?.category]?.badgeBg || '#fef3c7',
                            color:
                              CATEGORY_LABELS[currentQuizCard?.category]?.color || '#b45309',
                          }}
                        >
                          {CATEGORY_LABELS[currentQuizCard?.category]?.emoji}{' '}
                          {CATEGORY_LABELS[currentQuizCard?.category]?.label}
                        </span>

                        <span className="text-[10px] font-bold text-gray-400">
                          {isQuizFlipped ? 'Chạm để giấu đáp án' : 'Chạm để lật thẻ'}
                        </span>
                      </div>

                      <h3 className="text-base font-black text-[#213a34] leading-snug">
                        {currentQuizCard?.title}
                      </h3>
                    </div>

                    {/* Back: Revealed details */}
                    <div className="mt-3 pt-3 border-t border-dashed border-[#213a34]/15">
                      {isQuizFlipped ? (
                        <div className="space-y-2 animate-in fade-in duration-150">
                          {currentQuizCard?.pattern && (
                            <div className="p-2 rounded-xl bg-[#f5f8f6] border border-[#213a34]/15">
                              <code className="text-xs font-mono font-black text-[#14362d]">
                                {currentQuizCard.pattern}
                              </code>
                            </div>
                          )}

                          <p className="text-xs font-semibold text-[#4a5551]">
                            {currentQuizCard?.explanation}
                          </p>

                          {currentQuizCard?.tip && (
                            <p className="text-[11px] font-bold text-amber-800 bg-amber-50 p-1.5 rounded-lg border border-amber-200">
                              ⚡ <b>Mẹo nhớ:</b> {currentQuizCard.tip}
                            </p>
                          )}
                        </div>
                      ) : (
                        <div className="text-center py-4 text-xs font-bold text-gray-400 flex items-center justify-center gap-1.5">
                          <Eye size={14} />
                          <span>Bạn có nhớ công thức và mẹo của phần này không?</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Navigation Controls */}
                  <div className="flex items-center justify-between gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        setQuizIndex((prev) =>
                          prev > 0 ? prev - 1 : quizItems.length - 1,
                        );
                        setIsQuizFlipped(false);
                      }}
                      className="px-3 py-2 rounded-xl bg-white border border-gray-200 text-xs font-black text-[#213a34] hover:bg-gray-50 flex items-center gap-1 cursor-pointer"
                    >
                      <ChevronLeft size={14} /> Thẻ trước
                    </button>

                    <button
                      type="button"
                      onClick={() => setIsQuizFlipped(!isQuizFlipped)}
                      className="px-3 py-2 rounded-xl bg-[#213a34] text-amber-300 text-xs font-black hover:bg-[#2c4a42] cursor-pointer"
                    >
                      {isQuizFlipped ? 'Ẩn đáp án' : 'Lật xem mẹo'}
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setQuizIndex((prev) =>
                          prev + 1 < quizItems.length ? prev + 1 : 0,
                        );
                        setIsQuizFlipped(false);
                      }}
                      className="px-3 py-2 rounded-xl bg-white border border-gray-200 text-xs font-black text-[#213a34] hover:bg-gray-50 flex items-center gap-1 cursor-pointer"
                    >
                      Thẻ tiếp <ChevronRight size={14} />
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 3: ADD / EDIT FORM */}
          {activeTab === 'add' && (
            <form
              onSubmit={handleSubmitForm}
              className="p-3.5 space-y-2.5 overflow-y-auto max-h-[460px]"
            >
              {formSuccessMsg && (
                <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-black flex items-center gap-1.5 animate-in fade-in">
                  <CheckCircle2 size={16} className="text-emerald-600" />
                  <span>{formSuccessMsg}</span>
                </div>
              )}

              {/* Title */}
              <div>
                <label className="text-[10px] font-black text-[#71817b] uppercase tracking-wider block mb-1">
                  Tiêu đề / Tên mẹo (bắt buộc):
                </label>
                <input
                  ref={titleInputRef}
                  value={formTitle}
                  onChange={(e) => setFormTitle(e.target.value)}
                  placeholder="Ví dụ: Mẹo 3 giây Part 5: Vị trí Trạng từ..."
                  className="w-full bg-white border border-[#213a34]/25 focus:border-[#213a34] rounded-xl px-3 py-2 text-xs font-black text-[#213a34] outline-none"
                  required
                />
              </div>

              {/* Category & Pin */}
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-[10px] font-black text-[#71817b] uppercase tracking-wider block mb-1">
                    Chuyên mục:
                  </label>
                  <select
                    value={formCategory}
                    onChange={(e) =>
                      setFormCategory(e.target.value as EnglishNoteCategory)
                    }
                    className="w-full bg-white border border-[#213a34]/25 rounded-xl px-2.5 py-1.5 text-xs font-bold text-[#213a34] outline-none"
                  >
                    <option value="toeic">🎯 Mẹo làm bài TOEIC</option>
                    <option value="structure">📐 Cấu trúc câu</option>
                    <option value="grammar">📚 Ngữ pháp trọng tâm</option>
                    <option value="collocation">🔗 Cụm từ / Collocations</option>
                    <option value="trap">⚠️ Bẫy đề thi</option>
                    <option value="quick_tip">⚡ Mẹo nhớ nhanh</option>
                  </select>
                </div>

                <div className="flex flex-col justify-end">
                  <label className="flex items-center gap-2 p-1.5 rounded-xl border border-gray-200 bg-white cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formIsPinned}
                      onChange={(e) => setFormIsPinned(e.target.checked)}
                      className="size-4 accent-[#213a34]"
                    />
                    <span className="text-xs font-black text-[#213a34] flex items-center gap-1">
                      <Pin size={12} className="text-amber-500 fill-amber-500" />
                      Ghim lên đầu
                    </span>
                  </label>
                </div>
              </div>

              {/* Pattern / Formula */}
              <div>
                <label className="text-[10px] font-black text-[#71817b] uppercase tracking-wider block mb-1">
                  Công thức / Cấu trúc (nếu có):
                </label>
                <input
                  value={formPattern}
                  onChange={(e) => setFormPattern(e.target.value)}
                  placeholder="Ví dụ: Be / Have + [ ADV ] + V3/ed"
                  className="w-full font-mono bg-white border border-[#213a34]/25 focus:border-[#213a34] rounded-xl px-3 py-1.5 text-xs font-bold text-[#213a34] outline-none"
                />
              </div>

              {/* Explanation */}
              <div>
                <label className="text-[10px] font-black text-[#71817b] uppercase tracking-wider block mb-1">
                  Giải thích & Dấu hiệu nhận biết (bắt buộc):
                </label>
                <textarea
                  value={formExplanation}
                  onChange={(e) => setFormExplanation(e.target.value)}
                  placeholder="Giải thích chi tiết quy tắc, cách suy luận khi làm bài..."
                  rows={3}
                  className="w-full bg-white border border-[#213a34]/25 focus:border-[#213a34] rounded-xl px-3 py-2 text-xs font-semibold text-[#213a34] outline-none resize-none"
                  required
                />
              </div>

              {/* Example EN & VI */}
              <div className="p-2.5 rounded-xl bg-gray-50 border border-gray-200 space-y-2">
                <span className="text-[10px] font-black text-gray-500 uppercase tracking-wider block">
                  Câu ví dụ minh họa:
                </span>
                <input
                  value={formExEn}
                  onChange={(e) => setFormExEn(e.target.value)}
                  placeholder="Câu tiếng Anh (ví dụ: The project was successfully completed...)"
                  className="w-full bg-white border border-gray-300 rounded-lg px-2.5 py-1.5 text-xs font-bold text-[#213a34] outline-none"
                />
                <input
                  value={formExVi}
                  onChange={(e) => setFormExVi(e.target.value)}
                  placeholder="Dịch tiếng Việt (ví dụ: Dự án đã được hoàn thành thành công...)"
                  className="w-full bg-white border border-gray-300 rounded-lg px-2.5 py-1.5 text-xs font-semibold text-[#213a34] outline-none"
                />
              </div>

              {/* Tip / Reminder */}
              <div>
                <label className="text-[10px] font-black text-[#71817b] uppercase tracking-wider block mb-1">
                  Mẹo ghi nhớ / Lưu ý bẫy (tùy chọn):
                </label>
                <input
                  value={formTip}
                  onChange={(e) => setFormTip(e.target.value)}
                  placeholder="Ví dụ: Nhìn trước thấy was/has, nhìn sau thấy V-ed -> Chọn đuôi -ly!"
                  className="w-full bg-white border border-[#213a34]/25 focus:border-[#213a34] rounded-xl px-3 py-1.5 text-xs font-semibold text-[#213a34] outline-none"
                />
              </div>

              {/* Tags */}
              <div>
                <label className="text-[10px] font-black text-[#71817b] uppercase tracking-wider block mb-1">
                  Thẻ phân loại (ngăn cách bằng dấu phẩy):
                </label>
                <input
                  value={formTags}
                  onChange={(e) => setFormTags(e.target.value)}
                  placeholder="Ví dụ: TOEIC, Part 5, Trạng từ"
                  className="w-full bg-white border border-[#213a34]/25 focus:border-[#213a34] rounded-xl px-3 py-1.5 text-xs font-bold text-[#213a34] outline-none"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 pt-2">
                {editingId && (
                  <button
                    type="button"
                    onClick={handleResetForm}
                    className="flex-1 py-2.5 rounded-xl border border-gray-300 font-bold text-xs text-gray-700 hover:bg-gray-50 cursor-pointer"
                  >
                    Hủy chỉnh sửa
                  </button>
                )}

                <button
                  type="submit"
                  disabled={!formTitle.trim() || !formExplanation.trim()}
                  className="flex-1 py-2.5 rounded-xl bg-[#213a34] hover:bg-[#2c4a42] disabled:opacity-40 text-amber-300 font-black text-xs flex items-center justify-center gap-1.5 cursor-pointer shadow-sm transition-all"
                >
                  <Plus size={15} />
                  <span>{editingId ? 'Lưu thay đổi' : 'Lưu ghi chú vào sổ'}</span>
                </button>
              </div>
            </form>
          )}
        </section>
      )}

      {/* 2. MESSENGER FLOATING CHAT BUBBLE BUTTON */}
      <button
        type="button"
        onClick={toggleOpen}
        aria-label="Mở Ghi chú Cấu trúc & Mẹo"
        className={`pointer-events-auto relative w-14 h-14 sm:w-15 sm:h-15 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer shadow-xl ${
          isOpen
            ? 'bg-[#213a34] text-amber-400 rotate-90 scale-95 border-2 border-amber-400'
            : 'bg-[#213a34] text-amber-400 hover:scale-110 active:scale-95 border-2 border-amber-400/80 hover:border-amber-400'
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
            <Lightbulb size={26} strokeWidth={2.4} className="fill-amber-400/20" />
            <Sparkles size={11} className="absolute -top-1 -right-1.5 text-amber-300 animate-pulse" />
          </div>
        )}

        {/* Notes Count Badge */}
        {!isOpen && notes.length > 0 && (
          <span className="absolute -top-1 -right-1 min-w-[22px] h-[22px] px-1.5 flex items-center justify-center rounded-full text-[11px] font-black text-[#213a34] bg-amber-400 shadow-md border-2 border-[#213a34] transition-all">
            {notes.length}
          </span>
        )}
      </button>
    </div>
  );
}
