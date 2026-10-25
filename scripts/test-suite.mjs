import assert from 'node:assert';
import fs from 'node:fs';
import path from 'node:path';

console.log('=== WordNest Comprehensive Automated Test Suite ===\n');

// 1. Verify build files in dist/client
console.log('--- Test Group 1: Build Output & Route Prerender Artifacts ---');
const distClient = path.resolve('dist/client');
assert(fs.existsSync(distClient), 'dist/client directory must exist');

const keyRoutes = [
  'index.html',
  'practice-test.html',
  'listening-test.html',
  'study-history.html',
  'intensive-listening.html',
  'practice-test/1.html',
  'listening-test/1.html'
];

for (const route of keyRoutes) {
  const fullPath = path.join(distClient, route);
  assert(fs.existsSync(fullPath), `Prerendered file must exist: ${route}`);
  const html = fs.readFileSync(fullPath, 'utf8');
  assert(html.includes('<html') && html.includes('</html>'), `${route} must contain valid HTML tags`);
  assert(html.length > 500, `${route} size must be non-trivial (got ${html.length} bytes)`);
  console.log(`  ✓ Route validated: ${route} (${(html.length / 1024).toFixed(1)} KB)`);
}

// Check CSS & JS bundles in dist/client/_next/static
const staticDir = path.join(distClient, '_next/static');
assert(fs.existsSync(staticDir), 'dist/client/_next/static must exist');
const cssDir = path.join(staticDir, 'css');
const chunksDir = path.join(staticDir, 'chunks');
assert(fs.existsSync(cssDir), 'CSS directory must exist');
assert(fs.existsSync(chunksDir), 'Chunks directory must exist');
const cssFiles = fs.readdirSync(cssDir).filter(f => f.endsWith('.css'));
const jsFiles = fs.readdirSync(chunksDir).filter(f => f.endsWith('.js'));
assert(cssFiles.length > 0, 'CSS bundle must be produced');
assert(jsFiles.length > 0, 'JS bundles must be produced');
console.log(`  ✓ Assets: ${cssFiles.length} CSS bundle(s), ${jsFiles.length} JS bundle(s)`);

// 2. Test Life Service formatting logic
console.log('\n--- Test Group 2: Life Planner Service Logic ---');
import { formatTaskTime } from '../lib/lifeService.ts';

assert.strictEqual(formatTaskTime({ text: 'No time' }), '', 'Task without time should return empty string');
assert.strictEqual(formatTaskTime({ text: 'Range', timeRange: '08:00 - 09:30' }), '08:00 - 09:30', 'Task with timeRange should match');
assert.strictEqual(formatTaskTime({ text: 'Start/End', startTime: '09:00', endTime: '10:00' }), '09:00 - 10:00', 'Task with start and end should format as range');
assert.strictEqual(formatTaskTime({ text: 'Start only', startTime: '14:00' }), 'từ 14:00', 'Task with start only should format as từ {startTime}');
assert.strictEqual(formatTaskTime({ text: 'End only', endTime: '16:00' }), 'đến 16:00', 'Task with end only should format as đến {endTime}');
console.log('  ✓ formatTaskTime handles all permutations correctly');

// 3. Test Study Time Service calculation logic
console.log('\n--- Test Group 3: Study Time Service Calculation ---');
import { formatStudyTime, calculateStreak, getTodayKey, getDailyGoalMinutes, setDailyGoalMinutes } from '../lib/studyTimeService.ts';

const zeroTime = formatStudyTime(0);
assert.strictEqual(zeroTime.formattedShort, '00:00');
assert.strictEqual(zeroTime.formattedDetailed, '0 phút 0 giây');

const minSec = formatStudyTime(65);
assert.strictEqual(minSec.formattedShort, '01:05');
assert.strictEqual(minSec.formattedDetailed, '1 phút 5 giây');

const hourMinSec = formatStudyTime(3665);
assert.strictEqual(hourMinSec.formattedShort, '1:01:05');
assert.strictEqual(hourMinSec.formattedDetailed, '1 giờ 1 phút 5 giây');

const todayStr = getTodayKey();
assert(/^\d{4}-\d{2}-\d{2}$/.test(todayStr), 'Today key must be YYYY-MM-DD');

