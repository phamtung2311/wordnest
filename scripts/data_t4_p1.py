import json

part1_items = [
    {
        "id": "part1-1",
        "part": 1,
        "imageUrl": "/images/intensive/test4/q1.png",
        "partTitle": "Part 1: Mô tả hình ảnh",
        "questionRange": "Câu 1",
        "title": "Part 1 - Câu 1: Người phụ nữ đứng cạnh thùng rác bên đường",
        "audioSrc": "/audio/cuts/test4/E26-T04-01.mp3",
        "transcript": [
            {
                "id": "p1-1-a",
                "speaker": "Speaker",
                "text": "(A) She's crossing a busy street.",
                "vietnamese": "(A) Cô ấy đang băng qua một con phố đông đúc."
            },
            {
                "id": "p1-1-b",
                "speaker": "Speaker",
                "text": "(B) She's removing her eyeglasses.",
                "vietnamese": "(B) Cô ấy đang tháo kính mắt ra."
            },
            {
                "id": "p1-1-c",
                "speaker": "Speaker",
                "text": "(C) She's standing next to a bin.",
                "vietnamese": "(C) Cô ấy đang đứng cạnh một thùng rác."
            },
            {
                "id": "p1-1-d",
                "speaker": "Speaker",
                "text": "(D) She's getting into a taxicab.",
                "vietnamese": "(D) Cô ấy đang bước vào xe taxi."
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
                        "text": "She's crossing a busy street.",
                        "vietnamese": "Cô ấy đang băng qua một con phố đông đúc."
                    },
                    {
                        "key": "B",
                        "text": "She's removing her eyeglasses.",
                        "vietnamese": "Cô ấy đang tháo kính mắt ra."
                    },
                    {
                        "key": "C",
                        "text": "She's standing next to a bin.",
                        "vietnamese": "Cô ấy đang đứng cạnh một thùng rác."
                    },
                    {
                        "key": "D",
                        "text": "She's getting into a taxicab.",
                        "vietnamese": "Cô ấy đang bước vào xe taxi."
                    }
                ],
                "correctAnswer": "C",
                "explanation": "Trong bức ảnh, người phụ nữ đang đứng ngay cạnh thùng rác công cộng trên vỉa hè để bỏ rác (She's standing next to a bin)."
            }
        ],
        "vocabulary": [
            {
                "word": "bin",
                "meaning": "thùng rác",
                "partOfSpeech": "n"
            },
            {
                "word": "cross",
                "meaning": "băng qua",
                "partOfSpeech": "v"
            },
            {
                "word": "taxicab",
                "meaning": "xe tắc-xi",
                "partOfSpeech": "n"
            }
        ]
    },
    {
        "id": "part1-2",
        "part": 1,
        "imageUrl": "/images/intensive/test4/q2.png",
        "partTitle": "Part 1: Mô tả hình ảnh",
        "questionRange": "Câu 2",
        "title": "Part 1 - Câu 2: Xe cộ đỗ bên ngoài tòa nhà",
        "audioSrc": "/audio/cuts/test4/E26-T04-02.mp3",
        "transcript": [
            {
                "id": "p1-2-a",
                "speaker": "Speaker",
                "text": "(A) Some trucks have stopped at a traffic signal.",
                "vietnamese": "(A) Một số xe tải đã dừng lại tại đèn tín hiệu giao thông."
            },
            {
                "id": "p1-2-b",
                "speaker": "Speaker",
                "text": "(B) Some lights are being installed above a garage door.",
                "vietnamese": "(B) Một số bóng đèn đang được lắp đặt phía trên cửa nhà để xe."
            },
            {
                "id": "p1-2-c",
                "speaker": "Speaker",
                "text": "(C) A garden is being planted along a fence.",
                "vietnamese": "(C) Một khu vườn đang được trồng dọc theo hàng rào."
            },
            {
                "id": "p1-2-d",
                "speaker": "Speaker",
                "text": "(D) Several vehicles are parked outside a building.",
                "vietnamese": "(D) Nhiều phương tiện giao thông đang đỗ bên ngoài một tòa nhà."
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
                        "text": "Some trucks have stopped at a traffic signal.",
                        "vietnamese": "Một số xe tải đã dừng lại tại đèn tín hiệu giao thông."
                    },
                    {
                        "key": "B",
                        "text": "Some lights are being installed above a garage door.",
                        "vietnamese": "Một số bóng đèn đang được lắp đặt phía trên cửa nhà để xe."
                    },
                    {
                        "key": "C",
                        "text": "A garden is being planted along a fence.",
                        "vietnamese": "Một khu vườn đang được trồng dọc theo hàng rào."
                    },
                    {
                        "key": "D",
                        "text": "Several vehicles are parked outside a building.",
                        "vietnamese": "Nhiều phương tiện giao thông đang đỗ bên ngoài một tòa nhà."
                    }
                ],
                "correctAnswer": "D",
                "explanation": "Bức ảnh cho thấy quang cảnh bên ngoài tòa nhà với nhiều ô tô/phương tiện đang đỗ ngoài sân (Several vehicles are parked outside a building)."
            }
        ],
        "vocabulary": [
            {
                "word": "vehicle",
                "meaning": "phương tiện giao thông, xe cộ",
                "partOfSpeech": "n"
            },
            {
                "word": "traffic signal",
                "meaning": "đèn tín hiệu giao thông",
                "partOfSpeech": "n"
            },
            {
                "word": "garage door",
                "meaning": "cửa ga-ra / nhà để xe",
                "partOfSpeech": "n"
            }
        ]
    },
    {
        "id": "part1-3",
        "part": 1,
        "imageUrl": "/images/intensive/test4/q3.png",
        "partTitle": "Part 1: Mô tả hình ảnh",
        "questionRange": "Câu 3",
        "title": "Part 1 - Câu 3: Người phụ nữ đi theo sau người đàn ông trong hành lang",
        "audioSrc": "/audio/cuts/test4/E26-T04-03.mp3",
        "transcript": [
            {
                "id": "p1-3-a",
                "speaker": "Speaker",
                "text": "(A) A woman is following a man down a corridor.",
                "vietnamese": "(A) Một người phụ nữ đang đi theo sau một người đàn ông dọc hành lang."
            },
            {
                "id": "p1-3-b",
                "speaker": "Speaker",
                "text": "(B) A woman is putting together some cardboard boxes.",
                "vietnamese": "(B) Một người phụ nữ đang lắp ghép một số thùng bìa các-tông."
            },
            {
                "id": "p1-3-c",
                "speaker": "Speaker",
                "text": "(C) A man is emptying a large container.",
                "vietnamese": "(C) Một người đàn ông đang đổ rác/làm rỗng một thùng chứa lớn."
            },
            {
                "id": "p1-3-d",
                "speaker": "Speaker",
                "text": "(D) A man is climbing up a ladder.",
                "vietnamese": "(D) Một người đàn ông đang trèo lên thang."
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
                        "text": "A woman is following a man down a corridor.",
                        "vietnamese": "Một người phụ nữ đang đi theo sau một người đàn ông dọc hành lang."
                    },
                    {
                        "key": "B",
                        "text": "A woman is putting together some cardboard boxes.",
                        "vietnamese": "Một người phụ nữ đang lắp ghép một số thùng bìa các-tông."
                    },
                    {
                        "key": "C",
                        "text": "A man is emptying a large container.",
                        "vietnamese": "Một người đàn ông đang đổ rác/làm rỗng một thùng chứa lớn."
                    },
                    {
                        "key": "D",
                        "text": "A man is climbing up a ladder.",
                        "vietnamese": "Một người đàn ông đang trèo lên thang."
                    }
                ],
                "correctAnswer": "A",
                "explanation": "Trong bức ảnh, người phụ nữ đang bước đi ngay sau một người đàn ông trong lối đi/hành lang (A woman is following a man down a corridor)."
            }
        ],
        "vocabulary": [
            {
                "word": "corridor",
                "meaning": "hành lang, lối đi",
                "partOfSpeech": "n"
            },
            {
                "word": "cardboard box",
                "meaning": "thùng bìa các-tông",
                "partOfSpeech": "n"
            },
            {
                "word": "ladder",
                "meaning": "cái thang",
                "partOfSpeech": "n"
            }
        ]
    },
    {
        "id": "part1-4",
        "part": 1,
        "imageUrl": "/images/intensive/test4/q4.png",
        "partTitle": "Part 1: Mô tả hình ảnh",
        "questionRange": "Câu 4",
        "title": "Part 1 - Câu 4: Người đàn ông kéo xe đẩy hàng trên lối đi",
        "audioSrc": "/audio/cuts/test4/E26-T04-04.mp3",
        "transcript": [
            {
                "id": "p1-4-a",
                "speaker": "Speaker",
                "text": "(A) He's clearing some snow off a path.",
                "vietnamese": "(A) Anh ấy đang dọn sạch tuyết khỏi lối đi."
            },
            {
                "id": "p1-4-b",
                "speaker": "Speaker",
                "text": "(B) He's pulling a cart on a walkway.",
                "vietnamese": "(B) Anh ấy đang kéo một chiếc xe đẩy trên lối đi bộ."
            },
            {
                "id": "p1-4-c",
                "speaker": "Speaker",
                "text": "(C) He's leaning over to tie his shoe.",
                "vietnamese": "(C) Anh ấy đang cúi người xuống để buộc dây giày."
            },
            {
                "id": "p1-4-d",
                "speaker": "Speaker",
                "text": "(D) He's taking some items out of a basket.",
                "vietnamese": "(D) Anh ấy đang lấy một số món đồ ra khỏi giỏ."
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
                        "text": "He's clearing some snow off a path.",
                        "vietnamese": "Anh ấy đang dọn sạch tuyết khỏi lối đi."
                    },
                    {
                        "key": "B",
                        "text": "He's pulling a cart on a walkway.",
                        "vietnamese": "Anh ấy đang kéo một chiếc xe đẩy trên lối đi bộ."
                    },
                    {
                        "key": "C",
                        "text": "He's leaning over to tie his shoe.",
                        "vietnamese": "Anh ấy đang cúi người xuống để buộc dây giày."
                    },
                    {
                        "key": "D",
                        "text": "He's taking some items out of a basket.",
                        "vietnamese": "Anh ấy đang lấy một số món đồ ra khỏi giỏ."
                    }
                ],
                "correctAnswer": "B",
                "explanation": "Trong bức ảnh, người đàn ông đang kéo một chiếc xe chở hàng trên lối đi bộ lát gạch (He's pulling a cart on a walkway)."
            }
        ],
        "vocabulary": [
            {
                "word": "walkway",
                "meaning": "lối đi bộ",
                "partOfSpeech": "n"
            },
            {
                "word": "cart",
                "meaning": "xe đẩy, xe chở hàng",
                "partOfSpeech": "n"
            },
            {
                "word": "lean over",
                "meaning": "cúi người qua/xuống",
                "partOfSpeech": "phr v"
            }
        ]
    },
    {
        "id": "part1-5",
        "part": 1,
        "imageUrl": "/images/intensive/test4/q5.png",
        "partTitle": "Part 1: Mô tả hình ảnh",
        "questionRange": "Câu 5",
        "title": "Part 1 - Câu 5: Người phụ nữ đeo túi trên vai",
        "audioSrc": "/audio/cuts/test4/E26-T04-05.mp3",
        "transcript": [
            {
                "id": "p1-5-a",
                "speaker": "Speaker",
                "text": "(A) One of the women is carrying a bag on her shoulder.",
                "vietnamese": "(A) Một trong những người phụ nữ đang đeo một chiếc túi trên vai."
            },
            {
                "id": "p1-5-b",
                "speaker": "Speaker",
                "text": "(B) One of the women is placing her luggage on a scale.",
                "vietnamese": "(B) Một trong những người phụ nữ đang đặt hành lý lên chiếc cân."
            },
            {
                "id": "p1-5-c",
                "speaker": "Speaker",
                "text": "(C) Some suitcases have been lined up against the wall.",
                "vietnamese": "(C) Một số chiếc va-li đã được xếp thành hàng dựa vào tường."
            },
            {
                "id": "p1-5-d",
                "speaker": "Speaker",
                "text": "(D) Some clothes are being packed in a bag.",
                "vietnamese": "(D) Một số quần áo đang được đóng gói vào trong túi."
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
                        "text": "One of the women is carrying a bag on her shoulder.",
                        "vietnamese": "Một trong những người phụ nữ đang đeo một chiếc túi trên vai."
                    },
                    {
                        "key": "B",
                        "text": "One of the women is placing her luggage on a scale.",
                        "vietnamese": "Một trong những người phụ nữ đang đặt hành lý lên chiếc cân."
                    },
                    {
                        "key": "C",
                        "text": "Some suitcases have been lined up against the wall.",
                        "vietnamese": "Một số chiếc va-li đã được xếp thành hàng dựa vào tường."
                    },
                    {
                        "key": "D",
                        "text": "Some clothes are being packed in a bag.",
                        "vietnamese": "Một số quần áo đang được đóng gói vào trong túi."
                    }
                ],
                "correctAnswer": "A",
                "explanation": "Người phụ nữ đi bộ trong ảnh đang đeo một chiếc túi xách qua vai (carrying a bag on her shoulder)."
            }
        ],
        "vocabulary": [
            {
                "word": "shoulder",
                "meaning": "vai",
                "partOfSpeech": "n"
            },
            {
                "word": "scale",
                "meaning": "chiếc cân",
                "partOfSpeech": "n"
            },
            {
                "word": "line up",
                "meaning": "xếp thành hàng",
                "partOfSpeech": "phr v"
            }
        ]
    },
    {
        "id": "part1-6",
        "part": 1,
        "imageUrl": "/images/intensive/test4/q6.png",
        "partTitle": "Part 1: Mô tả hình ảnh",
        "questionRange": "Câu 6",
        "title": "Part 1 - Câu 6: Tách cà phê đặt trên quầy",
        "audioSrc": "/audio/cuts/test4/E26-T04-06.mp3",
        "transcript": [
            {
                "id": "p1-6-a",
                "speaker": "Speaker",
                "text": "(A) Some customers are drinking from coffee cups.",
                "vietnamese": "(A) Một số khách hàng đang uống nước từ những chiếc tách cà phê."
            },
            {
                "id": "p1-6-b",
                "speaker": "Speaker",
                "text": "(B) Some coffee cups have been placed on a counter.",
                "vietnamese": "(B) Một số tách cà phê đã được đặt trên quầy."
            },
            {
                "id": "p1-6-c",
                "speaker": "Speaker",
                "text": "(C) Some aprons are hanging from hooks.",
                "vietnamese": "(C) Một số tạp dề đang được treo trên các móc."
            },
            {
                "id": "p1-6-d",
                "speaker": "Speaker",
                "text": "(D) One of the workers is wiping down a counter.",
                "vietnamese": "(D) Một trong những nhân viên đang lau chùi quầy phục vụ."
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
                        "text": "Some customers are drinking from coffee cups.",
                        "vietnamese": "Một số khách hàng đang uống nước từ những chiếc tách cà phê."
                    },
                    {
                        "key": "B",
                        "text": "Some coffee cups have been placed on a counter.",
                        "vietnamese": "Một số tách cà phê đã được đặt trên quầy."
                    },
                    {
                        "key": "C",
                        "text": "Some aprons are hanging from hooks.",
                        "vietnamese": "Một số tạp dề đang được treo trên các móc."
                    },
                    {
                        "key": "D",
                        "text": "One of the workers is wiping down a counter.",
                        "vietnamese": "Một trong những nhân viên đang lau chùi quầy phục vụ."
                    }
                ],
                "correctAnswer": "B",
                "explanation": "Trong bức ảnh quán cà phê, có các ly/tách cà phê được xếp sẵn trên quầy thu ngân/phục vụ (Some coffee cups have been placed on a counter)."
            }
        ],
        "vocabulary": [
            {
                "word": "counter",
                "meaning": "quầy phục vụ, quầy thu ngân",
                "partOfSpeech": "n"
            },
            {
                "word": "apron",
                "meaning": "tạp dề",
                "partOfSpeech": "n"
            },
            {
                "word": "wipe down",
                "meaning": "lau chùi sạch sẽ",
                "partOfSpeech": "phr v"
            }
        ]
    }
]
