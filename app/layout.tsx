import type { Metadata, Viewport } from 'next';
import { Fraunces, Nunito } from 'next/font/google';
import './globals.css';
import TodoFloatingWidget from '@/components/TodoFloatingWidget';
import VocabFloatingWidget from '@/components/VocabFloatingWidget';

const nunito = Nunito({ variable: '--font-nunito', subsets: ['latin', 'vietnamese'] });
const fraunces = Fraunces({ variable: '--font-fraunces', subsets: ['latin', 'vietnamese'] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover',
  themeColor: '#213a34',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://wordnest-english-vocab.web.app'),
  title: 'WordNest — Học từ vựng & Luyện thi TOEIC',
  description: 'Tạo bộ từ tiếng Anh hoặc tiếng Trung, luyện đề TOEIC Listening & Reading trực tuyến ngay trên điện thoại và máy tính.',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'WordNest',
  },
  formatDetection: {
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' }
    ],
    shortcut: '/favicon.ico',
  },
  openGraph: {
    title: 'WordNest — Học từ vựng tiếng Anh và tiếng Trung',
    description: 'Tạo bộ từ tiếng Anh hoặc tiếng Trung, học bằng flashcard và ôn lại đúng lúc.',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'WordNest — Học ít, nhớ lâu' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WordNest — Học từ vựng tiếng Anh và tiếng Trung',
    description: 'Tạo bộ từ tiếng Anh hoặc tiếng Trung, học bằng flashcard và ôn lại đúng lúc.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi">
      <body className={`${nunito.variable} ${fraunces.variable}`}>
        {children}
        <VocabFloatingWidget />
        <TodoFloatingWidget />
      </body>
    </html>
  );
}
