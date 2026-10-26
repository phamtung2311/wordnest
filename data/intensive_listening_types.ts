export interface DialogueLine {
  id: string;
  speaker?: string;
  text: string;
  vietnamese: string;
}

export interface QuestionOption {
  key: 'A' | 'B' | 'C' | 'D';
  text: string;
  vietnamese?: string;
}

export interface QuestionItem {
  num: number;
  question: string;
  vietnameseQuestion?: string;
  options: QuestionOption[];
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  explanation?: string;
  clueText?: string;
  paraphraseGroup?: any;
  [key: string]: any;
}

export interface VocabItem {
  word: string;
  meaning: string;
  partOfSpeech?: string;
  type?: string;
  phonetic?: string;
  example?: string;
  [key: string]: any;
}

export interface IntensiveListeningItem {
  id: string;
  part: 1 | 2 | 3 | 4;
  partTitle: string;
  questionRange: string;
  title: string;
  audioSrc: string;
  startTime?: number; // Mốc giây bắt đầu (vd: 124.5)
  endTime?: number;   // Mốc giây kết thúc (vd: 142.0)
  imageUrl?: string;
  image?: string;
  graphicImage?: string;
  hasGraphic?: boolean;
  transcript: DialogueLine[];
  questions: QuestionItem[];
  vocabulary?: VocabItem[];
}

export interface IntensiveTestOption {
  id: number;
  title: string;
  shortTitle: string;
  description: string;
  edition?: string;
  badge?: string;
  itemCount: number;
  data: IntensiveListeningItem[];
}

