import json

# Vietnamese metadata for Test 10 Part 3 (13 items: Q32-34 to Q68-70)
meta_p3_t10 = {
    "part3-32-34": {
        "title": "Tham gia khóa tập huấn kỹ năng bán hàng qua điện thoại",
        "speakers": ["Woman", "Man", "Woman", "Man"],
        "lines_vn": [
            "Anh đã hoàn thành khóa đào tạo trực tuyến về kỹ năng bán hàng qua điện thoại chưa?",
            "Tôi vừa hoàn tất học phần cuối cùng sáng nay. Khóa học có nhiều mẹo rất thiết thực để tương tác với khách hàng mới.",
            "Tôi cũng chuẩn bị bắt đầu học đây. Có cần chuẩn bị tài liệu gì trước khi vào học không?",
            "Không cần đâu, tất cả tài liệu tham khảo và bài tập tình huống đều được tích hợp sẵn trên trang web khóa học."
        ],
        "q_vn": {
            32: "Khóa đào tạo trực tuyến nói về chủ đề gì?",
            33: "Người đàn ông nhận xét gì về khóa học?",
            34: "Người đàn ông nói điều gì về các tài liệu học tập?"
        },
        "opts_vn": {
            32: {"A": "Quản lý thời gian", "B": "Kỹ năng bán hàng qua điện thoại", "C": "Phần mềm kế toán", "D": "Quy định an toàn lao động"},
            33: {"A": "Quá dài dòng", "B": "Khó hiểu", "C": "Chứa nhiều mẹo thiết thực", "D": "Cần thêm bài tập"},
            34: {"A": "Phải in ra giấy", "B": "Cần mua thêm sách", "C": "Có sẵn trên trang web", "D": "Được gửi qua đường bưu điện"}
        },
        "exps": {
            32: "Người phụ nữ hỏi về khóa học bán hàng qua điện thoại ('telesales training course').",
            33: "Người đàn ông khen khóa học có nhiều mẹo thực tế bổ ích ('practical tips for engaging clients').",
            34: "Người đàn ông cho biết mọi tài liệu đều có sẵn trên web ('integrated on the course website')."
        },
        "vocab": [
            {"word": "telesales", "meaning": "bán hàng qua điện thoại", "partOfSpeech": "n"},
            {"word": "practical tips", "meaning": "mẹo thực tế, lời khuyên thiết thực", "partOfSpeech": "n"},
            {"word": "reference material", "meaning": "tài liệu tham khảo", "partOfSpeech": "n"}
        ]
    },
    "part3-35-37": {
        "title": "Sửa chữa hệ thống điều hòa nhiệt độ tại chi nhánh ngân hàng",
        "speakers": ["Man", "Woman", "Man", "Woman"],
        "lines_vn": [
            "Chào cô, tôi là kỹ thuật viên từ công ty cơ điện CoolAir. Tôi đến để kiểm tra máy điều hòa không khí theo yêu cầu của chi nhánh.",
            "Chào anh. Máy điều hòa ở sảnh giao dịch phát ra tiếng ồn rất lớn và không phả ra hơi lạnh từ sáng nay.",
            "Để tôi lên tầng thượng kiểm tra bộ phận máy nén khí ngoài trời. Mất khoảng một tiếng để tìm ra nguyên nhân.",
            "Cảm ơn anh. Nếu cần thêm linh kiện thay thế, xin hãy báo trước với tôi để tôi ký phiếu duyệt chi phí nhé."
        ],
        "q_vn": {
            35: "Người đàn ông là ai?",
            36: "Hệ thống điều hòa gặp vấn đề gì?",
            37: "Người phụ nữ yêu cầu người đàn ông làm gì nếu cần thay linh kiện?"
        },
        "opts_vn": {
            35: {"A": "Nhân viên ngân hàng", "B": "Bảo vệ tòa nhà", "C": "Kỹ thuật viên điện lạnh", "D": "Khách hàng gửi tiền"},
            36: {"A": "Bị rò rỉ nước", "B": "Tự động tắt nguồn", "C": "Mùi khét bốc lên", "D": "Phát ra tiếng ồn lớn và không mát"},
            37: {"A": "Mua loại rẻ tiền", "B": "Báo trước để ký duyệt chi phí", "C": "Tự trả tiền trước", "D": "Gọi cho giám đốc"}
        },
        "exps": {
            35: "Người đàn ông tự giới thiệu là kỹ thuật viên điện lạnh từ CoolAir ('air conditioning technician').",
            36: "Người phụ nữ mô tả máy điều hòa phát ra tiếng ồn lớn và không làm mát ('making a loud noise and blowing warm air').",
            37: "Người phụ nữ nhắc báo trước để ký phiếu duyệt chi ('inform me to sign the approval form')."
        },
        "vocab": [
            {"word": "air conditioning", "meaning": "hệ thống điều hòa không khí", "partOfSpeech": "n"},
            {"word": "technician", "meaning": "kỹ thuật viên", "partOfSpeech": "n"},
            {"word": "compressor", "meaning": "máy nén khí", "partOfSpeech": "n"},
            {"word": "approval", "meaning": "sự phê duyệt", "partOfSpeech": "n"}
        ]
    },
    "part3-38-40": {
        "title": "Kế hoạch tổ chức tiệc tất niên và giải thưởng tri ân",
        "speakers": ["Woman", "Man", "Woman", "Man"],
        "lines_vn": [
            "Chúng ta cần chốt địa điểm cho bữa tiệc tất niên của công ty vào tháng sau.",
            "Năm ngoái chúng ta tổ chức tại nhà hàng khách sạn, nhưng năm nay tôi đề xuất thuê một sảnh tiệc riêng để có không gian tổ chức lễ trao giải cho nhân viên xuất sắc.",
            "Ý tưởng đó rất tuyệt. Không gian riêng tư sẽ giúp chương trình trao giải trang trọng và ấm cúng hơn.",
            "Tuy nhiên tôi hơi lo ngại về việc chi phí thuê sảnh riêng có thể vượt mức ngân sách cho phép của công ty."
        ],
        "q_vn": {
            38: "Các người nói đang thảo luận về sự kiện gì?",
            39: "Người đàn ông đề xuất làm gì trong năm nay?",
            40: "Người phụ nữ bày tỏ mối lo ngại nào?"
        },
        "opts_vn": {
            38: {"A": "Lễ khai trương", "B": "Đại hội cổ đông", "C": "Hội nghị khách hàng", "D": "Tiệc tất niên công ty"},
            39: {"A": "Hủy bỏ buổi tiệc", "B": "Thuê một sảnh tiệc riêng", "C": "Tổ chức ngoài trời", "D": "Tự nấu ăn"},
            40: {"A": "Chi phí có thể vượt ngân sách", "B": "Không đủ chỗ ngồi", "C": "Thời tiết xấu", "D": "Món ăn không ngon"}
        },
        "exps": {
            38: "Họ thảo luận về 'end-of-year company party' (tiệc tất niên công ty).",
            39: "Người đàn ông gợi ý thuê sảnh tiệc riêng ('rent a private banquet hall').",
            40: "Người phụ nữ lo lắng chi phí vượt mức ngân sách cho phép ('exceed our approved budget')."
        },
        "vocab": [
            {"word": "banquet hall", "meaning": "sảnh tiệc, phòng tiệc lớn", "partOfSpeech": "n"},
            {"word": "award ceremony", "meaning": "lễ trao giải thưởng", "partOfSpeech": "n"},
            {"word": "exceed budget", "meaning": "vượt quá ngân sách", "partOfSpeech": "phrase"}
        ]
    },
    "part3-41-43": {
        "title": "Chuẩn bị bài thuyết trình tại hội nghị công nghệ",
        "speakers": ["Man", "Woman", "Man", "Woman"],
        "lines_vn": [
            "Slide trình chiếu cho buổi thuyết trình tại triển lãm công nghệ TechCon vào thứ Sáu đã hoàn thành chưa cô?",
            "Tôi đã thêm phần biểu đồ so sánh hiệu năng của mẫu chip xử lý mới rồi. Chỉ còn thiếu phần video minh họa cách thức hoạt động thực tế.",
            "Tôi có thể quay một đoạn video mẫu ngắn trong phòng thí nghiệm vào sáng mai để cô chèn vào slide.",
            "Thế thì tốt quá. Nhớ gửi cho tôi trước 12 giờ trưa mai để tôi hoàn tất bản thuyết trình cuối cùng nhé."
        ],
        "q_vn": {
            41: "Sự kiện mà họ chuẩn bị tham gia là gì?",
            42: "Bản trình chiếu hiện tại còn thiếu nội dung gì?",
            43: "Người đàn ông đề nghị hỗ trợ việc gì?"
        },
        "opts_vn": {
            41: {"A": "Triển lãm ô tô", "B": "Hội chợ sách", "C": "Triển lãm công nghệ TechCon", "D": "Lễ hội ẩm thực"},
            42: {"A": "Số liệu thống kê", "B": "Logo công ty", "C": "Danh sách diễn giả", "D": "Video minh họa thực tế"},
            43: {"A": "Dịch tài liệu", "B": "Đặt vé máy bay", "C": "Quay đoạn video mẫu trong phòng thí nghiệm", "D": "In tài liệu phát tay"}
        },
        "exps": {
            41: "Sự kiện được nhắc đến là triển lãm công nghệ TechCon ('TechCon technology expo').",
            42: "Slide thuyết trình còn thiếu video minh họa thực tế ('short demonstration video').",
            43: "Người đàn ông đề nghị quay video mẫu trong phòng thí nghiệm vào sáng mai."
        },
        "vocab": [
            {"word": "demonstration video", "meaning": "video minh họa, video thị phạm", "partOfSpeech": "n"},
            {"word": "performance chart", "meaning": "biểu đồ hiệu năng", "partOfSpeech": "n"},
            {"word": "expo", "meaning": "triển lãm, hội chợ lớn", "partOfSpeech": "n"}
        ]
    },
    "part3-44-46": {
        "title": "Lựa chọn bao bì giấy phân hủy sinh học cho sản phẩm cà phê",
        "speakers": ["Woman", "Man", "Woman", "Man"],
        "lines_vn": [
            "Khách hàng ngày càng quan tâm đến môi trường, tôi nghĩ chúng ta nên đổi bao bì túi cà phê sang chất liệu giấy có thể phân hủy sinh học.",
            "Tôi hoàn toàn đồng ý. Một nhà cung cấp bao bì xanh tại Portland vừa gửi cho chúng ta vài mẫu thử túi giấy tráng sáp thực vật.",
            "Chất lượng bảo quản hương vị của mẫu túi đó thế nào? Điều quan trọng nhất là cà phê phải giữ được độ tươi ngon.",
            "Các bài kiểm tra độ kín khí cho thấy chất lượng bảo quản tương đương với túi nhựa truyền thống. Tôi sẽ đặt hàng thử nghiệm cho lô hàng tiếp theo."
        ],
        "q_vn": {
            44: "Người phụ nữ đề xuất thay đổi điều gì?",
            45: "Yếu tố quan trọng nhất đối với người phụ nữ là gì?",
            46: "Người đàn ông sẽ làm gì tiếp theo?"
        },
        "opts_vn": {
            44: {"A": "Tăng giá sản phẩm", "B": "Đổi công thức rang", "C": "Chuyển sang bao bì giấy phân hủy sinh học", "D": "Mở rộng kênh bán buôn"},
            45: {"A": "Giữ được hương vị tươi ngon của cà phê", "B": "Chi phí rẻ nhất", "C": "Màu sắc bao bì bắt mắt", "D": "Trọng lượng nhẹ"},
            46: {"A": "Hủy hợp đồng", "B": "Đặt hàng thử nghiệm cho lô tiếp theo", "C": "Tổ chức họp báo", "D": "Thiết kế logo mới"}
        },
        "exps": {
            44: "Người phụ nữ đề xuất đổi sang bao bì phân hủy sinh học ('biodegradable paper packaging').",
            45: "Người phụ nữ nhấn mạnh chất lượng quan trọng nhất là giữ tươi ngon hương vị ('maintain freshness and flavor').",
            46: "Người đàn ông sẽ đặt hàng thử nghiệm cho lô hàng tới ('place a trial order for the next batch')."
        },
        "vocab": [
            {"word": "biodegradable", "meaning": "có thể phân hủy sinh học", "partOfSpeech": "adj"},
            {"word": "airtight", "meaning": "kín khí", "partOfSpeech": "adj"},
            {"word": "trial order", "meaning": "đơn đặt hàng thử nghiệm", "partOfSpeech": "n"}
        ]
    },
    "part3-47-49": {
        "title": "Đổi ca trực tại quầy thuốc tây",
        "speakers": ["Man", "Woman", "Man", "Woman"],
        "lines_vn": [
            "Sarah, thứ Bảy tuần này tôi có việc gia đình đột xuất. Cô có thể đổi ca trực buổi sáng với ca trực tối Chủ nhật của tôi được không?",
            "Thứ Bảy này tôi rảnh rỗi nên hoàn toàn có thể đổi ca giúp anh được.",
            "Cảm ơn cô nhiều lắm. Tôi sẽ nộp phiếu xin đổi ca trực cho dược sĩ trưởng ký xác nhận.",
            "Được chứ, anh nhớ nộp trước 5 giờ chiều nay để dược sĩ trưởng kịp cập nhật bảng phân công ca trực tuần mới nhé."
        ],
        "q_vn": {
            47: "Người đàn ông nhờ đồng nghiệp giúp việc gì?",
            48: "Tại sao người phụ nữ đồng ý hỗ trợ?",
            49: "Thời hạn nộp phiếu đổi ca là khi nào?"
        },
        "opts_vn": {
            47: {"A": "Giao thuốc cho khách", "B": "Kiểm kê kho thuốc", "C": "Đổi ca trực cuối tuần", "D": "Soạn đơn thuốc"},
            48: {"A": "Cô ấy muốn kiếm thêm tiền", "B": "Cô ấy đang có thời gian rảnh", "C": "Cô ấy là quản lý", "D": "Cô ấy cần về quê"},
            49: {"A": "Trước 5:00 chiều nay", "B": "Sáng mai", "C": "Thứ Sáu", "D": "Cuối tuần"}
        },
        "exps": {
            47: "Người đàn ông nhờ đổi ca trực thứ Bảy ('switch morning shifts with my Sunday evening shift').",
            48: "Người phụ nữ đồng ý vì cô ấy có thời gian rảnh rỗi vào thứ Bảy ('I'm free on Saturday').",
            49: "Phiếu đổi ca cần nộp trước 5 giờ chiều nay ('submit it before 5:00 p.m. today')."
        },
        "vocab": [
            {"word": "shift exchange", "meaning": "đổi ca làm việc", "partOfSpeech": "n"},
            {"word": "head pharmacist", "meaning": "dược sĩ trưởng", "partOfSpeech": "n"},
            {"word": "roster", "meaning": "bảng phân công lịch làm việc", "partOfSpeech": "n"}
        ]
    },
    "part3-50-52": {
        "title": "Triển khai dịch vụ giao thực phẩm tươi trong ngày",
        "speakers": ["Woman", "Man", "Woman", "Man"],
        "lines_vn": [
            "Dịch vụ giao hàng thực phẩm tươi sống trong ngày của siêu thị chúng ta nhận được rất nhiều phản hồi tích cực từ cư dân khu vực trung tâm.",
            "Đúng vậy, lượng đơn đặt hàng qua ứng dụng di động đã tăng gần gấp đôi trong tháng vừa qua.",
            "Tuy nhiên, đội xe tải giao hàng hiện tại đang bị quá tải vào các khung giờ cao điểm từ 4 đến 6 giờ chiều.",
            "Tôi đề xuất chúng ta nên hợp tác với một dịch vụ chuyển phát nhanh địa phương để chia sẻ bớt đơn hàng trong khung giờ đó."
        ],
        "q_vn": {
            50: "Dịch vụ nào của siêu thị đang phát triển mạnh?",
            51: "Khó khăn mà họ đang gặp phải là gì?",
            52: "Người đàn ông đề xuất giải pháp nào?"
        },
        "opts_vn": {
            50: {"A": "Dịch vụ giặt ủi", "B": "Bán thức ăn chế biến sẵn", "C": "Giao hàng thực phẩm tươi trong ngày", "D": "Thẻ tích điểm khách hàng"},
            51: {"A": "Đội xe giao hàng bị quá tải giờ cao điểm", "B": "Thiếu hụt thực phẩm tươi", "C": "Hệ thống thanh toán bị lỗi", "D": "Khách hàng hủy đơn"},
            52: {"A": "Mua thêm xe tải", "B": "Hợp tác với dịch vụ chuyển phát nhanh địa phương", "C": "Ngừng nhận đơn hàng", "D": "Tăng phí vận chuyển"}
        },
        "exps": {
            50: "Dịch vụ giao thực phẩm tươi trong ngày ('same-day fresh grocery delivery') đang phát triển mạnh.",
            51: "Đội ngũ xe giao hàng bị quá tải trong giờ cao điểm từ 4 đến 6 giờ chiều ('delivery vans overloaded at peak hours').",
            52: "Người đàn ông gợi ý hợp tác với đơn vị chuyển phát nhanh địa phương ('partner with a local courier service')."
        },
        "vocab": [
            {"word": "same-day delivery", "meaning": "giao hàng trong ngày", "partOfSpeech": "n"},
            {"word": "peak hours", "meaning": "giờ cao điểm", "partOfSpeech": "n"},
            {"word": "courier service", "meaning": "dịch vụ chuyển phát nhanh", "partOfSpeech": "n"}
        ]
    },
    "part3-53-55": {
        "title": "Kế hoạch thay mới thảm trải sàn văn phòng",
        "speakers": ["Man", "Woman", "Man"],
        "lines_vn": [
            "Thảm trải sàn ở văn phòng tầng hai đã mòn vẹt và ố màu sau nhiều năm sử dụng. Tôi nghĩ chúng ta nên thay mới vào đợt nghỉ lễ tới.",
            "Ban quản lý tòa nhà có danh mục các mẫu thảm chống bám bẩn và cách âm rất tốt. Tôi sẽ gửi cho anh xem.",
            "Được chứ, nhớ chọn tông màu xám hoặc xanh đậm để đồng bộ với màu sơn tường mới nhé."
        ],
        "q_vn": {
            53: "Vật dụng nào trong văn phòng cần được thay thế?",
            54: "Người phụ nữ sẽ gửi tài liệu gì cho người đàn ông?",
            55: "Người đàn ông đưa ra yêu cầu gì về sản phẩm mới?"
        },
        "opts_vn": {
            53: {"A": "Thảm trải sàn văn phòng", "B": "Bàn ghế làm việc", "C": "Hệ thống chiếu sáng", "D": "Màn hình máy tính"},
            54: {"A": "Bảng dự toán kinh phí", "B": "Biên bản họp", "C": "Danh mục các mẫu thảm", "D": "Hợp đồng thuê văn phòng"},
            55: {"A": "Giá thành rẻ nhất", "B": "Giao hàng ngay lập tức", "C": "Màu sắc đồng bộ với tường", "D": "Bảo hành 5 năm"}
        },
        "exps": {
            53: "Thảm trải sàn văn phòng bị mòn và cần thay mới ('office carpeting is worn out').",
            54: "Người phụ nữ sẽ gửi danh mục các mẫu thảm cách âm chống bám bẩn ('catalog of stain-resistant carpets').",
            55: "Người đàn ông yêu cầu chọn màu sắc xám hoặc xanh đậm để phối hợp với màu tường ('match the new wall paint')."
        },
        "vocab": [
            {"word": "carpeting", "meaning": "thảm trải sàn", "partOfSpeech": "n"},
            {"word": "stain-resistant", "meaning": "chống bám bẩn, chống ố", "partOfSpeech": "adj"},
            {"word": "soundproofing", "meaning": "cách âm", "partOfSpeech": "n"}
        ]
    },
    "part3-56-58": {
        "title": "Phỏng vấn ứng viên chuyên viên quan hệ công chúng (PR)",
        "speakers": ["Woman", "Man", "Woman", "Man"],
        "lines_vn": [
            "Hồ sơ của ứng viên Maya Patel cho vị trí chuyên viên quan hệ công chúng rất nổi bật với 5 năm kinh nghiệm quản lý truyền thông khủng hoảng.",
            "Tôi đã xem qua các chiến dịch truyền thông mà cô ấy từng điều hành cho các thương hiệu tiêu dùng lớn, kết quả rất ấn tượng.",
            "Chúng ta có nên lên lịch phỏng vấn trực tiếp vào chiều thứ Năm này không?",
            "Tôi có lịch họp cổ đông vào chiều thứ Năm rồi, hãy sắp xếp vào sáng thứ Sáu lúc 10 giờ nhé."
        ],
        "q_vn": {
            56: "Vị trí tuyển dụng được nhắc đến là gì?",
            57: "Điểm mạnh của ứng viên Maya Patel là gì?",
            58: "Buổi phỏng vấn được chốt vào thời gian nào?"
        },
        "opts_vn": {
            56: {"A": "Kế toán viên", "B": "Lập trình viên", "C": "Chuyên viên quan hệ công chúng (PR)", "D": "Trưởng phòng bán hàng"},
            57: {"A": "Kinh nghiệm quản lý truyền thông và kết quả ấn tượng", "B": "Có bằng tiến sĩ", "C": "Biết nhiều ngoại ngữ", "D": "Sẵn sàng đi công tác"},
            58: {"A": "Chiều thứ Năm", "B": "Sáng thứ Sáu lúc 10 giờ", "C": "Chiều thứ Sáu", "D": "Đầu tuần sau"}
        },
        "exps": {
            56: "Họ thảo luận về vị trí chuyên viên quan hệ công chúng ('public relations specialist').",
            57: "Ứng viên có kinh nghiệm quản lý truyền thông nổi bật ('extensive media management experience').",
            58: "Người đàn ông chọn sáng thứ Sáu lúc 10 giờ do chiều thứ Năm bận họp ('Friday morning at 10:00 a.m.')."
        },
        "vocab": [
            {"word": "public relations", "meaning": "quan hệ công chúng (PR)", "partOfSpeech": "n"},
            {"word": "media campaign", "meaning": "chiến dịch truyền thông", "partOfSpeech": "n"},
            {"word": "shareholder meeting", "meaning": "cuộc họp cổ đông", "partOfSpeech": "n"}
        ]
    },
    "part3-59-61": {
        "title": "Kiểm tra và bảo dưỡng xe giao hàng tại xưởng dịch vụ",
        "speakers": ["Man", "Woman", "Man", "Woman"],
        "lines_vn": [
            "Chào anh, tôi đến để nhận chiếc xe bán tải giao hàng của công ty đã gửi bảo dưỡng sáng nay.",
            "Xe của cô đã được thay dầu động cơ và đảo lốp xong xuôi. Tuy nhiên, kỹ thuật viên phát hiện má phanh trước đã mòn khá nhiều.",
            "Điều đó có nguy hiểm khi di chuyển trên đường đèo dốc không?",
            "Có thể ảnh hưởng đến quãng đường phanh an toàn. Chúng tôi có sẵn má phanh chính hãng trong kho, nếu cô đồng ý thay thì chỉ mất thêm khoảng 30 phút nữa thôi."
        ],
        "q_vn": {
            59: "Người phụ nữ đến xưởng dịch vụ để làm gì?",
            60: "Kỹ thuật viên phát hiện ra vấn đề gì ở chiếc xe?",
            61: "Thời gian ước tính để thay thế má phanh là bao lâu?"
        },
        "opts_vn": {
            59: {"A": "Nhận xe đã bảo dưỡng", "B": "Mua xe mới", "C": "Hỏi đường", "D": "Nộp đơn khiếu nại"},
            60: {"A": "Ác-quy bị yếu", "B": "Đèn pha bị vỡ", "C": "Lốp xe bị xẹp", "D": "Má phanh trước bị mòn"},
            61: {"A": "10 phút", "B": "15 phút", "C": "20 phút", "D": "Khoảng 30 phút"}
        },
        "exps": {
            59: "Người phụ nữ đến nhận chiếc xe bán tải đã gửi bảo dưỡng ('pick up our delivery truck').",
            60: "Kỹ thuật viên phát hiện má phanh trước đã bị mòn ('front brake pads are worn down').",
            61: "Người thợ cho biết việc thay má phanh chỉ mất khoảng 30 phút ('take about thirty minutes')."
        },
        "vocab": [
            {"word": "brake pads", "meaning": "má phanh, bố thắng", "partOfSpeech": "n"},
            {"word": "oil change", "meaning": "thay dầu nhớt", "partOfSpeech": "n"},
            {"word": "tire rotation", "meaning": "đảo lốp xe", "partOfSpeech": "n"}
        ]
    },
    "part3-62-64": {
        "title": "Chọn mua thiết bị theo danh mục mã số và bảng thông số",
        "speakers": ["Woman", "Man", "Woman", "Man"],
        "lines_vn": [
            "Phòng thiết kế của chúng ta cần thêm một chiếc máy tính bảng đồ họa chuyên dụng cho dự án minh họa sách mới.",
            "Tôi đang xem bảng danh mục thiết bị của nhà sản xuất đây. Loại nào có bút cảm ứng lực và màn hình chống lóa nhỉ?",
            "Theo bảng thông số đồ họa, dòng Pro-Touch Model X2 đáp ứng đầy đủ cả hai tiêu chuẩn đó và có giá bán rất cạnh tranh.",
            "Tuyệt, tôi sẽ làm đơn yêu cầu mua sắm Model X2 gửi cho giám đốc tài chính phê duyệt."
        ],
        "q_vn": {
            62: "Phòng ban nào cần mua thiết bị mới?",
            63: "Mẫu máy tính bảng đồ họa nào đáp ứng tiêu chuẩn được chọn?",
            64: "Ai sẽ là người phê duyệt đơn đề xuất mua sắm?"
        },
        "opts_vn": {
            62: {"A": "Phòng thiết kế", "B": "Phòng kế toán", "C": "Phòng nhân sự", "D": "Phòng dịch vụ khách hàng"},
            63: {"A": "Model X1", "B": "Model X2", "C": "Model Y1", "D": "Model Y2"},
            64: {"A": "Trưởng nhóm", "B": "Giám đốc kỹ thuật", "C": "Giám đốc tài chính", "D": "Tổng giám đốc"}
        },
        "exps": {
            62: "Người phụ nữ nói phòng thiết kế cần mua máy bảng ('our design department needs a graphics tablet').",
            63: "Dựa vào bảng đồ họa thông số kỹ thuật, Model X2 có đầy đủ tính năng bút cảm ứng và chống lóa.",
            64: "Người phụ nữ sẽ gửi đơn cho giám đốc tài chính phê duyệt ('finance director')."
        },
        "vocab": [
            {"word": "graphics tablet", "meaning": "bảng vẽ điện tử, máy tính bảng đồ họa", "partOfSpeech": "n"},
            {"word": "stylus", "meaning": "bút cảm ứng", "partOfSpeech": "n"},
            {"word": "anti-glare", "meaning": "chống lóa, chống chói", "partOfSpeech": "adj"}
        ]
    },
    "part3-65-67": {
        "title": "Đặt phòng khách sạn theo biểu phí dịch vụ và phòng nghỉ",
        "speakers": ["Man", "Woman", "Man", "Woman"],
        "lines_vn": [
            "Chào cô, tôi muốn đặt phòng nghỉ cho đoàn đại biểu 10 người tham dự hội nghị tại khách sạn vào cuối tuần sau.",
            "Chúng tôi có nhiều hạng phòng từ tiêu chuẩn đến cao cấp. Đoàn của anh có yêu cầu đặc biệt nào không?",
            "Chúng tôi cần các phòng có bàn làm việc rộng và miễn phí bữa sáng tự chọn theo biểu phí dịch vụ.",
            "Theo biểu giá trên màn hình, hạng phòng Executive Suite bao gồm đầy đủ bữa sáng miễn phí và khu vực làm việc riêng. Tôi sẽ giữ 5 phòng đôi hạng này cho đoàn của anh."
        ],
        "q_vn": {
            65: "Đoàn khách bao gồm bao nhiêu người?",
            66: "Hạng phòng nào được lựa chọn theo biểu phí đồ họa?",
            67: "Tiện ích nào được bao gồm miễn phí trong hạng phòng này?"
        },
        "opts_vn": {
            65: {"A": "10 người", "B": "15 người", "C": "20 người", "D": "25 người"},
            66: {"A": "Standard Room", "B": "Executive Suite", "C": "Deluxe Room", "D": "Presidential Suite"},
            67: {"A": "Bữa sáng tự chọn miễn phí", "B": "Dịch vụ giặt ủi", "C": "Đưa đón sân bay", "D": "Vé xem phim"}
        },
        "exps": {
            65: "Người đàn ông đặt phòng cho đoàn 10 người ('delegation of ten people').",
            66: "Dựa vào bảng biểu phí đồ họa phòng khách sạn, hạng phòng Executive Suite đáp ứng yêu cầu bàn làm việc và bữa sáng.",
            67: "Hạng phòng Executive Suite bao gồm bữa sáng tự chọn miễn phí ('complimentary buffet breakfast')."
        },
        "vocab": [
            {"word": "delegation", "meaning": "đoàn đại biểu", "partOfSpeech": "n"},
            {"word": "suite", "meaning": "dãy phòng khách sạn cao cấp", "partOfSpeech": "n"},
            {"word": "complimentary", "meaning": "miễn phí, tặng kèm", "partOfSpeech": "adj"}
        ]
    },
    "part3-68-70": {
        "title": "Lựa chọn tuyến xe buýt di chuyển đến trung tâm hội nghị",
        "speakers": ["Woman", "Man", "Woman", "Man"],
        "lines_vn": [
            "Làm thế nào để chúng ta di chuyển từ khách sạn đến trung tâm triển lãm quốc tế vào sáng mai thuận tiện nhất nhỉ?",
            "Để tôi xem bản đồ mạng lưới xe buýt thành phố. Tuyến xe số 12 đi qua trạm trước cửa khách sạn và dừng ngay cổng trung tâm triển lãm.",
            "Tần suất các chuyến xe vào giờ cao điểm buổi sáng như thế nào?",
            "Cứ mỗi 10 phút lại có một chuyến xe buýt số 12. Chúng ta chỉ mất khoảng 25 phút ngồi xe là đến nơi."
        ],
        "q_vn": {
            68: "Họ dự định di chuyển bằng phương tiện gì?",
            69: "Tuyến xe buýt nào đi thẳng đến trung tâm triển lãm theo bản đồ?",
            70: "Thời gian di chuyển ước tính là bao lâu?"
        },
        "opts_vn": {
            68: {"A": "Tàu điện ngầm", "B": "Xe taxi", "C": "Xe buýt thành phố", "D": "Xe đạp công cộng"},
            69: {"A": "Tuyến số 5", "B": "Tuyến số 8", "C": "Tuyến số 10", "D": "Tuyến số 12"},
            70: {"A": "10 phút", "B": "Khoảng 25 phút", "C": "40 phút", "D": "Một tiếng"}
        },
        "exps": {
            68: "Họ xem bản đồ xe buýt và chọn di chuyển bằng xe buýt thành phố (City bus).",
            69: "Tra cứu sơ đồ tuyến xe trên đồ họa, tuyến xe số 12 (Route 12) chạy thẳng từ khách sạn đến trung tâm triển lãm.",
            70: "Người đàn ông cho biết thời gian đi mất khoảng 25 phút ('about twenty-five minutes')."
        },
        "vocab": [
            {"word": "transit map", "meaning": "bản đồ giao thông công cộng", "partOfSpeech": "n"},
            {"word": "bus route", "meaning": "tuyến xe buýt", "partOfSpeech": "n"},
            {"word": "frequency", "meaning": "tần suất các chuyến", "partOfSpeech": "n"}
        ]
    }
}

