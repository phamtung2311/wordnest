# WordNest Android — Đặc tả Thiết kế Tổng thể & Chi tiết UI/UX (Bản Master v3.0)

> **Mục đích:** Tài liệu đặc tả thiết kế giao diện (UI) và trải nghiệm người dùng (UX) toàn diện ở cấp độ Production-Ready cho ứng dụng học ngoại ngữ **WordNest Android**. Tài liệu dùng làm nguồn tham chiếu duy nhất (Single Source of Truth) để dựng Design System, Wireframe, Prototype trên Figma và triển khai giao diện bằng **Jetpack Compose (Material 3)**.
>
> **Phạm vi:** Định nghĩa chi tiết hệ thống Design Tokens, lưới bố cục (Grid & Insets), kiến trúc điều hướng, thư viện Component đa trạng thái, wireframe logic cho từng màn hình, quy tắc vi tương tác (Micro-interactions), xử lý bàn phím/âm thanh và chuẩn bàn giao kỹ thuật.
>
> **Nguyên tắc cốt lõi:** 
> 1. **Giữ vững bản sắc WordNest:** Ấm áp, học thuật hiện đại (`Forest900`, `Amber400`, `Cream50`, font *Fraunces* & *Be Vietnam Pro*).
> 2. **Ergonomics & Thumb-friendly:** Tối ưu hoàn toàn cho thao tác một tay trên điện thoại, giải quyết triệt để xung đột giữa thanh điều hướng, nút nổi (FAB/Dock) và bàn phím ảo.
> 3. **Clarity over Complexity:** Ưu tiên luồng học từ vựng và luyện thi không xao nhãng; tách bạch rõ ràng giữa giao diện hiển thị và logic nghiệp vụ.

---

## 1. Tổng hợp nâng cấp từ bản v2.1 lên bản Master v3.0

1. **Giải quyết triệt để xung đột Điều hướng + Quick Dock + FAB:** 
   - Chốt cấu trúc **4 Tab chính** (`Trang chủ`, `Bộ từ`, `Luyện thi`, `Tôi`) để đảm bảo độ rộng mỗi tab tối thiểu `80dp–90dp`, tránh cắt chữ tiếng Việt. Mục "Đời sống" được tích hợp thành phân khu **Chủ đề Đời sống & Giao tiếp** nổi bật ngay trong tab `Bộ từ`.
   - Hợp nhất Quick Dock và FAB thành hệ thống **Contextual Action System**: Không bao giờ xuất hiện 2 nút nổi cùng lúc. Tại màn hình có hành động tạo mới chính (như Chi tiết bộ từ), nút chính là FAB `+ Thêm từ`; tại màn hình tổng quan (Trang chủ), nút nổi đóng vai trò **Quick Hub (`⚡`)** mở ra các tiện ích nhanh (Dịch nhanh, Ghi chú, Việc cần làm, Ôn từ đến hạn).
2. **Bổ sung thông số Typography, Grid & WindowInsets cấp độ Pixel/DP:** 
   - Bổ sung đầy đủ `Line-height`, `Letter-spacing`, `Max-lines` và quy tắc co giãn chữ tự động (`AutoSizeText`) cho các từ vựng dài trên Flashcard.
   - Quy định rõ cách xử lý `statusBarsPadding()`, `navigationBarsPadding()`, và `imePadding()` (khi bàn phím bật lên).
3. **Đặc tả sâu các màn hình học thuật phức tạp (TOEIC Part 7 & Intensive Listening):**
   - Thiết kế cơ chế **Draggable Split-Pane (Khung kéo phân đôi màn hình)** cho bài đọc hiểu TOEIC Part 7 trên điện thoại giúp đọc đoạn văn và chọn đáp án cùng lúc mà không phải cuộn lên xuống liên tục.
   - Đặc tả chi tiết giao diện **Diff-Check (So khớp từ)** trong Intensive Listening khi bàn phím ảo chiếm nửa dưới màn hình.
4. **Chuẩn hóa State Matrix & Compose Handoff:** Mỗi màn hình và component đều có ma trận trạng thái (`Loading`, `Empty`, `Populated`, `Error`, `Offline`) và cấu trúc `UiState` / `UiEvent` chuẩn bị sẵn cho lập trình viên.

---

## 2. Hệ thống Design Tokens & Nền tảng Thị giác (Foundations)

### 2.1 Bảng màu chi tiết & Ánh xạ Material 3 (Color System)

#### A. Light Theme (Mặc định — Tinh thần giấy ấm & rừng sâu)

| Token Name | Mã HEX | Vai trò Material 3 gợi ý | Công dụng chi tiết trên UI & Quy tắc tương phản |
|---|---|---|---|
| `Forest900` | `#1B3A32` | `primary` / `onSecondary` | Màu thương hiệu chính, tiêu đề lớn, nền Spotlight card, chữ trên nút `Amber400` (Contrast với `Cream50`: **11.8:1** — Đạt chuẩn AAA). |
| `Forest700` | `#2F5D50` | `primaryContainer` (đậm) | Icon đang active, đường viền nhấn, nút phụ, trạng thái focus của ô nhập liệu. |
| `Sage300` | `#9CCBB8` | `outlineVariant` (nhấn) | Viền trang trí nhẹ, nền badge phụ, thanh progress phụ. |
| `Sage100` | `#E6F2ED` | `secondaryContainer` | Nền pill active trên Bottom Navigation, nền tag phân loại từ loại (Noun, Verb...). |
| `Amber400` | `#F6D365` | `secondary` (CTA Fill) | Nền nút CTA chính (`PrimaryButton`). **Bắt buộc** đi kèm chữ màu `Forest900` (`#1B3A32`), tuyệt đối không dùng chữ trắng. |
| `Amber500` | `#F59E0B` | `tertiary` | Icon ngọn lửa Streak, ngôi sao đánh giá, điểm nhấn chữ "Nest" trong logo, trạng thái "Hơi nhớ". |
| `AmberTint` | `#FEF3C7` | `tertiaryContainer` | Nền badge streak, nền thẻ cảnh báo nhẹ, nền nút "Hơi nhớ" trên Flashcard. |
| `Mint500` | `#10B981` | Custom Semantic Success | Thanh tiến độ hoàn thành, icon trả lời đúng, trạng thái "Đã thuộc". |
| `MintTint` | `#D1FAE5` | Custom Success Container | Nền thông báo đáp án đúng, nền nút "Đã thuộc" trên Flashcard, nền ô Heatmap đạt mục tiêu. |
| `Coral500` | `#E8503A` | Custom Semantic Warning/Due | Nhãn "CẦN HỌC HÔM NAY", trạng thái "Chưa nhớ", cảnh báo sắp hết giờ làm bài. *(Chỉ dùng cho chữ $\ge 14\text{sp}$ Bold hoặc đi kèm nền `CoralTint` + chữ `#991B1B` để đạt chuẩn WCAG AA)*. |
| `CoralTint` | `#FDE4E4` | Custom Warning Container | Nền icon chuông báo, nền nút "Chưa nhớ", nền tô sáng từ gõ sai trong Intensive Listening. |
| `Orange600` | `#EA580C` | Custom Accent Streak | Chữ và số liệu bên trong thẻ Streak. |
| `OrangeTint` | `#FFF1E6` | Custom Streak Container | Nền thẻ thống kê chuỗi ngày học liên tiếp (Streak card). |
| `Pink600` | `#DB2777` | Custom Accent Milestone | Điểm nhấn tổng số ngày học tích lũy. |
| `PinkTint` | `#FDF2F8` | Custom Milestone Container | Nền thẻ thống kê tổng số ngày học thành công. |
| `Blue600` | `#1E6FA8` | Custom Accent Info/Audio | Icon loa phát âm, nút Dịch nhanh, trạng thái câu hỏi đang chọn trong Question Navigator. |
| `BlueTint` | `#E0F2FE` | Custom Info Container | Nền nút phát âm khi đang phát (Playing state), nền từ vựng được chọn để tra nhanh. |
| `Cream50` | `#FBF9F4` | `background` | Nền tổng thể của toàn bộ màn hình ứng dụng (giúp dịu mắt khi đọc lâu hơn nền trắng tinh). |
| `Beige100` | `#F6F3EC` | `surfaceVariant` | Nền của `WordChip`, ô tìm kiếm (`SearchField`), vùng chứa đoạn văn TOEIC, nền thẻ ghi chú. |
| `Surface` | `#FFFFFF` | `surface` | Nền của Card chính, Flashcard, Modal Bottom Sheet, Dialog. |
| `Ink900` | `#0F172A` | `onBackground` / `onSurface` | Chữ nội dung chính, câu hỏi bài thi, định nghĩa từ vựng. |
| `Slate600` | `#475569` | `onSurfaceVariant` | Chữ phụ, phiên âm IPA, câu ví dụ, mô tả ngắn (Thay thế `Slate500` ở các cỡ chữ $< 13\text{sp}$ để đảm bảo độ tương phản $\ge 4.5:1$ trên nền `Beige100`). |
| `Slate400` | `#94A3B8` | Disabled / Placeholder | Chữ gợi ý trong ô nhập (Placeholder), icon bị vô hiệu hóa. |
| `Line200` | `#E7E2D8` | `outline` | Đường viền 1dp của mọi Card, đường kẻ phân cách (Divider). |
| `Error600` | `#DC2626` | `error` | Báo lỗi nhập liệu, nút Xóa bộ từ, đáp án sai trong bài thi. |

