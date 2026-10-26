import { auth, db } from '@/lib/firebase';
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';

export interface EnglishNoteItem {
  id: string;
  structure: string;   // Cột 1: Cấu trúc / Mẹo
  explanation: string; // Cột 2: Giải thích / Ghi chú
  createdAt: number;
  updatedAt: number;
}

const STORAGE_KEY = 'wordnest-english-notes';
const VERSION_KEY = 'wordnest-english-notes-v2';

let cachedNotesRaw: string | null = null;
let cachedNotes: EnglishNoteItem[] = [];

export function getSavedEnglishNotes(): EnglishNoteItem[] {
  if (typeof window === 'undefined') return [];
  try {
    // Migration: If v2 is not set, wipe old sample dummy notes so user starts with a clean slate
    const v = localStorage.getItem(VERSION_KEY);
    if (v !== 'v2') {
      localStorage.setItem(VERSION_KEY, 'v2');
      localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
      cachedNotesRaw = JSON.stringify([]);
      cachedNotes = [];
      return [];
    }

    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw === cachedNotesRaw && cachedNotes) return cachedNotes;
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        // Map old format if any existed
        const formatted: EnglishNoteItem[] = parsed.map((item: any) => ({
          id: item.id || `note-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
          structure: item.structure || item.pattern || item.title || '',
          explanation: item.explanation || item.meaning || item.tip || '',
          createdAt: item.createdAt || Date.now(),
          updatedAt: item.updatedAt || Date.now(),
        }));
        cachedNotesRaw = raw;
        cachedNotes = formatted;
        return cachedNotes;
      }
    }
    cachedNotesRaw = JSON.stringify([]);
    cachedNotes = [];
    return [];
  } catch (e) {
    console.error('Error reading english notes from localStorage', e);
    return [];
  }
}

export function saveEnglishNotes(notes: EnglishNoteItem[]): void {
  if (typeof window === 'undefined') return;
  try {
    const serialized = JSON.stringify(notes);
    cachedNotesRaw = serialized;
    cachedNotes = notes;
    localStorage.setItem(STORAGE_KEY, serialized);
    localStorage.setItem(VERSION_KEY, 'v2');
    window.dispatchEvent(
      new CustomEvent('wordnest-english-notes-updated', { detail: notes }),
    );

    if (auth.currentUser) {
      void setDoc(
        doc(db, 'users', auth.currentUser.uid),
        {
          englishNotes: notes,
          updatedAt: serverTimestamp(),
        },
        { merge: true },
      ).catch((err) => console.error('Firestore englishNotes sync error', err));
    }
  } catch (e) {
    console.error('Error saving english notes', e);
  }
}

export function addEnglishNote(input: {
  structure: string;
  explanation: string;
}): EnglishNoteItem {
  const current = getSavedEnglishNotes();
  const newNote: EnglishNoteItem = {
    id: `note-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
    structure: input.structure.trim(),
    explanation: input.explanation.trim(),
    createdAt: Date.now(),
    updatedAt: Date.now(),
  };

  const updated = [newNote, ...current];
  saveEnglishNotes(updated);
  return newNote;
}

export function updateEnglishNote(
  id: string,
  input: {
    structure: string;
    explanation: string;
  },
): EnglishNoteItem | null {
  const current = getSavedEnglishNotes();
  let updatedNote: EnglishNoteItem | null = null;

  const nextNotes = current.map((item) => {
    if (item.id === id) {
      updatedNote = {
        ...item,
        structure: input.structure.trim(),
        explanation: input.explanation.trim(),
        updatedAt: Date.now(),
      };
      return updatedNote;
    }
    return item;
  });

  if (updatedNote) {
    saveEnglishNotes(nextNotes);
  }
  return updatedNote;
}

export function deleteEnglishNote(id: string): void {
  const current = getSavedEnglishNotes();
  const nextNotes = current.filter((item) => item.id !== id);
  saveEnglishNotes(nextNotes);
}

export function clearAllEnglishNotes(): void {
  saveEnglishNotes([]);
}

export function subscribeEnglishNotes(callback: () => void): () => void {
  if (typeof window === 'undefined') return () => {};
  window.addEventListener('wordnest-english-notes-updated', callback);
  window.addEventListener('storage', callback);
  return () => {
    window.removeEventListener('wordnest-english-notes-updated', callback);
    window.removeEventListener('storage', callback);
  };
}
