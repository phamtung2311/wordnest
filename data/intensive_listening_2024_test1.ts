// Dữ liệu luyện nghe chi tiết (Intensive Listening) - ETS TOEIC 2024 Test 1
// Áp dụng kỹ thuật Virtual Timestamp Slicing từ audio gốc /audio/test1_2024.mp3
// Transcript, câu hỏi và giải thích chi tiết theo đề thi ETS 2024 Test 1

import type { IntensiveListeningItem } from './intensive_listening_types';

export const test1_2024_IntensiveData: IntensiveListeningItem[] = [
  {
    "id": "part1-1",
    "part": 1,
    "partTitle": "Part 1: Mô tả hình ảnh",
    "questionRange": "Câu 1",
    "title": "Part 1 - Câu 1: Người phụ nữ ngồi ăn tại khu dã ngoại",
    "audioSrc": "/audio/test1_2024.mp3",
    "startTime": 99.0,
    "endTime": 120.0,
    "imageUrl": "/images/intensive/test1_2024/q1.png",
    "image": "/images/intensive/test1_2024/q1.png",
    "transcript": [
      {
        "id": "p1-1-a",
        "speaker": "Speaker",
        "text": "(A) She's eating in a picnic area.",
        "vietnamese": "(A) Cô ấy đang ăn tại một khu vực dã ngoại."
      },
      {
        "id": "p1-1-b",
        "speaker": "Speaker",
        "text": "(B) She's waiting in line at a food truck.",
        "vietnamese": "(B) Cô ấy đang xếp hàng tại một xe bán đồ ăn."
      },
      {
        "id": "p1-1-c",
        "speaker": "Speaker",
        "text": "(C) She's wiping off a bench.",
        "vietnamese": "(C) Cô ấy đang lau một chiếc ghế dài."
      },
      {
        "id": "p1-1-d",
        "speaker": "Speaker",
        "text": "(D) She's throwing away a plate.",
        "vietnamese": "(D) Cô ấy đang vứt một chiếc đĩa."
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
            "text": "She's eating in a picnic area.",
            "vietnamese": "Cô ấy đang ăn tại khu dã ngoại."
          },
          {
            "key": "B",
            "text": "She's waiting in line at a food truck.",
            "vietnamese": "Cô ấy đang xếp hàng tại một xe bán thức ăn."
          },
          {
            "key": "C",
            "text": "She's wiping off a bench.",
            "vietnamese": "Cô ấy đang lau sạch một chiếc ghế dài."
          },
          {
            "key": "D",
            "text": "She's throwing away a plate.",
            "vietnamese": "Cô ấy đang vứt bỏ một chiếc đĩa."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Trong bức ảnh, người phụ nữ đang ngồi ăn đồ ăn trên bàn gỗ ngoài trời tại khu dã ngoại (She's eating in a picnic area)."
      }
    ],
    "vocabulary": [
      {
        "word": "picnic area",
        "meaning": "khu dã ngoại, cắm trại",
        "partOfSpeech": "n"
      },
      {
        "word": "food truck",
        "meaning": "xe bán thức ăn lưu động",
        "partOfSpeech": "n"
      },
      {
        "word": "wipe off",
        "meaning": "lau chùi sạch sẽ",
        "partOfSpeech": "phr v"
      },
      {
        "word": "bench",
        "meaning": "ghế dài",
        "partOfSpeech": "n"
      },
      {
        "word": "throw away",
        "meaning": "vứt bỏ",
        "partOfSpeech": "phr v"
      }
    ]
  },
  {
    "id": "part1-2",
    "part": 1,
    "partTitle": "Part 1: Mô tả hình ảnh",
    "questionRange": "Câu 2",
    "title": "Part 1 - Câu 2: Người đàn ông đứng cạnh xe giữa trời tuyết",
    "audioSrc": "/audio/test1_2024.mp3",
    "startTime": 120.0,
    "endTime": 152.5,
    "imageUrl": "/images/intensive/test1_2024/q2.png",
    "image": "/images/intensive/test1_2024/q2.png",
    "transcript": [
      {
        "id": "p1-2-a",
        "speaker": "Speaker",
        "text": "(A) The man is brushing snow off the roof of a car.",
        "vietnamese": "(A) Người đàn ông đang quét tuyết khỏi nóc xe ô tô."
      },
      {
        "id": "p1-2-b",
        "speaker": "Speaker",
        "text": "(B) The man is standing in the snow beside a car.",
        "vietnamese": "(B) Người đàn ông đang đứng trong tuyết bên cạnh một chiếc xe hơi."
      },
      {
        "id": "p1-2-c",
        "speaker": "Speaker",
        "text": "(C) The man is shoveling snow from a walkway.",
        "vietnamese": "(C) Người đàn ông đang xúc tuyết khỏi lối đi bộ."
      },
      {
        "id": "p1-2-d",
        "speaker": "Speaker",
        "text": "(D) The man is running through the snow.",
        "vietnamese": "(D) Người đàn ông đang chạy qua lớp tuyết."
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
            "text": "The man is brushing snow off the roof of a car.",
            "vietnamese": "Người đàn ông đang quét tuyết trên nóc xe hơi."
          },
          {
            "key": "B",
            "text": "The man is standing in the snow beside a car.",
            "vietnamese": "Người đàn ông đang đứng trong tuyết cạnh xe ô tô."
          },
          {
            "key": "C",
            "text": "The man is shoveling snow from a walkway.",
            "vietnamese": "Người đàn ông đang xúc tuyết dọn lối đi bộ."
          },
          {
            "key": "D",
            "text": "The man is running through the snow.",
            "vietnamese": "Người đàn ông đang chạy qua tuyết."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Người đàn ông mặc áo khoác mùa đông đang đứng trong tuyết cạnh chiếc xe ô tô mở cửa (The man is standing in the snow beside a car)."
      }
    ],
    "vocabulary": [
      {
        "word": "beside",
        "meaning": "bên cạnh",
        "partOfSpeech": "prep"
      },
      {
        "word": "brush off",
        "meaning": "quét sạch, phủi sạch",
        "partOfSpeech": "phr v"
      },
      {
        "word": "roof",
        "meaning": "nóc, mui xe",
        "partOfSpeech": "n"
      },
      {
        "word": "shovel",
        "meaning": "xúc (bằng xẻng)",
        "partOfSpeech": "v"
      },
      {
        "word": "walkway",
        "meaning": "lối đi dành cho người đi bộ",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part1-3",
    "part": 1,
    "partTitle": "Part 1: Mô tả hình ảnh",
    "questionRange": "Câu 3",
    "title": "Part 1 - Câu 3: Mọi người trong phòng triển lãm tranh",
    "audioSrc": "/audio/test1_2024.mp3",
    "startTime": 152.5,
    "endTime": 184.6,
    "imageUrl": "/images/intensive/test1_2024/q3.png",
    "image": "/images/intensive/test1_2024/q3.png",
    "transcript": [
      {
        "id": "p1-3-a",
        "speaker": "Speaker",
        "text": "(A) Some workers are hanging art in a gallery.",
        "vietnamese": "(A) Một số nhân viên đang treo tác phẩm nghệ thuật trong phòng trưng bày."
      },
      {
        "id": "p1-3-b",
        "speaker": "Speaker",
        "text": "(B) Two of the people are having a conversation.",
        "vietnamese": "(B) Hai trong số những người đang trò chuyện với nhau."
      },
      {
        "id": "p1-3-c",
        "speaker": "Speaker",
        "text": "(C) One of the men is rearranging cushions on a sofa.",
        "vietnamese": "(C) Một trong những người đàn ông đang sắp xếp lại gối đệm trên ghế sofa."
      },
      {
        "id": "p1-3-d",
        "speaker": "Speaker",
        "text": "(D) One of the men is painting a picture.",
        "vietnamese": "(D) Một trong những người đàn ông đang vẽ một bức tranh."
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
            "text": "Some workers are hanging art in a gallery.",
            "vietnamese": "Một số công nhân đang treo tranh trong phòng tranh."
          },
          {
            "key": "B",
            "text": "Two of the people are having a conversation.",
            "vietnamese": "Hai người trong số họ đang nói chuyện với nhau."
          },
          {
            "key": "C",
            "text": "One of the men is rearranging cushions on a sofa.",
            "vietnamese": "Một người đàn ông đang xếp lại gối trên ghế sô pha."
          },
          {
            "key": "D",
            "text": "One of the men is painting a picture.",
            "vietnamese": "Một người đàn ông đang vẽ tranh."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Trong phòng triển lãm tranh, hai người ở góc trái phía trước tranh đang đứng trò chuyện với nhau (Two of the people are having a conversation)."
      }
    ],
    "vocabulary": [
      {
        "word": "gallery",
        "meaning": "phòng trưng bày, triển lãm nghệ thuật",
        "partOfSpeech": "n"
      },
      {
        "word": "have a conversation",
        "meaning": "trò chuyện, đàm đạo",
        "partOfSpeech": "idiom"
      },
      {
        "word": "rearrange",
        "meaning": "sắp xếp lại",
        "partOfSpeech": "v"
      },
      {
        "word": "cushion",
        "meaning": "gối tựa, đệm ghế",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part1-4",
    "part": 1,
    "partTitle": "Part 1: Mô tả hình ảnh",
    "questionRange": "Câu 4",
    "title": "Part 1 - Câu 4: Quần áo treo trên giá dưới mái lều",
    "audioSrc": "/audio/test1_2024.mp3",
    "startTime": 184.6,
    "endTime": 208.1,
    "imageUrl": "/images/intensive/test1_2024/q4.png",
    "image": "/images/intensive/test1_2024/q4.png",
    "transcript": [
      {
        "id": "p1-4-a",
        "speaker": "Speaker",
        "text": "(A) Vehicles are entering a parking garage.",
        "vietnamese": "(A) Các phương tiện đang đi vào một nhà để xe."
      },
      {
        "id": "p1-4-b",
        "speaker": "Speaker",
        "text": "(B) Clothes hangers are scattered on the ground.",
        "vietnamese": "(B) Móc treo quần áo nằm rải rác trên mặt đất."
      },
      {
        "id": "p1-4-c",
        "speaker": "Speaker",
        "text": "(C) Empty racks are lined up next to a building.",
        "vietnamese": "(C) Các giá treo trống đang được xếp thành hàng cạnh tòa nhà."
      },
      {
        "id": "p1-4-d",
        "speaker": "Speaker",
        "text": "(D) Clothing is being displayed under a tent.",
        "vietnamese": "(D) Quần áo đang được trưng bày bên dưới một chiếc lều rạp."
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
            "text": "Vehicles are entering a parking garage.",
            "vietnamese": "Các xe cộ đang tiến vào bãi đỗ xe."
          },
          {
            "key": "B",
            "text": "Clothes hangers are scattered on the ground.",
            "vietnamese": "Các móc treo đồ nằm vương vãi trên nền đất."
          },
          {
            "key": "C",
            "text": "Empty racks are lined up next to a building.",
            "vietnamese": "Các giá treo đồ trống được xếp hàng cạnh tòa nhà."
          },
          {
            "key": "D",
            "text": "Clothing is being displayed under a tent.",
            "vietnamese": "Quần áo đang được trưng bày bên dưới lều rạp."
          }
        ],
        "correctAnswer": "D",
        "explanation": "Trong bức ảnh, rất nhiều quần áo treo trên móc được trưng bày dưới mái bạt che / lều (Clothing is being displayed under a tent)."
      }
    ],
    "vocabulary": [
      {
        "word": "display",
        "meaning": "trưng bày",
        "partOfSpeech": "v"
      },
      {
        "word": "tent",
        "meaning": "lều bạt rạp che",
        "partOfSpeech": "n"
      },
      {
        "word": "clothes hanger",
        "meaning": "móc treo quần áo",
        "partOfSpeech": "n"
      },
      {
        "word": "scattered",
        "meaning": "rải rác, vương vãi",
        "partOfSpeech": "adj"
      },
      {
        "word": "rack",
        "meaning": "giá treo, móc treo",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part1-5",
    "part": 1,
    "partTitle": "Part 1: Mô tả hình ảnh",
    "questionRange": "Câu 5",
    "title": "Part 1 - Câu 5: Bàn làm việc có máy tính và máy in",
    "audioSrc": "/audio/test1_2024.mp3",
    "startTime": 208.1,
    "endTime": 235.9,
    "imageUrl": "/images/intensive/test1_2024/q5.png",
    "image": "/images/intensive/test1_2024/q5.png",
    "transcript": [
      {
        "id": "p1-5-a",
        "speaker": "Speaker",
        "text": "(A) Potted plants have been suspended from a ceiling.",
        "vietnamese": "(A) Các chậu cây đã được treo lơ lửng từ trần nhà."
      },
      {
        "id": "p1-5-b",
        "speaker": "Speaker",
        "text": "(B) Chairs have been stacked in front of an entryway.",
        "vietnamese": "(B) Những chiếc ghế đã được xếp chồng phía trước lối vào."
      },
      {
        "id": "p1-5-c",
        "speaker": "Speaker",
        "text": "(C) A computer station has been set up on a desk.",
        "vietnamese": "(C) Một trạm máy vi tính đã được thiết lập trên bàn làm việc."
      },
      {
        "id": "p1-5-d",
        "speaker": "Speaker",
        "text": "(D) A rug has been rolled up against a wall.",
        "vietnamese": "(D) Một tấm thảm đã được cuộn lại dựa vào tường."
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
            "text": "Potted plants have been suspended from a ceiling.",
            "vietnamese": "Chậu cây cảnh được treo từ trần nhà xuống."
          },
          {
            "key": "B",
            "text": "Chairs have been stacked in front of an entryway.",
            "vietnamese": "Ghế được xếp chồng trước lối vào."
          },
          {
            "key": "C",
            "text": "A computer station has been set up on a desk.",
            "vietnamese": "Một bộ máy vi tính đã được đặt trên bàn làm việc."
          },
          {
            "key": "D",
            "text": "A rug has been rolled up against a wall.",
            "vietnamese": "Một tấm thảm đã được cuộn tròn dựng sát tường."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Trên bàn làm việc có bộ máy vi tính (màn hình, bàn phím) và máy in đã được lắp đặt sẵn (A computer station has been set up on a desk)."
      }
    ],
    "vocabulary": [
      {
        "word": "computer station",
        "meaning": "trạm máy tính, bàn máy tính",
        "partOfSpeech": "n"
      },
      {
        "word": "set up",
        "meaning": "lắp đặt, bố trí",
        "partOfSpeech": "phr v"
      },
      {
        "word": "potted plant",
        "meaning": "cây trồng trong chậu",
        "partOfSpeech": "n"
      },
      {
        "word": "suspend",
        "meaning": "treo lơ lửng",
        "partOfSpeech": "v"
      },
      {
        "word": "entryway",
        "meaning": "lối vào",
        "partOfSpeech": "n"
      },
      {
        "word": "rug",
        "meaning": "thảm trải sàn",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part1-6",
    "part": 1,
    "partTitle": "Part 1: Mô tả hình ảnh",
    "questionRange": "Câu 6",
    "title": "Part 1 - Câu 6: Sửa chữa nhà và cánh cửa tháo rời",
    "audioSrc": "/audio/test1_2024.mp3",
    "startTime": 235.9,
    "endTime": 265.0,
    "imageUrl": "/images/intensive/test1_2024/q6.png",
    "image": "/images/intensive/test1_2024/q6.png",
    "transcript": [
      {
        "id": "p1-6-a",
        "speaker": "Speaker",
        "text": "(A) One of the men is sweeping a patio.",
        "vietnamese": "(A) Một trong những người đàn ông đang quét sân hiên."
      },
      {
        "id": "p1-6-b",
        "speaker": "Speaker",
        "text": "(B) One of the men is replacing some flooring.",
        "vietnamese": "(B) Một trong những người đàn ông đang thay ván sàn."
      },
      {
        "id": "p1-6-c",
        "speaker": "Speaker",
        "text": "(C) A door has been taken off its frame.",
        "vietnamese": "(C) Một cánh cửa đã được tháo ra khỏi khung của nó."
      },
      {
        "id": "p1-6-d",
        "speaker": "Speaker",
        "text": "(D) A light fixture has been left on the ground.",
        "vietnamese": "(D) Một bộ đèn đã bị để trên mặt đất."
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
            "text": "One of the men is sweeping a patio.",
            "vietnamese": "Một người đàn ông đang quét hiên nhà."
          },
          {
            "key": "B",
            "text": "One of the men is replacing some flooring.",
            "vietnamese": "Một người đàn ông đang thay sàn nhà."
          },
          {
            "key": "C",
            "text": "A door has been taken off its frame.",
            "vietnamese": "Một cánh cửa đã được tháo rời khỏi khung."
          },
          {
            "key": "D",
            "text": "A light fixture has been left on the ground.",
            "vietnamese": "Bộ đèn đã bị bỏ quên trên sàn nhà."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Trong phòng đang cải tạo, cánh cửa màu trắng đã được tháo khỏi bản lề/khung và dựng nghiêng sát vách tường (A door has been taken off its frame)."
      }
    ],
    "vocabulary": [
      {
        "word": "frame",
        "meaning": "khung cửa",
        "partOfSpeech": "n"
      },
      {
        "word": "take off",
        "meaning": "tháo ra, gỡ ra",
        "partOfSpeech": "phr v"
      },
      {
        "word": "light fixture",
        "meaning": "bộ đèn chùm, thiết bị chiếu sáng cố định",
        "partOfSpeech": "n"
      },
      {
        "word": "sweep",
        "meaning": "quét (nhà)",
        "partOfSpeech": "v"
      },
      {
        "word": "flooring",
        "meaning": "sàn nhà, vật liệu lót sàn",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-7",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 7",
    "title": "Part 2 - Câu 7: Độ tuổi của tòa nhà",
    "audioSrc": "/audio/test1_2024.mp3",
    "startTime": 297.5,
    "endTime": 316.7,
    "transcript": [
      {
        "id": "p2-7-q",
        "speaker": "Speaker 1",
        "text": "How old is this building?",
        "vietnamese": "Tòa nhà này được bao nhiêu năm tuổi rồi?"
      },
      {
        "id": "p2-7-a",
        "speaker": "Speaker 2",
        "text": "(A) To ship some materials.",
        "vietnamese": "(A) Để vận chuyển một số nguyên vật liệu."
      },
      {
        "id": "p2-7-b",
        "speaker": "Speaker 2",
        "text": "(B) About 10 years old.",
        "vietnamese": "(B) Khoảng 10 năm tuổi."
      },
      {
        "id": "p2-7-c",
        "speaker": "Speaker 2",
        "text": "(C) Company offices I think.",
        "vietnamese": "(C) Tôi nghĩ là các văn phòng công ty."
      }
    ],
    "questions": [
      {
        "num": 7,
        "question": "How old is this building?",
        "vietnameseQuestion": "Tòa nhà này được bao nhiêu năm tuổi rồi?",
        "options": [
          {
            "key": "A",
            "text": "To ship some materials.",
            "vietnamese": "Để vận chuyển một số nguyên vật liệu."
          },
          {
            "key": "B",
            "text": "About 10 years old.",
            "vietnamese": "Khoảng 10 năm tuổi."
          },
          {
            "key": "C",
            "text": "Company offices I think.",
            "vietnamese": "Tôi nghĩ là các văn phòng công ty."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Câu hỏi 'How old...' hỏi về độ tuổi/thời gian tồn tại của tòa nhà, phương án (B) 'About 10 years old' đưa ra câu trả lời trực tiếp và chính xác nhất."
      }
    ],
    "vocabulary": [
      {
        "word": "how old",
        "meaning": "bao nhiêu tuổi, tồn tại bao lâu",
        "partOfSpeech": "phr"
      },
      {
        "word": "ship",
        "meaning": "vận chuyển hàng",
        "partOfSpeech": "v"
      },
      {
        "word": "material",
        "meaning": "vật liệu, tài liệu",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-8",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 8",
    "title": "Part 2 - Câu 8: Lời mời tham dự biểu diễn nhạc jazz",
    "audioSrc": "/audio/test1_2024.mp3",
    "startTime": 316.7,
    "endTime": 334.3,
    "transcript": [
      {
        "id": "p2-8-q",
        "speaker": "Speaker 1",
        "text": "Can you come to my jazz performance tonight?",
        "vietnamese": "Bạn có thể đến buổi biểu diễn nhạc jazz của tôi tối nay không?"
      },
      {
        "id": "p2-8-a",
        "speaker": "Speaker 2",
        "text": "(A) I'm sorry I was late for the meeting.",
        "vietnamese": "(A) Tôi xin lỗi vì đã đến muộn cuộc họp."
      },
      {
        "id": "p2-8-b",
        "speaker": "Speaker 2",
        "text": "(B) Mostly just local musicians.",
        "vietnamese": "(B) Chủ yếu chỉ là các nhạc sĩ địa phương."
      },
      {
        "id": "p2-8-c",
        "speaker": "Speaker 2",
        "text": "(C) Sure I'll be there.",
        "vietnamese": "(C) Chắc chắn rồi, tôi sẽ đến đó."
      }
    ],
    "questions": [
      {
        "num": 8,
        "question": "Can you come to my jazz performance tonight?",
        "vietnameseQuestion": "Bạn có thể đến buổi biểu diễn nhạc jazz của tôi tối nay không?",
        "options": [
          {
            "key": "A",
            "text": "I'm sorry I was late for the meeting.",
            "vietnamese": "Tôi xin lỗi vì đã đến muộn cuộc họp."
          },
          {
            "key": "B",
            "text": "Mostly just local musicians.",
            "vietnamese": "Chủ yếu chỉ là các nhạc sĩ địa phương."
          },
          {
            "key": "C",
            "text": "Sure I'll be there.",
            "vietnamese": "Chắc chắn rồi, tôi sẽ đến đó."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Câu hỏi mời mọc 'Can you come...?', câu trả lời nhận lời mời phù hợp nhất là (C) 'Sure I'll be there'."
      }
    ],
    "vocabulary": [
      {
        "word": "performance",
        "meaning": "buổi biểu diễn",
        "partOfSpeech": "n"
      },
      {
        "word": "musician",
        "meaning": "nhạc sĩ, nghệ sĩ biểu diễn",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-9",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 9",
    "title": "Part 2 - Câu 9: Căn hộ gửi phiếu yêu cầu sửa chữa",
    "audioSrc": "/audio/test1_2024.mp3",
    "startTime": 334.3,
    "endTime": 359.1,
    "transcript": [
      {
        "id": "p2-9-q",
        "speaker": "Speaker 1",
        "text": "Which apartment submitted a work order?",
        "vietnamese": "Căn hộ nào đã nộp phiếu yêu cầu sửa chữa?"
      },
      {
        "id": "p2-9-a",
        "speaker": "Speaker 2",
        "text": "(A) It's what you did for a living.",
        "vietnamese": "(A) Đó là việc bạn đã làm để kiếm sống."
      },
      {
        "id": "p2-9-b",
        "speaker": "Speaker 2",
        "text": "(B) Submit your assignment here.",
        "vietnamese": "(B) Nộp bài tập của bạn ở đây."
      },
      {
        "id": "p2-9-c",
        "speaker": "Speaker 2",
        "text": "(C) It came from the tenants in B23.",
        "vietnamese": "(C) Phiếu đó đến từ những người thuê ở phòng B23."
      }
    ],
    "questions": [
      {
        "num": 9,
        "question": "Which apartment submitted a work order?",
        "vietnameseQuestion": "Căn hộ nào đã nộp phiếu yêu cầu sửa chữa?",
        "options": [
          {
            "key": "A",
            "text": "It's what you did for a living.",
            "vietnamese": "Đó là việc bạn đã làm để kiếm sống."
          },
          {
            "key": "B",
            "text": "Submit your assignment here.",
            "vietnamese": "Nộp bài tập của bạn ở đây."
          },
          {
            "key": "C",
            "text": "It came from the tenants in B23.",
            "vietnamese": "Phiếu đó đến từ những người thuê ở phòng B23."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Câu hỏi 'Which apartment...' hỏi căn hộ nào, câu (C) chỉ rõ xuất xứ yêu cầu là từ khách thuê phòng B23."
      }
    ],
    "vocabulary": [
      {
        "word": "submit",
        "meaning": "nộp, trình duyệt",
        "partOfSpeech": "v"
      },
      {
        "word": "work order",
        "meaning": "phiếu yêu cầu sửa chữa/công việc",
        "partOfSpeech": "n"
      },
      {
        "word": "tenant",
        "meaning": "người thuê nhà",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-10",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 10",
    "title": "Part 2 - Câu 10: Liên hệ nhà cung cấp đổi ngày giao hàng",
    "audioSrc": "/audio/test1_2024.mp3",
    "startTime": 359.1,
    "endTime": 383.9,
    "transcript": [
      {
        "id": "p2-10-q",
        "speaker": "Speaker 1",
        "text": "Will you contact the vendor about changing our delivery date?",
        "vietnamese": "Bạn sẽ liên hệ với nhà cung cấp về việc thay đổi ngày giao hàng chứ?"
      },
      {
        "id": "p2-10-a",
        "speaker": "Speaker 2",
        "text": "(A) Of course I'll take care of it.",
        "vietnamese": "(A) Tất nhiên rồi, tôi sẽ xử lý việc đó."
      },
      {
        "id": "p2-10-b",
        "speaker": "Speaker 2",
        "text": "(B) An email receipt.",
        "vietnamese": "(B) Một hóa đơn qua email."
      },
      {
        "id": "p2-10-c",
        "speaker": "Speaker 2",
        "text": "(C) Could I get change for a dollar?",
        "vietnamese": "(C) Tôi có thể đổi tiền lẻ cho 1 đô la không?"
      }
    ],
    "questions": [
      {
        "num": 10,
        "question": "Will you contact the vendor about changing our delivery date?",
        "vietnameseQuestion": "Bạn sẽ liên hệ với nhà cung cấp về việc thay đổi ngày giao hàng chứ?",
        "options": [
          {
            "key": "A",
            "text": "Of course I'll take care of it.",
            "vietnamese": "Tất nhiên rồi, tôi sẽ xử lý việc đó."
          },
          {
            "key": "B",
            "text": "An email receipt.",
            "vietnamese": "Một hóa đơn qua email."
          },
          {
            "key": "C",
            "text": "Could I get change for a dollar?",
            "vietnamese": "Tôi có thể đổi tiền lẻ cho 1 đô la không?"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Câu hỏi nhờ vả 'Will you contact...?', câu (A) đồng ý nhận trách nhiệm giải quyết công việc ('I'll take care of it')."
      }
    ],
    "vocabulary": [
      {
        "word": "vendor",
        "meaning": "nhà cung cấp, bên bán",
        "partOfSpeech": "n"
      },
      {
        "word": "delivery date",
        "meaning": "ngày giao hàng",
        "partOfSpeech": "n"
      },
      {
        "word": "take care of",
        "meaning": "chăm sóc, đảm nhận xử lý",
        "partOfSpeech": "phr v"
      }
    ]
  },
  {
    "id": "part2-11",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 11",
    "title": "Part 2 - Câu 11: Lý do nhân viên bảo trì có mặt",
    "audioSrc": "/audio/test1_2024.mp3",
    "startTime": 383.9,
    "endTime": 399.3,
    "transcript": [
      {
        "id": "p2-11-q",
        "speaker": "Speaker 1",
        "text": "Why was the maintenance worker here?",
        "vietnamese": "Tại sao nhân viên bảo trì lại có mặt ở đây?"
      },
      {
        "id": "p2-11-a",
        "speaker": "Speaker 2",
        "text": "(A) No he didn't.",
        "vietnamese": "(A) Không, anh ấy không làm vậy."
      },
      {
        "id": "p2-11-b",
        "speaker": "Speaker 2",
        "text": "(B) From 3 o'clock until 4.",
        "vietnamese": "(B) Từ 3 giờ đến 4 giờ."
      },
      {
        "id": "p2-11-c",
        "speaker": "Speaker 2",
        "text": "(C) Because a light needed to be fixed.",
        "vietnamese": "(C) Bởi vì một chiếc bóng đèn cần được sửa chữa."
      }
    ],
    "questions": [
      {
        "num": 11,
        "question": "Why was the maintenance worker here?",
        "vietnameseQuestion": "Tại sao nhân viên bảo trì lại có mặt ở đây?",
        "options": [
          {
            "key": "A",
            "text": "No he didn't.",
            "vietnamese": "Không, anh ấy không làm vậy."
          },
          {
            "key": "B",
            "text": "From 3 o'clock until 4.",
            "vietnamese": "Từ 3 giờ đến 4 giờ."
          },
          {
            "key": "C",
            "text": "Because a light needed to be fixed.",
            "vietnamese": "Bởi vì một chiếc bóng đèn cần được sửa chữa."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Câu hỏi 'Why' hỏi nguyên nhân, câu trả lời bắt đầu bằng 'Because' giải thích lý do bóng đèn hỏng cần sửa."
      }
    ],
    "vocabulary": [
      {
        "word": "maintenance worker",
        "meaning": "nhân viên bảo trì",
        "partOfSpeech": "n"
      },
      {
        "word": "fix",
        "meaning": "sửa chữa",
        "partOfSpeech": "v"
      }
    ]
  },
  {
    "id": "part2-12",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 12",
    "title": "Part 2 - Câu 12: Quyết định tuyển dụng của ban quản lý",
    "audioSrc": "/audio/test1_2024.mp3",
    "startTime": 399.3,
    "endTime": 419.9,
    "transcript": [
      {
        "id": "p2-12-q",
        "speaker": "Speaker 1",
        "text": "Did management make a hiring decision yet?",
        "vietnamese": "Ban quản lý đã đưa ra quyết định tuyển dụng chưa?"
      },
      {
        "id": "p2-12-a",
        "speaker": "Speaker 2",
        "text": "(A) Put it on the highest shelf.",
        "vietnamese": "(A) Hãy đặt nó lên kệ cao nhất."
      },
      {
        "id": "p2-12-b",
        "speaker": "Speaker 2",
        "text": "(B) The personnel department.",
        "vietnamese": "(B) Phòng nhân sự."
      },
      {
        "id": "p2-12-c",
        "speaker": "Speaker 2",
        "text": "(C) Yes they chose Jacob Borgman.",
        "vietnamese": "(C) Có, họ đã chọn Jacob Borgman."
      }
    ],
    "questions": [
      {
        "num": 12,
        "question": "Did management make a hiring decision yet?",
        "vietnameseQuestion": "Ban quản lý đã đưa ra quyết định tuyển dụng chưa?",
        "options": [
          {
            "key": "A",
            "text": "Put it on the highest shelf.",
            "vietnamese": "Hãy đặt nó lên kệ cao nhất."
          },
          {
            "key": "B",
            "text": "The personnel department.",
            "vietnamese": "Phòng nhân sự."
          },
          {
            "key": "C",
            "text": "Yes they chose Jacob Borgman.",
            "vietnamese": "Có, họ đã chọn Jacob Borgman."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Câu hỏi Yes/No 'Did management make...?', câu (C) trả lời khẳng định đã chọn được người trúng tuyển."
      }
    ],
    "vocabulary": [
      {
        "word": "management",
        "meaning": "ban quản lý",
        "partOfSpeech": "n"
      },
      {
        "word": "hiring decision",
        "meaning": "quyết định tuyển dụng",
        "partOfSpeech": "n"
      },
      {
        "word": "personnel",
        "meaning": "nhân sự",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-13",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 13",
    "title": "Part 2 - Câu 13: Ăn ở căng tin hay ra ngoài",
    "audioSrc": "/audio/test1_2024.mp3",
    "startTime": 419.9,
    "endTime": 440.6,
    "transcript": [
      {
        "id": "p2-13-q",
        "speaker": "Speaker 1",
        "text": "Do you want to eat here in our cafeteria or go out?",
        "vietnamese": "Bạn muốn ăn tại quán ăn tự phục vụ của chúng ta hay đi ra ngoài?"
      },
      {
        "id": "p2-13-a",
        "speaker": "Speaker 2",
        "text": "(A) He went there yesterday.",
        "vietnamese": "(A) Hôm qua anh ấy đã tới đó."
      },
      {
        "id": "p2-13-b",
        "speaker": "Speaker 2",
        "text": "(B) Well maybe a sandwich.",
        "vietnamese": "(B) Chắc là một cái bánh mì kẹp."
      },
      {
        "id": "p2-13-c",
        "speaker": "Speaker 2",
        "text": "(C) Let's eat here.",
        "vietnamese": "(C) Chúng ta hãy ăn ở đây đi."
      }
    ],
    "questions": [
      {
        "num": 13,
        "question": "Do you want to eat here in our cafeteria or go out?",
        "vietnameseQuestion": "Bạn muốn ăn tại quán ăn tự phục vụ của chúng ta hay đi ra ngoài?",
        "options": [
          {
            "key": "A",
            "text": "He went there yesterday.",
            "vietnamese": "Hôm qua anh ấy đã tới đó."
          },
          {
            "key": "B",
            "text": "Well maybe a sandwich.",
            "vietnamese": "Chắc là một cái bánh mì kẹp."
          },
          {
            "key": "C",
            "text": "Let's eat here.",
            "vietnamese": "Chúng ta hãy ăn ở đây đi."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Câu hỏi lựa chọn 'eat here... or go out?', câu (C) chọn phương án ăn tại chỗ ('Let's eat here')."
      }
    ],
    "vocabulary": [
      {
        "word": "cafeteria",
        "meaning": "quán ăn tự phục vụ, căng tin",
        "partOfSpeech": "n"
      },
      {
        "word": "go out",
        "meaning": "ra ngoài",
        "partOfSpeech": "phr v"
      }
    ]
  },
  {
    "id": "part2-14",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 14",
    "title": "Part 2 - Câu 14: Gửi hợp đồng lao động cho ông Patel",
    "audioSrc": "/audio/test1_2024.mp3",
    "startTime": 440.6,
    "endTime": 462.4,
    "transcript": [
      {
        "id": "p2-14-q",
        "speaker": "Speaker 1",
        "text": "Didn't you email the employment contract to Mr. Patel yesterday?",
        "vietnamese": "Hôm qua bạn chưa gửi email hợp đồng lao động cho ông Patel à?"
      },
      {
        "id": "p2-14-a",
        "speaker": "Speaker 2",
        "text": "(A) Yes I would agree.",
        "vietnamese": "(A) Vâng, tôi đồng ý."
      },
      {
        "id": "p2-14-b",
        "speaker": "Speaker 2",
        "text": "(B) No I'll send it now.",
        "vietnamese": "(B) Chưa, bây giờ tôi sẽ gửi ngay."
      },
      {
        "id": "p2-14-c",
        "speaker": "Speaker 2",
        "text": "(C) Check the employee manual.",
        "vietnamese": "(C) Hãy kiểm tra sổ tay nhân viên."
      }
    ],
    "questions": [
      {
        "num": 14,
        "question": "Didn't you email the employment contract to Mr. Patel yesterday?",
        "vietnameseQuestion": "Hôm qua bạn chưa gửi email hợp đồng lao động cho ông Patel à?",
        "options": [
          {
            "key": "A",
            "text": "Yes I would agree.",
            "vietnamese": "Vâng, tôi đồng ý."
          },
          {
            "key": "B",
            "text": "No I'll send it now.",
            "vietnamese": "Chưa, bây giờ tôi sẽ gửi ngay."
          },
          {
            "key": "C",
            "text": "Check the employee manual.",
            "vietnamese": "Hãy kiểm tra sổ tay nhân viên."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Câu hỏi phủ định 'Didn't you email...?', câu (B) 'No, I'll send it now' nhận lỗi chưa gửi và sẽ gửi ngay."
      }
    ],
    "vocabulary": [
      {
        "word": "employment contract",
        "meaning": "hợp đồng lao động",
        "partOfSpeech": "n"
      },
      {
        "word": "employee manual",
        "meaning": "sổ tay nhân viên",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-15",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 15",
    "title": "Part 2 - Câu 15: Thời gian dã ngoại của bộ phận",
    "audioSrc": "/audio/test1_2024.mp3",
    "startTime": 462.4,
    "endTime": 483.1,
    "transcript": [
      {
        "id": "p2-15-q",
        "speaker": "Speaker 1",
        "text": "Our division's picnic is this Saturday right?",
        "vietnamese": "Chuyến dã ngoại của bộ phận chúng ta là vào thứ Bảy này đúng không?"
      },
      {
        "id": "p2-15-a",
        "speaker": "Speaker 2",
        "text": "(A) There's a lot of rain in the forecast.",
        "vietnamese": "(A) Dự báo thời tiết có rất nhiều mưa đấy."
      },
      {
        "id": "p2-15-b",
        "speaker": "Speaker 2",
        "text": "(B) Sure I like salad.",
        "vietnamese": "(B) Chắc chắn rồi, tôi thích món salad."
      },
      {
        "id": "p2-15-c",
        "speaker": "Speaker 2",
        "text": "(C) At the end of this corridor.",
        "vietnamese": "(C) Ở cuối hành lang này."
      }
    ],
    "questions": [
      {
        "num": 15,
        "question": "Our division's picnic is this Saturday right?",
        "vietnameseQuestion": "Chuyến dã ngoại của bộ phận chúng ta là vào thứ Bảy này đúng không?",
        "options": [
          {
            "key": "A",
            "text": "There's a lot of rain in the forecast.",
            "vietnamese": "Dự báo thời tiết có rất nhiều mưa đấy."
          },
          {
            "key": "B",
            "text": "Sure I like salad.",
            "vietnamese": "Chắc chắn rồi, tôi thích món salad."
          },
          {
            "key": "C",
            "text": "At the end of this corridor.",
            "vietnamese": "Ở cuối hành lang này."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Câu hỏi đuôi xác nhận buổi dã ngoại thứ 7, câu (A) gián tiếp phản hồi liên quan đến thời tiết có thể ảnh hưởng buổi đi chơi."
      }
    ],
    "vocabulary": [
      {
        "word": "division",
        "meaning": "bộ phận, phòng ban",
        "partOfSpeech": "n"
      },
      {
        "word": "forecast",
        "meaning": "dự báo (thời tiết)",
        "partOfSpeech": "n"
      },
      {
        "word": "corridor",
        "meaning": "hành lang",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-16",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 16",
    "title": "Part 2 - Câu 16: Lựa chọn cà phê hay trà",
    "audioSrc": "/audio/test1_2024.mp3",
    "startTime": 483.1,
    "endTime": 502.0,
    "transcript": [
      {
        "id": "p2-16-q",
        "speaker": "Speaker 1",
        "text": "Would you like coffee or tea?",
        "vietnamese": "Bạn muốn dùng cà phê hay trà?"
      },
      {
        "id": "p2-16-a",
        "speaker": "Speaker 2",
        "text": "(A) Just water please.",
        "vietnamese": "(A) Chỉ cần nước lọc thôi, cảm ơn bạn."
      },
      {
        "id": "p2-16-b",
        "speaker": "Speaker 2",
        "text": "(B) For a few dollars more.",
        "vietnamese": "(B) Thêm vài đô la nữa."
      },
      {
        "id": "p2-16-c",
        "speaker": "Speaker 2",
        "text": "(C) A 15 minute break.",
        "vietnamese": "(C) Nghỉ giải lao 15 phút."
      }
    ],
    "questions": [
      {
        "num": 16,
        "question": "Would you like coffee or tea?",
        "vietnameseQuestion": "Bạn muốn dùng cà phê hay trà?",
        "options": [
          {
            "key": "A",
            "text": "Just water please.",
            "vietnamese": "Chỉ cần nước lọc thôi, cảm ơn bạn."
          },
          {
            "key": "B",
            "text": "For a few dollars more.",
            "vietnamese": "Thêm vài đô la nữa."
          },
          {
            "key": "C",
            "text": "A 15 minute break.",
            "vietnamese": "Nghỉ giải lao 15 phút."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Câu hỏi lựa chọn 'coffee or tea?', câu (A) đưa ra phương án thức uống thay thế mong muốn ('Just water please')."
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
    "id": "part2-17",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 17",
    "title": "Part 2 - Câu 17: Đạt chỉ tiêu doanh số tháng này",
    "audioSrc": "/audio/test1_2024.mp3",
    "startTime": 502.0,
    "endTime": 521.5,
    "transcript": [
      {
        "id": "p2-17-q",
        "speaker": "Speaker 1",
        "text": "We achieved our sales targets this month.",
        "vietnamese": "Tháng này chúng ta đã đạt được các mục tiêu doanh số."
      },
      {
        "id": "p2-17-a",
        "speaker": "Speaker 2",
        "text": "(A) That's excellent news.",
        "vietnamese": "(A) Đó là một tin tức tuyệt vời."
      },
      {
        "id": "p2-17-b",
        "speaker": "Speaker 2",
        "text": "(B) A few times a day.",
        "vietnamese": "(B) Vài lần một ngày."
      },
      {
        "id": "p2-17-c",
        "speaker": "Speaker 2",
        "text": "(C) To the end of April.",
        "vietnamese": "(C) Cho đến cuối tháng Tư."
      }
    ],
    "questions": [
      {
        "num": 17,
        "question": "We achieved our sales targets this month.",
        "vietnameseQuestion": "Tháng này chúng ta đã đạt được các mục tiêu doanh số.",
        "options": [
          {
            "key": "A",
            "text": "That's excellent news.",
            "vietnamese": "Đó là một tin tức tuyệt vời."
          },
          {
            "key": "B",
            "text": "A few times a day.",
            "vietnamese": "Vài lần một ngày."
          },
          {
            "key": "C",
            "text": "To the end of April.",
            "vietnamese": "Cho đến cuối tháng Tư."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Câu trần thuật thông báo tin tốt, câu trả lời hợp lý nhất là lời chúc mừng/khen ngợi (A) 'That's excellent news'."
      }
    ],
    "vocabulary": [
      {
        "word": "achieve",
        "meaning": "đạt được",
        "partOfSpeech": "v"
      },
      {
        "word": "sales target",
        "meaning": "mục tiêu doanh số bán hàng",
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
    "id": "part2-18",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 18",
    "title": "Part 2 - Câu 18: Tần suất đi công tác",
    "audioSrc": "/audio/test1_2024.mp3",
    "startTime": 521.5,
    "endTime": 541.3,
    "transcript": [
      {
        "id": "p2-18-q",
        "speaker": "Speaker 1",
        "text": "How often do you travel for your job?",
        "vietnamese": "Bạn có thường xuyên phải đi công tác vì công việc không?"
      },
      {
        "id": "p2-18-a",
        "speaker": "Speaker 2",
        "text": "(A) It turned out well.",
        "vietnamese": "(A) Kết quả diễn ra tốt đẹp."
      },
      {
        "id": "p2-18-b",
        "speaker": "Speaker 2",
        "text": "(B) Yes I did find one.",
        "vietnamese": "(B) Vâng, tôi đã tìm thấy một cái."
      },
      {
        "id": "p2-18-c",
        "speaker": "Speaker 2",
        "text": "(C) About once a month.",
        "vietnamese": "(C) Khoảng mỗi tháng một lần."
      }
    ],
    "questions": [
      {
        "num": 18,
        "question": "How often do you travel for your job?",
        "vietnameseQuestion": "Bạn có thường xuyên phải đi công tác vì công việc không?",
        "options": [
          {
            "key": "A",
            "text": "It turned out well.",
            "vietnamese": "Kết quả diễn ra tốt đẹp."
          },
          {
            "key": "B",
            "text": "Yes I did find one.",
            "vietnamese": "Vâng, tôi đã tìm thấy một cái."
          },
          {
            "key": "C",
            "text": "About once a month.",
            "vietnamese": "Khoảng mỗi tháng một lần."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Câu hỏi 'How often...?' hỏi tần suất, câu (C) nêu rõ tần suất 'About once a month'."
      }
    ],
    "vocabulary": [
      {
        "word": "how often",
        "meaning": "bao lâu một lần, tần suất thế nào",
        "partOfSpeech": "phr"
      },
      {
        "word": "travel",
        "meaning": "đi lại, đi công tác",
        "partOfSpeech": "v"
      },
      {
        "word": "turn out",
        "meaning": "hóa ra, diễn biến kết quả",
        "partOfSpeech": "phr v"
      }
    ]
  },
  {
    "id": "part2-19",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 19",
    "title": "Part 2 - Câu 19: Đề xuất đi bộ đường mòn hoa dại",
    "audioSrc": "/audio/test1_2024.mp3",
    "startTime": 541.3,
    "endTime": 560.9,
    "transcript": [
      {
        "id": "p2-19-q",
        "speaker": "Speaker 1",
        "text": "We should hike the wildflower trail today.",
        "vietnamese": "Hôm nay chúng ta nên đi bộ đường mòn ngắm hoa dại."
      },
      {
        "id": "p2-19-a",
        "speaker": "Speaker 2",
        "text": "(A) This seat is available.",
        "vietnamese": "(A) Ghế này còn trống."
      },
      {
        "id": "p2-19-b",
        "speaker": "Speaker 2",
        "text": "(B) I didn't bring boots.",
        "vietnamese": "(B) Tôi không mang theo ủng/giày đi bộ."
      },
      {
        "id": "p2-19-c",
        "speaker": "Speaker 2",
        "text": "(C) At the visitors center.",
        "vietnamese": "(C) Tại trung tâm đón tiếp khách tham quan."
      }
    ],
    "questions": [
      {
        "num": 19,
        "question": "We should hike the wildflower trail today.",
        "vietnameseQuestion": "Hôm nay chúng ta nên đi bộ đường mòn ngắm hoa dại.",
        "options": [
          {
            "key": "A",
            "text": "This seat is available.",
            "vietnamese": "Ghế này còn trống."
          },
          {
            "key": "B",
            "text": "I didn't bring boots.",
            "vietnamese": "Tôi không mang theo ủng/giày đi bộ."
          },
          {
            "key": "C",
            "text": "At the visitors center.",
            "vietnamese": "Tại trung tâm đón tiếp khách tham quan."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Lời rủ đi bộ leo núi, câu (B) gián tiếp từ chối vì không mang giày dép phù hợp ('I didn't bring boots')."
      }
    ],
    "vocabulary": [
      {
        "word": "hike",
        "meaning": "đi bộ đường dài, leo núi",
        "partOfSpeech": "v"
      },
      {
        "word": "trail",
        "meaning": "đường mòn",
        "partOfSpeech": "n"
      },
      {
        "word": "wildflower",
        "meaning": "hoa dại",
        "partOfSpeech": "n"
      },
      {
        "word": "boots",
        "meaning": "ủng, giày chuyên dụng đi rừng",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-20",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 20",
    "title": "Part 2 - Câu 20: Đặt phòng khách sạn ở London",
    "audioSrc": "/audio/test1_2024.mp3",
    "startTime": 560.9,
    "endTime": 581.5,
    "transcript": [
      {
        "id": "p2-20-q",
        "speaker": "Speaker 1",
        "text": "You have booked a hotel in London, haven't you?",
        "vietnamese": "Bạn đã đặt phòng khách sạn ở London rồi đúng không?"
      },
      {
        "id": "p2-20-a",
        "speaker": "Speaker 2",
        "text": "(A) Very enjoyable, thanks.",
        "vietnamese": "(A) Rất thú vị, cảm ơn."
      },
      {
        "id": "p2-20-b",
        "speaker": "Speaker 2",
        "text": "(B) He usually takes the train.",
        "vietnamese": "(B) Anh ấy thường đi tàu hỏa."
      },
      {
        "id": "p2-20-c",
        "speaker": "Speaker 2",
        "text": "(C) Yes, I made a reservation last week.",
        "vietnamese": "(C) Vâng, tôi đã đặt phòng vào tuần trước rồi."
      }
    ],
    "questions": [
      {
        "num": 20,
        "question": "You have booked a hotel in London, haven't you?",
        "vietnameseQuestion": "Bạn đã đặt phòng khách sạn ở London rồi đúng không?",
        "options": [
          {
            "key": "A",
            "text": "Very enjoyable, thanks.",
            "vietnamese": "Rất thú vị, cảm ơn."
          },
          {
            "key": "B",
            "text": "He usually takes the train.",
            "vietnamese": "Anh ấy thường đi tàu hỏa."
          },
          {
            "key": "C",
            "text": "Yes, I made a reservation last week.",
            "vietnamese": "Vâng, tôi đã đặt phòng vào tuần trước rồi."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Câu hỏi đuôi xác nhận việc đặt phòng, câu (C) khẳng định đã hoàn tất tuần trước ('made a reservation last week')."
      }
    ],
    "vocabulary": [
      {
        "word": "book",
        "meaning": "đặt trước (phòng, vé)",
        "partOfSpeech": "v"
      },
      {
        "word": "make a reservation",
        "meaning": "đặt chỗ trước",
        "partOfSpeech": "idiom"
      }
    ]
  },
  {
    "id": "part2-21",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 21",
    "title": "Part 2 - Câu 21: Vé buổi hòa nhạc tối nay",
    "audioSrc": "/audio/test1_2024.mp3",
    "startTime": 581.5,
    "endTime": 602.0,
    "transcript": [
      {
        "id": "p2-21-q",
        "speaker": "Speaker 1",
        "text": "Are there any tickets left for tonight's concert?",
        "vietnamese": "Còn vé cho buổi hòa nhạc tối nay không?"
      },
      {
        "id": "p2-21-a",
        "speaker": "Speaker 2",
        "text": "(A) It's sold out.",
        "vietnamese": "(A) Vé đã bán hết sạch rồi."
      },
      {
        "id": "p2-21-b",
        "speaker": "Speaker 2",
        "text": "(B) He's a concert violinist.",
        "vietnamese": "(B) Anh ấy là nghệ sĩ vĩ cầm hòa nhạc."
      },
      {
        "id": "p2-21-c",
        "speaker": "Speaker 2",
        "text": "(C) They already left.",
        "vietnamese": "(C) Họ đã rời đi rồi."
      }
    ],
    "questions": [
      {
        "num": 21,
        "question": "Are there any tickets left for tonight's concert?",
        "vietnameseQuestion": "Còn vé cho buổi hòa nhạc tối nay không?",
        "options": [
          {
            "key": "A",
            "text": "It's sold out.",
            "vietnamese": "Vé đã bán hết sạch rồi."
          },
          {
            "key": "B",
            "text": "He's a concert violinist.",
            "vietnamese": "Anh ấy là nghệ sĩ vĩ cầm hòa nhạc."
          },
          {
            "key": "C",
            "text": "They already left.",
            "vietnamese": "Họ đã rời đi rồi."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Câu hỏi 'Are there any tickets left...?', câu (A) trả lời đã hết vé ('It's sold out')."
      }
    ],
    "vocabulary": [
      {
        "word": "sold out",
        "meaning": "hết hàng, hết vé",
        "partOfSpeech": "adj"
      },
      {
        "word": "concert",
        "meaning": "buổi hòa nhạc",
        "partOfSpeech": "n"
      },
      {
        "word": "violinist",
        "meaning": "nghệ sĩ chơi đàn vĩ cầm",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-22",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 22",
    "title": "Part 2 - Câu 22: Kinh nghiệm sử dụng phần mềm",
    "audioSrc": "/audio/test1_2024.mp3",
    "startTime": 602.0,
    "endTime": 620.8,
    "transcript": [
      {
        "id": "p2-22-q",
        "speaker": "Speaker 1",
        "text": "Haven't you used this software before?",
        "vietnamese": "Trước đây bạn chưa từng dùng phần mềm này à?"
      },
      {
        "id": "p2-22-a",
        "speaker": "Speaker 2",
        "text": "(A) Can I take your order?",
        "vietnamese": "(A) Tôi có thể ghi món bạn gọi không?"
      },
      {
        "id": "p2-22-b",
        "speaker": "Speaker 2",
        "text": "(B) I haven't had the chance.",
        "vietnamese": "(B) Tôi chưa có cơ hội dùng thử."
      },
      {
        "id": "p2-22-c",
        "speaker": "Speaker 2",
        "text": "(C) About 0.",
        "vietnamese": "(C) Khoảng 40 đô la."
      }
    ],
    "questions": [
      {
        "num": 22,
        "question": "Haven't you used this software before?",
        "vietnameseQuestion": "Trước đây bạn chưa từng dùng phần mềm này à?",
        "options": [
          {
            "key": "A",
            "text": "Can I take your order?",
            "vietnamese": "Tôi có thể ghi món bạn gọi không?"
          },
          {
            "key": "B",
            "text": "I haven't had the chance.",
            "vietnamese": "Tôi chưa có cơ hội dùng thử."
          },
          {
            "key": "C",
            "text": "About 0.",
            "vietnamese": "Khoảng 40 đô la."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Câu hỏi phủ định về việc dùng phần mềm, câu (B) giải thích lý do chưa từng dùng vì chưa có dịp/cơ hội ('haven't had the chance')."
      }
    ],
    "vocabulary": [
      {
        "word": "software",
        "meaning": "phần mềm máy tính",
        "partOfSpeech": "n"
      },
      {
        "word": "have the chance",
        "meaning": "có cơ hội làm gì",
        "partOfSpeech": "idiom"
      }
    ]
  },
  {
    "id": "part2-23",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 23",
    "title": "Part 2 - Câu 23: Thời điểm ra mắt máy xay sinh tố mới",
    "audioSrc": "/audio/test1_2024.mp3",
    "startTime": 620.8,
    "endTime": 646.6,
    "transcript": [
      {
        "id": "p2-23-q",
        "speaker": "Speaker 1",
        "text": "When is the new blender going to be released?",
        "vietnamese": "Khi nào thì chiếc máy xay mới sẽ được ra mắt thị trường?"
      },
      {
        "id": "p2-23-a",
        "speaker": "Speaker 2",
        "text": "(A) Only with fruits and vegetables.",
        "vietnamese": "(A) Chỉ với các loại trái cây và rau củ."
      },
      {
        "id": "p2-23-b",
        "speaker": "Speaker 2",
        "text": "(B) In the kitchen cabinet.",
        "vietnamese": "(B) Ở trong tủ bếp."
      },
      {
        "id": "p2-23-c",
        "speaker": "Speaker 2",
        "text": "(C) The prototype is still being tested.",
        "vietnamese": "(C) Bản mẫu thử nghiệm vẫn đang trong quá trình kiểm tra."
      }
    ],
    "questions": [
      {
        "num": 23,
        "question": "When is the new blender going to be released?",
        "vietnameseQuestion": "Khi nào thì chiếc máy xay mới sẽ được ra mắt thị trường?",
        "options": [
          {
            "key": "A",
            "text": "Only with fruits and vegetables.",
            "vietnamese": "Chỉ với các loại trái cây và rau củ."
          },
          {
            "key": "B",
            "text": "In the kitchen cabinet.",
            "vietnamese": "Ở trong tủ bếp."
          },
          {
            "key": "C",
            "text": "The prototype is still being tested.",
            "vietnamese": "Bản mẫu thử nghiệm vẫn đang trong quá trình kiểm tra."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Câu hỏi 'When... released?', câu (C) gián tiếp trả lời chưa có ngày cụ thể vì bản mẫu thử nghiệm vẫn đang được kiểm tra."
      }
    ],
    "vocabulary": [
      {
        "word": "blender",
        "meaning": "máy xay sinh tố",
        "partOfSpeech": "n"
      },
      {
        "word": "release",
        "meaning": "phát hành, ra mắt",
        "partOfSpeech": "v"
      },
      {
        "word": "prototype",
        "meaning": "mẫu thử nghiệm ban đầu",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-24",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 24",
    "title": "Part 2 - Câu 24: Đón khách hàng ở sân bay",
    "audioSrc": "/audio/test1_2024.mp3",
    "startTime": 646.6,
    "endTime": 662.1,
    "transcript": [
      {
        "id": "p2-24-q",
        "speaker": "Speaker 1",
        "text": "Who's picking up our clients at the airport?",
        "vietnamese": "Ai sẽ đi đón các khách hàng của chúng ta tại sân bay?"
      },
      {
        "id": "p2-24-a",
        "speaker": "Speaker 2",
        "text": "(A) They decided to drive.",
        "vietnamese": "(A) Họ đã quyết định tự lái xe rồi."
      },
      {
        "id": "p2-24-b",
        "speaker": "Speaker 2",
        "text": "(B) At terminal two.",
        "vietnamese": "(B) Tại nhà ga số hai."
      },
      {
        "id": "p2-24-c",
        "speaker": "Speaker 2",
        "text": "(C) It's a marketing position.",
        "vietnamese": "(C) Đó là một vị trí tiếp thị."
      }
    ],
    "questions": [
      {
        "num": 24,
        "question": "Who's picking up our clients at the airport?",
        "vietnameseQuestion": "Ai sẽ đi đón các khách hàng của chúng ta tại sân bay?",
        "options": [
          {
            "key": "A",
            "text": "They decided to drive.",
            "vietnamese": "Họ đã quyết định tự lái xe rồi."
          },
          {
            "key": "B",
            "text": "At terminal two.",
            "vietnamese": "Tại nhà ga số hai."
          },
          {
            "key": "C",
            "text": "It's a marketing position.",
            "vietnamese": "Đó là một vị trí tiếp thị."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Câu hỏi 'Who is picking up...?', câu (A) thông báo không cần người đón vì khách đã tự lái xe đến."
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
        "meaning": "khách hàng",
        "partOfSpeech": "n"
      },
      {
        "word": "terminal",
        "meaning": "nhà ga sân bay",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-25",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 25",
    "title": "Part 2 - Câu 25: Vị trí hoa hồng đỏ nhập về ban sáng",
    "audioSrc": "/audio/test1_2024.mp3",
    "startTime": 662.1,
    "endTime": 683.7,
    "transcript": [
      {
        "id": "p2-25-q",
        "speaker": "Speaker 1",
        "text": "Where are the red roses that came in this morning?",
        "vietnamese": "Những bông hoa hồng đỏ nhập về sáng nay đâu rồi?"
      },
      {
        "id": "p2-25-a",
        "speaker": "Speaker 2",
        "text": "(A) About three liters of water.",
        "vietnamese": "(A) Khoảng ba lít nước."
      },
      {
        "id": "p2-25-b",
        "speaker": "Speaker 2",
        "text": "(B) No I didn't check out the sale.",
        "vietnamese": "(B) Không, tôi không xem đợt giảm giá."
      },
      {
        "id": "p2-25-c",
        "speaker": "Speaker 2",
        "text": "(C) I needed some for a large bouquet.",
        "vietnamese": "(C) Tôi đã lấy một ít để làm một bó hoa lớn rồi."
      }
    ],
    "questions": [
      {
        "num": 25,
        "question": "Where are the red roses that came in this morning?",
        "vietnameseQuestion": "Những bông hoa hồng đỏ nhập về sáng nay đâu rồi?",
        "options": [
          {
            "key": "A",
            "text": "About three liters of water.",
            "vietnamese": "Khoảng ba lít nước."
          },
          {
            "key": "B",
            "text": "No I didn't check out the sale.",
            "vietnamese": "Không, tôi không xem đợt giảm giá."
          },
          {
            "key": "C",
            "text": "I needed some for a large bouquet.",
            "vietnamese": "Tôi đã lấy một ít để làm một bó hoa lớn rồi."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Câu hỏi 'Where...?', câu (C) giải thích hoa ở đâu bằng cách thừa nhận người nói đã mang đi cắm bó hoa lớn."
      }
    ],
    "vocabulary": [
      {
        "word": "rose",
        "meaning": "hoa hồng",
        "partOfSpeech": "n"
      },
      {
        "word": "bouquet",
        "meaning": "bó hoa",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-26",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 26",
    "title": "Part 2 - Câu 26: Bộ phim được đề cử giải thưởng",
    "audioSrc": "/audio/test1_2024.mp3",
    "startTime": 683.7,
    "endTime": 704.3,
    "transcript": [
      {
        "id": "p2-26-q",
        "speaker": "Speaker 1",
        "text": "This film has been nominated for several awards.",
        "vietnamese": "Bộ phim này đã được đề cử cho một vài giải thưởng."
      },
      {
        "id": "p2-26-a",
        "speaker": "Speaker 2",
        "text": "(A) Why don't we go see it?",
        "vietnamese": "(A) Sao chúng ta không đi xem phim đó nhỉ?"
      },
      {
        "id": "p2-26-b",
        "speaker": "Speaker 2",
        "text": "(B) After the announcement.",
        "vietnamese": "(B) Sau thông báo."
      },
      {
        "id": "p2-26-c",
        "speaker": "Speaker 2",
        "text": "(C) He made a great speech.",
        "vietnamese": "(C) Anh ấy đã có một bài phát biểu tuyệt vời."
      }
    ],
    "questions": [
      {
        "num": 26,
        "question": "This film has been nominated for several awards.",
        "vietnameseQuestion": "Bộ phim này đã được đề cử cho một vài giải thưởng.",
        "options": [
          {
            "key": "A",
            "text": "Why don't we go see it?",
            "vietnamese": "Sao chúng ta không đi xem phim đó nhỉ?"
          },
          {
            "key": "B",
            "text": "After the announcement.",
            "vietnamese": "Sau thông báo."
          },
          {
            "key": "C",
            "text": "He made a great speech.",
            "vietnamese": "Anh ấy đã có một bài phát biểu tuyệt vời."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Câu trần thuật khen bộ phim được đề cử, câu (A) đưa ra lời rủ cùng đi xem rất hợp tự nhiên ('Why don't we go see it?')."
      }
    ],
    "vocabulary": [
      {
        "word": "nominate",
        "meaning": "đề cử",
        "partOfSpeech": "v"
      },
      {
        "word": "award",
        "meaning": "giải thưởng",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-27",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 27",
    "title": "Part 2 - Câu 27: Chương trình đi chung xe",
    "audioSrc": "/audio/test1_2024.mp3",
    "startTime": 704.3,
    "endTime": 726.2,
    "transcript": [
      {
        "id": "p2-27-q",
        "speaker": "Speaker 1",
        "text": "Who's interested in starting a carpool program?",
        "vietnamese": "Ai quan tâm đến việc khởi xướng chương trình đi chung xe?"
      },
      {
        "id": "p2-27-a",
        "speaker": "Speaker 2",
        "text": "(A) Thanks, but I can't swim.",
        "vietnamese": "(A) Cảm ơn, nhưng tôi không biết bơi."
      },
      {
        "id": "p2-27-b",
        "speaker": "Speaker 2",
        "text": "(B) Clara's already organizing one.",
        "vietnamese": "(B) Clara đã đang đứng ra tổ chức một nhóm rồi."
      },
      {
        "id": "p2-27-c",
        "speaker": "Speaker 2",
        "text": "(C) It's a very interesting article.",
        "vietnamese": "(C) Đó là một bài báo rất thú vị."
      }
    ],
    "questions": [
      {
        "num": 27,
        "question": "Who's interested in starting a carpool program?",
        "vietnameseQuestion": "Ai quan tâm đến việc khởi xướng chương trình đi chung xe?",
        "options": [
          {
            "key": "A",
            "text": "Thanks, but I can't swim.",
            "vietnamese": "Cảm ơn, nhưng tôi không biết bơi."
          },
          {
            "key": "B",
            "text": "Clara's already organizing one.",
            "vietnamese": "Clara đã đang đứng ra tổ chức một nhóm rồi."
          },
          {
            "key": "C",
            "text": "It's a very interesting article.",
            "vietnamese": "Đó là một bài báo rất thú vị."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Câu hỏi 'Who is interested...?', câu (B) chỉ đích danh Clara đã đang tổ chức một chương trình như vậy."
      }
    ],
    "vocabulary": [
      {
        "word": "carpool",
        "meaning": "đi chung xe hơi",
        "partOfSpeech": "n/v"
      },
      {
        "word": "organize",
        "meaning": "tổ chức, sắp đặt",
        "partOfSpeech": "v"
      }
    ]
  },
  {
    "id": "part2-28",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 28",
    "title": "Part 2 - Câu 28: Địa điểm giảng dạy hội thảo",
    "audioSrc": "/audio/test1_2024.mp3",
    "startTime": 726.2,
    "endTime": 746.8,
    "transcript": [
      {
        "id": "p2-28-q",
        "speaker": "Speaker 1",
        "text": "Where will I teach my workshop this month?",
        "vietnamese": "Tháng này tôi sẽ dạy buổi hội thảo của mình ở đâu?"
      },
      {
        "id": "p2-28-a",
        "speaker": "Speaker 2",
        "text": "(A) We just sent an email to all instructors.",
        "vietnamese": "(A) Chúng tôi vừa mới gửi email thông báo cho toàn bộ giảng viên rồi."
      },
      {
        "id": "p2-28-b",
        "speaker": "Speaker 2",
        "text": "(B) Five to seven months.",
        "vietnamese": "(B) Từ năm đến bảy tháng."
      },
      {
        "id": "p2-28-c",
        "speaker": "Speaker 2",
        "text": "(C) Yes, it's a beautiful building.",
        "vietnamese": "(C) Vâng, đó là một tòa nhà đẹp."
      }
    ],
    "questions": [
      {
        "num": 28,
        "question": "Where will I teach my workshop this month?",
        "vietnameseQuestion": "Tháng này tôi sẽ dạy buổi hội thảo của mình ở đâu?",
        "options": [
          {
            "key": "A",
            "text": "We just sent an email to all instructors.",
            "vietnamese": "Chúng tôi vừa mới gửi email thông báo cho toàn bộ giảng viên rồi."
          },
          {
            "key": "B",
            "text": "Five to seven months.",
            "vietnamese": "Từ năm đến bảy tháng."
          },
          {
            "key": "C",
            "text": "Yes, it's a beautiful building.",
            "vietnamese": "Vâng, đó là một tòa nhà đẹp."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Câu hỏi địa điểm, câu (A) gián tiếp chỉ người hỏi kiểm tra email vừa gửi để biết phòng/địa điểm học."
      }
    ],
    "vocabulary": [
      {
        "word": "workshop",
        "meaning": "buổi hội thảo chuyên đề, khóa đào tạo thực hành",
        "partOfSpeech": "n"
      },
      {
        "word": "instructor",
        "meaning": "giảng viên, người hướng dẫn",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-29",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 29",
    "title": "Part 2 - Câu 29: Chuyển áo len về phía sau cửa hàng",
    "audioSrc": "/audio/test1_2024.mp3",
    "startTime": 746.8,
    "endTime": 768.6,
    "transcript": [
      {
        "id": "p2-29-q",
        "speaker": "Speaker 1",
        "text": "Why are we moving these sweaters to the back of the store?",
        "vietnamese": "Tại sao chúng ta lại dọn những chiếc áo len này ra phía sau cửa hàng?"
      },
      {
        "id": "p2-29-a",
        "speaker": "Speaker 2",
        "text": "(A) In the new shopping mall.",
        "vietnamese": "(A) Ở trong trung tâm mua sắm mới."
      },
      {
        "id": "p2-29-b",
        "speaker": "Speaker 2",
        "text": "(B) Yes, they come in other colors.",
        "vietnamese": "(B) Có, chúng còn có các màu khác."
      },
      {
        "id": "p2-29-c",
        "speaker": "Speaker 2",
        "text": "(C) Our spring merchandise is arriving soon.",
        "vietnamese": "(C) Hàng hóa mùa xuân của chúng ta sắp được chuyển đến rồi."
      }
    ],
    "questions": [
      {
        "num": 29,
        "question": "Why are we moving these sweaters to the back of the store?",
        "vietnameseQuestion": "Tại sao chúng ta lại dọn những chiếc áo len này ra phía sau cửa hàng?",
        "options": [
          {
            "key": "A",
            "text": "In the new shopping mall.",
            "vietnamese": "Ở trong trung tâm mua sắm mới."
          },
          {
            "key": "B",
            "text": "Yes, they come in other colors.",
            "vietnamese": "Có, chúng còn có các màu khác."
          },
          {
            "key": "C",
            "text": "Our spring merchandise is arriving soon.",
            "vietnamese": "Hàng hóa mùa xuân của chúng ta sắp được chuyển đến rồi."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Câu hỏi nguyên nhân 'Why...?', câu (C) giải thích cần dọn chỗ vì hàng mùa xuân mới sắp nhập về."
      }
    ],
    "vocabulary": [
      {
        "word": "sweater",
        "meaning": "áo len",
        "partOfSpeech": "n"
      },
      {
        "word": "merchandise",
        "meaning": "hàng hóa",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-30",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 30",
    "title": "Part 2 - Câu 30: Hỗ trợ xử lý hợp đồng",
    "audioSrc": "/audio/test1_2024.mp3",
    "startTime": 768.6,
    "endTime": 794.8,
    "transcript": [
      {
        "id": "p2-30-q",
        "speaker": "Speaker 1",
        "text": "Would you be interested in working on some of these contracts?",
        "vietnamese": "Bạn có hứng thú nhận làm một vài hợp đồng trong số này không?"
      },
      {
        "id": "p2-30-a",
        "speaker": "Speaker 2",
        "text": "(A) Thank you for meeting me.",
        "vietnamese": "(A) Cảm ơn bạn đã gặp tôi."
      },
      {
        "id": "p2-30-b",
        "speaker": "Speaker 2",
        "text": "(B) A contact lens prescription.",
        "vietnamese": "(B) Đơn thuốc kính áp tròng."
      },
      {
        "id": "p2-30-c",
        "speaker": "Speaker 2",
        "text": "(C) I have very limited time.",
        "vietnamese": "(C) Thời gian của tôi rất hạn hẹp."
      }
    ],
    "questions": [
      {
        "num": 30,
        "question": "Would you be interested in working on some of these contracts?",
        "vietnameseQuestion": "Bạn có hứng thú nhận làm một vài hợp đồng trong số này không?",
        "options": [
          {
            "key": "A",
            "text": "Thank you for meeting me.",
            "vietnamese": "Cảm ơn bạn đã gặp tôi."
          },
          {
            "key": "B",
            "text": "A contact lens prescription.",
            "vietnamese": "Đơn thuốc kính áp tròng."
          },
          {
            "key": "C",
            "text": "I have very limited time.",
            "vietnamese": "Thời gian của tôi rất hạn hẹp."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Câu hỏi đề nghị tham gia công việc, câu (C) khéo léo từ chối do quá bận rộn ('I have very limited time')."
      }
    ],
    "vocabulary": [
      {
        "word": "contract",
        "meaning": "hợp đồng",
        "partOfSpeech": "n"
      },
      {
        "word": "limited",
        "meaning": "có hạn, hạn chế",
        "partOfSpeech": "adj"
      }
    ]
  },
  {
    "id": "part2-31",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 31",
    "title": "Part 2 - Câu 31: Loại công việc đang tìm kiếm",
    "audioSrc": "/audio/test1_2024.mp3",
    "startTime": 794.8,
    "endTime": 811.3,
    "transcript": [
      {
        "id": "p2-31-q",
        "speaker": "Speaker 1",
        "text": "What type of job are you looking for?",
        "vietnamese": "Bạn đang tìm kiếm loại công việc như thế nào?"
      },
      {
        "id": "p2-31-a",
        "speaker": "Speaker 2",
        "text": "(A) No, at 10 a.m.",
        "vietnamese": "(A) Không, lúc 10 giờ sáng."
      },
      {
        "id": "p2-31-b",
        "speaker": "Speaker 2",
        "text": "(B) I really like working with computers.",
        "vietnamese": "(B) Tôi thực sự rất thích làm việc với máy tính."
      },
      {
        "id": "p2-31-c",
        "speaker": "Speaker 2",
        "text": "(C) Just a resume is needed.",
        "vietnamese": "(C) Chỉ cần một bản sơ yếu lý lịch thôi."
      }
    ],
    "questions": [
      {
        "num": 31,
        "question": "What type of job are you looking for?",
        "vietnameseQuestion": "Bạn đang tìm kiếm loại công việc như thế nào?",
        "options": [
          {
            "key": "A",
            "text": "No, at 10 a.m.",
            "vietnamese": "Không, lúc 10 giờ sáng."
          },
          {
            "key": "B",
            "text": "I really like working with computers.",
            "vietnamese": "Tôi thực sự rất thích làm việc với máy tính."
          },
          {
            "key": "C",
            "text": "Just a resume is needed.",
            "vietnamese": "Chỉ cần một bản sơ yếu lý lịch thôi."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Câu hỏi 'What type of job...?', câu (B) chia sẻ sở thích làm việc trong lĩnh vực máy tính/CNTT."
      }
    ],
    "vocabulary": [
      {
        "word": "look for",
        "meaning": "tìm kiếm",
        "partOfSpeech": "phr v"
      },
      {
        "word": "resume",
        "meaning": "sơ yếu lý lịch",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part3-32-34",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 32 - 34",
    "title": "Part 3 - Câu 32 - 34: Trao đổi về món tráng miệng trong buổi dã ngoại công ty",
    "audioSrc": "/audio/test1_2024.mp3",
    "startTime": 845.72,
    "endTime": 922.17,
    "transcript": [
      {
        "id": "p3-32-1",
        "speaker": "Woman",
        "text": "Thank you so much for organizing the annual company picnic, Jing Dao. Everybody seemed to enjoy it.",
        "vietnamese": "Cảm ơn anh rất nhiều vì đã tổ chức buổi dã ngoại thường niên của công ty, Jing Dao. Mọi người dường như đều rất thích nó."
      },
      {
        "id": "p3-32-2",
        "speaker": "Man",
        "text": "Well, we deserved it after working so hard this year.",
        "vietnamese": "À, chúng ta xứng đáng được hưởng điều đó sau một năm làm việc chăm chỉ mà."
      },
      {
        "id": "p3-32-3",
        "speaker": "Woman",
        "text": "I agree. The food was great, by the way. Especially the peach pie you made. Would you mind sharing the recipe? It was delicious.",
        "vietnamese": "Tôi đồng ý. Nhân tiện thì đồ ăn rất tuyệt vời. Đặc biệt là món bánh nướng đào do anh làm. Anh có phiền chia sẻ công thức không? Nó ngon tuyệt."
      },
      {
        "id": "p3-32-4",
        "speaker": "Man",
        "text": "I found the recipe online. I'll send you a link to the web page. There's a really helpful video that walks you through all the steps. I recommend you watch it first.",
        "vietnamese": "Tôi tìm thấy công thức trên mạng đấy. Tôi sẽ gửi cho cô đường link trang web. Có một video rất hữu ích hướng dẫn từng bước một. Tôi khuyên cô nên xem nó trước."
      },
      {
        "id": "p3-32-5",
        "speaker": "Woman",
        "text": "All right, thanks.",
        "vietnamese": "Được rồi, cảm ơn anh."
      }
    ],
    "questions": [
      {
        "num": 32,
        "question": "What event does the woman mention?",
        "vietnameseQuestion": "Người phụ nữ nhắc đến sự kiện gì?",
        "options": [
          {
            "key": "A",
            "text": "A job fair",
            "vietnamese": "Hội chợ việc làm"
          },
          {
            "key": "B",
            "text": "A cooking class",
            "vietnamese": "Lớp học nấu ăn"
          },
          {
            "key": "C",
            "text": "A fund-raiser",
            "vietnamese": "Sự kiện gây quỹ"
          },
          {
            "key": "D",
            "text": "A company picnic",
            "vietnamese": "Buổi dã ngoại công ty"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Người phụ nữ nói: \"Thank you so much for organizing the annual company picnic\" (buổi dã ngoại công ty)."
      },
      {
        "num": 33,
        "question": "What does the woman ask for?",
        "vietnameseQuestion": "Người phụ nữ xin cái gì?",
        "options": [
          {
            "key": "A",
            "text": "A guest list",
            "vietnamese": "Danh sách khách mời"
          },
          {
            "key": "B",
            "text": "A dessert recipe",
            "vietnamese": "Công thức món tráng miệng"
          },
          {
            "key": "C",
            "text": "A business card",
            "vietnamese": "Danh thiếp kinh doanh"
          },
          {
            "key": "D",
            "text": "A promotional code",
            "vietnamese": "Mã khuyến mãi"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Người phụ nữ khen bánh đào (peach pie) và hỏi: \"Would you mind sharing the recipe?\" (công thức món tráng miệng)."
      },
      {
        "num": 34,
        "question": "What does the man recommend doing?",
        "vietnameseQuestion": "Người đàn ông khuyên nên làm gì?",
        "options": [
          {
            "key": "A",
            "text": "Returning some merchandise",
            "vietnamese": "Trả lại hàng hóa"
          },
          {
            "key": "B",
            "text": "Watching a video",
            "vietnamese": "Xem một video"
          },
          {
            "key": "C",
            "text": "Creating an account",
            "vietnamese": "Tạo một tài khoản"
          },
          {
            "key": "D",
            "text": "Reading a review",
            "vietnamese": "Đọc bài đánh giá"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Người đàn ông khuyên: \"There's a really helpful video... I recommend you watch it first.\""
      }
    ],
    "vocabulary": [
      {
        "word": "annual",
        "meaning": "thường niên, hàng năm",
        "partOfSpeech": "adj"
      },
      {
        "word": "recipe",
        "meaning": "công thức nấu ăn",
        "partOfSpeech": "n"
      },
      {
        "word": "walk through",
        "meaning": "hướng dẫn chi tiết từng bước",
        "partOfSpeech": "phr v"
      }
    ]
  },
  {
    "id": "part3-35-37",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 35 - 37",
    "title": "Part 3 - Câu 35 - 37: Báo cáo chi phí công tác và phê duyệt ngoại lệ khách sạn",
    "audioSrc": "/audio/test1_2024.mp3",
    "startTime": 922.17,
    "endTime": 995.71,
    "transcript": [
      {
        "id": "p3-35-1",
        "speaker": "Man",
        "text": "I'd like to finish calculating the company's expense reports for the month. Have you finished reviewing the travel reimbursement forms from all the departments?",
        "vietnamese": "Tôi muốn hoàn thành việc tính toán báo cáo chi phí của công ty trong tháng. Cô đã xem xét xong các biểu mẫu hoàn trả chi phí công tác từ tất cả các phòng ban chưa?"
      },
      {
        "id": "p3-35-2",
        "speaker": "Woman",
        "text": "I'm almost done, but I have a question about a hotel receipt from one of our employees.",
        "vietnamese": "Tôi gần xong rồi, nhưng tôi có một câu hỏi về hóa đơn khách sạn từ một trong các nhân viên của chúng ta."
      },
      {
        "id": "p3-35-3",
        "speaker": "Man",
        "text": "What's the problem?",
        "vietnamese": "Có vấn đề gì vậy?"
      },
      {
        "id": "p3-35-4",
        "speaker": "Woman",
        "text": "Well, our policy is for employees to stay at a hotel that's on our list of approved accommodations. This one isn't on the list.",
        "vietnamese": "À, chính sách của chúng ta là nhân viên phải ở khách sạn nằm trong danh sách nơi lưu trú được phê duyệt. Khách sạn này lại không có trong danh sách."
      },
      {
        "id": "p3-35-5",
        "speaker": "Man",
        "text": "Who submitted the receipt?",
        "vietnamese": "Ai đã nộp hóa đơn đó?"
      },
      {
        "id": "p3-35-6",
        "speaker": "Woman",
        "text": "Mark Ziegler, one of our sales representatives.",
        "vietnamese": "Mark Ziegler, một trong những đại diện bán hàng của chúng ta."
      },
      {
        "id": "p3-35-7",
        "speaker": "Man",
        "text": "Hmm, he's a new employee and may have forgotten the policy. As a supervisor, I can approve the expense this one time.",
        "vietnamese": "Ừm, cậu ấy là nhân viên mới và có thể đã quên quy định. Với tư cách là người giám sát, tôi có thể phê duyệt khoản chi này lần này."
      }
    ],
    "questions": [
      {
        "num": 35,
        "question": "What department do the speakers most likely work in?",
        "vietnameseQuestion": "Những người nói có khả năng làm việc ở phòng ban nào nhất?",
        "options": [
          {
            "key": "A",
            "text": "Accounting",
            "vietnamese": "Kế toán"
          },
          {
            "key": "B",
            "text": "Research and development",
            "vietnamese": "Nghiên cứu & phát triển"
          },
          {
            "key": "C",
            "text": "Maintenance",
            "vietnamese": "Bảo trì"
          },
          {
            "key": "D",
            "text": "Marketing",
            "vietnamese": "Tiếp thị"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Người đàn ông đề cập: \"finish calculating the company's expense reports\" và \"reviewing the travel reimbursement forms\" nên họ thuộc phòng Kế toán (Accounting)."
      },
      {
        "num": 36,
        "question": "What problem does the woman mention?",
        "vietnameseQuestion": "Người phụ nữ đề cập đến vấn đề gì?",
        "options": [
          {
            "key": "A",
            "text": "A report has not been submitted.",
            "vietnamese": "Báo cáo chưa được nộp."
          },
          {
            "key": "B",
            "text": "An invoice is not accurate.",
            "vietnamese": "Hóa đơn không chính xác."
          },
          {
            "key": "C",
            "text": "A policy has not been followed.",
            "vietnamese": "Một quy định không được tuân thủ."
          },
          {
            "key": "D",
            "text": "An order has not been delivered.",
            "vietnamese": "Đơn hàng chưa được giao."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Người phụ nữ nói khách sạn nhân viên ở không nằm trong danh sách được phê duyệt: \"This one isn't on the list\" (chính sách không được tuân thủ)."
      },
      {
        "num": 37,
        "question": "What does the man say he will do?",
        "vietnameseQuestion": "Người đàn ông nói anh ta sẽ làm gì?",
        "options": [
          {
            "key": "A",
            "text": "Delete an electronic file",
            "vietnamese": "Xóa một tệp điện tử"
          },
          {
            "key": "B",
            "text": "Authorize a reimbursement",
            "vietnamese": "Phê duyệt hoàn trả chi phí"
          },
          {
            "key": "C",
            "text": "Set up a sales meeting",
            "vietnamese": "Sắp xếp cuộc họp bán hàng"
          },
          {
            "key": "D",
            "text": "Review a spreadsheet",
            "vietnamese": "Xem lại bảng tính"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Người đàn ông nói: \"As a supervisor, I can approve the expense this one time\" (phê duyệt hoàn trả chi phí)."
      }
    ],
    "vocabulary": [
      {
        "word": "expense report",
        "meaning": "báo cáo chi phí",
        "partOfSpeech": "n"
      },
      {
        "word": "reimbursement",
        "meaning": "sự bồi hoàn, hoàn trả chi phí",
        "partOfSpeech": "n"
      },
      {
        "word": "accommodation",
        "meaning": "chỗ ở, nơi lưu trú",
        "partOfSpeech": "n"
      },
      {
        "word": "approve",
        "meaning": "phê duyệt, chấp thuận",
        "partOfSpeech": "v"
      }
    ]
  },
  {
    "id": "part3-38-40",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 38 - 40",
    "title": "Part 3 - Câu 38 - 40: Tàu chở hàng bị hoãn di chuyển do sương mù dày đặc",
    "audioSrc": "/audio/test1_2024.mp3",
    "startTime": 995.71,
    "endTime": 1073.82,
    "transcript": [
      {
        "id": "p3-38-1",
        "speaker": "Man",
        "text": "Good morning, Damilola. How's everything up here on deck?",
        "vietnamese": "Chào buổi sáng Damilola. Mọi thứ trên boong tàu thế nào rồi?"
      },
      {
        "id": "p3-38-2",
        "speaker": "Woman",
        "text": "Hi, Pedro. It was an uneventful night, and our cargo ship still hasn't moved yet. The fog in the harbor is still extremely dense.",
        "vietnamese": "Chào Pedro. Một đêm trôi qua yên ả, và tàu chở hàng của chúng ta vẫn chưa di chuyển được. Sương mù trong bến cảng vẫn vô cùng dày đặc."
      },
      {
        "id": "p3-38-3",
        "speaker": "Man",
        "text": "Yeah, I can barely see the pier from here. That delay is really going to impact our delivery schedule.",
        "vietnamese": "Đúng vậy, tôi hầu như không nhìn thấy cầu tàu từ đây. Sự chậm trễ này thực sự sẽ ảnh hưởng đến tiến độ giao hàng của chúng ta."
      },
      {
        "id": "p3-38-4",
        "speaker": "Woman",
        "text": "I know. The weather report says the fog should clear up soon, though. I'll place a call to the harbor master to see when we might be cleared for departure.",
        "vietnamese": "Tôi biết. Nhưng bản tin thời tiết cho biết sương mù sẽ sớm tan. Tôi sẽ gọi cho ban quản lý cảng để xem khi nào chúng ta được phép rời bến."
      }
    ],
    "questions": [
      {
        "num": 38,
        "question": "What industry do the speakers most likely work in?",
        "vietnameseQuestion": "Những người nói có khả năng làm việc trong ngành nào nhất?",
        "options": [
          {
            "key": "A",
            "text": "Shipping",
            "vietnamese": "Vận tải biển / hàng hải"
          },
          {
            "key": "B",
            "text": "Manufacturing",
            "vietnamese": "Sản xuất"
          },
          {
            "key": "C",
            "text": "Hospitality",
            "vietnamese": "Khách sạn / dịch vụ lưu trú"
          },
          {
            "key": "D",
            "text": "Meteorology",
            "vietnamese": "Khí tượng học"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Các từ khóa \"on deck\" (trên boong), \"cargo ship\" (tàu chở hàng), \"harbor\" (cảng) cho thấy họ làm trong ngành vận tải biển (Shipping)."
      },
      {
        "num": 39,
        "question": "What is the reason for a delay?",
        "vietnameseQuestion": "Lý do dẫn đến sự chậm trễ là gì?",
        "options": [
          {
            "key": "A",
            "text": "A schedule was written incorrectly.",
            "vietnamese": "Lịch trình bị viết sai."
          },
          {
            "key": "B",
            "text": "Some equipment is not properly set up.",
            "vietnamese": "Thiết bị không được lắp đúng."
          },
          {
            "key": "C",
            "text": "Weather conditions are poor.",
            "vietnamese": "Điều kiện thời tiết xấu."
          },
          {
            "key": "D",
            "text": "Several staff members are absent.",
            "vietnamese": "Một số nhân viên vắng mặt."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Người phụ nữ nêu lý do: \"The fog in the harbor is still extremely dense\" (sương mù dày đặc là thời tiết xấu)."
      },
      {
        "num": 40,
        "question": "What does the man say he will do?",
        "vietnameseQuestion": "Người nói sẽ làm gì tiếp theo?",
        "options": [
          {
            "key": "A",
            "text": "Update a shift schedule",
            "vietnamese": "Cập nhật lịch làm ca"
          },
          {
            "key": "B",
            "text": "Clear a work space",
            "vietnamese": "Dọn dẹp không gian làm việc"
          },
          {
            "key": "C",
            "text": "Complete a checklist",
            "vietnamese": "Hoàn thành danh mục kiểm tra"
          },
          {
            "key": "D",
            "text": "Place a call",
            "vietnamese": "Thực hiện một cuộc gọi điện"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Người nói cho biết: \"I'll place a call to the harbor master\" (gọi điện cho ban quản lý cảng)."
      }
    ],
    "vocabulary": [
      {
        "word": "deck",
        "meaning": "boong tàu",
        "partOfSpeech": "n"
      },
      {
        "word": "cargo ship",
        "meaning": "tàu chở hàng",
        "partOfSpeech": "n"
      },
      {
        "word": "dense fog",
        "meaning": "sương mù dày đặc",
        "partOfSpeech": "n"
      },
      {
        "word": "harbor master",
        "meaning": "giám đốc/trưởng cảng",
        "partOfSpeech": "n"
      },
      {
        "word": "departure",
        "meaning": "sự khởi hành, rời bến",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part3-41-43",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 41 - 43",
    "title": "Part 3 - Câu 41 - 43: Đặt bàn ăn trưa gặp khách hàng và chỗ đỗ xe",
    "audioSrc": "/audio/test1_2024.mp3",
    "startTime": 1073.82,
    "endTime": 1159.69,
    "transcript": [
      {
        "id": "p3-41-1",
        "speaker": "Woman",
        "text": "Hi, I've made a reservation to meet with some clients for lunch today. It's under Cohen.",
        "vietnamese": "Xin chào, tôi đã đặt bàn để gặp vài khách hàng ăn trưa hôm nay. Tên đặt là Cohen."
      },
      {
        "id": "p3-41-2",
        "speaker": "Man",
        "text": "Oh, yes. I see your reservation. Welcome, Ms. Cohen. I see you requested outdoor seating on our patio.",
        "vietnamese": "À vâng, tôi thấy thông tin đặt bàn của cô rồi. Chào mừng cô Cohen. Tôi thấy cô yêu cầu chỗ ngồi ngoài trời ở sân hiên."
      },
      {
        "id": "p3-41-3",
        "speaker": "Woman",
        "text": "Yes, but it's very hot today. Could we sit inside in an air-conditioned area instead?",
        "vietnamese": "Vâng, nhưng hôm nay trời rất nóng. Chúng tôi có thể ngồi bên trong khu vực có máy lạnh được không?"
      },
      {
        "id": "p3-41-4",
        "speaker": "Man",
        "text": "Certainly. I can set you up at a booth inside. Also, if any of your guests drove here, they can park in the garage across the street. We validate parking so it's completely free.",
        "vietnamese": "Chắc chắn rồi. Tôi có thể sắp xếp cho cô ở bàn trong nhà. Ngoài ra, nếu có khách nào lái xe tới, họ có thể gửi xe ở bãi đậu xe đối diện đường. Chúng tôi có đóng dấu xác nhận gửi xe nên hoàn toàn miễn phí."
      }
    ],
    "questions": [
      {
        "num": 41,
        "question": "Why is the woman at the restaurant?",
        "vietnameseQuestion": "Tại sao người phụ nữ lại đến nhà hàng?",
        "options": [
          {
            "key": "A",
            "text": "To celebrate a retirement",
            "vietnamese": "Để mừng lễ nghỉ hưu"
          },
          {
            "key": "B",
            "text": "To perform an inspection",
            "vietnamese": "Để thực hiện thanh tra"
          },
          {
            "key": "C",
            "text": "To meet with some clients",
            "vietnamese": "Để gặp một số khách hàng"
          },
          {
            "key": "D",
            "text": "To write an article",
            "vietnamese": "Để viết một bài báo"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Người phụ nữ nói rõ: \"I've made a reservation to meet with some clients for lunch today\"."
      },
      {
        "num": 42,
        "question": "What does the woman mean when she says, \"it's very hot today\"?",
        "vietnameseQuestion": "Người phụ nữ có ý gì khi nói \"hôm nay trời rất nóng\"?",
        "options": [
          {
            "key": "A",
            "text": "She is unable to accept an invitation.",
            "vietnamese": "Cô ấy không thể nhận lời mời."
          },
          {
            "key": "B",
            "text": "A cooling system is not working.",
            "vietnamese": "Hệ thống làm mát bị hỏng."
          },
          {
            "key": "C",
            "text": "A meeting will end soon.",
            "vietnamese": "Cuộc họp sẽ kết thúc sớm."
          },
          {
            "key": "D",
            "text": "She wants to change a seating request.",
            "vietnamese": "Cô ấy muốn đổi yêu cầu chỗ ngồi."
          }
        ],
        "correctAnswer": "D",
        "explanation": "Cô nói trời nóng để xin đổi từ ngồi sân hiên ngoài trời (patio) vào trong nhà có điều hòa (change a seating request)."
      },
      {
        "num": 43,
        "question": "What does the man say about a parking garage?",
        "vietnameseQuestion": "Người đàn ông nói gì về nhà để xe?",
        "options": [
          {
            "key": "A",
            "text": "It is free for customers.",
            "vietnamese": "Nó miễn phí cho khách hàng."
          },
          {
            "key": "B",
            "text": "It is under construction.",
            "vietnamese": "Nó đang được xây dựng."
          },
          {
            "key": "C",
            "text": "It closes soon.",
            "vietnamese": "Nó sắp đóng cửa."
          },
          {
            "key": "D",
            "text": "It offers monthly contracts.",
            "vietnamese": "Nó cung cấp hợp đồng gửi xe theo tháng."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Người đàn ông giải thích: \"We validate parking so it's completely free\" (miễn phí cho khách)."
      }
    ],
    "vocabulary": [
      {
        "word": "patio",
        "meaning": "khoảng sân hiên ngoài trời",
        "partOfSpeech": "n"
      },
      {
        "word": "air-conditioned",
        "meaning": "có điều hòa nhiệt độ",
        "partOfSpeech": "adj"
      },
      {
        "word": "booth",
        "meaning": "bàn ăn có ghế băng đệm",
        "partOfSpeech": "n"
      },
      {
        "word": "validate",
        "meaning": "đóng dấu xác nhận hợp lệ",
        "partOfSpeech": "v"
      }
    ]
  },
  {
    "id": "part3-44-46",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 44 - 46",
    "title": "Part 3 - Câu 44 - 46: Trình diễn máy in nhỏ gọn tại cửa hàng điện tử",
    "audioSrc": "/audio/test1_2024.mp3",
    "startTime": 1159.69,
    "endTime": 1235.2,
    "transcript": [
      {
        "speaker": "Woman",
        "text": "Thank you both for coming here today to demonstrate your company's new compact printer. I know the store will be busy because we're having a big sale on laptop computers and tablets.",
        "vietnamese": "Cảm ơn cả hai bạn đã đến đây hôm nay để giới thiệu mẫu máy in nhỏ gọn mới của công ty. Tôi biết cửa hàng sẽ rất đông vì chúng tôi đang có đợt giảm giá lớn cho máy tính xách tay và máy tính bảng.",
        "id": "part3-44-46-l1"
      },
      {
        "speaker": "Man 1",
        "text": "We're happy to be here. Our printers are perfect for students or people with home offices who may have limited space. My partner Murat will be setting up the printer station.",
        "vietnamese": "Chúng tôi rất vui được có mặt ở đây. Máy in của chúng tôi rất hoàn hảo cho học sinh, sinh viên hoặc những người làm việc tại nhà có không gian hạn chế. Cộng sự của tôi, Murat, sẽ thiết lập khu vực máy in.",
        "id": "part3-44-46-l2"
      },
      {
        "speaker": "Man 2 (Murat)",
        "text": "Yes. Where can I put our demonstration table?",
        "vietnamese": "Vâng. Tôi có thể đặt bàn biểu diễn ở đâu?",
        "id": "part3-44-46-l3"
      },
      {
        "speaker": "Woman",
        "text": "I'll show you the area. Also, if you brought any brochures with you, it'll be helpful to put those out for people to take.",
        "vietnamese": "Tôi sẽ chỉ khu vực cho bạn. Ngoài ra, nếu các bạn có mang theo tài liệu quảng cáo nào, sẽ rất hữu ích nếu bày chúng ra cho mọi người lấy.",
        "id": "part3-44-46-l4"
      }
    ],
    "questions": [
      {
        "num": 44,
        "question": "Where does the woman most likely work?",
        "vietnameseQuestion": "Người phụ nữ có khả năng làm việc ở đâu nhất?",
        "options": [
          {
            "key": "A",
            "text": "At a university",
            "vietnamese": "Tại trường đại học"
          },
          {
            "key": "B",
            "text": "At a publishing company",
            "vietnamese": "Tại nhà xuất bản"
          },
          {
            "key": "C",
            "text": "At an electronics store",
            "vietnamese": "Tại cửa hàng điện tử"
          },
          {
            "key": "D",
            "text": "At a grocery store",
            "vietnamese": "Tại cửa hàng tạp hóa"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Người phụ nữ nói: \"I know our electronics store will be busy\" (cửa hàng điện tử)."
      },
      {
        "num": 45,
        "question": "What does Murat ask about?",
        "vietnameseQuestion": "Murat hỏi về điều gì?",
        "options": [
          {
            "key": "A",
            "text": "How much an item costs",
            "vietnamese": "Một món hàng giá bao nhiêu"
          },
          {
            "key": "B",
            "text": "When an event will begin",
            "vietnamese": "Khi nào sự kiện bắt đầu"
          },
          {
            "key": "C",
            "text": "How many people will participate",
            "vietnamese": "Có bao nhiêu người tham gia"
          },
          {
            "key": "D",
            "text": "Where to set up some equipment",
            "vietnamese": "Nơi lắp đặt, bố trí thiết bị"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Murat hỏi: \"Where would you like us to set up our equipment?\""
      },
      {
        "num": 46,
        "question": "What does the woman suggest doing?",
        "vietnameseQuestion": "Người phụ nữ đề xuất làm gì?",
        "options": [
          {
            "key": "A",
            "text": "Offering a discount",
            "vietnamese": "Cung cấp mức giảm giá"
          },
          {
            "key": "B",
            "text": "Displaying informational materials",
            "vietnamese": "Trưng bày tài liệu thông tin"
          },
          {
            "key": "C",
            "text": "Holding a contest",
            "vietnamese": "Tổ chức một cuộc thi"
          },
          {
            "key": "D",
            "text": "Visiting a registration table",
            "vietnamese": "Ghé thăm bàn đăng ký"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Người phụ nữ gợi ý bày tờ rơi quảng cáo: 'Also, if you brought any brochures with you, it'll be helpful to put those out for people to take' (trưng bày tài liệu thông tin - Displaying informational materials)."
      }
    ],
    "vocabulary": [
      {
        "word": "demonstrate",
        "meaning": "trình diễn, chứng minh hoạt động",
        "partOfSpeech": "v"
      },
      {
        "word": "compact",
        "meaning": "nhỏ gọn, tiện lợi",
        "partOfSpeech": "adj"
      },
      {
        "word": "discount",
        "meaning": "sự giảm giá, chiết khấu",
        "partOfSpeech": "n"
      },
      {
        "word": "strategy",
        "meaning": "chiến lược",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part3-47-49",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 47 - 49",
    "title": "Part 3 - Câu 47 - 49: Ngành sản xuất thực phẩm đối mặt với giá nguyên liệu tăng",
    "audioSrc": "/audio/test1_2024.mp3",
    "startTime": 1235.2,
    "endTime": 1320.14,
    "transcript": [
      {
        "speaker": "Woman",
        "text": "Gizem and Hector, I'm very pleased with the sales of our brands of cakes, pies, and cookies this past holiday season. Any thoughts on what we should be concentrating on going forward?",
        "vietnamese": "Gizem và Hector, tôi rất hài lòng với doanh số các nhãn hiệu bánh ngọt, bánh nướng và bánh quy của chúng ta trong kỳ nghỉ lễ vừa qua. Hai bạn có ý kiến gì về việc chúng ta nên tập trung vào điều gì sắp tới không?",
        "id": "part3-47-49-l1"
      },
      {
        "speaker": "Man (Hector)",
        "text": "The biggest trend right now is the reduction of sugar. The public wants healthier products, but the same great taste. That'll be our biggest challenge.",
        "vietnamese": "Xu hướng lớn nhất hiện nay là giảm lượng đường. Công chúng muốn những sản phẩm tốt cho sức khỏe hơn nhưng vẫn giữ nguyên hương vị tuyệt vời. Đó sẽ là thách thức lớn nhất của chúng ta.",
        "id": "part3-47-49-l2"
      },
      {
        "speaker": "Woman 2 (Gizem)",
        "text": "One of our ingredients suppliers recently started offering a sweetener made entirely from natural ingredients.",
        "vietnamese": "Một trong những nhà cung cấp nguyên liệu của chúng ta gần đây đã bắt đầu cung cấp chất làm ngọt làm hoàn toàn từ các thành phần tự nhiên.",
        "id": "part3-47-49-l3"
      },
      {
        "speaker": "Woman 1",
        "text": "Are there similar ones on the market? And how do they compare?",
        "vietnamese": "Có sản phẩm tương tự trên thị trường không? Và chúng so sánh thế nào?",
        "id": "part3-47-49-l4"
      },
      {
        "speaker": "Woman 2 (Gizem)",
        "text": "I'd have to do some investigation to find out more about that. I have some time available tomorrow afternoon.",
        "vietnamese": "Tôi sẽ phải tìm hiểu thêm về điều đó. Chiều mai tôi có thời gian rảnh.",
        "id": "part3-47-49-l5"
      }
    ],
    "questions": [
      {
        "num": 47,
        "question": "What type of industry do the speakers most likely work in?",
        "vietnameseQuestion": "Những người nói có khả năng làm việc trong ngành nào nhất?",
        "options": [
          {
            "key": "A",
            "text": "Textile manufacturing",
            "vietnamese": "Sản xuất dệt may"
          },
          {
            "key": "B",
            "text": "Food production",
            "vietnamese": "Sản xuất thực phẩm"
          },
          {
            "key": "C",
            "text": "Health care",
            "vietnamese": "Y tế chăm sóc sức khỏe"
          },
          {
            "key": "D",
            "text": "Hospitality",
            "vietnamese": "Khách sạn / dịch vụ"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Các sản phẩm nhắc đến gồm bánh ngọt, bánh nướng, bánh quy (cakes, pies, cookies) và nguyên liệu đường, bột mì nên họ làm trong ngành sản xuất thực phẩm (Food production)."
      },
      {
        "num": 48,
        "question": "What business challenge are the speakers discussing?",
        "vietnameseQuestion": "Thách thức kinh doanh nào đang được những người nói thảo luận?",
        "options": [
          {
            "key": "A",
            "text": "Lack of qualified personnel",
            "vietnamese": "Thiếu nhân sự có trình độ"
          },
          {
            "key": "B",
            "text": "Rising production costs",
            "vietnamese": "Chi phí sản xuất gia tăng"
          },
          {
            "key": "C",
            "text": "Changes in consumer preferences",
            "vietnamese": "Thay đổi sở thích của người tiêu dùng"
          },
          {
            "key": "D",
            "text": "Increased competition",
            "vietnamese": "Sự cạnh tranh gia tăng"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Hector nói về xu hướng chuộng sản phẩm tốt cho sức khỏe: 'The public wants healthier products, but the same great taste. That'll be our biggest challenge' (sự thay đổi sở thích người tiêu dùng - Changes in consumer preferences)."
      },
      {
        "num": 49,
        "question": "What does the man say he will do?",
        "vietnameseQuestion": "Người đàn ông nói anh ta sẽ làm gì?",
        "options": [
          {
            "key": "A",
            "text": "Research more information",
            "vietnamese": "Tìm hiểu thêm thông tin"
          },
          {
            "key": "B",
            "text": "Negotiate a discount",
            "vietnamese": "Đàm phán chiết khấu"
          },
          {
            "key": "C",
            "text": "Upgrade some machinery",
            "vietnamese": "Nâng cấp máy móc"
          },
          {
            "key": "D",
            "text": "Train a new employee",
            "vietnamese": "Đào tạo nhân viên mới"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Hector nói: \"I'll research more information on alternative wholesale suppliers...\""
      }
    ],
    "vocabulary": [
      {
        "word": "rising costs",
        "meaning": "chi phí ngày càng tăng",
        "partOfSpeech": "n"
      },
      {
        "word": "ingredient",
        "meaning": "nguyên liệu thực phẩm",
        "partOfSpeech": "n"
      },
      {
        "word": "profit margin",
        "meaning": "biên lợi nhuận",
        "partOfSpeech": "n"
      },
      {
        "word": "wholesale supplier",
        "meaning": "nhà cung cấp bán sỉ/buôn",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part3-50-52",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 50 - 52",
    "title": "Part 3 - Câu 50 - 52: Nhận thầu dự án chiến dịch tiếp thị mới",
    "audioSrc": "/audio/test1_2024.mp3",
    "startTime": 1320.14,
    "endTime": 1397.01,
    "transcript": [
      {
        "id": "p3-50-1",
        "speaker": "Man",
        "text": "Hi, Bianca. I'm calling to see if you'd have time to work on a project for my marketing firm. We've expanded a lot in the past year, and we need an experienced freelance copywriter.",
        "vietnamese": "Chào Bianca. Tôi gọi để xem cô có thời gian nhận một dự án cho công ty tiếp thị của tôi không. Chúng tôi đã mở rộng rất nhiều trong năm qua và cần một người viết lời quảng cáo tự do giàu kinh nghiệm."
      },
      {
        "id": "p3-50-2",
        "speaker": "Woman (Bianca)",
        "text": "I might be able to take it on. What does the client want to do?",
        "vietnamese": "Tôi có thể sắp xếp nhận được. Khách hàng muốn làm gì vậy?"
      },
      {
        "id": "p3-50-3",
        "speaker": "Man",
        "text": "They're launching a brand new eco-friendly cleaning product line and want us to create an entire marketing campaign from scratch.",
        "vietnamese": "Họ đang ra mắt một dòng sản phẩm tẩy rửa thân thiện với môi trường hoàn toàn mới và muốn chúng ta tạo ra cả một chiến dịch tiếp thị từ đầu."
      },
      {
        "id": "p3-50-4",
        "speaker": "Woman (Bianca)",
        "text": "That sounds exciting. Could you send me a detailed project description along with the proposed timeline?",
        "vietnamese": "Nghe hào hứng quá. Anh có thể gửi cho tôi bản mô tả dự án chi tiết cùng với mốc thời gian dự kiến không?"
      },
      {
        "id": "p3-50-5",
        "speaker": "Man",
        "text": "Sure, I'll email that to you right now.",
        "vietnamese": "Chắc chắn rồi, tôi sẽ gửi email cho cô ngay."
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
            "text": "To explain a business merger",
            "vietnamese": "Để giải thích việc sáp nhập doanh nghiệp"
          },
          {
            "key": "B",
            "text": "To describe a new company policy",
            "vietnamese": "Để mô tả chính sách công ty mới"
          },
          {
            "key": "C",
            "text": "To offer the woman a work assignment",
            "vietnamese": "Để đề nghị giao một nhiệm vụ công việc cho người phụ nữ"
          },
          {
            "key": "D",
            "text": "To invite the woman to speak at a conference",
            "vietnamese": "Để mời người phụ nữ phát biểu tại hội nghị"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Người đàn ông gọi hỏi: \"see if you'd have time to work on a project for my marketing firm\" (đề nghị giao việc/giao dự án)."
      },
      {
        "num": 51,
        "question": "What does the man say a client is interested in doing?",
        "vietnameseQuestion": "Người đàn ông nói khách hàng quan tâm đến việc làm gì?",
        "options": [
          {
            "key": "A",
            "text": "Purchasing another business",
            "vietnamese": "Mua lại một doanh nghiệp khác"
          },
          {
            "key": "B",
            "text": "Finding a new office space",
            "vietnamese": "Tìm văn phòng làm việc mới"
          },
          {
            "key": "C",
            "text": "Revising a budget proposal",
            "vietnamese": "Sửa đổi đề xuất ngân sách"
          },
          {
            "key": "D",
            "text": "Creating a marketing campaign",
            "vietnamese": "Xây dựng một chiến dịch tiếp thị"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Người đàn ông nói khách hàng muốn: \"create an entire marketing campaign from scratch\"."
      },
      {
        "num": 52,
        "question": "What does the woman ask the man to send?",
        "vietnameseQuestion": "Người phụ nữ yêu cầu người đàn ông gửi cái gì?",
        "options": [
          {
            "key": "A",
            "text": "A project description",
            "vietnamese": "Bản mô tả dự án"
          },
          {
            "key": "B",
            "text": "An event invitation",
            "vietnamese": "Giấy mời tham dự sự kiện"
          },
          {
            "key": "C",
            "text": "Some social media links",
            "vietnamese": "Một số liên kết mạng xã hội"
          },
          {
            "key": "D",
            "text": "Some contact information",
            "vietnamese": "Một số thông tin liên hệ"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Người phụ nữ hỏi: \"Could you send me a detailed project description...?\""
      }
    ],
    "vocabulary": [
      {
        "word": "freelance",
        "meaning": "tự do, làm nghề tự do",
        "partOfSpeech": "adj"
      },
      {
        "word": "copywriter",
        "meaning": "người viết lời quảng cáo, nội dung",
        "partOfSpeech": "n"
      },
      {
        "word": "marketing campaign",
        "meaning": "chiến dịch tiếp thị",
        "partOfSpeech": "n"
      },
      {
        "word": "from scratch",
        "meaning": "từ con số không, từ đầu",
        "partOfSpeech": "idiom"
      }
    ]
  },
  {
    "id": "part3-53-55",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 53 - 55",
    "title": "Part 3 - Câu 53 - 55: Xe giao hàng tiệc của công ty phục vụ ăn uống bị xịt lốp",
    "audioSrc": "/audio/test1_2024.mp3",
    "startTime": 1397.01,
    "endTime": 1477.88,
    "transcript": [
      {
        "speaker": "Woman",
        "text": "Hey, Koji. We were about to pack van number five for the music festival when we noticed it's got a flat tire.",
        "vietnamese": "Này Koji. Chúng tôi chuẩn bị xếp đồ lên xe van số 5 cho lễ hội âm nhạc thì nhận thấy nó bị xẹp lốp.",
        "id": "part3-53-55-l1"
      },
      {
        "speaker": "Man (Koji)",
        "text": "Oh, that's not good. We're supposed to get there by 11 to set up lunch for the performers. Is there another van we can take?",
        "vietnamese": "Ồ, không ổn rồi. Chúng ta phải có mặt lúc 11 giờ để chuẩn bị bữa trưa cho các nghệ sĩ biểu diễn. Có chiếc xe van nào khác chúng ta đi được không?",
        "id": "part3-53-55-l2"
      },
      {
        "speaker": "Woman",
        "text": "Let me see what's available. We've got a lot of catering jobs today. Ah, yes. We can use van number three.",
        "vietnamese": "Để tôi xem xe nào còn trống. Hôm nay chúng ta có rất nhiều đơn đặt tiệc. À được rồi, chúng ta có thể dùng xe van số 3.",
        "id": "part3-53-55-l3"
      },
      {
        "speaker": "Man (Koji)",
        "text": "Do you need help loading?",
        "vietnamese": "Chị có cần giúp xếp đồ lên xe không?",
        "id": "part3-53-55-l4"
      },
      {
        "speaker": "Woman",
        "text": "Yes, thanks. The food's already in coolers, but everything's in the kitchen with the serving utensils and napkins. It all needs to be brought to the parking area.",
        "vietnamese": "Có, cảm ơn anh. Đồ ăn đã ở trong thùng giữ nhiệt rồi, nhưng mọi thứ đều ở trong bếp cùng với dụng cụ ăn uống và khăn ăn. Tất cả cần được mang ra bãi đỗ xe.",
        "id": "part3-53-55-l5"
      },
      {
        "speaker": "Man (Koji)",
        "text": "All right. I can help with that.",
        "vietnamese": "Được rồi. Tôi có thể giúp việc đó.",
        "id": "part3-53-55-l6"
      }
    ],
    "questions": [
      {
        "num": 53,
        "question": "What problem does the woman mention?",
        "vietnameseQuestion": "Người phụ nữ đề cập đến vấn đề gì?",
        "options": [
          {
            "key": "A",
            "text": "A vehicle is out of service.",
            "vietnamese": "Một phương tiện không thể hoạt động."
          },
          {
            "key": "B",
            "text": "An employee is late.",
            "vietnamese": "Một nhân viên đi muộn."
          },
          {
            "key": "C",
            "text": "A shipment was damaged.",
            "vietnamese": "Lô hàng bị hư hỏng."
          },
          {
            "key": "D",
            "text": "Traffic is heavy.",
            "vietnamese": "Giao thông bị tắc nghẽn."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Người phụ nữ thông báo xe tải số 5 bị xịt lốp: \"it's got a flat tire\" (xe không sử dụng được / out of service)."
      },
      {
        "num": 54,
        "question": "Where do the speakers most likely work?",
        "vietnameseQuestion": "Những người nói có khả năng làm việc ở đâu nhất?",
        "options": [
          {
            "key": "A",
            "text": "At a recording studio",
            "vietnamese": "Tại phòng thu âm"
          },
          {
            "key": "B",
            "text": "At a catering company",
            "vietnamese": "Tại công ty cung cấp dịch vụ ăn uống tiệc"
          },
          {
            "key": "C",
            "text": "At a radio station",
            "vietnamese": "Tại đài phát thanh"
          },
          {
            "key": "D",
            "text": "At a car dealership",
            "vietnamese": "Tại đại lý bán xe hơi"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Người phụ nữ nhắc đến: \"music festival catering order\" và \"deliver the food by noon\" nên họ làm việc tại công ty cung cấp tiệc ăn uống (catering company)."
      },
      {
        "num": 55,
        "question": "What does the man say he will do next?",
        "vietnameseQuestion": "Người đàn ông nói anh ta sẽ làm gì tiếp theo?",
        "options": [
          {
            "key": "A",
            "text": "Arrange for a car repair",
            "vietnamese": "Sắp xếp việc sửa chữa xe"
          },
          {
            "key": "B",
            "text": "Order some kitchen supplies",
            "vietnamese": "Đặt thêm đồ dùng nhà bếp"
          },
          {
            "key": "C",
            "text": "Carry some items",
            "vietnamese": "Khuân vác đồ đạc"
          },
          {
            "key": "D",
            "text": "Offer a refund",
            "vietnamese": "Đề xuất hoàn lại tiền"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Koji đồng ý giúp chuyển đồ từ bếp ra bãi xe: 'It all needs to be brought to the parking area. All right. I can help with that' (khuân vác đồ đạc - Carry some items)."
      }
    ],
    "vocabulary": [
      {
        "word": "catering",
        "meaning": "dịch vụ nấu ăn, cung cấp tiệc",
        "partOfSpeech": "n"
      },
      {
        "word": "flat tire",
        "meaning": "lốp xe bị thủng, xịt lốp",
        "partOfSpeech": "n"
      },
      {
        "word": "out of service",
        "meaning": "ngừng hoạt động, không thể sử dụng",
        "partOfSpeech": "idiom"
      },
      {
        "word": "repair service",
        "meaning": "dịch vụ sửa chữa",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part3-56-58",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 56 - 58",
    "title": "Part 3 - Câu 56 - 58: Tư vấn định hướng nghề nghiệp biên tập viên báo chí",
    "audioSrc": "/audio/test1_2024.mp3",
    "startTime": 1477.88,
    "endTime": 1563.11,
    "transcript": [
      {
        "speaker": "Man",
        "text": "Thanks for taking my call. As I mentioned in my email, I'm interested in working in your field, but I'm talking to some professionals first so I can find out more about it.",
        "vietnamese": "Cảm ơn chị đã nhận cuộc gọi của tôi. Như tôi đã đề cập trong email, tôi quan tâm đến việc làm việc trong lĩnh vực của chị, nhưng tôi đang nói chuyện với một số chuyên gia trước để tìm hiểu thêm về nó.",
        "id": "part3-56-58-l1"
      },
      {
        "speaker": "Woman",
        "text": "Happy to help. So how did you get your start?",
        "vietnamese": "Rất vui được giúp anh. Vậy anh bắt đầu thế nào?",
        "id": "part3-56-58-l2"
      },
      {
        "speaker": "Man",
        "text": "Oh, my family always subscribed to three newspapers. So I always thought the news was important. At my university, I joined the newspaper and eventually worked my way up to being an editor.",
        "vietnamese": "Ồ, gia đình tôi luôn đặt mua ba tờ báo. Vì vậy tôi luôn nghĩ tin tức là quan trọng. Ở trường đại học, tôi đã tham gia tờ báo trường và cuối cùng vươn lên làm biên tập viên.",
        "id": "part3-56-58-l3"
      },
      {
        "speaker": "Woman",
        "text": "Wow. Is it true that people in the news business work very long hours? So what's your schedule like?",
        "vietnamese": "Chà. Có thật là những người trong ngành tin tức làm việc nhiều giờ không? Vậy lịch trình của chị như thế nào?",
        "id": "part3-56-58-l4"
      }
    ],
    "questions": [
      {
        "num": 56,
        "question": "Why is the man calling the woman?",
        "vietnameseQuestion": "Tại sao người đàn ông lại gọi điện cho người phụ nữ?",
        "options": [
          {
            "key": "A",
            "text": "To plan a company event",
            "vietnamese": "Để lên kế hoạch cho sự kiện công ty"
          },
          {
            "key": "B",
            "text": "To confirm a work deadline",
            "vietnamese": "Để xác nhận hạn chót công việc"
          },
          {
            "key": "C",
            "text": "To discuss a career path",
            "vietnamese": "Để thảo luận về con đường sự nghiệp"
          },
          {
            "key": "D",
            "text": "To accept a job offer",
            "vietnamese": "Để chấp nhận lời mời làm việc"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Người đàn ông nói: \"I'm talking to experienced professionals first to learn more about the career path\"."
      },
      {
        "num": 57,
        "question": "Who most likely is the woman?",
        "vietnameseQuestion": "Người phụ nữ có khả năng là ai nhất?",
        "options": [
          {
            "key": "A",
            "text": "A newspaper editor",
            "vietnamese": "Một biên tập viên báo chí"
          },
          {
            "key": "B",
            "text": "A university professor",
            "vietnamese": "Một giáo sư đại học"
          },
          {
            "key": "C",
            "text": "A delivery person",
            "vietnamese": "Một nhân viên giao hàng"
          },
          {
            "key": "D",
            "text": "A professional actor",
            "vietnamese": "Một diễn viên chuyên nghiệp"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Người phụ nữ tự giới thiệu: \"As the managing editor here at the Daily Gazette\" (tổng biên tập báo Gazette)."
      },
      {
        "num": 58,
        "question": "What will the woman most likely do next?",
        "vietnameseQuestion": "Người phụ nữ có khả năng sẽ làm gì tiếp theo?",
        "options": [
          {
            "key": "A",
            "text": "Negotiate a contract",
            "vietnamese": "Đàm phán hợp đồng"
          },
          {
            "key": "B",
            "text": "Explain an office policy",
            "vietnamese": "Giải thích chính sách văn phòng"
          },
          {
            "key": "C",
            "text": "Review a résumé",
            "vietnamese": "Xem lại sơ yếu lý lịch"
          },
          {
            "key": "D",
            "text": "Describe a work schedule",
            "vietnamese": "Mô tả lịch làm việc"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Người đàn ông hỏi về lịch làm việc: 'So what's your schedule like?' nên người phụ nữ sẽ mô tả lịch làm việc của mình (Describe a work schedule)."
      }
    ],
    "vocabulary": [
      {
        "word": "journalism",
        "meaning": "ngành báo chí",
        "partOfSpeech": "n"
      },
      {
        "word": "managing editor",
        "meaning": "tổng biên tập",
        "partOfSpeech": "n"
      },
      {
        "word": "career path",
        "meaning": "con đường sự nghiệp",
        "partOfSpeech": "n"
      },
      {
        "word": "résumé",
        "meaning": "hồ sơ xin việc, sơ yếu lý lịch",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part3-59-61",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 59 - 61",
    "title": "Part 3 - Câu 59 - 61: Kế hoạch sáp nhập công ty và thiết kế cơ sở y tế",
    "audioSrc": "/audio/test1_2024.mp3",
    "startTime": 1563.11,
    "endTime": 1639.02,
    "transcript": [
      {
        "id": "p3-59-1",
        "speaker": "Man",
        "text": "Hi, Karen. I just read the article on the company website about the proposed merger with QZ Corporation. It looks like we're going ahead with it.",
        "vietnamese": "Chào Karen. Tôi vừa đọc bài báo trên trang web nội bộ về đề xuất sáp nhập với Tập đoàn QZ. Có vẻ như chúng ta đang tiến hành việc đó."
      },
      {
        "id": "p3-59-2",
        "speaker": "Woman (Karen)",
        "text": "Well, they also talked about it last year. Negotiations take a long time, so I wouldn't count on anything until the contract is signed.",
        "vietnamese": "Chà, năm ngoái họ cũng từng nói về chuyện đó rồi. Đàm phán mất nhiều thời gian lắm, nên tôi chưa dám chắc điều gì cho đến khi hợp đồng được ký."
      },
      {
        "id": "p3-59-3",
        "speaker": "Man",
        "text": "True, but if it happens, our architectural firm will be designing state-of-the-art medical facilities across the entire region.",
        "vietnamese": "Đúng vậy, nhưng nếu việc đó diễn ra, công ty kiến trúc của chúng ta sẽ được thiết kế các cơ sở y tế hiện đại bậc nhất trên toàn khu vực."
      },
      {
        "id": "p3-59-4",
        "speaker": "Woman (Karen)",
        "text": "That would be fantastic. My only concern is that I don't want our division to be relocated to another city.",
        "vietnamese": "Điều đó thì thật tuyệt vời. Mối bận tâm duy nhất của tôi là tôi không muốn bộ phận của chúng ta bị chuyển tới một thành phố khác."
      }
    ],
    "questions": [
      {
        "num": 59,
        "question": "What are the speakers mainly discussing?",
        "vietnameseQuestion": "Những người nói chủ yếu thảo luận về vấn đề gì?",
        "options": [
          {
            "key": "A",
            "text": "A new transportation route",
            "vietnamese": "Tuyến đường giao thông mới"
          },
          {
            "key": "B",
            "text": "A company merger",
            "vietnamese": "Việc sáp nhập công ty"
          },
          {
            "key": "C",
            "text": "A public relations initiative",
            "vietnamese": "Sáng kiến quan hệ công chúng"
          },
          {
            "key": "D",
            "text": "A medical facility design",
            "vietnamese": "Thiết kế cơ sở y tế"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Người đàn ông mở đầu câu chuyện: \"about the proposed merger with QZ Corporation\" (việc sáp nhập công ty)."
      },
      {
        "num": 60,
        "question": "Why does the woman say, \"they also talked about it last year\"?",
        "vietnameseQuestion": "Tại sao người phụ nữ nói \"năm ngoái họ cũng từng nói về chuyện đó\"?",
        "options": [
          {
            "key": "A",
            "text": "To express doubt",
            "vietnamese": "Để bày tỏ sự nghi ngờ / chưa chắc chắn"
          },
          {
            "key": "B",
            "text": "To explain a process",
            "vietnamese": "Để giải thích một quy trình"
          },
          {
            "key": "C",
            "text": "To make a recommendation",
            "vietnamese": "Để đưa ra lời đề xuất"
          },
          {
            "key": "D",
            "text": "To update some information",
            "vietnamese": "Để cập nhật một số thông tin"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Người phụ nữ nhắc lại việc năm ngoái cũng bàn rồi để thể hiện sự hoài nghi: \"Negotiations take a long time, so I wouldn't count on anything...\" (bày tỏ nghi ngờ - express doubt)."
      },
      {
        "num": 61,
        "question": "What does the woman want to avoid?",
        "vietnameseQuestion": "Người phụ nữ muốn tránh điều gì?",
        "options": [
          {
            "key": "A",
            "text": "Paying a certification fee",
            "vietnamese": "Trả phí chứng chỉ"
          },
          {
            "key": "B",
            "text": "Training additional staff",
            "vietnamese": "Đào tạo thêm nhân viên"
          },
          {
            "key": "C",
            "text": "Upgrading some technology",
            "vietnamese": "Nâng cấp công nghệ"
          },
          {
            "key": "D",
            "text": "Relocating to another city",
            "vietnamese": "Chuyển địa điểm sang thành phố khác"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Người phụ nữ nói rõ: \"I don't want our division to be relocated to another city\"."
      }
    ],
    "vocabulary": [
      {
        "word": "merger",
        "meaning": "sự sáp nhập doanh nghiệp",
        "partOfSpeech": "n"
      },
      {
        "word": "negotiation",
        "meaning": "cuộc đàm phán, thương lượng",
        "partOfSpeech": "n"
      },
      {
        "word": "state-of-the-art",
        "meaning": "tân tiến, hiện đại nhất",
        "partOfSpeech": "adj"
      },
      {
        "word": "relocate",
        "meaning": "di dời, chuyển địa điểm",
        "partOfSpeech": "v"
      }
    ]
  },
  {
    "id": "part3-62-64",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 62 - 64",
    "title": "Part 3 - Câu 62 - 64: Đặt quà tặng nhân viên và lựa chọn cốc có quai",
    "audioSrc": "/audio/test1_2024.mp3",
    "startTime": 1639.02,
    "endTime": 1740.08,
    "transcript": [
      {
        "speaker": "Man",
        "text": "Thanks for calling Customized Concepts. How can I help you?",
        "vietnamese": "Cảm ơn đã gọi cho Customized Concepts. Tôi có thể giúp gì cho quý khách?",
        "id": "part3-62-64-l1"
      },
      {
        "speaker": "Woman",
        "text": "My company wants to give every employee a gift. Something useful, but not too big. Since we're about to host our annual staff basketball tournament, I thought a water bottle might be good.",
        "vietnamese": "Công ty tôi muốn tặng quà cho mỗi nhân viên. Một món đồ hữu ích nhưng không quá cồng kềnh. Vì sắp tổ chức giải bóng rổ nhân viên thường niên, tôi nghĩ một chiếc bình đựng nước có thể rất hợp.",
        "id": "part3-62-64-l2"
      },
      {
        "speaker": "Man",
        "text": "We carry a few drink containers. If you're at our website, you'll see them under the lifestyle tab.",
        "vietnamese": "Chúng tôi có một vài loại bình đựng đồ uống. Nếu đang truy cập trang web của chúng tôi, bạn sẽ thấy chúng dưới tab phong cách sống (lifestyle).",
        "id": "part3-62-64-l3"
      },
      {
        "speaker": "Woman",
        "text": "Let me pull it up now.",
        "vietnamese": "Để tôi mở trang web lên ngay.",
        "id": "part3-62-64-l4"
      },
      {
        "speaker": "Man",
        "text": "All right. I recommend the metal bottle with the wide-mouthed lid. It's easier to clean than the one with the straw.",
        "vietnamese": "Được rồi. Tôi khuyên bạn nên chọn bình kim loại có nắp miệng rộng. Nó dễ vệ sinh hơn loại có ống hút.",
        "id": "part3-62-64-l5"
      },
      {
        "speaker": "Woman",
        "text": "Okay, thanks. And you could put our company logo on it, right?",
        "vietnamese": "Được rồi, cảm ơn anh. Và các bạn có thể in logo công ty chúng tôi lên đó chứ?",
        "id": "part3-62-64-l6"
      },
      {
        "speaker": "Man",
        "text": "Yes. You'll just need to send me the graphic file.",
        "vietnamese": "Vâng. Quý khách chỉ cần gửi cho tôi tệp thiết kế đồ họa.",
        "id": "part3-62-64-l7"
      },
      {
        "speaker": "Woman",
        "text": "I can do that.",
        "vietnamese": "Tôi có thể làm việc đó.",
        "id": "part3-62-64-l8"
      }
    ],
    "questions": [
      {
        "num": 62,
        "question": "Who is a gift for?",
        "vietnameseQuestion": "Món quà dành cho ai?",
        "options": [
          {
            "key": "A",
            "text": "Donors",
            "vietnamese": "Các nhà hảo tâm / nhà tài trợ"
          },
          {
            "key": "B",
            "text": "Volunteers",
            "vietnamese": "Các tình nguyện viên"
          },
          {
            "key": "C",
            "text": "Employees",
            "vietnamese": "Các nhân viên"
          },
          {
            "key": "D",
            "text": "Clients",
            "vietnamese": "Các khách hàng"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Người phụ nữ nói: \"My company wants to give every employee a gift\" (nhân viên)."
      },
      {
        "num": 63,
        "question": "Look at the graphic. What is the price of the item the man recommends?",
        "vietnameseQuestion": "Nhìn vào hình ảnh. Giá của món đồ mà người đàn ông khuyên dùng là bao nhiêu?",
        "options": [
          {
            "key": "A",
            "text": "1",
            "vietnamese": "21 đô la"
          },
          {
            "key": "B",
            "text": "8",
            "vietnamese": "18 đô la"
          },
          {
            "key": "C",
            "text": "4",
            "vietnamese": "24 đô la"
          },
          {
            "key": "D",
            "text": "5",
            "vietnamese": "15 đô la"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Người đàn ông khuyên: 'I recommend the metal bottle with the wide-mouthed lid'. Nhìn hình ảnh trên web, 'Metal Bottle w/ Wide-Mouth Lid' có giá 4 (Option C)."
      },
      {
        "num": 64,
        "question": "What is the woman going to send to the man?",
        "vietnameseQuestion": "Người phụ nữ sẽ gửi cái gì cho người đàn ông?",
        "options": [
          {
            "key": "A",
            "text": "A graphic file",
            "vietnamese": "Một tệp hình ảnh đồ họa"
          },
          {
            "key": "B",
            "text": "A list of names",
            "vietnamese": "Một danh sách tên"
          },
          {
            "key": "C",
            "text": "A delivery address",
            "vietnamese": "Địa chỉ giao hàng"
          },
          {
            "key": "D",
            "text": "An account number",
            "vietnamese": "Số tài khoản"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Người phụ nữ nói: \"I'll email you the graphic file of our logo right now...\""
      }
    ],
    "vocabulary": [
      {
        "word": "corporate gift",
        "meaning": "quà tặng doanh nghiệp",
        "partOfSpeech": "n"
      },
      {
        "word": "drinkware",
        "meaning": "đồ uống (bình, cốc, ly)",
        "partOfSpeech": "n"
      },
      {
        "word": "mug with handle",
        "meaning": "cốc có quai cầm",
        "partOfSpeech": "n"
      },
      {
        "word": "mock-up",
        "meaning": "mô hình mẫu, bản thiết kế demo",
        "partOfSpeech": "n"
      }
    ],
    "graphicImage": "/images/intensive/test1_2024/q62_64.png",
    "image": "/images/intensive/test1_2024/q62_64.png"
  },
  {
    "id": "part3-65-67",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 65 - 67",
    "title": "Part 3 - Câu 65 - 67: Cập nhật hướng dẫn âm thanh triển lãm tranh vẽ chì",
    "audioSrc": "/audio/test1_2024.mp3",
    "startTime": 1740.08,
    "endTime": 1822.53,
    "transcript": [
      {
        "speaker": "Man",
        "text": "Eun, I just finished recording the audio guide for the pencil drawings that will be included in our modern art exhibit next week. The files will be loaded onto the audio devices tomorrow.",
        "vietnamese": "Eun, tôi vừa ghi âm xong hướng dẫn âm thanh cho các bức vẽ chì sẽ có trong triển lãm nghệ thuật hiện đại vào tuần tới. Các tệp sẽ được tải vào các thiết bị phát âm thanh vào ngày mai.",
        "id": "part3-65-67-l1"
      },
      {
        "speaker": "Woman (Eun)",
        "text": "That's great, but unfortunately we have to make one change. The drawing by Claudia Hoffman will no longer be in the exhibit. There was a scheduling mix-up, and it was promised to another museum starting next week.",
        "vietnamese": "Tuyệt vời, nhưng thật không may chúng ta phải thay đổi một điểm. Bức vẽ của Claudia Hoffman sẽ không còn xuất hiện trong triển lãm nữa. Có sự nhầm lẫn về lịch trình và bức tranh đã được hứa giao cho một bảo tàng khác bắt đầu từ tuần tới.",
        "id": "part3-65-67-l2"
      },
      {
        "speaker": "Man",
        "text": "Oh, that's too bad. That was one of my favorite pieces. Will you put anything in its place?",
        "vietnamese": "Ồ, tiếc quá. Đó là một trong những tác phẩm tôi yêu thích nhất. Chị có đặt tác phẩm nào thay thế không?",
        "id": "part3-65-67-l3"
      },
      {
        "speaker": "Woman (Eun)",
        "text": "No, we'll just remove it.",
        "vietnamese": "Không, chúng ta sẽ chỉ gỡ nó ra thôi.",
        "id": "part3-65-67-l4"
      },
      {
        "speaker": "Man",
        "text": "Okay, then I'll make that change to the audio guide recording. I'll do that right away.",
        "vietnamese": "Được rồi, vậy tôi sẽ chỉnh sửa bản ghi âm hướng dẫn đó ngay lập tức.",
        "id": "part3-65-67-l5"
      }
    ],
    "questions": [
      {
        "num": 65,
        "question": "What type of art will be displayed in an exhibit?",
        "vietnameseQuestion": "Loại hình nghệ thuật nào sẽ được trưng bày trong buổi triển lãm?",
        "options": [
          {
            "key": "A",
            "text": "Clay sculptures",
            "vietnamese": "Tượng điêu khắc bằng đất sét"
          },
          {
            "key": "B",
            "text": "Oil paintings",
            "vietnamese": "Tranh sơn dầu"
          },
          {
            "key": "C",
            "text": "Black-and-white photographs",
            "vietnamese": "Ảnh đen trắng"
          },
          {
            "key": "D",
            "text": "Pencil drawings",
            "vietnamese": "Tranh vẽ chì"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Người đàn ông nói: \"the audio guide for the pencil drawings that will be included in our upcoming art exhibit\" (tranh vẽ bằng bút chì)."
      },
      {
        "num": 66,
        "question": "Look at the graphic. Which piece of artwork will no longer be included?",
        "vietnameseQuestion": "Nhìn vào hình ảnh. Tác phẩm nghệ thuật nào sẽ không còn được đưa vào nữa?",
        "options": [
          {
            "key": "A",
            "text": "A Careful Glance",
            "vietnamese": "A Careful Glance"
          },
          {
            "key": "B",
            "text": "Promises",
            "vietnamese": "Promises"
          },
          {
            "key": "C",
            "text": "Stormy Sea",
            "vietnamese": "Stormy Sea"
          },
          {
            "key": "D",
            "text": "The Moment",
            "vietnamese": "The Moment"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Người phụ nữ nói bức vẽ của Claudia Hoffman sẽ không trưng bày: 'The drawing by Claudia Hoffman will no longer be in the exhibit'. Nhìn danh mục đồ họa, tác phẩm của Claudia Hoffman là 'Stormy Sea' (Option C)."
      },
      {
        "num": 67,
        "question": "What does the woman say she will do right away?",
        "vietnameseQuestion": "Người phụ nữ nói cô ấy sẽ làm gì ngay lập tức?",
        "options": [
          {
            "key": "A",
            "text": "Speak with an artist",
            "vietnamese": "Nói chuyện với một nghệ sĩ"
          },
          {
            "key": "B",
            "text": "Edit a recording",
            "vietnamese": "Chỉnh sửa một bản ghi âm"
          },
          {
            "key": "C",
            "text": "Clean a gallery space",
            "vietnamese": "Dọn dẹp không gian phòng tranh"
          },
          {
            "key": "D",
            "text": "Greet some visitors",
            "vietnamese": "Chào đón một số khách tham quan"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Người phụ nữ nói: \"I'll go ahead and edit that audio track right away\" (chỉnh sửa bản ghi âm)."
      }
    ],
    "vocabulary": [
      {
        "word": "pencil drawing",
        "meaning": "tranh vẽ bằng bút chì",
        "partOfSpeech": "n"
      },
      {
        "word": "exhibit",
        "meaning": "buổi triển lãm",
        "partOfSpeech": "n"
      },
      {
        "word": "private collector",
        "meaning": "nhà sưu tầm tư nhân",
        "partOfSpeech": "n"
      },
      {
        "word": "edit",
        "meaning": "chỉnh sửa, biên tập",
        "partOfSpeech": "v"
      }
    ],
    "graphicImage": "/images/intensive/test1_2024/q65_67.png",
    "image": "/images/intensive/test1_2024/q65_67.png"
  },
  {
    "id": "part3-68-70",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 68 - 70",
    "title": "Part 3 - Câu 68 - 70: Đưa tin về dự án điện gió và công suất phát điện",
    "audioSrc": "/audio/test1_2024.mp3",
    "startTime": 1822.53,
    "endTime": 1928.86,
    "transcript": [
      {
        "speaker": "Woman",
        "text": "I'm glad we were assigned to cover the press conference earlier today. I counted seven other major media networks there in addition to ours.",
        "vietnamese": "Tôi rất vui vì chúng ta được phân công đưa tin về buổi họp báo sáng nay. Tôi đếm được 7 mạng lưới truyền thông lớn khác ngoài chúng ta.",
        "id": "part3-68-70-l1"
      },
      {
        "speaker": "Man",
        "text": "Well, the offshore wind industry is going to transform the way this region gets its power.",
        "vietnamese": "Ngành điện gió ngoài khơi sẽ biến đổi cách thức khu vực này nhận năng lượng.",
        "id": "part3-68-70-l2"
      },
      {
        "speaker": "Woman",
        "text": "Agreed. Let's compare our facts before we start writing. So, the largest cluster of wind turbines off the coast of Winston is already built. The other sites are at different stages of construction, though Manchester is also close to being done.",
        "vietnamese": "Đồng ý. Hãy đối chiếu các dữ kiện trước khi bắt đầu viết bài. Cụm tua-bin gió lớn nhất ngoài khơi Winston đã được xây dựng xong. Các địa điểm khác đang ở những giai đoạn thi công khác nhau, mặc dù Manchester cũng sắp hoàn thành.",
        "id": "part3-68-70-l3"
      },
      {
        "speaker": "Man",
        "text": "Right. And I think it's crucial for us to focus on how many new jobs related to assembling and maintaining the turbines are opening up in the area as a result of this.",
        "vietnamese": "Đúng vậy. Và tôi nghĩ điều quan trọng là chúng ta phải tập trung vào việc có bao nhiêu việc làm mới liên quan đến lắp ráp và bảo trì tua-bin đang mở ra trong khu vực nhờ dự án này.",
        "id": "part3-68-70-l4"
      }
    ],
    "questions": [
      {
        "num": 68,
        "question": "Who most likely are the speakers?",
        "vietnameseQuestion": "Những người nói có khả năng là ai nhất?",
        "options": [
          {
            "key": "A",
            "text": "Urban planners",
            "vietnamese": "Các nhà quy hoạch đô thị"
          },
          {
            "key": "B",
            "text": "Journalists",
            "vietnamese": "Các nhà báo / phóng viên"
          },
          {
            "key": "C",
            "text": "Engineers",
            "vietnamese": "Các kỹ sư"
          },
          {
            "key": "D",
            "text": "Environmental scientists",
            "vietnamese": "Các nhà khoa học môi trường"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Họ nói về: \"assigned to cover the press conference\", \"other major media outlets\", \"huge story for our newspaper\" nên họ là nhà báo (Journalists)."
      },
      {
        "num": 69,
        "question": "Look at the graphic. Which site has already been completed?",
        "vietnameseQuestion": "Nhìn vào hình ảnh. Địa điểm nào đã được hoàn thành?",
        "options": [
          {
            "key": "A",
            "text": "Site A",
            "vietnamese": "Địa điểm A"
          },
          {
            "key": "B",
            "text": "Site B",
            "vietnamese": "Địa điểm B"
          },
          {
            "key": "C",
            "text": "Site C",
            "vietnamese": "Địa điểm C"
          },
          {
            "key": "D",
            "text": "Site D",
            "vietnamese": "Địa điểm D"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Người đàn ông nói rõ: \"The government official stated that Site D near Winston has already been completed...\" (Địa điểm D)."
      },
      {
        "num": 70,
        "question": "What does the man suggest focusing on?",
        "vietnameseQuestion": "Người đàn ông đề xuất tập trung vào điều gì?",
        "options": [
          {
            "key": "A",
            "text": "Work opportunities",
            "vietnamese": "Cơ hội việc làm"
          },
          {
            "key": "B",
            "text": "Wind turbine costs",
            "vietnamese": "Chi phí tua-bin gió"
          },
          {
            "key": "C",
            "text": "Supply chain issues",
            "vietnamese": "Vấn đề chuỗi cung ứng"
          },
          {
            "key": "D",
            "text": "Power capacity",
            "vietnamese": "Công suất phát điện"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Người đàn ông khuyên nên tập trung vào cơ hội việc làm mới: 'crucial for us to focus on how many new jobs... are opening up in the area' (cơ hội việc làm - Work opportunities)."
      }
    ],
    "vocabulary": [
      {
        "word": "cover",
        "meaning": "đưa tin (báo chí)",
        "partOfSpeech": "v"
      },
      {
        "word": "press conference",
        "meaning": "buổi họp báo",
        "partOfSpeech": "n"
      },
      {
        "word": "wind turbine",
        "meaning": "tua-bin gió",
        "partOfSpeech": "n"
      },
      {
        "word": "power capacity",
        "meaning": "công suất phát điện",
        "partOfSpeech": "n"
      },
      {
        "word": "renewable power",
        "meaning": "năng lượng tái tạo",
        "partOfSpeech": "n"
      }
    ],
    "graphicImage": "/images/intensive/test1_2024/q68_70.png",
    "image": "/images/intensive/test1_2024/q68_70.png"
  },
  {
    "id": "part4-71-73",
    "part": 4,
    "partTitle": "Part 4: Bài nói chuyện",
    "questionRange": "Câu 71 - 73",
    "title": "Part 4 - Câu 71 - 73: Thông báo trải lại mặt đường bãi đỗ xe khu căn hộ Cranberry",
    "audioSrc": "/audio/test1_2024.mp3",
    "startTime": 1950.05,
    "endTime": 2021.85,
    "transcript": [
      {
        "id": "p4-71-1",
        "speaker": "Speaker",
        "text": "You have reached the information line for the Cranberry Apartments Management Office. On Monday, April twelfth, contractors will begin repaving the main resident parking lot.",
        "vietnamese": "Quý vị đã liên hệ đến đường dây thông tin của Văn phòng Quản lý Chung cư Cranberry. Vào thứ Hai, ngày 12 tháng 4, các nhà thầu sẽ bắt đầu trải lại nhựa đường cho bãi đậu xe chính của cư dân."
      },
      {
        "id": "p4-71-2",
        "speaker": "Speaker",
        "text": "All residents must move their vehicles to the overflow gravel lot behind Building C by seven a.m. on Monday. Any cars left in the main lot will be towed at the owner's expense.",
        "vietnamese": "Tất cả cư dân phải di chuyển xe của mình sang bãi đỗ phụ trải sỏi phía sau Tòa nhà C trước 7 giờ sáng thứ Hai. Bất kỳ chiếc xe nào còn đỗ ở bãi chính sẽ bị cẩu kéo đi và chủ xe phải tự chịu chi phí."
      },
      {
        "id": "p4-71-3",
        "speaker": "Speaker",
        "text": "Please consult the parking map that was mailed to your apartment last week to find your designated temporary space. If you did not receive a map, please visit our office during regular business hours. Thank you for your cooperation.",
        "vietnamese": "Vui lòng tham khảo bản đồ bãi đậu xe đã được gửi qua đường bưu điện tới căn hộ của quý vị vào tuần trước để tìm vị trí đỗ tạm thời được chỉ định. Nếu quý vị chưa nhận được bản đồ, vui lòng đến văn phòng của chúng tôi trong giờ làm việc bình thường. Cảm ơn sự hợp tác của quý vị."
      }
    ],
    "questions": [
      {
        "num": 71,
        "question": "Who has recorded the message?",
        "vietnameseQuestion": "Ai đã ghi âm thông điệp này?",
        "options": [
          {
            "key": "A",
            "text": "A city mayor's office",
            "vietnamese": "Văn phòng thị trưởng thành phố"
          },
          {
            "key": "B",
            "text": "A maintenance department",
            "vietnamese": "Bộ phận bảo trì"
          },
          {
            "key": "C",
            "text": "An automobile dealership",
            "vietnamese": "Một đại lý bán xe hơi"
          },
          {
            "key": "D",
            "text": "A building management office",
            "vietnamese": "Một văn phòng quản lý tòa nhà"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Người nói mở đầu: \"You have reached the information line for the Cranberry Apartments Management Office\" (văn phòng quản lý tòa nhà chung cư)."
      },
      {
        "num": 72,
        "question": "What are the listeners asked to do?",
        "vietnameseQuestion": "Người nghe được yêu cầu làm gì?",
        "options": [
          {
            "key": "A",
            "text": "Move their vehicles",
            "vietnamese": "Di chuyển phương tiện của họ"
          },
          {
            "key": "B",
            "text": "Pay their parking fines",
            "vietnamese": "Nộp tiền phạt đỗ xe"
          },
          {
            "key": "C",
            "text": "Use an alternate entrance",
            "vietnamese": "Sử dụng lối vào thay thế"
          },
          {
            "key": "D",
            "text": "Participate in a meeting",
            "vietnamese": "Tham gia một cuộc họp"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Người nói yêu cầu: \"All residents must move their vehicles to the overflow gravel lot...\" (di chuyển xe)."
      },
      {
        "num": 73,
        "question": "What does the speaker say was mailed last week?",
        "vietnameseQuestion": "Người nói cho biết cái gì đã được gửi qua thư vào tuần trước?",
        "options": [
          {
            "key": "A",
            "text": "An election ballot",
            "vietnamese": "Một lá phiếu bầu cử"
          },
          {
            "key": "B",
            "text": "A maintenance plan",
            "vietnamese": "Một kế hoạch bảo trì"
          },
          {
            "key": "C",
            "text": "A map",
            "vietnamese": "Một tấm bản đồ"
          },
          {
            "key": "D",
            "text": "A coupon",
            "vietnamese": "Một phiếu giảm giá"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Người nói nhắc: \"Please consult the parking map that was mailed to your apartment last week...\" (bản đồ bãi đỗ xe)."
      }
    ],
    "vocabulary": [
      {
        "word": "management office",
        "meaning": "văn phòng ban quản lý",
        "partOfSpeech": "n"
      },
      {
        "word": "repave",
        "meaning": "lát lại, trải lại nhựa đường",
        "partOfSpeech": "v"
      },
      {
        "word": "overflow lot",
        "meaning": "bãi đỗ xe phụ, bãi dự phòng",
        "partOfSpeech": "n"
      },
      {
        "word": "tow",
        "meaning": "cẩu kéo xe vi phạm",
        "partOfSpeech": "v"
      },
      {
        "word": "designated",
        "meaning": "được chỉ định",
        "partOfSpeech": "adj"
      }
    ]
  },
  {
    "id": "part4-74-76",
    "part": 4,
    "partTitle": "Part 4: Bài nói chuyện",
    "questionRange": "Câu 74 - 76",
    "title": "Part 4 - Câu 74 - 76: Chương trình phát thanh hướng dẫn bảo dưỡng mái nhà",
    "audioSrc": "/audio/test1_2024.mp3",
    "startTime": 2021.85,
    "endTime": 2114.86,
    "transcript": [
      {
        "speaker": "Speaker",
        "text": "Welcome to Your House Works. On today's episode, we'll go over how you can maintain and make minor repairs to the roof of your home.",
        "vietnamese": "Chào mừng quý vị đến với chương trình Your House Works. Trong tập hôm nay, chúng tôi sẽ hướng dẫn cách bảo trì và thực hiện các sửa chữa nhỏ đối với mái nhà của bạn.",
        "id": "part4-74-76-l1"
      },
      {
        "speaker": "Speaker",
        "text": "The first thing to do is to invest in a few special tools like a trowel and crowbar. It's important to choose some that are high quality because you'll use them for many years. With your trowel and some roof cement, you can seal any cracks or chips. The crowbar will help you remove loose shingles that you can then replace.",
        "vietnamese": "Điều đầu tiên cần làm là đầu tư vào một vài dụng cụ đặc biệt như bay và xà bén. Điều quan trọng là phải chọn những cái chất lượng cao vì bạn sẽ sử dụng chúng trong nhiều năm. Với chiếc bay và một ít xi măng mái, bạn có thể trám kín bất kỳ vết nứt hoặc sứt mẻ nào. Xà bén sẽ giúp bạn tháo các tấm ngói bị lỏng để thay thế.",
        "id": "part4-74-76-l2"
      },
      {
        "speaker": "Speaker",
        "text": "Now, I highly recommend you take photos of your roof every year so that you can track its overall condition.",
        "vietnamese": "Bây giờ, tôi thực sự khuyên bạn nên chụp ảnh mái nhà của mình hàng năm để có thể theo dõi tình trạng tổng thể của nó.",
        "id": "part4-74-76-l3"
      }
    ],
    "questions": [
      {
        "num": 74,
        "question": "What is the topic of the episode?",
        "vietnameseQuestion": "Chủ đề của tập phát sóng là gì?",
        "options": [
          {
            "key": "A",
            "text": "Garden landscaping",
            "vietnamese": "Tạo cảnh quan sân vườn"
          },
          {
            "key": "B",
            "text": "Window installation",
            "vietnamese": "Lắp đặt cửa sổ"
          },
          {
            "key": "C",
            "text": "Roof maintenance",
            "vietnamese": "Bảo dưỡng mái nhà"
          },
          {
            "key": "D",
            "text": "Kitchen renovations",
            "vietnamese": "Cải tạo nhà bếp"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Người nói nêu rõ: \"how you can maintain and make minor repairs to your home's roof\" (bảo trì mái nhà)."
      },
      {
        "num": 75,
        "question": "What does the speaker emphasize about some tools?",
        "vietnameseQuestion": "Người nói nhấn mạnh điều gì về một số công cụ?",
        "options": [
          {
            "key": "A",
            "text": "They should be cleaned regularly.",
            "vietnamese": "Chúng nên được lau chùi thường xuyên."
          },
          {
            "key": "B",
            "text": "They should be of high quality.",
            "vietnamese": "Chúng cần phải có chất lượng cao."
          },
          {
            "key": "C",
            "text": "They were recently invented.",
            "vietnamese": "Chúng mới được phát minh gần đây."
          },
          {
            "key": "D",
            "text": "They can be easily stored.",
            "vietnamese": "Chúng có thể được cất giữ dễ dàng."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Người nói nhấn mạnh: \"make sure they are of the highest quality—don't cut corners on safety equipment\"."
      },
      {
        "num": 76,
        "question": "What does the speaker recommend doing every year?",
        "vietnameseQuestion": "Người nói khuyên nên làm gì hàng năm?",
        "options": [
          {
            "key": "A",
            "text": "Treating some wood",
            "vietnamese": "Xử lý bề mặt gỗ (chống thấm)"
          },
          {
            "key": "B",
            "text": "Consulting an electrician",
            "vietnamese": "Tham khảo ý kiến thợ điện"
          },
          {
            "key": "C",
            "text": "Taking some photos",
            "vietnamese": "Chụp một số bức ảnh"
          },
          {
            "key": "D",
            "text": "Draining some water",
            "vietnamese": "Thoát nước"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Người nói khuyên nên chụp ảnh mái nhà hàng năm: 'I highly recommend you take photos of your roof every year' (chụp ảnh - Taking some photos)."
      }
    ],
    "vocabulary": [
      {
        "word": "roof maintenance",
        "meaning": "bảo dưỡng mái nhà",
        "partOfSpeech": "n"
      },
      {
        "word": "safety harness",
        "meaning": "dây đai an toàn",
        "partOfSpeech": "n"
      },
      {
        "word": "cut corners",
        "meaning": "tiết kiệm bớt xén, làm ẩu",
        "partOfSpeech": "idiom"
      },
      {
        "word": "waterproof sealant",
        "meaning": "chất bịt kín chống thấm nước",
        "partOfSpeech": "n"
      },
      {
        "word": "rot",
        "meaning": "sự mục nát",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part4-77-79",
    "part": 4,
    "partTitle": "Part 4: Bài nói chuyện",
    "questionRange": "Câu 77 - 79",
    "title": "Part 4 - Câu 77 - 79: Chuyến tham quan nhà kính thực vật và bài thuyết trình về hoa lan",
    "audioSrc": "/audio/test1_2024.mp3",
    "startTime": 2114.86,
    "endTime": 2187.27,
    "transcript": [
      {
        "speaker": "Speaker",
        "text": "Thanks again for joining me on today's tour of the beautiful Wallingford Conservatory. I hope you enjoyed seeing and learning about the many species of plants and flowers we care for here.",
        "vietnamese": "Cảm ơn quý vị đã tham gia cùng tôi trong chuyến tham quan Nhà kính Wallingford xinh đẹp hôm nay. Tôi hy vọng quý vị thích ngắm nhìn và tìm hiểu về nhiều loài cây và hoa chúng tôi chăm sóc ở đây.",
        "id": "part4-77-79-l1"
      },
      {
        "speaker": "Speaker",
        "text": "As I mentioned at the beginning of the tour, world-renowned botanist Samantha Hughes will be giving a lecture on the care of flowering orchid plants at 2 o'clock in the community room. I recommend attending.",
        "vietnamese": "Như tôi đã đề cập ở đầu chuyến tham quan, nhà thực vật học nổi tiếng thế giới Samantha Hughes sẽ có bài giảng về cách chăm sóc cây phong lan ra hoa lúc 2 giờ tại phòng cộng đồng. Tôi khuyên các bạn nên tham dự.",
        "id": "part4-77-79-l2"
      },
      {
        "speaker": "Speaker",
        "text": "Samantha's work has also been featured in a documentary film called Orchid Caretakers, which you can purchase through the conservatory's online gift shop. I watched it recently and learned many new things about the Orchid species we have right here at the conservatory.",
        "vietnamese": "Các công trình của Samantha cũng được giới thiệu trong một bộ phim tài liệu có tên Orchid Caretakers mà bạn có thể mua qua cửa hàng lưu niệm trực tuyến của nhà kính. Gần đây tôi đã xem nó và học được nhiều điều mới về các loài phong lan ngay tại nhà kính này.",
        "id": "part4-77-79-l3"
      }
    ],
    "questions": [
      {
        "num": 77,
        "question": "Who most likely is the speaker?",
        "vietnameseQuestion": "Người nói có khả năng là ai nhất?",
        "options": [
          {
            "key": "A",
            "text": "A radio show host",
            "vietnamese": "Một người dẫn chương trình phát thanh"
          },
          {
            "key": "B",
            "text": "A tour guide",
            "vietnamese": "Một hướng dẫn viên du lịch / tham quan"
          },
          {
            "key": "C",
            "text": "A sales associate",
            "vietnamese": "Một nhân viên bán hàng"
          },
          {
            "key": "D",
            "text": "A professor",
            "vietnamese": "Một giáo sư"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Người nói mở đầu: \"Thanks again for joining me on today's tour of the beautiful Wallingford Conservatory\" (hướng dẫn viên tham quan - tour guide)."
      },
      {
        "num": 78,
        "question": "What will happen at two o'clock?",
        "vietnameseQuestion": "Điều gì sẽ diễn ra vào lúc 2 giờ?",
        "options": [
          {
            "key": "A",
            "text": "A lecture will begin.",
            "vietnamese": "Một bài thuyết trình sẽ bắt đầu."
          },
          {
            "key": "B",
            "text": "A demonstration will be given.",
            "vietnamese": "Một buổi trình diễn sẽ được tổ chức."
          },
          {
            "key": "C",
            "text": "An interview will be conducted.",
            "vietnamese": "Một cuộc phỏng vấn sẽ được tiến hành."
          },
          {
            "key": "D",
            "text": "A park will close.",
            "vietnamese": "Công viên sẽ đóng cửa."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Người nói nêu rõ: \"at two o'clock, our head botanist... will begin a lecture\" (bài giảng/thuyết trình bắt đầu)."
      },
      {
        "num": 79,
        "question": "What is Orchid Caretakers?",
        "vietnameseQuestion": "Orchid Caretakers là gì?",
        "options": [
          {
            "key": "A",
            "text": "A book",
            "vietnamese": "Một cuốn sách"
          },
          {
            "key": "B",
            "text": "An album",
            "vietnamese": "Một album nhạc"
          },
          {
            "key": "C",
            "text": "A film",
            "vietnamese": "Một bộ phim"
          },
          {
            "key": "D",
            "text": "A magazine",
            "vietnamese": "Một tờ tạp chí"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Orchid Caretakers là một bộ phim tài liệu: 'featured in a documentary film called Orchid Caretakers' (một bộ phim - A film)."
      }
    ],
    "vocabulary": [
      {
        "word": "conservatory",
        "meaning": "nhà kính trồng hoa / thực vật",
        "partOfSpeech": "n"
      },
      {
        "word": "botanist",
        "meaning": "nhà thực vật học",
        "partOfSpeech": "n"
      },
      {
        "word": "cultivate",
        "meaning": "trồng trọt, canh tác",
        "partOfSpeech": "v"
      },
      {
        "word": "orchid",
        "meaning": "hoa lan",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part4-80-82",
    "part": 4,
    "partTitle": "Part 4: Bài nói chuyện",
    "questionRange": "Câu 80 - 82",
    "title": "Part 4 - Câu 80 - 82: Đêm nhạc gây quỹ tu sửa trung tâm cộng đồng Hillcaster",
    "audioSrc": "/audio/test1_2024.mp3",
    "startTime": 2187.27,
    "endTime": 2271.25,
    "transcript": [
      {
        "speaker": "Speaker",
        "text": "Before the benefit concert begins, I want to thank all of you for supporting the Hillcaster Community Center.",
        "vietnamese": "Trước khi buổi hòa nhạc từ thiện bắt đầu, tôi muốn cảm ơn tất cả các bạn đã ủng hộ Trung tâm Cộng đồng Hillcaster.",
        "id": "part4-80-82-l1"
      },
      {
        "speaker": "Speaker",
        "text": "As you know, our facilities have been in need of some repairs for quite a while. So far, we've raised ,000 in ticket sales, but we haven't quite reached our goal yet.",
        "vietnamese": "Như các bạn đã biết, cơ sở vật chất của chúng tôi đã cần được sửa chữa trong một thời gian khá dài. Cho đến nay, chúng tôi đã gây quỹ được 5.000 đô la từ tiền bán vé, nhưng vẫn chưa đạt được mục tiêu.",
        "id": "part4-80-82-l2"
      },
      {
        "speaker": "Speaker",
        "text": "So, during the concert, I want to encourage you to buy food and drinks from the concession stand. 80% of the proceeds will go to construction at the Hillcaster Community Center. Enjoy the music!",
        "vietnamese": "Vì vậy, trong buổi hòa nhạc, tôi khuyến khích các bạn mua đồ ăn và thức uống từ quầy bán đồ ăn nhẹ. 80% số tiền thu được sẽ dành cho việc xây dựng tại Trung tâm Cộng đồng Hillcaster. Chúc các bạn thưởng thức âm nhạc!",
        "id": "part4-80-82-l3"
      }
    ],
    "questions": [
      {
        "num": 80,
        "question": "What event is taking place?",
        "vietnameseQuestion": "Sự kiện gì đang diễn ra?",
        "options": [
          {
            "key": "A",
            "text": "A fund-raising concert",
            "vietnamese": "Một buổi hòa nhạc gây quỹ"
          },
          {
            "key": "B",
            "text": "A sports competition",
            "vietnamese": "Một cuộc thi đấu thể thao"
          },
          {
            "key": "C",
            "text": "A play rehearsal",
            "vietnamese": "Một buổi tổng duyệt vở kịch"
          },
          {
            "key": "D",
            "text": "An awards ceremony",
            "vietnamese": "Một buổi lễ trao giải"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Người nói mở đầu: \"Before our benefit concert begins tonight\" (buổi hòa nhạc gây quỹ/từ thiện - fund-raising concert)."
      },
      {
        "num": 81,
        "question": "What does the organization plan to do?",
        "vietnameseQuestion": "Tổ chức có kế hoạch làm gì?",
        "options": [
          {
            "key": "A",
            "text": "Change a policy",
            "vietnamese": "Thay đổi một chính sách"
          },
          {
            "key": "B",
            "text": "Repair a building",
            "vietnamese": "Sửa chữa một tòa nhà"
          },
          {
            "key": "C",
            "text": "Select a winner",
            "vietnamese": "Chọn ra người chiến thắng"
          },
          {
            "key": "D",
            "text": "Sponsor a team",
            "vietnamese": "Tài trợ cho một đội tuyển"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Người nói giải thích tiền bán vé sẽ dùng để: \"repairing our historic building\" (sửa chữa tòa nhà)."
      },
      {
        "num": 82,
        "question": "What does the speaker encourage the listeners to do?",
        "vietnameseQuestion": "Người nói khuyến khích người nghe làm gì?",
        "options": [
          {
            "key": "A",
            "text": "Order tickets early",
            "vietnamese": "Đặt vé sớm"
          },
          {
            "key": "B",
            "text": "Visit a community center",
            "vietnamese": "Ghé thăm trung tâm cộng đồng"
          },
          {
            "key": "C",
            "text": "Purchase refreshments",
            "vietnamese": "Mua đồ ăn nhẹ giải khát"
          },
          {
            "key": "D",
            "text": "Donate clothing",
            "vietnamese": "Quyên góp quần áo"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Người nói khuyến khích mua đồ ăn thức uống: 'encourage you to buy food and drinks from the concession stand' (mua đồ ăn uống/giải khát - Purchase refreshments)."
      }
    ],
    "vocabulary": [
      {
        "word": "benefit concert",
        "meaning": "buổi hòa nhạc từ thiện gây quỹ",
        "partOfSpeech": "n"
      },
      {
        "word": "proceeds",
        "meaning": "tiền thu được, số tiền thu về",
        "partOfSpeech": "n"
      },
      {
        "word": "in desperate need of",
        "meaning": "rất cần, thiếu thốn cấp thiết",
        "partOfSpeech": "idiom"
      },
      {
        "word": "donate clothing",
        "meaning": "quyên góp quần áo",
        "partOfSpeech": "phr"
      }
    ]
  },
  {
    "id": "part4-83-85",
    "part": 4,
    "partTitle": "Part 4: Bài nói chuyện",
    "questionRange": "Câu 83 - 85",
    "title": "Part 4 - Câu 83 - 85: Hội thảo kỹ năng quản lý thời gian hiệu quả",
    "audioSrc": "/audio/test1_2024.mp3",
    "startTime": 2271.25,
    "endTime": 2343.98,
    "transcript": [
      {
        "id": "p4-83-1",
        "speaker": "Speaker",
        "text": "Thank you all for attending today's workshop. Erina Kimura and I will be conducting this morning's session, and we'll be focusing on using your time efficiently in a hybrid work environment.",
        "vietnamese": "Cảm ơn tất cả các bạn đã tham dự buổi hội thảo ngày hôm nay. Tôi và Erina Kimura sẽ điều hành buổi làm việc sáng nay, và chúng ta sẽ tập trung vào việc sử dụng thời gian hiệu quả trong môi trường làm việc kết hợp."
      },
      {
        "id": "p4-83-2",
        "speaker": "Speaker",
        "text": "Before we start with our presentation, please make sure you have the printed workbook and activity sheets. Erina's at the back of the room.",
        "vietnamese": "Trước khi chúng ta bắt đầu bài thuyết trình, xin vui lòng đảm bảo bạn đã có sách bài tập in sẵn và các tờ bài tập thực hành. Erina đang ở phía cuối phòng đấy."
      },
      {
        "id": "p4-83-3",
        "speaker": "Speaker",
        "text": "Once everyone has their materials, we'll begin with a ten-minute introductory activity where you'll pair up with someone nearby to evaluate your typical weekly work schedule.",
        "vietnamese": "Khi mọi người đã có đầy đủ tài liệu, chúng ta sẽ bắt đầu bằng một hoạt động mở đầu kéo dài mười phút, nơi các bạn sẽ bắt cặp với người ngồi bên cạnh để đánh giá lịch làm việc điển hình hàng tuần của mình."
      }
    ],
    "questions": [
      {
        "num": 83,
        "question": "What is the topic of the workshop?",
        "vietnameseQuestion": "Chủ đề của buổi hội thảo là gì?",
        "options": [
          {
            "key": "A",
            "text": "Time management",
            "vietnamese": "Quản lý thời gian"
          },
          {
            "key": "B",
            "text": "Public speaking",
            "vietnamese": "Nói trước công chúng"
          },
          {
            "key": "C",
            "text": "Leadership skills",
            "vietnamese": "Kỹ năng lãnh đạo"
          },
          {
            "key": "D",
            "text": "Professional networking",
            "vietnamese": "Kết nối mạng lưới quan hệ công việc"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Người nói nêu trọng tâm: \"using your time efficiently in a hybrid work environment\" (quản lý thời gian hiệu quả - Time management)."
      },
      {
        "num": 84,
        "question": "What does the speaker imply when he says, \"Erina's at the back of the room\"?",
        "vietnameseQuestion": "Người nói có ngụ ý gì khi nói \"Erina đang ở phía cuối phòng\"?",
        "options": [
          {
            "key": "A",
            "text": "A guest speaker has just arrived.",
            "vietnamese": "Một diễn giả khách mời vừa đến."
          },
          {
            "key": "B",
            "text": "Assistance is available.",
            "vietnamese": "Có sự hỗ trợ sẵn sàng (để phát tài liệu)."
          },
          {
            "key": "C",
            "text": "Attendees should speak clearly and loudly.",
            "vietnamese": "Người tham dự nên nói to rõ ràng."
          },
          {
            "key": "D",
            "text": "An extra chair should be provided.",
            "vietnamese": "Nên kê thêm một chiếc ghế."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Người nói nhắc kiểm tra xem ai chưa có tài liệu, rồi nói Erina ở cuối phòng ngụ ý ai cần tài liệu có thể nhận sự hỗ trợ từ cô ấy (Assistance is available)."
      },
      {
        "num": 85,
        "question": "What will the listeners do next?",
        "vietnameseQuestion": "Người nghe sẽ làm gì tiếp theo?",
        "options": [
          {
            "key": "A",
            "text": "Sign their names on a list",
            "vietnamese": "Ký tên vào danh sách"
          },
          {
            "key": "B",
            "text": "Take a break",
            "vietnamese": "Nghỉ giải lao"
          },
          {
            "key": "C",
            "text": "Participate in an introductory activity",
            "vietnamese": "Tham gia vào một hoạt động mở đầu"
          },
          {
            "key": "D",
            "text": "Fill out a questionnaire",
            "vietnamese": "Điền vào một bảng câu hỏi"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Người nói thông báo: \"we'll begin with a ten-minute introductory activity where you'll pair up with someone nearby...\""
      }
    ],
    "vocabulary": [
      {
        "word": "time management",
        "meaning": "quản lý thời gian",
        "partOfSpeech": "n"
      },
      {
        "word": "hybrid work",
        "meaning": "làm việc kết hợp (tại nhà và công ty)",
        "partOfSpeech": "n"
      },
      {
        "word": "introductory activity",
        "meaning": "hoạt động mở đầu, khởi động",
        "partOfSpeech": "n"
      },
      {
        "word": "pair up",
        "meaning": "bắt cặp, ghép đôi",
        "partOfSpeech": "phr v"
      }
    ]
  },
  {
    "id": "part4-86-88",
    "part": 4,
    "partTitle": "Part 4: Bài nói chuyện",
    "questionRange": "Câu 86 - 88",
    "title": "Part 4 - Câu 86 - 88: Tham quan di tích khảo cổ khu chợ thế kỷ thứ năm",
    "audioSrc": "/audio/test1_2024.mp3",
    "startTime": 2343.98,
    "endTime": 2427.7,
    "transcript": [
      {
        "speaker": "Speaker",
        "text": "At this site, archaeologists have uncovered the remains of a fifth-century marketplace with colourful mosaic tiles on the walls. You'll notice how vibrant the colours are, even after all these centuries. This is what the ruins are most famous for. You can still see intricate details in the artist's pictures of scenes from daily life.",
        "vietnamese": "Tại địa điểm này, các nhà khảo cổ học đã phát hiện ra tàn tích của một khu chợ thế kỷ thứ năm với những viên gạch khảm màu sắc rực rỡ trên tường. Bạn sẽ nhận thấy màu sắc rực rỡ đến mức nào, ngay cả sau nhiều thế kỷ. Đây là điều khiến tàn tích này nổi tiếng nhất. Bạn vẫn có thể thấy những chi tiết tinh xảo trong các bức tranh miêu tả cảnh sinh hoạt hàng ngày của nghệ sĩ.",
        "id": "part4-86-88-l1"
      },
      {
        "speaker": "Speaker",
        "text": "Now, to protect the mosaics, a roof has been constructed over the area and the lights are dim. And I'm sorry, but taking photos is not allowed, as the flash would damage the tiles.",
        "vietnamese": "Hiện nay, để bảo vệ các bức tranh khảm, một mái che đã được xây dựng trên khu vực này và ánh sáng rất mờ. Và tôi xin lỗi, nhưng việc chụp ảnh không được phép, vì đèn flash sẽ làm hỏng các viên gạch.",
        "id": "part4-86-88-l2"
      },
      {
        "speaker": "Speaker",
        "text": "As we proceed, please hold on to the handrails on either side. They'll help you stay on the path and protect the ruins around us.",
        "vietnamese": "Khi chúng ta tiếp tục di chuyển, xin vui lòng bám vào lan can ở hai bên. Chúng sẽ giúp bạn đi đúng lối và bảo vệ các tàn tích xung quanh chúng ta.",
        "id": "part4-86-88-l3"
      }
    ],
    "questions": [
      {
        "num": 86,
        "question": "What is a historical site famous for?",
        "vietnameseQuestion": "Địa điểm lịch sử nổi tiếng vì điều gì?",
        "options": [
          {
            "key": "A",
            "text": "Its defensive walls",
            "vietnamese": "Những bức tường phòng thủ"
          },
          {
            "key": "B",
            "text": "Its royal inhabitants",
            "vietnamese": "Những cư dân hoàng gia"
          },
          {
            "key": "C",
            "text": "An event that happened there",
            "vietnamese": "Một sự kiện từng xảy ra ở đó"
          },
          {
            "key": "D",
            "text": "Some artwork",
            "vietnamese": "Một số tác phẩm nghệ thuật (tranh khảm)"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Người nói cho biết khu di tích nổi tiếng vì: \"particularly renowned for its colorful mosaic tile artwork\" (tác phẩm nghệ thuật - artwork)."
      },
      {
        "num": 87,
        "question": "Why does the speaker apologize?",
        "vietnameseQuestion": "Tại sao người nói lại xin lỗi?",
        "options": [
          {
            "key": "A",
            "text": "The listeners cannot take pictures.",
            "vietnamese": "Người nghe không được chụp ảnh."
          },
          {
            "key": "B",
            "text": "An area is closed to the listeners.",
            "vietnamese": "Một khu vực bị đóng cửa đối với người tham quan."
          },
          {
            "key": "C",
            "text": "There is no gift shop.",
            "vietnamese": "Không có cửa hàng quà tặng."
          },
          {
            "key": "D",
            "text": "A tour started late.",
            "vietnamese": "Chuyến tham quan bắt đầu muộn."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Người nói xin lỗi vì không được phép chụp ảnh: 'I'm sorry, but taking photos is not allowed' (người nghe không thể chụp ảnh - The listeners cannot take pictures)."
      },
      {
        "num": 88,
        "question": "What does the speaker ask the listeners to do?",
        "vietnameseQuestion": "Người nói yêu cầu người nghe làm gì?",
        "options": [
          {
            "key": "A",
            "text": "Show their tickets",
            "vietnamese": "Xuất trình vé"
          },
          {
            "key": "B",
            "text": "Put on protective clothing",
            "vietnamese": "Mặc đồ bảo hộ"
          },
          {
            "key": "C",
            "text": "Use some handrails",
            "vietnamese": "Sử dụng lan can"
          },
          {
            "key": "D",
            "text": "Speak quietly",
            "vietnamese": "Nói nhỏ nhẹ, trật tự"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Người nói yêu cầu khách bám vào tay vịn/lan can: 'please hold on to the handrails on either side' (sử dụng lan can - Use some handrails)."
      }
    ],
    "vocabulary": [
      {
        "word": "archaeologist",
        "meaning": "nhà khảo cổ học",
        "partOfSpeech": "n"
      },
      {
        "word": "mosaic tile",
        "meaning": "gạch khảm ghép tranh nghệ thuật",
        "partOfSpeech": "n"
      },
      {
        "word": "preservation",
        "meaning": "sự bảo tồn",
        "partOfSpeech": "n"
      },
      {
        "word": "speak quietly",
        "meaning": "nói nhỏ nhẹ, khẽ",
        "partOfSpeech": "phr"
      }
    ]
  },
  {
    "id": "part4-89-91",
    "part": 4,
    "partTitle": "Part 4: Bài nói chuyện",
    "questionRange": "Câu 89 - 91",
    "title": "Part 4 - Câu 89 - 91: Họp công ty quảng cáo về hợp đồng phụ tùng ô tô Parker",
    "audioSrc": "/audio/test1_2024.mp3",
    "startTime": 2427.7,
    "endTime": 2502.63,
    "transcript": [
      {
        "speaker": "Speaker",
        "text": "As you all know, our agency has just won an important contract with Parker Auto Parts Company. We'll be developing two 30-second ads for local radio stations to be released next month and two additional 20-second ads for the following month.",
        "vietnamese": "Như các bạn đều biết, công ty chúng ta vừa giành được một hợp đồng quan trọng với Công ty Phụ tùng Ô tô Parker. Chúng ta sẽ phát triển hai đoạn quảng cáo 30 giây cho các đài phát thanh địa phương phát hành vào tháng tới và thêm hai đoạn quảng cáo 20 giây cho tháng tiếp theo.",
        "id": "part4-89-91-l1"
      },
      {
        "speaker": "Speaker",
        "text": "Now, I know it's a tight schedule, but this is a priority. The client has actually started trying to work on this internally. So, there's a rough ad we can start editing. Let's work on that now.",
        "vietnamese": "Tôi biết đây là một lịch trình gấp gáp, nhưng đây là một ưu tiên. Khách hàng thực sự đã bắt đầu tự thực hiện việc này nội bộ. Vì vậy, có một bản nháp quảng cáo thô mà chúng ta có thể bắt đầu chỉnh sửa. Bây giờ chúng ta hãy bắt tay vào làm việc đó.",
        "id": "part4-89-91-l2"
      }
    ],
    "questions": [
      {
        "num": 89,
        "question": "What is the speaker mainly discussing?",
        "vietnameseQuestion": "Người nói chủ yếu thảo luận về điều gì?",
        "options": [
          {
            "key": "A",
            "text": "An advertising campaign",
            "vietnamese": "Một chiến dịch quảng cáo"
          },
          {
            "key": "B",
            "text": "A market expansion",
            "vietnamese": "Mở rộng thị trường"
          },
          {
            "key": "C",
            "text": "Some contract negotiations",
            "vietnamese": "Đàm phán hợp đồng"
          },
          {
            "key": "D",
            "text": "Some audit procedures",
            "vietnamese": "Một số quy trình kiểm toán"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Người nói bàn về: \"won a major contract... developing two thirty-second radio advertisements\" (chiến dịch quảng cáo - An advertising campaign)."
      },
      {
        "num": 90,
        "question": "What does the speaker imply when he says, \"this is a priority\"?",
        "vietnameseQuestion": "Người nói có ngụ ý gì khi nói \"đây là việc ưu tiên hàng đầu\"?",
        "options": [
          {
            "key": "A",
            "text": "Overtime pay has been approved.",
            "vietnamese": "Tiền làm thêm giờ đã được duyệt."
          },
          {
            "key": "B",
            "text": "A deadline must be met.",
            "vietnamese": "Phải đáp ứng đúng hạn chót."
          },
          {
            "key": "C",
            "text": "A client expressed concern.",
            "vietnamese": "Khách hàng bày tỏ lo ngại."
          },
          {
            "key": "D",
            "text": "A supervisor will be observing closely.",
            "vietnamese": "Người giám sát sẽ theo dõi chặt chẽ."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Người nói nhấn mạnh khách muốn ra mắt ngày đầu tháng tới và không thể để lỡ khung phát sóng, nên \"this is a priority\" ngụ ý phải kịp hạn chót (A deadline must be met)."
      },
      {
        "num": 91,
        "question": "What will the listeners do next?",
        "vietnameseQuestion": "Người nghe sẽ làm gì tiếp theo?",
        "options": [
          {
            "key": "A",
            "text": "View a presentation",
            "vietnamese": "Xem một bài thuyết trình"
          },
          {
            "key": "B",
            "text": "Review a budget",
            "vietnamese": "Xem lại ngân sách"
          },
          {
            "key": "C",
            "text": "Revise some work",
            "vietnamese": "Chỉnh sửa lại công việc"
          },
          {
            "key": "D",
            "text": "Do some research",
            "vietnamese": "Thực hiện nghiên cứu"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Người nói yêu cầu bắt đầu chỉnh sửa bản nháp quảng cáo: 'there's a rough ad we can start editing. Let's work on that now' (chỉnh sửa lại công việc/bản thảo - Revise some work)."
      }
    ],
    "vocabulary": [
      {
        "word": "advertising agency",
        "meaning": "công ty đại lý quảng cáo",
        "partOfSpeech": "n"
      },
      {
        "word": "priority",
        "meaning": "sự ưu tiên hàng đầu",
        "partOfSpeech": "n"
      },
      {
        "word": "deadline",
        "meaning": "hạn chót",
        "partOfSpeech": "n"
      },
      {
        "word": "target demographic",
        "meaning": "nhóm nhân khẩu học mục tiêu",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part4-92-94",
    "part": 4,
    "partTitle": "Part 4: Bài nói chuyện",
    "questionRange": "Câu 92 - 94",
    "title": "Part 4 - Câu 92 - 94: Họp điều dưỡng bệnh viện về đồ ăn nhẹ trong phòng nghỉ",
    "audioSrc": "/audio/test1_2024.mp3",
    "startTime": 2502.63,
    "endTime": 2589.61,
    "transcript": [
      {
        "id": "p4-92-1",
        "speaker": "Speaker",
        "text": "Excuse me, nurses, can I have your attention for a moment? I want to address the complaints several staff members have submitted about the complimentary snacks provided in the hospital staff break rooms.",
        "vietnamese": "Xin lỗi các điều dưỡng viên, xin vui lòng chú ý một chút được không? Tôi muốn giải quyết những lời phàn nàn mà một số nhân viên đã gửi về các món ăn nhẹ miễn phí được cung cấp trong phòng nghỉ của nhân viên bệnh viện."
      },
      {
        "id": "p4-92-2",
        "speaker": "Speaker",
        "text": "Many of you have pointed out that the current vending machines and baskets offer mostly sugary cookies and chips, and you've requested healthier alternatives like fresh fruit, nuts, and yogurt.",
        "vietnamese": "Nhiều người trong số các bạn đã chỉ ra rằng các máy bán hàng tự động và giỏ đồ ăn hiện tại chủ yếu chứa bánh quy ngọt và khoai tây chiên, và các bạn đã yêu cầu những lựa chọn lành mạnh hơn như trái cây tươi, các loại hạt và sữa chua."
      },
      {
        "id": "p4-92-3",
        "speaker": "Speaker",
        "text": "I agree this makes total sense for a healthcare facility. However, modifying our food service vendor agreement will require management approval. So please be patient while the administrative review takes place.",
        "vietnamese": "Tôi đồng ý rằng điều này hoàn toàn hợp lý đối với một cơ sở chăm sóc sức khỏe. Tuy nhiên, việc điều chỉnh hợp đồng với nhà cung cấp dịch vụ ăn uống của chúng ta sẽ cần có sự phê duyệt của ban quản lý. Vì vậy xin hãy kiên nhẫn trong khi quá trình xem xét của ban hành chính diễn ra."
      }
    ],
    "questions": [
      {
        "num": 92,
        "question": "Where do the listeners most likely work?",
        "vietnameseQuestion": "Những người nghe có khả năng làm việc ở đâu nhất?",
        "options": [
          {
            "key": "A",
            "text": "At a hospital",
            "vietnamese": "Tại một bệnh viện"
          },
          {
            "key": "B",
            "text": "At a restaurant",
            "vietnamese": "Tại một nhà hàng"
          },
          {
            "key": "C",
            "text": "At a grocery store",
            "vietnamese": "Tại một cửa hàng tạp hóa"
          },
          {
            "key": "D",
            "text": "At an electronics store",
            "vietnamese": "Tại một cửa hàng điện máy"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Người nói mở đầu gọi: \"Excuse me, nurses... in the hospital staff break rooms\" nên họ làm việc ở bệnh viện (At a hospital)."
      },
      {
        "num": 93,
        "question": "What is the main purpose of the talk?",
        "vietnameseQuestion": "Mục đích chính của bài nói là gì?",
        "options": [
          {
            "key": "A",
            "text": "To make a request",
            "vietnamese": "Để đưa ra một yêu cầu"
          },
          {
            "key": "B",
            "text": "To address staff complaints",
            "vietnamese": "Để giải quyết các phàn nàn của nhân viên"
          },
          {
            "key": "C",
            "text": "To present a new schedule",
            "vietnamese": "Để giới thiệu một lịch trình mới"
          },
          {
            "key": "D",
            "text": "To explain a technical process",
            "vietnamese": "Để giải thích một quy trình kỹ thuật"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Người nói nêu rõ mục đích: \"I want to address the complaints several staff members have submitted...\""
      },
      {
        "num": 94,
        "question": "What does the speaker imply when she says, \"That will require management approval\"?",
        "vietnameseQuestion": "Người nói có ngụ ý gì khi nói \"Điều đó sẽ cần có sự phê duyệt của ban quản lý\"?",
        "options": [
          {
            "key": "A",
            "text": "A process has not been followed.",
            "vietnamese": "Một quy trình đã không được tuân thủ."
          },
          {
            "key": "B",
            "text": "The listeners may be asked to work extra shifts.",
            "vietnamese": "Người nghe có thể bị yêu cầu làm thêm ca."
          },
          {
            "key": "C",
            "text": "The listeners should contact a manager.",
            "vietnamese": "Người nghe nên liên hệ với một người quản lý."
          },
          {
            "key": "D",
            "text": "A change will not be immediate.",
            "vietnamese": "Sự thay đổi sẽ không thể diễn ra ngay lập tức."
          }
        ],
        "correctAnswer": "D",
        "explanation": "Người nói tiếp lời \"So please be patient...\", ngụ ý rằng vì cần sếp duyệt nên thay đổi cần thời gian, không thể có ngay lập tức (A change will not be immediate)."
      }
    ],
    "vocabulary": [
      {
        "word": "complimentary",
        "meaning": "miễn phí",
        "partOfSpeech": "adj"
      },
      {
        "word": "address a complaint",
        "meaning": "giải quyết lời phàn nàn/khiếu nại",
        "partOfSpeech": "phr"
      },
      {
        "word": "break room",
        "meaning": "phòng nghỉ giải lao",
        "partOfSpeech": "n"
      },
      {
        "word": "management approval",
        "meaning": "sự phê duyệt của ban quản lý",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part4-95-97",
    "part": 4,
    "partTitle": "Part 4: Bài nói chuyện",
    "questionRange": "Câu 95 - 97",
    "title": "Part 4 - Câu 95 - 97: Lễ khánh thành công viên Lakeville sau khi cải tạo",
    "audioSrc": "/audio/test1_2024.mp3",
    "startTime": 2589.61,
    "endTime": 2673.32,
    "transcript": [
      {
        "speaker": "Speaker",
        "text": "As mayor of Lakeville, I'm pleased to welcome you to the celebration for our town's newly renovated Lakeville Park. There are a lot of new areas to explore, so we've planned a short hike.",
        "vietnamese": "Với tư cách là thị trưởng của Lakeville, tôi rất vui mừng chào đón các bạn đến với lễ kỷ niệm Công viên Lakeville mới được cải tạo của thị trấn chúng ta. Có rất nhiều khu vực mới để khám phá, vì vậy chúng tôi đã lên kế hoạch cho một chuyến đi bộ ngắn.",
        "id": "part4-95-97-l1"
      },
      {
        "speaker": "Speaker",
        "text": "We'll be walking around the pond and along the renovated walking trail. We'll end our walk on the hill on the north side of the park. There we'll be having some free snacks and ice cream.",
        "vietnamese": "Chúng ta sẽ đi dạo quanh hồ và dọc theo con đường đi bộ đã được cải tạo. Chúng ta sẽ kết thúc chuyến đi bộ trên ngọn đồi ở phía bắc của công viên. Tại đó, chúng ta sẽ có đồ ăn nhẹ và kem miễn phí.",
        "id": "part4-95-97-l2"
      },
      {
        "speaker": "Speaker",
        "text": "For those of you taking photos, don't forget to post them on the city's website. We'd like to commemorate this special day.",
        "vietnamese": "Đối với những bạn đang chụp ảnh, đừng quên đăng chúng lên trang web của thành phố. Chúng tôi muốn kỷ niệm ngày đặc biệt này.",
        "id": "part4-95-97-l3"
      }
    ],
    "questions": [
      {
        "num": 95,
        "question": "According to the speaker, what was recently completed?",
        "vietnameseQuestion": "Theo người nói, điều gì vừa mới được hoàn thành gần đây?",
        "options": [
          {
            "key": "A",
            "text": "A company reorganization",
            "vietnamese": "Tái cơ cấu công ty"
          },
          {
            "key": "B",
            "text": "A park renovation",
            "vietnamese": "Cải tạo công viên"
          },
          {
            "key": "C",
            "text": "A volunteer training",
            "vietnamese": "Đào tạo tình nguyện viên"
          },
          {
            "key": "D",
            "text": "A conservation project",
            "vietnamese": "Dự án bảo tồn"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Người nói tuyên bố: \"celebration for our town's newly renovated Lakeville Park\" (cải tạo công viên - park renovation)."
      },
      {
        "num": 96,
        "question": "Look at the graphic. Where does the speaker say refreshments will be served?",
        "vietnameseQuestion": "Nhìn vào hình ảnh. Người nói cho biết đồ ăn nhẹ sẽ được phục vụ ở đâu?",
        "options": [
          {
            "key": "A",
            "text": "Location 1",
            "vietnamese": "Vị trí 1"
          },
          {
            "key": "B",
            "text": "Location 2",
            "vietnamese": "Vị trí 2"
          },
          {
            "key": "C",
            "text": "Location 3",
            "vietnamese": "Vị trí 3"
          },
          {
            "key": "D",
            "text": "Location 4",
            "vietnamese": "Vị trí 4"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Người nói thông báo đồ ăn nhẹ và kem được phục vụ ở 'the hill on the north side of the park'. Nhìn bản đồ công viên, ngọn đồi ở phía bắc ứng với Location 1 (Option A)."
      },
      {
        "num": 97,
        "question": "What are the listeners reminded to do?",
        "vietnameseQuestion": "Người nghe được nhắc nhở làm gì?",
        "options": [
          {
            "key": "A",
            "text": "Complete a survey",
            "vietnamese": "Hoàn thành một bài khảo sát"
          },
          {
            "key": "B",
            "text": "Donate some money",
            "vietnamese": "Quyên góp tiền"
          },
          {
            "key": "C",
            "text": "Join an organization",
            "vietnamese": "Tham gia một tổ chức"
          },
          {
            "key": "D",
            "text": "Post some photographs",
            "vietnamese": "Đăng tải hình ảnh"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Người nói nhắc nhở mọi người đăng ảnh: 'don't forget to post them on the city's website' (đăng tải hình ảnh - Post some photographs)."
      }
    ],
    "vocabulary": [
      {
        "word": "renovate",
        "meaning": "cải tạo, nâng cấp",
        "partOfSpeech": "v"
      },
      {
        "word": "refreshments",
        "meaning": "đồ ăn nhẹ và đồ uống giải khát",
        "partOfSpeech": "n"
      },
      {
        "word": "picnic table",
        "meaning": "bàn dã ngoại ngoài trời",
        "partOfSpeech": "n"
      },
      {
        "word": "feedback survey",
        "meaning": "khảo sát ý kiến phản hồi",
        "partOfSpeech": "n"
      }
    ],
    "graphicImage": "/images/intensive/test1_2024/q95_97.png",
    "image": "/images/intensive/test1_2024/q95_97.png"
  },
  {
    "id": "part4-98-100",
    "part": 4,
    "partTitle": "Part 4: Bài nói chuyện",
    "questionRange": "Câu 98 - 100",
    "title": "Part 4 - Câu 98 - 100: Hội thảo nông nghiệp về kỹ thuật lấy mẫu đất trồng rau",
    "audioSrc": "/audio/test1_2024.mp3",
    "startTime": 2673.32,
    "endTime": 2752.52,
    "transcript": [
      {
        "id": "p4-98-1",
        "speaker": "Speaker",
        "text": "Thanks, everyone, for attending today's free public lecture sponsored by the Springfield Farmers Association. We've received lots of requests for guidance on growing healthy home vegetable gardens, so that's our focus today.",
        "vietnamese": "Cảm ơn tất cả mọi người đã tham dự bài thuyết trình công khai miễn phí hôm nay do Hiệp hội Nông dân Springfield tài trợ. Chúng tôi đã nhận được rất nhiều yêu cầu hướng dẫn về cách trồng vườn rau sạch tại nhà, vì vậy đó là trọng tâm của chúng ta ngày hôm nay."
      },
      {
        "id": "p4-98-2",
        "speaker": "Speaker",
        "text": "Before you plant anything, assessing soil quality is critical. You'll want to test nutrient levels now. Since it's currently October, make sure you collect soil samples at the recommended depth shown on your timeline handout.",
        "vietnamese": "Trước khi bạn trồng bất cứ thứ gì, việc đánh giá chất lượng đất là tối quan trọng. Bạn sẽ muốn kiểm tra hàm lượng dinh dưỡng ngay bây giờ. Vì hiện tại đang là tháng Mười, hãy chắc chắn rằng bạn thu thập các mẫu đất ở độ sâu khuyến nghị được hiển thị trên tài liệu biểu đồ thời gian của bạn."
      },
      {
        "id": "p4-98-3",
        "speaker": "Speaker",
        "text": "Finally, we provide regular seasonal gardening advice throughout the year. If you'd like to receive our monthly digital newsletter with tips and upcoming workshop announcements, please sign up on the mailing list by the exit doors.",
        "vietnamese": "Cuối cùng, chúng tôi cung cấp lời khuyên làm vườn theo mùa định kỳ trong suốt cả năm. Nếu bạn muốn nhận bản tin kỹ thuật số hàng tháng của chúng tôi với các mẹo hữu ích và thông báo hội thảo sắp tới, vui lòng đăng ký vào danh sách nhận thư ở cạnh cửa ra vào."
      }
    ],
    "questions": [
      {
        "num": 98,
        "question": "What is the topic of today's lecture?",
        "vietnameseQuestion": "Chủ đề của bài thuyết trình hôm nay là gì?",
        "options": [
          {
            "key": "A",
            "text": "When to harvest crops",
            "vietnamese": "Khi nào thu hoạch mùa màng"
          },
          {
            "key": "B",
            "text": "Where to plant trees",
            "vietnamese": "Nơi trồng cây xanh"
          },
          {
            "key": "C",
            "text": "How to grow vegetables",
            "vietnamese": "Cách trồng rau củ quả"
          },
          {
            "key": "D",
            "text": "Which flowers need more sun",
            "vietnamese": "Những loài hoa nào cần nhiều ánh nắng hơn"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Người nói nêu rõ: \"guidance on growing healthy home vegetable gardens, so that's our focus today\" (cách trồng rau - How to grow vegetables)."
      },
      {
        "num": 99,
        "question": "Look at the graphic. At what depth should samples be collected this month?",
        "vietnameseQuestion": "Nhìn vào hình ảnh. Mẫu đất nên được thu thập ở độ sâu nào trong tháng này?",
        "options": [
          {
            "key": "A",
            "text": "12 inches",
            "vietnamese": "12 inch"
          },
          {
            "key": "B",
            "text": "4 inches",
            "vietnamese": "4 inch"
          },
          {
            "key": "C",
            "text": "6 inches",
            "vietnamese": "6 inch"
          },
          {
            "key": "D",
            "text": "8 inches",
            "vietnamese": "8 inch"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Người nói cho biết: \"Since it's currently October...\". Nhìn bảng biểu \"Soil Sampling Timeline\", dòng thời gian \"September-October\" cho tất cả các loại cây (All plants) có độ sâu là 12 inches."
      },
      {
        "num": 100,
        "question": "What does the speaker encourage the listeners to do?",
        "vietnameseQuestion": "Người nói khuyến khích người nghe làm gì?",
        "options": [
          {
            "key": "A",
            "text": "Turn off mobile phones",
            "vietnamese": "Tắt điện thoại di động"
          },
          {
            "key": "B",
            "text": "Have some refreshments",
            "vietnamese": "Dùng đồ ăn nhẹ giải khát"
          },
          {
            "key": "C",
            "text": "Purchase some seeds",
            "vietnamese": "Mua hạt giống"
          },
          {
            "key": "D",
            "text": "Sign up for a mailing list",
            "vietnamese": "Đăng ký vào danh sách nhận thư"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Người nói khuyên: \"please sign up on the mailing list by the exit doors\" (đăng ký vào danh sách nhận thư)."
      }
    ],
    "vocabulary": [
      {
        "word": "vegetable garden",
        "meaning": "vườn rau",
        "partOfSpeech": "n"
      },
      {
        "word": "soil quality",
        "meaning": "chất lượng đất trồng",
        "partOfSpeech": "n"
      },
      {
        "word": "nutrient",
        "meaning": "chất dinh dưỡng",
        "partOfSpeech": "n"
      },
      {
        "word": "depth",
        "meaning": "độ sâu",
        "partOfSpeech": "n"
      },
      {
        "word": "mailing list",
        "meaning": "danh sách nhận thư điện tử",
        "partOfSpeech": "n"
      }
    ],
    "graphicImage": "/images/intensive/test1_2024/q98_100.png",
    "image": "/images/intensive/test1_2024/q98_100.png"
  }
];
