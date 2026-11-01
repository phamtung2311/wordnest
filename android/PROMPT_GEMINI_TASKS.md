# Prompt Gemini (Android Studio) — WordNest Android: các tác vụ nhỏ còn lại

> Copy toàn bộ phần sau vào Gemini trong Android Studio (chọn đúng project `android/`).
> Chạy theo thứ tự từng TASK một; mỗi task build được trước khi qua task kế.

```markdown
### Bối cảnh (đọc kỹ trước khi code)
Ứng dụng WordNest Android (Kotlin + Jetpack Compose, MVVM + Repository).
Đồng bộ 2 chiều với web (Next.js) qua Firebase Firestore, cùng cấu trúc `users/{uid}`:
- `users/{uid}/decks/{deckId}` + subcollection `words/{wordId}` — deck & SRS (level chữ THƯỜNG: "new"/"learning"/"known", nextReview epoch-millis)
- `users/{uid}.progress` = { dailySeconds: {"yyyy-MM-dd": giây}, completedDays, targetMinutes }
- `users/{uid}.englishNotes` = [{ id, structure, explanation, tag, createdAt }] (web dùng structure/explanation, app map sang title/content)
- `users/{uid}.todos` = [{ id, title, timeStr, isDone }]

Các lớp hiện có (ĐỪNG viết lại, chỉ dùng):
- `data/local/ProgressStore.kt` (dailySeconds/targetMinutes/streak, SharedPreferences "wordnest_progress")
- `data/local/SyncStateStore.kt` (notes + todos, SharedPreferences "wordnest_state")
- `data/remote/SyncRepository.kt` (pull/push progress, notes, todos, words; `syncAll(userId)`)
- `WordNestApplication.appScope` — scope sống cùng app, BẮT BUỘC dùng cho mọi coroutine nền
- `ui/navigation/SyncedSheetHost.kt` (4 sheet QuickDock), `ui/screens/study/StudySessionViewModel.kt` (SRS + timer phiên học)

RÀO CĂN TUYỆT ĐỐI:
1. Push lên Firestore: field `level` phải chữ THƯỜNG (lowercase). Đừng đổi semantics này.
2. Không dùng `rememberCoroutineScope` cho tác vụ có thể chạy khi màn rời composition — dùng `appScope` (tham chiếu qua `LocalContext.current.applicationContext as WordNestApplication`).
3. Không thêm dependency mới nếu không buộc; mỗi `firestore.set(...)` với Map nested giữ `SetOptions.merge()`.
4. Giữ theme tokens `WordNestTheme.colors/typography/shapes`, không hardcode màu.
5. Mỗi task kết thúc: `./gradlew :app:assembleDebug` pass, không crash khi tap.

### TASK 1 — Xin quyền POST_NOTIFICATIONS (Android 13+)
`AndroidManifest.xml` đã khai báo `POST_NOTIFICATIONS` nhưng chưa từng request runtime (Android 13+).
Làm: trong `MainActivity.onCreate` (hoặc ngay sau onboarding), nếu `Build.VERSION.SDK_INT >= TIRAMISU` và
`checkSelfPermission(POST_NOTIFICATIONS) != GRANTED` → `requestPermissions`.
Người từ chối: app vẫn chạy, `SrsReviewWorker` (4h/lần, `service/notification/SrsReviewWorker.kt`) chỉ im lặng không hiện notification — không crash.
Thừa: nếu muốn, lưu flag "đã xin" để không hỏi lại (SharedPreferences cũng được).

### TASK 2 — Phát âm flashcard (TTS)
`ui/screens/study/StudyScreenHost.kt` hiện để `onPronounceClick = {}` (placeholder).
Làm: tạo 1 object `TtsProvider` (singleton, TextToSpeech, giọng Locale.US, init/lifecycle trong MainActivity hoặc lazy tại App) rồi:
- `onPronounceClick` trong `StudyScreenHost` → đọc to `state.words[currentIndex].term`
- `onSpeakerClick` trong `HomeScreen`/`DeckDetailScreen` (wire qua `WordNestNavGraph`) → đọc term của từ được bấm
Giới hạn 1 instance TextToSpeech cho toàn app; shutdown khi Activity destroy không cần (để sống cùng app là OK).

### TASK 3 — Sheet "Dịch nhanh" chạy thật
`SyncedSheetHost.kt`, nhánh `"Dịch nhanh"`: `onTranslate` và `onSaveToDeck` hiện là placeholder.
Làm:
1. `onTranslate(word)`: gọi API từ điển miễn phí `https://api.dictionaryapi.dev/api/v2/entries/en/{word}`
   (HTTPURLConnection trong `appScope`, decode JSON bằng org.json; timeout 10s).
   Hiển thị vào `result: TranslateResult` của `QuickTranslateSheet` (kiểm tra class này trong
   `ui/components/sheets/QuickTranslateSheet.kt` để biết shape).
   - Có nghĩa → show definition đầu tiên + example
   - 404/lỗi mạng → show trạng thái "Không tìm thấy / Offline" (sheet đã có `isOffline`)
