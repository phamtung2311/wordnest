import { auth, db } from '@/lib/firebase';
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';

export type EnglishNoteCategory =
  | 'toeic'
  | 'structure'
  | 'grammar'
  | 'collocation'
  | 'trap'
  | 'quick_tip';

export interface EnglishExample {
  en: string;
  vi: string;
}

export interface EnglishNoteItem {
  id: string;
  title: string;
  category: EnglishNoteCategory;
  pattern?: string;
  explanation: string;
  examples: EnglishExample[];
  tip?: string;
  tags: string[];
  isPinned?: boolean;
  createdAt: number;
  updatedAt: number;
}

export const CATEGORY_LABELS: Record<EnglishNoteCategory, { label: string; emoji: string; color: string; badgeBg: string }> = {
  toeic: {
    label: 'Mẹo TOEIC',
    emoji: '🎯',
    color: '#b45309',
    badgeBg: '#fef3c7',
  },
  structure: {
    label: 'Cấu trúc câu',
    emoji: '📐',
    color: '#1d4ed8',
    badgeBg: '#dbeafe',
  },
  grammar: {
    label: 'Ngữ pháp',
    emoji: '📚',
    color: '#047857',
    badgeBg: '#d1fae5',
  },
  collocation: {
    label: 'Cụm từ hay gặp',
    emoji: '🔗',
    color: '#6d28d9',
    badgeBg: '#ede9fe',
  },
  trap: {
    label: 'Bẫy đề thi',
    emoji: '⚠️',
    color: '#b91c1c',
    badgeBg: '#fee2e2',
  },
  quick_tip: {
    label: 'Mẹo nhớ nhanh',
    emoji: '⚡',
    color: '#0e7490',
    badgeBg: '#cffafe',
  },
};

