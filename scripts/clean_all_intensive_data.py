import re
import glob

def clean_transcript_text(text: str) -> str:
    # Remove leading 'A. ' or 'B. '
    text = re.sub(r'^[A-Z]\.\s*', '', text)
    # Remove inline '. A. ' or '? A. ' or '! A. '
    text = re.sub(r'([.?!])\s+[A-Z]\.\s*', r'\1 ', text)
    return text.strip()

def clean_scan_artifacts(text: str) -> str:
    # Remove trailing scan/page/test artifacts
    cleaned = re.sub(
        r'\s*(?:GO\s*ON\s*TO\s*THE\s*NEXT\s*PAGE|GOONTOTHENEXTPAGE|GOON\s*TOTHENEXTPAGE|GO\s*ONTO\s*THENEXT\s*PAGE|GO\s*ON\s*TOTHENEXT\s*PAGE|TEST\s*\d+|This is the\s*end of the Listening test|heListeningtest).*$',
        '',
        text,
        flags=re.I
    )
    # Remove trailing page numbers like ' 40', ' 42', ' 44'
    cleaned = re.sub(r'\s+\d{2}$', '', cleaned)
    return cleaned.strip()

def fix_test2(filepath="data/intensive_listening_2023_test2.ts"):
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    # 1. Fix speakers in part3-44-46
    p3_44_block = re.search(r'\"id\":\s*\"part3-44-46\".*?\"vocabulary\":', content, re.DOTALL)
    if p3_44_block:
        old_b = p3_44_block.group(0)
        new_b = old_b
        new_b = re.sub(r'(\"id\":\s*\"p3-44-1\",\s*\"speaker\":\s*)\"Woman\"', r'\1\"Man\"', new_b)
        new_b = re.sub(r'(\"id\":\s*\"p3-44-2\",\s*\"speaker\":\s*)\"Man\"', r'\1\"Woman\"', new_b)
        new_b = re.sub(r'(\"id\":\s*\"p3-44-3\",\s*\"speaker\":\s*)\"Woman\"', r'\1\"Man\"', new_b)
        new_b = re.sub(r'(\"id\":\s*\"p3-44-4\",\s*\"speaker\":\s*)\"Man\"', r'\1\"Woman\"', new_b)
        new_b = re.sub(r'(\"id\":\s*\"p3-44-5\",\s*\"speaker\":\s*)\"Woman\"', r'\1\"Man\"', new_b)
        content = content.replace(old_b, new_b)

    # 2. Specific text replacements
    replacements = [
        # Questions 44 - 46
        ("Tohelpacustomerchooseaproduct", "To help a customer choose a product"),
        ("Để giúp đỡ khách hàngchọn sản phẩm", "Để giúp đỡ khách hàng chọn sản phẩm"),
        ("Tocheck on a customer's satisfaction", "To check on a customer's satisfaction"),
        ("To inform a customer of aprice estimate", "To inform a customer of a price estimate"),
        ("Send workerstothewoman's house", "Send workers to the woman's house"),
        ("Gửi công nhân đến nhà phụ nữ", "Gửi công nhân đến nhà của người phụ nữ"),
        ("Đáp án đúng là (B): \"Tocheck on a customer's satisfaction\"", "Đáp án đúng là (B): \"To check on a customer's satisfaction\""),

        # Questions 32 - 43
        ("Torentafacility", "To rent a facility"),
        ("Whatproblemdoes the womanmention?", "What problem does the woman mention?"),
        ("Whydo the speakersmention Maria Jeong?", "Why do the speakers mention Maria Jeong?"),
        ("activityfora retreat", "activity for a retreat"),
        ("Whatdothespeakers likeaboutMcNally's?", "What do the speakers like about McNally's?"),
        ("Whatdoesthewomanoffertodo?", "What does the woman offer to do?"),
        ("Whatdoesthespeakers'companyproduce?", "What does the speakers' company produce?"),
        ("Customerfeedback", "Customer feedback"),
        ("Đáp án đúng là (D): \"Customerfeedback\"", "Đáp án đúng là (D): \"Customer feedback\""),
        ("Determining the price of a product GO ONTO THENEXT PAGE TEST2 39", "Determining the price of a product"),
        ("Xác định giá của sản phẩm ĐI VÀO TRANG TIẾP THEO KIỂM TRA2 39", "Xác định giá của sản phẩm"),
        ("Đáp án đúng là (D): \"Determining the price of a product GO ONTO THENEXT PAGE TEST2 39\"", "Đáp án đúng là (D): \"Determining the price of a product\""),

        # Questions 47 - 64
        ("Download an application 40", "Download an application"),
        ("Tải ứng dụng 40", "Tải ứng dụng"),
        ("Whatis the woman concerned about?", "What is the woman concerned about?"),
        ("When an orderwill be received", "When an order will be received"),
        ("Whatwill themandonext?", "What will the man do next?"),
        ("Whatproblemdoesthewomanmention?", "What problem does the woman mention?"),
        ("There isno timetocreate centerpieces.", "There is no time to create centerpieces."),
        ("It was designed manyyears ago.", "It was designed many years ago."),
        ("What does theman mean when he says, suppose no one willreally be disappointed\"?", "What does the man mean when he says, \"I suppose no one will really be disappointed\"?"),
        ("Whatproblemarethespeakersdiscussing?", "What problem are the speakers discussing?"),
        ("Apause while morefunding is obtained", "A pause while more funding is obtained"),
        ("Aneed for the company to relocate", "A need for the company to relocate"),
        ("Theloss ofsome experienced staff", "The loss of some experienced staff"),
        ("Areport from the client", "A report from the client"),
        ("Afasterpaceofwork", "A faster pace of work"),
        ("Additionalemployees", "Additional employees"),
        ("Whatdoesthewomansayabout Central Airport?", "What does the woman say about Central Airport?"),
        ("Therearenot enough peopleworking there.", "There are not enough people working there."),
        ("It ismoremodernthanthelocal airport.", "It is more modern than the local airport."),
        ("He will be ableto take a shuttle to the hotel.", "He will be able to take a shuttle to the hotel."),
        ("Givehimadiscountonhisreservation", "Give him a discount on his reservation"),
        ("Thecostthemanhasestimated", "The cost the man has estimated"),
        ("$2.50 GO ONTO THENEXT PAGE TEST241 Price RoomTypes 120 Executivesuite 115 Deluxe double Standard king 99 89 Single basic", "$2.50"),
        ("$2,50 ĐI VÀO TRANG TIẾP THEO KIỂM TRA241 Giá Loại phòng 120 ExecutiveSuite 115 Deluxe giường đôi Tiêu chuẩn King 99 89 Đơn cơ bản", "$2.50"),
        ("Đáp án đúng là (D): \"$2.50 GO ONTO THENEXT PAGE TEST241 Price RoomTypes 120 Executivesuite 115 Deluxe double Standard king 99 89 Single basic\"", "Đáp án đúng là (D): \"$2.50\""),

        # Questions 65 - 76
        ("Which room type does thewomanmention?", "Which room type does the woman mention?"),
        ("An event planner 42", "An event planner"),
        ("Asalesstrategy", "A sales strategy"),
        ("Anew manager", "A new manager"),
        ("Whodoes thewomansayshewill senda reminder to?", "Who does the woman say she will send a reminder to?"),
        ("Aspecial sale will take place.", "A special sale will take place."),
        ("Amanager", "A manager"),
        ("Adelivery route", "A delivery route"),
        ("Performancereviews", "Performance reviews"),
        ("What doesthespeaker ask thelisteners to do?", "What does the speaker ask the listeners to do?"),

        # Questions 77 - 90
        ("Arealestatefirm", "A real estate firm"),
        ("Whydoesthespeakersay,\"myapartmentis on a very high floor\"?", "Why does the speaker say, \"my apartment is on a very high floor\"?"),
        ("Aperformancehasbeen canceled.", "A performance has been canceled."),
        ("Shetaughtthe speaker.", "She taught the speaker."),
        ("Whatdoes the speaker imply when hesays, \"IsawthereviewsfromToronto\"?", "What does the speaker imply when he says, \"I saw the reviews from Toronto\"?"),
        ("Heattended the opera in Toronto.", "He attended the opera in Toronto."),
        ("Rita Marks has been praised for her singing. GOONTOTHENEXTPAGE TEST243", "Rita Marks has been praised for her singing."),
        ("Rita Marks đã được khen ngợi về giọng hát. GONTOTHENEXTPAGE TEST243", "Rita Marks đã được khen ngợi về giọng hát của mình."),
        ("Đáp án đúng là (D): \"Rita Marks has been praised for her singing. GOONTOTHENEXTPAGE TEST243\"", "Đáp án đúng là (D): \"Rita Marks has been praised for her singing.\""),
        ("Where does the speaker most likelywork?", "Where does the speaker most likely work?"),
        ("she says,\"It's been a mixed bag\"?", "she says, \"It's been a mixed bag\"?"),
        ("more than one ofthe product.", "more than one of the product."),
        ("Where isthe announcementmost likely being made?", "Where is the announcement most likely being made?"),
        ("Anew product", "A new product"),
        ("Agiveaway", "A giveaway"),
        ("What doesthespeaker say about some Shopsmartproducts?", "What does the speaker say about some Shopsmart products?"),
        ("event. 44", "event."),
        ("Deliverfirewood", "Deliver firewood"),
        ("customerto reconsider", "customer to reconsider"),

        # Questions 91 - 100
        ("Ateacher in a classroom", "A teacher in a classroom"),
        ("Aworkerat an environmental center", "A worker at an environmental center"),
        ("Whatismarkedonsomemaps?", "What is marked on some maps?"),
        ("Locationswhereworkcanbedone", "Locations where work can be done"),
        ("Địa điểmnơi làm việc có thể được thực hiện", "Địa điểm nơi có thể thực hiện công việc"),
        ("Directions to the environmental center Pattern WholesaleOrders (Number of complete sets) Everyday 7,000 Dawn 5,000 Cafe 2,000 Holiday 6,200 New Year 6.000 Harvest Festival 200", "Directions to the environmental center"),
        ("Chỉ đường đến trung tâm môi trường Mẫu Bán buôn Đơn hàng (Số lượng bộ hoàn chỉnh) Hàng ngày 7.000 Bình minh 5.000 Quán cà phê 2.000 Ngày lễ 6.200 Năm mới 6.000 Lễ hội thu hoạch 200", "Chỉ đường đến trung tâm môi trường"),
        ("company Sell?", "company sell?"),
        ("Whywill theCEObepleased?", "Why will the CEO be pleased?"),
        ("Customerreviews have beenpositive.", "Customer reviews have been positive."),
        ("200 PackageName NumberofGamesIncluded Holiday package 16 Sunday package Friday night package 19 36 Discountpackage TES1", "200"),
        ("200 Gói Tên Số Trò chơi Bao gồm Gói nghỉ lễ 16 Gói chủ nhật Gói tối thứ sáu 19 36 Gói giảm giá TES1", "200"),
        ("Đáp án đúng là (D): \"200 PackageName NumberofGamesIncluded Holiday package 16 Sunday package Friday night package 19 36 Discountpackage TES1\"", "Đáp án đúng là (D): \"200\""),
        ("Abaseballplayer", "A baseball player"),
        ("Theteam has manynew players.", "The team has many new players.")
    ]

    for old, new in replacements:
        content = content.replace(old, new)

    # 3. Clean transcripts in Part 3 and Part 4
    # Match every transcript line in part 3 & 4
    def clean_trans_match(match):
        full_line = match.group(0)
        # text: "A. ..."
        cleaned = re.sub(r'(\"text\":\s*\")A\.\s*', r'\1', full_line)
        cleaned = re.sub(r'(\"vietnamese\":\s*\")A\.\s*', r'\1', cleaned)
        cleaned = re.sub(r'([.?!])\s+A\.\s*', r'\1 ', cleaned)
        return cleaned

    content = re.sub(r'\{\s*\"id\":\s*\"p[34]-[^\"]+\",\s*\"speaker\":\s*\"[^\"]+\",\s*\"text\":\s*\"[^\"]+\",\s*\"vietnamese\":\s*\"[^\"]+\"\s*\}', clean_trans_match, content)

    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"Updated {filepath} successfully.")

if __name__ == "__main__":
    fix_test2()