#### B. Dark Theme (Chế độ Ban đêm — Bảo vệ mắt khi học khuya)

| Vai trò | Token Dark | Mã HEX | Quy tắc chuyển đổi từ Light Theme |
|---|---|---|---|
| Nền màn hình | `DarkBg` | `#0E1A17` | Thay thế `Cream50`. |
| Nền Card / Sheet | `DarkSurface` | `#16261F` | Thay thế `Surface` (`#FFFFFF`). |
| Nền Card cấp 2 / Input | `DarkSurfaceElevated` | `#1E332A` | Thay thế `Beige100` (dùng cho `WordChip`, `SearchField`, BottomSheet). |
| Viền Card & Divider | `DarkBorder` | `#263E35` | Thay thế `Line200`. |
| Chữ chính | `DarkTextPrimary` | `#F1F5F2` | Thay thế `Ink900` và `Forest900` (khi đóng vai trò tiêu đề). |
| Chữ phụ / IPA | `DarkTextSecondary` | `#A3B8B0` | Thay thế `Slate600`. |
| Nền Spotlight | `DarkSpotlight` | `#234A3E` | Giữ độ nổi bật so với `DarkSurface`. |
| Nút CTA chính | `Amber400` | `#F6D365` | Giữ nguyên nền `#F6D365` và chữ `#1B3A32` để giữ điểm nhấn thương hiệu. |
| Semantic Tints (Đỏ/Vàng/Xanh) | `DarkCoralTint` / `DarkMintTint` | Độ trong suốt `18%` | Không dùng mã HEX tint sáng chói của Light Theme; dùng màu gốc (`Coral500`, `Mint500`, `Amber500`) với `alpha = 0.18f` đè lên `DarkSurface`. |

---

### 2.2 Hệ thống Typography & Quy tắc hiển thị đa ngôn ngữ

Ứng dụng hiển thị song song **Tiếng Anh** (từ vựng, đoạn văn học thuật), **Ký hiệu phiên âm quốc tế IPA** và **Tiếng Việt** (dấu thanh phức tạp).

| Style Token | Font Family | Weight | Size (sp) | Line Height (sp) | Letter Spacing | Công dụng & Quy tắc cắt dòng |
|---|---|---|---|---|---|---|
| `DisplayFlashcard` | **Fraunces** | Bold (700) | `34sp` | `42sp` | `-0.5sp` | Từ vựng tiếng Anh mặt trước Flashcard. Tự động thu nhỏ xuống `26sp` nếu từ dài $> 14$ ký tự. |
| `DisplayStat` | **Fraunces** | Bold (700) | `28sp` | `34sp` | `-0.3sp` | Con số thống kê lớn trên Hero Card, điểm số TOEIC tổng kết. |
| `HeadlineLarge` | **Fraunces** | Bold (700) | `22sp` | `28sp` | `0sp` | Tiêu đề màn hình, tiêu đề Hero Card ("42 từ đang chờ bạn"). Tối đa 2 dòng. |
| `HeadlineMedium` | **Fraunces** | SemiBold (600) | `18sp` | `24sp` | `0sp` | Tiêu đề Section chính, tên Bộ từ trong màn hình chi tiết. |
| `TitleLarge` | **Be Vietnam Pro** | SemiBold (600) | `16sp` | `24sp` | `0sp` | Tiêu đề Card (`DeckCard`, `ShortcutCard`), từ vựng trong danh sách, tiêu đề BottomSheet. |
| `TitleMedium` | **Be Vietnam Pro** | SemiBold (600) | `14sp` | `20sp` | `0.1sp` | Nhãn nút bấm (`Button`), tab chữ, từ vựng trong `WordChip`. |
| `BodyLarge` | **Be Vietnam Pro** | Regular (400) | `15sp` | `24sp` | `0.15sp` | Đoạn văn bài đọc TOEIC Part 6/7, câu hỏi trắc nghiệm, định nghĩa chi tiết từ vựng (Tối ưu tốc độ đọc). |
| `BodyMedium` | **Be Vietnam Pro** | Regular (400) | `14sp` | `20sp` | `0.1sp` | Nội dung mô tả thông thường, câu ví dụ tiếng Anh & bản dịch tiếng Việt. |
| `PhoneticIPA` | **Noto Sans / System** | Regular (400) | `14sp` | `20sp` | `0.2sp` | Phiên âm quốc tế (ví dụ: `/əˈkɒm.ə.deɪt/`). Dùng font hỗ trợ đầy đủ ký tự Unicode IPA. |
| `Caption` | **Be Vietnam Pro** | Medium (500) | `12sp` | `16sp` | `0.2sp` | Chữ phụ, chú thích thời gian, nhãn dưới thanh điều hướng đáy. |
| `Overline` | **Be Vietnam Pro** | ExtraBold (800)| `11sp` | `16sp` | `1.2sp` | Nhãn phân mục viết hoa toàn bộ (ví dụ: `CẦN HỌC HÔM NAY`, `TIẾN ĐỘ HỌC`). |
| `MonoTimer` | **JetBrains Mono** | Bold (700) | `13sp` / `32sp`| `18sp` / `40sp`| `0sp` | Đồng hồ đếm giờ trên TopBar (`13sp`) và trong Timer Sheet / Phòng thi (`32sp`). Bắt buộc bật `tabular-nums` để số không bị giật ngang khi nhảy giây. |

> **Quy tắc Dynamic Type (Khả năng tiếp cận):**
> - Cho phép chữ phóng to theo cài đặt hệ thống từ `0.85x` đến `1.5x` đối với các thành phần điều hướng cố định (TopBar, BottomBar) và đến `2.0x` đối với nội dung bài đọc/từ vựng.
> - Tuyệt đối không đặt `height` cố định (fixed dp) cho các Card chứa văn bản; dùng `heightIn(min = ...)` để Card tự giãn chiều dọc khi người dùng bật chữ lớn.

---

### 2.3 Lưới bố cục, Khoảng cách & Vùng an toàn (Layout, Grid & Safe Area Insets)

1. **Hệ thống lưới (8pt/4pt Baseline Grid):**
   - Mọi kích thước, padding, margin đều là bội số của `4dp` (`4, 8, 12, 16, 20, 24, 32, 48, 56, 64dp`).
   - Lề ngang tiêu chuẩn của màn hình (`Screen Horizontal Margin`): **`16dp`** trên điện thoại (`< 600dp`), **`24dp`** trên màn hình gập/tablet nhỏ (`600dp–839dp`).
   - Khoảng cách giữa các Section lớn trên một trang cuộn: **`20dp`**.
   - Khoảng cách giữa các Card trong cùng một danh sách: **`12dp`**.
   - Padding bên trong Card lớn (Hero, Deck Detail Header): **`20dp`**; Card tiêu chuẩn: **`16dp`**; Chip/Card nhỏ: **`12dp`**.
2. **Bo góc (Corner Radius Tokens):**
   - `RadiusXL` (`28dp`): Hai góc trên của Modal Bottom Sheet.
   - `RadiusLarge` (`24dp`): Hero Card, Flashcard chính, Spotlight Card.
   - `RadiusMedium` (`20dp`): `DeckCard`, `ShortcutCard`, `StatCard`, Dialog.
   - `RadiusSmall` (`14dp`): `PrimaryButton`, `WordChip`, `SearchField`, `TextField`, Answer Option Card.
   - `RadiusPill` (`50%` hoặc `999dp`): Timer Capsule, Streak Chip, Filter Chip, Tag từ loại.
