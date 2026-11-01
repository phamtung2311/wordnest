# Prompt Gemini Round 2 — WordNest Android: TopBar thật, TOEIC + đồng bộ kết quả

> Mở Android Studio (project `android/`) → chat Gemini → copy toàn bộ code block bên dưới và gửi.
> Run từng TASK, mỗi task build pass trước khi làm task kế. KHÔNG sửa lại phần "ĐÃ CÓ" dưới đây.

```markdown
### BỐI CẢNH (đọc kỹ)
App WordNest Android: Kotlin + Jetpack Compose, package `com.tung.wordnest`.
Đồng bộ 2 chiều với web (Next.js) qua Firestore, cấu trúc:
- `users/{uid}` (doc gốc): `progress` {dailySeconds, completedDays, targetMinutes}, `englishNotes`, `todos`, và sau TASK B thêm `examHistory`
- `users/{uid}/decks/{deckId}` + subcollection `words/{wordId}` (SRS)
- `level` lúc push Firestore luôn CHỮ THƯỜNG ("new"/"learning"/"known"); Room dùng hoa.
- `firestore.rules` cho phép read/write doc gốc `users/{userId}` của chính chủ → thêm field mới vào doc gốc (vd `examHistory`) KHÔNG cần sửa rules.

### PHẦN ĐÃ CÓ — DÙNG, ĐỪNG VIẾT LẠI
- `data/local/ProgressStore.kt`: `dailySeconds`, `completedDays`, `targetMinutes`, `getSecondsOn(dateKey)`, `addSeconds`, `getStreakDays()`, `onboardingDone` (flag skip-login)
- `data/local/SyncStateStore.kt`: notes/todos
- `data/remote/SyncRepository.kt`: `syncAll(uid)` (pull progress+notes+todos + merge, push ngược), `syncDecksAndWords`, `pushProgress`, `pushNotes`, `pushTodos`, `createDeckAndSync`, `addWordAndSync`, `deleteDeckAndSync`, `resetDeckProgressAndSync`, `pushWordUpdate`
- `util/TtsProvider.kt`: singleton TextToSpeech (đã init trong Application)
- `ui/navigation/WordNestAppShell.kt`: đã nhận `timerText: String` + `streakDays: Int` và truyền cho `WordNestTopBar`; `QuickActionDock` đã nhận `bottomInset` (FAB không đè tab "Tôi")
- `WordNestNavGraph`: SPLASH đã skip-login (nếu `onboardingDone` && `FirebaseAuth.currentUser != null` → thẳng HOME)
- `WordDao` đã có: `deleteDeck`, `deleteWordsOfDeck`, `getWordsByDeckSync`, `getRecentWords(limit)`
- `WordNestRoutes` (WordNestDestinations.kt) đã khai báo route động: `toeicReading(testId)="toeic/reading/{testId}"`, `toeicListening(testId)`, `toeicIntensive(testId)` — NHƯNG chưa register composable trong NavHost

RÀO CĂN: (1) mọi coroutine nền dùng `WordNestApplication.appScope` (không dùng `rememberCoroutineScope` cho job sống dài); (2) không crash khi tap, mọi nút phải có hành vi; (3) giữ theme tokens `WordNestTheme.colors`; (4) push Firestore dùng `SetOptions.merge()`; (5) mỗi task xong chạy `./gradlew :app:compileDebugKotlin`.

### TASK A — TopBar data thật + sync đầy đủ khi đăng nhập
Lỗi hiện tại: TopBar luôn hiện "00:00:00" và streak 0 vì `WordNestNavGraph` chưa feed data;
đăng nhập chỉ gọi `syncDecksAndWords` nên progress/notes/todos của web chưa được kéo về.
1. Trong `WordNestNavGraph`:
   - Ở destination AUTH: thay `syncRepository.syncDecksAndWords(user.uid)` bằng `syncRepository.syncAll(user.uid)` (giữ `authStatus = SUCCESS` như cũ).
   - Khai báo 1 `var topTimerText by remember { mutableStateOf("00:00:00") }` + `var topStreak by remember { mutableStateOf(0) }` trong `WordNestNavGraph` (trước Box).
   - Helper: đọc `app.progressStore` → `topTimerText = "%02d:%02d:%02d".format(s/3600, (s/60)%60, s%60)` với `s = progress.getSecondsOn(ProgressStore.todayKey())`; `topStreak = progress.getStreakDays()`.
   - Gọi helper: (a) 1 lần khi composition mount, (b) sau khi login syncAll xong (trở về HOME), (c) định kỳ mỗi 30s bằng `LaunchedEffect` + `delay` (tự hủy khi rời composition — OK vì đây là số hiển thị thuần).
   - Truyền `timerText = topTimerText, streakDays = topStreak` vào `WordNestAppShell(...)`.
2. Badge "12" hardcode: `WordNestDestinations.kt` dòng ~69-70 (`badgeCount = 12`). Đổi `MainBottomNavItems` thành hàm `fun mainBottomNavItems(dueCount: Int) = listOf(...)` với `hasBadge = dueCount > 0, badgeCount = dueCount`, NavGraph tính `dueCount = deckItems.sumOf { it.dueWords }` (Flow collect sẵn trong destination HOME thì dùng lại bằng cách nâng lên scope NavGraph — hoặc đơn giản: giữ `dueCount` trong `remember` của NavGraph, fill từ `app.repository.getDecksWithCounts().first()` qua LaunchedEffect khi về HOME). `WordNestBottomBar` nhận tham số `items: List<BottomNavItem>` thay vì đọc `MainBottomNavItems` tĩnh.
3. Định nghĩa DONE: TopBar hiện HH:MM:SS đúng số giây học hôm nay (học 1 phiên rồi quay về là số tăng), streak = chuỗi ngày thật; tab "Bộ từ" hiện badge số từ đến hạn thật (chết 0 → không badge).

### TASK B — TOEIC: routes + placeholder đề + đồng bộ KẾT QUẢ
Scope: chỉ đồng bộ KẾT QUẢ bài thi với web (không sync dữ liệu đề).
1. Data placeholder: tạo `ui/screens/toeic/ToeicMockData.kt` — data class `MockExam(val testId: String, val title: String, val questions: List<MockQuestion>)` (MockQuestion: num, questionText, options[A-D], correctKey) + 1 đề reading (10 câu), 1 đề listening (10 câu), 1 item intensive (5 câu, audioSrc để rỗng — placeholder). Chỉ là dữ liệu tạm để chạy được luồng.
2. Register 3 composable trong `WordNestNavGraph` (dùng `WordNestRoutes.toeicReading("x")` + `navArgument`):
   - `toeic/reading/{testId}` + `toeic/listening/{testId}` → `ToeicExamScreen` (kiểm tra signature `ExamState`/các callback trong `ui/screens/toeic/exam/ToeicExamScreen.kt`, dựng state từ MockExam; khi người dùng chấm xong màn hiện kết quả → gọi bước 3 rồi navigate về TOEIC hub hoặc pop)
   - `toeic/intensive/{testId}` → `IntensiveListeningScreen` (state `IntensiveSessionUiState` từ MockExam; audioSrc rỗng → nút play hiện toast "Audio sẽ có ở bản sau" thay vì crash)
   - Hub TOEIC (destination hiện có, ~dòng 270): thay `ToeicHubUiState(850, null, emptyList())` + các callback `{}` bằng: list mock test thật (từ ToeicMockData, `ToeicMockTestUiModel`), `onReadingTestClick`/`onListeningTestClick`/`onIntensiveListeningClick`/`onMockTestClick(testId)` → `navController.navigate(WordNestRoutes.toeicReading("reading_1"))` v.v.
3. Sync kết quả trong `SyncRepository`:
   ```
   data class ExamHistoryEntry(val testId: String, val kind: String, val score: Int, val date: String) // kind: "reading"|"listening"|"intensive", date: ISO "yyyy-MM-dd'T'HH:mm:ss"
   suspend fun pushExamHistory(userId: String, entry: ExamHistoryEntry): Result<Unit>
   // getDoc users/{uid} → lấy mảng examHistory hiện có (field List<Map>), prepend entry (mới nhất đầu, giữ max 50), set merge "examHistory"
   ```
   Gọi push khi màn kết quả hiện (có `FirebaseAuth.currentUser?.uid` thì push, guest thì skip — log `Log.d`). Shape TRÙNG localStorage web: `toeic_reading_history` = `[{testId, score, date}]` (web ghi qua `lib/examGrading.ts:recordExamHistory`, max 50, newest first).
4. Định nghĩa DONE: hub → bấm "Luyện đề Reading" → làm 10 câu mock → kết quả hiện → Firestore `users/{uid}.examHistory` có entry (check bằng Firebase Console); làm intensive không crash; 3 route đều về được bằng nút back.

### TASK C (optional) — Data đề thật
1. Copy từ repo web (thư mục cha): `data/test_answers.ts` + `data/lc_answers.ts` → JSON trả lời vào `app/src/main/assets/toeic/answers_reading.json`, `answers_listening.json` (shape `{testId: {qNum: "A"|"B"|"C"|"D"}}`); loader `ToeicAnswerKeyStore` (org.json, đọc assets 1 lần, cache Map).
2. Audio: KHÔNG copy MP3 (30 file × 10-30MB phình APK). Dùng URL web: `https://<DOMAIN-WEB-DEPLOY>/audio/test{n}_{year}.mp3` — đặt 1 hằng `TOEIC_AUDIO_BASE_URL` trong `ToeicMockData.kt` (user tự điền domain), ExoPlayer/Media3 `MediaItem.fromUri`.
3. Câu hỏi reading hiện là PDF bên web → KHÔNG đưa được vào app bằng JSON: giữ mock 10 câu làm khung, TASK C chỉ phục vụ KEY + AUDIO. Bỏ qua nếu user không cần ngay.

