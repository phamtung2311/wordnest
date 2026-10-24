import { auth, db } from '@/lib/firebase';
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';

export interface LifeTask {
  id: string;
  text: string;
  done: boolean;
  startTime?: string; // e.g. "22:00" or "22h"
  endTime?: string;   // e.g. "23:00" or "23h"
  timeRange?: string; // e.g. "22:00 - 23:00" or "22h-23h"
}

export type Habit = { id: string; name: string; emoji: string; doneDates: string[] };
export type Expense = {
  id: string;
  name: string;
  amount: number;
  budgetId: string;
  note: string;
  date: string;
};
export type Income = {
  id: string;
  name: string;
  amount: number;
  source: string;
  note: string;
  date: string;
};
export type Budget = { id: string; name: string; limit: number };
export type Note = {
  id: string;
  title: string;
  content: string;
  createdAt: number;
  updatedAt: number;
};

export interface LifeData {
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
}

export const defaultLifeData: LifeData = {
  habits: [
    { id: 'water', name: 'Uống đủ 2L nước', emoji: '💧', doneDates: [] },
    { id: 'read', name: 'Đọc 10 trang sách', emoji: '📖', doneDates: [] },
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

export function dateKey(date = new Date()): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export function getTodayKey(): string {
  return dateKey(new Date());
}

export function getTomorrowKey(): string {
  return dateKey(new Date(Date.now() + 86400000));
}

export function formatShortDate(dateStr: string): string {
  try {
    const parts = dateStr.split('-');
    if (parts.length === 3) {
      return `${parts[2]}/${parts[1]}`;
    }
  } catch {}
  return dateStr;
}

export function formatDateLabel(date: string): string {
  try {
    return new Intl.DateTimeFormat('vi-VN', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(new Date(`${date}T12:00:00`));
  } catch {
    return date;
  }
}

export function formatTaskTime(task: {
  timeRange?: string;
  startTime?: string;
  endTime?: string;
}): string {
  if (task.timeRange && task.timeRange.trim()) {
    return task.timeRange.trim();
  }
  if (task.startTime && task.endTime) {
    return `${task.startTime} - ${task.endTime}`;
  }
  if (task.startTime) {
    return `từ ${task.startTime}`;
  }
  if (task.endTime) {
    return `đến ${task.endTime}`;
  }
  return '';
}

export function normalizeLifeData(incoming: Partial<LifeData>): LifeData {
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

let cachedLifeRaw: string | null = null;
let cachedLifeData: LifeData = defaultLifeData;

export function getSavedLifeData(): LifeData {
  if (typeof window === 'undefined') return defaultLifeData;
  try {
    const raw = localStorage.getItem('wordnest-life');
    if (raw === cachedLifeRaw && cachedLifeData) {
      return cachedLifeData;
    }
    if (raw) {
      cachedLifeRaw = raw;
      cachedLifeData = normalizeLifeData(JSON.parse(raw));
      return cachedLifeData;
    }
    cachedLifeRaw = null;
    cachedLifeData = defaultLifeData;
    return defaultLifeData;
  } catch (e) {
    console.error('Error reading wordnest-life', e);
  }
  return defaultLifeData;
}

export function saveLifeData(data: LifeData): void {
  if (typeof window === 'undefined') return;
  try {
    const serialized = JSON.stringify(data);
    cachedLifeRaw = serialized;
    cachedLifeData = data;
    localStorage.setItem('wordnest-life', serialized);
    window.dispatchEvent(
      new CustomEvent('wordnest-life-updated', { detail: data }),
    );
    if (auth.currentUser) {
      void setDoc(
        doc(db, 'users', auth.currentUser.uid),
        {
          lifeData: data,
          updatedAt: serverTimestamp(),
        },
        { merge: true },
      ).catch((err) => console.error('Firestore lifeData sync error', err));
    }
  } catch (e) {
    console.error('Error saving wordnest-life', e);
  }
}

export function updateDailyTasks(date: string, tasks: LifeTask[]): LifeData {
  const current = getSavedLifeData();
  const next: LifeData = {
    ...current,
    dailyTasks: {
      ...current.dailyTasks,
      [date]: tasks,
    },
  };
  saveLifeData(next);
  return next;
}

export function subscribeLifeData(callback: () => void): () => void {
  if (typeof window === 'undefined') return () => {};
  window.addEventListener('wordnest-life-updated', callback);
  window.addEventListener('storage', callback);
  return () => {
    window.removeEventListener('wordnest-life-updated', callback);
    window.removeEventListener('storage', callback);
  };
}