3. **Quản lý Vùng an toàn (Edge-to-Edge WindowInsets):**
   - Ứng dụng chạy ở chế độ **Edge-to-Edge** toàn màn hình.
   - **TopBar:** Áp dụng `Modifier.statusBarsPadding()`, tổng chiều cao vùng nội dung TopBar là `56dp`.
   - **Bottom Navigation:** Áp dụng `Modifier.navigationBarsPadding()`, chiều cao phần nút điều hướng là `64dp`.
   - **Bottom Padding của danh sách cuộn (`LazyColumn`):** Mọi danh sách ở màn hình có BottomBar và nút nổi phải có `contentPadding(bottom = 96.dp)` để item cuối cùng khi cuộn hết cỡ vẫn nằm cao hơn nút nổi, không bao giờ bị che khuất.
   - **Khi bàn phím ảo bật lên (`IME Inset`):** Các BottomSheet nhập liệu (Thêm từ, Dịch nhanh, Ghi chú) và màn hình Intensive Listening phải áp dụng `Modifier.imePadding()`, tự động đẩy thanh nút bấm chính (`Lưu`, `Kiểm tra`) nằm ngay sát mép trên của bàn phím.

---

## 3. Kiến trúc Điều hướng & Cơ chế Nút nổi Thông minh (Navigation & Action Architecture)

### 3.1 Sơ đồ Điều hướng Tổng thể (4 Tab Chính)

Để tối ưu trải nghiệm trên điện thoại và tránh mật độ điều khiển quá dày đặc, thanh điều hướng đáy (Bottom Navigation) được chuẩn hóa thành **4 Tab chính**:

| Thứ tự | Tên Tab | Route gốc | Icon (Inactive / Active) | Nội dung & Trách nhiệm chính |
| :---: |---|---|---|---|
| **1** | **Trang chủ** | `home` | Ngôi nhà viền mảnh / Ngôi nhà đặc | Bảng điều khiển hàng ngày: Hero ôn tập hôm nay, từ vừa thêm, lối tắt tiếp tục bài thi dở, thống kê nhanh tiến độ & streak. |
| **2** | **Bộ từ** | `decks` | Tập thẻ / Tập thẻ đặc | Quản lý toàn bộ kho từ vựng: Bộ từ của tôi, Bộ từ TOEIC, và **Phân khu Chủ đề Đời sống & Giao tiếp** (thay thế cho tab Đời sống rời rạc). Có thể lọc nhanh qua các chip: `Tất cả` · `Cần ôn` · `Của tôi` · `TOEIC` · `Đời sống`. |
| **3** | **Luyện thi** | `toeic` | Tai nghe & Đề thi | Trung tâm luyện thi TOEIC: Intensive Listening (nghe chép chính tả), Luyện Reading (Part 5–7), Luyện Listening (Part 1–4) và danh sách bộ đề. |
| **4** | **Tôi** | `me` | Cá nhân | Hồ sơ tài khoản, trạng thái đồng bộ, biểu đồ Lịch sử học & Heatmap chi tiết, Cài đặt ứng dụng. |

### 3.2 Quy tắc hiển thị App Shell (TopBar & BottomBar)

| Nhóm màn hình | TopBar chính | Bottom Navigation | Nút nổi (Quick Hub / FAB) | Lý do UX |
|---|:---:|:---:|:---:|---|
| **Màn hình gốc 4 Tab** (`Trang chủ`, `Bộ từ`, `Luyện thi`, `Tôi`) | Hiện | Hiện | Hiện (Tùy ngữ cảnh tab) | Cho phép chuyển đổi nhanh giữa các khu vực chính. |
| **Màn hình cấp 2 xem thông tin** (`Chi tiết bộ từ`, `Lịch sử học`, `Cài đặt`) | Ẩn (Thay bằng Header có nút `← Back`) | Ẩn | Chỉ hiện FAB `+ Thêm từ` ở Chi tiết bộ từ | Mở rộng không gian đọc danh sách từ và biểu đồ. |
| **Màn hình Tập trung cao độ** (`Flashcard Session`, `Phòng thi Reading/Listening`, `Intensive Listening`) | **Ẩn hoàn toàn** | **Ẩn hoàn toàn** | **Ẩn hoàn toàn** | Chống chạm nhầm thoát phiên học, tối đa hóa diện tích hiển thị thẻ từ và đề thi. |

### 3.3 Giải pháp Hợp nhất Quick Dock & FAB (Contextual Floating Action System)

**Quy tắc vàng:** *Tại bất kỳ thời điểm nào trên màn hình, chỉ có tối đa 01 nút nổi (Floating Button) ở góc dưới bên phải (hoặc bên trái nếu người dùng đổi tay thuận trong Cài đặt), cách mép màn hình `16dp` và cách mép trên của Bottom Navigation `16dp`.*

1. **Tại Tab `Trang chủ` và `Luyện thi` — Hiển thị nút `Quick Hub (⚡)`:**
   - **Trạng thái đóng (Collapsed):** Nút tròn `56dp x 56dp`, nền `Forest900`, viền `1dp` màu `Sage300/30%`, icon tia chớp hoặc tổ ong màu `Amber400`. Nếu có công việc cần làm hoặc từ đến hạn khẩn, hiển thị chấm badge `10dp` màu `Coral500` ở góc trên phải nút.
   - **Trạng thái mở (Expanded Speed-Dial):** Khi chạm vào nút `Quick Hub`, phủ một lớp nền mờ `Scrim` (`#0F172A` với `alpha = 0.45f`) lên màn hình, nút chính xoay `45°` thành icon đóng (`✕`), đồng thời bung lên 4 nút hành động dạng Pill nằm ngang (Icon `44dp` + Nhãn chữ nền trắng bo tròn bên cạnh) theo thứ tự từ dưới lên (gần ngón cái nhất là tính năng hay dùng nhất):
     1. **Dịch nhanh** (Icon `Translate` — Màu `Blue600`) → Mở *Quick Translate BottomSheet*.
     2. **Ôn từ đến hạn** (Icon `Cards` + Badge số từ `X` — Màu `Coral500`) → Vào thẳng phiên *Flashcard Due Session*.
     3. **Sổ tay ghi chú** (Icon `Notebook` — Màu `Forest700`) → Mở *Quick Notes BottomSheet*.
     4. **Việc cần làm** (Icon `Checklist` + Badge số việc — Màu `Amber500`) → Mở *To-do BottomSheet*.
2. **Tại Tab `Bộ từ` và màn hình `Chi tiết bộ từ` — Hiển thị `Extended FAB`:**
   - Thay thế nút Quick Hub bằng nút hành động ngữ cảnh rõ ràng: **`+ Tạo bộ mới`** (ở danh sách bộ từ) hoặc **`+ Thêm từ`** (ở chi tiết bộ từ), nền `Amber400`, chữ `Forest900` Bold, cao `52dp`, bo góc `16dp`.
   - Khi người dùng cuộn danh sách xuống dưới (`scroll down`), Extended FAB tự động thu gọn phần chữ, chỉ giữ lại icon `+` (`52dp x 52dp`) để không che danh sách; khi cuộn lên (`scroll up`), nút mở rộng lại phần chữ.
3. **Tại Tab `Tôi`:** Ẩn hoàn toàn nút nổi để giao diện cài đặt và thống kê sạch sẽ.

---

## 4. Thư viện Component Chuẩn hóa (Component Specifications)

### 4.1 Hệ thống Nút bấm (Buttons)
- **`PrimaryButton`:** Chiều cao `48dp` (hoặc `52dp` cho CTA chính ở đáy màn hình/Hero card), bo góc `14dp`, nền `Amber400` (`#F6D365`), chữ `Forest900` (`15sp SemiBold`).
  - *Pressed state:* Nền chuyển sang `#EBC34B`, scale nhẹ `0.98f` trong `100ms`.
  - *Disabled state:* Nền `Line200` (`#E7E2D8`), chữ `Slate400` (`#94A3B8`).
  - *Loading state:* Thay chữ bằng `CircularProgressIndicator` kích thước `20dp`, độ dày `2.5dp`, màu `Forest900`.
- **`SecondaryDarkButton`:** Chiều cao `48dp`, bo góc `14dp`, nền `Forest900`, chữ `Surface` (`#FFFFFF`). Dùng cho các hành động quan trọng thứ hai (ví dụ: "Ôn tập" đặt cạnh nút "Học mới").
- **`OutlinedActionButton`:** Chiều cao `48dp`, bo góc `14dp`, nền trong suốt, viền `1.5dp` màu `Forest700`, chữ `Forest900`.