export const DEFAULT_ENGLISH_NOTES: EnglishNoteItem[] = [
  {
    id: 'note-1',
    title: 'Mẹo 3 giây Part 5 TOEIC: Vị trí Trạng từ (-ly)',
    category: 'toeic',
    pattern: 'Be / Have / Modal + [ ADV (-ly) ] + V3/ed hoặc V-ing',
    explanation: 'Khi chỗ trống nằm kẹp giữa trợ động từ (is/was/has/have/can/will...) và động từ chính (V3/ed hoặc V-ing), 95% đáp án là TRẠNG TỪ (từ có đuôi -ly).',
    examples: [
      {
        en: 'The project was successfully completed on time.',
        vi: 'Dự án đã được hoàn thành một cách thành công đúng hạn.',
      },
      {
        en: 'Our revenue has steadily increased over the past three quarters.',
        vi: 'Doanh thu của chúng tôi đã tăng đều đặn trong suốt 3 quý vừa qua.',
      },
    ],
    tip: 'Nhìn trước thấy was/has/will, nhìn sau thấy completed/increased -> Chọn ngay từ đuôi -ly không cần dịch nghĩa!',
    tags: ['TOEIC', 'Part 5', 'Trạng từ', 'Mẹo 3 giây'],
    isPinned: true,
    createdAt: 1735000000000,
    updatedAt: 1735000000000,
  },
  {
    id: 'note-2',
    title: 'Bộ 4 cụm từ "Tuân thủ quy định" hay thi nhất TOEIC',
    category: 'collocation',
    pattern: 'Comply WITH = Adhere TO = Conform TO = Abide BY (+ policy / law / rule)',
    explanation: 'Cả 4 động từ đều mang nghĩa là tuân thủ, tuân theo luật lệ hoặc quy định công ty, nhưng ĐI VỚI GIỚI TỪ KHÁC NHAU. Đề TOEIC thường bẫy ở giới từ đi kèm.',
    examples: [
      {
        en: 'All visitors must comply with safety regulations at all times.',
        vi: 'Tất cả khách tham quan phải tuân thủ các quy định an toàn mọi lúc.',
      },
      {
        en: 'Employees are required to adhere to the company dress code.',
        vi: 'Nhân viên bắt buộc phải tuân theo quy định trang phục của công ty.',
      },
    ],
    tip: 'Khắc cốt ghi tâm: Comply WITH, Adhere TO, Abide BY. Thấy with thì chọn comply, thấy to thì chọn adhere!',
    tags: ['Collocation', 'TOEIC Part 5', 'Giới từ', 'Từ vựng quan trọng'],
    isPinned: true,
    createdAt: 1735000001000,
    updatedAt: 1735000001000,
  },
  {
    id: 'note-3',
    title: 'Cấu trúc Đảo ngữ "Vừa mới... thì..."',
    category: 'structure',
    pattern: 'No sooner + had + S + V3/ed + THAN + S + V2/ed  |  Hardly + had + S + V3/ed + WHEN + S + V2/ed',
    explanation: 'Dùng để diễn tả một hành động vừa mới xảy ra xong thì một hành động khác ngay lập tức xảy đến. Khi No sooner hoặc Hardly đứng đầu câu, ta đảo had lên trước chủ ngữ.',
    examples: [
      {
        en: 'No sooner had he entered the boardroom than the meeting began.',
        vi: 'Anh ấy vừa mới bước vào phòng họp thì cuộc họp bắt đầu.',
      },
      {
        en: 'Hardly had the announcement been made when the phone started ringing.',
        vi: 'Thông báo vừa mới được đưa ra thì chuông điện thoại bắt đầu reo.',
      },
    ],
    tip: 'Mẹo nhớ nhanh: NO SOONER đi với THAN (đều có vần đuôi), HARDLY đi với WHEN!',
    tags: ['Đảo ngữ', 'Ngữ pháp nâng cao', 'Cấu trúc câu'],
    isPinned: true,
    createdAt: 1735000002000,
    updatedAt: 1735000002000,
  },
  {
    id: 'note-4',
    title: 'Bẫy đồng âm & lặp từ trong TOEIC Listening Part 2',
    category: 'trap',
    pattern: 'Từ trong câu trả lời nghe GIỐNG hoặc LẶP LẠI câu hỏi => 80% là BẪY!',
    explanation: 'Trong TOEIC Listening Part 2, các phương án có từ phát âm na ná (sound-alike) hoặc lặp lại nguyên xi từ trong câu hỏi thường là bẫy đánh lừa người nghe.',
    examples: [
      {
        en: 'Q: Who is in charge of marketing? — Trap A: The supermarket is open. (Bẫy market)',
        vi: 'Hỏi người phụ trách marketing, bẫy cố tình nhắc siêu thị vì nghe na ná âm marketing.',
      },
      {
        en: 'Correct response: "Ms. Lee handles that department."',
        vi: 'Câu trả lời đúng thường dùng từ đồng nghĩa hoặc câu trả lời gián tiếp.',
      },
    ],
    tip: 'Nghe thấy từ lặp lại 100% hoặc phát âm giống hệt -> Cực kỳ cảnh giác, hãy nghi ngờ đó là bẫy!',
    tags: ['TOEIC', 'Listening Part 2', 'Bẫy đề thi', 'Chiến thuật'],
    isPinned: false,
    createdAt: 1735000003000,
    updatedAt: 1735000003000,
  },
  {
    id: 'note-5',
    title: 'Thể giả định (Subjunctive): Động từ khuyên bảo, yêu cầu',
    category: 'grammar',
    pattern: 'S + suggest / recommend / request / demand / require + THAT + S + (should) + V_nguyên_thể',
    explanation: 'Mệnh đề sau "that" của các động từ yêu cầu, đề nghị, bắt buộc luôn chia ở dạng ĐỘNG TỪ NGUYÊN THỂ (bare infinitive), kể cả chủ ngữ là he/she/it hoặc câu ở thì quá khứ.',
    examples: [
      {
        en: 'The manager suggested that he attend the leadership seminar.',
        vi: 'Quản lý đề xuất rằng anh ấy nên tham gia buổi hội thảo lãnh đạo. (Dùng attend, KHÔNG dùng attends)',
      },
      {
        en: 'The board requested that all reports be submitted before 5 PM.',
        vi: 'Ban giám đốc yêu cầu mọi báo cáo phải được nộp trước 17h. (Dùng be submitted, KHÔNG dùng are/were)',
      },
    ],
    tip: 'Cứ thấy suggest/recommend/request that S + ... thì động từ phía sau luôn chọn dạng V nguyên thể không chia s/es/ed!',
    tags: ['Ngữ pháp', 'Giả định', 'Part 5', 'Hay bẫy'],
    isPinned: false,
    createdAt: 1735000004000,
    updatedAt: 1735000004000,
  },
  {
    id: 'note-6',
    title: 'Mẹo phân biệt: Due to / Because of vs Because / Since / As',
    category: 'grammar',
    pattern: 'Due to / Because of / Owing to + CỤM DANH TỪ / V-ING  vs  Because / Since / As + MỆNH ĐỀ (S + V)',
    explanation: 'Cả hai nhóm đều mang nghĩa "bởi vì", nhưng nhóm 1 theo sau bởi Danh từ / V-ing, còn nhóm 2 theo sau bởi cả một mệnh đề có chủ ngữ và động từ chia thì.',
    examples: [
      {
        en: 'The flight was delayed due to severe weather conditions.',
        vi: 'Chuyến bay bị hoãn vì điều kiện thời tiết xấu. (severe weather conditions là cụm danh từ)',
      },
      {
        en: 'The flight was delayed because the weather was severe.',
        vi: 'Chuyến bay bị hoãn vì thời tiết rất xấu. (the weather was severe là câu đầy đủ S + V)',
      },
    ],
    tip: 'Nhìn ngay sau chỗ trống: Có động từ chia thì -> Chọn Because/Since. Không có động từ chia thì -> Chọn Due to/Because of.',
    tags: ['Liên từ', 'Ngữ pháp', 'TOEIC Part 5'],
    isPinned: false,
    createdAt: 1735000005000,
    updatedAt: 1735000005000,
  },
  {
    id: 'note-7',
    title: 'Trật tự tính từ trước danh từ (OSASCOMP)',
    category: 'quick_tip',
    pattern: 'Opinion - Size - Age - Shape - Color - Origin - Material - Purpose + Noun',
    explanation: 'Quy tắc sắp xếp trật tự các tính từ khi nhiều tính từ cùng đứng trước bổ nghĩa cho một danh từ.',
    examples: [
      {
        en: 'A charming (O) small (S) round (S) brown (C) Italian (O) wooden (M) dining (P) table.',
        vi: 'Một chiếc bàn ăn bằng gỗ, của Ý, màu nâu, hình tròn, nhỏ nhắn và duyên dáng.',
      },
    ],
    tip: 'Câu thần chú dễ nhớ tiếng Việt: "Ông Sáu Ăn Súp Cua Ở Mỹ Phát" (Ý kiến - Kích cỡ - Tuổi - Hình dạng - Màu sắc - Nguồn gốc - Chất liệu - Mục đích).',
    tags: ['Tính từ', 'Mẹo nhớ nhanh', 'OSASCOMP'],
    isPinned: false,
    createdAt: 1735000006000,
    updatedAt: 1735000006000,
  },
  {
    id: 'note-8',
    title: 'Cấu trúc câu điều kiện đảo ngữ (Bỏ "If")',
    category: 'structure',
    pattern: 'Loại 1: Should + S + V_inf  |  Loại 2: Were + S + to V  |  Loại 3: Had + S + V3/ed',
    explanation: 'Trong văn phong trang trọng hoặc đề thi TOEIC, từ "If" thường được lược bỏ và trợ động từ được đảo lên đầu câu.',
    examples: [
      {
        en: 'Should you have any inquiries, please do not hesitate to contact us.',
        vi: 'Nếu quý khách có bất kỳ thắc mắc nào, xin đừng ngần ngại liên hệ chúng tôi. (= If you should have...)',
      },
      {
        en: 'Had we received the shipment earlier, we would have fulfilled the order.',
        vi: 'Nếu chúng tôi nhận được lô hàng sớm hơn, chúng tôi đã hoàn thành đơn hàng rồi.',
      },
    ],
    tip: 'Đầu câu có chỗ trống đứng trước Chủ ngữ + Động từ nguyên mẫu -> 99% chọn SHOULD!',
    tags: ['Câu điều kiện', 'Đảo ngữ', 'TOEIC Part 5'],
    isPinned: false,
    createdAt: 1735000007000,
    updatedAt: 1735000007000,
  },
  {
    id: 'note-9',
    title: 'Cấu trúc so sánh thích hơn: Would rather vs Prefer',
    category: 'structure',
    pattern: 'S + would rather + V1 + THAN + V1  vs  S + prefer + V-ing/N + TO + V-ing/N',
    explanation: 'Diễn tả việc thích làm điều này hơn điều kia. Chú ý từ nối đi kèm: Would rather đi với THAN, Prefer đi với TO.',
    examples: [
      {
        en: 'I would rather take the train than drive in rush hour traffic.',
        vi: 'Tôi thà đi tàu hỏa còn hơn lái xe vào giờ cao điểm.',
      },
      {
        en: 'She prefers conducting interviews in person to meeting online.',
        vi: 'Cô ấy thích phỏng vấn trực tiếp hơn là gặp mặt qua mạng.',
      },
    ],
    tip: 'Bẫy đề thi: "Prefer X than Y" là SAI! Bắt buộc phải là "Prefer X TO Y"!',
    tags: ['Cấu trúc câu', 'So sánh', 'Thường gặp'],
    isPinned: false,
    createdAt: 1735000008000,
    updatedAt: 1735000008000,
  },
  {
    id: 'note-10',
    title: 'Mẹo đọc Part 7 TOEIC: Kỹ thuật Skimming & Scanning từ khóa',
    category: 'toeic',
    pattern: 'Đọc câu hỏi trước -> Gạch chân từ khóa độc nhất -> Quét nhanh văn bản',
    explanation: 'Không đọc lướt cả bài từ đầu đến cuối trước! Hãy đọc câu hỏi trước để xác định cần tìm thông tin gì (Ai, Khi nào, Bao nhiêu tiền, Ở đâu), rồi quét mắt vào bài tìm từ khóa đó.',
    examples: [
      {
        en: 'Question: "When will the renovation project be completed?"',
        vi: 'Từ khóa cần quét: Số tháng, ngày, hoặc từ đồng nghĩa: finish, complete, end, finalize.',
      },
    ],
    tip: 'Đáp án đúng trong Part 7 thường dùng từ đồng nghĩa (Paraphrase) thay vì từ nguyên văn (ví dụ: bài viết "renovation", đáp án chọn "remodeling").',
    tags: ['TOEIC Part 7', 'Chiến thuật', 'Kỹ năng đọc'],
    isPinned: false,
    createdAt: 1735000009000,
    updatedAt: 1735000009000,
  },
  {
    id: 'note-11',
    title: 'Cụm giới từ công sở kinh điển trong đề TOEIC',
    category: 'collocation',
    pattern: 'in charge of · on behalf of · prior to · in accordance with · in response to',
    explanation: 'Các cụm từ cố định chỉ vị trí, trách nhiệm hoặc căn cứ pháp lý trong thư từ thương mại và đề thi TOEIC.',
    examples: [
      {
        en: 'Mr. Tanaka will give the welcome speech on behalf of the president.',
        vi: 'Ông Tanaka sẽ có bài phát biểu chào mừng thay mặt cho chủ tịch.',
      },
      {
        en: 'All payments must be submitted prior to the end of the month.',
        vi: 'Tất cả các khoản thanh toán phải được nộp trước cuối tháng. (prior to = before)',
      },
    ],
    tip: 'Nhớ các cặp giới từ: in charge OF, on behalf OF, prior TO, in accordance WITH.',
    tags: ['Cụm từ', 'Giới từ', 'TOEIC công sở'],
    isPinned: false,
    createdAt: 1735000010000,
    updatedAt: 1735000010000,
  },
];

