// Dữ liệu luyện nghe chi tiết (Intensive Listening) - ETS TOEIC 2024 Test 4
// Áp dụng kỹ thuật Virtual Timestamp Slicing từ audio gốc /audio/test4_2024.mp3
// Transcript, câu hỏi và giải thích chi tiết theo đề thi ETS 2024 Test 4

import type { IntensiveListeningItem } from './intensive_listening_types';

export const test4_2024_IntensiveData: IntensiveListeningItem[] = [
  {
    "id": "part1-1",
    "part": 1,
    "partTitle": "Part 1: Mô tả hình ảnh",
    "questionRange": "Câu 1",
    "title": "Part 1 - Câu 1: Người đàn ông rót đồ uống vào cốc",
    "audioSrc": "/audio/test4_2024.mp3",
    "startTime": 99.03,
    "endTime": 118.45,
    "imageUrl": "/images/intensive/test4_2024/q1.png",
    "image": "/images/intensive/test4_2024/q1.png",
    "transcript": [
      {
        "id": "p1-1-a",
        "speaker": "Speaker",
        "text": "(A) He's cleaning the floor.",
        "vietnamese": "(A) Anh ấy đang lau sàn nhà."
      },
      {
        "id": "p1-1-b",
        "speaker": "Speaker",
        "text": "(B) He's setting a plant on a shelf.",
        "vietnamese": "(B) Anh ấy đang đặt một chậu cây lên kệ."
      },
      {
        "id": "p1-1-c",
        "speaker": "Speaker",
        "text": "(C) He's pouring some liquid into a cup.",
        "vietnamese": "(C) Anh ấy đang rót chất lỏng vào một chiếc cốc."
      },
      {
        "id": "p1-1-d",
        "speaker": "Speaker",
        "text": "(D) He's ironing a shirt.",
        "vietnamese": "(D) Anh ấy đang ủi một chiếc áo sơ mi."
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
            "text": "He's cleaning the floor.",
            "vietnamese": "Anh ấy đang lau sàn nhà."
          },
          {
            "key": "B",
            "text": "He's setting a plant on a shelf.",
            "vietnamese": "Anh ấy đang đặt một chậu cây lên kệ."
          },
          {
            "key": "C",
            "text": "He's pouring some liquid into a cup.",
            "vietnamese": "Anh ấy đang rót chất lỏng vào một chiếc cốc."
          },
          {
            "key": "D",
            "text": "He's ironing a shirt.",
            "vietnamese": "Anh ấy đang ủi một chiếc áo sơ mi."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Trong bức ảnh, người đàn ông đang cầm bình và rót đồ uống vào một chiếc cốc (He's pouring some liquid into a cup)."
      }
    ],
    "vocabulary": [
      {
        "word": "pour",
        "meaning": "rót, đổ (chất lỏng)",
        "partOfSpeech": "v"
      },
      {
        "word": "liquid",
        "meaning": "chất lỏng, nước uống",
        "partOfSpeech": "n"
      },
      {
        "word": "iron",
        "meaning": "ủi, là quần áo",
        "partOfSpeech": "v"
      }
    ]
  },
  {
    "id": "part1-2",
    "part": 1,
    "partTitle": "Part 1: Mô tả hình ảnh",
    "questionRange": "Câu 2",
    "title": "Part 1 - Câu 2: Hai người cùng xem xét tài liệu",
    "audioSrc": "/audio/test4_2024.mp3",
    "startTime": 118.45,
    "endTime": 153.63,
    "imageUrl": "/images/intensive/test4_2024/q2.png",
    "image": "/images/intensive/test4_2024/q2.png",
    "transcript": [
      {
        "id": "p1-2-a",
        "speaker": "Speaker",
        "text": "(A) They're glancing at a monitor.",
        "vietnamese": "(A) Họ đang liếc nhìn vào màn hình máy tính."
      },
      {
        "id": "p1-2-b",
        "speaker": "Speaker",
        "text": "(B) They're putting pens in a jar.",
        "vietnamese": "(B) Họ đang cắm bút vào lọ."
      },
      {
        "id": "p1-2-c",
        "speaker": "Speaker",
        "text": "(C) They're wiping off a desk.",
        "vietnamese": "(C) Họ đang lau bàn làm việc."
      },
      {
        "id": "p1-2-d",
        "speaker": "Speaker",
        "text": "(D) They're examining a document.",
        "vietnamese": "(D) Họ đang xem xét một tài liệu."
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
            "text": "They're glancing at a monitor.",
            "vietnamese": "Họ đang liếc nhìn vào màn hình máy tính."
          },
          {
            "key": "B",
            "text": "They're putting pens in a jar.",
            "vietnamese": "Họ đang cắm bút vào lọ."
          },
          {
            "key": "C",
            "text": "They're wiping off a desk.",
            "vietnamese": "Họ đang lau bàn làm việc."
          },
          {
            "key": "D",
            "text": "They're examining a document.",
            "vietnamese": "Họ đang xem xét một tài liệu."
          }
        ],
        "correctAnswer": "D",
        "explanation": "Trong bức ảnh tại văn phòng, hai người đang cúi nhìn và cùng nhau kiểm tra, xem xét một tờ tài liệu trên bàn (They're examining a document)."
      }
    ],
    "vocabulary": [
      {
        "word": "examine",
        "meaning": "xem xét, kiểm tra kỹ lưỡng",
        "partOfSpeech": "v"
      },
      {
        "word": "document",
        "meaning": "tài liệu, văn bản",
        "partOfSpeech": "n"
      },
      {
        "word": "glance at",
        "meaning": "liếc nhìn thoáng qua",
        "partOfSpeech": "phr v"
      }
    ]
  },
  {
    "id": "part1-3",
    "part": 1,
    "partTitle": "Part 1: Mô tả hình ảnh",
    "questionRange": "Câu 3",
    "title": "Part 1 - Câu 3: Mọi người ngồi thuyền ngoạn cảnh trên sông",
    "audioSrc": "/audio/test4_2024.mp3",
    "startTime": 153.63,
    "endTime": 175.08,
    "imageUrl": "/images/intensive/test4_2024/q3.png",
    "image": "/images/intensive/test4_2024/q3.png",
    "transcript": [
      {
        "id": "p1-3-a",
        "speaker": "Speaker",
        "text": "(A) Some people are taking a ride on a boat.",
        "vietnamese": "(A) Một số người đang đi du ngoạn trên một chiếc thuyền."
      },
      {
        "id": "p1-3-b",
        "speaker": "Speaker",
        "text": "(B) A boat is floating under a bridge.",
        "vietnamese": "(B) Một chiếc thuyền đang trôi dưới gầm cầu."
      },
      {
        "id": "p1-3-c",
        "speaker": "Speaker",
        "text": "(C) A boat is being loaded with cargo.",
        "vietnamese": "(C) Một chiếc thuyền đang được chất hàng hóa lên."
      },
      {
        "id": "p1-3-d",
        "speaker": "Speaker",
        "text": "(D) Some people are rowing a boat past a lighthouse.",
        "vietnamese": "(D) Một số người đang chèo thuyền đi ngang qua ngọn hải đăng."
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
            "text": "Some people are taking a ride on a boat.",
            "vietnamese": "Một số người đang đi du ngoạn trên một chiếc thuyền."
          },
          {
            "key": "B",
            "text": "A boat is floating under a bridge.",
            "vietnamese": "Một chiếc thuyền đang trôi dưới gầm cầu."
          },
          {
            "key": "C",
            "text": "A boat is being loaded with cargo.",
            "vietnamese": "Một chiếc thuyền đang được chất hàng hóa lên."
          },
          {
            "key": "D",
            "text": "Some people are rowing a boat past a lighthouse.",
            "vietnamese": "Một số người đang chèo thuyền đi ngang qua ngọn hải đăng."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Trên mặt nước có một chiếc thuyền chở nhiều hành khách đang ngồi ngắm cảnh đi dạo (Some people are taking a ride on a boat)."
      }
    ],
    "vocabulary": [
      {
        "word": "take a ride",
        "meaning": "đi dạo, đi xe/thuyền ngoạn cảnh",
        "partOfSpeech": "phr"
      },
      {
        "word": "float",
        "meaning": "trôi nổi, bồng bềnh trên nước",
        "partOfSpeech": "v"
      },
      {
        "word": "cargo",
        "meaning": "hàng hóa chuyên chở",
        "partOfSpeech": "n"
      },
      {
        "word": "lighthouse",
        "meaning": "ngọn hải đăng",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part1-4",
    "part": 1,
    "partTitle": "Part 1: Mô tả hình ảnh",
    "questionRange": "Câu 4",
    "title": "Part 1 - Câu 4: Đàn ghi-ta đặt cạnh lò sưởi",
    "audioSrc": "/audio/test4_2024.mp3",
    "startTime": 175.08,
    "endTime": 204.62,
    "imageUrl": "/images/intensive/test4_2024/q4.png",
    "image": "/images/intensive/test4_2024/q4.png",
    "transcript": [
      {
        "id": "p1-4-a",
        "speaker": "Speaker",
        "text": "(A) There's a fire burning in a fireplace.",
        "vietnamese": "(A) Có ngọn lửa đang cháy trong lò sưởi."
      },
      {
        "id": "p1-4-b",
        "speaker": "Speaker",
        "text": "(B) There's a guitar beside a fireplace.",
        "vietnamese": "(B) Có một cây đàn ghi-ta đặt bên cạnh lò sưởi."
      },
      {
        "id": "p1-4-c",
        "speaker": "Speaker",
        "text": "(C) Some cables have been left on the ground in a pile.",
        "vietnamese": "(C) Một số dây cáp đã bị để thành đống trên mặt đất."
      },
      {
        "id": "p1-4-d",
        "speaker": "Speaker",
        "text": "(D) A television is being packed into a box.",
        "vietnamese": "(D) Một chiếc ti vi đang được đóng gói vào hộp."
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
            "text": "There's a fire burning in a fireplace.",
            "vietnamese": "Có ngọn lửa đang cháy trong lò sưởi."
          },
          {
            "key": "B",
            "text": "There's a guitar beside a fireplace.",
            "vietnamese": "Có một cây đàn ghi-ta đặt bên cạnh lò sưởi."
          },
          {
            "key": "C",
            "text": "Some cables have been left on the ground in a pile.",
            "vietnamese": "Một số dây cáp đã bị để thành đống trên mặt đất."
          },
          {
            "key": "D",
            "text": "A television is being packed into a box.",
            "vietnamese": "Một chiếc ti vi đang được đóng gói vào hộp."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Trong phòng khách, một cây đàn guitar acoustic được dựng ngay bên cạnh khung lò sưởi (There's a guitar beside a fireplace)."
      }
    ],
    "vocabulary": [
      {
        "word": "fireplace",
        "meaning": "lò sưởi trong nhà",
        "partOfSpeech": "n"
      },
      {
        "word": "beside",
        "meaning": "bên cạnh",
        "partOfSpeech": "prep"
      },
      {
        "word": "cable",
        "meaning": "dây cáp điện",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part1-5",
    "part": 1,
    "partTitle": "Part 1: Mô tả hình ảnh",
    "questionRange": "Câu 5",
    "title": "Part 1 - Câu 5: Dãy núi trùng điệp phía xa chân trời",
    "audioSrc": "/audio/test4_2024.mp3",
    "startTime": 204.62,
    "endTime": 232.23,
    "imageUrl": "/images/intensive/test4_2024/q5.png",
    "image": "/images/intensive/test4_2024/q5.png",
    "transcript": [
      {
        "id": "p1-5-a",
        "speaker": "Speaker",
        "text": "(A) Some people are riding bicycles through a field.",
        "vietnamese": "(A) Một số người đang đạp xe qua cánh đồng."
      },
      {
        "id": "p1-5-b",
        "speaker": "Speaker",
        "text": "(B) Some people are moving a picnic table.",
        "vietnamese": "(B) Một số người đang khiêng bàn dã ngoại."
      },
      {
        "id": "p1-5-c",
        "speaker": "Speaker",
        "text": "(C) There are some mountains in the distance.",
        "vietnamese": "(C) Có những dãy núi ở phía xa xa."
      },
      {
        "id": "p1-5-d",
        "speaker": "Speaker",
        "text": "(D) A bicycle has fallen over on the ground.",
        "vietnamese": "(D) Một chiếc xe đạp đã bị đổ ngã trên mặt đất."
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
            "text": "Some people are riding bicycles through a field.",
            "vietnamese": "Một số người đang đạp xe qua cánh đồng."
          },
          {
            "key": "B",
            "text": "Some people are moving a picnic table.",
            "vietnamese": "Một số người đang khiêng bàn dã ngoại."
          },
          {
            "key": "C",
            "text": "There are some mountains in the distance.",
            "vietnamese": "Có những dãy núi ở phía xa xa."
          },
          {
            "key": "D",
            "text": "A bicycle has fallen over on the ground.",
            "vietnamese": "Một chiếc xe đạp đã bị đổ ngã trên mặt đất."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Trong bức ảnh phong cảnh thiên nhiên ngoài trời, phía hậu cảnh là những rặng núi cao sừng sững ở đằng xa (There are some mountains in the distance)."
      }
    ],
    "vocabulary": [
      {
        "word": "in the distance",
        "meaning": "ở đằng xa, phía xa chân trời",
        "partOfSpeech": "prep phr"
      },
      {
        "word": "picnic table",
        "meaning": "bàn dã ngoại gỗ ngoài trời",
        "partOfSpeech": "n phr"
      },
      {
        "word": "fall over",
        "meaning": "ngã đổ xuống",
        "partOfSpeech": "phr v"
      }
    ]
  },
  {
    "id": "part1-6",
    "part": 1,
    "partTitle": "Part 1: Mô tả hình ảnh",
    "questionRange": "Câu 6",
    "title": "Part 1 - Câu 6: Lọ hoa bài trí trên bàn trong phòng khách",
    "audioSrc": "/audio/test4_2024.mp3",
    "startTime": 232.23,
    "endTime": 266.26,
    "imageUrl": "/images/intensive/test4_2024/q6.png",
    "image": "/images/intensive/test4_2024/q6.png",
    "transcript": [
      {
        "id": "p1-6-a",
        "speaker": "Speaker",
        "text": "(A) Some couches have been pushed against a wall.",
        "vietnamese": "(A) Những chiếc ghế sofa đã được đẩy sát vào tường."
      },
      {
        "id": "p1-6-b",
        "speaker": "Speaker",
        "text": "(B) Some lights have been hung from the ceiling.",
        "vietnamese": "(B) Một số bóng đèn được treo từ trần nhà."
      },
      {
        "id": "p1-6-c",
        "speaker": "Speaker",
        "text": "(C) Some cushions have been stacked on the floor.",
        "vietnamese": "(C) Những chiếc đệm ngồi đã được xếp chồng trên sàn."
      },
      {
        "id": "p1-6-d",
        "speaker": "Speaker",
        "text": "(D) Some flowers have been arranged in a vase.",
        "vietnamese": "(D) Một số bông hoa đã được cắm vào trong bình hoa."
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
            "text": "Some couches have been pushed against a wall.",
            "vietnamese": "Những chiếc ghế sofa đã được đẩy sát vào tường."
          },
          {
            "key": "B",
            "text": "Some lights have been hung from the ceiling.",
            "vietnamese": "Một số bóng đèn được treo từ trần nhà."
          },
          {
            "key": "C",
            "text": "Some cushions have been stacked on the floor.",
            "vietnamese": "Những chiếc đệm ngồi đã được xếp chồng trên sàn."
          },
          {
            "key": "D",
            "text": "Some flowers have been arranged in a vase.",
            "vietnamese": "Một số bông hoa đã được cắm vào trong bình hoa."
          }
        ],
        "correctAnswer": "D",
        "explanation": "Trong bức ảnh bài trí nội thất phòng, nổi bật trên bàn là một bình hoa được cắm đẹp mắt (Some flowers have been arranged in a vase)."
      }
    ],
    "vocabulary": [
      {
        "word": "vase",
        "meaning": "bình hoa, lọ hoa",
        "partOfSpeech": "n"
      },
      {
        "word": "arrange",
        "meaning": "cắm hoa, sắp đặt",
        "partOfSpeech": "v"
      },
      {
        "word": "cushion",
        "meaning": "đệm ngồi, gối tựa",
        "partOfSpeech": "n"
      },
      {
        "word": "couch",
        "meaning": "ghế sofa dài",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-7",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 7",
    "title": "Part 2 - Câu 7: Cửa hàng mở cửa vào Chủ nhật",
    "audioSrc": "/audio/test4_2024.mp3",
    "startTime": 297.06,
    "endTime": 313.21,
    "transcript": [
      {
        "id": "p2-7-q",
        "speaker": "Speaker 1",
        "text": "Does the shop open on Sundays?",
        "vietnamese": "Cửa hàng có mở cửa vào các ngày Chủ nhật không?"
      },
      {
        "id": "p2-7-a",
        "speaker": "Speaker 2",
        "text": "(A) Yes, at one o'clock.",
        "vietnamese": "(A) Có, lúc 1 giờ chiều."
      },
      {
        "id": "p2-7-b",
        "speaker": "Speaker 2",
        "text": "(B) Because we drove.",
        "vietnamese": "(B) Bởi vì chúng tôi đã lái xe."
      },
      {
        "id": "p2-7-c",
        "speaker": "Speaker 2",
        "text": "(C) I'd like to return this item, please.",
        "vietnamese": "(C) Làm ơn cho tôi đổi trả món đồ này."
      }
    ],
    "questions": [
      {
        "num": 7,
        "question": "Does the shop open on Sundays?",
        "vietnameseQuestion": "Cửa hàng có mở cửa vào các ngày Chủ nhật không?",
        "options": [
          {
            "key": "A",
            "text": "Yes, at one o'clock.",
            "vietnamese": "Có, lúc 1 giờ chiều."
          },
          {
            "key": "B",
            "text": "Because we drove.",
            "vietnamese": "Bởi vì chúng tôi đã lái xe."
          },
          {
            "key": "C",
            "text": "I'd like to return this item, please.",
            "vietnamese": "Làm ơn cho tôi đổi trả món đồ này."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Câu hỏi Yes/No 'Does the shop open on Sundays?'. Phương án (A) 'Yes, at one o'clock' trả lời khẳng định có và cung cấp giờ mở cửa cụ thể."
      }
    ],
    "vocabulary": [
      {
        "word": "open",
        "meaning": "mở cửa đón khách",
        "partOfSpeech": "v"
      },
      {
        "word": "return an item",
        "meaning": "đổi trả một món hàng",
        "partOfSpeech": "phr"
      }
    ]
  },
  {
    "id": "part2-8",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 8",
    "title": "Part 2 - Câu 8: Nguồn gốc của những quả cam",
    "audioSrc": "/audio/test4_2024.mp3",
    "startTime": 313.21,
    "endTime": 333.88,
    "transcript": [
      {
        "id": "p2-8-q",
        "speaker": "Speaker 1",
        "text": "Where did these oranges come from?",
        "vietnamese": "Những quả cam này có nguồn gốc từ đâu vậy?"
      },
      {
        "id": "p2-8-a",
        "speaker": "Speaker 2",
        "text": "(A) Here's a basket you can use.",
        "vietnamese": "(A) Đây là chiếc giỏ bạn có thể dùng."
      },
      {
        "id": "p2-8-b",
        "speaker": "Speaker 2",
        "text": "(B) From a supplier in California.",
        "vietnamese": "(B) Từ một nhà cung cấp ở California."
      },
      {
        "id": "p2-8-c",
        "speaker": "Speaker 2",
        "text": "(C) That umbrella is a nice color.",
        "vietnamese": "(C) Chiếc ô đó có màu rất đẹp."
      }
    ],
    "questions": [
      {
        "num": 8,
        "question": "Where did these oranges come from?",
        "vietnameseQuestion": "Những quả cam này có nguồn gốc từ đâu vậy?",
        "options": [
          {
            "key": "A",
            "text": "Here's a basket you can use.",
            "vietnamese": "Đây là chiếc giỏ bạn có thể dùng."
          },
          {
            "key": "B",
            "text": "From a supplier in California.",
            "vietnamese": "Từ một nhà cung cấp ở California."
          },
          {
            "key": "C",
            "text": "That umbrella is a nice color.",
            "vietnamese": "Chiếc ô đó có màu rất đẹp."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Câu hỏi 'Where... come from?' hỏi nguồn gốc xuất xứ của hàng hóa. Phương án (B) 'From a supplier in California' đưa ra câu trả lời trực tiếp."
      }
    ],
    "vocabulary": [
      {
        "word": "supplier",
        "meaning": "nhà cung cấp, nhà phân phối",
        "partOfSpeech": "n"
      },
      {
        "word": "orange",
        "meaning": "quả cam",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-9",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 9",
    "title": "Part 2 - Câu 9: Đặt bàn ăn tối thứ Sáu hay thứ Bảy",
    "audioSrc": "/audio/test4_2024.mp3",
    "startTime": 333.88,
    "endTime": 353.74,
    "transcript": [
      {
        "id": "p2-9-q",
        "speaker": "Speaker 1",
        "text": "Should I make the dinner reservation for Friday or Saturday?",
        "vietnamese": "Tôi nên đặt bàn ăn tối cho thứ Sáu hay thứ Bảy?"
      },
      {
        "id": "p2-9-a",
        "speaker": "Speaker 2",
        "text": "(A) The beachside bistro.",
        "vietnamese": "(A) Quán ăn nhỏ cạnh bờ biển."
      },
      {
        "id": "p2-9-b",
        "speaker": "Speaker 2",
        "text": "(B) Saturday is better.",
        "vietnamese": "(B) Thứ Bảy thì tốt hơn."
      },
      {
        "id": "p2-9-c",
        "speaker": "Speaker 2",
        "text": "(C) A large plate of pasta.",
        "vietnamese": "(C) Một đĩa mì Ý lớn."
      }
    ],
    "questions": [
      {
        "num": 9,
        "question": "Should I make the dinner reservation for Friday or Saturday?",
        "vietnameseQuestion": "Tôi nên đặt bàn ăn tối cho thứ Sáu hay thứ Bảy?",
        "options": [
          {
            "key": "A",
            "text": "The beachside bistro.",
            "vietnamese": "Quán ăn nhỏ cạnh bờ biển."
          },
          {
            "key": "B",
            "text": "Saturday is better.",
            "vietnamese": "Thứ Bảy thì tốt hơn."
          },
          {
            "key": "C",
            "text": "A large plate of pasta.",
            "vietnamese": "Một đĩa mì Ý lớn."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Câu hỏi lựa chọn giữa thứ Sáu hoặc thứ Bảy ('Friday or Saturday'). Phương án (B) 'Saturday is better' lựa chọn rõ ràng ngày thứ Bảy."
      }
    ],
    "vocabulary": [
      {
        "word": "dinner reservation",
        "meaning": "việc đặt bàn ăn tối trước",
        "partOfSpeech": "n phr"
      },
      {
        "word": "bistro",
        "meaning": "quán ăn nhỏ, nhà hàng phong cách ấm cúng",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-10",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 10",
    "title": "Part 2 - Câu 10: Bác sĩ có đến muộn hôm nay không",
    "audioSrc": "/audio/test4_2024.mp3",
    "startTime": 353.74,
    "endTime": 374.32,
    "transcript": [
      {
        "id": "p2-10-q",
        "speaker": "Speaker 1",
        "text": "Will Dr. Ivanova be late today?",
        "vietnamese": "Hôm nay bác sĩ Ivanova có đến muộn không?"
      },
      {
        "id": "p2-10-a",
        "speaker": "Speaker 2",
        "text": "(A) No. You shouldn't have to wait long.",
        "vietnamese": "(A) Không. Bạn sẽ không phải chờ đợi lâu đâu."
      },
      {
        "id": "p2-10-b",
        "speaker": "Speaker 2",
        "text": "(B) It's just under the desk.",
        "vietnamese": "(B) Nó ở ngay dưới gầm bàn."
      },
      {
        "id": "p2-10-c",
        "speaker": "Speaker 2",
        "text": "(C) Sure. I can do that for you.",
        "vietnamese": "(C) Chắc chắn rồi. Tôi có thể làm điều đó giúp bạn."
      }
    ],
    "questions": [
      {
        "num": 10,
        "question": "Will Dr. Ivanova be late today?",
        "vietnameseQuestion": "Hôm nay bác sĩ Ivanova có đến muộn không?",
        "options": [
          {
            "key": "A",
            "text": "No. You shouldn't have to wait long.",
            "vietnamese": "Không. Bạn sẽ không phải chờ đợi lâu đâu."
          },
          {
            "key": "B",
            "text": "It's just under the desk.",
            "vietnamese": "Nó ở ngay dưới gầm bàn."
          },
          {
            "key": "C",
            "text": "Sure. I can do that for you.",
            "vietnamese": "Chắc chắn rồi. Tôi có thể làm điều đó giúp bạn."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Câu hỏi hỏi xem bác sĩ có đến muộn không. Phương án (A) trả lời phủ định 'No' và cho biết bệnh nhân sẽ được khám sớm không phải đợi lâu."
      }
    ],
    "vocabulary": [
      {
        "word": "late",
        "meaning": "muộn, trễ giờ",
        "partOfSpeech": "adj"
      },
      {
        "word": "wait",
        "meaning": "chờ đợi",
        "partOfSpeech": "v"
      }
    ]
  },
  {
    "id": "part2-11",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 11",
    "title": "Part 2 - Câu 11: Phòng thay đồ tại phòng tập thể thao",
    "audioSrc": "/audio/test4_2024.mp3",
    "startTime": 374.32,
    "endTime": 394.09,
    "transcript": [
      {
        "id": "p2-11-q",
        "speaker": "Speaker 1",
        "text": "Aren't there locker rooms at this gym?",
        "vietnamese": "Phòng tập thể thao này không có phòng thay đồ có tủ khóa sao?"
      },
      {
        "id": "p2-11-a",
        "speaker": "Speaker 2",
        "text": "(A) These socks are quite comfortable.",
        "vietnamese": "(A) Đôi tất này khá là êm ái."
      },
      {
        "id": "p2-11-b",
        "speaker": "Speaker 2",
        "text": "(B) She teaches an exercise class.",
        "vietnamese": "(B) Cô ấy dạy một lớp thể dục."
      },
      {
        "id": "p2-11-c",
        "speaker": "Speaker 2",
        "text": "(C) Yes, they're on the lower floor.",
        "vietnamese": "(C) Có chứ, chúng ở tầng dưới."
      }
    ],
    "questions": [
      {
        "num": 11,
        "question": "Aren't there locker rooms at this gym?",
        "vietnameseQuestion": "Phòng tập thể thao này không có phòng thay đồ có tủ khóa sao?",
        "options": [
          {
            "key": "A",
            "text": "These socks are quite comfortable.",
            "vietnamese": "Đôi tất này khá là êm ái."
          },
          {
            "key": "B",
            "text": "She teaches an exercise class.",
            "vietnamese": "Cô ấy dạy một lớp thể dục."
          },
          {
            "key": "C",
            "text": "Yes, they're on the lower floor.",
            "vietnamese": "Có chứ, chúng ở tầng dưới."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Câu hỏi phủ định xác nhận cơ sở vật chất. Phương án (C) khẳng định có 'Yes' và chỉ dẫn cụ thể vị trí ở tầng dưới (on the lower floor)."
      }
    ],
    "vocabulary": [
      {
        "word": "locker room",
        "meaning": "phòng thay đồ có tủ khóa cá nhân",
        "partOfSpeech": "n phr"
      },
      {
        "word": "lower floor",
        "meaning": "tầng dưới",
        "partOfSpeech": "n phr"
      }
    ]
  },
  {
    "id": "part2-12",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 12",
    "title": "Part 2 - Câu 12: Người cần bản sao chứng chỉ đào tạo an toàn",
    "audioSrc": "/audio/test4_2024.mp3",
    "startTime": 394.09,
    "endTime": 414.73,
    "transcript": [
      {
        "id": "p2-12-q",
        "speaker": "Speaker 1",
        "text": "Who needs a copy of my safety training certificate?",
        "vietnamese": "Ai cần một bản sao chứng chỉ đào tạo an toàn của tôi vậy?"
      },
      {
        "id": "p2-12-a",
        "speaker": "Speaker 2",
        "text": "(A) Maxime does.",
        "vietnamese": "(A) Maxime cần đấy."
      },
      {
        "id": "p2-12-b",
        "speaker": "Speaker 2",
        "text": "(B) You can hang your vest on that hook.",
        "vietnamese": "(B) Bạn có thể treo áo bảo hộ lên chiếc móc đó."
      },
      {
        "id": "p2-12-c",
        "speaker": "Speaker 2",
        "text": "(C) No, I'm certain about that.",
        "vietnamese": "(C) Không, tôi chắc chắn về điều đó."
      }
    ],
    "questions": [
      {
        "num": 12,
        "question": "Who needs a copy of my safety training certificate?",
        "vietnameseQuestion": "Ai cần một bản sao chứng chỉ đào tạo an toàn của tôi vậy?",
        "options": [
          {
            "key": "A",
            "text": "Maxime does.",
            "vietnamese": "Maxime cần đấy."
          },
          {
            "key": "B",
            "text": "You can hang your vest on that hook.",
            "vietnamese": "Bạn có thể treo áo bảo hộ lên chiếc móc đó."
          },
          {
            "key": "C",
            "text": "No, I'm certain about that.",
            "vietnamese": "Không, tôi chắc chắn về điều đó."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Câu hỏi bắt đầu bằng 'Who...' hỏi về người. Phương án (A) 'Maxime does' trả lời trực tiếp danh tính người cần tài liệu."
      }
    ],
    "vocabulary": [
      {
        "word": "safety training",
        "meaning": "khóa đào tạo về an toàn lao động",
        "partOfSpeech": "n phr"
      },
      {
        "word": "certificate",
        "meaning": "chứng chỉ, giấy chứng nhận",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-13",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 13",
    "title": "Part 2 - Câu 13: Gọi điện thoại cho ông Ferroz",
    "audioSrc": "/audio/test4_2024.mp3",
    "startTime": 414.73,
    "endTime": 441.78,
    "transcript": [
      {
        "id": "p2-13-q",
        "speaker": "Speaker 1",
        "text": "Could you phone Mr. Ferroz and let him know we're in the hotel lobby?",
        "vietnamese": "Bạn có thể gọi điện cho ông Ferroz và thông báo rằng chúng ta đang ở sảnh khách sạn không?"
      },
      {
        "id": "p2-13-a",
        "speaker": "Speaker 2",
        "text": "(A) Thank you. It was just renovated.",
        "vietnamese": "(A) Cảm ơn bạn. Nó vừa mới được cải tạo."
      },
      {
        "id": "p2-13-b",
        "speaker": "Speaker 2",
        "text": "(B) A free continental breakfast.",
        "vietnamese": "(B) Bữa sáng kiểu lục địa miễn phí."
      },
      {
        "id": "p2-13-c",
        "speaker": "Speaker 2",
        "text": "(C) Yes, of course.",
        "vietnamese": "(C) Vâng, tất nhiên rồi."
      }
    ],
    "questions": [
      {
        "num": 13,
        "question": "Could you phone Mr. Ferroz and let him know we're in the hotel lobby?",
        "vietnameseQuestion": "Bạn có thể gọi điện cho ông Ferroz và thông báo rằng chúng ta đang ở sảnh khách sạn không?",
        "options": [
          {
            "key": "A",
            "text": "Thank you. It was just renovated.",
            "vietnamese": "Cảm ơn bạn. Nó vừa mới được cải tạo."
          },
          {
            "key": "B",
            "text": "A free continental breakfast.",
            "vietnamese": "Bữa sáng kiểu lục địa miễn phí."
          },
          {
            "key": "C",
            "text": "Yes, of course.",
            "vietnamese": "Vâng, tất nhiên rồi."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Lời nhờ vả lịch sự 'Could you phone...?'. Phương án (C) 'Yes, of course' đồng ý thực hiện yêu cầu giúp đối phương."
      }
    ],
    "vocabulary": [
      {
        "word": "phone",
        "meaning": "gọi điện thoại cho ai đó",
        "partOfSpeech": "v"
      },
      {
        "word": "hotel lobby",
        "meaning": "sảnh chính khách sạn",
        "partOfSpeech": "n phr"
      }
    ]
  },
  {
    "id": "part2-14",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 14",
    "title": "Part 2 - Câu 14: Địa điểm bán đồ trang sức thủ công",
    "audioSrc": "/audio/test4_2024.mp3",
    "startTime": 441.78,
    "endTime": 456.26,
    "transcript": [
      {
        "id": "p2-14-q",
        "speaker": "Speaker 1",
        "text": "Where does she sell her handmade jewelry?",
        "vietnamese": "Cô ấy bán những món đồ trang sức làm bằng tay ở đâu vậy?"
      },
      {
        "id": "p2-14-a",
        "speaker": "Speaker 2",
        "text": "(A) They'll give you a discount.",
        "vietnamese": "(A) Họ sẽ giảm giá cho bạn."
      },
      {
        "id": "p2-14-b",
        "speaker": "Speaker 2",
        "text": "(B) A pair of earrings.",
        "vietnamese": "(B) Một đôi hoa tai."
      },
      {
        "id": "p2-14-c",
        "speaker": "Speaker 2",
        "text": "(C) At a store in the city center.",
        "vietnamese": "(C) Tại một cửa hàng ở trung tâm thành phố."
      }
    ],
    "questions": [
      {
        "num": 14,
        "question": "Where does she sell her handmade jewelry?",
        "vietnameseQuestion": "Cô ấy bán những món đồ trang sức làm bằng tay ở đâu vậy?",
        "options": [
          {
            "key": "A",
            "text": "They'll give you a discount.",
            "vietnamese": "Họ sẽ giảm giá cho bạn."
          },
          {
            "key": "B",
            "text": "A pair of earrings.",
            "vietnamese": "Một đôi hoa tai."
          },
          {
            "key": "C",
            "text": "At a store in the city center.",
            "vietnamese": "Tại một cửa hàng ở trung tâm thành phố."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Câu hỏi 'Where...' hỏi địa điểm. Phương án (C) 'At a store in the city center' chỉ rõ nơi chốn bày bán đồ trang sức."
      }
    ],
    "vocabulary": [
      {
        "word": "handmade jewelry",
        "meaning": "đồ trang sức làm thủ công bằng tay",
        "partOfSpeech": "n phr"
      },
      {
        "word": "city center",
        "meaning": "khu trung tâm thành phố",
        "partOfSpeech": "n phr"
      }
    ]
  },
  {
    "id": "part2-15",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 15",
    "title": "Part 2 - Câu 15: Lớp học kinh doanh vào buổi chiều",
    "audioSrc": "/audio/test4_2024.mp3",
    "startTime": 456.26,
    "endTime": 477.06,
    "transcript": [
      {
        "id": "p2-15-q",
        "speaker": "Speaker 1",
        "text": "You're taking a business class in the afternoon, aren't you?",
        "vietnamese": "Bạn đang tham gia một lớp học kinh doanh vào buổi chiều đúng không?"
      },
      {
        "id": "p2-15-a",
        "speaker": "Speaker 2",
        "text": "(A) Actually, it's in the morning.",
        "vietnamese": "(A) Thực ra nó diễn ra vào buổi sáng."
      },
      {
        "id": "p2-15-b",
        "speaker": "Speaker 2",
        "text": "(B) That office is on the corner.",
        "vietnamese": "(B) Văn phòng đó nằm ở góc đường."
      },
      {
        "id": "p2-15-c",
        "speaker": "Speaker 2",
        "text": "(C) I have the train schedule here.",
        "vietnamese": "(C) Tôi có lịch tàu hỏa ở đây."
      }
    ],
    "questions": [
      {
        "num": 15,
        "question": "You're taking a business class in the afternoon, aren't you?",
        "vietnameseQuestion": "Bạn đang tham gia một lớp học kinh doanh vào buổi chiều đúng không?",
        "options": [
          {
            "key": "A",
            "text": "Actually, it's in the morning.",
            "vietnamese": "Thực ra nó diễn ra vào buổi sáng."
          },
          {
            "key": "B",
            "text": "That office is on the corner.",
            "vietnamese": "Văn phòng đó nằm ở góc đường."
          },
          {
            "key": "C",
            "text": "I have the train schedule here.",
            "vietnamese": "Tôi có lịch tàu hỏa ở đây."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Câu hỏi đuôi kiểm tra thông tin buổi chiều. Phương án (A) đính chính lại mốc thời gian thực tế là vào buổi sáng (Actually, it's in the morning)."
      }
    ],
    "vocabulary": [
      {
        "word": "business class",
        "meaning": "lớp học kinh doanh/kinh tế",
        "partOfSpeech": "n phr"
      },
      {
        "word": "actually",
        "meaning": "thực ra, trên thực tế",
        "partOfSpeech": "adv"
      }
    ]
  },
  {
    "id": "part2-16",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 16",
    "title": "Part 2 - Câu 16: Xem trước mẫu cắm hoa",
    "audioSrc": "/audio/test4_2024.mp3",
    "startTime": 477.06,
    "endTime": 498.86,
    "transcript": [
      {
        "id": "p2-16-q",
        "speaker": "Speaker 1",
        "text": "Could I see some sample floral arrangements before I order?",
        "vietnamese": "Tôi có thể xem một số mẫu cắm hoa trước khi đặt hàng không?"
      },
      {
        "id": "p2-16-a",
        "speaker": "Speaker 2",
        "text": "(A) It's for an award ceremony.",
        "vietnamese": "(A) Nó dành cho một lễ trao giải."
      },
      {
        "id": "p2-16-b",
        "speaker": "Speaker 2",
        "text": "(B) A charge for expedited delivery.",
        "vietnamese": "(B) Khoản phụ phí cho giao hàng hỏa tốc."
      },
      {
        "id": "p2-16-c",
        "speaker": "Speaker 2",
        "text": "(C) Certainly. I have some right here.",
        "vietnamese": "(C) Chắc chắn rồi. Tôi có sẵn một vài mẫu ngay tại đây."
      }
    ],
    "questions": [
      {
        "num": 16,
        "question": "Could I see some sample floral arrangements before I order?",
        "vietnameseQuestion": "Tôi có thể xem một số mẫu cắm hoa trước khi đặt hàng không?",
        "options": [
          {
            "key": "A",
            "text": "It's for an award ceremony.",
            "vietnamese": "Nó dành cho một lễ trao giải."
          },
          {
            "key": "B",
            "text": "A charge for expedited delivery.",
            "vietnamese": "Khoản phụ phí cho giao hàng hỏa tốc."
          },
          {
            "key": "C",
            "text": "Certainly. I have some right here.",
            "vietnamese": "Chắc chắn rồi. Tôi có sẵn một vài mẫu ngay tại đây."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Khách hàng ngỏ lời muốn xem mẫu sản phẩm. Phương án (C) 'Certainly. I have some right here' nhiệt tình đáp ứng ngay yêu cầu."
      }
    ],
    "vocabulary": [
      {
        "word": "floral arrangement",
        "meaning": "lẵng hoa, mẫu cắm hoa",
        "partOfSpeech": "n phr"
      },
      {
        "word": "certainly",
        "meaning": "chắc chắn rồi, dĩ nhiên",
        "partOfSpeech": "adv"
      }
    ]
  },
  {
    "id": "part2-17",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 17",
    "title": "Part 2 - Câu 17: Mua chiếc ghế sofa màu đen",
    "audioSrc": "/audio/test4_2024.mp3",
    "startTime": 498.86,
    "endTime": 518.63,
    "transcript": [
      {
        "id": "p2-17-q",
        "speaker": "Speaker 1",
        "text": "Don't you want to buy the black sofa?",
        "vietnamese": "Bạn không muốn mua chiếc ghế sofa màu đen sao?"
      },
      {
        "id": "p2-17-a",
        "speaker": "Speaker 2",
        "text": "(A) Some customer reviews.",
        "vietnamese": "(A) Một vài đánh giá của khách hàng."
      },
      {
        "id": "p2-17-b",
        "speaker": "Speaker 2",
        "text": "(B) We already have one.",
        "vietnamese": "(B) Chúng ta đã có sẵn một chiếc rồi."
      },
      {
        "id": "p2-17-c",
        "speaker": "Speaker 2",
        "text": "(C) I take my coffee with sugar.",
        "vietnamese": "(C) Tôi uống cà phê có đường."
      }
    ],
    "questions": [
      {
        "num": 17,
        "question": "Don't you want to buy the black sofa?",
        "vietnameseQuestion": "Bạn không muốn mua chiếc ghế sofa màu đen sao?",
        "options": [
          {
            "key": "A",
            "text": "Some customer reviews.",
            "vietnamese": "Một vài đánh giá của khách hàng."
          },
          {
            "key": "B",
            "text": "We already have one.",
            "vietnamese": "Chúng ta đã có sẵn một chiếc rồi."
          },
          {
            "key": "C",
            "text": "I take my coffee with sugar.",
            "vietnamese": "Tôi uống cà phê có đường."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Câu hỏi hỏi tại sao không mua ghế sofa đen. Phương án (B) 'We already have one' giải thích lý do không cần mua thêm vì nhà đã có một chiếc rồi."
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
    "id": "part2-18",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 18",
    "title": "Part 2 - Câu 18: Áo khoác kích cỡ lớn hơn",
    "audioSrc": "/audio/test4_2024.mp3",
    "startTime": 518.63,
    "endTime": 540.24,
    "transcript": [
      {
        "id": "p2-18-q",
        "speaker": "Speaker 1",
        "text": "Do you have this jacket in a larger size?",
        "vietnamese": "Bạn có chiếc áo khoác này ở kích cỡ lớn hơn không?"
      },
      {
        "id": "p2-18-a",
        "speaker": "Speaker 2",
        "text": "(A) Oh, I'm not a sales associate.",
        "vietnamese": "(A) Ồ, tôi không phải là nhân viên bán hàng."
      },
      {
        "id": "p2-18-b",
        "speaker": "Speaker 2",
        "text": "(B) I've read the information packet.",
        "vietnamese": "(B) Tôi đã đọc tập thông tin rồi."
      },
      {
        "id": "p2-18-c",
        "speaker": "Speaker 2",
        "text": "(C) A very large uniform.",
        "vietnamese": "(C) Một bộ đồng phục rất lớn."
      }
    ],
    "questions": [
      {
        "num": 18,
        "question": "Do you have this jacket in a larger size?",
        "vietnameseQuestion": "Bạn có chiếc áo khoác này ở kích cỡ lớn hơn không?",
        "options": [
          {
            "key": "A",
            "text": "Oh, I'm not a sales associate.",
            "vietnamese": "Ồ, tôi không phải là nhân viên bán hàng."
          },
          {
            "key": "B",
            "text": "I've read the information packet.",
            "vietnamese": "Tôi đã đọc tập thông tin rồi."
          },
          {
            "key": "C",
            "text": "A very large uniform.",
            "vietnamese": "Một bộ đồng phục rất lớn."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Người nói hỏi mua kích cỡ áo khoác, người nghe đính chính rằng mình là khách hàng chứ không phải nhân viên bán hàng (Oh, I'm not a sales associate)."
      }
    ],
    "vocabulary": [
      {
        "word": "sales associate",
        "meaning": "nhân viên bán hàng",
        "partOfSpeech": "n phr"
      },
      {
        "word": "larger size",
        "meaning": "kích cỡ to hơn",
        "partOfSpeech": "n phr"
      }
    ]
  },
  {
    "id": "part2-19",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 19",
    "title": "Part 2 - Câu 19: Nguồn biết tin tuyển dụng việc làm",
    "audioSrc": "/audio/test4_2024.mp3",
    "startTime": 540.24,
    "endTime": 562.04,
    "transcript": [
      {
        "id": "p2-19-q",
        "speaker": "Speaker 1",
        "text": "Where did you first learn about the job opening?",
        "vietnamese": "Lần đầu tiên bạn biết về vị trí tuyển dụng này ở đâu?"
      },
      {
        "id": "p2-19-a",
        "speaker": "Speaker 2",
        "text": "(A) Are there any outdoor tables available?",
        "vietnamese": "(A) Có chiếc bàn ngoài trời nào còn trống không?"
      },
      {
        "id": "p2-19-b",
        "speaker": "Speaker 2",
        "text": "(B) The door to the building is still open.",
        "vietnamese": "(B) Cửa tòa nhà vẫn đang mở."
      },
      {
        "id": "p2-19-c",
        "speaker": "Speaker 2",
        "text": "(C) I read an online newspaper every morning.",
        "vietnamese": "(C) Tôi đọc báo điện tử trực tuyến mỗi buổi sáng."
      }
    ],
    "questions": [
      {
        "num": 19,
        "question": "Where did you first learn about the job opening?",
        "vietnameseQuestion": "Lần đầu tiên bạn biết về vị trí tuyển dụng này ở đâu?",
        "options": [
          {
            "key": "A",
            "text": "Are there any outdoor tables available?",
            "vietnamese": "Có chiếc bàn ngoài trời nào còn trống không?"
          },
          {
            "key": "B",
            "text": "The door to the building is still open.",
            "vietnamese": "Cửa tòa nhà vẫn đang mở."
          },
          {
            "key": "C",
            "text": "I read an online newspaper every morning.",
            "vietnamese": "Tôi đọc báo điện tử trực tuyến mỗi buổi sáng."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Hỏi nguồn thông tin biết tin tuyển dụng. Phương án (C) 'I read an online newspaper every morning' ngụ ý người nói đọc thấy tin tuyển dụng trên báo mạng mỗi sáng."
      }
    ],
    "vocabulary": [
      {
        "word": "job opening",
        "meaning": "vị trí công việc đang tuyển dụng",
        "partOfSpeech": "n phr"
      },
      {
        "word": "online newspaper",
        "meaning": "báo điện tử trực tuyến",
        "partOfSpeech": "n phr"
      }
    ]
  },
  {
    "id": "part2-20",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 20",
    "title": "Part 2 - Câu 20: Mang theo đồ đạc tới cuộc họp",
    "audioSrc": "/audio/test4_2024.mp3",
    "startTime": 562.04,
    "endTime": 581.65,
    "transcript": [
      {
        "id": "p2-20-q",
        "speaker": "Speaker 1",
        "text": "Should I bring anything to the meeting?",
        "vietnamese": "Tôi có nên mang theo thứ gì đến cuộc họp không?"
      },
      {
        "id": "p2-20-a",
        "speaker": "Speaker 2",
        "text": "(A) Probably in the conference room.",
        "vietnamese": "(A) Có lẽ là trong phòng hội nghị."
      },
      {
        "id": "p2-20-b",
        "speaker": "Speaker 2",
        "text": "(B) They were hired by our manager.",
        "vietnamese": "(B) Họ đã được quản lý của chúng ta tuyển dụng."
      },
      {
        "id": "p2-20-c",
        "speaker": "Speaker 2",
        "text": "(C) Do we have enough handouts?",
        "vietnamese": "(C) Liệu chúng ta đã có đủ tài liệu phát tay chưa nhỉ?"
      }
    ],
    "questions": [
      {
        "num": 20,
        "question": "Should I bring anything to the meeting?",
        "vietnameseQuestion": "Tôi có nên mang theo thứ gì đến cuộc họp không?",
        "options": [
          {
            "key": "A",
            "text": "Probably in the conference room.",
            "vietnamese": "Có lẽ là trong phòng hội nghị."
          },
          {
            "key": "B",
            "text": "They were hired by our manager.",
            "vietnamese": "Họ đã được quản lý của chúng ta tuyển dụng."
          },
          {
            "key": "C",
            "text": "Do we have enough handouts?",
            "vietnamese": "Liệu chúng ta đã có đủ tài liệu phát tay chưa nhỉ?"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Hỏi có cần mang gì đến cuộc họp không. Phương án (C) hỏi ngược lại về tài liệu phát tay ('Do we have enough handouts?'), ngụ ý nếu thiếu thì nên mang thêm."
      }
    ],
    "vocabulary": [
      {
        "word": "handout",
        "meaning": "tài liệu in phát tay cho người dự họp",
        "partOfSpeech": "n"
      },
      {
        "word": "bring",
        "meaning": "mang theo, đem lại",
        "partOfSpeech": "v"
      }
    ]
  },
  {
    "id": "part2-21",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 21",
    "title": "Part 2 - Câu 21: Tổng chi phí lưu trú ở khách sạn",
    "audioSrc": "/audio/test4_2024.mp3",
    "startTime": 581.65,
    "endTime": 603.29,
    "transcript": [
      {
        "id": "p2-21-q",
        "speaker": "Speaker 1",
        "text": "What was the total charge for the hotel stay?",
        "vietnamese": "Tổng chi phí cho kỳ lưu trú ở khách sạn là bao nhiêu?"
      },
      {
        "id": "p2-21-a",
        "speaker": "Speaker 2",
        "text": "(A) I'd have to look at the receipt.",
        "vietnamese": "(A) Tôi sẽ phải xem lại hóa đơn đã."
      },
      {
        "id": "p2-21-b",
        "speaker": "Speaker 2",
        "text": "(B) The fitness center is across from the reception desk.",
        "vietnamese": "(B) Trung tâm thể dục nằm đối diện quầy lễ tân."
      },
      {
        "id": "p2-21-c",
        "speaker": "Speaker 2",
        "text": "(C) I'll be eating breakfast in my room.",
        "vietnamese": "(C) Tôi sẽ ăn sáng trong phòng mình."
      }
    ],
    "questions": [
      {
        "num": 21,
        "question": "What was the total charge for the hotel stay?",
        "vietnameseQuestion": "Tổng chi phí cho kỳ lưu trú ở khách sạn là bao nhiêu?",
        "options": [
          {
            "key": "A",
            "text": "I'd have to look at the receipt.",
            "vietnamese": "Tôi sẽ phải xem lại hóa đơn đã."
          },
          {
            "key": "B",
            "text": "The fitness center is across from the reception desk.",
            "vietnamese": "Trung tâm thể dục nằm đối diện quầy lễ tân."
          },
          {
            "key": "C",
            "text": "I'll be eating breakfast in my room.",
            "vietnamese": "Tôi sẽ ăn sáng trong phòng mình."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Hỏi tổng chi phí thanh toán khách sạn. Phương án (A) 'I'd have to look at the receipt' cho biết cần kiểm tra hóa đơn mới biết số tiền chính xác."
      }
    ],
    "vocabulary": [
      {
        "word": "total charge",
        "meaning": "tổng chi phí, tổng tiền phải trả",
        "partOfSpeech": "n phr"
      },
      {
        "word": "receipt",
        "meaning": "hóa đơn thu tiền, biên nhận",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-22",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 22",
    "title": "Part 2 - Câu 22: Lý do chọn nghề thiết kế game",
    "audioSrc": "/audio/test4_2024.mp3",
    "startTime": 603.29,
    "endTime": 628.31,
    "transcript": [
      {
        "id": "p2-22-q",
        "speaker": "Speaker 1",
        "text": "Why did you pursue a career in video game design?",
        "vietnamese": "Tại sao bạn lại theo đuổi sự nghiệp thiết kế trò chơi điện tử?"
      },
      {
        "id": "p2-22-a",
        "speaker": "Speaker 2",
        "text": "(A) Because I have a talent for it.",
        "vietnamese": "(A) Bởi vì tôi có năng khiếu về lĩnh vực này."
      },
      {
        "id": "p2-22-b",
        "speaker": "Speaker 2",
        "text": "(B) This is my new laptop.",
        "vietnamese": "(B) Đây là chiếc máy tính xách tay mới của tôi."
      },
      {
        "id": "p2-22-c",
        "speaker": "Speaker 2",
        "text": "(C) It's on the other shelf.",
        "vietnamese": "(C) Nó nằm trên chiếc kệ bên kia."
      }
    ],
    "questions": [
      {
        "num": 22,
        "question": "Why did you pursue a career in video game design?",
        "vietnameseQuestion": "Tại sao bạn lại theo đuổi sự nghiệp thiết kế trò chơi điện tử?",
        "options": [
          {
            "key": "A",
            "text": "Because I have a talent for it.",
            "vietnamese": "Bởi vì tôi có năng khiếu về lĩnh vực này."
          },
          {
            "key": "B",
            "text": "This is my new laptop.",
            "vietnamese": "Đây là chiếc máy tính xách tay mới của tôi."
          },
          {
            "key": "C",
            "text": "It's on the other shelf.",
            "vietnamese": "Nó nằm trên chiếc kệ bên kia."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Câu hỏi 'Why did you pursue...' hỏi lý do chọn ngành nghề. Phương án (A) 'Because I have a talent for it' giải thích vì có tài năng và đam mê."
      }
    ],
    "vocabulary": [
      {
        "word": "pursue a career",
        "meaning": "theo đuổi một nghề nghiệp, sự nghiệp",
        "partOfSpeech": "phr"
      },
      {
        "word": "talent",
        "meaning": "năng khiếu, tài năng",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-23",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 23",
    "title": "Part 2 - Câu 23: Tham dự hội chợ việc làm",
    "audioSrc": "/audio/test4_2024.mp3",
    "startTime": 628.31,
    "endTime": 644.63,
    "transcript": [
      {
        "id": "p2-23-q",
        "speaker": "Speaker 1",
        "text": "I'd like to attend the job fair next month.",
        "vietnamese": "Tôi muốn tham dự hội chợ việc làm vào tháng tới."
      },
      {
        "id": "p2-23-a",
        "speaker": "Speaker 2",
        "text": "(A) The speech was inspiring.",
        "vietnamese": "(A) Bài phát biểu rất truyền cảm hứng."
      },
      {
        "id": "p2-23-b",
        "speaker": "Speaker 2",
        "text": "(B) Tunji updated the memo.",
        "vietnamese": "(B) Tunji đã cập nhật bản thông báo nội bộ."
      },
      {
        "id": "p2-23-c",
        "speaker": "Speaker 2",
        "text": "(C) Registration closed yesterday.",
        "vietnamese": "(C) Việc đăng ký đã đóng lại từ hôm qua rồi."
      }
    ],
    "questions": [
      {
        "num": 23,
        "question": "I'd like to attend the job fair next month.",
        "vietnameseQuestion": "Tôi muốn tham dự hội chợ việc làm vào tháng tới.",
        "options": [
          {
            "key": "A",
            "text": "The speech was inspiring.",
            "vietnamese": "Bài phát biểu rất truyền cảm hứng."
          },
          {
            "key": "B",
            "text": "Tunji updated the memo.",
            "vietnamese": "Tunji đã cập nhật bản thông báo nội bộ."
          },
          {
            "key": "C",
            "text": "Registration closed yesterday.",
            "vietnamese": "Việc đăng ký đã đóng lại từ hôm qua rồi."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Người nói bày tỏ nguyện vọng tham gia hội chợ việc làm. Phương án (C) đưa ra thông tin thực tế rằng hạn chót đăng ký đã trôi qua từ hôm qua."
      }
    ],
    "vocabulary": [
      {
        "word": "job fair",
        "meaning": "hội chợ việc làm, ngày hội tuyển dụng",
        "partOfSpeech": "n phr"
      },
      {
        "word": "registration",
        "meaning": "việc đăng ký",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-24",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 24",
    "title": "Part 2 - Câu 24: Kết quả gọi phỏng vấn vòng hai",
    "audioSrc": "/audio/test4_2024.mp3",
    "startTime": 644.63,
    "endTime": 664.5,
    "transcript": [
      {
        "id": "p2-24-q",
        "speaker": "Speaker 1",
        "text": "Hasn't anyone called you back for the second interview yet?",
        "vietnamese": "Vẫn chưa có ai gọi lại mời bạn phỏng vấn vòng hai à?"
      },
      {
        "id": "p2-24-a",
        "speaker": "Speaker 2",
        "text": "(A) A new phone number.",
        "vietnamese": "(A) Một số điện thoại mới."
      },
      {
        "id": "p2-24-b",
        "speaker": "Speaker 2",
        "text": "(B) Yes, any available position.",
        "vietnamese": "(B) Vâng, bất kỳ vị trí nào còn trống."
      },
      {
        "id": "p2-24-c",
        "speaker": "Speaker 2",
        "text": "(C) I'm still waiting.",
        "vietnamese": "(C) Tôi vẫn đang đợi đây."
      }
    ],
    "questions": [
      {
        "num": 24,
        "question": "Hasn't anyone called you back for the second interview yet?",
        "vietnameseQuestion": "Vẫn chưa có ai gọi lại mời bạn phỏng vấn vòng hai à?",
        "options": [
          {
            "key": "A",
            "text": "A new phone number.",
            "vietnamese": "Một số điện thoại mới."
          },
          {
            "key": "B",
            "text": "Yes, any available position.",
            "vietnamese": "Vâng, bất kỳ vị trí nào còn trống."
          },
          {
            "key": "C",
            "text": "I'm still waiting.",
            "vietnamese": "Tôi vẫn đang đợi đây."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Câu hỏi phủ định 'Hasn't anyone called you back...?'. Phương án (C) 'I'm still waiting' trả lời tự nhiên rằng mình vẫn đang ngóng chờ phản hồi."
      }
    ],
    "vocabulary": [
      {
        "word": "second interview",
        "meaning": "vòng phỏng vấn thứ hai",
        "partOfSpeech": "n phr"
      },
      {
        "word": "call back",
        "meaning": "gọi lại điện thoại",
        "partOfSpeech": "phr v"
      }
    ]
  },
  {
    "id": "part2-25",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 25",
    "title": "Part 2 - Câu 25: Số lượng vé cho buổi hòa nhạc tối nay",
    "audioSrc": "/audio/test4_2024.mp3",
    "startTime": 664.5,
    "endTime": 685.3,
    "transcript": [
      {
        "id": "p2-25-q",
        "speaker": "Speaker 1",
        "text": "How many tickets do we need for tonight's concert?",
        "vietnamese": "Chúng ta cần bao nhiêu vé cho buổi hòa nhạc tối nay?"
      },
      {
        "id": "p2-25-a",
        "speaker": "Speaker 2",
        "text": "(A) The theater is on Johnson Avenue.",
        "vietnamese": "(A) Nhà hát nằm trên Đại lộ Johnson."
      },
      {
        "id": "p2-25-b",
        "speaker": "Speaker 2",
        "text": "(B) At 7:30 sharp.",
        "vietnamese": "(B) Đúng 7 giờ 30."
      },
      {
        "id": "p2-25-c",
        "speaker": "Speaker 2",
        "text": "(C) I'll buy mine at the door.",
        "vietnamese": "(C) Tôi sẽ tự mua vé của mình tại cửa vào."
      }
    ],
    "questions": [
      {
        "num": 25,
        "question": "How many tickets do we need for tonight's concert?",
        "vietnameseQuestion": "Chúng ta cần bao nhiêu vé cho buổi hòa nhạc tối nay?",
        "options": [
          {
            "key": "A",
            "text": "The theater is on Johnson Avenue.",
            "vietnamese": "Nhà hát nằm trên Đại lộ Johnson."
          },
          {
            "key": "B",
            "text": "At 7:30 sharp.",
            "vietnamese": "Đúng 7 giờ 30."
          },
          {
            "key": "C",
            "text": "I'll buy mine at the door.",
            "vietnamese": "Tôi sẽ tự mua vé của mình tại cửa vào."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Hỏi cần chuẩn bị bao nhiêu vé. Phương án (C) cho biết người nói sẽ tự túc mua vé khi đến cửa nhà hát, không cần gộp chung."
      }
    ],
    "vocabulary": [
      {
        "word": "concert",
        "meaning": "buổi hòa nhạc",
        "partOfSpeech": "n"
      },
      {
        "word": "at the door",
        "meaning": "tại cửa bán vé vào",
        "partOfSpeech": "prep phr"
      }
    ]
  },
  {
    "id": "part2-26",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 26",
    "title": "Part 2 - Câu 26: Thời gian quyết định tuyển dụng",
    "audioSrc": "/audio/test4_2024.mp3",
    "startTime": 685.3,
    "endTime": 706.0,
    "transcript": [
      {
        "id": "p2-26-q",
        "speaker": "Speaker 1",
        "text": "When are they going to decide who to hire?",
        "vietnamese": "Khi nào thì họ mới quyết định tuyển ai?"
      },
      {
        "id": "p2-26-a",
        "speaker": "Speaker 2",
        "text": "(A) A much higher salary.",
        "vietnamese": "(A) Một mức lương cao hơn rất nhiều."
      },
      {
        "id": "p2-26-b",
        "speaker": "Speaker 2",
        "text": "(B) A lot of good resumes have come in.",
        "vietnamese": "(B) Rất nhiều hồ sơ ứng viên tốt đã được gửi đến."
      },
      {
        "id": "p2-26-c",
        "speaker": "Speaker 2",
        "text": "(C) In the building across the street.",
        "vietnamese": "(C) Trong tòa nhà đối diện bên kia đường."
      }
    ],
    "questions": [
      {
        "num": 26,
        "question": "When are they going to decide who to hire?",
        "vietnameseQuestion": "Khi nào thì họ mới quyết định tuyển ai?",
        "options": [
          {
            "key": "A",
            "text": "A much higher salary.",
            "vietnamese": "Một mức lương cao hơn rất nhiều."
          },
          {
            "key": "B",
            "text": "A lot of good resumes have come in.",
            "vietnamese": "Rất nhiều hồ sơ ứng viên tốt đã được gửi đến."
          },
          {
            "key": "C",
            "text": "In the building across the street.",
            "vietnamese": "Trong tòa nhà đối diện bên kia đường."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Hỏi khi nào có quyết định tuyển dụng. Phương án (B) ngụ ý rằng việc quyết định đang mất thời gian vì có rất nhiều hồ sơ ứng viên tốt cần cân nhắc."
      }
    ],
    "vocabulary": [
      {
        "word": "hire",
        "meaning": "tuyển dụng, thuê nhân viên",
        "partOfSpeech": "v"
      },
      {
        "word": "resume",
        "meaning": "sơ yếu lý lịch, hồ sơ ứng tuyển",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-27",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 27",
    "title": "Part 2 - Câu 27: Xem qua hợp đồng sáng nay",
    "audioSrc": "/audio/test4_2024.mp3",
    "startTime": 706.0,
    "endTime": 731.02,
    "transcript": [
      {
        "id": "p2-27-q",
        "speaker": "Speaker 1",
        "text": "I had a chance to look over the contract this morning.",
        "vietnamese": "Sáng nay tôi đã có cơ hội xem qua bản hợp đồng rồi."
      },
      {
        "id": "p2-27-a",
        "speaker": "Speaker 2",
        "text": "(A) Their contact information.",
        "vietnamese": "(A) Thông tin liên lạc của họ."
      },
      {
        "id": "p2-27-b",
        "speaker": "Speaker 2",
        "text": "(B) Early next week.",
        "vietnamese": "(B) Đầu tuần tới."
      },
      {
        "id": "p2-27-c",
        "speaker": "Speaker 2",
        "text": "(C) What did you think of it?",
        "vietnamese": "(C) Bạn nghĩ thế nào về bản hợp đồng đó?"
      }
    ],
    "questions": [
      {
        "num": 27,
        "question": "I had a chance to look over the contract this morning.",
        "vietnameseQuestion": "Sáng nay tôi đã có cơ hội xem qua bản hợp đồng rồi.",
        "options": [
          {
            "key": "A",
            "text": "Their contact information.",
            "vietnamese": "Thông tin liên lạc của họ."
          },
          {
            "key": "B",
            "text": "Early next week.",
            "vietnamese": "Đầu tuần tới."
          },
          {
            "key": "C",
            "text": "What did you think of it?",
            "vietnamese": "Bạn nghĩ thế nào về bản hợp đồng đó?"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Khi đối phương thông báo đã xem xong hợp đồng, người nghe hỏi thăm quan điểm/nhận xét của đối phương: 'What did you think of it?'."
      }
    ],
    "vocabulary": [
      {
        "word": "look over",
        "meaning": "xem lướt qua, kiểm tra qua",
        "partOfSpeech": "phr v"
      },
      {
        "word": "contract",
        "meaning": "hợp đồng kinh tế",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-28",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 28",
    "title": "Part 2 - Câu 28: Tiến độ cập nhật cơ sở dữ liệu",
    "audioSrc": "/audio/test4_2024.mp3",
    "startTime": 731.02,
    "endTime": 747.25,
    "transcript": [
      {
        "id": "p2-28-q",
        "speaker": "Speaker 1",
        "text": "How are the database updates coming along?",
        "vietnamese": "Tiến độ cập nhật cơ sở dữ liệu đang diễn ra thế nào rồi?"
      },
      {
        "id": "p2-28-a",
        "speaker": "Speaker 2",
        "text": "(A) I've been really busy with the Williams account.",
        "vietnamese": "(A) Tôi đã rất bận rộn với tài khoản của khách hàng Williams."
      },
      {
        "id": "p2-28-b",
        "speaker": "Speaker 2",
        "text": "(B) Some customer addresses.",
        "vietnamese": "(B) Một số địa chỉ của khách hàng."
      },
      {
        "id": "p2-28-c",
        "speaker": "Speaker 2",
        "text": "(C) She arrives on Wednesday.",
        "vietnamese": "(C) Cô ấy sẽ đến vào thứ Tư."
      }
    ],
    "questions": [
      {
        "num": 28,
        "question": "How are the database updates coming along?",
        "vietnameseQuestion": "Tiến độ cập nhật cơ sở dữ liệu đang diễn ra thế nào rồi?",
        "options": [
          {
            "key": "A",
            "text": "I've been really busy with the Williams account.",
            "vietnamese": "Tôi đã rất bận rộn với tài khoản của khách hàng Williams."
          },
          {
            "key": "B",
            "text": "Some customer addresses.",
            "vietnamese": "Một số địa chỉ của khách hàng."
          },
          {
            "key": "C",
            "text": "She arrives on Wednesday.",
            "vietnamese": "Cô ấy sẽ đến vào thứ Tư."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Hỏi tiến độ cập nhật cơ sở dữ liệu. Phương án (A) giải thích gián tiếp rằng công việc chưa xong vì người nói quá bận rộn với tài khoản khách hàng Williams."
      }
    ],
    "vocabulary": [
      {
        "word": "database",
        "meaning": "cơ sở dữ liệu máy tính",
        "partOfSpeech": "n"
      },
      {
        "word": "come along",
        "meaning": "tiến triển, diễn ra",
        "partOfSpeech": "phr v"
      }
    ]
  },
  {
    "id": "part2-29",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 29",
    "title": "Part 2 - Câu 29: Mang các thùng hàng vào kho",
    "audioSrc": "/audio/test4_2024.mp3",
    "startTime": 747.25,
    "endTime": 767.82,
    "transcript": [
      {
        "id": "p2-29-q",
        "speaker": "Speaker 1",
        "text": "When can I bring these boxes into the warehouse?",
        "vietnamese": "Khi nào tôi có thể chuyển những chiếc thùng này vào trong kho?"
      },
      {
        "id": "p2-29-a",
        "speaker": "Speaker 2",
        "text": "(A) Ten in a package.",
        "vietnamese": "(A) Mười chiếc trong một kiện hàng."
      },
      {
        "id": "p2-29-b",
        "speaker": "Speaker 2",
        "text": "(B) Thanks. I just bought it.",
        "vietnamese": "(B) Cảm ơn bạn. Tôi vừa mới mua nó."
      },
      {
        "id": "p2-29-c",
        "speaker": "Speaker 2",
        "text": "(C) We'll need to clear some space.",
        "vietnamese": "(C) Chúng ta sẽ cần dọn dẹp thêm chỗ trống trước đã."
      }
    ],
    "questions": [
      {
        "num": 29,
        "question": "When can I bring these boxes into the warehouse?",
        "vietnameseQuestion": "Khi nào tôi có thể chuyển những chiếc thùng này vào trong kho?",
        "options": [
          {
            "key": "A",
            "text": "Ten in a package.",
            "vietnamese": "Mười chiếc trong một kiện hàng."
          },
          {
            "key": "B",
            "text": "Thanks. I just bought it.",
            "vietnamese": "Cảm ơn bạn. Tôi vừa mới mua nó."
          },
          {
            "key": "C",
            "text": "We'll need to clear some space.",
            "vietnamese": "Chúng ta sẽ cần dọn dẹp thêm chỗ trống trước đã."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Hỏi thời điểm đưa các thùng hàng vào kho. Phương án (C) trả lời trước hết cần dọn dẹp kho để có chỗ chứa thì mới chuyển hàng vào được."
      }
    ],
    "vocabulary": [
      {
        "word": "warehouse",
        "meaning": "kho hàng, nhà kho",
        "partOfSpeech": "n"
      },
      {
        "word": "clear some space",
        "meaning": "dọn dẹp tạo khoảng trống",
        "partOfSpeech": "phr"
      }
    ]
  },
  {
    "id": "part2-30",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 30",
    "title": "Part 2 - Câu 30: Chợ trên phố số 5 đóng cửa nghỉ",
    "audioSrc": "/audio/test4_2024.mp3",
    "startTime": 767.82,
    "endTime": 787.34,
    "transcript": [
      {
        "id": "p2-30-q",
        "speaker": "Speaker 1",
        "text": "The market on Fifth Street is closed for a week.",
        "vietnamese": "Khu chợ trên Phố số 5 sẽ đóng cửa trong một tuần."
      },
      {
        "id": "p2-30-a",
        "speaker": "Speaker 2",
        "text": "(A) Some new clothes.",
        "vietnamese": "(A) Một số quần áo mới."
      },
      {
        "id": "p2-30-b",
        "speaker": "Speaker 2",
        "text": "(B) Is there another one nearby?",
        "vietnamese": "(B) Có khu chợ nào khác ở gần đây không?"
      },
      {
        "id": "p2-30-c",
        "speaker": "Speaker 2",
        "text": "(C) The price has been marked down.",
        "vietnamese": "(C) Giá đã được hạ xuống."
      }
    ],
    "questions": [
      {
        "num": 30,
        "question": "The market on Fifth Street is closed for a week.",
        "vietnameseQuestion": "Khu chợ trên Phố số 5 sẽ đóng cửa trong một tuần.",
        "options": [
          {
            "key": "A",
            "text": "Some new clothes.",
            "vietnamese": "Một số quần áo mới."
          },
          {
            "key": "B",
            "text": "Is there another one nearby?",
            "vietnamese": "Có khu chợ nào khác ở gần đây không?"
          },
          {
            "key": "C",
            "text": "The price has been marked down.",
            "vietnamese": "Giá đã được hạ xuống."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Nghe tin khu chợ bị đóng cửa, người nghe phản hồi tự nhiên bằng câu hỏi tìm chợ khác thay thế: 'Is there another one nearby?'."
      }
    ],
    "vocabulary": [
      {
        "word": "market",
        "meaning": "khu chợ",
        "partOfSpeech": "n"
      },
      {
        "word": "nearby",
        "meaning": "ở gần đây",
        "partOfSpeech": "adv/adj"
      }
    ]
  },
  {
    "id": "part2-31",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 31",
    "title": "Part 2 - Câu 31: Chi phí đào tạo nâng cao chuyên môn",
    "audioSrc": "/audio/test4_2024.mp3",
    "startTime": 787.34,
    "endTime": 817.42,
    "transcript": [
      {
        "id": "p2-31-q",
        "speaker": "Speaker 1",
        "text": "Does the company pay for professional development courses?",
        "vietnamese": "Công ty có chi trả cho các khóa học nâng cao chuyên môn không?"
      },
      {
        "id": "p2-31-a",
        "speaker": "Speaker 2",
        "text": "(A) Insook helped develop a new product.",
        "vietnamese": "(A) Insook đã giúp phát triển một sản phẩm mới."
      },
      {
        "id": "p2-31-b",
        "speaker": "Speaker 2",
        "text": "(B) We do have a significant budget surplus.",
        "vietnamese": "(B) Chúng ta đang có một khoản thặng dư ngân sách đáng kể đấy."
      },
      {
        "id": "p2-31-c",
        "speaker": "Speaker 2",
        "text": "(C) He's always so professional.",
        "vietnamese": "(C) Anh ấy lúc nào cũng rất chuyên nghiệp."
      }
    ],
    "questions": [
      {
        "num": 31,
        "question": "Does the company pay for professional development courses?",
        "vietnameseQuestion": "Công ty có chi trả cho các khóa học nâng cao chuyên môn không?",
        "options": [
          {
            "key": "A",
            "text": "Insook helped develop a new product.",
            "vietnamese": "Insook đã giúp phát triển một sản phẩm mới."
          },
          {
            "key": "B",
            "text": "We do have a significant budget surplus.",
            "vietnamese": "Chúng ta đang có một khoản thặng dư ngân sách đáng kể đấy."
          },
          {
            "key": "C",
            "text": "He's always so professional.",
            "vietnamese": "Anh ấy lúc nào cũng rất chuyên nghiệp."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Hỏi công ty có trả tiền học chuyên môn không. Phương án (B) ngụ ý khả năng cao là có vì ngân sách công ty đang thặng dư dồi dào ('We do have a significant budget surplus')."
      }
    ],
    "vocabulary": [
      {
        "word": "professional development",
        "meaning": "phát triển chuyên môn, nghiệp vụ",
        "partOfSpeech": "n phr"
      },
      {
        "word": "budget surplus",
        "meaning": "thặng dư ngân sách (thừa tiền)",
        "partOfSpeech": "n phr"
      }
    ]
  },
  {
    "id": "part3-32-34",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 32 - 34",
    "title": "Part 3 - Câu 32 - 34: Chuyến phà bị hoãn do thời tiết xấu",
    "audioSrc": "/audio/test4_2024.mp3",
    "startTime": 844.42,
    "endTime": 920.06,
    "transcript": [
      {
        "id": "p3-32-l1",
        "speaker": "Woman",
        "text": "Excuse me, but wasn't the ferry to Osaka supposed to leave at 10 o'clock?",
        "vietnamese": "Xin lỗi, nhưng chẳng phải chuyến phà đến Osaka lẽ ra phải khởi hành lúc 10 giờ sao?"
      },
      {
        "id": "p3-32-l2",
        "speaker": "Man",
        "text": "Yes, but the port authority has suspended all marine traffic due to rough water.",
        "vietnamese": "Vâng, nhưng ban quản lý cảng đã đình chỉ toàn bộ hoạt động giao thông đường thủy do biển động sóng lớn."
      },
      {
        "id": "p3-32-l3",
        "speaker": "Woman",
        "text": "I see. Does that mean ferries are canceled all day?",
        "vietnamese": "Tôi hiểu rồi. Điều đó có nghĩa là các chuyến phà bị hủy cả ngày sao?"
      },
      {
        "id": "p3-32-l4",
        "speaker": "Man",
        "text": "This storm is expected to pass in about three hours, but operations should return to normal after that. Your ticket will be good until midnight.",
        "vietnamese": "Cơn bão này dự kiến sẽ tan trong khoảng ba giờ nữa, và hoạt động sẽ trở lại bình thường sau đó. Vé của quý khách sẽ có giá trị đến nửa đêm."
      },
      {
        "id": "p3-32-l5",
        "speaker": "Woman",
        "text": "Okay, then I guess I'll grab some lunch nearby.",
        "vietnamese": "Được rồi, vậy thì tôi đoán là tôi sẽ đi ăn trưa ở gần đây."
      },
      {
        "id": "p3-32-l6",
        "speaker": "Man",
        "text": "I highly recommend Mary's Cafe for sandwiches and soup.",
        "vietnamese": "Tôi rất khuyên quý khách nên ghé quán Cà phê Mary để thưởng thức bánh mì kẹp và súp."
      }
    ],
    "questions": [
      {
        "num": 32,
        "question": "Where most likely are the speakers?",
        "vietnameseQuestion": "Những người nói có khả năng cao nhất đang ở đâu?",
        "options": [
          {
            "key": "A",
            "text": "At a ferry terminal",
            "vietnamese": "Ở một bến phà"
          },
          {
            "key": "B",
            "text": "At a swimming area",
            "vietnamese": "Ở một khu vực bơi lội"
          },
          {
            "key": "C",
            "text": "At a shopping mall",
            "vietnamese": "Ở một trung tâm mua sắm"
          },
          {
            "key": "D",
            "text": "At a restaurant",
            "vietnamese": "Ở một nhà hàng"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Người phụ nữ hỏi về 'the ferry to Osaka' (chuyến phà tới Osaka) và người đàn ông nhắc đến 'port authority' (ban quản lý cảng) cùng 'marine traffic' (giao thông đường thủy), cho thấy họ đang ở bến phà."
      },
      {
        "num": 33,
        "question": "What problem does the man mention?",
        "vietnameseQuestion": "Người đàn ông đề cập đến vấn đề gì?",
        "options": [
          {
            "key": "A",
            "text": "Some repairs are needed.",
            "vietnamese": "Cần phải sửa chữa một số thứ."
          },
          {
            "key": "B",
            "text": "A business is understaffed.",
            "vietnamese": "Doanh nghiệp bị thiếu nhân sự."
          },
          {
            "key": "C",
            "text": "The weather is bad.",
            "vietnamese": "Thời tiết xấu."
          },
          {
            "key": "D",
            "text": "Some tickets are sold out.",
            "vietnamese": "Một số vé đã bán hết."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Người đàn ông giải thích: 'the port authority has suspended all marine traffic due to rough water' và 'This storm is expected to pass in about three hours' (thời tiết xấu, biển động và bão)."
      },
      {
        "num": 34,
        "question": "What will the woman do next?",
        "vietnameseQuestion": "Người phụ nữ sẽ làm gì tiếp theo?",
        "options": [
          {
            "key": "A",
            "text": "Read a book",
            "vietnamese": "Đọc một cuốn sách"
          },
          {
            "key": "B",
            "text": "Get a meal",
            "vietnamese": "Đi ăn một bữa ăn"
          },
          {
            "key": "C",
            "text": "Watch a movie",
            "vietnamese": "Xem một bộ phim"
          },
          {
            "key": "D",
            "text": "Go to a hotel",
            "vietnamese": "Đến một khách sạn"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Người phụ nữ nói: 'Okay, then I guess I'll grab some lunch nearby' (Tôi đoán tôi sẽ đi ăn trưa ở gần đây)."
      }
    ],
    "vocabulary": [
      {
        "word": "ferry",
        "meaning": "phà, tàu chở khách",
        "partOfSpeech": "n"
      },
      {
        "word": "port authority",
        "meaning": "ban quản lý cảng",
        "partOfSpeech": "n"
      },
      {
        "word": "suspend",
        "meaning": "đình chỉ, tạm hoãn",
        "partOfSpeech": "v"
      },
      {
        "word": "rough water",
        "meaning": "biển động, nước dữ",
        "partOfSpeech": "n"
      },
      {
        "word": "grab lunch",
        "meaning": "ăn trưa nhanh",
        "partOfSpeech": "v"
      }
    ]
  },
  {
    "id": "part3-35-37",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 35 - 37",
    "title": "Part 3 - Câu 35 - 37: Kiểm tra sách quá hạn tại thư viện",
    "audioSrc": "/audio/test4_2024.mp3",
    "startTime": 920.06,
    "endTime": 987.26,
    "transcript": [
      {
        "id": "p3-35-l1",
        "speaker": "Woman",
        "text": "Good morning. Are you looking for any particular library book, magazine, or newspaper?",
        "vietnamese": "Chào buổi sáng. Anh đang tìm cuốn sách thư viện, tạp chí hay tờ báo cụ thể nào không?"
      },
      {
        "id": "p3-35-l2",
        "speaker": "Man",
        "text": "Actually, no. I'm here because I got an email this morning telling me that I have an overdue book, but I returned it to the after-hours bin last night.",
        "vietnamese": "Thực ra là không. Tôi đến đây vì sáng nay nhận được email báo rằng tôi có một cuốn sách quá hạn, nhưng tối qua tôi đã trả nó vào thùng trả sách ngoài giờ rồi."
      },
      {
        "id": "p3-35-l3",
        "speaker": "Woman",
        "text": "Sometimes a book gets returned and put back on the shelves without being entered into the system first. I can take a look. Can you tell me the title?",
        "vietnamese": "Đôi khi sách được trả lại và xếp lên kệ mà chưa kịp nhập vào hệ thống trước. Tôi có thể kiểm tra giúp anh. Anh cho tôi biết tựa sách được không?"
      }
    ],
    "questions": [
      {
        "num": 35,
        "question": "Who most likely is the woman?",
        "vietnameseQuestion": "Người phụ nữ có khả năng cao nhất là ai?",
        "options": [
          {
            "key": "A",
            "text": "An author",
            "vietnamese": "Một tác giả"
          },
          {
            "key": "B",
            "text": "A librarian",
            "vietnamese": "Một thủ thư thư viện"
          },
          {
            "key": "C",
            "text": "A bookseller",
            "vietnamese": "Một người bán sách"
          },
          {
            "key": "D",
            "text": "An event organizer",
            "vietnamese": "Một người tổ chức sự kiện"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Người phụ nữ hỏi: 'Are you looking for any particular library book, magazine, or newspaper?' và đề cập việc xếp sách lên kệ thư viện, cho thấy cô là thủ thư (librarian)."
      },
      {
        "num": 36,
        "question": "What does the man say happened this morning?",
        "vietnameseQuestion": "Người đàn ông nói điều gì đã xảy ra sáng nay?",
        "options": [
          {
            "key": "A",
            "text": "He received an e-mail notification.",
            "vietnamese": "Anh ấy nhận được một thông báo qua email."
          },
          {
            "key": "B",
            "text": "He applied for a job online.",
            "vietnamese": "Anh ấy đã nộp đơn xin việc trực tuyến."
          },
          {
            "key": "C",
            "text": "He lost a receipt.",
            "vietnamese": "Anh ấy làm mất biên lai."
          },
          {
            "key": "D",
            "text": "He made a delivery.",
            "vietnamese": "Anh ấy đã đi giao hàng."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Người đàn ông nói: 'I got an email this morning telling me that I have an overdue book' (sáng nay tôi nhận được email thông báo sách quá hạn)."
      },
      {
        "num": 37,
        "question": "What does the woman offer to do?",
        "vietnameseQuestion": "Người phụ nữ đề nghị làm điều gì?",
        "options": [
          {
            "key": "A",
            "text": "Attend an event",
            "vietnamese": "Tham dự một sự kiện"
          },
          {
            "key": "B",
            "text": "Fill out an online form",
            "vietnamese": "Điền vào một mẫu đơn trực tuyến"
          },
          {
            "key": "C",
            "text": "Place an order",
            "vietnamese": "Đặt một đơn hàng"
          },
          {
            "key": "D",
            "text": "Search for an item",
            "vietnamese": "Tìm kiếm một món đồ/vật phẩm"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Người phụ nữ đề nghị tìm kiếm cuốn sách trên giá sách: 'I can take a look. Can you tell me the title?' (Tôi có thể kiểm tra tìm xem. Anh cho tôi biết tên sách được không?)."
      }
    ],
    "vocabulary": [
      {
        "word": "particular",
        "meaning": "cụ thể, đặc thù",
        "partOfSpeech": "adj"
      },
      {
        "word": "overdue",
        "meaning": "quá hạn",
        "partOfSpeech": "adj"
      },
      {
        "word": "after-hours bin",
        "meaning": "thùng trả sách ngoài giờ làm việc",
        "partOfSpeech": "n"
      },
      {
        "word": "enter into the system",
        "meaning": "nhập vào hệ thống dữ liệu",
        "partOfSpeech": "v"
      }
    ]
  },
  {
    "id": "part3-38-40",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 38 - 40",
    "title": "Part 3 - Câu 38 - 40: Báo giá dịch vụ sơn lại phòng ăn",
    "audioSrc": "/audio/test4_2024.mp3",
    "startTime": 987.26,
    "endTime": 1057.28,
    "transcript": [
      {
        "id": "p3-38-l1",
        "speaker": "Man",
        "text": "Hi, I'm Malik. I talked to you this morning on the phone about a price quote for some painting you want done.",
        "vietnamese": "Xin chào, tôi là Malik. Sáng nay tôi đã trao đổi qua điện thoại với chị về việc báo giá cho công việc sơn mà chị muốn thực hiện."
      },
      {
        "id": "p3-38-l2",
        "speaker": "Woman",
        "text": "Oh hi, come in. Yes. I want to change the color in the dining room to something lighter.",
        "vietnamese": "Ồ chào anh, mời vào. Đúng vậy. Tôi muốn đổi màu sơn trong phòng ăn sang màu gì đó sáng hơn."
      },
      {
        "id": "p3-38-l3",
        "speaker": "Man",
        "text": "Not a problem. But I do want to stress that the quote may be higher than you expected, because going from a darker color to a lighter one requires more than one coat of paint.",
        "vietnamese": "Không vấn đề gì. Nhưng tôi muốn nhấn mạnh rằng mức báo giá có thể cao hơn chị dự tính, bởi vì chuyển từ màu tối sang màu sáng hơn đòi hỏi phải sơn nhiều hơn một lớp."
      },
      {
        "id": "p3-38-l4",
        "speaker": "Woman",
        "text": "I understand. And will you move the table and chairs out of the room before you start?",
        "vietnamese": "Tôi hiểu rồi. Và các anh có chuyển bàn ghế ra khỏi phòng trước khi bắt đầu không?"
      },
      {
        "id": "p3-38-l5",
        "speaker": "Man",
        "text": "That shouldn't be necessary. We can cover them with a drop cloth.",
        "vietnamese": "Điều đó không cần thiết đâu. Chúng tôi có thể phủ vải bạt che lên chúng."
      }
    ],
    "questions": [
      {
        "num": 38,
        "question": "What type of business does the man most likely work for?",
        "vietnameseQuestion": "Người đàn ông có khả năng cao nhất làm việc cho loại hình doanh nghiệp nào?",
        "options": [
          {
            "key": "A",
            "text": "A moving company",
            "vietnamese": "Một công ty chuyển nhà"
          },
          {
            "key": "B",
            "text": "A furniture manufacturer",
            "vietnamese": "Một nhà sản xuất đồ nội thất"
          },
          {
            "key": "C",
            "text": "A painting company",
            "vietnamese": "Một công ty sơn nhà"
          },
          {
            "key": "D",
            "text": "A catering service",
            "vietnamese": "Một dịch vụ phục vụ tiệc"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Người đàn ông nói về: 'a price quote for some painting you want done' và 'requires more than one coat of paint' (báo giá dịch vụ sơn, cần nhiều lớp sơn)."
      },
      {
        "num": 39,
        "question": "What point does the man emphasize?",
        "vietnameseQuestion": "Người đàn ông nhấn mạnh điểm gì?",
        "options": [
          {
            "key": "A",
            "text": "A deposit is required before work can begin.",
            "vietnamese": "Cần phải đặt cọc trước khi công việc bắt đầu."
          },
          {
            "key": "B",
            "text": "A price may be higher than expected.",
            "vietnamese": "Giá cả có thể cao hơn dự tính."
          },
          {
            "key": "C",
            "text": "A discount is available for a limited time.",
            "vietnamese": "Có chương trình giảm giá trong thời gian có hạn."
          },
          {
            "key": "D",
            "text": "A schedule cannot be changed easily.",
            "vietnamese": "Lịch trình không thể thay đổi một cách dễ dàng."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Người đàn ông nói rõ: 'But I do want to stress that the quote may be higher than you expected' (tôi muốn nhấn mạnh rằng báo giá có thể cao hơn chị mong đợi)."
      },
      {
        "num": 40,
        "question": "What does the woman ask about?",
        "vietnameseQuestion": "Người phụ nữ hỏi về điều gì?",
        "options": [
          {
            "key": "A",
            "text": "Signing a contract",
            "vietnamese": "Việc ký kết hợp đồng"
          },
          {
            "key": "B",
            "text": "Purchasing specialized tools",
            "vietnamese": "Mua các dụng cụ chuyên dụng"
          },
          {
            "key": "C",
            "text": "Moving some furniture",
            "vietnamese": "Di chuyển một số đồ nội thất"
          },
          {
            "key": "D",
            "text": "Seeing some samples",
            "vietnamese": "Xem một số mẫu hàng"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Người phụ nữ hỏi: 'And will you move the table and chairs out of the room before you start?' (các anh có chuyển bàn ghế ra ngoài phòng trước khi bắt đầu không?)."
      }
    ],
    "vocabulary": [
      {
        "word": "quote",
        "meaning": "bản báo giá",
        "partOfSpeech": "n"
      },
      {
        "word": "stress",
        "meaning": "nhấn mạnh",
        "partOfSpeech": "v"
      },
      {
        "word": "coat of paint",
        "meaning": "lớp sơn",
        "partOfSpeech": "n"
      },
      {
        "word": "drop cloth",
        "meaning": "tấm bạt phủ bảo vệ chống dính bụi/sơn",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part3-41-43",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 41 - 43",
    "title": "Part 3 - Câu 41 - 43: Tìm hiểu gói thành viên phòng tập thể dục mới",
    "audioSrc": "/audio/test4_2024.mp3",
    "startTime": 1057.28,
    "endTime": 1137.31,
    "transcript": [
      {
        "id": "p3-41-l1",
        "speaker": "Woman",
        "text": "Hi. This is my first time in here. Nice place. Looks like you've got lots of state-of-the-art equipment.",
        "vietnamese": "Xin chào. Đây là lần đầu tiên tôi vào đây. Không gian đẹp thật. Có vẻ như các bạn có rất nhiều thiết bị tối tân hiện đại."
      },
      {
        "id": "p3-41-l2",
        "speaker": "Man",
        "text": "Yes. We just opened this week. All the exercise bikes, treadmills, and workout stations that you see are brand new.",
        "vietnamese": "Vâng. Chúng tôi vừa mở cửa tuần này thôi. Toàn bộ xe đạp tập, máy chạy bộ và các trạm tập luyện mà chị thấy đều hoàn toàn mới."
      },
      {
        "id": "p3-41-l3",
        "speaker": "Woman",
        "text": "Great. I'm considering joining. My office is right around the corner.",
        "vietnamese": "Tuyệt quá. Tôi đang cân nhắc đăng ký tham gia. Văn phòng của tôi ở ngay gần góc đường bên kia."
      },
      {
        "id": "p3-41-l4",
        "speaker": "Man",
        "text": "Well, here's a brochure with a description of our membership levels. I'm happy to answer any questions.",
        "vietnamese": "Dạ, đây là tờ rơi mô tả các hạng thành viên của chúng tôi. Tôi rất sẵn lòng giải đáp bất kỳ thắc mắc nào."
      },
      {
        "id": "p3-41-l5",
        "speaker": "Woman",
        "text": "Thanks. I do like to swim a few times a week. Do you have a pool?",
        "vietnamese": "Cảm ơn bạn. Tôi rất thích bơi vài lần mỗi tuần. Ở đây có bể bơi không?"
      },
      {
        "id": "p3-41-l6",
        "speaker": "Man",
        "text": "We do. Why don't we start by walking around so I can show you all of our facilities?",
        "vietnamese": "Có chứ ạ. Hay là chúng ta bắt đầu bằng một vòng đi dạo để tôi chỉ cho chị thấy toàn bộ cơ sở vật chất của chúng tôi nhé?"
      }
    ],
    "questions": [
      {
        "num": 41,
        "question": "Where does the man work?",
        "vietnameseQuestion": "Người đàn ông làm việc ở đâu?",
        "options": [
          {
            "key": "A",
            "text": "At a community park",
            "vietnamese": "Ở một công viên cộng đồng"
          },
          {
            "key": "B",
            "text": "At a fitness center",
            "vietnamese": "Ở một trung tâm thể hình/thể dục"
          },
          {
            "key": "C",
            "text": "At a public beach",
            "vietnamese": "Ở một bãi biển công cộng"
          },
          {
            "key": "D",
            "text": "At a sports equipment store",
            "vietnamese": "Ở một cửa hàng dụng cụ thể thao"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Người đàn ông nhắc đến: 'exercise bikes, treadmills and workout stations' cùng các gói 'membership levels' (thành viên phòng gym), cho thấy anh làm việc tại một trung tâm thể hình (fitness center)."
      },
      {
        "num": 42,
        "question": "What is the purpose of the woman's visit?",
        "vietnameseQuestion": "Mục đích chuyến ghé thăm của người phụ nữ là gì?",
        "options": [
          {
            "key": "A",
            "text": "She is applying for a job.",
            "vietnamese": "Cô ấy đang nộp đơn xin việc."
          },
          {
            "key": "B",
            "text": "She has a complaint.",
            "vietnamese": "Cô ấy có một lời phàn nàn."
          },
          {
            "key": "C",
            "text": "She needs specific directions.",
            "vietnamese": "Cô ấy cần hướng dẫn đường đi cụ thể."
          },
          {
            "key": "D",
            "text": "She is interested in a membership.",
            "vietnamese": "Cô ấy quan tâm đến gói thành viên."
          }
        ],
        "correctAnswer": "D",
        "explanation": "Người phụ nữ nói rõ: 'I'm considering joining. My office is right around the corner' (Tôi đang cân nhắc đăng ký tham gia)."
      },
      {
        "num": 43,
        "question": "What will the woman most likely do next?",
        "vietnameseQuestion": "Người phụ nữ có khả năng cao nhất sẽ làm gì tiếp theo?",
        "options": [
          {
            "key": "A",
            "text": "Join a team",
            "vietnamese": "Gia nhập một đội"
          },
          {
            "key": "B",
            "text": "Go on a tour",
            "vietnamese": "Đi tham quan một vòng"
          },
          {
            "key": "C",
            "text": "Make a phone call",
            "vietnamese": "Gọi một cuộc điện thoại"
          },
          {
            "key": "D",
            "text": "Fill out an application",
            "vietnamese": "Điền vào một đơn xin"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Người đàn ông rủ: 'Why don't we start by walking around so I can show you all of our facilities?' (Chúng ta hãy đi dạo một vòng để tôi giới thiệu cơ sở vật chất), nên cô ấy sẽ đi tham quan cơ sở vật chất."
      }
    ],
    "vocabulary": [
      {
        "word": "state-of-the-art",
        "meaning": "hiện đại nhất, tối tân",
        "partOfSpeech": "adj"
      },
      {
        "word": "treadmill",
        "meaning": "máy chạy bộ",
        "partOfSpeech": "n"
      },
      {
        "word": "workout station",
        "meaning": "trạm/khu tập luyện thể hình",
        "partOfSpeech": "n"
      },
      {
        "word": "facilities",
        "meaning": "cơ sở vật chất",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part3-44-46",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 44 - 46",
    "title": "Part 3 - Câu 44 - 46: Hỏi thuê căn hộ lớn hơn trong tòa nhà",
    "audioSrc": "/audio/test4_2024.mp3",
    "startTime": 1137.31,
    "endTime": 1220.66,
    "transcript": [
      {
        "id": "p3-44-l1",
        "speaker": "Man",
        "text": "Hello. What brings you into our leasing office today?",
        "vietnamese": "Xin chào. Điều gì đưa cô đến văn phòng cho thuê của chúng tôi hôm nay?"
      },
      {
        "id": "p3-44-l2",
        "speaker": "Woman",
        "text": "Hi. I currently live in Unit 217, but I'm wondering if there are any larger units available to rent in the building.",
        "vietnamese": "Chào anh. Hiện tại tôi đang sống ở căn hộ 217, nhưng tôi muốn hỏi xem liệu có căn nào rộng hơn còn trống để thuê trong tòa nhà không."
      },
      {
        "id": "p3-44-l3",
        "speaker": "Man",
        "text": "Let me see. Apartment 410 is quite large and the lease on it ends this November. It's a thousand per month. Does that interest you?",
        "vietnamese": "Để tôi xem nhé. Căn hộ 410 khá rộng và hợp đồng thuê sẽ kết thúc vào tháng 11 này. Giá thuê là 1.000 đô la mỗi tháng. Cô có thấy hứng thú không?"
      },
      {
        "id": "p3-44-l4",
        "speaker": "Woman",
        "text": "I did just get promoted at work recently so I can afford to spend more. So that won't be a problem.",
        "vietnamese": "Dạo gần đây tôi vừa được thăng chức ở cơ quan nên có thể chi trả nhiều hơn. Vì thế việc đó sẽ không thành vấn đề."
      },
      {
        "id": "p3-44-l5",
        "speaker": "Man",
        "text": "Great. I'll call the current tenant and we can figure out a time for a viewing.",
        "vietnamese": "Tuyệt vời. Tôi sẽ gọi điện cho người thuê hiện tại và chúng ta có thể sắp xếp thời gian để đi xem căn hộ."
      }
    ],
    "questions": [
      {
        "num": 44,
        "question": "Who most likely is the man?",
        "vietnameseQuestion": "Người đàn ông có khả năng cao nhất là ai?",
        "options": [
          {
            "key": "A",
            "text": "A janitor",
            "vietnamese": "Một nhân viên dọn dẹp vệ sinh"
          },
          {
            "key": "B",
            "text": "A property manager",
            "vietnamese": "Một người quản lý bất động sản/tòa nhà"
          },
          {
            "key": "C",
            "text": "A carpenter",
            "vietnamese": "Một thợ mộc"
          },
          {
            "key": "D",
            "text": "An interior designer",
            "vietnamese": "Một nhà thiết kế nội thất"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Người đàn ông đón tiếp ở 'leasing office' (văn phòng cho thuê), nắm rõ tình trạng căn hộ và hợp đồng thuê ('lease'), cho thấy anh là người quản lý bất động sản/tòa nhà (property manager)."
      },
      {
        "num": 45,
        "question": "What does the woman say recently happened?",
        "vietnameseQuestion": "Người phụ nữ nói điều gì vừa xảy ra gần đây?",
        "options": [
          {
            "key": "A",
            "text": "She earned a degree.",
            "vietnamese": "Cô ấy đã nhận một tấm bằng."
          },
          {
            "key": "B",
            "text": "She won an award.",
            "vietnamese": "Cô ấy đã giành một giải thưởng."
          },
          {
            "key": "C",
            "text": "She got a promotion.",
            "vietnamese": "Cô ấy vừa được thăng chức."
          },
          {
            "key": "D",
            "text": "She transferred to a new location.",
            "vietnamese": "Cô ấy đã chuyển đến một địa điểm mới."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Người phụ nữ nói: 'I did just get promoted at work recently so I can afford to spend more' (tôi vừa mới được thăng chức ở nơi làm việc)."
      },
      {
        "num": 46,
        "question": "What will the man do next?",
        "vietnameseQuestion": "Người đàn ông sẽ làm gì tiếp theo?",
        "options": [
          {
            "key": "A",
            "text": "Make a phone call",
            "vietnamese": "Gọi một cuộc điện thoại"
          },
          {
            "key": "B",
            "text": "Prepare a contract",
            "vietnamese": "Chuẩn bị một bản hợp đồng"
          },
          {
            "key": "C",
            "text": "Drop off a key",
            "vietnamese": "Giao lại một chiếc chìa khóa"
          },
          {
            "key": "D",
            "text": "Log some work hours",
            "vietnamese": "Ghi nhận giờ làm việc"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Người đàn ông nói: 'I'll call the current tenant and we can figure out a time for a viewing' (Tôi sẽ gọi cho người thuê hiện tại)."
      }
    ],
    "vocabulary": [
      {
        "word": "leasing office",
        "meaning": "văn phòng quản lý cho thuê",
        "partOfSpeech": "n"
      },
      {
        "word": "unit",
        "meaning": "căn hộ",
        "partOfSpeech": "n"
      },
      {
        "word": "get promoted",
        "meaning": "được thăng chức",
        "partOfSpeech": "v"
      },
      {
        "word": "tenant",
        "meaning": "người thuê nhà",
        "partOfSpeech": "n"
      },
      {
        "word": "viewing",
        "meaning": "buổi đi xem nhà/phòng",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part3-47-49",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 47 - 49",
    "title": "Part 3 - Câu 47 - 49: Khảo sát khách hàng cho cửa hàng thủ công trực tuyến",
    "audioSrc": "/audio/test4_2024.mp3",
    "startTime": 1220.66,
    "endTime": 1302.57,
    "transcript": [
      {
        "id": "p3-47-l1",
        "speaker": "Man",
        "text": "Hello, Ms. Bajaj. I'm glad we have a chance to meet today to discuss your business. What's your company's main goal?",
        "vietnamese": "Xin chào cô Bajaj. Tôi rất vui vì hôm nay chúng ta có cơ hội gặp nhau để thảo luận về doanh nghiệp của cô. Mục tiêu chính của công ty cô là gì?"
      },
      {
        "id": "p3-47-l2",
        "speaker": "Woman",
        "text": "Well, recently my craft supply store has started receiving a lot of online orders. It's important that I get feedback from those customers about the products that I'm selling.",
        "vietnamese": "À, dạo gần đây cửa hàng cung cấp đồ thủ công của tôi bắt đầu nhận được rất nhiều đơn hàng trực tuyến. Điều quan trọng là tôi phải có được phản hồi từ những khách hàng đó về các sản phẩm tôi đang bán."
      },
      {
        "id": "p3-47-l3",
        "speaker": "Man",
        "text": "We can design an online survey for you. It's automatically emailed out to your customers, a week after their order is delivered. We've had a lot of success getting people to respond to those.",
        "vietnamese": "Chúng tôi có thể thiết kế một bản khảo sát trực tuyến cho cô. Nó sẽ được tự động gửi email cho khách hàng của cô một tuần sau khi đơn hàng được giao. Chúng tôi đã rất thành công trong việc thu hút mọi người phản hồi các khảo sát này."
      },
      {
        "id": "p3-47-l4",
        "speaker": "Woman",
        "text": "That's a great idea. Then perhaps I could offer a future discount to any customer who completes the survey.",
        "vietnamese": "Đó là một ý kiến tuyệt vời. Vậy thì có lẽ tôi có thể áp dụng mức giảm giá cho lần mua sau cho bất kỳ khách hàng nào hoàn thành bài khảo sát."
      }
    ],
    "questions": [
      {
        "num": 47,
        "question": "According to the woman, what has recently happened at her business?",
        "vietnameseQuestion": "Theo người phụ nữ, điều gì gần đây đã xảy ra tại doanh nghiệp của cô ấy?",
        "options": [
          {
            "key": "A",
            "text": "Customers have complained.",
            "vietnamese": "Khách hàng đã phàn nàn."
          },
          {
            "key": "B",
            "text": "Inspections have been conducted.",
            "vietnamese": "Các cuộc thanh tra đã được tiến hành."
          },
          {
            "key": "C",
            "text": "Online orders have increased.",
            "vietnamese": "Các đơn đặt hàng trực tuyến đã gia tăng."
          },
          {
            "key": "D",
            "text": "Shipments have been incomplete.",
            "vietnamese": "Các chuyến hàng chưa hoàn tất."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Người phụ nữ nói: 'recently my craft supply store has started receiving a lot of online orders' (cửa hàng nhận được rất nhiều đơn hàng trực tuyến gần đây)."
      },
      {
        "num": 48,
        "question": "What can the man's company do?",
        "vietnameseQuestion": "Công ty của người đàn ông có thể làm gì?",
        "options": [
          {
            "key": "A",
            "text": "Provide safety training",
            "vietnamese": "Cung cấp đào tạo an toàn"
          },
          {
            "key": "B",
            "text": "Post demonstration videos",
            "vietnamese": "Đăng tải các video trình diễn mẫu"
          },
          {
            "key": "C",
            "text": "Acquire more warehouse space",
            "vietnamese": "Thu mua thêm diện tích kho bãi"
          },
          {
            "key": "D",
            "text": "Create customer surveys",
            "vietnamese": "Tạo các bảng khảo sát ý kiến khách hàng"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Người đàn ông đề xuất dịch vụ của bên mình: 'We can design an online survey for you. It's automatically emailed out to your customers' (thiết kế bảng khảo sát trực tuyến)."
      },
      {
        "num": 49,
        "question": "What does the woman say she could offer her customers?",
        "vietnameseQuestion": "Người phụ nữ nói cô ấy có thể cung cấp điều gì cho khách hàng của mình?",
        "options": [
          {
            "key": "A",
            "text": "A discount",
            "vietnamese": "Mức giảm giá"
          },
          {
            "key": "B",
            "text": "Expedited shipping",
            "vietnamese": "Giao hàng hỏa tốc"
          },
          {
            "key": "C",
            "text": "Free product samples",
            "vietnamese": "Mẫu sản phẩm miễn phí"
          },
          {
            "key": "D",
            "text": "A personal consultation",
            "vietnamese": "Buổi tư vấn cá nhân"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Người phụ nữ nói: 'Then perhaps I could offer a future discount to any customer who completes the survey' (cung cấp mã giảm giá cho khách hàng điền khảo sát)."
      }
    ],
    "vocabulary": [
      {
        "word": "craft supply store",
        "meaning": "cửa hàng bán dụng cụ/đồ làm thủ công",
        "partOfSpeech": "n"
      },
      {
        "word": "feedback",
        "meaning": "ý kiến phản hồi",
        "partOfSpeech": "n"
      },
      {
        "word": "online survey",
        "meaning": "khảo sát trực tuyến",
        "partOfSpeech": "n"
      },
      {
        "word": "future discount",
        "meaning": "chiết khấu/giảm giá cho lần mua sau",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part3-50-52",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 50 - 52",
    "title": "Part 3 - Câu 50 - 52: Giao hoa sự kiện tiệc cưới tại khách sạn",
    "audioSrc": "/audio/test4_2024.mp3",
    "startTime": 1302.57,
    "endTime": 1394.67,
    "transcript": [
      {
        "id": "p3-50-l1",
        "speaker": "Man 1",
        "text": "Hello, I'm from District Flowers store, and I have your centerpiece order.",
        "vietnamese": "Xin chào, tôi đến từ cửa hàng District Flowers, và tôi mang đơn hàng hoa để bàn của quý vị tới đây."
      },
      {
        "id": "p3-50-l2",
        "speaker": "Man 2",
        "text": "Let me get the hotel's event manager here. She's the one that ordered. Yulia, you have a delivery from District Flowers store at reception.",
        "vietnamese": "Để tôi gọi quản lý sự kiện của khách sạn ra đây nhé. Cô ấy là người đặt hàng. Yulia ơi, cô có đơn giao hàng từ cửa hàng District Flowers ở quầy lễ tân này."
      },
      {
        "id": "p3-50-l3",
        "speaker": "Woman",
        "text": "Hi, I'm glad you're early. The wedding's this evening, but we're already setting up the ballroom.",
        "vietnamese": "Chào anh, tôi rất mừng vì anh đến sớm. Đám cưới diễn ra vào tối nay, nhưng chúng tôi đã bắt đầu trang trí hội trường tiệc rồi."
      },
      {
        "id": "p3-50-l4",
        "speaker": "Man 1",
        "text": "I'll need you to acknowledge receipt. Could you sign here? And then, where should I unload your calla-lily centerpieces?",
        "vietnamese": "Tôi cần cô xác nhận nhận hàng. Cô có thể ký vào đây được không? Và sau đó, tôi nên dỡ các lẵng hoa rum để bàn ở đâu ạ?"
      },
      {
        "id": "p3-50-l5",
        "speaker": "Woman",
        "text": "Calla lilies? I ordered lilacs for the wedding centerpieces.",
        "vietnamese": "Hoa rum sao? Tôi đã đặt hoa tử đinh hương cho các lẵng hoa cưới cơ mà."
      },
      {
        "id": "p3-50-l6",
        "speaker": "Man 1",
        "text": "Oh, I wouldn't know. I just deliver.",
        "vietnamese": "Ồ, tôi không rõ nữa. Tôi chỉ là người giao hàng thôi."
      },
      {
        "id": "p3-50-l7",
        "speaker": "Woman",
        "text": "Well, let me call your boss. We need this sorted out right away.",
        "vietnamese": "Thôi được rồi, để tôi gọi cho quản lý của anh. Chúng ta cần giải quyết dứt điểm việc này ngay lập tức."
      }
    ],
    "questions": [
      {
        "num": 50,
        "question": "Where most likely are the speakers?",
        "vietnameseQuestion": "Những người nói có khả năng cao nhất đang ở đâu?",
        "options": [
          {
            "key": "A",
            "text": "At a farm",
            "vietnamese": "Ở một trang trại"
          },
          {
            "key": "B",
            "text": "At a landscaping company",
            "vietnamese": "Ở một công ty thiết kế cảnh quan"
          },
          {
            "key": "C",
            "text": "At a hotel",
            "vietnamese": "Ở một khách sạn"
          },
          {
            "key": "D",
            "text": "At a catering firm",
            "vietnamese": "Ở một công ty dịch vụ tiệc"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Người đàn ông thứ hai nói: 'Let me get the hotel's event manager here' và nhắc đến 'reception', 'ballroom' (sảnh tiệc lớn của khách sạn), cho thấy họ đang ở khách sạn."
      },
      {
        "num": 51,
        "question": "What type of event is going to take place?",
        "vietnameseQuestion": "Loại sự kiện nào sắp sửa diễn ra?",
        "options": [
          {
            "key": "A",
            "text": "A wedding",
            "vietnamese": "Một đám cưới"
          },
          {
            "key": "B",
            "text": "A flower exposition",
            "vietnamese": "Một triển lãm hoa"
          },
          {
            "key": "C",
            "text": "A grand opening",
            "vietnamese": "Một lễ khai trương trọng thể"
          },
          {
            "key": "D",
            "text": "A birthday party",
            "vietnamese": "Một bữa tiệc sinh nhật"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Người phụ nữ nói rõ: 'The wedding's this evening, but we're already setting up the ballroom' (đám cưới diễn ra vào tối nay)."
      },
      {
        "num": 52,
        "question": "What does the woman say she will do?",
        "vietnameseQuestion": "Người phụ nữ nói cô ấy sẽ làm gì?",
        "options": [
          {
            "key": "A",
            "text": "Sign a receipt",
            "vietnamese": "Ký biên lai"
          },
          {
            "key": "B",
            "text": "Adjust a schedule",
            "vietnamese": "Điều chỉnh một lịch trình"
          },
          {
            "key": "C",
            "text": "Add items to an order",
            "vietnamese": "Thêm món hàng vào đơn hàng"
          },
          {
            "key": "D",
            "text": "Call a supervisor",
            "vietnamese": "Gọi cho người giám sát/quản lý"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Người phụ nữ nói: 'Well, let me call your boss. We need this sorted out right away' (gọi điện cho sếp/người quản lý của anh giao hàng)."
      }
    ],
    "vocabulary": [
      {
        "word": "centerpiece",
        "meaning": "lẵng hoa/vật trang trí ở giữa bàn",
        "partOfSpeech": "n"
      },
      {
        "word": "ballroom",
        "meaning": "phòng tiệc lớn, phòng khiêu vũ",
        "partOfSpeech": "n"
      },
      {
        "word": "acknowledge receipt",
        "meaning": "xác nhận đã nhận hàng",
        "partOfSpeech": "v"
      },
      {
        "word": "calla lily",
        "meaning": "hoa rum, hoa vân môn",
        "partOfSpeech": "n"
      },
      {
        "word": "lilac",
        "meaning": "hoa tử đinh hương",
        "partOfSpeech": "n"
      },
      {
        "word": "sort out",
        "meaning": "giải quyết ổn thỏa, phân loại xử lý",
        "partOfSpeech": "v"
      }
    ]
  },
  {
    "id": "part3-53-55",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 53 - 55",
    "title": "Part 3 - Câu 53 - 55: Kiểm tra và sửa chữa mái nhà sau cơn bão",
    "audioSrc": "/audio/test4_2024.mp3",
    "startTime": 1394.67,
    "endTime": 1471.18,
    "transcript": [
      {
        "id": "p3-53-l1",
        "speaker": "Man 1",
        "text": "Excuse me, Ms. Campbell. My engineer Adisa is still on your roof, but I just wanted to let you know we're almost done with the inspection.",
        "vietnamese": "Xin lỗi cô Campbell. Kỹ sư Adisa của tôi vẫn đang ở trên mái nhà của cô, nhưng tôi chỉ muốn thông báo rằng chúng tôi gần như đã hoàn tất việc kiểm tra."
      },
      {
        "id": "p3-53-l2",
        "speaker": "Woman",
        "text": "How does everything look?",
        "vietnamese": "Mọi thứ trông thế nào rồi?"
      },
      {
        "id": "p3-53-l3",
        "speaker": "Man 1",
        "text": "Oh, here's Adisa now. He can answer that.",
        "vietnamese": "Ồ, Adisa xuống đây rồi. Anh ấy có thể trả lời câu hỏi đó."
      },
      {
        "id": "p3-53-l4",
        "speaker": "Man 2",
        "text": "I conducted a thorough inspection. There's no structural damage. All of the support beams are intact, but we'll have to replace some of the shingles that were blown away in the storm.",
        "vietnamese": "Tôi đã tiến hành kiểm tra kỹ lưỡng. Không có hư hại nào về kết cấu cả. Toàn bộ các dầm chịu lực đều nguyên vẹn, nhưng chúng tôi sẽ phải thay thế một số tấm ngói lợp đã bị cuốn bay trong cơn bão."
      },
      {
        "id": "p3-53-l5",
        "speaker": "Woman",
        "text": "Well, that's a relief. I was worried that I'd need major repairs.",
        "vietnamese": "Chà, thật nhẹ nhõm. Tôi cứ lo là mình sẽ phải sửa chữa lớn."
      },
      {
        "id": "p3-53-l6",
        "speaker": "Man 2",
        "text": "I'm afraid you'll have to close your store while we replace the shingles, but we'll be able to finish in one day. Does Tuesday work for you?",
        "vietnamese": "Tôi e rằng cô sẽ phải đóng cửa cửa hàng trong khi chúng tôi thay ngói, nhưng chúng tôi sẽ có thể hoàn thành trong một ngày. Thứ Ba có thuận tiện cho cô không?"
      }
    ],
    "questions": [
      {
        "num": 53,
        "question": "What kind of business do the men most likely work for?",
        "vietnameseQuestion": "Những người đàn ông có khả năng cao nhất làm việc cho loại hình doanh nghiệp nào?",
        "options": [
          {
            "key": "A",
            "text": "A fencing company",
            "vietnamese": "Một công ty làm hàng rào"
          },
          {
            "key": "B",
            "text": "A landscaping service",
            "vietnamese": "Một dịch vụ cảnh quan sân vườn"
          },
          {
            "key": "C",
            "text": "A roofing company",
            "vietnamese": "Một công ty sửa chữa mái nhà"
          },
          {
            "key": "D",
            "text": "An auto repair shop",
            "vietnamese": "Một xưởng sửa chữa ô tô"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Họ kiểm tra 'roof' (mái nhà), kiểm tra 'support beams' (dầm đỡ) và đề xuất thay thế 'shingles' (ngói lợp mái nhà), cho thấy họ làm việc cho công ty làm/sửa mái nhà (roofing company)."
      },
      {
        "num": 54,
        "question": "Why is the woman relieved?",
        "vietnameseQuestion": "Tại sao người phụ nữ lại cảm thấy nhẹ nhõm?",
        "options": [
          {
            "key": "A",
            "text": "Some damage is minor.",
            "vietnamese": "Một số thiệt hại chỉ là thứ yếu/nhẹ."
          },
          {
            "key": "B",
            "text": "A delivery arrived early.",
            "vietnamese": "Một kiện hàng đã được giao sớm."
          },
          {
            "key": "C",
            "text": "Customer reviews are positive.",
            "vietnamese": "Đánh giá của khách hàng rất tích cực."
          },
          {
            "key": "D",
            "text": "The weather forecast is good.",
            "vietnamese": "Dự báo thời tiết tốt lành."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Kỹ sư thông báo không có hư hại cấu trúc lớn ('no structural damage', chỉ cần thay vài viên ngói), người phụ nữ đáp: 'Well, that's a relief. I was worried that I'd need major repairs' (Thật nhẹ nhõm, không phải sửa chữa lớn)."
      },
      {
        "num": 55,
        "question": "What will the woman do on Tuesday?",
        "vietnameseQuestion": "Người phụ nữ sẽ làm gì vào thứ Ba?",
        "options": [
          {
            "key": "A",
            "text": "Wash her car",
            "vietnamese": "Rửa xe hơi của cô ấy"
          },
          {
            "key": "B",
            "text": "Close her store",
            "vietnamese": "Đóng cửa cửa hàng của cô ấy"
          },
          {
            "key": "C",
            "text": "Take some measurements",
            "vietnamese": "Tiến hành đo đạc kích thước"
          },
          {
            "key": "D",
            "text": "Look at some material samples",
            "vietnamese": "Xem qua một số mẫu vật liệu"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Người thợ nói: 'I'm afraid you'll have to close your store while we replace the shingles... Does Tuesday work for you?' (Cô phải đóng cửa hàng khi chúng tôi thay ngói vào thứ Ba)."
      }
    ],
    "vocabulary": [
      {
        "word": "thorough inspection",
        "meaning": "sự kiểm tra toàn diện, kỹ lưỡng",
        "partOfSpeech": "n"
      },
      {
        "word": "structural damage",
        "meaning": "thiệt hại về kết cấu",
        "partOfSpeech": "n"
      },
      {
        "word": "support beam",
        "meaning": "dầm chịu lực, xà đỡ",
        "partOfSpeech": "n"
      },
      {
        "word": "shingle",
        "meaning": "tấm ván lợp, tấm ngói lợp mái",
        "partOfSpeech": "n"
      },
      {
        "word": "relief",
        "meaning": "sự nhẹ nhõm, an tâm",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part3-56-58",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 56 - 58",
    "title": "Part 3 - Câu 56 - 58: Sự cố trễ giờ làm do sửa chữa ga tàu điện ngầm",
    "audioSrc": "/audio/test4_2024.mp3",
    "startTime": 1471.18,
    "endTime": 1551.06,
    "transcript": [
      {
        "id": "p3-56-l1",
        "speaker": "Man",
        "text": "Hi, Arina. I'm sorry about missing the morning meeting. My commute was horrendous.",
        "vietnamese": "Chào Arina. Tôi xin lỗi vì đã bỏ lỡ cuộc họp sáng nay. Quãng đường đi làm của tôi sáng nay thật kinh khủng."
      },
      {
        "id": "p3-56-l2",
        "speaker": "Woman",
        "text": "No worries. The meeting notes will be sent out. What happened?",
        "vietnamese": "Đừng lo. Bản ghi chú cuộc họp sẽ được gửi đi thôi. Có chuyện gì đã xảy ra vậy?"
      },
      {
        "id": "p3-56-l3",
        "speaker": "Man",
        "text": "The metro system's renovating some station platforms, and it added an extra half hour to my commute. Trains in both directions are only using one track, and the train's my only option.",
        "vietnamese": "Hệ thống tàu điện ngầm đang cải tạo một số ke ga, và điều đó khiến việc đi lại của tôi mất thêm nửa tiếng. Tàu ở cả hai hướng chỉ chạy chung một đường ray, mà tàu lại là lựa chọn duy nhất của tôi."
      },
      {
        "id": "p3-56-l4",
        "speaker": "Woman",
        "text": "Well, there is a rapid-transit bus service.",
        "vietnamese": "Chà, có cả dịch vụ xe buýt nhanh nữa đấy chứ."
      },
      {
        "id": "p3-56-l5",
        "speaker": "Man",
        "text": "I wasn't aware of that. I'm still new to this city. How do I get more information?",
        "vietnamese": "Tôi không hề hay biết về điều đó. Tôi vẫn còn là người mới ở thành phố này. Làm sao để tôi có thêm thông tin nhỉ?"
      },
      {
        "id": "p3-56-l6",
        "speaker": "Woman",
        "text": "I'll send you links to their website and system map.",
        "vietnamese": "Tôi sẽ gửi cho anh các liên kết tới trang web và bản đồ hệ thống của họ."
      }
    ],
    "questions": [
      {
        "num": 56,
        "question": "Why does the man apologize?",
        "vietnameseQuestion": "Tại sao người đàn ông lại xin lỗi?",
        "options": [
          {
            "key": "A",
            "text": "He missed a meeting.",
            "vietnamese": "Anh ấy đã bỏ lỡ một cuộc họp."
          },
          {
            "key": "B",
            "text": "He has a poor Internet connection.",
            "vietnamese": "Kết nối Internet của anh ấy kém."
          },
          {
            "key": "C",
            "text": "He failed to complete an assignment.",
            "vietnamese": "Anh ấy không hoàn thành được nhiệm vụ được giao."
          },
          {
            "key": "D",
            "text": "He lost his employee badge.",
            "vietnamese": "Anh ấy làm mất thẻ nhân viên."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Người đàn ông nói ngay câu đầu tiên: 'I'm sorry about missing the morning meeting. My commute was horrendous' (xin lỗi vì đã lỡ cuộc họp sáng nay)."
      },
      {
        "num": 57,
        "question": "Why does the woman say, \"Well, there is a rapid-transit bus service\"?",
        "vietnameseQuestion": "Tại sao người phụ nữ lại nói: \"Chà, có cả dịch vụ xe buýt nhanh nữa đấy chứ\"?",
        "options": [
          {
            "key": "A",
            "text": "To praise improvements to a system",
            "vietnamese": "Để khen ngợi những cải tiến của một hệ thống"
          },
          {
            "key": "B",
            "text": "To correct a mistaken assumption",
            "vietnamese": "Để đính chính một giả định sai lầm"
          },
          {
            "key": "C",
            "text": "To express dissatisfaction",
            "vietnamese": "Để bày tỏ sự không hài lòng"
          },
          {
            "key": "D",
            "text": "To justify a decision",
            "vietnamese": "Để biện minh cho một quyết định"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Người đàn ông vừa nói lầm tưởng rằng 'the train's my only option' (tàu là lựa chọn duy nhất của tôi), nên người phụ nữ nói câu này để đính chính suy nghĩ sai đó bằng cách chỉ ra phương án xe buýt nhanh."
      },
      {
        "num": 58,
        "question": "What will the woman do next?",
        "vietnameseQuestion": "Người phụ nữ sẽ làm gì tiếp theo?",
        "options": [
          {
            "key": "A",
            "text": "Download a ticket",
            "vietnamese": "Tải một tấm vé"
          },
          {
            "key": "B",
            "text": "Pick up some clients",
            "vietnamese": "Đón một số khách hàng"
          },
          {
            "key": "C",
            "text": "Activate a key card",
            "vietnamese": "Kích hoạt thẻ từ"
          },
          {
            "key": "D",
            "text": "Forward some Web-site links",
            "vietnamese": "Chuyển tiếp một số liên kết trang web"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Người phụ nữ nói: 'I'll send you links to their website and system map' (chuyển tiếp các đường link trang web cho người đàn ông)."
      }
    ],
    "vocabulary": [
      {
        "word": "commute",
        "meaning": "quãng đường/thời gian đi làm hàng ngày",
        "partOfSpeech": "n"
      },
      {
        "word": "horrendous",
        "meaning": "kinh khủng, khủng khiếp",
        "partOfSpeech": "adj"
      },
      {
        "word": "renovate",
        "meaning": "cải tạo, nâng cấp",
        "partOfSpeech": "v"
      },
      {
        "word": "station platform",
        "meaning": "ke ga, sân ga",
        "partOfSpeech": "n"
      },
      {
        "word": "rapid-transit bus",
        "meaning": "xe buýt nhanh (BRT)",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part3-59-61",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 59 - 61",
    "title": "Part 3 - Câu 59 - 61: Tư vấn định hướng thị trường cho thương hiệu thời trang",
    "audioSrc": "/audio/test4_2024.mp3",
    "startTime": 1551.06,
    "endTime": 1622.25,
    "transcript": [
      {
        "id": "p3-59-l1",
        "speaker": "Man",
        "text": "Hello, Sylvia. Good to see you again. My consultancy firm has been working hard to help you grow your clothing company.",
        "vietnamese": "Xin chào Sylvia. Rất vui được gặp lại cô. Công ty tư vấn của tôi đã nỗ lực hết mình để giúp cô phát triển công ty quần áo của mình."
      },
      {
        "id": "p3-59-l2",
        "speaker": "Woman",
        "text": "Thanks. I never expected so much attention from my clothing designs, but I'm so pleased with the reactions.",
        "vietnamese": "Cảm ơn anh. Tôi chưa bao giờ kỳ vọng các mẫu thiết kế trang phục của mình lại được chú ý nhiều đến thế, nhưng tôi rất hài lòng với những phản hồi tích cực này."
      },
      {
        "id": "p3-59-l3",
        "speaker": "Man",
        "text": "Okay. What do you think about approaching regional department stores?",
        "vietnamese": "Được rồi. Cô nghĩ sao về việc tiếp cận các trung tâm thương mại bách hóa trong khu vực?"
      },
      {
        "id": "p3-59-l4",
        "speaker": "Woman",
        "text": "They usually market to a younger clientele.",
        "vietnamese": "Họ thường tiếp thị tới đối tượng khách hàng trẻ tuổi hơn."
      },
      {
        "id": "p3-59-l5",
        "speaker": "Man",
        "text": "I see. Let me get you a list of other stores we also had in mind.",
        "vietnamese": "Tôi hiểu rồi. Để tôi gửi cho cô danh sách các cửa hàng khác mà chúng tôi cũng đã cân nhắc nhé."
      }
    ],
    "questions": [
      {
        "num": 59,
        "question": "Who is the woman?",
        "vietnameseQuestion": "Người phụ nữ là ai?",
        "options": [
          {
            "key": "A",
            "text": "An architect",
            "vietnamese": "Một kiến trúc sư"
          },
          {
            "key": "B",
            "text": "A clothing designer",
            "vietnamese": "Một nhà thiết kế thời trang/quần áo"
          },
          {
            "key": "C",
            "text": "A construction manager",
            "vietnamese": "Một người quản lý xây dựng"
          },
          {
            "key": "D",
            "text": "A department store director",
            "vietnamese": "Một giám đốc trung tâm thương mại"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Người phụ nữ nói: 'I never expected so much attention from my clothing designs' (các thiết kế trang phục của tôi), cho thấy cô là nhà thiết kế thời trang (clothing designer)."
      },
      {
        "num": 60,
        "question": "Why does the woman say, \"They usually market to a younger clientele\"?",
        "vietnameseQuestion": "Tại sao người phụ nữ lại nói: \"Họ thường tiếp thị tới đối tượng khách hàng trẻ tuổi hơn\"?",
        "options": [
          {
            "key": "A",
            "text": "To reject a suggestion",
            "vietnamese": "Để từ chối một gợi ý"
          },
          {
            "key": "B",
            "text": "To justify a decision",
            "vietnamese": "Để biện minh cho một quyết định"
          },
          {
            "key": "C",
            "text": "To express disappointment",
            "vietnamese": "Để bày tỏ sự thất vọng"
          },
          {
            "key": "D",
            "text": "To ask for clarification",
            "vietnamese": "Để yêu cầu làm rõ thêm"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Người đàn ông vừa gợi ý tiếp cận 'regional department stores'. Cô giải thích rằng họ nhắm tới khách hàng trẻ hơn (không phù hợp tệp khách hàng của cô), nhằm mục đích từ chối đề xuất này."
      },
      {
        "num": 61,
        "question": "What does the man say he will give the woman?",
        "vietnameseQuestion": "Người đàn ông nói anh ấy sẽ đưa cho người phụ nữ cái gì?",
        "options": [
          {
            "key": "A",
            "text": "An area map",
            "vietnamese": "Một bản đồ khu vực"
          },
          {
            "key": "B",
            "text": "A list of businesses",
            "vietnamese": "Một danh sách các doanh nghiệp/cửa hàng"
          },
          {
            "key": "C",
            "text": "Some photographs",
            "vietnamese": "Một vài bức ảnh"
          },
          {
            "key": "D",
            "text": "Some measurements",
            "vietnamese": "Một số số đo kích thước"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Người đàn ông nói: 'Let me get you a list of other stores we also had in mind' (danh sách các cửa hàng/doanh nghiệp khác mà công ty đã nhắm tới)."
      }
    ],
    "vocabulary": [
      {
        "word": "consultancy firm",
        "meaning": "công ty tư vấn",
        "partOfSpeech": "n"
      },
      {
        "word": "clientele",
        "meaning": "tệp khách hàng, giới khách hàng",
        "partOfSpeech": "n"
      },
      {
        "word": "department store",
        "meaning": "trung tâm bách hóa tổng hợp",
        "partOfSpeech": "n"
      },
      {
        "word": "have in mind",
        "meaning": "nghĩ đến, có ý định",
        "partOfSpeech": "v"
      }
    ]
  },
  {
    "id": "part3-62-64",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 62 - 64",
    "title": "Part 3 - Câu 62 - 64: Sửa chữa đèn chiếu sân khấu trước buổi công diễn",
    "audioSrc": "/audio/test4_2024.mp3",
    "startTime": 1622.25,
    "endTime": 1722.26,
    "image": "/images/intensive/test4_2024/q62_64.png",
    "graphicImage": "/images/intensive/test4_2024/q62_64.png",
    "imageUrl": "/images/intensive/test4_2024/q62_64.png",
    "transcript": [
      {
        "id": "p3-62-l1",
        "speaker": "Woman",
        "text": "Louise, I noticed something while I was directing yesterday's rehearsal. I had a problem while I was trying to give some directions to the actors during Act 3. I wanted to ask you about it since you're in charge of lighting.",
        "vietnamese": "Louise này, tôi nhận thấy một việc trong khi tôi đang chỉ đạo buổi tập duyệt ngày hôm qua. Tôi đã gặp sự cố khi đang cố gắng hướng dẫn cho các diễn viên trong Hồi 3. Tôi muốn hỏi anh về việc đó vì anh là người phụ trách phần ánh sáng."
      },
      {
        "id": "p3-62-l2",
        "speaker": "Man",
        "text": "Sure. What is it?",
        "vietnamese": "Vâng được chứ. Có vấn đề gì vậy ạ?"
      },
      {
        "id": "p3-62-l3",
        "speaker": "Woman",
        "text": "One of the footlights at the front of the stage was flickering, which was distracting. It made it hard to see the actors' faces and costumes. Can you do something to fix it?",
        "vietnamese": "Một trong những chiếc đèn hắt dưới sàn ở phía trước sân khấu đã bị nhấp nháy, gây mất tập trung. Nó khiến cho việc nhìn rõ khuôn mặt và trang phục của diễn viên gặp khó khăn. Anh có thể làm cách nào để khắc phục nó không?"
      },
      {
        "id": "p3-62-l4",
        "speaker": "Man",
        "text": "Actually, I've already ordered a replacement. It should be here tomorrow.",
        "vietnamese": "Thực ra tôi đã đặt mua một chiếc mới để thay thế rồi. Ngày mai hàng sẽ về tới đây."
      },
      {
        "id": "p3-62-l5",
        "speaker": "Woman",
        "text": "Great. Thanks. I can't believe opening night is next week. Everyone has put so much work into the show, it'll be great to have an audience.",
        "vietnamese": "Tuyệt quá. Cảm ơn anh. Tôi không thể tin là đêm công diễn mở màn lại vào tuần tới rồi. Mọi người đều đã dồn bao nhiêu tâm huyết vào vở diễn, sẽ thật tuyệt vời khi có khán giả đến thưởng thức."
      }
    ],
    "questions": [
      {
        "num": 62,
        "question": "Look at the graphic. Who is the woman?",
        "vietnameseQuestion": "Nhìn vào biểu đồ/danh bạ. Người phụ nữ là ai?",
        "options": [
          {
            "key": "A",
            "text": "Liliana Flores",
            "vietnamese": "Liliana Flores"
          },
          {
            "key": "B",
            "text": "Svetlana Popova",
            "vietnamese": "Svetlana Popova"
          },
          {
            "key": "C",
            "text": "Lauren Campbell",
            "vietnamese": "Lauren Campbell"
          },
          {
            "key": "D",
            "text": "So-Jin Park",
            "vietnamese": "So-Jin Park"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Người phụ nữ nói: 'while I was directing yesterday's rehearsal... trying to give some directions to the actors', chứng tỏ cô là Đạo diễn (Director). Tra cứu bảng phân công trong hình, vị trí 'Director' tương ứng với Svetlana Popova."
      },
      {
        "num": 63,
        "question": "What problem do the speakers discuss?",
        "vietnameseQuestion": "Những người nói thảo luận về vấn đề gì?",
        "options": [
          {
            "key": "A",
            "text": "Some equipment is not working.",
            "vietnamese": "Một số thiết bị không hoạt động bình thường."
          },
          {
            "key": "B",
            "text": "Some costumes are not ready.",
            "vietnamese": "Một số trang phục chưa sẵn sàng."
          },
          {
            "key": "C",
            "text": "Some music is distracting.",
            "vietnamese": "Âm nhạc gây mất tập trung."
          },
          {
            "key": "D",
            "text": "An actor is late.",
            "vietnamese": "Một diễn viên bị muộn."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Người phụ nữ nói: 'One of the footlights at the front of the stage was flickering, which was distracting' (đèn chiếu sân khấu bị nhấp nháy, tức thiết bị hoạt động không tốt)."
      },
      {
        "num": 64,
        "question": "What will happen next week?",
        "vietnameseQuestion": "Điều gì sẽ xảy ra vào tuần tới?",
        "options": [
          {
            "key": "A",
            "text": "A playwright will attend a show.",
            "vietnamese": "Một nhà biên kịch sẽ tham dự buổi diễn."
          },
          {
            "key": "B",
            "text": "Publicity photos will be taken.",
            "vietnamese": "Các bức ảnh quảng bá sẽ được chụp."
          },
          {
            "key": "C",
            "text": "A play will open.",
            "vietnamese": "Một vở kịch sẽ công diễn ra mắt."
          },
          {
            "key": "D",
            "text": "A dress rehearsal will be held.",
            "vietnamese": "Một buổi tổng duyệt trang phục sẽ được tổ chức."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Người phụ nữ nói: 'I can't believe opening night is next week... it'll be great to have an audience' (đêm công diễn mở màn vở kịch diễn ra vào tuần tới)."
      }
    ],
    "vocabulary": [
      {
        "word": "rehearsal",
        "meaning": "buổi tập duyệt kịch/nhạc",
        "partOfSpeech": "n"
      },
      {
        "word": "footlight",
        "meaning": "đèn hắt dưới sàn sân khấu",
        "partOfSpeech": "n"
      },
      {
        "word": "flicker",
        "meaning": "nhấp nháy, chập chờn",
        "partOfSpeech": "v"
      },
      {
        "word": "distracting",
        "meaning": "gây xao nhãng, làm mất tập trung",
        "partOfSpeech": "adj"
      },
      {
        "word": "opening night",
        "meaning": "đêm diễn mở màn, đêm công diễn đầu tiên",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part3-65-67",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 65 - 67",
    "title": "Part 3 - Câu 65 - 67: Kỳ nghỉ dưỡng của công ty và hoạt động chèo thuyền kayak",
    "audioSrc": "/audio/test4_2024.mp3",
    "startTime": 1722.26,
    "endTime": 1806.44,
    "image": "/images/intensive/test4_2024/q65_67.png",
    "graphicImage": "/images/intensive/test4_2024/q65_67.png",
    "imageUrl": "/images/intensive/test4_2024/q65_67.png",
    "transcript": [
      {
        "id": "p3-65-l1",
        "speaker": "Man",
        "text": "Hey, Hiroko. I got the email invite to the company retreat. I'm surprised that it's in June this year instead of September.",
        "vietnamese": "Này Hiroko. Tôi đã nhận được thư mời qua email tham gia chuyến nghỉ dưỡng của công ty. Tôi ngạc nhiên là năm nay sự kiện diễn ra vào tháng 6 thay vì tháng 9."
      },
      {
        "id": "p3-65-l2",
        "speaker": "Woman",
        "text": "Yeah. We changed the dates so we could try out this venue. I toured it last month and was really impressed. The rooms are especially so comfortable. There weren't any openings in September though.",
        "vietnamese": "Đúng rồi. Chúng tôi đã đổi ngày để có thể trải nghiệm địa điểm này. Tôi đã đi khảo sát tháng trước và thực sự rất ấn tượng. Các phòng ốc ở đó đặc biệt vô cùng tiện nghi thoải mái. Có điều vào tháng 9 thì họ không còn chỗ trống."
      },
      {
        "id": "p3-65-l3",
        "speaker": "Man",
        "text": "I'm sure it'll be worth the change. Your team in human resources plans great events.",
        "vietnamese": "Tôi chắc chắn sự thay đổi này rất đáng giá. Đội ngũ nhân sự của cô luôn lên kế hoạch cho các sự kiện rất tuyệt vời."
      },
      {
        "id": "p3-65-l4",
        "speaker": "Woman",
        "text": "Here, I just pulled up their website. Take a look. Staff can choose one of these activities on the second day of the retreat.",
        "vietnamese": "Đây nè, tôi vừa mở trang web của họ lên. Anh xem đi. Nhân viên có thể chọn một trong các hoạt động này vào ngày thứ hai của chuyến nghỉ dưỡng."
      },
      {
        "id": "p3-65-l5",
        "speaker": "Man",
        "text": "I've never been kayaking. This looks like a good chance to try it.",
        "vietnamese": "Tôi chưa bao giờ đi chèo thuyền kayak cả. Đây có vẻ là một cơ hội tốt để trải nghiệm thử."
      }
    ],
    "questions": [
      {
        "num": 65,
        "question": "Why is the man surprised?",
        "vietnameseQuestion": "Tại sao người đàn ông lại ngạc nhiên?",
        "options": [
          {
            "key": "A",
            "text": "A new vacation policy was announced.",
            "vietnamese": "Một chính sách nghỉ phép mới đã được công bố."
          },
          {
            "key": "B",
            "text": "A group is larger than expected.",
            "vietnamese": "Đoàn người đông hơn dự kiến."
          },
          {
            "key": "C",
            "text": "A price has increased.",
            "vietnamese": "Giá cả đã tăng lên."
          },
          {
            "key": "D",
            "text": "A date has been changed.",
            "vietnamese": "Thời gian/ngày tổ chức đã bị thay đổi."
          }
        ],
        "correctAnswer": "D",
        "explanation": "Người đàn ông nói: 'I'm surprised that it's in June this year instead of September' và người phụ nữ xác nhận 'We changed the dates' (ngày tổ chức được đổi từ tháng 9 sang tháng 6)."
      },
      {
        "num": 66,
        "question": "What does the woman like about a venue?",
        "vietnameseQuestion": "Người phụ nữ thích điều gì ở địa điểm tổ chức?",
        "options": [
          {
            "key": "A",
            "text": "The comfortable rooms",
            "vietnamese": "Các phòng ốc tiện nghi thoải mái"
          },
          {
            "key": "B",
            "text": "The food selection",
            "vietnamese": "Sự lựa chọn đa dạng về ẩm thực"
          },
          {
            "key": "C",
            "text": "The views",
            "vietnamese": "Khung cảnh quan đẹp"
          },
          {
            "key": "D",
            "text": "The fitness center",
            "vietnamese": "Trung tâm tập thể hình"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Người phụ nữ khen ngợi: 'The rooms are especially so comfortable' (các phòng ốc đặc biệt rất thoải mái)."
      },
      {
        "num": 67,
        "question": "Look at the graphic. Who will lead the activity the man is interested in?",
        "vietnameseQuestion": "Nhìn vào biểu đồ/trang web. Ai sẽ dẫn dắt hoạt động mà người đàn ông quan tâm?",
        "options": [
          {
            "key": "A",
            "text": "Ketan Bora",
            "vietnamese": "Ketan Bora"
          },
          {
            "key": "B",
            "text": "Beatriz Romero",
            "vietnamese": "Beatriz Romero"
          },
          {
            "key": "C",
            "text": "Arnaud Fournier",
            "vietnamese": "Arnaud Fournier"
          },
          {
            "key": "D",
            "text": "Brandon Murray",
            "vietnamese": "Brandon Murray"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Người đàn ông nói: 'I've never been kayaking. This looks like a good chance to try it' (hoạt động chèo thuyền Kayak). Đối chiếu bảng hoạt động trên trang web trong hình, 'Kayaking led by Ketan Bora', do đó người hướng dẫn là Ketan Bora."
      }
    ],
    "vocabulary": [
      {
        "word": "retreat",
        "meaning": "chuyến nghỉ dưỡng tập thể của công ty",
        "partOfSpeech": "n"
      },
      {
        "word": "venue",
        "meaning": "địa điểm tổ chức sự kiện",
        "partOfSpeech": "n"
      },
      {
        "word": "opening",
        "meaning": "chỗ trống, phòng trống",
        "partOfSpeech": "n"
      },
      {
        "word": "kayaking",
        "meaning": "môn chèo thuyền kayak",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part3-68-70",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 68 - 70",
    "title": "Part 3 - Câu 68 - 70: Quay phim tài liệu tại địa điểm khai quật lâu đài cổ",
    "audioSrc": "/audio/test4_2024.mp3",
    "startTime": 1806.44,
    "endTime": 1899.86,
    "image": "/images/intensive/test4_2024/q68_70.png",
    "graphicImage": "/images/intensive/test4_2024/q68_70.png",
    "imageUrl": "/images/intensive/test4_2024/q68_70.png",
    "transcript": [
      {
        "id": "p3-68-l1",
        "speaker": "Man",
        "text": "Hi. You must be with the camera crew. I'm Hector, head archaeologist here at the Arno Castle dig site.",
        "vietnamese": "Xin chào. Chắc hẳn cô thuộc đoàn quay phim. Tôi là Hector, trưởng nhóm khảo cổ học tại địa điểm khai quật Lâu đài Arno."
      },
      {
        "id": "p3-68-l2",
        "speaker": "Woman",
        "text": "Nice to meet you. I'm Ling. Since it's our first day of filming for our TV documentary special, we're mainly going to capture general footage of your team at work.",
        "vietnamese": "Rất vui được gặp anh. Tôi là Ling. Vì đây là ngày quay phim đầu tiên cho chương trình tài liệu truyền hình đặc biệt của chúng tôi, nên chúng tôi chủ yếu sẽ ghi lại những cảnh quay chung về đội ngũ của anh đang làm việc."
      },
      {
        "id": "p3-68-l3",
        "speaker": "Man",
        "text": "Great. We're working in Quadrant 2 today. We've been finding lots of pottery, so you may capture us unearthing more.",
        "vietnamese": "Tuyệt quá. Hôm nay chúng tôi đang làm việc ở Phân khu 2. Chúng tôi đã tìm thấy rất nhiều đồ gốm, nên cô có thể ghi lại cảnh chúng tôi khai quật được thêm nhiều món đồ nữa."
      },
      {
        "id": "p3-68-l4",
        "speaker": "Woman",
        "text": "I see. This excavation has been a lengthy process, right?",
        "vietnamese": "Tôi hiểu rồi. Cuộc khai quật này là một quá trình kéo dài, đúng không anh?"
      },
      {
        "id": "p3-68-l5",
        "speaker": "Man",
        "text": "It has. We'd actually hoped to be further along. But there have been lots of thunderstorms lately which have slowed things down.",
        "vietnamese": "Đúng vậy. Thực ra chúng tôi đã từng hy vọng sẽ tiến xa hơn. Nhưng dạo gần đây có nhiều cơn dông bão làm mọi thứ bị chậm lại."
      }
    ],
    "questions": [
      {
        "num": 68,
        "question": "What is the conversation mostly about?",
        "vietnameseQuestion": "Đoạn hội thoại chủ yếu nói về điều gì?",
        "options": [
          {
            "key": "A",
            "text": "Organizing an exhibit",
            "vietnamese": "Tổ chức một buổi triển lãm"
          },
          {
            "key": "B",
            "text": "Arranging a public tour",
            "vietnamese": "Sắp xếp một chuyến tham quan công cộng"
          },
          {
            "key": "C",
            "text": "Filming a documentary",
            "vietnamese": "Quay một bộ phim tài liệu"
          },
          {
            "key": "D",
            "text": "Requesting financial support",
            "vietnamese": "Yêu cầu hỗ trợ tài chính"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Người phụ nữ giới thiệu: 'Since it's our first day of filming for our TV documentary special, we're mainly going to capture general footage of your team at work' (quay phim tài liệu truyền hình về hoạt động khai quật)."
      },
      {
        "num": 69,
        "question": "Look at the graphic. Which part of the castle is being excavated today?",
        "vietnameseQuestion": "Nhìn vào sơ đồ. Phần nào của lâu đài đang được khai quật hôm nay?",
        "options": [
          {
            "key": "A",
            "text": "The garden",
            "vietnamese": "Khu vườn"
          },
          {
            "key": "B",
            "text": "The kitchen",
            "vietnamese": "Nhà bếp"
          },
          {
            "key": "C",
            "text": "The tower",
            "vietnamese": "Tòa tháp"
          },
          {
            "key": "D",
            "text": "The great hall",
            "vietnamese": "Đại sảnh"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Người đàn ông cho biết: 'We're working in Quadrant 2 today'. Quan sát sơ đồ lâu đài, Quadrant 2 chính là 'Kitchen' (Nhà bếp)."
      },
      {
        "num": 70,
        "question": "According to the man, why has some work been delayed?",
        "vietnameseQuestion": "Theo người đàn ông, tại sao một phần công việc bị trì hoãn?",
        "options": [
          {
            "key": "A",
            "text": "An archaeological team is very small.",
            "vietnamese": "Đội ngũ khảo cổ rất nhỏ."
          },
          {
            "key": "B",
            "text": "Weather conditions have been poor.",
            "vietnamese": "Điều kiện thời tiết xấu/bất lợi."
          },
          {
            "key": "C",
            "text": "A source of funding was unavailable.",
            "vietnamese": "Nguồn tài trợ không có sẵn."
          },
          {
            "key": "D",
            "text": "New volunteers required special training.",
            "vietnamese": "Các tình nguyện viên mới cần đào tạo đặc biệt."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Người đàn ông giải thích lý do chậm tiến độ: 'there have been lots of thunderstorms lately which have slowed things down' (nhiều cơn dông bão làm chậm trễ tiến độ, tức thời tiết xấu)."
      }
    ],
    "vocabulary": [
      {
        "word": "archaeologist",
        "meaning": "nhà khảo cổ học",
        "partOfSpeech": "n"
      },
      {
        "word": "dig site",
        "meaning": "địa điểm khai quật",
        "partOfSpeech": "n"
      },
      {
        "word": "footage",
        "meaning": "cảnh quay, đoạn phim ghi hình",
        "partOfSpeech": "n"
      },
      {
        "word": "pottery",
        "meaning": "đồ gốm",
        "partOfSpeech": "n"
      },
      {
        "word": "unearth",
        "meaning": "khai quật, đào bới phát hiện",
        "partOfSpeech": "v"
      },
      {
        "word": "excavation",
        "meaning": "sự khai quật khảo cổ",
        "partOfSpeech": "n"
      },
      {
        "word": "thunderstorm",
        "meaning": "cơn dông bão sấm sét",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part4-71-73",
    "part": 4,
    "partTitle": "Part 4: Bài nói ngắn",
    "questionRange": "Câu 71 - 73",
    "title": "Part 4 - Câu 71 - 73: Thông báo dịch vụ cung cấp điện và xử lý sự cố",
    "audioSrc": "/audio/test4_2024.mp3",
    "startTime": 1899.86,
    "endTime": 2016.15,
    "transcript": [
      {
        "id": "p4-71-l1",
        "speaker": "Speaker",
        "text": "Hello. You've reached Imperial Electric and Gas, the number-one power company in the Northeast region.",
        "vietnamese": "Xin chào. Quý khách đã liên hệ tới Imperial Electric and Gas, công ty năng lượng số một tại khu vực Đông Bắc."
      },
      {
        "id": "p4-71-l2",
        "speaker": "Speaker",
        "text": "Please hold for the next available representative.",
        "vietnamese": "Xin vui lòng giữ máy để kết nối với điện thoại viên tiếp theo."
      },
      {
        "id": "p4-71-l3",
        "speaker": "Speaker",
        "text": "If you're calling about reported electrical outages in Cedar Springs, rest assured that technicians are on site now and services will be fully restored this afternoon.",
        "vietnamese": "Nếu quý khách gọi đến để báo về sự cố mất điện tại Cedar Springs, xin hãy yên tâm rằng các kỹ thuật viên hiện đã có mặt tại hiện trường và dịch vụ sẽ được khôi phục hoàn toàn vào chiều nay."
      },
      {
        "id": "p4-71-l4",
        "speaker": "Speaker",
        "text": "Or if you've recently moved and are calling to either start or stop services, please visit our website to fill out a form to have a work order completed. Thank you.",
        "vietnamese": "Hoặc nếu quý khách vừa mới chuyển nhà và gọi đến để đăng ký mới hoặc tạm ngừng dịch vụ, xin vui lòng truy cập trang web của chúng tôi để điền vào biểu mẫu để lệnh yêu cầu dịch vụ được xử lý hoàn tất. Xin cảm ơn quý khách."
      }
    ],
    "questions": [
      {
        "num": 71,
        "question": "What kind of business recorded the message?",
        "vietnameseQuestion": "Doanh nghiệp loại nào đã ghi âm lời nhắn này?",
        "options": [
          {
            "key": "A",
            "text": "A city planning office",
            "vietnamese": "Một văn phòng quy hoạch đô thị"
          },
          {
            "key": "B",
            "text": "A cybersecurity firm",
            "vietnamese": "Một công ty an ninh mạng"
          },
          {
            "key": "C",
            "text": "A utility company",
            "vietnamese": "Một công ty dịch vụ tiện ích công cộng (điện, nước, khí đốt)"
          },
          {
            "key": "D",
            "text": "An electronics repair shop",
            "vietnamese": "Một cửa hàng sửa chữa đồ điện tử"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Người nói giới thiệu: 'You've reached Imperial Electric and Gas, the number-one power company...' (công ty điện và khí đốt, tức công ty dịch vụ tiện ích công cộng - utility company)."
      },
      {
        "num": 72,
        "question": "What does the speaker say will happen this afternoon?",
        "vietnameseQuestion": "Người nói cho biết điều gì sẽ xảy ra vào chiều nay?",
        "options": [
          {
            "key": "A",
            "text": "A problem will be resolved.",
            "vietnamese": "Một vấn đề sẽ được giải quyết."
          },
          {
            "key": "B",
            "text": "A shipment will be delivered.",
            "vietnamese": "Một lô hàng sẽ được giao."
          },
          {
            "key": "C",
            "text": "Some software will be updated.",
            "vietnamese": "Một số phần mềm sẽ được cập nhật."
          },
          {
            "key": "D",
            "text": "Some refreshments will be offered.",
            "vietnamese": "Một số món ăn nhẹ sẽ được phục vụ."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Người nói thông báo về sự cố mất điện: 'technicians are on site now and services will be fully restored this afternoon' (sự cố mất điện sẽ được xử lý, dịch vụ điện khôi phục hoàn toàn vào chiều nay)."
      },
      {
        "num": 73,
        "question": "What does the speaker say is available on a Web site?",
        "vietnameseQuestion": "Người nói cho biết thứ gì có sẵn trên trang web?",
        "options": [
          {
            "key": "A",
            "text": "Customer reviews",
            "vietnamese": "Đánh giá của khách hàng"
          },
          {
            "key": "B",
            "text": "Work order forms",
            "vietnamese": "Biểu mẫu yêu cầu xử lý công việc/dịch vụ"
          },
          {
            "key": "C",
            "text": "Business hours",
            "vietnamese": "Giờ làm việc"
          },
          {
            "key": "D",
            "text": "Product manuals",
            "vietnamese": "Sách hướng dẫn sử dụng sản phẩm"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Người nói hướng dẫn: 'please visit our website to fill out a form to have a work order completed' (truy cập trang web điền biểu mẫu lệnh yêu cầu dịch vụ)."
      }
    ],
    "vocabulary": [
      {
        "word": "utility company",
        "meaning": "công ty dịch vụ công ích (điện, nước, gas)",
        "partOfSpeech": "n"
      },
      {
        "word": "electrical outage",
        "meaning": "sự cố mất điện, cúp điện",
        "partOfSpeech": "n"
      },
      {
        "word": "rest assured",
        "meaning": "hãy yên tâm, tin tưởng rằng",
        "partOfSpeech": "v"
      },
      {
        "word": "on site",
        "meaning": "có mặt tại chỗ/tại hiện trường",
        "partOfSpeech": "adj/adv"
      },
      {
        "word": "restore",
        "meaning": "khôi phục lại",
        "partOfSpeech": "v"
      },
      {
        "word": "work order",
        "meaning": "phiếu yêu cầu công việc/dịch vụ",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part4-74-76",
    "part": 4,
    "partTitle": "Part 4: Bài nói ngắn",
    "questionRange": "Câu 74 - 76",
    "title": "Part 4 - Câu 74 - 76: Cài đặt phần mềm bảo mật nội bộ công ty",
    "audioSrc": "/audio/test4_2024.mp3",
    "startTime": 2016.15,
    "endTime": 2082.89,
    "transcript": [
      {
        "id": "p4-74-l1",
        "speaker": "Speaker",
        "text": "This weekend we'll be installing new security software on our internal servers.",
        "vietnamese": "Cuối tuần này chúng ta sẽ cài đặt phần mềm bảo mật mới trên các máy chủ nội bộ của công ty."
      },
      {
        "id": "p4-74-l2",
        "speaker": "Speaker",
        "text": "This is a little more involved than the routine update. We need to have an extra layer of protection on our customers' personal data.",
        "vietnamese": "Việc này phức tạp hơn một chút so với các đợt cập nhật định kỳ. Chúng ta cần có thêm một lớp bảo vệ tăng cường cho dữ liệu cá nhân của khách hàng."
      },
      {
        "id": "p4-74-l3",
        "speaker": "Speaker",
        "text": "So we're all being asked to help prepare for this event. Before we leave the office on Friday, we'll need to shut down our computers to enable the patch.",
        "vietnamese": "Vì vậy tất cả chúng ta đều được yêu cầu hỗ trợ chuẩn bị cho sự kiện này. Trước khi rời văn phòng vào thứ Sáu, chúng ta sẽ cần phải tắt máy tính để bản vá có thể hoạt động."
      },
      {
        "id": "p4-74-l4",
        "speaker": "Speaker",
        "text": "Martin Fuentes is here to explain how we'll finish the installation on our devices when we come in on Monday.",
        "vietnamese": "Martin Fuentes có mặt ở đây để giải thích cách chúng ta sẽ hoàn tất việc cài đặt trên các thiết bị của mình khi đi làm vào thứ Hai."
      }
    ],
    "questions": [
      {
        "num": 74,
        "question": "According to the speaker, why is a change being made?",
        "vietnameseQuestion": "Theo người nói, tại sao sự thay đổi này lại được thực hiện?",
        "options": [
          {
            "key": "A",
            "text": "To keep track of expenses",
            "vietnamese": "Để theo dõi các khoản chi phí"
          },
          {
            "key": "B",
            "text": "To help a business expand",
            "vietnamese": "Để giúp doanh nghiệp mở rộng quy mô"
          },
          {
            "key": "C",
            "text": "To improve security",
            "vietnamese": "Để nâng cao tính bảo mật an toàn"
          },
          {
            "key": "D",
            "text": "To attract job applicants",
            "vietnamese": "Để thu hút các ứng viên xin việc"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Người nói giải thích: 'installing new security software... We need to have an extra layer of protection on our customers' personal data' (cài đặt phần mềm bảo mật để tăng cường bảo vệ dữ liệu khách hàng, nâng cao an ninh bảo mật)."
      },
      {
        "num": 75,
        "question": "What are the listeners asked to do?",
        "vietnameseQuestion": "Những người nghe được yêu cầu làm điều gì?",
        "options": [
          {
            "key": "A",
            "text": "Shut down their computers",
            "vietnamese": "Tắt máy tính của họ"
          },
          {
            "key": "B",
            "text": "Reduce their expenses",
            "vietnamese": "Cắt giảm chi tiêu chi phí"
          },
          {
            "key": "C",
            "text": "Consult with their department managers",
            "vietnamese": "Tham khảo ý kiến người quản lý phòng ban"
          },
          {
            "key": "D",
            "text": "Create an equipment inventory",
            "vietnamese": "Lập bản kiểm kê trang thiết bị"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Người nói yêu cầu: 'Before we leave the office on Friday, we'll need to shut down our computers to enable the patch' (tắt máy vi tính trước khi ra về vào thứ Sáu)."
      },
      {
        "num": 76,
        "question": "What department does Martin Fuentes most likely work in?",
        "vietnameseQuestion": "Martin Fuentes có khả năng cao nhất làm việc tại phòng ban nào?",
        "options": [
          {
            "key": "A",
            "text": "Legal",
            "vietnamese": "Phòng Pháp chế"
          },
          {
            "key": "B",
            "text": "Marketing",
            "vietnamese": "Phòng Tiếp thị"
          },
          {
            "key": "C",
            "text": "Human Resources",
            "vietnamese": "Phòng Nhân sự"
          },
          {
            "key": "D",
            "text": "Information Technology",
            "vietnamese": "Phòng Công nghệ Thông tin (IT)"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Người nói giới thiệu: 'Martin Fuentes is here to explain how we'll finish the installation on our devices' (hướng dẫn hoàn tất việc cài đặt phần mềm trên thiết bị máy móc, cho thấy Martin thuộc phòng IT)."
      }
    ],
    "vocabulary": [
      {
        "word": "internal server",
        "meaning": "máy chủ nội bộ",
        "partOfSpeech": "n"
      },
      {
        "word": "routine update",
        "meaning": "bản cập nhật định kỳ thường xuyên",
        "partOfSpeech": "n"
      },
      {
        "word": "layer of protection",
        "meaning": "lớp bảo vệ, tầng an ninh",
        "partOfSpeech": "n"
      },
      {
        "word": "patch",
        "meaning": "bản vá lỗi phần mềm",
        "partOfSpeech": "n"
      },
      {
        "word": "shut down",
        "meaning": "tắt nguồn máy tính",
        "partOfSpeech": "v"
      }
    ]
  },
  {
    "id": "part4-77-79",
    "part": 4,
    "partTitle": "Part 4: Bài nói ngắn",
    "questionRange": "Câu 77 - 79",
    "title": "Part 4 - Câu 77 - 79: Thi công mở rộng đường và xe đưa đón nhân viên",
    "audioSrc": "/audio/test4_2024.mp3",
    "startTime": 2082.89,
    "endTime": 2163.98,
    "transcript": [
      {
        "id": "p4-77-l1",
        "speaker": "Speaker",
        "text": "Let me remind everyone that starting on Monday, the main entrance to the office building will be inaccessible while the road is being widened and repaved.",
        "vietnamese": "Tôi xin nhắc mọi người rằng bắt đầu từ thứ Hai, lối vào chính của tòa nhà văn phòng sẽ không thể tiếp cận được trong khi con đường đang được mở rộng và rải lại nhựa đường."
      },
      {
        "id": "p4-77-l2",
        "speaker": "Speaker",
        "text": "This also means that our usual parking lot won't be available, but don't worry.",
        "vietnamese": "Điều này cũng có nghĩa là bãi đỗ xe thường ngày của chúng ta sẽ không thể sử dụng, nhưng xin đừng quá lo lắng."
      },
      {
        "id": "p4-77-l3",
        "speaker": "Speaker",
        "text": "There's plenty of space in the parking garage next to the J building.",
        "vietnamese": "Còn rất nhiều chỗ trống trong nhà để xe bên cạnh tòa nhà J."
      },
      {
        "id": "p4-77-l4",
        "speaker": "Speaker",
        "text": "For your convenience, the company will be providing a van service that will run every 15 minutes until the project is completed. The van will operate between 7:00 and 9:00 AM, and then again between 4:00 and 6:00 PM.",
        "vietnamese": "Để thuận tiện cho các bạn, công ty sẽ cung cấp dịch vụ xe trung chuyển chạy 15 phút một chuyến cho đến khi dự án hoàn thành. Xe sẽ hoạt động từ 7:00 đến 9:00 sáng, và sau đó từ 4:00 đến 6:00 chiều."
      },
      {
        "id": "p4-77-l5",
        "speaker": "Speaker",
        "text": "We'll be posting project updates on our website, so be sure to check it regularly.",
        "vietnamese": "Chúng tôi sẽ đăng tải thông tin cập nhật dự án trên trang web của công ty, vì vậy hãy nhớ kiểm tra thường xuyên nhé."
      }
    ],
    "questions": [
      {
        "num": 77,
        "question": "According to the speaker, what will begin on Monday?",
        "vietnameseQuestion": "Theo người nói, điều gì sẽ bắt đầu vào thứ Hai?",
        "options": [
          {
            "key": "A",
            "text": "A seasonal internship program",
            "vietnamese": "Một chương trình thực tập theo mùa"
          },
          {
            "key": "B",
            "text": "Road construction",
            "vietnamese": "Công trình thi công/làm đường"
          },
          {
            "key": "C",
            "text": "Landscaping maintenance",
            "vietnamese": "Bảo dưỡng cảnh quan cây xanh"
          },
          {
            "key": "D",
            "text": "An equipment upgrade",
            "vietnamese": "Nâng cấp trang thiết bị"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Người nói cho biết: 'starting on Monday, the main entrance to the office building will be inaccessible while the road is being widened and repaved' (bắt đầu từ thứ Hai đường sẽ được mở rộng và rải nhựa, tức công trình thi công đường)."
      },
      {
        "num": 78,
        "question": "What will the company provide for the listeners?",
        "vietnameseQuestion": "Công ty sẽ cung cấp điều gì cho người nghe?",
        "options": [
          {
            "key": "A",
            "text": "Free lunch",
            "vietnamese": "Bữa trưa miễn phí"
          },
          {
            "key": "B",
            "text": "New identification badges",
            "vietnamese": "Thẻ nhận diện/thẻ nhân viên mới"
          },
          {
            "key": "C",
            "text": "Parking passes",
            "vietnamese": "Vé gửi xe"
          },
          {
            "key": "D",
            "text": "Transportation",
            "vietnamese": "Phương tiện đi lại/xe đưa đón"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Người nói thông báo: 'the company will be providing a van service that will run every 15 minutes' (cung cấp dịch vụ xe van đưa đón, tức phương tiện đi lại - transportation)."
      },
      {
        "num": 79,
        "question": "Why should the listeners visit a Web site?",
        "vietnameseQuestion": "Tại sao người nghe nên truy cập vào trang web?",
        "options": [
          {
            "key": "A",
            "text": "To download a map",
            "vietnamese": "Để tải về một bản đồ"
          },
          {
            "key": "B",
            "text": "To post feedback",
            "vietnamese": "Để gửi ý kiến phản hồi"
          },
          {
            "key": "C",
            "text": "To fill out a registration form",
            "vietnamese": "Để điền vào mẫu đăng ký"
          },
          {
            "key": "D",
            "text": "To read project updates",
            "vietnamese": "Để xem thông tin cập nhật về dự án"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Người nói dặn dò: 'We'll be posting project updates on our website, so be sure to check it regularly' (xem các tin tức cập nhật về dự án trên website)."
      }
    ],
    "vocabulary": [
      {
        "word": "inaccessible",
        "meaning": "không thể tiếp cận được, bị chặn lại",
        "partOfSpeech": "adj"
      },
      {
        "word": "widen",
        "meaning": "mở rộng",
        "partOfSpeech": "v"
      },
      {
        "word": "repave",
        "meaning": "rải lại mặt đường nhựa",
        "partOfSpeech": "v"
      },
      {
        "word": "parking garage",
        "meaning": "nhà để xe cao tầng/trong nhà",
        "partOfSpeech": "n"
      },
      {
        "word": "van service",
        "meaning": "dịch vụ xe van đưa đón trung chuyển",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part4-80-82",
    "part": 4,
    "partTitle": "Part 4: Bài nói ngắn",
    "questionRange": "Câu 80 - 82",
    "title": "Part 4 - Câu 80 - 82: Đặt phòng khách sạn cho khách hàng công ty",
    "audioSrc": "/audio/test4_2024.mp3",
    "startTime": 2163.98,
    "endTime": 2239.11,
    "transcript": [
      {
        "id": "p4-80-l1",
        "speaker": "Speaker",
        "text": "Hi, Asako. I'm following up about the hotel you asked me to book for our client visiting from India next month.",
        "vietnamese": "Chào Asako. Tôi gọi điện để tiếp tục trao đổi về khách sạn mà bạn nhờ tôi đặt cho đối tác khách hàng từ Ấn Độ sang thăm vào tháng tới."
      },
      {
        "id": "p4-80-l2",
        "speaker": "Speaker",
        "text": "You wanted to reserve a room for her at the Maple Lodge, but it's fully booked that week.",
        "vietnamese": "Bạn muốn đặt một phòng cho cô ấy tại Maple Lodge, nhưng khách sạn đó đã kín phòng trong suốt tuần đó rồi."
      },
      {
        "id": "p4-80-l3",
        "speaker": "Speaker",
        "text": "So I've been looking at other hotels in the area, and there is one on Jefferson Avenue.",
        "vietnamese": "Vì vậy tôi đã tìm hiểu các khách sạn khác trong khu vực, và có một khách sạn trên Đại lộ Jefferson."
      },
      {
        "id": "p4-80-l4",
        "speaker": "Speaker",
        "text": "It's a little farther from our office, but it looks like a nice place.",
        "vietnamese": "Nó cách văn phòng chúng ta hơi xa một chút, nhưng trông có vẻ là một nơi rất đẹp."
      },
      {
        "id": "p4-80-l5",
        "speaker": "Speaker",
        "text": "They also have a complimentary shuttle bus that can take our guest back and forth from our office. Call me and let me know what you think.",
        "vietnamese": "Họ còn có xe buýt đưa đón miễn phí có thể chở khách của chúng ta đi lại hai chiều giữa khách sạn và văn phòng. Hãy gọi lại cho tôi và cho tôi biết bạn nghĩ sao nhé."
      }
    ],
    "questions": [
      {
        "num": 80,
        "question": "What is the speaker preparing for?",
        "vietnameseQuestion": "Người nói đang chuẩn bị cho điều gì?",
        "options": [
          {
            "key": "A",
            "text": "A client visit",
            "vietnamese": "Một chuyến ghé thăm của khách hàng/đối tác"
          },
          {
            "key": "B",
            "text": "A branch opening",
            "vietnamese": "Khai trương một chi nhánh"
          },
          {
            "key": "C",
            "text": "A job fair",
            "vietnamese": "Một hội chợ việc làm"
          },
          {
            "key": "D",
            "text": "An equipment upgrade",
            "vietnamese": "Nâng cấp trang thiết bị"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Người nói nêu lý do đặt phòng: 'about the hotel you asked me to book for our client visiting from India next month' (chuẩn bị đón đối tác khách hàng đến thăm công ty)."
      },
      {
        "num": 81,
        "question": "Why does the speaker say, \"there is one on Jefferson Avenue\"?",
        "vietnameseQuestion": "Tại sao người nói lại nói: \"có một khách sạn trên Đại lộ Jefferson\"?",
        "options": [
          {
            "key": "A",
            "text": "To express surprise",
            "vietnamese": "Để bày tỏ sự ngạc nhiên"
          },
          {
            "key": "B",
            "text": "To correct some information",
            "vietnamese": "Để đính chính một số thông tin"
          },
          {
            "key": "C",
            "text": "To complain about a decision",
            "vietnamese": "Để phàn nàn về một quyết định"
          },
          {
            "key": "D",
            "text": "To recommend an alternative",
            "vietnamese": "Để đề xuất một phương án thay thế"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Khách sạn dự kiến ban đầu (Maple Lodge) đã hết phòng ('fully booked'), nên người nói giới thiệu khách sạn trên Đại lộ Jefferson làm giải pháp thay thế (recommend an alternative)."
      },
      {
        "num": 82,
        "question": "What additional service is mentioned?",
        "vietnameseQuestion": "Dịch vụ bổ sung nào được đề cập đến?",
        "options": [
          {
            "key": "A",
            "text": "A catered meal",
            "vietnamese": "Một bữa ăn phục vụ tận nơi"
          },
          {
            "key": "B",
            "text": "A shuttle bus",
            "vietnamese": "Một xe buýt đưa đón tuyến ngắn"
          },
          {
            "key": "C",
            "text": "Technical support",
            "vietnamese": "Hỗ trợ kỹ thuật"
          },
          {
            "key": "D",
            "text": "Secure storage",
            "vietnamese": "Kho lưu trữ an toàn"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Người nói cho biết khách sạn có dịch vụ: 'They also have a complimentary shuttle bus that can take our guest back and forth' (xe buýt đưa đón - shuttle bus)."
      }
    ],
    "vocabulary": [
      {
        "word": "follow up",
        "meaning": "theo sát, tiếp tục giải quyết vấn đề",
        "partOfSpeech": "v"
      },
      {
        "word": "fully booked",
        "meaning": "đã kín chỗ, hết phòng",
        "partOfSpeech": "adj"
      },
      {
        "word": "complimentary",
        "meaning": "miễn phí kèm theo",
        "partOfSpeech": "adj"
      },
      {
        "word": "shuttle bus",
        "meaning": "xe buýt đưa đón trung chuyển",
        "partOfSpeech": "n"
      },
      {
        "word": "back and forth",
        "meaning": "đi đi lại lại, hai chiều",
        "partOfSpeech": "idiom"
      }
    ]
  },
  {
    "id": "part4-83-85",
    "part": 4,
    "partTitle": "Part 4: Bài nói ngắn",
    "questionRange": "Câu 83 - 85",
    "title": "Part 4 - Câu 83 - 85: Dịch vụ theo dõi đơn hàng thời gian thực",
    "audioSrc": "/audio/test4_2024.mp3",
    "startTime": 2239.11,
    "endTime": 2331.37,
    "transcript": [
      {
        "id": "p4-83-l1",
        "speaker": "Speaker",
        "text": "I'd like to start by giving everyone an update on our latest project.",
        "vietnamese": "Tôi muốn bắt đầu bằng việc cung cấp cho mọi người thông tin cập nhật về dự án mới nhất của chúng ta."
      },
      {
        "id": "p4-83-l2",
        "speaker": "Speaker",
        "text": "As you know, in order to stay on top as a leading shipping company, we need to continually make changes to meet our customers' expectations.",
        "vietnamese": "Như các bạn đã biết, để duy trì vị thế dẫn đầu trong ngành vận tải giao hàng, chúng ta cần liên tục đổi mới để đáp ứng kỳ vọng của khách hàng."
      },
      {
        "id": "p4-83-l3",
        "speaker": "Speaker",
        "text": "Since our customers prefer doing almost everything digitally, we're going to introduce a new delivery tracking service.",
        "vietnamese": "Vì khách hàng của chúng ta thích làm hầu như mọi thứ trên nền tảng kỹ thuật số, chúng ta sắp ra mắt một dịch vụ theo dõi việc giao hàng mới."
      },
      {
        "id": "p4-83-l4",
        "speaker": "Speaker",
        "text": "By using a smartphone application, customers will be able to see where their package is in real time.",
        "vietnamese": "Bằng cách sử dụng ứng dụng trên điện thoại thông minh, khách hàng sẽ có thể thấy bưu kiện của họ đang ở đâu theo thời gian thực."
      },
      {
        "id": "p4-83-l5",
        "speaker": "Speaker",
        "text": "Of course, implementing this will be a major project for us, and will take place over the coming year. So next month, we'll begin working with developers from XKP Software on creating this tracking service.",
        "vietnamese": "Tất nhiên, việc triển khai điều này sẽ là một dự án lớn của chúng ta, và sẽ diễn ra trong suốt năm tới. Vì vậy vào tháng tới, chúng ta sẽ bắt đầu hợp tác với các nhà phát triển từ XKP Software để cùng tạo ra dịch vụ theo dõi này."
      }
    ],
    "questions": [
      {
        "num": 83,
        "question": "According to the speaker, why are some changes needed?",
        "vietnameseQuestion": "Theo người nói, tại sao một số thay đổi lại cần thiết?",
        "options": [
          {
            "key": "A",
            "text": "To retain employees",
            "vietnamese": "Để giữ chân nhân viên"
          },
          {
            "key": "B",
            "text": "To attract investors",
            "vietnamese": "Để thu hút các nhà đầu tư"
          },
          {
            "key": "C",
            "text": "To satisfy customers",
            "vietnamese": "Để làm hài lòng / đáp ứng mong muốn của khách hàng"
          },
          {
            "key": "D",
            "text": "To increase productivity",
            "vietnamese": "Để gia tăng năng suất làm việc"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Người nói chỉ rõ: 'we need to continually make changes to meet our customers' expectations' (thay đổi để đáp ứng kỳ vọng của khách hàng, tức làm hài lòng khách hàng - satisfy customers)."
      },
      {
        "num": 84,
        "question": "What additional service does the company plan to offer?",
        "vietnameseQuestion": "Công ty dự định cung cấp thêm dịch vụ nào?",
        "options": [
          {
            "key": "A",
            "text": "Free product returns",
            "vietnamese": "Đổi trả hàng miễn phí"
          },
          {
            "key": "B",
            "text": "Expedited bulk shipping",
            "vietnamese": "Giao hàng số lượng lớn hỏa tốc"
          },
          {
            "key": "C",
            "text": "Pickup at self-service kiosks",
            "vietnamese": "Nhận hàng tại các ki-ốt tự phục vụ"
          },
          {
            "key": "D",
            "text": "Real-time package tracking",
            "vietnamese": "Theo dõi bưu kiện theo thời gian thực"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Người nói cho biết: 'customers will be able to see where their package is in real time' (theo dõi bưu kiện theo thời gian thực trên ứng dụng điện thoại)."
      },
      {
        "num": 85,
        "question": "According to the speaker, what will begin next month?",
        "vietnameseQuestion": "Theo người nói, điều gì sẽ bắt đầu vào tháng tới?",
        "options": [
          {
            "key": "A",
            "text": "A workshop series",
            "vietnamese": "Một chuỗi hội thảo chuyên đề"
          },
          {
            "key": "B",
            "text": "A new corporate policy",
            "vietnamese": "Một chính sách công ty mới"
          },
          {
            "key": "C",
            "text": "A land development project",
            "vietnamese": "Một dự án phát triển đất đai"
          },
          {
            "key": "D",
            "text": "A business collaboration",
            "vietnamese": "Một sự hợp tác kinh doanh"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Người nói thông báo: 'So next month, we'll begin working with developers from XKP Software on creating this tracking service' (bắt đầu hợp tác làm việc cùng đối tác phát triển phần mềm XKP Software)."
      }
    ],
    "vocabulary": [
      {
        "word": "stay on top",
        "meaning": "giữ vững vị trí dẫn đầu",
        "partOfSpeech": "phrase"
      },
      {
        "word": "expectation",
        "meaning": "kỳ vọng, mong đợi",
        "partOfSpeech": "n"
      },
      {
        "word": "real time",
        "meaning": "thời gian thực, tức thời",
        "partOfSpeech": "n"
      },
      {
        "word": "implement",
        "meaning": "triển khai thực hiện",
        "partOfSpeech": "v"
      },
      {
        "word": "developer",
        "meaning": "nhà phát triển phần mềm",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part4-86-88",
    "part": 4,
    "partTitle": "Part 4: Bài nói ngắn",
    "questionRange": "Câu 86 - 88",
    "title": "Part 4 - Câu 86 - 88: Tham quan hậu trường đài truyền hình",
    "audioSrc": "/audio/test4_2024.mp3",
    "startTime": 2331.37,
    "endTime": 2405.62,
    "transcript": [
      {
        "id": "p4-86-l1",
        "speaker": "Speaker",
        "text": "I'm so happy we got the exclusive video footage of the Mayor's response today. We were able to beat the other networks in getting that interview to the public.",
        "vietnamese": "Tôi rất vui vì chúng ta đã có được những cảnh quay video độc quyền về phản hồi của Thị trưởng ngày hôm nay. Chúng ta đã đánh bại các đài truyền hình khác để đưa buổi phỏng vấn đó đến với công chúng đầu tiên."
      },
      {
        "id": "p4-86-l2",
        "speaker": "Speaker",
        "text": "I wanted to give you all a heads-up that next month we'll be providing a behind-the-scenes tour for students who are exploring our field as a potential career path.",
        "vietnamese": "Tôi muốn báo trước cho mọi người biết rằng vào tháng tới chúng ta sẽ tổ chức một chuyến tham quan hậu trường cho các sinh viên đang tìm hiểu về lĩnh vực của chúng ta như một định hướng nghề nghiệp tiềm năng."
      },
      {
        "id": "p4-86-l3",
        "speaker": "Speaker",
        "text": "They'll see things like the assignment coordination desk, our studios, and the control room.",
        "vietnamese": "Các bạn sinh viên sẽ được xem những khu vực như bàn điều phối tác nghiệp, các trường quay và phòng điều khiển trung tâm của chúng ta."
      },
      {
        "id": "p4-86-l4",
        "speaker": "Speaker",
        "text": "I'm looking for a few volunteers who can spare an hour of their time to do this. Please email me if you're interested.",
        "vietnamese": "Tôi đang tìm một vài tình nguyện viên có thể dành ra một giờ để hỗ trợ công việc này. Xin vui lòng gửi email cho tôi nếu các bạn quan tâm."
      }
    ],
    "questions": [
      {
        "num": 86,
        "question": "What industry does the speaker most likely work in?",
        "vietnameseQuestion": "Người nói có khả năng cao nhất làm việc trong ngành công nghiệp nào?",
        "options": [
          {
            "key": "A",
            "text": "Civil service",
            "vietnamese": "Công chức nhà nước"
          },
          {
            "key": "B",
            "text": "Hospitality",
            "vietnamese": "Ngành khách sạn nhà hàng"
          },
          {
            "key": "C",
            "text": "Media",
            "vietnamese": "Ngành truyền thông / truyền hình"
          },
          {
            "key": "D",
            "text": "Architecture",
            "vietnamese": "Ngành kiến trúc"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Người nói nhắc đến 'video footage', 'interview', 'other networks' (các đài truyền hình), 'studios' (trường quay) và 'control room' (phòng điều khiển phát sóng), cho thấy họ làm việc trong ngành truyền thông (Media)."
      },
      {
        "num": 87,
        "question": "What is planned for next month?",
        "vietnameseQuestion": "Điều gì được lên kế hoạch cho tháng tới?",
        "options": [
          {
            "key": "A",
            "text": "A retirement luncheon",
            "vietnamese": "Một bữa trưa chia tay nghỉ hưu"
          },
          {
            "key": "B",
            "text": "An employee-performance review",
            "vietnamese": "Một đợt đánh giá hiệu suất nhân viên"
          },
          {
            "key": "C",
            "text": "A computer-system upgrade",
            "vietnamese": "Nâng cấp hệ thống máy vi tính"
          },
          {
            "key": "D",
            "text": "A tour of a facility",
            "vietnamese": "Một chuyến tham quan cơ sở vật chất"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Người nói cho biết: 'next month we'll be providing a behind-the-scenes tour for students... They'll see things like the assignment coordination desk, our studios, and the control room' (tổ chức chuyến tham quan hậu trường trường quay cho sinh viên)."
      },
      {
        "num": 88,
        "question": "Who should send the speaker an e-mail?",
        "vietnameseQuestion": "Ai nên gửi email cho người nói?",
        "options": [
          {
            "key": "A",
            "text": "Those going on vacation",
            "vietnamese": "Những người sắp đi nghỉ mát"
          },
          {
            "key": "B",
            "text": "Those willing to volunteer",
            "vietnamese": "Những ai sẵn sàng làm tình nguyện viên"
          },
          {
            "key": "C",
            "text": "Those wishing to provide feedback",
            "vietnamese": "Những người muốn đóng góp ý kiến phản hồi"
          },
          {
            "key": "D",
            "text": "Those presenting at a conference",
            "vietnamese": "Những người thuyết trình tại một hội nghị"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Người nói kêu gọi: 'I'm looking for a few volunteers who can spare an hour of their time to do this. Please email me if you're interested' (những người muốn tình nguyện dẫn tour)."
      }
    ],
    "vocabulary": [
      {
        "word": "exclusive footage",
        "meaning": "cảnh quay độc quyền",
        "partOfSpeech": "n"
      },
      {
        "word": "network",
        "meaning": "mạng lưới đài truyền hình",
        "partOfSpeech": "n"
      },
      {
        "word": "heads-up",
        "meaning": "lời thông báo trước, cảnh báo sớm",
        "partOfSpeech": "n"
      },
      {
        "word": "behind-the-scenes",
        "meaning": "ở hậu trường, sau cánh gà",
        "partOfSpeech": "adj"
      },
      {
        "word": "control room",
        "meaning": "phòng điều khiển trung tâm",
        "partOfSpeech": "n"
      },
      {
        "word": "spare time",
        "meaning": "dành ra thời gian rảnh",
        "partOfSpeech": "v"
      }
    ]
  },
  {
    "id": "part4-89-91",
    "part": 4,
    "partTitle": "Part 4: Bài nói ngắn",
    "questionRange": "Câu 89 - 91",
    "title": "Part 4 - Câu 89 - 91: Tiệc liên hoan mừng doanh số quý ba",
    "audioSrc": "/audio/test4_2024.mp3",
    "startTime": 2405.62,
    "endTime": 2484.98,
    "transcript": [
      {
        "id": "p4-89-l1",
        "speaker": "Speaker",
        "text": "Congratulations on a successful third quarter, everyone.",
        "vietnamese": "Chúc mừng mọi người vì một quý ba vô cùng thành công."
      },
      {
        "id": "p4-89-l2",
        "speaker": "Speaker",
        "text": "You've all done such a great job selling our ovens and refrigerators that we've already exceeded our sales expectations for the year.",
        "vietnamese": "Tất cả các bạn đã làm việc xuất sắc khi bán các dòng lò nướng và tủ lạnh của chúng ta, đến mức chúng ta đã vượt chỉ tiêu doanh số dự kiến cho cả năm nay."
      },
      {
        "id": "p4-89-l3",
        "speaker": "Speaker",
        "text": "To celebrate, we'd like to invite the sales team to join us for a company dinner. The dinner will be held on Thursday, December 20 at the Canterbury Restaurant.",
        "vietnamese": "Để ăn mừng, chúng tôi muốn mời đội ngũ kinh doanh tham dự bữa tiệc tối công ty. Bữa tối sẽ diễn ra vào thứ Năm, ngày 20 tháng 12 tại Nhà hàng Canterbury."
      },
      {
        "id": "p4-89-l4",
        "speaker": "Speaker",
        "text": "You might want to carpool or take public transportation to the event.",
        "vietnamese": "Các bạn có thể sẽ muốn đi chung xe hoặc sử dụng phương tiện giao thông công cộng đến sự kiện."
      },
      {
        "id": "p4-89-l5",
        "speaker": "Speaker",
        "text": "The restaurant is near the stadium, and there's a sports event that night.",
        "vietnamese": "Nhà hàng nằm gần sân vận động, và vào đêm hôm đó sẽ diễn ra một sự kiện thể thao."
      }
    ],
    "questions": [
      {
        "num": 89,
        "question": "What does the speaker's company most likely sell?",
        "vietnameseQuestion": "Công ty của người nói có khả năng cao nhất bán sản phẩm gì?",
        "options": [
          {
            "key": "A",
            "text": "Beauty supplies",
            "vietnamese": "Đồ dùng chăm sóc sắc đẹp mỹ phẩm"
          },
          {
            "key": "B",
            "text": "Kitchen appliances",
            "vietnamese": "Thiết bị nhà bếp gia dụng"
          },
          {
            "key": "C",
            "text": "Books",
            "vietnamese": "Sách vở"
          },
          {
            "key": "D",
            "text": "Sporting goods",
            "vietnamese": "Dụng cụ thể thao"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Người nói khen ngợi nhân viên: 'selling our ovens and refrigerators' (bán lò nướng và tủ lạnh, tức các thiết bị nhà bếp - kitchen appliances)."
      },
      {
        "num": 90,
        "question": "What event does the speaker invite the listeners to?",
        "vietnameseQuestion": "Người nói mời người nghe tham dự sự kiện gì?",
        "options": [
          {
            "key": "A",
            "text": "A sales workshop",
            "vietnamese": "Một hội thảo bán hàng"
          },
          {
            "key": "B",
            "text": "A product demonstration",
            "vietnamese": "Một buổi giới thiệu trình diễn sản phẩm"
          },
          {
            "key": "C",
            "text": "A celebratory dinner",
            "vietnamese": "Một bữa tiệc tối ăn mừng"
          },
          {
            "key": "D",
            "text": "A concert",
            "vietnamese": "Một buổi hòa nhạc"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Người nói thông báo: 'To celebrate, we'd like to invite the sales team to join us for a company dinner' (bữa tiệc tối công ty để ăn mừng thành tích)."
      },
      {
        "num": 91,
        "question": "What does the speaker mean when he says, \"there's a sports event that night\"?",
        "vietnameseQuestion": "Người nói có ý gì khi nói rằng: \"vào đêm hôm đó sẽ diễn ra một sự kiện thể thao\"?",
        "options": [
          {
            "key": "A",
            "text": "The office will be closed.",
            "vietnamese": "Văn phòng sẽ đóng cửa."
          },
          {
            "key": "B",
            "text": "Parking will be limited.",
            "vietnamese": "Chỗ đỗ xe sẽ bị khan hiếm hạn chế."
          },
          {
            "key": "C",
            "text": "A meeting will be rescheduled.",
            "vietnamese": "Một cuộc họp sẽ được dời lịch."
          },
          {
            "key": "D",
            "text": "The listeners should buy some tickets.",
            "vietnamese": "Người nghe nên mua vài tấm vé."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Người nói khuyên nhân viên đi chung xe hoặc đi xe buýt công cộng ('carpool or take public transportation') vì nhà hàng cạnh sân vận động có trận đấu thể thao, ngụ ý rằng việc đỗ xe riêng sẽ vô cùng khó khăn, bãi xe bị hạn chế (Parking will be limited)."
      }
    ],
    "vocabulary": [
      {
        "word": "exceed expectations",
        "meaning": "vượt quá sự mong đợi",
        "partOfSpeech": "phrase"
      },
      {
        "word": "refrigerator",
        "meaning": "tủ lạnh",
        "partOfSpeech": "n"
      },
      {
        "word": "oven",
        "meaning": "lò nướng",
        "partOfSpeech": "n"
      },
      {
        "word": "carpool",
        "meaning": "đi chung xe ô tô",
        "partOfSpeech": "v"
      },
      {
        "word": "celebratory",
        "meaning": "để ăn mừng, kỷ niệm",
        "partOfSpeech": "adj"
      }
    ]
  },
  {
    "id": "part4-92-94",
    "part": 4,
    "partTitle": "Part 4: Bài nói ngắn",
    "questionRange": "Câu 92 - 94",
    "title": "Part 4 - Câu 92 - 94: Mở rộng tour đi bộ ngắm tranh tường và tượng điêu khắc",
    "audioSrc": "/audio/test4_2024.mp3",
    "startTime": 2484.98,
    "endTime": 2576.46,
    "transcript": [
      {
        "id": "p4-92-l1",
        "speaker": "Speaker",
        "text": "I hope you've enjoyed this tour of historic homes in Solona City.",
        "vietnamese": "Tôi hy vọng quý vị đã có một chuyến tham quan thú vị qua các ngôi nhà lịch sử ở Thành phố Solona."
      },
      {
        "id": "p4-92-l2",
        "speaker": "Speaker",
        "text": "I founded this tour company five years ago and I'm happy to announce that next month my company is expanding its offerings.",
        "vietnamese": "Tôi đã thành lập công ty du lịch này năm năm trước và tôi rất vui mừng được thông báo rằng vào tháng tới công ty tôi sẽ mở rộng các gói sản phẩm của mình."
      },
      {
        "id": "p4-92-l3",
        "speaker": "Speaker",
        "text": "We're launching a new walking tour that will focus on the various murals and statues located throughout the city center.",
        "vietnamese": "Chúng tôi sẽ ra mắt một tour đi bộ mới tập trung vào các bức tranh tường và tượng điêu khắc đa dạng nằm rải rác khắp trung tâm thành phố."
      },
      {
        "id": "p4-92-l4",
        "speaker": "Speaker",
        "text": "We know tourists like you often visit the exhibitions at our art museum, but art isn't only inside the walls of a museum.",
        "vietnamese": "Chúng tôi biết những du khách như quý vị thường ghé thăm các triển lãm tại bảo tàng nghệ thuật của chúng tôi, nhưng nghệ thuật đâu chỉ nằm bên trong những bức tường của một bảo tàng."
      },
      {
        "id": "p4-92-l5",
        "speaker": "Speaker",
        "text": "Here are some brochures with information including the times and prices.",
        "vietnamese": "Dưới đây là một số tập tài liệu giới thiệu chứa thông tin bao gồm thời gian và giá vé."
      }
    ],
    "questions": [
      {
        "num": 92,
        "question": "Who most likely is the speaker?",
        "vietnameseQuestion": "Người nói có khả năng cao nhất là ai?",
        "options": [
          {
            "key": "A",
            "text": "An artist",
            "vietnamese": "Một nghệ sĩ"
          },
          {
            "key": "B",
            "text": "A business owner",
            "vietnamese": "Một chủ doanh nghiệp"
          },
          {
            "key": "C",
            "text": "A local journalist",
            "vietnamese": "Một nhà báo địa phương"
          },
          {
            "key": "D",
            "text": "A government official",
            "vietnamese": "Một quan chức chính phủ"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Người nói giới thiệu: 'I founded this tour company five years ago and I'm happy to announce that next month my company is expanding its offerings' (tôi đã sáng lập công ty du lịch này, tức chủ doanh nghiệp - business owner)."
      },
      {
        "num": 93,
        "question": "Why does the speaker say, \"art isn't only inside the walls of a museum\"?",
        "vietnameseQuestion": "Tại sao người nói lại nói: \"nghệ thuật đâu chỉ nằm bên trong những bức tường của một bảo tàng\"?",
        "options": [
          {
            "key": "A",
            "text": "To apologize for an exhibit closure",
            "vietnamese": "Để xin lỗi vì một triển lãm bị đóng cửa"
          },
          {
            "key": "B",
            "text": "To disagree with an online review",
            "vietnamese": "Để không đồng tình với một nhận xét trực tuyến"
          },
          {
            "key": "C",
            "text": "To motivate the listeners to take another tour",
            "vietnamese": "Để thôi thúc người nghe đăng ký tham gia một tour du lịch khác"
          },
          {
            "key": "D",
            "text": "To recommend a building renovation",
            "vietnamese": "Để đề xuất việc cải tạo một tòa nhà"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Người nói muốn giới thiệu tour đi bộ mới ngắm tranh tường ngoài trời ('murals and statues throughout the city center') nên nhấn mạnh nghệ thuật còn ở ngoài trời đường phố nhằm khuyến khích khách du lịch đăng ký tham gia tour mới này."
      },
      {
        "num": 94,
        "question": "What does the speaker give to the listeners?",
        "vietnameseQuestion": "Người nói trao cho người nghe cái gì?",
        "options": [
          {
            "key": "A",
            "text": "City maps",
            "vietnamese": "Bản đồ thành phố"
          },
          {
            "key": "B",
            "text": "Gift cards",
            "vietnamese": "Thẻ quà tặng"
          },
          {
            "key": "C",
            "text": "Name badges",
            "vietnamese": "Thẻ tên"
          },
          {
            "key": "D",
            "text": "Informational brochures",
            "vietnamese": "Tập tài liệu bướm thông tin quảng cáo"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Người nói kết luận: 'Here are some brochures with information including the times and prices' (trao các tập tài liệu giới thiệu thông tin - brochures)."
      }
    ],
    "vocabulary": [
      {
        "word": "historic home",
        "meaning": "ngôi nhà mang giá trị lịch sử",
        "partOfSpeech": "n"
      },
      {
        "word": "found",
        "meaning": "thành lập, sáng lập",
        "partOfSpeech": "v"
      },
      {
        "word": "mural",
        "meaning": "bức tranh tường lớn",
        "partOfSpeech": "n"
      },
      {
        "word": "statue",
        "meaning": "bức tượng điêu khắc",
        "partOfSpeech": "n"
      },
      {
        "word": "brochure",
        "meaning": "tờ rơi, tập tài liệu quảng cáo mỏng",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part4-95-97",
    "part": 4,
    "partTitle": "Part 4: Bài nói ngắn",
    "questionRange": "Câu 95 - 97",
    "title": "Part 4 - Câu 95 - 97: Dự án xây dựng ga tàu mới Alexton",
    "audioSrc": "/audio/test4_2024.mp3",
    "startTime": 2576.46,
    "endTime": 2669.43,
    "image": "/images/intensive/test4_2024/q95_97.png",
    "graphicImage": "/images/intensive/test4_2024/q95_97.png",
    "imageUrl": "/images/intensive/test4_2024/q95_97.png",
    "transcript": [
      {
        "id": "p4-95-l1",
        "speaker": "Speaker",
        "text": "In local news, the Bayland Transit Agency has announced that construction has begun on the new Alexton train station, which will offer a direct rail connection to the city center.",
        "vietnamese": "Trong bản tin địa phương, Cơ quan Giao thông Bayland đã thông báo rằng việc thi công nhà ga xe lửa mới Alexton đã bắt đầu, nhà ga này sẽ cung cấp tuyến đường sắt kết nối trực tiếp đến trung tâm thành phố."
      },
      {
        "id": "p4-95-l2",
        "speaker": "Speaker",
        "text": "Spokesperson Claudia Schneider explained that the agency initially considered a more elaborate design with a projected cost of $300 million, but ultimately decided to go with a more cost-effective and straightforward proposal with a price tag of $250 million.",
        "vietnamese": "Người phát ngôn Claudia Schneider giải thích rằng cơ quan ban đầu đã xem xét một thiết kế cầu kỳ hơn với chi phí dự kiến là 300 triệu đô la, nhưng cuối cùng đã quyết định chọn phương án tiết kiệm chi phí và đơn giản hơn với mức giá 250 triệu đô la."
      },
      {
        "id": "p4-95-l3",
        "speaker": "Speaker",
        "text": "Not only is it more economical, but an earlier completion date is expected.",
        "vietnamese": "Không những kinh tế hơn, mà dự án còn dự kiến sẽ hoàn thành sớm hơn thời hạn."
      },
      {
        "id": "p4-95-l4",
        "speaker": "Speaker",
        "text": "The building will have an adjacent small park for public use. And beginning in May, residents will be invited to vote on ideas for it.",
        "vietnamese": "Tòa nhà ga sẽ có một công viên nhỏ liền kề phục vụ cho mục đích công cộng. Và bắt đầu từ tháng Năm, người dân sẽ được mời tham gia bình chọn các ý tưởng cho công viên này."
      }
    ],
    "questions": [
      {
        "num": 95,
        "question": "What is the broadcast mainly about?",
        "vietnameseQuestion": "Bản tin phát thanh chủ yếu nói về điều gì?",
        "options": [
          {
            "key": "A",
            "text": "A renovated airport terminal",
            "vietnamese": "Một nhà ga sân bay được cải tạo"
          },
          {
            "key": "B",
            "text": "A redesigned city hall",
            "vietnamese": "Tòa thị chính được thiết kế lại"
          },
          {
            "key": "C",
            "text": "A new train station",
            "vietnamese": "Một nhà ga xe lửa mới"
          },
          {
            "key": "D",
            "text": "A new bridge",
            "vietnamese": "Một cây cầu mới"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Bản tin bắt đầu bằng: 'construction has begun on the new Alexton train station, which will offer a direct rail connection' (việc xây dựng nhà ga tàu mới Alexton)."
      },
      {
        "num": 96,
        "question": "Look at the graphic. Which proposal was chosen?",
        "vietnameseQuestion": "Nhìn vào biểu đồ. Đề xuất nào đã được chọn?",
        "options": [
          {
            "key": "A",
            "text": "Plan A",
            "vietnamese": "Kế hoạch A"
          },
          {
            "key": "B",
            "text": "Plan B",
            "vietnamese": "Kế hoạch B"
          },
          {
            "key": "C",
            "text": "Plan C",
            "vietnamese": "Kế hoạch C"
          },
          {
            "key": "D",
            "text": "Plan D",
            "vietnamese": "Kế hoạch D"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Người nói cho biết họ chọn 'a more cost-effective and straightforward proposal with a price tag of $250 million' (phương án có giá 250 triệu đô la). Đối chiếu bảng trong hình, mức kinh phí dự kiến $250 million tương ứng với Kế hoạch D (Plan D)."
      },
      {
        "num": 97,
        "question": "According to the speaker, what will residents be able to vote on?",
        "vietnameseQuestion": "Theo người nói, người dân sẽ có thể tham gia bỏ phiếu về điều gì?",
        "options": [
          {
            "key": "A",
            "text": "Parking options",
            "vietnamese": "Các phương án đỗ xe"
          },
          {
            "key": "B",
            "text": "Food vendors",
            "vietnamese": "Các đơn vị bán đồ ăn"
          },
          {
            "key": "C",
            "text": "Public artwork",
            "vietnamese": "Tác phẩm nghệ thuật công cộng"
          },
          {
            "key": "D",
            "text": "Park ideas",
            "vietnamese": "Các ý tưởng cho công viên"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Người nói cho biết: 'The building will have an adjacent small park for public use. And beginning in May, residents will be invited to vote on ideas for it' (bỏ phiếu lựa chọn các ý tưởng cho công viên kề bên)."
      }
    ],
    "vocabulary": [
      {
        "word": "transit agency",
        "meaning": "cơ quan quản lý giao thông công cộng",
        "partOfSpeech": "n"
      },
      {
        "word": "elaborate",
        "meaning": "cầu kỳ, phức tạp, tỉ mỉ",
        "partOfSpeech": "adj"
      },
      {
        "word": "projected cost",
        "meaning": "chi phí dự toán, chi phí dự kiến",
        "partOfSpeech": "n"
      },
      {
        "word": "cost-effective",
        "meaning": "hiệu quả về mặt chi phí, tiết kiệm",
        "partOfSpeech": "adj"
      },
      {
        "word": "price tag",
        "meaning": "mức giá, thẻ giá",
        "partOfSpeech": "n"
      },
      {
        "word": "adjacent",
        "meaning": "kế bên, liền kề",
        "partOfSpeech": "adj"
      }
    ]
  },
  {
    "id": "part4-98-100",
    "part": 4,
    "partTitle": "Part 4: Bài nói ngắn",
    "questionRange": "Câu 98 - 100",
    "title": "Part 4 - Câu 98 - 100: Lễ khánh thành Trung tâm Thương mại Wilton",
    "audioSrc": "/audio/test4_2024.mp3",
    "startTime": 2669.43,
    "endTime": 2750.0,
    "image": "/images/intensive/test4_2024/q98_100.png",
    "graphicImage": "/images/intensive/test4_2024/q98_100.png",
    "imageUrl": "/images/intensive/test4_2024/q98_100.png",
    "transcript": [
      {
        "id": "p4-98-l1",
        "speaker": "Speaker",
        "text": "Welcome, everyone, to the grand opening of the Wilton Business Center.",
        "vietnamese": "Chào mừng tất cả quý vị đến với lễ khánh thành khai trương Trung tâm Thương mại Doanh nghiệp Wilton."
      },
      {
        "id": "p4-98-l2",
        "speaker": "Speaker",
        "text": "As the mayor, I'm pleased to see this kind of growth in our city.",
        "vietnamese": "Với tư cách là thị trưởng, tôi rất vui mừng khi được chứng kiến sự phát triển này trong thành phố của chúng ta."
      },
      {
        "id": "p4-98-l3",
        "speaker": "Speaker",
        "text": "And the environmentally friendly elements incorporated into the design make this building special.",
        "vietnamese": "Và các yếu tố thân thiện với môi trường được lồng ghép vào thiết kế đã làm cho tòa nhà này trở nên vô cùng đặc biệt."
      },
      {
        "id": "p4-98-l4",
        "speaker": "Speaker",
        "text": "In particular, this building is equipped with a water recycling system and insulation made from repurposed cloth.",
        "vietnamese": "Cụ thể, tòa nhà này được trang bị hệ thống tái chế nước và vật liệu cách nhiệt làm từ vải tái chế."
      },
      {
        "id": "p4-98-l5",
        "speaker": "Speaker",
        "text": "While today is the grand opening, one part of the building, the recreation center, will not be available for use until next month as final touches are still being added to that floor.",
        "vietnamese": "Mặc dù hôm nay là ngày khai trương, một phần của tòa nhà - đó là trung tâm giải trí - sẽ chưa thể đi vào hoạt động cho đến tháng sau vì những khâu hoàn thiện cuối cùng vẫn đang được tiến hành trên tầng đó."
      }
    ],
    "questions": [
      {
        "num": 98,
        "question": "Who is the speaker?",
        "vietnameseQuestion": "Người nói là ai?",
        "options": [
          {
            "key": "A",
            "text": "A structural engineer",
            "vietnamese": "Một kỹ sư kết cấu"
          },
          {
            "key": "B",
            "text": "A journalist",
            "vietnamese": "Một nhà báo"
          },
          {
            "key": "C",
            "text": "A tour guide",
            "vietnamese": "Một hướng dẫn viên du lịch"
          },
          {
            "key": "D",
            "text": "A city official",
            "vietnamese": "Một quan chức thành phố (Thị trưởng)"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Người nói tự giới thiệu: 'As the mayor, I'm pleased to see this kind of growth in our city' (với tư cách là Thị trưởng thành phố, tức quan chức thành phố - a city official)."
      },
      {
        "num": 99,
        "question": "Why is a building special?",
        "vietnameseQuestion": "Tại sao tòa nhà lại đặc biệt?",
        "options": [
          {
            "key": "A",
            "text": "It was constructed in a short time.",
            "vietnamese": "Nó được xây dựng trong thời gian ngắn."
          },
          {
            "key": "B",
            "text": "It has a technologically advanced security system.",
            "vietnamese": "Nó có hệ thống an ninh tiên tiến về công nghệ."
          },
          {
            "key": "C",
            "text": "It has environmentally friendly features.",
            "vietnamese": "Nó có các đặc tính thân thiện với môi trường."
          },
          {
            "key": "D",
            "text": "It was designed by a famous architect.",
            "vietnamese": "Nó được thiết kế bởi một kiến trúc sư nổi tiếng."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Người nói nêu rõ: 'And the environmentally friendly elements incorporated into the design make this building special... water recycling system and insulation made from repurposed cloth' (các yếu tố thân thiện môi trường trong thiết kế khiến tòa nhà đặc biệt)."
      },
      {
        "num": 100,
        "question": "Look at the graphic. Which floor of the building is not open yet?",
        "vietnameseQuestion": "Nhìn vào sơ đồ tòa nhà. Tầng nào của tòa nhà vẫn chưa mở cửa?",
        "options": [
          {
            "key": "A",
            "text": "Floor 4",
            "vietnamese": "Tầng 4"
          },
          {
            "key": "B",
            "text": "Floor 3",
            "vietnamese": "Tầng 3"
          },
          {
            "key": "C",
            "text": "Floor 2",
            "vietnamese": "Tầng 2"
          },
          {
            "key": "D",
            "text": "Floor 1",
            "vietnamese": "Tầng 1"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Người nói chỉ rõ: 'the recreation center, will not be available for use until next month as final touches are still being added to that floor'. Quan sát sơ đồ các tầng của tòa nhà trong hình, 'Recreation Center' nằm ở Tầng 2 (Floor 2)."
      }
    ],
    "vocabulary": [
      {
        "word": "grand opening",
        "meaning": "lễ khai trương trọng thể, khánh thành",
        "partOfSpeech": "n"
      },
      {
        "word": "mayor",
        "meaning": "thị trưởng",
        "partOfSpeech": "n"
      },
      {
        "word": "environmentally friendly",
        "meaning": "thân thiện với môi trường",
        "partOfSpeech": "adj"
      },
      {
        "word": "water recycling system",
        "meaning": "hệ thống tái chế nước",
        "partOfSpeech": "n"
      },
      {
        "word": "insulation",
        "meaning": "vật liệu cách nhiệt, cách âm",
        "partOfSpeech": "n"
      },
      {
        "word": "repurposed",
        "meaning": "được tái chế, tái sử dụng với mục đích mới",
        "partOfSpeech": "adj"
      },
      {
        "word": "recreation center",
        "meaning": "trung tâm giải trí, thể thao",
        "partOfSpeech": "n"
      },
      {
        "word": "final touches",
        "meaning": "những nét hoàn thiện cuối cùng",
        "partOfSpeech": "n"
      }
    ]
  }
];
