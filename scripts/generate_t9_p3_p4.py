import json

# Vietnamese metadata for Test 9 Part 3 (13 items: Q32-34 to Q68-70)
meta_p3_t9 = {
    "part3-32-34": {
        "title": "Tìm kiếm tài liệu tại thư viện",
        "speakers": ["Man", "Woman", "Man", "Woman"],
        "lines_vn": [
            "Xin lỗi cô, tôi đang tìm cuốn sách về lịch sử kiến trúc địa phương nhưng không thấy trên kệ.",
            "Để tôi tra cứu giúp anh trên hệ thống máy tính của thư viện nhé. Cuốn sách đó hiện đã được một độc giả khác mượn rồi.",
            "Ồ tiếc quá, tôi cần tài liệu đó cho bài nghiên cứu vào cuối tuần này.",
            "Anh có thể đặt trước cuốn sách trực tuyến, hoặc tôi có thể kiểm tra xem thư viện chi nhánh lân cận có sẵn bản sao không."
        ],
        "q_vn": {
            32: "Người đàn ông đang cố gắng làm gì?",
            33: "Người phụ nữ giải thích điều gì về một cuốn sách?",
            34: "Người phụ nữ đề xuất làm gì tiếp theo?"
        },
        "opts_vn": {
            32: {"A": "Đăng ký thẻ thư viện", "B": "Tìm kiếm một cuốn sách", "C": "Tham gia một câu lạc bộ đọc sách", "D": "Nộp một bài nghiên cứu"},
            33: {"A": "Nó hiện đang được mượn bởi người khác.", "B": "Nó đã bị thất lạc.", "C": "Nó chỉ có bản điện tử.", "D": "Nó đang được tu sửa đóng lại bìa."},
            34: {"A": "Gọi cho người quản lý", "B": "Gửi một email", "C": "In một bản sao", "D": "Kiểm tra ở một thư viện chi nhánh khác"}
        },
        "exps": {
            32: "Người đàn ông mở đầu: 'I'm looking for a book on local architectural history...' (tìm kiếm sách).",
            33: "Người phụ nữ tra cứu và nói cuốn sách hiện đang được người khác mượn ('checked out by another patron').",
            34: "Người phụ nữ đề xuất kiểm tra chi nhánh lân cận ('check if a neighboring branch has a copy')."
        },
        "vocab": [
            {"word": "patron", "meaning": "độc giả thư viện, khách hàng quen", "partOfSpeech": "n"},
            {"word": "checked out", "meaning": "đã được mượn ra ngoài", "partOfSpeech": "adj"},
            {"word": "branch library", "meaning": "thư viện chi nhánh", "partOfSpeech": "n"}
        ]
    },
    "part3-35-37": {
        "title": "Đặt hoa cho lễ kỷ niệm công ty",
        "speakers": ["Woman", "Man", "Woman", "Man"],
        "lines_vn": [
            "Chào buổi sáng, tôi muốn đặt một số lẵng hoa cho lễ kỷ niệm thành lập công ty chúng tôi vào thứ Sáu tới.",
            "Chúng tôi rất hân hạnh được phục vụ. Cô đã chọn được loại hoa hay tông màu chủ đạo nào chưa?",
            "Tôi muốn tông màu vàng và trắng để phù hợp với logo của công ty chúng tôi.",
            "Được chứ, tôi sẽ chuẩn bị bản phác thảo các mẫu hoa và gửi báo giá cho cô qua email trong chiều nay."
        ],
        "q_vn": {
            35: "Người phụ nữ đang lên kế hoạch cho sự kiện gì?",
            36: "Người phụ nữ yêu cầu chi tiết gì về các lẵng hoa?",
            37: "Người đàn ông nói anh ấy sẽ làm gì vào chiều nay?"
        },
        "opts_vn": {
            35: {"A": "Một đám cưới", "B": "Một buổi gây quỹ", "C": "Một tiệc sinh nhật", "D": "Một lễ kỷ niệm công ty"},
            36: {"A": "Kích thước nhỏ", "B": "Giao hàng sớm", "C": "Màu sắc cụ thể", "D": "Có kèm thiệp chúc mừng"},
            37: {"A": "Giao hàng", "B": "Gửi bản báo giá", "C": "Gọi điện thoại", "D": "Chụp ảnh sản phẩm"}
        },
        "exps": {
            35: "Người phụ nữ nói đặt hoa cho 'company anniversary celebration' (lễ kỷ niệm công ty).",
            36: "Người phụ nữ yêu cầu màu vàng và trắng theo màu logo (specific colors).",
            37: "Người đàn ông nói sẽ gửi bảng báo giá qua email vào buổi chiều (send a price quote)."
        },
        "vocab": [
            {"word": "anniversary", "meaning": "lễ kỷ niệm", "partOfSpeech": "n"},
            {"word": "floral arrangement", "meaning": "lẵng hoa, sự cắm hoa", "partOfSpeech": "n"},
            {"word": "price quote", "meaning": "bản báo giá", "partOfSpeech": "n"}
        ]
    },
    "part3-38-40": {
        "title": "Phỏng vấn và tuyển dụng đầu bếp cho nhà hàng",
        "speakers": ["Man", "Woman", "Man", "Woman"],
        "lines_vn": [
            "Tôi vừa hoàn thành buổi phỏng vấn với ứng viên cuối cùng cho vị trí bếp trưởng.",
            "Anh thấy thế nào? Chúng ta cần một người có kinh nghiệm về món ăn Địa Trung Hải.",
            "Ứng viên Elena có hồ sơ rất ấn tượng và từng làm việc tại nhà hàng năm sao ở Rome. Cô ấy còn chuẩn bị một món ăn thử cho chúng ta thưởng thức.",
            "Tuyệt vời quá. Tôi sẽ trao đổi với quản lý chung để đưa ra lời mời làm việc chính thức."
        ],
        "q_vn": {
            38: "Các người nói hào hứng về điều gì?",
            39: "Các người nói có khả năng nhất làm việc ở đâu?",
            40: "Người phụ nữ sẽ nói gì với người quản lý của mình?"
        },
        "opts_vn": {
            38: {"A": "Một công thức món ăn mới", "B": "Một địa điểm khai trương", "C": "Một ứng viên xin việc triển vọng", "D": "Một giải thưởng ẩm thực"},
            39: {"A": "Tại một khách sạn", "B": "Tại một nhà hàng", "C": "Tại một trường dạy nấu ăn", "D": "Tại một công ty sự kiện"},
            40: {"A": "Đề xuất đưa ra lời mời làm việc", "B": "Yêu cầu tăng ngân sách", "C": "Thay đổi thực đơn", "D": "Hoãn buổi phỏng vấn"}
        },
        "exps": {
            38: "Họ hào hứng về ứng viên xin việc Elena có kinh nghiệm ấn tượng (A job candidate).",
            39: "Họ tuyển dụng vị trí đầu bếp và bàn về thực đơn món ăn, chứng tỏ làm tại nhà hàng (At a restaurant).",
            40: "Người phụ nữ nói sẽ trao đổi với quản lý để mở lời mời làm việc (make a job offer)."
        },
        "vocab": [
            {"word": "candidate", "meaning": "ứng viên xin việc", "partOfSpeech": "n"},
            {"word": "job offer", "meaning": "lời mời nhận việc", "partOfSpeech": "n"},
            {"word": "Mediterranean cuisine", "meaning": "ẩm thực Địa Trung Hải", "partOfSpeech": "n"}
        ]
    },
    "part3-41-43": {
        "title": "Bảo trì hệ thống sưởi và thông gió tòa nhà",
        "speakers": ["Woman", "Man", "Woman", "Man"],
        "lines_vn": [
            "Hệ thống sưởi ở tầng ba dường như hoạt động không ổn định, vài phòng phàn nàn là quá lạnh.",
            "Tôi đã nhận được thông báo từ ban quản trị. Đội bảo trì sẽ đến kiểm tra các van điều nhiệt vào đầu giờ chiều.",
            "Trong lúc đó, chúng ta có nên phát thêm máy sưởi di động cho các phòng bị ảnh hưởng không?",
            "Có, tôi sẽ lấy vài chiếc máy sưởi trong phòng chứa đồ mang lên cho họ."
        ],
        "q_vn": {
            41: "Vấn đề mà người phụ nữ nhắc đến là gì?",
            42: "Khi nào đội kỹ thuật bảo trì sẽ đến?",
            43: "Người đàn ông đồng ý làm điều gì?"
        },
        "opts_vn": {
            41: {"A": "Rò rỉ đường ống nước", "B": "Mất nguồn điện", "C": "Hệ thống sưởi hoạt động kém", "D": "Cửa sổ bị kẹt"},
            42: {"A": "Ngay lập tức", "B": "Vào sáng mai", "C": "Vào đầu giờ chiều", "D": "Vào cuối tuần"},
            43: {"A": "Cung cấp máy sưởi tạm thời", "B": "Gọi thợ sửa ngoài", "C": "Chuyển văn phòng", "D": "Gửi thông báo toàn công ty"}
        },
        "exps": {
            41: "Người phụ nữ phản ánh nhiệt độ quá lạnh do hệ thống sưởi gặp trục trặc ('heating system not working properly').",
            42: "Người đàn ông nói đội bảo trì sẽ đến vào đầu giờ chiều ('early afternoon').",
            43: "Người đàn ông đồng ý mang máy sưởi di động từ kho lên phát cho nhân viên."
        },
        "vocab": [
            {"word": "heating system", "meaning": "hệ thống sưởi ấm", "partOfSpeech": "n"},
            {"word": "maintenance crew", "meaning": "đội bảo trì", "partOfSpeech": "n"},
            {"word": "portable heater", "meaning": "máy sưởi di động", "partOfSpeech": "n"}
        ]
    },
    "part3-44-46": {
        "title": "Lựa chọn mặt bằng mở rộng phòng khám nha khoa",
        "speakers": ["Man", "Woman", "Man", "Woman"],
        "lines_vn": [
            "Cô đã xem xét mặt bằng ở khu phố mới để mở rộng phòng khám của chúng ta chưa?",
            "Tôi đã đến xem rồi. Vị trí đó rất gần bến tàu điện ngầm và có lượng người qua lại đông đúc.",
            "Giá thuê có nằm trong mức dự toán ngân sách của chúng ta không?",
            "Hơi cao hơn một chút so với dự kiến, nhưng chủ nhà sẵn sàng miễn phí hai tháng đầu tiên để chúng ta sửa sang nội thất."
        ],
        "q_vn": {
            44: "Các người nói đang thảo luận về dự án gì?",
            45: "Người phụ nữ thích điều gì ở địa điểm mới?",
            46: "Chủ tòa nhà đưa ra ưu đãi gì?"
        },
        "opts_vn": {
            44: {"A": "Mở một hiệu thuốc", "B": "Cải tạo trung tâm thể thao", "C": "Đầu tư vào chuỗi cà phê", "D": "Mở rộng phòng khám nha khoa"},
            45: {"A": "Gần phương tiện giao thông công cộng", "B": "Có bãi đỗ xe rộng rãi", "C": "Diện tích mặt bằng lớn", "D": "Khu dân cư yên tĩnh"},
            46: {"A": "Giảm tiền đặt cọc", "B": "Cung cấp đồ nội thất", "C": "Miễn phí tiền thuê trong thời gian đầu", "D": "Hỗ trợ giấy phép kinh doanh"}
        },
        "exps": {
            44: "Họ thảo luận về việc tìm mặt bằng mở rộng phòng khám nha khoa (dental clinic expansion).",
            45: "Người phụ nữ khen vị trí gần ga tàu điện ngầm (near public transit).",
            46: "Chủ nhà đồng ý miễn phí tiền thuê 2 tháng đầu để sửa chữa (free rent for the first two months)."
        },
        "vocab": [
            {"word": "clinic expansion", "meaning": "sự mở rộng phòng khám", "partOfSpeech": "n"},
            {"word": "subway station", "meaning": "ga tàu điện ngầm", "partOfSpeech": "n"},
            {"word": "renovate", "meaning": "cải tạo, sửa sang", "partOfSpeech": "v"}
        ]
    },
    "part3-47-49": {
        "title": "Đặt gỗ đóng đồ nội thất và chiết khấu đơn hàng lớn",
        "speakers": ["Woman", "Man", "Woman", "Man"],
        "lines_vn": [
            "Chào anh, xưởng chúng tôi cần đặt 50 tấm gỗ sồi cho đơn hàng nội thất khách sạn.",
            "Hiện tại chúng tôi có sẵn đủ số lượng trong kho. Nếu cô đặt từ 40 tấm trở lên, chúng tôi áp dụng mức chiết khấu 15%.",
            "Mức chiết khấu đó rất tốt. Thời gian giao hàng dự kiến là khi nào?",
            "Nếu cô hoàn tất thanh toán trước 3 giờ chiều nay, xe tải giao hàng sẽ đến xưởng của cô vào sáng thứ Năm."
        ],
        "q_vn": {
            47: "Người phụ nữ muốn đặt mua vật liệu gì?",
            48: "Điều kiện để nhận chiết khấu 15% là gì?",
            49: "Đơn hàng dự kiến được giao vào thời gian nào?"
        },
        "opts_vn": {
            47: {"A": "Gạch lát sàn", "B": "Tấm gỗ sồi", "C": "Thép xây dựng", "D": "Sơn tường"},
            48: {"A": "Đặt mua số lượng lớn", "B": "Thanh toán bằng tiền mặt", "C": "Là khách hàng thân thiết", "D": "Tự đến lấy hàng"},
            49: {"A": "Chiều nay", "B": "Sáng mai", "C": "Thứ Tư", "D": "Sáng thứ Năm"}
        },
        "exps": {
            47: "Người phụ nữ cần đặt 50 tấm gỗ sồi (oak wood planks).",
            48: "Người đàn ông thông báo chiết khấu 15% khi đặt từ 40 tấm trở lên (bulk order / ordering in large quantity).",
            49: "Hàng sẽ được giao vào sáng thứ Năm ('Thursday morning')."
        },
        "vocab": [
            {"word": "oak planks", "meaning": "các tấm gỗ sồi", "partOfSpeech": "n"},
            {"word": "discount", "meaning": "chiết khấu, giảm giá", "partOfSpeech": "n"},
            {"word": "bulk order", "meaning": "đơn đặt hàng số lượng lớn", "partOfSpeech": "n"}
        ]
    },
    "part3-50-52": {
        "title": "Chuẩn bị kế hoạch dã ngoại thường niên của công ty",
        "speakers": ["Man", "Woman", "Man", "Woman"],
        "lines_vn": [
            "Chúng ta đã chọn được địa điểm cho chuyến dã ngoại thường niên của công ty vào tháng sau chưa?",
            "Tôi đang cân nhắc giữa công viên ven sông Lakeside và khu cắm trại đồi thông Pine Hill.",
            "Lakeside có bãi cỏ rộng và khu vực nướng thịt BBQ có mái che, phòng trường hợp trời mưa.",
            "Ý kiến hay đấy. Tôi sẽ liên hệ với ban quản lý công viên Lakeside để đặt chỗ cho ngày thứ Bảy."
        ],
        "q_vn": {
            50: "Các người nói đang thảo luận về sự kiện gì?",
            51: "Tại sao công viên Lakeside được ưu tiên lựa chọn?",
            52: "Người phụ nữ sẽ làm gì tiếp theo?"
        },
        "opts_vn": {
            50: {"A": "Buổi tiệc chia tay", "B": "Chuyến công tác đào tạo", "C": "Chuyến dã ngoại công ty", "D": "Giải chạy từ thiện"},
            51: {"A": "Gần trụ sở công ty hơn", "B": "Có khu vực mái che tiện lợi", "C": "Chi phí rẻ hơn", "D": "Có hồ bơi"},
            52: {"A": "Liên hệ đặt chỗ tại công viên", "B": "Khảo sát ý kiến nhân viên", "C": "Thuê xe buýt", "D": "Mua đồ ăn"}
        },
        "exps": {
            50: "Họ thảo luận về 'annual company picnic' (chuyến dã ngoại công ty thường niên).",
            51: "Người đàn ông nêu ưu điểm công viên có khu vực nướng thịt có mái che phòng mưa ('covered BBQ area').",
            52: "Người phụ nữ sẽ gọi điện cho ban quản lý để đặt chỗ (reserve the venue)."
        },
        "vocab": [
            {"word": "annual picnic", "meaning": "buổi dã ngoại thường niên", "partOfSpeech": "n"},
            {"word": "covered area", "meaning": "khu vực có mái che", "partOfSpeech": "n"},
            {"word": "make a reservation", "meaning": "đặt chỗ trước", "partOfSpeech": "phrase"}
        ]
    },
    "part3-53-55": {
        "title": "Nâng cấp hệ thống phần mềm quản lý kho",
        "speakers": ["Woman", "Man", "Woman", "Man"],
        "lines_vn": [
            "Hệ thống quản lý kho cũ của chúng ta gần đây thường xuyên bị treo khi xử lý các đơn hàng lớn.",
            "Đúng vậy, ban giám đốc đã phê duyệt việc chuyển sang phần mềm quản lý đám mây mới vào cuối tháng này.",
            "Nhân viên kho có cần tham gia khóa đào tạo sử dụng không?",
            "Có chứ, nhà cung cấp sẽ tổ chức buổi tập huấn trực tuyến kéo dài hai tiếng vào thứ Ba tuần tới."
        ],
        "q_vn": {
            53: "Vấn đề mà công ty đang gặp phải là gì?",
            54: "Giải pháp nào đã được phê duyệt?",
            55: "Điều gì sẽ diễn ra vào thứ Ba tuần tới?"
        },
        "opts_vn": {
            53: {"A": "Thiếu nhân sự quản lý kho", "B": "Hàng tồn kho bị hỏng", "C": "Phần mềm hiện tại bị lỗi/chậm", "D": "Mất kết nối mạng"},
            54: {"A": "Thuê thêm nhân viên kho", "B": "Chuyển sang phần mềm đám mây mới", "C": "Mở rộng nhà kho", "D": "Đổi đơn vị vận chuyển"},
            55: {"A": "Kiểm kê hàng hóa", "B": "Bảo dưỡng máy móc", "C": "Buổi tập huấn trực tuyến", "D": "Ký kết hợp đồng"}
        },
        "exps": {
            53: "Phần mềm quản lý kho cũ thường xuyên bị treo máy (software glitches / freezes).",
            54: "Ban giám đốc duyệt chuyển đổi sang phần mềm nền tảng đám mây mới (cloud-based software).",
            55: "Nhà cung cấp sẽ mở buổi tập huấn sử dụng trực tuyến vào thứ Ba tới (online training session)."
        },
        "vocab": [
            {"word": "inventory system", "meaning": "hệ thống quản lý hàng tồn kho", "partOfSpeech": "n"},
            {"word": "cloud-based", "meaning": "trên nền tảng điện toán đám mây", "partOfSpeech": "adj"},
            {"word": "training session", "meaning": "buổi tập huấn/đào tạo", "partOfSpeech": "n"}
        ]
    },
    "part3-56-58": {
        "title": "Thu xếp phòng khách sạn và xe đưa đón sân bay cho đối tác",
        "speakers": ["Man", "Woman", "Man", "Woman"],
        "lines_vn": [
            "Đối tác từ văn phòng Seoul sẽ đến thăm công ty chúng ta vào đầu tuần tới. Cô đã đặt phòng khách sạn cho họ chưa?",
            "Tôi đã đặt ba phòng tại khách sạn Grand Plaza gần trụ sở của chúng ta rồi.",
            "Tuyệt, còn việc di chuyển từ sân bay về thì sao?",
            "Khách sạn có dịch vụ xe đưa đón miễn phí tại sân bay. Tôi đã đăng ký chuyến bay hạ cánh của họ với lễ tân rồi."
        ],
        "q_vn": {
            56: "Ai sắp đến thăm công ty?",
            57: "Khách sạn được chọn vì lý do gì?",
            58: "Người phụ nữ đã thu xếp việc gì cho chuyến đi?"
        },
        "opts_vn": {
            56: {"A": "Các đối tác từ nước ngoài", "B": "Nhân viên mới tuyển", "C": "Kiểm toán viên tài chính", "D": "Đoàn thanh tra"},
            57: {"A": "Giá phòng rẻ", "B": "Có trung tâm thể dục", "C": "Nằm gần văn phòng công ty", "D": "Có nhà hàng cao cấp"},
            58: {"A": "Vé xem hòa nhạc", "B": "Bữa tối chào mừng", "C": "Dịch vụ xe đưa đón tại sân bay", "D": "Chuyến tham quan thành phố"}
        },
        "exps": {
            56: "Người đàn ông nói đối tác từ Seoul sắp tới thăm ('partners from our Seoul office').",
            57: "Khách sạn Grand Plaza được chọn vì nằm gần công ty ('close to our headquarters').",
            58: "Người phụ nữ đã đăng ký dịch vụ xe buýt đưa đón sân bay của khách sạn ('airport shuttle service')."
        },
        "vocab": [
            {"word": "headquarters", "meaning": "trụ sở chính", "partOfSpeech": "n"},
            {"word": "airport shuttle", "meaning": "xe buýt đưa đón sân bay", "partOfSpeech": "n"},
            {"word": "front desk", "meaning": "bàn lễ tân", "partOfSpeech": "n"}
        ]
    },
    "part3-59-61": {
        "title": "Kiểm tra chất lượng và xử lý lỗi trên dây chuyền dệt may",
        "speakers": ["Woman", "Man", "Woman", "Man"],
        "lines_vn": [
            "Tôi vừa kiểm tra lô vải lụa sản xuất sáng nay và phát hiện một số cuộn bị lỗi đường dệt.",
            "Để tôi xem thử. Có vẻ như trục lăn của máy dệt số 4 bị lỏng nên lực căng không đều.",
            "Chúng ta có phải dừng toàn bộ dây chuyền lại không?",
            "Chỉ cần tạm dừng máy số 4 để kỹ thuật viên siết chặt lại trục lăn thôi. Mất khoảng 20 phút là có thể tiếp tục sản xuất bình thường."
        ],
        "q_vn": {
            59: "Người phụ nữ phát hiện ra sự cố gì?",
            60: "Nguyên nhân gây ra sự cố là gì?",
            61: "Người đàn ông dự kiến sẽ mất bao lâu để sửa chữa?"
        },
        "opts_vn": {
            59: {"A": "Thiếu nguyên liệu tơ tằm", "B": "Hỏng hệ thống điện", "C": "Một số cuộn vải bị lỗi dệt", "D": "Giao hàng bị chậm"},
            60: {"A": "Công nhân chưa được đào tạo", "B": "Nhiệt độ phòng quá cao", "C": "Bộ phận điều khiển bị cháy", "D": "Trục lăn của máy bị lỏng"},
            61: {"A": "Khoảng 20 phút", "B": "Một tiếng đồng hồ", "C": "Hết buổi sáng", "D": "Đến ngày mai"}
        },
        "exps": {
            59: "Người phụ nữ phát hiện lỗi đường dệt trên các cuộn vải lụa ('flaws in the weaving').",
            60: "Người đàn ông giải thích trục lăn máy số 4 bị lỏng khiến lực căng không đều ('roller on machine 4 is loose').",
            61: "Người đàn ông nói chỉ mất khoảng 20 phút để siết chặt lại ('take about twenty minutes')."
        },
        "vocab": [
            {"word": "fabric", "meaning": "vải dệt", "partOfSpeech": "n"},
            {"word": "flaw", "meaning": "vết lỗi, tì vết", "partOfSpeech": "n"},
            {"word": "roller", "meaning": "trục lăn máy", "partOfSpeech": "n"},
            {"word": "tighten", "meaning": "siết chặt lại", "partOfSpeech": "v"}
        ]
    },
    "part3-62-64": {
        "title": "Chọn mua thiết bị văn phòng và xác nhận mã sản phẩm",
        "speakers": ["Man", "Woman", "Man", "Woman"],
        "lines_vn": [
            "Chúng ta cần thay thế máy chiếu trong phòng họp lớn trước buổi thuyết trình tuần tới.",
            "Tôi đang xem danh mục thiết bị của nhà cung cấp đây. Chúng ta nên chọn mẫu máy có độ sáng cao và cổng kết nối không dây.",
            "Mẫu chiếu laser không dây mã hiệu PR-300 trên bảng báo giá có vẻ đáp ứng đầy đủ yêu cầu đấy.",
            "Đúng vậy, tôi sẽ điền phiếu đề xuất mua sắm và gửi cho phòng kế toán phê duyệt ngay."
        ],
        "q_vn": {
            62: "Thiết bị nào cần được thay thế?",
            63: "Mẫu máy chiếu nào được người đàn ông lựa chọn?",
            64: "Người phụ nữ sẽ gửi tài liệu cho bộ phận nào?"
        },
        "opts_vn": {
            62: {"A": "Máy chiếu phòng họp", "B": "Màn hình tivi", "C": "Dàn âm thanh", "D": "Hệ thống điều hòa"},
            63: {"A": "PR-100", "B": "PR-150", "C": "PR-200", "D": "PR-300"},
            64: {"A": "Phòng tiếp thị", "B": "Phòng nhân sự", "C": "Phòng công nghệ", "D": "Phòng kế toán"}
        },
        "exps": {
            62: "Họ bàn về việc thay thế máy chiếu phòng họp ('projector in the main conference room').",
            63: "Dựa vào bảng thông số đồ họa, mẫu máy chiếu laser không dây đáp ứng yêu cầu là PR-300.",
            64: "Người phụ nữ sẽ gửi phiếu mua sắm cho phòng kế toán phê duyệt ('accounting department')."
        },
        "vocab": [
            {"word": "projector", "meaning": "máy chiếu", "partOfSpeech": "n"},
            {"word": "requisition form", "meaning": "phiếu đề xuất mua sắm", "partOfSpeech": "n"},
            {"word": "specification", "meaning": "thông số kỹ thuật", "partOfSpeech": "n"}
        ]
    },
    "part3-65-67": {
        "title": "Lựa chọn phòng hội thảo phù hợp theo quy mô số lượng người",
        "speakers": ["Woman", "Man", "Woman", "Man"],
        "lines_vn": [
            "Tuần tới chi nhánh chúng ta sẽ đón 45 nhân viên tham dự khóa bồi dưỡng nghiệp vụ.",
            "Chúng ta nên chọn phòng hội thảo nào trên sơ đồ tầng để đủ chỗ ngồi thoải mái cho mọi người nhỉ?",
            "Phòng Oak Room có sức chứa tối đa 30 người, hơi nhỏ. Còn Grand Hall thì quá rộng cho 45 người.",
            "Vậy thì phòng Maple Room với sức chứa 50 người là lý tưởng nhất. Tôi sẽ đặt phòng đó cho cả ngày thứ Tư."
        ],
        "q_vn": {
            65: "Sự kiện tuần tới có bao nhiêu người tham dự?",
            66: "Căn phòng nào trên sơ đồ được đánh giá là quá nhỏ?",
            67: "Phòng họp nào sẽ được lựa chọn đặt chỗ?"
        },
        "opts_vn": {
            65: {"A": "30 người", "B": "35 người", "C": "45 người", "D": "60 người"},
            66: {"A": "Oak Room", "B": "Pine Room", "C": "Maple Room", "D": "Grand Hall"},
            67: {"A": "Oak Room", "B": "Maple Room", "C": "Pine Room", "D": "Grand Hall"}
        },
        "exps": {
            65: "Người phụ nữ thông báo có 45 người tham gia khóa đào tạo ('45 staff members').",
            66: "Người phụ nữ nhận xét Oak Room chỉ chứa được 30 người nên quá nhỏ ('Oak Room is too small').",
            67: "Nhìn vào sơ đồ sức chứa các phòng (graphic), phòng Maple Room có sức chứa 50 chỗ, phù hợp nhất cho 45 người."
        },
        "vocab": [
            {"word": "capacity", "meaning": "sức chứa, dung tích", "partOfSpeech": "n"},
            {"word": "seminar room", "meaning": "phòng hội thảo", "partOfSpeech": "n"},
            {"word": "floor layout", "meaning": "sơ đồ bố trí mặt bằng tầng", "partOfSpeech": "n"}
        ]
    },
    "part3-68-70": {
        "title": "Tra cứu địa điểm cửa hàng trên bản đồ khu phố",
        "speakers": ["Man", "Woman", "Man", "Woman"],
        "lines_vn": [
            "Khách hàng gọi điện hỏi đường đến cửa hàng bán đồ gốm thủ công của chúng ta.",
            "Cửa hàng chúng ta nằm ở góc đường Elm và đại lộ số 3, ngay đối diện với hiệu sách Central Books trên bản đồ.",
            "Họ nói đang đứng ở trạm xe buýt trên đường Elm. Họ nên đi như thế nào?",
            "Bảo họ chỉ cần đi bộ thẳng về hướng đông khoảng hai dãy nhà, qua tiệm bánh mì là sẽ nhìn thấy biển hiệu của chúng ta ngay bên tay phải."
        ],
        "q_vn": {
            68: "Các người nói làm việc tại loại hình kinh doanh nào?",
            69: "Cửa hàng của họ nằm đối diện với cơ sở nào trên bản đồ?",
            70: "Người phụ nữ khuyên nên giải quyết thắc mắc bằng cách nào?"
        },
        "opts_vn": {
            68: {"A": "Hiệu sách", "B": "Tiệm bánh", "C": "Quán cà phê", "D": "Cửa hàng đồ gốm thủ công"},
            69: {"A": "Rạp chiếu phim", "B": "Ngân hàng", "C": "Hiệu sách Central Books", "D": "Khách sạn"},
            70: {"A": "Gửi một liên kết bản đồ", "B": "Ra đón trực tiếp", "C": "Bảo khách đi taxi", "D": "Hướng dẫn đi bộ về hướng đông"}
        },
        "exps": {
            68: "Họ nói về cửa hàng đồ gốm của mình ('handcrafted pottery store' -> Pottery studio / craft store).",
            69: "Người phụ nữ nói cửa hàng nằm đối diện Central Books trên bản đồ khu phố.",
            70: "Người phụ nữ hướng dẫn chi tiết đường đi bộ về phía đông ('walk east about two blocks')."
        },
        "vocab": [
            {"word": "handcrafted pottery", "meaning": "đồ gốm thủ công", "partOfSpeech": "n"},
            {"word": "across from", "meaning": "đối diện với", "partOfSpeech": "prep"},
            {"word": "blocks", "meaning": "các dãy nhà/khối nhà", "partOfSpeech": "n"}
        ]
    }
}

