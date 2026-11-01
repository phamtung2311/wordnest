# PROMPT 1 — Port TOEIC Reading & Listening (đề thật) + Chấm điểm + Đồng bộ kết quả sang App Android

> **Cách dùng:** Mở Android Studio (project `android/`) → chat với Gemini/Antigravity → **copy toàn bộ block markdown bên dưới** (từ `BỐI CẢNH` đến `ĐỊNH NGHĨA DONE`) và gửi. Chạy từng TASK, mỗi task phải `./gradlew :app:assembleDebug` pass trước khi làm task kế. Khi hết, Antigravity phải **tự xuất báo cáo nghiệm thu** theo mục `BÁO CÁO NGHIỆM THU` ở cuối.

---

```markdown
### BỐI CẢNH (Kiến trúc sư)
App WordNest Android: Kotlin + Jetpack Compose, package `com.tung.wordnest`, đường dẫn project `/home/tung/web hoc tu vung/android`.
Phiên bản Web (nguồn sự thật nghiệp vụ) nằm ở repo cha: `/home/tung/web hoc tu vung` (Next.js). Bản đặc tả đầy đủ: `docs/WORDNEST_WEB_FULL_FEATURES.md`.

Nhiệm vụ của bạn (Agent): triển khai trọn vẹn 2 phòng thi TOEIC **dùng data thật** từ web, chấm điểm đúng chuẩn ETS (thang 5–495), lưu lịch sử + đồng bộ kết quả lên Firestore. Bạn phải **tự dùng terminal/Read kiểm tra file thật** trước khi viết code — không được đoán. Dưới đây là "điểm tới" (target), không phải kết quả đã kiểm chứng.

### BƯỚC 0 — TỰ VERIFY (bắt buộc chạy trước, kết quả ghi vào báo cáo)
Chạy và ghi lại kết quả (để chứng minh bạn đối chiếu đúng):
1. Đọc `data/test_answers.ts` và `data/lc_answers.ts` (repo web) — liệt kê danh sách **test id** (keys) có trong từng file. Xác định mapping id → tên file PDF/audio.
2. Đọc `lib/toeicScoreConverter.ts` (hai bảng `READING_CONVERSION`, `LISTENING_CONVERSION`, 101 phần tử 0–100) và `lib/examGrading.ts` (buckets part, hàm `gradeAnswers`, shape `ExamHistoryEntry`).
3. `ls public/audio/*.mp3` và `ls public/tests/*.pdf` (repo web) — xác nhận tên file audio/PDF đúng với mapping ở bước 1.
4. Kiểm tra `docs/WORDNEST_WEB_FULL_FEATURES.md` đoạn "Địa chỉ" web = domain deploy (dự kiến `wordnest-english-vocab.web.app`). Nếu khác, bạn phải tìm domain thật từ file config/codes (vd `next.config.ts`, `.env`, hoặc `public/`) — **ghi rõ bạn dùng domain nào**.
5. Trên app Android, kiểm tra trạng thái hiện có (không được viết lại): `ui/navigation/WordNestDestinations.kt` đã khai báo route động `toeicReading(testId)`/`toeicListening(testId)`; `ui/navigation/WordNestNavGraph.kt` hub TOEIC đang dùng state mock (`ToeicHubUiState(850, null, emptyList())` + callback rỗng); `data/remote/SyncRepository.kt` **chưa có** hàm push lịch sử thi.

### PHẦN ĐÃ CÓ — CHỈ DÙNG, ĐỪNG VIẾT LẠI
- `data/remote/SyncRepository.kt`: `syncAll`, `syncDecksAndWords`, `pushProgress`, `pushNotes`, `pushTodos`, `pushWordUpdate`, `createDeckAndSync`, `addWordAndSync`, `deleteDeckAndSync`, `resetDeckProgressAndSync`.Convention: `Result<Unit>`, `SetOptions.merge()`, catch + `Log.e("SyncRepository", …)`.
- `WordNestApplication.appScope` — BẮT BUỘC cho mọi coroutine nền.
- `util/TtsProvider.kt` (TTS), theme tokens `WordNestTheme.colors/typography/shapes` — KHÔNG hardcode màu.
- Rào kiên: mọi `firestore.set` giữ `SetOptions.merge()`; không thêm dependency mới trừ khi thật sự cần (Media3/ExoPlayer đã có trong `build.gradle.kts`).
- Mỗi task: `./gradlew :app:assembleDebug` pass, tap không crash.

### QUY TẮC DỮ LIỆU & XỬ LÝ (cần phải đúng 100% với web)
- **Test id chuẩn hóa:** dùng dạng `"2023_1"` … `"2023_10"`, `"2024_1"` … `"2024_10"` (dùng dấu gạch dưới, an toàn làm route/URL). 20 đề reading + 20 đề listening.
- **Audio (KHÔNG nhúng APK, chỉ URL):** `TOEIC_ASSET_BASE_URL = "https://<DOMAIN-DEPLOY>"` (chốt từ BƯỚC 0.4). Audio listening: `{BASE}/audio/test{n}_{year}.mp3` (vd `test1_2023.mp3`). Dùng Media3 `MediaItem.fromUri`.
- **PDF đề Reading (URL, không nhúng):** `{BASE}/tests/reading{year}_{n}.pdf` (vd `reading2023_1.pdf`). Nền web hiện render PDF qua pdfjs — trên app có thể dùng WebView chèn URL PDF (đã có sẵn) HOẶC xem PDF bằng library nhẹ; chọn cách ít rủi ro nhất, ghi lại lựa chọn.
- **Đề Reading KHÔNG cần JSON câu hỏi:** web chỉ hiện 100 ô số (101–200) + PDF. Bạn chỉ cần: (a) xem PDF, (b) phiếu đáp án 101–200 (4 lựa chọn A–D, Part5:101–130, Part6:131–146, Part7:147–200), (c) đối chiếu với **answer key**.
- **Đề Listening KHÔNG cần JSON câu hỏi:** hiện 100 ô số (1–100), Part1:1–6 (chỉ 3 đáp án A–C), Part2:7–31 (A–C), Part3:32–70 (A–D), Part4:71–100 (A–D). Audio phát theo đề.
- **Answer key port sang assets:** từ `data/test_answers.ts` → `app/src/main/assets/toeic/answers_reading.json`; từ `data/lc_answers.ts` → `assets/toeic/answers_listening.json`. Shape: `{ "<testId>": { "<qNum>": "A"|"B"|"C"|"D" } }`. Nếu TS export dạng object, viết script nhỏ chuyển (JSON.parse được, bỏ phần `export const`/type) rồi commit JSON. Loader: đọc assets 1 lần bằng `org.json`, cache Map trong singleton.
- **Quy đổi điểm:** port hai bảng conversion 1:1 (sao chép đúng 101 số) vào `ToeicScoreConverter.kt` (tên gọi `getReadingToeicScore(correct: Int): Int` / `getListeningToeicScore(correct: Int): Int`).

### TASK 1 — Data: answer key + URL constants + loader
1. Tạo 2 file JSON answer key trên (assets) + 1 file `ToeicScoreConverter.kt` (bảng chuẩn ETS, port đúng từ web).
2. Tạo `ui/screens/toeic/ToeicAssets.kt`: hằng `TOEIC_ASSET_BASE_URL`, hàm sinh URL audio/PDF theo testId, danh sách 20 đề (id + tên tiêu đề vd "ETS 2023 · Test 1").
3. Loader `ToeicAnswerKeyStore` (singleton, `org.json`, đọc assets 1 lần, trả `Map<String, Map<String, String>>`).
4. DONE: build pass; có thể log ra số câu trong mỗi đề (reading 100, listening 100).

### TASK 2 — Hub TOEIC thật (thay mock)
Trong `WordNestNavGraph.kt` destination `TOEIC`: thay `ToeicHubUiState(850, null, emptyList())` + callback `{}` bằng list **20 đề reading** + **20 đề listening** thật (từ `ToeicAssets`), wire `onReadingTestClick(testId)`/`onListeningTestClick(testId)` → `navController.navigate(WordNestRoutes.toeicReading(testId))` / `toeicListening(testId)`. Hub hiển thị "điểm cao nhất từng đề" nếu có lịch sử (lấy từ TASK 4).
DONE: hub không còn số mock, click từng đề điều hướng đúng route.

### TASK 3 — Phòng thi Reading (route `toeic/reading/{testId}`)
1. Register composable trong `WordNestNavGraph` (dùng `navArgument`), dựng `ExamState` từ answer key + URL PDF.
2. Layout: cột trái = PDF (URL), cột phải = phiếu đáp án 101–200 (A–D), Question Map lưới 100 ô, bộ lọc Part5/6/7 & "Chưa làm", auto-advance khi chọn, tự động lưu tiến độ (xem TASK 5). Áp dụng **Draggable Split-Pane** (màn hình dọc) theo spec v3.0.
3. Nộp bài: đối chiếu với answer key → chấm theo part (Part5 X/30, Part6 Y/16, Part7 Z/54) + quy đổi điểm 5–495 qua `getReadingToeicScore`. Hiển thị màn kết quả (Review mode: câu đúng xanh / câu sai đỏ + đáp án đúng xanh).
DONE: làm 1 đề đọc thật → chấm ra điểm + thống kê đúng part, không crash.

### TASK 4 — Phòng thi Listening (route `toeic/listening/{testId}`)
1. Register composable, dựng state. **Sticky Audio Bar** (ExoPlayer): Play/Pause, tua −5s/+5s, seekbar, tốc độ 0.8x/1.0x/1.2x/1.5x; Part1 hình (nếu có imageUrl) cho phép phóng to.
2. 100 câu 1–100 đúng đặc thù (Part1/2 chỉ A–C). Chấm theo part + `getListeningToeicScore`. Màn kết quả + Review.
3. **Lưu mốc audio:** tự động lưu giây đang nghe để khi vào lại được nghe tiếp (xem TASK 5).
DONE: phát audio từ URL, tua/tuổi/chia tốc hoạt, chấm đúng.

### TASK 5 — Lưu tiến độ + audio timestamp (khôi phục phiên)
Dùng **DataStore (hoặc SharedPreferences)** theo đúng key của web để dữ liệu tương thích 2 chiều:
- Reading: `toeic_reading_progress_{testId}` = JSON `{ "qNum": "A", … }` (100 mục) — khi chọn câu, ghi ngay; khi mở lại đề, restore; khi nộp bài xóa key.
- Listening: `toeic_listening_progress_{testId}` (đáp án) + `toeic_listening_time_{testId}` (giây audio, String).
- DONE: làm dở → thoát → mở lại → đúng câu + đúng giây audio đã dừng.

### TASK 6 — Đồng bộ KẾT QUẢ lên Firestore (web + app 2 chiều)
1. Trong `SyncRepository` thêm:
   ```
   data class ExamHistoryEntry(val testId: String, val kind: String, val score: Int, val date: String) // kind: "reading"|"listening"|"intensive"; date ISO "yyyy-MM-dd'T'HH:mm:ss"
   suspend fun pushExamHistory(userId: String, entry: ExamHistoryEntry): Result<Unit>
   ```
   Logic: `getDoc users/{uid}` → đọc mảng `examHistory` hiện có (List<Map>), **prepend** entry (mới nhất ở đầu), giữ **max 50**, `set(mapOf("examHistory" to arr), SetOptions.merge())`.
   Shape TRÙNG web (`toeic_reading_history`: `[{testId, score, date}]`, newest-first, max 50 — xem `lib/examGrading.ts:recordExamHistory`).
2. Khi màn kết quả hiện: nếu `FirebaseAuth.currentUser?.uid != null` → `pushExamHistory`; khách (uid null) → chỉ lưu local + `Log.d` skip.
3. **Lưu ý rules:** thêm field `examHistory` vào doc gốc `users/{userId}` (main doc) → `firestore.rules` hiện đã cho read/write chính chủ, KHÔNG cần sửa rules (xác nhận lại bằng cách đọc `firestore.rules` repo web).
DONE: chấm 1 đề → Firestore `users/{uid}.examHistory` có entry mới (check Firebase Console).

### BAO QUÁT OUT OF SCOPE (để prompt sau)
- **Intensive Listening** (nghe chép chính tả, diff-check) → giữ route `toeic/intensive/{testId}` dạng placeholder, nút play hiện toast "Sẽ có ở bản sau", không crash. Không làm data 20 đề intensive trong prompt này.

### BÁO CÁO NGHIỆM THU (Antigravity TỰ VIẾT, không cần người khác nhắc)
Sau khi hoàn thành, tạo/sửa file **`android/BÁO_CÁO_Nghiệm_Thu_PROMPT1.md`** gồm:
1. **Danh sách file đã thêm/sửa** (tên + 1 dòng mô tả).
2. **Kết quả BƯỚC 0 VERIFY** (id thực tế trong answer key, tên file PDF/audio, domain deploy cuối cùng + dẫn chứng file nào chứng minh).
3. **Lựa chọn kỹ thuật** (xem PDF bằng WebView hay library; DataStore hay SharedPreferences; vì sao).
4. **Bằng chứng build:** output `./gradlew :app:assembleDebug` (pass/fail) của từng task.
5. **Checklist nghiệm thu tự chạy:** (a) 20 đề đọc + 20 đề nghe hiện đúng, (b) chấm điểm 1 đề đọc & 1 đề nghe ra đúng điểm 5–495, (c) khôi phục phiên (đúng câu + đúng giây audio), (d) Firestore `examHistory` có entry mới, (e) không crash khi tap, khách (offline) vẫn học được.
6. **Những gì không verify được / giả định đã đặt** (vd domain web chưa deploy, PDF không xem được nếu offline) — ghi rõ để người duyệt quyết định.
7. Gắn nhãn mức độ: `HOÀN TẤT` / `PHẦN THỰC` (chạy được nhưng còn gap) / `CHƯA LÀM ĐƯỢC` cho từng TASK.

### ĐỊNH NGHĨA DONE (nhận bàn giao)
Tất cả 6 TASK build pass, run được trên emulator (có tài khoản Google), chấm điểm đúng chuẩn ETS, lịch sử đồng bộ lên Firestore đúng shape web, và file **BÁO CÁO NGHIỆM THU** đã được tạo đầy đủ 7 mục trên. Nếu thiếu bất kỳ mục nào → không được tuyên bố "DONE", phải ghi rõ trong báo cáo là gap còn lại.
```

