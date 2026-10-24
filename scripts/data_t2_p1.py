import json

part1_items = [
    {
        "id": "part1-1",
        "part": 1,
        "imageUrl": "/images/intensive/test2/q1.png",
        "partTitle": "Part 1: Mô tả hình ảnh",
        "questionRange": "Câu 1",
        "title": "Part 1 - Câu 1: Người đàn ông đi bộ trên đường lát đá",
        "audioSrc": "/audio/cuts/test2/E26-T02-01.mp3",
        "transcript": [
            {"id": "p1-1-a", "speaker": "Speaker", "text": "(A) A man is closing a metal gate.", "vietnamese": "(A) Một người đàn ông đang đóng cổng kim loại."},
            {"id": "p1-1-b", "speaker": "Speaker", "text": "(B) A man is walking down a stone path.", "vietnamese": "(B) Một người đàn ông đang đi bộ dọc theo con đường lát đá."},
            {"id": "p1-1-c", "speaker": "Speaker", "text": "(C) Some potted plants line a walkway.", "vietnamese": "(C) Một số chậu cây xếp thành hàng dọc lối đi."},
            {"id": "p1-1-d", "speaker": "Speaker", "text": "(D) Some flags are hanging from balconies.", "vietnamese": "(D) Một số lá cờ đang treo từ các ban công."}
        ],
        "questions": [
            {
                "num": 1,
                "question": "Chọn câu mô tả đúng nhất về bức tranh:",
                "vietnameseQuestion": "Chọn câu mô tả đúng nhất về bức tranh:",
                "options": [
                    {"key": "A", "text": "A man is closing a metal gate.", "vietnamese": "Một người đàn ông đang đóng cổng kim loại."},
                    {"key": "B", "text": "A man is walking down a stone path.", "vietnamese": "Một người đàn ông đang đi bộ dọc theo con đường lát đá."},
                    {"key": "C", "text": "Some potted plants line a walkway.", "vietnamese": "Một số chậu cây xếp thành hàng dọc lối đi."},
                    {"key": "D", "text": "Some flags are hanging from balconies.", "vietnamese": "Một số lá cờ đang treo từ ban công."}
                ],
                "correctAnswer": "B",
                "explanation": "Trong bức ảnh, người đàn ông đang đi bộ dọc theo con đường đá hẹp (is walking down a stone path)."
            }
        ],
        "vocabulary": [
            {"word": "metal gate", "meaning": "cổng kim loại", "partOfSpeech": "n"},
            {"word": "walk down", "meaning": "đi bộ dọc theo", "partOfSpeech": "phr v"},
            {"word": "stone path", "meaning": "con đường lát đá", "partOfSpeech": "n"},
            {"word": "potted plant", "meaning": "cây trồng trong chậu", "partOfSpeech": "n"},
            {"word": "line", "meaning": "xếp thành hàng dọc theo", "partOfSpeech": "v"},
            {"word": "balcony", "meaning": "ban công", "partOfSpeech": "n"}
        ]
    },
    {
        "id": "part1-2",
        "part": 1,
        "imageUrl": "/images/intensive/test2/q2.png",
        "partTitle": "Part 1: Mô tả hình ảnh",
        "questionRange": "Câu 2",
        "title": "Part 1 - Câu 2: Người đàn ông tựa vào lan can",
        "audioSrc": "/audio/cuts/test2/E26-T02-02.mp3",
        "transcript": [
            {"id": "p1-2-a", "speaker": "Speaker", "text": "(A) Some shopping bags have been placed on a train platform.", "vietnamese": "(A) Một số túi mua sắm được đặt trên sân ga."},
            {"id": "p1-2-b", "speaker": "Speaker", "text": "(B) Some people are lined up to buy train tickets.", "vietnamese": "(B) Một số người đang xếp hàng để mua vé tàu."},
            {"id": "p1-2-c", "speaker": "Speaker", "text": "(C) A woman is pulling her luggage behind her.", "vietnamese": "(C) Một người phụ nữ đang kéo hành lý phía sau mình."},
            {"id": "p1-2-d", "speaker": "Speaker", "text": "(D) A man is leaning against a railing.", "vietnamese": "(D) Một người đàn ông đang tựa vào lan can."}
        ],
        "questions": [
            {
                "num": 2,
                "question": "Chọn câu mô tả đúng nhất về bức tranh:",
                "vietnameseQuestion": "Chọn câu mô tả đúng nhất về bức tranh:",
                "options": [
                    {"key": "A", "text": "Some shopping bags have been placed on a train platform.", "vietnamese": "Một số túi mua sắm được đặt trên sân ga."},
                    {"key": "B", "text": "Some people are lined up to buy train tickets.", "vietnamese": "Một số người đang xếp hàng để mua vé tàu."},
                    {"key": "C", "text": "A woman is pulling her luggage behind her.", "vietnamese": "Một người phụ nữ đang kéo hành lý sau mình."},
                    {"key": "D", "text": "A man is leaning against a railing.", "vietnamese": "Một người đàn ông đang tựa vào lan can."}
                ],
                "correctAnswer": "D",
                "explanation": "Ở bên trái khung hình, một người đàn ông mặc áo khoác đang tựa lưng vào lan can ga tàu (is leaning against a railing)."
            }
        ],
        "vocabulary": [
            {"word": "platform", "meaning": "sân ga, thềm ga", "partOfSpeech": "n"},
            {"word": "lined up", "meaning": "xếp thành hàng", "partOfSpeech": "adj"},
            {"word": "luggage", "meaning": "hành lý", "partOfSpeech": "n"},
            {"word": "lean against", "meaning": "tựa vào, chống vào", "partOfSpeech": "phr v"},
            {"word": "railing", "meaning": "lan can, rào chắn", "partOfSpeech": "n"}
        ]
    },
    {
        "id": "part1-3",
        "part": 1,
        "imageUrl": "/images/intensive/test2/q3.png",
        "partTitle": "Part 1: Mô tả hình ảnh",
        "questionRange": "Câu 3",
        "title": "Part 1 - Câu 3: Xe ô tô đỗ cạnh tòa nhà",
        "audioSrc": "/audio/cuts/test2/E26-T02-03.mp3",
        "transcript": [
            {"id": "p1-3-a", "speaker": "Speaker", "text": "(A) Some wooden planks are leaning against a wall.", "vietnamese": "(A) Một số tấm ván gỗ đang tựa vào tường."},
            {"id": "p1-3-b", "speaker": "Speaker", "text": "(B) A vehicle is parked next to a building.", "vietnamese": "(B) Một chiếc xe ô tô đang đỗ cạnh tòa nhà."},
            {"id": "p1-3-c", "speaker": "Speaker", "text": "(C) Some stones have been stacked on a pallet.", "vietnamese": "(C) Một số tảng đá được xếp chồng lên tấm pallet."},
            {"id": "p1-3-d", "speaker": "Speaker", "text": "(D) A package has been left near a door.", "vietnamese": "(D) Một gói hàng bị để lại gần cửa ra vào."}
        ],
        "questions": [
            {
                "num": 3,
                "question": "Chọn câu mô tả đúng nhất về bức tranh:",
                "vietnameseQuestion": "Chọn câu mô tả đúng nhất về bức tranh:",
                "options": [
                    {"key": "A", "text": "Some wooden planks are leaning against a wall.", "vietnamese": "Một số tấm ván gỗ đang tựa vào tường."},
                    {"key": "B", "text": "A vehicle is parked next to a building.", "vietnamese": "Một chiếc xe đang đỗ cạnh tòa nhà."},
                    {"key": "C", "text": "Some stones have been stacked on a pallet.", "vietnamese": "Một số tảng đá được xếp chồng lên pallet."},
                    {"key": "D", "text": "A package has been left near a door.", "vietnamese": "Một kiện hàng bị để gần cửa."}
                ],
                "correctAnswer": "B",
                "explanation": "Trong bức ảnh, có một chiếc xe ô tô đỗ ở góc giữa hai tòa nhà (A vehicle is parked next to a building)."
            }
        ],
        "vocabulary": [
            {"word": "wooden plank", "meaning": "tấm ván gỗ", "partOfSpeech": "n"},
            {"word": "vehicle", "meaning": "phương tiện, xe cộ", "partOfSpeech": "n"},
            {"word": "stack", "meaning": "chất chồng, xếp chồng", "partOfSpeech": "v"},
            {"word": "pallet", "meaning": "tấm pallet (kê hàng)", "partOfSpeech": "n"}
        ]
    },
    {
        "id": "part1-4",
        "part": 1,
        "imageUrl": "/images/intensive/test2/q4.png",
        "partTitle": "Part 1: Mô tả hình ảnh",
        "questionRange": "Câu 4",
        "title": "Part 1 - Câu 4: Người đàn ông giơ điện thoại chụp",
        "audioSrc": "/audio/cuts/test2/E26-T02-04.mp3",
        "transcript": [
            {"id": "p1-4-a", "speaker": "Speaker", "text": "(A) A man is holding up his phone.", "vietnamese": "(A) Một người đàn ông đang giơ điện thoại lên."},
            {"id": "p1-4-b", "speaker": "Speaker", "text": "(B) A man is pinning a note to a bulletin board.", "vietnamese": "(B) Một người đàn ông đang ghim một mẩu ghi chú lên bảng thông báo."},
            {"id": "p1-4-c", "speaker": "Speaker", "text": "(C) A man is dropping an item into a bin.", "vietnamese": "(C) Một người đàn ông đang thả một món đồ vào thùng rác."},
            {"id": "p1-4-d", "speaker": "Speaker", "text": "(D) A man is washing some windows.", "vietnamese": "(D) Một người đàn ông đang lau một số cửa sổ."}
        ],
        "questions": [
            {
                "num": 4,
                "question": "Chọn câu mô tả đúng nhất về bức tranh:",
                "vietnameseQuestion": "Chọn câu mô tả đúng nhất về bức tranh:",
                "options": [
                    {"key": "A", "text": "A man is holding up his phone.", "vietnamese": "Một người đàn ông đang giơ điện thoại lên."},
                    {"key": "B", "text": "A man is pinning a note to a bulletin board.", "vietnamese": "Một người đàn ông đang ghim ghi chú lên bảng thông báo."},
                    {"key": "C", "text": "A man is dropping an item into a bin.", "vietnamese": "Một người đàn ông đang vứt đồ vào thùng rác."},
                    {"key": "D", "text": "A man is washing some windows.", "vietnamese": "Một người đàn ông đang lau cửa sổ."}
                ],
                "correctAnswer": "A",
                "explanation": "Người đàn ông đang cầm điện thoại giơ lên chụp mẩu thông báo trên bảng (is holding up his phone)."
            }
        ],
        "vocabulary": [
            {"word": "hold up", "meaning": "giơ lên, đưa lên", "partOfSpeech": "phr v"},
            {"word": "pin", "meaning": "ghim chặt, cài", "partOfSpeech": "v"},
            {"word": "bulletin board", "meaning": "bảng thông báo", "partOfSpeech": "n"},
            {"word": "drop", "meaning": "thả, đánh rơi", "partOfSpeech": "v"},
            {"word": "bin", "meaning": "thùng rác, thùng chứa", "partOfSpeech": "n"}
        ]
    },
    {
        "id": "part1-5",
        "part": 1,
        "imageUrl": "/images/intensive/test2/q5.png",
        "partTitle": "Part 1: Mô tả hình ảnh",
        "questionRange": "Câu 5",
        "title": "Part 1 - Câu 5: Người phụ nữ làm việc tại quầy bếp",
        "audioSrc": "/audio/cuts/test2/E26-T02-05.mp3",
        "transcript": [
            {"id": "p1-5-a", "speaker": "Speaker", "text": "(A) She's tying the back of her apron.", "vietnamese": "(A) Cô ấy đang buộc dây tạp dề phía sau lưng."},
            {"id": "p1-5-b", "speaker": "Speaker", "text": "(B) She's reaching for food on a shelf.", "vietnamese": "(B) Cô ấy đang với lấy đồ ăn trên kệ."},
            {"id": "p1-5-c", "speaker": "Speaker", "text": "(C) She's working at a counter.", "vietnamese": "(C) Cô ấy đang làm việc tại quầy bếp."},
            {"id": "p1-5-d", "speaker": "Speaker", "text": "(D) She's putting food into a refrigerator.", "vietnamese": "(D) Cô ấy đang cất thức ăn vào tủ lạnh."}
        ],
        "questions": [
            {
                "num": 5,
                "question": "Chọn câu mô tả đúng nhất về bức tranh:",
                "vietnameseQuestion": "Chọn câu mô tả đúng nhất về bức tranh:",
                "options": [
                    {"key": "A", "text": "She's tying the back of her apron.", "vietnamese": "Cô ấy đang buộc dây tạp dề sau lưng."},
                    {"key": "B", "text": "She's reaching for food on a shelf.", "vietnamese": "Cô ấy đang với lấy thức ăn trên kệ."},
                    {"key": "C", "text": "She's working at a counter.", "vietnamese": "Cô ấy đang làm việc tại quầy bếp."},
                    {"key": "D", "text": "She's putting food into a refrigerator.", "vietnamese": "Cô ấy đang cho đồ ăn vào tủ lạnh."}
                ],
                "correctAnswer": "C",
                "explanation": "Người phụ nữ mặc tạp dề đang đứng chuẩn bị thức ăn tại bàn bếp/quầy bếp inox (is working at a counter)."
            }
        ],
        "vocabulary": [
            {"word": "tie", "meaning": "buộc, cột", "partOfSpeech": "v"},
            {"word": "apron", "meaning": "tạp dề", "partOfSpeech": "n"},
            {"word": "reach for", "meaning": "với tay lấy", "partOfSpeech": "phr v"},
            {"word": "counter", "meaning": "quầy hàng, bàn bếp", "partOfSpeech": "n"},
            {"word": "refrigerator", "meaning": "tủ lạnh", "partOfSpeech": "n"}
        ]
    },
    {
        "id": "part1-6",
        "part": 1,
        "imageUrl": "/images/intensive/test2/q6.png",
        "partTitle": "Part 1: Mô tả hình ảnh",
        "questionRange": "Câu 6",
        "title": "Part 1 - Câu 6: Người đàn ông chuẩn bị bàn tiệc buffet",
        "audioSrc": "/audio/cuts/test2/E26-T02-06.mp3",
        "transcript": [
            {"id": "p1-6-a", "speaker": "Speaker", "text": "(A) He's setting up a buffet.", "vietnamese": "(A) Anh ấy đang chuẩn bị bàn tiệc buffet."},
            {"id": "p1-6-b", "speaker": "Speaker", "text": "(B) He's putting plates on dining tables.", "vietnamese": "(B) Anh ấy đang đặt đĩa lên các bàn ăn."},
            {"id": "p1-6-c", "speaker": "Speaker", "text": "(C) He's watering some plants in a garden.", "vietnamese": "(C) Anh ấy đang tưới một số cây trong vườn."},
            {"id": "p1-6-d", "speaker": "Speaker", "text": "(D) He's carrying food up a stairway.", "vietnamese": "(D) Anh ấy đang mang đồ ăn lên cầu thang."}
        ],
        "questions": [
            {
                "num": 6,
                "question": "Chọn câu mô tả đúng nhất về bức tranh:",
                "vietnameseQuestion": "Chọn câu mô tả đúng nhất về bức tranh:",
                "options": [
                    {"key": "A", "text": "He's setting up a buffet.", "vietnamese": "Anh ấy đang chuẩn bị tiệc buffet."},
                    {"key": "B", "text": "He's putting plates on dining tables.", "vietnamese": "Anh ấy đang đặt đĩa lên các bàn ăn."},
                    {"key": "C", "text": "He's watering some plants in a garden.", "vietnamese": "Anh ấy đang tưới cây trong vườn."},
                    {"key": "D", "text": "He's carrying food up a stairway.", "vietnamese": "Anh ấy đang bưng đồ ăn lên cầu thang."}
                ],
                "correctAnswer": "A",
                "explanation": "Người đàn ông đang đứng bên bàn tiệc có các khay giữ nhiệt buffet bằng kim loại để sắp xếp món ăn (is setting up a buffet)."
            }
        ],
        "vocabulary": [
            {"word": "set up", "meaning": "chuẩn bị, sắp đặt", "partOfSpeech": "phr v"},
            {"word": "buffet", "meaning": "tiệc đứng, quầy buffet", "partOfSpeech": "n"},
            {"word": "dining table", "meaning": "bàn ăn", "partOfSpeech": "n"},
            {"word": "stairway", "meaning": "cầu thang bộ", "partOfSpeech": "n"}
        ]
    }
]
