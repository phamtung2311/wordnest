import { test1IntensiveData } from './intensive_listening_test1';
import { test2IntensiveData } from './intensive_listening_test2';
import { test3IntensiveData } from './intensive_listening_test3';
import type { IntensiveListeningItem } from './intensive_listening_test1';

export type {
  DialogueLine,
  QuestionOption,
  QuestionItem,
  VocabItem,
  IntensiveListeningItem,
} from './intensive_listening_test1';

export interface IntensiveTestOption {
  id: number;
  title: string;
  shortTitle: string;
  description: string;
  itemCount: number;
  data: IntensiveListeningItem[];
}

export const availableIntensiveTests: IntensiveTestOption[] = [
  {
    id: 1,
    title: 'ETS TOEIC 2026 - Test 1',
    shortTitle: 'Test 1',
    description: 'Luyện nghe chi tiết Test 1 (Part 1 - 4)',
    itemCount: test1IntensiveData.length,
    data: test1IntensiveData,
  },
  {
    id: 2,
    title: 'ETS TOEIC 2026 - Test 2',
    shortTitle: 'Test 2',
    description: 'Luyện nghe chi tiết Test 2 (Part 1 - 4)',
    itemCount: test2IntensiveData.length,
    data: test2IntensiveData,
  },
  {
    id: 3,
    title: 'ETS TOEIC 2026 - Test 3',
    shortTitle: 'Test 3',
    description: 'Luyện nghe chi tiết Test 3 (Part 1 - 4)',
    itemCount: test3IntensiveData.length,
    data: test3IntensiveData,
  },
];

export function getIntensiveDataByTestId(testId: number): IntensiveListeningItem[] {
  const found = availableIntensiveTests.find((t) => t.id === testId);
  return found ? found.data : test1IntensiveData;
}
