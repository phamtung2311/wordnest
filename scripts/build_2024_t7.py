# Python builder for ETS TOEIC 2024 Test 7 Intensive Listening data
import json, os, sys

with open('test7_answers.json') as f:
    ans_key = json.load(f)

with open('test7_skeleton.json') as f:
    skeleton = json.load(f)

# Part 1: Q1 to Q6
p1_metadata = [
    {
        "num": 1,
        "title": "Người đàn ông kiểm tra cây trong vườn ươm",
        "st_vi": {
            "A": "Anh ấy đang đào đất trong vườn.",
            "B": "Anh ấy đang xếp chồng các tấm pallet gỗ.",
            "C": "Anh ấy đang đổ đất ra khỏi chậu.",
            "D": "Anh ấy đang kiểm tra một số chậu cây."
        },
        "opt_vi": {
            "A": "Anh ấy đang đào trong vườn.",
            "B": "Anh ấy đang xếp các tấm pallet gỗ.",
            "C": "Anh ấy đang đổ đất ra khỏi một cái chậu.",
            "D": "Anh ấy đang kiểm tra một số chậu cây."
        },
        "exp": "Trong bức ảnh, người đàn ông đang cúi người kiểm tra kỹ lưỡng các tán lá cây cảnh trong chậu (examining some plants).",
        "vocab": [
            {"word": "examine", "meaning": "kiểm tra, xem xét kỹ lưỡng", "partOfSpeech": "v"},
            {"word": "wooden pallet", "meaning": "tấm kê hàng bằng gỗ, pallet gỗ", "partOfSpeech": "n"},
            {"word": "soil", "meaning": "đất trồng cây", "partOfSpeech": "n"}
        ]
    },
    {
        "num": 2,
        "title": "Hai người phụ nữ mua hàng tạp hóa tại quầy thu ngân",
        "st_vi": {
            "A": "Một trong những người phụ nữ đang đẩy xe đẩy về phía lối ra.",
            "B": "Một trong những người phụ nữ đang treo áo khoác lên móc.",
            "C": "Những người phụ nữ đang xếp lại hàng hóa lên các kệ hàng.",
            "D": "Những người phụ nữ đang thanh toán mua hàng tạp hóa."
        },
        "opt_vi": {
            "A": "Một người phụ nữ đang đẩy xe hàng ra lối thoát.",
            "B": "Một người phụ nữ đang treo áo lên móc.",
            "C": "Họ đang bổ sung hàng lên kệ.",
            "D": "Họ đang mua sắm hàng thực phẩm tạp hóa."
        },
        "exp": "Tại quầy tính tiền trong cửa hàng, hai người phụ nữ đang thực hiện thanh toán mua thực phẩm và đồ tạp hóa (purchasing some groceries).",
        "vocab": [
            {"word": "purchase", "meaning": "mua, thanh toán hàng hóa", "partOfSpeech": "v"},
            {"word": "groceries", "meaning": "hàng thực phẩm, tạp hóa", "partOfSpeech": "n"},
            {"word": "restock", "meaning": "bổ sung hàng hóa lên kệ", "partOfSpeech": "v"}
        ]
    },
    {
        "num": 3,
        "title": "Người đàn ông tựa tay lên mặt quầy",
        "st_vi": {
            "A": "Người đàn ông đang tì cánh tay của mình lên mặt quầy.",
            "B": "Người đàn ông đang gấp chiếc áo khoác của mình.",
            "C": "Cánh cửa tủ đã bị để mở.",
            "D": "Một số chiếc ghế đẩu đang được lau chùi."
        },
        "opt_vi": {
            "A": "Người đàn ông đang tì tay lên quầy.",
            "B": "Người đàn ông đang gấp áo khoác.",
            "C": "Cửa tủ đang mở.",
            "D": "Những chiếc ghế đẩu đang được lau chùi."
        },
        "exp": "Người đàn ông đang đứng cạnh quầy phục vụ và tì cánh tay của mình lên trên mặt quầy (resting his arm on a counter).",
        "vocab": [
            {"word": "rest one's arm", "meaning": "tì, đặt cánh tay nghỉ ngơi", "partOfSpeech": "phr"},
            {"word": "counter", "meaning": "quầy phục vụ, quầy tính tiền", "partOfSpeech": "n"},
            {"word": "stool", "meaning": "ghế đẩu (ghế không tựa)", "partOfSpeech": "n"}
        ]
    },
    {
        "num": 4,
        "title": "Các biển hiệu được dựng phía trước tòa nhà",
        "st_vi": {
            "A": "Một số ban công được trang trí bằng biểu ngữ.",
            "B": "Một số biển báo đã được dựng ở phía trước một tòa nhà.",
            "C": "Một quán cà phê đã được mở ở góc phố.",
            "D": "Một đoàn khách du lịch đang đứng bên ngoài tòa nhà."
        },
        "opt_vi": {
            "A": "Ban công được trang trí bằng cờ biểu ngữ.",
            "B": "Biển báo được cắm phía trước tòa nhà.",
            "C": "Quán cà phê được dựng ở góc đường.",
            "D": "Đoàn du khách đứng ngoài tòa nhà."
        },
        "exp": "Phía trước tòa nhà có các bảng biển báo chỉ dẫn được dựng trên vỉa hè (signs have been posted in front of a building).",
        "vocab": [
            {"word": "post a sign", "meaning": "dựng, cắm hoặc dán biển báo", "partOfSpeech": "phr"},
            {"word": "balcony", "meaning": "ban công tòa nhà", "partOfSpeech": "n"},
            {"word": "banner", "meaning": "băng rôn, biểu ngữ quảng cáo", "partOfSpeech": "n"}
        ]
    },
    {
        "num": 5,
        "title": "Một số ô tô đỗ trên vỉa hè ven đường phố",
        "st_vi": {
            "A": "Một số người đang chờ ở trạm xe buýt.",
            "B": "Các giá để xe đạp đã được đặt gần một bãi cỏ.",
            "C": "Một số xe ô tô đang đỗ trên vỉa hè.",
            "D": "Một số người đang tụ tập ở quảng trường thành phố."
        },
        "opt_vi": {
            "A": "Người dân chờ ở trạm xe buýt.",
            "B": "Giá để xe đạp đặt gần bãi cỏ.",
            "C": "Xe ô tô đỗ trên vỉa hè.",
            "D": "Người dân tụ họp ở quảng trường."
        },
        "exp": "Bức ảnh cho thấy các phương tiện ô tô đang đỗ một phần hoặc toàn bộ trên lề đường/vỉa hè (cars are parked on a sidewalk).",
        "vocab": [
            {"word": "sidewalk", "meaning": "vỉa hè, lối đi bộ ven đường", "partOfSpeech": "n"},
            {"word": "park", "meaning": "đỗ xe, đậu xe", "partOfSpeech": "v"},
            {"word": "bike rack", "meaning": "giá để xe đạp", "partOfSpeech": "n"}
        ]
    },
    {
        "num": 6,
        "title": "Cửa sổ cạnh khu vực bàn ghế sofa",
        "st_vi": {
            "A": "Ánh nắng mặt trời đang bị che khuất bởi rèm cửa.",
            "B": "Có một tấm thảm lớn bên dưới cây đàn dương cầm.",
            "C": "Có một số cửa sổ cạnh khu vực ngồi nghỉ.",
            "D": "Một số đồ nội thất đang được cất trong tủ quần áo."
        },
        "opt_vi": {
            "A": "Nắng bị che khuất bởi rèm.",
            "B": "Thảm lớn đặt dưới đàn dương cầm.",
            "C": "Cửa sổ nằm cạnh khu vực ngồi tiếp khách.",
            "D": "Đồ đạc được cất trong tủ."
        },
        "exp": "Trong không gian phòng khách, dãy cửa sổ kính lớn nằm ngay sát cạnh khu vực bài trí bàn ghế ngồi (windows by a seating area).",
        "vocab": [
            {"word": "seating area", "meaning": "khu vực ngồi nghỉ, tiếp khách", "partOfSpeech": "n"},
            {"word": "underneath", "meaning": "ở ngay bên dưới", "partOfSpeech": "prep"},
            {"word": "curtain", "meaning": "rèm cửa sổ", "partOfSpeech": "n"}
        ]
    }
]

part1_items = []
for p in p1_metadata:
    q_num = p["num"]
    sk = skeleton[q_num - 1]
    part1_items.append({
        "id": f"part1-{q_num}",
        "part": 1,
        "partTitle": "Part 1: Mô tả hình ảnh",
        "questionRange": f"Câu {q_num}",
        "title": f"Part 1 - Câu {q_num}: {p['title']}",
        "audioSrc": "/audio/test7_2024.mp3",
        "startTime": sk["startTime"],
        "endTime": sk["endTime"],
        "imageUrl": f"/images/intensive/test7_2024/q{q_num}.png",
        "image": f"/images/intensive/test7_2024/q{q_num}.png",
        "transcript": [
            {"id": f"p1-{q_num}-a", "speaker": "Speaker", "text": f"(A) {sk['statements']['A']}", "vietnamese": f"(A) {p['st_vi']['A']}"},
            {"id": f"p1-{q_num}-b", "speaker": "Speaker", "text": f"(B) {sk['statements']['B']}", "vietnamese": f"(B) {p['st_vi']['B']}"},
            {"id": f"p1-{q_num}-c", "speaker": "Speaker", "text": f"(C) {sk['statements']['C']}", "vietnamese": f"(C) {p['st_vi']['C']}"},
            {"id": f"p1-{q_num}-d", "speaker": "Speaker", "text": f"(D) {sk['statements']['D']}", "vietnamese": f"(D) {p['st_vi']['D']}"}
        ],
        "questions": [
            {
                "num": q_num,
                "question": "Which statement best describes the picture?",
                "vietnameseQuestion": "Câu nào mô tả đúng nhất bức tranh?",
                "options": [
                    {"key": "A", "text": sk['statements']['A'], "vietnamese": p['opt_vi']['A']},
                    {"key": "B", "text": sk['statements']['B'], "vietnamese": p['opt_vi']['B']},
                    {"key": "C", "text": sk['statements']['C'], "vietnamese": p['opt_vi']['C']},
                    {"key": "D", "text": sk['statements']['D'], "vietnamese": p['opt_vi']['D']}
                ],
                "correctAnswer": sk["correctAnswer"],
                "explanation": p["exp"]
            }
        ],
        "vocabulary": p["vocab"]
    })

