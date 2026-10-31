# WordNest Mobile - Android Project

Thư mục này dành riêng cho ứng dụng di động **WordNest Android** (Kotlin + Jetpack Compose) phục vụ thực tập.

---

## 🚀 Master Prompt để Vibe Code trong Android Studio

> Copy toàn bộ đoạn prompt bên dưới vào **Gemini in Android Studio** (hoặc Claude / Copilot):

```markdown
### Context & Mục tiêu:
Tôi đang phát triển ứng dụng Android "WordNest" bằng Kotlin và Jetpack Compose (Material 3). Ứng dụng hỗ trợ học từ vựng tiếng Anh theo phương pháp Spaced Repetition (Lặp lại ngắt quãng - SRS).

### Yêu cầu kỹ thuật:
1. Kiến trúc: MVVM + Repository Pattern.
2. UI: Hoàn toàn bằng Jetpack Compose, hỗ trợ Dark/Light Theme của Material 3.
3. Local Storage: Sử dụng Room Database (Room KTX, Coroutines/Flow).

### Nhiệm vụ cụ thể cần sinh code:
1. Data Layer:
   - `DeckEntity`: `id` (Long, autoGenerate), `name` (String), `emoji` (String), `description` (String).
   - `WordEntity`: `id` (Long, autoGenerate), `deckId` (Long, Foreign Key), `term` (String), `meaning` (String), `phonetic` (String?), `example` (String?), `level` (Enum: NEW, LEARNING, KNOWN), `nextReviewTime` (Long - epoch millis), `reviewCount` (Int).
   - `WordDao`:
     + `getDueWords(currentTime: Long): Flow<List<WordEntity>>`
     + `getWordsByDeck(deckId: Long): Flow<List<WordEntity>>`
     + `updateWord(word: WordEntity)`
     + `insertWords(words: List<WordEntity>)`
   - `WordRepository`: Interface và Implementation giao tiếp với DAO.

2. Domain/SRS Logic:
   - Hàm `calculateNextReview(currentLevel: WordLevel, action: ReviewAction): Pair<WordLevel, Long>`:
     + Action `FORGOT` (Chưa nhớ): lùi về `LEARNING`, review sau 10 phút.
     + Action `HARD` (Hơi nhớ): giữ `LEARNING`, review sau 1 ngày.
     + Action `EASY` (Đã thuộc): lên `KNOWN`, review sau 7 ngày.

3. UI Flashcard (Compose):
   - `FlashcardViewModel`: quản lý danh sách từ cần học, thẻ hiện tại, trạng thái lật thẻ (isFlipped).
   - `FlashcardScreen`:
     + Card hiển thị: Mặt trước (Term, Phonetic, nút phát loa TTS), Mặt sau (Meaning, Example).
     + Hiệu ứng lật thẻ 3D xoay mượt mà (GraphicsLayer rotationY).
     + 3 nút bấm ở dưới: "Chưa nhớ" (Đỏ/Cam), "Hơi nhớ" (Vàng/Xanh dương), "Đã thuộc" (Xanh lá).
     + Thanh ProgressBar tiến độ số từ đã học trong phiên.

Hãy viết code hoàn chỉnh, có comment rõ ràng, chia file chuẩn cấu trúc package `com.tung.wordnest`.
```

---

## 🛠 Cách thiết lập ban đầu trong Android Studio

1. Mở Android Studio -> **New Project** -> chọn **Empty Activity (Compose)**.
2. Cấu hình:
   - **Name:** WordNest
   - **Package name:** `com.tung.wordnest`
   - **Save location:** `/home/tung/web hoc tu vung/android`
   - **Language:** Kotlin
   - **Minimum SDK:** API 26 (Android 8.0)
   - **Build configuration language:** Kotlin DSL (`build.gradle.kts`)
3. Dán prompt trên vào AI để bắt đầu sinh code các module!