const STORAGE_KEY = 'wordnest-english-notes';

let cachedNotesRaw: string | null = null;
let cachedNotes: EnglishNoteItem[] = DEFAULT_ENGLISH_NOTES;

export function getSavedEnglishNotes(): EnglishNoteItem[] {
  if (typeof window === 'undefined') return DEFAULT_ENGLISH_NOTES;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw === cachedNotesRaw && cachedNotes) return cachedNotes;
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        cachedNotesRaw = raw;
        cachedNotes = parsed;
        return cachedNotes;
      }
    }
    // If not found in localStorage, save the curated defaults
    saveEnglishNotes(DEFAULT_ENGLISH_NOTES);
    return DEFAULT_ENGLISH_NOTES;
  } catch (e) {
    console.error('Error reading english notes from localStorage', e);
    return DEFAULT_ENGLISH_NOTES;
  }
}

export function saveEnglishNotes(notes: EnglishNoteItem[]): void {
  if (typeof window === 'undefined') return;
  try {
    const serialized = JSON.stringify(notes);
    cachedNotesRaw = serialized;
    cachedNotes = notes;
    localStorage.setItem(STORAGE_KEY, serialized);
    window.dispatchEvent(
      new CustomEvent('wordnest-english-notes-updated', { detail: notes }),
    );

    if (auth.currentUser) {
      void setDoc(
        doc(db, 'users', auth.currentUser.uid),
        {
          englishNotes: notes,
          updatedAt: serverTimestamp(),
        },
        { merge: true },
      ).catch((err) => console.error('Firestore englishNotes sync error', err));
    }
  } catch (e) {
    console.error('Error saving english notes', e);
  }
}