# Vietnamese metadata for Test 9 Part 4 (10 items: Q71-73 to Q98-100)
meta_p4_t9 = {
    "part4-71-73": {
        "title": "Thông báo chào mừng và hướng dẫn tham quan bảo tàng lịch sử",
        "lines_vn": [
            "Chào mừng quý khách đến với Bảo tàng Lịch sử Tự nhiên Thành phố.",
            "Hôm nay chúng tôi vinh dự giới thiệu triển lãm hóa thạch khủng long mới mở tại sảnh trưng bày cánh Tây.",
            "Xin quý khách vui lòng lưu ý không chạm tay vào các hiện vật trưng bày và tắt đèn flash khi chụp ảnh.",
            "Các tour tham quan có hướng dẫn viên miễn phí sẽ khởi hành cứ mỗi 30 phút một lần bắt đầu từ quầy thông tin trung tâm.",
            "Chúc quý khách có một chuyến tham quan đầy thú vị và bổ ích."
        ],
        "q_vn": {
            71: "Thông báo đang diễn ra ở đâu?",
            72: "Triển lãm đặc biệt mới mở nằm ở khu vực nào?",
            73: "Khách tham quan được yêu cầu làm điều gì?"
        },
        "opts_vn": {
            71: {"A": "Tại một vườn thú", "B": "Tại một viện bảo tàng", "C": "Tại một thư viện", "D": "Tại một trung tâm khoa học"},
            72: {"A": "Sảnh cánh Tây", "B": "Sảnh cánh Đông", "C": "Tầng hầm", "D": "Khu vườn ngoài trời"},
            73: {"A": "Đeo thẻ tên", "B": "Mua vé bổ sung", "C": "Gửi ba lô tại quầy", "D": "Tắt đèn flash máy ảnh"}
        },
        "exps": {
            71: "Thông báo tại Bảo tàng Lịch sử Tự nhiên (At a museum).",
            72: "Triển lãm hóa thạch mới mở tại sảnh cánh Tây ('West Wing gallery').",
            73: "Khách tham quan được nhắc nhở tắt đèn flash khi chụp ảnh ('turn off camera flashes')."
        },
        "vocab": [
            {"word": "fossil exhibit", "meaning": "triển lãm hóa thạch", "partOfSpeech": "n"},
            {"word": "guided tour", "meaning": "tour có hướng dẫn viên", "partOfSpeech": "n"},
            {"word": "flash photography", "meaning": "chụp ảnh có đèn flash", "partOfSpeech": "n"}
        ]
    },
    "part4-74-76": {
        "title": "Thông báo an toàn và thời gian phục vụ tại khu nghỉ dưỡng",
        "lines_vn": [
            "Xin kính chào quý khách đang nghỉ dưỡng tại Pine Crest Resort.",
            "Do điều kiện gió giật mạnh vào chiều nay, toàn bộ các hoạt động chèo thuyền kayak và thể thao mặt nước trên hồ tạm thời đóng cửa vì lý do an toàn.",
            "Khu vực bể bơi nước nóng trong nhà và phòng xông hơi tại tòa nhà chính vẫn mở cửa phục vụ quý khách bình thường.",
            "Bữa tối tự chọn tại nhà hàng Panorama sẽ bắt đầu phục vụ từ 6 giờ tối nay với các món nướng đặc sắc.",
            "Xin chân thành cảm ơn sự thấu hiểu của quý khách."
        ],
        "q_vn": {
            74: "Tại sao các hoạt động thể thao dưới nước bị tạm dừng?",
            75: "Khu vực tiện ích nào vẫn mở cửa hoạt động?",
            76: "Bữa tiệc tối tự chọn sẽ bắt đầu vào lúc mấy giờ?"
        },
        "opts_vn": {
            74: {"A": "Do nước hồ bị ô nhiễm", "B": "Do thiếu nhân viên cứu hộ", "C": "Do gió thổi mạnh nguy hiểm", "D": "Do thiết bị đang được bảo trì"},
            75: {"A": "Sân tennis ngoài trời", "B": "Bể bơi trong nhà và phòng xông hơi", "C": "Khu vui chơi trẻ em", "D": "Sân golf"},
            76: {"A": "6:00 tối", "B": "6:30 tối", "C": "7:00 tối", "D": "7:30 tối"}
        },
        "exps": {
            74: "Các hoạt động trên hồ tạm dừng do gió lớn giật mạnh ('strong wind gusts').",
            75: "Bể bơi trong nhà và phòng xông hơi vẫn mở cửa phục vụ bình thường (indoor pool and sauna).",
            76: "Bữa tối buffet bắt đầu lúc 6:00 tối ('starting at 6:00 p.m.')."
        },
        "vocab": [
            {"word": "wind gust", "meaning": "cơn gió giật mạnh", "partOfSpeech": "n"},
            {"word": "indoor heated pool", "meaning": "bể bơi nước nóng trong nhà", "partOfSpeech": "n"},
            {"word": "dinner buffet", "meaning": "tiệc tối tự chọn", "partOfSpeech": "n"}
        ]
    },
    "part4-77-79": {
        "title": "Phát biểu khai mạc hội thảo nâng cao năng lực quản lý",
        "lines_vn": [
            "Chào mừng toàn thể các nhà quản lý và trưởng bộ phận đến với hội thảo lãnh đạo thường niên năm nay.",
            "Trong hai ngày tới, chúng ta sẽ cùng nhau thảo luận về các chiến lược quản lý nhân sự linh hoạt và cách ứng dụng trí tuệ nhân tạo trong tối ưu hóa quy trình làm việc.",
            "Diễn giả đầu tiên của buổi sáng hôm nay là Tiến sĩ Marcus Chen, một chuyên gia hàng đầu về đổi mới doanh nghiệp.",
            "Sau bài trình bày của ông, chúng ta sẽ có 15 phút giải lao và dùng đồ uống nhẹ tại sảnh tầng hai."
        ],
        "q_vn": {
            77: "Đối tượng người nghe của buổi hội thảo là ai?",
            78: "Chủ đề chính của khóa đào tạo là gì?",
            79: "Sự kiện gì sẽ diễn ra sau bài phát biểu đầu tiên?"
        },
        "opts_vn": {
            77: {"A": "Sinh viên mới tốt nghiệp", "B": "Các nhà quản lý và trưởng bộ phận", "C": "Khách hàng thân thiết", "D": "Các nhà đầu tư tài chính"},
            78: {"A": "Quản lý chuỗi cung ứng", "B": "Phát triển phần mềm", "C": "Kỹ năng lãnh đạo và quản lý đổi mới", "D": "Quy định thuế mới"},
            79: {"A": "Thời gian giải lao uống trà/cà phê", "B": "Một buổi phỏng vấn tuyển dụng", "C": "Một phiên họp nhóm", "D": "Một lễ ký kết hợp tác"}
        },
        "exps": {
            77: "Người nói chào mừng các nhà quản lý ('managers and department heads').",
            78: "Hội thảo bàn về chiến lược quản lý linh hoạt và đổi mới doanh nghiệp (Leadership and management).",
            79: "Sau bài phát biểu sẽ là 15 phút giải lao dùng đồ uống ('15-minute refreshment break')."
        },
        "vocab": [
            {"word": "leadership workshop", "meaning": "hội thảo về kỹ năng lãnh đạo", "partOfSpeech": "n"},
            {"word": "refreshment break", "meaning": "thời gian giải lao dùng đồ ăn nhẹ", "partOfSpeech": "n"},
            {"word": "corporate innovation", "meaning": "đổi mới sáng tạo trong doanh nghiệp", "partOfSpeech": "n"}
        ]
    },
    "part4-80-82": {
        "title": "Thông báo sự cố kết nối Internet tại văn phòng",
        "lines_vn": [
            "Chào tất cả mọi người. Tôi muốn thông báo rằng tôi đã nắm được tình hình sự cố về tốc độ và kết nối Internet tại văn phòng hôm nay.",
            "Tôi hiểu rằng việc gián đoạn này gây nhiều khó khăn cho công việc của các bạn.",
            "Chúng tôi đang khắc phục nhanh nhất có thể; một kỹ thuật viên sẽ đến trong vòng một đến hai tiếng nữa.",
            "Tôi biết báo cáo bán hàng phải nộp vào thứ Tư, nhưng tôi đã trao đổi với các trưởng nhóm của các bạn về vấn đề này rồi.",
            "Như thường lệ, cảm ơn sự làm việc chăm chỉ của các bạn."
        ],
        "q_vn": {
            80: "Thiết bị hoặc dịch vụ nào đang không hoạt động bình thường?",
            81: "Theo người nói, điều gì sẽ diễn ra trong vài tiếng tới?",
            82: "Người nói có ý gì khi nói 'Tôi đã trao đổi với các trưởng nhóm về vấn đề này'?"
        },
        "opts_vn": {
            80: {"A": "Hệ thống chiếu sáng", "B": "Hệ thống cấp thoát nước", "C": "Cổng thanh toán", "D": "Kết nối mạng Internet"},
            81: {"A": "Một kỹ thuật viên sẽ đến xử lý.", "B": "Một đơn khiếu nại sẽ được gửi.", "C": "Một trang web sẽ được cập nhật.", "D": "Văn phòng sẽ đóng cửa sớm."},
            82: {"A": "Trưởng nhóm sẽ tiếp quản dự án.", "B": "Thời hạn hoàn thành công việc sẽ được gia hạn/điều chỉnh.", "C": "Các nhóm mới sẽ được thành lập.", "D": "Chi phí phát sinh sẽ được phê duyệt."}
        },
        "exps": {
            80: "Sự cố liên quan đến tốc độ và kết nối Internet văn phòng (An Internet connection).",
            81: "Người nói cho biết kỹ thuật viên sẽ đến trong 1-2 tiếng tới ('a technician is coming in an hour or two').",
            82: "Câu nói trấn an rằng deadline báo cáo ngày thứ Tư sẽ được gia hạn do sự cố mạng (A deadline will be adjusted)."
        },
        "vocab": [
            {"word": "connectivity", "meaning": "khả năng kết nối mạng", "partOfSpeech": "n"},
            {"word": "interruption", "meaning": "sự gián đoạn", "partOfSpeech": "n"},
            {"word": "adjust a deadline", "meaning": "điều chỉnh thời hạn nộp bài", "partOfSpeech": "phrase"}
        ]
    },
    "part4-83-85": {
        "title": "Phân công chuẩn bị tiệc trà tại quán trà",
        "speakers": ["Speaker"],
        "lines_vn": [
            "Chào Ling. Chị vừa nhận được cuộc gọi từ một nhóm khách muốn đặt phòng trà cho ngày mai.",
            "Họ muốn chúng ta tự quyết định toàn bộ thực đơn cho tiệc trà, từ lựa chọn các loại trà cho đến các món ăn kèm.",
            "Chị muốn em đảm nhận việc chuẩn bị này. Chị biết em chưa từng phụ trách tiệc trà bao giờ, nhưng em đã làm việc ở đây được 5 tháng rồi.",
            "Nhân tiện thì trong bữa tiệc sẽ có trẻ em tham dự. Em hãy nhớ kê sẵn một số bàn ghế thấp cho các cháu nhé.",
            "Em sẽ tìm thấy số bàn ghế đó ở phòng phía sau."
        ],
        "q_vn": {
            83: "Người nói sở hữu loại hình kinh doanh nào?",
            84: "Người nói ngụ ý điều gì khi nói 'Em đã làm việc ở đây được 5 tháng rồi'?",
            85: "Người nói cho biết đồ vật gì nằm ở căn phòng phía sau?"
        },
        "opts_vn": {
            83: {"A": "Một quán trà", "B": "Một trung tâm chăm sóc trẻ em", "C": "Một xưởng làm gốm", "D": "Một cửa hàng phụ kiện tiệc"},
            84: {"A": "Người nghe hoàn toàn có đủ năng lực làm nhiệm vụ này.", "B": "Người nghe nên nộp đơn xin thăng chức.", "C": "Người nói đã sẵn sàng nghỉ hưu.", "D": "Thời gian thử việc quá ngắn."},
            85: {"A": "Một số đồ trang trí", "B": "Một máy chiếu video", "C": "Một số đồ bàn ghế", "D": "Một số bộ bát đĩa"}
        },
        "exps": {
            83: "Khách gọi đặt phòng trà và chọn thực đơn tiệc trà ('reserve the tea room' -> A tea shop).",
            84: "Người nói động viên người nghe đã làm được 5 tháng nên hoàn toàn có đủ năng lực phụ trách (The listener is capable of doing a task).",
            85: "Người nói chỉ dẫn bàn ghế thấp cho trẻ em nằm ở phòng sau ('some low tables and chairs... in the back room' -> Some furniture)."
        },
        "vocab": [
            {"word": "tea shop", "meaning": "quán trà", "partOfSpeech": "n"},
            {"word": "capable", "meaning": "có năng lực, có khả năng", "partOfSpeech": "adj"},
            {"word": "low tables and chairs", "meaning": "bàn ghế thấp (cho trẻ em)", "partOfSpeech": "n"}
        ]
    },
    "part4-86-88": {
        "title": "Họp nhân viên hàng không về mùa cao điểm và đãi ngộ suất ăn miễn phí",
        "speakers": ["Speaker"],
        "lines_vn": [
            "Mùa cao điểm du lịch đã cận kề, và như tất cả mọi người đều biết, chúng ta hiện không có đủ nhân viên bốc dỡ hành lý, nhân viên mặt đất hay nhân viên bán vé để đáp ứng nhu cầu.",
            "Hành khách đang phải xếp hàng dài hơn và đối mặt với tình trạng chậm chuyến bay.",
            "Vì vậy, việc tuyển dụng thêm nhân sự là ưu tiên hàng đầu của chúng ta.",
            "Chúng ta đã có chương trình thưởng khuyến khích nhân viên giới thiệu bạn bè ứng tuyển các vị trí đang mở. Xin hãy tiếp tục giới thiệu bạn bè nhé.",
            "Và đối với đội ngũ nhân viên hiện tại, bắt đầu từ tháng này chúng tôi sẽ cung cấp các bữa ăn miễn phí tại tất cả các phòng nghỉ nhân viên. Chúng tôi muốn các bạn biết rằng các bạn luôn được trân trọng và ghi nhận."
        ],
        "q_vn": {
            86: "Người nói có khả năng nhất làm việc trong ngành nghề nào?",
            87: "Người nói cho biết điều gì là ưu tiên hàng đầu?",
            88: "Người nói đề cập đến sự thay đổi đãi ngộ nào?"
        },
        "opts_vn": {
            86: {"A": "Giao thông vận tải / Hàng không", "B": "Chăm sóc y tế", "C": "Nhà hàng khách sạn", "D": "Giải trí"},
            87: {"A": "Nâng cấp một số trang thiết bị", "B": "Quảng bá sự kiện ngành", "C": "Tuyển dụng thêm nhân viên", "D": "Tăng cường lượng hàng tồn kho"},
            88: {"A": "Cung cấp xe buýt đưa đón", "B": "Cung cấp các bữa ăn miễn phí", "C": "Giảm bớt giờ làm việc", "D": "Mở thêm một chi nhánh mới"}
        },
        "exps": {
            86: "Bài nói đề cập đến 'baggage handlers', 'ground crew', 'ticketing agents', 'flight delays' (ngành vận tải hàng không - Transportation).",
            87: "Người nói nhấn mạnh: 'hiring more staff is our top priority' (tuyển thêm nhân sự).",
            88: "Đãi ngộ mới là phục vụ các bữa ăn miễn phí cho nhân viên ('complimentary meals in all employee lounges')."
        },
        "vocab": [
            {"word": "baggage handler", "meaning": "nhân viên bốc xếp hành lý", "partOfSpeech": "n"},
            {"word": "ground crew", "meaning": "đội ngũ nhân viên mặt đất", "partOfSpeech": "n"},
            {"word": "complimentary meal", "meaning": "bữa ăn miễn phí", "partOfSpeech": "n"},
            {"word": "referral incentive", "meaning": "thưởng giới thiệu nhân sự", "partOfSpeech": "n"}
        ]
    },
    "part4-89-91": {
        "title": "Quy định an toàn lao động mới cấm đeo đồ trang sức tại nhà máy",
        "speakers": ["Speaker"],
        "lines_vn": [
            "Tôi có vài thông báo nhanh trước khi chúng ta khởi động các máy móc dây chuyền lắp ráp cho ngày hôm nay.",
            "Đầu tiên, tôi cần thông báo về tiêu chuẩn an toàn mới dành cho tất cả mọi người làm việc trên sàn nhà máy.",
            "Có hiệu lực ngay lập tức, nhẫn, hoa tai và đồ trang sức dưới bất kỳ hình thức nào sẽ không được phép đeo trên sàn làm việc trong suốt ca trực.",
            "Rất xin lỗi, tôi biết một số bạn sẽ cảm thấy quy định này có phần bất tiện.",
            "Xin nhắc nhở thêm, hãy giữ an toàn đồ dùng cá nhân của các bạn trong ca làm việc. Tôi khuyên các bạn nên khóa tủ đồ cá nhân được chỉ định trong phòng nghỉ. Nếu ai cần ổ khóa, tôi có sẵn vài chiếc trong văn phòng."
        ],
        "q_vn": {
            89: "Người nghe nhiều khả năng nhất làm việc ở đâu?",
            90: "Tại sao người nói lại gửi lời xin lỗi?",
            91: "Người nghe được nhắc nhở làm điều gì?"
        },
        "opts_vn": {
            89: {"A": "Tại một tiệm kim hoàn", "B": "Tại một công ty an ninh", "C": "Tại một nhà máy", "D": "Tại một trường đại học"},
            90: {"A": "Thời gian chờ đợi bị kéo dài.", "B": "Việc tuyển dụng bị chậm trễ.", "C": "Một quy định mới có thể gây bất tiện/không được ưa thích.", "D": "Một số đồ dùng không được gửi lại."},
            91: {"A": "Khóa cất giữ an toàn đồ đạc cá nhân", "B": "Xác nhận lại giờ hẹn", "C": "Cung cấp thông tin chi tiết", "D": "Đến chỗ làm sớm"}
        },
        "exps": {
            89: "Người nói đề cập: 'start the assembly line machines', 'working on the factory floor' (làm việc tại nhà máy - At a factory).",
            90: "Người nói xin lỗi vì quy định cấm đeo trang sức mới có thể gây bất tiện cho công nhân ('regulation inconvenient' -> rule may be unpopular).",
            91: "Người nói nhắc nhở khóa cất giữ tài sản cá nhân an toàn ('keep your belongings safe... put a lock on your locker' -> Secure their belongings)."
        },
        "vocab": [
            {"word": "assembly line", "meaning": "dây chuyền lắp ráp", "partOfSpeech": "n"},
            {"word": "safety standard", "meaning": "tiêu chuẩn an toàn", "partOfSpeech": "n"},
            {"word": "belongings", "meaning": "đồ đạc cá nhân, tư trang", "partOfSpeech": "n"},
            {"word": "locker", "meaning": "tủ đồ có khóa cá nhân", "partOfSpeech": "n"}
        ]
    },
    "part4-92-94": {
        "title": "Điều chỉnh giờ đóng cửa buổi tối theo mùa của nhà hàng",
        "speakers": ["Speaker"],
        "lines_vn": [
            "Chào buổi sáng tất cả mọi người. Tôi có một thông báo nhanh về việc điều chỉnh ca làm việc của nhân viên.",
            "Bắt đầu từ tuần tới, tất cả mọi người sẽ thấy giờ làm việc buổi tối của mình được điều chỉnh.",
            "Vì mùa hè sắp kết thúc và mọi người thường ăn tối sớm hơn, chúng ta sẽ đóng cửa vào lúc 8 giờ tối thay vì 10 giờ tối vào các ngày trong tuần.",
            "Để bếp mở cửa muộn không mang lại hiệu quả về mặt tài chính.",
            "Đây là sự điều chỉnh theo mùa mà chúng ta vẫn thực hiện hàng năm. Không có lý do gì để các bạn phải lo lắng cả. Chúng ta vẫn sẽ có rất nhiều khách hàng trong mùa đông."
        ],
        "q_vn": {
            92: "Người nói đang thông báo điều gì?",
            93: "Người nghe có khả năng nhất làm việc ở đâu?",
            94: "Người nói trấn an người nghe về điều gì?"
        },
        "opts_vn": {
            92: {"A": "Cập nhật an ninh", "B": "Điều chỉnh thực đơn", "C": "Đồng phục bắt buộc", "D": "Thay đổi lịch trình/giờ làm việc"},
            93: {"A": "Tại một trang trại", "B": "Tại một nhà hàng", "C": "Tại một công viên công cộng", "D": "Tại một cửa hàng điện tử"},
            94: {"A": "Họ sẽ được trả tiền làm thêm giờ.", "B": "Họ sẽ nhận tiền thưởng hàng năm.", "C": "Sai sót về bảng lương sẽ được chỉnh sửa.", "D": "Vẫn sẽ có đầy đủ công việc cho họ làm."}
        },
        "exps": {
            92: "Người nói thông báo thay đổi ca làm và giờ đóng cửa ('evening hours adjusted', 'closing at 8 instead of 10' -> A schedule change).",
            93: "Người nói nhắc đến 'having dinner', 'our kitchen to stay open late' (nhà bếp nhà hàng - At a restaurant).",
            94: "Người nói trấn an công nhân không phải lo lắng vì mùa đông vẫn đông khách và luôn có việc làm ('There will still be work available')."
        },
        "vocab": [
            {"word": "seasonal adjustment", "meaning": "sự điều chỉnh theo mùa", "partOfSpeech": "n"},
            {"word": "closing hours", "meaning": "giờ đóng cửa", "partOfSpeech": "n"},
            {"word": "financial sense", "meaning": "hiệu quả/ý nghĩa tài chính", "partOfSpeech": "n"}
        ]
    },
    "part4-95-97": {
        "title": "Thông báo ban quản lý mới và lịch hoạt động mùa hè của trang trại Heyberry",
        "speakers": ["Speaker"],
        "lines_vn": [
            "Quý vị đã liên hệ đến Trang trại Heyberry tại Millville.",
            "Chúng tôi rất vui mừng thông báo rằng trang trại hiện đã được vận hành dưới sự điều hành của ban quản lý mới.",
            "Dù có sự thay đổi quản lý, trang trại vẫn sẽ cung cấp đầy đủ lịch trình các hoạt động mùa hè hấp dẫn.",
            "Hiện tại chúng tôi đang tiếp nhận đăng ký cho lớp học nấu ăn rất được yêu thích của mình. Lớp học này tập trung vào việc chế biến các bữa ăn ngon miệng từ các nguyên liệu tươi sạch. Quý vị có thể tìm thêm thông tin trên trang web của chúng tôi.",
            "Ngoài ra, xin lưu ý rằng cổng vào đường Western Road của chúng tôi tạm thời đóng cửa cho đến hết tháng Sáu do việc thi công đường. Khách tham quan vui lòng sử dụng cổng vào trên đường Anderson Road."
        ],
        "q_vn": {
            95: "Theo người nói, điều gì đã thay đổi tại trang trại?",
            96: "Hoạt động được người nói nhắc đến diễn ra vào thời gian nào?",
            97: "Khách tham quan trang trại được khuyên nên làm điều gì?"
        },
        "opts_vn": {
            95: {"A": "Giá cả", "B": "Loại cây trồng", "C": "Ban quản lý", "D": "Giờ mở cửa"},
            96: {"A": "Vào ngày 2 tháng 6", "B": "Vào ngày 9 tháng 6", "C": "Vào ngày 16 tháng 6", "D": "Vào ngày 23 tháng 6"},
            97: {"A": "Đến vào các ngày trong tuần", "B": "Đỗ xe ở khu vực được chỉ định", "C": "Mang theo hộp đựng tái sử dụng", "D": "Sử dụng cổng vào thay thế khác"}
        },
        "exps": {
            95: "Người nói thông báo trang trại có ban quản lý mới ('under new management').",
            96: "Người nói quảng bá lớp học nấu ăn ('cooking class'). Nhìn vào bảng đồ họa lịch hoạt động, Cooking Class diễn ra vào ngày June 2 (Ngày 2 tháng 6).",
            97: "Do cổng Western Road đóng để sửa đường, người nghe được khuyên vào bằng cổng đường Anderson Road (Use an alternate entrance)."
        },
        "vocab": [
            {"word": "under new management", "meaning": "dưới sự quản lý mới", "partOfSpeech": "phrase"},
            {"word": "cooking class", "meaning": "lớp học nấu ăn", "partOfSpeech": "n"},
            {"word": "road construction", "meaning": "việc thi công sửa đường", "partOfSpeech": "n"},
            {"word": "alternate entrance", "meaning": "lối vào thay thế", "partOfSpeech": "n"}
        ]
    },
    "part4-98-100": {
        "title": "Bản tin Greenville về việc sử dụng ngân sách thuế và tranh luận thị trưởng",
        "speakers": ["Speaker"],
        "lines_vn": [
            "Tôi là Jung Kong với bản tin thông tin địa phương dành cho cư dân Greenville.",
            "Thuế của quý vị đã gia tăng đáng kể trong năm nay. Tôi biết quý vị đã nhận thấy điều này và muốn biết tiền của mình đang được chi tiêu vào việc gì.",
            "Thành phố đang tiến hành bốn dự án lớn nhằm cải thiện thư viện, công viên cây xanh, trạm cứu hỏa và các tuyến đường phố của quý vị.",
            "Công việc tại trạm cứu hỏa hiện đang được triển khai, trong khi các dự án khác sẽ được khởi công trong những tháng tới.",
            "Xin hãy nhớ rằng, cuộc bầu cử thị trưởng đang đến gần và lá phiếu của quý vị sẽ quyết định những dự án nào trở thành ưu tiên tương lai trong cộng đồng.",
            "Các ứng cử viên thị trưởng sẽ tổ chức một buổi tranh luận tại trường quay của chúng tôi vào thứ Tư tuần này và tất cả quý vị đều được khuyến khích tham dự."
        ],
        "q_vn": {
            98: "Người nói cho biết người dân địa phương đã nhận thấy điều gì?",
            99: "Chi phí của dự án hiện đang được thi công là bao nhiêu?",
            100: "Sự kiện gì đã được lên lịch vào thứ Tư?"
        },
        "opts_vn": {
            98: {"A": "Giá nhiên liệu tăng cao", "B": "Lựa chọn nhà ở hạn chế", "C": "Ùn tắc giao thông", "D": "Mức thuế tăng cao"},
            99: {"A": "$425,000", "B": "$375,000", "C": "$328,000", "D": "$460,000"},
            100: {"A": "Một sự kiện gây quỹ", "B": "Một lễ hội", "C": "Một cuộc bỏ phiếu bầu cử", "D": "Một buổi tranh luận trực tiếp"}
        },
        "exps": {
            98: "Người nói nhắc đến: 'Your taxes have increased significantly this year' (Mức thuế gia tăng đáng kể - Increased taxes).",
            99: "Người nói cho biết dự án đang được thi công là trạm cứu hỏa ('Work on the firehouse is currently in progress'). Tra cứu bảng đồ họa ngân sách thành phố, hạng mục Firehouse Upgrades có kinh phí là $328,000.",
            100: "Người nói thông báo vào thứ Tư này các ứng viên thị trưởng sẽ tổ chức buổi tranh luận tại trường quay ('holding a debate in our studios this Wednesday' -> A debate)."
        },
        "vocab": [
            {"word": "tax increase", "meaning": "sự tăng thuế", "partOfSpeech": "n"},
            {"word": "firehouse", "meaning": "trạm cứu hỏa", "partOfSpeech": "n"},
            {"word": "mayoral election", "meaning": "cuộc bầu cử thị trưởng", "partOfSpeech": "n"},
            {"word": "debate", "meaning": "buổi tranh luận trực tiếp", "partOfSpeech": "n"}
        ]
    }
}

