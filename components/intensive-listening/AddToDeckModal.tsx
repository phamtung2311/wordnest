'use client';

import { useState, useEffect } from 'react';
import {
  X,
  Plus,
  BookOpen,
  Check,
  FolderPlus,
  Sparkles,
  Layers,
  ChevronDown,
} from 'lucide-react';
import {
  getSavedDecks,
  createNewDeck,
  addWordToDeck,
  addMultipleWordsToDeck,
  getOrCreateDefaultDeck,
  type DeckItem,
} from '@/lib/vocabService';

export interface VocabCandidate {
  word: string;
  meaning: string;
  partOfSpeech?: string;
  example?: string;
}

interface AddToDeckModalProps {
  isOpen: boolean;
  onClose: () => void;
  // If single word mode:
  singleWord?: VocabCandidate | null;
  // If batch mode:
  batchWords?: VocabCandidate[];
  onAddedSuccess?: (addedTerms: string[]) => void;
}

export function AddToDeckModal({
  isOpen,
  onClose,
  singleWord,
  batchWords,
  onAddedSuccess,
}: AddToDeckModalProps) {
  const [decks, setDecks] = useState<DeckItem[]>([]);
  const [selectedDeckId, setSelectedDeckId] = useState<number | null>(null);

  // Single word form states
  const [term, setTerm] = useState('');
  const [meaning, setMeaning] = useState('');
  const [partOfSpeech, setPartOfSpeech] = useState('');
  const [example, setExample] = useState('');

  // Batch selection states: Record<index, boolean>
  const [selectedIndices, setSelectedIndices] = useState<Record<number, boolean>>({});

  // New deck creation form toggle
  const [isCreatingDeck, setIsCreatingDeck] = useState(false);
  const [newDeckName, setNewDeckName] = useState('');
  const [newDeckEmoji, setNewDeckEmoji] = useState('🎧');

  // Success / error message
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; message: string } | null>(
    null
  );

  const isBatch = Boolean(batchWords && batchWords.length > 0 && !singleWord);

  // Load decks on open
  useEffect(() => {
    if (!isOpen) return;

    setFeedback(null);
    setIsCreatingDeck(false);
    setNewDeckName('');

    const savedDecks = getSavedDecks();
    if (savedDecks.length === 0) {
      const defaultDeck = getOrCreateDefaultDeck();
      setDecks([defaultDeck]);
      setSelectedDeckId(defaultDeck.id);
    } else {
      setDecks(savedDecks);
      // Prefer a deck that matches 'toeic' or first deck
      const preferred =
        savedDecks.find((d) => d.name.toLowerCase().includes('toeic')) || savedDecks[0];
      setSelectedDeckId(preferred.id);
    }

    if (singleWord) {
      setTerm(singleWord.word || '');
      setMeaning(singleWord.meaning || '');
      setPartOfSpeech(singleWord.partOfSpeech || '');
      setExample(singleWord.example || '');
    }

    if (batchWords && batchWords.length > 0) {
      const initSelected: Record<number, boolean> = {};
      batchWords.forEach((_, idx) => {
        initSelected[idx] = true;
      });
      setSelectedIndices(initSelected);
    }
  }, [isOpen, singleWord, batchWords]);

  // Handle escape to close
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCreateDeck = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newDeckName.trim()) return;

    const created = createNewDeck(newDeckName.trim(), newDeckEmoji || '🎧', 'Bộ từ vựng TOEIC');
    const updated = getSavedDecks();
    setDecks(updated);
    setSelectedDeckId(created.id);
    setIsCreatingDeck(false);
    setNewDeckName('');
  };

  const handleSaveSingle = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDeckId) return;

    const res = addWordToDeck(selectedDeckId, {
      term,
      meaning,
      partOfSpeech,
      example,
    });

    if (res.success) {
      setFeedback({ type: 'success', message: res.message });
      onAddedSuccess?.([term.trim()]);
      setTimeout(() => {
        onClose();
      }, 900);
    } else {
      setFeedback({ type: 'error', message: res.message });
    }
  };

  const handleSaveBatch = () => {
    if (!selectedDeckId || !batchWords) return;

    const wordsToSave = batchWords
      .filter((_, idx) => selectedIndices[idx])
      .map((w) => ({
        term: w.word,
        meaning: w.meaning,
        partOfSpeech: w.partOfSpeech,
        example: w.example,
      }));

    if (wordsToSave.length === 0) {
      setFeedback({ type: 'error', message: 'Vui lòng chọn ít nhất 1 từ vựng.' });
      return;
    }

    const res = addMultipleWordsToDeck(selectedDeckId, wordsToSave);

    setFeedback({
      type: 'success',
      message: `Đã thêm thành công ${res.addedCount} từ vào bộ "${res.deckName}"!` +
        (res.skippedCount > 0 ? ` (${res.skippedCount} từ đã có từ trước)` : ''),
    });

    onAddedSuccess?.(wordsToSave.map((w) => w.term));
    setTimeout(() => {
      onClose();
    }, 1200);
  };

  const selectedCount = Object.values(selectedIndices).filter(Boolean).length;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-lg bg-[#fbf9f4] rounded-3xl border-2 border-[#213a34]/15 shadow-2xl flex flex-col max-h-[90vh] overflow-hidden animate-in zoom-in-95 duration-200"
      >
        {/* Header */}
        <div className="p-4 sm:p-5 bg-[#213a34] text-white flex items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2.5">
            <span className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center text-lg border border-white/15">
              📖
            </span>
            <div>
              <h3 className="font-black text-base sm:text-lg text-white">
                {isBatch ? 'Thêm nhiều từ vựng vào bộ từ' : 'Thêm từ vựng vào bộ từ'}
              </h3>
              <p className="text-xs text-white/70 font-medium">
                {isBatch
                  ? `Chọn các từ vựng trọng tâm để lưu vào WordNest`
                  : 'Lưu từ mới vào sổ từ vựng để ôn tập flashcard'}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Feedback Banner */}
        {feedback && (
          <div
            className={`p-3 text-xs font-black flex items-center gap-2 shrink-0 ${
              feedback.type === 'success'
                ? 'bg-emerald-100 text-emerald-900 border-b border-emerald-200'
                : 'bg-rose-100 text-rose-900 border-b border-rose-200'
            }`}
          >
            {feedback.type === 'success' ? <Check className="w-4 h-4 shrink-0" /> : <X className="w-4 h-4 shrink-0" />}
            <span>{feedback.message}</span>
          </div>
        )}

        {/* Body Content */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-4">
          {/* Deck Selector Box */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-xs font-black text-[#213a34] uppercase tracking-wider">
                Chọn bộ từ vựng đích:
              </label>
              {!isCreatingDeck && (
                <button
                  type="button"
                  onClick={() => setIsCreatingDeck(true)}
                  className="text-xs font-bold text-[#eb6a52] hover:underline flex items-center gap-1"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Tạo bộ từ mới</span>
                </button>
              )}
            </div>

            {isCreatingDeck ? (
              <form
                onSubmit={handleCreateDeck}
                className="p-3 bg-white rounded-2xl border border-[#213a34]/15 space-y-2"
              >
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={newDeckEmoji}
                    onChange={(e) => setNewDeckEmoji(e.target.value)}
                    placeholder="Emoji"
                    maxLength={2}
                    className="w-12 text-center p-2 rounded-xl bg-[#f5f0e6] border border-[#213a34]/15 text-sm"
                  />
                  <input
                    type="text"
                    value={newDeckName}
                    onChange={(e) => setNewDeckName(e.target.value)}
                    placeholder="Tên bộ từ (ví dụ: TOEIC Part 3-4)..."
                    className="flex-1 p-2 rounded-xl bg-[#f5f0e6] border border-[#213a34]/15 text-xs text-[#213a34] font-bold focus:outline-none focus:ring-2 focus:ring-[#213a34]/20"
                    autoFocus
                  />
                </div>
                <div className="flex items-center justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setIsCreatingDeck(false)}
                    className="px-3 py-1 rounded-xl text-xs font-bold text-gray-500 hover:bg-gray-100"
                  >
                    Hủy
                  </button>
                  <button
                    type="submit"
                    className="px-3 py-1 rounded-xl bg-[#213a34] text-[#f8d467] text-xs font-black shadow-xs"
                  >
                    Tạo bộ này
                  </button>
                </div>
              </form>
            ) : (
              <div className="relative">
                <select
                  value={selectedDeckId || ''}
                  onChange={(e) => setSelectedDeckId(Number(e.target.value))}
                  className="w-full p-2.5 rounded-2xl bg-white border border-[#213a34]/20 text-xs font-black text-[#213a34] focus:outline-none focus:ring-2 focus:ring-[#213a34]/20 appearance-none shadow-2xs pr-8 cursor-pointer"
                >
                  {decks.map((deck) => (
                    <option key={deck.id} value={deck.id}>
                      {deck.emoji} {deck.name} ({deck.words.length} từ)
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            )}
          </div>

          {/* SINGLE WORD FORM */}
          {!isBatch && (
            <form onSubmit={handleSaveSingle} className="space-y-3 pt-2">
              <div className="grid grid-cols-3 gap-2">
                <div className="col-span-2 space-y-1">
                  <label className="text-[11px] font-black text-gray-500 uppercase">
                    Từ vựng / Cụm từ:
                  </label>
                  <input
                    type="text"
                    value={term}
                    onChange={(e) => setTerm(e.target.value)}
                    required
                    className="w-full p-2.5 rounded-xl bg-white border border-[#213a34]/15 text-sm font-black text-[#213a34] focus:outline-none focus:ring-2 focus:ring-[#213a34]/20 shadow-2xs"
                  />
                </div>

                <div className="col-span-1 space-y-1">
                  <label className="text-[11px] font-black text-gray-500 uppercase">
                    Loại từ:
                  </label>
                  <input
                    type="text"
                    value={partOfSpeech}
                    onChange={(e) => setPartOfSpeech(e.target.value)}
                    placeholder="n, v, adj..."
                    className="w-full p-2.5 rounded-xl bg-white border border-[#213a34]/15 text-xs text-[#213a34] font-bold focus:outline-none focus:ring-2 focus:ring-[#213a34]/20 shadow-2xs"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-black text-gray-500 uppercase">
                  Nghĩa Tiếng Việt:
                </label>
                <input
                  type="text"
                  value={meaning}
                  onChange={(e) => setMeaning(e.target.value)}
                  required
                  placeholder="Nghĩa của từ..."
                  className="w-full p-2.5 rounded-xl bg-white border border-[#213a34]/15 text-xs font-bold text-[#213a34] focus:outline-none focus:ring-2 focus:ring-[#213a34]/20 shadow-2xs"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-black text-gray-500 uppercase">
                  Câu ví dụ (trích từ bài nghe):
                </label>
                <textarea
                  value={example}
                  onChange={(e) => setExample(e.target.value)}
                  rows={2}
                  placeholder="Ví dụ trong ngữ cảnh bài nghe..."
                  className="w-full p-2.5 rounded-xl bg-white border border-[#213a34]/15 text-xs text-gray-700 font-medium focus:outline-none focus:ring-2 focus:ring-[#213a34]/20 shadow-2xs resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 rounded-xl text-xs font-black text-gray-600 hover:bg-gray-100 transition-colors"
                >
                  Đóng
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-[#213a34] hover:bg-[#2c4e46] text-[#f8d467] text-xs font-black shadow-md active:scale-95 transition-all flex items-center gap-1.5"
                >
                  <Plus className="w-4 h-4" />
                  <span>Lưu vào sổ từ</span>
                </button>
              </div>
            </form>
          )}

          {/* BATCH WORDS LIST */}
          {isBatch && batchWords && (
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between text-xs font-bold text-gray-600">
                <span>
                  Đã chọn: <b className="text-[#213a34]">{selectedCount}</b>/{batchWords.length} từ
                </span>
                <button
                  type="button"
                  onClick={() => {
                    const allTrue = selectedCount === batchWords.length;
                    const next: Record<number, boolean> = {};
                    batchWords.forEach((_, idx) => {
                      next[idx] = !allTrue;
                    });
                    setSelectedIndices(next);
                  }}
                  className="text-xs text-[#eb6a52] hover:underline"
                >
                  {selectedCount === batchWords.length ? 'Bỏ chọn tất cả' : 'Chọn tất cả'}
                </button>
              </div>

              <div className="max-h-64 overflow-y-auto space-y-2 pr-1">
                {batchWords.map((vocab, idx) => {
                  const isChecked = Boolean(selectedIndices[idx]);
                  return (
                    <div
                      key={idx}
                      onClick={() =>
                        setSelectedIndices((prev) => ({
                          ...prev,
                          [idx]: !prev[idx],
                        }))
                      }
                      className={`p-3 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                        isChecked
                          ? 'bg-[#e9f2ed] border-[#213a34]/30 shadow-2xs'
                          : 'bg-white border-gray-200 opacity-60'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => {}}
                          className="w-4 h-4 rounded text-[#213a34] focus:ring-[#213a34] shrink-0"
                        />
                        <div className="min-w-0">
                          <div className="flex items-center gap-1.5">
                            <span className="font-black text-[#213a34] text-xs sm:text-sm truncate">
                              {vocab.word}
                            </span>
                            {vocab.partOfSpeech && (
                              <span className="text-[10px] font-bold text-[#eb6a52] bg-white px-1.5 rounded">
                                {vocab.partOfSpeech}
                              </span>
                            )}
                          </div>
                          <p className="text-[11px] text-gray-600 truncate mt-0.5">
                            {vocab.meaning}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="pt-2 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 rounded-xl text-xs font-black text-gray-600 hover:bg-gray-100 transition-colors"
                >
                  Đóng
                </button>
                <button
                  type="button"
                  onClick={handleSaveBatch}
                  disabled={selectedCount === 0}
                  className="px-5 py-2 rounded-xl bg-[#213a34] hover:bg-[#2c4e46] disabled:opacity-40 text-[#f8d467] text-xs font-black shadow-md active:scale-95 transition-all flex items-center gap-1.5"
                >
                  <Plus className="w-4 h-4" />
                  <span>Thêm {selectedCount} từ đã chọn</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
