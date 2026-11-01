import os
import re
import json
import pymupdf

pdf_path = "public/tests/reading2024_1.pdf"
doc = pymupdf.open(pdf_path)

output_json_path = "android/app/src/main/assets/toeic/texts/reading_2024_1.json"
os.makedirs(os.path.dirname(output_json_path), exist_ok=True)

blocks = []
questions = []

# ==============================================================================
# Helper functions
# ==============================================================================
def clean_text(text):
    if not text:
        return ""
    # Normalize whitespaces
    text = re.sub(r"[ \t]+", " ", text)
    # Fix spacing around common punctuation
    text = text.replace(" ,", ",").replace(" .", ".")
    return text.strip()

def reconstruct_column_lines(words):
    # Sort words by line (y) then horizontal (x)
    words.sort(key=lambda w: (round(w[1] / 5.5) * 5.5, w[0]))
    lines = []
    curr_y = None
    curr_line = []
    for w in words:
        yg = round(w[1] / 5.5) * 5.5
        if curr_y is None or abs(yg - curr_y) <= 3:
            curr_line.append(w[4])
            curr_y = yg
        else:
            lines.append(" ".join(curr_line))
            curr_line = [w[4]]
            curr_y = yg
    if curr_line:
        lines.append(" ".join(curr_line))
    return lines

# ==============================================================================
# 1. PARSE PART 5 (Pages 3, 4, 5 -> Questions 101 to 130)
# ==============================================================================
print("Parsing Part 5 (Questions 101 - 130)...")

p5_specs = [
    # (page_idx, left_min_q, left_max_q, right_min_q, right_max_q, y_start)
    (2, 101, 104, 105, 108, 170), # Page 3 (after directions)
    (3, 109, 114, 115, 120, 40),  # Page 4
    (4, 121, 125, 126, 130, 40),  # Page 5
]

def parse_p5_column(lines, start_q, end_q):
    items = []
    current_q = None
    current_lines = []
    
    for line in lines:
        m = re.match(r"^(\d{3})\.\s*(.*)$", line.strip())
        if m and int(m.group(1)) in range(start_q, end_q + 1):
            if current_q is not None:
                items.append((current_q, current_lines))
            current_q = int(m.group(1))
            current_lines = [m.group(2)]
        elif current_q is not None:
            # Check footer
            if "GOON TOTH" in line or "TEST 1" in line or re.match(r"^\d+\s*$", line.strip()):
                continue
            current_lines.append(line)
            
    if current_q is not None:
        items.append((current_q, current_lines))
    return items

def extract_q_and_options(q_num, lines):
    full_str = " ".join(lines)
    # Match options (A), (B), (C), (D)
    opt_pattern = r"\(([A-D])\)\s*([^()]+)"
    matches = list(re.finditer(opt_pattern, full_str))
    
    if len(matches) >= 4:
        first_opt_idx = matches[0].start()
        q_text = clean_text(full_str[:first_opt_idx])
        options = []
        for m in matches[:4]:
            options.append(f"{m.group(1)}. {clean_text(m.group(2))}")
        return q_text, options
    else:
        # Fallback if options format differs
        return clean_text(full_str), ["A. Option A", "B. Option B", "C. Option C", "D. Option D"]

for page_idx, l_min, l_max, r_min, r_max, y_start in p5_specs:
    page = doc[page_idx]
    words = page.get_text("words")
    mid_x = page.rect.width / 2
    
    l_words = [w for w in words if w[0] < mid_x and w[1] > y_start]
    r_words = [w for w in words if w[0] >= mid_x and w[1] > y_start]
    
    l_lines = reconstruct_column_lines(l_words)
    r_lines = reconstruct_column_lines(r_words)
    
    l_items = parse_p5_column(l_lines, l_min, l_max)
    r_items = parse_p5_column(r_lines, r_min, r_max)
    
    for q_num, q_lines in l_items + r_items:
        q_text, opts = extract_q_and_options(q_num, q_lines)
        block_id = f"b_{q_num}"
        blocks.append({
            "id": block_id,
            "part": 5,
            "type": "item",
            "label": f"Câu {q_num}",
            "text": q_text,
            "imageUrl": None,
            "questionNumbers": [q_num]
        })
        questions.append({
            "num": q_num,
            "part": 5,
            "text": q_text,
            "options": opts,
            "blockRefs": [block_id]
        })

print(f"Part 5 parsed: {len(questions)} questions")