### 4.2 Thẻ Từ vựng Nhanh (`WordChip`)
- **Kích thước:** Chiều rộng `1 cột` trong lưới 2 cột (cách nhau `10dp`), chiều cao tối thiểu `64dp`, bo góc `14dp`, nền `Beige100`, viền `1dp Line200`, padding ngang `12dp`, dọc `10dp`.
- **Cấu trúc nội dung:**
  - Dòng 1: Từ tiếng Anh (`TitleMedium` `14sp SemiBold`, màu `Forest900`, `maxLines = 1`, `Ellipsis`) + Chấm tròn `8dp` ở góc phải biểu thị trạng thái nhớ (`Coral500`: Mới/Chưa nhớ, `Amber500`: Đang học, `Mint500`: Đã thuộc).
  - Dòng 2: Từ loại viết tắt đặt trong ngoặc `(n)`, `(v)` + Nghĩa tiếng Việt (`Caption` `12sp`, màu `Slate600`, `maxLines = 1`, `Ellipsis`).
- **Tương tác:** Chạm vào mở *Word Detail BottomSheet* (hoặc màn hình chi tiết từ); nhấn giữ (`Long press`) hiện menu nhanh: `Phát âm` · `Sửa` · `Xóa`.

### 4.3 Thẻ Bộ từ (`DeckCard`)
- **Kích thước:** Full-width (trừ lề `16dp` hai bên) hoặc dạng Grid 2 cột trên Tablet; bo góc `20dp`, nền `Surface`, viền `1dp Line200`, padding `16dp`.
- **Cấu trúc nội dung:**
  - **Hàng trên:**
    - Khối Icon/Emoji bìa: Kích thước `48dp x 48dp`, bo góc `14dp`, nền theo màu chủ đề của bộ từ (chọn từ 6 màu pastel kiểm soát sẵn), hiển thị Emoji `24sp` ở giữa.
    - Cụm tiêu đề (cách icon `12dp`): Tên bộ từ (`TitleLarge` `16sp SemiBold`, `Ink900`, tối đa 2 dòng) + Dòng thông tin phụ (`Caption` `12sp`, `Slate600`: `"120 từ • 18 từ cần ôn"`).
    - Nút Menu `⋮` (`48dp x 48dp` vùng chạm, icon `20dp`) ở góc trên phải.
  - **Hàng giữa (cách `12dp`):** Thanh tiến độ phân đoạn (`Segmented ProgressBar`) cao `8dp`, bo tròn `4dp`, nền `Beige100`, hiển thị 2 lớp màu: phần "Đã thuộc" màu `Mint500` và phần "Đang học" màu `Amber400`.
  - **Hàng dưới (cách `10dp`):** Bên trái hiển thị tỷ lệ phần trăm hoàn thành (`12sp Medium`, `Forest700`); bên phải là nút nhỏ dạng Pill `"Học ngay →"` (cao `32dp`, nền `AmberTint`, chữ `Forest900` `12sp Bold`) nếu có từ cần học.

---

## 5. Đặc tả Chi tiết Từng Màn hình (Screen-by-Screen Wireframe & Behavior Specs)

### 5.1 Luồng Khởi động, Onboarding & Xác thực

#### A. Splash Screen (Sử dụng Android 12+ `SplashScreen` API)
- **Giao diện:** Nền `Forest900` (`#1B3A32`). Biểu tượng cuốn sách mở kết hợp tổ chim WordNest kích thước `88dp` ở tâm màn hình. Phía dưới là dòng chữ **Word** (`#FFFFFF`) **Nest** (`#F59E0B`) dùng font *Fraunces 28sp Bold*.
- **Hành vi:** Tự động chuyển màn hình ngay khi kiểm tra xong trạng thái phiên đăng nhập cục bộ (thường $< 500\text{ms}$), tuyệt đối không dùng `delay()` cố định làm chậm trải nghiệm mở app.

#### B. Onboarding (Chỉ hiển thị lần đầu cài đặt — 3 Slide gọn nhẹ)
- **Bố cục:** Nút `"Bỏ qua"` ở góc trên phải. Giữa màn hình là hình minh họa Vector ấm áp (tỷ lệ `1:1`, tối đa `260dp`). Phía dưới là Tiêu đề (`HeadlineLarge` `22sp`) và mô tả 2 dòng (`BodyMedium` `14sp`, `Slate600`). Đáy màn hình có Page Indicator (dạng viên thuốc giãn dài khi active) và nút `PrimaryButton`.
  - *Slide 1:* **Ghi nhớ từ vựng bền vững** — Học qua Flashcard thông minh và lặp lại ngắt quãng (SRS) đúng thời điểm não bộ sắp quên.
  - *Slide 2:* **Chinh phục TOEIC thực chiến** — Luyện nghe chép chính tả từng câu (Intensive Listening) và giải đề Reading/Listening có giải thích chi tiết.
  - *Slide 3:* **Xây dựng thói quen mỗi ngày** — Theo dõi thời gian học thực tế, giữ chuỗi ngày học (Streak) và cá nhân hóa mục tiêu của riêng bạn.

#### C. Màn hình Đăng nhập / Chọn chế độ sử dụng
- **Nguyên tắc UX:** Không khóa cứng bắt buộc đăng nhập mới được dùng thử.
- **Giao diện:**
  - Nút chính: **`Tiếp tục với Google`** (Cao `52dp`, nền `Surface`, viền `1.5dp Line200`, logo Google `20dp` + chữ `Ink900` `15sp SemiBold`) để đồng bộ dữ liệu đám mây.
  - Nút phụ ngay dưới: **`Bắt đầu học ngay trên thiết bị này`** (`TextLink` màu `Forest700` `14sp SemiBold`) — cho phép học ngay với dữ liệu lưu cục bộ (Guest/Local Mode) và có thể liên kết tài khoản Google bất kỳ lúc nào trong tab `Tôi`.

---

### 5.2 Tab 1: Trang chủ (`HomeScreen`)

#### A. TopBar cố định (`56dp` + `statusBarsPadding`)
- **Trái:** Icon Logo sách `32dp` (bo góc `8dp`, nền `Forest900`, icon vàng) + Chữ **WordNest** (`Fraunces 20sp Bold`).
- **Phải (Cụm 3 phần tử cách nhau `8dp`):**
  1. **Timer Capsule:** Cao `32dp`, padding ngang `10dp`, bo tròn `50%`, nền `Beige100` (hoặc nền `MintTint` khi đồng hồ đang chạy). Gồm chấm tròn trạng thái `8dp` (Xanh lá nhấp nháy nhẹ mỗi giây khi đang tính giờ; Xám khi tạm dừng) + Thời gian học hôm nay (`MonoTimer 13sp Bold`, ví dụ `24:15`). Chạm vào mở *Study Timer BottomSheet*.
  2. **Streak Chip:** Cao `32dp`, padding ngang `10dp`, nền `OrangeTint`, gồm icon `🔥` + Số ngày streak (`13sp Bold`, `Orange600`). Chạm vào mở màn hình *Lịch sử học*.
  3. **Avatar:** Tròn `32dp`, viền `1dp Sage300`. Chạm vào chuyển sang tab `Tôi`.

#### B. Thân trang cuộn dọc (`LazyColumn`, `contentPadding(horizontal = 16.dp, vertical = 16.dp)`)

1. **Section 1: Hero Card — "CẦN HỌC HÔM NAY" (`RadiusLarge 24dp`, nền `Surface`, viền `1dp Line200`, padding `20dp`)**
   - **Trạng thái 1: Có từ cần ôn/học (`DueCount > 0`)**
     - Hàng đầu: Bên trái là nhãn `Overline` màu `Coral500` (`CẦN HỌC HÔM NAY`); bên phải là icon chuông `40dp` trên nền tròn `CoralTint`.
     - Tiêu đề chính: `"{{totalDue}} từ đang chờ bạn"` (`HeadlineLarge 22sp Bold`, `Forest900`).
     - Hàng phân rã dữ liệu (2 chip nhỏ nằm ngang cách nhau `8dp` dưới tiêu đề):
       - Chip 1: Nền `CoralTint`, chữ `#991B1B` `12sp SemiBold`: `"{{reviewCount}} từ đến hạn ôn"`.
       - Chip 2: Nền `Sage100`, chữ `Forest900` `12sp SemiBold`: `"{{newCount}} từ mới"`.
     - Nút CTA chính (cách `16dp`): Full-width `PrimaryButton` cao `52dp`, nền `Amber400`, chữ `"Học ngay →"` (`16sp Bold`, `Forest900`).
   - **Trạng thái 2: Đã hoàn thành mục tiêu từ vựng hôm nay (`DueCount == 0` & `StudiedToday > 0`)**
     - Icon cúp/ngôi sao trên nền `MintTint`. Nhãn `Overline` màu `Mint500`: `HOÀN THÀNH XUẤT SẮC`.
     - Tiêu đề: `"Bạn đã xử lý xong từ vựng hôm nay!"`. Phụ đề: `"Đã học {{studiedToday}} từ • Duyệt thêm bộ từ mới nếu bạn muốn nâng cao."`
     - Nút CTA: `OutlinedActionButton` `"Học thêm từ mới"`.
   - **Trạng thái 3: Người dùng mới chưa có bộ từ nào (`TotalWords == 0`)**
     - Tiêu đề: `"Bắt đầu xây tổ từ vựng của bạn"`.
     - 2 nút hành động: `"Khám phá bộ từ TOEIC"` (`PrimaryButton`) và `"Tạo bộ từ riêng"` (`TextLink`).

