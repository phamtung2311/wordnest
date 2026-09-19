# Hướng dẫn sử dụng và phát triển WordNest

## 1. Địa chỉ website

Website chính thức:

https://wordnest-english-vocab.web.app

Website đã được triển khai trên Firebase Hosting nên hoạt động độc lập trên Internet. Không cần bật máy cá nhân hoặc chạy dự án local để người dùng truy cập.

## 2. Hướng dẫn dành cho người học

### Đăng nhập

1. Mở website bằng Chrome, Edge, Firefox hoặc Safari.
2. Bấm **Đăng nhập Google**.
3. Chọn tài khoản Google.
4. Chờ trạng thái **Đã đồng bộ** xuất hiện cạnh tên tài khoản.

Khi đăng nhập, mỗi người chỉ nhìn thấy dữ liệu thuộc tài khoản của chính mình.

### Tạo bộ từ vựng

1. Bấm **Tạo bộ từ mới**.
2. Chọn ngôn ngữ **Tiếng Anh** hoặc **Tiếng Trung Quốc**.
3. Nhập tên bộ từ, biểu tượng và mô tả.
4. Bấm nút tạo bộ.
5. Mở bộ vừa tạo và chọn **Thêm từ vựng**.

### Thêm từ

- Với bộ tiếng Anh, gõ ít nhất hai ký tự để nhận từ gợi ý.
- Với bộ tiếng Trung, nhập chữ Hán rồi bấm **Tự tìm nghĩa tiếng Việt**.
- WordNest tự chọn ngôn ngữ dịch và giọng đọc dựa trên ngôn ngữ của bộ từ.
- Từ tiếng Anh có thể được tự điền phiên âm và câu ví dụ; từ tiếng Trung vẫn có thể nhập ví dụ thủ công.
- Có thể sửa lại mọi thông tin trước khi lưu.
- Nút loa sử dụng giọng đọc có sẵn của trình duyệt, không tải hoặc lưu file âm thanh.

Các dịch vụ gợi ý/dịch miễn phí đôi lúc có thể chậm hoặc không phản hồi. Khi đó người dùng vẫn có thể nhập nghĩa và ví dụ thủ công.

### Học và ôn từ

1. Bấm **Học ngay** để học các từ đang đến hạn.
2. Bấm **Xem nghĩa** sau khi tự nhớ câu trả lời.
3. Chọn một mức độ:
   - **Chưa nhớ:** học lại sau 5, 10 hoặc 30 phút.
   - **Hơi nhớ:** ôn lại sau 1 ngày.
   - **Đã thuộc:** ôn lại sau 7 ngày.
4. Nếu từ đến hạn nằm trong nhiều bộ, học xong một bộ sẽ có nút chuyển sang bộ tiếp theo.
5. Có thể bấm **Ôn lại** cạnh bất kỳ từ nào để hủy lịch chờ hiện tại và đưa từ đó lên học ngay.

### Điểm danh và chuỗi học

Một ngày được tính là học thành công khi đạt **một trong hai điều kiện**:

- Học từ vựng đủ 10 phút; hoặc
- Học lướt qua hết tất cả từ đang đến hạn trong tất cả các bộ từ, kể cả khi tổng thời gian chưa đủ 10 phút.

Kết quả điểm danh được lưu cùng tài khoản Google và dùng để tính số ngày học thành công và chuỗi ngày liên tiếp.

### Quản lý dữ liệu

- Có thể xóa từng từ hoặc xóa cả bộ từ.
- Thao tác xóa bộ từ là vĩnh viễn và sẽ được đồng bộ lên đám mây.
- Không nên đăng nhập cùng một tài khoản trên nhiều thiết bị rồi chỉnh sửa đồng thời vì phiên bản lưu sau có thể ghi đè phiên bản trước.

## 3. Dữ liệu được lưu ở đâu?

WordNest sử dụng hai lớp lưu trữ:

- **localStorage:** bản dữ liệu trên trình duyệt, giúp giao diện phản hồi nhanh và vẫn giữ dữ liệu tạm thời khi chưa đăng nhập.
- **Cloud Firestore:** dữ liệu đám mây gắn với UID của tài khoản Google.

Dữ liệu Firestore nằm tại tài liệu:

```text
users/{uid}
```

