// Dữ liệu luyện nghe chi tiết (Intensive Listening) - ETS TOEIC 2024 Test 5
// Áp dụng kỹ thuật Virtual Timestamp Slicing từ audio gốc /audio/test5_2024.mp3
// Transcript, câu hỏi và giải thích chi tiết theo đề thi ETS 2024 Test 5

import type { IntensiveListeningItem } from './intensive_listening_types';

export const test5_2024_IntensiveData: IntensiveListeningItem[] = [
  {
    "id": "part1-1",
    "part": 1,
    "partTitle": "Part 1: Mô tả hình ảnh",
    "questionRange": "Câu 1",
    "title": "Part 1 - Câu 1: Người công nhân đang ghi chép",
    "audioSrc": "/audio/test5_2024.mp3",
    "startTime": 99.0,
    "endTime": 125.1,
    "imageUrl": "/images/intensive/test5_2024/q1.png",
    "image": "/images/intensive/test5_2024/q1.png",
    "transcript": [
      {
        "id": "p1-1-a",
        "speaker": "Speaker",
        "text": "(A) The worker is carrying some plants.",
        "vietnamese": "(A) Người công nhân đang mang một vài chậu cây."
      },
      {
        "id": "p1-1-b",
        "speaker": "Speaker",
        "text": "(B) The worker is reading a sign.",
        "vietnamese": "(B) Người công nhân đang đọc một biển báo."
      },
      {
        "id": "p1-1-c",
        "speaker": "Speaker",
        "text": "(C) The worker is pushing a cart.",
        "vietnamese": "(C) Người công nhân đang đẩy một chiếc xe đẩy."
      },
      {
        "id": "p1-1-d",
        "speaker": "Speaker",
        "text": "(D) The worker is writing some notes.",
        "vietnamese": "(D) Người công nhân đang ghi chép một số ghi chú."
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
            "text": "The worker is carrying some plants.",
            "vietnamese": "Người công nhân đang mang một vài chậu cây."
          },
          {
            "key": "B",
            "text": "The worker is reading a sign.",
            "vietnamese": "Người công nhân đang đọc biển báo."
          },
          {
            "key": "C",
            "text": "The worker is pushing a cart.",
            "vietnamese": "Người công nhân đang đẩy xe đẩy."
          },
          {
            "key": "D",
            "text": "The worker is writing some notes.",
            "vietnamese": "Người công nhân đang ghi chép ghi chú."
          }
        ],
        "correctAnswer": "D",
        "explanation": "Trong bức ảnh, người công nhân đang cầm bảng kẹp tài liệu và chăm chú ghi chép (writing some notes)."
      }
    ],
    "vocabulary": [
      {
        "word": "worker",
        "meaning": "người công nhân, người lao động",
        "partOfSpeech": "n"
      },
      {
        "word": "carry",
        "meaning": "mang, xách, chở",
        "partOfSpeech": "v"
      },
      {
        "word": "push a cart",
        "meaning": "đẩy xe chở hàng",
        "partOfSpeech": "phr"
      },
      {
        "word": "take notes",
        "meaning": "ghi chép",
        "partOfSpeech": "phr"
      }
    ]
  },
  {
    "id": "part1-2",
    "part": 1,
    "partTitle": "Part 1: Mô tả hình ảnh",
    "questionRange": "Câu 2",
    "title": "Part 1 - Câu 2: Người kéo va li tại nhà ga/sân bay",
    "audioSrc": "/audio/test5_2024.mp3",
    "startTime": 125.1,
    "endTime": 160.9,
    "imageUrl": "/images/intensive/test5_2024/q2.png",
    "image": "/images/intensive/test5_2024/q2.png",
    "transcript": [
      {
        "id": "p1-2-a",
        "speaker": "Speaker",
        "text": "(A) Some of the people are pulling suitcases.",
        "vietnamese": "(A) Một vài người đang kéo va li."
      },
      {
        "id": "p1-2-b",
        "speaker": "Speaker",
        "text": "(B) Some of the people are relaxing on benches.",
        "vietnamese": "(B) Một vài người đang thư giãn trên những chiếc ghế dài."
      },
      {
        "id": "p1-2-c",
        "speaker": "Speaker",
        "text": "(C) Some of the people are putting luggage onto a rack.",
        "vietnamese": "(C) Một vài người đang đặt hành lý lên giá để đồ."
      },
      {
        "id": "p1-2-d",
        "speaker": "Speaker",
        "text": "(D) Some of the people are waiting in line to purchase a ticket.",
        "vietnamese": "(D) Một vài người đang xếp hàng để mua vé."
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
            "text": "Some of the people are pulling suitcases.",
            "vietnamese": "Một vài người đang kéo va li."
          },
          {
            "key": "B",
            "text": "Some of the people are relaxing on benches.",
            "vietnamese": "Một vài người đang nghỉ ngơi trên ghế dài."
          },
          {
            "key": "C",
            "text": "Some of the people are putting luggage onto a rack.",
            "vietnamese": "Một vài người đang đặt hành lý lên giá."
          },
          {
            "key": "D",
            "text": "Some of the people are waiting in line to purchase a ticket.",
            "vietnamese": "Một vài người đang xếp hàng mua vé."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Trong bức ảnh, các hành khách đang kéo va li có bánh xe đi qua sảnh ga (pulling suitcases)."
      }
    ],
    "vocabulary": [
      {
        "word": "pull a suitcase",
        "meaning": "kéo va li",
        "partOfSpeech": "phr"
      },
      {
        "word": "bench",
        "meaning": "ghế dài công cộng",
        "partOfSpeech": "n"
      },
      {
        "word": "luggage rack",
        "meaning": "giá để hành lý",
        "partOfSpeech": "n"
      },
      {
        "word": "wait in line",
        "meaning": "xếp hàng chờ đợi",
        "partOfSpeech": "phr"
      }
    ]
  },
  {
    "id": "part1-3",
    "part": 1,
    "partTitle": "Part 1: Mô tả hình ảnh",
    "questionRange": "Câu 3",
    "title": "Part 1 - Câu 3: Cô gái đi bộ đường dài ngoài trời",
    "audioSrc": "/audio/test5_2024.mp3",
    "startTime": 160.9,
    "endTime": 186.4,
    "imageUrl": "/images/intensive/test5_2024/q3.png",
    "image": "/images/intensive/test5_2024/q3.png",
    "transcript": [
      {
        "id": "p1-3-a",
        "speaker": "Speaker",
        "text": "(A) She's looking into her backpack.",
        "vietnamese": "(A) Cô ấy đang nhìn vào trong ba lô của mình."
      },
      {
        "id": "p1-3-b",
        "speaker": "Speaker",
        "text": "(B) She's tying the laces of her boots.",
        "vietnamese": "(B) Cô ấy đang buộc dây giày đi bộ của mình."
      },
      {
        "id": "p1-3-c",
        "speaker": "Speaker",
        "text": "(C) She's hiking on an outdoor path.",
        "vietnamese": "(C) Cô ấy đang đi bộ đường dài trên con đường mòn ngoài trời."
      },
      {
        "id": "p1-3-d",
        "speaker": "Speaker",
        "text": "(D) She's walking out of a tunnel.",
        "vietnamese": "(D) Cô ấy đang bước ra khỏi một đường hầm."
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
            "text": "She's looking into her backpack.",
            "vietnamese": "Cô ấy đang nhìn vào ba lô."
          },
          {
            "key": "B",
            "text": "She's tying the laces of her boots.",
            "vietnamese": "Cô ấy đang buộc dây giày."
          },
          {
            "key": "C",
            "text": "She's hiking on an outdoor path.",
            "vietnamese": "Cô ấy đang đi bộ trên đường mòn ngoài trời."
          },
          {
            "key": "D",
            "text": "She's walking out of a tunnel.",
            "vietnamese": "Cô ấy đang đi ra khỏi đường hầm."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Trong bức ảnh, một người phụ nữ mang ba lô đang sải bước đi bộ trên con đường mòn dã ngoại ngoài trời (hiking on an outdoor path)."
      }
    ],
    "vocabulary": [
      {
        "word": "backpack",
        "meaning": "ba lô",
        "partOfSpeech": "n"
      },
      {
        "word": "tie laces",
        "meaning": "buộc dây giày",
        "partOfSpeech": "phr"
      },
      {
        "word": "hike",
        "meaning": "đi bộ đường dài dã ngoại",
        "partOfSpeech": "v"
      },
      {
        "word": "path",
        "meaning": "đường mòn, lối đi",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part1-4",
    "part": 1,
    "partTitle": "Part 1: Mô tả hình ảnh",
    "questionRange": "Câu 4",
    "title": "Part 1 - Câu 4: Người phụ nữ quỳ trên tấm thảm",
    "audioSrc": "/audio/test5_2024.mp3",
    "startTime": 186.4,
    "endTime": 212.2,
    "imageUrl": "/images/intensive/test5_2024/q4.png",
    "image": "/images/intensive/test5_2024/q4.png",
    "transcript": [
      {
        "id": "p1-4-a",
        "speaker": "Speaker",
        "text": "(A) She's holding the handle of an oven.",
        "vietnamese": "(A) Cô ấy đang cầm tay nắm của lò nướng."
      },
      {
        "id": "p1-4-b",
        "speaker": "Speaker",
        "text": "(B) She's plugging a cord into an electrical outlet.",
        "vietnamese": "(B) Cô ấy đang cắm dây vào ổ cắm điện."
      },
      {
        "id": "p1-4-c",
        "speaker": "Speaker",
        "text": "(C) She's looking into a kitchen cabinet.",
        "vietnamese": "(C) Cô ấy đang nhìn vào ngăn tủ bếp."
      },
      {
        "id": "p1-4-d",
        "speaker": "Speaker",
        "text": "(D) She's kneeling down on a rug.",
        "vietnamese": "(D) Cô ấy đang quỳ gối trên một tấm thảm."
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
            "text": "She's holding the handle of an oven.",
            "vietnamese": "Cô ấy đang cầm tay nắm lò nướng."
          },
          {
            "key": "B",
            "text": "She's plugging a cord into an electrical outlet.",
            "vietnamese": "Cô ấy đang cắm dây điện vào ổ cắm."
          },
          {
            "key": "C",
            "text": "She's looking into a kitchen cabinet.",
            "vietnamese": "Cô ấy đang nhìn vào tủ bếp."
          },
          {
            "key": "D",
            "text": "She's kneeling down on a rug.",
            "vietnamese": "Cô ấy đang quỳ gối trên thảm."
          }
        ],
        "correctAnswer": "D",
        "explanation": "Trong bức ảnh, người phụ nữ đang trong tư thế quỳ gối trên tấm thảm trải sàn (kneeling down on a rug)."
      }
    ],
    "vocabulary": [
      {
        "word": "kneel down",
        "meaning": "quỳ gối xuống",
        "partOfSpeech": "phr v"
      },
      {
        "word": "rug",
        "meaning": "tấm thảm",
        "partOfSpeech": "n"
      },
      {
        "word": "electrical outlet",
        "meaning": "ổ cắm điện",
        "partOfSpeech": "n"
      },
      {
        "word": "cabinet",
        "meaning": "tủ có ngăn kéo/cánh cửa",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part1-5",
    "part": 1,
    "partTitle": "Part 1: Mô tả hình ảnh",
    "questionRange": "Câu 5",
    "title": "Part 1 - Câu 5: Ga trải giường được sắp xếp ngay ngắn",
    "audioSrc": "/audio/test5_2024.mp3",
    "startTime": 212.2,
    "endTime": 240.5,
    "imageUrl": "/images/intensive/test5_2024/q5.png",
    "image": "/images/intensive/test5_2024/q5.png",
    "transcript": [
      {
        "id": "p1-5-a",
        "speaker": "Speaker",
        "text": "(A) Sheets have been arranged on a bed.",
        "vietnamese": "(A) Các tấm ga trải giường đã được sắp xếp gọn gàng trên giường."
      },
      {
        "id": "p1-5-b",
        "speaker": "Speaker",
        "text": "(B) Some street signs are being replaced.",
        "vietnamese": "(B) Một số biển báo đường phố đang được thay thế."
      },
      {
        "id": "p1-5-c",
        "speaker": "Speaker",
        "text": "(C) Some bushes are being trimmed.",
        "vietnamese": "(C) Một số bụi cây đang được cắt tỉa."
      },
      {
        "id": "p1-5-d",
        "speaker": "Speaker",
        "text": "(D) Some chairs are being folded up.",
        "vietnamese": "(D) Một số chiếc ghế đang được gập lại."
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
            "text": "Sheets have been arranged on a bed.",
            "vietnamese": "Ga trải giường đã được sắp xếp trên giường."
          },
          {
            "key": "B",
            "text": "Some street signs are being replaced.",
            "vietnamese": "Một số biển báo đang được thay thế."
          },
          {
            "key": "C",
            "text": "Some bushes are being trimmed.",
            "vietnamese": "Một số bụi cây đang được cắt tỉa."
          },
          {
            "key": "D",
            "text": "Some chairs are being folded up.",
            "vietnamese": "Một số chiếc ghế đang được gập lại."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Trong bức ảnh chụp phòng ngủ khách sạn, ga trải giường và chăn gối đã được trải và sắp xếp phẳng phiu (Sheets have been arranged on a bed)."
      }
    ],
    "vocabulary": [
      {
        "word": "sheet",
        "meaning": "khăn trải giường, ga trải giường",
        "partOfSpeech": "n"
      },
      {
        "word": "arrange",
        "meaning": "sắp xếp, thu xếp",
        "partOfSpeech": "v"
      },
      {
        "word": "bush",
        "meaning": "bụi cây",
        "partOfSpeech": "n"
      },
      {
        "word": "trim",
        "meaning": "cắt tỉa",
        "partOfSpeech": "v"
      }
    ]
  },
  {
    "id": "part1-6",
    "part": 1,
    "partTitle": "Part 1: Mô tả hình ảnh",
    "questionRange": "Câu 6",
    "title": "Part 1 - Câu 6: Những cuốn sách xếp chồng trên bàn",
    "audioSrc": "/audio/test5_2024.mp3",
    "startTime": 240.5,
    "endTime": 270.6,
    "imageUrl": "/images/intensive/test5_2024/q6.png",
    "image": "/images/intensive/test5_2024/q6.png",
    "transcript": [
      {
        "id": "p1-6-a",
        "speaker": "Speaker",
        "text": "(A) Some cushions have been left on an armchair.",
        "vietnamese": "(A) Một số chiếc đệm gối đã được để trên ghế bành."
      },
      {
        "id": "p1-6-b",
        "speaker": "Speaker",
        "text": "(B) Books have been piled up on a table.",
        "vietnamese": "(B) Những cuốn sách đã được xếp chồng lên nhau trên bàn."
      },
      {
        "id": "p1-6-c",
        "speaker": "Speaker",
        "text": "(C) A light fixture is suspended from a ceiling.",
        "vietnamese": "(C) Một chiếc đèn được treo từ trần nhà xuống."
      },
      {
        "id": "p1-6-d",
        "speaker": "Speaker",
        "text": "(D) A rug has been rolled up on a floor.",
        "vietnamese": "(D) Một tấm thảm đã được cuộn lại trên sàn nhà."
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
            "text": "Some cushions have been left on an armchair.",
            "vietnamese": "Một số đệm gối được để trên ghế bành."
          },
          {
            "key": "B",
            "text": "Books have been piled up on a table.",
            "vietnamese": "Sách được xếp chồng trên bàn."
          },
          {
            "key": "C",
            "text": "A light fixture is suspended from a ceiling.",
            "vietnamese": "Đèn được treo từ trần nhà."
          },
          {
            "key": "D",
            "text": "A rug has been rolled up on a floor.",
            "vietnamese": "Tấm thảm được cuộn lại trên sàn."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Trong bức ảnh, các cuốn sách được xếp thành từng chồng ngay ngắn trên mặt bàn (Books have been piled up on a table)."
      }
    ],
    "vocabulary": [
      {
        "word": "pile up",
        "meaning": "xếp chồng lên nhau",
        "partOfSpeech": "phr v"
      },
      {
        "word": "armchair",
        "meaning": "ghế bành",
        "partOfSpeech": "n"
      },
      {
        "word": "cushion",
        "meaning": "đệm gối tựa",
        "partOfSpeech": "n"
      },
      {
        "word": "suspend",
        "meaning": "treo lơ lửng",
        "partOfSpeech": "v"
      }
    ]
  },
  {
    "id": "part2-7",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 7",
    "title": "Part 2 - Câu 7: Họp phòng ban tại phòng hội nghị",
    "audioSrc": "/audio/test5_2024.mp3",
    "startTime": 302.9,
    "endTime": 319.0,
    "transcript": [
      {
        "id": "p2-7-q",
        "speaker": "Speaker 1",
        "text": "There's a meeting in the conference room soon, right?",
        "vietnamese": "Sắp có cuộc họp trong phòng hội nghị đúng không?"
      },
      {
        "id": "p2-7-a",
        "speaker": "Speaker 2",
        "text": "(A) Yes, it's for the whole department.",
        "vietnamese": "(A) Vâng, cuộc họp dành cho toàn bộ phòng ban."
      },
      {
        "id": "p2-7-b",
        "speaker": "Speaker 2",
        "text": "(B) No. Put it in the closet.",
        "vietnamese": "(B) Không. Hãy cất nó vào trong tủ."
      },
      {
        "id": "p2-7-c",
        "speaker": "Speaker 2",
        "text": "(C) The rent is too high.",
        "vietnamese": "(C) Tiền thuê quá đắt."
      }
    ],
    "questions": [
      {
        "num": 7,
        "question": "There's a meeting in the conference room soon, right?",
        "vietnameseQuestion": "Sắp có cuộc họp trong phòng hội nghị đúng không?",
        "options": [
          {
            "key": "A",
            "text": "Yes, it's for the whole department.",
            "vietnamese": "Vâng, cuộc họp dành cho toàn bộ phòng ban."
          },
          {
            "key": "B",
            "text": "No. Put it in the closet.",
            "vietnamese": "Không. Hãy cất nó vào trong tủ."
          },
          {
            "key": "C",
            "text": "The rent is too high.",
            "vietnamese": "Tiền thuê quá đắt."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Câu hỏi đuôi xác nhận cuộc họp sắp diễn ra. Lựa chọn (A) xác nhận và cung cấp thêm thông tin rằng cuộc họp dành cho toàn bộ phòng ban."
      }
    ],
    "vocabulary": [
      {
        "word": "conference room",
        "meaning": "phòng hội nghị",
        "partOfSpeech": "n"
      },
      {
        "word": "department",
        "meaning": "phòng ban",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-8",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 8",
    "title": "Part 2 - Câu 8: Tiến độ vẽ bức tranh tường ở sảnh",
    "audioSrc": "/audio/test5_2024.mp3",
    "startTime": 319.0,
    "endTime": 343.3,
    "transcript": [
      {
        "id": "p2-8-q",
        "speaker": "Speaker 1",
        "text": "Why hasn't the mural in the lobby been painted yet?",
        "vietnamese": "Tại sao bức tranh tường ở sảnh vẫn chưa được vẽ?"
      },
      {
        "id": "p2-8-a",
        "speaker": "Speaker 2",
        "text": "(A) Red and yellow.",
        "vietnamese": "(A) Màu đỏ và màu vàng."
      },
      {
        "id": "p2-8-b",
        "speaker": "Speaker 2",
        "text": "(B) Please pick up the ladder.",
        "vietnamese": "(B) Làm ơn dọn chiếc thang đi."
      },
      {
        "id": "p2-8-c",
        "speaker": "Speaker 2",
        "text": "(C) Because the artist is out of town.",
        "vietnamese": "(C) Bởi vì người họa sĩ đang đi vắng."
      }
    ],
    "questions": [
      {
        "num": 8,
        "question": "Why hasn't the mural in the lobby been painted yet?",
        "vietnameseQuestion": "Tại sao bức tranh tường ở sảnh vẫn chưa được vẽ?",
        "options": [
          {
            "key": "A",
            "text": "Red and yellow.",
            "vietnamese": "Màu đỏ và màu vàng."
          },
          {
            "key": "B",
            "text": "Please pick up the ladder.",
            "vietnamese": "Làm ơn dọn chiếc thang đi."
          },
          {
            "key": "C",
            "text": "Because the artist is out of town.",
            "vietnamese": "Bởi vì người họa sĩ đang đi vắng."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Câu hỏi lý do \"Why hasn't...\". Lựa chọn (C) đưa ra lý do xác đáng giải thích tại sao chưa vẽ: vì họa sĩ đang đi vắng."
      }
    ],
    "vocabulary": [
      {
        "word": "mural",
        "meaning": "bức tranh tường lớn",
        "partOfSpeech": "n"
      },
      {
        "word": "lobby",
        "meaning": "sảnh chờ",
        "partOfSpeech": "n"
      },
      {
        "word": "out of town",
        "meaning": "đi vắng, đi công tác xa",
        "partOfSpeech": "idiom"
      }
    ]
  },
  {
    "id": "part2-9",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 9",
    "title": "Part 2 - Câu 9: Thời gian viết bài ưa thích",
    "audioSrc": "/audio/test5_2024.mp3",
    "startTime": 343.3,
    "endTime": 365.1,
    "transcript": [
      {
        "id": "p2-9-q",
        "speaker": "Speaker 1",
        "text": "Do you prefer writing in the morning or the afternoon?",
        "vietnamese": "Bạn thích viết bài vào buổi sáng hay buổi chiều hơn?"
      },
      {
        "id": "p2-9-a",
        "speaker": "Speaker 2",
        "text": "(A) My publisher requested edits.",
        "vietnamese": "(A) Nhà xuất bản của tôi yêu cầu chỉnh sửa."
      },
      {
        "id": "p2-9-b",
        "speaker": "Speaker 2",
        "text": "(B) Thanks for providing a solution.",
        "vietnamese": "(B) Cảm ơn vì đã đưa ra giải pháp."
      },
      {
        "id": "p2-9-c",
        "speaker": "Speaker 2",
        "text": "(C) Mornings are usually better for me.",
        "vietnamese": "(C) Buổi sáng thường thuận tiện hơn cho tôi."
      }
    ],
    "questions": [
      {
        "num": 9,
        "question": "Do you prefer writing in the morning or the afternoon?",
        "vietnameseQuestion": "Bạn thích viết bài vào buổi sáng hay buổi chiều hơn?",
        "options": [
          {
            "key": "A",
            "text": "My publisher requested edits.",
            "vietnamese": "Nhà xuất bản của tôi yêu cầu chỉnh sửa."
          },
          {
            "key": "B",
            "text": "Thanks for providing a solution.",
            "vietnamese": "Cảm ơn vì đã đưa ra giải pháp."
          },
          {
            "key": "C",
            "text": "Mornings are usually better for me.",
            "vietnamese": "Buổi sáng thường thuận tiện hơn cho tôi."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Câu hỏi lựa chọn giữa sáng và chiều. Lựa chọn (C) chọn buổi sáng là thời điểm tốt hơn cho người nói."
      }
    ],
    "vocabulary": [
      {
        "word": "prefer",
        "meaning": "thích hơn",
        "partOfSpeech": "v"
      },
      {
        "word": "publisher",
        "meaning": "nhà xuất bản",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-10",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 10",
    "title": "Part 2 - Câu 10: Đề xuất màu sơn phòng chờ",
    "audioSrc": "/audio/test5_2024.mp3",
    "startTime": 365.1,
    "endTime": 380.7,
    "transcript": [
      {
        "id": "p2-10-q",
        "speaker": "Speaker 1",
        "text": "I suggest we paint the waiting room light blue.",
        "vietnamese": "Tôi đề nghị chúng ta sơn phòng chờ màu xanh nhạt."
      },
      {
        "id": "p2-10-a",
        "speaker": "Speaker 2",
        "text": "(A) Dr. Park has an opening at 3.",
        "vietnamese": "(A) Bác sĩ Park có lịch trống lúc 3 giờ."
      },
      {
        "id": "p2-10-b",
        "speaker": "Speaker 2",
        "text": "(B) That's a good idea.",
        "vietnamese": "(B) Đó là một ý kiến hay."
      },
      {
        "id": "p2-10-c",
        "speaker": "Speaker 2",
        "text": "(C) I prefer the red jacket.",
        "vietnamese": "(C) Tôi thích chiếc áo khoác màu đỏ hơn."
      }
    ],
    "questions": [
      {
        "num": 10,
        "question": "I suggest we paint the waiting room light blue.",
        "vietnameseQuestion": "Tôi đề nghị chúng ta sơn phòng chờ màu xanh nhạt.",
        "options": [
          {
            "key": "A",
            "text": "Dr. Park has an opening at 3.",
            "vietnamese": "Bác sĩ Park có lịch trống lúc 3 giờ."
          },
          {
            "key": "B",
            "text": "That's a good idea.",
            "vietnamese": "Đó là một ý kiến hay."
          },
          {
            "key": "C",
            "text": "I prefer the red jacket.",
            "vietnamese": "Tôi thích chiếc áo khoác màu đỏ hơn."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Câu đề xuất (\"I suggest...\"). Lựa chọn (B) phản hồi đồng tình, tán thành đề xuất đó."
      }
    ],
    "vocabulary": [
      {
        "word": "suggest",
        "meaning": "đề xuất, gợi ý",
        "partOfSpeech": "v"
      },
      {
        "word": "waiting room",
        "meaning": "phòng chờ",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-11",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 11",
    "title": "Part 2 - Câu 11: Giờ mở cửa của trường dạy nhạc",
    "audioSrc": "/audio/test5_2024.mp3",
    "startTime": 380.7,
    "endTime": 401.7,
    "transcript": [
      {
        "id": "p2-11-q",
        "speaker": "Speaker 1",
        "text": "Did you know that the music school is closed on Sundays?",
        "vietnamese": "Bạn có biết là trường dạy nhạc đóng cửa vào các ngày Chủ nhật không?"
      },
      {
        "id": "p2-11-a",
        "speaker": "Speaker 2",
        "text": "(A) 0 an hour.",
        "vietnamese": "(A) 40 đô la một giờ."
      },
      {
        "id": "p2-11-b",
        "speaker": "Speaker 2",
        "text": "(B) No. I didn't know that.",
        "vietnamese": "(B) Không, tôi không biết điều đó."
      },
      {
        "id": "p2-11-c",
        "speaker": "Speaker 2",
        "text": "(C) I saw the piano recital.",
        "vietnamese": "(C) Tôi đã xem buổi biểu diễn độc tấu piano."
      }
    ],
    "questions": [
      {
        "num": 11,
        "question": "Did you know that the music school is closed on Sundays?",
        "vietnameseQuestion": "Bạn có biết là trường dạy nhạc đóng cửa vào các ngày Chủ nhật không?",
        "options": [
          {
            "key": "A",
            "text": "0 an hour.",
            "vietnamese": "40 đô la một giờ."
          },
          {
            "key": "B",
            "text": "No. I didn't know that.",
            "vietnamese": "Không, tôi không biết điều đó."
          },
          {
            "key": "C",
            "text": "I saw the piano recital.",
            "vietnamese": "Tôi đã xem buổi biểu diễn độc tấu piano."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Câu hỏi Yes/No (\"Did you know...\"). Lựa chọn (B) trực tiếp trả lời rằng người nói không biết thông tin này."
      }
    ],
    "vocabulary": [
      {
        "word": "recital",
        "meaning": "buổi biểu diễn độc tấu",
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
    "id": "part2-12",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 12",
    "title": "Part 2 - Câu 12: Hỏi cách tìm người quản lý văn phòng",
    "audioSrc": "/audio/test5_2024.mp3",
    "startTime": 401.7,
    "endTime": 420.2,
    "transcript": [
      {
        "id": "p2-12-q",
        "speaker": "Speaker 1",
        "text": "How do I find the office manager?",
        "vietnamese": "Làm thế nào để tôi tìm được người quản lý văn phòng?"
      },
      {
        "id": "p2-12-a",
        "speaker": "Speaker 2",
        "text": "(A) The receptionist would know.",
        "vietnamese": "(A) Nhân viên lễ tân chắc sẽ biết đấy."
      },
      {
        "id": "p2-12-b",
        "speaker": "Speaker 2",
        "text": "(B) Desk lamps and headsets.",
        "vietnamese": "(B) Đèn bàn và tai nghe."
      },
      {
        "id": "p2-12-c",
        "speaker": "Speaker 2",
        "text": "(C) 12 euros.",
        "vietnamese": "(C) 12 euro."
      }
    ],
    "questions": [
      {
        "num": 12,
        "question": "How do I find the office manager?",
        "vietnameseQuestion": "Làm thế nào để tôi tìm được người quản lý văn phòng?",
        "options": [
          {
            "key": "A",
            "text": "The receptionist would know.",
            "vietnamese": "Nhân viên lễ tân chắc sẽ biết đấy."
          },
          {
            "key": "B",
            "text": "Desk lamps and headsets.",
            "vietnamese": "Đèn bàn và tai nghe."
          },
          {
            "key": "C",
            "text": "12 euros.",
            "vietnamese": "12 euro."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Câu hỏi cách thức tìm người (\"How do I find...\"). Lựa chọn (A) gợi ý hỏi nhân viên lễ tân vì họ nắm rõ thông tin."
      }
    ],
    "vocabulary": [
      {
        "word": "office manager",
        "meaning": "quản lý văn phòng",
        "partOfSpeech": "n"
      },
      {
        "word": "receptionist",
        "meaning": "nhân viên tiếp tân",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-13",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 13",
    "title": "Part 2 - Câu 13: Thời điểm đặt mua gỗ xây dựng",
    "audioSrc": "/audio/test5_2024.mp3",
    "startTime": 420.2,
    "endTime": 438.4,
    "transcript": [
      {
        "id": "p2-13-q",
        "speaker": "Speaker 1",
        "text": "When did you place the order for the lumber?",
        "vietnamese": "Bạn đã đặt mua gỗ khi nào vậy?"
      },
      {
        "id": "p2-13-a",
        "speaker": "Speaker 2",
        "text": "(A) Yes. It's a great place for hiking.",
        "vietnamese": "(A) Vâng, đó là một nơi tuyệt vời để đi bộ dã ngoại."
      },
      {
        "id": "p2-13-b",
        "speaker": "Speaker 2",
        "text": "(B) It's out of stock right now.",
        "vietnamese": "(B) Hiện tại mặt hàng đó đang hết hàng."
      },
      {
        "id": "p2-13-c",
        "speaker": "Speaker 2",
        "text": "(C) The warehouse on William Street.",
        "vietnamese": "(C) Kho hàng trên Phố William."
      }
    ],
    "questions": [
      {
        "num": 13,
        "question": "When did you place the order for the lumber?",
        "vietnameseQuestion": "Bạn đã đặt mua gỗ khi nào vậy?",
        "options": [
          {
            "key": "A",
            "text": "Yes. It's a great place for hiking.",
            "vietnamese": "Vâng, đó là một nơi tuyệt vời để đi bộ dã ngoại."
          },
          {
            "key": "B",
            "text": "It's out of stock right now.",
            "vietnamese": "Hiện tại mặt hàng đó đang hết hàng."
          },
          {
            "key": "C",
            "text": "The warehouse on William Street.",
            "vietnamese": "Kho hàng trên Phố William."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Câu hỏi về thời gian đặt hàng gỗ. Lựa chọn (B) giải thích lý do gián tiếp chưa đặt hoặc chưa nhận được vì hàng đang hết."
      }
    ],
    "vocabulary": [
      {
        "word": "place an order",
        "meaning": "đặt hàng",
        "partOfSpeech": "phr"
      },
      {
        "word": "lumber",
        "meaning": "gỗ xẻ, gỗ xây dựng",
        "partOfSpeech": "n"
      },
      {
        "word": "out of stock",
        "meaning": "hết hàng",
        "partOfSpeech": "adj"
      }
    ]
  },
  {
    "id": "part2-14",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 14",
    "title": "Part 2 - Câu 14: Vị trí máy đóng gói mới",
    "audioSrc": "/audio/test5_2024.mp3",
    "startTime": 438.4,
    "endTime": 458.7,
    "transcript": [
      {
        "id": "p2-14-q",
        "speaker": "Speaker 1",
        "text": "Where is the new packaging machine?",
        "vietnamese": "Máy đóng gói mới đang ở đâu vậy?"
      },
      {
        "id": "p2-14-a",
        "speaker": "Speaker 2",
        "text": "(A) 10 packages a minute.",
        "vietnamese": "(A) 10 gói mỗi phút."
      },
      {
        "id": "p2-14-b",
        "speaker": "Speaker 2",
        "text": "(B) We met last Thursday.",
        "vietnamese": "(B) Chúng tôi đã gặp nhau vào thứ Năm tuần trước."
      },
      {
        "id": "p2-14-c",
        "speaker": "Speaker 2",
        "text": "(C) We decided to keep the old one.",
        "vietnamese": "(C) Chúng tôi đã quyết định giữ lại chiếc máy cũ."
      }
    ],
    "questions": [
      {
        "num": 14,
        "question": "Where is the new packaging machine?",
        "vietnameseQuestion": "Máy đóng gói mới đang ở đâu vậy?",
        "options": [
          {
            "key": "A",
            "text": "10 packages a minute.",
            "vietnamese": "10 gói mỗi phút."
          },
          {
            "key": "B",
            "text": "We met last Thursday.",
            "vietnamese": "Chúng tôi đã gặp nhau vào thứ Năm tuần trước."
          },
          {
            "key": "C",
            "text": "We decided to keep the old one.",
            "vietnamese": "Chúng tôi đã quyết định giữ lại chiếc máy cũ."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Câu hỏi máy mới ở đâu. Lựa chọn (C) bác bỏ tiền đề bằng cách thông báo công ty quyết định tiếp tục dùng máy cũ."
      }
    ],
    "vocabulary": [
      {
        "word": "packaging machine",
        "meaning": "máy đóng gói",
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
    "id": "part2-15",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 15",
    "title": "Part 2 - Câu 15: Thông báo vắng mặt buổi chiều",
    "audioSrc": "/audio/test5_2024.mp3",
    "startTime": 458.7,
    "endTime": 478.4,
    "transcript": [
      {
        "id": "p2-15-q",
        "speaker": "Speaker 1",
        "text": "I'll be out of the office this afternoon.",
        "vietnamese": "Chiều nay tôi sẽ vắng mặt ở văn phòng."
      },
      {
        "id": "p2-15-a",
        "speaker": "Speaker 2",
        "text": "(A) An awfully long commute.",
        "vietnamese": "(A) Một quãng đường đi làm dài khủng khiếp."
      },
      {
        "id": "p2-15-b",
        "speaker": "Speaker 2",
        "text": "(B) Okay. I'll update your schedule.",
        "vietnamese": "(B) Được rồi. Tôi sẽ cập nhật lịch trình của bạn."
      },
      {
        "id": "p2-15-c",
        "speaker": "Speaker 2",
        "text": "(C) It's right down the hallway.",
        "vietnamese": "(C) Nó ở ngay phía cuối hành lang."
      }
    ],
    "questions": [
      {
        "num": 15,
        "question": "I'll be out of the office this afternoon.",
        "vietnameseQuestion": "Chiều nay tôi sẽ vắng mặt ở văn phòng.",
        "options": [
          {
            "key": "A",
            "text": "An awfully long commute.",
            "vietnamese": "Một quãng đường đi làm dài khủng khiếp."
          },
          {
            "key": "B",
            "text": "Okay. I'll update your schedule.",
            "vietnamese": "Được rồi. Tôi sẽ cập nhật lịch trình của bạn."
          },
          {
            "key": "C",
            "text": "It's right down the hallway.",
            "vietnamese": "Nó ở ngay phía cuối hành lang."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Câu thông báo vắng mặt. Lựa chọn (B) đáp lại hợp lý rằng đồng nghiệp/trợ lý sẽ cập nhật lại lịch trình làm việc."
      }
    ],
    "vocabulary": [
      {
        "word": "out of the office",
        "meaning": "vắng mặt ở văn phòng",
        "partOfSpeech": "phr"
      },
      {
        "word": "schedule",
        "meaning": "lịch trình, lịch làm việc",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-16",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 16",
    "title": "Part 2 - Câu 16: Kế hoạch nghỉ phép sau dự án",
    "audioSrc": "/audio/test5_2024.mp3",
    "startTime": 478.4,
    "endTime": 498.4,
    "transcript": [
      {
        "id": "p2-16-q",
        "speaker": "Speaker 1",
        "text": "Are you taking a vacation once this project is over?",
        "vietnamese": "Bạn có đi nghỉ mát sau khi dự án này kết thúc không?"
      },
      {
        "id": "p2-16-a",
        "speaker": "Speaker 2",
        "text": "(A) Yes. I'm planning a trip to Barcelona.",
        "vietnamese": "(A) Có. Tôi đang lên kế hoạch cho một chuyến đi tới Barcelona."
      },
      {
        "id": "p2-16-b",
        "speaker": "Speaker 2",
        "text": "(B) This is your second time, isn't it?",
        "vietnamese": "(B) Đây là lần thứ hai của bạn phải không?"
      },
      {
        "id": "p2-16-c",
        "speaker": "Speaker 2",
        "text": "(C) Blueprints for a high-rise building.",
        "vietnamese": "(C) Bản thiết kế cho một tòa nhà cao tầng."
      }
    ],
    "questions": [
      {
        "num": 16,
        "question": "Are you taking a vacation once this project is over?",
        "vietnameseQuestion": "Bạn có đi nghỉ mát sau khi dự án này kết thúc không?",
        "options": [
          {
            "key": "A",
            "text": "Yes. I'm planning a trip to Barcelona.",
            "vietnamese": "Có. Tôi đang lên kế hoạch cho một chuyến đi tới Barcelona."
          },
          {
            "key": "B",
            "text": "This is your second time, isn't it?",
            "vietnamese": "Đây là lần thứ hai của bạn phải không?"
          },
          {
            "key": "C",
            "text": "Blueprints for a high-rise building.",
            "vietnamese": "Bản thiết kế cho một tòa nhà cao tầng."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Câu hỏi về kế hoạch nghỉ phép. Lựa chọn (A) trả lời có và chia sẻ địa điểm sắp tới là Barcelona."
      }
    ],
    "vocabulary": [
      {
        "word": "vacation",
        "meaning": "kỳ nghỉ",
        "partOfSpeech": "n"
      },
      {
        "word": "blueprint",
        "meaning": "bản vẽ thiết kế",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-17",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 17",
    "title": "Part 2 - Câu 17: Đề xuất đăng báo cáo bán hàng",
    "audioSrc": "/audio/test5_2024.mp3",
    "startTime": 498.4,
    "endTime": 516.4,
    "transcript": [
      {
        "id": "p2-17-q",
        "speaker": "Speaker 1",
        "text": "Let's post the sales report to our team's webpage.",
        "vietnamese": "Hãy đăng báo cáo doanh số lên trang web của nhóm chúng ta đi."
      },
      {
        "id": "p2-17-a",
        "speaker": "Speaker 2",
        "text": "(A) We're sharing a taxi to the airport.",
        "vietnamese": "(A) Chúng tôi đang đi chung taxi ra sân bay."
      },
      {
        "id": "p2-17-b",
        "speaker": "Speaker 2",
        "text": "(B) I can do that.",
        "vietnamese": "(B) Tôi có thể làm việc đó."
      },
      {
        "id": "p2-17-c",
        "speaker": "Speaker 2",
        "text": "(C) A recent hiring decision.",
        "vietnamese": "(C) Một quyết định tuyển dụng gần đây."
      }
    ],
    "questions": [
      {
        "num": 17,
        "question": "Let's post the sales report to our team's webpage.",
        "vietnameseQuestion": "Hãy đăng báo cáo doanh số lên trang web của nhóm chúng ta đi.",
        "options": [
          {
            "key": "A",
            "text": "We're sharing a taxi to the airport.",
            "vietnamese": "Chúng tôi đang đi chung taxi ra sân bay."
          },
          {
            "key": "B",
            "text": "I can do that.",
            "vietnamese": "Tôi có thể làm việc đó."
          },
          {
            "key": "C",
            "text": "A recent hiring decision.",
            "vietnamese": "Một quyết định tuyển dụng gần đây."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Câu rủ/đề xuất (\"Let's...\"). Lựa chọn (B) nhận trách nhiệm thực hiện việc đăng báo cáo."
      }
    ],
    "vocabulary": [
      {
        "word": "post",
        "meaning": "đăng tải",
        "partOfSpeech": "v"
      },
      {
        "word": "sales report",
        "meaning": "báo cáo bán hàng",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-18",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 18",
    "title": "Part 2 - Câu 18: Lựa chọn hãng hàng không",
    "audioSrc": "/audio/test5_2024.mp3",
    "startTime": 516.4,
    "endTime": 537.4,
    "transcript": [
      {
        "id": "p2-18-q",
        "speaker": "Speaker 1",
        "text": "Which airline are you planning on using?",
        "vietnamese": "Bạn dự định sẽ bay hãng hàng không nào?"
      },
      {
        "id": "p2-18-a",
        "speaker": "Speaker 2",
        "text": "(A) The usual one.",
        "vietnamese": "(A) Hãng quen thuộc như thường lệ."
      },
      {
        "id": "p2-18-b",
        "speaker": "Speaker 2",
        "text": "(B) A one-way ticket.",
        "vietnamese": "(B) Vé một chiều."
      },
      {
        "id": "p2-18-c",
        "speaker": "Speaker 2",
        "text": "(C) Yes. You can use mine.",
        "vietnamese": "(C) Có. Bạn có thể dùng của tôi."
      }
    ],
    "questions": [
      {
        "num": 18,
        "question": "Which airline are you planning on using?",
        "vietnameseQuestion": "Bạn dự định sẽ bay hãng hàng không nào?",
        "options": [
          {
            "key": "A",
            "text": "The usual one.",
            "vietnamese": "Hãng quen thuộc như thường lệ."
          },
          {
            "key": "B",
            "text": "A one-way ticket.",
            "vietnamese": "Vé một chiều."
          },
          {
            "key": "C",
            "text": "Yes. You can use mine.",
            "vietnamese": "Có. Bạn có thể dùng của tôi."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Câu hỏi chọn hãng hàng không. Lựa chọn (A) trả lời ngắn gọn là hãng bay quen thuộc thường dùng."
      }
    ],
    "vocabulary": [
      {
        "word": "airline",
        "meaning": "hãng hàng không",
        "partOfSpeech": "n"
      },
      {
        "word": "the usual",
        "meaning": "cái quen thuộc như thường lệ",
        "partOfSpeech": "phrase"
      }
    ]
  },
  {
    "id": "part2-19",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 19",
    "title": "Part 2 - Câu 19: Địa điểm chuyển linh kiện",
    "audioSrc": "/audio/test5_2024.mp3",
    "startTime": 537.4,
    "endTime": 558.0,
    "transcript": [
      {
        "id": "p2-19-q",
        "speaker": "Speaker 1",
        "text": "Where's this shipment of parts being sent?",
        "vietnamese": "Lô hàng linh kiện này đang được gửi đi đâu vậy?"
      },
      {
        "id": "p2-19-a",
        "speaker": "Speaker 2",
        "text": "(A) Around 5:30 this evening.",
        "vietnamese": "(A) Khoảng 5 giờ 30 chiều nay."
      },
      {
        "id": "p2-19-b",
        "speaker": "Speaker 2",
        "text": "(B) To the assembly plant in Dublin.",
        "vietnamese": "(B) Tới nhà máy lắp ráp ở Dublin."
      },
      {
        "id": "p2-19-c",
        "speaker": "Speaker 2",
        "text": "(C) Just half the order.",
        "vietnamese": "(C) Chỉ một nửa đơn hàng."
      }
    ],
    "questions": [
      {
        "num": 19,
        "question": "Where's this shipment of parts being sent?",
        "vietnameseQuestion": "Lô hàng linh kiện này đang được gửi đi đâu vậy?",
        "options": [
          {
            "key": "A",
            "text": "Around 5:30 this evening.",
            "vietnamese": "Khoảng 5 giờ 30 chiều nay."
          },
          {
            "key": "B",
            "text": "To the assembly plant in Dublin.",
            "vietnamese": "Tới nhà máy lắp ráp ở Dublin."
          },
          {
            "key": "C",
            "text": "Just half the order.",
            "vietnamese": "Chỉ một nửa đơn hàng."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Câu hỏi nơi chốn (\"Where...\"). Lựa chọn (B) cung cấp đúng điểm đến là nhà máy lắp ráp ở Dublin."
      }
    ],
    "vocabulary": [
      {
        "word": "shipment",
        "meaning": "lô hàng vận chuyển",
        "partOfSpeech": "n"
      },
      {
        "word": "assembly plant",
        "meaning": "nhà máy lắp ráp",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-20",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 20",
    "title": "Part 2 - Câu 20: Người thanh toán bữa trưa",
    "audioSrc": "/audio/test5_2024.mp3",
    "startTime": 558.0,
    "endTime": 577.2,
    "transcript": [
      {
        "id": "p2-20-q",
        "speaker": "Speaker 1",
        "text": "Who paid for lunch?",
        "vietnamese": "Ai đã thanh toán cho bữa trưa vậy?"
      },
      {
        "id": "p2-20-a",
        "speaker": "Speaker 2",
        "text": "(A) I just ate.",
        "vietnamese": "(A) Tôi vừa mới ăn xong."
      },
      {
        "id": "p2-20-b",
        "speaker": "Speaker 2",
        "text": "(B) It closes at 5.",
        "vietnamese": "(B) Nó đóng cửa lúc 5 giờ."
      },
      {
        "id": "p2-20-c",
        "speaker": "Speaker 2",
        "text": "(C) Alberto did.",
        "vietnamese": "(C) Alberto đã trả đấy."
      }
    ],
    "questions": [
      {
        "num": 20,
        "question": "Who paid for lunch?",
        "vietnameseQuestion": "Ai đã thanh toán cho bữa trưa vậy?",
        "options": [
          {
            "key": "A",
            "text": "I just ate.",
            "vietnamese": "Tôi vừa mới ăn xong."
          },
          {
            "key": "B",
            "text": "It closes at 5.",
            "vietnamese": "Nó đóng cửa lúc 5 giờ."
          },
          {
            "key": "C",
            "text": "Alberto did.",
            "vietnamese": "Alberto đã trả đấy."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Câu hỏi danh tính (\"Who...\"). Lựa chọn (C) chỉ rõ người trả tiền là Alberto."
      }
    ],
    "vocabulary": [
      {
        "word": "pay for",
        "meaning": "thanh toán, trả tiền cho",
        "partOfSpeech": "v"
      }
    ]
  },
  {
    "id": "part2-21",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 21",
    "title": "Part 2 - Câu 21: Số lượng nhân viên trong phòng ban",
    "audioSrc": "/audio/test5_2024.mp3",
    "startTime": 577.2,
    "endTime": 598.6,
    "transcript": [
      {
        "id": "p2-21-q",
        "speaker": "Speaker 1",
        "text": "How many employees work in your department?",
        "vietnamese": "Có bao nhiêu nhân viên làm việc trong phòng ban của bạn?"
      },
      {
        "id": "p2-21-a",
        "speaker": "Speaker 2",
        "text": "(A) I don't mind taking notes at the meeting.",
        "vietnamese": "(A) Tôi không phiền việc ghi chép tại cuộc họp đâu."
      },
      {
        "id": "p2-21-b",
        "speaker": "Speaker 2",
        "text": "(B) A couple dozen, I think.",
        "vietnamese": "(B) Khoảng hai chục người, tôi nghĩ vậy."
      },
      {
        "id": "p2-21-c",
        "speaker": "Speaker 2",
        "text": "(C) It's 7 meters long.",
        "vietnamese": "(C) Nó dài 7 mét."
      }
    ],
    "questions": [
      {
        "num": 21,
        "question": "How many employees work in your department?",
        "vietnameseQuestion": "Có bao nhiêu nhân viên làm việc trong phòng ban của bạn?",
        "options": [
          {
            "key": "A",
            "text": "I don't mind taking notes at the meeting.",
            "vietnamese": "Tôi không phiền việc ghi chép tại cuộc họp đâu."
          },
          {
            "key": "B",
            "text": "A couple dozen, I think.",
            "vietnamese": "Khoảng hai chục người, tôi nghĩ vậy."
          },
          {
            "key": "C",
            "text": "It's 7 meters long.",
            "vietnamese": "Nó dài 7 mét."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Câu hỏi số lượng (\"How many...\"). Lựa chọn (B) ước lượng số người là khoảng hơn 20 người (a couple dozen)."
      }
    ],
    "vocabulary": [
      {
        "word": "a couple dozen",
        "meaning": "khoảng hai chục (24)",
        "partOfSpeech": "phrase"
      },
      {
        "word": "take notes",
        "meaning": "ghi chép",
        "partOfSpeech": "phr"
      }
    ]
  },
  {
    "id": "part2-22",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 22",
    "title": "Part 2 - Câu 22: Khởi hành đi học khóa đào tạo",
    "audioSrc": "/audio/test5_2024.mp3",
    "startTime": 598.6,
    "endTime": 622.7,
    "transcript": [
      {
        "id": "p2-22-q",
        "speaker": "Speaker 1",
        "text": "We should leave for our training course soon, shouldn't we?",
        "vietnamese": "Chúng ta nên xuất phát đi đến khóa đào tạo sớm chứ nhỉ?"
      },
      {
        "id": "p2-22-a",
        "speaker": "Speaker 2",
        "text": "(A) We still have a few minutes.",
        "vietnamese": "(A) Chúng ta vẫn còn vài phút nữa mà."
      },
      {
        "id": "p2-22-b",
        "speaker": "Speaker 2",
        "text": "(B) There's a map on the wall.",
        "vietnamese": "(B) Có một tấm bản đồ trên tường."
      },
      {
        "id": "p2-22-c",
        "speaker": "Speaker 2",
        "text": "(C) Two sessions per day.",
        "vietnamese": "(C) Hai buổi mỗi ngày."
      }
    ],
    "questions": [
      {
        "num": 22,
        "question": "We should leave for our training course soon, shouldn't we?",
        "vietnameseQuestion": "Chúng ta nên xuất phát đi đến khóa đào tạo sớm chứ nhỉ?",
        "options": [
          {
            "key": "A",
            "text": "We still have a few minutes.",
            "vietnamese": "Chúng ta vẫn còn vài phút nữa mà."
          },
          {
            "key": "B",
            "text": "There's a map on the wall.",
            "vietnamese": "Có một tấm bản đồ trên tường."
          },
          {
            "key": "C",
            "text": "Two sessions per day.",
            "vietnamese": "Hai buổi mỗi ngày."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Câu hỏi gợi ý nên đi sớm. Lựa chọn (A) chỉ ra rằng vẫn còn vài phút nữa nên chưa cần vội."
      }
    ],
    "vocabulary": [
      {
        "word": "training course",
        "meaning": "khóa đào tạo",
        "partOfSpeech": "n"
      },
      {
        "word": "leave for",
        "meaning": "xuất phát đi đâu",
        "partOfSpeech": "v"
      }
    ]
  },
  {
    "id": "part2-23",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 23",
    "title": "Part 2 - Câu 23: Hạn mức chi phí công tác",
    "audioSrc": "/audio/test5_2024.mp3",
    "startTime": 622.7,
    "endTime": 641.5,
    "transcript": [
      {
        "id": "p2-23-q",
        "speaker": "Speaker 1",
        "text": "Isn't there a limit on travel expenses?",
        "vietnamese": "Chẳng phải có hạn mức cho chi phí công tác sao?"
      },
      {
        "id": "p2-23-a",
        "speaker": "Speaker 2",
        "text": "(A) To fix the vending machine.",
        "vietnamese": "(A) Để sửa máy bán hàng tự động."
      },
      {
        "id": "p2-23-b",
        "speaker": "Speaker 2",
        "text": "(B) 00 per day.",
        "vietnamese": "(B) 100 đô la mỗi ngày."
      },
      {
        "id": "p2-23-c",
        "speaker": "Speaker 2",
        "text": "(C) Next to the travel agency.",
        "vietnamese": "(C) Bên cạnh công ty du lịch."
      }
    ],
    "questions": [
      {
        "num": 23,
        "question": "Isn't there a limit on travel expenses?",
        "vietnameseQuestion": "Chẳng phải có hạn mức cho chi phí công tác sao?",
        "options": [
          {
            "key": "A",
            "text": "To fix the vending machine.",
            "vietnamese": "Để sửa máy bán hàng tự động."
          },
          {
            "key": "B",
            "text": "00 per day.",
            "vietnamese": "100 đô la mỗi ngày."
          },
          {
            "key": "C",
            "text": "Next to the travel agency.",
            "vietnamese": "Bên cạnh công ty du lịch."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Câu hỏi phủ định xác nhận hạn mức chi tiêu. Lựa chọn (B) đưa ra con số định mức cụ thể: 100 đô la/ngày."
      }
    ],
    "vocabulary": [
      {
        "word": "limit",
        "meaning": "hạn mức, giới hạn",
        "partOfSpeech": "n"
      },
      {
        "word": "travel expenses",
        "meaning": "chi phí đi lại, công tác",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-24",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 24",
    "title": "Part 2 - Câu 24: Thời điểm bày tỏ nguyện vọng thăng tiến",
    "audioSrc": "/audio/test5_2024.mp3",
    "startTime": 641.5,
    "endTime": 666.2,
    "transcript": [
      {
        "id": "p2-24-q",
        "speaker": "Speaker 1",
        "text": "When should I tell the director that I'm interested in the management position?",
        "vietnamese": "Khi nào tôi nên nói với giám đốc rằng tôi quan tâm đến vị trí quản lý?"
      },
      {
        "id": "p2-24-a",
        "speaker": "Speaker 2",
        "text": "(A) Yes, we're extending our business hours.",
        "vietnamese": "(A) Vâng, chúng tôi đang kéo dài giờ làm việc."
      },
      {
        "id": "p2-24-b",
        "speaker": "Speaker 2",
        "text": "(B) Didn't Andre direct the play?",
        "vietnamese": "(B) Chẳng phải Andre đã đạo diễn vở kịch sao?"
      },
      {
        "id": "p2-24-c",
        "speaker": "Speaker 2",
        "text": "(C) I'm not on the hiring team.",
        "vietnamese": "(C) Tôi không nằm trong nhóm tuyển dụng."
      }
    ],
    "questions": [
      {
        "num": 24,
        "question": "When should I tell the director that I'm interested in the management position?",
        "vietnameseQuestion": "Khi nào tôi nên nói với giám đốc rằng tôi quan tâm đến vị trí quản lý?",
        "options": [
          {
            "key": "A",
            "text": "Yes, we're extending our business hours.",
            "vietnamese": "Vâng, chúng tôi đang kéo dài giờ làm việc."
          },
          {
            "key": "B",
            "text": "Didn't Andre direct the play?",
            "vietnamese": "Chẳng phải Andre đã đạo diễn vở kịch sao?"
          },
          {
            "key": "C",
            "text": "I'm not on the hiring team.",
            "vietnamese": "Tôi không nằm trong nhóm tuyển dụng."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Câu hỏi xin lời khuyên thời điểm. Lựa chọn (C) gián tiếp từ chối đưa ra lời khuyên vì người nói không thuộc hội đồng tuyển dụng."
      }
    ],
    "vocabulary": [
      {
        "word": "management position",
        "meaning": "vị trí quản lý",
        "partOfSpeech": "n"
      },
      {
        "word": "hiring team",
        "meaning": "hội đồng/nhóm tuyển dụng",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-25",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 25",
    "title": "Part 2 - Câu 25: Thay đổi bài trí quầy giày dép",
    "audioSrc": "/audio/test5_2024.mp3",
    "startTime": 666.2,
    "endTime": 687.1,
    "transcript": [
      {
        "id": "p2-25-q",
        "speaker": "Speaker 1",
        "text": "The layout of the footwear department has changed.",
        "vietnamese": "Cách bài trí của quầy giày dép đã bị thay đổi rồi."
      },
      {
        "id": "p2-25-a",
        "speaker": "Speaker 2",
        "text": "(A) There's a charging station in the cafe.",
        "vietnamese": "(A) Có một trạm sạc trong quán cà phê."
      },
      {
        "id": "p2-25-b",
        "speaker": "Speaker 2",
        "text": "(B) Yes, a three bedroom apartment.",
        "vietnamese": "(B) Vâng, một căn hộ ba phòng ngủ."
      },
      {
        "id": "p2-25-c",
        "speaker": "Speaker 2",
        "text": "(C) The store has a new manager.",
        "vietnamese": "(C) Cửa hàng có một người quản lý mới."
      }
    ],
    "questions": [
      {
        "num": 25,
        "question": "The layout of the footwear department has changed.",
        "vietnameseQuestion": "Cách bài trí của quầy giày dép đã bị thay đổi rồi.",
        "options": [
          {
            "key": "A",
            "text": "There's a charging station in the cafe.",
            "vietnamese": "Có một trạm sạc trong quán cà phê."
          },
          {
            "key": "B",
            "text": "Yes, a three bedroom apartment.",
            "vietnamese": "Vâng, một căn hộ ba phòng ngủ."
          },
          {
            "key": "C",
            "text": "The store has a new manager.",
            "vietnamese": "Cửa hàng có một người quản lý mới."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Câu trần thuật về sự thay đổi bố cục. Lựa chọn (C) giải thích nguyên nhân là do cửa hàng có quản lý mới."
      }
    ],
    "vocabulary": [
      {
        "word": "layout",
        "meaning": "bố cục, cách bài trí",
        "partOfSpeech": "n"
      },
      {
        "word": "footwear",
        "meaning": "giày dép",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-26",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 26",
    "title": "Part 2 - Câu 26: Xem xét báo cáo doanh thu",
    "audioSrc": "/audio/test5_2024.mp3",
    "startTime": 687.1,
    "endTime": 709.8,
    "transcript": [
      {
        "id": "p2-26-q",
        "speaker": "Speaker 1",
        "text": "Can you look at this month's revenue report?",
        "vietnamese": "Bạn có thể xem qua báo cáo doanh thu tháng này được không?"
      },
      {
        "id": "p2-26-a",
        "speaker": "Speaker 2",
        "text": "(A) The news program is informative.",
        "vietnamese": "(A) Chương trình tin tức rất nhiều thông tin hữu ích."
      },
      {
        "id": "p2-26-b",
        "speaker": "Speaker 2",
        "text": "(B) I have some free time tomorrow afternoon.",
        "vietnamese": "(B) Chiều mai tôi có chút thời gian rảnh."
      },
      {
        "id": "p2-26-c",
        "speaker": "Speaker 2",
        "text": "(C) He started that position in July.",
        "vietnamese": "(C) Anh ấy đã bắt đầu vị trí đó vào tháng Bảy."
      }
    ],
    "questions": [
      {
        "num": 26,
        "question": "Can you look at this month's revenue report?",
        "vietnameseQuestion": "Bạn có thể xem qua báo cáo doanh thu tháng này được không?",
        "options": [
          {
            "key": "A",
            "text": "The news program is informative.",
            "vietnamese": "Chương trình tin tức rất nhiều thông tin hữu ích."
          },
          {
            "key": "B",
            "text": "I have some free time tomorrow afternoon.",
            "vietnamese": "Chiều mai tôi có chút thời gian rảnh."
          },
          {
            "key": "C",
            "text": "He started that position in July.",
            "vietnamese": "Anh ấy đã bắt đầu vị trí đó vào tháng Bảy."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Câu nhờ vả xem báo cáo. Lựa chọn (B) đồng ý gián tiếp bằng cách hẹn thời gian rảnh vào chiều mai."
      }
    ],
    "vocabulary": [
      {
        "word": "revenue report",
        "meaning": "báo cáo doanh thu",
        "partOfSpeech": "n"
      },
      {
        "word": "informative",
        "meaning": "bổ ích, nhiều thông tin",
        "partOfSpeech": "adj"
      }
    ]
  },
  {
    "id": "part2-27",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 27",
    "title": "Part 2 - Câu 27: Nguyên nhân chưa thay thế cửa sổ",
    "audioSrc": "/audio/test5_2024.mp3",
    "startTime": 709.8,
    "endTime": 731.5,
    "transcript": [
      {
        "id": "p2-27-q",
        "speaker": "Speaker 1",
        "text": "Why haven't the windows been replaced yet?",
        "vietnamese": "Tại sao các cửa sổ vẫn chưa được thay thế?"
      },
      {
        "id": "p2-27-a",
        "speaker": "Speaker 2",
        "text": "(A) Not too much wind, no.",
        "vietnamese": "(A) Không quá nhiều gió, không."
      },
      {
        "id": "p2-27-b",
        "speaker": "Speaker 2",
        "text": "(B) Look in the filing cabinet.",
        "vietnamese": "(B) Hãy tìm trong tủ đựng hồ sơ."
      },
      {
        "id": "p2-27-c",
        "speaker": "Speaker 2",
        "text": "(C) Did you see the cost estimate?",
        "vietnamese": "(C) Bạn đã xem bản ước tính chi phí chưa?"
      }
    ],
    "questions": [
      {
        "num": 27,
        "question": "Why haven't the windows been replaced yet?",
        "vietnameseQuestion": "Tại sao các cửa sổ vẫn chưa được thay thế?",
        "options": [
          {
            "key": "A",
            "text": "Not too much wind, no.",
            "vietnamese": "Không quá nhiều gió, không."
          },
          {
            "key": "B",
            "text": "Look in the filing cabinet.",
            "vietnamese": "Hãy tìm trong tủ đựng hồ sơ."
          },
          {
            "key": "C",
            "text": "Did you see the cost estimate?",
            "vietnamese": "Bạn đã xem bản ước tính chi phí chưa?"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Câu hỏi lý do chưa thay cửa sổ. Lựa chọn (C) dùng câu hỏi ngược ám chỉ chi phí quá đắt đỏ trong bản ước tính giá."
      }
    ],
    "vocabulary": [
      {
        "word": "replace",
        "meaning": "thay thế",
        "partOfSpeech": "v"
      },
      {
        "word": "cost estimate",
        "meaning": "ước tính chi phí, dự toán",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-28",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 28",
    "title": "Part 2 - Câu 28: Hành lý vượt quá trọng lượng quy định",
    "audioSrc": "/audio/test5_2024.mp3",
    "startTime": 731.5,
    "endTime": 752.6,
    "transcript": [
      {
        "id": "p2-28-q",
        "speaker": "Speaker 1",
        "text": "Isn't your suitcase going to be heavier than the permitted weight?",
        "vietnamese": "Chẳng phải va li của bạn sẽ nặng hơn trọng lượng cho phép sao?"
      },
      {
        "id": "p2-28-a",
        "speaker": "Speaker 2",
        "text": "(A) The building permit arrived today.",
        "vietnamese": "(A) Giấy phép xây dựng đã tới hôm nay."
      },
      {
        "id": "p2-28-b",
        "speaker": "Speaker 2",
        "text": "(B) There are seats in the lobby.",
        "vietnamese": "(B) Có chỗ ngồi ở sảnh chờ."
      },
      {
        "id": "p2-28-c",
        "speaker": "Speaker 2",
        "text": "(C) I'll have to pay a little bit extra.",
        "vietnamese": "(C) Tôi sẽ phải trả thêm một ít phí."
      }
    ],
    "questions": [
      {
        "num": 28,
        "question": "Isn't your suitcase going to be heavier than the permitted weight?",
        "vietnameseQuestion": "Chẳng phải va li của bạn sẽ nặng hơn trọng lượng cho phép sao?",
        "options": [
          {
            "key": "A",
            "text": "The building permit arrived today.",
            "vietnamese": "Giấy phép xây dựng đã tới hôm nay."
          },
          {
            "key": "B",
            "text": "There are seats in the lobby.",
            "vietnamese": "Có chỗ ngồi ở sảnh chờ."
          },
          {
            "key": "C",
            "text": "I'll have to pay a little bit extra.",
            "vietnamese": "Tôi sẽ phải trả thêm một ít phí."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Câu hỏi xác nhận hành lý quá cước. Lựa chọn (C) thừa nhận thực tế này và cho biết người nói chấp nhận trả thêm phí."
      }
    ],
    "vocabulary": [
      {
        "word": "permitted weight",
        "meaning": "trọng lượng cho phép",
        "partOfSpeech": "n"
      },
      {
        "word": "extra",
        "meaning": "thêm, phụ trội",
        "partOfSpeech": "adj/adv"
      }
    ]
  },
  {
    "id": "part2-29",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 29",
    "title": "Part 2 - Câu 29: Nhà sản xuất động cơ máy móc",
    "audioSrc": "/audio/test5_2024.mp3",
    "startTime": 752.6,
    "endTime": 775.5,
    "transcript": [
      {
        "id": "p2-29-q",
        "speaker": "Speaker 1",
        "text": "Who manufactures the engines for our machines?",
        "vietnamese": "Ai sản xuất động cơ cho các máy móc của chúng ta vậy?"
      },
      {
        "id": "p2-29-a",
        "speaker": "Speaker 2",
        "text": "(A) Cogee is in charge of supplier contracts.",
        "vietnamese": "(A) Cogee chịu trách nhiệm về các hợp đồng với nhà cung cấp."
      },
      {
        "id": "p2-29-b",
        "speaker": "Speaker 2",
        "text": "(B) I'm sorry, the storage room is full.",
        "vietnamese": "(B) Tôi xin lỗi, phòng kho đã đầy rồi."
      },
      {
        "id": "p2-29-c",
        "speaker": "Speaker 2",
        "text": "(C) That's a cargo airplane.",
        "vietnamese": "(C) Đó là một chiếc máy bay chở hàng."
      }
    ],
    "questions": [
      {
        "num": 29,
        "question": "Who manufactures the engines for our machines?",
        "vietnameseQuestion": "Ai sản xuất động cơ cho các máy móc của chúng ta vậy?",
        "options": [
          {
            "key": "A",
            "text": "Cogee is in charge of supplier contracts.",
            "vietnamese": "Cogee chịu trách nhiệm về các hợp đồng với nhà cung cấp."
          },
          {
            "key": "B",
            "text": "I'm sorry, the storage room is full.",
            "vietnamese": "Tôi xin lỗi, phòng kho đã đầy rồi."
          },
          {
            "key": "C",
            "text": "That's a cargo airplane.",
            "vietnamese": "Đó là một chiếc máy bay chở hàng."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Câu hỏi danh tính nhà sản xuất. Lựa chọn (A) chuyển hướng đến người nắm thông tin này là Cogee phụ trách nhà cung ứng."
      }
    ],
    "vocabulary": [
      {
        "word": "manufacture",
        "meaning": "sản xuất, chế tạo",
        "partOfSpeech": "v"
      },
      {
        "word": "in charge of",
        "meaning": "chịu trách nhiệm, phụ trách",
        "partOfSpeech": "phr"
      }
    ]
  },
  {
    "id": "part2-30",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 30",
    "title": "Part 2 - Câu 30: Lựa chọn địa điểm gặp mặt tại cửa hàng",
    "audioSrc": "/audio/test5_2024.mp3",
    "startTime": 775.5,
    "endTime": 801.4,
    "transcript": [
      {
        "id": "p2-30-q",
        "speaker": "Speaker 1",
        "text": "Should we meet at the department store on Fifth Street or the one on Grover Lane?",
        "vietnamese": "Chúng ta nên gặp nhau ở cửa hàng bách hóa trên Phố số 5 hay cửa hàng trên Đường Grover?"
      },
      {
        "id": "p2-30-a",
        "speaker": "Speaker 2",
        "text": "(A) Let's ask Patricia first.",
        "vietnamese": "(A) Hãy hỏi Patricia trước đã."
      },
      {
        "id": "p2-30-b",
        "speaker": "Speaker 2",
        "text": "(B) No, I don't mind.",
        "vietnamese": "(B) Không, tôi không bận tâm đâu."
      },
      {
        "id": "p2-30-c",
        "speaker": "Speaker 2",
        "text": "(C) How much does it cost?",
        "vietnamese": "(C) Nó có giá bao nhiêu?"
      }
    ],
    "questions": [
      {
        "num": 30,
        "question": "Should we meet at the department store on Fifth Street or the one on Grover Lane?",
        "vietnameseQuestion": "Chúng ta nên gặp nhau ở cửa hàng bách hóa trên Phố số 5 hay cửa hàng trên Đường Grover?",
        "options": [
          {
            "key": "A",
            "text": "Let's ask Patricia first.",
            "vietnamese": "Hãy hỏi Patricia trước đã."
          },
          {
            "key": "B",
            "text": "No, I don't mind.",
            "vietnamese": "Không, tôi không bận tâm đâu."
          },
          {
            "key": "C",
            "text": "How much does it cost?",
            "vietnamese": "Nó có giá bao nhiêu?"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Câu hỏi lựa chọn địa điểm gặp. Lựa chọn (A) đề xuất tham khảo ý kiến của Patricia trước khi đưa ra quyết định."
      }
    ],
    "vocabulary": [
      {
        "word": "department store",
        "meaning": "cửa hàng bách hóa",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-31",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 31",
    "title": "Part 2 - Câu 31: Chương trình biểu diễn buổi tối tại câu lạc bộ",
    "audioSrc": "/audio/test5_2024.mp3",
    "startTime": 801.4,
    "endTime": 818.8,
    "transcript": [
      {
        "id": "p2-31-q",
        "speaker": "Speaker 1",
        "text": "Which band is playing at the club tonight?",
        "vietnamese": "Ban nhạc nào sẽ biểu diễn tại câu lạc bộ tối nay?"
      },
      {
        "id": "p2-31-a",
        "speaker": "Speaker 2",
        "text": "(A) There's always a comedy show on Thursday nights.",
        "vietnamese": "(A) Luôn có chương trình hài kịch vào các tối thứ Năm."
      },
      {
        "id": "p2-31-b",
        "speaker": "Speaker 2",
        "text": "(B) Yes, I've played the piano for many years.",
        "vietnamese": "(B) Vâng, tôi đã chơi đàn piano nhiều năm rồi."
      },
      {
        "id": "p2-31-c",
        "speaker": "Speaker 2",
        "text": "(C) The number one hit.",
        "vietnamese": "(C) Bản nhạc hit số một."
      }
    ],
    "questions": [
      {
        "num": 31,
        "question": "Which band is playing at the club tonight?",
        "vietnameseQuestion": "Ban nhạc nào sẽ biểu diễn tại câu lạc bộ tối nay?",
        "options": [
          {
            "key": "A",
            "text": "There's always a comedy show on Thursday nights.",
            "vietnamese": "Luôn có chương trình hài kịch vào các tối thứ Năm."
          },
          {
            "key": "B",
            "text": "Yes, I've played the piano for many years.",
            "vietnamese": "Vâng, tôi đã chơi đàn piano nhiều năm rồi."
          },
          {
            "key": "C",
            "text": "The number one hit.",
            "vietnamese": "Bản nhạc hit số một."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Câu hỏi ban nhạc nào biểu diễn. Lựa chọn (A) đính chính rằng tối thứ Năm là đêm diễn hài kịch chứ không có ban nhạc."
      }
    ],
    "vocabulary": [
      {
        "word": "comedy show",
        "meaning": "buổi biểu diễn hài kịch",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part3-32-34",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 32 - 34",
    "title": "Part 3 - Câu 32 - 34: Sự cố máy chiếu trong phòng hội nghị",
    "audioSrc": "/audio/test5_2024.mp3",
    "startTime": 852.21,
    "endTime": 932.82,
    "transcript": [
      {
        "id": "p3-32-1",
        "speaker": "Woman",
        "text": "Hi, Shen Chao. I'm practicing my presentation in the conference room across the hall and the projector in there keeps shutting off.",
        "vietnamese": "Chào Shen Chao. Tôi đang tập dượt bài thuyết trình trong phòng hội nghị phía bên kia hành lang và chiếc máy chiếu trong đó cứ liên tục bị tắt."
      },
      {
        "id": "p3-32-2",
        "speaker": "Woman",
        "text": "I think it's overheating. Has this happened to you?",
        "vietnamese": "Tôi nghĩ nó đang bị quá nhiệt. Anh đã từng gặp phải trường hợp này bao giờ chưa?"
      },
      {
        "id": "p3-32-3",
        "speaker": "Man",
        "text": "Oh, that projector is old. It really needs to be replaced.",
        "vietnamese": "Ồ, chiếc máy chiếu đó cũ lắm rồi. Nó thực sự cần phải được thay thế."
      },
      {
        "id": "p3-32-4",
        "speaker": "Man",
        "text": "If I were you, I'd just move to room 204 and practice there. Also, that room has a window. It's much nicer.",
        "vietnamese": "Nếu tôi là cô, tôi sẽ chuyển sang phòng 204 và tập dượt ở đó. Hơn nữa, phòng đó có cửa sổ, thoáng đãng và đẹp hơn nhiều."
      },
      {
        "id": "p3-32-5",
        "speaker": "Woman",
        "text": "Okay, thanks.",
        "vietnamese": "Được rồi, cảm ơn anh nhé."
      },
      {
        "id": "p3-32-6",
        "speaker": "Man",
        "text": "By the way, you'll need a special cable to connect to the control panel in that room. Here, you can use this one. Just leave it plugged in when you're finished.",
        "vietnamese": "Nhân tiện, cô sẽ cần một sợi cáp đặc biệt để kết nối với bảng điều khiển trong căn phòng đó. Đây, cô có thể dùng sợi này. Chỉ cần cứ cắm nó ở đó khi cô xong là được."
      }
    ],
    "questions": [
      {
        "num": 32,
        "question": "What problem does the woman describe?",
        "vietnameseQuestion": "Người phụ nữ miêu tả vấn đề gì?",
        "options": [
          {
            "key": "A",
            "text": "A room is not available.",
            "vietnamese": "Một căn phòng hiện không còn trống."
          },
          {
            "key": "B",
            "text": "A window will not open.",
            "vietnamese": "Một cánh cửa sổ không mở được."
          },
          {
            "key": "C",
            "text": "A projector is not working.",
            "vietnamese": "Một chiếc máy chiếu không hoạt động bình thường."
          },
          {
            "key": "D",
            "text": "The weather has changed suddenly.",
            "vietnamese": "Thời tiết thay đổi đột ngột."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Người phụ nữ giải thích máy chiếu liên tục bị tắt do quá nhiệt: 'the projector in there keeps shutting off. I think it\\'s overheating' (chiếc máy chiếu bị hỏng/không hoạt động)."
      },
      {
        "num": 33,
        "question": "What does the man suggest doing?",
        "vietnameseQuestion": "Người đàn ông đề xuất làm điều gì?",
        "options": [
          {
            "key": "A",
            "text": "Moving to a different room",
            "vietnamese": "Chuyển sang một căn phòng khác"
          },
          {
            "key": "B",
            "text": "Calling a technician",
            "vietnamese": "Gọi cho một kỹ thuật viên"
          },
          {
            "key": "C",
            "text": "Canceling an event",
            "vietnamese": "Hủy bỏ một sự kiện"
          },
          {
            "key": "D",
            "text": "Ordering some supplies",
            "vietnamese": "Đặt mua một số đồ dùng văn phòng phẩm"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Người đàn ông khuyên: 'If I were you, I\\'d just move to room 204 and practice there' (chuyển sang phòng khác)."
      },
      {
        "num": 34,
        "question": "What does the man hand to the woman?",
        "vietnameseQuestion": "Người đàn ông đưa cho người phụ nữ thứ gì?",
        "options": [
          {
            "key": "A",
            "text": "An umbrella",
            "vietnamese": "Một chiếc ô"
          },
          {
            "key": "B",
            "text": "Some keys",
            "vietnamese": "Một vài chiếc chìa khóa"
          },
          {
            "key": "C",
            "text": "A cable",
            "vietnamese": "Một sợi dây cáp"
          },
          {
            "key": "D",
            "text": "Some printouts",
            "vietnamese": "Một số bản in tài liệu"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Người đàn ông đưa cáp kết nối đặc biệt: 'you\\'ll need a special cable to connect to the control panel in that room. Here, you can use this one' (đưa một sợi cáp)."
      }
    ],
    "vocabulary": [
      {
        "word": "projector",
        "meaning": "máy chiếu",
        "partOfSpeech": "n"
      },
      {
        "word": "overheating",
        "meaning": "quá nhiệt, nóng máy quá mức",
        "partOfSpeech": "adj/n"
      },
      {
        "word": "control panel",
        "meaning": "bảng điều khiển",
        "partOfSpeech": "n"
      },
      {
        "word": "plug in",
        "meaning": "cắm phích điện/dây cáp",
        "partOfSpeech": "phr v"
      }
    ]
  },
  {
    "id": "part3-35-37",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 35 - 37",
    "title": "Part 3 - Câu 35 - 37: Đăng ký tại Hội nghị Văn học Portland",
    "audioSrc": "/audio/test5_2024.mp3",
    "startTime": 932.82,
    "endTime": 1002.3,
    "transcript": [
      {
        "id": "p3-35-1",
        "speaker": "Woman",
        "text": "Hi, I'm Amanda Hoffman, and I'm on the panel of publishing experts. I was told to check in here at the registration desk.",
        "vietnamese": "Xin chào, tôi là Amanda Hoffman, tôi thuộc ban chuyên gia xuất bản. Tôi được hướng dẫn đến làm thủ tục tại bàn đăng ký này."
      },
      {
        "id": "p3-35-2",
        "speaker": "Man",
        "text": "Yes, Ms. Hoffman. Welcome to the Portland Literary Conference. Here's your registration packet, which includes a complete schedule of events.",
        "vietnamese": "Vâng, thưa bà Hoffman. Chào mừng bà đến với Hội nghị Văn học Portland. Đây là túi tài liệu đăng ký của bà, trong đó có lịch trình đầy đủ các sự kiện."
      },
      {
        "id": "p3-35-3",
        "speaker": "Woman",
        "text": "Great, thanks.",
        "vietnamese": "Tuyệt quá, cảm ơn anh."
      },
      {
        "id": "p3-35-4",
        "speaker": "Man",
        "text": "Also, please make sure you wear your name badge all weekend so you can access the auditorium and meeting rooms.",
        "vietnamese": "Ngoài ra, xin vui lòng đảm bảo bà luôn đeo thẻ tên trong suốt cuối tuần để có thể vào khán phòng và các phòng họp."
      }
    ],
    "questions": [
      {
        "num": 35,
        "question": "What industry does Amanda Hoffman work in?",
        "vietnameseQuestion": "Amanda Hoffman làm việc trong ngành nghề nào?",
        "options": [
          {
            "key": "A",
            "text": "Hospitality",
            "vietnamese": "Khách sạn - nhà hàng"
          },
          {
            "key": "B",
            "text": "Healthcare",
            "vietnamese": "Chăm sóc sức khỏe"
          },
          {
            "key": "C",
            "text": "Publishing",
            "vietnamese": "Ngành xuất bản"
          },
          {
            "key": "D",
            "text": "Information technology",
            "vietnamese": "Công nghệ thông tin"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Người phụ nữ giới thiệu: 'I\\'m Amanda Hoffman, and I\\'m on the panel of publishing experts' (thuộc ngành xuất bản - Publishing)."
      },
      {
        "num": 36,
        "question": "According to the man, what is included in the registration packet?",
        "vietnameseQuestion": "Theo người đàn ông, gói tài liệu đăng ký bao gồm những gì?",
        "options": [
          {
            "key": "A",
            "text": "A map",
            "vietnamese": "Một tấm bản đồ"
          },
          {
            "key": "B",
            "text": "A gift card",
            "vietnamese": "Một thẻ quà tặng"
          },
          {
            "key": "C",
            "text": "A schedule of events",
            "vietnamese": "Lịch trình các sự kiện"
          },
          {
            "key": "D",
            "text": "A certificate of attendance",
            "vietnamese": "Giấy chứng nhận tham dự"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Người đàn ông thông báo: 'Here\\'s your registration packet, which includes a gift card to thank you for participating' (gói đăng ký bao gồm một thẻ quà tặng - A gift card)."
      },
      {
        "num": 37,
        "question": "What does the man tell the woman to do?",
        "vietnameseQuestion": "Người đàn ông bảo người phụ nữ làm gì?",
        "options": [
          {
            "key": "A",
            "text": "Arrive early",
            "vietnamese": "Đến sớm"
          },
          {
            "key": "B",
            "text": "Pay a fee",
            "vietnamese": "Thanh toán một khoản phí"
          },
          {
            "key": "C",
            "text": "Wear a name badge",
            "vietnamese": "Đeo bảng tên / thẻ tên"
          },
          {
            "key": "D",
            "text": "Choose a menu option",
            "vietnamese": "Chọn một món trong thực đơn"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Người đàn ông yêu cầu: 'we do ask that all panel members arrive 10 minutes beforehand' (đến sớm 10 phút - Arrive early)."
      }
    ],
    "vocabulary": [
      {
        "word": "publishing",
        "meaning": "ngành xuất bản",
        "partOfSpeech": "n"
      },
      {
        "word": "registration desk",
        "meaning": "bàn tiếp tân đăng ký",
        "partOfSpeech": "n"
      },
      {
        "word": "packet",
        "meaning": "gói tài liệu, túi thông tin",
        "partOfSpeech": "n"
      },
      {
        "word": "name badge",
        "meaning": "thẻ đeo ghi tên, bảng tên",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part3-38-40",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 38 - 40",
    "title": "Part 3 - Câu 38 - 40: Mua quà tặng sinh nhật tại cửa hàng trà",
    "audioSrc": "/audio/test5_2024.mp3",
    "startTime": 1002.3,
    "endTime": 1074.52,
    "transcript": [
      {
        "id": "p3-38-1",
        "speaker": "Woman",
        "text": "I'm looking for a gift for my brother's birthday party this weekend. He loves teas, and you have so many varieties.",
        "vietnamese": "Tôi đang tìm một món quà cho bữa tiệc sinh nhật của anh trai tôi vào cuối tuần này. Anh ấy rất thích trà, mà cửa hàng bạn lại có nhiều loại quá."
      },
      {
        "id": "p3-38-2",
        "speaker": "Man",
        "text": "Well, I could recommend a quality brand if you know what type he enjoys.",
        "vietnamese": "À, tôi có thể giới thiệu một thương hiệu chất lượng nếu cô biết anh ấy thích loại trà nào."
      },
      {
        "id": "p3-38-3",
        "speaker": "Woman",
        "text": "Oh, I'm not sure. Hmm. Maybe I should get him a gift card so he can choose his own. That's a good idea. I'll get one for $50. Do your cards have an expiration date?",
        "vietnamese": "Ồ, tôi không chắc lắm. Ừm. Có lẽ tôi nên mua cho anh ấy một thẻ quà tặng để anh ấy tự chọn. Ý kiến hay đấy. Tôi sẽ lấy một thẻ 50 đô la. Thẻ của cửa hàng có hạn sử dụng không?"
      },
      {
        "id": "p3-38-4",
        "speaker": "Man",
        "text": "Yes, we ask that they be used within one year of purchase.",
        "vietnamese": "Có ạ, chúng tôi quy định thẻ phải được sử dụng trong vòng một năm kể từ ngày mua."
      }
    ],
    "questions": [
      {
        "num": 38,
        "question": "What event will the woman attend this weekend?",
        "vietnameseQuestion": "Người phụ nữ sẽ tham dự sự kiện gì vào cuối tuần này?",
        "options": [
          {
            "key": "A",
            "text": "A wedding",
            "vietnamese": "Một đám cưới"
          },
          {
            "key": "B",
            "text": "A birthday party",
            "vietnamese": "Một bữa tiệc sinh nhật"
          },
          {
            "key": "C",
            "text": "A retirement dinner",
            "vietnamese": "Một bữa tiệc tối mừng nghỉ hưu"
          },
          {
            "key": "D",
            "text": "A graduation celebration",
            "vietnamese": "Lễ kỷ niệm tốt nghiệp"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Người phụ nữ nói tìm quà sinh nhật: 'I\\'m looking for a gift for my brother\\'s birthday party this weekend' (tiệc sinh nhật - A birthday party)."
      },
      {
        "num": 39,
        "question": "What does the man offer to do?",
        "vietnameseQuestion": "Người đàn ông đề nghị làm gì?",
        "options": [
          {
            "key": "A",
            "text": "Authorize free shipping",
            "vietnamese": "Cho phép miễn phí vận chuyển"
          },
          {
            "key": "B",
            "text": "Apply a discount",
            "vietnamese": "Áp dụng giảm giá"
          },
          {
            "key": "C",
            "text": "Provide a sample",
            "vietnamese": "Cung cấp mẫu thử"
          },
          {
            "key": "D",
            "text": "Make a recommendation",
            "vietnamese": "Đưa ra lời giới thiệu gợi ý"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Người đàn ông đề xuất: 'I could recommend a quality brand if you know what type he enjoys' (gợi ý nhãn hiệu trà - Make a recommendation)."
      },
      {
        "num": 40,
        "question": "What does the woman ask about?",
        "vietnameseQuestion": "Người phụ nữ hỏi thăm về điều gì?",
        "options": [
          {
            "key": "A",
            "text": "An expiration date",
            "vietnamese": "Hạn sử dụng"
          },
          {
            "key": "B",
            "text": "A manufacturer's guarantee",
            "vietnamese": "Sự bảo đảm từ nhà sản xuất"
          },
          {
            "key": "C",
            "text": "The origin of a product",
            "vietnamese": "Xuất xứ nguồn gốc của sản phẩm"
          },
          {
            "key": "D",
            "text": "The cost of a product",
            "vietnamese": "Giá thành của sản phẩm"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Người phụ nữ hỏi hạn dùng của thẻ quà tặng: 'Do your cards have an expiration date?' (hạn sử dụng - An expiration date)."
      }
    ],
    "vocabulary": [
      {
        "word": "birthday party",
        "meaning": "bữa tiệc sinh nhật",
        "partOfSpeech": "n"
      },
      {
        "word": "recommend",
        "meaning": "gợi ý, giới thiệu",
        "partOfSpeech": "v"
      },
      {
        "word": "gift card",
        "meaning": "thẻ quà tặng",
        "partOfSpeech": "n"
      },
      {
        "word": "expiration date",
        "meaning": "ngày hết hạn, hạn sử dụng",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part3-41-43",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 41 - 43",
    "title": "Part 3 - Câu 41 - 43: Giới thiệu ứng dụng giám sát thiết bị nhà máy",
    "audioSrc": "/audio/test5_2024.mp3",
    "startTime": 1074.52,
    "endTime": 1163.56,
    "transcript": [
      {
        "id": "p3-41-1",
        "speaker": "Woman",
        "text": "Hello, Mr. Delgado. Thanks for taking the time to meet with me today. I'm here representing Apex Software to promote our new industrial monitoring solution.",
        "vietnamese": "Xin chào ông Delgado. Cảm ơn ông đã dành thời gian gặp tôi hôm nay. Tôi đến đây đại diện cho Công ty Phần mềm Apex để giới thiệu giải pháp giám sát công nghiệp mới của chúng tôi."
      },
      {
        "id": "p3-41-2",
        "speaker": "Man",
        "text": "Welcome. We're very interested in keeping track of equipment performance on our manufacturing floor. What does your software do?",
        "vietnamese": "Chào mừng cô. Chúng tôi rất quan tâm đến việc theo dõi hiệu suất thiết bị trên sàn sản xuất. Phần mềm của cô làm được những gì?"
      },
      {
        "id": "p3-41-3",
        "speaker": "Woman",
        "text": "Our company designed a specialized application to monitor machines in real time and alert supervisors about potential malfunctions.",
        "vietnamese": "Công ty chúng tôi đã thiết kế một ứng dụng chuyên biệt để giám sát máy móc theo thời gian thực và cảnh báo cho các giám sát viên về các trục trặc tiềm ẩn."
      },
      {
        "id": "p3-41-4",
        "speaker": "Man",
        "text": "That sounds promising. Will our staff need extensive technical training to learn how to operate it?",
        "vietnamese": "Nghe có vẻ rất triển vọng. Liệu nhân viên của chúng tôi có cần phải đào tạo kỹ thuật chuyên sâu để học cách vận hành nó không?"
      },
      {
        "id": "p3-41-5",
        "speaker": "Woman",
        "text": "Not at all. In fact, our company can provide a step-by-step training video that explains everything clearly for your staff.",
        "vietnamese": "Hoàn toàn không. Trên thực tế, công ty chúng tôi có thể cung cấp một video đào tạo từng bước giải thích rõ ràng mọi thứ cho nhân viên của ông."
      }
    ],
    "questions": [
      {
        "num": 41,
        "question": "Why is the woman visiting?",
        "vietnameseQuestion": "Tại sao người phụ nữ lại đến gặp?",
        "options": [
          {
            "key": "A",
            "text": "To promote a product",
            "vietnamese": "Để quảng bá / giới thiệu một sản phẩm"
          },
          {
            "key": "B",
            "text": "To sign a contract",
            "vietnamese": "Để ký kết hợp đồng"
          },
          {
            "key": "C",
            "text": "To tour a facility",
            "vietnamese": "Để tham quan cơ sở"
          },
          {
            "key": "D",
            "text": "To inspect some equipment",
            "vietnamese": "Để kiểm tra một số thiết bị"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Người phụ nữ nói rõ mục đích: 'I\\'m here representing Apex Software to promote our new industrial monitoring solution' (để giới thiệu sản phẩm mới - promote a product)."
      },
      {
        "num": 42,
        "question": "What did the woman's company design?",
        "vietnameseQuestion": "Công ty của người phụ nữ đã thiết kế sản phẩm gì?",
        "options": [
          {
            "key": "A",
            "text": "A digital security system",
            "vietnamese": "Hệ thống bảo mật kỹ thuật số"
          },
          {
            "key": "B",
            "text": "A device to lift heavy objects",
            "vietnamese": "Thiết bị nâng vật nặng"
          },
          {
            "key": "C",
            "text": "An application to monitor machines",
            "vietnamese": "Ứng dụng giám sát máy móc"
          },
          {
            "key": "D",
            "text": "Protective clothing for workers",
            "vietnamese": "Quần áo bảo hộ cho công nhân"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Người phụ nữ giải thích: 'Our company designed a specialized application to monitor machines in real time' (ứng dụng giám sát máy móc)."
      },
      {
        "num": 43,
        "question": "What does the woman say her company can provide?",
        "vietnameseQuestion": "Người phụ nữ cho biết công ty cô có thể cung cấp điều gì?",
        "options": [
          {
            "key": "A",
            "text": "A new client discount",
            "vietnamese": "Chiết khấu cho khách hàng mới"
          },
          {
            "key": "B",
            "text": "A training video",
            "vietnamese": "Video hướng dẫn đào tạo"
          },
          {
            "key": "C",
            "text": "An extended warranty",
            "vietnamese": "Gói bảo hành mở rộng"
          },
          {
            "key": "D",
            "text": "Customer testimonials",
            "vietnamese": "Lời nhận xét chứng thực của khách hàng"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Người phụ nữ cam kết: 'our company can provide a step-by-step training video that explains everything clearly' (video đào tạo - training video)."
      }
    ],
    "vocabulary": [
      {
        "word": "promote",
        "meaning": "quảng bá, giới thiệu sản phẩm",
        "partOfSpeech": "v"
      },
      {
        "word": "monitor",
        "meaning": "giám sát, theo dõi",
        "partOfSpeech": "v"
      },
      {
        "word": "malfunction",
        "meaning": "sự cố trục trặc kỹ thuật",
        "partOfSpeech": "n"
      },
      {
        "word": "training video",
        "meaning": "video hướng dẫn đào tạo",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part3-44-46",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 44 - 46",
    "title": "Part 3 - Câu 44 - 46: Đi taxi tới Nhà hát Baldwin",
    "audioSrc": "/audio/test5_2024.mp3",
    "startTime": 1163.56,
    "endTime": 1240.88,
    "transcript": [
      {
        "id": "p3-44-1",
        "speaker": "Woman",
        "text": "Hi. I'd like to go to the Baldwin Theatre. The address is 91 Circle Drive.",
        "vietnamese": "Xin chào. Tôi muốn đến Nhà hát Baldwin. Địa chỉ là số 91 Circle Drive."
      },
      {
        "id": "p3-44-2",
        "speaker": "Man",
        "text": "Sure. Please hop in. It's usually about a 15-minute drive from here.",
        "vietnamese": "Chắc chắn rồi. Xin mời cô lên xe. Bình thường từ đây đi mất khoảng 15 phút."
      },
      {
        "id": "p3-44-3",
        "speaker": "Woman",
        "text": "Great. The show starts at 7:30, so that should give me plenty of time.",
        "vietnamese": "Tuyệt quá. Buổi diễn bắt đầu lúc 7:30, nên thời gian như vậy là rất dư dả."
      },
      {
        "id": "p3-44-4",
        "speaker": "Man",
        "text": "Wait a moment... looking at my traffic map, it says Circle Drive is closed due to emergency water main repairs.",
        "vietnamese": "Khoan đã... nhìn vào bản đồ giao thông của tôi, đường Circle Drive đang bị cấm do công tác sửa chữa khẩn cấp đường ống nước."
      },
      {
        "id": "p3-44-5",
        "speaker": "Woman",
        "text": "Oh no! Will that make me late for the performance?",
        "vietnamese": "Ôi không! Liệu việc đó có khiến tôi bị muộn buổi biểu diễn không?"
      },
      {
        "id": "p3-44-6",
        "speaker": "Man",
        "text": "Don't worry, I know the area well. I will take a different route through East Street to get you there on time.",
        "vietnamese": "Đừng lo, tôi rành khu này lắm. Tôi sẽ đi một tuyến đường khác qua Phố East để đưa cô đến đó đúng giờ."
      }
    ],
    "questions": [
      {
        "num": 44,
        "question": "Who most likely is the man?",
        "vietnameseQuestion": "Người đàn ông có khả năng là ai nhất?",
        "options": [
          {
            "key": "A",
            "text": "A theater employee",
            "vietnamese": "Nhân viên nhà hát"
          },
          {
            "key": "B",
            "text": "A taxi driver",
            "vietnamese": "Tài xế taxi"
          },
          {
            "key": "C",
            "text": "A train conductor",
            "vietnamese": "Nhân viên soát vé tàu hỏa"
          },
          {
            "key": "D",
            "text": "A construction worker",
            "vietnamese": "Công nhân xây dựng"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Người phụ nữ lên xe và nói địa chỉ cần tới, người đàn ông mời lên xe và điều khiển phương tiện nên anh ấy là tài xế taxi (A taxi driver)."
      },
      {
        "num": 45,
        "question": "What is causing a problem?",
        "vietnameseQuestion": "Điều gì đang gây ra sự cố / trở ngại?",
        "options": [
          {
            "key": "A",
            "text": "A truck is too heavy.",
            "vietnamese": "Một chiếc xe tải quá nặng."
          },
          {
            "key": "B",
            "text": "An event has been delayed.",
            "vietnamese": "Một sự kiện đã bị hoãn."
          },
          {
            "key": "C",
            "text": "A parking area is full.",
            "vietnamese": "Bãi đỗ xe đã chật kín."
          },
          {
            "key": "D",
            "text": "A road is closed.",
            "vietnamese": "Một con đường bị phong tỏa / cấm đường."
          }
        ],
        "correctAnswer": "D",
        "explanation": "Người đàn ông kiểm tra giao thông và nói: 'Circle Drive is closed due to emergency water main repairs' (đường bị cấm - A road is closed)."
      },
      {
        "num": 46,
        "question": "What does the man say he will do?",
        "vietnameseQuestion": "Người đàn ông nói anh ấy sẽ làm gì?",
        "options": [
          {
            "key": "A",
            "text": "Ask for a refund",
            "vietnamese": "Yêu cầu hoàn tiền"
          },
          {
            "key": "B",
            "text": "Take a different route",
            "vietnamese": "Đi theo một tuyến đường khác"
          },
          {
            "key": "C",
            "text": "Postpone a trip",
            "vietnamese": "Hoãn chuyến đi"
          },
          {
            "key": "D",
            "text": "File a complaint",
            "vietnamese": "Gửi đơn khiếu nại"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Tài xế trấn an: 'I will take a different route through East Street to get you there on time' (đi đường khác - Take a different route)."
      }
    ],
    "vocabulary": [
      {
        "word": "route",
        "meaning": "tuyến đường lộ trình",
        "partOfSpeech": "n"
      },
      {
        "word": "performance",
        "meaning": "buổi biểu diễn",
        "partOfSpeech": "n"
      },
      {
        "word": "repair",
        "meaning": "sự sửa chữa",
        "partOfSpeech": "n/v"
      },
      {
        "word": "on time",
        "meaning": "đúng giờ",
        "partOfSpeech": "idiom"
      }
    ]
  },
  {
    "id": "part3-47-49",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 47 - 49",
    "title": "Part 3 - Câu 47 - 49: Ngân sách công tác tới cuộc họp Vancouver",
    "audioSrc": "/audio/test5_2024.mp3",
    "startTime": 1240.88,
    "endTime": 1324.98,
    "transcript": [
      {
        "id": "p3-47-1",
        "speaker": "Woman",
        "text": "Do you have a minute to discuss the budget for the upcoming Vancouver meeting? I've looked over the travel request you submitted for your team.",
        "vietnamese": "Anh có chút thời gian để trao đổi về ngân sách cho cuộc họp Vancouver sắp tới không? Tôi đã xem qua yêu cầu công tác mà anh nộp cho nhóm của mình."
      },
      {
        "id": "p3-47-2",
        "speaker": "Woman",
        "text": "Last year, we sent only two representatives.",
        "vietnamese": "Năm ngoái, chúng ta chỉ cử có hai đại diện đi thôi mà."
      },
      {
        "id": "p3-47-3",
        "speaker": "Man",
        "text": "Ms. Tamura has just given us approval to send three. Several of our Canadian clients are expanding and want to increase their online offerings.",
        "vietnamese": "Bà Tamura vừa mới phê duyệt cho chúng tôi cử ba người. Một vài khách hàng Canada của chúng ta đang mở rộng và muốn tăng cường các dịch vụ trực tuyến của họ."
      },
      {
        "id": "p3-47-4",
        "speaker": "Woman",
        "text": "I see. Hotel rates in Vancouver are quite expensive though.",
        "vietnamese": "Tôi hiểu rồi. Tuy nhiên giá phòng khách sạn ở Vancouver khá đắt đỏ đấy."
      },
      {
        "id": "p3-47-5",
        "speaker": "Man",
        "text": "Actually, the Renova Hotel is offering a special discount for businesses this month, so the total lodging cost will still remain within our budget.",
        "vietnamese": "Thực ra khách sạn Renova đang có chương trình giảm giá đặc biệt cho doanh nghiệp trong tháng này, vì vậy tổng chi phí lưu trú vẫn sẽ nằm trong ngân sách của chúng ta."
      }
    ],
    "questions": [
      {
        "num": 47,
        "question": "Why does the woman say, \"Last year we sent only two representatives\"?",
        "vietnameseQuestion": "Tại sao người phụ nữ lại nói, \"Năm ngoái chúng ta chỉ cử có hai đại diện\"?",
        "options": [
          {
            "key": "A",
            "text": "To explain a delay",
            "vietnamese": "Để giải thích một sự chậm trễ"
          },
          {
            "key": "B",
            "text": "To compliment a team",
            "vietnamese": "Để khen ngợi một nhóm"
          },
          {
            "key": "C",
            "text": "To point out that an event was unsuccessful",
            "vietnamese": "Để chỉ ra rằng một sự kiện không thành công"
          },
          {
            "key": "D",
            "text": "To question a decision",
            "vietnamese": "Để đặt câu hỏi nghi vấn về một quyết định"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Người phụ nữ nhắc lại năm ngoái chỉ có 2 người để chất vấn và đặt câu hỏi tại sao năm nay nhóm lại xin cử 3 người (To question a decision)."
      },
      {
        "num": 48,
        "question": "According to the man, what do some clients want to do?",
        "vietnameseQuestion": "Theo người đàn ông, một số khách hàng muốn làm gì?",
        "options": [
          {
            "key": "A",
            "text": "Increase their online offerings",
            "vietnamese": "Gia tăng các sản phẩm/dịch vụ trực tuyến của họ"
          },
          {
            "key": "B",
            "text": "Obtain additional financing",
            "vietnamese": "Nhận thêm nguồn vốn tài trợ"
          },
          {
            "key": "C",
            "text": "Open a new office",
            "vietnamese": "Mở một văn phòng mới"
          },
          {
            "key": "D",
            "text": "Recruit more employees",
            "vietnamese": "Tuyển dụng thêm nhân viên"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Người đàn ông giải thích: 'Several of our Canadian clients are expanding and want to increase their online offerings' (tăng cường dịch vụ trực tuyến)."
      },
      {
        "num": 49,
        "question": "According to the man, what is the Renova Hotel offering this month?",
        "vietnameseQuestion": "Theo người đàn ông, khách sạn Renova đang có ưu đãi gì trong tháng này?",
        "options": [
          {
            "key": "A",
            "text": "A new shuttle service",
            "vietnamese": "Dịch vụ xe đưa đón mới"
          },
          {
            "key": "B",
            "text": "A discount for businesses",
            "vietnamese": "Mức chiết khấu giảm giá cho doanh nghiệp"
          },
          {
            "key": "C",
            "text": "A flexible cancellation policy",
            "vietnamese": "Chính sách hủy phòng linh hoạt"
          },
          {
            "key": "D",
            "text": "Complimentary meals",
            "vietnamese": "Các bữa ăn miễn phí"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Người đàn ông nêu rõ: 'the Renova Hotel is offering a special discount for businesses this month' (ưu đãi giảm giá cho doanh nghiệp)."
      }
    ],
    "vocabulary": [
      {
        "word": "representative",
        "meaning": "người đại diện",
        "partOfSpeech": "n"
      },
      {
        "word": "offerings",
        "meaning": "sản phẩm hoặc dịch vụ cung cấp",
        "partOfSpeech": "n"
      },
      {
        "word": "lodging",
        "meaning": "nơi lưu trú, chỗ ở tạm thời",
        "partOfSpeech": "n"
      },
      {
        "word": "within budget",
        "meaning": "nằm trong giới hạn ngân sách",
        "partOfSpeech": "phrase"
      }
    ]
  },
  {
    "id": "part3-50-52",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 50 - 52",
    "title": "Part 3 - Câu 50 - 52: Tăng doanh thu bán vé bảo tàng bằng hoạt động mới",
    "audioSrc": "/audio/test5_2024.mp3",
    "startTime": 1324.98,
    "endTime": 1396.84,
    "transcript": [
      {
        "id": "p3-50-1",
        "speaker": "Woman",
        "text": "Good morning. I wanted to meet today to discuss the recent decline in our museum's ticket sales. You're the outreach coordinator, so I'm hoping you might have some ideas on how to attract more visitors.",
        "vietnamese": "Chào buổi sáng. Tôi muốn gặp hôm nay để thảo luận về sự sụt giảm doanh số bán vé của bảo tàng chúng ta gần đây. Anh là điều phối viên tiếp cận cộng đồng, nên tôi hy vọng anh có vài ý tưởng để thu hút thêm du khách."
      },
      {
        "id": "p3-50-2",
        "speaker": "Man",
        "text": "Well, I recently read an article about a museum in Chicago that introduced an interactive pottery workshop. Families really enjoyed making clay art together.",
        "vietnamese": "À, gần đây tôi có đọc một bài báo về một bảo tàng ở Chicago đã giới thiệu hoạt động xưởng gốm tương tác. Các gia đình thực sự rất thích cùng nhau làm đồ nghệ thuật bằng đất sét."
      },
      {
        "id": "p3-50-3",
        "speaker": "Woman",
        "text": "Introducing a new hands-on activity sounds like a fantastic way to boost attendance! Could you figure out what we would need to set that up?",
        "vietnamese": "Giới thiệu một hoạt động thực hành trải nghiệm mới nghe có vẻ là cách tuyệt vời để tăng lượng khách tham quan! Anh có thể tìm hiểu xem chúng ta sẽ cần những gì để thiết lập hoạt động đó không?"
      },
      {
        "id": "p3-50-4",
        "speaker": "Man",
        "text": "Sure, I will make a list of supplies and check equipment prices this afternoon.",
        "vietnamese": "Chắc chắn rồi, chiều nay tôi sẽ lập một danh sách các vật tư cần thiết và kiểm tra giá thiết bị."
      }
    ],
    "questions": [
      {
        "num": 50,
        "question": "What problem does the woman mention?",
        "vietnameseQuestion": "Người phụ nữ đề cập đến vấn đề gì?",
        "options": [
          {
            "key": "A",
            "text": "A decrease in ticket sales",
            "vietnamese": "Sự sụt giảm doanh số bán vé"
          },
          {
            "key": "B",
            "text": "A lack of exhibition space",
            "vietnamese": "Thiếu không gian trưng bày triển lãm"
          },
          {
            "key": "C",
            "text": "A colleague's resignation",
            "vietnamese": "Sự từ chức của một đồng nghiệp"
          },
          {
            "key": "D",
            "text": "A damaged painting",
            "vietnamese": "Một bức tranh bị hư hại"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Người phụ nữ mở đầu: 'I wanted to meet today to discuss the recent decline in our museum\\'s ticket sales' (suy giảm doanh thu bán vé - A decrease in ticket sales)."
      },
      {
        "num": 51,
        "question": "What does the man suggest doing?",
        "vietnameseQuestion": "Người đàn ông đề xuất làm gì?",
        "options": [
          {
            "key": "A",
            "text": "Relocating an exhibit",
            "vietnamese": "Di dời một khu triển lãm"
          },
          {
            "key": "B",
            "text": "Consulting a specialist",
            "vietnamese": "Tham khảo ý kiến chuyên gia"
          },
          {
            "key": "C",
            "text": "Adding security measures",
            "vietnamese": "Thêm các biện pháp an ninh"
          },
          {
            "key": "D",
            "text": "Introducing a new activity",
            "vietnamese": "Đưa vào một hoạt động mới"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Người đàn ông đề xuất mở xưởng làm gốm tương tác, và người phụ nữ đồng ý: 'Introducing a new hands-on activity sounds like a fantastic way' (đưa vào hoạt động mới)."
      },
      {
        "num": 52,
        "question": "What will the man most likely do next?",
        "vietnameseQuestion": "Người đàn ông nhiều khả năng sẽ làm gì tiếp theo?",
        "options": [
          {
            "key": "A",
            "text": "Write a press release",
            "vietnamese": "Viết thông cáo báo chí"
          },
          {
            "key": "B",
            "text": "Attend a budget meeting",
            "vietnamese": "Tham dự cuộc họp ngân sách"
          },
          {
            "key": "C",
            "text": "Make a list of supplies",
            "vietnamese": "Lập danh sách các vật tư"
          },
          {
            "key": "D",
            "text": "Plan a site visit",
            "vietnamese": "Lên kế hoạch khảo sát thực địa"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Người đàn ông khẳng định: 'I will make a list of supplies and check equipment prices this afternoon' (lập danh sách vật tư - Make a list of supplies)."
      }
    ],
    "vocabulary": [
      {
        "word": "decline",
        "meaning": "sự suy giảm",
        "partOfSpeech": "n"
      },
      {
        "word": "outreach coordinator",
        "meaning": "điều phối viên tiếp cận cộng đồng",
        "partOfSpeech": "n"
      },
      {
        "word": "hands-on",
        "meaning": "thực hành trực tiếp",
        "partOfSpeech": "adj"
      },
      {
        "word": "supplies",
        "meaning": "vật tư, đồ dùng",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part3-53-55",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 53 - 55",
    "title": "Part 3 - Câu 53 - 55: Đặt mua ghế sofa tại cửa hàng nội thất",
    "audioSrc": "/audio/test5_2024.mp3",
    "startTime": 1396.84,
    "endTime": 1483.84,
    "transcript": [
      {
        "id": "p3-53-1",
        "speaker": "Woman",
        "text": "Tilo, this is Ms. Gao, a new customer. She's purchasing an upholstered sofa. We just walked around our showroom and she's decided on our Hudson model.",
        "vietnamese": "Tilo, đây là cô Gao, khách hàng mới của chúng ta. Cô ấy đang mua một chiếc ghế sofa bọc nệm. Chúng tôi vừa đi dạo quanh phòng trưng bày và cô ấy đã quyết định chọn mẫu Hudson."
      },
      {
        "id": "p3-53-2",
        "speaker": "Man",
        "text": "One of our best sellers! Excellent choice.",
        "vietnamese": "Một trong những mẫu bán chạy nhất của chúng tôi đấy! Lựa chọn rất tuyệt vời."
      },
      {
        "id": "p3-53-3",
        "speaker": "Woman",
        "text": "However, Ms. Gao would like to have the sofa upholstered in custom Italian leather instead of standard fabric.",
        "vietnamese": "Tuy nhiên, cô Gao muốn chiếc sofa được bọc bằng da Ý đặt riêng thay vì vải nỉ tiêu chuẩn."
      },
      {
        "id": "p3-53-4",
        "speaker": "Man",
        "text": "Understood. Because it is a custom order, there will be an additional fee of two hundred dollars, and delivery takes about three weeks.",
        "vietnamese": "Tôi hiểu rồi. Vì đây là đơn đặt hàng theo yêu cầu riêng nên sẽ có thêm khoản phụ phí hai trăm đô la, và thời gian giao hàng mất khoảng ba tuần."
      },
      {
        "id": "p3-53-5",
        "speaker": "Woman",
        "text": "That's fine with her. How can we proceed with the paperwork?",
        "vietnamese": "Cô ấy đồng ý điều đó. Chúng tôi có thể tiến hành thủ tục giấy tờ như thế nào?"
      },
      {
        "id": "p3-53-6",
        "speaker": "Man",
        "text": "Before I process the transaction, I will need to see a form of identification, like a driver's license.",
        "vietnamese": "Trước khi tôi xử lý giao dịch, tôi sẽ cần xem một giấy tờ tùy thân, chẳng hạn như bằng lái xe."
      }
    ],
    "questions": [
      {
        "num": 53,
        "question": "Where most likely are the speakers?",
        "vietnameseQuestion": "Những người nói có khả năng đang ở đâu nhất?",
        "options": [
          {
            "key": "A",
            "text": "At a clothing factory",
            "vietnamese": "Tại một nhà máy may mặc"
          },
          {
            "key": "B",
            "text": "At a bookstore",
            "vietnamese": "Tại một hiệu sách"
          },
          {
            "key": "C",
            "text": "At a tailor's shop",
            "vietnamese": "Tại một tiệm may đo"
          },
          {
            "key": "D",
            "text": "At a furniture store",
            "vietnamese": "Tại một cửa hàng đồ nội thất"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Cuộc đối thoại diễn ra quanh việc mua ghế sofa bọc nệm (upholstered sofa) trong phòng trưng bày (showroom), nên họ đang ở cửa hàng nội thất (furniture store)."
      },
      {
        "num": 54,
        "question": "According to the man, why will a product cost more?",
        "vietnameseQuestion": "Theo người đàn ông, tại sao sản phẩm lại có giá cao hơn?",
        "options": [
          {
            "key": "A",
            "text": "It includes an extended warranty.",
            "vietnamese": "Nó bao gồm bảo hành mở rộng."
          },
          {
            "key": "B",
            "text": "It is a custom order.",
            "vietnamese": "Nó là đơn đặt hàng theo yêu cầu riêng."
          },
          {
            "key": "C",
            "text": "A rebate has expired.",
            "vietnamese": "Chương trình hoàn tiền đã hết hạn."
          },
          {
            "key": "D",
            "text": "Shipping will be expedited.",
            "vietnamese": "Vận chuyển sẽ được chuyển phát nhanh."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Người đàn ông giải thích lý do tốn thêm chi phí: 'Because it is a custom order, there will be an additional fee of two hundred dollars' (đơn đặt theo yêu cầu riêng - custom order)."
      },
      {
        "num": 55,
        "question": "What does the man request?",
        "vietnameseQuestion": "Người đàn ông yêu cầu điều gì?",
        "options": [
          {
            "key": "A",
            "text": "A purchase receipt",
            "vietnamese": "Hóa đơn mua hàng"
          },
          {
            "key": "B",
            "text": "A delivery address",
            "vietnamese": "Địa chỉ giao hàng"
          },
          {
            "key": "C",
            "text": "A form of identification",
            "vietnamese": "Một loại giấy tờ tùy thân"
          },
          {
            "key": "D",
            "text": "An account number",
            "vietnamese": "Số tài khoản"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Người đàn ông yêu cầu: 'I will need to see a form of identification, like a driver\\'s license' (giấy tờ tùy thân)."
      }
    ],
    "vocabulary": [
      {
        "word": "upholstered sofa",
        "meaning": "ghế sô-pha bọc đệm",
        "partOfSpeech": "n"
      },
      {
        "word": "showroom",
        "meaning": "phòng trưng bày sản phẩm",
        "partOfSpeech": "n"
      },
      {
        "word": "custom order",
        "meaning": "đơn đặt hàng làm theo yêu cầu riêng",
        "partOfSpeech": "n"
      },
      {
        "word": "identification",
        "meaning": "giấy tờ tùy thân, căn cước",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part3-56-58",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 56 - 58",
    "title": "Part 3 - Câu 56 - 58: Kiểm tra đơn hàng sản xuất ghế tại nhà máy",
    "audioSrc": "/audio/test5_2024.mp3",
    "startTime": 1483.84,
    "endTime": 1560.78,
    "transcript": [
      {
        "id": "p3-56-1",
        "speaker": "Woman",
        "text": "Good morning, Mr. Tong. I'm here to check on my order. How are the chairs coming along?",
        "vietnamese": "Chào buổi sáng, ông Tong. Tôi đến để kiểm tra đơn hàng của mình. Tiến độ sản xuất những chiếc ghế đến đâu rồi?"
      },
      {
        "id": "p3-56-2",
        "speaker": "Man",
        "text": "The machines have been assembling them all morning on our factory floor. We've paid special attention to their ergonomic curved shape so they provide optimal back support.",
        "vietnamese": "Các máy móc đã lắp ráp chúng suốt cả buổi sáng trên sàn nhà xưởng của chúng tôi. Chúng tôi đặc biệt chú trọng đến kiểu dáng uốn cong công thái học để chúng hỗ trợ tối ưu cho phần lưng."
      },
      {
        "id": "p3-56-3",
        "speaker": "Woman",
        "text": "That's fantastic. My client was very particular about the seating comfort.",
        "vietnamese": "Thật tuyệt vời. Khách hàng của tôi rất kỹ tính về độ thoải mái khi ngồi."
      },
      {
        "id": "p3-56-4",
        "speaker": "Man",
        "text": "Once the batch completes the painting booth later today, I will send a photo of the finished product to your email.",
        "vietnamese": "Sau khi lô hàng hoàn thành công đoạn buồng sơn vào cuối ngày hôm nay, tôi sẽ gửi một bức ảnh chụp sản phẩm hoàn thiện vào email của cô."
      }
    ],
    "questions": [
      {
        "num": 56,
        "question": "Where most likely are the speakers?",
        "vietnameseQuestion": "Những người nói có khả năng đang ở đâu nhất?",
        "options": [
          {
            "key": "A",
            "text": "At a hotel",
            "vietnamese": "Tại một khách sạn"
          },
          {
            "key": "B",
            "text": "At a factory",
            "vietnamese": "Tại một nhà máy sản xuất"
          },
          {
            "key": "C",
            "text": "At a retail store",
            "vietnamese": "Tại một cửa hàng bán lẻ"
          },
          {
            "key": "D",
            "text": "At a trade show",
            "vietnamese": "Tại một hội chợ thương mại"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Người đàn ông nói máy móc đang lắp ráp ghế trên sàn nhà máy: 'on our factory floor' (tại nhà máy - At a factory)."
      },
      {
        "num": 57,
        "question": "What feature does the man emphasize about some chairs?",
        "vietnameseQuestion": "Người đàn ông nhấn mạnh đặc điểm gì về những chiếc ghế?",
        "options": [
          {
            "key": "A",
            "text": "The color",
            "vietnamese": "Màu sắc"
          },
          {
            "key": "B",
            "text": "The price",
            "vietnamese": "Giá thành"
          },
          {
            "key": "C",
            "text": "The shape",
            "vietnamese": "Hình dáng / kiểu dáng"
          },
          {
            "key": "D",
            "text": "The durability",
            "vietnamese": "Độ bền"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Người đàn ông nhấn mạnh: 'We\\'ve paid special attention to their ergonomic curved shape' (hình dáng cong công thái học - The shape)."
      },
      {
        "num": 58,
        "question": "What does the man say he will do later?",
        "vietnameseQuestion": "Người đàn ông nói anh ấy sẽ làm gì sau đó?",
        "options": [
          {
            "key": "A",
            "text": "Modify a design",
            "vietnamese": "Sửa đổi một bản thiết kế"
          },
          {
            "key": "B",
            "text": "E-mail a contract",
            "vietnamese": "Gửi hợp đồng qua email"
          },
          {
            "key": "C",
            "text": "Create an invoice",
            "vietnamese": "Tạo một hóa đơn"
          },
          {
            "key": "D",
            "text": "Send a photo",
            "vietnamese": "Gửi một bức ảnh"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Người đàn ông hẹn: 'I will send a photo of the finished product to your email' (gửi ảnh chụp sản phẩm - Send a photo)."
      }
    ],
    "vocabulary": [
      {
        "word": "assemble",
        "meaning": "lắp ráp",
        "partOfSpeech": "v"
      },
      {
        "word": "ergonomic",
        "meaning": "công thái học (thiết kế phù hợp với cơ thể)",
        "partOfSpeech": "adj"
      },
      {
        "word": "optimal",
        "meaning": "tối ưu",
        "partOfSpeech": "adj"
      },
      {
        "word": "finished product",
        "meaning": "thành phẩm, sản phẩm hoàn thiện",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part3-59-61",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 59 - 61",
    "title": "Part 3 - Câu 59 - 61: Cơ hội thăng tiến khi đồng nghiệp kỳ cựu nghỉ hưu",
    "audioSrc": "/audio/test5_2024.mp3",
    "startTime": 1560.78,
    "endTime": 1648.14,
    "transcript": [
      {
        "id": "p3-59-1",
        "speaker": "Man",
        "text": "Hi, Sojin. I just heard that Ms. Yun is retiring next month. I'll be sorry to see her go. She was my mentor when I first joined the firm.",
        "vietnamese": "Chào Sojin. Tôi vừa nghe tin bà Yun sẽ nghỉ hưu vào tháng tới. Tôi sẽ rất buồn khi thấy bà ấy rời đi. Bà ấy từng là người hướng dẫn khi tôi mới vào công ty."
      },
      {
        "id": "p3-59-2",
        "speaker": "Woman",
        "text": "Yes, she has led our sales department remarkably well for over fifteen years. Her leadership role will be tough to fill.",
        "vietnamese": "Đúng vậy, bà ấy đã dẫn dắt phòng kinh doanh của chúng ta vô cùng xuất sắc trong hơn mười lăm năm. Vị trí lãnh đạo của bà ấy sẽ rất khó tìm người thay thế đấy."
      },
      {
        "id": "p3-59-3",
        "speaker": "Man",
        "text": "Well, our regional director mentioned they are looking internally first to promote someone. And we need someone with experience.",
        "vietnamese": "À, giám đốc khu vực có đề cập rằng họ đang tìm kiếm nhân sự nội bộ trước để thăng chức. Và chúng ta cần một người có kinh nghiệm."
      },
      {
        "id": "p3-59-4",
        "speaker": "Woman",
        "text": "Are you suggesting that I put my name in? I have been here for eight years now.",
        "vietnamese": "Ý anh là gợi ý tôi nên nộp đơn ứng tuyển sao? Dù sao thì tôi cũng đã làm ở đây được tám năm rồi."
      },
      {
        "id": "p3-59-5",
        "speaker": "Man",
        "text": "Exactly. You've closed the biggest corporate accounts this year. You'd be perfect for it.",
        "vietnamese": "Chính xác. Cô đã chốt được những hợp đồng doanh nghiệp lớn nhất năm nay. Cô hoàn toàn phù hợp với vị trí đó."
      }
    ],
    "questions": [
      {
        "num": 59,
        "question": "What will happen next month?",
        "vietnameseQuestion": "Điều gì sẽ diễn ra vào tháng tới?",
        "options": [
          {
            "key": "A",
            "text": "An award will be given.",
            "vietnamese": "Một giải thưởng sẽ được trao."
          },
          {
            "key": "B",
            "text": "A new product will launch.",
            "vietnamese": "Một sản phẩm mới sẽ ra mắt."
          },
          {
            "key": "C",
            "text": "A colleague will retire.",
            "vietnamese": "Một đồng nghiệp sẽ nghỉ hưu."
          },
          {
            "key": "D",
            "text": "An office will relocate.",
            "vietnamese": "Một văn phòng sẽ di dời."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Người đàn ông nói: 'Ms. Yun is retiring next month' (đồng nghiệp nghỉ hưu - A colleague will retire)."
      },
      {
        "num": 60,
        "question": "What department do the speakers work in?",
        "vietnameseQuestion": "Những người nói làm việc ở phòng ban nào?",
        "options": [
          {
            "key": "A",
            "text": "Sales",
            "vietnamese": "Phòng Kinh doanh / Bán hàng"
          },
          {
            "key": "B",
            "text": "Human Resources",
            "vietnamese": "Phòng Nhân sự"
          },
          {
            "key": "C",
            "text": "Legal",
            "vietnamese": "Phòng Pháp chế"
          },
          {
            "key": "D",
            "text": "Accounting",
            "vietnamese": "Phòng Kế toán"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Người phụ nữ đề cập: 'she has led our sales department remarkably well' (dẫn dắt phòng kinh doanh của chúng ta - Sales)."
      },
      {
        "num": 61,
        "question": "What does the man imply when he says, \"we need someone with experience\"?",
        "vietnameseQuestion": "Người đàn ông có ý gì khi nói, \"chúng ta cần một người có kinh nghiệm\"?",
        "options": [
          {
            "key": "A",
            "text": "The team has grown very quickly.",
            "vietnamese": "Nhóm đã phát triển rất nhanh chóng."
          },
          {
            "key": "B",
            "text": "The woman should apply for a job.",
            "vietnamese": "Người phụ nữ nên nộp đơn ứng tuyển cho công việc đó."
          },
          {
            "key": "C",
            "text": "A job description should be revised.",
            "vietnamese": "Bản mô tả công việc nên được sửa đổi."
          },
          {
            "key": "D",
            "text": "A new manager is not experienced enough.",
            "vietnamese": "Một người quản lý mới không đủ kinh nghiệm."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Người đàn ông khen người phụ nữ có kinh nghiệm dày dặn và ngụ ý khuyến khích cô ấy nộp đơn ứng tuyển vị trí quản lý (The woman should apply for a job)."
      }
    ],
    "vocabulary": [
      {
        "word": "retire",
        "meaning": "nghỉ hưu",
        "partOfSpeech": "v"
      },
      {
        "word": "mentor",
        "meaning": "người hướng dẫn, cố vấn",
        "partOfSpeech": "n"
      },
      {
        "word": "promote internally",
        "meaning": "thăng chức nội bộ",
        "partOfSpeech": "phr"
      },
      {
        "word": "corporate account",
        "meaning": "khách hàng doanh nghiệp",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part3-62-64",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 62 - 64",
    "title": "Part 3 - Câu 62 - 64: Bắt tàu điện ngầm sau hội nghị ở New York",
    "audioSrc": "/audio/test5_2024.mp3",
    "startTime": 1648.14,
    "endTime": 1735.14,
    "graphicImage": "/images/intensive/test5_2024/q62_64.png",
    "image": "/images/intensive/test5_2024/q62_64.png",
    "transcript": [
      {
        "id": "p3-62-1",
        "speaker": "Woman",
        "text": "Rajesh, it was nice to see you here in New York again this year.",
        "vietnamese": "Rajesh, thật vui được gặp lại anh ở New York năm nay."
      },
      {
        "id": "p3-62-2",
        "speaker": "Man",
        "text": "Same here. I look forward to attending the theater technology conference again next year. I really enjoyed your talk.",
        "vietnamese": "Tôi cũng vậy. Tôi rất mong được tham dự lại hội nghị công nghệ sân khấu vào năm tới. Tôi thực sự rất thích bài phát biểu của cô."
      },
      {
        "id": "p3-62-3",
        "speaker": "Woman",
        "text": "Thanks! By the way, could you remind me where I can locate information about the digital stage lighting software you mentioned?",
        "vietnamese": "Cảm ơn anh! Nhân tiện, anh có thể nhắc tôi tìm thông tin về phần mềm chiếu sáng sân khấu kỹ thuật số mà anh đã đề cập ở đâu không?"
      },
      {
        "id": "p3-62-4",
        "speaker": "Man",
        "text": "It's on the developer's website under the 'Resources' tab. Now I'd better hurry to catch my train.",
        "vietnamese": "Nó nằm trên trang web của nhà phát triển dưới tab 'Tài nguyên' đấy. Giờ tôi phải nhanh chân để bắt kịp chuyến tàu của mình thôi."
      },
      {
        "id": "p3-62-5",
        "speaker": "Woman",
        "text": "Which line are you taking?",
        "vietnamese": "Anh đi tuyến nào vậy?"
      },
      {
        "id": "p3-62-6",
        "speaker": "Man",
        "text": "I'm heading to Largo on the Blue Line. Looks like the next train departs in 14 minutes.",
        "vietnamese": "Tôi đang đến Largo trên Tuyến Màu Xanh Da Trời (Blue Line). Có vẻ như chuyến tàu tiếp theo sẽ khởi hành sau 14 phút nữa."
      }
    ],
    "questions": [
      {
        "num": 62,
        "question": "Why are the speakers in New York?",
        "vietnameseQuestion": "Tại sao những người nói lại ở New York?",
        "options": [
          {
            "key": "A",
            "text": "They saw a play.",
            "vietnamese": "Họ đã xem một vở kịch."
          },
          {
            "key": "B",
            "text": "They attended a conference.",
            "vietnamese": "Họ đã tham dự một hội nghị."
          },
          {
            "key": "C",
            "text": "They met with some clients.",
            "vietnamese": "Họ đã gặp gỡ một số khách hàng."
          },
          {
            "key": "D",
            "text": "They viewed some real estate.",
            "vietnamese": "Họ đã xem một số bất động sản."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Người đàn ông nói: 'attending the theater technology conference again next year' (tham dự hội nghị - They attended a conference)."
      },
      {
        "num": 63,
        "question": "What does the woman ask the man about?",
        "vietnameseQuestion": "Người phụ nữ hỏi người đàn ông về điều gì?",
        "options": [
          {
            "key": "A",
            "text": "Locating some information",
            "vietnamese": "Tìm kiếm một số thông tin"
          },
          {
            "key": "B",
            "text": "Applying for a position",
            "vietnamese": "Nộp đơn ứng tuyển một vị trí"
          },
          {
            "key": "C",
            "text": "Opening a branch office",
            "vietnamese": "Mở một văn phòng chi nhánh"
          },
          {
            "key": "D",
            "text": "Making a reservation",
            "vietnamese": "Đặt chỗ trước"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Người phụ nữ hỏi tìm thông tin ở đâu: 'could you remind me where I can locate information about the digital stage lighting software' (tìm kiếm thông tin - Locating some information)."
      },
      {
        "num": 64,
        "question": "Look at the graphic. Where will the man travel to next?",
        "vietnameseQuestion": "Nhìn vào hình ảnh. Người đàn ông sẽ đi đến đâu tiếp theo?",
        "options": [
          {
            "key": "A",
            "text": "Shady Grove",
            "vietnamese": "Shady Grove"
          },
          {
            "key": "B",
            "text": "Braddock Bay",
            "vietnamese": "Braddock Bay"
          },
          {
            "key": "C",
            "text": "Largo",
            "vietnamese": "Largo"
          },
          {
            "key": "D",
            "text": "Ashburn",
            "vietnamese": "Ashburn"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Người đàn ông cho biết: 'I\\'m heading to Largo on the Blue Line'. Nhìn vào bảng biểu điện tử tuyến Blue Line điểm đến là Largo (đáp án C)."
      }
    ],
    "vocabulary": [
      {
        "word": "conference",
        "meaning": "hội nghị chuyên đề",
        "partOfSpeech": "n"
      },
      {
        "word": "locate",
        "meaning": "định vị, tìm thấy",
        "partOfSpeech": "v"
      },
      {
        "word": "departure",
        "meaning": "sự khởi hành",
        "partOfSpeech": "n"
      },
      {
        "word": "destination",
        "meaning": "điểm đến",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part3-65-67",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 65 - 67",
    "title": "Part 3 - Câu 65 - 67: Gọi món đặc biệt tại quán ăn Orlando's Deli",
    "audioSrc": "/audio/test5_2024.mp3",
    "startTime": 1735.14,
    "endTime": 1813.23,
    "graphicImage": "/images/intensive/test5_2024/q65_67.png",
    "image": "/images/intensive/test5_2024/q65_67.png",
    "transcript": [
      {
        "id": "p3-65-1",
        "speaker": "Man",
        "text": "Welcome to Orlando's Deli. If you'd like to try one of our daily specials, they're on the board behind me.",
        "vietnamese": "Chào mừng quý khách đến với Orlando's Deli. Nếu cô muốn thử một trong các món đặc biệt trong ngày của chúng tôi, chúng được ghi trên bảng phía sau tôi."
      },
      {
        "id": "p3-65-2",
        "speaker": "Woman",
        "text": "Wow, that's a great menu. I was wondering about Special 1, the vegetable curry. Is that food spicy?",
        "vietnamese": "Chà, thực đơn tuyệt thật. Tôi đang băn khoăn về Món đặc biệt 1, món cà ri rau củ. Món đó có cay không vậy?"
      },
      {
        "id": "p3-65-3",
        "speaker": "Man",
        "text": "Yes, it has a lot of chili peppers in it.",
        "vietnamese": "Vâng, món đó có khá nhiều ớt đấy ạ."
      },
      {
        "id": "p3-65-4",
        "speaker": "Woman",
        "text": "Oh, I prefer mild food. In that case, I will take Special 3, the lasagna instead.",
        "vietnamese": "Ồ, tôi thích đồ ăn thanh nhẹ hơn. Vậy thì tôi sẽ lấy Món đặc biệt 3, món lasagna vậy."
      },
      {
        "id": "p3-65-5",
        "speaker": "Man",
        "text": "Excellent choice. We'll bring it right out to you.",
        "vietnamese": "Lựa chọn tuyệt vời. Chúng tôi sẽ mang ra ngay cho cô."
      },
      {
        "id": "p3-65-6",
        "speaker": "Woman",
        "text": "Thanks! It's such nice weather, I think I'll go sit on the outdoor patio.",
        "vietnamese": "Cảm ơn anh! Thời tiết đẹp thế này, tôi nghĩ tôi sẽ ra ngồi ngoài sân hiên ngoài trời."
      }
    ],
    "questions": [
      {
        "num": 65,
        "question": "What does the woman ask the man about?",
        "vietnameseQuestion": "Người phụ nữ hỏi người đàn ông về điều gì?",
        "options": [
          {
            "key": "A",
            "text": "Whether a coupon is valid",
            "vietnamese": "Liệu phiếu giảm giá có còn hạn không"
          },
          {
            "key": "B",
            "text": "Whether a food is spicy",
            "vietnamese": "Liệu một món ăn có cay không"
          },
          {
            "key": "C",
            "text": "Whether a drink is included",
            "vietnamese": "Liệu đồ uống có được tính kèm theo không"
          },
          {
            "key": "D",
            "text": "Whether any seats are available",
            "vietnamese": "Liệu còn chỗ ngồi trống nào không"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Người phụ nữ hỏi về món cà ri: 'Is that food spicy?' (món ăn có cay không - Whether a food is spicy)."
      },
      {
        "num": 66,
        "question": "Look at the graphic. Which special does the woman order?",
        "vietnameseQuestion": "Nhìn vào hình ảnh. Người phụ nữ gọi món đặc biệt nào?",
        "options": [
          {
            "key": "A",
            "text": "Special 1",
            "vietnamese": "Món đặc biệt 1"
          },
          {
            "key": "B",
            "text": "Special 2",
            "vietnamese": "Món đặc biệt 2"
          },
          {
            "key": "C",
            "text": "Special 3",
            "vietnamese": "Món đặc biệt 3"
          },
          {
            "key": "D",
            "text": "Special 4",
            "vietnamese": "Món đặc biệt 4"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Người phụ nữ đổi ý vì không ăn cay được: 'I will take Special 3, the lasagna instead'. Nhìn hình bảng thực đơn, món Special 3 chính là lasagna (đáp án C)."
      },
      {
        "num": 67,
        "question": "What will the woman most likely do next?",
        "vietnameseQuestion": "Người phụ nữ nhiều khả năng sẽ làm gì tiếp theo?",
        "options": [
          {
            "key": "A",
            "text": "Move her car",
            "vietnamese": "Di chuyển xe của cô ấy"
          },
          {
            "key": "B",
            "text": "Go to a patio",
            "vietnamese": "Đi ra ngoài sân hiên"
          },
          {
            "key": "C",
            "text": "Make a reservation",
            "vietnamese": "Đặt bàn trước"
          },
          {
            "key": "D",
            "text": "Meet some friends",
            "vietnamese": "Gặp gỡ một vài người bạn"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Người phụ nữ nói: 'I think I\\'ll go sit on the outdoor patio' (ra ngồi sân hiên ngoài trời - Go to a patio)."
      }
    ],
    "vocabulary": [
      {
        "word": "deli",
        "meaning": "quán ăn phục vụ đồ ăn nhanh/chế biến sẵn",
        "partOfSpeech": "n"
      },
      {
        "word": "spicy",
        "meaning": "cay",
        "partOfSpeech": "adj"
      },
      {
        "word": "mild",
        "meaning": "thanh đạm, không cay",
        "partOfSpeech": "adj"
      },
      {
        "word": "patio",
        "meaning": "sân hiên ngoài trời",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part3-68-70",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 68 - 70",
    "title": "Part 3 - Câu 68 - 70: Lựa chọn đường mòn dã ngoại tại Công viên Marina",
    "audioSrc": "/audio/test5_2024.mp3",
    "startTime": 1813.23,
    "endTime": 1895.04,
    "graphicImage": "/images/intensive/test5_2024/q68_70.png",
    "image": "/images/intensive/test5_2024/q68_70.png",
    "transcript": [
      {
        "id": "p3-68-1",
        "speaker": "Woman",
        "text": "I'm excited about our hike today here at Marina Park. And I'm so glad we got to the park early before it gets crowded. There are few people in the park right now.",
        "vietnamese": "Tôi rất hào hứng về chuyến đi bộ dã ngoại hôm nay ở Công viên Marina. Và tôi rất vui vì chúng ta đến công viên sớm trước khi đông đúc. Lúc này công viên có rất ít người."
      },
      {
        "id": "p3-68-2",
        "speaker": "Man",
        "text": "Which trail should we hike? Let's take a look at the map.",
        "vietnamese": "Chúng ta nên đi theo con đường mòn nào nhỉ? Hãy cùng nhìn vào bản đồ xem sao."
      },
      {
        "id": "p3-68-3",
        "speaker": "Woman",
        "text": "Well, the Ridge Trail is 7 kilometers, which might be too long for today, but the Creek Trail is only 1 kilometer. How about the Waterfall Trail?",
        "vietnamese": "À, đường Ridge Trail dài 7 km, có vẻ hơi quá dài cho ngày hôm nay, còn đường Creek Trail thì chỉ có 1 km. Đường Waterfall Trail thì sao nhỉ?"
      },
      {
        "id": "p3-68-4",
        "speaker": "Man",
        "text": "Sounds good! The map shows it is 5 kilometers, which is a great distance.",
        "vietnamese": "Nghe hay đấy! Bản đồ cho thấy nó dài 5 km, một cự ly rất vừa vặn."
      },
      {
        "id": "p3-68-5",
        "speaker": "Woman",
        "text": "Great. The park shuttle leaves from the trailhead in twenty minutes. What can we do while waiting?",
        "vietnamese": "Tuyệt. Xe đưa đón của công viên sẽ rời điểm đầu đường mòn sau hai mươi phút nữa. Chúng ta có thể làm gì trong lúc chờ đợi?"
      },
      {
        "id": "p3-68-6",
        "speaker": "Man",
        "text": "The visitor center has an orientation theater. We can watch a video about the local wildlife.",
        "vietnamese": "Trung tâm du khách có một phòng chiếu phim định hướng. Chúng ta có thể xem một đoạn video giới thiệu về động vật hoang dã địa phương."
      }
    ],
    "questions": [
      {
        "num": 68,
        "question": "What is the woman happy about?",
        "vietnameseQuestion": "Người phụ nữ vui mừng về điều gì?",
        "options": [
          {
            "key": "A",
            "text": "She happened to meet some friends.",
            "vietnamese": "Cô ấy tình cờ gặp một vài người bạn."
          },
          {
            "key": "B",
            "text": "The weather is perfect for an activity.",
            "vietnamese": "Thời tiết hoàn hảo cho một hoạt động."
          },
          {
            "key": "C",
            "text": "The park was closer than expected.",
            "vietnamese": "Công viên gần hơn dự kiến."
          },
          {
            "key": "D",
            "text": "There are few people in the park.",
            "vietnamese": "Có rất ít người trong công viên."
          }
        ],
        "correctAnswer": "D",
        "explanation": "Người phụ nữ bày tỏ: 'I\\'m so glad we got to the park early before it gets crowded. There are few people in the park right now' (ít người trong công viên - There are few people in the park)."
      },
      {
        "num": 69,
        "question": "Look at the graphic. How far will the speakers hike?",
        "vietnameseQuestion": "Nhìn vào hình ảnh. Những người nói sẽ đi bộ quãng đường bao xa?",
        "options": [
          {
            "key": "A",
            "text": "7 kilometers",
            "vietnamese": "7 ki-lô-mét"
          },
          {
            "key": "B",
            "text": "5 kilometers",
            "vietnamese": "5 ki-lô-mét"
          },
          {
            "key": "C",
            "text": "2 kilometers",
            "vietnamese": "2 ki-lô-mét"
          },
          {
            "key": "D",
            "text": "1 kilometer",
            "vietnamese": "1 ki-lô-mét"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Họ thống nhất chọn cung đường Waterfall Trail. Nhìn vào bảng bản đồ, cung đường Waterfall Trail có chiều dài là 5 kilometers (đáp án B)."
      },
      {
        "num": 70,
        "question": "What can the speakers do while waiting for the shuttle?",
        "vietnameseQuestion": "Những người nói có thể làm gì trong khi chờ xe đưa đón?",
        "options": [
          {
            "key": "A",
            "text": "Buy some snacks",
            "vietnamese": "Mua một ít đồ ăn nhẹ"
          },
          {
            "key": "B",
            "text": "Watch a video",
            "vietnamese": "Xem một video"
          },
          {
            "key": "C",
            "text": "Visit a gift shop",
            "vietnamese": "Ghé thăm cửa hàng quà tặng"
          },
          {
            "key": "D",
            "text": "Rent some equipment",
            "vietnamese": "Thuê một số dụng cụ"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Người đàn ông đề xuất: 'We can watch a video about the local wildlife' (xem một đoạn video)."
      }
    ],
    "vocabulary": [
      {
        "word": "hike",
        "meaning": "đi bộ đường dài dã ngoại",
        "partOfSpeech": "n/v"
      },
      {
        "word": "crowded",
        "meaning": "đông đúc",
        "partOfSpeech": "adj"
      },
      {
        "word": "trail",
        "meaning": "đường mòn",
        "partOfSpeech": "n"
      },
      {
        "word": "wildlife",
        "meaning": "động vật hoang dã",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part4-71-73",
    "part": 4,
    "partTitle": "Part 4: Bài nói chuyện",
    "questionRange": "Câu 71 - 73",
    "title": "Part 4 - Câu 71 - 73: Thông báo sản phẩm đèn chiếu sáng tạm thời hết hàng",
    "audioSrc": "/audio/test5_2024.mp3",
    "startTime": 1932.36,
    "endTime": 2005.45,
    "transcript": [
      {
        "id": "p4-71-1",
        "speaker": "Speaker",
        "text": "Hello, Ms. Cho. I'm calling from Springdale Lights regarding the online order you placed yesterday for five brass wall sconces.",
        "vietnamese": "Xin chào cô Cho. Tôi gọi từ Công ty Đèn Springdale liên quan đến đơn hàng trực tuyến mà cô đã đặt hôm qua gồm năm chiếc đèn tường bằng đồng thau."
      },
      {
        "id": "p4-71-2",
        "speaker": "Speaker",
        "text": "Unfortunately, when our warehouse staff prepared to pack the items this morning, they discovered that that specific model is currently out of stock.",
        "vietnamese": "Thật không may, khi nhân viên kho của chúng tôi chuẩn bị đóng gói sản phẩm sáng nay, họ phát hiện ra rằng mẫu mã cụ thể đó hiện đã hết hàng."
      },
      {
        "id": "p4-71-3",
        "speaker": "Speaker",
        "text": "We expect a new shipment in two weeks. However, if you cannot wait, we can offer you a similar fixture in brushed nickel and apply a fifteen percent discount to compensate for the trouble.",
        "vietnamese": "Chúng tôi dự kiến lô hàng mới sẽ về sau hai tuần. Tuy nhiên nếu cô không thể chờ, chúng tôi có thể gửi cho cô mẫu đèn tương tự bằng niken mờ và áp dụng mức giảm giá 15% để bù đắp cho sự phiền hà này."
      },
      {
        "id": "p4-71-4",
        "speaker": "Speaker",
        "text": "Please call us back at your earliest convenience to let us know your decision.",
        "vietnamese": "Xin vui lòng gọi lại cho chúng tôi sớm nhất có thể để cho chúng tôi biết quyết định của cô."
      }
    ],
    "questions": [
      {
        "num": 71,
        "question": "What did the listener do yesterday?",
        "vietnameseQuestion": "Người nghe đã làm gì vào ngày hôm qua?",
        "options": [
          {
            "key": "A",
            "text": "She placed an order.",
            "vietnamese": "Cô ấy đã đặt một đơn hàng."
          },
          {
            "key": "B",
            "text": "She scheduled an event.",
            "vietnamese": "Cô ấy đã lên lịch cho một sự kiện."
          },
          {
            "key": "C",
            "text": "She called a manager.",
            "vietnamese": "Cô ấy đã gọi cho một người quản lý."
          },
          {
            "key": "D",
            "text": "She painted some rooms.",
            "vietnamese": "Cô ấy đã sơn một vài căn phòng."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Người nói nhắc lại: 'regarding the online order you placed yesterday' (cô ấy đã đặt một đơn hàng - She placed an order)."
      },
      {
        "num": 72,
        "question": "What problem does the speaker mention?",
        "vietnameseQuestion": "Người nói đề cập đến vấn đề gì?",
        "options": [
          {
            "key": "A",
            "text": "A price has increased.",
            "vietnamese": "Giá cả đã tăng lên."
          },
          {
            "key": "B",
            "text": "A machine needs to be repaired.",
            "vietnamese": "Một chiếc máy cần được sửa chữa."
          },
          {
            "key": "C",
            "text": "A product is not available.",
            "vietnamese": "Một sản phẩm hiện không có sẵn / hết hàng."
          },
          {
            "key": "D",
            "text": "A performance has been canceled.",
            "vietnamese": "Một buổi biểu diễn đã bị hủy bỏ."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Người nói cho biết: 'that specific model is currently out of stock' (sản phẩm hết hàng / không có sẵn - A product is not available)."
      },
      {
        "num": 73,
        "question": "What does the speaker offer the listener?",
        "vietnameseQuestion": "Người nói đề nghị điều gì với người nghe?",
        "options": [
          {
            "key": "A",
            "text": "Expedited shipping",
            "vietnamese": "Giao hàng hỏa tốc"
          },
          {
            "key": "B",
            "text": "A full refund",
            "vietnamese": "Hoàn tiền đầy đủ"
          },
          {
            "key": "C",
            "text": "A free consultation",
            "vietnamese": "Buổi tư vấn miễn phí"
          },
          {
            "key": "D",
            "text": "A discount",
            "vietnamese": "Khoản giảm giá / chiết khấu"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Người nói đề xuất: 'we can offer you a similar fixture... and apply a fifteen percent discount' (áp dụng giảm giá 15% - A discount)."
      }
    ],
    "vocabulary": [
      {
        "word": "place an order",
        "meaning": "đặt hàng",
        "partOfSpeech": "phr"
      },
      {
        "word": "sconce",
        "meaning": "đèn gắn tường",
        "partOfSpeech": "n"
      },
      {
        "word": "out of stock",
        "meaning": "hết hàng",
        "partOfSpeech": "adj"
      },
      {
        "word": "compensate",
        "meaning": "đền bù, bồi thường",
        "partOfSpeech": "v"
      }
    ]
  },
  {
    "id": "part4-74-76",
    "part": 4,
    "partTitle": "Part 4: Bài nói chuyện",
    "questionRange": "Câu 74 - 76",
    "title": "Part 4 - Câu 74 - 76: Tình nguyện viên dọn dẹp vườn tại Trang viên Osterwind",
    "audioSrc": "/audio/test5_2024.mp3",
    "startTime": 2005.45,
    "endTime": 2080.03,
    "transcript": [
      {
        "id": "p4-74-1",
        "speaker": "Speaker",
        "text": "Welcome to Osterwind Estate. The former owner, Ms. Yuping Wei, was a famous painter.",
        "vietnamese": "Chào mừng các bạn đến với Trang viên Osterwind. Người chủ cũ, bà Yuping Wei, là một họa sĩ nổi tiếng."
      },
      {
        "id": "p4-74-2",
        "speaker": "Speaker",
        "text": "What's special about this estate is that Ms. Wei designed it herself, creating the unique architecture and beautiful landscape gardens you see today.",
        "vietnamese": "Điều đặc biệt về trang viên này là bà Wei đã tự tay thiết kế nó, tạo nên kiến trúc độc đáo và những khu vườn cảnh tuyệt đẹp mà các bạn thấy hôm nay."
      },
      {
        "id": "p4-74-3",
        "speaker": "Speaker",
        "text": "Thank you all for volunteering this morning to help clean up the gardens after the recent storms. We will be raking leaves and trimming branches.",
        "vietnamese": "Cảm ơn tất cả các bạn đã tình nguyện sáng nay để giúp dọn dẹp các khu vườn sau những cơn bão vừa qua. Chúng ta sẽ cào lá và cắt tỉa cành cây."
      },
      {
        "id": "p4-74-4",
        "speaker": "Speaker",
        "text": "As a token of our appreciation, before you leave today, each volunteer will receive free passes to visit the historical museum anytime this year.",
        "vietnamese": "Để tỏ lòng biết ơn, trước khi các bạn ra về hôm nay, mỗi tình nguyện viên sẽ nhận được vé vào cửa miễn phí để tham quan bảo tàng lịch sử bất cứ lúc nào trong năm nay."
      }
    ],
    "questions": [
      {
        "num": 74,
        "question": "According to the speaker, what is special about Osterwind Estate?",
        "vietnameseQuestion": "Theo người nói, có điều gì đặc biệt về Trang viên Osterwind?",
        "options": [
          {
            "key": "A",
            "text": "It houses many historic paintings.",
            "vietnamese": "Nơi đây lưu giữ nhiều bức tranh lịch sử."
          },
          {
            "key": "B",
            "text": "It was designed by its owner.",
            "vietnamese": "Nó được tự tay thiết kế bởi chính người chủ sở hữu."
          },
          {
            "key": "C",
            "text": "It includes a botanical garden.",
            "vietnamese": "Nó bao gồm một vườn bách thảo."
          },
          {
            "key": "D",
            "text": "It is used as a museum.",
            "vietnamese": "Nó được sử dụng làm viện bảo tàng."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Người nói chỉ rõ: 'What\\'s special about this estate is that Ms. Wei designed it herself' (được thiết kế bởi người chủ - It was designed by its owner)."
      },
      {
        "num": 75,
        "question": "Why are the listeners at Osterwind Estate?",
        "vietnameseQuestion": "Tại sao những người nghe lại có mặt ở Trang viên Osterwind?",
        "options": [
          {
            "key": "A",
            "text": "To attend an awards ceremony",
            "vietnamese": "Để tham dự một lễ trao giải"
          },
          {
            "key": "B",
            "text": "To apply for landscaping jobs",
            "vietnamese": "Để nộp đơn xin việc làm vườn"
          },
          {
            "key": "C",
            "text": "To take a tour of a building",
            "vietnamese": "Để tham quan một tòa nhà"
          },
          {
            "key": "D",
            "text": "To clean up some gardens",
            "vietnamese": "Để dọn dẹp các khu vườn"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Người nói cảm ơn: 'Thank you all for volunteering this morning to help clean up the gardens' (dọn dẹp vườn - To clean up some gardens)."
      },
      {
        "num": 76,
        "question": "What will the listeners receive?",
        "vietnameseQuestion": "Những người nghe sẽ nhận được món quà gì?",
        "options": [
          {
            "key": "A",
            "text": "Gift-shop coupons",
            "vietnamese": "Phiếu mua hàng tại cửa hàng quà lưu niệm"
          },
          {
            "key": "B",
            "text": "Free passes",
            "vietnamese": "Vé vào cửa miễn phí"
          },
          {
            "key": "C",
            "text": "Lunch boxes",
            "vietnamese": "Hộp cơm trưa"
          },
          {
            "key": "D",
            "text": "T-shirts",
            "vietnamese": "Áo phông"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Người nói thông báo: 'each volunteer will receive free passes to visit the historical museum' (vé vào cửa miễn phí - Free passes)."
      }
    ],
    "vocabulary": [
      {
        "word": "estate",
        "meaning": "khu trang viên, bất động sản lớn",
        "partOfSpeech": "n"
      },
      {
        "word": "design",
        "meaning": "thiết kế",
        "partOfSpeech": "v"
      },
      {
        "word": "clean up",
        "meaning": "dọn dẹp sạch sẽ",
        "partOfSpeech": "phr v"
      },
      {
        "word": "free pass",
        "meaning": "vé vào cửa miễn phí",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part4-77-79",
    "part": 4,
    "partTitle": "Part 4: Bài nói chuyện",
    "questionRange": "Câu 77 - 79",
    "title": "Part 4 - Câu 77 - 79: Tin nhắn từ sân bay về việc hoãn chuyến bay",
    "audioSrc": "/audio/test5_2024.mp3",
    "startTime": 2080.03,
    "endTime": 2158.16,
    "transcript": [
      {
        "id": "p4-77-1",
        "speaker": "Speaker",
        "text": "Good morning, Ms. Espinoza. This is Marcel Fournier. I'm calling from the airport lounge.",
        "vietnamese": "Chào buổi sáng, cô Espinoza. Tôi là Marcel Fournier đây. Tôi đang gọi từ phòng chờ sân bay."
      },
      {
        "id": "p4-77-2",
        "speaker": "Speaker",
        "text": "My connection flight to San Diego has been delayed by three hours because of mechanical issues with the aircraft.",
        "vietnamese": "Chuyến bay chuyển tiếp của tôi tới San Diego đã bị hoãn ba tiếng do sự cố kỹ thuật của máy bay."
      },
      {
        "id": "p4-77-3",
        "speaker": "Speaker",
        "text": "As my administrative assistant, could you please contact the clients in San Diego and reschedule our two o'clock meeting to four o'clock instead?",
        "vietnamese": "Với tư cách là trợ lý hành chính của tôi, cô có thể vui lòng liên hệ với các khách hàng ở San Diego và dời lại cuộc họp lúc hai giờ sang bốn giờ được không?"
      },
      {
        "id": "p4-77-4",
        "speaker": "Speaker",
        "text": "I know this is inconvenient, and I apologize for giving you such short notice.",
        "vietnamese": "Tôi biết việc này thật bất tiện, và tôi xin lỗi vì đã báo cho cô gấp như vậy."
      },
      {
        "id": "p4-77-5",
        "speaker": "Speaker",
        "text": "As soon as I land in San Diego, I will retrieve my messages to check if the clients agreed to the change.",
        "vietnamese": "Ngay khi hạ cánh xuống San Diego, tôi sẽ kiểm tra tin nhắn xem liệu khách hàng có đồng ý với sự thay đổi này không."
      }
    ],
    "questions": [
      {
        "num": 77,
        "question": "Who most likely is the listener?",
        "vietnameseQuestion": "Người nghe nhiều khả năng là ai nhất?",
        "options": [
          {
            "key": "A",
            "text": "A travel agent",
            "vietnamese": "Đại lý du lịch"
          },
          {
            "key": "B",
            "text": "An administrative assistant",
            "vietnamese": "Trợ lý hành chính"
          },
          {
            "key": "C",
            "text": "A flight attendant",
            "vietnamese": "Tiếp viên hàng không"
          },
          {
            "key": "D",
            "text": "A security guard",
            "vietnamese": "Nhân viên bảo vệ"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Người nói gọi điện thoại và xưng hô: 'As my administrative assistant, could you please contact the clients' (trợ lý hành chính - An administrative assistant)."
      },
      {
        "num": 78,
        "question": "Why does the speaker say, \"I know this is inconvenient\"?",
        "vietnameseQuestion": "Tại sao người nói lại nói, \"Tôi biết việc này thật bất tiện\"?",
        "options": [
          {
            "key": "A",
            "text": "To suggest a deadline extension",
            "vietnamese": "Để đề xuất gia hạn thời hạn"
          },
          {
            "key": "B",
            "text": "To report on an additional cost",
            "vietnamese": "Để báo cáo về chi phí phát sinh"
          },
          {
            "key": "C",
            "text": "To offer an alternative solution",
            "vietnamese": "Để đưa ra giải pháp thay thế"
          },
          {
            "key": "D",
            "text": "To apologize for a request",
            "vietnamese": "Để xin lỗi về một yêu cầu đột xuất"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Người nói nhờ trợ lý đổi lịch họp gấp vào phút chót và nói câu này nhằm xin lỗi vì yêu cầu gây phiền toái (To apologize for a request)."
      },
      {
        "num": 79,
        "question": "What will the speaker do when he arrives in San Diego?",
        "vietnameseQuestion": "Người nói sẽ làm gì khi đến San Diego?",
        "options": [
          {
            "key": "A",
            "text": "Retrieve his messages",
            "vietnamese": "Kiểm tra / xem các tin nhắn của mình"
          },
          {
            "key": "B",
            "text": "Check into a hotel",
            "vietnamese": "Nhận phòng khách sạn"
          },
          {
            "key": "C",
            "text": "Change a flight reservation",
            "vietnamese": "Thay đổi đặt chỗ chuyến bay"
          },
          {
            "key": "D",
            "text": "Visit a company office",
            "vietnamese": "Ghé thăm văn phòng công ty"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Người nói khẳng định: 'As soon as I land in San Diego, I will retrieve my messages' (kiểm tra tin nhắn - Retrieve his messages)."
      }
    ],
    "vocabulary": [
      {
        "word": "administrative assistant",
        "meaning": "trợ lý hành chính",
        "partOfSpeech": "n"
      },
      {
        "word": "mechanical issue",
        "meaning": "trục trặc cơ khí/kỹ thuật",
        "partOfSpeech": "n"
      },
      {
        "word": "reschedule",
        "meaning": "dời lại lịch, sắp xếp lại thời gian",
        "partOfSpeech": "v"
      },
      {
        "word": "retrieve messages",
        "meaning": "truy cập/kiểm tra tin nhắn thoại hoặc thư",
        "partOfSpeech": "phr"
      }
    ]
  },
  {
    "id": "part4-80-82",
    "part": 4,
    "partTitle": "Part 4: Bài nói chuyện",
    "questionRange": "Câu 80 - 82",
    "title": "Part 4 - Câu 80 - 82: Kênh video hướng dẫn tái chế đồ dùng",
    "audioSrc": "/audio/test5_2024.mp3",
    "startTime": 2158.16,
    "endTime": 2252.52,
    "transcript": [
      {
        "id": "p4-80-1",
        "speaker": "Speaker",
        "text": "Hi, everyone. Thanks for watching today! On this channel, our videos are usually focused on creative ways on how to reuse household items instead of throwing them away.",
        "vietnamese": "Chào mọi người. Cảm ơn các bạn đã theo dõi hôm nay! Trên kênh này, các video của chúng tôi thường tập trung vào những cách sáng tạo để tái sử dụng đồ gia dụng thay vì vứt bỏ chúng."
      },
      {
        "id": "p4-80-2",
        "speaker": "Speaker",
        "text": "In today's project, we'll turn old glass jars into charming hanging lanterns for your patio or garden.",
        "vietnamese": "Trong dự án hôm nay, chúng ta sẽ biến những chiếc lọ thủy tinh cũ thành những chiếc đèn lồng treo duyên dáng cho sân hiên hoặc khu vườn của bạn."
      },
      {
        "id": "p4-80-3",
        "speaker": "Speaker",
        "text": "The critical first step before beginning any craft is gathering supplies, so make sure you have your wires, pliers, and candles ready on your workbench.",
        "vietnamese": "Bước đầu tiên vô cùng quan trọng trước khi bắt đầu làm bất kỳ món đồ thủ công nào là thu thập và chuẩn bị vật liệu, vì vậy hãy đảm bảo bạn đã chuẩn bị sẵn dây kim loại, kìm và nến trên bàn làm việc của mình."
      },
      {
        "id": "p4-80-4",
        "speaker": "Speaker",
        "text": "For those who prefer a printable guide with exact measurements, you can download some instructions directly from our website.",
        "vietnamese": "Đối với những bạn muốn có bản hướng dẫn in được với các kích thước đo lường chính xác, bạn có thể tải về các hướng dẫn trực tiếp từ trang web của chúng tôi."
      }
    ],
    "questions": [
      {
        "num": 80,
        "question": "What does the speaker say her videos are usually about?",
        "vietnameseQuestion": "Người nói cho biết các video của cô thường có chủ đề về điều gì?",
        "options": [
          {
            "key": "A",
            "text": "How to plan trips",
            "vietnamese": "Cách lên kế hoạch cho các chuyến đi"
          },
          {
            "key": "B",
            "text": "How to reuse items",
            "vietnamese": "Cách tái sử dụng các đồ vật"
          },
          {
            "key": "C",
            "text": "How to organize closets",
            "vietnamese": "Cách sắp xếp tủ quần áo"
          },
          {
            "key": "D",
            "text": "How to draw landscapes",
            "vietnamese": "Cách vẽ phong cảnh"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Người nói nêu rõ: 'our videos are usually focused on creative ways on how to reuse household items' (cách tái sử dụng đồ đạc - How to reuse items)."
      },
      {
        "num": 81,
        "question": "What first step does the speaker mention?",
        "vietnameseQuestion": "Người nói đề cập đến bước đầu tiên nào?",
        "options": [
          {
            "key": "A",
            "text": "Writing a list",
            "vietnamese": "Viết một danh sách"
          },
          {
            "key": "B",
            "text": "Finding coupons",
            "vietnamese": "Tìm phiếu giảm giá"
          },
          {
            "key": "C",
            "text": "Gathering supplies",
            "vietnamese": "Thu thập và chuẩn bị nguyên vật liệu"
          },
          {
            "key": "D",
            "text": "Looking at images online",
            "vietnamese": "Xem hình ảnh trên mạng"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Người nói nhấn mạnh: 'The critical first step before beginning any craft is gathering supplies' (chuẩn bị vật tư - Gathering supplies)."
      },
      {
        "num": 82,
        "question": "According to the speaker, what can the listeners do on a Web site?",
        "vietnameseQuestion": "Theo người nói, người nghe có thể làm gì trên trang web?",
        "options": [
          {
            "key": "A",
            "text": "Enter a contest",
            "vietnamese": "Tham gia một cuộc thi"
          },
          {
            "key": "B",
            "text": "Subscribe to a video channel",
            "vietnamese": "Đăng ký kênh video"
          },
          {
            "key": "C",
            "text": "Submit some photographs",
            "vietnamese": "Gửi một số bức ảnh"
          },
          {
            "key": "D",
            "text": "Download some instructions",
            "vietnamese": "Tải xuống các bản hướng dẫn"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Người nói hướng dẫn: 'you can download some instructions directly from our website' (tải bản hướng dẫn - Download some instructions)."
      }
    ],
    "vocabulary": [
      {
        "word": "reuse",
        "meaning": "tái sử dụng",
        "partOfSpeech": "v"
      },
      {
        "word": "lantern",
        "meaning": "đèn lồng",
        "partOfSpeech": "n"
      },
      {
        "word": "gather supplies",
        "meaning": "gom, chuẩn bị vật tư",
        "partOfSpeech": "phr"
      },
      {
        "word": "workbench",
        "meaning": "bàn làm việc thủ công/thợ mộc",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part4-83-85",
    "part": 4,
    "partTitle": "Part 4: Bài nói chuyện",
    "questionRange": "Câu 83 - 85",
    "title": "Part 4 - Câu 83 - 85: Họp báo về tiến độ dự án nâng cấp cầu Grand Falls",
    "audioSrc": "/audio/test5_2024.mp3",
    "startTime": 2252.52,
    "endTime": 2327.22,
    "transcript": [
      {
        "id": "p4-83-1",
        "speaker": "Speaker",
        "text": "Thank you all for coming to this press conference. As you know, the Grand Falls Bridge improvement work has been underway for almost two years.",
        "vietnamese": "Cảm ơn tất cả các bạn đã đến buổi họp báo này. Như các bạn đã biết, công tác cải tạo Cầu Grand Falls đã được tiến hành gần hai năm nay."
      },
      {
        "id": "p4-83-2",
        "speaker": "Speaker",
        "text": "We're nearing the final stage of sanding and painting the newly built portions of this major construction project.",
        "vietnamese": "Chúng tôi đang tiến gần đến giai đoạn cuối cùng là chà nhám và sơn các phần mới xây của dự án xây dựng trọng điểm này."
      },
      {
        "id": "p4-83-3",
        "speaker": "Speaker",
        "text": "Some community members have expressed concern about environmental impact. However, I want to emphasize that all required studies were conducted a year ago, confirming full safety compliance.",
        "vietnamese": "Một số người dân trong cộng đồng đã bày tỏ lo ngại về tác động môi trường. Tuy nhiên, tôi muốn nhấn mạnh rằng tất cả các nghiên cứu theo quy định đã được thực hiện từ một năm trước, khẳng định tuân thủ đầy đủ an toàn."
      },
      {
        "id": "p4-83-4",
        "speaker": "Speaker",
        "text": "Now, our city council representative will discuss plans for the upcoming opening ceremony next month.",
        "vietnamese": "Bây giờ, đại diện hội đồng thành phố của chúng tôi sẽ thảo luận về kế hoạch cho buổi lễ khánh thành sắp tới vào tháng sau."
      }
    ],
    "questions": [
      {
        "num": 83,
        "question": "What is the speech mainly about?",
        "vietnameseQuestion": "Bài phát biểu chủ yếu nói về điều gì?",
        "options": [
          {
            "key": "A",
            "text": "A financial report",
            "vietnamese": "Báo cáo tài chính"
          },
          {
            "key": "B",
            "text": "A round of promotions",
            "vietnamese": "Đợt thăng chức"
          },
          {
            "key": "C",
            "text": "A product prototype",
            "vietnamese": "Mẫu sản phẩm thử nghiệm"
          },
          {
            "key": "D",
            "text": "A construction project",
            "vietnamese": "Dự án xây dựng / thi công"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Người nói mở đầu về công trình cải tạo Cầu Grand Falls: 'the newly built portions of this major construction project' (dự án xây dựng - A construction project)."
      },
      {
        "num": 84,
        "question": "Why does the speaker say, \"all required studies were conducted a year ago\"?",
        "vietnameseQuestion": "Tại sao người nói lại nói, \"tất cả các nghiên cứu theo quy định đã được thực hiện từ một năm trước\"?",
        "options": [
          {
            "key": "A",
            "text": "To correct a timeline error",
            "vietnamese": "Để đính chính lỗi mốc thời gian"
          },
          {
            "key": "B",
            "text": "To provide reassurance",
            "vietnamese": "Để trấn an dư luận / mang lại sự an tâm"
          },
          {
            "key": "C",
            "text": "To deny responsibility for a problem",
            "vietnamese": "Để phủ nhận trách nhiệm về một sự cố"
          },
          {
            "key": "D",
            "text": "To argue that a new study is needed",
            "vietnamese": "Để lập luận rằng cần có nghiên cứu mới"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Khi công chúng lo lắng về môi trường, người nói khẳng định các khảo sát đã hoàn tất từ năm ngoái nhằm trấn an người dân (To provide reassurance)."
      },
      {
        "num": 85,
        "question": "What will the next speaker discuss?",
        "vietnameseQuestion": "Diễn giả tiếp theo sẽ thảo luận về điều gì?",
        "options": [
          {
            "key": "A",
            "text": "A job fair",
            "vietnamese": "Hội chợ việc làm"
          },
          {
            "key": "B",
            "text": "A school opening",
            "vietnamese": "Lễ khai giảng trường học"
          },
          {
            "key": "C",
            "text": "A ceremony",
            "vietnamese": "Một buổi lễ khánh thành / kỷ niệm"
          },
          {
            "key": "D",
            "text": "A sporting event",
            "vietnamese": "Một sự kiện thể thao"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Người nói giới thiệu: 'our city council representative will discuss plans for the upcoming opening ceremony next month' (buổi lễ - A ceremony)."
      }
    ],
    "vocabulary": [
      {
        "word": "press conference",
        "meaning": "buổi họp báo",
        "partOfSpeech": "n"
      },
      {
        "word": "construction project",
        "meaning": "dự án công trình xây dựng",
        "partOfSpeech": "n"
      },
      {
        "word": "reassurance",
        "meaning": "sự trấn an, sự bảo đảm cho yên lòng",
        "partOfSpeech": "n"
      },
      {
        "word": "opening ceremony",
        "meaning": "lễ khai mạc, lễ khánh thành",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part4-86-88",
    "part": 4,
    "partTitle": "Part 4: Bài nói chuyện",
    "questionRange": "Câu 86 - 88",
    "title": "Part 4 - Câu 86 - 88: Ban quản lý tòa nhà thông báo kiện hàng chưa nhận",
    "audioSrc": "/audio/test5_2024.mp3",
    "startTime": 2327.22,
    "endTime": 2408.77,
    "transcript": [
      {
        "id": "p4-86-1",
        "speaker": "Speaker",
        "text": "Hello, Mr. Smith. I hope you're getting settled into your office space in our building. I'm calling from the property management office on the first floor.",
        "vietnamese": "Xin chào ông Smith. Tôi hy vọng ông đang dần ổn định tại không gian văn phòng của mình trong tòa nhà chúng tôi. Tôi gọi từ văn phòng ban quản lý tòa nhà ở tầng một."
      },
      {
        "id": "p4-86-2",
        "speaker": "Speaker",
        "text": "I'm calling about some large delivery packages that arrived for your company. They are currently taking up space in our ground floor lobby.",
        "vietnamese": "Tôi gọi về một số kiện hàng giao có kích thước lớn gửi đến cho công ty của ông. Hiện chúng đang chiếm khá nhiều diện tích ở sảnh tầng trệt của chúng tôi."
      },
      {
        "id": "p4-86-3",
        "speaker": "Speaker",
        "text": "It's been ten days since they were dropped off, and building safety regulations prohibit keeping packages in public corridors.",
        "vietnamese": "Đã mười ngày trôi qua kể từ khi chúng được giao đến, và quy định an toàn của tòa nhà cấm để các kiện hàng ở hành lang công cộng."
      },
      {
        "id": "p4-86-4",
        "speaker": "Speaker",
        "text": "If you don't have staff available to carry them up right now, I can open the door to our basement storage room so our maintenance crew can move them inside.",
        "vietnamese": "Nếu hiện tại ông chưa có nhân viên để mang chúng lên, tôi có thể mở cửa phòng kho dưới tầng hầm để đội bảo trì của chúng tôi chuyển chúng vào bên trong."
      }
    ],
    "questions": [
      {
        "num": 86,
        "question": "Who most likely is the speaker?",
        "vietnameseQuestion": "Người nói nhiều khả năng là ai nhất?",
        "options": [
          {
            "key": "A",
            "text": "A salesperson",
            "vietnamese": "Nhân viên bán hàng"
          },
          {
            "key": "B",
            "text": "A government official",
            "vietnamese": "Quan chức chính phủ"
          },
          {
            "key": "C",
            "text": "An interior designer",
            "vietnamese": "Nhà thiết kế nội thất"
          },
          {
            "key": "D",
            "text": "A building manager",
            "vietnamese": "Người quản lý tòa nhà"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Người nói giới thiệu gọi từ 'property management office' (văn phòng quản lý bất động sản/tòa nhà) nên anh ấy là quản lý tòa nhà (A building manager)."
      },
      {
        "num": 87,
        "question": "Why does the speaker say, \"It's been ten days\"?",
        "vietnameseQuestion": "Tại sao người nói lại nói, \"Đã mười ngày trôi qua\"?",
        "options": [
          {
            "key": "A",
            "text": "To explain an expense",
            "vietnamese": "Để giải thích một khoản chi tiêu"
          },
          {
            "key": "B",
            "text": "To point out a problem",
            "vietnamese": "Để chỉ ra một vấn đề / sự vi phạm quy định"
          },
          {
            "key": "C",
            "text": "To make an offer",
            "vietnamese": "Để đưa ra lời đề nghị"
          },
          {
            "key": "D",
            "text": "To thank a colleague",
            "vietnamese": "Để cảm ơn một đồng nghiệp"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Người nói nhấn mạnh đã 10 ngày để chỉ ra vấn đề các kiện hàng để ở sảnh quá lâu và vi phạm quy định an toàn (To point out a problem)."
      },
      {
        "num": 88,
        "question": "What does the speaker offer to do?",
        "vietnameseQuestion": "Người nói đề nghị làm gì?",
        "options": [
          {
            "key": "A",
            "text": "Open the door to a room",
            "vietnamese": "Mở cửa một căn phòng (phòng kho)"
          },
          {
            "key": "B",
            "text": "Reset a password",
            "vietnamese": "Đặt lại mật khẩu"
          },
          {
            "key": "C",
            "text": "Send a copy of a document",
            "vietnamese": "Gửi một bản sao tài liệu"
          },
          {
            "key": "D",
            "text": "Refund a payment",
            "vietnamese": "Hoàn lại tiền thanh toán"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Người nói đề nghị: 'I can open the door to our basement storage room' (mở cửa phòng kho tầng hầm - Open the door to a room)."
      }
    ],
    "vocabulary": [
      {
        "word": "property management",
        "meaning": "ban quản lý tòa nhà / bất động sản",
        "partOfSpeech": "n"
      },
      {
        "word": "corridor",
        "meaning": "hành lang",
        "partOfSpeech": "n"
      },
      {
        "word": "safety regulations",
        "meaning": "các quy định an toàn",
        "partOfSpeech": "n"
      },
      {
        "word": "storage room",
        "meaning": "phòng kho chứa đồ",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part4-89-91",
    "part": 4,
    "partTitle": "Part 4: Bài nói chuyện",
    "questionRange": "Câu 89 - 91",
    "title": "Part 4 - Câu 89 - 91: Dự án xây dựng trang trại điện gió tại Thung lũng Ferndale",
    "audioSrc": "/audio/test5_2024.mp3",
    "startTime": 2408.77,
    "endTime": 2479.25,
    "transcript": [
      {
        "id": "p4-89-1",
        "speaker": "Speaker",
        "text": "Our next story concerns Ferndale Valley. It's well known that the area is one of the windiest locations in the entire region, and one energy company would like to take advantage of that natural energy source.",
        "vietnamese": "Bản tin tiếp theo của chúng tôi liên quan đến Thung lũng Ferndale. Vùng này nổi tiếng là một trong những nơi nhiều gió nhất trong toàn khu vực, và một công ty năng lượng muốn tận dụng nguồn năng lượng tự nhiên đó."
      },
      {
        "id": "p4-89-2",
        "speaker": "Speaker",
        "text": "Breeze Energy plans to construct a massive wind turbine farm across several thousand acres.",
        "vietnamese": "Công ty Năng lượng Breeze lên kế hoạch xây dựng một trang trại tuabin gió khổng lồ trên diện tích vài nghìn mẫu Anh."
      },
      {
        "id": "p4-89-3",
        "speaker": "Speaker",
        "text": "To do so, they have approached local farmers who own agricultural acreage to participate in the wind development project.",
        "vietnamese": "Để làm được điều đó, họ đã tiếp cận các nông dân địa phương sở hữu diện tích đất nông nghiệp để cùng tham gia dự án phát triển điện gió."
      },
      {
        "id": "p4-89-4",
        "speaker": "Speaker",
        "text": "In exchange for leasing sections of their farmland for turbine installation, participating landowners will receive annual financial compensation.",
        "vietnamese": "Đổi lại việc cho thuê các phần đất canh tác để lắp đặt tuabin, những chủ đất tham gia sẽ nhận được khoản tiền bồi thường / thù lao tài chính hàng năm."
      }
    ],
    "questions": [
      {
        "num": 89,
        "question": "What is mentioned about Ferndale Valley?",
        "vietnameseQuestion": "Điều gì được đề cập về Thung lũng Ferndale?",
        "options": [
          {
            "key": "A",
            "text": "It is heavily forested.",
            "vietnamese": "Nơi đây có rừng rậm bao phủ."
          },
          {
            "key": "B",
            "text": "It attracts many tourists.",
            "vietnamese": "Nó thu hút nhiều khách du lịch."
          },
          {
            "key": "C",
            "text": "It is developing quickly.",
            "vietnamese": "Nó đang phát triển nhanh chóng."
          },
          {
            "key": "D",
            "text": "It is very windy.",
            "vietnamese": "Nơi đây có rất nhiều gió."
          }
        ],
        "correctAnswer": "D",
        "explanation": "Bản tin nêu rõ: 'the area is one of the windiest locations in the entire region' (rất nhiều gió - It is very windy)."
      },
      {
        "num": 90,
        "question": "Who will participate in a project?",
        "vietnameseQuestion": "Ai sẽ tham gia vào dự án này?",
        "options": [
          {
            "key": "A",
            "text": "Biologists",
            "vietnamese": "Các nhà sinh học"
          },
          {
            "key": "B",
            "text": "Farmers",
            "vietnamese": "Các nông dân"
          },
          {
            "key": "C",
            "text": "Airline pilots",
            "vietnamese": "Các phi công hãng hàng không"
          },
          {
            "key": "D",
            "text": "Real estate agents",
            "vietnamese": "Các nhân viên môi giới bất động sản"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Công ty đã mời các nông dân tham gia: 'they have approached local farmers who own agricultural acreage to participate' (nông dân - Farmers)."
      },
      {
        "num": 91,
        "question": "What will the participants receive?",
        "vietnameseQuestion": "Những người tham gia sẽ nhận được gì?",
        "options": [
          {
            "key": "A",
            "text": "Tickets to an industry event",
            "vietnamese": "Vé tham dự sự kiện ngành"
          },
          {
            "key": "B",
            "text": "Technical assistance",
            "vietnamese": "Hỗ trợ kỹ thuật"
          },
          {
            "key": "C",
            "text": "Financial compensation",
            "vietnamese": "Khoản bồi thường / thù lao tài chính"
          },
          {
            "key": "D",
            "text": "Advertising advice",
            "vietnamese": "Lời khuyên quảng cáo"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Bản tin nêu rõ quyền lợi: 'participating landowners will receive annual financial compensation' (khoản bồi hoàn tài chính - Financial compensation)."
      }
    ],
    "vocabulary": [
      {
        "word": "wind turbine",
        "meaning": "tuabin gió",
        "partOfSpeech": "n"
      },
      {
        "word": "take advantage of",
        "meaning": "tận dụng, khai thác",
        "partOfSpeech": "phr"
      },
      {
        "word": "acreage",
        "meaning": "diện tích đất đai (tính theo mẫu Anh)",
        "partOfSpeech": "n"
      },
      {
        "word": "compensation",
        "meaning": "tiền bồi thường, thù lao",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part4-92-94",
    "part": 4,
    "partTitle": "Part 4: Bài nói chuyện",
    "questionRange": "Câu 92 - 94",
    "title": "Part 4 - Câu 92 - 94: Xác nhận giao thùng chứa đồ từ Công ty Ferris Portable Storage",
    "audioSrc": "/audio/test5_2024.mp3",
    "startTime": 2479.25,
    "endTime": 2558.58,
    "transcript": [
      {
        "id": "p4-92-1",
        "speaker": "Speaker",
        "text": "Hello, Mr. Kimura. I'm calling from Ferris Portable Storage. You recently ordered a container to store and move your household belongings in.",
        "vietnamese": "Xin chào ông Kimura. Tôi gọi từ Công ty Cho thuê Kho lưu trữ Di động Ferris. Gần đây ông đã đặt một thùng chứa để lưu trữ và vận chuyển đồ đạc gia đình."
      },
      {
        "id": "p4-92-2",
        "speaker": "Speaker",
        "text": "I'm calling to confirm that our driver is scheduled to deliver the storage unit to your driveway tomorrow morning between 9 and 10 A.M.",
        "vietnamese": "Tôi gọi để xác nhận rằng tài xế của chúng tôi theo lịch trình sẽ giao thùng lưu trữ đến lối vào nhà của ông vào sáng mai trong khoảng từ 9 đến 10 giờ sáng."
      },
      {
        "id": "p4-92-3",
        "speaker": "Speaker",
        "text": "Please make sure your driveway is clear of any parked cars or obstructions so our truck can drop off the container smoothly.",
        "vietnamese": "Xin vui lòng đảm bảo lối xe vào nhà không có ô tô đậu hoặc vật cản để xe tải của chúng tôi có thể hạ thùng chứa xuống một cách thuận lợi."
      },
      {
        "id": "p4-92-4",
        "speaker": "Speaker",
        "text": "Also, after delivery, we would appreciate it if you could complete a brief online customer survey to help us improve our service.",
        "vietnamese": "Ngoài ra, sau khi nhận hàng, chúng tôi sẽ rất cảm kích nếu ông có thể hoàn thành một bản khảo sát khách hàng trực tuyến ngắn để giúp chúng tôi cải thiện dịch vụ."
      }
    ],
    "questions": [
      {
        "num": 92,
        "question": "What kind of business does the speaker work for?",
        "vietnameseQuestion": "Người nói làm việc cho loại hình kinh doanh nào?",
        "options": [
          {
            "key": "A",
            "text": "A construction firm",
            "vietnamese": "Một công ty xây dựng"
          },
          {
            "key": "B",
            "text": "A landscaping service",
            "vietnamese": "Dịch vụ cảnh quan cây xanh"
          },
          {
            "key": "C",
            "text": "A storage company",
            "vietnamese": "Một công ty dịch vụ kho bãi lưu trữ"
          },
          {
            "key": "D",
            "text": "An auto repair shop",
            "vietnamese": "Một xưởng sửa chữa ô tô"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Người nói giới thiệu gọi từ 'Ferris Portable Storage' cung cấp thùng chứa lưu trữ đồ nên đây là công ty kho bãi (A storage company)."
      },
      {
        "num": 93,
        "question": "Why is the speaker calling?",
        "vietnameseQuestion": "Tại sao người nói lại gọi điện?",
        "options": [
          {
            "key": "A",
            "text": "To apologize for a cancellation",
            "vietnamese": "Để xin lỗi về một sự hủy bỏ"
          },
          {
            "key": "B",
            "text": "To confirm a delivery",
            "vietnamese": "Để xác nhận một chuyến giao hàng"
          },
          {
            "key": "C",
            "text": "To share a price quote",
            "vietnamese": "Để gửi báo giá"
          },
          {
            "key": "D",
            "text": "To update some contact information",
            "vietnamese": "Để cập nhật một số thông tin liên hệ"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Người nói nêu lý do: 'I\\'m calling to confirm that our driver is scheduled to deliver the storage unit... tomorrow morning' (xác nhận giao hàng - To confirm a delivery)."
      },
      {
        "num": 94,
        "question": "What does the speaker ask the listener to do?",
        "vietnameseQuestion": "Người nói yêu cầu người nghe làm gì?",
        "options": [
          {
            "key": "A",
            "text": "Purchase a warranty",
            "vietnamese": "Mua gói bảo hành"
          },
          {
            "key": "B",
            "text": "Complete a survey",
            "vietnamese": "Hoàn thành một bản khảo sát"
          },
          {
            "key": "C",
            "text": "Clean up an area",
            "vietnamese": "Dọn dẹp một khu vực"
          },
          {
            "key": "D",
            "text": "Apply for a permit",
            "vietnamese": "Xin cấp giấy phép"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Người nói nhờ: 'we would appreciate it if you could complete a brief online customer survey' (hoàn thành khảo sát - Complete a survey)."
      }
    ],
    "vocabulary": [
      {
        "word": "portable storage",
        "meaning": "kho lưu trữ di động",
        "partOfSpeech": "n"
      },
      {
        "word": "driveway",
        "meaning": "đường lái xe vào nhà",
        "partOfSpeech": "n"
      },
      {
        "word": "obstruction",
        "meaning": "vật cản trở, chướng ngại vật",
        "partOfSpeech": "n"
      },
      {
        "word": "survey",
        "meaning": "bản khảo sát ý kiến",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part4-95-97",
    "part": 4,
    "partTitle": "Part 4: Bài nói chuyện",
    "questionRange": "Câu 95 - 97",
    "title": "Part 4 - Câu 95 - 97: Hướng dẫn tủ đồ vệ sinh và sản phẩm tẩy rửa CleanSure",
    "audioSrc": "/audio/test5_2024.mp3",
    "startTime": 2558.58,
    "endTime": 2638.09,
    "graphicImage": "/images/intensive/test5_2024/q95_97.png",
    "image": "/images/intensive/test5_2024/q95_97.png",
    "transcript": [
      {
        "id": "p4-95-1",
        "speaker": "Speaker",
        "text": "This is the custodial staff's cabinet for cleaning supplies. As part of your new employee training, you'll be expected to learn which cleaning solutions are appropriate for different surfaces, such as carpet and tile flooring.",
        "vietnamese": "Đây là tủ đựng đồ vệ sinh của đội ngũ tạp vụ. Là một phần trong khóa đào tạo nhân viên mới của các bạn, các bạn sẽ phải học xem dung dịch tẩy rửa nào phù hợp cho các bề mặt khác nhau, chẳng hạn như thảm trải sàn và sàn lát gạch."
      },
      {
        "id": "p4-95-2",
        "speaker": "Speaker",
        "text": "If you look at the supply chart on the door, we have our trusted brands Klennlee, Baxlon, and Z-Factor. The item on the far right, CleanSure, is brand new this week. We're testing it out for polishing glass.",
        "vietnamese": "Nếu các bạn nhìn vào bảng đồ dùng trên cánh cửa tủ, chúng ta có các thương hiệu quen thuộc Klennlee, Baxlon, và Z-Factor. Sản phẩm ở ngoài cùng bên phải, CleanSure, là sản phẩm hoàn toàn mới trong tuần này. Chúng ta đang dùng thử nó để lau bóng kính."
      },
      {
        "id": "p4-95-3",
        "speaker": "Speaker",
        "text": "Remember to restock your carts every morning. Keep in mind that at one o'clock on Tuesdays, our weekly delivery arrives with fresh stock from the distributor, so the supply room must remain unlocked then.",
        "vietnamese": "Hãy nhớ bổ sung đầy đủ đồ vào xe đẩy của các bạn mỗi sáng. Xin lưu ý rằng vào lúc 1 giờ chiều thứ Ba hàng tuần, chuyến giao hàng định kỳ từ nhà phân phối sẽ đến với nguồn hàng mới, vì vậy phòng đồ dùng phải luôn mở khóa vào thời điểm đó."
      }
    ],
    "questions": [
      {
        "num": 95,
        "question": "What is the purpose of the talk?",
        "vietnameseQuestion": "Mục đích của bài nói chuyện là gì?",
        "options": [
          {
            "key": "A",
            "text": "To discuss a schedule",
            "vietnamese": "Để thảo luận về một lịch trình"
          },
          {
            "key": "B",
            "text": "To consider changing suppliers",
            "vietnamese": "Để cân nhắc thay đổi nhà cung cấp"
          },
          {
            "key": "C",
            "text": "To train employees",
            "vietnamese": "Để đào tạo nhân viên"
          },
          {
            "key": "D",
            "text": "To develop an inventory system",
            "vietnamese": "Để phát triển hệ thống quản lý hàng tồn kho"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Người nói chỉ rõ: 'As part of your new employee training, you\\'ll be expected to learn...' (đào tạo nhân viên - To train employees)."
      },
      {
        "num": 96,
        "question": "Look at the graphic. Which product does the speaker say is new?",
        "vietnameseQuestion": "Nhìn vào hình ảnh. Người nói cho biết sản phẩm nào là mới?",
        "options": [
          {
            "key": "A",
            "text": "Klennlee",
            "vietnamese": "Klennlee"
          },
          {
            "key": "B",
            "text": "Baxlon",
            "vietnamese": "Baxlon"
          },
          {
            "key": "C",
            "text": "Z-Factor",
            "vietnamese": "Z-Factor"
          },
          {
            "key": "D",
            "text": "CleanSure",
            "vietnamese": "CleanSure"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Người nói cho biết sản phẩm ở ngoài cùng bên phải là sản phẩm mới: 'The item on the far right, CleanSure, is brand new this week'. Đối chiếu hình ảnh chai lọ trên kệ, chai ngoài cùng bên phải là CleanSure (đáp án D)."
      },
      {
        "num": 97,
        "question": "What happens at one o'clock on Tuesdays?",
        "vietnameseQuestion": "Điều gì diễn ra vào lúc một giờ chiều thứ Ba?",
        "options": [
          {
            "key": "A",
            "text": "An expense report is due.",
            "vietnamese": "Hạn chót nộp báo cáo chi phí."
          },
          {
            "key": "B",
            "text": "A work shift begins.",
            "vietnamese": "Một ca làm việc bắt đầu."
          },
          {
            "key": "C",
            "text": "A staff meeting is held.",
            "vietnamese": "Một cuộc họp nhân viên được tổ chức."
          },
          {
            "key": "D",
            "text": "A delivery arrives.",
            "vietnamese": "Một chuyến hàng giao đến."
          }
        ],
        "correctAnswer": "D",
        "explanation": "Người nói lưu ý: 'at one o\\'clock on Tuesdays, our weekly delivery arrives with fresh stock' (chuyến hàng giao đến - A delivery arrives)."
      }
    ],
    "vocabulary": [
      {
        "word": "custodial staff",
        "meaning": "nhân viên tạp vụ, nhân viên vệ sinh",
        "partOfSpeech": "n"
      },
      {
        "word": "cleaning supplies",
        "meaning": "dụng cụ/hóa chất tẩy rửa vệ sinh",
        "partOfSpeech": "n"
      },
      {
        "word": "restock",
        "meaning": "bổ sung hàng dự trữ",
        "partOfSpeech": "v"
      },
      {
        "word": "distributor",
        "meaning": "nhà phân phối",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part4-98-100",
    "part": 4,
    "partTitle": "Part 4: Bài nói chuyện",
    "questionRange": "Câu 98 - 100",
    "title": "Part 4 - Câu 98 - 100: Hội thảo chuyên đề tiếp thị video và giai đoạn sản xuất",
    "audioSrc": "/audio/test5_2024.mp3",
    "startTime": 2638.09,
    "endTime": 2727.93,
    "graphicImage": "/images/intensive/test5_2024/q98_100.png",
    "image": "/images/intensive/test5_2024/q98_100.png",
    "transcript": [
      {
        "id": "p4-98-1",
        "speaker": "Speaker",
        "text": "Welcome back to this professional development workshop. We'll continue from where we left off in our discussion on digital marketing campaigns.",
        "vietnamese": "Chào mừng các bạn quay trở lại với buổi hội thảo phát triển chuyên môn này. Chúng ta sẽ tiếp tục nội dung từ phần đã tạm dừng trong cuộc thảo luận về các chiến dịch tiếp thị kỹ thuật số."
      },
      {
        "id": "p4-98-2",
        "speaker": "Speaker",
        "text": "Last week, we covered Goal Setting and Planning. Today, we turn to Step 3 on your flowchart, which covers the filming and production stage of making promotional videos.",
        "vietnamese": "Tuần trước, chúng ta đã tìm hiểu về Thiết lập mục tiêu và Lập kế hoạch. Hôm nay, chúng ta chuyển sang Bước 3 trên lưu đồ của các bạn, bước này bao gồm giai đoạn quay phim và sản xuất các video quảng bá."
      },
      {
        "id": "p4-98-3",
        "speaker": "Speaker",
        "text": "Before we begin our exercise, we're fortunate to have a guest speaker with us, award-winning director Marcus Vance, who will share insights from his commercial studio.",
        "vietnamese": "Trước khi chúng ta bắt đầu bài tập thực hành, chúng ta rất may mắn có một diễn giả khách mời cùng tham gia, đạo diễn từng đoạt giải thưởng Marcus Vance, người sẽ chia sẻ những hiểu biết thực tế từ phim trường thương mại của ông."
      }
    ],
    "questions": [
      {
        "num": 98,
        "question": "What is the topic of the course?",
        "vietnameseQuestion": "Chủ đề của khóa học này là gì?",
        "options": [
          {
            "key": "A",
            "text": "Marketing",
            "vietnamese": "Tiếp thị / Marketing"
          },
          {
            "key": "B",
            "text": "Investing",
            "vietnamese": "Đầu tư tài chính"
          },
          {
            "key": "C",
            "text": "Documentary filmmaking",
            "vietnamese": "Làm phim tài liệu"
          },
          {
            "key": "D",
            "text": "Software development",
            "vietnamese": "Phát triển phần mềm"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Người nói cho biết: 'our discussion on digital marketing campaigns' (chiến dịch tiếp thị kỹ thuật số - Marketing)."
      },
      {
        "num": 99,
        "question": "Look at the graphic. Which step will be discussed today?",
        "vietnameseQuestion": "Nhìn vào hình ảnh. Bước nào sẽ được thảo luận trong ngày hôm nay?",
        "options": [
          {
            "key": "A",
            "text": "Step 1",
            "vietnamese": "Bước 1"
          },
          {
            "key": "B",
            "text": "Step 2",
            "vietnamese": "Bước 2"
          },
          {
            "key": "C",
            "text": "Step 3",
            "vietnamese": "Bước 3"
          },
          {
            "key": "D",
            "text": "Step 4",
            "vietnamese": "Bước 4"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Người nói nêu rõ: 'Today, we turn to Step 3 on your flowchart, which covers the filming and production stage'. Đối chiếu lưu đồ, bước được thảo luận là Step 3 (Production) (đáp án C)."
      },
      {
        "num": 100,
        "question": "What will the listeners do next?",
        "vietnameseQuestion": "Những người nghe sẽ làm gì tiếp theo?",
        "options": [
          {
            "key": "A",
            "text": "Read a handout",
            "vietnamese": "Đọc một tài liệu phát tay"
          },
          {
            "key": "B",
            "text": "Watch a video",
            "vietnamese": "Xem một đoạn video"
          },
          {
            "key": "C",
            "text": "Take a coffee break",
            "vietnamese": "Nghỉ giải lao uống cà phê"
          },
          {
            "key": "D",
            "text": "Listen to a guest speaker",
            "vietnamese": "Lắng nghe một diễn giả khách mời"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Người nói giới thiệu: 'we\\'re fortunate to have a guest speaker with us... who will share insights' (lắng nghe diễn giả khách mời - Listen to a guest speaker)."
      }
    ],
    "vocabulary": [
      {
        "word": "marketing campaign",
        "meaning": "chiến dịch tiếp thị",
        "partOfSpeech": "n"
      },
      {
        "word": "flowchart",
        "meaning": "sơ đồ quy trình, lưu đồ",
        "partOfSpeech": "n"
      },
      {
        "word": "promotional video",
        "meaning": "video quảng bá sản phẩm",
        "partOfSpeech": "n"
      },
      {
        "word": "guest speaker",
        "meaning": "diễn giả khách mời",
        "partOfSpeech": "n"
      }
    ]
  }
];
