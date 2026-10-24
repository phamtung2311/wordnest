'use client';

import { useState, useEffect } from 'react';
import type { DialogueLine, VocabItem } from '@/data/intensive_listening_test1';
import {
  Volume2,
  Copy,
  Check,
  Eye,
  EyeOff,
  BookOpen,
  Sparkles,
  Plus,
  FolderPlus,
  BookmarkPlus,
} from 'lucide-react';
import { AddToDeckModal, type VocabCandidate } from './AddToDeckModal';
import { getSavedTermsSet, normalizeTerm } from '@/lib/vocabService';

interface TranscriptTabProps {
  transcript: DialogueLine[];
  vocabulary: VocabItem[];
  imageUrl?: string;
}

export function TranscriptTab({
  transcript,
  vocabulary,
  imageUrl,
}: TranscriptTabProps) {
  const [showTranslation, setShowTranslation] = useState<boolean>(true);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [speakingId, setSpeakingId] = useState<string | null>(null);

  // Deck modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [singleCandidate, setSingleCandidate] = useState<VocabCandidate | null>(null);
  const [batchCandidates, setBatchCandidates] = useState<VocabCandidate[] | undefined>(undefined);
  const [savedTerms, setSavedTerms] = useState<Set<string>>(new Set());

  // Listen for deck updates
  useEffect(() => {
    setSavedTerms(getSavedTermsSet());
    const handleUpdate = () => {
      setSavedTerms(getSavedTermsSet());
    };
    window.addEventListener('wordnest-decks-updated', handleUpdate);
    return () => window.removeEventListener('wordnest-decks-updated', handleUpdate);
  }, []);

  // Helper to find sample sentence for a vocab word
  const findExampleForWord = (word: string): string => {
    const norm = word.toLowerCase().trim();
    for (const line of transcript) {
      if (line.text.toLowerCase().includes(norm)) {
        return line.text;
      }
    }
    return transcript[0]?.text || '';
  };

  const handleOpenAddSingle = (vocab: VocabItem) => {
    setBatchCandidates(undefined);
    setSingleCandidate({
      word: vocab.word,
      meaning: vocab.meaning,
      partOfSpeech: vocab.partOfSpeech,
      example: findExampleForWord(vocab.word),
    });
    setIsModalOpen(true);
  };

  const handleOpenAddBatch = () => {
    if (!vocabulary || vocabulary.length === 0) return;
    setSingleCandidate(null);
    setBatchCandidates(
      vocabulary.map((v) => ({
        word: v.word,
        meaning: v.meaning,
        partOfSpeech: v.partOfSpeech,
        example: findExampleForWord(v.word),
      }))
    );
    setIsModalOpen(true);
  };

  const handleAddFromLine = (line: DialogueLine) => {
    let selected = '';
    if (typeof window !== 'undefined') {
      const sel = window.getSelection()?.toString().trim();
      if (sel && line.text.toLowerCase().includes(sel.toLowerCase())) {
        selected = sel;
      }
    }

    setBatchCandidates(undefined);
    setSingleCandidate({
      word: selected || '',
      meaning: selected ? '' : line.vietnamese || '',
      example: line.text,
    });
    setIsModalOpen(true);
  };

  const handleSpeak = (text: string, id: string) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.95;
    utterance.onstart = () => setSpeakingId(id);
    utterance.onend = () => setSpeakingId(null);
    utterance.onerror = () => setSpeakingId(null);
    window.speechSynthesis.speak(utterance);
  };

  const handleCopy = (text: string, id: string) => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  const getSpeakerBadge = (speaker?: string) => {
    if (!speaker) return null;
    const lower = speaker.toLowerCase();

    if (lower.includes('woman') || lower.includes('w')) {
      return (
        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-black bg-rose-100 text-rose-700 border border-rose-200">
          👩 {speaker}
        </span>
      );
    }
    if (lower.includes('man') || lower.includes('m')) {
      return (
        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-black bg-blue-100 text-blue-800 border border-blue-200">
          👨 {speaker}
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-black bg-emerald-100 text-emerald-800 border border-emerald-200">
        🎙️ {speaker}
      </span>
    );
  };

  return (
    <div className="space-y-6">
      {/* Top Bar Controls */}
      <div className="bg-[#f5f0e6] rounded-2xl p-4 border border-[#213a34]/10 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-[#213a34] text-[#f8d467] flex items-center justify-center font-black text-sm shrink-0">
            💬
          </div>
          <div>
            <h3 className="font-black text-[#213a34] text-sm">
              Lời thoại & Dịch nghĩa chi tiết
            </h3>
            <p className="text-xs text-gray-600 font-medium">
              Nghe và so sánh từng câu thoại, bấm loa để nghe lại câu riêng biệt.
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setShowTranslation(!showTranslation)}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-black bg-white hover:bg-[#e9f2ed] border border-[#213a34]/15 text-[#213a34] shadow-sm transition-colors cursor-pointer"
        >
          {showTranslation ? (
            <>
              <EyeOff className="w-3.5 h-3.5" /> Ẩn dịch nghĩa
            </>
          ) : (
            <>
              <Eye className="w-3.5 h-3.5" /> Hiện dịch nghĩa
            </>
          )}
        </button>
      </div>

      {/* Part 1 Photo Display if applicable */}
      {imageUrl && (
        <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-5 border-2 border-[#213a34]/10 shadow-sm flex flex-col items-center justify-center">
          <div className="relative overflow-hidden rounded-xl border border-gray-200/80 max-w-full bg-[#fbf9f5]">
            <img
              src={imageUrl}
              alt="Part 1 bức tranh"
              className="w-auto max-h-[380px] sm:max-h-[440px] object-contain rounded-xl"
            />
          </div>
          <span className="text-xs font-bold text-gray-500 mt-2 flex items-center gap-1.5">
            📸 Bức tranh minh họa
          </span>
        </div>
      )}

      {/* Transcript Line List */}
      <div className="space-y-4">
        {transcript.map((line, idx) => (
          <div
            key={line.id || idx}
            className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-5 border-2 border-[#213a34]/10 shadow-sm hover:border-[#213a34]/20 transition-all group"
          >
            <div className="flex items-start justify-between gap-2 mb-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-extrabold text-gray-400 font-mono">
                  #{idx + 1}
                </span>
                {getSpeakerBadge(line.speaker)}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-1 opacity-80 group-hover:opacity-100 transition-opacity">
                {/* Add Word from this sentence */}
                <button
                  type="button"
                  onClick={() => handleAddFromLine(line)}
                  title="Thêm từ vựng từ câu này vào sổ từ"
                  className="flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-bold text-gray-600 hover:text-[#213a34] hover:bg-[#e9f2ed] border border-transparent hover:border-[#213a34]/15 transition-colors cursor-pointer"
                >
                  <BookmarkPlus className="w-3.5 h-3.5 text-[#eb6a52]" />
                  <span className="hidden sm:inline text-[11px] font-black text-[#213a34]">+ Từ</span>
                </button>

                {/* Text-to-Speech Speak */}
                <button
                  type="button"
                  onClick={() => handleSpeak(line.text, line.id)}
                  title="Nghe phát âm câu này"
                  className={`p-1.5 rounded-lg text-gray-600 hover:text-[#213a34] hover:bg-[#e9f2ed] transition-colors ${
                    speakingId === line.id ? 'bg-[#e9f2ed] text-[#213a34] ring-2 ring-[#213a34]/20' : ''
                  }`}
                >
                  <Volume2 className="w-4 h-4" />
                </button>

                {/* Copy */}
                <button
                  type="button"
                  onClick={() => handleCopy(line.text, line.id)}
                  title="Sao chép câu thoại"
                  className="p-1.5 rounded-lg text-gray-600 hover:text-[#213a34] hover:bg-[#e9f2ed] transition-colors"
                >
                  {copiedId === line.id ? (
                    <Check className="w-4 h-4 text-green-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* English Sentence */}
            <p className="font-extrabold text-[#213a34] text-base sm:text-lg leading-relaxed select-text">
              {line.text}
            </p>

            {/* Vietnamese Translation */}
            {showTranslation && (
              <p className="text-sm text-gray-600 font-medium leading-relaxed mt-2 pt-2 border-t border-gray-100 select-text">
                {line.vietnamese}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Vocabulary Highlights Section */}
      {vocabulary && vocabulary.length > 0 && (
        <div className="bg-[#fffdf8] rounded-2xl sm:rounded-3xl p-5 sm:p-6 border-2 border-[#213a34]/15 shadow-sm space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-[#eb6a52]" />
              <h4 className="font-black text-[#213a34] text-base sm:text-lg">
                Từ vựng trọng tâm trong bài
              </h4>
              <span className="text-xs font-bold text-gray-500 bg-[#e9f2ed] px-2 py-0.5 rounded-full">
                {vocabulary.length} từ
              </span>
            </div>

            <button
              type="button"
              onClick={handleOpenAddBatch}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-black bg-[#213a34] hover:bg-[#2c4e46] text-[#f8d467] shadow-sm transition-all active:scale-95 cursor-pointer"
            >
              <FolderPlus className="w-4 h-4 text-[#f8d467]" />
              <span>Thêm tất cả {vocabulary.length} từ vào bộ từ</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {vocabulary.map((vocab, vIdx) => {
              const isSaved = savedTerms.has(normalizeTerm(vocab.word));

              return (
                <div
                  key={vIdx}
                  className="bg-white p-3.5 rounded-xl sm:rounded-2xl border border-[#213a34]/10 hover:border-[#f29f77] shadow-xs hover:shadow-sm transition-all flex items-start justify-between gap-3 group"
                >
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-black text-[#213a34] text-sm sm:text-base">
                        {vocab.word}
                      </span>
                      {vocab.partOfSpeech && (
                        <span className="text-[10px] font-black uppercase text-[#eb6a52] bg-[#f5f0e6] px-1.5 py-0.5 rounded">
                          {vocab.partOfSpeech}
                        </span>
                      )}
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600 font-medium mt-1">
                      {vocab.meaning}
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 shrink-0">
                    <button
                      type="button"
                      onClick={() => handleSpeak(vocab.word, `vocab-${vIdx}`)}
                      title={`Nghe phát âm từ: ${vocab.word}`}
                      className="p-1.5 rounded-lg text-gray-400 hover:text-[#213a34] hover:bg-[#e9f2ed] transition-colors"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>

                    {isSaved ? (
                      <span
                        title="Từ này đã có trong bộ từ vựng của bạn"
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl text-xs font-black bg-emerald-50 text-emerald-700 border border-emerald-200"
                      >
                        <Check className="w-3.5 h-3.5" />
                        <span>Đã lưu</span>
                      </span>
                    ) : (
                      <button
                        type="button"
                        onClick={() => handleOpenAddSingle(vocab)}
                        title="Lưu từ này vào sổ từ vựng"
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl text-xs font-black bg-[#f5f0e6] hover:bg-[#213a34] text-[#213a34] hover:text-[#f8d467] border border-[#213a34]/15 transition-all active:scale-95 cursor-pointer shadow-2xs"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>Lưu từ</span>
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Add To Deck Modal */}
      <AddToDeckModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        singleWord={singleCandidate}
        batchWords={batchCandidates}
        onAddedSuccess={(addedTerms) => {
          setSavedTerms((prev) => {
            const next = new Set(prev);
            addedTerms.forEach((t) => next.add(normalizeTerm(t)));
            return next;
          });
        }}
      />
    </div>
  );
}