# Part 2: Q7 to Q31
p2_metadata = [
    {
        "num": 7, "title": "Người chuẩn bị lẵng hoa cho bữa tiệc",
        "q_en": "Who's providing the floral arrangements for the party?",
        "q_vi": "Ai sẽ chuẩn bị hoa trang trí cho bữa tiệc vậy?",
        "opts_vi": [
            ("A", "Tiệm hoa trên phố Main Street.", "The florist on Main Street."),
            ("B", "Cô ấy đã có một sự nghiệp lâu năm.", "She's had a long career."),
            ("C", "Vâng, chuyến bay của anh ấy đã được thu xếp.", "Yes, his flight has been arranged.")
        ],
        "exp": "Câu hỏi 'Who...' hỏi người/đơn vị cung cấp hoa. Lựa chọn (A) trả lời chính xác bằng việc chỉ rõ tiệm hoa trên phố Main Street.",
        "vocab": [("floral arrangement", "lẵng hoa, sự cắm hoa trang trí", "n"), ("florist", "người bán hoa, tiệm hoa", "n")]
    },
    {
        "num": 8, "title": "Lý do chưa hoàn thành báo cáo ngân sách",
        "q_en": "Why didn't you finish the budget report?",
        "q_vi": "Tại sao bạn lại chưa hoàn thành báo cáo ngân sách?",
        "opts_vi": [
            ("A", "Ở vạch đích.", "At the finish line."),
            ("B", "Không, nó không đắt.", "No, it wasn't expensive."),
            ("C", "Tôi đã phải họp với một khách hàng.", "I was meeting with a client.")
        ],
        "exp": "Câu hỏi lý do 'Why didn\\'t you...'. Lựa chọn (C) đưa ra lý do chính đáng là vì bận họp với khách hàng.",
        "vocab": [("budget report", "báo cáo ngân sách chi tiêu", "n"), ("client", "khách hàng đối tác", "n")]
    },
    {
        "num": 9, "title": "Tầng lầu bạn đang đến",
        "q_en": "What floor are you going to?",
        "q_vi": "Bạn đang đi lên tầng mấy vậy?",
        "opts_vi": [
            ("A", "Tôi có thể xin một bản sao của tài liệu này không?", "Can I have a copy of this?"),
            ("B", "Tầng 25.", "The 25th."),
            ("C", "Bức tranh đó trông sẽ rất đẹp ở đó.", "That painting will look nice there.")
        ],
        "exp": "Câu hỏi đi thang máy 'What floor...'. Lựa chọn (B) trực tiếp trả lời số tầng cần đến là tầng 25.",
        "vocab": [("floor", "tầng, sàn nhà", "n")]
    },
    {
        "num": 10, "title": "Cách thiết lập máy chiếu",
        "q_en": "How do I set up this projector?",
        "q_vi": "Làm thế nào để tôi cài đặt chiếc máy chiếu này?",
        "opts_vi": [
            ("A", "Khu vực kho chứa đồ ở tầng dưới.", "The storage area downstairs."),
            ("B", "Một mã dự án mới.", "A new project code."),
            ("C", "Có một cuốn sách hướng dẫn trong ngăn kéo.", "There's a manual in the drawer.")
        ],
        "exp": "Câu hỏi cách vận hành thiết bị ('How do I set up...'). Lựa chọn (C) chỉ dẫn đọc cuốn tài liệu hướng dẫn có sẵn trong ngăn kéo.",
        "vocab": [("projector", "máy chiếu", "n"), ("manual", "sách hướng dẫn sử dụng", "n"), ("drawer", "ngăn kéo bàn", "n")]
    },
    {
        "num": 11, "title": "Người đã nhận được thư thăng chức",
        "q_en": "Who has already received their promotion letter?",
        "q_vi": "Ai đã nhận được thư thông báo thăng chức rồi?",
        "opts_vi": [
            ("A", "Tôi đã nhận được ngày hôm qua.", "I did yesterday."),
            ("B", "Một lời mời dự tiệc.", "A party invitation."),
            ("C", "Polina đã phát biểu.", "Polina gave the speech.")
        ],
        "exp": "Câu hỏi 'Who has already received...'. Lựa chọn (A) xác nhận chính người nói đã nhận được vào ngày hôm qua ('I did yesterday').",
        "vocab": [("promotion letter", "thư thăng chức", "n"), ("receive", "nhận được", "v")]
    },
    {
        "num": 12, "title": "Đọc bản thông cáo báo chí",
        "q_en": "Did you read the press release?",
        "q_vi": "Bạn đã đọc bản thông cáo báo chí chưa?",
        "opts_vi": [
            ("A", "Cả ngày hôm nay tôi chưa kiểm tra email.", "I haven't checked my email all day."),
            ("B", "Ở đây trời vẫn chưa mưa.", "It's not raining here yet."),
            ("C", "Công tắc vẫn hoạt động tốt.", "The switch works fine.")
        ],
        "exp": "Câu hỏi Yes/No về việc đọc thông cáo. Lựa chọn (A) gián tiếp trả lời chưa đọc vì bận rộn chưa kịp mở hòm thư điện tử.",
        "vocab": [("press release", "thông cáo báo chí", "n"), ("check email", "kiểm tra hòm thư điện tử", "phr")]
    },
    {
        "num": 13, "title": "Gia hạn gói đặt báo dài hạn",
        "q_en": "Didn't we renew our newspaper subscription last month?",
        "q_vi": "Chẳng phải chúng ta đã gia hạn gói đặt báo tháng trước rồi sao?",
        "opts_vi": [
            ("A", "Bức ảnh đó ở trên trang nhất.", "That photo's on the front page."),
            ("B", "Đây là giấy cho bản tin nội bộ của bạn.", "Here's the paper for your newsletter."),
            ("C", "Vâng, nó đã được gia hạn thêm sáu tháng nữa.", "Yes, it was renewed for another six months.")
        ],
        "exp": "Câu hỏi xác nhận gia hạn báo ('Didn\\'t we renew...'). Lựa chọn (C) xác nhận có và nêu rõ thời hạn thêm 6 tháng nữa.",
        "vocab": [("renew", "gia hạn hợp đồng/dịch vụ", "v"), ("subscription", "gói đăng ký dài hạn", "n")]
    },
    {
        "num": 14, "title": "Thông báo nhu cầu ngân sách",
        "q_en": "When will we mention our budgetary needs to the outreach coordinator?",
        "q_vi": "Khi nào chúng ta sẽ đề cập đến nhu cầu ngân sách với điều phối viên tiếp cận cộng đồng?",
        "opts_vi": [
            ("A", "Tôi không thể với tới kệ trên cùng.", "I can't quite reach the top shelf."),
            ("B", "Chúng ta đã được cấp đủ kinh phí cho đến cuối năm rồi.", "We're fully funded through the end of the year."),
            ("C", "Bởi vì kế toán của chúng ta đang đi nghỉ.", "Because our accountant is on vacation.")
        ],
        "exp": "Câu hỏi thời điểm xin thêm ngân sách. Lựa chọn (B) gián tiếp trả lời không cần xin vì đã được tài trợ đầy đủ kinh phí đến hết năm.",
        "vocab": [("budgetary needs", "nhu cầu về ngân sách", "n"), ("outreach coordinator", "điều phối viên tiếp cận cộng đồng", "n"), ("fully funded", "được cấp đủ kinh phí", "phr")]
    },
    {
        "num": 15, "title": "Lịch hẹn với Bác sĩ Hamdi",
        "q_en": "My appointment is with Dr. Hamdi today, right?",
        "q_vi": "Hôm nay tôi có hẹn với Bác sĩ Hamdi đúng không?",
        "opts_vi": [
            ("A", "Thường là kiểm tra sức khỏe hàng năm.", "Usually an annual checkup."),
            ("B", "Không. Đỗ xe không miễn phí.", "No. Parking is not free."),
            ("C", "Vâng. Và bác sĩ sẽ gặp bạn trong giây lát.", "Yes. And she'll see you in a minute.")
        ],
        "exp": "Câu hỏi xác nhận lịch khám bệnh. Lựa chọn (C) xác nhận đúng và báo thêm bác sĩ sắp vào khám ngay.",
        "vocab": [("appointment", "cuộc hẹn khám/gặp", "n"), ("in a minute", "trong chốc lát, ngay sau đây", "phr")]
    },
    {
        "num": 16, "title": "Nơi cất lô hàng giấy",
        "q_en": "Where should I store this shipment of paper?",
        "q_vi": "Tôi nên cất lô hàng giấy này ở đâu?",
        "opts_vi": [
            ("A", "Cửa hàng đóng cửa lúc 4 giờ.", "The store closes at 4."),
            ("B", "Bằng hình thức chuyển phát nhanh.", "By express delivery."),
            ("C", "Chà, phòng kho vật tư đã chật kín rồi.", "Well, the supply room is full.")
        ],
        "exp": "Câu hỏi địa điểm lưu trữ hàng ('Where should I store...'). Lựa chọn (C) nêu vấn đề phòng kho văn phòng phẩm đã kín chỗ để cùng nhau tìm giải pháp.",
        "vocab": [("shipment", "lô hàng vận chuyển", "n"), ("supply room", "phòng chứa đồ dùng văn phòng phẩm", "n")]
    },
    {
        "num": 17, "title": "Đổi lại lịch cắt tóc sang thứ Hai",
        "q_en": "Would you be able to reschedule my haircut for Monday?",
        "q_vi": "Bạn có thể đổi lịch cắt tóc của tôi sang thứ Hai được không?",
        "opts_vi": [
            ("A", "Rất tiếc không được, hôm đó chúng tôi đã kín lịch rồi.", "No, we're fully booked that day."),
            ("B", "Tôi sẽ mở cửa sổ để đón chút không khí trong lành.", "I'll open a window to let in some fresh air."),
            ("C", "Cỏ cần phải được cắt tỉa.", "The grass needs cutting.")
        ],
        "exp": "Câu đề nghị dời lịch hẹn ('reschedule my haircut'). Lựa chọn (A) từ chối lịch sự vì ngày đó tiệm đã kín chỗ đặt trước ('fully booked').",
        "vocab": [("reschedule", "dời lại lịch hẹn", "v"), ("fully booked", "đã kín lịch, hết chỗ đặt", "adj")]
    },
    {
        "num": 18, "title": "Đi tàu hay xe buýt ra sân bay",
        "q_en": "Should I take the train or the bus to the airport?",
        "q_vi": "Tôi nên đi tàu hỏa hay đi xe buýt ra sân bay?",
        "opts_vi": [
            ("A", "Trạm dừng xe buýt cách đây tới năm cây số.", "The bus stop is five kilometers away."),
            ("B", "Có đủ cho tất cả chúng ta.", "There are enough for all of us."),
            ("C", "Không, tôi đã tham dự một buổi tập huấn.", "No, I went to a training session.")
        ],
        "exp": "Câu hỏi lựa chọn phương tiện. Lựa chọn (A) chỉ ra trạm xe buýt quá xa (5 km), ngụ ý nên chọn đi tàu hỏa.",
        "vocab": [("bus stop", "trạm dừng xe buýt", "n"), ("airport", "sân bay", "n")]
    },
    {
        "num": 19, "title": "Thời gian hoàn thành khóa học trực tuyến",
        "q_en": "How long will the online course take?",
        "q_vi": "Khóa học trực tuyến này mất bao lâu thời gian?",
        "opts_vi": [
            ("A", "Bạn có thể hoàn thành nó trong vài giờ.", "You can finish it in a few hours."),
            ("B", "40 đô la một tháng.", "$40 a month."),
            ("C", "Tôi sẽ lấy chiếc áo khoác màu xanh.", "I'll take the blue jacket.")
        ],
        "exp": "Câu hỏi thời lượng 'How long...'. Lựa chọn (A) trả lời rõ ràng chỉ mất vài tiếng đồng hồ để hoàn thành.",
        "vocab": [("online course", "khóa học trực tuyến", "n"), ("in a few hours", "trong vòng vài giờ", "phr")]
    },
    {
        "num": 20, "title": "Tổ chức buổi gặp mặt công ty tại công viên Benson",
        "q_en": "Will this month's company gathering be held in Benson Park?",
        "q_vi": "Buổi tụ họp công ty tháng này có được tổ chức ở Công viên Benson không?",
        "opts_vi": [
            ("A", "Tôi thường đỗ xe cạnh đài phun nước.", "I usually park by the fountain."),
            ("B", "Hầu hết các ngày trời bên ngoài vẫn còn lạnh.", "It's still cold outside most days."),
            ("C", "Những cái đó nên được in màu.", "Those should be printed in color.")
        ],
        "exp": "Câu hỏi Yes/No về việc tổ chức sự kiện ngoài trời. Lựa chọn (B) ngụ ý thời tiết ngoài trời còn quá lạnh nên sẽ không tổ chức ở công viên.",
        "vocab": [("company gathering", "buổi tụ họp toàn thể công ty", "n"), ("fountain", "đài phun nước", "n")]
    },
    {
        "num": 21, "title": "Thời điểm nhận vé xem biểu diễn",
        "q_en": "When will the tickets for the performance be ready to pick up?",
        "q_vi": "Khi nào vé xem buổi biểu diễn sẽ có sẵn để đến lấy?",
        "opts_vi": [
            ("A", "Chúng ta sẽ nhận được chúng vào cuối tuần này.", "We should get them by the end of the week."),
            ("B", "Một đạo diễn nổi tiếng.", "A famous director."),
            ("C", "25 euro.", "25 euros.")
        ],
        "exp": "Câu hỏi thời gian 'When will the tickets...'. Lựa chọn (A) trả lời cụ thể là vào khoảng cuối tuần này.",
        "vocab": [("performance", "buổi biểu diễn nghệ thuật", "n"), ("pick up", "đến lấy, nhận", "v")]
    },
    {
        "num": 22, "title": "Kiểm tra vật liệu đóng gói đã đặt chưa",
        "q_en": "I don't know if the packaging materials were ordered already.",
        "q_vi": "Tôi không rõ liệu các vật liệu đóng gói đã được đặt mua chưa.",
        "opts_vi": [
            ("A", "Tôi đã thấy một số thùng hàng ở khu vực bốc dỡ.", "I saw some boxes on the loading dock."),
            ("B", "Cô ấy đang đội một chiếc mũ màu đỏ.", "She's wearing a red hat."),
            ("C", "Một cuộc hẹn ăn trưa lúc 12:30.", "A lunch appointment at 12:30.")
        ],
        "exp": "Câu trần thuật băn khoăn về hàng đặt. Lựa chọn (A) cung cấp thông tin gián tiếp rằng hàng có vẻ đã về vì thấy các thùng hàng ở cầu cảng bốc dỡ.",
        "vocab": [("packaging materials", "vật liệu đóng gói thùng hộp", "n"), ("loading dock", "khu vực cầu cảng bốc dỡ hàng", "n")]
    },
    {
        "num": 23, "title": "Yêu cầu gửi báo cáo doanh số",
        "q_en": "Could you please send me the sales report?",
        "q_vi": "Bạn có thể vui lòng gửi cho tôi báo cáo bán hàng được không?",
        "opts_vi": [
            ("A", "Giảm giá 50% cho hàng hóa mùa trước.", "50% off last season's merchandise."),
            ("B", "Tất nhiên rồi, tôi sẽ gửi ngay bây giờ.", "Of course, I'll do it now."),
            ("C", "Bạn đã xem bản tin dự báo thời tiết chưa?", "Did you check the weather report?")
        ],
        "exp": "Lời nhờ vả lịch sự ('Could you please send me...'). Lựa chọn (B) lập tức đồng ý và hành động ngay ('Of course, I\\'ll do it now').",
        "vocab": [("sales report", "báo cáo doanh số bán hàng", "n"), ("merchandise", "hàng hóa", "n")]
    },
    {
        "num": 24, "title": "Tầm nhìn từ căn hộ mới",
        "q_en": "What type of view will your apartment have?",
        "q_vi": "Căn hộ của bạn sẽ có hướng nhìn / tầm nhìn như thế nào?",
        "opts_vi": [
            ("A", "Hệ thống chiếu sáng nhà bếp trông rất tuyệt.", "The kitchen lighting looks great."),
            ("B", "Tôi vẫn chưa ký hợp đồng thuê nhà.", "I haven't signed a lease yet."),
            ("C", "Chúng tôi hoàn toàn nhất trí về điều đó.", "We're in complete agreement on that.")
        ],
        "exp": "Câu hỏi về tầm nhìn căn hộ. Lựa chọn (B) gián tiếp trả lời chưa biết hướng nhìn vì thực tế vẫn chưa chốt ký hợp đồng thuê.",
        "vocab": [("view", "tầm nhìn, hướng cảnh quan", "n"), ("sign a lease", "ký hợp đồng thuê nhà", "phr")]
    },
    {
        "num": 25, "title": "Mức tiêu thụ dầu sưởi ấm vào mùa đông",
        "q_en": "How much oil does your heater use in the winter?",
        "q_vi": "Lò sưởi của bạn tiêu thụ bao nhiêu dầu vào mùa đông?",
        "opts_vi": [
            ("A", "Chúng ta có thể cần dừng lại đổ xăng trong chuyến đi.", "We may need to stop for gas on our trip."),
            ("B", "Công thức nấu ăn đó cần có bơ.", "That recipe calls for butter."),
            ("C", "Chúng tôi chỉ sử dụng các thiết bị chạy bằng điện.", "We only use electric appliances.")
        ],
        "exp": "Câu hỏi lượng dầu sử dụng. Lựa chọn (C) đính chính lại rằng gia đình chỉ dùng toàn bộ thiết bị điện chứ không dùng máy sưởi dầu.",
        "vocab": [("heater", "máy sưởi ấm", "n"), ("electric appliance", "thiết bị điện gia dụng", "n")]
    },
    {
        "num": 26, "title": "Vị trí quầy bán vitamin",
        "q_en": "Where can I find the vitamins?",
        "q_vi": "Tôi có thể tìm thấy các loại vitamin ở đâu?",
        "opts_vi": [
            ("A", "Ở lối đi số 6.", "In aisle 6."),
            ("B", "Đó là một công thức nấu ăn rất tốt cho sức khỏe.", "That's a really healthy recipe."),
            ("C", "Thư viện đóng cửa vào các ngày Chủ nhật.", "The library is closed on Sundays.")
        ],
        "exp": "Câu hỏi vị trí trong cửa hàng 'Where can I find...'. Lựa chọn (A) chỉ dẫn lối đi chính xác là ở dãy/lối đi số 6.",
        "vocab": [("vitamin", "thuốc vitamin, khoáng chất", "n"), ("aisle", "lối đi giữa các dãy kệ hàng", "n")]
    },
    {
        "num": 27, "title": "Cảm ơn vì đã hỗ trợ tạo bài khảo sát",
        "q_en": "Thank you for helping me create a survey.",
        "q_vi": "Cảm ơn bạn đã giúp tôi tạo bảng khảo sát nhé.",
        "opts_vi": [
            ("A", "Phần mềm đã làm hầu hết các công việc rồi.", "The software did most of the work."),
            ("B", "Những khách hàng trung thành của chúng tôi.", "Our loyal customers."),
            ("C", "Các thùng gỗ vẫn còn ở trong nhà kho.", "The crates are still in the warehouse.")
        ],
        "exp": "Lời cảm ơn giúp đỡ. Lựa chọn (A) khiêm tốn đáp lại rằng phần mềm tự động hóa hầu hết các công đoạn tạo khảo sát.",
        "vocab": [("survey", "bảng câu hỏi khảo sát ý kiến", "n"), ("loyal customer", "khách hàng thân thiết", "n")]
    },
    {
        "num": 28, "title": "Thời điểm hoàn thành kiểm thử ứng dụng di động",
        "q_en": "When will you be done testing the new mobile app?",
        "q_vi": "Khi nào bạn sẽ kiểm thử xong ứng dụng di động mới?",
        "opts_vi": [
            ("A", "Không, chỉ là một mẫu máy tính xách tay đời cũ thôi.", "No, just an older laptop model."),
            ("B", "Tôi gần xong rồi đây.", "I'm almost finished."),
            ("C", "Mất khoảng hai giờ lái xe từ đây.", "It's about a two hour drive from here.")
        ],
        "exp": "Câu hỏi thời điểm hoàn thành kiểm thử. Lựa chọn (B) thông báo tiến độ sắp xong ('I\\'m almost finished').",
        "vocab": [("mobile app", "ứng dụng điện thoại di động", "n"), ("almost finished", "gần như hoàn thành", "phr")]
    },
    {
        "num": 29, "title": "Nhắc nhở tắt máy chiếu sau bài thuyết trình",
        "q_en": "Don't forget to turn off the projector after your presentation.",
        "q_vi": "Đừng quên tắt máy chiếu sau bài thuyết trình của bạn nhé.",
        "opts_vi": [
            ("A", "Tôi không có bản tóm tắt.", "I don't have a summary."),
            ("B", "Tôi có nên mang trả nó về tủ chứa đồ không?", "Should I return it to the supply closet?"),
            ("C", "Vui lòng phát những tài liệu phát tay này.", "Please distribute these handouts.")
        ],
        "exp": "Lời nhắc nhở tắt thiết bị. Lựa chọn (B) tiếp thu và hỏi thêm có cần mang cất máy chiếu về lại tủ kho đồ không.",
        "vocab": [("turn off", "tắt thiết bị điện", "v"), ("supply closet", "tủ chứa đồ dùng văn phòng", "n")]
    },
    {
        "num": 30, "title": "Nhà để xe từng ở trên con phố này",
        "q_en": "Didn't there use to be a parking garage on this street?",
        "q_vi": "Trước đây từng có một nhà để xe trên con phố này đúng không?",
        "opts_vi": [
            ("A", "Có, nhưng nó đang bị dỡ bỏ rồi.", "Yes, but it's being torn down."),
            ("B", "Bạn có thể treo chìa khóa của mình lên chiếc móc này.", "You can hang your keys on this hook."),
            ("C", "Xe của tôi bị thủng lốp.", "My car has a flat tire.")
        ],
        "exp": "Câu hỏi xác nhận sự tồn tại trong quá khứ ('Didn\\'t there use to be...'). Lựa chọn (A) xác nhận có nhưng cho biết hiện đang bị phá dỡ.",
        "vocab": [("parking garage", "nhà để xe nhiều tầng", "n"), ("tear down", "phá dỡ công trình xây dựng", "v"), ("flat tire", "lốp xe bị xẹp/thủng", "n")]
    },
    {
        "num": 31, "title": "Khả năng làm việc vào thứ Năm hay thứ Sáu",
        "q_en": "Will you be available to work on Thursday or Friday?",
        "q_vi": "Bạn có thể đi làm vào thứ Năm hay thứ Sáu không?",
        "opts_vi": [
            ("A", "Có buổi đào tạo bắt buộc vào thứ Sáu rồi.", "There's mandatory training on Friday."),
            ("B", "Vâng, đó là một buổi biểu diễn hay.", "Yes, it was a good show."),
            ("C", "Một lịch trình hàng ngày.", "A daily schedule.")
        ],
        "exp": "Câu hỏi lựa chọn ngày làm việc. Lựa chọn (A) gián tiếp loại trừ ngày thứ Sáu vì đã có lịch đào tạo bắt buộc, ngụ ý sẽ làm vào thứ Năm.",
        "vocab": [("available", "rảnh rỗi, có sẵn", "adj"), ("mandatory training", "khóa đào tạo bắt buộc", "n")]
    }
]

