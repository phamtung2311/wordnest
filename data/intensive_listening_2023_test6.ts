// Dữ liệu luyện nghe chi tiết (Intensive Listening) - ETS TOEIC 2023 Test 6
// Áp dụng kỹ thuật Virtual Timestamp Slicing từ audio gốc /audio/test6_2023.mp3
// Transcript song ngữ Anh - Việt, câu hỏi, đáp án và từ vựng trọng tâm

import type { IntensiveListeningItem } from './intensive_listening_types';

export const test6_2023_IntensiveData: IntensiveListeningItem[] = [
  {
    "id": "part1-1",
    "part": 1,
    "partTitle": "Part 1: Mô tả hình ảnh",
    "questionRange": "Câu 1",
    "title": "Part 1 - Câu 1: Một người đàn ông đang mang một chiếc ba lô.",
    "audioSrc": "/audio/test6_2023.mp3",
    "startTime": 99.3,
    "endTime": 118.37,
    "imageUrl": "/images/intensive/test6_2023/q1.png",
    "image": "/images/intensive/test6_2023/q1.png",
    "transcript": [
      {
        "id": "p1-1-a",
        "speaker": "Speaker",
        "text": "(A) A man is carrying a backpack.",
        "vietnamese": "(A) Một người đàn ông đang mang một chiếc ba lô."
      },
      {
        "id": "p1-1-b",
        "speaker": "Speaker",
        "text": "(B) A man is tying his shoe lace.",
        "vietnamese": "(B) Một người đàn ông đang buộc dây giày của mình."
      },
      {
        "id": "p1-1-c",
        "speaker": "Speaker",
        "text": "(C) A woman is purchasing a snack.",
        "vietnamese": "(C) Một người phụ nữ đang mua đồ ăn nhẹ."
      },
      {
        "id": "p1-1-d",
        "speaker": "Speaker",
        "text": "(D) A woman is picking up a ticket from the ground.",
        "vietnamese": "(D) Một người phụ nữ đang nhặt một tấm vé từ dưới đất."
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
            "text": "A man is carrying a backpack.",
            "vietnamese": "Một người đàn ông đang mang một chiếc ba lô."
          },
          {
            "key": "B",
            "text": "A man is tying his shoe lace.",
            "vietnamese": "Một người đàn ông đang buộc dây giày của mình."
          },
          {
            "key": "C",
            "text": "A woman is purchasing a snack.",
            "vietnamese": "Một người phụ nữ đang mua đồ ăn nhẹ."
          },
          {
            "key": "D",
            "text": "A woman is picking up a ticket from the ground.",
            "vietnamese": "Một người phụ nữ đang nhặt một tấm vé từ dưới đất."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là (A): \"A man is carrying a backpack.\" (Một người đàn ông đang mang một chiếc ba lô.) mô tả chính xác hoạt động và cảnh vật trong hình."
      }
    ],
    "vocabulary": [
      {
        "word": "backpack",
        "meaning": "ba lô",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part1-2",
    "part": 1,
    "partTitle": "Part 1: Mô tả hình ảnh",
    "questionRange": "Câu 2",
    "title": "Part 1 - Câu 2: Cô ấy đang sử dụng lò vi sóng.",
    "audioSrc": "/audio/test6_2023.mp3",
    "startTime": 118.37,
    "endTime": 150.23,
    "imageUrl": "/images/intensive/test6_2023/q2.png",
    "image": "/images/intensive/test6_2023/q2.png",
    "transcript": [
      {
        "id": "p1-2-a",
        "speaker": "Speaker",
        "text": "(A) She's wiping off a counter.",
        "vietnamese": "(A) Cô ấy đang lau quầy."
      },
      {
        "id": "p1-2-b",
        "speaker": "Speaker",
        "text": "(B) She's putting dishes in a sink.",
        "vietnamese": "(B) Cô ấy đang đặt bát đĩa vào bồn rửa."
      },
      {
        "id": "p1-2-c",
        "speaker": "Speaker",
        "text": "(C) She's using a microwave oven.",
        "vietnamese": "(C) Cô ấy đang sử dụng lò vi sóng."
      },
      {
        "id": "p1-2-d",
        "speaker": "Speaker",
        "text": "(D) She's rinsing a cloth under a faucet.",
        "vietnamese": "(D) Cô ấy đang giặt một miếng vải dưới vòi nước."
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
            "text": "She's wiping off a counter.",
            "vietnamese": "Cô ấy đang lau quầy."
          },
          {
            "key": "B",
            "text": "She's putting dishes in a sink.",
            "vietnamese": "Cô ấy đang đặt bát đĩa vào bồn rửa."
          },
          {
            "key": "C",
            "text": "She's using a microwave oven.",
            "vietnamese": "Cô ấy đang sử dụng lò vi sóng."
          },
          {
            "key": "D",
            "text": "She's rinsing a cloth under a faucet.",
            "vietnamese": "Cô ấy đang giặt một miếng vải dưới vòi nước."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"She's using a microwave oven.\" (Cô ấy đang sử dụng lò vi sóng.) mô tả chính xác hoạt động và cảnh vật trong hình."
      }
    ],
    "vocabulary": [
      {
        "word": "counter",
        "meaning": "quầy hàng, quầy phục vụ",
        "partOfSpeech": "n"
      },
      {
        "word": "sink",
        "meaning": "bồn rửa chén, bồn rửa",
        "partOfSpeech": "n"
      },
      {
        "word": "oven",
        "meaning": "lò nướng",
        "partOfSpeech": "n"
      },
      {
        "word": "faucet",
        "meaning": "vòi nước",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part1-3",
    "part": 1,
    "partTitle": "Part 1: Mô tả hình ảnh",
    "questionRange": "Câu 3",
    "title": "Part 1 - Câu 3: Một người đàn ông đang đi phía sau một số ô tô đang đậu.",
    "audioSrc": "/audio/test6_2023.mp3",
    "startTime": 150.23,
    "endTime": 182.13,
    "imageUrl": "/images/intensive/test6_2023/q3.png",
    "image": "/images/intensive/test6_2023/q3.png",
    "transcript": [
      {
        "id": "p1-3-a",
        "speaker": "Speaker",
        "text": "(A) A man is walking behind some parked cars.",
        "vietnamese": "(A) Một người đàn ông đang đi phía sau một số ô tô đang đậu."
      },
      {
        "id": "p1-3-b",
        "speaker": "Speaker",
        "text": "(B) A woman is cleaning snow off a walkway.",
        "vietnamese": "(B) Một người phụ nữ đang dọn tuyết trên lối đi."
      },
      {
        "id": "p1-3-c",
        "speaker": "Speaker",
        "text": "(C) A man is maintaining a fence.",
        "vietnamese": "(C) Một người đàn ông đang bảo trì hàng rào."
      },
      {
        "id": "p1-3-d",
        "speaker": "Speaker",
        "text": "(D) A woman is taking off a snow jacket.",
        "vietnamese": "(D) Một người phụ nữ đang cởi áo khoác tuyết."
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
            "text": "A man is walking behind some parked cars.",
            "vietnamese": "Một người đàn ông đang đi phía sau một số ô tô đang đậu."
          },
          {
            "key": "B",
            "text": "A woman is cleaning snow off a walkway.",
            "vietnamese": "Một người phụ nữ đang dọn tuyết trên lối đi."
          },
          {
            "key": "C",
            "text": "A man is maintaining a fence.",
            "vietnamese": "Một người đàn ông đang bảo trì hàng rào."
          },
          {
            "key": "D",
            "text": "A woman is taking off a snow jacket.",
            "vietnamese": "Một người phụ nữ đang cởi áo khoác tuyết."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là (A): \"A man is walking behind some parked cars.\" (Một người đàn ông đang đi phía sau một số ô tô đang đậu.) mô tả chính xác hoạt động và cảnh vật trong hình."
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
      }
    ]
  },
  {
    "id": "part1-4",
    "part": 1,
    "partTitle": "Part 1: Mô tả hình ảnh",
    "questionRange": "Câu 4",
    "title": "Part 1 - Câu 4: Một số lọ được sắp xếp trên kệ.",
    "audioSrc": "/audio/test6_2023.mp3",
    "startTime": 182.13,
    "endTime": 203.26,
    "imageUrl": "/images/intensive/test6_2023/q4.png",
    "image": "/images/intensive/test6_2023/q4.png",
    "transcript": [
      {
        "id": "p1-4-a",
        "speaker": "Speaker",
        "text": "(A) He's placing a pan in an oven.",
        "vietnamese": "(A) Anh ấy đang đặt một cái chảo vào lò nướng."
      },
      {
        "id": "p1-4-b",
        "speaker": "Speaker",
        "text": "(B) He's hanging up an apron.",
        "vietnamese": "(B) Anh ấy đang treo một chiếc tạp dề."
      },
      {
        "id": "p1-4-c",
        "speaker": "Speaker",
        "text": "(C) Some pots are stacked on the floor.",
        "vietnamese": "(C) Một số chậu được xếp chồng lên nhau trên sàn nhà."
      },
      {
        "id": "p1-4-d",
        "speaker": "Speaker",
        "text": "(D) Some jars are arranged on shelves.",
        "vietnamese": "(D) Một số lọ được sắp xếp trên kệ."
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
            "text": "He's placing a pan in an oven.",
            "vietnamese": "Anh ấy đang đặt một cái chảo vào lò nướng."
          },
          {
            "key": "B",
            "text": "He's hanging up an apron.",
            "vietnamese": "Anh ấy đang treo một chiếc tạp dề."
          },
          {
            "key": "C",
            "text": "Some pots are stacked on the floor.",
            "vietnamese": "Một số chậu được xếp chồng lên nhau trên sàn nhà."
          },
          {
            "key": "D",
            "text": "Some jars are arranged on shelves.",
            "vietnamese": "Một số lọ được sắp xếp trên kệ."
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là (D): \"Some jars are arranged on shelves.\" (Một số lọ được sắp xếp trên kệ.) mô tả chính xác hoạt động và cảnh vật trong hình."
      }
    ],
    "vocabulary": [
      {
        "word": "oven",
        "meaning": "lò nướng",
        "partOfSpeech": "n"
      },
      {
        "word": "apron",
        "meaning": "tạp dề",
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
    "id": "part1-5",
    "part": 1,
    "partTitle": "Part 1: Mô tả hình ảnh",
    "questionRange": "Câu 5",
    "title": "Part 1 - Câu 5: Một chiếc ghế dài bằng kim loại không có người ngồi.",
    "audioSrc": "/audio/test6_2023.mp3",
    "startTime": 203.26,
    "endTime": 227.8,
    "imageUrl": "/images/intensive/test6_2023/q5.png",
    "image": "/images/intensive/test6_2023/q5.png",
    "transcript": [
      {
        "id": "p1-5-a",
        "speaker": "Speaker",
        "text": "(A) A building is under construction.",
        "vietnamese": "(A) Một tòa nhà đang được xây dựng."
      },
      {
        "id": "p1-5-b",
        "speaker": "Speaker",
        "text": "(B) A metal bench is unoccupied.",
        "vietnamese": "(B) Một chiếc ghế dài bằng kim loại không có người ngồi."
      },
      {
        "id": "p1-5-c",
        "speaker": "Speaker",
        "text": "(C) A bicycle is propped against a tree.",
        "vietnamese": "(C) Một chiếc xe đạp được tựa vào một cái cây."
      },
      {
        "id": "p1-5-d",
        "speaker": "Speaker",
        "text": "(D) A tree has fallen down.",
        "vietnamese": "(D) Một cái cây đã đổ xuống."
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
            "text": "A building is under construction.",
            "vietnamese": "Một tòa nhà đang được xây dựng."
          },
          {
            "key": "B",
            "text": "A metal bench is unoccupied.",
            "vietnamese": "Một chiếc ghế dài bằng kim loại không có người ngồi."
          },
          {
            "key": "C",
            "text": "A bicycle is propped against a tree.",
            "vietnamese": "Một chiếc xe đạp được tựa vào một cái cây."
          },
          {
            "key": "D",
            "text": "A tree has fallen down.",
            "vietnamese": "Một cái cây đã đổ xuống."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"A metal bench is unoccupied.\" (Một chiếc ghế dài bằng kim loại không có người ngồi.) mô tả chính xác hoạt động và cảnh vật trong hình."
      }
    ],
    "vocabulary": [
      {
        "word": "bench",
        "meaning": "ghế dài",
        "partOfSpeech": "n"
      },
      {
        "word": "against",
        "meaning": "tựa vào, áp sát vào",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part1-6",
    "part": 1,
    "partTitle": "Part 1: Mô tả hình ảnh",
    "questionRange": "Câu 6",
    "title": "Part 1 - Câu 6: Một khách hàng đang đứng gần một chiếc xe đẩy hàng.",
    "audioSrc": "/audio/test6_2023.mp3",
    "startTime": 227.8,
    "endTime": 261.89,
    "imageUrl": "/images/intensive/test6_2023/q6.png",
    "image": "/images/intensive/test6_2023/q6.png",
    "transcript": [
      {
        "id": "p1-6-a",
        "speaker": "Speaker",
        "text": "(A) A customer is standing near a shopping cart.",
        "vietnamese": "(A) Một khách hàng đang đứng gần một chiếc xe đẩy hàng."
      },
      {
        "id": "p1-6-b",
        "speaker": "Speaker",
        "text": "(B) Some bags have been left on the floor.",
        "vietnamese": "(B) Một số túi đã bị bỏ lại trên sàn nhà."
      },
      {
        "id": "p1-6-c",
        "speaker": "Speaker",
        "text": "(C) A shopping cart has been left in a parking area.",
        "vietnamese": "(C) Một chiếc xe đẩy hàng đã bị bỏ lại ở khu vực đậu xe."
      },
      {
        "id": "p1-6-d",
        "speaker": "Speaker",
        "text": "(D) A customer is leaning into a freezer.",
        "vietnamese": "(D) Một khách hàng đang dựa vào tủ đông."
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
            "text": "A customer is standing near a shopping cart.",
            "vietnamese": "Một khách hàng đang đứng gần một chiếc xe đẩy hàng."
          },
          {
            "key": "B",
            "text": "Some bags have been left on the floor.",
            "vietnamese": "Một số túi đã bị bỏ lại trên sàn nhà."
          },
          {
            "key": "C",
            "text": "A shopping cart has been left in a parking area.",
            "vietnamese": "Một chiếc xe đẩy hàng đã bị bỏ lại ở khu vực đậu xe."
          },
          {
            "key": "D",
            "text": "A customer is leaning into a freezer.",
            "vietnamese": "Một khách hàng đang dựa vào tủ đông."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là (A): \"A customer is standing near a shopping cart.\" (Một khách hàng đang đứng gần một chiếc xe đẩy hàng.) mô tả chính xác hoạt động và cảnh vật trong hình."
      }
    ],
    "vocabulary": [
      {
        "word": "cart",
        "meaning": "xe đẩy, xe chở hàng",
        "partOfSpeech": "n"
      },
      {
        "word": "left",
        "meaning": "còn lại",
        "partOfSpeech": "adj"
      },
      {
        "word": "floor",
        "meaning": "tầng, sàn nhà",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-7",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 7",
    "title": "Part 2 - Câu 7: Bạn đã đặt lịch hẹn với nha sĩ chưa?",
    "audioSrc": "/audio/test6_2023.mp3",
    "startTime": 289.27,
    "endTime": 308.74,
    "transcript": [
      {
        "id": "p2-7-q",
        "speaker": "Speaker 1",
        "text": "Have you made an appointment with your dentist yet?",
        "vietnamese": "Bạn đã đặt lịch hẹn với nha sĩ chưa?"
      },
      {
        "id": "p2-7-a",
        "speaker": "Speaker 2",
        "text": "(A) I'll put it upstairs for now.",
        "vietnamese": "(A) Bây giờ tôi sẽ đặt nó lên lầu."
      },
      {
        "id": "p2-7-b",
        "speaker": "Speaker 2",
        "text": "(B) Yes, last week.",
        "vietnamese": "(B) Vâng, tuần trước."
      },
      {
        "id": "p2-7-c",
        "speaker": "Speaker 2",
        "text": "(C) A new supply order.",
        "vietnamese": "(C) Một lệnh cung cấp mới."
      }
    ],
    "questions": [
      {
        "num": 7,
        "question": "Have you made an appointment with your dentist yet?",
        "vietnameseQuestion": "Bạn đã đặt lịch hẹn với nha sĩ chưa?",
        "options": [
          {
            "key": "A",
            "text": "I'll put it upstairs for now.",
            "vietnamese": "Bây giờ tôi sẽ đặt nó lên lầu."
          },
          {
            "key": "B",
            "text": "Yes, last week.",
            "vietnamese": "Vâng, tuần trước."
          },
          {
            "key": "C",
            "text": "A new supply order.",
            "vietnamese": "Một lệnh cung cấp mới."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"Yes, last week.\" (Vâng, tuần trước.) là câu phản hồi hợp lý nhất cho câu \"Have you made an appointment with your dentist yet?\"."
      }
    ],
    "vocabulary": [
      {
        "word": "appointment",
        "meaning": "cuộc hẹn, lịch hẹn",
        "partOfSpeech": "n"
      },
      {
        "word": "dentist",
        "meaning": "nha sĩ",
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
    "id": "part2-8",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 8",
    "title": "Part 2 - Câu 8: Bạn muốn mua ghế sofa màu xanh hay màu vàng?",
    "audioSrc": "/audio/test6_2023.mp3",
    "startTime": 308.74,
    "endTime": 328.32,
    "transcript": [
      {
        "id": "p2-8-q",
        "speaker": "Speaker 1",
        "text": "Do you want to buy the blue sofa or the yellow one?",
        "vietnamese": "Bạn muốn mua ghế sofa màu xanh hay màu vàng?"
      },
      {
        "id": "p2-8-a",
        "speaker": "Speaker 2",
        "text": "(A) A three-bedroom apartment.",
        "vietnamese": "(A) Một căn hộ ba phòng ngủ."
      },
      {
        "id": "p2-8-b",
        "speaker": "Speaker 2",
        "text": "(B) I like the yellow one.",
        "vietnamese": "(B) Tôi thích cái màu vàng."
      },
      {
        "id": "p2-8-c",
        "speaker": "Speaker 2",
        "text": "(C) I've already been there.",
        "vietnamese": "(C) Tôi đã từng ở đó rồi."
      }
    ],
    "questions": [
      {
        "num": 8,
        "question": "Do you want to buy the blue sofa or the yellow one?",
        "vietnameseQuestion": "Bạn muốn mua ghế sofa màu xanh hay màu vàng?",
        "options": [
          {
            "key": "A",
            "text": "A three-bedroom apartment.",
            "vietnamese": "Một căn hộ ba phòng ngủ."
          },
          {
            "key": "B",
            "text": "I like the yellow one.",
            "vietnamese": "Tôi thích cái màu vàng."
          },
          {
            "key": "C",
            "text": "I've already been there.",
            "vietnamese": "Tôi đã từng ở đó rồi."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"I like the yellow one.\" (Tôi thích cái màu vàng.) là câu phản hồi hợp lý nhất cho câu \"Do you want to buy the blue sofa or the yellow one?\"."
      }
    ],
    "vocabulary": [
      {
        "word": "sofa",
        "meaning": "ghế bành dài, sofa",
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
    "id": "part2-9",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 9",
    "title": "Part 2 - Câu 9: Khi nào nhà hàng của bạn sẽ mở cửa kinh doanh?",
    "audioSrc": "/audio/test6_2023.mp3",
    "startTime": 328.32,
    "endTime": 348.93,
    "transcript": [
      {
        "id": "p2-9-q",
        "speaker": "Speaker 1",
        "text": "When is your restaurant going to open for business?",
        "vietnamese": "Khi nào nhà hàng của bạn sẽ mở cửa kinh doanh?"
      },
      {
        "id": "p2-9-a",
        "speaker": "Speaker 2",
        "text": "(A) These are new clothes.",
        "vietnamese": "(A) Đây là quần áo mới."
      },
      {
        "id": "p2-9-b",
        "speaker": "Speaker 2",
        "text": "(B) By the end of the month.",
        "vietnamese": "(B) Đến cuối tháng."
      },
      {
        "id": "p2-9-c",
        "speaker": "Speaker 2",
        "text": "(C) Yes, it's a large rest area.",
        "vietnamese": "(C) Vâng, đó là một khu vực nghỉ ngơi rộng lớn."
      }
    ],
    "questions": [
      {
        "num": 9,
        "question": "When is your restaurant going to open for business?",
        "vietnameseQuestion": "Khi nào nhà hàng của bạn sẽ mở cửa kinh doanh?",
        "options": [
          {
            "key": "A",
            "text": "These are new clothes.",
            "vietnamese": "Đây là quần áo mới."
          },
          {
            "key": "B",
            "text": "By the end of the month.",
            "vietnamese": "Đến cuối tháng."
          },
          {
            "key": "C",
            "text": "Yes, it's a large rest area.",
            "vietnamese": "Vâng, đó là một khu vực nghỉ ngơi rộng lớn."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"By the end of the month.\" (Đến cuối tháng.) là câu phản hồi hợp lý nhất cho câu \"When is your restaurant going to open for business?\"."
      }
    ],
    "vocabulary": [
      {
        "word": "open",
        "meaning": "mở cửa đón khách",
        "partOfSpeech": "v"
      },
      {
        "word": "rest",
        "meaning": "nghỉ ngơi, đậu (chim)",
        "partOfSpeech": "v"
      }
    ]
  },
  {
    "id": "part2-10",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 10",
    "title": "Part 2 - Câu 10: Tại sao máy tính của tôi không bật?",
    "audioSrc": "/audio/test6_2023.mp3",
    "startTime": 348.93,
    "endTime": 366.38,
    "transcript": [
      {
        "id": "p2-10-q",
        "speaker": "Speaker 1",
        "text": "Why won't my computer turn on?",
        "vietnamese": "Tại sao máy tính của tôi không bật?"
      },
      {
        "id": "p2-10-a",
        "speaker": "Speaker 2",
        "text": "(A) No, it's a small font.",
        "vietnamese": "(A) Không, đó là một phông chữ nhỏ."
      },
      {
        "id": "p2-10-b",
        "speaker": "Speaker 2",
        "text": "(B) Turn right at the corner.",
        "vietnamese": "(B) Rẽ phải ở góc đường."
      },
      {
        "id": "p2-10-c",
        "speaker": "Speaker 2",
        "text": "(C) Because the battery is old.",
        "vietnamese": "(C) Vì pin đã cũ."
      }
    ],
    "questions": [
      {
        "num": 10,
        "question": "Why won't my computer turn on?",
        "vietnameseQuestion": "Tại sao máy tính của tôi không bật?",
        "options": [
          {
            "key": "A",
            "text": "No, it's a small font.",
            "vietnamese": "Không, đó là một phông chữ nhỏ."
          },
          {
            "key": "B",
            "text": "Turn right at the corner.",
            "vietnamese": "Rẽ phải ở góc đường."
          },
          {
            "key": "C",
            "text": "Because the battery is old.",
            "vietnamese": "Vì pin đã cũ."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"Because the battery is old.\" (Vì pin đã cũ.) là câu phản hồi hợp lý nhất cho câu \"Why won't my computer turn on?\"."
      }
    ],
    "vocabulary": [
      {
        "word": "computer",
        "meaning": "máy tính",
        "partOfSpeech": "n/v"
      },
      {
        "word": "turn",
        "meaning": "xoay",
        "partOfSpeech": "n/v"
      }
    ]
  },
  {
    "id": "part2-11",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 11",
    "title": "Part 2 - Câu 11: Bạn có thích việc cải tạo văn phòng mà chúng tôi đã thực ...",
    "audioSrc": "/audio/test6_2023.mp3",
    "startTime": 366.38,
    "endTime": 387.92,
    "transcript": [
      {
        "id": "p2-11-q",
        "speaker": "Speaker 1",
        "text": "Do you like the renovations we did to the office?",
        "vietnamese": "Bạn có thích việc cải tạo văn phòng mà chúng tôi đã thực hiện không?"
      },
      {
        "id": "p2-11-a",
        "speaker": "Speaker 2",
        "text": "(A) The construction company down the street.",
        "vietnamese": "(A) Công ty xây dựng ở dưới phố."
      },
      {
        "id": "p2-11-b",
        "speaker": "Speaker 2",
        "text": "(B) He's in the cafeteria.",
        "vietnamese": "(B) Anh ấy đang ở trong căng tin."
      },
      {
        "id": "p2-11-c",
        "speaker": "Speaker 2",
        "text": "(C) Yes, it's very spacious now.",
        "vietnamese": "(C) Vâng, bây giờ nó rất rộng rãi."
      }
    ],
    "questions": [
      {
        "num": 11,
        "question": "Do you like the renovations we did to the office?",
        "vietnameseQuestion": "Bạn có thích việc cải tạo văn phòng mà chúng tôi đã thực hiện không?",
        "options": [
          {
            "key": "A",
            "text": "The construction company down the street.",
            "vietnamese": "Công ty xây dựng ở dưới phố."
          },
          {
            "key": "B",
            "text": "He's in the cafeteria.",
            "vietnamese": "Anh ấy đang ở trong căng tin."
          },
          {
            "key": "C",
            "text": "Yes, it's very spacious now.",
            "vietnamese": "Vâng, bây giờ nó rất rộng rãi."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"Yes, it's very spacious now.\" (Vâng, bây giờ nó rất rộng rãi.) là câu phản hồi hợp lý nhất cho câu \"Do you like the renovations we did to the office?\"."
      }
    ],
    "vocabulary": [
      {
        "word": "cafeteria",
        "meaning": "quán ăn tự phục vụ, căng tin",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-12",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 12",
    "title": "Part 2 - Câu 12: Kế toán đang sử dụng phòng họp nào?",
    "audioSrc": "/audio/test6_2023.mp3",
    "startTime": 387.92,
    "endTime": 407.46,
    "transcript": [
      {
        "id": "p2-12-q",
        "speaker": "Speaker 1",
        "text": "Which conference room is the accountant using?",
        "vietnamese": "Kế toán đang sử dụng phòng họp nào?"
      },
      {
        "id": "p2-12-a",
        "speaker": "Speaker 2",
        "text": "(A) The one on the first floor.",
        "vietnamese": "(A) Cái ở tầng một."
      },
      {
        "id": "p2-12-b",
        "speaker": "Speaker 2",
        "text": "(B) It went well, thanks.",
        "vietnamese": "(B) Nó đã diễn ra tốt đẹp, cảm ơn."
      },
      {
        "id": "p2-12-c",
        "speaker": "Speaker 2",
        "text": "(C) That was a lot of money.",
        "vietnamese": "(C) Đó là rất nhiều tiền."
      }
    ],
    "questions": [
      {
        "num": 12,
        "question": "Which conference room is the accountant using?",
        "vietnameseQuestion": "Kế toán đang sử dụng phòng họp nào?",
        "options": [
          {
            "key": "A",
            "text": "The one on the first floor.",
            "vietnamese": "Cái ở tầng một."
          },
          {
            "key": "B",
            "text": "It went well, thanks.",
            "vietnamese": "Nó đã diễn ra tốt đẹp, cảm ơn."
          },
          {
            "key": "C",
            "text": "That was a lot of money.",
            "vietnamese": "Đó là rất nhiều tiền."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là (A): \"The one on the first floor.\" (Cái ở tầng một.) là câu phản hồi hợp lý nhất cho câu \"Which conference room is the accountant using?\"."
      }
    ],
    "vocabulary": [
      {
        "word": "conference",
        "meaning": "hội nghị chuyên đề",
        "partOfSpeech": "n"
      },
      {
        "word": "accountant",
        "meaning": "nhân viên kế toán",
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
    "id": "part2-13",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 13",
    "title": "Part 2 - Câu 13: Internet không hoạt động.",
    "audioSrc": "/audio/test6_2023.mp3",
    "startTime": 407.46,
    "endTime": 428.17,
    "transcript": [
      {
        "id": "p2-13-q",
        "speaker": "Speaker 1",
        "text": "The internet isn't working.",
        "vietnamese": "Internet không hoạt động."
      },
      {
        "id": "p2-13-a",
        "speaker": "Speaker 2",
        "text": "(A) There's the cleaning cruise checklist.",
        "vietnamese": "(A) Có danh sách kiểm tra hành trình làm sạch."
      },
      {
        "id": "p2-13-b",
        "speaker": "Speaker 2",
        "text": "(B) We should call the IT department.",
        "vietnamese": "(B) Chúng ta nên gọi cho bộ phận CNTT."
      },
      {
        "id": "p2-13-c",
        "speaker": "Speaker 2",
        "text": "(C) Several copies, please.",
        "vietnamese": "(C) Xin vui lòng cho vài bản sao."
      }
    ],
    "questions": [
      {
        "num": 13,
        "question": "The internet isn't working.",
        "vietnameseQuestion": "Internet không hoạt động.",
        "options": [
          {
            "key": "A",
            "text": "There's the cleaning cruise checklist.",
            "vietnamese": "Có danh sách kiểm tra hành trình làm sạch."
          },
          {
            "key": "B",
            "text": "We should call the IT department.",
            "vietnamese": "Chúng ta nên gọi cho bộ phận CNTT."
          },
          {
            "key": "C",
            "text": "Several copies, please.",
            "vietnamese": "Xin vui lòng cho vài bản sao."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"We should call the IT department.\" (Chúng ta nên gọi cho bộ phận CNTT.) là câu phản hồi hợp lý nhất cho câu \"The internet isn't working.\"."
      }
    ],
    "vocabulary": [
      {
        "word": "department",
        "meaning": "phòng ban",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-14",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 14",
    "title": "Part 2 - Câu 14: Bạn muốn trình bày trước hay tôi nên trình bày trước?",
    "audioSrc": "/audio/test6_2023.mp3",
    "startTime": 428.17,
    "endTime": 447.65,
    "transcript": [
      {
        "id": "p2-14-q",
        "speaker": "Speaker 1",
        "text": "Would you like to present first or should I?",
        "vietnamese": "Bạn muốn trình bày trước hay tôi nên trình bày trước?"
      },
      {
        "id": "p2-14-a",
        "speaker": "Speaker 2",
        "text": "(A) About $20 each.",
        "vietnamese": "(A) Khoảng 20 đô la mỗi cái."
      },
      {
        "id": "p2-14-b",
        "speaker": "Speaker 2",
        "text": "(B) No, it's the second train.",
        "vietnamese": "(B) Không, đó là chuyến tàu thứ hai."
      },
      {
        "id": "p2-14-c",
        "speaker": "Speaker 2",
        "text": "(C) I'm ready to start.",
        "vietnamese": "(C) Tôi đã sẵn sàng để bắt đầu."
      }
    ],
    "questions": [
      {
        "num": 14,
        "question": "Would you like to present first or should I?",
        "vietnameseQuestion": "Bạn muốn trình bày trước hay tôi nên trình bày trước?",
        "options": [
          {
            "key": "A",
            "text": "About $20 each.",
            "vietnamese": "Khoảng 20 đô la mỗi cái."
          },
          {
            "key": "B",
            "text": "No, it's the second train.",
            "vietnamese": "Không, đó là chuyến tàu thứ hai."
          },
          {
            "key": "C",
            "text": "I'm ready to start.",
            "vietnamese": "Tôi đã sẵn sàng để bắt đầu."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"I'm ready to start.\" (Tôi đã sẵn sàng để bắt đầu.) là câu phản hồi hợp lý nhất cho câu \"Would you like to present first or should I?\"."
      }
    ],
    "vocabulary": [
      {
        "word": "train",
        "meaning": "đào tạo, huấn luyện",
        "partOfSpeech": "v"
      }
    ]
  },
  {
    "id": "part2-15",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 15",
    "title": "Part 2 - Câu 15: Vé buổi hòa nhạc hiện đang được bán phải không?",
    "audioSrc": "/audio/test6_2023.mp3",
    "startTime": 447.65,
    "endTime": 469.16,
    "transcript": [
      {
        "id": "p2-15-q",
        "speaker": "Speaker 1",
        "text": "The concert tickets are on sale now, aren't they?",
        "vietnamese": "Vé buổi hòa nhạc hiện đang được bán phải không?"
      },
      {
        "id": "p2-15-a",
        "speaker": "Speaker 2",
        "text": "(A) The new director of marketing.",
        "vietnamese": "(A) Giám đốc tiếp thị mới."
      },
      {
        "id": "p2-15-b",
        "speaker": "Speaker 2",
        "text": "(B) Yes, and they're selling fast.",
        "vietnamese": "(B) Có, và họ đang bán rất nhanh."
      },
      {
        "id": "p2-15-c",
        "speaker": "Speaker 2",
        "text": "(C) One of my favorite bands.",
        "vietnamese": "(C) Một trong những ban nhạc yêu thích của tôi."
      }
    ],
    "questions": [
      {
        "num": 15,
        "question": "The concert tickets are on sale now, aren't they?",
        "vietnameseQuestion": "Vé buổi hòa nhạc hiện đang được bán phải không?",
        "options": [
          {
            "key": "A",
            "text": "The new director of marketing.",
            "vietnamese": "Giám đốc tiếp thị mới."
          },
          {
            "key": "B",
            "text": "Yes, and they're selling fast.",
            "vietnamese": "Có, và họ đang bán rất nhanh."
          },
          {
            "key": "C",
            "text": "One of my favorite bands.",
            "vietnamese": "Một trong những ban nhạc yêu thích của tôi."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"Yes, and they're selling fast.\" (Có, và họ đang bán rất nhanh.) là câu phản hồi hợp lý nhất cho câu \"The concert tickets are on sale now, aren't they?\"."
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
    "title": "Part 2 - Câu 16: Bạn có bất kỳ phản hồi nào về bạn vì hiệu suất không?",
    "audioSrc": "/audio/test6_2023.mp3",
    "startTime": 469.16,
    "endTime": 489.86,
    "transcript": [
      {
        "id": "p2-16-q",
        "speaker": "Speaker 1",
        "text": "Do you have any feedback about you because performance?",
        "vietnamese": "Bạn có bất kỳ phản hồi nào về bạn vì hiệu suất không?"
      },
      {
        "id": "p2-16-a",
        "speaker": "Speaker 2",
        "text": "(A) Yes, her work is excellent.",
        "vietnamese": "(A) Vâng, công việc của cô ấy rất xuất sắc."
      },
      {
        "id": "p2-16-b",
        "speaker": "Speaker 2",
        "text": "(B) Near the back of the room.",
        "vietnamese": "(B) Gần cuối phòng."
      },
      {
        "id": "p2-16-c",
        "speaker": "Speaker 2",
        "text": "(C) It's nice to meet you.",
        "vietnamese": "(C) Rất vui được gặp bạn."
      }
    ],
    "questions": [
      {
        "num": 16,
        "question": "Do you have any feedback about you because performance?",
        "vietnameseQuestion": "Bạn có bất kỳ phản hồi nào về bạn vì hiệu suất không?",
        "options": [
          {
            "key": "A",
            "text": "Yes, her work is excellent.",
            "vietnamese": "Vâng, công việc của cô ấy rất xuất sắc."
          },
          {
            "key": "B",
            "text": "Near the back of the room.",
            "vietnamese": "Gần cuối phòng."
          },
          {
            "key": "C",
            "text": "It's nice to meet you.",
            "vietnamese": "Rất vui được gặp bạn."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là (A): \"Yes, her work is excellent.\" (Vâng, công việc của cô ấy rất xuất sắc.) là câu phản hồi hợp lý nhất cho câu \"Do you have any feedback about you because performance?\"."
      }
    ],
    "vocabulary": [
      {
        "word": "feedback",
        "meaning": "ý kiến phản hồi",
        "partOfSpeech": "n"
      },
      {
        "word": "performance",
        "meaning": "buổi biểu diễn",
        "partOfSpeech": "n"
      },
      {
        "word": "excellent",
        "meaning": "xuất sắc, tuyệt vời",
        "partOfSpeech": "adj"
      }
    ]
  },
  {
    "id": "part2-17",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 17",
    "title": "Part 2 - Câu 17: Tại sao chúng ta không phân công lại Sylvia vào ca tối ở ...",
    "audioSrc": "/audio/test6_2023.mp3",
    "startTime": 489.86,
    "endTime": 514.44,
    "transcript": [
      {
        "id": "p2-17-q",
        "speaker": "Speaker 1",
        "text": "Why don't we reassign Sylvia to the evening shift in the stock room?",
        "vietnamese": "Tại sao chúng ta không phân công lại Sylvia vào ca tối ở phòng kho nhỉ?"
      },
      {
        "id": "p2-17-a",
        "speaker": "Speaker 2",
        "text": "(A) Sure. I expect she'll be okay with that.",
        "vietnamese": "(A) Chắc chắn rồi. Tôi hy vọng cô ấy sẽ ổn với điều đó."
      },
      {
        "id": "p2-17-b",
        "speaker": "Speaker 2",
        "text": "(B) I sent my assignment to the instructor.",
        "vietnamese": "(B) Tôi đã gửi bài tập của mình cho người hướng dẫn."
      },
      {
        "id": "p2-17-c",
        "speaker": "Speaker 2",
        "text": "(C) The new office furniture is comfortable.",
        "vietnamese": "(C) Nội thất văn phòng mới tiện nghi."
      }
    ],
    "questions": [
      {
        "num": 17,
        "question": "Why don't we reassign Sylvia to the evening shift in the stock room?",
        "vietnameseQuestion": "Tại sao chúng ta không phân công lại Sylvia vào ca tối ở phòng kho nhỉ?",
        "options": [
          {
            "key": "A",
            "text": "Sure. I expect she'll be okay with that.",
            "vietnamese": "Chắc chắn rồi. Tôi hy vọng cô ấy sẽ ổn với điều đó."
          },
          {
            "key": "B",
            "text": "I sent my assignment to the instructor.",
            "vietnamese": "Tôi đã gửi bài tập của mình cho người hướng dẫn."
          },
          {
            "key": "C",
            "text": "The new office furniture is comfortable.",
            "vietnamese": "Nội thất văn phòng mới tiện nghi."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là (A): \"Sure. I expect she'll be okay with that.\" (Chắc chắn rồi. Tôi hy vọng cô ấy sẽ ổn với điều đó.) là câu phản hồi hợp lý nhất cho câu \"Why don't we reassign Sylvia to the evening shift in the stock room?\"."
      }
    ],
    "vocabulary": [
      {
        "word": "shift",
        "meaning": "ca làm việc",
        "partOfSpeech": "n"
      },
      {
        "word": "stock",
        "meaning": "nhập hàng vào kho, tích trữ",
        "partOfSpeech": "v"
      },
      {
        "word": "assignment",
        "meaning": "nhiệm vụ được giao, sự phân công",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-18",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 18",
    "title": "Part 2 - Câu 18: Làm cách nào chúng tôi có thể tìm thêm trợ giúp theo mùa?",
    "audioSrc": "/audio/test6_2023.mp3",
    "startTime": 514.44,
    "endTime": 537.14,
    "transcript": [
      {
        "id": "p2-18-q",
        "speaker": "Speaker 1",
        "text": "How can we find extra seasonal help?",
        "vietnamese": "Làm cách nào chúng tôi có thể tìm thêm trợ giúp theo mùa?"
      },
      {
        "id": "p2-18-a",
        "speaker": "Speaker 2",
        "text": "(A) Spring is my favorite season.",
        "vietnamese": "(A) Mùa xuân là mùa yêu thích của tôi."
      },
      {
        "id": "p2-18-b",
        "speaker": "Speaker 2",
        "text": "(B) Let's post some job listings on our website.",
        "vietnamese": "(B) Hãy đăng một số danh sách công việc trên trang web của chúng tôi."
      },
      {
        "id": "p2-18-c",
        "speaker": "Speaker 2",
        "text": "(C) Because he left early today.",
        "vietnamese": "(C) Vì hôm nay anh về sớm."
      }
    ],
    "questions": [
      {
        "num": 18,
        "question": "How can we find extra seasonal help?",
        "vietnameseQuestion": "Làm cách nào chúng tôi có thể tìm thêm trợ giúp theo mùa?",
        "options": [
          {
            "key": "A",
            "text": "Spring is my favorite season.",
            "vietnamese": "Mùa xuân là mùa yêu thích của tôi."
          },
          {
            "key": "B",
            "text": "Let's post some job listings on our website.",
            "vietnamese": "Hãy đăng một số danh sách công việc trên trang web của chúng tôi."
          },
          {
            "key": "C",
            "text": "Because he left early today.",
            "vietnamese": "Vì hôm nay anh về sớm."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"Let's post some job listings on our website.\" (Hãy đăng một số danh sách công việc trên trang web của chúng tôi.) là câu phản hồi hợp lý nhất cho câu \"How can we find extra seasonal help?\"."
      }
    ],
    "vocabulary": [
      {
        "word": "extra",
        "meaning": "thêm, phụ trội",
        "partOfSpeech": "adj/adv"
      },
      {
        "word": "post",
        "meaning": "đăng tải",
        "partOfSpeech": "v"
      },
      {
        "word": "left",
        "meaning": "còn lại",
        "partOfSpeech": "adj"
      }
    ]
  },
  {
    "id": "part2-19",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 19",
    "title": "Part 2 - Câu 19: Bạn có biết có xe buýt từ đây đến thành phố New York không?",
    "audioSrc": "/audio/test6_2023.mp3",
    "startTime": 537.14,
    "endTime": 558.72,
    "transcript": [
      {
        "id": "p2-19-q",
        "speaker": "Speaker 1",
        "text": "Do you know if there's a bus from here to New York City?",
        "vietnamese": "Bạn có biết có xe buýt từ đây đến thành phố New York không?"
      },
      {
        "id": "p2-19-a",
        "speaker": "Speaker 2",
        "text": "(A) That's a great idea.",
        "vietnamese": "(A) Đó là một ý tưởng tuyệt vời."
      },
      {
        "id": "p2-19-b",
        "speaker": "Speaker 2",
        "text": "(B) No, he studied in London.",
        "vietnamese": "(B) Không, anh ấy học ở London."
      },
      {
        "id": "p2-19-c",
        "speaker": "Speaker 2",
        "text": "(C) Yes, there's one every day around nine o'clock.",
        "vietnamese": "(C) Vâng, mỗi ngày có một buổi vào khoảng 9 giờ."
      }
    ],
    "questions": [
      {
        "num": 19,
        "question": "Do you know if there's a bus from here to New York City?",
        "vietnameseQuestion": "Bạn có biết có xe buýt từ đây đến thành phố New York không?",
        "options": [
          {
            "key": "A",
            "text": "That's a great idea.",
            "vietnamese": "Đó là một ý tưởng tuyệt vời."
          },
          {
            "key": "B",
            "text": "No, he studied in London.",
            "vietnamese": "Không, anh ấy học ở London."
          },
          {
            "key": "C",
            "text": "Yes, there's one every day around nine o'clock.",
            "vietnamese": "Vâng, mỗi ngày có một buổi vào khoảng 9 giờ."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"Yes, there's one every day around nine o'clock.\" (Vâng, mỗi ngày có một buổi vào khoảng 9 giờ.) là câu phản hồi hợp lý nhất cho câu \"Do you know if there's a bus from here to New York City?\"."
      }
    ],
    "vocabulary": [
      {
        "word": "york",
        "meaning": "York",
        "partOfSpeech": "n/v"
      },
      {
        "word": "city",
        "meaning": "thành phố",
        "partOfSpeech": "n/v"
      }
    ]
  },
  {
    "id": "part2-20",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 20",
    "title": "Part 2 - Câu 20: Ai đang chở bạn đến sân bay?",
    "audioSrc": "/audio/test6_2023.mp3",
    "startTime": 558.72,
    "endTime": 579.23,
    "transcript": [
      {
        "id": "p2-20-q",
        "speaker": "Speaker 1",
        "text": "Who's driving you to the airport?",
        "vietnamese": "Ai đang chở bạn đến sân bay?"
      },
      {
        "id": "p2-20-a",
        "speaker": "Speaker 2",
        "text": "(A) The hotel has a free shuttle.",
        "vietnamese": "(A) Khách sạn có xe đưa đón miễn phí."
      },
      {
        "id": "p2-20-b",
        "speaker": "Speaker 2",
        "text": "(B) She just received her pilot's license.",
        "vietnamese": "(B) Cô ấy vừa nhận được bằng phi công."
      },
      {
        "id": "p2-20-c",
        "speaker": "Speaker 2",
        "text": "(C) About 20 minutes late.",
        "vietnamese": "(C) Đến muộn khoảng 20 phút."
      }
    ],
    "questions": [
      {
        "num": 20,
        "question": "Who's driving you to the airport?",
        "vietnameseQuestion": "Ai đang chở bạn đến sân bay?",
        "options": [
          {
            "key": "A",
            "text": "The hotel has a free shuttle.",
            "vietnamese": "Khách sạn có xe đưa đón miễn phí."
          },
          {
            "key": "B",
            "text": "She just received her pilot's license.",
            "vietnamese": "Cô ấy vừa nhận được bằng phi công."
          },
          {
            "key": "C",
            "text": "About 20 minutes late.",
            "vietnamese": "Đến muộn khoảng 20 phút."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là (A): \"The hotel has a free shuttle.\" (Khách sạn có xe đưa đón miễn phí.) là câu phản hồi hợp lý nhất cho câu \"Who's driving you to the airport?\"."
      }
    ],
    "vocabulary": [
      {
        "word": "airport",
        "meaning": "sân bay",
        "partOfSpeech": "n"
      },
      {
        "word": "free",
        "meaning": "rảnh rỗi, không bận",
        "partOfSpeech": "adj"
      },
      {
        "word": "pilot",
        "meaning": "phi công",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-21",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 21",
    "title": "Part 2 - Câu 21: Bao lâu thì nên thay bộ lọc nước?",
    "audioSrc": "/audio/test6_2023.mp3",
    "startTime": 579.23,
    "endTime": 598.9,
    "transcript": [
      {
        "id": "p2-21-q",
        "speaker": "Speaker 1",
        "text": "How often should I replace the water filter?",
        "vietnamese": "Bao lâu thì nên thay bộ lọc nước?"
      },
      {
        "id": "p2-21-a",
        "speaker": "Speaker 2",
        "text": "(A) A new coffee maker.",
        "vietnamese": "(A) Một máy pha cà phê mới."
      },
      {
        "id": "p2-21-b",
        "speaker": "Speaker 2",
        "text": "(B) Can I have more ice please?",
        "vietnamese": "(B) Làm ơn cho tôi thêm đá được không?"
      },
      {
        "id": "p2-21-c",
        "speaker": "Speaker 2",
        "text": "(C) There's a manual in the cabinet.",
        "vietnamese": "(C) Có sách hướng dẫn trong tủ."
      }
    ],
    "questions": [
      {
        "num": 21,
        "question": "How often should I replace the water filter?",
        "vietnameseQuestion": "Bao lâu thì nên thay bộ lọc nước?",
        "options": [
          {
            "key": "A",
            "text": "A new coffee maker.",
            "vietnamese": "Một máy pha cà phê mới."
          },
          {
            "key": "B",
            "text": "Can I have more ice please?",
            "vietnamese": "Làm ơn cho tôi thêm đá được không?"
          },
          {
            "key": "C",
            "text": "There's a manual in the cabinet.",
            "vietnamese": "Có sách hướng dẫn trong tủ."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"There's a manual in the cabinet.\" (Có sách hướng dẫn trong tủ.) là câu phản hồi hợp lý nhất cho câu \"How often should I replace the water filter?\"."
      }
    ],
    "vocabulary": [
      {
        "word": "replace",
        "meaning": "thay thế",
        "partOfSpeech": "v"
      },
      {
        "word": "water",
        "meaning": "tưới nước",
        "partOfSpeech": "v"
      },
      {
        "word": "manual",
        "meaning": "sách hướng dẫn sử dụng",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-22",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 22",
    "title": "Part 2 - Câu 22: Không phải bạn vẫn ở trong ủy ban tổ chức sự kiện sao?",
    "audioSrc": "/audio/test6_2023.mp3",
    "startTime": 598.9,
    "endTime": 624.96,
    "transcript": [
      {
        "id": "p2-22-q",
        "speaker": "Speaker 1",
        "text": "Aren't you still on the event planning committee?",
        "vietnamese": "Không phải bạn vẫn ở trong ủy ban tổ chức sự kiện sao?"
      },
      {
        "id": "p2-22-a",
        "speaker": "Speaker 2",
        "text": "(A) There's an orange sign at the entrance.",
        "vietnamese": "(A) Có một dấu hiệu màu cam ở lối vào."
      },
      {
        "id": "p2-22-b",
        "speaker": "Speaker 2",
        "text": "(B) Check the bookshelf by the window.",
        "vietnamese": "(B) Kiểm tra giá sách cạnh cửa sổ."
      },
      {
        "id": "p2-22-c",
        "speaker": "Speaker 2",
        "text": "(C) Members of replaced every year.",
        "vietnamese": "(C) Các thành viên được thay thế hàng năm."
      }
    ],
    "questions": [
      {
        "num": 22,
        "question": "Aren't you still on the event planning committee?",
        "vietnameseQuestion": "Không phải bạn vẫn ở trong ủy ban tổ chức sự kiện sao?",
        "options": [
          {
            "key": "A",
            "text": "There's an orange sign at the entrance.",
            "vietnamese": "Có một dấu hiệu màu cam ở lối vào."
          },
          {
            "key": "B",
            "text": "Check the bookshelf by the window.",
            "vietnamese": "Kiểm tra giá sách cạnh cửa sổ."
          },
          {
            "key": "C",
            "text": "Members of replaced every year.",
            "vietnamese": "Các thành viên được thay thế hàng năm."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"Members of replaced every year.\" (Các thành viên được thay thế hàng năm.) là câu phản hồi hợp lý nhất cho câu \"Aren't you still on the event planning committee?\"."
      }
    ],
    "vocabulary": [
      {
        "word": "committee",
        "meaning": "ủy ban, hội đồng",
        "partOfSpeech": "n"
      },
      {
        "word": "orange",
        "meaning": "quả cam",
        "partOfSpeech": "n"
      },
      {
        "word": "entrance",
        "meaning": "lối vào, cổng vào",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-23",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 23",
    "title": "Part 2 - Câu 23: Bây giờ bạn có muốn cùng chúng tôi uống trà ở căng tin kh...",
    "audioSrc": "/audio/test6_2023.mp3",
    "startTime": 624.96,
    "endTime": 642.12,
    "transcript": [
      {
        "id": "p2-23-q",
        "speaker": "Speaker 1",
        "text": "Would you like to join us for tea now in the cafeteria?",
        "vietnamese": "Bây giờ bạn có muốn cùng chúng tôi uống trà ở căng tin không?"
      },
      {
        "id": "p2-23-a",
        "speaker": "Speaker 2",
        "text": "(A) I have a client meeting in ten minutes.",
        "vietnamese": "(A) Tôi có một cuộc họp với khách hàng trong mười phút nữa."
      },
      {
        "id": "p2-23-b",
        "speaker": "Speaker 2",
        "text": "(B) Actually, I joined a different gym.",
        "vietnamese": "(B) Thực ra tôi đã tham gia một phòng tập thể dục khác."
      },
      {
        "id": "p2-23-c",
        "speaker": "Speaker 2",
        "text": "(C) Some tables and chairs.",
        "vietnamese": "(C) Một số bàn ghế."
      }
    ],
    "questions": [
      {
        "num": 23,
        "question": "Would you like to join us for tea now in the cafeteria?",
        "vietnameseQuestion": "Bây giờ bạn có muốn cùng chúng tôi uống trà ở căng tin không?",
        "options": [
          {
            "key": "A",
            "text": "I have a client meeting in ten minutes.",
            "vietnamese": "Tôi có một cuộc họp với khách hàng trong mười phút nữa."
          },
          {
            "key": "B",
            "text": "Actually, I joined a different gym.",
            "vietnamese": "Thực ra tôi đã tham gia một phòng tập thể dục khác."
          },
          {
            "key": "C",
            "text": "Some tables and chairs.",
            "vietnamese": "Một số bàn ghế."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là (A): \"I have a client meeting in ten minutes.\" (Tôi có một cuộc họp với khách hàng trong mười phút nữa.) là câu phản hồi hợp lý nhất cho câu \"Would you like to join us for tea now in the cafeteria?\"."
      }
    ],
    "vocabulary": [
      {
        "word": "cafeteria",
        "meaning": "quán ăn tự phục vụ, căng tin",
        "partOfSpeech": "n"
      },
      {
        "word": "client",
        "meaning": "khách hàng",
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
    "id": "part2-24",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 24",
    "title": "Part 2 - Câu 24: Bạn nghĩ kỹ thuật viên robot mới đang làm việc như thế nào?",
    "audioSrc": "/audio/test6_2023.mp3",
    "startTime": 642.12,
    "endTime": 663.73,
    "transcript": [
      {
        "id": "p2-24-q",
        "speaker": "Speaker 1",
        "text": "How do you think the new robotics technician is doing?",
        "vietnamese": "Bạn nghĩ kỹ thuật viên robot mới đang làm việc như thế nào?"
      },
      {
        "id": "p2-24-a",
        "speaker": "Speaker 2",
        "text": "(A) I've been working off site for a few weeks.",
        "vietnamese": "(A) Tôi đã làm việc ngoài công trường được vài tuần."
      },
      {
        "id": "p2-24-b",
        "speaker": "Speaker 2",
        "text": "(B) The tools are on my desk.",
        "vietnamese": "(B) Các công cụ ở trên bàn của tôi."
      },
      {
        "id": "p2-24-c",
        "speaker": "Speaker 2",
        "text": "(C) Because the team won first place.",
        "vietnamese": "(C) Vì đội đã giành được giải nhất."
      }
    ],
    "questions": [
      {
        "num": 24,
        "question": "How do you think the new robotics technician is doing?",
        "vietnameseQuestion": "Bạn nghĩ kỹ thuật viên robot mới đang làm việc như thế nào?",
        "options": [
          {
            "key": "A",
            "text": "I've been working off site for a few weeks.",
            "vietnamese": "Tôi đã làm việc ngoài công trường được vài tuần."
          },
          {
            "key": "B",
            "text": "The tools are on my desk.",
            "vietnamese": "Các công cụ ở trên bàn của tôi."
          },
          {
            "key": "C",
            "text": "Because the team won first place.",
            "vietnamese": "Vì đội đã giành được giải nhất."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là (A): \"I've been working off site for a few weeks.\" (Tôi đã làm việc ngoài công trường được vài tuần.) là câu phản hồi hợp lý nhất cho câu \"How do you think the new robotics technician is doing?\"."
      }
    ],
    "vocabulary": [
      {
        "word": "robotics",
        "meaning": "ngành chế tạo robot",
        "partOfSpeech": "n"
      },
      {
        "word": "technician",
        "meaning": "kỹ thuật viên",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-25",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 25",
    "title": "Part 2 - Câu 25: Tôi hy vọng thanh tra tòa nhà sẽ đến sớm.",
    "audioSrc": "/audio/test6_2023.mp3",
    "startTime": 663.73,
    "endTime": 686.18,
    "transcript": [
      {
        "id": "p2-25-q",
        "speaker": "Speaker 1",
        "text": "I hope the building inspector will arrive soon.",
        "vietnamese": "Tôi hy vọng thanh tra tòa nhà sẽ đến sớm."
      },
      {
        "id": "p2-25-a",
        "speaker": "Speaker 2",
        "text": "(A) No, not as much as we expected.",
        "vietnamese": "(A) Không, không nhiều như chúng tôi mong đợi."
      },
      {
        "id": "p2-25-b",
        "speaker": "Speaker 2",
        "text": "(B) Traffic is heavy on highway 90.",
        "vietnamese": "(B) Giao thông ùn tắc trên quốc lộ 90."
      },
      {
        "id": "p2-25-c",
        "speaker": "Speaker 2",
        "text": "(C) A multi-level apartment complex.",
        "vietnamese": "(C) Khu chung cư nhiều tầng."
      }
    ],
    "questions": [
      {
        "num": 25,
        "question": "I hope the building inspector will arrive soon.",
        "vietnameseQuestion": "Tôi hy vọng thanh tra tòa nhà sẽ đến sớm.",
        "options": [
          {
            "key": "A",
            "text": "No, not as much as we expected.",
            "vietnamese": "Không, không nhiều như chúng tôi mong đợi."
          },
          {
            "key": "B",
            "text": "Traffic is heavy on highway 90.",
            "vietnamese": "Giao thông ùn tắc trên quốc lộ 90."
          },
          {
            "key": "C",
            "text": "A multi-level apartment complex.",
            "vietnamese": "Khu chung cư nhiều tầng."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"Traffic is heavy on highway 90.\" (Giao thông ùn tắc trên quốc lộ 90.) là câu phản hồi hợp lý nhất cho câu \"I hope the building inspector will arrive soon.\"."
      }
    ],
    "vocabulary": [
      {
        "word": "inspector",
        "meaning": "thanh tra viên, người kiểm định chất lượng",
        "partOfSpeech": "n"
      },
      {
        "word": "arrive",
        "meaning": "đến nơi",
        "partOfSpeech": "v"
      },
      {
        "word": "traffic",
        "meaning": "giao thông, xe cộ trên đường",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-26",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 26",
    "title": "Part 2 - Câu 26: Chúng ta nên đặt một chiếc bánh cho chuyến dã ngoại của c...",
    "audioSrc": "/audio/test6_2023.mp3",
    "startTime": 686.18,
    "endTime": 706.53,
    "transcript": [
      {
        "id": "p2-26-q",
        "speaker": "Speaker 1",
        "text": "We should order a cake for the company picnic.",
        "vietnamese": "Chúng ta nên đặt một chiếc bánh cho chuyến dã ngoại của công ty."
      },
      {
        "id": "p2-26-a",
        "speaker": "Speaker 2",
        "text": "(A) Some of the staff don't eat sweets.",
        "vietnamese": "(A) Một số nhân viên không ăn đồ ngọt."
      },
      {
        "id": "p2-26-b",
        "speaker": "Speaker 2",
        "text": "(B) The bank is on twelfth street.",
        "vietnamese": "(B) Ngân hàng ở trên đường thứ mười hai."
      },
      {
        "id": "p2-26-c",
        "speaker": "Speaker 2",
        "text": "(C) About five kilometers.",
        "vietnamese": "(C) Khoảng năm cây số."
      }
    ],
    "questions": [
      {
        "num": 26,
        "question": "We should order a cake for the company picnic.",
        "vietnameseQuestion": "Chúng ta nên đặt một chiếc bánh cho chuyến dã ngoại của công ty.",
        "options": [
          {
            "key": "A",
            "text": "Some of the staff don't eat sweets.",
            "vietnamese": "Một số nhân viên không ăn đồ ngọt."
          },
          {
            "key": "B",
            "text": "The bank is on twelfth street.",
            "vietnamese": "Ngân hàng ở trên đường thứ mười hai."
          },
          {
            "key": "C",
            "text": "About five kilometers.",
            "vietnamese": "Khoảng năm cây số."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là (A): \"Some of the staff don't eat sweets.\" (Một số nhân viên không ăn đồ ngọt.) là câu phản hồi hợp lý nhất cho câu \"We should order a cake for the company picnic.\"."
      }
    ],
    "vocabulary": [
      {
        "word": "order",
        "meaning": "gọi món, đặt hàng",
        "partOfSpeech": "v"
      },
      {
        "word": "picnic",
        "meaning": "chuyến dã ngoại",
        "partOfSpeech": "n"
      },
      {
        "word": "staff",
        "meaning": "bố trí nhân sự làm việc",
        "partOfSpeech": "v"
      }
    ]
  },
  {
    "id": "part2-27",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 27",
    "title": "Part 2 - Câu 27: Xe thuê có hộp số tự động hay số sàn?",
    "audioSrc": "/audio/test6_2023.mp3",
    "startTime": 706.53,
    "endTime": 729.2,
    "transcript": [
      {
        "id": "p2-27-q",
        "speaker": "Speaker 1",
        "text": "Does the rental vehicle have automatic or manual transmission?",
        "vietnamese": "Xe thuê có hộp số tự động hay số sàn?"
      },
      {
        "id": "p2-27-a",
        "speaker": "Speaker 2",
        "text": "(A) It's on the shelf in the office.",
        "vietnamese": "(A) Nó ở trên kệ trong văn phòng."
      },
      {
        "id": "p2-27-b",
        "speaker": "Speaker 2",
        "text": "(B) Bradley will be driving the vehicle.",
        "vietnamese": "(B) Bradley sẽ lái chiếc xe này."
      },
      {
        "id": "p2-27-c",
        "speaker": "Speaker 2",
        "text": "(C) The lights turn on automatically.",
        "vietnamese": "(C) Đèn tự động bật."
      }
    ],
    "questions": [
      {
        "num": 27,
        "question": "Does the rental vehicle have automatic or manual transmission?",
        "vietnameseQuestion": "Xe thuê có hộp số tự động hay số sàn?",
        "options": [
          {
            "key": "A",
            "text": "It's on the shelf in the office.",
            "vietnamese": "Nó ở trên kệ trong văn phòng."
          },
          {
            "key": "B",
            "text": "Bradley will be driving the vehicle.",
            "vietnamese": "Bradley sẽ lái chiếc xe này."
          },
          {
            "key": "C",
            "text": "The lights turn on automatically.",
            "vietnamese": "Đèn tự động bật."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"Bradley will be driving the vehicle.\" (Bradley sẽ lái chiếc xe này.) là câu phản hồi hợp lý nhất cho câu \"Does the rental vehicle have automatic or manual transmission?\"."
      }
    ],
    "vocabulary": [
      {
        "word": "vehicle",
        "meaning": "phương tiện, xe cộ",
        "partOfSpeech": "n"
      },
      {
        "word": "manual",
        "meaning": "sách hướng dẫn sử dụng",
        "partOfSpeech": "n"
      },
      {
        "word": "shelf",
        "meaning": "kệ, giá để đồ",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-28",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 28",
    "title": "Part 2 - Câu 28: Tôi muốn sửa vài chiếc áo khoác.",
    "audioSrc": "/audio/test6_2023.mp3",
    "startTime": 729.2,
    "endTime": 749.68,
    "transcript": [
      {
        "id": "p2-28-q",
        "speaker": "Speaker 1",
        "text": "I'd like to have some jackets altered.",
        "vietnamese": "Tôi muốn sửa vài chiếc áo khoác."
      },
      {
        "id": "p2-28-a",
        "speaker": "Speaker 2",
        "text": "(A) I prefer 100% caution.",
        "vietnamese": "(A) Tôi thích sự thận trọng 100%."
      },
      {
        "id": "p2-28-b",
        "speaker": "Speaker 2",
        "text": "(B) When would you like to pick them up?",
        "vietnamese": "(B) Khi nào bạn muốn đón chúng?"
      },
      {
        "id": "p2-28-c",
        "speaker": "Speaker 2",
        "text": "(C) Yes, it's a much shorter trip.",
        "vietnamese": "(C) Vâng, đó là một chuyến đi ngắn hơn nhiều."
      }
    ],
    "questions": [
      {
        "num": 28,
        "question": "I'd like to have some jackets altered.",
        "vietnameseQuestion": "Tôi muốn sửa vài chiếc áo khoác.",
        "options": [
          {
            "key": "A",
            "text": "I prefer 100% caution.",
            "vietnamese": "Tôi thích sự thận trọng 100%."
          },
          {
            "key": "B",
            "text": "When would you like to pick them up?",
            "vietnamese": "Khi nào bạn muốn đón chúng?"
          },
          {
            "key": "C",
            "text": "Yes, it's a much shorter trip.",
            "vietnamese": "Vâng, đó là một chuyến đi ngắn hơn nhiều."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"When would you like to pick them up?\" (Khi nào bạn muốn đón chúng?) là câu phản hồi hợp lý nhất cho câu \"I'd like to have some jackets altered.\"."
      }
    ],
    "vocabulary": [
      {
        "word": "prefer",
        "meaning": "thích hơn",
        "partOfSpeech": "v"
      }
    ]
  },
  {
    "id": "part2-29",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 29",
    "title": "Part 2 - Câu 29: Chúng ta nên dỡ gạch ốp bếp ở đâu?",
    "audioSrc": "/audio/test6_2023.mp3",
    "startTime": 749.68,
    "endTime": 769.13,
    "transcript": [
      {
        "id": "p2-29-q",
        "speaker": "Speaker 1",
        "text": "Where should we unload the kitchen tiles?",
        "vietnamese": "Chúng ta nên dỡ gạch ốp bếp ở đâu?"
      },
      {
        "id": "p2-29-a",
        "speaker": "Speaker 2",
        "text": "(A) The client isn't at home right now.",
        "vietnamese": "(A) Hiện tại khách hàng không có ở nhà."
      },
      {
        "id": "p2-29-b",
        "speaker": "Speaker 2",
        "text": "(B) Not long ago.",
        "vietnamese": "(B) Cách đây không lâu."
      },
      {
        "id": "p2-29-c",
        "speaker": "Speaker 2",
        "text": "(C) Sorry, I spilled the water.",
        "vietnamese": "(C) Xin lỗi, tôi đã làm đổ nước."
      }
    ],
    "questions": [
      {
        "num": 29,
        "question": "Where should we unload the kitchen tiles?",
        "vietnameseQuestion": "Chúng ta nên dỡ gạch ốp bếp ở đâu?",
        "options": [
          {
            "key": "A",
            "text": "The client isn't at home right now.",
            "vietnamese": "Hiện tại khách hàng không có ở nhà."
          },
          {
            "key": "B",
            "text": "Not long ago.",
            "vietnamese": "Cách đây không lâu."
          },
          {
            "key": "C",
            "text": "Sorry, I spilled the water.",
            "vietnamese": "Xin lỗi, tôi đã làm đổ nước."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là (A): \"The client isn't at home right now.\" (Hiện tại khách hàng không có ở nhà.) là câu phản hồi hợp lý nhất cho câu \"Where should we unload the kitchen tiles?\"."
      }
    ],
    "vocabulary": [
      {
        "word": "client",
        "meaning": "khách hàng",
        "partOfSpeech": "n"
      },
      {
        "word": "water",
        "meaning": "tưới nước",
        "partOfSpeech": "v"
      }
    ]
  },
  {
    "id": "part2-30",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 30",
    "title": "Part 2 - Câu 30: Bạn đang sử dụng phiên bản phần mềm cũ hơn hay phiên bản ...",
    "audioSrc": "/audio/test6_2023.mp3",
    "startTime": 769.13,
    "endTime": 793.61,
    "transcript": [
      {
        "id": "p2-30-q",
        "speaker": "Speaker 1",
        "text": "Are you using the older version of the software or the one that was just released?",
        "vietnamese": "Bạn đang sử dụng phiên bản phần mềm cũ hơn hay phiên bản mới được phát hành?"
      },
      {
        "id": "p2-30-a",
        "speaker": "Speaker 2",
        "text": "(A) I'm using brass hardware in the kitchen.",
        "vietnamese": "(A) Tôi đang sử dụng phần cứng bằng đồng trong nhà bếp."
      },
      {
        "id": "p2-30-b",
        "speaker": "Speaker 2",
        "text": "(B) Were we supposed to update the program?",
        "vietnamese": "(B) Chúng ta có nên cập nhật chương trình không?"
      },
      {
        "id": "p2-30-c",
        "speaker": "Speaker 2",
        "text": "(C) Yes, he has a used computer.",
        "vietnamese": "(C) Vâng, anh ấy có một chiếc máy tính đã qua sử dụng."
      }
    ],
    "questions": [
      {
        "num": 30,
        "question": "Are you using the older version of the software or the one that was just released?",
        "vietnameseQuestion": "Bạn đang sử dụng phiên bản phần mềm cũ hơn hay phiên bản mới được phát hành?",
        "options": [
          {
            "key": "A",
            "text": "I'm using brass hardware in the kitchen.",
            "vietnamese": "Tôi đang sử dụng phần cứng bằng đồng trong nhà bếp."
          },
          {
            "key": "B",
            "text": "Were we supposed to update the program?",
            "vietnamese": "Chúng ta có nên cập nhật chương trình không?"
          },
          {
            "key": "C",
            "text": "Yes, he has a used computer.",
            "vietnamese": "Vâng, anh ấy có một chiếc máy tính đã qua sử dụng."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"Were we supposed to update the program?\" (Chúng ta có nên cập nhật chương trình không?) là câu phản hồi hợp lý nhất cho câu \"Are you using the older version of the software or the one that was just released?\"."
      }
    ],
    "vocabulary": [
      {
        "word": "version",
        "meaning": "phiên bản",
        "partOfSpeech": "n"
      },
      {
        "word": "software",
        "meaning": "phần mềm máy tính",
        "partOfSpeech": "n"
      },
      {
        "word": "brass",
        "meaning": "đồng thau",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-31",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 31",
    "title": "Part 2 - Câu 31: Bạn có thể giúp tôi truy cập tài khoản email của tôi trướ...",
    "audioSrc": "/audio/test6_2023.mp3",
    "startTime": 793.61,
    "endTime": 815.06,
    "transcript": [
      {
        "id": "p2-31-q",
        "speaker": "Speaker 1",
        "text": "Could you help me access my email account before you leave?",
        "vietnamese": "Bạn có thể giúp tôi truy cập tài khoản email của tôi trước khi bạn rời đi không?"
      },
      {
        "id": "p2-31-a",
        "speaker": "Speaker 2",
        "text": "(A) On the top shelf.",
        "vietnamese": "(A) Trên kệ trên cùng."
      },
      {
        "id": "p2-31-b",
        "speaker": "Speaker 2",
        "text": "(B) Did you check the storage closet?",
        "vietnamese": "(B) Bạn đã kiểm tra tủ đựng đồ chưa?"
      },
      {
        "id": "p2-31-c",
        "speaker": "Speaker 2",
        "text": "(C) Several technicians are working late tonight.",
        "vietnamese": "(C) Một số kỹ thuật viên đang làm việc muộn tối nay."
      }
    ],
    "questions": [
      {
        "num": 31,
        "question": "Could you help me access my email account before you leave?",
        "vietnameseQuestion": "Bạn có thể giúp tôi truy cập tài khoản email của tôi trước khi bạn rời đi không?",
        "options": [
          {
            "key": "A",
            "text": "On the top shelf.",
            "vietnamese": "Trên kệ trên cùng."
          },
          {
            "key": "B",
            "text": "Did you check the storage closet?",
            "vietnamese": "Bạn đã kiểm tra tủ đựng đồ chưa?"
          },
          {
            "key": "C",
            "text": "Several technicians are working late tonight.",
            "vietnamese": "Một số kỹ thuật viên đang làm việc muộn tối nay."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"Several technicians are working late tonight.\" (Một số kỹ thuật viên đang làm việc muộn tối nay.) là câu phản hồi hợp lý nhất cho câu \"Could you help me access my email account before you leave?\"."
      }
    ],
    "vocabulary": [
      {
        "word": "access",
        "meaning": "sự truy cập, lối vào",
        "partOfSpeech": "n"
      },
      {
        "word": "leave",
        "meaning": "rời đi, nghỉ việc",
        "partOfSpeech": "v"
      },
      {
        "word": "shelf",
        "meaning": "kệ, giá để đồ",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part3-32-34",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 32 - 34",
    "title": "Part 3 - Câu 32 - 34: Người đàn ông muốn làm gì ở ngân hàng",
    "audioSrc": "/audio/test6_2023.mp3",
    "startTime": 848.44,
    "endTime": 914.3,
    "transcript": [
      {
        "id": "p3-32-1",
        "speaker": "Woman",
        "text": "Hello, I've come to close my bank account.",
        "vietnamese": "Xin chào, tôi đến để đóng tài khoản ngân hàng của mình."
      },
      {
        "id": "p3-32-2",
        "speaker": "Man",
        "text": "I received an email informing me that the bank is going to start charging a monthly maintenance fee.",
        "vietnamese": "Tôi nhận được email thông báo rằng ngân hàng sẽ bắt đầu tính phí duy trì hàng tháng."
      },
      {
        "id": "p3-32-3",
        "speaker": "Woman",
        "text": "And I'd rather keep my money in an account with no fee.",
        "vietnamese": "Và tôi muốn giữ tiền của mình trong tài khoản mà không mất phí."
      },
      {
        "id": "p3-32-4",
        "speaker": "Man",
        "text": "Yes, that's on new policy.",
        "vietnamese": "Vâng, đó là chính sách mới."
      },
      {
        "id": "p3-32-5",
        "speaker": "Woman",
        "text": "Are you aware, though, that we'll waive the fee if you maintain a minimum balance of $500?",
        "vietnamese": "Tuy nhiên, bạn có biết rằng chúng tôi sẽ miễn phí nếu bạn duy trì số dư tối thiểu là 500 USD không?"
      },
      {
        "id": "p3-32-6",
        "speaker": "Man",
        "text": "Okay, that shouldn't be a problem.",
        "vietnamese": "Được rồi, đó không phải là một vấn đề."
      },
      {
        "id": "p3-32-7",
        "speaker": "Woman",
        "text": "Where can I find a printed copy of the policy?",
        "vietnamese": "Tôi có thể tìm thấy bản in của chính sách ở đâu?"
      },
      {
        "id": "p3-32-8",
        "speaker": "Man",
        "text": "I can print one out for you right now.",
        "vietnamese": "Tôi có thể in ra cho bạn ngay bây giờ."
      }
    ],
    "questions": [
      {
        "num": 32,
        "question": "Whatdoesthemanwanttodoatthebank?",
        "vietnameseQuestion": "Người đàn ông muốn làm gì ở ngân hàng?",
        "options": [
          {
            "key": "A",
            "text": "Close an account",
            "vietnamese": "Đóng tài khoản"
          },
          {
            "key": "B",
            "text": "Make a deposit",
            "vietnamese": "Đặt cọc"
          },
          {
            "key": "C",
            "text": "Apply for a loan",
            "vietnamese": "Đăng ký vay"
          },
          {
            "key": "D",
            "text": "Interview for a job",
            "vietnamese": "Phỏng vấn xin việc"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là (A): \"Close an account\" (Đóng tài khoản)."
      },
      {
        "num": 33,
        "question": "What new policy are the speakers discussing?",
        "vietnameseQuestion": "Các diễn giả đang thảo luận về chính sách mới nào?",
        "options": [
          {
            "key": "A",
            "text": "Extending business hours",
            "vietnamese": "Kéo dài giờ làm việc"
          },
          {
            "key": "B",
            "text": "Charging a maintenance fee",
            "vietnamese": "Thu phí bảo trì"
          },
          {
            "key": "C",
            "text": "Increasing online security",
            "vietnamese": "Tăng cường bảo mật trực tuyến"
          },
          {
            "key": "D",
            "text": "Offering membership benefits",
            "vietnamese": "Cung cấp lợi ích thành viên"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"Charging a maintenance fee\" (Thu phí bảo trì)."
      },
      {
        "num": 34,
        "question": "Whatwillthe woman do next?",
        "vietnameseQuestion": "Người phụ nữ sẽ làm gì tiếp theo?",
        "options": [
          {
            "key": "A",
            "text": "Go to lunch",
            "vietnamese": "Đi ăn trưa"
          },
          {
            "key": "B",
            "text": "Speak to her manager",
            "vietnamese": "Nói chuyện với người quản lý của cô ấy"
          },
          {
            "key": "C",
            "text": "Provide a document",
            "vietnamese": "Cung cấp một tài liệu"
          },
          {
            "key": "D",
            "text": "Schedule an appointment",
            "vietnamese": "Đặt lịch hẹn"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"Provide a document\" (Cung cấp một tài liệu)."
      }
    ],
    "vocabulary": [
      {
        "word": "maintenance",
        "meaning": "bộ phận bảo trì, bảo dưỡng",
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
    "id": "part3-35-37",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 35 - 37",
    "title": "Part 3 - Câu 35 - 37: Sự kiện gì đang diễn ra",
    "audioSrc": "/audio/test6_2023.mp3",
    "startTime": 914.3,
    "endTime": 984.02,
    "transcript": [
      {
        "id": "p3-35-1",
        "speaker": "Woman",
        "text": "Hi, Bianca, it's Matthew.",
        "vietnamese": "Xin chào Bianca, tôi là Matthew."
      },
      {
        "id": "p3-35-2",
        "speaker": "Man",
        "text": "I'm here at Mariano's East for Lauren's Surprise Retirement Dinner, but nobody else is here.",
        "vietnamese": "Tôi đang ở Mariano's East để dự bữa tối nghỉ hưu bất ngờ của Lauren, nhưng không có ai khác ở đây."
      },
      {
        "id": "p3-35-3",
        "speaker": "Woman",
        "text": "Hi, Matthew.",
        "vietnamese": "Chào Matthew."
      },
      {
        "id": "p3-35-4",
        "speaker": "Man",
        "text": "We're here at Mariano's West on 10th Avenue.",
        "vietnamese": "Chúng tôi đang ở Mariano's West trên Đại lộ số 10."
      },
      {
        "id": "p3-35-5",
        "speaker": "Woman",
        "text": "We've been wondering where you are.",
        "vietnamese": "Chúng tôi đang tự hỏi bạn đang ở đâu."
      },
      {
        "id": "p3-35-6",
        "speaker": "Man",
        "text": "Oh, no.",
        "vietnamese": "Ồ, không."
      },
      {
        "id": "p3-35-7",
        "speaker": "Woman",
        "text": "I went to the wrong place, but I'll be there soon.",
        "vietnamese": "Tôi đã đến nhầm chỗ, nhưng tôi sẽ đến đó sớm thôi."
      },
      {
        "id": "p3-35-8",
        "speaker": "Man",
        "text": "I just realized I left the gift I bought for her at the office, so I can stop and pick it up on the way.",
        "vietnamese": "Tôi mới nhận ra mình đã để quên món quà mua cho cô ấy ở cơ quan nên tôi có thể dừng lại và nhặt trên đường đi."
      }
    ],
    "questions": [
      {
        "num": 35,
        "question": "What event is taking place?",
        "vietnameseQuestion": "Sự kiện gì đang diễn ra?",
        "options": [
          {
            "key": "A",
            "text": "Aretirement dinner",
            "vietnamese": "Bữa tối nghỉ hưu"
          },
          {
            "key": "B",
            "text": "A client meeting",
            "vietnamese": "Một cuộc gặp gỡ khách hàng"
          },
          {
            "key": "C",
            "text": "An industry conference",
            "vietnamese": "Hội nghị ngành"
          },
          {
            "key": "D",
            "text": "An award ceremony",
            "vietnamese": "Một lễ trao giải"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là (A): \"Aretirement dinner\" (Bữa tối nghỉ hưu)."
      },
      {
        "num": 36,
        "question": "Whatproblemdoesthemanhave?",
        "vietnameseQuestion": "Người đàn ông đó có vấn đề gì?",
        "options": [
          {
            "key": "A",
            "text": "His car broke down.",
            "vietnamese": "Xe của anh ấy bị hỏng."
          },
          {
            "key": "B",
            "text": "He is at the wrong location.",
            "vietnamese": "Anh ấy đang ở sai địa điểm."
          },
          {
            "key": "C",
            "text": "He forgot some tickets.",
            "vietnamese": "Anh ấy quên một số vé."
          },
          {
            "key": "D",
            "text": "He has a schedule conflict.",
            "vietnamese": "Anh ấy có xung đột về lịch trình."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"He is at the wrong location.\" (Anh ấy đang ở sai địa điểm.)."
      },
      {
        "num": 37,
        "question": "Why will the man go to his office?",
        "vietnameseQuestion": "Tại sao người đàn ông sẽ đi đến văn phòng của mình?",
        "options": [
          {
            "key": "A",
            "text": "To sign for a delivery",
            "vietnamese": "Để ký nhận hàng"
          },
          {
            "key": "B",
            "text": "To meet a colleague",
            "vietnamese": "Để gặp một đồng nghiệp"
          },
          {
            "key": "C",
            "text": "To print out a document",
            "vietnamese": "Để in ra một tài liệu"
          },
          {
            "key": "D",
            "text": "To pick up a gift",
            "vietnamese": "Để nhận quà"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là (D): \"To pick up a gift\" (Để nhận quà)."
      }
    ],
    "vocabulary": [
      {
        "word": "retirement",
        "meaning": "sự nghỉ hưu",
        "partOfSpeech": "n"
      },
      {
        "word": "avenue",
        "meaning": "đại lộ",
        "partOfSpeech": "n"
      },
      {
        "word": "left",
        "meaning": "còn lại",
        "partOfSpeech": "adj"
      },
      {
        "word": "gift",
        "meaning": "món quà",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part3-38-40",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 38 - 40",
    "title": "Part 3 - Câu 38 - 40: Kelfern Limited là loại hình kinh doanh nào",
    "audioSrc": "/audio/test6_2023.mp3",
    "startTime": 984.02,
    "endTime": 1059.05,
    "transcript": [
      {
        "id": "p3-38-1",
        "speaker": "Woman",
        "text": "For it's, Calfern Limited just called.",
        "vietnamese": "Vì nó, Calfern Limited vừa gọi."
      },
      {
        "id": "p3-38-2",
        "speaker": "Man",
        "text": "They received the fabric for their new line of sofas.",
        "vietnamese": "Họ đã nhận được vải cho dòng ghế sofa mới của mình."
      },
      {
        "id": "p3-38-3",
        "speaker": "Woman",
        "text": "They ordered brown, but received the green sofa fabric instead.",
        "vietnamese": "Họ đặt hàng màu nâu nhưng lại nhận được vải sofa màu xanh lá cây."
      },
      {
        "id": "p3-38-4",
        "speaker": "Man",
        "text": "Hmm.",
        "vietnamese": "Ừm."
      },
      {
        "id": "p3-38-5",
        "speaker": "Woman",
        "text": "Let me check our records.",
        "vietnamese": "Hãy để tôi kiểm tra hồ sơ của chúng tôi."
      },
      {
        "id": "p3-38-6",
        "speaker": "Man",
        "text": "Looks like the product code was entered wrong when the order was processed.",
        "vietnamese": "Có vẻ như mã sản phẩm đã được nhập sai khi xử lý đơn hàng."
      },
      {
        "id": "p3-38-7",
        "speaker": "Woman",
        "text": "It's our fault.",
        "vietnamese": "Đó là lỗi của chúng tôi."
      },
      {
        "id": "p3-38-8",
        "speaker": "Man",
        "text": "Okay.",
        "vietnamese": "Được rồi."
      },
      {
        "id": "p3-38-9",
        "speaker": "Woman",
        "text": "I'll call them right away to apologize and tell them to return the order.",
        "vietnamese": "Tôi sẽ gọi ngay cho họ để xin lỗi và bảo họ trả lại đơn hàng."
      },
      {
        "id": "p3-38-10",
        "speaker": "Man",
        "text": "We'll get a new shipment out as soon as possible, and I'll offer them a 20% discount for the order.",
        "vietnamese": "Chúng tôi sẽ gửi lô hàng mới sớm nhất có thể và tôi sẽ giảm giá 20% cho đơn hàng."
      },
      {
        "id": "p3-38-11",
        "speaker": "Woman",
        "text": "So what type of business is Calfern Limited?",
        "vietnamese": "Vậy Calfern Limited là loại hình kinh doanh gì?"
      }
    ],
    "questions": [
      {
        "num": 38,
        "question": "What type of business is Kelfern Limited?",
        "vietnameseQuestion": "Kelfern Limited là loại hình kinh doanh nào?",
        "options": [
          {
            "key": "A",
            "text": "Afurniture company",
            "vietnamese": "Công ty nội thất"
          },
          {
            "key": "B",
            "text": "An automobile manufacturer",
            "vietnamese": "Một nhà sản xuất ô tô"
          },
          {
            "key": "C",
            "text": "A restaurant supply store",
            "vietnamese": "Cửa hàng cung cấp đồ dùng nhà hàng"
          },
          {
            "key": "D",
            "text": "An architectural design firm",
            "vietnamese": "Một công ty thiết kế kiến trúc"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là (A): \"Afurniture company\" (Công ty nội thất)."
      },
      {
        "num": 39,
        "question": "According to the man, what was the cause of a problem?",
        "vietnameseQuestion": "Theo người đàn ông, nguyên nhân của vấn đề là gì?",
        "options": [
          {
            "key": "A",
            "text": "A delivery was late.",
            "vietnamese": "Một chuyến giao hàng bị trễ."
          },
          {
            "key": "B",
            "text": "Apart was missing.",
            "vietnamese": "Ngoài đã bị mất tích."
          },
          {
            "key": "C",
            "text": "Aproduct was damaged.",
            "vietnamese": "Sản phẩm bị hư hỏng."
          },
          {
            "key": "D",
            "text": "A code was entered incorrectly.",
            "vietnamese": "Một mã đã được nhập không chính xác."
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là (D): \"A code was entered incorrectly.\" (Một mã đã được nhập không chính xác.)."
      },
      {
        "num": 40,
        "question": "What will the woman offer Kelfern Limited?",
        "vietnameseQuestion": "Người phụ nữ sẽ đề nghị Kelfern Limited những gì?",
        "options": [
          {
            "key": "A",
            "text": "Free installation TEST",
            "vietnamese": "KIỂM TRA cài đặt miễn phí"
          },
          {
            "key": "B",
            "text": "Next-day delivery",
            "vietnamese": "Giao hàng vào ngày hôm sau"
          },
          {
            "key": "C",
            "text": "A discount",
            "vietnamese": "giảm giá"
          },
          {
            "key": "D",
            "text": "A full refund",
            "vietnamese": "Hoàn lại tiền đầy đủ"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"A discount\" (giảm giá)."
      }
    ],
    "vocabulary": [
      {
        "word": "limited",
        "meaning": "có hạn, hạn chế",
        "partOfSpeech": "adj"
      },
      {
        "word": "fabric",
        "meaning": "vải dệt",
        "partOfSpeech": "n"
      },
      {
        "word": "line",
        "meaning": "xếp thành hàng dọc theo",
        "partOfSpeech": "v"
      },
      {
        "word": "sofa",
        "meaning": "ghế bành dài, sofa",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part3-41-43",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 41 - 43",
    "title": "Part 3 - Câu 41 - 43: Diễn giả làm việc trong ngành nào",
    "audioSrc": "/audio/test6_2023.mp3",
    "startTime": 1059.05,
    "endTime": 1141.63,
    "transcript": [
      {
        "id": "p3-41-1",
        "speaker": "Woman",
        "text": "Pauline, have you thought about where we should park our food truck for business next weekend?",
        "vietnamese": "Pauline, bạn đã nghĩ xem chúng ta nên đỗ xe bán đồ ăn ở đâu vào cuối tuần tới chưa?"
      },
      {
        "id": "p3-41-2",
        "speaker": "Man",
        "text": "I was thinking Shiller Park would be a good location.",
        "vietnamese": "Tôi đang nghĩ Shiller Park sẽ là một địa điểm tốt."
      },
      {
        "id": "p3-41-3",
        "speaker": "Woman",
        "text": "A neighborhood festival is being held there on Saturday.",
        "vietnamese": "Một lễ hội khu phố đang được tổ chức ở đó vào thứ bảy."
      },
      {
        "id": "p3-41-4",
        "speaker": "Man",
        "text": "I'm sure a lot of people going to the festival will want to buy our fried noodles and dumplings.",
        "vietnamese": "Tôi chắc chắn rằng rất nhiều người đến lễ hội sẽ muốn mua mì xào và bánh bao của chúng tôi."
      },
      {
        "id": "p3-41-5",
        "speaker": "Woman",
        "text": "That's a good idea, but I'm worried about having the proper permit to sell food there.",
        "vietnamese": "Đó là một ý tưởng hay, nhưng tôi lo lắng về việc có giấy phép phù hợp để bán thực phẩm ở đó hay không."
      },
      {
        "id": "p3-41-6",
        "speaker": "Man",
        "text": "Does the one we already have cover that?",
        "vietnamese": "Cái chúng ta đã có có bao gồm cái đó không?"
      },
      {
        "id": "p3-41-7",
        "speaker": "Woman",
        "text": "It does.",
        "vietnamese": "Nó có."
      },
      {
        "id": "p3-41-8",
        "speaker": "Man",
        "text": "I already checked on that.",
        "vietnamese": "Tôi đã kiểm tra điều đó rồi."
      }
    ],
    "questions": [
      {
        "num": 41,
        "question": "What industry do the speakers work in?",
        "vietnameseQuestion": "Diễn giả làm việc trong ngành nào?",
        "options": [
          {
            "key": "A",
            "text": "Transportation",
            "vietnamese": "Giao thông vận tải"
          },
          {
            "key": "B",
            "text": "Tourism",
            "vietnamese": "Du lịch"
          },
          {
            "key": "C",
            "text": "Food service",
            "vietnamese": "Dịch vụ ăn uống"
          },
          {
            "key": "D",
            "text": "Journalism",
            "vietnamese": "Báo chí"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"Food service\" (Dịch vụ ăn uống)."
      },
      {
        "num": 42,
        "question": "Accordingtothewoman,whateventwillbe held on Saturday?",
        "vietnameseQuestion": "Theo người phụ nữ, sự kiện gì sẽ được tổ chức vào thứ Bảy?",
        "options": [
          {
            "key": "A",
            "text": "Afarmers market",
            "vietnamese": "chợ nông sản"
          },
          {
            "key": "B",
            "text": "A theater performance",
            "vietnamese": "Một buổi biểu diễn kịch"
          },
          {
            "key": "C",
            "text": "A sports competition",
            "vietnamese": "Một cuộc thi thể thao"
          },
          {
            "key": "D",
            "text": "A community festival",
            "vietnamese": "Lễ hội cộng đồng"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là (D): \"A community festival\" (Lễ hội cộng đồng)."
      },
      {
        "num": 43,
        "question": "What istheman concernedabout?",
        "vietnameseQuestion": "Người đàn ông này quan tâm đến điều gì?",
        "options": [
          {
            "key": "A",
            "text": "Getting enough tickets",
            "vietnamese": "Nhận đủ vé"
          },
          {
            "key": "B",
            "text": "Having the appropriate permit",
            "vietnamese": "Có giấy phép phù hợp"
          },
          {
            "key": "C",
            "text": "Publicizing an event",
            "vietnamese": "Quảng cáo một sự kiện"
          },
          {
            "key": "D",
            "text": "Preparing for rain",
            "vietnamese": "Chuẩn bị mưa"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"Having the appropriate permit\" (Có giấy phép phù hợp)."
      }
    ],
    "vocabulary": [
      {
        "word": "park",
        "meaning": "đỗ xe, đậu xe",
        "partOfSpeech": "v"
      },
      {
        "word": "festival",
        "meaning": "lễ hội",
        "partOfSpeech": "n"
      },
      {
        "word": "permit",
        "meaning": "giấy phép lưu hành",
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
    "id": "part3-44-46",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 44 - 46",
    "title": "Part 3 - Câu 44 - 46: Người phụ nữ có nhiều khả năng nhất là ai",
    "audioSrc": "/audio/test6_2023.mp3",
    "startTime": 1141.63,
    "endTime": 1227.05,
    "transcript": [
      {
        "id": "p3-44-1",
        "speaker": "Woman",
        "text": "Hi.",
        "vietnamese": "CHÀO."
      },
      {
        "id": "p3-44-2",
        "speaker": "Man",
        "text": "I'm interested in having an antique look at to determine its value, and I heard your shop provides free appraisals.",
        "vietnamese": "Tôi muốn xem xét đồ cổ để xác định giá trị của nó và tôi nghe nói cửa hàng của bạn cung cấp dịch vụ định giá miễn phí."
      },
      {
        "id": "p3-44-3",
        "speaker": "Woman",
        "text": "Are you available for one now?",
        "vietnamese": "Bây giờ bạn có sẵn sàng cho một cái không?"
      },
      {
        "id": "p3-44-4",
        "speaker": "Man",
        "text": "Yes.",
        "vietnamese": "Đúng."
      },
      {
        "id": "p3-44-5",
        "speaker": "Woman",
        "text": "What do you have?",
        "vietnamese": "Bạn có gì?"
      },
      {
        "id": "p3-44-6",
        "speaker": "Man",
        "text": "It's this picture frame.",
        "vietnamese": "Đó là khung tranh này."
      },
      {
        "id": "p3-44-7",
        "speaker": "Woman",
        "text": "I want to put it up for sale at an auction next month, and I need some help deciding on the starting bid.",
        "vietnamese": "Tôi muốn bán nó tại một cuộc đấu giá vào tháng tới và tôi cần một số trợ giúp để quyết định giá thầu ban đầu."
      },
      {
        "id": "p3-44-8",
        "speaker": "Man",
        "text": "I see.",
        "vietnamese": "Tôi hiểu rồi."
      },
      {
        "id": "p3-44-9",
        "speaker": "Woman",
        "text": "This frame is nicely crafted and should sell for quite a lot.",
        "vietnamese": "Khung này được chế tác độc đáo và nên bán với giá khá cao."
      },
      {
        "id": "p3-44-10",
        "speaker": "Man",
        "text": "There's some damage on it here that decreases the value, but that can easily be fixed.",
        "vietnamese": "Ở đây có một số hư hỏng làm giảm giá trị nhưng có thể dễ dàng sửa chữa được."
      },
      {
        "id": "p3-44-11",
        "speaker": "Woman",
        "text": "I'll give you a list of local people who do this kind of restoration.",
        "vietnamese": "Tôi sẽ cung cấp cho bạn danh sách những người địa phương thực hiện công việc trùng tu này."
      }
    ],
    "questions": [
      {
        "num": 44,
        "question": "Who most likely is the woman?",
        "vietnameseQuestion": "Người phụ nữ có nhiều khả năng nhất là ai?",
        "options": [
          {
            "key": "A",
            "text": "An antiques appraiser",
            "vietnamese": "Người định giá đồ cổ"
          },
          {
            "key": "B",
            "text": "An interior decorator",
            "vietnamese": "Một người trang trí nội thất"
          },
          {
            "key": "C",
            "text": "A graphic artist",
            "vietnamese": "Một nghệ sĩ đồ họa"
          },
          {
            "key": "D",
            "text": "A repair technician",
            "vietnamese": "Một kỹ thuật viên sửa chữa"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là (A): \"An antiques appraiser\" (Người định giá đồ cổ)."
      },
      {
        "num": 45,
        "question": "Whatdoesthemansayheplanstodowith an item?",
        "vietnameseQuestion": "Người đàn ông nói gì về kế hoạch của mình với một món đồ?",
        "options": [
          {
            "key": "A",
            "text": "Give it toafamilymember",
            "vietnamese": "Đưa nó cho một thành viên trong gia đình"
          },
          {
            "key": "B",
            "text": "Donate it to a museum",
            "vietnamese": "Tặng nó cho một bảo tàng"
          },
          {
            "key": "C",
            "text": "Display it in his home",
            "vietnamese": "Trưng bày nó trong nhà của anh ấy"
          },
          {
            "key": "D",
            "text": "Sell it at an auction",
            "vietnamese": "Bán nó tại một cuộc đấu giá"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là (D): \"Sell it at an auction\" (Bán nó tại một cuộc đấu giá)."
      },
      {
        "num": 46,
        "question": "Whatwill thewomangive theman?",
        "vietnameseQuestion": "Người phụ nữ sẽ tặng gì cho người đàn ông?",
        "options": [
          {
            "key": "A",
            "text": "Abrochure",
            "vietnamese": "Brochure"
          },
          {
            "key": "B",
            "text": "A list of contacts",
            "vietnamese": "Danh sách liên hệ"
          },
          {
            "key": "C",
            "text": "A bill",
            "vietnamese": "Một hóa đơn"
          },
          {
            "key": "D",
            "text": "Anevent schedule",
            "vietnamese": "Lịch trình sự kiện"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"A list of contacts\" (Danh sách liên hệ)."
      }
    ],
    "vocabulary": [
      {
        "word": "free",
        "meaning": "rảnh rỗi, không bận",
        "partOfSpeech": "adj"
      },
      {
        "word": "available",
        "meaning": "rảnh rỗi, có sẵn",
        "partOfSpeech": "adj"
      },
      {
        "word": "frame",
        "meaning": "khung cửa",
        "partOfSpeech": "n"
      },
      {
        "word": "bid",
        "meaning": "sự bỏ thầu, chào giá dự thầu",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part3-47-49",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 47 - 49",
    "title": "Part 3 - Câu 47 - 49: Các diễn giả đang thảo luận vấn đề gì",
    "audioSrc": "/audio/test6_2023.mp3",
    "startTime": 1227.05,
    "endTime": 1298.94,
    "transcript": [
      {
        "id": "p3-47-1",
        "speaker": "Woman",
        "text": "Nalini, another patient missed an appointment today.",
        "vietnamese": "Nalini, hôm nay lại có một bệnh nhân khác lỡ hẹn."
      },
      {
        "id": "p3-47-2",
        "speaker": "Man",
        "text": "A lot of our patients have been forgetting about their scheduled slots lately, even though",
        "vietnamese": "Gần đây rất nhiều bệnh nhân của chúng tôi đã quên mất lịch trình của họ, mặc dù"
      },
      {
        "id": "p3-47-3",
        "speaker": "Woman",
        "text": "we call the week before to remind them.",
        "vietnamese": "chúng tôi gọi điện vào tuần trước để nhắc nhở họ."
      },
      {
        "id": "p3-47-4",
        "speaker": "Man",
        "text": "Yes, I've noticed that this is becoming a problem, but we have so many patients that we don't have enough time to make more frequent calls.",
        "vietnamese": "Đúng, tôi nhận thấy rằng điều này đang trở thành một vấn đề, nhưng chúng tôi có quá nhiều bệnh nhân nên chúng tôi không có đủ thời gian để gọi điện thường xuyên hơn."
      },
      {
        "id": "p3-47-5",
        "speaker": "Woman",
        "text": "We should seriously consider automated appointment reminders.",
        "vietnamese": "Chúng ta nên xem xét nghiêm túc việc nhắc nhở cuộc hẹn tự động."
      },
      {
        "id": "p3-47-6",
        "speaker": "Man",
        "text": "There are lots of software programs that do it.",
        "vietnamese": "Có rất nhiều chương trình phần mềm làm được điều đó."
      },
      {
        "id": "p3-47-7",
        "speaker": "Woman",
        "text": "That's a great idea.",
        "vietnamese": "Đó là một ý tưởng tuyệt vời."
      },
      {
        "id": "p3-47-8",
        "speaker": "Man",
        "text": "But let's make sure we invest in a good one.",
        "vietnamese": "Nhưng hãy đảm bảo rằng chúng ta đầu tư vào một cái tốt."
      },
      {
        "id": "p3-47-9",
        "speaker": "Woman",
        "text": "I know many offices already use them.",
        "vietnamese": "Tôi biết nhiều văn phòng đã sử dụng chúng."
      },
      {
        "id": "p3-47-10",
        "speaker": "Man",
        "text": "I'll ask for some recommendations now.",
        "vietnamese": "Bây giờ tôi sẽ yêu cầu một số khuyến nghị."
      }
    ],
    "questions": [
      {
        "num": 47,
        "question": "Whatproblemarethespeakers discussing?",
        "vietnameseQuestion": "Các diễn giả đang thảo luận vấn đề gì?",
        "options": [
          {
            "key": "A",
            "text": "An office space is too small.",
            "vietnamese": "Một không gian văn phòng quá nhỏ."
          },
          {
            "key": "B",
            "text": "Some medical forms are incomplete.",
            "vietnamese": "Một số mẫu đơn y tế không đầy đủ."
          },
          {
            "key": "C",
            "text": "Some patients are missing appointments.",
            "vietnamese": "Một số bệnh nhân bỏ lỡ cuộc hẹn."
          },
          {
            "key": "D",
            "text": "The wrong supplies were delivered.",
            "vietnamese": "Các nguồn cung cấp sai đã được giao."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"Some patients are missing appointments.\" (Một số bệnh nhân bỏ lỡ cuộc hẹn.)."
      },
      {
        "num": 48,
        "question": "What does the man suggest doing?",
        "vietnameseQuestion": "Người đàn ông đề nghị làm gì?",
        "options": [
          {
            "key": "A",
            "text": "Purchasing some software",
            "vietnamese": "Mua một số phần mềm"
          },
          {
            "key": "B",
            "text": "Hiring an additional staff member",
            "vietnamese": "Thuê thêm một nhân viên"
          },
          {
            "key": "C",
            "text": "Contacting an equipment vendor",
            "vietnamese": "Liên hệ với nhà cung cấp thiết bị"
          },
          {
            "key": "D",
            "text": "Locating a confirmation number",
            "vietnamese": "Định vị số xác nhận"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là (A): \"Purchasing some software\" (Mua một số phần mềm)."
      },
      {
        "num": 49,
        "question": "What doesthewomansayshewilldonext?",
        "vietnameseQuestion": "Người phụ nữ nói cô ấy sẽ làm gì tiếp theo?",
        "options": [
          {
            "key": "A",
            "text": "Get recommendations",
            "vietnamese": "Nhận đề xuất"
          },
          {
            "key": "B",
            "text": "Confirm a budget",
            "vietnamese": "Xác nhận ngân sách"
          },
          {
            "key": "C",
            "text": "Call in a prescription order",
            "vietnamese": "Gọi theo đơn thuốc"
          },
          {
            "key": "D",
            "text": "Update patient contact details 96",
            "vietnamese": "Cập nhật thông tin liên lạc của bệnh nhân 96"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là (A): \"Get recommendations\" (Nhận đề xuất)."
      }
    ],
    "vocabulary": [
      {
        "word": "patient",
        "meaning": "bệnh nhân",
        "partOfSpeech": "n"
      },
      {
        "word": "appointment",
        "meaning": "cuộc hẹn, lịch hẹn",
        "partOfSpeech": "n"
      },
      {
        "word": "scheduled",
        "meaning": "được lên lịch trình",
        "partOfSpeech": "adj"
      },
      {
        "word": "enough",
        "meaning": "đủ",
        "partOfSpeech": "adj"
      }
    ]
  },
  {
    "id": "part3-50-52",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 50 - 52",
    "title": "Part 3 - Câu 50 - 52: Nam giới làm việc trong ngành nào",
    "audioSrc": "/audio/test6_2023.mp3",
    "startTime": 1298.94,
    "endTime": 1378.62,
    "transcript": [
      {
        "id": "p3-50-1",
        "speaker": "Woman",
        "text": "Welcome.",
        "vietnamese": "Chào mừng."
      },
      {
        "id": "p3-50-2",
        "speaker": "Man",
        "text": "How can I help you?",
        "vietnamese": "Tôi có thể giúp gì cho bạn?"
      },
      {
        "id": "p3-50-3",
        "speaker": "Woman",
        "text": "Hi.",
        "vietnamese": "CHÀO."
      },
      {
        "id": "p3-50-4",
        "speaker": "Man",
        "text": "We own a small commercial fishing company in the area.",
        "vietnamese": "Chúng tôi sở hữu một công ty đánh cá thương mại nhỏ trong khu vực."
      },
      {
        "id": "p3-50-5",
        "speaker": "Woman",
        "text": "A friend of ours referred us to you.",
        "vietnamese": "Một người bạn của chúng tôi đã giới thiệu chúng tôi với bạn."
      },
      {
        "id": "p3-50-6",
        "speaker": "Man",
        "text": "You see, one of our boats anchor engines isn't retracting the chain completely.",
        "vietnamese": "Bạn thấy đấy, một trong những động cơ neo thuyền của chúng tôi không rút dây xích hoàn toàn."
      },
      {
        "id": "p3-50-7",
        "speaker": "Woman",
        "text": "And we have to finish pulling it in manually.",
        "vietnamese": "Và chúng ta phải hoàn tất việc kéo nó vào bằng tay."
      },
      {
        "id": "p3-50-8",
        "speaker": "Man",
        "text": "Hmm.",
        "vietnamese": "Ừm."
      },
      {
        "id": "p3-50-9",
        "speaker": "Woman",
        "text": "We might need to send your boat to a dry dock to make that kind of repair.",
        "vietnamese": "Chúng tôi có thể cần gửi thuyền của bạn đến ụ tàu để thực hiện công việc sửa chữa đó."
      },
      {
        "id": "p3-50-10",
        "speaker": "Man",
        "text": "Okay, but this is our peak season.",
        "vietnamese": "Được rồi, nhưng đây là mùa cao điểm của chúng tôi."
      },
      {
        "id": "p3-50-11",
        "speaker": "Woman",
        "text": "We really need to have the engine fixed as quickly as possible.",
        "vietnamese": "Chúng tôi thực sự cần phải sửa động cơ càng nhanh càng tốt."
      },
      {
        "id": "p3-50-12",
        "speaker": "Man",
        "text": "The Marina posts its dry dock availability on its website.",
        "vietnamese": "Marina đăng tải tình trạng sẵn có của bến tàu trên trang web của mình."
      },
      {
        "id": "p3-50-13",
        "speaker": "Woman",
        "text": "Let's see how soon they can fit you in.",
        "vietnamese": "Hãy xem họ có thể phù hợp với bạn trong bao lâu."
      }
    ],
    "questions": [
      {
        "num": 50,
        "question": "What industry do the men work in?",
        "vietnameseQuestion": "Nam giới làm việc trong ngành nào?",
        "options": [
          {
            "key": "A",
            "text": "Fishing",
            "vietnamese": "Câu cá"
          },
          {
            "key": "B",
            "text": "Tourism",
            "vietnamese": "Du lịch"
          },
          {
            "key": "C",
            "text": "Trucking",
            "vietnamese": "Vận tải đường bộ"
          },
          {
            "key": "D",
            "text": "Manufacturing",
            "vietnamese": "Sản xuất"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là (A): \"Fishing\" (Câu cá)."
      },
      {
        "num": 51,
        "question": "What problemarethe speakers discussing?",
        "vietnameseQuestion": "Các diễn giả đang thảo luận về vấn đề gì?",
        "options": [
          {
            "key": "A",
            "text": "The weatheris unpredictable.",
            "vietnamese": "Thời tiết thật khó lường."
          },
          {
            "key": "B",
            "text": "Amachine is broken.",
            "vietnamese": "Amachine bị hỏng."
          },
          {
            "key": "C",
            "text": "An employee is absent.",
            "vietnamese": "Một nhân viên vắng mặt."
          },
          {
            "key": "D",
            "text": "Operating costs have risen.",
            "vietnamese": "Chi phí hoạt động đã tăng lên."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"Amachine is broken.\" (Amachine bị hỏng.)."
      },
      {
        "num": 52,
        "question": "What will the woman most likely do next?",
        "vietnameseQuestion": "Người phụ nữ rất có thể sẽ làm gì tiếp theo?",
        "options": [
          {
            "key": "A",
            "text": "Lead a group outing",
            "vietnamese": "Dẫn đầu một chuyến đi chơi nhóm"
          },
          {
            "key": "B",
            "text": "Open a weather application",
            "vietnamese": "Mở ứng dụng thời tiết"
          },
          {
            "key": "C",
            "text": "Checkaschedule",
            "vietnamese": "Kiểm tra lịch trình"
          },
          {
            "key": "D",
            "text": "Negotiate a discount",
            "vietnamese": "Đàm phán giảm giá"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"Checkaschedule\" (Kiểm tra lịch trình)."
      }
    ],
    "vocabulary": [
      {
        "word": "commercial",
        "meaning": "đoạn phim quảng cáo truyền hình/phát thanh",
        "partOfSpeech": "n"
      },
      {
        "word": "dock",
        "meaning": "cập cảng, cập bến",
        "partOfSpeech": "v"
      },
      {
        "word": "repair",
        "meaning": "sửa chữa",
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
    "id": "part3-53-55",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 53 - 55",
    "title": "Part 3 - Câu 53 - 55: Tại sao người đàn ông đó lại đi dự hội nghị",
    "audioSrc": "/audio/test6_2023.mp3",
    "startTime": 1378.62,
    "endTime": 1458.43,
    "transcript": [
      {
        "id": "p3-53-1",
        "speaker": "Woman",
        "text": "Good morning, Lewis.",
        "vietnamese": "Chào buổi sáng, Lewis."
      },
      {
        "id": "p3-53-2",
        "speaker": "Man",
        "text": "Are you excited to go to the annual conference?",
        "vietnamese": "Bạn có hào hứng đi dự hội nghị thường niên không?"
      },
      {
        "id": "p3-53-3",
        "speaker": "Woman",
        "text": "Yes.",
        "vietnamese": "Đúng."
      },
      {
        "id": "p3-53-4",
        "speaker": "Man",
        "text": "I'm looking forward to learning about any new software that we could use to develop",
        "vietnamese": "Tôi rất mong được tìm hiểu về bất kỳ phần mềm mới nào mà chúng tôi có thể sử dụng để phát triển"
      },
      {
        "id": "p3-53-5",
        "speaker": "Woman",
        "text": "our smart kitchen appliances.",
        "vietnamese": "thiết bị nhà bếp thông minh của chúng tôi."
      },
      {
        "id": "p3-53-6",
        "speaker": "Man",
        "text": "I just wish I could get there earlier, so I'd have time to explore the city.",
        "vietnamese": "Tôi chỉ ước mình có thể đến đó sớm hơn để có thời gian khám phá thành phố."
      },
      {
        "id": "p3-53-7",
        "speaker": "Woman",
        "text": "Well, there are no presentations in the evenings.",
        "vietnamese": "Vâng, không có bài thuyết trình vào buổi tối."
      },
      {
        "id": "p3-53-8",
        "speaker": "Man",
        "text": "That's a good point.",
        "vietnamese": "Đó là một điểm tốt."
      },
      {
        "id": "p3-53-9",
        "speaker": "Woman",
        "text": "I should see how late museums are open.",
        "vietnamese": "Tôi nên xem bảo tàng mở cửa muộn đến mức nào."
      },
      {
        "id": "p3-53-10",
        "speaker": "Man",
        "text": "Don't forget to keep all your receipts.",
        "vietnamese": "Đừng quên giữ tất cả biên lai của bạn."
      },
      {
        "id": "p3-53-11",
        "speaker": "Woman",
        "text": "I use an app to help me manage mine.",
        "vietnamese": "Tôi sử dụng một ứng dụng để giúp tôi quản lý của tôi."
      },
      {
        "id": "p3-53-12",
        "speaker": "Man",
        "text": "It makes getting reimbursed a lot easier.",
        "vietnamese": "Nó làm cho việc hoàn trả dễ dàng hơn rất nhiều."
      }
    ],
    "questions": [
      {
        "num": 53,
        "question": "Why is theman going to a conference?",
        "vietnameseQuestion": "Tại sao người đàn ông đó lại đi dự hội nghị?",
        "options": [
          {
            "key": "A",
            "text": "To promote his products",
            "vietnamese": "Để quảng bá sản phẩm của mình"
          },
          {
            "key": "B",
            "text": "To earn a certification",
            "vietnamese": "Để đạt được chứng nhận"
          },
          {
            "key": "C",
            "text": "To facilitate a workshop",
            "vietnamese": "Để tạo điều kiện cho một hội thảo"
          },
          {
            "key": "D",
            "text": "To learn about new technology",
            "vietnamese": "Để tìm hiểu về công nghệ mới"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là (D): \"To learn about new technology\" (Để tìm hiểu về công nghệ mới)."
      },
      {
        "num": 54,
        "question": "Why does the woman say,\"there are no presentations in the evenings\"?",
        "vietnameseQuestion": "Tại sao người phụ nữ lại nói \"không có buổi thuyết trình nào vào buổi tối\"?",
        "options": [
          {
            "key": "A",
            "text": "To decline an invitation",
            "vietnamese": "Để từ chối lời mời"
          },
          {
            "key": "B",
            "text": "To express surprise",
            "vietnamese": "Để bày tỏ sự ngạc nhiên"
          },
          {
            "key": "C",
            "text": "To make a suggestion",
            "vietnamese": "Để đưa ra lời đề nghị"
          },
          {
            "key": "D",
            "text": "To complain about an event",
            "vietnamese": "Để phàn nàn về một sự kiện"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"To make a suggestion\" (Để đưa ra lời đề nghị)."
      },
      {
        "num": 55,
        "question": "What does the woman remind the man to iop",
        "vietnameseQuestion": "Người phụ nữ nhắc người đàn ông làm gì",
        "options": [
          {
            "key": "A",
            "text": "Keep some receipts",
            "vietnamese": "Giữ một số biên lai"
          },
          {
            "key": "B",
            "text": "Confirm a reservation",
            "vietnamese": "Xác nhận đặt chỗ"
          },
          {
            "key": "C",
            "text": "Make a phone call",
            "vietnamese": "Gọi điện thoại"
          },
          {
            "key": "D",
            "text": "Check a map",
            "vietnamese": "Kiểm tra bản đồ"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là (A): \"Keep some receipts\" (Giữ một số biên lai)."
      }
    ],
    "vocabulary": [
      {
        "word": "annual",
        "meaning": "thường niên, hàng năm",
        "partOfSpeech": "adj"
      },
      {
        "word": "conference",
        "meaning": "hội nghị chuyên đề",
        "partOfSpeech": "n"
      },
      {
        "word": "forward",
        "meaning": "chuyển tiếp (thư, email)",
        "partOfSpeech": "v"
      },
      {
        "word": "software",
        "meaning": "phần mềm máy tính",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part3-56-58",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 56 - 58",
    "title": "Part 3 - Câu 56 - 58: Phụ nữ làm việc ở đâu",
    "audioSrc": "/audio/test6_2023.mp3",
    "startTime": 1458.43,
    "endTime": 1551.89,
    "transcript": [
      {
        "id": "p3-56-1",
        "speaker": "Woman",
        "text": "Thanks for having this meeting with us, Maxime.",
        "vietnamese": "Cảm ơn vì đã có cuộc gặp này với chúng tôi, Maxime."
      },
      {
        "id": "p3-56-2",
        "speaker": "Man",
        "text": "As you know, we want to increase the monitoring of wildlife movement in our park.",
        "vietnamese": "Như bạn đã biết, chúng tôi muốn tăng cường giám sát hoạt động di chuyển của động vật hoang dã trong công viên của mình."
      },
      {
        "id": "p3-56-3",
        "speaker": "Woman",
        "text": "You mentioned that you have some cameras already installed, correct?",
        "vietnamese": "Bạn đã đề cập rằng bạn đã cài đặt một số camera, đúng không?"
      },
      {
        "id": "p3-56-4",
        "speaker": "Man",
        "text": "We have some motion detection cameras to capture movement in some areas,",
        "vietnamese": "Chúng tôi có một số camera phát hiện chuyển động để ghi lại chuyển động ở một số khu vực,"
      },
      {
        "id": "p3-56-5",
        "speaker": "Woman",
        "text": "but we'd like to track wildlife at a greater distance.",
        "vietnamese": "nhưng chúng tôi muốn theo dõi động vật hoang dã ở khoảng cách xa hơn."
      },
      {
        "id": "p3-56-6",
        "speaker": "Man",
        "text": "Motion detector cameras don't really work for that.",
        "vietnamese": "Camera phát hiện chuyển động không thực sự có tác dụng cho việc đó."
      },
      {
        "id": "p3-56-7",
        "speaker": "Woman",
        "text": "You'd need to buy continuous recording cameras for that.",
        "vietnamese": "Bạn sẽ cần phải mua máy quay ghi liên tục cho việc đó."
      },
      {
        "id": "p3-56-8",
        "speaker": "Man",
        "text": "You'll probably get some great videos.",
        "vietnamese": "Có thể bạn sẽ nhận được một số video tuyệt vời."
      },
      {
        "id": "p3-56-9",
        "speaker": "Woman",
        "text": "And actually, we could post those online.",
        "vietnamese": "Và thực tế, chúng ta có thể đăng chúng lên mạng."
      },
      {
        "id": "p3-56-10",
        "speaker": "Man",
        "text": "That would be great publicity for the park.",
        "vietnamese": "Đó sẽ là sự quảng bá tuyệt vời cho công viên."
      },
      {
        "id": "p3-56-11",
        "speaker": "Woman",
        "text": "Yes, that would be another advantage of installing the cameras.",
        "vietnamese": "Vâng, đó sẽ là một lợi ích khác của việc lắp đặt camera."
      }
    ],
    "questions": [
      {
        "num": 56,
        "question": "Wheredo the womenwork?",
        "vietnameseQuestion": "Phụ nữ làm việc ở đâu?",
        "options": [
          {
            "key": "A",
            "text": "At a research laboratory",
            "vietnamese": "Tại phòng thí nghiệm nghiên cứu"
          },
          {
            "key": "B",
            "text": "At a wildlife park",
            "vietnamese": "Tại công viên động vật hoang dã"
          },
          {
            "key": "C",
            "text": "At a newspaper",
            "vietnamese": "Tại một tờ báo"
          },
          {
            "key": "D",
            "text": "At an event venue",
            "vietnamese": "Tại một địa điểm tổ chức sự kiện"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"At a wildlife park\" (Tại công viên động vật hoang dã)."
      },
      {
        "num": 57,
        "question": "What will the womenmost likelypurchase from theman?",
        "vietnameseQuestion": "Phụ nữ có nhiều khả năng sẽ mua gì nhất từ ​​người đàn ông?",
        "options": [
          {
            "key": "A",
            "text": "Outdoor cameras",
            "vietnamese": "Camera ngoài trời"
          },
          {
            "key": "B",
            "text": "Construction supplies",
            "vietnamese": "Vật tư xây dựng"
          },
          {
            "key": "C",
            "text": "Printing materials",
            "vietnamese": "Vật liệu in ấn"
          },
          {
            "key": "D",
            "text": "Safety equipment",
            "vietnamese": "Thiết bị an toàn"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là (A): \"Outdoor cameras\" (Camera ngoài trời)."
      },
      {
        "num": 58,
        "question": "What advantage do the women mention?",
        "vietnameseQuestion": "Phụ nữ nhắc đến lợi ích gì?",
        "options": [
          {
            "key": "A",
            "text": "Training opportunities",
            "vietnamese": "Cơ hội đào tạo"
          },
          {
            "key": "B",
            "text": "Cost savings",
            "vietnamese": "Tiết kiệm chi phí"
          },
          {
            "key": "C",
            "text": "Increased publicity",
            "vietnamese": "Tăng tính công khai"
          },
          {
            "key": "D",
            "text": "Efficient staff scheduling",
            "vietnamese": "Sắp xếp nhân sự hiệu quả"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"Increased publicity\" (Tăng tính công khai)."
      }
    ],
    "vocabulary": [
      {
        "word": "increase",
        "meaning": "tăng lên",
        "partOfSpeech": "v/n"
      },
      {
        "word": "wildlife",
        "meaning": "động vật hoang dã",
        "partOfSpeech": "n"
      },
      {
        "word": "park",
        "meaning": "đỗ xe, đậu xe",
        "partOfSpeech": "v"
      },
      {
        "word": "already",
        "meaning": "đã... rồi",
        "partOfSpeech": "adv"
      }
    ]
  },
  {
    "id": "part3-59-61",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 59 - 61",
    "title": "Part 3 - Câu 59 - 61: Người nói có khả năng làm việc ở đâu nhất",
    "audioSrc": "/audio/test6_2023.mp3",
    "startTime": 1551.89,
    "endTime": 1628.62,
    "transcript": [
      {
        "id": "p3-59-1",
        "speaker": "Woman",
        "text": "I spoke to Representative Kimura from the City Council today.",
        "vietnamese": "Hôm nay tôi đã nói chuyện với Đại diện Kimura của Hội đồng Thành phố."
      },
      {
        "id": "p3-59-2",
        "speaker": "Man",
        "text": "He's joining us in the studio on Tuesday so we can interview him about the City Council's budget plans.",
        "vietnamese": "Anh ấy sẽ tham gia cùng chúng tôi tại trường quay vào thứ Ba để chúng tôi có thể phỏng vấn anh ấy về kế hoạch ngân sách của Hội đồng Thành phố."
      },
      {
        "id": "p3-59-3",
        "speaker": "Woman",
        "text": "Great. Our listeners always appreciate those interviews.",
        "vietnamese": "Tuyệt vời. Thính giả của chúng tôi luôn đánh giá cao những cuộc phỏng vấn đó."
      },
      {
        "id": "p3-59-4",
        "speaker": "Man",
        "text": "I already have a list of questions to ask him.",
        "vietnamese": "Tôi đã có sẵn một danh sách các câu hỏi để hỏi anh ấy."
      },
      {
        "id": "p3-59-5",
        "speaker": "Woman",
        "text": "By the way, do you have time to listen to the recordings of last week's shows",
        "vietnamese": "Nhân tiện, bạn có thời gian để nghe bản ghi âm của các chương trình tuần trước không?"
      },
      {
        "id": "p3-59-6",
        "speaker": "Man",
        "text": "and compare them to the transcripts?",
        "vietnamese": "và so sánh chúng với bảng điểm?"
      },
      {
        "id": "p3-59-7",
        "speaker": "Woman",
        "text": "Make any changes that need to be made?",
        "vietnamese": "Thực hiện bất kỳ thay đổi cần thiết nào?"
      },
      {
        "id": "p3-59-8",
        "speaker": "Man",
        "text": "I'd like to post them to the website tomorrow.",
        "vietnamese": "Tôi muốn đăng chúng lên trang web vào ngày mai."
      },
      {
        "id": "p3-59-9",
        "speaker": "Woman",
        "text": "Doesn't the voice recognition software generate the transcripts?",
        "vietnamese": "Phần mềm nhận dạng giọng nói không tạo ra bản ghi âm phải không?"
      },
      {
        "id": "p3-59-10",
        "speaker": "Man",
        "text": "Yes, but the program isn't completely accurate.",
        "vietnamese": "Có, nhưng chương trình không hoàn toàn chính xác."
      }
    ],
    "questions": [
      {
        "num": 59,
        "question": "Wheredo thespeakersmost likelywork?",
        "vietnameseQuestion": "Người nói có khả năng làm việc ở đâu nhất?",
        "options": [
          {
            "key": "A",
            "text": "At an electronics store",
            "vietnamese": "Tại một cửa hàng điện tử"
          },
          {
            "key": "B",
            "text": "At a bank",
            "vietnamese": "Tại một ngân hàng"
          },
          {
            "key": "C",
            "text": "At a medical clinic",
            "vietnamese": "Tại một phòng khám y tế"
          },
          {
            "key": "D",
            "text": "At a radio station",
            "vietnamese": "Tại một đài phát thanh"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là (D): \"At a radio station\" (Tại một đài phát thanh)."
      },
      {
        "num": 60,
        "question": "What will the woman do on Tuesday?",
        "vietnameseQuestion": "Người phụ nữ sẽ làm gì vào thứ Ba?",
        "options": [
          {
            "key": "A",
            "text": "Take inventory",
            "vietnamese": "Kiểm kê"
          },
          {
            "key": "B",
            "text": "Speak at a convention",
            "vietnamese": "Phát biểu tại một hội nghị"
          },
          {
            "key": "C",
            "text": "Conduct an interview",
            "vietnamese": "Tiến hành một cuộc phỏng vấn"
          },
          {
            "key": "D",
            "text": "Respond to e-mails",
            "vietnamese": "Trả lời email"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"Conduct an interview\" (Tiến hành một cuộc phỏng vấn)."
      },
      {
        "num": 61,
        "question": "Whatdoes the woman mean when she says,\"buttheprogram isn'tcompletely accurate\"?",
        "vietnameseQuestion": "Người phụ nữ có ý gì khi nói \"nhưng chương trình không hoàn toàn chính xác\"?",
        "options": [
          {
            "key": "A",
            "text": "Some software needs to be upgraded.",
            "vietnamese": "Một số phần mềm cần được nâng cấp."
          },
          {
            "key": "B",
            "text": "Some transcripts should be checked.",
            "vietnamese": "Một số bảng điểm cần được kiểm tra."
          },
          {
            "key": "C",
            "text": "There was a mistake in the budget.",
            "vietnamese": "Có một sai lầm trong ngân sách."
          },
          {
            "key": "D",
            "text": "Aschedule will need to be confirmed. Model Power Source 10G Gas-powered 15EW Electric (wired) 20AB Battery (traditional) 50SP Solar (rechargeable)",
            "vietnamese": "Lịch trình sẽ cần phải được xác nhận. Model Nguồn điện 10G Chạy bằng gas 15EW Điện (có dây) 20AB Pin (truyền thống) 50SP Năng lượng mặt trời (có thể sạc lại)"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"Some transcripts should be checked.\" (Một số bảng điểm cần được kiểm tra.)."
      }
    ],
    "vocabulary": [
      {
        "word": "representative",
        "meaning": "người đại diện",
        "partOfSpeech": "n"
      },
      {
        "word": "studio",
        "meaning": "phim trường, trường quay",
        "partOfSpeech": "n"
      },
      {
        "word": "interview",
        "meaning": "phỏng vấn",
        "partOfSpeech": "v/n"
      },
      {
        "word": "budget",
        "meaning": "ngân sách",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part3-62-64",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 62 - 64",
    "title": "Part 3 - Câu 62 - 64: Người phụ nữ đang chuẩn bị gì",
    "audioSrc": "/audio/test6_2023.mp3",
    "startTime": 1628.62,
    "endTime": 1723.18,
    "transcript": [
      {
        "id": "p3-62-1",
        "speaker": "Woman",
        "text": "Hi, Marcos. Are you available to review this media release?",
        "vietnamese": "Chào, Marcos. Bạn có sẵn sàng xem lại thông cáo báo chí này không?"
      },
      {
        "id": "p3-62-2",
        "speaker": "Man",
        "text": "I'd like another opinion.",
        "vietnamese": "Tôi muốn có ý kiến ​​khác."
      },
      {
        "id": "p3-62-3",
        "speaker": "Woman",
        "text": "Sure. I'll take a look.",
        "vietnamese": "Chắc chắn. Tôi sẽ xem xét."
      },
      {
        "id": "p3-62-4",
        "speaker": "Man",
        "text": "Is this the announcement about the outdoor lights?",
        "vietnamese": "Đây có phải là thông báo về đèn ngoài trời không?"
      },
      {
        "id": "p3-62-5",
        "speaker": "Woman",
        "text": "Yes. The company wants us to write a release about its most successful landscaping light products of the year.",
        "vietnamese": "Vâng. Công ty muốn chúng tôi viết một bài giới thiệu về các sản phẩm đèn cảnh quan thành công nhất trong năm của họ."
      },
      {
        "id": "p3-62-6",
        "speaker": "Man",
        "text": "Solar powered outdoor lights.",
        "vietnamese": "Đèn ngoài trời sử dụng năng lượng mặt trời."
      },
      {
        "id": "p3-62-7",
        "speaker": "Woman",
        "text": "That's interesting.",
        "vietnamese": "Điều đó thật thú vị."
      },
      {
        "id": "p3-62-8",
        "speaker": "Man",
        "text": "They've outsold all the other kinds, including wired landscaping lights.",
        "vietnamese": "Họ đã bán chạy hơn tất cả các loại khác, bao gồm cả đèn cảnh quan có dây."
      },
      {
        "id": "p3-62-9",
        "speaker": "Woman",
        "text": "I think consumers like how easy the lights are to install.",
        "vietnamese": "Tôi nghĩ người tiêu dùng thích việc lắp đặt đèn dễ dàng như thế nào."
      },
      {
        "id": "p3-62-10",
        "speaker": "Man",
        "text": "They don't require any special tools or knowledge to set up.",
        "vietnamese": "Họ không yêu cầu bất kỳ công cụ hoặc kiến ​​thức đặc biệt nào để thiết lập."
      }
    ],
    "questions": [
      {
        "num": 62,
        "question": "What is the woman preparing?",
        "vietnameseQuestion": "Người phụ nữ đang chuẩn bị gì?",
        "options": [
          {
            "key": "A",
            "text": "An owner's manual",
            "vietnamese": "Hướng dẫn sử dụng"
          },
          {
            "key": "B",
            "text": "A media release",
            "vietnamese": "Một thông cáo báo chí"
          },
          {
            "key": "C",
            "text": "A financial report",
            "vietnamese": "Một báo cáo tài chính"
          },
          {
            "key": "D",
            "text": "A questionnaire",
            "vietnamese": "Một bảng câu hỏi"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"A media release\" (Một thông cáo báo chí)."
      },
      {
        "num": 63,
        "question": "Look at the graphic. According to the woman,whichisthemostsuccessful model?",
        "vietnameseQuestion": "Nhìn vào đồ họa. Theo người phụ nữ, mô hình nào thành công nhất?",
        "options": [
          {
            "key": "A",
            "text": "10G",
            "vietnamese": "10G"
          },
          {
            "key": "B",
            "text": "15EW",
            "vietnamese": "15EW"
          },
          {
            "key": "C",
            "text": "20AB",
            "vietnamese": "20AB"
          },
          {
            "key": "D",
            "text": "50SP",
            "vietnamese": "50SP"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là (D): \"50SP\" (50SP)."
      },
      {
        "num": 64,
        "question": "What does the man think consumers like about a product?",
        "vietnameseQuestion": "Người đàn ông nghĩ người tiêu dùng thích điều gì ở một sản phẩm?",
        "options": [
          {
            "key": "A",
            "text": "It has an extended warranty.",
            "vietnamese": "Nó có một bảo hành mở rộng."
          },
          {
            "key": "B",
            "text": "It is widely available. TEST",
            "vietnamese": "Nó có sẵn rộng rãi. KIỂM TRA"
          },
          {
            "key": "C",
            "text": "It is easy to install.",
            "vietnamese": "Nó rất dễ dàng để cài đặt."
          },
          {
            "key": "D",
            "text": "It is reasonably priced.",
            "vietnamese": "Nó có giá hợp lý. GONTOTHENEXTPAGE TEST6 97 Mục 3 Mục 4 Mục 2 Mục1"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"It is easy to install.\" (Nó rất dễ dàng để cài đặt.)."
      }
    ],
    "vocabulary": [
      {
        "word": "available",
        "meaning": "rảnh rỗi, có sẵn",
        "partOfSpeech": "adj"
      },
      {
        "word": "review",
        "meaning": "bài đánh giá nhận xét",
        "partOfSpeech": "n"
      },
      {
        "word": "release",
        "meaning": "phát hành, ra mắt",
        "partOfSpeech": "v"
      },
      {
        "word": "light",
        "meaning": "chiếu sáng, thắp sáng",
        "partOfSpeech": "n"
      }
    ],
    "graphicImage": "/images/intensive/test6_2023/q62_64.png"
  },
  {
    "id": "part3-65-67",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 65 - 67",
    "title": "Part 3 - Câu 65 - 67: Người đàn ông đã được thuê để trang trí cái gì",
    "audioSrc": "/audio/test6_2023.mp3",
    "startTime": 1723.18,
    "endTime": 1809.88,
    "transcript": [
      {
        "id": "p3-65-1",
        "speaker": "Woman",
        "text": "Thank you for meeting with me at your studio.",
        "vietnamese": "Cảm ơn bạn đã gặp tôi tại studio của bạn."
      },
      {
        "id": "p3-65-2",
        "speaker": "Man",
        "text": "I've just been commissioned to decorate a hotel lobby,",
        "vietnamese": "Tôi vừa được giao nhiệm vụ trang trí sảnh khách sạn,"
      },
      {
        "id": "p3-65-3",
        "speaker": "Woman",
        "text": "and I think a pair of your large floor vases will look great there, especially on each side of the front desk.",
        "vietnamese": "và tôi nghĩ một cặp bình hoa sàn lớn của bạn sẽ trông rất tuyệt ở đó, đặc biệt là ở mỗi bên của quầy lễ tân."
      },
      {
        "id": "p3-65-4",
        "speaker": "Man",
        "text": "Sure, Mr. Kwan, we have a few designs available right now.",
        "vietnamese": "Chắc chắn rồi, ông Kwan, hiện tại chúng tôi có sẵn một số mẫu thiết kế."
      },
      {
        "id": "p3-65-5",
        "speaker": "Woman",
        "text": "The most popular one is this tall vase with a wide opening in the middle.",
        "vietnamese": "Loại phổ biến nhất là chiếc bình cao có lỗ mở rộng ở giữa."
      },
      {
        "id": "p3-65-6",
        "speaker": "Man",
        "text": "That looks great, but I think I'll go with the one with the handles on both sides.",
        "vietnamese": "Trông thật tuyệt, nhưng tôi nghĩ tôi sẽ chọn loại có tay cầm ở cả hai bên."
      },
      {
        "id": "p3-65-7",
        "speaker": "Woman",
        "text": "It'll match the classic style of the lobby nicely.",
        "vietnamese": "Nó sẽ phù hợp với phong cách cổ điển của tiền sảnh."
      },
      {
        "id": "p3-65-8",
        "speaker": "Man",
        "text": "Wonderful.",
        "vietnamese": "Tuyệt vời."
      },
      {
        "id": "p3-65-9",
        "speaker": "Woman",
        "text": "Great choice.",
        "vietnamese": "Sự lựa chọn tuyệt vời."
      },
      {
        "id": "p3-65-10",
        "speaker": "Man",
        "text": "Let me check with an associate about when we can deliver the vases to you.",
        "vietnamese": "Hãy để tôi kiểm tra với một cộng sự về thời điểm chúng tôi có thể giao bình cho bạn."
      }
    ],
    "questions": [
      {
        "num": 65,
        "question": "What has the man been hiredto decorate?",
        "vietnameseQuestion": "Người đàn ông đã được thuê để trang trí cái gì?",
        "options": [
          {
            "key": "A",
            "text": "Amuseumentrance",
            "vietnamese": "Giải trí"
          },
          {
            "key": "B",
            "text": "Aclient's office",
            "vietnamese": "Văn phòng khách hàng"
          },
          {
            "key": "C",
            "text": "A hotel lobby",
            "vietnamese": "Một sảnh khách sạn"
          },
          {
            "key": "D",
            "text": "A rooftop garden",
            "vietnamese": "Một khu vườn trên mái"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"A hotel lobby\" (Một sảnh khách sạn)."
      },
      {
        "num": 66,
        "question": "Look at the graphic. Which item does the man choose?",
        "vietnameseQuestion": "Nhìn vào đồ họa. Người đàn ông chọn món đồ nào?",
        "options": [
          {
            "key": "A",
            "text": "Item 1",
            "vietnamese": "Mục 1"
          },
          {
            "key": "B",
            "text": "Item 2",
            "vietnamese": "Mục 2"
          },
          {
            "key": "C",
            "text": "Item 3",
            "vietnamese": "Mục 3"
          },
          {
            "key": "D",
            "text": "Item 4",
            "vietnamese": "Mục 4"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"Item 2\" (Mục 2)."
      },
      {
        "num": 67,
        "question": "What will thewomantalk to acolleague about?",
        "vietnameseQuestion": "Người phụ nữ sẽ nói chuyện gì với đồng nghiệp?",
        "options": [
          {
            "key": "A",
            "text": "A delivery date",
            "vietnamese": "Ngày giao hàng"
          },
          {
            "key": "B",
            "text": "An employee discount",
            "vietnamese": "Giảm giá nhân viên"
          },
          {
            "key": "C",
            "text": "A payment method",
            "vietnamese": "Một phương thức thanh toán"
          },
          {
            "key": "D",
            "text": "Aproductsubstitution 98 Somerville Tours Time Length Downtown West 9 A.M. 1 hour Downtown East 10 A.M. 1 hour 11 A.M. Riverside 1 /2 hours 2 hours 12 P.M. Combinationtour",
            "vietnamese": "Aproductsubstitution 98 Chuyến tham quan Somerville Thời gian kéo dài Trung tâm thành phố phía Tây 9 giờ sáng 1 giờ Khu trung tâm phía Đông 10 giờ sáng 1 giờ 11 giờ sáng Ven sông 1/2 giờ 2 giờ 12 giờ trưa Tour kết hợp"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là (A): \"A delivery date\" (Ngày giao hàng)."
      }
    ],
    "vocabulary": [
      {
        "word": "studio",
        "meaning": "phim trường, trường quay",
        "partOfSpeech": "n"
      },
      {
        "word": "decorate",
        "meaning": "trang trí",
        "partOfSpeech": "v"
      },
      {
        "word": "lobby",
        "meaning": "tiền sảnh",
        "partOfSpeech": "n"
      },
      {
        "word": "floor",
        "meaning": "tầng, sàn nhà",
        "partOfSpeech": "n"
      }
    ],
    "graphicImage": "/images/intensive/test6_2023/q65_67.png"
  },
  {
    "id": "part3-68-70",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 68 - 70",
    "title": "Part 3 - Câu 68 - 70: Tại sao người đàn ông lại quan tâm đến việc tham gia một ...",
    "audioSrc": "/audio/test6_2023.mp3",
    "startTime": 1809.88,
    "endTime": 1893.75,
    "transcript": [
      {
        "id": "p3-68-1",
        "speaker": "Woman",
        "text": "I heard you offer tours of the city.",
        "vietnamese": "Tôi nghe nói bạn cung cấp các chuyến tham quan thành phố."
      },
      {
        "id": "p3-68-2",
        "speaker": "Man",
        "text": "I'm a travel agent, and I like to try out different tour companies before recommending them to my clients.",
        "vietnamese": "Tôi là một đại lý du lịch và tôi muốn thử sức với các công ty du lịch khác nhau trước khi giới thiệu họ với khách hàng của mình."
      },
      {
        "id": "p3-68-3",
        "speaker": "Woman",
        "text": "How long do your tours last?",
        "vietnamese": "Chuyến du lịch của bạn kéo dài bao lâu?"
      },
      {
        "id": "p3-68-4",
        "speaker": "Man",
        "text": "They generally take between one and two hours.",
        "vietnamese": "Chúng thường mất từ ​​một đến hai giờ."
      },
      {
        "id": "p3-68-5",
        "speaker": "Woman",
        "text": "The Riverside tours are most popular.",
        "vietnamese": "Các tour du lịch Riverside là phổ biến nhất."
      },
      {
        "id": "p3-68-6",
        "speaker": "Man",
        "text": "It's one and a half hours long.",
        "vietnamese": "Nó dài một tiếng rưỡi."
      },
      {
        "id": "p3-68-7",
        "speaker": "Woman",
        "text": "I think I'd prefer to take a shorter one right now.",
        "vietnamese": "Tôi nghĩ bây giờ tôi muốn lấy một cái ngắn hơn."
      },
      {
        "id": "p3-68-8",
        "speaker": "Man",
        "text": "Okay.",
        "vietnamese": "Được rồi."
      },
      {
        "id": "p3-68-9",
        "speaker": "Woman",
        "text": "And would you like to rent a headset?",
        "vietnamese": "Và bạn có muốn thuê một chiếc tai nghe không?"
      },
      {
        "id": "p3-68-10",
        "speaker": "Man",
        "text": "That way you can listen to the recorded information on your bus tour.",
        "vietnamese": "Bằng cách đó bạn có thể nghe thông tin được ghi lại trong chuyến tham quan bằng xe buýt của mình."
      },
      {
        "id": "p3-68-11",
        "speaker": "Woman",
        "text": "That's a good option.",
        "vietnamese": "Đó là một lựa chọn tốt."
      }
    ],
    "questions": [
      {
        "num": 68,
        "question": "Why is the man interested in taking a tour?",
        "vietnameseQuestion": "Tại sao người đàn ông lại quan tâm đến việc tham gia một chuyến du lịch?",
        "options": [
          {
            "key": "A",
            "text": "Todoresearchforabook",
            "vietnamese": "Todoresearchforabook"
          },
          {
            "key": "B",
            "text": "To choose an area to live in",
            "vietnamese": "Để chọn khu vực sinh sống"
          },
          {
            "key": "C",
            "text": "To evaluate a company's service",
            "vietnamese": "Để đánh giá dịch vụ của một công ty"
          },
          {
            "key": "D",
            "text": "To takephotographs for a Web site",
            "vietnamese": "Để chụp ảnh cho một trang Web"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"To evaluate a company's service\" (Để đánh giá dịch vụ của một công ty)."
      },
      {
        "num": 69,
        "question": "Look at the graphic. What time does the most popular tour begin?",
        "vietnameseQuestion": "Nhìn vào đồ họa. Chuyến du lịch phổ biến nhất bắt đầu lúc mấy giờ?",
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
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"At 11 A.M.\" (Vào lúc 11 giờ sáng)."
      },
      {
        "num": 70,
        "question": "What will the man most likely do?",
        "vietnameseQuestion": "Người đàn ông rất có thể sẽ làm gì?",
        "options": [
          {
            "key": "A",
            "text": "Book tickets in advance",
            "vietnamese": "Đặt vé trước"
          },
          {
            "key": "B",
            "text": "Rent an audio device",
            "vietnamese": "Thuê thiết bị âm thanh"
          },
          {
            "key": "C",
            "text": "Visit the library",
            "vietnamese": "Ghé thăm thư viện"
          },
          {
            "key": "D",
            "text": "Wait for cooler weather PART4 and will be spoken only one time.",
            "vietnamese": "Đợi thời tiết mát mẻ hơn PHẦN 4 và sẽ chỉ được nói một lần."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"Rent an audio device\" (Thuê thiết bị âm thanh)."
      }
    ],
    "vocabulary": [
      {
        "word": "travel",
        "meaning": "đi lại, đi công tác",
        "partOfSpeech": "v"
      },
      {
        "word": "agent",
        "meaning": "nhân viên, đại lý",
        "partOfSpeech": "n"
      },
      {
        "word": "tour",
        "meaning": "chuyến tham quan, dẫn đi xem",
        "partOfSpeech": "n/v"
      },
      {
        "word": "prefer",
        "meaning": "thích hơn",
        "partOfSpeech": "v"
      }
    ],
    "graphicImage": "/images/intensive/test6_2023/q68_70.png"
  },
  {
    "id": "part4-71-73",
    "part": 4,
    "partTitle": "Part 4: Bài nói chuyện",
    "questionRange": "Câu 71 - 73",
    "title": "Part 4 - Câu 71 - 73: Sản phẩm nào đang được quảng cáo",
    "audioSrc": "/audio/test6_2023.mp3",
    "startTime": 1928.56,
    "endTime": 1999.65,
    "transcript": [
      {
        "id": "p4-71-1",
        "speaker": "Speaker",
        "text": "Are you tired of relying on noisy bulky fans to cool you down on hot days?",
        "vietnamese": "Bạn cảm thấy mệt mỏi khi phải dựa vào những chiếc quạt cồng kềnh ồn ào để giải nhiệt trong những ngày nắng nóng?"
      },
      {
        "id": "p4-71-2",
        "speaker": "Speaker",
        "text": "Then look no further than the Deluxe Cool.",
        "vietnamese": "Vậy thì không cần tìm đâu xa ngoài Deluxe Cool."
      },
      {
        "id": "p4-71-3",
        "speaker": "Speaker",
        "text": "It's revolutionary design cools you off without the usual noise.",
        "vietnamese": "Đó là thiết kế mang tính cách mạng giúp bạn mát mẻ mà không có tiếng ồn thông thường."
      },
      {
        "id": "p4-71-4",
        "speaker": "Speaker",
        "text": "Unlike typical rotating fans, the Deluxe Cool fan uses vibrations to move a single blade to push air.",
        "vietnamese": "Không giống như những chiếc quạt quay thông thường, quạt Deluxe Cool sử dụng cơ chế rung để di chuyển một cánh quạt để đẩy không khí."
      },
      {
        "id": "p4-71-5",
        "speaker": "Speaker",
        "text": "And we're proud to say that it's now the quietest fan on the market.",
        "vietnamese": "Và chúng tôi tự hào nói rằng đây hiện là chiếc quạt chạy êm nhất trên thị trường."
      },
      {
        "id": "p4-71-6",
        "speaker": "Speaker",
        "text": "Now's the time to buy as we are offering a special discount when you type in the code,",
        "vietnamese": "Bây giờ là lúc mua vì chúng tôi đang giảm giá đặc biệt khi bạn nhập mã,"
      },
      {
        "id": "p4-71-7",
        "speaker": "Speaker",
        "text": "Deluxe at online checkout.",
        "vietnamese": "Deluxe khi thanh toán trực tuyến."
      }
    ],
    "questions": [
      {
        "num": 71,
        "question": "What product is being advertised?",
        "vietnameseQuestion": "Sản phẩm nào đang được quảng cáo?",
        "options": [
          {
            "key": "A",
            "text": "A refrigerator",
            "vietnamese": "Một tủ lạnh"
          },
          {
            "key": "B",
            "text": "An automobile",
            "vietnamese": "Một chiếc ô tô"
          },
          {
            "key": "C",
            "text": "A blender",
            "vietnamese": "Máy xay sinh tố"
          },
          {
            "key": "D",
            "text": "Afan",
            "vietnamese": "Afan"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là (D): \"Afan\" (Afan)."
      },
      {
        "num": 72,
        "question": "Why is the company proud of the product?",
        "vietnameseQuestion": "Tại sao công ty tự hào về sản phẩm?",
        "options": [
          {
            "key": "A",
            "text": "It is available worldwide.",
            "vietnamese": "Nó có sẵn trên toàn thế giới."
          },
          {
            "key": "B",
            "text": "It is quiet.",
            "vietnamese": "Nó yên tĩnh."
          },
          {
            "key": "C",
            "text": "It is affordable.",
            "vietnamese": "Nó có giá cả phải chăng."
          },
          {
            "key": "D",
            "text": "It won an award.",
            "vietnamese": "Nó đã giành được một giải thưởng."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"It is quiet.\" (Nó yên tĩnh.)."
      },
      {
        "num": 73,
        "question": "How can the listeners receive a discount?",
        "vietnameseQuestion": "Làm thế nào người nghe có thể nhận được giảm giá?",
        "options": [
          {
            "key": "A",
            "text": "Bycreatinganonlineprofile",
            "vietnamese": "Bycreatinganonlineprofile"
          },
          {
            "key": "B",
            "text": "By purchasing multiple products",
            "vietnamese": "Bằng cách mua nhiều sản phẩm"
          },
          {
            "key": "C",
            "text": "By using a special code",
            "vietnamese": "Bằng cách sử dụng một mã đặc biệt"
          },
          {
            "key": "D",
            "text": "By writing a product review",
            "vietnamese": "Bằng cách viết bài đánh giá sản phẩm"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"By using a special code\" (Bằng cách sử dụng một mã đặc biệt)."
      }
    ],
    "vocabulary": [
      {
        "word": "design",
        "meaning": "thiết kế",
        "partOfSpeech": "v"
      },
      {
        "word": "market",
        "meaning": "khu chợ",
        "partOfSpeech": "n"
      },
      {
        "word": "discount",
        "meaning": "sự giảm giá, chiết khấu",
        "partOfSpeech": "n"
      },
      {
        "word": "checkout",
        "meaning": "quầy thanh toán, thủ tục thanh toán",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part4-74-76",
    "part": 4,
    "partTitle": "Part 4: Bài nói chuyện",
    "questionRange": "Câu 74 - 76",
    "title": "Part 4 - Câu 74 - 76: Cuộc nói chuyện có nhiều khả năng diễn ra ở đâu",
    "audioSrc": "/audio/test6_2023.mp3",
    "startTime": 1999.65,
    "endTime": 2079.36,
    "transcript": [
      {
        "id": "p4-74-1",
        "speaker": "Speaker",
        "text": "This is an update for all dining room staff.",
        "vietnamese": "Đây là bản cập nhật cho tất cả nhân viên phòng ăn."
      },
      {
        "id": "p4-74-2",
        "speaker": "Speaker",
        "text": "Next month we're going to stop handing out printed menus to customers.",
        "vietnamese": "Tháng tới chúng tôi sẽ ngừng phát thực đơn in cho khách hàng."
      },
      {
        "id": "p4-74-3",
        "speaker": "Speaker",
        "text": "Instead, we will place a sign with a QR code on each table.",
        "vietnamese": "Thay vào đó, chúng tôi sẽ đặt một tấm biển có mã QR trên mỗi bàn."
      },
      {
        "id": "p4-74-4",
        "speaker": "Speaker",
        "text": "Customers can scan the code with their smartphones to open a digital menu.",
        "vietnamese": "Khách hàng có thể quét mã bằng điện thoại thông minh của mình để mở menu kỹ thuật số."
      },
      {
        "id": "p4-74-5",
        "speaker": "Speaker",
        "text": "The owners feel that scanned menus are more environmentally friendly and will use less paper.",
        "vietnamese": "Chủ sở hữu cảm thấy rằng các menu được quét thân thiện với môi trường hơn và sẽ sử dụng ít giấy hơn."
      },
      {
        "id": "p4-74-6",
        "speaker": "Speaker",
        "text": "Now we know that not all customers will be familiar with this process.",
        "vietnamese": "Bây giờ chúng tôi biết rằng không phải tất cả khách hàng đều quen thuộc với quy trình này."
      },
      {
        "id": "p4-74-7",
        "speaker": "Speaker",
        "text": "Please be sure to help any customers who need assistance.",
        "vietnamese": "Hãy chắc chắn để giúp đỡ bất kỳ khách hàng cần hỗ trợ."
      }
    ],
    "questions": [
      {
        "num": 74,
        "question": "Wheredoes thetalkmost likelytakeplace?",
        "vietnameseQuestion": "Cuộc nói chuyện có nhiều khả năng diễn ra ở đâu?",
        "options": [
          {
            "key": "A",
            "text": "At a restaurant",
            "vietnamese": "Tại một nhà hàng"
          },
          {
            "key": "B",
            "text": "At a print shop",
            "vietnamese": "Tại một cửa hàng in"
          },
          {
            "key": "C",
            "text": "At a computer store",
            "vietnamese": "Tại một cửa hàng máy tính"
          },
          {
            "key": "D",
            "text": "At a manufacturing plant",
            "vietnamese": "Tại một nhà máy sản xuất"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là (A): \"At a restaurant\" (Tại một nhà hàng)."
      },
      {
        "num": 75,
        "question": "According to the speaker, why is a change being made?",
        "vietnameseQuestion": "Theo người nói, tại sao lại có sự thay đổi này?",
        "options": [
          {
            "key": "A",
            "text": "To save storage space",
            "vietnamese": "Để tiết kiệm không gian lưu trữ"
          },
          {
            "key": "B",
            "text": "Toaddresscustomerfeedback",
            "vietnamese": "Toaddresskhách hàngphản hồi"
          },
          {
            "key": "C",
            "text": "Tobeenvironmentallyresponsible",
            "vietnamese": "Chịu trách nhiệm về môi trường"
          },
          {
            "key": "D",
            "text": "To improve employee satisfaction",
            "vietnamese": "Để nâng cao sự hài lòng của nhân viên"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"Tobeenvironmentallyresponsible\" (Chịu trách nhiệm về môi trường)."
      },
      {
        "num": 76,
        "question": "Whatdoesthespeakeraskthelistenersto do?",
        "vietnameseQuestion": "Người nói hỏi người nghe làm gì?",
        "options": [
          {
            "key": "A",
            "text": "Review a safety manual",
            "vietnamese": "Xem lại hướng dẫn an toàn"
          },
          {
            "key": "B",
            "text": "Record time accurately",
            "vietnamese": "Ghi lại thời gian chính xác"
          },
          {
            "key": "C",
            "text": "Wear appropriate clothing",
            "vietnamese": "Mặc quần áo phù hợp"
          },
          {
            "key": "D",
            "text": "Assist customers with a process",
            "vietnamese": "Hỗ trợ khách hàng về quy trình"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là (D): \"Assist customers with a process\" (Hỗ trợ khách hàng về quy trình)."
      }
    ],
    "vocabulary": [
      {
        "word": "update",
        "meaning": "cập nhật",
        "partOfSpeech": "v"
      },
      {
        "word": "staff",
        "meaning": "bố trí nhân sự làm việc",
        "partOfSpeech": "v"
      },
      {
        "word": "instead",
        "meaning": "thay vào đó",
        "partOfSpeech": "adv"
      },
      {
        "word": "open",
        "meaning": "mở cửa đón khách",
        "partOfSpeech": "v"
      }
    ]
  },
  {
    "id": "part4-77-79",
    "part": 4,
    "partTitle": "Part 4: Bài nói chuyện",
    "questionRange": "Câu 77 - 79",
    "title": "Part 4 - Câu 77 - 79: Công ty của diễn giả bán gì",
    "audioSrc": "/audio/test6_2023.mp3",
    "startTime": 2079.36,
    "endTime": 2159.55,
    "transcript": [
      {
        "id": "p4-77-1",
        "speaker": "Speaker",
        "text": "I'd like to start this meeting by sharing the results of the promotional campaign we ran last quarter",
        "vietnamese": "Tôi muốn bắt đầu cuộc họp này bằng cách chia sẻ kết quả của chiến dịch quảng cáo mà chúng tôi đã thực hiện vào quý trước"
      },
      {
        "id": "p4-77-2",
        "speaker": "Speaker",
        "text": "for our new line of bottled juices and teas.",
        "vietnamese": "cho dòng nước trái cây và trà đóng chai mới của chúng tôi."
      },
      {
        "id": "p4-77-3",
        "speaker": "Speaker",
        "text": "As you know, Claudia was the one who suggested advertising our products on popular social media channels.",
        "vietnamese": "Như bạn đã biết, Claudia là người đề xuất quảng cáo sản phẩm của chúng tôi trên các kênh mạng xã hội phổ biến."
      },
      {
        "id": "p4-77-4",
        "speaker": "Speaker",
        "text": "And you all put that plan into action.",
        "vietnamese": "Và tất cả các bạn đều thực hiện kế hoạch đó."
      },
      {
        "id": "p4-77-5",
        "speaker": "Speaker",
        "text": "As a result of this campaign, awareness of our brand among younger consumers is up by 30%.",
        "vietnamese": "Kết quả của chiến dịch này là nhận thức về thương hiệu của chúng tôi đối với người tiêu dùng trẻ tuổi tăng 30%."
      },
      {
        "id": "p4-77-6",
        "speaker": "Speaker",
        "text": "Because of this success, we're going to be able to reward each of you with a bonus that's a percentage of your base salary.",
        "vietnamese": "Nhờ thành công này, chúng tôi sẽ có thể thưởng cho mỗi bạn một khoản tiền thưởng tương ứng với phần trăm lương cơ bản của bạn."
      },
      {
        "id": "p4-77-7",
        "speaker": "Speaker",
        "text": "You'll see it in your June 3rd paycheck.",
        "vietnamese": "Bạn sẽ thấy nó trong tờ tiền lương ngày 3 tháng 6 của bạn."
      }
    ],
    "questions": [
      {
        "num": 77,
        "question": "What does the speaker's company sell?",
        "vietnameseQuestion": "Công ty của diễn giả bán gì?",
        "options": [
          {
            "key": "A",
            "text": "Children's clothing",
            "vietnamese": "Quần áo trẻ em"
          },
          {
            "key": "B",
            "text": "Office furniture",
            "vietnamese": "Nội thất văn phòng"
          },
          {
            "key": "C",
            "text": "Bottled drinks",
            "vietnamese": "Đồ uống đóng chai"
          },
          {
            "key": "D",
            "text": "Sports equipment",
            "vietnamese": "Dụng cụ thể thao"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"Bottled drinks\" (Đồ uống đóng chai)."
      },
      {
        "num": 78,
        "question": "What did Claudia suggest doing?",
        "vietnameseQuestion": "Claudia đề nghị làm gì?",
        "options": [
          {
            "key": "A",
            "text": "Holding a contest for customers",
            "vietnamese": "Tổ chức cuộc thi dành cho khách hàng"
          },
          {
            "key": "B",
            "text": "Placing advertisements on social media",
            "vietnamese": "Đặt quảng cáo trên phương tiện truyền thông xã hội"
          },
          {
            "key": "C",
            "text": "Hiring a celebrity spokesperson",
            "vietnamese": "Thuê người phát ngôn nổi tiếng"
          },
          {
            "key": "D",
            "text": "Sponsoring a music festival",
            "vietnamese": "Tài trợ cho lễ hội âm nhạc"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"Placing advertisements on social media\" (Đặt quảng cáo trên phương tiện truyền thông xã hội)."
      },
      {
        "num": 79,
        "question": "Whatwill thelistenersreceiveonJune3?",
        "vietnameseQuestion": "Người nghe sẽ nhận được gì vào ngày 3 tháng 6?",
        "options": [
          {
            "key": "A",
            "text": "A salary bonus",
            "vietnamese": "Tiền thưởng tiền lương"
          },
          {
            "key": "B",
            "text": "Aday off",
            "vietnamese": "Một ngày nghỉ TEST6"
          },
          {
            "key": "C",
            "text": "Anew ID card",
            "vietnamese": "Thẻ căn cước mới"
          },
          {
            "key": "D",
            "text": "A product sample",
            "vietnamese": "Một mẫu sản phẩm"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là (A): \"A salary bonus\" (Tiền thưởng tiền lương)."
      }
    ],
    "vocabulary": [
      {
        "word": "line",
        "meaning": "xếp thành hàng dọc theo",
        "partOfSpeech": "v"
      },
      {
        "word": "advertising",
        "meaning": "hoạt động quảng cáo",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part4-80-82",
    "part": 4,
    "partTitle": "Part 4: Bài nói chuyện",
    "questionRange": "Câu 80 - 82",
    "title": "Part 4 - Câu 80 - 82: Tại sao người nghe phải tuân theo một giao thức",
    "audioSrc": "/audio/test6_2023.mp3",
    "startTime": 2159.55,
    "endTime": 2247.91,
    "transcript": [
      {
        "id": "p4-80-1",
        "speaker": "Speaker",
        "text": "We'd like to welcome you to our archive of ancient manuscripts.",
        "vietnamese": "Chúng tôi muốn chào mừng bạn đến với kho lưu trữ các bản thảo cổ của chúng tôi."
      },
      {
        "id": "p4-80-2",
        "speaker": "Speaker",
        "text": "Given the delicate condition of the items in our archive,",
        "vietnamese": "Với tình trạng mong manh của các hiện vật trong kho lưu trữ của chúng tôi,"
      },
      {
        "id": "p4-80-3",
        "speaker": "Speaker",
        "text": "we have a specific protocol that you must follow to protect the material as you conduct your research.",
        "vietnamese": "chúng tôi có một quy trình cụ thể mà bạn phải tuân theo để bảo vệ tài liệu khi bạn tiến hành nghiên cứu của mình."
      },
      {
        "id": "p4-80-4",
        "speaker": "Speaker",
        "text": "Please store all personal belongings in the large filing cabinet against that wall.",
        "vietnamese": "Vui lòng cất tất cả đồ đạc cá nhân trong tủ hồ sơ lớn dựa vào bức tường đó."
      },
      {
        "id": "p4-80-5",
        "speaker": "Speaker",
        "text": "After you do, I will be distributing gloves that must be worn at all times.",
        "vietnamese": "Sau khi bạn làm vậy, tôi sẽ phát găng tay mà bạn phải luôn đeo."
      },
      {
        "id": "p4-80-6",
        "speaker": "Speaker",
        "text": "Finally, at noon we'll be breaking for lunch.",
        "vietnamese": "Cuối cùng, vào buổi trưa chúng ta sẽ nghỉ trưa."
      },
      {
        "id": "p4-80-7",
        "speaker": "Speaker",
        "text": "See you all in the cafeteria.",
        "vietnamese": "Hẹn gặp mọi người ở quán cà phê."
      },
      {
        "id": "p4-80-8",
        "speaker": "Speaker",
        "text": "It's on the first floor of this building.",
        "vietnamese": "Nó ở tầng một của tòa nhà này."
      }
    ],
    "questions": [
      {
        "num": 80,
        "question": "Whydothelistenershavetofollowa protocol?",
        "vietnameseQuestion": "Tại sao người nghe phải tuân theo một giao thức?",
        "options": [
          {
            "key": "A",
            "text": "To secure the building",
            "vietnamese": "Để đảm bảo an toàn cho tòa nhà"
          },
          {
            "key": "B",
            "text": "To ensure accurate data",
            "vietnamese": "Để đảm bảo số liệu chính xác"
          },
          {
            "key": "C",
            "text": "To protect delicate items",
            "vietnamese": "Để bảo vệ những đồ vật dễ vỡ"
          },
          {
            "key": "D",
            "text": "To obtain certification",
            "vietnamese": "Để có được chứng nhận"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"To protect delicate items\" (Để bảo vệ những đồ vật dễ vỡ)."
      },
      {
        "num": 81,
        "question": "Where should the listeners place their belongings?",
        "vietnameseQuestion": "Người nghe nên đặt đồ đạc của họ ở đâu?",
        "options": [
          {
            "key": "A",
            "text": "On a shelf",
            "vietnamese": "Trên kệ"
          },
          {
            "key": "B",
            "text": "In lockers",
            "vietnamese": "Trong tủ khóa"
          },
          {
            "key": "C",
            "text": "On study tables",
            "vietnamese": "Trên bàn học"
          },
          {
            "key": "D",
            "text": "In a filing cabinet",
            "vietnamese": "Trong tủ hồ sơ"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là (D): \"In a filing cabinet\" (Trong tủ hồ sơ)."
      },
      {
        "num": 82,
        "question": "Whatinformationdoesthespeakerprovide about the cafeteria?",
        "vietnameseQuestion": "Người nói cung cấp thông tin gì về quán ăn tự phục vụ?",
        "options": [
          {
            "key": "A",
            "text": "Itsmenu",
            "vietnamese": "trình đơn của nó"
          },
          {
            "key": "B",
            "text": "Its seating capacity",
            "vietnamese": "Sức chứa chỗ ngồi của nó"
          },
          {
            "key": "C",
            "text": "Its hours of operation",
            "vietnamese": "Giờ hoạt động của nó"
          },
          {
            "key": "D",
            "text": "Its location",
            "vietnamese": "Vị trí của nó ĐI VÀO TRANG TIẾP THEO"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là (D): \"Its location\" (Vị trí của nó ĐI VÀO TRANG TIẾP THEO)."
      }
    ],
    "vocabulary": [
      {
        "word": "protocol",
        "meaning": "giao thức, quy trình quy định chuẩn",
        "partOfSpeech": "n"
      },
      {
        "word": "material",
        "meaning": "vật liệu, tài liệu",
        "partOfSpeech": "n"
      },
      {
        "word": "conduct",
        "meaning": "tiến hành, thực hiện",
        "partOfSpeech": "n"
      },
      {
        "word": "store",
        "meaning": "lưu trữ, cất giữ",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part4-83-85",
    "part": 4,
    "partTitle": "Part 4: Bài nói chuyện",
    "questionRange": "Câu 83 - 85",
    "title": "Part 4 - Câu 83 - 85: Diễn giả làm việc cho loại hình kinh doanh nào",
    "audioSrc": "/audio/test6_2023.mp3",
    "startTime": 2247.91,
    "endTime": 2324.87,
    "transcript": [
      {
        "id": "p4-83-1",
        "speaker": "Speaker",
        "text": "Hi.",
        "vietnamese": "CHÀO."
      },
      {
        "id": "p4-83-2",
        "speaker": "Speaker",
        "text": "This is Raya calling from Top Rack Editing Services.",
        "vietnamese": "Đây là Raya đang gọi từ Dịch vụ chỉnh sửa Top Rack."
      },
      {
        "id": "p4-83-3",
        "speaker": "Speaker",
        "text": "I wanted to let you know that the copy editor has completed reviewing the draft of your manuscript,",
        "vietnamese": "Tôi muốn cho bạn biết rằng người biên tập bản sao đã hoàn tất việc xem xét bản thảo bản thảo của bạn,"
      },
      {
        "id": "p4-83-4",
        "speaker": "Speaker",
        "text": "and it's now with the proof reader.",
        "vietnamese": "và bây giờ nó đã có người đọc thử."
      },
      {
        "id": "p4-83-5",
        "speaker": "Speaker",
        "text": "When the final copy of the manuscript is ready, you will receive an automatic email notification from the cloud management system.",
        "vietnamese": "Khi bản sao cuối cùng của bản thảo đã sẵn sàng, bạn sẽ nhận được thông báo email tự động từ hệ thống quản lý đám mây."
      },
      {
        "id": "p4-83-6",
        "speaker": "Speaker",
        "text": "By the way, you requested that the manuscript be ready within seven days.",
        "vietnamese": "Nhân tiện, bạn đã yêu cầu bản thảo phải hoàn thành trong vòng bảy ngày."
      },
      {
        "id": "p4-83-7",
        "speaker": "Speaker",
        "text": "We guarantee a turnaround time of 10 days.",
        "vietnamese": "Chúng tôi đảm bảo thời gian hoàn thành là 10 ngày."
      }
    ],
    "questions": [
      {
        "num": 83,
        "question": "Whattypeofbusinessdoesthespeaker work for?",
        "vietnameseQuestion": "Diễn giả làm việc cho loại hình kinh doanh nào?",
        "options": [
          {
            "key": "A",
            "text": "An accounting firm",
            "vietnamese": "Một công ty kế toán"
          },
          {
            "key": "B",
            "text": "Alaw firm",
            "vietnamese": "Công ty Alaw"
          },
          {
            "key": "C",
            "text": "Agraphic design service",
            "vietnamese": "Dịch vụ thiết kế đồ họa"
          },
          {
            "key": "D",
            "text": "An editing service",
            "vietnamese": "Dịch vụ chỉnh sửa"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là (D): \"An editing service\" (Dịch vụ chỉnh sửa)."
      },
      {
        "num": 84,
        "question": "Accordingtothespeaker,whatwill the listener receive by e-mail?",
        "vietnameseQuestion": "Theo người nói, người nghe sẽ nhận được gì qua e-mail?",
        "options": [
          {
            "key": "A",
            "text": "An updated price list",
            "vietnamese": "Bảng giá cập nhật"
          },
          {
            "key": "B",
            "text": "Asystemnotification",
            "vietnamese": "Thông báo không có hệ thống"
          },
          {
            "key": "C",
            "text": "A calendar invitation",
            "vietnamese": "Lời mời lịch"
          },
          {
            "key": "D",
            "text": "A revised agenda",
            "vietnamese": "Chương trình nghị sự sửa đổi"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"Asystemnotification\" (Thông báo không có hệ thống)."
      },
      {
        "num": 85,
        "question": "What doesthe speakerimplywhen she says,\"We guarantee a turnaround time of ten days\"?",
        "vietnameseQuestion": "Người nói hàm ý gì khi nói: \"Chúng tôi đảm bảo thời gian xử lý là 10 ngày\"?",
        "options": [
          {
            "key": "A",
            "text": "Arequest may not be met.",
            "vietnamese": "Yêu cầu có thể không được đáp ứng."
          },
          {
            "key": "B",
            "text": "Arefund will be issued soon.",
            "vietnamese": "Arefund sẽ sớm được phát hành."
          },
          {
            "key": "C",
            "text": "Additionalstaffisneeded",
            "vietnamese": "Cần thêm nhân sự"
          },
          {
            "key": "D",
            "text": "High rates are justified.",
            "vietnamese": "Tỷ lệ cao là hợp lý."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là (A): \"Arequest may not be met.\" (Yêu cầu có thể không được đáp ứng.)."
      }
    ],
    "vocabulary": [
      {
        "word": "rack",
        "meaning": "giá treo, móc treo",
        "partOfSpeech": "n"
      },
      {
        "word": "draft",
        "meaning": "bản thảo, bản phác thảo",
        "partOfSpeech": "n"
      },
      {
        "word": "receive",
        "meaning": "nhận được",
        "partOfSpeech": "v"
      },
      {
        "word": "management",
        "meaning": "ban quản lý",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part4-86-88",
    "part": 4,
    "partTitle": "Part 4: Bài nói chuyện",
    "questionRange": "Câu 86 - 88",
    "title": "Part 4 - Câu 86 - 88: Podcast nói về cái gì",
    "audioSrc": "/audio/test6_2023.mp3",
    "startTime": 2324.87,
    "endTime": 2406.74,
    "transcript": [
      {
        "id": "p4-86-1",
        "speaker": "Speaker",
        "text": "Welcome to the Forest Tree Today podcast, a show about managing the health of trees and the productivity of woodlands.",
        "vietnamese": "Chào mừng bạn đến với podcast Forest Tree Today, một chương trình về quản lý sức khỏe của cây cối và năng suất của rừng."
      },
      {
        "id": "p4-86-2",
        "speaker": "Speaker",
        "text": "Today's guest is Jessica Williams, who works as a consulting forester for landowners.",
        "vietnamese": "Vị khách hôm nay là Jessica Williams, người làm công việc tư vấn lâm nghiệp cho các chủ đất."
      },
      {
        "id": "p4-86-3",
        "speaker": "Speaker",
        "text": "I was chatting with Jessica before the show about her work, and she said that one benefit of her job",
        "vietnamese": "Tôi đã trò chuyện với Jessica trước buổi biểu diễn về công việc của cô ấy và cô ấy nói rằng một lợi ích từ công việc của cô ấy là"
      },
      {
        "id": "p4-86-4",
        "speaker": "Speaker",
        "text": "is she gets to interact with many different landowners in her area and learn about their woodlands.",
        "vietnamese": "là cô ấy được tiếp xúc với nhiều chủ đất khác nhau trong khu vực của mình và tìm hiểu về rừng của họ."
      },
      {
        "id": "p4-86-5",
        "speaker": "Speaker",
        "text": "I know many of my listeners are interested in careers in forestry, so I'll begin by asking Jessica about the education she needed to get started in her career.",
        "vietnamese": "Tôi biết nhiều thính giả của tôi quan tâm đến nghề nghiệp trong ngành lâm nghiệp, vì vậy tôi sẽ bắt đầu bằng cách hỏi Jessica về trình độ học vấn mà cô ấy cần để bắt đầu sự nghiệp của mình."
      }
    ],
    "questions": [
      {
        "num": 86,
        "question": "What is the podcast about?",
        "vietnameseQuestion": "Podcast nói về cái gì?",
        "options": [
          {
            "key": "A",
            "text": "Real estate",
            "vietnamese": "Bất động sản"
          },
          {
            "key": "B",
            "text": "Forestry",
            "vietnamese": "Lâm nghiệp"
          },
          {
            "key": "C",
            "text": "Sports management",
            "vietnamese": "Quản lý thể thao"
          },
          {
            "key": "D",
            "text": "Solar energy",
            "vietnamese": "Năng lượng mặt trời"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"Forestry\" (Lâm nghiệp)."
      },
      {
        "num": 87,
        "question": "What jobbenefit does JessicaWilliams mention?",
        "vietnameseQuestion": "JessicaWilliams đề cập đến lợi ích công việc gì?",
        "options": [
          {
            "key": "A",
            "text": "Meeting new people",
            "vietnamese": "Gặp gỡ những người mới"
          },
          {
            "key": "B",
            "text": "Having flexible hours",
            "vietnamese": "Có giờ linh hoạt"
          },
          {
            "key": "C",
            "text": "Being outdoors",
            "vietnamese": "Ở ngoài trời"
          },
          {
            "key": "D",
            "text": "Working remotely",
            "vietnamese": "Làm việc từ xa"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là (A): \"Meeting new people\" (Gặp gỡ những người mới)."
      },
      {
        "num": 88,
        "question": "Whatwill the speakerask JessicaWilliams about?",
        "vietnameseQuestion": "Diễn giả sẽ hỏi Jessica Williams về điều gì?",
        "options": [
          {
            "key": "A",
            "text": "Herteaching experience",
            "vietnamese": "Kinh nghiệm giảng dạy"
          },
          {
            "key": "B",
            "text": "Her publications",
            "vietnamese": "ấn phẩm của cô"
          },
          {
            "key": "C",
            "text": "Her travels",
            "vietnamese": "Chuyến đi của cô ấy"
          },
          {
            "key": "D",
            "text": "Her education 100",
            "vietnamese": "Trình độ học vấn của cô ấy 100"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là (D): \"Her education 100\" (Trình độ học vấn của cô ấy 100)."
      }
    ],
    "vocabulary": [
      {
        "word": "productivity",
        "meaning": "năng suất làm việc",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part4-89-91",
    "part": 4,
    "partTitle": "Part 4: Bài nói chuyện",
    "questionRange": "Câu 89 - 91",
    "title": "Part 4 - Câu 89 - 91: Thông báo diễn ra ở đâu",
    "audioSrc": "/audio/test6_2023.mp3",
    "startTime": 2406.74,
    "endTime": 2485.68,
    "transcript": [
      {
        "id": "p4-89-1",
        "speaker": "Speaker",
        "text": "Good afternoon, and welcome aboard the winding creek express.",
        "vietnamese": "Chào buổi chiều và chào mừng bạn lên con tàu tốc hành quanh co."
      },
      {
        "id": "p4-89-2",
        "speaker": "Speaker",
        "text": "In just a few moments, our scenic train ride will begin.",
        "vietnamese": "Chỉ trong chốc lát nữa, chuyến tàu ngắm cảnh của chúng ta sẽ bắt đầu."
      },
      {
        "id": "p4-89-3",
        "speaker": "Speaker",
        "text": "We'll be travelling 60 kilometres from the pine forests of winding creek to the coastal town of Wendell Shores.",
        "vietnamese": "Chúng tôi sẽ đi 60 km từ rừng thông của con lạch quanh co đến thị trấn ven biển Wendell Shores."
      },
      {
        "id": "p4-89-4",
        "speaker": "Speaker",
        "text": "This route has been carrying cargo and passengers since 1885, and I'll tell you about its fascinating history along the way.",
        "vietnamese": "Tuyến đường này đã vận chuyển hàng hóa và hành khách từ năm 1885 và tôi sẽ kể cho bạn nghe về lịch sử hấp dẫn của nó trên đường đi."
      },
      {
        "id": "p4-89-5",
        "speaker": "Speaker",
        "text": "We were planning to stop for a hike to the Wendell Shores lighthouse, but the path is too wet from last night's rain.",
        "vietnamese": "Chúng tôi định dừng lại để đi bộ đến ngọn hải đăng Wendell Shores, nhưng con đường quá ướt do trận mưa đêm qua."
      }
    ],
    "questions": [
      {
        "num": 89,
        "question": "Where is the announcement taking place?",
        "vietnameseQuestion": "Thông báo diễn ra ở đâu?",
        "options": [
          {
            "key": "A",
            "text": "On a boat",
            "vietnamese": "Trên một chiếc thuyền"
          },
          {
            "key": "B",
            "text": "On a bus",
            "vietnamese": "Trên xe buýt"
          },
          {
            "key": "C",
            "text": "On a train",
            "vietnamese": "Trên một chuyến tàu"
          },
          {
            "key": "D",
            "text": "On an airplane",
            "vietnamese": "Trên máy bay"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"On a train\" (Trên một chuyến tàu)."
      },
      {
        "num": 90,
        "question": "What information does the speaker sayhe will provide?",
        "vietnameseQuestion": "Người nói sẽ cung cấp thông tin gì?",
        "options": [
          {
            "key": "A",
            "text": "Historical facts",
            "vietnamese": "Sự thật lịch sử"
          },
          {
            "key": "B",
            "text": "Sightseeing suggestions",
            "vietnamese": "Gợi ý tham quan"
          },
          {
            "key": "C",
            "text": "Details about special events",
            "vietnamese": "Thông tin chi tiết về các sự kiện đặc biệt"
          },
          {
            "key": "D",
            "text": "Safety instructions",
            "vietnamese": "Hướng dẫn an toàn"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là (A): \"Historical facts\" (Sự thật lịch sử)."
      },
      {
        "num": 91,
        "question": "Why does the speaker say,\"thepath is too wet from last night's rain\"?",
        "vietnameseQuestion": "Tại sao người nói nói \"con đường quá ướt do trận mưa đêm qua\"?",
        "options": [
          {
            "key": "A",
            "text": "Torequestdirections",
            "vietnamese": "Để yêu cầu hướng dẫn"
          },
          {
            "key": "B",
            "text": "To make a recommendation",
            "vietnamese": "Để đưa ra khuyến nghị"
          },
          {
            "key": "C",
            "text": "To announcea change of plans",
            "vietnamese": "Thông báo thay đổi kế hoạch"
          },
          {
            "key": "D",
            "text": "To decline an invitation",
            "vietnamese": "Để từ chối lời mời"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"To announcea change of plans\" (Thông báo thay đổi kế hoạch)."
      }
    ],
    "vocabulary": [
      {
        "word": "train",
        "meaning": "đào tạo, huấn luyện",
        "partOfSpeech": "v"
      },
      {
        "word": "route",
        "meaning": "tuyến đường lộ trình",
        "partOfSpeech": "n"
      },
      {
        "word": "cargo",
        "meaning": "hàng hóa chuyên chở",
        "partOfSpeech": "n"
      },
      {
        "word": "hike",
        "meaning": "đi bộ đường dài, leo núi",
        "partOfSpeech": "v"
      }
    ]
  },
  {
    "id": "part4-92-94",
    "part": 4,
    "partTitle": "Part 4: Bài nói chuyện",
    "questionRange": "Câu 92 - 94",
    "title": "Part 4 - Câu 92 - 94: Diễn giả có khả năng làm việc trong ngành nào nhất",
    "audioSrc": "/audio/test6_2023.mp3",
    "startTime": 2485.68,
    "endTime": 2583.88,
    "transcript": [
      {
        "id": "p4-92-1",
        "speaker": "Speaker",
        "text": "Thanks for coming to this press conference.",
        "vietnamese": "Cảm ơn đã đến dự buổi họp báo này."
      },
      {
        "id": "p4-92-2",
        "speaker": "Speaker",
        "text": "We often have container ships lined up at the port waiting to be unloaded for several days.",
        "vietnamese": "Chúng ta thường có những tàu container xếp hàng ở cảng chờ dỡ hàng nhiều ngày."
      },
      {
        "id": "p4-92-3",
        "speaker": "Speaker",
        "text": "So today the port authority is announcing a modernization plan to utilize more automation, including automated cranes and driverless vehicles to speed up the unloading process.",
        "vietnamese": "Vì vậy, hôm nay chính quyền cảng công bố kế hoạch hiện đại hóa nhằm sử dụng nhiều tự động hóa hơn, bao gồm cần cẩu tự động và phương tiện không người lái để đẩy nhanh quá trình dỡ hàng."
      },
      {
        "id": "p4-92-4",
        "speaker": "Speaker",
        "text": "Whenever automation is introduced, employees become worried about being replaced by machines, but we'll always need workers here.",
        "vietnamese": "Bất cứ khi nào tự động hóa được giới thiệu, nhân viên lại lo lắng về việc bị thay thế bởi máy móc, nhưng ở đây chúng ta sẽ luôn cần công nhân."
      },
      {
        "id": "p4-92-5",
        "speaker": "Speaker",
        "text": "And we're setting aside funds to offer career retraining programs for our dock workers.",
        "vietnamese": "Và chúng tôi đang dành quỹ để cung cấp các chương trình đào tạo lại nghề nghiệp cho công nhân bến tàu của chúng tôi."
      },
      {
        "id": "p4-92-6",
        "speaker": "Speaker",
        "text": "I've made a timeline for this modernization program.",
        "vietnamese": "Tôi đã lập lịch trình cho chương trình hiện đại hóa này."
      },
      {
        "id": "p4-92-7",
        "speaker": "Speaker",
        "text": "I'll distribute copies of it now.",
        "vietnamese": "Tôi sẽ phân phát bản sao của nó ngay bây giờ."
      }
    ],
    "questions": [
      {
        "num": 92,
        "question": "What industry does the speaker most likely work in?",
        "vietnameseQuestion": "Diễn giả có khả năng làm việc trong ngành nào nhất?",
        "options": [
          {
            "key": "A",
            "text": "Aviation",
            "vietnamese": "Hàng không"
          },
          {
            "key": "B",
            "text": "Construction",
            "vietnamese": "Xây dựng"
          },
          {
            "key": "C",
            "text": "Automotive",
            "vietnamese": "ô tô"
          },
          {
            "key": "D",
            "text": "Shipping",
            "vietnamese": "vận chuyển"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là (D): \"Shipping\" (vận chuyển)."
      },
      {
        "num": 93,
        "question": "Why does the speaker say,\"Butwe'll always need workers here\"?",
        "vietnameseQuestion": "Tại sao người nói lại nói, \"Nhưng chúng ta sẽ luôn cần công nhân ở đây\"?",
        "options": [
          {
            "key": "A",
            "text": "To complain about a staff shortage",
            "vietnamese": "Khiếu nại về tình trạng thiếu nhân viên"
          },
          {
            "key": "B",
            "text": "To address a concern",
            "vietnamese": "Để giải quyết một mối quan tâm"
          },
          {
            "key": "C",
            "text": "To suggest a schedule change",
            "vietnamese": "Để đề nghị thay đổi lịch trình"
          },
          {
            "key": "D",
            "text": "To disagree with a proposal",
            "vietnamese": "Để không đồng ý với một đề xuất"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"To address a concern\" (Để giải quyết một mối quan tâm)."
      },
      {
        "num": 94,
        "question": "What will the speaker do next?",
        "vietnameseQuestion": "Người nói sẽ làm gì tiếp theo?",
        "options": [
          {
            "key": "A",
            "text": "Distribute a document",
            "vietnamese": "Phân phối một tài liệu"
          },
          {
            "key": "B",
            "text": "Begin a slideshow",
            "vietnamese": "Bắt đầu trình chiếu"
          },
          {
            "key": "C",
            "text": "Demonstrateaproduct",
            "vietnamese": "Trình diễn sản phẩm"
          },
          {
            "key": "D",
            "text": "Hand out awards Main Entrance Door 1 Klein Stret Gallery Gallery T DoorI Gift 1 IDoor -ShopT Chime Auditorium Cafe Door 3",
            "vietnamese": "Trao giải thưởng Cửa vào chính 1 Phòng trưng bày Klein Stret Phòng trưng bày T DoorI Quà tặng 1 IDoor -ShopT Chime Thính phòng Quán cà phê Cửa 3"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là (A): \"Distribute a document\" (Phân phối một tài liệu)."
      }
    ],
    "vocabulary": [
      {
        "word": "conference",
        "meaning": "hội nghị chuyên đề",
        "partOfSpeech": "n"
      },
      {
        "word": "container",
        "meaning": "hộp đựng thức ăn, đồ chứa",
        "partOfSpeech": "n"
      },
      {
        "word": "process",
        "meaning": "quy trình, quá trình",
        "partOfSpeech": "n"
      },
      {
        "word": "dock",
        "meaning": "cập cảng, cập bến",
        "partOfSpeech": "v"
      }
    ]
  },
  {
    "id": "part4-95-97",
    "part": 4,
    "partTitle": "Part 4: Bài nói chuyện",
    "questionRange": "Câu 95 - 97",
    "title": "Part 4 - Câu 95 - 97: Người nói rất có thể là ai",
    "audioSrc": "/audio/test6_2023.mp3",
    "startTime": 2583.88,
    "endTime": 2668.91,
    "transcript": [
      {
        "id": "p4-95-1",
        "speaker": "Speaker",
        "text": "All right.",
        "vietnamese": "Được rồi."
      },
      {
        "id": "p4-95-2",
        "speaker": "Speaker",
        "text": "Now that we've concluded the guided portion of our tour, you all have the remaining hour to explore the museum at your leisure.",
        "vietnamese": "Bây giờ chúng ta đã kết thúc phần hướng dẫn của chuyến tham quan, tất cả các bạn đều có thời gian còn lại để khám phá bảo tàng một cách thoải mái."
      },
      {
        "id": "p4-95-3",
        "speaker": "Speaker",
        "text": "In the Klein Gallery, you'll find an assortment of classical sculptures.",
        "vietnamese": "Trong Phòng trưng bày Klein, bạn sẽ tìm thấy nhiều loại tác phẩm điêu khắc cổ điển."
      },
      {
        "id": "p4-95-4",
        "speaker": "Speaker",
        "text": "There's also a short film in the auditorium about local artist Mateo Rossi.",
        "vietnamese": "Ngoài ra còn có một bộ phim ngắn trong khán phòng về nghệ sĩ địa phương Mateo Rossi."
      },
      {
        "id": "p4-95-5",
        "speaker": "Speaker",
        "text": "I highly recommend it.",
        "vietnamese": "Tôi đánh giá cao nó."
      },
      {
        "id": "p4-95-6",
        "speaker": "Speaker",
        "text": "And if anyone wants to grab a bite to eat, the cafe has an assortment of sandwiches, coffees and pastries.",
        "vietnamese": "Và nếu ai đó muốn ăn một miếng, quán cà phê có đủ loại bánh sandwich, cà phê và bánh ngọt."
      },
      {
        "id": "p4-95-7",
        "speaker": "Speaker",
        "text": "We'll meet back at the entrance outside of the gift shop in one hour.",
        "vietnamese": "Chúng ta sẽ gặp lại nhau ở lối vào bên ngoài cửa hàng quà tặng trong một giờ nữa."
      },
      {
        "id": "p4-95-8",
        "speaker": "Speaker",
        "text": "From there, we'll go on to the next stop on our city tour.",
        "vietnamese": "Từ đó, chúng ta sẽ đi đến điểm dừng tiếp theo trong chuyến tham quan thành phố của mình."
      }
    ],
    "questions": [
      {
        "num": 95,
        "question": "Who most likely is the speaker?",
        "vietnameseQuestion": "Người nói rất có thể là ai?",
        "options": [
          {
            "key": "A",
            "text": "A tour guide",
            "vietnamese": "Một hướng dẫn viên du lịch"
          },
          {
            "key": "B",
            "text": "An artist",
            "vietnamese": "Một nghệ sĩ"
          },
          {
            "key": "C",
            "text": "A security guard",
            "vietnamese": "Một nhân viên bảo vệ"
          },
          {
            "key": "D",
            "text": "An exhibit curator",
            "vietnamese": "Người phụ trách triển lãm"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là (A): \"A tour guide\" (Một hướng dẫn viên du lịch)."
      },
      {
        "num": 96,
        "question": "Whatdoesthespeakerrecommend?",
        "vietnameseQuestion": "Người nói đề nghị điều gì?",
        "options": [
          {
            "key": "A",
            "text": "Eating outsideon aterrace",
            "vietnamese": "Ăn uống bên ngoài sân thượng"
          },
          {
            "key": "B",
            "text": "Becoming museum members",
            "vietnamese": "Trở thành thành viên bảo tàng"
          },
          {
            "key": "C",
            "text": "Purchasing souvenirs",
            "vietnamese": "Mua quà lưu niệm"
          },
          {
            "key": "D",
            "text": "Viewing a film",
            "vietnamese": "Xem phim"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là (D): \"Viewing a film\" (Xem phim)."
      },
      {
        "num": 97,
        "question": "Look at the graphic. Where will the listeners meet in one hour?",
        "vietnameseQuestion": "Nhìn vào đồ họa. Người nghe sẽ gặp nhau ở đâu trong một giờ nữa?",
        "options": [
          {
            "key": "A",
            "text": "At Door 1",
            "vietnamese": "Tại Cửa 1"
          },
          {
            "key": "B",
            "text": "At Door 2",
            "vietnamese": "Ở Cửa 2"
          },
          {
            "key": "C",
            "text": "At Door 3",
            "vietnamese": "Ở Cửa 3"
          },
          {
            "key": "D",
            "text": "At Door 4 Daily Schedule Appointment Doctor Time 9:30 A.M. Dr. Sugiyama 11:00A.M. Dr.Stewart 12:00 PM. Dr. Kim 12:30 PM. Dr. Alabi",
            "vietnamese": "Tại cửa 4 Lịch hẹn hàng ngày Giờ hẹn bác sĩ 9:30 sáng Tiến sĩ Sugiyama 11:00 sáng Tiến sĩ Stewart 12:00 trưa. Tiến sĩ Kim 12:30 trưa. Tiến sĩ Alabi"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là (D): \"At Door 4 Daily Schedule Appointment Doctor Time 9:30 A.M. Dr. Sugiyama 11:00A.M. Dr.Stewart 12:00 PM. Dr. Kim 12:30 PM. Dr. Alabi\" (Tại cửa 4 Lịch hẹn hàng ngày Giờ hẹn bác sĩ 9:30 sáng Tiến sĩ Sugiyama 11:00 sáng Tiến sĩ Stewart 12:00 trưa. Tiến sĩ Kim 12:30 trưa. Tiến sĩ Alabi)."
      }
    ],
    "vocabulary": [
      {
        "word": "tour",
        "meaning": "chuyến tham quan, dẫn đi xem",
        "partOfSpeech": "n/v"
      },
      {
        "word": "gallery",
        "meaning": "phòng trưng bày, triển lãm nghệ thuật",
        "partOfSpeech": "n"
      },
      {
        "word": "auditorium",
        "meaning": "khán phòng lớn",
        "partOfSpeech": "n"
      },
      {
        "word": "local",
        "meaning": "thuộc địa phương",
        "partOfSpeech": "n"
      }
    ],
    "graphicImage": "/images/intensive/test6_2023/q95_97.png"
  },
  {
    "id": "part4-98-100",
    "part": 4,
    "partTitle": "Part 4: Bài nói chuyện",
    "questionRange": "Câu 98 - 100",
    "title": "Part 4 - Câu 98 - 100: Nhìn vào đồ họa. Người nghe sẽ gặp nha sĩ nào",
    "audioSrc": "/audio/test6_2023.mp3",
    "startTime": 2668.91,
    "endTime": 2763.98,
    "transcript": [
      {
        "id": "p4-98-1",
        "speaker": "Speaker",
        "text": "Hello, Mr. Brown.",
        "vietnamese": "Xin chào, ông Brown."
      },
      {
        "id": "p4-98-2",
        "speaker": "Speaker",
        "text": "You were referred to brighter smiles by your regular dentist.",
        "vietnamese": "Bạn đã được nha sĩ thường xuyên giới thiệu đến những nụ cười rạng rỡ hơn."
      },
      {
        "id": "p4-98-3",
        "speaker": "Speaker",
        "text": "I see you've already checked in for your 11 a.m. appointment tomorrow.",
        "vietnamese": "Tôi thấy bạn đã đăng ký cuộc hẹn lúc 11 giờ sáng ngày mai."
      },
      {
        "id": "p4-98-4",
        "speaker": "Speaker",
        "text": "I'm calling to explain what will happen when you come in for your procedure.",
        "vietnamese": "Tôi gọi để giải thích điều gì sẽ xảy ra khi bạn đến làm thủ tục."
      },
      {
        "id": "p4-98-5",
        "speaker": "Speaker",
        "text": "We'll start by doing some x-rays of your mouth, and then we'll use the digital scan to create your crown.",
        "vietnamese": "Chúng tôi sẽ bắt đầu bằng cách chụp X-quang miệng của bạn và sau đó chúng tôi sẽ sử dụng công nghệ quét kỹ thuật số để tạo mão răng cho bạn."
      },
      {
        "id": "p4-98-6",
        "speaker": "Speaker",
        "text": "We'll put in a temporary crown, and you'll come in for your follow-up appointment in three weeks.",
        "vietnamese": "Chúng tôi sẽ gắn mão răng tạm thời và bạn sẽ đến tái khám sau ba tuần."
      },
      {
        "id": "p4-98-7",
        "speaker": "Speaker",
        "text": "By the way, our parking area is being repaved this week, so I suggest you use the free street parking on Morris and Avenue.",
        "vietnamese": "Nhân tiện, khu vực đỗ xe của chúng tôi sẽ được lát lại trong tuần này, vì vậy tôi khuyên bạn nên sử dụng bãi đậu xe miễn phí trên phố Morris và Avenue."
      }
    ],
    "questions": [
      {
        "num": 98,
        "question": "Look at the graphic. Which dentist will the listener see?",
        "vietnameseQuestion": "Nhìn vào đồ họa. Người nghe sẽ gặp nha sĩ nào?",
        "options": [
          {
            "key": "A",
            "text": "Dr. Sugiyama",
            "vietnamese": "Tiến sĩ Sugiyama"
          },
          {
            "key": "B",
            "text": "Dr. Stewart",
            "vietnamese": "Tiến sĩ Stewart"
          },
          {
            "key": "C",
            "text": "Dr. Kim",
            "vietnamese": "Tiến sĩ Kim"
          },
          {
            "key": "D",
            "text": "Dr. Alabi",
            "vietnamese": "Tiến sĩ Alabi"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"Dr. Stewart\" (Tiến sĩ Stewart)."
      },
      {
        "num": 99,
        "question": "Why is the speaker calling?",
        "vietnameseQuestion": "Tại sao người nói lại gọi?",
        "options": [
          {
            "key": "A",
            "text": "To explain aprocedure",
            "vietnamese": "Để giải thích quy trình"
          },
          {
            "key": "B",
            "text": "To reschedule an appointment",
            "vietnamese": "Để lên lịch lại một cuộc hẹn"
          },
          {
            "key": "C",
            "text": "To ask about a payment",
            "vietnamese": "Để hỏi về một khoản thanh toán"
          },
          {
            "key": "D",
            "text": "To confirm insurance information",
            "vietnamese": "Để xác nhận thông tin bảo hiểm"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là (A): \"To explain aprocedure\" (Để giải thích quy trình)."
      },
      {
        "num": 100,
        "question": "What does the speaker recommend that the listener do?",
        "vietnameseQuestion": "Người nói khuyên người nghe làm gì?",
        "options": [
          {
            "key": "A",
            "text": "Review the dentist's instructions TEST",
            "vietnamese": "Xem lại hướng dẫn của nha sĩ"
          },
          {
            "key": "B",
            "text": "Park on the street",
            "vietnamese": "Đỗ xe trên đường phố"
          },
          {
            "key": "C",
            "text": "Fill out some paperwork",
            "vietnamese": "Điền vào một số giấy tờ"
          },
          {
            "key": "D",
            "text": "Use a different credit card",
            "vietnamese": "Sử dụng thẻ tín dụng khác"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"Park on the street\" (Đỗ xe trên đường phố)."
      }
    ],
    "vocabulary": [
      {
        "word": "dentist",
        "meaning": "nha sĩ",
        "partOfSpeech": "n"
      },
      {
        "word": "already",
        "meaning": "đã... rồi",
        "partOfSpeech": "adv"
      },
      {
        "word": "appointment",
        "meaning": "cuộc hẹn, lịch hẹn",
        "partOfSpeech": "n"
      },
      {
        "word": "temporary",
        "meaning": "tạm thời",
        "partOfSpeech": "adj"
      }
    ],
    "graphicImage": "/images/intensive/test6_2023/q98_100.png"
  }
];

export function getIntensiveItemById(id: string): IntensiveListeningItem | undefined {
  return test6_2023_IntensiveData.find((item) => item.id === id);
}

export function getItemsByPart(part: 1 | 2 | 3 | 4): IntensiveListeningItem[] {
  return test6_2023_IntensiveData.filter((item) => item.part === part);
}
