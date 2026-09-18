import type { Metadata } from 'next';
import { Fraunces, Nunito } from 'next/font/google';
import './globals.css';

const nunito = Nunito({ variable: '--font-nunito', subsets: ['latin', 'vietnamese'] });
const fraunces = Fraunces({ variable: '--font-fraunces', subsets: ['latin', 'vietnamese'] });

export const metadata: Metadata = {
  title: 'WordNest — Học từ vựng tiếng Anh',
  description: 'Tạo bộ từ riêng, học bằng flashcard và ôn lại đúng lúc với phương pháp lặp ngắt quãng.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="vi"><body className={`${nunito.variable} ${fraunces.variable}`}>{children}</body></html>;
}