2. **Section 2: Spotlight Card — "ĐANG HỌC DỞ" (Chỉ hiển thị khi có phiên thi hoặc bài nghe chưa hoàn tất)**
   - Nền `Forest900`, bo góc `20dp`, padding `16dp`, chữ trắng.
   - Hàng trên: Nhãn `Amber400` `11sp ExtraBold` (`TIẾP TỤC BÀI LÀM`) + Thời gian lưu lần cuối (`"15 phút trước"`).
   - Giữa: Tên bài đang làm dở (ví dụ: `"TOEIC Reading — Đề số 02 (Part 5 & 6)"`) + Tiến độ `"Câu 118/130"`.
   - Dưới: Thanh `ProgressBar` màu `Amber400` trên nền `#2F5D50` + Nút nhỏ `"Làm tiếp →"` ở góc phải.

3. **Section 3: "TỪ BẠN VỪA THÊM"**
   - Header: Tiêu đề `"TỪ BẠN VỪA THÊM"` + Badge tổng số từ (`Beige100`) ở bên trái; nút `"Xem tất cả →"` (`13sp SemiBold`, `Forest700`) ở bên phải.
   - Nội dung: Lưới 2 cột x 2 hàng (tối đa 4 `WordChip` gần nhất để trang chủ không bị quá dài).
   - Nút chân card: `OutlinedActionButton` cao `44dp` có nét đứt hoặc viền mảnh `"+ Thêm từ vựng mới"` mở thẳng *Add Word BottomSheet*.

4. **Section 4: Lối tắt Luyện thi TOEIC**
   - 2 thẻ `ShortcutCard` đặt cạnh nhau (lưới 2 cột) hoặc xếp dọc:
     - **Luyện Reading (Part 5, 6, 7):** Icon sách mở trên nền `AmberTint`, tiêu đề `"Luyện Reading"`, phụ đề `"Ngữ pháp & Đọc hiểu"`.
     - **Luyện Listening (Part 1–4):** Icon tai nghe trên nền `BlueTint`, tiêu đề `"Luyện Listening"`, phụ đề `"Phản xạ nghe & Tranh"`.

5. **Section 5: Tiến độ Học tập & Streak (`TIẾN ĐỘ HỌC`)**
   - Header: `"TIẾN ĐỘ HỌC"` + Nút chip nhỏ `"Mục tiêu: {{goalMinutes}}p/ngày ✎"` (chạm vào mở hộp thoại chỉnh mục tiêu `15p / 30p / 45p / 60p / Tùy chỉnh`).
   - **Card Thời gian hôm nay:** Hiển thị `"{{todayMinutes}} / {{goalMinutes}} phút"`, thanh tiến độ màu `Mint500` và thông điệp động viên.
   - **Hàng 2 StatCard nhỏ (2 cột cách nhau `12dp`):**
     - Trái (`OrangeTint`): Icon `🔥` + Số lớn `{{currentStreak}} ngày` + Nhãn `"Chuỗi hiện tại"`.
     - Phải (`PinkTint`): Icon `📅` + Số lớn `{{totalActiveDays}} ngày` + Nhãn `"Ngày học tích lũy"`.

---

### 5.3 Tab 2: Bộ từ & Chủ đề Đời sống (`DecksScreen` & `DeckDetailScreen`)

#### A. Màn hình Danh sách Bộ từ (`DecksScreen`)
1. **Thanh Tìm kiếm & Bộ lọc (Cố định phía dưới TopBar):**
   - `SearchField` cao `48dp`, bo góc `14dp`, nền `Beige100`, placeholder `"Tìm bộ từ hoặc gõ từ vựng tiếng Anh..."`.
     - *Hành vi thông minh:* Khi người dùng gõ từ khóa, kết quả trả về chia làm 2 nhóm: **Bộ từ khớp tên** và **Từ vựng nằm trong các bộ từ** (giúp tra cứu từ đã lưu cực nhanh mà không cần nhớ từ đó nằm ở bộ nào).
   - Hàng `FilterChip` cuộn ngang (cao `36dp`, cách nhau `8dp`):
     - `Tất cả` · `Cần ôn ({{count}})` · `Của tôi` · `TOEIC` · `Đời sống & Giao tiếp`.
2. **Phân khu hiển thị:**
   - Nếu chọn chip `Đời sống & Giao tiếp`: Hiển thị lưới các chủ đề thực tế (Giao tiếp công sở, Du lịch & Sân bay, Mua sắm, Ẩm thực, Khẩn cấp...) với hình minh họa/emoji trực quan.
   - Danh sách các `DeckCard` theo bộ lọc đã chọn.
3. **Nút nổi:** Extended FAB **`+ Tạo bộ mới`** ở góc dưới phải.

#### B. Màn hình Chi tiết Bộ từ (`DeckDetailScreen`)
1. **Header (`TopAppBar` có nút `←`, tên bộ từ, nút Tìm kiếm trong bộ và nút `⋮` Sửa/Đặt lại tiến độ/Xóa bộ):**
2. **Thẻ Tổng quan Bộ từ (Summary Card):**
   - Hiển thị 4 cột số liệu rõ ràng:
     - **Tổng số:** `{{total}}` (`Ink900`)
     - **Chưa học:** `{{new}}` (`Slate600`)
     - **Đang nhớ:** `{{learning}}` (`Amber500`)
     - **Đã thuộc:** `{{mastered}}` (`Mint500`)
   - Cụm 2 nút CTA ngang nhau (cách nhau `12dp`):
     - Nút trái (`SecondaryDarkButton`, chiếm `1f`): **`Ôn đến hạn ({{due}})`**
     - Nút phải (`PrimaryButton`, chiếm `1f`): **`Học bộ này`**
3. **Bộ lọc phụ & Sắp xếp danh sách từ:**
   - Các tab lọc nhỏ: `Tất cả` · `Chưa thuộc` · `Đã thuộc` + Nút đổi thứ tự: `Mới thêm nhất` / `A → Z` / `Hay quên nhất`.
4. **Danh sách Từ vựng (`WordRowItem`):**
   - Mỗi item là một Card phẳng nền `Surface`, bo góc `14dp`, viền `1dp Line200`, padding `14dp`:
     - Cột trái: Nút loa phát âm `36dp x 36dp` nền `Beige100` (chạm vào phát âm ngay bằng TTS/Audio mà không mở sang màn hình khác).
     - Cột giữa: Từ tiếng Anh (`16sp SemiBold`, `Forest900`) + Tag từ loại `(v)` + Phiên âm IPA (`13sp`, `Slate600`). Dòng dưới là nghĩa tiếng Việt (`14sp`, `Ink900`).
     - Cột phải: Vạch màu dọc `4dp x 32dp` thể hiện mức độ thuộc (`Coral500` / `Amber500` / `Mint500`).

#### C. BottomSheet Thêm / Sửa Từ vựng (`AddEditWordSheet`)
- Mở dạng Modal BottomSheet chiếm `85%–90%` chiều cao màn hình, có `imePadding()`.
- **Cấu trúc trường nhập (Tối ưu tốc độ nhập trên điện thoại):**
  1. **Từ tiếng Anh (`*` Bắt buộc):** Ô nhập tự động focus khi mở sheet. Bên phải ô nhập có nút nhỏ `"Tự điền ✨"` (nếu có từ điển cục bộ/API hỗ trợ gợi ý phiên âm và nghĩa).
  2. **Chọn Từ loại (Hàng Chip chọn nhanh — không dùng Dropdown tốn thao tác):** `Noun (n)` · `Verb (v)` · `Adj` · `Adv` · `Phrase` · `Idiom`.
  3. **Nghĩa tiếng Việt (`*` Bắt buộc):** Ô nhập văn bản rõ ràng.
  4. **Phiên âm IPA & Giọng đọc:** Ô nhập `/.../` kèm nút nghe thử giọng đọc `US 🇺🇸` / `UK 🇬🇧`.
  5. **Mở rộng (Có thể thu gọn `"＋ Thêm câu ví dụ & ghi chú"` để form luôn gọn):**
     - Câu ví dụ tiếng Anh.
     - Bản dịch câu ví dụ.
     - Ghi chú mẹo nhớ (Mnemonic).
