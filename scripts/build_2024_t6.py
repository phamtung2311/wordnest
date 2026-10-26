# Python builder for ETS TOEIC 2024 Test 6 Intensive Listening data
import json, os, sys

with open('test6_answers.json') as f:
    ans_key = json.load(f)

with open('test6_skeleton.json') as f:
    skeleton = json.load(f)

# Part 1: Q1 to Q6
p1_metadata = [
    {
        "num": 1,
        "title": "Người phụ nữ trượt tuyết dùng gậy đi bộ",
        "st_vi": {
            "A": "Cô ấy đang xúc tuyết khỏi lối đi bộ.",
            "B": "Cô ấy đang sử dụng gậy đi bộ đường dài.",
            "C": "Cô ấy đang cởi mũ của mình ra.",
            "D": "Cô ấy đang uống nước từ chai nước."
        },
        "opt_vi": {
            "A": "Cô ấy đang xúc tuyết khỏi lối đi.",
            "B": "Cô ấy đang dùng gậy đi bộ.",
            "C": "Cô ấy đang bỏ mũ ra.",
            "D": "Cô ấy đang uống nước từ chai."
        },
        "exp": "Trong bức ảnh tuyết trắng, người phụ nữ đang cầm và sử dụng hai cây gậy đi bộ đường dài (walking sticks) khi di chuyển trên tuyết.",
        "vocab": [
            {"word": "walking stick", "meaning": "gậy đi bộ, gậy leo núi dã ngoại", "partOfSpeech": "n"},
            {"word": "shovel snow", "meaning": "xúc tuyết", "partOfSpeech": "phr"},
            {"word": "walkway", "meaning": "lối đi bộ", "partOfSpeech": "n"}
        ]
    },
    {
        "num": 2,
        "title": "Nữ phục vụ bưng khay đồ ăn trong nhà hàng",
        "st_vi": {
            "A": "Một người phụ nữ đang bưng một chiếc khay.",
            "B": "Một người phụ nữ đang đẩy một chiếc xe đẩy thức ăn.",
            "C": "Một số người đang rời khỏi một nhà hàng.",
            "D": "Một số thực khách đang nhìn ra ngoài cửa sổ."
        },
        "opt_vi": {
            "A": "Người phụ nữ đang bưng một chiếc khay.",
            "B": "Người phụ nữ đang đẩy xe chở thức ăn.",
            "C": "Một số người đang rời khỏi nhà hàng.",
            "D": "Một số thực khách đang nhìn qua cửa sổ."
        },
        "exp": "Trong nhà hàng, người phụ nữ phục vụ đang hai tay nâng và bưng một khay thức ăn (carrying a tray).",
        "vocab": [
            {"word": "tray", "meaning": "khay bưng đồ ăn thức uống", "partOfSpeech": "n"},
            {"word": "food trolley", "meaning": "xe đẩy đồ ăn", "partOfSpeech": "n"},
            {"word": "diner", "meaning": "thực khách", "partOfSpeech": "n"}
        ]
    },
    {
        "num": 3,
        "title": "Người đàn ông cọ rửa nắp ca-pô xe hơi",
        "st_vi": {
            "A": "Người đàn ông đang cầm một chiếc xô.",
            "B": "Người đàn ông đang thay một chiếc lốp xe.",
            "C": "Người đàn ông đang tưới nước cho một cái cây.",
            "D": "Người đàn ông đang cọ rửa nắp ca-pô của một chiếc xe hơi."
        },
        "opt_vi": {
            "A": "Người đàn ông đang cầm xô nước.",
            "B": "Người đàn ông đang thay lốp xe.",
            "C": "Người đàn ông đang tưới cây.",
            "D": "Người đàn ông đang cọ rửa nắp ca-pô ô tô."
        },
        "exp": "Người đàn ông đang cúi người dùng bọt biển/khăn cọ rửa bề mặt nắp ca-pô phía trước của xe ô tô (scrubbing the hood of a car).",
        "vocab": [
            {"word": "scrub", "meaning": "cọ rửa, chà sạch", "partOfSpeech": "v"},
            {"word": "hood", "meaning": "nắp ca-pô xe ô tô", "partOfSpeech": "n"},
            {"word": "bucket", "meaning": "chiếc xô nước", "partOfSpeech": "n"}
        ]
    },
    {
        "num": 4,
        "title": "Khu vực ăn uống ngoài trời vắng khách",
        "st_vi": {
            "A": "Một số viên gạch lát đang được lắp đặt trên sàn.",
            "B": "Một khu vực ăn uống ngoài trời hiện đang trống không có người.",
            "C": "Những bông hoa đã được đặt trên mỗi bàn ăn.",
            "D": "Một số chiếc ghế đã được sắp xếp xung quanh hố lửa."
        },
        "opt_vi": {
            "A": "Gạch lát đang được lắp trên sàn.",
            "B": "Khu vực ăn uống ngoài trời đang trống.",
            "C": "Hoa đã được cắm trên mỗi bàn.",
            "D": "Ghế được xếp quanh hố đốt lửa."
        },
        "exp": "Bức ảnh chụp các bàn ghế ăn ngoài trời tại sân hiên nhà hàng lúc này không có một vị khách nào (An outdoor dining area is empty).",
        "vocab": [
            {"word": "outdoor dining area", "meaning": "khu vực ăn uống ngoài trời", "partOfSpeech": "n"},
            {"word": "empty", "meaning": "trống trải, không có người", "partOfSpeech": "adj"},
            {"word": "fire pit", "meaning": "hố đốt lửa sưởi ngoài trời", "partOfSpeech": "n"}
        ]
    },
    {
        "num": 5,
        "title": "Người phụ nữ bước lên các bậc cầu thang",
        "st_vi": {
            "A": "Một số người đang tụ tập xung quanh một bức tượng.",
            "B": "Một số cái cây đang chắn lối đi bộ.",
            "C": "Một người phụ nữ đang bước lên những bậc cầu thang.",
            "D": "Một người phụ nữ đang đi bộ qua một cây cầu."
        },
        "opt_vi": {
            "A": "Mọi người đang tụ tập quanh bức tượng.",
            "B": "Cây cối đang chắn lối đi bộ.",
            "C": "Người phụ nữ đang bước lên cầu thang.",
            "D": "Người phụ nữ đang đi qua cầu."
        },
        "exp": "Người phụ nữ đang sải bước đi lên các bậc thềm cầu thang ngoài trời (taking some stairs).",
        "vocab": [
            {"word": "take stairs", "meaning": "đi bộ lên/xuống bậc cầu thang", "partOfSpeech": "phr"},
            {"word": "statue", "meaning": "bức tượng điêu khắc", "partOfSpeech": "n"},
            {"word": "block", "meaning": "chắn lối, chặn đường", "partOfSpeech": "v"}
        ]
    },
    {
        "num": 6,
        "title": "Các bồn cây bằng gỗ chứa đầy đất trồng",
        "st_vi": {
            "A": "Một số bồn trồng cây bằng gỗ đã được đổ đầy đất.",
            "B": "Một số khúc gỗ đã được xếp chồng cạnh ô cửa.",
            "C": "Những bức tường ngoài của một ngôi nhà đang được sơn.",
            "D": "Một số cửa sổ đang được lắp đặt trên sàn hiên."
        },
        "opt_vi": {
            "A": "Các bồn gỗ trồng cây đã được cho đầy đất.",
            "B": "Các khúc gỗ được xếp chồng cạnh cửa.",
            "C": "Tường ngoài ngôi nhà đang được sơn.",
            "D": "Cửa sổ đang được lắp trên sàn hiên."
        },
        "exp": "Bức ảnh cho thấy các bồn trồng cây hình hộp bằng gỗ trên sân thượng/ban công đã được đổ đầy đất màu mỡ (planter boxes have been filled with soil).",
        "vocab": [
            {"word": "planter box", "meaning": "hộp/bồn gỗ trồng hoa cây cảnh", "partOfSpeech": "n"},
            {"word": "soil", "meaning": "đất trồng cây", "partOfSpeech": "n"},
            {"word": "stack", "meaning": "chồng, xếp chồng lên nhau", "partOfSpeech": "v"}
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
        "audioSrc": "/audio/test6_2024.mp3",
        "startTime": sk["startTime"],
        "endTime": sk["endTime"],
        "imageUrl": f"/images/intensive/test6_2024/q{q_num}.png",
        "image": f"/images/intensive/test6_2024/q{q_num}.png",
        "transcript": [
            {"id": f"p1-{q_num}-a", "speaker": "Speaker", "text": f"(A) {sk['statements']['A']}", "vietnamese": f"(A) {p['st_vi']['A']}"},
            {"id": f"p1-{q_num}-b", "speaker": "Speaker", "text": f"(B) {sk['statements']['B']}", "vietnamese": f"(B) {p['st_vi']['B']}"},
            {"id": f"p1-{q_num}-c", "speaker": "Speaker", "text": f"(C) {sk['statements']['C']}", "vietnamese": f"(C) {p['st_vi']['C']}"},
            {"id": f"p1-{q_num}-d", "speaker": "Speaker", "text": f"(D) {sk['statements']['D']}", "vietnamese": f"(D) {p['st_vi']['D']}"}
        ],
        "questions": [
            {
                "num": q_num,
                "question": "Chọn câu mô tả đúng nhất về bức tranh:",
                "vietnameseQuestion": "Chọn câu mô tả đúng nhất về bức tranh:",
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
    {"num": 7, "title": "Người mang bánh ngọt còn thừa về", "q_vi": "Ai sẽ mang số bánh ngọt còn thừa về nhà?",
     "opts_vi": [("A", "Marcel nói anh ấy sẽ mang về.", "My cell said he would."), ("B", "Một sự lựa chọn bánh tráng miệng rất tuyệt.", "A lovely selection of desserts."), ("C", "Không. Tôi nghĩ nó bắt đầu lúc giữa trưa.", "No. I thought it started at noon.")],
     "exp": "Câu hỏi 'Who...' hỏi ai sẽ mang bánh thừa về. Lựa chọn (A) chỉ rõ Marcel nói anh ấy sẽ lấy (người nói nghe nhận diện tên Marcel).",
     "vocab": [("leftover", "đồ ăn thừa lại", "n/adj"), ("dessert", "món tráng miệng", "n")]},
    {"num": 8, "title": "Hỏi vị trí phòng bảo vệ", "q_vi": "Bạn có thể cho tôi biết phòng an ninh ở đâu không?",
     "opts_vi": [("A", "Hôm nay là ngày làm việc đầu tiên của tôi ở đây.", "Today is my first day here."), ("B", "Một bức ảnh cho chiếc thẻ đeo.", "A photograph for the badge."), ("C", "Bởi vì bây giờ là sau giờ ăn trưa.", "Because it's after lunch.")],
     "exp": "Câu hỏi đường gián tiếp. Lựa chọn (A) khéo léo giải thích người nói không biết vì hôm nay là ngày đầu tiên đi làm.",
     "vocab": [("security office", "phòng bảo vệ / văn phòng an ninh", "n")]},
    {"num": 9, "title": "Phương thức liên lạc tốt nhất", "q_vi": "Cách tốt nhất để liên lạc với bạn là gì?",
     "opts_vi": [("A", "Qua điện thoại di động của tôi.", "On my mobile phone."), ("B", "Không. Tôi phải đeo kính.", "No. I have to wear glasses."), ("C", "Bản sơ yếu lý lịch này tốt hơn.", "This resume is better.")],
     "exp": "Câu hỏi phương thức liên lạc tốt nhất. Lựa chọn (A) cung cấp phương tiện liên hệ trực tiếp là qua điện thoại di động.",
     "vocab": [("contact", "liên hệ, liên lạc", "v"), ("mobile phone", "điện thoại di động", "n")]},
    {"num": 10, "title": "Người tham gia chuyến đi thuyền ven biển", "q_vi": "Ai sẽ cùng tham gia chuyến đi thuyền ven sông nước với chúng ta vậy?",
     "opts_vi": [("A", "Phòng họp số 3.", "Conference Room 3."), ("B", "Giá vé vào cửa khá hợp lý.", "The admission fee is reasonable."), ("C", "Mọi người trong nhóm của chúng ta đều sẽ đến.", "Everybody on our team is coming.")],
     "exp": "Câu hỏi 'Who...' hỏi ai tham gia chuyến du ngoạn bằng thuyền. Lựa chọn (C) thông báo toàn bộ thành viên trong nhóm đều tham gia.",
     "vocab": [("waterfront", "khu vực bờ sông / ven biển", "n"), ("admission fee", "phí vào cửa", "n")]},
    {"num": 11, "title": "Yêu cầu thợ kỹ thuật sửa máy đóng gói", "q_vi": "Bạn có thể yêu cầu kỹ thuật viên đến sửa máy đóng gói được không?",
     "opts_vi": [("A", "Ba năm học trường kỹ thuật.", "Three years of technical school."), ("B", "Chắc chắn rồi. Tôi sẽ làm việc đó.", "Sure. I'll do that."), ("C", "Chiếc màu xanh có viền vàng.", "The blue one with gold trim.")],
     "exp": "Câu nhờ vả lịch sự ('Could you request...'). Lựa chọn (B) đồng ý giúp đỡ nhiệt tình ('Sure. I\\'ll do that').",
     "vocab": [("technician", "kỹ thuật viên", "n"), ("packaging machine", "máy đóng gói", "n")]},
    {"num": 12, "title": "Số lượng bản sao bản đề xuất cần in", "q_vi": "Tôi nên in bao nhiêu bản đề xuất này?",
     "opts_vi": [("A", "Có giấy màu xanh trong tủ.", "There's blue paper in the cabinet."), ("B", "Vâng, đó là ý kiến của tôi.", "Yes, it was my idea."), ("C", "50 bản chắc là đủ cho tất cả mọi người.", "50 should be enough for everyone.")],
     "exp": "Câu hỏi số lượng ('How many copies...'). Lựa chọn (C) đưa ra con số ước tính cụ thể là 50 bản.",
     "vocab": [("proposal", "bản đề xuất kế hoạch", "n"), ("enough", "đủ", "adj")]},
    {"num": 13, "title": "Lý do Jonathan về sớm", "q_vi": "Tại sao Jonathan lại về sớm vậy?",
     "opts_vi": [("A", "Để kịp bắt chuyến tàu lúc sáu giờ.", "To catch the six o'clock train."), ("B", "Trên bản tin buổi sáng sớm.", "On the early morning news."), ("C", "Đó là nơi anh ấy đang sống bây giờ.", "That's where he lives now.")],
     "exp": "Câu hỏi 'Why is Jonathan leaving early?'. Lựa chọn (A) nêu mục đích về sớm là để kịp chuyến tàu 6 giờ.",
     "vocab": [("catch the train", "kịp bắt chuyến tàu hỏa", "phr")]},
    {"num": 14, "title": "Địa điểm tổ chức tiệc công ty", "q_vi": "Bữa tiệc công ty được tổ chức ở đâu vậy?",
     "opts_vi": [("A", "Đó là một công ty xuất bản.", "It's a publishing firm."), ("B", "Nhóm năm người ở bàn trong góc.", "Party of five at the table in the corner."), ("C", "Tại Khách sạn Chesterville.", "At the Chesterville Hotel.")],
     "exp": "Câu hỏi 'Where...'. Lựa chọn (C) cung cấp địa điểm chính xác là Khách sạn Chesterville.",
     "vocab": [("company party", "bữa tiệc công ty", "n")]},
    {"num": 15, "title": "Đăng ký đặt tạp chí dài hạn", "q_vi": "Bạn có muốn đăng ký gói tạp chí dài hạn một năm không?",
     "opts_vi": [("A", "Gói đó có giá bao nhiêu tiền?", "How much will it cost?"), ("B", "Gần trung tâm dịch vụ.", "Near the service center."), ("C", "Ackico làm việc ở bàn tiếp tân.", "Ackico works at the front desk.")],
     "exp": "Câu mời đăng ký mua báo/tạp chí. Lựa chọn (A) hỏi giá tiền trước khi đưa ra quyết định.",
     "vocab": [("subscription", "gói đăng ký dài hạn định kỳ", "n")]},
    {"num": 16, "title": "Món mì ăn kèm sa lát", "q_vi": "Món mì này có kèm theo sa lát phụ không?",
     "opts_vi": [("A", "Chúng tôi có khăn trải bàn.", "We do have a tablecloth."), ("B", "Không, tôi e là không kèm theo.", "No, I'm afraid not."), ("C", "Tôi cũng thích nó.", "I like it too.")],
     "exp": "Câu hỏi Yes/No về món ăn kèm. Lựa chọn (B) lịch sự trả lời không kèm theo ('No, I\\'m afraid not').",
     "vocab": [("pasta", "món mì Ý", "n"), ("side salad", "đĩa sa-lát ăn kèm", "n")]},
    {"num": 17, "title": "Thời gian họp về hóa đơn", "q_vi": "Khi nào chúng ta có thể gặp nhau để bàn về các hóa đơn?",
     "opts_vi": [("A", "Văn phòng phẩm cho văn phòng.", "Supplies for the office."), ("B", "Tôi rảnh sau hai giờ.", "I'm free after two."), ("C", "Có lẽ ở trên bàn của Harold.", "Probably on Harold's desk.")],
     "exp": "Câu hỏi thời gian ('When can we meet...'). Lựa chọn (B) đưa ra khung giờ rảnh là sau 2 giờ chiều.",
     "vocab": [("invoice", "hóa đơn thanh toán", "n")]},
    {"num": 18, "title": "Hỗ trợ mở tài khoản tiết kiệm", "q_vi": "Bạn có muốn tôi giúp bạn mở tài khoản tiết kiệm không?",
     "opts_vi": [("A", "Tôi đã đếm chúng rồi.", "I've already counted them."), ("B", "Được vậy thì tốt quá.", "That'd be great."), ("C", "Mỗi cái 50 euro.", "50 euros each.")],
     "exp": "Câu đề nghị giúp đỡ ('Would you like me to help...'). Lựa chọn (B) đón nhận lời đề nghị ('That\\'d be great').",
     "vocab": [("savings account", "tài khoản tiết kiệm ngân hàng", "n")]},
    {"num": 19, "title": "Thời điểm đăng tin tuyển dụng", "q_vi": "Bạn đã đăng tin tuyển dụng việc làm khi nào vậy?",
     "opts_vi": [("A", "Trên bảng thông báo ở hành lang à?", "On the bulletin board in the hallway?"), ("B", "Nó đã được đăng trên trang web được một tháng rồi.", "It's been on the website for a month."), ("C", "Bạn có thể đóng cửa lại không?", "Can you close the door?")],
     "exp": "Câu hỏi 'When did you post...'. Lựa chọn (B) cho biết tin đã được đăng trên web cả tháng nay.",
     "vocab": [("job opening", "vị trí việc làm cần tuyển", "n"), ("bulletin board", "bảng thông báo", "n")]},
    {"num": 20, "title": "Ứng tuyển vị trí quản lý", "q_vi": "Bạn có nộp đơn ứng tuyển cho vị trí quản lý không?",
     "opts_vi": [("A", "Thêm khoảng 16 nhân viên nữa.", "About 16 more employees."), ("B", "Tôi sẽ kiểm tra lại lịch trình của cô ấy.", "I'll check her schedule again."), ("C", "Có chứ, tôi hy vọng mình sẽ trúng tuyển.", "Yes, I hope I get it.")],
     "exp": "Câu hỏi Yes/No về việc nộp đơn. Lựa chọn (C) xác nhận có và bày tỏ hy vọng nhận được công việc.",
     "vocab": [("apply for", "nộp đơn ứng tuyển", "v"), ("manager position", "vị trí quản lý", "n")]},
    {"num": 21, "title": "Hạng vé máy bay", "q_vi": "Bạn đi máy bay hạng thương gia hay hạng phổ thông?",
     "opts_vi": [("A", "Chuyến bay của tôi vừa mới bị hủy rồi.", "My flight was just canceled."), ("B", "Trọng tâm nghiên cứu của tôi là lịch sử.", "My focus is history."), ("C", "Luân Đôn rồi sau đó đến New York.", "London then New York.")],
     "exp": "Câu hỏi lựa chọn hạng vé. Lựa chọn (A) gián tiếp trả lời bằng cách thông báo chuyến bay đã bị hủy.",
     "vocab": [("business class", "hạng thương gia", "n"), ("economy class", "hạng phổ thông", "n")]},
    {"num": 22, "title": "Số lượng người đăng ký tạp chí suy giảm", "q_vi": "Số lượng người đăng ký theo dõi tạp chí của chúng ta gần đây đã bị giảm.",
     "opts_vi": [("A", "Ngân sách vẫn còn dư để chạy thêm quảng cáo đấy.", "There's room in the budget for more advertising."), ("B", "Khoản phí thành viên hàng năm.", "An annual membership fee."), ("C", "Có sáu tập hồ sơ trên bàn.", "There are six folders on the table.")],
     "exp": "Câu trần thuật về vấn đề giảm người đăng ký. Lựa chọn (A) đề xuất giải pháp chi thêm tiền ngân sách cho quảng cáo.",
     "vocab": [("subscriber", "người đăng ký theo dõi định kỳ", "n"), ("advertising", "hoạt động quảng cáo", "n")]},
    {"num": 23, "title": "Cách làm sạch tấm pin năng lượng mặt trời", "q_vi": "Làm thế nào để bạn làm sạch các tấm pin mặt trời mà không làm hỏng chúng?",
     "opts_vi": [("A", "Kính có thể có bất kỳ màu nào bạn muốn.", "The glass can be any color you want."), ("B", "Không, hôm nay trời không có nắng.", "No, the sun isn't out today."), ("C", "Tôi thuê một công ty làm toàn bộ công tác bảo trì.", "I pay a company to do all the maintenance.")],
     "exp": "Câu hỏi cách thức ('How do you clean...'). Lựa chọn (C) cho biết người nói thuê ngoài công ty chuyên bảo trì làm việc này.",
     "vocab": [("solar panel", "tấm pin năng lượng mặt trời", "n"), ("maintenance", "công tác bảo trì bảo dưỡng", "n")]},
    {"num": 24, "title": "Thời điểm nhận chứng chỉ qua đường bưu điện", "q_vi": "Khi nào tôi sẽ nhận được chứng chỉ của mình qua đường bưu điện?",
     "opts_vi": [("A", "Tôi sẽ phải kiểm tra lại với văn phòng.", "I'll have to check with the office."), ("B", "Rẽ trái ở chỗ đèn giao thông.", "Turn left at the light."), ("C", "Không, cảm ơn bạn.", "No, thank you.")],
     "exp": "Câu hỏi thời gian nhận thư. Lựa chọn (A) trả lời người nói chưa rõ và sẽ kiểm tra lại với văn phòng.",
     "vocab": [("certificate", "chứng chỉ, văn bằng chứng nhận", "n"), ("in the mail", "qua đường bưu điện", "phr")]},
    {"num": 25, "title": "Mặt hàng máy cắt cỏ Ramirez", "q_vi": "Chẳng phải chúng ta có bán máy cắt cỏ hiệu Ramirez sao?",
     "opts_vi": [("A", "Cây cối cần thêm nước.", "The plants need more water."), ("B", "Rất tiếc, việc hoàn tiền không được phép.", "Sorry, refunds are not allowed."), ("C", "Tôi làm việc ở khu vực trang trí nhà cửa nên không rõ.", "I work in the home decor area.")],
     "exp": "Câu hỏi kiểm tra mặt hàng. Lựa chọn (C) giải thích người nói làm ở gian hàng khác (home decor) nên không nắm rõ thông tin.",
     "vocab": [("lawnmower", "máy cắt cỏ", "n"), ("home decor", "đồ trang trí nội thất gia đình", "n")]},
    {"num": 26, "title": "Lên lịch họp dự án nghiên cứu", "q_vi": "Chúng ta có nên gặp nhau để thảo luận về dự án nghiên cứu không?",
     "opts_vi": [("A", "Một cuốn sổ tay hướng dẫn xuất bản.", "A publishing manual."), ("B", "Hãy xếp một khung giờ vào lịch làm việc của tôi đi.", "Put something on my calendar."), ("C", "Tôi nghĩ theo thứ tự bảng chữ cái là ổn.", "Alphabetical order is fine, I think.")],
     "exp": "Câu đề xuất họp mặt ('Should we meet...'). Lựa chọn (B) đồng ý và bảo đồng nghiệp chủ động lên lịch vào lịch biểu ('Put something on my calendar').",
     "vocab": [("research project", "dự án nghiên cứu", "n"), ("calendar", "lịch trình công việc", "n")]},
    {"num": 27, "title": "Giờ tan ca của đội vệ sinh", "q_vi": "Khi nào thì đội ngũ nhân viên vệ sinh tan ca về?",
     "opts_vi": [("A", "Một tủ đựng đồ dùng ở hành lang.", "A supply closet in the hall."), ("B", "Thường là trước sáu giờ.", "By six o'clock, usually."), ("C", "Lá cây đâm chồi vào mùa xuân.", "The leaves come out in the spring.")],
     "exp": "Câu hỏi 'When does the cleaning staff leave for the day?'. Lựa chọn (B) trả lời giờ giấc cụ thể là trước 6 giờ.",
     "vocab": [("cleaning staff", "nhân viên vệ sinh dọn dẹp", "n"), ("leave for the day", "hết giờ làm việc ra về", "phr")]},
    {"num": 28, "title": "Hình thức thanh toán đôi giày", "q_vi": "Hôm nay bạn muốn thanh toán đôi giày này bằng hình thức nào?",
     "opts_vi": [("A", "Bằng thẻ quà tặng của cửa hàng.", "With a store gift card."), ("B", "Tôi đi giày cỡ 38.", "I wear a size 38."), ("C", "Một người bạn đã giới thiệu chúng cho tôi.", "A friend recommended them.")],
     "exp": "Câu hỏi phương thức thanh toán. Lựa chọn (A) trả lời thanh toán bằng thẻ quà tặng cửa hàng.",
     "vocab": [("gift card", "thẻ quà tặng", "n")]},
    {"num": 29, "title": "Đánh giá hiệu quả của quảng cáo", "q_vi": "Đó là một mẩu quảng cáo rất hiệu quả đúng không?",
     "opts_vi": [("A", "Tôi nghe nói doanh số bán hàng đã tăng lên rồi đấy.", "I've heard that sales have increased."), ("B", "Kỳ phát hành tiếp theo của tạp chí.", "The next issue of the magazine."), ("C", "Chẳng phải chính sách đã có hiệu lực rồi sao?", "Isn't the policy in effect already?")],
     "exp": "Câu hỏi xác nhận hiệu quả quảng cáo. Lựa chọn (A) đồng tình và đưa ra minh chứng doanh số bán hàng đã tăng.",
     "vocab": [("effective", "hiệu quả", "adj"), ("sales", "doanh số bán hàng", "n")]},
    {"num": 30, "title": "Rủ đi dạo sau bữa trưa", "q_vi": "Sao chúng ta không đi dạo một chút sau bữa trưa nhỉ?",
     "opts_vi": [("A", "Báo cáo bán hàng phải nộp lúc một giờ.", "The sales report is due at one o'clock."), ("B", "Không, ở khu vực đỗ xe B.", "No, in parking area B."), ("C", "Làm ơn cho tôi một đĩa mì spaghetti.", "I'll have spaghetti, please.")],
     "exp": "Câu rủ đi dạo ('Why don\\'t we take a walk...'). Lựa chọn (A) từ chối khéo léo vì phải hoàn thành báo cáo nộp lúc 1 giờ.",
     "vocab": [("take a walk", "đi dạo bộ", "phr"), ("due", "đến hạn nộp", "adj")]},
    {"num": 31, "title": "Chuyển hàng theo mùa ra phía trước cửa hàng", "q_vi": "Tôi đã quyết định chuyển các mặt hàng theo mùa ra phía trước cửa hàng.",
     "opts_vi": [("A", "Bạn có đặt một ít vào tủ kính trưng bày không?", "Did you put some of it in the window display?"), ("B", "Dành cho bộ sưu tập trang phục mùa hè của chúng tôi.", "For our summer clothing collection."), ("C", "Xe tải chuyển nhà sẽ đến vào ngày mai.", "The moving van is coming tomorrow.")],
     "exp": "Câu trần thuật về cách trưng bày hàng. Lựa chọn (A) hỏi thêm xem đồng nghiệp có bày một phần ra ô kính trưng bày mặt tiền không.",
     "vocab": [("seasonal merchandise", "hàng hóa theo mùa vụ", "n"), ("window display", "tủ kính trưng bày hàng ở mặt tiền", "n")]}
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
        "audioSrc": "/audio/test6_2024.mp3",
        "startTime": sk["startTime"],
        "endTime": sk["endTime"],
        "transcript": [
            {"id": f"p2-{q_num}-q", "speaker": "Speaker 1", "text": sk["question"], "vietnamese": p["q_vi"]},
            {"id": f"p2-{q_num}-a", "speaker": "Speaker 2", "text": f"(A) {p['opts_vi'][0][2]}", "vietnamese": f"(A) {p['opts_vi'][0][1]}"},
            {"id": f"p2-{q_num}-b", "speaker": "Speaker 2", "text": f"(B) {p['opts_vi'][1][2]}", "vietnamese": f"(B) {p['opts_vi'][1][1]}"},
            {"id": f"p2-{q_num}-c", "speaker": "Speaker 2", "text": f"(C) {p['opts_vi'][2][2]}", "vietnamese": f"(C) {p['opts_vi'][2][1]}"}
        ],
        "questions": [
            {
                "num": q_num,
                "question": sk["question"],
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
        "range": (32, 34), "title": "Kế hoạch cải tạo nhà hát và buổi diễn nhạc kịch",
        "speakers": ["Woman", "Man", "Woman", "Man"],
        "trans": [
            ("The renovations we're planning for the theater are long overdue.", "Kế hoạch cải tạo nhà hát của chúng ta đã quá hạn từ lâu rồi."),
            ("I agree. The main stage needs updating, and the sound system is outdated.", "Tôi đồng ý. Sân khấu chính cần nâng cấp, và hệ thống âm thanh đã lỗi thời."),
            ("Luckily, our spring musical production was very profitable and generated substantial ticket revenue.", "May mắn thay, vở nhạc kịch mùa xuân của chúng ta sinh lời rất tốt và mang lại doanh thu bán vé đáng kể."),
            ("That gives us the capital we need. Let's organize an open house reception next month to announce the renovation plans to the public.", "Điều đó mang lại nguồn vốn chúng ta cần. Hãy tổ chức một buổi tiếp đón mở cửa tự do vào tháng tới để công bố kế hoạch cải tạo tới công chúng.")
        ],
        "q_vi": [
            ("Những người nói chủ yếu thảo luận về điều gì?", {
                "A": "Kế hoạch cải tạo nhà hát", "B": "Chiến lược tiếp thị", "C": "Lịch diễn", "D": "Tuyển dụng diễn viên"
            }, "Họ thảo luận về công tác cải tạo nhà hát: 'The renovations we\\'re planning for the theater' (renovation plans - A)."),
            ("Người đàn ông nói gì về vở diễn nhạc kịch?", {
                "A": "Nó bị hủy bỏ", "B": "Nó rất có lãi / sinh lời cao", "C": "Nó bị đánh giá thấp", "D": "Nó cần thêm diễn viên"
            }, "Người nói cho biết vở nhạc kịch mang lại doanh thu lớn: 'our spring musical production was very profitable' (rất có lãi - profitable - B)."),
            ("Những người nói đang lên kế hoạch cho sự kiện nào?", {
                "A": "Lễ trao giải", "B": "Buổi tiếp đón mở cửa tự do", "C": "Họp báo", "D": "Buổi thử giọng"
            }, "Họ lên kế hoạch: 'organize an open house reception next month' (buổi tiếp đón mở cửa tự do - an open house - B).")
        ],
        "vocab": [("renovation", "sự cải tạo nâng cấp", "n"), ("musical production", "vở diễn nhạc kịch", "n"), ("profitable", "có lãi, sinh lời cao", "adj"), ("open house", "ngày hội mở cửa tự do", "n")]
    },
    {
        "range": (35, 37), "title": "Tuyển dụng nhân sự và văn phòng mới",
        "speakers": ["Woman", "Man", "Woman", "Man"],
        "trans": [
            ("Fernando, I wanted to tell you that the top candidate we chose for the customer support lead has officially accepted our job offer.", "Fernando, tôi muốn báo cho anh biết ứng viên hàng đầu chúng ta chọn cho vị trí trưởng nhóm hỗ trợ khách hàng đã chính thức nhận lời mời làm việc."),
            ("That's fantastic news! We finally completed the interview process.", "Thật là tin tuyệt vời! Cuối cùng chúng ta cũng hoàn tất quy trình phỏng vấn."),
            ("Yes, and she will love our new office building. The fitness center and cafeteria here are exceptional.", "Vâng, và cô ấy sẽ thích tòa nhà văn phòng mới của chúng ta. Trung tâm thể dục và căng tin ở đây rất tuyệt vời."),
            ("I agree. However, I'm slightly worried about parking availability because our lot has very limited space.", "Tôi đồng ý. Tuy nhiên, tôi hơi lo lắng về chỗ đậu xe vì bãi đỗ của chúng ta có diện tích rất hạn chế.")
        ],
        "q_vi": [
            ("Những người nói gần đây đã làm gì?", {
                "A": "Ký hợp đồng thuê", "B": "Phỏng vấn các ứng viên xin việc", "C": "Mua sắm trang thiết bị", "D": "Chuyển địa điểm kinh doanh"
            }, "Họ vừa tuyển được người và hoàn tất phỏng vấn: 'completed the interview process' (phỏng vấn người xin việc - interviewed job applicants - B)."),
            ("Những người nói thích điều gì về tòa nhà?", {
                "A": "Vị trí trung tâm", "B": "Giá thuê rẻ", "C": "Không gian rộng rãi", "D": "Các tiện ích của tòa nhà (phòng gym, căng tin)"
            }, "Họ khen tiện ích tòa nhà: 'The fitness center and cafeteria here are exceptional' (các tiện nghi - amenities - D)."),
            ("Người phụ nữ lo lắng về điều gì?", {
                "A": "Thời hạn hoàn thành dự án", "B": "Chi phí phát sinh", "C": "Chỗ đỗ xe có hạn", "D": "Đào tạo nhân viên mới"
            }, "Người nói lo lắng: 'worried about parking availability because our lot has very limited space' (chỗ đỗ xe - parking availability - C).")
        ],
        "vocab": [("candidate", "ứng viên xin việc", "n"), ("interview", "phỏng vấn", "v/n"), ("amenities", "tiện nghi của tòa nhà", "n"), ("limited space", "không gian có hạn", "n")]
    },
    {
        "range": (38, 40), "title": "Đặt hoa cho sự kiện khai trương phòng tranh",
        "speakers": ["Man", "Woman", "Man", "Woman"],
        "trans": [
            ("Welcome to Bloom Florists. How can I help you today?", "Chào mừng quý khách đến với Tiệm hoa Bloom. Tôi có thể giúp gì cho cô hôm nay?"),
            ("Hi. I'm organizing an art gallery opening next Friday and need five large floral centerpieces.", "Xin chào. Tôi đang tổ chức lễ khai trương phòng trưng bày nghệ thuật vào thứ Sáu tới và cần năm lẵng hoa lớn đặt giữa bàn."),
            ("We can definitely arrange that. We specialize in custom floral displays for gallery exhibitions and corporate events.", "Chúng tôi hoàn toàn có thể thu xếp được. Chúng tôi chuyên cắm hoa nghệ thuật cho triển lãm phòng tranh và sự kiện doanh nghiệp."),
            ("Unfortunately, I apologize because our delivery van is undergoing maintenance that day, so you would need to pick them up in person.", "Tuy nhiên, tôi rất xin lỗi vì xe giao hàng của chúng tôi phải bảo dưỡng vào hôm đó, nên cô sẽ cần phải tự đến lấy hoa trực tiếp.")
        ],
        "q_vi": [
            ("Người phụ nữ đang lên kế hoạch cho sự kiện gì?", {
                "A": "Một đám cưới", "B": "Khai trương phòng trưng bày nghệ thuật", "C": "Hội nghị thường niên", "D": "Lễ kỷ niệm công ty"
            }, "Người phụ nữ nói rõ: 'organizing an art gallery opening next Friday' (khai trương phòng tranh - an art gallery opening - B)."),
            ("Người đàn ông nhiều khả năng là ai nhất?", {
                "A": "Người bán hoa", "B": "Nghệ sĩ điêu khắc", "C": "Quản lý tòa nhà", "D": "Nhân viên pha chế"
            }, "Người đàn ông chào đón tại tiệm hoa Bloom Florists và nhận cắm hoa nên anh ấy là người bán hoa (A florist - A)."),
            ("Tại sao người đàn ông lại xin lỗi?", {
                "A": "Hết hoa", "B": "Giá tăng", "C": "Giao hàng muộn", "D": "Không thể cung cấp dịch vụ giao hàng tận nơi"
            }, "Người đàn ông xin lỗi vì xe hỏng không giao được: 'our delivery van is undergoing maintenance... you would need to pick them up' (không giao hàng được - cannot provide delivery - D).")
        ],
        "vocab": [("art gallery", "phòng trưng bày tranh nghệ thuật", "n"), ("floral centerpiece", "lẵng hoa đặt bàn trung tâm", "n"), ("florist", "người bán hoa, tiệm hoa", "n"), ("maintenance", "bảo trì, bảo dưỡng", "n")]
    },
    {
        "range": (41, 43), "title": "Sự cố ứng dụng ngân hàng trên điện thoại di động",
        "speakers": ["Man", "Woman", "Man", "Woman"],
        "trans": [
            ("Hello. I'm having trouble with your mobile banking service. I tried to transfer funds to my savings account online, but the transaction failed.", "Xin chào. Tôi đang gặp sự cố với dịch vụ ngân hàng di động của các bạn. Tôi đã cố gắng chuyển tiền vào tài khoản tiết kiệm trực tuyến, nhưng giao dịch bị thất bại."),
            ("I can help with that, sir. Did you see an error code on your screen?", "Tôi có thể giúp ông việc đó. Ông có thấy mã lỗi nào hiển thị trên màn hình không?"),
            ("No error code, but the application keeps crashing whenever I confirm the payment amount.", "Không có mã lỗi, nhưng ứng dụng cứ liên tục bị văng/đóng đột ngột mỗi khi tôi xác nhận số tiền thanh toán."),
            ("I understand. Our technical team just released an update today. Please uninstall and reinstall the application, and that should resolve the bug.", "Tôi hiểu rồi. Đội kỹ thuật của chúng tôi vừa phát hành bản cập nhật hôm nay. Ông vui lòng gỡ cài đặt và cài đặt lại ứng dụng, thao tác đó sẽ khắc phục được lỗi này.")
        ],
        "q_vi": [
            ("Người đàn ông đã cố gắng làm gì trực tuyến?", {
                "A": "Thanh toán hóa đơn điện nước", "B": "Chuyển tiền vào tài khoản", "C": "Đổi mật khẩu", "D": "Đăng ký thẻ tín dụng"
            }, "Người đàn ông nói: 'tried to transfer funds to my savings account online' (chuyển tiền - transfer money - B)."),
            ("Người đàn ông nói điện thoại của mình bị vấn đề gì?", {
                "A": "Ứng dụng bị văng/đóng liên tục", "B": "Hết pin", "C": "Mất kết nối mạng", "D": "Màn hình bị nứt"
            }, "Người đàn ông cho biết: 'the application keeps crashing' (ứng dụng liên tục bị lỗi dừng đột ngột - A)."),
            ("Người đàn ông nhiều khả năng sẽ làm gì tiếp theo?", {
                "A": "Đến chi nhánh ngân hàng", "B": "Mua điện thoại mới", "C": "Cài đặt lại ứng dụng", "D": "Đổi mã PIN"
            }, "Người phụ nữ khuyên: 'uninstall and reinstall the application' (cài đặt lại ứng dụng - reinstall an application - C).")
        ],
        "vocab": [("transfer funds", "chuyển tiền", "phr"), ("crash", "bị văng, sập ứng dụng", "v"), ("uninstall", "gỡ cài đặt", "v"), ("reinstall", "cài đặt lại", "v")]
    },
    {
        "range": (44, 46), "title": "Hoàn thành bài viết phóng sự sáp nhập ngân hàng",
        "speakers": ["Man", "Woman", "Man", "Woman"],
        "trans": [
            ("Asako, how far along are you on that news report about the bank merger?", "Asako, bài phóng sự tin tức về vụ sáp nhập ngân hàng của cô tiến độ đến đâu rồi?"),
            ("I've drafted the background section, but I've been unable to finish because the lead financial analyst hasn't returned my interview calls.", "Tôi đã soạn thảo xong phần bối cảnh, nhưng chưa thể hoàn thành vì chuyên gia phân tích tài chính chính vẫn chưa gọi lại trả lời phỏng vấn của tôi."),
            ("The deadline is this afternoon for the print edition. Why don't you interview Mr. Patel from our research department instead? He's an expert on corporate acquisitions.", "Hạn chót là chiều nay cho bản in rồi. Sao cô không phỏng vấn ông Patel từ phòng nghiên cứu của chúng ta thay vào đó? Ông ấy là chuyên gia về thâu tóm doanh nghiệp đấy."),
            ("Good suggestion. I'll head upstairs to his office right away.", "Gợi ý hay đấy. Tôi sẽ lên tầng đến văn phòng ông ấy ngay.")
        ],
        "q_vi": [
            ("Những người nói nhiều khả năng làm việc ở đâu nhất?", {
                "A": "Ngân hàng thương mại", "B": "Công ty kế toán", "C": "Tòa soạn báo / truyền thông", "D": "Văn phòng luật"
            }, "Họ đang viết bài phóng sự tin tức kịp giờ in: 'news report... for the print edition' (tòa soạn báo/tin tức - at a newspaper / publisher - C)."),
            ("Tại sao người phụ nữ chưa thể hoàn thành nhiệm vụ?", {
                "A": "Máy tính bị hỏng", "B": "Thiếu dữ liệu tài chính", "C": "Chưa liên lạc được với người được phỏng vấn", "D": "Bị giao thêm việc"
            }, "Cô ấy giải thích: 'the lead financial analyst hasn\\'t returned my interview calls' (chưa liên lạc được người phỏng vấn - C)."),
            ("Người đàn ông đề xuất giải pháp nào?", {
                "A": "Phỏng vấn một chuyên gia khác", "B": "Gia hạn thời hạn nộp", "C": "Hủy bài báo", "D": "Tự viết phần kết luận"
            }, "Người đàn ông đề xuất: 'interview Mr. Patel from our research department instead' (phỏng vấn một người khác - A).")
        ],
        "vocab": [("bank merger", "sáp nhập ngân hàng", "n"), ("financial analyst", "chuyên viên phân tích tài chính", "n"), ("print edition", "ấn bản in ấn", "n"), ("acquisition", "mua lại, thâu tóm doanh nghiệp", "n")]
    },
    {
        "range": (47, 49), "title": "Dự án thi công hệ thống thoát nước sân vườn",
        "speakers": ["Man", "Woman", "Man", "Woman"],
        "trans": [
            ("We'll have to remove the soil from the garden bed and lay down drain pipes along the foundation.", "Chúng tôi sẽ phải xúc đất khỏi luống vườn và đặt các đường ống thoát nước dọc theo móng nhà."),
            ("As a landscape drainage contractor, I want to ensure the water flows away from the house.", "Với tư cách là nhà thầu thoát nước cảnh quan, tôi muốn đảm bảo nước chảy ra xa khỏi ngôi nhà."),
            ("That sounds like major work, but I don't want to have to make foundation repairs later.", "Nghe có vẻ là công việc lớn, nhưng tôi không muốn sau này phải tốn tiền sửa chữa móng nhà."),
            ("Understood. I have a digital portfolio on my tablet. Let me show you photos of similar drainage projects we completed last month.", "Tôi hiểu. Tôi có danh mục dự án trên máy tính bảng. Hãy để tôi cho cô xem ảnh các dự án thoát nước tương tự mà chúng tôi đã hoàn thành tháng trước.")
        ],
        "q_vi": [
            ("Người đàn ông làm nghề gì?", {
                "A": "Thợ điện", "B": "Thợ mộc", "C": "Thợ thi công cảnh quan / thoát nước", "D": "Nhân viên vệ sinh"
            }, "Người đàn ông làm dịch vụ thoát nước cảnh quan sân vườn: 'landscape drainage contractor' (nhà thầu cảnh quan - Landscaper - C)."),
            ("Người phụ nữ ngụ ý điều gì khi nói, \"Tôi không muốn phải sửa chữa móng sau này\"?", {
                "A": "Cô ấy muốn tự làm", "B": "Cô ấy đồng ý chi tiền cho giải pháp triệt để", "C": "Cô ấy muốn chuyển nhà", "D": "Cô ấy muốn khiếu nại"
            }, "Cô ấy chấp nhận dự án thi công lớn để phòng tránh hư hại nhà tốn kém sau này (đồng ý thực hiện giải pháp đề xuất - B)."),
            ("Người đàn ông sẽ cho người phụ nữ xem thứ gì?", {
                "A": "Hợp đồng", "B": "Bản dự toán chi phí", "C": "Giấy phép xây dựng", "D": "Những bức ảnh chụp các dự án tương tự"
            }, "Người đàn ông nói: 'show you photos of similar drainage projects' (cho xem ảnh - photographs - D).")
        ],
        "vocab": [("drain pipe", "ống thoát nước", "n"), ("foundation", "móng nhà", "n"), ("landscaper", "thợ làm vườn cảnh quan", "n"), ("portfolio", "hồ sơ năng lực/danh mục dự án", "n")]
    },
    {
        "range": (50, 52), "title": "Hỏi tiến độ giao hàng kính mắt",
        "speakers": ["Man", "Woman", "Man", "Woman"],
        "trans": [
            ("Good morning. I'm calling from Clear Vision Optical to check on our order of designer eyeglass frames. They were expected two days ago.", "Chào buổi sáng. Tôi gọi từ Hiệu kính Clear Vision để kiểm tra đơn hàng gọng kính thiết kế của chúng tôi. Lẽ ra chúng phải đến từ hai ngày trước rồi."),
            ("Let me check our shipping database, sir. It looks like bad weather grounded cargo planes at our central shipping hub over the weekend.", "Để tôi kiểm tra cơ sở dữ liệu vận chuyển. Có vẻ như thời tiết xấu đã khiến các máy bay chở hàng phải hoãn cất cánh tại trung tâm vận chuyển của chúng tôi cuối tuần qua."),
            ("I see. Our clients are waiting for those frames.", "Tôi hiểu rồi. Khách hàng của chúng tôi đang chờ những chiếc gọng kính đó."),
            ("The shipment has already departed this morning. I will email you the updated tracking number and estimated delivery time shortly.", "Lô hàng đã khởi hành sáng nay rồi. Tôi sẽ gửi email cho ông mã theo dõi cập nhật và thời gian giao hàng dự kiến ngay.")
        ],
        "q_vi": [
            ("Tại sao người đàn ông lại gọi điện?", {
                "A": "Hủy đơn hàng", "B": "Kiểm tra tình trạng đơn hàng bị chậm", "C": "Đặt thêm hàng", "D": "Yêu cầu hoàn tiền"
            }, "Người đàn ông hỏi về đơn hàng kính mắt chưa tới: 'check on our order... expected two days ago' (kiểm tra đơn hàng - check on an order - B)."),
            ("Theo người phụ nữ, điều gì đã gây ra sự chậm trễ?", {
                "A": "Thời tiết xấu (bão tuyết/mưa gió)", "B": "Máy móc hỏng", "C": "Thiếu nhân viên", "D": "Sai địa chỉ"
            }, "Người phụ nữ giải thích: 'bad weather grounded cargo planes' (thời tiết xấu - severe weather - A)."),
            ("Người phụ nữ nhiều khả năng sẽ cung cấp thông tin gì sau đó?", {
                "A": "Hóa đơn mới", "B": "Mã giảm giá", "C": "Mã theo dõi hành trình (tracking number)", "D": "Danh bạ liên lạc"
            }, "Người phụ nữ hứa: 'email you the updated tracking number' (mã theo dõi vận đơn - tracking number - C).")
        ],
        "vocab": [("optical", "quang học, thuộc về mắt kính", "adj/n"), ("grounded", "bị giữ lại trên mặt đất (máy bay không thể cất cánh)", "adj"), ("hub", "trung tâm trung chuyển", "n"), ("tracking number", "mã vận đơn theo dõi", "n")]
    },
    {
        "range": (53, 55), "title": "Bàn giao xe ô tô sau khi sửa chữa",
        "speakers": ["Man", "Woman", "Man", "Woman"],
        "trans": [
            ("I'm the general manager here at Revit Auto Repair. Your sedan's brake inspection and oil change are complete, Ms. Santos.", "Tôi là quản lý tại Xưởng sửa chữa ô tô Revit. Việc kiểm tra phanh và thay dầu cho chiếc xe sedan của cô đã hoàn tất, thưa cô Santos."),
            ("Thank you. Did you also replace the windshield wiper blades as I requested?", "Cảm ơn anh. Anh có thay luôn cần gạt nước kính chắn gió như tôi đã yêu cầu không?"),
            ("Yes, we installed premium all-weather wiper blades. Our technician also checked your tire tread.", "Có chứ, chúng tôi đã lắp cần gạt nước cao cấp dùng cho mọi thời tiết. Kỹ thuật viên của chúng tôi cũng kiểm tra gai lốp xe."),
            ("Everything is in order. Before handing over the keys, my technician and I would like to show you the old parts we replaced.", "Mọi thứ đều ổn thỏa. Trước khi bàn giao chìa khóa, tôi và kỹ thuật viên muốn cho cô xem các phụ tùng cũ đã được thay thế.")
        ],
        "q_vi": [
            ("Cuộc trò chuyện diễn ra ở đâu?", {
                "A": "Trạm xăng", "B": "Bãi đỗ xe", "C": "Xưởng sửa chữa ô tô", "D": "Đại lý bán xe"
            }, "Người đàn ông giới thiệu: 'at Revit Auto Repair' (xưởng sửa xe - auto repair shop - C)."),
            ("Người phụ nữ đề cập đến loại sản phẩm nào?", {
                "A": "Cần gạt nước kính chắn gió", "B": "Gương chiếu hậu", "C": "Ắc quy ô tô", "D": "Đèn pha"
            }, "Người phụ nữ hỏi: 'replace the windshield wiper blades' (cần gạt nước kính - windshield wipers - A)."),
            ("Những người đàn ông muốn làm gì?", {
                "A": "Rửa xe", "B": "Lái thử xe", "C": "Cho xem các bộ phận cũ đã thay", "D": "Xin đánh giá dịch vụ"
            }, "Họ muốn cho khách xem đồ cũ đã tháo ra: 'show you the old parts we replaced' (xem các bộ phận cũ - show replaced parts - C).")
        ],
        "vocab": [("auto repair", "sửa chữa xe hơi", "n"), ("windshield wiper", "cần gạt nước kính chắn gió", "n"), ("brake", "phanh xe", "n"), ("replace", "thay thế", "v")]
    },
    {
        "range": (56, 58), "title": "Biên tập video khóa học trực tuyến",
        "speakers": ["Man", "Woman", "Man", "Woman"],
        "trans": [
            ("Hi, Carmen. I'm reviewing the final edit for our upcoming online finance tutorial series.", "Chào Carmen. Tôi đang xem lại bản dựng cuối cho chuỗi video hướng dẫn tài chính trực tuyến sắp tới."),
            ("How does the introductory video look? Does the pacing feel right?", "Video mở đầu trông thế nào? Nhịp độ bài giảng có ổn không?"),
            ("The content is excellent, but the video is currently 75 minutes long. I want it to be less than an hour.", "Nội dung rất tuyệt vời, nhưng video hiện dài 75 phút. Tôi muốn nó phải dưới một tiếng đồng hồ."),
            ("Understood. I will contact our video editing team right away to cut the redundant sections.", "Tôi hiểu rồi. Tôi sẽ liên hệ với nhóm biên tập video ngay để cắt bớt các phần thừa.")
        ],
        "q_vi": [
            ("Những người nói nhiều khả năng làm trong ngành nào?", {
                "A": "Ngân hàng", "B": "Bất động sản", "C": "Giáo dục / đào tạo trực tuyến", "D": "Y tế"
            }, "Họ làm chuỗi video hướng dẫn bài giảng trực tuyến: 'online finance tutorial series' (đào tạo trực tuyến - E-learning / Education - C)."),
            ("Người đàn ông ngụ ý gì khi nói, \"Tôi muốn nó phải dưới một tiếng đồng hồ\"?", {
                "A": "Khóa học quá rẻ", "B": "Hạn chót sắp tới", "C": "Cần quay lại toàn bộ", "D": "Video cần được cắt ngắn bớt"
            }, "Video đang 75 phút và anh ấy muốn dưới 60 phút nghĩa là phải cắt ngắn độ dài (The video should be shortened - D)."),
            ("Tại sao người đàn ông cần liên hệ với một nhóm?", {
                "A": "Ký hợp đồng", "B": "Để yêu cầu chỉnh sửa cắt ngắn video", "C": "Đặt phòng họp", "D": "Xin cấp thêm kinh phí"
            }, "Họ liên hệ nhóm biên tập video: 'contact our video editing team... to cut the redundant sections' (yêu cầu chỉnh sửa - request edits - B).")
        ],
        "vocab": [("tutorial", "bài giảng hướng dẫn", "n"), ("pacing", "nhịp độ", "n"), ("redundant", "dư thừa, không cần thiết", "adj"), ("shorten", "rút ngắn", "v")]
    },
    {
        "range": (59, 61), "title": "Kết quả kiểm tra đất cho dự án xây dựng công viên",
        "speakers": ["Man", "Woman", "Man", "Woman"],
        "trans": [
            ("Preeti and Melissa, I reviewed the results of the soil tests yesterday and most areas of the site are ready for ground breaking.", "Preeti và Melissa, hôm qua tôi đã xem xét kết quả kiểm tra đất và hầu hết các khu vực trên công trường đều đã sẵn sàng khởi công."),
            ("That's great! Our architectural firm hopes to start construction on the new community park by next month.", "Tuyệt vời quá! Công ty kiến trúc của chúng ta hy vọng sẽ khởi công xây dựng công viên cộng đồng mới vào tháng tới."),
            ("Are there any spots that need additional soil treatment?", "Có khu vực nào cần xử lý đất bổ sung không?"),
            ("Only the northern quadrant near the river. Melissa, could you send the detailed environmental report by e-mail to the city planners?", "Chỉ có góc phần tư phía bắc gần bờ sông thôi. Melissa, cô có thể gửi báo cáo môi trường chi tiết qua email cho các nhà quy hoạch thành phố được không?"),
            ("Sure, I'll send it before noon today.", "Chắc chắn rồi, tôi sẽ gửi nó trước buổi trưa hôm nay.")
        ],
        "q_vi": [
            ("Người đàn ông đã xem xét điều gì vào ngày hôm qua?", {
                "A": "Báo cáo ngân sách", "B": "Bản thiết kế", "C": "Kết quả kiểm tra đất", "D": "Hợp đồng thầu"
            }, "Người đàn ông nêu rõ: 'reviewed the results of the soil tests yesterday' (kết quả kiểm tra đất - soil test results - C)."),
            ("Những người nói hy vọng làm điều gì?", {
                "A": "Bắt đầu thi công xây dựng công viên", "B": "Bán một mảnh đất", "C": "Thuê thêm nhân công", "D": "Tổ chức lễ hội"
            }, "Họ hy vọng: 'start construction on the new community park by next month' (khởi công xây dựng - start construction - A)."),
            ("Melissa sẽ gửi thứ gì qua email?", {
                "A": "Hóa đơn", "B": "Giấy mời", "C": "Ảnh chụp", "D": "Báo cáo môi trường chi tiết"
            }, "Người đàn ông nhờ: 'send the detailed environmental report by e-mail' (báo cáo môi trường - environmental report - D).")
        ],
        "vocab": [("soil test", "kiểm tra chất lượng đất", "n"), ("ground breaking", "khởi công công trình", "n"), ("architectural firm", "công ty kiến trúc", "n"), ("quadrant", "góc phần tư khu đất", "n")]
    },
    {
        "range": (62, 64), "title": "Lịch thi đấu câu lạc bộ bowling",
        "speakers": ["Woman", "Man", "Woman", "Man"],
        "trans": [
            ("Rodrigo, you wanted to talk to me about the schedule for the bowling leagues at our bowling alley?", "Rodrigo, anh muốn trao đổi với tôi về lịch thi đấu cho các giải bowling tại trung tâm bowling của chúng ta phải không?"),
            ("Yes. Starting next month, our Adult League is moving to Tuesdays. So the Junior League needs to take over Thursday evenings instead.", "Đúng vậy. Bắt đầu từ tháng sau, Giải Người lớn sẽ chuyển sang các ngày thứ Ba. Vì vậy Giải Trẻ sẽ cần chuyển sang thi đấu vào các buổi tối thứ Năm thay thế."),
            ("Thursday works well since school ends early that day.", "Thứ Năm rất phù hợp vì học sinh tan học sớm vào ngày đó."),
            ("Good. I will update the league schedule on our website and social media pages this afternoon.", "Tốt rồi. Chiều nay tôi sẽ cập nhật lịch thi đấu của giải lên trang web và các trang mạng xã hội của chúng ta.")
        ],
        "q_vi": [
            ("Những người nói làm việc ở đâu?", {
                "A": "Tại một sân chơi bowling", "B": "Tại một trường học", "C": "Tại một trung tâm thể hình", "D": "Tại một cửa hàng dụng cụ thể thao"
            }, "Họ sắp xếp lịch giải bowling tại 'our bowling alley' (sân chơi bowling - bowling alley - A)."),
            ("Nhìn vào hình ảnh. Giải Trẻ (Junior League) sẽ thi đấu vào ngày nào bắt đầu từ tháng tới?", {
                "A": "Thứ Hai", "B": "Thứ Ba", "C": "Thứ Tư", "D": "Thứ Năm"
            }, "Người đàn ông nói: 'the Junior League needs to take over Thursday evenings instead' (thứ Năm - Thursday - D)."),
            ("Người phụ nữ nói cô ấy sẽ làm gì?", {
                "A": "Gọi cho phụ huynh", "B": "Cập nhật lịch trình trên trang web", "C": "Mua bóng bowling mới", "D": "In tờ rơi quảng cáo"
            }, "Cô ấy nói: 'update the league schedule on our website' (cập nhật lịch trình - update a schedule - B).")
        ],
        "vocab": [("bowling alley", "trung tâm / sàn bowling", "n"), ("league", "giải đấu thể thao", "n"), ("take over", "tiếp quản, chuyển sang", "v")]
    },
    {
        "range": (65, 67), "title": "Sự kiện tuần tại thư viện công cộng",
        "speakers": ["Man", "Woman", "Man", "Woman"],
        "trans": [
            ("Hi. I wanted to attend an event at the library this week. Are you open on Friday?", "Xin chào. Tôi muốn tham dự một sự kiện ở thư viện tuần này. Thứ Sáu các bạn có mở cửa không?"),
            ("Unfortunately, the library will be closed on Friday for building electrical maintenance.", "Rất tiếc, thư viện sẽ đóng cửa vào thứ Sáu để bảo trì hệ thống điện tòa nhà."),
            ("I see. Looking at your weekly flyer, I have a schedule conflict on Wednesday evening with my night class.", "Tôi hiểu rồi. Nhìn vào tờ rơi hàng tuần của các bạn, tối thứ Tư tôi bị trùng lịch với lớp học ban đêm."),
            ("Well, we have a Book Signing on Wednesday, but on Tuesday at 3 P.M., we have a Computer Class which is very popular.", "À, chúng tôi có buổi ký tặng sách vào thứ Tư, nhưng vào lúc 3 giờ chiều thứ Ba, chúng tôi có Lớp học Máy tính rất được ưa chuộng."),
            ("Tuesday afternoon fits my schedule perfectly. I'll come to that.", "Chiều thứ Ba hoàn toàn phù hợp với lịch của tôi. Tôi sẽ đến tham gia lớp đó.")
        ],
        "q_vi": [
            ("Theo người phụ nữ, tại sao thư viện lại đóng cửa vào thứ Sáu?", {
                "A": "Để bảo trì hệ thống điện", "B": "Nghỉ lễ", "C": "Thiếu nhân sự", "D": "Thời tiết xấu"
            }, "Người phụ nữ giải thích: 'closed on Friday for building electrical maintenance' (bảo trì điện - electrical maintenance - A)."),
            ("Người đàn ông đề cập đến xung đột lịch trình nào?", {
                "A": "Đi công tác xa", "B": "Họp gia đình", "C": "Tăng ca ở công ty", "D": "Trùng lịch học buổi tối"
            }, "Người đàn ông nói: 'schedule conflict on Wednesday evening with my night class' (trùng lớp học tối - with a class - D)."),
            ("Nhìn vào hình ảnh. Người đàn ông nhiều khả năng sẽ tham dự sự kiện thư viện khi nào?", {
                "A": "Thứ Hai lúc 2 giờ chiều", "B": "Thứ Ba lúc 10 giờ sáng", "C": "Thứ Ba lúc 3 giờ chiều (Lớp Máy tính)", "D": "Thứ Năm lúc 7 giờ tối"
            }, "Người đàn ông chọn lớp học máy tính chiều thứ Ba: 'Tuesday at 3 P.M., we have a Computer Class... fits my schedule' (đáp án C).")
        ],
        "vocab": [("flyer", "tờ rơi quảng cáo", "n"), ("conflict", "sự xung đột, trùng lịch", "n"), ("computer class", "lớp học vi tính", "n")]
    },
    {
        "range": (68, 70), "title": "Chọn màu sơn cho phòng hội nghị",
        "speakers": ["Woman", "Man", "Woman", "Man"],
        "trans": [
            ("Good news, Tariq. The management committee approved our proposal to repaint the main conference rooms.", "Tin tốt đây Tariq. Ban quản lý đã phê duyệt đề xuất sơn lại các phòng hội nghị chính của chúng ta."),
            ("That's great. How is the project being funded?", "Tuyệt quá. Dự án được cấp kinh phí như thế nào vậy?"),
            ("It is being funded through a special facilities maintenance grant we received from the corporate foundation.", "Nó được tài trợ thông qua một khoản trợ cấp bảo trì cơ sở vật chất đặc biệt mà chúng ta nhận được từ quỹ tập đoàn."),
            ("Wonderful. Which color from the catalog should we pick?", "Tuyệt vời. Chúng ta nên chọn màu sơn nào trong danh mục?"),
            ("Misty Blue has great reviews for office focus. Even though it is $27 a gallon, the soft blue hue will brighten the space nicely.", "Màu Misty Blue có đánh giá rất tốt giúp tăng tập trung trong văn phòng. Mặc dù giá 27 đô la một thùng, sắc xanh dịu nhẹ sẽ làm bừng sáng không gian rất đẹp.")
        ],
        "q_vi": [
            ("Cuộc trò chuyện nói về điều gì?", {
                "A": "Mua bàn ghế mới", "B": "Mở rộng văn phòng", "C": "Sơn lại các phòng họp hội nghị", "D": "Thay đổi nhà cung cấp"
            }, "Họ bàn về việc sơn lại phòng họp: 'repaint the main conference rooms' (sơn lại phòng hội nghị - C)."),
            ("Theo người phụ nữ, dự án được tài trợ bằng cách nào?", {
                "A": "Cắt giảm ngân sách", "B": "Thông qua một khoản trợ cấp (grant)", "C": "Nhân viên quyên góp", "D": "Vay vốn ngân hàng"
            }, "Dự án được tài trợ qua khoản trợ cấp: 'funded through a special facilities maintenance grant' (khoản tài trợ - A grant - B)."),
            ("Nhìn vào hình ảnh. Người phụ nữ chọn màu sơn nào?", {
                "A": "Garden Green ($23)", "B": "Misty Blue ($27)", "C": "Sunrise Peach ($19)", "D": "Antique White ($16)"
            }, "Người phụ nữ chọn: 'Misty Blue has great reviews... $27 a gallon' (đối chiếu bảng giá, chọn Misty Blue - B).")
        ],
        "vocab": [("repaint", "sơn lại", "v"), ("grant", "khoản tài trợ, tiền trợ cấp", "n"), ("hue", "tông màu, sắc thái màu", "n")]
    }
]

part3_items = []
for p in p3_metadata:
    s_idx, e_idx = p["range"]
    sk = next(it for it in skeleton if it["id"] == f"part3-{s_idx}-{e_idx}")
    
    # Dialogue lines
    lines = []
    for idx_l, (en_txt, vi_txt) in enumerate(p["trans"]):
        spk = p["speakers"][idx_l % len(p["speakers"])]
        lines.append({
            "id": f"p3-{s_idx}-{idx_l+1}",
            "speaker": spk,
            "text": en_txt,
            "vietnamese": vi_txt
        })
        
    # Questions
    sub_q = []
    for q_idx in range(3):
        q_num = s_idx + q_idx
        orig_q = sk["questions"][q_idx]
        q_vi_data = p["q_vi"][q_idx]
        
        # Clean option texts
        clean_opts = []
        for k in ["A", "B", "C", "D"]:
            raw_t = orig_q["options"][k]
            # remove headers / junk
            raw_t = raw_t.split("GOON")[0].split("GO ON")[0].split("PART4")[0].split("Directions")[0].strip()
            # clean spacing
            clean_opts.append({
                "key": k,
                "text": raw_t,
                "vietnamese": q_vi_data[1][k]
            })
            
        sub_q.append({
            "num": q_num,
            "question": orig_q["question"],
            "vietnameseQuestion": q_vi_data[0],
            "options": clean_opts,
            "correctAnswer": orig_q["correctAnswer"],
            "explanation": q_vi_data[2]
        })
        
    item_dict = {
        "id": f"part3-{s_idx}-{e_idx}",
        "part": 3,
        "partTitle": "Part 3: Đoạn hội thoại",
        "questionRange": f"Câu {s_idx} - {e_idx}",
        "title": f"Part 3 - Câu {s_idx} - {e_idx}: {p['title']}",
        "audioSrc": "/audio/test6_2024.mp3",
        "startTime": sk["startTime"],
        "endTime": sk["endTime"],
        "transcript": lines,
        "questions": sub_q,
        "vocabulary": [{"word": w, "meaning": m, "partOfSpeech": pos} for w, m, pos in p["vocab"]]
    }
    if (s_idx, e_idx) in [(62, 64), (65, 67), (68, 70)]:
        item_dict["graphicImage"] = f"/images/intensive/test6_2024/q{s_idx}_{e_idx}.png"
        item_dict["image"] = f"/images/intensive/test6_2024/q{s_idx}_{e_idx}.png"
    part3_items.append(item_dict)

# Part 4: 10 items
p4_metadata = [
    {
        "range": (71, 73), "title": "Giới thiệu lịch trình và triển lãm tại bảo tàng",
        "trans": [
            ("Good morning, everyone, and welcome to the Weston Museum of Science.", "Chào buổi sáng tất cả các bạn, và chào mừng các bạn đến với Bảo tàng Khoa học Weston."),
            ("Today we are featuring a special presentation on renewable energy technologies in our main auditorium.", "Hôm nay chúng tôi có buổi thuyết trình đặc biệt về các công nghệ năng lượng tái tạo tại khán phòng chính."),
            ("Next Tuesday, we will officially open our newly renovated astronomy wing featuring our planetarium.", "Thứ Ba tuần tới, chúng tôi sẽ chính thức mở cửa khu thiên văn học mới được cải tạo cùng đài thiên văn."),
            ("Please be sure to keep your admission wristbands visible throughout your visit.", "Xin vui lòng luôn để lộ vòng đeo tay vào cửa trong suốt chuyến tham quan của các bạn.")
        ],
        "q_vi": [
            ("Bài nói chuyện nhiều khả năng diễn ra ở đâu nhất?", {"A": "Tại một viện bảo tàng", "B": "Tại một trường đại học", "C": "Tại một sân bay", "D": "Tại một thư viện"}, "Người nói chào mừng: 'welcome to the Weston Museum of Science' (bảo tàng - At a museum - A)."),
            ("Chủ đề chính đang được thảo luận là gì?", {"A": "Quy định an toàn", "B": "Kế hoạch gây quỹ", "C": "Lịch làm việc", "D": "Các triển lãm và bài thuyết trình"}, "Nội dung nói về bài thuyết trình năng lượng tái tạo và khu triển lãm mới (exhibits - D)."),
            ("Điều gì sẽ diễn ra vào thứ Ba tuần tới?", {"A": "Một buổi hòa nhạc", "B": "Hội chợ việc làm", "C": "Mở cửa một khu triển lãm mới được cải tạo", "D": "Bảo tàng đóng cửa bảo trì"}, "Người nói thông báo: 'officially open our newly renovated astronomy wing' (mở cửa khu triển lãm - An exhibit will open - C).")
        ],
        "vocab": [("renewable energy", "năng lượng tái tạo", "n"), ("auditorium", "khán phòng lớn", "n"), ("renovated", "được cải tạo nâng cấp", "adj"), ("planetarium", "đài thiên văn mô phỏng vũ trụ", "n")]
    },
    {
        "range": (74, 76), "title": "Podcast lời khuyên nghề nghiệp cho người khởi nghiệp",
        "trans": [
            ("Welcome to 'Career Horizons', the weekly podcast for freelance professionals and entrepreneurs.", "Chào mừng các bạn đến với 'Career Horizons', chương trình podcast hàng tuần dành cho những người làm việc tự do và các nhà khởi nghiệp."),
            ("When launching an independent consulting business, many professionals discover they need formal business licenses from their local municipality.", "Khi bắt đầu kinh doanh tư vấn độc lập, nhiều chuyên gia phát hiện ra rằng họ cần có giấy phép kinh doanh chính thức từ chính quyền địa phương."),
            ("Without proper licensing, you may face regulatory fines or insurance complications.", "Nếu không có giấy phép hợp lệ, bạn có thể phải đối mặt với các khoản phạt pháp lý hoặc rắc rối về bảo hiểm."),
            ("On our podcast website, I've shared a link to a comprehensive municipal licensing directory.", "Trên trang web podcast của chúng tôi, tôi đã chia sẻ liên kết tới danh mục giấy phép cấp quận/thành phố toàn diện.")
        ],
        "q_vi": [
            ("Chương trình podcast này dành cho đối tượng nào?", {"A": "Sinh viên đại học", "B": "Nhà đầu tư bất động sản", "C": "Người làm tự do và chủ doanh nghiệp khởi nghiệp", "D": "Giáo viên trung học"}, "Podcast dành cho: 'freelance professionals and entrepreneurs' (người làm tự do và chủ doanh nghiệp - C)."),
            ("Theo người nói, một số thính giả sẽ cần thứ gì?", {"A": "Một trang web mới", "B": "Một khoản vay ngân hàng", "C": "Một văn phòng đại diện", "D": "Giấy phép kinh doanh chính thức"}, "Người nói chỉ rõ: 'need formal business licenses from their local municipality' (giấy phép kinh doanh - licenses - D)."),
            ("Người nói sẽ chia sẻ thông tin gì trên trang web?", {"A": "Đường dẫn liên kết tới danh mục hướng dẫn", "B": "Một bản khảo sát", "C": "Mã giảm giá", "D": "Số điện thoại tư vấn"}, "Người nói chia sẻ: 'shared a link to a comprehensive municipal licensing directory' (đường link danh mục - A).")
        ],
        "vocab": [("freelance", "làm việc tự do", "adj/n"), ("entrepreneur", "doanh nhân, người khởi nghiệp", "n"), ("business license", "giấy phép kinh doanh", "n"), ("directory", "danh mục tra cứu", "n")]
    },
    {
        "range": (77, 79), "title": "Thông báo cho khách lưu trú tại khu nghỉ dưỡng",
        "trans": [
            ("Attention all resort guests staying in the East Wing villas.", "Xin quý khách lưu trú tại các biệt thự Khu Cánh Đông chú ý."),
            ("Due to scheduled maintenance on our central water heating system, hot water will be temporarily unavailable from 2 to 4 P.M. today.", "Do lịch bảo trì định kỳ hệ thống máy nước nóng trung tâm, nước nóng sẽ tạm ngưng cung cấp từ 2 đến 4 giờ chiều hôm nay."),
            ("We kindly request that guests close all faucets tightly before leaving their rooms this afternoon.", "Chúng tôi kính đề nghị quý khách khóa chặt tất cả vòi nước trước khi rời khỏi phòng vào chiều nay."),
            ("To apologize for this inconvenience, please join us at the poolside pavilion at 6 P.M. this evening for a complimentary barbecue dinner.", "Để xin lỗi về sự bất tiện này, xin mời quý khách cùng tham gia tiệc tối nướng BBQ miễn phí tại nhà chòi cạnh hồ bơi vào lúc 6 giờ tối nay.")
        ],
        "q_vi": [
            ("Những người nghe là ai?", {"A": "Nhân viên khu nghỉ dưỡng", "B": "Khách lưu trú tại khách sạn / khu nghỉ dưỡng", "C": "Nhà thầu xây dựng", "D": "Cư dân địa phương"}, "Thông báo hướng tới: 'all resort guests staying in the East Wing' (khách nghỉ dưỡng - Hotel/resort guests - B)."),
            ("Người nói yêu cầu người nghe làm gì?", {"A": "Khóa chặt các vòi nước", "B": "Di dời hành lý", "C": "Thanh toán hóa đơn", "D": "Đổi phòng"}, "Người nói yêu cầu: 'close all faucets tightly before leaving' (khóa chặt vòi nước - turn off faucets - A)."),
            ("Điều gì sẽ diễn ra vào buổi tối?", {"A": "Chiếu phim", "B": "Biểu diễn ca nhạc", "C": "Họp mặt ban quản lý", "D": "Bữa tối tiệc nướng BBQ miễn phí"}, "Người nói mời: 'complimentary barbecue dinner this evening' (bữa tối nướng BBQ miễn phí - dinner - D).")
        ],
        "vocab": [("resort guests", "khách lưu trú tại khu nghỉ dưỡng", "n"), ("maintenance", "công tác bảo trì", "n"), ("faucet", "vòi nước", "n"), ("complimentary", "miễn phí", "adj")]
    },
    {
        "range": (80, 82), "title": "Podcast giới thiệu ứng dụng quản lý tài chính đầu tư",
        "trans": [
            ("Welcome to Money Reveals, the podcast for smart investors.", "Chào mừng các bạn đến với Money Reveals, chương trình podcast dành cho các nhà đầu tư thông thái."),
            ("I'm your host, Derek Lin, financial planner and wealth consultant.", "Tôi là người dẫn chương trình của các bạn, Derek Lin, chuyên gia hoạch định tài chính và tư vấn tài sản."),
            ("Today we're examining a groundbreaking software application designed to track stock portfolio dividends and optimize tax reporting.", "Hôm nay chúng ta sẽ tìm hiểu về một ứng dụng phần mềm đột phá được thiết kế để theo dõi cổ tức danh mục cổ phiếu và tối ưu hóa báo cáo thuế."),
            ("The developers are offering our listeners a chance to win free tickets to the Global Fintech Expo simply by writing a review of this podcast episode.", "Các nhà phát triển đang mang đến cho thính giả cơ hội nhận vé miễn phí tham dự Triển lãm Công nghệ Tài chính Toàn cầu chỉ bằng cách viết bài đánh giá tập podcast này.")
        ],
        "q_vi": [
            ("Người nói nhiều khả năng là ai nhất?", {"A": "Lập trình viên", "B": "Kế toán trưởng", "C": "Chuyên gia tư vấn tài chính / dẫn podcast", "D": "Giám đốc ngân hàng"}, "Người nói giới thiệu: 'I\\'m your host, Derek Lin, financial planner' (chuyên viên hoạch định tài chính - financial planner - C)."),
            ("Theo người nói, ứng dụng phần mềm có thể dùng vào việc gì?", {"A": "Mua sắm trực tuyến", "B": "Chuyển tiền quốc tế", "C": "Lập ngân sách gia đình", "D": "Theo dõi danh mục đầu tư và thuế"}, "Ứng dụng dùng để: 'track stock portfolio dividends and optimize tax reporting' (quản lý danh mục đầu tư - track investments - D)."),
            ("Làm thế nào thính giả nhận được vé miễn phí?", {"A": "Bằng cách viết bài đánh giá podcast", "B": "Bằng cách mua ứng dụng", "C": "Bằng cách đăng ký kênh", "D": "Bằng cách chia sẻ bài đăng"}, "Người nghe nhận vé: 'simply by writing a review of this podcast episode' (viết đánh giá - writing a review - A).")
        ],
        "vocab": [("investor", "nhà đầu tư", "n"), ("portfolio", "danh mục đầu tư chứng khoán", "n"), ("dividend", "tiền cổ tức", "n"), ("review", "bài đánh giá nhận xét", "n")]
    },
    {
        "range": (83, 85), "title": "Khách hàng liên hệ bộ phận hỗ trợ kỹ thuật máy tính",
        "trans": [
            ("Hi. I'm calling for tech support regarding the desktop computer I purchased from your store last month.", "Xin chào. Tôi gọi đến bộ phận hỗ trợ kỹ thuật liên quan đến chiếc máy tính để bàn tôi mua từ cửa hàng các bạn tháng trước."),
            ("Every time I attempt to connect to our office wireless network, the system fails to recognize the network adapter.", "Mỗi khi tôi thử kết nối với mạng không dây của văn phòng, hệ thống đều không nhận diện được bộ điều hợp mạng."),
            ("I have already restarted the device, updated the drivers, and reset the modem.", "Tôi đã khởi động lại thiết bị, cập nhật trình điều khiển và khởi động lại modem rồi."),
            ("I think I've done all I can do on my end, so I need an in-person technician to come inspect the hardware.", "Tôi nghĩ tôi đã làm tất cả những gì có thể làm từ phía tôi rồi, vì vậy tôi cần một kỹ thuật viên đến tận nơi kiểm tra phần cứng.")
        ],
        "q_vi": [
            ("Người nói nhiều khả năng đang gọi điện cho ai?", {"A": "Nhà cung cấp mạng", "B": "Bộ phận hỗ trợ kỹ thuật máy tính", "C": "Cửa hàng sửa điện thoại", "D": "Nhân viên bán hàng"}, "Người nói mở đầu: 'calling for tech support regarding the desktop computer' (hỗ trợ kỹ thuật - technical support - B)."),
            ("Người nói gặp phải vấn đề gì?", {"A": "Màn hình đen", "B": "Máy không lên nguồn", "C": "Bàn phím hỏng", "D": "Không kết nối được mạng không dây"}, "Sự cố: 'fails to recognize the network adapter... connect to wireless network' (không kết nối mạng được - cannot connect to network - D)."),
            ("Tại sao người nói lại nói, \"Tôi nghĩ tôi đã làm tất cả những gì có thể làm rồi\"?", {"A": "Để yêu cầu hoàn tiền", "B": "Để giải thích lý do cần thợ đến kiểm tra tận nơi", "C": "Để từ chối mua thêm đồ", "D": "Để khen ngợi dịch vụ"}, "Người nói liệt kê đã thử mọi cách để chứng minh việc tự khắc phục không hiệu quả và cần kỹ thuật viên đến tận nơi (B).")
        ],
        "vocab": [("tech support", "hỗ trợ kỹ thuật", "n"), ("network adapter", "bộ điều hợp mạng mạng card", "n"), ("restart", "khởi động lại", "v"), ("inspect", "kiểm tra thanh tra", "v")]
    },
    {
        "range": (86, 88), "title": "Thông báo ngày tổng vệ sinh văn phòng",
        "trans": [
            ("Attention team. Next Tuesday the 11th is our scheduled quarterly office cleanup day.", "Xin toàn đội chú ý. Thứ Ba tuần tới ngày 11 là ngày tổng vệ sinh văn phòng định kỳ hàng quý của chúng ta."),
            ("I'd like to extend special thanks to Rajeev for ordering all the recycling bins and shredding bags in advance.", "Tôi muốn gửi lời cảm ơn đặc biệt tới Rajeev vì đã đặt trước tất cả các thùng tái chế và túi đựng giấy hủy."),
            ("Please sort through your paperwork and dispose of outdated project files.", "Các bạn vui lòng phân loại giấy tờ và tiêu hủy các hồ sơ dự án đã cũ."),
            ("If you run out of space, the south corner of the office has a lot of empty file cabinets that everyone is welcome to use.", "Nếu các bạn thiếu chỗ để, góc phía nam của văn phòng có rất nhiều tủ đựng tài liệu còn trống mà mọi người đều có thể sử dụng.")
        ],
        "q_vi": [
            ("Những người nghe sẽ làm gì vào thứ Ba tới?", {"A": "Tham gia hội thảo", "B": "Dọn dẹp vệ sinh văn phòng", "C": "Đi dã ngoại", "D": "Kiểm kê hàng hóa"}, "Sự kiện: 'quarterly office cleanup day' (ngày dọn dẹp văn phòng - clean an office - B)."),
            ("Người nói cảm ơn Rajeev vì đã làm gì?", {"A": "Dọn sạch sảnh", "B": "In tài liệu", "C": "Tổ chức cuộc họp", "D": "Đặt mua các thùng tái chế và túi hủy giấy"}, "Cảm ơn Rajeev: 'ordering all the recycling bins and shredding bags' (đặt đồ dùng vệ sinh/tái chế - ordered supplies - D)."),
            ("Tại sao người nói lại nói, \"góc phía nam có rất nhiều tủ tài liệu còn trống\"?", {"A": "Để gợi ý nơi cất trữ tài liệu còn thừa", "B": "Để yêu cầu chuyển tủ đi", "C": "Để cảnh báo văn phòng chật", "D": "Để bán thanh lý tủ cũ"}, "Người nói chỉ ra chỗ còn nhiều tủ trống để đồng nghiệp có chỗ cất giữ tài liệu (suggest storage space - A).")
        ],
        "vocab": [("cleanup", "dọn dẹp tổng vệ sinh", "n"), ("recycling bin", "thùng rác tái chế", "n"), ("shredding", "tiêu hủy giấy tờ bảo mật", "n"), ("file cabinet", "tủ đựng hồ sơ tài liệu", "n")]
    },
    {
        "range": (89, 91), "title": "Thông báo hệ thống xử lý đơn hàng gặp sự cố tại Ziegler Inc",
        "trans": [
            ("Hello, and thank you for calling Ziegler Incorporated, the area's top supplier of commercial plumbing fixtures and piping.", "Xin chào, và cảm ơn quý khách đã gọi đến Ziegler Incorporated, nhà cung cấp thiết bị và đường ống nước thương mại hàng đầu khu vực."),
            ("We are currently experiencing an unexpected outage with our central inventory database system.", "Hiện tại chúng tôi đang gặp phải sự cố ngừng hoạt động ngoài dự kiến với hệ thống cơ sở dữ liệu hàng tồn kho trung tâm."),
            ("As a result, our customer representatives are temporarily unable to confirm stock availability or process new orders over the phone.", "Do đó, các đại diện chăm sóc khách hàng của chúng tôi tạm thời không thể xác nhận tình trạng còn hàng hoặc xử lý các đơn hàng mới qua điện thoại."),
            ("If you leave a voicemail with your customer account ID, a confirmation will arrive in an e-mail as soon as our servers are restored.", "Nếu quý khách để lại tin nhắn thoại kèm mã tài khoản khách hàng, một email xác nhận sẽ được gửi tới ngay khi máy chủ của chúng tôi được khôi phục.")
        ],
        "q_vi": [
            ("Công ty Ziegler Incorporated bán mặt hàng gì?", {"A": "Thiết bị đường ống nước thương mại", "B": "Gạch ốp lát", "C": "Đồ nội thất", "D": "Thiết bị điện tử"}, "Công ty là nhà cung cấp: 'commercial plumbing fixtures and piping' (thiết bị ống nước - plumbing fixtures - A)."),
            ("Theo người nói, công ty đang gặp phải sự cố gì?", {"A": "Hỏa hoạn", "B": "Hệ thống máy tính cơ sở dữ liệu bị sập/mất điện", "C": "Thiếu hàng hóa", "D": "Đình công"}, "Sự cố: 'unexpected outage with our central inventory database system' (sự cố hệ thống - system outage - B)."),
            ("Thứ gì sẽ được gửi đến qua email?", {"A": "Hóa đơn thanh toán", "B": "Mã giảm giá", "C": "Xác nhận đơn hàng", "D": "Bản báo giá mới"}, "Thông báo: 'a confirmation will arrive in an e-mail' (xác nhận - A confirmation - C).")
        ],
        "vocab": [("plumbing fixtures", "thiết bị vệ sinh, phụ kiện ống nước", "n"), ("outage", "sự cố mất điện/ngừng hoạt động hệ thống", "n"), ("inventory", "hàng tồn kho", "n"), ("restore", "khôi phục lại", "v")]
    },
    {
        "range": (92, 94), "title": "Hội đồng Nghệ thuật Thành phố thảo luận dự án điêu khắc",
        "trans": [
            ("As members of the City's Arts Commission, it's our responsibility to manage public art installations throughout the municipal district.", "Là thành viên của Hội đồng Nghệ thuật Thành phố, trách nhiệm của chúng ta là quản lý các công trình nghệ thuật công cộng trên toàn địa bàn thành phố."),
            ("The mayor has officially decided to commission a new public sculpture for the central plaza in front of City Hall.", "Thị trưởng đã chính thức quyết định đặt hàng một tác phẩm điêu khắc công cộng mới cho quảng trường trung tâm phía trước Tòa thị chính."),
            ("We recently conducted a citizen opinion survey. The primary goal was to determine what theme residents prefer for public artwork.", "Gần đây chúng ta đã tiến hành khảo sát ý kiến người dân. Mục tiêu chính là xác định xem cư dân yêu thích chủ đề nào cho tác phẩm nghệ thuật công cộng."),
            ("Regarding artist selection, I think Alvaro Gomez has won several prestigious national awards, so his portfolio deserves our serious consideration.", "Về việc lựa chọn nghệ sĩ, tôi nghĩ Alvaro Gomez đã từng đoạt nhiều giải thưởng danh giá cấp quốc gia, vì vậy hồ sơ năng lực của anh ấy rất đáng để chúng ta cân nhắc nghiêm túc.")
        ],
        "q_vi": [
            ("Thị trưởng thành phố đã quyết định làm gì?", {"A": "Xây công viên mới", "B": "Đặt làm tác phẩm điêu khắc công cộng mới", "C": "Tăng ngân sách", "D": "Tổ chức lễ hội"}, "Thị trưởng quyết định: 'commission a new public sculpture' (đặt làm tượng điêu khắc công cộng - B)."),
            ("Mục tiêu của cuộc khảo sát là gì?", {"A": "Xác định chủ đề nghệ thuật ưa thích của người dân", "B": "Thu thập tiền quyên góp", "C": "Tìm kiếm địa điểm", "D": "Đánh giá chi phí"}, "Mục tiêu: 'determine what theme residents prefer' (tìm hiểu sở thích của người dân - A)."),
            ("Tại sao người nói lại nói, \"Tôi nghĩ Alvaro Gomez đã từng đoạt nhiều giải thưởng danh giá\"?", {"A": "Để khen ngợi thị trưởng", "B": "Để từ chối đề xuất", "C": "Để đề cử một nghệ sĩ thực hiện dự án", "D": "Để giải thích một giải thưởng"}, "Người nói khen ngợi Alvaro Gomez nhằm đề xuất chọn nghệ sĩ này thực hiện dự án (recommend an artist - C).")
        ],
        "vocab": [("Arts Commission", "Hội đồng nghệ thuật", "n"), ("sculpture", "tác phẩm điêu khắc", "n"), ("commission", "đặt hàng tác phẩm nghệ thuật", "v"), ("prestigious", "uy tín, danh giá", "adj")]
    },
    {
        "range": (95, 97), "title": "Nhà hát thông báo tình trạng vé hòa nhạc Mr. Kwan",
        "trans": [
            ("Good afternoon, Mr. Kwan. I'm calling from the Symphony Center box office regarding the concert tickets you inquired about.", "Xin chào ông Kwan. Tôi gọi từ phòng vé Trung tâm Giao hưởng liên quan đến vé xem hòa nhạc mà ông đã hỏi thăm."),
            ("You requested four adjacent seats for the Beethoven gala on Saturday evening.", "Ông đã yêu cầu bốn ghế liền kề nhau cho đêm biểu diễn dạ tiệc Beethoven vào tối thứ Bảy."),
            ("Unfortunately, the orchestra level is completely sold out. However, if you look at the seating chart, the Mezzanine Tier section still has four seats together available at $125 each.", "Rất tiếc, khu vực tầng trệt (Orchestra) đã bán hết sạch vé. Tuy nhiên nếu ông nhìn vào sơ đồ chỗ ngồi, khu vực Tầng Lửng (Mezzanine Tier) vẫn còn bốn ghế liền nhau với giá 125 đô la mỗi ghế."),
            ("Because demand is extremely high, we can hold these seats for you for only 24 hours. Please call us back within 24 hours to confirm your purchase.", "Vì nhu cầu rất cao, chúng tôi chỉ có thể giữ chỗ cho ông trong vòng 24 giờ. Xin vui lòng gọi lại cho chúng tôi trong vòng 24 giờ để xác nhận việc mua vé.")
        ],
        "q_vi": [
            ("Người nói nhiều khả năng là ai nhất?", {"A": "Nhạc trưởng", "B": "Nhạc công", "C": "Nhân viên an ninh", "D": "Nhân viên phòng vé nhà hát giao hưởng"}, "Người nói gọi từ 'Symphony Center box office' (phòng vé trung tâm giao hưởng - Box office worker - D)."),
            ("Nhìn vào hình ảnh sơ đồ chỗ ngồi. Vé ở khu vực còn chỗ trống có giá bao nhiêu?", {"A": "$75", "B": "$100", "C": "$125", "D": "$150"}, "Khu vực Mezzanine còn 4 ghế liền nhau: 'Mezzanine Tier section... at $125 each' (đáp án C: $125)."),
            ("Người nghe cần phải làm gì trong vòng 24 giờ?", {"A": "Gọi điện xác nhận mua vé", "B": "Đến nhận vé", "C": "Gửi email khiếu nại", "D": "Điền vào biểu mẫu"}, "Yêu cầu: 'call us back within 24 hours to confirm your purchase' (gọi điện xác nhận mua vé - A).")
        ],
        "vocab": [("box office", "phòng bán vé", "n"), ("adjacent seats", "các ghế liền kề nhau", "n"), ("seating chart", "sơ đồ chỗ ngồi", "n"), ("demand", "nhu cầu của thị trường", "n")]
    },
    {
        "range": (98, 100), "title": "Chuyến xe buýt tham quan Kenzie Harbor thay đổi lịch trình",
        "trans": [
            ("Welcome to this bus tour of Kenzie Harbor! We're excited to show you the historic waterfront and its famous maritime landmarks.", "Chào mừng các bạn đến với chuyến tham quan bằng xe buýt quanh Vịnh Cảng Kenzie! Chúng tôi rất hào hứng được giới thiệu với các bạn khu cảng lịch sử và các địa danh hàng hải nổi tiếng."),
            ("Before we depart, please look at the tour map in your brochure. Due to extensive road construction near the harbor inlet, Stop 3, the Maritime Museum, has been canceled for today's itinerary.", "Trước khi khởi hành, xin vui lòng nhìn vào bản đồ tour trong tập gấp của các bạn. Do công trình thi công đường lớn gần lối vào cảng, Điểm dừng số 3, Bảo tàng Hàng hải, đã bị hủy trong lịch trình ngày hôm nay."),
            ("To compensate for this change, we've extended our time at the historical Cannery, and our tour company will provide complimentary meal vouchers for lunch at the harbor market.", "Để bù đắp cho sự thay đổi này, chúng tôi đã kéo dài thời gian tham quan tại Nhà máy Đóng hộp lịch sử, và công ty tour của chúng tôi sẽ tặng phiếu ăn trưa miễn phí tại chợ cảng.")
        ],
        "q_vi": [
            ("Nhìn vào hình ảnh. Điểm dừng nào đã bị hủy bỏ?", {"A": "Điểm dừng 1 (Tòa thị chính)", "B": "Điểm dừng 2 (Bưu điện)", "C": "Điểm dừng 3 (Bảo tàng)", "D": "Điểm dừng 4 (Nhà máy đóng hộp)"}, "Người nói thông báo: 'Stop 3, the Maritime Museum, has been canceled' (đáp án C)."),
            ("Tại sao điểm dừng đó lại bị hủy?", {"A": "Thời tiết xấu", "B": "Đường đang thi công sửa chữa", "C": "Bảo tàng đóng cửa bảo trì", "D": "Thiếu thời gian"}, "Lý do: 'Due to extensive road construction near the harbor inlet' (do công trình thi công đường sá - road construction - B)."),
            ("Những người nghe sẽ nhận được món quà gì?", {"A": "Bản đồ lưu niệm", "B": "Áo mưa", "C": "Vé vào cửa bảo tàng", "D": "Phiếu ăn miễn phí (meal vouchers)"}, "Người nói cho biết: 'provide complimentary meal vouchers for lunch' (phiếu ăn miễn phí - meal vouchers - D).")
        ],
        "vocab": [("maritime", "thuộc về hàng hải, biển cả", "adj"), ("landmark", "địa danh nổi tiếng mang tính biểu tượng", "n"), ("brochure", "sách gấp giới thiệu quảng cáo", "n"), ("meal voucher", "phiếu ăn uống", "n")]
    }
]

part4_items = []
for p in p4_metadata:
    s_idx, e_idx = p["range"]
    sk = next(it for it in skeleton if it["id"] == f"part4-{s_idx}-{e_idx}")
    
    # Talk lines
    lines = []
    for idx_l, (en_txt, vi_txt) in enumerate(p["trans"]):
        lines.append({
            "id": f"p4-{s_idx}-{idx_l+1}",
            "speaker": "Speaker",
            "text": en_txt,
            "vietnamese": vi_txt
        })
        
    # Questions
    sub_q = []
    for q_idx in range(3):
        q_num = s_idx + q_idx
        orig_q = sk["questions"][q_idx]
        q_vi_data = p["q_vi"][q_idx]
        
        clean_opts = []
        for k in ["A", "B", "C", "D"]:
            raw_t = orig_q["options"][k]
            raw_t = raw_t.split("GOON")[0].split("GO ON")[0].split("PART4")[0].split("Directions")[0].strip()
            clean_opts.append({
                "key": k,
                "text": raw_t,
                "vietnamese": q_vi_data[1][k]
            })
            
        sub_q.append({
            "num": q_num,
            "question": orig_q["question"],
            "vietnameseQuestion": q_vi_data[0],
            "options": clean_opts,
            "correctAnswer": orig_q["correctAnswer"],
            "explanation": q_vi_data[2]
        })
        
    item_dict = {
        "id": f"part4-{s_idx}-{e_idx}",
        "part": 4,
        "partTitle": "Part 4: Bài nói chuyện",
        "questionRange": f"Câu {s_idx} - {e_idx}",
        "title": f"Part 4 - Câu {s_idx} - {e_idx}: {p['title']}",
        "audioSrc": "/audio/test6_2024.mp3",
        "startTime": sk["startTime"],
        "endTime": sk["endTime"],
        "transcript": lines,
        "questions": sub_q,
        "vocabulary": [{"word": w, "meaning": m, "partOfSpeech": pos} for w, m, pos in p["vocab"]]
    }
    if (s_idx, e_idx) in [(95, 97), (98, 100)]:
        item_dict["graphicImage"] = f"/images/intensive/test6_2024/q{s_idx}_{e_idx}.png"
        item_dict["image"] = f"/images/intensive/test6_2024/q{s_idx}_{e_idx}.png"
    part4_items.append(item_dict)

all_items = part1_items + part2_items + part3_items + part4_items
print(f"Total Test 6 items: {len(all_items)}")

# Assertions
assert len(all_items) == 54, f"Expected 54 items, got {len(all_items)}"
q_cnt = 0
for it in all_items:
    for q in it["questions"]:
        q_cnt += 1
        expected = ans_key[str(q["num"])]
        actual = q["correctAnswer"]
        assert expected == actual, f"Mismatch in Q{q['num']}: expected {expected}, got {actual}"
assert q_cnt == 100, f"Expected 100 questions, got {q_cnt}"

out_path = 'data/intensive_listening_2024_test6.ts'
ts_content = f"""// Dữ liệu luyện nghe chi tiết (Intensive Listening) - ETS TOEIC 2024 Test 6
// Áp dụng kỹ thuật Virtual Timestamp Slicing từ audio gốc /audio/test6_2024.mp3
// Transcript, câu hỏi và giải thích chi tiết theo đề thi ETS 2024 Test 6

import type {{ IntensiveListeningItem }} from './intensive_listening_types';

export const test6_2024_IntensiveData: IntensiveListeningItem[] = {json.dumps(all_items, ensure_ascii=False, indent=2)};
"""

with open(out_path, 'w', encoding='utf-8') as f:
    f.write(ts_content)

print(f"Successfully generated {out_path} ({os.path.getsize(out_path)} bytes)")