### TASK D (WEB, 2 dòng — chạy trong repo web, không phải android)
`app/page.tsx`: ở đoạn pull-on-login (getDoc `users/{uid}`, hiện đọc các field `decks`, `progress`, `lifeData`, `englishNotes`) → thêm đọc `examHistory`; render 1 section "Kết quả luyện thi từ app" (lấy 5 entry mới nhất: testId, kind, score, date) nếu `examHistory` có dữ liệu. Không đổi gì khác.

### TEST CHUNG (Gemini tự chạy trước khi bàn giao)
- `./gradlew :app:assembleDebug` pass
- Mở app đã login+onboarding → thẳng HOME (không splash/onboarding/auth)
- TopBar: timer + streak là số thật; tab "Bộ từ" badge = số từ đến hạn
- FAB dock: mở/đóng không che tab "Tôi"
- TOEIC hub → reading mock → kết quả → có `examHistory` trên Firestore
```

---

## Ghi chú khi test (version code HIỆN TẠI, trước khi Gemini chạy Round 2)

Đã code xong (test được ngay bây giờ):
- **#1 Skip-login**: đã onboarding + còn đăng nhập → mở app thẳng Trang chủ
- **#3 FAB**: dock cách đáy đúng chiều bottom bar, không đè tab "Tôi"

Chưa có (phải đợi Gemini chạy TASK A/B):
- **#2 TopBar**: version hiện tại hiển thị "00:00:00" + streak "0" (đây là số thật, không hardcode nữa — nhưng đúng vì chưa pull progress từ web)
- **#4 TOEIC**: hub hiện mục rỗng, chưa có route thi

**Lưu ý emulator**: nếu đã restart, tài khoản Google bị mất → vào *Settings → Accounts* add lại trước khi test skip-login (cần `currentUser != null` để skip).