- **Thanh nút bấm dính cố định ở đáy (trên bàn phím):**
  - Nút trái (`OutlinedActionButton`, chiếm `45%`): **`Lưu & Thêm tiếp`** (Lưu từ hiện tại, giữ nguyên BottomSheet, xóa trắng các ô và đưa con trỏ về lại ô "Từ tiếng Anh" kèm thông báo nhẹ `"Đã lưu '{{word}}'"` — giúp người dùng nhập liên tiếp 10–20 từ cực nhanh).
  - Nút phải (`PrimaryButton`, chiếm `55%`): **`Lưu & Đóng`**.

---

### 5.4 Màn hình Học Flashcard (`FlashcardStudyScreen` — Fullscreen Immersive)

#### A. Bố cục Không gian (Chia tỷ lệ dọc cho mọi kích thước màn hình)
- **Thanh điều khiển trên cùng (`56dp`):**
  - Trái: Nút đóng `✕` (Nếu đã học $\ge 1$ thẻ, tiến độ của các thẻ đã qua được lưu tức thì; chạm `✕` thoát ra ngay hoặc hiện xác nhận nhẹ nếu đang dở thẻ).
  - Giữa: Bộ đếm tiến độ **`12 / 30`** (`15sp SemiBold`) + Chấm tròn nhỏ báo thời gian phiên học.
  - Phải: Nút `⚙` mở *Flashcard Quick Settings Dialog* (Bật/tắt tự động phát âm khi lật thẻ, Đảo mặt thẻ Nghĩa Việt → Từ Anh, Bật/tắt rung phản hồi Haptic).
- **Thanh tiến độ (`ProgressBar`):** Cao `6dp`, chạy ngang sát dưới thanh điều khiển.
- **Vùng Thẻ Flashcard chính (Chiếm `65%` chiều cao màn hình ở giữa, padding ngang `20dp`):**
  - Bo góc `24dp`, nền `Surface`, viền `1.5dp Line200`, đổ bóng nhẹ `Elevation 4dp`.
  - **Mặt trước (Front Side — Trước khi lật):**
    - Góc trên trái: Tag trạng thái (`Từ mới` hoặc `Ôn tập`).
    - Góc trên phải: Nút Loa phát âm lớn `48dp x 48dp` nền `BlueTint`, icon `Blue600`.
    - Chính giữa thẻ:
      - Từ tiếng Anh (`DisplayFlashcard 34sp Bold`, căn giữa).
      - Phiên âm IPA (`16sp`, `Slate600`, cách dưới `8dp`).
      - Tag từ loại (ví dụ: ` động từ (verb) ` trên nền `Sage100`).
    - Chân thẻ: Dòng gợi ý mờ `"Chạm vào thẻ để xem nghĩa"` kèm icon lật.
  - **Mặt sau (Back Side — Sau khi lật bằng hiệu ứng xoay trục Y `320ms`):**
    - Giữ từ tiếng Anh + IPA + nút Loa thu gọn ở phần đầu thẻ (để người học vẫn đối chiếu được mặt chữ khi đang xem nghĩa, không phải lật qua lật lại).
    - Đường kẻ ngang `Line200`.
    - Phần trung tâm (Cho phép cuộn dọc bên trong thẻ nếu ví dụ dài):
      - **Nghĩa tiếng Việt chính:** `HeadlineLarge 22sp Bold`, màu `Forest900`.
      - **Khối Câu ví dụ** (Nền `Beige100`, bo góc `12dp`, padding `12dp`, cách nghĩa `16dp`): Câu tiếng Anh (`15sp`, in đậm từ khóa đang học) + Câu dịch tiếng Việt (`14sp`, `Slate600` bên dưới).
      - **Ghi chú cá nhân** (nếu có): Icon bóng đèn `💡` + nội dung ghi chú.

#### B. Cụm Nút Đánh giá Mức độ Nhớ (Bottom Action Zone — Cao `96dp`)
- **Trước khi lật thẻ:** Hiển thị 1 nút lớn duy nhất full-width: **`Lật thẻ xem nghĩa`** (`SecondaryDarkButton`, cao `56dp`) để người dùng có thể bấm ở đáy màn hình mà không cần vươn ngón tay lên giữa màn hình.
- **Sau khi lật thẻ:** Chuyển đổi mượt (`AnimatedContent 180ms`) thành **3 nút đánh giá nằm ngang** (cách nhau `10dp`, mỗi nút cao `72dp`, bo góc `16dp`) kết hợp nút **Hoàn tác (`↶`)** nhỏ ở góc trên cụm nút:

| Nút đánh giá | Màu nền / Viền / Chữ | Nội dung hiển thị (2 dòng) | Ý nghĩa hành vi |
|---|---|---|---|
| **1. Chưa nhớ** | Nền `CoralTint` (`#FDE4E4`)<br>Viền `1.5dp Coral500`<br>Chữ `#991B1B` | Dòng 1: **Chưa nhớ** (`14sp Bold`)<br>Dòng 2: `Lặp lại ngay` (`11sp Medium`) | Đưa thẻ này quay lại hàng đợi của chính phiên học hiện tại sau vài thẻ nữa. |
| **2. Hơi nhớ** | Nền `AmberTint` (`#FEF3C7`)<br>Viền `1.5dp Amber500`<br>Chữ `#92400E` | Dòng 1: **Hơi nhớ** (`14sp Bold`)<br>Dòng 2: `{{hardInterval}}` (`11sp Medium`) | Lên lịch ôn lại sớm (thời gian lấy động từ bộ tính toán SRS của hệ thống). |
| **3. Đã thuộc** | Nền `MintTint` (`#D1FAE5`)<br>Viền `1.5dp Mint500`<br>Chữ `#065F46` | Dòng 1: **Đã thuộc** (`14sp Bold`)<br>Dòng 2: `{{goodInterval}}` (`11sp Medium`) | Tăng bậc ghi nhớ SRS và giãn khoảng cách ôn tập xa hơn. |

---

### 5.5 Tab 3: Trung tâm Luyện thi TOEIC (`ToeicHubScreen` & Các phòng luyện)

#### A. Màn hình Intensive Listening (Nghe chép chính tả từng câu)
Đây là màn hình có sự tham gia đồng thời của **Audio Player**, **Ô nhập văn bản** và **Bàn phím ảo** (chiếm ~40% diện tích dưới). Bố cục bắt buộc phải tự co giãn theo `imePadding()`:

1. **TopBar gọn (`48dp`):** Nút `←` · Tiêu đề `"Test 1 • Part 2 • Câu 14/25"` · Nút chọn câu nhanh (`#14 ▾`).
2. **Vùng Nội dung & So khớp (Nằm phía trên, có thể cuộn):**
   - **Trước khi bấm "Kiểm tra":**
     - Hiển thị ô nhập đa dòng (`OutlinedTextField` nền `Surface`, bo góc `16dp`, cao tối thiểu `110dp`), chữ nhập vào `16sp`, placeholder `"Nghe âm thanh và gõ lại chính xác những gì bạn nghe được..."`.
     - Hàng nút gợi ý hỗ trợ (Nằm ngay dưới ô nhập):
       - Chip `"💡 Gợi ý từ tiếp theo"` (Hiện chữ cái đầu của từ tiếp theo nếu người học bị bí).
       - Chip `"👁 Xem số từ"` (Hiển thị cấu trúc câu dạng gạch dưới: `_ _ _ _ _ ?`).
   - **Sau khi bấm "Kiểm tra" (Chế độ Diff-Comparison):**
     - Hiển thị **Thẻ Đối chiếu Kết quả** (Nền `Surface`, bo góc `16dp`, padding `16dp`):
       - Từ gõ **Đúng**: Tô màu xanh `Mint500` Bold.
       - Từ gõ **Sai**: Gạch ngang từ người dùng gõ trên nền `CoralTint` (ví dụ: ~~`there`~~) và hiển thị từ đúng ngay bên cạnh (`their`).
       - Từ bị **Thiếu**: Hiển thị trong khung nét đứt màu `Amber500`.
     - Hiển thị **Đáp án chuẩn + Phiên âm câu + Bản dịch tiếng Việt**.
     - *Tương tác thông minh:* Người dùng có thể **chạm vào bất kỳ từ nào** trong câu đáp án để bật Popover tra nghĩa nhanh và bấm `"+ Lưu vào bộ từ"`.
