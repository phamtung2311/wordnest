export const runtime = 'edge';

export async function GET(request: Request) {
  const text = new URL(request.url).searchParams.get('text')?.trim();
  if (!text) return new Response('Missing text', { status: 400 });
  if (text.length > 120) return new Response('Text is too long', { status: 400 });

  const source = new URL('https://translate.google.com/translate_tts');
  source.searchParams.set('ie', 'UTF-8');
  source.searchParams.set('client', 'tw-ob');
  source.searchParams.set('tl', 'en');
  source.searchParams.set('q', text);

  try {
    const audio = await fetch(source, {
      headers: {
        'User-Agent': 'Mozilla/5.0 WordNest/1.0',
        'Accept': 'audio/mpeg,audio/*;q=0.9,*/*;q=0.8',
      },
    });
    if (!audio.ok || !audio.body) return new Response('Speech unavailable', { status: 502 });
    return new Response(audio.body, {
      headers: {
        'Content-Type': audio.headers.get('Content-Type') || 'audio/mpeg',
        'Cache-Control': 'public, max-age=86400',
        'X-Content-Type-Options': 'nosniff',
      },
    });
  } catch {
    return new Response('Speech unavailable', { status: 502 });
  }
}
