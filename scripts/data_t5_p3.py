import json

part3_items = [
    {
        "id": "part3-32-34",
        "part": 3,
        "partTitle": "Part 3: Hội thoại",
        "questionRange": "Câu 32-34",
        "title": "Part 3 - Câu 32-34: Nhờ in tài liệu báo cáo phân tích thị trường",
        "audioSrc": "/audio/cuts/test5/E26-T05-32-34.mp3",
        "transcript": [
            {
                "id": "p3-32-1",
                "speaker": "Woman",
                "text": "Hello, Tariq. Could you do me a favor?",
                "vietnamese": "Xin chào, Tariq. Anh có thể giúp tôi một việc được không?"
            },
            {
                "id": "p3-32-2",
                "speaker": "Man",
                "text": "Sure—what is it?",
                "vietnamese": "Chắc chắn rồi—việc gì vậy?"
            },
            {
                "id": "p3-32-3",
                "speaker": "Woman",
                "text": "I'm meeting with the Gerhard Group at ten A.M. for the product pitch, and I need copies of your market analysis report made for each representative.",
                "vietnamese": "Tôi sẽ có cuộc họp với Tập đoàn Gerhard lúc 10 giờ sáng để thuyết trình chào hàng sản phẩm, và tôi cần bản sao báo cáo phân tích thị trường của anh cho từng đại diện."
            },
            {
                "id": "p3-32-4",
                "speaker": "Man",
                "text": "Aren't you at the office right now?",
                "vietnamese": "Chẳng phải chị đang ở văn phòng rồi sao?"
            },
            {
                "id": "p3-32-5",
                "speaker": "Woman",
                "text": "Actually, I came in early today, but I couldn't get the copy machine to work.",
                "vietnamese": "Thực ra hôm nay tôi đến sớm, nhưng tôi không thể khởi động máy photocopy hoạt động được."
            },
            {
                "id": "p3-32-6",
                "speaker": "Man",
                "text": "Seriously? We bought it last month!",
                "vietnamese": "Thật sao? Chúng ta mới mua nó tháng trước mà!"
            },
            {
                "id": "p3-32-7",
                "speaker": "Woman",
                "text": "I'm afraid so.",
                "vietnamese": "Tôi e là đúng như vậy."
            },
            {
                "id": "p3-32-8",
                "speaker": "Man",
                "text": "I just got off the train. I'll stop at Business Express on McAllister Street and take care of it on my way to the office.",
                "vietnamese": "Tôi vừa mới bước xuống tàu. Tôi sẽ ghé qua tiệm Business Express trên đường McAllister và in ấn giúp chị trên đường tới văn phòng."
            }
        ],
        "questions": [
            {
                "num": 32,
                "question": "What does the woman ask the man to do for her?",
                "vietnameseQuestion": "Người phụ nữ nhờ người đàn ông làm gì cho mình?",
                "options": [
                    { "key": "A", "text": "Greet a client in the lobby", "vietnamese": "Đón khách hàng ở tiền sảnh" },
                    { "key": "B", "text": "Present a product pitch", "vietnamese": "Thuyết trình giới thiệu sản phẩm" },
                    { "key": "C", "text": "Organize some binders", "vietnamese": "Sắp xếp một số bìa còng tài liệu" },
                    { "key": "D", "text": "Make some photocopies", "vietnamese": "In ấn / sao chụp một số tài liệu" }
                ],
                "correctAnswer": "D",
                "explanation": "Người phụ nữ nhờ: 'I need copies of your market analysis report made for each representative' (tôi cần in các bản sao báo cáo phân tích thị trường cho từng đại diện = Make some photocopies).",
                "paraphraseGroup": [
                    { "original": "need copies of your report made", "paraphrase": "Make some photocopies" }
                ]
            },
            {
                "num": 33,
                "question": "What does the man say about some equipment?",
                "vietnameseQuestion": "Người đàn ông nói gì về một thiết bị?",
                "options": [
                    { "key": "A", "text": "It is operating smoothly.", "vietnamese": "Nó đang vận hành êm ả." },
                    { "key": "B", "text": "It was purchased recently.", "vietnamese": "Nó mới được mua gần đây." },
                    { "key": "C", "text": "It needs to be plugged in.", "vietnamese": "Nó cần phải được cắm điện." },
                    { "key": "D", "text": "It has not yet been updated.", "vietnamese": "Nó vẫn chưa được cập nhật." }
                ],
                "correctAnswer": "B",
                "explanation": "Khi nghe người phụ nữ nói máy photocopy hỏng, người đàn ông ngạc nhiên nói: 'Seriously? We bought it last month!' (Thật sao? Chúng ta mới mua nó tháng trước mà = It was purchased recently).",
                "paraphraseGroup": [
                    { "original": "bought it last month", "paraphrase": "purchased recently" }
                ]
            },
            {
                "num": 34,
                "question": "Where is the man?",
                "vietnameseQuestion": "Người đàn ông đang ở đâu?",
                "options": [
                    { "key": "A", "text": "At the office", "vietnamese": "Tại văn phòng" },
                    { "key": "B", "text": "At a train station", "vietnamese": "Tại một nhà ga xe lửa / ga tàu" },
                    { "key": "C", "text": "At a store", "vietnamese": "Tại một cửa hàng" },
                    { "key": "D", "text": "At a client's headquarters", "vietnamese": "Tại trụ sở của khách hàng" }
                ],
                "correctAnswer": "B",
                "explanation": "Người đàn ông nói: 'I just got off the train. I'll stop at Business Express... on my way to the office' (Tôi vừa xuống tàu -> đang ở ga xe lửa At a train station).",
                "paraphraseGroup": [
                    { "original": "just got off the train", "paraphrase": "At a train station" }
                ]
            }
        ],
        "vocabulary": [
            { "word": "pitch", "type": "n", "phonetic": "/pɪtʃ/", "meaning": "bài thuyết trình chào hàng, quảng bá sản phẩm", "example": "She delivered an impressive sales pitch to prospective investors." },
            { "word": "market analysis", "type": "n", "phonetic": "/ˈmɑːkɪt əˈnæləsɪs/", "meaning": "phân tích nghiên cứu thị trường", "example": "The comprehensive market analysis revealed strong growth potential." },
            { "word": "get off", "type": "phrasal verb", "phonetic": "/ɡet ɒf/", "meaning": "xuống xe, xuống tàu", "example": "Remember to get off at the third stop." }
        ]
    },
    {
        "id": "part3-35-37",
        "part": 3,
        "partTitle": "Part 3: Hội thoại",
        "questionRange": "Câu 35-37",
        "title": "Part 3 - Câu 35-37: Đặt dịch vụ chuyển văn phòng",
        "audioSrc": "/audio/cuts/test5/E26-T05-35-37.mp3",
        "transcript": [
            {
                "id": "p3-35-1",
                "speaker": "Woman",
                "text": "Delton Van Lines. How can I help you?",
                "vietnamese": "Dịch vụ vận tải Delton Van Lines xin nghe. Tôi có thể giúp gì cho bạn?"
            },
            {
                "id": "p3-35-2",
                "speaker": "Man",
                "text": "Hello. I'm the office manager at Woodsom Insurance Company. We are relocating to a new office in June and would like to book your services.",
                "vietnamese": "Xin chào. Tôi là trưởng phòng hành chính tại Công ty Bảo hiểm Woodsom. Chúng tôi sẽ chuyển đến một văn phòng mới vào tháng 6 và muốn đặt dịch vụ của bạn."
            },
            {
                "id": "p3-35-3",
                "speaker": "Woman",
                "text": "Certainly! But before we reserve a date for the move, we'll need to come to your current location and estimate the cost of moving your furniture and equipment.",
                "vietnamese": "Chắc chắn rồi! Nhưng trước khi ấn định ngày chuyển nhà, chúng tôi sẽ cần đến địa điểm hiện tại của bạn để khảo sát và ước tính chi phí vận chuyển đồ đạc và trang thiết bị."
            },
            {
                "id": "p3-35-4",
                "speaker": "Man",
                "text": "We have a staff meeting tomorrow morning, so no one's available to show you around then. But tomorrow afternoon works.",
                "vietnamese": "Chúng tôi có cuộc họp toàn thể nhân viên vào sáng mai, nên không có ai rảnh để dẫn bạn đi xem. Nhưng chiều mai thì thuận tiện."
            },
            {
                "id": "p3-35-5",
                "speaker": "Woman",
                "text": "Perfect! Our representative can be there at two. I'll just need to know where you're located.",
                "vietnamese": "Tuyệt vời! Đại diện của chúng tôi có thể có mặt lúc 2 giờ chiều. Tôi chỉ cần biết địa chỉ văn phòng của bạn."
            }
        ],
        "questions": [
            {
                "num": 35,
                "question": "Where does the woman most likely work?",
                "vietnameseQuestion": "Người phụ nữ có khả năng nhất làm việc ở đâu?",
                "options": [
                    { "key": "A", "text": "At a furniture store", "vietnamese": "Tại cửa hàng đồ nội thất" },
                    { "key": "B", "text": "At a moving company", "vietnamese": "Tại một công ty chuyển nhà / văn phòng" },
                    { "key": "C", "text": "At a post office", "vietnamese": "Tại bưu điện" },
                    { "key": "D", "text": "At an office supply store", "vietnamese": "Tại cửa hàng văn phòng phẩm" }
                ],
                "correctAnswer": "B",
                "explanation": "Người phụ nữ đại diện cho 'Delton Van Lines' và thảo luận về dịch vụ 'reserve a date for the move... moving your furniture and equipment' -> Công ty vận chuyển nhà/văn phòng (At a moving company).",
                "paraphraseGroup": [
                    { "original": "Van Lines / reserve a date for the move / moving furniture", "paraphrase": "At a moving company" }
                ]
            },
            {
                "num": 36,
                "question": "Why will a representative visit the man's company tomorrow?",
                "vietnameseQuestion": "Tại sao một đại diện sẽ đến thăm công ty người đàn ông vào ngày mai?",
                "options": [
                    { "key": "A", "text": "To provide an estimate", "vietnamese": "Để cung cấp một bản dự toán / báo giá" },
                    { "key": "B", "text": "To sign a contract", "vietnamese": "Để ký hợp đồng" },
                    { "key": "C", "text": "To give a presentation", "vietnamese": "Để thuyết trình" },
                    { "key": "D", "text": "To place an order", "vietnamese": "Để đặt hàng" }
                ],
                "correctAnswer": "A",
                "explanation": "Người phụ nữ giải thích: 'we'll need to come to your current location and estimate the cost of moving...' (cần đến địa điểm hiện tại để ước tính chi phí = To provide an estimate).",
                "paraphraseGroup": [
                    { "original": "estimate the cost", "paraphrase": "provide an estimate" }
                ]
            },
            {
                "num": 37,
                "question": "What information will the man most likely provide next?",
                "vietnameseQuestion": "Người đàn ông có khả năng nhất sẽ cung cấp thông tin gì tiếp theo?",
                "options": [
                    { "key": "A", "text": "A company's operating hours", "vietnamese": "Giờ hoạt động của công ty" },
                    { "key": "B", "text": "An account number", "vietnamese": "Số tài khoản" },
                    { "key": "C", "text": "A street address", "vietnamese": "Địa chỉ đường phố" },
                    { "key": "D", "text": "A telephone number", "vietnamese": "Số điện thoại" }
                ],
                "correctAnswer": "C",
                "explanation": "Người phụ nữ nói ở cuối: 'I'll just need to know where you're located' (Tôi chỉ cần biết địa chỉ nơi bạn ở), do đó người đàn ông sẽ cung cấp địa chỉ (A street address).",
                "paraphraseGroup": [
                    { "original": "where you're located", "paraphrase": "A street address" }
                ]
            }
        ],
        "vocabulary": [
            { "word": "relocate", "type": "v", "phonetic": "/ˌriːləʊˈkeɪt/", "meaning": "di dời địa điểm, chuyển văn phòng/nhà", "example": "The firm decided to relocate its headquarters to Denver." },
            { "word": "estimate", "type": "v, n", "phonetic": "/ˈestɪmət/", "meaning": "ước tính, bản dự toán chi phí", "example": "Request a written cost estimate before hiring a moving crew." },
            { "word": "show around", "type": "phrasal verb", "phonetic": "/ʃəʊ əˈraʊnd/", "meaning": "dẫn đi tham quan xung quanh", "example": "The manager will show the new clients around the facility." }
        ]
    },
    {
        "id": "part3-38-40",
        "part": 3,
        "partTitle": "Part 3: Hội thoại",
        "questionRange": "Câu 38-40",
        "title": "Part 3 - Câu 38-40: Xác nhận ngày bắt đầu công việc nghiên cứu khoa học",
        "audioSrc": "/audio/cuts/test5/E26-T05-38-40.mp3",
        "transcript": [
            {
                "id": "p3-38-1",
                "speaker": "Man",
                "text": "Doctor MacMillan, I'm calling from the human resources department. I'm in charge of your onboarding, and I wanted to confirm your start date. It's the first of April, right?",
                "vietnamese": "Chào Tiến sĩ MacMillan, tôi gọi từ phòng nhân sự. Tôi phụ trách quá trình tiếp nhận nhân viên mới của bà, và tôi muốn xác nhận ngày bắt đầu làm việc. Là ngày 1 tháng 4 đúng không?"
            },
            {
                "id": "p3-38-2",
                "speaker": "Woman",
                "text": "Right. That's when I'll be joining the scientific research team. And as you probably know, I'm still finishing up a research paper with my current institution.",
                "vietnamese": "Đúng vậy. Đó là lúc tôi sẽ gia nhập nhóm nghiên cứu khoa học. Và có lẽ ông đã biết, tôi vẫn đang hoàn thành nốt một bài báo nghiên cứu với viện nghiên cứu hiện tại của mình."
            },
            {
                "id": "p3-38-3",
                "speaker": "Man",
                "text": "Yes, the director did tell me that. Your contract includes time for you to finish up your previous commitments. I can send it to you this afternoon.",
                "vietnamese": "Vâng, giám đốc đã thông báo với tôi điều đó. Hợp đồng của bà bao gồm thời gian để bà hoàn thành các cam kết công việc trước đó. Tôi có thể gửi hợp đồng cho bà vào chiều nay."
            }
        ],
        "questions": [
            {
                "num": 38,
                "question": "What department does the man work in?",
                "vietnameseQuestion": "Người đàn ông làm việc ở phòng ban nào?",
                "options": [
                    { "key": "A", "text": "Legal", "vietnamese": "Phòng Pháp chế" },
                    { "key": "B", "text": "Accounting", "vietnamese": "Phòng Kế toán" },
                    { "key": "C", "text": "Human resources", "vietnamese": "Phòng Nhân sự" },
                    { "key": "D", "text": "Public relations", "vietnamese": "Phòng Quan hệ công chúng" }
                ],
                "correctAnswer": "C",
                "explanation": "Người đàn ông tự giới thiệu: 'I'm calling from the human resources department' (Tôi gọi từ phòng nhân sự).",
                "paraphraseGroup": [
                    { "original": "human resources department", "paraphrase": "Human resources" }
                ]
            },
            {
                "num": 39,
                "question": "What kind of work has the woman been hired to do?",
                "vietnameseQuestion": "Người phụ nữ được tuyển dụng để làm công việc gì?",
                "options": [
                    { "key": "A", "text": "Scientific research", "vietnamese": "Nghiên cứu khoa học" },
                    { "key": "B", "text": "Book editing", "vietnamese": "Biên tập sách" },
                    { "key": "C", "text": "Office management", "vietnamese": "Quản trị văn phòng" },
                    { "key": "D", "text": "Legal advising", "vietnamese": "Tư vấn pháp lý" }
                ],
                "correctAnswer": "A",
                "explanation": "Người phụ nữ nói: 'That's when I'll be joining the scientific research team' (Đó là lúc tôi gia nhập nhóm nghiên cứu khoa học).",
                "paraphraseGroup": [
                    { "original": "joining the scientific research team", "paraphrase": "Scientific research" }
                ]
            },
            {
                "num": 40,
                "question": "What will the man send the woman this afternoon?",
                "vietnameseQuestion": "Người đàn ông sẽ gửi cho người phụ nữ thứ gì vào chiều nay?",
                "options": [
                    { "key": "A", "text": "A password", "vietnamese": "Mật khẩu" },
                    { "key": "B", "text": "A travel reimbursement", "vietnamese": "Khoản hoàn trả công tác phí" },
                    { "key": "C", "text": "A security badge", "vietnamese": "Thẻ an ninh ra vào" },
                    { "key": "D", "text": "A contract", "vietnamese": "Một bản hợp đồng" }
                ],
                "correctAnswer": "D",
                "explanation": "Người đàn ông nói: 'Your contract includes time for you... I can send it to you this afternoon' (Hợp đồng của bà bao gồm... Tôi có thể gửi nó cho bà chiều nay = A contract).",
                "paraphraseGroup": [
                    { "original": "Your contract... send it to you", "paraphrase": "A contract" }
                ]
            }
        ],
        "vocabulary": [
            { "word": "onboarding", "type": "n", "phonetic": "/ˈɒnbɔːdɪŋ/", "meaning": "quá trình tiếp nhận và hướng dẫn nhân viên mới", "example": "HR organized a week-long onboarding program for new recruits." },
            { "word": "commitment", "type": "n", "phonetic": "/kəˈmɪtmənt/", "meaning": "cam kết, nghĩa vụ phải thực hiện", "example": "She honored her professional commitments before switching companies." },
            { "word": "institution", "type": "n", "phonetic": "/ˌɪnstɪˈtjuːʃn/", "meaning": "viện nghiên cứu, tổ chức học thuật", "example": "The research institution secured grant funding for marine biology." }
        ]
    },
    {
        "id": "part3-41-43",
        "part": 3,
        "partTitle": "Part 3: Hội thoại",
        "questionRange": "Câu 41-43",
        "title": "Part 3 - Câu 41-43: Xử lý lượng đơn đặt hàng kẹo sô cô la tăng cao",
        "audioSrc": "/audio/cuts/test5/E26-T05-41-43.mp3",
        "transcript": [
            {
                "id": "p3-41-1",
                "speaker": "Woman 1",
                "text": "We've been getting a lot of online orders for our chocolate candies lately. I'm glad to see the increase in orders, but I'm worried about meeting the demands. Are we going to be able to fill and ship all these orders?",
                "vietnamese": "Gần đây chúng ta nhận được rất nhiều đơn đặt hàng kẹo sô cô la trực tuyến. Tôi rất vui khi thấy lượng đơn hàng tăng lên, nhưng tôi lo lắng về việc đáp ứng kịp nhu cầu. Liệu chúng ta có thể đóng gói và vận chuyển tất cả các đơn hàng này không?"
            },
            {
                "id": "p3-41-2",
                "speaker": "Man",
                "text": "I think we should hire a few more people to work in the mornings. They could help with packaging and shipping. What do you think, Rebecca?",
                "vietnamese": "Tôi nghĩ chúng ta nên tuyển thêm vài người làm việc vào các buổi sáng. Họ có thể phụ giúp đóng gói và giao hàng. Chị nghĩ sao, Rebecca?"
            },
            {
                "id": "p3-41-3",
                "speaker": "Woman 2",
                "text": "I agree. I also think that we should ask if our delivery service can pick up our packages twice a day instead of just once a day—maybe every morning and afternoon. I'll call them today.",
                "vietnamese": "Tôi đồng ý. Tôi cũng nghĩ rằng chúng ta nên hỏi xem đơn vị vận chuyển có thể đến lấy các kiện hàng hai lần một ngày thay vì chỉ một lần như hiện nay—có thể là mỗi sáng và chiều. Hôm nay tôi sẽ gọi điện cho họ."
            }
        ],
        "questions": [
            {
                "num": 41,
                "question": "What recently happened at the business?",
                "vietnameseQuestion": "Điều gì gần đây đã xảy ra tại doanh nghiệp?",
                "options": [
                    { "key": "A", "text": "Its monthly rent increased.", "vietnamese": "Tiền thuê hàng tháng tăng lên." },
                    { "key": "B", "text": "It received many orders.", "vietnamese": "Doanh nghiệp nhận được rất nhiều đơn đặt hàng." },
                    { "key": "C", "text": "It was featured in a magazine.", "vietnamese": "Doanh nghiệp được đưa tin trên tạp chí." },
                    { "key": "D", "text": "It passed an inspection.", "vietnamese": "Doanh nghiệp đã vượt qua đợt thanh tra." }
                ],
                "correctAnswer": "B",
                "explanation": "Người phụ nữ 1 nói: 'We've been getting a lot of online orders for our chocolate candies lately' (Gần đây chúng ta nhận được rất nhiều đơn đặt hàng kẹo sô cô la = It received many orders).",
                "paraphraseGroup": [
                    { "original": "getting a lot of online orders lately", "paraphrase": "received many orders" }
                ]
            },
            {
                "num": 42,
                "question": "According to the man, what will help the business?",
                "vietnameseQuestion": "Theo người đàn ông, điều gì sẽ giúp ích cho doanh nghiệp?",
                "options": [
                    { "key": "A", "text": "Purchasing updated equipment", "vietnamese": "Mua sắm trang thiết bị cải tiến mới" },
                    { "key": "B", "text": "Offering different products", "vietnamese": "Cung cấp các sản phẩm khác biệt" },
                    { "key": "C", "text": "Extending store hours", "vietnamese": "Kéo dài giờ mở cửa cửa hàng" },
                    { "key": "D", "text": "Hiring more employees", "vietnamese": "Tuyển dụng thêm nhân viên" }
                ],
                "correctAnswer": "D",
                "explanation": "Người đàn ông đề xuất: 'I think we should hire a few more people to work in the mornings. They could help with packaging and shipping' (tuyển thêm nhân viên = Hiring more employees).",
                "paraphraseGroup": [
                    { "original": "hire a few more people", "paraphrase": "Hiring more employees" }
                ]
            },
            {
                "num": 43,
                "question": "Who does Rebecca say she will call today?",
                "vietnameseQuestion": "Rebecca cho biết cô ấy sẽ gọi cho ai hôm nay?",
                "options": [
                    { "key": "A", "text": "A packaging designer", "vietnamese": "Một nhà thiết kế bao bì" },
                    { "key": "B", "text": "An Internet service provider", "vietnamese": "Một nhà cung cấp mạng Internet" },
                    { "key": "C", "text": "A delivery service", "vietnamese": "Một dịch vụ vận chuyển giao nhận" },
                    { "key": "D", "text": "A bank", "vietnamese": "Một ngân hàng" }
                ],
                "correctAnswer": "C",
                "explanation": "Người phụ nữ thứ 2 (Rebecca) nói: 'ask if our delivery service can pick up our packages twice a day... I'll call them today' (gọi cho đơn vị vận chuyển A delivery service).",
                "paraphraseGroup": [
                    { "original": "our delivery service... I'll call them", "paraphrase": "A delivery service" }
                ]
            }
        ],
        "vocabulary": [
            { "word": "fill an order", "type": "phrase", "phonetic": "/fɪl ən ˈɔːdər/", "meaning": "chuẩn bị và thực hiện đơn hàng", "example": "The warehouse staff worked overtime to fill all holiday orders." },
            { "word": "meet demand", "type": "phrase", "phonetic": "/miːt dɪˈmɑːnd/", "meaning": "đáp ứng nhu cầu của thị trường", "example": "Production capacity was doubled to meet growing demand." },
            { "word": "pick up", "type": "phrasal verb", "phonetic": "/pɪk ʌp/", "meaning": "thu gom, đến lấy hàng", "example": "The courier will pick up parcel deliveries every afternoon." }
        ]
    },
    {
        "id": "part3-44-46",
        "part": 3,
        "partTitle": "Part 3: Hội thoại",
        "questionRange": "Câu 44-46",
        "title": "Part 3 - Câu 44-46: Thiếu nguyên liệu da sản xuất ghế sofa",
        "audioSrc": "/audio/cuts/test5/E26-T05-44-46.mp3",
        "transcript": [
            {
                "id": "p3-44-1",
                "speaker": "Woman",
                "text": "I spoke to the Mancini brothers. They just shipped our leather order—the hazelnut color. But it'll take a while to arrive. We don't have enough in stock to complete the ten sofa orders that we've received the past few days.",
                "vietnamese": "Tôi đã nói chuyện với anh em nhà Mancini. Họ vừa mới gửi đơn hàng da của chúng ta—màu hạt phỉ. Nhưng sẽ mất một khoảng thời gian hàng mới tới. Chúng ta không có đủ tồn kho để hoàn thành mười đơn đặt hàng ghế sofa nhận được trong vài ngày qua."
            },
            {
                "id": "p3-44-2",
                "speaker": "Man",
                "text": "What about the local leather supplier that brought us some samples last week? We could ask them whether they have enough for ten sofas.",
                "vietnamese": "Thế còn nhà cung ứng da ở địa phương từng mang đến cho chúng ta một số mẫu vào tuần trước thì sao? Chúng ta có thể hỏi họ xem họ có đủ da cho mười chiếc ghế sofa không."
            },
            {
                "id": "p3-44-3",
                "speaker": "Woman",
                "text": "To be honest, I wasn't very impressed with the quality of their leather. I'd rather wait. I'll reach out to the customers about the delay.",
                "vietnamese": "Nói thật lòng, tôi không mấy ấn tượng với chất lượng da của họ. Tôi thà chờ đợi còn hơn. Tôi sẽ liên hệ với khách hàng để thông báo về sự chậm trễ này."
            }
        ],
        "questions": [
            {
                "num": 44,
                "question": "What do the speakers manufacture?",
                "vietnameseQuestion": "Những người nói sản xuất mặt hàng gì?",
                "options": [
                    { "key": "A", "text": "Shoes", "vietnamese": "Giày dép" },
                    { "key": "B", "text": "Luggage", "vietnamese": "Hành lý / vali" },
                    { "key": "C", "text": "Furniture", "vietnamese": "Đồ nội thất" },
                    { "key": "D", "text": "Sports equipment", "vietnamese": "Dụng cụ thể thao" }
                ],
                "correctAnswer": "C",
                "explanation": "Người phụ nữ nhắc đến: 'complete the ten sofa orders that we've received'. Ghế sofa là đồ nội thất (Furniture).",
                "paraphraseGroup": [
                    { "original": "ten sofa orders", "paraphrase": "Furniture" }
                ]
            },
            {
                "num": 45,
                "question": "Who does the man suggest contacting?",
                "vietnameseQuestion": "Người đàn ông gợi ý liên hệ với ai?",
                "options": [
                    { "key": "A", "text": "A leather supplier", "vietnamese": "Một nhà cung cấp da" },
                    { "key": "B", "text": "A delivery driver", "vietnamese": "Một tài xế giao hàng" },
                    { "key": "C", "text": "An interior designer", "vietnamese": "Một nhà thiết kế nội thất" },
                    { "key": "D", "text": "A machine technician", "vietnamese": "Một kỹ thuật viên máy móc" }
                ],
                "correctAnswer": "A",
                "explanation": "Người đàn ông đề xuất: 'What about the local leather supplier that brought us some samples last week?' (nhà cung cấp da địa phương = A leather supplier).",
                "paraphraseGroup": [
                    { "original": "local leather supplier", "paraphrase": "A leather supplier" }
                ]
            },
            {
                "num": 46,
                "question": "Why is the woman opposed to making a change?",
                "vietnameseQuestion": "Tại sao người phụ nữ lại phản đối việc thay đổi nhà cung cấp?",
                "options": [
                    { "key": "A", "text": "She has contracts with clients.", "vietnamese": "Cô ấy có hợp đồng ràng buộc với khách hàng." },
                    { "key": "B", "text": "She is concerned about quality.", "vietnamese": "Cô ấy lo ngại về chất lượng." },
                    { "key": "C", "text": "Overhead expenses will increase.", "vietnamese": "Chi phí cố định chung sẽ tăng lên." },
                    { "key": "D", "text": "A license will expire soon.", "vietnamese": "Giấy phép kinh doanh sắp hết hạn." }
                ],
                "correctAnswer": "B",
                "explanation": "Người phụ nữ từ chối: 'To be honest, I wasn't very impressed with the quality of their leather' (lo ngại chất lượng da không tốt = concerned about quality).",
                "paraphraseGroup": [
                    { "original": "wasn't very impressed with the quality", "paraphrase": "concerned about quality" }
                ]
            }
        ],
        "vocabulary": [
            { "word": "leather", "type": "n", "phonetic": "/ˈleðər/", "meaning": "chất liệu da", "example": "Genuine leather sofas require regular conditioning." },
            { "word": "in stock", "type": "phrase", "phonetic": "/ɪn stɒk/", "meaning": "còn hàng trong kho", "example": "We have several modern fabric couches currently in stock." },
            { "word": "reach out to", "type": "phrase", "phonetic": "/riːtʃ aʊt tuː/", "meaning": "chủ động liên hệ với ai đó", "example": "The support team reached out to clients regarding the shipping delay." }
        ]
    },
    {
        "id": "part3-47-49",
        "part": 3,
        "partTitle": "Part 3: Hội thoại",
        "questionRange": "Câu 47-49",
        "title": "Part 3 - Câu 47-49: Đổi mới mẫu mã và màu sắc quần jean bò",
        "audioSrc": "/audio/cuts/test5/E26-T05-47-49.mp3",
        "transcript": [
            {
                "id": "p3-47-1",
                "speaker": "Woman",
                "text": "Thanks for coming in, Marcos. I just got the results from the consulting firm we hired. They have some ideas about how we can increase sales of our denim blue jeans.",
                "vietnamese": "Cảm ơn anh đã đến, Marcos. Tôi vừa nhận được kết quả từ công ty tư vấn mà chúng ta đã thuê. Họ có một số ý tưởng về cách chúng ta có thể tăng doanh số bán quần jean xanh denim."
            },
            {
                "id": "p3-47-2",
                "speaker": "Man",
                "text": "I hope so. What does our target audience want?",
                "vietnamese": "Tôi hy vọng vậy. Khách hàng mục tiêu của chúng ta mong muốn điều gì?"
            },
            {
                "id": "p3-47-3",
                "speaker": "Woman",
                "text": "Well, they think it's time we updated our brand with new styles or colors.",
                "vietnamese": "Họ cho rằng đã đến lúc chúng ta cần làm mới thương hiệu của mình với những kiểu dáng hoặc màu sắc mới."
            },
            {
                "id": "p3-47-4",
                "speaker": "Man",
                "text": "You know, it takes a lot of effort to develop and launch new styles.",
                "vietnamese": "Chị biết đấy, phát triển và tung ra các kiểu dáng mới tốn rất nhiều công sức."
            },
            {
                "id": "p3-47-5",
                "speaker": "Woman",
                "text": "Yes. But, if we don't do it, another company will.",
                "vietnamese": "Đúng thế. Nhưng nếu chúng ta không làm, công ty khác sẽ làm."
            },
            {
                "id": "p3-47-6",
                "speaker": "Man",
                "text": "You're right. I'll ask Junko to come up with some new designs for us to consider.",
                "vietnamese": "Chị nói đúng. Tôi sẽ nhờ Junko nghĩ ra một số mẫu thiết kế mới để chúng ta cùng xem xét."
            }
        ],
        "questions": [
            {
                "num": 47,
                "question": "What are the speakers meeting to discuss?",
                "vietnameseQuestion": "Những người nói đang họp để thảo luận về điều gì?",
                "options": [
                    { "key": "A", "text": "Safety regulations", "vietnamese": "Quy định an toàn" },
                    { "key": "B", "text": "Equipment upgrades", "vietnamese": "Nâng cấp thiết bị" },
                    { "key": "C", "text": "Budget cuts", "vietnamese": "Cắt giảm ngân sách" },
                    { "key": "D", "text": "Consultant recommendations", "vietnamese": "Các khuyến nghị của bên tư vấn" }
                ],
                "correctAnswer": "D",
                "explanation": "Người phụ nữ mở đầu: 'I just got the results from the consulting firm we hired. They have some ideas...' (kết quả và ý kiến đóng góp từ công ty tư vấn = Consultant recommendations).",
                "paraphraseGroup": [
                    { "original": "results from the consulting firm... ideas", "paraphrase": "Consultant recommendations" }
                ]
            },
            {
                "num": 48,
                "question": "What does the man mean when he says, \"it takes a lot of effort to develop and launch new styles\"?",
                "vietnameseQuestion": "Người đàn ông có ý gì khi nói \"phát triển và tung ra các kiểu dáng mới tốn rất nhiều công sức\"?",
                "options": [
                    { "key": "A", "text": "He is excited about a challenge.", "vietnamese": "Anh ấy hào hứng với một thử thách." },
                    { "key": "B", "text": "He is surprised at a competitor's choices.", "vietnamese": "Anh ấy bất ngờ trước lựa chọn của đối thủ cạnh tranh." },
                    { "key": "C", "text": "He is doubtful about a suggestion.", "vietnamese": "Anh ấy hoài nghi / ngần ngại trước một đề xuất." },
                    { "key": "D", "text": "He thinks more employees should be hired.", "vietnamese": "Anh ấy nghĩ rằng nên thuê thêm nhân viên." }
                ],
                "correctAnswer": "C",
                "explanation": "Trước ý kiến của bên tư vấn là cần cập nhật kiểu dáng và màu sắc mới, người đàn ông ngần ngại chỉ ra khó khăn và công sức bỏ ra, thể hiện sự nghi ngại trước đề xuất này (doubtful about a suggestion).",
                "paraphraseGroup": [
                    { "original": "takes a lot of effort to develop and launch new styles", "paraphrase": "doubtful about a suggestion" }
                ]
            },
            {
                "num": 49,
                "question": "Who most likely is Junko?",
                "vietnameseQuestion": "Junko có khả năng nhất là ai?",
                "options": [
                    { "key": "A", "text": "A focus group leader", "vietnamese": "Một trưởng nhóm phỏng vấn tập trung" },
                    { "key": "B", "text": "A clothing designer", "vietnamese": "Một nhà thiết kế thời trang / trang phục" },
                    { "key": "C", "text": "A sales associate", "vietnamese": "Một nhân viên bán hàng" },
                    { "key": "D", "text": "An accountant", "vietnamese": "Một nhân viên kế toán" }
                ],
                "correctAnswer": "B",
                "explanation": "Người đàn ông nói: 'I'll ask Junko to come up with some new designs for us to consider' (Junko sẽ lên các thiết kế mới cho quần jeans -> nhà thiết kế thời trang A clothing designer).",
                "paraphraseGroup": [
                    { "original": "ask Junko to come up with some new designs", "paraphrase": "A clothing designer" }
                ]
            }
        ],
        "vocabulary": [
            { "word": "denim", "type": "n", "phonetic": "/ˈdenɪm/", "meaning": "vải bò, vải bông dày dệt chéo", "example": "Denim jackets remain a classic fashion staple." },
            { "word": "target audience", "type": "n", "phonetic": "/ˌtɑːɡɪt ˈɔːdiəns/", "meaning": "đối tượng khách hàng mục tiêu", "example": "The marketing campaign caters to a youthful target audience." },
            { "word": "come up with", "type": "phrasal verb", "phonetic": "/kʌm ʌp wɪð/", "meaning": "nghĩ ra, đưa ra ý tưởng", "example": "Our design team came up with innovative concepts for the next line." }
        ]
    },
    {
        "id": "part3-50-52",
        "part": 3,
        "partTitle": "Part 3: Hội thoại",
        "questionRange": "Câu 50-52",
        "title": "Part 3 - Câu 50-52: Báo cáo thảo luận ngân sách trại hè quần vợt",
        "audioSrc": "/audio/cuts/test5/E26-T05-50-52.mp3",
        "transcript": [
            {
                "id": "p3-50-1",
                "speaker": "Man",
                "text": "Hi, Gabriela. Thanks for agreeing to give me the highlights of the budget discussion from the monthly meeting. I'm back from vacation and still catching up.",
                "vietnamese": "Chào Gabriela. Cảm ơn chị đã đồng ý điểm lại cho tôi những ý chính trong thảo luận ngân sách từ cuộc họp hàng tháng. Tôi vừa đi nghỉ mát về và vẫn đang bắt kịp tiến độ công việc."
            },
            {
                "id": "p3-50-2",
                "speaker": "Woman",
                "text": "Sure. Here's a copy of the report. Everyone on our organization's board at Tennis United agreed to the fee increase for the tennis camp for young players.",
                "vietnamese": "Tất nhiên rồi. Đây là bản sao báo cáo. Tất cả các thành viên ban quản trị tổ chức Tennis United của chúng ta đã đồng ý tăng học phí cho trại hè quần vợt dành cho các tay vợt trẻ."
            },
            {
                "id": "p3-50-3",
                "speaker": "Man",
                "text": "Good. And why do we have T-shirts listed as an expense item?",
                "vietnamese": "Tốt quá. Thế còn tại sao chúng ta lại có áo phông được liệt kê là một khoản chi phí vậy?"
            },
            {
                "id": "p3-50-4",
                "speaker": "Woman",
                "text": "Although the next tournament's in the fall, the T-shirts were ordered very early. That way we received half off the price, since the supplier wanted to get rid of his summer inventory.",
                "vietnamese": "Mặc dù giải đấu tiếp theo diễn ra vào mùa thu, áo phông đã được đặt hàng từ rất sớm. Bằng cách đó, chúng ta được giảm một nửa giá, vì nhà cung cấp muốn thanh lý hết hàng tồn kho mùa hè của họ."
            }
        ],
        "questions": [
            {
                "num": 50,
                "question": "Why did the man miss a meeting?",
                "vietnameseQuestion": "Tại sao người đàn ông lại vắng mặt trong cuộc họp?",
                "options": [
                    { "key": "A", "text": "He was stuck in traffic.", "vietnamese": "Anh ấy bị kẹt xe." },
                    { "key": "B", "text": "He had a medical appointment.", "vietnamese": "Anh ấy có cuộc hẹn khám bệnh." },
                    { "key": "C", "text": "He was speaking with a client.", "vietnamese": "Anh ấy đang trao đổi với một khách hàng." },
                    { "key": "D", "text": "He was away on vacation.", "vietnamese": "Anh ấy đi nghỉ mát / nghỉ phép." }
                ],
                "correctAnswer": "D",
                "explanation": "Người đàn ông giải thích lý do: 'I'm back from vacation and still catching up' (Tôi vừa đi nghỉ mát về = He was away on vacation).",
                "paraphraseGroup": [
                    { "original": "back from vacation", "paraphrase": "away on vacation" }
                ]
            },
            {
                "num": 51,
                "question": "Which sport does the speakers' organization promote?",
                "vietnameseQuestion": "Tổ chức của những người nói thúc đẩy môn thể thao nào?",
                "options": [
                    { "key": "A", "text": "Tennis", "vietnamese": "Quần vợt (Tennis)" },
                    { "key": "B", "text": "Volleyball", "vietnamese": "Bóng chuyền" },
                    { "key": "C", "text": "Swimming", "vietnamese": "Bơi lội" },
                    { "key": "D", "text": "Gymnastics", "vietnamese": "Thể dục dụng cụ" }
                ],
                "correctAnswer": "A",
                "explanation": "Người phụ nữ nhắc đến: 'our organization's board at Tennis United agreed to the fee increase for the tennis camp for young players' -> Thúc đẩy môn Quần vợt (Tennis).",
                "paraphraseGroup": [
                    { "original": "Tennis United / tennis camp", "paraphrase": "Tennis" }
                ]
            },
            {
                "num": 52,
                "question": "Why were T-shirts ordered early?",
                "vietnameseQuestion": "Tại sao áo thun lại được đặt mua sớm?",
                "options": [
                    { "key": "A", "text": "To avoid potential delays", "vietnamese": "Để tránh việc chậm trễ tiềm ẩn" },
                    { "key": "B", "text": "To get free delivery", "vietnamese": "Để được giao hàng miễn phí" },
                    { "key": "C", "text": "To receive a discount", "vietnamese": "Để nhận được mức giảm giá" },
                    { "key": "D", "text": "To meet heavy demand", "vietnamese": "Để đáp ứng nhu cầu lớn" }
                ],
                "correctAnswer": "C",
                "explanation": "Người phụ nữ giải thích: 'the T-shirts were ordered very early. That way we received half off the price' (giảm một nửa giá = To receive a discount).",
                "paraphraseGroup": [
                    { "original": "received half off the price", "paraphrase": "receive a discount" }
                ]
            }
        ],
        "vocabulary": [
            { "word": "catch up", "type": "phrasal verb", "phonetic": "/kætʃ ʌp/", "meaning": "bắt kịp tiến độ (công việc sau khi vắng mặt)", "example": "He spent Monday morning catching up on pending emails." },
            { "word": "inventory", "type": "n", "phonetic": "/ˈɪnvəntri/", "meaning": "hàng tồn kho", "example": "Retailers offer deep discounts to clear out surplus seasonal inventory." },
            { "word": "get rid of", "type": "phrase", "phonetic": "/ɡet rɪd əv/", "meaning": "thanh lý, bỏ đi, loại bỏ", "example": "The shop ran a flash sale to get rid of discontinued stock." }
        ]
    },
    {
        "id": "part3-53-55",
        "part": 3,
        "partTitle": "Part 3: Hội thoại",
        "questionRange": "Câu 53-55",
        "title": "Part 3 - Câu 53-55: Thua thầu dự án cải tạo cầu Morrisville",
        "audioSrc": "/audio/cuts/test5/E26-T05-53-55.mp3",
        "transcript": [
            {
                "id": "p3-53-1",
                "speaker": "Woman",
                "text": "The first item on today's meeting agenda is our bid to renovate the Morrisville Bridge. Do we have an update on that yet?",
                "vietnamese": "Mục đầu tiên trong chương trình nghị sự cuộc họp hôm nay là việc đấu thầu cải tạo cầu Morrisville của chúng ta. Chúng ta đã có thông tin cập nhật nào về việc đó chưa?"
            },
            {
                "id": "p3-53-2",
                "speaker": "Man 1",
                "text": "Yes—unfortunately we didn't get the contract.",
                "vietnamese": "Vâng—thật không may là chúng ta đã không giành được hợp đồng đó."
            },
            {
                "id": "p3-53-3",
                "speaker": "Man 2",
                "text": "Yes, the only explanation given was that another construction company submitted a proposal with a shorter timeline.",
                "vietnamese": "Vâng, lý do duy nhất được đưa ra là một công ty xây dựng khác đã nộp một đề xuất với tiến độ thời gian ngắn hơn."
            },
            {
                "id": "p3-53-4",
                "speaker": "Woman",
                "text": "So, what do we know about this competitor? Have they worked on other local projects?",
                "vietnamese": "Vậy chúng ta biết gì về đối thủ cạnh tranh này? Họ đã từng thi công các dự án địa phương nào khác chưa?"
            },
            {
                "id": "p3-53-5",
                "speaker": "Man 1",
                "text": "The only thing I heard was their name—CDQ Construction Company.",
                "vietnamese": "Điều duy nhất tôi nghe được là tên của họ—Công ty Xây dựng CDQ."
            },
            {
                "id": "p3-53-6",
                "speaker": "Woman",
                "text": "Well, I'd like to know more about them. Can you two do some research before our next meeting?",
                "vietnamese": "Chà, tôi muốn biết thêm nhiều điều về họ. Hai anh có thể tìm hiểu nghiên cứu một số thông tin trước cuộc họp tiếp theo của chúng ta được không?"
            }
        ],
        "questions": [
            {
                "num": 53,
                "question": "What industry do the speakers most likely work in?",
                "vietnameseQuestion": "Những người nói có khả năng nhất làm việc trong ngành nào?",
                "options": [
                    { "key": "A", "text": "Energy", "vietnamese": "Năng lượng" },
                    { "key": "B", "text": "Finance", "vietnamese": "Tài chính" },
                    { "key": "C", "text": "Construction", "vietnamese": "Xây dựng" },
                    { "key": "D", "text": "Manufacturing", "vietnamese": "Sản xuất" }
                ],
                "correctAnswer": "C",
                "explanation": "Cuộc thảo luận nói về: 'bid to renovate the Morrisville Bridge', 'contract', 'another construction company' -> Ngành xây dựng (Construction).",
                "paraphraseGroup": [
                    { "original": "renovate the Morrisville Bridge / construction company", "paraphrase": "Construction" }
                ]
            },
            {
                "num": 54,
                "question": "What is the reason a company did not get a contract?",
                "vietnameseQuestion": "Lý do công ty không trúng hợp đồng là gì?",
                "options": [
                    { "key": "A", "text": "Some costs were too high.", "vietnamese": "Một số chi phí quá cao." },
                    { "key": "B", "text": "A facility failed an inspection.", "vietnamese": "Cơ sở vật chất không vượt qua đợt kiểm tra." },
                    { "key": "C", "text": "Some paperwork was submitted late.", "vietnamese": "Một số giấy tờ bị nộp trễ hạn." },
                    { "key": "D", "text": "A competitor can complete a project faster.", "vietnamese": "Đối thủ cạnh tranh có thể hoàn thành dự án nhanh hơn." }
                ],
                "correctAnswer": "D",
                "explanation": "Người đàn ông 2 giải thích lý do: 'another construction company submitted a proposal with a shorter timeline' (đề xuất thời gian tiến độ ngắn hơn = complete a project faster).",
                "paraphraseGroup": [
                    { "original": "proposal with a shorter timeline", "paraphrase": "competitor can complete a project faster" }
                ]
            },
            {
                "num": 55,
                "question": "What does the woman ask the men to do?",
                "vietnameseQuestion": "Người phụ nữ yêu cầu hai người đàn ông làm gì?",
                "options": [
                    { "key": "A", "text": "Visit a facility", "vietnamese": "Đi thăm một cơ sở" },
                    { "key": "B", "text": "Conduct some research", "vietnamese": "Tiến hành một số nghiên cứu / tìm hiểu" },
                    { "key": "C", "text": "Rewrite a proposal", "vietnamese": "Viết lại bản đề xuất" },
                    { "key": "D", "text": "Contact some vendors", "vietnamese": "Liên hệ với một số nhà cung cấp" }
                ],
                "correctAnswer": "B",
                "explanation": "Người phụ nữ yêu cầu: 'Can you two do some research before our next meeting?' (tìm hiểu thông tin = Conduct some research).",
                "paraphraseGroup": [
                    { "original": "do some research", "paraphrase": "Conduct some research" }
                ]
            }
        ],
        "vocabulary": [
            { "word": "bid", "type": "n, v", "phonetic": "/bɪd/", "meaning": "sự bỏ thầu, chào giá dự thầu", "example": "The firm submitted a competitive bid to construct the bridge." },
            { "word": "renovate", "type": "v", "phonetic": "/ˈrenəveɪt/", "meaning": "cải tạo, tu bổ, nâng cấp", "example": "Plans are underway to renovate the city's historic suspension bridge." },
            { "word": "timeline", "type": "n", "phonetic": "/ˈtaɪmlaɪn/", "meaning": "mốc thời gian, tiến độ thời gian thực hiện", "example": "The client approved the shortened construction timeline." }
        ]
    },
    {
        "id": "part3-56-58",
        "part": 3,
        "partTitle": "Part 3: Hội thoại",
        "questionRange": "Câu 56-58",
        "title": "Part 3 - Câu 56-58: Mở rộng phòng nghỉ nhân viên sau khảo sát nội bộ",
        "audioSrc": "/audio/cuts/test5/E26-T05-56-58.mp3",
        "transcript": [
            {
                "id": "p3-56-1",
                "speaker": "Woman",
                "text": "Did you see that the results of last month's employee survey have been compiled? All the staff feedback is available.",
                "vietnamese": "Anh đã thấy kết quả khảo sát nhân viên tháng trước đã được tổng hợp lại chưa? Toàn bộ ý kiến phản hồi của nhân viên đều đã có sẵn rồi đấy."
            },
            {
                "id": "p3-56-2",
                "speaker": "Man",
                "text": "Yes, and I just finished reviewing the comments.",
                "vietnamese": "Vâng, và tôi cũng vừa mới xem xong các bình luận nhận xét."
            },
            {
                "id": "p3-56-3",
                "speaker": "Woman",
                "text": "You know, I noticed one recurring complaint. The size of the break room is too small. Perhaps we could enlarge the break room by having the wall taken down between it and the meeting room next door.",
                "vietnamese": "Anh biết đấy, tôi nhận thấy có một lời phàn nàn lặp đi lặp lại. Diện tích phòng nghỉ giải lao quá nhỏ. Có lẽ chúng ta có thể mở rộng phòng nghỉ bằng cách đập bỏ bức tường ngăn giữa nó và phòng họp bên cạnh."
            },
            {
                "id": "p3-56-4",
                "speaker": "Man",
                "text": "Well, we do have money available in the budget.",
                "vietnamese": "Chà, chúng ta thực sự có sẵn ngân sách cho việc này."
            },
            {
                "id": "p3-56-5",
                "speaker": "Woman",
                "text": "Then could you reach out to your contact at the construction company?",
                "vietnamese": "Vậy thì anh có thể liên hệ với người quen của anh bên công ty xây dựng được không?"
            },
            {
                "id": "p3-56-6",
                "speaker": "Man",
                "text": "I can't do it this afternoon, since I need to see a dentist, but I will definitely make the call.",
                "vietnamese": "Chiều nay tôi không gọi được vì tôi có lịch hẹn khám nha sĩ, nhưng chắc chắn tôi sẽ gọi."
            }
        ],
        "questions": [
            {
                "num": 56,
                "question": "What did the company do last month?",
                "vietnameseQuestion": "Công ty đã làm gì vào tháng trước?",
                "options": [
                    { "key": "A", "text": "It opened a second location.", "vietnamese": "Công ty đã mở địa điểm thứ hai." },
                    { "key": "B", "text": "It merged with another business.", "vietnamese": "Công ty đã sáp nhập với doanh nghiệp khác." },
                    { "key": "C", "text": "It launched a new product.", "vietnamese": "Công ty đã tung ra một sản phẩm mới." },
                    { "key": "D", "text": "It conducted an employee survey.", "vietnamese": "Công ty đã tiến hành một cuộc khảo sát nhân viên." }
                ],
                "correctAnswer": "D",
                "explanation": "Người phụ nữ mở đầu: 'Did you see that the results of last month's employee survey have been compiled?' (khảo sát nhân viên tháng trước = It conducted an employee survey).",
                "paraphraseGroup": [
                    { "original": "last month's employee survey", "paraphrase": "conducted an employee survey" }
                ]
            },
            {
                "num": 57,
                "question": "Why does the man say, \"we do have money available in the budget\"?",
                "vietnameseQuestion": "Tại sao người đàn ông lại nói \"chúng ta thực sự có sẵn ngân sách\"?",
                "options": [
                    { "key": "A", "text": "To request another budget analysis", "vietnamese": "Để yêu cầu một bản phân tích ngân sách khác" },
                    { "key": "B", "text": "To suggest hiring additional employees", "vietnamese": "Để đề xuất thuê thêm nhân viên" },
                    { "key": "C", "text": "To agree with a proposed renovation", "vietnamese": "Để đồng tình với đề xuất cải tạo sửa chữa" },
                    { "key": "D", "text": "To recommend an increase in advertising", "vietnamese": "Để đề xuất tăng cường quảng cáo" }
                ],
                "correctAnswer": "C",
                "explanation": "Khi người phụ nữ gợi ý đập tường mở rộng phòng nghỉ giải lao, người đàn ông nói câu trên để khẳng định có đủ tiền thực hiện, tức là đồng ý với đề xuất cải tạo (agree with a proposed renovation).",
                "paraphraseGroup": [
                    { "original": "enlarge the break room... we do have money available", "paraphrase": "agree with a proposed renovation" }
                ]
            },
            {
                "num": 58,
                "question": "What does the man say he has to do this afternoon?",
                "vietnameseQuestion": "Người đàn ông cho biết anh ấy phải làm gì vào chiều nay?",
                "options": [
                    { "key": "A", "text": "Have his car repaired", "vietnamese": "Đem xe đi sửa" },
                    { "key": "B", "text": "Give a presentation", "vietnamese": "Thuyết trình báo cáo" },
                    { "key": "C", "text": "Go to a dentist appointment", "vietnamese": "Đi khám nha sĩ theo lịch hẹn" },
                    { "key": "D", "text": "Attend a reception", "vietnamese": "Tham dự một buổi chiêu đãi" }
                ],
                "correctAnswer": "C",
                "explanation": "Người đàn ông nói: 'I can't do it this afternoon, since I need to see a dentist' (đi khám nha sĩ = Go to a dentist appointment).",
                "paraphraseGroup": [
                    { "original": "need to see a dentist", "paraphrase": "Go to a dentist appointment" }
                ]
            }
        ],
        "vocabulary": [
            { "word": "compile", "type": "v", "phonetic": "/kəmˈpaɪl/", "meaning": "biên soạn, thu thập và tổng hợp dữ liệu", "example": "The HR coordinator compiled the survey responses into a detailed report." },
            { "word": "recurring", "type": "adj", "phonetic": "/rɪˈkɜːrɪŋ/", "meaning": "lặp đi lặp lại nhiều lần", "example": "Staff raised a recurring concern regarding parking space availability." },
            { "word": "enlarge", "type": "v", "phonetic": "/ɪnˈlɑːdʒ/", "meaning": "mở rộng diện tích/kích thước", "example": "The cafeteria was enlarged to seat additional employees." }
        ]
    },
    {
        "id": "part3-59-61",
        "part": 3,
        "partTitle": "Part 3: Hội thoại",
        "questionRange": "Câu 59-61",
        "title": "Part 3 - Câu 59-61: Thương lượng giá thu mua phế liệu kim loại đồng thau",
        "audioSrc": "/audio/cuts/test5/E26-T05-59-61.mp3",
        "transcript": [
            {
                "id": "p3-59-1",
                "speaker": "Woman",
                "text": "Thanks for calling Hang's Metal Recycling Company. How can I help you?",
                "vietnamese": "Cảm ơn đã gọi cho Công ty Tái chế Kim loại Hang. Tôi có thể giúp gì cho bạn?"
            },
            {
                "id": "p3-59-2",
                "speaker": "Man",
                "text": "Hi. I'm with Shannak Construction Company. We've got a lot of brass metal scrap from a recent remodeling job. Are you currently buying metal scrap?",
                "vietnamese": "Xin chào. Tôi làm việc tại Công ty Xây dựng Shannak. Chúng tôi có rất nhiều phế liệu kim loại đồng thau từ một công trình cải tạo gần đây. Hiện tại công ty bạn có thu mua phế liệu kim loại không?"
            },
            {
                "id": "p3-59-3",
                "speaker": "Woman",
                "text": "Yes, we are. We currently pay two dollars a pound.",
                "vietnamese": "Vâng, chúng tôi có mua. Hiện tại chúng tôi trả 2 đô la một pound."
            },
            {
                "id": "p3-59-4",
                "speaker": "Man",
                "text": "Oh, there's another recycling center that pays two dollars and twenty-five cents a pound. Would you be willing to match their price?",
                "vietnamese": "Ồ, có một trung tâm tái chế khác trả tới 2 đô la 25 xu một pound. Bạn có sẵn lòng khớp theo mức giá đó của họ không?"
            },
            {
                "id": "p3-59-5",
                "speaker": "Woman",
                "text": "Yes, we have a price-match guarantee.",
                "vietnamese": "Được chứ, chúng tôi có chính sách cam kết khớp giá."
            },
            {
                "id": "p3-59-6",
                "speaker": "Man",
                "text": "Great. I'll bring the metal to you this afternoon, then.",
                "vietnamese": "Tuyệt vời. Vậy chiều nay tôi sẽ chở số kim loại đó đến chỗ bạn."
            }
        ],
        "questions": [
            {
                "num": 59,
                "question": "Where does the woman work?",
                "vietnameseQuestion": "Người phụ nữ làm việc ở đâu?",
                "options": [
                    { "key": "A", "text": "At a recycling company", "vietnamese": "Tại một công ty tái chế" },
                    { "key": "B", "text": "At an appliance store", "vietnamese": "Tại cửa hàng đồ điện gia dụng" },
                    { "key": "C", "text": "At a manufacturing company", "vietnamese": "Tại một công ty sản xuất" },
                    { "key": "D", "text": "At an architectural firm", "vietnamese": "Tại một công ty kiến trúc" }
                ],
                "correctAnswer": "A",
                "explanation": "Người phụ nữ bắt đầu: 'Thanks for calling Hang's Metal Recycling Company' (Công ty tái chế kim loại Hang = At a recycling company).",
                "paraphraseGroup": [
                    { "original": "Metal Recycling Company", "paraphrase": "At a recycling company" }
                ]
            },
            {
                "num": 60,
                "question": "What does the man ask the woman to do?",
                "vietnameseQuestion": "Người đàn ông yêu cầu người phụ nữ làm gì?",
                "options": [
                    { "key": "A", "text": "Revise a contract", "vietnamese": "Sửa đổi hợp đồng" },
                    { "key": "B", "text": "Match a competitor's offer", "vietnamese": "Khớp giá theo mức giá của đối thủ cạnh tranh" },
                    { "key": "C", "text": "Refund a delivery fee", "vietnamese": "Hoàn lại phí giao hàng" },
                    { "key": "D", "text": "Sign in at a security desk", "vietnamese": "Ký tên đăng ký tại bàn bảo vệ" }
                ],
                "correctAnswer": "B",
                "explanation": "Người đàn ông nói: 'there's another recycling center that pays two dollars and twenty-five cents... Would you be willing to match their price?' (khớp giá cạnh tranh = Match a competitor's offer).",
                "paraphraseGroup": [
                    { "original": "match their price", "paraphrase": "Match a competitor's offer" }
                ]
            },
            {
                "num": 61,
                "question": "What does the man say he will do this afternoon?",
                "vietnameseQuestion": "Người đàn ông cho biết anh ấy sẽ làm gì vào chiều nay?",
                "options": [
                    { "key": "A", "text": "Conduct an inspection", "vietnamese": "Tiến hành một cuộc thanh tra" },
                    { "key": "B", "text": "Sign a document", "vietnamese": "Ký một văn bản tài liệu" },
                    { "key": "C", "text": "Deliver some materials", "vietnamese": "Giao / mang một số vật liệu đến" },
                    { "key": "D", "text": "Update a Web site", "vietnamese": "Cập nhật một trang web" }
                ],
                "correctAnswer": "C",
                "explanation": "Người đàn ông nói: 'I'll bring the metal to you this afternoon, then' (mang kim loại đến chỗ bạn chiều nay = Deliver some materials).",
                "paraphraseGroup": [
                    { "original": "bring the metal to you this afternoon", "paraphrase": "Deliver some materials" }
                ]
            }
        ],
        "vocabulary": [
            { "word": "scrap", "type": "n", "phonetic": "/skræp/", "meaning": "phế liệu, sắt vụn kim loại thừa", "example": "Leftover copper scrap was sold to the local recycler." },
            { "word": "brass", "type": "n", "phonetic": "/brɑːs/", "meaning": "đồng thau", "example": "The historic building features ornate polished brass door handles." },
            { "word": "price-match guarantee", "type": "phrase", "phonetic": "/praɪs mætʃ ˌɡærənˈtiː/", "meaning": "cam kết bán bằng hoặc thấp hơn giá đối thủ", "example": "The retailer offers a price-match guarantee on identical electronics." }
        ]
    },
    {
        "id": "part3-62-64",
        "part": 3,
        "partTitle": "Part 3: Hội thoại",
        "questionRange": "Câu 62-64",
        "title": "Part 3 - Câu 62-64: Tiến độ dự án thi công đường hầm xe lửa",
        "audioSrc": "/audio/cuts/test5/E26-T05-62-64.mp3",
        "graphicImage": "/images/intensive/test5/q62_64.png",
        "transcript": [
            {
                "id": "p3-62-1",
                "speaker": "Woman",
                "text": "Hi. I just got off the phone with management. They're not happy. The construction of the train tunnel isn't progressing fast enough.",
                "vietnamese": "Chào anh. Tôi vừa cúp điện thoại với ban giám đốc. Họ không hài lòng. Việc thi công hầm tàu hỏa tiến triển chưa đủ nhanh."
            },
            {
                "id": "p3-62-2",
                "speaker": "Man",
                "text": "Yeah, I'm not surprised. The drilling is done now. The thing is, we can't start installing the support columns until we have all the materials for the concrete.",
                "vietnamese": "Vâng, tôi không ngạc nhiên. Việc khoan đào đá hiện đã xong. Vấn đề là chúng ta không thể bắt đầu lắp đặt các cột trụ đỡ cho đến khi có đủ toàn bộ vật liệu làm bê tông."
            },
            {
                "id": "p3-62-3",
                "speaker": "Woman",
                "text": "When are the materials going to get here?",
                "vietnamese": "Khi nào thì các vật liệu đó mới tới đây?"
            },
            {
                "id": "p3-62-4",
                "speaker": "Man",
                "text": "A week, maybe two.",
                "vietnamese": "Một tuần, có thể là hai tuần."
            },
            {
                "id": "p3-62-5",
                "speaker": "Woman",
                "text": "Let's see if the shipment can be expedited. Can you do that?",
                "vietnamese": "Hãy xem liệu lô hàng có thể được đẩy nhanh tiến độ giao không. Anh làm được chứ?"
            },
            {
                "id": "p3-62-6",
                "speaker": "Man",
                "text": "Sure. I'll call the supplier to ask about getting it here sooner.",
                "vietnamese": "Chắc chắn rồi. Tôi sẽ gọi cho nhà cung cấp để hỏi về việc chuyển hàng đến đây sớm hơn."
            },
            {
                "id": "p3-62-7",
                "speaker": "Woman",
                "text": "In the meantime, I'm going to write an e-mail to management to explain how we're attempting to resolve the situation.",
                "vietnamese": "Trong lúc đó, tôi sẽ viết một email gửi ban lãnh đạo để giải thích cách chúng ta đang nỗ lực giải quyết tình hình."
            }
        ],
        "questions": [
            {
                "num": 62,
                "question": "Look at the graphic. Which project phase was just completed?",
                "vietnameseQuestion": "Nhìn vào biểu đồ. Giai đoạn dự án nào vừa mới hoàn thành?",
                "options": [
                    { "key": "A", "text": "Phase 1", "vietnamese": "Giai đoạn 1" },
                    { "key": "B", "text": "Phase 2", "vietnamese": "Giai đoạn 2" },
                    { "key": "C", "text": "Phase 3", "vietnamese": "Giai đoạn 3" },
                    { "key": "D", "text": "Phase 4", "vietnamese": "Giai đoạn 4" }
                ],
                "correctAnswer": "B",
                "explanation": "Người đàn ông nói: 'The drilling is done now' (việc khoan đá đã xong). Đối chiếu biểu đồ kế hoạch: Phase 2 là 'Drill through rock'. Vậy giai đoạn vừa hoàn thành là Phase 2.",
                "paraphraseGroup": [
                    { "original": "The drilling is done now", "paraphrase": "Phase 2 (Drill through rock)" }
                ]
            },
            {
                "num": 63,
                "question": "What does the woman ask the man to do?",
                "vietnameseQuestion": "Người phụ nữ yêu cầu người đàn ông làm gì?",
                "options": [
                    { "key": "A", "text": "Request an earlier delivery date", "vietnamese": "Yêu cầu ngày giao hàng sớm hơn" },
                    { "key": "B", "text": "Consult with a safety inspector", "vietnamese": "Tham vấn ý kiến của thanh tra an toàn" },
                    { "key": "C", "text": "Post some construction plans", "vietnamese": "Đăng tải một số bản kế hoạch thi công" },
                    { "key": "D", "text": "Forward an invoice", "vietnamese": "Chuyển tiếp một hóa đơn" }
                ],
                "correctAnswer": "A",
                "explanation": "Người phụ nữ yêu cầu: 'Let's see if the shipment can be expedited. Can you do that?' và người đàn ông xác nhận 'ask about getting it here sooner' (yêu cầu giao hàng sớm hơn = Request an earlier delivery date).",
                "paraphraseGroup": [
                    { "original": "shipment can be expedited / getting it here sooner", "paraphrase": "Request an earlier delivery date" }
                ]
            },
            {
                "num": 64,
                "question": "What does the woman intend to do next?",
                "vietnameseQuestion": "Người phụ nữ có dự định làm gì tiếp theo?",
                "options": [
                    { "key": "A", "text": "Review some data", "vietnamese": "Xem lại một số dữ liệu" },
                    { "key": "B", "text": "Move a vehicle", "vietnamese": "Di chuyển một phương tiện" },
                    { "key": "C", "text": "Increase the size of a crew", "vietnamese": "Tăng quy mô tổ đội công nhân" },
                    { "key": "D", "text": "Contact the management team", "vietnamese": "Liên hệ với ban quản lý / ban lãnh đạo" }
                ],
                "correctAnswer": "D",
                "explanation": "Người phụ nữ cho biết: 'I'm going to write an e-mail to management to explain how we're attempting to resolve the situation' (viết email cho ban lãnh đạo = Contact the management team).",
                "paraphraseGroup": [
                    { "original": "write an e-mail to management", "paraphrase": "Contact the management team" }
                ]
            }
        ],
        "vocabulary": [
            { "word": "tunnel", "type": "n", "phonetic": "/ˈtʌnl/", "meaning": "đường hầm", "example": "Engineers designed a deep railway tunnel through the mountain range." },
            { "word": "drill", "type": "v, n", "phonetic": "/drɪl/", "meaning": "khoan đục (đá, đất)", "example": "Heavy specialized boring machines drilled through solid bedrock." },
            { "word": "expedite", "type": "v", "phonetic": "/ˈekspədaɪt/", "meaning": "xúc tiến, đẩy nhanh tiến độ", "example": "We paid an additional courier fee to expedite parts shipment." }
        ]
    },
    {
        "id": "part3-65-67",
        "part": 3,
        "partTitle": "Part 3: Hội thoại",
        "questionRange": "Câu 65-67",
        "title": "Part 3 - Câu 65-67: Điều chỉnh chi phí giao đồ ăn nhà hàng bằng xe đạp",
        "audioSrc": "/audio/cuts/test5/E26-T05-65-67.mp3",
        "graphicImage": "/images/intensive/test5/q65_67.png",
        "transcript": [
            {
                "id": "p3-65-1",
                "speaker": "Man",
                "text": "The city just posted its new parking rates, and we need to talk about how they'll affect our restaurant's food delivery service. I'm worried we'll lose money because we'll need to pay more for parking while the delivery driver takes the food to customers.",
                "vietnamese": "Thành phố vừa công bố mức giá đỗ xe mới, và chúng ta cần thảo luận về việc chúng sẽ ảnh hưởng thế nào đến dịch vụ giao đồ ăn của nhà hàng chúng ta. Tôi lo lắng chúng ta sẽ bị thâm hụt tiền vì phải trả nhiều phí đỗ xe hơn trong lúc tài xế mang đồ ăn đến cho khách."
            },
            {
                "id": "p3-65-2",
                "speaker": "Woman",
                "text": "Wow. Parking in our main delivery area is up to fifteen dollars an hour? That is a problem. But offering free delivery attracts a lot of business. What else can we do to lower expenses?",
                "vietnamese": "Chà. Phí đỗ xe ở khu vực giao hàng chính của chúng ta lên tới 15 đô la một giờ ư? Đó quả là vấn đề lớn. Nhưng việc miễn phí giao hàng lại thu hút rất nhiều khách. Chúng ta có thể làm gì khác để giảm chi phí đây?"
            },
            {
                "id": "p3-65-3",
                "speaker": "Man",
                "text": "We could start using bicycle delivery whenever possible. That should help.",
                "vietnamese": "Chúng ta có thể bắt đầu sử dụng hình thức giao hàng bằng xe đạp bất cứ khi nào có thể. Việc đó sẽ giúp ích đấy."
            },
            {
                "id": "p3-65-4",
                "speaker": "Woman",
                "text": "Good idea. I'll talk to our drivers to see who's willing to switch to bicycle deliveries for customers nearby. Some people really like the exercise.",
                "vietnamese": "Ý kiến hay đấy. Tôi sẽ trao đổi với các tài xế xem ai sẵn lòng chuyển sang giao bằng xe đạp cho các khách hàng ở gần. Một số người thực sự rất thích việc rèn luyện thể dục."
            }
        ],
        "questions": [
            {
                "num": 65,
                "question": "What type of business do the speakers work for?",
                "vietnameseQuestion": "Những người nói làm việc cho loại hình kinh doanh nào?",
                "options": [
                    { "key": "A", "text": "A restaurant", "vietnamese": "Một nhà hàng" },
                    { "key": "B", "text": "A law firm", "vietnamese": "Một công ty luật" },
                    { "key": "C", "text": "An office-supply store", "vietnamese": "Một cửa hàng văn phòng phẩm" },
                    { "key": "D", "text": "A flower shop", "vietnamese": "Một cửa hàng bán hoa" }
                ],
                "correctAnswer": "A",
                "explanation": "Người đàn ông nói: 'how they'll affect our restaurant's food delivery service' -> Nhà hàng (A restaurant).",
                "paraphraseGroup": [
                    { "original": "our restaurant's food delivery service", "paraphrase": "A restaurant" }
                ]
            },
            {
                "num": 66,
                "question": "Look at the graphic. In which area of the city does the business make most of its deliveries?",
                "vietnameseQuestion": "Nhìn vào biểu đồ. Doanh nghiệp thực hiện phần lớn các chuyến giao hàng ở khu vực nào trong thành phố?",
                "options": [
                    { "key": "A", "text": "The waterfront district", "vietnamese": "Khu vực ven sông / ven nước" },
                    { "key": "B", "text": "The historic district", "vietnamese": "Khu di tích lịch sử" },
                    { "key": "C", "text": "The residential district", "vietnamese": "Khu dân cư" },
                    { "key": "D", "text": "The downtown district", "vietnamese": "Khu vực trung tâm thành phố" }
                ],
                "correctAnswer": "D",
                "explanation": "Người phụ nữ nói: 'Parking in our main delivery area is up to fifteen dollars an hour'. Nhìn vào bản đồ giá đỗ xe: khu vực có mức giá 15 đô la ($15) chính là Downtown District. Vậy khu giao hàng chính là The downtown district.",
                "paraphraseGroup": [
                    { "original": "main delivery area... fifteen dollars an hour", "paraphrase": "Downtown District $15" }
                ]
            },
            {
                "num": 67,
                "question": "How does the man propose lowering business expenses?",
                "vietnameseQuestion": "Người đàn ông đề xuất giảm chi phí kinh doanh bằng cách nào?",
                "options": [
                    { "key": "A", "text": "By reducing packaging waste", "vietnamese": "Bằng cách giảm rác thải bao bì" },
                    { "key": "B", "text": "By introducing bicycle delivery", "vietnamese": "Bằng cách áp dụng hình thức giao hàng bằng xe đạp" },
                    { "key": "C", "text": "By switching to a new supplier", "vietnamese": "Bằng cách chuyển sang nhà cung ứng mới" },
                    { "key": "D", "text": "By moving to a smaller building", "vietnamese": "Bằng cách chuyển đến một tòa nhà nhỏ hơn" }
                ],
                "correctAnswer": "B",
                "explanation": "Người đàn ông đề xuất giải pháp: 'We could start using bicycle delivery whenever possible' (áp dụng giao hàng bằng xe đạp = By introducing bicycle delivery).",
                "paraphraseGroup": [
                    { "original": "using bicycle delivery", "paraphrase": "introducing bicycle delivery" }
                ]
            }
        ],
        "vocabulary": [
            { "word": "parking rate", "type": "n", "phonetic": "/ˈpɑːkɪŋ reɪt/", "meaning": "biểu phí đỗ xe", "example": "Downtown street parking rates rose substantially this spring." },
            { "word": "lower expenses", "type": "phrase", "phonetic": "/ˈləʊər ɪkˈspensɪz/", "meaning": "cắt giảm, hạ thấp chi phí hoạt động", "example": "Companies adopt green logistics to lower operational expenses." },
            { "word": "switch to", "type": "phrasal verb", "phonetic": "/swɪtʃ tuː/", "meaning": "chuyển đổi sang cái khác", "example": "Many couriers switched to electric bicycles to bypass city traffic." }
        ]
    },
    {
        "id": "part3-68-70",
        "part": 3,
        "partTitle": "Part 3: Hội thoại",
        "questionRange": "Câu 68-70",
        "title": "Part 3 - Câu 68-70: Đề xuất thiết kế cải tạo tiền sảnh Ngân hàng Southern Regional",
        "audioSrc": "/audio/cuts/test5/E26-T05-68-70.mp3",
        "graphicImage": "/images/intensive/test5/q68_70.png",
        "transcript": [
            {
                "id": "p3-68-1",
                "speaker": "Man",
                "text": "When customers walk into Southern Regional Bank, I want them to feel confident about entrusting their money to us. As I mentioned the last time we met, I'm hoping your interior design firm can give our lobby a more polished, professional look.",
                "vietnamese": "Khi khách hàng bước vào Ngân hàng Southern Regional, tôi muốn họ cảm thấy hoàn toàn tin tưởng khi giao phó tiền của họ cho chúng tôi. Như tôi đã đề cập trong lần gặp trước, tôi hy vọng công ty thiết kế nội thất của cô có thể mang lại cho sảnh chờ của chúng tôi một diện mạo trau chuốt, chuyên nghiệp hơn."
            },
            {
                "id": "p3-68-2",
                "speaker": "Woman",
                "text": "Our proposal does just that. Here—take a look. The cover page includes a summary of the renovations.",
                "vietnamese": "Bản đề xuất của chúng tôi làm được đúng điều đó. Đây—mời ông xem qua. Trang bìa bao gồm bản tóm tắt các hạng mục cải tạo."
            },
            {
                "id": "p3-68-3",
                "speaker": "Man",
                "text": "Hmm. Do you really think we need skylights? That would be a big expense.",
                "vietnamese": "Hừm. Cô có thực sự nghĩ rằng chúng tôi cần lắp giếng trời lấy sáng không? Đó sẽ là một khoản chi phí lớn đấy."
            },
            {
                "id": "p3-68-4",
                "speaker": "Woman",
                "text": "There aren't many windows in your lobby, so it's the best way to bring more natural light into the room. Besides, our proposed renovations would actually come in under budget. If you turn to page four, you'll see the cost breakdown.",
                "vietnamese": "Tiền sảnh của ngân hàng không có nhiều cửa sổ, vì vậy đây là cách tốt nhất để đưa thêm ánh sáng tự nhiên vào phòng. Hơn nữa, những cải tạo do chúng tôi đề xuất thực tế vẫn nằm trong phạm vi ngân sách cho phép. Nếu ông lật sang trang bốn, ông sẽ thấy bảng phân tích chi phí chi tiết."
            }
        ],
        "questions": [
            {
                "num": 68,
                "question": "Who most likely is the woman?",
                "vietnameseQuestion": "Người phụ nữ có khả năng nhất là ai?",
                "options": [
                    { "key": "A", "text": "A hotel manager", "vietnamese": "Một quản lý khách sạn" },
                    { "key": "B", "text": "An interior designer", "vietnamese": "Một nhà thiết kế nội thất" },
                    { "key": "C", "text": "A construction worker", "vietnamese": "Một công nhân xây dựng" },
                    { "key": "D", "text": "A real estate agent", "vietnamese": "Một người môi giới bất động sản" },
                ],
                "correctAnswer": "B",
                "explanation": "Người đàn ông nói với người phụ nữ: 'I'm hoping your interior design firm can give our lobby a more polished, professional look' -> Người phụ nữ là nhà thiết kế nội thất (An interior designer).",
                "paraphraseGroup": [
                    { "original": "your interior design firm", "paraphrase": "An interior designer" }
                ]
            },
            {
                "num": 69,
                "question": "Look at the graphic. Which step does the man ask about?",
                "vietnameseQuestion": "Nhìn vào biểu đồ. Người đàn ông hỏi về bước/giai đoạn nào?",
                "options": [
                    { "key": "A", "text": "Step 1", "vietnamese": "Bước 1" },
                    { "key": "B", "text": "Step 2", "vietnamese": "Bước 2" },
                    { "key": "C", "text": "Step 3", "vietnamese": "Bước 3" },
                    { "key": "D", "text": "Step 4", "vietnamese": "Bước 4" }
                ],
                "correctAnswer": "A",
                "explanation": "Người đàn ông hỏi: 'Do you really think we need skylights?'. Đối chiếu biểu đồ tóm tắt đề xuất: Step 1 là 'Install skylights'. Do đó đáp án là Step 1.",
                "paraphraseGroup": [
                    { "original": "need skylights", "paraphrase": "Step 1: Install skylights" }
                ]
            },
            {
                "num": 70,
                "question": "What will the man most likely do next?",
                "vietnameseQuestion": "Người đàn ông có khả năng nhất sẽ làm gì tiếp theo?",
                "options": [
                    { "key": "A", "text": "Send a contract", "vietnamese": "Gửi hợp đồng" },
                    { "key": "B", "text": "Go to the lobby", "vietnamese": "Đi ra tiền sảnh" },
                    { "key": "C", "text": "Look at some photographs", "vietnamese": "Xem một số bức ảnh" },
                    { "key": "D", "text": "Review a cost estimate", "vietnamese": "Xem xét bảng dự toán chi phí" }
                ],
                "correctAnswer": "D",
                "explanation": "Người phụ nữ hướng dẫn: 'If you turn to page four, you'll see the cost breakdown' (Lật sang trang 4 sẽ thấy bảng phân tích chi phí -> Review a cost estimate).",
                "paraphraseGroup": [
                    { "original": "turn to page four... see the cost breakdown", "paraphrase": "Review a cost estimate" }
                ]
            }
        ],
        "vocabulary": [
            { "word": "entrust", "type": "v", "phonetic": "/ɪnˈtrʌst/", "meaning": "giao phó, ủy thác (tiền bạc, trách nhiệm)", "example": "Customers entrust their hard-earned savings to reputable banks." },
            { "word": "skylight", "type": "n", "phonetic": "/ˈskaɪlaɪt/", "meaning": "cửa sổ trần nhà, giếng trời", "example": "Installing a skylight brightened the interior corridor significantly." },
            { "word": "cost breakdown", "type": "n", "phonetic": "/kɒst ˈbreɪkdaʊn/", "meaning": "bảng kê phân tích chi tiết chi phí", "example": "The contractor provided a thorough cost breakdown for labor and materials." }
        ]
    }
]
