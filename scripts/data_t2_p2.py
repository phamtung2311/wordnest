import json

part2_items = [
    {
        "id": "part2-7",
        "part": 2,
        "partTitle": "Part 2: Hỏi & Đáp",
        "questionRange": "Câu 7",
        "title": "Part 2 - Câu 7: Bạn sẽ gọi món mì hay gà?",
        "audioSrc": "/audio/cuts/test2/E26-T02-07.mp3",
        "transcript": [
            {"id": "p2-7-q", "speaker": "M-Cn", "text": "Will you order the pasta or the chicken?", "vietnamese": "Bạn sẽ gọi món mì ý hay thịt gà?"},
            {"id": "p2-7-a", "speaker": "W-Br", "text": "(A) I'll have the pasta.", "vietnamese": "(A) Tôi sẽ dùng món mì ý."},
            {"id": "p2-7-b", "speaker": "W-Br", "text": "(B) Yes, I studied Italian.", "vietnamese": "(B) Vâng, tôi đã học tiếng Ý."},
            {"id": "p2-7-c", "speaker": "W-Br", "text": "(C) I think we should paint the kitchen.", "vietnamese": "(C) Tôi nghĩ chúng ta nên sơn lại căn bếp."}
        ],
        "questions": [
            {
                "num": 7,
                "question": "Will you order the pasta or the chicken?",
                "vietnameseQuestion": "Bạn sẽ gọi món mì ý hay món gà?",
                "options": [
                    {"key": "A", "text": "I'll have the pasta.", "vietnamese": "Tôi sẽ dùng món mì ý."},
                    {"key": "B", "text": "Yes, I studied Italian.", "vietnamese": "Vâng, tôi đã từng học tiếng Ý."},
                    {"key": "C", "text": "I think we should paint the kitchen.", "vietnamese": "Tôi nghĩ chúng ta nên sơn nhà bếp."}
                ],
                "correctAnswer": "A",
                "explanation": "Câu hỏi lựa chọn (A or B). Phương án (A) đưa ra sự lựa chọn rõ ràng: 'I'll have the pasta'."
            }
        ],
        "vocabulary": [
            {"word": "order", "meaning": "gọi món, đặt hàng", "partOfSpeech": "v"},
            {"word": "pasta", "meaning": "mì Ý, mì ống", "partOfSpeech": "n"}
        ]
    },
    {
        "id": "part2-8",
        "part": 2,
        "partTitle": "Part 2: Hỏi & Đáp",
        "questionRange": "Câu 8",
        "title": "Part 2 - Câu 8: Tôi nên hỏi ai để mua vé đi Bangkok?",
        "audioSrc": "/audio/cuts/test2/E26-T02-08.mp3",
        "transcript": [
            {"id": "p2-8-q", "speaker": "W-Am", "text": "Who should I talk to about getting a ticket to Bangkok?", "vietnamese": "Tôi nên liên hệ với ai để mua vé đi Bangkok?"},
            {"id": "p2-8-a", "speaker": "W-Br", "text": "(A) How about after the conference?", "vietnamese": "(A) Sau hội nghị thì sao?"},
            {"id": "p2-8-b", "speaker": "W-Br", "text": "(B) The agent at the ticket counter.", "vietnamese": "(B) Nhân viên ở quầy bán vé ấy."},
            {"id": "p2-8-c", "speaker": "W-Br", "text": "(C) In front of the theater.", "vietnamese": "(C) Ở phía trước nhà hát."}
        ],
        "questions": [
            {
                "num": 8,
                "question": "Who should I talk to about getting a ticket to Bangkok?",
                "vietnameseQuestion": "Tôi nên nói chuyện với ai để mua vé đi Bangkok?",
                "options": [
                    {"key": "A", "text": "How about after the conference?", "vietnamese": "Sau hội nghị thì thế nào?"},
                    {"key": "B", "text": "The agent at the ticket counter.", "vietnamese": "Nhân viên tại quầy bán vé."},
                    {"key": "C", "text": "In front of the theater.", "vietnamese": "Ở phía trước nhà hát."}
                ],
                "correctAnswer": "B",
                "explanation": "Câu hỏi bắt đầu bằng 'Who' (Hỏi về người). (B) chỉ đích danh đối tượng cần gặp: nhân viên tại quầy vé (The agent at the ticket counter)."
            }
        ],
        "vocabulary": [
            {"word": "agent", "meaning": "nhân viên, đại lý", "partOfSpeech": "n"},
            {"word": "ticket counter", "meaning": "quầy bán vé", "partOfSpeech": "n"}
        ]
    },
    {
        "id": "part2-9",
        "part": 2,
        "partTitle": "Part 2: Hỏi & Đáp",
        "questionRange": "Câu 9",
        "title": "Part 2 - Câu 9: Báo cáo gửi email hay in ra?",
        "audioSrc": "/audio/cuts/test2/E26-T02-09.mp3",
        "transcript": [
            {"id": "p2-9-q", "speaker": "M-Au", "text": "Would you like the report to be e-mailed or printed out?", "vietnamese": "Bạn muốn nhận báo cáo qua email hay in ra giấy?"},
            {"id": "p2-9-a", "speaker": "W-Br", "text": "(A) An electric heater.", "vietnamese": "(A) Một chiếc máy sưởi điện."},
            {"id": "p2-9-b", "speaker": "W-Br", "text": "(B) Page 25.", "vietnamese": "(B) Trang 25."},
            {"id": "p2-9-c", "speaker": "W-Br", "text": "(C) Either way is fine.", "vietnamese": "(C) Cách nào cũng được ạ."}
        ],
        "questions": [
            {
                "num": 9,
                "question": "Would you like the report to be e-mailed or printed out?",
                "vietnameseQuestion": "Bạn muốn báo cáo được gửi qua email hay in ra?",
                "options": [
                    {"key": "A", "text": "An electric heater.", "vietnamese": "Một máy sưởi điện."},
                    {"key": "B", "text": "Page 25.", "vietnamese": "Trang 25."},
                    {"key": "C", "text": "Either way is fine.", "vietnamese": "Cách nào cũng được."}
                ],
                "correctAnswer": "C",
                "explanation": "Câu hỏi lựa chọn giữa email hoặc in ra. (C) 'Either way is fine' (Cách nào cũng được) là câu trả lời kinh điển và chuẩn xác."
            }
        ],
        "vocabulary": [
            {"word": "print out", "meaning": "in ra", "partOfSpeech": "phr v"},
            {"word": "either way", "meaning": "cách nào cũng được", "partOfSpeech": "phrase"}
        ]
    },
    {
        "id": "part2-10",
        "part": 2,
        "partTitle": "Part 2: Hỏi & Đáp",
        "questionRange": "Câu 10",
        "title": "Part 2 - Câu 10: Đã quyết định giá vé hòa nhạc chưa?",
        "audioSrc": "/audio/cuts/test2/E26-T02-10.mp3",
        "transcript": [
            {"id": "p2-10-q", "speaker": "W-Am", "text": "Have you decided how much to charge for your concert tickets?", "vietnamese": "Bạn đã quyết định thu giá bao nhiêu cho vé buổi hòa nhạc chưa?"},
            {"id": "p2-10-a", "speaker": "W-Br", "text": "(A) Yes—fifteen dollars each.", "vietnamese": "(A) Rồi—mười lăm đô la mỗi vé."},
            {"id": "p2-10-b", "speaker": "W-Br", "text": "(B) I've read about that.", "vietnamese": "(B) Tôi đã đọc về điều đó."},
            {"id": "p2-10-c", "speaker": "W-Br", "text": "(C) A jazz band.", "vietnamese": "(C) Một ban nhạc jazz."}
        ],
        "questions": [
            {
                "num": 10,
                "question": "Have you decided how much to charge for your concert tickets?",
                "vietnameseQuestion": "Bạn đã quyết định sẽ tính giá vé hòa nhạc bao nhiêu chưa?",
                "options": [
                    {"key": "A", "text": "Yes—fifteen dollars each.", "vietnamese": "Rồi—15 đô la một vé."},
                    {"key": "B", "text": "I've read about that.", "vietnamese": "Tôi đã đọc về việc đó."},
                    {"key": "C", "text": "A jazz band.", "vietnamese": "Một ban nhạc jazz."}
                ],
                "correctAnswer": "A",
                "explanation": "Câu hỏi Yes/No kết hợp hỏi giá cả (how much to charge). (A) trả lời 'Yes' và kèm theo mức giá cụ thể 15 USD/vé."
            }
        ],
        "vocabulary": [
            {"word": "charge", "meaning": "tính giá, thu phí", "partOfSpeech": "v"},
            {"word": "concert ticket", "meaning": "vé hòa nhạc", "partOfSpeech": "n"}
        ]
    },
    {
        "id": "part2-11",
        "part": 2,
        "partTitle": "Part 2: Hỏi & Đáp",
        "questionRange": "Câu 11",
        "title": "Part 2 - Câu 11: Cửa hàng bao lâu thì khuyến mãi một lần?",
        "audioSrc": "/audio/cuts/test2/E26-T02-11.mp3",
        "transcript": [
            {"id": "p2-11-q", "speaker": "M-Au", "text": "How often does the store offer a sales promotion?", "vietnamese": "Cửa hàng bao lâu lại có một đợt khuyến mãi?"},
            {"id": "p2-11-a", "speaker": "W-Am", "text": "(A) A discount on appliances.", "vietnamese": "(A) Giảm giá cho đồ gia dụng."},
            {"id": "p2-11-b", "speaker": "W-Am", "text": "(B) Sure, I can buy some.", "vietnamese": "(B) Chắc chắn rồi, tôi có thể mua vài món."},
            {"id": "p2-11-c", "speaker": "W-Am", "text": "(C) Every three months.", "vietnamese": "(C) Cứ ba tháng một lần."}
        ],
        "questions": [
            {
                "num": 11,
                "question": "How often does the store offer a sales promotion?",
                "vietnameseQuestion": "Cửa hàng có chương trình khuyến mãi thường xuyên như thế nào?",
                "options": [
                    {"key": "A", "text": "A discount on appliances.", "vietnamese": "Giảm giá các thiết bị gia dụng."},
                    {"key": "B", "text": "Sure, I can buy some.", "vietnamese": "Chắc chắn rồi, tôi có thể mua vài món."},
                    {"key": "C", "text": "Every three months.", "vietnamese": "Cứ ba tháng một lần."}
                ],
                "correctAnswer": "C",
                "explanation": "Câu hỏi tần suất 'How often'. (C) trả lời chính xác tần suất thời gian: 'Every three months' (3 tháng một lần)."
            }
        ],
        "vocabulary": [
            {"word": "sales promotion", "meaning": "chương trình khuyến mãi, kích cầu", "partOfSpeech": "n"},
            {"word": "appliance", "meaning": "thiết bị gia dụng", "partOfSpeech": "n"}
        ]
    },
    {
        "id": "part2-12",
        "part": 2,
        "partTitle": "Part 2: Hỏi & Đáp",
        "questionRange": "Câu 12",
        "title": "Part 2 - Câu 12: Chuyến tham quan bắt đầu lúc trưa nay đúng không?",
        "audioSrc": "/audio/cuts/test2/E26-T02-12.mp3",
        "transcript": [
            {"id": "p2-12-q", "speaker": "W-Am", "text": "The tour starts at noon today, doesn't it?", "vietnamese": "Chuyến tham quan bắt đầu lúc giữa trưa hôm nay phải không?"},
            {"id": "p2-12-a", "speaker": "W-Br", "text": "(A) Please start this washing machine.", "vietnamese": "(A) Xin hãy khởi động máy giặt này."},
            {"id": "p2-12-b", "speaker": "W-Br", "text": "(B) He's playing a folk tune.", "vietnamese": "(B) Anh ấy đang chơi một giai điệu dân ca."},
            {"id": "p2-12-c", "speaker": "W-Br", "text": "(C) No—it's been postponed an hour.", "vietnamese": "(C) Không—nó bị hoãn lại một tiếng rồi."}
        ],
        "questions": [
            {
                "num": 12,
                "question": "The tour starts at noon today, doesn't it?",
                "vietnameseQuestion": "Chuyến tham quan bắt đầu lúc giữa trưa nay, đúng không?",
                "options": [
                    {"key": "A", "text": "Please start this washing machine.", "vietnamese": "Xin hãy bật máy giặt này lên."},
                    {"key": "B", "text": "He's playing a folk tune.", "vietnamese": "Anh ấy đang chơi một bản nhạc dân gian."},
                    {"key": "C", "text": "No—it's been postponed an hour.", "vietnamese": "Không—nó đã bị lùi lại một tiếng."}
                ],
                "correctAnswer": "C",
                "explanation": "Câu hỏi đuôi xác nhận thời gian. (C) phủ nhận và cung cấp thông tin chuyến đi đã bị hoãn lại 1 tiếng."
            }
        ],
        "vocabulary": [
            {"word": "noon", "meaning": "buổi trưa (12h trưa)", "partOfSpeech": "n"},
            {"word": "postpone", "meaning": "trì hoãn, lùi lại", "partOfSpeech": "v"}
        ]
    },
    {
        "id": "part2-13",
        "part": 2,
        "partTitle": "Part 2: Hỏi & Đáp",
        "questionRange": "Câu 13",
        "title": "Part 2 - Câu 13: Hãy bắt đầu cuộc họp về dự án Taylor",
        "audioSrc": "/audio/cuts/test2/E26-T02-13.mp3",
        "transcript": [
            {"id": "p2-13-q", "speaker": "W-Am", "text": "Let's begin our meeting about the Taylor project.", "vietnamese": "Chúng ta hãy bắt đầu cuộc họp về dự án Taylor nhé."},
            {"id": "p2-13-a", "speaker": "M-Au", "text": "(A) Good idea—we have a lot to get through.", "vietnamese": "(A) Ý hay đấy—chúng ta có rất nhiều việc phải giải quyết."},
            {"id": "p2-13-b", "speaker": "M-Au", "text": "(B) Some project proposals.", "vietnamese": "(B) Một số đề xuất dự án."},
            {"id": "p2-13-c", "speaker": "M-Au", "text": "(C) No, in room 725.", "vietnamese": "(C) Không, ở phòng 725."}
        ],
        "questions": [
            {
                "num": 13,
                "question": "Let's begin our meeting about the Taylor project.",
                "vietnameseQuestion": "Hãy bắt đầu cuộc họp về dự án Taylor nhé.",
                "options": [
                    {"key": "A", "text": "Good idea—we have a lot to get through.", "vietnamese": "Ý kiến hay đấy—chúng ta có nhiều nội dung cần xử lý."},
                    {"key": "B", "text": "Some project proposals.", "vietnamese": "Một số bản đề xuất dự án."},
                    {"key": "C", "text": "No, in room 725.", "vietnamese": "Không, ở phòng 725."}
                ],
                "correctAnswer": "A",
                "explanation": "Lời đề nghị 'Let's begin...'. (A) đồng tình với đề nghị: 'Good idea—we have a lot to get through'."
            }
        ],
        "vocabulary": [
            {"word": "get through", "meaning": "hoàn thành, xử lý hết", "partOfSpeech": "phr v"},
            {"word": "proposal", "meaning": "đề xuất, bản kế hoạch", "partOfSpeech": "n"}
        ]
    },
    {
        "id": "part2-14",
        "part": 2,
        "partTitle": "Part 2: Hỏi & Đáp",
        "questionRange": "Câu 14",
        "title": "Part 2 - Câu 14: Có phòng khám nha khoa trên phố Main phải không?",
        "audioSrc": "/audio/cuts/test2/E26-T02-14.mp3",
        "transcript": [
            {"id": "p2-14-q", "speaker": "M-Cn", "text": "There's a dental clinic on Main Street, isn't there?", "vietnamese": "Có một phòng khám nha khoa trên đường Main phải không?"},
            {"id": "p2-14-a", "speaker": "W-Br", "text": "(A) Yes, it's very convenient.", "vietnamese": "(A) Đúng vậy, nó rất thuận tiện."},
            {"id": "p2-14-b", "speaker": "W-Br", "text": "(B) A toothbrush and toothpaste.", "vietnamese": "(B) Một bàn chải và kem đánh răng."},
            {"id": "p2-14-c", "speaker": "W-Br", "text": "(C) I'll have the main dish, thanks.", "vietnamese": "(C) Tôi sẽ dùng món chính, cảm ơn."}
        ],
        "questions": [
            {
                "num": 14,
                "question": "There's a dental clinic on Main Street, isn't there?",
                "vietnameseQuestion": "Có một phòng khám nha khoa trên đường Main, đúng không?",
                "options": [
                    {"key": "A", "text": "Yes, it's very convenient.", "vietnamese": "Vâng, nó rất thuận tiện."},
                    {"key": "B", "text": "A toothbrush and toothpaste.", "vietnamese": "Bàn chải và kem đánh răng."},
                    {"key": "C", "text": "I'll have the main dish, thanks.", "vietnamese": "Tôi sẽ ăn món chính, cảm ơn."}
                ],
                "correctAnswer": "A",
                "explanation": "Câu hỏi đuôi xác nhận sự tồn tại của phòng khám. (A) xác nhận 'Yes' và khen ngợi phòng khám này rất thuận tiện."
            }
        ],
        "vocabulary": [
            {"word": "dental clinic", "meaning": "phòng khám nha khoa", "partOfSpeech": "n"},
            {"word": "convenient", "meaning": "tiện lợi, thuận tiện", "partOfSpeech": "adj"}
        ]
    },
    {
        "id": "part2-15",
        "part": 2,
        "partTitle": "Part 2: Hỏi & Đáp",
        "questionRange": "Câu 15",
        "title": "Part 2 - Câu 15: Buổi đọc sách sẽ diễn ra ở đâu?",
        "audioSrc": "/audio/cuts/test2/E26-T02-15.mp3",
        "transcript": [
            {"id": "p2-15-q", "speaker": "W-Am", "text": "Where is the book reading going to take place?", "vietnamese": "Buổi đọc sách sẽ diễn ra ở đâu?"},
            {"id": "p2-15-a", "speaker": "M-Au", "text": "(A) Sure—I can give you a tour later.", "vietnamese": "(A) Chắc chắn rồi—tôi có thể dẫn bạn đi tham quan sau."},
            {"id": "p2-15-b", "speaker": "M-Au", "text": "(B) At the library.", "vietnamese": "(B) Ở thư viện."},
            {"id": "p2-15-c", "speaker": "M-Au", "text": "(C) It lasts a while.", "vietnamese": "(C) Nó kéo dài một lúc."}
        ],
        "questions": [
            {
                "num": 15,
                "question": "Where is the book reading going to take place?",
                "vietnameseQuestion": "Buổi đọc sách sẽ diễn ra ở địa điểm nào?",
                "options": [
                    {"key": "A", "text": "Sure—I can give you a tour later.", "vietnamese": "Được chứ—tôi có thể dẫn bạn tham quan sau."},
                    {"key": "B", "text": "At the library.", "vietnamese": "Ở thư viện."},
                    {"key": "C", "text": "It lasts a while.", "vietnamese": "Nó kéo dài một thời gian."}
                ],
                "correctAnswer": "B",
                "explanation": "Câu hỏi 'Where' (Ở đâu). (B) chỉ rõ địa điểm: 'At the library' (Ở thư viện)."
            }
        ],
        "vocabulary": [
            {"word": "take place", "meaning": "diễn ra, tổ chức", "partOfSpeech": "phr v"},
            {"word": "reading", "meaning": "buổi đọc sách, buổi ngâm thơ", "partOfSpeech": "n"}
        ]
    },
    {
        "id": "part2-16",
        "part": 2,
        "partTitle": "Part 2: Hỏi & Đáp",
        "questionRange": "Câu 16",
        "title": "Part 2 - Câu 16: Khi nào xe buýt sẽ tới đây?",
        "audioSrc": "/audio/cuts/test2/E26-T02-16.mp3",
        "transcript": [
            {"id": "p2-16-q", "speaker": "M-Cn", "text": "When's the bus going to be here?", "vietnamese": "Khi nào thì xe buýt tới đây?"},
            {"id": "p2-16-a", "speaker": "M-Au", "text": "(A) A round-trip ticket.", "vietnamese": "(A) Một vé khứ hồi."},
            {"id": "p2-16-b", "speaker": "M-Au", "text": "(B) Let's break for lunch.", "vietnamese": "(B) Hãy nghỉ ăn trưa thôi."},
            {"id": "p2-16-c", "speaker": "M-Au", "text": "(C) At 3:30 P.M.", "vietnamese": "(C) Lúc 3 giờ 30 chiều."}
        ],
        "questions": [
            {
                "num": 16,
                "question": "When's the bus going to be here?",
                "vietnameseQuestion": "Khi nào xe buýt sẽ đến nơi?",
                "options": [
                    {"key": "A", "text": "A round-trip ticket.", "vietnamese": "Một vé khứ hồi."},
                    {"key": "B", "text": "Let's break for lunch.", "vietnamese": "Nghỉ tay ăn trưa nào."},
                    {"key": "C", "text": "At 3:30 P.M.", "vietnamese": "Lúc 3:30 chiều."}
                ],
                "correctAnswer": "C",
                "explanation": "Câu hỏi 'When' (Khi nào). (C) chỉ mốc thời gian rõ ràng: 'At 3:30 P.M.'."
            }
        ],
        "vocabulary": [
            {"word": "round-trip", "meaning": "khứ hồi, hai chiều", "partOfSpeech": "adj"},
            {"word": "break for", "meaning": "nghỉ giải lao để làm gì", "partOfSpeech": "phr v"}
        ]
    },
    {
        "id": "part2-17",
        "part": 2,
        "partTitle": "Part 2: Hỏi & Đáp",
        "questionRange": "Câu 17",
        "title": "Part 2 - Câu 17: Giá bảo hiểm ô tô ước tính cao hơn dự kiến",
        "audioSrc": "/audio/cuts/test2/E26-T02-17.mp3",
        "transcript": [
            {"id": "p2-17-q", "speaker": "M-Cn", "text": "The estimated price for this car insurance is higher than we expected.", "vietnamese": "Mức giá ước tính cho gói bảo hiểm xe ô tô này cao hơn chúng ta kỳ vọng."},
            {"id": "p2-17-a", "speaker": "W-Am", "text": "(A) We'll check to see if there's a cheaper rate.", "vietnamese": "(A) Chúng tôi sẽ kiểm tra xem có mức giá nào rẻ hơn không."},
            {"id": "p2-17-b", "speaker": "W-Am", "text": "(B) There's another filling station nearby.", "vietnamese": "(B) Có một cây xăng khác ở gần đây."},
            {"id": "p2-17-c", "speaker": "W-Am", "text": "(C) The parking garage on the corner.", "vietnamese": "(C) Nhà để xe ở góc đường."}
        ],
        "questions": [
            {
                "num": 17,
                "question": "The estimated price for this car insurance is higher than we expected.",
                "vietnameseQuestion": "Giá ước tính cho bảo hiểm ô tô này cao hơn chúng ta dự kiến.",
                "options": [
                    {"key": "A", "text": "We'll check to see if there's a cheaper rate.", "vietnamese": "Chúng tôi sẽ xem có mức phí nào rẻ hơn không."},
                    {"key": "B", "text": "There's another filling station nearby.", "vietnamese": "Có một trạm xăng khác gần đây."},
                    {"key": "C", "text": "The parking garage on the corner.", "vietnamese": "Nhà để xe ở góc phố."}
                ],
                "correctAnswer": "A",
                "explanation": "Câu trần thuật than phiền giá bảo hiểm cao. (A) đưa ra hướng giải quyết hợp lý: tìm mức giá rẻ hơn (cheaper rate)."
            }
        ],
        "vocabulary": [
            {"word": "estimated price", "meaning": "mức giá ước tính", "partOfSpeech": "n"},
            {"word": "insurance", "meaning": "bảo hiểm", "partOfSpeech": "n"},
            {"word": "rate", "meaning": "mức giá, tỉ lệ", "partOfSpeech": "n"},
            {"word": "filling station", "meaning": "trạm xăng", "partOfSpeech": "n"}
        ]
    },
    {
        "id": "part2-18",
        "part": 2,
        "partTitle": "Part 2: Hỏi & Đáp",
        "questionRange": "Câu 18",
        "title": "Part 2 - Câu 18: Sao việc tu sửa vẫn chưa xong?",
        "audioSrc": "/audio/cuts/test2/E26-T02-18.mp3",
        "transcript": [
            {"id": "p2-18-q", "speaker": "W-Am", "text": "Why haven't the renovations been completed yet?", "vietnamese": "Tại sao việc tu sửa vẫn chưa được hoàn thành?"},
            {"id": "p2-18-a", "speaker": "M-Au", "text": "(A) It's on the top shelf.", "vietnamese": "(A) Nó ở trên giá trên cùng."},
            {"id": "p2-18-b", "speaker": "M-Au", "text": "(B) Because some materials were delayed.", "vietnamese": "(B) Bởi vì một số vật liệu đã bị chậm trễ."},
            {"id": "p2-18-c", "speaker": "M-Au", "text": "(C) Some guests haven't received an invitation.", "vietnamese": "(C) Một số khách vẫn chưa nhận được thư mời."}
        ],
        "questions": [
            {
                "num": 18,
                "question": "Why haven't the renovations been completed yet?",
                "vietnameseQuestion": "Tại sao công tác sửa chữa vẫn chưa hoàn tất?",
                "options": [
                    {"key": "A", "text": "It's on the top shelf.", "vietnamese": "Nó ở trên kệ trên cùng."},
                    {"key": "B", "text": "Because some materials were delayed.", "vietnamese": "Vì một số vật tư bị giao trễ."},
                    {"key": "C", "text": "Some guests haven't received an invitation.", "vietnamese": "Một số khách vẫn chưa nhận được giấy mời."}
                ],
                "correctAnswer": "B",
                "explanation": "Câu hỏi lý do 'Why'. (B) giải thích trực tiếp bằng 'Because some materials were delayed'."
            }
        ],
        "vocabulary": [
            {"word": "renovation", "meaning": "sự cải tạo, tu sửa", "partOfSpeech": "n"},
            {"word": "material", "meaning": "vật liệu, vật tư", "partOfSpeech": "n"},
            {"word": "delay", "meaning": "làm chậm trễ, hoãn", "partOfSpeech": "v"}
        ]
    },
    {
        "id": "part2-19",
        "part": 2,
        "partTitle": "Part 2: Hỏi & Đáp",
        "questionRange": "Câu 19",
        "title": "Part 2 - Câu 19: Tôi sẽ cho bạn số điện thoại văn phòng",
        "audioSrc": "/audio/cuts/test2/E26-T02-19.mp3",
        "transcript": [
            {"id": "p2-19-q", "speaker": "M-Au", "text": "I'll give you my office number in case you have questions about the data.", "vietnamese": "Tôi sẽ đưa bạn số văn phòng phòng khi bạn có câu hỏi về dữ liệu."},
            {"id": "p2-19-a", "speaker": "W-Br", "text": "(A) The theater is reserved for that date.", "vietnamese": "(A) Nhà hát đã được đặt trước cho ngày đó."},
            {"id": "p2-19-b", "speaker": "W-Br", "text": "(B) The file cabinet needs to be moved.", "vietnamese": "(B) Tủ hồ sơ cần phải được di chuyển."},
            {"id": "p2-19-c", "speaker": "W-Br", "text": "(C) Thanks—I appreciate that.", "vietnamese": "(C) Cảm ơn—tôi rất trân trọng điều đó."}
        ],
        "questions": [
            {
                "num": 19,
                "question": "I'll give you my office number in case you have questions about the data.",
                "vietnameseQuestion": "Tôi sẽ đưa số văn phòng cho bạn phòng khi có thắc mắc về dữ liệu.",
                "options": [
                    {"key": "A", "text": "The theater is reserved for that date.", "vietnamese": "Nhà hát đã được đặt trước vào ngày đó."},
                    {"key": "B", "text": "The file cabinet needs to be moved.", "vietnamese": "Cần phải chuyển tủ tài liệu."},
                    {"key": "C", "text": "Thanks—I appreciate that.", "vietnamese": "Cảm ơn—tôi rất ghi nhận điều đó."}
                ],
                "correctAnswer": "C",
                "explanation": "Đáp lại lời đề nghị giúp đỡ/cho số liên lạc, câu cảm ơn lịch sự 'Thanks—I appreciate that' là phù hợp nhất."
            }
        ],
        "vocabulary": [
            {"word": "in case", "meaning": "phòng khi, trong trường hợp", "partOfSpeech": "conj"},
            {"word": "appreciate", "meaning": "trân trọng, cảm kích", "partOfSpeech": "v"}
        ]
    },
    {
        "id": "part2-20",
        "part": 2,
        "partTitle": "Part 2: Hỏi & Đáp",
        "questionRange": "Câu 20",
        "title": "Part 2 - Câu 20: Chúng ta nên đỗ xe ở khu vực nào?",
        "audioSrc": "/audio/cuts/test2/E26-T02-20.mp3",
        "transcript": [
            {"id": "p2-20-q", "speaker": "M-Au", "text": "Which parking area should we use?", "vietnamese": "Chúng ta nên sử dụng bãi đỗ xe nào?"},
            {"id": "p2-20-a", "speaker": "M-Cn", "text": "(A) The fee is fifteen dollars.", "vietnamese": "(A) Mức phí là mười lăm đô la."},
            {"id": "p2-20-b", "speaker": "M-Cn", "text": "(B) About a twenty-minute delay.", "vietnamese": "(B) Chậm khoảng hai mươi phút."},
            {"id": "p2-20-c", "speaker": "M-Cn", "text": "(C) The one by Smith's Pharmacy.", "vietnamese": "(C) Bãi xe bên cạnh hiệu thuốc Smith."}
        ],
        "questions": [
            {
                "num": 20,
                "question": "Which parking area should we use?",
                "vietnameseQuestion": "Chúng ta nên dùng khu vực đỗ xe nào?",
                "options": [
                    {"key": "A", "text": "The fee is fifteen dollars.", "vietnamese": "Phí là 15 đô la."},
                    {"key": "B", "text": "About a twenty-minute delay.", "vietnamese": "Khoảng 20 phút chậm trễ."},
                    {"key": "C", "text": "The one by Smith's Pharmacy.", "vietnamese": "Khu bên cạnh hiệu thuốc Smith."}
                ],
                "correctAnswer": "C",
                "explanation": "Câu hỏi lựa chọn 'Which parking area'. (C) dùng đại từ 'The one' để chỉ bãi đỗ xe cạnh hiệu thuốc Smith."
            }
        ],
        "vocabulary": [
            {"word": "parking area", "meaning": "khu vực đỗ xe, bãi xe", "partOfSpeech": "n"},
            {"word": "pharmacy", "meaning": "hiệu thuốc", "partOfSpeech": "n"}
        ]
    },
    {
        "id": "part2-21",
        "part": 2,
        "partTitle": "Part 2: Hỏi & Đáp",
        "questionRange": "Câu 21",
        "title": "Part 2 - Câu 21: Hãy đi taxi ra sân bay",
        "audioSrc": "/audio/cuts/test2/E26-T02-21.mp3",
        "transcript": [
            {"id": "p2-21-q", "speaker": "W-Am", "text": "Let's take a taxi to the airport.", "vietnamese": "Chúng ta hãy đi taxi đến sân bay đi."},
            {"id": "p2-21-a", "speaker": "W-Br", "text": "(A) My seats are in section 21.", "vietnamese": "(A) Ghế của tôi ở khu vực 21."},
            {"id": "p2-21-b", "speaker": "W-Br", "text": "(B) Sure, that will be the easiest.", "vietnamese": "(B) Được thôi, cách đó sẽ là dễ dàng nhất."},
            {"id": "p2-21-c", "speaker": "W-Br", "text": "(C) The café is a few blocks away.", "vietnamese": "(C) Quán cà phê cách đây vài dãy nhà."}
        ],
        "questions": [
            {
                "num": 21,
                "question": "Let's take a taxi to the airport.",
                "vietnameseQuestion": "Hãy bắt taxi tới sân bay nhé.",
                "options": [
                    {"key": "A", "text": "My seats are in section 21.", "vietnamese": "Chỗ ngồi của tôi ở khu 21."},
                    {"key": "B", "text": "Sure, that will be the easiest.", "vietnamese": "Được chứ, thế là tiện nhất rồi."},
                    {"key": "C", "text": "The café is a few blocks away.", "vietnamese": "Quán cà phê cách đây vài dãy nhà."}
                ],
                "correctAnswer": "B",
                "explanation": "Lời đề nghị 'Let's...'. (B) đồng thuận 'Sure' và giải thích đó là phương án thuận tiện nhất (the easiest)."
            }
        ],
        "vocabulary": [
            {"word": "airport", "meaning": "sân bay", "partOfSpeech": "n"},
            {"word": "block", "meaning": "dãy nhà, khối nhà", "partOfSpeech": "n"}
        ]
    },
    {
        "id": "part2-22",
        "part": 2,
        "partTitle": "Part 2: Hỏi & Đáp",
        "questionRange": "Câu 22",
        "title": "Part 2 - Câu 22: Buổi đào tạo của nhóm đông người tham gia nhỉ?",
        "audioSrc": "/audio/cuts/test2/E26-T02-22.mp3",
        "transcript": [
            {"id": "p2-22-q", "speaker": "M-Au", "text": "Our team training session was well attended, wasn't it?", "vietnamese": "Buổi đào tạo nhóm của chúng ta có nhiều người tham dự đúng không?"},
            {"id": "p2-22-a", "speaker": "M-Cn", "text": "(A) They were delivered yesterday.", "vietnamese": "(A) Chúng đã được giao ngày hôm qua."},
            {"id": "p2-22-b", "speaker": "M-Cn", "text": "(B) No, just down the hall.", "vietnamese": "(B) Không, ngay cuối hành lang thôi."},
            {"id": "p2-22-c", "speaker": "M-Cn", "text": "(C) Actually, not everyone was there.", "vietnamese": "(C) Thật ra, không phải ai cũng có mặt đâu."}
        ],
        "questions": [
            {
                "num": 22,
                "question": "Our team training session was well attended, wasn't it?",
                "vietnameseQuestion": "Buổi đào tạo nhóm có đông người đi đúng không?",
                "options": [
                    {"key": "A", "text": "They were delivered yesterday.", "vietnamese": "Chúng đã được giao hôm qua."},
                    {"key": "B", "text": "No, just down the hall.", "vietnamese": "Không, chỉ ở cuối hành lang."},
                    {"key": "C", "text": "Actually, not everyone was there.", "vietnamese": "Thực ra không phải ai cũng có mặt."}
                ],
                "correctAnswer": "C",
                "explanation": "Câu hỏi xác nhận mức độ đông đúc. (C) đính chính khéo léo: 'Actually, not everyone was there' (không đông như bạn nghĩ)."
            }
        ],
        "vocabulary": [
            {"word": "training session", "meaning": "buổi đào tạo, tập huấn", "partOfSpeech": "n"},
            {"word": "well attended", "meaning": "có đông người tham dự", "partOfSpeech": "adj"}
        ]
    },
    {
        "id": "part2-23",
        "part": 2,
        "partTitle": "Part 2: Hỏi & Đáp",
        "questionRange": "Câu 23",
        "title": "Part 2 - Câu 23: Sao công ty lại ngừng xuất bản bản tin?",
        "audioSrc": "/audio/cuts/test2/E26-T02-23.mp3",
        "transcript": [
            {"id": "p2-23-q", "speaker": "M-Cn", "text": "Why's the company discontinuing its newsletter?", "vietnamese": "Tại sao công ty lại dừng phát hành bản tin nội bộ?"},
            {"id": "p2-23-a", "speaker": "W-Am", "text": "(A) Only the print version.", "vietnamese": "(A) Chỉ dừng phiên bản in thôi."},
            {"id": "p2-23-b", "speaker": "W-Am", "text": "(B) Two to three times per week.", "vietnamese": "(B) Hai đến ba lần mỗi tuần."},
            {"id": "p2-23-c", "speaker": "W-Am", "text": "(C) How far is the main office building?", "vietnamese": "(C) Tòa nhà văn phòng chính cách bao xa?"}
        ],
        "questions": [
            {
                "num": 23,
                "question": "Why's the company discontinuing its newsletter?",
                "vietnameseQuestion": "Tại sao công ty lại ngừng phát hành bản tin?",
                "options": [
                    {"key": "A", "text": "Only the print version.", "vietnamese": "Chỉ dừng phiên bản in giấy thôi."},
                    {"key": "B", "text": "Two to three times per week.", "vietnamese": "2 đến 3 lần mỗi tuần."},
                    {"key": "C", "text": "How far is the main office building?", "vietnamese": "Tòa nhà văn phòng chính cách đây bao xa?"}
                ],
                "correctAnswer": "A",
                "explanation": "Hỏi tại sao lại dừng bản tin. (A) đính chính lại thông tin: Không phải dừng hẳn mà 'Only the print version' (chỉ dừng bản in, chuyển sang bản điện tử)."
            }
        ],
        "vocabulary": [
            {"word": "discontinue", "meaning": "ngừng lại, đình chỉ", "partOfSpeech": "v"},
            {"word": "newsletter", "meaning": "bản tin nội bộ", "partOfSpeech": "n"},
            {"word": "print version", "meaning": "ấn bản in giấy", "partOfSpeech": "n"}
        ]
    },
    {
        "id": "part2-24",
        "part": 2,
        "partTitle": "Part 2: Hỏi & Đáp",
        "questionRange": "Câu 24",
        "title": "Part 2 - Câu 24: Bạn đã định nghỉ chiều nay phải không?",
        "audioSrc": "/audio/cuts/test2/E26-T02-24.mp3",
        "transcript": [
            {"id": "p2-24-q", "speaker": "M-Au", "text": "Weren't you planning to take the afternoon off?", "vietnamese": "Không phải bạn đã lên kế hoạch nghỉ buổi chiều nay sao?"},
            {"id": "p2-24-a", "speaker": "W-Am", "text": "(A) The clients wanted to meet today.", "vietnamese": "(A) Khách hàng muốn gặp mặt vào hôm nay."},
            {"id": "p2-24-b", "speaker": "W-Am", "text": "(B) I took it off the middle shelf.", "vietnamese": "(B) Tôi lấy nó ra khỏi kệ ở giữa."},
            {"id": "p2-24-c", "speaker": "W-Am", "text": "(C) He created a great project plan.", "vietnamese": "(C) Anh ấy đã tạo một kế hoạch dự án tuyệt vời."}
        ],
        "questions": [
            {
                "num": 24,
                "question": "Weren't you planning to take the afternoon off?",
                "vietnameseQuestion": "Có phải bạn định xin nghỉ buổi chiều nay không?",
                "options": [
                    {"key": "A", "text": "The clients wanted to meet today.", "vietnamese": "Khách hàng muốn gặp hôm nay."},
                    {"key": "B", "text": "I took it off the middle shelf.", "vietnamese": "Tôi lấy nó từ kệ giữa."},
                    {"key": "C", "text": "He created a great project plan.", "vietnamese": "Anh ấy đã tạo bản kế hoạch rất tốt."}
                ],
                "correctAnswer": "A",
                "explanation": "Câu hỏi gián tiếp tại sao vẫn ở văn phòng. (A) giải thích lý do không thể nghỉ: 'The clients wanted to meet today'."
            }
        ],
        "vocabulary": [
            {"word": "take the afternoon off", "meaning": "nghỉ làm buổi chiều", "partOfSpeech": "phrase"},
            {"word": "client", "meaning": "khách hàng, đối tác", "partOfSpeech": "n"}
        ]
    },
    {
        "id": "part2-25",
        "part": 2,
        "partTitle": "Part 2: Hỏi & Đáp",
        "questionRange": "Câu 25",
        "title": "Part 2 - Câu 25: Bác sĩ Molina khám bệnh tại phòng khám Middleville",
        "audioSrc": "/audio/cuts/test2/E26-T02-25.mp3",
        "transcript": [
            {"id": "p2-25-q", "speaker": "M-Cn", "text": "Dr. Molina sees patients in her Middleville office.", "vietnamese": "Bác sĩ Molina khám cho các bệnh nhân tại văn phòng Middleville của cô ấy."},
            {"id": "p2-25-a", "speaker": "W-Am", "text": "(A) The instructor was so patient with the students.", "vietnamese": "(A) Người hướng dẫn rất kiên nhẫn với các học viên."},
            {"id": "p2-25-b", "speaker": "W-Am", "text": "(B) Oh, that's only two kilometers from my house.", "vietnamese": "(B) Ồ, chỗ đó chỉ cách nhà tôi hai cây số thôi."},
            {"id": "p2-25-c", "speaker": "W-Am", "text": "(C) We have some digital thermometers in stock.", "vietnamese": "(C) Chúng tôi có sẵn vài chiếc nhiệt kế điện tử trong kho."}
        ],
        "questions": [
            {
                "num": 25,
                "question": "Dr. Molina sees patients in her Middleville office.",
                "vietnameseQuestion": "Bác sĩ Molina khám bệnh tại văn phòng ở Middleville.",
                "options": [
                    {"key": "A", "text": "The instructor was so patient with the students.", "vietnamese": "Giảng viên rất kiên nhẫn với học viên."},
                    {"key": "B", "text": "Oh, that's only two kilometers from my house.", "vietnamese": "Ồ, chỗ đó chỉ cách nhà tôi có 2 km thôi."},
                    {"key": "C", "text": "We have some digital thermometers in stock.", "vietnamese": "Chúng tôi có nhiệt kế điện tử trong kho."}
                ],
                "correctAnswer": "B",
                "explanation": "Câu cung cấp thông tin về địa điểm khám bệnh. (B) phản hồi tự nhiên thể hiện sự vui mừng vì địa điểm đó rất gần nhà mình."
            }
        ],
        "vocabulary": [
            {"word": "patient", "meaning": "bệnh nhân (n), kiên nhẫn (adj)", "partOfSpeech": "n/adj"},
            {"word": "see patients", "meaning": "khám bệnh cho bệnh nhân", "partOfSpeech": "phrase"}
        ]
    },
    {
        "id": "part2-26",
        "part": 2,
        "partTitle": "Part 2: Hỏi & Đáp",
        "questionRange": "Câu 26",
        "title": "Part 2 - Câu 26: Ai sẽ đi ra ngoài ăn trưa?",
        "audioSrc": "/audio/cuts/test2/E26-T02-26.mp3",
        "transcript": [
            {"id": "p2-26-q", "speaker": "W-Am", "text": "Who's going out for lunch?", "vietnamese": "Ai sẽ ra ngoài ăn trưa thế?"},
            {"id": "p2-26-a", "speaker": "W-Br", "text": "(A) I enjoyed that book too.", "vietnamese": "(A) Tôi cũng rất thích cuốn sách đó."},
            {"id": "p2-26-b", "speaker": "W-Br", "text": "(B) I'll be leaving work before then.", "vietnamese": "(B) Tôi sẽ rời chỗ làm trước lúc đó rồi."},
            {"id": "p2-26-c", "speaker": "W-Br", "text": "(C) What are you doing this weekend?", "vietnamese": "(C) Bạn dự định làm gì vào cuối tuần này?"}
        ],
        "questions": [
            {
                "num": 26,
                "question": "Who's going out for lunch?",
                "vietnameseQuestion": "Ai sẽ ra ngoài ăn trưa nào?",
                "options": [
                    {"key": "A", "text": "I enjoyed that book too.", "vietnamese": "Tôi cũng thích cuốn sách đó."},
                    {"key": "B", "text": "I'll be leaving work before then.", "vietnamese": "Tôi sẽ về trước giờ đó rồi."},
                    {"key": "C", "text": "What are you doing this weekend?", "vietnamese": "Cuối tuần này bạn làm gì?"}
                ],
                "correctAnswer": "B",
                "explanation": "Hỏi ai đi ăn trưa. (B) gián tiếp từ chối tham gia vì phải về trước giờ ăn trưa (before then)."
            }
        ],
        "vocabulary": [
            {"word": "go out", "meaning": "ra ngoài", "partOfSpeech": "phr v"},
            {"word": "leave work", "meaning": "tan làm, rời cơ quan", "partOfSpeech": "phrase"}
        ]
    },
    {
        "id": "part2-27",
        "part": 2,
        "partTitle": "Part 2: Hỏi & Đáp",
        "questionRange": "Câu 27",
        "title": "Part 2 - Câu 27: Vé mở bán tuần này hay tuần sau?",
        "audioSrc": "/audio/cuts/test2/E26-T02-27.mp3",
        "transcript": [
            {"id": "p2-27-q", "speaker": "W-Am", "text": "Do the tickets go on sale this week or next?", "vietnamese": "Vé sẽ được mở bán trong tuần này hay tuần sau?"},
            {"id": "p2-27-a", "speaker": "M-Au", "text": "(A) The cafeteria downstairs.", "vietnamese": "(A) Nhà ăn ở tầng dưới."},
            {"id": "p2-27-b", "speaker": "M-Au", "text": "(B) They're already sold out.", "vietnamese": "(B) Chúng đã được bán hết sạch rồi."},
            {"id": "p2-27-c", "speaker": "M-Au", "text": "(C) Sure, no problem.", "vietnamese": "(C) Chắc chắn rồi, không vấn đề gì."}
        ],
        "questions": [
            {
                "num": 27,
                "question": "Do the tickets go on sale this week or next?",
                "vietnameseQuestion": "Vé sẽ bán tuần này hay tuần tới?",
                "options": [
                    {"key": "A", "text": "The cafeteria downstairs.", "vietnamese": "Quán ăn tự phục vụ ở tầng dưới."},
                    {"key": "B", "text": "They're already sold out.", "vietnamese": "Chúng đã bán hết vé rồi."},
                    {"key": "C", "text": "Sure, no problem.", "vietnamese": "Chắc chắn rồi, không vấn đề gì."}
                ],
                "correctAnswer": "B",
                "explanation": "Hỏi vé bán tuần này hay tuần sau. (B) cung cấp thông tin bất ngờ nhưng thực tế: vé đã bán hết sạch từ trước rồi (already sold out)."
            }
        ],
        "vocabulary": [
            {"word": "go on sale", "meaning": "bắt đầu mở bán", "partOfSpeech": "phrase"},
            {"word": "sold out", "meaning": "hết hàng, cháy vé", "partOfSpeech": "adj"}
        ]
    },
    {
        "id": "part2-28",
        "part": 2,
        "partTitle": "Part 2: Hỏi & Đáp",
        "questionRange": "Câu 28",
        "title": "Part 2 - Câu 28: Khi nào bạn cập nhật xong dữ liệu bán hàng?",
        "audioSrc": "/audio/cuts/test2/E26-T02-28.mp3",
        "transcript": [
            {"id": "p2-28-q", "speaker": "M-Au", "text": "When will you finish updating the sales data?", "vietnamese": "Khi nào bạn sẽ cập nhật xong dữ liệu bán hàng?"},
            {"id": "p2-28-a", "speaker": "M-Cn", "text": "(A) I'm waiting for information from one more store.", "vietnamese": "(A) Tôi đang đợi thêm thông tin từ một cửa hàng nữa."},
            {"id": "p2-28-b", "speaker": "M-Cn", "text": "(B) In the top drawer.", "vietnamese": "(B) Ở ngăn kéo trên cùng."},
            {"id": "p2-28-c", "speaker": "M-Cn", "text": "(C) Sales increased by five percent.", "vietnamese": "(C) Doanh số bán hàng tăng năm phần trăm."}
        ],
        "questions": [
            {
                "num": 28,
                "question": "When will you finish updating the sales data?",
                "vietnameseQuestion": "Khi nào bạn sẽ cập nhật xong số liệu bán hàng?",
                "options": [
                    {"key": "A", "text": "I'm waiting for information from one more store.", "vietnamese": "Tôi đang đợi thông tin từ một cửa hàng nữa."},
                    {"key": "B", "text": "In the top drawer.", "vietnamese": "Ở ngăn kéo trên cùng."},
                    {"key": "C", "text": "Sales increased by five percent.", "vietnamese": "Doanh số tăng 5%."}
                ],
                "correctAnswer": "A",
                "explanation": "Hỏi thời điểm hoàn thành. (A) giải thích điều kiện hoàn thành: còn phụ thuộc vào dữ liệu của một cửa hàng nữa gửi đến."
            }
        ],
        "vocabulary": [
            {"word": "update", "meaning": "cập nhật", "partOfSpeech": "v"},
            {"word": "drawer", "meaning": "ngăn kéo", "partOfSpeech": "n"}
        ]
    },
    {
        "id": "part2-29",
        "part": 2,
        "partTitle": "Part 2: Hỏi & Đáp",
        "questionRange": "Câu 29",
        "title": "Part 2 - Câu 29: Ai sẽ chủ trì phiên họp lập kế hoạch ngày mai?",
        "audioSrc": "/audio/cuts/test2/E26-T02-29.mp3",
        "transcript": [
            {"id": "p2-29-q", "speaker": "W-Am", "text": "Who's leading the planning session tomorrow?", "vietnamese": "Ai sẽ chủ trì phiên lập kế hoạch ngày mai vậy?"},
            {"id": "p2-29-a", "speaker": "M-Cn", "text": "(A) Leadership strategies.", "vietnamese": "(A) Các chiến lược lãnh đạo."},
            {"id": "p2-29-b", "speaker": "M-Cn", "text": "(B) I'll be out of the office.", "vietnamese": "(B) Ngày mai tôi sẽ không có mặt ở văn phòng đâu."},
            {"id": "p2-29-c", "speaker": "M-Cn", "text": "(C) Just a few hours.", "vietnamese": "(C) Chỉ vài tiếng thôi."}
        ],
        "questions": [
            {
                "num": 29,
                "question": "Who's leading the planning session tomorrow?",
                "vietnameseQuestion": "Ai sẽ chủ trì phiên lập kế hoạch ngày mai?",
                "options": [
                    {"key": "A", "text": "Leadership strategies.", "vietnamese": "Chiến lược lãnh đạo."},
                    {"key": "B", "text": "I'll be out of the office.", "vietnamese": "Ngày mai tôi vắng mặt ở văn phòng."},
                    {"key": "C", "text": "Just a few hours.", "vietnamese": "Chỉ vài giờ thôi."}
                ],
                "correctAnswer": "B",
                "explanation": "Hỏi ai phụ trách. (B) ngụ ý không phải là mình vì mai mình vắng mặt (I'll be out of the office)."
            }
        ],
        "vocabulary": [
            {"word": "lead", "meaning": "dẫn dắt, chủ trì", "partOfSpeech": "v"},
            {"word": "out of the office", "meaning": "vắng mặt ở văn phòng", "partOfSpeech": "phrase"}
        ]
    },
    {
        "id": "part2-30",
        "part": 2,
        "partTitle": "Part 2: Hỏi & Đáp",
        "questionRange": "Câu 30",
        "title": "Part 2 - Câu 30: Tối nay chúng ta gặp gỡ khách hàng phải không?",
        "audioSrc": "/audio/cuts/test2/E26-T02-30.mp3",
        "transcript": [
            {"id": "p2-30-q", "speaker": "M-Cn", "text": "Aren't we meeting with the clients this evening?", "vietnamese": "Tối nay chúng ta có hẹn gặp khách hàng đúng không?"},
            {"id": "p2-30-a", "speaker": "W-Br", "text": "(A) No, it's on the opposite side.", "vietnamese": "(A) Không, nó ở phía đối diện."},
            {"id": "p2-30-b", "speaker": "W-Br", "text": "(B) The television was fixed.", "vietnamese": "(B) Chiếc TV đã được sửa rồi."},
            {"id": "p2-30-c", "speaker": "W-Br", "text": "(C) My flight to Japan leaves at six.", "vietnamese": "(C) Chuyến bay đến Nhật của tôi cất cánh lúc sáu giờ rồi."}
        ],
        "questions": [
            {
                "num": 30,
                "question": "Aren't we meeting with the clients this evening?",
                "vietnameseQuestion": "Tối nay chúng ta gặp khách hàng mà, phải không?",
                "options": [
                    {"key": "A", "text": "No, it's on the opposite side.", "vietnamese": "Không, nó ở phía đối diện."},
                    {"key": "B", "text": "The television was fixed.", "vietnamese": "Chiếc ti vi đã được sửa."},
                    {"key": "C", "text": "My flight to Japan leaves at six.", "vietnamese": "Chuyến bay sang Nhật của tôi khởi hành lúc 6 giờ."}
                ],
                "correctAnswer": "C",
                "explanation": "Hỏi về kế hoạch gặp khách hàng tối nay. (C) ngụ ý không thể tham gia vì có chuyến bay đi Nhật lúc 6 giờ tối."
            }
        ],
        "vocabulary": [
            {"word": "flight", "meaning": "chuyến bay", "partOfSpeech": "n"},
            {"word": "opposite side", "meaning": "phía đối diện", "partOfSpeech": "n"}
        ]
    },
    {
        "id": "part2-31",
        "part": 2,
        "partTitle": "Part 2: Hỏi & Đáp",
        "questionRange": "Câu 31",
        "title": "Part 2 - Câu 31: Họ đã mời tôi đến buổi khai trương đúng không?",
        "audioSrc": "/audio/cuts/test2/E26-T02-31.mp3",
        "transcript": [
            {"id": "p2-31-q", "speaker": "W-Am", "text": "They invited me to the opening, didn't they?", "vietnamese": "Họ đã mời tôi tới buổi lễ khai trương, đúng không nhỉ?"},
            {"id": "p2-31-a", "speaker": "M-Cn", "text": "(A) I plan to submit my application.", "vietnamese": "(A) Tôi dự định nộp đơn đăng ký."},
            {"id": "p2-31-b", "speaker": "M-Cn", "text": "(B) A membership fee.", "vietnamese": "(B) Phí hội viên."},
            {"id": "p2-31-c", "speaker": "M-Cn", "text": "(C) Check your inbox.", "vietnamese": "(C) Hãy kiểm tra hộp thư đến của bạn xem."}
        ],
        "questions": [
            {
                "num": 31,
                "question": "They invited me to the opening, didn't they?",
                "vietnameseQuestion": "Họ đã mời tôi tham dự lễ khai trương đúng không?",
                "options": [
                    {"key": "A", "text": "I plan to submit my application.", "vietnamese": "Tôi định nộp đơn ứng tuyển."},
                    {"key": "B", "text": "A membership fee.", "vietnamese": "Phí thành viên."},
                    {"key": "C", "text": "Check your inbox.", "vietnamese": "Hãy kiểm tra hộp thư đến của bạn xem."}
                ],
                "correctAnswer": "C",
                "explanation": "Hỏi xem mình đã được mời chưa. (C) khuyên hãy kiểm tra hòm thư email (inbox) để biết chính xác."
            }
        ],
        "vocabulary": [
            {"word": "opening", "meaning": "buổi khai trương, lễ mở cửa", "partOfSpeech": "n"},
            {"word": "inbox", "meaning": "hộp thư đến", "partOfSpeech": "n"}
        ]
    }
]
