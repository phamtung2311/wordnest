// Index đề thi Luyện nghe chi tiết.
//
// `availableIntensiveTests` chứa DUY NHẤT metadata nhẹ (tiêu đề, edition, itemCount)
// để UI (selector, sidebar) không phải tải trước 30 file dữ liệu ~6MB.
// Nội dung từng đề được nạp theo yêu cầu (lazy) qua `loadIntensiveDataByTestId` — Vite tự
// code-split mỗi file data thành 1 chunk riêng, chỉ tải khi người dùng mở đề đó.
import type { IntensiveListeningItem, IntensiveTestMeta } from './intensive_listening_types';
import { intensiveTests2024 } from './intensive_listening_2024_list';
import { intensiveTests2023 } from './intensive_listening_2023_list';

export type {
  DialogueLine,
  QuestionOption,
  QuestionItem,
  VocabItem,
  IntensiveListeningItem,
  IntensiveTestMeta,
} from './intensive_listening_types';

export const availableIntensiveTests: IntensiveTestMeta[] = [
  {
    id: 1,
    title: 'ETS TOEIC 2026 - Test 1',
    shortTitle: 'Test 1',
    description: 'Luyện nghe chi tiết Test 1 (Part 1 - 4)',
    edition: 'ETS 2026',
    badge: 'T1',
    itemCount: 54,
  },
  {
    id: 2,
    title: 'ETS TOEIC 2026 - Test 2',
    shortTitle: 'Test 2',
    description: 'Luyện nghe chi tiết Test 2 (Part 1 - 4)',
    edition: 'ETS 2026',
    badge: 'T2',
    itemCount: 54,
  },
  {
    id: 3,
    title: 'ETS TOEIC 2026 - Test 3',
    shortTitle: 'Test 3',
    description: 'Luyện nghe chi tiết Test 3 (Part 1 - 4)',
    edition: 'ETS 2026',
    badge: 'T3',
    itemCount: 54,
  },
  {
    id: 4,
    title: 'ETS TOEIC 2026 - Test 4',
    shortTitle: 'Test 4',
    description: 'Luyện nghe chi tiết Test 4 (Part 1 - 4)',
    edition: 'ETS 2026',
    badge: 'T4',
    itemCount: 54,
  },
  {
    id: 5,
    title: 'ETS TOEIC 2026 - Test 5',
    shortTitle: 'Test 5',
    description: 'Luyện nghe chi tiết Test 5 (Part 1 - 4)',
    edition: 'ETS 2026',
    badge: 'T5',
    itemCount: 54,
  },
  {
    id: 6,
    title: 'ETS TOEIC 2026 - Test 6',
    shortTitle: 'Test 6',
    description: 'Luyện nghe chi tiết Test 6 (Part 1 - 4)',
    edition: 'ETS 2026',
    badge: 'T6',
    itemCount: 54,
  },
  {
    id: 7,
    title: 'ETS TOEIC 2026 - Test 7',
    shortTitle: 'Test 7',
    description: 'Luyện nghe chi tiết Test 7 (Part 1 - 4)',
    edition: 'ETS 2026',
    badge: 'T7',
    itemCount: 54,
  },
  {
    id: 8,
    title: 'ETS TOEIC 2026 - Test 8',
    shortTitle: 'Test 8',
    description: 'Luyện nghe chi tiết Test 8 (Part 1 - 4)',
    edition: 'ETS 2026',
    badge: 'T8',
    itemCount: 54,
  },
  {
    id: 9,
    title: 'ETS TOEIC 2026 - Test 9',
    shortTitle: 'Test 9',
    description: 'Luyện nghe chi tiết Test 9 (Part 1 - 4)',
    edition: 'ETS 2026',
    badge: 'T9',
    itemCount: 54,
  },
  {
    id: 10,
    title: 'ETS TOEIC 2026 - Test 10',
    shortTitle: 'Test 10',
    description: 'Luyện nghe chi tiết Test 10 (Part 1 - 4)',
    edition: 'ETS 2026',
    badge: 'T10',
    itemCount: 54,
  },
  ...intensiveTests2024,
  ...intensiveTests2023,
];

// Buggy: key là testId, value là function import động (Vite code-split từng đề)
const loadTestDataById: Record<number, () => Promise<IntensiveListeningItem[]>> = {
  1: () => import('./intensive_listening_test1').then((m) => m.test1IntensiveData),
  2: () => import('./intensive_listening_test2').then((m) => m.test2IntensiveData),
  3: () => import('./intensive_listening_test3').then((m) => m.test3IntensiveData),
  4: () => import('./intensive_listening_test4').then((m) => m.test4IntensiveData),
  5: () => import('./intensive_listening_test5').then((m) => m.test5IntensiveData),
  6: () => import('./intensive_listening_test6').then((m) => m.test6IntensiveData),
  7: () => import('./intensive_listening_test7').then((m) => m.test7IntensiveData),
  8: () => import('./intensive_listening_test8').then((m) => m.test8IntensiveData),
  9: () => import('./intensive_listening_test9').then((m) => m.test9IntensiveData),
  10: () => import('./intensive_listening_test10').then((m) => m.test10IntensiveData),
  20241: () => import('./intensive_listening_2024_test1').then((m) => m.test1_2024_IntensiveData),
  20242: () => import('./intensive_listening_2024_test2').then((m) => m.test2_2024_IntensiveData),
  20243: () => import('./intensive_listening_2024_test3').then((m) => m.test3_2024_IntensiveData),
  20244: () => import('./intensive_listening_2024_test4').then((m) => m.test4_2024_IntensiveData),
  20245: () => import('./intensive_listening_2024_test5').then((m) => m.test5_2024_IntensiveData),
  20246: () => import('./intensive_listening_2024_test6').then((m) => m.test6_2024_IntensiveData),
  20247: () => import('./intensive_listening_2024_test7').then((m) => m.test7_2024_IntensiveData),
  20248: () => import('./intensive_listening_2024_test8').then((m) => m.test8_2024_IntensiveData),
  20249: () => import('./intensive_listening_2024_test9').then((m) => m.test9_2024_IntensiveData),
  202410: () => import('./intensive_listening_2024_test10').then((m) => m.test10_2024_IntensiveData),
  20231: () => import('./intensive_listening_2023_test1').then((m) => m.test1_2023_IntensiveData),
  20232: () => import('./intensive_listening_2023_test2').then((m) => m.test2_2023_IntensiveData),
  20233: () => import('./intensive_listening_2023_test3').then((m) => m.test3_2023_IntensiveData),
  20234: () => import('./intensive_listening_2023_test4').then((m) => m.test4_2023_IntensiveData),
  20235: () => import('./intensive_listening_2023_test5').then((m) => m.test5_2023_IntensiveData),
  20236: () => import('./intensive_listening_2023_test6').then((m) => m.test6_2023_IntensiveData),
  20237: () => import('./intensive_listening_2023_test7').then((m) => m.test7_2023_IntensiveData),
  20238: () => import('./intensive_listening_2023_test8').then((m) => m.test8_2023_IntensiveData),
  20239: () => import('./intensive_listening_2023_test9').then((m) => m.test9_2023_IntensiveData),
  202310: () => import('./intensive_listening_2023_test10').then((m) => m.test10_2023_IntensiveData),
};

export async function loadIntensiveDataByTestId(testId: number): Promise<IntensiveListeningItem[]> {
  const loader = loadTestDataById[testId] ?? loadTestDataById[1];
  return loader();
}
