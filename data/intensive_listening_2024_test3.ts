// Dữ liệu luyện nghe chi tiết (Intensive Listening) - ETS TOEIC 2024 Test 3
// Áp dụng kỹ thuật Virtual Timestamp Slicing từ audio gốc /audio/test3_2024.mp3
// Transcript, câu hỏi và giải thích chi tiết theo đề thi ETS 2024 Test 3

import type { IntensiveListeningItem } from './intensive_listening_types';

export const test3_2024_IntensiveData: IntensiveListeningItem[] = [
  {
    "id": "part1-1",
    "part": 1,
    "partTitle": "Part 1: Mô tả hình ảnh",
    "questionRange": "Câu 1",
    "title": "Part 1 - Câu 1: Người phụ nữ cầm khăn lau trong bếp",
    "audioSrc": "/audio/test3_2024.mp3",
    "startTime": 97.86,
    "endTime": 116.75,
    "imageUrl": "/images/intensive/test3_2024/q1.png",
    "image": "/images/intensive/test3_2024/q1.png",
    "transcript": [
      {
        "id": "p1-1-a",
        "speaker": "Speaker",
        "text": "(A) She's cleaning an oven.",
        "vietnamese": "(A) Cô ấy đang lau dọn lò nướng."
      },
      {
        "id": "p1-1-b",
        "speaker": "Speaker",
        "text": "(B) She's moving a pot.",
        "vietnamese": "(B) Cô ấy đang di chuyển một chiếc nồi."
      },
      {
        "id": "p1-1-c",
        "speaker": "Speaker",
        "text": "(C) She's opening a cabinet.",
        "vietnamese": "(C) Cô ấy đang mở tủ đựng đồ."
      },
      {
        "id": "p1-1-d",
        "speaker": "Speaker",
        "text": "(D) She's holding a towel.",
        "vietnamese": "(D) Cô ấy đang cầm một chiếc khăn."
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
            "text": "She's cleaning an oven.",
            "vietnamese": "Cô ấy đang lau dọn lò nướng."
          },
          {
            "key": "B",
            "text": "She's moving a pot.",
            "vietnamese": "Cô ấy đang di chuyển một chiếc nồi."
          },
          {
            "key": "C",
            "text": "She's opening a cabinet.",
            "vietnamese": "Cô ấy đang mở tủ đựng đồ."
          },
          {
            "key": "D",
            "text": "She's holding a towel.",
            "vietnamese": "Cô ấy đang cầm một chiếc khăn."
          }
        ],
        "correctAnswer": "D",
        "explanation": "Trong bức ảnh, người phụ nữ đang đứng trong bếp và cầm một chiếc khăn lau (She's holding a towel). Các hành động khác như lau lò nướng, di chuyển nồi hay mở tủ đều không diễn ra."
      }
    ],
    "vocabulary": [
      {
        "word": "towel",
        "meaning": "khăn lau, khăn tắm",
        "partOfSpeech": "n"
      },
      {
        "word": "cabinet",
        "meaning": "tủ có ngăn kéo/ngăn chứa đồ",
        "partOfSpeech": "n"
      },
      {
        "word": "oven",
        "meaning": "lò nướng",
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
    "id": "part1-2",
    "part": 1,
    "partTitle": "Part 1: Mô tả hình ảnh",
    "questionRange": "Câu 2",
    "title": "Part 1 - Câu 2: Hai người đứng trước kệ để đồ",
    "audioSrc": "/audio/test3_2024.mp3",
    "startTime": 116.75,
    "endTime": 148.62,
    "imageUrl": "/images/intensive/test3_2024/q2.png",
    "image": "/images/intensive/test3_2024/q2.png",
    "transcript": [
      {
        "id": "p1-2-a",
        "speaker": "Speaker",
        "text": "(A) They're putting trash in a bag.",
        "vietnamese": "(A) Họ đang bỏ rác vào túi."
      },
      {
        "id": "p1-2-b",
        "speaker": "Speaker",
        "text": "(B) They're taking off their jackets.",
        "vietnamese": "(B) Họ đang cởi áo khoác ngoài."
      },
      {
        "id": "p1-2-c",
        "speaker": "Speaker",
        "text": "(C) They're facing a shelving unit.",
        "vietnamese": "(C) Họ đang đứng đối diện một chiếc kệ để đồ."
      },
      {
        "id": "p1-2-d",
        "speaker": "Speaker",
        "text": "(D) They're painting a room.",
        "vietnamese": "(D) Họ đang sơn một căn phòng."
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
            "text": "They're putting trash in a bag.",
            "vietnamese": "Họ đang bỏ rác vào túi."
          },
          {
            "key": "B",
            "text": "They're taking off their jackets.",
            "vietnamese": "Họ đang cởi áo khoác ngoài."
          },
          {
            "key": "C",
            "text": "They're facing a shelving unit.",
            "vietnamese": "Họ đang đứng đối diện một chiếc kệ để đồ."
          },
          {
            "key": "D",
            "text": "They're painting a room.",
            "vietnamese": "Họ đang sơn một căn phòng."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Trong ảnh, hai người đang đứng và quay mặt nhìn về phía các tầng của chiếc kệ để đồ (They're facing a shelving unit)."
      }
    ],
    "vocabulary": [
      {
        "word": "shelving unit",
        "meaning": "kệ, giá nhiều tầng để đồ",
        "partOfSpeech": "n"
      },
      {
        "word": "face",
        "meaning": "đối diện, hướng mặt về phía",
        "partOfSpeech": "v"
      },
      {
        "word": "take off",
        "meaning": "cởi (quần áo, giày dép)",
        "partOfSpeech": "phr v"
      },
      {
        "word": "trash",
        "meaning": "rác rưởi",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part1-3",
    "part": 1,
    "partTitle": "Part 1: Mô tả hình ảnh",
    "questionRange": "Câu 3",
    "title": "Part 1 - Câu 3: Ban nhạc tụ tập thành vòng tròn biểu diễn",
    "audioSrc": "/audio/test3_2024.mp3",
    "startTime": 148.62,
    "endTime": 175.48,
    "imageUrl": "/images/intensive/test3_2024/q3.png",
    "image": "/images/intensive/test3_2024/q3.png",
    "transcript": [
      {
        "id": "p1-3-a",
        "speaker": "Speaker",
        "text": "(A) One of the men is removing his hat.",
        "vietnamese": "(A) Một trong những người đàn ông đang cởi mũ."
      },
      {
        "id": "p1-3-b",
        "speaker": "Speaker",
        "text": "(B) A line of customers extends out a door.",
        "vietnamese": "(B) Một hàng dài khách hàng kéo dài ra ngoài cửa."
      },
      {
        "id": "p1-3-c",
        "speaker": "Speaker",
        "text": "(C) Some workers are installing a sign.",
        "vietnamese": "(C) Một số công nhân đang lắp đặt một tấm biển."
      },
      {
        "id": "p1-3-d",
        "speaker": "Speaker",
        "text": "(D) Musicians have gathered in a circle.",
        "vietnamese": "(D) Các nhạc công đã tụ tập thành một vòng tròn."
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
            "text": "One of the men is removing his hat.",
            "vietnamese": "Một trong những người đàn ông đang cởi mũ."
          },
          {
            "key": "B",
            "text": "A line of customers extends out a door.",
            "vietnamese": "Một hàng dài khách hàng kéo dài ra ngoài cửa."
          },
          {
            "key": "C",
            "text": "Some workers are installing a sign.",
            "vietnamese": "Một số công nhân đang lắp đặt một tấm biển."
          },
          {
            "key": "D",
            "text": "Musicians have gathered in a circle.",
            "vietnamese": "Các nhạc công đã tụ tập thành một vòng tròn."
          }
        ],
        "correctAnswer": "D",
        "explanation": "Trong ảnh, các nhạc công đang ngồi quây quần lại với nhau thành một vòng tròn chơi nhạc cụ (Musicians have gathered in a circle)."
      }
    ],
    "vocabulary": [
      {
        "word": "musician",
        "meaning": "nhạc công, nhạc sĩ",
        "partOfSpeech": "n"
      },
      {
        "word": "gather",
        "meaning": "tập hợp, tụ tập",
        "partOfSpeech": "v"
      },
      {
        "word": "in a circle",
        "meaning": "thành một vòng tròn",
        "partOfSpeech": "prep phr"
      },
      {
        "word": "remove",
        "meaning": "cởi, tháo gỡ",
        "partOfSpeech": "v"
      }
    ]
  },
  {
    "id": "part1-4",
    "part": 1,
    "partTitle": "Part 1: Mô tả hình ảnh",
    "questionRange": "Câu 4",
    "title": "Part 1 - Câu 4: Các bộ dụng cụ được bày trên bàn",
    "audioSrc": "/audio/test3_2024.mp3",
    "startTime": 175.48,
    "endTime": 200.18,
    "imageUrl": "/images/intensive/test3_2024/q4.png",
    "image": "/images/intensive/test3_2024/q4.png",
    "transcript": [
      {
        "id": "p1-4-a",
        "speaker": "Speaker",
        "text": "(A) Some tools have been left on a chair.",
        "vietnamese": "(A) Một số dụng cụ đã bị để trên ghế."
      },
      {
        "id": "p1-4-b",
        "speaker": "Speaker",
        "text": "(B) Some tool sets have been laid out.",
        "vietnamese": "(B) Một số bộ dụng cụ đã được sắp xếp bày ra."
      },
      {
        "id": "p1-4-c",
        "speaker": "Speaker",
        "text": "(C) A cup of coffee has spilled.",
        "vietnamese": "(C) Một tách cà phê đã bị tràn đổ ra ngoài."
      },
      {
        "id": "p1-4-d",
        "speaker": "Speaker",
        "text": "(D) A table leg is being repaired.",
        "vietnamese": "(D) Một chiếc chân bàn đang được sửa chữa."
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
            "text": "Some tools have been left on a chair.",
            "vietnamese": "Một số dụng cụ đã bị để trên ghế."
          },
          {
            "key": "B",
            "text": "Some tool sets have been laid out.",
            "vietnamese": "Một số bộ dụng cụ đã được sắp xếp bày ra."
          },
          {
            "key": "C",
            "text": "A cup of coffee has spilled.",
            "vietnamese": "Một tách cà phê đã bị tràn đổ ra ngoài."
          },
          {
            "key": "D",
            "text": "A table leg is being repaired.",
            "vietnamese": "Một chiếc chân bàn đang được sửa chữa."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Trên mặt bàn có các hộp/bộ dụng cụ được sắp xếp mở nắp bày ra ngay ngắn (Some tool sets have been laid out)."
      }
    ],
    "vocabulary": [
      {
        "word": "tool set",
        "meaning": "bộ dụng cụ, đồ nghề",
        "partOfSpeech": "n"
      },
      {
        "word": "lay out",
        "meaning": "bày ra, sắp đặt",
        "partOfSpeech": "phr v"
      },
      {
        "word": "spill",
        "meaning": "làm đổ, tràn ra",
        "partOfSpeech": "v"
      },
      {
        "word": "repair",
        "meaning": "sửa chữa",
        "partOfSpeech": "v"
      }
    ]
  },
  {
    "id": "part1-5",
    "part": 1,
    "partTitle": "Part 1: Mô tả hình ảnh",
    "questionRange": "Câu 5",
    "title": "Part 1 - Câu 5: Công nhân đang thi công mái nhà",
    "audioSrc": "/audio/test3_2024.mp3",
    "startTime": 200.18,
    "endTime": 227.34,
    "imageUrl": "/images/intensive/test3_2024/q5.png",
    "image": "/images/intensive/test3_2024/q5.png",
    "transcript": [
      {
        "id": "p1-5-a",
        "speaker": "Speaker",
        "text": "(A) A railing is being removed.",
        "vietnamese": "(A) Một thanh lan can đang được tháo dỡ."
      },
      {
        "id": "p1-5-b",
        "speaker": "Speaker",
        "text": "(B) A roof is under construction.",
        "vietnamese": "(B) Một mái nhà đang trong quá trình xây dựng."
      },
      {
        "id": "p1-5-c",
        "speaker": "Speaker",
        "text": "(C) Some workers are carrying a ladder.",
        "vietnamese": "(C) Một số công nhân đang khiêng một chiếc thang."
      },
      {
        "id": "p1-5-d",
        "speaker": "Speaker",
        "text": "(D) Some workers are holding sheets of metal.",
        "vietnamese": "(D) Một số công nhân đang cầm các tấm kim loại."
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
            "text": "A railing is being removed.",
            "vietnamese": "Một thanh lan can đang được tháo dỡ."
          },
          {
            "key": "B",
            "text": "A roof is under construction.",
            "vietnamese": "Một mái nhà đang trong quá trình xây dựng."
          },
          {
            "key": "C",
            "text": "Some workers are carrying a ladder.",
            "vietnamese": "Một số công nhân đang khiêng một chiếc thang."
          },
          {
            "key": "D",
            "text": "Some workers are holding sheets of metal.",
            "vietnamese": "Một số công nhân đang cầm các tấm kim loại."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Trong bức ảnh, các công nhân đang làm việc trên phần khung của mái nhà đang được xây cất (A roof is under construction)."
      }
    ],
    "vocabulary": [
      {
        "word": "roof",
        "meaning": "mái nhà",
        "partOfSpeech": "n"
      },
      {
        "word": "under construction",
        "meaning": "đang trong quá trình xây dựng",
        "partOfSpeech": "prep phr"
      },
      {
        "word": "railing",
        "meaning": "lan can, rào chắn",
        "partOfSpeech": "n"
      },
      {
        "word": "sheet of metal",
        "meaning": "tấm kim loại/tôn",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part1-6",
    "part": 1,
    "partTitle": "Part 1: Mô tả hình ảnh",
    "questionRange": "Câu 6",
    "title": "Part 1 - Câu 6: Ngôi nhà kết cấu gỗ dựng gần hàng cây",
    "audioSrc": "/audio/test3_2024.mp3",
    "startTime": 227.34,
    "endTime": 262.49,
    "imageUrl": "/images/intensive/test3_2024/q6.png",
    "image": "/images/intensive/test3_2024/q6.png",
    "transcript": [
      {
        "id": "p1-6-a",
        "speaker": "Speaker",
        "text": "(A) A ladder has been leaned against a tree.",
        "vietnamese": "(A) Một chiếc thang đã được dựng dựa vào thân cây."
      },
      {
        "id": "p1-6-b",
        "speaker": "Speaker",
        "text": "(B) There are piles of tree branches discarded in a field.",
        "vietnamese": "(B) Có những đống cành cây bị vứt bỏ trên cánh đồng."
      },
      {
        "id": "p1-6-c",
        "speaker": "Speaker",
        "text": "(C) Wooden benches have been arranged in a circle.",
        "vietnamese": "(C) Những chiếc ghế dài bằng gỗ đã được xếp thành hình tròn."
      },
      {
        "id": "p1-6-d",
        "speaker": "Speaker",
        "text": "(D) A wooden structure has been built near some trees.",
        "vietnamese": "(D) Một công trình bằng gỗ đã được xây dựng gần các tán cây."
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
            "text": "A ladder has been leaned against a tree.",
            "vietnamese": "Một chiếc thang đã được dựng dựa vào thân cây."
          },
          {
            "key": "B",
            "text": "There are piles of tree branches discarded in a field.",
            "vietnamese": "Có những đống cành cây bị vứt bỏ trên cánh đồng."
          },
          {
            "key": "C",
            "text": "Wooden benches have been arranged in a circle.",
            "vietnamese": "Những chiếc ghế dài bằng gỗ đã được xếp thành hình tròn."
          },
          {
            "key": "D",
            "text": "A wooden structure has been built near some trees.",
            "vietnamese": "Một công trình bằng gỗ đã được xây dựng gần các tán cây."
          }
        ],
        "correctAnswer": "D",
        "explanation": "Trong bức ảnh phong cảnh, một ngôi nhà/kết cấu bằng gỗ nằm cạnh các tán cây xanh (A wooden structure has been built near some trees)."
      }
    ],
    "vocabulary": [
      {
        "word": "wooden structure",
        "meaning": "công trình/kết cấu bằng gỗ",
        "partOfSpeech": "n"
      },
      {
        "word": "lean against",
        "meaning": "dựa vào, tựa vào",
        "partOfSpeech": "phr v"
      },
      {
        "word": "discard",
        "meaning": "vứt bỏ, loại bỏ",
        "partOfSpeech": "v"
      },
      {
        "word": "tree branch",
        "meaning": "cành cây",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-7",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 7",
    "title": "Part 2 - Câu 7: Bột mì trên kệ hàng",
    "audioSrc": "/audio/test3_2024.mp3",
    "startTime": 294.29,
    "endTime": 310.12,
    "transcript": [
      {
        "id": "p2-7-q",
        "speaker": "Speaker 1",
        "text": "Why is there no flour on the shelf?",
        "vietnamese": "Tại sao không có bột mì trên kệ?"
      },
      {
        "id": "p2-7-a",
        "speaker": "Speaker 2",
        "text": "(A) Because it's out of stock.",
        "vietnamese": "(A) Bởi vì nó đã hết hàng."
      },
      {
        "id": "p2-7-b",
        "speaker": "Speaker 2",
        "text": "(B) Those roses smell nice.",
        "vietnamese": "(B) Những bông hoa hồng đó có mùi thơm."
      },
      {
        "id": "p2-7-c",
        "speaker": "Speaker 2",
        "text": "(C) No, the other cake.",
        "vietnamese": "(C) Không, chiếc bánh kia cơ."
      }
    ],
    "questions": [
      {
        "num": 7,
        "question": "Why is there no flour on the shelf?",
        "vietnameseQuestion": "Tại sao không có bột mì trên kệ?",
        "options": [
          {
            "key": "A",
            "text": "Because it's out of stock.",
            "vietnamese": "Bởi vì nó đã hết hàng."
          },
          {
            "key": "B",
            "text": "Those roses smell nice.",
            "vietnamese": "Những bông hoa hồng đó có mùi thơm."
          },
          {
            "key": "C",
            "text": "No, the other cake.",
            "vietnamese": "Không, chiếc bánh kia cơ."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Câu hỏi 'Why is there no flour on the shelf?' hỏi nguyên nhân không có bột mì trên kệ. Phương án (A) 'Because it's out of stock' giải thích trực tiếp do sản phẩm đã hết hàng."
      }
    ],
    "vocabulary": [
      {
        "word": "flour",
        "meaning": "bột mì",
        "partOfSpeech": "n"
      },
      {
        "word": "out of stock",
        "meaning": "hết hàng trong kho",
        "partOfSpeech": "adj phr"
      },
      {
        "word": "shelf",
        "meaning": "kệ, giá để đồ",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-8",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 8",
    "title": "Part 2 - Câu 8: Thời gian công ty dịch vụ tiệc đến",
    "audioSrc": "/audio/test3_2024.mp3",
    "startTime": 310.12,
    "endTime": 334.05,
    "transcript": [
      {
        "id": "p2-8-q",
        "speaker": "Speaker 1",
        "text": "When will the catering company arrive?",
        "vietnamese": "Khi nào công ty cung cấp tiệc sẽ đến?"
      },
      {
        "id": "p2-8-a",
        "speaker": "Speaker 2",
        "text": "(A) At 4 o'clock.",
        "vietnamese": "(A) Lúc 4 giờ."
      },
      {
        "id": "p2-8-b",
        "speaker": "Speaker 2",
        "text": "(B) That's a delicious flavor.",
        "vietnamese": "(B) Đó là một hương vị thơm ngon."
      },
      {
        "id": "p2-8-c",
        "speaker": "Speaker 2",
        "text": "(C) Many vegetarian options.",
        "vietnamese": "(C) Nhiều lựa chọn đồ ăn chay."
      }
    ],
    "questions": [
      {
        "num": 8,
        "question": "When will the catering company arrive?",
        "vietnameseQuestion": "Khi nào công ty cung cấp tiệc sẽ đến?",
        "options": [
          {
            "key": "A",
            "text": "At 4 o'clock.",
            "vietnamese": "Lúc 4 giờ."
          },
          {
            "key": "B",
            "text": "That's a delicious flavor.",
            "vietnamese": "Đó là một hương vị thơm ngon."
          },
          {
            "key": "C",
            "text": "Many vegetarian options.",
            "vietnamese": "Nhiều lựa chọn đồ ăn chay."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Câu hỏi 'When...' hỏi thời gian, phương án (A) 'At 4 o'clock' đưa ra mốc giờ cụ thể và chính xác."
      }
    ],
    "vocabulary": [
      {
        "word": "catering company",
        "meaning": "công ty cung cấp dịch vụ tiệc/ăn uống",
        "partOfSpeech": "n phr"
      },
      {
        "word": "arrive",
        "meaning": "đến nơi",
        "partOfSpeech": "v"
      },
      {
        "word": "vegetarian",
        "meaning": "chay, ăn chay",
        "partOfSpeech": "adj"
      }
    ]
  },
  {
    "id": "part2-9",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 9",
    "title": "Part 2 - Câu 9: Thời gian bắt đầu cuộc họp",
    "audioSrc": "/audio/test3_2024.mp3",
    "startTime": 334.05,
    "endTime": 348.4,
    "transcript": [
      {
        "id": "p2-9-q",
        "speaker": "Speaker 1",
        "text": "When's the meeting scheduled to start?",
        "vietnamese": "Cuộc họp được lên lịch bắt đầu khi nào?"
      },
      {
        "id": "p2-9-a",
        "speaker": "Speaker 2",
        "text": "(A) At a networking event.",
        "vietnamese": "(A) Tại một sự kiện kết nối."
      },
      {
        "id": "p2-9-b",
        "speaker": "Speaker 2",
        "text": "(B) I started this job six years ago.",
        "vietnamese": "(B) Tôi bắt đầu công việc này 6 năm trước."
      },
      {
        "id": "p2-9-c",
        "speaker": "Speaker 2",
        "text": "(C) Right after lunch.",
        "vietnamese": "(C) Ngay sau bữa trưa."
      }
    ],
    "questions": [
      {
        "num": 9,
        "question": "When's the meeting scheduled to start?",
        "vietnameseQuestion": "Cuộc họp được lên lịch bắt đầu khi nào?",
        "options": [
          {
            "key": "A",
            "text": "At a networking event.",
            "vietnamese": "Tại một sự kiện kết nối."
          },
          {
            "key": "B",
            "text": "I started this job six years ago.",
            "vietnamese": "Tôi bắt đầu công việc này 6 năm trước."
          },
          {
            "key": "C",
            "text": "Right after lunch.",
            "vietnamese": "Ngay sau bữa trưa."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Câu hỏi 'When's the meeting scheduled to start?' hỏi thời điểm bắt đầu cuộc họp. Phương án (C) 'Right after lunch' đưa ra mốc thời gian phù hợp."
      }
    ],
    "vocabulary": [
      {
        "word": "scheduled",
        "meaning": "được lên lịch trình",
        "partOfSpeech": "adj"
      },
      {
        "word": "networking event",
        "meaning": "sự kiện giao lưu kết nối",
        "partOfSpeech": "n phr"
      },
      {
        "word": "right after",
        "meaning": "ngay sau khi",
        "partOfSpeech": "adv phr"
      }
    ]
  },
  {
    "id": "part2-10",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 10",
    "title": "Part 2 - Câu 10: Chi phí sửa chữa",
    "audioSrc": "/audio/test3_2024.mp3",
    "startTime": 348.4,
    "endTime": 367.07,
    "transcript": [
      {
        "id": "p2-10-q",
        "speaker": "Speaker 1",
        "text": "How much will the repairs cost?",
        "vietnamese": "Chi phí sửa chữa sẽ hết bao nhiêu?"
      },
      {
        "id": "p2-10-a",
        "speaker": "Speaker 2",
        "text": "(A) I have two pairs of shoes.",
        "vietnamese": "(A) Tôi có hai đôi giày."
      },
      {
        "id": "p2-10-b",
        "speaker": "Speaker 2",
        "text": "(B) Around $200.",
        "vietnamese": "(B) Khoảng 200 đô la."
      },
      {
        "id": "p2-10-c",
        "speaker": "Speaker 2",
        "text": "(C) The restaurant downtown.",
        "vietnamese": "(C) Nhà hàng ở khu trung tâm thành phố."
      }
    ],
    "questions": [
      {
        "num": 10,
        "question": "How much will the repairs cost?",
        "vietnameseQuestion": "Chi phí sửa chữa sẽ hết bao nhiêu?",
        "options": [
          {
            "key": "A",
            "text": "I have two pairs of shoes.",
            "vietnamese": "Tôi có hai đôi giày."
          },
          {
            "key": "B",
            "text": "Around $200.",
            "vietnamese": "Khoảng 200 đô la."
          },
          {
            "key": "C",
            "text": "The restaurant downtown.",
            "vietnamese": "Nhà hàng ở khu trung tâm thành phố."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Câu hỏi 'How much...' hỏi số tiền/chi phí. Phương án (B) 'Around $200' trả lời đúng về mặt số tiền cần thanh toán."
      }
    ],
    "vocabulary": [
      {
        "word": "repair",
        "meaning": "việc sửa chữa",
        "partOfSpeech": "n"
      },
      {
        "word": "cost",
        "meaning": "trị giá, tốn chi phí",
        "partOfSpeech": "v"
      },
      {
        "word": "downtown",
        "meaning": "khu trung tâm thương mại thành phố",
        "partOfSpeech": "n/adv"
      }
    ]
  },
  {
    "id": "part2-11",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 11",
    "title": "Part 2 - Câu 11: Khám nha sĩ sáng nay",
    "audioSrc": "/audio/test3_2024.mp3",
    "startTime": 367.07,
    "endTime": 386.94,
    "transcript": [
      {
        "id": "p2-11-q",
        "speaker": "Speaker 1",
        "text": "You went to the dentist this morning, didn't you?",
        "vietnamese": "Sáng nay bạn đi khám nha sĩ đúng không?"
      },
      {
        "id": "p2-11-a",
        "speaker": "Speaker 2",
        "text": "(A) Oh, I've already had breakfast.",
        "vietnamese": "(A) Ồ, tôi đã ăn sáng rồi."
      },
      {
        "id": "p2-11-b",
        "speaker": "Speaker 2",
        "text": "(B) Yes, for an annual checkup.",
        "vietnamese": "(B) Vâng, để kiểm tra định kỳ hàng năm."
      },
      {
        "id": "p2-11-c",
        "speaker": "Speaker 2",
        "text": "(C) Let's take the bus.",
        "vietnamese": "(C) Chúng ta hãy đi xe buýt đi."
      }
    ],
    "questions": [
      {
        "num": 11,
        "question": "You went to the dentist this morning, didn't you?",
        "vietnameseQuestion": "Sáng nay bạn đi khám nha sĩ đúng không?",
        "options": [
          {
            "key": "A",
            "text": "Oh, I've already had breakfast.",
            "vietnamese": "Ồ, tôi đã ăn sáng rồi."
          },
          {
            "key": "B",
            "text": "Yes, for an annual checkup.",
            "vietnamese": "Vâng, để kiểm tra định kỳ hàng năm."
          },
          {
            "key": "C",
            "text": "Let's take the bus.",
            "vietnamese": "Chúng ta hãy đi xe buýt đi."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Câu hỏi đuôi xác nhận việc đi khám nha sĩ. Phương án (B) 'Yes, for an annual checkup' xác nhận đúng và nêu mục đích khám định kỳ."
      }
    ],
    "vocabulary": [
      {
        "word": "dentist",
        "meaning": "nha sĩ",
        "partOfSpeech": "n"
      },
      {
        "word": "annual checkup",
        "meaning": "cuộc kiểm tra sức khỏe định kỳ hàng năm",
        "partOfSpeech": "n phr"
      }
    ]
  },
  {
    "id": "part2-12",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 12",
    "title": "Part 2 - Câu 12: Vị trí đặt máy in mới",
    "audioSrc": "/audio/test3_2024.mp3",
    "startTime": 386.94,
    "endTime": 407.42,
    "transcript": [
      {
        "id": "p2-12-q",
        "speaker": "Speaker 1",
        "text": "Where should we put the new printer?",
        "vietnamese": "Chúng ta nên đặt chiếc máy in mới ở đâu?"
      },
      {
        "id": "p2-12-a",
        "speaker": "Speaker 2",
        "text": "(A) In the corner by the stairs.",
        "vietnamese": "(A) Ở góc gần cầu thang."
      },
      {
        "id": "p2-12-b",
        "speaker": "Speaker 2",
        "text": "(B) The third page of the document.",
        "vietnamese": "(B) Trang thứ ba của tài liệu."
      },
      {
        "id": "p2-12-c",
        "speaker": "Speaker 2",
        "text": "(C) A reusable ink cartridge.",
        "vietnamese": "(C) Hộp mực có thể tái sử dụng."
      }
    ],
    "questions": [
      {
        "num": 12,
        "question": "Where should we put the new printer?",
        "vietnameseQuestion": "Chúng ta nên đặt chiếc máy in mới ở đâu?",
        "options": [
          {
            "key": "A",
            "text": "In the corner by the stairs.",
            "vietnamese": "Ở góc gần cầu thang."
          },
          {
            "key": "B",
            "text": "The third page of the document.",
            "vietnamese": "Trang thứ ba của tài liệu."
          },
          {
            "key": "C",
            "text": "A reusable ink cartridge.",
            "vietnamese": "Hộp mực có thể tái sử dụng."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Câu hỏi 'Where...' hỏi nơi chốn. Phương án (A) 'In the corner by the stairs' chỉ rõ vị trí đặt máy in."
      }
    ],
    "vocabulary": [
      {
        "word": "in the corner",
        "meaning": "ở trong góc",
        "partOfSpeech": "prep phr"
      },
      {
        "word": "stairs",
        "meaning": "cầu thang bộ",
        "partOfSpeech": "n"
      },
      {
        "word": "ink cartridge",
        "meaning": "hộp mực máy in",
        "partOfSpeech": "n phr"
      }
    ]
  },
  {
    "id": "part2-13",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 13",
    "title": "Part 2 - Câu 13: Loại cây trồng trong văn phòng",
    "audioSrc": "/audio/test3_2024.mp3",
    "startTime": 407.42,
    "endTime": 428.18,
    "transcript": [
      {
        "id": "p2-13-q",
        "speaker": "Speaker 1",
        "text": "What type of plant do you have in your office?",
        "vietnamese": "Bạn trồng loại cây gì trong văn phòng vậy?"
      },
      {
        "id": "p2-13-a",
        "speaker": "Speaker 2",
        "text": "(A) Whenever I sit at my desk.",
        "vietnamese": "(A) Bất cứ khi nào tôi ngồi tại bàn làm việc."
      },
      {
        "id": "p2-13-b",
        "speaker": "Speaker 2",
        "text": "(B) Thanks, I just bought it.",
        "vietnamese": "(B) Cảm ơn, tôi vừa mới mua nó."
      },
      {
        "id": "p2-13-c",
        "speaker": "Speaker 2",
        "text": "(C) One that doesn't require much water.",
        "vietnamese": "(C) Một loại cây không đòi hỏi nhiều nước."
      }
    ],
    "questions": [
      {
        "num": 13,
        "question": "What type of plant do you have in your office?",
        "vietnameseQuestion": "Bạn trồng loại cây gì trong văn phòng vậy?",
        "options": [
          {
            "key": "A",
            "text": "Whenever I sit at my desk.",
            "vietnamese": "Bất cứ khi nào tôi ngồi tại bàn làm việc."
          },
          {
            "key": "B",
            "text": "Thanks, I just bought it.",
            "vietnamese": "Cảm ơn, tôi vừa mới mua nó."
          },
          {
            "key": "C",
            "text": "One that doesn't require much water.",
            "vietnamese": "Một loại cây không đòi hỏi nhiều nước."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Câu hỏi 'What type of plant...' hỏi về loại cây cảnh. Phương án (C) 'One that doesn't require much water' miêu tả đặc điểm loại cây phù hợp trồng trong nhà."
      }
    ],
    "vocabulary": [
      {
        "word": "require",
        "meaning": "đòi hỏi, yêu cầu",
        "partOfSpeech": "v"
      },
      {
        "word": "plant",
        "meaning": "cây cối, thực vật",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-14",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 14",
    "title": "Part 2 - Câu 14: Giảm giá ở cửa hàng nội thất",
    "audioSrc": "/audio/test3_2024.mp3",
    "startTime": 428.18,
    "endTime": 447.08,
    "transcript": [
      {
        "id": "p2-14-q",
        "speaker": "Speaker 1",
        "text": "There was a sale at the furniture store.",
        "vietnamese": "Có một đợt giảm giá tại cửa hàng nội thất."
      },
      {
        "id": "p2-14-a",
        "speaker": "Speaker 2",
        "text": "(A) No, it wasn't in storage.",
        "vietnamese": "(A) Không, nó không nằm trong kho."
      },
      {
        "id": "p2-14-b",
        "speaker": "Speaker 2",
        "text": "(B) Did you buy anything?",
        "vietnamese": "(B) Bạn có mua được món gì không?"
      },
      {
        "id": "p2-14-c",
        "speaker": "Speaker 2",
        "text": "(C) Some old receipts.",
        "vietnamese": "(C) Một vài hóa đơn cũ."
      }
    ],
    "questions": [
      {
        "num": 14,
        "question": "There was a sale at the furniture store.",
        "vietnameseQuestion": "Có một đợt giảm giá tại cửa hàng nội thất.",
        "options": [
          {
            "key": "A",
            "text": "No, it wasn't in storage.",
            "vietnamese": "Không, nó không nằm trong kho."
          },
          {
            "key": "B",
            "text": "Did you buy anything?",
            "vietnamese": "Bạn có mua được món gì không?"
          },
          {
            "key": "C",
            "text": "Some old receipts.",
            "vietnamese": "Một vài hóa đơn cũ."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Một câu trần thuật thông báo về đợt giảm giá. Người nghe phản hồi tự nhiên bằng câu hỏi quan tâm 'Did you buy anything?'."
      }
    ],
    "vocabulary": [
      {
        "word": "furniture store",
        "meaning": "cửa hàng đồ gỗ nội thất",
        "partOfSpeech": "n phr"
      },
      {
        "word": "in storage",
        "meaning": "trong kho lưu trữ",
        "partOfSpeech": "prep phr"
      }
    ]
  },
  {
    "id": "part2-15",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 15",
    "title": "Part 2 - Câu 15: Gửi yêu cầu trợ giúp kỹ thuật",
    "audioSrc": "/audio/test3_2024.mp3",
    "startTime": 447.08,
    "endTime": 467.72,
    "transcript": [
      {
        "id": "p2-15-q",
        "speaker": "Speaker 1",
        "text": "Can you show me how to submit a tech help ticket?",
        "vietnamese": "Bạn có thể chỉ cho tôi cách gửi phiếu yêu cầu hỗ trợ kỹ thuật không?"
      },
      {
        "id": "p2-15-a",
        "speaker": "Speaker 2",
        "text": "(A) Let me send you the link.",
        "vietnamese": "(A) Để tôi gửi đường link cho bạn."
      },
      {
        "id": "p2-15-b",
        "speaker": "Speaker 2",
        "text": "(B) A broken power cable.",
        "vietnamese": "(B) Một sợi cáp nguồn bị hỏng."
      },
      {
        "id": "p2-15-c",
        "speaker": "Speaker 2",
        "text": "(C) No, over 10 minutes.",
        "vietnamese": "(C) Không, hơn 10 phút."
      }
    ],
    "questions": [
      {
        "num": 15,
        "question": "Can you show me how to submit a tech help ticket?",
        "vietnameseQuestion": "Bạn có thể chỉ cho tôi cách gửi phiếu yêu cầu hỗ trợ kỹ thuật không?",
        "options": [
          {
            "key": "A",
            "text": "Let me send you the link.",
            "vietnamese": "Để tôi gửi đường link cho bạn."
          },
          {
            "key": "B",
            "text": "A broken power cable.",
            "vietnamese": "Một sợi cáp nguồn bị hỏng."
          },
          {
            "key": "C",
            "text": "No, over 10 minutes.",
            "vietnamese": "Không, hơn 10 phút."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Lời nhờ vả hướng dẫn gửi yêu cầu hỗ trợ kỹ thuật. Phương án (A) 'Let me send you the link' hỗ trợ người hỏi bằng cách gửi link trực tiếp."
      }
    ],
    "vocabulary": [
      {
        "word": "submit",
        "meaning": "nộp, gửi đi",
        "partOfSpeech": "v"
      },
      {
        "word": "tech help ticket",
        "meaning": "phiếu yêu cầu hỗ trợ kỹ thuật IT",
        "partOfSpeech": "n phr"
      }
    ]
  },
  {
    "id": "part2-16",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 16",
    "title": "Part 2 - Câu 16: Nút nguồn trên thiết bị",
    "audioSrc": "/audio/test3_2024.mp3",
    "startTime": 467.72,
    "endTime": 488.62,
    "transcript": [
      {
        "id": "p2-16-q",
        "speaker": "Speaker 1",
        "text": "Where is the power button on this device?",
        "vietnamese": "Nút nguồn trên thiết bị này ở đâu?"
      },
      {
        "id": "p2-16-a",
        "speaker": "Speaker 2",
        "text": "(A) I've never used that model before.",
        "vietnamese": "(A) Tôi chưa từng sử dụng mẫu máy đó bao giờ."
      },
      {
        "id": "p2-16-b",
        "speaker": "Speaker 2",
        "text": "(B) Ten euros per hour.",
        "vietnamese": "(B) Mười euro mỗi giờ."
      },
      {
        "id": "p2-16-c",
        "speaker": "Speaker 2",
        "text": "(C) We charge more for color photographs.",
        "vietnamese": "(C) Chúng tôi tính phí cao hơn đối với ảnh màu."
      }
    ],
    "questions": [
      {
        "num": 16,
        "question": "Where is the power button on this device?",
        "vietnameseQuestion": "Nút nguồn trên thiết bị này ở đâu?",
        "options": [
          {
            "key": "A",
            "text": "I've never used that model before.",
            "vietnamese": "Tôi chưa từng sử dụng mẫu máy đó bao giờ."
          },
          {
            "key": "B",
            "text": "Ten euros per hour.",
            "vietnamese": "Mười euro mỗi giờ."
          },
          {
            "key": "C",
            "text": "We charge more for color photographs.",
            "vietnamese": "Chúng tôi tính phí cao hơn đối với ảnh màu."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Hỏi vị trí nút nguồn thiết bị. Phương án (A) trả lời gián tiếp rằng mình không biết vì chưa từng sử dụng mẫu máy này bao giờ."
      }
    ],
    "vocabulary": [
      {
        "word": "power button",
        "meaning": "nút nguồn khởi động máy",
        "partOfSpeech": "n phr"
      },
      {
        "word": "device",
        "meaning": "thiết bị điện tử",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-17",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 17",
    "title": "Part 2 - Câu 17: Đi dạo bây giờ hay để sau",
    "audioSrc": "/audio/test3_2024.mp3",
    "startTime": 488.62,
    "endTime": 509.38,
    "transcript": [
      {
        "id": "p2-17-q",
        "speaker": "Speaker 1",
        "text": "Do you want to take a walk now or would later be better?",
        "vietnamese": "Bạn muốn đi dạo bây giờ hay để lát nữa thì tốt hơn?"
      },
      {
        "id": "p2-17-a",
        "speaker": "Speaker 2",
        "text": "(A) A nearby lake.",
        "vietnamese": "(A) Một cái hồ gần đây."
      },
      {
        "id": "p2-17-b",
        "speaker": "Speaker 2",
        "text": "(B) I'm free to walk now.",
        "vietnamese": "(B) Bây giờ tôi rảnh để đi dạo rồi."
      },
      {
        "id": "p2-17-c",
        "speaker": "Speaker 2",
        "text": "(C) No, I don't use a fitness tracker.",
        "vietnamese": "(C) Không, tôi không dùng thiết bị theo dõi sức khỏe."
      }
    ],
    "questions": [
      {
        "num": 17,
        "question": "Do you want to take a walk now or would later be better?",
        "vietnameseQuestion": "Bạn muốn đi dạo bây giờ hay để lát nữa thì tốt hơn?",
        "options": [
          {
            "key": "A",
            "text": "A nearby lake.",
            "vietnamese": "Một cái hồ gần đây."
          },
          {
            "key": "B",
            "text": "I'm free to walk now.",
            "vietnamese": "Bây giờ tôi rảnh để đi dạo rồi."
          },
          {
            "key": "C",
            "text": "No, I don't use a fitness tracker.",
            "vietnamese": "Không, tôi không dùng thiết bị theo dõi sức khỏe."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Câu hỏi lựa chọn 'now or later'. Phương án (B) 'I'm free to walk now' lựa chọn đi ngay bây giờ vì đang rảnh rỗi."
      }
    ],
    "vocabulary": [
      {
        "word": "take a walk",
        "meaning": "đi dạo bộ",
        "partOfSpeech": "phr"
      },
      {
        "word": "free",
        "meaning": "rảnh rỗi, không bận",
        "partOfSpeech": "adj"
      }
    ]
  },
  {
    "id": "part2-18",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 18",
    "title": "Part 2 - Câu 18: Đặt thiết bị mới cho nhà máy",
    "audioSrc": "/audio/test3_2024.mp3",
    "startTime": 509.38,
    "endTime": 530.18,
    "transcript": [
      {
        "id": "p2-18-q",
        "speaker": "Speaker 1",
        "text": "I ordered some new equipment for the factory.",
        "vietnamese": "Tôi đã đặt mua một số thiết bị mới cho nhà máy."
      },
      {
        "id": "p2-18-a",
        "speaker": "Speaker 2",
        "text": "(A) The news program on channel 10.",
        "vietnamese": "(A) Chương trình tin tức trên kênh 10."
      },
      {
        "id": "p2-18-b",
        "speaker": "Speaker 2",
        "text": "(B) Great. I can't wait to use it.",
        "vietnamese": "(B) Tuyệt vời. Tôi nóng lòng muốn sử dụng nó."
      },
      {
        "id": "p2-18-c",
        "speaker": "Speaker 2",
        "text": "(C) The car dealership.",
        "vietnamese": "(C) Đại lý bán xe ô tô."
      }
    ],
    "questions": [
      {
        "num": 18,
        "question": "I ordered some new equipment for the factory.",
        "vietnameseQuestion": "Tôi đã đặt mua một số thiết bị mới cho nhà máy.",
        "options": [
          {
            "key": "A",
            "text": "The news program on channel 10.",
            "vietnamese": "Chương trình tin tức trên kênh 10."
          },
          {
            "key": "B",
            "text": "Great. I can't wait to use it.",
            "vietnamese": "Tuyệt vời. Tôi nóng lòng muốn sử dụng nó."
          },
          {
            "key": "C",
            "text": "The car dealership.",
            "vietnamese": "Đại lý bán xe ô tô."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Thông báo vừa đặt thiết bị mới cho nhà máy. Người nghe bày tỏ sự hào hứng với câu trả lời (B) 'Great. I can't wait to use it'."
      }
    ],
    "vocabulary": [
      {
        "word": "equipment",
        "meaning": "trang thiết bị máy móc",
        "partOfSpeech": "n"
      },
      {
        "word": "can't wait to",
        "meaning": "nóng lòng, háo hức làm gì",
        "partOfSpeech": "phr"
      }
    ]
  },
  {
    "id": "part2-19",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 19",
    "title": "Part 2 - Câu 19: Địa điểm cho thuê trên đường Mercer",
    "audioSrc": "/audio/test3_2024.mp3",
    "startTime": 530.18,
    "endTime": 551.05,
    "transcript": [
      {
        "id": "p2-19-q",
        "speaker": "Speaker 1",
        "text": "There's a nice place to rent on Mercer Street.",
        "vietnamese": "Có một căn nhà cho thuê rất đẹp trên đường Mercer."
      },
      {
        "id": "p2-19-a",
        "speaker": "Speaker 2",
        "text": "(A) I just renewed my current lease.",
        "vietnamese": "(A) Tôi vừa gia hạn hợp đồng thuê hiện tại mất rồi."
      },
      {
        "id": "p2-19-b",
        "speaker": "Speaker 2",
        "text": "(B) It was a great show.",
        "vietnamese": "(B) Đó là một buổi biểu diễn tuyệt vời."
      },
      {
        "id": "p2-19-c",
        "speaker": "Speaker 2",
        "text": "(C) A standard rental application.",
        "vietnamese": "(C) Một đơn đăng ký thuê tiêu chuẩn."
      }
    ],
    "questions": [
      {
        "num": 19,
        "question": "There's a nice place to rent on Mercer Street.",
        "vietnameseQuestion": "Có một căn nhà cho thuê rất đẹp trên đường Mercer.",
        "options": [
          {
            "key": "A",
            "text": "I just renewed my current lease.",
            "vietnamese": "Tôi vừa gia hạn hợp đồng thuê hiện tại mất rồi."
          },
          {
            "key": "B",
            "text": "It was a great show.",
            "vietnamese": "Đó là một buổi biểu diễn tuyệt vời."
          },
          {
            "key": "C",
            "text": "A standard rental application.",
            "vietnamese": "Một đơn đăng ký thuê tiêu chuẩn."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Gợi ý về một chỗ thuê nhà đẹp. Phương án (A) phản hồi gián tiếp rằng mình không có nhu cầu thuê vì vừa gia hạn hợp đồng thuê hiện tại."
      }
    ],
    "vocabulary": [
      {
        "word": "renew",
        "meaning": "gia hạn, làm mới lại",
        "partOfSpeech": "v"
      },
      {
        "word": "lease",
        "meaning": "hợp đồng cho thuê bất động sản",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-20",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 20",
    "title": "Part 2 - Câu 20: Hệ thống sưởi có hoạt động không",
    "audioSrc": "/audio/test3_2024.mp3",
    "startTime": 551.05,
    "endTime": 574.85,
    "transcript": [
      {
        "id": "p2-20-q",
        "speaker": "Speaker 1",
        "text": "Is the heating system working?",
        "vietnamese": "Hệ thống sưởi có hoạt động không?"
      },
      {
        "id": "p2-20-a",
        "speaker": "Speaker 2",
        "text": "(A) Yes, that's my website.",
        "vietnamese": "(A) Vâng, đó là trang web của tôi."
      },
      {
        "id": "p2-20-b",
        "speaker": "Speaker 2",
        "text": "(B) A five kilometer run.",
        "vietnamese": "(B) Một cuộc chạy 5 km."
      },
      {
        "id": "p2-20-c",
        "speaker": "Speaker 2",
        "text": "(C) I just called maintenance.",
        "vietnamese": "(C) Tôi vừa mới gọi cho bộ phận bảo trì rồi."
      }
    ],
    "questions": [
      {
        "num": 20,
        "question": "Is the heating system working?",
        "vietnameseQuestion": "Hệ thống sưởi có hoạt động không?",
        "options": [
          {
            "key": "A",
            "text": "Yes, that's my website.",
            "vietnamese": "Vâng, đó là trang web của tôi."
          },
          {
            "key": "B",
            "text": "A five kilometer run.",
            "vietnamese": "Một cuộc chạy 5 km."
          },
          {
            "key": "C",
            "text": "I just called maintenance.",
            "vietnamese": "Tôi vừa mới gọi cho bộ phận bảo trì rồi."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Hỏi hệ thống sưởi hoạt động ra sao. Phương án (C) ngụ ý hệ thống đang có vấn đề trục trặc nên người nói vừa mới gọi cho thợ bảo trì."
      }
    ],
    "vocabulary": [
      {
        "word": "heating system",
        "meaning": "hệ thống sưởi ấm",
        "partOfSpeech": "n phr"
      },
      {
        "word": "maintenance",
        "meaning": "bộ phận bảo trì, bảo dưỡng",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-21",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 21",
    "title": "Part 2 - Câu 21: Việc làm đường trước Tòa thị chính",
    "audioSrc": "/audio/test3_2024.mp3",
    "startTime": 574.85,
    "endTime": 592.36,
    "transcript": [
      {
        "id": "p2-21-q",
        "speaker": "Speaker 1",
        "text": "Isn't the road work in front of City Hall finished yet?",
        "vietnamese": "Công trình làm đường trước Tòa thị chính vẫn chưa xong à?"
      },
      {
        "id": "p2-21-a",
        "speaker": "Speaker 2",
        "text": "(A) I just finished my conference presentation.",
        "vietnamese": "(A) Tôi vừa hoàn thành bài thuyết trình hội nghị của mình."
      },
      {
        "id": "p2-21-b",
        "speaker": "Speaker 2",
        "text": "(B) A lot of traffic in the evening.",
        "vietnamese": "(B) Rất nhiều xe cộ vào buổi tối."
      },
      {
        "id": "p2-21-c",
        "speaker": "Speaker 2",
        "text": "(C) No, they still have another month to go.",
        "vietnamese": "(C) Chưa, họ vẫn còn cả tháng nữa mới xong."
      }
    ],
    "questions": [
      {
        "num": 21,
        "question": "Isn't the road work in front of City Hall finished yet?",
        "vietnameseQuestion": "Công trình làm đường trước Tòa thị chính vẫn chưa xong à?",
        "options": [
          {
            "key": "A",
            "text": "I just finished my conference presentation.",
            "vietnamese": "Tôi vừa hoàn thành bài thuyết trình hội nghị của mình."
          },
          {
            "key": "B",
            "text": "A lot of traffic in the evening.",
            "vietnamese": "Rất nhiều xe cộ vào buổi tối."
          },
          {
            "key": "C",
            "text": "No, they still have another month to go.",
            "vietnamese": "Chưa, họ vẫn còn cả tháng nữa mới xong."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Câu hỏi phủ định 'Isn't... finished yet?'. Phương án (C) 'No, they still have another month to go' trả lời rõ ràng là chưa xong và còn mất khoảng một tháng nữa."
      }
    ],
    "vocabulary": [
      {
        "word": "road work",
        "meaning": "công trình sửa chữa/làm đường",
        "partOfSpeech": "n phr"
      },
      {
        "word": "City Hall",
        "meaning": "Tòa thị chính",
        "partOfSpeech": "n phr"
      }
    ]
  },
  {
    "id": "part2-22",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 22",
    "title": "Part 2 - Câu 22: Người phụ trách đào tạo nhân viên mới",
    "audioSrc": "/audio/test3_2024.mp3",
    "startTime": 592.36,
    "endTime": 619.48,
    "transcript": [
      {
        "id": "p2-22-q",
        "speaker": "Speaker 1",
        "text": "Who will need the new employee training today?",
        "vietnamese": "Ai sẽ phụ trách/cần buổi đào tạo nhân viên mới hôm nay?"
      },
      {
        "id": "p2-22-a",
        "speaker": "Speaker 2",
        "text": "(A) We're using a recorded video.",
        "vietnamese": "(A) Chúng ta đang sử dụng video được ghi sẵn."
      },
      {
        "id": "p2-22-b",
        "speaker": "Speaker 2",
        "text": "(B) Yes, right after lunch.",
        "vietnamese": "(B) Vâng, ngay sau bữa trưa."
      },
      {
        "id": "p2-22-c",
        "speaker": "Speaker 2",
        "text": "(C) Classroom 124.",
        "vietnamese": "(C) Phòng học số 124."
      }
    ],
    "questions": [
      {
        "num": 22,
        "question": "Who will need the new employee training today?",
        "vietnameseQuestion": "Ai sẽ phụ trách/cần buổi đào tạo nhân viên mới hôm nay?",
        "options": [
          {
            "key": "A",
            "text": "We're using a recorded video.",
            "vietnamese": "Chúng ta đang sử dụng video được ghi sẵn."
          },
          {
            "key": "B",
            "text": "Yes, right after lunch.",
            "vietnamese": "Vâng, ngay sau bữa trưa."
          },
          {
            "key": "C",
            "text": "Classroom 124.",
            "vietnamese": "Phòng học số 124."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Hỏi ai phụ trách việc đào tạo. Phương án (A) 'We're using a recorded video' giải thích rằng buổi đào tạo dùng video có sẵn chứ không cần người trực tiếp giảng."
      }
    ],
    "vocabulary": [
      {
        "word": "recorded video",
        "meaning": "video được quay/ghi âm sẵn",
        "partOfSpeech": "n phr"
      },
      {
        "word": "training",
        "meaning": "khóa đào tạo, huấn luyện",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-23",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 23",
    "title": "Part 2 - Câu 23: Lịch kiểm tra an toàn",
    "audioSrc": "/audio/test3_2024.mp3",
    "startTime": 619.48,
    "endTime": 639.31,
    "transcript": [
      {
        "id": "p2-23-q",
        "speaker": "Speaker 1",
        "text": "Is the safety inspection scheduled for this month or next month?",
        "vietnamese": "Cuộc kiểm tra an toàn được lên lịch trong tháng này hay tháng sau?"
      },
      {
        "id": "p2-23-a",
        "speaker": "Speaker 2",
        "text": "(A) I thought I saved the file.",
        "vietnamese": "(A) Tôi tưởng tôi đã lưu tệp đó rồi."
      },
      {
        "id": "p2-23-b",
        "speaker": "Speaker 2",
        "text": "(B) The factory supervisor.",
        "vietnamese": "(B) Người giám sát nhà máy."
      },
      {
        "id": "p2-23-c",
        "speaker": "Speaker 2",
        "text": "(C) It's this Wednesday.",
        "vietnamese": "(C) Nó diễn ra vào thứ Tư này."
      }
    ],
    "questions": [
      {
        "num": 23,
        "question": "Is the safety inspection scheduled for this month or next month?",
        "vietnameseQuestion": "Cuộc kiểm tra an toàn được lên lịch trong tháng này hay tháng sau?",
        "options": [
          {
            "key": "A",
            "text": "I thought I saved the file.",
            "vietnamese": "Tôi tưởng tôi đã lưu tệp đó rồi."
          },
          {
            "key": "B",
            "text": "The factory supervisor.",
            "vietnamese": "Người giám sát nhà máy."
          },
          {
            "key": "C",
            "text": "It's this Wednesday.",
            "vietnamese": "Nó diễn ra vào thứ Tư này."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Câu hỏi lựa chọn 'this month or next month'. Phương án (C) 'It's this Wednesday' đưa ra ngày cụ thể trong tuần này (ngụ ý là tháng này)."
      }
    ],
    "vocabulary": [
      {
        "word": "safety inspection",
        "meaning": "cuộc kiểm tra an toàn lao động",
        "partOfSpeech": "n phr"
      },
      {
        "word": "supervisor",
        "meaning": "người giám sát, quản lý",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-24",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 24",
    "title": "Part 2 - Câu 24: Thời gian diễn ra lễ hội thu hoạch",
    "audioSrc": "/audio/test3_2024.mp3",
    "startTime": 639.31,
    "endTime": 655.21,
    "transcript": [
      {
        "id": "p2-24-q",
        "speaker": "Speaker 1",
        "text": "When is the harvest festival taking place?",
        "vietnamese": "Khi nào thì lễ hội thu hoạch diễn ra?"
      },
      {
        "id": "p2-24-a",
        "speaker": "Speaker 2",
        "text": "(A) It's a week from tomorrow.",
        "vietnamese": "(A) Một tuần nữa tính từ ngày mai."
      },
      {
        "id": "p2-24-b",
        "speaker": "Speaker 2",
        "text": "(B) Sure, I can take it.",
        "vietnamese": "(B) Chắc chắn rồi, tôi có thể nhận nó."
      },
      {
        "id": "p2-24-c",
        "speaker": "Speaker 2",
        "text": "(C) The park next to the art museum.",
        "vietnamese": "(C) Công viên bên cạnh bảo tàng nghệ thuật."
      }
    ],
    "questions": [
      {
        "num": 24,
        "question": "When is the harvest festival taking place?",
        "vietnameseQuestion": "Khi nào thì lễ hội thu hoạch diễn ra?",
        "options": [
          {
            "key": "A",
            "text": "It's a week from tomorrow.",
            "vietnamese": "Một tuần nữa tính từ ngày mai."
          },
          {
            "key": "B",
            "text": "Sure, I can take it.",
            "vietnamese": "Chắc chắn rồi, tôi có thể nhận nó."
          },
          {
            "key": "C",
            "text": "The park next to the art museum.",
            "vietnamese": "Công viên bên cạnh bảo tàng nghệ thuật."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Câu hỏi 'When...' hỏi thời gian. Phương án (A) 'It's a week from tomorrow' trả lời mốc thời gian rõ ràng và chính xác."
      }
    ],
    "vocabulary": [
      {
        "word": "harvest festival",
        "meaning": "lễ hội thu hoạch mùa màng",
        "partOfSpeech": "n phr"
      },
      {
        "word": "take place",
        "meaning": "diễn ra, xảy ra",
        "partOfSpeech": "phr v"
      }
    ]
  },
  {
    "id": "part2-25",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 25",
    "title": "Part 2 - Câu 25: Chiếc máy tính xách tay có đắt không",
    "audioSrc": "/audio/test3_2024.mp3",
    "startTime": 655.21,
    "endTime": 674.94,
    "transcript": [
      {
        "id": "p2-25-q",
        "speaker": "Speaker 1",
        "text": "Was your new laptop expensive?",
        "vietnamese": "Chiếc máy tính xách tay mới của bạn có đắt không?"
      },
      {
        "id": "p2-25-a",
        "speaker": "Speaker 2",
        "text": "(A) Do you have a new password?",
        "vietnamese": "(A) Bạn có mật khẩu mới không?"
      },
      {
        "id": "p2-25-b",
        "speaker": "Speaker 2",
        "text": "(B) I had a discount coupon.",
        "vietnamese": "(B) Tôi đã có một phiếu giảm giá."
      },
      {
        "id": "p2-25-c",
        "speaker": "Speaker 2",
        "text": "(C) On top of the cabinet.",
        "vietnamese": "(C) Trên nóc chiếc tủ để đồ."
      }
    ],
    "questions": [
      {
        "num": 25,
        "question": "Was your new laptop expensive?",
        "vietnameseQuestion": "Chiếc máy tính xách tay mới của bạn có đắt không?",
        "options": [
          {
            "key": "A",
            "text": "Do you have a new password?",
            "vietnamese": "Bạn có mật khẩu mới không?"
          },
          {
            "key": "B",
            "text": "I had a discount coupon.",
            "vietnamese": "Tôi đã có một phiếu giảm giá."
          },
          {
            "key": "C",
            "text": "On top of the cabinet.",
            "vietnamese": "Trên nóc chiếc tủ để đồ."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Hỏi giá máy tính xách tay có đắt không. Phương án (B) ngụ ý rằng máy tính không quá đắt vì người nói có phiếu giảm giá."
      }
    ],
    "vocabulary": [
      {
        "word": "expensive",
        "meaning": "đắt đỏ, tốn kém",
        "partOfSpeech": "adj"
      },
      {
        "word": "discount coupon",
        "meaning": "phiếu giảm giá mua hàng",
        "partOfSpeech": "n phr"
      }
    ]
  },
  {
    "id": "part2-26",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 26",
    "title": "Part 2 - Câu 26: Đi cắm trại vào cuối tuần tới",
    "audioSrc": "/audio/test3_2024.mp3",
    "startTime": 674.94,
    "endTime": 697.58,
    "transcript": [
      {
        "id": "p2-26-q",
        "speaker": "Speaker 1",
        "text": "Why don't we go on our camping trip next weekend?",
        "vietnamese": "Tại sao chúng ta không đi cắm trại vào cuối tuần tới nhỉ?"
      },
      {
        "id": "p2-26-a",
        "speaker": "Speaker 2",
        "text": "(A) Yes, that table lamp is quite nice.",
        "vietnamese": "(A) Vâng, chiếc đèn bàn đó khá đẹp."
      },
      {
        "id": "p2-26-b",
        "speaker": "Speaker 2",
        "text": "(B) Should we go left or right?",
        "vietnamese": "(B) Chúng ta nên đi bên trái hay bên phải?"
      },
      {
        "id": "p2-26-c",
        "speaker": "Speaker 2",
        "text": "(C) I have a performance scheduled with my band.",
        "vietnamese": "(C) Tôi có lịch biểu diễn với ban nhạc của mình rồi."
      }
    ],
    "questions": [
      {
        "num": 26,
        "question": "Why don't we go on our camping trip next weekend?",
        "vietnameseQuestion": "Tại sao chúng ta không đi cắm trại vào cuối tuần tới nhỉ?",
        "options": [
          {
            "key": "A",
            "text": "Yes, that table lamp is quite nice.",
            "vietnamese": "Vâng, chiếc đèn bàn đó khá đẹp."
          },
          {
            "key": "B",
            "text": "Should we go left or right?",
            "vietnamese": "Chúng ta nên đi bên trái hay bên phải?"
          },
          {
            "key": "C",
            "text": "I have a performance scheduled with my band.",
            "vietnamese": "Tôi có lịch biểu diễn với ban nhạc của mình rồi."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Lời đề xuất rủ đi cắm trại cuối tuần tới. Phương án (C) từ chối lịch sự bằng cách nêu lý do bản thân đã vướng lịch biểu diễn cùng ban nhạc."
      }
    ],
    "vocabulary": [
      {
        "word": "camping trip",
        "meaning": "chuyến đi cắm trại",
        "partOfSpeech": "n phr"
      },
      {
        "word": "performance",
        "meaning": "buổi biểu diễn",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-27",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 27",
    "title": "Part 2 - Câu 27: Buổi hội thảo chiều nay bị hoãn",
    "audioSrc": "/audio/test3_2024.mp3",
    "startTime": 697.58,
    "endTime": 722.54,
    "transcript": [
      {
        "id": "p2-27-q",
        "speaker": "Speaker 1",
        "text": "The workshop for this afternoon was postponed, wasn't it?",
        "vietnamese": "Buổi hội thảo chiều nay đã bị hoãn lại rồi đúng không?"
      },
      {
        "id": "p2-27-a",
        "speaker": "Speaker 2",
        "text": "(A) At the post office.",
        "vietnamese": "(A) Tại bưu điện."
      },
      {
        "id": "p2-27-b",
        "speaker": "Speaker 2",
        "text": "(B) I haven't checked my email.",
        "vietnamese": "(B) Tôi vẫn chưa kiểm tra hòm thư điện tử."
      },
      {
        "id": "p2-27-c",
        "speaker": "Speaker 2",
        "text": "(C) A ticket for two o'clock, please.",
        "vietnamese": "(C) Làm ơn cho tôi một vé lúc 2 giờ."
      }
    ],
    "questions": [
      {
        "num": 27,
        "question": "The workshop for this afternoon was postponed, wasn't it?",
        "vietnameseQuestion": "Buổi hội thảo chiều nay đã bị hoãn lại rồi đúng không?",
        "options": [
          {
            "key": "A",
            "text": "At the post office.",
            "vietnamese": "Tại bưu điện."
          },
          {
            "key": "B",
            "text": "I haven't checked my email.",
            "vietnamese": "Tôi vẫn chưa kiểm tra hòm thư điện tử."
          },
          {
            "key": "C",
            "text": "A ticket for two o'clock, please.",
            "vietnamese": "Làm ơn cho tôi một vé lúc 2 giờ."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Câu hỏi đuôi hỏi xem hội thảo có bị hoãn không. Phương án (B) 'I haven't checked my email' giải thích rằng người nói chưa rõ vì chưa mở email xem thông báo."
      }
    ],
    "vocabulary": [
      {
        "word": "workshop",
        "meaning": "buổi hội thảo, tập huấn",
        "partOfSpeech": "n"
      },
      {
        "word": "postpone",
        "meaning": "hoãn lại",
        "partOfSpeech": "v"
      }
    ]
  },
  {
    "id": "part2-28",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 28",
    "title": "Part 2 - Câu 28: Số liệu sản xuất tháng trước",
    "audioSrc": "/audio/test3_2024.mp3",
    "startTime": 722.54,
    "endTime": 743.34,
    "transcript": [
      {
        "id": "p2-28-q",
        "speaker": "Speaker 1",
        "text": "How are our production figures last month?",
        "vietnamese": "Số liệu sản xuất của chúng ta tháng trước thế nào?"
      },
      {
        "id": "p2-28-a",
        "speaker": "Speaker 2",
        "text": "(A) They produce electric cars.",
        "vietnamese": "(A) Họ sản xuất ô tô điện."
      },
      {
        "id": "p2-28-b",
        "speaker": "Speaker 2",
        "text": "(B) Nine o'clock in the morning.",
        "vietnamese": "(B) Chín giờ sáng."
      },
      {
        "id": "p2-28-c",
        "speaker": "Speaker 2",
        "text": "(C) We were closed down for a week.",
        "vietnamese": "(C) Chúng ta đã phải đóng cửa nghỉ mất một tuần."
      }
    ],
    "questions": [
      {
        "num": 28,
        "question": "How are our production figures last month?",
        "vietnameseQuestion": "Số liệu sản xuất của chúng ta tháng trước thế nào?",
        "options": [
          {
            "key": "A",
            "text": "They produce electric cars.",
            "vietnamese": "Họ sản xuất ô tô điện."
          },
          {
            "key": "B",
            "text": "Nine o'clock in the morning.",
            "vietnamese": "Chín giờ sáng."
          },
          {
            "key": "C",
            "text": "We were closed down for a week.",
            "vietnamese": "Chúng ta đã phải đóng cửa nghỉ mất một tuần."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Hỏi về số liệu sản xuất tháng trước. Phương án (C) ngụ ý sản lượng bị sụt giảm vì xưởng phải tạm ngừng hoạt động trong suốt một tuần."
      }
    ],
    "vocabulary": [
      {
        "word": "production figures",
        "meaning": "số liệu sản lượng sản xuất",
        "partOfSpeech": "n phr"
      },
      {
        "word": "close down",
        "meaning": "đóng cửa, ngừng hoạt động",
        "partOfSpeech": "phr v"
      }
    ]
  },
  {
    "id": "part2-29",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 29",
    "title": "Part 2 - Câu 29: Thời gian gặp chuyên gia trị liệu ngôn ngữ",
    "audioSrc": "/audio/test3_2024.mp3",
    "startTime": 743.34,
    "endTime": 757.63,
    "transcript": [
      {
        "id": "p2-29-q",
        "speaker": "Speaker 1",
        "text": "When can I see the speech therapist?",
        "vietnamese": "Khi nào tôi có thể gặp chuyên gia trị liệu ngôn ngữ?"
      },
      {
        "id": "p2-29-a",
        "speaker": "Speaker 2",
        "text": "(A) A one hour session.",
        "vietnamese": "(A) Một buổi kéo dài một giờ."
      },
      {
        "id": "p2-29-b",
        "speaker": "Speaker 2",
        "text": "(B) Just a microphone.",
        "vietnamese": "(B) Chỉ một chiếc micrô thôi."
      },
      {
        "id": "p2-29-c",
        "speaker": "Speaker 2",
        "text": "(C) How about tomorrow afternoon?",
        "vietnamese": "(C) Chiều mai thì sao?"
      }
    ],
    "questions": [
      {
        "num": 29,
        "question": "When can I see the speech therapist?",
        "vietnameseQuestion": "Khi nào tôi có thể gặp chuyên gia trị liệu ngôn ngữ?",
        "options": [
          {
            "key": "A",
            "text": "A one hour session.",
            "vietnamese": "Một buổi kéo dài một giờ."
          },
          {
            "key": "B",
            "text": "Just a microphone.",
            "vietnamese": "Chỉ một chiếc micrô thôi."
          },
          {
            "key": "C",
            "text": "How about tomorrow afternoon?",
            "vietnamese": "Chiều mai thì sao?"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Hỏi thời gian có thể hẹn gặp ('When...'). Phương án (C) 'How about tomorrow afternoon?' đề xuất khung thời gian hẹn cụ thể và thích hợp."
      }
    ],
    "vocabulary": [
      {
        "word": "speech therapist",
        "meaning": "chuyên gia trị liệu ngôn ngữ/phát âm",
        "partOfSpeech": "n phr"
      },
      {
        "word": "session",
        "meaning": "buổi, phiên trị liệu",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-30",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 30",
    "title": "Part 2 - Câu 30: Đón khách hàng từ sân bay",
    "audioSrc": "/audio/test3_2024.mp3",
    "startTime": 757.63,
    "endTime": 778.3,
    "transcript": [
      {
        "id": "p2-30-q",
        "speaker": "Speaker 1",
        "text": "Aren't you picking up the clients from the airport?",
        "vietnamese": "Không phải bạn sẽ đón khách hàng từ sân bay sao?"
      },
      {
        "id": "p2-30-a",
        "speaker": "Speaker 2",
        "text": "(A) A product demonstration.",
        "vietnamese": "(A) Một buổi trình diễn sản phẩm."
      },
      {
        "id": "p2-30-b",
        "speaker": "Speaker 2",
        "text": "(B) No, I believe Tomiko is doing that.",
        "vietnamese": "(B) Không, tôi tin là Tomiko sẽ làm việc đó."
      },
      {
        "id": "p2-30-c",
        "speaker": "Speaker 2",
        "text": "(C) He prefers an aisle seat.",
        "vietnamese": "(C) Anh ấy thích ghế gần lối đi hơn."
      }
    ],
    "questions": [
      {
        "num": 30,
        "question": "Aren't you picking up the clients from the airport?",
        "vietnameseQuestion": "Không phải bạn sẽ đón khách hàng từ sân bay sao?",
        "options": [
          {
            "key": "A",
            "text": "A product demonstration.",
            "vietnamese": "Một buổi trình diễn sản phẩm."
          },
          {
            "key": "B",
            "text": "No, I believe Tomiko is doing that.",
            "vietnamese": "Không, tôi tin là Tomiko sẽ làm việc đó."
          },
          {
            "key": "C",
            "text": "He prefers an aisle seat.",
            "vietnamese": "Anh ấy thích ghế gần lối đi hơn."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Câu hỏi phủ định 'Aren't you picking up...?'. Phương án (B) đính chính lại thông tin rằng người đi đón là Tomiko chứ không phải người nói."
      }
    ],
    "vocabulary": [
      {
        "word": "pick up",
        "meaning": "đón (ai đó)",
        "partOfSpeech": "phr v"
      },
      {
        "word": "client",
        "meaning": "khách hàng, đối tác",
        "partOfSpeech": "n"
      },
      {
        "word": "aisle seat",
        "meaning": "ghế cạnh lối đi trên máy bay/xe",
        "partOfSpeech": "n phr"
      }
    ]
  },
  {
    "id": "part2-31",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 31",
    "title": "Part 2 - Câu 31: Buổi gặp gỡ khách hàng sáng nay",
    "audioSrc": "/audio/test3_2024.mp3",
    "startTime": 778.3,
    "endTime": 804.68,
    "transcript": [
      {
        "id": "p2-31-q",
        "speaker": "Speaker 1",
        "text": "How is your morning client meeting?",
        "vietnamese": "Cuộc gặp khách hàng sáng nay của bạn thế nào?"
      },
      {
        "id": "p2-31-a",
        "speaker": "Speaker 2",
        "text": "(A) It's great to meet you.",
        "vietnamese": "(A) Rất vui được gặp bạn."
      },
      {
        "id": "p2-31-b",
        "speaker": "Speaker 2",
        "text": "(B) No, over in conference room two.",
        "vietnamese": "(B) Không, ở phòng hội nghị số hai."
      },
      {
        "id": "p2-31-c",
        "speaker": "Speaker 2",
        "text": "(C) The contract is now officially signed.",
        "vietnamese": "(C) Hợp đồng giờ đã được ký kết chính thức rồi."
      }
    ],
    "questions": [
      {
        "num": 31,
        "question": "How is your morning client meeting?",
        "vietnameseQuestion": "Cuộc gặp khách hàng sáng nay của bạn thế nào?",
        "options": [
          {
            "key": "A",
            "text": "It's great to meet you.",
            "vietnamese": "Rất vui được gặp bạn."
          },
          {
            "key": "B",
            "text": "No, over in conference room two.",
            "vietnamese": "Không, ở phòng hội nghị số hai."
          },
          {
            "key": "C",
            "text": "The contract is now officially signed.",
            "vietnamese": "Hợp đồng giờ đã được ký kết chính thức rồi."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Hỏi thăm kết quả cuộc gặp gỡ khách hàng sáng nay. Phương án (C) 'The contract is now officially signed' thông báo kết quả tốt đẹp là hợp đồng đã được ký kết thành công."
      }
    ],
    "vocabulary": [
      {
        "word": "client meeting",
        "meaning": "cuộc gặp khách hàng",
        "partOfSpeech": "n phr"
      },
      {
        "word": "officially",
        "meaning": "một cách chính thức",
        "partOfSpeech": "adv"
      },
      {
        "word": "sign a contract",
        "meaning": "ký kết hợp đồng",
        "partOfSpeech": "phr"
      }
    ]
  },
  {
    "id": "part3-32-34",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 32 - 34",
    "title": "Part 3 - Câu 32 - 34: Di dời văn phòng và quyên góp bàn ghế",
    "audioSrc": "/audio/test3_2024.mp3",
    "startTime": 834.0,
    "endTime": 899.77,
    "transcript": [
      {
        "id": "p3-32-l1",
        "speaker": "Man",
        "text": "The company is making a big change this year by moving offices. It's exciting that the new space will be much bigger.",
        "vietnamese": "Năm nay công ty đang thực hiện một thay đổi lớn bằng việc chuyển văn phòng. Thật hào hứng khi không gian mới sẽ rộng rãi hơn rất nhiều."
      },
      {
        "id": "p3-32-l2",
        "speaker": "Woman",
        "text": "Yes. Do you know what the company is planning to do with our meeting tables and chairs?",
        "vietnamese": "Đúng vậy. Anh có biết công ty dự định làm gì với những chiếc bàn và ghế phòng họp của chúng ta không?"
      },
      {
        "id": "p3-32-l3",
        "speaker": "Man",
        "text": "Well, the new location already has furniture, so we don't need them.",
        "vietnamese": "À, địa điểm mới đã có sẵn đồ nội thất rồi, nên chúng ta không cần dùng đến chúng nữa."
      },
      {
        "id": "p3-32-l4",
        "speaker": "Woman",
        "text": "Why don't we donate them? The Gebrian Foundation is a local organization that picks up old furniture for donation.",
        "vietnamese": "Tại sao chúng ta không quyên góp chúng nhỉ? Quỹ Gebrian là một tổ chức địa phương chuyên đến thu nhận đồ nội thất cũ để làm từ thiện đấy."
      },
      {
        "id": "p3-32-l5",
        "speaker": "Man",
        "text": "That's a good idea. Let's talk to our directors to see what they think.",
        "vietnamese": "Đó là một ý kiến hay. Chúng ta hãy trao đổi với các giám đốc xem họ nghĩ sao nhé."
      }
    ],
    "questions": [
      {
        "num": 32,
        "question": "What change is a company making?",
        "vietnameseQuestion": "Công ty đang thực hiện thay đổi nào?",
        "options": [
          {
            "key": "A",
            "text": "It is lowering some prices.",
            "vietnamese": "Công ty đang giảm một số mức giá."
          },
          {
            "key": "B",
            "text": "It is hiring more staffers.",
            "vietnamese": "Công ty đang tuyển thêm nhân viên."
          },
          {
            "key": "C",
            "text": "It is moving to a new location.",
            "vietnamese": "Công ty đang chuyển đến một địa điểm mới."
          },
          {
            "key": "D",
            "text": "It is expanding a product line.",
            "vietnamese": "Công ty đang mở rộng dòng sản phẩm."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Người đàn ông nói: 'The company is making a big change this year by moving offices' và 'the new location already has furniture', cho thấy công ty đang chuyển đến địa điểm mới (moving to a new location)."
      },
      {
        "num": 33,
        "question": "What suggestion does the woman make?",
        "vietnameseQuestion": "Người phụ nữ đưa ra gợi ý gì?",
        "options": [
          {
            "key": "A",
            "text": "Updating a handbook",
            "vietnamese": "Cập nhật sổ tay hướng dẫn"
          },
          {
            "key": "B",
            "text": "Donating some furniture",
            "vietnamese": "Quyên góp một số đồ nội thất"
          },
          {
            "key": "C",
            "text": "Creating a schedule",
            "vietnamese": "Tạo một lịch trình"
          },
          {
            "key": "D",
            "text": "Downloading a software program",
            "vietnamese": "Tải một chương trình phần mềm"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Người phụ nữ đề xuất: 'Why don't we donate them? The Gebrian Foundation is a local organization that picks up old furniture for donation' (quyên góp bàn ghế cũ)."
      },
      {
        "num": 34,
        "question": "What will the speakers most likely do next?",
        "vietnameseQuestion": "Những người nói có khả năng cao sẽ làm gì tiếp theo?",
        "options": [
          {
            "key": "A",
            "text": "Train a new employee",
            "vietnamese": "Đào tạo một nhân viên mới"
          },
          {
            "key": "B",
            "text": "Review an application",
            "vietnamese": "Xem lại một đơn ứng tuyển"
          },
          {
            "key": "C",
            "text": "Check a list",
            "vietnamese": "Kiểm tra một danh sách"
          },
          {
            "key": "D",
            "text": "Talk to some directors",
            "vietnamese": "Trao đổi với các giám đốc"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Người đàn ông kết luận: 'Let's talk to our directors to see what they think' (Hãy nói chuyện với các giám đốc)."
      }
    ],
    "vocabulary": [
      {
        "word": "moving offices",
        "meaning": "chuyển văn phòng",
        "partOfSpeech": "phr"
      },
      {
        "word": "furniture",
        "meaning": "đồ nội thất",
        "partOfSpeech": "n"
      },
      {
        "word": "donate",
        "meaning": "quyên góp, ủng hộ",
        "partOfSpeech": "v"
      },
      {
        "word": "foundation",
        "meaning": "quỹ từ thiện, tổ chức",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part3-35-37",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 35 - 37",
    "title": "Part 3 - Câu 35 - 37: Hội chợ sức khỏe cộng đồng và buổi ghi hình",
    "audioSrc": "/audio/test3_2024.mp3",
    "startTime": 899.77,
    "endTime": 979.77,
    "transcript": [
      {
        "id": "p3-35-l1",
        "speaker": "Woman 1",
        "text": "Good morning. We're reporting live from the North Valley Community Health Fair for the local morning news. There are already hundreds of attendees here today.",
        "vietnamese": "Chào buổi sáng. Chúng tôi đang đưa tin trực tiếp từ Hội chợ Sức khỏe Cộng đồng North Valley cho bản tin sáng của địa phương. Hôm nay đã có hàng trăm người tham dự tại đây."
      },
      {
        "id": "p3-35-l2",
        "speaker": "Man",
        "text": "Yes, we're thrilled with the turnout. This is our fifth annual fair, and each year the number of participants has grown.",
        "vietnamese": "Vâng, chúng tôi rất phấn khởi với số lượng người tham gia. Đây là hội chợ thường niên lần thứ năm của chúng tôi, và mỗi năm số người tham dự đều tăng lên."
      },
      {
        "id": "p3-35-l3",
        "speaker": "Woman 2",
        "text": "That's wonderful. Could you tell our viewers what activities are scheduled for this morning?",
        "vietnamese": "Thật tuyệt vời. Anh có thể chia sẻ cho khán giả xem đài biết những hoạt động nào được lên lịch cho buổi sáng nay không?"
      },
      {
        "id": "p3-35-l4",
        "speaker": "Man",
        "text": "Sure. At 10:00, there's a CPR demonstration in Hall B, followed by free blood pressure screenings.",
        "vietnamese": "Chắc chắn rồi. Vào lúc 10 giờ, có buổi trình diễn kỹ thuật hô hấp nhân tạo tại Hội trường B, sau đó là đo huyết áp miễn phí."
      },
      {
        "id": "p3-35-l5",
        "speaker": "Woman 1",
        "text": "Thanks. We'll head over to Hall B right now to set up our cameras and take some footage.",
        "vietnamese": "Cảm ơn anh. Chúng tôi sẽ đến Hội trường B ngay bây giờ để lắp đặt máy quay và chụp một số hình ảnh tư liệu."
      }
    ],
    "questions": [
      {
        "num": 35,
        "question": "Who most likely are the women?",
        "vietnameseQuestion": "Những người phụ nữ có khả năng nhất là ai?",
        "options": [
          {
            "key": "A",
            "text": "Company executives",
            "vietnamese": "Các giám đốc điều hành công ty"
          },
          {
            "key": "B",
            "text": "Journalists",
            "vietnamese": "Các nhà báo / phóng viên"
          },
          {
            "key": "C",
            "text": "Health-care professionals",
            "vietnamese": "Các chuyên gia y tế"
          },
          {
            "key": "D",
            "text": "Safety inspectors",
            "vietnamese": "Các thanh tra viên an toàn"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Người phụ nữ mở đầu: 'We're reporting live from the North Valley Community Health Fair for the local morning news' (Chúng tôi đang đưa tin trực tiếp cho bản tin tin tức buổi sáng), chứng tỏ họ là nhà báo/phóng viên (Journalists)."
      },
      {
        "num": 36,
        "question": "What does the man say he is pleased about?",
        "vietnameseQuestion": "Người đàn ông nói anh ấy hài lòng về điều gì?",
        "options": [
          {
            "key": "A",
            "text": "The number of event participants",
            "vietnamese": "Số lượng người tham gia sự kiện"
          },
          {
            "key": "B",
            "text": "The amount of money raised",
            "vietnamese": "Số tiền quyên góp được"
          },
          {
            "key": "C",
            "text": "The quality of vendors",
            "vietnamese": "Chất lượng của các nhà cung cấp"
          },
          {
            "key": "D",
            "text": "The variety of presentations",
            "vietnamese": "Sự đa dạng của các bài thuyết trình"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Người đàn ông nói: 'Yes, we're thrilled with the turnout. This is our fifth annual fair, and each year the number of participants has grown' (rất phấn khởi về lượng người tham gia đông đảo)."
      },
      {
        "num": 37,
        "question": "What will the women do next?",
        "vietnameseQuestion": "Những người phụ nữ sẽ làm gì tiếp theo?",
        "options": [
          {
            "key": "A",
            "text": "Watch a demonstration",
            "vietnamese": "Xem một buổi biểu diễn minh họa"
          },
          {
            "key": "B",
            "text": "Get some refreshments",
            "vietnamese": "Lấy đồ ăn nhẹ"
          },
          {
            "key": "C",
            "text": "Register for an event",
            "vietnamese": "Đăng ký tham gia một sự kiện"
          },
          {
            "key": "D",
            "text": "Take a photograph",
            "vietnamese": "Chụp ảnh / ghi hình"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Người phụ nữ nói: 'We'll head over to Hall B right now to set up our cameras and take some footage/photos' (đến hội trường lắp máy quay để chụp ảnh/ghi hình tư liệu)."
      }
    ],
    "vocabulary": [
      {
        "word": "reporting live",
        "meaning": "đưa tin trực tiếp",
        "partOfSpeech": "phr"
      },
      {
        "word": "turnout",
        "meaning": "số lượng người tham dự",
        "partOfSpeech": "n"
      },
      {
        "word": "demonstration",
        "meaning": "buổi biểu diễn thao tác mẫu, minh họa",
        "partOfSpeech": "n"
      },
      {
        "word": "screening",
        "meaning": "sàng lọc, kiểm tra sức khỏe",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part3-38-40",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 38 - 40",
    "title": "Part 3 - Câu 38 - 40: Thiết kế giao diện trang web khách hàng",
    "audioSrc": "/audio/test3_2024.mp3",
    "startTime": 979.77,
    "endTime": 1061.22,
    "transcript": [
      {
        "id": "p3-38-l1",
        "speaker": "Man",
        "text": "Thanks for meeting with me, Jin-Woo. As our firm's web designer, I wanted to review the mockup for the new homepage layout for Anderson Investments.",
        "vietnamese": "Cảm ơn cô đã gặp tôi, Jin-Woo. Với tư cách là nhà thiết kế web của công ty, tôi muốn xem xét bản thiết kế mẫu cho bố cục trang chủ mới của Anderson Investments."
      },
      {
        "id": "p3-38-l2",
        "speaker": "Woman",
        "text": "Of course. I've streamlined the navigation bar and added a section for client testimonials.",
        "vietnamese": "Tất nhiên rồi. Tôi đã tinh giản thanh điều hướng và thêm một phần dành cho phản hồi của khách hàng."
      },
      {
        "id": "p3-38-l3",
        "speaker": "Man",
        "text": "It looks much cleaner. I'll need to go over the design carefully this afternoon to ensure it adheres to all accessibility guidelines.",
        "vietnamese": "Trông gọn gàng hơn nhiều đấy. Chiều nay tôi sẽ cần xem xét kỹ lại thiết kế để đảm bảo nó tuân thủ tất cả các hướng dẫn về khả năng tiếp cận."
      },
      {
        "id": "p3-38-l4",
        "speaker": "Woman",
        "text": "Sounds good. And before we finalize anything, I'll send you a list of changes we made from the original design.",
        "vietnamese": "Nghe hay đấy. Và trước khi chúng ta chốt phương án, tôi sẽ gửi cho anh danh sách các thay đổi so với thiết kế ban đầu."
      }
    ],
    "questions": [
      {
        "num": 38,
        "question": "What most likely is the woman's job?",
        "vietnameseQuestion": "Công việc của người phụ nữ có khả năng nhất là gì?",
        "options": [
          {
            "key": "A",
            "text": "Professional chef",
            "vietnamese": "Đầu bếp chuyên nghiệp"
          },
          {
            "key": "B",
            "text": "Bank executive",
            "vietnamese": "Giám đốc ngân hàng"
          },
          {
            "key": "C",
            "text": "Administrative assistant",
            "vietnamese": "Trợ lý hành chính"
          },
          {
            "key": "D",
            "text": "Web designer",
            "vietnamese": "Nhà thiết kế trang web"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Người đàn ông giới thiệu: 'As our firm's web designer, I wanted to review the mockup...' và người phụ nữ giải thích chi tiết về việc chỉnh sửa thanh điều hướng và trang chủ, cho thấy cô ấy là nhà thiết kế web (Web designer)."
      },
      {
        "num": 39,
        "question": "What will the man most likely do?",
        "vietnameseQuestion": "Người đàn ông có khả năng nhất sẽ làm gì?",
        "options": [
          {
            "key": "A",
            "text": "Buy some materials from the woman",
            "vietnamese": "Mua một số nguyên liệu từ người phụ nữ"
          },
          {
            "key": "B",
            "text": "Check the woman's work",
            "vietnamese": "Kiểm tra công việc của người phụ nữ"
          },
          {
            "key": "C",
            "text": "List investment options",
            "vietnamese": "Liệt kê các lựa chọn đầu tư"
          },
          {
            "key": "D",
            "text": "Update some client information",
            "vietnamese": "Cập nhật một số thông tin khách hàng"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Người đàn ông nói: 'I'll need to go over the design carefully this afternoon to ensure it adheres to all accessibility guidelines' (xem xét/kiểm tra kỹ lại bản thiết kế mà cô ấy vừa làm)."
      },
      {
        "num": 40,
        "question": "What will the woman most likely send to the man?",
        "vietnameseQuestion": "Người phụ nữ có khả năng nhất sẽ gửi gì cho người đàn ông?",
        "options": [
          {
            "key": "A",
            "text": "A cost estimate",
            "vietnamese": "Bản ước tính chi phí"
          },
          {
            "key": "B",
            "text": "A revised schedule",
            "vietnamese": "Lịch trình sửa đổi"
          },
          {
            "key": "C",
            "text": "A building plan",
            "vietnamese": "Bản vẽ xây dựng"
          },
          {
            "key": "D",
            "text": "A list of changes",
            "vietnamese": "Một danh sách các thay đổi"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Người phụ nữ khẳng định: 'I'll send you a list of changes we made from the original design' (Tôi sẽ gửi cho anh danh sách các thay đổi)."
      }
    ],
    "vocabulary": [
      {
        "word": "web designer",
        "meaning": "nhà thiết kế web",
        "partOfSpeech": "n phr"
      },
      {
        "word": "mockup",
        "meaning": "bản thiết kế mô phỏng mẫu",
        "partOfSpeech": "n"
      },
      {
        "word": "streamline",
        "meaning": "tinh giản, tối ưu hóa",
        "partOfSpeech": "v"
      },
      {
        "word": "adhere to",
        "meaning": "tuân thủ theo",
        "partOfSpeech": "phr v"
      }
    ]
  },
  {
    "id": "part3-41-43",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 41 - 43",
    "title": "Part 3 - Câu 41 - 43: Sửa chữa đường ray và xe buýt trung chuyển",
    "audioSrc": "/audio/test3_2024.mp3",
    "startTime": 1061.22,
    "endTime": 1135.1,
    "transcript": [
      {
        "id": "p3-41-l1",
        "speaker": "Man",
        "text": "Excuse me. I'm trying to catch a train from this platform, but I've been waiting and no train has arrived.",
        "vietnamese": "Xin lỗi. Tôi đang cố bắt chuyến tàu từ sân ga này, nhưng tôi đã chờ một lúc rồi mà không thấy tàu nào đến."
      },
      {
        "id": "p3-41-l2",
        "speaker": "Woman",
        "text": "Oh yes. Unfortunately, some tracks are being repaired, so no trains are departing from this platform.",
        "vietnamese": "Ồ vâng. Thật không may là một số đoạn đường ray đang được sửa chữa, nên không có chuyến tàu nào khởi hành từ sân ga này cả."
      },
      {
        "id": "p3-41-l3",
        "speaker": "Man",
        "text": "I see. I had no idea this was happening, and I'm upset that now I'm late for an appointment.",
        "vietnamese": "Tôi hiểu rồi. Tôi hoàn toàn không biết chuyện này đang xảy ra, và tôi rất bực bội vì giờ đây tôi đã bị muộn cuộc hẹn rồi."
      },
      {
        "id": "p3-41-l4",
        "speaker": "Woman",
        "text": "Well, they're providing free bus service to the next few stations. You can catch a shuttle bus from the south side of this station.",
        "vietnamese": "À, họ đang cung cấp dịch vụ xe buýt miễn phí đến một vài ga tiếp theo. Anh có thể bắt xe buýt trung chuyển ở phía nam của nhà ga này."
      }
    ],
    "questions": [
      {
        "num": 41,
        "question": "Why is a train platform closed?",
        "vietnameseQuestion": "Tại sao sân ga tàu hỏa lại bị đóng cửa?",
        "options": [
          {
            "key": "A",
            "text": "Safety inspections are being conducted.",
            "vietnamese": "Các cuộc kiểm tra an toàn đang được tiến hành."
          },
          {
            "key": "B",
            "text": "New escalators are being installed.",
            "vietnamese": "Thang cuốn mới đang được lắp đặt."
          },
          {
            "key": "C",
            "text": "Tracks are being repaired.",
            "vietnamese": "Đường ray đang được sửa chữa."
          },
          {
            "key": "D",
            "text": "Waiting areas are being remodeled.",
            "vietnamese": "Khu vực chờ đang được tu sửa."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Người phụ nữ giải thích: 'Unfortunately, some tracks are being repaired, so no trains are departing from this platform' (đường ray đang được sửa chữa)."
      },
      {
        "num": 42,
        "question": "What does the man say he is upset about?",
        "vietnameseQuestion": "Người đàn ông nói anh ấy bực bội về điều gì?",
        "options": [
          {
            "key": "A",
            "text": "Misunderstanding some instructions",
            "vietnamese": "Hiểu lầm một số hướng dẫn"
          },
          {
            "key": "B",
            "text": "Being late for an appointment",
            "vietnamese": "Bị muộn một cuộc hẹn"
          },
          {
            "key": "C",
            "text": "Losing a travel pass",
            "vietnamese": "Làm mất vé/thẻ đi lại"
          },
          {
            "key": "D",
            "text": "Boarding the wrong train",
            "vietnamese": "Lên nhầm chuyến tàu"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Người đàn ông nói: 'I had no idea this was happening, and I'm upset that now I'm late for an appointment' (bực bội vì bị muộn hẹn)."
      },
      {
        "num": 43,
        "question": "What will the man most likely do next?",
        "vietnameseQuestion": "Người đàn ông có khả năng nhất sẽ làm gì tiếp theo?",
        "options": [
          {
            "key": "A",
            "text": "Purchase a snack",
            "vietnamese": "Mua đồ ăn nhẹ"
          },
          {
            "key": "B",
            "text": "Take a shuttle bus",
            "vietnamese": "Đi xe buýt trung chuyển"
          },
          {
            "key": "C",
            "text": "File a complaint",
            "vietnamese": "Nộp đơn khiếu nại"
          },
          {
            "key": "D",
            "text": "Download a map",
            "vietnamese": "Tải bản đồ về"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Người phụ nữ hướng dẫn: 'You can catch a shuttle bus from the south side of this station' và người đàn ông sẽ đi ra bắt xe buýt trung chuyển này."
      }
    ],
    "vocabulary": [
      {
        "word": "platform",
        "meaning": "sân ga tàu",
        "partOfSpeech": "n"
      },
      {
        "word": "tracks",
        "meaning": "đường ray tàu hỏa",
        "partOfSpeech": "n"
      },
      {
        "word": "shuttle bus",
        "meaning": "xe buýt trung chuyển cự ly ngắn",
        "partOfSpeech": "n phr"
      },
      {
        "word": "upset",
        "meaning": "khó chịu, bực bội",
        "partOfSpeech": "adj"
      }
    ]
  },
  {
    "id": "part3-44-46",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 44 - 46",
    "title": "Part 3 - Câu 44 - 46: Gọi vốn đầu tư giá treo xe đạp thông minh",
    "audioSrc": "/audio/test3_2024.mp3",
    "startTime": 1135.1,
    "endTime": 1213.99,
    "transcript": [
      {
        "id": "p3-44-l1",
        "speaker": "Man",
        "text": "Thanks for taking my call, Ms. Hazarika. I understand from your email that you're looking for investors in your business.",
        "vietnamese": "Cảm ơn cô Hazarika đã nhận cuộc gọi của tôi. Qua email tôi được biết cô đang tìm kiếm các nhà đầu tư cho doanh nghiệp của mình."
      },
      {
        "id": "p3-44-l2",
        "speaker": "Woman",
        "text": "Yes. Storing bikes in small apartments is tough. That's why I've developed this space-saving bicycle rack.",
        "vietnamese": "Vâng. Việc cất xe đạp trong các căn hộ nhỏ rất khó khăn. Đó là lý do tôi đã phát triển chiếc giá treo xe đạp tiết kiệm không gian này."
      },
      {
        "id": "p3-44-l3",
        "speaker": "Man",
        "text": "I've seen other indoor bike racks. What's unique about yours?",
        "vietnamese": "Tôi đã thấy những chiếc giá để xe đạp trong nhà khác rồi. Điểm độc đáo ở sản phẩm của cô là gì?"
      },
      {
        "id": "p3-44-l4",
        "speaker": "Woman",
        "text": "Most indoor racks are one size, but not all bikes are the same. My product can be adjusted to suit different types of bicycles.",
        "vietnamese": "Hầu hết các giá trong nhà chỉ có một kích cỡ cố định, nhưng xe đạp thì không phải chiếc nào cũng giống nhau. Sản phẩm của tôi có thể điều chỉnh để phù hợp với nhiều loại xe đạp khác nhau."
      },
      {
        "id": "p3-44-l5",
        "speaker": "Man",
        "text": "That's interesting. Send me your business model. I need to determine if you have a reasonable plan for expanding production and increasing sales before I make any decisions.",
        "vietnamese": "Điều đó rất thú vị đấy. Hãy gửi cho tôi mô hình kinh doanh của cô. Tôi cần xác định xem cô có kế hoạch hợp lý để mở rộng sản xuất và tăng doanh số trước khi đưa ra bất kỳ quyết định nào."
      }
    ],
    "questions": [
      {
        "num": 44,
        "question": "Why does the man call the woman?",
        "vietnameseQuestion": "Tại sao người đàn ông lại gọi điện cho người phụ nữ?",
        "options": [
          {
            "key": "A",
            "text": "To provide an update on his project",
            "vietnamese": "Để cập nhật tình hình dự án của anh ấy"
          },
          {
            "key": "B",
            "text": "To get approval on some design changes",
            "vietnamese": "Để xin phê duyệt một số thay đổi thiết kế"
          },
          {
            "key": "C",
            "text": "To receive the woman's feedback on a prototype",
            "vietnamese": "Để nhận phản hồi của người phụ nữ về mẫu thử nghiệm"
          },
          {
            "key": "D",
            "text": "To persuade the woman to invest in his business",
            "vietnamese": "Để thảo luận về việc đầu tư vào doanh nghiệp"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Người đàn ông gọi điện để trao đổi về việc đầu tư vào dự án kinh doanh sản phẩm mới sau khi nhận email kêu gọi vốn: 'I understand from your email that you're looking for investors in your business'."
      },
      {
        "num": 45,
        "question": "According to the man, what is unique about a product?",
        "vietnameseQuestion": "Theo người nói, điểm độc đáo của sản phẩm là gì?",
        "options": [
          {
            "key": "A",
            "text": "It is inexpensive.",
            "vietnamese": "Nó không đắt tiền."
          },
          {
            "key": "B",
            "text": "It is easy to assemble.",
            "vietnamese": "Nó dễ lắp ráp."
          },
          {
            "key": "C",
            "text": "It is adjustable.",
            "vietnamese": "Nó có thể điều chỉnh được."
          },
          {
            "key": "D",
            "text": "It is lightweight.",
            "vietnamese": "Nó có trọng lượng nhẹ."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Người phụ nữ giải thích điểm độc đáo: 'My product can be adjusted to suit different types of bicycles' (có thể điều chỉnh được để vừa với nhiều loại xe)."
      },
      {
        "num": 46,
        "question": "Why does the woman request some documents?",
        "vietnameseQuestion": "Tại sao người nghe/người đối thoại lại yêu cầu gửi tài liệu?",
        "options": [
          {
            "key": "A",
            "text": "To open a customer account",
            "vietnamese": "Để mở tài khoản khách hàng"
          },
          {
            "key": "B",
            "text": "To issue a certificate",
            "vietnamese": "Để cấp giấy chứng nhận"
          },
          {
            "key": "C",
            "text": "To make some copies",
            "vietnamese": "Để tạo một số bản sao"
          },
          {
            "key": "D",
            "text": "To evaluate a proposal",
            "vietnamese": "Để đánh giá một bản đề xuất kinh doanh"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Người đàn ông yêu cầu: 'Send me your business model. I need to determine if you have a reasonable plan... before I make any decisions' (để đánh giá tính khả thi của đề xuất kinh doanh trước khi quyết định đầu tư)."
      }
    ],
    "vocabulary": [
      {
        "word": "space-saving",
        "meaning": "tiết kiệm không gian, diện tích",
        "partOfSpeech": "adj"
      },
      {
        "word": "bicycle rack",
        "meaning": "giá treo/để xe đạp",
        "partOfSpeech": "n phr"
      },
      {
        "word": "adjustable",
        "meaning": "có thể điều chỉnh được",
        "partOfSpeech": "adj"
      },
      {
        "word": "business model",
        "meaning": "mô hình kinh doanh",
        "partOfSpeech": "n phr"
      }
    ]
  },
  {
    "id": "part3-47-49",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 47 - 49",
    "title": "Part 3 - Câu 47 - 49: Chuẩn bị thiết bị quay phim phỏng vấn",
    "audioSrc": "/audio/test3_2024.mp3",
    "startTime": 1213.99,
    "endTime": 1286.9,
    "transcript": [
      {
        "id": "p3-47-l1",
        "speaker": "Woman",
        "text": "Alberto, it's time to leave the studio and head over to the central bank for our interview with the director.",
        "vietnamese": "Alberto, đến lúc rời trường quay và đến ngân hàng trung ương để thực hiện cuộc phỏng vấn với ngài giám đốc rồi."
      },
      {
        "id": "p3-47-l2",
        "speaker": "Man",
        "text": "Yes. I have all the cameras we'll need today.",
        "vietnamese": "Vâng. Tôi đã có đầy đủ máy quay chúng ta cần hôm nay rồi."
      },
      {
        "id": "p3-47-l3",
        "speaker": "Woman",
        "text": "Great. And make sure you have the special low-light lenses. I'm concerned about the poor lighting at the bank. It's pretty dark in there, and that can ruin our key interview shots.",
        "vietnamese": "Tuyệt vời. Và hãy chắc chắn anh mang theo các ống kính chụp thiếu sáng đặc biệt nhé. Tôi lo ngại về ánh sáng yếu tại ngân hàng. Trong đó khá tối, và điều đó có thể làm hỏng những khung hình phỏng vấn quan trọng của chúng ta."
      },
      {
        "id": "p3-47-l4",
        "speaker": "Man",
        "text": "Oh, yes, I have those. And by the way, our new intern Marcel Lambert is interested in joining us.",
        "vietnamese": "Ồ vâng, tôi mang theo chúng rồi. Và nhân tiện thì bạn thực tập sinh mới Marcel Lambert rất muốn đi cùng chúng ta."
      },
      {
        "id": "p3-47-l5",
        "speaker": "Woman",
        "text": "That's a good idea. It'll be a good experience for him.",
        "vietnamese": "Đó là một ý kiến hay. Đó sẽ là một trải nghiệm bổ ích cho cậu ấy."
      }
    ],
    "questions": [
      {
        "num": 47,
        "question": "What are the speakers preparing for?",
        "vietnameseQuestion": "Những người nói đang chuẩn bị cho sự kiện gì?",
        "options": [
          {
            "key": "A",
            "text": "A construction-site visit",
            "vietnamese": "Chuyến thăm công trường xây dựng"
          },
          {
            "key": "B",
            "text": "A safety inspection",
            "vietnamese": "Cuộc kiểm tra an toàn"
          },
          {
            "key": "C",
            "text": "An interview",
            "vietnamese": "Một cuộc phỏng vấn ghi hình"
          },
          {
            "key": "D",
            "text": "A film festival",
            "vietnamese": "Một liên hoan phim"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Người phụ nữ nói: '...head over to the central bank for our interview with the director' (đến ngân hàng để phỏng vấn giám đốc)."
      },
      {
        "num": 48,
        "question": "What is the woman concerned about?",
        "vietnameseQuestion": "Người phụ nữ lo ngại về vấn đề gì?",
        "options": [
          {
            "key": "A",
            "text": "A lighting issue",
            "vietnamese": "Vấn đề ánh sáng"
          },
          {
            "key": "B",
            "text": "A script mistake",
            "vietnamese": "Lỗi kịch bản"
          },
          {
            "key": "C",
            "text": "A material shortage",
            "vietnamese": "Thiếu hụt nguyên vật liệu"
          },
          {
            "key": "D",
            "text": "A revenue decrease",
            "vietnamese": "Doanh thu sụt giảm"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Người phụ nữ nhấn mạnh: 'I'm concerned about the poor lighting at the bank. It's pretty dark in there' (lo ngại ánh sáng yếu trong ngân hàng)."
      },
      {
        "num": 49,
        "question": "Who is Marcel Lambert?",
        "vietnameseQuestion": "Marcel Lambert là ai?",
        "options": [
          {
            "key": "A",
            "text": "A company accountant",
            "vietnamese": "Kế toán viên công ty"
          },
          {
            "key": "B",
            "text": "A possible client",
            "vietnamese": "Một khách hàng tiềm năng"
          },
          {
            "key": "C",
            "text": "A supervisor",
            "vietnamese": "Một người giám sát"
          },
          {
            "key": "D",
            "text": "An intern",
            "vietnamese": "Một thực tập sinh"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Người đàn ông nhắc tới: '...our new intern Marcel Lambert is interested in joining us' (thực tập sinh mới của chúng ta)."
      }
    ],
    "vocabulary": [
      {
        "word": "low-light lenses",
        "meaning": "ống kính chụp/quay trong điều kiện thiếu sáng",
        "partOfSpeech": "n phr"
      },
      {
        "word": "intern",
        "meaning": "thực tập sinh",
        "partOfSpeech": "n"
      },
      {
        "word": "interview shots",
        "meaning": "những cảnh quay phỏng vấn",
        "partOfSpeech": "n phr"
      }
    ]
  },
  {
    "id": "part3-50-52",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 50 - 52",
    "title": "Part 3 - Câu 50 - 52: Chuẩn bị tiệc nghỉ hưu cho đồng nghiệp",
    "audioSrc": "/audio/test3_2024.mp3",
    "startTime": 1286.9,
    "endTime": 1367.83,
    "transcript": [
      {
        "id": "p3-50-l1",
        "speaker": "Woman",
        "text": "Wasim, I know you've been very busy this morning, but did you have time to take care of the photocopies I asked for?",
        "vietnamese": "Wasim, tôi biết sáng nay anh rất bận rộn, nhưng anh đã kịp photo các tài liệu tôi nhờ chưa?"
      },
      {
        "id": "p3-50-l2",
        "speaker": "Man",
        "text": "Oh, yes. Those are all ready.",
        "vietnamese": "Ồ vâng. Tất cả đã sẵn sàng rồi ạ."
      },
      {
        "id": "p3-50-l3",
        "speaker": "Woman",
        "text": "Excellent. Thanks. By the way, how are the preparations coming along for Sabine Hoffman's retirement party?",
        "vietnamese": "Tuyệt vời. Cảm ơn anh. Nhân tiện thì công tác chuẩn bị cho tiệc nghỉ hưu của Sabine Hoffman diễn ra đến đâu rồi?"
      },
      {
        "id": "p3-50-l4",
        "speaker": "Man",
        "text": "Great. I've booked a room and invited everyone on our team to the event. I'll call the caterer next.",
        "vietnamese": "Rất tốt. Tôi đã đặt phòng và mời tất cả mọi người trong nhóm dự sự kiện rồi. Tiếp theo tôi sẽ gọi cho bên dịch vụ tiệc."
      },
      {
        "id": "p3-50-l5",
        "speaker": "Woman",
        "text": "You know, I'm sure she would love to celebrate with her former colleagues from other teams as well if it's not too much trouble to invite them.",
        "vietnamese": "Anh biết đấy, tôi chắc rằng cô ấy cũng rất muốn ăn mừng cùng các đồng nghiệp cũ ở các phòng ban khác nữa nếu việc mời họ không quá phiền phức."
      },
      {
        "id": "p3-50-l6",
        "speaker": "Man",
        "text": "Sure. I booked conference room B, but I'll go ahead and change that.",
        "vietnamese": "Chắc chắn rồi. Tôi đã đặt phòng hội nghị B, nhưng tôi sẽ chuyển sang phòng khác rộng hơn."
      }
    ],
    "questions": [
      {
        "num": 50,
        "question": "What does the woman thank the man for?",
        "vietnameseQuestion": "Người phụ nữ cảm ơn người đàn ông về việc gì?",
        "options": [
          {
            "key": "A",
            "text": "Distributing some fliers",
            "vietnamese": "Phát một số tờ rơi"
          },
          {
            "key": "B",
            "text": "Completing some calculations",
            "vietnamese": "Hoàn thành một số phép tính"
          },
          {
            "key": "C",
            "text": "Placing a catering order",
            "vietnamese": "Đặt hàng dịch vụ ăn uống"
          },
          {
            "key": "D",
            "text": "Preparing some paper copies",
            "vietnamese": "Chuẩn bị một số bản sao tài liệu giấy"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Người phụ nữ hỏi: '...did you have time to take care of the photocopies I asked for?' và khi người đàn ông báo đã xong thì cô nói 'Excellent. Thanks' (cảm ơn vì đã photo tài liệu giấy)."
      },
      {
        "num": 51,
        "question": "Why is a gathering being planned?",
        "vietnameseQuestion": "Tại sao một buổi tụ họp lại đang được lên kế hoạch?",
        "options": [
          {
            "key": "A",
            "text": "A colleague was promoted.",
            "vietnamese": "Một đồng nghiệp vừa được thăng chức."
          },
          {
            "key": "B",
            "text": "The company won an award.",
            "vietnamese": "Công ty vừa giành được một giải thưởng."
          },
          {
            "key": "C",
            "text": "A colleague will be retiring.",
            "vietnamese": "Một đồng nghiệp sắp nghỉ hưu."
          },
          {
            "key": "D",
            "text": "The company will be training employees.",
            "vietnamese": "Công ty sắp đào tạo nhân viên."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Người phụ nữ hỏi: '...how are the preparations coming along for Sabine Hoffman's retirement party?' (tiệc nghỉ hưu của Sabine Hoffman)."
      },
      {
        "num": 52,
        "question": "What does the man imply when he says, \"I booked conference room B\"?",
        "vietnameseQuestion": "Người đàn ông ngụ ý điều gì khi nói: \"Tôi đã đặt phòng hội nghị B\"?",
        "options": [
          {
            "key": "A",
            "text": "A room is too small.",
            "vietnamese": "Căn phòng đó quá nhỏ."
          },
          {
            "key": "B",
            "text": "An invitation is incorrect.",
            "vietnamese": "Lời mời không chính xác."
          },
          {
            "key": "C",
            "text": "No other conference rooms were available.",
            "vietnamese": "Không còn phòng hội nghị nào khác trống."
          },
          {
            "key": "D",
            "text": "Another administrative assistant was too busy.",
            "vietnamese": "Một trợ lý hành chính khác quá bận rộn."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Khi người phụ nữ gợi ý mời thêm nhiều đồng nghiệp từ các nhóm khác, người đàn ông nói 'I booked conference room B, but I'll go ahead and change that', ngụ ý rằng phòng B hiện tại quá nhỏ không đủ sức chứa thêm người."
      }
    ],
    "vocabulary": [
      {
        "word": "photocopy",
        "meaning": "bản sao chụp, photo",
        "partOfSpeech": "n/v"
      },
      {
        "word": "retirement party",
        "meaning": "bữa tiệc chia tay nghỉ hưu",
        "partOfSpeech": "n phr"
      },
      {
        "word": "colleague",
        "meaning": "đồng nghiệp",
        "partOfSpeech": "n"
      },
      {
        "word": "caterer",
        "meaning": "đơn vị cung cấp cỗ tiệc/đồ ăn",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part3-53-55",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 53 - 55",
    "title": "Part 3 - Câu 53 - 55: Khảo sát khách sạn cho kỳ nghỉ dưỡng công ty",
    "audioSrc": "/audio/test3_2024.mp3",
    "startTime": 1367.83,
    "endTime": 1455.13,
    "transcript": [
      {
        "id": "p3-53-l1",
        "speaker": "Man",
        "text": "Hi. I'm Kota Ogawa from Langston Limited. I have an appointment with Ms. Ishikawa to view your hotel facilities for my company's upcoming retreat.",
        "vietnamese": "Xin chào. Tôi là Kota Ogawa đến từ Langston Limited. Tôi có hẹn với cô Ishikawa để xem cơ sở vật chất khách sạn cho chuyến nghỉ dưỡng sắp tới của công ty tôi."
      },
      {
        "id": "p3-53-l2",
        "speaker": "Woman 1",
        "text": "I know that she's been expecting you and she just wrapped up an urgent phone call. She's on her way now.",
        "vietnamese": "Tôi biết cô ấy đang chờ anh và cô ấy vừa hoàn thành một cuộc điện thoại khẩn cấp xong. Cô ấy đang đến ngay đây rồi ạ."
      },
      {
        "id": "p3-53-l3",
        "speaker": "Woman 2 (Ms. Ishikawa)",
        "text": "Hi. You must be Mr. Ogawa. I'm Hikaru Ishikawa. Why don't we see our largest conference room first?",
        "vietnamese": "Chào anh. Chắc hẳn anh là anh Ogawa. Tôi là Hikaru Ishikawa. Chúng ta hãy cùng xem phòng hội nghị lớn nhất trước nhé?"
      },
      {
        "id": "p3-53-l4",
        "speaker": "Man",
        "text": "Great. And I'd also like to look at the guest rooms. All the rooms have a high-speed internet connection, right?",
        "vietnamese": "Tuyệt vời. Và tôi cũng muốn xem qua các phòng nghỉ của khách. Tất cả các phòng đều có kết nối internet tốc độ cao đúng không ạ?"
      },
      {
        "id": "p3-53-l5",
        "speaker": "Woman 2",
        "text": "Yes. And we have a fully equipped recreation area as well.",
        "vietnamese": "Vâng đúng vậy. Và chúng tôi cũng có một khu vực giải trí được trang bị đầy đủ nữa ạ."
      }
    ],
    "questions": [
      {
        "num": 53,
        "question": "What type of event is the man planning?",
        "vietnameseQuestion": "Người đàn ông đang lên kế hoạch cho loại sự kiện nào?",
        "options": [
          {
            "key": "A",
            "text": "A retirement banquet",
            "vietnamese": "Tiệc chiêu đãi nghỉ hưu"
          },
          {
            "key": "B",
            "text": "A company retreat",
            "vietnamese": "Chuyến đi nghỉ dưỡng / dã ngoại của công ty"
          },
          {
            "key": "C",
            "text": "A press conference",
            "vietnamese": "Một cuộc họp báo"
          },
          {
            "key": "D",
            "text": "A fund-raiser",
            "vietnamese": "Sự kiện gây quỹ"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Người đàn ông nói rõ: '...to view your hotel facilities for my company's upcoming retreat' (xem cơ sở vật chất cho kỳ nghỉ dưỡng sắp tới của công ty)."
      },
      {
        "num": 54,
        "question": "Why was Ms. Ishikawa delayed?",
        "vietnameseQuestion": "Tại sao cô Ishikawa lại bị trễ?",
        "options": [
          {
            "key": "A",
            "text": "She was stuck in traffic.",
            "vietnamese": "Cô ấy bị kẹt xe."
          },
          {
            "key": "B",
            "text": "She was at lunch.",
            "vietnamese": "Cô ấy đang ăn trưa."
          },
          {
            "key": "C",
            "text": "She was setting up a room.",
            "vietnamese": "Cô ấy đang sắp xếp phòng."
          },
          {
            "key": "D",
            "text": "She was on the phone.",
            "vietnamese": "Cô ấy đang bận nghe điện thoại."
          }
        ],
        "correctAnswer": "D",
        "explanation": "Lễ tân giải thích: '...she just wrapped up an urgent phone call' (vừa kết thúc cuộc gọi khẩn cấp)."
      },
      {
        "num": 55,
        "question": "What does the man inquire about?",
        "vietnameseQuestion": "Người đàn ông hỏi thăm về điều gì?",
        "options": [
          {
            "key": "A",
            "text": "An airport shuttle",
            "vietnamese": "Xe đưa đón sân bay"
          },
          {
            "key": "B",
            "text": "Late checkout",
            "vietnamese": "Trả phòng muộn"
          },
          {
            "key": "C",
            "text": "A fitness center",
            "vietnamese": "Trung tâm thể hình"
          },
          {
            "key": "D",
            "text": "Internet capabilities",
            "vietnamese": "Khả năng kết nối Internet"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Người đàn ông hỏi: 'All the rooms have a high-speed internet connection, right?' (khả năng kết nối internet tốc độ cao)."
      }
    ],
    "vocabulary": [
      {
        "word": "retreat",
        "meaning": "kỳ nghỉ dưỡng, dã ngoại gắn kết công ty",
        "partOfSpeech": "n"
      },
      {
        "word": "wrap up",
        "meaning": "hoàn thành, kết thúc",
        "partOfSpeech": "phr v"
      },
      {
        "word": "recreation area",
        "meaning": "khu vực vui chơi giải trí",
        "partOfSpeech": "n phr"
      }
    ]
  },
  {
    "id": "part3-56-58",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 56 - 58",
    "title": "Part 3 - Câu 56 - 58: Máy gọt dứa tự phục vụ tại siêu thị",
    "audioSrc": "/audio/test3_2024.mp3",
    "startTime": 1455.13,
    "endTime": 1520.9,
    "transcript": [
      {
        "id": "p3-56-l1",
        "speaker": "Woman",
        "text": "Look at these results. Sales of pineapples have gone up a lot this month at our store.",
        "vietnamese": "Hãy nhìn vào kết quả này xem. Doanh số bán dứa đã tăng rất nhiều trong tháng này tại cửa hàng chúng ta."
      },
      {
        "id": "p3-56-l2",
        "speaker": "Man",
        "text": "It must be the pineapple peeling machine we installed in the fruit aisle. Customers like watching it peel and slice their pineapple for them.",
        "vietnamese": "Chắc hẳn là nhờ chiếc máy gọt vỏ dứa mà chúng ta vừa lắp đặt ở lối đi bán hoa quả. Khách hàng rất thích nhìn nó gọt vỏ và cắt lát dứa cho họ."
      },
      {
        "id": "p3-56-l3",
        "speaker": "Woman",
        "text": "It is a unique experience. I think we should install one in our other two store branches.",
        "vietnamese": "Đúng là một trải nghiệm độc đáo. Tôi nghĩ chúng ta nên lắp đặt một chiếc tương tự tại hai chi nhánh cửa hàng còn lại."
      },
      {
        "id": "p3-56-l4",
        "speaker": "Man",
        "text": "I'm not sure about that. I think the novelty will wear off in a few weeks. Let's wait to see if sales numbers stay high before we invest in any more.",
        "vietnamese": "Tôi không chắc về điều đó lắm. Tôi nghĩ sự mới lạ này sẽ giảm dần sau vài tuần. Hãy chờ xem liệu số liệu doanh số có duy trì ở mức cao không trước khi đầu tư thêm nhé."
      }
    ],
    "questions": [
      {
        "num": 56,
        "question": "Where does the conversation most likely take place?",
        "vietnameseQuestion": "Cuộc trò chuyện có khả năng nhất đang diễn ra ở đâu?",
        "options": [
          {
            "key": "A",
            "text": "At a restaurant",
            "vietnamese": "Tại một nhà hàng"
          },
          {
            "key": "B",
            "text": "At a shipping dock",
            "vietnamese": "Tại bến bốc dỡ hàng"
          },
          {
            "key": "C",
            "text": "At a farm",
            "vietnamese": "Tại một nông trại"
          },
          {
            "key": "D",
            "text": "At a supermarket",
            "vietnamese": "Tại một siêu thị"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Cuộc trò chuyện nhắc đến việc bán hoa quả tại cửa hàng ('fruit aisle', 'sales of pineapples at our store'), cho thấy bối cảnh là một siêu thị (At a supermarket)."
      },
      {
        "num": 57,
        "question": "What does the man say is popular?",
        "vietnameseQuestion": "Người đàn ông nói điều gì đang được ưa chuộng?",
        "options": [
          {
            "key": "A",
            "text": "A colorful package design",
            "vietnamese": "Bao bì thiết kế nhiều màu sắc"
          },
          {
            "key": "B",
            "text": "A self-service machine",
            "vietnamese": "Một chiếc máy tự phục vụ"
          },
          {
            "key": "C",
            "text": "A same-day delivery service",
            "vietnamese": "Dịch vụ giao hàng trong ngày"
          },
          {
            "key": "D",
            "text": "A television advertisement",
            "vietnamese": "Quảng cáo trên truyền hình"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Người đàn ông nói máy gọt dứa lắp ở lối đi cho khách hàng tự sử dụng ('pineapple peeling machine we installed... Customers like watching it peel and slice') là cỗ máy tự phục vụ (A self-service machine)."
      },
      {
        "num": 58,
        "question": "What does the man suggest doing?",
        "vietnameseQuestion": "Người đàn ông gợi ý nên làm gì?",
        "options": [
          {
            "key": "A",
            "text": "Waiting for some data",
            "vietnamese": "Chờ đợi thêm một số dữ liệu"
          },
          {
            "key": "B",
            "text": "Issuing a refund",
            "vietnamese": "Phát hành khoản tiền hoàn trả"
          },
          {
            "key": "C",
            "text": "Hiring more staff",
            "vietnamese": "Tuyển thêm nhân viên"
          },
          {
            "key": "D",
            "text": "Rearranging some merchandise",
            "vietnamese": "Sắp xếp lại một số hàng hóa"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Người đàn ông đề xuất: 'Let's wait to see if sales numbers stay high before we invest in any more' (hãy chờ xem số liệu bán hàng liệu có duy trì ổn định không - waiting for some data)."
      }
    ],
    "vocabulary": [
      {
        "word": "aisle",
        "meaning": "lối đi giữa các quầy hàng",
        "partOfSpeech": "n"
      },
      {
        "word": "peel",
        "meaning": "gọt vỏ, lột vỏ",
        "partOfSpeech": "v"
      },
      {
        "word": "novelty",
        "meaning": "sự mới lạ, tính chất mới mẻ",
        "partOfSpeech": "n"
      },
      {
        "word": "wear off",
        "meaning": "phai nhạt dần, mất dần tác dụng",
        "partOfSpeech": "phr v"
      }
    ]
  },
  {
    "id": "part3-59-61",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 59 - 61",
    "title": "Part 3 - Câu 59 - 61: Tính năng thông báo lịch hẹn nha khoa trực tuyến",
    "audioSrc": "/audio/test3_2024.mp3",
    "startTime": 1520.9,
    "endTime": 1601.99,
    "transcript": [
      {
        "id": "p3-59-l1",
        "speaker": "Man",
        "text": "Ingrid, we've had three patients this week who had to cancel their dental appointments at the last minute.",
        "vietnamese": "Ingrid, tuần này phòng khám chúng ta có 3 bệnh nhân phải hủy hẹn khám răng vào phút chót."
      },
      {
        "id": "p3-59-l2",
        "speaker": "Woman",
        "text": "Yes, that's a problem. Other patients might have taken those available appointments if we'd been able to contact them in time.",
        "vietnamese": "Vâng, đó thực sự là một vấn đề. Các bệnh nhân khác có thể đã nhận những khung giờ khám trống đó nếu chúng ta kịp thời liên hệ với họ."
      },
      {
        "id": "p3-59-l3",
        "speaker": "Man",
        "text": "You know, I have an idea. I recently scheduled a doctor's visit online, and there was an option to receive a text message notification if an earlier slot became available. You just have to check a box. What do you think about something like that?",
        "vietnamese": "Cô biết không, tôi có một ý tưởng này. Gần đây tôi có đặt lịch khám bác sĩ trực tuyến, và trên đó có tùy chọn nhận thông báo qua tin nhắn nếu có khung giờ khám sớm hơn bị trống. Người dùng chỉ cần tích vào một ô chọn. Cô nghĩ sao về một tính năng như thế?"
      },
      {
        "id": "p3-59-l4",
        "speaker": "Woman",
        "text": "That would be helpful. I have some time this afternoon. I'll look into software packages that include that feature.",
        "vietnamese": "Điều đó sẽ rất hữu ích đấy. Chiều nay tôi có một chút thời gian. Tôi sẽ tìm hiểu các gói phần mềm có tích hợp tính năng đó."
      }
    ],
    "questions": [
      {
        "num": 59,
        "question": "What are the speakers discussing?",
        "vietnameseQuestion": "Những người nói đang thảo luận về vấn đề gì?",
        "options": [
          {
            "key": "A",
            "text": "Relocating their office",
            "vietnamese": "Chuyển địa điểm văn phòng"
          },
          {
            "key": "B",
            "text": "Attracting new patients",
            "vietnamese": "Thu hút thêm bệnh nhân mới"
          },
          {
            "key": "C",
            "text": "Scheduling appointments",
            "vietnamese": "Việc lên lịch hẹn khám"
          },
          {
            "key": "D",
            "text": "Finding qualified staff",
            "vietnamese": "Tìm kiếm nhân viên đủ điều kiện"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Cuộc trao đổi bàn về việc bệnh nhân hủy hẹn khám răng và giải pháp sắp xếp, thông báo lịch hẹn trống cho bệnh nhân khác (Scheduling appointments)."
      },
      {
        "num": 60,
        "question": "Why does the man say, \"You just have to check a box\"?",
        "vietnameseQuestion": "Tại sao người đàn ông lại nói: \"Bạn chỉ cần tích vào một ô chọn\"?",
        "options": [
          {
            "key": "A",
            "text": "To request some performance feedback",
            "vietnamese": "Để yêu cầu phản hồi về hiệu suất"
          },
          {
            "key": "B",
            "text": "To express concern about a procedure",
            "vietnamese": "Để bày tỏ lo ngại về một quy trình"
          },
          {
            "key": "C",
            "text": "To correct a misunderstanding",
            "vietnamese": "Để đính chính một sự hiểu lầm"
          },
          {
            "key": "D",
            "text": "To support a suggestion",
            "vietnamese": "Để bổ sung lý lẽ ủng hộ cho một gợi ý"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Người đàn ông nêu tính năng thông báo và nhấn mạnh 'You just have to check a box' nhằm cho thấy thao tác vô cùng đơn giản, qua đó thuyết phục đồng nghiệp ủng hộ giải pháp (To support a suggestion)."
      },
      {
        "num": 61,
        "question": "What does the woman offer to do this afternoon?",
        "vietnameseQuestion": "Người phụ nữ đề nghị làm gì vào chiều nay?",
        "options": [
          {
            "key": "A",
            "text": "Investigate options",
            "vietnamese": "Tìm hiểu các lựa chọn phần mềm"
          },
          {
            "key": "B",
            "text": "Revise a budget",
            "vietnamese": "Chỉnh sửa ngân sách"
          },
          {
            "key": "C",
            "text": "Contact a patient",
            "vietnamese": "Liên hệ với bệnh nhân"
          },
          {
            "key": "D",
            "text": "Update a Web site",
            "vietnamese": "Cập nhật trang web"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Người phụ nữ nói: 'I have some time this afternoon. I'll look into software packages that include that feature' (tìm hiểu, khảo sát các gói phần mềm - investigate options)."
      }
    ],
    "vocabulary": [
      {
        "word": "dental appointment",
        "meaning": "cuộc hẹn khám nha khoa",
        "partOfSpeech": "n phr"
      },
      {
        "word": "at the last minute",
        "meaning": "vào phút chót",
        "partOfSpeech": "idiom"
      },
      {
        "word": "slot",
        "meaning": "khung giờ trống, vị trí",
        "partOfSpeech": "n"
      },
      {
        "word": "look into",
        "meaning": "nghiên cứu, tìm hiểu",
        "partOfSpeech": "phr v"
      }
    ]
  },
  {
    "id": "part3-62-64",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 62 - 64",
    "title": "Part 3 - Câu 62 - 64: Mua quà tặng năm mới cho nhân viên",
    "audioSrc": "/audio/test3_2024.mp3",
    "startTime": 1601.99,
    "endTime": 1693.32,
    "graphicImage": "/images/intensive/test3_2024/q62_64.png",
    "image": "/images/intensive/test3_2024/q62_64.png",
    "transcript": [
      {
        "id": "p3-62-l1",
        "speaker": "Man",
        "text": "Hi, Raquel. Have you had a chance to look for something I could buy the employees for the new year? I want to be sure I thank everyone for their hard work.",
        "vietnamese": "Chào Raquel. Cô đã có dịp tìm món gì đó để tôi mua tặng nhân viên nhân dịp năm mới chưa? Tôi muốn chắc chắn mình cảm ơn mọi người vì sự làm việc chăm chỉ của họ."
      },
      {
        "id": "p3-62-l2",
        "speaker": "Woman",
        "text": "Well, a good quality travel mug would be appreciated.",
        "vietnamese": "À, một chiếc cốc giữ nhiệt du lịch chất lượng tốt chắc chắn sẽ được mọi người yêu thích."
      },
      {
        "id": "p3-62-l3",
        "speaker": "Man",
        "text": "Interesting. Which one would you recommend?",
        "vietnamese": "Thú vị đấy. Cô gợi ý mẫu nào?"
      },
      {
        "id": "p3-62-l4",
        "speaker": "Woman",
        "text": "Take a look at this brochure. This company has a variety of designs, sea animals, sky scenes. I like the medium mug with the Desert Roaming design.",
        "vietnamese": "Anh hãy xem tập tài liệu quảng cáo này nhé. Công ty này có nhiều mẫu mã đa dạng, sinh vật biển, cảnh bầu trời. Tôi thích chiếc cốc cỡ vừa với thiết kế Sa mạc rong ruổi (Desert Roaming)."
      },
      {
        "id": "p3-62-l5",
        "speaker": "Man",
        "text": "That is nice. I'll sign off on that order request once you fill out the paperwork.",
        "vietnamese": "Mẫu đó đẹp đấy. Tôi sẽ ký duyệt yêu cầu đặt hàng đó ngay khi cô hoàn thành xong thủ tục giấy tờ."
      }
    ],
    "questions": [
      {
        "num": 62,
        "question": "Who will the man give some gifts to?",
        "vietnameseQuestion": "Người đàn ông sẽ tặng quà cho ai?",
        "options": [
          {
            "key": "A",
            "text": "Conference participants",
            "vietnamese": "Những người tham gia hội nghị"
          },
          {
            "key": "B",
            "text": "Employees",
            "vietnamese": "Các nhân viên"
          },
          {
            "key": "C",
            "text": "Contest winners",
            "vietnamese": "Những người chiến thắng cuộc thi"
          },
          {
            "key": "D",
            "text": "Visitors",
            "vietnamese": "Khách tham quan"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Người đàn ông nói: '...something I could buy the employees for the new year' (mua tặng cho các nhân viên)."
      },
      {
        "num": 63,
        "question": "Look at the graphic. How much is the mug that the woman likes?",
        "vietnameseQuestion": "Nhìn vào hình ảnh. Chiếc cốc mà người phụ nữ thích có giá bao nhiêu?",
        "options": [
          {
            "key": "A",
            "text": "$15",
            "vietnamese": "15 đô la"
          },
          {
            "key": "B",
            "text": "$20",
            "vietnamese": "20 đô la"
          },
          {
            "key": "C",
            "text": "$23",
            "vietnamese": "23 đô la"
          },
          {
            "key": "D",
            "text": "$25",
            "vietnamese": "25 đô la"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Người phụ nữ nói cô ấy thích mẫu 'medium mug with the Desert Roaming design'. Nhìn vào bảng giá, mẫu Desert Roaming (medium mug) có giá là $23."
      },
      {
        "num": 64,
        "question": "What does the man say he will do?",
        "vietnameseQuestion": "Người đàn ông nói anh ấy sẽ làm gì?",
        "options": [
          {
            "key": "A",
            "text": "Submit a registration form",
            "vietnamese": "Nộp đơn đăng ký"
          },
          {
            "key": "B",
            "text": "Adjust a work schedule",
            "vietnamese": "Điều chỉnh lịch làm việc"
          },
          {
            "key": "C",
            "text": "Approve an order",
            "vietnamese": "Ký phê duyệt đơn đặt hàng"
          },
          {
            "key": "D",
            "text": "Ask for a bulk-pricing rate",
            "vietnamese": "Hỏi xin mức giá mua số lượng lớn"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Người đàn ông nói: 'I'll sign off on that order request once you fill out the paperwork' (Ký duyệt đơn đặt hàng - Approve an order)."
      }
    ],
    "vocabulary": [
      {
        "word": "travel mug",
        "meaning": "cốc giữ nhiệt khi đi du lịch/đi làm",
        "partOfSpeech": "n phr"
      },
      {
        "word": "sign off on",
        "meaning": "chính thức ký phê duyệt",
        "partOfSpeech": "phr v"
      },
      {
        "word": "brochure",
        "meaning": "tờ gấp quảng cáo giới thiệu sản phẩm",
        "partOfSpeech": "n"
      },
      {
        "word": "paperwork",
        "meaning": "thủ tục giấy tờ",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part3-65-67",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 65 - 67",
    "title": "Part 3 - Câu 65 - 67: Thay đổi lộ trình quay phim cảnh lái xe",
    "audioSrc": "/audio/test3_2024.mp3",
    "startTime": 1693.32,
    "endTime": 1782.7,
    "graphicImage": "/images/intensive/test3_2024/q65_67.png",
    "image": "/images/intensive/test3_2024/q65_67.png",
    "transcript": [
      {
        "id": "p3-65-l1",
        "speaker": "Man",
        "text": "Here's the map that you requested for next week's shoot.",
        "vietnamese": "Đây là bản đồ mà cô yêu cầu cho buổi quay phim vào tuần tới."
      },
      {
        "id": "p3-65-l2",
        "speaker": "Woman",
        "text": "For the driving scene? Great. Let's see. The actors will be driving north on Maple Street.",
        "vietnamese": "Cho cảnh lái xe phải không? Tuyệt quá. Để xem nào. Các diễn viên sẽ lái xe về hướng bắc trên Phố Maple."
      },
      {
        "id": "p3-65-l3",
        "speaker": "Man",
        "text": "Is something wrong?",
        "vietnamese": "Có vấn đề gì sao cô?"
      },
      {
        "id": "p3-65-l4",
        "speaker": "Woman",
        "text": "We may need to alter the route so it'll be less difficult for our camera operators to follow the action.",
        "vietnamese": "Chúng ta có thể cần thay đổi lộ trình để các quay phim ít gặp khó khăn hơn khi bám theo hành động."
      },
      {
        "id": "p3-65-l5",
        "speaker": "Man",
        "text": "Okay. What are you thinking?",
        "vietnamese": "Được rồi. Cô đang nghĩ thế nào?"
      },
      {
        "id": "p3-65-l6",
        "speaker": "Woman",
        "text": "Instead of turning left on Elm Lane, let's have them turn right and park in front of the hair salon.",
        "vietnamese": "Thay vì rẽ trái vào Ngõ Elm, hãy để họ rẽ phải và đỗ xe trước tiệm làm tóc."
      },
      {
        "id": "p3-65-l7",
        "speaker": "Man",
        "text": "Okay. I'll arrange for that road to be closed while we're working and alert the business owners.",
        "vietnamese": "Được rồi. Tôi sẽ thu xếp đóng đoạn đường đó trong lúc chúng ta làm việc và thông báo cho các chủ doanh nghiệp."
      }
    ],
    "questions": [
      {
        "num": 65,
        "question": "What industry do the speakers most likely work in?",
        "vietnameseQuestion": "Những người nói có khả năng nhất đang làm việc trong ngành nào?",
        "options": [
          {
            "key": "A",
            "text": "Tourism",
            "vietnamese": "Du lịch"
          },
          {
            "key": "B",
            "text": "Film",
            "vietnamese": "Điện ảnh / Sản xuất phim"
          },
          {
            "key": "C",
            "text": "Engineering",
            "vietnamese": "Kỹ thuật"
          },
          {
            "key": "D",
            "text": "Transportation",
            "vietnamese": "Giao thông vận tải"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đoạn thoại nhắc đến các thuật ngữ như 'next week's shoot' (buổi quay tuần tới), 'driving scene' (cảnh lái xe), 'actors' (diễn viên), 'camera operators' (nhân viên quay phim), chứng tỏ họ làm việc trong ngành điện ảnh/phim ảnh (Film)."
      },
      {
        "num": 66,
        "question": "Why does the woman want to make a change?",
        "vietnameseQuestion": "Tại sao người phụ nữ lại muốn thay đổi?",
        "options": [
          {
            "key": "A",
            "text": "Some equipment is not available.",
            "vietnamese": "Một số thiết bị không có sẵn."
          },
          {
            "key": "B",
            "text": "A new business is opening.",
            "vietnamese": "Một cơ sở kinh doanh mới sắp mở."
          },
          {
            "key": "C",
            "text": "A process will be easier.",
            "vietnamese": "Một quy trình sẽ trở nên dễ dàng hơn."
          },
          {
            "key": "D",
            "text": "Costs will be lower.",
            "vietnamese": "Chi phí sẽ thấp hơn."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Người phụ nữ giải thích: '...alter the route so it'll be less difficult for our camera operators to follow the action' (để việc ghi hình bám theo diễn biến đỡ khó khăn hơn - a process will be easier)."
      },
      {
        "num": 67,
        "question": "Look at the graphic. Which road should be closed?",
        "vietnameseQuestion": "Nhìn vào sơ đồ. Tuyến đường nào cần phải được phong tỏa / đóng lại?",
        "options": [
          {
            "key": "A",
            "text": "Bangalore Avenue",
            "vietnamese": "Đại lộ Bangalore"
          },
          {
            "key": "B",
            "text": "Dublin Avenue",
            "vietnamese": "Đại lộ Dublin"
          },
          {
            "key": "C",
            "text": "Polly Street",
            "vietnamese": "Đường Polly"
          },
          {
            "key": "D",
            "text": "Elm Lane",
            "vietnamese": "Ngõ Elm"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Người phụ nữ nói cho xe rẽ phải và đỗ trước tiệm làm tóc ('park in front of the hair salon'). Nhìn vào bản đồ, con đường chạy ngay phía trước 'Hair Salon' là Đại lộ Bangalore (Bangalore Avenue)."
      }
    ],
    "vocabulary": [
      {
        "word": "shoot",
        "meaning": "buổi quay phim, chụp hình",
        "partOfSpeech": "n"
      },
      {
        "word": "camera operator",
        "meaning": "người quay phim",
        "partOfSpeech": "n phr"
      },
      {
        "word": "alter",
        "meaning": "thay đổi, điều chỉnh",
        "partOfSpeech": "v"
      },
      {
        "word": "hair salon",
        "meaning": "tiệm làm tóc",
        "partOfSpeech": "n phr"
      }
    ]
  },
  {
    "id": "part3-68-70",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 68 - 70",
    "title": "Part 3 - Câu 68 - 70: Sửa lỗi màn chơi trong trò chơi điện tử",
    "audioSrc": "/audio/test3_2024.mp3",
    "startTime": 1782.7,
    "endTime": 1867.7,
    "graphicImage": "/images/intensive/test3_2024/q68_70.png",
    "image": "/images/intensive/test3_2024/q68_70.png",
    "transcript": [
      {
        "id": "p3-68-l1",
        "speaker": "Woman",
        "text": "Hi, Pablo. I wanted to talk to you about the video game we designed. The one we're launching soon.",
        "vietnamese": "Chào Pablo. Tôi muốn nói chuyện với anh về trò chơi điện tử mà chúng ta đã thiết kế. Trò chơi mà chúng ta sắp ra mắt ấy."
      },
      {
        "id": "p3-68-l2",
        "speaker": "Man",
        "text": "Sure. Did something come up?",
        "vietnamese": "Chắc chắn rồi. Có chuyện gì phát sinh sao?"
      },
      {
        "id": "p3-68-l3",
        "speaker": "Woman",
        "text": "Well, I think the jungle level looks great. But in the underwater level, there's a problem with the part where the characters discover the lost city in the ocean. As I was going over the layout, I found a glitch in the gameplay.",
        "vietnamese": "À, tôi thấy màn chơi rừng rậm trông rất tuyệt. Nhưng ở màn chơi dưới nước, có một lỗi ở phần các nhân vật khám phá thành phố bị lãng quên dưới đại dương. Khi tôi xem xét kỹ bố cục, tôi phát hiện ra một lỗi trục trặc trong quá trình chơi."
      },
      {
        "id": "p3-68-l4",
        "speaker": "Man",
        "text": "Oh, okay. We still have time to fix it.",
        "vietnamese": "Ồ, được rồi. Chúng ta vẫn còn thời gian để khắc phục nó."
      },
      {
        "id": "p3-68-l5",
        "speaker": "Woman",
        "text": "Yes, but we should work on it as soon as possible. I could put some extra time in over the weekend. How about you?",
        "vietnamese": "Đúng vậy, nhưng chúng ta nên bắt tay vào làm càng sớm càng tốt. Tôi có thể dành thêm thời gian làm việc vào cuối tuần này. Còn anh thì sao?"
      },
      {
        "id": "p3-68-l6",
        "speaker": "Man",
        "text": "Probably. Just let me check my calendar.",
        "vietnamese": "Chắc là được. Để tôi kiểm tra lại lịch của mình đã nhé."
      }
    ],
    "questions": [
      {
        "num": 68,
        "question": "What are the speakers preparing for?",
        "vietnameseQuestion": "Những người nói đang chuẩn bị cho sự kiện gì?",
        "options": [
          {
            "key": "A",
            "text": "A video-game convention",
            "vietnamese": "Hội nghị trò chơi điện tử"
          },
          {
            "key": "B",
            "text": "An in-store demonstration",
            "vietnamese": "Buổi trình diễn tại cửa hàng"
          },
          {
            "key": "C",
            "text": "A product launch",
            "vietnamese": "Một đợt ra mắt sản phẩm mới"
          },
          {
            "key": "D",
            "text": "A focus-group session",
            "vietnamese": "Một buổi thảo luận nhóm tập trung"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Người phụ nữ đề cập: '...the video game we designed. The one we're launching soon' (chuẩn bị ra mắt sản phẩm game mới - A product launch)."
      },
      {
        "num": 69,
        "question": "Look at the graphic. Which level is the woman concerned about?",
        "vietnameseQuestion": "Nhìn vào bảng hình ảnh. Người phụ nữ đang lo ngại về màn chơi nào?",
        "options": [
          {
            "key": "A",
            "text": "Level 1",
            "vietnamese": "Cấp độ 1"
          },
          {
            "key": "B",
            "text": "Level 2",
            "vietnamese": "Cấp độ 2"
          },
          {
            "key": "C",
            "text": "Level 3",
            "vietnamese": "Cấp độ 3"
          },
          {
            "key": "D",
            "text": "Level 4",
            "vietnamese": "Cấp độ 4"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Người phụ nữ nói màn chơi gặp sự cố là màn dưới đáy biển: 'in the underwater level... discover the lost city in the ocean'. Nhìn vào bảng, màn chơi 'Ocean Kingdom' (Vương quốc đại dương) tương ứng với Level 2."
      },
      {
        "num": 70,
        "question": "What does the woman suggest doing?",
        "vietnameseQuestion": "Người phụ nữ đề xuất làm gì?",
        "options": [
          {
            "key": "A",
            "text": "Contacting a colleague",
            "vietnamese": "Liên hệ với một đồng nghiệp"
          },
          {
            "key": "B",
            "text": "Postponing an event",
            "vietnamese": "Hoãn lại một sự kiện"
          },
          {
            "key": "C",
            "text": "Working over the weekend",
            "vietnamese": "Làm việc thêm vào dịp cuối tuần"
          },
          {
            "key": "D",
            "text": "Making travel arrangements",
            "vietnamese": "Thu xếp chuyến đi"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Người phụ nữ đề xuất: 'I could put some extra time in over the weekend. How about you?' (làm việc thêm vào cuối tuần để kịp sửa lỗi)."
      }
    ],
    "vocabulary": [
      {
        "word": "launch",
        "meaning": "ra mắt, tung ra thị trường",
        "partOfSpeech": "v"
      },
      {
        "word": "glitch",
        "meaning": "lỗi phần mềm nhỏ, sự cố bất ngờ",
        "partOfSpeech": "n"
      },
      {
        "word": "gameplay",
        "meaning": "lối chơi, trải nghiệm khi chơi game",
        "partOfSpeech": "n"
      },
      {
        "word": "layout",
        "meaning": "bố cục, thiết kế sắp đặt",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part4-71-73",
    "part": 4,
    "partTitle": "Part 4: Bài nói ngắn",
    "questionRange": "Câu 71 - 73",
    "title": "Part 4 - Câu 71 - 73: Quảng cáo dịch vụ sửa chữa và bảo dưỡng ô tô",
    "audioSrc": "/audio/test3_2024.mp3",
    "startTime": 1867.7,
    "endTime": 1981.7,
    "transcript": [
      {
        "id": "p4-71-l1",
        "speaker": "Speaker",
        "text": "At Volkov Tire and Auto Service, we're proud to serve the Livingstone Valley area. We offer quality automotive maintenance and repairs at affordable prices.",
        "vietnamese": "Tại Dịch vụ Lốp và Ô tô Volkov, chúng tôi tự hào được phục vụ khu vực Thung lũng Livingstone. Chúng tôi cung cấp dịch vụ bảo dưỡng và sửa chữa ô tô chất lượng với mức giá phải chăng."
      },
      {
        "id": "p4-71-l2",
        "speaker": "Speaker",
        "text": "Our mechanics are the best in the industry, and our dedication to customer service shows.",
        "vietnamese": "Đội ngũ thợ cơ khí của chúng tôi là những người giỏi nhất trong ngành, và sự tận tụy trong việc phục vụ khách hàng luôn được thể hiện rõ ràng."
      },
      {
        "id": "p4-71-l3",
        "speaker": "Speaker",
        "text": "Once again, readers of the Livingstone Valley Chronicle have awarded us with the title of Best in the Valley. That's five years in a row.",
        "vietnamese": "Một lần nữa, độc giả của tờ Biên niên sử Thung lũng Livingstone đã trao tặng chúng tôi danh hiệu Doanh nghiệp Xuất sắc nhất Thung lũng. Đó là 5 năm liên tiếp rồi."
      },
      {
        "id": "p4-71-l4",
        "speaker": "Speaker",
        "text": "And to celebrate, we're offering 10% off all oil changes in July.",
        "vietnamese": "Và để ăn mừng, chúng tôi giảm giá 10% cho tất cả dịch vụ thay dầu trong tháng Bảy."
      },
      {
        "id": "p4-71-l5",
        "speaker": "Speaker",
        "text": "To get this deal, you must schedule an appointment, either by phone or online. Appointments are filling up fast.",
        "vietnamese": "Để nhận được ưu đãi này, quý vị phải đặt lịch hẹn trước, qua điện thoại hoặc trực tuyến. Lịch hẹn đang kín chỗ rất nhanh."
      }
    ],
    "questions": [
      {
        "num": 71,
        "question": "What kind of business is being advertised?",
        "vietnameseQuestion": "Loại hình kinh doanh nào đang được quảng cáo?",
        "options": [
          {
            "key": "A",
            "text": "A health-care clinic",
            "vietnamese": "Phòng khám chăm sóc sức khỏe"
          },
          {
            "key": "B",
            "text": "A computer service store",
            "vietnamese": "Cửa hàng dịch vụ máy tính"
          },
          {
            "key": "C",
            "text": "An auto repair shop",
            "vietnamese": "Xưởng sửa chữa ô tô"
          },
          {
            "key": "D",
            "text": "A real estate agency",
            "vietnamese": "Đại lý bất động sản"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Quảng cáo giới thiệu: 'Volkov Tire and Auto Service... offer quality automotive maintenance and repairs' (dịch vụ bảo dưỡng và sửa chữa ô tô - An auto repair shop)."
      },
      {
        "num": 72,
        "question": "Why is a business celebrating?",
        "vietnameseQuestion": "Tại sao cơ sở kinh doanh này lại đang ăn mừng?",
        "options": [
          {
            "key": "A",
            "text": "It has been operating for ten years.",
            "vietnamese": "Doanh nghiệp đã hoạt động được 10 năm."
          },
          {
            "key": "B",
            "text": "It has doubled its customer base.",
            "vietnamese": "Doanh nghiệp đã tăng gấp đôi lượng khách hàng."
          },
          {
            "key": "C",
            "text": "It has won an award.",
            "vietnamese": "Doanh nghiệp vừa giành được một giải thưởng."
          },
          {
            "key": "D",
            "text": "It has opened a new location.",
            "vietnamese": "Doanh nghiệp đã khai trương một địa điểm mới."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Người nói cho biết: '...readers of the Livingstone Valley Chronicle have awarded us with the title of Best in the Valley' (được độc giả trao tặng danh hiệu xuất sắc nhất - It has won an award)."
      },
      {
        "num": 73,
        "question": "What do the listeners need to do to obtain a discount?",
        "vietnameseQuestion": "Thính giả cần làm gì để nhận được mức giảm giá?",
        "options": [
          {
            "key": "A",
            "text": "Make an appointment",
            "vietnamese": "Đặt trước một lịch hẹn"
          },
          {
            "key": "B",
            "text": "Print out a coupon",
            "vietnamese": "In một phiếu giảm giá"
          },
          {
            "key": "C",
            "text": "Attend an open house",
            "vietnamese": "Tham dự sự kiện mở cửa"
          },
          {
            "key": "D",
            "text": "Refer a friend",
            "vietnamese": "Giới thiệu một người bạn"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Người nói nêu điều kiện: 'To get this deal, you must schedule an appointment, either by phone or online' (phải đặt lịch hẹn trước - Make an appointment)."
      }
    ],
    "vocabulary": [
      {
        "word": "automotive maintenance",
        "meaning": "bảo dưỡng xe ô tô",
        "partOfSpeech": "n phr"
      },
      {
        "word": "mechanic",
        "meaning": "thợ cơ khí, thợ sửa xe",
        "partOfSpeech": "n"
      },
      {
        "word": "in a row",
        "meaning": "liên tiếp",
        "partOfSpeech": "idiom"
      },
      {
        "word": "oil change",
        "meaning": "thay dầu nhớt xe",
        "partOfSpeech": "n phr"
      }
    ]
  },
  {
    "id": "part4-74-76",
    "part": 4,
    "partTitle": "Part 4: Bài nói ngắn",
    "questionRange": "Câu 74 - 76",
    "title": "Part 4 - Câu 74 - 76: Podcast chiến lược tiếp thị truyền thông xã hội",
    "audioSrc": "/audio/test3_2024.mp3",
    "startTime": 1981.7,
    "endTime": 2064.5,
    "transcript": [
      {
        "id": "p4-74-l1",
        "speaker": "Speaker",
        "text": "Today's episode of the Financial Parade podcast is about the possibilities and limitations of marketing on social media.",
        "vietnamese": "Tập phát sóng hôm nay của chương trình podcast Financial Parade sẽ nói về những tiềm năng và hạn chế của việc tiếp thị trên mạng xã hội."
      },
      {
        "id": "p4-74-l2",
        "speaker": "Speaker",
        "text": "How can businesses improve on their marketing efforts and do a better job of reaching their target audience?",
        "vietnamese": "Làm thế nào để các doanh nghiệp có thể cải thiện nỗ lực tiếp thị và tiếp cận đối tượng khách hàng mục tiêu hiệu quả hơn?"
      },
      {
        "id": "p4-74-l3",
        "speaker": "Speaker",
        "text": "To help us answer this, we are joined by Magali Bertrand, marketing director at Blue Lane Consulting.",
        "vietnamese": "Để giúp chúng ta trả lời câu hỏi này, chúng tôi xin chào đón bà Magali Bertrand, giám đốc tiếp thị tại Blue Lane Consulting."
      },
      {
        "id": "p4-74-l4",
        "speaker": "Speaker",
        "text": "Ms. Bertrand is a frequent guest on the show because she is good at taking complex business principles and breaking them down to offer clear, simple advice.",
        "vietnamese": "Bà Bertrand là khách mời quen thuộc của chương trình bởi bà rất giỏi trong việc phân tích các nguyên lý kinh doanh phức tạp thành những lời khuyên rõ ràng, dễ hiểu."
      },
      {
        "id": "p4-74-l5",
        "speaker": "Speaker",
        "text": "But first, I'd like to discuss the results of my recent survey where you all shared your approaches to product placement.",
        "vietnamese": "Nhưng trước tiên, tôi muốn thảo luận về kết quả của cuộc khảo sát gần đây nơi quý vị đã chia sẻ các phương pháp tiếp cận vị trí đặt sản phẩm của mình."
      }
    ],
    "questions": [
      {
        "num": 74,
        "question": "What is the podcast episode about?",
        "vietnameseQuestion": "Tập podcast hôm nay nói về chủ đề gì?",
        "options": [
          {
            "key": "A",
            "text": "Marketing strategies",
            "vietnamese": "Các chiến lược tiếp thị"
          },
          {
            "key": "B",
            "text": "Commercial real estate",
            "vietnamese": "Bất động sản thương mại"
          },
          {
            "key": "C",
            "text": "Customer loyalty",
            "vietnamese": "Lòng trung thành của khách hàng"
          },
          {
            "key": "D",
            "text": "Staff management",
            "vietnamese": "Quản lý nhân sự"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Người dẫn chương trình giới thiệu: '...about the possibilities and limitations of marketing on social media. How can businesses improve on their marketing efforts...' (chiến lược tiếp thị - Marketing strategies)."
      },
      {
        "num": 75,
        "question": "What does the speaker say Ms. Bertrand is good at?",
        "vietnameseQuestion": "Người nói cho biết bà Bertrand giỏi về điều gì?",
        "options": [
          {
            "key": "A",
            "text": "Designing billboard ads",
            "vietnamese": "Thiết kế biển quảng cáo ngoài trời"
          },
          {
            "key": "B",
            "text": "Solving budget problems",
            "vietnamese": "Giải quyết các vấn đề ngân sách"
          },
          {
            "key": "C",
            "text": "Explaining complicated ideas",
            "vietnamese": "Giải thích các ý tưởng phức tạp một cách dễ hiểu"
          },
          {
            "key": "D",
            "text": "Creating training programs",
            "vietnamese": "Xây dựng các chương trình đào tạo"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Người nói khen ngợi: '...she is good at taking complex business principles and breaking them down to offer clear, simple advice' (giỏi phân tích các nguyên lý phức tạp thành lời khuyên đơn giản - Explaining complicated ideas)."
      },
      {
        "num": 76,
        "question": "What will the speaker discuss next?",
        "vietnameseQuestion": "Người nói sẽ thảo luận về điều gì tiếp theo?",
        "options": [
          {
            "key": "A",
            "text": "Breaking news",
            "vietnamese": "Tin nóng hổi"
          },
          {
            "key": "B",
            "text": "Survey results",
            "vietnamese": "Kết quả khảo sát"
          },
          {
            "key": "C",
            "text": "Upcoming contests",
            "vietnamese": "Các cuộc thi sắp tới"
          },
          {
            "key": "D",
            "text": "Future episode topics",
            "vietnamese": "Chủ đề các tập tiếp theo"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Người nói thông báo chuyển tiếp: 'But first, I'd like to discuss the results of my recent survey...' (thảo luận về kết quả cuộc khảo sát gần đây - Survey results)."
      }
    ],
    "vocabulary": [
      {
        "word": "target audience",
        "meaning": "đối tượng khán giả/khách hàng mục tiêu",
        "partOfSpeech": "n phr"
      },
      {
        "word": "break down",
        "meaning": "phân tích, chia nhỏ ra thành phần dễ hiểu",
        "partOfSpeech": "phr v"
      },
      {
        "word": "survey results",
        "meaning": "kết quả khảo sát",
        "partOfSpeech": "n phr"
      },
      {
        "word": "product placement",
        "meaning": "quảng cáo lồng ghép sản phẩm",
        "partOfSpeech": "n phr"
      }
    ]
  },
  {
    "id": "part4-77-79",
    "part": 4,
    "partTitle": "Part 4: Bài nói ngắn",
    "questionRange": "Câu 77 - 79",
    "title": "Part 4 - Câu 77 - 79: Đặt cây cảnh văn phòng nâng cao hiệu suất làm việc",
    "audioSrc": "/audio/test3_2024.mp3",
    "startTime": 2064.5,
    "endTime": 2128.27,
    "transcript": [
      {
        "id": "p4-77-l1",
        "speaker": "Speaker",
        "text": "Next Wednesday, Arlington Landscaping will deliver the potted plants we ordered to brighten up the common areas in our office.",
        "vietnamese": "Thứ Tư tuần sau, công ty Cảnh quan Arlington sẽ giao những chậu cây cảnh mà chúng ta đã đặt mua để làm bừng sáng các khu vực sinh hoạt chung trong văn phòng."
      },
      {
        "id": "p4-77-l2",
        "speaker": "Speaker",
        "text": "Studies have shown that plants are great stress relievers and can increase workplace productivity.",
        "vietnamese": "Các nghiên cứu đã chỉ ra rằng cây xanh giúp giải tỏa căng thẳng rất tốt và có thể gia tăng năng suất làm việc tại nơi làm việc."
      },
      {
        "id": "p4-77-l3",
        "speaker": "Speaker",
        "text": "We think you'll find that this is a great improvement to our work environment.",
        "vietnamese": "Chúng tôi tin rằng quý vị sẽ nhận thấy đây là một cải tiến tuyệt vời đối với môi trường làm việc của chúng ta."
      },
      {
        "id": "p4-77-l4",
        "speaker": "Speaker",
        "text": "If you'd like a small plant for your desk, the company will cover the cost.",
        "vietnamese": "Nếu quý vị muốn có một chậu cây nhỏ cho bàn làm việc của mình, công ty sẽ chi trả toàn bộ chi phí."
      },
      {
        "id": "p4-77-l5",
        "speaker": "Speaker",
        "text": "To choose your plant, please check the catalog in the staff room. It has photos and care instructions.",
        "vietnamese": "Để chọn cây, xin vui lòng xem danh mục sách mẫu trong phòng nhân viên. Trong đó có hình ảnh và hướng dẫn chăm sóc cụ thể."
      }
    ],
    "questions": [
      {
        "num": 77,
        "question": "What will be delivered next Wednesday?",
        "vietnameseQuestion": "Mặt hàng nào sẽ được giao đến vào thứ Tư tới?",
        "options": [
          {
            "key": "A",
            "text": "Office furniture",
            "vietnamese": "Đồ nội thất văn phòng"
          },
          {
            "key": "B",
            "text": "Color printers",
            "vietnamese": "Máy in màu"
          },
          {
            "key": "C",
            "text": "Potted plants",
            "vietnamese": "Các chậu cây cảnh"
          },
          {
            "key": "D",
            "text": "Framed artwork",
            "vietnamese": "Tranh nghệ thuật đóng khung"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Người nói thông báo: 'Next Wednesday, Arlington Landscaping will deliver the potted plants we ordered...' (giao các chậu cây cảnh đã đặt mua - Potted plants)."
      },
      {
        "num": 78,
        "question": "What does the speaker say about productivity?",
        "vietnameseQuestion": "Người nói cho biết điều gì về năng suất lao động?",
        "options": [
          {
            "key": "A",
            "text": "It has been improving recently.",
            "vietnamese": "Nó đã được cải thiện gần đây."
          },
          {
            "key": "B",
            "text": "It is higher in other departments.",
            "vietnamese": "Nó cao hơn ở các phòng ban khác."
          },
          {
            "key": "C",
            "text": "It can be improved by office surroundings.",
            "vietnamese": "Nó có thể được cải thiện nhờ không gian môi trường văn phòng."
          },
          {
            "key": "D",
            "text": "It can be increased by working in groups.",
            "vietnamese": "Nó có thể tăng lên nhờ làm việc nhóm."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Người nói chỉ ra: 'Studies have shown that plants are great stress relievers and can increase workplace productivity' (không gian xanh xung quanh văn phòng giúp cải thiện năng suất lao động)."
      },
      {
        "num": 79,
        "question": "According to the speaker, what is available in the staff room?",
        "vietnameseQuestion": "Theo người nói, thứ gì có sẵn trong phòng nhân viên?",
        "options": [
          {
            "key": "A",
            "text": "A catalog",
            "vietnamese": "Một cuốn danh mục sản phẩm (catalog)"
          },
          {
            "key": "B",
            "text": "A vending machine",
            "vietnamese": "Máy bán hàng tự động"
          },
          {
            "key": "C",
            "text": "Staff uniforms",
            "vietnamese": "Đồng phục nhân viên"
          },
          {
            "key": "D",
            "text": "Exercise equipment",
            "vietnamese": "Thiết bị tập thể dục"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Người nói hướng dẫn: 'To choose your plant, please check the catalog in the staff room' (xem cuốn danh mục catalog trong phòng nhân viên)."
      }
    ],
    "vocabulary": [
      {
        "word": "potted plant",
        "meaning": "cây trồng trong chậu",
        "partOfSpeech": "n phr"
      },
      {
        "word": "productivity",
        "meaning": "năng suất làm việc",
        "partOfSpeech": "n"
      },
      {
        "word": "stress reliever",
        "meaning": "phương pháp giải tỏa căng thẳng",
        "partOfSpeech": "n phr"
      },
      {
        "word": "catalog",
        "meaning": "sách danh mục sản phẩm",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part4-80-82",
    "part": 4,
    "partTitle": "Part 4: Bài nói ngắn",
    "questionRange": "Câu 80 - 82",
    "title": "Part 4 - Câu 80 - 82: Cải tạo nhà máy cũ thành khu căn hộ gia đình",
    "audioSrc": "/audio/test3_2024.mp3",
    "startTime": 2128.27,
    "endTime": 2221.76,
    "transcript": [
      {
        "id": "p4-80-l1",
        "speaker": "Speaker",
        "text": "In local news, the abandoned shoe factory in the central business district is finally getting a makeover.",
        "vietnamese": "Theo tin tức địa phương, nhà máy sản xuất giày bị bỏ hoang tại khu thương mại trung tâm cuối cùng cũng chuẩn bị được cải tạo diện mạo mới."
      },
      {
        "id": "p4-80-l2",
        "speaker": "Speaker",
        "text": "The building has been empty for three years since the factory moved to its new larger space south of town.",
        "vietnamese": "Tòa nhà này đã bị bỏ trống suốt 3 năm kể từ khi nhà máy chuyển đến không gian mới rộng rãi hơn ở phía nam thị trấn."
      },
      {
        "id": "p4-80-l3",
        "speaker": "Speaker",
        "text": "After hearing many proposals, the Town Council voted last night to sell the building to developer Matthew Hughes, who will convert it into family housing, ten modern comfortable units with a parking garage underground.",
        "vietnamese": "Sau khi xem xét nhiều đề xuất, Hội đồng thị trấn đã bỏ phiếu tối qua để bán tòa nhà cho nhà phát triển bất động sản Matthew Hughes, người sẽ chuyển đổi nó thành khu nhà ở gia đình, gồm 10 căn hộ hiện đại tiện nghi với bãi đỗ xe ngầm."
      },
      {
        "id": "p4-80-l4",
        "speaker": "Speaker",
        "text": "Up next, it looks like the rain is on the way out, giving way to blue skies this weekend. Samantha is here to tell us all about it.",
        "vietnamese": "Tiếp theo chương trình, có vẻ như những cơn mưa sắp chấm dứt, nhường chỗ cho bầu trời trong xanh vào cuối tuần này. Samantha đang có mặt tại đây để thông tin chi tiết đến quý vị."
      }
    ],
    "questions": [
      {
        "num": 80,
        "question": "According to the speaker, what happened three years ago?",
        "vietnameseQuestion": "Theo người nói, điều gì đã xảy ra cách đây 3 năm?",
        "options": [
          {
            "key": "A",
            "text": "A council member was elected.",
            "vietnamese": "Một ủy viên hội đồng đã được bầu."
          },
          {
            "key": "B",
            "text": "A local tax law changed.",
            "vietnamese": "Luật thuế địa phương đã thay đổi."
          },
          {
            "key": "C",
            "text": "A train station opened.",
            "vietnamese": "Một nhà ga tàu hỏa đã khai trương."
          },
          {
            "key": "D",
            "text": "A business relocated.",
            "vietnamese": "Một doanh nghiệp đã chuyển địa điểm."
          }
        ],
        "correctAnswer": "D",
        "explanation": "Người nói nêu rõ: 'The building has been empty for three years since the factory moved to its new larger space south of town' (nhà máy đã chuyển đến địa điểm mới cách đây 3 năm - A business relocated)."
      },
      {
        "num": 81,
        "question": "Who is Matthew Hughes?",
        "vietnameseQuestion": "Matthew Hughes là ai?",
        "options": [
          {
            "key": "A",
            "text": "A banker",
            "vietnamese": "Một chuyên viên ngân hàng"
          },
          {
            "key": "B",
            "text": "A real estate developer",
            "vietnamese": "Một nhà phát triển bất động sản"
          },
          {
            "key": "C",
            "text": "A government official",
            "vietnamese": "Một quan chức chính quyền"
          },
          {
            "key": "D",
            "text": "A store owner",
            "vietnamese": "Một chủ cửa hàng"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Người nói giới thiệu: '...sell the building to developer Matthew Hughes, who will convert it into family housing...' (bán cho nhà phát triển bất động sản Matthew Hughes)."
      },
      {
        "num": 82,
        "question": "What will the listeners hear about next?",
        "vietnameseQuestion": "Thính giả sẽ được nghe về nội dung gì tiếp theo?",
        "options": [
          {
            "key": "A",
            "text": "A sporting event",
            "vietnamese": "Một sự kiện thể thao"
          },
          {
            "key": "B",
            "text": "Street closures",
            "vietnamese": "Các tuyến đường bị cấm"
          },
          {
            "key": "C",
            "text": "The weather",
            "vietnamese": "Tình hình thời tiết"
          },
          {
            "key": "D",
            "text": "Parking fines",
            "vietnamese": "Các mức phạt đỗ xe"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Người dẫn chuyển mục: 'Up next, it looks like the rain is on the way out, giving way to blue skies this weekend. Samantha is here to tell us all about it' (bản tin dự báo thời tiết - The weather)."
      }
    ],
    "vocabulary": [
      {
        "word": "makeover",
        "meaning": "sự cải tạo, đổi mới diện mạo",
        "partOfSpeech": "n"
      },
      {
        "word": "abandoned",
        "meaning": "bị bỏ hoang",
        "partOfSpeech": "adj"
      },
      {
        "word": "developer",
        "meaning": "nhà đầu tư/phát triển bất động sản",
        "partOfSpeech": "n"
      },
      {
        "word": "convert",
        "meaning": "chuyển đổi công năng",
        "partOfSpeech": "v"
      }
    ]
  },
  {
    "id": "part4-83-85",
    "part": 4,
    "partTitle": "Part 4: Bài nói ngắn",
    "questionRange": "Câu 83 - 85",
    "title": "Part 4 - Câu 83 - 85: Dự án xây mới cầu Springdale",
    "audioSrc": "/audio/test3_2024.mp3",
    "startTime": 2221.76,
    "endTime": 2295.86,
    "transcript": [
      {
        "id": "p4-83-l1",
        "speaker": "Speaker",
        "text": "Before we end this transportation agency meeting, I want to give you an update on the Springdale Bridge Replacement Project.",
        "vietnamese": "Trước khi kết thúc cuộc họp của cơ quan giao thông này, tôi muốn cập nhật cho quý vị về Dự án Thay thế Cầu Springdale."
      },
      {
        "id": "p4-83-l2",
        "speaker": "Speaker",
        "text": "The project is moving forward. However, we are more than six months past the scheduled completion date, but this is just one of our many projects.",
        "vietnamese": "Dự án vẫn đang tiếp tục tiến triển. Tuy nhiên, chúng ta đã chậm hơn 6 tháng so với ngày hoàn thành dự kiến, nhưng đây chỉ là một trong số rất nhiều dự án của chúng ta mà thôi."
      },
      {
        "id": "p4-83-l3",
        "speaker": "Speaker",
        "text": "Now this delay is frustrating to residents who are dealing with traffic congestion.",
        "vietnamese": "Giờ đây sự chậm trễ này đang gây khó chịu bực bội cho người dân, những người đang phải đối mặt với tình trạng ùn tắc giao thông hàng ngày."
      },
      {
        "id": "p4-83-l4",
        "speaker": "Speaker",
        "text": "Therefore, I strongly recommend that we hold a press conference to address specific concerns.",
        "vietnamese": "Vì vậy, tôi đặc biệt khuyến nghị chúng ta nên tổ chức một cuộc họp báo để giải đáp những mối quan tâm cụ thể của người dân."
      }
    ],
    "questions": [
      {
        "num": 83,
        "question": "What is the speaker discussing?",
        "vietnameseQuestion": "Người nói đang bàn về vấn đề gì?",
        "options": [
          {
            "key": "A",
            "text": "The renovation of a train station",
            "vietnamese": "Việc cải tạo nhà ga tàu hỏa"
          },
          {
            "key": "B",
            "text": "The construction of a tunnel",
            "vietnamese": "Việc xây dựng một đường hầm"
          },
          {
            "key": "C",
            "text": "The replacement of a bridge",
            "vietnamese": "Việc xây mới thay thế một cây cầu"
          },
          {
            "key": "D",
            "text": "The repaving of a bicycle trail",
            "vietnamese": "Việc trải lại nhựa cho đường dành cho xe đạp"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Người nói đề cập: '...update on the Springdale Bridge Replacement Project' (dự án thay thế xây mới cầu Springdale)."
      },
      {
        "num": 84,
        "question": "Why does the speaker say, \"this is just one of our many projects\"?",
        "vietnameseQuestion": "Tại sao người nói lại nói: \"đây chỉ là một trong số rất nhiều dự án của chúng ta\"?",
        "options": [
          {
            "key": "A",
            "text": "To propose a change of topic",
            "vietnamese": "Để đề xuất đổi chủ đề thảo luận"
          },
          {
            "key": "B",
            "text": "To explain a delay",
            "vietnamese": "Để giải thích cho việc bị chậm trễ tiến độ"
          },
          {
            "key": "C",
            "text": "To praise some employees",
            "vietnamese": "Để khen ngợi một số nhân viên"
          },
          {
            "key": "D",
            "text": "To ask for help",
            "vietnamese": "Để yêu cầu sự trợ giúp"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Người nói thừa nhận dự án đã chậm tiến độ hơn 6 tháng và phân bua rằng cơ quan phải đảm đương quá nhiều dự án cùng lúc để giải thích lý do chậm trễ (To explain a delay)."
      },
      {
        "num": 85,
        "question": "What does the speaker suggest doing?",
        "vietnameseQuestion": "Người nói đề xuất làm gì?",
        "options": [
          {
            "key": "A",
            "text": "Organizing an opening ceremony",
            "vietnamese": "Tổ chức lễ khánh thành khai trương"
          },
          {
            "key": "B",
            "text": "Scheduling a television interview",
            "vietnamese": "Lên lịch phỏng vấn trên truyền hình"
          },
          {
            "key": "C",
            "text": "Revising a design",
            "vietnamese": "Chỉnh sửa bản thiết kế"
          },
          {
            "key": "D",
            "text": "Meeting with the press",
            "vietnamese": "Gặp gỡ báo chí / họp báo"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Người nói đề xuất: '...hold a press conference to address specific concerns' (tổ chức họp báo - Meeting with the press)."
      }
    ],
    "vocabulary": [
      {
        "word": "bridge replacement",
        "meaning": "việc thay thế, xây mới cây cầu",
        "partOfSpeech": "n phr"
      },
      {
        "word": "traffic congestion",
        "meaning": "ùn tắc giao thông",
        "partOfSpeech": "n phr"
      },
      {
        "word": "press conference",
        "meaning": "buổi họp báo",
        "partOfSpeech": "n phr"
      }
    ]
  },
  {
    "id": "part4-86-88",
    "part": 4,
    "partTitle": "Part 4: Bài nói ngắn",
    "questionRange": "Câu 86 - 88",
    "title": "Part 4 - Câu 86 - 88: Khóa đào tạo kỹ năng lãnh đạo khởi nghiệp",
    "audioSrc": "/audio/test3_2024.mp3",
    "startTime": 2295.86,
    "endTime": 2369.72,
    "transcript": [
      {
        "id": "p4-86-l1",
        "speaker": "Speaker",
        "text": "Attention everyone. I hope you're enjoying the second day of our weekend workshop on leadership skills for entrepreneurs.",
        "vietnamese": "Xin mọi người chú ý. Tôi hy vọng quý vị đang có một ngày thứ hai thật thú vị trong buổi hội thảo cuối tuần về kỹ năng lãnh đạo dành cho các doanh nhân khởi nghiệp."
      },
      {
        "id": "p4-86-l2",
        "speaker": "Speaker",
        "text": "During yesterday's session, we conducted a discussion about goal setting, and we did that together as a group.",
        "vietnamese": "Trong buổi học ngày hôm qua, chúng ta đã tiến hành thảo luận về việc thiết lập mục tiêu, và chúng ta đã làm điều đó cùng nhau theo nhóm lớn."
      },
      {
        "id": "p4-86-l3",
        "speaker": "Speaker",
        "text": "However, today I'll be matching you with a partner for a one-on-one discussion.",
        "vietnamese": "Tuy nhiên, hôm nay tôi sẽ ghép đôi quý vị với một bạn đồng hành để thảo luận trực tiếp từng cặp một."
      },
      {
        "id": "p4-86-l4",
        "speaker": "Speaker",
        "text": "So start thinking about any improvements you'd like to make to your communication skills, because that's what you'll be sharing with each other.",
        "vietnamese": "Vì vậy hãy bắt đầu suy nghĩ về bất kỳ điểm cải thiện nào mà quý vị muốn thực hiện đối với kỹ năng giao tiếp của mình, bởi đó chính là điều quý vị sẽ chia sẻ cùng nhau."
      },
      {
        "id": "p4-86-l5",
        "speaker": "Speaker",
        "text": "And later this afternoon, we'll enjoy a prepared lunch, which has been generously donated to us by Blue Star Catering Company. We're grateful to them for their support.",
        "vietnamese": "Và vào chiều nay, chúng ta sẽ thưởng thức bữa trưa đã chuẩn bị sẵn, được tài trợ chu đáo bởi Công ty Tiệc Blue Star. Chúng tôi vô cùng biết ơn sự hỗ trợ của họ."
      }
    ],
    "questions": [
      {
        "num": 86,
        "question": "According to the speaker, what will be different about today's session?",
        "vietnameseQuestion": "Theo người nói, điểm khác biệt trong buổi học hôm nay là gì?",
        "options": [
          {
            "key": "A",
            "text": "It will take place outside.",
            "vietnamese": "Nó sẽ diễn ra ở ngoài trời."
          },
          {
            "key": "B",
            "text": "It will be recorded.",
            "vietnamese": "Nó sẽ được ghi hình lại."
          },
          {
            "key": "C",
            "text": "Participants will work in pairs.",
            "vietnamese": "Người tham gia sẽ làm việc theo từng cặp."
          },
          {
            "key": "D",
            "text": "Participants will deliver presentations.",
            "vietnamese": "Người tham gia sẽ thuyết trình."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Người nói chỉ rõ sự khác biệt: '...today I'll be matching you with a partner for a one-on-one discussion' (ghép đôi hai người thảo luận với nhau - Participants will work in pairs)."
      },
      {
        "num": 87,
        "question": "What is the topic of today's session?",
        "vietnameseQuestion": "Chủ đề của buổi học hôm nay là gì?",
        "options": [
          {
            "key": "A",
            "text": "Improving communication skills",
            "vietnamese": "Cải thiện kỹ năng giao tiếp"
          },
          {
            "key": "B",
            "text": "Updating accounting practices",
            "vietnamese": "Cập nhật các nghiệp vụ kế toán"
          },
          {
            "key": "C",
            "text": "Managing company finances",
            "vietnamese": "Quản lý tài chính công ty"
          },
          {
            "key": "D",
            "text": "Recruiting qualified job candidates",
            "vietnamese": "Tuyển dụng các ứng viên đủ năng lực"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Người nói yêu cầu: '...start thinking about any improvements you'd like to make to your communication skills, because that's what you'll be sharing with each other' (cải thiện kỹ năng giao tiếp)."
      },
      {
        "num": 88,
        "question": "What does the speaker say about the lunch?",
        "vietnameseQuestion": "Người nói chia sẻ điều gì về bữa trưa?",
        "options": [
          {
            "key": "A",
            "text": "It has been donated.",
            "vietnamese": "Nó đã được tài trợ / quyên góp."
          },
          {
            "key": "B",
            "text": "It is vegetarian.",
            "vietnamese": "Nó là đồ ăn chay."
          },
          {
            "key": "C",
            "text": "It will arrive late.",
            "vietnamese": "Nó sẽ được giao đến muộn."
          },
          {
            "key": "D",
            "text": "It will include a dessert.",
            "vietnamese": "Nó sẽ bao gồm món tráng miệng."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Người nói thông báo: '...which has been generously donated to us by Blue Star Catering Company' (bữa trưa được công ty tiệc tài trợ hào phóng - It has been donated)."
      }
    ],
    "vocabulary": [
      {
        "word": "entrepreneur",
        "meaning": "doanh nhân, người khởi nghiệp",
        "partOfSpeech": "n"
      },
      {
        "word": "one-on-one",
        "meaning": "trực tiếp một kèm một, tay đôi",
        "partOfSpeech": "adj/adv"
      },
      {
        "word": "generously",
        "meaning": "hào phóng, rộng lượng",
        "partOfSpeech": "adv"
      }
    ]
  },
  {
    "id": "part4-89-91",
    "part": 4,
    "partTitle": "Part 4: Bài nói ngắn",
    "questionRange": "Câu 89 - 91",
    "title": "Part 4 - Câu 89 - 91: Tin nhắn thoại tư vấn bảo dưỡng ô tô",
    "audioSrc": "/audio/test3_2024.mp3",
    "startTime": 2369.72,
    "endTime": 2443.5,
    "transcript": [
      {
        "id": "p4-89-l1",
        "speaker": "Speaker",
        "text": "This is Adisa from CarPro returning your call.",
        "vietnamese": "Tôi là Adisa đến từ xưởng CarPro gọi lại cho quý khách."
      },
      {
        "id": "p4-89-l2",
        "speaker": "Speaker",
        "text": "In your message, you said your sedan seems sluggish and isn't accelerating well.",
        "vietnamese": "Trong tin nhắn để lại, quý khách cho biết chiếc xe sedan của mình chạy có vẻ ì ạch và khả năng tăng tốc không tốt."
      },
      {
        "id": "p4-89-l3",
        "speaker": "Speaker",
        "text": "There are a number of things that could be causing that, and prices vary with the repair.",
        "vietnamese": "Có một số nguyên nhân có thể gây ra hiện tượng đó, và mức giá sửa chữa cũng sẽ thay đổi tùy thuộc vào từng lỗi."
      },
      {
        "id": "p4-89-l4",
        "speaker": "Speaker",
        "text": "It could be as simple as a clogged oil filter, which is inexpensive to fix. But we'll have to take a look.",
        "vietnamese": "Nó có thể đơn giản chỉ là do bộ lọc dầu bị tắc nghẽn, lỗi này sửa rất rẻ. Nhưng chúng tôi sẽ phải kiểm tra thực tế đã."
      },
      {
        "id": "p4-89-l5",
        "speaker": "Speaker",
        "text": "Oh, by the way, we're closing early tomorrow, but we can get you in the day after. We'll open at 8 a.m.",
        "vietnamese": "À nhân tiện thì ngày mai chúng tôi sẽ đóng cửa sớm, nhưng chúng tôi có thể sắp xếp tiếp nhận xe của quý khách vào ngày hôm sau. Chúng tôi sẽ mở cửa lúc 8 giờ sáng."
      }
    ],
    "questions": [
      {
        "num": 89,
        "question": "Where does the speaker most likely work?",
        "vietnameseQuestion": "Người nói có khả năng nhất làm việc ở đâu?",
        "options": [
          {
            "key": "A",
            "text": "At a car-rental company",
            "vietnamese": "Tại công ty cho thuê xe ô tô"
          },
          {
            "key": "B",
            "text": "At an appliance-repair shop",
            "vietnamese": "Tại tiệm sửa chữa đồ gia dụng"
          },
          {
            "key": "C",
            "text": "At a car wash",
            "vietnamese": "Tại tiệm rửa xe"
          },
          {
            "key": "D",
            "text": "At an auto-mechanic shop",
            "vietnamese": "Tại xưởng cơ khí sửa xe ô tô"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Người nói xưng tên từ xưởng 'CarPro', đề cập đến xe ô tô 'sedan', lỗi 'accelerating' (tăng tốc) và 'oil filter' (bộ lọc dầu), cho thấy người nói làm việc tại xưởng sửa chữa ô tô (At an auto-mechanic shop)."
      },
      {
        "num": 90,
        "question": "What does the speaker imply when he says, \"we'll have to take a look\"?",
        "vietnameseQuestion": "Người nói ngụ ý điều gì khi nói: \"chúng tôi sẽ phải kiểm tra xe trực tiếp đã\"?",
        "options": [
          {
            "key": "A",
            "text": "A schedule may be changed.",
            "vietnamese": "Lịch trình có thể bị thay đổi."
          },
          {
            "key": "B",
            "text": "A supervisor should be consulted.",
            "vietnamese": "Cần tham khảo ý kiến cấp trên."
          },
          {
            "key": "C",
            "text": "A cost cannot be determined yet.",
            "vietnamese": "Chưa thể xác định được mức chi phí ngay bây giờ."
          },
          {
            "key": "D",
            "text": "A new policy must be followed.",
            "vietnamese": "Phải tuân thủ theo chính sách mới."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Người nói nêu rằng giá phụ thuộc vào lỗi ('prices vary with the repair... But we'll have to take a look'), ngụ ý chưa thể báo giá chính xác cho đến khi kiểm tra xe (A cost cannot be determined yet)."
      },
      {
        "num": 91,
        "question": "What does the speaker say about tomorrow?",
        "vietnameseQuestion": "Người nói chia sẻ điều gì về ngày mai?",
        "options": [
          {
            "key": "A",
            "text": "Some machinery will be serviced.",
            "vietnamese": "Một số máy móc sẽ được bảo dưỡng."
          },
          {
            "key": "B",
            "text": "The business will close early.",
            "vietnamese": "Cơ sở kinh doanh sẽ đóng cửa sớm."
          },
          {
            "key": "C",
            "text": "Some new employees will start work.",
            "vietnamese": "Một số nhân viên mới sẽ bắt đầu làm việc."
          },
          {
            "key": "D",
            "text": "An appointment will probably become available.",
            "vietnamese": "Có thể sẽ có lịch hẹn trống."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Người nói nói rõ: '...we're closing early tomorrow, but we can get you in the day after' (ngày mai xưởng sẽ đóng cửa sớm - The business will close early)."
      }
    ],
    "vocabulary": [
      {
        "word": "sluggish",
        "meaning": "ì ạch, chậm chạp",
        "partOfSpeech": "adj"
      },
      {
        "word": "accelerate",
        "meaning": "tăng tốc, đạp ga",
        "partOfSpeech": "v"
      },
      {
        "word": "oil filter",
        "meaning": "bộ lọc dầu nhớt",
        "partOfSpeech": "n phr"
      },
      {
        "word": "clogged",
        "meaning": "bị nghẹt, bị tắc",
        "partOfSpeech": "adj"
      }
    ]
  },
  {
    "id": "part4-92-94",
    "part": 4,
    "partTitle": "Part 4: Bài nói ngắn",
    "questionRange": "Câu 92 - 94",
    "title": "Part 4 - Câu 92 - 94: Thông báo tại phòng trưng bày đồ nội thất",
    "audioSrc": "/audio/test3_2024.mp3",
    "startTime": 2443.5,
    "endTime": 2527.62,
    "transcript": [
      {
        "id": "p4-92-l1",
        "speaker": "Speaker",
        "text": "Thanks, everyone, for helping set up the showroom floor with the displays of the new bedroom and living room sets. They look great.",
        "vietnamese": "Cảm ơn mọi người đã hỗ trợ sắp đặt sàn trưng bày với các bộ đồ phòng ngủ và phòng khách mới. Trông chúng rất tuyệt."
      },
      {
        "id": "p4-92-l2",
        "speaker": "Speaker",
        "text": "Many of you have asked for time off next Wednesday to attend the town parade. I wasn't sure I could grant those requests, but after thinking about it, I realized that that day will probably not be a profitable day for us anyway.",
        "vietnamese": "Nhiều người trong số các bạn đã xin nghỉ phép vào thứ Tư tới để tham dự cuộc diễu hành của thị trấn. Ban đầu tôi không chắc mình có thể chấp thuận các yêu cầu đó không, nhưng sau khi cân nhắc, tôi nhận ra rằng ngày hôm đó đằng nào cũng không thể là một ngày sinh lời nhiều cho chúng ta."
      },
      {
        "id": "p4-92-l3",
        "speaker": "Speaker",
        "text": "I'll post a new employee schedule. Oh, and one more quick announcement. I need all of you to put in an order for a new uniform. It's time we replace them.",
        "vietnamese": "Tôi sẽ dán bảng phân công lịch làm việc mới cho nhân viên. À, và một thông báo nhanh nữa. Tôi cần tất cả các bạn gửi đơn đặt may đồng phục mới. Đã đến lúc chúng ta thay mới đồng phục rồi."
      }
    ],
    "questions": [
      {
        "num": 92,
        "question": "What type of business does the speaker most likely work at?",
        "vietnameseQuestion": "Người nói có khả năng nhất làm việc tại cơ sở kinh doanh nào?",
        "options": [
          {
            "key": "A",
            "text": "A car dealership",
            "vietnamese": "Đại lý bán xe ô tô"
          },
          {
            "key": "B",
            "text": "An electronics store",
            "vietnamese": "Cửa hàng đồ điện tử"
          },
          {
            "key": "C",
            "text": "A clothing boutique",
            "vietnamese": "Cửa hàng thời trang"
          },
          {
            "key": "D",
            "text": "A furniture store",
            "vietnamese": "Cửa hàng đồ nội thất"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Người nói nhắc đến việc trưng bày 'displays of the new bedroom and living room sets' (các bộ đồ phòng ngủ và phòng khách), chứng tỏ đây là một cửa hàng đồ nội thất (A furniture store)."
      },
      {
        "num": 93,
        "question": "What does the speaker imply when he says, \"that day will probably not be a profitable day for us anyway\"?",
        "vietnameseQuestion": "Người nói ngụ ý điều gì khi nói: \"ngày hôm đó đằng nào cũng không mang lại nhiều lợi nhuận cho chúng ta\"?",
        "options": [
          {
            "key": "A",
            "text": "Reduced profits have prevented salary increases.",
            "vietnamese": "Lợi nhuận giảm đã cản trở việc tăng lương."
          },
          {
            "key": "B",
            "text": "A new sales strategy will have to be developed.",
            "vietnamese": "Cần phải phát triển một chiến lược bán hàng mới."
          },
          {
            "key": "C",
            "text": "The listeners will be able to attend an event.",
            "vietnamese": "Những người nghe sẽ có thể tham dự một sự kiện."
          },
          {
            "key": "D",
            "text": "The listeners have been keeping accurate records.",
            "vietnamese": "Những người nghe đã lưu trữ hồ sơ chính xác."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Nhân viên xin nghỉ để đi xem cuộc diễu hành của thị trấn, và người quản lý đồng ý cho nghỉ vì ngày đó vắng khách (The listeners will be able to attend an event)."
      },
      {
        "num": 94,
        "question": "What does the speaker expect the listeners to do?",
        "vietnameseQuestion": "Người nói mong đợi những người nghe sẽ làm gì?",
        "options": [
          {
            "key": "A",
            "text": "Submit an order form",
            "vietnamese": "Gửi một đơn đặt hàng"
          },
          {
            "key": "B",
            "text": "Provide some feedback",
            "vietnamese": "Cung cấp một số phản hồi"
          },
          {
            "key": "C",
            "text": "Sign a contract",
            "vietnamese": "Ký kết một hợp đồng"
          },
          {
            "key": "D",
            "text": "Check a display area",
            "vietnamese": "Kiểm tra một khu vực trưng bày"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Người quản lý yêu cầu: 'I need all of you to put in an order for a new uniform' (gửi đơn đặt may đồng phục mới - Submit an order form)."
      }
    ],
    "vocabulary": [
      {
        "word": "showroom floor",
        "meaning": "sàn phòng trưng bày sản phẩm",
        "partOfSpeech": "n phr"
      },
      {
        "word": "parade",
        "meaning": "cuộc diễu hành",
        "partOfSpeech": "n"
      },
      {
        "word": "uniform",
        "meaning": "đồng phục công sở",
        "partOfSpeech": "n"
      },
      {
        "word": "put in an order",
        "meaning": "đặt hàng, gửi đơn đặt",
        "partOfSpeech": "phr"
      }
    ]
  },
  {
    "id": "part4-95-97",
    "part": 4,
    "partTitle": "Part 4: Bài nói ngắn",
    "questionRange": "Câu 95 - 97",
    "title": "Part 4 - Câu 95 - 97: Thay đổi điểm đón tại ga xe lửa",
    "audioSrc": "/audio/test3_2024.mp3",
    "startTime": 2527.62,
    "endTime": 2606.72,
    "graphicImage": "/images/intensive/test3_2024/q95_97.png",
    "image": "/images/intensive/test3_2024/q95_97.png",
    "transcript": [
      {
        "id": "p4-95-l1",
        "speaker": "Speaker",
        "text": "Hi, this is Emily calling from Speedy Services. I'm picking you up from the central train station today.",
        "vietnamese": "Xin chào, tôi là Emily gọi từ Dịch vụ xe Speedy Services. Hôm nay tôi sẽ đón quý khách từ ga xe lửa trung tâm."
      },
      {
        "id": "p4-95-l2",
        "speaker": "Speaker",
        "text": "I see you selected a pickup location near the ticket windows, but there's heavy traffic on that street.",
        "vietnamese": "Tôi thấy quý khách đã chọn điểm đón gần các quầy bán vé, nhưng trên đường đó đang có mật độ giao thông rất đông đúc."
      },
      {
        "id": "p4-95-l3",
        "speaker": "Speaker",
        "text": "Would it be possible to change your pickup location to right outside the station's grand concourse? It's the designated area for rideshare services.",
        "vietnamese": "Liệu có thể đổi điểm đón sang ngay bên ngoài đại sảnh chính của nhà ga được không? Đó là khu vực được chỉ định dành riêng cho dịch vụ xe công nghệ."
      },
      {
        "id": "p4-95-l4",
        "speaker": "Speaker",
        "text": "Please let me know if you agree with this change by responding to the prompt within the app. Thanks.",
        "vietnamese": "Xin vui lòng cho tôi biết nếu quý khách đồng ý với thay đổi này bằng cách phản hồi thông báo ngay trong ứng dụng. Xin cảm ơn."
      }
    ],
    "questions": [
      {
        "num": 95,
        "question": "Who most likely is the speaker?",
        "vietnameseQuestion": "Người nói có khả năng nhất là ai?",
        "options": [
          {
            "key": "A",
            "text": "A rideshare driver",
            "vietnamese": "Một tài xế xe công nghệ (rideshare)"
          },
          {
            "key": "B",
            "text": "A tour guide",
            "vietnamese": "Một hướng dẫn viên du lịch"
          },
          {
            "key": "C",
            "text": "A ticket agent",
            "vietnamese": "Một nhân viên bán vé"
          },
          {
            "key": "D",
            "text": "A baggage handler",
            "vietnamese": "Một nhân viên bốc dỡ hành lý"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Emily gọi từ hãng xe 'Speedy Services' để đón khách ('picking you up') tại khu vực xe công nghệ ('designated area for rideshare services'), cho thấy cô ấy là tài xế xe công nghệ (A rideshare driver)."
      },
      {
        "num": 96,
        "question": "Look at the graphic. Where does the speaker want to meet?",
        "vietnameseQuestion": "Nhìn vào sơ đồ. Người nói muốn gặp tại địa điểm nào?",
        "options": [
          {
            "key": "A",
            "text": "On Market Street",
            "vietnamese": "Trên Phố Market"
          },
          {
            "key": "B",
            "text": "On Twelfth Street",
            "vietnamese": "Trên Phố số 12 (Twelfth Street)"
          },
          {
            "key": "C",
            "text": "On Central Avenue",
            "vietnamese": "Trên Đại lộ Trung tâm (Central Avenue)"
          },
          {
            "key": "D",
            "text": "On Tenth Street",
            "vietnamese": "Trên Phố số 10 (Tenth Street)"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Người nói đề xuất: '...change your pickup location to right outside the station's grand concourse'. Nhìn vào sơ đồ, lối ra ngay phía ngoài Grand Concourse có mũi tên chỉ thẳng ra Phố Market (On Market Street)."
      },
      {
        "num": 97,
        "question": "How can a change be confirmed?",
        "vietnameseQuestion": "Sự thay đổi có thể được xác nhận bằng cách nào?",
        "options": [
          {
            "key": "A",
            "text": "By sending an e-mail",
            "vietnamese": "Bằng cách gửi thư điện tử"
          },
          {
            "key": "B",
            "text": "By providing an e-signature",
            "vietnamese": "Bằng cách cung cấp chữ ký điện tử"
          },
          {
            "key": "C",
            "text": "By using an app",
            "vietnamese": "Bằng cách thao tác trên ứng dụng di động"
          },
          {
            "key": "D",
            "text": "By returning a call",
            "vietnamese": "Bằng cách gọi lại điện thoại"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Người lái xe hướng dẫn: '...by responding to the prompt within the app' (xác nhận phản hồi trên ứng dụng - By using an app)."
      }
    ],
    "vocabulary": [
      {
        "word": "rideshare",
        "meaning": "dịch vụ đi chung xe / xe công nghệ",
        "partOfSpeech": "n"
      },
      {
        "word": "grand concourse",
        "meaning": "đại sảnh chính của nhà ga",
        "partOfSpeech": "n phr"
      },
      {
        "word": "designated area",
        "meaning": "khu vực được chỉ định riêng",
        "partOfSpeech": "n phr"
      },
      {
        "word": "prompt",
        "meaning": "thông báo nhắc nhở thao tác",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part4-98-100",
    "part": 4,
    "partTitle": "Part 4: Bài nói ngắn",
    "questionRange": "Câu 98 - 100",
    "title": "Part 4 - Câu 98 - 100: Thuyết trình về lợi ích dinh dưỡng của hoa quả",
    "audioSrc": "/audio/test3_2024.mp3",
    "startTime": 2606.72,
    "endTime": 2697.0,
    "graphicImage": "/images/intensive/test3_2024/q98_100.png",
    "image": "/images/intensive/test3_2024/q98_100.png",
    "transcript": [
      {
        "id": "p4-98-l1",
        "speaker": "Speaker",
        "text": "Good morning. My presentation will look closely at the nutritional benefits of eating fruit.",
        "vietnamese": "Xin chào buổi sáng. Bài thuyết trình của tôi sẽ đi sâu xem xét các lợi ích dinh dưỡng của việc ăn hoa quả."
      },
      {
        "id": "p4-98-l2",
        "speaker": "Speaker",
        "text": "Patients often wonder whether the amount of sugar in fruit makes fruit unhealthy, and some even consider limiting it in their diet. But it's more nuanced than that.",
        "vietnamese": "Các bệnh nhân thường tự hỏi liệu lượng đường trong trái cây có khiến trái cây trở nên không tốt cho sức khỏe hay không, và một số người thậm chí còn cân nhắc hạn chế ăn chúng trong chế độ ăn. Nhưng vấn đề này tinh tế hơn thế nhiều."
      },
      {
        "id": "p4-98-l3",
        "speaker": "Speaker",
        "text": "Last year, I published a paper reporting on my research on eating the current recommended serving of fruit each day, versus eating less of it for weight loss purposes.",
        "vietnamese": "Năm ngoái, tôi đã xuất bản một công trình nghiên cứu báo cáo về việc ăn khẩu phần trái cây được khuyến nghị mỗi ngày so với việc ăn ít đi nhằm mục đích giảm cân."
      },
      {
        "id": "p4-98-l4",
        "speaker": "Speaker",
        "text": "I'll spend the next 45 minutes going through the results, and then it'll be time for the coffee break.",
        "vietnamese": "Tôi sẽ dành 45 phút tới để trình bày chi tiết về các kết quả, và sau đó sẽ là thời gian nghỉ giải lao uống cà phê."
      },
      {
        "id": "p4-98-l5",
        "speaker": "Speaker",
        "text": "During the coffee break, feel free to wander to the dining room, where our sponsor has set up a booth to sample a new nutritional beverage.",
        "vietnamese": "Trong giờ giải lao uống cà phê, xin mời quý vị thoải mái ghé qua phòng ăn, nơi nhà tài trợ của chúng tôi đã dựng một gian hàng để dùng thử một loại đồ uống dinh dưỡng mới."
      }
    ],
    "questions": [
      {
        "num": 98,
        "question": "Look at the graphic. Who is the speaker?",
        "vietnameseQuestion": "Nhìn vào lịch trình hội nghị. Diễn giả thuyết trình là ai?",
        "options": [
          {
            "key": "A",
            "text": "Dr. Bajaj",
            "vietnamese": "Tiến sĩ Bajaj"
          },
          {
            "key": "B",
            "text": "Dr. Novikova",
            "vietnamese": "Tiến sĩ Novikova"
          },
          {
            "key": "C",
            "text": "Dr. Ivanda",
            "vietnamese": "Tiến sĩ Ivanda"
          },
          {
            "key": "D",
            "text": "Dr. Shimizu",
            "vietnamese": "Tiến sĩ Shimizu"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Diễn giả nói bài thuyết trình của mình bàn về hoa quả ('nutritional benefits of eating fruit') kéo dài 45 phút ngay trước giờ nghỉ cà phê ('coffee break'). Đối chiếu lịch trình hội nghị, lúc 8:15 A.M. trước giờ Coffee break 9:00 A.M. là bài 'The Truth About Fruit' của Tiến sĩ Novikova (Dr. Novikova)."
      },
      {
        "num": 99,
        "question": "What did the speaker do last year?",
        "vietnameseQuestion": "Diễn giả đã làm gì vào năm ngoái?",
        "options": [
          {
            "key": "A",
            "text": "She started her own medical practice.",
            "vietnamese": "Bà ấy đã mở phòng khám y tế riêng."
          },
          {
            "key": "B",
            "text": "She received an award.",
            "vietnamese": "Bà ấy đã nhận được một giải thưởng."
          },
          {
            "key": "C",
            "text": "She published a study.",
            "vietnamese": "Bà ấy đã xuất bản một bài báo nghiên cứu."
          },
          {
            "key": "D",
            "text": "She developed a fitness application.",
            "vietnamese": "Bà ấy đã phát triển một ứng dụng tập thể dục."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Diễn giả chia sẻ: 'Last year, I published a paper reporting on my research...' (năm ngoái tôi đã xuất bản một bài báo báo cáo về nghiên cứu của mình - She published a study)."
      },
      {
        "num": 100,
        "question": "According to the speaker, where can the listeners test a product?",
        "vietnameseQuestion": "Theo diễn giả, người nghe có thể trải nghiệm dùng thử sản phẩm ở đâu?",
        "options": [
          {
            "key": "A",
            "text": "In a lobby",
            "vietnamese": "Tại sảnh chờ"
          },
          {
            "key": "B",
            "text": "In an auditorium",
            "vietnamese": "Trong khán phòng"
          },
          {
            "key": "C",
            "text": "In a gift shop",
            "vietnamese": "Tại cửa hàng quà tặng"
          },
          {
            "key": "D",
            "text": "In a dining area",
            "vietnamese": "Tại khu vực phòng ăn"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Diễn giả mời mọi người: '...feel free to wander to the dining room, where our sponsor has set up a booth to sample a new nutritional beverage' (ghé phòng ăn nơi có gian hàng thử đồ uống - In a dining area)."
      }
    ],
    "vocabulary": [
      {
        "word": "nutritional benefit",
        "meaning": "lợi ích về mặt dinh dưỡng",
        "partOfSpeech": "n phr"
      },
      {
        "word": "publish a paper",
        "meaning": "xuất bản một bài báo/công trình nghiên cứu",
        "partOfSpeech": "phr"
      },
      {
        "word": "beverage",
        "meaning": "thức uống, đồ uống",
        "partOfSpeech": "n"
      },
      {
        "word": "sample",
        "meaning": "nếm thử, dùng thử mẫu sản phẩm",
        "partOfSpeech": "v"
      }
    ]
  }
];
