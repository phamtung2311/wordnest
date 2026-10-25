'use client';

import { useEffect, useState, useRef, useSyncExternalStore } from 'react';
import { useRouter } from 'next/navigation';
import {
  Timer,
  Play,
  Pause,
  RotateCcw,
  Plus,
  Flame,
  BookOpen,
  Volume2,
  Check,
  ListTodo,
  Trash2,
  X,
  Minimize2,
  Maximize2,
  Sparkles,
  ChevronRight,
  ExternalLink,
} from 'lucide-react';
import {
  getSavedProgress,
  subscribeProgress,
  getTodayKey,
  incrementTodaySeconds,
  resetTodaySeconds,
  addTodaySeconds,
  formatStudyTime,
  calculateStreak,
  emptyProgress,
  getDailyGoalMinutes,
} from '@/lib/studyTimeService';
import {
  WordItem,
  getSavedDecks,
  subscribeDecks,
  addWordToDeck,
  getOrCreateDefaultDeck,
  updateWordReview,
} from '@/lib/vocabService';
import {
  LifeData,
  LifeTask,
  defaultLifeData,
  getSavedLifeData,
  saveLifeData,
  subscribeLifeData,
  formatTaskTime,
  getTodayKey as getLifeTodayKey,
  getTomorrowKey,
} from '@/lib/lifeService';

function speak(text: string, lang = 'en') {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text.trim());
  utterance.lang = lang === 'zh' ? 'zh-CN' : 'en-US';
  utterance.rate = lang === 'zh' ? 0.8 : 0.88;
  const voices = window.speechSynthesis.getVoices();
  const voice = voices.find((v) =>
    v.lang.toLowerCase().startsWith(lang === 'zh' ? 'zh' : 'en'),
  );
  if (voice) utterance.voice = voice;
  window.speechSynthesis.speak(utterance);
}