# ==============================================================================
# 2. PARSE PART 6 (Pages 6, 7, 8, 9 -> Questions 131 to 146)
# ==============================================================================
print("Parsing Part 6 (Questions 131 - 146)...")

p6_specs = [
    (5, 131, 134, "announcement", "Thông báo (Câu 131–134)"),
    (6, 135, 138, "letter", "Thư (Câu 135–138)"),
    (7, 139, 142, "letter", "E-mail (Câu 139–142)"),
    (8, 143, 146, "letter", "Thư (Câu 143–146)")
]

for page_idx, start_q, end_q, b_type, b_label in p6_specs:
    page = doc[page_idx]
    words = page.get_text("words")
    mid_x = page.rect.width / 2
    
    # In Part 6, the passage is at the top (above the questions)
    # Find y where question options start (first occurrence of start_q)
    q_words = [w for w in words if any(f"{q}" in w[4] for q in range(start_q, end_q + 1)) and w[1] > 300]
    split_y = min((w[1] for w in q_words), default=400) - 10
    
    # 1. Passage text
    passage_words = [w for w in words if 140 <= w[1] <= split_y]
    passage_lines = reconstruct_column_lines(passage_words)
    passage_clean = []
    for pl in passage_lines:
        if "refer to the following" in pl.lower() or "refertothefollowing" in pl.lower():
            continue
        passage_clean.append(pl)
    passage_text = "\n".join(passage_clean).strip()
    
    block_id = f"b_{start_q}_{end_q}"
    blocks.append({
        "id": block_id,
        "part": 6,
        "type": b_type,
        "label": b_label,
        "text": passage_text,
        "imageUrl": None,
        "questionNumbers": list(range(start_q, end_q + 1))
    })
    
    # 2. Questions 4 items: 2 in left col, 2 in right col
    q_words_all = [w for w in words if w[1] > split_y]
    l_qwords = [w for w in q_words_all if w[0] < mid_x]
    r_qwords = [w for w in q_words_all if w[0] >= mid_x]
    
    l_lines = reconstruct_column_lines(l_words)
    r_lines = reconstruct_column_lines(r_words)
    
    # Parse questions from text
    page_text = page.get_text()
    for q_num in range(start_q, end_q + 1):
        # Find question block: e.g. "131." ... until next question or end
        pattern = rf"{q_num}\s*\.?\s*([^\n\d]+|\([A-D]\)[^\n]+)"
        # Match options
        q_match = re.search(rf"{q_num}\s*\.?\s*(.*?)(?={q_num+1}\s*\.?|GOON|TEST|\Z)", page_text, re.DOTALL)
        q_segment = q_match.group(1) if q_match else ""
        
        opt_matches = list(re.finditer(r"\(([A-D])\)\s*([^()]+)", q_segment))
        options = []
        for om in opt_matches[:4]:
            options.append(f"{om.group(1)}. {clean_text(om.group(2))}")
        
        while len(options) < 4:
            letter = chr(ord('A') + len(options))
            options.append(f"{letter}. Option {letter}")
            
        questions.append({
            "num": q_num,
            "part": 6,
            "text": f"Chọn từ/câu thích hợp điền vào vị trí [{q_num}]:",
            "options": options,
            "blockRefs": [block_id]
        })

print(f"Part 6 parsed, total questions now: {len(questions)}")

# ==============================================================================
# 3. PARSE PART 7 (Pages 10 to 30 -> Questions 147 to 200)
# ==============================================================================
print("Parsing Part 7 (Questions 147 - 200)...")

p7_passages = [
    (9, 147, 148, "information", "Thông báo hướng dẫn (Câu 147–148)"),
    (10, 149, 150, "table", "Lịch họp hai văn phòng (Câu 149–150)"),
    (11, 151, 152, "passage", "Tờ rơi giới thiệu (Câu 151–152)"),
    (12, 153, 154, "passage", "Đoạn tin nhắn trao đổi (Câu 153–154)"),
    (13, 155, 157, "letter", "Thông báo chung (Câu 155–157)"),
    (14, 158, 160, "letter", "Thông báo (Câu 158–160)"),
    (15, 161, 164, "letter", "E-mail (Câu 161–164)"),
    (16, 165, 167, "passage", "Đánh giá sản phẩm (Câu 165–167)"),
    (17, 168, 171, "information", "Thông tin hướng dẫn (Câu 168–171)"),
    (18, 172, 175, "passage", "Thảo luận trực tuyến (Câu 172–175)", 19), # 2 pages: 19 & 20
    (20, 176, 180, "letter", "Thông cáo báo chí & Đánh giá (Câu 176–180)", 21), # 2 pages: 21 & 22
    (22, 181, 185, "letter", "E-mail & Vé tham dự (Câu 181–185)", 23), # 2 pages: 23 & 24
    (24, 186, 190, "letter", "Quảng cáo, Diễn đàn & Đề cương (Câu 186–190)", 25), # 2 pages: 25 & 26
    (26, 191, 195, "letter", "Bài báo, Đánh giá & E-mail (Câu 191–195)", 27), # 2 pages: 27 & 28
    (28, 196, 200, "table", "Hóa đơn, Thông báo & E-mail (Câu 196–200)", 29) # 2 pages: 29 & 30
]

