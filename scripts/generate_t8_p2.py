import json

# Definitions of Vietnamese metadata for Test 8 Part 2 (Q7-31)
meta_p2 = {
    7: {
        "title": "Người đi lấy báo",
        "q_vn": "Ai sẽ đi lấy báo vậy?",
        "opts_vn": {
            "A": "Một vài chiếc khăn ăn bằng giấy.",
            "B": "Camille bảo cô ấy sẽ đi lấy.",
            "C": "Anh ấy đã đi đổ rác rồi."
        },
        "exp": "Câu hỏi 'Who...' hỏi về người thực hiện hành động lấy báo, câu trả lời (B) 'Camille said she will' (Camille bảo cô ấy sẽ đi lấy) là câu trả lời trực tiếp và phù hợp nhất.",
        "vocab": [
            {"word": "pick up", "meaning": "đi lấy, nhặt lên", "partOfSpeech": "phr v"},
            {"word": "newspaper", "meaning": "tờ báo", "partOfSpeech": "n"},
            {"word": "napkin", "meaning": "khăn ăn", "partOfSpeech": "n"}
        ]
    },
    8: {
        "title": "Thời gian hẹn gặp bác sĩ",
        "q_vn": "Lịch hẹn gặp bác sĩ của bạn là khi nào?",
        "opts_vn": {
            "A": "Chiều nay.",
            "B": "Đó là một ý kiến hay.",
            "C": "Tại một phòng khám y tế."
        },
        "exp": "Câu hỏi 'When...' hỏi về mốc thời gian, câu trả lời (A) 'This afternoon' (Chiều nay) cung cấp thời gian chính xác.",
        "vocab": [
            {"word": "appointment", "meaning": "cuộc hẹn", "partOfSpeech": "n"},
            {"word": "medical clinic", "meaning": "phòng khám y tế", "partOfSpeech": "n"}
        ]
    },
    9: {
        "title": "Lý do không tổ chức dã ngoại công ty",
        "q_vn": "Sao chúng ta không tổ chức một buổi dã ngoại công ty nhỉ?",
        "opts_vn": {
            "A": "Món salad khoai tây và đậu cô ve.",
            "B": "Bởi vì nó tốn rất nhiều tiền.",
            "C": "Tôi đã có cái đó rồi."
        },
        "exp": "Câu đề xuất 'Why don't we...?' đưa ra gợi ý, câu trả lời (B) 'Because it costs a lot of money' (Bởi vì tốn nhiều tiền) giải thích lý do không thể tổ chức.",
        "vocab": [
            {"word": "company picnic", "meaning": "buổi dã ngoại công ty", "partOfSpeech": "n"},
            {"word": "cost", "meaning": "tốn kém, trị giá", "partOfSpeech": "v/n"}
        ]
    },
    10: {
        "title": "Vật dụng cần mang đến hội thảo",
        "q_vn": "Bạn nghĩ tôi nên mang gì đến buổi hội thảo?",
        "opts_vn": {
            "A": "Ở sảnh chờ.",
            "B": "Chỉ cần máy tính xách tay của bạn thôi.",
            "C": "Một ca làm việc lúc ba giờ."
        },
        "exp": "Câu hỏi 'What do you think I should take...?' hỏi về đồ dùng cần mang theo, câu trả lời (B) 'Just your laptop' (Chỉ cần laptop của bạn) là câu trả lời phù hợp nhất.",
        "vocab": [
            {"word": "conference", "meaning": "buổi hội nghị, hội thảo", "partOfSpeech": "n"},
            {"word": "shift", "meaning": "ca làm việc", "partOfSpeech": "n"}
        ]
    },
    11: {
        "title": "Địa điểm tổ chức lễ hội",
        "q_vn": "Lễ hội đang được tổ chức ở đâu vậy?",
        "opts_vn": {
            "A": "Một buổi hòa nhạc.",
            "B": "Có lẽ vào khoảng tháng 12.",
            "C": "Ở trung tâm thị trấn."
        },
        "exp": "Câu hỏi 'Where...' hỏi về địa điểm, đáp án (C) 'In the town centre' (Ở trung tâm thị trấn) trả lời đúng về nơi chốn.",
        "vocab": [
            {"word": "festival", "meaning": "lễ hội", "partOfSpeech": "n"},
            {"word": "town centre", "meaning": "trung tâm thị trấn", "partOfSpeech": "n"}
        ]
    },
    12: {
        "title": "Người tiếp nhận đề xuất",
        "q_vn": "Tôi phải nộp bản đề xuất của mình cho ai?",
        "opts_vn": {
            "A": "Một sự đặt phòng khách sạn.",
            "B": "Hội đồng phụ trách mua sắm/mua lại.",
            "C": "Vào buổi trưa hôm nay."
        },
        "exp": "Câu hỏi 'Who... to?' hỏi về người/bộ phận nhận tài liệu, đáp án (B) 'The acquisitions committee' (Hội đồng mua lại/sáp nhập) là đối tượng thích hợp.",
        "vocab": [
            {"word": "proposal", "meaning": "bản đề xuất", "partOfSpeech": "n"},
            {"word": "acquisition", "meaning": "sự mua lại, thâu tóm", "partOfSpeech": "n"},
            {"word": "committee", "meaning": "ủy ban, hội đồng", "partOfSpeech": "n"}
        ]
    },
    13: {
        "title": "Tra cứu địa điểm trên điện thoại",
        "q_vn": "Bạn có thể làm ơn tra cứu địa điểm đó trên điện thoại của bạn không?",
        "opts_vn": {
            "A": "Đây là số điện thoại của tôi.",
            "B": "Được chứ, xin đợi một lát.",
            "C": "Thời tiết hiện tại đang rất đẹp."
        },
        "exp": "Câu yêu cầu lịch sự 'Could you please...?', câu trả lời (B) 'Okay, one moment' (Được chứ, đợi một lát) đồng ý hỗ trợ ngay lập tức.",
        "vocab": [
            {"word": "look up", "meaning": "tra cứu", "partOfSpeech": "phr v"},
            {"word": "one moment", "meaning": "đợi một lát", "partOfSpeech": "phrase"}
        ]
    },
    14: {
        "title": "Thời gian tổ chức hội thảo kế toán",
        "q_vn": "Hội thảo kế toán diễn ra vào ngày mai phải không?",
        "opts_vn": {
            "A": "Tôi muốn mở một tài khoản.",
            "B": "Thực ra là vào thứ Sáu.",
            "C": "Quản lý thời gian."
        },
        "exp": "Câu hỏi đuôi dạng phủ định 'Isn't... tomorrow?', đáp án (B) 'Actually it's on Friday' (Thực ra là vào thứ Sáu) đính chính lại thời gian chính xác.",
        "vocab": [
            {"word": "accounting", "meaning": "kế toán", "partOfSpeech": "n"},
            {"word": "seminar", "meaning": "hội thảo", "partOfSpeech": "n"}
        ]
    },
    15: {
        "title": "Thời điểm sửa máy rửa bát",
        "q_vn": "Khi nào thì máy rửa bát sẽ được sửa?",
        "opts_vn": {
            "A": "Kỹ thuật viên đã đến sáng nay rồi.",
            "B": "Tôi cất dao trong một ngăn kéo riêng biệt.",
            "C": "Bánh mì ở trong tủ đựng đồ ăn."
        },
        "exp": "Câu hỏi 'When...' hỏi thời gian sửa chữa, đáp án (A) 'The technician came this morning' ngụ ý máy đã được kỹ thuật viên đến sửa vào sáng nay.",
        "vocab": [
            {"word": "dishwasher", "meaning": "máy rửa bát", "partOfSpeech": "n"},
            {"word": "technician", "meaning": "kỹ thuật viên", "partOfSpeech": "n"}
        ]
    },
    16: {
        "title": "Chuyển phòng nghỉ nhân viên xuống tầng hầm",
        "q_vn": "Chúng ta có nên chuyển phòng nghỉ nhân viên xuống tầng hầm không?",
        "opts_vn": {
            "A": "Anh ấy đã tham dự buổi nói chuyện.",
            "B": "Bàn đặt trước là dành cho hai người.",
            "C": "Không, dưới đó tối lắm."
        },
        "exp": "Câu hỏi lựa chọn đề xuất 'Should we...?', đáp án (C) 'No, it's too dark down there' từ chối và đưa ra lý do không gian quá tối.",
        "vocab": [
            {"word": "employee lounge", "meaning": "phòng nghỉ nhân viên", "partOfSpeech": "n"},
            {"word": "basement", "meaning": "tầng hầm", "partOfSpeech": "n"}
        ]
    },
    17: {
        "title": "Đổi tài khoản in màu",
        "q_vn": "Gần đây bạn đã đổi tài khoản in màu cho bạn rồi đúng không?",
        "opts_vn": {
            "A": "Đúng vậy, chỉ mới vài ngày trước thôi.",
            "B": "Họ đang sơn tường màu xanh lam.",
            "C": "Một mật khẩu khác."
        },
        "exp": "Câu hỏi đuôi '... didn't you?', đáp án (A) 'Right, just a few days ago' xác nhận thông tin là đúng và nêu rõ thời điểm.",
        "vocab": [
            {"word": "color print", "meaning": "in màu", "partOfSpeech": "n"},
            {"word": "recently", "meaning": "gần đây", "partOfSpeech": "adv"}
        ]
    },
    18: {
        "title": "Không gian không đủ chỗ cho mọi người",
        "q_vn": "Chúng ta sẽ không thể chứa hết tất cả mọi người trong không gian này đâu.",
        "opts_vn": {
            "A": "Một buổi hội thảo phát triển chuyên môn.",
            "B": "Có một phòng lớn hơn ở cuối hành lang đấy.",
            "C": "Đôi giày này hoàn toàn vừa vặn."
        },
        "exp": "Câu nhận định nêu ra vấn đề phòng chật, đáp án (B) 'There's a larger room down the hallway' đưa ra giải pháp thay thế hợp lý.",
        "vocab": [
            {"word": "fit", "meaning": "vừa vặn, chứa đủ", "partOfSpeech": "v"},
            {"word": "hallway", "meaning": "hành lang", "partOfSpeech": "n"}
        ]
    },
    19: {
        "title": "Đi xe buýt đến trung tâm thành phố",
        "q_vn": "Tôi đi xe buýt vào trung tâm thành phố có phải là cách dễ nhất không?",
        "opts_vn": {
            "A": "Một cửa hàng bách hóa mới.",
            "B": "Bạn đã mua nó khi nào thế?",
            "C": "Tôi thường hay đi như vậy."
        },
        "exp": "Câu hỏi Yes/No về phương tiện đi lại, đáp án (C) 'I usually do' (Tôi thường làm vậy) ngầm khẳng định đó là cách đi thuận tiện nhất.",
        "vocab": [
            {"word": "city centre", "meaning": "trung tâm thành phố", "partOfSpeech": "n"},
            {"word": "department store", "meaning": "cửa hàng bách hóa", "partOfSpeech": "n"}
        ]
    },
    20: {
        "title": "Khả năng làm mẫu thử nghiệm sớm",
        "q_vn": "Bạn có thể sớm tạo ra một bản mẫu thử nghiệm không?",
        "opts_vn": {
            "A": "Vâng, nhóm của tôi đang làm việc đó rồi.",
            "B": "Tôi nghĩ nó rất sáng tạo.",
            "C": "Anh ấy là một người đánh máy giỏi."
        },
        "exp": "Câu hỏi về khả năng thực hiện 'Are you able to...?', đáp án (A) 'Yes, my team is working on it' xác nhận đang tiến hành.",
        "vocab": [
            {"word": "prototype", "meaning": "nguyên mẫu, mẫu thử", "partOfSpeech": "n"},
            {"word": "innovative", "meaning": "đổi mới, sáng tạo", "partOfSpeech": "adj"}
        ]
    },
    21: {
        "title": "Nơi mua chiếc đèn",
        "q_vn": "Tôi có thể mua một chiếc đèn giống thế này ở đâu?",
        "opts_vn": {
            "A": "Ở trên bàn làm việc của tôi.",
            "B": "Chiếc này tôi được tặng đấy.",
            "C": "Sau cuộc họp với khách hàng của tôi."
        },
        "exp": "Câu hỏi 'Where can I buy...?', đáp án (B) 'I got this one as a gift' giải thích gián tiếp rằng mình không biết chỗ mua vì đây là quà tặng.",
        "vocab": [
            {"word": "lamp", "meaning": "chiếc đèn", "partOfSpeech": "n"},
            {"word": "gift", "meaning": "món quà", "partOfSpeech": "n"}
        ]
    },
    22: {
        "title": "Tần suất cài đặt bản cập nhật phần mềm",
        "q_vn": "Bạn có thường xuyên phải cài đặt các bản cập nhật không?",
        "opts_vn": {
            "A": "Bức thư này cần dán thêm tem.",
            "B": "Một mã sê-ri không chính xác.",
            "C": "Anh Ceeam là quản trị viên phần mềm lo việc đó."
        },
        "exp": "Câu hỏi 'How often...?', đáp án (C) 'Ceeam is the software administrator' chuyển trách nhiệm cho người quản trị viên phụ trách việc cài đặt.",
        "vocab": [
            {"word": "install updates", "meaning": "cài đặt cập nhật", "partOfSpeech": "phr v"},
            {"word": "software administrator", "meaning": "quản trị viên phần mềm", "partOfSpeech": "n"}
        ]
    },
    23: {
        "title": "Thảo luận về dự án sau bữa trưa",
        "q_vn": "Chúng ta hãy nói về dự án của bạn sau bữa trưa nhé.",
        "opts_vn": {
            "A": "Bởi vì micrô của cô ấy bị hỏng.",
            "B": "Hôm nay tôi lại phải về sớm rồi.",
            "C": "Tôi có hai đôi giày."
        },
        "exp": "Câu rủ 'Let's talk...', đáp án (B) 'I'm leaving work early today' từ chối lịch hẹn vì người nói phải về sớm hôm nay.",
        "vocab": [
            {"word": "leave early", "meaning": "về sớm", "partOfSpeech": "phr v"},
            {"word": "project", "meaning": "dự án", "partOfSpeech": "n"}
        ]
    },
    24: {
        "title": "Danh sách khách mời",
        "q_vn": "Có danh sách khách mời đã được mời không?",
        "opts_vn": {
            "A": "Phòng 305 đang được chuẩn bị cho bạn.",
            "B": "Bên dịch vụ ăn uống có đầy đủ các thông tin cần thiết đấy.",
            "C": "Một sảnh tiệc trên đường Main Street."
        },
        "exp": "Câu hỏi về danh sách khách mời, đáp án (B) 'The caterer has all the necessary information' chỉ ra nơi đang giữ thông tin.",
        "vocab": [
            {"word": "caterer", "meaning": "nhà cung cấp dịch vụ tiệc/ăn uống", "partOfSpeech": "n"},
            {"word": "necessary", "meaning": "cần thiết", "partOfSpeech": "adj"}
        ]
    },
    25: {
        "title": "So sánh chi phí gửi thư nhanh",
        "q_vn": "Gửi bằng thư chuyển phát nhanh hay giao hàng qua đêm thì rẻ hơn?",
        "opts_vn": {
            "A": "Thư chuyển phát nhanh ít tốn kém hơn.",
            "B": "Tôi muốn lấy cỡ lớn.",
            "C": "Nó nằm trong đợt giao hàng tiếp theo."
        },
        "exp": "Câu hỏi lựa chọn 'Would it be cheaper to ship by X or Y?', đáp án (A) 'Express mail is less expensive' trả lời trực diện rằng thư chuyển phát nhanh rẻ hơn.",
        "vocab": [
            {"word": "express mail", "meaning": "thư chuyển phát nhanh", "partOfSpeech": "n"},
            {"word": "overnight delivery", "meaning": "giao hàng qua đêm", "partOfSpeech": "n"},
            {"word": "less expensive", "meaning": "ít tốn kém hơn", "partOfSpeech": "adj"}
        ]
    },
    26: {
        "title": "Cách bật điều hòa trong văn phòng",
        "q_vn": "Làm thế nào để bật máy điều hòa nhiệt độ trong văn phòng này?",
        "opts_vn": {
            "A": "Nhiệt độ được điều khiển hoàn toàn tự động.",
            "B": "Rẽ trái sau bưu điện.",
            "C": "Không, tôi đã tắt hết đèn rồi."
        },
        "exp": "Câu hỏi 'How do I turn on...?', đáp án (A) 'The temperature is controlled automatically' giải thích rằng điều hòa chạy tự động, không cần bật thủ công.",
        "vocab": [
            {"word": "air conditioner", "meaning": "máy điều hòa không khí", "partOfSpeech": "n"},
            {"word": "controlled automatically", "meaning": "được điều khiển tự động", "partOfSpeech": "phrase"}
        ]
    },
    27: {
        "title": "Hướng dẫn sử dụng kính hiển vi mới",
        "q_vn": "Bạn đã đào tạo Hikaru cách sử dụng kính hiển vi mới chưa?",
        "opts_vn": {
            "A": "Tôi có xe hơi riêng của mình.",
            "B": "Thế là đủ rồi. Cảm ơn nhé.",
            "C": "Tôi đã để thất lạc cuốn sổ tay hướng dẫn mất rồi."
        },
        "exp": "Câu hỏi Yes/No về việc hướng dẫn sử dụng thiết bị, đáp án (C) 'I misplaced the instruction manual' ngụ ý chưa thể hướng dẫn vì làm mất tài liệu.",
        "vocab": [
            {"word": "microscope", "meaning": "kính hiển vi", "partOfSpeech": "n"},
            {"word": "misplace", "meaning": "để thất lạc, để nhầm chỗ", "partOfSpeech": "v"},
            {"word": "instruction manual", "meaning": "sách hướng dẫn sử dụng", "partOfSpeech": "n"}
        ]
    },
    28: {
        "title": "Cuộc họp bàn về vụ sáp nhập sắp tới",
        "q_vn": "Tuần này chúng ta sẽ họp để thảo luận về vụ sáp nhập sắp tới.",
        "opts_vn": {
            "A": "Tôi đã ghi nó vào lịch làm việc rồi.",
            "B": "Làm ơn nhập làn vào đường cao tốc.",
            "C": "Một công ty luật ở Glenview."
        },
        "exp": "Câu thông báo về lịch họp, đáp án (A) 'I have it on my calendar' phản hồi xác nhận đã nắm được lịch và lên lịch hẹn.",
        "vocab": [
            {"word": "merger", "meaning": "vụ sáp nhập doanh nghiệp", "partOfSpeech": "n"},
            {"word": "upcoming", "meaning": "sắp tới", "partOfSpeech": "adj"}
        ]
    },
    29: {
        "title": "Thời gian chờ xe taxi",
        "q_vn": "Chúng ta sẽ phải chờ taxi đến trong bao lâu nữa?",
        "opts_vn": {
            "A": "Khoảng 12 km.",
            "B": "Không, tôi không nghĩ vậy.",
            "C": "Bạn có muốn đi bộ thay vì chờ không?"
        },
        "exp": "Câu hỏi 'How long... wait for a taxi?', đáp án (C) 'Would you prefer to walk?' đưa ra gợi ý đi bộ vì có thể phải chờ lâu.",
        "vocab": [
            {"word": "arrive", "meaning": "đến nơi", "partOfSpeech": "v"},
            {"word": "prefer", "meaning": "thích hơn", "partOfSpeech": "v"}
        ]
    },
    30: {
        "title": "Thỏa thuận thuê thiết bị",
        "q_vn": "Thỏa thuận thuê thiết bị đã được thông qua chưa?",
        "opts_vn": {
            "A": "Một căn hộ một phòng ngủ.",
            "B": "Danh mục hàng hóa nằm trong tủ hồ sơ.",
            "C": "Vẫn chưa, nhưng chúng tôi hy vọng sẽ hoàn tất trong quý này."
        },
        "exp": "Câu hỏi 'Did the deal... go through?', đáp án (C) 'Not yet, but we hope to have it finalized this quarter' trả lời chính xác tiến độ của hợp đồng.",
        "vocab": [
            {"word": "lease", "meaning": "thuê, hợp đồng thuê", "partOfSpeech": "v/n"},
            {"word": "go through", "meaning": "được thông qua, thành công", "partOfSpeech": "phr v"},
            {"word": "finalize", "meaning": "hoàn tất, chốt", "partOfSpeech": "v"}
        ]
    },
    31: {
        "title": "Lái thử mẫu xe",
        "q_vn": "Bạn có muốn lái thử chiếc xe này không?",
        "opts_vn": {
            "A": "Bởi vì ở đó không có chỗ đỗ xe.",
            "B": "Tôi nghe nói một mẫu xe mới sẽ ra mắt vào tháng Ba.",
            "C": "Chỉ có hai cửa thôi."
        },
        "exp": "Câu mời 'Would you like to take this vehicle for a test drive?', đáp án (B) 'I heard a new model is coming out in March' từ chối khéo vì muốn đợi mẫu mới ra mắt.",
        "vocab": [
            {"word": "vehicle", "meaning": "phương tiện, xe cộ", "partOfSpeech": "n"},
            {"word": "test drive", "meaning": "lái thử xe", "partOfSpeech": "n/v"},
            {"word": "model", "meaning": "mẫu xe, kiểu dáng", "partOfSpeech": "n"}
        ]
    }
}

