import { auth, db } from '@/lib/firebase';
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';

export interface StudyProgress {
  dailySeconds: Record<string, number>;
  completedDays?: Record<string, boolean>;
  targetMinutes?: number;
}

export const DEFAULT_GOAL_MINUTES = 10;

export const emptyProgress: StudyProgress = {
  dailySeconds: {},
  completedDays: {},
  targetMinutes: DEFAULT_GOAL_MINUTES,
};

export function getTodayKey(date = new Date()): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

let cachedProgressRaw: string | null = null;
let cachedProgressData: StudyProgress = emptyProgress;
let firestoreSaveTimer: ReturnType<typeof setTimeout> | null = null;

export function getSavedProgress(): StudyProgress {
  if (typeof window === 'undefined') return emptyProgress;
  try {
    const raw = localStorage.getItem('wordnest-progress');
    if (raw === cachedProgressRaw && cachedProgressData) {
      return cachedProgressData;
    }
    if (raw) {
      cachedProgressRaw = raw;
      const parsed = JSON.parse(raw);
      cachedProgressData = {
        dailySeconds: parsed.dailySeconds || {},
        completedDays: parsed.completedDays || {},
        targetMinutes:
          typeof parsed.targetMinutes === 'number' && parsed.targetMinutes > 0
            ? Math.round(parsed.targetMinutes)
            : DEFAULT_GOAL_MINUTES,
      };
      return cachedProgressData;
    }
  } catch (e) {
    console.error('Error reading wordnest-progress', e);
  }
  cachedProgressRaw = null;
  cachedProgressData = emptyProgress;
  return emptyProgress;
}

export function saveProgress(data: StudyProgress, syncToCloud = true): void {
  if (typeof window === 'undefined') return;
  try {
    const serialized = JSON.stringify(data);
    cachedProgressRaw = serialized;
    cachedProgressData = data;
    localStorage.setItem('wordnest-progress', serialized);
    window.dispatchEvent(
      new CustomEvent('wordnest-progress-updated', { detail: data }),
    );

    if (syncToCloud && auth.currentUser) {
      if (firestoreSaveTimer) clearTimeout(firestoreSaveTimer);
      firestoreSaveTimer = setTimeout(() => {
        if (!auth.currentUser) return;
        void setDoc(
          doc(db, 'users', auth.currentUser.uid),
          {
            progress: data,
            updatedAt: serverTimestamp(),
          },
          { merge: true },
        ).catch((err) => console.error('Firestore progress sync error', err));
      }, 5000); // Debounce cloud saves to 5 seconds
    }
  } catch (e) {
    console.error('Error saving wordnest-progress', e);
  }
}

export function getDailyGoalMinutes(progress?: StudyProgress): number {
  const p = progress || getSavedProgress();
  const val = Number(p.targetMinutes);
  return Number.isFinite(val) && val > 0 ? Math.round(val) : DEFAULT_GOAL_MINUTES;
}

export function setDailyGoalMinutes(minutes: number): StudyProgress {
  const current = getSavedProgress();
  const validMinutes = Math.max(1, Math.min(720, Math.round(minutes)));
  const targetSeconds = validMinutes * 60;
  const today = getTodayKey();
  const todaySeconds = current.dailySeconds[today] ?? 0;
  const nextCompletedDays = { ...(current.completedDays || {}) };

  if (todaySeconds >= targetSeconds) {
    nextCompletedDays[today] = true;
  } else {
    delete nextCompletedDays[today];
  }

  const next: StudyProgress = {
    ...current,
    targetMinutes: validMinutes,
    completedDays: nextCompletedDays,
  };

  saveProgress(next);
  return next;
}

export function getTodaySeconds(): number {
  const progress = getSavedProgress();
  return progress.dailySeconds[getTodayKey()] ?? 0;
}

