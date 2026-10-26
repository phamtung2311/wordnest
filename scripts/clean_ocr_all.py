import os
import json
import re

IN_DIR = "data/extracted_2023"
OUT_DIR = "data/cleaned_ocr_2023"
os.makedirs(OUT_DIR, exist_ok=True)

FOOTER_PATTERNS = [
    r'Directions:.*',
    r'GO ON TO THE NEXT PAGE.*',
    r'PART [34].*',
    r'TEST \d+.*',
    r'Approval Rating.*',
    r'Refrigerator Options.*',
    r'Cost per Tile.*',
    r'Room Types.*',
    r'Five-Star Reviews.*',
    r'Package Name.*',
    r'Wholesale Orders.*',
    r'This is the end of the Listening test.*',
    r'Turn to part \d+.*',
    r'\bEST \d+.*',
]

def clean_text(text):
    if not text:
        return ""
    text = re.sub(r'\s+', ' ', text).strip()
    for pat in FOOTER_PATTERNS:
        text = re.sub(pat, '', text, flags=re.I).strip()
    return text

def fix_question_options(q_data):
    opts = q_data.get("options", {})
    cleaned_opts = {}
    
    # First pass: check for inline options in text
    for k in ["A", "B", "C", "D"]:
        v = clean_text(opts.get(k, ""))
        cleaned_opts[k] = v

    # If C is missing and B has an inline C or ()
    if not cleaned_opts.get("C") and cleaned_opts.get("B"):
        m = re.search(r'^(.*?)\s*\(([cC\s]?)\)\s*(.*)$', cleaned_opts["B"])
        if m:
            cleaned_opts["B"] = clean_text(m.group(1))
            cleaned_opts["C"] = clean_text(m.group(3))

    # If D is missing and C has an inline D
    if not cleaned_opts.get("D") and cleaned_opts.get("C"):
        m = re.search(r'^(.*?)\s*\(([dD\s]?)\)\s*(.*)$', cleaned_opts["C"])
        if m:
            cleaned_opts["C"] = clean_text(m.group(1))
            cleaned_opts["D"] = clean_text(m.group(3))

    # If B is missing and A has inline B
    if not cleaned_opts.get("B") and cleaned_opts.get("A"):
        m = re.search(r'^(.*?)\s*\(([bB\s]?)\)\s*(.*)$', cleaned_opts["A"])
        if m:
            cleaned_opts["A"] = clean_text(m.group(1))
            cleaned_opts["B"] = clean_text(m.group(3))

    # Clean all options once more
    for k in ["A", "B", "C", "D"]:
        cleaned_opts[k] = clean_text(cleaned_opts.get(k, ""))

    q_data["options"] = cleaned_opts
    q_data["question"] = clean_text(q_data.get("question", ""))
    return q_data

def process_test_ocr(t):
    with open(f"{IN_DIR}/test{t}_ocr.json", "r", encoding="utf-8") as f:
        data = json.load(f)

    # Specific recovery for test 2 Q39/Q40
    if t == 2 and "40" not in data:
        # Q39 had Q40's options
        q40_opts = data["39"]["options"]
        data["40"] = {
            "num": 40,
            "question": "What does the woman offer to do?",
            "options": q40_opts
        }
        data["39"] = {
            "num": 39,
            "question": "What do the speakers like about McNally's?",
            "options": {
                "A": "Its convenient location",
                "B": "Its private dining room",
                "C": "Its dessert options",
                "D": "Its low prices"
            }
        }

    # Specific recovery for test 5 Q66/Q69
    if t == 5 and ("69" not in data or data.get("66", {}).get("question", "").startswith("Look at the graphic")):
        data["69"] = {
            "num": 69,
            "question": "Look at the graphic. Which phase is being extended?",
            "options": {
                "A": "Phase 1",
                "B": "Phase 2",
                "C": "Phase 3",
                "D": "Phase 4"
            }
        }
        data["66"] = {
            "num": 66,
            "question": "What was different about previous models?",
            "options": {
                "A": "They had more lights.",
                "B": "They had larger lights.",
                "C": "They had multicolor lights.",
                "D": "They had flashing lights."
            }
        }

    # Clean all questions
    cleaned_data = {}
    for q_str, q_info in data.items():
        q_num = int(q_str)
        if 32 <= q_num <= 100:
            cleaned_data[q_num] = fix_question_options(q_info)

    out_file = f"{OUT_DIR}/test{t}_questions.json"
    with open(out_file, "w", encoding="utf-8") as f:
        json.dump(cleaned_data, f, ensure_ascii=False, indent=2)

    # Check completeness
    missing = [q for q in range(32, 101) if q not in cleaned_data]
    opt_issues = []
    for q in range(32, 101):
        if q in cleaned_data:
            for k in ["A", "B", "C", "D"]:
                if not cleaned_data[q]["options"].get(k):
                    opt_issues.append((q, k))

    print(f"Test {t}: {len(cleaned_data)} questions. Missing: {missing}. Option issues: {opt_issues}")

def main():
    for t in range(1, 11):
        process_test_ocr(t)
    print("Done cleaning OCR questions.")

if __name__ == "__main__":
    main()
