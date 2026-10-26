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
  Plus,
  FolderPlus,
  BookmarkPlus,
  Maximize2,
  X,
} from 'lucide-react';
import { AddToDeckModal, type VocabCandidate } from './AddToDeckModal';
import { getSavedTermsSet, normalizeTerm } from '@/lib/vocabService';

function cleanTranscriptText(text: string): string {
  if (!text) return '';
  return text.replace(/^[A-Z]\.\s+/, '').replace(/([.?!])\s+[A-Z]\.\s+/g, '$1 ').trim();
}

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
  const [isImageZoomOpen, setIsImageZoomOpen] = useState(false);

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
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-black bg-rose-100 text-rose-700 border border-rose-200">
          👩 {speaker}
        </span>
      );
    }
    if (lower.includes('man') || lower.includes('m')) {
      return (
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-black bg-blue-100 text-blue-800 border border-blue-200">
          👨 {speaker}
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-black bg-emerald-100 text-emerald-800 border border-emerald-200">
        🎙️ {speaker}
      </span>
    );
  };

  // Render dialogue lines list
  const renderDialogueLines = () => (
    <div className="space-y-2">
      {transcript.map((line, idx) => (
        <div
          key={line.id || idx}
          className="bg-white rounded-2xl p-2.5 sm:p-3 border border-[#213a34]/12 shadow-2xs hover:border-[#213a34]/30 transition-all group"
        >
          {/* Header row: Speaker badge & actions */}
          <div className="flex items-center justify-between gap-2 mb-1.5">
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] font-black text-gray-400 font-mono">
                #{idx + 1}
              </span>
              {getSpeakerBadge(line.speaker)}
            </div>

            {/* Actions: Add word, speak, copy */}
            <div className="flex items-center gap-1 opacity-80 group-hover:opacity-100 transition-opacity">
              <button
                type="button"
                onClick={() => handleAddFromLine(line)}
                title="Lưu từ vựng từ câu này vào sổ từ"
                className="flex items-center gap-1 px-1.5 py-0.5 rounded-md text-[11px] font-bold text-gray-600 hover:text-[#213a34] hover:bg-[#e9f2ed] transition-colors cursor-pointer"
              >
                <BookmarkPlus className="w-3 h-3 text-[#eb6a52]" />
                <span className="text-[10px] font-black text-[#213a34]">+ Từ</span>
              </button>

              <button
                type="button"
                onClick={() => handleSpeak(line.text, line.id)}
                title="Nghe phát âm câu này"
                className={`p-1 rounded-md text-gray-500 hover:text-[#213a34] hover:bg-[#e9f2ed] transition-colors cursor-pointer ${
                  speakingId === line.id ? 'bg-[#e9f2ed] text-[#213a34] ring-1 ring-[#213a34]/30' : ''
                }`}
              >
                <Volume2 className="w-3.5 h-3.5" />
              </button>

              <button
                type="button"
                onClick={() => handleCopy(line.text, line.id)}
                title="Sao chép câu thoại"
                className="p-1 rounded-md text-gray-400 hover:text-[#213a34] hover:bg-[#e9f2ed] transition-colors cursor-pointer"
              >
                {copiedId === line.id ? (
                  <Check className="w-3.5 h-3.5 text-green-600" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
              </button>
            </div>
          </div>

          {/* English Sentence */}
          <p className="font-bold text-[#213a34] text-xs sm:text-sm leading-relaxed select-text">
            {cleanTranscriptText(line.text)}
          </p>

          {/* Vietnamese Translation */}
          {showTranslation && line.vietnamese && (
            <p className="text-[11px] sm:text-xs text-gray-600 font-medium leading-relaxed mt-1 pt-1 border-t border-gray-100/90 select-text">
              {cleanTranscriptText(line.vietnamese)}
            </p>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <div className="space-y-3">
      {/* Sleek Top Toolbar (Compact, no bloated filler text) */}
      <div className="flex items-center justify-between gap-2 px-1">
        <div className="flex items-center gap-2">
          <span className="text-xs font-black text-[#213a34] flex items-center gap-1.5">
            💬 Lời thoại ({transcript.length} câu)
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Toggle Translation */}
          <button
            type="button"
            onClick={() => setShowTranslation(!showTranslation)}
            className="flex items-center gap-1 px-2.5 py-1 rounded-xl text-xs font-bold bg-white hover:bg-[#e9f2ed] border border-[#213a34]/15 text-[#213a34] shadow-2xs transition-colors cursor-pointer"
          >
            {showTranslation ? (
              <>
                <EyeOff className="w-3.5 h-3.5 text-gray-500" />
                <span>Ẩn dịch</span>
              </>
            ) : (
              <>
                <Eye className="w-3.5 h-3.5 text-[#eb6a52]" />
                <span>Hiện dịch</span>
              </>
            )}
          </button>

          {/* Batch Add All Vocab */}
          {vocabulary && vocabulary.length > 0 && (
            <button
              type="button"
              onClick={handleOpenAddBatch}
              className="hidden sm:flex items-center gap-1 px-2.5 py-1 rounded-xl text-xs font-black bg-[#213a34] hover:bg-[#2c4e46] text-[#f8d467] shadow-2xs transition-all active:scale-95 cursor-pointer"
            >
              <FolderPlus className="w-3.5 h-3.5" />
              <span>Lưu {vocabulary.length} từ</span>
            </button>
          )}
        </div>
      </div>

      {/* Main Content Area: If imageUrl exists, split side-by-side on desktop */}
      {imageUrl ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-start">
          {/* Left Column: Image preview */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-2.5 border border-[#213a34]/12 shadow-2xs flex flex-col items-center sticky top-2">
            <div
              className="relative overflow-hidden rounded-xl border border-gray-200/80 max-w-full bg-[#fbf9f5] cursor-zoom-in group"
              onClick={() => setIsImageZoomOpen(true)}
              title="Nhấn để phóng to hình ảnh"
            >
              <img
                src={imageUrl}
                alt="Bức tranh minh họa"
                className="w-auto max-h-[260px] sm:max-h-[300px] object-contain rounded-xl group-hover:scale-[1.02] transition-transform duration-200"
              />
              <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                <span className="px-2.5 py-1 rounded-full bg-black/80 text-white text-[11px] font-bold flex items-center gap-1 shadow-sm">
                  <Maximize2 className="w-3 h-3 text-[#f8d467]" /> Phóng to ảnh
                </span>
              </div>
            </div>
            <span className="text-[10px] font-bold text-gray-400 mt-1.5 flex items-center gap-1">
              📸 Bức tranh minh họa · Click để xem to
            </span>
          </div>

          {/* Right Column: Dialogue lines */}
          <div className="lg:col-span-7">
            {renderDialogueLines()}
          </div>
        </div>
      ) : (
        renderDialogueLines()
      )}

      {/* Vocabulary Section (Compact Chips Grid) */}
      {vocabulary && vocabulary.length > 0 && (
        <div className="bg-[#fffdf8] rounded-2xl p-3 sm:p-4 border border-[#213a34]/15 shadow-2xs space-y-2.5">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#eb6a52]" />
              <h4 className="font-black text-[#213a34] text-xs sm:text-sm">
                Từ vựng trọng tâm trong bài
              </h4>
              <span className="text-[10px] font-bold text-gray-500 bg-[#e9f2ed] px-1.5 py-0.5 rounded-full">
                {vocabulary.length} từ
              </span>
            </div>

            <button
              type="button"
              onClick={handleOpenAddBatch}
              className="sm:hidden flex items-center gap-1 px-2 py-1 rounded-lg text-[10px] font-black bg-[#213a34] text-[#f8d467]"
            >
              <FolderPlus className="w-3 h-3" />
              <span>Lưu tất cả</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {vocabulary.map((vocab, vIdx) => {
              const isSaved = savedTerms.has(normalizeTerm(vocab.word));

              return (
                <div
                  key={vIdx}
                  className="bg-white p-2.5 rounded-xl border border-[#213a34]/10 hover:border-[#f29f77] shadow-2xs transition-all flex items-start justify-between gap-2 group"
                >
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="font-black text-[#213a34] text-xs truncate">
                        {vocab.word}
                      </span>
                      {vocab.partOfSpeech && (
                        <span className="text-[9px] font-black uppercase text-[#eb6a52] bg-[#f5f0e6] px-1 rounded">
                          {vocab.partOfSpeech}
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-gray-600 font-medium truncate mt-0.5">
                      {vocab.meaning}
                    </p>
                  </div>

                  <div className="flex items-center gap-1 shrink-0">
                    <button
                      type="button"
                      onClick={() => handleSpeak(vocab.word, `vocab-${vIdx}`)}
                      title={`Nghe phát âm từ: ${vocab.word}`}
                      className="p-1 rounded-md text-gray-400 hover:text-[#213a34] hover:bg-[#e9f2ed] transition-colors cursor-pointer"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                    </button>

                    {isSaved ? (
                      <span
                        title="Đã lưu vào sổ từ"
                        className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded-lg text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200"
                      >
                        <Check className="w-3 h-3" />
                        <span>Đã lưu</span>
                      </span>
                    ) : (
                      <button
                        type="button"
                        onClick={() => handleOpenAddSingle(vocab)}
                        title="Lưu từ này vào sổ từ"
                        className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded-lg text-[10px] font-black bg-[#f5f0e6] hover:bg-[#213a34] text-[#213a34] hover:text-[#f8d467] border border-[#213a34]/15 transition-all cursor-pointer shadow-2xs"
                      >
                        <Plus className="w-3 h-3" />
                        <span>Lưu</span>
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Image Zoom Lightbox Modal */}
      {isImageZoomOpen && imageUrl && (
        <div
          onClick={() => setIsImageZoomOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-sm cursor-zoom-out animate-in fade-in duration-150"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl max-h-[92vh] bg-white p-3 sm:p-4 rounded-3xl shadow-2xl flex flex-col items-center border-2 border-white/20"
          >
            <button
              type="button"
              onClick={() => setIsImageZoomOpen(false)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 rounded-2xl bg-black/60 hover:bg-black/80 text-white transition-colors z-10 cursor-pointer"
              title="Đóng (hoặc nhấn ra ngoài)"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={imageUrl}
              alt="Phóng to tranh minh họa"
              className="max-h-[82vh] w-auto max-w-full object-contain rounded-2xl"
            />
            <div className="text-xs font-bold text-gray-500 mt-2">
              📸 Bức tranh minh họa (Click ra ngoài để đóng)
            </div>
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
