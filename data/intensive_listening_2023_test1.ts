// Dữ liệu luyện nghe chi tiết (Intensive Listening) - ETS TOEIC 2023 Test 1
// Áp dụng kỹ thuật Virtual Timestamp Slicing từ audio gốc /audio/test1_2023.mp3
// Transcript song ngữ Anh - Việt, câu hỏi, đáp án và từ vựng trọng tâm

import type { IntensiveListeningItem } from './intensive_listening_types';

export const test1_2023_IntensiveData: IntensiveListeningItem[] = [
  {
    "id": "part1-1",
    "part": 1,
    "partTitle": "Part 1: Mô tả hình ảnh",
    "questionRange": "Câu 1",
    "title": "Part 1 - Câu 1: Một người phụ nữ đang xem bản đồ.",
    "audioSrc": "/audio/test1_2023.mp3",
    "startTime": 98.42,
    "endTime": 123.3,
    "imageUrl": "/images/intensive/test1_2023/q1.png",
    "image": "/images/intensive/test1_2023/q1.png",
    "transcript": [
      {
        "id": "p1-1-a",
        "speaker": "Speaker",
        "text": "(A) A woman is standing near a desk.",
        "vietnamese": "(A) Một người phụ nữ đang đứng gần bàn làm việc."
      },
      {
        "id": "p1-1-b",
        "speaker": "Speaker",
        "text": "(B) A woman is climbing some stairs.",
        "vietnamese": "(B) Một người phụ nữ đang leo lên một số cầu thang."
      },
      {
        "id": "p1-1-c",
        "speaker": "Speaker",
        "text": "(C) A woman is entering a building.",
        "vietnamese": "(C) Một người phụ nữ đang bước vào một tòa nhà."
      },
      {
        "id": "p1-1-d",
        "speaker": "Speaker",
        "text": "(D) A woman is looking at a map.",
        "vietnamese": "(D) Một người phụ nữ đang xem bản đồ."
      }
    ],
    "questions": [
      {
        "num": 1,
        "question": "Chọn câu mô tả đúng nhất về bức tranh:",
        "vietnameseQuestion": "Chọn câu mô tả đúng nhất về bức tranh:",
        "options": [
          {
            "key": "A",
            "text": "A woman is standing near a desk.",
            "vietnamese": "Một người phụ nữ đang đứng gần bàn làm việc."
          },
          {
            "key": "B",
            "text": "A woman is climbing some stairs.",
            "vietnamese": "Một người phụ nữ đang leo lên một số cầu thang."
          },
          {
            "key": "C",
            "text": "A woman is entering a building.",
            "vietnamese": "Một người phụ nữ đang bước vào một tòa nhà."
          },
          {
            "key": "D",
            "text": "A woman is looking at a map.",
            "vietnamese": "Một người phụ nữ đang xem bản đồ."
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là (D): \"A woman is looking at a map.\" (Một người phụ nữ đang xem bản đồ.) mô tả chính xác hoạt động và cảnh vật trong hình."
      }
    ],
    "vocabulary": [
      {
        "word": "stairs",
        "meaning": "cầu thang bộ",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part1-2",
    "part": 1,
    "partTitle": "Part 1: Mô tả hình ảnh",
    "questionRange": "Câu 2",
    "title": "Part 1 - Câu 2: Những chiếc ghế được đặt trên bãi biển.",
    "audioSrc": "/audio/test1_2023.mp3",
    "startTime": 123.3,
    "endTime": 154.74,
    "imageUrl": "/images/intensive/test1_2023/q2.png",
    "image": "/images/intensive/test1_2023/q2.png",
    "transcript": [
      {
        "id": "p1-2-a",
        "speaker": "Speaker",
        "text": "(A) She's swimming in the water.",
        "vietnamese": "(A) Cô ấy đang bơi trong nước."
      },
      {
        "id": "p1-2-b",
        "speaker": "Speaker",
        "text": "(B) She's jogging near the ocean.",
        "vietnamese": "(B) Cô ấy đang chạy bộ gần biển."
      },
      {
        "id": "p1-2-c",
        "speaker": "Speaker",
        "text": "(C) Chairs are set up on the beach.",
        "vietnamese": "(C) Những chiếc ghế được đặt trên bãi biển."
      },
      {
        "id": "p1-2-d",
        "speaker": "Speaker",
        "text": "(D) A hat is lying on the sand.",
        "vietnamese": "(D) Một chiếc mũ nằm trên cát."
      }
    ],
    "questions": [
      {
        "num": 2,
        "question": "Chọn câu mô tả đúng nhất về bức tranh:",
        "vietnameseQuestion": "Chọn câu mô tả đúng nhất về bức tranh:",
        "options": [
          {
            "key": "A",
            "text": "She's swimming in the water.",
            "vietnamese": "Cô ấy đang bơi trong nước."
          },
          {
            "key": "B",
            "text": "She's jogging near the ocean.",
            "vietnamese": "Cô ấy đang chạy bộ gần biển."
          },
          {
            "key": "C",
            "text": "Chairs are set up on the beach.",
            "vietnamese": "Những chiếc ghế được đặt trên bãi biển."
          },
          {
            "key": "D",
            "text": "A hat is lying on the sand.",
            "vietnamese": "Một chiếc mũ nằm trên cát."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"Chairs are set up on the beach.\" (Những chiếc ghế được đặt trên bãi biển.) mô tả chính xác hoạt động và cảnh vật trong hình."
      }
    ],
    "vocabulary": [
      {
        "word": "water",
        "meaning": "tưới nước",
        "partOfSpeech": "v"
      }
    ]
  },
  {
    "id": "part1-3",
    "part": 1,
    "partTitle": "Part 1: Mô tả hình ảnh",
    "questionRange": "Câu 3",
    "title": "Part 1 - Câu 3: Cô ấy đang cầm một chiếc xe đẩy hàng.",
    "audioSrc": "/audio/test1_2023.mp3",
    "startTime": 154.74,
    "endTime": 181.42,
    "imageUrl": "/images/intensive/test1_2023/q3.png",
    "image": "/images/intensive/test1_2023/q3.png",
    "transcript": [
      {
        "id": "p1-3-a",
        "speaker": "Speaker",
        "text": "(A) She's reaching for an item from a display case.",
        "vietnamese": "(A) Cô ấy đang với lấy một món đồ từ tủ trưng bày."
      },
      {
        "id": "p1-3-b",
        "speaker": "Speaker",
        "text": "(B) She's holding onto a shopping cart.",
        "vietnamese": "(B) Cô ấy đang cầm một chiếc xe đẩy hàng."
      },
      {
        "id": "p1-3-c",
        "speaker": "Speaker",
        "text": "(C) Some goods are being arranged on shelves.",
        "vietnamese": "(C) Một số hàng hóa đang được sắp xếp trên kệ."
      },
      {
        "id": "p1-3-d",
        "speaker": "Speaker",
        "text": "(D) Some merchandise has fallen on the floor.",
        "vietnamese": "(D) Một số hàng hóa đã rơi xuống sàn."
      }
    ],
    "questions": [
      {
        "num": 3,
        "question": "Chọn câu mô tả đúng nhất về bức tranh:",
        "vietnameseQuestion": "Chọn câu mô tả đúng nhất về bức tranh:",
        "options": [
          {
            "key": "A",
            "text": "She's reaching for an item from a display case.",
            "vietnamese": "Cô ấy đang với lấy một món đồ từ tủ trưng bày."
          },
          {
            "key": "B",
            "text": "She's holding onto a shopping cart.",
            "vietnamese": "Cô ấy đang cầm một chiếc xe đẩy hàng."
          },
          {
            "key": "C",
            "text": "Some goods are being arranged on shelves.",
            "vietnamese": "Một số hàng hóa đang được sắp xếp trên kệ."
          },
          {
            "key": "D",
            "text": "Some merchandise has fallen on the floor.",
            "vietnamese": "Một số hàng hóa đã rơi xuống sàn."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"She's holding onto a shopping cart.\" (Cô ấy đang cầm một chiếc xe đẩy hàng.) mô tả chính xác hoạt động và cảnh vật trong hình."
      }
    ],
    "vocabulary": [
      {
        "word": "display",
        "meaning": "trưng bày",
        "partOfSpeech": "v"
      },
      {
        "word": "cart",
        "meaning": "xe đẩy, xe chở hàng",
        "partOfSpeech": "n"
      },
      {
        "word": "merchandise",
        "meaning": "hàng hóa",
        "partOfSpeech": "n"
      },
      {
        "word": "floor",
        "meaning": "tầng, sàn nhà",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part1-4",
    "part": 1,
    "partTitle": "Part 1: Mô tả hình ảnh",
    "questionRange": "Câu 4",
    "title": "Part 1 - Câu 4: Một số người đang làm việc trong vườn.",
    "audioSrc": "/audio/test1_2023.mp3",
    "startTime": 181.42,
    "endTime": 207.37,
    "imageUrl": "/images/intensive/test1_2023/q4.png",
    "image": "/images/intensive/test1_2023/q4.png",
    "transcript": [
      {
        "id": "p1-4-a",
        "speaker": "Speaker",
        "text": "(A) A fence is being painted in a park.",
        "vietnamese": "(A) Một hàng rào đang được sơn trong công viên."
      },
      {
        "id": "p1-4-b",
        "speaker": "Speaker",
        "text": "(B) One of the women is putting on a jacket.",
        "vietnamese": "(B) Một trong những người phụ nữ đang mặc áo khoác."
      },
      {
        "id": "p1-4-c",
        "speaker": "Speaker",
        "text": "(C) Some people are working in a garden.",
        "vietnamese": "(C) Một số người đang làm việc trong vườn."
      },
      {
        "id": "p1-4-d",
        "speaker": "Speaker",
        "text": "(D) Some people are looking up at the trees.",
        "vietnamese": "(D) Một số người đang nhìn lên cây."
      }
    ],
    "questions": [
      {
        "num": 4,
        "question": "Chọn câu mô tả đúng nhất về bức tranh:",
        "vietnameseQuestion": "Chọn câu mô tả đúng nhất về bức tranh:",
        "options": [
          {
            "key": "A",
            "text": "A fence is being painted in a park.",
            "vietnamese": "Một hàng rào đang được sơn trong công viên."
          },
          {
            "key": "B",
            "text": "One of the women is putting on a jacket.",
            "vietnamese": "Một trong những người phụ nữ đang mặc áo khoác."
          },
          {
            "key": "C",
            "text": "Some people are working in a garden.",
            "vietnamese": "Một số người đang làm việc trong vườn."
          },
          {
            "key": "D",
            "text": "Some people are looking up at the trees.",
            "vietnamese": "Một số người đang nhìn lên cây."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"Some people are working in a garden.\" (Một số người đang làm việc trong vườn.) mô tả chính xác hoạt động và cảnh vật trong hình."
      }
    ],
    "vocabulary": [
      {
        "word": "fence",
        "meaning": "hàng rào",
        "partOfSpeech": "n"
      },
      {
        "word": "park",
        "meaning": "đỗ xe, đậu xe",
        "partOfSpeech": "v"
      }
    ]
  },
  {
    "id": "part1-5",
    "part": 1,
    "partTitle": "Part 1: Mô tả hình ảnh",
    "questionRange": "Câu 5",
    "title": "Part 1 - Câu 5: Một số tài liệu đọc đã được đặt trước ghế sofa.",
    "audioSrc": "/audio/test1_2023.mp3",
    "startTime": 207.37,
    "endTime": 233.45,
    "imageUrl": "/images/intensive/test1_2023/q5.png",
    "image": "/images/intensive/test1_2023/q5.png",
    "transcript": [
      {
        "id": "p1-5-a",
        "speaker": "Speaker",
        "text": "(A) A carpet is being rolled up.",
        "vietnamese": "(A) Một tấm thảm đang được cuộn lại."
      },
      {
        "id": "p1-5-b",
        "speaker": "Speaker",
        "text": "(B) Some curtains have been closed.",
        "vietnamese": "(B) Một số rèm cửa đã được đóng lại."
      },
      {
        "id": "p1-5-c",
        "speaker": "Speaker",
        "text": "(C) Some cushions are piled on the floor.",
        "vietnamese": "(C) Một số đệm được chất đống trên sàn nhà."
      },
      {
        "id": "p1-5-d",
        "speaker": "Speaker",
        "text": "(D) Some reading materials have been placed in front of a sofa.",
        "vietnamese": "(D) Một số tài liệu đọc đã được đặt trước ghế sofa."
      }
    ],
    "questions": [
      {
        "num": 5,
        "question": "Chọn câu mô tả đúng nhất về bức tranh:",
        "vietnameseQuestion": "Chọn câu mô tả đúng nhất về bức tranh:",
        "options": [
          {
            "key": "A",
            "text": "A carpet is being rolled up.",
            "vietnamese": "Một tấm thảm đang được cuộn lại."
          },
          {
            "key": "B",
            "text": "Some curtains have been closed.",
            "vietnamese": "Một số rèm cửa đã được đóng lại."
          },
          {
            "key": "C",
            "text": "Some cushions are piled on the floor.",
            "vietnamese": "Một số đệm được chất đống trên sàn nhà."
          },
          {
            "key": "D",
            "text": "Some reading materials have been placed in front of a sofa.",
            "vietnamese": "Một số tài liệu đọc đã được đặt trước ghế sofa."
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là (D): \"Some reading materials have been placed in front of a sofa.\" (Một số tài liệu đọc đã được đặt trước ghế sofa.) mô tả chính xác hoạt động và cảnh vật trong hình."
      }
    ],
    "vocabulary": [
      {
        "word": "closed",
        "meaning": "đóng cửa",
        "partOfSpeech": "adj"
      },
      {
        "word": "floor",
        "meaning": "tầng, sàn nhà",
        "partOfSpeech": "n"
      },
      {
        "word": "reading",
        "meaning": "buổi đọc sách, buổi ngâm thơ",
        "partOfSpeech": "n"
      },
      {
        "word": "sofa",
        "meaning": "ghế bành dài, sofa",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part1-6",
    "part": 1,
    "partTitle": "Part 1: Mô tả hình ảnh",
    "questionRange": "Câu 6",
    "title": "Part 1 - Câu 6: Một số nhạc sĩ đang biểu diễn trên hiên nhà.",
    "audioSrc": "/audio/test1_2023.mp3",
    "startTime": 233.45,
    "endTime": 266.81,
    "imageUrl": "/images/intensive/test1_2023/q6.png",
    "image": "/images/intensive/test1_2023/q6.png",
    "transcript": [
      {
        "id": "p1-6-a",
        "speaker": "Speaker",
        "text": "(A) Some musicians are performing on a porch.",
        "vietnamese": "(A) Một số nhạc sĩ đang biểu diễn trên hiên nhà."
      },
      {
        "id": "p1-6-b",
        "speaker": "Speaker",
        "text": "(B) Some steps are being repaired.",
        "vietnamese": "(B) Một số bước đang được sửa chữa."
      },
      {
        "id": "p1-6-c",
        "speaker": "Speaker",
        "text": "(C) Some music stands are being folded up.",
        "vietnamese": "(C) Một số giá nhạc đang được gấp lại."
      },
      {
        "id": "p1-6-d",
        "speaker": "Speaker",
        "text": "(D) Some instruments have been placed in their cases.",
        "vietnamese": "(D) Một số nhạc cụ đã được đặt trong hộp của chúng."
      }
    ],
    "questions": [
      {
        "num": 6,
        "question": "Chọn câu mô tả đúng nhất về bức tranh:",
        "vietnameseQuestion": "Chọn câu mô tả đúng nhất về bức tranh:",
        "options": [
          {
            "key": "A",
            "text": "Some musicians are performing on a porch.",
            "vietnamese": "Một số nhạc sĩ đang biểu diễn trên hiên nhà."
          },
          {
            "key": "B",
            "text": "Some steps are being repaired.",
            "vietnamese": "Một số bước đang được sửa chữa."
          },
          {
            "key": "C",
            "text": "Some music stands are being folded up.",
            "vietnamese": "Một số giá nhạc đang được gấp lại."
          },
          {
            "key": "D",
            "text": "Some instruments have been placed in their cases.",
            "vietnamese": "Một số nhạc cụ đã được đặt trong hộp của chúng."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là (A): \"Some musicians are performing on a porch.\" (Một số nhạc sĩ đang biểu diễn trên hiên nhà.) mô tả chính xác hoạt động và cảnh vật trong hình."
      }
    ],
    "vocabulary": [
      {
        "word": "musicians",
        "meaning": "nhạc sĩ",
        "partOfSpeech": "n/v"
      },
      {
        "word": "performing",
        "meaning": "biểu diễn",
        "partOfSpeech": "n/v"
      }
    ]
  },
  {
    "id": "part2-7",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 7",
    "title": "Part 2 - Câu 7: Cửa hàng đó bán loại thực phẩm nào?",
    "audioSrc": "/audio/test1_2023.mp3",
    "startTime": 289.76,
    "endTime": 309.09,
    "transcript": [
      {
        "id": "p2-7-q",
        "speaker": "Speaker 1",
        "text": "What type of food does that store sell?",
        "vietnamese": "Cửa hàng đó bán loại thực phẩm nào?"
      },
      {
        "id": "p2-7-a",
        "speaker": "Speaker 2",
        "text": "(A) What a delicious recipe.",
        "vietnamese": "(A) Thật là một công thức ngon."
      },
      {
        "id": "p2-7-b",
        "speaker": "Speaker 2",
        "text": "(B) They have all kinds of cheese.",
        "vietnamese": "(B) Họ có đủ loại phô mai."
      },
      {
        "id": "p2-7-c",
        "speaker": "Speaker 2",
        "text": "(C) With a new jacket.",
        "vietnamese": "(C) Với một chiếc áo khoác mới."
      }
    ],
    "questions": [
      {
        "num": 7,
        "question": "What type of food does that store sell?",
        "vietnameseQuestion": "Cửa hàng đó bán loại thực phẩm nào?",
        "options": [
          {
            "key": "A",
            "text": "What a delicious recipe.",
            "vietnamese": "Thật là một công thức ngon."
          },
          {
            "key": "B",
            "text": "They have all kinds of cheese.",
            "vietnamese": "Họ có đủ loại phô mai."
          },
          {
            "key": "C",
            "text": "With a new jacket.",
            "vietnamese": "Với một chiếc áo khoác mới."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"They have all kinds of cheese.\" (Họ có đủ loại phô mai.) là câu phản hồi hợp lý nhất cho câu \"What type of food does that store sell?\"."
      }
    ],
    "vocabulary": [
      {
        "word": "store",
        "meaning": "lưu trữ, cất giữ",
        "partOfSpeech": "n"
      },
      {
        "word": "delicious",
        "meaning": "thơm ngon",
        "partOfSpeech": "adj"
      },
      {
        "word": "recipe",
        "meaning": "công thức nấu ăn",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-8",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 8",
    "title": "Part 2 - Câu 8: Khi nào chúng ta nên ra sân bay?",
    "audioSrc": "/audio/test1_2023.mp3",
    "startTime": 309.09,
    "endTime": 333.62,
    "transcript": [
      {
        "id": "p2-8-q",
        "speaker": "Speaker 1",
        "text": "When should we leave for the airport?",
        "vietnamese": "Khi nào chúng ta nên ra sân bay?"
      },
      {
        "id": "p2-8-a",
        "speaker": "Speaker 2",
        "text": "(A) This afternoon at 2 o'clock.",
        "vietnamese": "(A) Chiều nay lúc 2 giờ."
      },
      {
        "id": "p2-8-b",
        "speaker": "Speaker 2",
        "text": "(B) I prefer an aisle seat.",
        "vietnamese": "(B) Tôi thích chỗ ngồi gần lối đi hơn."
      },
      {
        "id": "p2-8-c",
        "speaker": "Speaker 2",
        "text": "(C) Mr. Choi traveled there last year.",
        "vietnamese": "(C) Ông Choi đã tới đó vào năm ngoái."
      }
    ],
    "questions": [
      {
        "num": 8,
        "question": "When should we leave for the airport?",
        "vietnameseQuestion": "Khi nào chúng ta nên ra sân bay?",
        "options": [
          {
            "key": "A",
            "text": "This afternoon at 2 o'clock.",
            "vietnamese": "Chiều nay lúc 2 giờ."
          },
          {
            "key": "B",
            "text": "I prefer an aisle seat.",
            "vietnamese": "Tôi thích chỗ ngồi gần lối đi hơn."
          },
          {
            "key": "C",
            "text": "Mr. Choi traveled there last year.",
            "vietnamese": "Ông Choi đã tới đó vào năm ngoái."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là (A): \"This afternoon at 2 o'clock.\" (Chiều nay lúc 2 giờ.) là câu phản hồi hợp lý nhất cho câu \"When should we leave for the airport?\"."
      }
    ],
    "vocabulary": [
      {
        "word": "leave",
        "meaning": "rời đi, nghỉ việc",
        "partOfSpeech": "v"
      },
      {
        "word": "airport",
        "meaning": "sân bay",
        "partOfSpeech": "n"
      },
      {
        "word": "prefer",
        "meaning": "thích hơn",
        "partOfSpeech": "v"
      }
    ]
  },
  {
    "id": "part2-9",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 9",
    "title": "Part 2 - Câu 9: Sự kiện tuyển dụng được tổ chức ở đâu?",
    "audioSrc": "/audio/test1_2023.mp3",
    "startTime": 333.62,
    "endTime": 352.79,
    "transcript": [
      {
        "id": "p2-9-q",
        "speaker": "Speaker 1",
        "text": "Where's the hiring event being held?",
        "vietnamese": "Sự kiện tuyển dụng được tổ chức ở đâu?"
      },
      {
        "id": "p2-9-a",
        "speaker": "Speaker 2",
        "text": "(A) She sent it to a colleague.",
        "vietnamese": "(A) Cô ấy đã gửi nó cho một đồng nghiệp."
      },
      {
        "id": "p2-9-b",
        "speaker": "Speaker 2",
        "text": "(B) In the main conference room.",
        "vietnamese": "(B) Tại phòng họp chính."
      },
      {
        "id": "p2-9-c",
        "speaker": "Speaker 2",
        "text": "(C) If they open on time.",
        "vietnamese": "(C) Nếu họ mở đúng giờ."
      }
    ],
    "questions": [
      {
        "num": 9,
        "question": "Where's the hiring event being held?",
        "vietnameseQuestion": "Sự kiện tuyển dụng được tổ chức ở đâu?",
        "options": [
          {
            "key": "A",
            "text": "She sent it to a colleague.",
            "vietnamese": "Cô ấy đã gửi nó cho một đồng nghiệp."
          },
          {
            "key": "B",
            "text": "In the main conference room.",
            "vietnamese": "Tại phòng họp chính."
          },
          {
            "key": "C",
            "text": "If they open on time.",
            "vietnamese": "Nếu họ mở đúng giờ."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"In the main conference room.\" (Tại phòng họp chính.) là câu phản hồi hợp lý nhất cho câu \"Where's the hiring event being held?\"."
      }
    ],
    "vocabulary": [
      {
        "word": "colleague",
        "meaning": "đồng nghiệp",
        "partOfSpeech": "n"
      },
      {
        "word": "conference",
        "meaning": "hội nghị chuyên đề",
        "partOfSpeech": "n"
      },
      {
        "word": "open",
        "meaning": "mở cửa đón khách",
        "partOfSpeech": "v"
      }
    ]
  },
  {
    "id": "part2-10",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 10",
    "title": "Part 2 - Câu 10: Tại sao ngân sách được cập nhật?",
    "audioSrc": "/audio/test1_2023.mp3",
    "startTime": 352.79,
    "endTime": 372.4,
    "transcript": [
      {
        "id": "p2-10-q",
        "speaker": "Speaker 1",
        "text": "Why is the budget being updated?",
        "vietnamese": "Tại sao ngân sách được cập nhật?"
      },
      {
        "id": "p2-10-a",
        "speaker": "Speaker 2",
        "text": "(A) When we rented the building.",
        "vietnamese": "(A) Khi chúng tôi thuê tòa nhà."
      },
      {
        "id": "p2-10-b",
        "speaker": "Speaker 2",
        "text": "(B) With the new designs.",
        "vietnamese": "(B) Với những mẫu thiết kế mới."
      },
      {
        "id": "p2-10-c",
        "speaker": "Speaker 2",
        "text": "(C) Because new sales figures came in.",
        "vietnamese": "(C) Bởi vì số liệu bán hàng mới xuất hiện."
      }
    ],
    "questions": [
      {
        "num": 10,
        "question": "Why is the budget being updated?",
        "vietnameseQuestion": "Tại sao ngân sách được cập nhật?",
        "options": [
          {
            "key": "A",
            "text": "When we rented the building.",
            "vietnamese": "Khi chúng tôi thuê tòa nhà."
          },
          {
            "key": "B",
            "text": "With the new designs.",
            "vietnamese": "Với những mẫu thiết kế mới."
          },
          {
            "key": "C",
            "text": "Because new sales figures came in.",
            "vietnamese": "Bởi vì số liệu bán hàng mới xuất hiện."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"Because new sales figures came in.\" (Bởi vì số liệu bán hàng mới xuất hiện.) là câu phản hồi hợp lý nhất cho câu \"Why is the budget being updated?\"."
      }
    ],
    "vocabulary": [
      {
        "word": "budget",
        "meaning": "ngân sách",
        "partOfSpeech": "n"
      },
      {
        "word": "sales",
        "meaning": "doanh số bán hàng",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-11",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 11",
    "title": "Part 2 - Câu 11: Bạn có thể làm thay ca làm việc của tôi vào ngày mai được...",
    "audioSrc": "/audio/test1_2023.mp3",
    "startTime": 372.4,
    "endTime": 392.66,
    "transcript": [
      {
        "id": "p2-11-q",
        "speaker": "Speaker 1",
        "text": "Can you cover my shift at work tomorrow?",
        "vietnamese": "Bạn có thể làm thay ca làm việc của tôi vào ngày mai được không?"
      },
      {
        "id": "p2-11-a",
        "speaker": "Speaker 2",
        "text": "(A) No, I'm taking the day off.",
        "vietnamese": "(A) Không, tôi sẽ nghỉ ngày hôm nay."
      },
      {
        "id": "p2-11-b",
        "speaker": "Speaker 2",
        "text": "(B) Before he updated the website.",
        "vietnamese": "(B) Trước khi anh ấy cập nhật trang web."
      },
      {
        "id": "p2-11-c",
        "speaker": "Speaker 2",
        "text": "(C) It's on the agenda for Tuesday.",
        "vietnamese": "(C) Nó nằm trong chương trình nghị sự vào thứ Ba."
      }
    ],
    "questions": [
      {
        "num": 11,
        "question": "Can you cover my shift at work tomorrow?",
        "vietnameseQuestion": "Bạn có thể làm thay ca làm việc của tôi vào ngày mai được không?",
        "options": [
          {
            "key": "A",
            "text": "No, I'm taking the day off.",
            "vietnamese": "Không, tôi sẽ nghỉ ngày hôm nay."
          },
          {
            "key": "B",
            "text": "Before he updated the website.",
            "vietnamese": "Trước khi anh ấy cập nhật trang web."
          },
          {
            "key": "C",
            "text": "It's on the agenda for Tuesday.",
            "vietnamese": "Nó nằm trong chương trình nghị sự vào thứ Ba."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là (A): \"No, I'm taking the day off.\" (Không, tôi sẽ nghỉ ngày hôm nay.) là câu phản hồi hợp lý nhất cho câu \"Can you cover my shift at work tomorrow?\"."
      }
    ],
    "vocabulary": [
      {
        "word": "cover",
        "meaning": "đưa tin (báo chí)",
        "partOfSpeech": "v"
      },
      {
        "word": "shift",
        "meaning": "ca làm việc",
        "partOfSpeech": "n"
      },
      {
        "word": "agenda",
        "meaning": "chương trình nghị sự, nội dung họp",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-12",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 12",
    "title": "Part 2 - Câu 12: Ai đã đặt mua những loại rau này?",
    "audioSrc": "/audio/test1_2023.mp3",
    "startTime": 392.66,
    "endTime": 406.98,
    "transcript": [
      {
        "id": "p2-12-q",
        "speaker": "Speaker 1",
        "text": "Who ordered these vegetables?",
        "vietnamese": "Ai đã đặt mua những loại rau này?"
      },
      {
        "id": "p2-12-a",
        "speaker": "Speaker 2",
        "text": "(A) All of it.",
        "vietnamese": "(A) Tất cả đều như vậy."
      },
      {
        "id": "p2-12-b",
        "speaker": "Speaker 2",
        "text": "(B) I believe Louis did.",
        "vietnamese": "(B) Tôi tin Louis đã làm vậy."
      },
      {
        "id": "p2-12-c",
        "speaker": "Speaker 2",
        "text": "(C) It was excellent thanks.",
        "vietnamese": "(C) Thật tuyệt vời cảm ơn."
      }
    ],
    "questions": [
      {
        "num": 12,
        "question": "Who ordered these vegetables?",
        "vietnameseQuestion": "Ai đã đặt mua những loại rau này?",
        "options": [
          {
            "key": "A",
            "text": "All of it.",
            "vietnamese": "Tất cả đều như vậy."
          },
          {
            "key": "B",
            "text": "I believe Louis did.",
            "vietnamese": "Tôi tin Louis đã làm vậy."
          },
          {
            "key": "C",
            "text": "It was excellent thanks.",
            "vietnamese": "Thật tuyệt vời cảm ơn."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"I believe Louis did.\" (Tôi tin Louis đã làm vậy.) là câu phản hồi hợp lý nhất cho câu \"Who ordered these vegetables?\"."
      }
    ],
    "vocabulary": [
      {
        "word": "excellent",
        "meaning": "xuất sắc, tuyệt vời",
        "partOfSpeech": "adj"
      }
    ]
  },
  {
    "id": "part2-13",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 13",
    "title": "Part 2 - Câu 13: Tôi nên gửi thông báo bao lâu một lần?",
    "audioSrc": "/audio/test1_2023.mp3",
    "startTime": 406.98,
    "endTime": 424.69,
    "transcript": [
      {
        "id": "p2-13-q",
        "speaker": "Speaker 1",
        "text": "How often should I mail the notices?",
        "vietnamese": "Tôi nên gửi thông báo bao lâu một lần?"
      },
      {
        "id": "p2-13-a",
        "speaker": "Speaker 2",
        "text": "(A) Once a month.",
        "vietnamese": "(A) Mỗi tháng một lần."
      },
      {
        "id": "p2-13-b",
        "speaker": "Speaker 2",
        "text": "(B) After 3 o'clock.",
        "vietnamese": "(B) Sau 3 giờ."
      },
      {
        "id": "p2-13-c",
        "speaker": "Speaker 2",
        "text": "(C) About half of them.",
        "vietnamese": "(C) Khoảng một nửa trong số họ."
      }
    ],
    "questions": [
      {
        "num": 13,
        "question": "How often should I mail the notices?",
        "vietnameseQuestion": "Tôi nên gửi thông báo bao lâu một lần?",
        "options": [
          {
            "key": "A",
            "text": "Once a month.",
            "vietnamese": "Mỗi tháng một lần."
          },
          {
            "key": "B",
            "text": "After 3 o'clock.",
            "vietnamese": "Sau 3 giờ."
          },
          {
            "key": "C",
            "text": "About half of them.",
            "vietnamese": "Khoảng một nửa trong số họ."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là (A): \"Once a month.\" (Mỗi tháng một lần.) là câu phản hồi hợp lý nhất cho câu \"How often should I mail the notices?\"."
      }
    ],
    "vocabulary": [
      {
        "word": "often",
        "meaning": "thường",
        "partOfSpeech": "n/v"
      },
      {
        "word": "mail",
        "meaning": "thư",
        "partOfSpeech": "n/v"
      }
    ]
  },
  {
    "id": "part2-14",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 14",
    "title": "Part 2 - Câu 14: Tài liệu nằm trong thư mục nào?",
    "audioSrc": "/audio/test1_2023.mp3",
    "startTime": 424.69,
    "endTime": 448.81,
    "transcript": [
      {
        "id": "p2-14-q",
        "speaker": "Speaker 1",
        "text": "Which folder are the documents in?",
        "vietnamese": "Tài liệu nằm trong thư mục nào?"
      },
      {
        "id": "p2-14-a",
        "speaker": "Speaker 2",
        "text": "(A) We agreed on the deadline.",
        "vietnamese": "(A) Chúng tôi đã đồng ý về thời hạn."
      },
      {
        "id": "p2-14-b",
        "speaker": "Speaker 2",
        "text": "(B) Sure. I'll take a look.",
        "vietnamese": "(B) Chắc chắn. Tôi sẽ xem xét."
      },
      {
        "id": "p2-14-c",
        "speaker": "Speaker 2",
        "text": "(C) Let me show you.",
        "vietnamese": "(C) Hãy để tôi chỉ cho bạn."
      }
    ],
    "questions": [
      {
        "num": 14,
        "question": "Which folder are the documents in?",
        "vietnameseQuestion": "Tài liệu nằm trong thư mục nào?",
        "options": [
          {
            "key": "A",
            "text": "We agreed on the deadline.",
            "vietnamese": "Chúng tôi đã đồng ý về thời hạn."
          },
          {
            "key": "B",
            "text": "Sure. I'll take a look.",
            "vietnamese": "Chắc chắn. Tôi sẽ xem xét."
          },
          {
            "key": "C",
            "text": "Let me show you.",
            "vietnamese": "Hãy để tôi chỉ cho bạn."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"Let me show you.\" (Hãy để tôi chỉ cho bạn.) là câu phản hồi hợp lý nhất cho câu \"Which folder are the documents in?\"."
      }
    ],
    "vocabulary": [
      {
        "word": "folder",
        "meaning": "tập kẹp hồ sơ",
        "partOfSpeech": "n"
      },
      {
        "word": "deadline",
        "meaning": "hạn chót",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-15",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 15",
    "title": "Part 2 - Câu 15: Tối qua bạn có đi xem phim hay đi xem hòa nhạc không?",
    "audioSrc": "/audio/test1_2023.mp3",
    "startTime": 448.81,
    "endTime": 465.1,
    "transcript": [
      {
        "id": "p2-15-q",
        "speaker": "Speaker 1",
        "text": "Did you end up going to a movie or to the concert last night?",
        "vietnamese": "Tối qua bạn có đi xem phim hay đi xem hòa nhạc không?"
      },
      {
        "id": "p2-15-a",
        "speaker": "Speaker 2",
        "text": "(A) I saw the new action film.",
        "vietnamese": "(A) Tôi đã xem bộ phim hành động mới."
      },
      {
        "id": "p2-15-b",
        "speaker": "Speaker 2",
        "text": "(B) It just ended.",
        "vietnamese": "(B) Nó vừa kết thúc."
      },
      {
        "id": "p2-15-c",
        "speaker": "Speaker 2",
        "text": "(C) Just a couple of my friends.",
        "vietnamese": "(C) Chỉ là một vài người bạn của tôi."
      }
    ],
    "questions": [
      {
        "num": 15,
        "question": "Did you end up going to a movie or to the concert last night?",
        "vietnameseQuestion": "Tối qua bạn có đi xem phim hay đi xem hòa nhạc không?",
        "options": [
          {
            "key": "A",
            "text": "I saw the new action film.",
            "vietnamese": "Tôi đã xem bộ phim hành động mới."
          },
          {
            "key": "B",
            "text": "It just ended.",
            "vietnamese": "Nó vừa kết thúc."
          },
          {
            "key": "C",
            "text": "Just a couple of my friends.",
            "vietnamese": "Chỉ là một vài người bạn của tôi."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là (A): \"I saw the new action film.\" (Tôi đã xem bộ phim hành động mới.) là câu phản hồi hợp lý nhất cho câu \"Did you end up going to a movie or to the concert last night?\"."
      }
    ],
    "vocabulary": [
      {
        "word": "concert",
        "meaning": "buổi hòa nhạc",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-16",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 16",
    "title": "Part 2 - Câu 16: Chúng ta sẽ đi xe buýt của công ty đến trung tâm hội nghị.",
    "audioSrc": "/audio/test1_2023.mp3",
    "startTime": 465.1,
    "endTime": 483.83,
    "transcript": [
      {
        "id": "p2-16-q",
        "speaker": "Speaker 1",
        "text": "We'll take the company bus to the conference center.",
        "vietnamese": "Chúng ta sẽ đi xe buýt của công ty đến trung tâm hội nghị."
      },
      {
        "id": "p2-16-a",
        "speaker": "Speaker 2",
        "text": "(A) I'm sure it's not.",
        "vietnamese": "(A) Tôi chắc chắn là không."
      },
      {
        "id": "p2-16-b",
        "speaker": "Speaker 2",
        "text": "(B) Maybe we did.",
        "vietnamese": "(B) Có lẽ chúng tôi đã làm vậy."
      },
      {
        "id": "p2-16-c",
        "speaker": "Speaker 2",
        "text": "(C) That's a good plan.",
        "vietnamese": "(C) Đó là một kế hoạch tốt."
      }
    ],
    "questions": [
      {
        "num": 16,
        "question": "We'll take the company bus to the conference center.",
        "vietnameseQuestion": "Chúng ta sẽ đi xe buýt của công ty đến trung tâm hội nghị.",
        "options": [
          {
            "key": "A",
            "text": "I'm sure it's not.",
            "vietnamese": "Tôi chắc chắn là không."
          },
          {
            "key": "B",
            "text": "Maybe we did.",
            "vietnamese": "Có lẽ chúng tôi đã làm vậy."
          },
          {
            "key": "C",
            "text": "That's a good plan.",
            "vietnamese": "Đó là một kế hoạch tốt."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"That's a good plan.\" (Đó là một kế hoạch tốt.) là câu phản hồi hợp lý nhất cho câu \"We'll take the company bus to the conference center.\"."
      }
    ],
    "vocabulary": [
      {
        "word": "conference",
        "meaning": "hội nghị chuyên đề",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-17",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 17",
    "title": "Part 2 - Câu 17: Chúng ta nên đưa gì vào phần giới thiệu của báo cáo?",
    "audioSrc": "/audio/test1_2023.mp3",
    "startTime": 483.83,
    "endTime": 503.54,
    "transcript": [
      {
        "id": "p2-17-q",
        "speaker": "Speaker 1",
        "text": "What should we put in the introduction to the report?",
        "vietnamese": "Chúng ta nên đưa gì vào phần giới thiệu của báo cáo?"
      },
      {
        "id": "p2-17-a",
        "speaker": "Speaker 2",
        "text": "(A) After the summary.",
        "vietnamese": "(A) Sau phần tóm tắt."
      },
      {
        "id": "p2-17-b",
        "speaker": "Speaker 2",
        "text": "(B) The research highlights.",
        "vietnamese": "(B) Các nghiên cứu nổi bật."
      },
      {
        "id": "p2-17-c",
        "speaker": "Speaker 2",
        "text": "(C) I met him yesterday.",
        "vietnamese": "(C) Tôi đã gặp anh ấy ngày hôm qua."
      }
    ],
    "questions": [
      {
        "num": 17,
        "question": "What should we put in the introduction to the report?",
        "vietnameseQuestion": "Chúng ta nên đưa gì vào phần giới thiệu của báo cáo?",
        "options": [
          {
            "key": "A",
            "text": "After the summary.",
            "vietnamese": "Sau phần tóm tắt."
          },
          {
            "key": "B",
            "text": "The research highlights.",
            "vietnamese": "Các nghiên cứu nổi bật."
          },
          {
            "key": "C",
            "text": "I met him yesterday.",
            "vietnamese": "Tôi đã gặp anh ấy ngày hôm qua."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"The research highlights.\" (Các nghiên cứu nổi bật.) là câu phản hồi hợp lý nhất cho câu \"What should we put in the introduction to the report?\"."
      }
    ],
    "vocabulary": [
      {
        "word": "introduction",
        "meaning": "lời giới thiệu, phần mở đầu",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-18",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 18",
    "title": "Part 2 - Câu 18: Chúng ta nên thiết kế một logo mới.",
    "audioSrc": "/audio/test1_2023.mp3",
    "startTime": 503.54,
    "endTime": 524.24,
    "transcript": [
      {
        "id": "p2-18-q",
        "speaker": "Speaker 1",
        "text": "We should have a new logo designed.",
        "vietnamese": "Chúng ta nên thiết kế một logo mới."
      },
      {
        "id": "p2-18-a",
        "speaker": "Speaker 2",
        "text": "(A) There are about 5 miles from here.",
        "vietnamese": "(A) Có khoảng 5 dặm từ đây."
      },
      {
        "id": "p2-18-b",
        "speaker": "Speaker 2",
        "text": "(B) I know a good graphic artist.",
        "vietnamese": "(B) Tôi biết một nghệ sĩ đồ họa giỏi."
      },
      {
        "id": "p2-18-c",
        "speaker": "Speaker 2",
        "text": "(C) An order for some new calendars.",
        "vietnamese": "(C) Một đơn đặt hàng cho một số lịch mới."
      }
    ],
    "questions": [
      {
        "num": 18,
        "question": "We should have a new logo designed.",
        "vietnameseQuestion": "Chúng ta nên thiết kế một logo mới.",
        "options": [
          {
            "key": "A",
            "text": "There are about 5 miles from here.",
            "vietnamese": "Có khoảng 5 dặm từ đây."
          },
          {
            "key": "B",
            "text": "I know a good graphic artist.",
            "vietnamese": "Tôi biết một nghệ sĩ đồ họa giỏi."
          },
          {
            "key": "C",
            "text": "An order for some new calendars.",
            "vietnamese": "Một đơn đặt hàng cho một số lịch mới."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"I know a good graphic artist.\" (Tôi biết một nghệ sĩ đồ họa giỏi.) là câu phản hồi hợp lý nhất cho câu \"We should have a new logo designed.\"."
      }
    ],
    "vocabulary": [
      {
        "word": "order",
        "meaning": "gọi món, đặt hàng",
        "partOfSpeech": "v"
      }
    ]
  },
  {
    "id": "part2-19",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 19",
    "title": "Part 2 - Câu 19: Bạn đã chọn được địa điểm cho trụ sở mới chưa?",
    "audioSrc": "/audio/test1_2023.mp3",
    "startTime": 524.24,
    "endTime": 543.88,
    "transcript": [
      {
        "id": "p2-19-q",
        "speaker": "Speaker 1",
        "text": "Did you select a site for the new headquarters?",
        "vietnamese": "Bạn đã chọn được địa điểm cho trụ sở mới chưa?"
      },
      {
        "id": "p2-19-a",
        "speaker": "Speaker 2",
        "text": "(A) Is that so?",
        "vietnamese": "(A) Có phải vậy không?"
      },
      {
        "id": "p2-19-b",
        "speaker": "Speaker 2",
        "text": "(B) No one can attend the training.",
        "vietnamese": "(B) Không ai có thể tham gia khóa đào tạo."
      },
      {
        "id": "p2-19-c",
        "speaker": "Speaker 2",
        "text": "(C) Yes. In the center of town.",
        "vietnamese": "(C) Đúng. Ở trung tâm thị trấn."
      }
    ],
    "questions": [
      {
        "num": 19,
        "question": "Did you select a site for the new headquarters?",
        "vietnameseQuestion": "Bạn đã chọn được địa điểm cho trụ sở mới chưa?",
        "options": [
          {
            "key": "A",
            "text": "Is that so?",
            "vietnamese": "Có phải vậy không?"
          },
          {
            "key": "B",
            "text": "No one can attend the training.",
            "vietnamese": "Không ai có thể tham gia khóa đào tạo."
          },
          {
            "key": "C",
            "text": "Yes. In the center of town.",
            "vietnamese": "Đúng. Ở trung tâm thị trấn."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"Yes. In the center of town.\" (Đúng. Ở trung tâm thị trấn.) là câu phản hồi hợp lý nhất cho câu \"Did you select a site for the new headquarters?\"."
      }
    ],
    "vocabulary": [
      {
        "word": "headquarters",
        "meaning": "trụ sở chính",
        "partOfSpeech": "n"
      },
      {
        "word": "attend",
        "meaning": "tham dự",
        "partOfSpeech": "v"
      },
      {
        "word": "training",
        "meaning": "khóa đào tạo, huấn luyện",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-20",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 20",
    "title": "Part 2 - Câu 20: Ai sẽ hủy cuộc họp?",
    "audioSrc": "/audio/test1_2023.mp3",
    "startTime": 543.88,
    "endTime": 569.03,
    "transcript": [
      {
        "id": "p2-20-q",
        "speaker": "Speaker 1",
        "text": "Who's going to cancel the meeting?",
        "vietnamese": "Ai sẽ hủy cuộc họp?"
      },
      {
        "id": "p2-20-a",
        "speaker": "Speaker 2",
        "text": "(A) Martin is the most senior team member.",
        "vietnamese": "(A) Martin là thành viên cao cấp nhất trong nhóm."
      },
      {
        "id": "p2-20-b",
        "speaker": "Speaker 2",
        "text": "(B) Josie's chair is broken.",
        "vietnamese": "(B) Ghế của Josie bị hỏng."
      },
      {
        "id": "p2-20-c",
        "speaker": "Speaker 2",
        "text": "(C) The client signed the contract.",
        "vietnamese": "(C) Khách hàng đã ký hợp đồng."
      }
    ],
    "questions": [
      {
        "num": 20,
        "question": "Who's going to cancel the meeting?",
        "vietnameseQuestion": "Ai sẽ hủy cuộc họp?",
        "options": [
          {
            "key": "A",
            "text": "Martin is the most senior team member.",
            "vietnamese": "Martin là thành viên cao cấp nhất trong nhóm."
          },
          {
            "key": "B",
            "text": "Josie's chair is broken.",
            "vietnamese": "Ghế của Josie bị hỏng."
          },
          {
            "key": "C",
            "text": "The client signed the contract.",
            "vietnamese": "Khách hàng đã ký hợp đồng."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là (A): \"Martin is the most senior team member.\" (Martin là thành viên cao cấp nhất trong nhóm.) là câu phản hồi hợp lý nhất cho câu \"Who's going to cancel the meeting?\"."
      }
    ],
    "vocabulary": [
      {
        "word": "cancel",
        "meaning": "hủy bỏ",
        "partOfSpeech": "n"
      },
      {
        "word": "client",
        "meaning": "khách hàng",
        "partOfSpeech": "n"
      },
      {
        "word": "contract",
        "meaning": "hợp đồng",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-21",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 21",
    "title": "Part 2 - Câu 21: Chuyến công tác của bạn thế nào?",
    "audioSrc": "/audio/test1_2023.mp3",
    "startTime": 569.03,
    "endTime": 582.48,
    "transcript": [
      {
        "id": "p2-21-q",
        "speaker": "Speaker 1",
        "text": "How was your business trip?",
        "vietnamese": "Chuyến công tác của bạn thế nào?"
      },
      {
        "id": "p2-21-a",
        "speaker": "Speaker 2",
        "text": "(A) They found some just in time.",
        "vietnamese": "(A) Họ tìm thấy một số đúng lúc."
      },
      {
        "id": "p2-21-b",
        "speaker": "Speaker 2",
        "text": "(B) I like that idea.",
        "vietnamese": "(B) Tôi thích ý tưởng đó."
      },
      {
        "id": "p2-21-c",
        "speaker": "Speaker 2",
        "text": "(C) It was very productive.",
        "vietnamese": "(C) Nó rất hiệu quả."
      }
    ],
    "questions": [
      {
        "num": 21,
        "question": "How was your business trip?",
        "vietnameseQuestion": "Chuyến công tác của bạn thế nào?",
        "options": [
          {
            "key": "A",
            "text": "They found some just in time.",
            "vietnamese": "Họ tìm thấy một số đúng lúc."
          },
          {
            "key": "B",
            "text": "I like that idea.",
            "vietnamese": "Tôi thích ý tưởng đó."
          },
          {
            "key": "C",
            "text": "It was very productive.",
            "vietnamese": "Nó rất hiệu quả."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"It was very productive.\" (Nó rất hiệu quả.) là câu phản hồi hợp lý nhất cho câu \"How was your business trip?\"."
      }
    ],
    "vocabulary": [
      {
        "word": "found",
        "meaning": "thành lập, sáng lập",
        "partOfSpeech": "v"
      }
    ]
  },
  {
    "id": "part2-22",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 22",
    "title": "Part 2 - Câu 22: Tại sao Cheyuan thuê một trợ lý?",
    "audioSrc": "/audio/test1_2023.mp3",
    "startTime": 582.48,
    "endTime": 604.15,
    "transcript": [
      {
        "id": "p2-22-q",
        "speaker": "Speaker 1",
        "text": "Why did Cheyuan hire an assistant?",
        "vietnamese": "Tại sao Cheyuan thuê một trợ lý?"
      },
      {
        "id": "p2-22-a",
        "speaker": "Speaker 2",
        "text": "(A) She was submit an estimate in September.",
        "vietnamese": "(A) Cô ấy đã gửi một ước tính vào tháng Chín."
      },
      {
        "id": "p2-22-b",
        "speaker": "Speaker 2",
        "text": "(B) Anyway, they thought I was late.",
        "vietnamese": "(B) Dù sao thì họ cũng nghĩ tôi đến muộn."
      },
      {
        "id": "p2-22-c",
        "speaker": "Speaker 2",
        "text": "(C) Haven't you noticed how busy she is?",
        "vietnamese": "(C) Bạn không nhận thấy cô ấy bận rộn thế nào sao?"
      }
    ],
    "questions": [
      {
        "num": 22,
        "question": "Why did Cheyuan hire an assistant?",
        "vietnameseQuestion": "Tại sao Cheyuan thuê một trợ lý?",
        "options": [
          {
            "key": "A",
            "text": "She was submit an estimate in September.",
            "vietnamese": "Cô ấy đã gửi một ước tính vào tháng Chín."
          },
          {
            "key": "B",
            "text": "Anyway, they thought I was late.",
            "vietnamese": "Dù sao thì họ cũng nghĩ tôi đến muộn."
          },
          {
            "key": "C",
            "text": "Haven't you noticed how busy she is?",
            "vietnamese": "Bạn không nhận thấy cô ấy bận rộn thế nào sao?"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"Haven't you noticed how busy she is?\" (Bạn không nhận thấy cô ấy bận rộn thế nào sao?) là câu phản hồi hợp lý nhất cho câu \"Why did Cheyuan hire an assistant?\"."
      }
    ],
    "vocabulary": [
      {
        "word": "hire",
        "meaning": "tuyển dụng, thuê",
        "partOfSpeech": "v"
      },
      {
        "word": "assistant",
        "meaning": "người trợ lý",
        "partOfSpeech": "n"
      },
      {
        "word": "submit",
        "meaning": "nộp, trình duyệt",
        "partOfSpeech": "v"
      }
    ]
  },
  {
    "id": "part2-23",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 23",
    "title": "Part 2 - Câu 23: Bạn có phiền cho tôi xem không gian văn phòng mới không?",
    "audioSrc": "/audio/test1_2023.mp3",
    "startTime": 604.15,
    "endTime": 625.92,
    "transcript": [
      {
        "id": "p2-23-q",
        "speaker": "Speaker 1",
        "text": "Would you mind showing me the new office space?",
        "vietnamese": "Bạn có phiền cho tôi xem không gian văn phòng mới không?"
      },
      {
        "id": "p2-23-a",
        "speaker": "Speaker 2",
        "text": "(A) I think that's correct.",
        "vietnamese": "(A) Tôi nghĩ điều đó đúng."
      },
      {
        "id": "p2-23-b",
        "speaker": "Speaker 2",
        "text": "(B) Sure. It won't take long.",
        "vietnamese": "(B) Chắc chắn. Nó sẽ không mất nhiều thời gian."
      },
      {
        "id": "p2-23-c",
        "speaker": "Speaker 2",
        "text": "(C) Everyone available participated.",
        "vietnamese": "(C) Mọi người có sẵn đều tham gia."
      }
    ],
    "questions": [
      {
        "num": 23,
        "question": "Would you mind showing me the new office space?",
        "vietnameseQuestion": "Bạn có phiền cho tôi xem không gian văn phòng mới không?",
        "options": [
          {
            "key": "A",
            "text": "I think that's correct.",
            "vietnamese": "Tôi nghĩ điều đó đúng."
          },
          {
            "key": "B",
            "text": "Sure. It won't take long.",
            "vietnamese": "Chắc chắn. Nó sẽ không mất nhiều thời gian."
          },
          {
            "key": "C",
            "text": "Everyone available participated.",
            "vietnamese": "Mọi người có sẵn đều tham gia."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"Sure. It won't take long.\" (Chắc chắn. Nó sẽ không mất nhiều thời gian.) là câu phản hồi hợp lý nhất cho câu \"Would you mind showing me the new office space?\"."
      }
    ],
    "vocabulary": [
      {
        "word": "available",
        "meaning": "rảnh rỗi, có sẵn",
        "partOfSpeech": "adj"
      }
    ]
  },
  {
    "id": "part2-24",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 24",
    "title": "Part 2 - Câu 24: Chúng tôi đang cố gắng quyết định nên gọi món từ đâu cho ...",
    "audioSrc": "/audio/test1_2023.mp3",
    "startTime": 625.92,
    "endTime": 648.69,
    "transcript": [
      {
        "id": "p2-24-q",
        "speaker": "Speaker 1",
        "text": "We're trying to decide where to order from for lunch.",
        "vietnamese": "Chúng tôi đang cố gắng quyết định nên gọi món từ đâu cho bữa trưa."
      },
      {
        "id": "p2-24-a",
        "speaker": "Speaker 2",
        "text": "(A) I loved those sandwiches from Genos last week.",
        "vietnamese": "(A) Tôi yêu những chiếc bánh sandwich từ Genos tuần trước."
      },
      {
        "id": "p2-24-b",
        "speaker": "Speaker 2",
        "text": "(B) My brother's friend was there.",
        "vietnamese": "(B) Bạn của anh trai tôi đã ở đó."
      },
      {
        "id": "p2-24-c",
        "speaker": "Speaker 2",
        "text": "(C) I remember that song very well.",
        "vietnamese": "(C) Tôi nhớ bài hát đó rất rõ."
      }
    ],
    "questions": [
      {
        "num": 24,
        "question": "We're trying to decide where to order from for lunch.",
        "vietnameseQuestion": "Chúng tôi đang cố gắng quyết định nên gọi món từ đâu cho bữa trưa.",
        "options": [
          {
            "key": "A",
            "text": "I loved those sandwiches from Genos last week.",
            "vietnamese": "Tôi yêu những chiếc bánh sandwich từ Genos tuần trước."
          },
          {
            "key": "B",
            "text": "My brother's friend was there.",
            "vietnamese": "Bạn của anh trai tôi đã ở đó."
          },
          {
            "key": "C",
            "text": "I remember that song very well.",
            "vietnamese": "Tôi nhớ bài hát đó rất rõ."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là (A): \"I loved those sandwiches from Genos last week.\" (Tôi yêu những chiếc bánh sandwich từ Genos tuần trước.) là câu phản hồi hợp lý nhất cho câu \"We're trying to decide where to order from for lunch.\"."
      }
    ],
    "vocabulary": [
      {
        "word": "decide",
        "meaning": "quyết định",
        "partOfSpeech": "v"
      },
      {
        "word": "order",
        "meaning": "gọi món, đặt hàng",
        "partOfSpeech": "v"
      }
    ]
  },
  {
    "id": "part2-25",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 25",
    "title": "Part 2 - Câu 25: Khi nào bạn dự định kết thúc chiến dịch quảng cáo?",
    "audioSrc": "/audio/test1_2023.mp3",
    "startTime": 648.69,
    "endTime": 670.26,
    "transcript": [
      {
        "id": "p2-25-q",
        "speaker": "Speaker 1",
        "text": "When do you plan to finish the advertising campaign?",
        "vietnamese": "Khi nào bạn dự định kết thúc chiến dịch quảng cáo?"
      },
      {
        "id": "p2-25-a",
        "speaker": "Speaker 2",
        "text": "(A) Next to arena's office.",
        "vietnamese": "(A) Bên cạnh văn phòng của Arena."
      },
      {
        "id": "p2-25-b",
        "speaker": "Speaker 2",
        "text": "(B) By Monday morning at the latest.",
        "vietnamese": "(B) Chậm nhất là vào sáng thứ Hai."
      },
      {
        "id": "p2-25-c",
        "speaker": "Speaker 2",
        "text": "(C) Because it didn't make sense to me.",
        "vietnamese": "(C) Bởi vì nó không có ý nghĩa với tôi."
      }
    ],
    "questions": [
      {
        "num": 25,
        "question": "When do you plan to finish the advertising campaign?",
        "vietnameseQuestion": "Khi nào bạn dự định kết thúc chiến dịch quảng cáo?",
        "options": [
          {
            "key": "A",
            "text": "Next to arena's office.",
            "vietnamese": "Bên cạnh văn phòng của Arena."
          },
          {
            "key": "B",
            "text": "By Monday morning at the latest.",
            "vietnamese": "Chậm nhất là vào sáng thứ Hai."
          },
          {
            "key": "C",
            "text": "Because it didn't make sense to me.",
            "vietnamese": "Bởi vì nó không có ý nghĩa với tôi."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"By Monday morning at the latest.\" (Chậm nhất là vào sáng thứ Hai.) là câu phản hồi hợp lý nhất cho câu \"When do you plan to finish the advertising campaign?\"."
      }
    ],
    "vocabulary": [
      {
        "word": "advertising",
        "meaning": "hoạt động quảng cáo",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-26",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 26",
    "title": "Part 2 - Câu 26: Diễn giả khách mời sẽ tham gia cùng chúng ta từ đâu?",
    "audioSrc": "/audio/test1_2023.mp3",
    "startTime": 670.26,
    "endTime": 691.0,
    "transcript": [
      {
        "id": "p2-26-q",
        "speaker": "Speaker 1",
        "text": "Where will the guest speaker be joining us from?",
        "vietnamese": "Diễn giả khách mời sẽ tham gia cùng chúng ta từ đâu?"
      },
      {
        "id": "p2-26-a",
        "speaker": "Speaker 2",
        "text": "(A) Nobody shared the details with me.",
        "vietnamese": "(A) Không ai chia sẻ chi tiết với tôi."
      },
      {
        "id": "p2-26-b",
        "speaker": "Speaker 2",
        "text": "(B) He wasn't gone too long.",
        "vietnamese": "(B) Anh ấy không đi quá lâu."
      },
      {
        "id": "p2-26-c",
        "speaker": "Speaker 2",
        "text": "(C) First thing in the morning, I believe.",
        "vietnamese": "(C) Điều đầu tiên vào buổi sáng, tôi tin là vậy."
      }
    ],
    "questions": [
      {
        "num": 26,
        "question": "Where will the guest speaker be joining us from?",
        "vietnameseQuestion": "Diễn giả khách mời sẽ tham gia cùng chúng ta từ đâu?",
        "options": [
          {
            "key": "A",
            "text": "Nobody shared the details with me.",
            "vietnamese": "Không ai chia sẻ chi tiết với tôi."
          },
          {
            "key": "B",
            "text": "He wasn't gone too long.",
            "vietnamese": "Anh ấy không đi quá lâu."
          },
          {
            "key": "C",
            "text": "First thing in the morning, I believe.",
            "vietnamese": "Điều đầu tiên vào buổi sáng, tôi tin là vậy."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là (A): \"Nobody shared the details with me.\" (Không ai chia sẻ chi tiết với tôi.) là câu phản hồi hợp lý nhất cho câu \"Where will the guest speaker be joining us from?\"."
      }
    ],
    "vocabulary": [
      {
        "word": "guest",
        "meaning": "khách mời",
        "partOfSpeech": "n/v"
      },
      {
        "word": "joining",
        "meaning": "tham gia",
        "partOfSpeech": "n/v"
      }
    ]
  },
  {
    "id": "part2-27",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 27",
    "title": "Part 2 - Câu 27: Bạn có muốn con trai tôi hướng dẫn việc đào tạo không?",
    "audioSrc": "/audio/test1_2023.mp3",
    "startTime": 691.0,
    "endTime": 712.7,
    "transcript": [
      {
        "id": "p2-27-q",
        "speaker": "Speaker 1",
        "text": "Wouldn't you prefer that me son lead the training?",
        "vietnamese": "Bạn có muốn con trai tôi hướng dẫn việc đào tạo không?"
      },
      {
        "id": "p2-27-a",
        "speaker": "Speaker 2",
        "text": "(A) No. I filed it three months ago.",
        "vietnamese": "(A) Không. Tôi đã nộp nó ba tháng trước."
      },
      {
        "id": "p2-27-b",
        "speaker": "Speaker 2",
        "text": "(B) I just gave them to the director.",
        "vietnamese": "(B) Tôi vừa đưa chúng cho giám đốc."
      },
      {
        "id": "p2-27-c",
        "speaker": "Speaker 2",
        "text": "(C) I don't think she works here anymore.",
        "vietnamese": "(C) Tôi không nghĩ cô ấy làm việc ở đây nữa."
      }
    ],
    "questions": [
      {
        "num": 27,
        "question": "Wouldn't you prefer that me son lead the training?",
        "vietnameseQuestion": "Bạn có muốn con trai tôi hướng dẫn việc đào tạo không?",
        "options": [
          {
            "key": "A",
            "text": "No. I filed it three months ago.",
            "vietnamese": "Không. Tôi đã nộp nó ba tháng trước."
          },
          {
            "key": "B",
            "text": "I just gave them to the director.",
            "vietnamese": "Tôi vừa đưa chúng cho giám đốc."
          },
          {
            "key": "C",
            "text": "I don't think she works here anymore.",
            "vietnamese": "Tôi không nghĩ cô ấy làm việc ở đây nữa."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"I don't think she works here anymore.\" (Tôi không nghĩ cô ấy làm việc ở đây nữa.) là câu phản hồi hợp lý nhất cho câu \"Wouldn't you prefer that me son lead the training?\"."
      }
    ],
    "vocabulary": [
      {
        "word": "prefer",
        "meaning": "thích hơn",
        "partOfSpeech": "v"
      },
      {
        "word": "lead",
        "meaning": "dẫn dắt, chủ trì",
        "partOfSpeech": "v"
      },
      {
        "word": "training",
        "meaning": "khóa đào tạo, huấn luyện",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-28",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 28",
    "title": "Part 2 - Câu 28: Chúng ta sẽ nhận được một số phản hồi về thiết kế bìa sác...",
    "audioSrc": "/audio/test1_2023.mp3",
    "startTime": 712.7,
    "endTime": 734.38,
    "transcript": [
      {
        "id": "p2-28-q",
        "speaker": "Speaker 1",
        "text": "We should get some feedback on this book cover design.",
        "vietnamese": "Chúng ta sẽ nhận được một số phản hồi về thiết kế bìa sách này."
      },
      {
        "id": "p2-28-a",
        "speaker": "Speaker 2",
        "text": "(A) I'm at has a visual arts degree.",
        "vietnamese": "(A) Tôi đang có bằng nghệ thuật thị giác."
      },
      {
        "id": "p2-28-b",
        "speaker": "Speaker 2",
        "text": "(B) They probably skipped a week.",
        "vietnamese": "(B) Có lẽ họ đã bỏ qua một tuần."
      },
      {
        "id": "p2-28-c",
        "speaker": "Speaker 2",
        "text": "(C) It was really hard to hear.",
        "vietnamese": "(C) Nó thực sự rất khó nghe."
      }
    ],
    "questions": [
      {
        "num": 28,
        "question": "We should get some feedback on this book cover design.",
        "vietnameseQuestion": "Chúng ta sẽ nhận được một số phản hồi về thiết kế bìa sách này.",
        "options": [
          {
            "key": "A",
            "text": "I'm at has a visual arts degree.",
            "vietnamese": "Tôi đang có bằng nghệ thuật thị giác."
          },
          {
            "key": "B",
            "text": "They probably skipped a week.",
            "vietnamese": "Có lẽ họ đã bỏ qua một tuần."
          },
          {
            "key": "C",
            "text": "It was really hard to hear.",
            "vietnamese": "Nó thực sự rất khó nghe."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là (A): \"I'm at has a visual arts degree.\" (Tôi đang có bằng nghệ thuật thị giác.) là câu phản hồi hợp lý nhất cho câu \"We should get some feedback on this book cover design.\"."
      }
    ],
    "vocabulary": [
      {
        "word": "feedback",
        "meaning": "ý kiến phản hồi",
        "partOfSpeech": "n"
      },
      {
        "word": "book",
        "meaning": "đặt trước (phòng, vé)",
        "partOfSpeech": "v"
      },
      {
        "word": "cover",
        "meaning": "đưa tin (báo chí)",
        "partOfSpeech": "v"
      }
    ]
  },
  {
    "id": "part2-29",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 29",
    "title": "Part 2 - Câu 29: Bạn có thể trì hoãn cuộc họp được không?",
    "audioSrc": "/audio/test1_2023.mp3",
    "startTime": 734.38,
    "endTime": 756.18,
    "transcript": [
      {
        "id": "p2-29-q",
        "speaker": "Speaker 1",
        "text": "Would you be able to delay the meeting?",
        "vietnamese": "Bạn có thể trì hoãn cuộc họp được không?"
      },
      {
        "id": "p2-29-a",
        "speaker": "Speaker 2",
        "text": "(A) How much storage does it have?",
        "vietnamese": "(A) Nó có bao nhiêu dung lượng lưu trữ?"
      },
      {
        "id": "p2-29-b",
        "speaker": "Speaker 2",
        "text": "(B) Most people seem to enjoy it.",
        "vietnamese": "(B) Hầu hết mọi người dường như thích nó."
      },
      {
        "id": "p2-29-c",
        "speaker": "Speaker 2",
        "text": "(C) Tatiana needs to leave for the airport in an hour.",
        "vietnamese": "(C) Tatiana cần phải ra sân bay trong một giờ nữa."
      }
    ],
    "questions": [
      {
        "num": 29,
        "question": "Would you be able to delay the meeting?",
        "vietnameseQuestion": "Bạn có thể trì hoãn cuộc họp được không?",
        "options": [
          {
            "key": "A",
            "text": "How much storage does it have?",
            "vietnamese": "Nó có bao nhiêu dung lượng lưu trữ?"
          },
          {
            "key": "B",
            "text": "Most people seem to enjoy it.",
            "vietnamese": "Hầu hết mọi người dường như thích nó."
          },
          {
            "key": "C",
            "text": "Tatiana needs to leave for the airport in an hour.",
            "vietnamese": "Tatiana cần phải ra sân bay trong một giờ nữa."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"Tatiana needs to leave for the airport in an hour.\" (Tatiana cần phải ra sân bay trong một giờ nữa.) là câu phản hồi hợp lý nhất cho câu \"Would you be able to delay the meeting?\"."
      }
    ],
    "vocabulary": [
      {
        "word": "delay",
        "meaning": "sự chậm trễ, hoãn chuyến",
        "partOfSpeech": "n"
      },
      {
        "word": "leave",
        "meaning": "rời đi, nghỉ việc",
        "partOfSpeech": "v"
      },
      {
        "word": "airport",
        "meaning": "sân bay",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-30",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 30",
    "title": "Part 2 - Câu 30: Bạn sẽ thuê ô tô hay đi tàu khi đến thăm?",
    "audioSrc": "/audio/test1_2023.mp3",
    "startTime": 756.18,
    "endTime": 776.91,
    "transcript": [
      {
        "id": "p2-30-q",
        "speaker": "Speaker 1",
        "text": "Will you rent a car or take the train while you're visiting?",
        "vietnamese": "Bạn sẽ thuê ô tô hay đi tàu khi đến thăm?"
      },
      {
        "id": "p2-30-a",
        "speaker": "Speaker 2",
        "text": "(A) They found some near the coast.",
        "vietnamese": "(A) Họ tìm thấy một số ở gần bờ biển."
      },
      {
        "id": "p2-30-b",
        "speaker": "Speaker 2",
        "text": "(B) I don't like driving in the city.",
        "vietnamese": "(B) Tôi không thích lái xe trong thành phố."
      },
      {
        "id": "p2-30-c",
        "speaker": "Speaker 2",
        "text": "(C) Mostly some old desks.",
        "vietnamese": "(C) Chủ yếu là một số bàn cũ."
      }
    ],
    "questions": [
      {
        "num": 30,
        "question": "Will you rent a car or take the train while you're visiting?",
        "vietnameseQuestion": "Bạn sẽ thuê ô tô hay đi tàu khi đến thăm?",
        "options": [
          {
            "key": "A",
            "text": "They found some near the coast.",
            "vietnamese": "Họ tìm thấy một số ở gần bờ biển."
          },
          {
            "key": "B",
            "text": "I don't like driving in the city.",
            "vietnamese": "Tôi không thích lái xe trong thành phố."
          },
          {
            "key": "C",
            "text": "Mostly some old desks.",
            "vietnamese": "Chủ yếu là một số bàn cũ."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"I don't like driving in the city.\" (Tôi không thích lái xe trong thành phố.) là câu phản hồi hợp lý nhất cho câu \"Will you rent a car or take the train while you're visiting?\"."
      }
    ],
    "vocabulary": [
      {
        "word": "train",
        "meaning": "đào tạo, huấn luyện",
        "partOfSpeech": "v"
      },
      {
        "word": "found",
        "meaning": "thành lập, sáng lập",
        "partOfSpeech": "v"
      },
      {
        "word": "mostly",
        "meaning": "chủ yếu, phần lớn",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-31",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 31",
    "title": "Part 2 - Câu 31: 7. 30h đêm thì khá nhẹ nhàng cho một cuộc họp phải không?",
    "audioSrc": "/audio/test1_2023.mp3",
    "startTime": 776.91,
    "endTime": 799.58,
    "transcript": [
      {
        "id": "p2-31-q",
        "speaker": "Speaker 1",
        "text": "7. 30 at night is rather light for a meeting, isn't it?",
        "vietnamese": "7. 30h đêm thì khá nhẹ nhàng cho một cuộc họp phải không?"
      },
      {
        "id": "p2-31-a",
        "speaker": "Speaker 2",
        "text": "(A) If people are in the city, if people agree on it, I will.",
        "vietnamese": "(A) Nếu mọi người ở thành phố, nếu mọi người đồng ý thì tôi sẽ làm."
      },
      {
        "id": "p2-31-b",
        "speaker": "Speaker 2",
        "text": "(B) I promise I'll keep it short.",
        "vietnamese": "(B) Tôi hứa tôi sẽ nói ngắn gọn."
      },
      {
        "id": "p2-31-c",
        "speaker": "Speaker 2",
        "text": "(C) I am not sure who he meant.",
        "vietnamese": "(C) Tôi không chắc anh ấy muốn nói đến ai."
      }
    ],
    "questions": [
      {
        "num": 31,
        "question": "7. 30 at night is rather light for a meeting, isn't it?",
        "vietnameseQuestion": "7. 30h đêm thì khá nhẹ nhàng cho một cuộc họp phải không?",
        "options": [
          {
            "key": "A",
            "text": "If people are in the city, if people agree on it, I will.",
            "vietnamese": "Nếu mọi người ở thành phố, nếu mọi người đồng ý thì tôi sẽ làm."
          },
          {
            "key": "B",
            "text": "I promise I'll keep it short.",
            "vietnamese": "Tôi hứa tôi sẽ nói ngắn gọn."
          },
          {
            "key": "C",
            "text": "I am not sure who he meant.",
            "vietnamese": "Tôi không chắc anh ấy muốn nói đến ai."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"I promise I'll keep it short.\" (Tôi hứa tôi sẽ nói ngắn gọn.) là câu phản hồi hợp lý nhất cho câu \"7. 30 at night is rather light for a meeting, isn't it?\"."
      }
    ],
    "vocabulary": [
      {
        "word": "light",
        "meaning": "chiếu sáng, thắp sáng",
        "partOfSpeech": "n"
      },
      {
        "word": "agree",
        "meaning": "đồng ý, tán thành",
        "partOfSpeech": "v"
      },
      {
        "word": "keep",
        "meaning": "giữ lại",
        "partOfSpeech": "v"
      }
    ]
  },
  {
    "id": "part3-32-34",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 32 - 34",
    "title": "Part 3 - Câu 32 - 34: Tại sao người phụ nữ lại gọi",
    "audioSrc": "/audio/test1_2023.mp3",
    "startTime": 834.03,
    "endTime": 904.9,
    "transcript": [
      {
        "id": "p3-32-1",
        "speaker": "Woman",
        "text": "Hello. I'm calling about my tickets for tonight's baseball game.",
        "vietnamese": "Xin chào. Tôi đang gọi điện để hỏi về vé xem trận bóng chày tối nay."
      },
      {
        "id": "p3-32-2",
        "speaker": "Man",
        "text": "I'm hoping to upgrade my seats so we can sit closer to the field.",
        "vietnamese": "Tôi đang hy vọng nâng cấp chỗ ngồi của mình để chúng tôi có thể ngồi gần sân hơn."
      },
      {
        "id": "p3-32-3",
        "speaker": "Woman",
        "text": "The reservation is under my name.",
        "vietnamese": "Việc đặt chỗ dưới tên tôi."
      },
      {
        "id": "p3-32-4",
        "speaker": "Man",
        "text": "Joanna Reynolds.",
        "vietnamese": "Joanna Reynold."
      },
      {
        "id": "p3-32-5",
        "speaker": "Woman",
        "text": "Let me take a look.",
        "vietnamese": "Hãy để tôi xem xét."
      },
      {
        "id": "p3-32-6",
        "speaker": "Man",
        "text": "Hmmm. I'm sorry, Ms. Reynolds, but our system seems to be down at the moment.",
        "vietnamese": "Ừm. Tôi xin lỗi, cô Reynolds, nhưng hệ thống của chúng tôi hiện tại có vẻ không hoạt động."
      },
      {
        "id": "p3-32-7",
        "speaker": "Woman",
        "text": "I can do the exchange manually, but it'll take a little longer.",
        "vietnamese": "Tôi có thể thực hiện trao đổi thủ công nhưng sẽ mất nhiều thời gian hơn một chút."
      },
      {
        "id": "p3-32-8",
        "speaker": "Man",
        "text": "No problem. I have time.",
        "vietnamese": "Không có gì. Tôi có thời gian."
      },
      {
        "id": "p3-32-9",
        "speaker": "Woman",
        "text": "Thanks. Oh, and just a reminder that better seats will cost more.",
        "vietnamese": "Cảm ơn. Ồ, và xin nhắc lại rằng chỗ ngồi tốt hơn sẽ có giá cao hơn."
      },
      {
        "id": "p3-32-10",
        "speaker": "Man",
        "text": "You'll need to pay about $15 more per seat.",
        "vietnamese": "Bạn sẽ phải trả thêm khoảng 15 USD cho mỗi chỗ ngồi."
      }
    ],
    "questions": [
      {
        "num": 32,
        "question": "Why is the woman calling?",
        "vietnameseQuestion": "Tại sao người phụ nữ lại gọi?",
        "options": [
          {
            "key": "A",
            "text": "To request a ticket change",
            "vietnamese": "Để yêu cầu đổi vé"
          },
          {
            "key": "B",
            "text": "To make a dinner reservation",
            "vietnamese": "Để đặt chỗ ăn tối"
          },
          {
            "key": "C",
            "text": "To order merchandise",
            "vietnamese": "Để đặt mua hàng hóa"
          },
          {
            "key": "D",
            "text": "To plan a vacation",
            "vietnamese": "Để lên kế hoạch cho một kỳ nghỉ"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là (A): \"To request a ticket change\" (Để yêu cầu đổi vé)."
      },
      {
        "num": 33,
        "question": "Why does the man apologize?",
        "vietnameseQuestion": "Tại sao người đàn ông lại xin lỗi?",
        "options": [
          {
            "key": "A",
            "text": "An event was canceled.",
            "vietnamese": "Một sự kiện đã bị hủy bỏ."
          },
          {
            "key": "B",
            "text": "A line is very long.",
            "vietnamese": "Một dòng rất dài."
          },
          {
            "key": "C",
            "text": "A payment option is unavailable.",
            "vietnamese": "Tùy chọn thanh toán không có sẵn."
          },
          {
            "key": "D",
            "text": "A computer program is not working.",
            "vietnamese": "Một chương trình máy tính không hoạt động."
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là (D): \"A computer program is not working.\" (Một chương trình máy tính không hoạt động.)."
      },
      {
        "num": 34,
        "question": "Whatdoesthemanremindthewoman about?",
        "vietnameseQuestion": "Người đàn ông nhắc nhở người phụ nữ về điều gì?",
        "options": [
          {
            "key": "A",
            "text": "Amealvoucher",
            "vietnamese": "Amealvoucher"
          },
          {
            "key": "B",
            "text": "Some free souvenirs",
            "vietnamese": "Một số quà lưu niệm miễn phí"
          },
          {
            "key": "C",
            "text": "An increase in price",
            "vietnamese": "Sự tăng giá"
          },
          {
            "key": "D",
            "text": "A refund policy",
            "vietnamese": "Chính sách hoàn tiền"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"An increase in price\" (Sự tăng giá)."
      }
    ],
    "vocabulary": [
      {
        "word": "reservation",
        "meaning": "sự đặt chỗ, đặt phòng trước",
        "partOfSpeech": "n"
      },
      {
        "word": "cost",
        "meaning": "trị giá, tốn chi phí",
        "partOfSpeech": "v"
      }
    ]
  },
  {
    "id": "part3-35-37",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 35 - 37",
    "title": "Part 3 - Câu 35 - 37: Sự kiện nào các diễn giả sẽ tham dự sau ngày hôm nay",
    "audioSrc": "/audio/test1_2023.mp3",
    "startTime": 904.9,
    "endTime": 975.64,
    "transcript": [
      {
        "id": "p3-35-1",
        "speaker": "Woman",
        "text": "Tilo, are you going to the company lunch later this morning at Sullivan B-stro?",
        "vietnamese": "Tilo, sáng nay bạn có tới công ty ăn trưa ở Sullivan B-stro không?"
      },
      {
        "id": "p3-35-2",
        "speaker": "Man",
        "text": "I'm not sure how to get there.",
        "vietnamese": "Tôi không chắc chắn làm thế nào để đến đó."
      },
      {
        "id": "p3-35-3",
        "speaker": "Woman",
        "text": "Well, the train stops right near it on Hanover Street, but you'd have to transfer a few times.",
        "vietnamese": "Chà, tàu dừng ngay gần đó trên Phố Hanover, nhưng bạn sẽ phải chuyển tàu vài lần."
      },
      {
        "id": "p3-35-4",
        "speaker": "Man",
        "text": "You know, I'm getting robbed with Farida, and she has a van.",
        "vietnamese": "Bạn biết đấy, tôi sắp bị cướp cùng với Farida, và cô ấy có một chiếc xe tải."
      },
      {
        "id": "p3-35-5",
        "speaker": "Woman",
        "text": "Oh, that would be convenient. Do you know where her desk is?",
        "vietnamese": "Ồ, điều đó sẽ thuận tiện. Bạn có biết bàn làm việc của cô ấy ở đâu không?"
      },
      {
        "id": "p3-35-6",
        "speaker": "Man",
        "text": "Yes, she has the cubicle closest to the stairs.",
        "vietnamese": "Vâng, cô ấy có căn phòng gần cầu thang nhất."
      }
    ],
    "questions": [
      {
        "num": 35,
        "question": "What event will the speakers be attending later today?",
        "vietnameseQuestion": "Sự kiện nào các diễn giả sẽ tham dự sau ngày hôm nay?",
        "options": [
          {
            "key": "A",
            "text": "A job fair",
            "vietnamese": "Một hội chợ việc làm"
          },
          {
            "key": "B",
            "text": "A film screening",
            "vietnamese": "Một buổi chiếu phim"
          },
          {
            "key": "C",
            "text": "A lunch",
            "vietnamese": "Một bữa trưa"
          },
          {
            "key": "D",
            "text": "A conference",
            "vietnamese": "Một hội nghị"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"A lunch\" (Một bữa trưa)."
      },
      {
        "num": 36,
        "question": "Why does the man say,\"she has a van\"?",
        "vietnameseQuestion": "Tại sao người đàn ông lại nói \"cô ấy có một chiếc xe tải\"?",
        "options": [
          {
            "key": "A",
            "text": "To suggest inquiring about a ride",
            "vietnamese": "Để gợi ý hỏi về một chuyến đi"
          },
          {
            "key": "B",
            "text": "To express surprise at a coworker's choice of vehicle",
            "vietnamese": "Để bày tỏ sự ngạc nhiên trước sự lựa chọn phương tiện của đồng nghiệp"
          },
          {
            "key": "C",
            "text": "To explain why a coworker was late",
            "vietnamese": "Để giải thích tại sao đồng nghiệp đến muộn"
          },
          {
            "key": "D",
            "text": "To clarify that a coworker helped him move",
            "vietnamese": "Để làm rõ rằng một đồng nghiệp đã giúp anh ấy chuyển đi"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là (A): \"To suggest inquiring about a ride\" (Để gợi ý hỏi về một chuyến đi)."
      },
      {
        "num": 37,
        "question": "Whatwill thewomanmost likelydo next?",
        "vietnameseQuestion": "Người phụ nữ có nhiều khả năng sẽ làm gì tiếp theo?",
        "options": [
          {
            "key": "A",
            "text": "Reschedule an event",
            "vietnamese": "Lên lịch lại một sự kiện"
          },
          {
            "key": "B",
            "text": "Talk to another coworker",
            "vietnamese": "Nói chuyện với đồng nghiệp khác"
          },
          {
            "key": "C",
            "text": "Request time off",
            "vietnamese": "Yêu cầu thời gian nghỉ"
          },
          {
            "key": "D",
            "text": "Make aphone call",
            "vietnamese": "Gọi điện thoại"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"Talk to another coworker\" (Nói chuyện với đồng nghiệp khác)."
      }
    ],
    "vocabulary": [
      {
        "word": "train",
        "meaning": "đào tạo, huấn luyện",
        "partOfSpeech": "v"
      },
      {
        "word": "transfer",
        "meaning": "chuyển đổi, chuyển giao",
        "partOfSpeech": "v"
      },
      {
        "word": "van",
        "meaning": "xe tải nhỏ, xe van chở hàng",
        "partOfSpeech": "n"
      },
      {
        "word": "convenient",
        "meaning": "tiện lợi, thuận tiện",
        "partOfSpeech": "adj"
      }
    ]
  },
  {
    "id": "part3-38-40",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 38 - 40",
    "title": "Part 3 - Câu 38 - 40: Loa hoạt động ở đâu",
    "audioSrc": "/audio/test1_2023.mp3",
    "startTime": 975.64,
    "endTime": 1046.64,
    "transcript": [
      {
        "id": "p3-38-1",
        "speaker": "Woman",
        "text": "Hi, Sarika. We need a new assistant manager here at GiroGroceries.",
        "vietnamese": "Chào, Sarika. Chúng tôi cần một trợ lý giám đốc mới tại GiroGroceries."
      },
      {
        "id": "p3-38-2",
        "speaker": "Man",
        "text": "You've been one of our best cashiers for two years now. Are you interested in the position?",
        "vietnamese": "Bạn đã là một trong những nhân viên thu ngân giỏi nhất của chúng tôi trong hai năm nay. Bạn có quan tâm đến vị trí này không?"
      },
      {
        "id": "p3-38-3",
        "speaker": "Woman",
        "text": "Wow, I definitely am.",
        "vietnamese": "Ồ, tôi chắc chắn là vậy."
      },
      {
        "id": "p3-38-4",
        "speaker": "Man",
        "text": "My one concern is the working hours.",
        "vietnamese": "Một mối quan tâm của tôi là giờ làm việc."
      },
      {
        "id": "p3-38-5",
        "speaker": "Woman",
        "text": "Would my schedule change significantly?",
        "vietnamese": "Lịch trình của tôi có thay đổi đáng kể không?"
      },
      {
        "id": "p3-38-6",
        "speaker": "Man",
        "text": "You might have to work overtime once in a while.",
        "vietnamese": "Thỉnh thoảng bạn có thể phải làm thêm giờ."
      },
      {
        "id": "p3-38-7",
        "speaker": "Woman",
        "text": "Like when food deliveries arrive late, but that doesn't happen often.",
        "vietnamese": "Giống như việc giao đồ ăn đến muộn nhưng điều đó không xảy ra thường xuyên."
      },
      {
        "id": "p3-38-8",
        "speaker": "Man",
        "text": "Why don't you think about it for a few days? Let me know what you decide.",
        "vietnamese": "Tại sao bạn không nghĩ về nó trong vài ngày? Hãy cho tôi biết những gì bạn quyết định."
      }
    ],
    "questions": [
      {
        "num": 38,
        "question": "Wheredo the speakers work?",
        "vietnameseQuestion": "Loa hoạt động ở đâu?",
        "options": [
          {
            "key": "A",
            "text": "At a grocery store",
            "vietnamese": "Tại một cửa hàng tạp hóa"
          },
          {
            "key": "B",
            "text": "At a shipping facility",
            "vietnamese": "Tại cơ sở vận chuyển"
          },
          {
            "key": "C",
            "text": "At a restaurant",
            "vietnamese": "Tại một nhà hàng"
          },
          {
            "key": "D",
            "text": "At a doctor's office",
            "vietnamese": "Tại phòng khám của bác sĩ"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là (A): \"At a grocery store\" (Tại một cửa hàng tạp hóa)."
      },
      {
        "num": 39,
        "question": "What does the woman say she is concerned about?",
        "vietnameseQuestion": "Người phụ nữ nói rằng cô ấy quan tâm đến điều gì?",
        "options": [
          {
            "key": "A",
            "text": "Fuel prices",
            "vietnamese": "Giá nhiên liệu"
          },
          {
            "key": "B",
            "text": "Her work hours",
            "vietnamese": "Giờ làm việc của cô ấy"
          },
          {
            "key": "C",
            "text": "A staff shortage",
            "vietnamese": "Thiếu hụt nhân sự"
          },
          {
            "key": "D",
            "text": "An inventory process",
            "vietnamese": "Một quy trình kiểm kê"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"Her work hours\" (Giờ làm việc của cô ấy)."
      },
      {
        "num": 40,
        "question": "What does the man suggest that the woman do?",
        "vietnameseQuestion": "Người đàn ông đề nghị người phụ nữ làm gì?",
        "options": [
          {
            "key": "A",
            "text": "Complete a training program",
            "vietnamese": "Hoàn thành một chương trình đào tạo"
          },
          {
            "key": "B",
            "text": "Order extra equipment",
            "vietnamese": "Đặt mua thêm thiết bị"
          },
          {
            "key": "C",
            "text": "Hire a consultant",
            "vietnamese": "Thuê một nhà tư vấn"
          },
          {
            "key": "D",
            "text": "Take time to make a decision",
            "vietnamese": "Dành thời gian để đưa ra quyết định"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là (D): \"Take time to make a decision\" (Dành thời gian để đưa ra quyết định)."
      }
    ],
    "vocabulary": [
      {
        "word": "assistant",
        "meaning": "người trợ lý",
        "partOfSpeech": "n"
      },
      {
        "word": "schedule",
        "meaning": "lên lịch, sắp xếp thời gian",
        "partOfSpeech": "v"
      },
      {
        "word": "overtime",
        "meaning": "làm thêm giờ, tăng ca",
        "partOfSpeech": "n"
      },
      {
        "word": "arrive",
        "meaning": "đến nơi",
        "partOfSpeech": "v"
      }
    ]
  },
  {
    "id": "part3-41-43",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 41 - 43",
    "title": "Part 3 - Câu 41 - 43: Tại sao người phụ nữ lại gọi",
    "audioSrc": "/audio/test1_2023.mp3",
    "startTime": 1046.64,
    "endTime": 1132.84,
    "transcript": [
      {
        "id": "p3-41-1",
        "speaker": "Woman",
        "text": "Good morning. This is Westerly Travel's customer service.",
        "vietnamese": "Chào buổi sáng. Đây là dịch vụ chăm sóc khách hàng của Westerly Travel."
      },
      {
        "id": "p3-41-2",
        "speaker": "Man",
        "text": "How may I help you?",
        "vietnamese": "Tôi có thể giúp gì cho bạn?"
      },
      {
        "id": "p3-41-3",
        "speaker": "Woman",
        "text": "Yes, I was supposed to take the 2pm from Denver to Colorado Springs, but it was cancelled.",
        "vietnamese": "Đúng, tôi định bắt chuyến lúc 2 giờ chiều từ Denver đến Colorado Springs, nhưng chuyến bay đã bị hủy."
      },
      {
        "id": "p3-41-4",
        "speaker": "Man",
        "text": "I need to book a different train. I'm presenting at a trade show first thing in the morning,",
        "vietnamese": "Tôi cần đặt một chuyến tàu khác. Điều đầu tiên tôi phải trình bày tại một triển lãm thương mại vào buổi sáng,"
      },
      {
        "id": "p3-41-5",
        "speaker": "Woman",
        "text": "so I'm hoping you can get me on another train today.",
        "vietnamese": "nên tôi hy vọng hôm nay bạn có thể đưa tôi lên một chuyến tàu khác."
      },
      {
        "id": "p3-41-6",
        "speaker": "Man",
        "text": "The 4pm departure gets you in by 6.30, and there are plenty of seats available.",
        "vietnamese": "Chuyến khởi hành lúc 4 giờ chiều sẽ đưa bạn đến lúc 6h30 và có rất nhiều chỗ trống."
      },
      {
        "id": "p3-41-7",
        "speaker": "Woman",
        "text": "That sounds great.",
        "vietnamese": "Điều đó nghe có vẻ tuyệt vời."
      },
      {
        "id": "p3-41-8",
        "speaker": "Man",
        "text": "And to apologize for the inconvenience, I've upgraded you to Business Class at no extra charge.",
        "vietnamese": "Và để xin lỗi vì sự bất tiện này, tôi đã nâng cấp cho bạn lên Hạng Thương gia mà không tính thêm phí."
      }
    ],
    "questions": [
      {
        "num": 41,
        "question": "Why is the woman calling?",
        "vietnameseQuestion": "Tại sao người phụ nữ lại gọi?",
        "options": [
          {
            "key": "A",
            "text": "Her taxi never arrived.",
            "vietnamese": "Xe taxi của cô ấy không bao giờ đến."
          },
          {
            "key": "B",
            "text": "Her luggage is missing.",
            "vietnamese": "Hành lý của cô ấy bị mất tích."
          },
          {
            "key": "C",
            "text": "Her train was canceled.",
            "vietnamese": "Chuyến tàu của cô ấy đã bị hủy."
          },
          {
            "key": "D",
            "text": "Her ticket is lost.",
            "vietnamese": "Vé của cô ấy bị mất."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"Her train was canceled.\" (Chuyến tàu của cô ấy đã bị hủy.)."
      },
      {
        "num": 42,
        "question": "What event is the woman planning to attend?",
        "vietnameseQuestion": "Người phụ nữ dự định tham dự sự kiện gì?",
        "options": [
          {
            "key": "A",
            "text": "An awards ceremony",
            "vietnamese": "Một lễ trao giải"
          },
          {
            "key": "B",
            "text": "Atrade show",
            "vietnamese": "triển lãm thương mại"
          },
          {
            "key": "C",
            "text": "An art exhibit opening",
            "vietnamese": "Khai mạc triển lãm nghệ thuật"
          },
          {
            "key": "D",
            "text": "A building inspection",
            "vietnamese": "Thanh tra tòa nhà"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"Atrade show\" (triển lãm thương mại)."
      },
      {
        "num": 43,
        "question": "What does themangivethewoman as an apology?",
        "vietnameseQuestion": "Họ mang đến cho người phụ nữ điều gì như một lời xin lỗi?",
        "options": [
          {
            "key": "A",
            "text": "A partial discount",
            "vietnamese": "Giảm giá một phần"
          },
          {
            "key": "B",
            "text": "Vouchers for future travel",
            "vietnamese": "Voucher cho chuyến du lịch tương lai"
          },
          {
            "key": "C",
            "text": "A full refund",
            "vietnamese": "Hoàn lại tiền đầy đủ"
          },
          {
            "key": "D",
            "text": "A better seat GOONTOTHENEXTPAGE",
            "vietnamese": "Một chỗ ngồi tốt hơn GONTOTHENEXTPAGE"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là (D): \"A better seat GOONTOTHENEXTPAGE\" (Một chỗ ngồi tốt hơn GONTOTHENEXTPAGE)."
      }
    ],
    "vocabulary": [
      {
        "word": "travel",
        "meaning": "đi lại, đi công tác",
        "partOfSpeech": "v"
      },
      {
        "word": "book",
        "meaning": "đặt trước (phòng, vé)",
        "partOfSpeech": "v"
      },
      {
        "word": "train",
        "meaning": "đào tạo, huấn luyện",
        "partOfSpeech": "v"
      },
      {
        "word": "departure",
        "meaning": "sự khởi hành, rời bến",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part3-44-46",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 44 - 46",
    "title": "Part 3 - Câu 44 - 46: Người phụ nữ làm việc ở đâu",
    "audioSrc": "/audio/test1_2023.mp3",
    "startTime": 1132.84,
    "endTime": 1218.87,
    "transcript": [
      {
        "id": "p3-44-1",
        "speaker": "Woman",
        "text": "This is Marcy Ardmore at Slaton Motors.",
        "vietnamese": "Đây là Marcy Ardmore tại Slaton Motors."
      },
      {
        "id": "p3-44-2",
        "speaker": "Man",
        "text": "Some automotive parts we ordered from your factory haven't arrived at our dealership yet.",
        "vietnamese": "Một số phụ tùng ô tô mà chúng tôi đặt hàng từ nhà máy của bạn vẫn chưa đến đại lý của chúng tôi."
      },
      {
        "id": "p3-44-3",
        "speaker": "Woman",
        "text": "I'm sorry to hear that.",
        "vietnamese": "Tôi rất tiếc khi nghe điều đó."
      },
      {
        "id": "p3-44-4",
        "speaker": "Man",
        "text": "We sent your order over a week ago, but the shipping company has been experiencing delays.",
        "vietnamese": "Chúng tôi đã gửi đơn đặt hàng của bạn hơn một tuần trước nhưng công ty vận chuyển đang gặp phải sự chậm trễ."
      },
      {
        "id": "p3-44-5",
        "speaker": "Woman",
        "text": "Unfortunately, the tracking emails they sent us don't contain enough detail to determine",
        "vietnamese": "Thật không may, email theo dõi họ gửi cho chúng tôi không chứa đủ chi tiết để xác định"
      },
      {
        "id": "p3-44-6",
        "speaker": "Man",
        "text": "when the parts will get to you.",
        "vietnamese": "khi nào các bộ phận sẽ đến tay bạn."
      },
      {
        "id": "p3-44-7",
        "speaker": "Woman",
        "text": "I see.",
        "vietnamese": "Tôi hiểu rồi."
      },
      {
        "id": "p3-44-8",
        "speaker": "Man",
        "text": "Do you have contact information for the shipping company?",
        "vietnamese": "Bạn có thông tin liên hệ của công ty vận chuyển không?"
      },
      {
        "id": "p3-44-9",
        "speaker": "Woman",
        "text": "I'd like to see what I can find out.",
        "vietnamese": "Tôi muốn xem những gì tôi có thể tìm ra."
      },
      {
        "id": "p3-44-10",
        "speaker": "Man",
        "text": "Yes, I can give you their phone number, but I'll also call them.",
        "vietnamese": "Vâng, tôi có thể cho bạn số điện thoại của họ, nhưng tôi cũng sẽ gọi cho họ."
      },
      {
        "id": "p3-44-11",
        "speaker": "Woman",
        "text": "Hopefully the more inquiries they get, the more seriously they'll take the issue.",
        "vietnamese": "Hy vọng rằng càng nhận được nhiều câu hỏi thì họ sẽ càng xem xét vấn đề một cách nghiêm túc hơn."
      }
    ],
    "questions": [
      {
        "num": 44,
        "question": "Where does the woman work?",
        "vietnameseQuestion": "Người phụ nữ làm việc ở đâu?",
        "options": [
          {
            "key": "A",
            "text": "At a distribution center",
            "vietnamese": "Tại một trung tâm phân phối"
          },
          {
            "key": "B",
            "text": "At a conference center",
            "vietnamese": "Tại một trung tâm hội nghị"
          },
          {
            "key": "C",
            "text": "At a car dealership",
            "vietnamese": "Tại một đại lý ô tô"
          },
          {
            "key": "D",
            "text": "At a real estate agency",
            "vietnamese": "Tại một cơ quan bất động sản"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"At a car dealership\" (Tại một đại lý ô tô)."
      },
      {
        "num": 45,
        "question": "What problem with some e-mails does the man mention?",
        "vietnameseQuestion": "Người đàn ông đề cập đến vấn đề gì với một số e-mail?",
        "options": [
          {
            "key": "A",
            "text": "Confusion about the intended recipients",
            "vietnamese": "Nhầm lẫn về người nhận dự định"
          },
          {
            "key": "B",
            "text": "A delay in message delivery",
            "vietnamese": "Sự chậm trễ trong việc gửi tin nhắn"
          },
          {
            "key": "C",
            "text": "An incorrectly typed word",
            "vietnamese": "Một từ gõ sai"
          },
          {
            "key": "D",
            "text": "Lack of information",
            "vietnamese": "Thiếu thông tin"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là (D): \"Lack of information\" (Thiếu thông tin)."
      },
      {
        "num": 46,
        "question": "What will the woman most likely do next?",
        "vietnameseQuestion": "Người phụ nữ rất có thể sẽ làm gì tiếp theo?",
        "options": [
          {
            "key": "A",
            "text": "Arrange a meeting",
            "vietnamese": "Sắp xếp một cuộc họp"
          },
          {
            "key": "B",
            "text": "Make a phone call",
            "vietnamese": "Gọi điện thoại"
          },
          {
            "key": "C",
            "text": "Speak to her employees",
            "vietnamese": "Nói chuyện với nhân viên của cô ấy"
          },
          {
            "key": "D",
            "text": "Review an invoice",
            "vietnamese": "Xem lại hóa đơn"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"Make a phone call\" (Gọi điện thoại)."
      }
    ],
    "vocabulary": [
      {
        "word": "order",
        "meaning": "gọi món, đặt hàng",
        "partOfSpeech": "v"
      },
      {
        "word": "enough",
        "meaning": "đủ",
        "partOfSpeech": "adj"
      },
      {
        "word": "contact",
        "meaning": "liên hệ, liên lạc",
        "partOfSpeech": "v"
      },
      {
        "word": "phone",
        "meaning": "gọi điện thoại cho ai đó",
        "partOfSpeech": "v"
      }
    ]
  },
  {
    "id": "part3-47-49",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 47 - 49",
    "title": "Part 3 - Câu 47 - 49: Cuộc trò chuyện chủ yếu nói về điều gì",
    "audioSrc": "/audio/test1_2023.mp3",
    "startTime": 1218.87,
    "endTime": 1287.35,
    "transcript": [
      {
        "id": "p3-47-1",
        "speaker": "Woman",
        "text": "Amina, how a plan's progressing for the September release of our new model of mobile phone.",
        "vietnamese": "Amina, kế hoạch ra mắt mẫu điện thoại di động mới của chúng ta đang tiến triển thế nào."
      },
      {
        "id": "p3-47-2",
        "speaker": "Man",
        "text": "Good.",
        "vietnamese": "Tốt."
      },
      {
        "id": "p3-47-3",
        "speaker": "Woman",
        "text": "Right now the marketing department is looking at advertising options and thinking about the best way to get maximum exposure in the media.",
        "vietnamese": "Hiện tại bộ phận tiếp thị đang xem xét các phương án quảng cáo và suy nghĩ về cách tốt nhất để có được sự xuất hiện tối đa trên các phương tiện truyền thông."
      },
      {
        "id": "p3-47-4",
        "speaker": "Man",
        "text": "Great.",
        "vietnamese": "Tuyệt vời."
      },
      {
        "id": "p3-47-5",
        "speaker": "Woman",
        "text": "And what's the update from our manufacturer about when they'll begin production?",
        "vietnamese": "Và thông tin cập nhật từ nhà sản xuất của chúng tôi về thời điểm họ sẽ bắt đầu sản xuất là gì?"
      },
      {
        "id": "p3-47-6",
        "speaker": "Man",
        "text": "Last time we spoke you mentioned that the factory was at full capacity with other projects and I'm worried that'll affect our timeline.",
        "vietnamese": "Lần trước chúng ta nói chuyện, bạn đã đề cập rằng nhà máy đã hoạt động hết công suất để thực hiện các dự án khác và tôi lo lắng điều đó sẽ ảnh hưởng đến tiến độ của chúng ta."
      },
      {
        "id": "p3-47-7",
        "speaker": "Woman",
        "text": "I just spoke with them and they'll free up room for us soon.",
        "vietnamese": "Tôi vừa nói chuyện với họ và họ sẽ sớm nhường chỗ cho chúng tôi."
      }
    ],
    "questions": [
      {
        "num": 47,
        "question": "What is the conversation mainly about?",
        "vietnameseQuestion": "Cuộc trò chuyện chủ yếu nói về điều gì?",
        "options": [
          {
            "key": "A",
            "text": "A policy change",
            "vietnamese": "Một sự thay đổi chính sách"
          },
          {
            "key": "B",
            "text": "Aproduct launch",
            "vietnamese": "Ra mắt sản phẩm"
          },
          {
            "key": "C",
            "text": "Some customerfeedback",
            "vietnamese": "Một số phản hồi của khách hàng"
          },
          {
            "key": "D",
            "text": "A scheduled maintenance visit",
            "vietnamese": "Chuyến thăm bảo trì theo lịch trình"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"Aproduct launch\" (Ra mắt sản phẩm)."
      },
      {
        "num": 48,
        "question": "What does the woman say people at the company are currently working on?",
        "vietnameseQuestion": "Người phụ nữ nói mọi người ở công ty hiện đang làm việc gì?",
        "options": [
          {
            "key": "A",
            "text": "Exploring publicity options",
            "vietnamese": "Khám phá các lựa chọn công khai"
          },
          {
            "key": "B",
            "text": "Finding a new vendor",
            "vietnamese": "Tìm nhà cung cấp mới"
          },
          {
            "key": "C",
            "text": "Assembling a sales team",
            "vietnamese": "Tập hợp đội ngũ bán hàng"
          },
          {
            "key": "D",
            "text": "Negotiating a monthly fee",
            "vietnamese": "Đàm phán một khoản phí hàng tháng"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là (A): \"Exploring publicity options\" (Khám phá các lựa chọn công khai)."
      },
      {
        "num": 49,
        "question": "Why is the man concerned?",
        "vietnameseQuestion": "Tại sao người đàn ông lại quan tâm?",
        "options": [
          {
            "key": "A",
            "text": "Customers have complained.",
            "vietnamese": "Khách hàng đã phàn nàn."
          },
          {
            "key": "B",
            "text": "Price estimates are high.",
            "vietnamese": "Ước tính giá cao."
          },
          {
            "key": "C",
            "text": "Some changes require approval.",
            "vietnamese": "Một số thay đổi cần được phê duyệt."
          },
          {
            "key": "D",
            "text": "A plan may be delayed. 26",
            "vietnamese": "Một kế hoạch có thể bị trì hoãn. 26"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là (D): \"A plan may be delayed. 26\" (Một kế hoạch có thể bị trì hoãn. 26)."
      }
    ],
    "vocabulary": [
      {
        "word": "release",
        "meaning": "phát hành, ra mắt",
        "partOfSpeech": "v"
      },
      {
        "word": "model",
        "meaning": "mẫu xe, kiểu dáng",
        "partOfSpeech": "n"
      },
      {
        "word": "phone",
        "meaning": "gọi điện thoại cho ai đó",
        "partOfSpeech": "v"
      },
      {
        "word": "department",
        "meaning": "phòng ban",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part3-50-52",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 50 - 52",
    "title": "Part 3 - Câu 50 - 52: Các diễn giả đang chuẩn bị gì",
    "audioSrc": "/audio/test1_2023.mp3",
    "startTime": 1287.35,
    "endTime": 1358.22,
    "transcript": [
      {
        "id": "p3-50-1",
        "speaker": "Woman",
        "text": "Hi, Luca.",
        "vietnamese": "Chào Luca."
      },
      {
        "id": "p3-50-2",
        "speaker": "Man",
        "text": "Is the restaurant almost ready for this afternoon's awards dinner?",
        "vietnamese": "Nhà hàng gần như đã sẵn sàng cho bữa tối trao giải chiều nay chưa?"
      },
      {
        "id": "p3-50-3",
        "speaker": "Woman",
        "text": "Actually, now that the room's been set up, I see that we're short a few tables and chairs.",
        "vietnamese": "Thực ra bây giờ dọn phòng xong tôi thấy nhà mình thiếu mấy cái bàn ghế."
      },
      {
        "id": "p3-50-4",
        "speaker": "Man",
        "text": "Oh, I've already taken care of that.",
        "vietnamese": "Ồ, tôi đã lo việc đó rồi."
      },
      {
        "id": "p3-50-5",
        "speaker": "Woman",
        "text": "I call the rental company and they'll be delivering the furniture we need in an hour.",
        "vietnamese": "Tôi gọi cho công ty cho thuê và họ sẽ giao đồ đạc mà chúng tôi cần trong một giờ nữa."
      },
      {
        "id": "p3-50-6",
        "speaker": "Man",
        "text": "Thanks for doing that.",
        "vietnamese": "Cảm ơn vì đã làm điều đó."
      },
      {
        "id": "p3-50-7",
        "speaker": "Woman",
        "text": "Did you also look over the final guest list?",
        "vietnamese": "Bạn cũng đã xem qua danh sách khách mời cuối cùng chưa?"
      },
      {
        "id": "p3-50-8",
        "speaker": "Man",
        "text": "I haven't had time to do that yet.",
        "vietnamese": "Tôi vẫn chưa có thời gian để làm điều đó."
      },
      {
        "id": "p3-50-9",
        "speaker": "Woman",
        "text": "No, I haven't.",
        "vietnamese": "Không, tôi chưa."
      },
      {
        "id": "p3-50-10",
        "speaker": "Man",
        "text": "Why don't we do that together now?",
        "vietnamese": "Tại sao chúng ta không làm điều đó cùng nhau ngay bây giờ nhỉ?"
      }
    ],
    "questions": [
      {
        "num": 50,
        "question": "What are the speakers preparing for?",
        "vietnameseQuestion": "Các diễn giả đang chuẩn bị gì?",
        "options": [
          {
            "key": "A",
            "text": "An interview",
            "vietnamese": "Một cuộc phỏng vấn"
          },
          {
            "key": "B",
            "text": "A food delivery",
            "vietnamese": "Giao đồ ăn"
          },
          {
            "key": "C",
            "text": "A special event",
            "vietnamese": "Một sự kiện đặc biệt"
          },
          {
            "key": "D",
            "text": "An inspection",
            "vietnamese": "Một cuộc kiểm tra"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"A special event\" (Một sự kiện đặc biệt)."
      },
      {
        "num": 51,
        "question": "What does the woman say will be delivered in an hour?",
        "vietnameseQuestion": "Người phụ nữ nói cái gì sẽ được giao trong một giờ nữa?",
        "options": [
          {
            "key": "A",
            "text": "Someflowerarrangements",
            "vietnamese": "Một số cách cắm hoa"
          },
          {
            "key": "B",
            "text": "Some gifts for attendees",
            "vietnamese": "Một số quà tặng dành cho người tham dự"
          },
          {
            "key": "C",
            "text": "Some audio equipment",
            "vietnamese": "Một số thiết bị âm thanh"
          },
          {
            "key": "D",
            "text": "Sorme lables and chairs",
            "vietnamese": "Sorme bàn ghế"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là (D): \"Sorme lables and chairs\" (Sorme bàn ghế)."
      },
      {
        "num": 52,
        "question": "What willthe speakers most likely do next?",
        "vietnameseQuestion": "Các diễn giả có nhiều khả năng sẽ làm gì tiếp theo?",
        "options": [
          {
            "key": "A",
            "text": "Review a guest list",
            "vietnamese": "Xem lại danh sách khách mời"
          },
          {
            "key": "B",
            "text": "Meet with a photographer",
            "vietnamese": "Gặp gỡ nhiếp ảnh gia"
          },
          {
            "key": "C",
            "text": "Take a break",
            "vietnamese": "Hãy nghỉ ngơi"
          },
          {
            "key": "D",
            "text": "Taste some food",
            "vietnamese": "Nếm thử một số món ăn"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là (A): \"Review a guest list\" (Xem lại danh sách khách mời)."
      }
    ],
    "vocabulary": [
      {
        "word": "actually",
        "meaning": "thực ra, trên thực tế",
        "partOfSpeech": "adv"
      },
      {
        "word": "already",
        "meaning": "đã... rồi",
        "partOfSpeech": "adv"
      },
      {
        "word": "furniture",
        "meaning": "đồ nội thất",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part3-53-55",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 53 - 55",
    "title": "Part 3 - Câu 53 - 55: Các diễn giả đang thảo luận về sự kiện gì",
    "audioSrc": "/audio/test1_2023.mp3",
    "startTime": 1358.22,
    "endTime": 1442.17,
    "transcript": [
      {
        "id": "p3-53-1",
        "speaker": "Woman",
        "text": "Marcella, we have a problem with the business conference we're hosting next week.",
        "vietnamese": "Marcella, chúng tôi gặp vấn đề với hội nghị kinh doanh mà chúng tôi sẽ tổ chức vào tuần tới."
      },
      {
        "id": "p3-53-2",
        "speaker": "Man",
        "text": "I just got a call from the conference center and they said there's been water damage to three of the meeting rooms.",
        "vietnamese": "Tôi vừa nhận được cuộc gọi từ trung tâm hội nghị và họ nói rằng ba phòng họp bị hư hỏng do nước."
      },
      {
        "id": "p3-53-3",
        "speaker": "Woman",
        "text": "Oh no, but the rooms will be repaired in time for our conference, right?",
        "vietnamese": "Ồ không, nhưng các phòng sẽ được sửa chữa kịp thời cho hội nghị của chúng ta, phải không?"
      },
      {
        "id": "p3-53-4",
        "speaker": "Man",
        "text": "They said there's a lot of damage.",
        "vietnamese": "Họ nói có rất nhiều thiệt hại."
      },
      {
        "id": "p3-53-5",
        "speaker": "Woman",
        "text": "Okay.",
        "vietnamese": "Được rồi."
      },
      {
        "id": "p3-53-6",
        "speaker": "Man",
        "text": "Well, the weather's supposed to be nice, so we could host some of the seminars outdoors.",
        "vietnamese": "Chà, thời tiết lẽ ra sẽ đẹp nên chúng ta có thể tổ chức một số buổi hội thảo ngoài trời."
      },
      {
        "id": "p3-53-7",
        "speaker": "Woman",
        "text": "It's a little unconventional, but there's plenty of space surrounding the conference.",
        "vietnamese": "Nó hơi khác thường nhưng có rất nhiều không gian xung quanh hội nghị."
      },
      {
        "id": "p3-53-8",
        "speaker": "Man",
        "text": "Surrounding the conference center.",
        "vietnamese": "Xung quanh trung tâm hội nghị."
      }
    ],
    "questions": [
      {
        "num": 53,
        "question": "What event are the speakers discussing?",
        "vietnameseQuestion": "Các diễn giả đang thảo luận về sự kiện gì?",
        "options": [
          {
            "key": "A",
            "text": "A bank opening",
            "vietnamese": "Khai trương ngân hàng"
          },
          {
            "key": "B",
            "text": "A contest",
            "vietnamese": "Một cuộc thi"
          },
          {
            "key": "C",
            "text": "Abusiness conference",
            "vietnamese": "Hội nghị kinh doanh"
          },
          {
            "key": "D",
            "text": "A company anniversary",
            "vietnamese": "Lễ kỷ niệm công ty"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"Abusiness conference\" (Hội nghị kinh doanh)."
      },
      {
        "num": 54,
        "question": "What does the man mean when he says, \"there's a lot of damage\"?",
        "vietnameseQuestion": "Người đàn ông có ý gì khi nói \"có rất nhiều thiệt hại\"?",
        "options": [
          {
            "key": "A",
            "text": "He finally fully understands a problem.",
            "vietnamese": "Cuối cùng anh ấy đã hoàn toàn hiểu được một vấn đề."
          },
          {
            "key": "B",
            "text": "The woman should expect a bill in the mail.",
            "vietnamese": "Người phụ nữ sẽ nhận được một hóa đơn qua đường bưu điện."
          },
          {
            "key": "C",
            "text": "The woman's assumption is incorrect.",
            "vietnamese": "Giả định của người phụ nữ là không chính xác."
          },
          {
            "key": "D",
            "text": "A schedule needs to be adjusted.",
            "vietnamese": "Một lịch trình cần phải được điều chỉnh."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"The woman's assumption is incorrect.\" (Giả định của người phụ nữ là không chính xác.)."
      },
      {
        "num": 55,
        "question": "What does the woman recommend?",
        "vietnameseQuestion": "Người phụ nữ khuyên gì?",
        "options": [
          {
            "key": "A",
            "text": "Using an outdoor area",
            "vietnamese": "Sử dụng khu vực ngoài trời"
          },
          {
            "key": "B",
            "text": "Arranging technical support",
            "vietnamese": "Sắp xếp hỗ trợ kỹ thuật"
          },
          {
            "key": "C",
            "text": "Confirminga catering menu",
            "vietnamese": "Xác nhận thực đơn phục vụ"
          },
          {
            "key": "D",
            "text": "Interviewing some job applicants",
            "vietnamese": "Phỏng vấn một số người xin việc"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là (A): \"Using an outdoor area\" (Sử dụng khu vực ngoài trời)."
      }
    ],
    "vocabulary": [
      {
        "word": "conference",
        "meaning": "hội nghị chuyên đề",
        "partOfSpeech": "n"
      },
      {
        "word": "water",
        "meaning": "tưới nước",
        "partOfSpeech": "v"
      },
      {
        "word": "plenty",
        "meaning": "nhiều, dồi dào",
        "partOfSpeech": "pron"
      }
    ]
  },
  {
    "id": "part3-56-58",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 56 - 58",
    "title": "Part 3 - Câu 56 - 58: Các diễn giả có khả năng làm việc trong ngành nào nhất",
    "audioSrc": "/audio/test1_2023.mp3",
    "startTime": 1442.17,
    "endTime": 1524.49,
    "transcript": [
      {
        "id": "p3-56-1",
        "speaker": "Woman",
        "text": "Okay, Marianne, the new healthcare software is all set up on your computer.",
        "vietnamese": "Được rồi, Marianne, phần mềm chăm sóc sức khỏe mới đã được cài đặt xong trên máy tính của bạn."
      },
      {
        "id": "p3-56-2",
        "speaker": "Man",
        "text": "It should be pretty straightforward to use, but call technical support if you run into any issues.",
        "vietnamese": "Nó khá dễ sử dụng nhưng hãy gọi cho bộ phận hỗ trợ kỹ thuật nếu bạn gặp bất kỳ vấn đề nào."
      },
      {
        "id": "p3-56-3",
        "speaker": "Woman",
        "text": "Great.",
        "vietnamese": "Tuyệt vời."
      },
      {
        "id": "p3-56-4",
        "speaker": "Man",
        "text": "I hear a lot of healthcare providers are switching to the same software.",
        "vietnamese": "Tôi nghe nói rất nhiều nhà cung cấp dịch vụ chăm sóc sức khỏe đang chuyển sang sử dụng cùng một phần mềm."
      },
      {
        "id": "p3-56-5",
        "speaker": "Woman",
        "text": "Yes, it's becoming popular because it retains all of a patient's medical records from different providers in one central system.",
        "vietnamese": "Đúng vậy, nó đang trở nên phổ biến vì nó lưu giữ tất cả hồ sơ y tế của bệnh nhân từ các nhà cung cấp khác nhau trong một hệ thống trung tâm."
      },
      {
        "id": "p3-56-6",
        "speaker": "Man",
        "text": "Excuse me. Sorry to interrupt.",
        "vietnamese": "Xin lỗi. Xin lỗi đã làm gián đoạn."
      },
      {
        "id": "p3-56-7",
        "speaker": "Woman",
        "text": "No problem, Francesca.",
        "vietnamese": "Không sao đâu, Francesca."
      },
      {
        "id": "p3-56-8",
        "speaker": "Man",
        "text": "What's up?",
        "vietnamese": "Có chuyện gì thế?"
      },
      {
        "id": "p3-56-9",
        "speaker": "Woman",
        "text": "Have you heard what you said, and just to clarify, the program can only collect and retain records from providers he used the same software.",
        "vietnamese": "Bạn đã nghe những gì bạn nói chưa, và chỉ cần làm rõ, chương trình chỉ có thể thu thập và lưu giữ hồ sơ từ những nhà cung cấp sử dụng cùng một phần mềm."
      },
      {
        "id": "p3-56-10",
        "speaker": "Man",
        "text": "So Marianne may find she still has to call around to obtain all the patient records she needs.",
        "vietnamese": "Vì vậy, Marianne có thể thấy cô ấy vẫn phải gọi điện khắp nơi để lấy tất cả hồ sơ bệnh nhân mà cô ấy cần."
      }
    ],
    "questions": [
      {
        "num": 56,
        "question": "What industrydo the speakers most likely work in?",
        "vietnameseQuestion": "Các diễn giả có khả năng làm việc trong ngành nào nhất?",
        "options": [
          {
            "key": "A",
            "text": "Medicine",
            "vietnamese": "Y học"
          },
          {
            "key": "B",
            "text": "Music",
            "vietnamese": "Âm nhạc"
          },
          {
            "key": "C",
            "text": "Publishing",
            "vietnamese": "Xuất bản"
          },
          {
            "key": "D",
            "text": "Finance",
            "vietnamese": "Tài chính"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là (A): \"Medicine\" (Y học)."
      },
      {
        "num": 57,
        "question": "According to the man, why has a software program become popular?",
        "vietnameseQuestion": "Theo người đàn ông, tại sao một chương trình phần mềm lại trở nên phổ biến?",
        "options": [
          {
            "key": "A",
            "text": "It is less expensive than similar products.",
            "vietnamese": "Nó rẻ hơn so với các sản phẩm tương tự."
          },
          {
            "key": "B",
            "text": "It makes information more accessible.",
            "vietnamese": "Nó làm cho thông tin dễ tiếp cận hơn."
          },
          {
            "key": "C",
            "text": "It reduces environmental impact.",
            "vietnamese": "Nó làm giảm tác động môi trường."
          },
          {
            "key": "D",
            "text": "It comes with customer support.",
            "vietnamese": "Nó đi kèm với hỗ trợ khách hàng."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"It makes information more accessible.\" (Nó làm cho thông tin dễ tiếp cận hơn.)."
      },
      {
        "num": 58,
        "question": "What might Marion still need to do?",
        "vietnameseQuestion": "Marion có thể vẫn cần phải làm gì?",
        "options": [
          {
            "key": "A",
            "text": "Contact some service providers",
            "vietnamese": "Liên hệ với một số nhà cung cấp dịch vụ"
          },
          {
            "key": "B",
            "text": "Sign a release form",
            "vietnamese": "Ký giấy phát hành"
          },
          {
            "key": "C",
            "text": "Check some financial information",
            "vietnamese": "Kiểm tra một số thông tin tài chính"
          },
          {
            "key": "D",
            "text": "Repair some equipment",
            "vietnamese": "Sửa chữa một số thiết bị"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là (A): \"Contact some service providers\" (Liên hệ với một số nhà cung cấp dịch vụ)."
      }
    ],
    "vocabulary": [
      {
        "word": "software",
        "meaning": "phần mềm máy tính",
        "partOfSpeech": "n"
      },
      {
        "word": "straightforward",
        "meaning": "đơn giản, dễ hiểu",
        "partOfSpeech": "adj"
      },
      {
        "word": "patient",
        "meaning": "bệnh nhân",
        "partOfSpeech": "n"
      },
      {
        "word": "records",
        "meaning": "hồ sơ, chứng từ lưu trữ",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part3-59-61",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 59 - 61",
    "title": "Part 3 - Câu 59 - 61: Các diễn giả đang thảo luận về vấn đề gì",
    "audioSrc": "/audio/test1_2023.mp3",
    "startTime": 1524.49,
    "endTime": 1609.3,
    "transcript": [
      {
        "id": "p3-59-1",
        "speaker": "Woman",
        "text": "Let's get this product innovation meeting started.",
        "vietnamese": "Hãy bắt đầu cuộc họp đổi mới sản phẩm này."
      },
      {
        "id": "p3-59-2",
        "speaker": "Man",
        "text": "Sales of our fruit and nut bars have been strong, so we'd like to develop some other types of snack bars.",
        "vietnamese": "Doanh số bán thanh trái cây và hạt của chúng tôi rất cao, vì vậy chúng tôi muốn phát triển một số loại thanh đồ ăn nhẹ khác."
      },
      {
        "id": "p3-59-3",
        "speaker": "Woman",
        "text": "What do you recommend, Stan?",
        "vietnamese": "Bạn khuyên gì, Stan?"
      },
      {
        "id": "p3-59-4",
        "speaker": "Man",
        "text": "Well, we know that many people are allergic to nuts, so we should develop some snack bars without nuts.",
        "vietnamese": "Chà, chúng tôi biết rằng nhiều người bị dị ứng với các loại hạt, vì vậy chúng ta nên phát triển một số quán ăn nhẹ không có hạt."
      },
      {
        "id": "p3-59-5",
        "speaker": "Woman",
        "text": "The only thing is, we'd need a separate set of equipment to avoid contamination between the two production areas.",
        "vietnamese": "Điều duy nhất là chúng tôi cần một bộ thiết bị riêng để tránh ô nhiễm giữa hai khu vực sản xuất."
      },
      {
        "id": "p3-59-6",
        "speaker": "Man",
        "text": "We don't have room at this facility for that.",
        "vietnamese": "Chúng tôi không có chỗ ở cơ sở này cho việc đó."
      },
      {
        "id": "p3-59-7",
        "speaker": "Woman",
        "text": "Pedro, you've been to our new production facility in Glenview, right?",
        "vietnamese": "Pedro, bạn đã đến cơ sở sản xuất mới của chúng tôi ở Glenview phải không?"
      },
      {
        "id": "p3-59-8",
        "speaker": "Man",
        "text": "Is there space there for a new equipment?",
        "vietnamese": "Có chỗ trống cho thiết bị mới không?"
      },
      {
        "id": "p3-59-9",
        "speaker": "Woman",
        "text": "I think there's extra space there.",
        "vietnamese": "Tôi nghĩ có thêm không gian ở đó."
      },
      {
        "id": "p3-59-10",
        "speaker": "Man",
        "text": "I'll check with the facility manager to make sure, though.",
        "vietnamese": "Tuy nhiên, tôi sẽ kiểm tra với người quản lý cơ sở để đảm bảo."
      }
    ],
    "questions": [
      {
        "num": 59,
        "question": "What are the speakers discussing?",
        "vietnameseQuestion": "Các diễn giả đang thảo luận về vấn đề gì?",
        "options": [
          {
            "key": "A",
            "text": "Proposing a business merger",
            "vietnamese": "Đề xuất sáp nhập doanh nghiệp"
          },
          {
            "key": "B",
            "text": "Relocating a company's headquarters",
            "vietnamese": "Chuyển địa điểm trụ sở công ty"
          },
          {
            "key": "C",
            "text": "Developing additional products",
            "vietnamese": "Phát triển sản phẩm bổ sung"
          },
          {
            "key": "D",
            "text": "Hiring more employees",
            "vietnamese": "Thuê thêm nhân viên"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"Developing additional products\" (Phát triển sản phẩm bổ sung)."
      },
      {
        "num": 60,
        "question": "What challenge does Stan mention?",
        "vietnameseQuestion": "Stan đề cập đến thách thức gì?",
        "options": [
          {
            "key": "A",
            "text": "A profit margin will decrease.",
            "vietnamese": "Tỷ suất lợi nhuận sẽ giảm."
          },
          {
            "key": "B",
            "text": "Additional equipment will be needed.",
            "vietnamese": "Sẽ cần thêm thiết bị."
          },
          {
            "key": "C",
            "text": "There are not enough job applicants.",
            "vietnamese": "Không có đủ người xin việc."
          },
          {
            "key": "D",
            "text": "There are delays in production.",
            "vietnamese": "Có sự chậm trễ trong sản xuất."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"Additional equipment will be needed.\" (Sẽ cần thêm thiết bị.)."
      },
      {
        "num": 61,
        "question": "What does Pedro sayhe will do?",
        "vietnameseQuestion": "Pedro nói anh ấy sẽ làm gì?",
        "options": [
          {
            "key": "A",
            "text": "Contact a facility manager",
            "vietnamese": "Liên hệ với người quản lý cơ sở"
          },
          {
            "key": "B",
            "text": "Adjust a budget",
            "vietnamese": "Điều chỉnh ngân sách"
          },
          {
            "key": "C",
            "text": "Change a work schedule",
            "vietnamese": "Thay đổi lịch làm việc"
          },
          {
            "key": "D",
            "text": "Research a product ES Time q A.M. Fishing Expedition Whale Watching 10 A.M. 11 A.M. Sea-Ride Special Island Exploration 12 p.M.",
            "vietnamese": "Nghiên cứu sản phẩm ES Thời gian q A.M. Thám hiểm câu cá ngắm cá voi lúc 10 giờ sáng 11 giờ sáng Khám phá Đảo đặc biệt bằng Sea-Ride 12 giờ trưa"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là (A): \"Contact a facility manager\" (Liên hệ với người quản lý cơ sở)."
      }
    ],
    "vocabulary": [
      {
        "word": "sales",
        "meaning": "doanh số bán hàng",
        "partOfSpeech": "n"
      },
      {
        "word": "recommend",
        "meaning": "gợi ý, giới thiệu",
        "partOfSpeech": "v"
      },
      {
        "word": "equipment",
        "meaning": "trang thiết bị máy móc",
        "partOfSpeech": "n"
      },
      {
        "word": "facility",
        "meaning": "cơ sở vật chất",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part3-62-64",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 62 - 64",
    "title": "Part 3 - Câu 62 - 64: Theo người đàn ông, vì sao tour Sea-Ride Special ngày nay...",
    "audioSrc": "/audio/test1_2023.mp3",
    "startTime": 1609.3,
    "endTime": 1707.5,
    "transcript": [
      {
        "id": "p3-62-1",
        "speaker": "Woman",
        "text": "Welcome to the boat center.",
        "vietnamese": "Chào mừng đến với trung tâm thuyền."
      },
      {
        "id": "p3-62-2",
        "speaker": "Man",
        "text": "How may I help you?",
        "vietnamese": "Tôi có thể giúp gì cho bạn?"
      },
      {
        "id": "p3-62-3",
        "speaker": "Woman",
        "text": "Hi.",
        "vietnamese": "CHÀO."
      },
      {
        "id": "p3-62-4",
        "speaker": "Man",
        "text": "Do you have any tickets for the C-Ride Special Tour today?",
        "vietnamese": "Bạn có vé cho Chuyến tham quan đặc biệt C-Ride hôm nay không?"
      },
      {
        "id": "p3-62-5",
        "speaker": "Woman",
        "text": "I was hoping to catch a last minute tour.",
        "vietnamese": "Tôi đã hy vọng có được chuyến tham quan vào phút cuối."
      },
      {
        "id": "p3-62-6",
        "speaker": "Man",
        "text": "Sorry.",
        "vietnamese": "Lấy làm tiếc."
      },
      {
        "id": "p3-62-7",
        "speaker": "Woman",
        "text": "We're sold out.",
        "vietnamese": "Chúng tôi đã bán hết."
      },
      {
        "id": "p3-62-8",
        "speaker": "Man",
        "text": "It's a really popular tour this time of year because the penguins are migrating through the area.",
        "vietnamese": "Đây là một chuyến du lịch thực sự phổ biến vào thời điểm này trong năm vì chim cánh cụt đang di cư khắp khu vực."
      },
      {
        "id": "p3-62-9",
        "speaker": "Woman",
        "text": "Oh, too bad.",
        "vietnamese": "Ôi, tệ quá."
      },
      {
        "id": "p3-62-10",
        "speaker": "Man",
        "text": "I'm leaving tomorrow morning and I was really hoping to take one of your tours.",
        "vietnamese": "Sáng mai tôi sẽ đi và tôi thực sự mong được tham gia một chuyến tham quan của bạn."
      },
      {
        "id": "p3-62-11",
        "speaker": "Woman",
        "text": "Well, the island exploration to it still has a couple of spots left.",
        "vietnamese": "Chà, việc khám phá hòn đảo vẫn còn một vài điểm nữa."
      },
      {
        "id": "p3-62-12",
        "speaker": "Man",
        "text": "Great.",
        "vietnamese": "Tuyệt vời."
      },
      {
        "id": "p3-62-13",
        "speaker": "Woman",
        "text": "And that'll give me time to get something to eat before it starts.",
        "vietnamese": "Và điều đó sẽ cho tôi thời gian để kiếm thứ gì đó để ăn trước khi nó bắt đầu."
      },
      {
        "id": "p3-62-14",
        "speaker": "Man",
        "text": "I see there's a coffee shop just down the street.",
        "vietnamese": "Tôi thấy có một quán cà phê ngay cuối phố."
      }
    ],
    "questions": [
      {
        "num": 62,
        "question": "According to the man, why is today's Sea-Ride Special tour popular?",
        "vietnameseQuestion": "Theo người đàn ông, vì sao tour Sea-Ride Special ngày nay lại được yêu thích?",
        "options": [
          {
            "key": "A",
            "text": "It offers a chance to see migrating birds.",
            "vietnamese": "Nó cung cấp một cơ hội để xem các loài chim di cư."
          },
          {
            "key": "B",
            "text": "Water conditions are likely to be favorable.",
            "vietnamese": "Điều kiện nước có thể thuận lợi."
          },
          {
            "key": "C",
            "text": "A guest chef is preparing lunch.",
            "vietnamese": "Một đầu bếp khách đang chuẩn bị bữa trưa."
          },
          {
            "key": "D",
            "text": "Someone special will be guiding the tour.",
            "vietnamese": "Một người đặc biệt sẽ hướng dẫn chuyến tham quan."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là (A): \"It offers a chance to see migrating birds.\" (Nó cung cấp một cơ hội để xem các loài chim di cư.)."
      },
      {
        "num": 63,
        "question": "Look at the graphic. What time will the woman depart on a tour?",
        "vietnameseQuestion": "Nhìn vào đồ họa. Người phụ nữ sẽ khởi hành chuyến du lịch lúc mấy giờ?",
        "options": [
          {
            "key": "A",
            "text": "At 9 A.M.",
            "vietnamese": "Lúc 9 giờ sáng"
          },
          {
            "key": "B",
            "text": "At 10 A.M.",
            "vietnamese": "Vào lúc 10 giờ sáng"
          },
          {
            "key": "C",
            "text": "At 11 A.M.",
            "vietnamese": "Vào lúc 11 giờ sáng"
          },
          {
            "key": "D",
            "text": "At 12 p.M.",
            "vietnamese": "Vào lúc 12 giờ trưa."
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là (D): \"At 12 p.M.\" (Vào lúc 12 giờ trưa.)."
      },
      {
        "num": 64,
        "question": "What will the woman most likely do next?",
        "vietnameseQuestion": "Người phụ nữ rất có thể sẽ làm gì tiếp theo?",
        "options": [
          {
            "key": "A",
            "text": "Return to her hotel",
            "vietnamese": "Trở về khách sạn của cô ấy"
          },
          {
            "key": "B",
            "text": "Visit a cafe",
            "vietnamese": "Ghé thăm một quán cà phê"
          },
          {
            "key": "C",
            "text": "Call a friend",
            "vietnamese": "Gọi cho một người bạn"
          },
          {
            "key": "D",
            "text": "Store her bags in a locker GOONTOTHENEXTPAGE",
            "vietnamese": "Cất túi xách của cô ấy vào tủ khóa GONTOTHENEXTPAGE"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"Visit a cafe\" (Ghé thăm một quán cà phê)."
      }
    ],
    "vocabulary": [
      {
        "word": "tour",
        "meaning": "chuyến tham quan, dẫn đi xem",
        "partOfSpeech": "n/v"
      },
      {
        "word": "exploration",
        "meaning": "chuyến tham quan thám hiểm, khám phá",
        "partOfSpeech": "n"
      },
      {
        "word": "left",
        "meaning": "còn lại",
        "partOfSpeech": "adj"
      }
    ],
    "graphicImage": "/images/intensive/test1_2023/q62_64.png"
  },
  {
    "id": "part3-65-67",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 65 - 67",
    "title": "Part 3 - Câu 65 - 67: Tại sao người phụ nữ lại xin lỗi",
    "audioSrc": "/audio/test1_2023.mp3",
    "startTime": 1707.5,
    "endTime": 1799.78,
    "transcript": [
      {
        "id": "p3-65-1",
        "speaker": "Woman",
        "text": "Hi.",
        "vietnamese": "CHÀO."
      },
      {
        "id": "p3-65-2",
        "speaker": "Man",
        "text": "I'm here for the health and wellness conference.",
        "vietnamese": "Tôi ở đây để tham dự hội nghị về sức khỏe và thể chất."
      },
      {
        "id": "p3-65-3",
        "speaker": "Woman",
        "text": "I parked in the event center parking area.",
        "vietnamese": "Tôi đậu xe ở khu vực đậu xe của trung tâm sự kiện."
      },
      {
        "id": "p3-65-4",
        "speaker": "Man",
        "text": "I was wondering, is parking free for conference attendees?",
        "vietnamese": "Tôi đang tự hỏi, bãi đậu xe có miễn phí cho người tham dự hội nghị không?"
      },
      {
        "id": "p3-65-5",
        "speaker": "Woman",
        "text": "No, I'm sorry we don't provide any reimbursements for parking.",
        "vietnamese": "Không, tôi rất tiếc chúng tôi không cung cấp bất kỳ khoản hoàn trả nào cho việc đỗ xe."
      },
      {
        "id": "p3-65-6",
        "speaker": "Man",
        "text": "But if you're willing to move your car, there's a cheaper parking area at 7th Avenue and Vine Street.",
        "vietnamese": "Nhưng nếu bạn sẵn sàng di chuyển ô tô của mình, có một khu vực đỗ xe rẻ hơn ở Đại lộ số 7 và Phố Vine."
      },
      {
        "id": "p3-65-7",
        "speaker": "Woman",
        "text": "It's about a block away.",
        "vietnamese": "Nó cách đây khoảng một dãy nhà."
      },
      {
        "id": "p3-65-8",
        "speaker": "Man",
        "text": "Oh, unfortunately I don't have time.",
        "vietnamese": "Ồ, tiếc là tôi không có thời gian."
      },
      {
        "id": "p3-65-9",
        "speaker": "Woman",
        "text": "I'm scheduled to attend the strength training seminar that starts in 15 minutes.",
        "vietnamese": "Tôi dự kiến ​​tham dự hội thảo rèn luyện sức mạnh sẽ bắt đầu sau 15 phút nữa."
      },
      {
        "id": "p3-65-10",
        "speaker": "Man",
        "text": "But tomorrow I'll get here earlier and park at the other lot.",
        "vietnamese": "Nhưng ngày mai tôi sẽ đến đây sớm hơn và đỗ xe ở bãi kia."
      },
      {
        "id": "p3-65-11",
        "speaker": "Woman",
        "text": "7th and Vine you said?",
        "vietnamese": "Thứ 7 và Vine bạn nói?"
      },
      {
        "id": "p3-65-12",
        "speaker": "Man",
        "text": "Right?",
        "vietnamese": "Đúng không?"
      },
      {
        "id": "p3-65-13",
        "speaker": "Woman",
        "text": "That's correct.",
        "vietnamese": "Điều đó đúng."
      }
    ],
    "questions": [
      {
        "num": 65,
        "question": "Whydoes thewomanapologize?",
        "vietnameseQuestion": "Tại sao người phụ nữ lại xin lỗi?",
        "options": [
          {
            "key": "A",
            "text": "A conference session is full.",
            "vietnamese": "Phiên họp đầy đủ."
          },
          {
            "key": "B",
            "text": "An elevator is not working.",
            "vietnamese": "Một thang máy không hoạt động."
          },
          {
            "key": "C",
            "text": "A workshop has changed locations.",
            "vietnamese": "Một hội thảo đã thay đổi địa điểm."
          },
          {
            "key": "D",
            "text": "Parking is not free.",
            "vietnamese": "Bãi đậu xe không miễn phí."
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là (D): \"Parking is not free.\" (Bãi đậu xe không miễn phí.)."
      },
      {
        "num": 66,
        "question": "Look at the graphic. Which location does the woman recommend?",
        "vietnameseQuestion": "Nhìn vào đồ họa. Người phụ nữ giới thiệu địa điểm nào?",
        "options": [
          {
            "key": "A",
            "text": "Area 1",
            "vietnamese": "Khu 1"
          },
          {
            "key": "B",
            "text": "Area 2",
            "vietnamese": "Khu vực 2"
          },
          {
            "key": "C",
            "text": "Area 3",
            "vietnamese": "Khu 3"
          },
          {
            "key": "D",
            "text": "Area 4",
            "vietnamese": "Khu 4"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"Area 3\" (Khu 3)."
      },
      {
        "num": 67,
        "question": "Why is the man in a hurry?",
        "vietnameseQuestion": "Tại sao người đàn ông lại vội vàng?",
        "options": [
          {
            "key": "A",
            "text": "A workshop is starting soon.",
            "vietnamese": "Một workshop sắp bắt đầu."
          },
          {
            "key": "B",
            "text": "A parking pass is about to expire.",
            "vietnamese": "Thẻ đỗ xe sắp hết hạn."
          },
          {
            "key": "C",
            "text": "A shuttle is running late.",
            "vietnamese": "Xe đưa đón đến muộn."
          },
          {
            "key": "D",
            "text": "A friend is waiting outside. 28 Xena 300 Rhenium60 $169.99 $149.99 3. 4. Ares 250 Enzo5000 $179.99 $129.99",
            "vietnamese": "Một người bạn đang đợi bên ngoài. 28 Xena 300 Rhenium60 $169,99 $149,99 3. 4. Ares 250 Enzo5000 $179,99 $129,99"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là (A): \"A workshop is starting soon.\" (Một workshop sắp bắt đầu.)."
      }
    ],
    "vocabulary": [
      {
        "word": "conference",
        "meaning": "hội nghị chuyên đề",
        "partOfSpeech": "n"
      },
      {
        "word": "free",
        "meaning": "rảnh rỗi, không bận",
        "partOfSpeech": "adj"
      },
      {
        "word": "avenue",
        "meaning": "đại lộ",
        "partOfSpeech": "n"
      },
      {
        "word": "block",
        "meaning": "chắn lối, chặn đường",
        "partOfSpeech": "v"
      }
    ],
    "graphicImage": "/images/intensive/test1_2023/q65_67.png"
  },
  {
    "id": "part3-68-70",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 68 - 70",
    "title": "Part 3 - Câu 68 - 70: Tại sao người phụ nữ lại gọi",
    "audioSrc": "/audio/test1_2023.mp3",
    "startTime": 1799.78,
    "endTime": 1892.66,
    "transcript": [
      {
        "id": "p3-68-1",
        "speaker": "Woman",
        "text": "Molina's office store.",
        "vietnamese": "Cửa hàng văn phòng của Molina."
      },
      {
        "id": "p3-68-2",
        "speaker": "Man",
        "text": "How can I help?",
        "vietnamese": "Tôi có thể giúp gì?"
      },
      {
        "id": "p3-68-3",
        "speaker": "Woman",
        "text": "Hi.",
        "vietnamese": "CHÀO."
      },
      {
        "id": "p3-68-4",
        "speaker": "Man",
        "text": "I've been trying to order a product on your website.",
        "vietnamese": "Tôi đang cố gắng đặt mua một sản phẩm trên trang web của bạn."
      },
      {
        "id": "p3-68-5",
        "speaker": "Woman",
        "text": "But every time I get to the checkout screen, everything freezes and I can't place the order.",
        "vietnamese": "Nhưng mỗi lần tôi đến màn hình thanh toán, mọi thứ đều bị treo và tôi không thể đặt hàng."
      },
      {
        "id": "p3-68-6",
        "speaker": "Man",
        "text": "What are you trying to buy?",
        "vietnamese": "Bạn đang cố gắng mua gì?"
      },
      {
        "id": "p3-68-7",
        "speaker": "Woman",
        "text": "The Enzo 5000 scanner.",
        "vietnamese": "Máy quét Enzo 5000."
      },
      {
        "id": "p3-68-8",
        "speaker": "Man",
        "text": "Hmm.",
        "vietnamese": "Ừm."
      },
      {
        "id": "p3-68-9",
        "speaker": "Woman",
        "text": "That product's currently out of stock.",
        "vietnamese": "Sản phẩm đó hiện đã hết hàng."
      },
      {
        "id": "p3-68-10",
        "speaker": "Man",
        "text": "Can I recommend the Reenium 60 instead?",
        "vietnamese": "Tôi có thể giới thiệu Reenium 60 thay thế không?"
      },
      {
        "id": "p3-68-11",
        "speaker": "Woman",
        "text": "It's a popular model.",
        "vietnamese": "Đó là một mô hình phổ biến."
      },
      {
        "id": "p3-68-12",
        "speaker": "Man",
        "text": "I really need the Enzo 5000.",
        "vietnamese": "Tôi thực sự cần Enzo 5000."
      },
      {
        "id": "p3-68-13",
        "speaker": "Woman",
        "text": "I'm an artist and I make my own prints.",
        "vietnamese": "Tôi là một nghệ sĩ và tôi tự tạo ra những bức tranh của riêng mình."
      },
      {
        "id": "p3-68-14",
        "speaker": "Man",
        "text": "So I need a model that produces top quality images.",
        "vietnamese": "Vì vậy, tôi cần một mô hình tạo ra hình ảnh chất lượng hàng đầu."
      },
      {
        "id": "p3-68-15",
        "speaker": "Woman",
        "text": "I see.",
        "vietnamese": "Tôi hiểu rồi."
      },
      {
        "id": "p3-68-16",
        "speaker": "Man",
        "text": "Well, we're expecting a shipment tomorrow.",
        "vietnamese": "Vâng, chúng tôi đang mong đợi một chuyến hàng vào ngày mai."
      },
      {
        "id": "p3-68-17",
        "speaker": "Woman",
        "text": "If it includes the model you're looking for, I can reserve it for you.",
        "vietnamese": "Nếu nó bao gồm mẫu bạn đang tìm kiếm, tôi có thể đặt trước cho bạn."
      }
    ],
    "questions": [
      {
        "num": 68,
        "question": "Why does the woman call?",
        "vietnameseQuestion": "Tại sao người phụ nữ lại gọi?",
        "options": [
          {
            "key": "A",
            "text": "She wants to request a refund.",
            "vietnamese": "Cô ấy muốn yêu cầu hoàn lại tiền."
          },
          {
            "key": "B",
            "text": "She is unable to place an order online.",
            "vietnamese": "Cô ấy không thể đặt hàng trực tuyến."
          },
          {
            "key": "C",
            "text": "She wants to extend a deadline.",
            "vietnamese": "Cô ấy muốn gia hạn thời hạn."
          },
          {
            "key": "D",
            "text": "She is unhappy with a product purchased recently.",
            "vietnamese": "Cô ấy không hài lòng với sản phẩm mới mua gần đây."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"She is unable to place an order online.\" (Cô ấy không thể đặt hàng trực tuyến.)."
      },
      {
        "num": 69,
        "question": "Look at the graphic. What is the price of the item the woman wants to buy?",
        "vietnameseQuestion": "Nhìn vào đồ họa. Giá của món đồ người phụ nữ muốn mua là bao nhiêu?",
        "options": [
          {
            "key": "A",
            "text": "$169.99",
            "vietnamese": "$169,99"
          },
          {
            "key": "B",
            "text": "$149.99",
            "vietnamese": "$149,99"
          },
          {
            "key": "C",
            "text": "$129.99",
            "vietnamese": "$129,99"
          },
          {
            "key": "D",
            "text": "$179.99",
            "vietnamese": "$179,99"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là (D): \"$179.99\" ($179,99)."
      },
      {
        "num": 70,
        "question": "What will the man most likely do tomorrow?",
        "vietnameseQuestion": "Người đàn ông có nhiều khả năng sẽ làm gì vào ngày mai?",
        "options": [
          {
            "key": "A",
            "text": "Update a Web site",
            "vietnamese": "Cập nhật một trang Web"
          },
          {
            "key": "B",
            "text": "Search a storage area",
            "vietnamese": "Tìm kiếm khu vực lưu trữ"
          },
          {
            "key": "C",
            "text": "Contact another store location",
            "vietnamese": "Liên hệ với địa điểm cửa hàng khác"
          },
          {
            "key": "D",
            "text": "Check an incoming shipment",
            "vietnamese": "Kiểm tra lô hàng đến"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là (D): \"Check an incoming shipment\" (Kiểm tra lô hàng đến)."
      }
    ],
    "vocabulary": [
      {
        "word": "store",
        "meaning": "lưu trữ, cất giữ",
        "partOfSpeech": "n"
      },
      {
        "word": "order",
        "meaning": "gọi món, đặt hàng",
        "partOfSpeech": "v"
      },
      {
        "word": "checkout",
        "meaning": "quầy thanh toán, thủ tục thanh toán",
        "partOfSpeech": "n"
      },
      {
        "word": "screen",
        "meaning": "lưới chắn cửa sổ, màng chắn",
        "partOfSpeech": "n"
      }
    ],
    "graphicImage": "/images/intensive/test1_2023/q68_70.png"
  },
  {
    "id": "part4-71-73",
    "part": 4,
    "partTitle": "Part 4: Bài nói chuyện",
    "questionRange": "Câu 71 - 73",
    "title": "Part 4 - Câu 71 - 73: ,Người nói nhấn mạnh đặc điểm nào của một doanh nghiệp",
    "audioSrc": "/audio/test1_2023.mp3",
    "startTime": 1920.94,
    "endTime": 2002.17,
    "transcript": [
      {
        "id": "p4-71-1",
        "speaker": "Speaker",
        "text": "Attention all film lovers.",
        "vietnamese": "Tất cả những người yêu thích phim chú ý."
      },
      {
        "id": "p4-71-2",
        "speaker": "Speaker",
        "text": "The Braden cinema has just opened.",
        "vietnamese": "Rạp chiếu phim Braden vừa khai trương."
      },
      {
        "id": "p4-71-3",
        "speaker": "Speaker",
        "text": "Its interior is designed to resemble the classic cinemas from the 1920s.",
        "vietnamese": "Nội thất của nó được thiết kế giống với các rạp chiếu phim cổ điển từ những năm 1920."
      },
      {
        "id": "p4-71-4",
        "speaker": "Speaker",
        "text": "It offers comfortable reclining seats and individual tray tables for food and drinks.",
        "vietnamese": "Nó có ghế ngả lưng thoải mái và bàn khay riêng để đựng đồ ăn và đồ uống."
      },
      {
        "id": "p4-71-5",
        "speaker": "Speaker",
        "text": "The grand opening is next week and will feature showings of classic films from different eras.",
        "vietnamese": "Lễ khai mạc diễn ra vào tuần tới và sẽ chiếu các bộ phim kinh điển từ các thời đại khác nhau."
      },
      {
        "id": "p4-71-6",
        "speaker": "Speaker",
        "text": "And here's good advice.",
        "vietnamese": "Và đây là lời khuyên tốt."
      },
      {
        "id": "p4-71-7",
        "speaker": "Speaker",
        "text": "To avoid traffic in the city center, the Braden cinema is easily reached by writing the train to center station.",
        "vietnamese": "Để tránh giao thông ở trung tâm thành phố, bạn có thể dễ dàng đến rạp chiếu phim Braden bằng cách bắt tàu đến ga trung tâm."
      }
    ],
    "questions": [
      {
        "num": 71,
        "question": ",Whatfeature of a business does the speaker emphasize?",
        "vietnameseQuestion": ",Người nói nhấn mạnh đặc điểm nào của một doanh nghiệp?",
        "options": [
          {
            "key": "A",
            "text": "The quality of its food",
            "vietnamese": "Chất lượng thức ăn của nó"
          },
          {
            "key": "B",
            "text": "The extended hours it is open",
            "vietnamese": "Giờ mở cửa kéo dài"
          },
          {
            "key": "C",
            "text": "The style of its decor",
            "vietnamese": "Phong cách trang trí của nó"
          },
          {
            "key": "D",
            "text": "The affordable prices it offers",
            "vietnamese": "Giá cả phải chăng mà nó cung cấp"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"The style of its decor\" (Phong cách trang trí của nó)."
      },
      {
        "num": 72,
        "question": "What can attendees do at the grand opening event?",
        "vietnameseQuestion": "Người tham dự có thể làm gì tại sự kiện khai trương?",
        "options": [
          {
            "key": "A",
            "text": "Go on a tour",
            "vietnamese": "Đi tham quan"
          },
          {
            "key": "B",
            "text": "Get a free gift",
            "vietnamese": "Nhận quà tặng miễn phí"
          },
          {
            "key": "C",
            "text": "Talk to an actor",
            "vietnamese": "Nói chuyện với một diễn viên"
          },
          {
            "key": "D",
            "text": "Watch some movies",
            "vietnamese": "Xem một số phim"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là (D): \"Watch some movies\" (Xem một số phim)."
      },
      {
        "num": 73,
        "question": "What does the speaker advise event attendees to do?",
        "vietnameseQuestion": "Diễn giả khuyên người tham dự sự kiện nên làm gì?",
        "options": [
          {
            "key": "A",
            "text": "Arrive early",
            "vietnamese": "Đến sớm"
          },
          {
            "key": "B",
            "text": "Usepublic transportation",
            "vietnamese": "Sử dụng phương tiện công cộng"
          },
          {
            "key": "C",
            "text": "Order tickets in advance",
            "vietnamese": "Đặt vé trước"
          },
          {
            "key": "D",
            "text": "Purchase a membership",
            "vietnamese": "Mua tư cách thành viên"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"Usepublic transportation\" (Sử dụng phương tiện công cộng)."
      }
    ],
    "vocabulary": [
      {
        "word": "tray",
        "meaning": "khay bưng đồ ăn thức uống",
        "partOfSpeech": "n"
      },
      {
        "word": "opening",
        "meaning": "chỗ trống, phòng trống",
        "partOfSpeech": "n"
      },
      {
        "word": "traffic",
        "meaning": "giao thông, xe cộ trên đường",
        "partOfSpeech": "n"
      },
      {
        "word": "train",
        "meaning": "đào tạo, huấn luyện",
        "partOfSpeech": "v"
      }
    ]
  },
  {
    "id": "part4-74-76",
    "part": 4,
    "partTitle": "Part 4: Bài nói chuyện",
    "questionRange": "Câu 74 - 76",
    "title": "Part 4 - Câu 74 - 76: Người nghe muốn làm gì",
    "audioSrc": "/audio/test1_2023.mp3",
    "startTime": 2002.17,
    "endTime": 2073.52,
    "transcript": [
      {
        "id": "p4-74-1",
        "speaker": "Speaker",
        "text": "Hi, this is Abdi calling from the Springtown Hotel Reservation Desk.",
        "vietnamese": "Xin chào, đây là Abdi đang gọi từ Bàn đặt phòng khách sạn Springtown."
      },
      {
        "id": "p4-74-2",
        "speaker": "Speaker",
        "text": "We received your email regarding your upcoming reservation.",
        "vietnamese": "Chúng tôi đã nhận được email của bạn về đặt phòng sắp tới của bạn."
      },
      {
        "id": "p4-74-3",
        "speaker": "Speaker",
        "text": "I see that you ask to move to a room facing the ocean.",
        "vietnamese": "Tôi thấy bạn yêu cầu chuyển đến một căn phòng hướng ra biển."
      },
      {
        "id": "p4-74-4",
        "speaker": "Speaker",
        "text": "We make every effort to accommodate such requests,",
        "vietnamese": "Chúng tôi cố gắng hết sức để đáp ứng những yêu cầu đó,"
      },
      {
        "id": "p4-74-5",
        "speaker": "Speaker",
        "text": "and those rooms are always booked far in advance.",
        "vietnamese": "và những phòng đó luôn được đặt trước rất lâu."
      },
      {
        "id": "p4-74-6",
        "speaker": "Speaker",
        "text": "Your current room, though, has a lovely view of our garden, which we think you will quite enjoy this time of year.",
        "vietnamese": "Tuy nhiên, căn phòng hiện tại của bạn có tầm nhìn tuyệt đẹp ra khu vườn của chúng tôi, chúng tôi nghĩ bạn sẽ khá thích thú vào thời điểm này trong năm."
      },
      {
        "id": "p4-74-7",
        "speaker": "Speaker",
        "text": "And don't forget to bring your swimming suit.",
        "vietnamese": "Và đừng quên mang theo đồ bơi nhé."
      },
      {
        "id": "p4-74-8",
        "speaker": "Speaker",
        "text": "Our new pool will be open for the first time this weekend.",
        "vietnamese": "Hồ bơi mới của chúng tôi sẽ mở cửa lần đầu tiên vào cuối tuần này."
      }
    ],
    "questions": [
      {
        "num": 74,
        "question": "What does the listener want to do?",
        "vietnameseQuestion": "Người nghe muốn làm gì?",
        "options": [
          {
            "key": "A",
            "text": "Request shuttle service",
            "vietnamese": "Yêu cầu dịch vụ đưa đón"
          },
          {
            "key": "B",
            "text": "Extend a hotel stay",
            "vietnamese": "Kéo dài thời gian lưu trú tại khách sạn"
          },
          {
            "key": "C",
            "text": "Change a room assignment",
            "vietnamese": "Thay đổi nhiệm vụ phòng"
          },
          {
            "key": "D",
            "text": "Cancel a reservation",
            "vietnamese": "Hủy đặt chỗ"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"Change a room assignment\" (Thay đổi nhiệm vụ phòng)."
      },
      {
        "num": 75,
        "question": "Why does the speaker say,\"thoserooms are alwaysbooked far inadvance\"?",
        "vietnameseQuestion": "Tại sao người nói nói, \"những phòng đó luôn được đặt trước rất lâu\"?",
        "options": [
          {
            "key": "A",
            "text": "To express approval for a room design",
            "vietnamese": "Để thể hiện sự chấp thuận cho một thiết kế phòng"
          },
          {
            "key": "B",
            "text": "To explain why a hotel is successful",
            "vietnamese": "Để giải thích tại sao một khách sạn lại thành công"
          },
          {
            "key": "C",
            "text": "To indicate his disbelief",
            "vietnamese": "Để biểu thị sự hoài nghi của anh ấy"
          },
          {
            "key": "D",
            "text": "To deny the listener's request",
            "vietnamese": "Từ chối yêu cầu của người nghe"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là (D): \"To deny the listener's request\" (Từ chối yêu cầu của người nghe)."
      },
      {
        "num": 76,
        "question": "According to the speaker, what should the listener bring?",
        "vietnameseQuestion": "Theo người nói, người nghe nên mang theo những gì?",
        "options": [
          {
            "key": "A",
            "text": "Some warm clothes",
            "vietnamese": "Một số quần áo ấm"
          },
          {
            "key": "B",
            "text": "Some swimwear",
            "vietnamese": "Một số đồ bơi"
          },
          {
            "key": "C",
            "text": "A credit card",
            "vietnamese": "Thẻ tín dụng"
          },
          {
            "key": "D",
            "text": "Acopy of a key ES",
            "vietnamese": "Bản sao chìa khóa ES"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"Some swimwear\" (Một số đồ bơi)."
      }
    ],
    "vocabulary": [
      {
        "word": "reservation",
        "meaning": "sự đặt chỗ, đặt phòng trước",
        "partOfSpeech": "n"
      },
      {
        "word": "upcoming",
        "meaning": "sắp tới",
        "partOfSpeech": "adj"
      },
      {
        "word": "accommodate",
        "meaning": "chứa được, đáp ứng được",
        "partOfSpeech": "v"
      },
      {
        "word": "view",
        "meaning": "tầm nhìn, hướng cảnh quan",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part4-77-79",
    "part": 4,
    "partTitle": "Part 4: Bài nói chuyện",
    "questionRange": "Câu 77 - 79",
    "title": "Part 4 - Câu 77 - 79: Người nói rất có thể là ai",
    "audioSrc": "/audio/test1_2023.mp3",
    "startTime": 2073.52,
    "endTime": 2158.3,
    "transcript": [
      {
        "id": "p4-77-1",
        "speaker": "Speaker",
        "text": "Good morning, volunteers.",
        "vietnamese": "Chào buổi sáng các tình nguyện viên."
      },
      {
        "id": "p4-77-2",
        "speaker": "Speaker",
        "text": "My name is Lisa Campbell.",
        "vietnamese": "Tên tôi là Lisa Campbell."
      },
      {
        "id": "p4-77-3",
        "speaker": "Speaker",
        "text": "Thank you for coming today to help us maintain the natural habitat here at the Blue Mountain Forest Preserve.",
        "vietnamese": "Cảm ơn bạn đã đến hôm nay để giúp chúng tôi duy trì môi trường sống tự nhiên tại Khu bảo tồn Rừng Blue Mountain."
      },
      {
        "id": "p4-77-4",
        "speaker": "Speaker",
        "text": "Forest conservation is so important.",
        "vietnamese": "Việc bảo tồn rừng là rất quan trọng."
      },
      {
        "id": "p4-77-5",
        "speaker": "Speaker",
        "text": "Since this is your first day, I'll cover some of the basics.",
        "vietnamese": "Vì đây là ngày đầu tiên của bạn nên tôi sẽ trình bày một số điều cơ bản."
      },
      {
        "id": "p4-77-6",
        "speaker": "Speaker",
        "text": "I advise you to always carry water with you.",
        "vietnamese": "Tôi khuyên bạn nên luôn mang theo nước bên mình."
      },
      {
        "id": "p4-77-7",
        "speaker": "Speaker",
        "text": "We have refillable bottles, and everyone is welcome to take one as a gift from us at the Forest Preserve.",
        "vietnamese": "Chúng tôi có những chai có thể đổ lại và mọi người đều có thể nhận một chai làm quà từ chúng tôi tại Khu bảo tồn Rừng."
      },
      {
        "id": "p4-77-8",
        "speaker": "Speaker",
        "text": "It can get hot in the afternoon, so staying hydrated is important.",
        "vietnamese": "Trời có thể nóng vào buổi chiều, vì vậy việc giữ nước là điều quan trọng."
      },
      {
        "id": "p4-77-9",
        "speaker": "Speaker",
        "text": "Now, if you follow me, I'll show you the steps for planting young tree saplings to support biodiversity.",
        "vietnamese": "Bây giờ, nếu bạn theo dõi tôi, tôi sẽ chỉ cho bạn các bước trồng cây non để hỗ trợ đa dạng sinh học."
      }
    ],
    "questions": [
      {
        "num": 77,
        "question": "Who most likely is the speaker?",
        "vietnameseQuestion": "Người nói rất có thể là ai?",
        "options": [
          {
            "key": "A",
            "text": "An archaeologist",
            "vietnamese": "Một nhà khảo cổ học"
          },
          {
            "key": "B",
            "text": "A marine biologist",
            "vietnamese": "Nhà sinh vật biển"
          },
          {
            "key": "C",
            "text": "A conservation expert",
            "vietnamese": "Chuyên gia bảo tồn"
          },
          {
            "key": "D",
            "text": "An athletic trainer",
            "vietnamese": "Một huấn luyện viên thể thao"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"A conservation expert\" (Chuyên gia bảo tồn)."
      },
      {
        "num": 78,
        "question": "What does the speaker advise the listeners to do?",
        "vietnameseQuestion": "Người nói khuyên người nghe làm gì?",
        "options": [
          {
            "key": "A",
            "text": "Take a water bottle",
            "vietnamese": "Lấy một chai nước"
          },
          {
            "key": "B",
            "text": "Consult a site map",
            "vietnamese": "Tham khảo sơ đồ trang web"
          },
          {
            "key": "C",
            "text": "Apply sunscreen regularly",
            "vietnamese": "Thoa kem chống nắng thường xuyên"
          },
          {
            "key": "D",
            "text": "Write careful notes",
            "vietnamese": "Viết ghi chú cẩn thận"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là (A): \"Take a water bottle\" (Lấy một chai nước)."
      },
      {
        "num": 79,
        "question": "What does the speaker say she is going to do next?",
        "vietnameseQuestion": "Người nói nói cô ấy sẽ làm gì tiếp theo?",
        "options": [
          {
            "key": "A",
            "text": "Answer some questions",
            "vietnamese": "Trả lời một số câu hỏi"
          },
          {
            "key": "B",
            "text": "Demonstrate a process",
            "vietnamese": "Chứng minh một quá trình"
          },
          {
            "key": "C",
            "text": "Introduce a colleague",
            "vietnamese": "Giới thiệu đồng nghiệp"
          },
          {
            "key": "D",
            "text": "Take the listeners to lunch",
            "vietnamese": "Đưa thính giả đi ăn trưa"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"Demonstrate a process\" (Chứng minh một quá trình)."
      }
    ],
    "vocabulary": [
      {
        "word": "cover",
        "meaning": "đưa tin (báo chí)",
        "partOfSpeech": "v"
      },
      {
        "word": "carry",
        "meaning": "mang, xách, chở",
        "partOfSpeech": "v"
      },
      {
        "word": "water",
        "meaning": "tưới nước",
        "partOfSpeech": "v"
      },
      {
        "word": "gift",
        "meaning": "món quà",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part4-80-82",
    "part": 4,
    "partTitle": "Part 4: Bài nói chuyện",
    "questionRange": "Câu 80 - 82",
    "title": "Part 4 - Câu 80 - 82: Tại sao người nói sẽ đi du lịch",
    "audioSrc": "/audio/test1_2023.mp3",
    "startTime": 2158.3,
    "endTime": 2239.46,
    "transcript": [
      {
        "id": "p4-80-1",
        "speaker": "Speaker",
        "text": "Hello.",
        "vietnamese": "Xin chào."
      },
      {
        "id": "p4-80-2",
        "speaker": "Speaker",
        "text": "I'm calling about the financial management workshop that your company is hosting later this week.",
        "vietnamese": "Tôi đang gọi điện để thông báo về hội thảo quản lý tài chính mà công ty bạn sẽ tổ chức vào cuối tuần này."
      },
      {
        "id": "p4-80-3",
        "speaker": "Speaker",
        "text": "I'm with the Arch-Tawn group.",
        "vietnamese": "Tôi thuộc nhóm Arch-Tawn."
      },
      {
        "id": "p4-80-4",
        "speaker": "Speaker",
        "text": "We registered for the workshop over a month ago.",
        "vietnamese": "Chúng tôi đã đăng ký tham gia workshop hơn một tháng trước."
      },
      {
        "id": "p4-80-5",
        "speaker": "Speaker",
        "text": "I realized that we never received the meal vouchers that are supposed to be part of the workshop package.",
        "vietnamese": "Tôi nhận ra rằng chúng tôi chưa bao giờ nhận được phiếu ăn uống được cho là một phần của gói hội thảo."
      },
      {
        "id": "p4-80-6",
        "speaker": "Speaker",
        "text": "We need these because we have 10 people attending, and we are travelling long distance to attend the conference.",
        "vietnamese": "Chúng tôi cần những thứ này vì chúng tôi có 10 người tham dự và chúng tôi đang di chuyển rất xa để tham dự hội nghị."
      },
      {
        "id": "p4-80-7",
        "speaker": "Speaker",
        "text": "Would you please send me an email with the meal vouchers included as an attachment as soon as you can?",
        "vietnamese": "Bạn vui lòng gửi cho tôi một email có đính kèm phiếu ăn uống ngay khi có thể được không?"
      },
      {
        "id": "p4-80-8",
        "speaker": "Speaker",
        "text": "Thank you.",
        "vietnamese": "Cảm ơn."
      }
    ],
    "questions": [
      {
        "num": 80,
        "question": "Why will the speaker be traveling?",
        "vietnameseQuestion": "Tại sao người nói sẽ đi du lịch?",
        "options": [
          {
            "key": "A",
            "text": "To inspect a factory",
            "vietnamese": "Để kiểm tra một nhà máy"
          },
          {
            "key": "B",
            "text": "To repair a product",
            "vietnamese": "Để sửa chữa một sản phẩm"
          },
          {
            "key": "C",
            "text": "To perform in a concert",
            "vietnamese": "Để biểu diễn trong một buổi hòa nhạc"
          },
          {
            "key": "D",
            "text": "To attend a workshop",
            "vietnamese": "Để tham dự một hội thảo"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là (D): \"To attend a workshop\" (Để tham dự một hội thảo)."
      },
      {
        "num": 81,
        "question": "Why is the speaker concerned?",
        "vietnameseQuestion": "Tại sao người nói lại quan tâm?",
        "options": [
          {
            "key": "A",
            "text": "A seating arrangement is wrong.",
            "vietnamese": "Việc sắp xếp chỗ ngồi là sai."
          },
          {
            "key": "B",
            "text": "A company credit card was not charged.",
            "vietnamese": "Thẻ tín dụng của công ty không bị tính phí."
          },
          {
            "key": "C",
            "text": "Some meal tickets were not sent.",
            "vietnamese": "Một số vé ăn đã không được gửi."
          },
          {
            "key": "D",
            "text": "Her taxi driver is unable to find a hotel.",
            "vietnamese": "Tài xế taxi của cô không thể tìm được khách sạn."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"Some meal tickets were not sent.\" (Một số vé ăn đã không được gửi.)."
      },
      {
        "num": 82,
        "question": "What does the speaker ask the listenerto do?",
        "vietnameseQuestion": "Người nói yêu cầu người nghe làm gì?",
        "options": [
          {
            "key": "A",
            "text": "Send an e-mail",
            "vietnamese": "Gửi e-mail"
          },
          {
            "key": "B",
            "text": "Meet at an office",
            "vietnamese": "Gặp nhau ở văn phòng"
          },
          {
            "key": "C",
            "text": "Confirm a schedule",
            "vietnamese": "Xác nhận lịch trình"
          },
          {
            "key": "D",
            "text": "Look up an account number GOONTOTHENEXTPAGE TEST129",
            "vietnamese": "Tra cứu số tài khoản GONTOTHENEXTPAGE TEST129"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là (A): \"Send an e-mail\" (Gửi e-mail)."
      }
    ],
    "vocabulary": [
      {
        "word": "management",
        "meaning": "ban quản lý",
        "partOfSpeech": "n"
      },
      {
        "word": "workshop",
        "meaning": "buổi hội thảo chuyên đề, khóa đào tạo thực hành",
        "partOfSpeech": "n"
      },
      {
        "word": "part",
        "meaning": "phụ tùng, linh kiện máy móc",
        "partOfSpeech": "n"
      },
      {
        "word": "package",
        "meaning": "bưu kiện, gói hàng",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part4-83-85",
    "part": 4,
    "partTitle": "Part 4: Bài nói chuyện",
    "questionRange": "Câu 83 - 85",
    "title": "Part 4 - Câu 83 - 85: Người nói nhắc người nghe làm gì",
    "audioSrc": "/audio/test1_2023.mp3",
    "startTime": 2239.46,
    "endTime": 2318.17,
    "transcript": [
      {
        "id": "p4-83-1",
        "speaker": "Speaker",
        "text": "This is the end of our tour.",
        "vietnamese": "Đây là sự kết thúc của chuyến tham quan của chúng tôi."
      },
      {
        "id": "p4-83-2",
        "speaker": "Speaker",
        "text": "Thank you for coming to the Oton Garden Collective.",
        "vietnamese": "Cảm ơn bạn đã đến với Oton Garden Collective."
      },
      {
        "id": "p4-83-3",
        "speaker": "Speaker",
        "text": "I hope you've learned a lot about urban gardening.",
        "vietnamese": "Tôi hy vọng bạn đã học được nhiều điều về làm vườn đô thị."
      },
      {
        "id": "p4-83-4",
        "speaker": "Speaker",
        "text": "Feel free to spend more time looking around.",
        "vietnamese": "Hãy dành nhiều thời gian hơn để nhìn xung quanh."
      },
      {
        "id": "p4-83-5",
        "speaker": "Speaker",
        "text": "Don't forget to pick up your free vegetable seedling before you leave.",
        "vietnamese": "Đừng quên nhặt cây giống rau miễn phí trước khi rời đi."
      },
      {
        "id": "p4-83-6",
        "speaker": "Speaker",
        "text": "You can choose a cucumber plant or a tomato plant.",
        "vietnamese": "Bạn có thể chọn cây dưa chuột hoặc cây cà chua."
      },
      {
        "id": "p4-83-7",
        "speaker": "Speaker",
        "text": "Also, if you'd like to have your own garden plot next spring, applications are now available.",
        "vietnamese": "Ngoài ra, nếu bạn muốn có mảnh vườn của riêng mình vào mùa xuân tới, đơn đăng ký hiện đã có sẵn."
      },
      {
        "id": "p4-83-8",
        "speaker": "Speaker",
        "text": "You'll get a plot for just a small fee.",
        "vietnamese": "Bạn sẽ nhận được một lô đất chỉ với một khoản phí nhỏ."
      },
      {
        "id": "p4-83-9",
        "speaker": "Speaker",
        "text": "We have many other fun activities listed in our monthly newsletter.",
        "vietnamese": "Chúng tôi có nhiều hoạt động thú vị khác được liệt kê trong bản tin hàng tháng của chúng tôi."
      },
      {
        "id": "p4-83-10",
        "speaker": "Speaker",
        "text": "Consider joining our email list to receive these monthly updates about upcoming events.",
        "vietnamese": "Hãy cân nhắc tham gia danh sách email của chúng tôi để nhận những cập nhật hàng tháng này về các sự kiện sắp tới."
      }
    ],
    "questions": [
      {
        "num": 83,
        "question": "Whatdoesthespeakerremindthe listeners to do?",
        "vietnameseQuestion": "Người nói nhắc người nghe làm gì?",
        "options": [
          {
            "key": "A",
            "text": "Keep a gate closed",
            "vietnamese": "Giữ một cánh cổng đóng lại"
          },
          {
            "key": "B",
            "text": "Return equipment to a shed",
            "vietnamese": "Trả thiết bị về kho"
          },
          {
            "key": "C",
            "text": "Checka list of supplies",
            "vietnamese": "Kiểm tra danh sách vật tư"
          },
          {
            "key": "D",
            "text": "Select a free gift",
            "vietnamese": "Chọn một món quà miễn phí"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là (D): \"Select a free gift\" (Chọn một món quà miễn phí)."
      },
      {
        "num": 84,
        "question": "According to the speaker, what can the listeners apply for?",
        "vietnameseQuestion": "Theo người nói, người nghe có thể yêu cầu điều gì?",
        "options": [
          {
            "key": "A",
            "text": "A garden plot",
            "vietnamese": "Một mảnh vườn"
          },
          {
            "key": "B",
            "text": "A volunteer opportunity",
            "vietnamese": "Một cơ hội tình nguyện"
          },
          {
            "key": "C",
            "text": "Agardening workshop",
            "vietnamese": "Xưởng làm vườn"
          },
          {
            "key": "D",
            "text": "Afarmers markettable",
            "vietnamese": "Bàn chợ nông dân"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là (A): \"A garden plot\" (Một mảnh vườn)."
      },
      {
        "num": 85,
        "question": "How can the listeners get information about future events?",
        "vietnameseQuestion": "Làm thế nào người nghe có thể nhận được thông tin về các sự kiện trong tương lai?",
        "options": [
          {
            "key": "A",
            "text": "By signing up for a newsletter",
            "vietnamese": "Bằng cách đăng ký nhận bản tin"
          },
          {
            "key": "B",
            "text": "By joininga membershipprogram",
            "vietnamese": "Bằng cách tham gia một chương trình thành viên"
          },
          {
            "key": "C",
            "text": "By looking at a Web site",
            "vietnamese": "Bằng cách nhìn vào một trang Web"
          },
          {
            "key": "D",
            "text": "By attending weekly meetings",
            "vietnamese": "Bằng cách tham dự các cuộc họp hàng tuần"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là (A): \"By signing up for a newsletter\" (Bằng cách đăng ký nhận bản tin)."
      }
    ],
    "vocabulary": [
      {
        "word": "tour",
        "meaning": "chuyến tham quan, dẫn đi xem",
        "partOfSpeech": "n/v"
      },
      {
        "word": "free",
        "meaning": "rảnh rỗi, không bận",
        "partOfSpeech": "adj"
      },
      {
        "word": "seedling",
        "meaning": "cây giống con",
        "partOfSpeech": "n"
      },
      {
        "word": "leave",
        "meaning": "rời đi, nghỉ việc",
        "partOfSpeech": "v"
      }
    ]
  },
  {
    "id": "part4-86-88",
    "part": 4,
    "partTitle": "Part 4: Bài nói chuyện",
    "questionRange": "Câu 86 - 88",
    "title": "Part 4 - Câu 86 - 88: Doanh nghiệp cung cấp dịch vụ gì",
    "audioSrc": "/audio/test1_2023.mp3",
    "startTime": 2318.17,
    "endTime": 2401.82,
    "transcript": [
      {
        "id": "p4-86-1",
        "speaker": "Speaker",
        "text": "Have you developed the perfect product but to ensure how to reach more customers?",
        "vietnamese": "Bạn đã phát triển được sản phẩm hoàn hảo nhưng vẫn đảm bảo làm thế nào để tiếp cận được nhiều khách hàng hơn?"
      },
      {
        "id": "p4-86-2",
        "speaker": "Speaker",
        "text": "At whole planet marketing, our team of expert digital marketers is ready to help you reach your target audience.",
        "vietnamese": "Tại Whole Planet Marketing, đội ngũ chuyên gia tiếp thị kỹ thuật số của chúng tôi sẵn sàng giúp bạn tiếp cận đối tượng mục tiêu của mình."
      },
      {
        "id": "p4-86-3",
        "speaker": "Speaker",
        "text": "Unlike other marketing firms, we'll connect you with a digital marketer who work with you individually.",
        "vietnamese": "Không giống như các công ty tiếp thị khác, chúng tôi sẽ kết nối bạn với một nhà tiếp thị kỹ thuật số làm việc riêng với bạn."
      },
      {
        "id": "p4-86-4",
        "speaker": "Speaker",
        "text": "During your one-on-one meetings, you'll develop a marketing plan that will draw in customers.",
        "vietnamese": "Trong các cuộc gặp riêng, bạn sẽ phát triển một kế hoạch tiếp thị để thu hút khách hàng."
      },
      {
        "id": "p4-86-5",
        "speaker": "Speaker",
        "text": "Just go to wholeplanetmarketing.com today to complete a brief questionnaire,",
        "vietnamese": "Chỉ cần truy cập Wholeplanetmarketing.com ngay hôm nay để hoàn thành một bảng câu hỏi ngắn gọn,"
      },
      {
        "id": "p4-86-6",
        "speaker": "Speaker",
        "text": "then one of our specialists will contact you to make an appointment for a free proposal.",
        "vietnamese": "sau đó một trong những chuyên gia của chúng tôi sẽ liên hệ với bạn để đặt lịch hẹn nhận đề xuất miễn phí."
      },
      {
        "id": "p4-86-7",
        "speaker": "Speaker",
        "text": "Let whole planet marketing bring customers to you.",
        "vietnamese": "Hãy để hoạt động tiếp thị toàn cầu mang khách hàng đến với bạn."
      }
    ],
    "questions": [
      {
        "num": 86,
        "question": "What service does the business offer?",
        "vietnameseQuestion": "Doanh nghiệp cung cấp dịch vụ gì?",
        "options": [
          {
            "key": "A",
            "text": "Financial planning",
            "vietnamese": "Lập kế hoạch tài chính"
          },
          {
            "key": "B",
            "text": "Digital marketing",
            "vietnamese": "Tiếp thị kỹ thuật số"
          },
          {
            "key": "C",
            "text": "Real estate sales",
            "vietnamese": "Bán bất động sản"
          },
          {
            "key": "D",
            "text": "International shipping",
            "vietnamese": "vận chuyển quốc tế"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"Digital marketing\" (Tiếp thị kỹ thuật số)."
      },
      {
        "num": 87,
        "question": "According to the speaker, how is the businessdifferentfrom its competitors?",
        "vietnameseQuestion": "Theo diễn giả, doanh nghiệp này khác với đối thủ cạnh tranh như thế nào?",
        "options": [
          {
            "key": "A",
            "text": "Ithas several local offices.",
            "vietnamese": "Nó có một số văn phòng địa phương."
          },
          {
            "key": "B",
            "text": "It offers a money-back guarantee.",
            "vietnamese": "Nó cung cấp một đảm bảo hoàn lại tiền."
          },
          {
            "key": "C",
            "text": "Its employees have industry certification.",
            "vietnamese": "Nhân viên của nó có chứng nhận ngành."
          },
          {
            "key": "D",
            "text": "Its employees work one-on-one with clients.",
            "vietnamese": "Nhân viên của nó làm việc trực tiếp với khách hàng."
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là (D): \"Its employees work one-on-one with clients.\" (Nhân viên của nó làm việc trực tiếp với khách hàng.)."
      },
      {
        "num": 88,
        "question": "How can the listeners make an appointment?",
        "vietnameseQuestion": "Làm thế nào người nghe có thể đặt lịch hẹn?",
        "options": [
          {
            "key": "A",
            "text": "By sending an e-mail",
            "vietnamese": "Bằng cách gửi e-mail"
          },
          {
            "key": "B",
            "text": "By calling customer service",
            "vietnamese": "Bằng cách gọi dịch vụ khách hàng"
          },
          {
            "key": "C",
            "text": "By flling out a questionnaire",
            "vietnamese": "Bằng cách điền vào một bảng câu hỏi"
          },
          {
            "key": "D",
            "text": "By sending a text message 30",
            "vietnamese": "Bằng cách gửi tin nhắn văn bản 30"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"By flling out a questionnaire\" (Bằng cách điền vào một bảng câu hỏi)."
      }
    ],
    "vocabulary": [
      {
        "word": "reach",
        "meaning": "với tay tới",
        "partOfSpeech": "v"
      },
      {
        "word": "complete",
        "meaning": "hoàn thành, kết thúc",
        "partOfSpeech": "v"
      },
      {
        "word": "contact",
        "meaning": "liên hệ, liên lạc",
        "partOfSpeech": "v"
      },
      {
        "word": "appointment",
        "meaning": "cuộc hẹn, lịch hẹn",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part4-89-91",
    "part": 4,
    "partTitle": "Part 4: Bài nói chuyện",
    "questionRange": "Câu 89 - 91",
    "title": "Part 4 - Câu 89 - 91: Ai có nhiều khả năng là người nghe nhất",
    "audioSrc": "/audio/test1_2023.mp3",
    "startTime": 2401.82,
    "endTime": 2496.79,
    "transcript": [
      {
        "id": "p4-89-1",
        "speaker": "Speaker",
        "text": "Hello everyone.",
        "vietnamese": "Xin chào mọi người."
      },
      {
        "id": "p4-89-2",
        "speaker": "Speaker",
        "text": "There's very exciting news for all of us here at the Ziegler Research Institute.",
        "vietnamese": "Có một tin rất thú vị dành cho tất cả chúng ta tại Viện Nghiên cứu Ziegler."
      },
      {
        "id": "p4-89-3",
        "speaker": "Speaker",
        "text": "We've just been awarded the Sugiyama Grant to support our research into aquatic ecosystems.",
        "vietnamese": "Chúng tôi vừa được trao Tài trợ Sugiyama để hỗ trợ nghiên cứu về hệ sinh thái dưới nước."
      },
      {
        "id": "p4-89-4",
        "speaker": "Speaker",
        "text": "We can now invest in state-of-the-art equipment to study the biodiversity of coral reefs.",
        "vietnamese": "Bây giờ chúng ta có thể đầu tư vào thiết bị hiện đại để nghiên cứu tính đa dạng sinh học của các rạn san hô."
      },
      {
        "id": "p4-89-5",
        "speaker": "Speaker",
        "text": "As you may know, the Sugiyama Foundation offers a variety of substantial grants each year.",
        "vietnamese": "Như bạn có thể biết, Quỹ Sugiyama cung cấp nhiều khoản tài trợ đáng kể mỗi năm."
      },
      {
        "id": "p4-89-6",
        "speaker": "Speaker",
        "text": "It's notable though that for this particular award, they received over 200 applications.",
        "vietnamese": "Điều đáng chú ý là đối với giải thưởng đặc biệt này, họ đã nhận được hơn 200 đơn đăng ký."
      },
      {
        "id": "p4-89-7",
        "speaker": "Speaker",
        "text": "Our work at the reefs will probably not begin for several months.",
        "vietnamese": "Công việc của chúng tôi tại các rạn san hô có thể sẽ không bắt đầu trong vài tháng tới."
      },
      {
        "id": "p4-89-8",
        "speaker": "Speaker",
        "text": "We still need to order the equipment, but I want to thank you for your efforts on the application.",
        "vietnamese": "Chúng tôi vẫn cần đặt mua thiết bị, nhưng tôi muốn cảm ơn bạn vì những nỗ lực của bạn trên ứng dụng."
      }
    ],
    "questions": [
      {
        "num": 89,
        "question": "Who most likely are the listeners?",
        "vietnameseQuestion": "Ai có nhiều khả năng là người nghe nhất?",
        "options": [
          {
            "key": "A",
            "text": "Marine biologists",
            "vietnamese": "Nhà sinh học biển"
          },
          {
            "key": "B",
            "text": "Museumdirectors",
            "vietnamese": "Giám đốc bảo tàng"
          },
          {
            "key": "C",
            "text": "Rare-book librarians",
            "vietnamese": "Thủ thư sách hiếm"
          },
          {
            "key": "D",
            "text": "Agricultural engineers",
            "vietnamese": "Kỹ sư nông nghiệp"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là (A): \"Marine biologists\" (Nhà sinh học biển)."
      },
      {
        "num": 90,
        "question": "What does the speaker mean when he says, \"they received over200 applications\"?",
        "vietnameseQuestion": "Người nói có ý gì khi nói \"họ đã nhận được hơn 200 đơn đăng ký\"?",
        "options": [
          {
            "key": "A",
            "text": "An opportunity is unlikely to occur.",
            "vietnamese": "Một cơ hội khó có thể xảy ra."
          },
          {
            "key": "B",
            "text": "An award is impressive.",
            "vietnamese": "Một giải thưởng thật ấn tượng."
          },
          {
            "key": "C",
            "text": "A decision will take longer than usual.",
            "vietnamese": "Một quyết định sẽ mất nhiều thời gian hơn bình thường."
          },
          {
            "key": "D",
            "text": "Acompetitorhasbeenvery successful.",
            "vietnamese": "Một đối thủ cạnh tranh đã rất thành công."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"An award is impressive.\" (Một giải thưởng thật ấn tượng.)."
      },
      {
        "num": 91,
        "question": "Why does the speaker say that work cannot begin right away?",
        "vietnameseQuestion": "Tại sao người nói nói rằng công việc không thể bắt đầu ngay lập tức?",
        "options": [
          {
            "key": "A",
            "text": "Additional funds are needed.",
            "vietnamese": "Cần có thêm vốn."
          },
          {
            "key": "B",
            "text": "Some special training is required.",
            "vietnamese": "Một số đào tạo đặc biệt là cần thiết."
          },
          {
            "key": "C",
            "text": "An application hastobe approved.",
            "vietnamese": "Một ứng dụng phải được phê duyệt."
          },
          {
            "key": "D",
            "text": "Some equipment needs to be ordered.",
            "vietnamese": "Một số thiết bị cần phải được đặt hàng."
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là (D): \"Some equipment needs to be ordered.\" (Một số thiết bị cần phải được đặt hàng.)."
      }
    ],
    "vocabulary": [
      {
        "word": "grant",
        "meaning": "khoản tài trợ, tiền trợ cấp",
        "partOfSpeech": "n"
      },
      {
        "word": "equipment",
        "meaning": "trang thiết bị máy móc",
        "partOfSpeech": "n"
      },
      {
        "word": "foundation",
        "meaning": "quỹ từ thiện, tổ chức",
        "partOfSpeech": "n"
      },
      {
        "word": "variety",
        "meaning": "giống loài, chủng loại",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part4-92-94",
    "part": 4,
    "partTitle": "Part 4: Bài nói chuyện",
    "questionRange": "Câu 92 - 94",
    "title": "Part 4 - Câu 92 - 94: Mục đích của cuộc nói chuyện là gì",
    "audioSrc": "/audio/test1_2023.mp3",
    "startTime": 2496.79,
    "endTime": 2580.47,
    "transcript": [
      {
        "id": "p4-92-1",
        "speaker": "Speaker",
        "text": "On behalf of one tech solar, I'd like to welcome you to our manufacturing facility and congratulate you on your employment here.",
        "vietnamese": "Thay mặt cho một công ty năng lượng mặt trời công nghệ, tôi muốn chào mừng bạn đến với cơ sở sản xuất của chúng tôi và chúc mừng bạn đã làm việc tại đây."
      },
      {
        "id": "p4-92-2",
        "speaker": "Speaker",
        "text": "I'm Yuri Yamakawa, and today I'll be leading this orientation for new hires.",
        "vietnamese": "Tôi là Yuri Yamakawa và hôm nay tôi sẽ hướng dẫn buổi định hướng này cho những nhân viên mới."
      },
      {
        "id": "p4-92-3",
        "speaker": "Speaker",
        "text": "We'll start with a video that provides an overview of the production process for the solar panels we make.",
        "vietnamese": "Chúng ta sẽ bắt đầu bằng một video cung cấp cái nhìn tổng quan về quy trình sản xuất các tấm pin mặt trời mà chúng tôi sản xuất."
      },
      {
        "id": "p4-92-4",
        "speaker": "Speaker",
        "text": "Then we'll tour the various areas of the factory, including the assembly line and the quality control inspection center.",
        "vietnamese": "Sau đó chúng ta sẽ tham quan các khu vực khác nhau của nhà máy, bao gồm dây chuyền lắp ráp và trung tâm kiểm tra kiểm soát chất lượng."
      },
      {
        "id": "p4-92-5",
        "speaker": "Speaker",
        "text": "After lunch, my colleague, Marie Co. Hara, will join you.",
        "vietnamese": "Sau bữa trưa, đồng nghiệp của tôi, Marie Co. Hara, sẽ tham gia cùng bạn."
      },
      {
        "id": "p4-92-6",
        "speaker": "Speaker",
        "text": "I have a consultation with a client.",
        "vietnamese": "Tôi có một cuộc tư vấn với một khách hàng."
      },
      {
        "id": "p4-92-7",
        "speaker": "Speaker",
        "text": "And now let's get started with a video.",
        "vietnamese": "Và bây giờ hãy bắt đầu với một video."
      }
    ],
    "questions": [
      {
        "num": 92,
        "question": "Whatis thepurpose of the talk?",
        "vietnameseQuestion": "Mục đích của cuộc nói chuyện là gì?",
        "options": [
          {
            "key": "A",
            "text": "To recognize outstanding achievements",
            "vietnamese": "Ghi nhận thành tích nổi bật"
          },
          {
            "key": "B",
            "text": "To introduce new products to the public",
            "vietnamese": "Để giới thiệu sản phẩm mới tới công chúng"
          },
          {
            "key": "C",
            "text": "To announce a manager's retirement",
            "vietnamese": "Thông báo về việc nghỉ hưu của người quản lý"
          },
          {
            "key": "D",
            "text": "To provide new employees with information",
            "vietnamese": "Để cung cấp thông tin cho nhân viên mới"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là (D): \"To provide new employees with information\" (Để cung cấp thông tin cho nhân viên mới)."
      },
      {
        "num": 93,
        "question": "Where is the talk taking place?",
        "vietnameseQuestion": "Cuộc trò chuyện diễn ra ở đâu?",
        "options": [
          {
            "key": "A",
            "text": "At a banquet hall",
            "vietnamese": "Tại một phòng tiệc"
          },
          {
            "key": "B",
            "text": "At a government building",
            "vietnamese": "Tại một tòa nhà chính phủ"
          },
          {
            "key": "C",
            "text": "At a factory",
            "vietnamese": "Tại một nhà máy"
          },
          {
            "key": "D",
            "text": "At a construction site",
            "vietnamese": "Tại một công trường xây dựng"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"At a factory\" (Tại một nhà máy)."
      },
      {
        "num": 94,
        "question": "Whatdoes the speaker mean when she says,\"I have a consultation with a client\"?",
        "vietnameseQuestion": "Người nói có ý gì khi nói \"Tôi đang có cuộc tư vấn với khách hàng\"?",
        "options": [
          {
            "key": "A",
            "text": "She needs to reschedule ameeting",
            "vietnamese": "Cô ấy cần phải lên lịch lại cuộc họp"
          },
          {
            "key": "B",
            "text": "She will not be with the listeners in the afternoon.",
            "vietnamese": "Cô ấy sẽ không ở cùng thính giả vào buổi chiều."
          },
          {
            "key": "C",
            "text": "A customer has just placed a large order.",
            "vietnamese": "Một khách hàng vừa đặt một đơn đặt hàng lớn."
          },
          {
            "key": "D",
            "text": "A marketing campaign will begin soon. RefrigeratorOptions Extra Stainless Ice Model Steel Maker Large SG-200 SG-250 XG-300 XG-350",
            "vietnamese": "Một chiến dịch tiếp thị sẽ sớm bắt đầu. Tủ lạnhTùy chọn Máy làm đá bằng thép không gỉ Extra SG-200 SG-250 XG-300 XG-350"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"She will not be with the listeners in the afternoon.\" (Cô ấy sẽ không ở cùng thính giả vào buổi chiều.)."
      }
    ],
    "vocabulary": [
      {
        "word": "manufacturing",
        "meaning": "sự chế tạo, sản xuất",
        "partOfSpeech": "n"
      },
      {
        "word": "facility",
        "meaning": "cơ sở vật chất",
        "partOfSpeech": "n"
      },
      {
        "word": "orientation",
        "meaning": "buổi định hướng, tập huấn nhập môn",
        "partOfSpeech": "n"
      },
      {
        "word": "overview",
        "meaning": "tổng quan",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part4-95-97",
    "part": 4,
    "partTitle": "Part 4: Bài nói chuyện",
    "questionRange": "Câu 95 - 97",
    "title": "Part 4 - Câu 95 - 97: Mục đích chính của cuộc gọi là gì",
    "audioSrc": "/audio/test1_2023.mp3",
    "startTime": 2580.47,
    "endTime": 2651.76,
    "transcript": [
      {
        "id": "p4-95-1",
        "speaker": "Speaker",
        "text": "Hi, this is Vino Dsing.",
        "vietnamese": "Xin chào, đây là Vino Dsing."
      },
      {
        "id": "p4-95-2",
        "speaker": "Speaker",
        "text": "I was in your store on Monday looking at refrigerators for my apartment.",
        "vietnamese": "Tôi đã đến cửa hàng của bạn vào thứ Hai để xem tủ lạnh cho căn hộ của tôi."
      },
      {
        "id": "p4-95-3",
        "speaker": "Speaker",
        "text": "One of your employees showed me what you haven't stalked.",
        "vietnamese": "Một trong những nhân viên của anh đã cho tôi xem thứ mà anh chưa theo đuổi."
      },
      {
        "id": "p4-95-4",
        "speaker": "Speaker",
        "text": "I've decided to go with the extra large refrigerator, the one with the stainless steel finish because it'll match the other appliances in my apartment.",
        "vietnamese": "Tôi đã quyết định chọn chiếc tủ lạnh cực lớn, chiếc có lớp hoàn thiện bằng thép không gỉ vì nó sẽ phù hợp với các thiết bị khác trong căn hộ của tôi."
      },
      {
        "id": "p4-95-5",
        "speaker": "Speaker",
        "text": "Oh, also, is there an additional charge for delivering outside of the downtown area?",
        "vietnamese": "Ngoài ra, giao hàng ngoài khu vực trung tâm có tính thêm phí không?"
      },
      {
        "id": "p4-95-6",
        "speaker": "Speaker",
        "text": "Please call me at 555-0130 so we can finalize the details.",
        "vietnamese": "Vui lòng gọi cho tôi theo số 555-0130 để chúng tôi có thể hoàn tất thông tin chi tiết."
      }
    ],
    "questions": [
      {
        "num": 95,
        "question": "What is the main purpose of the call?",
        "vietnameseQuestion": "Mục đích chính của cuộc gọi là gì?",
        "options": [
          {
            "key": "A",
            "text": "To place an order",
            "vietnamese": "Để đặt hàng"
          },
          {
            "key": "B",
            "text": "Todispute acharge",
            "vietnamese": "để tranh chấp phí"
          },
          {
            "key": "C",
            "text": "To arrange a meeting",
            "vietnamese": "Để sắp xếp một cuộc họp"
          },
          {
            "key": "D",
            "text": "To check a store's inventory",
            "vietnamese": "Để kiểm tra hàng tồn kho của cửa hàng"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là (A): \"To place an order\" (Để đặt hàng)."
      },
      {
        "num": 96,
        "question": "Look at the graphic. Which model does the speaker prefer?",
        "vietnameseQuestion": "Nhìn vào đồ họa. Diễn giả thích mẫu nào hơn?",
        "options": [
          {
            "key": "A",
            "text": "SG-200",
            "vietnamese": "SG-200"
          },
          {
            "key": "B",
            "text": "SG-250",
            "vietnamese": "SG-250"
          },
          {
            "key": "C",
            "text": "XG-300",
            "vietnamese": "XG-300"
          },
          {
            "key": "D",
            "text": "XG-350",
            "vietnamese": "XG-350"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là (D): \"XG-350\" (XG-350)."
      },
      {
        "num": 97,
        "question": "What does the speaker ask about?",
        "vietnameseQuestion": "Người nói hỏi về điều gì?",
        "options": [
          {
            "key": "A",
            "text": "A warranty",
            "vietnamese": "Bảo hành"
          },
          {
            "key": "B",
            "text": "A return process",
            "vietnamese": "Một quá trình trở lại"
          },
          {
            "key": "C",
            "text": "A delivery fee",
            "vietnamese": "Phí giao hàng"
          },
          {
            "key": "D",
            "text": "Product availability",
            "vietnamese": "Tính sẵn có của sản phẩm"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"A delivery fee\" (Phí giao hàng)."
      }
    ],
    "vocabulary": [
      {
        "word": "store",
        "meaning": "lưu trữ, cất giữ",
        "partOfSpeech": "n"
      },
      {
        "word": "extra",
        "meaning": "thêm, phụ trội",
        "partOfSpeech": "adj/adv"
      },
      {
        "word": "refrigerator",
        "meaning": "tủ lạnh",
        "partOfSpeech": "n"
      },
      {
        "word": "charge",
        "meaning": "sạc pin, nạp điện",
        "partOfSpeech": "v"
      }
    ],
    "graphicImage": "/images/intensive/test1_2023/q95_97.png"
  },
  {
    "id": "part4-98-100",
    "part": 4,
    "partTitle": "Part 4: Bài nói chuyện",
    "questionRange": "Câu 98 - 100",
    "title": "Part 4 - Câu 98 - 100: Ai có nhiều khả năng là người nghe nhất",
    "audioSrc": "/audio/test1_2023.mp3",
    "startTime": 2651.76,
    "endTime": 2763.8,
    "transcript": [
      {
        "id": "p4-98-1",
        "speaker": "Speaker",
        "text": "Good afternoon, everyone.",
        "vietnamese": "Chào buổi chiều mọi người."
      },
      {
        "id": "p4-98-2",
        "speaker": "Speaker",
        "text": "I'd like to go over the product tests for a laptop computer backpack because they will require some design changes.",
        "vietnamese": "Tôi muốn xem qua các bài kiểm tra sản phẩm dành cho ba lô đựng máy tính xách tay vì chúng sẽ yêu cầu một số thay đổi về thiết kế."
      },
      {
        "id": "p4-98-3",
        "speaker": "Speaker",
        "text": "As you know, we hired a marketing firm to test the prototype you designed among consumers.",
        "vietnamese": "Như bạn đã biết, chúng tôi đã thuê một công ty tiếp thị để thử nghiệm nguyên mẫu bạn thiết kế với người tiêu dùng."
      },
      {
        "id": "p4-98-4",
        "speaker": "Speaker",
        "text": "Now, we received very positive feedback overall.",
        "vietnamese": "Bây giờ, nhìn chung chúng tôi đã nhận được phản hồi rất tích cực."
      },
      {
        "id": "p4-98-5",
        "speaker": "Speaker",
        "text": "Consumers liked the separate computer compartment.",
        "vietnamese": "Người tiêu dùng thích ngăn đựng máy tính riêng biệt."
      },
      {
        "id": "p4-98-6",
        "speaker": "Speaker",
        "text": "However, many people felt that the shoulder straps were uncomfortable when the bag was full.",
        "vietnamese": "Tuy nhiên, nhiều người cảm thấy dây đeo vai không thoải mái khi túi đầy."
      },
      {
        "id": "p4-98-7",
        "speaker": "Speaker",
        "text": "It's important that the backpack have comfortable shoulder straps since its purpose is to carry heavy equipment.",
        "vietnamese": "Điều quan trọng là ba lô phải có dây đeo vai thoải mái vì mục đích của nó là mang theo thiết bị nặng."
      },
      {
        "id": "p4-98-8",
        "speaker": "Speaker",
        "text": "We need to revise the design as quickly as possible since we're scheduled to have our official product release early next year.",
        "vietnamese": "Chúng tôi cần sửa đổi thiết kế càng nhanh càng tốt vì chúng tôi dự kiến ​​sẽ phát hành sản phẩm chính thức vào đầu năm tới."
      }
    ],
    "questions": [
      {
        "num": 98,
        "question": "Who most likely are the listeners?",
        "vietnameseQuestion": "Ai có nhiều khả năng là người nghe nhất?",
        "options": [
          {
            "key": "A",
            "text": "Marketing experts",
            "vietnamese": "Chuyên gia tiếp thị"
          },
          {
            "key": "B",
            "text": "Product testers",
            "vietnamese": "Người thử nghiệm sản phẩm"
          },
          {
            "key": "C",
            "text": "Product designers",
            "vietnamese": "Nhà thiết kế sản phẩm"
          },
          {
            "key": "D",
            "text": "Audio engineers",
            "vietnamese": "Kỹ sư âm thanh"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"Product designers\" (Nhà thiết kế sản phẩm)."
      },
      {
        "num": 99,
        "question": "Look at the graphic. What was the",
        "vietnameseQuestion": "Nhìn vào đồ họa. Cái gì là",
        "options": [
          {
            "key": "A",
            "text": "40 percent",
            "vietnamese": "40 phần trăm"
          },
          {
            "key": "B",
            "text": "50 percent",
            "vietnamese": "50 phần trăm"
          },
          {
            "key": "C",
            "text": "60 percent",
            "vietnamese": "60 phần trăm"
          },
          {
            "key": "D",
            "text": "80 percent",
            "vietnamese": "80 phần trăm"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"50 percent\" (50 phần trăm)."
      },
      {
        "num": 100,
        "question": "According to the speaker, why is a revision urgent?",
        "vietnameseQuestion": "Theo diễn giả, tại sao việc sửa đổi lại cấp bách?",
        "options": [
          {
            "key": "A",
            "text": "A competitor is making a similar product.",
            "vietnamese": "Một đối thủ cạnh tranh đang sản xuất một sản phẩm tương tự."
          },
          {
            "key": "B",
            "text": "A product will be offered for sale soon.",
            "vietnamese": "Một sản phẩm sẽ sớm được chào bán."
          },
          {
            "key": "C",
            "text": "A product will be introduced at a trade show.",
            "vietnamese": "Một sản phẩm sẽ được giới thiệu tại một triển lãm thương mại."
          },
          {
            "key": "D",
            "text": "The cost of a product's materials will rise soon.",
            "vietnamese": "Giá nguyên liệu của sản phẩm sẽ sớm tăng lên."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"A product will be offered for sale soon.\" (Một sản phẩm sẽ sớm được chào bán.)."
      }
    ],
    "vocabulary": [
      {
        "word": "laptop",
        "meaning": "máy tính xách tay",
        "partOfSpeech": "n"
      },
      {
        "word": "backpack",
        "meaning": "ba lô",
        "partOfSpeech": "n"
      },
      {
        "word": "require",
        "meaning": "đòi hỏi, yêu cầu",
        "partOfSpeech": "v"
      },
      {
        "word": "design",
        "meaning": "thiết kế",
        "partOfSpeech": "v"
      }
    ],
    "graphicImage": "/images/intensive/test1_2023/q98_100.png"
  }
];

export function getIntensiveItemById(id: string): IntensiveListeningItem | undefined {
  return test1_2023_IntensiveData.find((item) => item.id === id);
}

export function getItemsByPart(part: 1 | 2 | 3 | 4): IntensiveListeningItem[] {
  return test1_2023_IntensiveData.filter((item) => item.part === part);
}
