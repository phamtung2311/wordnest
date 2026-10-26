import os
import re
import json
import pymupdf
from rapidocr_onnxruntime import RapidOCR

engine = RapidOCR()

def extract_questions_from_pdf(pdf_path, test_num):
    doc = pymupdf.open(pdf_path)
    # Part 3 starts on page 6 (idx 6) to page 9 (idx 9)
    # Part 4 starts on page 10 (idx 10) to page 12 (idx 12)
    # Pages 6 to 12
    all_questions = {}

    for page_idx in range(6, 13):
        pix = doc[page_idx].get_pixmap(dpi=150)
        w, h = pix.width, pix.height
        result, _ = engine(pix.tobytes("png"))
        if not result:
            continue

        left_col = []
        right_col = []
        mid_x = w * 0.50

        for item in result:
            box, text, score = item
            cx = sum(pt[0] for pt in box) / 4.0
            cy = sum(pt[1] for pt in box) / 4.0
            if cx < mid_x:
                left_col.append((cy, text.strip()))
            else:
                right_col.append((cy, text.strip()))

        left_col.sort(key=lambda x: x[0])
        right_col.sort(key=lambda x: x[0])

        page_lines = [t for _, t in left_col] + [t for _, t in right_col]

        cur_q = None
        cur_opt = None

        for line in page_lines:
            if not line or line.startswith("PART") or "Directions:" in line or line == "TEST" or "answer sheet" in line or "Go on to the next page" in line:
                continue

            # Normalize 4o. or 7o. or 10o. to 40., 70., 100.
            line = re.sub(r"^([1-9]\d?)[oO]\.?\s*", r"\g<1>0. ", line)

            qm = re.match(r"^(\d{1,3})\.?\s*(.*)", line)
            if qm and 32 <= int(qm.group(1)) <= 100:
                cur_q = int(qm.group(1))
                cur_opt = None
                if cur_q not in all_questions:
                    all_questions[cur_q] = {
                        "question": qm.group(2).strip(),
                        "options": {}
                    }
                continue

            om = re.match(r"^\(([A-D])\)\s*(.*)", line)
            if om and cur_q is not None:
                cur_opt = om.group(1)
                all_questions[cur_q]["options"][cur_opt] = om.group(2).strip()
                continue

            if cur_q is not None:
                if cur_opt is not None:
                    all_questions[cur_q]["options"][cur_opt] += " " + line
                else:
                    all_questions[cur_q]["question"] += " " + line

    print(f"Extracted {len(all_questions)} questions from {pdf_path}")
    missing = [q for q in range(32, 101) if q not in all_questions]
    if missing:
        print(f"Missing questions in Test {test_num}: {missing}")

    missing_opts = []
    for q in range(32, 101):
        if q in all_questions:
            opts = all_questions[q]["options"]
            for o in ["A", "B", "C", "D"]:
                if o not in opts:
                    missing_opts.append((q, o))
    if missing_opts:
        print(f"Missing options in Test {test_num}: {missing_opts}")

    out_file = f"test{test_num}_ocr_questions.json"
    with open(out_file, "w", encoding="utf-8") as f:
        json.dump(all_questions, f, ensure_ascii=False, indent=2)
    print(f"Saved to {out_file}")
    return all_questions

if __name__ == "__main__":
    for t in [8, 9, 10]:
        pdf = f"public/tests/listening2024_{t}.pdf"
        extract_questions_from_pdf(pdf, t)
