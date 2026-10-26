import json, os, re

from build_2024_t3_p1 import part1_items
from build_2024_t3_p2 import part2_items
from build_2024_t3_p3 import part3_items
from build_2024_t3_p4 import part4_items

all_items = part1_items + part2_items + part3_items + part4_items

print(f"Total items in Test 3: {len(all_items)}")
assert len(all_items) == 54, f"Expected 54 items, got {len(all_items)}"

# Verify questions
q_count = 0
all_questions = {}
for item in all_items:
    for q in item["questions"]:
        q_count += 1
        num = q["num"]
        assert num not in all_questions, f"Duplicate question {num}"
        all_questions[num] = q["correctAnswer"]

print(f"Total questions in Test 3: {q_count}")
assert q_count == 100, f"Expected 100 questions, got {q_count}"
assert min(all_questions.keys()) == 1 and max(all_questions.keys()) == 100

# Check against lc_answers.ts
with open('data/lc_answers.ts', 'r', encoding='utf-8') as f:
    text = f.read()

m = re.search(r'\"2024-3\":\s*\{([^}]+)\}', text)
official_answers = {int(q): ans for q, ans in re.findall(r'\"(\d+)\":\s*\"([A-D])\"', m.group(1))}

mismatches = []
for num, ans in all_questions.items():
    if official_answers.get(num) != ans:
        mismatches.append((num, ans, official_answers.get(num)))

if mismatches:
    print(f"ERROR: Found {len(mismatches)} mismatches:", mismatches)
    exit(1)
else:
    print("SUCCESS: 0 answer mismatches! 100% match with lc_answers.ts!")

# Check images
for item in all_items:
    for key in ['imageUrl', 'image', 'graphicImage']:
        if key in item and item[key]:
            img_path = item[key].lstrip('/')
            full_path = os.path.join('/home/tung/web hoc tu vung/public', img_path.replace('images/', 'images/'))
            if not os.path.exists(full_path):
                # Try without public prefix
                full_path = os.path.join('/home/tung/web hoc tu vung', img_path)
            if not os.path.exists(full_path):
                print(f"Warning image not found: {item[key]} -> {full_path}")

# Generate TypeScript file
ts_content = """// Dữ liệu luyện nghe chi tiết (Intensive Listening) - ETS TOEIC 2024 Test 3
// Áp dụng kỹ thuật Virtual Timestamp Slicing từ audio gốc /audio/test3_2024.mp3
// Transcript, câu hỏi và giải thích chi tiết theo đề thi ETS 2024 Test 3

import type { IntensiveListeningItem } from './intensive_listening_types';

export const test3_2024_IntensiveData: IntensiveListeningItem[] = """

ts_content += json.dumps(all_items, ensure_ascii=False, indent=2) + ";\n"

out_path = "data/intensive_listening_2024_test3.ts"
with open(out_path, "w", encoding="utf-8") as f:
    f.write(ts_content)

print(f"Generated {out_path} successfully! Size: {os.path.getsize(out_path)} bytes")
