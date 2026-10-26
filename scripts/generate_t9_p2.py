import json

meta_p2_t9 = {
    7: {
        "title": "Người làm thay ca cho cô Hamada",
        "q_vn": "Ai đang làm thay ca cho cô Hamada vậy?",
        "opts_vn": {
            "A": "Vâng, trời có thể mưa sau đó.",
            "B": "Không, tôi có đủ rồi.",
            "C": "Trợ lý của cô ấy."
        },
        "exp": "Câu hỏi 'Who...' hỏi về người, đáp án (C) 'Her assistant' (Trợ lý của cô ấy) trả lời trực tiếp về đối tượng làm thay.",
        "vocab": [
            {"word": "cover for", "meaning": "làm thay, gánh vác thay ai", "partOfSpeech": "phr v"},
            {"word": "assistant", "meaning": "người trợ lý", "partOfSpeech": "n"}
        ]
    },
    8: {
        "title": "Địa điểm tổ chức hội thảo thời trang",
        "q_vn": "Buổi hội thảo thời trang diễn ra ở đâu?",
        "opts_vn": {
            "A": "Ở phòng 235.",
            "B": "Không, chiếc màu đen cơ.",
            "C": "Chỉ là một vài chiếc áo sơ mi nữ thôi."
        },
        "exp": "Câu hỏi 'Where...' hỏi địa điểm, đáp án (A) 'It is in room 235' (Ở phòng 235) cung cấp chính xác địa điểm diễn ra hội thảo.",
        "vocab": [
            {"word": "fashion seminar", "meaning": "hội thảo thời trang", "partOfSpeech": "n"},
            {"word": "blouse", "meaning": "áo sơ mi nữ", "partOfSpeech": "n"}
        ]
    },
    9: {
        "title": "Lý do phải đeo kính bảo hộ",
        "q_vn": "Tại sao chúng ta phải đeo kính bảo hộ?",
        "opts_vn": {
            "A": "Không, cánh cửa bên trái của bạn cơ.",
            "B": "Bởi vì các quy định an toàn.",
            "C": "Một chiếc mũ và một chiếc khăn quàng cổ."
        },
        "exp": "Câu hỏi 'Why do we have to...?' hỏi nguyên nhân, đáp án (B) 'Because of safety regulations' (Vì các quy định an toàn) giải thích lý do bắt buộc.",
        "vocab": [
            {"word": "safety goggles", "meaning": "kính bảo hộ lao động", "partOfSpeech": "n"},
            {"word": "regulation", "meaning": "quy định, luật lệ", "partOfSpeech": "n"}
        ]
    },
    10: {
        "title": "Chuẩn bị cho tiệc nghỉ hưu của ông Sugiyama",
        "q_vn": "Bạn đã làm gì cho bữa tiệc nghỉ hưu của ông Sugiyama?",
        "opts_vn": {
            "A": "Tôi đã giúp trang trí căn phòng.",
            "B": "Ông ấy không cảm thấy mệt mỏi.",
            "C": "Hãy thử tìm trong tủ tài liệu xem."
        },
        "exp": "Câu hỏi 'What did you do...?', đáp án (A) 'I helped decorate the room' (Tôi đã giúp trang trí phòng) trả lời trực tiếp hành động đã làm.",
        "vocab": [
            {"word": "retirement party", "meaning": "tiệc nghỉ hưu", "partOfSpeech": "n"},
            {"word": "decorate", "meaning": "trang trí", "partOfSpeech": "v"}
        ]
    },
    11: {
        "title": "Xin thêm chai nước uống",
        "q_vn": "Tôi có thể lấy thêm một chai nước nữa không?",
        "opts_vn": {
            "A": "Nếu vẫn còn chai nào.",
            "B": "Một chiếc tủ lạnh cũ.",
            "C": "Không, đồng hồ chạy nhanh."
        },
        "exp": "Lời đề nghị xin thêm nước 'Can I take...?', đáp án (A) 'If there are any left' (Nếu còn chai nào thì bạn cứ lấy) đồng ý có điều kiện.",
        "vocab": [
            {"word": "bottle of water", "meaning": "chai nước", "partOfSpeech": "n"},
            {"word": "left", "meaning": "còn lại", "partOfSpeech": "adj"}
        ]
    },
    12: {
        "title": "Chuyến tàu cuối cùng trong ngày",
        "q_vn": "Chẳng phải đây là chuyến tàu cuối cùng rồi sao?",
        "opts_vn": {
            "A": "Một vé khứ hồi đi New York.",
            "B": "Văn phòng ngay bên cạnh.",
            "C": "Không, vẫn còn một chuyến nữa đấy."
        },
        "exp": "Câu hỏi đuôi 'Isn't this the last train...?', đáp án (C) 'No, there is one more' (Không, vẫn còn một chuyến nữa) đính chính lại thông tin.",
        "vocab": [
            {"word": "last train", "meaning": "chuyến tàu cuối cùng", "partOfSpeech": "n"},
            {"word": "round trip", "meaning": "khứ hồi", "partOfSpeech": "n"}
        ]
    },
    13: {
        "title": "Điểm nhấn chuyến thăm thành phố",
        "q_vn": "Điểm nhấn nổi bật nhất trong chuyến thăm thành phố cuối tuần qua của bạn là gì?",
        "opts_vn": {
            "A": "Chắc chắn là bảo tàng nghệ thuật rồi.",
            "B": "Xin lỗi, tôi đã có kế hoạch khác rồi.",
            "C": "Vâng, cuốn sách hướng dẫn rất hữu ích."
        },
        "exp": "Câu hỏi 'What was the highlight...?', đáp án (A) 'Definitely the art museum' (Chắc chắn là bảo tàng nghệ thuật) đưa ra trải nghiệm yêu thích nhất.",
        "vocab": [
            {"word": "highlight", "meaning": "điểm nhấn, phần nổi bật nhất", "partOfSpeech": "n"},
            {"word": "art museum", "meaning": "bảo tàng nghệ thuật", "partOfSpeech": "n"}
        ]
    },
    14: {
        "title": "Thời điểm bài báo về vụ sáp nhập xuất bản",
        "q_vn": "Bài báo về vụ sáp nhập đó được xuất bản khi nào vậy?",
        "opts_vn": {
            "A": "Vài tuần trước.",
            "B": "Một phóng viên từ tờ Springfield News.",
            "C": "Không, tôi nghĩ đó là địa chỉ chính xác."
        },
        "exp": "Câu hỏi 'When was... published?', đáp án (A) 'A few weeks ago' (Vài tuần trước) cung cấp mốc thời gian xuất bản bài viết.",
        "vocab": [
            {"word": "merger", "meaning": "vụ sáp nhập", "partOfSpeech": "n"},
            {"word": "publish", "meaning": "xuất bản, đăng báo", "partOfSpeech": "v"}
        ]
    },
    15: {
        "title": "Lắp đặt hệ thống an ninh tại văn phòng",
        "q_vn": "Chúng ta cần lắp đặt một hệ thống an ninh tại văn phòng.",
        "opts_vn": {
            "A": "Đó là một thẻ nhân viên mới.",
            "B": "Vâng, tôi nghĩ đó là một ý tưởng hay.",
            "C": "Tôi đã mua một vài bóng đèn."
        },
        "exp": "Câu nhận định đề xuất giải pháp, đáp án (B) 'Yes, I think that's a good idea' đồng tình với việc lắp đặt hệ thống an ninh.",
        "vocab": [
            {"word": "security system", "meaning": "hệ thống an ninh", "partOfSpeech": "n"},
            {"word": "install", "meaning": "lắp đặt", "partOfSpeech": "v"}
        ]
    },
    16: {
        "title": "Nơi tổ chức các hội chợ việc làm",
        "q_vn": "Các hội chợ việc làm đang được tổ chức ở đâu vậy?",
        "opts_vn": {
            "A": "Tôi sẽ lấy bảy cái.",
            "B": "Có một danh sách trong tập hồ sơ đấy.",
            "C": "Được rồi, tôi có thể lái xe."
        },
        "exp": "Câu hỏi 'Where... being held?', đáp án (B) 'There's a list in the folder' chỉ dẫn người hỏi xem danh sách địa điểm trong thư mục tài liệu.",
        "vocab": [
            {"word": "job fair", "meaning": "hội chợ việc làm", "partOfSpeech": "n"},
            {"word": "folder", "meaning": "tập kẹp hồ sơ", "partOfSpeech": "n"}
        ]
    },
    17: {
        "title": "Thời gian được sử dụng máy in màu mới",
        "q_vn": "Khi nào thì chúng ta có thể sử dụng chiếc máy in màu mới?",
        "opts_vn": {
            "A": "Chiều nay.",
            "B": "Được rồi, thật tốt khi nghe điều đó.",
            "C": "Chắc chắn rồi, tôi có thể chụp một bức ảnh."
        },
        "exp": "Câu hỏi 'When can we use...?', đáp án (A) 'This afternoon' (Chiều nay) cung cấp mốc thời gian có thể bắt đầu dùng máy in.",
        "vocab": [
            {"word": "color printer", "meaning": "máy in màu", "partOfSpeech": "n"}
        ]
    },
    18: {
        "title": "Đặt thêm đĩa giấy dùng một lần",
        "q_vn": "Bạn có thể đặt mua thêm một số đĩa giấy được không?",
        "opts_vn": {
            "A": "Cảm ơn vì lời mời.",
            "B": "Anh ấy đã nhận được việc làm tại nhà hàng.",
            "C": "Chúng ta vẫn còn đủ dùng trong ba tháng nữa."
        },
        "exp": "Câu đề nghị đặt thêm đĩa 'Could you order...?', đáp án (C) 'We have enough for three months' từ chối khéo vì lượng tồn kho vẫn còn đủ dùng.",
        "vocab": [
            {"word": "paper plate", "meaning": "đĩa giấy dùng một lần", "partOfSpeech": "n"},
            {"word": "enough", "meaning": "đầy đủ", "partOfSpeech": "adj"}
        ]
    },
    19: {
        "title": "Đi lấy phần đồ ăn đặt trước",
        "q_vn": "Tôi có nên đi lấy đồ ăn đặt từ quán Santos không?",
        "opts_vn": {
            "A": "Hãy gặp nhau vào tuần tới nhé.",
            "B": "Có chứ, nếu bạn có thời gian rảnh.",
            "C": "Tôi không nấu ăn bằng dầu thực vật."
        },
        "exp": "Câu hỏi 'Should I pick up...?', đáp án (B) 'Yes, if you have the time' đồng ý và đưa ra điều kiện hợp lý.",
        "vocab": [
            {"word": "food order", "meaning": "đơn đặt món ăn", "partOfSpeech": "n"},
            {"word": "have time", "meaning": "có thời gian rảnh", "partOfSpeech": "phrase"}
        ]
    },
    20: {
        "title": "Phát tờ rơi quanh văn phòng",
        "q_vn": "Sao bạn không phát tờ rơi này xung quanh văn phòng nhỉ?",
        "opts_vn": {
            "A": "Chắc chắn rồi, đó là một ý tưởng tuyệt vời.",
            "B": "Chuyến bay của chúng ta đang bị hủy.",
            "C": "Tôi sẽ đi thang máy."
        },
        "exp": "Lời gợi ý 'Why don't you distribute...?', đáp án (A) 'Sure, that's a great idea' hào hứng đồng ý thực hiện.",
        "vocab": [
            {"word": "distribute", "meaning": "phân phát, phân phối", "partOfSpeech": "v"},
            {"word": "flyer", "meaning": "tờ rơi quảng cáo", "partOfSpeech": "n"}
        ]
    },
    21: {
        "title": "Tần suất đi xem hòa nhạc",
        "q_vn": "Bạn có thường xuyên đi xem các buổi hòa nhạc không?",
        "opts_vn": {
            "A": "Tôi đạp xe đi làm mỗi ngày.",
            "B": "Không, anh ấy không phải nhạc sĩ chuyên nghiệp.",
            "C": "Tôi không có nhiều thời gian rảnh rỗi."
        },
        "exp": "Câu hỏi 'How often...?', đáp án (C) 'I don't have a lot of free time' giải thích gián tiếp rằng hiếm khi đi vì không có thời gian rảnh.",
        "vocab": [
            {"word": "concert", "meaning": "buổi hòa nhạc", "partOfSpeech": "n"},
            {"word": "free time", "meaning": "thời gian rảnh rỗi", "partOfSpeech": "n"}
        ]
    },
    22: {
        "title": "Hỗ trợ sửa máy in văn phòng",
        "q_vn": "Bạn có muốn tôi sửa chiếc máy in trong văn phòng của bạn không?",
        "opts_vn": {
            "A": "Một tài liệu chính thức.",
            "B": "Vâng, điều đó sẽ rất hữu ích đấy.",
            "C": "Tôi đã in trên cả hai mặt giấy."
        },
        "exp": "Lời đề nghị giúp đỡ 'Do you want me to fix...?', đáp án (B) 'Yes, that would be helpful' đón nhận sự trợ giúp một cách cảm kích.",
        "vocab": [
            {"word": "fix", "meaning": "sửa chữa", "partOfSpeech": "v"},
            {"word": "helpful", "meaning": "hữu ích, có ích", "partOfSpeech": "adj"}
        ]
    },
    23: {
        "title": "Vị trí xây kho hàng của công ty",
        "q_vn": "Kho hàng của công ty sẽ được xây dựng trong thành phố hay ở xa hơn?",
        "opts_vn": {
            "A": "Nó sẽ ở trong thành phố.",
            "B": "Vâng, anh ấy đang mặc một chiếc áo len đỏ.",
            "C": "Hai ki-lô-mét vuông."
        },
        "exp": "Câu hỏi lựa chọn 'Will... be built in the city or farther out?', đáp án (A) 'It'll be in the city' chọn trực tiếp một trong hai phương án.",
        "vocab": [
            {"word": "warehouse", "meaning": "kho hàng", "partOfSpeech": "n"},
            {"word": "farther out", "meaning": "xa hơn ở ngoại ô", "partOfSpeech": "phrase"}
        ]
    },
    24: {
        "title": "Xe taxi cuối cùng cũng đã đến",
        "q_vn": "Chiếc xe taxi cuối cùng cũng đã tới rồi.",
        "opts_vn": {
            "A": "Ồ, có phải nó bị kẹt xe không?",
            "B": "Cảm ơn, nhưng tôi đã có một ít rồi.",
            "C": "Đó là lời đề nghị cuối cùng của họ."
        },
        "exp": "Câu thông báo taxi đến muộn, đáp án (A) 'Oh, did it get stuck in traffic?' phỏng đoán nguyên nhân dẫn đến việc taxi đến chậm.",
        "vocab": [
            {"word": "get stuck in traffic", "meaning": "bị kẹt xe, tắc đường", "partOfSpeech": "phrase"},
            {"word": "finally", "meaning": "cuối cùng", "partOfSpeech": "adv"}
        ]
    },
    25: {
        "title": "Phương pháp đào tạo các thành viên mới",
        "q_vn": "Làm thế nào chúng ta có thể đào tạo tất cả các thành viên mới của nhóm?",
        "opts_vn": {
            "A": "Vâng, tôi đã làm việc với những cái đó.",
            "B": "Nó không dài như chúng ta nghĩ.",
            "C": "Mọi người thường thích xem các video hướng dẫn."
        },
        "exp": "Câu hỏi 'How can we train...?', đáp án (C) 'People like watching videos' gợi ý sử dụng video làm phương tiện đào tạo trực quan.",
        "vocab": [
            {"word": "train", "meaning": "đào tạo, huấn luyện", "partOfSpeech": "v"},
            {"word": "team member", "meaning": "thành viên trong nhóm", "partOfSpeech": "n"}
        ]
    },
    26: {
        "title": "Thời gian bắt đầu bữa tiệc",
        "q_vn": "Bữa tiệc dự kiến bắt đầu lúc 6 giờ tối phải không?",
        "opts_vn": {
            "A": "Tôi đã thêm tên cô ấy vào danh sách khách mời.",
            "B": "Không, trong giấy mời ghi là 7 giờ cơ.",
            "C": "Bởi vì đồ trang trí tiệc khá đắt đỏ."
        },
        "exp": "Câu hỏi xác nhận giờ giấc '... start at 6 p.m., right?', đáp án (B) 'No, the invitation said seven' đính chính lại giờ theo thiệp mời.",
        "vocab": [
            {"word": "be supposed to", "meaning": "được cho là, dự kiến là", "partOfSpeech": "phrase"},
            {"word": "invitation", "meaning": "thiệp mời, giấy mời", "partOfSpeech": "n"}
        ]
    },
    27: {
        "title": "Phương án vận chuyển vật tư của quản lý",
        "q_vn": "Người quản lý muốn chúng ta tự đi lấy đồ dùng hay yêu cầu giao hàng tận nơi?",
        "opts_vn": {
            "A": "Cô ấy sẽ đến đây sớm thôi.",
            "B": "Bạn đã làm rơi cây bút kìa.",
            "C": "Bạn nói đúng về điều đó đấy."
        },
        "exp": "Câu hỏi lựa chọn về ý định của quản lý, đáp án (A) 'She'll be here soon' trì hoãn quyết định để hỏi trực tiếp quản lý khi cô ấy đến.",
        "vocab": [
            {"word": "supplies", "meaning": "vật tư, đồ dùng", "partOfSpeech": "n"},
            {"word": "have delivered", "meaning": "yêu cầu được giao hàng", "partOfSpeech": "phrase"}
        ]
    },
    28: {
        "title": "Sự có mặt của Jacob ở văn phòng",
        "q_vn": "Hôm nay Jacob đã đến văn phòng chưa vậy?",
        "opts_vn": {
            "A": "Cặp tài liệu của anh ấy đang ở trên bàn kìa.",
            "B": "Vâng, đó là một văn phòng đẹp.",
            "C": "Tôi có thể ghé vào chỉ một phút thôi."
        },
        "exp": "Câu hỏi 'Has Jacob come into the office...?', đáp án (A) 'His briefcase is on his desk' ngầm xác nhận Jacob đã đến vì có cặp đi làm trên bàn.",
        "vocab": [
            {"word": "briefcase", "meaning": "cặp tài liệu, cặp công tác", "partOfSpeech": "n"}
        ]
    },
    29: {
        "title": "Tham gia buổi họp giao ban hôm nay",
        "q_vn": "Bạn có tham gia cùng nhóm trong buổi họp giao ban hôm nay không?",
        "opts_vn": {
            "A": "Khách hàng quan trọng nhất của tôi đang ở trong thành phố.",
            "B": "Quán pizza Victoria.",
            "C": "Tôi rất thích bộ phim đó."
        },
        "exp": "Câu hỏi Yes/No 'Are you joining...?', đáp án (A) 'My top client is in town' từ chối khéo vì bận tiếp khách hàng quan trọng.",
        "vocab": [
            {"word": "briefing", "meaning": "buổi họp ngắn, buổi phổ biến thông tin", "partOfSpeech": "n"},
            {"word": "in town", "meaning": "đang có mặt ở thành phố", "partOfSpeech": "phrase"}
        ]
    },
    30: {
        "title": "Chương trình ăn uống lành mạnh tại văn phòng",
        "q_vn": "Tôi đang tổ chức một chương trình ăn uống lành mạnh tại văn phòng.",
        "opts_vn": {
            "A": "Cô ấy đã học chương trình sân khấu kịch đó.",
            "B": "Ngay bên cạnh chiếc máy chiếu mới.",
            "C": "Bạn có cần giúp đỡ việc gì không?"
        },
        "exp": "Câu chia sẻ về kế hoạch công việc, đáp án (C) 'Do you need any help with it?' đưa ra lời đề nghị giúp đỡ nhiệt tình.",
        "vocab": [
            {"word": "healthy eating", "meaning": "ăn uống lành mạnh", "partOfSpeech": "n"},
            {"word": "organize", "meaning": "tổ chức", "partOfSpeech": "v"}
        ]
    },
    31: {
        "title": "Chi phí sửa chữa xe hơi",
        "q_vn": "Chiếc xe của bạn sửa chữa có tốn kém không?",
        "opts_vn": {
            "A": "Mẫu xe lớn nhất hiện có.",
            "B": "Chỉ thêm một vài lần nữa thôi.",
            "C": "Nó vẫn chạy hoàn hảo kể từ khi tôi mua nó tới giờ."
        },
        "exp": "Câu hỏi 'Is your car expensive to repair?', đáp án (C) 'It's been running perfectly since I bought it' ngụ ý chưa từng phải sửa vì xe chạy rất tốt.",
        "vocab": [
            {"word": "expensive to repair", "meaning": "đắt đỏ khi sửa chữa", "partOfSpeech": "phrase"},
            {"word": "run perfectly", "meaning": "vận hành hoàn hảo, êm ái", "partOfSpeech": "phrase"}
        ]
    }
}

with open("test9_raw_items.json") as f:
    raw_items = json.load(f)

part2_items = []
for it in raw_items:
    if it["part"] == 2:
        q = it["num"]
        meta = meta_p2_t9[q]
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

out_py = "scripts/build_2024_t9_p2.py"
with open(out_py, "w", encoding="utf-8") as f:
    f.write(f"# Part 2 data for ETS TOEIC 2024 Test 9\npart2_items = {json.dumps(part2_items, ensure_ascii=False, indent=2)}\n")

print(f"Generated {len(part2_items)} items for Test 9 Part 2 in {out_py}")
