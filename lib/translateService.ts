export interface TranslationResult {
  original: string;
  translated: string;
  sourceLang: string;
  targetLang: string;
  phonetic?: string;
  partOfSpeech?: string;
  definitions?: string[];
  examples?: Array<{ en: string; vi?: string }>;
}

export interface RecentTranslation {
  id: string;
  original: string;
  translated: string;
  phonetic?: string;
  sourceLang: string;
  targetLang: string;
  timestamp: number;
}

const RECENT_KEY = 'wordnest-recent-translations';

async function fetchWithTimeout(url: string, timeoutMs = 4000): Promise<any> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch(url, { signal: controller.signal });
    if (!res.ok) return null;
    return await res.json();
  } catch (e) {
    return null;
  } finally {
    clearTimeout(timer);
  }
}

export async function translateText(
  text: string,
  sourceLang: 'en' | 'vi' | 'zh' = 'en',
  targetLang: 'vi' | 'en' | 'zh' = 'vi',
): Promise<TranslationResult | null> {
  const clean = text.trim();
  if (!clean) return null;

  const sl = sourceLang === 'zh' ? 'zh-CN' : sourceLang;
  const tl = targetLang === 'zh' ? 'zh-CN' : targetLang;

  // 1. Google Translate API
  const gtxUrl = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sl}&tl=${tl}&dt=t&dt=bd&dt=rm&q=${encodeURIComponent(clean)}`;
  
  // 2. English Dictionary API (for IPA phonetic and English definition)
  const isSingleEnglishWord = sourceLang === 'en' && !clean.includes(' ');
  const dictUrl = isSingleEnglishWord
    ? `https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(clean.toLowerCase())}`
    : null;

  try {
    const [gtxData, dictData] = await Promise.all([
      fetchWithTimeout(gtxUrl, 4000),
      dictUrl ? fetchWithTimeout(dictUrl, 3000) : Promise.resolve(null),
    ]);

    let translated = '';
    let partOfSpeech: string | undefined = undefined;

    if (Array.isArray(gtxData?.[0])) {
      translated = gtxData[0]
        .map((chunk: any) => chunk?.[0] ?? '')
        .join('')
        .trim();
    }

    // Secondary meanings/part of speech from gtx
    if (Array.isArray(gtxData?.[1]) && gtxData[1].length > 0) {
      partOfSpeech = gtxData[1][0]?.[0];
    }

    // Fallback to MyMemory if Google Translate fails
    if (!translated || translated.toLowerCase() === clean.toLowerCase()) {
      const myMemoryUrl = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(clean)}&langpair=${sl}|${tl}`;
      const myMemory = await fetchWithTimeout(myMemoryUrl, 3500);
      const mmText = myMemory?.responseData?.translatedText?.trim();
      if (mmText && mmText.toLowerCase() !== clean.toLowerCase()) {
        translated = mmText;
      }
    }

    if (!translated) {
      translated = clean;
    }

    // Parse Dictionary data if available
    let phonetic: string | undefined = undefined;
    const definitions: string[] = [];
    const examples: Array<{ en: string; vi?: string }> = [];

    if (Array.isArray(dictData) && dictData.length > 0) {
      const entry = dictData[0];
      phonetic =
        entry.phonetic ||
        entry.phonetics?.find((p: any) => p.text)?.text ||
        undefined;

      if (!partOfSpeech && entry.meanings?.[0]?.partOfSpeech) {
        partOfSpeech = entry.meanings[0].partOfSpeech;
      }

      entry.meanings?.forEach((m: any) => {
        m.definitions?.forEach((d: any) => {
          if (d.definition && definitions.length < 3) {
            definitions.push(d.definition);
          }
          if (d.example && examples.length < 2) {
            examples.push({ en: d.example });
          }
        });
      });
    }

    const result: TranslationResult = {
      original: clean,
      translated,
      sourceLang,
      targetLang,
      phonetic,
      partOfSpeech,
      definitions: definitions.length > 0 ? definitions : undefined,
      examples: examples.length > 0 ? examples : undefined,
    };

    // Save to recent
    addRecentTranslation({
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
      original: clean,
      translated,
      phonetic,
      sourceLang,
      targetLang,
      timestamp: Date.now(),
    });

    return result;
  } catch (err) {
    console.error('Translation error', err);
    return null;
  }
}

const EMPTY_RECENTS: RecentTranslation[] = [];
let cachedRecentsRaw: string | null = null;
let cachedRecents: RecentTranslation[] = EMPTY_RECENTS;

export function getRecentTranslations(): RecentTranslation[] {
  if (typeof window === 'undefined') return EMPTY_RECENTS;
  try {
    const raw = localStorage.getItem(RECENT_KEY);
    if (raw === cachedRecentsRaw) return cachedRecents;
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        cachedRecentsRaw = raw;
        cachedRecents = parsed;
        return cachedRecents;
      }
    }
    cachedRecentsRaw = null;
    cachedRecents = EMPTY_RECENTS;
    return EMPTY_RECENTS;
  } catch (e) {
    return cachedRecents;
  }
}

export function addRecentTranslation(item: RecentTranslation): void {
  if (typeof window === 'undefined') return;
  try {
    const current = getRecentTranslations();
    const filtered = current.filter(
      (r) => r.original.toLowerCase() !== item.original.toLowerCase(),
    );
    const updated = [item, ...filtered].slice(0, 15);
    const serialized = JSON.stringify(updated);
    cachedRecentsRaw = serialized;
    cachedRecents = updated;
    localStorage.setItem(RECENT_KEY, serialized);
    window.dispatchEvent(new CustomEvent('wordnest-recent-translations-updated'));
  } catch (e) {}
}

export function clearRecentTranslations(): void {
  if (typeof window === 'undefined') return;
  try {
    cachedRecentsRaw = null;
    cachedRecents = EMPTY_RECENTS;
    localStorage.removeItem(RECENT_KEY);
    window.dispatchEvent(new CustomEvent('wordnest-recent-translations-updated'));
  } catch (e) {}
}

export function subscribeRecentTranslations(callback: () => void): () => void {
  if (typeof window === 'undefined') return () => {};
  window.addEventListener('wordnest-recent-translations-updated', callback);
  window.addEventListener('storage', callback);
  return () => {
    window.removeEventListener('wordnest-recent-translations-updated', callback);
    window.removeEventListener('storage', callback);
  };
}