3. **Thanh Điều khiển Âm thanh & Nút Hành động (Cố định ngay sát mép trên bàn phím ảo):**
   - **Hàng 1 (Compact Audio Bar — Cao `48dp`, nền `Beige100`, bo góc `14dp`, padding ngang `12dp`):**
     - Nút Tốc độ `0.8x / 1.0x / 1.2x` (`36dp`) · Nút Tua lùi `-3s` (`⏪`) · Nút **Play/Pause** tròn `40dp` nền `Forest900` · Nút Tua tiến `+3s` (`⏩`) · Nút Lặp tự động (`🔁`).
   - **Hàng 2 (Action Bar — Cao `48dp`, cách trên `8dp`):**
     - Khi đang gõ: Nút trái `"Bỏ qua / Xem đáp án"` (`OutlinedActionButton`) + Nút phải **`"Kiểm tra đáp án"`** (`PrimaryButton`).
     - Sau khi kiểm tra: Nút trái `"Nghe & Gõ lại"` + Nút phải **`"Câu tiếp theo →"`** (`PrimaryButton`).

#### B. Phòng thi TOEIC Reading — Đặc biệt giải quyết bài toán Part 7 (Đoạn văn + Câu hỏi)
- **Part 5 (Điền câu ngắn):** Giao diện 1 cột cuộn dọc thông thường: Câu hỏi ở trên, 4 thẻ đáp án `A`, `B`, `C`, `D` ở dưới (mỗi thẻ cao tối thiểu `56dp`, bo góc `14dp`, có vòng tròn chữ cái `A/B/C/D` `32dp` bên trái).
- **Part 6 & Part 7 (Đoạn văn dài / Email / Bài báo + Chuỗi 2–5 câu hỏi):**
  - **Giải pháp UX trên điện thoại — `Draggable Split-View` (Khung chia đôi có thanh kéo):**
    - **Nửa trên màn hình (Mặc định chiếm `45%` chiều cao):** Vùng hiển thị Đoạn văn (`Passage Pane`) trên nền `Beige100`, có thanh cuộn dọc độc lập. Hỗ trợ chọn (highlight) cụm từ màu vàng như làm bài trên giấy. Nếu có 2–3 đoạn văn (Double/Triple Passages), có các tab nhỏ `Đoạn 1` · `Đoạn 2` ở mép trên khung đọc.
    - **Thanh phân cách ở giữa (`Splitter Handle` — Cao `24dp`, nền `Surface`, viền `Line200`):** Có biểu tượng 2 vạch ngang `═` ở giữa. Người dùng có thể **kéo lên/xuống** để mở rộng vùng đọc văn bản (`70%` / `30%`) hoặc mở rộng vùng làm câu hỏi (`30%` / `70%`).
    - **Nửa dưới màn hình (Mặc định chiếm `55%` chiều cao):** Vùng hiển thị Câu hỏi trắc nghiệm (`Question Pane`) trên nền `Surface`, cuộn dọc độc lập với đoạn văn ở trên.
- **Thanh điều hướng đáy phòng thi (`56dp`):**
  - Trái: Nút `"← Câu trước"`.
  - Giữa: Nút **`"Danh sách câu (142/200) ▴"`** (Chạm vào mở *Question Navigator BottomSheet* dạng lưới số 5 cột, phân biệt rõ màu: Đã chọn đáp án `Forest900`, Đánh dấu xem lại `Amber500`, Chưa làm `Beige100`) + Nút gắn cờ `"🚩 Đánh dấu"`.
  - Phải: Nút `"Câu sau →"` (hoặc `"Nộp bài"` ở câu cuối).

#### C. Phòng thi TOEIC Listening (Part 1, 2, 3, 4)
- **Bố cục:**
  - Hình ảnh minh họa (Part 1 & Part 3/4 có biểu đồ): Đặt trong khung bo góc `16dp`, chạm vào ảnh mở chế độ xem phóng to (`Pinch-to-zoom`) mà không làm ngắt tiếng audio đang chạy.
  - Khối câu hỏi và đáp án `A, B, C, D` (Đối với Part 2 chỉ hiển thị 3 đáp án `A, B, C` đúng chuẩn format TOEIC thật).
  - **Sticky Audio Player** cố định ngay phía trên thanh điều hướng câu hỏi ở đáy màn hình: Hiển thị thanh thời gian thực `00:18 / 00:45`, nút Play/Pause, tua `±5s` và nút bật/tắt Transcript (trong chế độ Luyện tập / Xem lại giải thích).

---

### 5.6 Tab 4: Tôi — Hồ sơ, Lịch sử Học tập & Cài đặt (`ProfileAndHistoryScreen`)

1. **Thẻ Hồ sơ & Đồng bộ (Account & Sync Card):**
   - Avatar `56dp`, Tên người dùng, Email (hoặc nhãn `"Chế độ lưu trên thiết bị"` nếu chưa đăng nhập).
   - Badge trạng thái dữ liệu:
     - `● Đã đồng bộ lúc 07:45` (Màu `Mint500`)
     - `↻ Đang đồng bộ...` (Màu `Blue600`)
     - `⚠ Chưa sao lưu đám mây` (Màu `Amber500` kèm nút `"Liên kết Google"`).
2. **Khối Thống kê & Biểu đồ Lịch sử học (`LỊCH SỬ HỌC TẬP`):**
   - **3 Thẻ chỉ số tóm tắt:** `Tổng phút tuần này` · `Chuỗi hiện tại` · `Kỷ lục chuỗi`.
   - **Biểu đồ Cột 7 ngày (Weekly Bar Chart):**
     - Hiển thị 7 cột từ Thứ 2 → Chủ nhật.
     - Đường kẻ ngang nét đứt màu `Coral500` thể hiện mức **Mục tiêu ngày** (ví dụ `30 phút`).
     - Cột ngày nào vượt mục tiêu có màu `Forest900`, ngày học chưa đủ mục tiêu có màu `Sage300`, ngày hôm nay có viền nhấn `Amber500`.
   - **Bản đồ nhiệt Tháng (Monthly Activity Heatmap):**
     - Lưới 7 cột theo lịch tháng.
     - **Chú giải (Legend) bắt buộc hiển thị rõ kèm ký hiệu không phụ thuộc màu đơn thuần:**
       - Ô trống nền `Beige100`: `0 phút`
       - Ô màu `Sage300`: `Đã học (< mục tiêu)`
       - Ô màu `Mint500` có chấm nhỏ ở giữa: `Đạt mục tiêu ngày`
     - Chạm vào một ngày bất kỳ trên Heatmap hiển thị thẻ chi tiết ngay bên dưới: `"Thứ Sáu, 30/10: Học 45 phút • Ôn 38 từ • Hoàn thành 1 bài Reading"`.
3. **Danh sách Cài đặt (Chia nhóm rõ ràng):**
   - **Nhóm Học tập & Âm thanh:** Mục tiêu phút/ngày, Giọng phát âm mặc định (`US` / `UK`), Tự động phát âm khi lật thẻ, Rung phản hồi (Haptic).
   - **Nhóm Nhắc nhở:** Bật/tắt nhắc học hàng ngày, Chọn giờ nhắc, Nhắc bảo vệ chuỗi Streak.
   - **Nhóm Giao diện & Thao tác:** Chế độ Sáng / Tối / Theo hệ thống, Vị trí nút nổi Quick Hub (`Bên phải` / `Bên trái` cho người thuận tay trái).

---

### 5.7 Các Tiện ích Mở nhanh từ Quick Hub (`ModalBottomSheets`)

1. **Study Timer BottomSheet (Khi chạm vào Timer Capsule trên TopBar):**
   - Đồng hồ số lớn `MonoTimer 36sp Bold` ở chính giữa.
   - Giải thích rõ quy tắc minh bạch cho người dùng: *"Đồng hồ tự động tính giờ khi bạn mở thẻ từ vựng, làm đề hoặc nghe bài; tự động tạm dừng sau 2 phút không tương tác hoặc khi tắt màn hình."*
   - Nút `Tạm dừng / Tiếp tục` và vòng tròn tiến độ đạt mục tiêu ngày.
