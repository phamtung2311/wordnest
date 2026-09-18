import type { Metadata } from 'next';
import { Fraunces, Nunito } from 'next/font/google';
import './globals.css';

const nunito = Nunito({ variable: '--font-nunito', subsets: ['latin', 'vietnamese'] });
const fraunces = Fraunces({ variable: '--font-fraunces', subsets: ['latin', 'vietnamese'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://wordnest-english-vocab.social-wave-0222.chatgpt.site'),
  title: 'WordNest — Học từ vựng tiếng Anh',
  description: 'Tạo bộ từ riêng, học bằng flashcard và ôn lại đúng lúc với phương pháp lặp ngắt quãng.',
  openGraph: {
    title: 'WordNest — Học từ vựng tiếng Anh',
    description: 'Tạo bộ từ riêng, học bằng flashcard và ôn lại đúng lúc.',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'WordNest — Học ít, nhớ lâu' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WordNest — Học từ vựng tiếng Anh',
    description: 'Tạo bộ từ riêng, học bằng flashcard và ôn lại đúng lúc.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="vi"><body className={`${nunito.variable} ${fraunces.variable}`}>{children}</body></html>;
}