part2_items = []
for p in p2_metadata:
    q_num = p["num"]
    sk = skeleton[q_num - 1]
    part2_items.append({
        "id": f"part2-{q_num}",
        "part": 2,
        "partTitle": "Part 2: Hỏi & Đáp",
        "questionRange": f"Câu {q_num}",
        "title": f"Part 2 - Câu {q_num}: {p['title']}",
        "audioSrc": "/audio/test7_2024.mp3",
        "startTime": sk["startTime"],
        "endTime": sk["endTime"],
        "transcript": [
            {"id": f"p2-{q_num}-q", "speaker": "Speaker 1", "text": p["q_en"], "vietnamese": p["q_vi"]},
            {"id": f"p2-{q_num}-a", "speaker": "Speaker 2", "text": f"(A) {p['opts_vi'][0][2]}", "vietnamese": f"(A) {p['opts_vi'][0][1]}"},
            {"id": f"p2-{q_num}-b", "speaker": "Speaker 2", "text": f"(B) {p['opts_vi'][1][2]}", "vietnamese": f"(B) {p['opts_vi'][1][1]}"},
            {"id": f"p2-{q_num}-c", "speaker": "Speaker 2", "text": f"(C) {p['opts_vi'][2][2]}", "vietnamese": f"(C) {p['opts_vi'][2][1]}"}
        ],
        "questions": [
            {
                "num": q_num,
                "question": p["q_en"],
                "vietnameseQuestion": p["q_vi"],
                "options": [
                    {"key": "A", "text": p['opts_vi'][0][2], "vietnamese": p['opts_vi'][0][1]},
                    {"key": "B", "text": p['opts_vi'][1][2], "vietnamese": p['opts_vi'][1][1]},
                    {"key": "C", "text": p['opts_vi'][2][2], "vietnamese": p['opts_vi'][2][1]}
                ],
                "correctAnswer": sk["correctAnswer"],
                "explanation": p["exp"]
            }
        ],
        "vocabulary": [{"word": w, "meaning": m, "partOfSpeech": pos} for w, m, pos in p["vocab"]]
    })