2. **Quick Translate Sheet (Dịch nhanh & Lưu từ tức thì):**
   - Thanh chuyển đổi ngôn ngữ: `Tiếng Anh ⇄ Tiếng Việt`.
   - Ô nhập có nút `Dán nhanh (Paste)` từ clipboard và nút `Loa`.
   - Khi có kết quả dịch: Hiển thị nghĩa, từ loại, phiên âm và nút **`"+ Lưu ngay vào Bộ từ"`** (có Dropdown chọn bộ từ đích, mặc định chọn bộ từ vừa dùng gần nhất).
3. **Quick Notes Sheet (Sổ tay cấu trúc & ngữ pháp):**
   - Cho phép tìm kiếm và lọc nhanh theo chip: `Tất cả` · `Ngữ pháp` · `Mẹo TOEIC` · `Từ dễ nhầm`.
   - Nút `+ Ghi chú mới` ngay trên header của Sheet.

---

## 6. Ma trận Trạng thái Giao diện & Xử lý Ngoại lệ (System States & Edge Cases)

Mọi màn hình trong thiết kế Figma và code Compose đều phải thiết kế đủ **5 trạng thái chuẩn** dưới đây:

| Trạng thái | Quy cách hiển thị UI chi tiết | Hành vi tương tác |
|---|---|---|
| **1. Loading (Đang tải)** | Dùng **Shimmer Skeleton** có màu `Beige100` chuyển động sang `#EDE8DF` theo đúng hình dáng của Card thật (Hero Skeleton, DeckCard Skeleton). Không dùng vòng xoay trắng xóa giữa màn hình. | Khóa thao tác bấm lặp (double-tap) nhưng vẫn cho phép chuyển tab. |
| **2. Empty (Trống dữ liệu)** | Khung minh họa nhẹ nhàng (`120dp`), tiêu đề `16sp SemiBold` nêu rõ trạng thái, dòng mô tả `14sp Slate600` và **luôn có 1 nút CTA định hướng hành động tiếp theo** (ví dụ: `"Tạo bộ từ đầu tiên"`). | Bấm CTA mở thẳng luồng tạo mới hoặc khám phá. |
| **3. Offline (Mất kết nối mạng)** | Hiển thị một thanh mảnh (`Offline Banner`, cao `32dp`, nền `AmberTint`, chữ `#92400E` `12sp Medium`) ngay dưới TopBar: *"Đang ở chế độ ngoại tuyến • Tiến độ học vẫn được lưu trên máy"*. | **Không chặn người dùng học.** Các bộ từ và đề thi đã tải trên máy vẫn mở và học bình thường. Đối với Audio chưa tải: hiện thông báo nhẹ *"Cần kết nối mạng để tải file nghe này"*. |
| **4. Error (Lỗi tải / Lưu)** | Hiển thị thông báo lỗi tại chỗ (`Inline Error Card`) kèm mã/lý do dễ hiểu và nút `"Thử lại"`. Đối với lỗi nhập Form: viền ô nhập đổi sang `Error600` và dòng chữ hướng dẫn sửa lỗi xuất hiện ngay dưới ô đó. | Không xóa mất dữ liệu người dùng vừa gõ trong Form khi xảy ra lỗi lưu. |
| **5. Interrupted Session (Gián đoạn phiên học/thi)** | Nếu ứng dụng bị đóng đột ngột hoặc hết pin khi đang học Flashcard / làm đề TOEIC: Tự động lưu trạng thái từng câu/thẻ vào bộ nhớ cục bộ. Khi mở lại app, hiển thị **Spotlight Card "Đang học dở"** ở đầu Trang chủ. | Chạm vào khôi phục đúng vị trí câu hỏi và thời gian còn lại. |

---

## 7. Chuẩn Bàn giao Kỹ thuật cho Jetpack Compose (Developer Handoff)

### 7.1 Cấu trúc Package & Design System trong Compose
```text
ui/
 ├── theme/
 │    ├── Color.kt          // Toàn bộ Token Light & Dark từ Mục 2.1
 │    ├── Type.kt           // Fraunces, BeVietnamPro, JetBrainsMono Typography từ Mục 2.2
 │    ├── Shape.kt          // RadiusSmall(14.dp), RadiusMedium(20.dp), RadiusLarge(24.dp)
 │    └── Theme.kt          // WordNestTheme hỗ trợ Dynamic/System Dark Mode
 ├── components/
 │    ├── buttons/          // PrimaryButton, SecondaryDarkButton, QuickHubFloatingButton
 │    ├── cards/            // HeroDueCard, DeckCard, WordChip, ShortcutCard, StatCard
 │    ├── inputs/           // WordNestSearchField, PhoneticTextField
 │    └── feedback/         // EmptyStateView, ShimmerSkeleton, OfflineBanner
 └── screens/
      ├── home/             // HomeScreen, HomeUiState, HomeUiEvent
      ├── decks/            // DecksScreen, DeckDetailScreen, AddEditWordSheet
      ├── study/            // FlashcardStudyScreen (Fullscreen)
      ├── toeic/            // ToeicHubScreen, ReadingSplitScreen, ListeningScreen, IntensiveScreen
      └── me/               // ProfileHistoryScreen, SettingsScreen
```

### 7.2 Mẫu Hợp đồng Trạng thái Giao diện (`UiState` & `UiEvent`) chuẩn cho Màn hình
Để tránh việc trộn lẫn logic nghiệp vụ vào giao diện, mỗi màn hình cần tuân thủ mô hình Unidirectional Data Flow (UDF):

```kotlin
// Ví dụ chuẩn hóa State cho HomeScreen
data class HomeUiState(
    val isLoading: Boolean = false,
    val isOffline: Boolean = false,
    val timerState: StudyTimerSummary = StudyTimerSummary(),
    val streakDays: Int = 0,
    val dueSummary: DueWordsSummary = DueWordsSummary(totalDue = 0, reviewCount = 0, newCount = 0),
    val activeIncompleteSession: IncompleteSessionUiModel? = null,
    val recentWords: List<WordChipUiModel> = emptyList(),
    val totalWordsCount: Int = 0,
    val studyProgress: DailyProgressUiModel = DailyProgressUiModel()
)

sealed interface HomeUiEvent {
    data object OnStartDueStudyClick : HomeUiEvent
    data object OnQuickAddWordClick : HomeUiEvent
    data class OnWordChipClick(val wordId: String) : HomeUiEvent
    data class OnResumeSessionClick(val sessionId: String) : HomeUiEvent
    data object OnTimerCapsuleClick : HomeUiEvent
    data class OnUpdateDailyGoal(val targetMinutes: Int) : HomeUiEvent
}
```

---

## 8. Lộ trình Thực thi Thiết kế trên Figma (Actionable Checklist)

- [ ] **Bước 1 — Thiết lập Figma Variables & Styles:** Tạo 2 Mode màu (`Light` / `Dark`) theo đúng bảng Token ở Mục 2.1; cài đặt Text Styles cho *Fraunces*, *Be Vietnam Pro* và *JetBrains Mono* theo đúng thông số `Size / Line-height` ở Mục 2.2.
- [ ] **Bước 2 — Xây dựng Component Library:** Dựng Auto-Layout cho `PrimaryButton`, `WordChip`, `DeckCard`, `ShortcutCard`, `TopBar`, `BottomNavigation (4 Tabs)` và `QuickHub Speed-Dial`.
- [ ] **Bước 3 — Dựng Luồng Cốt lõi (MVP Core Loop):**
  1. `Trang chủ` (3 biến thể của Hero Card: Có từ cần ôn / Đã học xong / Người mới).
  2. `Danh sách Bộ từ` (kèm Filter chip Đời sống & TOEIC) → `Chi tiết Bộ từ` → `BottomSheet Thêm/Sửa từ`.
  3. `Phiên học Flashcard` (Mặt trước → Mặt sau → Cụm 3 nút đánh giá mức nhớ → Màn hình Tổng kết phiên học).
- [ ] **Bước 4 — Dựng Luồng Luyện thi TOEIC (Chú trọng bố cục thích ứng):**
  1. `TOEIC Hub` → `Intensive Listening` (Thiết kế cả trạng thái khi bàn phím ảo đang bật và trạng thái Diff-Check kết quả).
  2. `Phòng thi Reading` (Thiết kế `Draggable Split-View` cho Part 7 và `Question Navigator BottomSheet`).
  3. `Phòng thi Listening` (Sticky Audio Player + Khung ảnh phóng to).
- [ ] **Bước 5 — Dựng Tab `Tôi`, Lịch sử học & các Quick Utility Sheets:** Biểu đồ cột 7 ngày, Heatmap tháng có Legend chuẩn Accessibility, Timer Sheet, Dịch nhanh và Sổ tay.