import os
import re
import json
import subprocess
from rapidocr_onnxruntime import RapidOCR

ocr = RapidOCR()
OUT_DIR = "data/extracted_2023"
os.makedirs(OUT_DIR, exist_ok=True)

def parse_page_items(res):
    if not res:
        return []
    items = []
    for box, text, score in res:
        x_center = (box[0][0] + box[1][0] + box[2][0] + box[3][0]) / 4.0
        y_center = (box[0][1] + box[1][1] + box[2][1] + box[3][1]) / 4.0
        col = 0 if x_center < 600 else 1
        items.append((col, y_center, text.strip()))
    items.sort(key=lambda x: (x[0], x[1]))
    return [t[2] for t in items]

def normalize_line(line):
    # Fix "4o." -> "40.", "5o." -> "50.", "7o." -> "70.", "8o." -> "80.", "9o." -> "90."
    line = re.sub(r'\b([3-9])[oO]\.', r'\g<1>0.', line)
    line = re.sub(r'\b1[oO][oO]\.', '100.', line)
    line = re.sub(r'\b10[oO]\.', '100.', line)
    # Fix "100" without dot
    line = re.sub(r'^100\s+', '100. ', line)
    return line

def extract_questions_from_lines(lines):
    questions = {}
    current_q = None
    current_key = None
    
    for raw_line in lines:
        line = normalize_line(raw_line)
        if not line:
            continue
            
        # Check if question header: e.g. "32. Why is the woman..." or "32.Why..."
        m_q = re.match(r'^([3-9]\d|100)[\.\s]+(.*)', line)
        if m_q:
            q_num = int(m_q.group(1))
            q_text = m_q.group(2).strip()
            current_q = {
                "num": q_num,
                "question": q_text,
                "options": {}
            }
            questions[q_num] = current_q
            current_key = None
            continue
            
        # Check if option: e.g. "(A) To request...", "(A)To...", "(A) ..."
        m_opt = re.match(r'^\(([A-Da-d])\)\s*(.*)', line)
        if m_opt and current_q:
            current_key = m_opt.group(1).upper()
            opt_text = m_opt.group(2).strip()
            current_q["options"][current_key] = opt_text
            continue
            
        # Continuation line
        if current_q:
            if current_key and current_key in current_q["options"]:
                current_q["options"][current_key] += " " + line
            elif not current_key and current_q["question"]:
                current_q["question"] += " " + line
                
    return questions

def extract_test(test_idx):
    out_file = os.path.join(OUT_DIR, f"test{test_idx}_ocr.json")
    temp_dir = f"/tmp/ocr_t{test_idx}"
    os.makedirs(temp_dir, exist_ok=True)
    pdf_path = f"public/tests/listening2023_{test_idx}.pdf"
    
    # Determine pages
    if test_idx == 1:
        pages = range(8, 15)
    else:
        pages = range(5, 12)
        
    print(f"[Test {test_idx}] Rendering question pages {list(pages)}...")
    for p in pages:
        cmd = ["pdftoppm", "-png", "-r", "150", "-f", str(p), "-l", str(p), pdf_path, f"{temp_dir}/p_{p}"]
        subprocess.run(cmd, check=True)
        
    all_lines = []
    for p in pages:
        cand = [f for f in os.listdir(temp_dir) if f.startswith(f"p_{p}")]
        if cand:
            img_file = os.path.join(temp_dir, cand[0])
            res, _ = ocr(img_file)
            page_lines = parse_page_items(res)
            all_lines.extend(page_lines)
            
    questions = extract_questions_from_lines(all_lines)
    print(f"[Test {test_idx}] Extracted {len(questions)}/69 questions (Q32-Q100).")
    
    with open(out_file, "w", encoding="utf-8") as f:
        json.dump(questions, f, ensure_ascii=False, indent=2)
        
    subprocess.run(["rm", "-rf", temp_dir])

def main():
    for t in range(1, 11):
        extract_test(t)
    print("ALL 10 TESTS OCR extraction complete!")

if __name__ == "__main__":
    main()
