import type { IntensiveListeningItem } from '@/data/intensive_listening_test1';

export type PracticeTab = 'quiz' | 'transcript' | 'dictation';

export type PartFilter = 'all' | 1 | 2 | 3 | 4;

export interface IntensiveListeningSettings {
  playbackSpeed: number;
  isLooping: boolean;
  autoAdvance: boolean;
  volume: number;
}

export interface QuizItemResult {
  correct: number;
  total: number;
  isCorrect: boolean;
  answeredAt?: number;
}