# Part 3: 13 items
p3_metadata = [
    {
        "range": (32, 34), "title": "Phát đồ ăn thử bim bim rau củ tại siêu thị",
        "speakers": ["Woman", "Man", "Woman", "Man"],
        "trans": [
            ("Hi, I'm Gabriella Alvarez of Organic Easy Meals. I'm scheduled to offer some samples of our new vegetable chips to your customers from 3 to 5 p.m.", "Xin chào, tôi là Gabriella Alvarez từ công ty Organic Easy Meals. Tôi có lịch phát một số mẫu thử bim bim rau củ mới cho khách hàng của anh từ 3 đến 5 giờ chiều."),
            ("Oh, yes, hello, Miss Alvarez. I'm Ryan Hughes, the manager. We have a table set up for you at the end of aisle 8. That's our snack aisle.", "Ồ vâng, xin chào cô Alvarez. Tôi là Ryan Hughes, quản lý ở đây. Chúng tôi đã chuẩn bị sẵn một chiếc bàn cho cô ở cuối lối đi số 8. Đó là khu vực đồ ăn nhẹ của chúng tôi."),
            ("Thanks. I'll start bringing in food and some equipment from my truck. But first, I'd like to take a look at the table I'll be using.", "Cảm ơn anh. Tôi sẽ bắt đầu chuyển đồ ăn và thiết bị từ xe tải vào. Nhưng trước hết, tôi muốn xem qua chiếc bàn mà tôi sẽ sử dụng."),
            ("Sounds good. If you'd like any help bringing in your stuff, just let me know.", "Được chứ. Nếu cô cần bất kỳ sự giúp đỡ nào để mang đồ đạc vào thì cứ báo cho tôi biết nhé.")
        ],
        "q_vi": [
            ("Người phụ nữ đang chuẩn bị làm gì?", {
                "A": "Tiến hành một cuộc thanh tra", "B": "Quay một buổi trình diễn nấu ăn", "C": "Phát một số mẫu dùng thử sản phẩm", "D": "Thực hiện mua hàng"
            }, "Người phụ nữ nói rõ mục đích: 'offer some samples of our new vegetable chips' (phát mẫu dùng thử sản phẩm - Offer some product samples - C)."),
            ("Cuộc trò chuyện nhiều khả năng đang diễn ra ở đâu nhất?", {
                "A": "Tại một nhà hàng", "B": "Tại một nhà máy", "C": "Tại một trang trại hữu cơ", "D": "Tại một cửa hàng tạp hóa / siêu thị"
            }, "Người đàn ông là quản lý và chỉ vị trí bàn ở cuối lối đi bán đồ ăn vặt ('aisle 8... snack aisle') nên bối cảnh là siêu thị / cửa hàng tạp hóa (grocery store - D)."),
            ("Người đàn ông đề nghị giúp đỡ việc gì?", {
                "A": "Lên lịch phỏng vấn", "B": "Trộn các nguyên liệu", "C": "Khuân vác một số đồ đạc", "D": "Lắp ráp một số thiết bị"
            }, "Người đàn ông đề nghị: 'If you\\'d like any help bringing in your stuff, just let me know' (giúp mang đồ vào - Carrying some supplies - C).")
        ],
        "vocab": [("product sample", "mẫu dùng thử sản phẩm", "n"), ("grocery store", "cửa hàng tạp hóa / siêu thị", "n"), ("snack aisle", "lối đi bày bán đồ ăn vặt", "n"), ("supplies", "đồ dùng, vật tư", "n")]
    },
    {
        "range": (35, 37), "title": "Đóng phí phạt trả sách muộn tại thư viện",
        "speakers": ["Woman", "Man", "Woman", "Man"],
        "trans": [
            ("Hello. I received a notice in the mail about a fee I need to pay because I returned some books late. My name is Lin Gao.", "Xin chào. Tôi nhận được thông báo qua thư về khoản phí tôi phải nộp vì trả sách trễ hạn. Tên tôi là Lin Gao."),
            ("Hmm, yes. It says here in the system that you owe $10 for overdue materials. Would you like to pay that now?", "Vâng, hệ thống ở đây hiển thị cô đang nợ 10 đô la tiền phí cho tài liệu quá hạn. Cô có muốn thanh toán khoản đó ngay bây giờ không?"),
            ("Do you take credit cards?", "Ở đây có nhận thanh toán bằng thẻ tín dụng không?"),
            ("We usually accept either cash or credit, but our card reader has been malfunctioning. Let me see if it's working again.", "Chúng tôi thường chấp nhận cả tiền mặt lẫn thẻ, nhưng máy đọc thẻ của chúng tôi đang bị trục trặc. Để tôi xem nó đã hoạt động lại chưa nhé.")
        ],
        "q_vi": [
            ("Tại sao người phụ nữ lại nhận được thông báo?", {
                "A": "Cô ấy bị mất thẻ thư viện", "B": "Cô ấy trả một số cuốn sách quá hạn", "C": "Thư viện sắp sửa đổi giờ mở cửa", "D": "Một cuốn sách đã sẵn sàng để lấy"
            }, "Người phụ nữ giải thích: 'returned some books late' (trả sách quá hạn - returned some books after their due date - B)."),
            ("Theo người đàn ông, người phụ nữ còn nợ bao nhiêu tiền?", {
                "A": "$10", "B": "$15", "C": "$20", "D": "$25"
            }, "Người đàn ông tra cứu hệ thống và cho biết: 'you owe $10 for overdue materials' (nợ 10 đô la - A)."),
            ("Người đàn ông đề cập đến vấn đề gì?", {
                "A": "Một đơn hàng bị thất lạc", "B": "Hệ thống mạng internet bị ngắt kết nối", "C": "Máy quẹt thẻ thanh toán bị hỏng", "D": "Thiếu tiền mặt trả lại"
            }, "Người đàn ông nêu sự cố: 'our card reader has been malfunctioning' (máy đọc thẻ thanh toán bị hỏng - C).")
        ],
        "vocab": [("overdue", "quá hạn nộp/trả", "adj"), ("card reader", "máy quẹt thẻ / đọc thẻ", "n"), ("malfunction", "gặp sự cố trục trặc, hoạt động sai", "v/n")]
    },
    {
        "range": (38, 40), "title": "Đổi phòng họp bán hàng sang phòng hội đồng có TV",
        "speakers": ["Speaker 1", "Speaker 2", "Speaker 3"],
        "trans": [
            ("Hi, everybody. Are we ready for the sales meeting this morning?", "Chào mọi người. Chúng ta đã sẵn sàng cho cuộc họp bán hàng sáng nay chưa?"),
            ("Yes, I finished putting together my presentation. The meeting is in the conference room, right?", "Rồi, tôi đã soạn xong bài thuyết trình của mình. Cuộc họp diễn ra ở phòng hội nghị đúng không?"),
            ("No, there's been a last minute change. The conference room is being used by the IT department all day to interview job candidates.", "Không, có thay đổi vào phút chót. Phòng hội nghị đang được phòng IT dùng cả ngày để phỏng vấn các ứng viên xin việc."),
            ("Oh, no. My presentation requires the use of a television.", "Ôi không. Bài thuyết trình của tôi đòi hỏi phải sử dụng một chiếc tivi."),
            ("Don't worry. We're meeting in the boardroom. There's a smart TV there. Is that room large enough for our team? Yes, we won't have a problem.", "Đừng lo. Chúng ta sẽ họp ở phòng hội đồng quản trị. Ở đó có một chiếc smart TV. Phòng đó có đủ lớn cho cả nhóm không? Có chứ, không thành vấn đề đâu.")
        ],
        "q_vi": [
            ("Cuộc trò chuyện nhiều khả năng đang diễn ra ở đâu nhất?", {
                "A": "Tại một trường đại học", "B": "Tại một văn phòng công ty", "C": "Tại một trung tâm hội nghị", "D": "Tại một cửa hàng bán đồ điện tử"
            }, "Các đồng nghiệp đang chuẩn bị cho cuộc họp bán hàng nội bộ (sales meeting, presentation, IT department) nên địa điểm là văn phòng công ty (office - B)."),
            ("Điều gì đã gây ra sự thay đổi kế hoạch họp?", {
                "A": "Lãnh đạo đến muộn", "B": "Bài thuyết trình chưa hoàn thành", "C": "Phòng họp đã có người sử dụng", "D": "Thiết bị âm thanh bị hỏng"
            }, "Có thay đổi phút chót vì: 'The conference room is being used by the IT department all day' (phòng đã có người dùng - room is occupied - C)."),
            ("Đặc điểm nào của phòng hội đồng quản trị là quan trọng đối với người phụ nữ?", {
                "A": "Ghế ngồi thoải mái", "B": "Cách âm tốt", "C": "Có máy chiếu", "D": "Có một chiếc tivi"
            }, "Người phụ nữ cần TV cho bài thuyết trình ('requires the use of a television') và phòng họp mới có sẵn TV ('There\\'s a smart TV there' - A television - D).")
        ],
        "vocab": [("boardroom", "phòng họp hội đồng quản trị", "n"), ("candidate", "ứng viên xin việc", "n"), ("occupied", "đang có người sử dụng, kín chỗ", "adj")]
    },
    {
        "range": (41, 43), "title": "Công trường thi công đóng đường trước cửa hàng",
        "speakers": ["Woman", "Man", "Woman"],
        "trans": [
            ("Did you see the road construction sign at the corner? All traffic is being directed away from our street. No one can come this way.", "Anh có nhìn thấy biển báo thi công đường ở góc phố không? Toàn bộ giao thông đang được điều hướng tránh xa khỏi phố của chúng ta. Không xe nào có thể đi đường này cả."),
            ("I know. How will customers visit our store to make copies and pick up photo prints? I'm afraid they'll have to park on another street. They can still access the store on foot.", "Tôi biết. Khách hàng làm sao có thể đến cửa hàng chúng ta để photo tài liệu và lấy ảnh in đây? Tôi e rằng họ sẽ phải đỗ xe ở con phố khác rồi đi bộ vào cửa hàng."),
            ("Okay. I'll update our social media page to direct our customers.", "Được rồi. Tôi sẽ cập nhật trang mạng xã hội của chúng ta để hướng dẫn đường đi cho khách hàng.")
        ],
        "q_vi": [
            ("Những người nói thảo luận về vấn đề gì?", {
                "A": "Nhà để xe bị đầy", "B": "Một con đường bị chặn/đóng cửa", "C": "Một số thiết bị bị hỏng", "D": "Một số mặt hàng bị hư hại"
            }, "Người phụ nữ đề cập: 'road construction sign... All traffic is being directed away... No one can come this way' (đường bị đóng - A street is closed - B)."),
            ("Người đàn ông nói khách hàng sẽ phải làm gì?", {
                "A": "Truy cập cửa hàng trực tuyến", "B": "Xuất trình biên lai", "C": "Đỗ xe ở một khu vực khác", "D": "Lên lịch hẹn giao hàng"
            }, "Người đàn ông cho biết: 'they\\'ll have to park on another street' (đỗ xe ở phố khác - Park in a different area - C)."),
            ("Người phụ nữ sẽ làm gì tiếp theo?", {
                "A": "Hủy kế hoạch cuối tuần", "B": "Đóng cửa tiệm sớm", "C": "Lái xe chậm lại", "D": "Đăng thông tin cập nhật lên mạng xã hội"
            }, "Người phụ nữ chốt lại: 'I\\'ll update our social media page to direct our customers' (Post an update on social media - D).")
        ],
        "vocab": [("road construction", "công trình thi công đường sá", "n"), ("direct traffic", "điều hướng giao thông", "phr"), ("access on foot", "tiếp cận bằng cách đi bộ", "phr")]
    },
    {
        "range": (44, 46), "title": "Ngày đầu làm việc tại khu bảo tồn thiên nhiên",
        "speakers": ["Man", "Woman", "Man", "Woman"],
        "trans": [
            ("It's your first day working here. So we'll spend the morning surveying the walking trails so you can get a sense of the area. While we're at it, we'll also collect soil samples from different areas of the park.", "Hôm nay là ngày làm việc đầu tiên của cô ở đây. Vì vậy chúng ta sẽ dành buổi sáng để khảo sát các đường mòn đi bộ để cô nắm được địa bàn. Nhân tiện, chúng ta cũng sẽ thu thập các mẫu đất từ các khu vực khác nhau trong công viên."),
            ("We need to test the soil samples to monitor the health of the preserve, right?", "Chúng ta cần xét nghiệm mẫu đất để theo dõi tình trạng môi trường của khu bảo tồn, đúng không anh?"),
            ("Yes. We don't have a laboratory, so we send them out for testing every month. And since it's a sunny day today, it's a good time to take photographs for our social media page.", "Đúng vậy. Chúng ta không có phòng thí nghiệm, nên hàng tháng chúng ta gửi mẫu ra ngoài xét nghiệm. Và vì hôm nay trời nắng đẹp, đây là thời điểm rất tốt để chụp ảnh cho trang mạng xã hội."),
            ("I can do that. I brought my camera.", "Tôi có thể làm việc đó. Tôi đã mang theo máy ảnh của mình rồi.")
        ],
        "q_vi": [
            ("Những người nói nhiều khả năng làm việc ở đâu nhất?", {
                "A": "Tại một khu bảo tồn thiên nhiên", "B": "Tại một nông trại trồng rau", "C": "Tại một cửa hàng vật tư làm vườn", "D": "Tại một công trường xây dựng"
            }, "Họ khảo sát các đường mòn và theo dõi sức khỏe của khu bảo tồn ('health of the preserve') nên nơi làm việc là khu bảo tồn thiên nhiên (nature preserve - A)."),
            ("Những người nói sẽ làm gì với các mẫu đất?", {
                "A": "Trưng bày chúng trong tủ kính", "B": "Gửi chúng tới một phòng xét nghiệm", "C": "Phân phát cho khách tham quan", "D": "Quyên góp cho trường đại học"
            }, "Người đàn ông giải thích: 'we send them out for testing every month' (gửi đến phòng thí nghiệm kiểm tra - Send them to a laboratory - B)."),
            ("Người phụ nữ tình nguyện làm gì?", {
                "A": "Chủ trì một buổi tập huấn", "B": "Chụp một số bức ảnh", "C": "Đặt mua thêm đồ dùng", "D": "Tổ chức một chuyến tham quan"
            }, "Khi người nam nhắc chụp ảnh, người nữ hưởng ứng: 'I can do that. I brought my camera' (chụp ảnh - Take some photographs - B).")
        ],
        "vocab": [("nature preserve", "khu bảo tồn thiên nhiên", "n"), ("walking trail", "đường mòn đi bộ dã ngoại", "n"), ("soil sample", "mẫu đất kiểm nghiệm", "n"), ("laboratory", "phòng thí nghiệm", "n")]
    },
    {
        "range": (47, 49), "title": "Thay thế đội xe bưu chính bằng xe điện",
        "speakers": ["Woman", "Man", "Woman", "Man"],
        "trans": [
            ("Good morning, Ivan. Everyone's talking about the flyer that was posted on our bulletin board yesterday. Have you seen it?", "Chào buổi sáng, Ivan. Mọi người đều đang bàn tán về tờ rơi dán trên bảng thông báo hôm qua. Anh đã xem chưa?"),
            ("I was out of the office yesterday, but I've heard. Big changes are coming for all mail carriers in the city.", "Hôm qua tôi vắng mặt ở văn phòng, nhưng tôi có nghe nói rồi. Sắp có những thay đổi lớn đối với tất cả nhân viên đưa thư trong thành phố."),
            ("That's right. Our entire postal delivery fleet is being replaced with electric vehicles.", "Đúng thế. Toàn bộ đội xe giao thư bưu chính của chúng ta đang được thay thế bằng xe điện."),
            ("I just hope that we don't have to charge them every few hours. I'm concerned that the battery won't last through my entire route.", "Tôi chỉ hy vọng chúng ta không phải sạc pin vài tiếng một lần. Tôi lo lắng rằng pin sẽ không đủ dùng cho toàn bộ lộ trình giao thư của mình.")
        ],
        "q_vi": [
            ("Những người nói là ai?", {
                "A": "Trợ lý điều hành", "B": "Giám sát viên bảo trì", "C": "Nhân viên bưu điện / bưu tá đưa thư", "D": "Tài xế giao đồ ăn"
            }, "Họ nói về 'all mail carriers in the city' và 'postal delivery fleet' nên họ là các nhân viên bưu chính đưa thư (Postal workers - C)."),
            ("Điều gì đã được thông báo trong tờ rơi?", {
                "A": "Một phần mềm máy tính sẽ được thay thế", "B": "Một tòa nhà sẽ được bán", "C": "Một tuyến đường mới sẽ được bổ sung", "D": "Một số phương tiện xe cộ sẽ được thay mới"
            }, "Tờ rơi thông báo: 'entire postal delivery fleet is being replaced with electric vehicles' (thay thế đội xe bằng xe điện - Some vehicles will be replaced - D)."),
            ("Người đàn ông lo lắng về điều gì?", {
                "A": "Thời lượng pin xe sẽ kéo dài được bao lâu", "B": "Chi phí mua sắm quá đắt đỏ", "C": "Độ chính xác của dự báo thời tiết", "D": "Chương trình tập huấn có cập nhật không"
            }, "Người đàn ông bày tỏ lo ngại: 'concerned that the battery won\\'t last through my entire route' (thời lượng pin kéo dài bao lâu - How long a battery will last - A).")
        ],
        "vocab": [("mail carrier", "nhân viên đưa thư, bưu tá", "n"), ("postal delivery fleet", "đội xe giao hàng bưu điện", "n"), ("electric vehicle", "xe chạy bằng điện", "n"), ("battery life", "thời lượng sử dụng của pin", "n")]
    },
    {
        "range": (50, 52), "title": "Chào đón nhân viên lễ tân mới tại khách sạn",
        "speakers": ["Ms. Park", "Koda", "Claudia"],
        "trans": [
            ("Koda, I want you to meet Claudia. Claudia is starting work today. Could you show her around and explain some of our processes?", "Koda, tôi muốn anh gặp Claudia. Claudia bắt đầu làm việc hôm nay. Anh có thể dẫn cô ấy đi tham quan và giải thích một số quy trình làm việc của chúng ta được không?"),
            ("Of course, Ms. Park. Welcome to the team, Claudia.", "Tất nhiên rồi, chị Park. Chào mừng cô đến với đội ngũ, Claudia."),
            ("Thank you. I'm coming from the Silver Ridge Inn where I also worked at the front desk.", "Cảm ơn anh. Tôi chuyển tới từ khách sạn Silver Ridge Inn, nơi tôi cũng từng làm việc ở quầy lễ tân."),
            ("So you already have experience with taking reservations and checking in guests?", "Vậy là cô đã có kinh nghiệm đặt phòng và làm thủ tục nhận phòng cho khách rồi nhỉ?"),
            ("Yes, but we used a different software system than the one I see you have here.", "Vâng, nhưng trước đây chúng tôi dùng một phần mềm khác với phần mềm tôi thấy các bạn dùng ở đây."),
            ("It's easy to use. Let me show you how.", "Nó rất dễ sử dụng. Hãy để tôi chỉ dẫn cho cô cách dùng nhé.")
        ],
        "q_vi": [
            ("Cô Park yêu cầu người đàn ông làm gì?", {
                "A": "Hỗ trợ một nhân viên mới", "B": "Đặt chỗ cho một sự kiện", "C": "Gặp gỡ một nhà cung cấp", "D": "Chuẩn bị một bài thuyết trình"
            }, "Cô Park nhờ: 'show her around and explain some of our processes' (giúp đỡ nhân viên mới - Assist a new employee - A)."),
            ("Cuộc trò chuyện nhiều khả năng diễn ra ở đâu nhất?", {
                "A": "Tại một bảo tàng", "B": "Tại một công ty công nghệ", "C": "Tại một sân bay", "D": "Tại một khách sạn"
            }, "Các nhân vật trao đổi về 'front desk', 'taking reservations and checking in guests' nên địa điểm là khách sạn (At a hotel - D)."),
            ("Người đàn ông sẽ làm gì tiếp theo?", {
                "A": "Cung cấp phản hồi", "B": "Kiểm tra lịch làm việc", "C": "Hướng dẫn sử dụng một chương trình máy tính", "D": "Giúp đồng nghiệp tìm dụng cụ"
            }, "Khi Claudia nói về phần mềm mới, Koda bảo: 'Let me show you how' (hướng dẫn dùng phần mềm - Demonstrate a computer program - C).")
        ],
        "vocab": [("front desk", "quầy lễ tân khách sạn", "n"), ("reservation", "sự đặt chỗ, đặt phòng trước", "n"), ("check in", "làm thủ tục nhận phòng", "v"), ("demonstrate", "hướng dẫn, thị phạm cách làm", "v")]
    },
    {
        "range": (53, 55), "title": "Nhà hàng quá đông khách và phải mua đồ mang về",
        "speakers": ["Woman", "Man", "Woman", "Man"],
        "trans": [
            ("Wow, I didn't expect this restaurant to be so popular. Look at all the people waiting to be seated.", "Chà, tôi không ngờ nhà hàng này lại đông khách đến thế. Nhìn xem bao nhiêu người đang đứng chờ xếp bàn kìa."),
            ("I know. It's brand new. I didn't think anyone knew about it yet. Looks like we won't be able to get a table for a while.", "Tôi cũng thấy vậy. Nó mới mở tinh tươm. Tôi không nghĩ mọi người đã biết đến nó rồi. Có vẻ chúng ta sẽ không thể có bàn trong chốc lát được."),
            ("Well, we don't have much time. We need to drive back to the office to train our interns at 1 o'clock. Should we go somewhere else?", "Chúng ta không có nhiều thời gian. Chúng ta cần lái xe về văn phòng để tập huấn cho các thực tập sinh lúc 1 giờ. Hay chúng ta đi chỗ khác nhé?"),
            ("Let's see if they offer takeout. We can just order something to go. Good idea. I'm looking forward to trying the spicy noodles.", "Để xem họ có bán đồ mang đi không. Chúng ta có thể gọi món mang về. Ý kiến hay đấy. Tôi đang rất nóng lòng muốn thử món mì cay ở đây.")
        ],
        "q_vi": [
            ("Những người nói ngạc nhiên về điều gì ở nhà hàng?", {
                "A": "Mức giá", "B": "Sự nổi tiếng / đông khách của nó", "C": "Các món trong thực đơn", "D": "Phong cách trang trí"
            }, "Họ ngạc nhiên: 'didn\\'t expect this restaurant to be so popular... all the people waiting to be seated' (sự đông đúc, hút khách - Its popularity - B)."),
            ("Tại sao những người nói lại đang vội?", {
                "A": "Họ cần bắt kịp chuyến tàu", "B": "Họ sẽ tiến hành phỏng vấn", "C": "Họ sẽ chủ trì một buổi tập huấn", "D": "Cửa hàng sắp đóng cửa"
            }, "Họ vội vì: 'need to drive back to the office to train our interns at 1 o\\'clock' (dẫn dắt buổi đào tạo - leading a training session - C)."),
            ("Những người nói nhiều khả năng sẽ làm gì tiếp theo?", {
                "A": "Đi sang nhà hàng khác", "B": "Ăn thử món mẫu miễn phí", "C": "Đặt đồ ăn mang về", "D": "Thanh toán hóa đơn"
            }, "Họ quyết định: 'see if they offer takeout. We can just order something to go' (gọi đồ ăn mang về - Order food to go - C).")
        ],
        "vocab": [("popularity", "sự nổi tiếng, sự đón nhận nồng nhiệt", "n"), ("intern", "thực tập sinh", "n"), ("takeout / order to go", "đồ ăn mua mang về nhà/văn phòng", "n")]
    },
    {
        "range": (56, 58), "title": "Phòng tập thể hình mở thêm chi nhánh mới",
        "speakers": ["Woman", "Man", "Woman"],
        "trans": [
            ("Hi, Ahmed. Did you see the email from management? I just got here to teach my aerobics class. It looks like the gym is opening another facility just a few miles from here.", "Chào Ahmed. Anh có thấy email từ ban quản lý không? Tôi vừa đến đây để dạy lớp thể dục nhịp điệu. Có vẻ như phòng gym sắp mở thêm một cơ sở nữa chỉ cách đây vài dặm."),
            ("I'm surprised they want to open another location so close by. Well, this is a densely populated area.", "Tôi ngạc nhiên là họ muốn mở thêm một chi nhánh ở quá gần như vậy. Nhưng khu này là khu vực dân cư rất đông đúc mà."),
            ("True, I guess they'll have to hire more employees. There's just not enough of us to staff both locations.", "Đúng thế, tôi đoán họ sẽ phải tuyển thêm nhân viên thôi. Lực lượng chúng ta không đủ người để làm việc ở cả hai cơ sở.")
        ],
        "q_vi": [
            ("Những người nói nhiều khả năng làm việc ở đâu nhất?", {
                "A": "Tại một cửa hàng đồ dùng thể thao", "B": "Tại một khu cắm trại", "C": "Tại một nhà máy sản xuất giày dép", "D": "Tại một trung tâm thể hình / phòng gym"
            }, "Người phụ nữ đến dạy lớp 'aerobics class' và bàn về việc 'gym is opening another facility' nên họ làm ở phòng tập gym (fitness center - D)."),
            ("Tại sao người đàn ông lại nói, \"đây là một khu vực có mật độ dân cư đông đúc\"?", {
                "A": "Để phàn nàn rằng giao thông ùn tắc", "B": "Để đề xuất sửa đổi các quy định", "C": "Để giải thích cho một quyết định", "D": "Để yêu cầu thẩm định lại giá bất động sản"
            }, "Người đàn ông nói câu này để giải thích vì sao ban quản lý lại quyết định mở thêm chi nhánh gần như vậy (To explain a decision - C)."),
            ("Người phụ nữ nghĩ doanh nghiệp nên làm gì?", {
                "A": "Tuyển dụng thêm nhân viên", "B": "Đặt một đơn hàng lớn", "C": "Chỉnh sửa sổ tay nhân viên", "D": "Chạy quảng cáo trên mạng xã hội"
            }, "Người phụ nữ nhận định: 'they\\'ll have to hire more employees. There\\'s just not enough of us' (tuyển thêm nhân sự - Hire more employees - A).")
        ],
        "vocab": [("fitness center", "trung tâm thể dục thể hình", "n"), ("aerobics", "môn thể dục nhịp điệu", "n"), ("densely populated", "mật độ dân số đông đúc", "adj"), ("staff", "bố trí nhân sự làm việc", "v")]
    },
    {
        "range": (59, 61), "title": "Lên kế hoạch hoạt động gắn kết đội ngũ trực tuyến",
        "speakers": ["Woman", "Man", "Woman", "Man", "Woman"],
        "trans": [
            ("Marcel, I'd like to plan a team building event with our graphic design group.", "Marcel, tôi muốn lên kế hoạch cho một sự kiện xây dựng đội ngũ gắn kết cho nhóm thiết kế đồ họa của chúng ta."),
            ("Sure. We could reserve the conference room upstairs.", "Được chứ. Chúng ta có thể đặt trước phòng hội nghị ở tầng trên."),
            ("But the event wouldn't be just for on-site graphic designers. Nearly a third of our staff will be participating remotely.", "Nhưng sự kiện này không chỉ dành cho các nhà thiết kế làm việc tại văn phòng đâu. Gần một phần ba nhân viên của chúng ta sẽ tham gia từ xa đấy."),
            ("Oh, you're right. Everyone needs to feel equally included. Let's have our on-site staff join the event from their desks.", "Ồ cô nói đúng. Mọi người đều cần cảm thấy được hòa nhập như nhau. Hãy để nhân viên tại văn phòng tham gia sự kiện ngay tại bàn làm việc của họ luôn."),
            ("OK. I'll do a search for effective team building activities that we can do online.", "Được rồi. Tôi sẽ tìm kiếm các hoạt động team building hiệu quả mà chúng ta có thể tổ chức trực tuyến.")
        ],
        "q_vi": [
            ("Cuộc trò chuyện nói về chủ đề gì?", {
                "A": "Tổ chức một sự kiện", "B": "Chuẩn bị cho việc cải tạo", "C": "Cập nhật một số phần mềm", "D": "Lựa chọn đơn vị cung cấp tiệc"
            }, "Họ lên kế hoạch: 'plan a team building event with our graphic design group' (tổ chức sự kiện gắn kết - Organizing an event - A)."),
            ("Người phụ nữ ngụ ý điều gì khi nói: \"Gần một phần ba nhân viên của chúng ta sẽ tham gia từ xa\"?", {
                "A": "Chi phí đi lại cần được hoàn trả", "B": "Một số nhân viên có thể cảm thấy bị gạt ra ngoài lề / không được hòa nhập", "C": "Địa điểm tổ chức không đúng kích cỡ", "D": "Buổi hội thảo nên được hoãn lại"
            }, "Cô ấy nhấn mạnh điều này vì muốn nhắc đồng nghiệp tránh tổ chức trực tiếp khiến những người làm từ xa bị cô lập (Some workers may feel excluded - B)."),
            ("Người phụ nữ sẽ làm gì tiếp theo?", {
                "A": "Xem xét lại chương trình nghị sự", "B": "Đặt chỗ địa điểm tổ chức sự kiện", "C": "Tìm kiếm các hoạt động trực tuyến", "D": "Kiểm tra lại ngân sách"
            }, "Người phụ nữ chốt: 'I\\'ll do a search for effective team building activities that we can do online' (tìm hoạt động online - Research some online activities - C).")
        ],
        "vocab": [("team building", "hoạt động xây dựng tinh thần đồng đội", "n"), ("remotely", "từ xa (qua mạng internet)", "adv"), ("feel excluded", "cảm thấy bị loại trừ, ngoài cuộc", "phr")]
    },
    {
        "range": (62, 64), "title": "Xem bàn cà phê tại tầng 3 và lối đi cho xe lăn",
        "speakers": ["Man", "Woman", "Man", "Woman", "Man"],
        "trans": [
            ("Hi. I'm calling because I saw some coffee tables on your department store's website. I was wondering if you carry them in the store as well.", "Xin chào. Tôi gọi điện vì thấy một số mẫu bàn cà phê trên trang web của trung tâm thương mại các bạn. Tôi băn khoăn không biết ở cửa hàng có bày bán các mẫu đó không."),
            ("Yes, we have our entire furniture collection on display. So you'll be able to see everything that's on our online catalog.", "Có chứ, chúng tôi trưng bày toàn bộ bộ sưu tập đồ nội thất. Vì vậy ông sẽ có thể xem mọi thứ có trên danh mục trực tuyến."),
            ("OK. One more thing. I use a wheelchair, and I'm concerned about navigating your store.", "Được rồi. Còn một điều nữa. Tôi phải dùng xe lăn, và tôi hơi lo ngại về việc di chuyển trong cửa hàng của bạn."),
            ("Oh, that's not a problem. We have large elevators that can easily accommodate a wheelchair.", "Ồ, điều đó không thành vấn đề đâu ạ. Chúng tôi có các thang máy lớn có thể dễ dàng chứa vừa xe lăn."),
            ("Great. Thanks for the information. I'll stop by later this afternoon.", "Tuyệt vời. Cảm ơn cô về thông tin nhé. Chiều nay tôi sẽ ghé qua.")
        ],
        "q_vi": [
            ("Nhìn vào hình ảnh đồ họa. Người đàn ông sẽ lên tầng nào?", {
                "A": "Tầng 1", "B": "Tầng 2", "C": "Tầng 3", "D": "Tầng 4"
            }, "Người đàn ông hỏi mua 'coffee tables' (bàn cà phê thuộc ngành hàng Đồ nội thất - Furniture). Nhìn sơ đồ tầng, Furniture nằm ở Tầng 3 (Floor 3 - C)."),
            ("Tại sao người đàn ông lại gọi điện cho cửa hàng?", {
                "A": "Để khiếu nại về việc nhận sản phẩm lỗi", "B": "Để chỉ ra sai sót trong hóa đơn", "C": "Để hỏi về việc xem tận mắt một số hàng hóa", "D": "Để yêu cầu gửi một cuốn catalogue"
            }, "Người đàn ông hỏi xem cửa hàng có bày bán bàn để đến xem không: 'wondering if you carry them in the store as well' (xem hàng hóa - ask about seeing some merchandise - C)."),
            ("Người phụ nữ cam đoan với người đàn ông về điều gì?", {
                "A": "Hệ thống thanh toán trực tuyến an toàn", "B": "Tòa nhà có lối đi thuận tiện cho xe lăn", "C": "Sản phẩm đủ điều kiện hoàn tiền", "D": "Khu ẩm thực mở cửa hàng ngày"
            }, "Người phụ nữ trấn an: 'We have large elevators that can easily accommodate a wheelchair' (tòa nhà thuận tiện cho xe lăn - wheelchair accessible - B).")
        ],
        "vocab": [("coffee table", "bàn uống trà / bàn cà phê phòng khách", "n"), ("furniture", "đồ nội thất gia đình", "n"), ("wheelchair accessible", "có lối đi thuận tiện cho người đi xe lăn", "adj"), ("accommodate", "chứa được, đáp ứng được", "v")]
    },
    {
        "range": (65, 67), "title": "Đặt chuyến bay đi Kyoto theo chính sách công ty",
        "speakers": ["Woman", "Man", "Woman", "Man"],
        "trans": [
            ("Adam, our Kyoto office just called. Our investors want me to present a project update there as soon as possible. Can you get me on the first flight to Kyoto tomorrow morning?", "Adam, văn phòng Kyoto của chúng ta vừa gọi điện. Các nhà đầu tư muốn tôi thuyết trình cập nhật dự án ở đó càng sớm càng tốt. Anh có thể đặt cho tôi chuyến bay đầu tiên đến Kyoto vào sáng mai được không?"),
            ("Let me check. Per company policy, we can only use Blue Jet airlines for international travel. And unfortunately, that flight's not the first one out tomorrow.", "Để tôi kiểm tra xem. Theo chính sách công ty, chúng ta chỉ được phép sử dụng hãng hàng không Blue Jet cho các chuyến công tác quốc tế. Và tiếc là chuyến bay của hãng đó không phải là chuyến sớm nhất ngày mai."),
            ("That will have to do. Thanks. And I'll need a ride to the airport too. Can you arrange that?", "Vậy thì đành phải đi chuyến đó thôi. Cảm ơn anh. Và tôi cũng sẽ cần xe đưa ra sân bay nữa. Anh có thể sắp xếp việc đó không?"),
            ("Sure thing. I'll finalize the reservations and email you the details.", "Chắc chắn rồi. Tôi sẽ chốt các đặt chỗ và gửi email chi tiết cho cô.")
        ],
        "q_vi": [
            ("Tại sao người phụ nữ cần phải đến Kyoto?", {
                "A": "Để tham dự một hội nghị", "B": "Để ký kết hợp đồng", "C": "Để tìm kiếm các nhà đầu tư", "D": "Để báo cáo tiến độ một dự án"
            }, "Mục đích chuyến đi: 'Our investors want me to present a project update there' (báo cáo dự án - report on a project - D)."),
            ("Nhìn vào hình ảnh đồ họa. Người phụ nữ sẽ khởi hành đi Kyoto lúc mấy giờ?", {
                "A": "Lúc 6:02 sáng", "B": "Lúc 8:15 sáng", "C": "Lúc 9:07 sáng", "D": "Lúc 10:20 sáng"
            }, "Quy định công ty chỉ được bay hãng Blue Jet: 'we can only use Blue Jet airlines'. Đối chiếu bảng giờ bay, Blue Jet cất cánh lúc 9:07 A.M. (C)."),
            ("Người đàn ông nói anh ấy sẽ làm gì?", {
                "A": "Lái xe đưa người phụ nữ ra sân bay", "B": "Đặt phòng khách sạn", "C": "Gửi thông tin chi tiết qua email", "D": "In thẻ lên máy bay"
            }, "Người đàn ông hứa: 'I\\'ll finalize the reservations and email you the details' (gửi thông tin qua email - E-mail some information - C).")
        ],
        "vocab": [("investor", "nhà đầu tư", "n"), ("project update", "bản cập nhật tiến độ dự án", "n"), ("company policy", "chính sách quy định của công ty", "n"), ("departure time", "giờ khởi hành cất cánh", "n")]
    },
    {
        "range": (68, 70), "title": "Tin độc quyền về vị trí xây sân vận động mới",
        "speakers": ["Man", "Woman", "Man", "Woman"],
        "trans": [
            ("Hi, Astrid. For tonight's 6 o'clock news broadcast, the lead story is going to be on the rumor that the Beavers football team is going to build a stadium. Have you heard about the project?", "Chào Astrid. Cho bản tin thời sự 6 giờ tối nay, tin tức tiêu điểm sẽ là tin đồn đội bóng đá Beavers chuẩn bị xây dựng sân vận động mới. Cô đã nghe gì về dự án này chưa?"),
            ("My sources have confirmed the story, actually. I've just gained exclusive access to some bidding proposals. Four cities are competing for the project.", "Thực ra các nguồn tin của tôi đã xác nhận thông tin này rồi. Tôi vừa có được quyền tiếp cận độc quyền vào một số hồ sơ dự thầu. Bốn thành phố đang cạnh tranh cho dự án này."),
            ("It's great you were able to confirm this before we went on the air. Do you know where the new stadium might be built?", "Thật tuyệt vời khi cô đã xác minh được điều này trước khi chúng ta lên sóng. Cô có biết sân vận động mới nhiều khả năng sẽ được xây ở đâu không?"),
            ("Well, one document suggests that Columbia City's proposal is the favorite. However, the team does have three other bids to consider.", "Một tài liệu cho thấy đề xuất của thành phố Columbia City đang là ứng viên sáng giá nhất. Tuy nhiên, đội bóng vẫn còn ba gói thầu khác để cân nhắc.")
        ],
        "q_vi": [
            ("Những người nói nhiều khả năng là ai nhất?", {
                "A": "Các kiến trúc sư", "B": "Các quan chức chính phủ", "C": "Các phóng viên thời sự / truyền hình", "D": "Các nhà thầu xây dựng"
            }, "Họ trao đổi về tin tức tiêu điểm cho bản tin 6 giờ ('tonight\\'s 6 o\\'clock news broadcast... before we went on the air') nên họ là các phóng viên tin tức (News reporters - C)."),
            ("Người phụ nữ nói cô ấy đã có quyền tiếp cận tài liệu gì?", {
                "A": "Mẫu thiết kế đồng phục", "B": "Vé xem sự kiện thể thao", "C": "Xe của công ty", "D": "Các hồ sơ đấu thầu dự án"
            }, "Người phụ nữ tiết lộ: 'gained exclusive access to some bidding proposals' (tiếp cận hồ sơ dự thầu - Bid proposals - D)."),
            ("Nhìn vào hình ảnh đồ họa. Theo người phụ nữ, sân vận động nhiều khả năng sẽ đặt ở vị trí nào nhất?", {
                "A": "Tại vị trí A", "B": "Tại vị trí B", "C": "Tại vị trí C", "D": "Tại vị trí D"
            }, "Đề xuất của Columbia City là sáng giá nhất ('Columbia City\\'s proposal is the favorite'). Nhìn trên bản đồ, Columbia City ứng với vị trí C (Site C - C).")
        ],
        "vocab": [("broadcast", "chương trình phát sóng phát thanh/truyền hình", "n/v"), ("exclusive access", "quyền tiếp cận độc quyền", "n"), ("bidding proposal", "hồ sơ dự thầu", "n"), ("on the air", "đang lên sóng phát thanh/truyền hình", "phr")]
    }
]

