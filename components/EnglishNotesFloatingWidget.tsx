'use client';

import { useEffect, useState, useRef, useSyncExternalStore } from 'react';
import {
  Lightbulb,
  Search,
  Plus,
  Trash2,
  Edit2,
  Copy,
  Check,
  X,
  Minus,
  Sparkles,
  BookMarked,
} from 'lucide-react';
import {
  EnglishNoteItem,
  getSavedEnglishNotes,
  addEnglishNote,
  updateEnglishNote,
  deleteEnglishNote,
  clearAllEnglishNotes,
  subscribeEnglishNotes,
} from '@/lib/englishNotesService';

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
  const [searchQuery, setSearchQuery] = useState('');

  // Add form states
  const [newStructure, setNewStructure] = useState('');
  const [newExplanation, setNewExplanation] = useState('');

  // Editing state
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editStructure, setEditStructure] = useState('');
  const [editExplanation, setEditExplanation] = useState('');

  // Copy feedback state
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const widgetRef = useRef<HTMLDivElement>(null);
  const structureInputRef = useRef<HTMLInputElement>(null);

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
      setTimeout(() => setCopiedId(null), 1500);
    }
  };

  const handleAddSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newStructure.trim() || !newExplanation.trim()) return;

    addEnglishNote({
      structure: newStructure.trim(),
      explanation: newExplanation.trim(),
    });

    setNewStructure('');
    setNewExplanation('');
    structureInputRef.current?.focus();
  };

  const handleStartEdit = (item: EnglishNoteItem) => {
    setEditingId(item.id);
    setEditStructure(item.structure);
    setEditExplanation(item.explanation);
  };

  const handleSaveEdit = (id: string) => {
    if (!editStructure.trim() || !editExplanation.trim()) return;
    updateEnglishNote(id, {
      structure: editStructure.trim(),
      explanation: editExplanation.trim(),
    });
    setEditingId(null);
  };

  const handleCancelEdit = () => {
    setEditingId(null);
  };

  const filteredNotes = notes.filter((item) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      item.structure.toLowerCase().includes(q) ||
      item.explanation.toLowerCase().includes(q)
    );
  });

  return (
    <div
      ref={widgetRef}
      className="fixed z-[9997] bottom-[148px] right-5 sm:bottom-[158px] sm:right-6 flex flex-col items-end pointer-events-none select-none font-sans"
    >
      {/* 1. EXPANDED SIMPLE 2-COLUMN TABLE WINDOW */}
      {isOpen && (
        <section
          aria-label="Cửa sổ ghi chú cấu trúc và mẹo"
          className="pointer-events-auto mb-2 w-[calc(100vw-24px)] sm:w-[580px] max-h-[calc(100dvh-175px)] sm:max-h-[calc(100dvh-185px)] flex flex-col bg-[#fffdf8] border-2 border-[#213a34] rounded-2xl shadow-2xl overflow-hidden transition-all animate-in fade-in zoom-in-95 duration-150"
          style={{ boxShadow: '6px 6px 0px #213a34' }}
        >
          {/* Header */}
          <div className="bg-[#213a34] text-white px-3.5 py-2.5 flex items-center justify-between border-b-2 border-[#213a34] shrink-0">
            <div className="flex items-center gap-2 min-w-0">
              <div className="w-7 h-7 rounded-lg bg-amber-400 text-[#213a34] flex items-center justify-center font-bold shadow-xs shrink-0">
                <BookMarked size={16} />
              </div>
              <div className="flex items-center gap-2">
                <h3 className="font-extrabold text-sm leading-tight text-white">
                  Ghi chú Cấu trúc & Mẹo
                </h3>
                <span className="text-[10px] font-black bg-amber-400 text-[#213a34] px-1.5 py-0.2 rounded-md">
                  {searchQuery ? `${filteredNotes.length}/${notes.length}` : notes.length} mục
                </span>
              </div>
            </div>

            <div className="flex items-center gap-1 shrink-0">
              {notes.length > 0 && (
                <button
                  type="button"
                  onClick={() => {
                    if (confirm('Bạn có chắc chắn muốn xóa tất cả cấu trúc đã lưu?')) {
                      clearAllEnglishNotes();
                    }
                  }}
                  title="Xóa tất cả"
                  className="px-2 py-1 text-[11px] font-bold text-red-300 hover:text-red-200 hover:bg-white/10 rounded transition-colors cursor-pointer"
                >
                  Xóa hết
                </button>
              )}
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

          {/* Search Bar + Quick Add Form */}
          <div className="p-2.5 bg-[#f5f0e6] border-b border-[#213a34]/15 space-y-2 shrink-0">
            {/* Always Visible Search Bar */}
            <div className="relative">
              <Search
                size={14}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm kiếm cấu trúc, mẹo hoặc giải thích..."
                className="w-full bg-white border border-[#213a34]/20 rounded-xl pl-8 pr-7 py-1.5 text-xs font-bold text-[#213a34] outline-none focus:border-[#213a34]"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 p-0.5 cursor-pointer"
                  title="Xóa tìm kiếm"
                >
                  <X size={12} />
                </button>
              )}
            </div>

            {/* Quick Add Row */}
            <form onSubmit={handleAddSubmit} className="flex flex-col sm:flex-row gap-1.5">
              <input
                ref={structureInputRef}
                type="text"
                value={newStructure}
                onChange={(e) => setNewStructure(e.target.value)}
                placeholder="Cấu trúc / Mẹo (vd: S + would rather + V1 than V1)..."
                className="flex-1 bg-white border border-[#213a34]/25 focus:border-[#213a34] rounded-xl px-2.5 py-1.5 text-xs font-bold text-[#213a34] outline-none"
              />
              <input
                type="text"
                value={newExplanation}
                onChange={(e) => setNewExplanation(e.target.value)}
                placeholder="Giải thích / Ý nghĩa..."
                className="flex-1 bg-white border border-[#213a34]/25 focus:border-[#213a34] rounded-xl px-2.5 py-1.5 text-xs font-semibold text-[#213a34] outline-none"
              />
              <button
                type="submit"
                disabled={!newStructure.trim() || !newExplanation.trim()}
                className="bg-[#213a34] hover:bg-[#2c4a42] disabled:opacity-40 text-amber-300 font-black text-xs px-3.5 py-1.5 rounded-xl flex items-center justify-center gap-1 cursor-pointer transition-all shrink-0 shadow-xs"
              >
                <Plus size={14} />
                <span>Thêm</span>
              </button>
            </form>
          </div>

          {/* 2-COLUMN TABLE AREA */}
          <div className="flex-1 overflow-y-auto">
            {notes.length === 0 ? (
              <div className="py-12 px-4 text-center space-y-2">
                <div className="w-10 h-10 mx-auto rounded-full bg-amber-100 text-amber-800 flex items-center justify-center">
                  <BookMarked size={20} />
                </div>
                <p className="text-xs font-black text-[#213a34]">
                  Chưa có ghi chú nào
                </p>
                <p className="text-[11px] text-gray-500 max-w-xs mx-auto">
                  Hãy nhập cấu trúc và giải thích vào 2 ô ở trên rồi bấm <b>Thêm</b> để lưu vào bảng nhé!
                </p>
              </div>
            ) : filteredNotes.length === 0 ? (
              <div className="py-8 text-center text-xs text-gray-400">
                Không tìm thấy cấu trúc phù hợp với &quot;{searchQuery}&quot;
              </div>
            ) : (
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-[#f0ebe1] text-[#213a34] border-b border-[#213a34]/15 sticky top-0 z-10 font-black text-[11px] uppercase tracking-wider">
                    <th className="py-2 px-3 w-[45%]">Cấu trúc / Mẹo</th>
                    <th className="py-2 px-3 w-[45%]">Giải thích / Ghi chú</th>
                    <th className="py-2 px-2 w-[10%] text-center"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#213a34]/10 bg-white">
                  {filteredNotes.map((item, idx) => {
                    const isEditing = editingId === item.id;
                    const isCopied = copiedId === item.id;

                    if (isEditing) {
                      return (
                        <tr key={item.id} className="bg-amber-50/60">
                          <td className="p-2 align-top">
                            <input
                              type="text"
                              value={editStructure}
                              onChange={(e) => setEditStructure(e.target.value)}
                              className="w-full bg-white border border-[#213a34]/30 rounded-lg p-1.5 text-xs font-bold text-[#213a34] outline-none"
                              autoFocus
                            />
                          </td>
                          <td className="p-2 align-top">
                            <textarea
                              rows={2}
                              value={editExplanation}
                              onChange={(e) => setEditExplanation(e.target.value)}
                              className="w-full bg-white border border-[#213a34]/30 rounded-lg p-1.5 text-xs font-semibold text-[#213a34] outline-none resize-none"
                            />
                          </td>
                          <td className="p-2 align-middle text-center">
                            <div className="flex flex-col gap-1 items-center justify-center">
                              <button
                                type="button"
                                onClick={() => handleSaveEdit(item.id)}
                                className="px-2 py-1 bg-[#213a34] text-white rounded text-[10px] font-black hover:bg-[#2c4a42] cursor-pointer"
                              >
                                Lưu
                              </button>
                              <button
                                type="button"
                                onClick={handleCancelEdit}
                                className="px-2 py-0.5 text-gray-500 hover:text-gray-800 text-[10px] font-bold cursor-pointer"
                              >
                                Hủy
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    }

                    return (
                      <tr
                        key={item.id}
                        className={`hover:bg-[#faf7f0] transition-colors group ${
                          idx % 2 === 1 ? 'bg-[#fcfbfa]' : 'bg-white'
                        }`}
                      >
                        {/* Cột 1: Cấu trúc / Mẹo */}
                        <td className="py-2.5 px-3 align-top font-bold text-[#14362d] break-words">
                          <div className="flex items-start justify-between gap-1.5">
                            <span className="font-mono text-xs font-extrabold leading-snug">
                              {item.structure}
                            </span>
                            <button
                              type="button"
                              onClick={() => handleCopy(item.structure, item.id)}
                              className="p-1 rounded text-gray-400 hover:text-[#14362d] hover:bg-gray-100 transition-colors shrink-0 cursor-pointer"
                              title="Sao chép cấu trúc"
                            >
                              {isCopied ? (
                                <Check size={12} className="text-emerald-600" />
                              ) : (
                                <Copy size={12} />
                              )}
                            </button>
                          </div>
                        </td>

                        {/* Cột 2: Giải thích / Ghi chú */}
                        <td className="py-2.5 px-3 align-top text-xs font-semibold text-[#4a5551] leading-relaxed break-words whitespace-pre-wrap">
                          {item.explanation}
                        </td>

                        {/* Cột 3: Nút sửa & xóa */}
                        <td className="py-2.5 px-2 align-top text-center">
                          <div className="flex items-center justify-center gap-1 opacity-70 group-hover:opacity-100 transition-opacity">
                            <button
                              type="button"
                              onClick={() => handleStartEdit(item)}
                              className="p-1 text-gray-400 hover:text-[#213a34] hover:bg-gray-100 rounded transition-colors cursor-pointer"
                              title="Sửa"
                            >
                              <Edit2 size={12} />
                            </button>
                            <button
                              type="button"
                              onClick={() => {
                                if (confirm(`Xóa cấu trúc "${item.structure}"?`)) {
                                  deleteEnglishNote(item.id);
                                }
                              }}
                              className="p-1 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded transition-colors cursor-pointer"
                              title="Xóa"
                            >
                              <Trash2 size={12} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </div>
        </section>
      )}

      {/* 2. MESSENGER CHAT BUBBLE BUTTON */}
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

        {/* Count Badge */}
        {!isOpen && notes.length > 0 && (
          <span className="absolute -top-1 -right-1 min-w-[22px] h-[22px] px-1.5 flex items-center justify-center rounded-full text-[11px] font-black text-[#213a34] bg-amber-400 shadow-md border-2 border-[#213a34] transition-all">
            {notes.length}
          </span>
        )}
      </button>
    </div>
  );
}
