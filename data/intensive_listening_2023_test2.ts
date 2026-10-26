// Dữ liệu luyện nghe chi tiết (Intensive Listening) - ETS TOEIC 2023 Test 2
// Áp dụng kỹ thuật Virtual Timestamp Slicing từ audio gốc /audio/test2_2023.mp3
// Transcript song ngữ Anh - Việt, câu hỏi, đáp án và từ vựng trọng tâm

import type { IntensiveListeningItem } from './intensive_listening_types';

export const test2_2023_IntensiveData: IntensiveListeningItem[] = [
  {
    "id": "part1-1",
    "part": 1,
    "partTitle": "Part 1: Mô tả hình ảnh",
    "questionRange": "Câu 1",
    "title": "Part 1 - Câu 1: Một người phụ nữ đang mở ngăn kéo.",
    "audioSrc": "/audio/test2_2023.mp3",
    "startTime": 99.0,
    "endTime": 123.22,
    "imageUrl": "/images/intensive/test2_2023/q1.png",
    "image": "/images/intensive/test2_2023/q1.png",
    "transcript": [
      {
        "id": "p1-1-a",
        "speaker": "Speaker",
        "text": "(A) A woman is holding a power tool.",
        "vietnamese": "(A) Một người phụ nữ đang cầm một dụng cụ điện."
      },
      {
        "id": "p1-1-b",
        "speaker": "Speaker",
        "text": "(B) A woman is opening a drawer.",
        "vietnamese": "(B) Một người phụ nữ đang mở ngăn kéo."
      },
      {
        "id": "p1-1-c",
        "speaker": "Speaker",
        "text": "(C) A printer is being unplugged.",
        "vietnamese": "(C) Máy in đang được rút phích cắm."
      },
      {
        "id": "p1-1-d",
        "speaker": "Speaker",
        "text": "(D) Office supplies are being put into a box.",
        "vietnamese": "(D) Đồ dùng văn phòng đang được cho vào hộp."
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
            "text": "A woman is holding a power tool.",
            "vietnamese": "Một người phụ nữ đang cầm một dụng cụ điện."
          },
          {
            "key": "B",
            "text": "A woman is opening a drawer.",
            "vietnamese": "Một người phụ nữ đang mở ngăn kéo."
          },
          {
            "key": "C",
            "text": "A printer is being unplugged.",
            "vietnamese": "Máy in đang được rút phích cắm."
          },
          {
            "key": "D",
            "text": "Office supplies are being put into a box.",
            "vietnamese": "Đồ dùng văn phòng đang được cho vào hộp."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"A woman is opening a drawer.\" (Một người phụ nữ đang mở ngăn kéo.) mô tả chính xác hoạt động và cảnh vật trong hình."
      }
    ],
    "vocabulary": [
      {
        "word": "opening",
        "meaning": "chỗ trống, phòng trống",
        "partOfSpeech": "n"
      },
      {
        "word": "drawer",
        "meaning": "ngăn kéo bàn",
        "partOfSpeech": "n"
      },
      {
        "word": "supplies",
        "meaning": "đồ dùng, vật tư văn phòng",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part1-2",
    "part": 1,
    "partTitle": "Part 1: Mô tả hình ảnh",
    "questionRange": "Câu 2",
    "title": "Part 1 - Câu 2: Một người đàn ông đứng gần khu trưng bày các chậu cây.",
    "audioSrc": "/audio/test2_2023.mp3",
    "startTime": 123.22,
    "endTime": 156.06,
    "imageUrl": "/images/intensive/test2_2023/q2.png",
    "image": "/images/intensive/test2_2023/q2.png",
    "transcript": [
      {
        "id": "p1-2-a",
        "speaker": "Speaker",
        "text": "(A) Plants are on top of a cart.",
        "vietnamese": "(A) Cây được đặt trên nóc xe đẩy."
      },
      {
        "id": "p1-2-b",
        "speaker": "Speaker",
        "text": "(B) A watering can is next to some trees.",
        "vietnamese": "(B) Một bình tưới nước ở bên cạnh một số cây."
      },
      {
        "id": "p1-2-c",
        "speaker": "Speaker",
        "text": "(C) A man is digging in a garden.",
        "vietnamese": "(C) Một người đàn ông đang đào đất trong vườn."
      },
      {
        "id": "p1-2-d",
        "speaker": "Speaker",
        "text": "(D) A man is near a display of potted plants.",
        "vietnamese": "(D) Một người đàn ông đứng gần khu trưng bày các chậu cây."
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
            "text": "Plants are on top of a cart.",
            "vietnamese": "Cây được đặt trên nóc xe đẩy."
          },
          {
            "key": "B",
            "text": "A watering can is next to some trees.",
            "vietnamese": "Một bình tưới nước ở bên cạnh một số cây."
          },
          {
            "key": "C",
            "text": "A man is digging in a garden.",
            "vietnamese": "Một người đàn ông đang đào đất trong vườn."
          },
          {
            "key": "D",
            "text": "A man is near a display of potted plants.",
            "vietnamese": "Một người đàn ông đứng gần khu trưng bày các chậu cây."
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là (D): \"A man is near a display of potted plants.\" (Một người đàn ông đứng gần khu trưng bày các chậu cây.) mô tả chính xác hoạt động và cảnh vật trong hình."
      }
    ],
    "vocabulary": [
      {
        "word": "cart",
        "meaning": "xe đẩy, xe chở hàng",
        "partOfSpeech": "n"
      },
      {
        "word": "display",
        "meaning": "trưng bày",
        "partOfSpeech": "v"
      }
    ]
  },
  {
    "id": "part1-3",
    "part": 1,
    "partTitle": "Part 1: Mô tả hình ảnh",
    "questionRange": "Câu 3",
    "title": "Part 1 - Câu 3: Người đàn ông đang nâng tạ.",
    "audioSrc": "/audio/test2_2023.mp3",
    "startTime": 156.06,
    "endTime": 180.3,
    "imageUrl": "/images/intensive/test2_2023/q3.png",
    "image": "/images/intensive/test2_2023/q3.png",
    "transcript": [
      {
        "id": "p1-3-a",
        "speaker": "Speaker",
        "text": "(A) The man is fixing a machine.",
        "vietnamese": "(A) Người đàn ông đang sửa máy."
      },
      {
        "id": "p1-3-b",
        "speaker": "Speaker",
        "text": "(B) The man is buying some equipment.",
        "vietnamese": "(B) Người đàn ông đang mua một số thiết bị."
      },
      {
        "id": "p1-3-c",
        "speaker": "Speaker",
        "text": "(C) The man is lifting a weight.",
        "vietnamese": "(C) Người đàn ông đang nâng tạ."
      },
      {
        "id": "p1-3-d",
        "speaker": "Speaker",
        "text": "(D) The man is looking at the ceiling.",
        "vietnamese": "(D) Người đàn ông đang nhìn lên trần nhà."
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
            "text": "The man is fixing a machine.",
            "vietnamese": "Người đàn ông đang sửa máy."
          },
          {
            "key": "B",
            "text": "The man is buying some equipment.",
            "vietnamese": "Người đàn ông đang mua một số thiết bị."
          },
          {
            "key": "C",
            "text": "The man is lifting a weight.",
            "vietnamese": "Người đàn ông đang nâng tạ."
          },
          {
            "key": "D",
            "text": "The man is looking at the ceiling.",
            "vietnamese": "Người đàn ông đang nhìn lên trần nhà."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"The man is lifting a weight.\" (Người đàn ông đang nâng tạ.) mô tả chính xác hoạt động và cảnh vật trong hình."
      }
    ],
    "vocabulary": [
      {
        "word": "machine",
        "meaning": "máy móc, thiết bị cơ giới",
        "partOfSpeech": "n"
      },
      {
        "word": "equipment",
        "meaning": "trang thiết bị máy móc",
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
    "title": "Part 1 - Câu 4: Một bức tường được trang trí bằng nhiều vật dụng khác nhau.",
    "audioSrc": "/audio/test2_2023.mp3",
    "startTime": 180.3,
    "endTime": 207.15,
    "imageUrl": "/images/intensive/test2_2023/q4.png",
    "image": "/images/intensive/test2_2023/q4.png",
    "transcript": [
      {
        "id": "p1-4-a",
        "speaker": "Speaker",
        "text": "(A) A wall is decorated with various items.",
        "vietnamese": "(A) Một bức tường được trang trí bằng nhiều vật dụng khác nhau."
      },
      {
        "id": "p1-4-b",
        "speaker": "Speaker",
        "text": "(B) Two chairs are blocking a doorway.",
        "vietnamese": "(B) Hai chiếc ghế đang chắn lối vào."
      },
      {
        "id": "p1-4-c",
        "speaker": "Speaker",
        "text": "(C) A door has been propped open with a statue.",
        "vietnamese": "(C) Một cánh cửa đã được mở ra với một bức tượng."
      },
      {
        "id": "p1-4-d",
        "speaker": "Speaker",
        "text": "(D) A painting is hanging next to a window.",
        "vietnamese": "(D) Một bức tranh được treo cạnh cửa sổ."
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
            "text": "A wall is decorated with various items.",
            "vietnamese": "Một bức tường được trang trí bằng nhiều vật dụng khác nhau."
          },
          {
            "key": "B",
            "text": "Two chairs are blocking a doorway.",
            "vietnamese": "Hai chiếc ghế đang chắn lối vào."
          },
          {
            "key": "C",
            "text": "A door has been propped open with a statue.",
            "vietnamese": "Một cánh cửa đã được mở ra với một bức tượng."
          },
          {
            "key": "D",
            "text": "A painting is hanging next to a window.",
            "vietnamese": "Một bức tranh được treo cạnh cửa sổ."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là (A): \"A wall is decorated with various items.\" (Một bức tường được trang trí bằng nhiều vật dụng khác nhau.) mô tả chính xác hoạt động và cảnh vật trong hình."
      }
    ],
    "vocabulary": [
      {
        "word": "open",
        "meaning": "mở cửa đón khách",
        "partOfSpeech": "v"
      },
      {
        "word": "statue",
        "meaning": "bức tượng điêu khắc",
        "partOfSpeech": "n"
      },
      {
        "word": "painting",
        "meaning": "bức tranh hội họa",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part1-5",
    "part": 1,
    "partTitle": "Part 1: Mô tả hình ảnh",
    "questionRange": "Câu 5",
    "title": "Part 1 - Câu 5: Một số người đang duyệt trong một cửa hàng.",
    "audioSrc": "/audio/test2_2023.mp3",
    "startTime": 207.15,
    "endTime": 228.1,
    "imageUrl": "/images/intensive/test2_2023/q5.png",
    "image": "/images/intensive/test2_2023/q5.png",
    "transcript": [
      {
        "id": "p1-5-a",
        "speaker": "Speaker",
        "text": "(A) Some people are browsing in a shop.",
        "vietnamese": "(A) Một số người đang duyệt trong một cửa hàng."
      },
      {
        "id": "p1-5-b",
        "speaker": "Speaker",
        "text": "(B) Some people are exchanging gifts.",
        "vietnamese": "(B) Một số người đang trao đổi quà tặng."
      },
      {
        "id": "p1-5-c",
        "speaker": "Speaker",
        "text": "(C) A customer is paying for some goods.",
        "vietnamese": "(C) Một khách hàng đang trả tiền cho một số hàng hóa."
      },
      {
        "id": "p1-5-d",
        "speaker": "Speaker",
        "text": "(D) Some salespeople are preparing a display.",
        "vietnamese": "(D) Một số nhân viên bán hàng đang chuẩn bị trưng bày."
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
            "text": "Some people are browsing in a shop.",
            "vietnamese": "Một số người đang duyệt trong một cửa hàng."
          },
          {
            "key": "B",
            "text": "Some people are exchanging gifts.",
            "vietnamese": "Một số người đang trao đổi quà tặng."
          },
          {
            "key": "C",
            "text": "A customer is paying for some goods.",
            "vietnamese": "Một khách hàng đang trả tiền cho một số hàng hóa."
          },
          {
            "key": "D",
            "text": "Some salespeople are preparing a display.",
            "vietnamese": "Một số nhân viên bán hàng đang chuẩn bị trưng bày."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là (A): \"Some people are browsing in a shop.\" (Một số người đang duyệt trong một cửa hàng.) mô tả chính xác hoạt động và cảnh vật trong hình."
      }
    ],
    "vocabulary": [
      {
        "word": "display",
        "meaning": "trưng bày",
        "partOfSpeech": "v"
      }
    ]
  },
  {
    "id": "part1-6",
    "part": 1,
    "partTitle": "Part 1: Mô tả hình ảnh",
    "questionRange": "Câu 6",
    "title": "Part 1 - Câu 6: Một số đất nằm thành đống trên mặt đất.",
    "audioSrc": "/audio/test2_2023.mp3",
    "startTime": 228.1,
    "endTime": 261.56,
    "imageUrl": "/images/intensive/test2_2023/q6.png",
    "image": "/images/intensive/test2_2023/q6.png",
    "transcript": [
      {
        "id": "p1-6-a",
        "speaker": "Speaker",
        "text": "(A) Cones are blocking access to a road.",
        "vietnamese": "(A) Nón đang chặn lối vào một con đường."
      },
      {
        "id": "p1-6-b",
        "speaker": "Speaker",
        "text": "(B) Some soil is in a pile on the ground.",
        "vietnamese": "(B) Một số đất nằm thành đống trên mặt đất."
      },
      {
        "id": "p1-6-c",
        "speaker": "Speaker",
        "text": "(C) Some bushes have been planted in front of a building.",
        "vietnamese": "(C) Một số bụi cây đã được trồng trước một tòa nhà."
      },
      {
        "id": "p1-6-d",
        "speaker": "Speaker",
        "text": "(D) A tree is lying in the roadway.",
        "vietnamese": "(D) Một cái cây nằm trên đường."
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
            "text": "Cones are blocking access to a road.",
            "vietnamese": "Nón đang chặn lối vào một con đường."
          },
          {
            "key": "B",
            "text": "Some soil is in a pile on the ground.",
            "vietnamese": "Một số đất nằm thành đống trên mặt đất."
          },
          {
            "key": "C",
            "text": "Some bushes have been planted in front of a building.",
            "vietnamese": "Một số bụi cây đã được trồng trước một tòa nhà."
          },
          {
            "key": "D",
            "text": "A tree is lying in the roadway.",
            "vietnamese": "Một cái cây nằm trên đường."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"Some soil is in a pile on the ground.\" (Một số đất nằm thành đống trên mặt đất.) mô tả chính xác hoạt động và cảnh vật trong hình."
      }
    ],
    "vocabulary": [
      {
        "word": "access",
        "meaning": "sự truy cập, lối vào",
        "partOfSpeech": "n"
      },
      {
        "word": "soil",
        "meaning": "đất trồng cây",
        "partOfSpeech": "n"
      },
      {
        "word": "pile",
        "meaning": "xếp thành đống, chất đống",
        "partOfSpeech": "v/n"
      }
    ]
  },
  {
    "id": "part2-7",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 7",
    "title": "Part 2 - Câu 7: Ai chịu trách nhiệm tuyển dụng tại trung tâm thể hình của...",
    "audioSrc": "/audio/test2_2023.mp3",
    "startTime": 288.91,
    "endTime": 316.01,
    "transcript": [
      {
        "id": "p2-7-q",
        "speaker": "Speaker 1",
        "text": "Who's responsible for hiring at our fitness center?",
        "vietnamese": "Ai chịu trách nhiệm tuyển dụng tại trung tâm thể hình của chúng tôi?"
      },
      {
        "id": "p2-7-a",
        "speaker": "Speaker 2",
        "text": "(A) Mr. Gonzalez is going to get a membership?",
        "vietnamese": "(A) Ông Gonzalez sắp trở thành thành viên à?"
      },
      {
        "id": "p2-7-b",
        "speaker": "Speaker 2",
        "text": "(B) I forgot to sign in at reception.",
        "vietnamese": "(B) Tôi quên đăng nhập tại quầy lễ tân."
      },
      {
        "id": "p2-7-c",
        "speaker": "Speaker 2",
        "text": "(C) Mr. Lynn and Ms. Weisar.",
        "vietnamese": "(C) Ông Lynn và bà Weisar."
      }
    ],
    "questions": [
      {
        "num": 7,
        "question": "Who's responsible for hiring at our fitness center?",
        "vietnameseQuestion": "Ai chịu trách nhiệm tuyển dụng tại trung tâm thể hình của chúng tôi?",
        "options": [
          {
            "key": "A",
            "text": "Mr. Gonzalez is going to get a membership?",
            "vietnamese": "Ông Gonzalez sắp trở thành thành viên à?"
          },
          {
            "key": "B",
            "text": "I forgot to sign in at reception.",
            "vietnamese": "Tôi quên đăng nhập tại quầy lễ tân."
          },
          {
            "key": "C",
            "text": "Mr. Lynn and Ms. Weisar.",
            "vietnamese": "Ông Lynn và bà Weisar."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"Mr. Lynn and Ms. Weisar.\" (Ông Lynn và bà Weisar.) là câu phản hồi hợp lý nhất cho câu \"Who's responsible for hiring at our fitness center?\"."
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
    "id": "part2-8",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 8",
    "title": "Part 2 - Câu 8: Bạn thường mua văn phòng phẩm ở đâu?",
    "audioSrc": "/audio/test2_2023.mp3",
    "startTime": 316.01,
    "endTime": 331.33,
    "transcript": [
      {
        "id": "p2-8-q",
        "speaker": "Speaker 1",
        "text": "Where do you usually purchase office supplies?",
        "vietnamese": "Bạn thường mua văn phòng phẩm ở đâu?"
      },
      {
        "id": "p2-8-a",
        "speaker": "Speaker 2",
        "text": "(A) We put them in the hallway cabinets.",
        "vietnamese": "(A) Chúng tôi đặt chúng trong tủ hành lang."
      },
      {
        "id": "p2-8-b",
        "speaker": "Speaker 2",
        "text": "(B) At the store on Maple Avenue.",
        "vietnamese": "(B) Tại cửa hàng trên đại lộ Maple."
      },
      {
        "id": "p2-8-c",
        "speaker": "Speaker 2",
        "text": "(C) A manager's approval.",
        "vietnamese": "(C) Sự chấp thuận của người quản lý."
      }
    ],
    "questions": [
      {
        "num": 8,
        "question": "Where do you usually purchase office supplies?",
        "vietnameseQuestion": "Bạn thường mua văn phòng phẩm ở đâu?",
        "options": [
          {
            "key": "A",
            "text": "We put them in the hallway cabinets.",
            "vietnamese": "Chúng tôi đặt chúng trong tủ hành lang."
          },
          {
            "key": "B",
            "text": "At the store on Maple Avenue.",
            "vietnamese": "Tại cửa hàng trên đại lộ Maple."
          },
          {
            "key": "C",
            "text": "A manager's approval.",
            "vietnamese": "Sự chấp thuận của người quản lý."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"At the store on Maple Avenue.\" (Tại cửa hàng trên đại lộ Maple.) là câu phản hồi hợp lý nhất cho câu \"Where do you usually purchase office supplies?\"."
      }
    ],
    "vocabulary": [
      {
        "word": "usually",
        "meaning": "thường xuyên, thông thường",
        "partOfSpeech": "adv"
      },
      {
        "word": "purchase",
        "meaning": "mua, thanh toán hàng hóa",
        "partOfSpeech": "v"
      },
      {
        "word": "supplies",
        "meaning": "đồ dùng, vật tư văn phòng",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-9",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 9",
    "title": "Part 2 - Câu 9: Ông Park thường rời đi lúc mấy giờ?",
    "audioSrc": "/audio/test2_2023.mp3",
    "startTime": 331.33,
    "endTime": 356.1,
    "transcript": [
      {
        "id": "p2-9-q",
        "speaker": "Speaker 1",
        "text": "What time does Mr. Park usually leave?",
        "vietnamese": "Ông Park thường rời đi lúc mấy giờ?"
      },
      {
        "id": "p2-9-a",
        "speaker": "Speaker 2",
        "text": "(A) Around six o'clock in the evening.",
        "vietnamese": "(A) Khoảng sáu giờ tối."
      },
      {
        "id": "p2-9-b",
        "speaker": "Speaker 2",
        "text": "(B) He left everything we need.",
        "vietnamese": "(B) Anh ấy đã để lại mọi thứ chúng tôi cần."
      },
      {
        "id": "p2-9-c",
        "speaker": "Speaker 2",
        "text": "(C) We've had many interns over the years.",
        "vietnamese": "(C) Chúng tôi đã có nhiều thực tập sinh trong nhiều năm."
      }
    ],
    "questions": [
      {
        "num": 9,
        "question": "What time does Mr. Park usually leave?",
        "vietnameseQuestion": "Ông Park thường rời đi lúc mấy giờ?",
        "options": [
          {
            "key": "A",
            "text": "Around six o'clock in the evening.",
            "vietnamese": "Khoảng sáu giờ tối."
          },
          {
            "key": "B",
            "text": "He left everything we need.",
            "vietnamese": "Anh ấy đã để lại mọi thứ chúng tôi cần."
          },
          {
            "key": "C",
            "text": "We've had many interns over the years.",
            "vietnamese": "Chúng tôi đã có nhiều thực tập sinh trong nhiều năm."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là (A): \"Around six o'clock in the evening.\" (Khoảng sáu giờ tối.) là câu phản hồi hợp lý nhất cho câu \"What time does Mr. Park usually leave?\"."
      }
    ],
    "vocabulary": [
      {
        "word": "park",
        "meaning": "đỗ xe, đậu xe",
        "partOfSpeech": "v"
      },
      {
        "word": "usually",
        "meaning": "thường xuyên, thông thường",
        "partOfSpeech": "adv"
      },
      {
        "word": "leave",
        "meaning": "rời đi, nghỉ việc",
        "partOfSpeech": "v"
      }
    ]
  },
  {
    "id": "part2-10",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 10",
    "title": "Part 2 - Câu 10: Bạn có muốn trình bày nghiên cứu của mình cho nhóm tiếp t...",
    "audioSrc": "/audio/test2_2023.mp3",
    "startTime": 356.1,
    "endTime": 371.82,
    "transcript": [
      {
        "id": "p2-10-q",
        "speaker": "Speaker 1",
        "text": "Do you want to present your research to the marketing team?",
        "vietnamese": "Bạn có muốn trình bày nghiên cứu của mình cho nhóm tiếp thị không?"
      },
      {
        "id": "p2-10-a",
        "speaker": "Speaker 2",
        "text": "(A) That's what I've heard as well.",
        "vietnamese": "(A) Đó cũng là những gì tôi đã nghe."
      },
      {
        "id": "p2-10-b",
        "speaker": "Speaker 2",
        "text": "(B) If we can find the time for it.",
        "vietnamese": "(B) Nếu chúng ta có thể tìm thấy thời gian cho nó."
      },
      {
        "id": "p2-10-c",
        "speaker": "Speaker 2",
        "text": "(C) Yes. I received the gift.",
        "vietnamese": "(C) Đúng. Tôi đã nhận được món quà."
      }
    ],
    "questions": [
      {
        "num": 10,
        "question": "Do you want to present your research to the marketing team?",
        "vietnameseQuestion": "Bạn có muốn trình bày nghiên cứu của mình cho nhóm tiếp thị không?",
        "options": [
          {
            "key": "A",
            "text": "That's what I've heard as well.",
            "vietnamese": "Đó cũng là những gì tôi đã nghe."
          },
          {
            "key": "B",
            "text": "If we can find the time for it.",
            "vietnamese": "Nếu chúng ta có thể tìm thấy thời gian cho nó."
          },
          {
            "key": "C",
            "text": "Yes. I received the gift.",
            "vietnamese": "Đúng. Tôi đã nhận được món quà."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"If we can find the time for it.\" (Nếu chúng ta có thể tìm thấy thời gian cho nó.) là câu phản hồi hợp lý nhất cho câu \"Do you want to present your research to the marketing team?\"."
      }
    ],
    "vocabulary": [
      {
        "word": "gift",
        "meaning": "món quà",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-11",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 11",
    "title": "Part 2 - Câu 11: Buổi dã ngoại của công ty chúng ta diễn ra vào thứ sáu ph...",
    "audioSrc": "/audio/test2_2023.mp3",
    "startTime": 371.82,
    "endTime": 391.83,
    "transcript": [
      {
        "id": "p2-11-q",
        "speaker": "Speaker 1",
        "text": "Our company picnic is on Friday, isn't it?",
        "vietnamese": "Buổi dã ngoại của công ty chúng ta diễn ra vào thứ sáu phải không?"
      },
      {
        "id": "p2-11-a",
        "speaker": "Speaker 2",
        "text": "(A) Those times are both booked.",
        "vietnamese": "(A) Những thời điểm đó đều được đặt trước."
      },
      {
        "id": "p2-11-b",
        "speaker": "Speaker 2",
        "text": "(B) Only if you can find them easily.",
        "vietnamese": "(B) Chỉ khi bạn có thể tìm thấy chúng một cách dễ dàng."
      },
      {
        "id": "p2-11-c",
        "speaker": "Speaker 2",
        "text": "(C) Right in two days.",
        "vietnamese": "(C) Đúng trong hai ngày nữa."
      }
    ],
    "questions": [
      {
        "num": 11,
        "question": "Our company picnic is on Friday, isn't it?",
        "vietnameseQuestion": "Buổi dã ngoại của công ty chúng ta diễn ra vào thứ sáu phải không?",
        "options": [
          {
            "key": "A",
            "text": "Those times are both booked.",
            "vietnamese": "Những thời điểm đó đều được đặt trước."
          },
          {
            "key": "B",
            "text": "Only if you can find them easily.",
            "vietnamese": "Chỉ khi bạn có thể tìm thấy chúng một cách dễ dàng."
          },
          {
            "key": "C",
            "text": "Right in two days.",
            "vietnamese": "Đúng trong hai ngày nữa."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"Right in two days.\" (Đúng trong hai ngày nữa.) là câu phản hồi hợp lý nhất cho câu \"Our company picnic is on Friday, isn't it?\"."
      }
    ],
    "vocabulary": [
      {
        "word": "picnic",
        "meaning": "chuyến dã ngoại",
        "partOfSpeech": "n"
      },
      {
        "word": "both",
        "meaning": "cả hai",
        "partOfSpeech": "pron"
      }
    ]
  },
  {
    "id": "part2-12",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 12",
    "title": "Part 2 - Câu 12: Xe buýt không phải dừng ở đây sao?",
    "audioSrc": "/audio/test2_2023.mp3",
    "startTime": 391.83,
    "endTime": 411.25,
    "transcript": [
      {
        "id": "p2-12-q",
        "speaker": "Speaker 1",
        "text": "Isn't the bus supposed to stop here?",
        "vietnamese": "Xe buýt không phải dừng ở đây sao?"
      },
      {
        "id": "p2-12-a",
        "speaker": "Speaker 2",
        "text": "(A) Yes, according to the schedule.",
        "vietnamese": "(A) Vâng, theo lịch trình."
      },
      {
        "id": "p2-12-b",
        "speaker": "Speaker 2",
        "text": "(B) I'm on my way now.",
        "vietnamese": "(B) Bây giờ tôi đang trên đường đi."
      },
      {
        "id": "p2-12-c",
        "speaker": "Speaker 2",
        "text": "(C) It listed several potential clients.",
        "vietnamese": "(C) Nó liệt kê một số khách hàng tiềm năng."
      }
    ],
    "questions": [
      {
        "num": 12,
        "question": "Isn't the bus supposed to stop here?",
        "vietnameseQuestion": "Xe buýt không phải dừng ở đây sao?",
        "options": [
          {
            "key": "A",
            "text": "Yes, according to the schedule.",
            "vietnamese": "Vâng, theo lịch trình."
          },
          {
            "key": "B",
            "text": "I'm on my way now.",
            "vietnamese": "Bây giờ tôi đang trên đường đi."
          },
          {
            "key": "C",
            "text": "It listed several potential clients.",
            "vietnamese": "Nó liệt kê một số khách hàng tiềm năng."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là (A): \"Yes, according to the schedule.\" (Vâng, theo lịch trình.) là câu phản hồi hợp lý nhất cho câu \"Isn't the bus supposed to stop here?\"."
      }
    ],
    "vocabulary": [
      {
        "word": "schedule",
        "meaning": "lên lịch, sắp xếp thời gian",
        "partOfSpeech": "v"
      }
    ]
  },
  {
    "id": "part2-13",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 13",
    "title": "Part 2 - Câu 13: Chúng ta nên điền đơn hàng này một cách nhanh chóng, phải...",
    "audioSrc": "/audio/test2_2023.mp3",
    "startTime": 411.25,
    "endTime": 431.66,
    "transcript": [
      {
        "id": "p2-13-q",
        "speaker": "Speaker 1",
        "text": "We should fill this order quickly, shouldn't we?",
        "vietnamese": "Chúng ta nên điền đơn hàng này một cách nhanh chóng, phải không?"
      },
      {
        "id": "p2-13-a",
        "speaker": "Speaker 2",
        "text": "(A) No, I haven't yet.",
        "vietnamese": "(A) Không, tôi chưa có."
      },
      {
        "id": "p2-13-b",
        "speaker": "Speaker 2",
        "text": "(B) Yes. It's for an important client.",
        "vietnamese": "(B) Đúng. Nó dành cho một khách hàng quan trọng."
      },
      {
        "id": "p2-13-c",
        "speaker": "Speaker 2",
        "text": "(C) Try using this key.",
        "vietnamese": "(C) Hãy thử sử dụng phím này."
      }
    ],
    "questions": [
      {
        "num": 13,
        "question": "We should fill this order quickly, shouldn't we?",
        "vietnameseQuestion": "Chúng ta nên điền đơn hàng này một cách nhanh chóng, phải không?",
        "options": [
          {
            "key": "A",
            "text": "No, I haven't yet.",
            "vietnamese": "Không, tôi chưa có."
          },
          {
            "key": "B",
            "text": "Yes. It's for an important client.",
            "vietnamese": "Đúng. Nó dành cho một khách hàng quan trọng."
          },
          {
            "key": "C",
            "text": "Try using this key.",
            "vietnamese": "Hãy thử sử dụng phím này."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"Yes. It's for an important client.\" (Đúng. Nó dành cho một khách hàng quan trọng.) là câu phản hồi hợp lý nhất cho câu \"We should fill this order quickly, shouldn't we?\"."
      }
    ],
    "vocabulary": [
      {
        "word": "order",
        "meaning": "gọi món, đặt hàng",
        "partOfSpeech": "v"
      },
      {
        "word": "client",
        "meaning": "khách hàng",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-14",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 14",
    "title": "Part 2 - Câu 14: Bạn thích công việc mới của mình như thế nào?",
    "audioSrc": "/audio/test2_2023.mp3",
    "startTime": 431.66,
    "endTime": 451.3,
    "transcript": [
      {
        "id": "p2-14-q",
        "speaker": "Speaker 1",
        "text": "How do you like your new job?",
        "vietnamese": "Bạn thích công việc mới của mình như thế nào?"
      },
      {
        "id": "p2-14-a",
        "speaker": "Speaker 2",
        "text": "(A) I can work from home quite often.",
        "vietnamese": "(A) Tôi có thể làm việc ở nhà khá thường xuyên."
      },
      {
        "id": "p2-14-b",
        "speaker": "Speaker 2",
        "text": "(B) A career in electrical engineering.",
        "vietnamese": "(B) Một nghề nghiệp trong kỹ thuật điện."
      },
      {
        "id": "p2-14-c",
        "speaker": "Speaker 2",
        "text": "(C) My sister helped me apply.",
        "vietnamese": "(C) Chị tôi đã giúp tôi nộp đơn."
      }
    ],
    "questions": [
      {
        "num": 14,
        "question": "How do you like your new job?",
        "vietnameseQuestion": "Bạn thích công việc mới của mình như thế nào?",
        "options": [
          {
            "key": "A",
            "text": "I can work from home quite often.",
            "vietnamese": "Tôi có thể làm việc ở nhà khá thường xuyên."
          },
          {
            "key": "B",
            "text": "A career in electrical engineering.",
            "vietnamese": "Một nghề nghiệp trong kỹ thuật điện."
          },
          {
            "key": "C",
            "text": "My sister helped me apply.",
            "vietnamese": "Chị tôi đã giúp tôi nộp đơn."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là (A): \"I can work from home quite often.\" (Tôi có thể làm việc ở nhà khá thường xuyên.) là câu phản hồi hợp lý nhất cho câu \"How do you like your new job?\"."
      }
    ],
    "vocabulary": [
      {
        "word": "like",
        "meaning": "giống",
        "partOfSpeech": "n/v"
      },
      {
        "word": "work",
        "meaning": "công việc",
        "partOfSpeech": "n/v"
      }
    ]
  },
  {
    "id": "part2-15",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 15",
    "title": "Part 2 - Câu 15: Hôm nay chúng ta xuống căng tin ăn trưa nhé.",
    "audioSrc": "/audio/test2_2023.mp3",
    "startTime": 451.3,
    "endTime": 472.54,
    "transcript": [
      {
        "id": "p2-15-q",
        "speaker": "Speaker 1",
        "text": "Let's go to the cafeteria for lunch today.",
        "vietnamese": "Hôm nay chúng ta xuống căng tin ăn trưa nhé."
      },
      {
        "id": "p2-15-a",
        "speaker": "Speaker 2",
        "text": "(A) There should be one in the filing cabinet.",
        "vietnamese": "(A) Nên có một cái trong tủ hồ sơ."
      },
      {
        "id": "p2-15-b",
        "speaker": "Speaker 2",
        "text": "(B) Which local restaurant do you prefer?",
        "vietnamese": "(B) Bạn thích nhà hàng địa phương nào hơn?"
      },
      {
        "id": "p2-15-c",
        "speaker": "Speaker 2",
        "text": "(C) I don't think I can take a break.",
        "vietnamese": "(C) Tôi không nghĩ mình có thể nghỉ ngơi."
      }
    ],
    "questions": [
      {
        "num": 15,
        "question": "Let's go to the cafeteria for lunch today.",
        "vietnameseQuestion": "Hôm nay chúng ta xuống căng tin ăn trưa nhé.",
        "options": [
          {
            "key": "A",
            "text": "There should be one in the filing cabinet.",
            "vietnamese": "Nên có một cái trong tủ hồ sơ."
          },
          {
            "key": "B",
            "text": "Which local restaurant do you prefer?",
            "vietnamese": "Bạn thích nhà hàng địa phương nào hơn?"
          },
          {
            "key": "C",
            "text": "I don't think I can take a break.",
            "vietnamese": "Tôi không nghĩ mình có thể nghỉ ngơi."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"I don't think I can take a break.\" (Tôi không nghĩ mình có thể nghỉ ngơi.) là câu phản hồi hợp lý nhất cho câu \"Let's go to the cafeteria for lunch today.\"."
      }
    ],
    "vocabulary": [
      {
        "word": "cafeteria",
        "meaning": "quán ăn tự phục vụ, căng tin",
        "partOfSpeech": "n"
      },
      {
        "word": "cabinet",
        "meaning": "tủ có ngăn kéo/ngăn chứa đồ",
        "partOfSpeech": "n"
      },
      {
        "word": "local",
        "meaning": "thuộc địa phương",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-16",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 16",
    "title": "Part 2 - Câu 16: Khi nào chúng ta sẽ thuê thực tập sinh mới?",
    "audioSrc": "/audio/test2_2023.mp3",
    "startTime": 472.54,
    "endTime": 492.78,
    "transcript": [
      {
        "id": "p2-16-q",
        "speaker": "Speaker 1",
        "text": "When will we hire the new interns?",
        "vietnamese": "Khi nào chúng ta sẽ thuê thực tập sinh mới?"
      },
      {
        "id": "p2-16-a",
        "speaker": "Speaker 2",
        "text": "(A) Mr. YF is handling that.",
        "vietnamese": "(A) Ông YF đang xử lý việc đó."
      },
      {
        "id": "p2-16-b",
        "speaker": "Speaker 2",
        "text": "(B) With more time to spare than usual.",
        "vietnamese": "(B) Với nhiều thời gian rảnh rỗi hơn bình thường."
      },
      {
        "id": "p2-16-c",
        "speaker": "Speaker 2",
        "text": "(C) The highest available salary.",
        "vietnamese": "(C) Mức lương cao nhất hiện có."
      }
    ],
    "questions": [
      {
        "num": 16,
        "question": "When will we hire the new interns?",
        "vietnameseQuestion": "Khi nào chúng ta sẽ thuê thực tập sinh mới?",
        "options": [
          {
            "key": "A",
            "text": "Mr. YF is handling that.",
            "vietnamese": "Ông YF đang xử lý việc đó."
          },
          {
            "key": "B",
            "text": "With more time to spare than usual.",
            "vietnamese": "Với nhiều thời gian rảnh rỗi hơn bình thường."
          },
          {
            "key": "C",
            "text": "The highest available salary.",
            "vietnamese": "Mức lương cao nhất hiện có."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là (A): \"Mr. YF is handling that.\" (Ông YF đang xử lý việc đó.) là câu phản hồi hợp lý nhất cho câu \"When will we hire the new interns?\"."
      }
    ],
    "vocabulary": [
      {
        "word": "hire",
        "meaning": "tuyển dụng, thuê",
        "partOfSpeech": "v"
      },
      {
        "word": "available",
        "meaning": "rảnh rỗi, có sẵn",
        "partOfSpeech": "adj"
      }
    ]
  },
  {
    "id": "part2-17",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 17",
    "title": "Part 2 - Câu 17: Tôi nên gửi những tuyên bố này qua thư bao lâu một lần?",
    "audioSrc": "/audio/test2_2023.mp3",
    "startTime": 492.78,
    "endTime": 513.29,
    "transcript": [
      {
        "id": "p2-17-q",
        "speaker": "Speaker 1",
        "text": "How often should I mail these statements?",
        "vietnamese": "Tôi nên gửi những tuyên bố này qua thư bao lâu một lần?"
      },
      {
        "id": "p2-17-a",
        "speaker": "Speaker 2",
        "text": "(A) Yes, you can buy one online.",
        "vietnamese": "(A) Có, bạn có thể mua một cái trực tuyến."
      },
      {
        "id": "p2-17-b",
        "speaker": "Speaker 2",
        "text": "(B) The post office on Grant Street.",
        "vietnamese": "(B) Bưu điện trên đường Grant."
      },
      {
        "id": "p2-17-c",
        "speaker": "Speaker 2",
        "text": "(C) We send them out once a month.",
        "vietnamese": "(C) Chúng tôi gửi chúng đi mỗi tháng một lần."
      }
    ],
    "questions": [
      {
        "num": 17,
        "question": "How often should I mail these statements?",
        "vietnameseQuestion": "Tôi nên gửi những tuyên bố này qua thư bao lâu một lần?",
        "options": [
          {
            "key": "A",
            "text": "Yes, you can buy one online.",
            "vietnamese": "Có, bạn có thể mua một cái trực tuyến."
          },
          {
            "key": "B",
            "text": "The post office on Grant Street.",
            "vietnamese": "Bưu điện trên đường Grant."
          },
          {
            "key": "C",
            "text": "We send them out once a month.",
            "vietnamese": "Chúng tôi gửi chúng đi mỗi tháng một lần."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"We send them out once a month.\" (Chúng tôi gửi chúng đi mỗi tháng một lần.) là câu phản hồi hợp lý nhất cho câu \"How often should I mail these statements?\"."
      }
    ],
    "vocabulary": [
      {
        "word": "post",
        "meaning": "đăng tải",
        "partOfSpeech": "v"
      },
      {
        "word": "grant",
        "meaning": "khoản tài trợ, tiền trợ cấp",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-18",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 18",
    "title": "Part 2 - Câu 18: Tại sao bạn lại để thức ăn đó vào tủ đông?",
    "audioSrc": "/audio/test2_2023.mp3",
    "startTime": 513.29,
    "endTime": 538.06,
    "transcript": [
      {
        "id": "p2-18-q",
        "speaker": "Speaker 1",
        "text": "Why did you put that food in the freezer?",
        "vietnamese": "Tại sao bạn lại để thức ăn đó vào tủ đông?"
      },
      {
        "id": "p2-18-a",
        "speaker": "Speaker 2",
        "text": "(A) It's not working well currently.",
        "vietnamese": "(A) Hiện tại nó không hoạt động tốt."
      },
      {
        "id": "p2-18-b",
        "speaker": "Speaker 2",
        "text": "(B) I meant to put it in the refrigerator.",
        "vietnamese": "(B) Ý tôi là để nó vào tủ lạnh."
      },
      {
        "id": "p2-18-c",
        "speaker": "Speaker 2",
        "text": "(C) Let's start making dinner soon.",
        "vietnamese": "(C) Hãy bắt đầu nấu bữa tối sớm thôi."
      }
    ],
    "questions": [
      {
        "num": 18,
        "question": "Why did you put that food in the freezer?",
        "vietnameseQuestion": "Tại sao bạn lại để thức ăn đó vào tủ đông?",
        "options": [
          {
            "key": "A",
            "text": "It's not working well currently.",
            "vietnamese": "Hiện tại nó không hoạt động tốt."
          },
          {
            "key": "B",
            "text": "I meant to put it in the refrigerator.",
            "vietnamese": "Ý tôi là để nó vào tủ lạnh."
          },
          {
            "key": "C",
            "text": "Let's start making dinner soon.",
            "vietnamese": "Hãy bắt đầu nấu bữa tối sớm thôi."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"I meant to put it in the refrigerator.\" (Ý tôi là để nó vào tủ lạnh.) là câu phản hồi hợp lý nhất cho câu \"Why did you put that food in the freezer?\"."
      }
    ],
    "vocabulary": [
      {
        "word": "refrigerator",
        "meaning": "tủ lạnh",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-19",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 19",
    "title": "Part 2 - Câu 19: Bạn có thể in chương trình nghị sự của cuộc họp được không?",
    "audioSrc": "/audio/test2_2023.mp3",
    "startTime": 538.06,
    "endTime": 552.28,
    "transcript": [
      {
        "id": "p2-19-q",
        "speaker": "Speaker 1",
        "text": "Could you print the agenda for the meeting?",
        "vietnamese": "Bạn có thể in chương trình nghị sự của cuộc họp được không?"
      },
      {
        "id": "p2-19-a",
        "speaker": "Speaker 2",
        "text": "(A) It's already on your desk.",
        "vietnamese": "(A) Nó đã ở trên bàn của bạn rồi."
      },
      {
        "id": "p2-19-b",
        "speaker": "Speaker 2",
        "text": "(B) No, the other printer.",
        "vietnamese": "(B) Không, máy in khác."
      },
      {
        "id": "p2-19-c",
        "speaker": "Speaker 2",
        "text": "(C) Was that a client?",
        "vietnamese": "(C) Đó có phải là một khách hàng không?"
      }
    ],
    "questions": [
      {
        "num": 19,
        "question": "Could you print the agenda for the meeting?",
        "vietnameseQuestion": "Bạn có thể in chương trình nghị sự của cuộc họp được không?",
        "options": [
          {
            "key": "A",
            "text": "It's already on your desk.",
            "vietnamese": "Nó đã ở trên bàn của bạn rồi."
          },
          {
            "key": "B",
            "text": "No, the other printer.",
            "vietnamese": "Không, máy in khác."
          },
          {
            "key": "C",
            "text": "Was that a client?",
            "vietnamese": "Đó có phải là một khách hàng không?"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là (A): \"It's already on your desk.\" (Nó đã ở trên bàn của bạn rồi.) là câu phản hồi hợp lý nhất cho câu \"Could you print the agenda for the meeting?\"."
      }
    ],
    "vocabulary": [
      {
        "word": "agenda",
        "meaning": "chương trình nghị sự, nội dung họp",
        "partOfSpeech": "n"
      },
      {
        "word": "already",
        "meaning": "đã... rồi",
        "partOfSpeech": "adv"
      },
      {
        "word": "client",
        "meaning": "khách hàng",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-20",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 20",
    "title": "Part 2 - Câu 20: Bạn ở cách phòng khám bao xa?",
    "audioSrc": "/audio/test2_2023.mp3",
    "startTime": 552.28,
    "endTime": 575.11,
    "transcript": [
      {
        "id": "p2-20-q",
        "speaker": "Speaker 1",
        "text": "How far are you from the clinic?",
        "vietnamese": "Bạn ở cách phòng khám bao xa?"
      },
      {
        "id": "p2-20-a",
        "speaker": "Speaker 2",
        "text": "(A) I'm close enough to walk.",
        "vietnamese": "(A) Tôi đủ gần để đi bộ."
      },
      {
        "id": "p2-20-b",
        "speaker": "Speaker 2",
        "text": "(B) I need to see the doctor.",
        "vietnamese": "(B) Tôi cần gặp bác sĩ."
      },
      {
        "id": "p2-20-c",
        "speaker": "Speaker 2",
        "text": "(C) It's a well known clinic.",
        "vietnamese": "(C) Đó là một phòng khám nổi tiếng."
      }
    ],
    "questions": [
      {
        "num": 20,
        "question": "How far are you from the clinic?",
        "vietnameseQuestion": "Bạn ở cách phòng khám bao xa?",
        "options": [
          {
            "key": "A",
            "text": "I'm close enough to walk.",
            "vietnamese": "Tôi đủ gần để đi bộ."
          },
          {
            "key": "B",
            "text": "I need to see the doctor.",
            "vietnamese": "Tôi cần gặp bác sĩ."
          },
          {
            "key": "C",
            "text": "It's a well known clinic.",
            "vietnamese": "Đó là một phòng khám nổi tiếng."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là (A): \"I'm close enough to walk.\" (Tôi đủ gần để đi bộ.) là câu phản hồi hợp lý nhất cho câu \"How far are you from the clinic?\"."
      }
    ],
    "vocabulary": [
      {
        "word": "enough",
        "meaning": "đủ",
        "partOfSpeech": "adj"
      }
    ]
  },
  {
    "id": "part2-21",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 21",
    "title": "Part 2 - Câu 21: Bạn không nhận được bản in bản tin công ty từ Emiko phải ...",
    "audioSrc": "/audio/test2_2023.mp3",
    "startTime": 575.11,
    "endTime": 596.75,
    "transcript": [
      {
        "id": "p2-21-q",
        "speaker": "Speaker 1",
        "text": "Didn't you get a printout of the company newsletter from Emiko?",
        "vietnamese": "Bạn không nhận được bản in bản tin công ty từ Emiko phải không?"
      },
      {
        "id": "p2-21-a",
        "speaker": "Speaker 2",
        "text": "(A) She started working here three years ago.",
        "vietnamese": "(A) Cô ấy bắt đầu làm việc ở đây ba năm trước."
      },
      {
        "id": "p2-21-b",
        "speaker": "Speaker 2",
        "text": "(B) I was out of town last week.",
        "vietnamese": "(B) Tôi đã rời khỏi thị trấn vào tuần trước."
      },
      {
        "id": "p2-21-c",
        "speaker": "Speaker 2",
        "text": "(C) Yes, I do like to write.",
        "vietnamese": "(C) Có, tôi thích viết."
      }
    ],
    "questions": [
      {
        "num": 21,
        "question": "Didn't you get a printout of the company newsletter from Emiko?",
        "vietnameseQuestion": "Bạn không nhận được bản in bản tin công ty từ Emiko phải không?",
        "options": [
          {
            "key": "A",
            "text": "She started working here three years ago.",
            "vietnamese": "Cô ấy bắt đầu làm việc ở đây ba năm trước."
          },
          {
            "key": "B",
            "text": "I was out of town last week.",
            "vietnamese": "Tôi đã rời khỏi thị trấn vào tuần trước."
          },
          {
            "key": "C",
            "text": "Yes, I do like to write.",
            "vietnamese": "Có, tôi thích viết."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"I was out of town last week.\" (Tôi đã rời khỏi thị trấn vào tuần trước.) là câu phản hồi hợp lý nhất cho câu \"Didn't you get a printout of the company newsletter from Emiko?\"."
      }
    ],
    "vocabulary": [
      {
        "word": "newsletter",
        "meaning": "bản tin nội bộ",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-22",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 22",
    "title": "Part 2 - Câu 22: Khi nào bạn cần gia hạn hộ chiếu?",
    "audioSrc": "/audio/test2_2023.mp3",
    "startTime": 596.75,
    "endTime": 612.78,
    "transcript": [
      {
        "id": "p2-22-q",
        "speaker": "Speaker 1",
        "text": "When do you need to renew your passport?",
        "vietnamese": "Khi nào bạn cần gia hạn hộ chiếu?"
      },
      {
        "id": "p2-22-a",
        "speaker": "Speaker 2",
        "text": "(A) Be careful not to lose your tickets.",
        "vietnamese": "(A) Hãy cẩn thận để không bị mất vé."
      },
      {
        "id": "p2-22-b",
        "speaker": "Speaker 2",
        "text": "(B) A brand new type of microchip.",
        "vietnamese": "(B) Một loại vi mạch hoàn toàn mới."
      },
      {
        "id": "p2-22-c",
        "speaker": "Speaker 2",
        "text": "(C) Soon because it's about to expire.",
        "vietnamese": "(C) Sớm thôi vì sắp hết hạn rồi."
      }
    ],
    "questions": [
      {
        "num": 22,
        "question": "When do you need to renew your passport?",
        "vietnameseQuestion": "Khi nào bạn cần gia hạn hộ chiếu?",
        "options": [
          {
            "key": "A",
            "text": "Be careful not to lose your tickets.",
            "vietnamese": "Hãy cẩn thận để không bị mất vé."
          },
          {
            "key": "B",
            "text": "A brand new type of microchip.",
            "vietnamese": "Một loại vi mạch hoàn toàn mới."
          },
          {
            "key": "C",
            "text": "Soon because it's about to expire.",
            "vietnamese": "Sớm thôi vì sắp hết hạn rồi."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"Soon because it's about to expire.\" (Sớm thôi vì sắp hết hạn rồi.) là câu phản hồi hợp lý nhất cho câu \"When do you need to renew your passport?\"."
      }
    ],
    "vocabulary": [
      {
        "word": "renew",
        "meaning": "gia hạn, làm mới lại",
        "partOfSpeech": "v"
      },
      {
        "word": "passport",
        "meaning": "hộ chiếu",
        "partOfSpeech": "n"
      },
      {
        "word": "expire",
        "meaning": "hết hạn",
        "partOfSpeech": "v"
      }
    ]
  },
  {
    "id": "part2-23",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 23",
    "title": "Part 2 - Câu 23: Ai có thể giúp tôi tìm linh kiện thay thế cho máy tính củ...",
    "audioSrc": "/audio/test2_2023.mp3",
    "startTime": 612.78,
    "endTime": 633.33,
    "transcript": [
      {
        "id": "p2-23-q",
        "speaker": "Speaker 1",
        "text": "Who can help me find replacement parts for my computer?",
        "vietnamese": "Ai có thể giúp tôi tìm linh kiện thay thế cho máy tính của tôi?"
      },
      {
        "id": "p2-23-a",
        "speaker": "Speaker 2",
        "text": "(A) Here are all the latest statements.",
        "vietnamese": "(A) Dưới đây là tất cả các tuyên bố mới nhất."
      },
      {
        "id": "p2-23-b",
        "speaker": "Speaker 2",
        "text": "(B) I can help you look through the inventory.",
        "vietnamese": "(B) Tôi có thể giúp bạn xem qua hàng tồn kho."
      },
      {
        "id": "p2-23-c",
        "speaker": "Speaker 2",
        "text": "(C) Put these on that shelf.",
        "vietnamese": "(C) Đặt những thứ này lên kệ đó."
      }
    ],
    "questions": [
      {
        "num": 23,
        "question": "Who can help me find replacement parts for my computer?",
        "vietnameseQuestion": "Ai có thể giúp tôi tìm linh kiện thay thế cho máy tính của tôi?",
        "options": [
          {
            "key": "A",
            "text": "Here are all the latest statements.",
            "vietnamese": "Dưới đây là tất cả các tuyên bố mới nhất."
          },
          {
            "key": "B",
            "text": "I can help you look through the inventory.",
            "vietnamese": "Tôi có thể giúp bạn xem qua hàng tồn kho."
          },
          {
            "key": "C",
            "text": "Put these on that shelf.",
            "vietnamese": "Đặt những thứ này lên kệ đó."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"I can help you look through the inventory.\" (Tôi có thể giúp bạn xem qua hàng tồn kho.) là câu phản hồi hợp lý nhất cho câu \"Who can help me find replacement parts for my computer?\"."
      }
    ],
    "vocabulary": [
      {
        "word": "replacement",
        "meaning": "sự thay thế, đồ vật thay thế",
        "partOfSpeech": "n"
      },
      {
        "word": "inventory",
        "meaning": "hàng tồn kho",
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
    "id": "part2-24",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 24",
    "title": "Part 2 - Câu 24: Tối nay tôi không thể đến dự bữa tối của công ty được.",
    "audioSrc": "/audio/test2_2023.mp3",
    "startTime": 633.33,
    "endTime": 652.84,
    "transcript": [
      {
        "id": "p2-24-q",
        "speaker": "Speaker 1",
        "text": "I can't make it to the company dinner tonight.",
        "vietnamese": "Tối nay tôi không thể đến dự bữa tối của công ty được."
      },
      {
        "id": "p2-24-a",
        "speaker": "Speaker 2",
        "text": "(A) Managers expect everyone to be there.",
        "vietnamese": "(A) Các nhà quản lý mong đợi mọi người đều có mặt ở đó."
      },
      {
        "id": "p2-24-b",
        "speaker": "Speaker 2",
        "text": "(B) A buffet-style restaurant.",
        "vietnamese": "(B) Một nhà hàng kiểu buffet."
      },
      {
        "id": "p2-24-c",
        "speaker": "Speaker 2",
        "text": "(C) A meeting once a week.",
        "vietnamese": "(C) Một cuộc họp mỗi tuần một lần."
      }
    ],
    "questions": [
      {
        "num": 24,
        "question": "I can't make it to the company dinner tonight.",
        "vietnameseQuestion": "Tối nay tôi không thể đến dự bữa tối của công ty được.",
        "options": [
          {
            "key": "A",
            "text": "Managers expect everyone to be there.",
            "vietnamese": "Các nhà quản lý mong đợi mọi người đều có mặt ở đó."
          },
          {
            "key": "B",
            "text": "A buffet-style restaurant.",
            "vietnamese": "Một nhà hàng kiểu buffet."
          },
          {
            "key": "C",
            "text": "A meeting once a week.",
            "vietnamese": "Một cuộc họp mỗi tuần một lần."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là (A): \"Managers expect everyone to be there.\" (Các nhà quản lý mong đợi mọi người đều có mặt ở đó.) là câu phản hồi hợp lý nhất cho câu \"I can't make it to the company dinner tonight.\"."
      }
    ],
    "vocabulary": [
      {
        "word": "buffet",
        "meaning": "tiệc đứng, quầy buffet",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-25",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 25",
    "title": "Part 2 - Câu 25: Bạn có làm việc ở khu vực này không?",
    "audioSrc": "/audio/test2_2023.mp3",
    "startTime": 652.84,
    "endTime": 671.22,
    "transcript": [
      {
        "id": "p2-25-q",
        "speaker": "Speaker 1",
        "text": "Do you work in this neighborhood?",
        "vietnamese": "Bạn có làm việc ở khu vực này không?"
      },
      {
        "id": "p2-25-a",
        "speaker": "Speaker 2",
        "text": "(A) Yes, I'd like to.",
        "vietnamese": "(A) Vâng, tôi muốn."
      },
      {
        "id": "p2-25-b",
        "speaker": "Speaker 2",
        "text": "(B) No. My office isn't there, bye.",
        "vietnamese": "(B) Không, văn phòng của tôi không có ở đó, tạm biệt."
      },
      {
        "id": "p2-25-c",
        "speaker": "Speaker 2",
        "text": "(C) There aren't any of those here.",
        "vietnamese": "(C) Không có bất kỳ cái nào ở đây."
      }
    ],
    "questions": [
      {
        "num": 25,
        "question": "Do you work in this neighborhood?",
        "vietnameseQuestion": "Bạn có làm việc ở khu vực này không?",
        "options": [
          {
            "key": "A",
            "text": "Yes, I'd like to.",
            "vietnamese": "Vâng, tôi muốn."
          },
          {
            "key": "B",
            "text": "No. My office isn't there, bye.",
            "vietnamese": "Không, văn phòng của tôi không có ở đó, tạm biệt."
          },
          {
            "key": "C",
            "text": "There aren't any of those here.",
            "vietnamese": "Không có bất kỳ cái nào ở đây."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"No. My office isn't there, bye.\" (Không, văn phòng của tôi không có ở đó, tạm biệt.) là câu phản hồi hợp lý nhất cho câu \"Do you work in this neighborhood?\"."
      }
    ],
    "vocabulary": [
      {
        "word": "work",
        "meaning": "công việc",
        "partOfSpeech": "n/v"
      },
      {
        "word": "neighborhood",
        "meaning": "hàng xóm",
        "partOfSpeech": "n/v"
      }
    ]
  },
  {
    "id": "part2-26",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 26",
    "title": "Part 2 - Câu 26: Đã đến lúc báo cáo thu nhập hàng quý của chúng ta phải kh...",
    "audioSrc": "/audio/test2_2023.mp3",
    "startTime": 671.22,
    "endTime": 695.54,
    "transcript": [
      {
        "id": "p2-26-q",
        "speaker": "Speaker 1",
        "text": "It's time for our quarterly earnings report, isn't it?",
        "vietnamese": "Đã đến lúc báo cáo thu nhập hàng quý của chúng ta phải không?"
      },
      {
        "id": "p2-26-a",
        "speaker": "Speaker 2",
        "text": "(A) Was there an email reminder about it?",
        "vietnamese": "(A) Có email nhắc nhở về việc đó không?"
      },
      {
        "id": "p2-26-b",
        "speaker": "Speaker 2",
        "text": "(B) To pay for a new advertising campaign.",
        "vietnamese": "(B) Để trả tiền cho một chiến dịch quảng cáo mới."
      },
      {
        "id": "p2-26-c",
        "speaker": "Speaker 2",
        "text": "(C) No, a different pair of earrings.",
        "vietnamese": "(C) Không, một đôi bông tai khác."
      }
    ],
    "questions": [
      {
        "num": 26,
        "question": "It's time for our quarterly earnings report, isn't it?",
        "vietnameseQuestion": "Đã đến lúc báo cáo thu nhập hàng quý của chúng ta phải không?",
        "options": [
          {
            "key": "A",
            "text": "Was there an email reminder about it?",
            "vietnamese": "Có email nhắc nhở về việc đó không?"
          },
          {
            "key": "B",
            "text": "To pay for a new advertising campaign.",
            "vietnamese": "Để trả tiền cho một chiến dịch quảng cáo mới."
          },
          {
            "key": "C",
            "text": "No, a different pair of earrings.",
            "vietnamese": "Không, một đôi bông tai khác."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là (A): \"Was there an email reminder about it?\" (Có email nhắc nhở về việc đó không?) là câu phản hồi hợp lý nhất cho câu \"It's time for our quarterly earnings report, isn't it?\"."
      }
    ],
    "vocabulary": [
      {
        "word": "quarterly",
        "meaning": "hàng quý, mỗi 3 tháng một lần",
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
    "id": "part2-27",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 27",
    "title": "Part 2 - Câu 27: Bạn đã làm gì với danh sách khách mời tôi gửi cho bạn?",
    "audioSrc": "/audio/test2_2023.mp3",
    "startTime": 695.54,
    "endTime": 716.02,
    "transcript": [
      {
        "id": "p2-27-q",
        "speaker": "Speaker 1",
        "text": "What did you do with the guest list that I sent you?",
        "vietnamese": "Bạn đã làm gì với danh sách khách mời tôi gửi cho bạn?"
      },
      {
        "id": "p2-27-a",
        "speaker": "Speaker 2",
        "text": "(A) After everyone received it.",
        "vietnamese": "(A) Sau khi mọi người nhận được."
      },
      {
        "id": "p2-27-b",
        "speaker": "Speaker 2",
        "text": "(B) I passed it along to everyone who needed it.",
        "vietnamese": "(B) Tôi đã chuyển nó cho tất cả những người cần nó."
      },
      {
        "id": "p2-27-c",
        "speaker": "Speaker 2",
        "text": "(C) We're supposed to leave soon.",
        "vietnamese": "(C) Chúng ta phải rời đi sớm thôi."
      }
    ],
    "questions": [
      {
        "num": 27,
        "question": "What did you do with the guest list that I sent you?",
        "vietnameseQuestion": "Bạn đã làm gì với danh sách khách mời tôi gửi cho bạn?",
        "options": [
          {
            "key": "A",
            "text": "After everyone received it.",
            "vietnamese": "Sau khi mọi người nhận được."
          },
          {
            "key": "B",
            "text": "I passed it along to everyone who needed it.",
            "vietnamese": "Tôi đã chuyển nó cho tất cả những người cần nó."
          },
          {
            "key": "C",
            "text": "We're supposed to leave soon.",
            "vietnamese": "Chúng ta phải rời đi sớm thôi."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"I passed it along to everyone who needed it.\" (Tôi đã chuyển nó cho tất cả những người cần nó.) là câu phản hồi hợp lý nhất cho câu \"What did you do with the guest list that I sent you?\"."
      }
    ],
    "vocabulary": [
      {
        "word": "leave",
        "meaning": "rời đi, nghỉ việc",
        "partOfSpeech": "v"
      }
    ]
  },
  {
    "id": "part2-28",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 28",
    "title": "Part 2 - Câu 28: Bạn có thấy thông báo về việc thăng chức của Emily không?",
    "audioSrc": "/audio/test2_2023.mp3",
    "startTime": 716.02,
    "endTime": 736.47,
    "transcript": [
      {
        "id": "p2-28-q",
        "speaker": "Speaker 1",
        "text": "Did you see the announcement about Emily's promotion?",
        "vietnamese": "Bạn có thấy thông báo về việc thăng chức của Emily không?"
      },
      {
        "id": "p2-28-a",
        "speaker": "Speaker 2",
        "text": "(A) All the technologies been upgraded.",
        "vietnamese": "(A) Tất cả các công nghệ đã được nâng cấp."
      },
      {
        "id": "p2-28-b",
        "speaker": "Speaker 2",
        "text": "(B) Perhaps a good career, Councillor.",
        "vietnamese": "(B) Có lẽ là một sự nghiệp tốt đấy, Ủy viên Hội đồng."
      },
      {
        "id": "p2-28-c",
        "speaker": "Speaker 2",
        "text": "(C) I've been busy all morning.",
        "vietnamese": "(C) Tôi bận cả buổi sáng."
      }
    ],
    "questions": [
      {
        "num": 28,
        "question": "Did you see the announcement about Emily's promotion?",
        "vietnameseQuestion": "Bạn có thấy thông báo về việc thăng chức của Emily không?",
        "options": [
          {
            "key": "A",
            "text": "All the technologies been upgraded.",
            "vietnamese": "Tất cả các công nghệ đã được nâng cấp."
          },
          {
            "key": "B",
            "text": "Perhaps a good career, Councillor.",
            "vietnamese": "Có lẽ là một sự nghiệp tốt đấy, Ủy viên Hội đồng."
          },
          {
            "key": "C",
            "text": "I've been busy all morning.",
            "vietnamese": "Tôi bận cả buổi sáng."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"I've been busy all morning.\" (Tôi bận cả buổi sáng.) là câu phản hồi hợp lý nhất cho câu \"Did you see the announcement about Emily's promotion?\"."
      }
    ],
    "vocabulary": [
      {
        "word": "promotion",
        "meaning": "sự thăng tiến, thăng chức",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-29",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 29",
    "title": "Part 2 - Câu 29: Chúng ta hãy cố gắng hết sức để hoàn thành dự án đúng thờ...",
    "audioSrc": "/audio/test2_2023.mp3",
    "startTime": 736.47,
    "endTime": 757.08,
    "transcript": [
      {
        "id": "p2-29-q",
        "speaker": "Speaker 1",
        "text": "Let's try our best to finish the project on time.",
        "vietnamese": "Chúng ta hãy cố gắng hết sức để hoàn thành dự án đúng thời hạn."
      },
      {
        "id": "p2-29-a",
        "speaker": "Speaker 2",
        "text": "(A) All except the first one.",
        "vietnamese": "(A) Tất cả ngoại trừ cái đầu tiên."
      },
      {
        "id": "p2-29-b",
        "speaker": "Speaker 2",
        "text": "(B) We may need a few more days.",
        "vietnamese": "(B) Chúng ta có thể cần thêm vài ngày nữa."
      },
      {
        "id": "p2-29-c",
        "speaker": "Speaker 2",
        "text": "(C) I think of a time it will.",
        "vietnamese": "(C) Tôi nghĩ về một thời điểm nó sẽ."
      }
    ],
    "questions": [
      {
        "num": 29,
        "question": "Let's try our best to finish the project on time.",
        "vietnameseQuestion": "Chúng ta hãy cố gắng hết sức để hoàn thành dự án đúng thời hạn.",
        "options": [
          {
            "key": "A",
            "text": "All except the first one.",
            "vietnamese": "Tất cả ngoại trừ cái đầu tiên."
          },
          {
            "key": "B",
            "text": "We may need a few more days.",
            "vietnamese": "Chúng ta có thể cần thêm vài ngày nữa."
          },
          {
            "key": "C",
            "text": "I think of a time it will.",
            "vietnamese": "Tôi nghĩ về một thời điểm nó sẽ."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"We may need a few more days.\" (Chúng ta có thể cần thêm vài ngày nữa.) là câu phản hồi hợp lý nhất cho câu \"Let's try our best to finish the project on time.\"."
      }
    ],
    "vocabulary": [
      {
        "word": "project",
        "meaning": "dự án",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-30",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 30",
    "title": "Part 2 - Câu 30: Quản lý cửa hàng đâu?",
    "audioSrc": "/audio/test2_2023.mp3",
    "startTime": 757.08,
    "endTime": 775.56,
    "transcript": [
      {
        "id": "p2-30-q",
        "speaker": "Speaker 1",
        "text": "Where's the store manager?",
        "vietnamese": "Quản lý cửa hàng đâu?"
      },
      {
        "id": "p2-30-a",
        "speaker": "Speaker 2",
        "text": "(A) A recent hiring decision.",
        "vietnamese": "(A) Một quyết định tuyển dụng gần đây."
      },
      {
        "id": "p2-30-b",
        "speaker": "Speaker 2",
        "text": "(B) I enjoy shopping at that store.",
        "vietnamese": "(B) Tôi thích mua sắm ở cửa hàng đó."
      },
      {
        "id": "p2-30-c",
        "speaker": "Speaker 2",
        "text": "(C) She went out for lunch.",
        "vietnamese": "(C) Cô ấy ra ngoài ăn trưa."
      }
    ],
    "questions": [
      {
        "num": 30,
        "question": "Where's the store manager?",
        "vietnameseQuestion": "Quản lý cửa hàng đâu?",
        "options": [
          {
            "key": "A",
            "text": "A recent hiring decision.",
            "vietnamese": "Một quyết định tuyển dụng gần đây."
          },
          {
            "key": "B",
            "text": "I enjoy shopping at that store.",
            "vietnamese": "Tôi thích mua sắm ở cửa hàng đó."
          },
          {
            "key": "C",
            "text": "She went out for lunch.",
            "vietnamese": "Cô ấy ra ngoài ăn trưa."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"She went out for lunch.\" (Cô ấy ra ngoài ăn trưa.) là câu phản hồi hợp lý nhất cho câu \"Where's the store manager?\"."
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
    "id": "part2-31",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 31",
    "title": "Part 2 - Câu 31: Phần mềm bạn đang sử dụng không đáng tin cậy lắm.",
    "audioSrc": "/audio/test2_2023.mp3",
    "startTime": 775.56,
    "endTime": 795.14,
    "transcript": [
      {
        "id": "p2-31-q",
        "speaker": "Speaker 1",
        "text": "The software you're using isn't very reliable.",
        "vietnamese": "Phần mềm bạn đang sử dụng không đáng tin cậy lắm."
      },
      {
        "id": "p2-31-a",
        "speaker": "Speaker 2",
        "text": "(A) These chairs aren't very comfortable.",
        "vietnamese": "(A) Những chiếc ghế này không thoải mái lắm."
      },
      {
        "id": "p2-31-b",
        "speaker": "Speaker 2",
        "text": "(B) I've been using it for years with the company.",
        "vietnamese": "(B) Tôi đã sử dụng nó trong nhiều năm với công ty."
      },
      {
        "id": "p2-31-c",
        "speaker": "Speaker 2",
        "text": "(C) I saw that computer at the store.",
        "vietnamese": "(C) Tôi đã nhìn thấy chiếc máy tính đó ở cửa hàng."
      }
    ],
    "questions": [
      {
        "num": 31,
        "question": "The software you're using isn't very reliable.",
        "vietnameseQuestion": "Phần mềm bạn đang sử dụng không đáng tin cậy lắm.",
        "options": [
          {
            "key": "A",
            "text": "These chairs aren't very comfortable.",
            "vietnamese": "Những chiếc ghế này không thoải mái lắm."
          },
          {
            "key": "B",
            "text": "I've been using it for years with the company.",
            "vietnamese": "Tôi đã sử dụng nó trong nhiều năm với công ty."
          },
          {
            "key": "C",
            "text": "I saw that computer at the store.",
            "vietnamese": "Tôi đã nhìn thấy chiếc máy tính đó ở cửa hàng."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"I've been using it for years with the company.\" (Tôi đã sử dụng nó trong nhiều năm với công ty.) là câu phản hồi hợp lý nhất cho câu \"The software you're using isn't very reliable.\"."
      }
    ],
    "vocabulary": [
      {
        "word": "software",
        "meaning": "phần mềm máy tính",
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
    "id": "part3-32-34",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 32 - 34",
    "title": "Part 3 - Câu 32 - 34: Tại sao người đàn ông lại gọi",
    "audioSrc": "/audio/test2_2023.mp3",
    "startTime": 829.49,
    "endTime": 898.38,
    "transcript": [
      {
        "id": "p3-32-1",
        "speaker": "Woman",
        "text": "A. Hello, Forest Grove Photography Services.",
        "vietnamese": "A. Xin chào Dịch vụ Nhiếp ảnh Forest Grove."
      },
      {
        "id": "p3-32-2",
        "speaker": "Man",
        "text": "How can I help you?",
        "vietnamese": "Tôi có thể giúp gì cho bạn?"
      },
      {
        "id": "p3-32-3",
        "speaker": "Woman",
        "text": "A. Hi. I'd like to get a photographer to cover our event.",
        "vietnamese": "A. Xin chào. Tôi muốn thuê một nhiếp ảnh gia để chụp ảnh sự kiện của chúng tôi."
      },
      {
        "id": "p3-32-4",
        "speaker": "Man",
        "text": "A. It's a charity basketball game next Tuesday night.",
        "vietnamese": "A. Đó là trận đấu bóng rổ từ thiện vào tối thứ Ba tới."
      },
      {
        "id": "p3-32-5",
        "speaker": "Woman",
        "text": "A. I was hoping to get Thomas Zukowski.",
        "vietnamese": "A. Tôi đã hy vọng có được Thomas Zukowski."
      },
      {
        "id": "p3-32-6",
        "speaker": "Man",
        "text": "A. He works for you, right?",
        "vietnamese": "A. Anh ấy làm việc cho bạn phải không?"
      },
      {
        "id": "p3-32-7",
        "speaker": "Woman",
        "text": "A. Yes, but unfortunately Thomas doesn't usually work evenings.",
        "vietnamese": "A. Đúng, nhưng tiếc là Thomas thường không làm việc vào buổi tối."
      },
      {
        "id": "p3-32-8",
        "speaker": "Man",
        "text": "A. Oh, too bad.",
        "vietnamese": "A. Ồ, tệ quá."
      },
      {
        "id": "p3-32-9",
        "speaker": "Woman",
        "text": "A. Could you recommend somebody else?",
        "vietnamese": "A. Bạn có thể giới thiệu người khác được không?"
      },
      {
        "id": "p3-32-10",
        "speaker": "Man",
        "text": "A. Before I do that, let me talk to him.",
        "vietnamese": "A. Trước khi tôi làm điều đó, hãy để tôi nói chuyện với anh ấy."
      },
      {
        "id": "p3-32-11",
        "speaker": "Woman",
        "text": "A. He might make an exception.",
        "vietnamese": "A. Anh ấy có thể đưa ra một ngoại lệ."
      },
      {
        "id": "p3-32-12",
        "speaker": "Man",
        "text": "A. Tom does love basketball.",
        "vietnamese": "A. Tom rất thích bóng rổ."
      }
    ],
    "questions": [
      {
        "num": 32,
        "question": "Why is the man calling?",
        "vietnameseQuestion": "Tại sao người đàn ông lại gọi?",
        "options": [
          {
            "key": "A",
            "text": "Torentafacility",
            "vietnamese": "Cơ sở dữ liệu Torrent"
          },
          {
            "key": "B",
            "text": "To hire a photographer",
            "vietnamese": "Thuê một nhiếp ảnh gia"
          },
          {
            "key": "C",
            "text": "To request a price list",
            "vietnamese": "Để yêu cầu một bảng giá"
          },
          {
            "key": "D",
            "text": "To schedule a repair",
            "vietnamese": "Để đặt lịch sửa chữa"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"To hire a photographer\" (Thuê một nhiếp ảnh gia)."
      },
      {
        "num": 33,
        "question": "Whatproblemdoes the womanmention?",
        "vietnameseQuestion": "Người phụ nữ đề cập đến vấn đề gì?",
        "options": [
          {
            "key": "A",
            "text": "Her employee does not have transportation.",
            "vietnamese": "Nhân viên của cô không có phương tiện đi lại."
          },
          {
            "key": "B",
            "text": "Her service does not cover sports events.",
            "vietnamese": "Dịch vụ của cô không bao gồm các sự kiện thể thao."
          },
          {
            "key": "C",
            "text": "The weather will be bad on Tuesday.",
            "vietnamese": "Thời tiết sẽ xấu vào thứ Ba."
          },
          {
            "key": "D",
            "text": "The time the man requested is too late.",
            "vietnamese": "Thời điểm người đàn ông yêu cầu đã quá muộn."
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là (D): \"The time the man requested is too late.\" (Thời điểm người đàn ông yêu cầu đã quá muộn.)."
      },
      {
        "num": 34,
        "question": "What does the woman say she will do?",
        "vietnameseQuestion": "Người phụ nữ nói cô ấy sẽ làm gì?",
        "options": [
          {
            "key": "A",
            "text": "Issue a refund",
            "vietnamese": "Hoàn lại tiền"
          },
          {
            "key": "B",
            "text": "Cancel an order",
            "vietnamese": "Hủy đơn hàng"
          },
          {
            "key": "C",
            "text": "Talk to an employee",
            "vietnamese": "Nói chuyện với một nhân viên"
          },
          {
            "key": "D",
            "text": "E-mail her manager",
            "vietnamese": "Gửi email cho người quản lý của cô ấy"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"Talk to an employee\" (Nói chuyện với một nhân viên)."
      }
    ],
    "vocabulary": [
      {
        "word": "cover",
        "meaning": "đưa tin (báo chí)",
        "partOfSpeech": "v"
      },
      {
        "word": "usually",
        "meaning": "thường xuyên, thông thường",
        "partOfSpeech": "adv"
      },
      {
        "word": "recommend",
        "meaning": "gợi ý, giới thiệu",
        "partOfSpeech": "v"
      }
    ]
  },
  {
    "id": "part3-35-37",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 35 - 37",
    "title": "Part 3 - Câu 35 - 37: Người nói có thể ở đâu nhất",
    "audioSrc": "/audio/test2_2023.mp3",
    "startTime": 898.38,
    "endTime": 972.29,
    "transcript": [
      {
        "id": "p3-35-1",
        "speaker": "Woman",
        "text": "A. Good morning.",
        "vietnamese": "A. Chào buổi sáng."
      },
      {
        "id": "p3-35-2",
        "speaker": "Man",
        "text": "A. It looks like we received a lot of new orders online last night.",
        "vietnamese": "A. Có vẻ như tối qua chúng tôi đã nhận được rất nhiều đơn đặt hàng trực tuyến mới."
      },
      {
        "id": "p3-35-3",
        "speaker": "Woman",
        "text": "A. Yes. I saw that when I got in this morning.",
        "vietnamese": "A. Vâng. Tôi đã thấy điều đó khi tôi đến vào sáng nay."
      },
      {
        "id": "p3-35-4",
        "speaker": "Man",
        "text": "A. Can you package all of them by yourself?",
        "vietnamese": "A. Bạn có thể tự mình đóng gói tất cả chúng được không?"
      },
      {
        "id": "p3-35-5",
        "speaker": "Woman",
        "text": "A. Well, there are so many I may not be able to finish everything today.",
        "vietnamese": "A. Chà, có quá nhiều thứ nên tôi có thể không thể hoàn thành hết mọi thứ trong ngày hôm nay."
      },
      {
        "id": "p3-35-6",
        "speaker": "Man",
        "text": "A. Okay. I'll call Maria Zhang and ask if she can come in early today to help.",
        "vietnamese": "A. Được rồi. Tôi sẽ gọi cho Maria Zhang và hỏi xem hôm nay cô ấy có thể đến sớm để giúp đỡ không."
      },
      {
        "id": "p3-35-7",
        "speaker": "Woman",
        "text": "A. That'd be great. We also have to pack that big shipment for the Henderson order.",
        "vietnamese": "A. Điều đó thật tuyệt. Chúng tôi cũng phải đóng gói lô hàng lớn đó cho đơn đặt hàng của Henderson."
      },
      {
        "id": "p3-35-8",
        "speaker": "Man",
        "text": "A. We finally got all of the items in. A. Oh, yes. Do that first.",
        "vietnamese": "A. Cuối cùng chúng tôi đã có được tất cả các mặt hàng. A. Ồ, vâng. Làm điều đó đầu tiên."
      }
    ],
    "questions": [
      {
        "num": 35,
        "question": "Where most likely are the speakers?",
        "vietnameseQuestion": "Người nói có thể ở đâu nhất?",
        "options": [
          {
            "key": "A",
            "text": "In a restaurant",
            "vietnamese": "Trong một nhà hàng"
          },
          {
            "key": "B",
            "text": "In a school",
            "vietnamese": "trong một trường học"
          },
          {
            "key": "C",
            "text": "In a warehouse",
            "vietnamese": "Trong một nhà kho"
          },
          {
            "key": "D",
            "text": "In a library",
            "vietnamese": "Trong một thư viện"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"In a warehouse\" (Trong một nhà kho)."
      },
      {
        "num": 36,
        "question": "Whydo the speakersmention Maria Jeong?",
        "vietnameseQuestion": "Tại sao người phát biểu lại nhắc đến Maria Jeong?",
        "options": [
          {
            "key": "A",
            "text": "She placed a very large order.",
            "vietnamese": "Cô ấy đã đặt một đơn hàng rất lớn."
          },
          {
            "key": "B",
            "text": "She wants to replace a product.",
            "vietnamese": "Cô ấy muốn thay thế một sản phẩm."
          },
          {
            "key": "C",
            "text": "She is unable to work today.",
            "vietnamese": "Hôm nay cô ấy không thể làm việc được."
          },
          {
            "key": "D",
            "text": "She may be able to help with a task.",
            "vietnamese": "Cô ấy có thể giúp đỡ một công việc."
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là (D): \"She may be able to help with a task.\" (Cô ấy có thể giúp đỡ một công việc.)."
      },
      {
        "num": 37,
        "question": "What will the man probably do next?",
        "vietnameseQuestion": "Người đàn ông có thể sẽ làm gì tiếp theo?",
        "options": [
          {
            "key": "A",
            "text": "Pack an order",
            "vietnamese": "Đóng gói một đơn đặt hàng"
          },
          {
            "key": "B",
            "text": "Call a colleague",
            "vietnamese": "Gọi cho đồng nghiệp"
          },
          {
            "key": "C",
            "text": "Process a refund",
            "vietnamese": "Xử lý hoàn tiền"
          },
          {
            "key": "D",
            "text": "Write to a customer",
            "vietnamese": "Viết cho khách hàng"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là (A): \"Pack an order\" (Đóng gói một đơn đặt hàng)."
      }
    ],
    "vocabulary": [
      {
        "word": "package",
        "meaning": "bưu kiện, gói hàng",
        "partOfSpeech": "n"
      },
      {
        "word": "shipment",
        "meaning": "lô hàng, việc giao hàng",
        "partOfSpeech": "n"
      },
      {
        "word": "order",
        "meaning": "gọi món, đặt hàng",
        "partOfSpeech": "v"
      },
      {
        "word": "finally",
        "meaning": "cuối cùng",
        "partOfSpeech": "adv"
      }
    ]
  },
  {
    "id": "part3-38-40",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 38 - 40",
    "title": "Part 3 - Câu 38 - 40: Người nói cần chọn gì",
    "audioSrc": "/audio/test2_2023.mp3",
    "startTime": 972.29,
    "endTime": 1046.13,
    "transcript": [
      {
        "id": "p3-38-1",
        "speaker": "Woman",
        "text": "A. Hauruna, we've planned most of the details for the corporate retreat, including housing and most activities,",
        "vietnamese": "A. Hauruna, chúng tôi đã lên kế hoạch hầu hết các chi tiết cho chuyến nghỉ dưỡng của công ty, bao gồm nhà ở và hầu hết các hoạt động,"
      },
      {
        "id": "p3-38-2",
        "speaker": "Man",
        "text": "but we still need to decide where to go for Saturdays closing dinner.",
        "vietnamese": "nhưng chúng ta vẫn cần phải quyết định sẽ đi đâu vào bữa tối cuối ngày thứ Bảy."
      },
      {
        "id": "p3-38-3",
        "speaker": "Woman",
        "text": "A. Yes. I sent you several menus. Did you like any of the places?",
        "vietnamese": "A. Vâng. Tôi đã gửi cho bạn một số thực đơn. Bạn có thích nơi nào không?"
      },
      {
        "id": "p3-38-4",
        "speaker": "Man",
        "text": "A. McNally's is close by. A. Yes. That would be convenient.",
        "vietnamese": "A. McNally's ở gần đây. A. Vâng. Điều đó sẽ thuận tiện."
      },
      {
        "id": "p3-38-5",
        "speaker": "Woman",
        "text": "A. We could even walk there from the hotel, but the prices are a little high.",
        "vietnamese": "A. Chúng tôi thậm chí có thể đi bộ từ khách sạn đến đó, nhưng giá hơi cao."
      },
      {
        "id": "p3-38-6",
        "speaker": "Man",
        "text": "A. I agree, but I could see if they can offer us a reduced catering rate rather than ordering off the regular menu.",
        "vietnamese": "A. Tôi đồng ý, nhưng tôi có thể xem liệu họ có thể giảm giá suất ăn cho chúng tôi thay vì gọi món theo thực đơn thông thường hay không."
      }
    ],
    "questions": [
      {
        "num": 38,
        "question": "What do the speakers need to choose?",
        "vietnameseQuestion": "Người nói cần chọn gì?",
        "options": [
          {
            "key": "A",
            "text": "An introductory activityfora retreat",
            "vietnamese": "Hoạt động giới thiệu khóa tu"
          },
          {
            "key": "B",
            "text": "A residential site for a retreat",
            "vietnamese": "Một khu dân cư để nghỉ dưỡng"
          },
          {
            "key": "C",
            "text": "Decorations for a party",
            "vietnamese": "Đồ trang trí cho bữa tiệc"
          },
          {
            "key": "D",
            "text": "A location for a dinner",
            "vietnamese": "Một địa điểm cho bữa tối"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là (D): \"A location for a dinner\" (Một địa điểm cho bữa tối)."
      },
      {
        "num": 39,
        "question": "Whatdothespeakers likeaboutMcNally's?",
        "vietnameseQuestion": "Các diễn giả thích gì về McNally's?",
        "options": [
          {
            "key": "A",
            "text": "It is nearby.",
            "vietnamese": "Nó ở gần đây."
          },
          {
            "key": "B",
            "text": "It is open late.",
            "vietnamese": "Nó mở cửa muộn."
          },
          {
            "key": "C",
            "text": "It is highly recommended.",
            "vietnamese": "Nó rất được khuyến khích."
          },
          {
            "key": "D",
            "text": "It has been remodeled.",
            "vietnamese": "Nó đã được sửa sang lại."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là (A): \"It is nearby.\" (Nó ở gần đây.)."
      },
      {
        "num": 40,
        "question": "Whatdoesthewomanoffertodo?",
        "vietnameseQuestion": "Người phụ nữ đó đề nghị gì?",
        "options": [
          {
            "key": "A",
            "text": "See what the retreat attendees prefer",
            "vietnamese": "Xem những gì người tham dự khóa tu thích"
          },
          {
            "key": "B",
            "text": "Find an alternative site",
            "vietnamese": "Tìm một trang web thay thế"
          },
          {
            "key": "C",
            "text": "Discuss pricing options",
            "vietnamese": "Thảo luận về các lựa chọn giá"
          },
          {
            "key": "D",
            "text": "Contact a hotel",
            "vietnamese": "Liên hệ với một khách sạn"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"Discuss pricing options\" (Thảo luận về các lựa chọn giá)."
      }
    ],
    "vocabulary": [
      {
        "word": "retreat",
        "meaning": "kỳ nghỉ dưỡng, dã ngoại gắn kết công ty",
        "partOfSpeech": "n"
      },
      {
        "word": "decide",
        "meaning": "quyết định",
        "partOfSpeech": "v"
      },
      {
        "word": "convenient",
        "meaning": "tiện lợi, thuận tiện",
        "partOfSpeech": "adj"
      },
      {
        "word": "agree",
        "meaning": "đồng ý, tán thành",
        "partOfSpeech": "v"
      }
    ]
  },
  {
    "id": "part3-41-43",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 41 - 43",
    "title": "Part 3 - Câu 41 - 43: Công ty của diễn giả sản xuất những gì",
    "audioSrc": "/audio/test2_2023.mp3",
    "startTime": 1046.13,
    "endTime": 1117.9,
    "transcript": [
      {
        "id": "p3-41-1",
        "speaker": "Woman",
        "text": "A. Janelle and Riko, could you give me an update on how our new medical record software is coming?",
        "vietnamese": "A. Janelle và Riko, bạn có thể cung cấp cho tôi thông tin cập nhật về hoạt động của phần mềm hồ sơ y tế mới của chúng tôi không?"
      },
      {
        "id": "p3-41-2",
        "speaker": "Man",
        "text": "A. Sure. Per the customers request, I've updated the logo and changed the font.",
        "vietnamese": "A. Chắc chắn rồi. Theo yêu cầu của khách hàng, tôi đã cập nhật logo và thay đổi font chữ."
      },
      {
        "id": "p3-41-3",
        "speaker": "Woman",
        "text": "A. The customer has communicated with us a lot on this project, having their feedback at every stage of the process has been helpful.",
        "vietnamese": "Đáp: Khách hàng đã trao đổi với chúng tôi rất nhiều về dự án này, phản hồi của họ ở mọi giai đoạn của quy trình đều rất hữu ích."
      },
      {
        "id": "p3-41-4",
        "speaker": "Man",
        "text": "A. Excellent. It sounds like we're on schedule for completing our beta version, then we can hand it off to our marketing team.",
        "vietnamese": "A. Tuyệt vời. Có vẻ như chúng tôi đang lên kế hoạch hoàn thiện phiên bản beta của mình, sau đó chúng tôi có thể giao nó cho nhóm tiếp thị của mình."
      }
    ],
    "questions": [
      {
        "num": 41,
        "question": "Whatdoesthespeakers'companyproduce?",
        "vietnameseQuestion": "Công ty của diễn giả sản xuất những gì?",
        "options": [
          {
            "key": "A",
            "text": "Computers",
            "vietnamese": "Máy tính"
          },
          {
            "key": "B",
            "text": "Software",
            "vietnamese": "Phần mềm"
          },
          {
            "key": "C",
            "text": "Web sites",
            "vietnamese": "Các trang web"
          },
          {
            "key": "D",
            "text": "Medical equipment",
            "vietnamese": "Thiết bị y tế"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"Software\" (Phần mềm)."
      },
      {
        "num": 42,
        "question": "What does the man say has been helpful?",
        "vietnameseQuestion": "Người đàn ông nói điều gì có ích?",
        "options": [
          {
            "key": "A",
            "text": "Focus group data",
            "vietnamese": "Dữ liệu nhóm tập trung"
          },
          {
            "key": "B",
            "text": "An engineering consultant",
            "vietnamese": "Một nhà tư vấn kỹ thuật"
          },
          {
            "key": "C",
            "text": "A search engine",
            "vietnamese": "Một công cụ tìm kiếm"
          },
          {
            "key": "D",
            "text": "Customerfeedback",
            "vietnamese": "Phản hồi của khách hàng"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là (D): \"Customerfeedback\" (Phản hồi của khách hàng)."
      },
      {
        "num": 43,
        "question": "What is the next step in the project that the speakers are discussing?",
        "vietnameseQuestion": "Bước tiếp theo trong dự án mà các diễn giả đang thảo luận là gì?",
        "options": [
          {
            "key": "A",
            "text": "Giving a presentation to the client",
            "vietnamese": "Đưa ra bản thuyết trình cho khách hàng"
          },
          {
            "key": "B",
            "text": "Sending a product to another group in the company",
            "vietnamese": "Gửi sản phẩm cho nhóm khác trong công ty"
          },
          {
            "key": "C",
            "text": "Creating a schedule for the next phase of development",
            "vietnamese": "Lập kế hoạch cho giai đoạn phát triển tiếp theo"
          },
          {
            "key": "D",
            "text": "Determining the price of a product GO ONTO THENEXT PAGE TEST2 39",
            "vietnamese": "Xác định giá của sản phẩm ĐI VÀO TRANG TIẾP THEO KIỂM TRA2 39"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"Sending a product to another group in the company\" (Gửi sản phẩm cho nhóm khác trong công ty)."
      }
    ],
    "vocabulary": [
      {
        "word": "update",
        "meaning": "cập nhật",
        "partOfSpeech": "v"
      },
      {
        "word": "software",
        "meaning": "phần mềm máy tính",
        "partOfSpeech": "n"
      },
      {
        "word": "project",
        "meaning": "dự án",
        "partOfSpeech": "n"
      },
      {
        "word": "feedback",
        "meaning": "ý kiến phản hồi",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part3-44-46",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 44 - 46",
    "title": "Part 3 - Câu 44 - 46: Mục đích của cuộc gọi điện thoại là gì",
    "audioSrc": "/audio/test2_2023.mp3",
    "startTime": 1117.9,
    "endTime": 1197.51,
    "transcript": [
      {
        "id": "p3-44-1",
        "speaker": "Woman",
        "text": "A. Hello. This is Ian Nelson from Regal Bathrooms. I'm following up to make sure that you're pleased with the job our workers did in your house.",
        "vietnamese": "A. Xin chào. Đây là Ian Nelson từ Phòng tắm Regal. Tôi đang theo dõi để đảm bảo rằng bạn hài lòng với công việc mà công nhân của chúng tôi đã làm tại nhà bạn."
      },
      {
        "id": "p3-44-2",
        "speaker": "Man",
        "text": "A. Thank you for calling. Yes, they did a great job. The bathroom floor was replaced and the new tile looks great. I'm very happy with the job.",
        "vietnamese": "A. Cảm ơn bạn đã gọi. Vâng, họ đã làm rất tốt. Sàn phòng tắm đã được thay thế và gạch mới trông rất tuyệt. Tôi rất hạnh phúc với công việc."
      },
      {
        "id": "p3-44-3",
        "speaker": "Woman",
        "text": "A. That's good to hear. If there are other jobs you need done, I hope you'll reach out to us again.",
        "vietnamese": "A. Thật tốt khi nghe điều đó. Nếu bạn cần làm công việc khác, tôi hy vọng bạn sẽ liên hệ lại với chúng tôi."
      },
      {
        "id": "p3-44-4",
        "speaker": "Man",
        "text": "A. That reminds me, I was thinking of replacing my kitchen cabinets. Is that something you'd possibly do?",
        "vietnamese": "A. Điều đó làm tôi nhớ ra, tôi đang nghĩ đến việc thay thế tủ bếp của mình. Đó có phải là điều bạn có thể làm không?"
      },
      {
        "id": "p3-44-5",
        "speaker": "Woman",
        "text": "A. We don't, but I can recommend a company I often work with. Their customers have been very satisfied. Let me get their phone number one second.",
        "vietnamese": "A. Chúng tôi thì không, nhưng tôi có thể giới thiệu một công ty mà tôi thường làm việc cùng. Khách hàng của họ đã rất hài lòng. Hãy để tôi lấy số điện thoại của họ một giây."
      }
    ],
    "questions": [
      {
        "num": 44,
        "question": "What is the purpose of the phone call?",
        "vietnameseQuestion": "Mục đích của cuộc gọi điện thoại là gì?",
        "options": [
          {
            "key": "A",
            "text": "Tohelpacustomerchooseaproduct",
            "vietnamese": "Để giúp đỡ khách hàngchọn sản phẩm"
          },
          {
            "key": "B",
            "text": "Tocheck on a customer's satisfaction",
            "vietnamese": "Để kiểm tra sự hài lòng của khách hàng"
          },
          {
            "key": "C",
            "text": "To inform a customer of aprice estimate",
            "vietnamese": "Để thông báo cho khách hàng về ước tính giá"
          },
          {
            "key": "D",
            "text": "To advertise a special offer",
            "vietnamese": "Để quảng cáo một ưu đãi đặc biệt"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"Tocheck on a customer's satisfaction\" (Để kiểm tra sự hài lòng của khách hàng)."
      },
      {
        "num": 45,
        "question": "What does the man say about replacing kitchen cabinets?",
        "vietnameseQuestion": "Người đàn ông nói gì về việc thay tủ bếp?",
        "options": [
          {
            "key": "A",
            "text": "He guarantees his company will do a good job.",
            "vietnamese": "Anh ấy đảm bảo rằng công ty của anh ấy sẽ hoạt động tốt."
          },
          {
            "key": "B",
            "text": "His company is too busy to do the work.",
            "vietnamese": "Công ty của anh ấy quá bận rộn để làm việc."
          },
          {
            "key": "C",
            "text": "His company does not do that type of work.",
            "vietnamese": "Công ty của anh ấy không làm loại công việc đó."
          },
          {
            "key": "D",
            "text": "He thinks it will be an expensive job.",
            "vietnamese": "Anh ấy nghĩ đó sẽ là một công việc tốn kém."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"His company does not do that type of work.\" (Công ty của anh ấy không làm loại công việc đó.)."
      },
      {
        "num": 46,
        "question": "What will the man most likely do next?",
        "vietnameseQuestion": "Người đàn ông rất có thể sẽ làm gì tiếp theo?",
        "options": [
          {
            "key": "A",
            "text": "Send workerstothewoman's house",
            "vietnamese": "Gửi công nhân đến nhà phụ nữ"
          },
          {
            "key": "B",
            "text": "Find a telephone number for the woman",
            "vietnamese": "Tìm số điện thoại của người phụ nữ"
          },
          {
            "key": "C",
            "text": "Check kitchen cabinet prices",
            "vietnamese": "Tham khảo giá tủ bếp"
          },
          {
            "key": "D",
            "text": "Discuss a new product with some workers",
            "vietnamese": "Thảo luận về một sản phẩm mới với một số công nhân"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"Find a telephone number for the woman\" (Tìm số điện thoại của người phụ nữ)."
      }
    ],
    "vocabulary": [
      {
        "word": "floor",
        "meaning": "tầng, sàn nhà",
        "partOfSpeech": "n"
      },
      {
        "word": "reach",
        "meaning": "với tay tới",
        "partOfSpeech": "v"
      },
      {
        "word": "recommend",
        "meaning": "gợi ý, giới thiệu",
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
    "title": "Part 3 - Câu 47 - 49: Cuộc trò chuyện đang diễn ra ở đâu",
    "audioSrc": "/audio/test2_2023.mp3",
    "startTime": 1197.51,
    "endTime": 1262.83,
    "transcript": [
      {
        "id": "p3-47-1",
        "speaker": "Woman",
        "text": "A. My name is Laura. I refill my medication here at this pharmacy once a month. But on Monday I'm going to travel abroad for work for two months. And I wonder if I can get a two month refill this time.",
        "vietnamese": "A. Tên tôi là Laura. Tôi nạp thuốc tại nhà thuốc này mỗi tháng một lần. Nhưng vào thứ Hai tôi sẽ đi công tác nước ngoài trong hai tháng. Và tôi tự hỏi liệu lần này tôi có thể nạp thêm hai tháng không."
      },
      {
        "id": "p3-47-2",
        "speaker": "Man",
        "text": "It shouldn't be a problem. However your doctor must send us the two month prescription so you need to contact her first.",
        "vietnamese": "Nó không phải là một vấn đề. Tuy nhiên bác sĩ của bạn phải gửi cho chúng tôi đơn thuốc hai tháng nên bạn cần liên hệ với cô ấy trước."
      },
      {
        "id": "p3-47-3",
        "speaker": "Woman",
        "text": "A. Oh, I see. I'll give her a call during my lunch break today. When are you open until today?",
        "vietnamese": "A. Ồ, tôi hiểu rồi. Tôi sẽ gọi cho cô ấy trong giờ nghỉ trưa hôm nay. Hôm nay bạn mở cửa đến khi nào?"
      },
      {
        "id": "p3-47-4",
        "speaker": "Man",
        "text": "A. Until 9 p.m. But once we receive your doctor's prescription we can deliver the medication directly to your home.",
        "vietnamese": "A. Cho đến 9 giờ tối. Nhưng sau khi nhận được đơn thuốc của bác sĩ, chúng tôi có thể giao thuốc trực tiếp đến nhà bạn."
      }
    ],
    "questions": [
      {
        "num": 47,
        "question": "Where is the conversation taking place?",
        "vietnameseQuestion": "Cuộc trò chuyện đang diễn ra ở đâu?",
        "options": [
          {
            "key": "A",
            "text": "At a travel agency",
            "vietnamese": "Tại một công ty du lịch"
          },
          {
            "key": "B",
            "text": "At a pharmacy",
            "vietnamese": "Tại một hiệu thuốc"
          },
          {
            "key": "C",
            "text": "At a mobile phone store",
            "vietnamese": "Tại một cửa hàng điện thoại di động"
          },
          {
            "key": "D",
            "text": "At a hotel",
            "vietnamese": "Tại một khách sạn"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"At a pharmacy\" (Tại một hiệu thuốc)."
      },
      {
        "num": 48,
        "question": "What does the woman say she will do at lunch today?",
        "vietnameseQuestion": "Người phụ nữ nói cô ấy sẽ làm gì vào bữa trưa hôm nay?",
        "options": [
          {
            "key": "A",
            "text": "Go to the airport",
            "vietnamese": "Đi đến sân bay"
          },
          {
            "key": "B",
            "text": "Print out a ticket",
            "vietnamese": "In ra một vé"
          },
          {
            "key": "C",
            "text": "Register for a giveaway",
            "vietnamese": "Đăng ký nhận quà"
          },
          {
            "key": "D",
            "text": "Call a doctor",
            "vietnamese": "Gọi bác sĩ"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là (D): \"Call a doctor\" (Gọi bác sĩ)."
      },
      {
        "num": 49,
        "question": "What does the man offer to do?",
        "vietnameseQuestion": "Người đàn ông đề nghị làm gì?",
        "options": [
          {
            "key": "A",
            "text": "Arrange a delivery",
            "vietnamese": "Sắp xếp giao hàng"
          },
          {
            "key": "B",
            "text": "Postpone an appointment",
            "vietnamese": "Trì hoãn một cuộc hẹn"
          },
          {
            "key": "C",
            "text": "Check a discount rate",
            "vietnamese": "Kiểm tra tỷ lệ chiết khấu"
          },
          {
            "key": "D",
            "text": "Download an application 40",
            "vietnamese": "Tải ứng dụng 40"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là (A): \"Arrange a delivery\" (Sắp xếp giao hàng)."
      }
    ],
    "vocabulary": [
      {
        "word": "medication",
        "meaning": "thuốc men, dược phẩm",
        "partOfSpeech": "n"
      },
      {
        "word": "pharmacy",
        "meaning": "hiệu thuốc",
        "partOfSpeech": "n"
      },
      {
        "word": "travel",
        "meaning": "đi lại, đi công tác",
        "partOfSpeech": "v"
      },
      {
        "word": "abroad",
        "meaning": "ở nước ngoài",
        "partOfSpeech": "adv"
      }
    ]
  },
  {
    "id": "part3-50-52",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 50 - 52",
    "title": "Part 3 - Câu 50 - 52: Người phụ nữ làm việc ở đâu",
    "audioSrc": "/audio/test2_2023.mp3",
    "startTime": 1262.83,
    "endTime": 1366.69,
    "transcript": [
      {
        "id": "p3-50-1",
        "speaker": "Woman",
        "text": "A. Miller's Sporting Goods Joey speaking. Hello I'm calling from West End High School. We're looking to make a big purchase for our student baseball teams. Our equipment is getting old and we would like to get new uniforms too.",
        "vietnamese": "A. Miller's Sporting Goods Joey phát biểu. Xin chào, tôi gọi từ trường trung học West End. Chúng tôi đang tìm cách mua một khoản lớn cho đội bóng chày sinh viên của mình. Thiết bị của chúng tôi đã cũ và chúng tôi cũng muốn có đồng phục mới."
      },
      {
        "id": "p3-50-2",
        "speaker": "Man",
        "text": "A. We have budget restrictions though. A. Well we do offer discounts for bulk purchases and we have a number of price ranges for uniforms. Many are very reasonable.",
        "vietnamese": "A. Tuy nhiên, chúng tôi có những hạn chế về ngân sách. A. Chúng tôi có giảm giá khi mua số lượng lớn và chúng tôi có nhiều mức giá cho đồng phục. Nhiều cái rất hợp lý."
      }
    ],
    "questions": [
      {
        "num": 50,
        "question": "Where does the woman work?",
        "vietnameseQuestion": "Người phụ nữ làm việc ở đâu?",
        "options": [
          {
            "key": "A",
            "text": "At a baseball stadium",
            "vietnamese": "Tại một sân vận động bóng chày"
          },
          {
            "key": "B",
            "text": "At a fitness center",
            "vietnamese": "Tại một trung tâm thể hình"
          },
          {
            "key": "C",
            "text": "At a shipping warehouse",
            "vietnamese": "Tại kho vận chuyển"
          },
          {
            "key": "D",
            "text": "At a school",
            "vietnamese": "Tại một trường học"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là (D): \"At a school\" (Tại một trường học)."
      },
      {
        "num": 51,
        "question": "Whatis the woman concerned about?",
        "vietnameseQuestion": "Người phụ nữ quan tâm đến điều gì?",
        "options": [
          {
            "key": "A",
            "text": "A store's closing time",
            "vietnamese": "Giờ đóng cửa của một cửa hàng"
          },
          {
            "key": "B",
            "text": "Overall costs",
            "vietnamese": "Tổng chi phí"
          },
          {
            "key": "C",
            "text": "When an orderwill be received",
            "vietnamese": "Khi nào sẽ nhận được đơn đặt hàng"
          },
          {
            "key": "D",
            "text": "The color of some uniforms",
            "vietnamese": "Màu sắc của một số trang phục"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"Overall costs\" (Tổng chi phí)."
      },
      {
        "num": 52,
        "question": "Whatwill themandonext?",
        "vietnameseQuestion": "Tiếp theo sẽ là gì?",
        "options": [
          {
            "key": "A",
            "text": "Look up some prices",
            "vietnamese": "Tra cứu một số giá"
          },
          {
            "key": "B",
            "text": "Package an order",
            "vietnamese": "Đóng gói đơn hàng"
          },
          {
            "key": "C",
            "text": "Call a manager",
            "vietnamese": "Gọi cho người quản lý"
          },
          {
            "key": "D",
            "text": "Check the store's inventory",
            "vietnamese": "Kiểm tra hàng tồn kho của cửa hàng"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"Call a manager\" (Gọi cho người quản lý)."
      }
    ],
    "vocabulary": [
      {
        "word": "purchase",
        "meaning": "mua, thanh toán hàng hóa",
        "partOfSpeech": "v"
      },
      {
        "word": "equipment",
        "meaning": "trang thiết bị máy móc",
        "partOfSpeech": "n"
      },
      {
        "word": "budget",
        "meaning": "ngân sách",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part3-53-55",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 53 - 55",
    "title": "Part 3 - Câu 53 - 55: Người phụ nữ đề cập đến vấn đề gì",
    "audioSrc": "/audio/test2_2023.mp3",
    "startTime": 1366.69,
    "endTime": 1436.3,
    "transcript": [
      {
        "id": "p3-53-1",
        "speaker": "Woman",
        "text": "Hi this is Gemini Flowers. I'm calling about the order you placed for your award lunch in on July 12.",
        "vietnamese": "Xin chào, đây là Hoa Song Tử. Tôi đang gọi điện để hỏi về đơn hàng mà bạn đã đặt cho bữa trưa trao giải vào ngày 12 tháng 7."
      },
      {
        "id": "p3-53-2",
        "speaker": "Man",
        "text": "Unfortunately our supplier is out of pink roses. Oh no pink matches are corporate logo. I ordered them especially for this occasion. I understand your disappointment sir. I can offer a 10% discount on the total cost of your order and replace the pink roses with yellow ones.",
        "vietnamese": "Rất tiếc, nhà cung cấp của chúng tôi đã hết hoa hồng. Ồ không, diêm màu hồng là logo của công ty. Tôi đã đặt hàng chúng đặc biệt cho dịp này. Tôi hiểu sự thất vọng của bạn thưa ông. Tôi có thể giảm giá 10% trên tổng chi phí đặt hàng của bạn và thay thế hoa hồng màu hồng bằng hoa màu vàng."
      }
    ],
    "questions": [
      {
        "num": 53,
        "question": "Whatproblemdoesthewomanmention?",
        "vietnameseQuestion": "Người phụ nữ đề cập đến vấn đề gì?",
        "options": [
          {
            "key": "A",
            "text": "There isno timetocreate centerpieces.",
            "vietnamese": "Không có thời gian để tạo ra các phần trung tâm."
          },
          {
            "key": "B",
            "text": "The shop never received the man's order.",
            "vietnamese": "Cửa hàng không bao giờ nhận được đơn đặt hàng của người đàn ông."
          },
          {
            "key": "C",
            "text": "A supplier cannot fulfll an order.",
            "vietnamese": "Nhà cung cấp không thể thực hiện đơn hàng."
          },
          {
            "key": "D",
            "text": "The wrong date is on the order form.",
            "vietnamese": "Ngày sai trên mẫu đơn đặt hàng."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"A supplier cannot fulfll an order.\" (Nhà cung cấp không thể thực hiện đơn hàng.)."
      },
      {
        "num": 54,
        "question": "What does the man say about his company's logo?",
        "vietnameseQuestion": "Người đàn ông nói gì về logo của công ty anh ta?",
        "options": [
          {
            "key": "A",
            "text": "It was designed manyyears ago.",
            "vietnamese": "Nó được thiết kế từ nhiều năm trước."
          },
          {
            "key": "B",
            "text": "It contains the color pink.",
            "vietnamese": "Nó chứa màu hồng."
          },
          {
            "key": "C",
            "text": "It won an award.",
            "vietnamese": "Nó đã giành được một giải thưởng."
          },
          {
            "key": "D",
            "text": "It features a drawing of flowers.",
            "vietnamese": "Nó có tính năng vẽ hoa."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"It contains the color pink.\" (Nó chứa màu hồng.)."
      },
      {
        "num": 55,
        "question": "What does theman mean when he says, suppose no one willreally be disappointed\"?",
        "vietnameseQuestion": "Người đàn ông đó có ý gì khi nói, giả sử không ai thực sự thất vọng\"?",
        "options": [
          {
            "key": "A",
            "text": "He will postpone the luncheon.",
            "vietnamese": "Anh ấy sẽ hoãn bữa trưa lại."
          },
          {
            "key": "B",
            "text": "He will accept the woman's offer.",
            "vietnamese": "Anh ta sẽ chấp nhận lời đề nghị của người phụ nữ."
          },
          {
            "key": "C",
            "text": "He will find a replacement award.",
            "vietnamese": "Anh ấy sẽ tìm một giải thưởng thay thế."
          },
          {
            "key": "D",
            "text": "He will modify the company's logo.",
            "vietnamese": "Anh ấy sẽ sửa đổi logo của công ty."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"He will accept the woman's offer.\" (Anh ta sẽ chấp nhận lời đề nghị của người phụ nữ.)."
      }
    ],
    "vocabulary": [
      {
        "word": "order",
        "meaning": "gọi món, đặt hàng",
        "partOfSpeech": "v"
      },
      {
        "word": "award",
        "meaning": "giải thưởng",
        "partOfSpeech": "n"
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
    "id": "part3-56-58",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 56 - 58",
    "title": "Part 3 - Câu 56 - 58: Các diễn giả thường làm việc cho loại công ty nào",
    "audioSrc": "/audio/test2_2023.mp3",
    "startTime": 1436.3,
    "endTime": 1502.58,
    "transcript": [
      {
        "id": "p3-56-1",
        "speaker": "Woman",
        "text": "Unfortunately our development team has some bad news. It turns out we'll need to push back the shipment of the prototype motor we've been developing for our client. Oh oh why will there be a delay?",
        "vietnamese": "Thật không may, nhóm phát triển của chúng tôi có một số tin xấu. Hóa ra là chúng tôi sẽ phải lùi chuyến hàng động cơ nguyên mẫu mà chúng tôi đang phát triển cho khách hàng của mình. Ôi ôi tại sao lại có sự chậm trễ?"
      },
      {
        "id": "p3-56-2",
        "speaker": "Man",
        "text": "Well some of the components we received to build the prototype of failing initial tests. So we won't be able to make the delivery deadline. Janet could you let the client know? Yes I'll contact them right away.",
        "vietnamese": "Vâng, một số thành phần chúng tôi nhận được để xây dựng nguyên mẫu không thành công trong các thử nghiệm ban đầu. Vì vậy chúng tôi sẽ không thể thực hiện đúng thời hạn giao hàng. Janet bạn có thể cho khách hàng biết được không? Có, tôi sẽ liên hệ với họ ngay."
      }
    ],
    "questions": [
      {
        "num": 56,
        "question": "What kind of company do the speakers most likely work for?",
        "vietnameseQuestion": "Các diễn giả thường làm việc cho loại công ty nào?",
        "options": [
          {
            "key": "A",
            "text": "Manufacturing",
            "vietnamese": "Sản xuất"
          },
          {
            "key": "B",
            "text": "Financial",
            "vietnamese": "tài chính"
          },
          {
            "key": "C",
            "text": "Publishing",
            "vietnamese": "Xuất bản"
          },
          {
            "key": "D",
            "text": "Educational",
            "vietnamese": "giáo dục"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là (A): \"Manufacturing\" (Sản xuất)."
      },
      {
        "num": 57,
        "question": "Whatproblemarethespeakersdiscussing?",
        "vietnameseQuestion": "Các diễn giả đang thảo luận có vấn đề gì?",
        "options": [
          {
            "key": "A",
            "text": "Apause while morefunding is obtained",
            "vietnamese": "Tạm dừng trong khi nhận được nhiều tiền hơn"
          },
          {
            "key": "B",
            "text": "A delay in making a delivery",
            "vietnamese": "Sự chậm trễ trong việc giao hàng"
          },
          {
            "key": "C",
            "text": "Aneed for the company to relocate",
            "vietnamese": "Aneed cho công ty di dời"
          },
          {
            "key": "D",
            "text": "Theloss ofsome experienced staff",
            "vietnamese": "Mất đi một số nhân viên giàu kinh nghiệm"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"A delay in making a delivery\" (Sự chậm trễ trong việc giao hàng)."
      },
      {
        "num": 58,
        "question": "What does the man request?",
        "vietnameseQuestion": "Người đàn ông yêu cầu gì?",
        "options": [
          {
            "key": "A",
            "text": "Areport from the client",
            "vietnamese": "Báo cáo từ khách hàng"
          },
          {
            "key": "B",
            "text": "Afasterpaceofwork",
            "vietnamese": "Tốc độ làm việc nhanh hơn"
          },
          {
            "key": "C",
            "text": "Additionalemployees",
            "vietnamese": "Nhân viên bổ sung"
          },
          {
            "key": "D",
            "text": "Daily updates from the team",
            "vietnamese": "Cập nhật hàng ngày từ nhóm"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là (D): \"Daily updates from the team\" (Cập nhật hàng ngày từ nhóm)."
      }
    ],
    "vocabulary": [
      {
        "word": "shipment",
        "meaning": "lô hàng, việc giao hàng",
        "partOfSpeech": "n"
      },
      {
        "word": "prototype",
        "meaning": "mẫu thử nghiệm ban đầu",
        "partOfSpeech": "n"
      },
      {
        "word": "client",
        "meaning": "khách hàng",
        "partOfSpeech": "n"
      },
      {
        "word": "delay",
        "meaning": "sự chậm trễ, hoãn chuyến",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part3-59-61",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 59 - 61",
    "title": "Part 3 - Câu 59 - 61: Người phụ nữ nói gì về Sân bay Trung tâm",
    "audioSrc": "/audio/test2_2023.mp3",
    "startTime": 1502.58,
    "endTime": 1595.91,
    "transcript": [
      {
        "id": "p3-59-1",
        "speaker": "Woman",
        "text": "Good evening. Legend Hotel. How may I help you? Hello I'm at the local airport. Does the hotel run shuttle buses to here?",
        "vietnamese": "Buổi tối vui vẻ. Khách sạn Legend. Tôi có thể giúp gì cho bạn? Xin chào, tôi đang ở sân bay địa phương. Khách sạn có chạy xe đưa đón tới đây không?"
      },
      {
        "id": "p3-59-2",
        "speaker": "Man",
        "text": "We usually don't but was your flight originally scheduled for central airport? It was but apparently there's a problem at central. Yes there's a personnel shortage but several flights have been re-routed to the local airport.",
        "vietnamese": "Chúng tôi thường không làm vậy nhưng chuyến bay ban đầu của bạn có dự kiến ​​đến sân bay trung tâm không? Nhưng rõ ràng là có vấn đề ở trung tâm. Vâng, đang thiếu nhân sự nhưng một số chuyến bay đã được định tuyến lại đến sân bay địa phương."
      },
      {
        "id": "p3-59-3",
        "speaker": "Woman",
        "text": "We have started running an airport shuttle this morning. Okay that's good news. What is the next shuttle? Buses run every half hour.",
        "vietnamese": "Chúng tôi đã bắt đầu chạy xe đưa đón sân bay vào sáng nay. Được rồi đó là tin tốt. Chuyến xe đưa đón tiếp theo là gì? Xe buýt chạy cứ nửa giờ một lần."
      }
    ],
    "questions": [
      {
        "num": 59,
        "question": "Whatdoesthewomansayabout Central Airport?",
        "vietnameseQuestion": "Người phụ nữ nói gì về Sân bay Trung tâm?",
        "options": [
          {
            "key": "A",
            "text": "The airport operates two shuttles.",
            "vietnamese": "Sân bay khai thác hai tàu con thoi."
          },
          {
            "key": "B",
            "text": "Therearenot enough peopleworking there.",
            "vietnamese": "Không có đủ người làm việc ở đó."
          },
          {
            "key": "C",
            "text": "It is not far from the Legend Hotel.",
            "vietnamese": "Nó không xa khách sạn Legend."
          },
          {
            "key": "D",
            "text": "It ismoremodernthanthelocal airport.",
            "vietnamese": "Nó hiện đại hơn sân bay địa phương."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"Therearenot enough peopleworking there.\" (Không có đủ người làm việc ở đó.)."
      },
      {
        "num": 60,
        "question": "Why does the man say,\"That's good news\"?",
        "vietnameseQuestion": "Tại sao người đàn ông lại nói: \"Đó là tin tốt\"?",
        "options": [
          {
            "key": "A",
            "text": "He will be ableto take a shuttle to the hotel.",
            "vietnamese": "Anh ấy sẽ có thể đi xe đưa đón đến khách sạn."
          },
          {
            "key": "B",
            "text": "His flight was rescheduled.",
            "vietnamese": "Chuyến bay của anh ấy đã được dời lại."
          },
          {
            "key": "C",
            "text": "Central Airport will reopen soon.",
            "vietnamese": "Sân bay miền Trung sẽ sớm mở cửa trở lại."
          },
          {
            "key": "D",
            "text": "He will be able to change his hotel reservation.",
            "vietnamese": "Anh ấy sẽ có thể thay đổi việc đặt phòng khách sạn của mình."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là (A): \"He will be ableto take a shuttle to the hotel.\" (Anh ấy sẽ có thể đi xe đưa đón đến khách sạn.)."
      },
      {
        "num": 61,
        "question": "What will the woman do for the man?",
        "vietnameseQuestion": "Người phụ nữ sẽ làm gì cho người đàn ông?",
        "options": [
          {
            "key": "A",
            "text": "Give him the shuttle company's phone number",
            "vietnamese": "Cho anh ấy số điện thoại của công ty đưa đón"
          },
          {
            "key": "B",
            "text": "Find information about Central Airport",
            "vietnamese": "Tìm thông tin về Sân bay Trung tâm"
          },
          {
            "key": "C",
            "text": "Givehimadiscountonhisreservation",
            "vietnamese": "Giảm giá cho việc đặt chỗ của anh ấy"
          },
          {
            "key": "D",
            "text": "Make sure that his room has been prepared",
            "vietnamese": "Hãy chắc chắn rằng phòng của anh ấy đã được chuẩn bị"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là (D): \"Make sure that his room has been prepared\" (Hãy chắc chắn rằng phòng của anh ấy đã được chuẩn bị)."
      }
    ],
    "vocabulary": [
      {
        "word": "local",
        "meaning": "thuộc địa phương",
        "partOfSpeech": "n"
      },
      {
        "word": "airport",
        "meaning": "sân bay",
        "partOfSpeech": "n"
      },
      {
        "word": "usually",
        "meaning": "thường xuyên, thông thường",
        "partOfSpeech": "adv"
      },
      {
        "word": "flight",
        "meaning": "chuyến bay",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part3-62-64",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 62 - 64",
    "title": "Part 3 - Câu 62 - 64: Người đàn ông đã làm gì ngày hôm qua",
    "audioSrc": "/audio/test2_2023.mp3",
    "startTime": 1595.91,
    "endTime": 1675.91,
    "transcript": [
      {
        "id": "p3-62-1",
        "speaker": "Woman",
        "text": "Hi Ma'wah. I'm calling to check whether you received my outline of the design project for your apartment remodeling. I emailed it to you yesterday.",
        "vietnamese": "Chào Ma'wah. Tôi gọi để kiểm tra xem bạn có nhận được bản phác thảo của tôi về dự án thiết kế cho việc tu sửa căn hộ của bạn hay không. Tôi đã gửi email cho bạn ngày hôm qua."
      },
      {
        "id": "p3-62-2",
        "speaker": "Man",
        "text": "Yes thank you for doing such a great job. I really like your idea of opening up the kitchen and creating an open space with the living room. Great.",
        "vietnamese": "Vâng, cảm ơn bạn đã làm một công việc tuyệt vời như vậy. Tôi rất thích ý tưởng mở bếp và tạo không gian mở với phòng khách của bạn. Tuyệt vời."
      },
      {
        "id": "p3-62-3",
        "speaker": "Woman",
        "text": "If everything looks good to you I can start ordering the supplies tomorrow. Actually I don't like the ceramic tiles you picked for the kitchen. I like the marble ones much better. I know they are more expensive but it's a small space.",
        "vietnamese": "Nếu bạn thấy mọi thứ đều ổn thì tôi có thể bắt đầu đặt hàng vào ngày mai. Thực ra tôi không thích loại gạch men bạn chọn cho nhà bếp. Tôi thích những cái bằng đá cẩm thạch tốt hơn nhiều. Tôi biết chúng đắt hơn nhưng đó là một không gian nhỏ."
      }
    ],
    "questions": [
      {
        "num": 62,
        "question": "What did the man do yesterday?",
        "vietnameseQuestion": "Người đàn ông đã làm gì ngày hôm qua?",
        "options": [
          {
            "key": "A",
            "text": "He visited a property.",
            "vietnamese": "Anh ấy đã đến thăm một bất động sản."
          },
          {
            "key": "B",
            "text": "He contacted a supplier.",
            "vietnamese": "Anh ấy đã liên hệ với một nhà cung cấp."
          },
          {
            "key": "C",
            "text": "He sent a plan.",
            "vietnamese": "Anh ấy đã gửi một kế hoạch."
          },
          {
            "key": "D",
            "text": "He took some measurements.",
            "vietnamese": "Anh ấy đã thực hiện một số phép đo."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"He sent a plan.\" (Anh ấy đã gửi một kế hoạch.)."
      },
      {
        "num": 63,
        "question": "What does the woman say she likes?",
        "vietnameseQuestion": "Người phụ nữ nói cô ấy thích gì?",
        "options": [
          {
            "key": "A",
            "text": "Thecostthemanhasestimated",
            "vietnamese": "Thecostthemanhasestimated"
          },
          {
            "key": "B",
            "text": "The open-space design",
            "vietnamese": "Thiết kế không gian mở"
          },
          {
            "key": "C",
            "text": "The colors the man has selected",
            "vietnamese": "Màu sắc người đàn ông đã chọn"
          },
          {
            "key": "D",
            "text": "The remodeling timeline",
            "vietnamese": "Dòng thời gian tu sửa"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"The open-space design\" (Thiết kế không gian mở)."
      },
      {
        "num": 64,
        "question": "Look at the graphic. How much will the woman pay for each tile?",
        "vietnameseQuestion": "Nhìn vào đồ họa. Người phụ nữ sẽ trả bao nhiêu cho mỗi viên gạch?",
        "options": [
          {
            "key": "A",
            "text": "$12.00",
            "vietnamese": "$12,00"
          },
          {
            "key": "B",
            "text": "$6.50",
            "vietnamese": "$6,50"
          },
          {
            "key": "C",
            "text": "$4.99",
            "vietnamese": "4,99 USD"
          },
          {
            "key": "D",
            "text": "$2.50 GO ONTO THENEXT PAGE TEST241 Price RoomTypes 120 Executivesuite 115 Deluxe double Standard king 99 89 Single basic",
            "vietnamese": "$2,50 ĐI VÀO TRANG TIẾP THEO KIỂM TRA241 Giá Loại phòng 120 ExecutiveSuite 115 Deluxe giường đôi Tiêu chuẩn King 99 89 Đơn cơ bản"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"$6.50\" ($6,50)."
      }
    ],
    "vocabulary": [
      {
        "word": "design",
        "meaning": "thiết kế",
        "partOfSpeech": "v"
      },
      {
        "word": "project",
        "meaning": "dự án",
        "partOfSpeech": "n"
      },
      {
        "word": "opening",
        "meaning": "chỗ trống, phòng trống",
        "partOfSpeech": "n"
      },
      {
        "word": "open",
        "meaning": "mở cửa đón khách",
        "partOfSpeech": "v"
      }
    ],
    "graphicImage": "/images/intensive/test2_2023/q62_64.png"
  },
  {
    "id": "part3-65-67",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 65 - 67",
    "title": "Part 3 - Câu 65 - 67: Tại sao người đàn ông lại gọi",
    "audioSrc": "/audio/test2_2023.mp3",
    "startTime": 1675.91,
    "endTime": 1775.01,
    "transcript": [
      {
        "id": "p3-65-1",
        "speaker": "Woman",
        "text": "Hi. I'd like to make a reservation for a group of clients that will be visiting our company from the first to the 6th of June. I need 8 rooms.",
        "vietnamese": "CHÀO. Tôi muốn đặt chỗ cho một nhóm khách hàng sẽ đến thăm công ty chúng tôi từ ngày 1 đến ngày 6 tháng 6. Tôi cần 8 phòng."
      },
      {
        "id": "p3-65-2",
        "speaker": "Man",
        "text": "We do have availability for that period. The type of room I recommend for you is normally 99 euros per night but we can offer a group discount.",
        "vietnamese": "Chúng tôi có sẵn cho khoảng thời gian đó. Loại phòng tôi giới thiệu cho bạn thường là 99 euro mỗi đêm nhưng chúng tôi có thể giảm giá theo nhóm."
      },
      {
        "id": "p3-65-3",
        "speaker": "Woman",
        "text": "That'll work. Also on June 5th we want to take our clients on a tour of the local attractions. Could you help arrange that?",
        "vietnamese": "Điều đó sẽ hiệu quả. Cũng vào ngày 5 tháng 6, chúng tôi muốn đưa khách hàng của mình đi tham quan các điểm tham quan ở địa phương. Bạn có thể giúp sắp xếp việc đó được không?"
      },
      {
        "id": "p3-65-4",
        "speaker": "Man",
        "text": "We have an event planner here who will be able to help you. His name is Pablo Gonzalez. I'll connect you to his office once I've completed your reservation.",
        "vietnamese": "Chúng tôi có một người tổ chức sự kiện ở đây, người sẽ có thể giúp bạn. Tên anh ấy là Pablo Gonzalez. Tôi sẽ kết nối bạn với văn phòng của anh ấy sau khi tôi hoàn tất việc đặt chỗ cho bạn."
      }
    ],
    "questions": [
      {
        "num": 65,
        "question": "Why is the man calling?",
        "vietnameseQuestion": "Tại sao người đàn ông lại gọi?",
        "options": [
          {
            "key": "A",
            "text": "To request a room change",
            "vietnamese": "Để yêu cầu thay đổi phòng"
          },
          {
            "key": "B",
            "text": "To make a group reservation",
            "vietnamese": "Để đặt chỗ theo nhóm"
          },
          {
            "key": "C",
            "text": "To order room service",
            "vietnamese": "Để đặt dịch vụ phòng"
          },
          {
            "key": "D",
            "text": "To complain about noise",
            "vietnamese": "Khiếu nại về tiếng ồn"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"To make a group reservation\" (Để đặt chỗ theo nhóm)."
      },
      {
        "num": 66,
        "question": "Look at the graphic. Which room type does thewomanmention?",
        "vietnameseQuestion": "Nhìn vào đồ họa. Người phụ nữ đề cập đến loại phòng nào?",
        "options": [
          {
            "key": "A",
            "text": "Executive suite",
            "vietnamese": "Phòng điều hành"
          },
          {
            "key": "B",
            "text": "Deluxe double",
            "vietnamese": "Phòng đôi cao cấp"
          },
          {
            "key": "C",
            "text": "Standard king",
            "vietnamese": "Tiêu chuẩn vua"
          },
          {
            "key": "D",
            "text": "Single basic",
            "vietnamese": "Cơ bản đơn"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"Standard king\" (Tiêu chuẩn vua)."
      },
      {
        "num": 67,
        "question": "Who is Pablo Gonzales?",
        "vietnameseQuestion": "Pablo Gonzales là ai?",
        "options": [
          {
            "key": "A",
            "text": "An accountant",
            "vietnamese": "Một kế toán viên"
          },
          {
            "key": "B",
            "text": "A client",
            "vietnamese": "Một khách hàng"
          },
          {
            "key": "C",
            "text": "A bus driver",
            "vietnamese": "Một tài xế xe buýt"
          },
          {
            "key": "D",
            "text": "An event planner 42",
            "vietnamese": "Người lập kế hoạch sự kiện 42"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là (D): \"An event planner 42\" (Người lập kế hoạch sự kiện 42)."
      }
    ],
    "vocabulary": [
      {
        "word": "reservation",
        "meaning": "sự đặt chỗ, đặt phòng trước",
        "partOfSpeech": "n"
      },
      {
        "word": "recommend",
        "meaning": "gợi ý, giới thiệu",
        "partOfSpeech": "v"
      },
      {
        "word": "discount",
        "meaning": "sự giảm giá, chiết khấu",
        "partOfSpeech": "n"
      },
      {
        "word": "tour",
        "meaning": "chuyến tham quan, dẫn đi xem",
        "partOfSpeech": "n/v"
      }
    ],
    "graphicImage": "/images/intensive/test2_2023/q65_67.png"
  },
  {
    "id": "part3-68-70",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 68 - 70",
    "title": "Part 3 - Câu 68 - 70: Cuộc trò chuyện chủ yếu nói về điều gì",
    "audioSrc": "/audio/test2_2023.mp3",
    "startTime": 1775.01,
    "endTime": 1854.72,
    "transcript": [
      {
        "id": "p3-68-1",
        "speaker": "Woman",
        "text": "Hi Joanna. The management group needs to submit nominees for this year's award for outstanding employee.",
        "vietnamese": "Chào Joanna. Ban quản lý cần đưa ra đề cử cho giải thưởng nhân viên xuất sắc năm nay."
      },
      {
        "id": "p3-68-2",
        "speaker": "Man",
        "text": "My supervisor wants to know if any managers have nominated anyone yet. Not yet Charles. I emailed everyone about it a week ago but I haven't heard anything yet. I'll have to follow up with the managers and let them know the deadline is coming up.",
        "vietnamese": "Người giám sát của tôi muốn biết liệu có người quản lý nào đã đề cử ai chưa. Chưa Charles. Tôi đã gửi email cho mọi người về việc đó một tuần trước nhưng tôi vẫn chưa nhận được thông tin gì. Tôi sẽ phải liên lạc với người quản lý và cho họ biết thời hạn sắp đến."
      },
      {
        "id": "p3-68-3",
        "speaker": "Woman",
        "text": "Okay well I printed out a breakdown of the customer service representatives with the most five star reviews from customers last year. We had someone who was really outstanding.",
        "vietnamese": "Được rồi, tôi đã in ra bản phân tích các đại diện dịch vụ khách hàng nhận được nhiều đánh giá năm sao nhất từ ​​khách hàng vào năm ngoái. Chúng tôi có một người thực sự xuất sắc."
      }
    ],
    "questions": [
      {
        "num": 68,
        "question": "What is the conversation mainly about?",
        "vietnameseQuestion": "Cuộc trò chuyện chủ yếu nói về điều gì?",
        "options": [
          {
            "key": "A",
            "text": "Asalesstrategy",
            "vietnamese": "Chiến lược bán hàng"
          },
          {
            "key": "B",
            "text": "An improvement in customer service",
            "vietnamese": "Một sự cải tiến trong dịch vụ khách hàng"
          },
          {
            "key": "C",
            "text": "Anew manager",
            "vietnamese": "Người quản lý mới"
          },
          {
            "key": "D",
            "text": "An award",
            "vietnamese": "Một giải thưởng"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là (D): \"An award\" (Một giải thưởng)."
      },
      {
        "num": 69,
        "question": "Whodoes thewomansayshewill senda reminder to?",
        "vietnameseQuestion": "Người phụ nữ nói cô ấy sẽ gửi lời nhắc tới ai?",
        "options": [
          {
            "key": "A",
            "text": "The management team",
            "vietnamese": "Đội ngũ quản lý"
          },
          {
            "key": "B",
            "text": "The customer service representatives",
            "vietnamese": "Các đại diện dịch vụ khách hàng"
          },
          {
            "key": "C",
            "text": "A magazine editor",
            "vietnamese": "Một biên tập viên tạp chí"
          },
          {
            "key": "D",
            "text": "A repair technician",
            "vietnamese": "Một kỹ thuật viên sửa chữa"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là (A): \"The management team\" (Đội ngũ quản lý)."
      },
      {
        "num": 70,
        "question": "Look at the graphic. Which representative is the man most likely talking about?",
        "vietnameseQuestion": "Nhìn vào đồ họa. Người đàn ông có nhiều khả năng đang nói đến đại diện nào nhất?",
        "options": [
          {
            "key": "A",
            "text": "Jorge",
            "vietnamese": "Jorge"
          },
          {
            "key": "B",
            "text": "Rebecca",
            "vietnamese": "Rebecca"
          },
          {
            "key": "C",
            "text": "Jada",
            "vietnamese": "Jada"
          },
          {
            "key": "D",
            "text": "Kent",
            "vietnamese": "Kent"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"Rebecca\" (Rebecca)."
      }
    ],
    "vocabulary": [
      {
        "word": "management",
        "meaning": "ban quản lý",
        "partOfSpeech": "n"
      },
      {
        "word": "submit",
        "meaning": "nộp, trình duyệt",
        "partOfSpeech": "v"
      },
      {
        "word": "award",
        "meaning": "giải thưởng",
        "partOfSpeech": "n"
      },
      {
        "word": "outstanding",
        "meaning": "xuất sắc, nổi bật",
        "partOfSpeech": "n"
      }
    ],
    "graphicImage": "/images/intensive/test2_2023/q68_70.png"
  },
  {
    "id": "part4-71-73",
    "part": 4,
    "partTitle": "Part 4: Bài nói chuyện",
    "questionRange": "Câu 71 - 73",
    "title": "Part 4 - Câu 71 - 73: Những gì đang được quảng cáo",
    "audioSrc": "/audio/test2_2023.mp3",
    "startTime": 1901.43,
    "endTime": 1981.82,
    "transcript": [
      {
        "id": "p4-71-1",
        "speaker": "Speaker",
        "text": "Looking for an interesting activity to celebrate the coming of spring?",
        "vietnamese": "Bạn đang tìm kiếm một hoạt động thú vị để chào mừng mùa xuân đang đến?"
      },
      {
        "id": "p4-71-2",
        "speaker": "Speaker",
        "text": "Winford Gardens offers an escape filled with calm, peace, and quiet just a few miles from the downtown area.",
        "vietnamese": "Winford Gardens mang đến một lối thoát đầy bình yên, thanh bình và yên tĩnh chỉ cách khu vực trung tâm thành phố vài dặm."
      },
      {
        "id": "p4-71-3",
        "speaker": "Speaker",
        "text": "Winford Gardens has acres of outdoor gardens filled with plants you won't typically find anywhere near here.",
        "vietnamese": "Winford Gardens có nhiều mẫu vườn ngoài trời trồng đầy cây mà bạn thường không tìm thấy ở bất kỳ nơi nào gần đây."
      },
      {
        "id": "p4-71-4",
        "speaker": "Speaker",
        "text": "This weekend we will have an exhibition of Mexican blue palms.",
        "vietnamese": "Cuối tuần này chúng tôi sẽ có cuộc triển lãm về cây cọ xanh Mexico."
      },
      {
        "id": "p4-71-5",
        "speaker": "Speaker",
        "text": "If you have never seen these striking and unique plants, now is your chance.",
        "vietnamese": "Nếu bạn chưa bao giờ nhìn thấy những loài cây nổi bật và độc đáo này thì bây giờ là cơ hội cho bạn."
      }
    ],
    "questions": [
      {
        "num": 71,
        "question": "What is being advertised?",
        "vietnameseQuestion": "Những gì đang được quảng cáo?",
        "options": [
          {
            "key": "A",
            "text": "A trip to Mexico",
            "vietnamese": "Một chuyến đi đến Mexico"
          },
          {
            "key": "B",
            "text": "A city tour",
            "vietnamese": "Một chuyến tham quan thành phố"
          },
          {
            "key": "C",
            "text": "A farm visit",
            "vietnamese": "Một chuyến thăm trang trại"
          },
          {
            "key": "D",
            "text": "A botanical garden",
            "vietnamese": "Một vườn thực vật"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là (D): \"A botanical garden\" (Một vườn thực vật)."
      },
      {
        "num": 72,
        "question": "What event is happening this weekend?",
        "vietnameseQuestion": "Sự kiện gì đang diễn ra vào cuối tuần này?",
        "options": [
          {
            "key": "A",
            "text": "A competition will be held.",
            "vietnamese": "Một cuộc thi sẽ được tổ chức."
          },
          {
            "key": "B",
            "text": "Special plants will be on display.",
            "vietnamese": "Những cây đặc biệt sẽ được trưng bày."
          },
          {
            "key": "C",
            "text": "Crops will be planted.",
            "vietnamese": "Cây trồng sẽ được trồng."
          },
          {
            "key": "D",
            "text": "Aspecial sale will take place.",
            "vietnamese": "Một đợt giảm giá đặc biệt sẽ diễn ra."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"Special plants will be on display.\" (Những cây đặc biệt sẽ được trưng bày.)."
      },
      {
        "num": 73,
        "question": "What does the speaker say about a cafe building?",
        "vietnameseQuestion": "Người nói nói gì về việc xây dựng một quán cà phê?",
        "options": [
          {
            "key": "A",
            "text": "It will soon be repainted.",
            "vietnamese": "Nó sẽ sớm được sơn lại."
          },
          {
            "key": "B",
            "text": "It was once a greenhouse.",
            "vietnamese": "Nó từng là một nhà kính."
          },
          {
            "key": "C",
            "text": "It is located near public transportation.",
            "vietnamese": "Nó nằm gần giao thông công cộng."
          },
          {
            "key": "D",
            "text": "It is closed this spring.",
            "vietnamese": "Nó đóng cửa vào mùa xuân này."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"It was once a greenhouse.\" (Nó từng là một nhà kính.)."
      }
    ],
    "vocabulary": [
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
    "title": "Part 4 - Câu 74 - 76: Người nói rất có thể là ai",
    "audioSrc": "/audio/test2_2023.mp3",
    "startTime": 1981.82,
    "endTime": 2041.9,
    "transcript": [
      {
        "id": "p4-74-1",
        "speaker": "Speaker",
        "text": "Good afternoon. Welcome to this week's Managers meeting here at South Truck Deliveries.",
        "vietnamese": "Chào buổi chiều. Chào mừng bạn đến với cuộc họp các Nhà quản lý tuần này tại South Truck Deliveryies."
      },
      {
        "id": "p4-74-2",
        "speaker": "Speaker",
        "text": "As you know, we've always written performance evaluations for our drivers and other employees on paper. I am pleased to announce some important changes.",
        "vietnamese": "Như bạn biết, chúng tôi luôn viết các đánh giá hiệu suất cho tài xế và các nhân viên khác trên giấy. Tôi vui mừng thông báo một số thay đổi quan trọng."
      },
      {
        "id": "p4-74-3",
        "speaker": "Speaker",
        "text": "Beginning this year, we will use a software application called personnel profile to enter performance appraisals. Let me introduce Ms. Y Young Lee, the head of our IT department.",
        "vietnamese": "Bắt đầu từ năm nay, chúng tôi sẽ sử dụng một ứng dụng phần mềm có tên là hồ sơ nhân sự để đánh giá hiệu suất. Hãy để tôi giới thiệu cô Y Young Lee, trưởng bộ phận CNTT của chúng tôi."
      }
    ],
    "questions": [
      {
        "num": 74,
        "question": "Who most likely is the speaker?",
        "vietnameseQuestion": "Người nói rất có thể là ai?",
        "options": [
          {
            "key": "A",
            "text": "A salesperson",
            "vietnamese": "Một nhân viên bán hàng"
          },
          {
            "key": "B",
            "text": "Amanager",
            "vietnamese": "Người quản lý"
          },
          {
            "key": "C",
            "text": "A safety inspector",
            "vietnamese": "Một thanh tra an toàn"
          },
          {
            "key": "D",
            "text": "A software developer",
            "vietnamese": "Một nhà phát triển phần mềm"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"Amanager\" (Người quản lý)."
      },
      {
        "num": 75,
        "question": "What is the main topic of the talk?",
        "vietnameseQuestion": "Chủ đề chính của cuộc nói chuyện là gì?",
        "options": [
          {
            "key": "A",
            "text": "Adelivery route",
            "vietnamese": "Lộ trình giao hàng"
          },
          {
            "key": "B",
            "text": "A corporate merger",
            "vietnamese": "Sự sáp nhập doanh nghiệp"
          },
          {
            "key": "C",
            "text": "Performancereviews",
            "vietnamese": "Đánh giá hiệu suất"
          },
          {
            "key": "D",
            "text": "Hiring procedures",
            "vietnamese": "Thủ tục tuyển dụng"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"Performancereviews\" (Đánh giá hiệu suất)."
      },
      {
        "num": 76,
        "question": "What doesthespeaker ask thelisteners to do?",
        "vietnameseQuestion": "Người nói yêu cầu người nghe làm gì?",
        "options": [
          {
            "key": "A",
            "text": "Pass along some information to workers",
            "vietnamese": "Truyền đạt một số thông tin cho người lao động"
          },
          {
            "key": "B",
            "text": "Sign up for a training course",
            "vietnamese": "Đăng ký một khóa đào tạo"
          },
          {
            "key": "C",
            "text": "Get some information from customers",
            "vietnamese": "Lấy một số thông tin từ khách hàng"
          },
          {
            "key": "D",
            "text": "Talk with employees about their goals for the year",
            "vietnamese": "Nói chuyện với nhân viên về mục tiêu của họ trong năm"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"Sign up for a training course\" (Đăng ký một khóa đào tạo)."
      }
    ],
    "vocabulary": [
      {
        "word": "performance",
        "meaning": "buổi biểu diễn",
        "partOfSpeech": "n"
      },
      {
        "word": "software",
        "meaning": "phần mềm máy tính",
        "partOfSpeech": "n"
      },
      {
        "word": "personnel",
        "meaning": "nhân sự",
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
    "id": "part4-77-79",
    "part": 4,
    "partTitle": "Part 4: Bài nói chuyện",
    "questionRange": "Câu 77 - 79",
    "title": "Part 4 - Câu 77 - 79: Người nói có nhiều khả năng sẽ gọi nhất là ai",
    "audioSrc": "/audio/test2_2023.mp3",
    "startTime": 2041.9,
    "endTime": 2126.14,
    "transcript": [
      {
        "id": "p4-77-1",
        "speaker": "Speaker",
        "text": "Hi. This is Ms. Mitra. You're scheduled to move my furniture to my new apartment tomorrow morning at 8. I'm calling because I just learnt that the freight elevator in my building is broken and my apartment is on a very high floor.",
        "vietnamese": "Xin chào. Đây là cô Mitra. Bạn dự định chuyển đồ đạc của tôi đến căn hộ mới của tôi vào lúc 8 giờ sáng mai. Tôi gọi điện vì tôi vừa được biết rằng thang máy chở hàng trong tòa nhà của tôi bị hỏng và căn hộ của tôi ở trên một tầng rất cao."
      },
      {
        "id": "p4-77-2",
        "speaker": "Speaker",
        "text": "I will check first thing tomorrow morning to see what the situation is, but please give me a call as soon as you can. I have an overseas trip coming up next week so this work will have to happen soon.",
        "vietnamese": "Đầu tiên, tôi sẽ kiểm tra vào sáng mai để xem tình hình thế nào, nhưng vui lòng gọi cho tôi ngay khi có thể. Tuần sau tôi sắp có chuyến công tác nước ngoài nên công việc này sẽ phải thực hiện sớm."
      }
    ],
    "questions": [
      {
        "num": 77,
        "question": "Who is the speaker most likely calling?",
        "vietnameseQuestion": "Người nói có nhiều khả năng sẽ gọi nhất là ai?",
        "options": [
          {
            "key": "A",
            "text": "Arealestatefirm",
            "vietnamese": "Khu vực công ty nhà nước"
          },
          {
            "key": "B",
            "text": "A moving company",
            "vietnamese": "Một công ty chuyển nhà"
          },
          {
            "key": "C",
            "text": "A travel agency",
            "vietnamese": "Một đại lý du lịch"
          },
          {
            "key": "D",
            "text": "A furniture store",
            "vietnamese": "Một cửa hàng nội thất"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"A moving company\" (Một công ty chuyển nhà)."
      },
      {
        "num": 78,
        "question": "Whydoesthespeakersay,\"myapartmentis on a very high floor\"?",
        "vietnameseQuestion": "Tại sao người nói lại nói \"căn hộ của tôi ở tầng rất cao\"?",
        "options": [
          {
            "key": "A",
            "text": "To correct a misunderstanding",
            "vietnamese": "Để sửa chữa một sự hiểu lầm"
          },
          {
            "key": "B",
            "text": "To negotiate a price",
            "vietnamese": "Để thương lượng giá"
          },
          {
            "key": "C",
            "text": "To ask about a property's value",
            "vietnamese": "Để hỏi về giá trị của một tài sản"
          },
          {
            "key": "D",
            "text": "To warn about a situation",
            "vietnamese": "Để cảnh báo về một tình huống"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là (D): \"To warn about a situation\" (Để cảnh báo về một tình huống)."
      },
      {
        "num": 79,
        "question": "What will the speaker do next week?",
        "vietnameseQuestion": "Người nói sẽ làm gì vào tuần tới?",
        "options": [
          {
            "key": "A",
            "text": "Host an event",
            "vietnamese": "Tổ chức một sự kiện"
          },
          {
            "key": "B",
            "text": "Make a payment",
            "vietnamese": "Thực hiện thanh toán"
          },
          {
            "key": "C",
            "text": "Travel abroad",
            "vietnamese": "Du lịch nước ngoài"
          },
          {
            "key": "D",
            "text": "Begin a new job",
            "vietnamese": "Bắt đầu một công việc mới"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"Travel abroad\" (Du lịch nước ngoài)."
      }
    ],
    "vocabulary": [
      {
        "word": "scheduled",
        "meaning": "được lên lịch trình",
        "partOfSpeech": "adj"
      },
      {
        "word": "furniture",
        "meaning": "đồ nội thất",
        "partOfSpeech": "n"
      },
      {
        "word": "floor",
        "meaning": "tầng, sàn nhà",
        "partOfSpeech": "n"
      },
      {
        "word": "overseas",
        "meaning": "ở hải ngoại, ở nước ngoài",
        "partOfSpeech": "adv"
      }
    ]
  },
  {
    "id": "part4-80-82",
    "part": 4,
    "partTitle": "Part 4: Bài nói chuyện",
    "questionRange": "Câu 80 - 82",
    "title": "Part 4 - Câu 80 - 82: Tại sao người nghe có thể thất vọng",
    "audioSrc": "/audio/test2_2023.mp3",
    "startTime": 2126.14,
    "endTime": 2219.75,
    "transcript": [
      {
        "id": "p4-80-1",
        "speaker": "Speaker",
        "text": "Good evening everyone. Welcome to a new season of City Opera. I bring some bad news I'm afraid.",
        "vietnamese": "Chào buổi tối mọi người. Chào mừng đến với mùa giải mới của City Opera. Tôi e rằng tôi mang đến một số tin xấu."
      },
      {
        "id": "p4-80-2",
        "speaker": "Speaker",
        "text": "So, Prano Lisa Gornica informed me earlier today that she will not be able to perform tonight. I know how disappointing this is. But I also have good news.",
        "vietnamese": "Vì vậy, Prano Lisa Gornica đã thông báo với tôi sớm hôm nay rằng cô ấy sẽ không thể biểu diễn tối nay. Tôi biết điều này đáng thất vọng như thế nào. Nhưng tôi cũng có tin tốt."
      },
      {
        "id": "p4-80-3",
        "speaker": "Speaker",
        "text": "So, Prano Rita Marks is in town and has agreed to step in for Ms. Gornica. Not only is Ms. Marks familiar with the role of Laura, but she also knows the choreography since she worked with our director when this production premiered in Toronto.",
        "vietnamese": "Vì vậy, Prano Rita Marks đang ở trong thị trấn và đã đồng ý thay thế cô Gornica. Cô Marks không chỉ quen thuộc với vai Laura mà còn biết vũ đạo kể từ khi cô làm việc với đạo diễn của chúng tôi khi bộ phim này ra mắt ở Toronto."
      },
      {
        "id": "p4-80-4",
        "speaker": "Speaker",
        "text": "Wondering what her voice is like? Well, judge for yourself, but I saw the reviews from Toronto. I can guarantee that we are in for a treat.",
        "vietnamese": "Bạn đang thắc mắc giọng nói của cô ấy như thế nào? Vâng, hãy tự đánh giá, nhưng tôi đã xem các đánh giá từ Toronto. Tôi có thể đảm bảo rằng chúng tôi đang được chiêu đãi."
      }
    ],
    "questions": [
      {
        "num": 80,
        "question": "Why might the listeners be disappointed?",
        "vietnameseQuestion": "Tại sao người nghe có thể thất vọng?",
        "options": [
          {
            "key": "A",
            "text": "Aperformancehasbeen canceled.",
            "vietnamese": "Buổi biểu diễn đã bị hủy bỏ."
          },
          {
            "key": "B",
            "text": "A performer will not be appearing.",
            "vietnamese": "Một nghệ sĩ biểu diễn sẽ không xuất hiện."
          },
          {
            "key": "C",
            "text": "A new production will be delayed.",
            "vietnamese": "Việc sản xuất mới sẽ bị trì hoãn."
          },
          {
            "key": "D",
            "text": "A production is not new.",
            "vietnamese": "Một sản phẩm không phải là mới."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"A performer will not be appearing.\" (Một nghệ sĩ biểu diễn sẽ không xuất hiện.)."
      },
      {
        "num": 81,
        "question": "What does the speaker indicate about Rita Marks?",
        "vietnameseQuestion": "Người nói chỉ ra điều gì về Rita Marks?",
        "options": [
          {
            "key": "A",
            "text": "She has flown in from Toronto.",
            "vietnamese": "Cô ấy đã bay đến từ Toronto."
          },
          {
            "key": "B",
            "text": "Shetaughtthe speaker.",
            "vietnamese": "Cô ấy đã dạy người nói."
          },
          {
            "key": "C",
            "text": "She has experience with a role.",
            "vietnamese": "Cô ấy có kinh nghiệm với một vai diễn."
          },
          {
            "key": "D",
            "text": "She is a good friend of the speaker's.",
            "vietnamese": "Cô ấy là một người bạn tốt của diễn giả."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"She has experience with a role.\" (Cô ấy có kinh nghiệm với một vai diễn.)."
      },
      {
        "num": 82,
        "question": "Whatdoes the speaker imply when hesays, \"IsawthereviewsfromToronto\"?",
        "vietnameseQuestion": "Người nói có ý gì khi nói \"IsawthereviewsfromToronto\"?",
        "options": [
          {
            "key": "A",
            "text": "Heattended the opera in Toronto.",
            "vietnamese": "Làm nóng vở opera ở Toronto."
          },
          {
            "key": "B",
            "text": "An audience disliked Lisa Gornicka.",
            "vietnamese": "Khán giả không thích Lisa Gornicka."
          },
          {
            "key": "C",
            "text": "Critics disagree about Rita Marks's performance.",
            "vietnamese": "Các nhà phê bình không đồng ý về màn trình diễn của Rita Marks."
          },
          {
            "key": "D",
            "text": "Rita Marks has been praised for her singing. GOONTOTHENEXTPAGE TEST243",
            "vietnamese": "Rita Marks đã được khen ngợi về giọng hát. GONTOTHENEXTPAGE TEST243"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là (D): \"Rita Marks has been praised for her singing. GOONTOTHENEXTPAGE TEST243\" (Rita Marks đã được khen ngợi về giọng hát. GONTOTHENEXTPAGE TEST243)."
      }
    ],
    "vocabulary": [
      {
        "word": "bring",
        "meaning": "mang theo, đem lại",
        "partOfSpeech": "v"
      },
      {
        "word": "treat",
        "meaning": "sự thết đãi, bao chầu",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part4-83-85",
    "part": 4,
    "partTitle": "Part 4: Bài nói chuyện",
    "questionRange": "Câu 83 - 85",
    "title": "Part 4 - Câu 83 - 85: Người nói có khả năng làm việc ở đâu nhất",
    "audioSrc": "/audio/test2_2023.mp3",
    "startTime": 2219.75,
    "endTime": 2297.49,
    "transcript": [
      {
        "id": "p4-83-1",
        "speaker": "Speaker",
        "text": "Thank you for inviting me and other members of the marketing department to this meeting of the research and development team.",
        "vietnamese": "Cảm ơn bạn đã mời tôi và các thành viên khác của bộ phận tiếp thị tham dự cuộc họp này của nhóm nghiên cứu và phát triển."
      },
      {
        "id": "p4-83-2",
        "speaker": "Speaker",
        "text": "We always welcome the opportunity to share customer information about our toys with you. I'd like to start off with some information about the remote control car that we launched in department stores and toy stores one month ago.",
        "vietnamese": "Chúng tôi luôn hoan nghênh cơ hội được chia sẻ thông tin khách hàng về đồ chơi của chúng tôi với bạn. Tôi muốn bắt đầu với một số thông tin về chiếc ô tô điều khiển từ xa mà chúng tôi đã tung ra thị trường các cửa hàng bách hóa và cửa hàng đồ chơi một tháng trước."
      },
      {
        "id": "p4-83-3",
        "speaker": "Speaker",
        "text": "It's been a mixed bag. Customers love the smooth action of the car and the high speed it can achieve. However, they are somewhat disappointed with the rechargeable battery the car comes with. I encourage your team to find ways to make the battery charge faster and last longer.",
        "vietnamese": "Đó là một túi hỗn hợp. Khách hàng yêu thích khả năng vận hành êm ái của chiếc xe và tốc độ cao mà nó có thể đạt được. Tuy nhiên, họ có phần thất vọng với cục pin sạc đi kèm trên xe. Tôi khuyến khích nhóm của bạn tìm cách sạc pin nhanh hơn và sử dụng lâu hơn."
      }
    ],
    "questions": [
      {
        "num": 83,
        "question": "Where does the speaker most likelywork?",
        "vietnameseQuestion": "Người nói có khả năng làm việc ở đâu nhất?",
        "options": [
          {
            "key": "A",
            "text": "At an automobile company",
            "vietnamese": "Tại một công ty ô tô"
          },
          {
            "key": "B",
            "text": "At a data analysis company",
            "vietnamese": "Tại một công ty phân tích dữ liệu"
          },
          {
            "key": "C",
            "text": "At a toy manufacturer",
            "vietnamese": "Tại một nhà sản xuất đồ chơi"
          },
          {
            "key": "D",
            "text": "At a department store",
            "vietnamese": "Tại một cửa hàng bách hóa"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"At a toy manufacturer\" (Tại một nhà sản xuất đồ chơi)."
      },
      {
        "num": 84,
        "question": "What does the speaker mean when she says,\"It's been a mixed bag\"?",
        "vietnameseQuestion": "Người nói có ý gì khi nói \"It's been a mix bag\"?",
        "options": [
          {
            "key": "A",
            "text": "The product she is discussing cannot be returned for a refund.",
            "vietnamese": "Sản phẩm mà cô ấy đang thảo luận không thể được trả lại để hoàn lại tiền."
          },
          {
            "key": "B",
            "text": "Customers often purchase more than one ofthe product.",
            "vietnamese": "Khách hàng thường mua nhiều hơn một sản phẩm."
          },
          {
            "key": "C",
            "text": "A competitor has developed a similar product.",
            "vietnamese": "Một đối thủ cạnh tranh đã phát triển một sản phẩm tương tự."
          },
          {
            "key": "D",
            "text": "A product has had both positive and negative reviews.",
            "vietnamese": "Một sản phẩm có cả đánh giá tích cực và tiêu cực."
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là (D): \"A product has had both positive and negative reviews.\" (Một sản phẩm có cả đánh giá tích cực và tiêu cực.)."
      },
      {
        "num": 85,
        "question": "What does the speaker ask the listeners to do?",
        "vietnameseQuestion": "Người nói yêu cầu người nghe làm gì?",
        "options": [
          {
            "key": "A",
            "text": "Try using the product she is discussing",
            "vietnamese": "Hãy thử sử dụng sản phẩm cô ấy đang thảo luận"
          },
          {
            "key": "B",
            "text": "Improve one part of the product",
            "vietnamese": "Cải thiện một phần của sản phẩm"
          },
          {
            "key": "C",
            "text": "Get more information from customers",
            "vietnamese": "Nhận thêm thông tin từ khách hàng"
          },
          {
            "key": "D",
            "text": "Collaborate with the marketing team",
            "vietnamese": "Phối hợp với đội ngũ tiếp thị"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"Improve one part of the product\" (Cải thiện một phần của sản phẩm)."
      }
    ],
    "vocabulary": [
      {
        "word": "department",
        "meaning": "phòng ban",
        "partOfSpeech": "n"
      },
      {
        "word": "share",
        "meaning": "dùng chung, chia sẻ",
        "partOfSpeech": "v"
      },
      {
        "word": "achieve",
        "meaning": "đạt được",
        "partOfSpeech": "v"
      },
      {
        "word": "charge",
        "meaning": "sạc pin, nạp điện",
        "partOfSpeech": "v"
      }
    ]
  },
  {
    "id": "part4-86-88",
    "part": 4,
    "partTitle": "Part 4: Bài nói chuyện",
    "questionRange": "Câu 86 - 88",
    "title": "Part 4 - Câu 86 - 88: Thông báo có nhiều khả năng được thực hiện nhất ở đâu",
    "audioSrc": "/audio/test2_2023.mp3",
    "startTime": 2297.49,
    "endTime": 2377.04,
    "transcript": [
      {
        "id": "p4-86-1",
        "speaker": "Speaker",
        "text": "Attention shop smart shoppers. In case you didn't pick up our flyer, we are kicking off a shop smart giveaway event. For every two cans of shop smart soup or vegetables that you buy, you'll be entered in a drawing to win a gift certificate that can be used at any shop smart location.",
        "vietnamese": "Các bạn mua sắm thông minh hãy chú ý nhé. Trong trường hợp bạn không nhận tờ rơi của chúng tôi, chúng tôi sẽ bắt đầu một sự kiện tặng quà thông minh tại cửa hàng. Với mỗi hai lon súp hoặc rau thông minh của cửa hàng mà bạn mua, bạn sẽ được tham gia rút thăm trúng thưởng một phiếu quà tặng có thể sử dụng tại bất kỳ địa điểm thông minh nào của cửa hàng."
      },
      {
        "id": "p4-86-2",
        "speaker": "Speaker",
        "text": "Gift certificates worth $100 each will be awarded to three lucky shoppers on May 1st. This offer is good only for shop smart brand canned goods. Act now, stock up and join the giveaway. The more you buy, the more chances you have to win.",
        "vietnamese": "Phiếu quà tặng trị giá 100 USD mỗi phiếu sẽ được trao cho ba người mua hàng may mắn vào ngày 1 tháng 5. Ưu đãi này chỉ phù hợp với các cửa hàng đồ hộp có thương hiệu thông minh. Hãy hành động ngay, tích trữ và tham gia nhận quà. Mua càng nhiều, bạn càng có nhiều cơ hội giành chiến thắng."
      }
    ],
    "questions": [
      {
        "num": 86,
        "question": "Where isthe announcementmost likely being made?",
        "vietnameseQuestion": "Thông báo có nhiều khả năng được thực hiện nhất ở đâu?",
        "options": [
          {
            "key": "A",
            "text": "At a supermarket",
            "vietnamese": "Tại một siêu thị"
          },
          {
            "key": "B",
            "text": "At a community center",
            "vietnamese": "Tại một trung tâm cộng đồng"
          },
          {
            "key": "C",
            "text": "At a restaurant",
            "vietnamese": "Tại một nhà hàng"
          },
          {
            "key": "D",
            "text": "At a shopping mall",
            "vietnamese": "Tại một trung tâm mua sắm"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là (A): \"At a supermarket\" (Tại một siêu thị)."
      },
      {
        "num": 87,
        "question": "What is the main topic of the announcement?",
        "vietnameseQuestion": "Chủ đề chính của thông báo là gì?",
        "options": [
          {
            "key": "A",
            "text": "A discount offer",
            "vietnamese": "Ưu đãi giảm giá"
          },
          {
            "key": "B",
            "text": "Anew product",
            "vietnamese": "Sản phẩm mới"
          },
          {
            "key": "C",
            "text": "Agiveaway",
            "vietnamese": "tặng quà"
          },
          {
            "key": "D",
            "text": "A volunteer opportunity",
            "vietnamese": "Một cơ hội tình nguyện"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"Agiveaway\" (tặng quà)."
      },
      {
        "num": 88,
        "question": "What doesthespeaker say about some Shopsmartproducts?",
        "vietnameseQuestion": "Diễn giả nói gì về một số sản phẩm của Shopsmart?",
        "options": [
          {
            "key": "A",
            "text": "They are not available at all Shopsmart locations.",
            "vietnamese": "Chúng không có sẵn ở tất cả các địa điểm Shopsmart."
          },
          {
            "key": "B",
            "text": "They are acquired from overseas distributors.",
            "vietnamese": "Họ được mua lại từ các nhà phân phối ở nước ngoài."
          },
          {
            "key": "C",
            "text": "They are currently on sale.",
            "vietnamese": "Chúng hiện đang được bán."
          },
          {
            "key": "D",
            "text": "They are the only products that qualify for an event. 44",
            "vietnamese": "Chúng là những sản phẩm duy nhất đủ điều kiện cho một sự kiện. 44"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là (D): \"They are the only products that qualify for an event. 44\" (Chúng là những sản phẩm duy nhất đủ điều kiện cho một sự kiện. 44)."
      }
    ],
    "vocabulary": [
      {
        "word": "flyer",
        "meaning": "tờ rơi quảng cáo",
        "partOfSpeech": "n"
      },
      {
        "word": "gift",
        "meaning": "món quà",
        "partOfSpeech": "n"
      },
      {
        "word": "certificate",
        "meaning": "chứng chỉ, giấy chứng nhận",
        "partOfSpeech": "n"
      },
      {
        "word": "stock",
        "meaning": "nhập hàng vào kho, tích trữ",
        "partOfSpeech": "v"
      }
    ]
  },
  {
    "id": "part4-89-91",
    "part": 4,
    "partTitle": "Part 4: Bài nói chuyện",
    "questionRange": "Câu 89 - 91",
    "title": "Part 4 - Câu 89 - 91: Người nói được thuê để làm công việc gì",
    "audioSrc": "/audio/test2_2023.mp3",
    "startTime": 2377.04,
    "endTime": 2475.66,
    "transcript": [
      {
        "id": "p4-89-1",
        "speaker": "Speaker",
        "text": "Hi Mr. Collins, I'm calling from Silver's flooring. I was about to place your order for the maple floors that you wanted me to put in, but I decided to call you first.",
        "vietnamese": "Xin chào ông Collins, tôi gọi từ tầng Silver. Tôi định đặt hàng sàn gỗ phong mà bạn muốn tôi lắp đặt, nhưng tôi quyết định gọi cho bạn trước."
      },
      {
        "id": "p4-89-2",
        "speaker": "Speaker",
        "text": "I just found out that the hardwood distributor has lowered the price of the oak flooring. I think you originally preferred oak, but decided it was too expensive. The reduction looks to be about 15%. Please call me back and let me know if I should still order the maple for you, or if you would prefer that I order the oak.",
        "vietnamese": "Tôi mới biết nhà phân phối gỗ cứng đã hạ giá sàn gỗ sồi. Tôi nghĩ ban đầu bạn thích gỗ sồi hơn nhưng lại quyết định rằng nó quá đắt. Mức giảm có vẻ là khoảng 15%. Vui lòng gọi lại cho tôi và cho tôi biết liệu tôi có nên đặt hàng cây phong cho bạn hay không, hay bạn muốn tôi đặt mua gỗ sồi."
      }
    ],
    "questions": [
      {
        "num": 89,
        "question": "What work was the speaker hired to do?",
        "vietnameseQuestion": "Người nói được thuê để làm công việc gì?",
        "options": [
          {
            "key": "A",
            "text": "Deliverfirewood",
            "vietnamese": "Giao củi"
          },
          {
            "key": "B",
            "text": "Repair a roof",
            "vietnamese": "Sửa chữa một mái nhà"
          },
          {
            "key": "C",
            "text": "Install flooring",
            "vietnamese": "Lắp đặt sàn"
          },
          {
            "key": "D",
            "text": "Complete a landscaping job",
            "vietnamese": "Hoàn thành công việc tạo cảnh quan"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"Install flooring\" (Lắp đặt sàn)."
      },
      {
        "num": 90,
        "question": "What does the speaker say about the distributor?",
        "vietnameseQuestion": "Người nói nói gì về nhà phân phối?",
        "options": [
          {
            "key": "A",
            "text": "It lowered a price.",
            "vietnamese": "Nó hạ giá."
          },
          {
            "key": "B",
            "text": "It is no longer in business.",
            "vietnamese": "Nó không còn trong kinh doanh nữa."
          },
          {
            "key": "C",
            "text": "It expects a delay.",
            "vietnamese": "Nó mong đợi một sự chậm trễ."
          },
          {
            "key": "D",
            "text": "It has not responded to his request.",
            "vietnamese": "Nó đã không đáp ứng yêu cầu của anh ấy."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là (A): \"It lowered a price.\" (Nó hạ giá.)."
      },
      {
        "num": 91,
        "question": "Why did the speaker wait to place an order?",
        "vietnameseQuestion": "Tại sao người nói lại phải đợi để đặt hàng?",
        "options": [
          {
            "key": "A",
            "text": "He is not sure what quantity is needed.",
            "vietnamese": "Anh ấy không chắc chắn về số lượng cần thiết."
          },
          {
            "key": "B",
            "text": "He wants a customerto reconsider a decision.",
            "vietnamese": "Anh ấy muốn khách hàng xem xét lại quyết định của mình."
          },
          {
            "key": "C",
            "text": "He forgot what the customer requested.",
            "vietnamese": "Anh ta quên mất những gì khách hàng yêu cầu."
          },
          {
            "key": "D",
            "text": "He learned that a product is no longer available.",
            "vietnamese": "Anh ấy biết được rằng một sản phẩm không còn có sẵn nữa."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"He wants a customerto reconsider a decision.\" (Anh ấy muốn khách hàng xem xét lại quyết định của mình.)."
      }
    ],
    "vocabulary": [
      {
        "word": "flooring",
        "meaning": "sàn nhà, vật liệu lót sàn",
        "partOfSpeech": "n"
      },
      {
        "word": "order",
        "meaning": "gọi món, đặt hàng",
        "partOfSpeech": "v"
      },
      {
        "word": "found",
        "meaning": "thành lập, sáng lập",
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
    "id": "part4-92-94",
    "part": 4,
    "partTitle": "Part 4: Bài nói chuyện",
    "questionRange": "Câu 92 - 94",
    "title": "Part 4 - Câu 92 - 94: Người nói rất có thể là ai",
    "audioSrc": "/audio/test2_2023.mp3",
    "startTime": 2475.66,
    "endTime": 2545.11,
    "transcript": [
      {
        "id": "p4-92-1",
        "speaker": "Speaker",
        "text": "Welcome to the Central Valley Environmental Center. We are so grateful to all of you, our volunteers for coming out today to help with this project to install Bluebird Nest boxes.",
        "vietnamese": "Chào mừng đến với Trung tâm Môi trường Thung lũng Trung tâm. Chúng tôi rất biết ơn tất cả các bạn, những tình nguyện viên của chúng tôi, đã đến hôm nay để giúp đỡ dự án lắp đặt các hộp Bluebird Nest."
      },
      {
        "id": "p4-92-2",
        "speaker": "Speaker",
        "text": "The eastern Bluebird is a native species that plays an important role in our environment, but it's threatened by habitat loss and predation.",
        "vietnamese": "Bluebird phía đông là một loài bản địa đóng vai trò quan trọng trong môi trường của chúng ta, nhưng nó đang bị đe dọa do mất môi trường sống và bị săn mồi."
      },
      {
        "id": "p4-92-3",
        "speaker": "Speaker",
        "text": "We have numerous donated nest boxes here that will help protect our local Bluebird population. Remember that Bluebird's prefer open woodlands and grasslands with scattered trees.",
        "vietnamese": "Chúng tôi có rất nhiều hộp tổ được quyên góp ở đây để giúp bảo vệ quần thể Bluebird tại địa phương của chúng tôi. Hãy nhớ rằng Bluebird thích những khu rừng rộng mở và đồng cỏ có cây cối rải rác."
      },
      {
        "id": "p4-92-4",
        "speaker": "Speaker",
        "text": "Some suitable locations are already identified on the maps you've received.",
        "vietnamese": "Một số địa điểm phù hợp đã được xác định trên bản đồ bạn nhận được."
      }
    ],
    "questions": [
      {
        "num": 92,
        "question": "Who most likely is the speaker?",
        "vietnameseQuestion": "Người nói rất có thể là ai?",
        "options": [
          {
            "key": "A",
            "text": "Ateacher in a classroom",
            "vietnamese": "Giáo viên trong một lớp học"
          },
          {
            "key": "B",
            "text": "Aworkerat an environmental center",
            "vietnamese": "Aworkerat một trung tâm môi trường"
          },
          {
            "key": "C",
            "text": "A salesperson in a sporting goods store",
            "vietnamese": "Nhân viên bán hàng tại cửa hàng đồ thể thao"
          },
          {
            "key": "D",
            "text": "A guide in a natural history museum",
            "vietnamese": "Hướng dẫn trong bảo tàng lịch sử tự nhiên"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"Aworkerat an environmental center\" (Aworkerat một trung tâm môi trường)."
      },
      {
        "num": 93,
        "question": "What is the purpose of the project?",
        "vietnameseQuestion": "Mục đích của dự án là gì?",
        "options": [
          {
            "key": "A",
            "text": "To recruit volunteers",
            "vietnamese": "Để tuyển tình nguyện viên"
          },
          {
            "key": "B",
            "text": "To release bluebirds into the wild",
            "vietnamese": "Để thả chim xanh về tự nhiên"
          },
          {
            "key": "C",
            "text": "To provide shelter for bluebirds",
            "vietnamese": "Để cung cấp nơi trú ẩn cho chim xanh"
          },
          {
            "key": "D",
            "text": "To educate people about bluebirds",
            "vietnamese": "Để giáo dục mọi người về chim xanh"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là (C): \"To provide shelter for bluebirds\" (Để cung cấp nơi trú ẩn cho chim xanh)."
      },
      {
        "num": 94,
        "question": "Whatismarkedonsomemaps?",
        "vietnameseQuestion": "Những gì được đánh dấu trên một số bản đồ?",
        "options": [
          {
            "key": "A",
            "text": "Locationswhereworkcanbedone",
            "vietnamese": "Địa điểmnơi làm việc có thể được thực hiện"
          },
          {
            "key": "B",
            "text": "Flight patterns of bluebirds",
            "vietnamese": "Các kiểu bay của chim xanh"
          },
          {
            "key": "C",
            "text": "The location of nearby attractions",
            "vietnamese": "Vị trí các điểm tham quan lân cận"
          },
          {
            "key": "D",
            "text": "Directions to the environmental center Pattern WholesaleOrders (Number of complete sets) Everyday 7,000 Dawn 5,000 Cafe 2,000 Holiday 6,200 New Year 6.000 Harvest Festival 200",
            "vietnamese": "Chỉ đường đến trung tâm môi trường Mẫu Bán buôn Đơn hàng (Số lượng bộ hoàn chỉnh) Hàng ngày 7.000 Bình minh 5.000 Quán cà phê 2.000 Ngày lễ 6.200 Năm mới 6.000 Lễ hội thu hoạch 200"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là (A): \"Locationswhereworkcanbedone\" (Địa điểmnơi làm việc có thể được thực hiện)."
      }
    ],
    "vocabulary": [
      {
        "word": "project",
        "meaning": "dự án",
        "partOfSpeech": "n"
      },
      {
        "word": "install",
        "meaning": "cài đặt",
        "partOfSpeech": "v"
      },
      {
        "word": "local",
        "meaning": "thuộc địa phương",
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
    "id": "part4-95-97",
    "part": 4,
    "partTitle": "Part 4: Bài nói chuyện",
    "questionRange": "Câu 95 - 97",
    "title": "Part 4 - Câu 95 - 97: Công ty của diễn giả bán sản phẩm gì",
    "audioSrc": "/audio/test2_2023.mp3",
    "startTime": 2545.11,
    "endTime": 2634.76,
    "transcript": [
      {
        "id": "p4-95-1",
        "speaker": "Speaker",
        "text": "Hi everyone. I want to update you on sales of our lines of dishware after the introduction of our holiday themed patterns.",
        "vietnamese": "Chào mọi người. Tôi muốn cập nhật cho bạn về doanh số bán các dòng bát đĩa của chúng tôi sau khi giới thiệu các mẫu theo chủ đề ngày lễ của chúng tôi."
      },
      {
        "id": "p4-95-2",
        "speaker": "Speaker",
        "text": "Our everyday dishware continues to perform as expected. Also, I am pleased to report that our new year plates are a resounding success.",
        "vietnamese": "Bộ bát đĩa hàng ngày của chúng tôi tiếp tục hoạt động như mong đợi. Ngoài ra, tôi vui mừng thông báo rằng các tấm biển năm mới của chúng tôi đã thành công vang dội."
      },
      {
        "id": "p4-95-3",
        "speaker": "Speaker",
        "text": "Total wholesale orders have outpaced those of our popular dawn series of fine China.",
        "vietnamese": "Tổng số đơn đặt hàng bán buôn đã vượt xa số lượng đơn đặt hàng trong chuỗi bình minh phổ biến của chúng tôi về Trung Quốc."
      },
      {
        "id": "p4-95-4",
        "speaker": "Speaker",
        "text": "We spent a lot on the design for new year, so our CEO will be happy to learn that the investment has paid off.",
        "vietnamese": "Chúng tôi đã chi rất nhiều cho việc thiết kế cho năm mới, vì vậy Giám đốc điều hành của chúng tôi sẽ rất vui khi biết rằng khoản đầu tư đã được đền đáp."
      },
      {
        "id": "p4-95-5",
        "speaker": "Speaker",
        "text": "Looks like we will need to rethink the harvest festival brand though.",
        "vietnamese": "Có vẻ như chúng ta sẽ cần phải suy nghĩ lại về thương hiệu lễ hội thu hoạch."
      },
      {
        "id": "p4-95-6",
        "speaker": "Speaker",
        "text": "Unless total sales reach those of our cafe series by next year, we may even discontinue it.",
        "vietnamese": "Trừ khi tổng doanh thu đạt được từ chuỗi quán cà phê của chúng tôi vào năm tới, nếu không chúng tôi thậm chí có thể ngừng hoạt động."
      }
    ],
    "questions": [
      {
        "num": 95,
        "question": "What product does the speaker's company Sell?",
        "vietnameseQuestion": "Công ty của diễn giả bán sản phẩm gì?",
        "options": [
          {
            "key": "A",
            "text": "Bath towels",
            "vietnamese": "Khăn tắm"
          },
          {
            "key": "B",
            "text": "Dishware",
            "vietnamese": "Bộ bát đĩa"
          },
          {
            "key": "C",
            "text": "Tablecloths",
            "vietnamese": "Khăn trải bàn"
          },
          {
            "key": "D",
            "text": "Drinking glasses",
            "vietnamese": "ly uống nước"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"Dishware\" (Bộ bát đĩa)."
      },
      {
        "num": 96,
        "question": "Whywill theCEObepleased?",
        "vietnameseQuestion": "Tại sao CEO lại hài lòng?",
        "options": [
          {
            "key": "A",
            "text": "The company bought a new warehouse.",
            "vietnamese": "Công ty đã mua một nhà kho mới."
          },
          {
            "key": "B",
            "text": "Customerreviews have beenpositive.",
            "vietnamese": "Đánh giá của khách hàng đã tích cực."
          },
          {
            "key": "C",
            "text": "Shipping costs have gone down.",
            "vietnamese": "Chi phí vận chuyển đã giảm."
          },
          {
            "key": "D",
            "text": "An investment was successful.",
            "vietnamese": "Một khoản đầu tư đã thành công."
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là (D): \"An investment was successful.\" (Một khoản đầu tư đã thành công.)."
      },
      {
        "num": 97,
        "question": "Look at the graphic. What number of orders does the speaker say the Harvest Festival pattern must reach?",
        "vietnameseQuestion": "Nhìn vào đồ họa. Người nói cho rằng mô hình Lễ hội Thu hoạch phải đạt được số lượng đơn đặt hàng nào?",
        "options": [
          {
            "key": "A",
            "text": "5,000",
            "vietnamese": "5.000"
          },
          {
            "key": "B",
            "text": "2,000",
            "vietnamese": "2.000"
          },
          {
            "key": "C",
            "text": "6,000",
            "vietnamese": "6.000"
          },
          {
            "key": "D",
            "text": "200 PackageName NumberofGamesIncluded Holiday package 16 Sunday package Friday night package 19 36 Discountpackage TES1",
            "vietnamese": "200 Gói Tên Số Trò chơi Bao gồm Gói nghỉ lễ 16 Gói chủ nhật Gói tối thứ sáu 19 36 Gói giảm giá TES1"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"2,000\" (2.000)."
      }
    ],
    "vocabulary": [
      {
        "word": "update",
        "meaning": "cập nhật",
        "partOfSpeech": "v"
      },
      {
        "word": "sales",
        "meaning": "doanh số bán hàng",
        "partOfSpeech": "n"
      },
      {
        "word": "introduction",
        "meaning": "lời giới thiệu, phần mở đầu",
        "partOfSpeech": "n"
      },
      {
        "word": "design",
        "meaning": "thiết kế",
        "partOfSpeech": "v"
      }
    ],
    "graphicImage": "/images/intensive/test2_2023/q95_97.png"
  },
  {
    "id": "part4-98-100",
    "part": 4,
    "partTitle": "Part 4: Bài nói chuyện",
    "questionRange": "Câu 98 - 100",
    "title": "Part 4 - Câu 98 - 100: Người nói rất có thể là ai",
    "audioSrc": "/audio/test2_2023.mp3",
    "startTime": 2634.76,
    "endTime": 2744.83,
    "transcript": [
      {
        "id": "p4-98-1",
        "speaker": "Speaker",
        "text": "I'd like to welcome all of you to your first day of work at the Wildcat's Customer Service Office.",
        "vietnamese": "Tôi xin chào mừng tất cả các bạn đến với ngày làm việc đầu tiên tại Văn phòng Dịch vụ Khách hàng của Wildcat."
      },
      {
        "id": "p4-98-2",
        "speaker": "Speaker",
        "text": "Baseball season starts in exactly one month. We expect ticket sales to be very good because the Wildcats had such a great season last year.",
        "vietnamese": "Mùa bóng chày bắt đầu đúng một tháng nữa. Chúng tôi kỳ vọng doanh thu bán vé sẽ rất tốt vì Wildcats đã có một mùa giải tuyệt vời vào năm ngoái."
      },
      {
        "id": "p4-98-3",
        "speaker": "Speaker",
        "text": "As you can see on the chart, we have four packages. Make sure you let our customers know about the new Sunday package.",
        "vietnamese": "Như bạn có thể thấy trên biểu đồ, chúng tôi có bốn gói. Hãy đảm bảo bạn cho khách hàng của chúng tôi biết về gói Chủ nhật mới."
      },
      {
        "id": "p4-98-4",
        "speaker": "Speaker",
        "text": "It includes tickets for every Sunday home game throughout the season. Our Friday night package, holiday package and discount package were available last year and should remain popular.",
        "vietnamese": "Nó bao gồm vé cho mỗi trận đấu trên sân nhà vào Chủ nhật trong suốt mùa giải. Gói tối thứ sáu, gói kỳ nghỉ và gói giảm giá của chúng tôi đã có từ năm ngoái và sẽ vẫn được ưa chuộng."
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
            "text": "Abaseballplayer",
            "vietnamese": "cầu thủ bóng chày"
          },
          {
            "key": "B",
            "text": "A travel agent",
            "vietnamese": "Một đại lý du lịch"
          },
          {
            "key": "C",
            "text": "A new job applicant",
            "vietnamese": "Một người xin việc mới"
          },
          {
            "key": "D",
            "text": "A customer service trainer",
            "vietnamese": "Một huấn luyện viên dịch vụ khách hàng"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là (D): \"A customer service trainer\" (Một huấn luyện viên dịch vụ khách hàng)."
      },
      {
        "num": 99,
        "question": "Why are ticket sales expected to be good?",
        "vietnameseQuestion": "Tại sao doanh thu bán vé dự kiến sẽ tốt?",
        "options": [
          {
            "key": "A",
            "text": "The prices have been reduced.",
            "vietnamese": "Giá đã được giảm."
          },
          {
            "key": "B",
            "text": "The team's previous season was successful.",
            "vietnamese": "Mùa giải trước của đội đã thành công."
          },
          {
            "key": "C",
            "text": "There is a new advertising campaign.",
            "vietnamese": "Có một chiến dịch quảng cáo mới."
          },
          {
            "key": "D",
            "text": "Theteam has manynew players.",
            "vietnamese": "Đội có nhiều người chơi mới."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"The team's previous season was successful.\" (Mùa giải trước của đội đã thành công.)."
      },
      {
        "num": 100,
        "question": "Look at the graphic. How many games are included in the new ticket package that the speaker describes?",
        "vietnameseQuestion": "Nhìn vào đồ họa. Có bao nhiêu trò chơi được bao gồm trong gói vé mới mà người nói mô tả?",
        "options": [
          {
            "key": "A",
            "text": "6",
            "vietnamese": "6"
          },
          {
            "key": "B",
            "text": "16",
            "vietnamese": "16"
          },
          {
            "key": "C",
            "text": "19",
            "vietnamese": "19"
          },
          {
            "key": "D",
            "text": "36",
            "vietnamese": "36"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là (B): \"16\" (16)."
      }
    ],
    "vocabulary": [
      {
        "word": "sales",
        "meaning": "doanh số bán hàng",
        "partOfSpeech": "n"
      },
      {
        "word": "package",
        "meaning": "bưu kiện, gói hàng",
        "partOfSpeech": "n"
      },
      {
        "word": "discount",
        "meaning": "sự giảm giá, chiết khấu",
        "partOfSpeech": "n"
      },
      {
        "word": "available",
        "meaning": "rảnh rỗi, có sẵn",
        "partOfSpeech": "adj"
      }
    ],
    "graphicImage": "/images/intensive/test2_2023/q98_100.png"
  }
];

export function getIntensiveItemById(id: string): IntensiveListeningItem | undefined {
  return test2_2023_IntensiveData.find((item) => item.id === id);
}

export function getItemsByPart(part: 1 | 2 | 3 | 4): IntensiveListeningItem[] {
  return test2_2023_IntensiveData.filter((item) => item.part === part);
}