// Test Streak calculation
const testProgress = {
  dailySeconds: {
    [todayStr]: 650, // >= 600 means completed
  },
  completedDays: {
    [todayStr]: true,
  }
};
assert.strictEqual(calculateStreak(testProgress), 1, 'Streak should be 1');

// Test Customizable Daily Goal
assert.strictEqual(getDailyGoalMinutes(), 10, 'Default goal should be 10 minutes');
const pCustomGoal = setDailyGoalMinutes(20);
assert.strictEqual(getDailyGoalMinutes(pCustomGoal), 20, 'Goal should be updated to 20 minutes');
assert.strictEqual(pCustomGoal.targetMinutes, 20);
setDailyGoalMinutes(10); // Restore to default 10
assert.strictEqual(getDailyGoalMinutes(), 10);
console.log(`  ✓ formatStudyTime, calculateStreak & customizable daily goal validated (Today: ${todayStr})`);

// 4. Test TOEIC Practice & Listening Test Data Integrity
console.log('\n--- Test Group 4: TOEIC Practice & Listening Test Data Integrity ---');
const dataDir = path.resolve('data');
assert(fs.existsSync(path.join(dataDir, 'test_answers.ts')), 'test_answers.ts must exist');
assert(fs.existsSync(path.join(dataDir, 'lc_answers.ts')), 'lc_answers.ts must exist');
assert(fs.existsSync(path.join(dataDir, 'intensive_listening_index.ts')), 'intensive_listening_index.ts must exist');

const intensiveTests = fs.readdirSync(dataDir).filter(f => f.startsWith('intensive_listening_test') && f.endsWith('.ts'));
console.log(`  Found ${intensiveTests.length} intensive listening test data files in data/`);
assert.strictEqual(intensiveTests.length, 10, 'Expected exactly 10 intensive listening test files');

for (const it of intensiveTests) {
  const filePath = path.join(dataDir, it);
  const content = fs.readFileSync(filePath, 'utf8');
  assert(content.length > 50000, `${it} must have complete dataset (>50KB)`);
}
console.log('  ✓ Verified test_answers.ts, lc_answers.ts, and all 10 intensive listening datasets');

// 5. Test globals.css styling rules
console.log('\n--- Test Group 5: Modern UI CSS Tokens in globals.css ---');
const globalsCss = fs.readFileSync(path.resolve('app/globals.css'), 'utf8');
assert(globalsCss.includes('--primary: #14362d'), 'globals.css must have modern primary emerald');
assert(globalsCss.includes('--secondary: #f59e0b'), 'globals.css must have amber secondary');
assert(globalsCss.includes('--accent: #e11d48'), 'globals.css must have coral accent');
assert(globalsCss.includes('--background: #faf8f5'), 'globals.css must have clean background canvas');
assert(globalsCss.includes('perspective: 1200px'), 'globals.css must have 3D card perspective');
assert(globalsCss.includes('backface-visibility: hidden;'), 'globals.css must have 3D backface hidden rule');
assert(globalsCss.includes('transform: rotateY(180deg);'), 'globals.css must have 3D card rotation rule');
console.log('  ✓ Verified CSS variables and 3D card flip styles');

// 6. Test Separate Floating Widgets & Navigation Exports
console.log('\n--- Test Group 6: Component Structure & Navigation Exports ---');
const headerContent = fs.readFileSync(path.resolve('components/navigation/AppHeader.tsx'), 'utf8');
assert(headerContent.includes('Word<span className="text-[#f59e0b]">Nest</span>'), 'AppHeader must brand WordNest');
assert(headerContent.includes('Luyện Reading TOEIC'), 'AppHeader must have TOEIC Reading link');
assert(headerContent.includes('Luyện Listening TOEIC'), 'AppHeader must have TOEIC Listening link');

const stopwatchContent = fs.readFileSync(path.resolve('components/StudyStopwatchWidget.tsx'), 'utf8');
assert(stopwatchContent.includes('StudyStopwatchWidget'), 'StudyStopwatchWidget must be exported');

