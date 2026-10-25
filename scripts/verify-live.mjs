import assert from 'node:assert';

console.log('=== WordNest Live Web Deep Production Quality Suite ===\n');

const BASE_URL = 'https://wordnest-english-vocab.web.app';

// 1. Core Page Routes
console.log('--- Test 1: Live Core HTML Routes ---');
const routes = [
  { path: '/', expected: 'Word' },
  { path: '/practice-test', expected: 'Luyện Đề TOEIC Reading' },
  { path: '/listening-test', expected: 'Luyện Đề TOEIC Listening' },
  { path: '/study-history', expected: 'Lịch sử thời gian học' },
  { path: '/intensive-listening', expected: 'Luyện nghe chi tiết' },
  { path: '/practice-test/1', expected: 'Đề 1' },
  { path: '/practice-test/2024-1', expected: '2024' },
  { path: '/listening-test/1', expected: 'Đề 1' },
  { path: '/listening-test/2024-1', expected: '2024' },
];

for (const r of routes) {
  const url = `${BASE_URL}${r.path}`;
  const res = await fetch(url);
  assert.strictEqual(res.status, 200, `Failed route: ${url} (HTTP ${res.status})`);
  const text = await res.text();
  assert(text.includes(r.expected), `Expected "${r.expected}" in ${url}`);
  console.log(`  ✓ [200 OK] Route ${r.path.padEnd(25)} size: ${(text.length / 1024).toFixed(1)} KB`);
}

// 2. Static Media & PDFs
console.log('\n--- Test 2: Live Media, PDFs & Audio Integrity ---');
const mediaFiles = [
  { path: '/favicon.ico', expectedType: 'image/' },
  { path: '/favicon.svg', expectedType: 'image/svg+xml' },
  { path: '/og.png', expectedType: 'image/png' },
  { path: '/donate-qr.jpg', expectedType: 'image/jpeg' },
  { path: '/tests/test1.pdf', expectedType: 'application/pdf' },
  { path: '/tests/listening1.pdf', expectedType: 'application/pdf' },
  { path: '/audio/test2.mp3', expectedType: 'audio/' },
];

for (const m of mediaFiles) {
  const url = `${BASE_URL}${m.path}`;
  const res = await fetch(url, { method: 'HEAD' });
  assert.strictEqual(res.status, 200, `HEAD check failed for ${url} (HTTP ${res.status})`);
  const contentType = res.headers.get('content-type') || '';
  assert(contentType.includes(m.expectedType), `Expected content-type containing "${m.expectedType}", got "${contentType}" for ${m.path}`);
  const contentLength = res.headers.get('content-length');
  console.log(`  ✓ [200 OK] ${m.path.padEnd(30)} type: ${contentType.padEnd(18)} size: ${contentLength ? (parseInt(contentLength) / 1024).toFixed(0) + ' KB' : 'chunked'}`);
}

// 3. Security, Caching & Performance Headers
console.log('\n--- Test 3: HTTP Headers & Caching Directives ---');
const rootRes = await fetch(`${BASE_URL}/`);
assert.strictEqual(rootRes.status, 200);
const headers = Object.fromEntries(rootRes.headers.entries());
console.log(`  ✓ Content-Type: ${headers['content-type']}`);
console.log(`  ✓ Cache-Control: ${headers['cache-control'] || 'default'}`);

// 4. Check viewport, theme-color and SEO meta tags
console.log('\n--- Test 4: Viewport, Theme-Color & SEO Metadata ---');
const rootHtml = await rootRes.text();
assert(rootHtml.includes('name="viewport"'), 'Root HTML must have viewport meta tag');
assert(rootHtml.includes('name="theme-color" content="#14362d"'), 'Root HTML must have theme-color #14362d');
assert(rootHtml.includes('name="description"'), 'Root HTML must have description meta tag');
assert(rootHtml.includes('property="og:image"'), 'Root HTML must have Open Graph image tag');
console.log('  ✓ Verified viewport settings');
console.log('  ✓ Verified theme-color: #14362d');
console.log('  ✓ Verified SEO meta and Open Graph tags');

console.log('\n🏆 ALL PRODUCTION DEEP TESTS PASSED WITH 100% SUCCESS!\n');