with open("test9_raw_items.json") as f:
    raw_items = json.load(f)

part3_items = []
part4_items = []

for it in raw_items:
    iid = it["id"]
    p = it["part"]
    
    if p == 3:
        meta = meta_p3_t9[iid]
        lines_en = it["dialogueSegs"]
        lines_vn = meta["lines_vn"]
        speakers = meta.get("speakers", ["Man", "Woman"] * 10)
        
        transcript = []
        if len(lines_en) == len(lines_vn):
            for idx, (en, vn) in enumerate(zip(lines_en, lines_vn)):
                transcript.append({
                    "id": f"{iid}-l{idx+1}",
                    "speaker": speakers[idx % len(speakers)],
                    "text": en,
                    "vietnamese": vn
                })
        else:
            for idx, vn in enumerate(lines_vn):
                en_part = lines_en[idx] if idx < len(lines_en) else ""
                transcript.append({
                    "id": f"{iid}-l{idx+1}",
                    "speaker": speakers[idx % len(speakers)],
                    "text": en_part,
                    "vietnamese": vn
                })
            if len(lines_en) > len(lines_vn):
                extra_en = " ".join(lines_en[len(lines_vn):])
                transcript[-1]["text"] += " " + extra_en

        questions = []
        for q in it["questions"]:
            qnum = q["num"]
            q_vn = meta["q_vn"][qnum]
            opts = []
            for k in ["A", "B", "C", "D"]:
                opts.append({
                    "key": k,
                    "text": q["options"].get(k, ""),
                    "vietnamese": meta["opts_vn"][qnum].get(k, "")
                })
            questions.append({
                "num": qnum,
                "question": q["question"],
                "vietnameseQuestion": q_vn,
                "options": opts,
                "correctAnswer": q["correctAnswer"],
                "explanation": meta["exps"][qnum]
            })

        item = {
            "id": iid,
            "part": 3,
            "partTitle": it["partTitle"],
            "questionRange": it["questionRange"],
            "title": f"Part 3 - {it['questionRange']}: {meta['title']}",
            "audioSrc": it["audioSrc"],
            "startTime": it["startTime"],
            "endTime": it["endTime"],
            "transcript": transcript,
            "questions": questions,
            "vocabulary": meta["vocab"]
        }
        if "graphicImage" in it:
            item["graphicImage"] = it["graphicImage"]
            item["image"] = it["image"]
        part3_items.append(item)

    elif p == 4:
        meta = meta_p4_t9[iid]
        lines_en = [s for s in it["dialogueSegs"] if not s.startswith("Refer to")]
        lines_vn = meta["lines_vn"]
        
        transcript = []
        if len(lines_en) == len(lines_vn):
            for idx, (en, vn) in enumerate(zip(lines_en, lines_vn)):
                transcript.append({
                    "id": f"{iid}-l{idx+1}",
                    "speaker": "Speaker",
                    "text": en,
                    "vietnamese": vn
                })
        else:
            for idx, vn in enumerate(lines_vn):
                en_part = lines_en[idx] if idx < len(lines_en) else ""
                transcript.append({
                    "id": f"{iid}-l{idx+1}",
                    "speaker": "Speaker",
                    "text": en_part,
                    "vietnamese": vn
                })
            if len(lines_en) > len(lines_vn):
                extra_en = " ".join(lines_en[len(lines_vn):])
                transcript[-1]["text"] += " " + extra_en

        questions = []
        for q in it["questions"]:
            qnum = q["num"]
            q_vn = meta["q_vn"][qnum]
            opts = []
            for k in ["A", "B", "C", "D"]:
                opts.append({
                    "key": k,
                    "text": q["options"].get(k, ""),
                    "vietnamese": meta["opts_vn"][qnum].get(k, "")
                })
            questions.append({
                "num": qnum,
                "question": q["question"],
                "vietnameseQuestion": q_vn,
                "options": opts,
                "correctAnswer": q["correctAnswer"],
                "explanation": meta["exps"][qnum]
            })

        item = {
            "id": iid,
            "part": 4,
            "partTitle": it["partTitle"],
            "questionRange": it["questionRange"],
            "title": f"Part 4 - {it['questionRange']}: {meta['title']}",
            "audioSrc": it["audioSrc"],
            "startTime": it["startTime"],
            "endTime": it["endTime"],
            "transcript": transcript,
            "questions": questions,
            "vocabulary": meta["vocab"]
        }
        if "graphicImage" in it:
            item["graphicImage"] = it["graphicImage"]
            item["image"] = it["image"]
        part4_items.append(item)

out_p3 = "scripts/build_2024_t9_p3.py"
with open(out_p3, "w", encoding="utf-8") as f:
    f.write(f"# Part 3 data for ETS TOEIC 2024 Test 9\npart3_items = {json.dumps(part3_items, ensure_ascii=False, indent=2)}\n")
print(f"Generated {len(part3_items)} items for Test 9 Part 3 in {out_p3}")

out_p4 = "scripts/build_2024_t9_p4.py"
with open(out_p4, "w", encoding="utf-8") as f:
    f.write(f"# Part 4 data for ETS TOEIC 2024 Test 9\npart4_items = {json.dumps(part4_items, ensure_ascii=False, indent=2)}\n")
print(f"Generated {len(part4_items)} items for Test 9 Part 4 in {out_p4}")