for spec in p7_passages:
    start_page = spec[0]
    start_q = spec[1]
    end_q = spec[2]
    b_type = spec[3]
    b_label = spec[4]
    end_page = spec[5] if len(spec) > 5 else start_page
    
    # Accumulate text across pages
    combined_passage_text = []
    for p_idx in range(start_page, end_page + 1):
        p_text = doc[p_idx].get_text()
        # Find split point between passage and questions
        # In Part 7, questions start with "147.", "148." etc.
        first_q_match = re.search(rf"\b({start_q})\b\.\s*", p_text)
        if first_q_match:
            top_passage = p_text[:first_q_match.start()]
            combined_passage_text.append(top_passage)
        elif p_idx < end_page:
            # Whole page is passage (e.g. page 1 of multi-page passage)
            combined_passage_text.append(p_text)
            
    full_p_str = "\n".join(combined_passage_text)
    # Clean passage header like "Questions 147-148 refer to..."
    full_p_str = re.sub(r"Questions?\s*\d{3}\s*[-–]\s*\d{3}\s*refer.*?\n", "", full_p_str, flags=re.I)
    full_p_str = re.sub(r"GOON.*?\n", "", full_p_str)
    full_p_str = re.sub(r"TEST \d+.*?\n", "", full_p_str)
    full_p_str = clean_text(full_p_str)
    
    block_id = f"b_{start_q}_{end_q}"
    blocks.append({
        "id": block_id,
        "part": 7,
        "type": b_type,
        "label": b_label,
        "text": full_p_str,
        "imageUrl": None,
        "questionNumbers": list(range(start_q, end_q + 1))
    })
    
    # Extract questions for this passage
    # Questions appear on the last page (or last 2 pages)
    q_pages_text = "\n".join([doc[p_idx].get_text() for p_idx in range(start_page, end_page + 1)])
    
    for q_num in range(start_q, end_q + 1):
        # Search question: e.g. "147. Where is the information..."
        q_regex = rf"(?:^|\n)\s*{q_num}\.\s*(.*?)(?=(?:^|\n)\s*{q_num+1}\.\s*|GOON|TEST|\Z)"
        m = re.search(q_regex, q_pages_text, re.DOTALL)
        if m:
            chunk = m.group(1)
            opt_matches = list(re.finditer(r"\(([A-D])\)\s*([^()\n]+)", chunk))
            if opt_matches:
                q_text = clean_text(chunk[:opt_matches[0].start()])
                options = []
                for om in opt_matches[:4]:
                    options.append(f"{om.group(1)}. {clean_text(om.group(2))}")
            else:
                q_text = clean_text(chunk)
                options = []
        else:
            q_text = f"Câu hỏi {q_num}"
            options = []
            
        while len(options) < 4:
            letter = chr(ord('A') + len(options))
            options.append(f"{letter}. Option {letter}")
            
        questions.append({
            "num": q_num,
            "part": 7,
            "text": q_text if q_text else f"Câu hỏi {q_num}",
            "options": options,
            "blockRefs": [block_id]
        })

print(f"Extraction complete! Total questions: {len(questions)}, Total blocks: {len(blocks)}")

# Sort questions by num
questions.sort(key=lambda q: q["num"])

target_data = {
    "testId": "2024_1",
    "title": "ETS 2024 · Test 1",
    "blocks": blocks,
    "questions": questions
}

with open(output_json_path, "w", encoding="utf-8") as f:
    json.dump(target_data, f, ensure_ascii=False, indent=2)

print(f"Successfully saved reading pilot JSON to {output_json_path}")
