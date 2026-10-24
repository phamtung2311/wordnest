// Dữ liệu luyện nghe chi tiết (Intensive Listening) - ETS TOEIC 2026 Test 1
// Nguồn Audio: Audio cut ETS 2026 Test 1
// Nguồn Transcript & Lời giải: Cuốn sách TRANSCRIPT2026.pdf

export interface DialogueLine {
  id: string;
  speaker?: string;
  text: string;
  vietnamese: string;
}

export interface QuestionOption {
  key: 'A' | 'B' | 'C' | 'D';
  text: string;
  vietnamese?: string;
}

export interface QuestionItem {
  num: number;
  question: string;
  vietnameseQuestion?: string;
  options: QuestionOption[];
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  explanation?: string;
  paraphraseGroup?: { original: string; paraphrase: string }[];
}

export interface VocabItem {
  word: string;
  meaning: string;
  partOfSpeech?: string;
}

export interface IntensiveListeningItem {
  id: string;
  part: 1 | 2 | 3 | 4;
  partTitle: string;
  questionRange: string;
  title: string;
  audioSrc: string;
  imageUrl?: string;
  image?: string;
  transcript: DialogueLine[];
  questions: QuestionItem[];
  vocabulary?: VocabItem[];
}

export const test1IntensiveData: IntensiveListeningItem[] = [
  {
    "id": "part1-1",
    "part": 1,
    "imageUrl": "/images/intensive/test1/q1.png",
    "partTitle": "Part 1: Mô tả hình ảnh",
    "questionRange": "Câu 1",
    "title": "Part 1 - Câu 1: Người phụ nữ mặc áo khoác",
    "audioSrc": "/audio/cuts/test1/E26-T01-01.mp3",
    "transcript": [
      {
        "id": "p1-1-a",
        "speaker": "Speaker",
        "text": "(A) The woman is carrying a tray of food.",
        "vietnamese": "(A) Người phụ nữ đang bê một khay đồ ăn."
      },
      {
        "id": "p1-1-b",
        "speaker": "Speaker",
        "text": "(B) The woman is wearing a jacket.",
        "vietnamese": "(B) Người phụ nữ đang mặc một chiếc áo khoác."
      },
      {
        "id": "p1-1-c",
        "speaker": "Speaker",
        "text": "(C) The woman is tying up her hair.",
        "vietnamese": "(C) Người phụ nữ đang buộc tóc."
      },
      {
        "id": "p1-1-d",
        "speaker": "Speaker",
        "text": "(D) The woman is removing her hat.",
        "vietnamese": "(D) Người phụ nữ đang cởi mũ."
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
            "text": "The woman is carrying a tray of food.",
            "vietnamese": "Người phụ nữ đang bê một khay thức ăn."
          },
          {
            "key": "B",
            "text": "The woman is wearing a jacket.",
            "vietnamese": "Người phụ nữ đang mặc một chiếc áo khoác."
          },
          {
            "key": "C",
            "text": "The woman is tying up her hair.",
            "vietnamese": "Người phụ nữ đang buộc tóc."
          },
          {
            "key": "D",
            "text": "The woman is removing her hat.",
            "vietnamese": "Người phụ nữ đang cởi mũ."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Người phụ nữ trong bức ảnh đang mặc áo khoác (is wearing a jacket)."
      }
    ],
    "vocabulary": [
      {
        "word": "carry",
        "meaning": "mang, bê, vác",
        "partOfSpeech": "v"
      },
      {
        "word": "tray",
        "meaning": "cái khay, mâm",
        "partOfSpeech": "n"
      },
      {
        "word": "tie up",
        "meaning": "buộc lên, cột lại",
        "partOfSpeech": "phr v"
      },
      {
        "word": "remove",
        "meaning": "tháo, cởi bỏ",
        "partOfSpeech": "v"
      }
    ]
  },
  {
    "id": "part1-2",
    "part": 1,
    "imageUrl": "/images/intensive/test1/q2.png",
    "partTitle": "Part 1: Mô tả hình ảnh",
    "questionRange": "Câu 2",
    "title": "Part 1 - Câu 2: Nhóm người xem sách",
    "audioSrc": "/audio/cuts/test1/E26-T01-02.mp3",
    "transcript": [
      {
        "id": "p1-2-a",
        "speaker": "Speaker",
        "text": "(A) Some people are standing next to a filing cabinet.",
        "vietnamese": "(A) Một số người đang đứng cạnh tủ tài liệu."
      },
      {
        "id": "p1-2-b",
        "speaker": "Speaker",
        "text": "(B) Some people are searching through a desk.",
        "vietnamese": "(B) Một số người đang lục tìm trong bàn làm việc."
      },
      {
        "id": "p1-2-c",
        "speaker": "Speaker",
        "text": "(C) Some people are watching a presentation.",
        "vietnamese": "(C) Một số người đang xem một bài thuyết trình."
      },
      {
        "id": "p1-2-d",
        "speaker": "Speaker",
        "text": "(D) Some people are looking at a book.",
        "vietnamese": "(D) Một số người đang nhìn vào một cuốn sách."
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
            "text": "Some people are standing next to a filing cabinet.",
            "vietnamese": "Một số người đang đứng cạnh tủ tài liệu."
          },
          {
            "key": "B",
            "text": "Some people are searching through a desk.",
            "vietnamese": "Một số người đang lục tìm trong bàn làm việc."
          },
          {
            "key": "C",
            "text": "Some people are watching a presentation.",
            "vietnamese": "Một số người đang theo dõi bài thuyết trình."
          },
          {
            "key": "D",
            "text": "Some people are looking at a book.",
            "vietnamese": "Một số người đang cùng nhìn vào một cuốn sách."
          }
        ],
        "correctAnswer": "D",
        "explanation": "Những người ngồi quanh bàn đang tập trung nhìn vào cuốn sách đang mở."
      }
    ],
    "vocabulary": [
      {
        "word": "filing cabinet",
        "meaning": "tủ đựng hồ sơ tài liệu",
        "partOfSpeech": "n"
      },
      {
        "word": "search through",
        "meaning": "lục lọi, tìm kiếm kỹ",
        "partOfSpeech": "v"
      },
      {
        "word": "presentation",
        "meaning": "bài thuyết trình",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part1-3",
    "part": 1,
    "imageUrl": "/images/intensive/test1/q3.png",
    "partTitle": "Part 1: Mô tả hình ảnh",
    "questionRange": "Câu 3",
    "title": "Part 1 - Câu 3: Đèn treo từ trần",
    "audioSrc": "/audio/cuts/test1/E26-T01-03.mp3",
    "transcript": [
      {
        "id": "p1-3-a",
        "speaker": "Speaker",
        "text": "(A) A woman is holding a phone up to her ear.",
        "vietnamese": "(A) Một người phụ nữ đang áp điện thoại vào tai."
      },
      {
        "id": "p1-3-b",
        "speaker": "Speaker",
        "text": "(B) A woman is pouring a beverage into a glass.",
        "vietnamese": "(B) Một người phụ nữ đang rót đồ uống vào ly."
      },
      {
        "id": "p1-3-c",
        "speaker": "Speaker",
        "text": "(C) Some light fixtures are hanging from the ceiling.",
        "vietnamese": "(C) Một số bộ đèn đang treo lơ lửng từ trần nhà."
      },
      {
        "id": "p1-3-d",
        "speaker": "Speaker",
        "text": "(D) Some tiles are being installed in a hallway.",
        "vietnamese": "(D) Một số viên gạch đang được lát ở hành lang."
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
            "text": "A woman is holding a phone up to her ear.",
            "vietnamese": "Một người phụ nữ đang cầm điện thoại lên tai."
          },
          {
            "key": "B",
            "text": "A woman is pouring a beverage into a glass.",
            "vietnamese": "Một người phụ nữ đang rót đồ uống vào ly."
          },
          {
            "key": "C",
            "text": "Some light fixtures are hanging from the ceiling.",
            "vietnamese": "Các bộ đèn đang treo lơ lửng từ trần nhà."
          },
          {
            "key": "D",
            "text": "Some tiles are being installed in a hallway.",
            "vietnamese": "Gạch lát đang được thi công ở hành lang."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Các bộ đèn (light fixtures) treo lơ lửng từ trần nhà (hanging from the ceiling)."
      }
    ],
    "vocabulary": [
      {
        "word": "light fixture",
        "meaning": "bộ đèn chiếu sáng, đèn treo",
        "partOfSpeech": "n"
      },
      {
        "word": "hang from",
        "meaning": "treo thõng từ",
        "partOfSpeech": "v"
      },
      {
        "word": "beverage",
        "meaning": "đồ uống, thức uống",
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
    "imageUrl": "/images/intensive/test1/q4.png",
    "partTitle": "Part 1: Mô tả hình ảnh",
    "questionRange": "Câu 4",
    "title": "Part 1 - Câu 4: Thùng gỗ chứa đầy rau củ",
    "audioSrc": "/audio/cuts/test1/E26-T01-04.mp3",
    "transcript": [
      {
        "id": "p1-4-a",
        "speaker": "Speaker",
        "text": "(A) A wooden crate is filled with vegetables.",
        "vietnamese": "(A) Một chiếc thùng gỗ chứa đầy rau củ."
      },
      {
        "id": "p1-4-b",
        "speaker": "Speaker",
        "text": "(B) One of the men is putting vegetables into a shopping bag.",
        "vietnamese": "(B) Một người đàn ông đang bỏ rau vào túi mua hàng."
      },
      {
        "id": "p1-4-c",
        "speaker": "Speaker",
        "text": "(C) A backpack has been set on the ground.",
        "vietnamese": "(C) Một chiếc ba lô đã được đặt trên mặt đất."
      },
      {
        "id": "p1-4-d",
        "speaker": "Speaker",
        "text": "(D) One of the men is reaching into a bucket.",
        "vietnamese": "(D) Một người đàn ông đang thò tay vào xô."
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
            "text": "A wooden crate is filled with vegetables.",
            "vietnamese": "Một thùng gỗ chứa đầy các loại rau củ."
          },
          {
            "key": "B",
            "text": "One of the men is putting vegetables into a shopping bag.",
            "vietnamese": "Một người đàn ông đang cho rau vào túi xách."
          },
          {
            "key": "C",
            "text": "A backpack has been set on the ground.",
            "vietnamese": "Chiếc ba lô đã được để dưới đất."
          },
          {
            "key": "D",
            "text": "One of the men is reaching into a bucket.",
            "vietnamese": "Một người đàn ông đang thò tay vào xô."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Chiếc thùng gỗ (wooden crate) chứa đầy rau củ (filled with vegetables)."
      }
    ],
    "vocabulary": [
      {
        "word": "wooden crate",
        "meaning": "thùng gỗ thưa, sọt gỗ",
        "partOfSpeech": "n"
      },
      {
        "word": "be filled with",
        "meaning": "chứa đầy",
        "partOfSpeech": "v"
      },
      {
        "word": "reach into",
        "meaning": "thò tay vào",
        "partOfSpeech": "v"
      }
    ]
  },
  {
    "id": "part1-5",
    "part": 1,
    "imageUrl": "/images/intensive/test1/q5.png",
    "partTitle": "Part 1: Mô tả hình ảnh",
    "questionRange": "Câu 5",
    "title": "Part 1 - Câu 5: Dụng cụ sơn trên sàn nhà",
    "audioSrc": "/audio/cuts/test1/E26-T01-05.mp3",
    "transcript": [
      {
        "id": "p1-5-a",
        "speaker": "Speaker",
        "text": "(A) Painting supplies have been laid out on the floor.",
        "vietnamese": "(A) Dụng cụ sơn đã được bày ra trên sàn nhà."
      },
      {
        "id": "p1-5-b",
        "speaker": "Speaker",
        "text": "(B) He's laying a brush down on a windowsill.",
        "vietnamese": "(B) Anh ấy đang đặt cây cọ xuống bậu cửa sổ."
      },
      {
        "id": "p1-5-c",
        "speaker": "Speaker",
        "text": "(C) He's lifting a can of paint by its handle.",
        "vietnamese": "(C) Anh ấy đang nhấc lon sơn bằng quai xách."
      },
      {
        "id": "p1-5-d",
        "speaker": "Speaker",
        "text": "(D) Cans of paint have been placed on a step stool.",
        "vietnamese": "(D) Các lon sơn đã được đặt trên ghế đẩu bậc."
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
            "text": "Painting supplies have been laid out on the floor.",
            "vietnamese": "Dụng cụ sơn đã được sắp sẵn trên sàn."
          },
          {
            "key": "B",
            "text": "He's laying a brush down on a windowsill.",
            "vietnamese": "Anh ấy đang đặt chiếc cọ xuống bậu cửa sổ."
          },
          {
            "key": "C",
            "text": "He's lifting a can of paint by its handle.",
            "vietnamese": "Anh ấy đang xách thùng sơn bằng quai."
          },
          {
            "key": "D",
            "text": "Cans of paint have been placed on a step stool.",
            "vietnamese": "Những lon sơn được đặt trên ghế đẩu bậc thang."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đồ dùng sơn (painting supplies) đã được trải sẵn trên mặt sàn (laid out on the floor)."
      }
    ],
    "vocabulary": [
      {
        "word": "supplies",
        "meaning": "dụng cụ, đồ dùng",
        "partOfSpeech": "n"
      },
      {
        "word": "lay out",
        "meaning": "bày biện, sắp đặt ra",
        "partOfSpeech": "v"
      },
      {
        "word": "windowsill",
        "meaning": "bậu cửa sổ",
        "partOfSpeech": "n"
      },
      {
        "word": "step stool",
        "meaning": "ghế đẩu bậc thang",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part1-6",
    "part": 1,
    "imageUrl": "/images/intensive/test1/q6.png",
    "partTitle": "Part 1: Mô tả hình ảnh",
    "questionRange": "Câu 6",
    "title": "Part 1 - Câu 6: Nước đọng trên lối đi",
    "audioSrc": "/audio/cuts/test1/E26-T01-06.mp3",
    "transcript": [
      {
        "id": "p1-6-a",
        "speaker": "Speaker",
        "text": "(A) A path is covered with fallen branches.",
        "vietnamese": "(A) Con đường mòn bị bao phủ bởi cành cây rơi rụng."
      },
      {
        "id": "p1-6-b",
        "speaker": "Speaker",
        "text": "(B) A tree is lying across a grassy area.",
        "vietnamese": "(B) Một cái cây nằm chắn ngang bãi cỏ."
      },
      {
        "id": "p1-6-c",
        "speaker": "Speaker",
        "text": "(C) Some water has pooled on a path.",
        "vietnamese": "(C) Nước đọng thành vũng trên một lối đi."
      },
      {
        "id": "p1-6-d",
        "speaker": "Speaker",
        "text": "(D) Some cyclists are riding through a field.",
        "vietnamese": "(D) Một số người đạp xe đang đi xuyên qua cánh đồng."
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
            "text": "A path is covered with fallen branches.",
            "vietnamese": "Lối đi phủ đầy cành cây rơi rụng."
          },
          {
            "key": "B",
            "text": "A tree is lying across a grassy area.",
            "vietnamese": "Cây đổ chắn ngang bãi cỏ."
          },
          {
            "key": "C",
            "text": "Some water has pooled on a path.",
            "vietnamese": "Nước đọng thành vũng trên lối đi."
          },
          {
            "key": "D",
            "text": "Some cyclists are riding through a field.",
            "vietnamese": "Những người đạp xe qua cánh đồng."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Có nước đọng thành vũng trên mặt đường đi (water has pooled on a path)."
      }
    ],
    "vocabulary": [
      {
        "word": "path",
        "meaning": "con đường nhỏ, lối đi",
        "partOfSpeech": "n"
      },
      {
        "word": "pool",
        "meaning": "đọng vũng (nước)",
        "partOfSpeech": "v"
      },
      {
        "word": "branch",
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
    "title": "Part 2 - Câu 7: Địa điểm tổ chức hội nghị",
    "audioSrc": "/audio/cuts/test1/E26-T01-07.mp3",
    "transcript": [
      {
        "id": "p2-7-q",
        "speaker": "Speaker 1",
        "text": "Where is the conference being held?",
        "vietnamese": "Hội nghị được tổ chức ở đâu?"
      },
      {
        "id": "p2-7-a",
        "speaker": "Speaker 2",
        "text": "(A) A three-day vacation.",
        "vietnamese": "(A) Kỳ nghỉ ba ngày."
      },
      {
        "id": "p2-7-b",
        "speaker": "Speaker 2",
        "text": "(B) At the Riverview Hotel.",
        "vietnamese": "(B) Tại khách sạn Riverview."
      },
      {
        "id": "p2-7-c",
        "speaker": "Speaker 2",
        "text": "(C) In the supply cabinet.",
        "vietnamese": "(C) Trong tủ đồ dùng."
      }
    ],
    "questions": [
      {
        "num": 7,
        "question": "Where is the conference being held?",
        "vietnameseQuestion": "Hội nghị được tổ chức ở đâu?",
        "options": [
          {
            "key": "A",
            "text": "A three-day vacation.",
            "vietnamese": "Kỳ nghỉ ba ngày."
          },
          {
            "key": "B",
            "text": "At the Riverview Hotel.",
            "vietnamese": "Tại khách sạn Riverview."
          },
          {
            "key": "C",
            "text": "In the supply cabinet.",
            "vietnamese": "Trong tủ đựng đồ dùng."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Câu hỏi bắt đầu bằng 'Where' hỏi về nơi chốn, câu trả lời phù hợp nhất là (B) 'At the Riverview Hotel'."
      }
    ],
    "vocabulary": [
      {
        "word": "conference",
        "meaning": "hội nghị",
        "partOfSpeech": "n"
      },
      {
        "word": "hold",
        "meaning": "tổ chức (sự kiện)",
        "partOfSpeech": "v"
      },
      {
        "word": "supply cabinet",
        "meaning": "tủ đựng đồ dùng văn phòng phẩm",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-8",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 8",
    "title": "Part 2 - Câu 8: Thời gian quản lý kho đến",
    "audioSrc": "/audio/cuts/test1/E26-T01-08.mp3",
    "transcript": [
      {
        "id": "p2-8-q",
        "speaker": "Speaker 1",
        "text": "When does the warehouse manager arrive?",
        "vietnamese": "Khi nào người quản lý kho đến?"
      },
      {
        "id": "p2-8-a",
        "speaker": "Speaker 2",
        "text": "(A) Sure, no problem.",
        "vietnamese": "(A) Chắc chắn rồi, không có gì."
      },
      {
        "id": "p2-8-b",
        "speaker": "Speaker 2",
        "text": "(B) About twelve shipping boxes.",
        "vietnamese": "(B) Khoảng 12 thùng giao hàng."
      },
      {
        "id": "p2-8-c",
        "speaker": "Speaker 2",
        "text": "(C) Not until this afternoon.",
        "vietnamese": "(C) Phải tới tận chiều nay."
      }
    ],
    "questions": [
      {
        "num": 8,
        "question": "When does the warehouse manager arrive?",
        "vietnameseQuestion": "Khi nào người quản lý kho đến?",
        "options": [
          {
            "key": "A",
            "text": "Sure, no problem.",
            "vietnamese": "Chắc chắn rồi, không vấn đề gì."
          },
          {
            "key": "B",
            "text": "About twelve shipping boxes.",
            "vietnamese": "Khoảng 12 thùng hàng chuyển đi."
          },
          {
            "key": "C",
            "text": "Not until this afternoon.",
            "vietnamese": "Phải đến tận chiều nay."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Câu hỏi 'When' hỏi thời gian, (C) 'Not until this afternoon' cung cấp mốc thời gian chính xác."
      }
    ],
    "vocabulary": [
      {
        "word": "warehouse",
        "meaning": "kho hàng",
        "partOfSpeech": "n"
      },
      {
        "word": "arrive",
        "meaning": "đến nơi",
        "partOfSpeech": "v"
      },
      {
        "word": "shipping box",
        "meaning": "thùng đóng gói giao hàng",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-9",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 9",
    "title": "Part 2 - Câu 9: Công viên gần đây",
    "audioSrc": "/audio/cuts/test1/E26-T01-09.mp3",
    "transcript": [
      {
        "id": "p2-9-q",
        "speaker": "Speaker 1",
        "text": "There's a nice park nearby, right?",
        "vietnamese": "Gần đây có một công viên đẹp đúng không?"
      },
      {
        "id": "p2-9-a",
        "speaker": "Speaker 2",
        "text": "(A) Did you order paper for the copier?",
        "vietnamese": "(A) Bạn đã đặt giấy cho máy photocopy chưa?"
      },
      {
        "id": "p2-9-b",
        "speaker": "Speaker 2",
        "text": "(B) Yes—it's next to Greendale Lake.",
        "vietnamese": "(B) Đúng vậy, nó ở ngay cạnh hồ Greendale."
      },
      {
        "id": "p2-9-c",
        "speaker": "Speaker 2",
        "text": "(C) They're in the parking garage.",
        "vietnamese": "(C) Họ đang ở trong nhà để xe."
      }
    ],
    "questions": [
      {
        "num": 9,
        "question": "There's a nice park nearby, right?",
        "vietnameseQuestion": "Gần đây có một công viên đẹp đúng không?",
        "options": [
          {
            "key": "A",
            "text": "Did you order paper for the copier?",
            "vietnamese": "Bạn đã đặt giấy cho máy photo chưa?"
          },
          {
            "key": "B",
            "text": "Yes—it's next to Greendale Lake.",
            "vietnamese": "Có chứ, nó nằm ngay cạnh hồ Greendale."
          },
          {
            "key": "C",
            "text": "They're in the parking garage.",
            "vietnamese": "Họ đang ở trong nhà để xe."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Câu hỏi đuôi xác nhận địa điểm, câu trả lời (B) xác nhận 'Yes' kèm địa điểm cụ thể bên hồ Greendale."
      }
    ],
    "vocabulary": [
      {
        "word": "nearby",
        "meaning": "ở gần đây",
        "partOfSpeech": "adv"
      },
      {
        "word": "copier",
        "meaning": "máy photocopy",
        "partOfSpeech": "n"
      },
      {
        "word": "parking garage",
        "meaning": "nhà để xe",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-10",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 10",
    "title": "Part 2 - Câu 10: Người gửi biên bản họp",
    "audioSrc": "/audio/cuts/test1/E26-T01-10.mp3",
    "transcript": [
      {
        "id": "p2-10-q",
        "speaker": "Speaker 1",
        "text": "Who sent the meeting minutes to the accounting department?",
        "vietnamese": "Ai đã gửi biên bản họp cho phòng kế toán?"
      },
      {
        "id": "p2-10-a",
        "speaker": "Speaker 2",
        "text": "(A) Our office assistant.",
        "vietnamese": "(A) Trợ lý văn phòng của chúng ta."
      },
      {
        "id": "p2-10-b",
        "speaker": "Speaker 2",
        "text": "(B) They have a savings account.",
        "vietnamese": "(B) Họ có một tài khoản tiết kiệm."
      },
      {
        "id": "p2-10-c",
        "speaker": "Speaker 2",
        "text": "(C) Cash and credit cards.",
        "vietnamese": "(C) Tiền mặt và thẻ tín dụng."
      }
    ],
    "questions": [
      {
        "num": 10,
        "question": "Who sent the meeting minutes to the accounting department?",
        "vietnameseQuestion": "Ai đã gửi biên bản cuộc họp cho phòng kế toán?",
        "options": [
          {
            "key": "A",
            "text": "Our office assistant.",
            "vietnamese": "Trợ lý văn phòng của chúng ta."
          },
          {
            "key": "B",
            "text": "They have a savings account.",
            "vietnamese": "Họ có một tài khoản tiết kiệm."
          },
          {
            "key": "C",
            "text": "Cash and credit cards.",
            "vietnamese": "Tiền mặt và thẻ tín dụng."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Câu hỏi 'Who' hỏi về người thực hiện, (A) 'Our office assistant' chỉ đối tượng thực hiện hành động gửi."
      }
    ],
    "vocabulary": [
      {
        "word": "meeting minutes",
        "meaning": "biên bản cuộc họp",
        "partOfSpeech": "n"
      },
      {
        "word": "accounting department",
        "meaning": "phòng kế toán",
        "partOfSpeech": "n"
      },
      {
        "word": "savings account",
        "meaning": "tài khoản tiết kiệm",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-11",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 11",
    "title": "Part 2 - Câu 11: Nhận xét về chuyên viên tài chính",
    "audioSrc": "/audio/cuts/test1/E26-T01-11.mp3",
    "transcript": [
      {
        "id": "p2-11-q",
        "speaker": "Speaker 1",
        "text": "I'd like to know what you think of our new finance analyst.",
        "vietnamese": "Tôi muốn biết bạn nghĩ gì về chuyên viên tài chính mới."
      },
      {
        "id": "p2-11-a",
        "speaker": "Speaker 2",
        "text": "(A) I've prepared the decorations for tomorrow.",
        "vietnamese": "(A) Tôi đã chuẩn bị đồ trang trí cho ngày mai."
      },
      {
        "id": "p2-11-b",
        "speaker": "Speaker 2",
        "text": "(B) He seems very competent.",
        "vietnamese": "(B) Anh ấy có vẻ rất có năng lực."
      },
      {
        "id": "p2-11-c",
        "speaker": "Speaker 2",
        "text": "(C) It's finally stopped raining.",
        "vietnamese": "(C) Cuối cùng trời cũng đã tạnh mưa."
      }
    ],
    "questions": [
      {
        "num": 11,
        "question": "I'd like to know what you think of our new finance analyst.",
        "vietnameseQuestion": "Tôi muốn biết bạn nghĩ thế nào về chuyên viên phân tích tài chính mới.",
        "options": [
          {
            "key": "A",
            "text": "I've prepared the decorations for tomorrow.",
            "vietnamese": "Tôi đã chuẩn bị đồ trang trí cho ngày mai."
          },
          {
            "key": "B",
            "text": "He seems very competent.",
            "vietnamese": "Anh ấy có vẻ rất có năng lực."
          },
          {
            "key": "C",
            "text": "It's finally stopped raining.",
            "vietnamese": "Trời cuối cùng cũng tạnh mưa rồi."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Câu hỏi xin ý kiến đánh giá về người mới ('what you think of...'), đáp án (B) nêu nhận định 'He seems very competent'."
      }
    ],
    "vocabulary": [
      {
        "word": "finance analyst",
        "meaning": "chuyên viên phân tích tài chính",
        "partOfSpeech": "n"
      },
      {
        "word": "competent",
        "meaning": "có năng lực, thành thạo",
        "partOfSpeech": "adj"
      },
      {
        "word": "decoration",
        "meaning": "đồ trang trí",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-12",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 12",
    "title": "Part 2 - Câu 12: Lời rủ đi dã ngoại công ty",
    "audioSrc": "/audio/cuts/test1/E26-T01-12.mp3",
    "transcript": [
      {
        "id": "p2-12-q",
        "speaker": "Speaker 1",
        "text": "Let's go on the company retreat.",
        "vietnamese": "Chúng ta hãy tham gia chuyến dã ngoại của công ty nhé."
      },
      {
        "id": "p2-12-a",
        "speaker": "Speaker 2",
        "text": "(A) Oh, did he?",
        "vietnamese": "(A) Ồ, anh ấy đã làm vậy à?"
      },
      {
        "id": "p2-12-b",
        "speaker": "Speaker 2",
        "text": "(B) Yes, that's a good idea.",
        "vietnamese": "(B) Vâng, đó là một ý kiến hay."
      },
      {
        "id": "p2-12-c",
        "speaker": "Speaker 2",
        "text": "(C) He tried to solve that problem.",
        "vietnamese": "(C) Anh ấy đã cố giải quyết vấn đề đó."
      }
    ],
    "questions": [
      {
        "num": 12,
        "question": "Let's go on the company retreat.",
        "vietnameseQuestion": "Chúng ta hãy đi dã ngoại cùng công ty nhé.",
        "options": [
          {
            "key": "A",
            "text": "Oh, did he?",
            "vietnamese": "Ồ, anh ấy đã làm vậy sao?"
          },
          {
            "key": "B",
            "text": "Yes, that's a good idea.",
            "vietnamese": "Vâng, ý kiến hay đấy."
          },
          {
            "key": "C",
            "text": "He tried to solve that problem.",
            "vietnamese": "Anh ấy đã cố gắng giải quyết bài toán đó."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Câu rủ 'Let's...', lời hồi đáp đồng thuận thích hợp nhất là 'Yes, that's a good idea'."
      }
    ],
    "vocabulary": [
      {
        "word": "company retreat",
        "meaning": "kỳ nghỉ dưỡng, dã ngoại gắn kết của công ty",
        "partOfSpeech": "n"
      },
      {
        "word": "solve",
        "meaning": "giải quyết",
        "partOfSpeech": "v"
      }
    ]
  },
  {
    "id": "part2-13",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 13",
    "title": "Part 2 - Câu 13: Giờ nhận kính mắt",
    "audioSrc": "/audio/cuts/test1/E26-T01-13.mp3",
    "transcript": [
      {
        "id": "p2-13-q",
        "speaker": "Speaker 1",
        "text": "What time can I pick up my glasses?",
        "vietnamese": "Mấy giờ tôi có thể đến lấy kính mắt?"
      },
      {
        "id": "p2-13-a",
        "speaker": "Speaker 2",
        "text": "(A) No, it's not very heavy.",
        "vietnamese": "(A) Không, nó không nặng lắm."
      },
      {
        "id": "p2-13-b",
        "speaker": "Speaker 2",
        "text": "(B) About twenty meters.",
        "vietnamese": "(B) Khoảng hai mươi mét."
      },
      {
        "id": "p2-13-c",
        "speaker": "Speaker 2",
        "text": "(C) We close at six o'clock.",
        "vietnamese": "(C) Chúng tôi đóng cửa lúc 6 giờ."
      }
    ],
    "questions": [
      {
        "num": 13,
        "question": "What time can I pick up my glasses?",
        "vietnameseQuestion": "Mấy giờ thì tôi có thể tới lấy kính?",
        "options": [
          {
            "key": "A",
            "text": "No, it's not very heavy.",
            "vietnamese": "Không, nó không nặng lắm."
          },
          {
            "key": "B",
            "text": "About twenty meters.",
            "vietnamese": "Khoảng 20 mét."
          },
          {
            "key": "C",
            "text": "We close at six o'clock.",
            "vietnamese": "Chúng tôi đóng cửa lúc 6 giờ."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Hỏi 'What time...', câu (C) gián tiếp trả lời bằng cách thông báo giờ đóng cửa để khách biết đến trước 6 giờ."
      }
    ],
    "vocabulary": [
      {
        "word": "pick up",
        "meaning": "đến lấy, đón",
        "partOfSpeech": "phr v"
      },
      {
        "word": "glasses",
        "meaning": "kính mắt",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-14",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 14",
    "title": "Part 2 - Câu 14: Phần mềm theo dõi của đội kinh doanh",
    "audioSrc": "/audio/cuts/test1/E26-T01-14.mp3",
    "transcript": [
      {
        "id": "p2-14-q",
        "speaker": "Speaker 1",
        "text": "The sales team knows how to use the tracking software, don't they?",
        "vietnamese": "Đội ngũ kinh doanh biết cách dùng phần mềm theo dõi rồi đúng không?"
      },
      {
        "id": "p2-14-a",
        "speaker": "Speaker 2",
        "text": "(A) It's on the lower shelf.",
        "vietnamese": "(A) Nó ở trên chiếc kệ bên dưới."
      },
      {
        "id": "p2-14-b",
        "speaker": "Speaker 2",
        "text": "(B) A twelve-thirty departure.",
        "vietnamese": "(B) Chuyến khởi hành lúc 12:30."
      },
      {
        "id": "p2-14-c",
        "speaker": "Speaker 2",
        "text": "(C) I haven't seen them using it yet.",
        "vietnamese": "(C) Tôi vẫn chưa thấy họ dùng nó bao giờ."
      }
    ],
    "questions": [
      {
        "num": 14,
        "question": "The sales team knows how to use the tracking software, don't they?",
        "vietnameseQuestion": "Đội bán hàng biết dùng phần mềm theo dõi rồi đúng không?",
        "options": [
          {
            "key": "A",
            "text": "It's on the lower shelf.",
            "vietnamese": "Nó ở trên kệ dưới."
          },
          {
            "key": "B",
            "text": "A twelve-thirty departure.",
            "vietnamese": "Khởi hành lúc 12 giờ 30."
          },
          {
            "key": "C",
            "text": "I haven't seen them using it yet.",
            "vietnamese": "Tôi vẫn chưa thấy họ dùng nó bao giờ."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Câu (C) là câu trả lời tự nhiên cho biết người nói chưa từng thấy đội ngũ dùng nên chưa rõ họ biết dùng hay không."
      }
    ],
    "vocabulary": [
      {
        "word": "tracking software",
        "meaning": "phần mềm theo dõi",
        "partOfSpeech": "n"
      },
      {
        "word": "shelf",
        "meaning": "chiếc giá, kệ",
        "partOfSpeech": "n"
      },
      {
        "word": "departure",
        "meaning": "sự khởi hành",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-15",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 15",
    "title": "Part 2 - Câu 15: Cửa hàng kim khí trên phố Mill",
    "audioSrc": "/audio/cuts/test1/E26-T01-15.mp3",
    "transcript": [
      {
        "id": "p2-15-q",
        "speaker": "Speaker 1",
        "text": "Are you going to the hardware store on Mill Street?",
        "vietnamese": "Bạn có đang đi tới tiệm kim khí ở phố Mill không?"
      },
      {
        "id": "p2-15-a",
        "speaker": "Speaker 2",
        "text": "(A) That store hasn't opened yet.",
        "vietnamese": "(A) Cửa hàng đó vẫn chưa mở cửa đâu."
      },
      {
        "id": "p2-15-b",
        "speaker": "Speaker 2",
        "text": "(B) The blue package you sent me.",
        "vietnamese": "(B) Gói đồ màu xanh bạn đã gửi cho tôi."
      },
      {
        "id": "p2-15-c",
        "speaker": "Speaker 2",
        "text": "(C) Some nails and a hammer.",
        "vietnamese": "(C) Vài cái đinh và một cây búa."
      }
    ],
    "questions": [
      {
        "num": 15,
        "question": "Are you going to the hardware store on Mill Street?",
        "vietnameseQuestion": "Bạn có đi tới cửa hàng kim khí ở phố Mill không?",
        "options": [
          {
            "key": "A",
            "text": "That store hasn't opened yet.",
            "vietnamese": "Cửa hàng đó vẫn chưa mở cửa đâu."
          },
          {
            "key": "B",
            "text": "The blue package you sent me.",
            "vietnamese": "Bưu kiện màu xanh bạn gửi cho tôi."
          },
          {
            "key": "C",
            "text": "Some nails and a hammer.",
            "vietnamese": "Vài chiếc đinh và cái búa."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Câu hỏi Yes/No, câu (A) gián tiếp từ chối với lý do tiệm đó vẫn chưa đến giờ mở cửa."
      }
    ],
    "vocabulary": [
      {
        "word": "hardware store",
        "meaning": "cửa hàng kim khí, đồ ngũ kim dụng cụ",
        "partOfSpeech": "n"
      },
      {
        "word": "package",
        "meaning": "bưu kiện, gói hàng",
        "partOfSpeech": "n"
      },
      {
        "word": "nail",
        "meaning": "cái đinh",
        "partOfSpeech": "n"
      },
      {
        "word": "hammer",
        "meaning": "cây búa",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-16",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 16",
    "title": "Part 2 - Câu 16: Viết lời giới thiệu cho hội thảo",
    "audioSrc": "/audio/cuts/test1/E26-T01-16.mp3",
    "transcript": [
      {
        "id": "p2-16-q",
        "speaker": "Speaker 1",
        "text": "Would you be able to write the introduction for the workshop?",
        "vietnamese": "Bạn có thể viết lời giới thiệu cho buổi hội thảo không?"
      },
      {
        "id": "p2-16-a",
        "speaker": "Speaker 2",
        "text": "(A) That was a great book.",
        "vietnamese": "(A) Đó là một cuốn sách hay."
      },
      {
        "id": "p2-16-b",
        "speaker": "Speaker 2",
        "text": "(B) OK, I'd be happy to.",
        "vietnamese": "(B) Được chứ, tôi rất sẵn lòng."
      },
      {
        "id": "p2-16-c",
        "speaker": "Speaker 2",
        "text": "(C) He doesn't have any more.",
        "vietnamese": "(C) Anh ấy không còn cái nào nữa."
      }
    ],
    "questions": [
      {
        "num": 16,
        "question": "Would you be able to write the introduction for the workshop?",
        "vietnameseQuestion": "Bạn có thể viết phần mở đầu cho buổi hội thảo không?",
        "options": [
          {
            "key": "A",
            "text": "That was a great book.",
            "vietnamese": "Đó là một cuốn sách tuyệt vời."
          },
          {
            "key": "B",
            "text": "OK, I'd be happy to.",
            "vietnamese": "Được chứ, tôi rất vui lòng giúp."
          },
          {
            "key": "C",
            "text": "He doesn't have any more.",
            "vietnamese": "Anh ấy không có thêm cái nào."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Lời nhờ vả lịch sự 'Would you be able to...', câu (B) đồng ý giúp đỡ nhiệt tình."
      }
    ],
    "vocabulary": [
      {
        "word": "introduction",
        "meaning": "lời giới thiệu, phần mở đầu",
        "partOfSpeech": "n"
      },
      {
        "word": "workshop",
        "meaning": "buổi tập huấn, hội thảo chuyên đề",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-17",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 17",
    "title": "Part 2 - Câu 17: Mua hoa mừng tiệc về hưu",
    "audioSrc": "/audio/cuts/test1/E26-T01-17.mp3",
    "transcript": [
      {
        "id": "p2-17-q",
        "speaker": "Speaker 1",
        "text": "I picked up some flowers for Tunji's retirement party.",
        "vietnamese": "Tôi đã mua hoa cho bữa tiệc nghỉ hưu của Tunji."
      },
      {
        "id": "p2-17-a",
        "speaker": "Speaker 2",
        "text": "(A) No, pick any day.",
        "vietnamese": "(A) Không, chọn ngày nào cũng được."
      },
      {
        "id": "p2-17-b",
        "speaker": "Speaker 2",
        "text": "(B) That was thoughtful.",
        "vietnamese": "(B) Bạn thật là chu đáo."
      },
      {
        "id": "p2-17-c",
        "speaker": "Speaker 2",
        "text": "(C) A delivery driver.",
        "vietnamese": "(C) Một tài xế giao hàng."
      }
    ],
    "questions": [
      {
        "num": 17,
        "question": "I picked up some flowers for Tunji's retirement party.",
        "vietnameseQuestion": "Tôi đã mua vài bông hoa cho bữa tiệc về hưu của Tunji.",
        "options": [
          {
            "key": "A",
            "text": "No, pick any day.",
            "vietnamese": "Không, chọn ngày nào cũng được."
          },
          {
            "key": "B",
            "text": "That was thoughtful.",
            "vietnamese": "Bạn thật là chu đáo."
          },
          {
            "key": "C",
            "text": "A delivery driver.",
            "vietnamese": "Một tài xế giao hàng."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Câu trần thuật chia sẻ hành động đẹp, câu (B) 'That was thoughtful' khen ngợi sự chu đáo của người nói."
      }
    ],
    "vocabulary": [
      {
        "word": "retirement party",
        "meaning": "tiệc nghỉ hưu",
        "partOfSpeech": "n"
      },
      {
        "word": "thoughtful",
        "meaning": "chu đáo, biết nghĩ cho người khác",
        "partOfSpeech": "adj"
      }
    ]
  },
  {
    "id": "part2-18",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 18",
    "title": "Part 2 - Câu 18: Phòng họp cho thực tập sinh",
    "audioSrc": "/audio/cuts/test1/E26-T01-18.mp3",
    "transcript": [
      {
        "id": "p2-18-q",
        "speaker": "Speaker 1",
        "text": "Which meeting room did you tell the interns to go to?",
        "vietnamese": "Bạn đã bảo các thực tập sinh tới phòng họp nào?"
      },
      {
        "id": "p2-18-a",
        "speaker": "Speaker 2",
        "text": "(A) The Jefferson Room.",
        "vietnamese": "(A) Phòng Jefferson."
      },
      {
        "id": "p2-18-b",
        "speaker": "Speaker 2",
        "text": "(B) The meeting was fun, thanks.",
        "vietnamese": "(B) Cuộc họp rất vui, cảm ơn nhé."
      },
      {
        "id": "p2-18-c",
        "speaker": "Speaker 2",
        "text": "(C) Yes, it's a conference call.",
        "vietnamese": "(C) Vâng, đó là cuộc gọi hội nghị."
      }
    ],
    "questions": [
      {
        "num": 18,
        "question": "Which meeting room did you tell the interns to go to?",
        "vietnameseQuestion": "Bạn bảo các bạn thực tập sinh vào phòng họp nào?",
        "options": [
          {
            "key": "A",
            "text": "The Jefferson Room.",
            "vietnamese": "Phòng họp Jefferson."
          },
          {
            "key": "B",
            "text": "The meeting was fun, thanks.",
            "vietnamese": "Cuộc họp đã rất vui, cảm ơn bạn."
          },
          {
            "key": "C",
            "text": "Yes, it's a conference call.",
            "vietnamese": "Vâng, đó là cuộc gọi thoại."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Câu hỏi lựa chọn 'Which meeting room...', đáp án (A) chỉ rõ tên phòng họp cụ thể."
      }
    ],
    "vocabulary": [
      {
        "word": "intern",
        "meaning": "thực tập sinh",
        "partOfSpeech": "n"
      },
      {
        "word": "conference call",
        "meaning": "cuộc họp qua điện thoại/trực tuyến",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-19",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 19",
    "title": "Part 2 - Câu 19: Lịch khám răng thứ Ba tới",
    "audioSrc": "/audio/cuts/test1/E26-T01-19.mp3",
    "transcript": [
      {
        "id": "p2-19-q",
        "speaker": "Speaker 1",
        "text": "Is your dental appointment next Tuesday?",
        "vietnamese": "Lịch hẹn nha sĩ của bạn vào thứ Ba tuần tới đúng không?"
      },
      {
        "id": "p2-19-a",
        "speaker": "Speaker 2",
        "text": "(A) You can borrow mine.",
        "vietnamese": "(A) Bạn có thể mượn của tôi."
      },
      {
        "id": "p2-19-b",
        "speaker": "Speaker 2",
        "text": "(B) I'll have to check my calendar.",
        "vietnamese": "(B) Tôi sẽ phải kiểm tra lại lịch đã."
      },
      {
        "id": "p2-19-c",
        "speaker": "Speaker 2",
        "text": "(C) Yes, it was a good meeting.",
        "vietnamese": "(C) Vâng, đó là một buổi gặp tốt."
      }
    ],
    "questions": [
      {
        "num": 19,
        "question": "Is your dental appointment next Tuesday?",
        "vietnameseQuestion": "Có phải lịch hẹn nha sĩ của bạn vào thứ Ba tuần tới không?",
        "options": [
          {
            "key": "A",
            "text": "You can borrow mine.",
            "vietnamese": "Bạn có thể mượn của tôi."
          },
          {
            "key": "B",
            "text": "I'll have to check my calendar.",
            "vietnamese": "Tôi sẽ phải xem lại lịch của mình."
          },
          {
            "key": "C",
            "text": "Yes, it was a good meeting.",
            "vietnamese": "Vâng, đó là một cuộc họp tốt."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Để xác nhận thời gian lịch hẹn, người nói cần tra cứu sổ lịch 'check my calendar'."
      }
    ],
    "vocabulary": [
      {
        "word": "dental appointment",
        "meaning": "lịch hẹn khám răng/nha khoa",
        "partOfSpeech": "n"
      },
      {
        "word": "calendar",
        "meaning": "lịch biểu làm việc",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-20",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 20",
    "title": "Part 2 - Câu 20: Tờ rơi ở tiền sảnh",
    "audioSrc": "/audio/cuts/test1/E26-T01-20.mp3",
    "transcript": [
      {
        "id": "p2-20-q",
        "speaker": "Speaker 1",
        "text": "Why aren't there any brochures in the lobby?",
        "vietnamese": "Sao không có cuốn tờ rơi nào ở sảnh chờ vậy?"
      },
      {
        "id": "p2-20-a",
        "speaker": "Speaker 2",
        "text": "(A) No, I haven't received my confirmation e-mail yet.",
        "vietnamese": "(A) Chưa, tôi vẫn chưa nhận được email xác nhận."
      },
      {
        "id": "p2-20-b",
        "speaker": "Speaker 2",
        "text": "(B) My winter coat.",
        "vietnamese": "(B) Chiếc áo khoác mùa đông của tôi."
      },
      {
        "id": "p2-20-c",
        "speaker": "Speaker 2",
        "text": "(C) Because someone just took the last one.",
        "vietnamese": "(C) Vì ai đó vừa lấy mất cuốn cuối cùng rồi."
      }
    ],
    "questions": [
      {
        "num": 20,
        "question": "Why aren't there any brochures in the lobby?",
        "vietnameseQuestion": "Tại sao lại không có tờ rơi giới thiệu nào ở sảnh?",
        "options": [
          {
            "key": "A",
            "text": "No, I haven't received my confirmation e-mail yet.",
            "vietnamese": "Chưa, tôi chưa nhận được email xác nhận."
          },
          {
            "key": "B",
            "text": "My winter coat.",
            "vietnamese": "Áo khoác mùa đông của tôi."
          },
          {
            "key": "C",
            "text": "Because someone just took the last one.",
            "vietnamese": "Bởi vì ai đó vừa lấy cuốn cuối cùng rồi."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Câu hỏi lý do 'Why...', câu (C) trả lời trực tiếp nguyên nhân 'Because someone just took the last one'."
      }
    ],
    "vocabulary": [
      {
        "word": "brochure",
        "meaning": "cuốn cẩm nang, tài liệu quảng cáo nhỏ",
        "partOfSpeech": "n"
      },
      {
        "word": "lobby",
        "meaning": "sảnh chờ",
        "partOfSpeech": "n"
      },
      {
        "word": "confirmation",
        "meaning": "sự xác nhận",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-21",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 21",
    "title": "Part 2 - Câu 21: Quy trình nộp báo cáo chi phí",
    "audioSrc": "/audio/cuts/test1/E26-T01-21.mp3",
    "transcript": [
      {
        "id": "p2-21-q",
        "speaker": "Speaker 1",
        "text": "What's the process for submitting my expense report?",
        "vietnamese": "Quy trình nộp báo cáo công tác phí như thế nào?"
      },
      {
        "id": "p2-21-a",
        "speaker": "Speaker 2",
        "text": "(A) You send it to the finance department.",
        "vietnamese": "(A) Bạn hãy gửi nó cho phòng tài chính."
      },
      {
        "id": "p2-21-b",
        "speaker": "Speaker 2",
        "text": "(B) The end of the day.",
        "vietnamese": "(B) Cuối ngày hôm nay."
      },
      {
        "id": "p2-21-c",
        "speaker": "Speaker 2",
        "text": "(C) That's correct.",
        "vietnamese": "(C) Đúng thế."
      }
    ],
    "questions": [
      {
        "num": 21,
        "question": "What's the process for submitting my expense report?",
        "vietnameseQuestion": "Quy trình nộp báo cáo chi phí như thế nào?",
        "options": [
          {
            "key": "A",
            "text": "You send it to the finance department.",
            "vietnamese": "Bạn gửi nó cho phòng tài chính."
          },
          {
            "key": "B",
            "text": "The end of the day.",
            "vietnamese": "Cuối ngày."
          },
          {
            "key": "C",
            "text": "That's correct.",
            "vietnamese": "Chính xác rồi."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Hỏi cách thức/quy trình 'What's the process...', câu (A) hướng dẫn các bước gửi tới phòng ban liên quan."
      }
    ],
    "vocabulary": [
      {
        "word": "expense report",
        "meaning": "báo cáo chi phí, công tác phí",
        "partOfSpeech": "n"
      },
      {
        "word": "submit",
        "meaning": "nộp, đệ trình",
        "partOfSpeech": "v"
      },
      {
        "word": "finance department",
        "meaning": "phòng tài chính",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-22",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 22",
    "title": "Part 2 - Câu 22: Kênh bán hàng online hay tại tiệm",
    "audioSrc": "/audio/cuts/test1/E26-T01-22.mp3",
    "transcript": [
      {
        "id": "p2-22-q",
        "speaker": "Speaker 1",
        "text": "Do you sell your products online or in stores?",
        "vietnamese": "Bên bạn bán hàng online hay ở cửa hàng trực tiếp?"
      },
      {
        "id": "p2-22-a",
        "speaker": "Speaker 2",
        "text": "(A) About twenty percent off.",
        "vietnamese": "(A) Giảm giá khoảng 20%."
      },
      {
        "id": "p2-22-b",
        "speaker": "Speaker 2",
        "text": "(B) A product demonstration.",
        "vietnamese": "(B) Một buổi trình diễn sản phẩm."
      },
      {
        "id": "p2-22-c",
        "speaker": "Speaker 2",
        "text": "(C) Only online.",
        "vietnamese": "(C) Chỉ bán trực tuyến thôi."
      }
    ],
    "questions": [
      {
        "num": 22,
        "question": "Do you sell your products online or in stores?",
        "vietnameseQuestion": "Bạn bán sản phẩm qua mạng hay ở cửa hàng?",
        "options": [
          {
            "key": "A",
            "text": "About twenty percent off.",
            "vietnamese": "Giảm khoảng hai mươi phần trăm."
          },
          {
            "key": "B",
            "text": "A product demonstration.",
            "vietnamese": "Buổi giới thiệu sản phẩm."
          },
          {
            "key": "C",
            "text": "Only online.",
            "vietnamese": "Chỉ bán qua mạng thôi."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Câu hỏi lựa chọn 'online or in stores', câu (C) chọn một trong hai phương án 'Only online'."
      }
    ],
    "vocabulary": [
      {
        "word": "demonstration",
        "meaning": "buổi trình diễn giới thiệu",
        "partOfSpeech": "n"
      },
      {
        "word": "percent off",
        "meaning": "phần trăm giảm giá",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-23",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 23",
    "title": "Part 2 - Câu 23: Tần suất sạc thiết bị",
    "audioSrc": "/audio/cuts/test1/E26-T01-23.mp3",
    "transcript": [
      {
        "id": "p2-23-q",
        "speaker": "Speaker 1",
        "text": "How often do you charge this device?",
        "vietnamese": "Bạn sạc thiết bị này thường xuyên như thế nào?"
      },
      {
        "id": "p2-23-a",
        "speaker": "Speaker 2",
        "text": "(A) Whenever the light turns red.",
        "vietnamese": "(A) Bất cứ khi nào đèn chuyển sang đỏ."
      },
      {
        "id": "p2-23-b",
        "speaker": "Speaker 2",
        "text": "(B) A wireless one.",
        "vietnamese": "(B) Một chiếc không dây."
      },
      {
        "id": "p2-23-c",
        "speaker": "Speaker 2",
        "text": "(C) At the hardware store.",
        "vietnamese": "(C) Ở cửa hàng kim khí."
      }
    ],
    "questions": [
      {
        "num": 23,
        "question": "How often do you charge this device?",
        "vietnameseQuestion": "Bao lâu thì bạn sạc thiết bị này một lần?",
        "options": [
          {
            "key": "A",
            "text": "Whenever the light turns red.",
            "vietnamese": "Mỗi khi đèn chuyển sang màu đỏ."
          },
          {
            "key": "B",
            "text": "A wireless one.",
            "vietnamese": "Loại không dây."
          },
          {
            "key": "C",
            "text": "At the hardware store.",
            "vietnamese": "Ở tiệm kim khí."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Hỏi tần suất 'How often...', câu (A) trả lời 'Whenever the light turns red' (bất cứ khi nào đèn báo đỏ)."
      }
    ],
    "vocabulary": [
      {
        "word": "charge",
        "meaning": "sạc pin, nạp điện",
        "partOfSpeech": "v"
      },
      {
        "word": "device",
        "meaning": "thiết bị điện tử",
        "partOfSpeech": "n"
      },
      {
        "word": "wireless",
        "meaning": "không dây",
        "partOfSpeech": "adj"
      }
    ]
  },
  {
    "id": "part2-24",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 24",
    "title": "Part 2 - Câu 24: Giá vé hòa nhạc tối thứ Sáu",
    "audioSrc": "/audio/cuts/test1/E26-T01-24.mp3",
    "transcript": [
      {
        "id": "p2-24-q",
        "speaker": "Speaker 1",
        "text": "The tickets to Friday night's concert cost ten dollars each.",
        "vietnamese": "Vé xem hòa nhạc tối thứ Sáu giá 10 đô mỗi vé."
      },
      {
        "id": "p2-24-a",
        "speaker": "Speaker 2",
        "text": "(A) Actually, they're fifteen.",
        "vietnamese": "(A) Thực ra là 15 đô đấy."
      },
      {
        "id": "p2-24-b",
        "speaker": "Speaker 2",
        "text": "(B) No, I can't play the guitar.",
        "vietnamese": "(B) Không, tôi không biết chơi guitar."
      },
      {
        "id": "p2-24-c",
        "speaker": "Speaker 2",
        "text": "(C) It's in aisle five.",
        "vietnamese": "(C) Nó ở dãy hành lang số 5."
      }
    ],
    "questions": [
      {
        "num": 24,
        "question": "The tickets to Friday night's concert cost ten dollars each.",
        "vietnameseQuestion": "Vé xem ca nhạc tối thứ Sáu giá mười đô mỗi vé.",
        "options": [
          {
            "key": "A",
            "text": "Actually, they're fifteen.",
            "vietnamese": "Thực ra là 15 đô la đấy."
          },
          {
            "key": "B",
            "text": "No, I can't play the guitar.",
            "vietnamese": "Không, tôi không biết đánh đàn ghi-ta."
          },
          {
            "key": "C",
            "text": "It's in aisle five.",
            "vietnamese": "Ở lối đi số năm."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Câu đưa ra thông tin về giá, câu (A) đính chính lại thông tin giá vé chính xác là 15 đô la."
      }
    ],
    "vocabulary": [
      {
        "word": "concert",
        "meaning": "buổi hòa nhạc",
        "partOfSpeech": "n"
      },
      {
        "word": "cost",
        "meaning": "có giá là",
        "partOfSpeech": "v"
      },
      {
        "word": "aisle",
        "meaning": "lối đi giữa các dãy ghế/kệ",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-25",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 25",
    "title": "Part 2 - Câu 25: Cập nhật cơ sở dữ liệu hôm nay",
    "audioSrc": "/audio/cuts/test1/E26-T01-25.mp3",
    "transcript": [
      {
        "id": "p2-25-q",
        "speaker": "Speaker 1",
        "text": "Can't you update the database today?",
        "vietnamese": "Hôm nay bạn không thể cập nhật cơ sở dữ liệu sao?"
      },
      {
        "id": "p2-25-a",
        "speaker": "Speaker 2",
        "text": "(A) I did it yesterday.",
        "vietnamese": "(A) Tôi đã làm nó từ hôm qua rồi."
      },
      {
        "id": "p2-25-b",
        "speaker": "Speaker 2",
        "text": "(B) That's an interesting movie.",
        "vietnamese": "(B) Đó là một bộ phim thú vị."
      },
      {
        "id": "p2-25-c",
        "speaker": "Speaker 2",
        "text": "(C) No, just me.",
        "vietnamese": "(C) Không, chỉ có mình tôi thôi."
      }
    ],
    "questions": [
      {
        "num": 25,
        "question": "Can't you update the database today?",
        "vietnameseQuestion": "Hôm nay bạn không cập nhật cơ sở dữ liệu được à?",
        "options": [
          {
            "key": "A",
            "text": "I did it yesterday.",
            "vietnamese": "Tôi đã cập nhật hôm qua rồi."
          },
          {
            "key": "B",
            "text": "That's an interesting movie.",
            "vietnamese": "Bộ phim đó rất thú vị."
          },
          {
            "key": "C",
            "text": "No, just me.",
            "vietnamese": "Không, chỉ có mình tôi."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Câu hỏi phủ định 'Can't you...', câu (A) giải thích công việc đã được hoàn tất từ hôm qua."
      }
    ],
    "vocabulary": [
      {
        "word": "update",
        "meaning": "cập nhật",
        "partOfSpeech": "v"
      },
      {
        "word": "database",
        "meaning": "cơ sở dữ liệu",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-26",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 26",
    "title": "Part 2 - Câu 26: Xếp vật dụng vào tủ đồ",
    "audioSrc": "/audio/cuts/test1/E26-T01-26.mp3",
    "transcript": [
      {
        "id": "p2-26-q",
        "speaker": "Speaker 1",
        "text": "How are we going to fit the extra supplies in that closet?",
        "vietnamese": "Làm thế nào để xếp chỗ vật dụng thừa vào chiếc tủ đó?"
      },
      {
        "id": "p2-26-a",
        "speaker": "Speaker 2",
        "text": "(A) I've already read them.",
        "vietnamese": "(A) Tôi đã đọc chúng rồi."
      },
      {
        "id": "p2-26-b",
        "speaker": "Speaker 2",
        "text": "(B) Natalie's in charge of supplies.",
        "vietnamese": "(B) Natalie là người phụ trách đồ dùng văn phòng."
      },
      {
        "id": "p2-26-c",
        "speaker": "Speaker 2",
        "text": "(C) It's the door at the end of the hallway.",
        "vietnamese": "(C) Đó là cánh cửa ở cuối hành lang."
      }
    ],
    "questions": [
      {
        "num": 26,
        "question": "How are we going to fit the extra supplies in that closet?",
        "vietnameseQuestion": "Làm sao chúng ta xếp chỗ đồ dùng thêm vào tủ đó được?",
        "options": [
          {
            "key": "A",
            "text": "I've already read them.",
            "vietnamese": "Tôi đã đọc hết rồi."
          },
          {
            "key": "B",
            "text": "Natalie's in charge of supplies.",
            "vietnamese": "Natalie phụ trách mảng đồ dùng này."
          },
          {
            "key": "C",
            "text": "It's the door at the end of the hallway.",
            "vietnamese": "Cánh cửa ở cuối dãy hành lang."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Chuyển hướng trách nhiệm cho người có thẩm quyền phụ trách 'Natalie's in charge of supplies'."
      }
    ],
    "vocabulary": [
      {
        "word": "fit",
        "meaning": "vừa vặn, chứa vừa",
        "partOfSpeech": "v"
      },
      {
        "word": "in charge of",
        "meaning": "chịu trách nhiệm, phụ trách",
        "partOfSpeech": "idiom"
      },
      {
        "word": "closet",
        "meaning": "tủ để đồ",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-27",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 27",
    "title": "Part 2 - Câu 27: Tiến độ lắp đặt cửa sổ mới",
    "audioSrc": "/audio/cuts/test1/E26-T01-27.mp3",
    "transcript": [
      {
        "id": "p2-27-q",
        "speaker": "Speaker 1",
        "text": "Have all the new windows been installed?",
        "vietnamese": "Tất cả các cửa sổ mới đã được lắp xong chưa?"
      },
      {
        "id": "p2-27-a",
        "speaker": "Speaker 2",
        "text": "(A) Sure, I'll close the blinds.",
        "vietnamese": "(A) Chắc chắn rồi, tôi sẽ kéo rèm lại."
      },
      {
        "id": "p2-27-b",
        "speaker": "Speaker 2",
        "text": "(B) The construction crew is almost finished.",
        "vietnamese": "(B) Đội thi công gần làm xong rồi."
      },
      {
        "id": "p2-27-c",
        "speaker": "Speaker 2",
        "text": "(C) This isn't the tallest ladder available.",
        "vietnamese": "(C) Đây không phải chiếc thang cao nhất."
      }
    ],
    "questions": [
      {
        "num": 27,
        "question": "Have all the new windows been installed?",
        "vietnameseQuestion": "Tất cả cửa sổ mới đã được lắp đặt xong chưa?",
        "options": [
          {
            "key": "A",
            "text": "Sure, I'll close the blinds.",
            "vietnamese": "Được chứ, tôi sẽ kéo rèm che."
          },
          {
            "key": "B",
            "text": "The construction crew is almost finished.",
            "vietnamese": "Đội thi công sắp sửa xong rồi."
          },
          {
            "key": "C",
            "text": "This isn't the tallest ladder available.",
            "vietnamese": "Đây chưa phải là chiếc thang cao nhất."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Câu hỏi tiến độ công việc, đáp án (B) thông báo đội thi công đã gần hoàn tất công đoạn lắp đặt."
      }
    ],
    "vocabulary": [
      {
        "word": "install",
        "meaning": "lắp đặt, cài đặt",
        "partOfSpeech": "v"
      },
      {
        "word": "construction crew",
        "meaning": "đội thi công xây dựng",
        "partOfSpeech": "n"
      },
      {
        "word": "ladder",
        "meaning": "cái thang",
        "partOfSpeech": "n"
      },
      {
        "word": "blinds",
        "meaning": "rèm che cửa sổ",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-28",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 28",
    "title": "Part 2 - Câu 28: Ăn trưa bây giờ hay giữa trưa",
    "audioSrc": "/audio/cuts/test1/E26-T01-28.mp3",
    "transcript": [
      {
        "id": "p2-28-q",
        "speaker": "Speaker 1",
        "text": "Would you rather go to lunch now or at noon?",
        "vietnamese": "Bạn muốn đi ăn trưa bây giờ hay vào lúc giữa trưa?"
      },
      {
        "id": "p2-28-a",
        "speaker": "Speaker 2",
        "text": "(A) I'm taking a client to lunch.",
        "vietnamese": "(A) Tôi có lịch hẹn đưa khách hàng đi ăn trưa rồi."
      },
      {
        "id": "p2-28-b",
        "speaker": "Speaker 2",
        "text": "(B) On the corner of Fourth and Main.",
        "vietnamese": "(B) Ở góc phố số 4 và phố Main."
      },
      {
        "id": "p2-28-c",
        "speaker": "Speaker 2",
        "text": "(C) The daily special is soup and a sandwich.",
        "vietnamese": "(C) Món đặc biệt hôm nay là súp và bánh mì kẹp."
      }
    ],
    "questions": [
      {
        "num": 28,
        "question": "Would you rather go to lunch now or at noon?",
        "vietnameseQuestion": "Bạn muốn đi ăn trưa ngay bây giờ hay vào lúc 12 giờ?",
        "options": [
          {
            "key": "A",
            "text": "I'm taking a client to lunch.",
            "vietnamese": "Tôi có hẹn mời khách hàng đi ăn trưa."
          },
          {
            "key": "B",
            "text": "On the corner of Fourth and Main.",
            "vietnamese": "Ở ngã tư đường số 4 và đường Main."
          },
          {
            "key": "C",
            "text": "The daily special is soup and a sandwich.",
            "vietnamese": "Món đặc biệt hôm nay là súp và bánh kẹp."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Câu hỏi lựa chọn thời gian ăn trưa cùng nhau, người đáp gián tiếp từ chối cả 2 vì đã có lịch hẹn với khách hàng."
      }
    ],
    "vocabulary": [
      {
        "word": "would rather",
        "meaning": "thích làm gì hơn",
        "partOfSpeech": "modal v"
      },
      {
        "word": "client",
        "meaning": "khách hàng",
        "partOfSpeech": "n"
      },
      {
        "word": "daily special",
        "meaning": "món ăn đặc biệt trong ngày",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-29",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 29",
    "title": "Part 2 - Câu 29: Buổi đào tạo chiều nay",
    "audioSrc": "/audio/cuts/test1/E26-T01-29.mp3",
    "transcript": [
      {
        "id": "p2-29-q",
        "speaker": "Speaker 1",
        "text": "You're taking the training in the afternoon, aren't you?",
        "vietnamese": "Bạn sẽ tham gia buổi đào tạo vào buổi chiều đúng không?"
      },
      {
        "id": "p2-29-a",
        "speaker": "Speaker 2",
        "text": "(A) The new head of the accounting department.",
        "vietnamese": "(A) Trưởng bộ phận kế toán mới."
      },
      {
        "id": "p2-29-b",
        "speaker": "Speaker 2",
        "text": "(B) No, I take my coffee black.",
        "vietnamese": "(B) Không, tôi uống cà phê đen."
      },
      {
        "id": "p2-29-c",
        "speaker": "Speaker 2",
        "text": "(C) Well, it depends on my schedule.",
        "vietnamese": "(C) Ồ, còn tùy vào lịch trình của tôi nữa."
      }
    ],
    "questions": [
      {
        "num": 29,
        "question": "You're taking the training in the afternoon, aren't you?",
        "vietnameseQuestion": "Bạn tham gia khóa đào tạo buổi chiều phải không?",
        "options": [
          {
            "key": "A",
            "text": "The new head of the accounting department.",
            "vietnamese": "Trưởng phòng kế toán mới."
          },
          {
            "key": "B",
            "text": "No, I take my coffee black.",
            "vietnamese": "Không, tôi uống cà phê đen."
          },
          {
            "key": "C",
            "text": "Well, it depends on my schedule.",
            "vietnamese": "À, điều đó còn tùy thuộc vào lịch trình của tôi."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Câu hỏi xác nhận lịch đào tạo, câu trả lời (C) cho biết việc tham gia còn phụ thuộc vào thời gian biểu."
      }
    ],
    "vocabulary": [
      {
        "word": "depend on",
        "meaning": "tùy thuộc vào",
        "partOfSpeech": "v"
      },
      {
        "word": "schedule",
        "meaning": "lịch trình, thời gian biểu",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-30",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 30",
    "title": "Part 2 - Câu 30: Xem xét dự báo tài chính",
    "audioSrc": "/audio/cuts/test1/E26-T01-30.mp3",
    "transcript": [
      {
        "id": "p2-30-q",
        "speaker": "Speaker 1",
        "text": "Shouldn't Ms. Ishida look over the financial projections?",
        "vietnamese": "Cô Ishida không nên xem qua dự báo tài chính sao?"
      },
      {
        "id": "p2-30-a",
        "speaker": "Speaker 2",
        "text": "(A) I just got this monitor.",
        "vietnamese": "(A) Tôi vừa mới nhận chiếc màn hình này."
      },
      {
        "id": "p2-30-b",
        "speaker": "Speaker 2",
        "text": "(B) To the south entrance.",
        "vietnamese": "(B) Tới lối vào phía nam."
      },
      {
        "id": "p2-30-c",
        "speaker": "Speaker 2",
        "text": "(C) I'm meeting with her at ten.",
        "vietnamese": "(C) Tôi sẽ có cuộc gặp với cô ấy lúc 10 giờ."
      }
    ],
    "questions": [
      {
        "num": 30,
        "question": "Shouldn't Ms. Ishida look over the financial projections?",
        "vietnameseQuestion": "Đáng lẽ cô Ishida nên xem qua bản dự báo tài chính chứ?",
        "options": [
          {
            "key": "A",
            "text": "I just got this monitor.",
            "vietnamese": "Tôi vừa nhận được cái màn hình này."
          },
          {
            "key": "B",
            "text": "To the south entrance.",
            "vietnamese": "Đến lối vào phía nam."
          },
          {
            "key": "C",
            "text": "I'm meeting with her at ten.",
            "vietnamese": "Tôi sẽ gặp cô ấy lúc 10 giờ để bàn bạc."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Hỏi về việc kiểm tra tài liệu, câu (C) ngụ ý hai người sẽ cùng xem tài liệu trong buổi gặp lúc 10 giờ."
      }
    ],
    "vocabulary": [
      {
        "word": "look over",
        "meaning": "xem qua, kiểm tra lại",
        "partOfSpeech": "phr v"
      },
      {
        "word": "financial projection",
        "meaning": "dự báo tài chính tương lai",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part2-31",
    "part": 2,
    "partTitle": "Part 2: Hỏi & Đáp",
    "questionRange": "Câu 31",
    "title": "Part 2 - Câu 31: Chọn quản lý dự án mới",
    "audioSrc": "/audio/cuts/test1/E26-T01-31.mp3",
    "transcript": [
      {
        "id": "p2-31-q",
        "speaker": "Speaker 1",
        "text": "When are you going to choose a new project manager?",
        "vietnamese": "Khi nào bạn sẽ chọn ra một quản lý dự án mới?"
      },
      {
        "id": "p2-31-a",
        "speaker": "Speaker 2",
        "text": "(A) The projector's not working correctly.",
        "vietnamese": "(A) Chiếc máy chiếu đang hoạt động không tốt."
      },
      {
        "id": "p2-31-b",
        "speaker": "Speaker 2",
        "text": "(B) Next to the front entrance.",
        "vietnamese": "(B) Ngay bên cạnh lối vào chính."
      },
      {
        "id": "p2-31-c",
        "speaker": "Speaker 2",
        "text": "(C) I'm really busy this week.",
        "vietnamese": "(C) Tuần này tôi thực sự rất bận."
      }
    ],
    "questions": [
      {
        "num": 31,
        "question": "When are you going to choose a new project manager?",
        "vietnameseQuestion": "Khi nào bạn sẽ tuyển chọn quản lý dự án mới?",
        "options": [
          {
            "key": "A",
            "text": "The projector's not working correctly.",
            "vietnamese": "Máy chiếu hoạt động không đúng."
          },
          {
            "key": "B",
            "text": "Next to the front entrance.",
            "vietnamese": "Cạnh cổng vào phía trước."
          },
          {
            "key": "C",
            "text": "I'm really busy this week.",
            "vietnamese": "Tuần này tôi bận quá (chưa chọn ngay được)."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Câu hỏi 'When...', câu (C) trả lời tuần này đang bận nên ngụ ý việc chọn lựa sẽ dời sang tuần sau."
      }
    ],
    "vocabulary": [
      {
        "word": "project manager",
        "meaning": "người quản lý dự án",
        "partOfSpeech": "n"
      },
      {
        "word": "correctly",
        "meaning": "một cách chính xác, đúng đắn",
        "partOfSpeech": "adv"
      }
    ]
  },
  {
    "id": "part3-32-34",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 32 - 34",
    "title": "Part 3 - Câu 32-34: Trao đổi về sản phẩm phô mai mới",
    "audioSrc": "/audio/cuts/test1/E26-T01-32-34.mp3",
    "transcript": [
      {
        "id": "p3-32-1",
        "speaker": "Woman",
        "text": "Hey, Oliver. Did you see the focus group results for our new spicy cheddar cheese? Everyone really liked it.",
        "vietnamese": "Chào Oliver. Anh đã xem kết quả khảo sát nhóm tập trung về món phô mai cheddar cay mới của chúng ta chưa? Mọi người thực sự rất thích nó đấy."
      },
      {
        "id": "p3-32-2",
        "speaker": "Man",
        "text": "Yes. It should be a great addition to our company's line of cheeses.",
        "vietnamese": "Tôi xem rồi. Nó sẽ là một sự bổ sung tuyệt vời vào dòng sản phẩm phô mai của công ty chúng ta."
      },
      {
        "id": "p3-32-3",
        "speaker": "Woman",
        "text": "Several people mentioned that they'd like to use it in recipes—to add to sauces, for example.",
        "vietnamese": "Một số người có nhắc đến việc họ muốn dùng nó trong các công thức nấu ăn—chẳng hạn như cho thêm vào các món nước sốt."
      },
      {
        "id": "p3-32-4",
        "speaker": "Man",
        "text": "So maybe we should consider selling a shredded version that would melt easily when cooked.",
        "vietnamese": "Vậy thì có lẽ chúng ta nên cân nhắc bán phiên bản phô mai bào sợi để có thể dễ dàng tan chảy khi nấu nướng."
      },
      {
        "id": "p3-32-5",
        "speaker": "Woman",
        "text": "I'm sure we could do that. I'll get in touch with the production manager with that request.",
        "vietnamese": "Tôi chắc chắn chúng ta có thể làm được điều đó. Tôi sẽ liên hệ với giám đốc sản xuất về yêu cầu này."
      }
    ],
    "questions": [
      {
        "num": 32,
        "question": "What type of food product does the speakers' company sell?",
        "vietnameseQuestion": "Công ty của những người nói bán loại thực phẩm nào?",
        "options": [
          {
            "key": "A",
            "text": "Candy",
            "vietnamese": "Kẹo"
          },
          {
            "key": "B",
            "text": "Cheese",
            "vietnamese": "Phô mai"
          },
          {
            "key": "C",
            "text": "Bread",
            "vietnamese": "Bánh mì"
          },
          {
            "key": "D",
            "text": "Pasta",
            "vietnamese": "Mì Ý"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Người phụ nữ mở đầu câu chuyện: 'our new spicy cheddar cheese' và người nam tiếp lời 'company's line of cheeses'. Vì vậy công ty bán phô mai (Cheese)."
      },
      {
        "num": 33,
        "question": "What does the man suggest?",
        "vietnameseQuestion": "Người đàn ông gợi ý điều gì?",
        "options": [
          {
            "key": "A",
            "text": "Lowering prices",
            "vietnamese": "Giảm giá bán"
          },
          {
            "key": "B",
            "text": "Hiring more workers",
            "vietnamese": "Tuyển thêm công nhân"
          },
          {
            "key": "C",
            "text": "Publishing a recipe",
            "vietnamese": "Xuất bản công thức nấu ăn"
          },
          {
            "key": "D",
            "text": "Offering additional options",
            "vietnamese": "Cung cấp thêm lựa chọn sản phẩm"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Người đàn ông gợi ý: 'selling a shredded version that would melt easily' (bán thêm phiên bản bào sợi) tương đương với 'Offering additional options'."
      },
      {
        "num": 34,
        "question": "What does the woman say she will do?",
        "vietnameseQuestion": "Người phụ nữ nói cô ấy sẽ làm gì?",
        "options": [
          {
            "key": "A",
            "text": "Send a schedule update",
            "vietnamese": "Gửi cập nhật lịch trình"
          },
          {
            "key": "B",
            "text": "Contact a production manager",
            "vietnamese": "Liên hệ với quản lý sản xuất"
          },
          {
            "key": "C",
            "text": "Visit the company headquarters",
            "vietnamese": "Đến thăm trụ sở công ty"
          },
          {
            "key": "D",
            "text": "Plan an advertising campaign",
            "vietnamese": "Lên kế hoạch chiến dịch quảng cáo"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Người phụ nữ khẳng định ở câu cuối: 'I'll get in touch with the production manager with that request'."
      }
    ],
    "vocabulary": [
      {
        "word": "focus group",
        "meaning": "nhóm tập trung khảo sát người tiêu dùng",
        "partOfSpeech": "n"
      },
      {
        "word": "addition",
        "meaning": "sự bổ sung thêm",
        "partOfSpeech": "n"
      },
      {
        "word": "shredded",
        "meaning": "được bào sợi, băm nhỏ",
        "partOfSpeech": "adj"
      },
      {
        "word": "melt",
        "meaning": "tan chảy",
        "partOfSpeech": "v"
      },
      {
        "word": "get in touch with",
        "meaning": "liên lạc với",
        "partOfSpeech": "idiom"
      }
    ]
  },
  {
    "id": "part3-35-37",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 35 - 37",
    "title": "Part 3 - Câu 35-37: Mua vé xem trận đấu quần vợt",
    "audioSrc": "/audio/cuts/test1/E26-T01-35-37.mp3",
    "transcript": [
      {
        "id": "p3-35-1",
        "speaker": "Man",
        "text": "Hi. I'm calling to book three tickets for this Thursday's tennis match. Are there any seats left?",
        "vietnamese": "Xin chào. Tôi gọi để đặt ba vé cho trận đấu tennis thứ Năm tuần này. Còn ghế trống nào không ạ?"
      },
      {
        "id": "p3-35-2",
        "speaker": "Woman",
        "text": "Just a few! Tickets for Thursday's match have been selling quickly.",
        "vietnamese": "Chỉ còn vài vé thôi! Vé cho trận đấu thứ Năm đang bán rất nhanh."
      },
      {
        "id": "p3-35-3",
        "speaker": "Man",
        "text": "I'm not surprised! After all, Ife Rotimi won the regional championship tournament last month. Everyone wants to see her play after her incredible performance. What seats are available?",
        "vietnamese": "Tôi không ngạc nhiên chút nào! Dẫu sao thì Ife Rotimi cũng vừa vô địch giải đấu khu vực tháng trước. Mọi người đều muốn xem cô ấy thi đấu sau màn trình diễn đáng kinh ngạc đó. Còn những chỗ ngồi nào vậy?"
      },
      {
        "id": "p3-35-4",
        "speaker": "Woman",
        "text": "Well, there's only one group of three seats together. Advance payment is required to hold them.",
        "vietnamese": "Dạ, chỉ còn duy nhất một cụm ba ghế ngồi cạnh nhau thôi. Yêu cầu quý khách phải thanh toán trước để giữ chỗ."
      }
    ],
    "questions": [
      {
        "num": 35,
        "question": "Why is the man calling?",
        "vietnameseQuestion": "Tại sao người đàn ông lại gọi điện thoại?",
        "options": [
          {
            "key": "A",
            "text": "To sign up for lessons",
            "vietnamese": "Để đăng ký các bài học"
          },
          {
            "key": "B",
            "text": "To enter a competition",
            "vietnamese": "Để tham gia thi đấu"
          },
          {
            "key": "C",
            "text": "To buy tickets to an event",
            "vietnamese": "Để mua vé tham gia sự kiện"
          },
          {
            "key": "D",
            "text": "To ask about branded merchandise",
            "vietnamese": "Để hỏi về hàng hóa thương hiệu"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Người đàn ông nêu rõ mục đích ngay câu đầu: 'I'm calling to book three tickets for this Thursday's tennis match'."
      },
      {
        "num": 36,
        "question": "What did Ife Rotimi do last month?",
        "vietnameseQuestion": "Ife Rotimi đã làm gì vào tháng trước?",
        "options": [
          {
            "key": "A",
            "text": "She won a regional tournament.",
            "vietnamese": "Cô ấy đã thắng giải vô địch khu vực."
          },
          {
            "key": "B",
            "text": "She gave a television interview.",
            "vietnamese": "Cô ấy trả lời phỏng vấn truyền hình."
          },
          {
            "key": "C",
            "text": "She started an institute.",
            "vietnamese": "Cô ấy thành lập một viện nghiên cứu."
          },
          {
            "key": "D",
            "text": "She hired a new coach.",
            "vietnamese": "Cô ấy thuê một huấn luyện viên mới."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Người đàn ông nói: 'After all, Ife Rotimi won the regional championship tournament last month'."
      },
      {
        "num": 37,
        "question": "What does the woman say is required?",
        "vietnameseQuestion": "Người phụ nữ nói điều gì là bắt buộc?",
        "options": [
          {
            "key": "A",
            "text": "A parking permit",
            "vietnamese": "Giấy phép đỗ xe"
          },
          {
            "key": "B",
            "text": "A photo ID",
            "vietnamese": "Căn cước công dân có ảnh"
          },
          {
            "key": "C",
            "text": "Contact information",
            "vietnamese": "Thông tin liên hệ"
          },
          {
            "key": "D",
            "text": "Advance payment",
            "vietnamese": "Thanh toán trước"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Người phụ nữ chốt lại ở lượt nói cuối: 'Advance payment is required to hold them'."
      }
    ],
    "vocabulary": [
      {
        "word": "book",
        "meaning": "đặt vé, đặt trước",
        "partOfSpeech": "v"
      },
      {
        "word": "regional tournament",
        "meaning": "giải đấu cấp khu vực",
        "partOfSpeech": "n"
      },
      {
        "word": "incredible",
        "meaning": "tuyệt vời, không thể tin được",
        "partOfSpeech": "adj"
      },
      {
        "word": "advance payment",
        "meaning": "tiền thanh toán trước, tiền đặt cọc",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part3-38-40",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 38 - 40",
    "title": "Part 3 - Câu 38-40: Tổ chức bữa tối gây quỹ thư viện",
    "audioSrc": "/audio/cuts/test1/E26-T01-38-40.mp3",
    "transcript": [
      {
        "id": "p3-38-1",
        "speaker": "Woman",
        "text": "Thanks for agreeing to help me organize the library's annual fund-raising dinner, Klaus. We hope the event brings in enough money to expand our children's book section.",
        "vietnamese": "Cảm ơn anh đã đồng ý giúp tôi tổ chức bữa tối gây quỹ thường niên cho thư viện nhé Klaus. Chúng tôi hy vọng sự kiện sẽ quyên góp đủ tiền để mở rộng khu vực sách thiếu nhi."
      },
      {
        "id": "p3-38-2",
        "speaker": "Man",
        "text": "What task would you like me to start with?",
        "vietnamese": "Cô muốn tôi bắt đầu với nhiệm vụ nào trước?"
      },
      {
        "id": "p3-38-3",
        "speaker": "Woman",
        "text": "Well, I could use some help sending out the invitations.",
        "vietnamese": "À, tôi rất cần sự giúp đỡ trong việc gửi các bức thư mời."
      },
      {
        "id": "p3-38-4",
        "speaker": "Man",
        "text": "OK, I can take care of that. Is there a list of attendees available?",
        "vietnamese": "Được chứ, tôi có thể đảm nhận việc đó. Đã có sẵn danh sách người tham dự chưa?"
      },
      {
        "id": "p3-38-5",
        "speaker": "Woman",
        "text": "It's in my computer files. I'll e-mail it to you.",
        "vietnamese": "Nó ở trong các tệp trên máy tính của tôi. Tôi sẽ gửi email danh sách đó cho anh."
      }
    ],
    "questions": [
      {
        "num": 38,
        "question": "What event are the speakers planning?",
        "vietnameseQuestion": "Những người nói đang lên kế hoạch cho sự kiện nào?",
        "options": [
          {
            "key": "A",
            "text": "A fund-raising dinner",
            "vietnamese": "Một bữa tiệc tối gây quỹ"
          },
          {
            "key": "B",
            "text": "An art gallery opening",
            "vietnamese": "Khai mạc phòng trưng bày nghệ thuật"
          },
          {
            "key": "C",
            "text": "An awards ceremony",
            "vietnamese": "Lễ trao giải thưởng"
          },
          {
            "key": "D",
            "text": "A children's book fair",
            "vietnamese": "Hội chợ sách thiếu nhi"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Người phụ nữ mở đầu: 'organize the library's annual fund-raising dinner'."
      },
      {
        "num": 39,
        "question": "What task does the woman ask the man to help with?",
        "vietnameseQuestion": "Người phụ nữ nhờ người đàn ông giúp công việc gì?",
        "options": [
          {
            "key": "A",
            "text": "Arranging a shuttle service",
            "vietnamese": "Sắp xếp xe đưa đón"
          },
          {
            "key": "B",
            "text": "Choosing a catering firm",
            "vietnamese": "Chọn công ty phục vụ ăn uống"
          },
          {
            "key": "C",
            "text": "Preparing a speech",
            "vietnamese": "Chuẩn bị bài phát biểu"
          },
          {
            "key": "D",
            "text": "Sending out invitations",
            "vietnamese": "Gửi các thư mời"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Người phụ nữ nói: 'Well, I could use some help sending out the invitations'."
      },
      {
        "num": 40,
        "question": "What does the woman say she will do?",
        "vietnameseQuestion": "Người phụ nữ nói cô ấy sẽ làm gì?",
        "options": [
          {
            "key": "A",
            "text": "E-mail a list",
            "vietnamese": "Gửi email danh sách"
          },
          {
            "key": "B",
            "text": "Speak with a colleague",
            "vietnamese": "Nói chuyện với một đồng nghiệp"
          },
          {
            "key": "C",
            "text": "Provide a password",
            "vietnamese": "Cung cấp mật khẩu"
          },
          {
            "key": "D",
            "text": "Post a job opening",
            "vietnamese": "Đăng tin tuyển dụng"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Khi người đàn ông hỏi danh sách người tham dự, cô trả lời: 'I'll e-mail it to you'."
      }
    ],
    "vocabulary": [
      {
        "word": "fund-raising dinner",
        "meaning": "bữa tiệc tối gây quỹ từ thiện",
        "partOfSpeech": "n"
      },
      {
        "word": "expand",
        "meaning": "mở rộng",
        "partOfSpeech": "v"
      },
      {
        "word": "invitation",
        "meaning": "thư mời, thiệp mời",
        "partOfSpeech": "n"
      },
      {
        "word": "attendee",
        "meaning": "người tham dự",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part3-41-43",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 41 - 43",
    "title": "Part 3 - Câu 41-43: Bút phân hủy sinh học quảng bá thương hiệu",
    "audioSrc": "/audio/cuts/test1/E26-T01-41-43.mp3",
    "transcript": [
      {
        "id": "p3-41-1",
        "speaker": "Woman",
        "text": "Hey, Brian and Matteo. I found some great pens to give away at the community festival to promote our business.",
        "vietnamese": "Này Brian và Matteo. Tôi vừa tìm được loại bút viết rất tuyệt để phát tặng ở lễ hội cộng đồng nhằm quảng bá công việc kinh doanh của chúng ta."
      },
      {
        "id": "p3-41-2",
        "speaker": "Man 1",
        "text": "Great. Can we put our cleaning service logo on them?",
        "vietnamese": "Tuyệt quá. Chúng ta có thể in logo dịch vụ dọn dẹp của mình lên bút không?"
      },
      {
        "id": "p3-41-3",
        "speaker": "Woman",
        "text": "Yes, for no extra charge. And they're biodegradable. They're made from paper.",
        "vietnamese": "Có chứ, miễn phí in thêm luôn. Và chúng có khả năng phân hủy sinh học, làm hoàn toàn bằng giấy đấy."
      },
      {
        "id": "p3-41-4",
        "speaker": "Man 2",
        "text": "So when we hand them out, we can mention that.",
        "vietnamese": "Vậy thì khi phát quà cho mọi người, chúng ta có thể nhấn mạnh điểm đó."
      },
      {
        "id": "p3-41-5",
        "speaker": "Man 1",
        "text": "As well as talk about the organic cleaning supplies our company uses.",
        "vietnamese": "Cũng như nhắc tới các chất tẩy rửa hữu cơ mà công ty chúng ta sử dụng."
      },
      {
        "id": "p3-41-6",
        "speaker": "Woman",
        "text": "OK. I'll go ahead and order several cases.",
        "vietnamese": "Được rồi. Tôi sẽ tiến hành đặt mua vài thùng ngay."
      }
    ],
    "questions": [
      {
        "num": 41,
        "question": "What event are the speakers preparing for?",
        "vietnameseQuestion": "Những người nói đang chuẩn bị cho sự kiện gì?",
        "options": [
          {
            "key": "A",
            "text": "A new-employee orientation",
            "vietnamese": "Định hướng nhân viên mới"
          },
          {
            "key": "B",
            "text": "A grand opening",
            "vietnamese": "Lễ khai trương trọng thể"
          },
          {
            "key": "C",
            "text": "A community festival",
            "vietnamese": "Một lễ hội cộng đồng"
          },
          {
            "key": "D",
            "text": "A trade show",
            "vietnamese": "Hội chợ thương mại"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Người phụ nữ đề cập: 'give away at the community festival to promote our business'."
      },
      {
        "num": 42,
        "question": "What is mentioned about some pens?",
        "vietnameseQuestion": "Điều gì được nói về những chiếc bút?",
        "options": [
          {
            "key": "A",
            "text": "They are available in multiple colors.",
            "vietnamese": "Có nhiều màu sắc đa dạng"
          },
          {
            "key": "B",
            "text": "They use permanent ink.",
            "vietnamese": "Sử dụng mực vĩnh viễn không phai"
          },
          {
            "key": "C",
            "text": "They are preferred by book authors.",
            "vietnamese": "Được các tác giả sách ưa chuộng"
          },
          {
            "key": "D",
            "text": "They are made from paper.",
            "vietnamese": "Chúng được làm từ giấy"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Người phụ nữ giải thích: 'And they're biodegradable. They're made from paper'."
      },
      {
        "num": 43,
        "question": "What does the woman offer to do?",
        "vietnameseQuestion": "Người phụ nữ đề nghị làm điều gì?",
        "options": [
          {
            "key": "A",
            "text": "Reserve a booth",
            "vietnamese": "Đặt một gian hàng"
          },
          {
            "key": "B",
            "text": "Place an order",
            "vietnamese": "Đặt hàng"
          },
          {
            "key": "C",
            "text": "Organize a focus group",
            "vietnamese": "Tổ chức nhóm thảo luận"
          },
          {
            "key": "D",
            "text": "Revise a budget",
            "vietnamese": "Xem lại ngân sách"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Câu kết thúc của người phụ nữ: 'I'll go ahead and order several cases' tương ứng với 'Place an order'."
      }
    ],
    "vocabulary": [
      {
        "word": "promote",
        "meaning": "quảng bá, thúc đẩy",
        "partOfSpeech": "v"
      },
      {
        "word": "biodegradable",
        "meaning": "có thể phân hủy sinh học thân thiện môi trường",
        "partOfSpeech": "adj"
      },
      {
        "word": "organic",
        "meaning": "hữu cơ tự nhiên",
        "partOfSpeech": "adj"
      },
      {
        "word": "hand out",
        "meaning": "phát, phân phát",
        "partOfSpeech": "phr v"
      }
    ]
  },
  {
    "id": "part3-44-46",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 44 - 46",
    "title": "Part 3 - Câu 44-46: Dịch vụ thanh lý rác thải điện tử",
    "audioSrc": "/audio/cuts/test1/E26-T01-44-46.mp3",
    "transcript": [
      {
        "id": "p3-44-1",
        "speaker": "Woman",
        "text": "Jamestown Recycling Facility. How can I help you?",
        "vietnamese": "Cơ sở tái chế Jamestown xin nghe. Tôi có thể giúp gì cho bạn?"
      },
      {
        "id": "p3-44-2",
        "speaker": "Man",
        "text": "Hi. I'm preparing to move soon, and I have some electronics, such as televisions and computers, that I'd like to get rid of before I put my house on the market. My friend mentioned you might take them.",
        "vietnamese": "Chào cô. Tôi sắp chuyển nhà, và tôi có một số thiết bị điện tử như tivi và máy tính muốn thanh lý trước khi rao bán nhà. Bạn tôi bảo bên cô có thể tiếp nhận chúng."
      },
      {
        "id": "p3-44-3",
        "speaker": "Woman",
        "text": "Yes, that's right. We'll take all electronics.",
        "vietnamese": "Dạ đúng rồi ạ. Chúng tôi tiếp nhận tất cả các đồ điện tử."
      },
      {
        "id": "p3-44-4",
        "speaker": "Man",
        "text": "Great. I just have one question. Do you provide a pickup service?",
        "vietnamese": "Tuyệt quá. Tôi chỉ có một thắc mắc là bên cô có dịch vụ đến tận nhà thu gom không?"
      },
      {
        "id": "p3-44-5",
        "speaker": "Woman",
        "text": "No, unfortunately you'll have to bring everything here yourself. However, on our Web site we list a number of companies that can remove and dispose of the items for you.",
        "vietnamese": "Dạ tiếc là không, anh sẽ phải tự mang mọi thứ đến đây. Tuy nhiên, trên trang web của chúng tôi có liệt kê một số công ty có thể giúp anh tháo dỡ và dọn dẹp các đồ đó."
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
            "text": "At a delivery service",
            "vietnamese": "Tại dịch vụ giao hàng"
          },
          {
            "key": "B",
            "text": "At an electronics store",
            "vietnamese": "Tại cửa hàng đồ điện tử"
          },
          {
            "key": "C",
            "text": "At a recycling facility",
            "vietnamese": "Tại một cơ sở tái chế"
          },
          {
            "key": "D",
            "text": "At a real estate agency",
            "vietnamese": "Tại văn phòng môi giới bất động sản"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Người phụ nữ bắt máy: 'Jamestown Recycling Facility. How can I help you?'"
      },
      {
        "num": 45,
        "question": "What does the man want to dispose of?",
        "vietnameseQuestion": "Người đàn ông muốn thanh lý vứt bỏ thứ gì?",
        "options": [
          {
            "key": "A",
            "text": "Yard waste",
            "vietnamese": "Rác thải sân vườn"
          },
          {
            "key": "B",
            "text": "Used furniture",
            "vietnamese": "Đồ nội thất cũ"
          },
          {
            "key": "C",
            "text": "Electronics",
            "vietnamese": "Thiết bị điện tử"
          },
          {
            "key": "D",
            "text": "Books",
            "vietnamese": "Sách báo"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Người đàn ông nói: 'I have some electronics, such as televisions and computers, that I'd like to get rid of'."
      },
      {
        "num": 46,
        "question": "What does the woman say can be found on a Web site?",
        "vietnameseQuestion": "Người phụ nữ nói có thể tìm thấy gì trên trang web?",
        "options": [
          {
            "key": "A",
            "text": "A list of companies",
            "vietnamese": "Danh sách các công ty"
          },
          {
            "key": "B",
            "text": "Hours of operation",
            "vietnamese": "Giờ mở cửa hoạt động"
          },
          {
            "key": "C",
            "text": "A permit application",
            "vietnamese": "Đơn xin cấp phép"
          },
          {
            "key": "D",
            "text": "Directions to a site",
            "vietnamese": "Chỉ đường đến địa điểm"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Người phụ nữ cho biết: 'on our Web site we list a number of companies that can remove and dispose of the items for you'."
      }
    ],
    "vocabulary": [
      {
        "word": "recycling facility",
        "meaning": "cơ sở/nhà máy tái chế",
        "partOfSpeech": "n"
      },
      {
        "word": "get rid of",
        "meaning": "vứt bỏ, tống khứ, thanh lý",
        "partOfSpeech": "phr v"
      },
      {
        "word": "put on the market",
        "meaning": "rao bán trên thị trường",
        "partOfSpeech": "idiom"
      },
      {
        "word": "dispose of",
        "meaning": "xử lý, loại bỏ",
        "partOfSpeech": "phr v"
      }
    ]
  },
  {
    "id": "part3-47-49",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 47 - 49",
    "title": "Part 3 - Câu 47-49: Gặp lại bạn học lớp kinh doanh tại tiệm bánh",
    "audioSrc": "/audio/cuts/test1/E26-T01-47-49.mp3",
    "transcript": [
      {
        "id": "p3-47-1",
        "speaker": "Man",
        "text": "Zaina! What a surprise! I haven't seen you since we took that class for business owners together last year. How are you?",
        "vietnamese": "Zaina! Thật là bất ngờ quá! Tôi đã không gặp bạn kể từ hồi chúng mình cùng học lớp dành cho chủ doanh nghiệp năm ngoái. Bạn khỏe không?"
      },
      {
        "id": "p3-47-2",
        "speaker": "Woman",
        "text": "Great, thanks. I was just in the neighborhood and thought I'd stop in for a cookie or a piece of cake. You have so many delicious baked goods here.",
        "vietnamese": "Tôi khỏe, cảm ơn anh. Tôi tình cờ đi ngang khu này nên ghé vào mua ít bánh quy hoặc một miếng bánh ngọt. Quán anh có nhiều đồ bánh nướng ngon quá."
      },
      {
        "id": "p3-47-3",
        "speaker": "Man",
        "text": "Thank you! It's been a good year for business. I'm even considering opening a second location.",
        "vietnamese": "Cảm ơn bạn! Năm nay công việc kinh doanh khá tốt. Tôi thậm chí đang tính mở thêm cơ sở thứ hai."
      },
      {
        "id": "p3-47-4",
        "speaker": "Woman",
        "text": "Really? Well, I noticed that Sunnyvale Restaurant went out of business, and the building's up for lease. It's very close to the local university. You'd probably get a lot of walk-in customers.",
        "vietnamese": "Thật sao? À, tôi thấy nhà hàng Sunnyvale đã đóng cửa nghỉ bán rồi, và mặt bằng ở đó đang treo biển cho thuê đấy. Vị trí rất gần trường đại học địa phương. Anh có thể sẽ thu hút được rất nhiều khách vãng lai ghé vào đấy."
      }
    ],
    "questions": [
      {
        "num": 47,
        "question": "How do the speakers know each other?",
        "vietnameseQuestion": "Hai người nói quen biết nhau như thế nào?",
        "options": [
          {
            "key": "A",
            "text": "They took a class together.",
            "vietnamese": "Họ từng học chung một lớp."
          },
          {
            "key": "B",
            "text": "They used to work for the same company.",
            "vietnamese": "Họ từng làm cùng một công ty."
          },
          {
            "key": "C",
            "text": "They grew up in the same neighborhood.",
            "vietnamese": "Họ lớn lên cùng một khu phố."
          },
          {
            "key": "D",
            "text": "They met on a train.",
            "vietnamese": "Họ gặp nhau trên tàu hỏa."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Người đàn ông nhắc lại: 'since we took that class for business owners together last year'."
      },
      {
        "num": 48,
        "question": "What type of business does the man most likely own?",
        "vietnameseQuestion": "Người đàn ông nhiều khả năng làm chủ cơ sở kinh doanh nào?",
        "options": [
          {
            "key": "A",
            "text": "A fitness center",
            "vietnamese": "Phòng tập thể hình"
          },
          {
            "key": "B",
            "text": "A real estate agency",
            "vietnamese": "Văn phòng bất động sản"
          },
          {
            "key": "C",
            "text": "A culinary school",
            "vietnamese": "Trường dạy nấu ăn"
          },
          {
            "key": "D",
            "text": "A bakery",
            "vietnamese": "Một tiệm bánh"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Người phụ nữ nói ghé vào tiệm mua 'cookie or a piece of cake' và khen tiệm có 'so many delicious baked goods'."
      },
      {
        "num": 49,
        "question": "What advantage does the woman point out about a rental space?",
        "vietnameseQuestion": "Người phụ nữ chỉ ra ưu điểm gì về mặt bằng cho thuê?",
        "options": [
          {
            "key": "A",
            "text": "Its price",
            "vietnamese": "Mức giá cả"
          },
          {
            "key": "B",
            "text": "Its size",
            "vietnamese": "Diện tích rộng rãi"
          },
          {
            "key": "C",
            "text": "Its location",
            "vietnamese": "Vị trí địa lý"
          },
          {
            "key": "D",
            "text": "Its design",
            "vietnamese": "Thiết kế đẹp mắt"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Cô gợi ý mặt bằng 'very close to the local university' (rất gần trường đại học), đây là lợi thế về vị trí (location)."
      }
    ],
    "vocabulary": [
      {
        "word": "baked goods",
        "meaning": "đồ bánh nướng",
        "partOfSpeech": "n"
      },
      {
        "word": "go out of business",
        "meaning": "phá sản, ngừng kinh doanh",
        "partOfSpeech": "idiom"
      },
      {
        "word": "up for lease",
        "meaning": "đang cho thuê",
        "partOfSpeech": "idiom"
      },
      {
        "word": "walk-in customer",
        "meaning": "khách vãng lai trực tiếp vào tiệm",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part3-50-52",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 50 - 52",
    "title": "Part 3 - Câu 50-52: Lỗi nhân vật trong trò chơi điện tử mới",
    "audioSrc": "/audio/cuts/test1/E26-T01-50-52.mp3",
    "transcript": [
      {
        "id": "p3-50-1",
        "speaker": "Woman",
        "text": "Hi, Koji. I think our new video game is nearly ready to be released. Are you aware of any improvements that need to be made before then?",
        "vietnamese": "Chào Koji. Tôi nghĩ tựa game mới của chúng ta gần như đã sẵn sàng để phát hành rồi. Anh có nhận thấy cải tiến nào cần làm trước thời điểm đó không?"
      },
      {
        "id": "p3-50-2",
        "speaker": "Man",
        "text": "Actually, I just finished testing the game this morning. I found a problem in the third stage of the game. There were a few times when my character couldn't move.",
        "vietnamese": "Thực ra sáng nay tôi vừa kiểm thử xong trò chơi. Tôi phát hiện một lỗi ở màn thứ ba. Đã có vài lần nhân vật của tôi không thể di chuyển được."
      },
      {
        "id": "p3-50-3",
        "speaker": "Woman",
        "text": "Oh, that's strange!",
        "vietnamese": "Ồ, lạ thật đấy!"
      },
      {
        "id": "p3-50-4",
        "speaker": "Man",
        "text": "I double-checked the problem using a different controller. The same issue came up.",
        "vietnamese": "Tôi đã kiểm tra lại lỗi này bằng một tay cầm chơi game khác. Hiện tượng tương tự vẫn xảy ra."
      },
      {
        "id": "p3-50-5",
        "speaker": "Woman",
        "text": "Oh. I think Pauline had a similar problem with a game she tested. Maybe you should ask her about it.",
        "vietnamese": "Ồ. Tôi nhớ Pauline cũng từng gặp vấn đề tương tự với một trò chơi mà cô ấy kiểm thử. Có lẽ anh nên hỏi cô ấy về chuyện đó xem sao."
      }
    ],
    "questions": [
      {
        "num": 50,
        "question": "Who most likely are the speakers?",
        "vietnameseQuestion": "Những người nói nhiều khả năng là ai?",
        "options": [
          {
            "key": "A",
            "text": "Film actors",
            "vietnamese": "Diễn viên điện ảnh"
          },
          {
            "key": "B",
            "text": "Museum directors",
            "vietnamese": "Giám đốc bảo tàng"
          },
          {
            "key": "C",
            "text": "Video game developers",
            "vietnamese": "Nhà phát triển game"
          },
          {
            "key": "D",
            "text": "Investigative journalists",
            "vietnamese": "Nhà báo điều tra"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Họ nói về 'our new video game', 'testing the game', 'third stage of the game', cho thấy họ là các nhà phát triển game."
      },
      {
        "num": 51,
        "question": "What did the man recently do?",
        "vietnameseQuestion": "Gần đây người đàn ông đã làm gì?",
        "options": [
          {
            "key": "A",
            "text": "He secured some funding.",
            "vietnamese": "Anh ấy huy động được vốn."
          },
          {
            "key": "B",
            "text": "He tested a product.",
            "vietnamese": "Anh ấy đã kiểm thử một sản phẩm."
          },
          {
            "key": "C",
            "text": "He read a script.",
            "vietnamese": "Anh ấy đã đọc kịch bản."
          },
          {
            "key": "D",
            "text": "He conducted an interview.",
            "vietnamese": "Anh ấy thực hiện buổi phỏng vấn."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Người nam nói: 'I just finished testing the game this morning' tương đương với 'tested a product'."
      },
      {
        "num": 52,
        "question": "What does the woman suggest?",
        "vietnameseQuestion": "Người phụ nữ đề xuất điều gì?",
        "options": [
          {
            "key": "A",
            "text": "Consulting a colleague",
            "vietnamese": "Hỏi ý kiến một đồng nghiệp"
          },
          {
            "key": "B",
            "text": "Planning an event",
            "vietnamese": "Lên kế hoạch sự kiện"
          },
          {
            "key": "C",
            "text": "Negotiating a contract",
            "vietnamese": "Đàm phán hợp đồng"
          },
          {
            "key": "D",
            "text": "Giving a client an update",
            "vietnamese": "Cập nhật cho khách hàng"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Người phụ nữ khuyên hỏi Pauline: 'Maybe you should ask her about it' tương ứng với 'Consulting a colleague'."
      }
    ],
    "vocabulary": [
      {
        "word": "release",
        "meaning": "phát hành, ra mắt",
        "partOfSpeech": "v"
      },
      {
        "word": "character",
        "meaning": "nhân vật trong game",
        "partOfSpeech": "n"
      },
      {
        "word": "double-check",
        "meaning": "kiểm tra lại lần nữa",
        "partOfSpeech": "v"
      },
      {
        "word": "controller",
        "meaning": "tay cầm điều khiển game",
        "partOfSpeech": "n"
      },
      {
        "word": "consult",
        "meaning": "tham vấn, hỏi ý kiến",
        "partOfSpeech": "v"
      }
    ]
  },
  {
    "id": "part3-53-55",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 53 - 55",
    "title": "Part 3 - Câu 53-55: Báo hỏng bộ điều nhiệt tại chung cư",
    "audioSrc": "/audio/cuts/test1/E26-T01-53-55.mp3",
    "transcript": [
      {
        "id": "p3-53-1",
        "speaker": "Man",
        "text": "You've reached the maintenance office at Hillview Apartment Complex.",
        "vietnamese": "Bạn đang gọi tới văn phòng bảo trì của Khu chung cư Hillview."
      },
      {
        "id": "p3-53-2",
        "speaker": "Woman",
        "text": "Hi. This is Palavi Sen from unit 35B. I'm calling because the new thermostat in my apartment isn't working. It keeps shutting off and turning on randomly, so my apartment is getting cold.",
        "vietnamese": "Xin chào. Tôi là Palavi Sen ở căn hộ 35B. Tôi gọi vì bộ điều nhiệt mới trong căn hộ của tôi không hoạt động. Nó cứ bật tắt chập chờn ngẫu nhiên, làm cho căn hộ của tôi bị lạnh ngắt."
      },
      {
        "id": "p3-53-3",
        "speaker": "Man",
        "text": "When did this issue start?",
        "vietnamese": "Sự cố này bắt đầu từ khi nào vậy ạ?"
      },
      {
        "id": "p3-53-4",
        "speaker": "Woman",
        "text": "A few hours ago. The thermostat was just installed yesterday.",
        "vietnamese": "Cách đây vài giờ. Chiếc máy điều nhiệt đó mới chỉ vừa được lắp hôm qua thôi."
      },
      {
        "id": "p3-53-5",
        "speaker": "Man",
        "text": "OK. I can come and take a look at it tomorrow morning.",
        "vietnamese": "Được rồi. Sáng mai tôi có thể qua kiểm tra cho chị."
      },
      {
        "id": "p3-53-6",
        "speaker": "Woman",
        "text": "But it's supposed to be below freezing tonight!",
        "vietnamese": "Nhưng mà đêm nay trời dự báo sẽ rét dưới 0 độ C đấy!"
      }
    ],
    "questions": [
      {
        "num": 53,
        "question": "Who most likely is the man?",
        "vietnameseQuestion": "Người đàn ông nhiều khả năng là ai?",
        "options": [
          {
            "key": "A",
            "text": "A delivery driver",
            "vietnamese": "Tài xế giao hàng"
          },
          {
            "key": "B",
            "text": "A security guard",
            "vietnamese": "Nhân viên bảo vệ"
          },
          {
            "key": "C",
            "text": "A maintenance worker",
            "vietnamese": "Nhân viên bảo trì sửa chữa"
          },
          {
            "key": "D",
            "text": "A customer service representative",
            "vietnamese": "Đại diện chăm sóc khách hàng"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Người nam trả lời: 'You've reached the maintenance office' và nhận sẽ đến kiểm tra bộ điều nhiệt, nên anh ấy là nhân viên bảo trì (maintenance worker)."
      },
      {
        "num": 54,
        "question": "What problem does the woman describe?",
        "vietnameseQuestion": "Người phụ nữ miêu tả vấn đề gì?",
        "options": [
          {
            "key": "A",
            "text": "A device is malfunctioning.",
            "vietnamese": "Một thiết bị đang bị trục trặc."
          },
          {
            "key": "B",
            "text": "A key is missing.",
            "vietnamese": "Bị mất chìa khóa."
          },
          {
            "key": "C",
            "text": "A parking area is unavailable.",
            "vietnamese": "Bãi đỗ xe không thể sử dụng."
          },
          {
            "key": "D",
            "text": "A package was not received.",
            "vietnamese": "Chưa nhận được kiện hàng."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Cô phàn nàn: 'the new thermostat in my apartment isn't working... shutting off and turning on randomly', tức là một thiết bị bị hỏng hóc (malfunctioning)."
      },
      {
        "num": 55,
        "question": "What does the woman mean when she says, \"it's supposed to be below freezing tonight\"?",
        "vietnameseQuestion": "Người phụ nữ có ý gì khi nói \"tối nay nhiệt độ dự kiến xuống dưới 0 độ đấy\"?",
        "options": [
          {
            "key": "A",
            "text": "She is surprised by the weather forecast.",
            "vietnamese": "Cô bất ngờ trước dự báo thời tiết."
          },
          {
            "key": "B",
            "text": "She wants a service to be completed sooner.",
            "vietnamese": "Cô muốn dịch vụ được xử lý sớm hơn."
          },
          {
            "key": "C",
            "text": "She will move some items indoors.",
            "vietnamese": "Cô sẽ chuyển đồ đạc vào trong nhà."
          },
          {
            "key": "D",
            "text": "She would prefer to park near her apartment.",
            "vietnamese": "Cô muốn đỗ xe gần căn hộ hơn."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Khi nhân viên bảo trì bảo sáng mai mới tới, cô nhấn mạnh tối nay trời sẽ đóng băng để hối thúc anh phải tới sửa ngay trong hôm nay (sooner)."
      }
    ],
    "vocabulary": [
      {
        "word": "maintenance office",
        "meaning": "văn phòng bảo trì",
        "partOfSpeech": "n"
      },
      {
        "word": "thermostat",
        "meaning": "thiết bị điều nhiệt",
        "partOfSpeech": "n"
      },
      {
        "word": "malfunction",
        "meaning": "gặp sự cố trục trặc",
        "partOfSpeech": "v"
      },
      {
        "word": "below freezing",
        "meaning": "dưới nhiệt độ đóng băng (dưới 0°C)",
        "partOfSpeech": "adj"
      }
    ]
  },
  {
    "id": "part3-56-58",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 56 - 58",
    "title": "Part 3 - Câu 56-58: Xin vay vốn mở rộng kinh doanh thiết bị thể thao",
    "audioSrc": "/audio/cuts/test1/E26-T01-56-58.mp3",
    "transcript": [
      {
        "id": "p3-56-1",
        "speaker": "Woman",
        "text": "Good morning! Welcome to Jasper Bank.",
        "vietnamese": "Xin chào buổi sáng! Chào mừng quý khách đến với Ngân hàng Jasper."
      },
      {
        "id": "p3-56-2",
        "speaker": "Man 1",
        "text": "Thanks for meeting with us to discuss a loan for our business.",
        "vietnamese": "Cảm ơn cô đã dành thời gian gặp chúng tôi để trao đổi về khoản vay cho doanh nghiệp."
      },
      {
        "id": "p3-56-3",
        "speaker": "Woman",
        "text": "Why don't you tell me more about your business? I understand it's a repair shop?",
        "vietnamese": "Các anh có thể chia sẻ thêm về mô hình kinh doanh của mình không? Theo tôi hiểu thì đó là một xưởng sửa chữa phải không ạ?"
      },
      {
        "id": "p3-56-4",
        "speaker": "Man 2",
        "text": "Well, ten years ago, we opened as a snowmobile repair shop, but after a few years, we also started renting out snowmobiles and other sports equipment.",
        "vietnamese": "Dạ, 10 năm trước chúng tôi bắt đầu với tiệm sửa xe trượt tuyết, nhưng sau vài năm, chúng tôi mở rộng thêm dịch vụ cho thuê xe trượt tuyết và các thiết bị thể thao khác."
      },
      {
        "id": "p3-56-5",
        "speaker": "Man 1",
        "text": "Yes, and because winter tourism has increased recently, we'd like to expand our space so that we can carry more inventory.",
        "vietnamese": "Đúng vậy, và vì ngành du lịch mùa đông gần đây tăng trưởng mạnh, chúng tôi muốn mở rộng diện tích cửa hàng để có thể nhập thêm nhiều hàng tồn kho hơn."
      }
    ],
    "questions": [
      {
        "num": 56,
        "question": "Why do the men want to speak to the woman?",
        "vietnameseQuestion": "Tại sao những người đàn ông muốn nói chuyện với người phụ nữ?",
        "options": [
          {
            "key": "A",
            "text": "To review a building design",
            "vietnamese": "Để xem xét thiết kế tòa nhà"
          },
          {
            "key": "B",
            "text": "To discuss a loan",
            "vietnamese": "Để thảo luận về một khoản vay"
          },
          {
            "key": "C",
            "text": "To develop an advertising plan",
            "vietnamese": "Để phát triển kế hoạch quảng cáo"
          },
          {
            "key": "D",
            "text": "To purchase some supplies",
            "vietnamese": "Để mua sắm một số vật tư"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Người đàn ông nói rõ ngay từ đầu tại ngân hàng: 'discuss a loan for our business'."
      },
      {
        "num": 57,
        "question": "What type of business do the men own?",
        "vietnameseQuestion": "Họ sở hữu loại hình kinh doanh nào?",
        "options": [
          {
            "key": "A",
            "text": "A sports equipment store",
            "vietnamese": "Cửa hàng thiết bị thể thao"
          },
          {
            "key": "B",
            "text": "A winter apparel store",
            "vietnamese": "Cửa hàng quần áo mùa đông"
          },
          {
            "key": "C",
            "text": "An automobile dealership",
            "vietnamese": "Đại lý bán xe ô tô"
          },
          {
            "key": "D",
            "text": "A hotel chain",
            "vietnamese": "Chuỗi khách sạn"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Họ kinh doanh sửa chữa và cho thuê 'snowmobiles and other sports equipment' (xe trượt tuyết và dụng cụ thể thao)."
      },
      {
        "num": 58,
        "question": "According to the men, what has changed recently?",
        "vietnameseQuestion": "Theo lời các đối tác, điều gì đã thay đổi gần đây?",
        "options": [
          {
            "key": "A",
            "text": "Roads have become more accessible.",
            "vietnamese": "Hệ thống đường sá dễ tiếp cận hơn."
          },
          {
            "key": "B",
            "text": "Costs have decreased.",
            "vietnamese": "Chi phí đã giảm xuống."
          },
          {
            "key": "C",
            "text": "Tourism has increased.",
            "vietnamese": "Lượng du khách đã gia tăng."
          },
          {
            "key": "D",
            "text": "Weather patterns have shifted.",
            "vietnamese": "Quy luật thời tiết đã thay đổi."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Người đàn ông thứ nhất cho biết: 'because winter tourism has increased recently'."
      }
    ],
    "vocabulary": [
      {
        "word": "loan",
        "meaning": "khoản vay ngân hàng",
        "partOfSpeech": "n"
      },
      {
        "word": "snowmobile",
        "meaning": "xe trượt tuyết có động cơ",
        "partOfSpeech": "n"
      },
      {
        "word": "rent out",
        "meaning": "cho thuê",
        "partOfSpeech": "phr v"
      },
      {
        "word": "inventory",
        "meaning": "hàng tồn kho, lượng hàng hóa",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part3-59-61",
    "part": 3,
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 59 - 61",
    "title": "Part 3 - Câu 59-61: Đào tạo công nhân bằng video quay qua điện thoại",
    "audioSrc": "/audio/cuts/test1/E26-T01-59-61.mp3",
    "transcript": [
      {
        "id": "p3-59-1",
        "speaker": "Man",
        "text": "Many of our factory workers have expressed interest in upgrading their skills. I'd like to implement a peer-training program, where learners shadow more-experienced employees and observe how they do their jobs.",
        "vietnamese": "Nhiều công nhân nhà máy bày tỏ mong muốn được nâng cao tay nghề. Tôi muốn triển khai chương trình đào tạo kèm cặp, nơi người học sẽ đi cùng quan sát các nhân viên giàu kinh nghiệm làm việc."
      },
      {
        "id": "p3-59-2",
        "speaker": "Woman",
        "text": "I'm afraid that might become a burden for our long-time employees. They'll have to slow down their work to explain what they're doing.",
        "vietnamese": "Tôi e rằng điều đó sẽ trở thành gánh nặng cho các nhân viên lâu năm. Họ sẽ phải làm chậm tiến độ để vừa làm vừa giải thích."
      },
      {
        "id": "p3-59-3",
        "speaker": "Man",
        "text": "What if we videotaped experienced employees doing specific tasks? High-quality video can be recorded and edited with a smartphone.",
        "vietnamese": "Nếu chúng ta quay video lại các thao tác mẫu của nhân viên kinh nghiệm thì sao? Video chất lượng cao có thể quay và chỉnh sửa dễ dàng bằng điện thoại thông minh."
      },
      {
        "id": "p3-59-4",
        "speaker": "Woman",
        "text": "I like that idea. It would allow us to capture our workers' expertise without slowing down the production line.",
        "vietnamese": "Tôi thích ý tưởng đó. Nó sẽ giúp lưu lại chuyên môn của thợ giỏi mà không làm chậm dây chuyền sản xuất."
      }
    ],
    "questions": [
      {
        "num": 59,
        "question": "What does the man want to do?",
        "vietnameseQuestion": "Người đàn ông muốn làm điều gì?",
        "options": [
          {
            "key": "A",
            "text": "Provide training opportunities",
            "vietnamese": "Tạo cơ hội đào tạo nâng cao"
          },
          {
            "key": "B",
            "text": "Upgrade machinery",
            "vietnamese": "Nâng cấp máy móc thiết bị"
          },
          {
            "key": "C",
            "text": "Hire additional employees",
            "vietnamese": "Tuyển dụng thêm nhân viên"
          },
          {
            "key": "D",
            "text": "Reorganize the factory layout",
            "vietnamese": "Tái bố trí mặt bằng nhà máy"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Người nam muốn triển khai 'a peer-training program' để công nhân nâng cao tay nghề ('upgrading their skills')."
      },
      {
        "num": 60,
        "question": "What is the woman concerned about?",
        "vietnameseQuestion": "Người phụ nữ lo ngại về điều gì?",
        "options": [
          {
            "key": "A",
            "text": "Increasing expenses",
            "vietnamese": "Chi phí gia tăng"
          },
          {
            "key": "B",
            "text": "Introducing errors",
            "vietnamese": "Gây ra lỗi sai sót"
          },
          {
            "key": "C",
            "text": "Reducing productivity",
            "vietnamese": "Làm giảm sút năng suất"
          },
          {
            "key": "D",
            "text": "Causing confusion",
            "vietnamese": "Gây ra sự hỗn loạn hoang mang"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Cô lo rằng thợ kỳ cựu sẽ 'slow down their work' (chậm tiến độ), tức là làm giảm năng suất (reducing productivity)."
      },
      {
        "num": 61,
        "question": "What does the man mean when he says, \"High-quality video can be recorded and edited with a smartphone\"?",
        "vietnameseQuestion": "Người đàn ông có ý gì khi nói \"Video chất lượng cao có thể được quay và chỉnh sửa bằng điện thoại\"?",
        "options": [
          {
            "key": "A",
            "text": "A new policy should be established.",
            "vietnamese": "Một chính sách mới nên được ban hành."
          },
          {
            "key": "B",
            "text": "An idea is easy to implement.",
            "vietnamese": "Ý tưởng này rất dễ triển khai thực hiện."
          },
          {
            "key": "C",
            "text": "Data security is a concern.",
            "vietnamese": "Bảo mật dữ liệu là mối lo ngại."
          },
          {
            "key": "D",
            "text": "Some information should be verified.",
            "vietnamese": "Một số thông tin cần được xác minh."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Anh nhấn mạnh việc làm video bằng smartphone rất đơn giản, không tốn kém thiết bị phức tạp, ý nói giải pháp này rất dễ triển khai ('easy to implement')."
      }
    ],
    "vocabulary": [
      {
        "word": "peer-training",
        "meaning": "đào tạo ngang hàng, kèm cặp",
        "partOfSpeech": "n"
      },
      {
        "word": "shadow",
        "meaning": "đi kèm theo dõi để học việc",
        "partOfSpeech": "v"
      },
      {
        "word": "burden",
        "meaning": "gánh nặng",
        "partOfSpeech": "n"
      },
      {
        "word": "expertise",
        "meaning": "chuyên môn, tay nghề cao",
        "partOfSpeech": "n"
      },
      {
        "word": "production line",
        "meaning": "dây chuyền sản xuất",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part3-62-64",
    "part": 3,
    "imageUrl": "/images/intensive/test1/q62_64.png",
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 62 - 64",
    "title": "Part 3 - Câu 62-64: Lịch trình công tác tại Chicago",
    "audioSrc": "/audio/cuts/test1/E26-T01-62-64.mp3",
    "transcript": [
      {
        "id": "p3-62-1",
        "speaker": "Woman",
        "text": "Hi, Suresh. I'm at the airport waiting for my flight. I want to meet with a potential investor while I'm in Chicago. Her name's Marta Gomez. I can send you her contact information.",
        "vietnamese": "Chào Suresh. Tôi đang ở sân bay chờ chuyến bay. Tôi muốn gặp một nhà đầu tư tiềm năng trong thời gian ở Chicago. Tên cô ấy là Marta Gomez. Tôi có thể gửi thông tin liên lạc của cô ấy cho anh."
      },
      {
        "id": "p3-62-2",
        "speaker": "Man",
        "text": "OK. Which day would you prefer to meet with her?",
        "vietnamese": "Được rồi. Chị muốn gặp cô ấy vào ngày nào?"
      },
      {
        "id": "p3-62-3",
        "speaker": "Woman",
        "text": "How about right after my meeting with the Chicago staff?",
        "vietnamese": "Ngay sau cuộc họp của tôi với các nhân viên ở Chicago thì sao?"
      },
      {
        "id": "p3-62-4",
        "speaker": "Man",
        "text": "OK. By the way, did you see that our company won an award for our contributions to the community? It was just announced this morning.",
        "vietnamese": "Được chứ. Nhân tiện, chị đã biết tin công ty chúng ta vừa đạt giải thưởng vì những đóng góp cho cộng đồng chưa? Vừa được công bố sáng nay đấy."
      }
    ],
    "questions": [
      {
        "num": 62,
        "question": "Where is the woman?",
        "vietnameseQuestion": "Người phụ nữ đang ở đâu?",
        "options": [
          {
            "key": "A",
            "text": "At a restaurant",
            "vietnamese": "Ở một nhà hàng"
          },
          {
            "key": "B",
            "text": "At a travel agency",
            "vietnamese": "Ở đại lý du lịch"
          },
          {
            "key": "C",
            "text": "At an airport",
            "vietnamese": "Ở sân bay"
          },
          {
            "key": "D",
            "text": "At a warehouse",
            "vietnamese": "Ở nhà kho"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Người phụ nữ nói rõ: 'I'm at the airport waiting for my flight'."
      },
      {
        "num": 63,
        "question": "Look at the graphic. When does the woman prefer to meet with an investor?",
        "vietnameseQuestion": "Xem bảng biểu. Người phụ nữ muốn gặp nhà đầu tư vào khi nào?",
        "options": [
          {
            "key": "A",
            "text": "On Monday",
            "vietnamese": "Thứ Hai"
          },
          {
            "key": "B",
            "text": "On Tuesday",
            "vietnamese": "Thứ Ba"
          },
          {
            "key": "C",
            "text": "On Wednesday",
            "vietnamese": "Thứ Tư"
          },
          {
            "key": "D",
            "text": "On Thursday",
            "vietnamese": "Thứ Năm"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Cô muốn gặp ngay sau 'meeting with the Chicago staff'. Đối chiếu bảng lịch trình, cuộc họp này diễn ra vào 8:00 A.M. ngày thứ Tư (Wednesday)."
      },
      {
        "num": 64,
        "question": "What good news does the man share?",
        "vietnameseQuestion": "Người đàn ông chia sẻ tin tốt lành nào?",
        "options": [
          {
            "key": "A",
            "text": "A colleague received a promotion.",
            "vietnamese": "Một đồng nghiệp được thăng chức."
          },
          {
            "key": "B",
            "text": "A conference proposal was accepted.",
            "vietnamese": "Đề xuất hội nghị được chấp thuận."
          },
          {
            "key": "C",
            "text": "An airline ticket has been upgraded.",
            "vietnamese": "Vé máy bay được nâng hạng."
          },
          {
            "key": "D",
            "text": "A company won an award.",
            "vietnamese": "Công ty đạt được một giải thưởng."
          }
        ],
        "correctAnswer": "D",
        "explanation": "Người nam thông báo: 'our company won an award for our contributions to the community'."
      }
    ],
    "vocabulary": [
      {
        "word": "potential investor",
        "meaning": "nhà đầu tư tiềm năng",
        "partOfSpeech": "n"
      },
      {
        "word": "award",
        "meaning": "giải thưởng",
        "partOfSpeech": "n"
      },
      {
        "word": "contribution",
        "meaning": "sự đóng góp, cống hiến",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part3-65-67",
    "part": 3,
    "imageUrl": "/images/intensive/test1/q65_67.png",
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 65 - 67",
    "title": "Part 3 - Câu 65-67: Chỉnh sửa trang web vườn bách thảo",
    "audioSrc": "/audio/cuts/test1/E26-T01-65-67.mp3",
    "transcript": [
      {
        "id": "p3-65-1",
        "speaker": "Man",
        "text": "Marion, we keep getting calls from people who want to visit the botanical garden but can't find parking information. Isn't it on our Web site?",
        "vietnamese": "Marion ơi, chúng ta liên tục nhận cuộc gọi từ những người muốn đến tham quan vườn bách thảo nhưng không tìm thấy thông tin bãi đỗ xe. Nó có trên trang web của chúng ta không nhỉ?"
      },
      {
        "id": "p3-65-2",
        "speaker": "Woman",
        "text": "It is, but you have to click on the \"About Us\" page and scroll to the bottom of that page. Maybe people don't see it.",
        "vietnamese": "Có chứ, nhưng bạn phải bấm vào trang 'Về chúng tôi' (About Us) rồi cuộn xuống tận đáy trang. Có lẽ mọi người không nhìn thấy."
      },
      {
        "id": "p3-65-3",
        "speaker": "Man",
        "text": "Oh, I think we should move that information from the \"About Us\" page and make a separate page for directions and parking information. That way, people can find it more easily.",
        "vietnamese": "Ồ, tôi nghĩ chúng ta nên chuyển thông tin đó khỏi trang 'About Us' và tạo một trang riêng cho chỉ đường và đỗ xe. Như vậy mọi người sẽ dễ tìm hơn."
      },
      {
        "id": "p3-65-4",
        "speaker": "Woman",
        "text": "I'd be happy to make that change. But we're in the middle of updating our software, so it'll have to wait until Monday.",
        "vietnamese": "Tôi rất sẵn lòng chỉnh sửa. Nhưng chúng ta đang trong quá trình nâng cấp phần mềm, nên phải chờ đến thứ Hai mới làm được."
      }
    ],
    "questions": [
      {
        "num": 65,
        "question": "Where do the speakers work?",
        "vietnameseQuestion": "Những người nói làm việc ở đâu?",
        "options": [
          {
            "key": "A",
            "text": "At an amusement park",
            "vietnamese": "Tại công viên giải trí"
          },
          {
            "key": "B",
            "text": "At an art museum",
            "vietnamese": "Tại bảo tàng mỹ thuật"
          },
          {
            "key": "C",
            "text": "At a concert hall",
            "vietnamese": "Tại nhà hát hòa nhạc"
          },
          {
            "key": "D",
            "text": "At a botanical garden",
            "vietnamese": "Tại một vườn bách thảo"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Người nam nói về khách tham quan vườn bách thảo: 'visit the botanical garden'."
      },
      {
        "num": 66,
        "question": "Look at the graphic. Which page on the Web site does the man want to change?",
        "vietnameseQuestion": "Xem hình ảnh. Người đàn ông muốn chỉnh sửa trang nào trên trang web?",
        "options": [
          {
            "key": "A",
            "text": "Page 1",
            "vietnamese": "Trang 1 (About Us)"
          },
          {
            "key": "B",
            "text": "Page 2",
            "vietnamese": "Trang 2"
          },
          {
            "key": "C",
            "text": "Page 3",
            "vietnamese": "Trang 3"
          },
          {
            "key": "D",
            "text": "Page 4",
            "vietnamese": "Trang 4"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Người nam đề xuất chuyển thông tin khỏi trang 'About Us'. Theo sơ đồ trang web, 'About Us' là Page 1."
      },
      {
        "num": 67,
        "question": "Why does the woman say she cannot complete a task until Monday?",
        "vietnameseQuestion": "Tại sao người phụ nữ nói cô ấy chưa thể hoàn thành việc đó trước thứ Hai?",
        "options": [
          {
            "key": "A",
            "text": "She requires approval from a manager.",
            "vietnamese": "Cô ấy cần sự phê duyệt từ cấp trên."
          },
          {
            "key": "B",
            "text": "She is attending a workshop.",
            "vietnamese": "Cô ấy đang tham dự buổi tập huấn."
          },
          {
            "key": "C",
            "text": "Some software is being updated.",
            "vietnamese": "Một phần mềm đang được nâng cấp."
          },
          {
            "key": "D",
            "text": "Some clients will be arriving soon.",
            "vietnamese": "Khách hàng sắp đến nơi."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Người phụ nữ giải thích: 'we're in the middle of updating our software, so it'll have to wait until Monday'."
      }
    ],
    "vocabulary": [
      {
        "word": "botanical garden",
        "meaning": "vườn thực vật, vườn bách thảo",
        "partOfSpeech": "n"
      },
      {
        "word": "scroll",
        "meaning": "cuộn trang (chuột)",
        "partOfSpeech": "v"
      },
      {
        "word": "directions",
        "meaning": "chỉ đường, phương hướng",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part3-68-70",
    "part": 3,
    "imageUrl": "/images/intensive/test1/q68_70.png",
    "partTitle": "Part 3: Đoạn hội thoại",
    "questionRange": "Câu 68 - 70",
    "title": "Part 3 - Câu 68-70: Lắp đặt giá để xe đạp tại nhà ga",
    "audioSrc": "/audio/cuts/test1/E26-T01-68-70.mp3",
    "transcript": [
      {
        "id": "p3-68-1",
        "speaker": "Man",
        "text": "Good news! We have finally received the go-ahead for our department's project to install bicycle racks at the train station downtown.",
        "vietnamese": "Tin vui đây! Chúng ta cuối cùng đã nhận được sự chấp thuận cho dự án của phòng ban mình về việc lắp đặt các giá để xe đạp tại ga xe lửa trung tâm thành phố."
      },
      {
        "id": "p3-68-2",
        "speaker": "Woman",
        "text": "At last! So, now we need to decide where to place the racks. How about by the station entrance?",
        "vietnamese": "Cuối cùng cũng xong! Vậy giờ chúng ta cần quyết định vị trí đặt giá xe. Đặt ở ngay cổng vào ga thì sao?"
      },
      {
        "id": "p3-68-3",
        "speaker": "Man",
        "text": "Hmm. If we asked riders, I bet they'd say that the most convenient spot is as close to the platform as possible.",
        "vietnamese": "Ừm. Nếu hỏi những người đi tàu, tôi cá là họ sẽ nói vị trí thuận tiện nhất là càng gần sân ga càng tốt."
      },
      {
        "id": "p3-68-4",
        "speaker": "Woman",
        "text": "Let's do that. I'll contact some companies for estimates.",
        "vietnamese": "Làm thế đi. Tôi sẽ liên hệ một số công ty để xin báo giá chi phí."
      }
    ],
    "questions": [
      {
        "num": 68,
        "question": "What news does the man share?",
        "vietnameseQuestion": "Người đàn ông chia sẻ tin tức gì?",
        "options": [
          {
            "key": "A",
            "text": "A station road will be closed for repair.",
            "vietnamese": "Đường vào ga sẽ đóng để sửa chữa."
          },
          {
            "key": "B",
            "text": "A project has been approved.",
            "vietnamese": "Một dự án đã được phê duyệt."
          },
          {
            "key": "C",
            "text": "A parking area has been expanded.",
            "vietnamese": "Khu vực đỗ xe được mở rộng."
          },
          {
            "key": "D",
            "text": "An office will relocate.",
            "vietnamese": "Một văn phòng sẽ dời địa điểm."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Người nam nói: 'We have finally received the go-ahead for our department's project' ('go-ahead' = 'approved')."
      },
      {
        "num": 69,
        "question": "Look at the graphic. Where do the speakers decide to install some bicycle racks?",
        "vietnameseQuestion": "Xem sơ đồ. Họ quyết định lắp giá xe đạp ở đâu?",
        "options": [
          {
            "key": "A",
            "text": "Near the covered parking area",
            "vietnamese": "Gần khu vực đỗ xe có mái che"
          },
          {
            "key": "B",
            "text": "Near the long-term parking area",
            "vietnamese": "Gần khu đỗ xe dài hạn"
          },
          {
            "key": "C",
            "text": "Near the short-term parking area",
            "vietnamese": "Gần khu đỗ xe ngắn hạn"
          },
          {
            "key": "D",
            "text": "Near the overflow parking area",
            "vietnamese": "Gần khu đỗ xe bổ sung"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Họ đồng ý đặt ở vị trí gần sân ga (platform) nhất. Trên sơ đồ, vị trí tiếp giáp ngay cạnh Platform là 'Covered Parking'."
      },
      {
        "num": 70,
        "question": "Why does the woman say she will contact some companies?",
        "vietnameseQuestion": "Tại sao người phụ nữ nói cô ấy sẽ liên lạc một số công ty?",
        "options": [
          {
            "key": "A",
            "text": "To arrange a loan",
            "vietnamese": "Để thu xếp một khoản vay"
          },
          {
            "key": "B",
            "text": "To apply for a permit",
            "vietnamese": "Để nộp đơn xin giấy phép"
          },
          {
            "key": "C",
            "text": "To ask for estimates",
            "vietnamese": "Để xin báo giá dự toán"
          },
          {
            "key": "D",
            "text": "To create a proposal",
            "vietnamese": "Để lập đề xuất dự án"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Người phụ nữ nói câu kết: 'I'll contact some companies for estimates'."
      }
    ],
    "vocabulary": [
      {
        "word": "go-ahead",
        "meaning": "sự bật đèn xanh, cho phép tiến hành",
        "partOfSpeech": "n"
      },
      {
        "word": "bicycle rack",
        "meaning": "giá/kệ để xe đạp",
        "partOfSpeech": "n"
      },
      {
        "word": "platform",
        "meaning": "sân ga tàu hỏa",
        "partOfSpeech": "n"
      },
      {
        "word": "estimate",
        "meaning": "bản dự toán, bảng báo giá",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part4-71-73",
    "part": 4,
    "partTitle": "Part 4: Bài nói ngắn",
    "questionRange": "Câu 71 - 73",
    "title": "Part 4 - Câu 71-73: Tin nhắn tự động của tiệm sửa chữa ô tô",
    "audioSrc": "/audio/cuts/test1/E26-T01-71-73.mp3",
    "transcript": [
      {
        "id": "p4-71-1",
        "speaker": "Speaker",
        "text": "You've reached Select Repair Service. We specialize in all makes and models of automobiles.",
        "vietnamese": "Quý khách đang gọi đến Dịch vụ Sửa chữa Select. Chúng tôi chuyên sửa chữa mọi thương hiệu và mẫu mã xe ô tô."
      },
      {
        "id": "p4-71-2",
        "speaker": "Speaker",
        "text": "Our factory-trained specialists will keep your vehicle running in top condition.",
        "vietnamese": "Đội ngũ chuyên gia được đào tạo chính hãng của chúng tôi sẽ giữ cho phương tiện của bạn vận hành trong tình trạng tốt nhất."
      },
      {
        "id": "p4-71-3",
        "speaker": "Speaker",
        "text": "As an added benefit, we offer extended warranties on all vehicles we service. You can enjoy three extra years of worry-free driving.",
        "vietnamese": "Như một quyền lợi gia tăng, chúng tôi cung cấp gói bảo hành mở rộng cho mọi phương tiện bảo dưỡng tại đây. Quý khách có thể tận hưởng thêm 3 năm lái xe hoàn toàn an tâm."
      },
      {
        "id": "p4-71-4",
        "speaker": "Speaker",
        "text": "Please note that Select Repair Service will be closing on Friday, June 30, so we can complete our quarterly inventory of supplies. Thank you for your patience. A representative will be with you shortly.",
        "vietnamese": "Xin lưu ý rằng Dịch vụ Sửa chữa Select sẽ đóng cửa vào thứ Sáu, ngày 30 tháng 6, để chúng tôi hoàn thành việc kiểm kê vật tư định kỳ hàng quý. Cảm ơn sự kiên nhẫn của quý khách. Nhân viên đại diện sẽ kết nối cùng quý khách trong giây lát."
      }
    ],
    "questions": [
      {
        "num": 71,
        "question": "What type of products does the business repair?",
        "vietnameseQuestion": "Cơ sở này sửa chữa loại sản phẩm nào?",
        "options": [
          {
            "key": "A",
            "text": "Computers",
            "vietnamese": "Máy vi tính"
          },
          {
            "key": "B",
            "text": "Vehicles",
            "vietnamese": "Phương tiện giao thông / Xe cộ"
          },
          {
            "key": "C",
            "text": "Light fixtures",
            "vietnamese": "Đèn chiếu sáng"
          },
          {
            "key": "D",
            "text": "Kitchen appliances",
            "vietnamese": "Thiết bị nhà bếp"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Lời thoại nêu rõ: 'We specialize in all makes and models of automobiles' ('automobiles' = 'Vehicles')."
      },
      {
        "num": 72,
        "question": "What special benefit does the speaker mention?",
        "vietnameseQuestion": "Người nói nhắc đến quyền lợi đặc biệt nào?",
        "options": [
          {
            "key": "A",
            "text": "Free pickup",
            "vietnamese": "Đến nhận đồ miễn phí"
          },
          {
            "key": "B",
            "text": "Online scheduling",
            "vietnamese": "Đặt lịch trực tuyến"
          },
          {
            "key": "C",
            "text": "Extended warranties",
            "vietnamese": "Bảo hành mở rộng"
          },
          {
            "key": "D",
            "text": "A membership loyalty program",
            "vietnamese": "Chương trình khách hàng thân thiết"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Người nói giới thiệu: 'As an added benefit, we offer extended warranties on all vehicles we service'."
      },
      {
        "num": 73,
        "question": "Why will a business close on Friday?",
        "vietnameseQuestion": "Tại sao cơ sở sẽ đóng cửa vào thứ Sáu?",
        "options": [
          {
            "key": "A",
            "text": "For an inventory count",
            "vietnamese": "Để kiểm kê hàng hóa/vật tư"
          },
          {
            "key": "B",
            "text": "For employee training",
            "vietnamese": "Để đào tạo nhân viên"
          },
          {
            "key": "C",
            "text": "For a company celebration",
            "vietnamese": "Để tổ chức kỷ niệm công ty"
          },
          {
            "key": "D",
            "text": "For equipment installation",
            "vietnamese": "Để lắp đặt trang thiết bị"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Thông báo: 'closing on Friday, June 30, so we can complete our quarterly inventory of supplies' ('inventory of supplies' = 'inventory count')."
      }
    ],
    "vocabulary": [
      {
        "word": "specialize in",
        "meaning": "chuyên về lĩnh vực gì",
        "partOfSpeech": "v"
      },
      {
        "word": "automobile",
        "meaning": "xe ô tô",
        "partOfSpeech": "n"
      },
      {
        "word": "extended warranty",
        "meaning": "bảo hành mở rộng thêm thời gian",
        "partOfSpeech": "n"
      },
      {
        "word": "quarterly inventory",
        "meaning": "sự kiểm kê định kỳ theo quý",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part4-74-76",
    "part": 4,
    "partTitle": "Part 4: Bài nói ngắn",
    "questionRange": "Câu 74 - 76",
    "title": "Part 4 - Câu 74-76: Buổi định hướng nhân viên mới",
    "audioSrc": "/audio/cuts/test1/E26-T01-74-76.mp3",
    "transcript": [
      {
        "id": "p4-74-1",
        "speaker": "Speaker",
        "text": "Welcome, new employees! My name is Diego, and I facilitate all orientation sessions. Before we start today, you will need to set up your employee account.",
        "vietnamese": "Chào mừng các nhân viên mới! Tôi tên là Diego, tôi phụ trách điều phối tất cả các buổi định hướng. Trước khi bắt đầu hôm nay, các bạn sẽ cần thiết lập tài khoản nhân viên của mình."
      },
      {
        "id": "p4-74-2",
        "speaker": "Speaker",
        "text": "If you look at the first page of your training binder, you'll see your username and a temporary password.",
        "vietnamese": "Nếu các bạn mở trang đầu tiên của tập tài liệu đào tạo, các bạn sẽ thấy tên người dùng và mật khẩu tạm thời của mình."
      },
      {
        "id": "p4-74-3",
        "speaker": "Speaker",
        "text": "Please open the laptops you were given this morning and log in using those credentials. You will then be prompted to create your own password.",
        "vietnamese": "Xin vui lòng mở máy tính xách tay đã được cấp sáng nay và đăng nhập bằng thông tin xác thực đó. Sau đó, hệ thống sẽ yêu cầu bạn tự tạo mật khẩu của riêng mình."
      },
      {
        "id": "p4-74-4",
        "speaker": "Speaker",
        "text": "Once that's complete, you'll have access to all your department's files. Please note that you can only access them from your company computer.",
        "vietnamese": "Sau khi hoàn tất, bạn sẽ có quyền truy cập vào tất cả các tệp của phòng ban mình. Xin lưu ý rằng bạn chỉ có thể truy cập chúng từ máy tính của công ty."
      }
    ],
    "questions": [
      {
        "num": 74,
        "question": "Who most likely is the speaker?",
        "vietnameseQuestion": "Người nói nhiều khả năng là ai?",
        "options": [
          {
            "key": "A",
            "text": "A facilities manager",
            "vietnamese": "Quản lý cơ sở vật chất"
          },
          {
            "key": "B",
            "text": "A human resources representative",
            "vietnamese": "Đại diện bộ phận nhân sự"
          },
          {
            "key": "C",
            "text": "A security officer",
            "vietnamese": "Nhân viên an ninh"
          },
          {
            "key": "D",
            "text": "A corporate executive",
            "vietnamese": "Lãnh đạo tập đoàn"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Người nói chào đón nhân viên mới và điều phối buổi định hướng: 'I facilitate all orientation sessions', đó là công việc của bộ phận nhân sự (HR representative)."
      },
      {
        "num": 75,
        "question": "According to the speaker, what will the listeners find in a binder?",
        "vietnameseQuestion": "Theo người nói, người nghe sẽ tìm thấy gì trong tập hồ sơ?",
        "options": [
          {
            "key": "A",
            "text": "A map of the building",
            "vietnamese": "Bản đồ tòa nhà"
          },
          {
            "key": "B",
            "text": "An employment contract",
            "vietnamese": "Hợp đồng lao động"
          },
          {
            "key": "C",
            "text": "An identification badge",
            "vietnamese": "Thẻ nhân viên"
          },
          {
            "key": "D",
            "text": "Log-in credentials",
            "vietnamese": "Thông tin đăng nhập tài khoản"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Người nói chỉ rõ: 'you'll see your username and a temporary password' ('username and password' = 'Log-in credentials')."
      },
      {
        "num": 76,
        "question": "What does the speaker say about department files?",
        "vietnameseQuestion": "Người nói nhắc gì về các tệp tin của phòng ban?",
        "options": [
          {
            "key": "A",
            "text": "They are only accessible from company computers.",
            "vietnamese": "Chỉ có thể truy cập từ máy tính của công ty."
          },
          {
            "key": "B",
            "text": "They must be password protected.",
            "vietnamese": "Phải được cài mật khẩu bảo vệ."
          },
          {
            "key": "C",
            "text": "They must follow a specific naming convention.",
            "vietnamese": "Phải đặt tên theo quy ước định sẵn."
          },
          {
            "key": "D",
            "text": "They must be archived annually.",
            "vietnamese": "Phải lưu trữ định kỳ hàng năm."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Người nói căn dặn: 'Please note that you can only access them from your company computer'."
      }
    ],
    "vocabulary": [
      {
        "word": "facilitate",
        "meaning": "điều phối, chủ trì",
        "partOfSpeech": "v"
      },
      {
        "word": "orientation",
        "meaning": "buổi giới thiệu định hướng",
        "partOfSpeech": "n"
      },
      {
        "word": "binder",
        "meaning": "bìa còng hồ sơ, tập tài liệu",
        "partOfSpeech": "n"
      },
      {
        "word": "credentials",
        "meaning": "thông tin xác thực đăng nhập",
        "partOfSpeech": "n"
      },
      {
        "word": "prompt",
        "meaning": "nhắc nhở, yêu cầu thực hiện",
        "partOfSpeech": "v"
      }
    ]
  },
  {
    "id": "part4-77-79",
    "part": 4,
    "partTitle": "Part 4: Bài nói ngắn",
    "questionRange": "Câu 77 - 79",
    "title": "Part 4 - Câu 77-79: Hộp thư thoại từ công viên giải trí Denville",
    "audioSrc": "/audio/cuts/test1/E26-T01-77-79.mp3",
    "transcript": [
      {
        "id": "p4-77-1",
        "speaker": "Speaker",
        "text": "Hello. This is Heather Ross calling from Denville Amusement Park.",
        "vietnamese": "Xin chào. Tôi là Heather Ross gọi đến từ Công viên Giải trí Denville."
      },
      {
        "id": "p4-77-2",
        "speaker": "Speaker",
        "text": "About a month ago, I ordered one of your new video-game machines, Space Defenders.",
        "vietnamese": "Khoảng một tháng trước, tôi có đặt mua một chiếc máy trò chơi điện tử mới của bên bạn, tên là Space Defenders."
      },
      {
        "id": "p4-77-3",
        "speaker": "Speaker",
        "text": "I'm really happy with my purchase, since the game has been incredibly popular with our park guests!",
        "vietnamese": "Tôi thực sự rất hài lòng với món đồ đã mua, bởi vì trò chơi này cực kỳ được khách tham quan công viên ưa chuộng!"
      },
      {
        "id": "p4-77-4",
        "speaker": "Speaker",
        "text": "I'm considering buying some additional machines in the near future. I heard you may be releasing a new game soon. Could you call me back and let me know if that's true? Thanks!",
        "vietnamese": "Tôi đang tính mua thêm vài chiếc máy nữa trong tương lai gần. Tôi nghe nói bên bạn sắp ra mắt một trò chơi mới. Bạn có thể gọi lại và xác nhận giúp tôi xem điều đó có đúng không nhé? Cảm ơn bạn!"
      }
    ],
    "questions": [
      {
        "num": 77,
        "question": "Where does the speaker work?",
        "vietnameseQuestion": "Người nói làm việc ở đâu?",
        "options": [
          {
            "key": "A",
            "text": "At a laundry facility",
            "vietnamese": "Ở một tiệm giặt là"
          },
          {
            "key": "B",
            "text": "At an amusement park",
            "vietnamese": "Ở một công viên giải trí"
          },
          {
            "key": "C",
            "text": "At a sports stadium",
            "vietnamese": "Ở một sân vận động thể thao"
          },
          {
            "key": "D",
            "text": "At a fitness center",
            "vietnamese": "Ở một trung tâm thể hình"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Người nói tự giới thiệu: 'calling from Denville Amusement Park'."
      },
      {
        "num": 78,
        "question": "What does the speaker say about an item she ordered a month ago?",
        "vietnameseQuestion": "Người nói nhận xét gì về món đồ cô đặt mua cách đây một tháng?",
        "options": [
          {
            "key": "A",
            "text": "It arrived later than expected.",
            "vietnamese": "Nó đến muộn hơn dự kiến."
          },
          {
            "key": "B",
            "text": "It was damaged during delivery.",
            "vietnamese": "Nó bị hư hỏng trong quá trình vận chuyển."
          },
          {
            "key": "C",
            "text": "She needs help assembling it.",
            "vietnamese": "Cô ấy cần giúp đỡ lắp ráp."
          },
          {
            "key": "D",
            "text": "She is pleased with it.",
            "vietnamese": "Cô ấy rất hài lòng với nó."
          }
        ],
        "correctAnswer": "D",
        "explanation": "Cô ấy nói: 'I'm really happy with my purchase' ('happy with' = 'pleased with')."
      },
      {
        "num": 79,
        "question": "What does the speaker ask the listener to confirm?",
        "vietnameseQuestion": "Người nói yêu cầu người nghe xác nhận điều gì?",
        "options": [
          {
            "key": "A",
            "text": "Whether a new product will be available soon",
            "vietnamese": "Liệu sản phẩm mới có sắp sửa ra mắt không"
          },
          {
            "key": "B",
            "text": "When a replacement part will be shipped",
            "vietnamese": "Khi nào linh kiện thay thế sẽ được gửi"
          },
          {
            "key": "C",
            "text": "How long a warranty lasts",
            "vietnamese": "Thời hạn bảo hành kéo dài bao lâu"
          },
          {
            "key": "D",
            "text": "Who to contact about future orders",
            "vietnamese": "Liên hệ với ai về các đơn hàng tương lai"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Cô ấy muốn biết: 'I heard you may be releasing a new game soon. Could you call me back and let me know if that's true?'."
      }
    ],
    "vocabulary": [
      {
        "word": "amusement park",
        "meaning": "công viên giải trí",
        "partOfSpeech": "n"
      },
      {
        "word": "purchase",
        "meaning": "món đồ đã mua",
        "partOfSpeech": "n"
      },
      {
        "word": "incredibly popular",
        "meaning": "vô cùng phổ biến, rất được ưa chuộng",
        "partOfSpeech": "adj"
      },
      {
        "word": "release",
        "meaning": "phát hành, xuất xưởng",
        "partOfSpeech": "v"
      }
    ]
  },
  {
    "id": "part4-80-82",
    "part": 4,
    "partTitle": "Part 4: Bài nói ngắn",
    "questionRange": "Câu 80 - 82",
    "title": "Part 4 - Câu 80-82: Trích đoạn cuộc họp hội đồng quản trị về may mặc",
    "audioSrc": "/audio/cuts/test1/E26-T01-80-82.mp3",
    "transcript": [
      {
        "id": "p4-80-1",
        "speaker": "Speaker",
        "text": "The first agenda item for our board meeting is the annual sales report. We're all disappointed by the drop in our clothing sales.",
        "vietnamese": "Mục đầu tiên trong chương trình họp hội đồng quản trị là báo cáo doanh số thường niên. Tất cả chúng ta đều thất vọng vì sự sụt giảm doanh số bán quần áo."
      },
      {
        "id": "p4-80-2",
        "speaker": "Speaker",
        "text": "The decline is mostly due to distribution issues. Because our factories are all overseas, it takes too long for orders to reach customers.",
        "vietnamese": "Sự sụt giảm này chủ yếu do các vấn đề về phân phối. Vì các nhà máy của chúng ta đều ở nước ngoài, nên mất quá nhiều thời gian để đơn hàng đến tay khách hàng."
      },
      {
        "id": "p4-80-3",
        "speaker": "Speaker",
        "text": "So I'm recommending that we start manufacturing some clothing locally. We'll be looking for a location to build a manufacturing facility.",
        "vietnamese": "Do đó tôi đề xuất chúng ta nên bắt đầu sản xuất một phần quần áo ngay tại địa phương. Chúng ta sẽ tìm kiếm một địa điểm để xây dựng cơ sở sản xuất."
      },
      {
        "id": "p4-80-4",
        "speaker": "Speaker",
        "text": "I hired a consultant to put together a list of locations we could use. He'll be at our next board meeting to explain the pros and cons of each.",
        "vietnamese": "Tôi đã thuê một chuyên gia tư vấn để tổng hợp danh sách các địa điểm tiềm năng. Anh ấy sẽ có mặt trong cuộc họp hội đồng tiếp theo để phân tích ưu và nhược điểm của từng nơi."
      }
    ],
    "questions": [
      {
        "num": 80,
        "question": "What type of product does the speaker's company make?",
        "vietnameseQuestion": "Công ty của người nói sản xuất loại mặt hàng nào?",
        "options": [
          {
            "key": "A",
            "text": "Furniture",
            "vietnamese": "Đồ nội thất"
          },
          {
            "key": "B",
            "text": "Luggage",
            "vietnamese": "Hành lý vali"
          },
          {
            "key": "C",
            "text": "Bedding",
            "vietnamese": "Chăn ga gối đệm"
          },
          {
            "key": "D",
            "text": "Clothing",
            "vietnamese": "Quần áo may mặc"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Người nói chỉ rõ: 'the drop in our clothing sales' (sụt giảm doanh số quần áo)."
      },
      {
        "num": 81,
        "question": "What does the speaker recommend doing?",
        "vietnameseQuestion": "Người nói đề xuất hành động gì?",
        "options": [
          {
            "key": "A",
            "text": "Manufacturing some products locally",
            "vietnamese": "Sản xuất một số mặt hàng tại địa phương"
          },
          {
            "key": "B",
            "text": "Offering free shipping",
            "vietnamese": "Miễn phí vận chuyển"
          },
          {
            "key": "C",
            "text": "Participating in a trade show",
            "vietnamese": "Tham gia hội chợ thương mại"
          },
          {
            "key": "D",
            "text": "Developing a new product line",
            "vietnamese": "Phát triển dòng sản phẩm mới"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đề xuất rõ ràng: 'I'm recommending that we start manufacturing some clothing locally'."
      },
      {
        "num": 82,
        "question": "What will happen at the next meeting?",
        "vietnameseQuestion": "Điều gì sẽ diễn ra vào cuộc họp tiếp theo?",
        "options": [
          {
            "key": "A",
            "text": "A vote will take place.",
            "vietnamese": "Một cuộc bỏ phiếu sẽ diễn ra."
          },
          {
            "key": "B",
            "text": "A consultant will give a presentation.",
            "vietnamese": "Một chuyên gia tư vấn sẽ thuyết trình."
          },
          {
            "key": "C",
            "text": "Some contracts will be updated.",
            "vietnamese": "Một số hợp đồng sẽ được cập nhật."
          },
          {
            "key": "D",
            "text": "Safety procedures will be reviewed.",
            "vietnamese": "Quy trình an toàn sẽ được rà soát."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Người nói cho biết: 'I hired a consultant... He'll be at our next board meeting to explain the pros and cons of each' ('explain...' = 'give a presentation')."
      }
    ],
    "vocabulary": [
      {
        "word": "agenda item",
        "meaning": "mục trong chương trình nghị sự",
        "partOfSpeech": "n"
      },
      {
        "word": "decline",
        "meaning": "sự suy giảm, sụt giảm",
        "partOfSpeech": "n"
      },
      {
        "word": "distribution",
        "meaning": "sự phân phối hàng hóa",
        "partOfSpeech": "n"
      },
      {
        "word": "manufacture",
        "meaning": "sản xuất, chế tạo",
        "partOfSpeech": "v"
      },
      {
        "word": "pros and cons",
        "meaning": "ưu và nhược điểm",
        "partOfSpeech": "idiom"
      }
    ]
  },
  {
    "id": "part4-83-85",
    "part": 4,
    "partTitle": "Part 4: Bài nói ngắn",
    "questionRange": "Câu 83 - 85",
    "title": "Part 4 - Câu 83-85: Thông báo hoãn tàu do sửa đường ray",
    "audioSrc": "/audio/cuts/test1/E26-T01-83-85.mp3",
    "transcript": [
      {
        "id": "p4-83-1",
        "speaker": "Speaker",
        "text": "Attention, passengers. All trains to Midway Station are delayed for track repairs.",
        "vietnamese": "Xin quý hành khách chú ý. Tất cả các chuyến tàu đi Ga Midway đang bị hoãn để sửa chữa đường ray."
      },
      {
        "id": "p4-83-2",
        "speaker": "Speaker",
        "text": "Repair crews are working on a stretch of track just south of the town of Wheedon. They expect to complete the repair within the hour. We apologize for the delay.",
        "vietnamese": "Đội sửa chữa đang xử lý một đoạn đường ray ở ngay phía nam thị trấn Wheedon. Họ dự kiến sẽ hoàn thành việc sửa chữa trong vòng một giờ. Chúng tôi thành thật xin lỗi vì sự chậm trễ này."
      },
      {
        "id": "p4-83-3",
        "speaker": "Speaker",
        "text": "We understand that many commuters need to get to Midway as soon as possible. A bus will be departing for that destination in fifteen minutes.",
        "vietnamese": "Chúng tôi hiểu rằng nhiều hành khách đi làm cần đến Midway càng sớm càng tốt. Một chuyến xe buýt sẽ khởi hành tới điểm đến đó trong vòng mười lăm phút nữa."
      },
      {
        "id": "p4-83-4",
        "speaker": "Speaker",
        "text": "Also, a reminder that the station café opens at eight A.M., and there are food kiosks on platform one.",
        "vietnamese": "Ngoài ra, xin nhắc quý khách rằng quán cà phê của nhà ga mở cửa lúc 8 giờ sáng, và có các quầy bán đồ ăn tại sân ga số một."
      }
    ],
    "questions": [
      {
        "num": 83,
        "question": "What is the announcement mainly about?",
        "vietnameseQuestion": "Thông báo chủ yếu nói về vấn đề gì?",
        "options": [
          {
            "key": "A",
            "text": "A promotional event",
            "vietnamese": "Một sự kiện khuyến mãi"
          },
          {
            "key": "B",
            "text": "A vacation package",
            "vietnamese": "Gói kỳ nghỉ du lịch"
          },
          {
            "key": "C",
            "text": "A building renovation",
            "vietnamese": "Cải tạo tòa nhà"
          },
          {
            "key": "D",
            "text": "A travel delay",
            "vietnamese": "Sự hoãn chuyến đi lại"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Câu mở đầu: 'All trains to Midway Station are delayed for track repairs'."
      },
      {
        "num": 84,
        "question": "Why does the speaker say, \"A bus will be departing for that destination in fifteen minutes\"?",
        "vietnameseQuestion": "Tại sao người nói lại thông báo \"Xe buýt sẽ khởi hành đến điểm đó trong 15 phút nữa\"?",
        "options": [
          {
            "key": "A",
            "text": "To suggest an alternative arrangement",
            "vietnamese": "Để gợi ý phương án đi lại thay thế"
          },
          {
            "key": "B",
            "text": "To explain an extended wait time",
            "vietnamese": "Để giải thích thời gian chờ đợi kéo dài"
          },
          {
            "key": "C",
            "text": "To recommend changing the travel date",
            "vietnamese": "Để khuyên đổi ngày đi"
          },
          {
            "key": "D",
            "text": "To inform customers about a new destination",
            "vietnamese": "Để thông báo về điểm đến mới"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Khi tàu hỏa bị hoãn, việc cung cấp xe buýt thay thế là một giải pháp dự phòng ('alternative arrangement')."
      },
      {
        "num": 85,
        "question": "What does the speaker remind the listeners about?",
        "vietnameseQuestion": "Người nói nhắc nhở hành khách điều gì?",
        "options": [
          {
            "key": "A",
            "text": "How to download a mobile application",
            "vietnamese": "Cách tải ứng dụng di động"
          },
          {
            "key": "B",
            "text": "Where a waiting area is located",
            "vietnamese": "Vị trí khu vực chờ"
          },
          {
            "key": "C",
            "text": "How to reserve tickets",
            "vietnamese": "Cách thức đặt vé"
          },
          {
            "key": "D",
            "text": "Where to buy food",
            "vietnamese": "Nơi có thể mua đồ ăn"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Câu cuối nhắc nhở: 'station café opens at eight A.M., and there are food kiosks on platform one' ('food kiosks' = 'Where to buy food')."
      }
    ],
    "vocabulary": [
      {
        "word": "delay",
        "meaning": "sự chậm trễ, hoãn chuyến",
        "partOfSpeech": "n"
      },
      {
        "word": "track",
        "meaning": "đường ray xe lửa",
        "partOfSpeech": "n"
      },
      {
        "word": "commuter",
        "meaning": "người đi làm hàng ngày bằng phương tiện công cộng",
        "partOfSpeech": "n"
      },
      {
        "word": "kiosk",
        "meaning": "quầy hàng bán lẻ nhỏ",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part4-86-88",
    "part": 4,
    "partTitle": "Part 4: Bài nói ngắn",
    "questionRange": "Câu 86 - 88",
    "title": "Part 4 - Câu 86-88: Lời nhắn về mẫu thiết kế logo mới",
    "audioSrc": "/audio/cuts/test1/E26-T01-86-88.mp3",
    "transcript": [
      {
        "id": "p4-86-1",
        "speaker": "Speaker",
        "text": "I'm calling about the work my design team's doing to update your company logo. I've just e-mailed two versions for you to review.",
        "vietnamese": "Tôi gọi điện về công việc mà đội ngũ thiết kế của tôi đang thực hiện nhằm làm mới logo công ty của bạn. Tôi vừa gửi email hai phiên bản thiết kế để bạn xem xét."
      },
      {
        "id": "p4-86-2",
        "speaker": "Speaker",
        "text": "The first is a modern design with bold colors and simple lettering. The second image reflects the history of your brand and its logo.",
        "vietnamese": "Bản đầu tiên là phong cách thiết kế hiện đại với tông màu nổi bật và kiểu chữ đơn giản. Bản thứ hai mang đậm nét lịch sử của thương hiệu và logo gốc."
      },
      {
        "id": "p4-86-3",
        "speaker": "Speaker",
        "text": "It's less trendy, but it doesn't depart much from the original, which you may prefer. Take your time to think about which one you'd like to choose.",
        "vietnamese": "Nó ít bắt 'trend' hơn nhưng không quá xa rời bản gốc, có thể bạn sẽ thích phương án này hơn. Bạn cứ thong thả cân nhắc xem muốn chọn mẫu nào nhé."
      },
      {
        "id": "p4-86-4",
        "speaker": "Speaker",
        "text": "I'll be on vacation all next week, but if you call the office, my assistant will set up a meeting for when I get back.",
        "vietnamese": "Tôi sẽ đi nghỉ phép suốt cả tuần tới, nhưng nếu bạn gọi đến văn phòng, trợ lý của tôi sẽ sắp xếp một cuộc họp vào thời điểm tôi quay lại."
      }
    ],
    "questions": [
      {
        "num": 86,
        "question": "Where does the speaker most likely work?",
        "vietnameseQuestion": "Người nói nhiều khả năng làm việc ở đâu?",
        "options": [
          {
            "key": "A",
            "text": "At a graphic design company",
            "vietnamese": "Tại công ty thiết kế đồ họa"
          },
          {
            "key": "B",
            "text": "At a law firm",
            "vietnamese": "Tại công ty luật"
          },
          {
            "key": "C",
            "text": "At a photography studio",
            "vietnamese": "Tại một studio chụp ảnh"
          },
          {
            "key": "D",
            "text": "At a museum",
            "vietnamese": "Tại viện bảo tàng"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Người nói nhắc đến 'my design team's doing to update your company logo', chứng tỏ cô làm ở công ty thiết kế đồ họa (graphic design company)."
      },
      {
        "num": 87,
        "question": "What did the listener receive by e-mail?",
        "vietnameseQuestion": "Người nghe đã nhận được gì qua email?",
        "options": [
          {
            "key": "A",
            "text": "A newsletter",
            "vietnamese": "Bản tin định kỳ"
          },
          {
            "key": "B",
            "text": "Some images",
            "vietnamese": "Một số hình ảnh mẫu thiết kế"
          },
          {
            "key": "C",
            "text": "An invoice",
            "vietnamese": "Hóa đơn thanh toán"
          },
          {
            "key": "D",
            "text": "Some contracts",
            "vietnamese": "Một vài bản hợp đồng"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Cô ấy nói: 'I've just e-mailed two versions for you to review... The second image reflects...' ('two versions / image' = 'Some images')."
      },
      {
        "num": 88,
        "question": "Why is the speaker unavailable next week?",
        "vietnameseQuestion": "Tại sao người nói không thể tiếp chuyện vào tuần tới?",
        "options": [
          {
            "key": "A",
            "text": "She will be working at another branch.",
            "vietnamese": "Cô ấy làm việc tại chi nhánh khác."
          },
          {
            "key": "B",
            "text": "She will be with other clients.",
            "vietnamese": "Cô ấy bận tiếp khách hàng khác."
          },
          {
            "key": "C",
            "text": "She will be on vacation.",
            "vietnamese": "Cô ấy sẽ đi nghỉ mát."
          },
          {
            "key": "D",
            "text": "She will be at an industry conference.",
            "vietnamese": "Cô ấy dự hội nghị ngành."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Câu kết cho biết: 'I'll be on vacation all next week'."
      }
    ],
    "vocabulary": [
      {
        "word": "bold",
        "meaning": "đậm nét, nổi bật",
        "partOfSpeech": "adj"
      },
      {
        "word": "lettering",
        "meaning": "kiểu chữ nghệ thuật",
        "partOfSpeech": "n"
      },
      {
        "word": "depart from",
        "meaning": "xa rời, khác biệt so với",
        "partOfSpeech": "v"
      },
      {
        "word": "original",
        "meaning": "nguyên bản ban đầu",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part4-89-91",
    "part": 4,
    "partTitle": "Part 4: Bài nói ngắn",
    "questionRange": "Câu 89 - 91",
    "title": "Part 4 - Câu 89-91: Họp báo của cơ quan giao thông về động cơ tàu",
    "audioSrc": "/audio/cuts/test1/E26-T01-89-91.mp3",
    "transcript": [
      {
        "id": "p4-89-1",
        "speaker": "Speaker",
        "text": "After the transportation agency released the draft of our improvement plan last week, members of the press asked if we're considering installing more fuel-efficient engines in our trains.",
        "vietnamese": "Sau khi cơ quan giao thông công bố bản dự thảo kế hoạch cải tiến vào tuần trước, các phóng viên báo chí đã hỏi liệu chúng tôi có cân nhắc lắp đặt động cơ tiết kiệm nhiên liệu hơn cho các đoàn tàu không."
      },
      {
        "id": "p4-89-2",
        "speaker": "Speaker",
        "text": "I've scheduled this press conference to officially respond to your inquiries. Eighteen months ago, we hired a firm to determine if this upgrade would be feasible for our trains.",
        "vietnamese": "Tôi đã sắp xếp buổi họp báo này để chính thức giải đáp các thắc mắc của quý vị. Cách đây 18 tháng, chúng tôi đã thuê một công ty nghiên cứu xem liệu việc nâng cấp này có khả thi đối với các đoàn tàu của chúng tôi hay không."
      },
      {
        "id": "p4-89-3",
        "speaker": "Speaker",
        "text": "It reported that the upgrade would be economical only for relatively new trains—that is, those less than five years old. All of ours are at least ten years old.",
        "vietnamese": "Báo cáo chỉ ra rằng việc nâng cấp chỉ mang lại hiệu quả kinh tế cho các đoàn tàu còn tương đối mới—nghĩa là những tàu có tuổi thọ dưới 5 năm. Trong khi tất cả các tàu của chúng tôi đều đã vận hành ít nhất 10 năm."
      },
      {
        "id": "p4-89-4",
        "speaker": "Speaker",
        "text": "I hope this addresses your questions. If you're interested in more details, e-mail our media relations department to receive a summary of the findings.",
        "vietnamese": "Tôi hy vọng điều này đã giải đáp được thắc mắc của quý vị. Nếu muốn biết thêm chi tiết, xin vui lòng gửi email cho bộ phận quan hệ truyền thông để nhận bản tóm tắt kết quả."
      }
    ],
    "questions": [
      {
        "num": 89,
        "question": "Who most likely are the listeners?",
        "vietnameseQuestion": "Người nghe nhiều khả năng là ai?",
        "options": [
          {
            "key": "A",
            "text": "Investors",
            "vietnamese": "Các nhà đầu tư"
          },
          {
            "key": "B",
            "text": "Government officials",
            "vietnamese": "Quan chức chính phủ"
          },
          {
            "key": "C",
            "text": "Engineers",
            "vietnamese": "Các kỹ sư"
          },
          {
            "key": "D",
            "text": "Journalists",
            "vietnamese": "Các nhà báo, phóng viên"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Người nói nhắc tới 'members of the press asked...' và 'scheduled this press conference to officially respond to your inquiries', đối tượng là các phóng viên báo chí (journalists)."
      },
      {
        "num": 90,
        "question": "What does the speaker mean when she says, \"All of ours are at least ten years old\"?",
        "vietnameseQuestion": "Người nói có ý gì khi nói \"Tất cả tàu của chúng tôi đều ít nhất 10 năm tuổi rồi\"?",
        "options": [
          {
            "key": "A",
            "text": "An event needs to be relocated.",
            "vietnamese": "Một sự kiện cần đổi địa điểm."
          },
          {
            "key": "B",
            "text": "An upgrade is not feasible.",
            "vietnamese": "Việc nâng cấp là không khả thi / không hiệu quả."
          },
          {
            "key": "C",
            "text": "A project team has a lot of experience.",
            "vietnamese": "Đội ngũ dự án có nhiều năm kinh nghiệm."
          },
          {
            "key": "D",
            "text": "Some company policies are outdated.",
            "vietnamese": "Một số chính sách công ty đã lỗi thời."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Báo cáo nêu việc nâng cấp chỉ kinh tế với tàu dưới 5 tuổi. Vì tàu công ty đều trên 10 năm nên việc nâng cấp là không khả thi (An upgrade is not feasible)."
      },
      {
        "num": 91,
        "question": "According to the speaker, what can be requested by e-mail?",
        "vietnameseQuestion": "Theo người nói, có thể yêu cầu tài liệu gì qua email?",
        "options": [
          {
            "key": "A",
            "text": "Some presentation slides",
            "vietnamese": "Một số slide thuyết trình"
          },
          {
            "key": "B",
            "text": "Some product samples",
            "vietnamese": "Một vài mẫu sản phẩm thử"
          },
          {
            "key": "C",
            "text": "A report summary",
            "vietnamese": "Bản tóm tắt báo cáo nghiên cứu"
          },
          {
            "key": "D",
            "text": "A discounted ticket",
            "vietnamese": "Vé giảm giá"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Câu cuối nêu: 'e-mail our media relations department to receive a summary of the findings' ('summary of findings' = 'A report summary')."
      }
    ],
    "vocabulary": [
      {
        "word": "fuel-efficient",
        "meaning": "tiết kiệm nhiên liệu",
        "partOfSpeech": "adj"
      },
      {
        "word": "press conference",
        "meaning": "buổi họp báo",
        "partOfSpeech": "n"
      },
      {
        "word": "feasible",
        "meaning": "khả thi thực hiện được",
        "partOfSpeech": "adj"
      },
      {
        "word": "economical",
        "meaning": "tiết kiệm, có hiệu quả kinh tế",
        "partOfSpeech": "adj"
      }
    ]
  },
  {
    "id": "part4-92-94",
    "part": 4,
    "partTitle": "Part 4: Bài nói ngắn",
    "questionRange": "Câu 92 - 94",
    "title": "Part 4 - Câu 92-94: Nâng cấp hệ thống thanh toán qua máy tính bảng",
    "audioSrc": "/audio/cuts/test1/E26-T01-92-94.mp3",
    "transcript": [
      {
        "id": "p4-92-1",
        "speaker": "Speaker",
        "text": "As regional sales manager, I want to explore the use of a more modernized payment system in our cosmetics stores.",
        "vietnamese": "Với cương vị giám đốc bán hàng khu vực, tôi muốn khám phá việc áp dụng hệ thống thanh toán hiện đại hơn tại các chuỗi cửa hàng mỹ phẩm của chúng ta."
      },
      {
        "id": "p4-92-2",
        "speaker": "Speaker",
        "text": "This system would allow any sales associate to take customer payments from a tablet anywhere in the store. Why should we do this?",
        "vietnamese": "Hệ thống này sẽ cho phép bất kỳ nhân viên bán hàng nào cũng có thể nhận thanh toán của khách qua máy tính bảng ở mọi vị trí trong tiệm. Vì sao chúng ta lại nên làm điều này?"
      },
      {
        "id": "p4-92-3",
        "speaker": "Speaker",
        "text": "The main complaint about shopping at our stores is waiting in long lines to pay. A lot of our stores could benefit from this, but I've decided to conduct a trial run at our store in the Center City Mall.",
        "vietnamese": "Lời phàn nàn lớn nhất của khách hàng khi mua sắm tại tiệm là việc phải xếp hàng dài chờ thanh toán. Rất nhiều cửa hàng có thể hưởng lợi từ điều này, nhưng tôi quyết định sẽ chạy thử nghiệm trước tại cửa hàng ở Trung tâm thương mại Center City."
      },
      {
        "id": "p4-92-4",
        "speaker": "Speaker",
        "text": "By far, that's our busiest location.",
        "vietnamese": "Bởi vì đó là cơ sở đông đúc tấp nập khách nhất của chúng ta."
      }
    ],
    "questions": [
      {
        "num": 92,
        "question": "What does the speaker want to do?",
        "vietnameseQuestion": "Người nói muốn làm gì?",
        "options": [
          {
            "key": "A",
            "text": "Increase online sales",
            "vietnamese": "Tăng doanh số bán hàng online"
          },
          {
            "key": "B",
            "text": "Upgrade a payment system",
            "vietnamese": "Nâng cấp hệ thống thanh toán"
          },
          {
            "key": "C",
            "text": "Create a new product line",
            "vietnamese": "Tạo ra dòng sản phẩm mới"
          },
          {
            "key": "D",
            "text": "Add store locations",
            "vietnamese": "Mở thêm các chi nhánh mới"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Người nói mở đầu: 'explore the use of a more modernized payment system' ('modernized payment system' = 'Upgrade a payment system')."
      },
      {
        "num": 93,
        "question": "According to the speaker, what is the customers' main complaint?",
        "vietnameseQuestion": "Theo người nói, phàn nàn chính yếu của khách hàng là gì?",
        "options": [
          {
            "key": "A",
            "text": "Long lines",
            "vietnamese": "Những hàng dài chờ đợi"
          },
          {
            "key": "B",
            "text": "High prices",
            "vietnamese": "Giá cả đắt đỏ"
          },
          {
            "key": "C",
            "text": "Unavailable items",
            "vietnamese": "Hết hàng, không có sẵn đồ"
          },
          {
            "key": "D",
            "text": "Unfriendly staff",
            "vietnamese": "Nhân viên thiếu thân thiện"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Người nói giải thích: 'The main complaint about shopping at our stores is waiting in long lines to pay'."
      },
      {
        "num": 94,
        "question": "Why does the speaker say, \"that's our busiest location\"?",
        "vietnameseQuestion": "Tại sao người nói lại nhấn mạnh \"đó là cơ sở đông đúc nhất của chúng ta\"?",
        "options": [
          {
            "key": "A",
            "text": "To request some feedback",
            "vietnamese": "Để yêu cầu phản hồi"
          },
          {
            "key": "B",
            "text": "To compliment some staff",
            "vietnamese": "Để khen ngợi nhân viên"
          },
          {
            "key": "C",
            "text": "To express frustration",
            "vietnamese": "Để bày tỏ sự bực bội"
          },
          {
            "key": "D",
            "text": "To justify a choice",
            "vietnamese": "Để giải thích, biện minh cho lựa chọn của mình"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Câu này đưa ra lý do vì sao người nói lại chọn cửa hàng ở Center City Mall để chạy thử nghiệm đầu tiên (Justify a choice)."
      }
    ],
    "vocabulary": [
      {
        "word": "modernized",
        "meaning": "được hiện đại hóa",
        "partOfSpeech": "adj"
      },
      {
        "word": "sales associate",
        "meaning": "nhân viên bán hàng",
        "partOfSpeech": "n"
      },
      {
        "word": "complaint",
        "meaning": "lời phàn nàn, khiếu nại",
        "partOfSpeech": "n"
      },
      {
        "word": "trial run",
        "meaning": "đợt vận hành thử nghiệm",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part4-95-97",
    "part": 4,
    "imageUrl": "/images/intensive/test1/q95_97.png",
    "partTitle": "Part 4: Bài nói ngắn",
    "questionRange": "Câu 95 - 97",
    "title": "Part 4 - Câu 95-97: Tòa tháp văn phòng Reston hoàn thành",
    "audioSrc": "/audio/cuts/test1/E26-T01-95-97.mp3",
    "transcript": [
      {
        "id": "p4-95-1",
        "speaker": "Speaker",
        "text": "In local news, the downtown Reston Office Tower is completed. The most extraordinary feature of the building is its beautiful garden, located in the lobby.",
        "vietnamese": "Tin địa phương hôm nay: Tòa tháp văn phòng Reston tại trung tâm thành phố đã được hoàn thành. Nét đặc biệt ngoạn mục nhất của tòa nhà là khu vườn xinh đẹp tọa lạc ngay tại sảnh chờ."
      },
      {
        "id": "p4-95-2",
        "speaker": "Speaker",
        "text": "Reston's management office has confirmed the tenant list for the building. And we interviewed the CEO of Barnum Financial Services about its new offices.",
        "vietnamese": "Ban quản lý Reston đã xác nhận danh sách các đơn vị thuê mặt bằng của tòa nhà. Và chúng tôi đã phỏng vấn Tổng giám đốc của Dịch vụ Tài chính Barnum về văn phòng mới của họ."
      },
      {
        "id": "p4-95-3",
        "speaker": "Speaker",
        "text": "He said he and his team are excited to move in in January. A recording of the full interview with the CEO is available on our Web site.",
        "vietnamese": "Ông cho biết ông và đội ngũ của mình rất hào hứng được chuyển vào làm việc từ tháng 1. Bản ghi âm trọn vẹn cuộc phỏng vấn với vị CEO đã được đăng tải trên trang web của chúng tôi."
      }
    ],
    "questions": [
      {
        "num": 95,
        "question": "According to the speaker, what is special about the Reston Office Tower?",
        "vietnameseQuestion": "Theo người nói, tòa nhà Reston Office Tower có điểm gì đặc biệt?",
        "options": [
          {
            "key": "A",
            "text": "It features an indoor garden.",
            "vietnamese": "Tòa nhà có một khu vườn trong nhà."
          },
          {
            "key": "B",
            "text": "It exhibits work from local artists.",
            "vietnamese": "Triển lãm tác phẩm nghệ thuật địa phương."
          },
          {
            "key": "C",
            "text": "It runs on solar power.",
            "vietnamese": "Vận hành bằng năng lượng mặt trời."
          },
          {
            "key": "D",
            "text": "It has won many awards.",
            "vietnamese": "Đã đạt nhiều giải thưởng danh giá."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Bản tin nhắc tới điểm nổi bật: 'The most extraordinary feature of the building is its beautiful garden, located in the lobby' ('garden in the lobby' = 'indoor garden')."
      },
      {
        "num": 96,
        "question": "Look at the graphic. Which floors will be occupied in January?",
        "vietnameseQuestion": "Xem bảng biểu. Các tầng nào sẽ được dọn vào sử dụng trong tháng 1?",
        "options": [
          {
            "key": "A",
            "text": "Floors 1–5",
            "vietnamese": "Tầng 1–5"
          },
          {
            "key": "B",
            "text": "Floors 6–10",
            "vietnamese": "Tầng 6–10"
          },
          {
            "key": "C",
            "text": "Floors 11–14",
            "vietnamese": "Tầng 11–14"
          },
          {
            "key": "D",
            "text": "Floors 15–17",
            "vietnamese": "Tầng 15–17"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Bài nói nêu CEO của Barnum Financial Services cùng đội ngũ sẽ chuyển vào trong tháng 1 ('move in in January'). Bảng danh sách ghi Barnum Financial Services thuê tầng 11–14."
      },
      {
        "num": 97,
        "question": "What does the speaker say is available on a Web site?",
        "vietnameseQuestion": "Người nói cho biết nội dung gì có sẵn trên trang web?",
        "options": [
          {
            "key": "A",
            "text": "Some photographs",
            "vietnamese": "Một số hình ảnh chụp"
          },
          {
            "key": "B",
            "text": "An event schedule",
            "vietnamese": "Lịch trình sự kiện"
          },
          {
            "key": "C",
            "text": "A floor layout",
            "vietnamese": "Sơ đồ mặt bằng các tầng"
          },
          {
            "key": "D",
            "text": "A recorded interview",
            "vietnamese": "Bản ghi âm cuộc phỏng vấn"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Câu kết thúc bản tin: 'A recording of the full interview with the CEO is available on our Web site'."
      }
    ],
    "vocabulary": [
      {
        "word": "extraordinary",
        "meaning": "phi thường, xuất sắc đặc biệt",
        "partOfSpeech": "adj"
      },
      {
        "word": "tenant",
        "meaning": "người thuê, khách thuê văn phòng",
        "partOfSpeech": "n"
      },
      {
        "word": "occupied",
        "meaning": "được chiếm chỗ, sử dụng",
        "partOfSpeech": "adj"
      },
      {
        "word": "recording",
        "meaning": "bản ghi âm",
        "partOfSpeech": "n"
      }
    ]
  },
  {
    "id": "part4-98-100",
    "part": 4,
    "imageUrl": "/images/intensive/test1/q98_100.png",
    "partTitle": "Part 4: Bài nói ngắn",
    "questionRange": "Câu 98 - 100",
    "title": "Part 4 - Câu 98-100: Dự án mở mỏ bạc mới của công ty khai khoáng",
    "audioSrc": "/audio/cuts/test1/E26-T01-98-100.mp3",
    "transcript": [
      {
        "id": "p4-98-1",
        "speaker": "Speaker",
        "text": "Good morning, and thank you for attending this meeting for prospective investors.",
        "vietnamese": "Xin chào buổi sáng, và cảm ơn quý vị đã đến tham dự cuộc họp dành cho các nhà đầu tư tiềm năng."
      },
      {
        "id": "p4-98-2",
        "speaker": "Speaker",
        "text": "ZZ Mining has been planning to expand our operations by opening an additional silver mine. Let me show you the laboratory analysis of our exploratory drilling.",
        "vietnamese": "Công ty Khai khoáng ZZ đã và đang lên kế hoạch mở rộng hoạt động bằng việc mở thêm một mỏ bạc mới. Cho phép tôi trình chiếu kết quả phân tích phòng thí nghiệm từ các mũi khoan thăm dò của chúng tôi."
      },
      {
        "id": "p4-98-3",
        "speaker": "Speaker",
        "text": "On the screen, you can see information about the ore extracted from different sites. The highest-grade site had 410 grams of silver per ton of ore.",
        "vietnamese": "Trên màn hình, quý vị có thể thấy thông tin về quặng khai thác từ các địa điểm khác nhau. Địa điểm có hàm lượng cao nhất đạt 410 gam bạc trên mỗi tấn quặng."
      },
      {
        "id": "p4-98-4",
        "speaker": "Speaker",
        "text": "However, the site with 390 grams per ton has a larger deposit, so that's where we'll build the new mine. Our next step is to apply for the necessary permits. We'll do that next week.",
        "vietnamese": "Tuy nhiên, địa điểm có hàm lượng 390 gam mỗi tấn lại sở hữu trữ lượng mỏ lớn hơn nhiều, vì vậy đó là nơi chúng tôi sẽ xây dựng mỏ mới. Bước tiếp theo của chúng tôi là nộp đơn xin các giấy phép cần thiết. Chúng tôi sẽ tiến hành việc đó vào tuần tới."
      }
    ],
    "questions": [
      {
        "num": 98,
        "question": "Who most likely are the listeners?",
        "vietnameseQuestion": "Người nghe nhiều khả năng là ai?",
        "options": [
          {
            "key": "A",
            "text": "Safety engineers",
            "vietnamese": "Kỹ sư an toàn lao động"
          },
          {
            "key": "B",
            "text": "Laboratory technicians",
            "vietnamese": "Kỹ thuật viên phòng thí nghiệm"
          },
          {
            "key": "C",
            "text": "Legal consultants",
            "vietnamese": "Chuyên viên tư vấn pháp lý"
          },
          {
            "key": "D",
            "text": "Business investors",
            "vietnamese": "Các nhà đầu tư kinh doanh"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Câu đầu: 'thank you for attending this meeting for prospective investors' (nhà đầu tư tiềm năng)."
      },
      {
        "num": 99,
        "question": "Look at the graphic. Where will a new mine be built?",
        "vietnameseQuestion": "Xem bảng số liệu. Mỏ mới sẽ được xây dựng ở địa điểm nào?",
        "options": [
          {
            "key": "A",
            "text": "At site 1",
            "vietnamese": "Tại địa điểm 1"
          },
          {
            "key": "B",
            "text": "At site 2",
            "vietnamese": "Tại địa điểm 2"
          },
          {
            "key": "C",
            "text": "At site 3",
            "vietnamese": "Tại địa điểm 3"
          },
          {
            "key": "D",
            "text": "At site 4",
            "vietnamese": "Tại địa điểm 4"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Người nói chỉ rõ: 'the site with 390 grams per ton has a larger deposit, so that's where we'll build the new mine'. Đối chiếu bảng, địa điểm có 390 grams per ton là Site 3."
      },
      {
        "num": 100,
        "question": "What does the speaker say is the next step?",
        "vietnameseQuestion": "Người nói cho biết bước tiếp theo là gì?",
        "options": [
          {
            "key": "A",
            "text": "Applying for permits",
            "vietnamese": "Nộp đơn xin cấp phép"
          },
          {
            "key": "B",
            "text": "Installing equipment",
            "vietnamese": "Lắp đặt thiết bị máy móc"
          },
          {
            "key": "C",
            "text": "Hiring additional staff",
            "vietnamese": "Tuyển thêm nhân sự"
          },
          {
            "key": "D",
            "text": "Updating a manual",
            "vietnamese": "Cập nhật sổ tay hướng dẫn"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Người nói nêu bước kế tiếp: 'Our next step is to apply for the necessary permits'."
      }
    ],
    "vocabulary": [
      {
        "word": "prospective investor",
        "meaning": "nhà đầu tư triển vọng, tiềm năng",
        "partOfSpeech": "n"
      },
      {
        "word": "exploratory drilling",
        "meaning": "khoan thăm dò địa chất",
        "partOfSpeech": "n"
      },
      {
        "word": "ore",
        "meaning": "quặng khoáng sản",
        "partOfSpeech": "n"
      },
      {
        "word": "deposit",
        "meaning": "mỏ trầm tích, trữ lượng khoáng sản",
        "partOfSpeech": "n"
      },
      {
        "word": "permit",
        "meaning": "giấy phép",
        "partOfSpeech": "n"
      }
    ]
  }
];

export function getIntensiveItemById(id: string): IntensiveListeningItem | undefined {
  return test1IntensiveData.find((item) => item.id === id);
}

export function getItemsByPart(part: 1 | 2 | 3 | 4): IntensiveListeningItem[] {
  return test1IntensiveData.filter((item) => item.part === part);
}
