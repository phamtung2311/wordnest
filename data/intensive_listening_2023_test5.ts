// Dữ liệu luyện nghe chi tiết (Intensive Listening) - ETS TOEIC 2023 Test 5
// Áp dụng kỹ thuật Virtual Timestamp Slicing từ audio gốc /audio/test5_2023.mp3
// Transcript song ngữ Anh - Việt, câu hỏi, đáp án và từ vựng trọng tâm

import type { IntensiveListeningItem } from './intensive_listening_types';

export const test5_2023_IntensiveData: IntensiveListeningItem[] = [
  {
    "id": "part1-1",
    "part": 1,
    "partTitle": "Part 1: Mô tả hình ảnh",
    "questionRange": "Câu 1",
    "title": "Part 1 - Câu 1: Anh ấy đang giải một câu đố.",
    "audioSrc": "/audio/test5_2023.mp3",
    "startTime": 99.0,
    "endTime": 121.69,
    "imageUrl": "/images/intensive/test5_2023/q1.png",
    "image": "/images/intensive/test5_2023/q1.png",
    "transcript": [
      {
        "id": "p1-1-a",
        "speaker": "Speaker",
        "text": "(A) He's working on a puzzle.",
        "vietnamese": "(A) Anh ấy đang giải một câu đố."
      },
      {
        "id": "p1-1-b",
        "speaker": "Speaker",
        "text": "(B) He's lying on a sofa.",
        "vietnamese": "(B) Anh ấy đang nằm trên ghế sofa."
      },
      {
        "id": "p1-1-c",
        "speaker": "Speaker",
        "text": "(C) He's reaching for a book.",
        "vietnamese": "(C) Anh ấy đang với lấy một cuốn sách."
      },
      {
        "id": "p1-1-d",
        "speaker": "Speaker",
        "text": "(D) He's putting on a sweater.",
        "vietnamese": "(D) Anh ấy đang mặc một chiếc áo len."
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
            "text": "He's working on a puzzle.",
            "vietnamese": "Anh ấy đang giải một câu đố."
          },
          {
            "key": "B",
            "text": "He's lying on a sofa.",
            "vietnamese": "Anh ấy đang nằm trên ghế sofa."
          },
          {
            "key": "C",
            "text": "He's reaching for a book.",
            "vietnamese": "Anh ấy đang với lấy một cuốn sách."
          },
          {
            "key": "D",
            "text": "He's putting on a sweater.",
            "vietnamese": "Anh ấy đang mặc một chiếc áo len."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là (A): \"He's working on a puzzle.\" (Anh ấy đang giải một câu đố.) mô tả chính xác hoạt động và cảnh vật trong hình."
      }
    ],
    "vocabulary": [
      {
        "word": "sofa",
        "meaning": "ghế bành dài, sofa",
        "partOfSpeech": "n"
      },
      {
        "word": "book",
        "meaning": "đặt trước (phòng, vé)",
        "partOfSpeech": "v"
      },
      {
        "word": "sweater",
        "meaning": "áo len",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part1-2",
    "part": 1,
    "partTitle": "Part 1: Mô tả hình ảnh",
    "questionRange": "Câu 2",
    "title": "Part 1 - Câu 2: Cô ấy đang cầm một số sản phẩm.",
    "audioSrc": "/audio/test5_2023.mp3",
    "startTime": 121.69,
    "endTime": 153.19,
    "imageUrl": "/images/intensive/test5_2023/q2.png",
    "image": "/images/intensive/test5_2023/q2.png",
    "transcript": [
      {
        "id": "p1-2-a",
        "speaker": "Speaker",
        "text": "(A) She's organizing some books.",
        "vietnamese": "(A) Cô ấy đang sắp xếp một số cuốn sách."
      },
      {
        "id": "p1-2-b",
        "speaker": "Speaker",
        "text": "(B) She's buying a toothbrush.",
        "vietnamese": "(B) Cô ấy đang mua bàn chải đánh răng."
      },
      {
        "id": "p1-2-c",
        "speaker": "Speaker",
        "text": "(C) She's holding some products.",
        "vietnamese": "(C) Cô ấy đang cầm một số sản phẩm."
      },
      {
        "id": "p1-2-d",
        "speaker": "Speaker",
        "text": "(D) She's talking to a store employee.",
        "vietnamese": "(D) Cô ấy đang nói chuyện với một nhân viên cửa hàng."
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
            "text": "She's organizing some books.",
            "vietnamese": "Cô ấy đang sắp xếp một số cuốn sách."
          },
          {
            "key": "B",
            "text": "She's buying a toothbrush.",
            "vietnamese": "Cô ấy đang mua bàn chải đánh răng."
          },
          {
            "key": "C",
            "text": "She's holding some products.",
            "vietnamese": "Cô ấy đang cầm một số sản phẩm."
          },
          {
            "key": "D",
            "text": "She's talking to a store employee.",
            "vietnamese": "Cô ấy đang nói chuyện với một nhân viên cửa hàng."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"She's holding some products.\" (Cô ấy đang cầm một số sản phẩm.) mô tả chính xác hoạt động và cảnh vật trong hình."
      }
    ],
    "vocabulary": [
      {
        "word": "store",
        "meaning": "lưu trữ, cất giữ",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part1-3",
    "part": 1,
    "partTitle": "Part 1: Mô tả hình ảnh",
    "questionRange": "Câu 3",
    "title": "Part 1 - Câu 3: Anh ấy đang đeo kính an toàn.",
    "audioSrc": "/audio/test5_2023.mp3",
    "startTime": 153.19,
    "endTime": 177.2,
    "imageUrl": "/images/intensive/test5_2023/q3.png",
    "image": "/images/intensive/test5_2023/q3.png",
    "transcript": [
      {
        "id": "p1-3-a",
        "speaker": "Speaker",
        "text": "(A) He's wearing safety glasses.",
        "vietnamese": "(A) Anh ấy đang đeo kính an toàn."
      },
      {
        "id": "p1-3-b",
        "speaker": "Speaker",
        "text": "(B) He's cleaning some equipment.",
        "vietnamese": "(B) Anh ấy đang lau chùi một số thiết bị."
      },
      {
        "id": "p1-3-c",
        "speaker": "Speaker",
        "text": "(C) He's picking up a hammer.",
        "vietnamese": "(C) Anh ta đang nhặt một cái búa."
      },
      {
        "id": "p1-3-d",
        "speaker": "Speaker",
        "text": "(D) He's laying stones on a driveway.",
        "vietnamese": "(D) Anh ta đang đặt đá trên đường lái xe."
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
            "text": "He's wearing safety glasses.",
            "vietnamese": "Anh ấy đang đeo kính an toàn."
          },
          {
            "key": "B",
            "text": "He's cleaning some equipment.",
            "vietnamese": "Anh ấy đang lau chùi một số thiết bị."
          },
          {
            "key": "C",
            "text": "He's picking up a hammer.",
            "vietnamese": "Anh ta đang nhặt một cái búa."
          },
          {
            "key": "D",
            "text": "He's laying stones on a driveway.",
            "vietnamese": "Anh ta đang đặt đá trên đường lái xe."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là (A): \"He's wearing safety glasses.\" (Anh ấy đang đeo kính an toàn.) mô tả chính xác hoạt động và cảnh vật trong hình."
      }
    ],
    "vocabulary": [
      {
        "word": "glasses",
        "meaning": "kính mắt",
        "partOfSpeech": "n"
      },
      {
        "word": "equipment",
        "meaning": "trang thiết bị máy móc",
        "partOfSpeech": "n"
      },
      {
        "word": "hammer",
        "meaning": "cây búa",
        "partOfSpeech": "n"
      },
      {
        "word": "driveway",
        "meaning": "đường lái xe vào nhà",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part1-4",
    "part": 1,
    "partTitle": "Part 1: Mô tả hình ảnh",
    "questionRange": "Câu 4",
    "title": "Part 1 - Câu 4: Lối vào tòa nhà có cột.",
    "audioSrc": "/audio/test5_2023.mp3",
    "startTime": 177.2,
    "endTime": 202.72,
    "imageUrl": "/images/intensive/test5_2023/q4.png",
    "image": "/images/intensive/test5_2023/q4.png",
    "transcript": [
      {
        "id": "p1-4-a",
        "speaker": "Speaker",
        "text": "(A) Some flower pots have been placed along a walkway.",
        "vietnamese": "(A) Một số chậu hoa được đặt dọc lối đi."
      },
      {
        "id": "p1-4-b",
        "speaker": "Speaker",
        "text": "(B) The gate of a fence was left open.",
        "vietnamese": "(B) Cánh cổng của hàng rào bị bỏ ngỏ."
      },
      {
        "id": "p1-4-c",
        "speaker": "Speaker",
        "text": "(C) Some stairway railings are being installed.",
        "vietnamese": "(C) Một số lan can cầu thang đang được lắp đặt."
      },
      {
        "id": "p1-4-d",
        "speaker": "Speaker",
        "text": "(D) The building entrance has columns.",
        "vietnamese": "(D) Lối vào tòa nhà có cột."
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
            "text": "Some flower pots have been placed along a walkway.",
            "vietnamese": "Một số chậu hoa được đặt dọc lối đi."
          },
          {
            "key": "B",
            "text": "The gate of a fence was left open.",
            "vietnamese": "Cánh cổng của hàng rào bị bỏ ngỏ."
          },
          {
            "key": "C",
            "text": "Some stairway railings are being installed.",
            "vietnamese": "Một số lan can cầu thang đang được lắp đặt."
          },
          {
            "key": "D",
            "text": "The building entrance has columns.",
            "vietnamese": "Lối vào tòa nhà có cột."
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là (D): \"The building entrance has columns.\" (Lối vào tòa nhà có cột.) mô tả chính xác hoạt động và cảnh vật trong hình."
      }
    ],
    "vocabulary": [
      {
        "word": "walkway",
        "meaning": "lối đi dành cho người đi bộ",
        "partOfSpeech": "n"
      },
      {
        "word": "fence",
        "meaning": "hàng rào",
        "partOfSpeech": "n"
      },
      {
        "word": "left",
        "meaning": "còn lại",
        "partOfSpeech": "adj"
      },
      {
        "word": "open",
        "meaning": "mở cửa đón khách",
        "partOfSpeech": "v"
      }
    ]
  },
  {
    "id": "part1-5",
    "part": 1,
    "partTitle": "Part 1: Mô tả hình ảnh",
    "questionRange": "Câu 5",
    "title": "Part 1 - Câu 5: Hai người đang cùng nhau dùng bữa.",
    "audioSrc": "/audio/test5_2023.mp3",
    "startTime": 202.72,
    "endTime": 229.91,
    "imageUrl": "/images/intensive/test5_2023/q5.png",
    "image": "/images/intensive/test5_2023/q5.png",
    "transcript": [
      {
        "id": "p1-5-a",
        "speaker": "Speaker",
        "text": "(A) Two people are standing around a buffet counter.",
        "vietnamese": "(A) Hai người đang đứng quanh quầy buffet."
      },
      {
        "id": "p1-5-b",
        "speaker": "Speaker",
        "text": "(B) Two people are having a meal together.",
        "vietnamese": "(B) Hai người đang cùng nhau dùng bữa."
      },
      {
        "id": "p1-5-c",
        "speaker": "Speaker",
        "text": "(C) A server is bringing dishes to a customer.",
        "vietnamese": "(C) Một người phục vụ đang mang món ăn đến cho khách hàng."
      },
      {
        "id": "p1-5-d",
        "speaker": "Speaker",
        "text": "(D) A server is pouring water into glasses.",
        "vietnamese": "(D) Một máy chủ đang rót nước vào ly."
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
            "text": "Two people are standing around a buffet counter.",
            "vietnamese": "Hai người đang đứng quanh quầy buffet."
          },
          {
            "key": "B",
            "text": "Two people are having a meal together.",
            "vietnamese": "Hai người đang cùng nhau dùng bữa."
          },
          {
            "key": "C",
            "text": "A server is bringing dishes to a customer.",
            "vietnamese": "Một người phục vụ đang mang món ăn đến cho khách hàng."
          },
          {
            "key": "D",
            "text": "A server is pouring water into glasses.",
            "vietnamese": "Một máy chủ đang rót nước vào ly."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"Two people are having a meal together.\" (Hai người đang cùng nhau dùng bữa.) mô tả chính xác hoạt động và cảnh vật trong hình."
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
        "word": "water",
        "meaning": "tưới nước",
        "partOfSpeech": "v"
      },
      {
        "word": "glasses",
        "meaning": "kính mắt",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part1-6",
    "part": 1,
    "partTitle": "Part 1: Mô tả hình ảnh",
    "questionRange": "Câu 6",
    "title": "Part 1 - Câu 6: Ghế đẩu đã được đặt xung quanh phòng.",
    "audioSrc": "/audio/test5_2023.mp3",
    "startTime": 229.91,
    "endTime": 263.71,
    "imageUrl": "/images/intensive/test5_2023/q6.png",
    "image": "/images/intensive/test5_2023/q6.png",
    "transcript": [
      {
        "id": "p1-6-a",
        "speaker": "Speaker",
        "text": "(A) Electric Ocables have been stacked on the floor.",
        "vietnamese": "(A) Các thiết bị điện đã được xếp chồng lên nhau trên sàn."
      },
      {
        "id": "p1-6-b",
        "speaker": "Speaker",
        "text": "(B) Stools have been placed around the room.",
        "vietnamese": "(B) Ghế đẩu đã được đặt xung quanh phòng."
      },
      {
        "id": "p1-6-c",
        "speaker": "Speaker",
        "text": "(C) Cabnets are being emptied.",
        "vietnamese": "(C) Cabnets đang được làm trống."
      },
      {
        "id": "p1-6-d",
        "speaker": "Speaker",
        "text": "(D) The floor of the workshop is being swept.",
        "vietnamese": "(D) Sàn nhà xưởng đang được quét dọn."
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
            "text": "Electric Ocables have been stacked on the floor.",
            "vietnamese": "Các thiết bị điện đã được xếp chồng lên nhau trên sàn."
          },
          {
            "key": "B",
            "text": "Stools have been placed around the room.",
            "vietnamese": "Ghế đẩu đã được đặt xung quanh phòng."
          },
          {
            "key": "C",
            "text": "Cabnets are being emptied.",
            "vietnamese": "Cabnets đang được làm trống."
          },
          {
            "key": "D",
            "text": "The floor of the workshop is being swept.",
            "vietnamese": "Sàn nhà xưởng đang được quét dọn."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"Stools have been placed around the room.\" (Ghế đẩu đã được đặt xung quanh phòng.) mô tả chính xác hoạt động và cảnh vật trong hình."
      }
    ],
    "vocabulary": [
      {
        "word": "floor",
        "meaning": "tầng, sàn nhà",
        "partOfSpeech": "n"
      },
      {
        "word": "workshop",
        "meaning": "buổi hội thảo chuyên đề, khóa đào tạo thực hành",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-7",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 7",
    "title": "Part 2 - Câu 7: Tôi có thể mua vé cho buổi gây quỹ của dàn nhạc ở đâu?",
    "audioSrc": "/audio/test5_2023.mp3",
    "startTime": 287.0,
    "endTime": 306.2,
    "transcript": [
      {
        "id": "p2-7-q",
        "speaker": "Speaker 1",
        "text": "Where can I buy tickets for the orchestra's fundraiser?",
        "vietnamese": "Tôi có thể mua vé cho buổi gây quỹ của dàn nhạc ở đâu?"
      },
      {
        "id": "p2-7-a",
        "speaker": "Speaker 2",
        "text": "(A) Over the next week.",
        "vietnamese": "(A) Trong tuần tới."
      },
      {
        "id": "p2-7-b",
        "speaker": "Speaker 2",
        "text": "(B) On the fifth floor.",
        "vietnamese": "(B) Trên tầng năm."
      },
      {
        "id": "p2-7-c",
        "speaker": "Speaker 2",
        "text": "(C) I suppose if you want to.",
        "vietnamese": "(C) Tôi cho rằng nếu bạn muốn."
      }
    ],
    "questions": [
      {
        "num": 7,
        "question": "Where can I buy tickets for the orchestra's fundraiser?",
        "vietnameseQuestion": "Tôi có thể mua vé cho buổi gây quỹ của dàn nhạc ở đâu?",
        "options": [
          {
            "key": "A",
            "text": "Over the next week.",
            "vietnamese": "Trong tuần tới."
          },
          {
            "key": "B",
            "text": "On the fifth floor.",
            "vietnamese": "Trên tầng năm."
          },
          {
            "key": "C",
            "text": "I suppose if you want to.",
            "vietnamese": "Tôi cho rằng nếu bạn muốn."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"On the fifth floor.\" (Trên tầng năm.) là câu phản hồi hợp lý nhất cho câu \"Where can I buy tickets for the orchestra's fundraiser?\"."
      }
    ],
    "vocabulary": [
      {
        "word": "orchestra",
        "meaning": "dàn nhạc giao hưởng",
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
    "id": "part2-8",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 8",
    "title": "Part 2 - Câu 8: Thời gian đi lại của bạn mất bao lâu?",
    "audioSrc": "/audio/test5_2023.mp3",
    "startTime": 306.2,
    "endTime": 324.74,
    "transcript": [
      {
        "id": "p2-8-q",
        "speaker": "Speaker 1",
        "text": "How long does your commute take?",
        "vietnamese": "Thời gian đi lại của bạn mất bao lâu?"
      },
      {
        "id": "p2-8-a",
        "speaker": "Speaker 2",
        "text": "(A) The gym opens early.",
        "vietnamese": "(A) Phòng tập mở cửa sớm."
      },
      {
        "id": "p2-8-b",
        "speaker": "Speaker 2",
        "text": "(B) I've been working here since March.",
        "vietnamese": "(B) Tôi đã làm việc ở đây từ tháng Ba."
      },
      {
        "id": "p2-8-c",
        "speaker": "Speaker 2",
        "text": "(C) About an hour lately.",
        "vietnamese": "(C) Khoảng một giờ gần đây."
      }
    ],
    "questions": [
      {
        "num": 8,
        "question": "How long does your commute take?",
        "vietnameseQuestion": "Thời gian đi lại của bạn mất bao lâu?",
        "options": [
          {
            "key": "A",
            "text": "The gym opens early.",
            "vietnamese": "Phòng tập mở cửa sớm."
          },
          {
            "key": "B",
            "text": "I've been working here since March.",
            "vietnamese": "Tôi đã làm việc ở đây từ tháng Ba."
          },
          {
            "key": "C",
            "text": "About an hour lately.",
            "vietnamese": "Khoảng một giờ gần đây."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"About an hour lately.\" (Khoảng một giờ gần đây.) là câu phản hồi hợp lý nhất cho câu \"How long does your commute take?\"."
      }
    ],
    "vocabulary": [
      {
        "word": "commute",
        "meaning": "quãng đường/thời gian đi làm hàng ngày",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-9",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 9",
    "title": "Part 2 - Câu 9: Gọi món gì ở quán cà phê này?",
    "audioSrc": "/audio/test5_2023.mp3",
    "startTime": 324.74,
    "endTime": 343.91,
    "transcript": [
      {
        "id": "p2-9-q",
        "speaker": "Speaker 1",
        "text": "What's good to order at this cafe?",
        "vietnamese": "Gọi món gì ở quán cà phê này?"
      },
      {
        "id": "p2-9-a",
        "speaker": "Speaker 2",
        "text": "(A) I recommend the coffee and baked goods.",
        "vietnamese": "(A) Tôi giới thiệu cà phê và đồ nướng."
      },
      {
        "id": "p2-9-b",
        "speaker": "Speaker 2",
        "text": "(B) Your food is on the way.",
        "vietnamese": "(B) Thức ăn của bạn đang được chuyển tới."
      },
      {
        "id": "p2-9-c",
        "speaker": "Speaker 2",
        "text": "(C) It was sent this morning.",
        "vietnamese": "(C) Nó đã được gửi vào sáng nay."
      }
    ],
    "questions": [
      {
        "num": 9,
        "question": "What's good to order at this cafe?",
        "vietnameseQuestion": "Gọi món gì ở quán cà phê này?",
        "options": [
          {
            "key": "A",
            "text": "I recommend the coffee and baked goods.",
            "vietnamese": "Tôi giới thiệu cà phê và đồ nướng."
          },
          {
            "key": "B",
            "text": "Your food is on the way.",
            "vietnamese": "Thức ăn của bạn đang được chuyển tới."
          },
          {
            "key": "C",
            "text": "It was sent this morning.",
            "vietnamese": "Nó đã được gửi vào sáng nay."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là (A): \"I recommend the coffee and baked goods.\" (Tôi giới thiệu cà phê và đồ nướng.) là câu phản hồi hợp lý nhất cho câu \"What's good to order at this cafe?\"."
      }
    ],
    "vocabulary": [
      {
        "word": "order",
        "meaning": "gọi món, đặt hàng",
        "partOfSpeech": "v"
      },
      {
        "word": "recommend",
        "meaning": "gợi ý, giới thiệu",
        "partOfSpeech": "v"
      }
    ]
  },
  {
    "id": "part2-10",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 10",
    "title": "Part 2 - Câu 10: Khi nào đồ nội thất văn phòng mới sẽ được chuyển giao?",
    "audioSrc": "/audio/test5_2023.mp3",
    "startTime": 343.91,
    "endTime": 364.18,
    "transcript": [
      {
        "id": "p2-10-q",
        "speaker": "Speaker 1",
        "text": "When's the new office furniture going to be delivered?",
        "vietnamese": "Khi nào đồ nội thất văn phòng mới sẽ được chuyển giao?"
      },
      {
        "id": "p2-10-a",
        "speaker": "Speaker 2",
        "text": "(A) At the end of the report.",
        "vietnamese": "(A) Ở cuối báo cáo."
      },
      {
        "id": "p2-10-b",
        "speaker": "Speaker 2",
        "text": "(B) I already finished the revision.",
        "vietnamese": "(B) Tôi đã hoàn thành việc sửa đổi."
      },
      {
        "id": "p2-10-c",
        "speaker": "Speaker 2",
        "text": "(C) It'll be here next week.",
        "vietnamese": "(C) Nó sẽ ở đây vào tuần tới."
      }
    ],
    "questions": [
      {
        "num": 10,
        "question": "When's the new office furniture going to be delivered?",
        "vietnameseQuestion": "Khi nào đồ nội thất văn phòng mới sẽ được chuyển giao?",
        "options": [
          {
            "key": "A",
            "text": "At the end of the report.",
            "vietnamese": "Ở cuối báo cáo."
          },
          {
            "key": "B",
            "text": "I already finished the revision.",
            "vietnamese": "Tôi đã hoàn thành việc sửa đổi."
          },
          {
            "key": "C",
            "text": "It'll be here next week.",
            "vietnamese": "Nó sẽ ở đây vào tuần tới."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"It'll be here next week.\" (Nó sẽ ở đây vào tuần tới.) là câu phản hồi hợp lý nhất cho câu \"When's the new office furniture going to be delivered?\"."
      }
    ],
    "vocabulary": [
      {
        "word": "furniture",
        "meaning": "đồ nội thất",
        "partOfSpeech": "n"
      },
      {
        "word": "already",
        "meaning": "đã... rồi",
        "partOfSpeech": "adv"
      }
    ]
  },
  {
    "id": "part2-11",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 11",
    "title": "Part 2 - Câu 11: Ai tổ chức buổi tập vào thứ Năm?",
    "audioSrc": "/audio/test5_2023.mp3",
    "startTime": 364.18,
    "endTime": 387.51,
    "transcript": [
      {
        "id": "p2-11-q",
        "speaker": "Speaker 1",
        "text": "Who's holding the training session on Thursday?",
        "vietnamese": "Ai tổ chức buổi tập vào thứ Năm?"
      },
      {
        "id": "p2-11-a",
        "speaker": "Speaker 2",
        "text": "(A) Marcella's leading it.",
        "vietnamese": "(A) Marcella đang dẫn đầu."
      },
      {
        "id": "p2-11-b",
        "speaker": "Speaker 2",
        "text": "(B) I exercise regularly.",
        "vietnamese": "(B) Tôi tập thể dục thường xuyên."
      },
      {
        "id": "p2-11-c",
        "speaker": "Speaker 2",
        "text": "(C) He was late today.",
        "vietnamese": "(C) Hôm nay anh ấy đến muộn."
      }
    ],
    "questions": [
      {
        "num": 11,
        "question": "Who's holding the training session on Thursday?",
        "vietnameseQuestion": "Ai tổ chức buổi tập vào thứ Năm?",
        "options": [
          {
            "key": "A",
            "text": "Marcella's leading it.",
            "vietnamese": "Marcella đang dẫn đầu."
          },
          {
            "key": "B",
            "text": "I exercise regularly.",
            "vietnamese": "Tôi tập thể dục thường xuyên."
          },
          {
            "key": "C",
            "text": "He was late today.",
            "vietnamese": "Hôm nay anh ấy đến muộn."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là (A): \"Marcella's leading it.\" (Marcella đang dẫn đầu.) là câu phản hồi hợp lý nhất cho câu \"Who's holding the training session on Thursday?\"."
      }
    ],
    "vocabulary": [
      {
        "word": "training",
        "meaning": "khóa đào tạo, huấn luyện",
        "partOfSpeech": "n"
      },
      {
        "word": "session",
        "meaning": "buổi, phiên trị liệu",
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
    "id": "part2-12",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 12",
    "title": "Part 2 - Câu 12: Khi nào chúng ta nên thuê thêm người giúp việc trong kỳ n...",
    "audioSrc": "/audio/test5_2023.mp3",
    "startTime": 387.51,
    "endTime": 407.54,
    "transcript": [
      {
        "id": "p2-12-q",
        "speaker": "Speaker 1",
        "text": "When should we hire extra help for the holidays?",
        "vietnamese": "Khi nào chúng ta nên thuê thêm người giúp việc trong kỳ nghỉ?"
      },
      {
        "id": "p2-12-a",
        "speaker": "Speaker 2",
        "text": "(A) A helpful assistant.",
        "vietnamese": "(A) Một trợ lý hữu ích."
      },
      {
        "id": "p2-12-b",
        "speaker": "Speaker 2",
        "text": "(B) A fun party.",
        "vietnamese": "(B) Một bữa tiệc vui vẻ."
      },
      {
        "id": "p2-12-c",
        "speaker": "Speaker 2",
        "text": "(C) As soon as possible.",
        "vietnamese": "(C) Càng sớm càng tốt."
      }
    ],
    "questions": [
      {
        "num": 12,
        "question": "When should we hire extra help for the holidays?",
        "vietnameseQuestion": "Khi nào chúng ta nên thuê thêm người giúp việc trong kỳ nghỉ?",
        "options": [
          {
            "key": "A",
            "text": "A helpful assistant.",
            "vietnamese": "Một trợ lý hữu ích."
          },
          {
            "key": "B",
            "text": "A fun party.",
            "vietnamese": "Một bữa tiệc vui vẻ."
          },
          {
            "key": "C",
            "text": "As soon as possible.",
            "vietnamese": "Càng sớm càng tốt."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"As soon as possible.\" (Càng sớm càng tốt.) là câu phản hồi hợp lý nhất cho câu \"When should we hire extra help for the holidays?\"."
      }
    ],
    "vocabulary": [
      {
        "word": "hire",
        "meaning": "tuyển dụng, thuê",
        "partOfSpeech": "v"
      },
      {
        "word": "extra",
        "meaning": "thêm, phụ trội",
        "partOfSpeech": "adj/adv"
      },
      {
        "word": "helpful",
        "meaning": "hữu ích, có ích",
        "partOfSpeech": "adj"
      }
    ]
  },
  {
    "id": "part2-13",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 13",
    "title": "Part 2 - Câu 13: Tại sao bạn lại chọn màu xanh cho bao bì sản phẩm?",
    "audioSrc": "/audio/test5_2023.mp3",
    "startTime": 407.54,
    "endTime": 429.08,
    "transcript": [
      {
        "id": "p2-13-q",
        "speaker": "Speaker 1",
        "text": "Why did you pick the color green for the product packaging?",
        "vietnamese": "Tại sao bạn lại chọn màu xanh cho bao bì sản phẩm?"
      },
      {
        "id": "p2-13-a",
        "speaker": "Speaker 2",
        "text": "(A) Because it matches our uniforms.",
        "vietnamese": "(A) Bởi vì nó phù hợp với đồng phục của chúng tôi."
      },
      {
        "id": "p2-13-b",
        "speaker": "Speaker 2",
        "text": "(B) I will pick it up tomorrow.",
        "vietnamese": "(B) Tôi sẽ lấy nó vào ngày mai."
      },
      {
        "id": "p2-13-c",
        "speaker": "Speaker 2",
        "text": "(C) Not until we know the menu options.",
        "vietnamese": "(C) Cho đến khi chúng ta biết các tùy chọn menu."
      }
    ],
    "questions": [
      {
        "num": 13,
        "question": "Why did you pick the color green for the product packaging?",
        "vietnameseQuestion": "Tại sao bạn lại chọn màu xanh cho bao bì sản phẩm?",
        "options": [
          {
            "key": "A",
            "text": "Because it matches our uniforms.",
            "vietnamese": "Bởi vì nó phù hợp với đồng phục của chúng tôi."
          },
          {
            "key": "B",
            "text": "I will pick it up tomorrow.",
            "vietnamese": "Tôi sẽ lấy nó vào ngày mai."
          },
          {
            "key": "C",
            "text": "Not until we know the menu options.",
            "vietnamese": "Cho đến khi chúng ta biết các tùy chọn menu."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là (A): \"Because it matches our uniforms.\" (Bởi vì nó phù hợp với đồng phục của chúng tôi.) là câu phản hồi hợp lý nhất cho câu \"Why did you pick the color green for the product packaging?\"."
      }
    ],
    "vocabulary": [
      {
        "word": "pick",
        "meaning": "nhặt",
        "partOfSpeech": "n/v"
      },
      {
        "word": "color",
        "meaning": "màu sắc",
        "partOfSpeech": "n/v"
      }
    ]
  },
  {
    "id": "part2-14",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 14",
    "title": "Part 2 - Câu 14: Khi nào báo cáo ngân sách?",
    "audioSrc": "/audio/test5_2023.mp3",
    "startTime": 429.08,
    "endTime": 448.32,
    "transcript": [
      {
        "id": "p2-14-q",
        "speaker": "Speaker 1",
        "text": "When's the budget report to?",
        "vietnamese": "Khi nào báo cáo ngân sách?"
      },
      {
        "id": "p2-14-a",
        "speaker": "Speaker 2",
        "text": "(A) Sounds too expensive.",
        "vietnamese": "(A) Nghe có vẻ đắt quá."
      },
      {
        "id": "p2-14-b",
        "speaker": "Speaker 2",
        "text": "(B) By end of day on Friday.",
        "vietnamese": "(B) Đến cuối ngày thứ Sáu."
      },
      {
        "id": "p2-14-c",
        "speaker": "Speaker 2",
        "text": "(C) I can pay you back tomorrow.",
        "vietnamese": "(C) Tôi có thể trả lại cho bạn vào ngày mai."
      }
    ],
    "questions": [
      {
        "num": 14,
        "question": "When's the budget report to?",
        "vietnameseQuestion": "Khi nào báo cáo ngân sách?",
        "options": [
          {
            "key": "A",
            "text": "Sounds too expensive.",
            "vietnamese": "Nghe có vẻ đắt quá."
          },
          {
            "key": "B",
            "text": "By end of day on Friday.",
            "vietnamese": "Đến cuối ngày thứ Sáu."
          },
          {
            "key": "C",
            "text": "I can pay you back tomorrow.",
            "vietnamese": "Tôi có thể trả lại cho bạn vào ngày mai."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"By end of day on Friday.\" (Đến cuối ngày thứ Sáu.) là câu phản hồi hợp lý nhất cho câu \"When's the budget report to?\"."
      }
    ],
    "vocabulary": [
      {
        "word": "budget",
        "meaning": "ngân sách",
        "partOfSpeech": "n"
      },
      {
        "word": "expensive",
        "meaning": "đắt đỏ, tốn kém",
        "partOfSpeech": "adj"
      }
    ]
  },
  {
    "id": "part2-15",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 15",
    "title": "Part 2 - Câu 15: Tôi nên mang theo túi mua sắm nào?",
    "audioSrc": "/audio/test5_2023.mp3",
    "startTime": 448.32,
    "endTime": 466.42,
    "transcript": [
      {
        "id": "p2-15-q",
        "speaker": "Speaker 1",
        "text": "Which shopping bag should I bring?",
        "vietnamese": "Tôi nên mang theo túi mua sắm nào?"
      },
      {
        "id": "p2-15-a",
        "speaker": "Speaker 2",
        "text": "(A) Just outside the store.",
        "vietnamese": "(A) Ngay bên ngoài cửa hàng."
      },
      {
        "id": "p2-15-b",
        "speaker": "Speaker 2",
        "text": "(B) The large one.",
        "vietnamese": "(B) Cái lớn."
      },
      {
        "id": "p2-15-c",
        "speaker": "Speaker 2",
        "text": "(C) No it isn't.",
        "vietnamese": "(C) Không, không phải vậy."
      }
    ],
    "questions": [
      {
        "num": 15,
        "question": "Which shopping bag should I bring?",
        "vietnameseQuestion": "Tôi nên mang theo túi mua sắm nào?",
        "options": [
          {
            "key": "A",
            "text": "Just outside the store.",
            "vietnamese": "Ngay bên ngoài cửa hàng."
          },
          {
            "key": "B",
            "text": "The large one.",
            "vietnamese": "Cái lớn."
          },
          {
            "key": "C",
            "text": "No it isn't.",
            "vietnamese": "Không, không phải vậy."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"The large one.\" (Cái lớn.) là câu phản hồi hợp lý nhất cho câu \"Which shopping bag should I bring?\"."
      }
    ],
    "vocabulary": [
      {
        "word": "bring",
        "meaning": "mang theo, đem lại",
        "partOfSpeech": "v"
      },
      {
        "word": "store",
        "meaning": "lưu trữ, cất giữ",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-16",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 16",
    "title": "Part 2 - Câu 16: Đừng quên thêm một chiếc bàn khác vào phòng hội nghị.",
    "audioSrc": "/audio/test5_2023.mp3",
    "startTime": 466.42,
    "endTime": 486.1,
    "transcript": [
      {
        "id": "p2-16-q",
        "speaker": "Speaker 1",
        "text": "Don't forget to add another table to the conference room.",
        "vietnamese": "Đừng quên thêm một chiếc bàn khác vào phòng hội nghị."
      },
      {
        "id": "p2-16-a",
        "speaker": "Speaker 2",
        "text": "(A) Probably the yoga class.",
        "vietnamese": "(A) Có lẽ là lớp học yoga."
      },
      {
        "id": "p2-16-b",
        "speaker": "Speaker 2",
        "text": "(B) No they didn't.",
        "vietnamese": "(B) Không, họ đã không làm vậy."
      },
      {
        "id": "p2-16-c",
        "speaker": "Speaker 2",
        "text": "(C) Okay I'll do that now.",
        "vietnamese": "(C) Được rồi tôi sẽ làm điều đó ngay bây giờ."
      }
    ],
    "questions": [
      {
        "num": 16,
        "question": "Don't forget to add another table to the conference room.",
        "vietnameseQuestion": "Đừng quên thêm một chiếc bàn khác vào phòng hội nghị.",
        "options": [
          {
            "key": "A",
            "text": "Probably the yoga class.",
            "vietnamese": "Có lẽ là lớp học yoga."
          },
          {
            "key": "B",
            "text": "No they didn't.",
            "vietnamese": "Không, họ đã không làm vậy."
          },
          {
            "key": "C",
            "text": "Okay I'll do that now.",
            "vietnamese": "Được rồi tôi sẽ làm điều đó ngay bây giờ."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"Okay I'll do that now.\" (Được rồi tôi sẽ làm điều đó ngay bây giờ.) là câu phản hồi hợp lý nhất cho câu \"Don't forget to add another table to the conference room.\"."
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
    "title": "Part 2 - Câu 17: Ai từ văn phòng của chúng tôi sẽ đến hội nghị?",
    "audioSrc": "/audio/test5_2023.mp3",
    "startTime": 486.1,
    "endTime": 502.48,
    "transcript": [
      {
        "id": "p2-17-q",
        "speaker": "Speaker 1",
        "text": "Who from our office is going to the conference?",
        "vietnamese": "Ai từ văn phòng của chúng tôi sẽ đến hội nghị?"
      },
      {
        "id": "p2-17-a",
        "speaker": "Speaker 2",
        "text": "(A) I am enjoying our new assignment.",
        "vietnamese": "(A) Tôi đang tận hưởng nhiệm vụ mới của chúng tôi."
      },
      {
        "id": "p2-17-b",
        "speaker": "Speaker 2",
        "text": "(B) At the hotel downtown.",
        "vietnamese": "(B) Tại khách sạn trung tâm thành phố."
      },
      {
        "id": "p2-17-c",
        "speaker": "Speaker 2",
        "text": "(C) Leslie and her support staff.",
        "vietnamese": "(C) Leslie và nhân viên hỗ trợ của cô ấy."
      }
    ],
    "questions": [
      {
        "num": 17,
        "question": "Who from our office is going to the conference?",
        "vietnameseQuestion": "Ai từ văn phòng của chúng tôi sẽ đến hội nghị?",
        "options": [
          {
            "key": "A",
            "text": "I am enjoying our new assignment.",
            "vietnamese": "Tôi đang tận hưởng nhiệm vụ mới của chúng tôi."
          },
          {
            "key": "B",
            "text": "At the hotel downtown.",
            "vietnamese": "Tại khách sạn trung tâm thành phố."
          },
          {
            "key": "C",
            "text": "Leslie and her support staff.",
            "vietnamese": "Leslie và nhân viên hỗ trợ của cô ấy."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"Leslie and her support staff.\" (Leslie và nhân viên hỗ trợ của cô ấy.) là câu phản hồi hợp lý nhất cho câu \"Who from our office is going to the conference?\"."
      }
    ],
    "vocabulary": [
      {
        "word": "conference",
        "meaning": "hội nghị chuyên đề",
        "partOfSpeech": "n"
      },
      {
        "word": "assignment",
        "meaning": "nhiệm vụ được giao, sự phân công",
        "partOfSpeech": "n"
      },
      {
        "word": "downtown",
        "meaning": "khu trung tâm thương mại thành phố",
        "partOfSpeech": "n/adv"
      }
    ]
  },
  {
    "id": "part2-18",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 18",
    "title": "Part 2 - Câu 18: Biển hiệu bán hàng ở đâu?",
    "audioSrc": "/audio/test5_2023.mp3",
    "startTime": 502.48,
    "endTime": 523.22,
    "transcript": [
      {
        "id": "p2-18-q",
        "speaker": "Speaker 1",
        "text": "Where are the signs for the sale?",
        "vietnamese": "Biển hiệu bán hàng ở đâu?"
      },
      {
        "id": "p2-18-a",
        "speaker": "Speaker 2",
        "text": "(A) We are advertising at 15% discount.",
        "vietnamese": "(A) Chúng tôi đang quảng cáo giảm giá 15%."
      },
      {
        "id": "p2-18-b",
        "speaker": "Speaker 2",
        "text": "(B) On the porch.",
        "vietnamese": "(B) Trên hiên nhà."
      },
      {
        "id": "p2-18-c",
        "speaker": "Speaker 2",
        "text": "(C) I didn't know we had sold those items.",
        "vietnamese": "(C) Tôi không biết chúng tôi đã bán những món đồ đó."
      }
    ],
    "questions": [
      {
        "num": 18,
        "question": "Where are the signs for the sale?",
        "vietnameseQuestion": "Biển hiệu bán hàng ở đâu?",
        "options": [
          {
            "key": "A",
            "text": "We are advertising at 15% discount.",
            "vietnamese": "Chúng tôi đang quảng cáo giảm giá 15%."
          },
          {
            "key": "B",
            "text": "On the porch.",
            "vietnamese": "Trên hiên nhà."
          },
          {
            "key": "C",
            "text": "I didn't know we had sold those items.",
            "vietnamese": "Tôi không biết chúng tôi đã bán những món đồ đó."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"On the porch.\" (Trên hiên nhà.) là câu phản hồi hợp lý nhất cho câu \"Where are the signs for the sale?\"."
      }
    ],
    "vocabulary": [
      {
        "word": "advertising",
        "meaning": "hoạt động quảng cáo",
        "partOfSpeech": "n"
      },
      {
        "word": "discount",
        "meaning": "sự giảm giá, chiết khấu",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-19",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 19",
    "title": "Part 2 - Câu 19: Bạn có nghĩ chúng ta nên đăng quảng cáo trên báo không?",
    "audioSrc": "/audio/test5_2023.mp3",
    "startTime": 523.22,
    "endTime": 544.82,
    "transcript": [
      {
        "id": "p2-19-q",
        "speaker": "Speaker 1",
        "text": "Do you think we should place an advertisement in the newspaper?",
        "vietnamese": "Bạn có nghĩ chúng ta nên đăng quảng cáo trên báo không?"
      },
      {
        "id": "p2-19-a",
        "speaker": "Speaker 2",
        "text": "(A) That's not what happened.",
        "vietnamese": "(A) Đó không phải là những gì đã xảy ra."
      },
      {
        "id": "p2-19-b",
        "speaker": "Speaker 2",
        "text": "(B) No I already have a subscription.",
        "vietnamese": "(B) Không, tôi đã có đăng ký rồi."
      },
      {
        "id": "p2-19-c",
        "speaker": "Speaker 2",
        "text": "(C) Our budget is quite limited this month.",
        "vietnamese": "(C) Ngân sách của chúng tôi khá hạn chế trong tháng này."
      }
    ],
    "questions": [
      {
        "num": 19,
        "question": "Do you think we should place an advertisement in the newspaper?",
        "vietnameseQuestion": "Bạn có nghĩ chúng ta nên đăng quảng cáo trên báo không?",
        "options": [
          {
            "key": "A",
            "text": "That's not what happened.",
            "vietnamese": "Đó không phải là những gì đã xảy ra."
          },
          {
            "key": "B",
            "text": "No I already have a subscription.",
            "vietnamese": "Không, tôi đã có đăng ký rồi."
          },
          {
            "key": "C",
            "text": "Our budget is quite limited this month.",
            "vietnamese": "Ngân sách của chúng tôi khá hạn chế trong tháng này."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"Our budget is quite limited this month.\" (Ngân sách của chúng tôi khá hạn chế trong tháng này.) là câu phản hồi hợp lý nhất cho câu \"Do you think we should place an advertisement in the newspaper?\"."
      }
    ],
    "vocabulary": [
      {
        "word": "advertisement",
        "meaning": "mẩu quảng cáo / tin đăng",
        "partOfSpeech": "n"
      },
      {
        "word": "newspaper",
        "meaning": "tờ báo",
        "partOfSpeech": "n"
      },
      {
        "word": "already",
        "meaning": "đã... rồi",
        "partOfSpeech": "adv"
      }
    ]
  },
  {
    "id": "part2-20",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 20",
    "title": "Part 2 - Câu 20: Tôi không nhớ mình đã để bản sao hợp đồng ở đâu.",
    "audioSrc": "/audio/test5_2023.mp3",
    "startTime": 544.82,
    "endTime": 565.5,
    "transcript": [
      {
        "id": "p2-20-q",
        "speaker": "Speaker 1",
        "text": "I don't remember where I put my copy of the contract.",
        "vietnamese": "Tôi không nhớ mình đã để bản sao hợp đồng ở đâu."
      },
      {
        "id": "p2-20-a",
        "speaker": "Speaker 2",
        "text": "(A) My calendar is up to date.",
        "vietnamese": "(A) Lịch của tôi đã được cập nhật."
      },
      {
        "id": "p2-20-b",
        "speaker": "Speaker 2",
        "text": "(B) I can look around for it.",
        "vietnamese": "(B) Tôi có thể nhìn xung quanh để tìm nó."
      },
      {
        "id": "p2-20-c",
        "speaker": "Speaker 2",
        "text": "(C) I don't think that's the best idea.",
        "vietnamese": "(C) Tôi không nghĩ đó là ý tưởng tốt nhất."
      }
    ],
    "questions": [
      {
        "num": 20,
        "question": "I don't remember where I put my copy of the contract.",
        "vietnameseQuestion": "Tôi không nhớ mình đã để bản sao hợp đồng ở đâu.",
        "options": [
          {
            "key": "A",
            "text": "My calendar is up to date.",
            "vietnamese": "Lịch của tôi đã được cập nhật."
          },
          {
            "key": "B",
            "text": "I can look around for it.",
            "vietnamese": "Tôi có thể nhìn xung quanh để tìm nó."
          },
          {
            "key": "C",
            "text": "I don't think that's the best idea.",
            "vietnamese": "Tôi không nghĩ đó là ý tưởng tốt nhất."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"I can look around for it.\" (Tôi có thể nhìn xung quanh để tìm nó.) là câu phản hồi hợp lý nhất cho câu \"I don't remember where I put my copy of the contract.\"."
      }
    ],
    "vocabulary": [
      {
        "word": "contract",
        "meaning": "hợp đồng",
        "partOfSpeech": "n"
      },
      {
        "word": "calendar",
        "meaning": "lịch trình công việc",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-21",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 21",
    "title": "Part 2 - Câu 21: Chúng ta nên gọi món gì cho bữa tối?",
    "audioSrc": "/audio/test5_2023.mp3",
    "startTime": 565.5,
    "endTime": 585.1,
    "transcript": [
      {
        "id": "p2-21-q",
        "speaker": "Speaker 1",
        "text": "What should we order for dinner?",
        "vietnamese": "Chúng ta nên gọi món gì cho bữa tối?"
      },
      {
        "id": "p2-21-a",
        "speaker": "Speaker 2",
        "text": "(A) Yes I ate some of that yesterday.",
        "vietnamese": "(A) Vâng, tôi đã ăn một ít ngày hôm qua."
      },
      {
        "id": "p2-21-b",
        "speaker": "Speaker 2",
        "text": "(B) I'd like something we haven't tried before.",
        "vietnamese": "(B) Tôi muốn thứ gì đó mà chúng tôi chưa từng thử trước đây."
      },
      {
        "id": "p2-21-c",
        "speaker": "Speaker 2",
        "text": "(C) That makes sense to me.",
        "vietnamese": "(C) Điều đó có ý nghĩa với tôi."
      }
    ],
    "questions": [
      {
        "num": 21,
        "question": "What should we order for dinner?",
        "vietnameseQuestion": "Chúng ta nên gọi món gì cho bữa tối?",
        "options": [
          {
            "key": "A",
            "text": "Yes I ate some of that yesterday.",
            "vietnamese": "Vâng, tôi đã ăn một ít ngày hôm qua."
          },
          {
            "key": "B",
            "text": "I'd like something we haven't tried before.",
            "vietnamese": "Tôi muốn thứ gì đó mà chúng tôi chưa từng thử trước đây."
          },
          {
            "key": "C",
            "text": "That makes sense to me.",
            "vietnamese": "Điều đó có ý nghĩa với tôi."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"I'd like something we haven't tried before.\" (Tôi muốn thứ gì đó mà chúng tôi chưa từng thử trước đây.) là câu phản hồi hợp lý nhất cho câu \"What should we order for dinner?\"."
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
    "id": "part2-22",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 22",
    "title": "Part 2 - Câu 22: Tôi tưởng khóa huấn luyện an toàn mới sẽ bắt đầu vào ngày...",
    "audioSrc": "/audio/test5_2023.mp3",
    "startTime": 585.1,
    "endTime": 605.84,
    "transcript": [
      {
        "id": "p2-22-q",
        "speaker": "Speaker 1",
        "text": "I thought the new safety training was supposed to start tomorrow.",
        "vietnamese": "Tôi tưởng khóa huấn luyện an toàn mới sẽ bắt đầu vào ngày mai."
      },
      {
        "id": "p2-22-a",
        "speaker": "Speaker 2",
        "text": "(A) Yes you're right.",
        "vietnamese": "(A) Vâng, bạn nói đúng."
      },
      {
        "id": "p2-22-b",
        "speaker": "Speaker 2",
        "text": "(B) An old computer.",
        "vietnamese": "(B) Một chiếc máy tính cũ."
      },
      {
        "id": "p2-22-c",
        "speaker": "Speaker 2",
        "text": "(C) The ones on the counter.",
        "vietnamese": "(C) Những cái trên quầy."
      }
    ],
    "questions": [
      {
        "num": 22,
        "question": "I thought the new safety training was supposed to start tomorrow.",
        "vietnameseQuestion": "Tôi tưởng khóa huấn luyện an toàn mới sẽ bắt đầu vào ngày mai.",
        "options": [
          {
            "key": "A",
            "text": "Yes you're right.",
            "vietnamese": "Vâng, bạn nói đúng."
          },
          {
            "key": "B",
            "text": "An old computer.",
            "vietnamese": "Một chiếc máy tính cũ."
          },
          {
            "key": "C",
            "text": "The ones on the counter.",
            "vietnamese": "Những cái trên quầy."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là (A): \"Yes you're right.\" (Vâng, bạn nói đúng.) là câu phản hồi hợp lý nhất cho câu \"I thought the new safety training was supposed to start tomorrow.\"."
      }
    ],
    "vocabulary": [
      {
        "word": "training",
        "meaning": "khóa đào tạo, huấn luyện",
        "partOfSpeech": "n"
      },
      {
        "word": "counter",
        "meaning": "quầy hàng, quầy phục vụ",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-23",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 23",
    "title": "Part 2 - Câu 23: Nên mua máy tính để bàn hay laptop cho văn phòng?",
    "audioSrc": "/audio/test5_2023.mp3",
    "startTime": 605.84,
    "endTime": 628.58,
    "transcript": [
      {
        "id": "p2-23-q",
        "speaker": "Speaker 1",
        "text": "Should we buy desktop computers or laptops for the office?",
        "vietnamese": "Nên mua máy tính để bàn hay laptop cho văn phòng?"
      },
      {
        "id": "p2-23-a",
        "speaker": "Speaker 2",
        "text": "(A) The website is working now.",
        "vietnamese": "(A) Trang web hiện đang hoạt động."
      },
      {
        "id": "p2-23-b",
        "speaker": "Speaker 2",
        "text": "(B) You can buy them at any store.",
        "vietnamese": "(B) Bạn có thể mua chúng ở bất kỳ cửa hàng nào."
      },
      {
        "id": "p2-23-c",
        "speaker": "Speaker 2",
        "text": "(C) Most of our staff travel a lot.",
        "vietnamese": "(C) Hầu hết nhân viên của chúng tôi đi du lịch rất nhiều."
      }
    ],
    "questions": [
      {
        "num": 23,
        "question": "Should we buy desktop computers or laptops for the office?",
        "vietnameseQuestion": "Nên mua máy tính để bàn hay laptop cho văn phòng?",
        "options": [
          {
            "key": "A",
            "text": "The website is working now.",
            "vietnamese": "Trang web hiện đang hoạt động."
          },
          {
            "key": "B",
            "text": "You can buy them at any store.",
            "vietnamese": "Bạn có thể mua chúng ở bất kỳ cửa hàng nào."
          },
          {
            "key": "C",
            "text": "Most of our staff travel a lot.",
            "vietnamese": "Hầu hết nhân viên của chúng tôi đi du lịch rất nhiều."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"Most of our staff travel a lot.\" (Hầu hết nhân viên của chúng tôi đi du lịch rất nhiều.) là câu phản hồi hợp lý nhất cho câu \"Should we buy desktop computers or laptops for the office?\"."
      }
    ],
    "vocabulary": [
      {
        "word": "store",
        "meaning": "lưu trữ, cất giữ",
        "partOfSpeech": "n"
      },
      {
        "word": "staff",
        "meaning": "bố trí nhân sự làm việc",
        "partOfSpeech": "v"
      },
      {
        "word": "travel",
        "meaning": "đi lại, đi công tác",
        "partOfSpeech": "v"
      }
    ]
  },
  {
    "id": "part2-24",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 24",
    "title": "Part 2 - Câu 24: Bạn sẽ tham dự buổi tiếp tân vào ngày mai chứ?",
    "audioSrc": "/audio/test5_2023.mp3",
    "startTime": 628.58,
    "endTime": 650.12,
    "transcript": [
      {
        "id": "p2-24-q",
        "speaker": "Speaker 1",
        "text": "Will you be attending the reception tomorrow?",
        "vietnamese": "Bạn sẽ tham dự buổi tiếp tân vào ngày mai chứ?"
      },
      {
        "id": "p2-24-a",
        "speaker": "Speaker 2",
        "text": "(A) Just another day or so.",
        "vietnamese": "(A) Chỉ còn một ngày nữa thôi."
      },
      {
        "id": "p2-24-b",
        "speaker": "Speaker 2",
        "text": "(B) Can you remind me what the topic is?",
        "vietnamese": "(B) Bạn có thể nhắc tôi chủ đề là gì không?"
      },
      {
        "id": "p2-24-c",
        "speaker": "Speaker 2",
        "text": "(C) I heard that they ran out of them.",
        "vietnamese": "(C) Tôi nghe nói rằng họ đã hết chúng."
      }
    ],
    "questions": [
      {
        "num": 24,
        "question": "Will you be attending the reception tomorrow?",
        "vietnameseQuestion": "Bạn sẽ tham dự buổi tiếp tân vào ngày mai chứ?",
        "options": [
          {
            "key": "A",
            "text": "Just another day or so.",
            "vietnamese": "Chỉ còn một ngày nữa thôi."
          },
          {
            "key": "B",
            "text": "Can you remind me what the topic is?",
            "vietnamese": "Bạn có thể nhắc tôi chủ đề là gì không?"
          },
          {
            "key": "C",
            "text": "I heard that they ran out of them.",
            "vietnamese": "Tôi nghe nói rằng họ đã hết chúng."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"Can you remind me what the topic is?\" (Bạn có thể nhắc tôi chủ đề là gì không?) là câu phản hồi hợp lý nhất cho câu \"Will you be attending the reception tomorrow?\"."
      }
    ],
    "vocabulary": [
      {
        "word": "reception",
        "meaning": "tiệc chiêu đãi",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-25",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 25",
    "title": "Part 2 - Câu 25: Bạn đã mua vé xem trận bóng chày chưa?",
    "audioSrc": "/audio/test5_2023.mp3",
    "startTime": 650.12,
    "endTime": 669.7,
    "transcript": [
      {
        "id": "p2-25-q",
        "speaker": "Speaker 1",
        "text": "Did you buy your ticket to the baseball game?",
        "vietnamese": "Bạn đã mua vé xem trận bóng chày chưa?"
      },
      {
        "id": "p2-25-a",
        "speaker": "Speaker 2",
        "text": "(A) Sure after the game is over.",
        "vietnamese": "(A) Chắc chắn sau khi trò chơi kết thúc."
      },
      {
        "id": "p2-25-b",
        "speaker": "Speaker 2",
        "text": "(B) I thought it mission was free.",
        "vietnamese": "(B) Tôi tưởng nhiệm vụ này là miễn phí."
      },
      {
        "id": "p2-25-c",
        "speaker": "Speaker 2",
        "text": "(C) A sports tournament.",
        "vietnamese": "(C) Một giải đấu thể thao."
      }
    ],
    "questions": [
      {
        "num": 25,
        "question": "Did you buy your ticket to the baseball game?",
        "vietnameseQuestion": "Bạn đã mua vé xem trận bóng chày chưa?",
        "options": [
          {
            "key": "A",
            "text": "Sure after the game is over.",
            "vietnamese": "Chắc chắn sau khi trò chơi kết thúc."
          },
          {
            "key": "B",
            "text": "I thought it mission was free.",
            "vietnamese": "Tôi tưởng nhiệm vụ này là miễn phí."
          },
          {
            "key": "C",
            "text": "A sports tournament.",
            "vietnamese": "Một giải đấu thể thao."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"I thought it mission was free.\" (Tôi tưởng nhiệm vụ này là miễn phí.) là câu phản hồi hợp lý nhất cho câu \"Did you buy your ticket to the baseball game?\"."
      }
    ],
    "vocabulary": [
      {
        "word": "free",
        "meaning": "rảnh rỗi, không bận",
        "partOfSpeech": "adj"
      }
    ]
  },
  {
    "id": "part2-26",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 26",
    "title": "Part 2 - Câu 26: Làm cách nào tôi có thể biết thêm thông tin về bên nhân v...",
    "audioSrc": "/audio/test5_2023.mp3",
    "startTime": 669.7,
    "endTime": 691.3,
    "transcript": [
      {
        "id": "p2-26-q",
        "speaker": "Speaker 1",
        "text": "How can I get more information about the employee party?",
        "vietnamese": "Làm cách nào tôi có thể biết thêm thông tin về bên nhân viên?"
      },
      {
        "id": "p2-26-a",
        "speaker": "Speaker 2",
        "text": "(A) A phone number is included in the invitation.",
        "vietnamese": "(A) Một số điện thoại được bao gồm trong lời mời."
      },
      {
        "id": "p2-26-b",
        "speaker": "Speaker 2",
        "text": "(B) The shift is from Italy.",
        "vietnamese": "(B) Sự thay đổi là từ Ý."
      },
      {
        "id": "p2-26-c",
        "speaker": "Speaker 2",
        "text": "(C) Where is the employment office?",
        "vietnamese": "(C) Văn phòng việc làm ở đâu?"
      }
    ],
    "questions": [
      {
        "num": 26,
        "question": "How can I get more information about the employee party?",
        "vietnameseQuestion": "Làm cách nào tôi có thể biết thêm thông tin về bên nhân viên?",
        "options": [
          {
            "key": "A",
            "text": "A phone number is included in the invitation.",
            "vietnamese": "Một số điện thoại được bao gồm trong lời mời."
          },
          {
            "key": "B",
            "text": "The shift is from Italy.",
            "vietnamese": "Sự thay đổi là từ Ý."
          },
          {
            "key": "C",
            "text": "Where is the employment office?",
            "vietnamese": "Văn phòng việc làm ở đâu?"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là (A): \"A phone number is included in the invitation.\" (Một số điện thoại được bao gồm trong lời mời.) là câu phản hồi hợp lý nhất cho câu \"How can I get more information about the employee party?\"."
      }
    ],
    "vocabulary": [
      {
        "word": "phone",
        "meaning": "gọi điện thoại cho ai đó",
        "partOfSpeech": "v"
      },
      {
        "word": "invitation",
        "meaning": "thiệp mời, giấy mời",
        "partOfSpeech": "n"
      },
      {
        "word": "shift",
        "meaning": "ca làm việc",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-27",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 27",
    "title": "Part 2 - Câu 27: Bạn có thể chỉ cho tôi cách chuyển tiền được không?",
    "audioSrc": "/audio/test5_2023.mp3",
    "startTime": 691.3,
    "endTime": 711.88,
    "transcript": [
      {
        "id": "p2-27-q",
        "speaker": "Speaker 1",
        "text": "Could you show me how to transfer funds?",
        "vietnamese": "Bạn có thể chỉ cho tôi cách chuyển tiền được không?"
      },
      {
        "id": "p2-27-a",
        "speaker": "Speaker 2",
        "text": "(A) No it's the other one.",
        "vietnamese": "(A) Không, đó là cái khác."
      },
      {
        "id": "p2-27-b",
        "speaker": "Speaker 2",
        "text": "(B) Let me just finish this first.",
        "vietnamese": "(B) Hãy để tôi hoàn thành việc này trước."
      },
      {
        "id": "p2-27-c",
        "speaker": "Speaker 2",
        "text": "(C) Sure that seems like a reasonable price.",
        "vietnamese": "(C) Chắc chắn đó có vẻ là một mức giá hợp lý."
      }
    ],
    "questions": [
      {
        "num": 27,
        "question": "Could you show me how to transfer funds?",
        "vietnameseQuestion": "Bạn có thể chỉ cho tôi cách chuyển tiền được không?",
        "options": [
          {
            "key": "A",
            "text": "No it's the other one.",
            "vietnamese": "Không, đó là cái khác."
          },
          {
            "key": "B",
            "text": "Let me just finish this first.",
            "vietnamese": "Hãy để tôi hoàn thành việc này trước."
          },
          {
            "key": "C",
            "text": "Sure that seems like a reasonable price.",
            "vietnamese": "Chắc chắn đó có vẻ là một mức giá hợp lý."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"Let me just finish this first.\" (Hãy để tôi hoàn thành việc này trước.) là câu phản hồi hợp lý nhất cho câu \"Could you show me how to transfer funds?\"."
      }
    ],
    "vocabulary": [
      {
        "word": "transfer",
        "meaning": "chuyển đổi, chuyển giao",
        "partOfSpeech": "v"
      }
    ]
  },
  {
    "id": "part2-28",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 28",
    "title": "Part 2 - Câu 28: Tư cách thành viên phòng tập thể dục của chúng tôi sẽ tự ...",
    "audioSrc": "/audio/test5_2023.mp3",
    "startTime": 711.88,
    "endTime": 735.65,
    "transcript": [
      {
        "id": "p2-28-q",
        "speaker": "Speaker 1",
        "text": "Will our gym memberships when you automatically?",
        "vietnamese": "Tư cách thành viên phòng tập thể dục của chúng tôi sẽ tự động khi bạn?"
      },
      {
        "id": "p2-28-a",
        "speaker": "Speaker 2",
        "text": "(A) They just saw that.",
        "vietnamese": "(A) Họ vừa nhìn thấy điều đó."
      },
      {
        "id": "p2-28-b",
        "speaker": "Speaker 2",
        "text": "(B) About a manager.",
        "vietnamese": "(B) Về một người quản lý."
      },
      {
        "id": "p2-28-c",
        "speaker": "Speaker 2",
        "text": "(C) That's what I was told.",
        "vietnamese": "(C) Đó là những gì tôi đã nói."
      }
    ],
    "questions": [
      {
        "num": 28,
        "question": "Will our gym memberships when you automatically?",
        "vietnameseQuestion": "Tư cách thành viên phòng tập thể dục của chúng tôi sẽ tự động khi bạn?",
        "options": [
          {
            "key": "A",
            "text": "They just saw that.",
            "vietnamese": "Họ vừa nhìn thấy điều đó."
          },
          {
            "key": "B",
            "text": "About a manager.",
            "vietnamese": "Về một người quản lý."
          },
          {
            "key": "C",
            "text": "That's what I was told.",
            "vietnamese": "Đó là những gì tôi đã nói."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"That's what I was told.\" (Đó là những gì tôi đã nói.) là câu phản hồi hợp lý nhất cho câu \"Will our gym memberships when you automatically?\"."
      }
    ],
    "vocabulary": [
      {
        "word": "memberships",
        "meaning": "tư cách thành viên",
        "partOfSpeech": "n/v"
      },
      {
        "word": "automatically",
        "meaning": "tự động",
        "partOfSpeech": "n/v"
      }
    ]
  },
  {
    "id": "part2-29",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 29",
    "title": "Part 2 - Câu 29: Không phải Shinji có lịch làm việc ở quầy thu ngân sao?",
    "audioSrc": "/audio/test5_2023.mp3",
    "startTime": 735.65,
    "endTime": 751.9,
    "transcript": [
      {
        "id": "p2-29-q",
        "speaker": "Speaker 1",
        "text": "Isn't Shinji scheduled to work at the cash register?",
        "vietnamese": "Không phải Shinji có lịch làm việc ở quầy thu ngân sao?"
      },
      {
        "id": "p2-29-a",
        "speaker": "Speaker 2",
        "text": "(A) Yes he just arrived.",
        "vietnamese": "(A) Vâng anh ấy vừa mới đến."
      },
      {
        "id": "p2-29-b",
        "speaker": "Speaker 2",
        "text": "(B) The price hasn't changed.",
        "vietnamese": "(B) Giá vẫn không thay đổi."
      },
      {
        "id": "p2-29-c",
        "speaker": "Speaker 2",
        "text": "(C) How much does it cost?",
        "vietnamese": "(C) Nó có giá bao nhiêu?"
      }
    ],
    "questions": [
      {
        "num": 29,
        "question": "Isn't Shinji scheduled to work at the cash register?",
        "vietnameseQuestion": "Không phải Shinji có lịch làm việc ở quầy thu ngân sao?",
        "options": [
          {
            "key": "A",
            "text": "Yes he just arrived.",
            "vietnamese": "Vâng anh ấy vừa mới đến."
          },
          {
            "key": "B",
            "text": "The price hasn't changed.",
            "vietnamese": "Giá vẫn không thay đổi."
          },
          {
            "key": "C",
            "text": "How much does it cost?",
            "vietnamese": "Nó có giá bao nhiêu?"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là (A): \"Yes he just arrived.\" (Vâng anh ấy vừa mới đến.) là câu phản hồi hợp lý nhất cho câu \"Isn't Shinji scheduled to work at the cash register?\"."
      }
    ],
    "vocabulary": [
      {
        "word": "scheduled",
        "meaning": "được lên lịch trình",
        "partOfSpeech": "adj"
      },
      {
        "word": "cost",
        "meaning": "trị giá, tốn chi phí",
        "partOfSpeech": "v"
      }
    ]
  },
  {
    "id": "part2-30",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 30",
    "title": "Part 2 - Câu 30: Bạn có tất cả các thành phần cho công thức?",
    "audioSrc": "/audio/test5_2023.mp3",
    "startTime": 751.9,
    "endTime": 772.54,
    "transcript": [
      {
        "id": "p2-30-q",
        "speaker": "Speaker 1",
        "text": "Do you have all the ingredients for the recipe?",
        "vietnamese": "Bạn có tất cả các thành phần cho công thức?"
      },
      {
        "id": "p2-30-a",
        "speaker": "Speaker 2",
        "text": "(A) We will plant a garden soon.",
        "vietnamese": "(A) Chúng tôi sẽ sớm trồng một khu vườn."
      },
      {
        "id": "p2-30-b",
        "speaker": "Speaker 2",
        "text": "(B) Yes my oven is working again.",
        "vietnamese": "(B) Vâng, lò nướng của tôi đã hoạt động trở lại."
      },
      {
        "id": "p2-30-c",
        "speaker": "Speaker 2",
        "text": "(C) I need to buy some onions.",
        "vietnamese": "(C) Tôi cần mua một ít hành tây."
      }
    ],
    "questions": [
      {
        "num": 30,
        "question": "Do you have all the ingredients for the recipe?",
        "vietnameseQuestion": "Bạn có tất cả các thành phần cho công thức?",
        "options": [
          {
            "key": "A",
            "text": "We will plant a garden soon.",
            "vietnamese": "Chúng tôi sẽ sớm trồng một khu vườn."
          },
          {
            "key": "B",
            "text": "Yes my oven is working again.",
            "vietnamese": "Vâng, lò nướng của tôi đã hoạt động trở lại."
          },
          {
            "key": "C",
            "text": "I need to buy some onions.",
            "vietnamese": "Tôi cần mua một ít hành tây."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"I need to buy some onions.\" (Tôi cần mua một ít hành tây.) là câu phản hồi hợp lý nhất cho câu \"Do you have all the ingredients for the recipe?\"."
      }
    ],
    "vocabulary": [
      {
        "word": "recipe",
        "meaning": "công thức nấu ăn",
        "partOfSpeech": "n"
      },
      {
        "word": "plant",
        "meaning": "cây cối, thực vật",
        "partOfSpeech": "n"
      },
      {
        "word": "oven",
        "meaning": "lò nướng",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-31",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 31",
    "title": "Part 2 - Câu 31: Bạn đang phụ trách chương trình giảm giá của nhà cung cấp...",
    "audioSrc": "/audio/test5_2023.mp3",
    "startTime": 772.54,
    "endTime": 795.18,
    "transcript": [
      {
        "id": "p2-31-q",
        "speaker": "Speaker 1",
        "text": "You're in charge of the supplier discount program, right?",
        "vietnamese": "Bạn đang phụ trách chương trình giảm giá của nhà cung cấp phải không?"
      },
      {
        "id": "p2-31-a",
        "speaker": "Speaker 2",
        "text": "(A) The coupons are on the kitchen counter.",
        "vietnamese": "(A) Các phiếu giảm giá ở trên quầy bếp."
      },
      {
        "id": "p2-31-b",
        "speaker": "Speaker 2",
        "text": "(B) We have all the supplies we need.",
        "vietnamese": "(B) Chúng tôi có tất cả nguồn cung cấp chúng tôi cần."
      },
      {
        "id": "p2-31-c",
        "speaker": "Speaker 2",
        "text": "(C) Hairsio is the one you want to talk to.",
        "vietnamese": "(C) Hairsio là người bạn muốn nói chuyện."
      }
    ],
    "questions": [
      {
        "num": 31,
        "question": "You're in charge of the supplier discount program, right?",
        "vietnameseQuestion": "Bạn đang phụ trách chương trình giảm giá của nhà cung cấp phải không?",
        "options": [
          {
            "key": "A",
            "text": "The coupons are on the kitchen counter.",
            "vietnamese": "Các phiếu giảm giá ở trên quầy bếp."
          },
          {
            "key": "B",
            "text": "We have all the supplies we need.",
            "vietnamese": "Chúng tôi có tất cả nguồn cung cấp chúng tôi cần."
          },
          {
            "key": "C",
            "text": "Hairsio is the one you want to talk to.",
            "vietnamese": "Hairsio là người bạn muốn nói chuyện."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"Hairsio is the one you want to talk to.\" (Hairsio là người bạn muốn nói chuyện.) là câu phản hồi hợp lý nhất cho câu \"You're in charge of the supplier discount program, right?\"."
      }
    ],
    "vocabulary": [
      {
        "word": "charge",
        "meaning": "sạc pin, nạp điện",
        "partOfSpeech": "v"
      },
      {
        "word": "supplier",
        "meaning": "nhà cung cấp, nhà phân phối",
        "partOfSpeech": "n"
      },
      {
        "word": "discount",
        "meaning": "sự giảm giá, chiết khấu",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part3-32-34",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 32 - 34",
    "title": "Part 3 - Câu 32 - 34: Các diễn giả đang thảo luận về vấn đề gì",
    "audioSrc": "/audio/test5_2023.mp3",
    "startTime": 828.57,
    "endTime": 887.43,
    "transcript": [
      {
        "id": "p3-32-1",
        "speaker": "Woman",
        "text": "A. Hi Martin it's Lillian.",
        "vietnamese": "A. Xin chào Martin, Lillian đây."
      },
      {
        "id": "p3-32-2",
        "speaker": "Man",
        "text": "Are you still planning to read from your book of poetry at the Arts Festival next weekend?",
        "vietnamese": "Bạn vẫn định đọc tập thơ của mình tại Lễ hội Nghệ thuật vào cuối tuần tới chứ?"
      },
      {
        "id": "p3-32-3",
        "speaker": "Woman",
        "text": "You're one of this publishing companies most accomplished writers.",
        "vietnamese": "Bạn là một trong những nhà văn thành đạt nhất của công ty xuất bản này."
      },
      {
        "id": "p3-32-4",
        "speaker": "Man",
        "text": "A. I just need directions to the festival site. It's in a park, right?",
        "vietnamese": "A. Tôi chỉ cần chỉ đường đến địa điểm lễ hội. Nó ở trong công viên phải không?"
      },
      {
        "id": "p3-32-5",
        "speaker": "Woman",
        "text": "A. Yes. Just know that once you get there, our table will be the one closest to the entrance.",
        "vietnamese": "A. Vâng. Chỉ cần biết rằng khi bạn đến đó, bàn của chúng tôi sẽ là bàn gần lối vào nhất."
      },
      {
        "id": "p3-32-6",
        "speaker": "Man",
        "text": "A. I can text you the address when we finish this call.",
        "vietnamese": "A. Tôi có thể nhắn tin cho bạn địa chỉ khi chúng ta kết thúc cuộc gọi này."
      }
    ],
    "questions": [
      {
        "num": 32,
        "question": "What are the speakers discussing?",
        "vietnameseQuestion": "Các diễn giả đang thảo luận về vấn đề gì?",
        "options": [
          {
            "key": "A",
            "text": "Plans for an upcoming event",
            "vietnamese": "Kế hoạch cho sự kiện sắp tới"
          },
          {
            "key": "B",
            "text": "The quality of the man's poems",
            "vietnamese": "Chất lượng thơ của con người"
          },
          {
            "key": "C",
            "text": "The publishing company they work for",
            "vietnamese": "Công ty xuất bản nơi họ làm việc"
          },
          {
            "key": "D",
            "text": "Aproblem with the woman's phone",
            "vietnamese": "Sự cố với điện thoại của người phụ nữ"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là (A): \"Plans for an upcoming event\" (Kế hoạch cho sự kiện sắp tới)."
      },
      {
        "num": 33,
        "question": "What does the man need?",
        "vietnameseQuestion": "Người đàn ông cần gì?",
        "options": [
          {
            "key": "A",
            "text": "Permission from his company",
            "vietnamese": "Sự cho phép từ công ty của anh ấy"
          },
          {
            "key": "B",
            "text": "Contact information",
            "vietnamese": "Thông tin liên hệ"
          },
          {
            "key": "C",
            "text": "An extra table",
            "vietnamese": "Một bàn phụ"
          },
          {
            "key": "D",
            "text": "The location of a park",
            "vietnamese": "Vị trí của một công viên"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là (D): \"The location of a park\" (Vị trí của một công viên)."
      },
      {
        "num": 34,
        "question": "What will the woman do next?",
        "vietnameseQuestion": "Người phụ nữ sẽ làm gì tiếp theo?",
        "options": [
          {
            "key": "A",
            "text": "Call the man's manager",
            "vietnamese": "Gọi cho người quản lý của người đàn ông"
          },
          {
            "key": "B",
            "text": "Send a text message",
            "vietnamese": "Gửi tin nhắn văn bản"
          },
          {
            "key": "C",
            "text": "Talk with an editor",
            "vietnamese": "Nói chuyện với một biên tập viên"
          },
          {
            "key": "D",
            "text": "Check a schedule",
            "vietnamese": "Kiểm tra lịch trình"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"Send a text message\" (Gửi tin nhắn văn bản)."
      }
    ],
    "vocabulary": [
      {
        "word": "book",
        "meaning": "đặt trước (phòng, vé)",
        "partOfSpeech": "v"
      },
      {
        "word": "festival",
        "meaning": "lễ hội",
        "partOfSpeech": "n"
      },
      {
        "word": "publishing",
        "meaning": "ngành xuất bản",
        "partOfSpeech": "n"
      },
      {
        "word": "directions",
        "meaning": "chỉ đường, phương hướng",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part3-35-37",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 35 - 37",
    "title": "Part 3 - Câu 35 - 37: Tại sao người phụ nữ lại gọi người đàn ông đó",
    "audioSrc": "/audio/test5_2023.mp3",
    "startTime": 887.43,
    "endTime": 967.24,
    "transcript": [
      {
        "id": "p3-35-1",
        "speaker": "Woman",
        "text": "A. Mr. Guzman, I'm calling from Powell advertising.",
        "vietnamese": "A. Ông Guzman, tôi gọi từ Powell quảng cáo."
      },
      {
        "id": "p3-35-2",
        "speaker": "Man",
        "text": "A. As I'm sure you know, your contract with us expires next month.",
        "vietnamese": "A. Như tôi chắc chắn bạn đã biết, hợp đồng của bạn với chúng tôi sẽ hết hạn vào tháng tới."
      },
      {
        "id": "p3-35-3",
        "speaker": "Woman",
        "text": "A. I was hoping we could take some time to discuss renewal terms.",
        "vietnamese": "A. Tôi đã hy vọng chúng ta có thể dành chút thời gian để thảo luận về các điều khoản gia hạn."
      },
      {
        "id": "p3-35-4",
        "speaker": "Man",
        "text": "A. Quite honestly, we're not seeing the increase in sales we were hoping for.",
        "vietnamese": "A. Thành thật mà nói, chúng tôi không thấy doanh số bán hàng tăng như mong đợi."
      },
      {
        "id": "p3-35-5",
        "speaker": "Woman",
        "text": "A. Advertising in buses and trains just isn't working for us.",
        "vietnamese": "A. Quảng cáo trên xe buýt và xe lửa không có tác dụng với chúng tôi."
      },
      {
        "id": "p3-35-6",
        "speaker": "Man",
        "text": "A. Hmm. I know you've been hesitant to get into web advertising, but maybe now the time is right.",
        "vietnamese": "A. Ừm. Tôi biết bạn đã do dự khi tham gia quảng cáo trên web, nhưng có lẽ bây giờ đã đến lúc."
      },
      {
        "id": "p3-35-7",
        "speaker": "Woman",
        "text": "A. Okay. Let's sit up a time to talk about this.",
        "vietnamese": "A. Được rồi. Chúng ta hãy ngồi lại một lúc để nói về điều này."
      },
      {
        "id": "p3-35-8",
        "speaker": "Man",
        "text": "A. I'm going to ask a few of my colleagues here to join us.",
        "vietnamese": "A. Tôi sẽ mời một vài đồng nghiệp của tôi ở đây tham gia cùng chúng tôi."
      }
    ],
    "questions": [
      {
        "num": 35,
        "question": "Why does the woman call theman?",
        "vietnameseQuestion": "Tại sao người phụ nữ lại gọi người đàn ông đó?",
        "options": [
          {
            "key": "A",
            "text": "To discuss renewing a contract",
            "vietnamese": "Để thảo luận về việc gia hạn hợp đồng"
          },
          {
            "key": "B",
            "text": "To discuss a transportation issue",
            "vietnamese": "Để thảo luận về vấn đề giao thông"
          },
          {
            "key": "C",
            "text": "To announce a change in price",
            "vietnamese": "Để thông báo thay đổi về giá"
          },
          {
            "key": "D",
            "text": "To announce a personnel change",
            "vietnamese": "Để thông báo thay đổi nhân sự"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là (A): \"To discuss renewing a contract\" (Để thảo luận về việc gia hạn hợp đồng)."
      },
      {
        "num": 36,
        "question": "What does the man say about the current advertising?",
        "vietnameseQuestion": "Người đàn ông nói gì về quảng cáo hiện tại?",
        "options": [
          {
            "key": "A",
            "text": "It is a good low-cost option.",
            "vietnamese": "Đó là một lựa chọn tốt với chi phí thấp."
          },
          {
            "key": "B",
            "text": "It has not led to a significant increase in sales.",
            "vietnamese": "Nó không dẫn đến sự gia tăng đáng kể về doanh số bán hàng."
          },
          {
            "key": "C",
            "text": "His colleagues have decided to cancel it.",
            "vietnamese": "Các đồng nghiệp của anh ấy đã quyết định hủy bỏ nó."
          },
          {
            "key": "D",
            "text": "His colleagues do not have time to discuss it.",
            "vietnamese": "Các đồng nghiệp của anh ấy không có thời gian để thảo luận về nó."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"It has not led to a significant increase in sales.\" (Nó không dẫn đến sự gia tăng đáng kể về doanh số bán hàng.)."
      },
      {
        "num": 37,
        "question": "What will the speakers discuss in their next meeting?",
        "vietnameseQuestion": "Các diễn giả sẽ thảo luận điều gì trong cuộc họp tiếp theo?",
        "options": [
          {
            "key": "A",
            "text": "Hiring a celebrity",
            "vietnamese": "Thuê người nổi tiếng"
          },
          {
            "key": "B",
            "text": "Advertising on the Internet",
            "vietnamese": "Quảng cáo trên Internet"
          },
          {
            "key": "C",
            "text": "Expanding an advertising budget",
            "vietnamese": "Mở rộng ngân sách quảng cáo"
          },
          {
            "key": "D",
            "text": "Changing advertising companies",
            "vietnamese": "Thay đổi công ty quảng cáo"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"Advertising on the Internet\" (Quảng cáo trên Internet)."
      }
    ],
    "vocabulary": [
      {
        "word": "advertising",
        "meaning": "hoạt động quảng cáo",
        "partOfSpeech": "n"
      },
      {
        "word": "contract",
        "meaning": "hợp đồng",
        "partOfSpeech": "n"
      },
      {
        "word": "increase",
        "meaning": "tăng lên",
        "partOfSpeech": "v/n"
      },
      {
        "word": "sales",
        "meaning": "doanh số bán hàng",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part3-38-40",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 38 - 40",
    "title": "Part 3 - Câu 38 - 40: Cuộc trò chuyện có nhiều khả năng diễn ra ở đâu",
    "audioSrc": "/audio/test5_2023.mp3",
    "startTime": 967.24,
    "endTime": 1041.86,
    "transcript": [
      {
        "id": "p3-38-1",
        "speaker": "Woman",
        "text": "A. Did Mr. Okamura really order all these carrots for the cafe?",
        "vietnamese": "A. Có thật là ông Okamura đã đặt mua tất cả cà rốt này cho quán cà phê không?"
      },
      {
        "id": "p3-38-2",
        "speaker": "Man",
        "text": "A. I signed for the delivery, but now I'm worried that there was a mistake.",
        "vietnamese": "A. Tôi đã ký nhận hàng nhưng hiện tại tôi lo lắng có sai sót."
      },
      {
        "id": "p3-38-3",
        "speaker": "Woman",
        "text": "A. I don't know me, how.",
        "vietnamese": "A. Tôi không biết tôi thì sao."
      },
      {
        "id": "p3-38-4",
        "speaker": "Man",
        "text": "A. I sold the list of specials for offering this weekend, and didn't see anything that has a lot of carrots in it.",
        "vietnamese": "A. Tôi đã bán danh sách ưu đãi đặc biệt vào cuối tuần này và không thấy món nào có nhiều cà rốt trong đó cả."
      },
      {
        "id": "p3-38-5",
        "speaker": "Woman",
        "text": "A. It's okay. Mr. Okamura told me that we need them for a special private dinner tonight.",
        "vietnamese": "A. Không sao đâu. Ông Okamura nói với tôi rằng chúng tôi cần họ cho bữa tối riêng tư đặc biệt tối nay."
      },
      {
        "id": "p3-38-6",
        "speaker": "Man",
        "text": "A. I'll start preparing them now. A. Ok. Once I finish the baking, I should be able to do some.",
        "vietnamese": "A. Tôi sẽ bắt đầu chuẩn bị chúng ngay bây giờ. A. Được rồi. Sau khi nướng xong, tôi sẽ có thể làm được một ít."
      },
      {
        "id": "p3-38-7",
        "speaker": "Woman",
        "text": "A. Thanks, Miho.",
        "vietnamese": "A. Cảm ơn, Miho."
      }
    ],
    "questions": [
      {
        "num": 38,
        "question": "Wheredoestheconversationmostlikely take place?",
        "vietnameseQuestion": "Cuộc trò chuyện có nhiều khả năng diễn ra ở đâu?",
        "options": [
          {
            "key": "A",
            "text": "At a farmers market",
            "vietnamese": "Tại một chợ nông sản"
          },
          {
            "key": "B",
            "text": "In a restaurant kitchen",
            "vietnamese": "Trong bếp nhà hàng"
          },
          {
            "key": "C",
            "text": "In a grocery store",
            "vietnamese": "Trong một cửa hàng tạp hóa"
          },
          {
            "key": "D",
            "text": "At a shipping company",
            "vietnamese": "Tại một công ty vận tải"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"In a restaurant kitchen\" (Trong bếp nhà hàng)."
      },
      {
        "num": 39,
        "question": "Why is Miho concerned about the delivery?",
        "vietnameseQuestion": "Tại sao Miho lại quan tâm đến việc giao hàng?",
        "options": [
          {
            "key": "A",
            "text": "It seems too small.",
            "vietnamese": "Nó có vẻ quá nhỏ."
          },
          {
            "key": "B",
            "text": "It arrived late.",
            "vietnamese": "Nó đến muộn."
          },
          {
            "key": "C",
            "text": "It contains a large quantity of one item. TEST5",
            "vietnamese": "Nó chứa một số lượng lớn của một mặt hàng. TEST5"
          },
          {
            "key": "D",
            "text": "One type of item is missing from it.",
            "vietnamese": "Một loại mặt hàng bị thiếu trong đó."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"It contains a large quantity of one item. TEST5\" (Nó chứa một số lượng lớn của một mặt hàng. TEST5)."
      },
      {
        "num": 40,
        "question": "What does Miho offer to do?",
        "vietnameseQuestion": "Miho đề nghị làm gì?",
        "options": [
          {
            "key": "A",
            "text": "Help the man with his task",
            "vietnamese": "Giúp người đàn ông thực hiện nhiệm vụ của mình"
          },
          {
            "key": "B",
            "text": "Contact Mr. Okamura",
            "vietnamese": "Liên hệ Mr Okamura"
          },
          {
            "key": "C",
            "text": "Sign for a delivery",
            "vietnamese": "Ký nhận hàng"
          },
          {
            "key": "D",
            "text": "Find a replacement worker",
            "vietnamese": "Tìm nhân viên thay thế"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là (A): \"Help the man with his task\" (Giúp người đàn ông thực hiện nhiệm vụ của mình)."
      }
    ],
    "vocabulary": [
      {
        "word": "order",
        "meaning": "gọi món, đặt hàng",
        "partOfSpeech": "v"
      },
      {
        "word": "delivery",
        "meaning": "sự giao hàng, đơn giao hàng",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part3-41-43",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 41 - 43",
    "title": "Part 3 - Câu 41 - 43: Sáng mai sẽ thế nào",
    "audioSrc": "/audio/test5_2023.mp3",
    "startTime": 1041.86,
    "endTime": 1121.82,
    "transcript": [
      {
        "id": "p3-41-1",
        "speaker": "Woman",
        "text": "A. Hi. I'm calling from Dr. Yankovich's office to confirm your appointment tomorrow morning.",
        "vietnamese": "A. Xin chào. Tôi sẽ gọi từ văn phòng bác sĩ Yankovich để xác nhận cuộc hẹn của anh vào sáng mai."
      },
      {
        "id": "p3-41-2",
        "speaker": "Man",
        "text": "A. Sure. I'll be there at 11 o'clock.",
        "vietnamese": "A. Chắc chắn rồi. Tôi sẽ có mặt ở đó lúc 11 giờ."
      },
      {
        "id": "p3-41-3",
        "speaker": "Woman",
        "text": "A. Since you're a new patient, please complete all the online forms before you arrive.",
        "vietnamese": "A. Vì bạn là bệnh nhân mới, vui lòng điền tất cả các biểu mẫu trực tuyến trước khi bạn đến."
      },
      {
        "id": "p3-41-4",
        "speaker": "Man",
        "text": "A. I sent you an email last week with a link to our medical portal.",
        "vietnamese": "A. Tôi đã gửi cho bạn một email vào tuần trước có liên kết đến cổng thông tin y tế của chúng tôi."
      },
      {
        "id": "p3-41-5",
        "speaker": "Woman",
        "text": "A. Oh, I must have missed it. Sorry about that. I'll do it right away.",
        "vietnamese": "A. Ồ, chắc là tôi đã bỏ lỡ nó. Xin lỗi về điều đó. Tôi sẽ làm điều đó ngay lập tức."
      },
      {
        "id": "p3-41-6",
        "speaker": "Man",
        "text": "No problem. And one reminder, our regular parking area is unavailable because it's being renovated.",
        "vietnamese": "Không có vấn đề gì. Và một lời nhắc nhở, khu vực đỗ xe thông thường của chúng tôi không còn trống vì nó đang được cải tạo."
      },
      {
        "id": "p3-41-7",
        "speaker": "Woman",
        "text": "You can park in front of the insurance company next door to us. We have an agreement with them.",
        "vietnamese": "Bạn có thể đỗ xe trước công ty bảo hiểm bên cạnh chúng tôi. Chúng tôi có thỏa thuận với họ."
      }
    ],
    "questions": [
      {
        "num": 41,
        "question": "Whatwillthemandotomorrow morning?",
        "vietnameseQuestion": "Sáng mai sẽ thế nào?",
        "options": [
          {
            "key": "A",
            "text": "Meet with a client",
            "vietnamese": "Gặp gỡ với một khách hàng"
          },
          {
            "key": "B",
            "text": "Visit adoctor's office",
            "vietnamese": "Đến phòng khám bác sĩ"
          },
          {
            "key": "C",
            "text": "Relocate to a different office",
            "vietnamese": "Chuyển đến một văn phòng khác"
          },
          {
            "key": "D",
            "text": "Attendapresentation",
            "vietnamese": "tham dự thuyết trình"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"Visit adoctor's office\" (Đến phòng khám bác sĩ)."
      },
      {
        "num": 42,
        "question": "Whatdoesthewomantellthemantodo?",
        "vietnameseQuestion": "Người phụ nữ nói với họ điều gì?",
        "options": [
          {
            "key": "A",
            "text": "Fill in some forms",
            "vietnamese": "Điền vào một số mẫu đơn"
          },
          {
            "key": "B",
            "text": "Update a contact number",
            "vietnamese": "Cập nhật số liên lạc"
          },
          {
            "key": "C",
            "text": "Make a payment",
            "vietnamese": "Thực hiện thanh toán"
          },
          {
            "key": "D",
            "text": "Choose a menu item",
            "vietnamese": "Chọn một mục menu"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là (A): \"Fill in some forms\" (Điền vào một số mẫu đơn)."
      },
      {
        "num": 43,
        "question": "What reminder does the woman give the man?",
        "vietnameseQuestion": "Người phụ nữ nhắc nhở người đàn ông điều gì?",
        "options": [
          {
            "key": "A",
            "text": "A colleague is out of town.",
            "vietnamese": "Một đồng nghiệp đang ở ngoài thành phố."
          },
          {
            "key": "B",
            "text": "A price has changed.",
            "vietnamese": "Một mức giá đã thay đổi."
          },
          {
            "key": "C",
            "text": "Some software must be updated.",
            "vietnamese": "Một số phần mềm phải được cập nhật."
          },
          {
            "key": "D",
            "text": "A parking area is closed. GOONTOTHENEXTPAGE TEST581",
            "vietnamese": "Một khu vực đậu xe đã đóng cửa. KIỂM TRA GONTOTHENEXTPAGE581"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là (D): \"A parking area is closed. GOONTOTHENEXTPAGE TEST581\" (Một khu vực đậu xe đã đóng cửa. KIỂM TRA GONTOTHENEXTPAGE581)."
      }
    ],
    "vocabulary": [
      {
        "word": "appointment",
        "meaning": "cuộc hẹn, lịch hẹn",
        "partOfSpeech": "n"
      },
      {
        "word": "patient",
        "meaning": "bệnh nhân",
        "partOfSpeech": "n"
      },
      {
        "word": "complete",
        "meaning": "hoàn thành, kết thúc",
        "partOfSpeech": "v"
      },
      {
        "word": "arrive",
        "meaning": "đến nơi",
        "partOfSpeech": "v"
      }
    ]
  },
  {
    "id": "part3-44-46",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 44 - 46",
    "title": "Part 3 - Câu 44 - 46: Cuộc trò chuyện có nhiều khả năng diễn ra ở đâu nhất",
    "audioSrc": "/audio/test5_2023.mp3",
    "startTime": 1121.82,
    "endTime": 1208.89,
    "transcript": [
      {
        "id": "p3-44-1",
        "speaker": "Woman",
        "text": "A. Hi. I'm flying to Munich. The name's Goldenberg. I have one suitcase.",
        "vietnamese": "A. Xin chào. Tôi đang bay tới Munich. Tên là Goldenberg. Tôi có một chiếc vali."
      },
      {
        "id": "p3-44-2",
        "speaker": "Man",
        "text": "A. I see your reservation, Miss Goldenberg. I'll print your boarding pass.",
        "vietnamese": "A. Tôi đã xem thông tin đặt chỗ của cô, cô Goldenberg. Tôi sẽ in thẻ lên máy bay của bạn."
      },
      {
        "id": "p3-44-3",
        "speaker": "Woman",
        "text": "A. Actually, I was wondering if you could change my seat. I'd rather have an aisle one. It's easier if I have to move around.",
        "vietnamese": "A. Thực ra tôi đang thắc mắc liệu bạn có thể đổi chỗ ngồi cho tôi không. Tôi muốn có một lối đi hơn. Sẽ dễ dàng hơn nếu tôi phải di chuyển xung quanh."
      },
      {
        "id": "p3-44-4",
        "speaker": "Man",
        "text": "A. Unfortunately, this flight is full. In fact, it's overbooked. So if you're interested, I can offer you an aisle seat on tomorrow's flight and upgrade you to business class.",
        "vietnamese": "A. Thật không may, chuyến bay này đã kín chỗ. Trên thực tế, nó đã được đặt trước quá nhiều. Vì vậy, nếu bạn quan tâm, tôi có thể cung cấp cho bạn ghế cạnh lối đi trên chuyến bay ngày mai và nâng bạn lên hạng thương gia."
      },
      {
        "id": "p3-44-5",
        "speaker": "Woman",
        "text": "A. Tomorrow? I'm the guest speaker at a conference. A. Okay. We'll ask some other passengers. Here's your boarding pass. Have a good trip.",
        "vietnamese": "A. Ngày mai? Tôi là diễn giả khách mời tại một hội nghị. A. Được rồi. Chúng ta sẽ hỏi một số hành khách khác. Đây là thẻ lên máy bay của bạn. Chúc bạn có một chuyến đi vui vẻ."
      }
    ],
    "questions": [
      {
        "num": 44,
        "question": "Where is the conversation most likely taking place?",
        "vietnameseQuestion": "Cuộc trò chuyện có nhiều khả năng diễn ra ở đâu nhất?",
        "options": [
          {
            "key": "A",
            "text": "At a bus terminal",
            "vietnamese": "Tại một bến xe buýt"
          },
          {
            "key": "B",
            "text": "At an airport",
            "vietnamese": "Tại một sân bay"
          },
          {
            "key": "C",
            "text": "In a hotel lobby",
            "vietnamese": "Ở sảnh khách sạn"
          },
          {
            "key": "D",
            "text": "In a conference hall",
            "vietnamese": "Trong một hội trường"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"At an airport\" (Tại một sân bay)."
      },
      {
        "num": 45,
        "question": "What doesthewomanaskfor?",
        "vietnameseQuestion": "Người phụ nữ yêu cầu điều gì?",
        "options": [
          {
            "key": "A",
            "text": "A different seat",
            "vietnamese": "Một chỗ ngồi khác"
          },
          {
            "key": "B",
            "text": "Aname badge",
            "vietnamese": "Huy hiệu tên"
          },
          {
            "key": "C",
            "text": "A room upgrade",
            "vietnamese": "Nâng cấp phòng"
          },
          {
            "key": "D",
            "text": "A special menu",
            "vietnamese": "Thực đơn đặc biệt"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là (A): \"A different seat\" (Một chỗ ngồi khác)."
      },
      {
        "num": 46,
        "question": "Why does the woman say,\"'m the guest speaker at a conference\"?",
        "vietnameseQuestion": "Tại sao người phụ nữ lại nói: \"Tôi là diễn giả khách mời của một hội nghị\"?",
        "options": [
          {
            "key": "A",
            "text": "Toconfirmherconference attendance",
            "vietnamese": "Để xác nhận việc tham dự hội nghị của cô ấy"
          },
          {
            "key": "B",
            "text": "To introduce herself",
            "vietnamese": "Để giới thiệu bản thân"
          },
          {
            "key": "C",
            "text": "To refuse an offer",
            "vietnamese": "Để từ chối một lời đề nghị"
          },
          {
            "key": "D",
            "text": "To clarify a misunderstanding",
            "vietnamese": "Để làm sáng tỏ sự hiểu lầm"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"To refuse an offer\" (Để từ chối một lời đề nghị)."
      }
    ],
    "vocabulary": [
      {
        "word": "suitcase",
        "meaning": "va-li du lịch",
        "partOfSpeech": "n"
      },
      {
        "word": "reservation",
        "meaning": "sự đặt chỗ, đặt phòng trước",
        "partOfSpeech": "n"
      },
      {
        "word": "actually",
        "meaning": "thực ra, trên thực tế",
        "partOfSpeech": "adv"
      },
      {
        "word": "aisle",
        "meaning": "lối đi giữa các quầy hàng",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part3-47-49",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 47 - 49",
    "title": "Part 3 - Câu 47 - 49: Người đàn ông thảo luận vấn đề gì với người phụ nữ",
    "audioSrc": "/audio/test5_2023.mp3",
    "startTime": 1208.89,
    "endTime": 1292.73,
    "transcript": [
      {
        "id": "p3-47-1",
        "speaker": "Woman",
        "text": "A. Hi. I'm calling from Gwan construction. We were originally scheduled to transport the tower crane to your building this weekend for upcoming construction.",
        "vietnamese": "A. Xin chào. Tôi đang gọi từ công trình Gwan. Ban đầu chúng tôi dự kiến ​​sẽ vận chuyển cần cẩu tháp đến tòa nhà của bạn vào cuối tuần này để chuẩn bị cho công trình sắp tới."
      },
      {
        "id": "p3-47-2",
        "speaker": "Man",
        "text": "As you know, we will use it to lift large steel beams onto the roof for renovations on the top floor.",
        "vietnamese": "Như các bạn đã biết, chúng ta sẽ dùng nó để nâng các dầm thép lớn lên mái nhà để cải tạo tầng trên cùng."
      },
      {
        "id": "p3-47-3",
        "speaker": "Woman",
        "text": "But I'm afraid we're going to have to bring it and set it up this Wednesday instead.",
        "vietnamese": "Nhưng tôi e rằng thay vào đó chúng ta sẽ phải mang nó đi và sắp xếp nó vào thứ Tư tuần này."
      },
      {
        "id": "p3-47-4",
        "speaker": "Man",
        "text": "A. Well, the weekend would have been better since most of the offices are usually empty.",
        "vietnamese": "A. Cuối tuần sẽ tốt hơn vì hầu hết các văn phòng thường trống."
      },
      {
        "id": "p3-47-5",
        "speaker": "Woman",
        "text": "A. But if you have to, I'll send a notice that employees should use the side street entrance.",
        "vietnamese": "A. Nhưng nếu bạn phải làm vậy, tôi sẽ gửi thông báo rằng nhân viên nên sử dụng lối vào bên đường."
      },
      {
        "id": "p3-47-6",
        "speaker": "Man",
        "text": "A. Okay. I'll go ahead and contact the city to request a change to the start date of our construction permit.",
        "vietnamese": "A. Được rồi. Tôi sẽ tiếp tục và liên hệ với thành phố để yêu cầu thay đổi ngày bắt đầu cấp giấy phép xây dựng của chúng tôi."
      }
    ],
    "questions": [
      {
        "num": 47,
        "question": "What issue does the man discuss with the woman?",
        "vietnameseQuestion": "Người đàn ông thảo luận vấn đề gì với người phụ nữ?",
        "options": [
          {
            "key": "A",
            "text": "His employees need access to the roof.",
            "vietnamese": "Nhân viên của anh ấy cần được lên mái nhà."
          },
          {
            "key": "B",
            "text": "Part of his plan needs to be rescheduled.",
            "vietnamese": "Một phần kế hoạch của anh ấy cần phải được dời lại."
          },
          {
            "key": "C",
            "text": "A shipment of steel was incomplete.",
            "vietnamese": "Một chuyến hàng thép không đầy đủ."
          },
          {
            "key": "D",
            "text": "A renovation project is over budget.",
            "vietnamese": "Một dự án cải tạo vượt quá ngân sách."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"Part of his plan needs to be rescheduled.\" (Một phần kế hoạch của anh ấy cần phải được dời lại.)."
      },
      {
        "num": 48,
        "question": "Whomostlikelyisthewoman?",
        "vietnameseQuestion": "Ai có khả năng nhất là người phụ nữ này?",
        "options": [
          {
            "key": "A",
            "text": "An architect",
            "vietnamese": "Một kiến trúc sư"
          },
          {
            "key": "B",
            "text": "Afinancial analyst",
            "vietnamese": "Nhà phân tích tài chính"
          },
          {
            "key": "C",
            "text": "A construction worker",
            "vietnamese": "Một công nhân xây dựng"
          },
          {
            "key": "D",
            "text": "A building manager",
            "vietnamese": "Một người quản lý tòa nhà"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là (D): \"A building manager\" (Một người quản lý tòa nhà)."
      },
      {
        "num": 49,
        "question": "What will the man do next?",
        "vietnameseQuestion": "Người đàn ông sẽ làm gì tiếp theo?",
        "options": [
          {
            "key": "A",
            "text": "Close the building temporarily",
            "vietnamese": "Đóng cửa tòa nhà tạm thời"
          },
          {
            "key": "B",
            "text": "Get approval from his supervisor",
            "vietnamese": "Nhận được sự chấp thuận từ người giám sát của anh ấy"
          },
          {
            "key": "C",
            "text": "Reach out to city officials",
            "vietnamese": "Tiếp cận các quan chức thành phố"
          },
          {
            "key": "D",
            "text": "Arrange a new payment schedule 82",
            "vietnamese": "Sắp xếp lịch thanh toán mới 82"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"Reach out to city officials\" (Tiếp cận các quan chức thành phố)."
      }
    ],
    "vocabulary": [
      {
        "word": "scheduled",
        "meaning": "được lên lịch trình",
        "partOfSpeech": "adj"
      },
      {
        "word": "upcoming",
        "meaning": "sắp tới",
        "partOfSpeech": "adj"
      },
      {
        "word": "lift",
        "meaning": "nâng lên, nhấc lên",
        "partOfSpeech": "v"
      },
      {
        "word": "roof",
        "meaning": "nóc, mui xe",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part3-50-52",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 50 - 52",
    "title": "Part 3 - Câu 50 - 52: Ông Jones thông báo điều gì",
    "audioSrc": "/audio/test5_2023.mp3",
    "startTime": 1292.73,
    "endTime": 1384.45,
    "transcript": [
      {
        "id": "p3-50-1",
        "speaker": "Woman",
        "text": "A. As you all know, our bookstore has a new inventory system for keeping track of what books we have in the store.",
        "vietnamese": "A. Như các bạn đã biết, hiệu sách của chúng tôi có một hệ thống kiểm kê mới để theo dõi những cuốn sách chúng tôi có trong cửa hàng."
      },
      {
        "id": "p3-50-2",
        "speaker": "Man",
        "text": "A. We were going to start using it just after the holidays when the store is closed to customers.",
        "vietnamese": "A. Chúng tôi dự định bắt đầu sử dụng nó ngay sau kỳ nghỉ lễ khi cửa hàng đóng cửa đón khách."
      },
      {
        "id": "p3-50-3",
        "speaker": "Woman",
        "text": "A. But we need to start using it now.",
        "vietnamese": "A. Nhưng chúng ta cần bắt đầu sử dụng nó ngay bây giờ."
      },
      {
        "id": "p3-50-4",
        "speaker": "Man",
        "text": "A. Mr. Jones, you mean we'll be entering inventory into the system and helping customers at the same time.",
        "vietnamese": "A. Ông Jones, ý ông là chúng tôi sẽ nhập hàng tồn kho vào hệ thống và đồng thời giúp đỡ khách hàng."
      },
      {
        "id": "p3-50-5",
        "speaker": "Woman",
        "text": "A. That's a lot.",
        "vietnamese": "A. Đó là rất nhiều."
      },
      {
        "id": "p3-50-6",
        "speaker": "Man",
        "text": "A. I understand your concern, but Mark has been attending training and we'll be able to lead the transition so that salespeople can concentrate on customer service.",
        "vietnamese": "A. Tôi hiểu mối quan tâm của bạn, nhưng Mark đã tham gia khóa đào tạo và chúng tôi sẽ có thể dẫn dắt quá trình chuyển đổi để nhân viên bán hàng có thể tập trung vào dịch vụ khách hàng."
      },
      {
        "id": "p3-50-7",
        "speaker": "Woman",
        "text": "A. Mark, anything you want to say?",
        "vietnamese": "A. Mark, bạn có muốn nói gì không?"
      },
      {
        "id": "p3-50-8",
        "speaker": "Man",
        "text": "A. The system isn't difficult to use and most importantly, I think it will make filling online orders much quicker.",
        "vietnamese": "A. Hệ thống này không khó sử dụng và quan trọng nhất là tôi nghĩ nó sẽ giúp việc thực hiện các đơn hàng trực tuyến nhanh hơn nhiều."
      }
    ],
    "questions": [
      {
        "num": 50,
        "question": "What does Mr. Jones announce?",
        "vietnameseQuestion": "Ông Jones thông báo điều gì?",
        "options": [
          {
            "key": "A",
            "text": "A change of plans",
            "vietnamese": "Một sự thay đổi kế hoạch"
          },
          {
            "key": "B",
            "text": "A book-signing event",
            "vietnamese": "Sự kiện ký tặng sách"
          },
          {
            "key": "C",
            "text": "New store hours",
            "vietnamese": "Giờ cửa hàng mới"
          },
          {
            "key": "D",
            "text": "A price change",
            "vietnamese": "Một sự thay đổi giá"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là (A): \"A change of plans\" (Một sự thay đổi kế hoạch)."
      },
      {
        "num": 51,
        "question": "What is the woman concerned about?",
        "vietnameseQuestion": "Người phụ nữ đang quan tâm đến điều gì?",
        "options": [
          {
            "key": "A",
            "text": "The accuracy of some software",
            "vietnamese": "Độ chính xác của một số phần mềm"
          },
          {
            "key": "B",
            "text": "An increased workload",
            "vietnamese": "Khối lượng công việc tăng lên"
          },
          {
            "key": "C",
            "text": "Customercomplaints",
            "vietnamese": "Khiếu nại của khách hàng"
          },
          {
            "key": "D",
            "text": "Running out of supplies",
            "vietnamese": "Hết nguồn cung cấp"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"An increased workload\" (Khối lượng công việc tăng lên)."
      },
      {
        "num": 52,
        "question": "What does Marc emphasize?",
        "vietnameseQuestion": "Marc nhấn mạnh điều gì?",
        "options": [
          {
            "key": "A",
            "text": "Reduced operating expenses",
            "vietnamese": "Giảm chi phí hoạt động"
          },
          {
            "key": "B",
            "text": "Greater inventory availability",
            "vietnamese": "Tính sẵn có của hàng tồn kho lớn hơn"
          },
          {
            "key": "C",
            "text": "The efficiency of a new system",
            "vietnamese": "Hiệu quả của hệ thống mới"
          },
          {
            "key": "D",
            "text": "The need for extra training",
            "vietnamese": "Sự cần thiết phải đào tạo thêm"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"The efficiency of a new system\" (Hiệu quả của hệ thống mới)."
      }
    ],
    "vocabulary": [
      {
        "word": "inventory",
        "meaning": "hàng tồn kho",
        "partOfSpeech": "n"
      },
      {
        "word": "track",
        "meaning": "đường ray xe lửa",
        "partOfSpeech": "n"
      },
      {
        "word": "store",
        "meaning": "lưu trữ, cất giữ",
        "partOfSpeech": "n"
      },
      {
        "word": "closed",
        "meaning": "đóng cửa",
        "partOfSpeech": "adj"
      }
    ]
  },
  {
    "id": "part3-53-55",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 53 - 55",
    "title": "Part 3 - Câu 53 - 55: Điều gì sẽ bắt đầu vào tháng tới",
    "audioSrc": "/audio/test5_2023.mp3",
    "startTime": 1384.45,
    "endTime": 1463.96,
    "transcript": [
      {
        "id": "p3-53-1",
        "speaker": "Woman",
        "text": "A. Hi, I'm Tina Mackin from the television program Sunrise Scotland.",
        "vietnamese": "A. Xin chào, tôi là Tina Mackin từ chương trình truyền hình Sunrise Scotland."
      },
      {
        "id": "p3-53-2",
        "speaker": "Man",
        "text": "I just received an email with information on the musical that's opening next month. The fields of Dombartan?",
        "vietnamese": "Tôi vừa nhận được email có thông tin về vở nhạc kịch sẽ khai mạc vào tháng tới. Cánh đồng Dombartan?"
      },
      {
        "id": "p3-53-3",
        "speaker": "Woman",
        "text": "A. Yes, the director asked me to send that, some photos and information.",
        "vietnamese": "A. Vâng, giám đốc yêu cầu tôi gửi một số hình ảnh và thông tin."
      },
      {
        "id": "p3-53-4",
        "speaker": "Man",
        "text": "A. So you got the email with all the attachments?",
        "vietnamese": "A. Vậy là bạn đã nhận được email với tất cả các tệp đính kèm?"
      },
      {
        "id": "p3-53-5",
        "speaker": "Woman",
        "text": "A. I did, but I was expecting a short video from one of the rehearsals.",
        "vietnamese": "A. Tôi đã làm vậy, nhưng tôi đang mong đợi một đoạn video ngắn từ một trong những buổi diễn tập."
      },
      {
        "id": "p3-53-6",
        "speaker": "Man",
        "text": "We'd like to show a clip on our morning television program.",
        "vietnamese": "Chúng tôi muốn chiếu một đoạn phim trên chương trình truyền hình buổi sáng của chúng tôi."
      },
      {
        "id": "p3-53-7",
        "speaker": "Woman",
        "text": "A. I wasn't aware of that. I'll talk to the musical's director, Michael Byrne.",
        "vietnamese": "A. Tôi đã không biết điều đó. Tôi sẽ nói chuyện với đạo diễn vở nhạc kịch, Michael Byrne."
      },
      {
        "id": "p3-53-8",
        "speaker": "Man",
        "text": "A. Okay, and when you speak to him, please advise him to arrive early for his appearance and I'll show this Friday.",
        "vietnamese": "A. Được rồi, và khi bạn nói chuyện với anh ấy, vui lòng khuyên anh ấy đến sớm để xuất hiện và tôi sẽ trình chiếu vào thứ Sáu tuần này."
      },
      {
        "id": "p3-53-9",
        "speaker": "Woman",
        "text": "There's road construction around the studio, so it may take longer to get here than he expects.",
        "vietnamese": "Đường xung quanh trường quay đang được thi công nên có thể sẽ mất nhiều thời gian hơn anh ấy mong đợi để đến được đây."
      }
    ],
    "questions": [
      {
        "num": 53,
        "question": "What will begin next month?",
        "vietnameseQuestion": "Điều gì sẽ bắt đầu vào tháng tới?",
        "options": [
          {
            "key": "A",
            "text": "Atelevision show",
            "vietnamese": "chương trình truyền hình"
          },
          {
            "key": "B",
            "text": "Amusical",
            "vietnamese": "vui nhộn"
          },
          {
            "key": "C",
            "text": "A photo exhibition",
            "vietnamese": "Một cuộc triển lãm ảnh"
          },
          {
            "key": "D",
            "text": "A rehearsal for a music video",
            "vietnamese": "Buổi diễn tập cho một MV ca nhạc"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"Amusical\" (vui nhộn)."
      },
      {
        "num": 54,
        "question": "What does the woman say about the e-mail?",
        "vietnameseQuestion": "Người phụ nữ nói gì về e-mail?",
        "options": [
          {
            "key": "A",
            "text": "She is not happy with the attached photos.",
            "vietnamese": "Cô ấy không hài lòng với những bức ảnh đính kèm."
          },
          {
            "key": "B",
            "text": "She expected it to contain a video.",
            "vietnamese": "Cô mong nó sẽ chứa một đoạn video."
          },
          {
            "key": "C",
            "text": "She thought it would arrive earlier.",
            "vietnamese": "Cô nghĩ nó sẽ đến sớm hơn."
          },
          {
            "key": "D",
            "text": "She has not had time to read it.",
            "vietnamese": "Cô chưa có thời gian để đọc nó."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"She expected it to contain a video.\" (Cô mong nó sẽ chứa một đoạn video.)."
      },
      {
        "num": 55,
        "question": "What does the woman suggest that Michael Byrne do on Friday?",
        "vietnameseQuestion": "Người phụ nữ đề nghị Michael Byrne làm gì vào thứ Sáu?",
        "options": [
          {
            "key": "A",
            "text": "Talk with her on the phone about a video",
            "vietnamese": "Nói chuyện với cô ấy qua điện thoại về một video"
          },
          {
            "key": "B",
            "text": "Share some ideas for a newmusical",
            "vietnamese": "Chia sẻ một số ý tưởng cho một vở nhạc kịch mới"
          },
          {
            "key": "C",
            "text": "Help her with a problem at the studio",
            "vietnamese": "Giúp cô ấy giải quyết vấn đề ở studio"
          },
          {
            "key": "D",
            "text": "Allow extra time to get to his appointment",
            "vietnamese": "Dành thêm thời gian để đến cuộc hẹn của anh ấy"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là (D): \"Allow extra time to get to his appointment\" (Dành thêm thời gian để đến cuộc hẹn của anh ấy)."
      }
    ],
    "vocabulary": [
      {
        "word": "opening",
        "meaning": "chỗ trống, phòng trống",
        "partOfSpeech": "n"
      },
      {
        "word": "arrive",
        "meaning": "đến nơi",
        "partOfSpeech": "v"
      },
      {
        "word": "appearance",
        "meaning": "sự xuất hiện (trên truyền hình)",
        "partOfSpeech": "n"
      },
      {
        "word": "studio",
        "meaning": "phim trường, trường quay",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part3-56-58",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 56 - 58",
    "title": "Part 3 - Câu 56 - 58: Các diễn giả chủ yếu thảo luận về vấn đề gì",
    "audioSrc": "/audio/test5_2023.mp3",
    "startTime": 1463.96,
    "endTime": 1560.26,
    "transcript": [
      {
        "id": "p3-56-1",
        "speaker": "Woman",
        "text": "A. Have you had a chance to look at the survey results?",
        "vietnamese": "A. Bạn đã có cơ hội xem kết quả khảo sát chưa?"
      },
      {
        "id": "p3-56-2",
        "speaker": "Man",
        "text": "A. I wasn't surprised. We've known for a while that our customers really don't like the music in our video games.",
        "vietnamese": "A. Tôi không ngạc nhiên. Chúng tôi đã biết từ lâu rằng khách hàng thực sự không thích âm nhạc trong trò chơi điện tử của chúng tôi."
      },
      {
        "id": "p3-56-3",
        "speaker": "Woman",
        "text": "A. The trend is to have popular music with vocals rather than the electronic sounds we've always used.",
        "vietnamese": "A. Xu hướng là có âm nhạc phổ biến với giọng hát hơn là âm thanh điện tử mà chúng ta vẫn luôn sử dụng."
      },
      {
        "id": "p3-56-4",
        "speaker": "Man",
        "text": "A. I'm sure using popular music in our games will increase sales.",
        "vietnamese": "A. Tôi chắc chắn rằng việc sử dụng âm nhạc phổ biến trong trò chơi của chúng tôi sẽ tăng doanh thu."
      },
      {
        "id": "p3-56-5",
        "speaker": "Woman",
        "text": "A. I think we should start to make this change now, don't you?",
        "vietnamese": "A. Tôi nghĩ chúng ta nên bắt đầu thực hiện thay đổi này ngay bây giờ phải không?"
      },
      {
        "id": "p3-56-6",
        "speaker": "Man",
        "text": "A. Well, what's popular today may not be popular tomorrow and we want our games to keep selling for a long time.",
        "vietnamese": "Đáp: Những gì phổ biến hôm nay có thể không phổ biến vào ngày mai và chúng tôi muốn trò chơi của mình tiếp tục bán chạy trong thời gian dài."
      },
      {
        "id": "p3-56-7",
        "speaker": "Woman",
        "text": "A. So, let's not rush this decision. A. I see. Okay.",
        "vietnamese": "A. Vì vậy, chúng ta đừng vội đưa ra quyết định này. A. Tôi hiểu rồi. Được rồi."
      },
      {
        "id": "p3-56-8",
        "speaker": "Man",
        "text": "A. Let's discuss this further with our division leaders.",
        "vietnamese": "A. Hãy thảo luận thêm về vấn đề này với các lãnh đạo bộ phận của chúng ta."
      }
    ],
    "questions": [
      {
        "num": 56,
        "question": "What are the speakers mainly discussing?",
        "vietnameseQuestion": "Các diễn giả chủ yếu thảo luận về vấn đề gì?",
        "options": [
          {
            "key": "A",
            "text": "Amusicianwhohas become successful",
            "vietnamese": "Amusicianngười đã thành công"
          },
          {
            "key": "B",
            "text": "Acompanydecisionto stop offeringa service",
            "vietnamese": "Quyết định của công ty ngừng cung cấp dịch vụ"
          },
          {
            "key": "C",
            "text": "A licensing agreement with a popular singer",
            "vietnamese": "Thỏa thuận cấp phép với một ca sĩ nổi tiếng"
          },
          {
            "key": "D",
            "text": "A possible change to a product",
            "vietnamese": "Một sự thay đổi có thể xảy ra đối với một sản phẩm"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là (D): \"A possible change to a product\" (Một sự thay đổi có thể xảy ra đối với một sản phẩm)."
      },
      {
        "num": 57,
        "question": "What problem was identified in a customer survey about video games?",
        "vietnameseQuestion": "Vấn đề gì đã được xác định trong cuộc khảo sát khách hàng về trò chơi điện tử?",
        "options": [
          {
            "key": "A",
            "text": "Some video games are too difficult.",
            "vietnamese": "Một số trò chơi điện tử quá khó."
          },
          {
            "key": "B",
            "text": "Customers do not like the music.",
            "vietnamese": "Khách hàng không thích âm nhạc."
          },
          {
            "key": "C",
            "text": "Somegamesonlyworkwith expensive equipment.",
            "vietnamese": "Một số trò chơi chỉ hoạt động với thiết bị đắt tiền."
          },
          {
            "key": "D",
            "text": "Some games are completely defective.",
            "vietnamese": "Một số trò chơi bị lỗi hoàn toàn."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"Customers do not like the music.\" (Khách hàng không thích âm nhạc.)."
      },
      {
        "num": 58,
        "question": "Why does the woman say, \"So, let's not rush this decision\"?",
        "vietnameseQuestion": "Tại sao người phụ nữ lại nói: \"Vậy chúng ta đừng vội quyết định\"?",
        "options": [
          {
            "key": "A",
            "text": "To request more funding from the divisionleaders",
            "vietnamese": "Yêu cầu thêm kinh phí từ các lãnh đạo bộ phận"
          },
          {
            "key": "B",
            "text": "To reject the man's suggestion",
            "vietnamese": "Từ chối lời đề nghị của người đàn ông"
          },
          {
            "key": "C",
            "text": "To obtain a replacement product",
            "vietnamese": "Để có được sản phẩm thay thế"
          },
          {
            "key": "D",
            "text": "To recommend a different musician",
            "vietnamese": "Để giới thiệu một nhạc sĩ khác"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"To reject the man's suggestion\" (Từ chối lời đề nghị của người đàn ông)."
      }
    ],
    "vocabulary": [
      {
        "word": "survey",
        "meaning": "bản khảo sát ý kiến",
        "partOfSpeech": "n"
      },
      {
        "word": "increase",
        "meaning": "tăng lên",
        "partOfSpeech": "v/n"
      },
      {
        "word": "sales",
        "meaning": "doanh số bán hàng",
        "partOfSpeech": "n"
      },
      {
        "word": "keep",
        "meaning": "giữ lại",
        "partOfSpeech": "v"
      }
    ]
  },
  {
    "id": "part3-59-61",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 59 - 61",
    "title": "Part 3 - Câu 59 - 61: Người đàn ông nói anh ta sẽ làm gì hôm nay",
    "audioSrc": "/audio/test5_2023.mp3",
    "startTime": 1560.26,
    "endTime": 1629.8,
    "transcript": [
      {
        "id": "p3-59-1",
        "speaker": "Woman",
        "text": "A. Good morning, Dr. On. In case you have forgotten, today I am going to start transferring patients' paper records to electronic files.",
        "vietnamese": "A. Chào buổi sáng, Tiến sĩ On. Trong trường hợp bạn quên, hôm nay tôi sẽ bắt đầu chuyển hồ sơ giấy của bệnh nhân sang hồ sơ điện tử."
      },
      {
        "id": "p3-59-2",
        "speaker": "Man",
        "text": "A. Oh, right. Thanks. Who will be handling phone calls and greeting patients while you're in the back office?",
        "vietnamese": "A. Ồ, phải rồi. Cảm ơn. Ai sẽ xử lý các cuộc gọi điện thoại và chào đón bệnh nhân khi bạn ở văn phòng hỗ trợ?"
      },
      {
        "id": "p3-59-3",
        "speaker": "Woman",
        "text": "A. I arranged for a temporary office assistant to come in and help out.",
        "vietnamese": "A. Tôi đã sắp xếp một trợ lý văn phòng tạm thời đến giúp đỡ."
      },
      {
        "id": "p3-59-4",
        "speaker": "Man",
        "text": "A. Okay. But the system we use for scheduling appointments can be tricky to operate.",
        "vietnamese": "A. Được rồi. Tuy nhiên, hệ thống chúng tôi sử dụng để lên lịch cuộc hẹn có thể khó vận hành."
      },
      {
        "id": "p3-59-5",
        "speaker": "Woman",
        "text": "A. Well, the office assistant is coming from an agency that specializes in the medical profession.",
        "vietnamese": "A. Vâng, trợ lý văn phòng này đến từ một cơ quan chuyên về lĩnh vực y tế."
      },
      {
        "id": "p3-59-6",
        "speaker": "Man",
        "text": "A. So, I think we should be fine.",
        "vietnamese": "A. Vì vậy, tôi nghĩ chúng ta sẽ ổn thôi."
      }
    ],
    "questions": [
      {
        "num": 59,
        "question": "What does the man say he will do today?",
        "vietnameseQuestion": "Người đàn ông nói anh ta sẽ làm gì hôm nay?",
        "options": [
          {
            "key": "A",
            "text": "Greet patients",
            "vietnamese": "Chào bệnh nhân"
          },
          {
            "key": "B",
            "text": "Train a new employee",
            "vietnamese": "Đào tạo một nhân viên mới"
          },
          {
            "key": "C",
            "text": "Transfer medical records",
            "vietnamese": "Chuyển hồ sơ bệnh án"
          },
          {
            "key": "D",
            "text": "Make appointments",
            "vietnamese": "Đặt lịch hẹn"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"Transfer medical records\" (Chuyển hồ sơ bệnh án)."
      },
      {
        "num": 60,
        "question": "What is the woman concerned about?",
        "vietnameseQuestion": "Người phụ nữ đang quan tâm đến điều gì?",
        "options": [
          {
            "key": "A",
            "text": "The cost of hiring a new office assistant",
            "vietnamese": "Chi phí thuê trợ lý văn phòng mới"
          },
          {
            "key": "B",
            "text": "Maintaining the security of electronic files",
            "vietnamese": "Duy trì tính bảo mật của các tập tin điện tử"
          },
          {
            "key": "C",
            "text": "The privacy of patients in the office",
            "vietnamese": "Quyền riêng tư của bệnh nhân tại phòng khám"
          },
          {
            "key": "D",
            "text": "Using a scheduling system",
            "vietnamese": "Sử dụng hệ thống lập kế hoạch"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là (D): \"Using a scheduling system\" (Sử dụng hệ thống lập kế hoạch)."
      },
      {
        "num": 61,
        "question": "Why does theman feel confident in the temporary office assistant?",
        "vietnameseQuestion": "Tại sao người đàn ông lại cảm thấy tin tưởng vào trợ lý văn phòng tạm thời?",
        "options": [
          {
            "key": "A",
            "text": "He will be able to help the assistant if the office gets busy.",
            "vietnamese": "Anh ấy sẽ có thể giúp đỡ trợ lý nếu văn phòng bận rộn."
          },
          {
            "key": "B",
            "text": "He has worked with the assistant on other projects.",
            "vietnamese": "Anh ấy đã làm việc với trợ lý này trong các dự án khác."
          },
          {
            "key": "C",
            "text": "The doctorrecommended that he hire the assistant.",
            "vietnamese": "Bác sĩ khuyên ông nên thuê trợ lý."
          },
          {
            "key": "D",
            "text": "The assistant comes from an agency that specializes in medical work. Invoice From:PrebbleFlowerDistributors To: Michelle's Flower Shop $155 Roses (125) $130 Tulips (100) Calla lilies (75) $180 Carnations (50) $85",
            "vietnamese": "Người trợ lý đến từ một cơ quan chuyên về công tác y tế. Hóa đơn Từ:PrebbleFflowerNhà phân phối tới: Cửa hàng hoa của Michelle $155 Hoa hồng (125) $130 Hoa tulip (100) Hoa loa kèn (75) $180 Hoa cẩm chướng (50) $85"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là (D): \"The assistant comes from an agency that specializes in medical work. Invoice From:PrebbleFlowerDistributors To: Michelle's Flower Shop $155 Roses (125) $130 Tulips (100) Calla lilies (75) $180 Carnations (50) $85\" (Người trợ lý đến từ một cơ quan chuyên về công tác y tế. Hóa đơn Từ:PrebbleFflowerNhà phân phối tới: Cửa hàng hoa của Michelle $155 Hoa hồng (125) $130 Hoa tulip (100) Hoa loa kèn (75) $180 Hoa cẩm chướng (50) $85)."
      }
    ],
    "vocabulary": [
      {
        "word": "records",
        "meaning": "hồ sơ, chứng từ lưu trữ",
        "partOfSpeech": "n"
      },
      {
        "word": "phone",
        "meaning": "gọi điện thoại cho ai đó",
        "partOfSpeech": "v"
      },
      {
        "word": "temporary",
        "meaning": "tạm thời",
        "partOfSpeech": "adj"
      },
      {
        "word": "assistant",
        "meaning": "người trợ lý",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part3-62-64",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 62 - 64",
    "title": "Part 3 - Câu 62 - 64: Tại sao người phụ nữ lại gọi",
    "audioSrc": "/audio/test5_2023.mp3",
    "startTime": 1629.8,
    "endTime": 1722.97,
    "transcript": [
      {
        "id": "p3-62-1",
        "speaker": "Woman",
        "text": "A. Hi, Ian. This is Michelle from Michelle's Flower Shop.",
        "vietnamese": "A. Chào Ian. Đây là Michelle từ Cửa hàng hoa của Michelle."
      },
      {
        "id": "p3-62-2",
        "speaker": "Man",
        "text": "A. We just received our wholesale order, but the tulips are missing.",
        "vietnamese": "A. Chúng tôi vừa nhận được đơn đặt hàng bán buôn, nhưng hoa tulip bị thiếu."
      },
      {
        "id": "p3-62-3",
        "speaker": "Woman",
        "text": "A. Oh, sorry. I forgot to let you know that my supplier can't get them to me until tomorrow.",
        "vietnamese": "A. Ồ, xin lỗi. Tôi quên báo cho bạn biết rằng nhà cung cấp của tôi không thể giao hàng cho tôi cho đến ngày mai."
      },
      {
        "id": "p3-62-4",
        "speaker": "Man",
        "text": "A. I've had a number of customers requesting tulips recently.",
        "vietnamese": "A. Gần đây tôi có một số khách hàng yêu cầu hoa tulip."
      },
      {
        "id": "p3-62-5",
        "speaker": "Woman",
        "text": "A. So, could you please ship them as soon as you can? A. Absolutely. I'll send the truck back to you tomorrow with the tulips.",
        "vietnamese": "A. Vì vậy, bạn có thể vui lòng gửi chúng sớm nhất có thể được không? A. Chắc chắn rồi. Ngày mai tôi sẽ gửi xe tải chở hoa tulip về cho bạn."
      },
      {
        "id": "p3-62-6",
        "speaker": "Man",
        "text": "A. And actually, I've ordered 100 flowers, but could you double that, please? I'm sure I'll need at least 200.",
        "vietnamese": "A. Và thực ra, tôi đã đặt mua 100 bông hoa, nhưng bạn có thể tăng gấp đôi số đó lên được không? Tôi chắc chắn tôi sẽ cần ít nhất 200."
      },
      {
        "id": "p3-62-7",
        "speaker": "Woman",
        "text": "A. Sure. And I'll send you a revised invoice as well.",
        "vietnamese": "A. Chắc chắn rồi. Và tôi cũng sẽ gửi cho bạn hóa đơn sửa đổi."
      }
    ],
    "questions": [
      {
        "num": 62,
        "question": "Why is the woman calling?",
        "vietnameseQuestion": "Tại sao người phụ nữ lại gọi?",
        "options": [
          {
            "key": "A",
            "text": "To report that an order is incomplete",
            "vietnamese": "Để báo cáo rằng một đơn đặt hàng không đầy đủ"
          },
          {
            "key": "B",
            "text": "To report that some flowers are damaged",
            "vietnamese": "Báo cáo một số bông hoa bị hư hỏng"
          },
          {
            "key": "C",
            "text": "To ask for a discount",
            "vietnamese": "Để yêu cầu giảm giá"
          },
          {
            "key": "D",
            "text": "To check on a client",
            "vietnamese": "Để kiểm tra một khách hàng"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là (A): \"To report that an order is incomplete\" (Để báo cáo rằng một đơn đặt hàng không đầy đủ)."
      },
      {
        "num": 63,
        "question": "What did the man forget to do?",
        "vietnameseQuestion": "Người đàn ông đã quên làm gì?",
        "options": [
          {
            "key": "A",
            "text": "To provide a discount",
            "vietnamese": "Để cung cấp giảm giá"
          },
          {
            "key": "B",
            "text": "To meet with some clients TEST",
            "vietnamese": "Để gặp một số khách hàng KIỂM TRA"
          },
          {
            "key": "C",
            "text": "To report a delay",
            "vietnamese": "Để báo cáo sự chậm trễ"
          },
          {
            "key": "D",
            "text": "To correct an invoice",
            "vietnamese": "Để sửa hóa đơn"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"To report a delay\" (Để báo cáo sự chậm trễ)."
      },
      {
        "num": 64,
        "question": "Look at the graphic. Which price will change on the invoice?",
        "vietnameseQuestion": "Nhìn vào đồ họa. Giá nào sẽ thay đổi trên hóa đơn?",
        "options": [
          {
            "key": "A",
            "text": "$155",
            "vietnamese": "$155"
          },
          {
            "key": "B",
            "text": "$130",
            "vietnamese": "$130"
          },
          {
            "key": "C",
            "text": "$180",
            "vietnamese": "$180"
          },
          {
            "key": "D",
            "text": "$85 GOONTOTHENEXTPAGE",
            "vietnamese": "$85 GONTOTHENEXTPAGE"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"$130\" ($130)."
      }
    ],
    "vocabulary": [
      {
        "word": "order",
        "meaning": "gọi món, đặt hàng",
        "partOfSpeech": "v"
      },
      {
        "word": "supplier",
        "meaning": "nhà cung cấp, nhà phân phối",
        "partOfSpeech": "n"
      },
      {
        "word": "recently",
        "meaning": "gần đây",
        "partOfSpeech": "adv"
      },
      {
        "word": "ship",
        "meaning": "vận chuyển hàng",
        "partOfSpeech": "v"
      }
    ],
    "graphicImage": "/images/intensive/test5_2023/q62_64.png"
  },
  {
    "id": "part3-65-67",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 65 - 67",
    "title": "Part 3 - Câu 65 - 67: Máy pha cà phê có vấn đề gì",
    "audioSrc": "/audio/test5_2023.mp3",
    "startTime": 1722.97,
    "endTime": 1803.54,
    "transcript": [
      {
        "id": "p3-65-1",
        "speaker": "Woman",
        "text": "A. I hear that we've received complaints about the display panel on the Handymax coffee maker we just introduced.",
        "vietnamese": "A. Tôi được biết chúng tôi đã nhận được khiếu nại về bảng hiển thị trên máy pha cà phê Handymax mà chúng tôi vừa giới thiệu."
      },
      {
        "id": "p3-65-2",
        "speaker": "Man",
        "text": "A. Have you looked into it? A. It's the warning light that lets people know that more water needs to be added.",
        "vietnamese": "A. Bạn đã xem xét nó chưa? A. Đó là đèn cảnh báo để mọi người biết cần bổ sung thêm nước."
      },
      {
        "id": "p3-65-3",
        "speaker": "Woman",
        "text": "A. On the Handymax, it's right next to the Keep Warmlight, and some customers become confused when using the machine.",
        "vietnamese": "A. Trên Handymax, nó nằm ngay cạnh Keep Warmlight và một số khách hàng cảm thấy bối rối khi sử dụng máy."
      },
      {
        "id": "p3-65-4",
        "speaker": "Man",
        "text": "A. The warning light was much bigger on previous models, which made it easier to see. Should we enlarge it? Would that solve the problem?",
        "vietnamese": "A. Đèn cảnh báo lớn hơn nhiều trên các mẫu trước đó, giúp dễ nhìn hơn. Chúng ta có nên phóng to nó không? Điều đó có giải quyết được vấn đề không?"
      },
      {
        "id": "p3-65-5",
        "speaker": "Woman",
        "text": "A. I think we should move the warning light to the right of the words add water. That could avoid the issue.",
        "vietnamese": "A. Tôi nghĩ chúng ta nên di chuyển đèn cảnh báo sang bên phải dòng chữ thêm nước. Điều đó có thể tránh được vấn đề."
      }
    ],
    "questions": [
      {
        "num": 65,
        "question": "What is the problem with the coffee maker?",
        "vietnameseQuestion": "Máy pha cà phê có vấn đề gì?",
        "options": [
          {
            "key": "A",
            "text": "It oftenneeds tobe refilled with water.",
            "vietnamese": "Nó thường cần được đổ đầy nước."
          },
          {
            "key": "B",
            "text": "It turns off unexpectedly.",
            "vietnamese": "Nó tắt đột ngột."
          },
          {
            "key": "C",
            "text": "Its display panel causes confusion.",
            "vietnamese": "Bảng hiển thị của nó gây nhầm lẫn."
          },
          {
            "key": "D",
            "text": "The lights are not bright enough.",
            "vietnamese": "Đèn không đủ sáng."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"Its display panel causes confusion.\" (Bảng hiển thị của nó gây nhầm lẫn.)."
      },
      {
        "num": 66,
        "question": "What was different about previous models?",
        "vietnameseQuestion": "Các mẫu trước đây có gì khác biệt?",
        "options": [
          {
            "key": "A",
            "text": "They had more lights.",
            "vietnamese": "Họ có nhiều đèn hơn."
          },
          {
            "key": "B",
            "text": "They had larger lights.",
            "vietnamese": "Họ có đèn lớn hơn."
          },
          {
            "key": "C",
            "text": "They had multicolor lights.",
            "vietnamese": "Họ có đèn nhiều màu."
          },
          {
            "key": "D",
            "text": "They had flashing lights.",
            "vietnamese": "Họ có đèn nhấp nháy."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"They had larger lights.\" (Họ có đèn lớn hơn.)."
      },
      {
        "num": 67,
        "question": "Look at the graphic. Which light does the man suggest moving?",
        "vietnameseQuestion": "Nhìn vào đồ họa. Người đàn ông đề nghị di chuyển đèn nào?",
        "options": [
          {
            "key": "A",
            "text": "Light 1",
            "vietnamese": "Ánh sáng 1"
          },
          {
            "key": "B",
            "text": "Light 2",
            "vietnamese": "Ánh sáng 2"
          },
          {
            "key": "C",
            "text": "Light 3",
            "vietnamese": "Ánh sáng 3"
          },
          {
            "key": "D",
            "text": "Light 4 84 Langenfeld Bakery, Inc. Multiphase Schedule Product: oatmeal raisin cookies Phase1 Final internal taste test March1 (corporate-level only) Phase 2 Shipping to local stores March2-4 Phase3F Freesampledistribution March5-6 and 10% discount Phase 4 Resumptionoffull-price|March7 sales",
            "vietnamese": "Light 4 84 Langenfeld Bakery, Inc. Lịch trình nhiều giai đoạn Sản phẩm: bánh quy nho khô bột yến mạch Giai đoạn 1 Thử nghiệm hương vị nội bộ cuối cùng Ngày 1 tháng 3 (chỉ ở cấp công ty) Giai đoạn 2 Vận chuyển đến các cửa hàng địa phương Ngày 2-4 Giai đoạn 3F Phân phối mẫu miễn phí Ngày 5-6 tháng 3 và giảm giá 10% Giai đoạn 4 Tiếp tục bán nguyên giá|Bán hàng ngày 7 tháng 3"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là (D): \"Light 4 84 Langenfeld Bakery, Inc. Multiphase Schedule Product: oatmeal raisin cookies Phase1 Final internal taste test March1 (corporate-level only) Phase 2 Shipping to local stores March2-4 Phase3F Freesampledistribution March5-6 and 10% discount Phase 4 Resumptionoffull-price|March7 sales\" (Light 4 84 Langenfeld Bakery, Inc. Lịch trình nhiều giai đoạn Sản phẩm: bánh quy nho khô bột yến mạch Giai đoạn 1 Thử nghiệm hương vị nội bộ cuối cùng Ngày 1 tháng 3 (chỉ ở cấp công ty) Giai đoạn 2 Vận chuyển đến các cửa hàng địa phương Ngày 2-4 Giai đoạn 3F Phân phối mẫu miễn phí Ngày 5-6 tháng 3 và giảm giá 10% Giai đoạn 4 Tiếp tục bán nguyên giá|Bán hàng ngày 7 tháng 3)."
      }
    ],
    "vocabulary": [
      {
        "word": "display",
        "meaning": "trưng bày",
        "partOfSpeech": "v"
      },
      {
        "word": "light",
        "meaning": "chiếu sáng, thắp sáng",
        "partOfSpeech": "n"
      },
      {
        "word": "water",
        "meaning": "tưới nước",
        "partOfSpeech": "v"
      },
      {
        "word": "keep",
        "meaning": "giữ lại",
        "partOfSpeech": "v"
      }
    ],
    "graphicImage": "/images/intensive/test5_2023/q65_67.png"
  },
  {
    "id": "part3-68-70",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 68 - 70",
    "title": "Part 3 - Câu 68 - 70: Người phụ nữ nói gì về khách hàng của tiệm bánh",
    "audioSrc": "/audio/test5_2023.mp3",
    "startTime": 1803.54,
    "endTime": 1895.35,
    "transcript": [
      {
        "id": "p3-68-1",
        "speaker": "Woman",
        "text": "A. Thanks for stopping by, Petra. Last week I got the schedule for the rollout of Langenfeld's new Oatmeal Raisin cookies.",
        "vietnamese": "A. Cảm ơn vì đã ghé qua, Petra. Tuần trước tôi đã nhận được lịch trình giới thiệu loại bánh quy nho khô yến mạch mới của Langenfeld."
      },
      {
        "id": "p3-68-2",
        "speaker": "Man",
        "text": "A. Oh, yes. It's about time. Customers have been complaining about how dry the current ones are.",
        "vietnamese": "A. Ồ, vâng. Đã đến lúc rồi. Khách hàng đã phàn nàn về độ khô của những sản phẩm hiện tại."
      },
      {
        "id": "p3-68-3",
        "speaker": "Woman",
        "text": "A. Well, I just got an email update from headquarters. They want to extend the window of time the product will be discounted.",
        "vietnamese": "A. Tôi vừa nhận được email cập nhật từ trụ sở chính. Họ muốn kéo dài thời gian sản phẩm sẽ được giảm giá."
      },
      {
        "id": "p3-68-4",
        "speaker": "Man",
        "text": "We had originally planned to offer the discount only two days, March 5th and 6th, but now they'd like to extend that window by two more days.",
        "vietnamese": "Ban đầu chúng tôi dự định chỉ giảm giá trong hai ngày, ngày 5 và ngày 6 tháng 3, nhưng bây giờ họ muốn kéo dài thời gian đó thêm hai ngày nữa."
      },
      {
        "id": "p3-68-5",
        "speaker": "Woman",
        "text": "A. Okay. That should help win back some customers. We should also post about the change on our social media accounts.",
        "vietnamese": "A. Được rồi. Điều đó sẽ giúp giành lại một số khách hàng. Chúng ta cũng nên đăng về sự thay đổi trên các tài khoản mạng xã hội của mình."
      }
    ],
    "questions": [
      {
        "num": 68,
        "question": "What does the woman say about the bakery's customers?",
        "vietnameseQuestion": "Người phụ nữ nói gì về khách hàng của tiệm bánh?",
        "options": [
          {
            "key": "A",
            "text": "They are dissatisfied with the quality of a product.",
            "vietnamese": "Họ không hài lòng với chất lượng của sản phẩm."
          },
          {
            "key": "B",
            "text": "They think the bakery's products are overpriced.",
            "vietnamese": "Họ cho rằng sản phẩm của tiệm bánh được định giá quá cao."
          },
          {
            "key": "C",
            "text": "They are now aware of the bakery's social media accounts.",
            "vietnamese": "Bây giờ họ đã biết về các tài khoản mạng xã hội của tiệm bánh."
          },
          {
            "key": "D",
            "text": "They sometimes arrive before the bakery opens.",
            "vietnamese": "Đôi khi họ đến trước khi tiệm bánh mở cửa."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là (A): \"They are dissatisfied with the quality of a product.\" (Họ không hài lòng với chất lượng của sản phẩm.)."
      },
      {
        "num": 69,
        "question": "Look at the graphic. Which phase is being extended?",
        "vietnameseQuestion": "Nhìn vào đồ họa. Giai đoạn nào đang được kéo dài?",
        "options": [
          {
            "key": "A",
            "text": "Phase 1",
            "vietnamese": "Giai đoạn 1"
          },
          {
            "key": "B",
            "text": "Phase 2",
            "vietnamese": "Giai đoạn 2"
          },
          {
            "key": "C",
            "text": "Phase 3",
            "vietnamese": "Giai đoạn 3"
          },
          {
            "key": "D",
            "text": "Phase 4",
            "vietnamese": "Giai đoạn 4"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"Phase 3\" (Giai đoạn 3)."
      },
      {
        "num": 70,
        "question": "What does the woman say the bakery should do?",
        "vietnameseQuestion": "Người phụ nữ nói tiệm bánh nên làm gì?",
        "options": [
          {
            "key": "A",
            "text": "Ship a product early",
            "vietnamese": "Gửi sản phẩm sớm"
          },
          {
            "key": "B",
            "text": "Sell a wider range of products",
            "vietnamese": "Bán nhiều loại sản phẩm hơn"
          },
          {
            "key": "C",
            "text": "Hold a contest",
            "vietnamese": "Tổ chức một cuộc thi"
          },
          {
            "key": "D",
            "text": "Advertise a discount",
            "vietnamese": "Quảng cáo giảm giá"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là (D): \"Advertise a discount\" (Quảng cáo giảm giá)."
      }
    ],
    "vocabulary": [
      {
        "word": "schedule",
        "meaning": "lên lịch, sắp xếp thời gian",
        "partOfSpeech": "v"
      },
      {
        "word": "update",
        "meaning": "cập nhật",
        "partOfSpeech": "v"
      },
      {
        "word": "headquarters",
        "meaning": "trụ sở chính",
        "partOfSpeech": "n"
      },
      {
        "word": "discount",
        "meaning": "sự giảm giá, chiết khấu",
        "partOfSpeech": "n"
      }
    ],
    "graphicImage": "/images/intensive/test5_2023/q68_70.png"
  },
  {
    "id": "part4-71-73",
    "part": 4,
    "partTitle": "Part 4: Bài nói chuyện",
    "questionRange": "Câu 71 - 73",
    "title": "Part 4 - Câu 71 - 73: Người phát biểu là ai",
    "audioSrc": "/audio/test5_2023.mp3",
    "startTime": 1931.03,
    "endTime": 1991.74,
    "transcript": [
      {
        "id": "p4-71-1",
        "speaker": "Speaker",
        "text": "A. Hi, Cara. This is Joe. I found a very nice space for your restaurant.",
        "vietnamese": "A. Chào Cara. Đây là Joe. Tôi đã tìm được một không gian rất đẹp cho nhà hàng của bạn."
      },
      {
        "id": "p4-71-2",
        "speaker": "Speaker",
        "text": "It has everything you're looking for, including an outdoor terrace.",
        "vietnamese": "Nó có mọi thứ bạn đang tìm kiếm, bao gồm cả sân hiên ngoài trời."
      },
      {
        "id": "p4-71-3",
        "speaker": "Speaker",
        "text": "It's a bit over your budget, but don't worry. The owners like the idea that you're such a successful chef,",
        "vietnamese": "Nó hơi vượt quá ngân sách của bạn, nhưng đừng lo lắng. Những người chủ thích ý tưởng rằng bạn là một đầu bếp thành công,"
      },
      {
        "id": "p4-71-4",
        "speaker": "Speaker",
        "text": "so they are willing to sit down and come to a compromise on the rent.",
        "vietnamese": "vì vậy họ sẵn sàng ngồi xuống và đi đến thỏa thuận về tiền thuê nhà."
      },
      {
        "id": "p4-71-5",
        "speaker": "Speaker",
        "text": "This place is not downtown, but it's located in the neighborhood of Peckham, which as you know is a busy vibrant area.",
        "vietnamese": "Nơi này không nằm ở trung tâm thành phố nhưng nằm ở khu vực lân cận Peckham, nơi mà như bạn biết là một khu vực sầm uất, sôi động."
      }
    ],
    "questions": [
      {
        "num": 71,
        "question": "Who is the speaker?",
        "vietnameseQuestion": "Người phát biểu là ai?",
        "options": [
          {
            "key": "A",
            "text": "Aninvestmentbanker",
            "vietnamese": "nhân viên ngân hàng đầu tư"
          },
          {
            "key": "B",
            "text": "An attorney",
            "vietnamese": "Một luật sư"
          },
          {
            "key": "C",
            "text": "A real estate agent",
            "vietnamese": "Một đại lý bất động sản"
          },
          {
            "key": "D",
            "text": "An architect",
            "vietnamese": "Một kiến trúc sư"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"A real estate agent\" (Một đại lý bất động sản)."
      },
      {
        "num": 72,
        "question": "What does the speaker reassure the listener about?",
        "vietnameseQuestion": "Người nói trấn an người nghe về điều gì?",
        "options": [
          {
            "key": "A",
            "text": "A price is negotiable.",
            "vietnamese": "Một mức giá có thể thương lượng."
          },
          {
            "key": "B",
            "text": "Some supplies have arrived.",
            "vietnamese": "Một số hàng đã về."
          },
          {
            "key": "C",
            "text": "A job applicant is qualified.",
            "vietnamese": "Một người xin việc có đủ điều kiện."
          },
          {
            "key": "D",
            "text": "Clients are satisfied.",
            "vietnamese": "Khách hàng hài lòng."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là (A): \"A price is negotiable.\" (Một mức giá có thể thương lượng.)."
      },
      {
        "num": 73,
        "question": "What is an advantage of Peckham?",
        "vietnameseQuestion": "Ưu điểm của Peckham là gì?",
        "options": [
          {
            "key": "A",
            "text": "It has beautiful scenery.",
            "vietnamese": "Nó có phong cảnh đẹp."
          },
          {
            "key": "B",
            "text": "It has several parks.",
            "vietnamese": "Nó có một số công viên."
          },
          {
            "key": "C",
            "text": "It is a safe neighborhood.",
            "vietnamese": "Đó là một khu phố an toàn."
          },
          {
            "key": "D",
            "text": "It is popular.",
            "vietnamese": "Nó rất phổ biến."
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là (D): \"It is popular.\" (Nó rất phổ biến.)."
      }
    ],
    "vocabulary": [
      {
        "word": "found",
        "meaning": "thành lập, sáng lập",
        "partOfSpeech": "v"
      },
      {
        "word": "budget",
        "meaning": "ngân sách",
        "partOfSpeech": "n"
      },
      {
        "word": "downtown",
        "meaning": "khu trung tâm thương mại thành phố",
        "partOfSpeech": "n/adv"
      }
    ]
  },
  {
    "id": "part4-74-76",
    "part": 4,
    "partTitle": "Part 4: Bài nói chuyện",
    "questionRange": "Câu 74 - 76",
    "title": "Part 4 - Câu 74 - 76: Cuộc nói chuyện có nhiều khả năng diễn ra ở đâu",
    "audioSrc": "/audio/test5_2023.mp3",
    "startTime": 1991.74,
    "endTime": 2078.35,
    "transcript": [
      {
        "id": "p4-74-1",
        "speaker": "Speaker",
        "text": "Good morning, new patrons fitness staff. Having you working on a rotating basis at the front desk in the mornings will be really helpful.",
        "vietnamese": "Chào buổi sáng, nhân viên thể dục khách quen mới. Việc bạn làm việc luân phiên ở quầy lễ tân vào buổi sáng sẽ thực sự hữu ích."
      },
      {
        "id": "p4-74-2",
        "speaker": "Speaker",
        "text": "Plan to arrive at 5 a.m. to turn on the lights and the exercise machines.",
        "vietnamese": "Lên kế hoạch đến lúc 5 giờ sáng để bật đèn và máy tập thể dục."
      },
      {
        "id": "p4-74-3",
        "speaker": "Speaker",
        "text": "Oh, be sure to turn on the steam rooms in the men's and women's locker rooms.",
        "vietnamese": "Ồ, nhớ bật phòng xông hơi trong phòng thay đồ nam và nữ nhé."
      },
      {
        "id": "p4-74-4",
        "speaker": "Speaker",
        "text": "The steam rooms can malfunction as they warm up and members have been complaining.",
        "vietnamese": "Phòng xông hơi ướt có thể gặp trục trặc khi khởi động và các thành viên phàn nàn."
      },
      {
        "id": "p4-74-5",
        "speaker": "Speaker",
        "text": "So, I always double-check that the steam is working okay, just before we open.",
        "vietnamese": "Vì vậy, tôi luôn kiểm tra kỹ xem hơi nước có hoạt động tốt không, ngay trước khi chúng tôi mở."
      },
      {
        "id": "p4-74-6",
        "speaker": "Speaker",
        "text": "Please unlock the entrance at about 525 and be ready to scan IDs as the guests come in.",
        "vietnamese": "Vui lòng mở khóa lối vào vào khoảng 525 và sẵn sàng quét ID khi khách bước vào."
      }
    ],
    "questions": [
      {
        "num": 74,
        "question": "Wheredoesthetalkmostlikelytakeplace?",
        "vietnameseQuestion": "Cuộc nói chuyện có nhiều khả năng diễn ra ở đâu?",
        "options": [
          {
            "key": "A",
            "text": "At a physical therapy office",
            "vietnamese": "Tại phòng vật lý trị liệu"
          },
          {
            "key": "B",
            "text": "At a primary school",
            "vietnamese": "Tại một trường tiểu học"
          },
          {
            "key": "C",
            "text": "At a gym",
            "vietnamese": "Tại một phòng tập thể dục"
          },
          {
            "key": "D",
            "text": "At a hospital",
            "vietnamese": "Tại một bệnh viện"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"At a gym\" (Tại một phòng tập thể dục)."
      },
      {
        "num": 75,
        "question": "What does the speaker imply when she says,\"I always double-check that the steam is working OK\"?",
        "vietnameseQuestion": "Người nói ám chỉ điều gì khi nói, \"Tôi luôn kiểm tra kỹ xem hơi nước có hoạt động tốt không\"?",
        "options": [
          {
            "key": "A",
            "text": "She deserves a promotion.",
            "vietnamese": "Cô ấy xứng đáng được thăng chức."
          },
          {
            "key": "B",
            "text": "She does not enjoy doing extra work.",
            "vietnamese": "Cô ấy không thích làm thêm công việc."
          },
          {
            "key": "C",
            "text": "Some complaints are unreasonable.",
            "vietnamese": "Một số khiếu nại là không hợp lý."
          },
          {
            "key": "D",
            "text": "A task is important.",
            "vietnamese": "Một nhiệm vụ là quan trọng."
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là (D): \"A task is important.\" (Một nhiệm vụ là quan trọng.)."
      },
      {
        "num": 76,
        "question": "What will the listeners do after opening the facility?",
        "vietnameseQuestion": "Thính giả sẽ làm gì sau khi mở cơ sở?",
        "options": [
          {
            "key": "A",
            "text": "Rent lockers to guests",
            "vietnamese": "Cho khách thuê tủ đựng đồ"
          },
          {
            "key": "B",
            "text": "Checkmembershipidentificationcards",
            "vietnamese": "Kiểm tra thẻ nhận dạng thành viên"
          },
          {
            "key": "C",
            "text": "Fold towels",
            "vietnamese": "Gấp khăn"
          },
          {
            "key": "D",
            "text": "Answer phones",
            "vietnamese": "Trả lời điện thoại"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"Checkmembershipidentificationcards\" (Kiểm tra thẻ nhận dạng thành viên)."
      }
    ],
    "vocabulary": [
      {
        "word": "staff",
        "meaning": "bố trí nhân sự làm việc",
        "partOfSpeech": "v"
      },
      {
        "word": "helpful",
        "meaning": "hữu ích, có ích",
        "partOfSpeech": "adj"
      },
      {
        "word": "arrive",
        "meaning": "đến nơi",
        "partOfSpeech": "v"
      },
      {
        "word": "locker",
        "meaning": "tủ đồ có khóa cá nhân",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part4-77-79",
    "part": 4,
    "partTitle": "Part 4: Bài nói chuyện",
    "questionRange": "Câu 77 - 79",
    "title": "Part 4 - Câu 77 - 79: Chủ đề của buổi phát sóng hôm nay là gì",
    "audioSrc": "/audio/test5_2023.mp3",
    "startTime": 2078.35,
    "endTime": 2145.77,
    "transcript": [
      {
        "id": "p4-77-1",
        "speaker": "Speaker",
        "text": "Welcome back. I'm Hong Wei Xin. Back with you live for today's airing of Science Today.",
        "vietnamese": "Chào mừng trở lại. Tôi là Hồng Vệ Tâm. Quay lại với bạn trực tiếp cho buổi phát sóng ngày hôm nay của Science Today."
      },
      {
        "id": "p4-77-2",
        "speaker": "Speaker",
        "text": "From biology to physics, Science Today is your source of accurate science news.",
        "vietnamese": "Từ sinh học đến vật lý, Science Today là nguồn tin tức khoa học chính xác cho bạn."
      },
      {
        "id": "p4-77-3",
        "speaker": "Speaker",
        "text": "We've been talking about the meteor shower that will be visible in the night sky on Saturday and Sunday.",
        "vietnamese": "Chúng ta đang nói về trận mưa sao băng sẽ xuất hiện trên bầu trời đêm vào Thứ Bảy và Chủ Nhật."
      },
      {
        "id": "p4-77-4",
        "speaker": "Speaker",
        "text": "It's going to be a big event and I hope you have the chance to see it.",
        "vietnamese": "Đây sẽ là một sự kiện lớn và tôi hy vọng bạn có cơ hội xem nó."
      },
      {
        "id": "p4-77-5",
        "speaker": "Speaker",
        "text": "I'm going to open the line to call us now. If you have a question about astronomy and this weekend's event,",
        "vietnamese": "Bây giờ tôi sẽ mở đường dây để gọi cho chúng tôi. Nếu bạn có câu hỏi về thiên văn học và sự kiện cuối tuần này,"
      },
      {
        "id": "p4-77-6",
        "speaker": "Speaker",
        "text": "and I'm going to restrict questions to those topics only, the number is 555-0156.",
        "vietnamese": "và tôi sẽ chỉ giới hạn các câu hỏi trong những chủ đề đó, số điện thoại là 555-0156."
      }
    ],
    "questions": [
      {
        "num": 77,
        "question": "What is the topic of today's broadcast?",
        "vietnameseQuestion": "Chủ đề của buổi phát sóng hôm nay là gì?",
        "options": [
          {
            "key": "A",
            "text": "Weather",
            "vietnamese": "Thời tiết"
          },
          {
            "key": "B",
            "text": "Astronomy",
            "vietnamese": "Thiên văn học"
          },
          {
            "key": "C",
            "text": "Gardening",
            "vietnamese": "Làm vườn"
          },
          {
            "key": "D",
            "text": "Sports",
            "vietnamese": "Thể thao"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"Astronomy\" (Thiên văn học)."
      },
      {
        "num": 78,
        "question": "What can the listenersdothisweekend?",
        "vietnameseQuestion": "Người nghe có thể làm gì vào cuối tuần này?",
        "options": [
          {
            "key": "A",
            "text": "Learn to improve their vision",
            "vietnamese": "Học cách cải thiện tầm nhìn của họ"
          },
          {
            "key": "B",
            "text": "Watch ameteor shower",
            "vietnamese": "Xem mưa sao băng"
          },
          {
            "key": "C",
            "text": "Go to a musical event",
            "vietnamese": "Đi đến một sự kiện âm nhạc"
          },
          {
            "key": "D",
            "text": "Listen to a special program TEST5",
            "vietnamese": "Nghe chương trình đặc biệt TEST5"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"Watch ameteor shower\" (Xem mưa sao băng)."
      },
      {
        "num": 79,
        "question": "What does the speaker say some listeners can iop",
        "vietnameseQuestion": "Người nói nói gì một số người nghe có thể iop",
        "options": [
          {
            "key": "A",
            "text": "Win a prize",
            "vietnamese": "Giành được giải thưởng"
          },
          {
            "key": "B",
            "text": "Request advice",
            "vietnamese": "Yêu cầu tư vấn"
          },
          {
            "key": "C",
            "text": "Ask questions",
            "vietnamese": "Đặt câu hỏi"
          },
          {
            "key": "D",
            "text": "Call again later",
            "vietnamese": "Gọi lại sau"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"Ask questions\" (Đặt câu hỏi)."
      }
    ],
    "vocabulary": [
      {
        "word": "open",
        "meaning": "mở cửa đón khách",
        "partOfSpeech": "v"
      },
      {
        "word": "line",
        "meaning": "xếp thành hàng dọc theo",
        "partOfSpeech": "v"
      }
    ]
  },
  {
    "id": "part4-80-82",
    "part": 4,
    "partTitle": "Part 4: Bài nói chuyện",
    "questionRange": "Câu 80 - 82",
    "title": "Part 4 - Câu 80 - 82: Mục đích của bữa trưa là gì",
    "audioSrc": "/audio/test5_2023.mp3",
    "startTime": 2145.77,
    "endTime": 2255.68,
    "transcript": [
      {
        "id": "p4-80-1",
        "speaker": "Speaker",
        "text": "Good afternoon everyone and welcome to the panics corporations 10-year anniversary luncheon.",
        "vietnamese": "Xin chào mọi người và chào mừng đến với bữa trưa kỷ niệm 10 năm thành lập tập đoàn Panic."
      },
      {
        "id": "p4-80-2",
        "speaker": "Speaker",
        "text": "We have had so many achievements. Just this past year we sold our 5 millionth unit.",
        "vietnamese": "Chúng ta đã có rất nhiều thành tựu. Chỉ trong năm vừa qua chúng tôi đã bán được chiếc máy thứ 5 triệu."
      },
      {
        "id": "p4-80-3",
        "speaker": "Speaker",
        "text": "That makes 5 million cars on the road today equipped with panics radios.",
        "vietnamese": "Điều đó khiến 5 triệu ô tô trên đường ngày nay được trang bị bộ đàm báo hoảng loạn."
      },
      {
        "id": "p4-80-4",
        "speaker": "Speaker",
        "text": "As you might know, our president, Mr. Stromeyer, has been in Japan all this month negotiating with Navasota Motors.",
        "vietnamese": "Như bạn có thể biết, chủ tịch của chúng tôi, ông Stromeyer, đã đến Nhật Bản suốt tháng này để đàm phán với Navasota Motors."
      },
      {
        "id": "p4-80-5",
        "speaker": "Speaker",
        "text": "He couldn't be here today, but he sent a video greeting to thank you for all your hard work.",
        "vietnamese": "Anh ấy không thể có mặt ở đây ngày hôm nay nhưng anh ấy đã gửi một video chúc mừng để cảm ơn vì đã làm việc chăm chỉ."
      },
      {
        "id": "p4-80-6",
        "speaker": "Speaker",
        "text": "We have 3 monitors here in the front of the room. Let's get started.",
        "vietnamese": "Chúng tôi có 3 màn hình ở phía trước phòng. Hãy bắt đầu."
      }
    ],
    "questions": [
      {
        "num": 80,
        "question": "What is the purpose of the luncheon?",
        "vietnameseQuestion": "Mục đích của bữa trưa là gì?",
        "options": [
          {
            "key": "A",
            "text": "To announce a merger",
            "vietnamese": "Công bố sáp nhập"
          },
          {
            "key": "B",
            "text": "To introduce a new company president",
            "vietnamese": "Để giới thiệu chủ tịch công ty mới"
          },
          {
            "key": "C",
            "text": "To launch a new product",
            "vietnamese": "Để ra mắt một sản phẩm mới"
          },
          {
            "key": "D",
            "text": "To celebrate a company's anniversary",
            "vietnamese": "Để kỷ niệm ngày thành lập công ty"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là (D): \"To celebrate a company's anniversary\" (Để kỷ niệm ngày thành lập công ty)."
      },
      {
        "num": 81,
        "question": "WhatdoesthespeakersayaboutthePanecks Corporation?",
        "vietnameseQuestion": "Diễn giả nói gì về Tập đoàn Panecks?",
        "options": [
          {
            "key": "A",
            "text": "It opened an office in Japan.",
            "vietnamese": "Nó đã mở một văn phòng tại Nhật Bản."
          },
          {
            "key": "B",
            "text": "It designed a new type of car.",
            "vietnamese": "Nó thiết kế một loại xe hơi mới."
          },
          {
            "key": "C",
            "text": "It sold a large number of car radios.",
            "vietnamese": "Nó đã bán được một số lượng lớn radio xe hơi."
          },
          {
            "key": "D",
            "text": "It made a video of the company's history.",
            "vietnamese": "Nó đã làm một video về lịch sử của công ty."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"It sold a large number of car radios.\" (Nó đã bán được một số lượng lớn radio xe hơi.)."
      },
      {
        "num": 82,
        "question": "Why does the speaker say,\"We have three monitors here in the front of the room\"?",
        "vietnameseQuestion": "Tại sao người nói lại nói: \"Chúng ta có ba màn hình ở phía trước phòng\"?",
        "options": [
          {
            "key": "A",
            "text": "To introduce new staff",
            "vietnamese": "Để giới thiệu nhân viên mới"
          },
          {
            "key": "B",
            "text": "To remind the listeners to be careful",
            "vietnamese": "Để nhắc nhở người nghe hãy cẩn thận"
          },
          {
            "key": "C",
            "text": "To emphasize technology improvements",
            "vietnamese": "Để nhấn mạnh cải tiến công nghệ"
          },
          {
            "key": "D",
            "text": "Todirect the listeners towatcha video GOONTOTHENEXTPAGE TEST585",
            "vietnamese": "Hướng người nghe xem video GONTOTHENEXTPAGE TEST585"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là (D): \"Todirect the listeners towatcha video GOONTOTHENEXTPAGE TEST585\" (Hướng người nghe xem video GONTOTHENEXTPAGE TEST585)."
      }
    ],
    "vocabulary": [
      {
        "word": "anniversary",
        "meaning": "lễ kỷ niệm",
        "partOfSpeech": "n"
      },
      {
        "word": "unit",
        "meaning": "căn hộ",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part4-83-85",
    "part": 4,
    "partTitle": "Part 4: Bài nói chuyện",
    "questionRange": "Câu 83 - 85",
    "title": "Part 4 - Câu 83 - 85: Bây giờ cái gì nhanh hơn",
    "audioSrc": "/audio/test5_2023.mp3",
    "startTime": 2255.68,
    "endTime": 2323.19,
    "transcript": [
      {
        "id": "p4-83-1",
        "speaker": "Speaker",
        "text": "Thanks for attending this all staff meeting today.",
        "vietnamese": "Cảm ơn đã tham dự cuộc họp tất cả nhân viên ngày hôm nay."
      },
      {
        "id": "p4-83-2",
        "speaker": "Speaker",
        "text": "First on the agenda is our new restaurant reservation app, Faster Now.",
        "vietnamese": "Đầu tiên trong chương trình nghị sự là ứng dụng đặt chỗ nhà hàng mới của chúng tôi, Faster Now."
      },
      {
        "id": "p4-83-3",
        "speaker": "Speaker",
        "text": "We have competition from other technology companies, but our app is the only one that specializes in business lunchions.",
        "vietnamese": "Chúng tôi có sự cạnh tranh từ các công ty công nghệ khác, nhưng ứng dụng của chúng tôi là ứng dụng duy nhất chuyên về bữa trưa dành cho doanh nhân."
      },
      {
        "id": "p4-83-4",
        "speaker": "Speaker",
        "text": "You'll see that the app will allow the user not only to reserve a table, but also to make menu choices in advance.",
        "vietnamese": "Bạn sẽ thấy rằng ứng dụng sẽ cho phép người dùng không chỉ đặt bàn mà còn có thể lựa chọn trước thực đơn."
      },
      {
        "id": "p4-83-5",
        "speaker": "Speaker",
        "text": "That way when people get to the restaurant, they won't have to wait long for their meal.",
        "vietnamese": "Bằng cách đó, khi mọi người đến nhà hàng, họ sẽ không phải đợi lâu để có bữa ăn."
      },
      {
        "id": "p4-83-6",
        "speaker": "Speaker",
        "text": "Here's Johanna, our lead IT researcher who will describe the app specifications and show us how it works.",
        "vietnamese": "Đây là Johanna, nhà nghiên cứu CNTT chính của chúng tôi, người sẽ mô tả các thông số kỹ thuật của ứng dụng và chỉ cho chúng tôi cách thức hoạt động của ứng dụng."
      }
    ],
    "questions": [
      {
        "num": 83,
        "question": "WhatisFasterNow?",
        "vietnameseQuestion": "Bây giờ cái gì nhanh hơn?",
        "options": [
          {
            "key": "A",
            "text": "Job-recruiting software",
            "vietnamese": "Phần mềm tuyển dụng"
          },
          {
            "key": "B",
            "text": "An online Web site builder",
            "vietnamese": "Trình xây dựng trang web trực tuyến"
          },
          {
            "key": "C",
            "text": "A self-paced training program",
            "vietnamese": "Một chương trình đào tạo tự điều chỉnh"
          },
          {
            "key": "D",
            "text": "A reservation appfor restaurants",
            "vietnamese": "Ứng dụng đặt chỗ cho nhà hàng"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là (D): \"A reservation appfor restaurants\" (Ứng dụng đặt chỗ cho nhà hàng)."
      },
      {
        "num": 84,
        "question": "What type of business do the listeners work for?",
        "vietnameseQuestion": "Người nghe làm việc cho loại hình kinh doanh nào?",
        "options": [
          {
            "key": "A",
            "text": "Acatering service",
            "vietnamese": "Dịch vụ ăn uống"
          },
          {
            "key": "B",
            "text": "Atechnology company",
            "vietnamese": "Công ty công nghệ Atech"
          },
          {
            "key": "C",
            "text": "A law firm",
            "vietnamese": "Một công ty luật"
          },
          {
            "key": "D",
            "text": "Asupermarket",
            "vietnamese": "siêu thị"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"Atechnology company\" (Công ty công nghệ Atech)."
      },
      {
        "num": 85,
        "question": "What will happen next in the meeting?",
        "vietnameseQuestion": "Điều gì sẽ xảy ra tiếp theo trong cuộc họp?",
        "options": [
          {
            "key": "A",
            "text": "Aproduct demonstration",
            "vietnamese": "Trình diễn sản phẩm"
          },
          {
            "key": "B",
            "text": "A brainstorming session",
            "vietnamese": "Một buổi động não"
          },
          {
            "key": "C",
            "text": "Ajob interview",
            "vietnamese": "Phỏng vấn việc làm"
          },
          {
            "key": "D",
            "text": "A client introduction",
            "vietnamese": "Giới thiệu khách hàng"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là (A): \"Aproduct demonstration\" (Trình diễn sản phẩm)."
      }
    ],
    "vocabulary": [
      {
        "word": "staff",
        "meaning": "bố trí nhân sự làm việc",
        "partOfSpeech": "v"
      },
      {
        "word": "agenda",
        "meaning": "chương trình nghị sự, nội dung họp",
        "partOfSpeech": "n"
      },
      {
        "word": "reservation",
        "meaning": "sự đặt chỗ, đặt phòng trước",
        "partOfSpeech": "n"
      },
      {
        "word": "reserve",
        "meaning": "đặt trước, giữ chỗ",
        "partOfSpeech": "v"
      }
    ]
  },
  {
    "id": "part4-86-88",
    "part": 4,
    "partTitle": "Part 4: Bài nói chuyện",
    "questionRange": "Câu 86 - 88",
    "title": "Part 4 - Câu 86 - 88: Người nói đang thảo luận về dự án gì",
    "audioSrc": "/audio/test5_2023.mp3",
    "startTime": 2323.19,
    "endTime": 2407.97,
    "transcript": [
      {
        "id": "p4-86-1",
        "speaker": "Speaker",
        "text": "I called this meeting because next week this team is scheduled to begin installing windows in the new building on Bellevue Avenue.",
        "vietnamese": "Tôi triệu tập cuộc họp này vì tuần tới nhóm này dự kiến sẽ bắt đầu lắp đặt các cửa sổ trong tòa nhà mới trên Đại lộ Bellevue."
      },
      {
        "id": "p4-86-2",
        "speaker": "Speaker",
        "text": "Originally you were going to install the M-Fit on all floors. Our supplier just raised the price on those frames so we had to change them.",
        "vietnamese": "Ban đầu bạn định lắp đặt M-Fit trên tất cả các tầng. Nhà cung cấp của chúng tôi vừa tăng giá những khung đó nên chúng tôi phải thay đổi chúng."
      },
      {
        "id": "p4-86-3",
        "speaker": "Speaker",
        "text": "The new type, the M25, has the same dimensions but it's installed differently.",
        "vietnamese": "Loại mới, M25, có cùng kích thước nhưng được lắp đặt khác nhau."
      },
      {
        "id": "p4-86-4",
        "speaker": "Speaker",
        "text": "I'll send a link to the supplier's website where you're going to sign up to watch a video demonstration on how to install this model.",
        "vietnamese": "Tôi sẽ gửi liên kết đến trang web của nhà cung cấp nơi bạn sẽ đăng ký để xem video hướng dẫn cách lắp đặt mô hình này."
      },
      {
        "id": "p4-86-5",
        "speaker": "Speaker",
        "text": "I know this is a last minute request. Still this way we'll stay on budget.",
        "vietnamese": "Tôi biết đây là yêu cầu vào phút cuối. Vẫn theo cách này, chúng tôi sẽ duy trì ngân sách."
      }
    ],
    "questions": [
      {
        "num": 86,
        "question": "What project is the speaker discussing?",
        "vietnameseQuestion": "Người nói đang thảo luận về dự án gì?",
        "options": [
          {
            "key": "A",
            "text": "The grand opening of a shopping center",
            "vietnamese": "Lễ khai trương trung tâm thương mại"
          },
          {
            "key": "B",
            "text": "The maintenance of a city park",
            "vietnamese": "Bảo trì công viên thành phố"
          },
          {
            "key": "C",
            "text": "The repair of a highway",
            "vietnamese": "Sửa chữa đường cao tốc"
          },
          {
            "key": "D",
            "text": "The construction of a building",
            "vietnamese": "Việc xây dựng một tòa nhà"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là (D): \"The construction of a building\" (Việc xây dựng một tòa nhà)."
      },
      {
        "num": 87,
        "question": "What problemdoes the speaker mention?",
        "vietnameseQuestion": "Người nói đề cập đến vấn đề gì?",
        "options": [
          {
            "key": "A",
            "text": "Some heavy machinery is broken.",
            "vietnamese": "Một số máy móc hạng nặng bị hỏng."
          },
          {
            "key": "B",
            "text": "Aprice has changed.",
            "vietnamese": "Giá đã thay đổi."
          },
          {
            "key": "C",
            "text": "There isa laborshortage.",
            "vietnamese": "Đang thiếu lao động."
          },
          {
            "key": "D",
            "text": "Some supplies are late.",
            "vietnamese": "Một số nguồn cung cấp bị trễ."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"Aprice has changed.\" (Giá đã thay đổi.)."
      },
      {
        "num": 88,
        "question": "Why does the speaker say,\"Iknow this is a last-minute request\"?",
        "vietnameseQuestion": "Tại sao người nói nói: \"Tôi biết đây là yêu cầu vào phút cuối\"?",
        "options": [
          {
            "key": "A",
            "text": "To refuse an upgrade deal",
            "vietnamese": "Để từ chối một thỏa thuận nâng cấp"
          },
          {
            "key": "B",
            "text": "To apologize for an inconvenience",
            "vietnamese": "Để xin lỗi vì sự bất tiện"
          },
          {
            "key": "C",
            "text": "To cancel a merchandise order",
            "vietnamese": "Để hủy một đơn đặt hàng"
          },
          {
            "key": "D",
            "text": "To express her surprise 86",
            "vietnamese": "Để bày tỏ sự ngạc nhiên của mình 86"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"To apologize for an inconvenience\" (Để xin lỗi vì sự bất tiện)."
      }
    ],
    "vocabulary": [
      {
        "word": "scheduled",
        "meaning": "được lên lịch trình",
        "partOfSpeech": "adj"
      },
      {
        "word": "avenue",
        "meaning": "đại lộ",
        "partOfSpeech": "n"
      },
      {
        "word": "install",
        "meaning": "cài đặt",
        "partOfSpeech": "v"
      },
      {
        "word": "fit",
        "meaning": "vừa vặn, chứa đủ",
        "partOfSpeech": "v"
      }
    ]
  },
  {
    "id": "part4-89-91",
    "part": 4,
    "partTitle": "Part 4: Bài nói chuyện",
    "questionRange": "Câu 89 - 91",
    "title": "Part 4 - Câu 89 - 91: Theo người nói, điều gì sẽ xảy ra vào tuần tới",
    "audioSrc": "/audio/test5_2023.mp3",
    "startTime": 2407.97,
    "endTime": 2488.65,
    "transcript": [
      {
        "id": "p4-89-1",
        "speaker": "Speaker",
        "text": "Thank you for calling Forest Apartments.",
        "vietnamese": "Cảm ơn bạn đã gọi đến Căn hộ Forest."
      },
      {
        "id": "p4-89-2",
        "speaker": "Speaker",
        "text": "Press 1 to speak to our onsite manager. All residents should be aware that next week we will start updating the laundry facilities in each of our buildings.",
        "vietnamese": "Nhấn phím 1 để nói chuyện với người quản lý tại chỗ của chúng tôi. Tất cả cư dân nên biết rằng tuần tới chúng tôi sẽ bắt đầu cập nhật tiện nghi giặt là trong mỗi tòa nhà của mình."
      },
      {
        "id": "p4-89-3",
        "speaker": "Speaker",
        "text": "While the work is going on tenants will not be able to access the laundry facilities in their building.",
        "vietnamese": "Trong khi công việc đang diễn ra, người thuê nhà sẽ không thể sử dụng tiện nghi giặt là trong tòa nhà của họ."
      },
      {
        "id": "p4-89-4",
        "speaker": "Speaker",
        "text": "The maple building will be first. Tenants of the maple building may use the laundry room in any other building while their facilities are being renovated.",
        "vietnamese": "Tòa nhà Maple sẽ là tòa nhà đầu tiên. Người thuê tòa nhà Maple có thể sử dụng phòng giặt ở bất kỳ tòa nhà nào khác trong khi cơ sở vật chất của họ đang được cải tạo."
      },
      {
        "id": "p4-89-5",
        "speaker": "Speaker",
        "text": "Police note that new doors and locks will also be installed so all tenants will need a new key. Please stop at the main office to pick that up.",
        "vietnamese": "Cảnh sát lưu ý rằng cửa và ổ khóa mới cũng sẽ được lắp đặt nên tất cả người thuê nhà sẽ cần chìa khóa mới. Hãy dừng lại ở văn phòng chính để lấy nó."
      }
    ],
    "questions": [
      {
        "num": 89,
        "question": "According to the speaker, what will happen next week?",
        "vietnameseQuestion": "Theo người nói, điều gì sẽ xảy ra vào tuần tới?",
        "options": [
          {
            "key": "A",
            "text": "Some laundry rooms will be updated.",
            "vietnamese": "Một số phòng giặt sẽ được cập nhật."
          },
          {
            "key": "B",
            "text": "The main office of the apartment complex will be closed.",
            "vietnamese": "Văn phòng chính của khu chung cư sẽ đóng cửa."
          },
          {
            "key": "C",
            "text": "Some new tenants will move into a vacant apartment.",
            "vietnamese": "Một số người thuê nhà mới sẽ chuyển đến một căn hộ trống."
          },
          {
            "key": "D",
            "text": "A parking area will become unavailable.",
            "vietnamese": "Khu vực đỗ xe sẽ không còn trống."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là (A): \"Some laundry rooms will be updated.\" (Một số phòng giặt sẽ được cập nhật.)."
      },
      {
        "num": 90,
        "question": "What does the speaker say about the Maple building?",
        "vietnameseQuestion": "Người nói nói gì về tòa nhà Maple?",
        "options": [
          {
            "key": "A",
            "text": "It has more tenants than the other buildings.",
            "vietnamese": "Nó có nhiều người thuê hơn các tòa nhà khác."
          },
          {
            "key": "B",
            "text": "It is the only building with a laundry room.",
            "vietnamese": "Đây là tòa nhà duy nhất có phòng giặt là."
          },
          {
            "key": "C",
            "text": "It is first in the project schedule.",
            "vietnamese": "Đây là lần đầu tiên trong lịch trình dự án."
          },
          {
            "key": "D",
            "text": "It is where the main office is located.",
            "vietnamese": "Đó là nơi đặt văn phòng chính."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"It is first in the project schedule.\" (Đây là lần đầu tiên trong lịch trình dự án.)."
      },
      {
        "num": 91,
        "question": "Why should tenants stop at the main office?",
        "vietnameseQuestion": "Tại sao người thuê nên dừng chân tại văn phòng chính?",
        "options": [
          {
            "key": "A",
            "text": "To pay a laundry fee",
            "vietnamese": "Để trả phí giặt là"
          },
          {
            "key": "B",
            "text": "To pick up a questionnaire",
            "vietnamese": "Để lấy một bảng câu hỏi"
          },
          {
            "key": "C",
            "text": "To sign a permission form",
            "vietnamese": "Để ký vào mẫu giấy phép"
          },
          {
            "key": "D",
            "text": "To receive a new key",
            "vietnamese": "Để nhận chìa khóa mới"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là (D): \"To receive a new key\" (Để nhận chìa khóa mới)."
      }
    ],
    "vocabulary": [
      {
        "word": "facilities",
        "meaning": "cơ sở vật chất",
        "partOfSpeech": "n"
      },
      {
        "word": "access",
        "meaning": "sự truy cập, lối vào",
        "partOfSpeech": "n"
      },
      {
        "word": "renovated",
        "meaning": "được cải tạo nâng cấp",
        "partOfSpeech": "adj"
      }
    ]
  },
  {
    "id": "part4-92-94",
    "part": 4,
    "partTitle": "Part 4: Bài nói chuyện",
    "questionRange": "Câu 92 - 94",
    "title": "Part 4 - Câu 92 - 94: Ai có nhiều khả năng là người nghe nhất",
    "audioSrc": "/audio/test5_2023.mp3",
    "startTime": 2488.65,
    "endTime": 2567.58,
    "transcript": [
      {
        "id": "p4-92-1",
        "speaker": "Speaker",
        "text": "This message is for Mr. Yun. I'm calling from the rental office. I received the signed contract and as we confirmed earlier,",
        "vietnamese": "Tin nhắn này là dành cho ông Yun. Tôi đang gọi từ văn phòng cho thuê. Tôi đã nhận được hợp đồng đã ký và như chúng tôi đã xác nhận trước đó,"
      },
      {
        "id": "p4-92-2",
        "speaker": "Speaker",
        "text": "your rental of the retail space here in the shopping center will begin on the 1st of October.",
        "vietnamese": "Việc thuê mặt bằng bán lẻ tại trung tâm mua sắm của bạn sẽ bắt đầu vào ngày 1 tháng 10."
      },
      {
        "id": "p4-92-3",
        "speaker": "Speaker",
        "text": "There are a few more things. You need to schedule a city inspection before the electricity can be turned on.",
        "vietnamese": "Có một vài điều nữa. Bạn cần lên lịch kiểm tra thành phố trước khi có thể bật điện."
      },
      {
        "id": "p4-92-4",
        "speaker": "Speaker",
        "text": "And the owner has agreed to your request to add a storage room and construction will begin within the week.",
        "vietnamese": "Và chủ sở hữu đã đồng ý với yêu cầu của bạn về việc thêm một phòng chứa đồ và việc xây dựng sẽ bắt đầu trong tuần."
      },
      {
        "id": "p4-92-5",
        "speaker": "Speaker",
        "text": "I think everything can be done by the 1st of October and you can open your doors and welcome new customers.",
        "vietnamese": "Tôi nghĩ mọi thứ có thể hoàn thành trước ngày 1 tháng 10 và bạn có thể mở cửa chào đón những khách hàng mới."
      }
    ],
    "questions": [
      {
        "num": 92,
        "question": "Who most likely is the listener?",
        "vietnameseQuestion": "Ai có nhiều khả năng là người nghe nhất?",
        "options": [
          {
            "key": "A",
            "text": "A city inspector",
            "vietnamese": "Một thanh tra thành phố"
          },
          {
            "key": "B",
            "text": "An electrician",
            "vietnamese": "Một thợ điện"
          },
          {
            "key": "C",
            "text": "A business owner",
            "vietnamese": "Một chủ doanh nghiệp"
          },
          {
            "key": "D",
            "text": "A lawyer",
            "vietnamese": "một luật sư"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"A business owner\" (Một chủ doanh nghiệp)."
      },
      {
        "num": 93,
        "question": "What does the speaker say about a storage room?",
        "vietnameseQuestion": "Người nói nói gì về phòng chứa đồ?",
        "options": [
          {
            "key": "A",
            "text": "Itwillbeusedforelectrical equipment.",
            "vietnamese": "Nó sẽ được sử dụng cho các thiết bị điện."
          },
          {
            "key": "B",
            "text": "It is available for rent.",
            "vietnamese": "Nó có sẵn cho thuê."
          },
          {
            "key": "C",
            "text": "It has not been built yet.",
            "vietnamese": "Nó vẫn chưa được xây dựng."
          },
          {
            "key": "D",
            "text": "It was recently repaired.",
            "vietnamese": "Gần đây nó đã được sửa chữa."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"It has not been built yet.\" (Nó vẫn chưa được xây dựng.)."
      },
      {
        "num": 94,
        "question": "What does the speaker believe will happen onthefirstofOctober?",
        "vietnameseQuestion": "Người nói tin rằng điều gì sẽ xảy ra vào ngày đầu tiên của tháng 10?",
        "options": [
          {
            "key": "A",
            "text": "The store will open.",
            "vietnamese": "Cửa hàng sẽ mở."
          },
          {
            "key": "B",
            "text": "The contract will be signed.",
            "vietnamese": "Hợp đồng sẽ được ký kết."
          },
          {
            "key": "C",
            "text": "The inspection will take place.",
            "vietnamese": "Việc kiểm tra sẽ diễn ra."
          },
          {
            "key": "D",
            "text": "Construction work will start. Carsin's Food Shop 10% Off Your Total Order Rewards Coupon Rulesof Use 1. Coupon must be presented at time of purchase. 2. Stamps, milk, and git cards excluded. 3. May not be used with other discounts. 4. Only one coupon per customer.",
            "vietnamese": "Công việc xây dựng sẽ bắt đầu. Cửa hàng thực phẩm Carsin's Giảm 10% cho tổng phần thưởng đơn hàng của bạn Phiếu giảm giá Quy tắc sử dụng 1. Phiếu giảm giá phải được xuất trình tại thời điểm mua hàng. 2. Không bao gồm tem, sữa và thẻ git. 3. Có thể không được sử dụng cùng với các ưu đãi giảm giá khác. 4. Mỗi khách hàng chỉ có một phiếu giảm giá."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là (A): \"The store will open.\" (Cửa hàng sẽ mở.)."
      }
    ],
    "vocabulary": [
      {
        "word": "contract",
        "meaning": "hợp đồng",
        "partOfSpeech": "n"
      },
      {
        "word": "schedule",
        "meaning": "lên lịch, sắp xếp thời gian",
        "partOfSpeech": "v"
      },
      {
        "word": "inspection",
        "meaning": "sự thanh tra, kiểm tra chất lượng",
        "partOfSpeech": "n"
      },
      {
        "word": "owner",
        "meaning": "chủ sở hữu",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part4-95-97",
    "part": 4,
    "partTitle": "Part 4: Bài nói chuyện",
    "questionRange": "Câu 95 - 97",
    "title": "Part 4 - Câu 95 - 97: Mục đích của thông báo là gì",
    "audioSrc": "/audio/test5_2023.mp3",
    "startTime": 2567.58,
    "endTime": 2651.33,
    "transcript": [
      {
        "id": "p4-95-1",
        "speaker": "Speaker",
        "text": "Greetings Carson's cashiers. Let's take a look at the coupon we just mailed out to rewards members this week.",
        "vietnamese": "Xin chào nhân viên thu ngân của Carson. Chúng ta hãy xem phiếu giảm giá mà chúng tôi vừa gửi để tặng thưởng cho các thành viên trong tuần này."
      },
      {
        "id": "p4-95-2",
        "speaker": "Speaker",
        "text": "Our local rival Gilroys has been offering a similar discount to its customers and business there has been booming.",
        "vietnamese": "Đối thủ địa phương của chúng tôi, Gilroys, đã đưa ra mức giảm giá tương tự cho khách hàng của mình và hoạt động kinh doanh ở đó đang bùng nổ."
      },
      {
        "id": "p4-95-3",
        "speaker": "Speaker",
        "text": "So it's time we try something similar but of course even better.",
        "vietnamese": "Vì vậy, đã đến lúc chúng ta thử điều gì đó tương tự nhưng tất nhiên thậm chí còn tốt hơn."
      },
      {
        "id": "p4-95-4",
        "speaker": "Speaker",
        "text": "Our discount offer is 10% while theirs is only 5%. Please spend some time looking over the four rules of use at the bottom.",
        "vietnamese": "Ưu đãi giảm giá của chúng tôi là 10% trong khi của họ chỉ là 5%. Vui lòng dành chút thời gian xem qua bốn quy tắc sử dụng ở phía dưới."
      },
      {
        "id": "p4-95-5",
        "speaker": "Speaker",
        "text": "We may need to revisit the one about using multiple discounts.",
        "vietnamese": "Chúng ta có thể cần phải xem lại phần về việc sử dụng nhiều khoản giảm giá."
      },
      {
        "id": "p4-95-6",
        "speaker": "Speaker",
        "text": "Our customers do love manufacturer coupons.",
        "vietnamese": "Khách hàng của chúng tôi rất thích phiếu giảm giá của nhà sản xuất."
      }
    ],
    "questions": [
      {
        "num": 95,
        "question": "What is the purpose of the announcement?",
        "vietnameseQuestion": "Mục đích của thông báo là gì?",
        "options": [
          {
            "key": "A",
            "text": "Todescribeanewcustomerdiscount",
            "vietnamese": "Để mô tả một khách hàng mới giảm giá"
          },
          {
            "key": "B",
            "text": "To introduce new employees to the team",
            "vietnamese": "Để giới thiệu nhân viên mới vào nhóm"
          },
          {
            "key": "C",
            "text": "To announcetheend of a rewards program",
            "vietnamese": "Để thông báo kết thúc chương trình phần thưởng"
          },
          {
            "key": "D",
            "text": "To review customer-complaint policies",
            "vietnamese": "Rà soát chính sách khiếu nại của khách hàng"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là (A): \"Todescribeanewcustomerdiscount\" (Để mô tả một khách hàng mới giảm giá)."
      },
      {
        "num": 96,
        "question": "What does the speaker say about Gilroy's?",
        "vietnameseQuestion": "Người nói nói gì về Gilroy's?",
        "options": [
          {
            "key": "A",
            "text": "It does not offer discounts.",
            "vietnamese": "Nó không cung cấp giảm giá."
          },
          {
            "key": "B",
            "text": "It operates outside the local area.",
            "vietnamese": "Nó hoạt động bên ngoài khu vực địa phương."
          },
          {
            "key": "C",
            "text": "It is a competitor.",
            "vietnamese": "Nó là một đối thủ cạnh tranh."
          },
          {
            "key": "D",
            "text": "It has strict rules for employees.",
            "vietnamese": "Nó có những quy định nghiêm ngặt đối với nhân viên."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"It is a competitor.\" (Nó là một đối thủ cạnh tranh.)."
      },
      {
        "num": 97,
        "question": "Look at the graphic. Which rule might be changed?",
        "vietnameseQuestion": "Nhìn vào đồ họa. Quy tắc nào có thể được thay đổi?",
        "options": [
          {
            "key": "A",
            "text": "Rule 1",
            "vietnamese": "Quy tắc 1"
          },
          {
            "key": "B",
            "text": "Rule 2",
            "vietnamese": "Quy tắc 2"
          },
          {
            "key": "C",
            "text": "Rule 3",
            "vietnamese": "Quy tắc 3"
          },
          {
            "key": "D",
            "text": "Rule 4 Team-Building Activities Quiz Game Activity 1 Activity2 Volleyball Paint a Picture Activity3 Problem-Solving Activity Activity4",
            "vietnamese": "Quy tắc 4 Hoạt động xây dựng nhóm Trò chơi đố vui Hoạt động 1 Hoạt động2 Bóng chuyền Vẽ tranh Hoạt động3 Hoạt động giải quyết vấn đề Hoạt động4"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"Rule 3\" (Quy tắc 3)."
      }
    ],
    "vocabulary": [
      {
        "word": "coupon",
        "meaning": "phiếu giảm giá, phiếu ưu đãi",
        "partOfSpeech": "n"
      },
      {
        "word": "local",
        "meaning": "thuộc địa phương",
        "partOfSpeech": "n"
      },
      {
        "word": "discount",
        "meaning": "sự giảm giá, chiết khấu",
        "partOfSpeech": "n"
      },
      {
        "word": "manufacturer",
        "meaning": "nhà sản xuất",
        "partOfSpeech": "n"
      }
    ],
    "graphicImage": "/images/intensive/test5_2023/q95_97.png"
  },
  {
    "id": "part4-98-100",
    "part": 4,
    "partTitle": "Part 4: Bài nói chuyện",
    "questionRange": "Câu 98 - 100",
    "title": "Part 4 - Câu 98 - 100: Người nói rất có thể là ai",
    "audioSrc": "/audio/test5_2023.mp3",
    "startTime": 2651.33,
    "endTime": 2756.4,
    "transcript": [
      {
        "id": "p4-98-1",
        "speaker": "Speaker",
        "text": "Good morning. I hope you are settling into your new officers here at Golden Glove Insurance Company.",
        "vietnamese": "Chào buổi sáng. Tôi hy vọng bạn đã ổn định được vị trí cán bộ mới của mình tại Công ty Bảo hiểm Găng tay Vàng."
      },
      {
        "id": "p4-98-2",
        "speaker": "Speaker",
        "text": "Let's plan something fun to get to know each other. On the wall there's a list of team building activities.",
        "vietnamese": "Hãy lên kế hoạch gì đó thú vị để làm quen với nhau nhé. Trên tường có một danh sách các hoạt động xây dựng đội nhóm."
      },
      {
        "id": "p4-98-3",
        "speaker": "Speaker",
        "text": "After this meeting put a check mark next to the activity you want to do together next Friday afternoon.",
        "vietnamese": "Sau cuộc họp này, hãy đánh dấu bên cạnh hoạt động mà bạn muốn cùng thực hiện vào chiều thứ Sáu tới."
      },
      {
        "id": "p4-98-4",
        "speaker": "Speaker",
        "text": "It would be energising and fun to use our volleyball court but I shouldn't influence you.",
        "vietnamese": "Sẽ rất thú vị và tràn đầy năng lượng khi sử dụng sân bóng chuyền của chúng ta nhưng tôi không nên tác động đến bạn."
      }
    ],
    "questions": [
      {
        "num": 98,
        "question": "Who most likely is the speaker?",
        "vietnameseQuestion": "Người nói rất có thể là ai?",
        "options": [
          {
            "key": "A",
            "text": "Anofficemanager",
            "vietnamese": "quản lý văn phòng"
          },
          {
            "key": "B",
            "text": "Asports coach",
            "vietnamese": "Huấn luyện viên thể thao"
          },
          {
            "key": "C",
            "text": "An accountant",
            "vietnamese": "Một kế toán viên"
          },
          {
            "key": "D",
            "text": "A computer technician",
            "vietnamese": "Một kỹ thuật viên máy tính"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là (A): \"Anofficemanager\" (quản lý văn phòng)."
      },
      {
        "num": 99,
        "question": "When will the group have a team-building activity?",
        "vietnameseQuestion": "Khi nào nhóm sẽ có hoạt động team-building?",
        "options": [
          {
            "key": "A",
            "text": "Thisafternoon TEST5",
            "vietnamese": "Chiều nay KIỂM TRA5"
          },
          {
            "key": "B",
            "text": "Tomorrow morning",
            "vietnamese": "Sáng mai"
          },
          {
            "key": "C",
            "text": "Next Friday",
            "vietnamese": "Thứ Sáu tới"
          },
          {
            "key": "D",
            "text": "Next Saturday",
            "vietnamese": "Thứ Bảy tới"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"Next Friday\" (Thứ Sáu tới)."
      },
      {
        "num": 100,
        "question": "Look at the graphic. Which activity does the speaker most likely prefer?",
        "vietnameseQuestion": "Nhìn vào đồ họa. Người nói có thể thích hoạt động nào nhất?",
        "options": [
          {
            "key": "A",
            "text": "Activity 1",
            "vietnamese": "Hoạt động 1"
          },
          {
            "key": "B",
            "text": "Activity 2",
            "vietnamese": "Hoạt động 2"
          },
          {
            "key": "C",
            "text": "Activity 3",
            "vietnamese": "Hoạt động 3"
          },
          {
            "key": "D",
            "text": "Activity 4",
            "vietnamese": "Hoạt động 4"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"Activity 2\" (Hoạt động 2)."
      }
    ],
    "vocabulary": [
      {
        "word": "insurance",
        "meaning": "bảo hiểm",
        "partOfSpeech": "n"
      }
    ],
    "graphicImage": "/images/intensive/test5_2023/q98_100.png"
  }
];

export function getIntensiveItemById(id: string): IntensiveListeningItem | undefined {
  return test5_2023_IntensiveData.find((item) => item.id === id);
}

export function getItemsByPart(part: 1 | 2 | 3 | 4): IntensiveListeningItem[] {
  return test5_2023_IntensiveData.filter((item) => item.part === part);
}
