import json

# Vietnamese metadata for Test 8 Part 3 (13 items: Q32-34 to Q68-70)
meta_p3 = {
    "part3-32-34": {
        "title": "Dọn dẹp và quyên góp bàn ghế sảnh chờ trước khi cải tạo",
        "speakers": ["Woman", "Man", "Woman"],
        "lines_vn": [
            "Mateo, anh có thời gian giúp tôi sắp xếp lại phòng chứa đồ không? Đội thi công sẽ bắt đầu cải tạo tiền sảnh vào tuần tới. Chúng ta cần dọn chỗ để cất bàn ghế tiền sảnh.",
            "Thực ra tôi biết kế hoạch là sẽ thay thế số bàn ghế đó. Có lẽ chúng ta nên quyên góp chúng ngay bây giờ thay vì cất vào kho.",
            "Ý hay đấy! Tôi sẽ tìm hiểu xem tổ chức nào tiếp nhận bàn ghế quyên góp. Tôi chắc là có vài nơi trong khu vực đấy."
        ],
        "q_vn": {
            32: "Theo người phụ nữ, điều gì sẽ xảy ra vào tuần tới?",
            33: "Người đàn ông đề xuất điều gì?",
            34: "Người phụ nữ nói cô ấy sẽ làm gì?"
        },
        "opts_vn": {
            32: {"A": "Một dự án cải tạo sẽ bắt đầu.", "B": "Công ty sẽ chuyển đến địa điểm mới.", "C": "Một số công nghệ sẽ được nâng cấp.", "D": "Một số nhân viên mới sẽ được đào tạo."},
            33: {"A": "Đặt mua một số thiết bị", "B": "In một số hướng dẫn", "C": "Quyên góp một số bàn ghế nội thất", "D": "Sắp xếp một bữa tiệc phục vụ tận nơi"},
            34: {"A": "Gặp gỡ một khách hàng", "B": "Tìm hiểu, nghiên cứu một số lựa chọn", "C": "Thực hiện một bài thuyết trình", "D": "Ký kết một hợp đồng"}
        },
        "exps": {
            32: "Người phụ nữ nói: 'The construction crew is going to be starting renovations on the lobby next week' (Đội thi công sẽ bắt đầu cải tạo sảnh vào tuần tới).",
            33: "Người đàn ông gợi ý: 'Maybe we should just donate them now rather than putting them in storage' (Có lẽ chúng ta nên quyên góp chúng thay vì cất vào kho).",
            34: "Người phụ nữ nói: 'I'll do some research to see which organizations accept donations...' (Tôi sẽ tìm hiểu xem tổ chức nào nhận quyên góp)."
        },
        "vocab": [
            {"word": "renovation", "meaning": "sự cải tạo, tu sửa", "partOfSpeech": "n"},
            {"word": "donate", "meaning": "quyên góp, ủng hộ", "partOfSpeech": "v"},
            {"word": "storage room", "meaning": "phòng chứa đồ, nhà kho", "partOfSpeech": "n"}
        ]
    },
    "part3-35-37": {
        "title": "Hướng dẫn công việc hái dâu mùa thu hoạch",
        "speakers": ["Woman", "Man", "Woman", "Man", "Man", "Man", "Man"],
        "lines_vn": [
            "Chào Liam. Chúng tôi rất vui khi bạn gia nhập đội ngũ. Mùa thu hoạch là thời điểm bận rộn nhất của chúng tôi.",
            "Tôi rất hào hứng được bắt đầu công việc.",
            "Để tôi giới thiệu bạn với Brian nhé. Anh ấy sẽ dẫn bạn ra cánh đồng dâu để hướng dẫn đào tạo.",
            "Chào Liam. Đây là đôi găng tay dành cho bạn sử dụng này.",
            "Cảm ơn anh.",
            "Việc hái dâu thực ra rất đơn giản, nhưng quan trọng là bạn phải uống thật nhiều nước và giữ đủ nước trong thời tiết nắng nóng này.",
            "Tôi đã mang theo một bình nước lớn rồi, nên chắc sẽ ổn thôi."
        ],
        "q_vn": {
            35: "Các người nói có khả năng nhất làm việc ở đâu?",
            36: "Brian đưa cho Liam cái gì?",
            37: "Theo Brian, điều gì là quan trọng?"
        },
        "opts_vn": {
            35: {"A": "Tại một nhà hàng", "B": "Tại một nông trại", "C": "Trên một tàu đánh cá", "D": "Tại một công viên công cộng"},
            36: {"A": "Một đôi găng tay", "B": "Một số chiếc túi", "C": "Một chiếc xô nhựa", "D": "Một tấm bìa kẹp hồ sơ"},
            37: {"A": "Bôi kem chống nắng", "B": "Dán nhãn một số đồ vật", "C": "Tuân theo lịch trình", "D": "Uống nước"}
        },
        "exps": {
            35: "Người phụ nữ nhắc đến 'harvest season' (mùa thu hoạch) và 'berry fields' (cánh đồng dâu), cho thấy họ làm việc tại một trang trại (At a farm).",
            36: "Brian nói: 'Here's a pair of gloves for you to use' (Đây là đôi găng tay để bạn dùng).",
            37: "Brian nhấn mạnh: 'it's important that you get plenty of water and stay hydrated in this heat' (điều quan trọng là uống nhiều nước)."
        },
        "vocab": [
            {"word": "harvest season", "meaning": "mùa thu hoạch", "partOfSpeech": "n"},
            {"word": "gloves", "meaning": "đôi găng tay", "partOfSpeech": "n"},
            {"word": "hydrated", "meaning": "được cung cấp đủ nước", "partOfSpeech": "adj"},
            {"word": "straightforward", "meaning": "đơn giản, dễ hiểu", "partOfSpeech": "adj"}
        ]
    },
    "part3-38-40": {
        "title": "Phỏng vấn podcast về giống hoa hồng lai mới",
        "speakers": ["Man", "Woman", "Man", "Woman"],
        "lines_vn": [
            "Chào mừng quý vị đến với kênh podcast làm vườn của tôi. Tôi là Rajesh Varma, và hôm nay tôi có mặt ở đây cùng Sojin Lee, một nhà thực vật học từ Đại học Denton, người vừa phát triển một giống hoa lai mới. Giáo sư Lee có thể chia sẻ thêm cho chúng tôi không?",
            "Chắc chắn rồi. Tôi đã phát triển một giống hoa hồng mới. Nó đặc biệt ở chỗ hoa nở lâu hơn bất kỳ giống hoa hồng nào khác.",
            "Thú vị thật đấy. Giống hoa này có khó trồng không?",
            "Sẽ không khó nếu được trồng trong các điều kiện thích hợp. Vào tháng tới, giống hoa hồng này sẽ được giới thiệu tại triển lãm thực vật ở trung tâm thành phố. Tôi hy vọng thính giả của anh sẽ đến xem."
        ],
        "q_vn": {
            38: "Người đàn ông có khả năng nhất là ai?",
            39: "Người phụ nữ nói điều gì đặc biệt về loài hoa này?",
            40: "Điều gì sẽ diễn ra vào tháng tới?"
        },
        "opts_vn": {
            38: {"A": "Một điều phối viên sự kiện", "B": "Một nhà xuất bản sách", "C": "Một quan chức thành phố", "D": "Một người dẫn chương trình podcast"},
            39: {"A": "Nó có khả năng kháng sâu bệnh.", "B": "Nó có màu sắc khác thường.", "C": "Nó có thể nở hoa trong thời gian dài.", "D": "Nó có mùi hương độc đáo."},
            40: {"A": "Một triển lãm thực vật sẽ được tổ chức.", "B": "Một khu vườn công cộng sẽ mở cửa.", "C": "Một thí nghiệm sẽ được tiến hành.", "D": "Một lớp học làm vườn sẽ được mở."}
        },
        "exps": {
            38: "Người đàn ông mở đầu: 'Welcome to my gardening podcast. I'm Rajesh Varma...' (Chào mừng đến với podcast làm vườn của tôi), do đó anh ấy là người dẫn podcast (A podcast host).",
            39: "Giáo sư Lee giải thích: 'It's special because it blooms longer than any other rose' (Nó nở lâu hơn bất kỳ hoa hồng nào khác).",
            40: "Giáo sư Lee cho biết: 'Next month, the rose will be featured at the botanical show...' (Tháng tới hoa sẽ được trưng bày tại triển lãm thực vật)."
        },
        "vocab": [
            {"word": "botanist", "meaning": "nhà thực vật học", "partOfSpeech": "n"},
            {"word": "bloom", "meaning": "nở hoa", "partOfSpeech": "v"},
            {"word": "botanical show", "meaning": "triển lãm thực vật/hoa", "partOfSpeech": "n"},
            {"word": "hybrid", "meaning": "giống lai", "partOfSpeech": "n/adj"}
        ]
    },
    "part3-41-43": {
        "title": "Áp dụng phần mềm đào tạo và lo ngại về lịch trình",
        "speakers": ["Woman", "Man", "Woman"],
        "lines_vn": [
            "Anh có nhận thấy là việc đào tạo nhân viên mới đang tốn rất nhiều thời gian của các trưởng nhóm không? Tôi nghĩ chúng ta nên chuyển sang dùng ứng dụng đào tạo trực tuyến.",
            "Ý tưởng đó nghe hay đấy, nhưng việc thiết lập ứng dụng và nhập dữ liệu có thể làm chậm trễ các dự án hiện tại của chúng ta.",
            "Đừng lo, bên cung cấp phần mềm có dịch vụ hỗ trợ nhập liệu trọn gói, nên chúng ta sẽ không bị trễ hạn đâu."
        ],
        "q_vn": {
            41: "Người phụ nữ đề xuất làm gì?",
            42: "Người đàn ông lo ngại về điều gì?",
            43: "Người phụ nữ nói họ sẽ nhận được gì từ nhà cung cấp?"
        },
        "opts_vn": {
            41: {"A": "Thuê một kỹ thuật viên máy tính", "B": "Sử dụng một ứng dụng đào tạo", "C": "Thay thế một số máy in", "D": "Thay đổi giờ làm việc"},
            42: {"A": "Sự chậm trễ trong tiến độ/lịch trình", "B": "Sự hài lòng của nhân viên", "C": "Chất lượng thiết bị", "D": "Chi phí tăng cao"},
            43: {"A": "Một mức giá chiết khấu", "B": "Sự hỗ trợ kỹ thuật", "C": "Một chứng chỉ", "D": "Bảo hành mở rộng"}
        },
        "exps": {
            41: "Người phụ nữ đề xuất sử dụng phần mềm đào tạo nhân viên mới (Using a training application).",
            42: "Người đàn ông lo ngại việc chuyển đổi có thể gây chậm trễ lịch trình (Scheduling delays).",
            43: "Người phụ nữ trấn an rằng bên cung cấp sẽ cung cấp dịch vụ hỗ trợ kỹ thuật nhập liệu."
        },
        "vocab": [
            {"word": "training application", "meaning": "ứng dụng đào tạo", "partOfSpeech": "n"},
            {"word": "scheduling delay", "meaning": "chậm trễ lịch trình", "partOfSpeech": "n"},
            {"word": "technical support", "meaning": "hỗ trợ kỹ thuật", "partOfSpeech": "n"}
        ]
    },
    "part3-44-46": {
        "title": "Khảo sát thị trường cho sản phẩm tai nghe chống ồn",
        "speakers": ["Man", "Woman", "Man"],
        "lines_vn": [
            "Chúng ta đã nhận được kết quả thử nghiệm ban đầu cho mẫu tai nghe chống ồn mới chưa?",
            "Rồi, phản hồi từ nhóm khách hàng trải nghiệm rất tích cực. Họ đánh giá cao chất lượng âm thanh và thời lượng pin.",
            "Tuyệt vời! Tôi sẽ chuẩn bị bản báo cáo tóm tắt để gửi cho ban giám đốc vào chiều nay."
        ],
        "q_vn": {
            44: "Các người nói đang thảo luận về sản phẩm gì?",
            45: "Khách hàng đặc biệt hài lòng về điều gì?",
            46: "Người đàn ông sẽ làm gì vào chiều nay?"
        },
        "opts_vn": {
            44: {"A": "Máy tính bảng", "B": "Điện thoại thông minh", "C": "Loa không dây", "D": "Tai nghe chống ồn"},
            45: {"A": "Giá bán hợp lý", "B": "Chất lượng âm thanh", "C": "Màu sắc đa dạng", "D": "Trọng lượng nhẹ"},
            46: {"A": "Gửi một bản báo cáo tóm tắt", "B": "Gọi điện cho nhà cung cấp", "C": "Đặt vé máy bay", "D": "Ký hợp đồng"}
        },
        "exps": {
            44: "Họ thảo luận về việc thử nghiệm tai nghe chống ồn (noise-canceling headphones).",
            45: "Khách hàng hài lòng về chất lượng âm thanh vượt trội của sản phẩm.",
            46: "Người đàn ông sẽ gửi báo cáo tóm tắt cho ban lãnh đạo vào buổi chiều."
        },
        "vocab": [
            {"word": "noise-canceling", "meaning": "chống ồn, khử ồn", "partOfSpeech": "adj"},
            {"word": "sound quality", "meaning": "chất lượng âm thanh", "partOfSpeech": "n"},
            {"word": "summary report", "meaning": "báo cáo tóm tắt", "partOfSpeech": "n"}
        ]
    },
    "part3-47-49": {
        "title": "Cải tạo và mở rộng trung tâm y tế và lo ngại chỗ đỗ xe",
        "speakers": ["Woman", "Man", "Woman"],
        "lines_vn": [
            "Bản thiết kế mở rộng cánh phía đông của trung tâm y tế đã được phê duyệt rồi đấy.",
            "Tin tốt đấy, nhưng tôi nhận thấy khu vực xây dựng mới sẽ lấn vào bãi đỗ xe hiện tại. Khách đến khám có thể gặp khó khăn khi tìm chỗ đỗ xe.",
            "Đúng vậy. Ban quản lý đang lên kế hoạch thuê tạm một bãi đất trống gần đó để làm bãi đỗ xe phụ trợ."
        ],
        "q_vn": {
            47: "Người phụ nữ thông báo tin tức gì?",
            48: "Dự án liên quan đến cơ sở nào?",
            49: "Người đàn ông chỉ ra mối lo ngại gì?"
        },
        "opts_vn": {
            47: {"A": "Một cuộc kiểm tra đã hoàn thành", "B": "Một bản thiết kế đã được phê duyệt", "C": "Ngân sách đã được cấp", "D": "Một nhà thầu mới được thuê"},
            48: {"A": "Một trường đại học", "B": "Một trung tâm mua sắm", "C": "Một sân bay", "D": "Một cơ sở y tế"},
            49: {"A": "Một số thiết bị bị thiếu", "B": "Dự án bị thiếu nhân lực", "C": "Quy định an toàn không rõ ràng", "D": "Một số chỗ đỗ xe có thể bị mất đi"}
        },
        "exps": {
            47: "Người phụ nữ nói bản thiết kế mở rộng vừa được phê duyệt (blueprint/design approved).",
            48: "Dự án mở rộng cánh đông của cơ sở y tế (health-care facility).",
            49: "Người đàn ông lo ngại việc thi công sẽ làm mất chỗ đỗ xe (parking spaces may be lost)."
        },
        "vocab": [
            {"word": "health-care facility", "meaning": "cơ sở chăm sóc y tế", "partOfSpeech": "n"},
            {"word": "parking space", "meaning": "chỗ đỗ xe", "partOfSpeech": "n"},
            {"word": "approval", "meaning": "sự phê duyệt", "partOfSpeech": "n"}
        ]
    },
    "part3-50-52": {
        "title": "Sắp xếp chuyến công tác gặp khách hàng tiềm năng",
        "speakers": ["Man", "Woman", "Man", "Woman", "Man"],
        "lines_vn": [
            "Chào buổi sáng cô Gomez. Tôi muốn cập nhật cho cô về kế hoạch đi lại cho cuộc họp với chuỗi cửa hàng bách hóa Scani.",
            "Cảm ơn anh đã chu toàn việc đó. Họ là khách hàng tiềm năng lớn, và tôi bận gửi mẫu hàng cùng chuẩn bị bài thuyết trình đến mức chưa nghĩ đến việc đặt vé.",
            "Rất vui được giúp cô. Tôi đã xác nhận vé máy bay rồi. Nhớ là hãng Villa Air chỉ cho phép một kiện hành lý xách tay miễn phí thôi nhé. Nếu nhiều hơn sẽ bị tính thêm phí đấy.",
            "Được rồi. Anh có thể chuyển tiếp email xác nhận vé máy bay cho tôi được không?",
            "Tôi sẽ gửi email cho cô ngay bây giờ."
        ],
        "q_vn": {
            50: "Người phụ nữ dự kiến sẽ gặp gỡ ai?",
            51: "Người đàn ông nhắc nhở người phụ nữ về điều gì?",
            52: "Người đàn ông đồng ý làm điều gì?"
        },
        "opts_vn": {
            50: {"A": "Luật sư công ty", "B": "Một đối tác cấp cao", "C": "Một nhân viên tiềm năng", "D": "Một khách hàng tiềm năng"},
            51: {"A": "Quy định hạn chế về hành lý", "B": "Chữ ký bắt buộc", "C": "Cẩm nang trực tuyến", "D": "Chính sách hoàn tiền"},
            52: {"A": "Tra cứu số điện thoại", "B": "Thuê xe ô tô", "C": "Nộp báo cáo chi phí", "D": "Chuyển tiếp một thư điện tử"}
        },
        "exps": {
            50: "Người phụ nữ nói cửa hàng bách hóa là 'prospective clients' (khách hàng tiềm năng).",
            51: "Người đàn ông nhắc: 'Villa Air only allows one free piece of carry-on luggage' (hạn chế hành lý xách tay).",
            52: "Người phụ nữ nhờ chuyển tiếp xác nhận vé và người đàn ông đáp: 'I'll email you right now' (chuyển tiếp email)."
        },
        "vocab": [
            {"word": "prospective client", "meaning": "khách hàng tiềm năng", "partOfSpeech": "n"},
            {"word": "luggage restriction", "meaning": "quy định giới hạn hành lý", "partOfSpeech": "n"},
            {"word": "carry-on luggage", "meaning": "hành lý xách tay", "partOfSpeech": "n"},
            {"word": "forward", "meaning": "chuyển tiếp (thư, email)", "partOfSpeech": "v"}
        ]
    },
    "part3-53-55": {
        "title": "Tư vấn phần mềm kế toán tại gian hàng hội chợ triển lãm",
        "speakers": ["Man", "Woman", "Man", "Woman", "Man"],
        "lines_vn": [
            "Xin chào. Tôi là Marcel từ Novick Solutions. Rất vui vì cô đã ghé thăm gian hàng triển lãm thương mại của chúng tôi hôm nay.",
            "Rất vui được gặp anh. Tôi là Sylvia từ Media Future Scapes. Công ty anh cung cấp dòng sản phẩm nào vậy?",
            "Chúng tôi tạo ra phần mềm kế toán để các doanh nghiệp có thể tự thực hiện công việc kế toán của mình. Hiện tại, tôi đang giới thiệu phiên bản mới dành cho các công ty có dưới 50 nhân viên.",
            "À, công ty chúng tôi có khoảng 200 nhân viên cơ.",
            "Tôi hiểu rồi. Đây là bảng biểu cung cấp cái nhìn tổng quan về toàn bộ các dòng sản phẩm của chúng tôi."
        ],
        "q_vn": {
            53: "Các người nói đang ở đâu?",
            54: "Người phụ nữ có ý gì khi nói 'Chúng tôi có khoảng 200 nhân viên'?",
            55: "Người đàn ông đưa cho người phụ nữ cái gì?"
        },
        "opts_vn": {
            53: {"A": "Tại một cửa hàng điện tử", "B": "Tại một hội chợ triển lãm thương mại", "C": "Tại một buổi hội thảo", "D": "Tại một lễ trao giải"},
            54: {"A": "Sản phẩm đó sẽ không phù hợp/hữu ích cho công ty của cô ấy.", "B": "Cô ấy đang tìm thuê một người quản lý.", "C": "Doanh nghiệp của cô ấy vừa mới thành công.", "D": "Nhân viên sẽ cần được đào tạo."},
            55: {"A": "Bản đồ khu vực", "B": "Thẻ tên", "C": "Bản sơ yếu lý lịch", "D": "Một bảng biểu / biểu đồ"}
        },
        "exps": {
            53: "Người đàn ông nói: 'Glad you could stop by my trade show booth today' (gian hàng hội chợ thương mại).",
            54: "Người đàn ông vừa giới thiệu phần mềm cho công ty dưới 50 người, nên câu 'Chúng tôi có 200 nhân viên' ngụ ý phiên bản đó không phù hợp với quy mô công ty cô ấy.",
            55: "Người đàn ông nói: 'Here's a chart that provides an overview...' (Đây là bảng biểu tổng quan)."
        },
        "vocab": [
            {"word": "trade show booth", "meaning": "gian hàng triển lãm thương mại", "partOfSpeech": "n"},
            {"word": "accounting software", "meaning": "phần mềm kế toán", "partOfSpeech": "n"},
            {"word": "overview", "meaning": "tổng quan", "partOfSpeech": "n"},
            {"word": "showcase", "meaning": "trưng bày, giới thiệu", "partOfSpeech": "v"}
        ]
    },
    "part3-56-58": {
        "title": "Dời lịch thi công lớp phủ nhựa đường do thời tiết mưa",
        "speakers": ["Woman", "Man", "Woman", "Man"],
        "lines_vn": [
            "Rodrigo này, chẳng phải chúng ta đã lên lịch bắt đầu thi công lớp phủ bảo vệ mặt đường khu đỗ xe quanh trung tâm mua sắm Bevelton vào tuần tới sao?",
            "Đáng lẽ chúng ta bắt đầu việc sửa chữa đó vào thứ Hai, nhưng tôi vừa xem dự báo thời tiết. Trời sẽ mưa suốt cả cuối tuần. Tôi nghĩ chúng ta nên dời lịch lại.",
            "Đúng vậy. Chúng ta không thể phủ lớp bảo vệ lên mặt nhựa đường khi nó đang ướt được. Tôi sẽ liên hệ với ban quản lý trung tâm mua sắm để bàn về các ngày thay thế.",
            "Được rồi. Nhân tiện thì chúng ta nhận được vài yêu cầu tư vấn mới về dịch vụ sửa chữa đường xá đấy. Tôi sẽ cố gắng xếp lịch tư vấn vào ngày thứ Hai thay thế."
        ],
        "q_vn": {
            56: "Các người nói có khả năng nhất là ai?",
            57: "Tại sao một dự án lại bị dời lại lịch trình?",
            58: "Các người nói nhiều khả năng nhất sẽ làm gì vào thứ Hai?"
        },
        "opts_vn": {
            56: {"A": "Thợ sửa ống nước", "B": "Kiến trúc sư thương mại", "C": "Nhà thầu sửa chữa đường sá", "D": "Người làm cảnh quan sân vườn"},
            57: {"A": "Dự kiến thời tiết có mưa.", "B": "Thiết kế cần chỉnh sửa.", "C": "Một số vật tư chưa đến.", "D": "Một thành viên trong đội vắng mặt."},
            58: {"A": "Hoàn tất hợp đồng", "B": "Đào tạo nhân viên", "C": "Di chuyển phương tiện", "D": "Thực hiện một số buổi tư vấn"}
        },
        "exps": {
            56: "Họ bàn về việc phủ lớp bảo vệ nhựa đường ('seal coating', 'asphalt', 'road repair'), chứng tỏ họ là nhà thầu sửa đường (Road repair contractors).",
            57: "Người đàn ông nói: 'It's going to rain all weekend. I think we should reschedule' (trời mưa cả cuối tuần).",
            58: "Người đàn ông nói: 'we've received a few new requests for consultations... I'll try to slot those in for Monday' (cung cấp tư vấn vào thứ Hai)."
        },
        "vocab": [
            {"word": "road repair", "meaning": "sửa chữa đường sá", "partOfSpeech": "n"},
            {"word": "reschedule", "meaning": "dời lại lịch trình", "partOfSpeech": "v"},
            {"word": "asphalt", "meaning": "nhựa đường, bê tông at-phan", "partOfSpeech": "n"},
            {"word": "consultation", "meaning": "buổi tư vấn", "partOfSpeech": "n"}
        ]
    },
    "part3-59-61": {
        "title": "Cải tiến dây chuyền sản xuất xà phòng trong nhà máy",
        "speakers": ["Man", "Woman", "Man", "Woman", "Man", "Woman", "Man"],
        "lines_vn": [
            "Taznim, tôi vừa xem xét quy trình sản xuất xà phòng trong nhà máy của chúng ta. Và tôi nghĩ vẫn còn chỗ để cải tiến.",
            "Những cải tiến có thể giúp giảm bớt thời gian sản xuất sao?",
            "Đúng vậy. Cô hãy xem này: Khi hỗn hợp xà phòng được đổ vào khuôn, công nhân phải bê từng mẻ đi băng qua cả căn phòng.",
            "Tôi hiểu ý anh rồi. Nếu chúng ta lắp đặt lại các giá phơi khô gần hơn với trạm trộn, họ sẽ không phải đi bộ xa như vậy nữa.",
            "Chính xác. Một thay đổi nhỏ như thế có thể tạo ra ảnh hưởng lớn đến tổng sản lượng.",
            "Nhưng làm vậy liệu có tốn kém không?",
            "Để tôi cho cô xem bản dự toán chi phí nhé."
        ],
        "q_vn": {
            59: "Các người nói có khả năng nhất làm việc ở đâu?",
            60: "Người đàn ông ngụ ý điều gì khi nói 'Công nhân phải bê từng mẻ đi băng qua cả căn phòng'?",
            61: "Người đàn ông sẽ cho người phụ nữ xem cái gì?"
        },
        "opts_vn": {
            59: {"A": "Tại một hiệu sách", "B": "Tại một tiệm giặt khô", "C": "Tại một tiệm bánh", "D": "Tại một nhà máy"},
            60: {"A": "Một máy móc bị trục trặc.", "B": "Một quy trình đang làm tốn nhiều thời gian.", "C": "Tiền lương nên được tăng lên.", "D": "Cần tuyển thêm công nhân."},
            61: {"A": "Bản ước tính chi phí", "B": "Bản vẽ sơ đồ sàn", "C": "Lịch làm việc", "D": "Một cuốn danh mục sản phẩm"}
        },
        "exps": {
            59: "Người đàn ông nhắc đến 'production process for soaps in our facility' (nhà máy sản xuất xà phòng - At a factory).",
            60: "Việc công nhân phải bê từng mẻ đi bộ qua phòng làm tốn nhiều thời gian di chuyển không cần thiết (A process is time-consuming).",
            61: "Người đàn ông nói: 'Let me show you the cost projection' (bản dự toán chi phí tương ứng với A cost estimate)."
        },
        "vocab": [
            {"word": "production process", "meaning": "quy trình sản xuất", "partOfSpeech": "n"},
            {"word": "facility", "meaning": "nhà máy, cơ sở vật chất", "partOfSpeech": "n"},
            {"word": "time-consuming", "meaning": "tốn nhiều thời gian", "partOfSpeech": "adj"},
            {"word": "cost projection", "meaning": "bản dự toán chi phí", "partOfSpeech": "n"}
        ]
    },
    "part3-62-64": {
        "title": "Chỉnh sửa đơn đặt văn phòng phẩm cho phòng kỹ thuật",
        "speakers": ["Woman", "Man", "Woman", "Man"],
        "lines_vn": [
            "Tôi vừa xem biểu mẫu yêu cầu văn phòng phẩm mà bạn nộp cho phòng kỹ thuật của chúng ta. Tôi nghĩ bạn có thể đã nhầm lẫn rồi. Chúng ta có thực sự cần nhiều chuột máy tính đến thế không?",
            "Ồ, đúng là nhầm thật rồi. Tôi định yêu cầu 2 chiếc thôi.",
            "Được rồi, tuyệt. Tôi cũng thấy lạ vì phòng mình chỉ có 15 người thôi mà. Cảm ơn bạn đã phát hiện ra nhé.",
            "Bạn có biết khi nào đồ dùng sẽ được giao tới không? Chiều nay tôi sẽ đặt hàng, nên chắc sang tuần chúng sẽ đến nơi."
        ],
        "q_vn": {
            62: "Các người nói làm việc ở bộ phận nào?",
            63: "Số lượng nào cần phải thay đổi?",
            64: "Người phụ nữ hỏi về điều gì?"
        },
        "opts_vn": {
            62: {"A": "Pháp chế", "B": "Kỹ thuật", "C": "Nhân sự", "D": "Công nghệ thông tin"},
            63: {"A": "20", "B": "35", "C": "15", "D": "10"},
            64: {"A": "Khoản hoàn tiền", "B": "Một chữ ký", "C": "Địa điểm họp", "D": "Ngày giao hàng"}
        },
        "exps": {
            62: "Người nói đề cập: 'supply request form you submitted for our engineering department' (phòng kỹ thuật - Engineering).",
            63: "Trong hình ảnh biểu mẫu, mã mặt hàng chuột máy tính Computer mouse có số lượng ghi là 20, và người nói đính chính chỉ cần 2 chiếc. Do đó số lượng cần sửa là 20.",
            64: "Người phụ nữ hỏi: 'Do you know when the supplies will get here?' (ngày hàng giao đến - A delivery date)."
        },
        "vocab": [
            {"word": "supply request form", "meaning": "biểu mẫu yêu cầu văn phòng phẩm", "partOfSpeech": "n"},
            {"word": "engineering department", "meaning": "phòng kỹ thuật", "partOfSpeech": "n"},
            {"word": "delivery date", "meaning": "ngày giao hàng", "partOfSpeech": "n"}
        ]
    },
    "part3-65-67": {
        "title": "Chọn hoa thay thế cho tiệc cưới do thiếu nguồn cung",
        "speakers": ["Woman", "Man", "Woman", "Man", "Woman"],
        "lines_vn": [
            "Chào mừng quý khách đến với Housey on Florals. Tôi có thể giúp gì cho quý khách?",
            "Xin chào, tôi đang lên kế hoạch cho đám cưới Lambert Evans diễn ra vào cuối tuần này. Sáng nay tôi nhận được email báo rằng có vấn đề với số hoa tôi đã đặt để cắm hoa.",
            "Vâng. Thật không may, nhà cung cấp vừa thông báo rằng họ đã hết hàng do tình trạng khan hiếm nguồn cung. Rất xin lỗi quý khách, nhưng quý khách sẽ phải chọn loại hoa khác thay thế cho hoa loa kèn (lilies).",
            "Tôi biết khách hàng của tôi thích hoa lan (orchids), nhưng tôi đoán là chúng đắt quá. Chúng tôi cần loại hoa nào có giá dưới 5 đô la một cành.",
            "À, vậy thì loại này thì sao? Chúng vừa vặn với ngân sách của quý khách đấy. Loại đó sẽ rất hoàn hảo."
        ],
        "q_vn": {
            65: "Các người nói đang thảo luận về loại sự kiện nào?",
            66: "Theo người phụ nữ, điều gì đã gây ra vấn đề?",
            67: "Loài hoa nào sẽ được sử dụng trong các bình hoa?"
        },
        "opts_vn": {
            65: {"A": "Tiệc nghỉ hưu", "B": "Một đám cưới", "C": "Triển lãm hoa vườn", "D": "Lễ khai trương"},
            66: {"A": "Lỗi hóa đơn", "B": "Một trận bão mưa", "C": "Sự thiếu hụt nguồn cung", "D": "Hủy đặt chỗ trước"},
            67: {"A": "Hoa loa kèn (Lilies)", "B": "Hoa tulip (Tulips)", "C": "Hoa hồng (Roses)", "D": "Hoa lan (Orchids)"}
        },
        "exps": {
            65: "Người đàn ông nói: 'planning the Lambert Evans wedding' (đám cưới - A wedding).",
            66: "Người phụ nữ giải thích nhà cung cấp báo hết hàng 'because of a shortage' (do thiếu hụt nguồn cung - supply shortage).",
            67: "Người đàn ông yêu cầu hoa dưới $5/cành (under $5 per stem) để thay thế hoa loa kèn ($4.50). Nhìn vào bảng giá trong hình, Tulips có giá $4.75 (dưới $5), trong khi Roses là $6.25 và Orchids là $8.00. Do đó Tulips được chọn."
        },
        "vocab": [
            {"word": "wedding", "meaning": "đám cưới, hôn lễ", "partOfSpeech": "n"},
            {"word": "supply shortage", "meaning": "sự thiếu hụt nguồn cung", "partOfSpeech": "n"},
            {"word": "floral arrangement", "meaning": "sự cắm hoa, lẵng hoa", "partOfSpeech": "n"},
            {"word": "per stem", "meaning": "mỗi cành, mỗi cuống hoa", "partOfSpeech": "phrase"}
        ]
    },
    "part3-68-70": {
        "title": "Định giá cửa hàng bán lẻ và kiểm tra chi tiết kiến trúc cổ",
        "speakers": ["Woman", "Man", "Woman", "Man", "Woman"],
        "lines_vn": [
            "Tôi nghĩ tôi đã khảo sát đủ để xác định giá trị thị trường hợp lý cho cửa hàng của ông rồi.",
            "Được rồi. Cô đã có giấy tờ xác nhận tôi đã thay mới mái nhà vào năm ngoái rồi đúng không? Người mua thường tìm kiếm những bất động sản không cần sửa chữa lớn.",
            "Tôi có giấy tờ đó rồi. Và ông nói đúng đấy. Những sửa chữa gần đây là yếu tố làm tăng giá trị bất động sản.",
            "Những ô cửa sổ lịch sử cổ kính này cũng sẽ là điểm cộng để bán được giá, tôi nghĩ thế. Chúng được làm bằng kính thổi thủ công. Tất cả mặt tiền cửa hàng trong dãy này đều có chúng.",
            "Chúng đúng là tạo nên nét đặc trưng độc đáo. Bây giờ, tôi cần cầm máy ảnh đi vòng quanh để chụp một số bức ảnh lưu vào hồ sơ giấy tờ."
        ],
        "q_vn": {
            68: "Người đàn ông có khả năng nhất dự định làm gì?",
            69: "Người đàn ông nói phần nào của mặt tiền cửa hàng mang tính lịch sử?",
            70: "Người phụ nữ sẽ làm gì tiếp theo?"
        },
        "opts_vn": {
            68: {"A": "Bán một cửa hàng", "B": "Mở rộng diện tích nhà kho", "C": "Thay thế biển hiệu", "D": "Lắp đặt điều hòa nhiệt độ"},
            69: {"A": "Phần 1", "B": "Phần 2", "C": "Phần 3", "D": "Phần 4"},
            70: {"A": "Gợi ý màu sơn", "B": "Kiểm tra hệ thống chiếu sáng", "C": "Đo đạc bức tường", "D": "Chụp một số bức ảnh"}
        },
        "exps": {
            68: "Người phụ nữ định giá thị trường và người đàn ông nhắc đến việc 'buyers look for properties...' (người mua nhà), cho thấy người đàn ông muốn bán cửa hàng (Sell a shop).",
            69: "Người đàn ông nói 'The historic windows will be a selling point...'. Nhìn vào hình vẽ mặt tiền cửa tiệm Livingstone Hardware, các ô cửa sổ tương ứng với Part 4.",
            70: "Người phụ nữ nói: 'Now, I need to walk around with my camera to take some photos...' (chụp ảnh lưu hồ sơ - Take some photographs)."
        },
        "vocab": [
            {"word": "market value", "meaning": "giá trị thị trường", "partOfSpeech": "n"},
            {"word": "storefront", "meaning": "mặt tiền cửa hàng", "partOfSpeech": "n"},
            {"word": "hand-blown glass", "meaning": "thủy tinh thổi thủ công", "partOfSpeech": "n"},
            {"word": "character", "meaning": "nét đặc trưng, phong cách riêng", "partOfSpeech": "n"}
        ]
    }
}

