# PROMPT 2 — Phòng thi Reading: BỎ PDF, HIỆN VĂN BẢN CÂU HỎI TRỰC TIẾP (pilot 1 đề trước, kiến trúc mở rộng 30 đề)

> **Cách dùng:** Mở Android Studio (project `android/`) → chat Gemini/Antigravity → copy toàn bộ block bên dưới gửi. Mỗi TASK build pass (`./gradlew :app:assembleDebug`) trước khi sang task kế. Cuối cùng Antigravity **tự xuất báo cáo nghiệm thu** theo mục cuối.

---

```markdown
### BỐI CẢNH (Kiến trúc sư)
App WordNest Android (`com.tung.wordnest`, `/home/tung/web hoc tu vung/android`). Prompt 1 đã có:
- Room + Firestore sync, hub TOEIC với danh sách đề thật, answer key JSON (20 đề) trong `app/src/main/assets/toeic/`, bảng điểm ETS `ToeicScoreConverter.kt`, `ToeicReadingScreen` hiện đang xem đề bằng **WebView (Google Docs Viewer) + phiếu đáp án**.

**Yêu cầu thay đổi:** Bỏ hẳn cơ chế xem PDF trong phòng thi Reading. Thay vào đó: **hiển thị trực tiếp nội dung đề (câu hỏi, đoạn văn, thư, bảng/charts) dạng dòng chữ trong app**, hiện từng câu. Người dùng có tổng **30 đề TOEIC cơ = 10 đề mỗi năm 2023, 2024, 2026** (2026 là bộ mới nhất) nhưng prompt này **CHỈ LÀM THỬ 1 ĐỀ (pilot)** — phần kiến trúc data + UI phải thiết kế sao về sau chỉ cần thêm file JSON là chạy được đề khác.

**Quy tắc đặc biệt về dữ liệu:** các part đọc cuối (Part 6/7) có **thư (letter), bảng/charts (bản đồ)** → phải **cắt (split) khối nội dung đó và gán vào từng câu hỏi** tương ứng. Ví dụ: 1 thư dùng cho câu 147–150 → nội dung thư được gắn vào mỗi câu 147, 148, 149, 150 (hiện trên khối phía trên câu). Chart/biểu đồ nếu không có text (OCR không lấy được nội dung) → giữ `imageUrl` fallback hiển thị ảnh từ URL web.

### PHẦN ĐÃ CÓ — DÙNG, ĐỪNG VIẾT LẠI
`ToeicAnswerKeyStore`, `ToeicScoreConverter`, `ToeicProgressStore` (progress key `toeic_reading_progress_{testId}`), `SyncRepository.pushExamHistory`, `ToeicHubScreen`, scoring/review hiện có trong `ToeicResultScreen`. Theme tokens `WordNestTheme.*`. `appScope` cho coroutine nền.

### BƯỚC 0 — TỰ VERIFY (bắt buộc, kết quả ghi vào báo cáo)
Nhiệm vụ người dùng đã chốt pilot, nhưng bạn PHẢI tự kiểm tra kho data web (`/home/tung/web hoc tu vung`) để chọn **đề pilot nào có sẵn text OCR đủ 100 câu**:
1. Duyệt các kho data: `test*_ocr_questions.json`, `test*_clean_ocr_questions.json`, `test*_raw_*.json` (root repo), thư mục `bo de 2023`, `bo de 2024`, `_raw_materials`, `data/cleaned_ocr_2023`, `data/extracted_2023`, và **tìm thêm mọi data cho năm 2026** (30 đề = 10 × năm 2023 + 10 × năm 2024 + 10 × năm 2026 — user khẳng định có cả bộ 2026. Manh mối đã biết: `public/key-reading-ets-2026.pdf` (answer key reading ETS 2026) đã nằm trong repo web → bộ 2026 có tồn tại, nhưng **nội dung đề + audio 2026 chưa rõ có ở repo không** — bạn phải xác minh: đọc key-reading-ets-2026.pdf (OCR hoặc đọc tay số lượng câu/đề), tìm `public/tests/*2026*`, `public/audio/*2026*`, file OCR 2026; nếu không thấy trong repo, tìm trên máy user: `~/Tài liệu`, `~/Bản tải về`, các thư mục có "2026"/"toeic". Ghi rõ bạn tìm ở đâu và tìm thấy gì). Liệt kê: đề nào có file OCR, shape JSON của nó (fields gì), đề nào **đủ** 100 câu (101–200) + đủ options A–D (Part 6/7 chỉ 4 options; kiểm tra cả passage letter/table).
2. So với answer key: đọc `app/src/main/assets/toeic/answers_reading.json` → đối chiếu: đề pilot bạn chọn **phải có key chấm điểm** trong đó. Nếu đề pilot không có key (vd đề 2026 chưa port key) → port key từ data web/đề gốc kèm theo (ghi rõ nguồn) hoặc chọn đề có sẵn key.
3. Ghi vào báo cáo: đề pilot cuối cùng (id chuẩn hóa `2023_1`/`2024_3`/`2026_5`…), nguồn file OCR gốc, số câu/option/thiếu sót phát hiện được (vd câu nào thiếu options, block thư/charts nào mất text).
4. **Nếu KHÔNG có đề nào có OCR đủ 100 câu**: đừng tự bịa. Làm pilot với đề có data tốt nhất, các câu/block thiếu → placeholder rõ ràng ("Nội dung câu X chưa số hóa — xem bản gốc"), và ghi rõ trong báo cáo để user quyết định (OCR thêm hay bỏ qua).

### CẤU TRÚC DỮ LIỆU MỤC TIÊU (target shape)
Tạo `app/src/main/assets/toeic/texts/reading_{testId}.json` (1 file/đề, pilot chỉ 1 file) + Kotlin `data class` tương ứng + loader (đọc 1 lần, cache, như `ToeicAnswerKeyStore`):

```json
{
  "testId": "2023_1",
  "title": "ETS 2023 · Test 1",
  "blocks": [
    {
      "id": "b1",
      "part": 5,
      "type": "item" | "passage" | "letter" | "chart" | "table",
      "label": "Câu 101" | "Đoạn văn 1" | "Thư A",
      "text": "nội dung (có thể nhiều dòng, giữ \\n)",
      "imageUrl": null,
      "questionNumbers": [101]
    },
    {
      "id": "b2",
      "part": 6,
      "type": "letter",
      "label": "Thư B (Câu 147–150)",
      "text": "...nội dung thư đã CẮT ra từ đề gốc...",
      "questionNumbers": [147, 148, 149, 150]
    }
  ],
  "questions": [
    {
      "num": 101,
      "part": 5,
      "text": "câu hỏi + ô trống ______",
      "options": ["A...", "B...", "C...", "D..."],
      "blockRefs": ["b1"]
    },
    {
      "num": 147,
      "part": 7,
      "text": "...",
      "options": ["A...", "B...", "C...", "D..."],
      "blockRefs": ["b2"]
    }
  ]
}
```

Quy tắc: `questions` đúng 100 mục (101–200; Part5: 30, Part6: 16, Part7: 54). Block "thư/bảng/charts" bị **cắt và gán** qua `questionNumbers` + `blockRefs` — UI hiện block phía trên câu đang xem. Script validate (unit test): đủ 100 câu, đủ options/câu, mọi `blockRefs`/`questionNumbers` khớp nhau, số câu theo part đúng 30/16/54.

### TASK 1 — Data pilot: 1 đề thật
- Chuyển file OCR (chọn từ BƯỚC 0) → JSON theo target shape trên + `data class` + `ReadingTextStore` (loader assets, kiểu `ToeicAnswerKeyStore`).
- Cắt khối letter/table/chart vào đúng câu theo `questionNumbers` (nội dung phải lấy từ dữ liệu OCR có sẵn — KHÔNG tự viết lại nội dung đề; giữ nguyên text OCR, chỉ tổ chức lại khối).
- Unit test validate (số câu, options, khớp block↔câu).

### TASK 2 — UI phòng thi Reading: text thay PDF
Sửa `ToeicReadingScreen` (và các component con liên quan):
- **Bỏ** WebView/Google Docs Viewer + các nút liên quan PDF.
- Layout: khi ở câu N → hiện các **block của câu N** (đoạn văn/thư/table đã cắt, scroll được, chữ cỡ đọc thoải mái ≥ 14sp) phía trên, sau đó là **câu N + 4 options** (A–D, bấm để chọn — giữ auto-advance + auto-save progress như hiện có).
- **Chế độ xem block**: nếu 1 block gán nhiều câu (thư cho 147–150), hiện 1 lần khi ở câu đầu của block, các câu tiếp theo hiển thị kèm nhãn "Xem lại nội dung" (tự cuộn lên block) — đừng lặp lại nguyên block ở mỗi câu.
- **Câu 101+ (Reading) hiển thị số câu gốc 101–200** (không đánh lại số 1–100), khớp Question Map và answer key.
- Question Map + bộ lọc (Tất cả/Part5/6/7/Chưa làm) + Review Mode (đúng xanh/sai đỏ) giữ nguyên như đã có.
- Scoring, lưu progress (`toeic_reading_progress_{testId}`), `pushExamHistory` giữ nguyên — chỉ đổi nguồn hiển thị đề.
- Chart không có text (`imageUrl`): hiện `AsyncImage` (Coil đã có) từ `{TOEIC_ASSET_BASE_URL}/tests/...` nếu có ảnh; không có ảnh → placeholder "Biểu đồ chưa số hóa".

### TASK 3 — Hub: gắn cờ đề nào "có nội dung text"
`ToeicAssets`: thêm flag `hasTextContent: Boolean` (mặc định false; pilot = true). Hub: đề có text hiện nhãn "📄 Bản chữ", đề khác vẫn để nguyên (xem PDF / disable nút "chưa có nội dung" tùy bạn — chọn cách ít sửa nhất và ghi rõ trong báo cáo). Route pilot: mở room thi đúng đề có text; các đề khác giữ hành vi cũ.

### NGUỒN AUDIO & HÌNH (note bắt buộc từ user — phải ghi nhận)
- **KHÔNG dùng audio từ domain web đã deploy** (`wordnest-english-vocab.web.app` / hằng `TOEIC_ASSET_BASE_URL` ở Prompt 1) **nữa**.
- Nguồn audio chuẩn mới = **file audio trên máy local**, nằm trong thư mục `public/` của repo. (User sẽ **zip audio máy và copy vào `public/`**.)
- Khi phần này hay prompt sau cần phát audio (listening): lấy từ `public/audio` (đường dẫn **local** trong repo, KHÔNG phải URL web). Cách đưa audio vào app (nhúng assets / tải về local khi cần / ...) → **bạn tự quyết định + ghi rõ trong báo cáo**; vì audio mỗi đề ~44MB (30 đề rất lớn), **đề xuất không nhúng hết vào APK** — hãy nêu phương án cân bằng (vd chỉ nhúng đề pilot, hoặc streaming/tải) và lý do.
- Nếu trong `public/` **chưa có** file audio (user chưa zip+copy xong) → trong báo cáo ghi rõ "**chờ user cung cấp file audio**", **KHÔNG** tự bịa URL hay trỏ về web cũ.
- Hình/charts (nếu `imageUrl`): ưu tiên nguồn local `public/` khi có; chỉ fallback URL web khi thật sự cần, và ghi lại.

### RÀO CĂN
Không thêm dependency mới (Coil, Media3 đã có). Giữ theme tokens. Mọi coroutine nền qua `appScope`. Mỗi task build pass, tap không crash, Offline (khách) vẫn làm được bài + chấm điểm (text là assets local nên OK hoàn toàn — điểm hơn PDF).

### BÁO CÁO NGHIỆM THU (Antigravity TỰ VIẾT)
Tạo `android/BÁO_CÁO_Nghiệm_Thu_PROMPT2.md` gồm:
1. File thêm/sửa (tên + 1 dòng).
2. Kết quả BƯỚC 0: kho OCR thực tế, đề pilot chọn + lý do, số câu/options/block thực sự có được, danh sách block thiếu text/câu placeholder.
3. Bằng chứng build: output `./gradlew :app:assembleDebug` + `./gradlew testDebugUnitTest` của từng task.
4. Checklist tự chạy: (a) pilot đề: câu 101–200 hiện chữ, (b) click 1 câu Part 7 (147+) → block thư/table đã cắt hiện đúng, (c) chọn đáp án → auto-advance + save, thoát vào lại → khôi phục, (d) chấm điểm đúng bảng ETS, `examHistory` vào Firestore, (e) Offline vẫn dùng được (không cần mạng cho phần chữ), (f) các đề khác (không có text) không bị phá hành vi cũ.
5. Giả định/gap: gì chưa verify, đề xuất prompt 3 (số hóa 29 đề còn lại) — không làm trong prompt này.
6. Nhãn `HOÀN TẤT / PHẦN THỰC / CHƯA LÀM ĐƯỢC` từng TASK.

### ĐỊNH NGHĨA DONE
Pilot 1 đề chạy đầy đủ: text thay PDF, block đã cắt gán đúng câu, chấm điểm + progress + sync không đổi, 2 đề khác không crash; báo cáo đủ 6 mục. Thiếu mục nào → ghi rõ trong báo cáo, không được tuyên bố DONE.
```

---

## Ghi chú cho bạn (không đưa Antigravity)
- Bạn xác nhận web có **30 đề = 10 đề × năm 2023, 2024, 2026**. Khi tôi quét repo: danh sách đề trong `ToeicAssets`/PDF hiện tại mới có 20 (2023+2024); **bộ 2026 mới thấy 1 manh mối là `public/key-reading-ets-2026.pdf` (chỉ có answer key, chưa thấy nội dung đề + audio 2026 trong repo)**. BƯỚC 0 đã yêu cầu Antigravity tự xác minh: đọc file key 2026, tìm PDF/audio/OCR 2026 trong repo, không thấy thì ra `~/Tài liệu` / `~/Bản tải về` — và ghi kết quả vào báo cáo. Nếu bạn biết chính xác bộ 2026 (nội dung 10 đề) nằm ở folder nào, cho tôi đường dẫn để ghi thẳng vào BƯỚC 0.
- Data OCR câu hỏi hiện chỉ rải ở vài đề (test4, test5, test10_2024…) — pilot chọn đề OCR tốt nhất; 29 đề còn lại số hóa ở Prompt 3.