# Vietnamese metadata for Test 10 Part 4 (10 items: Q71-73 to Q98-100)
meta_p4_t10 = {
    "part4-71-73": {
        "title": "Tin nhắn thoại từ đơn vị cung cấp tiệc hội nghị",
        "lines_vn": [
            "Chào bà Davis, tôi là Kevin từ dịch vụ tiệc Gourmet Catering. Tôi gọi điện để xác nhận lại đơn đặt tiệc trà chiều cho hội thảo của bà vào thứ Ba tuần tới.",
            "Chúng tôi đã chuẩn bị đầy đủ thực đơn bánh ngọt, trái cây tươi và các loại trà thảo mộc hữu cơ theo yêu cầu.",
            "Tuy nhiên, chúng tôi cần biết chính xác số lượng đại biểu ăn chay trước thứ Sáu tuần này để đội ngũ đầu bếp kịp chuẩn bị nguyên liệu.",
            "Xin bà vui lòng gọi lại cho tôi theo số 555-0144 khi có thông tin cuối cùng. Cảm ơn bà."
        ],
        "q_vn": {
            71: "Người nói đại diện cho doanh nghiệp nào?",
            72: "Người nói gọi điện để làm gì?",
            73: "Bà Davis được yêu cầu cung cấp thông tin gì trước thứ Sáu?"
        },
        "opts_vn": {
            71: {"A": "Một khách sạn", "B": "Một công ty dịch vụ tiệc/ăn uống", "C": "Một tiệm bánh mì", "D": "Một siêu thị"},
            72: {"A": "Xác nhận lại đơn đặt tiệc", "B": "Báo giá lại chi phí", "C": "Hủy hợp đồng", "D": "Xin lỗi vì giao muộn"},
            73: {"A": "Địa chỉ giao hàng", "B": "Phương thức thanh toán", "C": "Số lượng suất ăn chay", "D": "Thời gian dọn tiệc"}
        },
        "exps": {
            71: "Kevin giới thiệu từ công ty phục vụ tiệc ('Gourmet Catering' -> Catering company).",
            72: "Mục đích cuộc gọi là xác nhận lại đơn đặt tiệc hội nghị ('confirm the afternoon tea order').",
            73: "Người nói cần biết số lượng suất ăn chay trước thứ Sáu ('number of vegetarian guests')."
        },
        "vocab": [
            {"word": "catering service", "meaning": "dịch vụ cung cấp tiệc", "partOfSpeech": "n"},
            {"word": "vegetarian guest", "meaning": "khách ăn chay", "partOfSpeech": "n"},
            {"word": "herbal tea", "meaning": "trà thảo mộc", "partOfSpeech": "n"}
        ]
    },
    "part4-74-76": {
        "title": "Hướng dẫn an toàn và dịch vụ tiện ích trên chuyến bay",
        "lines_vn": [
            "Kính chào quý hành khách trên chuyến bay số hiệu 482 đi Denver.",
            "Máy bay của chúng ta đang chuẩn bị cất cánh, xin quý khách vui lòng cài chặt dây an toàn, dựng thẳng lưng ghế và gấp gọn bàn ăn phía trước.",
            "Các thiết bị điện tử cầm tay có thể được sử dụng ở chế độ máy bay trong suốt hành trình.",
            "Sau khi máy bay đạt độ cao ổn định, tổ tiếp viên sẽ phục vụ đồ uống nhẹ và các món ăn nhẹ miễn phí.",
            "Nếu quý khách cần trợ giúp gì thêm, xin vui lòng bấm nút gọi tiếp viên phía trên đầu. Chúc quý khách một chuyến bay thoải mái và tốt lành."
        ],
        "q_vn": {
            74: "Thông báo đang được đưa ra vào thời điểm nào?",
            75: "Hành khách được yêu cầu làm điều gì?",
            76: "Dịch vụ nào sẽ được phục vụ miễn phí sau khi máy bay ổn định độ cao?"
        },
        "opts_vn": {
            74: {"A": "Trước khi máy bay cất cánh", "B": "Khi máy bay hạ cánh", "C": "Trong lúc bay qua vùng thời tiết xấu", "D": "Khi khách đang lên máy bay"},
            75: {"A": "Cài dây an toàn và dựng lưng ghế", "B": "Tắt hoàn toàn điện thoại", "C": "Đổi chỗ ngồi", "D": "Xuất trình vé"},
            76: {"A": "Xem phim cao cấp", "B": "Mạng Wi-Fi tốc độ cao", "C": "Bảo hiểm hành lý", "D": "Đồ uống và đồ ăn nhẹ"}
        },
        "exps": {
            74: "Thông báo được phát khi máy bay chuẩn bị cất cánh ('preparing for departure/takeoff').",
            75: "Hành khách được yêu cầu cài dây an toàn và dựng thẳng lưng ghế ('fasten seatbelt, bring seatback upright').",
            76: "Tiếp viên sẽ phục vụ đồ uống và đồ ăn nhẹ miễn phí ('complimentary beverages and snacks')."
        },
        "vocab": [
            {"word": "departure", "meaning": "sự khởi hành, cất cánh", "partOfSpeech": "n"},
            {"word": "fasten seatbelt", "meaning": "cài dây an toàn", "partOfSpeech": "phrase"},
            {"word": "flight attendant", "meaning": "tiếp viên hàng không", "partOfSpeech": "n"}
        ]
    },
    "part4-77-79": {
        "title": "Khai mạc hội thảo tối ưu hóa doanh số bán hàng đa kênh",
        "speakers": ["Speaker"],
        "lines_vn": [
            "Chào mừng toàn thể các chuyên viên và giám đốc kinh doanh đến với hội thảo chiến lược bán hàng đa kênh năm 2024.",
            "Trong bối cảnh hành vi người tiêu dùng thay đổi nhanh chóng, việc đồng bộ trải nghiệm mua sắm từ cửa hàng trực tiếp đến các nền tảng thương mại điện tử là chìa khóa để duy trì lòng trung thành của khách hàng.",
            "Phiên thảo luận chuyên đề sáng nay sẽ giới thiệu các công cụ phân tích dữ liệu khách hàng theo thời gian thực.",
            "Sau bài thuyết trình của diễn giả, chúng ta sẽ chia thành các nhóm nhỏ để cùng thực hành bài tập tình huống thực tế."
        ],
        "q_vn": {
            77: "Chủ đề chính của buổi hội thảo là gì?",
            78: "Theo người nói, điều gì giúp duy trì lòng trung thành của khách hàng?",
            79: "Các đại biểu sẽ làm gì sau bài thuyết trình của diễn giả?"
        },
        "opts_vn": {
            77: {"A": "Quản lý nhân sự", "B": "Luật sở hữu trí tuệ", "C": "Chiến lược bán hàng đa kênh", "D": "Kỹ năng lập trình web"},
            78: {"A": "Giảm giá sâu", "B": "Mở thêm nhiều chi nhánh", "C": "Quảng cáo truyền hình", "D": "Đồng bộ trải nghiệm mua sắm đa nền tảng"},
            79: {"A": "Dùng bữa trưa", "B": "Chia nhóm nhỏ thực hành bài tập tình huống", "C": "Làm bài kiểm tra trắc nghiệm", "D": "Rời hội trường"}
        },
        "exps": {
            77: "Hội thảo bàn về chiến lược bán hàng đa kênh ('omnichannel sales strategy').",
            78: "Đồng bộ trải nghiệm mua sắm trên các kênh giúp giữ chân khách hàng ('synchronizing the shopping experience across platforms').",
            79: "Đại biểu sẽ chia nhóm nhỏ làm bài tập tình huống ('work in small groups on a case study')."
        },
        "vocab": [
            {"word": "omnichannel", "meaning": "bán hàng đa kênh", "partOfSpeech": "adj"},
            {"word": "customer loyalty", "meaning": "lòng trung thành của khách hàng", "partOfSpeech": "n"},
            {"word": "case study", "meaning": "bài tập tình huống thực tế", "partOfSpeech": "n"}
        ]
    },
    "part4-80-82": {
        "title": "Thông báo khai mạc triển lãm thiết bị phòng tắm gia đình tại hội chợ",
        "speakers": ["Speaker"],
        "lines_vn": [
            "Xin quý vị chú ý. Triển lãm thiết bị phòng tắm gia đình sẽ chính thức khai mạc trong vòng một giờ nữa tại Hội trường D.",
            "Triển lãm sẽ giới thiệu những thiết kế mới nhất về phòng tắm hoa sen và bồn tắm, cũng như nhiều loại vật liệu phong phú để tùy biến ngôi nhà.",
            "Kính mời các đơn vị tham gia triển lãm có mặt tại gian hàng của mình ít nhất 30 phút trước khi mở cửa đón công chúng.",
            "Nếu quý vị cần hỗ trợ, bất kỳ nhân viên nào của ban tổ chức cũng có thể hướng dẫn quý vị về đúng gian hàng của mình.",
            "Quý khách tham quan xin đừng quên mang theo vé vào cửa. Chúng tôi sẽ tổ chức một chương trình bốc thăm may mắn với cơ hội trúng một chiếc bồn tắm hoàn toàn mới, và quý vị cần có vé để tham gia."
        ],
        "q_vn": {
            80: "Loại sự kiện nào có khả năng nhất đang diễn ra?",
            81: "Các đơn vị trưng bày được yêu cầu làm gì?",
            82: "Người nói cho biết người tham quan có thể làm gì với vé vào cửa của mình?"
        },
        "opts_vn": {
            80: {"A": "Một triển lãm thương mại / hội chợ", "B": "Một triển lãm bảo tàng", "C": "Một lễ hội ẩm thực", "D": "Một buổi hội thảo làm vườn"},
            81: {"A": "Đeo thẻ tên nhận dạng", "B": "Phát mẫu thử", "C": "Lấy thẻ đỗ xe", "D": "Đến địa điểm trưng bày sớm (trước 30 phút)"},
            82: {"A": "Nhận chiết khấu giảm giá", "B": "Tham gia một cuộc thi / bốc thăm may mắn", "C": "Vào khu vực đặc biệt", "D": "Mua đồ ăn nhẹ"}
        },
        "exps": {
            80: "Sự kiện trưng bày bồn tắm, gian hàng tại hội trường D là triển lãm thương mại (A trade show).",
            81: "Các đơn vị triển lãm được yêu cầu có mặt tại gian hàng trước ít nhất 30 phút (Arrive at a location early).",
            82: "Khách dùng vé để tham gia bốc thăm may mắn trúng bồn tắm mới ('running a raffle... need ticket' -> Enter a contest)."
        },
        "vocab": [
            {"word": "trade show", "meaning": "triển lãm thương mại, hội chợ", "partOfSpeech": "n"},
            {"word": "exhibitor", "meaning": "đơn vị trưng bày, triển lãm", "partOfSpeech": "n"},
            {"word": "raffle", "meaning": "cuộc rút thăm trúng thưởng", "partOfSpeech": "n"},
            {"word": "customization", "meaning": "sự tùy biến, thiết kế riêng", "partOfSpeech": "n"}
        ]
    },
    "part4-83-85": {
        "title": "Khen ngợi chuyên viên quảng cáo về dự án thương mại khách sạn Dearborn",
        "speakers": ["Speaker"],
        "lines_vn": [
            "Chào Andrew. Tôi gọi điện về hợp đồng với khách sạn Dearborn, khách hàng mà chúng ta đang sản xuất phim quảng cáo truyền hình cho họ.",
            "Tôi vừa nhận được phản hồi từ họ và họ cho biết họ vô cùng hài lòng với cách bạn giải quyết các nhu cầu của họ cho dự án này.",
            "Thật tuyệt vời khi luôn nhận được phản hồi tích cực như vậy từ khách hàng của chúng ta. Và đây lại là hợp đồng lớn đầu tiên của bạn nữa chứ.",
            "Họ cũng đề cập rằng họ muốn điều chỉnh lại một chút về tiến độ thời gian của dự án.",
            "Bạn có thể gửi email cho tôi bản tiến độ mới nhất của dự án được không? Cảm ơn bạn."
        ],
        "q_vn": {
            83: "Người nói có khả năng nhất làm việc trong ngành nghề nào?",
            84: "Người nói có ý gì khi nói 'Và đây là hợp đồng đầu tiên của bạn'?",
            85: "Người nói yêu cầu người nghe gửi tài liệu gì?"
        },
        "opts_vn": {
            83: {"A": "Khách sạn nhà hàng", "B": "Tài chính ngân hàng", "C": "Quảng cáo truyền thông", "D": "Công nghệ thông tin"},
            84: {"A": "Cô ấy rất ấn tượng trước kết quả làm việc của anh ấy.", "B": "Cô ấy sẵn sàng trả lời các câu hỏi thắc mắc.", "C": "Một sai sót là điều có thể hiểu được.", "D": "Một quy trình sẽ mất nhiều thời gian."},
            85: {"A": "Bảng tiến độ thời gian (timeline)", "B": "Một địa chỉ", "C": "Một số số liệu doanh số", "D": "Ghi chú cuộc họp"}
        },
        "exps": {
            83: "Công ty sản xuất phim quảng cáo truyền hình ('producing the television commercial' -> Advertising).",
            84: "Người nói khen ngợi phản hồi tích cực của khách hàng và ấn tượng vì đây mới là hợp đồng đầu tiên của Andrew ('She is impressed by some work').",
            85: "Người nói nhờ gửi bản tiến độ mới nhất của dự án ('email me the most recent copy of the project timeline' -> A timeline)."
        },
        "vocab": [
            {"word": "television commercial", "meaning": "phim quảng cáo truyền hình (TVC)", "partOfSpeech": "n"},
            {"word": "timeline", "meaning": "tiến độ thời gian, lộ trình", "partOfSpeech": "n"},
            {"word": "impressed", "meaning": "bị ấn tượng, khâm phục", "partOfSpeech": "adj"}
        ]
    },
    "part4-86-88": {
        "title": "Quy trình xử lý sự cố rò rỉ nhiên liệu trên máy móc nông trại",
        "speakers": ["Speaker"],
        "lines_vn": [
            "Chào tất cả mọi người. Là nhân viên nông trại, tất cả chúng ta đều từng gặp phải những vấn đề khác nhau với trang thiết bị của mình.",
            "Hôm nay, tôi sẽ nói về những việc cần làm khi các bạn phát hiện chất lỏng bị rò rỉ từ bất kỳ thiết bị nông trại nào của chúng ta.",
            "Máy cắt cỏ và máy kéo của chúng ta chủ yếu sử dụng các chất lỏng như nước làm mát hoặc dầu thủy lực để điều khiển tay lái.",
            "Khi các bạn phát hiện chất lỏng rò rỉ từ đường ống bị vỡ hoặc van bị hỏng, đừng cố tự mình sửa chữa nhé.",
            "Xin hãy báo ngay cho tôi và tôi sẽ liên hệ với nhà sản xuất để nhận phụ tùng thay thế chính hãng. Nếu không, chế độ bảo hành máy sẽ bị vô hiệu hóa."
        ],
        "q_vn": {
            86: "Người nghe có khả năng nhất làm việc ở đâu?",
            87: "Người nói chủ yếu đang thảo luận về điều gì?",
            88: "Người nói đề xuất giải pháp xử lý nào?"
        },
        "opts_vn": {
            86: {"A": "Tại một công viên công cộng", "B": "Tại một công ty cảnh quan", "C": "Tại một nông trại", "D": "Tại một siêu thị"},
            87: {"A": "Mua sắm thêm dụng cụ", "B": "Đào tạo nhân viên vệ sinh", "C": "Sửa chữa khắc phục sự cố thiết bị", "D": "Sắp xếp phương tiện đi lại"},
            88: {"A": "Liên hệ với nhà sản xuất thiết bị", "B": "Cắt giảm ngân sách", "C": "Thuê thêm lều bạt", "D": "Kéo dài giờ làm việc"}
        },
        "exps": {
            86: "Người nói mở đầu: 'As farm employees...' và nói về 'farm equipment', 'mowers and tractors' (làm tại nông trại - At a farm).",
            87: "Bài nói hướng dẫn cách xử lý hỏng hóc rò rỉ thiết bị nông nghiệp ('Repairing some equipment').",
            88: "Giải pháp là báo người nói để liên hệ nhà sản xuất lấy linh kiện thay thế ('contact the manufacturer for a replacement part')."
        },
        "vocab": [
            {"word": "farm equipment", "meaning": "thiết bị/máy móc nông trại", "partOfSpeech": "n"},
            {"word": "leak", "meaning": "rò rỉ, chảy nước", "partOfSpeech": "v/n"},
            {"word": "replacement part", "meaning": "phụ tùng thay thế", "partOfSpeech": "n"},
            {"word": "void warranty", "meaning": "làm mất hiệu lực bảo hành", "partOfSpeech": "phrase"}
        ]
    },
    "part4-89-91": {
        "title": "Triển lãm hội họa Johann Weber tại bảo tàng nghệ thuật Eastgate",
        "speakers": ["Speaker"],
        "lines_vn": [
            "Chào buổi chiều và cảm ơn quý khách đã ghé thăm Bảo tàng Nghệ thuật Eastgate.",
            "Tháng này, chúng tôi rất vui mừng mang đến một triển lãm đặc biệt về các bức tranh của họa sĩ Johann Weber.",
            "Chỉ trong vài phút nữa thôi, giám đốc bảo tàng của chúng tôi sẽ có bài nói chuyện tại nhà hát của bảo tàng về cuộc đời và sự nghiệp của người nghệ sĩ này.",
            "Trong lúc quý khách ở đây, xin hãy cân nhắc đăng ký trở thành hội viên của bảo tàng.",
            "Để đăng ký, quý khách vui lòng ghé qua bàn thông tin. Hội viên sẽ nhận được thông báo trước về các sự kiện giáo dục tương tự như sự kiện ngày hôm nay."
        ],
        "q_vn": {
            89: "Johann Weber là ai?",
            90: "Sự kiện gì sẽ diễn ra ngay trong giây lát nữa?",
            91: "Theo người nói, thính giả có thể làm gì tại bàn thông tin?"
        },
        "opts_vn": {
            89: {"A": "Một nhạc sĩ", "B": "Một thủ thư", "C": "Một họa sĩ", "D": "Một nhà báo"},
            90: {"A": "Giám đốc bảo tàng sẽ có một bài nói chuyện.", "B": "Một chuyến tham quan cơ sở sẽ bắt đầu.", "C": "Một bức ảnh tập thể sẽ được chụp.", "D": "Một bữa ăn sẽ được phục vụ."},
            91: {"A": "Nhận bản tin định kỳ", "B": "Đăng ký thẻ hội viên bảo tàng", "C": "Tham gia một cuộc thi", "D": "Đăng ký một buổi workshop"}
        },
        "exps": {
            89: "Johann Weber là họa sĩ với triển lãm các bức tranh ('paintings' -> A painter).",
            90: "Giám đốc bảo tàng chuẩn bị có bài nói chuyện về họa sĩ trong vài phút nữa ('director will be giving a talk in a few minutes').",
            91: "Người nghe có thể đăng ký thẻ hội viên tại bàn thông tin ('To sign up, stop by the information desk... becoming a member' -> Sign up for a membership)."
        },
        "vocab": [
            {"word": "painting", "meaning": "bức tranh hội họa", "partOfSpeech": "n"},
            {"word": "museum member", "meaning": "hội viên bảo tàng", "partOfSpeech": "n"},
            {"word": "information desk", "meaning": "bàn thông tin, quầy hướng dẫn", "partOfSpeech": "n"}
        ]
    },
    "part4-92-94": {
        "title": "Phân tích cơ cấu chi phí hàng tháng của phòng khám nha khoa",
        "speakers": ["Speaker"],
        "lines_vn": [
            "Biểu đồ này thể hiện chi phí trung bình hàng tháng của phòng khám chúng ta.",
            "Tiền lương trả cho các chuyên viên vệ sinh răng miệng, trợ tá nha khoa và các nhân viên khác chiếm khoảng 25% ngân sách, con số này hoàn toàn đúng theo mục tiêu dự toán.",
            "Mặc dù tiền thuê mặt bằng đã tăng dần qua các năm, nó vẫn không chiếm tỷ trọng quá lớn trong ngân sách của chúng ta.",
            "Tuy nhiên, hãy nhìn vào chi phí vật tư y tế của chúng ta xem. Quý vị biết đấy, gần đây chúng ta chưa từng khảo sát giá từ các nhà cung ứng khác.",
            "Bất kỳ khoản tiền tiết kiệm nào chúng ta tìm được đều có thể dùng cho việc tiếp thị để giúp mang lại nhiều khách hàng hơn. Vậy chúng ta có thể tập trung nỗ lực tiếp thị vào đâu?"
        ],
        "q_vn": {
            92: "Người nói có khả năng nhất làm việc ở đâu?",
            93: "Người nói ngụ ý điều gì khi nói 'Chúng ta chưa từng khảo sát các nhà cung cấp khác gần đây'?",
            94: "Vấn đề nào nhiều khả năng nhất sẽ được thảo luận tiếp theo?"
        },
        "opts_vn": {
            92: {"A": "Tại một phòng khám nha khoa", "B": "Tại một ngân hàng thương mại", "C": "Tại một công ty cho thuê thiết bị", "D": "Tại một văn phòng việc làm"},
            93: {"A": "Cô ấy chưa quen thuộc với nhiệm vụ.", "B": "Cô ấy đang tìm tình nguyện viên.", "C": "Có thể có các lựa chọn nhà cung cấp giá cả phải chăng hơn.", "D": "Một số thông tin cần được chỉnh sửa."},
            94: {"A": "Kế hoạch chuyển địa điểm", "B": "Chiến dịch tuyển dụng nhân viên", "C": "Một số thay đổi về chính sách làm việc", "D": "Một số ý tưởng tiếp thị quảng bá"}
        },
        "exps": {
            92: "Người nói nhắc đến chi phí cho 'dental hygienists, assistants' (chuyên viên vệ sinh răng, trợ tá nha khoa -> At a dental office).",
            93: "Câu nói ngụ ý việc tìm nhà cung cấp khác có thể tìm được nguồn vật tư rẻ hơn, tiết kiệm chi phí hơn (More affordable options may be available).",
            94: "Người nói kết thúc bằng câu hỏi về chiến lược tiếp thị: 'So where could we focus our marketing efforts?' (Some marketing ideas)."
        },
        "vocab": [
            {"word": "dental clinic", "meaning": "phòng khám nha khoa", "partOfSpeech": "n"},
            {"word": "dental hygienist", "meaning": "chuyên viên vệ sinh răng miệng", "partOfSpeech": "n"},
            {"word": "medical supplies", "meaning": "vật tư y tế", "partOfSpeech": "n"},
            {"word": "marketing efforts", "meaning": "các nỗ lực tiếp thị", "partOfSpeech": "n"}
        ]
    },
    "part4-95-97": {
        "title": "Đặt mua ba lô làm quà tặng quảng bá kèm tiêu chuẩn quai đệm và ngăn nước",
        "speakers": ["Speaker"],
        "lines_vn": [
            "Xin chào, tôi gọi điện để đặt mua một số chiếc ba lô cho công ty của tôi.",
            "Gần đây chúng tôi bắt đầu kinh doanh sách giáo khoa, và các nhân viên của chúng tôi sẽ đi công tác khắp khu vực để bán hàng.",
            "Tôi muốn tặng những chiếc ba lô này cho khách hàng của chúng tôi như một món quà tặng khuyến mãi quảng bá thương hiệu.",
            "Nhưng tôi muốn chúng phải thật chắc chắn, vì vậy tôi muốn mẫu có quai đeo có đệm lót êm ái để tạo sự thoải mái. Và cũng cần phải có ngăn đựng chai nước thuận tiện nữa.",
            "Nếu quý công ty có mẫu ba lô đáp ứng nhu cầu này, chúng tôi dự định đặt mua 50 chiếc. Xin hãy cho tôi biết có mức chiết khấu giảm giá cho đơn hàng số lượng lớn không nhé. Vui lòng gọi lại cho tôi theo số 555-0198."
        ],
        "q_vn": {
            95: "Tại sao người nói muốn mua ba lô?",
            96: "Mẫu ba lô nào trên bảng đồ họa đáp ứng đúng các nhu cầu của người nói?",
            97: "Người nói hỏi thêm về thông tin gì?"
        },
        "opts_vn": {
            95: {"A": "Để quyên góp cho một trường học địa phương", "B": "Để tặng cho khách hàng làm quà khuyến mãi", "C": "Để giúp nhân viên mang tài liệu", "D": "Để in logo công ty"},
            96: {"A": "The Outsider", "B": "Modern Traveler", "C": "Road Bound", "D": "Elite Pro"},
            97: {"A": "Hình ảnh sản phẩm", "B": "Giao hàng hỏa tốc", "C": "Chính sách đổi trả hàng", "D": "Chiết khấu giảm giá (bulk discount)"}
        },
        "exps": {
            95: "Người nói muốn mua ba lô để làm quà tặng khuyến mãi cho khách hàng ('provide the backpacks to our customers as promotional gifts' -> give to clients as gifts).",
            96: "Người nói yêu cầu ba lô chắc chắn, có quai đeo đệm êm ('padded straps') và có chỗ để chai nước ('water bottle holder'). Đối chiếu trên bảng đồ họa các mẫu ba lô, mẫu The Outsider có cả hai tính năng này.",
            97: "Người nói hỏi về chính sách chiết khấu mua số lượng lớn ('tell me if there is a bulk discount' -> A discount)."
        },
        "vocab": [
            {"word": "promotional gift", "meaning": "quà tặng khuyến mãi/quảng bá", "partOfSpeech": "n"},
            {"word": "padded straps", "meaning": "quai đeo có đệm lót êm ái", "partOfSpeech": "n"},
            {"word": "bulk discount", "meaning": "chiết khấu mua số lượng lớn", "partOfSpeech": "n"},
            {"word": "sturdy", "meaning": "chắc chắn, bền bỉ", "partOfSpeech": "adj"}
        ]
    },
    "part4-98-100": {
        "title": "Mở rộng hoạt động siêu thị tạp hóa sang 7 ngày trong tuần và bổ sung ca trực",
        "speakers": ["Speaker"],
        "lines_vn": [
            "Chào tất cả mọi người. Như hầu hết các bạn đã biết, tôi đã mở cửa hàng tạp hóa thực phẩm này cách đây năm năm.",
            "Tôi rất vui vì chúng ta là nhà cung cấp rau củ và trái cây chủ lực trong khu dân cư này. Và nhu cầu đối với các sản phẩm của chúng ta ngày càng gia tăng.",
            "Để đáp ứng nhu cầu này, chúng ta vừa nhận được một khoản vay vốn cho phép mở rộng quy mô hoạt động.",
            "Nguồn vốn bổ sung này sẽ cho phép chúng ta thực hiện một thay đổi quan trọng: Có hiệu lực ngay lập tức, cửa hàng sẽ mở cửa trọn vẹn 7 ngày trong tuần.",
            "Điều đó có nghĩa là chúng ta sẽ có thêm các ca làm việc mới. Nếu bạn nào muốn làm thêm một trong các ca này, xin vui lòng báo cho tôi biết."
        ],
        "q_vn": {
            98: "Người nói điều hành loại hình kinh doanh nào?",
            99: "Theo người nói, doanh nghiệp vừa nhận được điều gì?",
            100: "Vào ngày nào trong tuần thì giờ mở cửa của doanh nghiệp sẽ có sự thay đổi?"
        },
        "opts_vn": {
            98: {"A": "Một tiệm làm tóc", "B": "Một hiệu sách", "C": "Một cửa hàng tạp hóa / siêu thị thực phẩm", "D": "Một cửa hàng đồ gia dụng"},
            99: {"A": "Một khoản vay vốn", "B": "Một giải thưởng", "C": "Một số mẫu sản phẩm dùng thử", "D": "Các đánh giá tốt từ khách hàng"},
            100: {"A": "Thứ Năm", "B": "Thứ Sáu", "C": "Thứ Bảy", "D": "Chủ Nhật"}
        },
        "exps": {
            98: "Người nói điều hành cửa hàng tạp hóa rau quả thực phẩm ('opened this grocery store' -> A grocery store).",
            99: "Cửa hàng nhận được một khoản vay vốn để mở rộng ('received a loan that will allow us to expand' -> A loan).",
            100: "Cửa hàng sẽ mở cửa 7 ngày/tuần ('opened seven days a week'). Đối chiếu bảng giờ mở cửa Hours of Operation (graphic), từ thứ Hai đến thứ Bảy đã mở cửa, riêng Sunday ghi 'Closed' (Đóng cửa). Do đó ngày có sự thay đổi giờ mở cửa là ngày Chủ Nhật (Sunday)."
        },
        "vocab": [
            {"word": "grocery store", "meaning": "cửa hàng tạp hóa/thực phẩm", "partOfSpeech": "n"},
            {"word": "loan", "meaning": "khoản vay vốn ngân hàng", "partOfSpeech": "n"},
            {"word": "expand operations", "meaning": "mở rộng hoạt động kinh doanh", "partOfSpeech": "phrase"},
            {"word": "extra shift", "meaning": "ca làm việc bổ sung", "partOfSpeech": "n"}
        ]
    }
}

with open("test10_raw_items.json") as f:
    raw_items = json.load(f)

part3_items = []
part4_items = []

for it in raw_items:
    iid = it["id"]
    p = it["part"]
    
    if p == 3:
        meta = meta_p3_t10[iid]
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
        meta = meta_p4_t10[iid]
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

out_p3 = "scripts/build_2024_t10_p3.py"
with open(out_p3, "w", encoding="utf-8") as f:
    f.write(f"# Part 3 data for ETS TOEIC 2024 Test 10\npart3_items = {json.dumps(part3_items, ensure_ascii=False, indent=2)}\n")
print(f"Generated {len(part3_items)} items for Test 10 Part 3 in {out_p3}")

out_p4 = "scripts/build_2024_t10_p4.py"
with open(out_p4, "w", encoding="utf-8") as f:
    f.write(f"# Part 4 data for ETS TOEIC 2024 Test 10\npart4_items = {json.dumps(part4_items, ensure_ascii=False, indent=2)}\n")
print(f"Generated {len(part4_items)} items for Test 10 Part 4 in {out_p4}")
