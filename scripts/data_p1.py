import json

part1_items = [
    {
        "id": "part1-1",
        "part": 1,
        "partTitle": "Part 1: Mô tả hình ảnh",
        "questionRange": "Câu 1",
        "title": "Part 1 - Câu 1: Người phụ nữ mặc áo khoác",
        "audioSrc": "/audio/cuts/test1/E26-T01-01.mp3",
        "transcript": [
            {"id": "p1-1-a", "speaker": "Speaker", "text": "(A) The woman is carrying a tray of food.", "vietnamese": "(A) Người phụ nữ đang bê một khay đồ ăn."},
            {"id": "p1-1-b", "speaker": "Speaker", "text": "(B) The woman is wearing a jacket.", "vietnamese": "(B) Người phụ nữ đang mặc một chiếc áo khoác."},
            {"id": "p1-1-c", "speaker": "Speaker", "text": "(C) The woman is tying up her hair.", "vietnamese": "(C) Người phụ nữ đang buộc tóc."},
            {"id": "p1-1-d", "speaker": "Speaker", "text": "(D) The woman is removing her hat.", "vietnamese": "(D) Người phụ nữ đang cởi mũ."}
        ],
        "questions": [
            {
                "num": 1,
                "question": "Chọn câu mô tả đúng nhất về bức tranh:",
                "vietnameseQuestion": "Chọn câu mô tả đúng nhất về bức tranh:",
                "options": [
                    {"key": "A", "text": "The woman is carrying a tray of food.", "vietnamese": "Người phụ nữ đang bê một khay thức ăn."},
                    {"key": "B", "text": "The woman is wearing a jacket.", "vietnamese": "Người phụ nữ đang mặc một chiếc áo khoác."},
                    {"key": "C", "text": "The woman is tying up her hair.", "vietnamese": "Người phụ nữ đang buộc tóc."},
                    {"key": "D", "text": "The woman is removing her hat.", "vietnamese": "Người phụ nữ đang cởi mũ."}
                ],
                "correctAnswer": "B",
                "explanation": "Người phụ nữ trong bức ảnh đang mặc áo khoác (is wearing a jacket)."
            }
        ],
        "vocabulary": [
            {"word": "carry", "meaning": "mang, bê, vác", "partOfSpeech": "v"},
            {"word": "tray", "meaning": "cái khay, mâm", "partOfSpeech": "n"},
            {"word": "tie up", "meaning": "buộc lên, cột lại", "partOfSpeech": "phr v"},
            {"word": "remove", "meaning": "tháo, cởi bỏ", "partOfSpeech": "v"}
        ]
    },
    {
        "id": "part1-2",
        "part": 1,
        "partTitle": "Part 1: Mô tả hình ảnh",
        "questionRange": "Câu 2",
        "title": "Part 1 - Câu 2: Nhóm người xem sách",
        "audioSrc": "/audio/cuts/test1/E26-T01-02.mp3",
        "transcript": [
            {"id": "p1-2-a", "speaker": "Speaker", "text": "(A) Some people are standing next to a filing cabinet.", "vietnamese": "(A) Một số người đang đứng cạnh tủ tài liệu."},
            {"id": "p1-2-b", "speaker": "Speaker", "text": "(B) Some people are searching through a desk.", "vietnamese": "(B) Một số người đang lục tìm trong bàn làm việc."},
            {"id": "p1-2-c", "speaker": "Speaker", "text": "(C) Some people are watching a presentation.", "vietnamese": "(C) Một số người đang xem một bài thuyết trình."},
            {"id": "p1-2-d", "speaker": "Speaker", "text": "(D) Some people are looking at a book.", "vietnamese": "(D) Một số người đang nhìn vào một cuốn sách."}
        ],
        "questions": [
            {
                "num": 2,
                "question": "Chọn câu mô tả đúng nhất về bức tranh:",
                "vietnameseQuestion": "Chọn câu mô tả đúng nhất về bức tranh:",
                "options": [
                    {"key": "A", "text": "Some people are standing next to a filing cabinet.", "vietnamese": "Một số người đang đứng cạnh tủ tài liệu."},
                    {"key": "B", "text": "Some people are searching through a desk.", "vietnamese": "Một số người đang lục tìm trong bàn làm việc."},
                    {"key": "C", "text": "Some people are watching a presentation.", "vietnamese": "Một số người đang theo dõi bài thuyết trình."},
                    {"key": "D", "text": "Some people are looking at a book.", "vietnamese": "Một số người đang cùng nhìn vào một cuốn sách."}
                ],
                "correctAnswer": "D",
                "explanation": "Những người ngồi quanh bàn đang tập trung nhìn vào cuốn sách đang mở."
            }
        ],
        "vocabulary": [
            {"word": "filing cabinet", "meaning": "tủ đựng hồ sơ tài liệu", "partOfSpeech": "n"},
            {"word": "search through", "meaning": "lục lọi, tìm kiếm kỹ", "partOfSpeech": "v"},
            {"word": "presentation", "meaning": "bài thuyết trình", "partOfSpeech": "n"}
        ]
    },
    {
        "id": "part1-3",
        "part": 1,
        "partTitle": "Part 1: Mô tả hình ảnh",
        "questionRange": "Câu 3",
        "title": "Part 1 - Câu 3: Đèn treo từ trần",
        "audioSrc": "/audio/cuts/test1/E26-T01-03.mp3",
        "transcript": [
            {"id": "p1-3-a", "speaker": "Speaker", "text": "(A) A woman is holding a phone up to her ear.", "vietnamese": "(A) Một người phụ nữ đang áp điện thoại vào tai."},
            {"id": "p1-3-b", "speaker": "Speaker", "text": "(B) A woman is pouring a beverage into a glass.", "vietnamese": "(B) Một người phụ nữ đang rót đồ uống vào ly."},
            {"id": "p1-3-c", "speaker": "Speaker", "text": "(C) Some light fixtures are hanging from the ceiling.", "vietnamese": "(C) Một số bộ đèn đang treo lơ lửng từ trần nhà."},
            {"id": "p1-3-d", "speaker": "Speaker", "text": "(D) Some tiles are being installed in a hallway.", "vietnamese": "(D) Một số viên gạch đang được lát ở hành lang."}
        ],
        "questions": [
            {
                "num": 3,
                "question": "Chọn câu mô tả đúng nhất về bức tranh:",
                "vietnameseQuestion": "Chọn câu mô tả đúng nhất về bức tranh:",
                "options": [
                    {"key": "A", "text": "A woman is holding a phone up to her ear.", "vietnamese": "Một người phụ nữ đang cầm điện thoại lên tai."},
                    {"key": "B", "text": "A woman is pouring a beverage into a glass.", "vietnamese": "Một người phụ nữ đang rót đồ uống vào ly."},
                    {"key": "C", "text": "Some light fixtures are hanging from the ceiling.", "vietnamese": "Các bộ đèn đang treo lơ lửng từ trần nhà."},
                    {"key": "D", "text": "Some tiles are being installed in a hallway.", "vietnamese": "Gạch lát đang được thi công ở hành lang."}
                ],
                "correctAnswer": "C",
                "explanation": "Các bộ đèn (light fixtures) treo lơ lửng từ trần nhà (hanging from the ceiling)."
            }
        ],
        "vocabulary": [
            {"word": "light fixture", "meaning": "bộ đèn chiếu sáng, đèn treo", "partOfSpeech": "n"},
            {"word": "hang from", "meaning": "treo thõng từ", "partOfSpeech": "v"},
            {"word": "beverage", "meaning": "đồ uống, thức uống", "partOfSpeech": "n"},
            {"word": "ceiling", "meaning": "trần nhà", "partOfSpeech": "n"}
        ]
    },
    {
        "id": "part1-4",
        "part": 1,
        "partTitle": "Part 1: Mô tả hình ảnh",
        "questionRange": "Câu 4",
        "title": "Part 1 - Câu 4: Thùng gỗ chứa đầy rau củ",
        "audioSrc": "/audio/cuts/test1/E26-T01-04.mp3",
        "transcript": [
            {"id": "p1-4-a", "speaker": "Speaker", "text": "(A) A wooden crate is filled with vegetables.", "vietnamese": "(A) Một chiếc thùng gỗ chứa đầy rau củ."},
            {"id": "p1-4-b", "speaker": "Speaker", "text": "(B) One of the men is putting vegetables into a shopping bag.", "vietnamese": "(B) Một người đàn ông đang bỏ rau vào túi mua hàng."},
            {"id": "p1-4-c", "speaker": "Speaker", "text": "(C) A backpack has been set on the ground.", "vietnamese": "(C) Một chiếc ba lô đã được đặt trên mặt đất."},
            {"id": "p1-4-d", "speaker": "Speaker", "text": "(D) One of the men is reaching into a bucket.", "vietnamese": "(D) Một người đàn ông đang thò tay vào xô."}
        ],
        "questions": [
            {
                "num": 4,
                "question": "Chọn câu mô tả đúng nhất về bức tranh:",
                "vietnameseQuestion": "Chọn câu mô tả đúng nhất về bức tranh:",
                "options": [
                    {"key": "A", "text": "A wooden crate is filled with vegetables.", "vietnamese": "Một thùng gỗ chứa đầy các loại rau củ."},
                    {"key": "B", "text": "One of the men is putting vegetables into a shopping bag.", "vietnamese": "Một người đàn ông đang cho rau vào túi xách."},
                    {"key": "C", "text": "A backpack has been set on the ground.", "vietnamese": "Chiếc ba lô đã được để dưới đất."},
                    {"key": "D", "text": "One of the men is reaching into a bucket.", "vietnamese": "Một người đàn ông đang thò tay vào xô."}
                ],
                "correctAnswer": "A",
                "explanation": "Chiếc thùng gỗ (wooden crate) chứa đầy rau củ (filled with vegetables)."
            }
        ],
        "vocabulary": [
            {"word": "wooden crate", "meaning": "thùng gỗ thưa, sọt gỗ", "partOfSpeech": "n"},
            {"word": "be filled with", "meaning": "chứa đầy", "partOfSpeech": "v"},
            {"word": "reach into", "meaning": "thò tay vào", "partOfSpeech": "v"}
        ]
    },
    {
        "id": "part1-5",
        "part": 1,
        "partTitle": "Part 1: Mô tả hình ảnh",
        "questionRange": "Câu 5",
        "title": "Part 1 - Câu 5: Dụng cụ sơn trên sàn nhà",
        "audioSrc": "/audio/cuts/test1/E26-T01-05.mp3",
        "transcript": [
            {"id": "p1-5-a", "speaker": "Speaker", "text": "(A) Painting supplies have been laid out on the floor.", "vietnamese": "(A) Dụng cụ sơn đã được bày ra trên sàn nhà."},
            {"id": "p1-5-b", "speaker": "Speaker", "text": "(B) He's laying a brush down on a windowsill.", "vietnamese": "(B) Anh ấy đang đặt cây cọ xuống bậu cửa sổ."},
            {"id": "p1-5-c", "speaker": "Speaker", "text": "(C) He's lifting a can of paint by its handle.", "vietnamese": "(C) Anh ấy đang nhấc lon sơn bằng quai xách."},
            {"id": "p1-5-d", "speaker": "Speaker", "text": "(D) Cans of paint have been placed on a step stool.", "vietnamese": "(D) Các lon sơn đã được đặt trên ghế đẩu bậc."}
        ],
        "questions": [
            {
                "num": 5,
                "question": "Chọn câu mô tả đúng nhất về bức tranh:",
                "vietnameseQuestion": "Chọn câu mô tả đúng nhất về bức tranh:",
                "options": [
                    {"key": "A", "text": "Painting supplies have been laid out on the floor.", "vietnamese": "Dụng cụ sơn đã được sắp sẵn trên sàn."},
                    {"key": "B", "text": "He's laying a brush down on a windowsill.", "vietnamese": "Anh ấy đang đặt chiếc cọ xuống bậu cửa sổ."},
                    {"key": "C", "text": "He's lifting a can of paint by its handle.", "vietnamese": "Anh ấy đang xách thùng sơn bằng quai."},
                    {"key": "D", "text": "Cans of paint have been placed on a step stool.", "vietnamese": "Những lon sơn được đặt trên ghế đẩu bậc thang."}
                ],
                "correctAnswer": "A",
                "explanation": "Đồ dùng sơn (painting supplies) đã được trải sẵn trên mặt sàn (laid out on the floor)."
            }
        ],
        "vocabulary": [
            {"word": "supplies", "meaning": "dụng cụ, đồ dùng", "partOfSpeech": "n"},
            {"word": "lay out", "meaning": "bày biện, sắp đặt ra", "partOfSpeech": "v"},
            {"word": "windowsill", "meaning": "bậu cửa sổ", "partOfSpeech": "n"},
            {"word": "step stool", "meaning": "ghế đẩu bậc thang", "partOfSpeech": "n"}
        ]
    },
    {
        "id": "part1-6",
        "part": 1,
        "partTitle": "Part 1: Mô tả hình ảnh",
        "questionRange": "Câu 6",
        "title": "Part 1 - Câu 6: Nước đọng trên lối đi",
        "audioSrc": "/audio/cuts/test1/E26-T01-06.mp3",
        "transcript": [
            {"id": "p1-6-a", "speaker": "Speaker", "text": "(A) A path is covered with fallen branches.", "vietnamese": "(A) Con đường mòn bị bao phủ bởi cành cây rơi rụng."},
            {"id": "p1-6-b", "speaker": "Speaker", "text": "(B) A tree is lying across a grassy area.", "vietnamese": "(B) Một cái cây nằm chắn ngang bãi cỏ."},
            {"id": "p1-6-c", "speaker": "Speaker", "text": "(C) Some water has pooled on a path.", "vietnamese": "(C) Nước đọng thành vũng trên một lối đi."},
            {"id": "p1-6-d", "speaker": "Speaker", "text": "(D) Some cyclists are riding through a field.", "vietnamese": "(D) Một số người đạp xe đang đi xuyên qua cánh đồng."}
        ],
        "questions": [
            {
                "num": 6,
                "question": "Chọn câu mô tả đúng nhất về bức tranh:",
                "vietnameseQuestion": "Chọn câu mô tả đúng nhất về bức tranh:",
                "options": [
                    {"key": "A", "text": "A path is covered with fallen branches.", "vietnamese": "Lối đi phủ đầy cành cây rơi rụng."},
                    {"key": "B", "text": "A tree is lying across a grassy area.", "vietnamese": "Cây đổ chắn ngang bãi cỏ."},
                    {"key": "C", "text": "Some water has pooled on a path.", "vietnamese": "Nước đọng thành vũng trên lối đi."},
                    {"key": "D", "text": "Some cyclists are riding through a field.", "vietnamese": "Những người đạp xe qua cánh đồng."}
                ],
                "correctAnswer": "C",
                "explanation": "Có nước đọng thành vũng trên mặt đường đi (water has pooled on a path)."
            }
        ],
        "vocabulary": [
            {"word": "path", "meaning": "con đường nhỏ, lối đi", "partOfSpeech": "n"},
            {"word": "pool", "meaning": "đọng vũng (nước)", "partOfSpeech": "v"},
            {"word": "branch", "meaning": "cành cây", "partOfSpeech": "n"}
        ]
    }
]

print("Part 1 prepared successfully.")
