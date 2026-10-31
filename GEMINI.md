# Quy tắc phát triển Android trong dự án WordNest

## 1. NO DIRECT ANDROID CODING (Quy tắc vai trò)
- Tuyệt đối KHÔNG tự ý tạo, chỉnh sửa hoặc can thiệp mã nguồn trong thư mục `android/` khi chưa có yêu cầu rõ ràng từ người dùng.
- Khi gặp lỗi hoặc cần phát triển tính năng Android, vai trò của AI là:
  1. Phân tích nguyên nhân gốc rễ (Root cause) qua log/kiến trúc.
  2. Soạn sẵn nội dung Prompt chi tiết, chuẩn xác để người dùng copy và giao việc cho Agent trong Android Studio thực hiện.
- Chỉ can thiệp code Android khi người dùng nêu đích danh: "hãy code cho tôi", "sửa file này trực tiếp giúp tôi".

## 2. WORDNEST UI/UX MASTER SPECIFICATION V3.0 (Quy tắc thiết kế cốt lõi)
Mọi thiết kế giao diện, bố cục màn hình và Prompt sinh code Compose BẮT BUỘC tuân thủ tài liệu tham chiếu duy nhất: `docs/design/UI_UX_SPECIFICATION_V3.md`:
- **Bản sắc thương hiệu & Màu sắc:** 
  - Màu chủ đạo: `Forest900` (`#1B3A32`), CTA: `Amber400` (`#F6D365`) luôn đi kèm chữ `Forest900`, nền giấy ấm: `Cream50` (`#FBF9F4`), nền phụ: `Beige100` (`#F6F3EC`).
  - Màu ngữ nghĩa: Thành công/Thuộc `Mint500` (`#10B981`), Cảnh báo/Chưa nhớ `Coral500` (`#E8503A`), Streak `Orange600` (`#EA580C`).
  - Typography: Font *Fraunces* (tiêu đề, thẻ lớn, con số) & *Be Vietnam Pro* (nội dung, UI) & *JetBrains Mono* (đồng hồ học tập `tabular-nums`).
- **Hệ thống 4 Tab chính (Bottom Navigation):**
  1. `Trang chủ (home)`: Hero Card ôn tập hôm nay, Spotlight Card bài đang làm dở, từ vừa thêm, lối tắt TOEIC, tiến độ ngày (120p) & Streak.
  2. `Bộ từ (decks)`: Danh sách bộ từ, tìm kiếm từ vựng toàn cục, tích hợp Phân khu Chủ đề Đời sống & Giao tiếp (Filter chip: `Tất cả` · `Cần ôn` · `Của tôi` · `TOEIC` · `Đời sống`).
  3. `Luyện thi (toeic)`: Hub luyện thi TOEIC, Intensive Listening, Reading (Part 5–7), Listening (Part 1–4).
  4. `Tôi (me)`: Hồ sơ tài khoản, trạng thái đồng bộ Firestore, Biểu đồ cột 7 ngày, Monthly Activity Heatmap có Legend rõ ràng, Cài đặt.
- **Hệ thống Nút nổi Ngữ cảnh (Contextual Action System):**
  - Tuyệt đối không để 2 nút nổi cùng lúc.
  - Tại `Trang chủ` & `Luyện thi`: Hiện nút tròn `Quick Hub (⚡)` mở Speed-Dial (Dịch nhanh, Ôn từ đến hạn, Ghi chú, Việc làm).
  - Tại `Bộ từ`: Hiện `Extended FAB` (`+ Tạo bộ mới` / `+ Thêm từ`).
  - Tại `Tôi` & màn hình tập trung (Flashcard, Phòng thi): Ẩn hoàn toàn nút nổi và BottomBar.
- **Màn hình học thuật nâng cao:**
  - TOEIC Part 7: Thiết kế cơ chế `Draggable Split-Pane` (phân đôi màn hình đọc đoạn văn và làm câu hỏi với thanh kéo linh hoạt).
  - Intensive Listening: Bố cục tự co giãn theo bàn phím (`imePadding()`), giao diện Diff-Check đối chiếu từ đúng/sai/thiếu.
- **Chuẩn kỹ thuật Compose:**
  - Áp dụng Unidirectional Data Flow (`UiState` & `UiEvent`).
  - Đảm bảo ma trận 5 trạng thái: `Loading` (Shimmer Skeleton), `Empty` (CTA định hướng), `Offline` (Banner thông báo không chặn học), `Error`, `Interrupted Session` (khôi phục tiến độ qua Spotlight Card).
  - `statusBarsPadding()`, `navigationBarsPadding()`, `contentPadding(bottom = 96.dp)` cho `LazyColumn` để không bị che bởi BottomBar/FAB.