Quy tắc bảo mật trong `firestore.rules` chỉ cho phép người đã đăng nhập đọc và sửa tài liệu có UID trùng với tài khoản của họ.

## 4. Công nghệ đang sử dụng

- React 19 và TypeScript.
- Vinext/Vite để phát triển và tạo bản build tĩnh.
- Tailwind CSS cho giao diện.
- Firebase Authentication cho đăng nhập Google.
- Cloud Firestore cho dữ liệu người dùng.
- Firebase Hosting để đưa website lên Internet.
- Web Speech API (`speechSynthesis`) để đọc từ vựng mà không cần file âm thanh.
- Datamuse API để gợi ý từ.
- Free Dictionary API để lấy phiên âm, định nghĩa và câu ví dụ.
- Google Translate endpoint và MyMemory làm nguồn dịch tự động/fallback.

## 5. Chạy dự án trên máy

Yêu cầu Node.js phiên bản 22.13 trở lên.

Cài thư viện:

```bash
npm install
```

Chạy môi trường phát triển:

```bash
npm run dev
```

Mở địa chỉ local được hiển thị trong terminal. Chế độ local chỉ dùng để phát triển; website thật vẫn tiếp tục chạy trên Firebase.

## 6. Kiểm tra và cập nhật website

Sau khi sửa code, chạy:

```bash
npm run build
```

Nếu build thành công, triển khai lên Firebase:

```bash
npx firebase-tools@14.16.0 deploy --only hosting --project wordnest-english-vocab
```

Khi terminal hiện `Deploy complete!`, phiên bản mới đã có tại:

https://wordnest-english-vocab.web.app

Nếu trình duyệt vẫn hiện giao diện cũ, dùng `Ctrl + Shift + R` để tải lại không dùng cache.

Việc cập nhật Firebase Hosting không xóa dữ liệu trong Firestore.

Nếu có sửa `firestore.rules`, triển khai thêm quy tắc bằng:

```bash
npx firebase-tools@14.16.0 deploy --only firestore:rules --project wordnest-english-vocab
```

## 7. Cấu hình Google Login cần giữ

Trong Google Cloud Console, OAuth Client phải có:

Authorized JavaScript origin:

```text
https://wordnest-english-vocab.web.app
```

Authorized redirect URI:

```text
https://wordnest-english-vocab.web.app/__/auth/handler
```

Tên miền `wordnest-english-vocab.web.app` cũng phải nằm trong **Firebase Authentication → Settings → Authorized domains**.

Khi đổi sang tên miền riêng, cần thêm origin, redirect URI và authorized domain mới trước khi đăng nhập Google hoạt động.

## 8. Lưu ý về bảo mật

- Cấu hình Firebase Web và API key trong `lib/firebase.ts` là thông tin nhận diện ứng dụng phía trình duyệt, không phải mật khẩu. Bảo mật dữ liệu phải dựa vào Firestore Rules.
- **Google OAuth Client Secret là bí mật.** Không đưa client secret vào source code, Git, ảnh chụp màn hình hoặc tin nhắn công khai.
- Nếu client secret từng bị lộ, phải tạo/rotate secret mới trong Google Cloud Console.
- Không nới `firestore.rules` thành quyền đọc/ghi công khai chỉ để xử lý lỗi nhanh.
- Trước thay đổi lớn liên quan dữ liệu, nên sao lưu Firestore.

## 9. Chi phí và giới hạn

Firebase có gói miễn phí với hạn mức cho Hosting, Authentication và Firestore. Dự án nhỏ thường có thể vận hành miễn phí, nhưng không có nghĩa là mọi mức sử dụng đều miễn phí mãi mãi.

Nên theo dõi mục **Usage/Billing** trong Firebase Console khi số người dùng tăng. Các API dịch và từ điển miễn phí bên ngoài có thể thay đổi hạn mức, chậm hoặc ngừng hoạt động mà không báo trước.

## 10. Các tệp quan trọng

- `app/page.tsx`: giao diện và phần lớn logic học từ.
- `app/globals.css`: kiểu giao diện.
- `lib/firebase.ts`: cấu hình Firebase, Authentication và Firestore.
- `firestore.rules`: quyền truy cập dữ liệu.
- `firebase.json`: cấu hình Hosting và Firestore Rules.
- `.firebaserc`: dự án Firebase mặc định.
- `package.json`: thư viện và các lệnh phát triển.
