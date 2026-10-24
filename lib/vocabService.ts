import { auth, db } from '@/lib/firebase';
import { doc, setDoc } from 'firebase/firestore';

export type Level = 'new' | 'learning' | 'known';
export type Language = 'en' | 'zh';

export interface WordItem {
  id: number;
  term: string;
  meaning: string;
  example: string;
  phonetic?: string;
  partOfSpeech?: string;
  level: Level;
  nextReview: number;
  createdAt?: number;
}

export interface DeckItem {
  id: number;
  name: string;
  emoji: string;
  description: string;
  language?: Language;
  words: WordItem[];
}

const STORAGE_KEY = 'wordnest-decks';

// Helper to normalize terms for duplicate checking
export function normalizeTerm(term: string): string {
  return term.trim().toLowerCase();
}

let cachedDecksRaw: string | null = null;
let cachedDecks: DeckItem[] = [];

// 1. Get all decks from localStorage
export function getSavedDecks(): DeckItem[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw === cachedDecksRaw && cachedDecks) return cachedDecks;
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        cachedDecksRaw = raw;
        cachedDecks = parsed;
        return cachedDecks;
      }
    }
    cachedDecksRaw = null;
    cachedDecks = [];
    return [];
  } catch (e) {
    console.error('Error reading decks from localStorage', e);
    return [];
  }
}

// 2. Ensure at least one deck exists, creating a default TOEIC deck if none
export function getOrCreateDefaultDeck(): DeckItem {
  const decks = getSavedDecks();
  if (decks.length > 0) {
    // Prefer existing deck with 'TOEIC' or first English deck
    const toeicDeck = decks.find(
      (d) => d.name.toLowerCase().includes('toeic') || d.name.toLowerCase().includes('nghe')
    );
    if (toeicDeck) return toeicDeck;
    const enDeck = decks.find((d) => d.language !== 'zh');
    if (enDeck) return enDeck;
    return decks[0];
  }

  // Create new default deck
  const newDeck: DeckItem = {
    id: Date.now(),
    name: 'ETS TOEIC 2026 - Luyện nghe',
    emoji: '🎧',
    description: 'Từ vựng lưu từ phần Luyện nghe chi tiết',
    language: 'en',
    words: [],
  };

  saveDecks([newDeck]);
  return newDeck;
}

// 3. Save all decks to localStorage & sync to Firestore if logged in
export function saveDecks(decks: DeckItem[]): void {
  if (typeof window === 'undefined') return;
  try {
    const serialized = JSON.stringify(decks);
    cachedDecksRaw = serialized;
    cachedDecks = decks;
    localStorage.setItem(STORAGE_KEY, serialized);
    window.dispatchEvent(new CustomEvent('wordnest-decks-updated', { detail: decks }));
  } catch (e) {
    console.error('Error saving decks to localStorage', e);
  }
}

export function subscribeDecks(callback: () => void): () => void {
  if (typeof window === 'undefined') return () => {};
  window.addEventListener('wordnest-decks-updated', callback);
  window.addEventListener('storage', callback);
  return () => {
    window.removeEventListener('wordnest-decks-updated', callback);
    window.removeEventListener('storage', callback);
  };
}

// 4. Create a new deck
export function createNewDeck(name: string, emoji = '📚', description = 'Bộ từ vựng mới'): DeckItem {
  const decks = getSavedDecks();
  const newDeck: DeckItem = {
    id: Date.now(),
    name: name.trim(),
    emoji: emoji.trim() || '📚',
    description: description.trim(),
    language: 'en',
    words: [],
  };

  const updated = [newDeck, ...decks];
  saveDecks(updated);

  // Sync to Firestore if logged in
  if (auth.currentUser) {
    const userId = auth.currentUser.uid;
    const { words: _w, ...details } = newDeck;
    setDoc(doc(db, 'users', userId, 'decks', String(newDeck.id)), details, { merge: true }).catch(
      (err) => console.error('Firestore deck create error', err)
    );
  }

  return newDeck;
}

// 5. Add a single word to a specific deck
export function addWordToDeck(
  deckId: number,
  wordData: {
    term: string;
    meaning: string;
    example?: string;
    phonetic?: string;
    partOfSpeech?: string;
  }
): { success: boolean; message: string; word?: WordItem } {
  const decks = getSavedDecks();
  let targetDeck = decks.find((d) => d.id === deckId);

  if (!targetDeck) {
    targetDeck = getOrCreateDefaultDeck();
  }

  const term = wordData.term.trim();
  const meaning = wordData.meaning.trim();

  if (!term) {
    return { success: false, message: 'Từ vựng không được để trống' };
  }

  // Duplicate check
  const exists = targetDeck.words.some((w) => normalizeTerm(w.term) === normalizeTerm(term));
  if (exists) {
    return { success: false, message: `Từ "${term}" đã có trong bộ "${targetDeck.name}".` };
  }

  const now = Date.now();
  const newWord: WordItem = {
    id: now,
    term,
    meaning: meaning || 'Đang cập nhật nghĩa...',
    example: wordData.example ? wordData.example.trim() : '',
    phonetic: wordData.phonetic ? wordData.phonetic.trim() : undefined,
    partOfSpeech: wordData.partOfSpeech ? wordData.partOfSpeech.trim() : undefined,
    level: 'new',
    nextReview: now,
    createdAt: now,
  };

  const updatedDecks = decks.map((d) => {
    if (d.id === targetDeck.id) {
      return {
        ...d,
        words: [newWord, ...d.words],
      };
    }
    return d;
  });

  // If target deck was newly created and not yet in decks
  if (!decks.some((d) => d.id === targetDeck.id)) {
    updatedDecks.unshift({
      ...targetDeck,
      words: [newWord],
    });
  }

  saveDecks(updatedDecks);

  // Sync to Firestore if user logged in
  if (auth.currentUser) {
    const userId = auth.currentUser.uid;
    const { words: _w, ...details } = targetDeck;
    setDoc(doc(db, 'users', userId, 'decks', String(targetDeck.id)), details, { merge: true }).catch(
      console.error
    );
    setDoc(
      doc(db, 'users', userId, 'decks', String(targetDeck.id), 'words', String(newWord.id)),
      newWord
    ).catch(console.error);
  }

  return {
    success: true,
    message: `Đã lưu "${term}" vào bộ "${targetDeck.name}"!`,
    word: newWord,
  };
}

