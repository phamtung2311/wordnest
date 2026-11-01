# WordNest Web — Toàn bộ Chức năng & Kiến trúc Nghiệp vụ (Web Specification for Android)

> **Mục đích tài liệu:** Bản đặc tả đầy đủ, chi tiết và có hệ thống toàn bộ các tính năng, luồng dữ liệu, cấu trúc đối tượng, logic nghiệp vụ và giao diện hiện có của phiên bản Web **WordNest** (`wordnest-english-vocab.web.app`).
> **Đối tượng sử dụng:** Dành riêng cho Agent/Developer phát triển ứng dụng **WordNest Android** nhằm học hỏi, đối chiếu và chuyển đổi (port) 100% tính năng từ Web sang Android Jetpack Compose một cách chuẩn xác, không bỏ sót bất kỳ chi tiết nghiệp vụ nào.

---

## MỤC LỤC TỔNG QUAN

1. [Tổng quan Kiến trúc & Hạ tầng Kỹ thuật](#1-tổng-quan-kiến-trúc--hạ-tầng-kỹ-thuật)
2. [Hệ thống Dữ liệu & Lưu trữ Đám mây (Storage & Cloud Sync)](#2-hệ-thống-dữ-liệu--lưu-trữ-đám-mây)
3. [Module 1: Quản lý Kho Từ vựng & Học Flashcard SRS](#3-module-1-quản-lý-kho-từ-vựng--học-flashcard-srs)
4. [Module 2: Trung tâm Luyện thi TOEIC Reading (Part 5, 6, 7)](#4-module-2-trung-tâm-luyện-thi-toeic-reading-part-5-6-7)
5. [Module 3: Trung tâm Luyện thi TOEIC Listening (Part 1, 2, 3, 4)](#5-module-3-trung-tâm-luyện-thi-toeic-listening-part-1-2-3-4)
6. [Module 4: Intensive Listening (Nghe chép chính tả chuyên sâu)](#6-module-4-intensive-listening-nghe-chép-chính-tả-chuyên-sâu)
7. [Module 5: Theo dõi Thời gian Học tập & Chuỗi Streak](#7-module-5-theo-dõi-thời-gian-học-tập--chuỗi-streak)
8. [Module 6: Hệ thống Tiện ích Nổi (Floating Widgets & Quick Dock)](#8-module-6-hệ-thống-tiện-ích-nổi-floating-widgets--quick-dock)
9. [Module 7: Phân khu Đời sống & Kế hoạch Cá nhân (Life & Planner)](#9-module-7-phân-khu-đời-sống--kế-hoạch-cá-nhân)
10. [Ma trận Ánh xạ từ Web sang Android (Web-to-Android Mapping Guide)](#10-ma-trận-ánh-xạ-từ-web-sang-android)

---

## 1. TỔNG QUAN KIẾN TRÚC & HẠ TẦNG KỸ THUẬT

- **Web Stack:** React 19, TypeScript, Next.js / Vinext, Tailwind CSS.
- **Xác thực:** Firebase Authentication (Google Sign-In via Popup/Redirect).
- **Cơ sở dữ liệu:** 
  - Client-side: `localStorage` đóng vai trò Local Cache / Offline-first.
  - Server-side: Google Cloud Firestore lưu dữ liệu gắn với UID tài khoản người dùng (`users/{uid}`).
- **Âm thanh / Đọc phát âm:**
  - Web Speech API (`speechSynthesis`) để đọc từ vựng tiếng Anh (`en-US`) và tiếng Trung (`zh-CN`).
  - HTML5 Audio Player phát file MP3 cho TOEIC Listening và Intensive Listening.
- **Các API Bên ngoài Tích hợp:**
  - `Dictionary API` (`api.dictionaryapi.dev`): Lấy phiên âm IPA, từ loại, định nghĩa tiếng Anh và câu ví dụ.
  - `Google Translate GTX` (`translate.googleapis.com/translate_a/single`): Dịch tự động tốc độ cao Anh - Việt, Việt - Anh, Trung - Việt.
  - `MyMemory API`: Dịch dự phòng (fallback) khi Google Translate bị giới hạn.
  - `Datamuse API`: Gợi ý từ tiếng Anh khi người dùng gõ từ 2 ký tự.

---

## 2. HỆ THỐNG DỮ LIỆU & LƯU TRỮ ĐÁM MÂY

### 2.1 Cơ chế Lưu trữ 2 Lớp (Dual-Layer Storage)
- **Tầng 1 (Local):** Mọi thao tác thêm/sửa/xóa đều cập nhật ngay lập tức vào `localStorage` và dispatch `CustomEvent` để toàn bộ giao diện cập nhật tức thì (0ms latency, chạy offline hoàn hảo).
- **Tầng 2 (Cloud Firestore):** Nếu người dùng đã đăng nhập Google, hệ thống tự động đồng bộ (debounce 5–10s hoặc đồng bộ ngay khi rời trang qua `visibilitychange` / `beforeunload`).

### 2.2 Cấu trúc Tài liệu Firestore (`users/{uid}`)

```text
users/{uid}
 ├── (document fields)
 │    ├── email: string
 │    ├── displayName: string
 │    ├── progress: StudyProgress
 │    ├── lifeData: LifeData
 │    ├── englishNotes: EnglishNoteItem[]
 │    └── updatedAt: Timestamp
 └── subcollection: decks/{deckId}
       ├── (deck fields: id, name, emoji, description, language)
       └── subcollection: words/{wordId}
             └── (word fields: id, term, meaning, phonetic, partOfSpeech, example, level, nextReview, createdAt)
```

---

## 3. MODULE 1: QUẢN LÝ KHO TỪ VỰNG & HỌC FLASHCARD SRS

### 3.1 Cấu trúc Dữ liệu Bộ từ & Từ vựng

```typescript
export type Level = 'new' | 'learning' | 'known';
export type Language = 'en' | 'zh';

export interface WordItem {
  id: number;              // Timestamp (ví dụ: 1730000000000)
  term: string;            // Từ vựng (tiếng Anh hoặc chữ Hán)
  meaning: string;         // Nghĩa tiếng Việt
  example: string;         // Câu ví dụ minh họa
  phonetic?: string;       // Phiên âm IPA (ví dụ: /əˈkɒm.ə.deɪt/)
  partOfSpeech?: string;   // Từ loại (noun, verb, adj...)
  level: Level;            // Mức ghi nhớ: 'new' | 'learning' | 'known'
  nextReview: number;      // Timestamp mốc thời gian cần ôn tập lại
  createdAt?: number;
}

export interface DeckItem {
  id: number;
  name: string;            // Tên bộ từ (ví dụ: "Du lịch Nhật Bản", "TOEIC 600 Essential")
  emoji: string;           // Biểu tượng cảm xúc đại diện (ví dụ: ✈️, 🎧, 📚)
  description: string;     // Mô tả ngắn
  language?: Language;     // 'en' (tiếng Anh) hoặc 'zh' (tiếng Trung)
  words: WordItem[];
}
```

### 3.2 Thuật toán Lặp lại Ngắt quãng (SRS — Spaced Repetition System)
Khi người dùng ôn tập một thẻ Flashcard:
1. **Mặt trước:** Hiện từ tiếng Anh/chữ Hán + Phiên âm IPA + Nút Loa phát âm. Nghĩa tiếng Việt bị che.
2. **Nút "Xem nghĩa":** Lật thẻ sang mặt sau, hiển thị Nghĩa tiếng Việt, Câu ví dụ và Ghi chú.
3. **Cụm 3 nút Đánh giá Mức độ Nhớ:**
   - **`Chưa nhớ` (Again):** 
     - Lên lịch ôn lại siêu ngắn: chọn lặp lại sau `5 phút`, `10 phút` hoặc `30 phút` (mặc định 5 phút).
     - Phát âm báo lỗi nhẹ, hiển thị một câu trêu vui (Tease message) tạo động lực học tiếp.
     - Đặt `level = 'learning'`.
   - **`Hơi nhớ` (Hard):**
     - Lên lịch ôn lại sau **1 ngày** (`Date.now() + 86400000`).
     - Đặt `level = 'learning'`.
   - **`Đã thuộc` (Good/Mastered):**
     - Lên lịch ôn lại sau **7 ngày** (`Date.now() + 7 * 86400000`).
     - Phát âm báo thành công `ting-ting`.
     - Đặt `level = 'known'`.
4. **Nút "Ôn lại ngay":** Cho phép reset hạn của bất kỳ từ nào về `Date.now()` để đưa vào hàng đợi học ngay lập tức mà không cần đợi đến hạn.

### 3.3 Tính năng Thêm từ Thông minh (Auto-enrichment)
- Khi nhập từ tiếng Anh: Sau 2 ký tự, gợi ý danh sách từ tương tự từ Datamuse API.
- Bấm nút **"Tự điền ✨"**:
  - Tự động gọi Dictionary API lấy phiên âm IPA `/.../`, từ loại và câu ví dụ tiếng Anh có chứa từ vựng.
  - Tự động gọi Google Translate dịch nghĩa sang tiếng Việt chuẩn.
- Đối với tiếng Trung: Nhập chữ Hán -> tự động tìm Pinyin và nghĩa tiếng Việt.
- Cơ chế **Chống trùng từ (Deduplication):** Tự động chuẩn hóa (`trim().toLowerCase()`), nếu từ đã tồn tại trong bộ sẽ hiện thông báo cảnh báo và từ chối thêm trùng.

---

## 4. MODULE 2: TRUNG TÂM LUYỆN THI TOEIC READING (PART 5, 6, 7)

- **Địa chỉ:** `/practice-test` (Danh sách đề) và `/practice-test/[id]` (Phòng thi).
- **Kho Đề thi:** Đầy đủ 20 đề thi chuẩn format ETS:
  - **ETS 2023:** 10 Tests (`test1` đến `test10`).
  - **ETS 2024:** 10 Tests (`reading2024_1` đến `reading2024_10`).

### 4.1 Bố cục Phòng thi Reading
- **Cột Trái (Đề bài):** Tích hợp trình xem đề thi PDF/hình ảnh chất lượng cao hoặc đoạn văn số hóa.
- **Cột Phải (Phiếu trả lời — Answer Sheet):**
  - Danh sách 100 câu hỏi trắc nghiệm từ câu **101 đến 200**:
    - **Part 5 (101 – 130):** Điền vào câu đơn (Incomplete Sentences).
    - **Part 6 (131 – 146):** Điền vào đoạn văn (Text Completion).
    - **Part 7 (147 – 200):** Đọc hiểu đoạn đơn và đoạn đa (Reading Comprehension).
  - Mỗi câu hỏi gồm 4 lựa chọn `A`, `B`, `C`, `D`.

### 4.2 Tính năng Tương tác Phòng thi Reading
- **Question Map (Bản đồ Câu hỏi):** Lưới ma trận 100 ô số.
  - Màu sắc phân biệt: Xám (Chưa làm), Xanh đậm (Đã chọn đáp án), Vàng (Gắn cờ xem lại).
  - Chạm vào một ô số -> Tự động cuộn danh sách đến đúng câu hỏi đó.
- **Bộ lọc hiển thị:** Lọc nhanh theo `Tất cả` · `Part 5` · `Part 6` · `Part 7` · `Chưa làm`.
- **Tự động chuyển câu (Auto-advance):** Khi tích chọn đáp án, hệ thống tự động nhảy sang câu tiếp theo.
- **Tự động lưu tiến độ (Auto-save):** Mọi lựa chọn được lưu liên tục vào `localStorage` (`toeic_reading_progress_{testId}`). Nếu tắt trình duyệt, mở lại vẫn giữ nguyên bài làm.
- **Hệ thống Chấm điểm & Quy đổi Điểm TOEIC Reading:**
  - So khớp với file đáp án gốc `test_answers.ts`.
  - Quy đổi số câu đúng trên thang điểm TOEIC thực tế từ **5 đến 495 điểm** theo chuẩn ETS qua hàm `getReadingToeicScore(correctCount)`.
  - Thống kê tỷ lệ đúng theo từng Part (Part 5: X/30, Part 6: Y/16, Part 7: Z/54).
- **Chế độ Xem lại (Review Mode):**
  - Câu đúng: Tô xanh viền icon `CheckCircle2`.
  - Câu sai: Tô đỏ đáp án người học chọn và tô xanh đáp án đúng của đề thi.

---

## 5. MODULE 3: TRUNG TÂM LUYỆN THI TOEIC LISTENING (PART 1, 2, 3, 4)

- **Địa chỉ:** `/listening-test` (Danh sách đề) và `/listening-test/[id]` (Phòng thi).
- **Kho Đề thi:** 20 đề Listening ETS 2023 & 2024 (100 câu/đề).

### 5.1 Cấu trúc Đề thi Listening (Câu 1 đến 100)
- **Part 1 (Câu 1 – 6):** Mô tả tranh (Photographs) — 4 đáp án `A`, `B`, `C`, `D`.
- **Part 2 (Câu 7 – 31):** Hỏi & Đáp (Question-Response) — **Chỉ có 3 đáp án `A`, `B`, `C`** (Đặc thù format TOEIC).
- **Part 3 (Câu 32 – 70):** Đoạn hội thoại (Conversations) — 4 đáp án `A`, `B`, `C`, `D`.
- **Part 4 (Câu 71 – 100):** Bài nói ngắn (Short Talks) — 4 đáp án `A`, `B`, `C`, `D`.

### 5.2 Sticky Audio Player Chuyên nghiệp
- Luôn ghim cố định ở đáy màn hình hoặc đầu thanh điều hướng.
- Điều khiển: Nút Play/Pause, tua lùi `-5s`, tua tiến `+5s`, thanh kéo Seekbar thời gian thực.
- Điều chỉnh tốc độ nghe linh hoạt: `0.8x`, `1.0x`, `1.2x`, `1.5x`.
- **Lưu mốc thời gian nghe (Persistent Audio Timestamp):** Tự động lưu giây audio đang nghe vào `localStorage` (`toeic_listening_time_{testId}`). Khi vào lại đề thi, người học được nghe tiếp đúng giây đã dừng trước đó.
- Quy đổi điểm TOEIC Listening từ **5 đến 495 điểm** qua `getListeningToeicScore(correctCount)`.

---

## 6. MODULE 4: INTENSIVE LISTENING (NGHE CHÉP CHÍNH TẢ CHUYÊN SÂU)

- **Địa chỉ:** `/intensive-listening`
- **Ý nghĩa:** Tính năng học thuật chuyên sâu nhất của WordNest giúp luyện tai nghe chi tiết từng từ, giải quyết triệt để tình trạng "nghe lướt nhưng không hiểu bản chất".
- **Dữ liệu phân đoạn (Audio Segments):** Mỗi Test được cắt nhỏ thành từng câu hoặc đoạn hội thoại có `startTime` và `endTime` chính xác đến phần mười giây (ví dụ: `124.5s` đến `142.0s`).

### 6.1 3 Chế độ Thực hành Chuyên sâu (Tabs)

#### Tab 1: Dictation (Nghe chép chính tả từng câu)
1. **Phát âm lặp lại (Audio Looping):** Audio tự động lặp lại đoạn audio của câu đang chọn.
2. **Khung gõ văn bản:** Người học nghe và gõ những gì mình nghe được vào ô nhập.
3. **Nút Gợi ý (Hint System):**
   - Bấm nút bóng đèn 💡 để mở từng chữ cái đầu của từ tiếp theo nếu bị bí.
   - Bấm icon con mắt 👁 để xem số lượng từ của câu (dạng gạch dưới `_ _ _ _`).
4. **Cơ chế Đối chiếu So khớp (Diff-Check Algorithm):**
   Khi bấm "Kiểm tra", hệ thống so khớp văn bản người học gõ với đáp án chuẩn:
   - Từ gõ **Đúng**: Tô màu xanh `Mint500`.
   - Từ gõ **Sai**: Gạch ngang từ người dùng gõ trên nền đỏ nhạt (`CoralTint`) kèm từ đúng bên cạnh.
   - Từ bị **Thiếu**: Đặt trong ô nét đứt màu vàng cam `Amber500`.
   - Tính toán tỷ lệ phần trăm chính xác (Accuracy %).

#### Tab 2: Quiz (Luyện tập trắc nghiệm câu hỏi)
- Làm lại các câu hỏi trắc nghiệm của bài thi liên quan trực tiếp đến đoạn audio đang phát.
- Báo đúng/sai ngay lập tức, hiển thị giải thích chi tiết, dẫn chứng câu nói trong bài (clue text) và bảng từ đồng nghĩa (paraphrase).

#### Tab 3: Transcript (Lời thoại song ngữ tương tác)
- Hiển thị toàn bộ lời thoại tiếng Anh và bản dịch tiếng Việt song song.
- **Tương tác chạm từ (Interactive Vocab):** Người học có thể **chạm vào bất kỳ từ vựng nào** trong lời thoại để bật popup tra nghĩa nhanh và bấm nút **`"+ Lưu vào bộ từ"`** để đưa từ đó vào bộ Flashcard học hàng ngày.

---

## 7. MODULE 5: THEO DÕI THỜI GIAN HỌC TẬP & CHUỖI STREAK

- **Cấu trúc Dữ liệu `StudyProgress`:**
  ```typescript
  export interface StudyProgress {
    dailySeconds: Record<string, number>;    // Số giây học theo từng ngày {"2026-10-31": 1820}
    completedDays?: Record<string, boolean>; // Đánh dấu ngày đạt mục tiêu {"2026-10-31": true}
    targetMinutes?: number;                  // Mục tiêu học mỗi ngày (mặc định 10 phút, tuỳ chỉnh lên đến 120 phút)
  }
  ```

### 7.1 Cơ chế Tính giờ Tự động (Study Stopwatch)
- Tự động đếm giờ khi người dùng đang học từ vựng Flashcard, làm bài thi hoặc nghe bài.
- Tự động tạm dừng khi chuyển tab hoặc không có thao tác sau 2 phút để đảm bảo số liệu trung thực.
- Lưu trữ theo mốc ngày dạng chuỗi `YYYY-MM-DD`.

### 7.2 Thuật toán Điểm danh & Tính Chuỗi Ngày Liên tiếp (Streak)
Một ngày được đánh dấu là **Điểm danh thành công (`completedDays[today] = true`)** khi đạt một trong hai điều kiện:
1. Tổng số giây học trong ngày $\ge$ Mục tiêu ngày (`dailySeconds[today] >= targetMinutes * 60`).
2. Học xong toàn bộ số từ đến hạn ôn tập trong ngày, kể cả khi thời gian chưa đủ số phút mục tiêu.

**Thuật toán Streak (`calculateStreak`):**
- Kiểm tra lùi ngày từ Hôm nay:
  - Nếu Hôm nay đã hoàn thành mục tiêu -> Bắt đầu đếm từ Hôm nay và lùi về các ngày trước.
  - Nếu Hôm nay chưa hoàn thành mục tiêu -> Kiểm tra xem Hôm qua có hoàn thành không. Nếu có, chuỗi Streak không bị gãy (vẫn giữ chuỗi đến hết ngày hôm nay để người học có cơ hội hoàn thành).
- Đếm liên tục số ngày đạt mục tiêu lùi về quá khứ cho đến ngày đầu tiên bị đứt quãng.

### 7.3 Trang Lịch sử Học tập (`/study-history`)
- **Biểu đồ Cột:** Hiển thị thời gian học theo các mốc 7 ngày, 14 ngày, 30 ngày. Cột ngày vượt mục tiêu được tô màu đậm.
- **Bản đồ Nhiệt Tháng (Monthly Activity Heatmap):** Lưới ô vuông các ngày trong tháng (tương tự GitHub Contributions), thể hiện mức độ chăm chỉ theo các cấp độ màu.
- **Thống kê Tổng hợp:** Tổng thời gian học tích lũy, số ngày học thành công, chuỗi ngày kỷ lục, số phút học trung bình mỗi ngày.
- **Điều chỉnh Thủ công:** Cho phép người học tự cộng thêm phút học vào một ngày bất kỳ nếu học bằng tài liệu ngoài mà không bật app.

---

## 8. MODULE 6: HỆ THỐNG TIỆN ÍCH NỔI (FLOATING WIDGETS & QUICK DOCK)

Nhằm giúp việc học không bị gián đoạn khi đang làm bài hoặc đọc bài, WordNest Web xây dựng hệ thống tiện ích nổi:

### 8.1 QuickActionDock (Thanh dock tiện ích ghim góc màn hình)
Bung mở nhanh 3 công cụ:
1. **Đồng hồ bấm giờ (Stopwatch):** Bật/tắt đếm giờ, xem thời gian học hôm nay và chuỗi Streak.
2. **Thêm từ nhanh (Quick Vocab):** Nhập từ, nghĩa, ví dụ và chọn bộ từ lưu vào chỉ trong 5 giây mà không cần rời trang đang học.
3. **Việc cần làm (Todo):** Xem và tích hoàn thành các đầu việc trong ngày.

### 8.2 TranslateFloatingWidget (Dịch nhanh đa ngữ)
- Hỗ trợ dịch 2 chiều: `Tiếng Anh ⇄ Tiếng Việt` và `Tiếng Trung ⇄ Tiếng Việt`.
- Có nút dán nhanh (Paste), nút Loa phát âm.
- Hiển thị phiên âm IPA, từ loại, các nghĩa phụ.
- Có nút **`"+ Lưu ngay vào Bộ từ"`** kèm dropdown chọn bộ từ đích.

### 8.3 EnglishNotesFloatingWidget (Sổ tay Ghi chú Tiếng Anh)
- Quản lý sổ tay ghi chú cấu trúc ngữ pháp và mẹo thi TOEIC.
- Cấu trúc 2 cột rõ ràng:
  - **Cột 1 (Structure / Pattern):** Cấu trúc ngữ pháp hoặc mẫu câu (ví dụ: `be accustomed to + V-ing`, `no sooner... than...`).
  - **Cột 2 (Explanation / Tip):** Giải thích ý nghĩa, ngữ cảnh sử dụng và mẹo tránh bẫy đề thi.
- Hỗ trợ tìm kiếm nhanh theo từ khóa trong ghi chú.

### 8.4 TodoFloatingWidget (Kế hoạch Công việc & Học tập Hàng ngày)
- Quản lý danh sách việc cần làm phân chia theo từng ngày: Hôm nay, Ngày mai, hoặc chọn theo lịch.
- Hỗ trợ gắn khung giờ thực hiện: `startTime - endTime` (ví dụ: `22:00 - 23:00` hoặc `22h-23h`).
- Checkbox đánh dấu hoàn thành mượt mà, tự gạch ngang chữ.

### 8.5 QuickTranslateTooltip (Bôi đen dịch nhanh toàn trang)
- Khi người học dùng chuột bôi đen bất kỳ từ hoặc cụm từ tiếng Anh nào trên màn hình (trong bài đọc TOEIC hay transcript):
- Một tooltip nhỏ xuất hiện ngay trên vùng chọn hiển thị nghĩa tiếng Việt, phiên âm IPA và nút Lưu từ nhanh.

---

## 9. MODULE 7: PHÂN KHU ĐỜI SỐNG & KẾ HOẠCH CÁ NHÂN (LIFE & PLANNER)

WordNest tích hợp một hệ thống quản lý lối sống toàn diện dành cho sinh viên/người tự học (`lifeService`):

- **Kế hoạch mục tiêu:** Quản lý mục tiêu theo tuần (`weeklyGoals`) và mục tiêu theo tháng (`monthlyGoals`).
- **Theo dõi Thói quen (Habit Tracker):**
  - Mặc định gồm: `Uống đủ 2L nước 💧`, `Đọc 10 trang sách 📖`, `Học một chút 📚`.
  - Lưu lịch sử các ngày hoàn thành (`doneDates`).
- **Quản lý Tài chính Cá nhân (Finance Manager):**
  - Quản lý Khoản chi tiêu (`expenses`) và Khoản thu nhập (`incomes`).
  - Phân loại ngân sách theo từng danh mục: Ăn uống, Học tập, Mua hàng online, Nhà trọ...
  - Báo cáo tổng tiền đã tiêu trong tháng so với hạn mức ngân sách (`monthlyBudget`).
- **Sổ tay & Nhật ký:** Ghi chú tự do (`notes`), nhật ký học tập (`journal`) và theo dõi mức năng lượng hàng ngày (`energy`).

---

## 10. MA TRẬN ÁNH XẠ TỪ WEB SANG ANDROID (WEB-TO-ANDROID MAPPING GUIDE)

Dưới đây là bảng hướng dẫn dành riêng cho Android Developer để ánh xạ các thành phần từ Web sang cấu trúc Android Jetpack Compose chuẩn Master v3.0:

| Thành phần trên Web | Tương ứng trên Android Compose | Ghi chú kiến trúc Android |
|---|---|---|
| `localStorage` | **Room Database + DataStore** | Dùng Room (`AppDatabase`) lưu Decks, Words, Tests; dùng DataStore lưu Settings & Progress. |
| `Cloud Firestore` | **Firebase Firestore SDK** | Giữ nguyên cấu trúc `users/{uid}` để dữ liệu đồng bộ 2 chiều mượt mà giữa Web và Mobile App. |
| `Web Speech API` | **Android TextToSpeech (TTS)** | Khởi tạo `TextToSpeech(context)` với `Locale.US` và `Locale.CHINA`. |
| `HTML5 Audio Player` | **AndroidX Media3 (ExoPlayer)** | Quản lý phát audio đề thi Listening và phân đoạn câu Intensive Listening. |
| Trang chủ (`app/page.tsx`) | **`HomeScreen` (Tab 1)** | Hero Card ("Cần học hôm nay"), Spotlight Card ("Đang học dở"), Recent Words, TOEIC Shortcuts, Progress 120p. |
| Quản lý Decks & Words | **`DecksScreen` (Tab 2)** | Lưới bộ từ, bộ lọc Chip (`Tất cả`, `Cần ôn`, `TOEIC`, `Đời sống`), chi tiết bộ từ, Add/Edit Word Sheet. |
| Phòng thi Reading (`/practice-test/[id]`) | **`ReadingSplitScreen`** | Áp dụng cơ chế **Draggable Split-Pane** (kéo chia đôi màn hình trên điện thoại) + Question Navigator Modal. |
| Phòng thi Listening (`/listening-test/[id]`) | **`ListeningScreen`** | Sticky Audio Bar ở đáy + Ảnh phóng to Pinch-to-zoom + Câu hỏi Part 1–4. |
| Intensive Listening (`/intensive-listening`) | **`IntensiveScreen`** | Giao diện tự co giãn theo bàn phím ảo (`imePadding()`), thuật toán Diff-Check đối chiếu từ gõ đúng/sai/thiếu. |
| Lịch sử học (`/study-history`) | **`ProfileAndHistoryScreen` (Tab 4)** | Biểu đồ cột 7 ngày, Monthly Activity Heatmap có Legend chuẩn Accessibility, Cài đặt tài khoản. |
| `QuickActionDock` & Floating Widgets | **`QuickHubFloatingButton` (⚡)** | Nút tròn 56dp ở góc phải mở Speed-Dial (Dịch nhanh, Ôn từ đến hạn, Ghi chú, Việc cần làm). Không bao giờ để 2 nút nổi cùng lúc! |
