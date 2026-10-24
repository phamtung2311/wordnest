'use client';

import { useState } from 'react';
import type { DialogueLine, VocabItem } from '@/data/intensive_listening_test1';
import {
  Volume2,
  Copy,
  Check,
  Eye,
  EyeOff,
  BookOpen,
  Sparkles,
} from 'lucide-react';

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
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-black bg-white hover:bg-[#e9f2ed] border border-[#213a34]/15 text-[#213a34] shadow-sm transition-colors"
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
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-[#eb6a52]" />
            <h4 className="font-black text-[#213a34] text-base sm:text-lg">
              Từ vựng trọng tâm trong bài
            </h4>
            <span className="text-xs font-bold text-gray-500 bg-[#e9f2ed] px-2 py-0.5 rounded-full">
              {vocabulary.length} từ
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {vocabulary.map((vocab, vIdx) => (
              <div
                key={vIdx}
                className="bg-white p-3.5 rounded-xl sm:rounded-2xl border border-[#213a34]/10 hover:border-[#f29f77] shadow-xs hover:shadow-sm transition-all flex items-start justify-between gap-3 group"
              >
                <div>
                  <div className="flex items-center gap-2">
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

                <button
                  type="button"
                  onClick={() => handleSpeak(vocab.word, `vocab-${vIdx}`)}
                  title={`Nghe phát âm từ: ${vocab.word}`}
                  className="p-1.5 rounded-lg text-gray-400 hover:text-[#213a34] hover:bg-[#e9f2ed] shrink-0 transition-colors"
                >
                  <Volume2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