# Vietnamese metadata for Test 8 Part 4 (10 items: Q71-73 to Q98-100)
meta_p4 = {
    "part4-71-73": {
        "title": "Quảng cáo giường gấp thông minh tiết kiệm diện tích",
        "lines_vn": [
            "Bạn đang trang bị nội thất cho một căn hộ nhỏ hẹp phải không?",
            "Hãy truy cập jilspedstore.com và tìm hiểu về mẫu giường tủ gấp của Jill.",
            "Chiếc giường độc đáo này có thể gấp gọn vừa khít vào một chiếc tủ gỗ cứng, trở nên vô cùng nhỏ gọn và tiết kiệm không gian cho bạn.",
            "Khi cần dùng, bạn chỉ việc mở tủ và mở giường ra để bố trí.",
            "Và chỉ trong tháng này, chúng tôi mang đến cho quý thính giả một ưu đãi đặc biệt: Khi bạn sử dụng mã giảm giá 623Z để đặt hàng trên trang web của chúng tôi, chúng tôi sẽ tặng kèm hai chiếc gối miễn phí cùng đơn hàng của bạn.",
            "Vì vậy hãy truy cập jilspedstore.com để bắt đầu tận hưởng một căn hộ rộng rãi, thoáng đãng hơn."
        ],
        "q_vn": {
            71: "Sản phẩm nào đang được quảng cáo?",
            72: "Người nói đề cập đến ưu điểm nào của sản phẩm?",
            73: "Làm thế nào để người nghe nhận được quà tặng?"
        },
        "opts_vn": {
            71: {"A": "Một chiếc bàn làm việc", "B": "Một chiếc giường", "C": "Một chiếc giá sách", "D": "Một chiếc ghế"},
            72: {"A": "Nó giúp tiết kiệm diện tích.", "B": "Nó được bảo đảm dùng bền lâu.", "C": "Nó có nhiều kích cỡ khác nhau.", "D": "Nó thân thiện với môi trường."},
            73: {"A": "Bằng cách điền vào một phiếu khảo sát", "B": "Bằng cách đến tận cửa hàng", "C": "Bằng cách nhập mã trên trang web", "D": "Bằng cách đăng ký nhận bản tin"}
        },
        "exps": {
            71: "Bài nói quảng cáo về 'cabinet bed' (giường ngủ dạng tủ gấp - A bed).",
            72: "Người nói nhấn mạnh ưu điểm 'becoming compact and saving you space' (tiết kiệm không gian - save space).",
            73: "Người nói hướng dẫn: 'use the code 623Z to order on our website... We'll throw in two free pillows' (nhập mã trên web để nhận quà tặng gối)."
        },
        "vocab": [
            {"word": "cabinet bed", "meaning": "giường tủ gấp thông minh", "partOfSpeech": "n"},
            {"word": "compact", "meaning": "nhỏ gọn, cô đọng", "partOfSpeech": "adj"},
            {"word": "save space", "meaning": "tiết kiệm diện tích", "partOfSpeech": "phrase"},
            {"word": "unfold", "meaning": "mở ra, trải ra", "partOfSpeech": "v"}
        ]
    },
    "part4-74-76": {
        "title": "Bản tin dự báo thời tiết chuyển lạnh và có tuyết",
        "lines_vn": [
            "Trong phần còn lại của ngày hôm nay, khu vực Jonesdale dự kiến sẽ tiếp tục khô ráo và nhiều mây.",
            "Nhưng bắt đầu từ ngày mai, chúng ta sẽ đón nhận nhiệt độ lạnh hơn và lượng tuyết rơi vừa phải.",
            "Vì vậy, xin quý vị hãy nhớ mặc áo khoác dày nếu có kế hoạch làm bất cứ việc gì ngoài trời.",
            "Khi bước sang tuần tới, thời tiết cuối cùng sẽ bắt đầu mang lại cảm giác mùa xuân ấm áp.",
            "Được rồi, tiếp theo sau đây, chúng tôi sẽ đưa tin về các sự kiện thể thao địa phương gần đây, bao gồm chiến thắng giòn giã vào đêm qua."
        ],
        "q_vn": {
            74: "Bản tin phát thanh chủ yếu nói về nội dung gì?",
            75: "Người nói đưa ra lời khuyên gì?",
            76: "Thính giả sẽ được nghe nội dung gì tiếp theo?"
        },
        "opts_vn": {
            74: {"A": "Thời tiết", "B": "Cập nhật tình hình giao thông", "C": "Một lễ hội ngoài trời", "D": "Sáng kiến dọn dẹp vệ sinh thành phố"},
            75: {"A": "Điền vào biểu mẫu", "B": "Mặc trang phục phù hợp", "C": "Kiểm tra bản đồ", "D": "Sử dụng phương tiện giao thông công cộng"},
            76: {"A": "Một buổi phỏng vấn", "B": "Một mẩu quảng cáo", "C": "Các tin tức thể thao", "D": "Một số bài hát mới phát hành"}
        },
        "exps": {
            74: "Bản tin thông báo về nhiệt độ, tuyết rơi và thời tiết (The weather).",
            75: "Người nói khuyên: 'please remember to put on a heavy coat' (mặc áo khoác dày - Wearing appropriate clothing).",
            76: "Người nói chuyển tiếp: 'next up, we'll be covering our local sports team's recent events' (tin tức thể thao - sports updates)."
        },
        "vocab": [
            {"word": "snowfall", "meaning": "lượng tuyết rơi", "partOfSpeech": "n"},
            {"word": "heavy coat", "meaning": "áo khoác ấm dày", "partOfSpeech": "n"},
            {"word": "appropriate clothing", "meaning": "trang phục phù hợp", "partOfSpeech": "n"}
        ]
    },
    "part4-77-79": {
        "title": "Tin nhắn thoại từ tiệm sửa đồng hồ cổ hoàn tất bảo dưỡng",
        "lines_vn": [
            "Đây là tiệm sửa đồng hồ Brilliant Watch Repair, xin gọi thông báo về chiếc đồng hồ đeo tay cổ mà quý khách đã gửi lại vào ngày hôm qua.",
            "Đúng như quý khách đã đề cập, một trong các kim đồng hồ thường xuyên bị nhảy cóc về phía trước, vì vậy chúng tôi đã thay pin mới. Điều đó dường như đã giải quyết được sự cố.",
            "Tuy nhiên, vì chiếc đồng hồ này đã khá cũ, chúng tôi cũng đã tháo rời nó ra để vệ sinh sạch sẽ toàn bộ.",
            "Trong tương lai, chúng tôi khuyên quý khách nên mang đồng hồ đến để bảo dưỡng định kỳ 3 năm một lần nhằm giữ cho nó luôn trong tình trạng tốt.",
            "Chiếc đồng hồ hiện đã sẵn sàng để quý khách đến lấy bất cứ lúc nào. Chỉ xin lưu ý rằng ngày mai là ngày quốc lễ nên cửa hàng chúng tôi sẽ đóng cửa. Xin cảm ơn."
        ],
        "q_vn": {
            77: "Tại sao người nói lại gọi điện?",
            78: "Người nói khuyên người nghe nên làm gì?",
            79: "Tại sao doanh nghiệp lại đóng cửa vào ngày mai?"
        },
        "opts_vn": {
            77: {"A": "Để báo giá chi phí", "B": "Để xác nhận thông tin bảo hành", "C": "Để thông báo một dịch vụ đã hoàn tất", "D": "Để giới thiệu liên hệ một cơ sở kinh doanh khác"},
            78: {"A": "Lên lịch bảo trì định kỳ", "B": "Chờ đợi đợt giảm giá", "C": "Gọi điện cho nhà sản xuất", "D": "Hỏi xin ý kiến thứ hai"},
            79: {"A": "Một số công việc sửa chữa sẽ được thực hiện.", "B": "Chủ tiệm sẽ đi nghỉ dưỡng.", "C": "Một cuộc thanh tra sẽ diễn ra.", "D": "Đó là ngày lễ quốc gia."}
        },
        "exps": {
            77: "Cửa hàng gọi để thông báo đồng hồ đã được sửa và sẵn sàng lấy bất cứ lúc nào ('ready for you at any time' - service completed).",
            78: "Người nói khuyên: 'we suggest bringing it in for basic maintenance once every three years' (lên lịch bảo dưỡng định kỳ - Schedule regular maintenance).",
            79: "Người nói nêu lý do đóng cửa: 'tomorrow is a national holiday and we'll be closed' (ngày nghỉ lễ quốc gia)."
        },
        "vocab": [
            {"word": "antique wristwatch", "meaning": "đồng hồ đeo tay cổ", "partOfSpeech": "n"},
            {"word": "watch hand", "meaning": "kim đồng hồ", "partOfSpeech": "n"},
            {"word": "maintenance", "meaning": "sự bảo trì, bảo dưỡng", "partOfSpeech": "n"},
            {"word": "national holiday", "meaning": "ngày lễ quốc gia", "partOfSpeech": "n"}
        ]
    },
    "part4-80-82": {
        "title": "Phát biểu tại buổi lễ tri ân và nghỉ hưu của chuyên gia thiết kế giày",
        "lines_vn": [
            "Cảm ơn tất cả mọi người đã tham gia cùng chúng tôi tối nay để chúc mừng sự nghiệp xuất sắc của Hiroshi Tanaka.",
            "Suốt 30 năm qua, Hiroshi là linh hồn trong các mẫu giày chạy bộ và giày thể thao của công ty chúng ta.",
            "Những thiết kế mang tính đột phá của anh đã đưa thương hiệu giày của chúng ta vươn tầm quốc tế.",
            "Trước khi chúng ta cùng nhau nâng ly và thưởng thức bữa tiệc, xin mời mọi người cùng hướng mắt lên màn hình để theo dõi một đoạn video ngắn ghi lại những khoảnh khắc đáng nhớ trong sự nghiệp của anh ấy."
        ],
        "q_vn": {
            80: "Mục đích của bài phát biểu là gì?",
            81: "Công ty sản xuất mặt hàng gì?",
            82: "Người nghe nhiều khả năng nhất sẽ làm gì tiếp theo?"
        },
        "opts_vn": {
            80: {"A": "Để trao một giải thưởng", "B": "Để thông báo thăng chức", "C": "Để giới thiệu sản phẩm mới", "D": "Để kỷ niệm một sự kiện nghỉ hưu"},
            81: {"A": "Dụng cụ nấu ăn", "B": "Giày dép", "C": "Máy ảnh", "D": "Thiết bị chiếu sáng"},
            82: {"A": "Xem một video", "B": "Đặt câu hỏi", "C": "Dùng bữa ăn", "D": "Chụp ảnh tập thể"}
        },
        "exps": {
            80: "Bài phát biểu tri ân sự nghiệp 30 năm và chúc mừng nghỉ hưu (celebrate a retirement).",
            81: "Bài nói nhắc đến các thiết kế giày chạy bộ và thể thao ('running shoes', 'footwear' -> Shoes).",
            82: "Người nói mời mọi người hướng lên màn hình xem video kỷ niệm (Watch a video)."
        },
        "vocab": [
            {"word": "retirement", "meaning": "sự nghỉ hưu", "partOfSpeech": "n"},
            {"word": "footwear", "meaning": "giày dép", "partOfSpeech": "n"},
            {"word": "groundbreaking", "meaning": "mang tính đột phá", "partOfSpeech": "adj"}
        ]
    },
    "part4-83-85": {
        "title": "Thông báo thay đường ống nước dưới vỉa hè trước khu căn hộ",
        "lines_vn": [
            "Tôi là Yulia, quản lý tòa nhà. Tôi gọi điện để báo cho bạn biết rằng các công nhân sẽ đến vào sáng mai để thay thế một đường ống nước bị lỗi dưới vỉa hè phía trước căn hộ của bạn.",
            "Công việc chỉ mất vài tiếng để hoàn thành, nhưng tôi biết bạn đôi khi làm việc tại nhà và họ sẽ sử dụng máy móc gây ồn ào.",
            "Rất xin lỗi vì thông báo gấp gáp như vậy.",
            "Một phần đường ống chạy sát cạnh cột điện thoại, nên tôi đã bắt buộc phải xin giấy phép thi công an toàn.",
            "Tôi cứ nghĩ việc phê duyệt sẽ mất ít nhất một tuần, nhưng giấy phép đã được cấp ngay từ hôm qua rồi."
        ],
        "q_vn": {
            83: "Người nói thông báo điều gì sẽ diễn ra vào ngày mai?",
            84: "Tại sao người nói lại nói: 'Họ sẽ sử dụng máy móc gây ồn ào'?",
            85: "Người nói cho biết điều gì về giấy phép?"
        },
        "opts_vn": {
            83: {"A": "Mái nhà sẽ được sửa chữa.", "B": "Một đường ống sẽ được thay thế.", "C": "Một khoản thanh toán sẽ được xử lý.", "D": "Một đơn đăng ký sẽ được nộp."},
            84: {"A": "Để từ chối một đề xuất", "B": "Để giải thích sự chậm trễ", "C": "Để đưa ra lời cảnh báo trước", "D": "Để phàn nàn khiếu nại"},
            85: {"A": "Nó đã được gửi thư cho người nghe.", "B": "Nó đã bị từ chối.", "C": "Nó tốn rất nhiều tiền.", "D": "Nó được cấp sớm hơn dự kiến."}
        },
        "exps": {
            83: "Quản lý tòa nhà thông báo công nhân sẽ đến để 'replace a defective water pipe' (thay đường ống nước hỏng).",
            84: "Người nói nhắc trước về máy móc ồn ào vì biết người nghe làm việc tại nhà, nhằm đưa ra lời cảnh báo trước (To provide a warning).",
            85: "Người nói ngạc nhiên vì nghĩ duyệt mất 1 tuần nhưng 'it was issued yesterday' (được cấp sớm hơn dự kiến - granted sooner than expected)."
        },
        "vocab": [
            {"word": "defective pipe", "meaning": "đường ống bị lỗi/hỏng", "partOfSpeech": "n"},
            {"word": "loud machinery", "meaning": "máy móc ồn ào", "partOfSpeech": "n"},
            {"word": "permit", "meaning": "giấy phép", "partOfSpeech": "n"},
            {"word": "issue", "meaning": "ban hành, cấp phát", "partOfSpeech": "v"}
        ]
    },
    "part4-86-88": {
        "title": "Họp khẩn nhân viên bệnh viện về sự cố gián đoạn Wi-Fi",
        "lines_vn": [
            "Tôi triệu tập cuộc họp nhanh này dành cho toàn thể nhân viên bệnh viện.",
            "Mạng internet không dây (Wi-Fi) của chúng ta đã bị mất kết nối và chúng tôi đang trong quá trình khôi phục.",
            "Tuy nhiên quý vị đừng lo lắng, đường truyền mạng có dây vẫn hoạt động bình thường, vì vậy tất cả các bác sĩ, y tá và nhân viên thiết yếu vẫn có thể sử dụng máy tính để bàn tại mỗi bàn làm việc.",
            "Mặc dù vậy, bệnh nhân của chúng ta chắc chắn sẽ thắc mắc tại sao họ không thể kết nối Wi-Fi, vì vậy xin quý vị hãy nhớ thông báo rõ ràng cho họ biết về tình hình này."
        ],
        "q_vn": {
            86: "Cuộc họp đang diễn ra ở đâu?",
            87: "Người nói đề cập đến sự cố nào?",
            88: "Người nói nhắc nhở người nghe cần làm gì?"
        },
        "opts_vn": {
            86: {"A": "Tại một tòa nhà văn phòng", "B": "Tại một viện bảo tàng", "C": "Tại một bệnh viện", "D": "Tại một khách sạn"},
            87: {"A": "Cửa phòng bị khóa.", "B": "Thiếu hụt nhân sự.", "C": "Giao hàng bị trễ.", "D": "Mạng internet không dây không hoạt động."},
            88: {"A": "Nộp bảng chấm công", "B": "Hạn chế dùng điện thoại", "C": "Chia sẻ thông tin cho người khác", "D": "Sử dụng sản phẩm thay thế"}
        },
        "exps": {
            86: "Người nói mở đầu: 'I called this quick meeting for hospital staff' (nhân viên bệnh viện - At a hospital).",
            87: "Sự cố được nêu: 'Our wireless internet has gone down' (mạng Wi-Fi bị mất kết nối).",
            88: "Người nói dặn: 'remember to let them know what's going on' (chia sẻ thông tin giải thích cho bệnh nhân - Share some information)."
        },
        "vocab": [
            {"word": "wireless internet", "meaning": "mạng internet không dây / Wi-Fi", "partOfSpeech": "n"},
            {"word": "hard-wired", "meaning": "nối mạng bằng dây cáp", "partOfSpeech": "adj"},
            {"word": "restore", "meaning": "khôi phục lại", "partOfSpeech": "v"}
        ]
    },
    "part4-89-91": {
        "title": "Tư vấn dinh dưỡng và bổ sung món ăn chay cho căng-tin công ty",
        "lines_vn": [
            "Với tư cách là chuyên gia dinh dưỡng tư vấn, tôi sẽ làm việc cùng căng-tin công ty quý vị để rà soát các món ăn hiện đang bán và đề xuất các cải tiến.",
            "Tiêu thụ ít thịt hơn không chỉ tốt hơn cho sức khỏe của chúng ta mà còn tốt hơn cho môi trường.",
            "Và xin hãy cân nhắc sự thật thú vị này: Một nghiên cứu gần đây về hàng ngàn bữa ăn căng-tin cho thấy khi có thêm các lựa chọn món chay được phục vụ, số lượng bữa ăn chay được tiêu thụ đã gia tăng đáng kể.",
            "Một số quý vị đã bày tỏ lo lắng rằng tôi có thể yêu cầu quý vị phải thay đổi toàn bộ thực đơn. Nhưng những thay đổi nhỏ cũng có thể mang lại kết quả bất ngờ."
        ],
        "q_vn": {
            89: "Người nói chủ yếu đang thảo luận về điều gì?",
            90: "Tại sao người nói nhắc đến một nghiên cứu gần đây?",
            91: "Tại sao người nói lại nói: 'Những thay đổi nhỏ có thể mang lại kết quả bất ngờ'?"
        },
        "opts_vn": {
            89: {"A": "Cập nhật thực đơn", "B": "Tổ chức hội chợ sức khỏe", "C": "Trồng vườn rau", "D": "Xem xét kết quả khảo sát"},
            90: {"A": "Để củng cố cho quan điểm của mình", "B": "Để gợi ý một quy trình", "C": "Để mời một diễn giả khách mời", "D": "Để quảng bá một sự kiện"},
            91: {"A": "Để đồng tình với quyết định", "B": "Để trấn an người nghe", "C": "Để chúc mừng người nghe", "D": "Để yêu cầu sự trợ giúp"}
        },
        "exps": {
            89: "Chuyên gia dinh dưỡng làm việc để rà soát và gợi ý thay đổi thực đơn căng-tin ('review items... suggest updates' -> Updating a menu).",
            90: "Người nói trích dẫn nghiên cứu về việc bổ sung món chay để củng cố cho quan điểm của mình (To support her opinion).",
            91: "Người nói trấn an những người lo lắng phải đại tu toàn bộ thực đơn rằng chỉ cần những thay đổi nhỏ là đủ (To reassure the listeners)."
        },
        "vocab": [
            {"word": "nutritionist", "meaning": "chuyên gia dinh dưỡng", "partOfSpeech": "n"},
            {"word": "overhaul", "meaning": "đại tu, thay đổi toàn diện", "partOfSpeech": "v/n"},
            {"word": "vegetarian option", "meaning": "lựa chọn món chay", "partOfSpeech": "n"},
            {"word": "reassure", "meaning": "trấn an, làm yên lòng", "partOfSpeech": "v"}
        ]
    },
    "part4-92-94": {
        "title": "Kết quả chiến dịch quảng cáo mạng xã hội và chính sách ưu đãi giới thiệu",
        "lines_vn": [
            "Chúng ta vừa nhận được phản hồi từ một trong những khách hàng lớn nhất của mình.",
            "Các mẫu quảng cáo gần đây nhất mà chúng ta thiết kế cho mạng xã hội đã giúp tăng 20% lượng truy cập vào trang web của khách hàng, điều này thật tuyệt vời.",
            "Trong một diễn biến khác, chúng ta đang trên đà vượt mục tiêu doanh thu hàng năm.",
            "Dù vậy, 40% doanh thu của chúng ta đến từ chỉ hai khách hàng lớn, và một trong hai bên có thể rút lui bất cứ lúc nào.",
            "Chúng ta dự định đề nghị các khách hàng hiện tại giới thiệu dịch vụ quảng cáo của chúng ta cho các mối quan hệ kinh doanh của họ.",
            "Như một chính sách khích lệ, chúng ta sẽ giảm giá cho những khách hàng nào có lời giới thiệu mang lại hợp đồng mới cho chúng ta."
        ],
        "q_vn": {
            92: "Công ty của người nói cung cấp loại dịch vụ nào?",
            93: "Người nói có ý gì khi nói '40% doanh thu đến từ hai khách hàng'?",
            94: "Công ty dự định đưa ra chính sách ưu đãi khích lệ nào?"
        },
        "opts_vn": {
            92: {"A": "Lên kế hoạch du lịch", "B": "Quảng cáo trực tuyến", "C": "Tuyển dụng nhân sự", "D": "Quản lý hàng tồn kho"},
            93: {"A": "Nhóm của anh ấy cần được thưởng.", "B": "Anh ấy có thời gian phát triển dự án.", "C": "Các khách hàng là tập đoàn lớn.", "D": "Công ty cần thêm nhiều khách hàng."},
            94: {"A": "Giảm giá khi giới thiệu khách hàng mới", "B": "Đăng ký tạp chí trực tuyến", "C": "Bảo đảm sự hài lòng", "D": "Một khóa học cấp chứng chỉ"}
        },
        "exps": {
            92: "Công ty tạo quảng cáo trên mạng xã hội ('advertisements... for social media' -> Online advertising).",
            93: "Khi 40% doanh thu chỉ phụ thuộc vào 2 khách hàng, công ty gặp rủi ro lớn và cần mở rộng thêm nhiều khách hàng mới (The company needs more clients).",
            94: "Người nói thông báo chính sách: 'offer a discount to those whose referrals result in new business' (giảm giá cho khách giới thiệu - A discount for referrals)."
        },
        "vocab": [
            {"word": "social media advertising", "meaning": "quảng cáo trên mạng xã hội", "partOfSpeech": "n"},
            {"word": "referral", "meaning": "lời giới thiệu khách hàng", "partOfSpeech": "n"},
            {"word": "incentive", "meaning": "chính sách khuyến khích, ưu đãi", "partOfSpeech": "n"},
            {"word": "back out", "meaning": "rút lui, hủy hợp đồng", "partOfSpeech": "phr v"}
        ]
    },
    "part4-95-97": {
        "title": "Thông báo tại lễ hội cộng đồng Chesterfield và điểm mua vé hòa nhạc",
        "lines_vn": [
            "Chào mừng quý vị đến với Lễ hội Cộng đồng Chesterfield thường niên.",
            "Tôi có vài thông báo nhanh.",
            "Trước hết, xin cảm ơn tất cả các gian hàng bán đồ. Họ được lựa chọn bởi vì họ sử dụng các phương thức sản xuất hàng hóa bền vững, thân thiện với môi trường. Chúng tôi hiểu rằng việc bảo vệ môi trường là rất quan trọng đối với cộng đồng của chúng ta.",
            "Thứ hai, hiện vẫn còn một vài tấm vé cho buổi hòa nhạc jazz tối nay. Quý vị có thể ghé qua gian hàng đồ ăn vặt Marta's Treats nằm cạnh nông trại Way Family Farms để mua vé.",
            "Cuối cùng, xin lưu ý rằng chúng tôi không còn phát chương trình in trên giấy nữa. Quý vị có thể tải xuống lịch trình sự kiện từ trang web của chúng tôi tại www.chesterfieldcommunityfestival.com."
        ],
        "q_vn": {
            95: "Người nói cho biết điều gì về các gian hàng?",
            96: "Người nghe có thể mua vé xem hòa nhạc ở đâu?",
            97: "Theo người nói, thông tin gì có thể tìm thấy trên trang web lễ hội?"
        },
        "opts_vn": {
            95: {"A": "Họ sử dụng các phương thức sản xuất bền vững.", "B": "Họ đang phát mẫu thử miễn phí.", "C": "Hàng hóa của họ là đồ tự làm tại nhà.", "D": "Giá cả của họ rất phải chăng."},
            96: {"A": "Tại vị trí 1", "B": "Tại vị trí 2", "C": "Tại vị trí 3", "D": "Tại vị trí 4"},
            97: {"A": "Danh sách việc làm", "B": "Chương trình sự kiện", "C": "Quy định an toàn", "D": "Tên các nhà tài trợ"}
        },
        "exps": {
            95: "Người nói giải thích: 'They were selected because they use sustainable, environmentally friendly practices' (phương thức bền vững).",
            96: "Người nói chỉ dẫn: 'stop by Marta's treats next to Way Family Farms to buy a ticket'. Trên bản đồ sơ đồ gian hàng, Marta's treats nằm cạnh Way Family Farms tại vị trí 3 (Location 3).",
            97: "Người nói thông báo: 'You can download the event program from our website' (chương trình sự kiện - An event program)."
        },
        "vocab": [
            {"word": "vendor", "meaning": "gian hàng, người bán hàng", "partOfSpeech": "n"},
            {"word": "sustainable practices", "meaning": "các phương thức bền vững", "partOfSpeech": "n"},
            {"word": "event program", "meaning": "chương trình sự kiện", "partOfSpeech": "n"}
        ]
    },
    "part4-98-100": {
        "title": "Bế mạc phiên phát biểu khai mạc và cập nhật phòng hội thảo",
        "lines_vn": [
            "Tôi hy vọng quý vị đã thích thú với bài phát biểu của diễn giả chính của hội nghị, bà Olabisi Adawale. Thật là một bài phát biểu phi thường.",
            "Nếu quý vị quan tâm muốn tìm hiểu thêm về những chia sẻ của bà về việc điều hành doanh nghiệp, cuốn sách mới nhất của bà hiện đang được bày bán ở sảnh chờ. Đó chắc chắn là một cuốn sách vô cùng lôi cuốn.",
            "Phần còn lại của hội nghị đang chờ đón quý vị ở phía trước. Chúng tôi rất hào hứng thông báo rằng năm nay, do nhu cầu lớn và từ các phản hồi nhận được, chúng tôi đã kéo dài thêm một ngày tổ chức cho hội nghị.",
            "Và trước khi quý vị di chuyển đến các phiên thảo luận của mình, tôi xin thông báo có sự thay đổi về địa điểm cho phiên họp lúc 12:30 trưa hôm nay. Phiên này đã được chuyển phòng và bảng lịch trình đã được cập nhật."
        ],
        "q_vn": {
            98: "Người nói khuyến khích người nghe làm điều gì?",
            99: "Người nói cho biết điều gì đã diễn ra nhờ vào các phản hồi đóng góp?",
            100: "Địa điểm của phiên thảo luận nào đã bị thay đổi?"
        },
        "opts_vn": {
            98: {"A": "Lấy đồ ăn nhẹ", "B": "Mua một cuốn sách", "C": "Trao đổi thông tin liên lạc", "D": "Tình nguyện tham gia hoạt động"},
            99: {"A": "Đăng ký được thực hiện trực tuyến.", "B": "Mời thêm nhiều diễn giả đa dạng.", "C": "Bố trí thêm trạm sạc pin.", "D": "Thêm một ngày hội thảo được bổ sung."},
            100: {"A": "Remote Workforces", "B": "Team Collaboration", "C": "Innovation Tools", "D": "Problem-Solving"}
        },
        "exps": {
            98: "Người nói gợi ý: 'her latest book is for sale in the lobby' (mua sách của diễn giả - Purchase a book).",
            99: "Người nói thông báo: 'because of popular demand and all the feedback we received, we've added an additional day...' (thêm một ngày hội nghị).",
            100: "Người nói thông báo: 'change of location for the 12:30 session today'. Tra cứu trên bảng lịch trình (graphic table), phiên họp lúc 12:30 - 1:30 là 'Innovation Tools'."
        },
        "vocab": [
            {"word": "keynote speaker", "meaning": "diễn giả chính", "partOfSpeech": "n"},
            {"word": "phenomenal", "meaning": "phi thường, tuyệt vời", "partOfSpeech": "adj"},
            {"word": "engaging", "meaning": "lôi cuốn, hấp dẫn", "partOfSpeech": "adj"},
            {"word": "schedule board", "meaning": "bảng lịch trình", "partOfSpeech": "n"}
        ]
    }
}

