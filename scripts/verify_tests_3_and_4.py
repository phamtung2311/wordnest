import os
import re
import json

def verify_test(ts_path, test_key, test_name):
    print(f"\n==================================================")
    print(f"VERIFYING {test_name}: {ts_path}")
    print(f"==================================================")
    
    if not os.path.exists(ts_path):
        print(f"FAILED: File does not exist: {ts_path}")
        return False
        
    with open(ts_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Extract JSON part
    m_json = re.search(r'export const \w+: IntensiveListeningItem\[\] =\s*(\[[\s\S]*\]);', content)
    if not m_json:
        print(f"FAILED: Could not parse items array from {ts_path}")
        return False

    items = json.loads(m_json.group(1))
    print(f"Total items: {len(items)}")
    if len(items) != 54:
        print(f"FAILED: Expected 54 items, got {len(items)}")
        return False

    # Extract official answers
    with open('data/lc_answers.ts', 'r', encoding='utf-8') as f:
        lc_text = f.read()

    m_ans = re.search(rf'\"{test_key}\":\s*\{{([^}}]+)\}}', lc_text)
    if not m_ans:
        print(f"FAILED: Could not find key {test_key} in data/lc_answers.ts")
        return False

    official_answers = {int(q): ans for q, ans in re.findall(r'\"(\d+)\":\s*\"([A-D])\"', m_ans.group(1))}

    # Verify questions & answers
    q_map = {}
    mismatches = []
    missing_fields = []
    image_errors = []

    for item in items:
        # Check timestamps
        s_time = item.get("startTime", 0)
        e_time = item.get("endTime", 0)
        if s_time is None or e_time is None or s_time >= e_time:
            missing_fields.append(f"Invalid timestamp in item {item['id']}: {s_time} -> {e_time}")

        # Check images
        for img_key in ["imageUrl", "image", "graphicImage"]:
            if img_key in item and item[img_key]:
                path = item[img_key].lstrip('/')
                full_path = os.path.join(os.getcwd(), 'public', path)
                if not os.path.exists(full_path):
                    image_errors.append(f"Missing image {item[img_key]} in item {item['id']}")

        # Check transcript
        for line in item.get("transcript", []):
            if not line.get("text") or not line.get("vietnamese"):
                missing_fields.append(f"Missing transcript text/vietnamese in item {item['id']}, line {line.get('id')}")

        # Check questions
        for q in item.get("questions", []):
            num = q["num"]
            if num in q_map:
                print(f"FAILED: Duplicate question number {num}")
                return False
            q_map[num] = q["correctAnswer"]

            if not q.get("question") or not q.get("vietnameseQuestion"):
                missing_fields.append(f"Missing question/vietnamese in Q{num}")

            if not q.get("explanation"):
                missing_fields.append(f"Missing explanation in Q{num}")

            opts = q.get("options", [])
            expected_opts_count = 3 if (7 <= num <= 31) else 4
            if len(opts) != expected_opts_count:
                missing_fields.append(f"Q{num} does not have exactly {expected_opts_count} options (has {len(opts)})")
            for opt in opts:
                if not opt.get("text") or not opt.get("vietnamese"):
                    missing_fields.append(f"Missing option text/vietnamese in Q{num} opt {opt.get('key')}")

            expected = official_answers.get(num)
            if q["correctAnswer"] != expected:
                mismatches.append((num, q["correctAnswer"], expected))

        # Check vocabulary
        for v in item.get("vocabulary", []):
            if not v.get("word") or not v.get("meaning"):
                missing_fields.append(f"Incomplete vocab in item {item['id']}: {v}")

    print(f"Total questions: {len(q_map)}")
    if len(q_map) != 100:
        print(f"FAILED: Expected 100 questions, got {len(q_map)}")
        return False

    if min(q_map.keys()) != 1 or max(q_map.keys()) != 100:
        print(f"FAILED: Questions range is {min(q_map.keys())} - {max(q_map.keys())}, expected 1 - 100")
        return False

    if mismatches:
        print(f"FAILED: {len(mismatches)} answer mismatches with lc_answers.ts: {mismatches}")
        return False
    else:
        print("Answers verification: 0 mismatches (100% matched with official answers)!")

    if image_errors:
        print(f"FAILED: {len(image_errors)} image errors: {image_errors}")
        return False
    else:
        print("Image verification: All referenced images exist on disk!")

    if missing_fields:
        print(f"FAILED: {len(missing_fields)} content errors: {missing_fields[:10]}")
        return False
    else:
        print("Content verification: All transcripts, translations, explanations, and vocabulary complete!")

    print(f"RESULT: {test_name} PASSED ALL CHECKS!")
    return True

if __name__ == "__main__":
    t3_ok = verify_test("data/intensive_listening_2024_test3.ts", "2024-3", "ETS TOEIC 2024 Test 3")
    t4_ok = verify_test("data/intensive_listening_2024_test4.ts", "2024-4", "ETS TOEIC 2024 Test 4")

    if t3_ok and t4_ok:
        print("\n" + "="*50)
        print("ALL TESTS (TEST 3 & TEST 4) VERIFIED 100% SUCCESSFULLY!")
        print("="*50)
    else:
        print("\nVERIFICATION FAILED!")
        exit(1)
