// Dữ liệu luyện nghe chi tiết (Intensive Listening) - ETS TOEIC 2023 Test 3
// Áp dụng kỹ thuật Virtual Timestamp Slicing từ audio gốc /audio/test3_2023.mp3
// Transcript song ngữ Anh - Việt, câu hỏi, đáp án và từ vựng trọng tâm

import type { IntensiveListeningItem } from './intensive_listening_types';

export const test3_2023_IntensiveData: IntensiveListeningItem[] = [
  {
    "id": "part1-1",
    "part": 1,
    "partTitle": "Part 1: Mô tả hình ảnh",
    "questionRange": "Câu 1",
    "title": "Part 1 - Câu 1: Một người đàn ông với các công cụ đang cúi xuống.",
    "audioSrc": "/audio/test3_2023.mp3",
    "startTime": 98.97,
    "endTime": 122.98,
    "imageUrl": "/images/intensive/test3_2023/q1.png",
    "image": "/images/intensive/test3_2023/q1.png",
    "transcript": [
      {
        "id": "p1-1-a",
        "speaker": "Speaker",
        "text": "(A) A man is standing in a road.",
        "vietnamese": "(A) Một người đàn ông đang đứng trên đường."
      },
      {
        "id": "p1-1-b",
        "speaker": "Speaker",
        "text": "(B) A man is wearing a coat.",
        "vietnamese": "(B) Một người đàn ông đang mặc một chiếc áo khoác."
      },
      {
        "id": "p1-1-c",
        "speaker": "Speaker",
        "text": "(C) A man with tools is bending over.",
        "vietnamese": "(C) Một người đàn ông với các công cụ đang cúi xuống."
      },
      {
        "id": "p1-1-d",
        "speaker": "Speaker",
        "text": "(D) A man is putting on a hat.",
        "vietnamese": "(D) Một người đàn ông đang đội một chiếc mũ."
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
            "text": "A man is standing in a road.",
            "vietnamese": "Một người đàn ông đang đứng trên đường."
          },
          {
            "key": "B",
            "text": "A man is wearing a coat.",
            "vietnamese": "Một người đàn ông đang mặc một chiếc áo khoác."
          },
          {
            "key": "C",
            "text": "A man with tools is bending over.",
            "vietnamese": "Một người đàn ông với các công cụ đang cúi xuống."
          },
          {
            "key": "D",
            "text": "A man is putting on a hat.",
            "vietnamese": "Một người đàn ông đang đội một chiếc mũ."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"A man with tools is bending over.\" (Một người đàn ông với các công cụ đang cúi xuống.) mô tả chính xác hoạt động và cảnh vật trong hình."
      }
    ],
    "vocabulary": [
      {
        "word": "standing",
        "meaning": "đứng",
        "partOfSpeech": "n/v"
      },
      {
        "word": "road",
        "meaning": "đường",
        "partOfSpeech": "n/v"
      }
    ]
  },
  {
    "id": "part1-2",
    "part": 1,
    "partTitle": "Part 1: Mô tả hình ảnh",
    "questionRange": "Câu 2",
    "title": "Part 1 - Câu 2: Có cửa sổ nhìn ra vườn.",
    "audioSrc": "/audio/test3_2023.mp3",
    "startTime": 122.98,
    "endTime": 155.45,
    "imageUrl": "/images/intensive/test3_2023/q2.png",
    "image": "/images/intensive/test3_2023/q2.png",
    "transcript": [
      {
        "id": "p1-2-a",
        "speaker": "Speaker",
        "text": "(A) There's long grass behind a fence.",
        "vietnamese": "(A) Có bãi cỏ dài phía sau hàng rào."
      },
      {
        "id": "p1-2-b",
        "speaker": "Speaker",
        "text": "(B) There's a door open beneath a light.",
        "vietnamese": "(B) Có một cánh cửa mở dưới ánh đèn."
      },
      {
        "id": "p1-2-c",
        "speaker": "Speaker",
        "text": "(C) There's a pot with flowers by the door.",
        "vietnamese": "(C) Có một chậu hoa cạnh cửa."
      },
      {
        "id": "p1-2-d",
        "speaker": "Speaker",
        "text": "(D) There's a window overlooking a garden.",
        "vietnamese": "(D) Có cửa sổ nhìn ra vườn."
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
            "text": "There's long grass behind a fence.",
            "vietnamese": "Có bãi cỏ dài phía sau hàng rào."
          },
          {
            "key": "B",
            "text": "There's a door open beneath a light.",
            "vietnamese": "Có một cánh cửa mở dưới ánh đèn."
          },
          {
            "key": "C",
            "text": "There's a pot with flowers by the door.",
            "vietnamese": "Có một chậu hoa cạnh cửa."
          },
          {
            "key": "D",
            "text": "There's a window overlooking a garden.",
            "vietnamese": "Có cửa sổ nhìn ra vườn."
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là (D): \"There's a window overlooking a garden.\" (Có cửa sổ nhìn ra vườn.) mô tả chính xác hoạt động và cảnh vật trong hình."
      }
    ],
    "vocabulary": [
      {
        "word": "fence",
        "meaning": "hàng rào",
        "partOfSpeech": "n"
      },
      {
        "word": "open",
        "meaning": "mở cửa đón khách",
        "partOfSpeech": "v"
      },
      {
        "word": "light",
        "meaning": "chiếu sáng, thắp sáng",
        "partOfSpeech": "n"
      },
      {
        "word": "pot",
        "meaning": "nồi nấu ăn",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part1-3",
    "part": 1,
    "partTitle": "Part 1: Mô tả hình ảnh",
    "questionRange": "Câu 3",
    "title": "Part 1 - Câu 3: Một người đàn ông đang sử dụng máy tập thể dục.",
    "audioSrc": "/audio/test3_2023.mp3",
    "startTime": 155.45,
    "endTime": 179.96,
    "imageUrl": "/images/intensive/test3_2023/q3.png",
    "image": "/images/intensive/test3_2023/q3.png",
    "transcript": [
      {
        "id": "p1-3-a",
        "speaker": "Speaker",
        "text": "(A) A man is looking in a mirror.",
        "vietnamese": "(A) Một người đàn ông đang nhìn vào gương."
      },
      {
        "id": "p1-3-b",
        "speaker": "Speaker",
        "text": "(B) A man is using an exercise machine.",
        "vietnamese": "(B) Một người đàn ông đang sử dụng máy tập thể dục."
      },
      {
        "id": "p1-3-c",
        "speaker": "Speaker",
        "text": "(C) A stairway is being cleaned.",
        "vietnamese": "(C) Một cầu thang đang được lau chùi."
      },
      {
        "id": "p1-3-d",
        "speaker": "Speaker",
        "text": "(D) A basket is hanging from the ceiling.",
        "vietnamese": "(D) Một cái giỏ được treo trên trần nhà."
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
            "text": "A man is looking in a mirror.",
            "vietnamese": "Một người đàn ông đang nhìn vào gương."
          },
          {
            "key": "B",
            "text": "A man is using an exercise machine.",
            "vietnamese": "Một người đàn ông đang sử dụng máy tập thể dục."
          },
          {
            "key": "C",
            "text": "A stairway is being cleaned.",
            "vietnamese": "Một cầu thang đang được lau chùi."
          },
          {
            "key": "D",
            "text": "A basket is hanging from the ceiling.",
            "vietnamese": "Một cái giỏ được treo trên trần nhà."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"A man is using an exercise machine.\" (Một người đàn ông đang sử dụng máy tập thể dục.) mô tả chính xác hoạt động và cảnh vật trong hình."
      }
    ],
    "vocabulary": [
      {
        "word": "machine",
        "meaning": "máy móc, thiết bị cơ giới",
        "partOfSpeech": "n"
      },
      {
        "word": "stairway",
        "meaning": "cầu thang bộ",
        "partOfSpeech": "n"
      },
      {
        "word": "ceiling",
        "meaning": "trần nhà",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part1-4",
    "part": 1,
    "partTitle": "Part 1: Mô tả hình ảnh",
    "questionRange": "Câu 4",
    "title": "Part 1 - Câu 4: Một người phụ nữ đang cầm một cái bát.",
    "audioSrc": "/audio/test3_2023.mp3",
    "startTime": 179.96,
    "endTime": 204.61,
    "imageUrl": "/images/intensive/test3_2023/q4.png",
    "image": "/images/intensive/test3_2023/q4.png",
    "transcript": [
      {
        "id": "p1-4-a",
        "speaker": "Speaker",
        "text": "(A) A woman is cleaning the floor.",
        "vietnamese": "(A) Một người phụ nữ đang lau sàn nhà."
      },
      {
        "id": "p1-4-b",
        "speaker": "Speaker",
        "text": "(B) Bottles are being placed on shelves.",
        "vietnamese": "(B) Chai lọ đang được đặt trên kệ."
      },
      {
        "id": "p1-4-c",
        "speaker": "Speaker",
        "text": "(C) A woman is holding a bowl.",
        "vietnamese": "(C) Một người phụ nữ đang cầm một cái bát."
      },
      {
        "id": "p1-4-d",
        "speaker": "Speaker",
        "text": "(D) A customer is reading a menu.",
        "vietnamese": "(D) Một khách hàng đang đọc thực đơn."
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
            "text": "A woman is cleaning the floor.",
            "vietnamese": "Một người phụ nữ đang lau sàn nhà."
          },
          {
            "key": "B",
            "text": "Bottles are being placed on shelves.",
            "vietnamese": "Chai lọ đang được đặt trên kệ."
          },
          {
            "key": "C",
            "text": "A woman is holding a bowl.",
            "vietnamese": "Một người phụ nữ đang cầm một cái bát."
          },
          {
            "key": "D",
            "text": "A customer is reading a menu.",
            "vietnamese": "Một khách hàng đang đọc thực đơn."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"A woman is holding a bowl.\" (Một người phụ nữ đang cầm một cái bát.) mô tả chính xác hoạt động và cảnh vật trong hình."
      }
    ],
    "vocabulary": [
      {
        "word": "floor",
        "meaning": "tầng, sàn nhà",
        "partOfSpeech": "n"
      },
      {
        "word": "reading",
        "meaning": "buổi đọc sách, buổi ngâm thơ",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part1-5",
    "part": 1,
    "partTitle": "Part 1: Mô tả hình ảnh",
    "questionRange": "Câu 5",
    "title": "Part 1 - Câu 5: Khu vực ăn uống được chuẩn bị sẵn sàng cho bữa ăn.",
    "audioSrc": "/audio/test3_2023.mp3",
    "startTime": 204.61,
    "endTime": 231.22,
    "imageUrl": "/images/intensive/test3_2023/q5.png",
    "image": "/images/intensive/test3_2023/q5.png",
    "transcript": [
      {
        "id": "p1-5-a",
        "speaker": "Speaker",
        "text": "(A) A tablecloth is folded on a chair.",
        "vietnamese": "(A) Một chiếc khăn trải bàn được gấp trên ghế."
      },
      {
        "id": "p1-5-b",
        "speaker": "Speaker",
        "text": "(B) A dining area is prepared for a meal.",
        "vietnamese": "(B) Khu vực ăn uống được chuẩn bị sẵn sàng cho bữa ăn."
      },
      {
        "id": "p1-5-c",
        "speaker": "Speaker",
        "text": "(C) Some chairs are being moved to a different room.",
        "vietnamese": "(C) Một số ghế đang được chuyển đến một phòng khác."
      },
      {
        "id": "p1-5-d",
        "speaker": "Speaker",
        "text": "(D) Cops and Plates are being filled.",
        "vietnamese": "(D) Cảnh sát và Đĩa đang được lấp đầy."
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
            "text": "A tablecloth is folded on a chair.",
            "vietnamese": "Một chiếc khăn trải bàn được gấp trên ghế."
          },
          {
            "key": "B",
            "text": "A dining area is prepared for a meal.",
            "vietnamese": "Khu vực ăn uống được chuẩn bị sẵn sàng cho bữa ăn."
          },
          {
            "key": "C",
            "text": "Some chairs are being moved to a different room.",
            "vietnamese": "Một số ghế đang được chuyển đến một phòng khác."
          },
          {
            "key": "D",
            "text": "Cops and Plates are being filled.",
            "vietnamese": "Cảnh sát và Đĩa đang được lấp đầy."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"A dining area is prepared for a meal.\" (Khu vực ăn uống được chuẩn bị sẵn sàng cho bữa ăn.) mô tả chính xác hoạt động và cảnh vật trong hình."
      }
    ],
    "vocabulary": [
      {
        "word": "tablecloth",
        "meaning": "khăn trải bàn",
        "partOfSpeech": "n/v"
      },
      {
        "word": "folded",
        "meaning": "gấp lại",
        "partOfSpeech": "n/v"
      }
    ]
  },
  {
    "id": "part1-6",
    "part": 1,
    "partTitle": "Part 1: Mô tả hình ảnh",
    "questionRange": "Câu 6",
    "title": "Part 1 - Câu 6: Một số người đã tụ tập ở khu vực chỗ ngồi ngoài trời.",
    "audioSrc": "/audio/test3_2023.mp3",
    "startTime": 231.22,
    "endTime": 265.05,
    "imageUrl": "/images/intensive/test3_2023/q6.png",
    "image": "/images/intensive/test3_2023/q6.png",
    "transcript": [
      {
        "id": "p1-6-a",
        "speaker": "Speaker",
        "text": "(A) Some people have gathered in an outdoor seating area.",
        "vietnamese": "(A) Một số người đã tụ tập ở khu vực chỗ ngồi ngoài trời."
      },
      {
        "id": "p1-6-b",
        "speaker": "Speaker",
        "text": "(B) Umbrellas are covering a buffet counter.",
        "vietnamese": "(B) Những chiếc ô che phủ quầy buffet."
      },
      {
        "id": "p1-6-c",
        "speaker": "Speaker",
        "text": "(C) Some chairs are stacked on the lawn.",
        "vietnamese": "(C) Một số ghế được xếp chồng lên nhau trên bãi cỏ."
      },
      {
        "id": "p1-6-d",
        "speaker": "Speaker",
        "text": "(D) Some people are laughing at a performance.",
        "vietnamese": "(D) Một số người đang cười trong một buổi biểu diễn."
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
            "text": "Some people have gathered in an outdoor seating area.",
            "vietnamese": "Một số người đã tụ tập ở khu vực chỗ ngồi ngoài trời."
          },
          {
            "key": "B",
            "text": "Umbrellas are covering a buffet counter.",
            "vietnamese": "Những chiếc ô che phủ quầy buffet."
          },
          {
            "key": "C",
            "text": "Some chairs are stacked on the lawn.",
            "vietnamese": "Một số ghế được xếp chồng lên nhau trên bãi cỏ."
          },
          {
            "key": "D",
            "text": "Some people are laughing at a performance.",
            "vietnamese": "Một số người đang cười trong một buổi biểu diễn."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là (A): \"Some people have gathered in an outdoor seating area.\" (Một số người đã tụ tập ở khu vực chỗ ngồi ngoài trời.) mô tả chính xác hoạt động và cảnh vật trong hình."
      }
    ],
    "vocabulary": [
      {
        "word": "buffet",
        "meaning": "tiệc đứng, quầy buffet",
        "partOfSpeech": "n"
      },
      {
        "word": "counter",
        "meaning": "quầy hàng, quầy phục vụ",
        "partOfSpeech": "n"
      },
      {
        "word": "performance",
        "meaning": "buổi biểu diễn",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-7",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 7",
    "title": "Part 2 - Câu 7: Cuộc kiểm tra an ninh hôm nay thế nào?",
    "audioSrc": "/audio/test3_2023.mp3",
    "startTime": 288.34,
    "endTime": 310.12,
    "transcript": [
      {
        "id": "p2-7-q",
        "speaker": "Speaker 1",
        "text": "How is the security audit today?",
        "vietnamese": "Cuộc kiểm tra an ninh hôm nay thế nào?"
      },
      {
        "id": "p2-7-a",
        "speaker": "Speaker 2",
        "text": "(A) I can secure them.",
        "vietnamese": "(A) Tôi có thể bảo vệ họ."
      },
      {
        "id": "p2-7-b",
        "speaker": "Speaker 2",
        "text": "(B) Very productive.",
        "vietnamese": "(B) Rất năng suất."
      },
      {
        "id": "p2-7-c",
        "speaker": "Speaker 2",
        "text": "(C) If you like.",
        "vietnamese": "(C) Nếu bạn thích."
      }
    ],
    "questions": [
      {
        "num": 7,
        "question": "How is the security audit today?",
        "vietnameseQuestion": "Cuộc kiểm tra an ninh hôm nay thế nào?",
        "options": [
          {
            "key": "A",
            "text": "I can secure them.",
            "vietnamese": "Tôi có thể bảo vệ họ."
          },
          {
            "key": "B",
            "text": "Very productive.",
            "vietnamese": "Rất năng suất."
          },
          {
            "key": "C",
            "text": "If you like.",
            "vietnamese": "Nếu bạn thích."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"Very productive.\" (Rất năng suất.) là câu phản hồi hợp lý nhất cho câu \"How is the security audit today?\"."
      }
    ],
    "vocabulary": [
      {
        "word": "security",
        "meaning": "bảo vệ",
        "partOfSpeech": "n/v"
      },
      {
        "word": "audit",
        "meaning": "kiểm toán",
        "partOfSpeech": "n/v"
      }
    ]
  },
  {
    "id": "part2-8",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 8",
    "title": "Part 2 - Câu 8: Bữa tối hôm nay bạn có món gì đặc biệt?",
    "audioSrc": "/audio/test3_2023.mp3",
    "startTime": 310.12,
    "endTime": 328.38,
    "transcript": [
      {
        "id": "p2-8-q",
        "speaker": "Speaker 1",
        "text": "What dinner specials do you have today?",
        "vietnamese": "Bữa tối hôm nay bạn có món gì đặc biệt?"
      },
      {
        "id": "p2-8-a",
        "speaker": "Speaker 2",
        "text": "(A) We have baked salmon.",
        "vietnamese": "(A) Chúng tôi có cá hồi nướng."
      },
      {
        "id": "p2-8-b",
        "speaker": "Speaker 2",
        "text": "(B) For the first time.",
        "vietnamese": "(B) Lần đầu tiên."
      },
      {
        "id": "p2-8-c",
        "speaker": "Speaker 2",
        "text": "(C) No I haven't.",
        "vietnamese": "(C) Không, tôi chưa từng."
      }
    ],
    "questions": [
      {
        "num": 8,
        "question": "What dinner specials do you have today?",
        "vietnameseQuestion": "Bữa tối hôm nay bạn có món gì đặc biệt?",
        "options": [
          {
            "key": "A",
            "text": "We have baked salmon.",
            "vietnamese": "Chúng tôi có cá hồi nướng."
          },
          {
            "key": "B",
            "text": "For the first time.",
            "vietnamese": "Lần đầu tiên."
          },
          {
            "key": "C",
            "text": "No I haven't.",
            "vietnamese": "Không, tôi chưa từng."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là (A): \"We have baked salmon.\" (Chúng tôi có cá hồi nướng.) là câu phản hồi hợp lý nhất cho câu \"What dinner specials do you have today?\"."
      }
    ],
    "vocabulary": [
      {
        "word": "dinner",
        "meaning": "bữa tối",
        "partOfSpeech": "n/v"
      },
      {
        "word": "specials",
        "meaning": "đặc biệt",
        "partOfSpeech": "n/v"
      }
    ]
  },
  {
    "id": "part2-9",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 9",
    "title": "Part 2 - Câu 9: Khi nào đơn hàng sẽ được giao?",
    "audioSrc": "/audio/test3_2023.mp3",
    "startTime": 328.38,
    "endTime": 342.54,
    "transcript": [
      {
        "id": "p2-9-q",
        "speaker": "Speaker 1",
        "text": "When will the order be delivered?",
        "vietnamese": "Khi nào đơn hàng sẽ được giao?"
      },
      {
        "id": "p2-9-a",
        "speaker": "Speaker 2",
        "text": "(A) Not until Wednesday afternoon.",
        "vietnamese": "(A) Không phải cho đến chiều thứ Tư."
      },
      {
        "id": "p2-9-b",
        "speaker": "Speaker 2",
        "text": "(B) It is time to put them away.",
        "vietnamese": "(B) Đã đến lúc phải cất chúng đi."
      },
      {
        "id": "p2-9-c",
        "speaker": "Speaker 2",
        "text": "(C) The light is on in the mail room.",
        "vietnamese": "(C) Đèn trong phòng thư vẫn sáng."
      }
    ],
    "questions": [
      {
        "num": 9,
        "question": "When will the order be delivered?",
        "vietnameseQuestion": "Khi nào đơn hàng sẽ được giao?",
        "options": [
          {
            "key": "A",
            "text": "Not until Wednesday afternoon.",
            "vietnamese": "Không phải cho đến chiều thứ Tư."
          },
          {
            "key": "B",
            "text": "It is time to put them away.",
            "vietnamese": "Đã đến lúc phải cất chúng đi."
          },
          {
            "key": "C",
            "text": "The light is on in the mail room.",
            "vietnamese": "Đèn trong phòng thư vẫn sáng."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là (A): \"Not until Wednesday afternoon.\" (Không phải cho đến chiều thứ Tư.) là câu phản hồi hợp lý nhất cho câu \"When will the order be delivered?\"."
      }
    ],
    "vocabulary": [
      {
        "word": "order",
        "meaning": "gọi món, đặt hàng",
        "partOfSpeech": "v"
      },
      {
        "word": "light",
        "meaning": "chiếu sáng, thắp sáng",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-10",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 10",
    "title": "Part 2 - Câu 10: Phí thành viên hàng tháng cho dịch vụ đó là bao nhiêu?",
    "audioSrc": "/audio/test3_2023.mp3",
    "startTime": 342.54,
    "endTime": 361.06,
    "transcript": [
      {
        "id": "p2-10-q",
        "speaker": "Speaker 1",
        "text": "What is the monthly membership fee for that service?",
        "vietnamese": "Phí thành viên hàng tháng cho dịch vụ đó là bao nhiêu?"
      },
      {
        "id": "p2-10-a",
        "speaker": "Speaker 2",
        "text": "(A) 20 euros.",
        "vietnamese": "(A) 20 euro."
      },
      {
        "id": "p2-10-b",
        "speaker": "Speaker 2",
        "text": "(B) Next month.",
        "vietnamese": "(B) Tháng tới."
      },
      {
        "id": "p2-10-c",
        "speaker": "Speaker 2",
        "text": "(C) Don't let me forget.",
        "vietnamese": "(C) Đừng để tôi quên."
      }
    ],
    "questions": [
      {
        "num": 10,
        "question": "What is the monthly membership fee for that service?",
        "vietnameseQuestion": "Phí thành viên hàng tháng cho dịch vụ đó là bao nhiêu?",
        "options": [
          {
            "key": "A",
            "text": "20 euros.",
            "vietnamese": "20 euro."
          },
          {
            "key": "B",
            "text": "Next month.",
            "vietnamese": "Tháng tới."
          },
          {
            "key": "C",
            "text": "Don't let me forget.",
            "vietnamese": "Đừng để tôi quên."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là (A): \"20 euros.\" (20 euro.) là câu phản hồi hợp lý nhất cho câu \"What is the monthly membership fee for that service?\"."
      }
    ],
    "vocabulary": [
      {
        "word": "monthly",
        "meaning": "hàng tháng",
        "partOfSpeech": "n/v"
      },
      {
        "word": "membership",
        "meaning": "tư cách thành viên",
        "partOfSpeech": "n/v"
      }
    ]
  },
  {
    "id": "part2-11",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 11",
    "title": "Part 2 - Câu 11: Bạn có nhận được email tôi gửi không?",
    "audioSrc": "/audio/test3_2023.mp3",
    "startTime": 361.06,
    "endTime": 379.66,
    "transcript": [
      {
        "id": "p2-11-q",
        "speaker": "Speaker 1",
        "text": "Did you receive the email I sent?",
        "vietnamese": "Bạn có nhận được email tôi gửi không?"
      },
      {
        "id": "p2-11-a",
        "speaker": "Speaker 2",
        "text": "(A) I need a receipt for that.",
        "vietnamese": "(A) Tôi cần một biên nhận cho việc đó."
      },
      {
        "id": "p2-11-b",
        "speaker": "Speaker 2",
        "text": "(B) Call a delivery service.",
        "vietnamese": "(B) Gọi dịch vụ giao hàng."
      },
      {
        "id": "p2-11-c",
        "speaker": "Speaker 2",
        "text": "(C) I haven't looked at my computer today.",
        "vietnamese": "(C) Hôm nay tôi chưa nhìn vào máy tính của mình."
      }
    ],
    "questions": [
      {
        "num": 11,
        "question": "Did you receive the email I sent?",
        "vietnameseQuestion": "Bạn có nhận được email tôi gửi không?",
        "options": [
          {
            "key": "A",
            "text": "I need a receipt for that.",
            "vietnamese": "Tôi cần một biên nhận cho việc đó."
          },
          {
            "key": "B",
            "text": "Call a delivery service.",
            "vietnamese": "Gọi dịch vụ giao hàng."
          },
          {
            "key": "C",
            "text": "I haven't looked at my computer today.",
            "vietnamese": "Hôm nay tôi chưa nhìn vào máy tính của mình."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"I haven't looked at my computer today.\" (Hôm nay tôi chưa nhìn vào máy tính của mình.) là câu phản hồi hợp lý nhất cho câu \"Did you receive the email I sent?\"."
      }
    ],
    "vocabulary": [
      {
        "word": "receive",
        "meaning": "nhận được",
        "partOfSpeech": "v"
      },
      {
        "word": "receipt",
        "meaning": "hóa đơn thu tiền, biên nhận",
        "partOfSpeech": "n"
      },
      {
        "word": "delivery",
        "meaning": "sự giao hàng, đơn giao hàng",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-12",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 12",
    "title": "Part 2 - Câu 12: Tại sao bạn không có cuộc họp chiều nay?",
    "audioSrc": "/audio/test3_2023.mp3",
    "startTime": 379.66,
    "endTime": 399.14,
    "transcript": [
      {
        "id": "p2-12-q",
        "speaker": "Speaker 1",
        "text": "Why don't you have the meeting this afternoon?",
        "vietnamese": "Tại sao bạn không có cuộc họp chiều nay?"
      },
      {
        "id": "p2-12-a",
        "speaker": "Speaker 2",
        "text": "(A) Just passed the library and across the street.",
        "vietnamese": "(A) Vừa đi ngang qua thư viện và băng qua đường."
      },
      {
        "id": "p2-12-b",
        "speaker": "Speaker 2",
        "text": "(B) Otherwise I think it's fine.",
        "vietnamese": "(B) Nếu không tôi nghĩ nó ổn."
      },
      {
        "id": "p2-12-c",
        "speaker": "Speaker 2",
        "text": "(C) Because we have a lot to do today.",
        "vietnamese": "(C) Bởi vì hôm nay chúng ta có rất nhiều việc phải làm."
      }
    ],
    "questions": [
      {
        "num": 12,
        "question": "Why don't you have the meeting this afternoon?",
        "vietnameseQuestion": "Tại sao bạn không có cuộc họp chiều nay?",
        "options": [
          {
            "key": "A",
            "text": "Just passed the library and across the street.",
            "vietnamese": "Vừa đi ngang qua thư viện và băng qua đường."
          },
          {
            "key": "B",
            "text": "Otherwise I think it's fine.",
            "vietnamese": "Nếu không tôi nghĩ nó ổn."
          },
          {
            "key": "C",
            "text": "Because we have a lot to do today.",
            "vietnamese": "Bởi vì hôm nay chúng ta có rất nhiều việc phải làm."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"Because we have a lot to do today.\" (Bởi vì hôm nay chúng ta có rất nhiều việc phải làm.) là câu phản hồi hợp lý nhất cho câu \"Why don't you have the meeting this afternoon?\"."
      }
    ],
    "vocabulary": [
      {
        "word": "meeting",
        "meaning": "cuộc họp",
        "partOfSpeech": "n/v"
      },
      {
        "word": "afternoon",
        "meaning": "buổi chiều",
        "partOfSpeech": "n/v"
      }
    ]
  },
  {
    "id": "part2-13",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 13",
    "title": "Part 2 - Câu 13: Bạn đăng lịch trình ở đâu vậy?",
    "audioSrc": "/audio/test3_2023.mp3",
    "startTime": 399.14,
    "endTime": 417.72,
    "transcript": [
      {
        "id": "p2-13-q",
        "speaker": "Speaker 1",
        "text": "Where did you post the schedule?",
        "vietnamese": "Bạn đăng lịch trình ở đâu vậy?"
      },
      {
        "id": "p2-13-a",
        "speaker": "Speaker 2",
        "text": "(A) I hung a copy on the conference room door.",
        "vietnamese": "(A) Tôi treo một bản sao trên cửa phòng họp."
      },
      {
        "id": "p2-13-b",
        "speaker": "Speaker 2",
        "text": "(B) In a few hours.",
        "vietnamese": "(B) Trong vài giờ nữa."
      },
      {
        "id": "p2-13-c",
        "speaker": "Speaker 2",
        "text": "(C) Are you sure you submitted it?",
        "vietnamese": "(C) Bạn có chắc là bạn đã gửi nó không?"
      }
    ],
    "questions": [
      {
        "num": 13,
        "question": "Where did you post the schedule?",
        "vietnameseQuestion": "Bạn đăng lịch trình ở đâu vậy?",
        "options": [
          {
            "key": "A",
            "text": "I hung a copy on the conference room door.",
            "vietnamese": "Tôi treo một bản sao trên cửa phòng họp."
          },
          {
            "key": "B",
            "text": "In a few hours.",
            "vietnamese": "Trong vài giờ nữa."
          },
          {
            "key": "C",
            "text": "Are you sure you submitted it?",
            "vietnamese": "Bạn có chắc là bạn đã gửi nó không?"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là (A): \"I hung a copy on the conference room door.\" (Tôi treo một bản sao trên cửa phòng họp.) là câu phản hồi hợp lý nhất cho câu \"Where did you post the schedule?\"."
      }
    ],
    "vocabulary": [
      {
        "word": "post",
        "meaning": "đăng tải",
        "partOfSpeech": "v"
      },
      {
        "word": "schedule",
        "meaning": "lên lịch, sắp xếp thời gian",
        "partOfSpeech": "v"
      },
      {
        "word": "conference",
        "meaning": "hội nghị chuyên đề",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-14",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 14",
    "title": "Part 2 - Câu 14: Ai là người chủ trì buổi hội thảo về an toàn?",
    "audioSrc": "/audio/test3_2023.mp3",
    "startTime": 417.72,
    "endTime": 435.33,
    "transcript": [
      {
        "id": "p2-14-q",
        "speaker": "Speaker 1",
        "text": "Who is leading the safety seminar?",
        "vietnamese": "Ai là người chủ trì buổi hội thảo về an toàn?"
      },
      {
        "id": "p2-14-a",
        "speaker": "Speaker 2",
        "text": "(A) That's what he said.",
        "vietnamese": "(A) Đó là những gì anh ấy nói."
      },
      {
        "id": "p2-14-b",
        "speaker": "Speaker 2",
        "text": "(B) Elizabeth will do it.",
        "vietnamese": "(B) Elizabeth sẽ làm điều đó."
      },
      {
        "id": "p2-14-c",
        "speaker": "Speaker 2",
        "text": "(C) Whenever management prefers.",
        "vietnamese": "(C) Bất cứ khi nào quản lý thích."
      }
    ],
    "questions": [
      {
        "num": 14,
        "question": "Who is leading the safety seminar?",
        "vietnameseQuestion": "Ai là người chủ trì buổi hội thảo về an toàn?",
        "options": [
          {
            "key": "A",
            "text": "That's what he said.",
            "vietnamese": "Đó là những gì anh ấy nói."
          },
          {
            "key": "B",
            "text": "Elizabeth will do it.",
            "vietnamese": "Elizabeth sẽ làm điều đó."
          },
          {
            "key": "C",
            "text": "Whenever management prefers.",
            "vietnamese": "Bất cứ khi nào quản lý thích."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"Elizabeth will do it.\" (Elizabeth sẽ làm điều đó.) là câu phản hồi hợp lý nhất cho câu \"Who is leading the safety seminar?\"."
      }
    ],
    "vocabulary": [
      {
        "word": "seminar",
        "meaning": "hội thảo",
        "partOfSpeech": "n"
      },
      {
        "word": "management",
        "meaning": "ban quản lý",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-15",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 15",
    "title": "Part 2 - Câu 15: Bạn có thể vui lòng điền vào bảng chấm công trước 3 giờ c...",
    "audioSrc": "/audio/test3_2023.mp3",
    "startTime": 435.33,
    "endTime": 456.84,
    "transcript": [
      {
        "id": "p2-15-q",
        "speaker": "Speaker 1",
        "text": "Could you please fill out your time sheet by 3 p.m. today?",
        "vietnamese": "Bạn có thể vui lòng điền vào bảng chấm công trước 3 giờ chiều được không? Hôm nay?"
      },
      {
        "id": "p2-15-a",
        "speaker": "Speaker 2",
        "text": "(A) How much time do you have?",
        "vietnamese": "(A) Bạn có bao nhiêu thời gian?"
      },
      {
        "id": "p2-15-b",
        "speaker": "Speaker 2",
        "text": "(B) Okay. I'll make a note to do that.",
        "vietnamese": "(B) Được rồi. Tôi sẽ ghi chú để làm điều đó."
      },
      {
        "id": "p2-15-c",
        "speaker": "Speaker 2",
        "text": "(C) I will place the order as soon as possible.",
        "vietnamese": "(C) Tôi sẽ đặt hàng càng sớm càng tốt."
      }
    ],
    "questions": [
      {
        "num": 15,
        "question": "Could you please fill out your time sheet by 3 p.m. today?",
        "vietnameseQuestion": "Bạn có thể vui lòng điền vào bảng chấm công trước 3 giờ chiều được không? Hôm nay?",
        "options": [
          {
            "key": "A",
            "text": "How much time do you have?",
            "vietnamese": "Bạn có bao nhiêu thời gian?"
          },
          {
            "key": "B",
            "text": "Okay. I'll make a note to do that.",
            "vietnamese": "Được rồi. Tôi sẽ ghi chú để làm điều đó."
          },
          {
            "key": "C",
            "text": "I will place the order as soon as possible.",
            "vietnamese": "Tôi sẽ đặt hàng càng sớm càng tốt."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"Okay. I'll make a note to do that.\" (Được rồi. Tôi sẽ ghi chú để làm điều đó.) là câu phản hồi hợp lý nhất cho câu \"Could you please fill out your time sheet by 3 p.m. today?\"."
      }
    ],
    "vocabulary": [
      {
        "word": "sheet",
        "meaning": "khăn trải giường, ga trải giường",
        "partOfSpeech": "n"
      },
      {
        "word": "order",
        "meaning": "gọi món, đặt hàng",
        "partOfSpeech": "v"
      }
    ]
  },
  {
    "id": "part2-16",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 16",
    "title": "Part 2 - Câu 16: Khi nào thợ điện phải tới đây?",
    "audioSrc": "/audio/test3_2023.mp3",
    "startTime": 456.84,
    "endTime": 481.45,
    "transcript": [
      {
        "id": "p2-16-q",
        "speaker": "Speaker 1",
        "text": "When is the electrician supposed to get here?",
        "vietnamese": "Khi nào thợ điện phải tới đây?"
      },
      {
        "id": "p2-16-a",
        "speaker": "Speaker 2",
        "text": "(A) The package got here last night.",
        "vietnamese": "(A) Gói hàng đã đến đây tối qua."
      },
      {
        "id": "p2-16-b",
        "speaker": "Speaker 2",
        "text": "(B) I didn't drive to work today.",
        "vietnamese": "(B) Hôm nay tôi không lái xe đi làm."
      },
      {
        "id": "p2-16-c",
        "speaker": "Speaker 2",
        "text": "(C) She just let me know she's running late.",
        "vietnamese": "(C) Cô ấy chỉ báo cho tôi biết là cô ấy sẽ đến muộn."
      }
    ],
    "questions": [
      {
        "num": 16,
        "question": "When is the electrician supposed to get here?",
        "vietnameseQuestion": "Khi nào thợ điện phải tới đây?",
        "options": [
          {
            "key": "A",
            "text": "The package got here last night.",
            "vietnamese": "Gói hàng đã đến đây tối qua."
          },
          {
            "key": "B",
            "text": "I didn't drive to work today.",
            "vietnamese": "Hôm nay tôi không lái xe đi làm."
          },
          {
            "key": "C",
            "text": "She just let me know she's running late.",
            "vietnamese": "Cô ấy chỉ báo cho tôi biết là cô ấy sẽ đến muộn."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"She just let me know she's running late.\" (Cô ấy chỉ báo cho tôi biết là cô ấy sẽ đến muộn.) là câu phản hồi hợp lý nhất cho câu \"When is the electrician supposed to get here?\"."
      }
    ],
    "vocabulary": [
      {
        "word": "package",
        "meaning": "bưu kiện, gói hàng",
        "partOfSpeech": "n"
      },
      {
        "word": "late",
        "meaning": "muộn, trễ giờ",
        "partOfSpeech": "adj"
      }
    ]
  },
  {
    "id": "part2-17",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 17",
    "title": "Part 2 - Câu 17: Tôi muốn lên lịch cuộc họp đánh giá hiệu suất của bạn.",
    "audioSrc": "/audio/test3_2023.mp3",
    "startTime": 481.45,
    "endTime": 501.99,
    "transcript": [
      {
        "id": "p2-17-q",
        "speaker": "Speaker 1",
        "text": "I'd like to schedule your performance review meeting.",
        "vietnamese": "Tôi muốn lên lịch cuộc họp đánh giá hiệu suất của bạn."
      },
      {
        "id": "p2-17-a",
        "speaker": "Speaker 2",
        "text": "(A) That is a high performing team.",
        "vietnamese": "(A) Đó là một đội có thành tích cao."
      },
      {
        "id": "p2-17-b",
        "speaker": "Speaker 2",
        "text": "(B) The food here is very good.",
        "vietnamese": "(B) Đồ ăn ở đây rất ngon."
      },
      {
        "id": "p2-17-c",
        "speaker": "Speaker 2",
        "text": "(C) Okay. Let me look at my calendar.",
        "vietnamese": "(C) Được rồi. Hãy để tôi xem lịch của tôi."
      }
    ],
    "questions": [
      {
        "num": 17,
        "question": "I'd like to schedule your performance review meeting.",
        "vietnameseQuestion": "Tôi muốn lên lịch cuộc họp đánh giá hiệu suất của bạn.",
        "options": [
          {
            "key": "A",
            "text": "That is a high performing team.",
            "vietnamese": "Đó là một đội có thành tích cao."
          },
          {
            "key": "B",
            "text": "The food here is very good.",
            "vietnamese": "Đồ ăn ở đây rất ngon."
          },
          {
            "key": "C",
            "text": "Okay. Let me look at my calendar.",
            "vietnamese": "Được rồi. Hãy để tôi xem lịch của tôi."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"Okay. Let me look at my calendar.\" (Được rồi. Hãy để tôi xem lịch của tôi.) là câu phản hồi hợp lý nhất cho câu \"I'd like to schedule your performance review meeting.\"."
      }
    ],
    "vocabulary": [
      {
        "word": "schedule",
        "meaning": "lên lịch, sắp xếp thời gian",
        "partOfSpeech": "v"
      },
      {
        "word": "performance",
        "meaning": "buổi biểu diễn",
        "partOfSpeech": "n"
      },
      {
        "word": "review",
        "meaning": "bài đánh giá nhận xét",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-18",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 18",
    "title": "Part 2 - Câu 18: Bạn chưa được đào tạo cách sử dụng máy này à?",
    "audioSrc": "/audio/test3_2023.mp3",
    "startTime": 501.99,
    "endTime": 521.47,
    "transcript": [
      {
        "id": "p2-18-q",
        "speaker": "Speaker 1",
        "text": "Haven't you been trained to use this machine?",
        "vietnamese": "Bạn chưa được đào tạo cách sử dụng máy này à?"
      },
      {
        "id": "p2-18-a",
        "speaker": "Speaker 2",
        "text": "(A) I can get them to take a look.",
        "vietnamese": "(A) Tôi có thể bảo họ xem qua."
      },
      {
        "id": "p2-18-b",
        "speaker": "Speaker 2",
        "text": "(B) We need to finish before noon.",
        "vietnamese": "(B) Chúng ta cần phải hoàn thành trước buổi trưa."
      },
      {
        "id": "p2-18-c",
        "speaker": "Speaker 2",
        "text": "(C) I use it all the time.",
        "vietnamese": "(C) Tôi sử dụng nó mọi lúc."
      }
    ],
    "questions": [
      {
        "num": 18,
        "question": "Haven't you been trained to use this machine?",
        "vietnameseQuestion": "Bạn chưa được đào tạo cách sử dụng máy này à?",
        "options": [
          {
            "key": "A",
            "text": "I can get them to take a look.",
            "vietnamese": "Tôi có thể bảo họ xem qua."
          },
          {
            "key": "B",
            "text": "We need to finish before noon.",
            "vietnamese": "Chúng ta cần phải hoàn thành trước buổi trưa."
          },
          {
            "key": "C",
            "text": "I use it all the time.",
            "vietnamese": "Tôi sử dụng nó mọi lúc."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"I use it all the time.\" (Tôi sử dụng nó mọi lúc.) là câu phản hồi hợp lý nhất cho câu \"Haven't you been trained to use this machine?\"."
      }
    ],
    "vocabulary": [
      {
        "word": "machine",
        "meaning": "máy móc, thiết bị cơ giới",
        "partOfSpeech": "n"
      },
      {
        "word": "noon",
        "meaning": "buổi trưa (12h trưa)",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-19",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 19",
    "title": "Part 2 - Câu 19: Bạn mang máy tính về nhà hay để ở nơi làm việc?",
    "audioSrc": "/audio/test3_2023.mp3",
    "startTime": 521.47,
    "endTime": 541.02,
    "transcript": [
      {
        "id": "p2-19-q",
        "speaker": "Speaker 1",
        "text": "Did you bring your computer home or leave it at work?",
        "vietnamese": "Bạn mang máy tính về nhà hay để ở nơi làm việc?"
      },
      {
        "id": "p2-19-a",
        "speaker": "Speaker 2",
        "text": "(A) Yes last week.",
        "vietnamese": "(A) Có vào tuần trước."
      },
      {
        "id": "p2-19-b",
        "speaker": "Speaker 2",
        "text": "(B) I lifted at the office.",
        "vietnamese": "(B) Tôi nhấc máy ở văn phòng."
      },
      {
        "id": "p2-19-c",
        "speaker": "Speaker 2",
        "text": "(C) In 10 minutes.",
        "vietnamese": "(C) Trong 10 phút nữa."
      }
    ],
    "questions": [
      {
        "num": 19,
        "question": "Did you bring your computer home or leave it at work?",
        "vietnameseQuestion": "Bạn mang máy tính về nhà hay để ở nơi làm việc?",
        "options": [
          {
            "key": "A",
            "text": "Yes last week.",
            "vietnamese": "Có vào tuần trước."
          },
          {
            "key": "B",
            "text": "I lifted at the office.",
            "vietnamese": "Tôi nhấc máy ở văn phòng."
          },
          {
            "key": "C",
            "text": "In 10 minutes.",
            "vietnamese": "Trong 10 phút nữa."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"I lifted at the office.\" (Tôi nhấc máy ở văn phòng.) là câu phản hồi hợp lý nhất cho câu \"Did you bring your computer home or leave it at work?\"."
      }
    ],
    "vocabulary": [
      {
        "word": "bring",
        "meaning": "mang theo, đem lại",
        "partOfSpeech": "v"
      },
      {
        "word": "leave",
        "meaning": "rời đi, nghỉ việc",
        "partOfSpeech": "v"
      }
    ]
  },
  {
    "id": "part2-20",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 20",
    "title": "Part 2 - Câu 20: Tại sao chúng ta không tạo một video giới thiệu không gia...",
    "audioSrc": "/audio/test3_2023.mp3",
    "startTime": 541.02,
    "endTime": 561.3,
    "transcript": [
      {
        "id": "p2-20-q",
        "speaker": "Speaker 1",
        "text": "Why don't we create a video tour of the convention space?",
        "vietnamese": "Tại sao chúng ta không tạo một video giới thiệu không gian hội nghị?"
      },
      {
        "id": "p2-20-a",
        "speaker": "Speaker 2",
        "text": "(A) I lost it yesterday.",
        "vietnamese": "(A) Tôi đã làm mất nó ngày hôm qua."
      },
      {
        "id": "p2-20-b",
        "speaker": "Speaker 2",
        "text": "(B) That film has been very popular.",
        "vietnamese": "(B) Bộ phim đó đã rất nổi tiếng."
      },
      {
        "id": "p2-20-c",
        "speaker": "Speaker 2",
        "text": "(C) I thought you already did that.",
        "vietnamese": "(C) Tôi tưởng bạn đã làm điều đó rồi."
      }
    ],
    "questions": [
      {
        "num": 20,
        "question": "Why don't we create a video tour of the convention space?",
        "vietnameseQuestion": "Tại sao chúng ta không tạo một video giới thiệu không gian hội nghị?",
        "options": [
          {
            "key": "A",
            "text": "I lost it yesterday.",
            "vietnamese": "Tôi đã làm mất nó ngày hôm qua."
          },
          {
            "key": "B",
            "text": "That film has been very popular.",
            "vietnamese": "Bộ phim đó đã rất nổi tiếng."
          },
          {
            "key": "C",
            "text": "I thought you already did that.",
            "vietnamese": "Tôi tưởng bạn đã làm điều đó rồi."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"I thought you already did that.\" (Tôi tưởng bạn đã làm điều đó rồi.) là câu phản hồi hợp lý nhất cho câu \"Why don't we create a video tour of the convention space?\"."
      }
    ],
    "vocabulary": [
      {
        "word": "tour",
        "meaning": "chuyến tham quan, dẫn đi xem",
        "partOfSpeech": "n/v"
      },
      {
        "word": "already",
        "meaning": "đã... rồi",
        "partOfSpeech": "adv"
      }
    ]
  },
  {
    "id": "part2-21",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 21",
    "title": "Part 2 - Câu 21: Không phải đồ ăn thường được phục vụ vào thời điểm này sao?",
    "audioSrc": "/audio/test3_2023.mp3",
    "startTime": 561.3,
    "endTime": 581.75,
    "transcript": [
      {
        "id": "p2-21-q",
        "speaker": "Speaker 1",
        "text": "Isn't the food usually served at this time?",
        "vietnamese": "Không phải đồ ăn thường được phục vụ vào thời điểm này sao?"
      },
      {
        "id": "p2-21-a",
        "speaker": "Speaker 2",
        "text": "(A) There's been a schedule change.",
        "vietnamese": "(A) Có sự thay đổi lịch trình."
      },
      {
        "id": "p2-21-b",
        "speaker": "Speaker 2",
        "text": "(B) The reviews of that product have been negative.",
        "vietnamese": "(B) Các đánh giá về sản phẩm đó đều tiêu cực."
      },
      {
        "id": "p2-21-c",
        "speaker": "Speaker 2",
        "text": "(C) I'll go tomorrow instead.",
        "vietnamese": "(C) Thay vào đó tôi sẽ đi vào ngày mai."
      }
    ],
    "questions": [
      {
        "num": 21,
        "question": "Isn't the food usually served at this time?",
        "vietnameseQuestion": "Không phải đồ ăn thường được phục vụ vào thời điểm này sao?",
        "options": [
          {
            "key": "A",
            "text": "There's been a schedule change.",
            "vietnamese": "Có sự thay đổi lịch trình."
          },
          {
            "key": "B",
            "text": "The reviews of that product have been negative.",
            "vietnamese": "Các đánh giá về sản phẩm đó đều tiêu cực."
          },
          {
            "key": "C",
            "text": "I'll go tomorrow instead.",
            "vietnamese": "Thay vào đó tôi sẽ đi vào ngày mai."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là (A): \"There's been a schedule change.\" (Có sự thay đổi lịch trình.) là câu phản hồi hợp lý nhất cho câu \"Isn't the food usually served at this time?\"."
      }
    ],
    "vocabulary": [
      {
        "word": "usually",
        "meaning": "thường xuyên, thông thường",
        "partOfSpeech": "adv"
      },
      {
        "word": "schedule",
        "meaning": "lên lịch, sắp xếp thời gian",
        "partOfSpeech": "v"
      },
      {
        "word": "negative",
        "meaning": "tiêu cực",
        "partOfSpeech": "adj"
      }
    ]
  },
  {
    "id": "part2-22",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 22",
    "title": "Part 2 - Câu 22: Bạn đi xe buýt hoặc xe lửa để đi làm?",
    "audioSrc": "/audio/test3_2023.mp3",
    "startTime": 581.75,
    "endTime": 601.36,
    "transcript": [
      {
        "id": "p2-22-q",
        "speaker": "Speaker 1",
        "text": "Do you take the bus or train to work?",
        "vietnamese": "Bạn đi xe buýt hoặc xe lửa để đi làm?"
      },
      {
        "id": "p2-22-a",
        "speaker": "Speaker 2",
        "text": "(A) I love to travel.",
        "vietnamese": "(A) Tôi thích đi du lịch."
      },
      {
        "id": "p2-22-b",
        "speaker": "Speaker 2",
        "text": "(B) I prefer to drive.",
        "vietnamese": "(B) Tôi thích lái xe hơn."
      },
      {
        "id": "p2-22-c",
        "speaker": "Speaker 2",
        "text": "(C) I only work on Tuesdays.",
        "vietnamese": "(C) Tôi chỉ làm việc vào thứ Ba."
      }
    ],
    "questions": [
      {
        "num": 22,
        "question": "Do you take the bus or train to work?",
        "vietnameseQuestion": "Bạn đi xe buýt hoặc xe lửa để đi làm?",
        "options": [
          {
            "key": "A",
            "text": "I love to travel.",
            "vietnamese": "Tôi thích đi du lịch."
          },
          {
            "key": "B",
            "text": "I prefer to drive.",
            "vietnamese": "Tôi thích lái xe hơn."
          },
          {
            "key": "C",
            "text": "I only work on Tuesdays.",
            "vietnamese": "Tôi chỉ làm việc vào thứ Ba."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"I prefer to drive.\" (Tôi thích lái xe hơn.) là câu phản hồi hợp lý nhất cho câu \"Do you take the bus or train to work?\"."
      }
    ],
    "vocabulary": [
      {
        "word": "train",
        "meaning": "đào tạo, huấn luyện",
        "partOfSpeech": "v"
      },
      {
        "word": "travel",
        "meaning": "đi lại, đi công tác",
        "partOfSpeech": "v"
      },
      {
        "word": "prefer",
        "meaning": "thích hơn",
        "partOfSpeech": "v"
      }
    ]
  },
  {
    "id": "part2-23",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 23",
    "title": "Part 2 - Câu 23: Bạn có muốn tôi đặt chỗ cho bạn không?",
    "audioSrc": "/audio/test3_2023.mp3",
    "startTime": 601.36,
    "endTime": 627.5,
    "transcript": [
      {
        "id": "p2-23-q",
        "speaker": "Speaker 1",
        "text": "Would you like me to make the reservation for you?",
        "vietnamese": "Bạn có muốn tôi đặt chỗ cho bạn không?"
      },
      {
        "id": "p2-23-a",
        "speaker": "Speaker 2",
        "text": "(A) The hotel has a fitness club.",
        "vietnamese": "(A) Khách sạn có câu lạc bộ thể dục."
      },
      {
        "id": "p2-23-b",
        "speaker": "Speaker 2",
        "text": "(B) No. I haven't heard of it.",
        "vietnamese": "(B) Không, tôi chưa từng nghe về nó."
      },
      {
        "id": "p2-23-c",
        "speaker": "Speaker 2",
        "text": "(C) Sure. Let me find the form.",
        "vietnamese": "(C) Chắc chắn. Để tôi tìm biểu mẫu."
      }
    ],
    "questions": [
      {
        "num": 23,
        "question": "Would you like me to make the reservation for you?",
        "vietnameseQuestion": "Bạn có muốn tôi đặt chỗ cho bạn không?",
        "options": [
          {
            "key": "A",
            "text": "The hotel has a fitness club.",
            "vietnamese": "Khách sạn có câu lạc bộ thể dục."
          },
          {
            "key": "B",
            "text": "No. I haven't heard of it.",
            "vietnamese": "Không, tôi chưa từng nghe về nó."
          },
          {
            "key": "C",
            "text": "Sure. Let me find the form.",
            "vietnamese": "Chắc chắn. Để tôi tìm biểu mẫu."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"Sure. Let me find the form.\" (Chắc chắn. Để tôi tìm biểu mẫu.) là câu phản hồi hợp lý nhất cho câu \"Would you like me to make the reservation for you?\"."
      }
    ],
    "vocabulary": [
      {
        "word": "reservation",
        "meaning": "sự đặt chỗ, đặt phòng trước",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-24",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 24",
    "title": "Part 2 - Câu 24: Tại sao bạn lại dọn dẹp phòng thí nghiệm?",
    "audioSrc": "/audio/test3_2023.mp3",
    "startTime": 627.5,
    "endTime": 641.26,
    "transcript": [
      {
        "id": "p2-24-q",
        "speaker": "Speaker 1",
        "text": "Why are you cleaning the laboratory?",
        "vietnamese": "Tại sao bạn lại dọn dẹp phòng thí nghiệm?"
      },
      {
        "id": "p2-24-a",
        "speaker": "Speaker 2",
        "text": "(A) Just stack the books against the wall.",
        "vietnamese": "(A) Chỉ cần xếp sách vào tường."
      },
      {
        "id": "p2-24-b",
        "speaker": "Speaker 2",
        "text": "(B) I will attend if I have to.",
        "vietnamese": "(B) Tôi sẽ tham dự nếu tôi phải làm vậy."
      },
      {
        "id": "p2-24-c",
        "speaker": "Speaker 2",
        "text": "(C) Haven't you seen the inspection report?",
        "vietnamese": "(C) Bạn chưa xem báo cáo kiểm tra à?"
      }
    ],
    "questions": [
      {
        "num": 24,
        "question": "Why are you cleaning the laboratory?",
        "vietnameseQuestion": "Tại sao bạn lại dọn dẹp phòng thí nghiệm?",
        "options": [
          {
            "key": "A",
            "text": "Just stack the books against the wall.",
            "vietnamese": "Chỉ cần xếp sách vào tường."
          },
          {
            "key": "B",
            "text": "I will attend if I have to.",
            "vietnamese": "Tôi sẽ tham dự nếu tôi phải làm vậy."
          },
          {
            "key": "C",
            "text": "Haven't you seen the inspection report?",
            "vietnamese": "Bạn chưa xem báo cáo kiểm tra à?"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"Haven't you seen the inspection report?\" (Bạn chưa xem báo cáo kiểm tra à?) là câu phản hồi hợp lý nhất cho câu \"Why are you cleaning the laboratory?\"."
      }
    ],
    "vocabulary": [
      {
        "word": "laboratory",
        "meaning": "phòng thí nghiệm",
        "partOfSpeech": "n"
      },
      {
        "word": "stack",
        "meaning": "chất đống, xếp chồng",
        "partOfSpeech": "v"
      },
      {
        "word": "against",
        "meaning": "tựa vào, áp sát vào",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-25",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 25",
    "title": "Part 2 - Câu 25: Bạn nghĩ gì về các đoạn được đánh dấu trong tài liệu này?",
    "audioSrc": "/audio/test3_2023.mp3",
    "startTime": 641.26,
    "endTime": 662.58,
    "transcript": [
      {
        "id": "p2-25-q",
        "speaker": "Speaker 1",
        "text": "What do you think of the highlighted paragraphs in this document?",
        "vietnamese": "Bạn nghĩ gì về các đoạn được đánh dấu trong tài liệu này?"
      },
      {
        "id": "p2-25-a",
        "speaker": "Speaker 2",
        "text": "(A) I think they need further revisions.",
        "vietnamese": "(A) Tôi nghĩ họ cần sửa đổi thêm."
      },
      {
        "id": "p2-25-b",
        "speaker": "Speaker 2",
        "text": "(B) There's some storage space upstairs.",
        "vietnamese": "(B) Có một số không gian lưu trữ trên lầu."
      },
      {
        "id": "p2-25-c",
        "speaker": "Speaker 2",
        "text": "(C) This room has very good lighting.",
        "vietnamese": "(C) Căn phòng này có ánh sáng rất tốt."
      }
    ],
    "questions": [
      {
        "num": 25,
        "question": "What do you think of the highlighted paragraphs in this document?",
        "vietnameseQuestion": "Bạn nghĩ gì về các đoạn được đánh dấu trong tài liệu này?",
        "options": [
          {
            "key": "A",
            "text": "I think they need further revisions.",
            "vietnamese": "Tôi nghĩ họ cần sửa đổi thêm."
          },
          {
            "key": "B",
            "text": "There's some storage space upstairs.",
            "vietnamese": "Có một số không gian lưu trữ trên lầu."
          },
          {
            "key": "C",
            "text": "This room has very good lighting.",
            "vietnamese": "Căn phòng này có ánh sáng rất tốt."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là (A): \"I think they need further revisions.\" (Tôi nghĩ họ cần sửa đổi thêm.) là câu phản hồi hợp lý nhất cho câu \"What do you think of the highlighted paragraphs in this document?\"."
      }
    ],
    "vocabulary": [
      {
        "word": "document",
        "meaning": "tài liệu, văn bản",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-26",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 26",
    "title": "Part 2 - Câu 26: Ai sẽ nhận chuyến hàng cuối cùng?",
    "audioSrc": "/audio/test3_2023.mp3",
    "startTime": 662.58,
    "endTime": 682.09,
    "transcript": [
      {
        "id": "p2-26-q",
        "speaker": "Speaker 1",
        "text": "Who's going to receive the final delivery?",
        "vietnamese": "Ai sẽ nhận chuyến hàng cuối cùng?"
      },
      {
        "id": "p2-26-a",
        "speaker": "Speaker 2",
        "text": "(A) When everyone leaves the office.",
        "vietnamese": "(A) Khi mọi người rời khỏi văn phòng."
      },
      {
        "id": "p2-26-b",
        "speaker": "Speaker 2",
        "text": "(B) I can wait for it.",
        "vietnamese": "(B) Tôi có thể đợi nó."
      },
      {
        "id": "p2-26-c",
        "speaker": "Speaker 2",
        "text": "(C) Yes, but only on Fridays.",
        "vietnamese": "(C) Có, nhưng chỉ vào thứ Sáu thôi."
      }
    ],
    "questions": [
      {
        "num": 26,
        "question": "Who's going to receive the final delivery?",
        "vietnameseQuestion": "Ai sẽ nhận chuyến hàng cuối cùng?",
        "options": [
          {
            "key": "A",
            "text": "When everyone leaves the office.",
            "vietnamese": "Khi mọi người rời khỏi văn phòng."
          },
          {
            "key": "B",
            "text": "I can wait for it.",
            "vietnamese": "Tôi có thể đợi nó."
          },
          {
            "key": "C",
            "text": "Yes, but only on Fridays.",
            "vietnamese": "Có, nhưng chỉ vào thứ Sáu thôi."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"I can wait for it.\" (Tôi có thể đợi nó.) là câu phản hồi hợp lý nhất cho câu \"Who's going to receive the final delivery?\"."
      }
    ],
    "vocabulary": [
      {
        "word": "receive",
        "meaning": "nhận được",
        "partOfSpeech": "v"
      },
      {
        "word": "delivery",
        "meaning": "sự giao hàng, đơn giao hàng",
        "partOfSpeech": "n"
      },
      {
        "word": "wait",
        "meaning": "chờ đợi",
        "partOfSpeech": "v"
      }
    ]
  },
  {
    "id": "part2-27",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 27",
    "title": "Part 2 - Câu 27: Bây giờ tôi có thể tắt đèn được không?",
    "audioSrc": "/audio/test3_2023.mp3",
    "startTime": 682.09,
    "endTime": 702.6,
    "transcript": [
      {
        "id": "p2-27-q",
        "speaker": "Speaker 1",
        "text": "I could book off lights now, right?",
        "vietnamese": "Bây giờ tôi có thể tắt đèn được không?"
      },
      {
        "id": "p2-27-a",
        "speaker": "Speaker 2",
        "text": "(A) It's a long flight.",
        "vietnamese": "(A) Đó là một chuyến bay dài."
      },
      {
        "id": "p2-27-b",
        "speaker": "Speaker 2",
        "text": "(B) The trade show hasn't been confirmed.",
        "vietnamese": "(B) Triển lãm thương mại chưa được xác nhận."
      },
      {
        "id": "p2-27-c",
        "speaker": "Speaker 2",
        "text": "(C) It's in the other room.",
        "vietnamese": "(C) Nó ở trong phòng khác."
      }
    ],
    "questions": [
      {
        "num": 27,
        "question": "I could book off lights now, right?",
        "vietnameseQuestion": "Bây giờ tôi có thể tắt đèn được không?",
        "options": [
          {
            "key": "A",
            "text": "It's a long flight.",
            "vietnamese": "Đó là một chuyến bay dài."
          },
          {
            "key": "B",
            "text": "The trade show hasn't been confirmed.",
            "vietnamese": "Triển lãm thương mại chưa được xác nhận."
          },
          {
            "key": "C",
            "text": "It's in the other room.",
            "vietnamese": "Nó ở trong phòng khác."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"The trade show hasn't been confirmed.\" (Triển lãm thương mại chưa được xác nhận.) là câu phản hồi hợp lý nhất cho câu \"I could book off lights now, right?\"."
      }
    ],
    "vocabulary": [
      {
        "word": "book",
        "meaning": "đặt trước (phòng, vé)",
        "partOfSpeech": "v"
      },
      {
        "word": "flight",
        "meaning": "chuyến bay",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-28",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 28",
    "title": "Part 2 - Câu 28: Tại sao chúng ta phải lên lịch lại sự kiện này?",
    "audioSrc": "/audio/test3_2023.mp3",
    "startTime": 702.6,
    "endTime": 724.02,
    "transcript": [
      {
        "id": "p2-28-q",
        "speaker": "Speaker 1",
        "text": "Why do we have to reschedule this event?",
        "vietnamese": "Tại sao chúng ta phải lên lịch lại sự kiện này?"
      },
      {
        "id": "p2-28-a",
        "speaker": "Speaker 2",
        "text": "(A) This weekend or maybe early next week.",
        "vietnamese": "(A) Cuối tuần này hoặc có thể là đầu tuần sau."
      },
      {
        "id": "p2-28-b",
        "speaker": "Speaker 2",
        "text": "(B) I will do it as soon as possible.",
        "vietnamese": "(B) Tôi sẽ làm điều đó càng sớm càng tốt."
      },
      {
        "id": "p2-28-c",
        "speaker": "Speaker 2",
        "text": "(C) My doctor's appointment couldn't be moved.",
        "vietnamese": "(C) Cuộc hẹn với bác sĩ của tôi không thể thay đổi được."
      }
    ],
    "questions": [
      {
        "num": 28,
        "question": "Why do we have to reschedule this event?",
        "vietnameseQuestion": "Tại sao chúng ta phải lên lịch lại sự kiện này?",
        "options": [
          {
            "key": "A",
            "text": "This weekend or maybe early next week.",
            "vietnamese": "Cuối tuần này hoặc có thể là đầu tuần sau."
          },
          {
            "key": "B",
            "text": "I will do it as soon as possible.",
            "vietnamese": "Tôi sẽ làm điều đó càng sớm càng tốt."
          },
          {
            "key": "C",
            "text": "My doctor's appointment couldn't be moved.",
            "vietnamese": "Cuộc hẹn với bác sĩ của tôi không thể thay đổi được."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"My doctor's appointment couldn't be moved.\" (Cuộc hẹn với bác sĩ của tôi không thể thay đổi được.) là câu phản hồi hợp lý nhất cho câu \"Why do we have to reschedule this event?\"."
      }
    ],
    "vocabulary": [
      {
        "word": "reschedule",
        "meaning": "đổi lịch, dời lịch",
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
    "id": "part2-29",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 29",
    "title": "Part 2 - Câu 29: Chúng ta thực sự nên xem xét việc mở rộng mặt tiền cửa hà...",
    "audioSrc": "/audio/test3_2023.mp3",
    "startTime": 724.02,
    "endTime": 745.34,
    "transcript": [
      {
        "id": "p2-29-q",
        "speaker": "Speaker 1",
        "text": "We should really consider expanding our storefront.",
        "vietnamese": "Chúng ta thực sự nên xem xét việc mở rộng mặt tiền cửa hàng của mình."
      },
      {
        "id": "p2-29-a",
        "speaker": "Speaker 2",
        "text": "(A) Didn't you see the contract for the work?",
        "vietnamese": "(A) Bạn không thấy hợp đồng làm việc à?"
      },
      {
        "id": "p2-29-b",
        "speaker": "Speaker 2",
        "text": "(B) I don't know how far it is.",
        "vietnamese": "(B) Tôi không biết nó cách đây bao xa."
      },
      {
        "id": "p2-29-c",
        "speaker": "Speaker 2",
        "text": "(C) We could borrow one for you.",
        "vietnamese": "(C) Chúng tôi có thể mượn một cái cho bạn."
      }
    ],
    "questions": [
      {
        "num": 29,
        "question": "We should really consider expanding our storefront.",
        "vietnameseQuestion": "Chúng ta thực sự nên xem xét việc mở rộng mặt tiền cửa hàng của mình.",
        "options": [
          {
            "key": "A",
            "text": "Didn't you see the contract for the work?",
            "vietnamese": "Bạn không thấy hợp đồng làm việc à?"
          },
          {
            "key": "B",
            "text": "I don't know how far it is.",
            "vietnamese": "Tôi không biết nó cách đây bao xa."
          },
          {
            "key": "C",
            "text": "We could borrow one for you.",
            "vietnamese": "Chúng tôi có thể mượn một cái cho bạn."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là (A): \"Didn't you see the contract for the work?\" (Bạn không thấy hợp đồng làm việc à?) là câu phản hồi hợp lý nhất cho câu \"We should really consider expanding our storefront.\"."
      }
    ],
    "vocabulary": [
      {
        "word": "consider",
        "meaning": "cân nhắc, xem xét",
        "partOfSpeech": "v"
      },
      {
        "word": "storefront",
        "meaning": "mặt tiền cửa hàng",
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
    "id": "part2-30",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 30",
    "title": "Part 2 - Câu 30: Bạn có biết chiếc áo khoác trong phòng họp của ai không?",
    "audioSrc": "/audio/test3_2023.mp3",
    "startTime": 745.34,
    "endTime": 772.1,
    "transcript": [
      {
        "id": "p2-30-q",
        "speaker": "Speaker 1",
        "text": "Do you know whose jacket that is in the conference room?",
        "vietnamese": "Bạn có biết chiếc áo khoác trong phòng họp của ai không?"
      },
      {
        "id": "p2-30-a",
        "speaker": "Speaker 2",
        "text": "(A) Sure. If they're already planning on the conference room, if they're already planning to go.",
        "vietnamese": "(A) Chắc chắn. Nếu họ đã lên kế hoạch đến phòng họp, nếu họ đã lên kế hoạch đi."
      },
      {
        "id": "p2-30-b",
        "speaker": "Speaker 2",
        "text": "(B) A few people have blue ones like that.",
        "vietnamese": "(B) Một số ít người có màu xanh như thế."
      },
      {
        "id": "p2-30-c",
        "speaker": "Speaker 2",
        "text": "(C) Yes, Janelle usually orders them for us.",
        "vietnamese": "(C) Vâng, Janelle thường đặt hàng chúng cho chúng tôi."
      }
    ],
    "questions": [
      {
        "num": 30,
        "question": "Do you know whose jacket that is in the conference room?",
        "vietnameseQuestion": "Bạn có biết chiếc áo khoác trong phòng họp của ai không?",
        "options": [
          {
            "key": "A",
            "text": "Sure. If they're already planning on the conference room, if they're already planning to go.",
            "vietnamese": "Chắc chắn. Nếu họ đã lên kế hoạch đến phòng họp, nếu họ đã lên kế hoạch đi."
          },
          {
            "key": "B",
            "text": "A few people have blue ones like that.",
            "vietnamese": "Một số ít người có màu xanh như thế."
          },
          {
            "key": "C",
            "text": "Yes, Janelle usually orders them for us.",
            "vietnamese": "Vâng, Janelle thường đặt hàng chúng cho chúng tôi."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"A few people have blue ones like that.\" (Một số ít người có màu xanh như thế.) là câu phản hồi hợp lý nhất cho câu \"Do you know whose jacket that is in the conference room?\"."
      }
    ],
    "vocabulary": [
      {
        "word": "conference",
        "meaning": "hội nghị chuyên đề",
        "partOfSpeech": "n"
      },
      {
        "word": "already",
        "meaning": "đã... rồi",
        "partOfSpeech": "adv"
      },
      {
        "word": "usually",
        "meaning": "thường xuyên, thông thường",
        "partOfSpeech": "adv"
      }
    ]
  },
  {
    "id": "part2-31",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 31",
    "title": "Part 2 - Câu 31: Bạn thường tập thể dục khi nào?",
    "audioSrc": "/audio/test3_2023.mp3",
    "startTime": 772.1,
    "endTime": 788.39,
    "transcript": [
      {
        "id": "p2-31-q",
        "speaker": "Speaker 1",
        "text": "When do you usually exercise?",
        "vietnamese": "Bạn thường tập thể dục khi nào?"
      },
      {
        "id": "p2-31-a",
        "speaker": "Speaker 2",
        "text": "(A) Fitness is important for everyone.",
        "vietnamese": "(A) Thể hình là quan trọng đối với tất cả mọi người."
      },
      {
        "id": "p2-31-b",
        "speaker": "Speaker 2",
        "text": "(B) An affordable machine.",
        "vietnamese": "(B) Một chiếc máy giá cả phải chăng."
      },
      {
        "id": "p2-31-c",
        "speaker": "Speaker 2",
        "text": "(C) My doctor has suggested that I stop for a while.",
        "vietnamese": "(C) Bác sĩ khuyên tôi nên dừng lại một thời gian."
      }
    ],
    "questions": [
      {
        "num": 31,
        "question": "When do you usually exercise?",
        "vietnameseQuestion": "Bạn thường tập thể dục khi nào?",
        "options": [
          {
            "key": "A",
            "text": "Fitness is important for everyone.",
            "vietnamese": "Thể hình là quan trọng đối với tất cả mọi người."
          },
          {
            "key": "B",
            "text": "An affordable machine.",
            "vietnamese": "Một chiếc máy giá cả phải chăng."
          },
          {
            "key": "C",
            "text": "My doctor has suggested that I stop for a while.",
            "vietnamese": "Bác sĩ khuyên tôi nên dừng lại một thời gian."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"My doctor has suggested that I stop for a while.\" (Bác sĩ khuyên tôi nên dừng lại một thời gian.) là câu phản hồi hợp lý nhất cho câu \"When do you usually exercise?\"."
      }
    ],
    "vocabulary": [
      {
        "word": "usually",
        "meaning": "thường xuyên, thông thường",
        "partOfSpeech": "adv"
      },
      {
        "word": "machine",
        "meaning": "máy móc, thiết bị cơ giới",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part3-32-34",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 32 - 34",
    "title": "Part 3 - Câu 32 - 34: Tại sao người phụ nữ lại nói chuyện với người đàn ông",
    "audioSrc": "/audio/test3_2023.mp3",
    "startTime": 821.84,
    "endTime": 897.77,
    "transcript": [
      {
        "id": "p3-32-1",
        "speaker": "Woman",
        "text": "Hello. I had an announcement on the radio about the garden show you're organizing.",
        "vietnamese": "Xin chào. Tôi vừa nhận được thông báo trên radio về chương trình làm vườn mà bạn đang tổ chức."
      },
      {
        "id": "p3-32-2",
        "speaker": "Man",
        "text": "They said it's running all week and there will be several demonstrations about innovative gardening tools.",
        "vietnamese": "Họ cho biết nó sẽ diễn ra cả tuần và sẽ có một số buổi trình diễn về các dụng cụ làm vườn cải tiến."
      },
      {
        "id": "p3-32-3",
        "speaker": "Woman",
        "text": "Could I attend the demonstration scheduled for Wednesday?",
        "vietnamese": "Tôi có thể tham dự cuộc biểu tình dự kiến vào thứ Tư không?"
      },
      {
        "id": "p3-32-4",
        "speaker": "Man",
        "text": "Sorry, but that session's just been cancelled.",
        "vietnamese": "Xin lỗi, nhưng phiên đó vừa bị hủy."
      },
      {
        "id": "p3-32-5",
        "speaker": "Woman",
        "text": "The person leading it had another commitment.",
        "vietnamese": "Người lãnh đạo nó có một cam kết khác."
      },
      {
        "id": "p3-32-6",
        "speaker": "Man",
        "text": "Oh, too bad.",
        "vietnamese": "Ôi, tệ quá."
      },
      {
        "id": "p3-32-7",
        "speaker": "Woman",
        "text": "So are all of the demonstrations cancelled?",
        "vietnamese": "Vậy là tất cả các cuộc biểu tình đều bị hủy bỏ?"
      },
      {
        "id": "p3-32-8",
        "speaker": "Man",
        "text": "No, the demonstration for Saturday is still on.",
        "vietnamese": "Không, cuộc biểu tình vào thứ Bảy vẫn còn tiếp tục."
      },
      {
        "id": "p3-32-9",
        "speaker": "Woman",
        "text": "That's at 1pm.",
        "vietnamese": "Lúc đó là lúc 1 giờ chiều."
      },
      {
        "id": "p3-32-10",
        "speaker": "Man",
        "text": "I can register you for that session.",
        "vietnamese": "Tôi có thể đăng ký cho bạn buổi học đó."
      },
      {
        "id": "p3-32-11",
        "speaker": "Woman",
        "text": "Just get there about 15 minutes before it starts so you'll get a good seat.",
        "vietnamese": "Chỉ cần đến đó khoảng 15 phút trước khi nó bắt đầu để bạn có được chỗ ngồi tốt."
      }
    ],
    "questions": [
      {
        "num": 32,
        "question": "Why is the woman talking to the man?",
        "vietnameseQuestion": "Tại sao người phụ nữ lại nói chuyện với người đàn ông?",
        "options": [
          {
            "key": "A",
            "text": "She wants to cancel a reservation.",
            "vietnamese": "Cô ấy muốn hủy đặt chỗ."
          },
          {
            "key": "B",
            "text": "She wants to watch a demonstration.",
            "vietnamese": "Cô ấy muốn xem một cuộc biểu tình."
          },
          {
            "key": "C",
            "text": "She wants to rent some equipment.",
            "vietnamese": "Cô ấy muốn thuê một số thiết bị."
          },
          {
            "key": "D",
            "text": "She wants to hire a gardener.",
            "vietnamese": "Cô ấy muốn thuê một người làm vườn."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"She wants to watch a demonstration.\" (Cô ấy muốn xem một cuộc biểu tình.)."
      },
      {
        "num": 33,
        "question": "Whatproblemdoesthemanmention?",
        "vietnameseQuestion": "Vấn đề gì được đề cập đến?",
        "options": [
          {
            "key": "A",
            "text": "Agardenshowhasbeen canceled.",
            "vietnamese": "Agardenshow đã bị hủy bỏ."
          },
          {
            "key": "B",
            "text": "A radio program was discontinued.",
            "vietnamese": "Một chương trình phát thanh đã bị ngừng."
          },
          {
            "key": "C",
            "text": "A presenter is not available.",
            "vietnamese": "Người thuyết trình không có sẵn."
          },
          {
            "key": "D",
            "text": "Some equipment is late arriving.",
            "vietnamese": "Một số thiết bị đến muộn."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"A presenter is not available.\" (Người thuyết trình không có sẵn.)."
      },
      {
        "num": 34,
        "question": "What does the man advise the woman to iop",
        "vietnameseQuestion": "Người đàn ông khuyên người phụ nữ làm gì",
        "options": [
          {
            "key": "A",
            "text": "Talk to the manager on Saturday",
            "vietnamese": "Nói chuyện với người quản lý vào thứ bảy"
          },
          {
            "key": "B",
            "text": "Signupforaclassonline",
            "vietnamese": "Đăng ký lớp học trực tuyến"
          },
          {
            "key": "C",
            "text": "Placean orderfor some tools",
            "vietnamese": "Đặt hàng Placean cho một số dụng cụ"
          },
          {
            "key": "D",
            "text": "Arrive early for an event",
            "vietnamese": "Đến sớm cho một sự kiện"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là (D): \"Arrive early for an event\" (Đến sớm cho một sự kiện)."
      }
    ],
    "vocabulary": [
      {
        "word": "innovative",
        "meaning": "sáng tạo, có tính đổi mới",
        "partOfSpeech": "adj"
      },
      {
        "word": "attend",
        "meaning": "tham dự",
        "partOfSpeech": "v"
      },
      {
        "word": "demonstration",
        "meaning": "sự minh họa, thuyết trình sản phẩm",
        "partOfSpeech": "n"
      },
      {
        "word": "scheduled",
        "meaning": "được lên lịch trình",
        "partOfSpeech": "adj"
      }
    ]
  },
  {
    "id": "part3-35-37",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 35 - 37",
    "title": "Part 3 - Câu 35 - 37: Người phụ nữ cần lời khuyên về điều gì",
    "audioSrc": "/audio/test3_2023.mp3",
    "startTime": 897.77,
    "endTime": 979.48,
    "transcript": [
      {
        "id": "p3-35-1",
        "speaker": "Woman",
        "text": "I have all these estimates from different companies for repairing the brickwork in the front of our office building and they're all really similar.",
        "vietnamese": "Tôi có tất cả những ước tính này từ các công ty khác nhau về việc sửa chữa gạch ở phía trước tòa nhà văn phòng của chúng tôi và tất cả chúng đều thực sự giống nhau."
      },
      {
        "id": "p3-35-2",
        "speaker": "Man",
        "text": "How can I decide?",
        "vietnamese": "Làm thế nào tôi có thể quyết định?"
      },
      {
        "id": "p3-35-3",
        "speaker": "Woman",
        "text": "We're just having the patio at the entrance repaid, right?",
        "vietnamese": "Chúng ta chỉ cần trả lại khoảng sân ở lối vào thôi phải không?"
      },
      {
        "id": "p3-35-4",
        "speaker": "Man",
        "text": "Well, we also need a new retaining wall around the garden and to have some additional pathways laid out across the lawn.",
        "vietnamese": "Chà, chúng ta cũng cần một bức tường chắn mới xung quanh khu vườn và có thêm một số lối đi trải dài trên bãi cỏ."
      },
      {
        "id": "p3-35-5",
        "speaker": "Woman",
        "text": "It's actually quite a complex job.",
        "vietnamese": "Thực sự đây là một công việc khá phức tạp."
      },
      {
        "id": "p3-35-6",
        "speaker": "Man",
        "text": "Oh, maybe talk to Mr. Lucas in sales.",
        "vietnamese": "Ồ, có thể nói chuyện với ông Lucas ở bộ phận bán hàng."
      },
      {
        "id": "p3-35-7",
        "speaker": "Woman",
        "text": "His background is in construction.",
        "vietnamese": "Nền tảng của anh ấy là về xây dựng."
      },
      {
        "id": "p3-35-8",
        "speaker": "Man",
        "text": "So maybe he has familiarity with some of the firms and can help you pick one.",
        "vietnamese": "Vì vậy, có thể anh ấy quen thuộc với một số công ty và có thể giúp bạn chọn một công ty."
      },
      {
        "id": "p3-35-9",
        "speaker": "Woman",
        "text": "That's a good idea.",
        "vietnamese": "Đó là một ý tưởng tốt."
      }
    ],
    "questions": [
      {
        "num": 35,
        "question": "Whatdoesthewomanneedadviceabout?",
        "vietnameseQuestion": "Người phụ nữ cần lời khuyên về điều gì?",
        "options": [
          {
            "key": "A",
            "text": "Whichcompany to hire",
            "vietnamese": "Thuê công ty nào"
          },
          {
            "key": "B",
            "text": "Which materials to use",
            "vietnamese": "Sử dụng vật liệu nào"
          },
          {
            "key": "C",
            "text": "When to begin some repair work",
            "vietnamese": "Khi nào bắt đầu một số công việc sửa chữa"
          },
          {
            "key": "D",
            "text": "Where to lay down some paths",
            "vietnamese": "Nơi để đặt một số con đường"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là (A): \"Whichcompany to hire\" (Thuê công ty nào)."
      },
      {
        "num": 36,
        "question": "According to the woman, why is some repair work complicated?",
        "vietnameseQuestion": "Theo người phụ nữ, tại sao một số công việc sửa chữa lại phức tạp?",
        "options": [
          {
            "key": "A",
            "text": "It will take place during the winter.",
            "vietnamese": "Nó sẽ diễn ra vào mùa đông."
          },
          {
            "key": "B",
            "text": "It is part of a larger job.",
            "vietnamese": "Đó là một phần của công việc lớn hơn."
          },
          {
            "key": "C",
            "text": "It has been postponed.",
            "vietnamese": "Nó đã bị hoãn lại."
          },
          {
            "key": "D",
            "text": "It requires a special permit.",
            "vietnamese": "Nó đòi hỏi phải có giấy phép đặc biệt."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"It is part of a larger job.\" (Đó là một phần của công việc lớn hơn.)."
      },
      {
        "num": 37,
        "question": "Whydoesthemantellthewomantotalkto Mr. Lukich?",
        "vietnameseQuestion": "Tại sao người đàn ông lại bảo người phụ nữ nói chuyện với ông Lukich?",
        "options": [
          {
            "key": "A",
            "text": "He can perform some construction work.",
            "vietnamese": "Anh ta có thể thực hiện một số công việc xây dựng."
          },
          {
            "key": "B",
            "text": "His sales record is excellent.",
            "vietnamese": "Kỷ lục bán hàng của anh ấy là tuyệt vời."
          },
          {
            "key": "C",
            "text": "His background is relevant to the woman's needs.",
            "vietnamese": "Nền tảng của anh ấy phù hợp với nhu cầu của người phụ nữ."
          },
          {
            "key": "D",
            "text": "He was assigned to the woman's project.",
            "vietnamese": "Anh được giao cho dự án của người phụ nữ."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"His background is relevant to the woman's needs.\" (Nền tảng của anh ấy phù hợp với nhu cầu của người phụ nữ.)."
      }
    ],
    "vocabulary": [
      {
        "word": "decide",
        "meaning": "quyết định",
        "partOfSpeech": "v"
      },
      {
        "word": "patio",
        "meaning": "khoảng sân hiên ngoài trời",
        "partOfSpeech": "n"
      },
      {
        "word": "entrance",
        "meaning": "lối vào, cổng vào",
        "partOfSpeech": "n"
      },
      {
        "word": "actually",
        "meaning": "thực ra, trên thực tế",
        "partOfSpeech": "adv"
      }
    ]
  },
  {
    "id": "part3-38-40",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 38 - 40",
    "title": "Part 3 - Câu 38 - 40: Người đàn ông đó là ai",
    "audioSrc": "/audio/test3_2023.mp3",
    "startTime": 979.48,
    "endTime": 1061.42,
    "transcript": [
      {
        "id": "p3-38-1",
        "speaker": "Woman",
        "text": "Hi, I'm the general manager of the Sunrise Mall Shopping Center in town.",
        "vietnamese": "Xin chào, tôi là tổng giám đốc của Trung tâm mua sắm Sunrise Mall trong thị trấn."
      },
      {
        "id": "p3-38-2",
        "speaker": "Man",
        "text": "I heard your band playing last month at the town fair and got your contact information.",
        "vietnamese": "Tôi đã nghe ban nhạc của bạn biểu diễn vào tháng trước tại hội chợ thị trấn và đã lấy được thông tin liên lạc của bạn."
      },
      {
        "id": "p3-38-3",
        "speaker": "Woman",
        "text": "I really enjoyed your music.",
        "vietnamese": "Tôi thực sự rất thích âm nhạc của bạn."
      },
      {
        "id": "p3-38-4",
        "speaker": "Man",
        "text": "Thank you.",
        "vietnamese": "Cảm ơn."
      },
      {
        "id": "p3-38-5",
        "speaker": "Woman",
        "text": "We're a local band and it's always a pleasure to hear from our audience.",
        "vietnamese": "Chúng tôi là một ban nhạc địa phương và chúng tôi luôn hân hạnh được nghe phản hồi từ khán giả."
      },
      {
        "id": "p3-38-6",
        "speaker": "Man",
        "text": "The reason I'm calling is that I'm wondering if you'd be interested in playing music at the shopping center on a Saturday afternoon sometime.",
        "vietnamese": "Lý do tôi gọi là vì không biết liệu bạn có muốn chơi nhạc ở trung tâm mua sắm vào một buổi chiều thứ bảy nào đó không."
      },
      {
        "id": "p3-38-7",
        "speaker": "Woman",
        "text": "The date can be flexible.",
        "vietnamese": "Ngày có thể linh hoạt."
      },
      {
        "id": "p3-38-8",
        "speaker": "Man",
        "text": "Sure.",
        "vietnamese": "Chắc chắn."
      },
      {
        "id": "p3-38-9",
        "speaker": "Woman",
        "text": "We can play the first Saturday of March.",
        "vietnamese": "Chúng ta có thể chơi vào thứ bảy đầu tiên của tháng ba."
      },
      {
        "id": "p3-38-10",
        "speaker": "Man",
        "text": "But where exactly will we be performing?",
        "vietnamese": "Nhưng chính xác thì chúng ta sẽ biểu diễn ở đâu?"
      },
      {
        "id": "p3-38-11",
        "speaker": "Woman",
        "text": "There's a detailed map of the shopping center on our website.",
        "vietnamese": "Có bản đồ chi tiết về trung tâm mua sắm trên trang web của chúng tôi."
      },
      {
        "id": "p3-38-12",
        "speaker": "Man",
        "text": "It'll show you where our event space is.",
        "vietnamese": "Nó sẽ cho bạn thấy không gian tổ chức sự kiện của chúng tôi ở đâu."
      }
    ],
    "questions": [
      {
        "num": 38,
        "question": "Who is the man?",
        "vietnameseQuestion": "Người đàn ông đó là ai?",
        "options": [
          {
            "key": "A",
            "text": "A marketing agent TEST3",
            "vietnamese": "Đại lý tiếp thị TEST3"
          },
          {
            "key": "B",
            "text": "Amusician",
            "vietnamese": "nhạc sĩ"
          },
          {
            "key": "C",
            "text": "An event organizer",
            "vietnamese": "Một nhà tổ chức sự kiện"
          },
          {
            "key": "D",
            "text": "Ajournalist",
            "vietnamese": "nhà báo"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"Amusician\" (nhạc sĩ)."
      },
      {
        "num": 39,
        "question": "What does the woman want to do?",
        "vietnameseQuestion": "Người phụ nữ muốn làm gì?",
        "options": [
          {
            "key": "A",
            "text": "Host an international fair",
            "vietnamese": "Tổ chức hội chợ quốc tế"
          },
          {
            "key": "B",
            "text": "Create a new parking area",
            "vietnamese": "Tạo khu vực đậu xe mới"
          },
          {
            "key": "C",
            "text": "Organize a concert",
            "vietnamese": "Tổ chức một buổi hòa nhạc"
          },
          {
            "key": "D",
            "text": "Give an interview",
            "vietnamese": "Trả lời phỏng vấn"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"Organize a concert\" (Tổ chức một buổi hòa nhạc)."
      },
      {
        "num": 40,
        "question": "What does the woman suggest the man do?",
        "vietnameseQuestion": "Người phụ nữ đề nghị người đàn ông làm gì?",
        "options": [
          {
            "key": "A",
            "text": "View a map",
            "vietnamese": "Xem bản đồ"
          },
          {
            "key": "B",
            "text": "Schedule a meeting",
            "vietnamese": "Lên lịch cuộc họp"
          },
          {
            "key": "C",
            "text": "Provide references",
            "vietnamese": "Cung cấp tài liệu tham khảo"
          },
          {
            "key": "D",
            "text": "Decorate a space",
            "vietnamese": "Trang trí một không gian"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là (A): \"View a map\" (Xem bản đồ)."
      }
    ],
    "vocabulary": [
      {
        "word": "contact",
        "meaning": "liên hệ, liên lạc",
        "partOfSpeech": "v"
      },
      {
        "word": "local",
        "meaning": "thuộc địa phương",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part3-41-43",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 41 - 43",
    "title": "Part 3 - Câu 41 - 43: Người nói có khả năng nhất ở đâu",
    "audioSrc": "/audio/test3_2023.mp3",
    "startTime": 1061.42,
    "endTime": 1150.74,
    "transcript": [
      {
        "id": "p3-41-1",
        "speaker": "Woman",
        "text": "Hi, Kirsten.",
        "vietnamese": "Chào, Kirsten."
      },
      {
        "id": "p3-41-2",
        "speaker": "Man",
        "text": "I'm glad to finally see you.",
        "vietnamese": "Tôi rất vui vì cuối cùng cũng được gặp bạn."
      },
      {
        "id": "p3-41-3",
        "speaker": "Woman",
        "text": "Looks like you've been busy.",
        "vietnamese": "Có vẻ như bạn đang bận rộn."
      },
      {
        "id": "p3-41-4",
        "speaker": "Man",
        "text": "Yes.",
        "vietnamese": "Đúng."
      },
      {
        "id": "p3-41-5",
        "speaker": "Woman",
        "text": "This show is particularly popular.",
        "vietnamese": "Chương trình này đặc biệt phổ biến."
      },
      {
        "id": "p3-41-6",
        "speaker": "Man",
        "text": "Jose's paintings really draw a crowd.",
        "vietnamese": "Những bức tranh của Jose thực sự thu hút một đám đông."
      },
      {
        "id": "p3-41-7",
        "speaker": "Woman",
        "text": "He's selling a lot of them too.",
        "vietnamese": "Anh ấy cũng bán rất nhiều thứ."
      },
      {
        "id": "p3-41-8",
        "speaker": "Man",
        "text": "Oh, they're great.",
        "vietnamese": "Ồ, chúng thật tuyệt."
      },
      {
        "id": "p3-41-9",
        "speaker": "Woman",
        "text": "I'm thinking of buying one myself.",
        "vietnamese": "Tôi đang nghĩ đến việc mua một cái cho riêng mình."
      },
      {
        "id": "p3-41-10",
        "speaker": "Man",
        "text": "You should.",
        "vietnamese": "Bạn nên làm vậy."
      },
      {
        "id": "p3-41-11",
        "speaker": "Woman",
        "text": "Sorry, I've been so busy lately.",
        "vietnamese": "Xin lỗi, gần đây tôi bận quá."
      },
      {
        "id": "p3-41-12",
        "speaker": "Man",
        "text": "I've been swamped at school plus it's taken a lot to plan the show.",
        "vietnamese": "Tôi đang bận rộn ở trường và phải mất rất nhiều thời gian để lên kế hoạch cho buổi biểu diễn."
      },
      {
        "id": "p3-41-13",
        "speaker": "Woman",
        "text": "Hey, would you want to get together with Janet and Mico for lunch next week?",
        "vietnamese": "Này, bạn có muốn cùng ăn trưa với Janet và Mico vào tuần tới không?"
      },
      {
        "id": "p3-41-14",
        "speaker": "Man",
        "text": "Sure.",
        "vietnamese": "Chắc chắn."
      },
      {
        "id": "p3-41-15",
        "speaker": "Woman",
        "text": "Sounds great.",
        "vietnamese": "Âm thanh tuyệt vời."
      }
    ],
    "questions": [
      {
        "num": 41,
        "question": "Wheremostlikelyarethespeakers?",
        "vietnameseQuestion": "Người nói có khả năng nhất ở đâu?",
        "options": [
          {
            "key": "A",
            "text": "At a café",
            "vietnamese": "Tại một quán cà phê"
          },
          {
            "key": "B",
            "text": "At an art gallery",
            "vietnamese": "Tại một phòng trưng bày nghệ thuật"
          },
          {
            "key": "C",
            "text": "At a school",
            "vietnamese": "Tại một trường học"
          },
          {
            "key": "D",
            "text": "At an art supply store",
            "vietnamese": "Tại một cửa hàng cung cấp nghệ thuật"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"At an art gallery\" (Tại một phòng trưng bày nghệ thuật)."
      },
      {
        "num": 42,
        "question": "What does the man sayhe might do?",
        "vietnameseQuestion": "Người đàn ông nói anh ta có thể làm gì?",
        "options": [
          {
            "key": "A",
            "text": "Buy a painting",
            "vietnamese": "Mua một bức tranh"
          },
          {
            "key": "B",
            "text": "Speak to Jose",
            "vietnamese": "Nói chuyện với Jose"
          },
          {
            "key": "C",
            "text": "Invite friends to a show",
            "vietnamese": "Mời bạn bè đến buổi biểu diễn"
          },
          {
            "key": "D",
            "text": "Go home",
            "vietnamese": "Về nhà"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là (A): \"Buy a painting\" (Mua một bức tranh)."
      },
      {
        "num": 43,
        "question": "What plan do the speakers make?",
        "vietnameseQuestion": "Các diễn giả thực hiện kế hoạch gì?",
        "options": [
          {
            "key": "A",
            "text": "To visit some artists",
            "vietnamese": "Đến thăm một số nghệ sĩ"
          },
          {
            "key": "B",
            "text": "To organize a show",
            "vietnamese": "Để tổ chức một buổi biểu diễn"
          },
          {
            "key": "C",
            "text": "To meet some sponsors",
            "vietnamese": "Gặp gỡ một số nhà tài trợ"
          },
          {
            "key": "D",
            "text": "To go out to lunch GOONTOTHENEXTPAGE",
            "vietnamese": "Để đi ăn trưa GONTOTHENEXTPAGE"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là (D): \"To go out to lunch GOONTOTHENEXTPAGE\" (Để đi ăn trưa GONTOTHENEXTPAGE)."
      }
    ],
    "vocabulary": [
      {
        "word": "finally",
        "meaning": "cuối cùng",
        "partOfSpeech": "adv"
      }
    ]
  },
  {
    "id": "part3-44-46",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 44 - 46",
    "title": "Part 3 - Câu 44 - 46: Các diễn giả có khả năng làm việc ở đâu nhất",
    "audioSrc": "/audio/test3_2023.mp3",
    "startTime": 1150.74,
    "endTime": 1224.03,
    "transcript": [
      {
        "id": "p3-44-1",
        "speaker": "Woman",
        "text": "Thanks for stopping by, Lynn.",
        "vietnamese": "Cảm ơn vì đã ghé qua, Lynn."
      },
      {
        "id": "p3-44-2",
        "speaker": "Man",
        "text": "I'd like to discuss the candidates we interviewed yesterday for the legal assistant position.",
        "vietnamese": "Tôi muốn thảo luận về những ứng viên mà chúng tôi đã phỏng vấn ngày hôm qua cho vị trí trợ lý pháp lý."
      },
      {
        "id": "p3-44-3",
        "speaker": "Woman",
        "text": "I was very impressed with Mr. Smith's work history.",
        "vietnamese": "Tôi rất ấn tượng với quá trình làm việc của ông Smith."
      },
      {
        "id": "p3-44-4",
        "speaker": "Man",
        "text": "Yeah, he has a lot of relevant experience in the legal field, but he didn't answer our questions very clearly.",
        "vietnamese": "Vâng, anh ấy có nhiều kinh nghiệm liên quan trong lĩnh vực pháp lý, nhưng anh ấy chưa trả lời rõ ràng các câu hỏi của chúng tôi."
      },
      {
        "id": "p3-44-5",
        "speaker": "Woman",
        "text": "Still, I think he'd be a great help preparing the legal briefs for our clients.",
        "vietnamese": "Tuy nhiên, tôi nghĩ anh ấy sẽ giúp ích rất nhiều cho việc chuẩn bị các bản tóm tắt pháp lý cho khách hàng của chúng ta."
      },
      {
        "id": "p3-44-6",
        "speaker": "Man",
        "text": "I'd push from Ms. Wong.",
        "vietnamese": "Tôi sẽ thúc đẩy từ cô Wong."
      },
      {
        "id": "p3-44-7",
        "speaker": "Woman",
        "text": "Not only was she clear and direct, but I call one of her references, and her former supervisor couldn't praise her enough.",
        "vietnamese": "Cô ấy không chỉ rõ ràng và thẳng thắn mà tôi còn gọi điện cho một trong những người giới thiệu của cô ấy, và người quản lý cũ của cô ấy không thể khen ngợi cô ấy đủ."
      },
      {
        "id": "p3-44-8",
        "speaker": "Man",
        "text": "That's good to know.",
        "vietnamese": "Thật tốt khi biết điều đó."
      },
      {
        "id": "p3-44-9",
        "speaker": "Woman",
        "text": "Let me take another look at her work history.",
        "vietnamese": "Hãy để tôi xem xét lại lịch sử công việc của cô ấy."
      }
    ],
    "questions": [
      {
        "num": 44,
        "question": "Wheredo the speakers most likelywork?",
        "vietnameseQuestion": "Các diễn giả có khả năng làm việc ở đâu nhất?",
        "options": [
          {
            "key": "A",
            "text": "At a hospital",
            "vietnamese": "Tại một bệnh viện"
          },
          {
            "key": "B",
            "text": "At a law firm",
            "vietnamese": "Tại một công ty luật"
          },
          {
            "key": "C",
            "text": "At a university",
            "vietnamese": "Tại một trường đại học"
          },
          {
            "key": "D",
            "text": "At a manufacturing company",
            "vietnamese": "Tại một công ty sản xuất"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"At a law firm\" (Tại một công ty luật)."
      },
      {
        "num": 45,
        "question": "Why does the man object to Mr. Smith?",
        "vietnameseQuestion": "Tại sao người đàn ông phản đối ông Smith?",
        "options": [
          {
            "key": "A",
            "text": "Hedoes not have an extensive work history.",
            "vietnamese": "Anh ấy không có quá trình làm việc sâu rộng."
          },
          {
            "key": "B",
            "text": "He was late for the interview.",
            "vietnamese": "Anh ấy đã đến muộn trong cuộc phỏng vấn."
          },
          {
            "key": "C",
            "text": "He did not answer questions clearly.",
            "vietnamese": "Anh ấy không trả lời các câu hỏi một cách rõ ràng."
          },
          {
            "key": "D",
            "text": "He did not dress appropriately.",
            "vietnamese": "Anh ấy ăn mặc không phù hợp."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"He did not answer questions clearly.\" (Anh ấy không trả lời các câu hỏi một cách rõ ràng.)."
      },
      {
        "num": 46,
        "question": "Whatwill the woman do next?",
        "vietnameseQuestion": "Người phụ nữ sẽ làm gì tiếp theo?",
        "options": [
          {
            "key": "A",
            "text": "Double-checkMs.Wong's references",
            "vietnamese": "Kiểm tra kỹ tài liệu tham khảo của Ms.Wong"
          },
          {
            "key": "B",
            "text": "Answer Ms.Wong's question",
            "vietnamese": "Trả lời câu hỏi của cô Vương"
          },
          {
            "key": "C",
            "text": "ReviewMs.Wong's employmenthistory",
            "vietnamese": "Review quá trình làm việc của Ms.Wong"
          },
          {
            "key": "D",
            "text": "Bring Ms. Wong in for another interview",
            "vietnamese": "Đưa cô Wong đến phỏng vấn lần nữa"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"ReviewMs.Wong's employmenthistory\" (Review quá trình làm việc của Ms.Wong)."
      }
    ],
    "vocabulary": [
      {
        "word": "assistant",
        "meaning": "người trợ lý",
        "partOfSpeech": "n"
      },
      {
        "word": "impressed",
        "meaning": "bị ấn tượng, khâm phục",
        "partOfSpeech": "adj"
      },
      {
        "word": "supervisor",
        "meaning": "người giám sát, quản lý",
        "partOfSpeech": "n"
      },
      {
        "word": "enough",
        "meaning": "đủ",
        "partOfSpeech": "adj"
      }
    ]
  },
  {
    "id": "part3-47-49",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 47 - 49",
    "title": "Part 3 - Câu 47 - 49: Cuộc trò chuyện có khả năng diễn ra ở đâu nhất",
    "audioSrc": "/audio/test3_2023.mp3",
    "startTime": 1224.03,
    "endTime": 1311.98,
    "transcript": [
      {
        "id": "p3-47-1",
        "speaker": "Woman",
        "text": "Good morning.",
        "vietnamese": "Chào buổi sáng."
      },
      {
        "id": "p3-47-2",
        "speaker": "Man",
        "text": "This is the front desk.",
        "vietnamese": "Đây là quầy lễ tân."
      },
      {
        "id": "p3-47-3",
        "speaker": "Woman",
        "text": "How may I help you?",
        "vietnamese": "Tôi có thể giúp gì cho bạn?"
      },
      {
        "id": "p3-47-4",
        "speaker": "Man",
        "text": "Yes.",
        "vietnamese": "Đúng."
      },
      {
        "id": "p3-47-5",
        "speaker": "Woman",
        "text": "Hi, it's 7am and I'm hearing drilling in the room above me.",
        "vietnamese": "Xin chào, bây giờ là 7 giờ sáng và tôi đang nghe thấy tiếng khoan ở phòng phía trên."
      },
      {
        "id": "p3-47-6",
        "speaker": "Man",
        "text": "That's right.",
        "vietnamese": "Đúng vậy."
      },
      {
        "id": "p3-47-7",
        "speaker": "Woman",
        "text": "We are doing bathroom renovations on that floor.",
        "vietnamese": "Chúng tôi đang cải tạo phòng tắm ở tầng đó."
      },
      {
        "id": "p3-47-8",
        "speaker": "Man",
        "text": "We posted notices about the project near the check-in desk and around the lobby.",
        "vietnamese": "Chúng tôi dán thông báo về dự án gần bàn làm thủ tục và xung quanh sảnh."
      },
      {
        "id": "p3-47-9",
        "speaker": "Woman",
        "text": "I have a conference call at 8am.",
        "vietnamese": "Tôi có cuộc gọi hội nghị lúc 8 giờ sáng."
      },
      {
        "id": "p3-47-10",
        "speaker": "Man",
        "text": "Let me see about finding an alternate accommodation for you in another wing.",
        "vietnamese": "Hãy để tôi xem xét việc tìm chỗ ở thay thế cho bạn ở khu khác."
      },
      {
        "id": "p3-47-11",
        "speaker": "Woman",
        "text": "That would be great.",
        "vietnamese": "Điều đó sẽ tuyệt vời."
      },
      {
        "id": "p3-47-12",
        "speaker": "Man",
        "text": "Due to a schedule change, I will be working for my room all day.",
        "vietnamese": "Do thay đổi lịch trình nên tôi sẽ làm việc tại phòng cả ngày."
      }
    ],
    "questions": [
      {
        "num": 47,
        "question": "Wheremostlikely is the conversationtaking place?",
        "vietnameseQuestion": "Cuộc trò chuyện có khả năng diễn ra ở đâu nhất?",
        "options": [
          {
            "key": "A",
            "text": "In an office building",
            "vietnamese": "Trong một tòa nhà văn phòng"
          },
          {
            "key": "B",
            "text": "In a hotel",
            "vietnamese": "trong một khách sạn"
          },
          {
            "key": "C",
            "text": "In an apartment complex",
            "vietnamese": "Trong một khu chung cư"
          },
          {
            "key": "D",
            "text": "In a hospital",
            "vietnamese": "Trong bệnh viện"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"In a hotel\" (trong một khách sạn)."
      },
      {
        "num": 48,
        "question": "What does the woman imply when she says, \"I have a conference call at 8 A.M.\"?",
        "vietnameseQuestion": "Người phụ nữ có ý gì khi nói: \"Tôi có cuộc gọi hội nghị lúc 8 giờ sáng\"?",
        "options": [
          {
            "key": "A",
            "text": "She will notbe ableto meettheman.",
            "vietnamese": "Cô ấy sẽ không thể gặp được người đàn ông đó."
          },
          {
            "key": "B",
            "text": "Shewould likeafasterInternet connection.",
            "vietnamese": "Cô ấy muốn kết nối Internet nhanh hơn."
          },
          {
            "key": "C",
            "text": "She would like to check out early.",
            "vietnamese": "Cô ấy muốn trả phòng sớm."
          },
          {
            "key": "D",
            "text": "She cannot work because of some noise.",
            "vietnamese": "Cô ấy không thể làm việc vì một số tiếng ồn."
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là (D): \"She cannot work because of some noise.\" (Cô ấy không thể làm việc vì một số tiếng ồn.)."
      },
      {
        "num": 49,
        "question": "What does the man say he will do?",
        "vietnameseQuestion": "Người đàn ông nói anh ta sẽ làm gì?",
        "options": [
          {
            "key": "A",
            "text": "Try to find the woman another room",
            "vietnamese": "Cố gắng tìm cho người phụ nữ một căn phòng khác"
          },
          {
            "key": "B",
            "text": "Give the womanarefund",
            "vietnamese": "Đưa tiền cho người phụ nữ"
          },
          {
            "key": "C",
            "text": "Bring the notice to the woman's room",
            "vietnamese": "Mang thông báo đến phòng nữ"
          },
          {
            "key": "D",
            "text": "Ask that the drilling be stopped 54",
            "vietnamese": "Yêu cầu dừng việc khoan 54"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là (A): \"Try to find the woman another room\" (Cố gắng tìm cho người phụ nữ một căn phòng khác)."
      }
    ],
    "vocabulary": [
      {
        "word": "floor",
        "meaning": "tầng, sàn nhà",
        "partOfSpeech": "n"
      },
      {
        "word": "project",
        "meaning": "dự án",
        "partOfSpeech": "n"
      },
      {
        "word": "lobby",
        "meaning": "tiền sảnh",
        "partOfSpeech": "n"
      },
      {
        "word": "conference",
        "meaning": "hội nghị chuyên đề",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part3-50-52",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 50 - 52",
    "title": "Part 3 - Câu 50 - 52: Các diễn giả chủ yếu thảo luận về vấn đề gì",
    "audioSrc": "/audio/test3_2023.mp3",
    "startTime": 1311.98,
    "endTime": 1383.36,
    "transcript": [
      {
        "id": "p3-50-1",
        "speaker": "Woman",
        "text": "I like your idea mark about producing a new line of touchless voice-activated smartlamps.",
        "vietnamese": "Tôi thích ý tưởng của bạn về việc sản xuất một dòng đèn thông minh mới được kích hoạt bằng giọng nói không cần chạm."
      },
      {
        "id": "p3-50-2",
        "speaker": "Man",
        "text": "If we were going to do that, we'd need to hire a new consultant for me with that technology, which would not be cheap.",
        "vietnamese": "Nếu chúng tôi định làm điều đó, chúng tôi cần phải thuê một nhà tư vấn mới cho tôi về công nghệ đó, chi phí sẽ không hề rẻ."
      },
      {
        "id": "p3-50-3",
        "speaker": "Woman",
        "text": "Given that we went over on our production costs last year, it doesn't seem likely we'd have the budget.",
        "vietnamese": "Vì năm ngoái chúng tôi đã vượt quá chi phí sản xuất nên có vẻ như chúng tôi không có đủ ngân sách."
      },
      {
        "id": "p3-50-4",
        "speaker": "Man",
        "text": "What if we reduced our spending on advertising temporarily and used the savings to hire the new consultant?",
        "vietnamese": "Điều gì sẽ xảy ra nếu chúng ta tạm thời giảm chi tiêu cho quảng cáo và sử dụng số tiền tiết kiệm được để thuê nhà tư vấn mới?"
      },
      {
        "id": "p3-50-5",
        "speaker": "Woman",
        "text": "The decrease in advertising might cause a temporary drop in revenue, but I think we should make up for it when we launch the lamps.",
        "vietnamese": "Việc giảm quảng cáo có thể khiến doanh thu giảm tạm thời, nhưng tôi nghĩ chúng ta nên bù đắp bằng việc tung ra thị trường đèn."
      }
    ],
    "questions": [
      {
        "num": 50,
        "question": "What are the speakers mainly discussing?",
        "vietnameseQuestion": "Các diễn giả chủ yếu thảo luận về vấn đề gì?",
        "options": [
          {
            "key": "A",
            "text": "Employee responsibilities",
            "vietnamese": "Trách nhiệm của nhân viên"
          },
          {
            "key": "B",
            "text": "An advertising campaign",
            "vietnamese": "Một chiến dịch quảng cáo"
          },
          {
            "key": "C",
            "text": "Developing a new product",
            "vietnamese": "Phát triển một sản phẩm mới"
          },
          {
            "key": "D",
            "text": "A type of phone",
            "vietnamese": "Một loại điện thoại"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"Developing a new product\" (Phát triển một sản phẩm mới)."
      },
      {
        "num": 51,
        "question": "What do the women imply about hiring a newconsultant?",
        "vietnameseQuestion": "Những người phụ nữ ám chỉ gì về việc thuê một nhà tư vấn mới?",
        "options": [
          {
            "key": "A",
            "text": "It would be expensive.",
            "vietnamese": "Nó sẽ đắt tiền."
          },
          {
            "key": "B",
            "text": "It might not solve their problem.",
            "vietnamese": "Nó có thể không giải quyết được vấn đề của họ."
          },
          {
            "key": "C",
            "text": "It will be challenging to find someone with the right skills.",
            "vietnamese": "Sẽ rất khó để tìm được người có kỹ năng phù hợp."
          },
          {
            "key": "D",
            "text": "It has already happened.",
            "vietnamese": "Nó đã xảy ra rồi."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là (A): \"It would be expensive.\" (Nó sẽ đắt tiền.)."
      },
      {
        "num": 52,
        "question": "What does the man suggest they do?",
        "vietnameseQuestion": "Người đàn ông đề nghị họ làm gì?",
        "options": [
          {
            "key": "A",
            "text": "Stop production",
            "vietnamese": "Ngừng sản xuất"
          },
          {
            "key": "B",
            "text": "Hire temporary employees",
            "vietnamese": "Thuê nhân viên tạm thời"
          },
          {
            "key": "C",
            "text": "Review costs",
            "vietnamese": "Xem xét chi phí"
          },
          {
            "key": "D",
            "text": "Spend less on advertising",
            "vietnamese": "Chi tiêu ít hơn cho quảng cáo"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là (D): \"Spend less on advertising\" (Chi tiêu ít hơn cho quảng cáo)."
      }
    ],
    "vocabulary": [
      {
        "word": "line",
        "meaning": "xếp thành hàng dọc theo",
        "partOfSpeech": "v"
      },
      {
        "word": "hire",
        "meaning": "tuyển dụng, thuê",
        "partOfSpeech": "v"
      },
      {
        "word": "budget",
        "meaning": "ngân sách",
        "partOfSpeech": "n"
      },
      {
        "word": "advertising",
        "meaning": "hoạt động quảng cáo",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part3-53-55",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 53 - 55",
    "title": "Part 3 - Câu 53 - 55: Người nói có thể ở đâu nhất",
    "audioSrc": "/audio/test3_2023.mp3",
    "startTime": 1383.36,
    "endTime": 1468.5,
    "transcript": [
      {
        "id": "p3-53-1",
        "speaker": "Woman",
        "text": "Have you been having any problems with the therapeutic ultrasound machine?",
        "vietnamese": "Bạn có gặp vấn đề gì với máy siêu âm trị liệu không?"
      },
      {
        "id": "p3-53-2",
        "speaker": "Man",
        "text": "My patient just said he didn't feel his muscles were responding as usual.",
        "vietnamese": "Bệnh nhân của tôi chỉ nói rằng anh ấy không cảm thấy cơ bắp của mình phản ứng như bình thường."
      },
      {
        "id": "p3-53-3",
        "speaker": "Woman",
        "text": "It has been acting funny, perhaps we should call the technician?",
        "vietnamese": "Nó đang diễn ra buồn cười, có lẽ chúng ta nên gọi cho kỹ thuật viên?"
      },
      {
        "id": "p3-53-4",
        "speaker": "Man",
        "text": "Maybe.",
        "vietnamese": "Có lẽ."
      },
      {
        "id": "p3-53-5",
        "speaker": "Woman",
        "text": "I'm afraid it's getting pretty old though.",
        "vietnamese": "Tuy nhiên tôi e rằng nó đã khá cũ rồi."
      },
      {
        "id": "p3-53-6",
        "speaker": "Man",
        "text": "We may need to replace it.",
        "vietnamese": "Chúng tôi có thể cần phải thay thế nó."
      },
      {
        "id": "p3-53-7",
        "speaker": "Woman",
        "text": "Okay, I'll notify Barbara since she has to sign off on all purchases.",
        "vietnamese": "Được rồi, tôi sẽ thông báo cho Barbara vì cô ấy phải ký xác nhận mọi giao dịch mua hàng."
      },
      {
        "id": "p3-53-8",
        "speaker": "Man",
        "text": "By the way, can you see Mr. Cohen for me tomorrow?",
        "vietnamese": "Nhân tiện, ngày mai bạn có thể gặp ông Cohen giúp tôi được không?"
      },
      {
        "id": "p3-53-9",
        "speaker": "Woman",
        "text": "He just needs to do some exercises for his wrist.",
        "vietnamese": "Anh ấy chỉ cần tập một số bài tập cho cổ tay của mình."
      },
      {
        "id": "p3-53-10",
        "speaker": "Man",
        "text": "He's been responding well to the treatment.",
        "vietnamese": "Anh ấy đang phản ứng tốt với việc điều trị."
      }
    ],
    "questions": [
      {
        "num": 53,
        "question": "Where most likely are the speakers?",
        "vietnameseQuestion": "Người nói có thể ở đâu nhất?",
        "options": [
          {
            "key": "A",
            "text": "In a medical office",
            "vietnamese": "Trong một văn phòng y tế"
          },
          {
            "key": "B",
            "text": "At a repair shop",
            "vietnamese": "Tại một cửa hàng sửa chữa"
          },
          {
            "key": "C",
            "text": "At a department store",
            "vietnamese": "Tại một cửa hàng bách hóa"
          },
          {
            "key": "D",
            "text": "In a warehouse",
            "vietnamese": "Trong một nhà kho"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là (A): \"In a medical office\" (Trong một văn phòng y tế)."
      },
      {
        "num": 54,
        "question": "WhomostlikelyisBarbara?",
        "vietnameseQuestion": "Ai có khả năng nhất là Barbara?",
        "options": [
          {
            "key": "A",
            "text": "A technician",
            "vietnamese": "Một kỹ thuật viên"
          },
          {
            "key": "B",
            "text": "Amanager",
            "vietnamese": "Người quản lý"
          },
          {
            "key": "C",
            "text": "A salesperson",
            "vietnamese": "Một nhân viên bán hàng"
          },
          {
            "key": "D",
            "text": "Afitness instructor",
            "vietnamese": "Người hướng dẫn thể dục"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"Amanager\" (Người quản lý)."
      },
      {
        "num": 55,
        "question": "What does the man ask the woman to do?",
        "vietnameseQuestion": "Người đàn ông yêu cầu người phụ nữ làm gì?",
        "options": [
          {
            "key": "A",
            "text": "Order some supplies",
            "vietnamese": "Đặt mua một số vật dụng"
          },
          {
            "key": "B",
            "text": "Call Barbara",
            "vietnamese": "Gọi cho Barbara"
          },
          {
            "key": "C",
            "text": "Reserve an exercise room",
            "vietnamese": "Đặt phòng tập thể dục"
          },
          {
            "key": "D",
            "text": "Help a patient tomorrow",
            "vietnamese": "Giúp đỡ một bệnh nhân vào ngày mai"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là (D): \"Help a patient tomorrow\" (Giúp đỡ một bệnh nhân vào ngày mai)."
      }
    ],
    "vocabulary": [
      {
        "word": "machine",
        "meaning": "máy móc, thiết bị cơ giới",
        "partOfSpeech": "n"
      },
      {
        "word": "patient",
        "meaning": "bệnh nhân",
        "partOfSpeech": "n"
      },
      {
        "word": "technician",
        "meaning": "kỹ thuật viên",
        "partOfSpeech": "n"
      },
      {
        "word": "replace",
        "meaning": "thay thế",
        "partOfSpeech": "v"
      }
    ]
  },
  {
    "id": "part3-56-58",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 56 - 58",
    "title": "Part 3 - Câu 56 - 58: Người phụ nữ có ý gì khi nói \"họ duy trì khu vực đỗ xe và...",
    "audioSrc": "/audio/test3_2023.mp3",
    "startTime": 1468.5,
    "endTime": 1539.94,
    "transcript": [
      {
        "id": "p3-56-1",
        "speaker": "Woman",
        "text": "I'm preparing the budget report for our monthly meeting, but can I ask you about the bill for landscaping?",
        "vietnamese": "Tôi đang chuẩn bị báo cáo ngân sách cho cuộc họp hàng tháng của chúng ta, nhưng tôi có thể hỏi bạn về dự luật chi phí cảnh quan không?"
      },
      {
        "id": "p3-56-2",
        "speaker": "Man",
        "text": "It seems very high.",
        "vietnamese": "Có vẻ như rất cao."
      },
      {
        "id": "p3-56-3",
        "speaker": "Woman",
        "text": "I'm in mind that they maintain the parking area and outdoor lighting.",
        "vietnamese": "Tôi nhớ rằng họ duy trì khu vực đỗ xe và hệ thống chiếu sáng ngoài trời."
      },
      {
        "id": "p3-56-4",
        "speaker": "Man",
        "text": "Well, the real issue is that we share the expenses with the medical clinic next door.",
        "vietnamese": "Chà, vấn đề thực sự là chúng tôi chia sẻ chi phí với phòng khám y tế bên cạnh."
      },
      {
        "id": "p3-56-5",
        "speaker": "Woman",
        "text": "With patients coming to the clinic, they use far more parking spaces than we do, and the way we divide the costs should reflect that.",
        "vietnamese": "Với những bệnh nhân đến phòng khám, họ sử dụng nhiều chỗ đỗ xe hơn chúng tôi và cách chúng tôi phân chia chi phí sẽ phản ánh điều đó."
      },
      {
        "id": "p3-56-6",
        "speaker": "Man",
        "text": "I think you're right. I'll email the clinic about it.",
        "vietnamese": "Tôi nghĩ bạn đúng. Tôi sẽ gửi email cho phòng khám về việc đó."
      }
    ],
    "questions": [
      {
        "num": 56,
        "question": "What does the woman imply when she says, \"they maintain the parking area and outdoor lighting\"?",
        "vietnameseQuestion": "Người phụ nữ có ý gì khi nói \"họ duy trì khu vực đỗ xe và hệ thống chiếu sáng ngoài trời\"?",
        "options": [
          {
            "key": "A",
            "text": "Items were mistakenly added to a bill.",
            "vietnamese": "Các mục đã được thêm nhầm vào hóa đơn."
          },
          {
            "key": "B",
            "text": "Some costs might be reasonable.",
            "vietnamese": "Một số chi phí có thể hợp lý."
          },
          {
            "key": "C",
            "text": "New rates went into effect.",
            "vietnamese": "Tỷ giá mới đã có hiệu lực."
          },
          {
            "key": "D",
            "text": "A billing period is longer than one month.",
            "vietnamese": "Thời hạn thanh toán dài hơn một tháng."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"Some costs might be reasonable.\" (Một số chi phí có thể hợp lý.)."
      },
      {
        "num": 57,
        "question": "Whatdoesthemanthinkamedical clinic should do?",
        "vietnameseQuestion": "Phòng khám đa khoa nên làm gì?",
        "options": [
          {
            "key": "A",
            "text": "Hire more employees",
            "vietnamese": "Thuê thêm nhân viên"
          },
          {
            "key": "B",
            "text": "Use fewer parking spaces",
            "vietnamese": "Sử dụng ít chỗ đậu xe hơn"
          },
          {
            "key": "C",
            "text": "Pay a larger share of a bill",
            "vietnamese": "Trả phần lớn hơn của hóa đơn"
          },
          {
            "key": "D",
            "text": "Move to anew building",
            "vietnamese": "Chuyển đến tòa nhà mới"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"Pay a larger share of a bill\" (Trả phần lớn hơn của hóa đơn)."
      },
      {
        "num": 58,
        "question": "Whatwill thewomanmost likelydoatthe monthly meeting?",
        "vietnameseQuestion": "Người phụ nữ có nhiều khả năng sẽ làm gì nhất trong cuộc họp hàng tháng?",
        "options": [
          {
            "key": "A",
            "text": "Chooseanewlandscapingcompany",
            "vietnamese": "Chọn một công ty cảnh quan mới"
          },
          {
            "key": "B",
            "text": "Discuss a payment arrangement",
            "vietnamese": "Thảo luận về thỏa thuận thanh toán"
          },
          {
            "key": "C",
            "text": "Suggest enlarging the parking lot",
            "vietnamese": "Đề nghị mở rộng bãi đỗ xe"
          },
          {
            "key": "D",
            "text": "Review a plan for new outdoor lighting",
            "vietnamese": "Xem lại kế hoạch chiếu sáng ngoài trời mới"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"Discuss a payment arrangement\" (Thảo luận về thỏa thuận thanh toán)."
      }
    ],
    "vocabulary": [
      {
        "word": "budget",
        "meaning": "ngân sách",
        "partOfSpeech": "n"
      },
      {
        "word": "issue",
        "meaning": "ban hành, cấp phát",
        "partOfSpeech": "v"
      },
      {
        "word": "share",
        "meaning": "dùng chung, chia sẻ",
        "partOfSpeech": "v"
      }
    ]
  },
  {
    "id": "part3-59-61",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 59 - 61",
    "title": "Part 3 - Câu 59 - 61: Tại sao các diễn giả lại ăn mừng",
    "audioSrc": "/audio/test3_2023.mp3",
    "startTime": 1539.94,
    "endTime": 1628.08,
    "transcript": [
      {
        "id": "p3-59-1",
        "speaker": "Woman",
        "text": "Thank you both for that lovely dinner.",
        "vietnamese": "Cảm ơn cả hai vì bữa tối tuyệt vời đó."
      },
      {
        "id": "p3-59-2",
        "speaker": "Man",
        "text": "What a nice way to celebrate that our two companies will be working together in the future.",
        "vietnamese": "Thật là một cách tuyệt vời để ăn mừng việc hai công ty của chúng ta sẽ hợp tác với nhau trong tương lai."
      },
      {
        "id": "p3-59-3",
        "speaker": "Woman",
        "text": "We've often held business dinners here.",
        "vietnamese": "Chúng tôi thường tổ chức bữa tối kinh doanh ở đây."
      },
      {
        "id": "p3-59-4",
        "speaker": "Man",
        "text": "Say, I wanted to mention how much I liked the speech you gave at our meeting today.",
        "vietnamese": "Nói đi, tôi muốn đề cập đến việc tôi thích bài phát biểu của bạn đến mức nào trong cuộc họp ngày hôm nay."
      },
      {
        "id": "p3-59-5",
        "speaker": "Woman",
        "text": "Very inspiring.",
        "vietnamese": "Rất truyền cảm hứng."
      },
      {
        "id": "p3-59-6",
        "speaker": "Man",
        "text": "Ah, thank you.",
        "vietnamese": "À, cảm ơn bạn."
      },
      {
        "id": "p3-59-7",
        "speaker": "Woman",
        "text": "So I'm in town until tomorrow afternoon.",
        "vietnamese": "Vậy là tôi ở lại thị trấn cho đến chiều mai."
      },
      {
        "id": "p3-59-8",
        "speaker": "Man",
        "text": "Ms. Rice, should I come by your office in the morning to sign the last few papers?",
        "vietnamese": "Cô Rice, sáng mai tôi có nên đến văn phòng cô để ký những giấy tờ cuối cùng không?"
      },
      {
        "id": "p3-59-9",
        "speaker": "Woman",
        "text": "Yes, I'll be in at 8.30.",
        "vietnamese": "Vâng, tôi sẽ có mặt lúc 8h30."
      },
      {
        "id": "p3-59-10",
        "speaker": "Man",
        "text": "Well, actually make that 9.",
        "vietnamese": "Vâng, thực ra là 9."
      },
      {
        "id": "p3-59-11",
        "speaker": "Woman",
        "text": "Does that give you enough time before your flight?",
        "vietnamese": "Liệu điều đó có cho bạn đủ thời gian trước chuyến bay không?"
      },
      {
        "id": "p3-59-12",
        "speaker": "Man",
        "text": "Yes, that should be plenty of time.",
        "vietnamese": "Vâng, chắc phải có nhiều thời gian."
      }
    ],
    "questions": [
      {
        "num": 59,
        "question": "Why are the speakers celebrating?",
        "vietnameseQuestion": "Tại sao các diễn giả lại ăn mừng?",
        "options": [
          {
            "key": "A",
            "text": "Anewrestaurantisopening",
            "vietnamese": "Khai trương nhà hàng mới"
          },
          {
            "key": "B",
            "text": "Their companies will be working together.",
            "vietnamese": "Công ty của họ sẽ làm việc cùng nhau."
          },
          {
            "key": "C",
            "text": "They have received an important loan.",
            "vietnamese": "Họ đã nhận được một khoản vay quan trọng."
          },
          {
            "key": "D",
            "text": "They have received an award.",
            "vietnamese": "Họ đã nhận được một giải thưởng."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"Their companies will be working together.\" (Công ty của họ sẽ làm việc cùng nhau.)."
      },
      {
        "num": 60,
        "question": "What does the man say he liked about a meeting today?",
        "vietnameseQuestion": "Người đàn ông nói rằng anh ấy thích điều gì về cuộc họp ngày hôm nay?",
        "options": [
          {
            "key": "A",
            "text": "Someunexpectednews",
            "vietnamese": "Một số tin tức bất ngờ"
          },
          {
            "key": "B",
            "text": "Somephotosfromapresentation",
            "vietnamese": "Một số hình ảnh thuyết trình"
          },
          {
            "key": "C",
            "text": "A speech that was given",
            "vietnamese": "Một bài phát biểu đã được đưa ra"
          },
          {
            "key": "D",
            "text": "A change to the agenda",
            "vietnamese": "Một sự thay đổi trong chương trình nghị sự"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"A speech that was given\" (Một bài phát biểu đã được đưa ra)."
      },
      {
        "num": 61,
        "question": "Whatwillthe women do tomorrow morning?",
        "vietnameseQuestion": "Những người phụ nữ sẽ làm gì vào sáng mai?",
        "options": [
          {
            "key": "A",
            "text": "Finalizesomepaperwork",
            "vietnamese": "Hoàn thiện một số thủ tục giấy tờ"
          },
          {
            "key": "B",
            "text": "Meet at the airport",
            "vietnamese": "Gặp nhau ở sân bay"
          },
          {
            "key": "C",
            "text": "Make sure the office is locked up",
            "vietnamese": "Đảm bảo văn phòng đã được khóa"
          },
          {
            "key": "D",
            "text": "Compare some reports Time Task 5:00 Arrive 5:00-6:00 Set up 7:00-10:00 Reception 10:00-10:30 Entertainment Clean up 10:30-midnight",
            "vietnamese": "So sánh một số báo cáo Thời gian Nhiệm vụ 5:00 Đến 5:00-6:00 Chuẩn bị 7:00-10:00 Lễ tân 10:00-10:30 Giải trí Dọn dẹp 10:30-nửa đêm"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là (A): \"Finalizesomepaperwork\" (Hoàn thiện một số thủ tục giấy tờ)."
      }
    ],
    "vocabulary": [
      {
        "word": "both",
        "meaning": "cả hai",
        "partOfSpeech": "pron"
      },
      {
        "word": "mention",
        "meaning": "đề cập, nhắc tới",
        "partOfSpeech": "n"
      },
      {
        "word": "actually",
        "meaning": "thực ra, trên thực tế",
        "partOfSpeech": "adv"
      },
      {
        "word": "enough",
        "meaning": "đủ",
        "partOfSpeech": "adj"
      }
    ]
  },
  {
    "id": "part3-62-64",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 62 - 64",
    "title": "Part 3 - Câu 62 - 64: Các diễn giả có khả năng làm việc trong ngành nào nhất",
    "audioSrc": "/audio/test3_2023.mp3",
    "startTime": 1628.08,
    "endTime": 1721.08,
    "transcript": [
      {
        "id": "p3-62-1",
        "speaker": "Woman",
        "text": "Are we all set for the event?",
        "vietnamese": "Tất cả chúng ta đã sẵn sàng cho sự kiện này chưa?"
      },
      {
        "id": "p3-62-2",
        "speaker": "Man",
        "text": "The food is prepared and the beverage is ready.",
        "vietnamese": "Thức ăn đã sẵn sàng và đồ uống cũng đã sẵn sàng."
      },
      {
        "id": "p3-62-3",
        "speaker": "Woman",
        "text": "They're loading the truck now.",
        "vietnamese": "Bây giờ họ đang chất hàng lên xe tải."
      },
      {
        "id": "p3-62-4",
        "speaker": "Man",
        "text": "I confirm the music and other entertainment.",
        "vietnamese": "Tôi xác nhận âm nhạc và giải trí khác."
      },
      {
        "id": "p3-62-5",
        "speaker": "Woman",
        "text": "And I think we'll arrive early.",
        "vietnamese": "Và tôi nghĩ chúng ta sẽ đến sớm."
      },
      {
        "id": "p3-62-6",
        "speaker": "Man",
        "text": "That's good because I was actually worried that one hour wouldn't have been enough to get everything ready.",
        "vietnamese": "Điều đó tốt vì tôi thực sự lo lắng rằng một giờ sẽ không đủ để chuẩn bị sẵn sàng mọi thứ."
      },
      {
        "id": "p3-62-7",
        "speaker": "Woman",
        "text": "I agree.",
        "vietnamese": "Tôi đồng ý."
      },
      {
        "id": "p3-62-8",
        "speaker": "Man",
        "text": "How does the rest of the schedule look?",
        "vietnamese": "Phần còn lại của lịch trình trông như thế nào?"
      },
      {
        "id": "p3-62-9",
        "speaker": "Woman",
        "text": "The timing looks good.",
        "vietnamese": "Thời gian có vẻ tốt."
      },
      {
        "id": "p3-62-10",
        "speaker": "Man",
        "text": "I wonder if we could actually finish up early at the end of the night.",
        "vietnamese": "Tôi tự hỏi liệu chúng ta có thể kết thúc sớm vào cuối đêm không."
      },
      {
        "id": "p3-62-11",
        "speaker": "Woman",
        "text": "Why don't you tell Pierre to bring the truck back at 11.30?",
        "vietnamese": "Sao bạn không bảo Pierre mang xe tải về lúc 11h30?"
      },
      {
        "id": "p3-62-12",
        "speaker": "Man",
        "text": "Okay.",
        "vietnamese": "Được rồi."
      },
      {
        "id": "p3-62-13",
        "speaker": "Woman",
        "text": "He should be finished with his hotel delivery by then.",
        "vietnamese": "Đến lúc đó anh ấy sẽ hoàn thành việc giao hàng cho khách sạn."
      }
    ],
    "questions": [
      {
        "num": 62,
        "question": "What industry dothe speakers most likely work in?",
        "vietnameseQuestion": "Các diễn giả có khả năng làm việc trong ngành nào nhất?",
        "options": [
          {
            "key": "A",
            "text": "Shipping TEST",
            "vietnamese": "KIỂM TRA vận chuyển"
          },
          {
            "key": "B",
            "text": "Music recording",
            "vietnamese": "Ghi âm nhạc"
          },
          {
            "key": "C",
            "text": "Catering",
            "vietnamese": "Dịch vụ ăn uống"
          },
          {
            "key": "D",
            "text": "Tourism",
            "vietnamese": "Du lịch"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"Catering\" (Dịch vụ ăn uống)."
      },
      {
        "num": 63,
        "question": "Look at the graphic. What task in the scheduledoes thewoman express concern about?",
        "vietnameseQuestion": "Nhìn vào đồ họa. Người phụ nữ bày tỏ mối quan ngại về nhiệm vụ nào trong lịch trình?",
        "options": [
          {
            "key": "A",
            "text": "Arrive",
            "vietnamese": "Đến"
          },
          {
            "key": "B",
            "text": "Set up",
            "vietnamese": "thiết lập"
          },
          {
            "key": "C",
            "text": "Entertainment",
            "vietnamese": "Giải trí"
          },
          {
            "key": "D",
            "text": "Clean up",
            "vietnamese": "Dọn dẹp"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"Set up\" (thiết lập)."
      },
      {
        "num": 64,
        "question": "Whatdoesthewomanaskthemantodo?",
        "vietnameseQuestion": "Người phụ nữ hỏi họ làm gì?",
        "options": [
          {
            "key": "A",
            "text": "Check on a hotel delivery",
            "vietnamese": "Kiểm tra việc giao hàng của khách sạn"
          },
          {
            "key": "B",
            "text": "Help toprepare somefood",
            "vietnamese": "Giúp chuẩn bị một số món ăn"
          },
          {
            "key": "C",
            "text": "Help to load some supplies",
            "vietnamese": "Giúp tải một số vật tư"
          },
          {
            "key": "D",
            "text": "Arrange for the truck to arrive early GOONTOTHENEXTPAGE",
            "vietnamese": "Sắp xếp xe đến sớm GONTOTHENEXTPAGE"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là (D): \"Arrange for the truck to arrive early GOONTOTHENEXTPAGE\" (Sắp xếp xe đến sớm GONTOTHENEXTPAGE)."
      }
    ],
    "vocabulary": [
      {
        "word": "beverage",
        "meaning": "thức uống, đồ uống",
        "partOfSpeech": "n"
      },
      {
        "word": "arrive",
        "meaning": "đến nơi",
        "partOfSpeech": "v"
      },
      {
        "word": "actually",
        "meaning": "thực ra, trên thực tế",
        "partOfSpeech": "adv"
      },
      {
        "word": "enough",
        "meaning": "đủ",
        "partOfSpeech": "adj"
      }
    ],
    "graphicImage": "/images/intensive/test3_2023/q62_64.png"
  },
  {
    "id": "part3-65-67",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 65 - 67",
    "title": "Part 3 - Câu 65 - 67: Các diễn giả sẽ tham dự sự kiện gì tại công viên vào cuối...",
    "audioSrc": "/audio/test3_2023.mp3",
    "startTime": 1721.08,
    "endTime": 1800.24,
    "transcript": [
      {
        "id": "p3-65-1",
        "speaker": "Woman",
        "text": "Are you all set for the environmental fair?",
        "vietnamese": "Bạn đã sẵn sàng cho hội chợ môi trường chưa?"
      },
      {
        "id": "p3-65-2",
        "speaker": "Man",
        "text": "Our company is putting on at the park this weekend?",
        "vietnamese": "Công ty chúng ta sẽ tổ chức ở công viên vào cuối tuần này phải không?"
      },
      {
        "id": "p3-65-3",
        "speaker": "Woman",
        "text": "I just finished finding supplies for my game about recycling.",
        "vietnamese": "Tôi vừa tìm xong nguồn cung cấp cho trò chơi tái chế của mình."
      },
      {
        "id": "p3-65-4",
        "speaker": "Man",
        "text": "Yes.",
        "vietnamese": "Đúng."
      },
      {
        "id": "p3-65-5",
        "speaker": "Woman",
        "text": "I finished writing the questions for the environmental trivia game I'm leading.",
        "vietnamese": "Tôi đã viết xong câu hỏi cho trò chơi đố vui về môi trường mà tôi đang hướng dẫn."
      },
      {
        "id": "p3-65-6",
        "speaker": "Man",
        "text": "Hey, I want to check with you.",
        "vietnamese": "Này, tôi muốn kiểm tra với bạn."
      },
      {
        "id": "p3-65-7",
        "speaker": "Woman",
        "text": "What else can I do to be helpful that day?",
        "vietnamese": "Tôi có thể làm gì khác để giúp ích vào ngày hôm đó?"
      },
      {
        "id": "p3-65-8",
        "speaker": "Man",
        "text": "Would you like me to hang signs or something?",
        "vietnamese": "Bạn có muốn tôi treo bảng hiệu hay gì đó không?"
      },
      {
        "id": "p3-65-9",
        "speaker": "Woman",
        "text": "Help decorate?",
        "vietnamese": "Giúp trang trí?"
      },
      {
        "id": "p3-65-10",
        "speaker": "Man",
        "text": "One thing we could use is someone to stand at the park entrance and direct people to the pavilion where the fair will take place.",
        "vietnamese": "Một điều chúng ta có thể sử dụng là ai đó đứng ở lối vào công viên và hướng dẫn mọi người đến gian hàng nơi hội chợ sẽ diễn ra."
      },
      {
        "id": "p3-65-11",
        "speaker": "Woman",
        "text": "Wait.",
        "vietnamese": "Đợi đã."
      },
      {
        "id": "p3-65-12",
        "speaker": "Man",
        "text": "Aren't there several entrances to the park?",
        "vietnamese": "Không phải có nhiều lối vào công viên sao?"
      },
      {
        "id": "p3-65-13",
        "speaker": "Woman",
        "text": "Yes, but only the entrance on court street is open on weekends.",
        "vietnamese": "Có, nhưng chỉ có lối vào phố Court mở cửa vào cuối tuần."
      }
    ],
    "questions": [
      {
        "num": 65,
        "question": "What event will the speakers attend at the park this weekend?",
        "vietnameseQuestion": "Các diễn giả sẽ tham dự sự kiện gì tại công viên vào cuối tuần này?",
        "options": [
          {
            "key": "A",
            "text": "Apicnic",
            "vietnamese": "đi dã ngoại"
          },
          {
            "key": "B",
            "text": "An athletic event",
            "vietnamese": "Một sự kiện thể thao"
          },
          {
            "key": "C",
            "text": "An environmental fair",
            "vietnamese": "Hội chợ môi trường"
          },
          {
            "key": "D",
            "text": "A volunteer trash cleanup",
            "vietnamese": "Tình nguyện dọn rác"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"An environmental fair\" (Hội chợ môi trường)."
      },
      {
        "num": 66,
        "question": "Whatdoesthewomanaskthemantodothe day of the event?",
        "vietnameseQuestion": "Người phụ nữ hỏi người đàn ông làm gì vào ngày diễn ra sự kiện?",
        "options": [
          {
            "key": "A",
            "text": "Hand out prizes",
            "vietnamese": "Trao giải thưởng"
          },
          {
            "key": "B",
            "text": "Directpeoplewheretogo",
            "vietnamese": "Directpeoplewheretogo"
          },
          {
            "key": "C",
            "text": "Decorate the park pavilion",
            "vietnamese": "Trang trí gian hàng công viên"
          },
          {
            "key": "D",
            "text": "Hang up signs",
            "vietnamese": "Treo bảng hiệu"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"Directpeoplewheretogo\" (Directpeoplewheretogo)."
      },
      {
        "num": 67,
        "question": "Look at the graphic. Which entrance will participants use for the event?",
        "vietnameseQuestion": "Nhìn vào đồ họa. Người tham gia sẽ sử dụng lối vào nào cho sự kiện?",
        "options": [
          {
            "key": "A",
            "text": "EntranceA",
            "vietnamese": "Lối vàoA"
          },
          {
            "key": "B",
            "text": "Entrance B",
            "vietnamese": "Lối vào B"
          },
          {
            "key": "C",
            "text": "Entrance C",
            "vietnamese": "Lối vào C"
          },
          {
            "key": "D",
            "text": "Entrance D 56 Stage 1 Framing Stage2 Plumbing Stage 3 Insulation Stage 4 Drywall Installation Finish Interior Stage 5",
            "vietnamese": "Lối vào D 56 Giai đoạn 1 Giai đoạn đóng khung2 Giai đoạn sửa ống nước 3 Giai đoạn cách nhiệt 4 Lắp đặt vách thạch cao Hoàn thiện nội thất Giai đoạn 5"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là (A): \"EntranceA\" (Lối vàoA)."
      }
    ],
    "vocabulary": [
      {
        "word": "park",
        "meaning": "đỗ xe, đậu xe",
        "partOfSpeech": "v"
      },
      {
        "word": "supplies",
        "meaning": "đồ dùng, vật tư văn phòng",
        "partOfSpeech": "n"
      },
      {
        "word": "helpful",
        "meaning": "hữu ích, có ích",
        "partOfSpeech": "adj"
      },
      {
        "word": "decorate",
        "meaning": "trang trí",
        "partOfSpeech": "v"
      }
    ],
    "graphicImage": "/images/intensive/test3_2023/q65_67.png"
  },
  {
    "id": "part3-68-70",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 68 - 70",
    "title": "Part 3 - Câu 68 - 70: Người đàn ông đã làm gì ngày hôm qua",
    "audioSrc": "/audio/test3_2023.mp3",
    "startTime": 1800.24,
    "endTime": 1890.95,
    "transcript": [
      {
        "id": "p3-68-1",
        "speaker": "Woman",
        "text": "I came by in person to see how the construction of my townhouse is proceeding.",
        "vietnamese": "Tôi đã đích thân đến để xem quá trình xây dựng nhà phố của tôi đang tiến triển như thế nào."
      },
      {
        "id": "p3-68-2",
        "speaker": "Man",
        "text": "I was a bit worried after that text you sent me yesterday.",
        "vietnamese": "Tôi hơi lo lắng sau tin nhắn bạn gửi cho tôi ngày hôm qua."
      },
      {
        "id": "p3-68-3",
        "speaker": "Woman",
        "text": "Yes, we finished stage three of the project last week, but as I said in my text, there will be a delay for stage four.",
        "vietnamese": "Đúng, chúng tôi đã hoàn thành giai đoạn ba của dự án vào tuần trước, nhưng như tôi đã nói trong văn bản của mình, giai đoạn bốn sẽ bị trì hoãn."
      },
      {
        "id": "p3-68-4",
        "speaker": "Man",
        "text": "I understand there's a problem with the supply of drywall sheets.",
        "vietnamese": "Tôi hiểu rằng có vấn đề với việc cung cấp tấm vách thạch cao."
      },
      {
        "id": "p3-68-5",
        "speaker": "Woman",
        "text": "There's a delay right now, but we should get them next week.",
        "vietnamese": "Hiện tại có sự chậm trễ nhưng chúng tôi sẽ nhận được chúng vào tuần tới."
      },
      {
        "id": "p3-68-6",
        "speaker": "Man",
        "text": "Is there anything we can do while we wait?",
        "vietnamese": "Có điều gì chúng ta có thể làm trong khi chờ đợi không?"
      },
      {
        "id": "p3-68-7",
        "speaker": "Woman",
        "text": "I suggest you start working with your interior designer to decide on the finishing touches.",
        "vietnamese": "Tôi khuyên bạn nên bắt đầu làm việc với nhà thiết kế nội thất của mình để quyết định những bước hoàn thiện."
      },
      {
        "id": "p3-68-8",
        "speaker": "Man",
        "text": "As soon as the drywall arrives, we'll be ready to finish the interior.",
        "vietnamese": "Ngay sau khi vách thạch cao đến, chúng tôi sẽ sẵn sàng hoàn thiện nội thất."
      }
    ],
    "questions": [
      {
        "num": 68,
        "question": "What did the man do yesterday?",
        "vietnameseQuestion": "Người đàn ông đã làm gì ngày hôm qua?",
        "options": [
          {
            "key": "A",
            "text": "Communicated with thewoman about the schedule",
            "vietnamese": "Trao đổi với người phụ nữ về lịch trình"
          },
          {
            "key": "B",
            "text": "Contactedan electrician",
            "vietnamese": "Liên hệ thợ điện"
          },
          {
            "key": "C",
            "text": "Changed an aspect of the house's design",
            "vietnamese": "Thay đổi một khía cạnh trong thiết kế của ngôi nhà"
          },
          {
            "key": "D",
            "text": "Ordered some supplies",
            "vietnamese": "Đặt mua một số vật dụng"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là (A): \"Communicated with thewoman about the schedule\" (Trao đổi với người phụ nữ về lịch trình)."
      },
      {
        "num": 69,
        "question": "Look at the graphic. What stage has recently been completed?",
        "vietnameseQuestion": "Nhìn vào đồ họa. Gần đây đã hoàn thành giai đoạn nào?",
        "options": [
          {
            "key": "A",
            "text": "Framing",
            "vietnamese": "đóng khung"
          },
          {
            "key": "B",
            "text": "Plumbing",
            "vietnamese": "Hệ thống nước"
          },
          {
            "key": "C",
            "text": "Insulation",
            "vietnamese": "cách nhiệt"
          },
          {
            "key": "D",
            "text": "Drywall installation",
            "vietnamese": "Lắp đặt vách thạch cao"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"Insulation\" (cách nhiệt)."
      },
      {
        "num": 70,
        "question": "What does the man suggest the woman do?",
        "vietnameseQuestion": "Người đàn ông đề nghị người phụ nữ làm gì?",
        "options": [
          {
            "key": "A",
            "text": "Cancel an order",
            "vietnamese": "Hủy đơn hàng"
          },
          {
            "key": "B",
            "text": "Make some design decisions",
            "vietnamese": "Đưa ra một số quyết định thiết kế"
          },
          {
            "key": "C",
            "text": "Pay a bill in advance",
            "vietnamese": "Thanh toán trước một hóa đơn"
          },
          {
            "key": "D",
            "text": "Change suppliers",
            "vietnamese": "Thay đổi nhà cung cấp"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"Make some design decisions\" (Đưa ra một số quyết định thiết kế)."
      }
    ],
    "vocabulary": [
      {
        "word": "stage",
        "meaning": "sân khấu",
        "partOfSpeech": "n"
      },
      {
        "word": "project",
        "meaning": "dự án",
        "partOfSpeech": "n"
      },
      {
        "word": "delay",
        "meaning": "sự chậm trễ, hoãn chuyến",
        "partOfSpeech": "n"
      },
      {
        "word": "wait",
        "meaning": "chờ đợi",
        "partOfSpeech": "v"
      }
    ],
    "graphicImage": "/images/intensive/test3_2023/q68_70.png"
  },
  {
    "id": "part4-71-73",
    "part": 4,
    "partTitle": "Part 4: Bài nói chuyện",
    "questionRange": "Câu 71 - 73",
    "title": "Part 4 - Câu 71 - 73: Những gì đang được quảng cáo",
    "audioSrc": "/audio/test3_2023.mp3",
    "startTime": 1926.7,
    "endTime": 1995.46,
    "transcript": [
      {
        "id": "p4-71-1",
        "speaker": "Speaker",
        "text": "And now let me thank our sponsor Perfect T.",
        "vietnamese": "Và bây giờ hãy để tôi cảm ơn nhà tài trợ Perfect T."
      },
      {
        "id": "p4-71-2",
        "speaker": "Speaker",
        "text": "Take a deep breath and give yourself a break with Perfect T.",
        "vietnamese": "Hãy hít một hơi thật sâu và nghỉ ngơi với Perfect T."
      },
      {
        "id": "p4-71-3",
        "speaker": "Speaker",
        "text": "Their distinctive blend of relaxing teas was born on a farm in Northeastern India,",
        "vietnamese": "Sự pha trộn đặc biệt của các loại trà thư giãn của họ được ra đời tại một trang trại ở Đông Bắc Ấn Độ,"
      },
      {
        "id": "p4-71-4",
        "speaker": "Speaker",
        "text": "where the ideal mix of rain and sun gives Perfect T its strong and aromatic flavor.",
        "vietnamese": "nơi sự kết hợp lý tưởng giữa mưa và nắng mang lại cho Perfect T hương vị đậm đà và thơm mát."
      },
      {
        "id": "p4-71-5",
        "speaker": "Speaker",
        "text": "Believe me, you won't find this taste anywhere else.",
        "vietnamese": "Tin tôi đi, bạn sẽ không tìm thấy hương vị này ở bất cứ nơi nào khác."
      },
      {
        "id": "p4-71-6",
        "speaker": "Speaker",
        "text": "Plus, you can now sign up for a membership to have your favorite teas delivered to you automatically each month.",
        "vietnamese": "Ngoài ra, giờ đây bạn có thể đăng ký thành viên để nhận các loại trà yêu thích được giao tự động cho bạn mỗi tháng."
      }
    ],
    "questions": [
      {
        "num": 71,
        "question": "Whatis being advertised?",
        "vietnameseQuestion": "Những gì đang được quảng cáo?",
        "options": [
          {
            "key": "A",
            "text": "An online supermarket",
            "vietnamese": "Một siêu thị trực tuyến"
          },
          {
            "key": "B",
            "text": "A travel guide",
            "vietnamese": "Một hướng dẫn du lịch"
          },
          {
            "key": "C",
            "text": "A beverage product",
            "vietnamese": "Một sản phẩm đồ uống"
          },
          {
            "key": "D",
            "text": "A hotel chain",
            "vietnamese": "Một chuỗi khách sạn"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"A beverage product\" (Một sản phẩm đồ uống)."
      },
      {
        "num": 72,
        "question": "What does thespeaker emphasize?",
        "vietnameseQuestion": "Người nói nhấn mạnh điều gì?",
        "options": [
          {
            "key": "A",
            "text": "The eco-friendly policy of a business",
            "vietnamese": "Chính sách thân thiện với môi trường của doanh nghiệp"
          },
          {
            "key": "B",
            "text": "The superior flavor of a product",
            "vietnamese": "Hương vị vượt trội của sản phẩm"
          },
          {
            "key": "C",
            "text": "TheextensiveselectiononaWebsite",
            "vietnamese": "TheextenseselectiononaTrang web"
          },
          {
            "key": "D",
            "text": "Thepositivereviewsofabrand",
            "vietnamese": "Thetích cựcđánh giásofathương hiệu"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"The superior flavor of a product\" (Hương vị vượt trội của sản phẩm)."
      },
      {
        "num": 73,
        "question": "Whatisabenefitofmembership?",
        "vietnameseQuestion": "Lợi ích của tư cách thành viên là gì?",
        "options": [
          {
            "key": "A",
            "text": "It provides a discount.",
            "vietnamese": "Nó cung cấp một giảm giá."
          },
          {
            "key": "B",
            "text": "It makes ordering more efficient.",
            "vietnamese": "Nó làm cho việc đặt hàng hiệu quả hơn."
          },
          {
            "key": "C",
            "text": "It includes access to an online chat room.",
            "vietnamese": "Nó bao gồm quyền truy cập vào một phòng trò chuyện trực tuyến."
          },
          {
            "key": "D",
            "text": "It comes with a gift.",
            "vietnamese": "Nó đi kèm với một món quà."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"It makes ordering more efficient.\" (Nó làm cho việc đặt hàng hiệu quả hơn.)."
      }
    ],
    "vocabulary": [
      {
        "word": "break",
        "meaning": "giờ nghỉ giải lao",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part4-74-76",
    "part": 4,
    "partTitle": "Part 4: Bài nói chuyện",
    "questionRange": "Câu 74 - 76",
    "title": "Part 4 - Câu 74 - 76: Sarah Levinson là ai",
    "audioSrc": "/audio/test3_2023.mp3",
    "startTime": 1995.46,
    "endTime": 2077.24,
    "transcript": [
      {
        "id": "p4-74-1",
        "speaker": "Speaker",
        "text": "Welcome to the Money Hour on WWBC Alberta.",
        "vietnamese": "Chào mừng đến với Giờ kiếm tiền trên WWBC Alberta."
      },
      {
        "id": "p4-74-2",
        "speaker": "Speaker",
        "text": "Today I'll discuss the topic of preparing for retirement with my guest Sarah Levinson.",
        "vietnamese": "Hôm nay tôi sẽ thảo luận về chủ đề chuẩn bị nghỉ hưu với khách của tôi là Sarah Levinson."
      },
      {
        "id": "p4-74-3",
        "speaker": "Speaker",
        "text": "She's the author of the book All You Need to Know About Retirement Investments.",
        "vietnamese": "Cô ấy là tác giả của cuốn sách Tất cả những gì bạn cần biết về đầu tư hưu trí."
      },
      {
        "id": "p4-74-4",
        "speaker": "Speaker",
        "text": "We will delve into the broad range of investment options and discuss how to choose a financial advisor.",
        "vietnamese": "Chúng ta sẽ đi sâu vào các lựa chọn đầu tư đa dạng và thảo luận về cách chọn cố vấn tài chính."
      },
      {
        "id": "p4-74-5",
        "speaker": "Speaker",
        "text": "But first, let me send a shout out to our sponsors over at Pinnacles and their brand new vitamin C supplement.",
        "vietnamese": "Nhưng trước tiên, hãy để tôi gửi lời cảm ơn tới các nhà tài trợ của chúng tôi tại Pinnacles và sản phẩm bổ sung vitamin C hoàn toàn mới của họ."
      },
      {
        "id": "p4-74-6",
        "speaker": "Speaker",
        "text": "Pinnacles vitamin C formula supports a healthy immune system, so make sure to check it out.",
        "vietnamese": "Công thức vitamin C Pinnacles hỗ trợ hệ thống miễn dịch khỏe mạnh, vì vậy hãy nhớ kiểm tra nó."
      },
      {
        "id": "p4-74-7",
        "speaker": "Speaker",
        "text": "And now, Sarah, where should we begin?",
        "vietnamese": "Và bây giờ, Sarah, chúng ta nên bắt đầu từ đâu?"
      }
    ],
    "questions": [
      {
        "num": 74,
        "question": "Who is Sarah Levinson?",
        "vietnameseQuestion": "Sarah Levinson là ai?",
        "options": [
          {
            "key": "A",
            "text": "Auniversity professor",
            "vietnamese": "giáo sư đại học"
          },
          {
            "key": "B",
            "text": "A coach",
            "vietnamese": "Một huấn luyện viên"
          },
          {
            "key": "C",
            "text": "A computer scientist",
            "vietnamese": "Một nhà khoa học máy tính"
          },
          {
            "key": "D",
            "text": "A book author",
            "vietnamese": "Một tác giả sách"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là (D): \"A book author\" (Một tác giả sách)."
      },
      {
        "num": 75,
        "question": "Whatisthemaintopicofthebroadcast?",
        "vietnameseQuestion": "Chủ đề chính của chương trình phát sóng là gì?",
        "options": [
          {
            "key": "A",
            "text": "Digital trends in publishing",
            "vietnamese": "Xu hướng kỹ thuật số trong xuất bản"
          },
          {
            "key": "B",
            "text": "Qualities of a good bank",
            "vietnamese": "Phẩm chất của một ngân hàng tốt"
          },
          {
            "key": "C",
            "text": "How to save for retirement",
            "vietnamese": "Làm thế nào để tiết kiệm cho nghỉ hưu"
          },
          {
            "key": "D",
            "text": "Best jobs in finance",
            "vietnamese": "Việc làm tốt nhất trong lĩnh vực tài chính"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"How to save for retirement\" (Làm thế nào để tiết kiệm cho nghỉ hưu)."
      },
      {
        "num": 76,
        "question": "What kind of company sponsors the broadcast?",
        "vietnameseQuestion": "Loại công ty nào tài trợ cho việc phát sóng?",
        "options": [
          {
            "key": "A",
            "text": "A local store",
            "vietnamese": "Một cửa hàng địa phương"
          },
          {
            "key": "B",
            "text": "Apublishing company",
            "vietnamese": "Công ty xuất bản"
          },
          {
            "key": "C",
            "text": "A technology firm",
            "vietnamese": "Một hãng công nghệ"
          },
          {
            "key": "D",
            "text": "A health supplement manufacturer questions about what the speaker says in each talk. Select the best response to each question and mark the letter (A), (B), (C), or (D) on your answer sheet. The talks will not be printed in your test book",
            "vietnamese": "Một nhà sản xuất thực phẩm bổ sung sức khỏe đặt câu hỏi về những gì diễn giả nói trong mỗi buổi nói chuyện. Chọn câu trả lời đúng nhất cho mỗi câu hỏi và đánh dấu chữ cái (A), (B), (C) hoặc (D) trên phiếu trả lời của bạn. Bài nói chuyện sẽ không được in trong tập kiểm tra của bạn"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là (D): \"A health supplement manufacturer questions about what the speaker says in each talk. Select the best response to each question and mark the letter (A), (B), (C), or (D) on your answer sheet. The talks will not be printed in your test book\" (Một nhà sản xuất thực phẩm bổ sung sức khỏe đặt câu hỏi về những gì diễn giả nói trong mỗi buổi nói chuyện. Chọn câu trả lời đúng nhất cho mỗi câu hỏi và đánh dấu chữ cái (A), (B), (C) hoặc (D) trên phiếu trả lời của bạn. Bài nói chuyện sẽ không được in trong tập kiểm tra của bạn)."
      }
    ],
    "vocabulary": [
      {
        "word": "retirement",
        "meaning": "sự nghỉ hưu",
        "partOfSpeech": "n"
      },
      {
        "word": "book",
        "meaning": "đặt trước (phòng, vé)",
        "partOfSpeech": "v"
      },
      {
        "word": "vitamin",
        "meaning": "thuốc vitamin, khoáng chất",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part4-77-79",
    "part": 4,
    "partTitle": "Part 4: Bài nói chuyện",
    "questionRange": "Câu 77 - 79",
    "title": "Part 4 - Câu 77 - 79: Tại sao công ty lại thuê công nhân TEST tạm thời",
    "audioSrc": "/audio/test3_2023.mp3",
    "startTime": 2077.24,
    "endTime": 2159.98,
    "transcript": [
      {
        "id": "p4-77-1",
        "speaker": "Speaker",
        "text": "Good morning.",
        "vietnamese": "Chào buổi sáng."
      },
      {
        "id": "p4-77-2",
        "speaker": "Speaker",
        "text": "Welcome to Western Seed and Gardening Supplies.",
        "vietnamese": "Chào mừng bạn đến với Vật tư làm vườn và hạt giống phương Tây."
      },
      {
        "id": "p4-77-3",
        "speaker": "Speaker",
        "text": "You have all been hired to help out for the next six weeks.",
        "vietnamese": "Tất cả các bạn đã được thuê để giúp đỡ trong sáu tuần tới."
      },
      {
        "id": "p4-77-4",
        "speaker": "Speaker",
        "text": "During our annual spring sale, we never have enough permanent workers to handle everything.",
        "vietnamese": "Trong đợt giảm giá mùa xuân hàng năm, chúng tôi không bao giờ có đủ nhân viên cố định để xử lý mọi việc."
      },
      {
        "id": "p4-77-5",
        "speaker": "Speaker",
        "text": "Your supervisor, Margaret Mallon, will explain how to take customers orders.",
        "vietnamese": "Người giám sát của bạn, Margaret Mallon, sẽ giải thích cách nhận đơn đặt hàng của khách hàng."
      },
      {
        "id": "p4-77-6",
        "speaker": "Speaker",
        "text": "First, I want to make sure that we have the information we need to set up your direct deposit.",
        "vietnamese": "Trước tiên, tôi muốn đảm bảo rằng chúng tôi có thông tin cần thiết để thiết lập khoản tiền gửi trực tiếp của bạn."
      },
      {
        "id": "p4-77-7",
        "speaker": "Speaker",
        "text": "We prefer to send your paychecks directly to your bank accounts.",
        "vietnamese": "Chúng tôi muốn gửi tiền lương trực tiếp vào tài khoản ngân hàng của bạn."
      },
      {
        "id": "p4-77-8",
        "speaker": "Speaker",
        "text": "There's a white folder on the table in front of you.",
        "vietnamese": "Có một tập tài liệu màu trắng trên bàn trước mặt bạn."
      },
      {
        "id": "p4-77-9",
        "speaker": "Speaker",
        "text": "So, let's get started there.",
        "vietnamese": "Vì vậy, hãy bắt đầu ở đó."
      }
    ],
    "questions": [
      {
        "num": 77,
        "question": "Why did the company hire temporary TEST workers?",
        "vietnameseQuestion": "Tại sao công ty lại thuê công nhân TEST tạm thời?",
        "options": [
          {
            "key": "A",
            "text": "It has opened a new office.",
            "vietnamese": "Nó đã mở một văn phòng mới."
          },
          {
            "key": "B",
            "text": "It is selling a wider variety of products.",
            "vietnamese": "Nó đang bán nhiều loại sản phẩm hơn."
          },
          {
            "key": "C",
            "text": "It is very busy this time of year.",
            "vietnamese": "Thời điểm này trong năm rất bận rộn."
          },
          {
            "key": "D",
            "text": "It is installing a new computer system.",
            "vietnamese": "Nó đang cài đặt một hệ thống máy tính mới."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"It is very busy this time of year.\" (Thời điểm này trong năm rất bận rộn.)."
      },
      {
        "num": 78,
        "question": "What will Margaret Malin discuss?",
        "vietnameseQuestion": "Margaret Malin sẽ thảo luận điều gì?",
        "options": [
          {
            "key": "A",
            "text": "Howtotakecustomers'orders",
            "vietnamese": "Cách nhận đơn đặt hàng của khách hàng"
          },
          {
            "key": "B",
            "text": "How to open a bank account",
            "vietnamese": "Cách mở tài khoản ngân hàng"
          },
          {
            "key": "C",
            "text": "How to close the store each night",
            "vietnamese": "Cách đóng cửa hàng mỗi đêm"
          },
          {
            "key": "D",
            "text": "How to handle customer complaints",
            "vietnamese": "Cách giải quyết khiếu nại của khách hàng"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là (A): \"Howtotakecustomers'orders\" (Cách nhận đơn đặt hàng của khách hàng)."
      },
      {
        "num": 79,
        "question": "Why does the speaker say, \"There's a white folder on the table in front of you\"?",
        "vietnameseQuestion": "Tại sao người nói lại nói: \"Có một tập tài liệu màu trắng trên bàn trước mặt bạn\"?",
        "options": [
          {
            "key": "A",
            "text": "To review a gardening supplies price list",
            "vietnamese": "Để xem lại bảng giá vật tư làm vườn"
          },
          {
            "key": "B",
            "text": "To share some company history",
            "vietnamese": "Để chia sẻ một số lịch sử công ty"
          },
          {
            "key": "C",
            "text": "To introduce some job duties",
            "vietnamese": "Giới thiệu một số nhiệm vụ công việc"
          },
          {
            "key": "D",
            "text": "Toask for somebanking information",
            "vietnamese": "Hỏi một số thông tin ngân hàng"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là (D): \"Toask for somebanking information\" (Hỏi một số thông tin ngân hàng)."
      }
    ],
    "vocabulary": [
      {
        "word": "supplies",
        "meaning": "đồ dùng, vật tư văn phòng",
        "partOfSpeech": "n"
      },
      {
        "word": "annual",
        "meaning": "thường niên, hàng năm",
        "partOfSpeech": "adj"
      },
      {
        "word": "enough",
        "meaning": "đủ",
        "partOfSpeech": "adj"
      },
      {
        "word": "supervisor",
        "meaning": "người giám sát, quản lý",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part4-80-82",
    "part": 4,
    "partTitle": "Part 4: Bài nói chuyện",
    "questionRange": "Câu 80 - 82",
    "title": "Part 4 - Câu 80 - 82: Người nói đang thảo luận về điều gì",
    "audioSrc": "/audio/test3_2023.mp3",
    "startTime": 2159.98,
    "endTime": 2256.41,
    "transcript": [
      {
        "id": "p4-80-1",
        "speaker": "Speaker",
        "text": "Before we get back to our program, the organization called On the Farm is proud to announce a new training program",
        "vietnamese": "Trước khi chúng ta quay lại chương trình của mình, tổ chức có tên On the Farm xin trân trọng thông báo một chương trình đào tạo mới"
      },
      {
        "id": "p4-80-2",
        "speaker": "Speaker",
        "text": "for people who work with livestock.",
        "vietnamese": "cho những người làm nghề chăn nuôi."
      },
      {
        "id": "p4-80-3",
        "speaker": "Speaker",
        "text": "The livestock operations program provides trainees with the most up-to-date techniques in raising cattle.",
        "vietnamese": "Chương trình chăn nuôi cung cấp cho học viên những kỹ thuật chăn nuôi gia súc hiện đại nhất."
      },
      {
        "id": "p4-80-4",
        "speaker": "Speaker",
        "text": "You'll learn about the latest methods of proper fencing, feeding, and medical care.",
        "vietnamese": "Bạn sẽ tìm hiểu về các phương pháp mới nhất về đấu kiếm, cho ăn và chăm sóc y tế thích hợp."
      },
      {
        "id": "p4-80-5",
        "speaker": "Speaker",
        "text": "The training is delivered at your workplace and is tailored to suit your needs.",
        "vietnamese": "Việc đào tạo được thực hiện tại nơi làm việc của bạn và được điều chỉnh để phù hợp với nhu cầu của bạn."
      },
      {
        "id": "p4-80-6",
        "speaker": "Speaker",
        "text": "The course takes one year and leads to a certificate in livestock operations.",
        "vietnamese": "Khóa học kéo dài một năm và cấp chứng chỉ về hoạt động chăn nuôi."
      },
      {
        "id": "p4-80-7",
        "speaker": "Speaker",
        "text": "Call On the Farm at 555-0128 for more information or to register.",
        "vietnamese": "Hãy gọi cho On the Farm theo số 555-0128 để biết thêm thông tin hoặc để đăng ký."
      }
    ],
    "questions": [
      {
        "num": 80,
        "question": "What is the speaker discussing?",
        "vietnameseQuestion": "Người nói đang thảo luận về điều gì?",
        "options": [
          {
            "key": "A",
            "text": "A supermarket sale",
            "vietnamese": "Bán siêu thị"
          },
          {
            "key": "B",
            "text": "An agricultural show",
            "vietnamese": "Triển lãm nông nghiệp"
          },
          {
            "key": "C",
            "text": "An educational program",
            "vietnamese": "Một chương trình giáo dục"
          },
          {
            "key": "D",
            "text": "An outdoor festival",
            "vietnamese": "Lễ hội ngoài trời"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"An educational program\" (Một chương trình giáo dục)."
      },
      {
        "num": 81,
        "question": "Who is theannouncement intendedfor?",
        "vietnameseQuestion": "Thông báo này dành cho ai?",
        "options": [
          {
            "key": "A",
            "text": "Cattlefarmers",
            "vietnamese": "Người chăn nuôi gia súc"
          },
          {
            "key": "B",
            "text": "Foresters",
            "vietnamese": "Người đi rừng"
          },
          {
            "key": "C",
            "text": "College students",
            "vietnamese": "sinh viên đại học"
          },
          {
            "key": "D",
            "text": "Restaurant cooks",
            "vietnamese": "Đầu bếp nhà hàng"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là (A): \"Cattlefarmers\" (Người chăn nuôi gia súc)."
      },
      {
        "num": 82,
        "question": "How can a person get more information?",
        "vietnameseQuestion": "Làm thế nào một người có thể có được nhiều thông tin hơn?",
        "options": [
          {
            "key": "A",
            "text": "By going to a farm",
            "vietnamese": "Bằng cách đi đến một trang trại"
          },
          {
            "key": "B",
            "text": "By sending an e-mail",
            "vietnamese": "Bằng cách gửi e-mail"
          },
          {
            "key": "C",
            "text": "By going to a Web site",
            "vietnamese": "Bằng cách vào một trang Web"
          },
          {
            "key": "D",
            "text": "By calling a phone number GOONTOTHENEXTPAGE TEST3 57",
            "vietnamese": "Bằng cách gọi tới số điện thoại GONTOTHENEXTPAGE TEST3 57"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là (D): \"By calling a phone number GOONTOTHENEXTPAGE TEST3 57\" (Bằng cách gọi tới số điện thoại GONTOTHENEXTPAGE TEST3 57)."
      }
    ],
    "vocabulary": [
      {
        "word": "training",
        "meaning": "khóa đào tạo, huấn luyện",
        "partOfSpeech": "n"
      },
      {
        "word": "fencing",
        "meaning": "hàng rào bảo vệ/ngăn cách",
        "partOfSpeech": "n"
      },
      {
        "word": "certificate",
        "meaning": "chứng chỉ, giấy chứng nhận",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part4-83-85",
    "part": 4,
    "partTitle": "Part 4: Bài nói chuyện",
    "questionRange": "Câu 83 - 85",
    "title": "Part 4 - Câu 83 - 85: Người phát biểu là ai",
    "audioSrc": "/audio/test3_2023.mp3",
    "startTime": 2256.41,
    "endTime": 2321.76,
    "transcript": [
      {
        "id": "p4-83-1",
        "speaker": "Speaker",
        "text": "Hello, Mr. Juma.",
        "vietnamese": "Xin chào, ông Juma."
      },
      {
        "id": "p4-83-2",
        "speaker": "Speaker",
        "text": "This is the Municipal Water Department.",
        "vietnamese": "Đây là Sở Nước Thành Phố."
      },
      {
        "id": "p4-83-3",
        "speaker": "Speaker",
        "text": "We have been investigating flooding on Boseman Street that was reported over the phone Sunday night.",
        "vietnamese": "Chúng tôi đang điều tra tình trạng ngập lụt trên phố Boseman được báo cáo qua điện thoại vào tối Chủ nhật."
      },
      {
        "id": "p4-83-4",
        "speaker": "Speaker",
        "text": "Our technicians ruled out a water mainbreak.",
        "vietnamese": "Kỹ thuật viên của chúng tôi đã loại trừ khả năng có sự cố về đường ống nước."
      },
      {
        "id": "p4-83-5",
        "speaker": "Speaker",
        "text": "They determined that a pipette burst on the grounds of your bakery.",
        "vietnamese": "Họ xác định rằng một chiếc pipet đã nổ trong khuôn viên tiệm bánh của bạn."
      },
      {
        "id": "p4-83-6",
        "speaker": "Speaker",
        "text": "They turned off the water supply to your business.",
        "vietnamese": "Họ đã tắt nguồn cung cấp nước cho doanh nghiệp của bạn."
      },
      {
        "id": "p4-83-7",
        "speaker": "Speaker",
        "text": "Please be aware that it is your responsibility to repair the pipe.",
        "vietnamese": "Xin lưu ý rằng bạn có trách nhiệm sửa chữa đường ống."
      },
      {
        "id": "p4-83-8",
        "speaker": "Speaker",
        "text": "Your insurance may cover the cost.",
        "vietnamese": "Bảo hiểm của bạn có thể chi trả chi phí."
      },
      {
        "id": "p4-83-9",
        "speaker": "Speaker",
        "text": "We will turn the water back on once the pipe is fixed.",
        "vietnamese": "Chúng tôi sẽ mở nước trở lại sau khi đường ống được cố định."
      }
    ],
    "questions": [
      {
        "num": 83,
        "question": "Who is the speaker?",
        "vietnameseQuestion": "Người phát biểu là ai?",
        "options": [
          {
            "key": "A",
            "text": "Aplumber",
            "vietnamese": "thợ sửa ống nước"
          },
          {
            "key": "B",
            "text": "Ashop owner",
            "vietnamese": "chủ cửa hàng"
          },
          {
            "key": "C",
            "text": "A reporter",
            "vietnamese": "Một phóng viên"
          },
          {
            "key": "D",
            "text": "A city employee",
            "vietnamese": "Một nhân viên thành phố"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là (D): \"A city employee\" (Một nhân viên thành phố)."
      },
      {
        "num": 84,
        "question": "What problem does the speakeridentify?",
        "vietnameseQuestion": "Người nói xác định được vấn đề gì?",
        "options": [
          {
            "key": "A",
            "text": "Abrokenwaterpipe",
            "vietnamese": "Ống nước bị hỏng"
          },
          {
            "key": "B",
            "text": "Aheavy rainstorm",
            "vietnamese": "Mưa giông lớn"
          },
          {
            "key": "C",
            "text": "Achangetoan insurancepolicy",
            "vietnamese": "Chính sách bảo hiểm Achangetoan"
          },
          {
            "key": "D",
            "text": "A misleading phone call",
            "vietnamese": "Một cuộc điện thoại gây nhầm lẫn"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là (A): \"Abrokenwaterpipe\" (Ống nước bị hỏng)."
      },
      {
        "num": 85,
        "question": "What will the listener most likely do after listening to the message?",
        "vietnameseQuestion": "Người nghe sẽ làm gì nhiều nhất sau khi nghe tin nhắn?",
        "options": [
          {
            "key": "A",
            "text": "Cancel his insurance policy",
            "vietnamese": "Hủy hợp đồng bảo hiểm của anh ấy"
          },
          {
            "key": "B",
            "text": "Move his bakery",
            "vietnamese": "Di chuyển tiệm bánh của anh ấy"
          },
          {
            "key": "C",
            "text": "Open his store for business",
            "vietnamese": "Mở cửa hàng của anh ấy để kinh doanh"
          },
          {
            "key": "D",
            "text": "Arrange for a repair",
            "vietnamese": "Sắp xếp để sửa chữa"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là (D): \"Arrange for a repair\" (Sắp xếp để sửa chữa)."
      }
    ],
    "vocabulary": [
      {
        "word": "municipal",
        "meaning": "thuộc thành phố, đô thị",
        "partOfSpeech": "adj"
      },
      {
        "word": "water",
        "meaning": "tưới nước",
        "partOfSpeech": "v"
      },
      {
        "word": "department",
        "meaning": "phòng ban",
        "partOfSpeech": "n"
      },
      {
        "word": "phone",
        "meaning": "gọi điện thoại cho ai đó",
        "partOfSpeech": "v"
      }
    ]
  },
  {
    "id": "part4-86-88",
    "part": 4,
    "partTitle": "Part 4: Bài nói chuyện",
    "questionRange": "Câu 86 - 88",
    "title": "Part 4 - Câu 86 - 88: Loại sự kiện nào đang diễn ra",
    "audioSrc": "/audio/test3_2023.mp3",
    "startTime": 2321.76,
    "endTime": 2416.77,
    "transcript": [
      {
        "id": "p4-86-1",
        "speaker": "Speaker",
        "text": "I hope that everyone enjoyed the delightful meal.",
        "vietnamese": "Tôi hy vọng mọi người đã có một bữa ăn thú vị."
      },
      {
        "id": "p4-86-2",
        "speaker": "Speaker",
        "text": "It's almost time for us to present this year's awards to our athletes here at the National Tennis Conference.",
        "vietnamese": "Đã đến lúc chúng tôi trao giải thưởng năm nay cho các vận động viên của mình tại Hội nghị Quần vợt Quốc gia."
      },
      {
        "id": "p4-86-3",
        "speaker": "Speaker",
        "text": "However, before we do so, I am honored to welcome a very special speaker up to the stage.",
        "vietnamese": "Tuy nhiên, trước khi chúng ta làm điều đó, tôi rất vinh dự được chào đón một diễn giả rất đặc biệt lên sân khấu."
      },
      {
        "id": "p4-86-4",
        "speaker": "Speaker",
        "text": "Bridget Rowland.",
        "vietnamese": "Bridget Rowland."
      },
      {
        "id": "p4-86-5",
        "speaker": "Speaker",
        "text": "This moment is such a thrill for me.",
        "vietnamese": "Khoảnh khắc này đối với tôi thật là hồi hộp."
      },
      {
        "id": "p4-86-6",
        "speaker": "Speaker",
        "text": "Ms. Rowland is a superb competitor.",
        "vietnamese": "Cô Rowland là một đối thủ cạnh tranh xuất sắc."
      },
      {
        "id": "p4-86-7",
        "speaker": "Speaker",
        "text": "She has won multiple tournaments and is also renowned for her charity work and sponsorships.",
        "vietnamese": "Cô đã vô địch nhiều giải đấu và cũng nổi tiếng với công việc từ thiện và tài trợ."
      },
      {
        "id": "p4-86-8",
        "speaker": "Speaker",
        "text": "Before she comes to the podium, I'd like to remind you that photographs of tonight's event are prohibited.",
        "vietnamese": "Trước khi cô ấy bước lên bục phát biểu, tôi muốn nhắc bạn rằng việc chụp ảnh sự kiện tối nay đều bị cấm."
      },
      {
        "id": "p4-86-9",
        "speaker": "Speaker",
        "text": "But everyone in attendance will receive a signed photograph of our guest at the end of the event.",
        "vietnamese": "Nhưng tất cả những người tham dự sẽ nhận được một bức ảnh có chữ ký của khách mời của chúng ta vào cuối sự kiện."
      }
    ],
    "questions": [
      {
        "num": 86,
        "question": "What type of event is taking place?",
        "vietnameseQuestion": "Loại sự kiện nào đang diễn ra?",
        "options": [
          {
            "key": "A",
            "text": "Awriters'workshop",
            "vietnamese": "Hội thảo của nhà văn"
          },
          {
            "key": "B",
            "text": "A debate competition",
            "vietnamese": "Một cuộc thi tranh luận"
          },
          {
            "key": "C",
            "text": "Asportsawards ceremony",
            "vietnamese": "Lễ trao giải thể thao"
          },
          {
            "key": "D",
            "text": "A book signing",
            "vietnamese": "Ký tặng sách"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"Asportsawards ceremony\" (Lễ trao giải thể thao)."
      },
      {
        "num": 87,
        "question": "What doesthespeakermeanwhen he says, \"This moment is such a thrill for me\"?",
        "vietnameseQuestion": "Người nói có ý gì khi nói, \"Khoảnh khắc này thật là hồi hộp đối với tôi\"?",
        "options": [
          {
            "key": "A",
            "text": "He admires a guest speaker.",
            "vietnamese": "Anh ấy ngưỡng mộ một diễn giả khách mời."
          },
          {
            "key": "B",
            "text": "He likes speaking to audiences.",
            "vietnamese": "Anh ấy thích nói chuyện với khán giả."
          },
          {
            "key": "C",
            "text": "He is enjoying a meal.",
            "vietnamese": "Anh ấy đang thưởng thức bữa ăn."
          },
          {
            "key": "D",
            "text": "He is pleased to win an award.",
            "vietnamese": "Anh ấy rất vui khi giành được giải thưởng."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là (A): \"He admires a guest speaker.\" (Anh ấy ngưỡng mộ một diễn giả khách mời.)."
      },
      {
        "num": 88,
        "question": "What are the listeners reminded to do?",
        "vietnameseQuestion": "Người nghe được nhắc nhở phải làm gì?",
        "options": [
          {
            "key": "A",
            "text": "Hold their applause until the end",
            "vietnamese": "Giữ tiếng vỗ tay của họ cho đến khi kết thúc"
          },
          {
            "key": "B",
            "text": "Finish their meals",
            "vietnamese": "Kết thúc bữa ăn của họ"
          },
          {
            "key": "C",
            "text": "Turn off their phones",
            "vietnamese": "Tắt điện thoại của họ"
          },
          {
            "key": "D",
            "text": "Avoid taking pictures 58",
            "vietnamese": "Tránh chụp ảnh 58"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là (D): \"Avoid taking pictures 58\" (Tránh chụp ảnh 58)."
      }
    ],
    "vocabulary": [
      {
        "word": "conference",
        "meaning": "hội nghị chuyên đề",
        "partOfSpeech": "n"
      },
      {
        "word": "stage",
        "meaning": "sân khấu",
        "partOfSpeech": "n"
      },
      {
        "word": "receive",
        "meaning": "nhận được",
        "partOfSpeech": "v"
      }
    ]
  },
  {
    "id": "part4-89-91",
    "part": 4,
    "partTitle": "Part 4: Bài nói chuyện",
    "questionRange": "Câu 89 - 91",
    "title": "Part 4 - Câu 89 - 91: Điều gì gây ra tình trạng giao thông đông đúc ở trung tâm...",
    "audioSrc": "/audio/test3_2023.mp3",
    "startTime": 2416.77,
    "endTime": 2494.15,
    "transcript": [
      {
        "id": "p4-89-1",
        "speaker": "Speaker",
        "text": "Welcome to the WLED Radio Traffic Report.",
        "vietnamese": "Chào mừng bạn đến với Báo cáo lưu lượng vô tuyến WLED."
      },
      {
        "id": "p4-89-2",
        "speaker": "Speaker",
        "text": "There's heavy traffic in Bellevue City Center this afternoon as organizers prepare for tomorrow's annual marathon.",
        "vietnamese": "Giao thông ở Trung tâm Thành phố Bellevue chiều nay rất đông khi ban tổ chức chuẩn bị cho cuộc chạy marathon hàng năm vào ngày mai."
      },
      {
        "id": "p4-89-3",
        "speaker": "Speaker",
        "text": "Runners and their families are arriving in town, and excitement is in the air.",
        "vietnamese": "Các vận động viên và gia đình của họ đang đến thị trấn, không khí sôi động đang tràn ngập."
      },
      {
        "id": "p4-89-4",
        "speaker": "Speaker",
        "text": "Remember, you can log in to our website to follow the race, where we will post updates regularly.",
        "vietnamese": "Hãy nhớ rằng, bạn có thể đăng nhập vào trang web của chúng tôi để theo dõi cuộc đua, nơi chúng tôi sẽ đăng thông tin cập nhật thường xuyên."
      },
      {
        "id": "p4-89-5",
        "speaker": "Speaker",
        "text": "For those of you planning on coming to the City Center to watch the marathon tomorrow,",
        "vietnamese": "Dành cho những bạn dự định đến Trung tâm Thành phố để xem cuộc chạy marathon vào ngày mai,"
      },
      {
        "id": "p4-89-6",
        "speaker": "Speaker",
        "text": "I suggest you use the Bellevue Bicycle Rental System.",
        "vietnamese": "Tôi khuyên bạn nên sử dụng Hệ thống cho thuê xe đạp Bellevue."
      },
      {
        "id": "p4-89-7",
        "speaker": "Speaker",
        "text": "You can take public transportation to the City Center, and then get one of the City Bicycles located at Central train station to move around.",
        "vietnamese": "Bạn có thể đi phương tiện công cộng đến Trung tâm Thành phố, sau đó lấy một trong những Xe đạp Thành phố nằm ở ga xe lửa Trung tâm để di chuyển xung quanh."
      }
    ],
    "questions": [
      {
        "num": 89,
        "question": "What is causing heavy traffic in the city center?",
        "vietnameseQuestion": "Điều gì gây ra tình trạng giao thông đông đúc ở trung tâm thành phố?",
        "options": [
          {
            "key": "A",
            "text": "Roadconstruction",
            "vietnamese": "Xây dựng đường bộ"
          },
          {
            "key": "B",
            "text": "Preparation foran event",
            "vietnamese": "Chuẩn bị cho sự kiện"
          },
          {
            "key": "C",
            "text": "Badweather conditions",
            "vietnamese": "Điều kiện thời tiết xấu"
          },
          {
            "key": "D",
            "text": "A disabled vehicle",
            "vietnamese": "Một chiếc xe khuyết tật"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"Preparation foran event\" (Chuẩn bị cho sự kiện)."
      },
      {
        "num": 90,
        "question": "Why should the listeners visit the radio station's Web site?",
        "vietnameseQuestion": "Tại sao thính giả nên vào thăm trang web của đài phát thanh?",
        "options": [
          {
            "key": "A",
            "text": "To enter a contest",
            "vietnamese": "Để tham gia một cuộc thi"
          },
          {
            "key": "B",
            "text": "To request some music",
            "vietnamese": "Để yêu cầu một số bản nhạc"
          },
          {
            "key": "C",
            "text": "To ask some questions about city planning",
            "vietnamese": "Để hỏi một số câu hỏi về quy hoạch thành phố"
          },
          {
            "key": "D",
            "text": "To learn about the progress of a sporting event",
            "vietnamese": "Để tìm hiểu về tiến trình của một sự kiện thể thao"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là (D): \"To learn about the progress of a sporting event\" (Để tìm hiểu về tiến trình của một sự kiện thể thao)."
      },
      {
        "num": 91,
        "question": "Whatdoesthespeakerrecommendthe listeners do?",
        "vietnameseQuestion": "Người nói khuyên người nghe làm gì?",
        "options": [
          {
            "key": "A",
            "text": "Workfromhome",
            "vietnamese": "làm việc tại nhà"
          },
          {
            "key": "B",
            "text": "Avoid driving into the city center",
            "vietnamese": "Tránh lái xe vào trung tâm thành phố"
          },
          {
            "key": "C",
            "text": "Wait for another traffic report",
            "vietnamese": "Chờ một báo cáo giao thông khác"
          },
          {
            "key": "D",
            "text": "Take a different exit",
            "vietnamese": "Đi một lối thoát khác"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"Avoid driving into the city center\" (Tránh lái xe vào trung tâm thành phố)."
      }
    ],
    "vocabulary": [
      {
        "word": "traffic",
        "meaning": "giao thông, xe cộ trên đường",
        "partOfSpeech": "n"
      },
      {
        "word": "annual",
        "meaning": "thường niên, hàng năm",
        "partOfSpeech": "adj"
      },
      {
        "word": "post",
        "meaning": "đăng tải",
        "partOfSpeech": "v"
      },
      {
        "word": "suggest",
        "meaning": "đề xuất, gợi ý",
        "partOfSpeech": "v"
      }
    ]
  },
  {
    "id": "part4-92-94",
    "part": 4,
    "partTitle": "Part 4: Bài nói chuyện",
    "questionRange": "Câu 92 - 94",
    "title": "Part 4 - Câu 92 - 94: Loa làm việc ở đâu",
    "audioSrc": "/audio/test3_2023.mp3",
    "startTime": 2494.15,
    "endTime": 2569.96,
    "transcript": [
      {
        "id": "p4-92-1",
        "speaker": "Speaker",
        "text": "Hi, this message is for Josephine Sanders.",
        "vietnamese": "Xin chào, tin nhắn này là dành cho Josephine Sanders."
      },
      {
        "id": "p4-92-2",
        "speaker": "Speaker",
        "text": "This is Chang Su from Lindmar Dental.",
        "vietnamese": "Đây là Chang Su từ Nha khoa Lindmar."
      },
      {
        "id": "p4-92-3",
        "speaker": "Speaker",
        "text": "I took your dental X-rays this morning.",
        "vietnamese": "Tôi đã chụp X-quang răng cho bạn sáng nay."
      },
      {
        "id": "p4-92-4",
        "speaker": "Speaker",
        "text": "After you left the office, I found a necklace in the X-ray room.",
        "vietnamese": "Sau khi bạn rời văn phòng, tôi tìm thấy một chiếc vòng cổ trong phòng chụp X-quang."
      },
      {
        "id": "p4-92-5",
        "speaker": "Speaker",
        "text": "I'm pretty sure that it's yours.",
        "vietnamese": "Tôi khá chắc chắn rằng nó là của bạn."
      },
      {
        "id": "p4-92-6",
        "speaker": "Speaker",
        "text": "I remember asking you to take it off before I took your X-rays.",
        "vietnamese": "Tôi nhớ đã yêu cầu bạn cởi nó ra trước khi tôi chụp X-quang cho bạn."
      },
      {
        "id": "p4-92-7",
        "speaker": "Speaker",
        "text": "I must have forgotten to return it to you.",
        "vietnamese": "Chắc là tôi quên trả lại cho bạn rồi."
      },
      {
        "id": "p4-92-8",
        "speaker": "Speaker",
        "text": "I apologize for the inconvenience, but our office is open until 7 tonight.",
        "vietnamese": "Tôi xin lỗi vì sự bất tiện này, nhưng văn phòng của chúng tôi mở cửa đến 7 giờ tối nay."
      },
      {
        "id": "p4-92-9",
        "speaker": "Speaker",
        "text": "If I'm not here, just ask the receptionist.",
        "vietnamese": "Nếu tôi không ở đây, cứ hỏi nhân viên tiếp tân."
      }
    ],
    "questions": [
      {
        "num": 92,
        "question": "Where does the speaker work?",
        "vietnameseQuestion": "Loa làm việc ở đâu?",
        "options": [
          {
            "key": "A",
            "text": "At a jewelry store",
            "vietnamese": "Tại một cửa hàng trang sức"
          },
          {
            "key": "B",
            "text": "At a dental office",
            "vietnamese": "Tại một văn phòng nha khoa"
          },
          {
            "key": "C",
            "text": "At a medical supply store",
            "vietnamese": "Tại cửa hàng cung cấp thiết bị y tế"
          },
          {
            "key": "D",
            "text": "At a hotel chain",
            "vietnamese": "Tại một chuỗi khách sạn"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"At a dental office\" (Tại một văn phòng nha khoa)."
      },
      {
        "num": 93,
        "question": "What did the speaker forget to do?",
        "vietnameseQuestion": "Người nói đã quên làm gì?",
        "options": [
          {
            "key": "A",
            "text": "Giveback anecklace",
            "vietnamese": "Trả lại vòng cổ"
          },
          {
            "key": "B",
            "text": "Write down a phone number",
            "vietnamese": "Viết số điện thoại"
          },
          {
            "key": "C",
            "text": "Send some X-ray results",
            "vietnamese": "Gửi một số kết quả chụp X-quang"
          },
          {
            "key": "D",
            "text": "Call a receptionist",
            "vietnamese": "Gọi nhân viên lễ tân"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là (A): \"Giveback anecklace\" (Trả lại vòng cổ)."
      },
      {
        "num": 94,
        "question": "Why does the speaker say,“our office is open until seven tonight\"?",
        "vietnameseQuestion": "Tại sao người nói lại nói: “Văn phòng của chúng tôi mở cửa đến 7 giờ tối nay”?",
        "options": [
          {
            "key": "A",
            "text": "Toremindthe listenerabout a delivery",
            "vietnamese": "Nhắc nhở người nghe về việc giao hàng"
          },
          {
            "key": "B",
            "text": "To recommend that a contract be signed quickly",
            "vietnamese": "Đề nghị ký kết hợp đồng nhanh chóng"
          },
          {
            "key": "C",
            "text": "To ask the listenerto return to an office",
            "vietnamese": "Để yêu cầu người nghe quay trở lại văn phòng"
          },
          {
            "key": "D",
            "text": "To indicate that a sale is ending ROCKNOSEHANDCARTS Models Cost Classic Handcart $ 50 $ 80 Superior Handcart $110 Deluxe Handcart $150 SuperDutyHandcart",
            "vietnamese": "Để cho biết rằng đợt giảm giá sắp kết thúc Xe đẩy tay ROCKNOSEHANDCARTS Chi phí Xe đẩy tay cổ điển $ 50 $ 80 Xe đẩy tay cao cấp $110 Xe đẩy tay cao cấp $150 Xe đẩy tay SuperDuty"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"To ask the listenerto return to an office\" (Để yêu cầu người nghe quay trở lại văn phòng)."
      }
    ],
    "vocabulary": [
      {
        "word": "left",
        "meaning": "còn lại",
        "partOfSpeech": "adj"
      },
      {
        "word": "found",
        "meaning": "thành lập, sáng lập",
        "partOfSpeech": "v"
      },
      {
        "word": "necklace",
        "meaning": "dây chuyền, vòng cổ",
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
    "id": "part4-95-97",
    "part": 4,
    "partTitle": "Part 4: Bài nói chuyện",
    "questionRange": "Câu 95 - 97",
    "title": "Part 4 - Câu 95 - 97: Loa có khả năng hoạt động nhất ở đâu",
    "audioSrc": "/audio/test3_2023.mp3",
    "startTime": 2569.96,
    "endTime": 2652.48,
    "transcript": [
      {
        "id": "p4-95-1",
        "speaker": "Speaker",
        "text": "Our workers' halls soil, garden mulch and plants every day to make our customers' yards look beautiful.",
        "vietnamese": "Hội trường công nhân của chúng tôi làm đất, phủ vườn và trồng cây hàng ngày để làm cho sân của khách hàng trông thật đẹp."
      },
      {
        "id": "p4-95-2",
        "speaker": "Speaker",
        "text": "They need strong hand cuts to move these heavy items.",
        "vietnamese": "Họ cần những cú cắt tay mạnh mẽ để di chuyển những vật nặng này."
      },
      {
        "id": "p4-95-3",
        "speaker": "Speaker",
        "text": "The classic hand cuts we have now are poor quality.",
        "vietnamese": "Những vết cắt bằng tay cổ điển mà chúng ta có hiện nay có chất lượng kém."
      },
      {
        "id": "p4-95-4",
        "speaker": "Speaker",
        "text": "They fall apart and our workers constantly repair them.",
        "vietnamese": "Chúng bị hỏng và công nhân của chúng tôi liên tục sửa chữa chúng."
      },
      {
        "id": "p4-95-5",
        "speaker": "Speaker",
        "text": "We need the strongest hand cuts available.",
        "vietnamese": "Chúng tôi cần những cú cắt tay mạnh nhất hiện có."
      },
      {
        "id": "p4-95-6",
        "speaker": "Speaker",
        "text": "I recommend we purchase the $150 model because it will not break easily.",
        "vietnamese": "Tôi khuyên chúng ta nên mua mẫu 150 USD vì nó không dễ bị hỏng."
      },
      {
        "id": "p4-95-7",
        "speaker": "Speaker",
        "text": "It's so durable that will save money in the end.",
        "vietnamese": "Nó bền đến mức cuối cùng sẽ tiết kiệm được tiền."
      },
      {
        "id": "p4-95-8",
        "speaker": "Speaker",
        "text": "If you agree, I'll order 20 of them.",
        "vietnamese": "Nếu bạn đồng ý, tôi sẽ đặt hàng 20 chiếc."
      }
    ],
    "questions": [
      {
        "num": 95,
        "question": "Wheredoes thespeakermost likelywork?",
        "vietnameseQuestion": "Loa có khả năng hoạt động nhất ở đâu?",
        "options": [
          {
            "key": "A",
            "text": "At a hardware store",
            "vietnamese": "Tại một cửa hàng phần cứng"
          },
          {
            "key": "B",
            "text": "Atatoolmanufacturer",
            "vietnamese": "Nhà sản xuất Atatool"
          },
          {
            "key": "C",
            "text": "At a landscaping service",
            "vietnamese": "Tại một dịch vụ cảnh quan"
          },
          {
            "key": "D",
            "text": "At a construction company",
            "vietnamese": "Tại một công ty xây dựng"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"At a landscaping service\" (Tại một dịch vụ cảnh quan)."
      },
      {
        "num": 96,
        "question": "What is the speaker's highest priority?",
        "vietnameseQuestion": "Ưu tiên cao nhất của người nói là gì?",
        "options": [
          {
            "key": "A",
            "text": "Buying a long-lasting product",
            "vietnamese": "Mua sản phẩm sử dụng lâu dài"
          },
          {
            "key": "B",
            "text": "Spending as little money as possible",
            "vietnamese": "Chi tiêu càng ít tiền càng tốt"
          },
          {
            "key": "C",
            "text": "Having the order delivered quickly",
            "vietnamese": "Có đơn hàng được giao nhanh chóng"
          },
          {
            "key": "D",
            "text": "Getting the largest product available",
            "vietnamese": "Có được sản phẩm lớn nhất hiện có"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là (A): \"Buying a long-lasting product\" (Mua sản phẩm sử dụng lâu dài)."
      },
      {
        "num": 97,
        "question": "Look at the graphic. Which handcart does the speaker want to buy?",
        "vietnameseQuestion": "Nhìn vào đồ họa. Người nói muốn mua xe đẩy tay nào?",
        "options": [
          {
            "key": "A",
            "text": "Classic Handcart",
            "vietnamese": "Xe đẩy tay cổ điển"
          },
          {
            "key": "B",
            "text": "Superior Handcart",
            "vietnamese": "Xe đẩy tay cao cấp"
          },
          {
            "key": "C",
            "text": "Deluxe Handcart",
            "vietnamese": "Xe đẩy tay cao cấp"
          },
          {
            "key": "D",
            "text": "Super Duty Handcart DURATION TRAININGMODULES Planand Organize YourWork 25 min.",
            "vietnamese": "Xe đẩy tay Super Duty THỜI GIAN ĐÀO TẠO CÁC MÔ-ĐUN Lập kế hoạch và sắp xếp công việc của bạn 25 phút."
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là (D): \"Super Duty Handcart DURATION TRAININGMODULES Planand Organize YourWork 25 min.\" (Xe đẩy tay Super Duty THỜI GIAN ĐÀO TẠO CÁC MÔ-ĐUN Lập kế hoạch và sắp xếp công việc của bạn 25 phút.)."
      }
    ],
    "vocabulary": [
      {
        "word": "soil",
        "meaning": "đất trồng cây",
        "partOfSpeech": "n"
      },
      {
        "word": "hand",
        "meaning": "trao cho, đưa cho",
        "partOfSpeech": "v"
      },
      {
        "word": "repair",
        "meaning": "sửa chữa",
        "partOfSpeech": "v"
      },
      {
        "word": "available",
        "meaning": "rảnh rỗi, có sẵn",
        "partOfSpeech": "adj"
      }
    ],
    "graphicImage": "/images/intensive/test3_2023/q95_97.png"
  },
  {
    "id": "part4-98-100",
    "part": 4,
    "partTitle": "Part 4: Bài nói chuyện",
    "questionRange": "Câu 98 - 100",
    "title": "Part 4 - Câu 98 - 100: Chương trình đào tạo dành cho ai",
    "audioSrc": "/audio/test3_2023.mp3",
    "startTime": 2652.48,
    "endTime": 2752.58,
    "transcript": [
      {
        "id": "p4-98-1",
        "speaker": "Speaker",
        "text": "Thank you all for being here.",
        "vietnamese": "Cảm ơn tất cả các bạn đã ở đây."
      },
      {
        "id": "p4-98-2",
        "speaker": "Speaker",
        "text": "I'd like to go over our next training module.",
        "vietnamese": "Tôi muốn xem qua mô-đun đào tạo tiếp theo của chúng tôi."
      },
      {
        "id": "p4-98-3",
        "speaker": "Speaker",
        "text": "By now you should all be familiar with how to create a lead, contact your potential customers and close on a deal.",
        "vietnamese": "Đến bây giờ, tất cả các bạn đều đã quen với cách tạo khách hàng tiềm năng, liên hệ với khách hàng tiềm năng và chốt giao dịch."
      },
      {
        "id": "p4-98-4",
        "speaker": "Speaker",
        "text": "As a sales representative, you're used to focusing on your own leads and clients and that's terrific.",
        "vietnamese": "Với tư cách là đại diện bán hàng, bạn đã quen với việc tập trung vào khách hàng tiềm năng và khách hàng của mình và điều đó thật tuyệt vời."
      },
      {
        "id": "p4-98-5",
        "speaker": "Speaker",
        "text": "However, there is strength in teamwork and that's what we'll work on now.",
        "vietnamese": "Tuy nhiên, có sức mạnh trong tinh thần đồng đội và đó là điều chúng tôi sẽ làm việc bây giờ."
      },
      {
        "id": "p4-98-6",
        "speaker": "Speaker",
        "text": "Let's get started.",
        "vietnamese": "Hãy bắt đầu."
      },
      {
        "id": "p4-98-7",
        "speaker": "Speaker",
        "text": "I'd like you to create three groups and we're going to take on the roles of different characters in typical scenarios involving clients.",
        "vietnamese": "Tôi muốn bạn tạo ba nhóm và chúng ta sẽ đảm nhận vai trò của các nhân vật khác nhau trong các tình huống điển hình liên quan đến khách hàng."
      }
    ],
    "questions": [
      {
        "num": 98,
        "question": "Who is the training intended for?",
        "vietnameseQuestion": "Chương trình đào tạo dành cho ai?",
        "options": [
          {
            "key": "A",
            "text": "Sales personnel",
            "vietnamese": "Nhân viên kinh doanh"
          },
          {
            "key": "B",
            "text": "Executive officers",
            "vietnamese": "Cán bộ điều hành"
          },
          {
            "key": "C",
            "text": "Human Resource employees ES",
            "vietnamese": "Nhân viên Nhân sự ES"
          },
          {
            "key": "D",
            "text": "Product developers",
            "vietnamese": "Nhà phát triển sản phẩm"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là (A): \"Sales personnel\" (Nhân viên kinh doanh)."
      },
      {
        "num": 99,
        "question": "Look at the graphic. How long will the training be?",
        "vietnameseQuestion": "Nhìn vào đồ họa. Việc đào tạo sẽ kéo dài bao lâu?",
        "options": [
          {
            "key": "A",
            "text": "25 minutes",
            "vietnamese": "25 phút"
          },
          {
            "key": "B",
            "text": "30 minutes",
            "vietnamese": "30 phút"
          },
          {
            "key": "C",
            "text": "20 minutes",
            "vietnamese": "20 phút"
          },
          {
            "key": "D",
            "text": "10 minutes",
            "vietnamese": "10 phút"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"20 minutes\" (20 phút)."
      },
      {
        "num": 100,
        "question": "What does the speaker tell the listeners to iop",
        "vietnameseQuestion": "Người nói nói với người nghe điều gì về iop",
        "options": [
          {
            "key": "A",
            "text": "Turn off their phones",
            "vietnamese": "Tắt điện thoại của họ"
          },
          {
            "key": "B",
            "text": "Get some refreshments",
            "vietnamese": "Nhận một số đồ uống giải khát"
          },
          {
            "key": "C",
            "text": "Ask questions often",
            "vietnamese": "Đặt câu hỏi thường xuyên"
          },
          {
            "key": "D",
            "text": "Role-play a situation",
            "vietnamese": "Đóng vai một tình huống"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là (D): \"Role-play a situation\" (Đóng vai một tình huống)."
      }
    ],
    "vocabulary": [
      {
        "word": "training",
        "meaning": "khóa đào tạo, huấn luyện",
        "partOfSpeech": "n"
      },
      {
        "word": "lead",
        "meaning": "dẫn dắt, chủ trì",
        "partOfSpeech": "v"
      },
      {
        "word": "contact",
        "meaning": "liên hệ, liên lạc",
        "partOfSpeech": "v"
      },
      {
        "word": "sales",
        "meaning": "doanh số bán hàng",
        "partOfSpeech": "n"
      }
    ],
    "graphicImage": "/images/intensive/test3_2023/q98_100.png"
  }
];

export function getIntensiveItemById(id: string): IntensiveListeningItem | undefined {
  return test3_2023_IntensiveData.find((item) => item.id === id);
}

export function getItemsByPart(part: 1 | 2 | 3 | 4): IntensiveListeningItem[] {
  return test3_2023_IntensiveData.filter((item) => item.part === part);
}
