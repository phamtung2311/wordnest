// Dữ liệu luyện nghe chi tiết (Intensive Listening) - ETS TOEIC 2024 Test 6
// Áp dụng kỹ thuật Virtual Timestamp Slicing từ audio gốc /audio/test6_2024.mp3
// Transcript, câu hỏi và giải thích chi tiết theo đề thi ETS 2024 Test 6

import type { IntensiveListeningItem } from './intensive_listening_types';

export const test6_2024_IntensiveData: IntensiveListeningItem[] = [
  {
    "id": "part1-1",
    "part": 1,
    "partTitle": "Part 1: Mô tả hình ảnh",
    "questionRange": "Câu 1",
    "title": "Part 1 - Câu 1: Người phụ nữ trượt tuyết dùng gậy đi bộ",
    "audioSrc": "/audio/test6_2024.mp3",
    "startTime": 98.8,
    "endTime": 124.2,
    "imageUrl": "/images/intensive/test6_2024/q1.png",
    "image": "/images/intensive/test6_2024/q1.png",
    "transcript": [
      {
        "id": "p1-1-a",
        "speaker": "Speaker",
        "text": "(A) She's shoveling snow from a walkway.",
        "vietnamese": "(A) Cô ấy đang xúc tuyết khỏi lối đi bộ."
      },
      {
        "id": "p1-1-b",
        "speaker": "Speaker",
        "text": "(B) She's using walking sticks.",
        "vietnamese": "(B) Cô ấy đang sử dụng gậy đi bộ đường dài."
      },
      {
        "id": "p1-1-c",
        "speaker": "Speaker",
        "text": "(C) She's removing her cap.",
        "vietnamese": "(C) Cô ấy đang cởi mũ của mình ra."
      },
      {
        "id": "p1-1-d",
        "speaker": "Speaker",
        "text": "(D) She's drinking from a water bottle.",
        "vietnamese": "(D) Cô ấy đang uống nước từ chai nước."
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
            "text": "She's shoveling snow from a walkway.",
            "vietnamese": "Cô ấy đang xúc tuyết khỏi lối đi."
          },
          {
            "key": "B",
            "text": "She's using walking sticks.",
            "vietnamese": "Cô ấy đang dùng gậy đi bộ."
          },
          {
            "key": "C",
            "text": "She's removing her cap.",
            "vietnamese": "Cô ấy đang bỏ mũ ra."
          },
          {
            "key": "D",
            "text": "She's drinking from a water bottle.",
            "vietnamese": "Cô ấy đang uống nước từ chai."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Trong bức ảnh tuyết trắng, người phụ nữ đang cầm và sử dụng hai cây gậy đi bộ đường dài (walking sticks) khi di chuyển trên tuyết."
      }
    ],
    "vocabulary": [
      {
        "word": "walking stick",
        "meaning": "gậy đi bộ, gậy leo núi dã ngoại",
        "partOfSpeech": "n"
      },
      {
        "word": "shovel snow",
        "meaning": "xúc tuyết",
        "partOfSpeech": "phr"
      },
      {
        "word": "walkway",
        "meaning": "lối đi bộ",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part1-2",
    "part": 1,
    "partTitle": "Part 1: Mô tả hình ảnh",
    "questionRange": "Câu 2",
    "title": "Part 1 - Câu 2: Nữ phục vụ bưng khay đồ ăn trong nhà hàng",
    "audioSrc": "/audio/test6_2024.mp3",
    "startTime": 124.2,
    "endTime": 151.7,
    "imageUrl": "/images/intensive/test6_2024/q2.png",
    "image": "/images/intensive/test6_2024/q2.png",
    "transcript": [
      {
        "id": "p1-2-a",
        "speaker": "Speaker",
        "text": "(A) A woman is carrying a tray.",
        "vietnamese": "(A) Một người phụ nữ đang bưng một chiếc khay."
      },
      {
        "id": "p1-2-b",
        "speaker": "Speaker",
        "text": "(B) A woman is pushing a food trolley.",
        "vietnamese": "(B) Một người phụ nữ đang đẩy một chiếc xe đẩy thức ăn."
      },
      {
        "id": "p1-2-c",
        "speaker": "Speaker",
        "text": "(C) Some people are leaving a restaurant.",
        "vietnamese": "(C) Một số người đang rời khỏi một nhà hàng."
      },
      {
        "id": "p1-2-d",
        "speaker": "Speaker",
        "text": "(D) Some diners are looking out a window.",
        "vietnamese": "(D) Một số thực khách đang nhìn ra ngoài cửa sổ."
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
            "text": "A woman is carrying a tray.",
            "vietnamese": "Người phụ nữ đang bưng một chiếc khay."
          },
          {
            "key": "B",
            "text": "A woman is pushing a food trolley.",
            "vietnamese": "Người phụ nữ đang đẩy xe chở thức ăn."
          },
          {
            "key": "C",
            "text": "Some people are leaving a restaurant.",
            "vietnamese": "Một số người đang rời khỏi nhà hàng."
          },
          {
            "key": "D",
            "text": "Some diners are looking out a window.",
            "vietnamese": "Một số thực khách đang nhìn qua cửa sổ."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Trong nhà hàng, người phụ nữ phục vụ đang hai tay nâng và bưng một khay thức ăn (carrying a tray)."
      }
    ],
    "vocabulary": [
      {
        "word": "tray",
        "meaning": "khay bưng đồ ăn thức uống",
        "partOfSpeech": "n"
      },
      {
        "word": "food trolley",
        "meaning": "xe đẩy đồ ăn",
        "partOfSpeech": "n"
      },
      {
        "word": "diner",
        "meaning": "thực khách",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part1-3",
    "part": 1,
    "partTitle": "Part 1: Mô tả hình ảnh",
    "questionRange": "Câu 3",
    "title": "Part 1 - Câu 3: Người đàn ông cọ rửa nắp ca-pô xe hơi",
    "audioSrc": "/audio/test6_2024.mp3",
    "startTime": 151.7,
    "endTime": 176.2,
    "imageUrl": "/images/intensive/test6_2024/q3.png",
    "image": "/images/intensive/test6_2024/q3.png",
    "transcript": [
      {
        "id": "p1-3-a",
        "speaker": "Speaker",
        "text": "(A) The man is holding a bucket of water.",
        "vietnamese": "(A) Người đàn ông đang cầm một chiếc xô."
      },
      {
        "id": "p1-3-b",
        "speaker": "Speaker",
        "text": "(B) The man is replacing a tire.",
        "vietnamese": "(B) Người đàn ông đang thay một chiếc lốp xe."
      },
      {
        "id": "p1-3-c",
        "speaker": "Speaker",
        "text": "(C) The man is watering a tree.",
        "vietnamese": "(C) Người đàn ông đang tưới nước cho một cái cây."
      },
      {
        "id": "p1-3-d",
        "speaker": "Speaker",
        "text": "(D) The man is scrubbing the front of a car.",
        "vietnamese": "(D) Người đàn ông đang cọ rửa nắp ca-pô của một chiếc xe hơi."
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
            "text": "The man is holding a bucket of water.",
            "vietnamese": "Người đàn ông đang cầm xô nước."
          },
          {
            "key": "B",
            "text": "The man is replacing a tire.",
            "vietnamese": "Người đàn ông đang thay lốp xe."
          },
          {
            "key": "C",
            "text": "The man is watering a tree.",
            "vietnamese": "Người đàn ông đang tưới cây."
          },
          {
            "key": "D",
            "text": "The man is scrubbing the front of a car.",
            "vietnamese": "Người đàn ông đang cọ rửa nắp ca-pô ô tô."
          }
        ],
        "correctAnswer": "D",
        "explanation": "Người đàn ông đang cúi người dùng bọt biển/khăn cọ rửa bề mặt nắp ca-pô phía trước của xe ô tô (scrubbing the hood of a car)."
      }
    ],
    "vocabulary": [
      {
        "word": "scrub",
        "meaning": "cọ rửa, chà sạch",
        "partOfSpeech": "v"
      },
      {
        "word": "hood",
        "meaning": "nắp ca-pô xe ô tô",
        "partOfSpeech": "n"
      },
      {
        "word": "bucket",
        "meaning": "chiếc xô nước",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part1-4",
    "part": 1,
    "partTitle": "Part 1: Mô tả hình ảnh",
    "questionRange": "Câu 4",
    "title": "Part 1 - Câu 4: Khu vực ăn uống ngoài trời vắng khách",
    "audioSrc": "/audio/test6_2024.mp3",
    "startTime": 176.2,
    "endTime": 207.9,
    "imageUrl": "/images/intensive/test6_2024/q4.png",
    "image": "/images/intensive/test6_2024/q4.png",
    "transcript": [
      {
        "id": "p1-4-a",
        "speaker": "Speaker",
        "text": "(A) Some tiles are being installed on a roof.",
        "vietnamese": "(A) Một số viên gạch lát đang được lắp đặt trên sàn."
      },
      {
        "id": "p1-4-b",
        "speaker": "Speaker",
        "text": "(B) An outdoor dining area is unoccupied.",
        "vietnamese": "(B) Một khu vực ăn uống ngoài trời hiện đang trống không có người."
      },
      {
        "id": "p1-4-c",
        "speaker": "Speaker",
        "text": "(C) Flowers have been placed on tables.",
        "vietnamese": "(C) Những bông hoa đã được đặt trên mỗi bàn ăn."
      },
      {
        "id": "p1-4-d",
        "speaker": "Speaker",
        "text": "(D) Some chairs have been arranged around a fountain.",
        "vietnamese": "(D) Một số chiếc ghế đã được sắp xếp xung quanh hố lửa."
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
            "text": "Some tiles are being installed on a roof.",
            "vietnamese": "Gạch lát đang được lắp trên sàn."
          },
          {
            "key": "B",
            "text": "An outdoor dining area is unoccupied.",
            "vietnamese": "Khu vực ăn uống ngoài trời đang trống."
          },
          {
            "key": "C",
            "text": "Flowers have been placed on tables.",
            "vietnamese": "Hoa đã được cắm trên mỗi bàn."
          },
          {
            "key": "D",
            "text": "Some chairs have been arranged around a fountain.",
            "vietnamese": "Ghế được xếp quanh hố đốt lửa."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Bức ảnh chụp các bàn ghế ăn ngoài trời tại sân hiên nhà hàng lúc này không có một vị khách nào (An outdoor dining area is empty)."
      }
    ],
    "vocabulary": [
      {
        "word": "outdoor dining area",
        "meaning": "khu vực ăn uống ngoài trời",
        "partOfSpeech": "n"
      },
      {
        "word": "empty",
        "meaning": "trống trải, không có người",
        "partOfSpeech": "adj"
      },
      {
        "word": "fire pit",
        "meaning": "hố đốt lửa sưởi ngoài trời",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part1-5",
    "part": 1,
    "partTitle": "Part 1: Mô tả hình ảnh",
    "questionRange": "Câu 5",
    "title": "Part 1 - Câu 5: Người phụ nữ bước lên các bậc cầu thang",
    "audioSrc": "/audio/test6_2024.mp3",
    "startTime": 207.9,
    "endTime": 236.5,
    "imageUrl": "/images/intensive/test6_2024/q5.png",
    "image": "/images/intensive/test6_2024/q5.png",
    "transcript": [
      {
        "id": "p1-5-a",
        "speaker": "Speaker",
        "text": "(A) Some people are gathered on top of a building.",
        "vietnamese": "(A) Một số người đang tụ tập xung quanh một bức tượng."
      },
      {
        "id": "p1-5-b",
        "speaker": "Speaker",
        "text": "(B) Some trees are blocking the entrance to a stairway.",
        "vietnamese": "(B) Một số cái cây đang chắn lối đi bộ."
      },
      {
        "id": "p1-5-c",
        "speaker": "Speaker",
        "text": "(C) A woman is taking some stairs to a lower level.",
        "vietnamese": "(C) Một người phụ nữ đang bước lên những bậc cầu thang."
      },
      {
        "id": "p1-5-d",
        "speaker": "Speaker",
        "text": "(D) A woman is walking across a pedestrian bridge.",
        "vietnamese": "(D) Một người phụ nữ đang đi bộ qua một cây cầu."
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
            "text": "Some people are gathered on top of a building.",
            "vietnamese": "Mọi người đang tụ tập quanh bức tượng."
          },
          {
            "key": "B",
            "text": "Some trees are blocking the entrance to a stairway.",
            "vietnamese": "Cây cối đang chắn lối đi bộ."
          },
          {
            "key": "C",
            "text": "A woman is taking some stairs to a lower level.",
            "vietnamese": "Người phụ nữ đang bước lên cầu thang."
          },
          {
            "key": "D",
            "text": "A woman is walking across a pedestrian bridge.",
            "vietnamese": "Người phụ nữ đang đi qua cầu."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Người phụ nữ đang sải bước đi lên các bậc thềm cầu thang ngoài trời (taking some stairs)."
      }
    ],
    "vocabulary": [
      {
        "word": "take stairs",
        "meaning": "đi bộ lên/xuống bậc cầu thang",
        "partOfSpeech": "phr"
      },
      {
        "word": "statue",
        "meaning": "bức tượng điêu khắc",
        "partOfSpeech": "n"
      },
      {
        "word": "block",
        "meaning": "chắn lối, chặn đường",
        "partOfSpeech": "v"
      }
    ]
  },
  {
    "id": "part1-6",
    "part": 1,
    "partTitle": "Part 1: Mô tả hình ảnh",
    "questionRange": "Câu 6",
    "title": "Part 1 - Câu 6: Các bồn cây bằng gỗ chứa đầy đất trồng",
    "audioSrc": "/audio/test6_2024.mp3",
    "startTime": 236.5,
    "endTime": 266.0,
    "imageUrl": "/images/intensive/test6_2024/q6.png",
    "image": "/images/intensive/test6_2024/q6.png",
    "transcript": [
      {
        "id": "p1-6-a",
        "speaker": "Speaker",
        "text": "(A) Some wooden planter boxes have been set next to each other.",
        "vietnamese": "(A) Một số bồn trồng cây bằng gỗ đã được đổ đầy đất."
      },
      {
        "id": "p1-6-b",
        "speaker": "Speaker",
        "text": "(B) Some wood logs have been piled in a corner.",
        "vietnamese": "(B) Một số khúc gỗ đã được xếp chồng cạnh ô cửa."
      },
      {
        "id": "p1-6-c",
        "speaker": "Speaker",
        "text": "(C) The outside walls of a house are made of bricks.",
        "vietnamese": "(C) Những bức tường ngoài của một ngôi nhà đang được sơn."
      },
      {
        "id": "p1-6-d",
        "speaker": "Speaker",
        "text": "(D) Some windows are being installed.",
        "vietnamese": "(D) Một số cửa sổ đang được lắp đặt trên sàn hiên."
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
            "text": "Some wooden planter boxes have been set next to each other.",
            "vietnamese": "Các bồn gỗ trồng cây đã được cho đầy đất."
          },
          {
            "key": "B",
            "text": "Some wood logs have been piled in a corner.",
            "vietnamese": "Các khúc gỗ được xếp chồng cạnh cửa."
          },
          {
            "key": "C",
            "text": "The outside walls of a house are made of bricks.",
            "vietnamese": "Tường ngoài ngôi nhà đang được sơn."
          },
          {
            "key": "D",
            "text": "Some windows are being installed.",
            "vietnamese": "Cửa sổ đang được lắp trên sàn hiên."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Bức ảnh cho thấy các bồn trồng cây hình hộp bằng gỗ trên sân thượng/ban công đã được đổ đầy đất màu mỡ (planter boxes have been filled with soil)."
      }
    ],
    "vocabulary": [
      {
        "word": "planter box",
        "meaning": "hộp/bồn gỗ trồng hoa cây cảnh",
        "partOfSpeech": "n"
      },
      {
        "word": "soil",
        "meaning": "đất trồng cây",
        "partOfSpeech": "n"
      },
      {
        "word": "stack",
        "meaning": "chồng, xếp chồng lên nhau",
        "partOfSpeech": "v"
      }
    ]
  },
  {
    "id": "part2-7",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 7",
    "title": "Part 2 - Câu 7: Người mang bánh ngọt còn thừa về",
    "audioSrc": "/audio/test6_2024.mp3",
    "startTime": 293.4,
    "endTime": 314.4,
    "transcript": [
      {
        "id": "p2-7-q",
        "speaker": "Speaker 1",
        "text": "Who's going to take home the leftover cake?",
        "vietnamese": "Ai sẽ mang số bánh ngọt còn thừa về nhà?"
      },
      {
        "id": "p2-7-a",
        "speaker": "Speaker 2",
        "text": "(A) My cell said he would.",
        "vietnamese": "(A) Marcel nói anh ấy sẽ mang về."
      },
      {
        "id": "p2-7-b",
        "speaker": "Speaker 2",
        "text": "(B) A lovely selection of desserts.",
        "vietnamese": "(B) Một sự lựa chọn bánh tráng miệng rất tuyệt."
      },
      {
        "id": "p2-7-c",
        "speaker": "Speaker 2",
        "text": "(C) No. I thought it started at noon.",
        "vietnamese": "(C) Không. Tôi nghĩ nó bắt đầu lúc giữa trưa."
      }
    ],
    "questions": [
      {
        "num": 7,
        "question": "Who's going to take home the leftover cake?",
        "vietnameseQuestion": "Ai sẽ mang số bánh ngọt còn thừa về nhà?",
        "options": [
          {
            "key": "A",
            "text": "My cell said he would.",
            "vietnamese": "Marcel nói anh ấy sẽ mang về."
          },
          {
            "key": "B",
            "text": "A lovely selection of desserts.",
            "vietnamese": "Một sự lựa chọn bánh tráng miệng rất tuyệt."
          },
          {
            "key": "C",
            "text": "No. I thought it started at noon.",
            "vietnamese": "Không. Tôi nghĩ nó bắt đầu lúc giữa trưa."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Câu hỏi 'Who...' hỏi ai sẽ mang bánh thừa về. Lựa chọn (A) chỉ rõ Marcel nói anh ấy sẽ lấy (người nói nghe nhận diện tên Marcel)."
      }
    ],
    "vocabulary": [
      {
        "word": "leftover",
        "meaning": "đồ ăn thừa lại",
        "partOfSpeech": "n/adj"
      },
      {
        "word": "dessert",
        "meaning": "món tráng miệng",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-8",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 8",
    "title": "Part 2 - Câu 8: Hỏi vị trí phòng bảo vệ",
    "audioSrc": "/audio/test6_2024.mp3",
    "startTime": 314.4,
    "endTime": 334.0,
    "transcript": [
      {
        "id": "p2-8-q",
        "speaker": "Speaker 1",
        "text": "Can you tell me where the security office is?",
        "vietnamese": "Bạn có thể cho tôi biết phòng an ninh ở đâu không?"
      },
      {
        "id": "p2-8-a",
        "speaker": "Speaker 2",
        "text": "(A) Today is my first day here.",
        "vietnamese": "(A) Hôm nay là ngày làm việc đầu tiên của tôi ở đây."
      },
      {
        "id": "p2-8-b",
        "speaker": "Speaker 2",
        "text": "(B) A photograph for the badge.",
        "vietnamese": "(B) Một bức ảnh cho chiếc thẻ đeo."
      },
      {
        "id": "p2-8-c",
        "speaker": "Speaker 2",
        "text": "(C) Because it's after lunch.",
        "vietnamese": "(C) Bởi vì bây giờ là sau giờ ăn trưa."
      }
    ],
    "questions": [
      {
        "num": 8,
        "question": "Can you tell me where the security office is?",
        "vietnameseQuestion": "Bạn có thể cho tôi biết phòng an ninh ở đâu không?",
        "options": [
          {
            "key": "A",
            "text": "Today is my first day here.",
            "vietnamese": "Hôm nay là ngày làm việc đầu tiên của tôi ở đây."
          },
          {
            "key": "B",
            "text": "A photograph for the badge.",
            "vietnamese": "Một bức ảnh cho chiếc thẻ đeo."
          },
          {
            "key": "C",
            "text": "Because it's after lunch.",
            "vietnamese": "Bởi vì bây giờ là sau giờ ăn trưa."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Câu hỏi đường gián tiếp. Lựa chọn (A) khéo léo giải thích người nói không biết vì hôm nay là ngày đầu tiên đi làm."
      }
    ],
    "vocabulary": [
      {
        "word": "security office",
        "meaning": "phòng bảo vệ / văn phòng an ninh",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-9",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 9",
    "title": "Part 2 - Câu 9: Phương thức liên lạc tốt nhất",
    "audioSrc": "/audio/test6_2024.mp3",
    "startTime": 334.0,
    "endTime": 352.5,
    "transcript": [
      {
        "id": "p2-9-q",
        "speaker": "Speaker 1",
        "text": "What's the best way to contact you?",
        "vietnamese": "Cách tốt nhất để liên lạc với bạn là gì?"
      },
      {
        "id": "p2-9-a",
        "speaker": "Speaker 2",
        "text": "(A) On my mobile phone.",
        "vietnamese": "(A) Qua điện thoại di động của tôi."
      },
      {
        "id": "p2-9-b",
        "speaker": "Speaker 2",
        "text": "(B) No. I have to wear glasses.",
        "vietnamese": "(B) Không. Tôi phải đeo kính."
      },
      {
        "id": "p2-9-c",
        "speaker": "Speaker 2",
        "text": "(C) This resume is better.",
        "vietnamese": "(C) Bản sơ yếu lý lịch này tốt hơn."
      }
    ],
    "questions": [
      {
        "num": 9,
        "question": "What's the best way to contact you?",
        "vietnameseQuestion": "Cách tốt nhất để liên lạc với bạn là gì?",
        "options": [
          {
            "key": "A",
            "text": "On my mobile phone.",
            "vietnamese": "Qua điện thoại di động của tôi."
          },
          {
            "key": "B",
            "text": "No. I have to wear glasses.",
            "vietnamese": "Không. Tôi phải đeo kính."
          },
          {
            "key": "C",
            "text": "This resume is better.",
            "vietnamese": "Bản sơ yếu lý lịch này tốt hơn."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Câu hỏi phương thức liên lạc tốt nhất. Lựa chọn (A) cung cấp phương tiện liên hệ trực tiếp là qua điện thoại di động."
      }
    ],
    "vocabulary": [
      {
        "word": "contact",
        "meaning": "liên hệ, liên lạc",
        "partOfSpeech": "v"
      },
      {
        "word": "mobile phone",
        "meaning": "điện thoại di động",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-10",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 10",
    "title": "Part 2 - Câu 10: Người tham gia chuyến đi thuyền ven biển",
    "audioSrc": "/audio/test6_2024.mp3",
    "startTime": 352.5,
    "endTime": 377.4,
    "transcript": [
      {
        "id": "p2-10-q",
        "speaker": "Speaker 1",
        "text": "Who's joining us for the waterfront boat ride?",
        "vietnamese": "Ai sẽ cùng tham gia chuyến đi thuyền ven sông nước với chúng ta vậy?"
      },
      {
        "id": "p2-10-a",
        "speaker": "Speaker 2",
        "text": "(A) Conference Room 3.",
        "vietnamese": "(A) Phòng họp số 3."
      },
      {
        "id": "p2-10-b",
        "speaker": "Speaker 2",
        "text": "(B) The admission fee is reasonable.",
        "vietnamese": "(B) Giá vé vào cửa khá hợp lý."
      },
      {
        "id": "p2-10-c",
        "speaker": "Speaker 2",
        "text": "(C) Everybody on our team is coming.",
        "vietnamese": "(C) Mọi người trong nhóm của chúng ta đều sẽ đến."
      }
    ],
    "questions": [
      {
        "num": 10,
        "question": "Who's joining us for the waterfront boat ride?",
        "vietnameseQuestion": "Ai sẽ cùng tham gia chuyến đi thuyền ven sông nước với chúng ta vậy?",
        "options": [
          {
            "key": "A",
            "text": "Conference Room 3.",
            "vietnamese": "Phòng họp số 3."
          },
          {
            "key": "B",
            "text": "The admission fee is reasonable.",
            "vietnamese": "Giá vé vào cửa khá hợp lý."
          },
          {
            "key": "C",
            "text": "Everybody on our team is coming.",
            "vietnamese": "Mọi người trong nhóm của chúng ta đều sẽ đến."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Câu hỏi 'Who...' hỏi ai tham gia chuyến du ngoạn bằng thuyền. Lựa chọn (C) thông báo toàn bộ thành viên trong nhóm đều tham gia."
      }
    ],
    "vocabulary": [
      {
        "word": "waterfront",
        "meaning": "khu vực bờ sông / ven biển",
        "partOfSpeech": "n"
      },
      {
        "word": "admission fee",
        "meaning": "phí vào cửa",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-11",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 11",
    "title": "Part 2 - Câu 11: Yêu cầu thợ kỹ thuật sửa máy đóng gói",
    "audioSrc": "/audio/test6_2024.mp3",
    "startTime": 377.4,
    "endTime": 393.7,
    "transcript": [
      {
        "id": "p2-11-q",
        "speaker": "Speaker 1",
        "text": "Could you request a technician to repair the packaging machine?",
        "vietnamese": "Bạn có thể yêu cầu kỹ thuật viên đến sửa máy đóng gói được không?"
      },
      {
        "id": "p2-11-a",
        "speaker": "Speaker 2",
        "text": "(A) Three years of technical school.",
        "vietnamese": "(A) Ba năm học trường kỹ thuật."
      },
      {
        "id": "p2-11-b",
        "speaker": "Speaker 2",
        "text": "(B) Sure. I'll do that.",
        "vietnamese": "(B) Chắc chắn rồi. Tôi sẽ làm việc đó."
      },
      {
        "id": "p2-11-c",
        "speaker": "Speaker 2",
        "text": "(C) The blue one with gold trim.",
        "vietnamese": "(C) Chiếc màu xanh có viền vàng."
      }
    ],
    "questions": [
      {
        "num": 11,
        "question": "Could you request a technician to repair the packaging machine?",
        "vietnameseQuestion": "Bạn có thể yêu cầu kỹ thuật viên đến sửa máy đóng gói được không?",
        "options": [
          {
            "key": "A",
            "text": "Three years of technical school.",
            "vietnamese": "Ba năm học trường kỹ thuật."
          },
          {
            "key": "B",
            "text": "Sure. I'll do that.",
            "vietnamese": "Chắc chắn rồi. Tôi sẽ làm việc đó."
          },
          {
            "key": "C",
            "text": "The blue one with gold trim.",
            "vietnamese": "Chiếc màu xanh có viền vàng."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Câu nhờ vả lịch sự ('Could you request...'). Lựa chọn (B) đồng ý giúp đỡ nhiệt tình ('Sure. I\\'ll do that')."
      }
    ],
    "vocabulary": [
      {
        "word": "technician",
        "meaning": "kỹ thuật viên",
        "partOfSpeech": "n"
      },
      {
        "word": "packaging machine",
        "meaning": "máy đóng gói",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-12",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 12",
    "title": "Part 2 - Câu 12: Số lượng bản sao bản đề xuất cần in",
    "audioSrc": "/audio/test6_2024.mp3",
    "startTime": 393.7,
    "endTime": 414.4,
    "transcript": [
      {
        "id": "p2-12-q",
        "speaker": "Speaker 1",
        "text": "How many copies of the proposal should I make?",
        "vietnamese": "Tôi nên in bao nhiêu bản đề xuất này?"
      },
      {
        "id": "p2-12-a",
        "speaker": "Speaker 2",
        "text": "(A) There's blue paper in the cabinet.",
        "vietnamese": "(A) Có giấy màu xanh trong tủ."
      },
      {
        "id": "p2-12-b",
        "speaker": "Speaker 2",
        "text": "(B) Yes, it was my idea.",
        "vietnamese": "(B) Vâng, đó là ý kiến của tôi."
      },
      {
        "id": "p2-12-c",
        "speaker": "Speaker 2",
        "text": "(C) 50 should be enough for everyone.",
        "vietnamese": "(C) 50 bản chắc là đủ cho tất cả mọi người."
      }
    ],
    "questions": [
      {
        "num": 12,
        "question": "How many copies of the proposal should I make?",
        "vietnameseQuestion": "Tôi nên in bao nhiêu bản đề xuất này?",
        "options": [
          {
            "key": "A",
            "text": "There's blue paper in the cabinet.",
            "vietnamese": "Có giấy màu xanh trong tủ."
          },
          {
            "key": "B",
            "text": "Yes, it was my idea.",
            "vietnamese": "Vâng, đó là ý kiến của tôi."
          },
          {
            "key": "C",
            "text": "50 should be enough for everyone.",
            "vietnamese": "50 bản chắc là đủ cho tất cả mọi người."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Câu hỏi số lượng ('How many copies...'). Lựa chọn (C) đưa ra con số ước tính cụ thể là 50 bản."
      }
    ],
    "vocabulary": [
      {
        "word": "proposal",
        "meaning": "bản đề xuất kế hoạch",
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
    "id": "part2-13",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 13",
    "title": "Part 2 - Câu 13: Lý do Jonathan về sớm",
    "audioSrc": "/audio/test6_2024.mp3",
    "startTime": 414.4,
    "endTime": 433.9,
    "transcript": [
      {
        "id": "p2-13-q",
        "speaker": "Speaker 1",
        "text": "Why is Jonathan leaving early?",
        "vietnamese": "Tại sao Jonathan lại về sớm vậy?"
      },
      {
        "id": "p2-13-a",
        "speaker": "Speaker 2",
        "text": "(A) To catch the six o'clock train.",
        "vietnamese": "(A) Để kịp bắt chuyến tàu lúc sáu giờ."
      },
      {
        "id": "p2-13-b",
        "speaker": "Speaker 2",
        "text": "(B) On the early morning news.",
        "vietnamese": "(B) Trên bản tin buổi sáng sớm."
      },
      {
        "id": "p2-13-c",
        "speaker": "Speaker 2",
        "text": "(C) That's where he lives now.",
        "vietnamese": "(C) Đó là nơi anh ấy đang sống bây giờ."
      }
    ],
    "questions": [
      {
        "num": 13,
        "question": "Why is Jonathan leaving early?",
        "vietnameseQuestion": "Tại sao Jonathan lại về sớm vậy?",
        "options": [
          {
            "key": "A",
            "text": "To catch the six o'clock train.",
            "vietnamese": "Để kịp bắt chuyến tàu lúc sáu giờ."
          },
          {
            "key": "B",
            "text": "On the early morning news.",
            "vietnamese": "Trên bản tin buổi sáng sớm."
          },
          {
            "key": "C",
            "text": "That's where he lives now.",
            "vietnamese": "Đó là nơi anh ấy đang sống bây giờ."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Câu hỏi 'Why is Jonathan leaving early?'. Lựa chọn (A) nêu mục đích về sớm là để kịp chuyến tàu 6 giờ."
      }
    ],
    "vocabulary": [
      {
        "word": "catch the train",
        "meaning": "kịp bắt chuyến tàu hỏa",
        "partOfSpeech": "phr"
      }
    ]
  },
  {
    "id": "part2-14",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 14",
    "title": "Part 2 - Câu 14: Địa điểm tổ chức tiệc công ty",
    "audioSrc": "/audio/test6_2024.mp3",
    "startTime": 433.9,
    "endTime": 453.5,
    "transcript": [
      {
        "id": "p2-14-q",
        "speaker": "Speaker 1",
        "text": "Where's the company party being held?",
        "vietnamese": "Bữa tiệc công ty được tổ chức ở đâu vậy?"
      },
      {
        "id": "p2-14-a",
        "speaker": "Speaker 2",
        "text": "(A) It's a publishing firm.",
        "vietnamese": "(A) Đó là một công ty xuất bản."
      },
      {
        "id": "p2-14-b",
        "speaker": "Speaker 2",
        "text": "(B) Party of five at the table in the corner.",
        "vietnamese": "(B) Nhóm năm người ở bàn trong góc."
      },
      {
        "id": "p2-14-c",
        "speaker": "Speaker 2",
        "text": "(C) At the Chesterville Hotel.",
        "vietnamese": "(C) Tại Khách sạn Chesterville."
      }
    ],
    "questions": [
      {
        "num": 14,
        "question": "Where's the company party being held?",
        "vietnameseQuestion": "Bữa tiệc công ty được tổ chức ở đâu vậy?",
        "options": [
          {
            "key": "A",
            "text": "It's a publishing firm.",
            "vietnamese": "Đó là một công ty xuất bản."
          },
          {
            "key": "B",
            "text": "Party of five at the table in the corner.",
            "vietnamese": "Nhóm năm người ở bàn trong góc."
          },
          {
            "key": "C",
            "text": "At the Chesterville Hotel.",
            "vietnamese": "Tại Khách sạn Chesterville."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Câu hỏi 'Where...'. Lựa chọn (C) cung cấp địa điểm chính xác là Khách sạn Chesterville."
      }
    ],
    "vocabulary": [
      {
        "word": "company party",
        "meaning": "bữa tiệc công ty",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-15",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 15",
    "title": "Part 2 - Câu 15: Đăng ký đặt tạp chí dài hạn",
    "audioSrc": "/audio/test6_2024.mp3",
    "startTime": 453.5,
    "endTime": 474.1,
    "transcript": [
      {
        "id": "p2-15-q",
        "speaker": "Speaker 1",
        "text": "Did you want to sign up for a one-year magazine subscription?",
        "vietnamese": "Bạn có muốn đăng ký gói tạp chí dài hạn một năm không?"
      },
      {
        "id": "p2-15-a",
        "speaker": "Speaker 2",
        "text": "(A) How much will it cost?",
        "vietnamese": "(A) Gói đó có giá bao nhiêu tiền?"
      },
      {
        "id": "p2-15-b",
        "speaker": "Speaker 2",
        "text": "(B) Near the service center.",
        "vietnamese": "(B) Gần trung tâm dịch vụ."
      },
      {
        "id": "p2-15-c",
        "speaker": "Speaker 2",
        "text": "(C) Ackico works at the front desk.",
        "vietnamese": "(C) Ackico làm việc ở bàn tiếp tân."
      }
    ],
    "questions": [
      {
        "num": 15,
        "question": "Did you want to sign up for a one-year magazine subscription?",
        "vietnameseQuestion": "Bạn có muốn đăng ký gói tạp chí dài hạn một năm không?",
        "options": [
          {
            "key": "A",
            "text": "How much will it cost?",
            "vietnamese": "Gói đó có giá bao nhiêu tiền?"
          },
          {
            "key": "B",
            "text": "Near the service center.",
            "vietnamese": "Gần trung tâm dịch vụ."
          },
          {
            "key": "C",
            "text": "Ackico works at the front desk.",
            "vietnamese": "Ackico làm việc ở bàn tiếp tân."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Câu mời đăng ký mua báo/tạp chí. Lựa chọn (A) hỏi giá tiền trước khi đưa ra quyết định."
      }
    ],
    "vocabulary": [
      {
        "word": "subscription",
        "meaning": "gói đăng ký dài hạn định kỳ",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-16",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 16",
    "title": "Part 2 - Câu 16: Món mì ăn kèm sa lát",
    "audioSrc": "/audio/test6_2024.mp3",
    "startTime": 474.1,
    "endTime": 493.6,
    "transcript": [
      {
        "id": "p2-16-q",
        "speaker": "Speaker 1",
        "text": "Does this pastor come with a side salad?",
        "vietnamese": "Món mì này có kèm theo sa lát phụ không?"
      },
      {
        "id": "p2-16-a",
        "speaker": "Speaker 2",
        "text": "(A) We do have a tablecloth.",
        "vietnamese": "(A) Chúng tôi có khăn trải bàn."
      },
      {
        "id": "p2-16-b",
        "speaker": "Speaker 2",
        "text": "(B) No, I'm afraid not.",
        "vietnamese": "(B) Không, tôi e là không kèm theo."
      },
      {
        "id": "p2-16-c",
        "speaker": "Speaker 2",
        "text": "(C) I like it too.",
        "vietnamese": "(C) Tôi cũng thích nó."
      }
    ],
    "questions": [
      {
        "num": 16,
        "question": "Does this pastor come with a side salad?",
        "vietnameseQuestion": "Món mì này có kèm theo sa lát phụ không?",
        "options": [
          {
            "key": "A",
            "text": "We do have a tablecloth.",
            "vietnamese": "Chúng tôi có khăn trải bàn."
          },
          {
            "key": "B",
            "text": "No, I'm afraid not.",
            "vietnamese": "Không, tôi e là không kèm theo."
          },
          {
            "key": "C",
            "text": "I like it too.",
            "vietnamese": "Tôi cũng thích nó."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Câu hỏi Yes/No về món ăn kèm. Lựa chọn (B) lịch sự trả lời không kèm theo ('No, I\\'m afraid not')."
      }
    ],
    "vocabulary": [
      {
        "word": "pasta",
        "meaning": "món mì Ý",
        "partOfSpeech": "n"
      },
      {
        "word": "side salad",
        "meaning": "đĩa sa-lát ăn kèm",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-17",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 17",
    "title": "Part 2 - Câu 17: Thời gian họp về hóa đơn",
    "audioSrc": "/audio/test6_2024.mp3",
    "startTime": 493.6,
    "endTime": 513.0,
    "transcript": [
      {
        "id": "p2-17-q",
        "speaker": "Speaker 1",
        "text": "When can we meet about the invoices?",
        "vietnamese": "Khi nào chúng ta có thể gặp nhau để bàn về các hóa đơn?"
      },
      {
        "id": "p2-17-a",
        "speaker": "Speaker 2",
        "text": "(A) Supplies for the office.",
        "vietnamese": "(A) Văn phòng phẩm cho văn phòng."
      },
      {
        "id": "p2-17-b",
        "speaker": "Speaker 2",
        "text": "(B) I'm free after two.",
        "vietnamese": "(B) Tôi rảnh sau hai giờ."
      },
      {
        "id": "p2-17-c",
        "speaker": "Speaker 2",
        "text": "(C) Probably on Harold's desk.",
        "vietnamese": "(C) Có lẽ ở trên bàn của Harold."
      }
    ],
    "questions": [
      {
        "num": 17,
        "question": "When can we meet about the invoices?",
        "vietnameseQuestion": "Khi nào chúng ta có thể gặp nhau để bàn về các hóa đơn?",
        "options": [
          {
            "key": "A",
            "text": "Supplies for the office.",
            "vietnamese": "Văn phòng phẩm cho văn phòng."
          },
          {
            "key": "B",
            "text": "I'm free after two.",
            "vietnamese": "Tôi rảnh sau hai giờ."
          },
          {
            "key": "C",
            "text": "Probably on Harold's desk.",
            "vietnamese": "Có lẽ ở trên bàn của Harold."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Câu hỏi thời gian ('When can we meet...'). Lựa chọn (B) đưa ra khung giờ rảnh là sau 2 giờ chiều."
      }
    ],
    "vocabulary": [
      {
        "word": "invoice",
        "meaning": "hóa đơn thanh toán",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-18",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 18",
    "title": "Part 2 - Câu 18: Hỗ trợ mở tài khoản tiết kiệm",
    "audioSrc": "/audio/test6_2024.mp3",
    "startTime": 513.0,
    "endTime": 532.7,
    "transcript": [
      {
        "id": "p2-18-q",
        "speaker": "Speaker 1",
        "text": "Would you like me to help you open a savings account?",
        "vietnamese": "Bạn có muốn tôi giúp bạn mở tài khoản tiết kiệm không?"
      },
      {
        "id": "p2-18-a",
        "speaker": "Speaker 2",
        "text": "(A) I've already counted them.",
        "vietnamese": "(A) Tôi đã đếm chúng rồi."
      },
      {
        "id": "p2-18-b",
        "speaker": "Speaker 2",
        "text": "(B) That'd be great.",
        "vietnamese": "(B) Được vậy thì tốt quá."
      },
      {
        "id": "p2-18-c",
        "speaker": "Speaker 2",
        "text": "(C) 50 euros each.",
        "vietnamese": "(C) Mỗi cái 50 euro."
      }
    ],
    "questions": [
      {
        "num": 18,
        "question": "Would you like me to help you open a savings account?",
        "vietnameseQuestion": "Bạn có muốn tôi giúp bạn mở tài khoản tiết kiệm không?",
        "options": [
          {
            "key": "A",
            "text": "I've already counted them.",
            "vietnamese": "Tôi đã đếm chúng rồi."
          },
          {
            "key": "B",
            "text": "That'd be great.",
            "vietnamese": "Được vậy thì tốt quá."
          },
          {
            "key": "C",
            "text": "50 euros each.",
            "vietnamese": "Mỗi cái 50 euro."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Câu đề nghị giúp đỡ ('Would you like me to help...'). Lựa chọn (B) đón nhận lời đề nghị ('That\\'d be great')."
      }
    ],
    "vocabulary": [
      {
        "word": "savings account",
        "meaning": "tài khoản tiết kiệm ngân hàng",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-19",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 19",
    "title": "Part 2 - Câu 19: Thời điểm đăng tin tuyển dụng",
    "audioSrc": "/audio/test6_2024.mp3",
    "startTime": 532.7,
    "endTime": 552.2,
    "transcript": [
      {
        "id": "p2-19-q",
        "speaker": "Speaker 1",
        "text": "When did you post the job opening?",
        "vietnamese": "Bạn đã đăng tin tuyển dụng việc làm khi nào vậy?"
      },
      {
        "id": "p2-19-a",
        "speaker": "Speaker 2",
        "text": "(A) On the bulletin board in the hallway?",
        "vietnamese": "(A) Trên bảng thông báo ở hành lang à?"
      },
      {
        "id": "p2-19-b",
        "speaker": "Speaker 2",
        "text": "(B) It's been on the website for a month.",
        "vietnamese": "(B) Nó đã được đăng trên trang web được một tháng rồi."
      },
      {
        "id": "p2-19-c",
        "speaker": "Speaker 2",
        "text": "(C) Can you close the door?",
        "vietnamese": "(C) Bạn có thể đóng cửa lại không?"
      }
    ],
    "questions": [
      {
        "num": 19,
        "question": "When did you post the job opening?",
        "vietnameseQuestion": "Bạn đã đăng tin tuyển dụng việc làm khi nào vậy?",
        "options": [
          {
            "key": "A",
            "text": "On the bulletin board in the hallway?",
            "vietnamese": "Trên bảng thông báo ở hành lang à?"
          },
          {
            "key": "B",
            "text": "It's been on the website for a month.",
            "vietnamese": "Nó đã được đăng trên trang web được một tháng rồi."
          },
          {
            "key": "C",
            "text": "Can you close the door?",
            "vietnamese": "Bạn có thể đóng cửa lại không?"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Câu hỏi 'When did you post...'. Lựa chọn (B) cho biết tin đã được đăng trên web cả tháng nay."
      }
    ],
    "vocabulary": [
      {
        "word": "job opening",
        "meaning": "vị trí việc làm cần tuyển",
        "partOfSpeech": "n"
      },
      {
        "word": "bulletin board",
        "meaning": "bảng thông báo",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-20",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 20",
    "title": "Part 2 - Câu 20: Ứng tuyển vị trí quản lý",
    "audioSrc": "/audio/test6_2024.mp3",
    "startTime": 552.2,
    "endTime": 572.7,
    "transcript": [
      {
        "id": "p2-20-q",
        "speaker": "Speaker 1",
        "text": "Are you applying for the manager position?",
        "vietnamese": "Bạn có nộp đơn ứng tuyển cho vị trí quản lý không?"
      },
      {
        "id": "p2-20-a",
        "speaker": "Speaker 2",
        "text": "(A) About 16 more employees.",
        "vietnamese": "(A) Thêm khoảng 16 nhân viên nữa."
      },
      {
        "id": "p2-20-b",
        "speaker": "Speaker 2",
        "text": "(B) I'll check her schedule again.",
        "vietnamese": "(B) Tôi sẽ kiểm tra lại lịch trình của cô ấy."
      },
      {
        "id": "p2-20-c",
        "speaker": "Speaker 2",
        "text": "(C) Yes, I hope I get it.",
        "vietnamese": "(C) Có chứ, tôi hy vọng mình sẽ trúng tuyển."
      }
    ],
    "questions": [
      {
        "num": 20,
        "question": "Are you applying for the manager position?",
        "vietnameseQuestion": "Bạn có nộp đơn ứng tuyển cho vị trí quản lý không?",
        "options": [
          {
            "key": "A",
            "text": "About 16 more employees.",
            "vietnamese": "Thêm khoảng 16 nhân viên nữa."
          },
          {
            "key": "B",
            "text": "I'll check her schedule again.",
            "vietnamese": "Tôi sẽ kiểm tra lại lịch trình của cô ấy."
          },
          {
            "key": "C",
            "text": "Yes, I hope I get it.",
            "vietnamese": "Có chứ, tôi hy vọng mình sẽ trúng tuyển."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Câu hỏi Yes/No về việc nộp đơn. Lựa chọn (C) xác nhận có và bày tỏ hy vọng nhận được công việc."
      }
    ],
    "vocabulary": [
      {
        "word": "apply for",
        "meaning": "nộp đơn ứng tuyển",
        "partOfSpeech": "v"
      },
      {
        "word": "manager position",
        "meaning": "vị trí quản lý",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-21",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 21",
    "title": "Part 2 - Câu 21: Hạng vé máy bay",
    "audioSrc": "/audio/test6_2024.mp3",
    "startTime": 572.7,
    "endTime": 592.3,
    "transcript": [
      {
        "id": "p2-21-q",
        "speaker": "Speaker 1",
        "text": "Are you traveling in business class or economy?",
        "vietnamese": "Bạn đi máy bay hạng thương gia hay hạng phổ thông?"
      },
      {
        "id": "p2-21-a",
        "speaker": "Speaker 2",
        "text": "(A) My flight was just canceled.",
        "vietnamese": "(A) Chuyến bay của tôi vừa mới bị hủy rồi."
      },
      {
        "id": "p2-21-b",
        "speaker": "Speaker 2",
        "text": "(B) My focus is history.",
        "vietnamese": "(B) Trọng tâm nghiên cứu của tôi là lịch sử."
      },
      {
        "id": "p2-21-c",
        "speaker": "Speaker 2",
        "text": "(C) London then New York.",
        "vietnamese": "(C) Luân Đôn rồi sau đó đến New York."
      }
    ],
    "questions": [
      {
        "num": 21,
        "question": "Are you traveling in business class or economy?",
        "vietnameseQuestion": "Bạn đi máy bay hạng thương gia hay hạng phổ thông?",
        "options": [
          {
            "key": "A",
            "text": "My flight was just canceled.",
            "vietnamese": "Chuyến bay của tôi vừa mới bị hủy rồi."
          },
          {
            "key": "B",
            "text": "My focus is history.",
            "vietnamese": "Trọng tâm nghiên cứu của tôi là lịch sử."
          },
          {
            "key": "C",
            "text": "London then New York.",
            "vietnamese": "Luân Đôn rồi sau đó đến New York."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Câu hỏi lựa chọn hạng vé. Lựa chọn (A) gián tiếp trả lời bằng cách thông báo chuyến bay đã bị hủy."
      }
    ],
    "vocabulary": [
      {
        "word": "business class",
        "meaning": "hạng thương gia",
        "partOfSpeech": "n"
      },
      {
        "word": "economy class",
        "meaning": "hạng phổ thông",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-22",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 22",
    "title": "Part 2 - Câu 22: Số lượng người đăng ký tạp chí suy giảm",
    "audioSrc": "/audio/test6_2024.mp3",
    "startTime": 592.3,
    "endTime": 615.8,
    "transcript": [
      {
        "id": "p2-22-q",
        "speaker": "Speaker 1",
        "text": "The number of subscribers for our magazine has decreased recently.",
        "vietnamese": "Số lượng người đăng ký theo dõi tạp chí của chúng ta gần đây đã bị giảm."
      },
      {
        "id": "p2-22-a",
        "speaker": "Speaker 2",
        "text": "(A) There's room in the budget for more advertising.",
        "vietnamese": "(A) Ngân sách vẫn còn dư để chạy thêm quảng cáo đấy."
      },
      {
        "id": "p2-22-b",
        "speaker": "Speaker 2",
        "text": "(B) An annual membership fee.",
        "vietnamese": "(B) Khoản phí thành viên hàng năm."
      },
      {
        "id": "p2-22-c",
        "speaker": "Speaker 2",
        "text": "(C) There are six folders on the table.",
        "vietnamese": "(C) Có sáu tập hồ sơ trên bàn."
      }
    ],
    "questions": [
      {
        "num": 22,
        "question": "The number of subscribers for our magazine has decreased recently.",
        "vietnameseQuestion": "Số lượng người đăng ký theo dõi tạp chí của chúng ta gần đây đã bị giảm.",
        "options": [
          {
            "key": "A",
            "text": "There's room in the budget for more advertising.",
            "vietnamese": "Ngân sách vẫn còn dư để chạy thêm quảng cáo đấy."
          },
          {
            "key": "B",
            "text": "An annual membership fee.",
            "vietnamese": "Khoản phí thành viên hàng năm."
          },
          {
            "key": "C",
            "text": "There are six folders on the table.",
            "vietnamese": "Có sáu tập hồ sơ trên bàn."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Câu trần thuật về vấn đề giảm người đăng ký. Lựa chọn (A) đề xuất giải pháp chi thêm tiền ngân sách cho quảng cáo."
      }
    ],
    "vocabulary": [
      {
        "word": "subscriber",
        "meaning": "người đăng ký theo dõi định kỳ",
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
    "id": "part2-23",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 23",
    "title": "Part 2 - Câu 23: Cách làm sạch tấm pin năng lượng mặt trời",
    "audioSrc": "/audio/test6_2024.mp3",
    "startTime": 615.8,
    "endTime": 642.8,
    "transcript": [
      {
        "id": "p2-23-q",
        "speaker": "Speaker 1",
        "text": "How do you clean the solar panels without damaging them?",
        "vietnamese": "Làm thế nào để bạn làm sạch các tấm pin mặt trời mà không làm hỏng chúng?"
      },
      {
        "id": "p2-23-a",
        "speaker": "Speaker 2",
        "text": "(A) The glass can be any color you want.",
        "vietnamese": "(A) Kính có thể có bất kỳ màu nào bạn muốn."
      },
      {
        "id": "p2-23-b",
        "speaker": "Speaker 2",
        "text": "(B) No, the sun isn't out today.",
        "vietnamese": "(B) Không, hôm nay trời không có nắng."
      },
      {
        "id": "p2-23-c",
        "speaker": "Speaker 2",
        "text": "(C) I pay a company to do all the maintenance.",
        "vietnamese": "(C) Tôi thuê một công ty làm toàn bộ công tác bảo trì."
      }
    ],
    "questions": [
      {
        "num": 23,
        "question": "How do you clean the solar panels without damaging them?",
        "vietnameseQuestion": "Làm thế nào để bạn làm sạch các tấm pin mặt trời mà không làm hỏng chúng?",
        "options": [
          {
            "key": "A",
            "text": "The glass can be any color you want.",
            "vietnamese": "Kính có thể có bất kỳ màu nào bạn muốn."
          },
          {
            "key": "B",
            "text": "No, the sun isn't out today.",
            "vietnamese": "Không, hôm nay trời không có nắng."
          },
          {
            "key": "C",
            "text": "I pay a company to do all the maintenance.",
            "vietnamese": "Tôi thuê một công ty làm toàn bộ công tác bảo trì."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Câu hỏi cách thức ('How do you clean...'). Lựa chọn (C) cho biết người nói thuê ngoài công ty chuyên bảo trì làm việc này."
      }
    ],
    "vocabulary": [
      {
        "word": "solar panel",
        "meaning": "tấm pin năng lượng mặt trời",
        "partOfSpeech": "n"
      },
      {
        "word": "maintenance",
        "meaning": "công tác bảo trì bảo dưỡng",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-24",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 24",
    "title": "Part 2 - Câu 24: Thời điểm nhận chứng chỉ qua đường bưu điện",
    "audioSrc": "/audio/test6_2024.mp3",
    "startTime": 642.8,
    "endTime": 657.0,
    "transcript": [
      {
        "id": "p2-24-q",
        "speaker": "Speaker 1",
        "text": "When will I receive my certificate in the mail?",
        "vietnamese": "Khi nào tôi sẽ nhận được chứng chỉ của mình qua đường bưu điện?"
      },
      {
        "id": "p2-24-a",
        "speaker": "Speaker 2",
        "text": "(A) I'll have to check with the office.",
        "vietnamese": "(A) Tôi sẽ phải kiểm tra lại với văn phòng."
      },
      {
        "id": "p2-24-b",
        "speaker": "Speaker 2",
        "text": "(B) Turn left at the light.",
        "vietnamese": "(B) Rẽ trái ở chỗ đèn giao thông."
      },
      {
        "id": "p2-24-c",
        "speaker": "Speaker 2",
        "text": "(C) No, thank you.",
        "vietnamese": "(C) Không, cảm ơn bạn."
      }
    ],
    "questions": [
      {
        "num": 24,
        "question": "When will I receive my certificate in the mail?",
        "vietnameseQuestion": "Khi nào tôi sẽ nhận được chứng chỉ của mình qua đường bưu điện?",
        "options": [
          {
            "key": "A",
            "text": "I'll have to check with the office.",
            "vietnamese": "Tôi sẽ phải kiểm tra lại với văn phòng."
          },
          {
            "key": "B",
            "text": "Turn left at the light.",
            "vietnamese": "Rẽ trái ở chỗ đèn giao thông."
          },
          {
            "key": "C",
            "text": "No, thank you.",
            "vietnamese": "Không, cảm ơn bạn."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Câu hỏi thời gian nhận thư. Lựa chọn (A) trả lời người nói chưa rõ và sẽ kiểm tra lại với văn phòng."
      }
    ],
    "vocabulary": [
      {
        "word": "certificate",
        "meaning": "chứng chỉ, văn bằng chứng nhận",
        "partOfSpeech": "n"
      },
      {
        "word": "in the mail",
        "meaning": "qua đường bưu điện",
        "partOfSpeech": "phr"
      }
    ]
  },
  {
    "id": "part2-25",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 25",
    "title": "Part 2 - Câu 25: Mặt hàng máy cắt cỏ Ramirez",
    "audioSrc": "/audio/test6_2024.mp3",
    "startTime": 657.0,
    "endTime": 682.7,
    "transcript": [
      {
        "id": "p2-25-q",
        "speaker": "Speaker 1",
        "text": "Don't we sell Ramirez lawnmowers?",
        "vietnamese": "Chẳng phải chúng ta có bán máy cắt cỏ hiệu Ramirez sao?"
      },
      {
        "id": "p2-25-a",
        "speaker": "Speaker 2",
        "text": "(A) The plants need more water.",
        "vietnamese": "(A) Cây cối cần thêm nước."
      },
      {
        "id": "p2-25-b",
        "speaker": "Speaker 2",
        "text": "(B) Sorry, refunds are not allowed.",
        "vietnamese": "(B) Rất tiếc, việc hoàn tiền không được phép."
      },
      {
        "id": "p2-25-c",
        "speaker": "Speaker 2",
        "text": "(C) I work in the home decor area.",
        "vietnamese": "(C) Tôi làm việc ở khu vực trang trí nhà cửa nên không rõ."
      }
    ],
    "questions": [
      {
        "num": 25,
        "question": "Don't we sell Ramirez lawnmowers?",
        "vietnameseQuestion": "Chẳng phải chúng ta có bán máy cắt cỏ hiệu Ramirez sao?",
        "options": [
          {
            "key": "A",
            "text": "The plants need more water.",
            "vietnamese": "Cây cối cần thêm nước."
          },
          {
            "key": "B",
            "text": "Sorry, refunds are not allowed.",
            "vietnamese": "Rất tiếc, việc hoàn tiền không được phép."
          },
          {
            "key": "C",
            "text": "I work in the home decor area.",
            "vietnamese": "Tôi làm việc ở khu vực trang trí nhà cửa nên không rõ."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Câu hỏi kiểm tra mặt hàng. Lựa chọn (C) giải thích người nói làm ở gian hàng khác (home decor) nên không nắm rõ thông tin."
      }
    ],
    "vocabulary": [
      {
        "word": "lawnmower",
        "meaning": "máy cắt cỏ",
        "partOfSpeech": "n"
      },
      {
        "word": "home decor",
        "meaning": "đồ trang trí nội thất gia đình",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-26",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 26",
    "title": "Part 2 - Câu 26: Lên lịch họp dự án nghiên cứu",
    "audioSrc": "/audio/test6_2024.mp3",
    "startTime": 682.7,
    "endTime": 697.8,
    "transcript": [
      {
        "id": "p2-26-q",
        "speaker": "Speaker 1",
        "text": "Should we meet to discuss our research project?",
        "vietnamese": "Chúng ta có nên gặp nhau để thảo luận về dự án nghiên cứu không?"
      },
      {
        "id": "p2-26-a",
        "speaker": "Speaker 2",
        "text": "(A) A publishing manual.",
        "vietnamese": "(A) Một cuốn sổ tay hướng dẫn xuất bản."
      },
      {
        "id": "p2-26-b",
        "speaker": "Speaker 2",
        "text": "(B) Put something on my calendar.",
        "vietnamese": "(B) Hãy xếp một khung giờ vào lịch làm việc của tôi đi."
      },
      {
        "id": "p2-26-c",
        "speaker": "Speaker 2",
        "text": "(C) Alphabetical order is fine, I think.",
        "vietnamese": "(C) Tôi nghĩ theo thứ tự bảng chữ cái là ổn."
      }
    ],
    "questions": [
      {
        "num": 26,
        "question": "Should we meet to discuss our research project?",
        "vietnameseQuestion": "Chúng ta có nên gặp nhau để thảo luận về dự án nghiên cứu không?",
        "options": [
          {
            "key": "A",
            "text": "A publishing manual.",
            "vietnamese": "Một cuốn sổ tay hướng dẫn xuất bản."
          },
          {
            "key": "B",
            "text": "Put something on my calendar.",
            "vietnamese": "Hãy xếp một khung giờ vào lịch làm việc của tôi đi."
          },
          {
            "key": "C",
            "text": "Alphabetical order is fine, I think.",
            "vietnamese": "Tôi nghĩ theo thứ tự bảng chữ cái là ổn."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Câu đề xuất họp mặt ('Should we meet...'). Lựa chọn (B) đồng ý và bảo đồng nghiệp chủ động lên lịch vào lịch biểu ('Put something on my calendar')."
      }
    ],
    "vocabulary": [
      {
        "word": "research project",
        "meaning": "dự án nghiên cứu",
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
    "id": "part2-27",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 27",
    "title": "Part 2 - Câu 27: Giờ tan ca của đội vệ sinh",
    "audioSrc": "/audio/test6_2024.mp3",
    "startTime": 697.8,
    "endTime": 718.5,
    "transcript": [
      {
        "id": "p2-27-q",
        "speaker": "Speaker 1",
        "text": "When does the cleaning staff leave for the day? A.",
        "vietnamese": "Khi nào thì đội ngũ nhân viên vệ sinh tan ca về?"
      },
      {
        "id": "p2-27-a",
        "speaker": "Speaker 2",
        "text": "(A) A supply closet in the hall.",
        "vietnamese": "(A) Một tủ đựng đồ dùng ở hành lang."
      },
      {
        "id": "p2-27-b",
        "speaker": "Speaker 2",
        "text": "(B) By six o'clock, usually.",
        "vietnamese": "(B) Thường là trước sáu giờ."
      },
      {
        "id": "p2-27-c",
        "speaker": "Speaker 2",
        "text": "(C) The leaves come out in the spring.",
        "vietnamese": "(C) Lá cây đâm chồi vào mùa xuân."
      }
    ],
    "questions": [
      {
        "num": 27,
        "question": "When does the cleaning staff leave for the day? A.",
        "vietnameseQuestion": "Khi nào thì đội ngũ nhân viên vệ sinh tan ca về?",
        "options": [
          {
            "key": "A",
            "text": "A supply closet in the hall.",
            "vietnamese": "Một tủ đựng đồ dùng ở hành lang."
          },
          {
            "key": "B",
            "text": "By six o'clock, usually.",
            "vietnamese": "Thường là trước sáu giờ."
          },
          {
            "key": "C",
            "text": "The leaves come out in the spring.",
            "vietnamese": "Lá cây đâm chồi vào mùa xuân."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Câu hỏi 'When does the cleaning staff leave for the day?'. Lựa chọn (B) trả lời giờ giấc cụ thể là trước 6 giờ."
      }
    ],
    "vocabulary": [
      {
        "word": "cleaning staff",
        "meaning": "nhân viên vệ sinh dọn dẹp",
        "partOfSpeech": "n"
      },
      {
        "word": "leave for the day",
        "meaning": "hết giờ làm việc ra về",
        "partOfSpeech": "phr"
      }
    ]
  },
  {
    "id": "part2-28",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 28",
    "title": "Part 2 - Câu 28: Hình thức thanh toán đôi giày",
    "audioSrc": "/audio/test6_2024.mp3",
    "startTime": 718.5,
    "endTime": 742.4,
    "transcript": [
      {
        "id": "p2-28-q",
        "speaker": "Speaker 1",
        "text": "How would you like to pay for these shoes today?",
        "vietnamese": "Hôm nay bạn muốn thanh toán đôi giày này bằng hình thức nào?"
      },
      {
        "id": "p2-28-a",
        "speaker": "Speaker 2",
        "text": "(A) With a store gift card.",
        "vietnamese": "(A) Bằng thẻ quà tặng của cửa hàng."
      },
      {
        "id": "p2-28-b",
        "speaker": "Speaker 2",
        "text": "(B) I wear a size 38.",
        "vietnamese": "(B) Tôi đi giày cỡ 38."
      },
      {
        "id": "p2-28-c",
        "speaker": "Speaker 2",
        "text": "(C) A friend recommended them.",
        "vietnamese": "(C) Một người bạn đã giới thiệu chúng cho tôi."
      }
    ],
    "questions": [
      {
        "num": 28,
        "question": "How would you like to pay for these shoes today?",
        "vietnameseQuestion": "Hôm nay bạn muốn thanh toán đôi giày này bằng hình thức nào?",
        "options": [
          {
            "key": "A",
            "text": "With a store gift card.",
            "vietnamese": "Bằng thẻ quà tặng của cửa hàng."
          },
          {
            "key": "B",
            "text": "I wear a size 38.",
            "vietnamese": "Tôi đi giày cỡ 38."
          },
          {
            "key": "C",
            "text": "A friend recommended them.",
            "vietnamese": "Một người bạn đã giới thiệu chúng cho tôi."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Câu hỏi phương thức thanh toán. Lựa chọn (A) trả lời thanh toán bằng thẻ quà tặng cửa hàng."
      }
    ],
    "vocabulary": [
      {
        "word": "gift card",
        "meaning": "thẻ quà tặng",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-29",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 29",
    "title": "Part 2 - Câu 29: Đánh giá hiệu quả của quảng cáo",
    "audioSrc": "/audio/test6_2024.mp3",
    "startTime": 742.4,
    "endTime": 758.5,
    "transcript": [
      {
        "id": "p2-29-q",
        "speaker": "Speaker 1",
        "text": "It's an effective advertisement, isn't it?",
        "vietnamese": "Đó là một mẩu quảng cáo rất hiệu quả đúng không?"
      },
      {
        "id": "p2-29-a",
        "speaker": "Speaker 2",
        "text": "(A) I've heard that sales have increased.",
        "vietnamese": "(A) Tôi nghe nói doanh số bán hàng đã tăng lên rồi đấy."
      },
      {
        "id": "p2-29-b",
        "speaker": "Speaker 2",
        "text": "(B) The next issue of the magazine.",
        "vietnamese": "(B) Kỳ phát hành tiếp theo của tạp chí."
      },
      {
        "id": "p2-29-c",
        "speaker": "Speaker 2",
        "text": "(C) Isn't the policy in effect already?",
        "vietnamese": "(C) Chẳng phải chính sách đã có hiệu lực rồi sao?"
      }
    ],
    "questions": [
      {
        "num": 29,
        "question": "It's an effective advertisement, isn't it?",
        "vietnameseQuestion": "Đó là một mẩu quảng cáo rất hiệu quả đúng không?",
        "options": [
          {
            "key": "A",
            "text": "I've heard that sales have increased.",
            "vietnamese": "Tôi nghe nói doanh số bán hàng đã tăng lên rồi đấy."
          },
          {
            "key": "B",
            "text": "The next issue of the magazine.",
            "vietnamese": "Kỳ phát hành tiếp theo của tạp chí."
          },
          {
            "key": "C",
            "text": "Isn't the policy in effect already?",
            "vietnamese": "Chẳng phải chính sách đã có hiệu lực rồi sao?"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Câu hỏi xác nhận hiệu quả quảng cáo. Lựa chọn (A) đồng tình và đưa ra minh chứng doanh số bán hàng đã tăng."
      }
    ],
    "vocabulary": [
      {
        "word": "effective",
        "meaning": "hiệu quả",
        "partOfSpeech": "adj"
      },
      {
        "word": "sales",
        "meaning": "doanh số bán hàng",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-30",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 30",
    "title": "Part 2 - Câu 30: Rủ đi dạo sau bữa trưa",
    "audioSrc": "/audio/test6_2024.mp3",
    "startTime": 758.5,
    "endTime": 778.9,
    "transcript": [
      {
        "id": "p2-30-q",
        "speaker": "Speaker 1",
        "text": "Why don't we take a walk after lunch?",
        "vietnamese": "Sao chúng ta không đi dạo một chút sau bữa trưa nhỉ?"
      },
      {
        "id": "p2-30-a",
        "speaker": "Speaker 2",
        "text": "(A) The sales report is due at one o'clock.",
        "vietnamese": "(A) Báo cáo bán hàng phải nộp lúc một giờ."
      },
      {
        "id": "p2-30-b",
        "speaker": "Speaker 2",
        "text": "(B) No, in parking area B.",
        "vietnamese": "(B) Không, ở khu vực đỗ xe B."
      },
      {
        "id": "p2-30-c",
        "speaker": "Speaker 2",
        "text": "(C) I'll have spaghetti, please.",
        "vietnamese": "(C) Làm ơn cho tôi một đĩa mì spaghetti."
      }
    ],
    "questions": [
      {
        "num": 30,
        "question": "Why don't we take a walk after lunch?",
        "vietnameseQuestion": "Sao chúng ta không đi dạo một chút sau bữa trưa nhỉ?",
        "options": [
          {
            "key": "A",
            "text": "The sales report is due at one o'clock.",
            "vietnamese": "Báo cáo bán hàng phải nộp lúc một giờ."
          },
          {
            "key": "B",
            "text": "No, in parking area B.",
            "vietnamese": "Không, ở khu vực đỗ xe B."
          },
          {
            "key": "C",
            "text": "I'll have spaghetti, please.",
            "vietnamese": "Làm ơn cho tôi một đĩa mì spaghetti."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Câu rủ đi dạo ('Why don\\'t we take a walk...'). Lựa chọn (A) từ chối khéo léo vì phải hoàn thành báo cáo nộp lúc 1 giờ."
      }
    ],
    "vocabulary": [
      {
        "word": "take a walk",
        "meaning": "đi dạo bộ",
        "partOfSpeech": "phr"
      },
      {
        "word": "due",
        "meaning": "đến hạn nộp",
        "partOfSpeech": "adj"
      }
    ]
  },
  {
    "id": "part2-31",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 31",
    "title": "Part 2 - Câu 31: Chuyển hàng theo mùa ra phía trước cửa hàng",
    "audioSrc": "/audio/test6_2024.mp3",
    "startTime": 778.9,
    "endTime": 801.4,
    "transcript": [
      {
        "id": "p2-31-q",
        "speaker": "Speaker 1",
        "text": "I decided to move the seasonal merchandise to the front of the store.",
        "vietnamese": "Tôi đã quyết định chuyển các mặt hàng theo mùa ra phía trước cửa hàng."
      },
      {
        "id": "p2-31-a",
        "speaker": "Speaker 2",
        "text": "(A) Did you put some of it in the window display?",
        "vietnamese": "(A) Bạn có đặt một ít vào tủ kính trưng bày không?"
      },
      {
        "id": "p2-31-b",
        "speaker": "Speaker 2",
        "text": "(B) For our summer clothing collection.",
        "vietnamese": "(B) Dành cho bộ sưu tập trang phục mùa hè của chúng tôi."
      },
      {
        "id": "p2-31-c",
        "speaker": "Speaker 2",
        "text": "(C) The moving van is coming tomorrow.",
        "vietnamese": "(C) Xe tải chuyển nhà sẽ đến vào ngày mai."
      }
    ],
    "questions": [
      {
        "num": 31,
        "question": "I decided to move the seasonal merchandise to the front of the store.",
        "vietnameseQuestion": "Tôi đã quyết định chuyển các mặt hàng theo mùa ra phía trước cửa hàng.",
        "options": [
          {
            "key": "A",
            "text": "Did you put some of it in the window display?",
            "vietnamese": "Bạn có đặt một ít vào tủ kính trưng bày không?"
          },
          {
            "key": "B",
            "text": "For our summer clothing collection.",
            "vietnamese": "Dành cho bộ sưu tập trang phục mùa hè của chúng tôi."
          },
          {
            "key": "C",
            "text": "The moving van is coming tomorrow.",
            "vietnamese": "Xe tải chuyển nhà sẽ đến vào ngày mai."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Câu trần thuật về cách trưng bày hàng. Lựa chọn (A) hỏi thêm xem đồng nghiệp có bày một phần ra ô kính trưng bày mặt tiền không."
      }
    ],
    "vocabulary": [
      {
        "word": "seasonal merchandise",
        "meaning": "hàng hóa theo mùa vụ",
        "partOfSpeech": "n"
      },
      {
        "word": "window display",
        "meaning": "tủ kính trưng bày hàng ở mặt tiền",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part3-32-34",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 32 - 34",
    "title": "Part 3 - Câu 32 - 34: Kế hoạch cải tạo nhà hát và buổi diễn nhạc kịch",
    "audioSrc": "/audio/test6_2024.mp3",
    "startTime": 835.82,
    "endTime": 898.69,
    "transcript": [
      {
        "id": "p3-32-1",
        "speaker": "Woman",
        "text": "The renovations we're planning for the theater are long overdue.",
        "vietnamese": "Kế hoạch cải tạo nhà hát của chúng ta đã quá hạn từ lâu rồi."
      },
      {
        "id": "p3-32-2",
        "speaker": "Man",
        "text": "I agree. The main stage needs updating, and the sound system is outdated.",
        "vietnamese": "Tôi đồng ý. Sân khấu chính cần nâng cấp, và hệ thống âm thanh đã lỗi thời."
      },
      {
        "id": "p3-32-3",
        "speaker": "Woman",
        "text": "Luckily, our spring musical production was very profitable and generated substantial ticket revenue.",
        "vietnamese": "May mắn thay, vở nhạc kịch mùa xuân của chúng ta sinh lời rất tốt và mang lại doanh thu bán vé đáng kể."
      },
      {
        "id": "p3-32-4",
        "speaker": "Man",
        "text": "That gives us the capital we need. Let's organize an open house reception next month to announce the renovation plans to the public.",
        "vietnamese": "Điều đó mang lại nguồn vốn chúng ta cần. Hãy tổ chức một buổi tiếp đón mở cửa tự do vào tháng tới để công bố kế hoạch cải tạo tới công chúng."
      }
    ],
    "questions": [
      {
        "num": 32,
        "question": "Whatarethe speakersmainlydiscussing?",
        "vietnameseQuestion": "Những người nói chủ yếu thảo luận về điều gì?",
        "options": [
          {
            "key": "A",
            "text": "Theaterrenovations",
            "vietnamese": "Kế hoạch cải tạo nhà hát"
          },
          {
            "key": "B",
            "text": "Changes to a performance schedule",
            "vietnamese": "Chiến lược tiếp thị"
          },
          {
            "key": "C",
            "text": "Selection of a new lighting director",
            "vietnamese": "Lịch diễn"
          },
          {
            "key": "D",
            "text": "A promotional gift",
            "vietnamese": "Tuyển dụng diễn viên"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Họ thảo luận về công tác cải tạo nhà hát: 'The renovations we\\'re planning for the theater' (renovation plans - A)."
      },
      {
        "num": 33,
        "question": "What does the man say about a musical production?",
        "vietnameseQuestion": "Người đàn ông nói gì về vở diễn nhạc kịch?",
        "options": [
          {
            "key": "A",
            "text": "Itwasbased ona book.",
            "vietnamese": "Nó bị hủy bỏ"
          },
          {
            "key": "B",
            "text": "Ithasbeensuccessful.",
            "vietnamese": "Nó rất có lãi / sinh lời cao"
          },
          {
            "key": "C",
            "text": "Itwill beperformedoverseas.",
            "vietnamese": "Nó bị đánh giá thấp"
          },
          {
            "key": "D",
            "text": "Some casting changes were made.",
            "vietnamese": "Nó cần thêm diễn viên"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Người nói cho biết vở nhạc kịch mang lại doanh thu lớn: 'our spring musical production was very profitable' (rất có lãi - profitable - B)."
      },
      {
        "num": 34,
        "question": "What event are the speakers planning?",
        "vietnameseQuestion": "Những người nói đang lên kế hoạch cho sự kiện nào?",
        "options": [
          {
            "key": "A",
            "text": "Apressconference",
            "vietnamese": "Lễ trao giải"
          },
          {
            "key": "B",
            "text": "Afund-raiser",
            "vietnamese": "Buổi tiếp đón mở cửa tự do"
          },
          {
            "key": "C",
            "text": "Anaudition",
            "vietnamese": "Họp báo"
          },
          {
            "key": "D",
            "text": "An autograph session",
            "vietnamese": "Buổi thử giọng"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Họ lên kế hoạch: 'organize an open house reception next month' (buổi tiếp đón mở cửa tự do - an open house - B)."
      }
    ],
    "vocabulary": [
      {
        "word": "renovation",
        "meaning": "sự cải tạo nâng cấp",
        "partOfSpeech": "n"
      },
      {
        "word": "musical production",
        "meaning": "vở diễn nhạc kịch",
        "partOfSpeech": "n"
      },
      {
        "word": "profitable",
        "meaning": "có lãi, sinh lời cao",
        "partOfSpeech": "adj"
      },
      {
        "word": "open house",
        "meaning": "ngày hội mở cửa tự do",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part3-35-37",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 35 - 37",
    "title": "Part 3 - Câu 35 - 37: Tuyển dụng nhân sự và văn phòng mới",
    "audioSrc": "/audio/test6_2024.mp3",
    "startTime": 898.69,
    "endTime": 990.79,
    "transcript": [
      {
        "id": "p3-35-1",
        "speaker": "Woman",
        "text": "Fernando, I wanted to tell you that the top candidate we chose for the customer support lead has officially accepted our job offer.",
        "vietnamese": "Fernando, tôi muốn báo cho anh biết ứng viên hàng đầu chúng ta chọn cho vị trí trưởng nhóm hỗ trợ khách hàng đã chính thức nhận lời mời làm việc."
      },
      {
        "id": "p3-35-2",
        "speaker": "Man",
        "text": "That's fantastic news! We finally completed the interview process.",
        "vietnamese": "Thật là tin tuyệt vời! Cuối cùng chúng ta cũng hoàn tất quy trình phỏng vấn."
      },
      {
        "id": "p3-35-3",
        "speaker": "Woman",
        "text": "Yes, and she will love our new office building. The fitness center and cafeteria here are exceptional.",
        "vietnamese": "Vâng, và cô ấy sẽ thích tòa nhà văn phòng mới của chúng ta. Trung tâm thể dục và căng tin ở đây rất tuyệt vời."
      },
      {
        "id": "p3-35-4",
        "speaker": "Man",
        "text": "I agree. However, I'm slightly worried about parking availability because our lot has very limited space.",
        "vietnamese": "Tôi đồng ý. Tuy nhiên, tôi hơi lo lắng về chỗ đậu xe vì bãi đỗ của chúng ta có diện tích rất hạn chế."
      }
    ],
    "questions": [
      {
        "num": 35,
        "question": "What did the speakers recently do?",
        "vietnameseQuestion": "Những người nói gần đây đã làm gì?",
        "options": [
          {
            "key": "A",
            "text": "They launched a new product.",
            "vietnamese": "Ký hợp đồng thuê"
          },
          {
            "key": "B",
            "text": "They chose a job candidate.",
            "vietnamese": "Phỏng vấn các ứng viên xin việc"
          },
          {
            "key": "C",
            "text": "They moved to a different city.",
            "vietnamese": "Mua sắm trang thiết bị"
          },
          {
            "key": "D",
            "text": "They renovated a space.",
            "vietnamese": "Chuyển địa điểm kinh doanh"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Họ vừa tuyển được người và hoàn tất phỏng vấn: 'completed the interview process' (phỏng vấn người xin việc - interviewed job applicants - B)."
      },
      {
        "num": 36,
        "question": "What dothe speakers like about a building?",
        "vietnameseQuestion": "Những người nói thích điều gì về tòa nhà?",
        "options": [
          {
            "key": "A",
            "text": "Itprovides24-houraccess.",
            "vietnamese": "Vị trí trung tâm"
          },
          {
            "key": "B",
            "text": "Ithasanoutdoorspace.",
            "vietnamese": "Giá thuê rẻ"
          },
          {
            "key": "C",
            "text": "It is near public transportation.",
            "vietnamese": "Không gian rộng rãi"
          },
          {
            "key": "D",
            "text": "Ituses renewableenergy.",
            "vietnamese": "Các tiện ích của tòa nhà (phòng gym, căng tin)"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Họ khen tiện ích tòa nhà: 'The fitness center and cafeteria here are exceptional' (các tiện nghi - amenities - D)."
      },
      {
        "num": 37,
        "question": "Whatis the woman worriedabout?",
        "vietnameseQuestion": "Người phụ nữ lo lắng về điều gì?",
        "options": [
          {
            "key": "A",
            "text": "Anewcompetitor",
            "vietnamese": "Thời hạn hoàn thành dự án"
          },
          {
            "key": "B",
            "text": "Alongercommute",
            "vietnamese": "Chi phí phát sinh"
          },
          {
            "key": "C",
            "text": "Ahigh price",
            "vietnamese": "Chỗ đỗ xe có hạn"
          },
          {
            "key": "D",
            "text": "on youranswersheet.The conversationswill onlyonetime.",
            "vietnamese": "Đào tạo nhân viên mới"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Người nói lo lắng: 'worried about parking availability because our lot has very limited space' (chỗ đỗ xe - parking availability - C)."
      }
    ],
    "vocabulary": [
      {
        "word": "candidate",
        "meaning": "ứng viên xin việc",
        "partOfSpeech": "n"
      },
      {
        "word": "interview",
        "meaning": "phỏng vấn",
        "partOfSpeech": "v/n"
      },
      {
        "word": "amenities",
        "meaning": "tiện nghi của tòa nhà",
        "partOfSpeech": "n"
      },
      {
        "word": "limited space",
        "meaning": "không gian có hạn",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part3-38-40",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 38 - 40",
    "title": "Part 3 - Câu 38 - 40: Đặt hoa cho sự kiện khai trương phòng tranh",
    "audioSrc": "/audio/test6_2024.mp3",
    "startTime": 990.79,
    "endTime": 1054.37,
    "transcript": [
      {
        "id": "p3-38-1",
        "speaker": "Man",
        "text": "Welcome to Bloom Florists. How can I help you today?",
        "vietnamese": "Chào mừng quý khách đến với Tiệm hoa Bloom. Tôi có thể giúp gì cho cô hôm nay?"
      },
      {
        "id": "p3-38-2",
        "speaker": "Woman",
        "text": "Hi. I'm organizing an art gallery opening next Friday and need five large floral centerpieces.",
        "vietnamese": "Xin chào. Tôi đang tổ chức lễ khai trương phòng trưng bày nghệ thuật vào thứ Sáu tới và cần năm lẵng hoa lớn đặt giữa bàn."
      },
      {
        "id": "p3-38-3",
        "speaker": "Man",
        "text": "We can definitely arrange that. We specialize in custom floral displays for gallery exhibitions and corporate events.",
        "vietnamese": "Chúng tôi hoàn toàn có thể thu xếp được. Chúng tôi chuyên cắm hoa nghệ thuật cho triển lãm phòng tranh và sự kiện doanh nghiệp."
      },
      {
        "id": "p3-38-4",
        "speaker": "Woman",
        "text": "Unfortunately, I apologize because our delivery van is undergoing maintenance that day, so you would need to pick them up in person.",
        "vietnamese": "Tuy nhiên, tôi rất xin lỗi vì xe giao hàng của chúng tôi phải bảo dưỡng vào hôm đó, nên cô sẽ cần phải tự đến lấy hoa trực tiếp."
      }
    ],
    "questions": [
      {
        "num": 38,
        "question": "Whateventisthewomanplanning?",
        "vietnameseQuestion": "Người phụ nữ đang lên kế hoạch cho sự kiện gì?",
        "options": [
          {
            "key": "A",
            "text": "Aretirement party",
            "vietnamese": "Một đám cưới"
          },
          {
            "key": "B",
            "text": "Abirthdayparty",
            "vietnamese": "Khai trương phòng trưng bày nghệ thuật"
          },
          {
            "key": "C",
            "text": "Asciencefair",
            "vietnamese": "Hội nghị thường niên"
          },
          {
            "key": "D",
            "text": "Aschoolfestival",
            "vietnamese": "Lễ kỷ niệm công ty"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Người phụ nữ nói rõ: 'organizing an art gallery opening next Friday' (khai trương phòng tranh - an art gallery opening - B)."
      },
      {
        "num": 39,
        "question": "Whomost likely is theman?",
        "vietnameseQuestion": "Người đàn ông nhiều khả năng là ai nhất?",
        "options": [
          {
            "key": "A",
            "text": "Abaker",
            "vietnamese": "Người bán hoa"
          },
          {
            "key": "B",
            "text": "Amusician",
            "vietnamese": "Nghệ sĩ điêu khắc"
          },
          {
            "key": "C",
            "text": "A gardener",
            "vietnamese": "Quản lý tòa nhà"
          },
          {
            "key": "D",
            "text": "Ateacher",
            "vietnamese": "Nhân viên pha chế"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Người đàn ông chào đón tại tiệm hoa Bloom Florists và nhận cắm hoa nên anh ấy là người bán hoa (A florist - A)."
      },
      {
        "num": 40,
        "question": "Whydoesthemanapologize?",
        "vietnameseQuestion": "Tại sao người đàn ông lại xin lỗi?",
        "options": [
          {
            "key": "A",
            "text": "Sometoolscannotbefound.",
            "vietnamese": "Hết hoa"
          },
          {
            "key": "B",
            "text": "Some invitations weresentlate.",
            "vietnamese": "Giá tăng"
          },
          {
            "key": "C",
            "text": "A store is closed fora holiday.",
            "vietnamese": "Giao hàng muộn"
          },
          {
            "key": "D",
            "text": "A request cannot be fulfilled.",
            "vietnamese": "Không thể cung cấp dịch vụ giao hàng tận nơi"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Người đàn ông xin lỗi vì xe hỏng không giao được: 'our delivery van is undergoing maintenance... you would need to pick them up' (không giao hàng được - cannot provide delivery - D)."
      }
    ],
    "vocabulary": [
      {
        "word": "art gallery",
        "meaning": "phòng trưng bày tranh nghệ thuật",
        "partOfSpeech": "n"
      },
      {
        "word": "floral centerpiece",
        "meaning": "lẵng hoa đặt bàn trung tâm",
        "partOfSpeech": "n"
      },
      {
        "word": "florist",
        "meaning": "người bán hoa, tiệm hoa",
        "partOfSpeech": "n"
      },
      {
        "word": "maintenance",
        "meaning": "bảo trì, bảo dưỡng",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part3-41-43",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 41 - 43",
    "title": "Part 3 - Câu 41 - 43: Sự cố ứng dụng ngân hàng trên điện thoại di động",
    "audioSrc": "/audio/test6_2024.mp3",
    "startTime": 1054.37,
    "endTime": 1145.86,
    "transcript": [
      {
        "id": "p3-41-1",
        "speaker": "Man",
        "text": "Hello. I'm having trouble with your mobile banking service. I tried to transfer funds to my savings account online, but the transaction failed.",
        "vietnamese": "Xin chào. Tôi đang gặp sự cố với dịch vụ ngân hàng di động của các bạn. Tôi đã cố gắng chuyển tiền vào tài khoản tiết kiệm trực tuyến, nhưng giao dịch bị thất bại."
      },
      {
        "id": "p3-41-2",
        "speaker": "Woman",
        "text": "I can help with that, sir. Did you see an error code on your screen?",
        "vietnamese": "Tôi có thể giúp ông việc đó. Ông có thấy mã lỗi nào hiển thị trên màn hình không?"
      },
      {
        "id": "p3-41-3",
        "speaker": "Man",
        "text": "No error code, but the application keeps crashing whenever I confirm the payment amount.",
        "vietnamese": "Không có mã lỗi, nhưng ứng dụng cứ liên tục bị văng/đóng đột ngột mỗi khi tôi xác nhận số tiền thanh toán."
      },
      {
        "id": "p3-41-4",
        "speaker": "Woman",
        "text": "I understand. Our technical team just released an update today. Please uninstall and reinstall the application, and that should resolve the bug.",
        "vietnamese": "Tôi hiểu rồi. Đội kỹ thuật của chúng tôi vừa phát hành bản cập nhật hôm nay. Ông vui lòng gỡ cài đặt và cài đặt lại ứng dụng, thao tác đó sẽ khắc phục được lỗi này."
      }
    ],
    "questions": [
      {
        "num": 41,
        "question": "What did the man try to do online?",
        "vietnameseQuestion": "Người đàn ông đã cố gắng làm gì trực tuyến?",
        "options": [
          {
            "key": "A",
            "text": "Purchaseanewphone",
            "vietnamese": "Thanh toán hóa đơn điện nước"
          },
          {
            "key": "B",
            "text": "Make an appointment",
            "vietnamese": "Chuyển tiền vào tài khoản"
          },
          {
            "key": "C",
            "text": "Order a part",
            "vietnamese": "Đổi mật khẩu"
          },
          {
            "key": "D",
            "text": "Cancelacontract",
            "vietnamese": "Đăng ký thẻ tín dụng"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Người đàn ông nói: 'tried to transfer funds to my savings account online' (chuyển tiền - transfer money - B)."
      },
      {
        "num": 42,
        "question": "What does the man say is wrong with his mobilephone?",
        "vietnameseQuestion": "Người đàn ông nói điện thoại của mình bị vấn đề gì?",
        "options": [
          {
            "key": "A",
            "text": "It hasashortbatterylife.",
            "vietnamese": "Ứng dụng bị văng/đóng liên tục"
          },
          {
            "key": "B",
            "text": "Thescreenisdamaged.",
            "vietnamese": "Hết pin"
          },
          {
            "key": "C",
            "text": "A cable is missing.",
            "vietnamese": "Mất kết nối mạng"
          },
          {
            "key": "D",
            "text": "It has limited storage space.",
            "vietnamese": "Màn hình bị nứt"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Người đàn ông cho biết: 'the application keeps crashing' (ứng dụng liên tục bị lỗi dừng đột ngột - A)."
      },
      {
        "num": 43,
        "question": "What will themanmostlikelydo next?",
        "vietnameseQuestion": "Người đàn ông nhiều khả năng sẽ làm gì tiếp theo?",
        "options": [
          {
            "key": "A",
            "text": "Speakwithamanager",
            "vietnamese": "Đến chi nhánh ngân hàng"
          },
          {
            "key": "B",
            "text": "Calltechnicalsupport",
            "vietnamese": "Mua điện thoại mới"
          },
          {
            "key": "C",
            "text": "Visitastore",
            "vietnamese": "Cài đặt lại ứng dụng"
          },
          {
            "key": "D",
            "text": "Restartadevice",
            "vietnamese": "Đổi mã PIN"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Người phụ nữ khuyên: 'uninstall and reinstall the application' (cài đặt lại ứng dụng - reinstall an application - C)."
      }
    ],
    "vocabulary": [
      {
        "word": "transfer funds",
        "meaning": "chuyển tiền",
        "partOfSpeech": "phr"
      },
      {
        "word": "crash",
        "meaning": "bị văng, sập ứng dụng",
        "partOfSpeech": "v"
      },
      {
        "word": "uninstall",
        "meaning": "gỡ cài đặt",
        "partOfSpeech": "v"
      },
      {
        "word": "reinstall",
        "meaning": "cài đặt lại",
        "partOfSpeech": "v"
      }
    ]
  },
  {
    "id": "part3-44-46",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 44 - 46",
    "title": "Part 3 - Câu 44 - 46: Hoàn thành bài viết phóng sự sáp nhập ngân hàng",
    "audioSrc": "/audio/test6_2024.mp3",
    "startTime": 1145.86,
    "endTime": 1220.47,
    "transcript": [
      {
        "id": "p3-44-1",
        "speaker": "Man",
        "text": "Asako, how far along are you on that news report about the bank merger?",
        "vietnamese": "Asako, bài phóng sự tin tức về vụ sáp nhập ngân hàng của cô tiến độ đến đâu rồi?"
      },
      {
        "id": "p3-44-2",
        "speaker": "Woman",
        "text": "I've drafted the background section, but I've been unable to finish because the lead financial analyst hasn't returned my interview calls.",
        "vietnamese": "Tôi đã soạn thảo xong phần bối cảnh, nhưng chưa thể hoàn thành vì chuyên gia phân tích tài chính chính vẫn chưa gọi lại trả lời phỏng vấn của tôi."
      },
      {
        "id": "p3-44-3",
        "speaker": "Man",
        "text": "The deadline is this afternoon for the print edition. Why don't you interview Mr. Patel from our research department instead? He's an expert on corporate acquisitions.",
        "vietnamese": "Hạn chót là chiều nay cho bản in rồi. Sao cô không phỏng vấn ông Patel từ phòng nghiên cứu của chúng ta thay vào đó? Ông ấy là chuyên gia về thâu tóm doanh nghiệp đấy."
      },
      {
        "id": "p3-44-4",
        "speaker": "Woman",
        "text": "Good suggestion. I'll head upstairs to his office right away.",
        "vietnamese": "Gợi ý hay đấy. Tôi sẽ lên tầng đến văn phòng ông ấy ngay."
      }
    ],
    "questions": [
      {
        "num": 44,
        "question": "Wheredothespeakersmost likelywork?",
        "vietnameseQuestion": "Những người nói nhiều khả năng làm việc ở đâu nhất?",
        "options": [
          {
            "key": "A",
            "text": "At a bank",
            "vietnamese": "Ngân hàng thương mại"
          },
          {
            "key": "B",
            "text": "At a research laboratory",
            "vietnamese": "Công ty kế toán"
          },
          {
            "key": "C",
            "text": "Atanewspapercompany",
            "vietnamese": "Tòa soạn báo / truyền thông"
          },
          {
            "key": "D",
            "text": "At a legal firm",
            "vietnamese": "Văn phòng luật"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Họ đang viết bài phóng sự tin tức kịp giờ in: 'news report... for the print edition' (tòa soạn báo/tin tức - at a newspaper / publisher - C)."
      },
      {
        "num": 45,
        "question": "Whyhasthewomanbeenunabletofinisha task?",
        "vietnameseQuestion": "Tại sao người phụ nữ chưa thể hoàn thành nhiệm vụ?",
        "options": [
          {
            "key": "A",
            "text": "She needs a manager's signature.",
            "vietnamese": "Máy tính bị hỏng"
          },
          {
            "key": "B",
            "text": "She cannot access her files.",
            "vietnamese": "Thiếu dữ liệu tài chính"
          },
          {
            "key": "C",
            "text": "She cannot get the necessary information.",
            "vietnamese": "Chưa liên lạc được với người được phỏng vấn"
          },
          {
            "key": "D",
            "text": "Some data are incorrect.",
            "vietnamese": "Bị giao thêm việc"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Cô ấy giải thích: 'the lead financial analyst hasn\\'t returned my interview calls' (chưa liên lạc được người phỏng vấn - C)."
      },
      {
        "num": 46,
        "question": "What solutiondoes the man propose?",
        "vietnameseQuestion": "Người đàn ông đề xuất giải pháp nào?",
        "options": [
          {
            "key": "A",
            "text": "Changing a deadline",
            "vietnamese": "Phỏng vấn một chuyên gia khác"
          },
          {
            "key": "B",
            "text": "Scheduling a meeting",
            "vietnamese": "Gia hạn thời hạn nộp"
          },
          {
            "key": "C",
            "text": "Askingacolleagueforhelp",
            "vietnamese": "Hủy bài báo"
          },
          {
            "key": "D",
            "text": "Reviewingsomedocuments",
            "vietnamese": "Tự viết phần kết luận"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Người đàn ông đề xuất: 'interview Mr. Patel from our research department instead' (phỏng vấn một người khác - A)."
      }
    ],
    "vocabulary": [
      {
        "word": "bank merger",
        "meaning": "sáp nhập ngân hàng",
        "partOfSpeech": "n"
      },
      {
        "word": "financial analyst",
        "meaning": "chuyên viên phân tích tài chính",
        "partOfSpeech": "n"
      },
      {
        "word": "print edition",
        "meaning": "ấn bản in ấn",
        "partOfSpeech": "n"
      },
      {
        "word": "acquisition",
        "meaning": "mua lại, thâu tóm doanh nghiệp",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part3-47-49",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 47 - 49",
    "title": "Part 3 - Câu 47 - 49: Dự án thi công hệ thống thoát nước sân vườn",
    "audioSrc": "/audio/test6_2024.mp3",
    "startTime": 1220.47,
    "endTime": 1293.86,
    "transcript": [
      {
        "id": "p3-47-1",
        "speaker": "Man",
        "text": "We'll have to remove the soil from the garden bed and lay down drain pipes along the foundation.",
        "vietnamese": "Chúng tôi sẽ phải xúc đất khỏi luống vườn và đặt các đường ống thoát nước dọc theo móng nhà."
      },
      {
        "id": "p3-47-2",
        "speaker": "Woman",
        "text": "As a landscape drainage contractor, I want to ensure the water flows away from the house.",
        "vietnamese": "Với tư cách là nhà thầu thoát nước cảnh quan, tôi muốn đảm bảo nước chảy ra xa khỏi ngôi nhà."
      },
      {
        "id": "p3-47-3",
        "speaker": "Man",
        "text": "That sounds like major work, but I don't want to have to make foundation repairs later.",
        "vietnamese": "Nghe có vẻ là công việc lớn, nhưng tôi không muốn sau này phải tốn tiền sửa chữa móng nhà."
      },
      {
        "id": "p3-47-4",
        "speaker": "Woman",
        "text": "Understood. I have a digital portfolio on my tablet. Let me show you photos of similar drainage projects we completed last month.",
        "vietnamese": "Tôi hiểu. Tôi có danh mục dự án trên máy tính bảng. Hãy để tôi cho cô xem ảnh các dự án thoát nước tương tự mà chúng tôi đã hoàn thành tháng trước."
      }
    ],
    "questions": [
      {
        "num": 47,
        "question": "Whatkind of work does the mando?",
        "vietnameseQuestion": "Người đàn ông làm nghề gì?",
        "options": [
          {
            "key": "A",
            "text": "Appliance repair",
            "vietnamese": "Thợ điện"
          },
          {
            "key": "B",
            "text": "Painting",
            "vietnamese": "Thợ mộc"
          },
          {
            "key": "C",
            "text": "Landscaping",
            "vietnamese": "Thợ thi công cảnh quan / thoát nước"
          },
          {
            "key": "D",
            "text": "Roofing",
            "vietnamese": "Nhân viên vệ sinh"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Người đàn ông làm dịch vụ thoát nước cảnh quan sân vườn: 'landscape drainage contractor' (nhà thầu cảnh quan - Landscaper - C)."
      },
      {
        "num": 48,
        "question": "Whatdoesthewomanimplywhenshesays, \"I don't wantto have to make repairs\"?",
        "vietnameseQuestion": "Người phụ nữ ngụ ý điều gì khi nói, \"Tôi không muốn phải sửa chữa móng sau này\"?",
        "options": [
          {
            "key": "A",
            "text": "She is not qualified for a task.",
            "vietnamese": "Cô ấy muốn tự làm"
          },
          {
            "key": "B",
            "text": "Sheprefersdurablematerials",
            "vietnamese": "Cô ấy đồng ý chi tiền cho giải pháp triệt để"
          },
          {
            "key": "C",
            "text": "She will buy a new appliance.",
            "vietnamese": "Cô ấy muốn chuyển nhà"
          },
          {
            "key": "D",
            "text": "She is not happy with a cost estimate",
            "vietnamese": "Cô ấy muốn khiếu nại"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Cô ấy chấp nhận dự án thi công lớn để phòng tránh hư hại nhà tốn kém sau này (đồng ý thực hiện giải pháp đề xuất - B)."
      },
      {
        "num": 49,
        "question": "Whatwillthemanshowtothewoman?",
        "vietnameseQuestion": "Người đàn ông sẽ cho người phụ nữ xem thứ gì?",
        "options": [
          {
            "key": "A",
            "text": "Alist ofprices",
            "vietnamese": "Hợp đồng"
          },
          {
            "key": "B",
            "text": "Alicense",
            "vietnamese": "Bản dự toán chi phí"
          },
          {
            "key": "C",
            "text": "Some references",
            "vietnamese": "Giấy phép xây dựng"
          },
          {
            "key": "D",
            "text": "Some photographs 96",
            "vietnamese": "Những bức ảnh chụp các dự án tương tự"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Người đàn ông nói: 'show you photos of similar drainage projects' (cho xem ảnh - photographs - D)."
      }
    ],
    "vocabulary": [
      {
        "word": "drain pipe",
        "meaning": "ống thoát nước",
        "partOfSpeech": "n"
      },
      {
        "word": "foundation",
        "meaning": "móng nhà",
        "partOfSpeech": "n"
      },
      {
        "word": "landscaper",
        "meaning": "thợ làm vườn cảnh quan",
        "partOfSpeech": "n"
      },
      {
        "word": "portfolio",
        "meaning": "hồ sơ năng lực/danh mục dự án",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part3-50-52",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 50 - 52",
    "title": "Part 3 - Câu 50 - 52: Hỏi tiến độ giao hàng kính mắt",
    "audioSrc": "/audio/test6_2024.mp3",
    "startTime": 1293.86,
    "endTime": 1372.7,
    "transcript": [
      {
        "id": "p3-50-1",
        "speaker": "Man",
        "text": "Good morning. I'm calling from Clear Vision Optical to check on our order of designer eyeglass frames. They were expected two days ago.",
        "vietnamese": "Chào buổi sáng. Tôi gọi từ Hiệu kính Clear Vision để kiểm tra đơn hàng gọng kính thiết kế của chúng tôi. Lẽ ra chúng phải đến từ hai ngày trước rồi."
      },
      {
        "id": "p3-50-2",
        "speaker": "Woman",
        "text": "Let me check our shipping database, sir. It looks like bad weather grounded cargo planes at our central shipping hub over the weekend.",
        "vietnamese": "Để tôi kiểm tra cơ sở dữ liệu vận chuyển. Có vẻ như thời tiết xấu đã khiến các máy bay chở hàng phải hoãn cất cánh tại trung tâm vận chuyển của chúng tôi cuối tuần qua."
      },
      {
        "id": "p3-50-3",
        "speaker": "Man",
        "text": "I see. Our clients are waiting for those frames.",
        "vietnamese": "Tôi hiểu rồi. Khách hàng của chúng tôi đang chờ những chiếc gọng kính đó."
      },
      {
        "id": "p3-50-4",
        "speaker": "Woman",
        "text": "The shipment has already departed this morning. I will email you the updated tracking number and estimated delivery time shortly.",
        "vietnamese": "Lô hàng đã khởi hành sáng nay rồi. Tôi sẽ gửi email cho ông mã theo dõi cập nhật và thời gian giao hàng dự kiến ngay."
      }
    ],
    "questions": [
      {
        "num": 50,
        "question": "Why is the man calling?",
        "vietnameseQuestion": "Tại sao người đàn ông lại gọi điện?",
        "options": [
          {
            "key": "A",
            "text": "To track a shipment",
            "vietnamese": "Hủy đơn hàng"
          },
          {
            "key": "B",
            "text": "To ask about a payment",
            "vietnamese": "Kiểm tra tình trạng đơn hàng bị chậm"
          },
          {
            "key": "C",
            "text": "To close an account",
            "vietnamese": "Đặt thêm hàng"
          },
          {
            "key": "D",
            "text": "To request computer help",
            "vietnamese": "Yêu cầu hoàn tiền"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Người đàn ông hỏi về đơn hàng kính mắt chưa tới: 'check on our order... expected two days ago' (kiểm tra đơn hàng - check on an order - B)."
      },
      {
        "num": 51,
        "question": "Accordingto the woman,what causeda delay?",
        "vietnameseQuestion": "Theo người phụ nữ, điều gì đã gây ra sự chậm trễ?",
        "options": [
          {
            "key": "A",
            "text": "An employee was out of the office.",
            "vietnamese": "Thời tiết xấu (bão tuyết/mưa gió)"
          },
          {
            "key": "B",
            "text": "A software program was updated.",
            "vietnamese": "Máy móc hỏng"
          },
          {
            "key": "C",
            "text": "A document was mislabeled.",
            "vietnamese": "Thiếu nhân viên"
          },
          {
            "key": "D",
            "text": "A new policy was implemented.",
            "vietnamese": "Sai địa chỉ"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Người phụ nữ giải thích: 'bad weather grounded cargo planes' (thời tiết xấu - severe weather - A)."
      },
      {
        "num": 52,
        "question": "What information will the woman most likely provide later?",
        "vietnameseQuestion": "Người phụ nữ nhiều khả năng sẽ cung cấp thông tin gì sau đó?",
        "options": [
          {
            "key": "A",
            "text": "Acostbreakdown",
            "vietnamese": "Hóa đơn mới"
          },
          {
            "key": "B",
            "text": "Anaccountnumber",
            "vietnamese": "Mã giảm giá"
          },
          {
            "key": "C",
            "text": "Atimeestimate",
            "vietnamese": "Mã theo dõi hành trình (tracking number)"
          },
          {
            "key": "D",
            "text": "Aphonenumber",
            "vietnamese": "Danh bạ liên lạc"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Người phụ nữ hứa: 'email you the updated tracking number' (mã theo dõi vận đơn - tracking number - C)."
      }
    ],
    "vocabulary": [
      {
        "word": "optical",
        "meaning": "quang học, thuộc về mắt kính",
        "partOfSpeech": "adj/n"
      },
      {
        "word": "grounded",
        "meaning": "bị giữ lại trên mặt đất (máy bay không thể cất cánh)",
        "partOfSpeech": "adj"
      },
      {
        "word": "hub",
        "meaning": "trung tâm trung chuyển",
        "partOfSpeech": "n"
      },
      {
        "word": "tracking number",
        "meaning": "mã vận đơn theo dõi",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part3-53-55",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 53 - 55",
    "title": "Part 3 - Câu 53 - 55: Bàn giao xe ô tô sau khi sửa chữa",
    "audioSrc": "/audio/test6_2024.mp3",
    "startTime": 1372.7,
    "endTime": 1455.38,
    "transcript": [
      {
        "id": "p3-53-1",
        "speaker": "Man",
        "text": "I'm the general manager here at Revit Auto Repair. Your sedan's brake inspection and oil change are complete, Ms. Santos.",
        "vietnamese": "Tôi là quản lý tại Xưởng sửa chữa ô tô Revit. Việc kiểm tra phanh và thay dầu cho chiếc xe sedan của cô đã hoàn tất, thưa cô Santos."
      },
      {
        "id": "p3-53-2",
        "speaker": "Woman",
        "text": "Thank you. Did you also replace the windshield wiper blades as I requested?",
        "vietnamese": "Cảm ơn anh. Anh có thay luôn cần gạt nước kính chắn gió như tôi đã yêu cầu không?"
      },
      {
        "id": "p3-53-3",
        "speaker": "Man",
        "text": "Yes, we installed premium all-weather wiper blades. Our technician also checked your tire tread.",
        "vietnamese": "Có chứ, chúng tôi đã lắp cần gạt nước cao cấp dùng cho mọi thời tiết. Kỹ thuật viên của chúng tôi cũng kiểm tra gai lốp xe."
      },
      {
        "id": "p3-53-4",
        "speaker": "Woman",
        "text": "Everything is in order. Before handing over the keys, my technician and I would like to show you the old parts we replaced.",
        "vietnamese": "Mọi thứ đều ổn thỏa. Trước khi bàn giao chìa khóa, tôi và kỹ thuật viên muốn cho cô xem các phụ tùng cũ đã được thay thế."
      }
    ],
    "questions": [
      {
        "num": 53,
        "question": "Wheredoesthe conversationtakeplace?",
        "vietnameseQuestion": "Cuộc trò chuyện diễn ra ở đâu?",
        "options": [
          {
            "key": "A",
            "text": "At a game arcade",
            "vietnamese": "Trạm xăng"
          },
          {
            "key": "B",
            "text": "At a grocery store",
            "vietnamese": "Bãi đỗ xe"
          },
          {
            "key": "C",
            "text": "At an auto repair shop",
            "vietnamese": "Xưởng sửa chữa ô tô"
          },
          {
            "key": "D",
            "text": "At a parking garage",
            "vietnamese": "Đại lý bán xe"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Người đàn ông giới thiệu: 'at Revit Auto Repair' (xưởng sửa xe - auto repair shop - C)."
      },
      {
        "num": 54,
        "question": "What type ofproductdoes the woman mention?",
        "vietnameseQuestion": "Người phụ nữ đề cập đến loại sản phẩm nào?",
        "options": [
          {
            "key": "A",
            "text": "Some videos",
            "vietnamese": "Cần gạt nước kính chắn gió"
          },
          {
            "key": "B",
            "text": "Some brochures",
            "vietnamese": "Gương chiếu hậu"
          },
          {
            "key": "C",
            "text": "Aprice scanner",
            "vietnamese": "Ắc quy ô tô"
          },
          {
            "key": "D",
            "text": "A mobile phone application",
            "vietnamese": "Đèn pha"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Người phụ nữ hỏi: 'replace the windshield wiper blades' (cần gạt nước kính - windshield wipers - A)."
      },
      {
        "num": 55,
        "question": "Whatdothemenwanttodo?",
        "vietnameseQuestion": "Những người đàn ông muốn làm gì?",
        "options": [
          {
            "key": "A",
            "text": "Extendbusinesshours",
            "vietnamese": "Rửa xe"
          },
          {
            "key": "B",
            "text": "Enteralocalcontest",
            "vietnamese": "Lái thử xe"
          },
          {
            "key": "C",
            "text": "Includecustomizedcontent",
            "vietnamese": "Cho xem các bộ phận cũ đã thay"
          },
          {
            "key": "D",
            "text": "Upgrade some equipment",
            "vietnamese": "Xin đánh giá dịch vụ"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Họ muốn cho khách xem đồ cũ đã tháo ra: 'show you the old parts we replaced' (xem các bộ phận cũ - show replaced parts - C)."
      }
    ],
    "vocabulary": [
      {
        "word": "auto repair",
        "meaning": "sửa chữa xe hơi",
        "partOfSpeech": "n"
      },
      {
        "word": "windshield wiper",
        "meaning": "cần gạt nước kính chắn gió",
        "partOfSpeech": "n"
      },
      {
        "word": "brake",
        "meaning": "phanh xe",
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
    "title": "Part 3 - Câu 56 - 58: Biên tập video khóa học trực tuyến",
    "audioSrc": "/audio/test6_2024.mp3",
    "startTime": 1455.38,
    "endTime": 1530.28,
    "transcript": [
      {
        "id": "p3-56-1",
        "speaker": "Man",
        "text": "Hi, Carmen. I'm reviewing the final edit for our upcoming online finance tutorial series.",
        "vietnamese": "Chào Carmen. Tôi đang xem lại bản dựng cuối cho chuỗi video hướng dẫn tài chính trực tuyến sắp tới."
      },
      {
        "id": "p3-56-2",
        "speaker": "Woman",
        "text": "How does the introductory video look? Does the pacing feel right?",
        "vietnamese": "Video mở đầu trông thế nào? Nhịp độ bài giảng có ổn không?"
      },
      {
        "id": "p3-56-3",
        "speaker": "Man",
        "text": "The content is excellent, but the video is currently 75 minutes long. I want it to be less than an hour.",
        "vietnamese": "Nội dung rất tuyệt vời, nhưng video hiện dài 75 phút. Tôi muốn nó phải dưới một tiếng đồng hồ."
      },
      {
        "id": "p3-56-4",
        "speaker": "Woman",
        "text": "Understood. I will contact our video editing team right away to cut the redundant sections.",
        "vietnamese": "Tôi hiểu rồi. Tôi sẽ liên hệ với nhóm biên tập video ngay để cắt bớt các phần thừa."
      }
    ],
    "questions": [
      {
        "num": 56,
        "question": "Whatindustrydothespeakersmost likely work in?",
        "vietnameseQuestion": "Những người nói nhiều khả năng làm trong ngành nào?",
        "options": [
          {
            "key": "A",
            "text": "Fashionphotography",
            "vietnamese": "Ngân hàng"
          },
          {
            "key": "B",
            "text": "Informationtechnology",
            "vietnamese": "Bất động sản"
          },
          {
            "key": "C",
            "text": "Filmmaking",
            "vietnamese": "Giáo dục / đào tạo trực tuyến"
          },
          {
            "key": "D",
            "text": "Marketing",
            "vietnamese": "Y tế"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Họ làm chuỗi video hướng dẫn bài giảng trực tuyến: 'online finance tutorial series' (đào tạo trực tuyến - E-learning / Education - C)."
      },
      {
        "num": 57,
        "question": "What does the man imply when he says, \" want it to be less than an hour\"?",
        "vietnameseQuestion": "Người đàn ông ngụ ý gì khi nói, \"Tôi muốn nó phải dưới một tiếng đồng hồ\"?",
        "options": [
          {
            "key": "A",
            "text": "He is very busy.",
            "vietnamese": "Khóa học quá rẻ"
          },
          {
            "key": "B",
            "text": "Heapproves an itinerary.",
            "vietnamese": "Hạn chót sắp tới"
          },
          {
            "key": "C",
            "text": "Aroute has a lot of traffic.",
            "vietnamese": "Cần quay lại toàn bộ"
          },
          {
            "key": "D",
            "text": "Some revisions are needed.",
            "vietnamese": "Video cần được cắt ngắn bớt"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Video đang 75 phút và anh ấy muốn dưới 60 phút nghĩa là phải cắt ngắn độ dài (The video should be shortened - D)."
      },
      {
        "num": 58,
        "question": "Why does the man need to contact a team?",
        "vietnameseQuestion": "Tại sao người đàn ông cần liên hệ với một nhóm?",
        "options": [
          {
            "key": "A",
            "text": "To explain a permit procedure",
            "vietnamese": "Ký hợp đồng"
          },
          {
            "key": "B",
            "text": "To confirm equipment availability",
            "vietnamese": "Để yêu cầu chỉnh sửa cắt ngắn video"
          },
          {
            "key": "C",
            "text": "To introducea colleague",
            "vietnamese": "Đặt phòng họp"
          },
          {
            "key": "D",
            "text": "Todeviseasafetyplan",
            "vietnamese": "Xin cấp thêm kinh phí"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Họ liên hệ nhóm biên tập video: 'contact our video editing team... to cut the redundant sections' (yêu cầu chỉnh sửa - request edits - B)."
      }
    ],
    "vocabulary": [
      {
        "word": "tutorial",
        "meaning": "bài giảng hướng dẫn",
        "partOfSpeech": "n"
      },
      {
        "word": "pacing",
        "meaning": "nhịp độ",
        "partOfSpeech": "n"
      },
      {
        "word": "redundant",
        "meaning": "dư thừa, không cần thiết",
        "partOfSpeech": "adj"
      },
      {
        "word": "shorten",
        "meaning": "rút ngắn",
        "partOfSpeech": "v"
      }
    ]
  },
  {
    "id": "part3-59-61",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 59 - 61",
    "title": "Part 3 - Câu 59 - 61: Kết quả kiểm tra đất cho dự án xây dựng công viên",
    "audioSrc": "/audio/test6_2024.mp3",
    "startTime": 1530.28,
    "endTime": 1617.22,
    "transcript": [
      {
        "id": "p3-59-1",
        "speaker": "Man",
        "text": "Preeti and Melissa, I reviewed the results of the soil tests yesterday and most areas of the site are ready for ground breaking.",
        "vietnamese": "Preeti và Melissa, hôm qua tôi đã xem xét kết quả kiểm tra đất và hầu hết các khu vực trên công trường đều đã sẵn sàng khởi công."
      },
      {
        "id": "p3-59-2",
        "speaker": "Woman",
        "text": "That's great! Our architectural firm hopes to start construction on the new community park by next month.",
        "vietnamese": "Tuyệt vời quá! Công ty kiến trúc của chúng ta hy vọng sẽ khởi công xây dựng công viên cộng đồng mới vào tháng tới."
      },
      {
        "id": "p3-59-3",
        "speaker": "Man",
        "text": "Are there any spots that need additional soil treatment?",
        "vietnamese": "Có khu vực nào cần xử lý đất bổ sung không?"
      },
      {
        "id": "p3-59-4",
        "speaker": "Woman",
        "text": "Only the northern quadrant near the river. Melissa, could you send the detailed environmental report by e-mail to the city planners?",
        "vietnamese": "Chỉ có góc phần tư phía bắc gần bờ sông thôi. Melissa, cô có thể gửi báo cáo môi trường chi tiết qua email cho các nhà quy hoạch thành phố được không?"
      },
      {
        "id": "p3-59-5",
        "speaker": "Man",
        "text": "Sure, I'll send it before noon today.",
        "vietnamese": "Chắc chắn rồi, tôi sẽ gửi nó trước buổi trưa hôm nay."
      }
    ],
    "questions": [
      {
        "num": 59,
        "question": "What did theman reviewyesterday?",
        "vietnameseQuestion": "Người đàn ông đã xem xét điều gì vào ngày hôm qua?",
        "options": [
          {
            "key": "A",
            "text": "A budget",
            "vietnamese": "Báo cáo ngân sách"
          },
          {
            "key": "B",
            "text": "Aweatherreport",
            "vietnamese": "Bản thiết kế"
          },
          {
            "key": "C",
            "text": "Sometest results",
            "vietnamese": "Kết quả kiểm tra đất"
          },
          {
            "key": "D",
            "text": "Some hiring plans",
            "vietnamese": "Hợp đồng thầu"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Người đàn ông nêu rõ: 'reviewed the results of the soil tests yesterday' (kết quả kiểm tra đất - soil test results - C)."
      },
      {
        "num": 60,
        "question": "What do the speakers hope to do?",
        "vietnameseQuestion": "Những người nói hy vọng làm điều gì?",
        "options": [
          {
            "key": "A",
            "text": "Improve the condition of a sports field",
            "vietnamese": "Bắt đầu thi công xây dựng công viên"
          },
          {
            "key": "B",
            "text": "Expand the city's athletic programs",
            "vietnamese": "Bán một mảnh đất"
          },
          {
            "key": "C",
            "text": "Plan a fund-raising event",
            "vietnamese": "Thuê thêm nhân công"
          },
          {
            "key": "D",
            "text": "Acquire more public land",
            "vietnamese": "Tổ chức lễ hội"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Họ hy vọng: 'start construction on the new community park by next month' (khởi công xây dựng - start construction - A)."
      },
      {
        "num": 61,
        "question": "Whatwill Melissasendbye-mail?",
        "vietnameseQuestion": "Melissa sẽ gửi thứ gì qua email?",
        "options": [
          {
            "key": "A",
            "text": "Asummaryofworktasks",
            "vietnamese": "Hóa đơn"
          },
          {
            "key": "B",
            "text": "Aletterofappreciation",
            "vietnamese": "Giấy mời"
          },
          {
            "key": "C",
            "text": "Anews article",
            "vietnamese": "Ảnh chụp"
          },
          {
            "key": "D",
            "text": "Acostestimate LeagueSchedule JuniorLeague(ages9-12) Monday 5:30 PM. TeenLeague (ages 13-17) Tuesday 6:00 PM. Wednesday 7:00 P.M. AdultLeague Thursday 6:00 PM.",
            "vietnamese": "Báo cáo môi trường chi tiết"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Người đàn ông nhờ: 'send the detailed environmental report by e-mail' (báo cáo môi trường - environmental report - D)."
      }
    ],
    "vocabulary": [
      {
        "word": "soil test",
        "meaning": "kiểm tra chất lượng đất",
        "partOfSpeech": "n"
      },
      {
        "word": "ground breaking",
        "meaning": "khởi công công trình",
        "partOfSpeech": "n"
      },
      {
        "word": "architectural firm",
        "meaning": "công ty kiến trúc",
        "partOfSpeech": "n"
      },
      {
        "word": "quadrant",
        "meaning": "góc phần tư khu đất",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part3-62-64",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 62 - 64",
    "title": "Part 3 - Câu 62 - 64: Lịch thi đấu câu lạc bộ bowling",
    "audioSrc": "/audio/test6_2024.mp3",
    "startTime": 1617.22,
    "endTime": 1712.29,
    "transcript": [
      {
        "id": "p3-62-1",
        "speaker": "Woman",
        "text": "Rodrigo, you wanted to talk to me about the schedule for the bowling leagues at our bowling alley?",
        "vietnamese": "Rodrigo, anh muốn trao đổi với tôi về lịch thi đấu cho các giải bowling tại trung tâm bowling của chúng ta phải không?"
      },
      {
        "id": "p3-62-2",
        "speaker": "Man",
        "text": "Yes. Starting next month, our Adult League is moving to Tuesdays. So the Junior League needs to take over Thursday evenings instead.",
        "vietnamese": "Đúng vậy. Bắt đầu từ tháng sau, Giải Người lớn sẽ chuyển sang các ngày thứ Ba. Vì vậy Giải Trẻ sẽ cần chuyển sang thi đấu vào các buổi tối thứ Năm thay thế."
      },
      {
        "id": "p3-62-3",
        "speaker": "Woman",
        "text": "Thursday works well since school ends early that day.",
        "vietnamese": "Thứ Năm rất phù hợp vì học sinh tan học sớm vào ngày đó."
      },
      {
        "id": "p3-62-4",
        "speaker": "Man",
        "text": "Good. I will update the league schedule on our website and social media pages this afternoon.",
        "vietnamese": "Tốt rồi. Chiều nay tôi sẽ cập nhật lịch thi đấu của giải lên trang web và các trang mạng xã hội của chúng ta."
      }
    ],
    "questions": [
      {
        "num": 62,
        "question": "Where do the speakers work?",
        "vietnameseQuestion": "Những người nói làm việc ở đâu?",
        "options": [
          {
            "key": "A",
            "text": "At abowling alley",
            "vietnamese": "Tại một sân chơi bowling"
          },
          {
            "key": "B",
            "text": "At a swimming pool",
            "vietnamese": "Tại một trường học"
          },
          {
            "key": "C",
            "text": "At an ice-skating rink",
            "vietnamese": "Tại một trung tâm thể hình"
          },
          {
            "key": "D",
            "text": "At a baseball field",
            "vietnamese": "Tại một cửa hàng dụng cụ thể thao"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Họ sắp xếp lịch giải bowling tại 'our bowling alley' (sân chơi bowling - bowling alley - A)."
      },
      {
        "num": 63,
        "question": "Look at the graphic.On which day will the JuniorLeaguemeet startingnextmonth?",
        "vietnameseQuestion": "Nhìn vào hình ảnh. Giải Trẻ (Junior League) sẽ thi đấu vào ngày nào bắt đầu từ tháng tới?",
        "options": [
          {
            "key": "A",
            "text": "Monday",
            "vietnamese": "Thứ Hai"
          },
          {
            "key": "B",
            "text": "Tuesday",
            "vietnamese": "Thứ Ba"
          },
          {
            "key": "C",
            "text": "Wednesday",
            "vietnamese": "Thứ Tư"
          },
          {
            "key": "D",
            "text": "Thursday",
            "vietnamese": "Thứ Năm"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Người đàn ông nói: 'the Junior League needs to take over Thursday evenings instead' (thứ Năm - Thursday - D)."
      },
      {
        "num": 64,
        "question": "Whatdoesthewomansayshewill do?",
        "vietnameseQuestion": "Người phụ nữ nói cô ấy sẽ làm gì?",
        "options": [
          {
            "key": "A",
            "text": "Hang a poster",
            "vietnamese": "Gọi cho phụ huynh"
          },
          {
            "key": "B",
            "text": "Send an e-mail",
            "vietnamese": "Cập nhật lịch trình trên trang web"
          },
          {
            "key": "C",
            "text": "Deliverapackage",
            "vietnamese": "Mua bóng bowling mới"
          },
          {
            "key": "D",
            "text": "Process a payment",
            "vietnamese": "In tờ rơi quảng cáo"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Cô ấy nói: 'update the league schedule on our website' (cập nhật lịch trình - update a schedule - B)."
      }
    ],
    "vocabulary": [
      {
        "word": "bowling alley",
        "meaning": "trung tâm / sàn bowling",
        "partOfSpeech": "n"
      },
      {
        "word": "league",
        "meaning": "giải đấu thể thao",
        "partOfSpeech": "n"
      },
      {
        "word": "take over",
        "meaning": "tiếp quản, chuyển sang",
        "partOfSpeech": "v"
      }
    ],
    "graphicImage": "/images/intensive/test6_2024/q62_64.png",
    "image": "/images/intensive/test6_2024/q62_64.png"
  },
  {
    "id": "part3-65-67",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 65 - 67",
    "title": "Part 3 - Câu 65 - 67: Sự kiện tuần tại thư viện công cộng",
    "audioSrc": "/audio/test6_2024.mp3",
    "startTime": 1712.29,
    "endTime": 1805.22,
    "transcript": [
      {
        "id": "p3-65-1",
        "speaker": "Man",
        "text": "Hi. I wanted to attend an event at the library this week. Are you open on Friday?",
        "vietnamese": "Xin chào. Tôi muốn tham dự một sự kiện ở thư viện tuần này. Thứ Sáu các bạn có mở cửa không?"
      },
      {
        "id": "p3-65-2",
        "speaker": "Woman",
        "text": "Unfortunately, the library will be closed on Friday for building electrical maintenance.",
        "vietnamese": "Rất tiếc, thư viện sẽ đóng cửa vào thứ Sáu để bảo trì hệ thống điện tòa nhà."
      },
      {
        "id": "p3-65-3",
        "speaker": "Man",
        "text": "I see. Looking at your weekly flyer, I have a schedule conflict on Wednesday evening with my night class.",
        "vietnamese": "Tôi hiểu rồi. Nhìn vào tờ rơi hàng tuần của các bạn, tối thứ Tư tôi bị trùng lịch với lớp học ban đêm."
      },
      {
        "id": "p3-65-4",
        "speaker": "Woman",
        "text": "Well, we have a Book Signing on Wednesday, but on Tuesday at 3 P.M., we have a Computer Class which is very popular.",
        "vietnamese": "À, chúng tôi có buổi ký tặng sách vào thứ Tư, nhưng vào lúc 3 giờ chiều thứ Ba, chúng tôi có Lớp học Máy tính rất được ưa chuộng."
      },
      {
        "id": "p3-65-5",
        "speaker": "Man",
        "text": "Tuesday afternoon fits my schedule perfectly. I'll come to that.",
        "vietnamese": "Chiều thứ Ba hoàn toàn phù hợp với lịch của tôi. Tôi sẽ đến tham gia lớp đó."
      }
    ],
    "questions": [
      {
        "num": 65,
        "question": "Accordingtothewoman,whywill thelibrary beclosedonFriday?",
        "vietnameseQuestion": "Theo người phụ nữ, tại sao thư viện lại đóng cửa vào thứ Sáu?",
        "options": [
          {
            "key": "A",
            "text": "Anelectionwill beheldthere.",
            "vietnamese": "Để bảo trì hệ thống điện"
          },
          {
            "key": "B",
            "text": "Somerenovationswilltakeplace.",
            "vietnamese": "Nghỉ lễ"
          },
          {
            "key": "C",
            "text": "Badweatherisexpected.",
            "vietnamese": "Thiếu nhân sự"
          },
          {
            "key": "D",
            "text": "Anational holidaywill be observed.",
            "vietnamese": "Thời tiết xấu"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Người phụ nữ giải thích: 'closed on Friday for building electrical maintenance' (bảo trì điện - electrical maintenance - A)."
      },
      {
        "num": 66,
        "question": "Whatscheduleconflictdoestheman mention?",
        "vietnameseQuestion": "Người đàn ông đề cập đến xung đột lịch trình nào?",
        "options": [
          {
            "key": "A",
            "text": "He has a family obligation.",
            "vietnamese": "Đi công tác xa"
          },
          {
            "key": "B",
            "text": "His car will beat a mechanic's shop.",
            "vietnamese": "Họp gia đình"
          },
          {
            "key": "C",
            "text": "Hewill be attendingaperformance.",
            "vietnamese": "Tăng ca ở công ty"
          },
          {
            "key": "D",
            "text": "Hehas a businessmeeting.",
            "vietnamese": "Trùng lịch học buổi tối"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Người đàn ông nói: 'schedule conflict on Wednesday evening with my night class' (trùng lớp học tối - with a class - D)."
      },
      {
        "num": 67,
        "question": "Look at the graphic. When will the man most likely attend a library event?",
        "vietnameseQuestion": "Nhìn vào hình ảnh. Người đàn ông nhiều khả năng sẽ tham dự sự kiện thư viện khi nào?",
        "options": [
          {
            "key": "A",
            "text": "On Monday",
            "vietnamese": "Thứ Hai lúc 2 giờ chiều"
          },
          {
            "key": "B",
            "text": "On Tuesday",
            "vietnamese": "Thứ Ba lúc 10 giờ sáng"
          },
          {
            "key": "C",
            "text": "OnWednesday",
            "vietnamese": "Thứ Ba lúc 3 giờ chiều (Lớp Máy tính)"
          },
          {
            "key": "D",
            "text": "On Thursday 98 Color Price GardenGreen $23 Misty Blue $27 SunrisePeach $19 Antique White $16",
            "vietnamese": "Thứ Năm lúc 7 giờ tối"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Người đàn ông chọn lớp học máy tính chiều thứ Ba: 'Tuesday at 3 P.M., we have a Computer Class... fits my schedule' (đáp án C)."
      }
    ],
    "vocabulary": [
      {
        "word": "flyer",
        "meaning": "tờ rơi quảng cáo",
        "partOfSpeech": "n"
      },
      {
        "word": "conflict",
        "meaning": "sự xung đột, trùng lịch",
        "partOfSpeech": "n"
      },
      {
        "word": "computer class",
        "meaning": "lớp học vi tính",
        "partOfSpeech": "n"
      }
    ],
    "graphicImage": "/images/intensive/test6_2024/q65_67.png",
    "image": "/images/intensive/test6_2024/q65_67.png"
  },
  {
    "id": "part3-68-70",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 68 - 70",
    "title": "Part 3 - Câu 68 - 70: Chọn màu sơn cho phòng hội nghị",
    "audioSrc": "/audio/test6_2024.mp3",
    "startTime": 1805.22,
    "endTime": 1891.0,
    "transcript": [
      {
        "id": "p3-68-1",
        "speaker": "Woman",
        "text": "Good news, Tariq. The management committee approved our proposal to repaint the main conference rooms.",
        "vietnamese": "Tin tốt đây Tariq. Ban quản lý đã phê duyệt đề xuất sơn lại các phòng hội nghị chính của chúng ta."
      },
      {
        "id": "p3-68-2",
        "speaker": "Man",
        "text": "That's great. How is the project being funded?",
        "vietnamese": "Tuyệt quá. Dự án được cấp kinh phí như thế nào vậy?"
      },
      {
        "id": "p3-68-3",
        "speaker": "Woman",
        "text": "It is being funded through a special facilities maintenance grant we received from the corporate foundation.",
        "vietnamese": "Nó được tài trợ thông qua một khoản trợ cấp bảo trì cơ sở vật chất đặc biệt mà chúng ta nhận được từ quỹ tập đoàn."
      },
      {
        "id": "p3-68-4",
        "speaker": "Man",
        "text": "Wonderful. Which color from the catalog should we pick?",
        "vietnamese": "Tuyệt vời. Chúng ta nên chọn màu sơn nào trong danh mục?"
      },
      {
        "id": "p3-68-5",
        "speaker": "Woman",
        "text": "Misty Blue has great reviews for office focus. Even though it is $27 a gallon, the soft blue hue will brighten the space nicely.",
        "vietnamese": "Màu Misty Blue có đánh giá rất tốt giúp tăng tập trung trong văn phòng. Mặc dù giá 27 đô la một thùng, sắc xanh dịu nhẹ sẽ làm bừng sáng không gian rất đẹp."
      }
    ],
    "questions": [
      {
        "num": 68,
        "question": "What is the conversation about?",
        "vietnameseQuestion": "Cuộc trò chuyện nói về điều gì?",
        "options": [
          {
            "key": "A",
            "text": "Extending a fence",
            "vietnamese": "Mua bàn ghế mới"
          },
          {
            "key": "B",
            "text": "Building a storage shed",
            "vietnamese": "Mở rộng văn phòng"
          },
          {
            "key": "C",
            "text": "Repairing a bridge",
            "vietnamese": "Sơn lại các phòng họp hội nghị"
          },
          {
            "key": "D",
            "text": "Updatinganentrancearea",
            "vietnamese": "Thay đổi nhà cung cấp"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Họ bàn về việc sơn lại phòng họp: 'repaint the main conference rooms' (sơn lại phòng hội nghị - C)."
      },
      {
        "num": 69,
        "question": "Accordingto thewoman,howisa project being funded?",
        "vietnameseQuestion": "Theo người phụ nữ, dự án được tài trợ bằng cách nào?",
        "options": [
          {
            "key": "A",
            "text": "With donations from visitors",
            "vietnamese": "Cắt giảm ngân sách"
          },
          {
            "key": "B",
            "text": "With money from a grant",
            "vietnamese": "Thông qua một khoản trợ cấp (grant)"
          },
          {
            "key": "C",
            "text": "Withrevenuefromticketsales",
            "vietnamese": "Nhân viên quyên góp"
          },
          {
            "key": "D",
            "text": "Withproceedsfromacharityauction",
            "vietnamese": "Vay vốn ngân hàng"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Dự án được tài trợ qua khoản trợ cấp: 'funded through a special facilities maintenance grant' (khoản tài trợ - A grant - B)."
      },
      {
        "num": 70,
        "question": "Look at the graphic. Which color does the woman select?",
        "vietnameseQuestion": "Nhìn vào hình ảnh. Người phụ nữ chọn màu sơn nào?",
        "options": [
          {
            "key": "A",
            "text": "Garden Green",
            "vietnamese": "Garden Green ($23)"
          },
          {
            "key": "B",
            "text": "Misty Blue",
            "vietnamese": "Misty Blue ($27)"
          },
          {
            "key": "C",
            "text": "SunrisePeach",
            "vietnamese": "Sunrise Peach ($19)"
          },
          {
            "key": "D",
            "text": "AntiqueWhite",
            "vietnamese": "Antique White ($16)"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Người phụ nữ chọn: 'Misty Blue has great reviews... $27 a gallon' (đối chiếu bảng giá, chọn Misty Blue - B)."
      }
    ],
    "vocabulary": [
      {
        "word": "repaint",
        "meaning": "sơn lại",
        "partOfSpeech": "v"
      },
      {
        "word": "grant",
        "meaning": "khoản tài trợ, tiền trợ cấp",
        "partOfSpeech": "n"
      },
      {
        "word": "hue",
        "meaning": "tông màu, sắc thái màu",
        "partOfSpeech": "n"
      }
    ],
    "graphicImage": "/images/intensive/test6_2024/q68_70.png",
    "image": "/images/intensive/test6_2024/q68_70.png"
  },
  {
    "id": "part4-71-73",
    "part": 4,
    "partTitle": "Part 4: Bài nói chuyện",
    "questionRange": "Câu 71 - 73",
    "title": "Part 4 - Câu 71 - 73: Giới thiệu lịch trình và triển lãm tại bảo tàng",
    "audioSrc": "/audio/test6_2024.mp3",
    "startTime": 1918.35,
    "endTime": 1995.51,
    "transcript": [
      {
        "id": "p4-71-1",
        "speaker": "Speaker",
        "text": "Good morning, everyone, and welcome to the Weston Museum of Science.",
        "vietnamese": "Chào buổi sáng tất cả các bạn, và chào mừng các bạn đến với Bảo tàng Khoa học Weston."
      },
      {
        "id": "p4-71-2",
        "speaker": "Speaker",
        "text": "Today we are featuring a special presentation on renewable energy technologies in our main auditorium.",
        "vietnamese": "Hôm nay chúng tôi có buổi thuyết trình đặc biệt về các công nghệ năng lượng tái tạo tại khán phòng chính."
      },
      {
        "id": "p4-71-3",
        "speaker": "Speaker",
        "text": "Next Tuesday, we will officially open our newly renovated astronomy wing featuring our planetarium.",
        "vietnamese": "Thứ Ba tuần tới, chúng tôi sẽ chính thức mở cửa khu thiên văn học mới được cải tạo cùng đài thiên văn."
      },
      {
        "id": "p4-71-4",
        "speaker": "Speaker",
        "text": "Please be sure to keep your admission wristbands visible throughout your visit.",
        "vietnamese": "Xin vui lòng luôn để lộ vòng đeo tay vào cửa trong suốt chuyến tham quan của các bạn."
      }
    ],
    "questions": [
      {
        "num": 71,
        "question": "Wheredoes thetalk most likelytakeplace?",
        "vietnameseQuestion": "Bài nói chuyện nhiều khả năng diễn ra ở đâu nhất?",
        "options": [
          {
            "key": "A",
            "text": "At a medical clinic",
            "vietnamese": "Tại một viện bảo tàng"
          },
          {
            "key": "B",
            "text": "At an airport",
            "vietnamese": "Tại một trường đại học"
          },
          {
            "key": "C",
            "text": "Atafitnesscenter",
            "vietnamese": "Tại một sân bay"
          },
          {
            "key": "D",
            "text": "At a bank",
            "vietnamese": "Tại một thư viện"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Người nói chào mừng: 'welcome to the Weston Museum of Science' (bảo tàng - At a museum - A)."
      },
      {
        "num": 72,
        "question": "What is mainly being discussed?",
        "vietnameseQuestion": "Chủ đề chính đang được thảo luận là gì?",
        "options": [
          {
            "key": "A",
            "text": "Ahiring decision",
            "vietnamese": "Quy định an toàn"
          },
          {
            "key": "B",
            "text": "Amarketingcampaign",
            "vietnamese": "Kế hoạch gây quỹ"
          },
          {
            "key": "C",
            "text": "Acustomersatisfactionsurvey",
            "vietnamese": "Lịch làm việc"
          },
          {
            "key": "D",
            "text": "An electronic check-insystem",
            "vietnamese": "Các triển lãm và bài thuyết trình"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Nội dung nói về bài thuyết trình năng lượng tái tạo và khu triển lãm mới (exhibits - D)."
      },
      {
        "num": 73,
        "question": "What will happen next Tuesday?",
        "vietnameseQuestion": "Điều gì sẽ diễn ra vào thứ Ba tuần tới?",
        "options": [
          {
            "key": "A",
            "text": "Anewsecuritysystemwillbeinstalled.",
            "vietnamese": "Một buổi hòa nhạc"
          },
          {
            "key": "B",
            "text": "Abranchlocationwill open.",
            "vietnamese": "Hội chợ việc làm"
          },
          {
            "key": "C",
            "text": "Atrainingsessionwilltakeplace.",
            "vietnamese": "Mở cửa một khu triển lãm mới được cải tạo"
          },
          {
            "key": "D",
            "text": "Aproduct will be delivered.",
            "vietnamese": "Bảo tàng đóng cửa bảo trì"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Người nói thông báo: 'officially open our newly renovated astronomy wing' (mở cửa khu triển lãm - An exhibit will open - C)."
      }
    ],
    "vocabulary": [
      {
        "word": "renewable energy",
        "meaning": "năng lượng tái tạo",
        "partOfSpeech": "n"
      },
      {
        "word": "auditorium",
        "meaning": "khán phòng lớn",
        "partOfSpeech": "n"
      },
      {
        "word": "renovated",
        "meaning": "được cải tạo nâng cấp",
        "partOfSpeech": "adj"
      },
      {
        "word": "planetarium",
        "meaning": "đài thiên văn mô phỏng vũ trụ",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part4-74-76",
    "part": 4,
    "partTitle": "Part 4: Bài nói chuyện",
    "questionRange": "Câu 74 - 76",
    "title": "Part 4 - Câu 74 - 76: Podcast lời khuyên nghề nghiệp cho người khởi nghiệp",
    "audioSrc": "/audio/test6_2024.mp3",
    "startTime": 1995.51,
    "endTime": 2066.16,
    "transcript": [
      {
        "id": "p4-74-1",
        "speaker": "Speaker",
        "text": "Welcome to 'Career Horizons', the weekly podcast for freelance professionals and entrepreneurs.",
        "vietnamese": "Chào mừng các bạn đến với 'Career Horizons', chương trình podcast hàng tuần dành cho những người làm việc tự do và các nhà khởi nghiệp."
      },
      {
        "id": "p4-74-2",
        "speaker": "Speaker",
        "text": "When launching an independent consulting business, many professionals discover they need formal business licenses from their local municipality.",
        "vietnamese": "Khi bắt đầu kinh doanh tư vấn độc lập, nhiều chuyên gia phát hiện ra rằng họ cần có giấy phép kinh doanh chính thức từ chính quyền địa phương."
      },
      {
        "id": "p4-74-3",
        "speaker": "Speaker",
        "text": "Without proper licensing, you may face regulatory fines or insurance complications.",
        "vietnamese": "Nếu không có giấy phép hợp lệ, bạn có thể phải đối mặt với các khoản phạt pháp lý hoặc rắc rối về bảo hiểm."
      },
      {
        "id": "p4-74-4",
        "speaker": "Speaker",
        "text": "On our podcast website, I've shared a link to a comprehensive municipal licensing directory.",
        "vietnamese": "Trên trang web podcast của chúng tôi, tôi đã chia sẻ liên kết tới danh mục giấy phép cấp quận/thành phố toàn diện."
      }
    ],
    "questions": [
      {
        "num": 74,
        "question": "Who is thepodcast intended for?",
        "vietnameseQuestion": "Chương trình podcast này dành cho đối tượng nào?",
        "options": [
          {
            "key": "A",
            "text": "Party organizers",
            "vietnamese": "Sinh viên đại học"
          },
          {
            "key": "B",
            "text": "Travel agents",
            "vietnamese": "Nhà đầu tư bất động sản"
          },
          {
            "key": "C",
            "text": "Technology enthusiasts",
            "vietnamese": "Người làm tự do và chủ doanh nghiệp khởi nghiệp"
          },
          {
            "key": "D",
            "text": "Carpenters",
            "vietnamese": "Giáo viên trung học"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Podcast dành cho: 'freelance professionals and entrepreneurs' (người làm tự do và chủ doanh nghiệp - C)."
      },
      {
        "num": 75,
        "question": "According to the speaker, what will some listeners need?",
        "vietnameseQuestion": "Theo người nói, một số thính giả sẽ cần thứ gì?",
        "options": [
          {
            "key": "A",
            "text": "Aninsurancepolicy",
            "vietnamese": "Một trang web mới"
          },
          {
            "key": "B",
            "text": "Aletterofrecommendation",
            "vietnamese": "Một khoản vay ngân hàng"
          },
          {
            "key": "C",
            "text": "Anevent venue",
            "vietnamese": "Một văn phòng đại diện"
          },
          {
            "key": "D",
            "text": "A license",
            "vietnamese": "Giấy phép kinh doanh chính thức"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Người nói chỉ rõ: 'need formal business licenses from their local municipality' (giấy phép kinh doanh - licenses - D)."
      },
      {
        "num": 76,
        "question": "What informationwillthespeakershare?",
        "vietnameseQuestion": "Người nói sẽ chia sẻ thông tin gì trên trang web?",
        "options": [
          {
            "key": "A",
            "text": "Applicationinstructions",
            "vietnamese": "Đường dẫn liên kết tới danh mục hướng dẫn"
          },
          {
            "key": "B",
            "text": "Retail locations",
            "vietnamese": "Một bản khảo sát"
          },
          {
            "key": "C",
            "text": "Namesof instructors",
            "vietnamese": "Mã giảm giá"
          },
          {
            "key": "D",
            "text": "Userreviews glespeaker.Youwillbeaskedtoanswerthree Select the best responseto each questionand heet.Thetalks will not beprinted inyourtest",
            "vietnamese": "Số điện thoại tư vấn"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Người nói chia sẻ: 'shared a link to a comprehensive municipal licensing directory' (đường link danh mục - A)."
      }
    ],
    "vocabulary": [
      {
        "word": "freelance",
        "meaning": "làm việc tự do",
        "partOfSpeech": "adj/n"
      },
      {
        "word": "entrepreneur",
        "meaning": "doanh nhân, người khởi nghiệp",
        "partOfSpeech": "n"
      },
      {
        "word": "business license",
        "meaning": "giấy phép kinh doanh",
        "partOfSpeech": "n"
      },
      {
        "word": "directory",
        "meaning": "danh mục tra cứu",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part4-77-79",
    "part": 4,
    "partTitle": "Part 4: Bài nói chuyện",
    "questionRange": "Câu 77 - 79",
    "title": "Part 4 - Câu 77 - 79: Thông báo cho khách lưu trú tại khu nghỉ dưỡng",
    "audioSrc": "/audio/test6_2024.mp3",
    "startTime": 2066.16,
    "endTime": 2145.9,
    "transcript": [
      {
        "id": "p4-77-1",
        "speaker": "Speaker",
        "text": "Attention all resort guests staying in the East Wing villas.",
        "vietnamese": "Xin quý khách lưu trú tại các biệt thự Khu Cánh Đông chú ý."
      },
      {
        "id": "p4-77-2",
        "speaker": "Speaker",
        "text": "Due to scheduled maintenance on our central water heating system, hot water will be temporarily unavailable from 2 to 4 P.M. today.",
        "vietnamese": "Do lịch bảo trì định kỳ hệ thống máy nước nóng trung tâm, nước nóng sẽ tạm ngưng cung cấp từ 2 đến 4 giờ chiều hôm nay."
      },
      {
        "id": "p4-77-3",
        "speaker": "Speaker",
        "text": "We kindly request that guests close all faucets tightly before leaving their rooms this afternoon.",
        "vietnamese": "Chúng tôi kính đề nghị quý khách khóa chặt tất cả vòi nước trước khi rời khỏi phòng vào chiều nay."
      },
      {
        "id": "p4-77-4",
        "speaker": "Speaker",
        "text": "To apologize for this inconvenience, please join us at the poolside pavilion at 6 P.M. this evening for a complimentary barbecue dinner.",
        "vietnamese": "Để xin lỗi về sự bất tiện này, xin mời quý khách cùng tham gia tiệc tối nướng BBQ miễn phí tại nhà chòi cạnh hồ bơi vào lúc 6 giờ tối nay."
      }
    ],
    "questions": [
      {
        "num": 77,
        "question": "Whoarethe listeners?",
        "vietnameseQuestion": "Những người nghe là ai?",
        "options": [
          {
            "key": "A",
            "text": "Mechanicalengineers",
            "vietnamese": "Nhân viên khu nghỉ dưỡng"
          },
          {
            "key": "B",
            "text": "Tradeshowparticipants",
            "vietnamese": "Khách lưu trú tại khách sạn / khu nghỉ dưỡng"
          },
          {
            "key": "C",
            "text": "Governmentofficials",
            "vietnamese": "Nhà thầu xây dựng"
          },
          {
            "key": "D",
            "text": "Laboratoryassistants",
            "vietnamese": "Cư dân địa phương"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Thông báo hướng tới: 'all resort guests staying in the East Wing' (khách nghỉ dưỡng - Hotel/resort guests - B)."
      },
      {
        "num": 78,
        "question": "What does the speaker request that the listenersdo?",
        "vietnameseQuestion": "Người nói yêu cầu người nghe làm gì?",
        "options": [
          {
            "key": "A",
            "text": "Takesafetyprecautions",
            "vietnamese": "Khóa chặt các vòi nước"
          },
          {
            "key": "B",
            "text": "Sign a registration sheet",
            "vietnamese": "Di dời hành lý"
          },
          {
            "key": "C",
            "text": "Wearnametags",
            "vietnamese": "Thanh toán hóa đơn"
          },
          {
            "key": "D",
            "text": "Move their vehicles",
            "vietnamese": "Đổi phòng"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Người nói yêu cầu: 'close all faucets tightly before leaving' (khóa chặt vòi nước - turn off faucets - A)."
      },
      {
        "num": 79,
        "question": "What will takeplace in the evening?",
        "vietnameseQuestion": "Điều gì sẽ diễn ra vào buổi tối?",
        "options": [
          {
            "key": "A",
            "text": "Adebate",
            "vietnamese": "Chiếu phim"
          },
          {
            "key": "B",
            "text": "Anawardceremony",
            "vietnamese": "Biểu diễn ca nhạc"
          },
          {
            "key": "C",
            "text": "Afilm screening",
            "vietnamese": "Họp mặt ban quản lý"
          },
          {
            "key": "D",
            "text": "Areception",
            "vietnamese": "Bữa tối tiệc nướng BBQ miễn phí"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Người nói mời: 'complimentary barbecue dinner this evening' (bữa tối nướng BBQ miễn phí - dinner - D)."
      }
    ],
    "vocabulary": [
      {
        "word": "resort guests",
        "meaning": "khách lưu trú tại khu nghỉ dưỡng",
        "partOfSpeech": "n"
      },
      {
        "word": "maintenance",
        "meaning": "công tác bảo trì",
        "partOfSpeech": "n"
      },
      {
        "word": "faucet",
        "meaning": "vòi nước",
        "partOfSpeech": "n"
      },
      {
        "word": "complimentary",
        "meaning": "miễn phí",
        "partOfSpeech": "adj"
      }
    ]
  },
  {
    "id": "part4-80-82",
    "part": 4,
    "partTitle": "Part 4: Bài nói chuyện",
    "questionRange": "Câu 80 - 82",
    "title": "Part 4 - Câu 80 - 82: Podcast giới thiệu ứng dụng quản lý tài chính đầu tư",
    "audioSrc": "/audio/test6_2024.mp3",
    "startTime": 2145.9,
    "endTime": 2231.74,
    "transcript": [
      {
        "id": "p4-80-1",
        "speaker": "Speaker",
        "text": "Welcome to Money Reveals, the podcast for smart investors.",
        "vietnamese": "Chào mừng các bạn đến với Money Reveals, chương trình podcast dành cho các nhà đầu tư thông thái."
      },
      {
        "id": "p4-80-2",
        "speaker": "Speaker",
        "text": "I'm your host, Derek Lin, financial planner and wealth consultant.",
        "vietnamese": "Tôi là người dẫn chương trình của các bạn, Derek Lin, chuyên gia hoạch định tài chính và tư vấn tài sản."
      },
      {
        "id": "p4-80-3",
        "speaker": "Speaker",
        "text": "Today we're examining a groundbreaking software application designed to track stock portfolio dividends and optimize tax reporting.",
        "vietnamese": "Hôm nay chúng ta sẽ tìm hiểu về một ứng dụng phần mềm đột phá được thiết kế để theo dõi cổ tức danh mục cổ phiếu và tối ưu hóa báo cáo thuế."
      },
      {
        "id": "p4-80-4",
        "speaker": "Speaker",
        "text": "The developers are offering our listeners a chance to win free tickets to the Global Fintech Expo simply by writing a review of this podcast episode.",
        "vietnamese": "Các nhà phát triển đang mang đến cho thính giả cơ hội nhận vé miễn phí tham dự Triển lãm Công nghệ Tài chính Toàn cầu chỉ bằng cách viết bài đánh giá tập podcast này."
      }
    ],
    "questions": [
      {
        "num": 80,
        "question": "Who most likely is the speaker?",
        "vietnameseQuestion": "Người nói nhiều khả năng là ai nhất?",
        "options": [
          {
            "key": "A",
            "text": "Acustomerservicerepresentative",
            "vietnamese": "Lập trình viên"
          },
          {
            "key": "B",
            "text": "Asoftwaredeveloper",
            "vietnamese": "Kế toán trưởng"
          },
          {
            "key": "C",
            "text": "Apodcast host",
            "vietnamese": "Chuyên gia tư vấn tài chính / dẫn podcast"
          },
          {
            "key": "D",
            "text": "An event coordinator",
            "vietnamese": "Giám đốc ngân hàng"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Người nói giới thiệu: 'I\\'m your host, Derek Lin, financial planner' (chuyên viên hoạch định tài chính - financial planner - C)."
      },
      {
        "num": 81,
        "question": "According to the speaker, what can a softwareapplicationbeusedfor?",
        "vietnameseQuestion": "Theo người nói, ứng dụng phần mềm có thể dùng vào việc gì?",
        "options": [
          {
            "key": "A",
            "text": "Makingtravelreservations",
            "vietnamese": "Mua sắm trực tuyến"
          },
          {
            "key": "B",
            "text": "Uploadingdocuments",
            "vietnamese": "Chuyển tiền quốc tế"
          },
          {
            "key": "C",
            "text": "Managing subscriptions",
            "vietnamese": "Lập ngân sách gia đình"
          },
          {
            "key": "D",
            "text": "Searchingfordiscounts",
            "vietnamese": "Theo dõi danh mục đầu tư và thuế"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Ứng dụng dùng để: 'track stock portfolio dividends and optimize tax reporting' (quản lý danh mục đầu tư - track investments - D)."
      },
      {
        "num": 82,
        "question": "Howcanthe listenersreceivesomefree tickets?",
        "vietnameseQuestion": "Làm thế nào thính giả nhận được vé miễn phí?",
        "options": [
          {
            "key": "A",
            "text": "By clicking on a link",
            "vietnamese": "Bằng cách viết bài đánh giá podcast"
          },
          {
            "key": "B",
            "text": "By signing up fora newsletter",
            "vietnamese": "Bằng cách mua ứng dụng"
          },
          {
            "key": "C",
            "text": "By buying a product in-store",
            "vietnamese": "Bằng cách đăng ký kênh"
          },
          {
            "key": "D",
            "text": "By writing a review",
            "vietnamese": "Bằng cách chia sẻ bài đăng"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Người nghe nhận vé: 'simply by writing a review of this podcast episode' (viết đánh giá - writing a review - A)."
      }
    ],
    "vocabulary": [
      {
        "word": "investor",
        "meaning": "nhà đầu tư",
        "partOfSpeech": "n"
      },
      {
        "word": "portfolio",
        "meaning": "danh mục đầu tư chứng khoán",
        "partOfSpeech": "n"
      },
      {
        "word": "dividend",
        "meaning": "tiền cổ tức",
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
    "id": "part4-83-85",
    "part": 4,
    "partTitle": "Part 4: Bài nói chuyện",
    "questionRange": "Câu 83 - 85",
    "title": "Part 4 - Câu 83 - 85: Khách hàng liên hệ bộ phận hỗ trợ kỹ thuật máy tính",
    "audioSrc": "/audio/test6_2024.mp3",
    "startTime": 2231.74,
    "endTime": 2301.45,
    "transcript": [
      {
        "id": "p4-83-1",
        "speaker": "Speaker",
        "text": "Hi. I'm calling for tech support regarding the desktop computer I purchased from your store last month.",
        "vietnamese": "Xin chào. Tôi gọi đến bộ phận hỗ trợ kỹ thuật liên quan đến chiếc máy tính để bàn tôi mua từ cửa hàng các bạn tháng trước."
      },
      {
        "id": "p4-83-2",
        "speaker": "Speaker",
        "text": "Every time I attempt to connect to our office wireless network, the system fails to recognize the network adapter.",
        "vietnamese": "Mỗi khi tôi thử kết nối với mạng không dây của văn phòng, hệ thống đều không nhận diện được bộ điều hợp mạng."
      },
      {
        "id": "p4-83-3",
        "speaker": "Speaker",
        "text": "I have already restarted the device, updated the drivers, and reset the modem.",
        "vietnamese": "Tôi đã khởi động lại thiết bị, cập nhật trình điều khiển và khởi động lại modem rồi."
      },
      {
        "id": "p4-83-4",
        "speaker": "Speaker",
        "text": "I think I've done all I can do on my end, so I need an in-person technician to come inspect the hardware.",
        "vietnamese": "Tôi nghĩ tôi đã làm tất cả những gì có thể làm từ phía tôi rồi, vì vậy tôi cần một kỹ thuật viên đến tận nơi kiểm tra phần cứng."
      }
    ],
    "questions": [
      {
        "num": 83,
        "question": "Who isthespeakermost likelycalling?",
        "vietnameseQuestion": "Người nói nhiều khả năng đang gọi điện cho ai?",
        "options": [
          {
            "key": "A",
            "text": "Astoreowner",
            "vietnamese": "Nhà cung cấp mạng"
          },
          {
            "key": "B",
            "text": "Apropertymanager",
            "vietnamese": "Bộ phận hỗ trợ kỹ thuật máy tính"
          },
          {
            "key": "C",
            "text": "Adelivery driver",
            "vietnamese": "Cửa hàng sửa điện thoại"
          },
          {
            "key": "D",
            "text": "A restaurant supplier",
            "vietnamese": "Nhân viên bán hàng"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Người nói mở đầu: 'calling for tech support regarding the desktop computer' (hỗ trợ kỹ thuật - technical support - B)."
      },
      {
        "num": 84,
        "question": "Whatproblemdoesthespeakerhave?",
        "vietnameseQuestion": "Người nói gặp phải vấn đề gì?",
        "options": [
          {
            "key": "A",
            "text": "Some appliances have not arrived.",
            "vietnamese": "Màn hình đen"
          },
          {
            "key": "B",
            "text": "Someboxeshavebeendamaged.",
            "vietnamese": "Máy không lên nguồn"
          },
          {
            "key": "C",
            "text": "A water cooler is not working.",
            "vietnamese": "Bàn phím hỏng"
          },
          {
            "key": "D",
            "text": "A sink is not draining.",
            "vietnamese": "Không kết nối được mạng không dây"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Sự cố: 'fails to recognize the network adapter... connect to wireless network' (không kết nối mạng được - cannot connect to network - D)."
      },
      {
        "num": 85,
        "question": "Whydoesthespeakersay,IthinkI'vedone all I can do\"?",
        "vietnameseQuestion": "Tại sao người nói lại nói, \"Tôi nghĩ tôi đã làm tất cả những gì có thể làm rồi\"?",
        "options": [
          {
            "key": "A",
            "text": "To request that the listenergive hera refund",
            "vietnamese": "Để yêu cầu hoàn tiền"
          },
          {
            "key": "B",
            "text": "To indicatethat sheneeds the listener's assistance",
            "vietnamese": "Để giải thích lý do cần thợ đến kiểm tra tận nơi"
          },
          {
            "key": "C",
            "text": "Toexplainwhy sheenrolled ina training course",
            "vietnamese": "Để từ chối mua thêm đồ"
          },
          {
            "key": "D",
            "text": "Toconfirmthatataskhasbeen completed",
            "vietnamese": "Để khen ngợi dịch vụ"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Người nói liệt kê đã thử mọi cách để chứng minh việc tự khắc phục không hiệu quả và cần kỹ thuật viên đến tận nơi (B)."
      }
    ],
    "vocabulary": [
      {
        "word": "tech support",
        "meaning": "hỗ trợ kỹ thuật",
        "partOfSpeech": "n"
      },
      {
        "word": "network adapter",
        "meaning": "bộ điều hợp mạng mạng card",
        "partOfSpeech": "n"
      },
      {
        "word": "restart",
        "meaning": "khởi động lại",
        "partOfSpeech": "v"
      },
      {
        "word": "inspect",
        "meaning": "kiểm tra thanh tra",
        "partOfSpeech": "v"
      }
    ]
  },
  {
    "id": "part4-86-88",
    "part": 4,
    "partTitle": "Part 4: Bài nói chuyện",
    "questionRange": "Câu 86 - 88",
    "title": "Part 4 - Câu 86 - 88: Thông báo ngày tổng vệ sinh văn phòng",
    "audioSrc": "/audio/test6_2024.mp3",
    "startTime": 2301.45,
    "endTime": 2383.16,
    "transcript": [
      {
        "id": "p4-86-1",
        "speaker": "Speaker",
        "text": "Attention team. Next Tuesday the 11th is our scheduled quarterly office cleanup day.",
        "vietnamese": "Xin toàn đội chú ý. Thứ Ba tuần tới ngày 11 là ngày tổng vệ sinh văn phòng định kỳ hàng quý của chúng ta."
      },
      {
        "id": "p4-86-2",
        "speaker": "Speaker",
        "text": "I'd like to extend special thanks to Rajeev for ordering all the recycling bins and shredding bags in advance.",
        "vietnamese": "Tôi muốn gửi lời cảm ơn đặc biệt tới Rajeev vì đã đặt trước tất cả các thùng tái chế và túi đựng giấy hủy."
      },
      {
        "id": "p4-86-3",
        "speaker": "Speaker",
        "text": "Please sort through your paperwork and dispose of outdated project files.",
        "vietnamese": "Các bạn vui lòng phân loại giấy tờ và tiêu hủy các hồ sơ dự án đã cũ."
      },
      {
        "id": "p4-86-4",
        "speaker": "Speaker",
        "text": "If you run out of space, the south corner of the office has a lot of empty file cabinets that everyone is welcome to use.",
        "vietnamese": "Nếu các bạn thiếu chỗ để, góc phía nam của văn phòng có rất nhiều tủ đựng tài liệu còn trống mà mọi người đều có thể sử dụng."
      }
    ],
    "questions": [
      {
        "num": 86,
        "question": "Whatwill thelistenersdonextTuesday?",
        "vietnameseQuestion": "Những người nghe sẽ làm gì vào thứ Ba tới?",
        "options": [
          {
            "key": "A",
            "text": "Renewtheircontracts",
            "vietnamese": "Tham gia hội thảo"
          },
          {
            "key": "B",
            "text": "Cleantheiroffices",
            "vietnamese": "Dọn dẹp vệ sinh văn phòng"
          },
          {
            "key": "C",
            "text": "Visitarecyclingcenter",
            "vietnamese": "Đi dã ngoại"
          },
          {
            "key": "D",
            "text": "Greetnewclients",
            "vietnamese": "Kiểm kê hàng hóa"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Sự kiện: 'quarterly office cleanup day' (ngày dọn dẹp văn phòng - clean an office - B)."
      },
      {
        "num": 87,
        "question": "What doesthespeakerthankRajeevfor doing?",
        "vietnameseQuestion": "Người nói cảm ơn Rajeev vì đã làm gì?",
        "options": [
          {
            "key": "A",
            "text": "Paying for refreshments",
            "vietnamese": "Dọn sạch sảnh"
          },
          {
            "key": "B",
            "text": "Reservingameeting room",
            "vietnamese": "In tài liệu"
          },
          {
            "key": "C",
            "text": "Arranging transportation",
            "vietnamese": "Tổ chức cuộc họp"
          },
          {
            "key": "D",
            "text": "Rentingsomeequipment",
            "vietnamese": "Đặt mua các thùng tái chế và túi hủy giấy"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Cảm ơn Rajeev: 'ordering all the recycling bins and shredding bags' (đặt đồ dùng vệ sinh/tái chế - ordered supplies - D)."
      },
      {
        "num": 88,
        "question": "Whydoesthespeakersay,\"thesouthcorner of the office has a lot of empty file cabinets\"?",
        "vietnameseQuestion": "Tại sao người nói lại nói, \"góc phía nam có rất nhiều tủ tài liệu còn trống\"?",
        "options": [
          {
            "key": "A",
            "text": "Tosuggestalocationforsomedesks",
            "vietnamese": "Để gợi ý nơi cất trữ tài liệu còn thừa"
          },
          {
            "key": "B",
            "text": "Toindicatewheresomefilesshouldbe stored",
            "vietnamese": "Để yêu cầu chuyển tủ đi"
          },
          {
            "key": "C",
            "text": "Toexplainthatataskhas alreadybeen completed",
            "vietnamese": "Để cảnh báo văn phòng chật"
          },
          {
            "key": "D",
            "text": "Toaskformoreofficesuppliestobe ordered 100",
            "vietnamese": "Để bán thanh lý tủ cũ"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Người nói chỉ ra chỗ còn nhiều tủ trống để đồng nghiệp có chỗ cất giữ tài liệu (suggest storage space - A)."
      }
    ],
    "vocabulary": [
      {
        "word": "cleanup",
        "meaning": "dọn dẹp tổng vệ sinh",
        "partOfSpeech": "n"
      },
      {
        "word": "recycling bin",
        "meaning": "thùng rác tái chế",
        "partOfSpeech": "n"
      },
      {
        "word": "shredding",
        "meaning": "tiêu hủy giấy tờ bảo mật",
        "partOfSpeech": "n"
      },
      {
        "word": "file cabinet",
        "meaning": "tủ đựng hồ sơ tài liệu",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part4-89-91",
    "part": 4,
    "partTitle": "Part 4: Bài nói chuyện",
    "questionRange": "Câu 89 - 91",
    "title": "Part 4 - Câu 89 - 91: Thông báo hệ thống xử lý đơn hàng gặp sự cố tại Ziegler Inc",
    "audioSrc": "/audio/test6_2024.mp3",
    "startTime": 2383.16,
    "endTime": 2469.06,
    "transcript": [
      {
        "id": "p4-89-1",
        "speaker": "Speaker",
        "text": "Hello, and thank you for calling Ziegler Incorporated, the area's top supplier of commercial plumbing fixtures and piping.",
        "vietnamese": "Xin chào, và cảm ơn quý khách đã gọi đến Ziegler Incorporated, nhà cung cấp thiết bị và đường ống nước thương mại hàng đầu khu vực."
      },
      {
        "id": "p4-89-2",
        "speaker": "Speaker",
        "text": "We are currently experiencing an unexpected outage with our central inventory database system.",
        "vietnamese": "Hiện tại chúng tôi đang gặp phải sự cố ngừng hoạt động ngoài dự kiến với hệ thống cơ sở dữ liệu hàng tồn kho trung tâm."
      },
      {
        "id": "p4-89-3",
        "speaker": "Speaker",
        "text": "As a result, our customer representatives are temporarily unable to confirm stock availability or process new orders over the phone.",
        "vietnamese": "Do đó, các đại diện chăm sóc khách hàng của chúng tôi tạm thời không thể xác nhận tình trạng còn hàng hoặc xử lý các đơn hàng mới qua điện thoại."
      },
      {
        "id": "p4-89-4",
        "speaker": "Speaker",
        "text": "If you leave a voicemail with your customer account ID, a confirmation will arrive in an e-mail as soon as our servers are restored.",
        "vietnamese": "Nếu quý khách để lại tin nhắn thoại kèm mã tài khoản khách hàng, một email xác nhận sẽ được gửi tới ngay khi máy chủ của chúng tôi được khôi phục."
      }
    ],
    "questions": [
      {
        "num": 89,
        "question": "What does Ziegler Incorporated sell?",
        "vietnameseQuestion": "Công ty Ziegler Incorporated bán mặt hàng gì?",
        "options": [
          {
            "key": "A",
            "text": "Officepaper",
            "vietnamese": "Thiết bị đường ống nước thương mại"
          },
          {
            "key": "B",
            "text": "Gardening tools",
            "vietnamese": "Gạch ốp lát"
          },
          {
            "key": "C",
            "text": "Computers",
            "vietnamese": "Đồ nội thất"
          },
          {
            "key": "D",
            "text": "Car parts",
            "vietnamese": "Thiết bị điện tử"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Công ty là nhà cung cấp: 'commercial plumbing fixtures and piping' (thiết bị ống nước - plumbing fixtures - A)."
      },
      {
        "num": 90,
        "question": "Accordingto the speaker, what problemis the company experiencing?",
        "vietnameseQuestion": "Theo người nói, công ty đang gặp phải sự cố gì?",
        "options": [
          {
            "key": "A",
            "text": "Staffing shortages",
            "vietnamese": "Hỏa hoạn"
          },
          {
            "key": "B",
            "text": "Shipping delays",
            "vietnamese": "Hệ thống máy tính cơ sở dữ liệu bị sập/mất điện"
          },
          {
            "key": "C",
            "text": "Limitedwarehouse space",
            "vietnamese": "Thiếu hàng hóa"
          },
          {
            "key": "D",
            "text": "Insufficientinventory",
            "vietnamese": "Đình công"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Sự cố: 'unexpected outage with our central inventory database system' (sự cố hệ thống - system outage - B)."
      },
      {
        "num": 91,
        "question": "Whatwill arrive inan e-mail?",
        "vietnameseQuestion": "Thứ gì sẽ được gửi đến qua email?",
        "options": [
          {
            "key": "A",
            "text": "Somecontact information",
            "vietnamese": "Hóa đơn thanh toán"
          },
          {
            "key": "B",
            "text": "An order form",
            "vietnamese": "Mã giảm giá"
          },
          {
            "key": "C",
            "text": "Adiscount code",
            "vietnamese": "Xác nhận đơn hàng"
          },
          {
            "key": "D",
            "text": "A price list",
            "vietnamese": "Bản báo giá mới"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Thông báo: 'a confirmation will arrive in an e-mail' (xác nhận - A confirmation - C)."
      }
    ],
    "vocabulary": [
      {
        "word": "plumbing fixtures",
        "meaning": "thiết bị vệ sinh, phụ kiện ống nước",
        "partOfSpeech": "n"
      },
      {
        "word": "outage",
        "meaning": "sự cố mất điện/ngừng hoạt động hệ thống",
        "partOfSpeech": "n"
      },
      {
        "word": "inventory",
        "meaning": "hàng tồn kho",
        "partOfSpeech": "n"
      },
      {
        "word": "restore",
        "meaning": "khôi phục lại",
        "partOfSpeech": "v"
      }
    ]
  },
  {
    "id": "part4-92-94",
    "part": 4,
    "partTitle": "Part 4: Bài nói chuyện",
    "questionRange": "Câu 92 - 94",
    "title": "Part 4 - Câu 92 - 94: Hội đồng Nghệ thuật Thành phố thảo luận dự án điêu khắc",
    "audioSrc": "/audio/test6_2024.mp3",
    "startTime": 2469.06,
    "endTime": 2563.1,
    "transcript": [
      {
        "id": "p4-92-1",
        "speaker": "Speaker",
        "text": "As members of the City's Arts Commission, it's our responsibility to manage public art installations throughout the municipal district.",
        "vietnamese": "Là thành viên của Hội đồng Nghệ thuật Thành phố, trách nhiệm của chúng ta là quản lý các công trình nghệ thuật công cộng trên toàn địa bàn thành phố."
      },
      {
        "id": "p4-92-2",
        "speaker": "Speaker",
        "text": "The mayor has officially decided to commission a new public sculpture for the central plaza in front of City Hall.",
        "vietnamese": "Thị trưởng đã chính thức quyết định đặt hàng một tác phẩm điêu khắc công cộng mới cho quảng trường trung tâm phía trước Tòa thị chính."
      },
      {
        "id": "p4-92-3",
        "speaker": "Speaker",
        "text": "We recently conducted a citizen opinion survey. The primary goal was to determine what theme residents prefer for public artwork.",
        "vietnamese": "Gần đây chúng ta đã tiến hành khảo sát ý kiến người dân. Mục tiêu chính là xác định xem cư dân yêu thích chủ đề nào cho tác phẩm nghệ thuật công cộng."
      },
      {
        "id": "p4-92-4",
        "speaker": "Speaker",
        "text": "Regarding artist selection, I think Alvaro Gomez has won several prestigious national awards, so his portfolio deserves our serious consideration.",
        "vietnamese": "Về việc lựa chọn nghệ sĩ, tôi nghĩ Alvaro Gomez đã từng đoạt nhiều giải thưởng danh giá cấp quốc gia, vì vậy hồ sơ năng lực của anh ấy rất đáng để chúng ta cân nhắc nghiêm túc."
      }
    ],
    "questions": [
      {
        "num": 92,
        "question": "What has the mayor decided to do?",
        "vietnameseQuestion": "Thị trưởng thành phố đã quyết định làm gì?",
        "options": [
          {
            "key": "A",
            "text": "Runforelectionagain",
            "vietnamese": "Xây công viên mới"
          },
          {
            "key": "B",
            "text": "Redevelop an area of the city",
            "vietnamese": "Đặt làm tác phẩm điêu khắc công cộng mới"
          },
          {
            "key": "C",
            "text": "Hostanartfestival",
            "vietnamese": "Tăng ngân sách"
          },
          {
            "key": "D",
            "text": "Providepublicartclasses",
            "vietnamese": "Tổ chức lễ hội"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Thị trưởng quyết định: 'commission a new public sculpture' (đặt làm tượng điêu khắc công cộng - B)."
      },
      {
        "num": 93,
        "question": "What is the goal of a survey?",
        "vietnameseQuestion": "Mục tiêu của cuộc khảo sát là gì?",
        "options": [
          {
            "key": "A",
            "text": "Todecideonatheme",
            "vietnamese": "Xác định chủ đề nghệ thuật ưa thích của người dân"
          },
          {
            "key": "B",
            "text": "To raise money for a project",
            "vietnamese": "Thu thập tiền quyên góp"
          },
          {
            "key": "C",
            "text": "Toeducatethepublicaboutaproblem",
            "vietnamese": "Tìm kiếm địa điểm"
          },
          {
            "key": "D",
            "text": "Torecruitsomevolunteers",
            "vietnamese": "Đánh giá chi phí"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Mục tiêu: 'determine what theme residents prefer' (tìm hiểu sở thích của người dân - A)."
      },
      {
        "num": 94,
        "question": "Why does the speaker say, \"I think Alvaro Gomez haswonseveral awards\"?",
        "vietnameseQuestion": "Tại sao người nói lại nói, \"Tôi nghĩ Alvaro Gomez đã từng đoạt nhiều giải thưởng danh giá\"?",
        "options": [
          {
            "key": "A",
            "text": "Tocorrectsomeinformation",
            "vietnamese": "Để khen ngợi thị trưởng"
          },
          {
            "key": "B",
            "text": "To praiseamuseum exhibit",
            "vietnamese": "Để từ chối đề xuất"
          },
          {
            "key": "C",
            "text": "Torecommendasuitablecandidate",
            "vietnamese": "Để đề cử một nghệ sĩ thực hiện dự án"
          },
          {
            "key": "D",
            "text": "To congratulateacolleague SmithTheater Rear balcony $75 Mid-balcony $100 Lowerbalcony $125 Orchestra $150 Stage",
            "vietnamese": "Để giải thích một giải thưởng"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Người nói khen ngợi Alvaro Gomez nhằm đề xuất chọn nghệ sĩ này thực hiện dự án (recommend an artist - C)."
      }
    ],
    "vocabulary": [
      {
        "word": "Arts Commission",
        "meaning": "Hội đồng nghệ thuật",
        "partOfSpeech": "n"
      },
      {
        "word": "sculpture",
        "meaning": "tác phẩm điêu khắc",
        "partOfSpeech": "n"
      },
      {
        "word": "commission",
        "meaning": "đặt hàng tác phẩm nghệ thuật",
        "partOfSpeech": "v"
      },
      {
        "word": "prestigious",
        "meaning": "uy tín, danh giá",
        "partOfSpeech": "adj"
      }
    ]
  },
  {
    "id": "part4-95-97",
    "part": 4,
    "partTitle": "Part 4: Bài nói chuyện",
    "questionRange": "Câu 95 - 97",
    "title": "Part 4 - Câu 95 - 97: Nhà hát thông báo tình trạng vé hòa nhạc Mr. Kwan",
    "audioSrc": "/audio/test6_2024.mp3",
    "startTime": 2563.1,
    "endTime": 2651.03,
    "transcript": [
      {
        "id": "p4-95-1",
        "speaker": "Speaker",
        "text": "Good afternoon, Mr. Kwan. I'm calling from the Symphony Center box office regarding the concert tickets you inquired about.",
        "vietnamese": "Xin chào ông Kwan. Tôi gọi từ phòng vé Trung tâm Giao hưởng liên quan đến vé xem hòa nhạc mà ông đã hỏi thăm."
      },
      {
        "id": "p4-95-2",
        "speaker": "Speaker",
        "text": "You requested four adjacent seats for the Beethoven gala on Saturday evening.",
        "vietnamese": "Ông đã yêu cầu bốn ghế liền kề nhau cho đêm biểu diễn dạ tiệc Beethoven vào tối thứ Bảy."
      },
      {
        "id": "p4-95-3",
        "speaker": "Speaker",
        "text": "Unfortunately, the orchestra level is completely sold out. However, if you look at the seating chart, the Mezzanine Tier section still has four seats together available at $125 each.",
        "vietnamese": "Rất tiếc, khu vực tầng trệt (Orchestra) đã bán hết sạch vé. Tuy nhiên nếu ông nhìn vào sơ đồ chỗ ngồi, khu vực Tầng Lửng (Mezzanine Tier) vẫn còn bốn ghế liền nhau với giá 125 đô la mỗi ghế."
      },
      {
        "id": "p4-95-4",
        "speaker": "Speaker",
        "text": "Because demand is extremely high, we can hold these seats for you for only 24 hours. Please call us back within 24 hours to confirm your purchase.",
        "vietnamese": "Vì nhu cầu rất cao, chúng tôi chỉ có thể giữ chỗ cho ông trong vòng 24 giờ. Xin vui lòng gọi lại cho chúng tôi trong vòng 24 giờ để xác nhận việc mua vé."
      }
    ],
    "questions": [
      {
        "num": 95,
        "question": "Who most likely is the speaker?",
        "vietnameseQuestion": "Người nói nhiều khả năng là ai nhất?",
        "options": [
          {
            "key": "A",
            "text": "A seating usher",
            "vietnamese": "Nhạc trưởng"
          },
          {
            "key": "B",
            "text": "Aband director",
            "vietnamese": "Nhạc công"
          },
          {
            "key": "C",
            "text": "Astageactor",
            "vietnamese": "Nhân viên an ninh"
          },
          {
            "key": "D",
            "text": "Asales agent",
            "vietnamese": "Nhân viên phòng vé nhà hát giao hưởng"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Người nói gọi từ 'Symphony Center box office' (phòng vé trung tâm giao hưởng - Box office worker - D)."
      },
      {
        "num": 96,
        "question": "Look at the graphic. How much do tickets in theavailablesectioncost?",
        "vietnameseQuestion": "Nhìn vào hình ảnh sơ đồ chỗ ngồi. Vé ở khu vực còn chỗ trống có giá bao nhiêu?",
        "options": [
          {
            "key": "A",
            "text": "$75",
            "vietnamese": "$75"
          },
          {
            "key": "B",
            "text": "$100",
            "vietnamese": "$100"
          },
          {
            "key": "C",
            "text": "$125",
            "vietnamese": "$125"
          },
          {
            "key": "D",
            "text": "$150",
            "vietnamese": "$150"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Khu vực Mezzanine còn 4 ghế liền nhau: 'Mezzanine Tier section... at $125 each' (đáp án C: $125)."
      },
      {
        "num": 97,
        "question": "What does the listener need to do within24 hours?",
        "vietnameseQuestion": "Người nghe cần phải làm gì trong vòng 24 giờ?",
        "options": [
          {
            "key": "A",
            "text": "Makeaphone call",
            "vietnamese": "Gọi điện xác nhận mua vé"
          },
          {
            "key": "B",
            "text": "Send in a payment",
            "vietnamese": "Đến nhận vé"
          },
          {
            "key": "C",
            "text": "Pickupan item",
            "vietnamese": "Gửi email khiếu nại"
          },
          {
            "key": "D",
            "text": "Fill out a form Thisistheendoft Stop 1: City Hall . Stop2:PostOffice. Harbor Stop3:Museum Stop 4: Cannery",
            "vietnamese": "Điền vào biểu mẫu"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Yêu cầu: 'call us back within 24 hours to confirm your purchase' (gọi điện xác nhận mua vé - A)."
      }
    ],
    "vocabulary": [
      {
        "word": "box office",
        "meaning": "phòng bán vé",
        "partOfSpeech": "n"
      },
      {
        "word": "adjacent seats",
        "meaning": "các ghế liền kề nhau",
        "partOfSpeech": "n"
      },
      {
        "word": "seating chart",
        "meaning": "sơ đồ chỗ ngồi",
        "partOfSpeech": "n"
      },
      {
        "word": "demand",
        "meaning": "nhu cầu của thị trường",
        "partOfSpeech": "n"
      }
    ],
    "graphicImage": "/images/intensive/test6_2024/q95_97.png",
    "image": "/images/intensive/test6_2024/q95_97.png"
  },
  {
    "id": "part4-98-100",
    "part": 4,
    "partTitle": "Part 4: Bài nói chuyện",
    "questionRange": "Câu 98 - 100",
    "title": "Part 4 - Câu 98 - 100: Chuyến xe buýt tham quan Kenzie Harbor thay đổi lịch trình",
    "audioSrc": "/audio/test6_2024.mp3",
    "startTime": 2651.03,
    "endTime": 2735.81,
    "transcript": [
      {
        "id": "p4-98-1",
        "speaker": "Speaker",
        "text": "Welcome to this bus tour of Kenzie Harbor! We're excited to show you the historic waterfront and its famous maritime landmarks.",
        "vietnamese": "Chào mừng các bạn đến với chuyến tham quan bằng xe buýt quanh Vịnh Cảng Kenzie! Chúng tôi rất hào hứng được giới thiệu với các bạn khu cảng lịch sử và các địa danh hàng hải nổi tiếng."
      },
      {
        "id": "p4-98-2",
        "speaker": "Speaker",
        "text": "Before we depart, please look at the tour map in your brochure. Due to extensive road construction near the harbor inlet, Stop 3, the Maritime Museum, has been canceled for today's itinerary.",
        "vietnamese": "Trước khi khởi hành, xin vui lòng nhìn vào bản đồ tour trong tập gấp của các bạn. Do công trình thi công đường lớn gần lối vào cảng, Điểm dừng số 3, Bảo tàng Hàng hải, đã bị hủy trong lịch trình ngày hôm nay."
      },
      {
        "id": "p4-98-3",
        "speaker": "Speaker",
        "text": "To compensate for this change, we've extended our time at the historical Cannery, and our tour company will provide complimentary meal vouchers for lunch at the harbor market.",
        "vietnamese": "Để bù đắp cho sự thay đổi này, chúng tôi đã kéo dài thời gian tham quan tại Nhà máy Đóng hộp lịch sử, và công ty tour của chúng tôi sẽ tặng phiếu ăn trưa miễn phí tại chợ cảng."
      }
    ],
    "questions": [
      {
        "num": 98,
        "question": "Look at the graphic.Which stop has been canceled?",
        "vietnameseQuestion": "Nhìn vào hình ảnh. Điểm dừng nào đã bị hủy bỏ?",
        "options": [
          {
            "key": "A",
            "text": "Stop 1",
            "vietnamese": "Điểm dừng 1 (Tòa thị chính)"
          },
          {
            "key": "B",
            "text": "Stop 2",
            "vietnamese": "Điểm dừng 2 (Bưu điện)"
          },
          {
            "key": "C",
            "text": "Stop 3",
            "vietnamese": "Điểm dừng 3 (Bảo tàng)"
          },
          {
            "key": "D",
            "text": "Stop 4",
            "vietnamese": "Điểm dừng 4 (Nhà máy đóng hộp)"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Người nói thông báo: 'Stop 3, the Maritime Museum, has been canceled' (đáp án C)."
      },
      {
        "num": 99,
        "question": "Whyhasastopbeencanceled?",
        "vietnameseQuestion": "Tại sao điểm dừng đó lại bị hủy?",
        "options": [
          {
            "key": "A",
            "text": "A guest speaker is unavailable.",
            "vietnamese": "Thời tiết xấu"
          },
          {
            "key": "B",
            "text": "Abuilding is undergoing maintenance.",
            "vietnamese": "Đường đang thi công sửa chữa"
          },
          {
            "key": "C",
            "text": "Anareahasclosedforafestival.",
            "vietnamese": "Bảo tàng đóng cửa bảo trì"
          },
          {
            "key": "D",
            "text": "Aprivateeventhasbeenscheduled.",
            "vietnamese": "Thiếu thời gian"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Lý do: 'Due to extensive road construction near the harbor inlet' (do công trình thi công đường sá - road construction - B)."
      },
      {
        "num": 100,
        "question": "Whatwillthelistenersreceive?",
        "vietnameseQuestion": "Những người nghe sẽ nhận được món quà gì?",
        "options": [
          {
            "key": "A",
            "text": "A refund",
            "vietnamese": "Bản đồ lưu niệm"
          },
          {
            "key": "B",
            "text": "Asouvenir",
            "vietnamese": "Áo mưa"
          },
          {
            "key": "C",
            "text": "Aprinted map",
            "vietnamese": "Vé vào cửa bảo tàng"
          },
          {
            "key": "D",
            "text": "Meal vouchers",
            "vietnamese": "Phiếu ăn miễn phí (meal vouchers)"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Người nói cho biết: 'provide complimentary meal vouchers for lunch' (phiếu ăn miễn phí - meal vouchers - D)."
      }
    ],
    "vocabulary": [
      {
        "word": "maritime",
        "meaning": "thuộc về hàng hải, biển cả",
        "partOfSpeech": "adj"
      },
      {
        "word": "landmark",
        "meaning": "địa danh nổi tiếng mang tính biểu tượng",
        "partOfSpeech": "n"
      },
      {
        "word": "brochure",
        "meaning": "sách gấp giới thiệu quảng cáo",
        "partOfSpeech": "n"
      },
      {
        "word": "meal voucher",
        "meaning": "phiếu ăn uống",
        "partOfSpeech": "n"
      }
    ],
    "graphicImage": "/images/intensive/test6_2024/q98_100.png",
    "image": "/images/intensive/test6_2024/q98_100.png"
  }
];