export function addEnglishNote(
  noteInput: Omit<EnglishNoteItem, 'id' | 'createdAt' | 'updatedAt'>,
): EnglishNoteItem {
  const current = getSavedEnglishNotes();
  const newNote: EnglishNoteItem = {
    ...noteInput,
    id: `note-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
    createdAt: Date.now(),
    updatedAt: Date.now(),
  };

  const updated = [newNote, ...current];
  saveEnglishNotes(updated);
  return newNote;
}

export function updateEnglishNote(
  id: string,
  updates: Partial<Omit<EnglishNoteItem, 'id' | 'createdAt'>>,
): EnglishNoteItem | null {
  const current = getSavedEnglishNotes();
  let updatedNote: EnglishNoteItem | null = null;

  const nextNotes = current.map((item) => {
    if (item.id === id) {
      updatedNote = {
        ...item,
        ...updates,
        updatedAt: Date.now(),
      };
      return updatedNote;
    }
    return item;
  });

  if (updatedNote) {
    saveEnglishNotes(nextNotes);
  }
  return updatedNote;
}

export function deleteEnglishNote(id: string): void {
  const current = getSavedEnglishNotes();
  const nextNotes = current.filter((item) => item.id !== id);
  saveEnglishNotes(nextNotes);
}

export function togglePinEnglishNote(id: string): void {
  const current = getSavedEnglishNotes();
  const nextNotes = current.map((item) =>
    item.id === id ? { ...item, isPinned: !item.isPinned, updatedAt: Date.now() } : item,
  );
  saveEnglishNotes(nextNotes);
}

export function resetToDefaultNotes(): EnglishNoteItem[] {
  saveEnglishNotes(DEFAULT_ENGLISH_NOTES);
  return DEFAULT_ENGLISH_NOTES;
}

export function subscribeEnglishNotes(callback: () => void): () => void {
  if (typeof window === 'undefined') return () => {};
  window.addEventListener('wordnest-english-notes-updated', callback);
  window.addEventListener('storage', callback);
  return () => {
    window.removeEventListener('wordnest-english-notes-updated', callback);
    window.removeEventListener('storage', callback);
  };
}
