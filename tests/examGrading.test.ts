// Unit tests cho lib/examGrading.ts — chạy bằng node built-in test runner
// (không cần framework):  `node tests/examGrading.test.ts`
import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  gradeAnswers,
  checkPartialAnswers,
  recordExamHistory,
  readExamHistory,
  READING_PART_BUCKETS,
  READING_QUESTION_RANGE,
  LISTENING_PART_BUCKETS,
  LISTENING_QUESTION_RANGE,
} from '../lib/examGrading.ts';

// ---------- helpers ----------
function readingKey(override: Record<string, string> = {}): Record<string, string> {
  const key: Record<string, string> = {};
  const pattern = ['A', 'B', 'C', 'D'];
  for (let i = 101; i <= 200; i++) key[String(i)] = pattern[i % 4];
  return { ...key, ...override };
}

function listeningKey(override: Record<string, string> = {}): Record<string, string> {
  const key: Record<string, string> = {};
  const pattern = ['B', 'C', 'D', 'A'];
  for (let i = 1; i <= 100; i++) key[String(i)] = pattern[i % 4];
  return { ...key, ...override };
}

function answersAllCorrectReading(key: Record<string, string>): Record<number, string> {
  const answers: Record<number, string> = {};
  for (let i = 101; i <= 200; i++) answers[i] = key[String(i)];
  return answers;
}

// ---------- gradeAnswers ----------

test('gradeAnswers: all correct → 100/100, parts match totals', () => {
  const key = readingKey();
  const r = gradeAnswers(answersAllCorrectReading(key), key, READING_PART_BUCKETS, READING_QUESTION_RANGE);
  assert.equal(r.totalCorrect, 100);
  assert.deepEqual(r.parts, {
    part5: { correct: 30, total: 30 },
    part6: { correct: 16, total: 16 },
    part7: { correct: 54, total: 54 },
  });
});

test('gradeAnswers: no answers → 0/100, zero part counts', () => {
  const r = gradeAnswers({}, readingKey(), READING_PART_BUCKETS, READING_QUESTION_RANGE);
  assert.equal(r.totalCorrect, 0);
  assert.equal(r.parts.part5.correct, 0);
  assert.equal(r.parts.part7.total, 54);
});

test('gradeAnswers: only q101 correct → part5 gets it, not part6/7', () => {
  const key = readingKey();
  const r = gradeAnswers({ 101: key['101'] }, key, READING_PART_BUCKETS, READING_QUESTION_RANGE);
  assert.equal(r.totalCorrect, 1);
  assert.equal(r.parts.part5.correct, 1);
  assert.equal(r.parts.part6.correct, 0);
});

test('gradeAnswers: boundary questions land in the right part', () => {
  const key = readingKey();
  const r = gradeAnswers({ 130: key['130'], 131: key['131'], 146: key['146'], 147: key['147'], 200: key['200'] }, key, READING_PART_BUCKETS, READING_QUESTION_RANGE);
  assert.equal(r.totalCorrect, 5);
  assert.equal(r.parts.part5.correct, 1); // q130
  assert.equal(r.parts.part6.correct, 2); // q131 + q146
  assert.equal(r.parts.part7.correct, 2); // q147 + q200
});

test('gradeAnswers: wrong option is not counted', () => {
  const key = readingKey({ '101': 'A' });
  const r = gradeAnswers({ 101: 'B' }, key, READING_PART_BUCKETS, READING_QUESTION_RANGE);
  assert.equal(r.totalCorrect, 0);
});

test('gradeAnswers: listening all-correct respects part1..4 totals (6/25/39/30)', () => {
  const key = listeningKey();
  const answers: Record<number, string> = {};
  for (let i = 1; i <= 100; i++) answers[i] = key[String(i)];
  const r = gradeAnswers(answers, key, LISTENING_PART_BUCKETS, LISTENING_QUESTION_RANGE);
  assert.equal(r.totalCorrect, 100);
  assert.deepEqual(r.parts, {
    part1: { correct: 6, total: 6 },
    part2: { correct: 25, total: 25 },
    part3: { correct: 39, total: 39 },
    part4: { correct: 30, total: 30 },
  });
});

test('gradeAnswers: listening boundaries (q6/q7, q31/q32, q70/q71, q100)', () => {
  const key = listeningKey();
  const r = gradeAnswers({ 6: key['6'], 7: key['7'], 31: key['31'], 32: key['32'], 70: key['70'], 71: key['71'], 100: key['100'] }, key, LISTENING_PART_BUCKETS, LISTENING_QUESTION_RANGE);
  assert.equal(r.totalCorrect, 7);
  assert.equal(r.parts.part1.correct, 1);
  assert.equal(r.parts.part2.correct, 2);
  assert.equal(r.parts.part3.correct, 2);
  assert.equal(r.parts.part4.correct, 2);
});

test('gradeAnswers: out-of-range answers (e.g. q5 in reading) are ignored', () => {
  const key = readingKey();
  const answers = answersAllCorrectReading(key);
  answers[5] = key['5']; // reading key không có q5, nhưng answers có
  const r = gradeAnswers(answers, key, READING_PART_BUCKETS, READING_QUESTION_RANGE);
  assert.equal(r.totalCorrect, 100); // q5 không thuộc range 101-200
});

// ---------- checkPartialAnswers ----------

test('checkPartialAnswers: counts only selected answers', () => {
  const key = readingKey();
  const answers: Record<number, string> = {
    101: key['101'],
    102: key['102'],
    131: 'X', // sai (không phải A/B/C/D)
    147: key['147'],
  };
  const r = checkPartialAnswers(answers, key, READING_PART_BUCKETS);
  assert.equal(r.answered, 4);
  assert.equal(r.correct, 3);
  assert.equal(r.parts.part5.correct, 2);
  assert.equal(r.parts.part6.correct, 0);
  assert.equal(r.parts.part7.correct, 1);
});

test('checkPartialAnswers: empty answers → all zeros, totals preserved', () => {
  const r = checkPartialAnswers({}, readingKey(), READING_PART_BUCKETS);
  assert.equal(r.answered, 0);
  assert.equal(r.correct, 0);
  assert.equal(r.parts.part7.total, 54);
});

test('checkPartialAnswers: question number as string key still works', () => {
  // Runner lưu answers với key số nhưng JSON stringified → parse về có thể là string key
  const key = listeningKey();
  const r = checkPartialAnswers({ 1: key['1'], 2: key['2'], 7: key['7'] }, key, LISTENING_PART_BUCKETS);
  assert.equal(r.correct, 3);
  assert.equal(r.parts.part1.correct, 2);
  assert.equal(r.parts.part2.correct, 1);
});

// ---------- history (pure parts) ----------

test('recordExamHistory/readExamHistory: run on Node without window → no-op, safe', () => {
  assert.doesNotThrow(() => recordExamHistory('x', '1', 10));
  assert.deepEqual(readExamHistory('x'), []);
});
