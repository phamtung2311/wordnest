// Logic chấm điểm & lịch sử dùng chung cho 2 exam runner
// (TOEIC Reading Part 5-7 và Listening Part 1-4).
//
// Runner chỉ giữ UI; việc so đáp án, chia điểm theo part và ghi lịch sử
// nằm ở đây để có thể kiểm tra bằng unit test (tests/examGrading.test.ts).

export interface PartStats {
  correct: number;
  total: number;
}

/** Một phần (part) của đề, cùng khoảng câu hỏi và tổng số câu. */
export interface PartBucket {
  name: string; // 'part1'..'part7'
  from: number; // số câu bắt đầu (kèm)
  to: number; // số câu kết thúc (kèm)
  total: number;
}

export interface GradeResult {
  totalCorrect: number;
  /** Điểm từng part, key là PartBucket.name. */
  parts: Record<string, PartStats>;
}

export interface PartialResult {
  answered: number;
  correct: number;
  parts: Record<string, PartStats>;
}

export interface ExamHistoryEntry {
  testId: string;
  score: number;
  date: string;
}

export const READING_PART_BUCKETS: PartBucket[] = [
  { name: 'part5', from: 101, to: 130, total: 30 },
  { name: 'part6', from: 131, to: 146, total: 16 },
  { name: 'part7', from: 147, to: 200, total: 54 },
];

export const READING_QUESTION_RANGE = { first: 101, last: 200 };

export const LISTENING_PART_BUCKETS: PartBucket[] = [
  { name: 'part1', from: 1, to: 6, total: 6 },
  { name: 'part2', from: 7, to: 31, total: 25 },
  { name: 'part3', from: 32, to: 70, total: 39 },
  { name: 'part4', from: 71, to: 100, total: 30 },
];

export const LISTENING_QUESTION_RANGE = { first: 1, last: 100 };

function buildParts(buckets: PartBucket[]): Record<string, PartStats> {
  const parts: Record<string, PartStats> = {};
  for (const b of buckets) parts[b.name] = { correct: 0, total: b.total };
  return parts;
}

function bucketFor(buckets: PartBucket[], q: number): PartBucket | undefined {
  return buckets.find((b) => q >= b.from && q <= b.to);
}

/**
 * Chấm toàn bộ đề: so từng câu trong range với answer key,
 * cộng điểm đúng vào từng part (theo buckets).
 */
export function gradeAnswers(
  answers: Record<number, string | undefined>,
  key: Record<string, string>,
  buckets: PartBucket[],
  range: { first: number; last: number },
): GradeResult {
  const parts = buildParts(buckets);
  let totalCorrect = 0;
  for (let i = range.first; i <= range.last; i++) {
    if (answers[i] !== key[String(i)]) continue;
    totalCorrect++;
    const bucket = bucketFor(buckets, i);
    if (bucket) parts[bucket.name].correct++;
  }
  return { totalCorrect, parts };
}

/**
 * Chấm một phần (đang làm dở): chỉ đếm các câu đã chọn trong answers,
 * cho ra % đúng theo từng part — dùng cho chế độ "Kiểm tra một phần".
 */
export function checkPartialAnswers(
  answers: Record<number, string>,
  key: Record<string, string>,
  buckets: PartBucket[],
): PartialResult {
  const parts = buildParts(buckets);
  let answered = 0;
  let correct = 0;
  for (const [qStr, ans] of Object.entries(answers)) {
    answered++;
    const qNum = Number(qStr);
    if (key[qStr] !== ans) continue;
    correct++;
    const bucket = bucketFor(buckets, qNum);
    if (bucket) parts[bucket.name].correct++;
  }
  return { answered, correct, parts };
}

/** Ghi thêm 1 lần thi vào lịch sử (giữ tối đa `maxEntries` mục mới nhất). */
export function recordExamHistory(
  storageKey: string,
  testId: string,
  score: number,
  maxEntries = 50,
): void {
  if (typeof window === 'undefined') return;
  try {
    const historyStr = localStorage.getItem(storageKey);
    const history: ExamHistoryEntry[] = historyStr ? JSON.parse(historyStr) : [];
    history.unshift({ testId, score, date: new Date().toISOString() });
    localStorage.setItem(storageKey, JSON.stringify(history.slice(0, maxEntries)));
  } catch {}
}

/** Đọc lịch sử thi đã lưu (dùng trong trang chọn đề). */
export function readExamHistory(storageKey: string): ExamHistoryEntry[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(storageKey);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}