export function QuickActionDock() {
  const router = useRouter();
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  // Store subscriptions
  const progress = useSyncExternalStore(subscribeProgress, getSavedProgress, () => emptyProgress);
  const decks = useSyncExternalStore(subscribeDecks, getSavedDecks, () => []);
  const lifeData = useSyncExternalStore(subscribeLifeData, getSavedLifeData, () => defaultLifeData);

  // Dock state
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'stopwatch' | 'vocab' | 'todo'>('stopwatch');

  // Stopwatch state
  const [isRunning, setIsRunning] = useState(false);

  // Vocab state
  const [vocabTerm, setVocabTerm] = useState('');
  const [vocabMeaning, setVocabMeaning] = useState('');
  const [vocabExample, setVocabExample] = useState('');
  const [vocabTargetDeckId, setVocabTargetDeckId] = useState<number>(0);
  const [vocabAddedSuccess, setVocabAddedSuccess] = useState(false);

  // Todo state
  const [selectedDate, setSelectedDate] = useState<string>(getLifeTodayKey());
  const [newTodoTitle, setNewTodoTitle] = useState('');
  const [newTodoTime, setNewTodoTime] = useState('');

  // Synchronize target deck
  useEffect(() => {
    if (decks.length > 0 && vocabTargetDeckId === 0) {
      setVocabTargetDeckId(decks[0].id);
    }
  }, [decks, vocabTargetDeckId]);

  // Stopwatch interval
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isRunning) {
      interval = setInterval(() => {
        incrementTodaySeconds(1);
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning]);

  if (!mounted) return null;

  const todayKey = getTodayKey();
  const todaySeconds = progress.dailySeconds[todayKey] ?? 0;
  const streak = calculateStreak(progress);
  const todayMinutes = Math.floor(todaySeconds / 60);
  const dailyGoalMinutes = getDailyGoalMinutes(progress);
  const dailyGoalSeconds = dailyGoalMinutes * 60;
  const todayProgressPercent = Math.min(100, Math.round((todaySeconds / dailyGoalSeconds) * 100));

  // Current tasks for selected date
  const currentTasks = lifeData.dailyTasks?.[selectedDate] || [];

  // Handle Quick Vocab Add
  const handleAddVocab = (e: React.FormEvent) => {
    e.preventDefault();
    if (!vocabTerm.trim() || !vocabMeaning.trim()) return;

    let deckId = vocabTargetDeckId;
    if (deckId === 0) {
      const defaultDeck = getOrCreateDefaultDeck();
      deckId = defaultDeck.id;
    }

    addWordToDeck(deckId, {
      term: vocabTerm.trim(),
      meaning: vocabMeaning.trim(),
      example: vocabExample.trim() || undefined,
    });

    setVocabTerm('');
    setVocabMeaning('');
    setVocabExample('');
    setVocabAddedSuccess(true);
    setTimeout(() => setVocabAddedSuccess(false), 2500);
  };

  // Handle Quick Todo Add
  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTodoTitle.trim()) return;

    const newTask: LifeTask = {
      id: String(Date.now()),
      text: newTodoTitle.trim(),
      done: false,
      startTime: newTodoTime || undefined,
      timeRange: newTodoTime ? `lúc ${newTodoTime}` : undefined,
    };

    const updatedTasks = [...currentTasks, newTask];
    const newLifeData: LifeData = {
      ...lifeData,
      dailyTasks: {
        ...(lifeData.dailyTasks || {}),
        [selectedDate]: updatedTasks,
      },
    };
    saveLifeData(newLifeData);
    setNewTodoTitle('');
    setNewTodoTime('');
  };

  const toggleTodoDone = (taskId: string) => {
    const updatedTasks = currentTasks.map((t) =>
      t.id === taskId ? { ...t, done: !t.done } : t
    );
    saveLifeData({
      ...lifeData,
      dailyTasks: {
        ...(lifeData.dailyTasks || {}),
        [selectedDate]: updatedTasks,
      },
    });
  };

  const deleteTodo = (taskId: string) => {
    const updatedTasks = currentTasks.filter((t) => t.id !== taskId);
    saveLifeData({
      ...lifeData,
      dailyTasks: {
        ...(lifeData.dailyTasks || {}),
        [selectedDate]: updatedTasks,
      },
    });
  };

  return (
    <aside aria-label="Bảng tiện ích nhanh" className="fixed bottom-20 right-4 lg:bottom-6 lg:right-6 z-40 select-none">
      {/* Expanded Dock Card */}
      {isOpen ? (
        <div className="w-[360px] sm:w-[390px] max-w-[calc(100vw-2rem)] rounded-3xl border border-[#14362d]/10 bg-white/95 backdrop-blur-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
          {/* Header & Tabs */}
          <div className="flex items-center justify-between border-b border-[#14362d]/8 bg-[#faf8f5]/80 px-3 py-2.5">
            <div className="flex items-center gap-1">
              <button
                onClick={() => setActiveTab('stopwatch')}
                className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-black transition-all ${
                  activeTab === 'stopwatch'
                    ? 'bg-[#14362d] text-white shadow-sm'
                    : 'text-[#637770] hover:bg-[#14362d]/5'
                }`}
              >
                <Timer size={13} className={activeTab === 'stopwatch' ? 'text-[#f59e0b]' : ''} />
                <span>Bấm giờ</span>
              </button>

              <button
                onClick={() => setActiveTab('vocab')}
                className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-black transition-all ${
                  activeTab === 'vocab'
                    ? 'bg-[#14362d] text-white shadow-sm'
                    : 'text-[#637770] hover:bg-[#14362d]/5'
                }`}
              >
                <BookOpen size={13} className={activeTab === 'vocab' ? 'text-[#f59e0b]' : ''} />
                <span>Tra từ</span>
              </button>

              <button
                onClick={() => setActiveTab('todo')}
                className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-black transition-all ${
                  activeTab === 'todo'
                    ? 'bg-[#14362d] text-white shadow-sm'
                    : 'text-[#637770] hover:bg-[#14362d]/5'
                }`}
              >
                <ListTodo size={13} className={activeTab === 'todo' ? 'text-[#f59e0b]' : ''} />
                <span>Việc làm</span>
              </button>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="flex size-7 items-center justify-center rounded-full text-[#637770] hover:bg-black/5 hover:text-[#14362d]"
              aria-label="Thu nhỏ"
            >
              <Minimize2 size={15} />
            </button>
          </div>

          {/* Tab 1: Stopwatch / Timer */}
          {activeTab === 'stopwatch' && (
            <div className="p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-black uppercase tracking-wider text-[#637770]">
                  Thời gian học hôm nay
                </span>
                <div className="flex items-center gap-1 rounded-full bg-[#fef3c7] px-2.5 py-0.5 text-[11px] font-black text-[#92400e]">
                  <Flame size={13} className="text-[#f59e0b] fill-[#f59e0b]" />
                  <span>{streak} ngày liên tiếp</span>
                </div>
              </div>

              {/* Big Digital Clock */}
              <div className="text-center my-3">
                <div className="font-display text-4xl font-black tracking-tight text-[#14362d]">
                  {formatStudyTime(todaySeconds).formattedShort}
                </div>
                <div className="mt-2 text-xs font-bold text-[#637770]">
                  {todaySeconds >= dailyGoalSeconds ? (
                    <span className="text-emerald-700 font-extrabold flex items-center justify-center gap-1">
                      <Check size={14} /> Đã hoàn thành {dailyGoalMinutes} phút hôm nay!
                    </span>
                  ) : (
                    <span>Mục tiêu: {todayMinutes}/{dailyGoalMinutes} phút</span>
                  )}
                </div>
              </div>

              {/* Progress Bar */}
              <div className="h-2 w-full rounded-full bg-[#f0ebe1] overflow-hidden mb-4">
                <div
                  className="h-full bg-gradient-to-r from-[#10b981] to-[#f59e0b] transition-all duration-300 rounded-full"
                  style={{ width: `${todayProgressPercent}%` }}
                />
              </div>

              {/* Control Buttons */}
              <div className="flex items-center justify-center gap-2 mb-3">
                <button
                  onClick={() => setIsRunning(!isRunning)}
                  className={`flex flex-1 items-center justify-center gap-2 rounded-2xl py-2.5 px-4 text-xs font-black text-white shadow-sm transition-all active:scale-95 ${
                    isRunning
                      ? 'bg-amber-600 hover:bg-amber-700'
                      : 'bg-[#14362d] hover:bg-[#1c4a3e]'
                  }`}
                >
                  {isRunning ? <Pause size={16} /> : <Play size={16} />}
                  <span>{isRunning ? 'Tạm dừng' : 'Bắt đầu học'}</span>
                </button>

                <button
                  onClick={() => {
                    if (confirm('Đặt lại thời gian học hôm nay về 0?')) {
                      resetTodaySeconds();
                      setIsRunning(false);
                    }
                  }}
                  className="flex size-10 items-center justify-center rounded-2xl border border-gray-200 text-[#637770] hover:bg-gray-50 active:scale-95"
                  title="Đặt lại về 0"
                >
                  <RotateCcw size={15} />
                </button>
              </div>

              {/* Quick Add Presets */}
              <div className="flex items-center justify-between gap-1.5 pt-2 border-t border-gray-100">
                <span className="text-[11px] font-bold text-[#637770]">Thêm nhanh:</span>
                <div className="flex items-center gap-1">
                  {[5, 10, 15].map((mins) => (
                    <button
                      key={mins}
                      onClick={() => addTodaySeconds(mins * 60)}
                      className="rounded-lg bg-[#f4f8f5] px-2 py-1 text-[11px] font-black text-[#14362d] hover:bg-[#e9f2ed] active:scale-95 transition-all"
                    >
                      +{mins}p
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Quick Vocab Lookup & Add */}
          {activeTab === 'vocab' && (
            <div className="p-4">
              <form onSubmit={handleAddVocab} className="flex flex-col gap-2.5">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="text-[11px] font-black uppercase text-[#637770]">
                      Từ vựng mới
                    </label>
                    {vocabTerm && (
                      <button
                        type="button"
                        onClick={() => speak(vocabTerm)}
                        className="flex items-center gap-1 text-[11px] font-bold text-[#14362d] hover:underline"
                      >
                        <Volume2 size={12} /> Phát âm
                      </button>
                    )}
                  </div>
                  <input
                    type="text"
                    value={vocabTerm}
                    onChange={(e) => setVocabTerm(e.target.value)}
                    placeholder="e.g. resilient, 苹果..."
                    className="w-full rounded-xl border border-gray-200 bg-[#faf8f5] px-3 py-2 text-xs font-black text-[#14362d] outline-none focus:border-[#14362d] focus:bg-white"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-black uppercase text-[#637770] block mb-1">
                    Nghĩa tiếng Việt
                  </label>
                  <input
                    type="text"
                    value={vocabMeaning}
                    onChange={(e) => setVocabMeaning(e.target.value)}
                    placeholder="e.g. kiên cường, quả táo..."
                    className="w-full rounded-xl border border-gray-200 bg-[#faf8f5] px-3 py-2 text-xs font-black text-[#14362d] outline-none focus:border-[#14362d] focus:bg-white"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-black uppercase text-[#637770] block mb-1">
                    Lưu vào bộ từ
                  </label>
                  <select
                    value={vocabTargetDeckId}
                    onChange={(e) => setVocabTargetDeckId(Number(e.target.value))}
                    className="w-full rounded-xl border border-gray-200 bg-[#faf8f5] px-3 py-2 text-xs font-bold text-[#14362d] outline-none"
                  >
                    {decks.map((deck) => (
                      <option key={deck.id} value={deck.id}>
                        {deck.emoji} {deck.name} ({deck.words.length} từ)
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={!vocabTerm.trim() || !vocabMeaning.trim()}
                  className="mt-1 flex items-center justify-center gap-1.5 rounded-xl bg-[#14362d] py-2.5 text-xs font-black text-white hover:bg-[#1c4a3e] disabled:opacity-40 transition-all active:scale-95"
                >
                  <Plus size={15} />
                  <span>Lưu từ vựng</span>
                </button>

                {vocabAddedSuccess && (
                  <p className="text-center text-xs font-extrabold text-emerald-700 animate-in fade-in">
                    ✓ Đã thêm từ vựng thành công!
                  </p>
                )}
              </form>
            </div>
          )}

          {/* Tab 3: Quick To-Do List */}
          {activeTab === 'todo' && (
            <div className="p-4">
              {/* Date Selector */}
              <div className="flex items-center justify-between mb-3 bg-[#faf8f5] p-1 rounded-xl">
                <button
                  type="button"
                  onClick={() => setSelectedDate(getLifeTodayKey())}
                  className={`flex-1 rounded-lg py-1 text-center text-xs font-black transition-all ${
                    selectedDate === getLifeTodayKey()
                      ? 'bg-white text-[#14362d] shadow-sm'
                      : 'text-[#637770]'
                  }`}
                >
                  Hôm nay
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedDate(getTomorrowKey())}
                  className={`flex-1 rounded-lg py-1 text-center text-xs font-black transition-all ${
                    selectedDate === getTomorrowKey()
                      ? 'bg-white text-[#14362d] shadow-sm'
                      : 'text-[#637770]'
                  }`}
                >
                  Ngày mai
                </button>
              </div>

              {/* Task List */}
              <div className="max-h-48 overflow-y-auto space-y-1.5 pr-1 mb-3">
                {currentTasks.length > 0 ? (
                  currentTasks.map((task) => (
                    <div
                      key={task.id}
                      className="group flex items-center justify-between rounded-xl border border-gray-100 bg-[#faf8f5] p-2 hover:bg-white hover:shadow-sm transition-all"
                    >
                      <button
                        onClick={() => toggleTodoDone(task.id)}
                        className="flex items-center gap-2 text-left min-w-0 flex-1"
                      >
                        <div
                          className={`flex size-4 items-center justify-center rounded-md border transition-all ${
                            task.done
                              ? 'border-emerald-600 bg-emerald-600 text-white'
                              : 'border-gray-300'
                          }`}
                        >
                          {task.done && <Check size={11} strokeWidth={3} />}
                        </div>
                        <span
                          className={`text-xs font-bold truncate ${
                            task.done ? 'text-gray-400 line-through' : 'text-[#14362d]'
                          }`}
                        >
                          {task.text}
                        </span>
                      </button>

                      <div className="flex items-center gap-1.5">
                        {formatTaskTime(task) && (
                          <span className="text-[10px] font-bold text-[#637770] bg-white px-1.5 py-0.5 rounded-md border border-gray-200">
                            {formatTaskTime(task)}
                          </span>
                        )}
                        <button
                          onClick={() => deleteTodo(task.id)}
                          className="text-gray-300 hover:text-rose-600 p-0.5"
                          title="Xóa task"
                        >
                          <Trash2 size={13} />
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-center py-4 text-xs font-bold text-gray-400">
                    Chưa có việc nào cần làm.
                  </p>
                )}
              </div>

              {/* Add Task Form */}
              <form onSubmit={handleAddTodo} className="flex items-center gap-1.5">
                <input
                  type="text"
                  value={newTodoTitle}
                  onChange={(e) => setNewTodoTitle(e.target.value)}
                  placeholder="Thêm việc mới..."
                  className="flex-1 rounded-xl border border-gray-200 bg-[#faf8f5] px-3 py-1.5 text-xs font-bold text-[#14362d] outline-none focus:border-[#14362d] focus:bg-white"
                />
                <input
                  type="time"
                  value={newTodoTime}
                  onChange={(e) => setNewTodoTime(e.target.value)}
                  className="w-20 rounded-xl border border-gray-200 bg-[#faf8f5] px-2 py-1.5 text-[11px] font-bold text-[#14362d] outline-none"
                />
                <button
                  type="submit"
                  disabled={!newTodoTitle.trim()}
                  className="rounded-xl bg-[#14362d] p-2 text-white hover:bg-[#1c4a3e] disabled:opacity-40"
                >
                  <Plus size={15} />
                </button>
              </form>
            </div>
          )}
        </div>
      ) : (
        /* Collapsed Floating Capsule (Quick Island) */
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-2.5 rounded-full border border-[#14362d]/10 bg-white/95 px-3.5 py-2 shadow-lg backdrop-blur-md transition-all hover:scale-105 hover:shadow-xl active:scale-95 group text-left"
          >
            <div className="relative">
              <div
                className={`flex size-7 items-center justify-center rounded-full transition-colors ${
                  isRunning ? 'bg-amber-500 text-white animate-pulse' : 'bg-[#14362d] text-[#f59e0b]'
                }`}
              >
                <Timer size={15} />
              </div>
              {isRunning && (
                <span className="absolute -top-0.5 -right-0.5 size-2 rounded-full bg-emerald-500 animate-ping" />
              )}
            </div>

            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-black text-[#14362d]">
                  {formatStudyTime(todaySeconds).formattedShort}
                </span>
                <span className="text-[10px] font-bold text-[#f59e0b] bg-[#fef3c7] px-1.5 py-0.2 rounded-full">
                  🔥 {streak}
                </span>
              </div>
            </div>

            <div className="flex size-6 items-center justify-center rounded-full bg-[#faf8f5] text-[#14362d] group-hover:bg-[#14362d] group-hover:text-white transition-colors">
              <Maximize2 size={11} />
            </div>
          </button>
        </div>
      )}
    </aside>
  );
}
