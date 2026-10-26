import os
import re
import json

def parse_test_raw(test_num):
    with open(f"test{test_num}_2024_segments.json") as f:
        segs = json.load(f)

    with open(f"test{test_num}_ocr_questions.json") as f:
        ocr_q = json.load(f)

    with open("data/lc_answers.ts") as f:
        lc_text = f.read()

    m = re.search(rf"\"{test_num if isinstance(test_num, str) else '2024-' + str(test_num)}\":\s*\{{([^}}]+)\}}", lc_text)
    answers = {}
    for line in m.group(1).split(","):
        if ":" in line:
            k, v = line.split(":")
            answers[int(k.strip().replace("\"", ""))] = v.strip().replace("\"", "")

    items = []

    # ------------------
    # PART 1: Q1 to Q6
    # ------------------
    for q in range(1, 7):
        idx_q = None
        for i, s in enumerate(segs):
            if re.search(rf"\bNumber {q}\b", s["text"]):
                idx_q = i
                break
        idx_next = None
        for i in range(idx_q + 1, len(segs)):
            if q < 6 and re.search(rf"\bNumber {q+1}\b", segs[i]["text"]):
                idx_next = i
                break
            elif q == 6 and ("Go on" in segs[i]["text"] or "Part 2" in segs[i]["text"]):
                idx_next = i
                break

        start_time = round(segs[idx_q]["start"], 2)
        end_time = round(segs[idx_next]["start"], 2)

        stmts = {}
        cur_letter = None
        for i in range(idx_q, idx_next):
            txt = segs[i]["text"].strip()
            # check A. B. C. D.
            m_let = re.search(r"^([A-D])\.\s*(.*)", txt)
            if m_let:
                cur_letter = m_let.group(1)
                stmts[cur_letter] = m_let.group(2).strip()
            elif cur_letter and not re.search(r"Number \d|Look at the picture|Go on", txt):
                stmts[cur_letter] += " " + txt

        item = {
            "id": f"part1-{q}",
            "part": 1,
            "partTitle": "Part 1: Mô tả hình ảnh",
            "questionRange": f"Câu {q}",
            "num": q,
            "startTime": start_time,
            "endTime": end_time,
            "audioSrc": f"/audio/test{test_num}_2024.mp3",
            "imageUrl": f"/images/intensive/test{test_num}_2024/q{q}.png",
            "image": f"/images/intensive/test{test_num}_2024/q{q}.png",
            "stmts": stmts,
            "correctAnswer": answers[q]
        }
        items.append(item)

    # ------------------
    # PART 2: Q7 to Q31
    # ------------------
    for q in range(7, 32):
        idx_q = None
        for i, s in enumerate(segs):
            if re.search(rf"\bNumber {q}\b", s["text"]):
                idx_q = i
                break
        idx_next = None
        for i in range(idx_q + 1, len(segs)):
            if q < 31 and re.search(rf"\bNumber {q+1}\b", segs[i]["text"]):
                idx_next = i
                break
            elif q == 31 and ("Part 3" in segs[i]["text"] or "Directions" in segs[i]["text"] or "Questions 32" in segs[i]["text"]):
                idx_next = i
                break

        start_time = round(segs[idx_q]["start"], 2)
        end_time = round(segs[idx_next]["start"], 2)

        q_text = ""
        stmts = {}
        cur_letter = None
        for i in range(idx_q, idx_next):
            txt = segs[i]["text"].strip()
            if re.search(r"\bNumber \d", txt):
                txt = re.sub(r"^.*?\bNumber \d+\.?\s*", "", txt).strip()
                if not txt:
                    continue
            m_let = re.match(r"^([A-C])\.\s*(.*)", txt)
            if m_let:
                cur_letter = m_let.group(1)
                stmts[cur_letter] = m_let.group(2).strip()
            elif cur_letter:
                stmts[cur_letter] += " " + txt
            else:
                if q_text:
                    q_text += " " + txt
                else:
                    q_text = txt

        item = {
            "id": f"part2-{q}",
            "part": 2,
            "partTitle": "Part 2: Hỏi & Đáp",
            "questionRange": f"Câu {q}",
            "num": q,
            "startTime": start_time,
            "endTime": end_time,
            "audioSrc": f"/audio/test{test_num}_2024.mp3",
            "questionText": q_text,
            "stmts": stmts,
            "correctAnswer": answers[q]
        }
        items.append(item)

    # ------------------
    # PART 3 & 4
    # ------------------
    # 13 items for Part 3, 10 items for Part 4
    ranges = []
    for i, s in enumerate(segs):
        m = re.search(r"Questions?\s*(\d+)\s*(?:through|-)\s*(\d+)", s["text"], re.IGNORECASE)
        if m:
            ranges.append((int(m.group(1)), int(m.group(2)), i, s["start"]))

    for r_idx, (q_start, q_end, seg_idx, st_time) in enumerate(ranges):
        part_num = 3 if q_start <= 70 else 4
        part_title = "Part 3: Đoạn hội thoại" if part_num == 3 else "Part 4: Bài nói chuyện"
        
        # end time is start of next range, or Part 4 directions, or end of audio
        if r_idx < len(ranges) - 1:
            next_q_start, _, next_seg_idx, next_st = ranges[r_idx + 1]
            # check if Part 4 directions intervene between Part 3 (Q68-70) and Part 4 (Q71-73)
            if q_start == 68:
                for si in range(seg_idx, next_seg_idx):
                    if "Part 4" in segs[si]["text"]:
                        end_time = round(segs[si]["start"], 2)
                        next_seg_boundary = si
                        break
                else:
                    end_time = round(next_st, 2)
                    next_seg_boundary = next_seg_idx
            else:
                end_time = round(next_st, 2)
                next_seg_boundary = next_seg_idx
        else:
            # Q98-100: until the end of audio
            end_time = round(segs[-1]["end"] + 10.0, 2)
            next_seg_boundary = len(segs)

        # find where questions start in this conversation: "Number {q_start}"
        idx_first_q = None
        for si in range(seg_idx, next_seg_boundary):
            if re.search(rf"\bNumber {q_start}\b", segs[si]["text"]):
                idx_first_q = si
                break

        # Dialogue / talk segments are between seg_idx + 1 and idx_first_q
        dialogue_segs = segs[seg_idx + 1:idx_first_q] if idx_first_q else []
        
        # Question texts from whisper segments
        q_texts = {}
        for qn in range(q_start, q_end + 1):
            for si in range(idx_first_q, next_seg_boundary):
                if re.search(rf"\bNumber {qn}\b", segs[si]["text"]):
                    # Next line or two is the question
                    q_str = ""
                    for q_look in range(si + 1, min(si + 4, next_seg_boundary)):
                        txt_l = segs[q_look]["text"].strip()
                        if re.search(r"Number \d|Questions?\s*\d|Part \d", txt_l):
                            break
                        if "Look at the graphic" in txt_l:
                            continue
                        if q_str:
                            q_str += " " + txt_l
                        else:
                            q_str = txt_l
                    q_texts[qn] = q_str
                    break

        item = {
            "id": f"part{part_num}-{q_start}-{q_end}",
            "part": part_num,
            "partTitle": part_title,
            "questionRange": f"Câu {q_start} - {q_end}",
            "qStart": q_start,
            "qEnd": q_end,
            "startTime": round(st_time, 2),
            "endTime": end_time,
            "audioSrc": f"/audio/test{test_num}_2024.mp3",
            "dialogueSegs": [s["text"].strip() for s in dialogue_segs],
            "questionTexts": q_texts,
            "questions": []
        }

        # attach graphics
        if part_num == 3 and q_start in [62, 65, 68]:
            item["graphicImage"] = f"/images/intensive/test{test_num}_2024/q{q_start}_{q_end}.png"
            item["image"] = f"/images/intensive/test{test_num}_2024/q{q_start}_{q_end}.png"
        elif part_num == 4 and q_start in [95, 98]:
            item["graphicImage"] = f"/images/intensive/test{test_num}_2024/q{q_start}_{q_end}.png"
            item["image"] = f"/images/intensive/test{test_num}_2024/q{q_start}_{q_end}.png"

        for qn in range(q_start, q_end + 1):
            ocr_info = ocr_q.get(str(qn), {"question": q_texts.get(qn, ""), "options": {}})
            # Whisper question text is often cleaner than OCR, use it if available
            final_q_text = q_texts.get(qn) or ocr_info["question"]
            item["questions"].append({
                "num": qn,
                "question": final_q_text,
                "options": ocr_info["options"],
                "correctAnswer": answers[qn]
            })

        items.append(item)

    out_file = f"test{test_num}_raw_items.json"
    with open(out_file, "w", encoding="utf-8") as f:
        json.dump(items, f, ensure_ascii=False, indent=2)
    print(f"Test {test_num}: Saved {len(items)} items to {out_file}")
    return items

if __name__ == "__main__":
    for t in [8, 9, 10]:
        parse_test_raw(t)
