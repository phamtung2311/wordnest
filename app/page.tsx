'use client';

import { Fragment, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import {
  ArrowLeft,
  ArrowRight,
  BellRing,
  BookOpen,
  Brain,
  CalendarCheck,
  Check,
  ChevronRight,
  Clock3,
  Cloud,
  Flame,
  FolderPlus,
  Languages,
  LoaderCircle,
  LogIn,
  LogOut,
  Plus,
  RotateCcw,
  Search,
  Sparkles,
  Timer,
  Trash2,
  WalletCards,
  Volume2,
  X,
} from 'lucide-react';
import {
  getRedirectResult,
  onAuthStateChanged,
  signInWithRedirect,
  signOut,
  type User,
} from 'firebase/auth';
import {
  collection,
  deleteField,
  doc,
  getDoc,
  getDocs,
  serverTimestamp,
  setDoc,
  writeBatch,
} from 'firebase/firestore';
import { Button } from '@/components/ui/button';
import { auth, db, googleProvider } from '@/lib/firebase';

type Level = 'new' | 'learning' | 'known';
type Language = 'en' | 'zh';
type Word = {
  id: number;
  term: string;
  meaning: string;
  example: string;
  phonetic?: string;
  partOfSpeech?: string;
  level: Level;
  nextReview: number;
  createdAt?: number;
};
type Deck = {
  id: number;
  name: string;
  emoji: string;
  description: string;
  language?: Language;
  words: Word[];
};
type StudyProgress = {
  dailySeconds: Record<string, number>;
  completedDays?: Record<string, boolean>;
};
type TranslationExercise = {
  id: number;
  sentence: string;
  translation: string;
  source: string;
  license?: string;
};
type Habit = { id: string; name: string; emoji: string; doneDates: string[] };
type Expense = {
  id: number;
  amount: number;
  category: string;
  note: string;
  date: string;
  budgetId?: string;
};
type Income = {
  id: number;
  amount: number;
  source: string;
  note: string;
  date: string;
};
type Budget = { id: string; name: string; limit: number };
type LifeTask = { id: string; text: string; done: boolean };
type Note = {
  id: string;
  title: string;
  content: string;
  createdAt: number;
  updatedAt: number;
};
type LifeData = {
  habits: Habit[];
  expenses: Expense[];
  incomes: Income[];
  monthlyBudget: number;
  budgets?: Budget[];
  monthlyBudgets?: Record<string, Budget[]>;
  dailyTasks: Record<string, LifeTask[]>;
  weeklyGoals: LifeTask[];
  monthlyGoals: LifeTask[];
  notes: Note[];
  journal: Record<string, string>;
  energy: Record<string, number>;
};

const DAY = 86400000;
const legacyStarterDecks: Deck[] = [
  {
    id: 1,
    name: 'Du lịch Nhật Bản',
    emoji: '🗾',
    description: '20 từ cần dùng cho chuyến đi',
    words: [
      {
        id: 11,
        term: 'destination',
        meaning: 'điểm đến',
        example: 'Tokyo is our next destination.',
        level: 'learning',
        nextReview: new Date().getTime(),
      },
      {
        id: 12,
        term: 'itinerary',
        meaning: 'lịch trình',
        example: 'Let’s check the itinerary.',
        level: 'new',
        nextReview: new Date().getTime(),
      },
      {
        id: 13,
        term: 'departure',
        meaning: 'sự khởi hành',
        example: 'Departure is at 8 a.m.',
        level: 'known',
        nextReview: new Date().getTime() + DAY * 3,
      },
      {
        id: 14,
        term: 'accommodation',
        meaning: 'chỗ ở',
        example: 'The accommodation is near the station.',
        level: 'learning',
        nextReview: new Date().getTime(),
      },
      {
        id: 15,
        term: 'souvenir',
        meaning: 'quà lưu niệm',
        example: 'I bought a small souvenir.',
        level: 'known',
        nextReview: new Date().getTime() + DAY * 7,
      },
    ],
  },
  {
    id: 2,
    name: 'Giao tiếp công việc',
    emoji: '💼',
    description: 'Từ vựng dùng ở văn phòng',
    words: [
      {
        id: 21,
        term: 'deadline',
        meaning: 'hạn chót',
        example: 'The deadline is Friday.',
        level: 'learning',
        nextReview: new Date().getTime(),
      },
      {
        id: 22,
        term: 'feedback',
        meaning: 'phản hồi',
        example: 'Thank you for your feedback.',
        level: 'new',
        nextReview: new Date().getTime(),
      },
      {
        id: 23,
        term: 'schedule',
        meaning: 'lịch trình',
        example: 'My schedule is quite full.',
        level: 'known',
        nextReview: new Date().getTime() + DAY * 4,
      },
    ],
  },
  {
    id: 3,
    name: 'IELTS — Environment',
    emoji: '🌱',
    description: 'Từ vựng chủ đề môi trường',
    words: [
      {
        id: 31,
        term: 'sustainable',
        meaning: 'bền vững',
        example: 'We need sustainable solutions.',
        level: 'new',
        nextReview: new Date().getTime(),
      },
      {
        id: 32,
        term: 'biodiversity',
        meaning: 'đa dạng sinh học',
        example: 'The forest has rich biodiversity.',
        level: 'learning',
        nextReview: new Date().getTime(),
      },
    ],
  },
];
const starterDecks: Deck[] = [];
const emptyProgress: StudyProgress = { dailySeconds: {}, completedDays: {} };
const defaultLifeData: LifeData = {
  habits: [
    { id: 'water', name: 'Uống đủ nước', emoji: '💧', doneDates: [] },
    { id: 'move', name: 'Vận động 5 phút', emoji: '🚶', doneDates: [] },
    { id: 'learn', name: 'Học một chút', emoji: '📚', doneDates: [] },
  ],
  expenses: [],
  incomes: [],
  monthlyBudget: 5000000,
  budgets: [
    { id: 'food', name: 'Ăn uống', limit: 2000000 },
    { id: 'learning', name: 'Học tập', limit: 500000 },
    { id: 'online', name: 'Mua hàng online', limit: 1000000 },
    { id: 'rent', name: 'Nhà trọ', limit: 3000000 },
  ],
  dailyTasks: {},
  weeklyGoals: [],
  monthlyGoals: [],
  notes: [],
  journal: {},
  energy: {},
};

function dateKey(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function normalizeLifeData(incoming: Partial<LifeData>): LifeData {
  const merged = { ...defaultLifeData, ...incoming };
  const cleanBudgets = (items: Budget[] = []) =>
    items.filter(
      (budget) =>
        budget.id !== 'general' &&
        budget.name.trim().toLocaleLowerCase('vi-VN') !== 'ngân sách chung',
    );
  const currentMonth = dateKey().slice(0, 7);
  const monthlyBudgets = Object.fromEntries(
    Object.entries(incoming.monthlyBudgets ?? {}).map(([key, items]) => [
      key,
      cleanBudgets(items),
    ]),
  );
  const budgets = cleanBudgets(merged.budgets);
  if (!(currentMonth in monthlyBudgets)) monthlyBudgets[currentMonth] = budgets;
  return { ...merged, budgets, monthlyBudgets };
}

function completedStudyDay(progress: StudyProgress, key: string) {
  return (
    (progress.dailySeconds[key] ?? 0) >= 600 ||
    progress.completedDays?.[key] === true
  );
}

function mergeStudyProgress(
  first: StudyProgress,
  second: StudyProgress,
): StudyProgress {
  const dailySeconds = { ...first.dailySeconds };
  for (const [key, seconds] of Object.entries(second.dailySeconds ?? {})) {
    dailySeconds[key] = Math.max(dailySeconds[key] ?? 0, seconds);
  }
  const completedDays: Record<string, boolean> = {};
  for (const key of new Set([
    ...Object.keys(first.completedDays ?? {}),
    ...Object.keys(second.completedDays ?? {}),
  ])) {
    if (
      first.completedDays?.[key] === true ||
      second.completedDays?.[key] === true
    )
      completedDays[key] = true;
  }
  return { dailySeconds, completedDays };
}

function calculateStreak(progress: StudyProgress) {
  const cursor = new Date();
  if (!completedStudyDay(progress, dateKey(cursor)))
    cursor.setDate(cursor.getDate() - 1);
  let streak = 0;
  while (completedStudyDay(progress, dateKey(cursor))) {
    streak += 1;
    cursor.setDate(cursor.getDate() - 1);
  }
  return streak;
}

function isUntouchedLegacyDeck(deck: Deck) {
  const original = legacyStarterDecks.find(
    (item) => item.id === deck.id && item.name === deck.name,
  );
  return Boolean(
    original &&
    original.words.length === deck.words.length &&
    original.words.every(
      (word, index) =>
        deck.words[index]?.id === word.id &&
        deck.words[index]?.term === word.term,
    ),
  );
}

function countDue(deck: Deck, now = new Date().getTime()) {
  return deck.words.filter((word) => word.nextReview <= now).length;
}
function normalizeTerm(term: string) {
  return term.trim().toLocaleLowerCase('en-US').replace(/\s+/g, ' ');
}
function deckLanguage(deck: Deck): Language {
  return deck.language === 'zh' ? 'zh' : 'en';
}
function languageName(language: Language) {
  return language === 'zh' ? 'Tiếng Trung' : 'Tiếng Anh';
}
function languageBadge(language: Language) {
  return language === 'zh' ? '🇨🇳 Tiếng Trung' : '🇬🇧 Tiếng Anh';
}
function partOfSpeechLabel(value: string) {
  const labels: Record<string, string> = {
    noun: 'Danh từ',
    verb: 'Động từ',
    adjective: 'Tính từ',
    adverb: 'Trạng từ',
    pronoun: 'Đại từ',
    preposition: 'Giới từ',
    conjunction: 'Liên từ',
    interjection: 'Thán từ',
    determiner: 'Từ hạn định',
    article: 'Mạo từ',
    exclamation: 'Thán từ',
  };
  const normalized = value.trim().toLowerCase();
  return labels[normalized] ? `${labels[normalized]} · ${normalized}` : value;
}
function fallbackWordMetadata(term: string) {
  const fallback: Record<string, { phonetic: string; partOfSpeech: string }> = {
    daily: { phonetic: 'ˈdeɪli', partOfSpeech: 'adjective' },
    reduce: { phonetic: 'rɪˈdjuːs', partOfSpeech: 'verb' },
    onboarding: { phonetic: 'ˈɒnbɔːrdɪŋ', partOfSpeech: 'noun' },
    habit: { phonetic: 'ˈhæbɪt', partOfSpeech: 'noun' },
    maintain: { phonetic: 'meɪnˈteɪn', partOfSpeech: 'verb' },
    notify: { phonetic: 'ˈnəʊtɪfaɪ', partOfSpeech: 'verb' },
    renovation: { phonetic: 'ˌrenəˈveɪʃn', partOfSpeech: 'noun' },
    modify: { phonetic: 'ˈmɒdɪfaɪ', partOfSpeech: 'verb' },
    vary: { phonetic: 'ˈveri', partOfSpeech: 'verb' },
    alter: { phonetic: 'ˈɔːltər', partOfSpeech: 'verb' },
    invite: { phonetic: 'ɪnˈvaɪt', partOfSpeech: 'verb' },
    merge: { phonetic: 'mɜːrdʒ', partOfSpeech: 'verb' },
    reflect: { phonetic: 'rɪˈflekt', partOfSpeech: 'verb' },
  };
  return fallback[normalizeTerm(term)];
}
function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
function reviewCountdown(nextReview: number, now: number) {
  const remaining = nextReview - now;
  if (remaining <= 0) return 'Ôn ngay';
  const totalMinutes = Math.ceil(remaining / 60000);
  const days = Math.floor(totalMinutes / 1440);
  const hours = Math.floor((totalMinutes % 1440) / 60);
  const minutes = totalMinutes % 60;
  if (days) return `Còn ${days} ngày${hours ? ` ${hours} giờ` : ''}`;
  if (hours) return `Còn ${hours} giờ${minutes ? ` ${minutes} phút` : ''}`;
  return `Còn ${Math.max(1, minutes)} phút`;
}

async function fetchJson(url: string, timeoutMs = 3500) {
  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch(url, { signal: controller.signal });
    return response.ok ? await response.json() : null;
  } catch {
    return null;
  } finally {
    window.clearTimeout(timeout);
  }
}

function deckDetails(deck: Deck) {
  const { words: _words, ...details } = deck;
  return details;
}

async function commitDeckOperations(
  operations: Array<(batch: ReturnType<typeof writeBatch>) => void>,
) {
  for (let index = 0; index < operations.length; index += 400) {
    const batch = writeBatch(db);
    operations.slice(index, index + 400).forEach((apply) => apply(batch));
    await batch.commit();
  }
}

async function saveDeckChanges(userId: string, previous: Deck[], next: Deck[]) {
  const before = new Map(previous.map((deck) => [deck.id, deck]));
  const after = new Map(next.map((deck) => [deck.id, deck]));
  const operations: Array<(batch: ReturnType<typeof writeBatch>) => void> = [];
  for (const [deckId, oldDeck] of before) {
    if (after.has(deckId)) continue;
    operations.push((batch) =>
      batch.delete(doc(db, 'users', userId, 'decks', String(deckId))),
    );
    oldDeck.words.forEach((word) =>
      operations.push((batch) =>
        batch.delete(
          doc(
            db,
            'users',
            userId,
            'decks',
            String(deckId),
            'words',
            String(word.id),
          ),
        ),
      ),
    );
  }
  for (const [deckId, deck] of after) {
    const oldDeck = before.get(deckId);
    if (
      !oldDeck ||
      JSON.stringify(deckDetails(oldDeck)) !== JSON.stringify(deckDetails(deck))
    ) {
      operations.push((batch) =>
        batch.set(
          doc(db, 'users', userId, 'decks', String(deckId)),
          deckDetails(deck),
        ),
      );
    }
    const oldWords = new Map(
      (oldDeck?.words ?? []).map((word) => [word.id, word]),
    );
    const nextWords = new Map(deck.words.map((word) => [word.id, word]));
    for (const [wordId] of oldWords)
      if (!nextWords.has(wordId))
        operations.push((batch) =>
          batch.delete(
            doc(
              db,
              'users',
              userId,
              'decks',
              String(deckId),
              'words',
              String(wordId),
            ),
          ),
        );
    for (const [wordId, word] of nextWords) {
      if (
        !oldWords.has(wordId) ||
        JSON.stringify(oldWords.get(wordId)) !== JSON.stringify(word)
      ) {
        operations.push((batch) =>
          batch.set(
            doc(
              db,
              'users',
              userId,
              'decks',
              String(deckId),
              'words',
              String(wordId),
            ),
            word,
          ),
        );
      }
    }
  }
  if (operations.length) await commitDeckOperations(operations);
}

async function loadStoredDecks(userId: string) {
  const deckSnapshots = await getDocs(collection(db, 'users', userId, 'decks'));
  return Promise.all(
    deckSnapshots.docs.map(async (snapshot) => {
      const wordSnapshots = await getDocs(
        collection(db, 'users', userId, 'decks', snapshot.id, 'words'),
      );
      return {
        ...(snapshot.data() as Omit<Deck, 'words'>),
        words: wordSnapshots.docs.map((word) => word.data() as Word),
      } as Deck;
    }),
  );
}

export default function Home() {
  const [decks, setDecks] = useState<Deck[]>(starterDecks);
  const [progress, setProgress] = useState<StudyProgress>(emptyProgress);
  const [activeDeck, setActiveDeck] = useState<number | null>(null);
  const [page, setPage] = useState<'home' | 'library' | 'life' | 'about'>('home');

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (['home', 'library', 'life', 'about'].includes(hash)) {
        setPage(hash as any);
      } else if (!hash) {
        setPage('home');
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);
  const [lifeData, setLifeData] = useState<LifeData>(defaultLifeData);
  const [studyQueue, setStudyQueue] = useState<number[]>([]);
  const [revealed, setRevealed] = useState(false);
  const [showAddWord, setShowAddWord] = useState(false);
  const [prefillWord, setPrefillWord] = useState('');
  const [showAddDeck, setShowAddDeck] = useState(false);
  const [showDeleteDeck, setShowDeleteDeck] = useState(false);
  const [showRetryOptions, setShowRetryOptions] = useState(false);
  const [showLearningOptions, setShowLearningOptions] = useState(false);
  const [showKnownOptions, setShowKnownOptions] = useState(false);
  const [showTease, setShowTease] = useState(false);
  const [search, setSearch] = useState('');
  const [loaded, setLoaded] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [authReady, setAuthReady] = useState(true);
  const [cloudReady, setCloudReady] = useState(false);
  const [syncStatus, setSyncStatus] = useState<
    'local' | 'loading' | 'saved' | 'error'
  >('local');
  const [authError, setAuthError] = useState('');
  const [migrationNotice, setMigrationNotice] = useState('');
  const [audioStatus, setAudioStatus] = useState<
    'idle' | 'loading' | 'playing' | 'error'
  >('idle');
  const [clockNow, setClockNow] = useState(() => new Date().getTime());
  const [translationExercise, setTranslationExercise] =
    useState<TranslationExercise | null>(null);
  const [exerciseStatus, setExerciseStatus] = useState<
    'idle' | 'loading' | 'ready' | 'empty' | 'error'
  >('idle');
  const [translationAnswer, setTranslationAnswer] = useState('');
  const [showTranslationAnswer, setShowTranslationAnswer] = useState(false);
  const saveTimerRef = useRef<number | null>(null);
  const deckSaveTimerRef = useRef<number | null>(null);
  const syncedDecksRef = useRef<Deck[] | null>(null);
  const studyAreaRef = useRef<HTMLDivElement | null>(null);
  const autoSpeakEnabledRef = useRef(false);
  const autoSpeakTimerRef = useRef<number | null>(null);
  const teaseTimerRef = useRef<number | null>(null);

  useEffect(
    () => () => {
      if (teaseTimerRef.current !== null)
        window.clearTimeout(teaseTimerRef.current);
    },
    [],
  );

  useEffect(() => {
    const migration = new URLSearchParams(window.location.hash.slice(1)).get(
      'migration',
    );
    const saved = migration
      ? decodeURIComponent(escape(window.atob(migration)))
      : localStorage.getItem('wordnest-decks');
    const savedProgress = localStorage.getItem('wordnest-progress');
    const savedLife = localStorage.getItem('wordnest-life');
    if (saved) {
      const parsed = JSON.parse(saved) as Deck[];
      const cleaned = parsed.filter((deck) => !isUntouchedLegacyDeck(deck));
      setDecks(
        cleaned.map((deck) => ({
          ...deck,
          words: deck.words.map((word) => ({
            ...word,
            createdAt:
              word.createdAt ?? (word.id > 1000000000000 ? word.id : undefined),
          })),
        })),
      );
      if (migration) {
        localStorage.setItem('wordnest-decks', saved);
        window.history.replaceState(null, '', window.location.pathname);
        setMigrationNotice(
          `Đã chuyển ${cleaned.reduce((total, deck) => total + deck.words.length, 0)} từ từ trang cũ. Hãy đăng nhập Google để lưu vào tài khoản.`,
        );
      }
    }
    if (savedProgress)
      setProgress(
        mergeStudyProgress(
          emptyProgress,
          JSON.parse(savedProgress) as StudyProgress,
        ),
      );
    if (savedLife)
      setLifeData(
        normalizeLifeData(JSON.parse(savedLife) as Partial<LifeData>),
      );
    setLoaded(true);
  }, []);
  useEffect(
    () =>
      onAuthStateChanged(auth, (nextUser) => {
        setUser(nextUser);
        setAuthReady(true);
        if (!nextUser) {
          localStorage.removeItem('wordnest-decks');
          localStorage.removeItem('wordnest-progress');
          setDecks([]);
          setProgress(emptyProgress);
          setActiveDeck(null);
          window.location.hash = 'home';
          setStudyQueue([]);
          setRevealed(false);
          setCloudReady(false);
          setSyncStatus('local');
        }
      }),
    [],
  );
  useEffect(() => {
    void getRedirectResult(auth).catch((error: { code?: string }) => {
      setAuthError(
        error?.code === 'auth/unauthorized-domain'
          ? 'Tên miền này chưa được Firebase cho phép đăng nhập.'
          : 'Đăng nhập Google chưa thành công. Vui lòng thử lại.',
      );
      setSyncStatus('error');
    });
  }, []);

  useEffect(() => {
    if (!loaded || !user) return;
    let cancelled = false;
    setSyncStatus('loading');
    void Promise.all([
      getDoc(doc(db, 'users', user.uid)),
      loadStoredDecks(user.uid),
    ])
      .then(async ([snapshot, storedDecks]) => {
        if (cancelled) return;
        const cloudDecks = snapshot.data()?.decks as Deck[] | undefined;
        const cloudProgress = snapshot.data()?.progress as
          | StudyProgress
          | undefined;
        const cloudLife = snapshot.data()?.lifeData as LifeData | undefined;
        const mergedProgress = mergeStudyProgress(
          progress,
          cloudProgress ?? emptyProgress,
        );
        setProgress(mergedProgress);
        if (cloudLife) setLifeData(normalizeLifeData(cloudLife));
        if (storedDecks.length) {
          setDecks(storedDecks);
          syncedDecksRef.current = storedDecks;
          if (cloudDecks?.length) {
            await setDoc(
              doc(db, 'users', user.uid),
              {
                decks: deleteField(),
                storageVersion: 2,
                progress: mergedProgress,
                updatedAt: serverTimestamp(),
              },
              { merge: true },
            );
            if (!cancelled)
              setMigrationNotice(
                `Đã dọn bản sao dữ liệu cũ. ${storedDecks.reduce((total, deck) => total + deck.words.length, 0)} từ đang được lưu riêng.`,
              );
          }
        } else if (cloudDecks?.length) {
          const cleaned = cloudDecks.filter(
            (deck) => !isUntouchedLegacyDeck(deck),
          );
          setDecks(cleaned);
          await saveDeckChanges(user.uid, [], cleaned);
          await setDoc(
            doc(db, 'users', user.uid),
            {
              decks: deleteField(),
              storageVersion: 2,
              progress: mergedProgress,
              email: user.email,
              displayName: user.displayName,
              updatedAt: serverTimestamp(),
            },
            { merge: true },
          );
          syncedDecksRef.current = cleaned;
          if (!cancelled)
            setMigrationNotice(
              `Đã tối ưu ${cleaned.reduce((total, deck) => total + deck.words.length, 0)} từ sang cách lưu mới.`,
            );
        } else {
          syncedDecksRef.current = [];
          await setDoc(
            doc(db, 'users', user.uid),
            {
              storageVersion: 2,
              progress: mergedProgress,
              email: user.email,
              displayName: user.displayName,
              updatedAt: serverTimestamp(),
            },
            { merge: true },
          );
        }
        if (!cancelled) {
          setCloudReady(true);
          setSyncStatus('saved');
        }
      })
      .catch(() => {
        if (!cancelled) setSyncStatus('error');
      });
    return () => {
      cancelled = true;
    };
  }, [loaded, user?.uid]);

  useEffect(() => {
    if (!loaded) return;
    localStorage.setItem('wordnest-decks', JSON.stringify(decks));
    localStorage.setItem('wordnest-progress', JSON.stringify(progress));
    localStorage.setItem('wordnest-life', JSON.stringify(lifeData));
    if (!user || !cloudReady) return;
    if (saveTimerRef.current) window.clearTimeout(saveTimerRef.current);
    saveTimerRef.current = window.setTimeout(() => {
      void setDoc(
        doc(db, 'users', user.uid),
        {
          progress,
          lifeData,
          email: user.email,
          displayName: user.displayName,
          updatedAt: serverTimestamp(),
        },
        { merge: true },
      )
        .then(() => setSyncStatus('saved'))
        .catch(() => setSyncStatus('error'));
    }, 500);
    return () => {
      if (saveTimerRef.current) window.clearTimeout(saveTimerRef.current);
    };
  }, [decks, progress, lifeData, loaded, user?.uid, cloudReady]);

  useEffect(() => {
    if (!loaded || !user || !cloudReady || !syncedDecksRef.current) return;
    if (deckSaveTimerRef.current) window.clearTimeout(deckSaveTimerRef.current);
    const previous = syncedDecksRef.current;
    deckSaveTimerRef.current = window.setTimeout(() => {
      void saveDeckChanges(user.uid, previous, decks)
        .then(() => {
          syncedDecksRef.current = decks;
          setSyncStatus('saved');
        })
        .catch(() => setSyncStatus('error'));
    }, 500);
    return () => {
      if (deckSaveTimerRef.current)
        window.clearTimeout(deckSaveTimerRef.current);
    };
  }, [decks, loaded, user?.uid, cloudReady]);
  useEffect(() => {
    const context = (
      document as Document & {
        modelContext?: {
          registerTool: (
            tool: unknown,
            options?: { signal?: AbortSignal },
          ) => void | Promise<void>;
        };
      }
    ).modelContext;
    if (!context?.registerTool) return;
    const lifecycle = new AbortController();
    void Promise.resolve(
      context.registerTool(
        {
          name: 'add_words_to_deck',
          title: 'Thêm nhiều từ vào bộ từ',
          description:
            'Thêm một hoặc nhiều từ tiếng Anh vào một bộ từ WordNest hiện có.',
          inputSchema: {
            type: 'object',
            properties: {
              deckName: { type: 'string' },
              words: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    term: { type: 'string' },
                    meaning: { type: 'string' },
                    example: { type: 'string' },
                  },
                  required: ['term', 'meaning'],
                  additionalProperties: false,
                },
              },
            },
            required: ['deckName', 'words'],
            additionalProperties: false,
          },
          annotations: { readOnlyHint: false, untrustedContentHint: true },
          execute(input: unknown) {
            const value = input as {
              deckName?: string;
              words?: { term?: string; meaning?: string; example?: string }[];
            };
            const target = decks.find(
              (deck) =>
                deck.name.toLowerCase() ===
                value.deckName?.trim().toLowerCase(),
            );
            if (!target) throw new Error('Không tìm thấy bộ từ.');
            if (
              !Array.isArray(value.words) ||
              !value.words.length ||
              value.words.some(
                (word) => !word.term?.trim() || !word.meaning?.trim(),
              )
            )
              throw new Error(
                'Mỗi từ cần có từ tiếng Anh và nghĩa tiếng Việt.',
              );
            const existingTerms = new Set(
              target.words.map((word) => normalizeTerm(word.term)),
            );
            const incomingTerms = value.words.map((word) =>
              normalizeTerm(word.term!),
            );
            const duplicateIndex = incomingTerms.findIndex(
              (term, index) =>
                existingTerms.has(term) ||
                incomingTerms.indexOf(term) !== index,
            );
            if (duplicateIndex >= 0)
              throw new Error(
                `Từ “${value.words[duplicateIndex].term}” đã có trong bộ từ này.`,
              );
            const stamp = new Date().getTime();
            const additions: Word[] = value.words.map((word, index) => ({
              id: stamp + index,
              term: word.term!.trim(),
              meaning: word.meaning!.trim(),
              example: word.example?.trim() ?? '',
              level: 'new',
              nextReview: stamp,
              createdAt: stamp + index,
            }));
            setDecks((all) =>
              all.map((deck) =>
                deck.id === target.id
                  ? { ...deck, words: [...deck.words, ...additions] }
                  : deck,
              ),
            );
            setStudyQueue([
              ...target.words
                .filter((word) => word.nextReview <= stamp)
                .map((word) => word.id),
              ...additions.map((word) => word.id),
            ]);
            setActiveDeck(target.id);
            return { deck: target.name, added: additions.length };
          },
        },
        { signal: lifecycle.signal },
      ),
    ).catch(() => undefined);
    return () => lifecycle.abort();
  }, [decks]);

  const currentDeck = decks.find((deck) => deck.id === activeDeck);
  const currentLanguage = currentDeck ? deckLanguage(currentDeck) : 'en';
  const otherDueDeck = decks.find(
    (deck) => deck.id !== activeDeck && countDue(deck) > 0,
  );
  const dueInOtherDecks = decks
    .filter((deck) => deck.id !== activeDeck)
    .reduce((total, deck) => total + countDue(deck), 0);
  const studyWords = studyQueue.flatMap((wordId) => {
    const word = currentDeck?.words.find((item) => item.id === wordId);
    return word ? [word] : [];
  });
  const currentWord = studyWords[0];
  const currentWordFallback =
    currentWord && currentLanguage === 'en'
      ? fallbackWordMetadata(currentWord.term)
      : undefined;
  const currentWordPhonetic =
    currentWord?.phonetic || currentWordFallback?.phonetic;
  const currentWordPartOfSpeech =
    currentWord?.partOfSpeech || currentWordFallback?.partOfSpeech;
  const todaySeconds = progress.dailySeconds[dateKey()] ?? 0;
  const todayMinutes = Math.floor(todaySeconds / 60);
  const completedAllDueToday = progress.completedDays?.[dateKey()] === true;
  const todayCompleted = completedStudyDay(progress, dateKey());
  const todayPercent = todayCompleted
    ? 100
    : Math.min(100, Math.round((todaySeconds / 600) * 100));
  const progressDates = new Set([
    ...Object.keys(progress.dailySeconds),
    ...Object.keys(progress.completedDays ?? {}),
  ]);
  const successfulDays = [...progressDates].filter((key) =>
    completedStudyDay(progress, key),
  ).length;
  const currentStreak = calculateStreak(progress);
  const scheduledRetries =
    currentDeck?.words.filter(
      (word) => word.level === 'new' && word.nextReview > new Date().getTime(),
    ) ?? [];
  const nextRetryMinutes = scheduledRetries.length
    ? Math.max(
        1,
        Math.ceil(
          (Math.min(...scheduledRetries.map((word) => word.nextReview)) -
            new Date().getTime()) /
            60000,
        ),
      )
    : 0;
  const now = clockNow;
  const allWords = decks.flatMap((deck) =>
    deck.words.map((word) => ({
      ...word,
      deckId: deck.id,
      deckName: deck.name,
      deckEmoji: deck.emoji,
    })),
  );
  const totalWords = allWords.length;
  const dueList = allWords.filter((word) => word.nextReview <= now);
  const dueWords = dueList.length;
  const dueNewWords = dueList.filter((word) => word.level === 'new').length;
  const dueReviewWords = dueList.filter((word) => word.level !== 'new').length;
  const knownWords = allWords.filter((word) => word.level === 'known').length;
  const addedWords = allWords.filter((word) => word.createdAt !== undefined);
  const recentWords = [...addedWords]
    .sort((a, b) => (b.createdAt ?? 0) - (a.createdAt ?? 0))
    .slice(0, 6);
  const firstDueDeck = decks.find((deck) => countDue(deck, now) > 0);

  useEffect(() => {
    setAudioStatus('idle');
    if (!currentWord || !autoSpeakEnabledRef.current) return;
    autoSpeakTimerRef.current = window.setTimeout(
      () => speak(currentWord.term, currentLanguage),
      250,
    );
    return () => {
      if (autoSpeakTimerRef.current !== null)
        window.clearTimeout(autoSpeakTimerRef.current);
    };
  }, [activeDeck, currentWord?.id]);

  useEffect(() => {
    if (!user || !currentWord) return;
    const interval = window.setInterval(() => {
      if (document.visibilityState !== 'visible') return;
      const today = dateKey();
      setProgress((current) => ({
        ...current,
        dailySeconds: {
          ...current.dailySeconds,
          [today]: (current.dailySeconds[today] ?? 0) + 1,
        },
      }));
    }, 1000);
    return () => window.clearInterval(interval);
  }, [user?.uid, currentWord?.id]);

  useEffect(() => {
    if (activeDeck === null) return;
    const frame = window.requestAnimationFrame(() => {
      studyAreaRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    });
    return () => window.cancelAnimationFrame(frame);
  }, [activeDeck]);

  useEffect(() => {
    if (activeDeck === null) return;
    setClockNow(new Date().getTime());
    const interval = window.setInterval(() => setClockNow(new Date().getTime()), 30000);
    return () => window.clearInterval(interval);
  }, [activeDeck]);

  useEffect(() => {
    setShowRetryOptions(false);
    setShowLearningOptions(false);
    setShowKnownOptions(false);
  }, [currentWord?.id]);

  useEffect(() => {
    if (
      !currentDeck ||
      !currentWord ||
      currentLanguage !== 'en' ||
      (currentWord.phonetic && currentWord.partOfSpeech)
    )
      return;
    let cancelled = false;
    const fallback = fallbackWordMetadata(currentWord.term);
    if (fallback) {
      setDecks((all) =>
        all.map((deck) =>
          deck.id === currentDeck.id
            ? {
                ...deck,
                words: deck.words.map((word) =>
                  word.id === currentWord.id
                    ? {
                        ...word,
                        phonetic: word.phonetic || fallback.phonetic,
                        partOfSpeech:
                          word.partOfSpeech || fallback.partOfSpeech,
                      }
                    : word,
                ),
              }
            : deck,
        ),
      );
    }
    void fetchJson(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(currentWord.term.trim())}`,
      4500,
    ).then((payload) => {
      const entry = Array.isArray(payload) ? payload[0] : null;
      const phonetic =
        entry?.phonetic ??
        entry?.phonetics?.find((item: { text?: string }) => item.text)?.text ??
        '';
      const partOfSpeech = entry?.meanings?.[0]?.partOfSpeech ?? '';
      if (cancelled || (!phonetic && !partOfSpeech)) return;
      setDecks((all) =>
        all.map((deck) =>
          deck.id === currentDeck.id
            ? {
                ...deck,
                words: deck.words.map((word) =>
                  word.id === currentWord.id
                    ? {
                        ...word,
                        phonetic: word.phonetic || phonetic,
                        partOfSpeech: word.partOfSpeech || partOfSpeech,
                      }
                    : word,
                ),
              }
            : deck,
        ),
      );
    });
    return () => {
      cancelled = true;
    };
  }, [currentDeck?.id, currentLanguage, currentWord?.id]);

  async function loadTranslationExercise(word: Word, previousId?: number) {
    const isChinese = currentLanguage === 'zh';
    setExerciseStatus('loading');
    setTranslationExercise(null);
    setTranslationAnswer('');
    setShowTranslationAnswer(false);
    try {
      const params = new URLSearchParams({
        lang: isChinese ? 'cmn' : 'eng',
        q: word.term.trim(),
        word_count: isChinese ? '2-45' : '4-18',
        limit: '30',
        sort: 'relevance',
      });
      const payload = (await fetchJson(
        `https://api.tatoeba.org/v1/sentences?${params.toString()}`,
        6000,
      )) as { data?: { id: number; text: string; license?: string }[] } | null;
      const exactTerm = new RegExp(
        `(^|[^\\p{L}])${escapeRegExp(word.term.trim())}($|[^\\p{L}])`,
        'iu',
      );
      const tatoebaChoices = (payload?.data ?? []).filter((item) =>
        isChinese
          ? item.text.includes(word.term.trim())
          : exactTerm.test(item.text),
      );
      const dictionaryPayload =
        isChinese || tatoebaChoices.length
          ? null
          : ((await fetchJson(
              `https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(word.term.trim())}`,
              4500,
            )) as
              | { meanings?: { definitions?: { example?: string }[] }[] }[]
              | null);
      const dictionaryChoices = (dictionaryPayload ?? []).flatMap(
        (entry) =>
          entry.meanings
            ?.flatMap((meaning) => meaning.definitions ?? [])
            .flatMap((definition, index) =>
              definition.example && exactTerm.test(definition.example)
                ? [{ id: -(index + 1), text: definition.example }]
                : [],
            ) ?? [],
      );
      const choices = tatoebaChoices.length
        ? tatoebaChoices
        : dictionaryChoices;
      const alternatives = choices.filter((item) => item.id !== previousId);
      const selected = (alternatives.length ? alternatives : choices)[
        Math.floor(
          Math.random() *
            (alternatives.length ? alternatives.length : choices.length),
        )
      ];
      if (!selected) {
        setExerciseStatus('empty');
        return;
      }
      const translationPayload = (await fetchJson(
        `https://api.mymemory.translated.net/get?${new URLSearchParams({ q: selected.text, langpair: isChinese ? 'zh-CN|vi' : 'en|vi', mt: '1' }).toString()}`,
        7000,
      )) as { responseData?: { translatedText?: string } } | null;
      const translation =
        translationPayload?.responseData?.translatedText?.trim();
      if (!translation || /^MYMEMORY WARNING/i.test(translation))
        throw new Error('Không dịch được câu ví dụ.');
      setTranslationExercise({
        id: selected.id,
        sentence: selected.text,
        translation,
        source: tatoebaChoices.length ? 'Tatoeba' : 'Free Dictionary API',
        license: 'license' in selected ? selected.license : undefined,
      });
      setExerciseStatus('ready');
    } catch {
      setExerciseStatus('error');
    }
  }

  useEffect(() => {
    if (!currentWord) {
      setTranslationExercise(null);
      setExerciseStatus('idle');
      return;
    }
    void loadTranslationExercise(currentWord);
  }, [currentWord?.id, currentLanguage]);

  useEffect(() => {
    if (!currentDeck || !scheduledRetries.length) return;
    const nextReview = Math.min(
      ...scheduledRetries.map((word) => word.nextReview),
    );
    const timeout = window.setTimeout(
      () => {
        const dueIds = currentDeck.words
          .filter(
            (word) => word.level === 'new' && word.nextReview <= new Date().getTime(),
          )
          .map((word) => word.id);
        setStudyQueue((queue) => [
          ...queue,
          ...dueIds.filter((wordId) => !queue.includes(wordId)),
        ]);
      },
      Math.max(0, nextReview - new Date().getTime()) + 250,
    );
    return () => window.clearTimeout(timeout);
  }, [currentDeck?.words, scheduledRetries.length]);

  function speak(text: string, language: Language = 'en') {
    const cleanText = text.trim();
    if (!cleanText) return;
    if (autoSpeakTimerRef.current !== null) {
      window.clearTimeout(autoSpeakTimerRef.current);
      autoSpeakTimerRef.current = null;
    }
    if (!('speechSynthesis' in window)) {
      setAudioStatus('error');
      return;
    }
    speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(cleanText);
    const voicePrefix = language === 'zh' ? 'zh' : 'en';
    utterance.lang = language === 'zh' ? 'zh-CN' : 'en-US';
    utterance.rate = language === 'zh' ? 0.8 : 0.86;
    const preferredVoice = speechSynthesis
      .getVoices()
      .find((voice) => voice.lang.toLowerCase().startsWith(voicePrefix));
    if (preferredVoice) utterance.voice = preferredVoice;
    setAudioStatus('loading');
    utterance.onstart = () => setAudioStatus('playing');
    utterance.onend = () => setAudioStatus('idle');
    utterance.onerror = () => setAudioStatus('error');
    speechSynthesis.speak(utterance);
  }

  function playAnswerSound(result: 'again' | 'known') {
    try {
      const context = new AudioContext();
      const notes = result === 'known' ? [523, 659, 784] : [392, 330];
      const duration = result === 'known' ? 0.14 : 0.2;
      notes.forEach((frequency, index) => {
        const oscillator = context.createOscillator();
        const gain = context.createGain();
        const start = context.currentTime + 0.02 + index * duration;
        oscillator.type = 'triangle';
        oscillator.frequency.value = frequency;
        gain.gain.setValueAtTime(0.0001, start);
        gain.gain.exponentialRampToValueAtTime(0.14, start + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
        oscillator.connect(gain);
        gain.connect(context.destination);
        oscillator.start(start);
        oscillator.stop(start + duration);
      });
      void context.resume().catch(() => undefined);
      window.setTimeout(() => void context.close(), 1200);
    } catch {
      /* Audio is optional when the browser does not support it. */
    }
  }

  function chooseAgain() {
    if (!showRetryOptions) {
      playAnswerSound('again');
      setShowTease(true);
      if (teaseTimerRef.current !== null)
        window.clearTimeout(teaseTimerRef.current);
      teaseTimerRef.current = window.setTimeout(
        () => setShowTease(false),
        3200,
      );
    }
    setShowRetryOptions((visible) => !visible);
    setShowLearningOptions(false);
    setShowKnownOptions(false);
  }

  function chooseLearning() {
    setShowLearningOptions((visible) => !visible);
    setShowRetryOptions(false);
    setShowKnownOptions(false);
  }

  function chooseKnown() {
    setShowKnownOptions((visible) => !visible);
    setShowRetryOptions(false);
    setShowLearningOptions(false);
  }

  async function signInGoogle() {
    setAuthError('');
    if (window.location.hostname.endsWith('chatgpt.site')) {
      const payload = window.btoa(
        unescape(encodeURIComponent(JSON.stringify(decks))),
      );
      window.location.href = `https://wordnest-english-vocab.web.app/#migration=${encodeURIComponent(payload)}`;
      return;
    }
    setSyncStatus('loading');
    try {
      await signInWithRedirect(auth, googleProvider);
    } catch (error) {
      setAuthError(
        (error as { code?: string })?.code === 'auth/unauthorized-domain'
          ? 'Tên miền này chưa được Firebase cho phép đăng nhập.'
          : 'Không thể mở trang đăng nhập Google. Vui lòng thử lại.',
      );
      setSyncStatus('error');
    }
  }

  async function signOutGoogle() {
    if (saveTimerRef.current) window.clearTimeout(saveTimerRef.current);
    await signOut(auth);
    localStorage.removeItem('wordnest-decks');
    localStorage.removeItem('wordnest-progress');
    localStorage.removeItem('wordnest-life');
    setDecks([]);
    setProgress(emptyProgress);
    setLifeData(defaultLifeData);
    setActiveDeck(null);
    window.location.hash = 'home';
    setStudyQueue([]);
    setRevealed(false);
    setMigrationNotice('');
    setAuthError('');
    setCloudReady(false);
    setSyncStatus('local');
  }
  function rateWord(level: Level, delayOverride?: number) {
    if (!currentDeck || !currentWord) return;
    if (level === 'known') playAnswerSound('known');
    const delay =
      delayOverride ??
      (level === 'new' ? 0 : level === 'learning' ? DAY : DAY * 7);
    const remainingDue = decks.reduce(
      (total, deck) =>
        total +
        deck.words.filter(
          (word) =>
            !(deck.id === currentDeck.id && word.id === currentWord.id) &&
            word.nextReview <= new Date().getTime(),
        ).length,
      0,
    );
    setDecks((all) =>
      all.map((deck) =>
        deck.id === currentDeck.id
          ? {
              ...deck,
              words: deck.words.map((word) =>
                word.id === currentWord.id
                  ? { ...word, level, nextReview: new Date().getTime() + delay }
                  : word,
              ),
            }
          : deck,
      ),
    );
    if (remainingDue === 0) {
      const today = dateKey();
      setProgress((current) => ({
        ...current,
        completedDays: { ...(current.completedDays ?? {}), [today]: true },
      }));
    }
    setRevealed(false);
    setShowRetryOptions(false);
    setShowLearningOptions(false);
    setShowKnownOptions(false);
    setStudyQueue((queue) =>
      queue.filter((wordId) => wordId !== currentWord.id),
    );
  }
  function addWord(value: {
    term: string;
    meaning: string;
    example: string;
    phonetic?: string;
    partOfSpeech?: string;
  }) {
    if (!currentDeck) return 'Không tìm thấy bộ từ hiện tại.';
    const term = value.term.trim();
    const meaning = value.meaning.trim();
    if (!term || !meaning)
      return `Vui lòng nhập từ ${languageName(currentLanguage).toLowerCase()} và nghĩa tiếng Việt.`;
    if (
      currentDeck.words.some(
        (word) => normalizeTerm(word.term) === normalizeTerm(term),
      )
    )
      return `Từ “${term}” đã có trong bộ từ này.`;
    const createdAt = new Date().getTime();
    const word: Word = {
      id: createdAt,
      term,
      meaning,
      example: value.example.trim(),
      phonetic: value.phonetic,
      partOfSpeech: value.partOfSpeech,
      level: 'new',
      nextReview: createdAt,
      createdAt,
    };
    autoSpeakEnabledRef.current = true;
    setDecks((all) =>
      all.map((deck) =>
        deck.id === currentDeck.id
          ? { ...deck, words: [...deck.words, word] }
          : deck,
      ),
    );
    setStudyQueue((queue) => [...queue, word.id]);
    setShowAddWord(false);
    return null;
  }
  function addDeck(form: FormData) {
    const name = String(form.get('name') || '').trim();
    if (!name) return;
    const language: Language = form.get('language') === 'zh' ? 'zh' : 'en';
    const deck: Deck = {
      id: new Date().getTime(),
      name,
      emoji: String(form.get('emoji') || (language === 'zh' ? '🇨🇳' : '📚')),
      description: String(
        form.get('description') || 'Bộ từ vựng của riêng bạn',
      ),
      language,
      words: [],
    };
    setDecks((all) => [...all, deck]);
    setShowAddDeck(false);
    setStudyQueue([]);
    setActiveDeck(deck.id);
  }

  function openDeck(deckId: number) {
    const deck = decks.find((item) => item.id === deckId);
    autoSpeakEnabledRef.current = true;
    setStudyQueue(
      deck?.words
        .filter((word) => word.nextReview <= new Date().getTime())
        .map((word) => word.id) ?? [],
    );
    setRevealed(false);
    window.location.hash = 'library';
    setActiveDeck(deckId);
  }

  function deleteCurrentDeck() {
    if (!currentDeck) return;
    setDecks((all) => all.filter((deck) => deck.id !== currentDeck.id));
    setStudyQueue([]);
    setActiveDeck(null);
    setShowDeleteDeck(false);
    setRevealed(false);
  }

  function reviewWordNow(wordId: number) {
    if (!currentDeck) return;
    autoSpeakEnabledRef.current = true;
    const reviewStartedAt = new Date().getTime();
    setDecks((all) =>
      all.map((deck) =>
        deck.id === currentDeck.id
          ? {
              ...deck,
              words: deck.words.map((word) =>
                word.id === wordId
                  ? { ...word, nextReview: reviewStartedAt }
                  : word,
              ),
            }
          : deck,
      ),
    );
    setStudyQueue((queue) => [
      wordId,
      ...queue.filter((queuedId) => queuedId !== wordId),
    ]);
    setRevealed(false);
    setShowRetryOptions(false);
  }

  if (activeDeck && currentDeck) {
    return (
      <main className="min-h-screen bg-[#f5f0e6] text-[#213a34]">
        <Header
          compact
          user={user}
          authReady={authReady}
          syncStatus={syncStatus}
          onSignIn={signInGoogle}
          onSignOut={signOutGoogle}
          onHome={() => {
            setActiveDeck(null);
            setStudyQueue([]);
            setRevealed(false);
            window.location.hash = 'library';
          }}
        />
        <div className="mx-auto max-w-6xl px-5 pb-20 pt-9 md:px-8">
          <button
            onClick={() => {
              setActiveDeck(null);
              setStudyQueue([]);
              window.location.hash = 'library';
            }}
            className="mb-6 flex items-center gap-2 text-sm font-extrabold text-[#64756f]"
          >
            <ArrowLeft size={17} /> Tất cả bộ từ
          </button>
          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <div className="mb-3 text-5xl">{currentDeck.emoji}</div>
              <p className="eyebrow">Bộ từ của bạn</p>
              <h1 className="font-display text-4xl font-black tracking-tight md:text-5xl">
                {currentDeck.name}
              </h1>
              <p className="mt-2 text-[#667871]">
                {languageBadge(currentLanguage)} · {currentDeck.description} ·{' '}
                {currentDeck.words.length} từ
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button
                onClick={() => setShowDeleteDeck(true)}
                variant="outline"
                className="h-11 rounded-full border-2 border-[#c65342]/30 bg-transparent px-5 font-bold text-[#b84b3c] hover:bg-[#fbe5df]"
              >
                <Trash2 /> Xóa bộ từ
              </Button>
              <Button
                onClick={() => setShowAddWord(true)}
                className="h-11 rounded-full bg-[#eb6a52] px-5 font-bold text-white hover:bg-[#d85a45]"
              >
                <Plus /> Thêm từ vựng
              </Button>
            </div>
          </div>

          <div
            ref={studyAreaRef}
            className="study-area grid scroll-mt-5 gap-7 lg:grid-cols-[1.2fr_.8fr]"
          >
            <section className="study-panel">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-sm font-extrabold uppercase tracking-wider text-[#eb6a52]">
                    Ôn tập hôm nay
                  </p>
                  <p className="mt-1 text-sm text-[#71817b]">
                    {studyWords.length
                      ? `${studyWords.length} từ trong bộ này${dueInOtherDecks ? ` · ${dueInOtherDecks} từ ở bộ khác` : ''}`
                      : otherDueDeck
                        ? `Bộ này đã xong · còn ${dueInOtherDecks} từ ở bộ khác`
                        : 'Bạn đã hoàn thành!'}
                  </p>
                </div>
                <span className="rounded-full bg-[#f8d467] px-3 py-1 text-sm font-black">
                  {studyWords.length} còn lại
                </span>
              </div>
              {currentWord ? (
                <div className="flashcard">
                  <button
                    onClick={() => speak(currentWord.term, currentLanguage)}
                    className={`sound ${audioStatus === 'loading' ? 'loading' : ''}`}
                    aria-label={
                      audioStatus === 'loading'
                        ? 'Đang tải phát âm'
                        : 'Nghe phát âm'
                    }
                    disabled={audioStatus === 'loading'}
                  >
                    {audioStatus === 'loading' ? (
                      <LoaderCircle className="animate-spin" size={21} />
                    ) : (
                      <Volume2 size={21} />
                    )}
                  </button>
                  <div className="flex min-h-[285px] flex-col items-center justify-center text-center">
                    <span className="mb-3 text-xs font-black uppercase tracking-[.18em] text-[#8a9691]">
                      Từ {languageName(currentLanguage).toLowerCase()}
                    </span>
                    <h2 className="font-display text-5xl font-black tracking-tight sm:text-6xl">
                      {currentWord.term}
                    </h2>
                    {(currentWordPhonetic || currentWordPartOfSpeech) && (
                      <div className="word-metadata">
                        {currentWordPartOfSpeech && (
                          <span className="word-type-badge">
                            {partOfSpeechLabel(currentWordPartOfSpeech)}
                          </span>
                        )}
                        {currentWordPhonetic && (
                          <span className="word-phonetic">
                            /{currentWordPhonetic.replaceAll('/', '')}/
                          </span>
                        )}
                      </div>
                    )}
                    <div className="translation-exercise">
                      <div className="exercise-heading">
                        <span>✍️ Luyện dịch câu</span>
                        {translationExercise && (
                          <button
                            type="button"
                            className="habit-delete"
                            onClick={() =>
                              void loadTranslationExercise(
                                currentWord,
                                translationExercise.id,
                              )
                            }
                            disabled={exerciseStatus === 'loading'}
                          >
                            <RotateCcw size={14} /> Câu khác
                          </button>
                        )}
                      </div>
                      {exerciseStatus === 'loading' && (
                        <p className="exercise-note">
                          <LoaderCircle className="animate-spin" size={15} />{' '}
                          Đang tìm một câu có từ này…
                        </p>
                      )}
                      {exerciseStatus === 'ready' && translationExercise && (
                        <>
                          <p className="exercise-sentence">
                            “
                            {translationExercise.sentence
                              .split(/(\s+)/)
                              .map((piece, index) => {
                                const selected = piece.replace(
                                  /^\P{L}+|\P{L}+$/gu,
                                  '',
                                );
                                return selected ? (
                                  <button
                                    type="button"
                                    key={`${piece}-${index}`}
                                    className="sentence-word"
                                    title={`Nhấp đúp để thêm “${selected}”`}
                                    onDoubleClick={() => {
                                      setPrefillWord(selected);
                                      setShowAddWord(true);
                                    }}
                                  >
                                    {piece}
                                  </button>
                                ) : (
                                  piece
                                );
                              })}
                            ”
                          </p>
                          <p className="sentence-hint">
                            Nhấp đúp vào một từ để thêm vào bộ từ.
                          </p>
                          <textarea
                            value={translationAnswer}
                            onChange={(event) =>
                              setTranslationAnswer(event.target.value)
                            }
                            placeholder="Viết bản dịch tiếng Việt của bạn ở đây…"
                            aria-label="Bản dịch tiếng Việt của bạn"
                          />
                          <div className="exercise-actions">
                            <button
                              type="button"
                              onClick={() =>
                                setShowTranslationAnswer((shown) => !shown)
                              }
                            >
                              {showTranslationAnswer
                                ? 'Ẩn đáp án'
                                : 'Xem đáp án'}
                            </button>
                            <button
                              type="button"
                              onClick={() =>
                                speak(translationExercise.sentence)
                              }
                            >
                              <Volume2 size={15} /> Nghe câu
                            </button>
                          </div>
                          {showTranslationAnswer && (
                            <p className="exercise-answer">
                              <b>Đáp án tham khảo:</b>{' '}
                              {translationExercise.translation}
                            </p>
                          )}
                          <small>
                            Nguồn câu: {translationExercise.source}
                            {translationExercise.license
                              ? ` · ${translationExercise.license}`
                              : ''}
                          </small>
                        </>
                      )}
                      {exerciseStatus === 'empty' && (
                        <p className="exercise-note">
                          Chưa tìm thấy câu phù hợp có bản dịch tiếng Việt cho
                          từ này.
                        </p>
                      )}
                      {exerciseStatus === 'error' && (
                        <p className="exercise-note">
                          Không tải được câu luyện dịch. Hãy kiểm tra kết nối
                          rồi thử thẻ khác.
                        </p>
                      )}
                    </div>
                    {revealed ? (
                      <div className="mt-7 animate-in fade-in">
                        <p className="text-2xl font-extrabold text-[#eb6a52]">
                          {currentWord.meaning}
                        </p>
                        {currentWord.example && (
                          <p className="mt-3 rounded-xl bg-[#f5f0e6] px-5 py-3 text-[#5b6d66]">
                            “{currentWord.example}”
                          </p>
                        )}
                      </div>
                    ) : (
                      <Button
                        onClick={() => setRevealed(true)}
                        variant="outline"
                        className="mt-8 h-11 rounded-full border-2 border-[#213a34]/20 bg-transparent px-6 font-bold"
                      >
                        Xem nghĩa
                      </Button>
                    )}
                  </div>
                  {audioStatus === 'loading' && (
                    <p className="sound-status" role="status">
                      <LoaderCircle className="animate-spin" size={14} /> Đang
                      chuẩn bị phát âm…
                    </p>
                  )}
                  {audioStatus === 'error' && (
                    <p className="sound-status error" role="status">
                      Chưa tải được âm thanh. Hãy bấm thử lại.
                    </p>
                  )}
                  {revealed && (
                    <div className="border-t-2 border-dashed border-[#213a34]/10 pt-5">
                      <p className="mb-3 text-center text-xs font-extrabold uppercase tracking-widest text-[#71817b]">
                        Bạn nhớ từ này thế nào?
                      </p>
                      <div className="grid grid-cols-3 gap-2">
                        <div className="retry-choice">
                          <button onClick={chooseAgain} className="rate again">
                            <RotateCcw /> Chưa nhớ<small>Chọn thời gian</small>
                          </button>
                          {showRetryOptions && (
                            <div
                              className="retry-options"
                              role="menu"
                              aria-label="Chọn thời gian học lại"
                            >
                              {[1, 5, 10, 30].map((minutes) => (
                                <button
                                  key={minutes}
                                  type="button"
                                  role="menuitem"
                                  onClick={() =>
                                    rateWord('new', minutes * 60000)
                                  }
                                >
                                  <Clock3 size={15} />
                                  {minutes} phút
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                        <div className="retry-choice">
                          <button
                            onClick={chooseLearning}
                            className="rate learning"
                          >
                            <Brain /> Hơi nhớ<small>Chọn thời gian</small>
                          </button>
                          {showLearningOptions && (
                            <div
                              className="retry-options learning-options"
                              role="menu"
                              aria-label="Chọn thời gian ôn lại"
                            >
                              {[
                                { label: '3 giờ', delay: 3 * 60 * 60 * 1000 },
                                { label: '6 giờ', delay: 6 * 60 * 60 * 1000 },
                                { label: '12 giờ', delay: 12 * 60 * 60 * 1000 },
                                { label: '1 ngày', delay: DAY },
                                { label: '3 ngày', delay: DAY * 3 },
                              ].map((option) => (
                                <button
                                  key={option.label}
                                  type="button"
                                  role="menuitem"
                                  onClick={() =>
                                    rateWord('learning', option.delay)
                                  }
                                >
                                  <Clock3 size={15} />
                                  {option.label}
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                        <div className="retry-choice">
                          <button onClick={chooseKnown} className="rate known">
                            <Check /> Đã thuộc<small>Chọn thời gian</small>
                          </button>
                          {showKnownOptions && (
                            <div
                              className="retry-options known-options"
                              role="menu"
                              aria-label="Chọn thời gian ôn lại"
                            >
                              {[
                                { label: '7 ngày', delay: DAY * 7 },
                                { label: '14 ngày', delay: DAY * 14 },
                              ].map((option) => (
                                <button
                                  key={option.label}
                                  type="button"
                                  role="menuitem"
                                  onClick={() =>
                                    rateWord('known', option.delay)
                                  }
                                >
                                  <CalendarCheck size={15} />
                                  {option.label}
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="empty-state">
                  <div className="text-6xl">
                    {scheduledRetries.length ? '⏳' : '🎉'}
                  </div>
                  <h2 className="font-display mt-4 text-3xl font-black">
                    {scheduledRetries.length
                      ? 'Đã xong lượt hiện tại!'
                      : otherDueDeck
                        ? 'Xong bộ này!'
                        : 'Xong bài hôm nay!'}
                  </h2>
                  <p>
                    {scheduledRetries.length
                      ? `${scheduledRetries.length} từ sẽ quay lại sau khoảng ${nextRetryMinutes} phút.`
                      : otherDueDeck
                        ? `Bạn còn ${dueInOtherDecks} từ đến hạn trong các bộ khác.`
                        : 'Hãy quay lại khi đến lịch ôn tiếp theo.'}
                  </p>
                  {!scheduledRetries.length && otherDueDeck && (
                    <Button
                      onClick={() => openDeck(otherDueDeck.id)}
                      className="mt-5 h-11 rounded-full bg-[#213a34] px-6 font-bold text-white"
                    >
                      Học tiếp {countDue(otherDueDeck)} từ · {otherDueDeck.name}{' '}
                      <ArrowRight />
                    </Button>
                  )}
                </div>
              )}
            </section>

            <aside className="word-list">
              <div className="mb-5 flex items-center justify-between">
                <h2 className="font-display text-2xl font-black">Tất cả từ</h2>
                <span className="text-right text-sm font-bold text-[#71817b]">
                  <small className="answer-hidden-label">
                    Lịch ôn tiếp theo
                  </small>
                  {currentDeck.words.length} từ
                </span>
              </div>
              <div className="word-scroll space-y-2">
                {currentDeck.words.length ? (
                  currentDeck.words.map((word) => (
                    <div className="word-row" key={word.id}>
                      <span className={`level-dot ${word.level}`} />
                      <div className="min-w-0 flex-1">
                        <b className="block truncate">{word.term}</b>
                        <span
                          className={`review-countdown ${word.nextReview <= now ? 'due' : ''}`}
                        >
                          {reviewCountdown(word.nextReview, now)}
                        </span>
                      </div>
                      <span className="level-label">
                        {word.level === 'known'
                          ? 'Đã thuộc'
                          : word.level === 'learning'
                            ? 'Đang học'
                            : 'Từ mới'}
                      </span>
                      <button
                        type="button"
                        aria-label={`Ôn lại ${word.term} ngay`}
                        title="Hủy lịch chờ và ôn từ này ngay"
                        onClick={() => reviewWordNow(word.id)}
                        className="review-now-button"
                      >
                        <RotateCcw size={14} />
                        <span>Ôn lại</span>
                      </button>
                      <button
                        aria-label={`Xóa ${word.term}`}
                        onClick={() => {
                          setStudyQueue((queue) =>
                            queue.filter((wordId) => wordId !== word.id),
                          );
                          setDecks((all) =>
                            all.map((deck) =>
                              deck.id === currentDeck.id
                                ? {
                                    ...deck,
                                    words: deck.words.filter(
                                      (item) => item.id !== word.id,
                                    ),
                                  }
                                : deck,
                            ),
                          );
                        }}
                        className="delete-button"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  ))
                ) : (
                  <div className="rounded-2xl bg-[#f5f0e6] p-8 text-center text-sm text-[#71817b]">
                    Chưa có từ nào. Hãy thêm từ đầu tiên!
                  </div>
                )}
              </div>
            </aside>
          </div>
        </div>
        {showAddWord && (
          <AddWordModal
            key={prefillWord || 'new-word'}
            initialTerm={prefillWord}
            language={currentLanguage}
            onClose={() => {
              setShowAddWord(false);
              setPrefillWord('');
            }}
            onSave={addWord}
            onSpeak={(text) => speak(text, currentLanguage)}
            audioStatus={audioStatus}
          />
        )}
        {showTease && (
          <div className="tease-toast" role="status">
            <span aria-hidden="true">😤</span>
            <span>Vãi lìn học bao lần rồi còn chưa nhớ nữa!</span>
          </div>
        )}
        {showDeleteDeck && (
          <Modal
            title="Xóa bộ từ này?"
            onClose={() => setShowDeleteDeck(false)}
          >
            <div className="space-y-5">
              <div className="rounded-2xl bg-[#fbe5df] p-4 text-sm leading-6 text-[#7d4138]">
                <b className="block text-base text-[#b84b3c]">
                  {currentDeck.name}
                </b>
                Bộ từ này có {currentDeck.words.length} từ. Sau khi xóa, dữ liệu
                của bộ này không thể khôi phục.
              </div>
              <div className="grid grid-cols-2 gap-3">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setShowDeleteDeck(false)}
                  className="h-11 rounded-xl border-2 font-bold"
                >
                  Giữ lại
                </Button>
                <Button
                  type="button"
                  onClick={deleteCurrentDeck}
                  className="h-11 rounded-xl bg-[#c65342] font-bold text-white hover:bg-[#ad4335]"
                >
                  <Trash2 /> Xóa vĩnh viễn
                </Button>
              </div>
            </div>
          </Modal>
        )}
      </main>
    );
  }

  const filtered = decks.filter((deck) =>
    deck.name.toLowerCase().includes(search.toLowerCase()),
  );
  return (
    <main className="min-h-screen bg-[#f5f0e6] text-[#213a34]">
      <Header
        user={user}
        authReady={authReady}
        syncStatus={syncStatus}
        onSignIn={signInGoogle}
        onSignOut={signOutGoogle}
        onHome={() => window.location.hash = 'home'}
        onLibrary={() => window.location.hash = 'library'}
        onLife={() => window.location.hash = 'life'}
        onAbout={() => window.location.hash = 'about'}
      />
      {migrationNotice && (
        <div className="migration-notice" role="status">
          {migrationNotice}
        </div>
      )}
      {authError && (
        <div className="auth-error" role="alert">
          {authError}
        </div>
      )}
      {page === 'home' && (
        <>
          <section
            id="review"
            className="learning-overview scroll-mt-20"
            aria-label="Việc học hôm nay"
          >
            <div className="mx-auto max-w-6xl px-5 py-6 md:px-8">
              <div className="overview-grid">
                <div className="study-alert">
                  <span className="alert-icon">
                    <BellRing />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="alert-label">Cần học hôm nay</p>
                    <h2>
                      {dueWords > 0
                        ? `${dueWords} từ đang chờ bạn`
                        : 'Bạn đã hoàn thành hôm nay!'}
                    </h2>
                    <p>
                      {dueWords > 0
                        ? `${dueNewWords} từ mới · ${dueReviewWords} từ đến hạn ôn`
                        : 'Hãy thêm từ mới hoặc quay lại vào ngày mai.'}
                    </p>
                  </div>
                  {firstDueDeck && (
                    <Button
                      onClick={() => openDeck(firstDueDeck.id)}
                      className="study-now h-11 rounded-full bg-[#f8d467] px-5 font-black text-[#213a34] hover:bg-[#f3c943]"
                    >
                      Học ngay <ArrowRight />
                    </Button>
                  )}
                </div>
                <div className="recent-panel">
                  <div className="recent-heading">
                    <div>
                      <span>Từ bạn vừa thêm</span>
                      <b>{addedWords.length} từ đã thêm</b>
                    </div>
                    {recentWords.length > 0 && (
                      <button onClick={() => window.location.hash = 'library'}>
                        Xem tất cả bộ từ <ChevronRight />
                      </button>
                    )}
                  </div>
                  {recentWords.length > 0 ? (
                    <div className="recent-words">
                      {recentWords.map((word) => (
                        <button
                          key={`${word.deckId}-${word.id}`}
                          onClick={() => openDeck(word.deckId)}
                        >
                          <span>{word.deckEmoji}</span>
                          <span>
                            <b>{word.term}</b>
                            <small>{word.meaning}</small>
                          </span>
                        </button>
                      ))}
                    </div>
                  ) : (
                    <div className="recent-empty">
                      <Plus size={18} /> Từ mới bạn thêm sẽ xuất hiện ở đây.
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
          <section id="progress" className="progress-section scroll-mt-20">
            <div className="mx-auto max-w-6xl px-5 py-12 md:px-8">
              <div className="progress-heading">
                <div>
                  <p className="eyebrow">Tiến độ học</p>
                  <h1 className="font-display text-4xl font-black tracking-tight">
                    Mục tiêu 10 phút mỗi ngày
                  </h1>
                  <p>
                    Thời gian được tính khi bạn đang học một thẻ từ và mở trang
                    trên màn hình.
                  </p>
                </div>
                {decks.length === 0 && (
                  <Button
                    onClick={() => setShowAddDeck(true)}
                    className="h-11 rounded-full bg-[#213a34] px-5 font-bold text-white"
                  >
                    <FolderPlus /> Tạo bộ từ đầu tiên
                  </Button>
                )}
              </div>
              <div className="progress-grid">
                <article className="today-progress">
                  <div className="progress-icon">
                    <Timer />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="progress-label">
                      <b>Hôm nay</b>
                      <span>
                        {todayCompleted
                          ? 'Đã điểm danh ✓'
                          : `${Math.min(todayMinutes, 10)}/10 phút`}
                      </span>
                    </div>
                    <div
                      className="progress-track"
                      aria-label={`Đã hoàn thành ${todayPercent}% mục tiêu hôm nay`}
                    >
                      <span style={{ width: `${todayPercent}%` }} />
                    </div>
                    <p className="today-time">
                      ⏱ Đã học{' '}
                      <b>
                        {todayMinutes} phút {todaySeconds % 60} giây
                      </b>{' '}
                      hôm nay
                    </p>
                    <p>
                      {!user
                        ? 'Đăng nhập Google để lưu tiến độ.'
                        : completedAllDueToday
                          ? 'Đã học hết các từ cần học hôm nay ✓'
                          : todaySeconds >= 600
                            ? 'Đã học đủ 10 phút hôm nay ✓'
                            : `Học thêm ${Math.max(1, Math.ceil((600 - todaySeconds) / 60))} phút hoặc học hết từ đến hạn để điểm danh.`}
                    </p>
                  </div>
                </article>
                <article className="progress-stat">
                  <span>
                    <Flame />
                  </span>
                  <div>
                    <b>{currentStreak}</b>
                    <small>Ngày liên tiếp</small>
                  </div>
                </article>
                <article className="progress-stat">
                  <span>
                    <CalendarCheck />
                  </span>
                  <div>
                    <b>{successfulDays}</b>
                    <small>Ngày học thành công</small>
                  </div>
                </article>
              </div>
            </div>
          </section>

          <section className="bg-[#213a34] px-5 py-12 text-white md:px-8">
            <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 md:grid-cols-4">
              <Stat icon={<BookOpen />} value={totalWords} label="Tổng số từ" />
              <Stat
                icon={<Clock3 />}
                value={dueWords}
                label="Cần học hôm nay"
              />
              <Stat icon={<Check />} value={knownWords} label="Từ đã thuộc" />
              <Stat
                icon={<FolderPlus />}
                value={decks.length}
                label="Bộ từ của bạn"
              />
            </div>
          </section>
        </>
      )}

      {page === 'library' && (
        <>
          <section
            id="decks"
            className="mx-auto max-w-6xl scroll-mt-24 px-5 py-16 md:px-8"
          >
            <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <p className="eyebrow">Thư viện của bạn</p>
                <h2 className="font-display text-4xl font-black tracking-tight">
                  Các bộ từ vựng
                </h2>
              </div>
              <div className="search-box">
                <Search size={18} />
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Tìm bộ từ..."
                  aria-label="Tìm bộ từ"
                />
              </div>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((deck, index) => (
                <button
                  className={`deck-card color-${index % 3}`}
                  onClick={() => openDeck(deck.id)}
                  key={deck.id}
                >
                  <div className="flex items-start justify-between">
                    <span className="deck-icon">{deck.emoji}</span>
                    <span className="deck-language">
                      {languageBadge(deckLanguage(deck))}
                    </span>
                  </div>
                  <h3 className="font-display mt-6 text-2xl font-black text-[#213a34]">
                    {deck.name}
                  </h3>
                  <p className="mt-1 text-sm text-[#697a74]">
                    {deck.description}
                  </p>
                  <div className="mt-6 flex items-center justify-between border-t border-[#213a34]/10 pt-4 text-sm font-extrabold">
                    <span>{deck.words.length} từ</span>
                    <span
                      className={
                        countDue(deck) ? 'text-[#eb6a52]' : 'text-[#43936d]'
                      }
                    >
                      {countDue(deck)
                        ? `${countDue(deck)} cần ôn`
                        : 'Đã xong ✓'}
                    </span>
                  </div>
                </button>
              ))}
              <button className="new-deck" onClick={() => setShowAddDeck(true)}>
                <span className="grid size-12 place-items-center rounded-full bg-[#213a34] text-white">
                  <Plus />
                </span>
                <b className="mt-4">Tạo bộ từ mới</b>
                <span className="text-sm text-[#71817b]">
                  Tiếng Anh hoặc tiếng Trung
                </span>
              </button>
            </div>
          </section>
        </>
      )}

      {page === 'life' && (
        <LifeDashboard data={lifeData} onChange={setLifeData} />
      )}

      {page === 'about' && (
        <>
          <section
            id="about"
            className="about-section scroll-mt-20 px-5 py-16 md:px-8"
            aria-label="Giới thiệu WordNest"
          >
            <div className="about-card mx-auto max-w-6xl">
              <div className="about-profile">
                <div className="creator-photo-wrap">
                  <img
                    src="/tung-pham.jpg"
                    alt="Tùng, người làm WordNest"
                    className="creator-photo"
                  />
                </div>
                <div className="about-copy">
                  <p className="eyebrow">Một lời chào nhỏ</p>
                  <h2 className="font-display text-4xl font-black tracking-tight">
                    WordNest được làm bởi Tùng
                  </h2>
                  <p>
                    Mình tạo WordNest để việc học từ vựng bớt áp lực hơn: thêm
                    từ nhanh, ôn đúng lúc và mỗi ngày tiến một chút.
                  </p>
                  <p>
                    Nếu ứng dụng giúp bạn học đều hơn, vậy là mình đã vui rồi.
                    Cảm ơn bạn đã dành thời gian đồng hành cùng WordNest.
                  </p>
                </div>
              </div>
              <aside className="donate-card">
                <div>
                  <span className="donate-badge">☕ Ủng hộ WordNest</span>
                  <h3 className="font-display">Một ly cà phê tiếp sức</h3>
                  <p>
                    Không bắt buộc đâu — nếu bạn muốn góp một chút để mình tiếp
                    tục cải thiện ứng dụng, mình thật sự biết ơn.
                  </p>
                </div>
                <div className="donate-qr-frame">
                  <img
                    src="/donate-qr.jpg"
                    alt="Mã QR ủng hộ WordNest qua Techcombank"
                    className="donate-qr"
                  />
                </div>
                <small>Techcombank · PHAM VAN TUNG</small>
              </aside>
            </div>
          </section>
        </>
      )}

      <footer className="border-t border-[#213a34]/10 px-5 py-7 text-sm text-[#687a73] md:px-8">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-3 sm:flex-row">
          <b className="font-display text-[#213a34]">WordNest</b>
          <span>
            {user
              ? 'Dữ liệu đang được đồng bộ theo tài khoản Google.'
              : 'Đăng nhập Google để đồng bộ dữ liệu giữa các thiết bị.'}
          </span>
          <span>Học ít · Nhớ lâu</span>
        </div>
      </footer>
      {showAddDeck && (
        <Modal title="Tạo bộ từ mới" onClose={() => setShowAddDeck(false)}>
          <form action={addDeck} className="space-y-4">
            <label className="block text-sm font-extrabold">
              Ngôn ngữ
              <select name="language" defaultValue="en" className="form-select">
                <option value="en">🇬🇧 Tiếng Anh</option>
                <option value="zh">🇨🇳 Tiếng Trung Quốc</option>
              </select>
            </label>
            <Field
              name="name"
              label="Tên bộ từ"
              placeholder="Ví dụ: Giao tiếp hằng ngày"
              autoFocus
            />
            <Field
              name="emoji"
              label="Biểu tượng (không bắt buộc)"
              placeholder="📚 hoặc 🇨🇳"
            />
            <Field
              name="description"
              label="Mô tả ngắn"
              placeholder="Những từ mình cần học tuần này"
            />
            <Button
              type="submit"
              className="h-11 w-full rounded-xl bg-[#213a34] font-bold"
            >
              Tạo bộ từ
            </Button>
          </form>
        </Modal>
      )}
    </main>
  );
}

function LifeDashboard({
  data,
  onChange,
}: {
  data: LifeData;
  onChange: React.Dispatch<React.SetStateAction<LifeData>>;
}) {
  const [lifeView, setLifeView] = useState<
    'planner' | 'habits' | 'spending' | 'income' | 'goals' | 'history' | 'notes'
  >('planner');
  const today = dateKey();
  const currentMonth = today.slice(0, 7);
  const [spendingMonth, setSpendingMonth] = useState(currentMonth);
  const [incomeMonth, setIncomeMonth] = useState(currentMonth);

  const [editingNoteId, setEditingNoteId] = useState<string | null>(null);
  const [noteTitle, setNoteTitle] = useState('');
  const [noteContent, setNoteContent] = useState('');
  const [showNoteForm, setShowNoteForm] = useState(false);
  const monthExpenses = data.expenses.filter((expense) =>
    expense.date.startsWith(spendingMonth),
  );
  const spent = monthExpenses.reduce((n, x) => n + x.amount, 0);
  const legacyBudgets = (data.budgets ?? []).filter(
    (budget) =>
      budget.id !== 'general' &&
      budget.name.trim().toLocaleLowerCase('vi-VN') !== 'ngân sách chung',
  );
  const budgets =
    data.monthlyBudgets?.[spendingMonth] ??
    (spendingMonth === currentMonth ? legacyBudgets : []);
  const totalBudget = budgets.reduce(
    (total, budget) => total + budget.limit,
    0,
  );
  const remainingBudget = totalBudget - spent;
  const spentPercent = totalBudget ? (spent / totalBudget) * 100 : 0;
  const budgetSpent = (budget: Budget) =>
    data.expenses
      .filter(
        (expense) =>
          expense.date.startsWith(spendingMonth) &&
          expense.budgetId === budget.id,
      )
      .reduce((total, expense) => total + expense.amount, 0);
  const money = (n: number) => `${new Intl.NumberFormat('vi-VN').format(n)}đ`;
  const update = (fn: (current: LifeData) => LifeData) => onChange(fn);
  const updateBudgets = (nextBudgets: Budget[]) =>
    update((current) => ({
      ...current,
      budgets: spendingMonth === currentMonth ? nextBudgets : current.budgets,
      monthlyBudgets: {
        ...current.monthlyBudgets,
        [spendingMonth]: nextBudgets,
      },
    }));
  const moveSpendingMonth = (offset: number) => {
    const [year, monthIndex] = spendingMonth.split('-').map(Number);
    const next = new Date(year, monthIndex - 1 + offset, 1);
    setSpendingMonth(
      `${next.getFullYear()}-${String(next.getMonth() + 1).padStart(2, '0')}`,
    );
  };
  const spendingMonthLabel = new Intl.DateTimeFormat('vi-VN', {
    month: 'long',
    year: 'numeric',
  }).format(new Date(`${spendingMonth}-01T12:00:00`));
  const incomeMonthExpenses = data.incomes.filter((income) =>
    income.date.startsWith(incomeMonth),
  );
  const totalIncome = incomeMonthExpenses.reduce(
    (total, income) => total + income.amount,
    0,
  );
  const largestIncome = incomeMonthExpenses.reduce(
    (largest, income) => Math.max(largest, income.amount),
    0,
  );
  const moveIncomeMonth = (offset: number) => {
    const [year, monthIndex] = incomeMonth.split('-').map(Number);
    const next = new Date(year, monthIndex - 1 + offset, 1);
    setIncomeMonth(
      `${next.getFullYear()}-${String(next.getMonth() + 1).padStart(2, '0')}`,
    );
  };
  const incomeMonthLabel = new Intl.DateTimeFormat('vi-VN', {
    month: 'long',
    year: 'numeric',
  }).format(new Date(`${incomeMonth}-01T12:00:00`));
  const tomorrow = dateKey(new Date(new Date().getTime() + 86400000));
  const dateLabel = (date: string) =>
    new Intl.DateTimeFormat('vi-VN', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(new Date(`${date}T12:00:00`));
  const [planDate, setPlanDate] = useState(today);
  const [habitMonthOffset, setHabitMonthOffset] = useState(0);
  const [newHabitName, setNewHabitName] = useState('');
  const [newHabitEmoji, setNewHabitEmoji] = useState('✨');
  const [editingHabitId, setEditingHabitId] = useState<string | null>(null);
  const habitMonth = new Date(
    new Date().getFullYear(),
    new Date().getMonth() + habitMonthOffset,
    1,
  );
  const habitDays = Array.from(
    {
      length: new Date(
        habitMonth.getFullYear(),
        habitMonth.getMonth() + 1,
        0,
      ).getDate(),
    },
    (_, index) =>
      new Date(habitMonth.getFullYear(), habitMonth.getMonth(), index + 1),
  );
  const habitMonthLabel = new Intl.DateTimeFormat('vi-VN', {
    month: 'long',
    year: 'numeric',
  }).format(habitMonth);
  const plannedTasks = data.dailyTasks[planDate] ?? [];
  const historyDates = Array.from({ length: 7 }, (_, index) =>
    dateKey(new Date(new Date().getTime() - index * 86400000)),
  );
  const planHistory = historyDates.flatMap((date) =>
    (data.dailyTasks[date] ?? [])
      .filter((task) => task.text.trim())
      .map((task) => ({ ...task, date })),
  );
  const weeklyDone = data.weeklyGoals.filter((goal) => goal.done).length;
  const monthlyDone = data.monthlyGoals.filter((goal) => goal.done).length;
  const totalGoals = data.weeklyGoals.length + data.monthlyGoals.length;
  const completedGoals = weeklyDone + monthlyDone;
  const goalProgress = totalGoals
    ? Math.round((completedGoals / totalGoals) * 100)
    : 0;
  const updateTasks = (date: string, tasks: LifeTask[]) =>
    update((current) => ({
      ...current,
      dailyTasks: { ...current.dailyTasks, [date]: tasks },
    }));
  const taskEditor = (
    tasks: LifeTask[],
    save: (next: LifeTask[]) => void,
    placeholder: string,
  ) => (
    <div className="task-editor">
      {tasks.map((task) => (
        <div
          className={`task-edit-row ${task.done ? 'done' : ''}`}
          key={task.id}
        >
          <button
            type="button"
            className="task-toggle"
            aria-label={
              task.done ? 'Đánh dấu chưa hoàn thành' : 'Đánh dấu hoàn thành'
            }
            onClick={() =>
              save(
                tasks.map((item) =>
                  item.id === task.id ? { ...item, done: !item.done } : item,
                ),
              )
            }
          >
            {task.done && <Check size={15} />}
          </button>
          <input
            value={task.text}
            placeholder={placeholder}
            onChange={(event) =>
              save(
                tasks.map((item) =>
                  item.id === task.id
                    ? { ...item, text: event.target.value }
                    : item,
                ),
              )
            }
          />
          <button
            type="button"
            className="task-remove"
            aria-label="Xóa việc"
            onClick={() => save(tasks.filter((item) => item.id !== task.id))}
          >
            ×
          </button>
        </div>
      ))}
      <button
        type="button"
        className="add-task"
        onClick={() =>
          save([...tasks, { id: String(new Date().getTime()), text: '', done: false }])
        }
      >
        <Plus size={16} /> Thêm việc
      </button>
    </div>
  );
  return (
    <section className="life-page px-5 py-10 md:px-8">
      <div className="life-shell mx-auto max-w-6xl">
        <aside className="life-nav" aria-label="Điều hướng Đời sống">
          <p>Đời sống</p>
          {[
            ['planner', '🎯 Kế hoạch'],
            ['habits', '🌱 Thói quen'],
            ['spending', '💳 Chi tiêu'],
            ['income', '💰 Thu nhập'],
            ['goals', '🏁 Mục tiêu'],
            ['notes', '📝 Ghi chú'],
          ].map(([view, label]) => (
            <button
              type="button"
              key={view}
              onClick={() => setLifeView(view as typeof lifeView)}
              className={lifeView === view ? 'active' : ''}
            >
              {label}
            </button>
          ))}
        </aside>
        <div className="life-content" data-life-view={lifeView}>
          <div className="life-grid">
            <div className="space-y-5">
              <article id="life-planner" className="life-card life-anchor">
                <p className="eyebrow">Lên kế hoạch nhẹ nhàng</p>
                <h2>Việc cần làm</h2>
                <div className="plan-tabs">
                  <button
                    type="button"
                    className={planDate === today ? 'active' : ''}
                    onClick={() => setPlanDate(today)}
                  >
                    Hôm nay ·{' '}
                    {new Intl.DateTimeFormat('vi-VN', {
                      day: '2-digit',
                      month: '2-digit',
                    }).format(new Date(`${today}T12:00:00`))}
                  </button>
                  <button
                    type="button"
                    className={planDate === tomorrow ? 'active' : ''}
                    onClick={() => setPlanDate(tomorrow)}
                  >
                    Ngày mai ·{' '}
                    {new Intl.DateTimeFormat('vi-VN', {
                      day: '2-digit',
                      month: '2-digit',
                    }).format(new Date(`${tomorrow}T12:00:00`))}
                  </button>
                </div>
                <p className="plan-date">{dateLabel(planDate)}</p>
                <p className="task-help">
                  {planDate === today
                    ? 'Chọn những việc thật sự cần cho hôm nay.'
                    : 'Chuẩn bị trước một ngày mai nhẹ đầu hơn.'}
                </p>
                {taskEditor(
                  plannedTasks,
                  (next) => updateTasks(planDate, next),
                  'Việc mới cần làm',
                )}
              </article>
              <article id="life-habits" className="life-card life-anchor">
                <div className="habit-month-heading">
                  <div>
                    <p className="eyebrow">
                      Tích từng ngày, thấy cả hành trình
                    </p>
                    <h2>Thói quen</h2>
                  </div>
                  <div className="habit-month-nav">
                    <button
                      type="button"
                      onClick={() => setHabitMonthOffset((value) => value - 1)}
                    >
                      ‹
                    </button>
                    <b>{habitMonthLabel}</b>
                    <button
                      type="button"
                      onClick={() => setHabitMonthOffset((value) => value + 1)}
                    >
                      ›
                    </button>
                  </div>
                </div>
                <form
                  className="habit-create"
                  action={() => {
                    const name = newHabitName.trim();
                    if (!name) return;
                    update((current) => ({
                      ...current,
                      habits: [
                        ...current.habits,
                        {
                          id: String(new Date().getTime()),
                          name,
                          emoji: newHabitEmoji,
                          doneDates: [],
                        },
                      ],
                    }));
                    setNewHabitName('');
                  }}
                >
                  <input
                    value={newHabitName}
                    onChange={(event) => setNewHabitName(event.target.value)}
                    placeholder="Ví dụ: Ngủ trưa 15 phút"
                    aria-label="Tên thói quen mới"
                  />
                  <select
                    value={newHabitEmoji}
                    onChange={(event) => setNewHabitEmoji(event.target.value)}
                    aria-label="Biểu tượng thói quen"
                  >
                    {[
                      '✨',
                      '💤',
                      '💧',
                      '🏃',
                      '📚',
                      '🧘',
                      '🥗',
                      '🧹',
                      '🎸',
                      '💻',
                    ].map((emoji) => (
                      <option key={emoji} value={emoji}>
                        {emoji}
                      </option>
                    ))}
                  </select>
                  <button type="submit">
                    <Plus size={16} /> Thêm thói quen
                  </button>
                </form>
                <div className="habit-calendar">
                  <div
                    className="habit-calendar-inner"
                    style={{
                      gridTemplateColumns: `clamp(280px, 34vw, 360px) repeat(${habitDays.length}, 30px)`,
                    }}
                  >
                    <div className="habit-day-label">Tên thói quen</div>
                    {habitDays.map((day) => (
                      <span
                        className={dateKey(day) === today ? 'today' : ''}
                        key={dateKey(day)}
                        title={dateLabel(dateKey(day))}
                      >
                        {day.getDate()}
                      </span>
                    ))}
                    {data.habits.map((habit) => (
                      <Fragment key={habit.id}>
                        <div className="habit-name">
                          <select
                            value={habit.emoji}
                            onChange={(event) =>
                              update((current) => ({
                                ...current,
                                habits: current.habits.map((item) =>
                                  item.id === habit.id
                                    ? { ...item, emoji: event.target.value }
                                    : item,
                                ),
                              }))
                            }
                            aria-label={`Biểu tượng cho ${habit.name || 'thói quen'}`}
                          >
                            {[
                              '✨',
                              '💤',
                              '💧',
                              '🏃',
                              '📚',
                              '🧘',
                              '🥗',
                              '🧹',
                              '🎸',
                              '💻',
                            ].map((emoji) => (
                              <option key={emoji} value={emoji}>
                                {emoji}
                              </option>
                            ))}
                          </select>
                          <span className="habit-count">
                            {
                              habitDays.filter((day) =>
                                habit.doneDates.includes(dateKey(day)),
                              ).length
                            }{' '}
                            ngày
                          </span>
                          {editingHabitId === habit.id ? (
                            <input
                              autoFocus
                              value={habit.name}
                              placeholder="Nhập tên thói quen"
                              aria-label="Tên thói quen"
                              onBlur={() => setEditingHabitId(null)}
                              onChange={(event) =>
                                update((current) => ({
                                  ...current,
                                  habits: current.habits.map((item) =>
                                    item.id === habit.id
                                      ? { ...item, name: event.target.value }
                                      : item,
                                  ),
                                }))
                              }
                            />
                          ) : (
                            <button
                              type="button"
                              className="habit-name-display"
                              onClick={() => setEditingHabitId(habit.id)}
                            >
                              {habit.name || 'Đặt tên thói quen'}
                            </button>
                          )}
                          <button
                            type="button"
                            className="habit-delete"
                            aria-label="Xóa thói quen"
                            onClick={() =>
                              update((current) => ({
                                ...current,
                                habits: current.habits.filter(
                                  (item) => item.id !== habit.id,
                                ),
                              }))
                            }
                          >
                            ×
                          </button>
                        </div>
                        {habitDays.map((day) => {
                          const key = dateKey(day);
                          const active = habit.doneDates.includes(key);
                          return (
                            <button
                              type="button"
                              key={key}
                              aria-label={`${habit.name || 'Thói quen'} ngày ${key}`}
                              className={`habit-day ${active ? 'done' : ''}`}
                              onClick={() =>
                                update((current) => ({
                                  ...current,
                                  habits: current.habits.map((item) =>
                                    item.id === habit.id
                                      ? {
                                          ...item,
                                          doneDates: item.doneDates.includes(
                                            key,
                                          )
                                            ? item.doneDates.filter(
                                                (date) => date !== key,
                                              )
                                            : [...item.doneDates, key],
                                        }
                                      : item,
                                  ),
                                }))
                              }
                            >
                              {active && <Check size={12} />}
                            </button>
                          );
                        })}
                      </Fragment>
                    ))}
                  </div>
                </div>
              </article>
              <article
                id="life-goals"
                className="life-card life-anchor goals-dashboard"
              >
                <header className="goals-heading">
                  <div>
                    <p className="eyebrow">Đi xa bằng từng bước nhỏ</p>
                    <h2>Mục tiêu tuần & tháng</h2>
                    <p>
                      Chọn điều thật sự quan trọng, theo dõi tiến độ và tận
                      hưởng cảm giác hoàn thành.
                    </p>
                  </div>
                  <span>🏁 {goalProgress}% hoàn thành</span>
                </header>

                <div className="goals-overview">
                  <article>
                    <span>7 ngày</span>
                    <b>
                      {weeklyDone}/{data.weeklyGoals.length}
                    </b>
                    <small>mục tiêu tuần đã xong</small>
                  </article>
                  <article>
                    <span>Tháng này</span>
                    <b>
                      {monthlyDone}/{data.monthlyGoals.length}
                    </b>
                    <small>mục tiêu tháng đã xong</small>
                  </article>
                  <article className="goal-total-progress">
                    <div>
                      <span>Tiến độ tổng</span>
                      <b>
                        {completedGoals}/{totalGoals}
                      </b>
                    </div>
                    <div className="goal-progress-track">
                      <span style={{ width: `${goalProgress}%` }} />
                    </div>
                    <small>
                      {totalGoals
                        ? `${totalGoals - completedGoals} mục tiêu đang chờ bạn`
                        : 'Thêm mục tiêu đầu tiên để bắt đầu'}
                    </small>
                  </article>
                </div>

                <div className="goals-board">
                  <section className="goal-column weekly">
                    <header>
                      <span>🎯</span>
                      <div>
                        <p>Mục tiêu tuần</p>
                        <h3>Điều cần hoàn thành trong 7 ngày</h3>
                      </div>
                    </header>
                    {taskEditor(
                      data.weeklyGoals,
                      (next) =>
                        update((current) => ({
                          ...current,
                          weeklyGoals: next,
                        })),
                      'Ví dụ: Hoàn thành 3 buổi học',
                    )}
                  </section>
                  <section className="goal-column monthly">
                    <header>
                      <span>🗓️</span>
                      <div>
                        <p>Mục tiêu tháng</p>
                        <h3>Cột mốc lớn hơn trong tháng này</h3>
                      </div>
                    </header>
                    {taskEditor(
                      data.monthlyGoals,
                      (next) =>
                        update((current) => ({
                          ...current,
                          monthlyGoals: next,
                        })),
                      'Ví dụ: Đọc xong một cuốn sách',
                    )}
                  </section>
                </div>
                <footer className="goals-note">
                  <Sparkles size={18} />
                  <p>
                    <b>Không cần quá nhiều mục tiêu.</b> Một vài điều quan trọng
                    và làm đến cùng đã là một tháng rất đáng tự hào.
                  </p>
                </footer>
              </article>
              <article id="life-history" className="life-card life-anchor">
                <p className="eyebrow">Tất cả việc · 7 ngày gần nhất</p>
                <h2>Lịch sử kế hoạch</h2>
                <div className="history-list">
                  {planHistory.map((task) => (
                    <article
                      className={`history-day ${task.done ? 'completed' : 'incomplete'}`}
                      key={`${task.date}-${task.id}`}
                    >
                      <span className="history-check">
                        {task.done ? <Check size={15} /> : '!'}
                      </span>
                      <div>
                        <b>{task.text}</b>
                        <small>{dateLabel(task.date)}</small>
                      </div>
                      <em>{task.done ? 'Đã xong' : 'Chưa xong'}</em>
                    </article>
                  ))}
                  {!planHistory.length && (
                    <p className="empty-life">
                      Chưa có việc nào trong 7 ngày gần nhất.
                    </p>
                  )}
                </div>
              </article>
              <article id="life-notes" className="life-card life-anchor">
                <div className="section-heading" style={{ marginBottom: '1rem' }}>
                  <p className="eyebrow">Ghi lại để không quên</p>
                  <h2>Ghi chú</h2>
                  <p>
                    Ghi chép lại những điều quan trọng, ý tưởng hay hoặc đơn giản là những gì bạn muốn lưu giữ.
                  </p>
                </div>
                {!showNoteForm && !editingNoteId ? (
                  <button
                    className="add-habit-btn"
                    style={{ marginBottom: '1rem', background: '#e9f2ed', color: '#213a34', fontWeight: 'bold', padding: '0.75rem 1rem', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', border: 'none', cursor: 'pointer' }}
                    onClick={() => {
                      setNoteTitle('');
                      setNoteContent('');
                      setEditingNoteId(null);
                      setShowNoteForm(true);
                    }}
                  >
                    + Tạo ghi chú mới
                  </button>
                ) : null}

                {showNoteForm || editingNoteId ? (
                  <div className="note-form" style={{ background: '#fff', padding: '1rem', borderRadius: '0.75rem', border: '1px solid rgba(33, 58, 52, 0.1)', marginBottom: '1rem' }}>
                    <input
                      type="text"
                      placeholder="Tiêu đề ghi chú..."
                      value={noteTitle}
                      onChange={(e) => setNoteTitle(e.target.value)}
                      style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #ccc', marginBottom: '1rem', fontWeight: 'bold', fontSize: '1.1rem' }}
                    />
                    <textarea
                      placeholder="Nội dung..."
                      value={noteContent}
                      onChange={(e) => setNoteContent(e.target.value)}
                      style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #ccc', minHeight: '150px', marginBottom: '1rem', resize: 'vertical' }}
                    />
                    <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'flex-end' }}>
                      <button
                        onClick={() => {
                          setShowNoteForm(false);
                          setEditingNoteId(null);
                        }}
                        style={{ padding: '0.5rem 1rem', borderRadius: '0.5rem', border: 'none', background: '#f0f0f0', color: '#666', cursor: 'pointer', fontWeight: 'bold' }}
                      >
                        Hủy
                      </button>
                      <button
                        onClick={() => {
                          if (!noteTitle.trim()) return;
                          if (editingNoteId) {
                            onChange((prev) => ({
                              ...prev,
                              notes: prev.notes.map(n => n.id === editingNoteId ? { ...n, title: noteTitle, content: noteContent, updatedAt: new Date().getTime() } : n)
                            }));
                          } else {
                            onChange((prev) => ({
                              ...prev,
                              notes: [{ id: new Date().getTime().toString(), title: noteTitle, content: noteContent, createdAt: new Date().getTime(), updatedAt: new Date().getTime() }, ...prev.notes]
                            }));
                          }
                          setShowNoteForm(false);
                          setEditingNoteId(null);
                        }}
                        style={{ padding: '0.5rem 1rem', borderRadius: '0.5rem', border: 'none', background: '#f8d467', color: '#213a34', cursor: 'pointer', fontWeight: 'bold' }}
                      >
                        Lưu ghi chú
                      </button>
                    </div>
                  </div>
                ) : null}

                <div className="notes-list" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
                  {data.notes.map((note) => (
                    <div key={note.id} className="note-item" style={{ background: '#fff', padding: '1rem', borderRadius: '0.75rem', border: '1px solid rgba(33, 58, 52, 0.1)', display: 'flex', flexDirection: 'column' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                        <h3 style={{ margin: 0, fontSize: '1.1rem', color: '#213a34', lineHeight: 1.4 }}>{note.title}</h3>
                        <div style={{ display: 'flex', gap: '0.25rem' }}>
                          <button
                            onClick={() => {
                              setNoteTitle(note.title);
                              setNoteContent(note.content);
                              setEditingNoteId(note.id);
                              setShowNoteForm(true);
                            }}
                            style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.1rem', opacity: 0.5 }}
                            title="Sửa"
                          >
                            ✎
                          </button>
                          <button
                            onClick={() => {
                              if (window.confirm('Bạn có chắc chắn muốn xóa ghi chú này?')) {
                                onChange((prev) => ({
                                  ...prev,
                                  notes: prev.notes.filter(n => n.id !== note.id)
                                }));
                              }
                            }}
                            style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.1rem', opacity: 0.5, color: 'red' }}
                            title="Xóa"
                          >
                            🗑
                          </button>
                        </div>
                      </div>
                      <p style={{ margin: 0, color: '#65766f', fontSize: '0.95rem', whiteSpace: 'pre-wrap', flex: 1, display: '-webkit-box', WebkitLineClamp: 4, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{note.content}</p>
                      <small style={{ marginTop: '1rem', color: '#999', fontSize: '0.8rem', display: 'block' }}>
                        {new Date(note.updatedAt).toLocaleDateString('vi-VN')} {new Date(note.updatedAt).toLocaleTimeString('vi-VN', {hour: '2-digit', minute:'2-digit'})}
                      </small>
                    </div>
                  ))}
                  {data.notes.length === 0 && !showNoteForm && (
                    <p style={{ color: '#999', fontStyle: 'italic', gridColumn: '1 / -1' }}>Chưa có ghi chú nào. Hãy tạo ghi chú đầu tiên nhé!</p>
                  )}
                </div>
              </article>
            </div>
            <aside className="spending-workspace">
              <header className="spending-heading">
                <div>
                  <p className="eyebrow">Dòng tiền theo tháng</p>
                  <h1>Chi tiêu dễ nhìn, dễ kiểm soát</h1>
                  <p>
                    Chia tiền theo từng ngân sách và ghi lại mỗi khoản ngay khi
                    phát sinh.
                  </p>
                </div>
                <div className="spending-month-picker">
                  <button
                    type="button"
                    aria-label="Xem tháng trước"
                    onClick={() => moveSpendingMonth(-1)}
                  >
                    <ArrowLeft size={16} />
                  </button>
                  <label>
                    <CalendarCheck size={17} />
                    <span>{spendingMonthLabel}</span>
                    <input
                      type="month"
                      value={spendingMonth}
                      max={currentMonth}
                      aria-label="Chọn tháng xem chi tiêu"
                      onChange={(event) => {
                        if (event.target.value)
                          setSpendingMonth(event.target.value);
                      }}
                    />
                  </label>
                  <button
                    type="button"
                    aria-label="Xem tháng sau"
                    disabled={spendingMonth >= currentMonth}
                    onClick={() => moveSpendingMonth(1)}
                  >
                    <ArrowRight size={16} />
                  </button>
                </div>
              </header>

              <section
                className="spending-overview"
                aria-label="Tổng quan chi tiêu"
              >
                <article>
                  <span className="overview-icon total">
                    <WalletCards size={20} />
                  </span>
                  <div>
                    <small>Tổng ngân sách</small>
                    <b>{money(totalBudget)}</b>
                  </div>
                </article>
                <article>
                  <span className="overview-icon spent">↗</span>
                  <div>
                    <small>Đã chi</small>
                    <b>{money(spent)}</b>
                  </div>
                </article>
                <article className={remainingBudget < 0 ? 'negative' : ''}>
                  <span className="overview-icon remaining">✓</span>
                  <div>
                    <small>{remainingBudget < 0 ? 'Đã vượt' : 'Còn lại'}</small>
                    <b>{money(Math.abs(remainingBudget))}</b>
                  </div>
                </article>
                <div className="overview-progress">
                  <div>
                    <span>Tiến độ tháng</span>
                    <b>{Math.round(spentPercent)}%</b>
                  </div>
                  <div className="budget-track">
                    <span
                      className={spentPercent >= 100 ? 'over' : ''}
                      style={{ width: `${Math.min(100, spentPercent)}%` }}
                    />
                  </div>
                </div>
              </section>

              <div className="spending-main-grid">
                <article
                  id="life-spending"
                  className="life-card life-anchor budget-panel"
                >
                  <div className="section-heading">
                    <div>
                      <p className="eyebrow">Các ngân sách</p>
                      <h2>Ngân sách của bạn</h2>
                    </div>
                    <small>{budgets.length} danh mục</small>
                  </div>
                  <div className="budget-list">
                    {budgets.map((budget) => {
                      const used = budgetSpent(budget);
                      const percent = budget.limit
                        ? (used / budget.limit) * 100
                        : 0;
                      const warning =
                        percent >= 100
                          ? 'over'
                          : percent >= 80
                            ? 'warning'
                            : '';
                      return (
                        <div
                          className={`budget-item ${warning}`}
                          key={budget.id}
                        >
                          <div className="budget-item-top">
                            <span className="budget-dot" aria-hidden="true" />
                            <input
                              value={budget.name}
                              aria-label="Tên ngân sách"
                              onChange={(event) =>
                                updateBudgets(
                                  budgets.map((item) =>
                                    item.id === budget.id
                                      ? { ...item, name: event.target.value }
                                      : item,
                                  ),
                                )
                              }
                            />
                            <button
                              type="button"
                              aria-label={`Xóa ngân sách ${budget.name}`}
                              onClick={() =>
                                updateBudgets(
                                  budgets.filter(
                                    (item) => item.id !== budget.id,
                                  ),
                                )
                              }
                            >
                              <Trash2 size={15} />
                            </button>
                          </div>
                          <div className="budget-amounts">
                            <div>
                              <small>Đã dùng</small>
                              <b>{money(used)}</b>
                            </div>
                            <label>
                              <span>Giới hạn</span>
                              <input
                                type="number"
                                min="0"
                                value={budget.limit}
                                aria-label={`Giới hạn ${budget.name}`}
                                onChange={(event) =>
                                  updateBudgets(
                                    budgets.map((item) =>
                                      item.id === budget.id
                                        ? {
                                            ...item,
                                            limit:
                                              Number(event.target.value) || 0,
                                          }
                                        : item,
                                    ),
                                  )
                                }
                              />
                            </label>
                          </div>
                          <div className="budget-progress-label">
                            <span>
                              {warning === 'over'
                                ? `Vượt ${money(used - budget.limit)}`
                                : `Còn ${money(Math.max(0, budget.limit - used))}`}
                            </span>
                            <b>{Math.round(percent)}%</b>
                          </div>
                          <div className="budget-track">
                            <span
                              style={{ width: `${Math.min(100, percent)}%` }}
                            />
                          </div>
                          {warning && (
                            <small className="budget-alert">
                              {warning === 'over'
                                ? 'Đã vượt giới hạn'
                                : 'Sắp chạm giới hạn'}
                            </small>
                          )}
                        </div>
                      );
                    })}
                    {!budgets.length && (
                      <div className="empty-budgets">
                        <WalletCards size={22} />
                        <div>
                          <b>Chưa có ngân sách nào</b>
                          <p>Tạo ngân sách đầu tiên để bắt đầu ghi chi tiêu.</p>
                        </div>
                      </div>
                    )}
                  </div>
                  <form
                    className="new-budget-form"
                    action={(form) => {
                      const rawName = form.get('name');
                      const name =
                        typeof rawName === 'string' ? rawName.trim() : '';
                      const limit = Number(form.get('limit'));
                      if (!name || !limit) return;
                      updateBudgets([
                        ...budgets,
                        { id: String(new Date().getTime()), name, limit },
                      ]);
                    }}
                  >
                    <label>
                      <span>Tên ngân sách</span>
                      <input
                        name="name"
                        placeholder="Ví dụ: Di chuyển"
                        required
                      />
                    </label>
                    <label>
                      <span>Giới hạn</span>
                      <input
                        name="limit"
                        type="number"
                        min="1000"
                        placeholder="0đ"
                        required
                      />
                    </label>
                    <button type="submit">
                      <Plus size={16} /> Thêm ngân sách
                    </button>
                  </form>
                </article>

                <article className="life-card quick-expense-panel">
                  <div className="section-heading">
                    <div>
                      <p className="eyebrow">Ghi nhanh</p>
                      <h2>Thêm khoản chi</h2>
                    </div>
                    <span className="receipt-mark">₫</span>
                  </div>
                  <p className="form-helper">
                    {spendingMonth !== currentMonth
                      ? `Đang xem lịch sử ${spendingMonthLabel}. Quay về tháng này để ghi chi.`
                      : budgets.length
                        ? 'Chỉ mất vài giây để dòng tiền luôn rõ ràng.'
                        : 'Bạn cần tạo ít nhất một ngân sách trước khi ghi chi.'}
                  </p>
                  <form
                    className="expense-form"
                    action={(form) => {
                      const amount = Number(form.get('amount'));
                      const rawBudgetId = form.get('budgetId');
                      const budgetId =
                        typeof rawBudgetId === 'string' ? rawBudgetId : '';
                      const rawNote = form.get('note');
                      const note = typeof rawNote === 'string' ? rawNote : '';
                      if (
                        amount > 0 &&
                        budgetId &&
                        spendingMonth === currentMonth
                      )
                        update((current) => ({
                          ...current,
                          expenses: [
                            {
                              id: new Date().getTime(),
                              amount,
                              category:
                                budgets.find((budget) => budget.id === budgetId)
                                  ?.name || 'Khác',
                              note,
                              date: today,
                              budgetId,
                            },
                            ...current.expenses,
                          ],
                        }));
                    }}
                  >
                    <label className="amount-field">
                      <span>Số tiền</span>
                      <div>
                        <input
                          name="amount"
                          type="number"
                          min="1000"
                          placeholder="0"
                          required
                        />
                        <b>đ</b>
                      </div>
                    </label>
                    <label>
                      <span>Chi từ ngân sách</span>
                      <select name="budgetId" required>
                        {!budgets.length && (
                          <option value="">Tạo ngân sách trước</option>
                        )}
                        {budgets.map((budget) => (
                          <option key={budget.id} value={budget.id}>
                            {budget.name}
                          </option>
                        ))}
                      </select>
                    </label>
                    <label>
                      <span>
                        Ghi chú <em>(không bắt buộc)</em>
                      </span>
                      <input name="note" placeholder="Ví dụ: Cà phê với bạn" />
                    </label>
                    <button
                      disabled={
                        !budgets.length || spendingMonth !== currentMonth
                      }
                    >
                      <Plus size={17} /> Lưu khoản chi
                    </button>
                  </form>
                  <div className="expense-tip">
                    <Sparkles size={17} />
                    <p>
                      <b>Mẹo nhỏ</b>
                      Ghi ngay sau khi chi để không bỏ sót nhé.
                    </p>
                  </div>
                </article>
              </div>

              <article className="life-card recent-expenses-panel">
                <div className="section-heading">
                  <div>
                    <p className="eyebrow">Gần đây</p>
                    <h2>Giao dịch trong tháng</h2>
                  </div>
                  {!!monthExpenses.length && (
                    <small>{monthExpenses.length} giao dịch</small>
                  )}
                </div>
                <div className="recent-total">
                  <div>
                    <span>Tổng đã chi {spendingMonthLabel}</span>
                    <small>{monthExpenses.length} khoản chi</small>
                  </div>
                  <b>{money(spent)}</b>
                </div>
                <div className="expense-list">
                  {monthExpenses.map((expense) => (
                    <div className="expense-item" key={expense.id}>
                      <span className="expense-category-icon">
                        {expense.category.slice(0, 1).toUpperCase()}
                      </span>
                      <div className="expense-description">
                        <b>{expense.note || expense.category}</b>
                        <small>
                          {expense.category} ·{' '}
                          {new Intl.DateTimeFormat('vi-VN', {
                            day: '2-digit',
                            month: '2-digit',
                          }).format(new Date(`${expense.date}T12:00:00`))}
                        </small>
                      </div>
                      <b className="expense-amount">−{money(expense.amount)}</b>
                      <button
                        type="button"
                        aria-label={`Xóa khoản chi ${expense.note || expense.category}`}
                        onClick={() =>
                          update((current) => ({
                            ...current,
                            expenses: current.expenses.filter(
                              (item) => item.id !== expense.id,
                            ),
                          }))
                        }
                      >
                        <Trash2 size={15} />
                        <span>Xóa</span>
                      </button>
                    </div>
                  ))}
                </div>
                {!monthExpenses.length && (
                  <div className="empty-expenses">
                    <WalletCards size={24} />
                    <b>Chưa có khoản chi nào</b>
                    <p>Khoản chi đầu tiên của bạn sẽ xuất hiện tại đây.</p>
                  </div>
                )}
              </article>
            </aside>

            <aside className="income-workspace">
              <header className="spending-heading">
                <div>
                  <p className="eyebrow">Thu nhập theo tháng</p>
                  <h1>Biết mình kiếm được bao nhiêu</h1>
                  <p>
                    Ghi lại từng nguồn thu để theo dõi dòng tiền vào rõ ràng
                    hơn.
                  </p>
                </div>
                <div className="spending-month-picker">
                  <button
                    type="button"
                    aria-label="Xem thu nhập tháng trước"
                    onClick={() => moveIncomeMonth(-1)}
                  >
                    <ArrowLeft size={16} />
                  </button>
                  <label>
                    <CalendarCheck size={17} />
                    <span>{incomeMonthLabel}</span>
                    <input
                      type="month"
                      value={incomeMonth}
                      max={currentMonth}
                      aria-label="Chọn tháng xem thu nhập"
                      onChange={(event) => {
                        if (event.target.value)
                          setIncomeMonth(event.target.value);
                      }}
                    />
                  </label>
                  <button
                    type="button"
                    aria-label="Xem thu nhập tháng sau"
                    disabled={incomeMonth >= currentMonth}
                    onClick={() => moveIncomeMonth(1)}
                  >
                    <ArrowRight size={16} />
                  </button>
                </div>
              </header>

              <section
                className="spending-overview income-overview"
                aria-label="Tổng quan thu nhập"
              >
                <article>
                  <span className="overview-icon total">₫</span>
                  <div>
                    <small>Tổng thu nhập</small>
                    <b>{money(totalIncome)}</b>
                  </div>
                </article>
                <article>
                  <span className="overview-icon remaining">+</span>
                  <div>
                    <small>Số khoản thu</small>
                    <b>{incomeMonthExpenses.length} khoản</b>
                  </div>
                </article>
                <article>
                  <span className="overview-icon income-high">↗</span>
                  <div>
                    <small>Khoản lớn nhất</small>
                    <b>{money(largestIncome)}</b>
                  </div>
                </article>
              </section>

              <div className="income-main-grid">
                <article className="life-card income-form-panel">
                  <div className="section-heading">
                    <div>
                      <p className="eyebrow">Ghi nhanh</p>
                      <h2>Thêm khoản thu</h2>
                    </div>
                    <span className="income-mark">＋</span>
                  </div>
                  <p className="form-helper">
                    {incomeMonth === currentMonth
                      ? 'Lương, thưởng, bán hàng hoặc bất kỳ nguồn thu nào.'
                      : `Đang xem lịch sử ${incomeMonthLabel}. Quay về tháng này để ghi thu.`}
                  </p>
                  <form
                    className="income-form"
                    action={(form) => {
                      const amount = Number(form.get('amount'));
                      const rawSource = form.get('source');
                      const source =
                        typeof rawSource === 'string' ? rawSource.trim() : '';
                      const rawNote = form.get('note');
                      const note = typeof rawNote === 'string' ? rawNote : '';
                      if (
                        amount <= 0 ||
                        !source ||
                        incomeMonth !== currentMonth
                      )
                        return;
                      update((current) => ({
                        ...current,
                        incomes: [
                          {
                            id: new Date().getTime(),
                            amount,
                            source,
                            note,
                            date: today,
                          },
                          ...current.incomes,
                        ],
                      }));
                    }}
                  >
                    <label>
                      <span>Số tiền</span>
                      <div className="income-amount-field">
                        <input
                          name="amount"
                          type="number"
                          min="1000"
                          placeholder="0"
                          required
                        />
                        <b>đ</b>
                      </div>
                    </label>
                    <label>
                      <span>Nguồn thu</span>
                      <input
                        name="source"
                        placeholder="Ví dụ: Lương, thưởng"
                        required
                      />
                    </label>
                    <label>
                      <span>
                        Ghi chú <em>(không bắt buộc)</em>
                      </span>
                      <input name="note" placeholder="Ví dụ: Lương tháng 9" />
                    </label>
                    <button disabled={incomeMonth !== currentMonth}>
                      <Plus size={17} /> Lưu khoản thu
                    </button>
                  </form>
                </article>

                <article className="life-card income-history-panel">
                  <div className="section-heading">
                    <div>
                      <p className="eyebrow">Lịch sử</p>
                      <h2>Thu nhập trong tháng</h2>
                    </div>
                    {!!incomeMonthExpenses.length && (
                      <small>{incomeMonthExpenses.length} khoản thu</small>
                    )}
                  </div>
                  <div className="income-total-row">
                    <span>Tổng thu {incomeMonthLabel}</span>
                    <b>+{money(totalIncome)}</b>
                  </div>
                  <div className="income-list">
                    {incomeMonthExpenses.map((income) => (
                      <div className="income-item" key={income.id}>
                        <span className="income-source-icon">
                          {income.source.slice(0, 1).toUpperCase()}
                        </span>
                        <div>
                          <b>{income.source}</b>
                          <small>
                            {income.note || 'Không ghi chú'} ·{' '}
                            {new Intl.DateTimeFormat('vi-VN', {
                              day: '2-digit',
                              month: '2-digit',
                            }).format(new Date(`${income.date}T12:00:00`))}
                          </small>
                        </div>
                        <b className="income-amount">+{money(income.amount)}</b>
                        <button
                          type="button"
                          aria-label={`Xóa khoản thu ${income.source}`}
                          onClick={() =>
                            update((current) => ({
                              ...current,
                              incomes: current.incomes.filter(
                                (item) => item.id !== income.id,
                              ),
                            }))
                          }
                        >
                          <Trash2 size={15} />
                          <span>Xóa</span>
                        </button>
                      </div>
                    ))}
                  </div>
                  {!incomeMonthExpenses.length && (
                    <div className="empty-expenses">
                      <WalletCards size={24} />
                      <b>Chưa có khoản thu nào</b>
                      <p>Khoản thu đầu tiên sẽ xuất hiện tại đây.</p>
                    </div>
                  )}
                </article>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}

function Header({
  compact,
  onHome,
  onLibrary,
  onLife,
  onAbout,
  user,
  authReady,
  syncStatus,
  onSignIn,
  onSignOut,
}: {
  compact?: boolean;
  onHome?: () => void;
  onLibrary?: () => void;
  onLife?: () => void;
  onAbout?: () => void;
  user: User | null;
  authReady: boolean;
  syncStatus: 'local' | 'loading' | 'saved' | 'error';
  onSignIn: () => void;
  onSignOut: () => void;
}) {
  const router = useRouter();

  return (
    <header className="relative z-20 border-b border-[#213a34]/10 bg-[#f5f0e6]/90 px-5 py-4 backdrop-blur md:px-8">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3">
        <button onClick={onHome} className="flex items-center gap-3">
          <span className="grid size-10 place-items-center rounded-xl bg-[#213a34] text-[#f8d467] shadow-[3px_3px_0_#eb6a52]">
            <BookOpen size={21} />
          </span>
          <span className="font-display text-xl font-black">
            Word<span className="text-[#eb6a52]">Nest</span>
          </span>
        </button>
        {!compact && (
          <nav className="order-3 flex w-full justify-center gap-1 border-t border-[#213a34]/10 pt-3 text-sm font-extrabold lg:order-none lg:w-auto lg:gap-3 lg:border-0 lg:pt-0">
            <button
              type="button"
              onClick={onHome}
              className="rounded-full px-3 py-1.5 hover:bg-[#e9f2ed]"
            >
              Trang chủ
            </button>
            <button
              type="button"
              onClick={onLibrary}
              className="rounded-full px-3 py-1.5 hover:bg-[#e9f2ed]"
            >
              Bộ từ
            </button>
            <button
              type="button"
              onClick={onLife}
              className="rounded-full bg-[#f8d467] px-3 py-1.5 hover:bg-[#f3c943]"
            >
              Đời sống
            </button>
            <button
              type="button"
              onClick={onAbout}
              className="rounded-full px-3 py-1.5 hover:bg-[#e9f2ed]"
            >
              Giới thiệu
            </button>
            <button
              type="button"
              onClick={() => router.push('/practice-test')}
              className="rounded-full px-3 py-1.5 hover:bg-[#e9f2ed] font-black text-[#213a34]"
            >
              Luyện Reading TOEIC
            </button>
            <button
              type="button"
              onClick={() => router.push('/listening-test')}
              className="rounded-full bg-[#e9f2ed] px-4 py-1.5 hover:bg-[#d5e5db] font-black text-[#213a34]"
            >
              Luyện Listening TOEIC
            </button>
          </nav>
        )}
        <div className="account-area">
          {user ? (
            <>
              <span className={`sync-state ${syncStatus}`}>
                <Cloud size={14} />
                {syncStatus === 'loading'
                  ? 'Đang lưu'
                  : syncStatus === 'error'
                    ? 'Lỗi đồng bộ'
                    : 'Đã đồng bộ'}
              </span>
              <span className="account-name">
                {user.photoURL && <img src={user.photoURL} alt="" />}
                <b>{user.displayName || user.email}</b>
              </span>
              <button
                onClick={onSignOut}
                className="account-button"
                aria-label="Đăng xuất Google"
              >
                <LogOut size={17} />
                <span>Đăng xuất</span>
              </button>
            </>
          ) : (
            <button
              onClick={onSignIn}
              disabled={!authReady}
              className="google-button"
            >
              <LogIn size={18} />
              {authReady ? 'Đăng nhập Google' : 'Đang tải…'}
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
function Stat({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string | number;
  label: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="stat-icon">{icon}</span>
      <div>
        <b className="font-display block text-3xl font-black text-[#f8d467]">
          {value}
        </b>
        <span className="text-xs font-bold text-white/55 sm:text-sm">
          {label}
        </span>
      </div>
    </div>
  );
}
function Modal({
  title,
  onClose,
  children,
}: {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="modal-backdrop" onMouseDown={onClose}>
      <div
        className="modal"
        onMouseDown={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <div className="mb-6 flex items-center justify-between">
          <h2 className="font-display text-2xl font-black">{title}</h2>
          <button
            onClick={onClose}
            className="grid size-9 place-items-center rounded-full bg-[#f5f0e6]"
            aria-label="Đóng"
          >
            <X size={19} />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
function Field({
  label,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <label className="block text-sm font-extrabold">
      {label}
      <input
        {...props}
        className="mt-2 h-11 w-full rounded-xl border-2 border-[#213a34]/12 bg-[#faf8f2] px-3 font-medium outline-none transition focus:border-[#eb6a52]"
      />
    </label>
  );
}

function AddWordModal({
  initialTerm = '',
  language,
  onClose,
  onSave,
  onSpeak,
  audioStatus,
}: {
  initialTerm?: string;
  language: Language;
  onClose: () => void;
  onSave: (word: {
    term: string;
    meaning: string;
    example: string;
    phonetic?: string;
    partOfSpeech?: string;
  }) => string | null;
  onSpeak: (text: string) => void;
  audioStatus: 'idle' | 'loading' | 'playing' | 'error';
}) {
  const [term, setTerm] = useState(initialTerm);
  const [meaning, setMeaning] = useState('');
  const [example, setExample] = useState('');
  const [phonetic, setPhonetic] = useState('');
  const [partOfSpeech, setPartOfSpeech] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [suggestionsLocked, setSuggestionsLocked] = useState(
    Boolean(initialTerm),
  );
  const [loadingSuggestions, setLoadingSuggestions] = useState(false);
  const [enriching, setEnriching] = useState(false);
  const [note, setNote] = useState(
    language === 'zh'
      ? 'Nhập từ tiếng Trung rồi bấm “Tự tìm nghĩa”.'
      : 'Gõ ít nhất 2 chữ để xem từ gợi ý.',
  );

  useEffect(() => {
    if (suggestionsLocked) {
      setSuggestions([]);
      setLoadingSuggestions(false);
      return;
    }
    if (language === 'zh') {
      setSuggestions([]);
      setLoadingSuggestions(false);
      return;
    }
    const query = term.trim().toLowerCase();
    if (query.length < 2) {
      setSuggestions([]);
      setLoadingSuggestions(false);
      return;
    }
    const controller = new AbortController();
    const timer = window.setTimeout(async () => {
      setLoadingSuggestions(true);
      try {
        const response = await fetch(
          `https://api.datamuse.com/sug?s=${encodeURIComponent(query)}&max=6`,
          { signal: controller.signal },
        );
        const data = (await response.json()) as { word: string }[];
        setSuggestions(data.map((item) => item.word));
      } catch {
        if (!controller.signal.aborted) setSuggestions([]);
      } finally {
        if (!controller.signal.aborted) setLoadingSuggestions(false);
      }
    }, 280);
    return () => {
      window.clearTimeout(timer);
      controller.abort();
    };
  }, [term, language, suggestionsLocked]);

  async function chooseWord(word: string) {
    const cleanWord = word.trim();
    if (!cleanWord) {
      setNote(`Vui lòng nhập từ ${languageName(language).toLowerCase()}.`);
      return;
    }
    setTerm(cleanWord);
    setSuggestionsLocked(true);
    setSuggestions([]);
    setEnriching(true);
    setNote(
      language === 'zh'
        ? 'Đang dịch nghĩa tiếng Việt…'
        : 'Đang tìm nghĩa, phiên âm và ví dụ…',
    );
    const sourceLanguage = language === 'zh' ? 'zh-CN' : 'en';
    const dictionaryRequest =
      language === 'en'
        ? fetchJson(
            `https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(cleanWord)}`,
            2500,
          )
        : Promise.resolve(null);
    const translationRequest = fetchJson(
      `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sourceLanguage}&tl=vi&dt=t&q=${encodeURIComponent(cleanWord)}`,
      3500,
    );
    const [dictionary, translation] = await Promise.all([
      dictionaryRequest,
      translationRequest,
    ]);
    const entry = Array.isArray(dictionary) ? dictionary[0] : null;
    const firstMeaning = entry?.meanings?.[0];
    const firstDefinition = entry?.meanings
      ?.flatMap(
        (item: { definitions?: { example?: string }[] }) =>
          item.definitions ?? [],
      )
      .find((item: { example?: string }) => item.example);
    let translated = Array.isArray(translation?.[0])
      ? translation[0]
          .map((part: unknown[]) => part?.[0] ?? '')
          .join('')
          .trim()
      : '';
    if (!translated || translated.toLowerCase() === cleanWord.toLowerCase()) {
      const fallback = await fetchJson(
        `https://api.mymemory.translated.net/get?q=${encodeURIComponent(cleanWord)}&langpair=${sourceLanguage}|vi`,
        3500,
      );
      translated = fallback?.responseData?.translatedText ?? '';
    }
    if (translated && translated.toLowerCase() !== cleanWord.toLowerCase())
      setMeaning(translated);
    setPhonetic(
      entry?.phonetic ??
        entry?.phonetics?.find((item: { text?: string }) => item.text)?.text ??
        '',
    );
    setPartOfSpeech(firstMeaning?.partOfSpeech ?? '');
    setExample(firstDefinition?.example ?? '');
    setEnriching(false);
    setNote(
      translated
        ? 'Đã tự điền thông tin. Bạn có thể sửa lại trước khi lưu.'
        : 'Chưa dịch được tự động. Bạn hãy nhập nghĩa thủ công.',
    );
  }

  useEffect(() => {
    if (initialTerm.trim()) void chooseWord(initialTerm);
  }, []);

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!term.trim() || !meaning.trim()) {
      setNote(
        `Vui lòng nhập từ ${languageName(language).toLowerCase()} và nghĩa tiếng Việt.`,
      );
      return;
    }
    const error = onSave({ term, meaning, example, phonetic, partOfSpeech });
    if (error) setNote(error);
  }

  return (
    <Modal title="Thêm từ mới" onClose={onClose}>
      <form onSubmit={submit} className="space-y-4">
        <div className="relative">
          <label className="block text-sm font-extrabold">
            Từ {languageName(language).toLowerCase()}
          </label>
          <div className="word-input-wrap">
            <input
              value={term}
              onChange={(event) => {
                setTerm(event.target.value);
                setSuggestionsLocked(false);
                setMeaning('');
                setPhonetic('');
                setPartOfSpeech('');
                setExample('');
                setNote(
                  language === 'zh'
                    ? 'Bấm “Tự tìm nghĩa” để dịch sang tiếng Việt.'
                    : 'Chọn một từ gợi ý hoặc bấm “Tự tìm nghĩa”.',
                );
              }}
              placeholder={
                language === 'zh' ? 'Ví dụ: 你好' : 'Ví dụ: accommodation'
              }
              autoFocus
              autoComplete="off"
            />
            <button
              type="button"
              onClick={() => onSpeak(term)}
              disabled={!term.trim() || audioStatus === 'loading'}
              aria-label="Nghe phát âm"
            >
              {audioStatus === 'loading' ? (
                <LoaderCircle className="animate-spin" size={18} />
              ) : (
                <Volume2 size={18} />
              )}
            </button>
          </div>
          {(loadingSuggestions ||
            suggestions.length > 0 ||
            (!suggestionsLocked &&
              language === 'en' &&
              term.trim().length >= 2)) && (
            <div className="suggestions" role="listbox">
              {loadingSuggestions ? (
                <div className="suggestion-loading">
                  <LoaderCircle className="animate-spin" size={17} /> Đang tìm
                  từ…
                </div>
              ) : (
                <>
                  <button
                    type="button"
                    role="option"
                    className="use-typed-word"
                    onClick={() => chooseWord(term)}
                  >
                    <Plus size={15} />
                    <b>Dùng “{term.trim()}”</b>
                    <span>THÊM TỪ NÀY</span>
                  </button>
                  {suggestions
                    .filter(
                      (word) => normalizeTerm(word) !== normalizeTerm(term),
                    )
                    .map((word) => (
                      <button
                        type="button"
                        role="option"
                        key={word}
                        onClick={() => chooseWord(word)}
                      >
                        <Search size={15} />
                        <b>{word}</b>
                        <span>Chọn</span>
                      </button>
                    ))}
                </>
              )}
            </div>
          )}
          {audioStatus === 'playing' && (
            <p className="audio-message success">
              <Volume2 size={14} /> Đang phát âm thanh…
            </p>
          )}
          {audioStatus === 'error' && (
            <p className="audio-message error">
              Không thể phát âm thanh trong trình duyệt này.
            </p>
          )}
        </div>
        <Button
          type="button"
          variant="outline"
          disabled={!term.trim() || enriching}
          onClick={() => chooseWord(term)}
          className="h-10 w-full rounded-xl border-2 font-bold"
        >
          <Languages size={17} />
          {enriching ? 'Đang tìm nghĩa…' : 'Tự tìm nghĩa tiếng Việt'}
        </Button>
        <div className="helper-note">
          {enriching ? (
            <LoaderCircle className="animate-spin" size={16} />
          ) : (
            <Languages size={16} />
          )}
          <span>{note}</span>
        </div>
        {(phonetic || partOfSpeech) && (
          <div className="phonetic-preview">
            {partOfSpeech && (
              <>
                <span>Từ loại</span>
                <b>{partOfSpeechLabel(partOfSpeech)}</b>
              </>
            )}
            {phonetic && (
              <>
                <span>Phiên âm</span>
                <b>/{phonetic.replaceAll('/', '')}/</b>
                <button type="button" onClick={() => onSpeak(term)}>
                  <Volume2 size={16} /> Nghe thử
                </button>
              </>
            )}
          </div>
        )}
        <Field
          value={meaning}
          onChange={(event) => setMeaning(event.target.value)}
          name="meaning"
          label="Nghĩa tiếng Việt"
          placeholder="Nghĩa gợi ý sẽ hiện ở đây"
        />
        <Field
          value={example}
          onChange={(event) => setExample(event.target.value)}
          name="example"
          label="Câu ví dụ (không bắt buộc)"
          placeholder="Câu ví dụ sẽ được tự điền nếu có"
        />
        <Button
          type="submit"
          disabled={enriching}
          className="h-11 w-full rounded-xl bg-[#213a34] font-bold"
        >
          Lưu vào bộ từ
        </Button>
      </form>
    </Modal>
  );
}