export function incrementTodaySeconds(): StudyProgress {
  const current = getSavedProgress();
  const today = getTodayKey();
  const nextSeconds = (current.dailySeconds[today] ?? 0) + 1;
  const targetSeconds = getDailyGoalMinutes(current) * 60;

  const nextCompletedDays = { ...(current.completedDays || {}) };
  if (nextSeconds >= targetSeconds) {
    nextCompletedDays[today] = true;
  }

  const next: StudyProgress = {
    ...current,
    dailySeconds: {
      ...current.dailySeconds,
      [today]: nextSeconds,
    },
    completedDays: nextCompletedDays,
  };

  saveProgress(next);
  return next;
}

export function resetTodaySeconds(): StudyProgress {
  const current = getSavedProgress();
  const today = getTodayKey();

  const nextDaily = { ...current.dailySeconds };
  delete nextDaily[today];

  const nextCompleted = { ...(current.completedDays || {}) };
  delete nextCompleted[today];

  const next: StudyProgress = {
    ...current,
    dailySeconds: nextDaily,
    completedDays: nextCompleted,
  };

  saveProgress(next);
  return next;
}

export function addTodaySeconds(secondsToAdd: number): StudyProgress {
  const current = getSavedProgress();
  const today = getTodayKey();
  const nextSeconds = Math.max(0, (current.dailySeconds[today] ?? 0) + secondsToAdd);
  const targetSeconds = getDailyGoalMinutes(current) * 60;

  const nextCompletedDays = { ...(current.completedDays || {}) };
  if (nextSeconds >= targetSeconds) {
    nextCompletedDays[today] = true;
  } else {
    delete nextCompletedDays[today];
  }

  const next: StudyProgress = {
    ...current,
    dailySeconds: {
      ...current.dailySeconds,
      [today]: nextSeconds,
    },
    completedDays: nextCompletedDays,
  };

  saveProgress(next);
  return next;
}

export function subscribeProgress(callback: () => void): () => void {
  if (typeof window === 'undefined') return () => {};
  window.addEventListener('wordnest-progress-updated', callback);
  window.addEventListener('storage', callback);
  return () => {
    window.removeEventListener('wordnest-progress-updated', callback);
    window.removeEventListener('storage', callback);
  };
}

export function formatStudyTime(totalSeconds: number) {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const pad = (n: number) => n.toString().padStart(2, '0');

  const formattedShort =
    hours > 0
      ? `${hours}:${pad(minutes)}:${pad(seconds)}`
      : `${pad(minutes)}:${pad(seconds)}`;

  const formattedDetailed =
    hours > 0
      ? `${hours} giờ ${minutes} phút ${seconds} giây`
      : `${minutes} phút ${seconds} giây`;

  return {
    hours,
    minutes,
    seconds,
    formattedShort,
    formattedDetailed,
  };
}

export function updateDateSeconds(dateKey: string, seconds: number): StudyProgress {
  const current = getSavedProgress();
  const nextSeconds = Math.max(0, seconds);
  const targetSeconds = getDailyGoalMinutes(current) * 60;

  const nextCompletedDays = { ...(current.completedDays || {}) };
  if (nextSeconds >= targetSeconds) {
    nextCompletedDays[dateKey] = true;
  } else {
    delete nextCompletedDays[dateKey];
  }

  const nextDaily = { ...current.dailySeconds };
  if (nextSeconds > 0) {
    nextDaily[dateKey] = nextSeconds;
  } else {
    delete nextDaily[dateKey];
  }

  const next: StudyProgress = {
    ...current,
    dailySeconds: nextDaily,
    completedDays: nextCompletedDays,
  };

  saveProgress(next);
  return next;
}

export function calculateStreak(progress: StudyProgress): number {
  const targetSeconds = getDailyGoalMinutes(progress) * 60;
  const isCompleted = (key: string) =>
    (progress.dailySeconds[key] ?? 0) >= targetSeconds || progress.completedDays?.[key] === true;

  const cursor = new Date();
  const todayKey = getTodayKey(cursor);

  // If today isn't completed yet, check if yesterday was completed
  if (!isCompleted(todayKey)) {
    cursor.setDate(cursor.getDate() - 1);
  }

  let streak = 0;
  while (isCompleted(getTodayKey(cursor))) {
    streak += 1;
    cursor.setDate(cursor.getDate() - 1);
  }
  return streak;
}

