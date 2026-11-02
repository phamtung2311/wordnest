import * as fs from 'fs';
import * as path from 'path';

// 1. Export answer keys for all 30 tests
import { answersData as readingAnswers } from '../data/test_answers';
import { lcAnswersData as listeningAnswers } from '../data/lc_answers';

const assetsDir = path.resolve('android/app/src/main/assets/toeic');
const intensiveDir = path.join(assetsDir, 'intensive');

if (!fs.existsSync(intensiveDir)) {
  fs.mkdirSync(intensiveDir, { recursive: true });
}

// Prepare comprehensive answers map
const fullReadingMap: Record<string, Record<string, string>> = {};
const fullListeningMap: Record<string, Record<string, string>> = {};

// Fill 2026 (keys 1..10)
for (let i = 1; i <= 10; i++) {
  const rKey = String(i);
  if (readingAnswers[rKey]) {
    fullReadingMap[rKey] = readingAnswers[rKey];
    fullReadingMap[`2026_${i}`] = readingAnswers[rKey];
    fullReadingMap[`2026-${i}`] = readingAnswers[rKey];
  }
  if (listeningAnswers[rKey]) {
    fullListeningMap[rKey] = listeningAnswers[rKey];
    fullListeningMap[`2026_${i}`] = listeningAnswers[rKey];
    fullListeningMap[`2026-${i}`] = listeningAnswers[rKey];
  }
}

// Fill 2024 & 2023
for (const year of [2024, 2023]) {
  for (let i = 1; i <= 10; i++) {
    const dashKey = `${year}-${i}`;
    const underKey = `${year}_${i}`;
    if (readingAnswers[dashKey]) {
      fullReadingMap[dashKey] = readingAnswers[dashKey];
      fullReadingMap[underKey] = readingAnswers[dashKey];
    }
    if (listeningAnswers[dashKey]) {
      fullListeningMap[dashKey] = listeningAnswers[dashKey];
      fullListeningMap[underKey] = listeningAnswers[dashKey];
    }
  }
}

fs.writeFileSync(
  path.join(assetsDir, 'answers_reading.json'),
  JSON.stringify(fullReadingMap, null, 2),
  'utf-8'
);
fs.writeFileSync(
  path.join(assetsDir, 'answers_listening.json'),
  JSON.stringify(fullListeningMap, null, 2),
  'utf-8'
);
console.log('✅ Exported answers_reading.json and answers_listening.json with 30 tests.');

// 2. Export 10 tests for ETS 2026 Intensive Listening
async function export2026() {
  for (let i = 1; i <= 10; i++) {
    const mod = await import(`../data/intensive_listening_test${i}`);
    const key = `test${i}IntensiveData`;
    const data = mod[key];
    if (Array.isArray(data)) {
      const jsonContent = JSON.stringify(data);
      fs.writeFileSync(path.join(intensiveDir, `test_2026_${i}.json`), jsonContent, 'utf-8');
      fs.writeFileSync(path.join(intensiveDir, `test_${i}.json`), jsonContent, 'utf-8');
      console.log(`✅ Exported ETS 2026 Test ${i}: ${data.length} items`);
    } else {
      console.error(`❌ Missing data for ETS 2026 Test ${i}`);
    }
  }
}

export2026().then(() => {
  console.log('🎉 Done all 30 tests setup!');
});
