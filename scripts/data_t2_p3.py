import json

part3_items = [
    {
        "id": "part3-32-34",
        "part": 3,
        "partTitle": "Part 3: Đoạn hội thoại",
        "questionRange": "Câu 32 - 34",
        "title": "Part 3 - Câu 32-34: Giao đồ ăn và sự cố chuông cửa tòa nhà",
        "audioSrc": "/audio/cuts/test2/E26-T02-32-34.mp3",
        "transcript": [
            {"id": "p3-32-1", "speaker": "W-Am", "text": "How were your deliveries?", "vietnamese": "Các đơn giao hàng của anh thế nào rồi?"},
            {"id": "p3-32-2", "speaker": "M-Cn", "text": "Not bad, except at that new residential building on South Street. I had to call them on my phone to come pick up their food. At first, I tried to call on the building intercom, but it's still broken.", "vietnamese": "Không tệ, ngoại trừ ở tòa nhà dân cư mới trên phố South. Tôi đã phải dùng điện thoại gọi họ xuống lấy thức ăn. Ban đầu, tôi đã thử gọi bằng chuông liên lạc nội bộ của tòa nhà, nhưng nó vẫn bị hỏng."},
            {"id": "p3-32-3", "speaker": "W-Am", "text": "You're not the first to say that. Last week, a customer called to complain that their food was cold by the time they found it.", "vietnamese": "Anh không phải người đầu tiên nói vậy đâu. Tuần trước, một khách hàng đã gọi điện phàn nàn rằng đồ ăn của họ bị nguội ngắt khi họ tìm thấy."},
            {"id": "p3-32-4", "speaker": "M-Cn", "text": "Maybe we just can't make deliveries there until the landlord fixes the intercom system.", "vietnamese": "Có lẽ chúng ta không thể giao hàng đến đó cho đến khi chủ nhà sửa xong hệ thống chuông nội bộ."},
            {"id": "p3-32-5", "speaker": "W-Am", "text": "I'm going to update the instructions on our mobile app telling customers to meet us at the building's front door. Let's see if that helps.", "vietnamese": "Tôi sẽ cập nhật hướng dẫn trên ứng dụng di động yêu cầu khách hàng ra gặp chúng ta ngay trước cửa chính tòa nhà. Để xem cách đó có hiệu quả không."}
        ],
        "questions": [
            {
                "num": 32,
                "question": "What kind of work does the man do?",
                "vietnameseQuestion": "Người đàn ông làm công việc gì?",
                "options": [
                    {"key": "A", "text": "He is a tour guide.", "vietnamese": "Anh ấy là hướng dẫn viên du lịch."},
                    {"key": "B", "text": "He is a landlord.", "vietnamese": "Anh ấy là chủ nhà trọ."},
                    {"key": "C", "text": "He repairs appliances.", "vietnamese": "Anh ấy sửa chữa thiết bị gia dụng."},
                    {"key": "D", "text": "He delivers food.", "vietnamese": "Anh ấy giao đồ ăn."}
                ],
                "correctAnswer": "D",
                "explanation": "Người phụ nữ hỏi 'How were your deliveries?' và người đàn ông nói về việc gọi khách ra lấy đồ ăn (pick up their food), cho thấy anh ấy là người giao đồ ăn."
            },
            {
                "num": 33,
                "question": "What has caused problems for the speakers' business?",
                "vietnameseQuestion": "Điều gì đã gây ra vấn đề cho công việc kinh doanh của người nói?",
                "options": [
                    {"key": "A", "text": "Road construction", "vietnamese": "Thi công đường xá."},
                    {"key": "B", "text": "Cold weather", "vietnamese": "Thời tiết lạnh giá."},
                    {"key": "C", "text": "An expired permit", "vietnamese": "Giấy phép hết hạn."},
                    {"key": "D", "text": "A broken intercom", "vietnamese": "Hệ thống chuông cửa nội bộ bị hỏng."}
                ],
                "correctAnswer": "D",
                "explanation": "Người đàn ông nói hệ thống chuông cửa nội bộ tòa nhà vẫn bị hỏng: 'the building intercom, but it's still broken'."
            },
            {
                "num": 34,
                "question": "What will the woman update on a mobile application?",
                "vietnameseQuestion": "Người phụ nữ sẽ cập nhật nội dung gì trên ứng dụng di động?",
                "options": [
                    {"key": "A", "text": "Instructions", "vietnamese": "Các chỉ dẫn, hướng dẫn."},
                    {"key": "B", "text": "Prices", "vietnamese": "Bảng giá."},
                    {"key": "C", "text": "Photographs", "vietnamese": "Hình ảnh."},
                    {"key": "D", "text": "Hours of operation", "vietnamese": "Giờ hoạt động."}
                ],
                "correctAnswer": "A",
                "explanation": "Người phụ nữ nói 'I'm going to update the instructions on our mobile app' (Tôi sẽ cập nhật các hướng dẫn trên ứng dụng di động)."
            }
        ],
        "vocabulary": [
            {"word": "delivery", "meaning": "sự giao hàng, đơn giao hàng", "partOfSpeech": "n"},
            {"word": "residential building", "meaning": "tòa nhà dân cư, chung cư", "partOfSpeech": "n"},
            {"word": "intercom", "meaning": "hệ thống chuông đàm thoại nội bộ", "partOfSpeech": "n"},
            {"word": "landlord", "meaning": "chủ nhà, chủ tòa nhà", "partOfSpeech": "n"}
        ]
    },
    {
        "id": "part3-35-37",
        "part": 3,
        "partTitle": "Part 3: Đoạn hội thoại",
        "questionRange": "Câu 35 - 37",
        "title": "Part 3 - Câu 35-37: Lên kế hoạch chuỗi kịch Nhà hát trong Công viên",
        "audioSrc": "/audio/cuts/test2/E26-T02-35-37.mp3",
        "transcript": [
            {"id": "p3-35-1", "speaker": "W-Br", "text": "We're getting close to the time of year when we need to begin planning our Theater in the Park series for the summer. We have lots of decisions to make about shows, dates, and performers.", "vietnamese": "Đang đến gần thời điểm trong năm mà chúng ta cần bắt đầu lên kế hoạch cho chuỗi chương trình Nhà hát trong Công viên cho mùa hè rồi. Chúng ta có rất nhiều quyết định cần đưa ra về các buổi biểu diễn, ngày diễn và nghệ sĩ."},
            {"id": "p3-35-2", "speaker": "M-Au", "text": "You're right. I'll set up a meeting for this month. You know, I had an idea. Why don't we invite community residents to volunteer to help with building sets, painting, and setting up the stage?", "vietnamese": "Chị nói đúng. Tôi sẽ sắp xếp một cuộc họp trong tháng này. Chị biết đấy, tôi có một ý tưởng. Tại sao chúng ta không mời cư dân địa phương tham gia tình nguyện giúp dựng bối cảnh, sơn quét và lắp đặt sân khấu nhỉ?"},
            {"id": "p3-35-3", "speaker": "W-Br", "text": "We could, but I don't know if we'll be able to use volunteers this year. We'll need approval to start that kind of program. It'll take time. Let's check into that for next year.", "vietnamese": "Chúng ta có thể làm thế, nhưng tôi không biết liệu năm nay chúng ta có thể sử dụng tình nguyện viên hay không. Chúng ta sẽ cần được phê duyệt để bắt đầu chương trình kiểu đó. Sẽ mất thời gian đấy. Hãy tìm hiểu điều đó cho năm sau nhé."}
        ],
        "questions": [
            {
                "num": 35,
                "question": "What industry do the speakers most likely work in?",
                "vietnameseQuestion": "Những người nói có khả năng cao làm việc trong ngành nào?",
                "options": [
                    {"key": "A", "text": "Fitness", "vietnamese": "Thể hình, thể thao."},
                    {"key": "B", "text": "Entertainment", "vietnamese": "Giải trí, nghệ thuật."},
                    {"key": "C", "text": "Landscaping", "vietnamese": "Thiết kế cảnh quan."},
                    {"key": "D", "text": "Travel", "vietnamese": "Du lịch."}
                ],
                "correctAnswer": "B",
                "explanation": "Họ bàn về việc lên kế hoạch 'Theater in the Park series', 'shows, dates, and performers' nên thuộc ngành giải trí (Entertainment)."
            },
            {
                "num": 36,
                "question": "What does the man suggest?",
                "vietnameseQuestion": "Người đàn ông đề xuất điều gì?",
                "options": [
                    {"key": "A", "text": "Providing online access to videos", "vietnamese": "Cung cấp quyền truy cập video trực tuyến."},
                    {"key": "B", "text": "Creating volunteer opportunities", "vietnamese": "Tạo ra các cơ hội tình nguyện."},
                    {"key": "C", "text": "Offering free transportation", "vietnamese": "Cung cấp phương tiện di chuyển miễn phí."},
                    {"key": "D", "text": "Adding additional time slots", "vietnamese": "Bổ sung thêm khung giờ."}
                ],
                "correctAnswer": "B",
                "explanation": "Người đàn ông đề nghị mời cư dân tham gia tình nguyện hỗ trợ dựng sân khấu: 'invite community residents to volunteer'."
            },
            {
                "num": 37,
                "question": "Why do the speakers need to wait?",
                "vietnameseQuestion": "Tại sao những người nói cần phải chờ đợi?",
                "options": [
                    {"key": "A", "text": "Promotional items have not been ordered.", "vietnamese": "Vật phẩm quảng bá chưa được đặt."},
                    {"key": "B", "text": "A facility is not available.", "vietnamese": "Cơ sở vật chất chưa sẵn sàng."},
                    {"key": "C", "text": "A budget is too small.", "vietnamese": "Ngân sách quá nhỏ."},
                    {"key": "D", "text": "A program has not been approved.", "vietnamese": "Chương trình chưa được phê duyệt."}
                ],
                "correctAnswer": "D",
                "explanation": "Người phụ nữ nói 'We'll need approval to start that kind of program' (cần sự phê duyệt để bắt đầu chương trình đó)."
            }
        ],
        "vocabulary": [
            {"word": "performer", "meaning": "người biểu diễn, nghệ sĩ", "partOfSpeech": "n"},
            {"word": "volunteer", "meaning": "tình nguyện viên, làm tình nguyện", "partOfSpeech": "n/v"},
            {"word": "approval", "meaning": "sự phê duyệt, chấp thuận", "partOfSpeech": "n"}
        ]
    },
    {
        "id": "part3-38-40",
        "part": 3,
        "partTitle": "Part 3: Đoạn hội thoại",
        "questionRange": "Câu 38 - 40",
        "title": "Part 3 - Câu 38-40: Giải pháp cho các cửa hàng truyền thống ở khu trung tâm",
        "audioSrc": "/audio/cuts/test2/E26-T02-38-40.mp3",
        "transcript": [
            {"id": "p3-38-1", "speaker": "M-Cn", "text": "Back to our podcast with special guest Kimberly Stuart, who's currently advising our city on business development projects. Before the break, we promised to address the decline of shopping downtown.", "vietnamese": "Chào mừng quý vị trở lại với chương trình podcast cùng vị khách mời đặc biệt Kimberly Stuart, người hiện đang tư vấn cho thành phố của chúng ta về các dự án phát triển kinh doanh. Trước giờ giải lao, chúng tôi đã hứa sẽ bàn về sự sụt giảm mua sắm tại khu vực trung tâm."},
            {"id": "p3-38-2", "speaker": "W-Am", "text": "Yes—and it's been the worst at the kind of stores that sell unique items like antiques and jewelry. These items have always been purchased at brick-and-mortar stores but are now being purchased mostly online.", "vietnamese": "Vâng—và tình trạng này tồi tệ nhất tại các cửa hàng bán những mặt hàng độc đáo như đồ cổ và trang sức. Những mặt hàng này trước đây luôn được mua tại các cửa hàng vật lý truyền thống nhưng giờ đây hầu hết được mua qua mạng."},
            {"id": "p3-38-3", "speaker": "M-Cn", "text": "So, do those stores have a future?", "vietnamese": "Vậy thì những cửa hàng đó liệu có tương lai không?"},
            {"id": "p3-38-4", "speaker": "W-Am", "text": "I think they do, especially if we make a point of organizing live community activities downtown, such as concerts or festivals. When people walk around town, they are likely to browse at stores—and make purchases.", "vietnamese": "Tôi nghĩ là có, đặc biệt nếu chúng ta chú trọng tổ chức các hoạt động cộng đồng trực tiếp ở trung tâm thành phố, chẳng hạn như hòa nhạc hoặc lễ hội. Khi mọi người đi dạo quanh thị trấn, họ sẽ có xu hướng ghé xem các cửa hàng—và mua sắm."}
        ],
        "questions": [
            {
                "num": 38,
                "question": "Who is the woman?",
                "vietnameseQuestion": "Người phụ nữ là ai?",
                "options": [
                    {"key": "A", "text": "A store owner", "vietnamese": "Chủ một cửa hàng."},
                    {"key": "B", "text": "A television celebrity", "vietnamese": "Người nổi tiếng trên truyền hình."},
                    {"key": "C", "text": "A business consultant", "vietnamese": "Cố vấn/tư vấn viên kinh doanh."},
                    {"key": "D", "text": "An event sponsor", "vietnamese": "Nhà tài trợ sự kiện."}
                ],
                "correctAnswer": "C",
                "explanation": "Người dẫn chương trình giới thiệu người phụ nữ là 'currently advising our city on business development projects' (chuyên gia tư vấn kinh doanh - A business consultant)."
            },
            {
                "num": 39,
                "question": "What does the woman say about online shopping?",
                "vietnameseQuestion": "Người phụ nữ nói gì về việc mua sắm trực tuyến?",
                "options": [
                    {"key": "A", "text": "It is cheaper than buying in person.", "vietnamese": "Rẻ hơn so với việc mua trực tiếp."},
                    {"key": "B", "text": "It makes shopping a social experience.", "vietnamese": "Biến mua sắm thành trải nghiệm xã hội."},
                    {"key": "C", "text": "It is reducing traffic problems in the city.", "vietnamese": "Làm giảm các vấn đề giao thông thành phố."},
                    {"key": "D", "text": "It is affecting specialty shops.", "vietnamese": "Đang ảnh hưởng đến các cửa hàng chuyên doanh."}
                ],
                "correctAnswer": "D",
                "explanation": "Người phụ nữ nói mua sắm online ảnh hưởng nặng nề nhất tới các cửa hàng bán đồ độc đáo như đồ cổ, trang sức ('stores that sell unique items like antiques and jewelry' -> specialty shops)."
            },
            {
                "num": 40,
                "question": "What does the woman suggest doing?",
                "vietnameseQuestion": "Người phụ nữ đề xuất làm gì?",
                "options": [
                    {"key": "A", "text": "Offering clearance sales", "vietnamese": "Tổ chức các đợt bán hàng xả kho."},
                    {"key": "B", "text": "Holding live events", "vietnamese": "Tổ chức các sự kiện trực tiếp."},
                    {"key": "C", "text": "Meeting with store owners", "vietnamese": "Gặp gỡ các chủ cửa hàng."},
                    {"key": "D", "text": "Retraining store staff", "vietnamese": "Đào tạo lại nhân viên cửa hàng."}
                ],
                "correctAnswer": "B",
                "explanation": "Người phụ nữ đề xuất tổ chức các hoạt động cộng đồng trực tiếp ở trung tâm: 'organizing live community activities downtown, such as concerts or festivals'."
            }
        ],
        "vocabulary": [
            {"word": "decline", "meaning": "sự suy giảm, sụt giảm", "partOfSpeech": "n"},
            {"word": "brick-and-mortar store", "meaning": "cửa hàng truyền thống (có mặt bằng vật lý)", "partOfSpeech": "n"},
            {"word": "browse", "meaning": "xem lướt qua, ngắm đồ", "partOfSpeech": "v"}
        ]
    },
    {
        "id": "part3-41-43",
        "part": 3,
        "partTitle": "Part 3: Đoạn hội thoại",
        "questionRange": "Câu 41 - 43",
        "title": "Part 3 - Câu 41-43: Chương trình hoàn tiền lắp đặt pin năng lượng mặt trời",
        "audioSrc": "/audio/cuts/test2/E26-T02-41-43.mp3",
        "transcript": [
            {"id": "p3-41-1", "speaker": "M-Au", "text": "Our company has seen a huge spike in sales ever since it launched the rebate program for customers. With the rebate, customers get money back. And they're telling their friends, increasing our sales.", "vietnamese": "Công ty chúng ta đã ghi nhận sự tăng vọt lớn về doanh số kể từ khi tung ra chương trình hoàn tiền cho khách hàng. Nhờ chính sách hoàn tiền, khách hàng nhận lại được tiền. Và họ đang giới thiệu cho bạn bè của họ, làm tăng doanh số bán hàng của chúng ta."},
            {"id": "p3-41-2", "speaker": "W-Br", "text": "Yes. The rebate's been great for our company because now more homeowners have an incentive to install solar panels on their properties, since they're rewarded for the electricity their solar panels produce. But our technicians can't keep up with the high demand.", "vietnamese": "Đúng vậy. Chương trình hoàn tiền đã mang lại lợi ích tuyệt vời cho công ty chúng ta vì giờ đây nhiều chủ nhà có động lực lắp đặt tấm pin năng lượng mặt trời trên khu đất của họ, do họ được thưởng cho lượng điện mà pin mặt trời tạo ra. Nhưng các kỹ thuật viên của chúng ta không thể đáp ứng kịp nhu cầu cao như vậy."},
            {"id": "p3-41-3", "speaker": "M-Au", "text": "You're right. I'm planning to hire more technicians. I've already received some résumés from potential candidates.", "vietnamese": "Chị nói đúng. Tôi đang dự định tuyển thêm kỹ thuật viên. Tôi đã nhận được một số hồ sơ xin việc từ các ứng viên tiềm năng rồi."}
        ],
        "questions": [
            {
                "num": 41,
                "question": "Why have a company's sales increased?",
                "vietnameseQuestion": "Tại sao doanh số của công ty lại tăng?",
                "options": [
                    {"key": "A", "text": "A rebate program was started.", "vietnamese": "Một chương trình hoàn tiền đã được triển khai."},
                    {"key": "B", "text": "A competitor went out of business.", "vietnamese": "Một đối thủ cạnh tranh đã phá sản."},
                    {"key": "C", "text": "A celebrity endorsed the company.", "vietnamese": "Một người nổi tiếng đã quảng bá công ty."},
                    {"key": "D", "text": "A product won an award.", "vietnamese": "Sản phẩm đã đạt được giải thưởng."}
                ],
                "correctAnswer": "A",
                "explanation": "Người đàn ông giải thích doanh số tăng vọt kể từ khi 'launched the rebate program for customers'."
            },
            {
                "num": 42,
                "question": "What industry do the speakers most likely work in?",
                "vietnameseQuestion": "Những người nói có khả năng cao làm việc trong ngành nào?",
                "options": [
                    {"key": "A", "text": "Banking", "vietnamese": "Ngân hàng."},
                    {"key": "B", "text": "Telecommunications", "vietnamese": "Viễn thông."},
                    {"key": "C", "text": "Solar energy", "vietnamese": "Năng lượng mặt trời."},
                    {"key": "D", "text": "Music", "vietnamese": "Âm nhạc."}
                ],
                "correctAnswer": "C",
                "explanation": "Người phụ nữ nhắc đến việc khách hàng lắp đặt 'solar panels on their properties' (tấm pin năng lượng mặt trời)."
            },
            {
                "num": 43,
                "question": "What does the man say he is planning to do?",
                "vietnameseQuestion": "Người đàn ông nói anh ấy dự định làm gì?",
                "options": [
                    {"key": "A", "text": "Hire new employees", "vietnamese": "Tuyển thêm nhân viên mới."},
                    {"key": "B", "text": "Provide additional training", "vietnamese": "Cung cấp thêm khóa đào tạo."},
                    {"key": "C", "text": "Upgrade some equipment", "vietnamese": "Nâng cấp một số trang thiết bị."},
                    {"key": "D", "text": "Open another location", "vietnamese": "Mở thêm một địa điểm khác."}
                ],
                "correctAnswer": "A",
                "explanation": "Người đàn ông dự định tuyển thêm kỹ thuật viên: 'I'm planning to hire more technicians'."
            }
        ],
        "vocabulary": [
            {"word": "spike", "meaning": "sự tăng vọt đột biến", "partOfSpeech": "n"},
            {"word": "rebate", "meaning": "khoản hoàn tiền, giảm giá sau mua", "partOfSpeech": "n"},
            {"word": "solar panel", "meaning": "tấm pin năng lượng mặt trời", "partOfSpeech": "n"},
            {"word": "incentive", "meaning": "động lực, sự khích lệ", "partOfSpeech": "n"}
        ]
    },
    {
        "id": "part3-44-46",
        "part": 3,
        "partTitle": "Part 3: Đoạn hội thoại",
        "questionRange": "Câu 44 - 46",
        "title": "Part 3 - Câu 44-46: Lựa chọn người đại diện tại hội chợ điện tử",
        "audioSrc": "/audio/cuts/test2/E26-T02-44-46.mp3",
        "transcript": [
            {"id": "p3-44-1", "speaker": "M-Cn", "text": "Fernanda, I was just looking at the company calendar, and I noticed that the national electronics trade show is coming up soon.", "vietnamese": "Fernanda, tôi vừa xem lịch làm việc của công ty và thấy triển lãm thương mại điện tử quốc gia sắp diễn ra rồi."},
            {"id": "p3-44-2", "speaker": "W-Br", "text": "Oh, that's right! It'll be a great opportunity for us to showcase the product that we've been developing—our new robotic vacuum cleaner.", "vietnamese": "Ồ, đúng rồi! Đó sẽ là cơ hội tuyệt vời để chúng ta trưng bày sản phẩm mà chúng ta đang phát triển—máy hút bụi robot mới của chúng ta."},
            {"id": "p3-44-3", "speaker": "M-Cn", "text": "We'll need to decide who we want to send to represent our company at the trade show.", "vietnamese": "Chúng ta cần phải quyết định xem ai sẽ đại diện cho công ty chúng ta tại triển lãm thương mại này."},
            {"id": "p3-44-4", "speaker": "W-Br", "text": "Well, I know just the right person—Kavi. Kavi does a good job of clearly explaining highly technical concepts in a way that everyone can understand.", "vietnamese": "À, tôi biết một người hoàn hảo cho vị trí này—Kavi. Kavi rất giỏi trong việc giải thích rõ ràng các khái niệm kỹ thuật phức tạp theo cách mà ai cũng có thể hiểu được."}
        ],
        "questions": [
            {
                "num": 44,
                "question": "What upcoming event are the speakers discussing?",
                "vietnameseQuestion": "Những người nói đang thảo luận về sự kiện sắp tới nào?",
                "options": [
                    {"key": "A", "text": "A trade show", "vietnamese": "Một triển lãm thương mại."},
                    {"key": "B", "text": "A client meeting", "vietnamese": "Một cuộc họp với khách hàng."},
                    {"key": "C", "text": "An awards ceremony", "vietnamese": "Một lễ trao giải."},
                    {"key": "D", "text": "A press conference", "vietnamese": "Một buổi họp báo."}
                ],
                "correctAnswer": "A",
                "explanation": "Người đàn ông đề cập đến 'national electronics trade show is coming up soon'."
            },
            {
                "num": 45,
                "question": "What product has the speakers' company recently developed?",
                "vietnameseQuestion": "Công ty của những người nói gần đây đã phát triển sản phẩm nào?",
                "options": [
                    {"key": "A", "text": "A video game", "vietnamese": "Trò chơi điện tử."},
                    {"key": "B", "text": "A mobile phone", "vietnamese": "Điện thoại di động."},
                    {"key": "C", "text": "A lawn mower", "vietnamese": "Máy cắt cỏ."},
                    {"key": "D", "text": "A vacuum cleaner", "vietnamese": "Máy hút bụi."}
                ],
                "correctAnswer": "D",
                "explanation": "Người phụ nữ nhắc đến sản phẩm 'our new robotic vacuum cleaner' (máy hút bụi robot)."
            },
            {
                "num": 46,
                "question": "Why does the woman recommend Kavi?",
                "vietnameseQuestion": "Tại sao người phụ nữ lại tiến cử Kavi?",
                "options": [
                    {"key": "A", "text": "He is a good communicator.", "vietnamese": "Anh ấy là người giao tiếp giỏi."},
                    {"key": "B", "text": "He enjoys traveling.", "vietnamese": "Anh ấy thích đi du lịch."},
                    {"key": "C", "text": "He leads a product development team.", "vietnamese": "Anh ấy dẫn dắt đội phát triển sản phẩm."},
                    {"key": "D", "text": "He lives near the event venue.", "vietnamese": "Anh ấy sống gần địa điểm tổ chức."}
                ],
                "correctAnswer": "A",
                "explanation": "Người phụ nữ khen ngợi Kavi giỏi giải thích các khái niệm kỹ thuật rõ ràng để ai cũng hiểu được ('does a good job of clearly explaining...' -> good communicator)."
            }
        ],
        "vocabulary": [
            {"word": "trade show", "meaning": "triển lãm thương mại, hội chợ thương mại", "partOfSpeech": "n"},
            {"word": "showcase", "meaning": "trưng bày, giới thiệu", "partOfSpeech": "v"},
            {"word": "robotic vacuum cleaner", "meaning": "máy hút bụi robot thông minh", "partOfSpeech": "n"}
        ]
    },
    {
        "id": "part3-47-49",
        "part": 3,
        "partTitle": "Part 3: Đoạn hội thoại",
        "questionRange": "Câu 47 - 49",
        "title": "Part 3 - Câu 47-49: Giới thiệu ứng viên lễ tân cho phòng khám",
        "audioSrc": "/audio/cuts/test2/E26-T02-47-49.mp3",
        "transcript": [
            {"id": "p3-47-1", "speaker": "M-Au", "text": "Dr. Fuentes, sorry to interrupt. Do you have a minute?", "vietnamese": "Bác sĩ Fuentes, xin lỗi vì đã làm phiền. Bác sĩ có rảnh một phút không?"},
            {"id": "p3-47-2", "speaker": "W-Br", "text": "Yes. My nine o'clock dental cleaning patient just canceled.", "vietnamese": "Có chứ. Bệnh nhân lấy cao răng lúc 9 giờ của tôi vừa mới hủy hẹn rồi."},
            {"id": "p3-47-3", "speaker": "M-Au", "text": "I know you're looking for a new receptionist. I'd like to recommend someone for the position.", "vietnamese": "Tôi biết bác sĩ đang tìm một nhân viên lễ tân mới. Tôi muốn giới thiệu một người cho vị trí này."},
            {"id": "p3-47-4", "speaker": "W-Br", "text": "Oh. Who do you have in mind?", "vietnamese": "Ồ. Anh đang nghĩ đến ai thế?"},
            {"id": "p3-47-5", "speaker": "M-Au", "text": "Well, a former colleague of mine has just moved back to town. Her name's Kelly Graham, and she has several years of experience.", "vietnamese": "À, một đồng nghiệp cũ của tôi vừa chuyển về thị trấn này. Tên cô ấy là Kelly Graham, và cô ấy đã có vài năm kinh nghiệm."},
            {"id": "p3-47-6", "speaker": "W-Br", "text": "OK. Could you tell Kelly to send me her résumé? I'd be happy to look it over.", "vietnamese": "Được rồi. Anh có thể bảo Kelly gửi hồ sơ xin việc cho tôi không? Tôi sẽ rất vui lòng xem qua nó."}
        ],
        "questions": [
            {
                "num": 47,
                "question": "Where do the speakers most likely work?",
                "vietnameseQuestion": "Những người nói có khả năng cao làm việc ở đâu?",
                "options": [
                    {"key": "A", "text": "At a publishing house", "vietnamese": "Tại một nhà xuất bản."},
                    {"key": "B", "text": "At a dental clinic", "vietnamese": "Tại một phòng khám nha khoa."},
                    {"key": "C", "text": "At a financial firm", "vietnamese": "Tại một công ty tài chính."},
                    {"key": "D", "text": "At a real estate agency", "vietnamese": "Tại một văn phòng bất động sản."}
                ],
                "correctAnswer": "B",
                "explanation": "Bác sĩ Fuentes nhắc đến 'dental cleaning patient' (bệnh nhân lấy cao răng/vệ sinh răng miệng)."
            },
            {
                "num": 48,
                "question": "What does the man tell the woman about?",
                "vietnameseQuestion": "Người đàn ông nói với người phụ nữ về điều gì?",
                "options": [
                    {"key": "A", "text": "A new product", "vietnamese": "Một sản phẩm mới."},
                    {"key": "B", "text": "A schedule change", "vietnamese": "Một sự thay đổi lịch trình."},
                    {"key": "C", "text": "A policy update", "vietnamese": "Một cập nhật chính sách."},
                    {"key": "D", "text": "A job candidate", "vietnamese": "Một ứng viên xin việc."}
                ],
                "correctAnswer": "D",
                "explanation": "Người đàn ông muốn giới thiệu một ứng viên cho vị trí lễ tân: 'recommend someone for the position' -> A job candidate."
            },
            {
                "num": 49,
                "question": "Why will the man most likely contact Kelly Graham?",
                "vietnameseQuestion": "Tại sao người đàn ông có khả năng cao sẽ liên lạc với Kelly Graham?",
                "options": [
                    {"key": "A", "text": "To plan an office celebration", "vietnamese": "Để lên kế hoạch liên hoan văn phòng."},
                    {"key": "B", "text": "To arrange a training session", "vietnamese": "Để sắp xếp một buổi đào tạo."},
                    {"key": "C", "text": "To request a document", "vietnamese": "Để yêu cầu một tài liệu (hồ sơ xin việc)."}
                ],
                "correctAnswer": "C",
                "explanation": "Bác sĩ yêu cầu bảo Kelly gửi CV: 'Could you tell Kelly to send me her résumé?' (hồ sơ xin việc là một loại tài liệu - a document)."
            }
        ],
        "vocabulary": [
            {"word": "dental cleaning", "meaning": "vệ sinh răng miệng, lấy cao răng", "partOfSpeech": "n"},
            {"word": "receptionist", "meaning": "nhân viên lễ tân", "partOfSpeech": "n"},
            {"word": "résumé", "meaning": "hồ sơ xin việc, CV", "partOfSpeech": "n"}
        ]
    },
    {
        "id": "part3-50-52",
        "part": 3,
        "partTitle": "Part 3: Đoạn hội thoại",
        "questionRange": "Câu 50 - 52",
        "title": "Part 3 - Câu 50-52: Khảo sát địa điểm quay video đào tạo cho nhà máy",
        "audioSrc": "/audio/cuts/test2/E26-T02-50-52.mp3",
        "transcript": [
            {"id": "p3-50-1", "speaker": "M1-Cn", "text": "Ms. Gao? I'm Hector, and this is my colleague Sergey. Thanks for meeting with us.", "vietnamese": "Cô Gao phải không? Tôi là Hector, và đây là đồng nghiệp của tôi Sergey. Cảm ơn cô đã gặp chúng tôi."},
            {"id": "p3-50-2", "speaker": "W-Br", "text": "It's a pleasure to meet you both. How can I help you?", "vietnamese": "Rất hân hạnh được gặp hai anh. Tôi có thể giúp gì cho hai anh?"},
            {"id": "p3-50-3", "speaker": "M2-Au", "text": "We're making some training videos for our client, FiveStar Industries.", "vietnamese": "Chúng tôi đang sản xuất một số video đào tạo cho khách hàng của mình, công ty FiveStar Industries."},
            {"id": "p3-50-4", "speaker": "M1-Cn", "text": "We found your advertisement in a trade publication. We need someone to choose appropriate filming sites at FiveStar's factories, and it said you have lots of experience scouting for industrial locations.", "vietnamese": "Chúng tôi thấy quảng cáo của cô trên một ấn phẩm chuyên ngành. Chúng tôi cần ai đó chọn các địa điểm quay phim thích hợp tại các nhà máy của FiveStar, và quảng cáo có nói cô có nhiều kinh nghiệm khảo sát các địa điểm công nghiệp."},
            {"id": "p3-50-5", "speaker": "W-Br", "text": "Sure. I'd want to start by touring their factories. Can you schedule a time for me to do that next week?", "vietnamese": "Chắc chắn rồi. Tôi muốn bắt đầu bằng việc đi tham quan các nhà máy của họ. Hai anh có thể sắp xếp thời gian để tôi thực hiện việc đó vào tuần tới không?"},
            {"id": "p3-50-6", "speaker": "M2-Au", "text": "Yes, I'll call them today to arrange it.", "vietnamese": "Vâng, hôm nay tôi sẽ gọi cho họ để sắp xếp việc này."}
        ],
        "questions": [
            {
                "num": 50,
                "question": "What industry do the men work in?",
                "vietnameseQuestion": "Hai người đàn ông làm việc trong ngành nào?",
                "options": [
                    {"key": "A", "text": "Travel", "vietnamese": "Du lịch."},
                    {"key": "B", "text": "Manufacturing", "vietnamese": "Sản xuất chế tạo."},
                    {"key": "C", "text": "Video production", "vietnamese": "Sản xuất video."},
                    {"key": "D", "text": "Construction", "vietnamese": "Xây dựng."}
                ],
                "correctAnswer": "C",
                "explanation": "Người đàn ông nói 'We're making some training videos for our client' (Chúng tôi đang làm video đào tạo)."
            },
            {
                "num": 51,
                "question": "How did the men learn about the woman?",
                "vietnameseQuestion": "Hai người đàn ông biết về người phụ nữ bằng cách nào?",
                "options": [
                    {"key": "A", "text": "From her Web site", "vietnamese": "Từ trang web của cô ấy."},
                    {"key": "B", "text": "From a trade publication", "vietnamese": "Từ một ấn phẩm/tạp chí chuyên ngành."},
                    {"key": "C", "text": "From a colleague", "vietnamese": "Từ một đồng nghiệp."},
                    {"key": "D", "text": "From a recruitment agency", "vietnamese": "Từ một công ty tuyển dụng."}
                ],
                "correctAnswer": "B",
                "explanation": "Người đàn ông nói 'We found your advertisement in a trade publication'."
            },
            {
                "num": 52,
                "question": "What does the woman want to do next week?",
                "vietnameseQuestion": "Người phụ nữ muốn làm gì vào tuần tới?",
                "options": [
                    {"key": "A", "text": "Attend an orientation session", "vietnamese": "Tham dự một buổi định hướng."},
                    {"key": "B", "text": "Visit some facilities", "vietnamese": "Đến thăm/khảo sát các cơ sở."},
                    {"key": "C", "text": "Interview some applicants", "vietnamese": "Phỏng vấn các ứng viên."},
                    {"key": "D", "text": "Finalize a contract", "vietnamese": "Hoàn tất hợp đồng."}
                ],
                "correctAnswer": "B",
                "explanation": "Người phụ nữ muốn bắt đầu bằng việc đi tham quan nhà máy: 'touring their factories' -> Visit some facilities."
            }
        ],
        "vocabulary": [
            {"word": "trade publication", "meaning": "ấn phẩm/tạp chí chuyên ngành", "partOfSpeech": "n"},
            {"word": "filming site", "meaning": "địa điểm quay phim", "partOfSpeech": "n"},
            {"word": "scout", "meaning": "tìm kiếm, khảo sát địa điểm", "partOfSpeech": "v"}
        ]
    },
    {
        "id": "part3-53-55",
        "part": 3,
        "partTitle": "Part 3: Đoạn hội thoại",
        "questionRange": "Câu 53 - 55",
        "title": "Part 3 - Câu 53-55: Cắt giảm ngân sách công tác tại công ty kỹ thuật",
        "audioSrc": "/audio/cuts/test2/E26-T02-53-55.mp3",
        "transcript": [
            {"id": "p3-53-1", "speaker": "M-Au", "text": "Our engineering firm has been asked to cut the corporate travel budget by twenty percent, but it won't be easy. The engineering consultants have to travel to meet with clients.", "vietnamese": "Công ty kỹ thuật của chúng ta đã được yêu cầu cắt giảm 20% ngân sách công tác của doanh nghiệp, nhưng điều đó sẽ không dễ dàng đâu. Các chuyên gia tư vấn kỹ thuật phải đi công tác để gặp gỡ khách hàng."},
            {"id": "p3-53-2", "speaker": "W-Br", "text": "Right, and they often travel on short notice. Flight arrangements made at the last minute are expensive, especially for nonstop flights. It would be cheaper if they took connecting flights.", "vietnamese": "Đúng thế, và họ thường phải đi công tác gấp mà không báo trước nhiều. Việc thu xếp chuyến bay vào phút chót rất tốn kém, đặc biệt là các chuyến bay thẳng. Sẽ rẻ hơn nếu họ đi các chuyến bay chuyển tiếp (quá cảnh)."},
            {"id": "p3-53-3", "speaker": "M-Au", "text": "Yes, but that can take a lot of time.", "vietnamese": "Đúng, nhưng việc đó có thể mất rất nhiều thời gian."},
            {"id": "p3-53-4", "speaker": "W-Br", "text": "True. Maybe we can make up for the cost of the flights by economizing on hotels. Let's look into that.", "vietnamese": "Đúng vậy. Có lẽ chúng ta có thể bù đắp chi phí máy bay bằng cách tiết kiệm tiền khách sạn. Chúng ta hãy tìm hiểu xem sao."}
        ],
        "questions": [
            {
                "num": 53,
                "question": "What type of business do the speakers work for?",
                "vietnameseQuestion": "Những người nói làm việc cho loại hình doanh nghiệp nào?",
                "options": [
                    {"key": "A", "text": "A law firm", "vietnamese": "Một công ty luật."},
                    {"key": "B", "text": "An advertising agency", "vietnamese": "Một công ty quảng cáo."},
                    {"key": "C", "text": "An engineering firm", "vietnamese": "Một công ty kỹ thuật."},
                    {"key": "D", "text": "An event-planning company", "vietnamese": "Một công ty tổ chức sự kiện."}
                ],
                "correctAnswer": "C",
                "explanation": "Người đàn ông mở đầu câu: 'Our engineering firm has been asked to cut the corporate travel budget'."
            },
            {
                "num": 54,
                "question": "Why does the man say, \"that can take a lot of time\"?",
                "vietnameseQuestion": "Tại sao người đàn ông lại nói: \"điều đó có thể mất rất nhiều thời gian\"?",
                "options": [
                    {"key": "A", "text": "To reject a suggestion", "vietnamese": "Để từ chối một lời đề xuất."},
                    {"key": "B", "text": "To express sympathy", "vietnamese": "Để bày tỏ sự đồng cảm."},
                    {"key": "C", "text": "To request additional pay", "vietnamese": "Để yêu cầu thêm thù lao."},
                    {"key": "D", "text": "To offer assistance", "vietnamese": "Để đề nghị giúp đỡ."}
                ],
                "correctAnswer": "A",
                "explanation": "Khi người phụ nữ đề xuất chọn chuyến bay quá cảnh (connecting flights) cho rẻ, người đàn ông phản bác lại rằng cách đó mất thời gian (To reject a suggestion)."
            },
            {
                "num": 55,
                "question": "What does the woman suggest?",
                "vietnameseQuestion": "Người phụ nữ đề xuất điều gì?",
                "options": [
                    {"key": "A", "text": "Contacting some former clients", "vietnamese": "Liên hệ với một số khách hàng cũ."},
                    {"key": "B", "text": "Making reservations early", "vietnamese": "Đặt chỗ sớm hơn."},
                    {"key": "C", "text": "Staying at affordable hotels", "vietnamese": "Ở các khách sạn có giá cả phải chăng."},
                    {"key": "D", "text": "Consulting with an expert", "vietnamese": "Tham vấn ý kiến chuyên gia."}
                ],
                "correctAnswer": "C",
                "explanation": "Người phụ nữ đề xuất 'economizing on hotels' (tiết kiệm chi phí khách sạn -> Staying at affordable hotels)."
            }
        ],
        "vocabulary": [
            {"word": "connecting flight", "meaning": "chuyến bay chuyển tiếp, quá cảnh", "partOfSpeech": "n"},
            {"word": "on short notice", "meaning": "gấp gáp, thông báo trong thời gian ngắn", "partOfSpeech": "phrase"},
            {"word": "economize", "meaning": "tiết kiệm, chi tiêu dè xẻn", "partOfSpeech": "v"}
        ]
    },
    {
        "id": "part3-56-58",
        "part": 3,
        "partTitle": "Part 3: Đoạn hội thoại",
        "questionRange": "Câu 56 - 58",
        "title": "Part 3 - Câu 56-58: Mời nhà thiết kế đồ trang sức hợp tác thiết kế đồng hồ thông minh",
        "audioSrc": "/audio/cuts/test2/E26-T02-56-58.mp3",
        "transcript": [
            {"id": "p3-56-1", "speaker": "M1-Cn", "text": "Thanks for meeting with us, Ms. Azuma. This is Scott Ajibade, one of our senior project managers.", "vietnamese": "Cảm ơn cô đã gặp chúng tôi, cô Azuma. Đây là Scott Ajibade, một trong những giám đốc dự án cấp cao của chúng tôi."},
            {"id": "p3-56-2", "speaker": "M2-Au", "text": "I admire your work, Ms. Azuma.", "vietnamese": "Tôi rất ngưỡng mộ các tác phẩm của cô, cô Azuma."},
            {"id": "p3-56-3", "speaker": "W-Br", "text": "Thank you. I was surprised by your invitation. I typically design jewelry, but your company's known for making computers and mobile phones.", "vietnamese": "Cảm ơn hai anh. Tôi đã khá bất ngờ trước lời mời của các anh. Tôi thường thiết kế đồ trang sức, trong khi công ty của các anh lại nổi tiếng về sản xuất máy tính và điện thoại di động."},
            {"id": "p3-56-4", "speaker": "M1-Cn", "text": "Scott's team is currently working on a smartwatch. But there's a lot of competition, as you know.", "vietnamese": "Đội ngũ của Scott hiện đang phát triển một chiếc đồng hồ thông minh. Nhưng như cô biết đấy, cạnh tranh là rất khốc liệt."},
            {"id": "p3-56-5", "speaker": "M2-Au", "text": "We're hoping you can create a fresh design that will help our product stand out.", "vietnamese": "Chúng tôi hy vọng cô có thể tạo ra một thiết kế mới mẻ giúp sản phẩm của chúng tôi nổi bật."},
            {"id": "p3-56-6", "speaker": "W-Br", "text": "Do you already have an idea of what the watch should look like, or are we starting from scratch?", "vietnamese": "Các anh đã có ý tưởng chiếc đồng hồ trông như thế nào chưa, hay chúng ta bắt đầu từ con số không?"},
            {"id": "p3-56-7", "speaker": "M2-Au", "text": "I have some preliminary sketches we can look at, but none of them seem quite right.", "vietnamese": "Tôi có một số bản phác thảo sơ bộ chúng ta có thể xem qua, nhưng dường như chưa có bản nào thực sự ưng ý cả."}
        ],
        "questions": [
            {
                "num": 56,
                "question": "What industry do the men most likely work in?",
                "vietnameseQuestion": "Hai người đàn ông có khả năng cao làm việc trong ngành nào?",
                "options": [
                    {"key": "A", "text": "Fashion", "vietnamese": "Thời trang."},
                    {"key": "B", "text": "Cosmetics", "vietnamese": "Mỹ phẩm."},
                    {"key": "C", "text": "Advertising", "vietnamese": "Quảng cáo."},
                    {"key": "D", "text": "Technology", "vietnamese": "Công nghệ."}
                ],
                "correctAnswer": "D",
                "explanation": "Cô Azuma nhắc đến công ty sản xuất máy tính và điện thoại ('computers and mobile phones', 'smartwatch') nên đây là ngành công nghệ (Technology)."
            },
            {
                "num": 57,
                "question": "Why did the men request a meeting?",
                "vietnameseQuestion": "Tại sao những người đàn ông lại yêu cầu một cuộc họp?",
                "options": [
                    {"key": "A", "text": "To negotiate a merger", "vietnamese": "Để đàm phán sáp nhập."},
                    {"key": "B", "text": "To ask for funding", "vietnamese": "Để xin vốn tài trợ."},
                    {"key": "C", "text": "To discuss a product design", "vietnamese": "Để thảo luận về thiết kế sản phẩm."},
                    {"key": "D", "text": "To suggest a marketing strategy", "vietnamese": "Để đề xuất chiến lược tiếp thị."}
                ],
                "correctAnswer": "C",
                "explanation": "Họ muốn cô ấy thiết kế kiểu dáng mới cho smartwatch: 'create a fresh design that will help our product stand out'."
            },
            {
                "num": 58,
                "question": "What will the speakers most likely do next?",
                "vietnameseQuestion": "Những người nói có khả năng cao sẽ làm gì tiếp theo?",
                "options": [
                    {"key": "A", "text": "Set a release date", "vietnamese": "Ấn định ngày phát hành."},
                    {"key": "B", "text": "Sign a contract", "vietnamese": "Ký kết hợp đồng."},
                    {"key": "C", "text": "Collect customer feedback", "vietnamese": "Thu thập phản hồi khách hàng."},
                    {"key": "D", "text": "Review some drawings", "vietnamese": "Xem qua các bản phác thảo/bản vẽ."}
                ],
                "correctAnswer": "D",
                "explanation": "Người đàn ông nói 'I have some preliminary sketches we can look at' (Tôi có vài bản phác thảo sơ bộ chúng ta có thể xem qua -> Review some drawings)."
            }
        ],
        "vocabulary": [
            {"word": "smartwatch", "meaning": "đồng hồ thông minh", "partOfSpeech": "n"},
            {"word": "stand out", "meaning": "nổi bật, tạo khác biệt", "partOfSpeech": "phr v"},
            {"word": "from scratch", "meaning": "từ đầu, từ con số không", "partOfSpeech": "phrase"},
            {"word": "preliminary sketch", "meaning": "bản phác thảo sơ bộ", "partOfSpeech": "n"}
        ]
    },
    {
        "id": "part3-59-61",
        "part": 3,
        "partTitle": "Part 3: Đoạn hội thoại",
        "questionRange": "Câu 59 - 61",
        "title": "Part 3 - Câu 59-61: Mua thảm trải sàn cho tiệm làm tóc",
        "audioSrc": "/audio/cuts/test2/E26-T02-59-61.mp3",
        "transcript": [
            {"id": "p3-59-1", "speaker": "W-Am", "text": "Hi. I'd like to purchase some new carpeting. It's for the waiting room at my hair salon.", "vietnamese": "Xin chào. Tôi muốn mua một số thảm trải sàn mới. Thảm này dùng cho phòng chờ tại tiệm làm tóc của tôi."},
            {"id": "p3-59-2", "speaker": "M-Cn", "text": "We have many different styles. Are you looking for something different?", "vietnamese": "Chúng tôi có nhiều mẫu mã khác nhau. Chị có đang tìm kiếm điều gì khác biệt không?"},
            {"id": "p3-59-3", "speaker": "W-Am", "text": "Well, we get a lot of customers walking through, and our current carpeting is a light color.", "vietnamese": "À, chúng tôi có rất nhiều khách hàng đi qua lại, và tấm thảm hiện tại của chúng tôi lại có màu sáng."},
            {"id": "p3-59-4", "speaker": "M-Cn", "text": "No matter what color you get, all our carpets are durable and can take high amounts of foot traffic. For businesses like yours, I recommend placing a protective mat near the door.", "vietnamese": "Bất kể chị chọn màu gì, tất cả thảm của chúng tôi đều rất bền và chịu được lượng người qua lại lớn. Đối với các doanh nghiệp như của chị, tôi khuyên nên đặt một tấm thảm bảo vệ gần cửa ra vào."},
            {"id": "p3-59-5", "speaker": "W-Am", "text": "That's a good idea.", "vietnamese": "Đó là một ý kiến hay."},
            {"id": "p3-59-6", "speaker": "M-Cn", "text": "Also, I offer free cleaning services for a year for all purchases.", "vietnamese": "Ngoài ra, tôi còn tặng kèm dịch vụ giặt thảm miễn phí trong vòng một năm cho mọi đơn mua."}
        ],
        "questions": [
            {
                "num": 59,
                "question": "What type of business does the woman work in?",
                "vietnameseQuestion": "Người phụ nữ làm việc trong loại hình kinh doanh nào?",
                "options": [
                    {"key": "A", "text": "A hair salon", "vietnamese": "Một tiệm làm tóc."},
                    {"key": "B", "text": "A real estate agency", "vietnamese": "Một văn phòng bất động sản."},
                    {"key": "C", "text": "An interior design firm", "vietnamese": "Một công ty thiết kế nội thất."},
                    {"key": "D", "text": "A car rental company", "vietnamese": "Một công ty cho thuê xe."}
                ],
                "correctAnswer": "A",
                "explanation": "Người phụ nữ nói thảm mua cho 'waiting room at my hair salon' (phòng chờ tiệm làm tóc)."
            },
            {
                "num": 60,
                "question": "Why does the woman say, \"our current carpeting is a light color\"?",
                "vietnameseQuestion": "Tại sao người phụ nữ lại nói: \"thảm hiện tại của chúng tôi có màu sáng\"?",
                "options": [
                    {"key": "A", "text": "To suggest an expense was not justified", "vietnamese": "Để ngụ ý một khoản chi là không hợp lý."},
                    {"key": "B", "text": "To express surprise about a decision", "vietnamese": "Để bày tỏ sự ngạc nhiên về một quyết định."},
                    {"key": "C", "text": "To describe a problem with an order", "vietnamese": "Để miêu tả một vấn đề với đơn đặt hàng."},
                    {"key": "D", "text": "To indicate the need to make a change", "vietnamese": "Để chỉ ra nhu cầu cần phải thay đổi."}
                ],
                "correctAnswer": "D",
                "explanation": "Khách đi lại nhiều mà thảm màu sáng dễ bám bẩn, nên bà ấy nói câu này để bày tỏ nhu cầu đổi sang loại thảm khác/màu khác phù hợp hơn."
            },
            {
                "num": 61,
                "question": "What does the man's business offer?",
                "vietnameseQuestion": "Cửa hàng của người đàn ông cung cấp ưu đãi gì?",
                "options": [
                    {"key": "A", "text": "A bulk discount", "vietnamese": "Chiết khấu khi mua số lượng lớn."},
                    {"key": "B", "text": "Same-day delivery", "vietnamese": "Giao hàng ngay trong ngày."},
                    {"key": "C", "text": "Free cleaning services", "vietnamese": "Dịch vụ vệ sinh/giặt miễn phí."},
                    {"key": "D", "text": "Monthly inspections", "vietnamese": "Kiểm tra định kỳ hàng tháng."}
                ],
                "correctAnswer": "C",
                "explanation": "Người đàn ông nói 'I offer free cleaning services for a year for all purchases' (miễn phí dịch vụ vệ sinh trong một năm)."
            }
        ],
        "vocabulary": [
            {"word": "carpeting", "meaning": "thảm trải sàn", "partOfSpeech": "n"},
            {"word": "durable", "meaning": "bền bỉ, lâu hỏng", "partOfSpeech": "adj"},
            {"word": "foot traffic", "meaning": "lượng người đi bộ qua lại", "partOfSpeech": "n"}
        ]
    },
    {
        "id": "part3-62-64",
        "part": 3,
        "imageUrl": "/images/intensive/test2/q62_64.png",
        "partTitle": "Part 3: Đoạn hội thoại",
        "questionRange": "Câu 62 - 64",
        "title": "Part 3 - Câu 62-64: Mua cà phê và tin tức về đồng nghiệp nghỉ hưu",
        "audioSrc": "/audio/cuts/test2/E26-T02-62-64.mp3",
        "transcript": [
            {"id": "p3-62-1", "speaker": "M-Au", "text": "I really need this coffee break. My morning meeting with my client was really challenging.", "vietnamese": "Tôi thực sự cần giờ giải lao uống cà phê này. Cuộc họp buổi sáng với khách hàng của tôi thực sự rất căng thẳng."},
            {"id": "p3-62-2", "speaker": "W-Br", "text": "What were you discussing?", "vietnamese": "Hai người đã thảo luận điều gì vậy?"},
            {"id": "p3-62-3", "speaker": "M-Au", "text": "The project schedule. They asked us to provide the prototype design to them three weeks earlier than originally planned.", "vietnamese": "Tiến độ dự án. Họ yêu cầu chúng ta cung cấp bản thiết kế mẫu thử nghiệm cho họ sớm hơn ba tuần so với kế hoạch ban đầu."},
            {"id": "p3-62-4", "speaker": "W-Br", "text": "Well, then today's cup is my treat. Which one would you like?", "vietnamese": "Ồ, vậy thì cốc cà phê hôm nay là tôi đãi. Anh muốn uống loại nào?"},
            {"id": "p3-62-5", "speaker": "M-Au", "text": "That's so nice of you! I'll go with the White Cloud Coffee. I like a little milk in mine.", "vietnamese": "Chị thật tốt bụng! Tôi sẽ chọn món cà phê White Cloud. Tôi thích có một chút sữa trong cà phê của mình."},
            {"id": "p3-62-6", "speaker": "W-Br", "text": "Good choice. So, I have some news to share with you. Did you hear about David?", "vietnamese": "Lựa chọn tuyệt đấy. À, tôi có vài tin tức muốn chia sẻ với anh. Anh đã nghe tin gì về David chưa?"},
            {"id": "p3-62-7", "speaker": "M-Au", "text": "No, what's going on?", "vietnamese": "Chưa, có chuyện gì thế?"},
            {"id": "p3-62-8", "speaker": "W-Br", "text": "Apparently, he's planning to retire next month.", "vietnamese": "Nghe nói anh ấy dự định nghỉ hưu vào tháng sau rồi."}
        ],
        "questions": [
            {
                "num": 62,
                "question": "What did the man's client request?",
                "vietnameseQuestion": "Khách hàng của người đàn ông đã yêu cầu điều gì?",
                "options": [
                    {"key": "A", "text": "A large shipment", "vietnamese": "Một lô hàng lớn."},
                    {"key": "B", "text": "A shortened timeline", "vietnamese": "Rút ngắn thời gian tiến độ."},
                    {"key": "C", "text": "A change in design", "vietnamese": "Một sự thay đổi trong thiết kế."},
                    {"key": "D", "text": "A more expensive material", "vietnamese": "Một vật liệu đắt tiền hơn."}
                ],
                "correctAnswer": "B",
                "explanation": "Khách hàng yêu cầu giao bản thiết kế mẫu sớm hơn 3 tuần ('three weeks earlier than originally planned' -> A shortened timeline)."
            },
            {
                "num": 63,
                "question": "Look at the graphic. How much does the man's coffee cost?",
                "vietnameseQuestion": "Nhìn vào hình ảnh. Cốc cà phê của người đàn ông có giá bao nhiêu?",
                "options": [
                    {"key": "A", "text": "$2.00", "vietnamese": "2.00 đô la."},
                    {"key": "B", "text": "$3.25", "vietnamese": "3.25 đô la."},
                    {"key": "C", "text": "$3.75", "vietnamese": "3.75 đô la."},
                    {"key": "D", "text": "$4.25", "vietnamese": "4.25 đô la."}
                ],
                "correctAnswer": "C",
                "explanation": "Người đàn ông chọn 'White Cloud Coffee'. Đối chiếu menu hình ảnh, White Cloud Coffee có giá là $3.75."
            },
            {
                "num": 64,
                "question": "What does the woman say about David?",
                "vietnameseQuestion": "Người phụ nữ nói gì về David?",
                "options": [
                    {"key": "A", "text": "He is retiring.", "vietnamese": "Anh ấy chuẩn bị nghỉ hưu."},
                    {"key": "B", "text": "He is organizing a party.", "vietnamese": "Anh ấy đang tổ chức một bữa tiệc."},
                    {"key": "C", "text": "He is on vacation.", "vietnamese": "Anh ấy đang đi nghỉ mát."},
                    {"key": "D", "text": "He accepted another position.", "vietnamese": "Anh ấy đã nhận một vị trí công tác khác."}
                ],
                "correctAnswer": "A",
                "explanation": "Người phụ nữ nói 'he's planning to retire next month' (anh ấy định nghỉ hưu vào tháng tới)."
            }
        ],
        "vocabulary": [
            {"word": "prototype", "meaning": "nguyên mẫu, sản phẩm mẫu thử", "partOfSpeech": "n"},
            {"word": "treat", "meaning": "sự thết đãi, bao chầu", "partOfSpeech": "n"},
            {"word": "retire", "meaning": "nghỉ hưu", "partOfSpeech": "v"}
        ]
    },
    {
        "id": "part3-65-67",
        "part": 3,
        "imageUrl": "/images/intensive/test2/q65_67.png",
        "partTitle": "Part 3: Đoạn hội thoại",
        "questionRange": "Câu 65 - 67",
        "title": "Part 3 - Câu 65-67: Đặt lịch lắp lưới chống muỗi cửa sổ",
        "audioSrc": "/audio/cuts/test2/E26-T02-65-67.mp3",
        "transcript": [
            {"id": "p3-65-1", "speaker": "M-Au", "text": "This is Bradley from Windows Galore. How can I help you?", "vietnamese": "Tôi là Bradley từ công ty Windows Galore đây ạ. Tôi có thể giúp gì cho chị?"},
            {"id": "p3-65-2", "speaker": "W-Am", "text": "Hello! I'd like to have screens added to my windows at home. I was wondering if you would be available to stop by and take a look. I live at 42 West Third Street, by the way.", "vietnamese": "Xin chào! Tôi muốn lắp thêm lưới chắn vào các cửa sổ ở nhà tôi. Không biết anh có thể ghé qua khảo sát xem được không. Nhân tiện, tôi sống ở số 42 phố West Third."},
            {"id": "p3-65-3", "speaker": "M-Au", "text": "OK—that's not far. Let me see. I could come any morning this week.", "vietnamese": "Được rồi—chỗ đó không xa. Để tôi xem nào. Tôi có thể đến vào bất kỳ buổi sáng nào trong tuần này."},
            {"id": "p3-65-4", "speaker": "W-Am", "text": "How about in the afternoon?", "vietnamese": "Thế còn vào buổi chiều thì sao?"},
            {"id": "p3-65-5", "speaker": "M-Au", "text": "Hmm. I could reschedule my Tuesday afternoon appointment. I'll check and get back to you—I have your number now. And your name is?", "vietnamese": "Hmm. Tôi có thể dời lại cuộc hẹn vào chiều thứ Ba của mình. Tôi sẽ kiểm tra lại và liên hệ lại với chị—tôi đã có số điện thoại của chị rồi. Tên của chị là gì ạ?"},
            {"id": "p3-65-6", "speaker": "W-Am", "text": "Hoffman—Claudia Hoffman. Thank you. Talk to you soon.", "vietnamese": "Hoffman—Claudia Hoffman. Cảm ơn anh. Nói chuyện với anh sau nhé."}
        ],
        "questions": [
            {
                "num": 65,
                "question": "What does the man most likely do?",
                "vietnameseQuestion": "Người đàn ông có khả năng cao làm công việc gì?",
                "options": [
                    {"key": "A", "text": "Install windows", "vietnamese": "Lắp đặt cửa sổ."},
                    {"key": "B", "text": "Repair roofs", "vietnamese": "Sửa chữa mái nhà."},
                    {"key": "C", "text": "Remove trees", "vietnamese": "Chặt tỉa cây xanh."},
                    {"key": "D", "text": "Plant gardens", "vietnamese": "Trồng vườn cây."}
                ],
                "correctAnswer": "A",
                "explanation": "Người đàn ông đến từ công ty 'Windows Galore' và người phụ nữ gọi nhờ lắp lưới vào cửa sổ nhà mình ('screens added to my windows') -> Install windows."
            },
            {
                "num": 66,
                "question": "What does the woman provide?",
                "vietnameseQuestion": "Người phụ nữ cung cấp thông tin gì?",
                "options": [
                    {"key": "A", "text": "A floor layout", "vietnamese": "Sơ đồ mặt bằng sàn."},
                    {"key": "B", "text": "An address", "vietnamese": "Một địa chỉ nhà."},
                    {"key": "C", "text": "A form of payment", "vietnamese": "Hình thức thanh toán."},
                    {"key": "D", "text": "Proof of insurance", "vietnamese": "Bằng chứng bảo hiểm."}
                ],
                "correctAnswer": "B",
                "explanation": "Người phụ nữ nói 'I live at 42 West Third Street' (cung cấp địa chỉ nhà của mình)."
            },
            {
                "num": 67,
                "question": "Look at the graphic. Which appointment will the man try to reschedule?",
                "vietnameseQuestion": "Nhìn vào hình ảnh. Người đàn ông sẽ cố gắng dời lại cuộc hẹn nào?",
                "options": [
                    {"key": "A", "text": "The inspector's visit", "vietnamese": "Chuyến thăm của thanh tra viên."},
                    {"key": "B", "text": "The bank loan meeting", "vietnamese": "Cuộc họp vay vốn ngân hàng."},
                    {"key": "C", "text": "The dental cleaning", "vietnamese": "Lấy cao răng tại nha khoa."},
                    {"key": "D", "text": "The café project", "vietnamese": "Dự án quán cà phê."}
                ],
                "correctAnswer": "A",
                "explanation": "Người đàn ông nói 'I could reschedule my Tuesday afternoon appointment'. Nhìn bảng lịch trình 'Tuesday (2-5 P.M.)', đó là 'Inspector's visit'."
            }
        ],
        "vocabulary": [
            {"word": "screen", "meaning": "lưới chắn cửa sổ, màng chắn", "partOfSpeech": "n"},
            {"word": "stop by", "meaning": "ghé qua, tạt qua", "partOfSpeech": "phr v"},
            {"word": "reschedule", "meaning": "dời lịch, sắp xếp lại lịch hẹn", "partOfSpeech": "v"}
        ]
    },
    {
        "id": "part3-68-70",
        "part": 3,
        "imageUrl": "/images/intensive/test2/q68_70.png",
        "partTitle": "Part 3: Đoạn hội thoại",
        "questionRange": "Câu 68 - 70",
        "title": "Part 3 - Câu 68-70: Chuẩn bị tham dự hội nghị robot và danh thiếp",
        "audioSrc": "/audio/cuts/test2/E26-T02-68-70.mp3",
        "transcript": [
            {"id": "p3-68-1", "speaker": "M-Au", "text": "Ms. Kwon, thank you for sending me to the upcoming robotics conference. I didn't expect an opportunity like this so soon after being hired here.", "vietnamese": "Chị Kwon, cảm ơn chị đã cử tôi tham dự hội nghị robot sắp tới. Tôi không ngờ mình lại có được cơ hội như thế này sớm như vậy ngay sau khi vừa được tuyển vào đây."},
            {"id": "p3-68-2", "speaker": "W-Br", "text": "It's important for you to be familiar with current robot designs. There are always new trends and technologies coming out, and I want you to stay ahead of developments in our industry.", "vietnamese": "Điều quan trọng là anh phải làm quen với các thiết kế robot hiện nay. Luôn có những xu hướng và công nghệ mới xuất hiện, và tôi muốn anh đón đầu các bước phát triển trong ngành của chúng ta."},
            {"id": "p3-68-3", "speaker": "M-Au", "text": "I agree. Plus, it'll give me the chance to introduce myself to potential clients.", "vietnamese": "Tôi đồng ý. Hơn nữa, nó sẽ cho tôi cơ hội tự giới thiệu bản thân với các khách hàng tiềm năng."},
            {"id": "p3-68-4", "speaker": "W-Br", "text": "Oh, about that: here's a handout I provide to all new hires. It includes some helpful tips—especially this one. Do you have your business cards yet?", "vietnamese": "Ồ, về việc đó: đây là tài liệu phát tay tôi dành cho tất cả nhân viên mới. Trong đó có một số mẹo hữu ích—đặc biệt là mẹo này. Anh đã có danh thiếp của mình chưa?"},
            {"id": "p3-68-5", "speaker": "M-Au", "text": "Hmm. I haven't received them, but I'll call the printer today for an update.", "vietnamese": "Hmm. Tôi vẫn chưa nhận được chúng, nhưng hôm nay tôi sẽ gọi cho nhà in để cập nhật tình hình."}
        ],
        "questions": [
            {
                "num": 68,
                "question": "What industry do the speakers most likely work in?",
                "vietnameseQuestion": "Những người nói có khả năng cao làm việc trong ngành nào?",
                "options": [
                    {"key": "A", "text": "Legal", "vietnamese": "Pháp lý."},
                    {"key": "B", "text": "Construction", "vietnamese": "Xây dựng."},
                    {"key": "C", "text": "Agriculture", "vietnamese": "Nông nghiệp."},
                    {"key": "D", "text": "Robotics", "vietnamese": "Chế tạo robot."}
                ],
                "correctAnswer": "D",
                "explanation": "Họ nhắc đến 'robotics conference' và 'current robot designs' nên ngành nghề là Robotics."
            },
            {
                "num": 69,
                "question": "Why does the woman want the man to attend a conference?",
                "vietnameseQuestion": "Tại sao người phụ nữ muốn người đàn ông tham dự hội nghị?",
                "options": [
                    {"key": "A", "text": "To learn more about the latest industry trends", "vietnamese": "Để tìm hiểu thêm về các xu hướng mới nhất trong ngành."},
                    {"key": "B", "text": "To accept a reward on behalf of the company", "vietnamese": "Để thay mặt công ty nhận một phần thưởng."},
                    {"key": "C", "text": "To host a panel discussion", "vietnamese": "Để chủ trì một phiên thảo luận bàn tròn."},
                    {"key": "D", "text": "To screen job candidates", "vietnamese": "Để sàng lọc các ứng viên xin việc."}
                ],
                "correctAnswer": "A",
                "explanation": "Người phụ nữ nói 'It's important for you to be familiar with current robot designs... stay ahead of developments' -> To learn more about the latest industry trends."
            },
            {
                "num": 70,
                "question": "Look at the graphic. Which tip does the woman point out?",
                "vietnameseQuestion": "Nhìn vào hình ảnh. Người phụ nữ chỉ ra mẹo nào?",
                "options": [
                    {"key": "A", "text": "Tip 1", "vietnamese": "Mẹo 1."},
                    {"key": "B", "text": "Tip 2", "vietnamese": "Mẹo 2."},
                    {"key": "C", "text": "Tip 3", "vietnamese": "Mẹo 3."},
                    {"key": "D", "text": "Tip 4", "vietnamese": "Mẹo 4."}
                ],
                "correctAnswer": "D",
                "explanation": "Người phụ nữ hỏi 'Do you have your business cards yet?'. Đối chiếu hình ảnh, Tip 4 là 'Provide a business card'."
            }
        ],
        "vocabulary": [
            {"word": "robotics", "meaning": "ngành chế tạo robot", "partOfSpeech": "n"},
            {"word": "handout", "meaning": "tài liệu phát tay", "partOfSpeech": "n"},
            {"word": "business card", "meaning": "danh thiếp, card visit", "partOfSpeech": "n"}
        ]
    }
]