const vocabWidgetContent = fs.readFileSync(path.resolve('components/VocabFloatingWidget.tsx'), 'utf8');
assert(vocabWidgetContent.includes('VocabFloatingWidget'), 'VocabFloatingWidget must be exported');

const todoWidgetContent = fs.readFileSync(path.resolve('components/TodoFloatingWidget.tsx'), 'utf8');
assert(todoWidgetContent.includes('TodoFloatingWidget'), 'TodoFloatingWidget must be exported');

const mobileNavContent = fs.readFileSync(path.resolve('components/navigation/MobileBottomNav.tsx'), 'utf8');
assert(mobileNavContent.includes('MobileBottomNav'), 'MobileBottomNav must be exported');

console.log('  ✓ Header, Stopwatch, Vocab & Todo Widgets, and Mobile Navigation components verified');

// 7. Test Vocab & Spaced Repetition Engine
console.log('\n--- Test Group 7: Vocab Service & Spaced Repetition Simulation ---');
import { normalizeTerm, getSavedDecks, saveDecks, addWordToDeck, updateWordReview } from '../lib/vocabService.ts';

assert.strictEqual(normalizeTerm('  Eloquent  '), 'eloquent');
assert.strictEqual(normalizeTerm('TOEIC MASTER '), 'toeic master');

// Set up mock window & localStorage for Node testing
const store = {};
global.window = {
  dispatchEvent: () => true,
  addEventListener: () => {},
  removeEventListener: () => {},
};
global.localStorage = {
  getItem: (key) => store[key] || null,
  setItem: (key, val) => { store[key] = String(val); },
  removeItem: (key) => { delete store[key]; },
  clear: () => { Object.keys(store).forEach(k => delete store[k]); },
};

// Initial state should be empty
assert.strictEqual(getSavedDecks().length, 0);

// Add a word to default deck
const addRes = addWordToDeck(1, {
  term: 'Peculiar',
  meaning: 'Kỳ lạ, khác thường',
  example: 'She has a peculiar way of smiling.'
});
assert.strictEqual(addRes.success, true);
assert(addRes.word, 'Returned word should exist');
assert.strictEqual(addRes.word.term, 'Peculiar');
assert.strictEqual(addRes.word.level, 'new');

// Duplicate check
const dupRes = addWordToDeck(1, {
  term: 'peculiar',
  meaning: 'Lạ',
});
assert.strictEqual(dupRes.success, false, 'Duplicate term must be blocked');

// Spaced repetition review test: rate 'known'
const deckId = getSavedDecks()[0].id;
const wordId = addRes.word.id;
updateWordReview(deckId, wordId, 'known');
const updatedDeck = getSavedDecks().find(d => d.id === deckId);
const reviewedWord = updatedDeck.words.find(w => w.id === wordId);
assert.strictEqual(reviewedWord.level, 'known', 'Level must be updated to known');
assert(reviewedWord.nextReview > Date.now() + 2 * 86400000, 'Next review must be spaced by ~3 days');

console.log('  ✓ normalizeTerm, deck persistence, duplicate prevention, and SRS rating verified');

// Test Time Reduction (addTodaySeconds with negative seconds)
import { addTodaySeconds, getSavedProgress } from '../lib/studyTimeService.ts';

// Add 700 seconds (Goal met)
const p1 = addTodaySeconds(700);
const todayKey = getTodayKey();
assert.strictEqual(p1.dailySeconds[todayKey], 700);
assert.strictEqual(p1.completedDays?.[todayKey], true, 'Goal 10m reached');

// Subtract 300 seconds (-5m) -> 400 seconds (Goal not met, completedDays deleted)
const p2 = addTodaySeconds(-300);
assert.strictEqual(p2.dailySeconds[todayKey], 400);
assert.strictEqual(p2.completedDays?.[todayKey], undefined, 'completedDays should be removed when falling below 10m');

// Subtract 600 seconds -> clamped to 0
const p3 = addTodaySeconds(-600);
assert.strictEqual(p3.dailySeconds[todayKey], 0, 'Cannot reduce below 0');
console.log('  ✓ addTodaySeconds successfully supports time reduction (-mins) with goal auto-update');

console.log('\n🎉 ALL 7 COMPREHENSIVE TEST GROUPS PASSED WITH ZERO ERRORS!\n');