2. `onSaveToDeck(deckName)`: tạo `WordEntity(term = từ, meaning = definition, ...)` →
   `app.syncRepository.addWordAndSync(uid, deckId, word)` (tìm deckId theo deckName qua
   `app.repository.getDecksWithCounts()`). uid = null (khách) → chỉ lưu Room.
3. Nút TTS trong sheet (đã có `onTTSClick`) giữ nguyên.

### TASK 4 — Tab "Bộ từ": xóa deck + đặt lại tiến độ
`WordNestNavGraph.kt`, destination `DECKS`: `onDeleteDeck` / `onResetProgress` hiện là `{}`.
Làm (chỉ khi có `FirebaseAuth.currentUser`, khách thì chỉ thao tác Room):
1. Xóa deck: xóa Room (`wordDao.deleteDeck` + `deleteWordsOfDeck` — thêm 2 query `@Query` vào
   `WordDao` nếu chưa có) + xóa Firestore:
   - xóa từng word doc trong `users/{uid}/decks/{deckId}/words` rồi xóa `users/{uid}/decks/{deckId}`
2. Reset tiến độ: đặt mọi word của deck về `level="NEW"`, `nextReviewTime=now`, `reviewCount=0`
   trong Room, rồi `pushWordUpdate` từng word (level lowercase!) lên Firestore.
3. Thêm 2 hàm tương ứng vào `SyncRepository` (hoặc `WordRepository`) — giữ convention
   `Result<Unit>`, catch Exception + `Log.e("SyncRepository", ...)`.

### TASK 5 — Tự đồng bộ lại khi mở app (đã đăng nhập)
Hiện chỉ sync khi: màn login + nút "Đồng bộ ngay". Thêm: trong `MainActivity` (hoặc
`WordNestNavGraph` một lần), khi app ở foreground VÀ `FirebaseAuth.currentUser != null`,
chạy `syncRepository.pullProgress(uid)` + `pullNotes(uid)` + `pullTodos(uid)` (KHÔNG cần kéo lại
decks/words mỗi lần — nặng; để decks sync khi login + nút đồng bộ). Throttle: không chạy lại nếu
đã chạy trong < 60 giây (lưu timestamp vào 1 var).

### Định nghĩa DONE
- 5 task trên build pass + chạy trên emulator: notification xin quyền 1 lần, tap loa đọc từ,
  sheet dịch hiện nghĩa + lưu được vào deck (mở web thấy từ mới trong deck), xóa/reset deck làm
  mất/thay đúng dữ liệu trên web, mở app lại thấy notes/todos/progress mới từ web.
```

---

## Hướng dẫn chạy cho bạn
1. Mở Android Studio → Gemini (hoặc paste vào chat Gemini trong AS) → gửi master prompt trong code block.
2. Mỗi TASK xong, Gemini sẽ build — để nó chạy `./gradlew :app:assembleDebug` xác nhận.
3. Trong lúc Gemini code, bạn test app hiện tại (version tôi vừa build):

## Checklist test app hiện tại (version 2 chiều)

> **Lưu ý trước khi test**: emulator mới boot **mất tài khoản Google** (`Accounts: 0`),
> login báo "No credentials available" là đúng hành vi catch lỗi. Vào
> emulator → **Settings → Accounts → Add account** (add lại `phamvantung...`) rồi
> tap "Tiếp tục với Google" trong app.

| # | Test | Kỳ vọng |
|---|---|---|
| 1 | Login Google → Home | Tab "Bộ từ" hiện đúng deck trên web |
| 2 | Tab Tôi → "Đồng bộ ngay" | "Đang đồng bộ..." → "Đã đồng bộ" |
| 3 | Mở tab Luyện đề → Học (hoặc nút "Học ngay" ở Home) → đánh giá 1 vài từ | Trên web (mở trong trình duyệt) số "learned/known" tăng lên |
| 4 | Dock (FAB góc phải) → "Ôn từ đến hạn" | Timer tick, mục tiêu hiện phút thật |
| 5 | Dock → "Sổ tay ghi chú" → tạo note → mở web tab Notes | Note xuất hiện trong cột structure/explanation trên web |
| 6 | Dock → "Việc cần làm" → thêm việc | Lưu máy (login thì push Firestore; web chưa có UI đọc `todos` nên không thấy trên web — bình thường) |
| 7 | Home: mục "TỪ BẠN VỪA THÊM" + "CẦN HỌC HÔM NAY" | Số liệu thật, không mock |

Test xong báo tôi: (a) lỗi nào, (b) bạn đã cho Gemini chạy task nào chưa, (c) gật đầu là tôi commit phần sync 2 chiều hiện tại.
