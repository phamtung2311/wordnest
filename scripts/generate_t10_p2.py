import json

meta_p2_t10 = {
    7: {
        "title": "Thời điểm giao đồ nội thất đã đặt",
        "q_vn": "Khi nào bạn sẽ giao số đồ nội thất tôi đã đặt?",
        "opts_vn": {
            "A": "Muộn nhất là vào thứ Ba.",
            "B": "Tới một số khách hàng.",
            "C": "Tôi đã mua một chiếc xe rơ-moóc."
        },
        "exp": "Câu hỏi 'When will you deliver...?' hỏi về mốc thời gian, đáp án (A) 'By Tuesday at the latest' (Muộn nhất vào thứ Ba) cung cấp thời hạn giao hàng chính xác.",
        "vocab": [
            {"word": "deliver", "meaning": "giao hàng, vận chuyển", "partOfSpeech": "v"},
            {"word": "at the latest", "meaning": "muộn nhất là", "partOfSpeech": "phrase"},
            {"word": "furniture", "meaning": "đồ nội thất", "partOfSpeech": "n"}
        ]
    },
    8: {
        "title": "Lịch bay vào ngày mai hay chiều nay",
        "q_vn": "Chuyến bay của bạn là vào ngày mai hay chiều nay?",
        "opts_vn": {
            "A": "Đồ ăn nhẹ trên chuyến bay.",
            "B": "Là vào chiều nay.",
            "C": "Tại khu vực nhận hành lý."
        },
        "exp": "Câu hỏi lựa chọn 'tomorrow or this afternoon?', đáp án (B) 'It's this afternoon' chọn trực tiếp một trong hai thời điểm.",
        "vocab": [
            {"word": "flight", "meaning": "chuyến bay", "partOfSpeech": "n"},
            {"word": "baggage claim", "meaning": "khu vực nhận hành lý", "partOfSpeech": "n"}
        ]
    },
    9: {
        "title": "Tần suất tổ chức đào tạo của nhóm nghiên cứu",
        "q_vn": "Nhóm nghiên cứu có thường xuyên lên lịch các buổi đào tạo không?",
        "opts_vn": {
            "A": "Tôi nghĩ là trưởng nhóm.",
            "B": "Một số phần mềm mới.",
            "C": "Cách tuần một lần."
        },
        "exp": "Câu hỏi 'How often...?' hỏi về tần suất, đáp án (C) 'Every other week' (Cách một tuần một lần) trả lời đúng về chu kỳ.",
        "vocab": [
            {"word": "research team", "meaning": "nhóm nghiên cứu", "partOfSpeech": "n"},
            {"word": "every other week", "meaning": "cách một tuần một lần / hai tuần một lần", "partOfSpeech": "phrase"}
        ]
    },
    10: {
        "title": "Thanh toán hóa đơn bằng thẻ tín dụng",
        "q_vn": "Tôi có thể thanh toán hóa đơn bằng thẻ tín dụng được không?",
        "opts_vn": {
            "A": "Chắc chắn rồi, hoàn toàn được.",
            "B": "Tôi cũng không tin anh ấy.",
            "C": "Trạm xăng ở ngay bên tay phải của bạn."
        },
        "exp": "Lời đề nghị thanh toán bằng thẻ 'Can I pay...?', đáp án (A) 'Sure that's fine' đồng ý chấp nhận thanh toán qua thẻ tín dụng.",
        "vocab": [
            {"word": "credit card", "meaning": "thẻ tín dụng", "partOfSpeech": "n"},
            {"word": "pay bill", "meaning": "thanh toán hóa đơn", "partOfSpeech": "phrase"}
        ]
    },
    11: {
        "title": "Bản đề xuất dự án cần chỉnh sửa thêm",
        "q_vn": "Bản đề xuất dự án này vẫn cần phải làm thêm đấy.",
        "opts_vn": {
            "A": "Văn phòng bên kia.",
            "B": "Không, nó vẫn chưa hoạt động.",
            "C": "Tôi có thể giúp bạn làm việc đó."
        },
        "exp": "Câu nhận xét tài liệu chưa hoàn thiện, đáp án (C) 'I can help you with it' chủ động đưa ra lời đề nghị hỗ trợ chỉnh sửa.",
        "vocab": [
            {"word": "project proposal", "meaning": "bản đề xuất dự án", "partOfSpeech": "n"},
            {"word": "need work", "meaning": "cần chỉnh sửa/cải thiện thêm", "partOfSpeech": "phrase"}
        ]
    },
    12: {
        "title": "Nơi ở trong chuyến thăm thành phố",
        "q_vn": "Bạn dự định ở đâu trong chuyến đi thăm thành phố này?",
        "opts_vn": {
            "A": "Tôi cứ nghĩ tòa nhà có 12 tầng.",
            "B": "Ồ, chỉ để thuyết trình tại hội nghị thôi.",
            "C": "Ở nhà một người bạn."
        },
        "exp": "Câu hỏi 'Where do you plan to stay...?', đáp án (C) 'At a friend's house' (Ở nhà bạn) trả lời chính xác về địa điểm lưu trú.",
        "vocab": [
            {"word": "plan to stay", "meaning": "dự định ở lại", "partOfSpeech": "phrase"}
        ]
    },
    13: {
        "title": "Cách cải thiện tốc độ xử lý",
        "q_vn": "Làm thế nào bạn đã cải thiện được tốc độ xử lý vậy?",
        "opts_vn": {
            "A": "Đó là câu hỏi dành cho Sylvia đấy.",
            "B": "Tốc độ giới hạn là bao nhiêu?",
            "C": "Tôi không thích bơi lội."
        },
        "exp": "Câu hỏi 'How did you improve...?', đáp án (A) 'That's a question for Sylvia' chuyển câu hỏi cho người phụ trách trực tiếp về kỹ thuật là Sylvia.",
        "vocab": [
            {"word": "processing speed", "meaning": "tốc độ xử lý", "partOfSpeech": "n"},
            {"word": "improve", "meaning": "cải thiện, nâng cao", "partOfSpeech": "v"}
        ]
    },
    14: {
        "title": "Lớp học thể dục hay chỉ học khiêu vũ",
        "q_vn": "Bạn có tham gia các lớp tập thể dục nữa không hay chỉ học khiêu vũ thôi?",
        "opts_vn": {
            "A": "Người hướng dẫn dạy vào các buổi sáng.",
            "B": "Đôi giày này vừa vặn hoàn hảo.",
            "C": "Tôi chỉ học khiêu vũ thôi."
        },
        "exp": "Câu hỏi lựa chọn 'exercise classes... or just dance classes?', đáp án (C) 'I only take dance' xác nhận chỉ theo học khiêu vũ.",
        "vocab": [
            {"word": "exercise class", "meaning": "lớp tập thể dục", "partOfSpeech": "n"},
            {"word": "dance class", "meaning": "lớp khiêu vũ", "partOfSpeech": "n"}
        ]
    },
    15: {
        "title": "Thời điểm lắp máy pha cà phê mới ở tiền sảnh",
        "q_vn": "Khi nào thì chiếc máy pha cà phê mới sẽ được lắp đặt ở sảnh?",
        "opts_vn": {
            "A": "Không, nó không đắt lắm.",
            "B": "Cửa trước đang không khóa.",
            "C": "Trong vòng vài ngày tới."
        },
        "exp": "Câu hỏi 'When will... be installed?', đáp án (C) 'Within the next few days' (Trong vài ngày tới) cung cấp mốc thời gian hoàn thành.",
        "vocab": [
            {"word": "coffee machine", "meaning": "máy pha cà phê", "partOfSpeech": "n"},
            {"word": "lobby", "meaning": "tiền sảnh", "partOfSpeech": "n"},
            {"word": "within", "meaning": "trong vòng", "partOfSpeech": "prep"}
        ]
    },
    16: {
        "title": "Tuyển dụng giám đốc tiếp thị mới",
        "q_vn": "Giám đốc tiếp thị mới sẽ sớm được tuyển dụng phải không?",
        "opts_vn": {
            "A": "Bạn chưa kiểm tra email của mình à?",
            "B": "Cách đây khoảng 10 phút.",
            "C": "Không, thấp hơn một chút."
        },
        "exp": "Câu hỏi đuôi xác nhận thông tin tuyển dụng, đáp án (A) 'Didn't you check your email?' ngụ ý tin tức đã được thông báo qua thư điện tử.",
        "vocab": [
            {"word": "marketing director", "meaning": "giám đốc tiếp thị", "partOfSpeech": "n"},
            {"word": "hire", "meaning": "tuyển dụng, thuê", "partOfSpeech": "v"}
        ]
    },
    17: {
        "title": "Cần hỗ trợ thiết kế đồ họa thuyết trình",
        "q_vn": "Tôi thực sự cần người giúp phần đồ họa cho bài thuyết trình.",
        "opts_vn": {
            "A": "In-so có thể làm việc đó giúp bạn đấy.",
            "B": "Một buổi hội nghị ở Chicago.",
            "C": "Không, ở phòng nghiên cứu và phát triển."
        },
        "exp": "Câu bày tỏ nhu cầu cần giúp đỡ, đáp án (A) 'In-so can do those for you' giới thiệu một người đồng nghiệp có chuyên môn hỗ trợ.",
        "vocab": [
            {"word": "presentation graphics", "meaning": "hình ảnh/đồ họa bài thuyết trình", "partOfSpeech": "n"}
        ]
    },
    18: {
        "title": "Người liên hệ để đặt lịch cắt tóc",
        "q_vn": "Tôi có thể nói chuyện với ai để đặt lịch cắt tóc?",
        "opts_vn": {
            "A": "Chiều mai bạn có rảnh không?",
            "B": "Làm ơn đừng cắt quá ngắn ở hai bên.",
            "C": "Cảm ơn, phần mềm lên lịch rất hữu ích."
        },
        "exp": "Người hỏi muốn đặt lịch, người tiếp nhận (tiệm cắt tóc) phản hồi trực tiếp bằng cách hỏi thời gian rảnh của khách (A).",
        "vocab": [
            {"word": "schedule a haircut", "meaning": "lên lịch cắt tóc", "partOfSpeech": "phrase"},
            {"word": "available", "meaning": "rảnh rỗi, có sẵn", "partOfSpeech": "adj"}
        ]
    },
    19: {
        "title": "Chuẩn bị chương trình nghị sự cho cuộc họp bộ phận",
        "q_vn": "Bạn đã chuẩn bị xong chương trình nghị sự cho cuộc họp phòng ban chưa?",
        "opts_vn": {
            "A": "Chúng ta nên đóng các cửa sổ lại.",
            "B": "Cuộc họp đó đã bị hoãn lại rồi.",
            "C": "Tôi đã mua chúng ở cửa hàng bách hóa."
        },
        "exp": "Câu hỏi tiến độ chuẩn bị 'Did you already prepare...?', đáp án (B) 'It was postponed' giải thích cuộc họp đã bị hoãn nên chưa cần làm.",
        "vocab": [
            {"word": "agenda", "meaning": "chương trình nghị sự, nội dung họp", "partOfSpeech": "n"},
            {"word": "postpone", "meaning": "hoãn lại", "partOfSpeech": "v"}
        ]
    },
    20: {
        "title": "Uống cà phê có sữa hay không sữa",
        "q_vn": "Bạn muốn uống cà phê có sữa hay không có sữa?",
        "opts_vn": {
            "A": "Quán cà phê trên đại lộ Bayview.",
            "B": "Tôi thích uống trà hơn.",
            "C": "Chúng ta cần phải đặt thêm giấy."
        },
        "exp": "Câu hỏi lựa chọn đồ uống, đáp án (B) 'I prefer drinking tea' từ chối cả hai lựa chọn cà phê và nêu sở thích uống trà.",
        "vocab": [
            {"word": "prefer", "meaning": "thích hơn", "partOfSpeech": "v"}
        ]
    },
    21: {
        "title": "Lý do cài đặt phần mềm mới",
        "q_vn": "Tại sao bạn lại đang cài đặt phần mềm mới thế?",
        "opts_vn": {
            "A": "Bởi vì phần mềm hiện tại của chúng ta đã lỗi thời.",
            "B": "Chúng tôi đã thuê một gian hàng lớn.",
            "C": "Tôi sẽ mặc một chiếc áo khoác."
        },
        "exp": "Câu hỏi 'Why are you installing...?', đáp án (A) 'Because our current software is outdated' giải thích rõ nguyên nhân phần mềm cũ đã lỗi thời.",
        "vocab": [
            {"word": "outdated", "meaning": "lỗi thời, lạc hậu", "partOfSpeech": "adj"},
            {"word": "install", "meaning": "cài đặt", "partOfSpeech": "v"}
        ]
    },
    22: {
        "title": "Thời điểm có dự toán chi phí tháng tới",
        "q_vn": "Khi nào thì dự toán chi phí tháng tới sẽ hoàn thành?",
        "opts_vn": {
            "A": "Chiếc máy chiếu di động đó vừa được thay thế gần đây.",
            "B": "Một khoản thặng dư bất ngờ.",
            "C": "Tôi đã gửi email cách đây vài phút rồi đấy."
        },
        "exp": "Câu hỏi 'When will... be ready?', đáp án (C) 'I sent an email a few minutes ago' ngụ ý bản dự toán đã hoàn thành và gửi qua email rồi.",
        "vocab": [
            {"word": "cost projections", "meaning": "dự toán chi phí", "partOfSpeech": "n"},
            {"word": "surplus", "meaning": "thặng dư, số dư", "partOfSpeech": "n"}
        ]
    },
    23: {
        "title": "Nhờ đồng nghiệp hỗ trợ sắp xếp khu trưng bày sản phẩm",
        "q_vn": "Bạn có thể nhờ Tae-jun giúp sắp xếp khu trưng bày sản phẩm không?",
        "opts_vn": {
            "A": "Một vài loại tai nghe.",
            "B": "Không cần đâu, tôi có thể tự mình làm được.",
            "C": "Tôi không nhìn thấy dòng cuối cùng của biểu đồ."
        },
        "exp": "Lời đề nghị nhờ người giúp 'Would you ask...?', đáp án (B) 'No, I can do it myself' từ chối vì bản thân có thể tự hoàn thành việc đó.",
        "vocab": [
            {"word": "product display", "meaning": "khu trưng bày sản phẩm", "partOfSpeech": "n"},
            {"word": "do it myself", "meaning": "tự mình làm", "partOfSpeech": "phrase"}
        ]
    },
    24: {
        "title": "Phiên bản hợp đồng đang có",
        "q_vn": "Bạn đang giữ phiên bản nào của bản hợp đồng?",
        "opts_vn": {
            "A": "Anh ấy là một nhà thầu xây dựng tổng hợp.",
            "B": "Ở tầng hai.",
            "C": "Phiên bản cuối cùng đã chốt."
        },
        "exp": "Câu hỏi 'Which version...?', đáp án (C) 'The final one' (Bản cuối cùng) xác định cụ thể phiên bản đang giữ.",
        "vocab": [
            {"word": "version", "meaning": "phiên bản", "partOfSpeech": "n"},
            {"word": "contract", "meaning": "hợp đồng", "partOfSpeech": "n"}
        ]
    },
    25: {
        "title": "Lý do cô Perez chưa có mặt",
        "q_vn": "Tại sao cô Perez vẫn chưa có mặt ở đây?",
        "opts_vn": {
            "A": "Không, tôi không nghe thấy gì cả.",
            "B": "Trụ sở chính của công ty.",
            "C": "Bởi vì cô ấy đang có cuộc họp với người quản lý."
        },
        "exp": "Câu hỏi 'Why isn't Ms. Perez here yet?', đáp án (C) 'Because she's meeting with her manager' giải thích lý do cô ấy vắng mặt.",
        "vocab": [
            {"word": "headquarters", "meaning": "trụ sở chính", "partOfSpeech": "n"}
        ]
    },
    26: {
        "title": "Tin đồn sáp nhập công ty",
        "q_vn": "Tôi nghe nói công ty chúng ta có thể sẽ sáp nhập với một công ty khác đấy.",
        "opts_vn": {
            "A": "Ồ, tôi chưa từng biết điều đó.",
            "B": "Một sản phẩm bán rất chạy.",
            "C": "Akira bảo tôi đặt nó ở đó."
        },
        "exp": "Câu chia sẻ tin tức mới 'I heard that...', đáp án (A) 'Oh, I didn't know that' thể hiện sự bất ngờ trước thông tin lần đầu được nghe.",
        "vocab": [
            {"word": "merge with", "meaning": "sáp nhập với", "partOfSpeech": "phr v"}
        ]
    },
    27: {
        "title": "Mời bệnh nhân tiếp theo vào phòng khám",
        "q_vn": "Bạn có thể mời bệnh nhân tiếp theo vào phòng được không?",
        "opts_vn": {
            "A": "Nó ở trong tủ đựng đồ.",
            "B": "Phòng chờ hiện đang trống không có ai cả.",
            "C": "Cả hai người họ đều đang học ngành điều dưỡng."
        },
        "exp": "Lời yêu cầu mời bệnh nhân, đáp án (B) 'The waiting room is empty' thông báo rằng phòng chờ đã hết bệnh nhân.",
        "vocab": [
            {"word": "patient", "meaning": "bệnh nhân", "partOfSpeech": "n"},
            {"word": "waiting room", "meaning": "phòng chờ", "partOfSpeech": "n"},
            {"word": "empty", "meaning": "trống rỗng, không có người", "partOfSpeech": "adj"}
        ]
    },
    28: {
        "title": "Quả việt quất đã đến vụ thu hoạch chưa",
        "q_vn": "Những quả việt quất đã sẵn sàng để thu hoạch chưa?",
        "opts_vn": {
            "A": "Tôi sẽ thử vị dâu tây này.",
            "B": "Chúng tôi có tầm nhìn hướng ra bãi biển.",
            "C": "Hiện tại vẫn chưa đến mùa hè mà."
        },
        "exp": "Câu hỏi tiến độ thu hoạch việt quất, đáp án (C) 'It's not summertime yet' ngụ ý chưa thể thu hoạch vì chưa tới mùa hè.",
        "vocab": [
            {"word": "blueberry", "meaning": "quả việt quất", "partOfSpeech": "n"},
            {"word": "harvest", "meaning": "thu hoạch", "partOfSpeech": "v/n"}
        ]
    },
    29: {
        "title": "Thời gian di chuyển đến nhà hát",
        "q_vn": "Chúng ta sẽ mất bao lâu để đi đến nhà hát?",
        "opts_vn": {
            "A": "Vé cho buổi biểu diễn đã bán hết sạch rồi.",
            "B": "Lúc bảy giờ, tôi nghĩ vậy.",
            "C": "Thực ra tôi không có sở thích đặc biệt nào."
        },
        "exp": "Câu hỏi thời gian đi xem kịch, đáp án (A) 'Tickets for the performance are sold out' chỉ ra rằng việc đi không còn cần thiết vì vé đã hết.",
        "vocab": [
            {"word": "performance", "meaning": "buổi biểu diễn", "partOfSpeech": "n"},
            {"word": "sold out", "meaning": "bán hết vé", "partOfSpeech": "adj"}
        ]
    },
    30: {
        "title": "Gửi báo cáo hay thuyết trình trực tiếp cho khách hàng",
        "q_vn": "Bạn sẽ gửi báo cáo hay thuyết trình trực tiếp cho khách hàng của chúng ta?",
        "opts_vn": {
            "A": "Chúng tôi rất thích bài nói chuyện của họ.",
            "B": "Có lẽ tôi sẽ làm cả hai việc đó.",
            "C": "Đã có 20 người tham dự."
        },
        "exp": "Câu hỏi lựa chọn 'send a report or give a presentation?', đáp án (B) 'I'll probably do both' lựa chọn thực hiện cả hai hình thức.",
        "vocab": [
            {"word": "presentation", "meaning": "bài thuyết trình", "partOfSpeech": "n"},
            {"word": "both", "meaning": "cả hai", "partOfSpeech": "pron"}
        ]
    },
    31: {
        "title": "Thời điểm treo áp phích cho buổi hội thảo",
        "q_vn": "Khi nào chúng ta nên treo các áp phích quảng bá cho hội thảo?",
        "opts_vn": {
            "A": "Chắc chắn rồi. Xe của tôi sẽ sớm được sửa xong.",
            "B": "Ngay bên cạnh lối vào chính.",
            "C": "Bản thiết kế vẫn cần phải được hoàn thiện chốt lại đã."
        },
        "exp": "Câu hỏi 'When should we hang up...?', đáp án (C) 'The design still needs to be finalized' giải thích chưa thể treo vì thiết kế chưa hoàn thiện.",
        "vocab": [
            {"word": "hang up posters", "meaning": "treo áp phích", "partOfSpeech": "phrase"},
            {"word": "finalize", "meaning": "hoàn thiện, chốt lại", "partOfSpeech": "v"}
        ]
    }
}