with open("test8_raw_items.json") as f:
    raw_items = json.load(f)

part3_items = []
part4_items = []

for it in raw_items:
    iid = it["id"]
    p = it["part"]
    
    if p == 3:
        meta = meta_p3[iid]
        # Build dialogue lines
        # In whisper dialogueSegs may be multiple phrases, group or pair with lines_vn
        lines_en = it["dialogueSegs"]
        lines_vn = meta["lines_vn"]
        speakers = meta.get("speakers", ["Man", "Woman"] * 10)
        
        # We pair dialogue lines cleanly
        transcript = []
        # If lengths differ slightly, combine or align
        if len(lines_en) == len(lines_vn):
            for idx, (en, vn) in enumerate(zip(lines_en, lines_vn)):
                transcript.append({
                    "id": f"{iid}-l{idx+1}",
                    "speaker": speakers[idx % len(speakers)],
                    "text": en,
                    "vietnamese": vn
                })
        else:
            # Join all en and split proportionally or match
            # Best approach: create meaningful dialogue lines matching lines_vn
            for idx, vn in enumerate(lines_vn):
                # match English corresponding part
                en_part = lines_en[idx] if idx < len(lines_en) else ""
                transcript.append({
                    "id": f"{iid}-l{idx+1}",
                    "speaker": speakers[idx % len(speakers)],
                    "text": en_part,
                    "vietnamese": vn
                })
            # if lines_en had more segments than lines_vn, append remainder to last
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
        meta = meta_p4[iid]
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

out_p3 = "scripts/build_2024_t8_p3.py"
with open(out_p3, "w", encoding="utf-8") as f:
    f.write(f"# Part 3 data for ETS TOEIC 2024 Test 8\npart3_items = {json.dumps(part3_items, ensure_ascii=False, indent=2)}\n")
print(f"Generated {len(part3_items)} items for Test 8 Part 3 in {out_p3}")

out_p4 = "scripts/build_2024_t8_p4.py"
with open(out_p4, "w", encoding="utf-8") as f:
    f.write(f"# Part 4 data for ETS TOEIC 2024 Test 8\npart4_items = {json.dumps(part4_items, ensure_ascii=False, indent=2)}\n")
print(f"Generated {len(part4_items)} items for Test 8 Part 4 in {out_p4}")