with open("test8_raw_items.json") as f:
    raw_items = json.load(f)

part2_items = []
for it in raw_items:
    if it["part"] == 2:
        q = it["num"]
        meta = meta_p2[q]
        stmts = it["stmts"]
        correct = it["correctAnswer"]
        
        transcript = [
            {
                "id": f"p2-{q}-q",
                "speaker": "Speaker 1",
                "text": it["questionText"],
                "vietnamese": meta["q_vn"]
            },
            {
                "id": f"p2-{q}-a",
                "speaker": "Speaker 2",
                "text": f"(A) {stmts.get('A', '')}",
                "vietnamese": f"(A) {meta['opts_vn']['A']}"
            },
            {
                "id": f"p2-{q}-b",
                "speaker": "Speaker 2",
                "text": f"(B) {stmts.get('B', '')}",
                "vietnamese": f"(B) {meta['opts_vn']['B']}"
            },
            {
                "id": f"p2-{q}-c",
                "speaker": "Speaker 2",
                "text": f"(C) {stmts.get('C', '')}",
                "vietnamese": f"(C) {meta['opts_vn']['C']}"
            }
        ]
        
        options = [
            {"key": "A", "text": stmts.get('A', ''), "vietnamese": meta['opts_vn']['A']},
            {"key": "B", "text": stmts.get('B', ''), "vietnamese": meta['opts_vn']['B']},
            {"key": "C", "text": stmts.get('C', ''), "vietnamese": meta['opts_vn']['C']}
        ]
        
        item = {
            "id": f"part2-{q}",
            "part": 2,
            "partTitle": "Part 2: Hỏi & Đáp",
            "questionRange": f"Câu {q}",
            "title": f"Part 2 - Câu {q}: {meta['title']}",
            "audioSrc": it["audioSrc"],
            "startTime": it["startTime"],
            "endTime": it["endTime"],
            "transcript": transcript,
            "questions": [
                {
                    "num": q,
                    "question": it["questionText"],
                    "vietnameseQuestion": meta["q_vn"],
                    "options": options,
                    "correctAnswer": correct,
                    "explanation": meta["exp"]
                }
            ],
            "vocabulary": meta["vocab"]
        }
        part2_items.append(item)

out_py = "scripts/build_2024_t8_p2.py"
with open(out_py, "w", encoding="utf-8") as f:
    f.write(f"# Part 2 data for ETS TOEIC 2024 Test 8\npart2_items = {json.dumps(part2_items, ensure_ascii=False, indent=2)}\n")

print(f"Generated {len(part2_items)} items for Test 8 Part 2 in {out_py}")