with open("test10_raw_items.json") as f:
    raw_items = json.load(f)

part2_items = []
for it in raw_items:
    if it["part"] == 2:
        q = it["num"]
        meta = meta_p2_t10[q]
        stmts = it["stmts"]
        correct = it["correctAnswer"]
        
        # In Q29, fix speech typo "Take it" to "Tickets"
        q_en = it["questionText"]
        stmt_a = stmts.get('A', '')
        if q == 29 and stmt_a.startswith("Take it"):
            stmt_a = "Tickets for the performance are sold out."

        transcript = [
            {
                "id": f"p2-{q}-q",
                "speaker": "Speaker 1",
                "text": q_en,
                "vietnamese": meta["q_vn"]
            },
            {
                "id": f"p2-{q}-a",
                "speaker": "Speaker 2",
                "text": f"(A) {stmt_a}",
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
            {"key": "A", "text": stmt_a, "vietnamese": meta['opts_vn']['A']},
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
                    "question": q_en,
                    "vietnameseQuestion": meta["q_vn"],
                    "options": options,
                    "correctAnswer": correct,
                    "explanation": meta["exp"]
                }
            ],
            "vocabulary": meta["vocab"]
        }
        part2_items.append(item)

out_py = "scripts/build_2024_t10_p2.py"
with open(out_py, "w", encoding="utf-8") as f:
    f.write(f"# Part 2 data for ETS TOEIC 2024 Test 10\npart2_items = {json.dumps(part2_items, ensure_ascii=False, indent=2)}\n")

print(f"Generated {len(part2_items)} items for Test 10 Part 2 in {out_py}")
