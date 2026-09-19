'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, BellRing, BookOpen, Brain, CalendarCheck, Check, ChevronRight, Clock3, Cloud, Flame, FolderPlus, Languages, LoaderCircle, LogIn, LogOut, Plus, RotateCcw, Search, Timer, Trash2, Volume2, X } from 'lucide-react';
import { getRedirectResult, onAuthStateChanged, signInWithRedirect, signOut, type User } from 'firebase/auth';
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';
import { Button } from '@/components/ui/button';
import { auth, db, googleProvider } from '@/lib/firebase';

type Level = 'new' | 'learning' | 'known';
type Word = { id: number; term: string; meaning: string; example: string; phonetic?: string; level: Level; nextReview: number; createdAt?: number };
type Deck = { id: number; name: string; emoji: string; description: string; words: Word[] };
type StudyProgress = { dailySeconds: Record<string, number> };

const DAY = 86400000;
const legacyStarterDecks: Deck[] = [
  { id: 1, name: 'Du lịch Nhật Bản', emoji: '🗾', description: '20 từ cần dùng cho chuyến đi', words: [
    { id: 11, term: 'destination', meaning: 'điểm đến', example: 'Tokyo is our next destination.', level: 'learning', nextReview: Date.now() },
    { id: 12, term: 'itinerary', meaning: 'lịch trình', example: 'Let’s check the itinerary.', level: 'new', nextReview: Date.now() },
    { id: 13, term: 'departure', meaning: 'sự khởi hành', example: 'Departure is at 8 a.m.', level: 'known', nextReview: Date.now() + DAY * 3 },
    { id: 14, term: 'accommodation', meaning: 'chỗ ở', example: 'The accommodation is near the station.', level: 'learning', nextReview: Date.now() },
    { id: 15, term: 'souvenir', meaning: 'quà lưu niệm', example: 'I bought a small souvenir.', level: 'known', nextReview: Date.now() + DAY * 7 },
  ]},
  { id: 2, name: 'Giao tiếp công việc', emoji: '💼', description: 'Từ vựng dùng ở văn phòng', words: [
    { id: 21, term: 'deadline', meaning: 'hạn chót', example: 'The deadline is Friday.', level: 'learning', nextReview: Date.now() },
    { id: 22, term: 'feedback', meaning: 'phản hồi', example: 'Thank you for your feedback.', level: 'new', nextReview: Date.now() },
    { id: 23, term: 'schedule', meaning: 'lịch trình', example: 'My schedule is quite full.', level: 'known', nextReview: Date.now() + DAY * 4 },
  ]},
  { id: 3, name: 'IELTS — Environment', emoji: '🌱', description: 'Từ vựng chủ đề môi trường', words: [
    { id: 31, term: 'sustainable', meaning: 'bền vững', example: 'We need sustainable solutions.', level: 'new', nextReview: Date.now() },
    { id: 32, term: 'biodiversity', meaning: 'đa dạng sinh học', example: 'The forest has rich biodiversity.', level: 'learning', nextReview: Date.now() },
  ]},
];
const starterDecks: Deck[] = [];
const emptyProgress: StudyProgress = { dailySeconds: {} };

