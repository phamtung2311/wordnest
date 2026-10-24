import type { Metadata } from 'next';
import { IntensiveListeningHub } from '@/components/intensive-listening/IntensiveListeningHub';

export const metadata: Metadata = {
  title: 'Luyện nghe chi tiết TOEIC (STUDY4 Style) — WordNest',
  description: 'Luyện nghe chuyên sâu từng câu hỏi, đoạn hội thoại Part 1-4 ETS TOEIC 2026 kèm audio cắt lẻ, trắc nghiệm, lời thoại song ngữ và chép chính tả dictation.',
};

export default function IntensiveListeningPage() {
  return <IntensiveListeningHub />;
}