// 6. Add multiple words to a specific deck
export function addMultipleWordsToDeck(
  deckId: number,
  wordsList: Array<{
    term: string;
    meaning: string;
    example?: string;
    phonetic?: string;
    partOfSpeech?: string;
  }>
): { addedCount: number; skippedCount: number; deckName: string } {
  const decks = getSavedDecks();
  let targetDeck = decks.find((d) => d.id === deckId);

  if (!targetDeck) {
    targetDeck = getOrCreateDefaultDeck();
  }

  const existingTerms = new Set(targetDeck.words.map((w) => normalizeTerm(w.term)));
  const newWordsToAdd: WordItem[] = [];
  let skipped = 0;

  wordsList.forEach((item, index) => {
    const term = item.term.trim();
    if (!term || existingTerms.has(normalizeTerm(term))) {
      skipped += 1;
      return;
    }

    const now = Date.now() + index; // Unique timestamps
    const word: WordItem = {
      id: now,
      term,
      meaning: item.meaning.trim() || 'Đang cập nhật...',
      example: item.example ? item.example.trim() : '',
      phonetic: item.phonetic ? item.phonetic.trim() : undefined,
      partOfSpeech: item.partOfSpeech ? item.partOfSpeech.trim() : undefined,
      level: 'new',
      nextReview: now,
      createdAt: now,
    };

    newWordsToAdd.push(word);
    existingTerms.add(normalizeTerm(term));
  });

  if (newWordsToAdd.length === 0) {
    return { addedCount: 0, skippedCount: skipped, deckName: targetDeck.name };
  }

  const updatedDecks = decks.map((d) => {
    if (d.id === targetDeck.id) {
      return {
        ...d,
        words: [...newWordsToAdd, ...d.words],
      };
    }
    return d;
  });

  if (!decks.some((d) => d.id === targetDeck.id)) {
    updatedDecks.unshift({
      ...targetDeck,
      words: newWordsToAdd,
    });
  }

  saveDecks(updatedDecks);

  // Sync to Firestore if user logged in
  if (auth.currentUser) {
    const userId = auth.currentUser.uid;
    const { words: _w, ...details } = targetDeck;
    setDoc(doc(db, 'users', userId, 'decks', String(targetDeck.id)), details, { merge: true }).catch(
      console.error
    );

    newWordsToAdd.forEach((w) => {
      setDoc(
        doc(db, 'users', userId, 'decks', String(targetDeck.id), 'words', String(w.id)),
        w
      ).catch(console.error);
    });
  }

  return {
    addedCount: newWordsToAdd.length,
    skippedCount: skipped,
    deckName: targetDeck.name,
  };
}

// 7. Check which words are already saved across all decks
export function getSavedTermsSet(): Set<string> {
  const decks = getSavedDecks();
  const set = new Set<string>();
  decks.forEach((deck) => {
    deck.words.forEach((w) => {
      set.add(normalizeTerm(w.term));
    });
  });
  return set;
}

// 8. Update review status for a word (SRS intervals)
export function updateWordReview(
  deckId: number,
  wordId: number,
  rating: 'again' | 'learning' | 'known'
): void {
  const decks = getSavedDecks();
  const now = Date.now();
  const DAY = 86400000;

  let nextInterval: number;
  let nextLevel: Level;

  if (rating === 'again') {
    nextInterval = 5 * 60 * 1000; // 5 minutes
    nextLevel = 'learning';
  } else if (rating === 'learning') {
    nextInterval = DAY; // 1 day
    nextLevel = 'learning';
  } else {
    nextInterval = DAY * 3; // 3 days
    nextLevel = 'known';
  }

  let updatedWord: WordItem | undefined;

  const updatedDecks = decks.map((deck) => {
    if (deck.id === deckId) {
      return {
        ...deck,
        words: deck.words.map((w) => {
          if (w.id === wordId) {
            updatedWord = {
              ...w,
              level: nextLevel,
              nextReview: now + nextInterval,
            };
            return updatedWord;
          }
          return w;
        }),
      };
    }
    return deck;
  });

  saveDecks(updatedDecks);

  if (auth.currentUser && updatedWord) {
    const userId = auth.currentUser.uid;
    setDoc(
      doc(db, 'users', userId, 'decks', String(deckId), 'words', String(wordId)),
      updatedWord,
      { merge: true }
    ).catch(console.error);
  }
}