function dateKey(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function calculateStreak(dailySeconds: Record<string, number>) {
  const cursor = new Date();
  if ((dailySeconds[dateKey(cursor)] ?? 0) < 600) cursor.setDate(cursor.getDate() - 1);
  let streak = 0;
  while ((dailySeconds[dateKey(cursor)] ?? 0) >= 600) {
    streak += 1;
    cursor.setDate(cursor.getDate() - 1);
  }
  return streak;
}

function isUntouchedLegacyDeck(deck: Deck) {
  const original = legacyStarterDecks.find((item) => item.id === deck.id && item.name === deck.name);
  return Boolean(original
    && original.words.length === deck.words.length
    && original.words.every((word, index) => deck.words[index]?.id === word.id && deck.words[index]?.term === word.term));
}

function countDue(deck: Deck, now = Date.now()) { return deck.words.filter((word) => word.nextReview <= now).length; }

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

export default function Home() {
  const [decks, setDecks] = useState<Deck[]>(starterDecks);
  const [progress, setProgress] = useState<StudyProgress>(emptyProgress);
  const [activeDeck, setActiveDeck] = useState<number | null>(null);
  const [studyQueue, setStudyQueue] = useState<number[]>([]);
  const [revealed, setRevealed] = useState(false);
  const [showAddWord, setShowAddWord] = useState(false);
  const [showAddDeck, setShowAddDeck] = useState(false);
  const [showDeleteDeck, setShowDeleteDeck] = useState(false);
  const [showRetryOptions, setShowRetryOptions] = useState(false);
  const [search, setSearch] = useState('');
  const [loaded, setLoaded] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [authReady, setAuthReady] = useState(true);
  const [cloudReady, setCloudReady] = useState(false);
  const [syncStatus, setSyncStatus] = useState<'local' | 'loading' | 'saved' | 'error'>('local');
  const [authError, setAuthError] = useState('');
  const [migrationNotice, setMigrationNotice] = useState('');
  const [audioStatus, setAudioStatus] = useState<'idle' | 'loading' | 'playing' | 'error'>('idle');
  const saveTimerRef = useRef<number | null>(null);

  useEffect(() => {
    const migration = new URLSearchParams(window.location.hash.slice(1)).get('migration');
    const saved = migration ? decodeURIComponent(escape(window.atob(migration))) : localStorage.getItem('wordnest-decks');
    const savedProgress = localStorage.getItem('wordnest-progress');
    if (saved) {
      const parsed = JSON.parse(saved) as Deck[];
      const cleaned = parsed.filter((deck) => !isUntouchedLegacyDeck(deck));
      setDecks(cleaned.map((deck) => ({ ...deck, words: deck.words.map((word) => ({ ...word, createdAt: word.createdAt ?? (word.id > 1000000000000 ? word.id : undefined) })) })));
      if (migration) {
        localStorage.setItem('wordnest-decks', saved);
        window.history.replaceState(null, '', window.location.pathname);
        setMigrationNotice(`Đã chuyển ${cleaned.reduce((total, deck) => total + deck.words.length, 0)} từ từ trang cũ. Hãy đăng nhập Google để lưu vào tài khoản.`);
      }
    }
    if (savedProgress) setProgress(JSON.parse(savedProgress) as StudyProgress);
    setLoaded(true);
  }, []);
  useEffect(() => onAuthStateChanged(auth, (nextUser) => {
    setUser(nextUser);
    setAuthReady(true);
    if (!nextUser) {
      localStorage.removeItem('wordnest-decks');
      localStorage.removeItem('wordnest-progress');
      setDecks([]);
      setProgress(emptyProgress);
      setActiveDeck(null);
      setStudyQueue([]);
      setRevealed(false);
      setCloudReady(false);
      setSyncStatus('local');
    }
  }), []);
  useEffect(() => {
    void getRedirectResult(auth).catch((error: { code?: string }) => {
      setAuthError(error?.code === 'auth/unauthorized-domain'
        ? 'Tên miền này chưa được Firebase cho phép đăng nhập.'
        : 'Đăng nhập Google chưa thành công. Vui lòng thử lại.');
      setSyncStatus('error');
    });
  }, []);

  useEffect(() => {
    if (!loaded || !user) return;
    let cancelled = false;
    setSyncStatus('loading');
    void getDoc(doc(db, 'users', user.uid)).then(async (snapshot) => {
      if (cancelled) return;
      const cloudDecks = snapshot.data()?.decks as Deck[] | undefined;
      const cloudProgress = snapshot.data()?.progress as StudyProgress | undefined;
      setProgress(cloudProgress ?? emptyProgress);
      if (cloudDecks?.length) {
        const cleaned = cloudDecks.filter((deck) => !isUntouchedLegacyDeck(deck));
        setDecks(cleaned);
        if (cleaned.length !== cloudDecks.length) {
          await setDoc(doc(db, 'users', user.uid), { decks: cleaned, progress: cloudProgress ?? emptyProgress, email: user.email, displayName: user.displayName, updatedAt: serverTimestamp() });
        }
      } else {
        await setDoc(doc(db, 'users', user.uid), { decks, progress: cloudProgress ?? progress, email: user.email, displayName: user.displayName, updatedAt: serverTimestamp() });
      }
      if (!cancelled) { setCloudReady(true); setSyncStatus('saved'); }
    }).catch(() => { if (!cancelled) setSyncStatus('error'); });
    return () => { cancelled = true; };
  }, [loaded, user?.uid]);

  useEffect(() => {
    if (!loaded) return;
    localStorage.setItem('wordnest-decks', JSON.stringify(decks));
    localStorage.setItem('wordnest-progress', JSON.stringify(progress));
    if (!user || !cloudReady) return;
    setSyncStatus('loading');
    if (saveTimerRef.current) window.clearTimeout(saveTimerRef.current);
    saveTimerRef.current = window.setTimeout(() => {
      void setDoc(doc(db, 'users', user.uid), { decks, progress, email: user.email, displayName: user.displayName, updatedAt: serverTimestamp() })
        .then(() => setSyncStatus('saved'))
        .catch(() => setSyncStatus('error'));
    }, 500);
    return () => { if (saveTimerRef.current) window.clearTimeout(saveTimerRef.current); };
  }, [decks, progress, loaded, user?.uid, cloudReady]);
  useEffect(() => {
    const context = (document as Document & { modelContext?: { registerTool: (tool: unknown, options?: { signal?: AbortSignal }) => void | Promise<void> } }).modelContext;
    if (!context?.registerTool) return;
    const lifecycle = new AbortController();
    void Promise.resolve(context.registerTool({
      name: 'add_words_to_deck',
      title: 'Thêm nhiều từ vào bộ từ',
      description: 'Thêm một hoặc nhiều từ tiếng Anh vào một bộ từ WordNest hiện có.',
      inputSchema: { type: 'object', properties: { deckName: { type: 'string' }, words: { type: 'array', items: { type: 'object', properties: { term: { type: 'string' }, meaning: { type: 'string' }, example: { type: 'string' } }, required: ['term', 'meaning'], additionalProperties: false } } }, required: ['deckName', 'words'], additionalProperties: false },
      annotations: { readOnlyHint: false, untrustedContentHint: true },
      execute(input: unknown) {
        const value = input as { deckName?: string; words?: { term?: string; meaning?: string; example?: string }[] };
        const target = decks.find((deck) => deck.name.toLowerCase() === value.deckName?.trim().toLowerCase());
        if (!target) throw new Error('Không tìm thấy bộ từ.');
        if (!Array.isArray(value.words) || !value.words.length || value.words.some((word) => !word.term?.trim() || !word.meaning?.trim())) throw new Error('Mỗi từ cần có từ tiếng Anh và nghĩa tiếng Việt.');
        const stamp = Date.now();
        const additions: Word[] = value.words.map((word, index) => ({ id: stamp + index, term: word.term!.trim(), meaning: word.meaning!.trim(), example: word.example?.trim() ?? '', level: 'new', nextReview: stamp, createdAt: stamp + index }));
        setDecks((all) => all.map((deck) => deck.id === target.id ? { ...deck, words: [...deck.words, ...additions] } : deck));
        setStudyQueue([...target.words.filter((word) => word.nextReview <= stamp).map((word) => word.id), ...additions.map((word) => word.id)]);
        setActiveDeck(target.id);
        return { deck: target.name, added: additions.length };
      },
    }, { signal: lifecycle.signal })).catch(() => undefined);
    return () => lifecycle.abort();
  }, [decks]);

  const currentDeck = decks.find((deck) => deck.id === activeDeck);
  const otherDueDeck = decks.find((deck) => deck.id !== activeDeck && countDue(deck) > 0);
  const dueInOtherDecks = decks
    .filter((deck) => deck.id !== activeDeck)
    .reduce((total, deck) => total + countDue(deck), 0);
  const studyWords = studyQueue.flatMap((wordId) => {
    const word = currentDeck?.words.find((item) => item.id === wordId);
    return word ? [word] : [];
  });
  const currentWord = studyWords[0];
  const todaySeconds = progress.dailySeconds[dateKey()] ?? 0;
  const todayMinutes = Math.floor(todaySeconds / 60);
  const todayPercent = Math.min(100, Math.round((todaySeconds / 600) * 100));
  const successfulDays = Object.values(progress.dailySeconds).filter((seconds) => seconds >= 600).length;
  const currentStreak = calculateStreak(progress.dailySeconds);
  const scheduledRetries = currentDeck?.words.filter((word) => word.level === 'new' && word.nextReview > Date.now()) ?? [];
  const nextRetryMinutes = scheduledRetries.length
    ? Math.max(1, Math.ceil((Math.min(...scheduledRetries.map((word) => word.nextReview)) - Date.now()) / 60000))
    : 0;
  const now = Date.now();
  const allWords = decks.flatMap((deck) => deck.words.map((word) => ({ ...word, deckId: deck.id, deckName: deck.name, deckEmoji: deck.emoji })));
  const totalWords = allWords.length;
  const dueList = allWords.filter((word) => word.nextReview <= now);
  const dueWords = dueList.length;
  const dueNewWords = dueList.filter((word) => word.level === 'new').length;
  const dueReviewWords = dueList.filter((word) => word.level !== 'new').length;
  const knownWords = allWords.filter((word) => word.level === 'known').length;
  const addedWords = allWords.filter((word) => word.createdAt !== undefined);
  const recentWords = [...addedWords].sort((a, b) => (b.createdAt ?? 0) - (a.createdAt ?? 0)).slice(0, 6);
  const firstDueDeck = decks.find((deck) => countDue(deck, now) > 0);

  useEffect(() => {
    if (!currentWord || !studyWords.length) return;
    setAudioStatus('idle');
  }, [currentWord?.id, studyQueue]);

  useEffect(() => {
    if (!user || !currentWord) return;
    const interval = window.setInterval(() => {
      if (document.visibilityState !== 'visible') return;
      const today = dateKey();
      setProgress((current) => ({
        dailySeconds: {
          ...current.dailySeconds,
          [today]: (current.dailySeconds[today] ?? 0) + 10,
        },
      }));
    }, 10000);
    return () => window.clearInterval(interval);
  }, [user?.uid, currentWord?.id]);

  useEffect(() => {
    setShowRetryOptions(false);
  }, [currentWord?.id]);

  useEffect(() => {
    if (!currentDeck || !scheduledRetries.length) return;
    const nextReview = Math.min(...scheduledRetries.map((word) => word.nextReview));
    const timeout = window.setTimeout(() => {
      const dueIds = currentDeck.words.filter((word) => word.level === 'new' && word.nextReview <= Date.now()).map((word) => word.id);
      setStudyQueue((queue) => [...queue, ...dueIds.filter((wordId) => !queue.includes(wordId))]);
    }, Math.max(0, nextReview - Date.now()) + 250);
    return () => window.clearTimeout(timeout);
  }, [currentDeck?.words, scheduledRetries.length]);

  function speak(text: string) {
    const cleanText = text.trim();
    if (!cleanText) return;
    if (!('speechSynthesis' in window)) { setAudioStatus('error'); return; }
    speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = 'en-US';
    utterance.rate = 0.86;
    const preferredVoice = speechSynthesis.getVoices().find((voice) => voice.lang.toLowerCase().startsWith('en-us'));
    if (preferredVoice) utterance.voice = preferredVoice;
    setAudioStatus('loading');
    utterance.onstart = () => setAudioStatus('playing');
    utterance.onend = () => setAudioStatus('idle');
    utterance.onerror = () => setAudioStatus('error');
    speechSynthesis.speak(utterance);
  }

  async function signInGoogle() {
    setAuthError('');
    if (window.location.hostname.endsWith('chatgpt.site')) {
      const payload = window.btoa(unescape(encodeURIComponent(JSON.stringify(decks))));
      window.location.href = `https://wordnest-english-vocab.web.app/#migration=${encodeURIComponent(payload)}`;
      return;
    }
    setSyncStatus('loading');
    try { await signInWithRedirect(auth, googleProvider); }
    catch (error) {
      setAuthError((error as { code?: string })?.code === 'auth/unauthorized-domain'
        ? 'Tên miền này chưa được Firebase cho phép đăng nhập.'
        : 'Không thể mở trang đăng nhập Google. Vui lòng thử lại.');
      setSyncStatus('error');
    }
  }

  async function signOutGoogle() {
    if (saveTimerRef.current) window.clearTimeout(saveTimerRef.current);
    await signOut(auth);
    localStorage.removeItem('wordnest-decks');
    localStorage.removeItem('wordnest-progress');
    setDecks([]);
    setProgress(emptyProgress);
    setActiveDeck(null);
    setStudyQueue([]);
    setRevealed(false);
    setMigrationNotice('');
    setAuthError('');
    setCloudReady(false);
    setSyncStatus('local');
  }
  function rateWord(level: Level, retryMinutes = 0) {
    if (!currentDeck || !currentWord) return;
    const delay = level === 'new' ? retryMinutes * 60000 : level === 'learning' ? DAY : DAY * 7;
    setDecks((all) => all.map((deck) => deck.id === currentDeck.id ? { ...deck, words: deck.words.map((word) => word.id === currentWord.id ? { ...word, level, nextReview: Date.now() + delay } : word) } : deck));
    setRevealed(false);
    setShowRetryOptions(false);
    setStudyQueue((queue) => queue.filter((wordId) => wordId !== currentWord.id));
  }
  function addWord(value: { term: string; meaning: string; example: string; phonetic?: string }) {
    if (!currentDeck) return;
    const term = value.term.trim();
    const meaning = value.meaning.trim();
    if (!term || !meaning) return;
    const createdAt = Date.now();
    const word: Word = { id: createdAt, term, meaning, example: value.example.trim(), phonetic: value.phonetic, level: 'new', nextReview: createdAt, createdAt };
    setDecks((all) => all.map((deck) => deck.id === currentDeck.id ? { ...deck, words: [...deck.words, word] } : deck));
    setStudyQueue((queue) => [...queue, word.id]);
    setShowAddWord(false);
  }
  function addDeck(form: FormData) {
    const name = String(form.get('name') || '').trim();
    if (!name) return;
    const deck: Deck = { id: Date.now(), name, emoji: String(form.get('emoji') || '📚'), description: String(form.get('description') || 'Bộ từ vựng của riêng bạn'), words: [] };
    setDecks((all) => [...all, deck]); setShowAddDeck(false); setStudyQueue([]); setActiveDeck(deck.id);
  }

  function openDeck(deckId: number) {
    const deck = decks.find((item) => item.id === deckId);
    setStudyQueue(deck?.words.filter((word) => word.nextReview <= Date.now()).map((word) => word.id) ?? []);
    setRevealed(false);
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

  if (activeDeck && currentDeck) {
    return <main className="min-h-screen bg-[#f5f0e6] text-[#213a34]">
      <Header compact user={user} authReady={authReady} syncStatus={syncStatus} onSignIn={signInGoogle} onSignOut={signOutGoogle} onHome={() => { setActiveDeck(null); setStudyQueue([]); setRevealed(false); }} />
      <div className="mx-auto max-w-6xl px-5 pb-20 pt-9 md:px-8">
        <button onClick={() => { setActiveDeck(null); setStudyQueue([]); }} className="mb-6 flex items-center gap-2 text-sm font-extrabold text-[#64756f]"><ArrowLeft size={17}/> Tất cả bộ từ</button>
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><div className="mb-3 text-5xl">{currentDeck.emoji}</div><p className="eyebrow">Bộ từ của bạn</p><h1 className="font-display text-4xl font-black tracking-tight md:text-5xl">{currentDeck.name}</h1><p className="mt-2 text-[#667871]">{currentDeck.description} · {currentDeck.words.length} từ</p></div><div className="flex flex-wrap gap-2"><Button onClick={() => setShowDeleteDeck(true)} variant="outline" className="h-11 rounded-full border-2 border-[#c65342]/30 bg-transparent px-5 font-bold text-[#b84b3c] hover:bg-[#fbe5df]"><Trash2/> Xóa bộ từ</Button><Button onClick={() => setShowAddWord(true)} className="h-11 rounded-full bg-[#eb6a52] px-5 font-bold text-white hover:bg-[#d85a45]"><Plus/> Thêm từ vựng</Button></div></div>

        <div className="grid gap-7 lg:grid-cols-[1.2fr_.8fr]">
          <section className="study-panel">
            <div className="mb-5 flex items-center justify-between"><div><p className="text-sm font-extrabold uppercase tracking-wider text-[#eb6a52]">Ôn tập hôm nay</p><p className="mt-1 text-sm text-[#71817b]">{studyWords.length ? `${studyWords.length} từ trong bộ này${dueInOtherDecks ? ` · ${dueInOtherDecks} từ ở bộ khác` : ''}` : otherDueDeck ? `Bộ này đã xong · còn ${dueInOtherDecks} từ ở bộ khác` : 'Bạn đã hoàn thành!'}</p></div><span className="rounded-full bg-[#f8d467] px-3 py-1 text-sm font-black">{studyWords.length} còn lại</span></div>
            {currentWord ? <div className="flashcard">
              <button onClick={() => speak(currentWord.term)} className={`sound ${audioStatus === 'loading' ? 'loading' : ''}`} aria-label={audioStatus === 'loading' ? 'Đang tải phát âm' : 'Nghe phát âm'} disabled={audioStatus === 'loading'}>{audioStatus === 'loading' ? <LoaderCircle className="animate-spin" size={21}/> : <Volume2 size={21}/>}</button>
              <div className="flex min-h-[285px] flex-col items-center justify-center text-center"><span className="mb-3 text-xs font-black uppercase tracking-[.18em] text-[#8a9691]">Từ tiếng Anh</span><h2 className="font-display text-5xl font-black tracking-tight sm:text-6xl">{currentWord.term}</h2>{currentWord.phonetic && <span className="mt-2 font-semibold text-[#71817b]">/{currentWord.phonetic.replaceAll('/', '')}/</span>}{revealed ? <div className="mt-7 animate-in fade-in"><p className="text-2xl font-extrabold text-[#eb6a52]">{currentWord.meaning}</p>{currentWord.example && <p className="mt-3 rounded-xl bg-[#f5f0e6] px-5 py-3 text-[#5b6d66]">“{currentWord.example}”</p>}</div> : <Button onClick={() => setRevealed(true)} variant="outline" className="mt-8 h-11 rounded-full border-2 border-[#213a34]/20 bg-transparent px-6 font-bold">Xem nghĩa</Button>}</div>
              {audioStatus === 'loading' && <p className="sound-status" role="status"><LoaderCircle className="animate-spin" size={14}/> Đang chuẩn bị phát âm…</p>}
              {audioStatus === 'error' && <p className="sound-status error" role="status">Chưa tải được âm thanh. Hãy bấm thử lại.</p>}
              {revealed && <div className="border-t-2 border-dashed border-[#213a34]/10 pt-5"><p className="mb-3 text-center text-xs font-extrabold uppercase tracking-widest text-[#71817b]">Bạn nhớ từ này thế nào?</p><div className="grid grid-cols-3 gap-2"><div className="retry-choice"><button onClick={() => setShowRetryOptions((visible) => !visible)} className="rate again"><RotateCcw/> Chưa nhớ<small>Chọn thời gian</small></button>{showRetryOptions && <div className="retry-options" role="menu" aria-label="Chọn thời gian học lại">{[1, 5, 10, 30].map((minutes) => <button key={minutes} type="button" role="menuitem" onClick={() => rateWord('new', minutes)}><Clock3 size={15}/>{minutes} phút</button>)}</div>}</div><button onClick={() => rateWord('learning')} className="rate learning"><Brain/> Hơi nhớ<small>1 ngày</small></button><button onClick={() => rateWord('known')} className="rate known"><Check/> Đã thuộc<small>7 ngày</small></button></div></div>}
            </div> : <div className="empty-state"><div className="text-6xl">{scheduledRetries.length ? '⏳' : '🎉'}</div><h2 className="font-display mt-4 text-3xl font-black">{scheduledRetries.length ? 'Đã xong lượt hiện tại!' : otherDueDeck ? 'Xong bộ này!' : 'Xong bài hôm nay!'}</h2><p>{scheduledRetries.length ? `${scheduledRetries.length} từ sẽ quay lại sau khoảng ${nextRetryMinutes} phút.` : otherDueDeck ? `Bạn còn ${dueInOtherDecks} từ đến hạn trong các bộ khác.` : 'Hãy quay lại khi đến lịch ôn tiếp theo.'}</p>{!scheduledRetries.length && otherDueDeck && <Button onClick={() => openDeck(otherDueDeck.id)} className="mt-5 h-11 rounded-full bg-[#213a34] px-6 font-bold text-white">Học tiếp {countDue(otherDueDeck)} từ · {otherDueDeck.name} <ArrowRight/></Button>}</div>}
          </section>

          <aside className="word-list"><div className="mb-5 flex items-center justify-between"><h2 className="font-display text-2xl font-black">Tất cả từ</h2><span className="text-sm font-bold text-[#71817b]">{currentDeck.words.length} từ</span></div><div className="space-y-2">{currentDeck.words.length ? currentDeck.words.map((word) => <div className="word-row" key={word.id}><span className={`level-dot ${word.level}`}/><div className="min-w-0 flex-1"><b className="block truncate">{word.term}</b><span className="text-sm text-[#71817b]">{word.meaning}</span></div><span className="level-label">{word.level === 'known' ? 'Đã thuộc' : word.level === 'learning' ? 'Đang học' : 'Từ mới'}</span><button aria-label={`Xóa ${word.term}`} onClick={() => { setStudyQueue((queue) => queue.filter((wordId) => wordId !== word.id)); setDecks((all) => all.map((deck) => deck.id === currentDeck.id ? {...deck, words: deck.words.filter((item) => item.id !== word.id)} : deck)); }} className="delete-button"><Trash2 size={16}/></button></div>) : <div className="rounded-2xl bg-[#f5f0e6] p-8 text-center text-sm text-[#71817b]">Chưa có từ nào. Hãy thêm từ đầu tiên!</div>}</div></aside>
        </div>
      </div>
      {showAddWord && <AddWordModal onClose={() => setShowAddWord(false)} onSave={addWord} onSpeak={speak} audioStatus={audioStatus} />}
      {showDeleteDeck && <Modal title="Xóa bộ từ này?" onClose={() => setShowDeleteDeck(false)}><div className="space-y-5"><div className="rounded-2xl bg-[#fbe5df] p-4 text-sm leading-6 text-[#7d4138]"><b className="block text-base text-[#b84b3c]">{currentDeck.name}</b>Bộ từ này có {currentDeck.words.length} từ. Sau khi xóa, dữ liệu của bộ này không thể khôi phục.</div><div className="grid grid-cols-2 gap-3"><Button type="button" variant="outline" onClick={() => setShowDeleteDeck(false)} className="h-11 rounded-xl border-2 font-bold">Giữ lại</Button><Button type="button" onClick={deleteCurrentDeck} className="h-11 rounded-xl bg-[#c65342] font-bold text-white hover:bg-[#ad4335]"><Trash2/> Xóa vĩnh viễn</Button></div></div></Modal>}
    </main>;
  }

  const filtered = decks.filter((deck) => deck.name.toLowerCase().includes(search.toLowerCase()));
  return <main className="min-h-screen bg-[#f5f0e6] text-[#213a34]">
    <Header user={user} authReady={authReady} syncStatus={syncStatus} onSignIn={signInGoogle} onSignOut={signOutGoogle} />
    {migrationNotice && <div className="migration-notice" role="status">{migrationNotice}</div>}
    {authError && <div className="auth-error" role="alert">{authError}</div>}
    <section id="review" className="learning-overview scroll-mt-20" aria-label="Việc học hôm nay">
      <div className="mx-auto max-w-6xl px-5 py-6 md:px-8">
        <div className="overview-grid">
          <div className="study-alert">
            <span className="alert-icon"><BellRing/></span>
            <div className="min-w-0 flex-1"><p className="alert-label">Cần học hôm nay</p><h2>{dueWords > 0 ? `${dueWords} từ đang chờ bạn` : 'Bạn đã hoàn thành hôm nay!'}</h2><p>{dueWords > 0 ? `${dueNewWords} từ mới · ${dueReviewWords} từ đến hạn ôn` : 'Hãy thêm từ mới hoặc quay lại vào ngày mai.'}</p></div>
            {firstDueDeck && <Button onClick={() => openDeck(firstDueDeck.id)} className="study-now h-11 rounded-full bg-[#f8d467] px-5 font-black text-[#213a34] hover:bg-[#f3c943]">Học ngay <ArrowRight/></Button>}
          </div>
          <div className="recent-panel">
            <div className="recent-heading"><div><span>Từ bạn vừa thêm</span><b>{addedWords.length} từ đã thêm</b></div>{recentWords.length > 0 && <button onClick={() => document.getElementById('decks')?.scrollIntoView({ behavior: 'smooth' })}>Xem tất cả bộ từ <ChevronRight/></button>}</div>
            {recentWords.length > 0 ? <div className="recent-words">{recentWords.map((word) => <button key={`${word.deckId}-${word.id}`} onClick={() => openDeck(word.deckId)}><span>{word.deckEmoji}</span><span><b>{word.term}</b><small>{word.meaning}</small></span></button>)}</div> : <div className="recent-empty"><Plus size={18}/> Từ mới bạn thêm sẽ xuất hiện ở đây.</div>}
          </div>
        </div>
      </div>
    </section>
    <section id="progress" className="progress-section scroll-mt-20">
      <div className="mx-auto max-w-6xl px-5 py-12 md:px-8">
        <div className="progress-heading"><div><p className="eyebrow">Tiến độ học</p><h1 className="font-display text-4xl font-black tracking-tight">Mục tiêu 10 phút mỗi ngày</h1><p>Thời gian được tính khi bạn đang học một thẻ từ và mở trang trên màn hình.</p></div>{decks.length === 0 && <Button onClick={() => setShowAddDeck(true)} className="h-11 rounded-full bg-[#213a34] px-5 font-bold text-white"><FolderPlus/> Tạo bộ từ đầu tiên</Button>}</div>
        <div className="progress-grid">
          <article className="today-progress">
            <div className="progress-icon"><Timer/></div>
            <div className="min-w-0 flex-1"><div className="progress-label"><b>Hôm nay</b><span>{Math.min(todayMinutes, 10)}/10 phút</span></div><div className="progress-track" aria-label={`Đã hoàn thành ${todayPercent}% mục tiêu hôm nay`}><span style={{ width: `${todayPercent}%` }}/></div><p>{!user ? 'Đăng nhập Google để lưu tiến độ.' : todaySeconds >= 600 ? 'Đã điểm danh hôm nay ✓' : `Học thêm ${Math.max(1, Math.ceil((600 - todaySeconds) / 60))} phút để được điểm danh.`}</p></div>
          </article>
          <article className="progress-stat"><span><Flame/></span><div><b>{currentStreak}</b><small>Ngày liên tiếp</small></div></article>
          <article className="progress-stat"><span><CalendarCheck/></span><div><b>{successfulDays}</b><small>Ngày học thành công</small></div></article>
        </div>
      </div>
    </section>

    <section className="bg-[#213a34] px-5 py-12 text-white md:px-8"><div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 md:grid-cols-4"><Stat icon={<BookOpen/>} value={totalWords} label="Tổng số từ"/><Stat icon={<Clock3/>} value={dueWords} label="Cần học hôm nay"/><Stat icon={<Check/>} value={knownWords} label="Từ đã thuộc"/><Stat icon={<FolderPlus/>} value={decks.length} label="Bộ từ của bạn"/></div></section>

    <section id="decks" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-16 md:px-8"><div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="eyebrow">Thư viện của bạn</p><h2 className="font-display text-4xl font-black tracking-tight">Các bộ từ vựng</h2></div><div className="search-box"><Search size={18}/><input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Tìm bộ từ..." aria-label="Tìm bộ từ"/></div></div><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{filtered.map((deck, index) => <button className={`deck-card color-${index % 3}`} onClick={() => openDeck(deck.id)} key={deck.id}><div className="flex items-start justify-between"><span className="deck-icon">{deck.emoji}</span><ChevronRight/></div><h3 className="font-display mt-6 text-2xl font-black text-[#213a34]">{deck.name}</h3><p className="mt-1 text-sm text-[#697a74]">{deck.description}</p><div className="mt-6 flex items-center justify-between border-t border-[#213a34]/10 pt-4 text-sm font-extrabold"><span>{deck.words.length} từ</span><span className={countDue(deck) ? 'text-[#eb6a52]' : 'text-[#43936d]'}>{countDue(deck) ? `${countDue(deck)} cần ôn` : 'Đã xong ✓'}</span></div></button>)}<button className="new-deck" onClick={() => setShowAddDeck(true)}><span className="grid size-12 place-items-center rounded-full bg-[#213a34] text-white"><Plus/></span><b className="mt-4">Tạo bộ từ mới</b><span className="text-sm text-[#71817b]">20 từ hay 200 từ — tùy bạn</span></button></div></section>
    <footer className="border-t border-[#213a34]/10 px-5 py-7 text-sm text-[#687a73] md:px-8"><div className="mx-auto flex max-w-6xl flex-col justify-between gap-3 sm:flex-row"><b className="font-display text-[#213a34]">WordNest</b><span>{user ? 'Dữ liệu đang được đồng bộ theo tài khoản Google.' : 'Đăng nhập Google để đồng bộ dữ liệu giữa các thiết bị.'}</span><span>Học ít · Nhớ lâu</span></div></footer>
    {showAddDeck && <Modal title="Tạo bộ từ mới" onClose={() => setShowAddDeck(false)}><form action={addDeck} className="space-y-4"><Field name="name" label="Tên bộ từ" placeholder="20 từ cho chuyến đi Đà Lạt" autoFocus/><Field name="emoji" label="Biểu tượng" placeholder="📚"/><Field name="description" label="Mô tả ngắn" placeholder="Những từ mình cần học tuần này"/><Button type="submit" className="h-11 w-full rounded-xl bg-[#213a34] font-bold">Tạo bộ từ</Button></form></Modal>}
  </main>;
}

function Header({ compact, onHome, user, authReady, syncStatus, onSignIn, onSignOut }: { compact?: boolean; onHome?: () => void; user: User | null; authReady: boolean; syncStatus: 'local' | 'loading' | 'saved' | 'error'; onSignIn: () => void; onSignOut: () => void }) { return <header className="relative z-20 border-b border-[#213a34]/10 bg-[#f5f0e6]/90 px-5 py-4 backdrop-blur md:px-8"><div className="mx-auto flex max-w-6xl items-center justify-between gap-3"><button onClick={onHome} className="flex items-center gap-3"><span className="grid size-10 place-items-center rounded-xl bg-[#213a34] text-[#f8d467] shadow-[3px_3px_0_#eb6a52]"><BookOpen size={21}/></span><span className="font-display text-xl font-black">Word<span className="text-[#eb6a52]">Nest</span></span></button>{!compact && <nav className="hidden items-center gap-7 text-sm font-extrabold lg:flex"><a href="#decks">Bộ từ</a><a href="#review">Lịch ôn</a><a href="#progress">Tiến độ</a></nav>}<div className="account-area">{user ? <><span className={`sync-state ${syncStatus}`}><Cloud size={14}/>{syncStatus === 'loading' ? 'Đang lưu' : syncStatus === 'error' ? 'Lỗi đồng bộ' : 'Đã đồng bộ'}</span><span className="account-name">{user.photoURL && <img src={user.photoURL} alt=""/>}<b>{user.displayName || user.email}</b></span><button onClick={onSignOut} className="account-button" aria-label="Đăng xuất Google"><LogOut size={17}/><span>Đăng xuất</span></button></> : <button onClick={onSignIn} disabled={!authReady} className="google-button"><LogIn size={18}/>{authReady ? 'Đăng nhập Google' : 'Đang tải…'}</button>}</div></div></header> }
function Stat({ icon, value, label }: { icon: React.ReactNode; value: string | number; label: string }) { return <div className="flex items-center gap-3"><span className="stat-icon">{icon}</span><div><b className="font-display block text-3xl font-black text-[#f8d467]">{value}</b><span className="text-xs font-bold text-white/55 sm:text-sm">{label}</span></div></div> }
function Modal({ title, onClose, children }: { title: string; onClose: () => void; children: React.ReactNode }) { return <div className="modal-backdrop" onMouseDown={onClose}><div className="modal" onMouseDown={(e) => e.stopPropagation()} role="dialog" aria-modal="true"><div className="mb-6 flex items-center justify-between"><h2 className="font-display text-2xl font-black">{title}</h2><button onClick={onClose} className="grid size-9 place-items-center rounded-full bg-[#f5f0e6]" aria-label="Đóng"><X size={19}/></button></div>{children}</div></div> }
function Field({ label, ...props }: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) { return <label className="block text-sm font-extrabold">{label}<input {...props} className="mt-2 h-11 w-full rounded-xl border-2 border-[#213a34]/12 bg-[#faf8f2] px-3 font-medium outline-none transition focus:border-[#eb6a52]"/></label> }

function AddWordModal({ onClose, onSave, onSpeak, audioStatus }: { onClose: () => void; onSave: (word: { term: string; meaning: string; example: string; phonetic?: string }) => void; onSpeak: (text: string) => void; audioStatus: 'idle' | 'loading' | 'playing' | 'error' }) {
  const [term, setTerm] = useState('');
  const [meaning, setMeaning] = useState('');
  const [example, setExample] = useState('');
  const [phonetic, setPhonetic] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [loadingSuggestions, setLoadingSuggestions] = useState(false);
  const [enriching, setEnriching] = useState(false);
  const [note, setNote] = useState('Gõ ít nhất 2 chữ để xem từ gợi ý.');

  useEffect(() => {
    const query = term.trim().toLowerCase();
    if (query.length < 2) { setSuggestions([]); setLoadingSuggestions(false); return; }
    const controller = new AbortController();
    const timer = window.setTimeout(async () => {
      setLoadingSuggestions(true);
      try {
        const response = await fetch(`https://api.datamuse.com/sug?s=${encodeURIComponent(query)}&max=6`, { signal: controller.signal });
        const data = await response.json() as { word: string }[];
        setSuggestions(data.map((item) => item.word));
      } catch { if (!controller.signal.aborted) setSuggestions([]); }
      finally { if (!controller.signal.aborted) setLoadingSuggestions(false); }
    }, 280);
    return () => { window.clearTimeout(timer); controller.abort(); };
  }, [term]);

  async function chooseWord(word: string) {
    setTerm(word); setSuggestions([]); setEnriching(true); setNote('Đang tìm nghĩa, phiên âm và ví dụ…');
    const dictionaryRequest = fetchJson(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(word)}`, 2500);
    const translationRequest = fetchJson(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=vi&dt=t&q=${encodeURIComponent(word)}`, 3500);
    const [dictionary, translation] = await Promise.all([dictionaryRequest, translationRequest]);
    const entry = Array.isArray(dictionary) ? dictionary[0] : null;
    const firstDefinition = entry?.meanings?.flatMap((item: { definitions?: { example?: string }[] }) => item.definitions ?? []).find((item: { example?: string }) => item.example);
    let translated = Array.isArray(translation?.[0]) ? translation[0].map((part: unknown[]) => part?.[0] ?? '').join('').trim() : '';
    if (!translated || translated.toLowerCase() === word.toLowerCase()) {
      const fallback = await fetchJson(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(word)}&langpair=en|vi`, 3500);
      translated = fallback?.responseData?.translatedText ?? '';
    }
    if (translated && translated.toLowerCase() !== word.toLowerCase()) setMeaning(translated);
    setPhonetic(entry?.phonetic ?? entry?.phonetics?.find((item: { text?: string }) => item.text)?.text ?? '');
    setExample(firstDefinition?.example ?? '');
    setEnriching(false);
    setNote(translated ? 'Đã tự điền thông tin. Bạn có thể sửa lại trước khi lưu.' : 'Chưa dịch được tự động. Bạn hãy nhập nghĩa thủ công.');
  }

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!term.trim() || !meaning.trim()) { setNote('Vui lòng nhập từ tiếng Anh và nghĩa tiếng Việt.'); return; }
    onSave({ term, meaning, example, phonetic });
  }

  return <Modal title="Thêm từ mới" onClose={onClose}>
    <form onSubmit={submit} className="space-y-4">
      <div className="relative"><label className="block text-sm font-extrabold">Từ tiếng Anh</label><div className="word-input-wrap"><input value={term} onChange={(event) => { setTerm(event.target.value); setNote('Chọn một từ gợi ý để tự điền thông tin.'); }} placeholder="Ví dụ: accommodation" autoFocus autoComplete="off"/><button type="button" onClick={() => onSpeak(term)} disabled={!term.trim() || audioStatus === 'loading'} aria-label="Nghe phát âm">{audioStatus === 'loading' ? <LoaderCircle className="animate-spin" size={18}/> : <Volume2 size={18}/>}</button></div>{(loadingSuggestions || suggestions.length > 0) && <div className="suggestions" role="listbox">{loadingSuggestions ? <div className="suggestion-loading"><LoaderCircle className="animate-spin" size={17}/> Đang tìm từ…</div> : suggestions.map((word) => <button type="button" role="option" key={word} onClick={() => chooseWord(word)}><Search size={15}/><b>{word}</b><span>Chọn</span></button>)}</div>}{audioStatus === 'playing' && <p className="audio-message success"><Volume2 size={14}/> Đang phát âm thanh…</p>}{audioStatus === 'error' && <p className="audio-message error">Không thể phát âm thanh trong trình duyệt này.</p>}</div>
      <div className="helper-note">{enriching ? <LoaderCircle className="animate-spin" size={16}/> : <Languages size={16}/>}<span>{note}</span></div>
      {phonetic && <div className="phonetic-preview"><span>Phiên âm</span><b>/{phonetic.replaceAll('/', '')}/</b><button type="button" onClick={() => onSpeak(term)}><Volume2 size={16}/> Nghe thử</button></div>}
      <Field value={meaning} onChange={(event) => setMeaning(event.target.value)} name="meaning" label="Nghĩa tiếng Việt" placeholder="Nghĩa gợi ý sẽ hiện ở đây"/>
      <Field value={example} onChange={(event) => setExample(event.target.value)} name="example" label="Câu ví dụ (không bắt buộc)" placeholder="Câu ví dụ sẽ được tự điền nếu có"/>
      <Button type="submit" disabled={enriching} className="h-11 w-full rounded-xl bg-[#213a34] font-bold">Lưu vào bộ từ</Button>
    </form>
  </Modal>;
}