part3_items = []
for p in p3_metadata:
    s_q, e_q = p["range"]
    sk = skeleton[31 + (s_q - 32) // 3]  # skeleton items 31 to 43
    
    # Clean dialogue lines
    dialogue_entries = []
    for idx, (en, vi) in enumerate(p["trans"]):
        speaker = p["speakers"][idx % len(p["speakers"])]
        dialogue_entries.append({
            "id": f"p3-{s_q}-{idx+1}",
            "speaker": speaker,
            "text": en,
            "vietnamese": vi
        })
    
    questions_list = []
    for q_idx in range(3):
        cur_q = s_q + q_idx
        q_meta = p["q_vi"][q_idx]
        sk_q = sk["questions"][q_idx]
        
        # Build options
        opts = []
        for letter in ["A", "B", "C", "D"]:
            opt_en = sk_q["options"][letter]
            # Clean up OCR concatenation and footer junk
            opt_en = opt_en.split("GOON")[0].split("TEST7")[0].split("PART")[0].split("neListening")[0].strip()
            opt_vi = q_meta[1][letter]
            opts.append({
                "key": letter,
                "text": opt_en,
                "vietnamese": opt_vi
            })
            
        questions_list.append({
            "num": cur_q,
            "question": sk_q["question"].split("GOON")[0].strip(),
            "vietnameseQuestion": q_meta[0],
            "options": opts,
            "correctAnswer": sk_q["correctAnswer"],
            "explanation": q_meta[2]
        })
        
    item_dict = {
        "id": sk["id"],
        "part": 3,
        "partTitle": "Part 3: Đoạn hội thoại",
        "questionRange": f"Câu {s_q} - {e_q}",
        "title": f"Part 3 - Câu {s_q}-{e_q}: {p['title']}",
        "audioSrc": "/audio/test7_2024.mp3",
        "startTime": sk["startTime"],
        "endTime": sk["endTime"],
        "transcript": dialogue_entries,
        "questions": questions_list,
        "vocabulary": [{"word": w, "meaning": m, "partOfSpeech": pos} for w, m, pos in p["vocab"]]
    }
    if s_q in [62, 65, 68]:
        img_path = f"/images/intensive/test7_2024/q{s_q}_{e_q}.png"
        item_dict["image"] = img_path
        item_dict["graphicImage"] = img_path
        
    part3_items.append(item_dict)

# Part 4: 10 items
p4_metadata = [
    {
        "range": (71, 73), "title": "Quảng cáo các khóa học kinh doanh tại trường cao đẳng Winston",
        "trans": [
            ("Are you interested in learning how to start your own business? Winston Community College is the place for you.", "Bạn có quan tâm đến việc học cách tự khởi nghiệp kinh doanh không? Trường Cao đẳng Cộng đồng Winston chính là nơi dành cho bạn."),
            ("Last month, we opened a new campus in Cedarview that offers lots of business courses to equip aspiring entrepreneurs with the tools to launch a new career.", "Tháng trước, chúng tôi đã khai trương một cơ sở mới tại Cedarview, cung cấp rất nhiều khóa học kinh doanh để trang bị cho các doanh nhân tương lai những công cụ cần thiết để bắt đầu sự nghiệp mới."),
            ("We offer flexible schedules so you can take courses in the evenings or on weekends. Visit us at our new campus or online to submit your application.", "Chúng tôi cung cấp lịch học linh hoạt để bạn có thể tham gia các khóa học vào buổi tối hoặc cuối tuần. Hãy đến thăm cơ sở mới của chúng tôi hoặc truy cập trực tuyến để nộp hồ sơ đăng ký nhé.")
        ],
        "q_vi": [
            ("Điều gì đang được quảng cáo?", {
                "A": "Một công ty kế toán", "B": "Một văn phòng bất động sản", "C": "Một công ty vận tải xe tải", "D": "Một trường cao đẳng cộng đồng"
            }, "Bài nói giới thiệu trực tiếp: 'Winston Community College is the place for you' (trường cao đẳng cộng đồng - A community college - D)."),
            ("Điều gì đã diễn ra vào tháng trước?", {
                "A": "Một trang web đã được ra mắt", "B": "Một vụ sáp nhập công ty đã hoàn tất", "C": "Một địa điểm mới đã được mở", "D": "Một giám đốc mới đã được tuyển dụng"
            }, "Người nói thông báo: 'Last month, we opened a new campus in Cedarview' (mở cơ sở/địa điểm mới - A new location was opened - C)."),
            ("Người nghe được mời làm gì?", {
                "A": "Tham gia một nhóm trực tuyến", "B": "Tham gia vào một cuộc nghiên cứu", "C": "Tham dự một buổi hội thảo", "D": "Nộp đơn đăng ký xét tuyển"
            }, "Lời kêu gọi cuối bài: 'Visit us... or online to submit your application' (nộp đơn đăng ký - Submit an application - D).")
        ],
        "vocab": [("entrepreneur", "doanh nhân, người khởi nghiệp", "n"), ("flexible schedule", "lịch trình linh hoạt", "n"), ("campus", "khuôn viên trường học, cơ sở đào tạo", "n"), ("submit application", "nộp đơn đăng ký", "phr")]
    },
    {
        "range": (74, 76), "title": "Thông báo buổi gặp mặt mừng tiến độ nghiên cứu sinh hóa",
        "trans": [
            ("Please be sure to mark your calendars for a get-together on April 16th. We all work on different biochemistry research projects and it's nice to share and celebrate our progress.", "Xin mọi người hãy nhớ đánh dấu vào lịch cho buổi họp mặt vào ngày 16 tháng 4. Tất cả chúng ta đều đang thực hiện các dự án nghiên cứu hóa sinh khác nhau và thật tuyệt vời khi cùng chia sẻ và chúc mừng những tiến bộ đã đạt được."),
            ("Sung-Hee has reserved us rooms at a conference center off site where we'll be able to relax outdoors after our sessions. Thanks for taking care of that, Sung-Hee.", "Sung-Hee đã đặt phòng cho chúng ta tại một trung tâm hội nghị bên ngoài công ty, nơi chúng ta có thể thư giãn ngoài trời sau các phiên họp. Cảm ơn Sung-Hee đã chu đáo lo liệu việc đó."),
            ("A few of you have asked whether we can hold other social events throughout the year. We don't have the budget to do anything big, but I'd like to hear your ideas. Everyone has my email address.", "Một vài người trong số các bạn đã hỏi liệu chúng ta có thể tổ chức các sự kiện giao lưu khác trong năm không. Chúng ta không có đủ ngân sách để làm điều gì quá lớn, nhưng tôi rất muốn lắng nghe ý kiến đóng góp của các bạn. Mọi người đều có địa chỉ email của tôi rồi đấy.")
        ],
        "q_vi": [
            ("Sự kiện gì được lên lịch vào ngày 16 tháng 4?", {
                "A": "Một bữa tiệc trao giải", "B": "Một buổi trình diễn phần mềm", "C": "Một buổi liên hoan kỷ niệm của công ty", "D": "Một ngày quốc lễ"
            }, "Buổi gặp mặt để chia sẻ thành quả: 'get-together on April 16th... celebrate our progress' (buổi liên hoan nội bộ kỷ niệm - A company celebration - C)."),
            ("Người nói cảm ơn Sung-Hee vì đã làm điều gì?", {
                "A": "Trình bày nghiên cứu của cô ấy", "B": "Phê duyệt ngân sách", "C": "Gửi email chương trình làm việc", "D": "Đặt trước địa điểm tổ chức"
            }, "Người nói cảm ơn: 'Sung-Hee has reserved us rooms at a conference center... Thanks for taking care of that' (đặt chỗ - Reserving some space - D)."),
            ("Tại sao người nói lại nói, \"Mọi người đều có địa chỉ email của tôi rồi\"?", {
                "A": "Để ngăn người nghe gọi điện thoại cho anh ấy", "B": "Để phàn nàn rằng anh ấy nhận được quá nhiều email", "C": "Để giải thích cách anh ấy biết về một cơ hội", "D": "Để khuyến khích người nghe đưa ra các đề xuất ý kiến"
            }, "Sau khi nói muốn nghe ý kiến ('like to hear your ideas'), người nói nói câu này để khuyến khích mọi người gửi ý tưởng qua email (To encourage the listeners to make suggestions - D).")
        ],
        "vocab": [("biochemistry", "ngành hóa sinh", "n"), ("get-together", "buổi tụ họp, gặp mặt thân mật", "n"), ("off-site", "bên ngoài trụ sở làm việc", "adj/adv"), ("progress", "tiến độ, sự tiến bộ", "n")]
    },
    {
        "range": (77, 79), "title": "Tin nhắn thoại xin hẹn khám bác sĩ sau giải chạy bán marathon",
        "trans": [
            ("My name is Raoul Phillips. I know it's short notice, but I'm a patient at your clinic and I'd like to see a doctor today.", "Tên tôi là Raoul Phillips. Tôi biết là thông báo gấp, nhưng tôi là bệnh nhân tại phòng khám của các bạn và tôi muốn được khám bác sĩ ngay hôm nay."),
            ("I ran in a local half marathon yesterday and well, I didn't feel pain at the time but I think I sprained my ankle during the race. It's been sore since after the race and I might need an x-ray.", "Hôm qua tôi có tham gia một giải chạy bán marathon ở địa phương, và lúc đó tôi không thấy đau nhưng tôi nghĩ mình đã bị bong gân mắt cá chân trong cuộc đua. Chân tôi bị đau nhức từ sau cuộc chạy và có thể tôi sẽ cần chụp X-quang."),
            ("Could you call me back? I'll be conducting some job interviews this morning so I may not be able to answer my phone but please leave a message. My number is 555-0167. Thanks.", "Các bạn có thể gọi lại cho tôi được không? Sáng nay tôi sẽ chủ trì một số cuộc phỏng vấn tuyển dụng nên có thể không bắt máy được, nhưng xin vui lòng để lại lời nhắn. Số của tôi là 555-0167. Cảm ơn các bạn.")
        ],
        "q_vi": [
            ("Tại sao người nói lại gọi điện?", {
                "A": "Để xin một bản sao hồ sơ y tế", "B": "Để bày tỏ sự quan tâm đến một công việc", "C": "Để phàn nàn về một dịch vụ", "D": "Để yêu cầu một cuộc hẹn khám"
            }, "Người nói nêu lý do: 'patient at your clinic and I\\'d like to see a doctor today' (yêu cầu đặt lịch hẹn - request an appointment - D)."),
            ("Người nói gần đây đã tham gia sự kiện nào?", {
                "A": "Một lễ hội nghệ thuật", "B": "Một cuộc thi thể thao", "C": "Một hội chợ việc làm", "D": "Một chuyến đi bộ tham quan"
            }, "Người nói cho biết: 'ran in a local half marathon yesterday' (tham gia giải chạy bán marathon - An athletic competition - B)."),
            ("Người nói cho biết anh ấy sẽ làm gì vào sáng nay?", {
                "A": "Đi lấy đồ dùng", "B": "Tiến hành các cuộc phỏng vấn", "C": "Thực hiện một bài thuyết trình", "D": "Tham quan một cơ sở"
            }, "Người nói dặn: 'I\\'ll be conducting some job interviews this morning' (phỏng vấn tuyển dụng - Holding interviews - B).")
        ],
        "vocab": [("half marathon", "giải chạy bán marathon (21 km)", "n"), ("sprain one's ankle", "bong gân mắt cá chân", "phr"), ("x-ray", "chụp phim X-quang", "n"), ("conduct interviews", "tiến hành các cuộc phỏng vấn", "phr")]
    },
    {
        "range": (80, 82), "title": "Điện thoại đàm phán hợp đồng phân phối ngũ cốc ăn sáng",
        "trans": [
            ("This is Giovanni calling from Salazar Market. We're excited about selling your breakfast cereal in our store. Our customers have been asking for your brand for several months now.", "Tôi là Giovanni gọi từ Siêu thị Salazar Market. Chúng tôi rất hào hứng với việc bày bán sản phẩm ngũ cốc ăn sáng của công ty bạn tại cửa hàng chúng tôi. Khách hàng đã hỏi tìm thương hiệu của bạn suốt mấy tháng nay rồi."),
            ("I'll be emailing you a contract later today. You can sign it and send it back to me at your convenience. It states that we'll be displaying your cereals at the end of an aisle on the end cap as you requested.", "Tôi sẽ gửi email hợp đồng cho bạn vào cuối ngày hôm nay. Bạn có thể ký và gửi lại cho tôi khi thuận tiện. Hợp đồng ghi rõ chúng tôi sẽ trưng bày ngũ cốc của bạn ở đầu kệ cuối lối đi như bạn đã yêu cầu."),
            ("We'll want to make sure we have enough boxes in the store to create a nice display and keep the shelves well stocked for you.", "Chúng tôi muốn đảm bảo cửa hàng có đủ số lượng thùng hàng để tạo một khu trưng bày đẹp mắt và giữ cho các kệ luôn đầy ắp hàng hóa cho bạn.")
        ],
        "q_vi": [
            ("Người nghe sản xuất mặt hàng gì?", {
                "A": "Đồ nội thất", "B": "Thiết bị điện tử", "C": "Thực phẩm", "D": "Phương tiện giao thông"
            }, "Siêu thị muốn bán 'breakfast cereal' (ngũ cốc ăn sáng thuộc nhóm mặt hàng thực phẩm - Food - C)."),
            ("Người nói cho biết anh ấy sẽ gửi cho người nghe tài liệu gì?", {
                "A": "Một bản hợp đồng", "B": "Lịch giao hàng", "C": "Một số ý tưởng trưng bày", "D": "Một số phiếu giảm giá"
            }, "Người nói thông báo: 'I\\'ll be emailing you a contract later today' (gửi hợp đồng qua email - A contract - A)."),
            ("Người nói khuyên nên làm điều gì?", {
                "A": "Hạ giá bán", "B": "Quảng cáo trên báo chí", "C": "Phát triển các hương vị mới", "D": "Gửi nhiều hàng tồn kho / cung cấp đủ lượng hàng"
            }, "Người nói nhấn mạnh: 'make sure we have enough boxes in the store... keep the shelves well stocked' (cung cấp nhiều hàng hóa - Sending plenty of inventory - D).")
        ],
        "vocab": [("breakfast cereal", "ngũ cốc ăn sáng", "n"), ("contract", "hợp đồng kinh tế", "n"), ("end cap", "đầu kệ trưng bày sản phẩm nổi bật", "n"), ("well stocked", "được chất đầy hàng hóa", "adj"), ("inventory", "hàng tồn kho, lượng hàng hóa", "n")]
    },
    {
        "range": (83, 85), "title": "Họp rút kinh nghiệm về chảo thu sóng internet vệ tinh",
        "trans": [
            ("Team, let's debrief on the trial run of the DQY5, our satellite internet system. As you know, the DQY5 is a small satellite dish that can be used to access the internet in remote locations.", "Cả đội, chúng ta hãy cùng họp đánh giá về đợt chạy thử nghiệm thiết bị DQY5, hệ thống internet vệ tinh của chúng ta. Như các bạn đã biết, DQY5 là một đĩa vệ tinh cỡ nhỏ dùng để truy cập internet ở những vùng xa xôi hẻo lánh."),
            ("Test users have said that it generally works very well. However, they all report service interruptions when winter storms cover the satellite dish in snow.", "Người dùng thử nghiệm cho biết thiết bị nhìn chung hoạt động rất tốt. Tuy nhiên, tất cả họ đều báo cáo tình trạng gián đoạn dịch vụ khi các cơn bão mùa đông phủ đầy tuyết lên chảo thu vệ tinh."),
            ("That means we need to focus on designing an internal system that can heat up the satellite receiver and melt the snow to ensure that the connection is not disrupted. Let's break into groups of three and start brainstorming technical solutions.", "Điều đó có nghĩa chúng ta cần tập trung thiết kế một hệ thống sưởi bên trong để làm nóng đầu thu vệ tinh và làm tan tuyết, nhằm đảm bảo kết nối không bị gián đoạn. Bây giờ chúng ta hãy chia thành các nhóm ba người và bắt đầu thảo luận tìm giải pháp kỹ thuật nhé.")
        ],
        "q_vi": [
            ("Đội ngũ đã phát triển loại sản phẩm nào?", {
                "A": "Một robot làm việc nhà", "B": "Một ứng dụng di động cập nhật thời tiết", "C": "Một chảo vệ tinh để truy cập Internet", "D": "Một đồng hồ thông minh theo dõi sức khỏe"
            }, "Sản phẩm là 'satellite internet system... small satellite dish that can be used to access the internet' (chảo vệ tinh truy cập mạng - A satellite dish for Internet access - C)."),
            ("Điều gì đã gây ra sự cố cho một số người dùng?", {
                "A": "Lựa chọn màn hình bị hạn chế", "B": "Thời lượng pin ngắn", "C": "Hướng dẫn không rõ ràng", "D": "Điều kiện thời tiết xấu"
            }, "Sự cố xảy ra khi: 'winter storms cover the satellite dish in snow' (bão tuyết mùa đông - Poor weather conditions - D)."),
            ("Người nghe nhiều khả năng sẽ làm gì tiếp theo?", {
                "A": "Nghỉ giải lao", "B": "Làm việc theo các nhóm nhỏ", "C": "Đi thăm cơ sở sản xuất", "D": "Thực hiện một số phép đo đạc"
            }, "Người nói yêu cầu: 'Let\\'s break into groups of three and start brainstorming' (chia nhóm làm việc - Work in small groups - B).")
        ],
        "vocab": [("debrief", "họp đánh giá rút kinh nghiệm", "v"), ("satellite dish", "chảo thu sóng vệ tinh", "n"), ("remote location", "khu vực vùng sâu vùng xa", "n"), ("service interruption", "sự gián đoạn dịch vụ", "n"), ("brainstorm", "động não tìm giải pháp", "v")]
    },
    {
        "range": (86, 88), "title": "Thông báo hoãn buổi hòa nhạc và tuyển tình nguyện viên",
        "trans": [
            ("Thanks for joining us for this evening's Community Orchestra Performance. The concert was scheduled to begin at 8 p.m. Unfortunately, some of the microphones aren't working.", "Cảm ơn quý vị đã đến tham dự buổi biểu diễn của Dàn nhạc Giao hưởng Cộng đồng tối nay. Buổi hòa nhạc theo lịch bắt đầu lúc 8 giờ tối. Thật không may, một số micro đang không hoạt động."),
            ("So while our sound engineers are correcting the issue, I'd like to tell you about an opportunity to help the theater. You may notice that all our ushers are volunteers and we're always looking for more.", "Vì vậy trong khi các kỹ sư âm thanh của chúng tôi đang khắc phục sự cố, tôi muốn chia sẻ với quý vị về một cơ hội giúp đỡ nhà hát. Quý vị có thể nhận thấy tất cả nhân viên soát vé hướng dẫn chỗ ngồi của chúng tôi đều là tình nguyện viên, và chúng tôi luôn tìm kiếm thêm người."),
            ("Ushers take tickets, help patrons find their seats, and then of course, get to enjoy the concert for free. If you're interested, be sure to check page four of your program booklet for more details.", "Nhân viên hướng dẫn sẽ soát vé, giúp khán giả tìm chỗ ngồi, và sau đó dĩ nhiên là được thưởng thức buổi hòa nhạc hoàn toàn miễn phí. Nếu quý vị quan tâm, hãy nhớ xem trang bốn trong cuốn sổ tay chương trình để biết thêm chi tiết.")
        ],
        "q_vi": [
            ("Tại sao người nói lại nói: \"Thật không may, một số micro đang không hoạt động\"?", {
                "A": "Để đề xuất mua thiết bị mới", "B": "Để khuyên nên đổi địa điểm tổ chức", "C": "Để yêu cầu khán giả giữ trật tự", "D": "Để xin lỗi về sự chậm trễ bắt đầu chương trình"
            }, "Người nói thông báo sự cố micro để giải thích và xin lỗi khán giả vì buổi hòa nhạc 8 giờ chưa thể bắt đầu đúng giờ (To apologize for a delay - D)."),
            ("Khán giả được mời làm điều gì?", {
                "A": "Nâng hạng vé của họ", "B": "Trở thành các tình nguyện viên", "C": "Tham gia một cuộc thi", "D": "Đặt câu hỏi cho các nghệ sĩ biểu diễn"
            }, "Nhà hát đang kêu gọi: 'all our ushers are volunteers and we\\'re always looking for more' (trở thành tình nguyện viên - Become volunteers - B)."),
            ("Người nói cho biết thông tin chi tiết có thể tìm thấy ở đâu?", {
                "A": "Trên một biển báo được dán", "B": "Tại quầy bán vé", "C": "Trong một cuốn sổ tay chương trình", "D": "Trên một trang web"
            }, "Người nói hướng dẫn: 'check page four of your program booklet for more details' (trong cuốn sách giới thiệu chương trình - In a program booklet - C).")
        ],
        "vocab": [("orchestra", "dàn nhạc giao hưởng", "n"), ("usher", "nhân viên hướng dẫn chỗ ngồi, soát vé", "n"), ("patron", "khách quen, khán thính giả", "n"), ("program booklet", "cuốn sổ tay giới thiệu chương trình biểu diễn", "n")]
    },
    {
        "range": (89, 91), "title": "Tập huấn phần mềm quản lý dự án System ACE",
        "trans": [
            ("I'm Natalie from Acroide Technologies, and I'm here to train everyone on using System ACE, your new project management software.", "Tôi là Natalie từ công ty Công nghệ Acroide Technologies, và tôi ở đây để tập huấn cho mọi người cách sử dụng System ACE, phần mềm quản lý dự án mới của các bạn."),
            ("Since you organize and provide a venue for professional conferences and trade shows, System ACE will allow you to create separate project folders for each event. This means that event related to-do lists, schedules, and other documents for each folder will all be in one place.", "Vì các bạn chuyên tổ chức và cung cấp địa điểm cho các hội nghị chuyên nghiệp và triển lãm thương mại, System ACE sẽ cho phép các bạn tạo các thư mục dự án riêng biệt cho từng sự kiện. Điều này có nghĩa là danh sách công việc cần làm, lịch trình và các tài liệu liên quan đến sự kiện sẽ đều nằm tập trung tại một nơi."),
            ("Now, the best way to learn a new program is by using it. So please get out your tablet or laptop. We're going to try a few things together.", "Bây giờ, cách tốt nhất để học một chương trình mới là thực hành sử dụng nó. Vì vậy xin mời mọi người hãy lấy máy tính bảng hoặc máy tính xách tay ra. Chúng ta sẽ cùng nhau thực hành vài thao tác nhé.")
        ],
        "q_vi": [
            ("Trọng tâm của buổi tập huấn là gì?", {
                "A": "Sử dụng một phần mềm", "B": "Xử lý khiếu nại của khách hàng", "C": "Bảo mật các tài liệu nhạy cảm", "D": "Tạo các mẫu quảng cáo"
            }, "Mục đích buổi đào tạo: 'train everyone on using System ACE, your new project management software' (dùng phần mềm mới - Using some software - A)."),
            ("Người nghe nhiều khả năng làm việc ở đâu nhất?", {
                "A": "Tại một trung tâm hội nghị", "B": "Tại một nhà máy", "C": "Tại một nhà kho", "D": "Tại một cửa hàng bách hóa"
            }, "Người nói nêu đặc thù công việc của họ: 'organize and provide a venue for professional conferences and trade shows' (trung tâm tổ chức hội nghị - conference center - A)."),
            ("Người nói yêu cầu người nghe làm điều gì?", {
                "A": "Tạo một tài khoản mới", "B": "Mở một cuốn sổ hướng dẫn", "C": "Điền vào một biểu mẫu", "D": "Lấy một thiết bị điện tử ra"
            }, "Người nói yêu cầu: 'please get out your tablet or laptop' (lấy máy tính bảng hoặc laptop - Take out an electronic device - D).")
        ],
        "vocab": [("project management software", "phần mềm quản lý dự án", "n"), ("venue", "địa điểm tổ chức sự kiện", "n"), ("trade show", "triển lãm thương mại", "n"), ("electronic device", "thiết bị điện tử", "n")]
    },
    {
        "range": (92, 94), "title": "Hội thảo trực tuyến về hiệu quả năng lượng cho doanh nghiệp nhỏ",
        "trans": [
            ("In this online session, I'd like to discuss how small businesses like those represented here today can be more energy efficient. For example, some companies installed solar panels to reduce their electricity costs.", "Trong phiên hội thảo trực tuyến này, tôi muốn thảo luận về cách các doanh nghiệp nhỏ như những đại diện tham dự hôm nay có thể sử dụng năng lượng hiệu quả hơn. Ví dụ, một số công ty đã lắp đặt các tấm pin năng lượng mặt trời để cắt giảm chi phí tiền điện."),
            ("Now, we all have different ideas about how to conserve energy. What does your company do to reduce its carbon footprint? There's a lot of combined knowledge at this meeting. Let's take advantage of that. Please submit your questions and comments in the chat.", "Mỗi người trong chúng ta đều có những ý tưởng khác nhau về cách tiết kiệm năng lượng. Công ty của bạn đã làm gì để giảm lượng khí thải carbon? Đang có rất nhiều kiến thức được hội tụ tại cuộc họp này. Chúng ta hãy tận dụng điều đó. Xin vui lòng gửi câu hỏi và nhận xét của bạn vào ô trò chuyện."),
            ("By the way, this session is being recorded so that it's available to all participants after the session.", "Nhân tiện, buổi họp này đang được ghi hình lại để tất cả người tham dự có thể xem lại sau khi kết thúc buổi chia sẻ.")
        ],
        "q_vi": [
            ("Chủ đề của bài nói là gì?", {
                "A": "Sự hài lòng của khách hàng", "B": "Phát triển sự nghiệp", "C": "Sử dụng năng lượng hiệu quả", "D": "Quản lý thời gian"
            }, "Chủ đề được giới thiệu ngay câu mở đầu: 'how small businesses... can be more energy efficient' (hiệu quả năng lượng - Energy efficiency - C)."),
            ("Tại sao người nói lại nói, \"Có rất nhiều kiến thức được kết hợp tại cuộc họp này\"?", {
                "A": "Để khuyến khích sự tham gia đóng góp ý kiến", "B": "Để thông báo sự thay đổi chương trình nghị sự", "C": "Để nhấn mạnh tầm quan trọng của sự lãnh đạo", "D": "Để đính chính một quan niệm sai lầm"
            }, "Người nói khen ngợi kiến thức phong phú để kêu gọi mọi người tương tác: 'Let\\'s take advantage of that. Please submit your questions and comments' (khuyến khích tham gia - To encourage participation - A)."),
            ("Người nói cho biết điều gì sẽ diễn ra sau bài nói chuyện?", {
                "A": "Đồ ăn nhẹ sẽ được phục vụ", "B": "Các khoản thanh toán sẽ được thu thập", "C": "Bức ảnh tập thể sẽ được chụp", "D": "Bản ghi hình buổi họp sẽ được chia sẻ"
            }, "Người nói thông báo: 'this session is being recorded so that it\\'s available to all participants after the session' (bản ghi hình được chia sẻ - A recording will be shared - D).")
        ],
        "vocab": [("energy efficient", "tiết kiệm và sử dụng năng lượng hiệu quả", "adj"), ("solar panel", "tấm pin năng lượng mặt trời", "n"), ("carbon footprint", "dấu chân carbon, lượng khí thải carbon", "n"), ("session", "phiên họp, buổi chia sẻ", "n")]
    },
    {
        "range": (95, 97), "title": "Họp an toàn giao thông cho đội ngũ tài xế xe tải",
        "trans": [
            ("Thanks for coming to this weekly briefing. As you know, Joe's Trucking Company takes safety very seriously, and I'm glad all our drivers are able to attend today.", "Cảm ơn các bạn đã đến tham dự buổi họp giao ban hàng tuần này. Như các bạn đã biết, Công ty Vận tải Joe's rất coi trọng vấn đề an toàn, và tôi rất vui vì tất cả các tài xế của chúng ta đều có mặt đầy đủ hôm nay."),
            ("So we have five loads to deliver, including two loads of steel beams. Yasushi, you've been assigned to the car carrier. So please be sure to follow the safety checklist, especially the part about securely fastening all restraints.", "Chúng ta có năm chuyến hàng cần vận chuyển, trong đó có hai chuyến chở dầm thép. Yasushi, anh được phân công lái xe chuyên chở ô tô. Vì vậy xin vui lòng đảm bảo tuân thủ nghiêm ngặt danh mục kiểm tra an toàn, đặc biệt là phần buộc chặt chẽ tất cả các đai neo giữ."),
            ("Junko, I'm concerned the lumber you're carrying will be considered oversized. I think the company will need to obtain a permit for you. We'll talk after the meeting.", "Junko, tôi đang lo ngại chuyến gỗ mà cô chở sẽ bị coi là hàng quá khổ. Tôi nghĩ công ty sẽ cần phải xin giấy phép cho cô. Chúng ta sẽ trao đổi thêm sau cuộc họp nhé.")
        ],
        "q_vi": [
            ("Người nghe nhiều khả năng là ai nhất?", {
                "A": "Giám sát viên nhà kho", "B": "Công nhân xây dựng", "C": "Thanh tra an toàn", "D": "Các tài xế lái xe tải"
            }, "Người nói chào: 'all our drivers are able to attend today' tại công ty xe tải 'Joe\\'s Trucking Company' nên người nghe là các tài xế xe tải (Truck drivers - D)."),
            ("Người nói nhắc nhở Yasushi làm điều gì?", {
                "A": "Đỗ xe ở một vị trí khác", "B": "Tuân thủ một danh mục kiểm tra an toàn", "C": "Liên hệ với khách hàng", "D": "Kiểm tra lịch trình"
            }, "Người nói căn dặn: 'Yasushi... please be sure to follow the safety checklist' (tuân theo bảng kiểm tra - Follow a checklist - B)."),
            ("Nhìn vào hình ảnh đồ họa. Người nói lo lắng về chiều dài tải trọng nào?", {
                "A": "10 mét", "B": "13 mét", "C": "20 mét", "D": "25 mét"
            }, "Người nói lo lắng về hàng gỗ: 'concerned the lumber you\\'re carrying will be considered oversized'. Đối chiếu bảng đồ họa, mặt hàng Gỗ (Lumber) có chiều dài tải là 20 mét (20 meters - C).")
        ],
        "vocab": [("trucking company", "công ty vận tải đường bộ bằng xe tải", "n"), ("car carrier", "xe chuyên dụng chở ô tô", "n"), ("steel beam", "dầm thép xây dựng", "n"), ("lumber", "gỗ xẻ, gỗ xây dựng", "n"), ("oversized", "quá khổ, vượt quá kích thước cho phép", "adj"), ("permit", "giấy phép lưu hành", "n")]
    },
    {
        "range": (98, 100), "title": "Bản tin phát thanh về lộ trình diễu hành lễ hội",
        "trans": [
            ("Welcome to the evening news program on WXNL Radio. In local news, the much anticipated holiday parade will be held downtown this Saturday, beginning promptly at 10 a.m. on Main Street.", "Chào mừng quý thính giả đến với chương trình tin tức buổi tối trên Đài phát thanh WXNL. Trong phần tin tức địa phương, cuộc diễu hành lễ hội rất được mong đợi sẽ được tổ chức tại trung tâm thành phố vào thứ Bảy tuần này, bắt đầu chính xác lúc 10 giờ sáng trên Phố Main."),
            ("However, according to the city government's website, there's been one important change. The parade was supposed to follow a route along five city roads, but because of traffic concerns, the parade will now stop at the end of Curtis Avenue instead of continuing to the originally planned end point.", "Tuy nhiên, theo thông tin trên trang web của chính quyền thành phố, đã có một thay đổi quan trọng. Cuộc diễu hành vốn được lên kế hoạch đi qua năm tuyến đường trong thành phố, nhưng do lo ngại về ùn tắc giao thông, cuộc diễu hành giờ đây sẽ kết thúc tại điểm cuối của Đại lộ Curtis thay vì tiếp tục đi đến điểm kết thúc ban đầu."),
            ("Now in case you're wondering whether we'll have sunny skies or clouds on the day of the parade, stay tuned after the commercial break for our weekend forecast.", "Bây giờ, trong trường hợp quý vị đang băn khoăn liệu chúng ta sẽ có bầu trời nắng đẹp hay nhiều mây vào ngày diễn ra cuộc diễu hành, hãy tiếp tục lắng nghe sau phần quảng cáo thương mại để đón xem bản tin dự báo thời tiết cuối tuần của chúng tôi.")
        ],
        "q_vi": [
            ("Sự kiện gì sẽ bắt đầu lúc 10 giờ sáng thứ Bảy?", {
                "A": "Một cuộc diễu hành ngày lễ hội", "B": "Một cuộc đua xe đạp", "C": "Một tuyến xe buýt mới", "D": "Một công trình thi công đường sá"
            }, "Bản tin phát thanh nêu: 'the much anticipated holiday parade will be held downtown this Saturday, beginning promptly at 10 a.m.' (cuộc diễu hành ngày lễ - A holiday parade - A)."),
            ("Nhìn vào hình ảnh đồ họa. Con đường nào sẽ bị loại trừ khỏi lộ trình?", {
                "A": "Phố Oak Street", "B": "Đường Lake Drive", "C": "Đại lộ Curtis Avenue", "D": "Phố Broad Street"
            }, "Cuộc diễu hành ban đầu dự kiến đi đến cuối phố Broad Street (End ban đầu), nhưng đã đổi kết thúc tại cuối đại lộ Curtis Avenue. Do đó, đoạn đường Broad Street bị loại bỏ hoàn toàn (Broad Street - D)."),
            ("Thính giả sẽ được nghe điều gì sau giờ nghỉ quảng cáo?", {
                "A": "Một bản báo cáo tài chính", "B": "Một bản tin dự báo thời tiết", "C": "Một cuộc phỏng vấn với quan chức chính phủ", "D": "Một buổi biểu diễn âm nhạc trực tiếp"
            }, "Phát thanh viên nhắn: 'stay tuned after the commercial break for our weekend forecast' (dự báo thời tiết - A weather forecast - B).")
        ],
        "vocab": [("holiday parade", "cuộc diễu hành lễ hội", "n"), ("route", "tuyến đường, lộ trình di chuyển", "n"), ("commercial break", "thời gian nghỉ phát quảng cáo trên sóng", "n"), ("forecast", "bản tin dự báo thời tiết", "n")]
    }
]

part4_items = []
for p in p4_metadata:
    s_q, e_q = p["range"]
    sk = skeleton[44 + (s_q - 71) // 3]  # skeleton items 44 to 53
    
    dialogue_entries = []
    for idx, (en, vi) in enumerate(p["trans"]):
        dialogue_entries.append({
            "id": f"p4-{s_q}-{idx+1}",
            "speaker": "Speaker",
            "text": en,
            "vietnamese": vi
        })
        
    questions_list = []
    for q_idx in range(3):
        cur_q = s_q + q_idx
        q_meta = p["q_vi"][q_idx]
        sk_q = sk["questions"][q_idx]
        
        opts = []
        for letter in ["A", "B", "C", "D"]:
            opt_en = sk_q["options"][letter]
            opt_en = opt_en.split("GOON")[0].split("TEST7")[0].split("PART")[0].split("neListening")[0].strip()
            opt_vi = q_meta[1][letter]
            opts.append({
                "key": letter,
                "text": opt_en,
                "vietnamese": opt_vi
            })
            
        questions_list.append({
            "num": cur_q,
            "question": sk_q["question"].split("GOON")[0].strip(),
            "vietnameseQuestion": q_meta[0],
            "options": opts,
            "correctAnswer": sk_q["correctAnswer"],
            "explanation": q_meta[2]
        })
        
    item_dict = {
        "id": sk["id"],
        "part": 4,
        "partTitle": "Part 4: Bài nói ngắn",
        "questionRange": f"Câu {s_q} - {e_q}",
        "title": f"Part 4 - Câu {s_q}-{e_q}: {p['title']}",
        "audioSrc": "/audio/test7_2024.mp3",
        "startTime": sk["startTime"],
        "endTime": sk["endTime"],
        "transcript": dialogue_entries,
        "questions": questions_list,
        "vocabulary": [{"word": w, "meaning": m, "partOfSpeech": pos} for w, m, pos in p["vocab"]]
    }
    if s_q in [95, 98]:
        img_path = f"/images/intensive/test7_2024/q{s_q}_{e_q}.png"
        item_dict["image"] = img_path
        item_dict["graphicImage"] = img_path
        
    part4_items.append(item_dict)

all_items = part1_items + part2_items + part3_items + part4_items
print(f"Total Test 7 items: {len(all_items)}")

# Generate TS content
ts_header = """// Dữ liệu luyện nghe chi tiết (Intensive Listening) - ETS TOEIC 2024 Test 7
// Áp dụng kỹ thuật Virtual Timestamp Slicing từ audio gốc /audio/test7_2024.mp3
// Transcript, câu hỏi và giải thích chi tiết theo đề thi ETS 2024 Test 7

import type { IntensiveListeningItem } from './intensive_listening_types';

export const test7_2024_IntensiveData: IntensiveListeningItem[] = """

output_path = "data/intensive_listening_2024_test7.ts"
with open(output_path, "w", encoding="utf-8") as f:
    f.write(ts_header + json.dumps(all_items, ensure_ascii=False, indent=2) + ";\n")

print(f"Successfully generated {output_path} ({os.path.getsize(output_path)} bytes)")
