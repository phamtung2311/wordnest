import json
import os
import re
import sys

def parse_ts_data(filepath):
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()
    
    # Extract the JSON array from export const ... = [...]
    match = re.search(r"export const \w+: IntensiveListeningItem\[\] = (\[.*\]);", content, re.DOTALL)
    if not match:
        raise ValueError(f"Could not find JSON array in {filepath}")
    
    return json.loads(match.group(1))

def parse_lc_answers(filepath):
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()
    
    # Parse lcAnswersData
    answers = {}
    for test_key in ["2024-8", "2024-9", "2024-10"]:
        # Find block for this test_key
        pattern = rf"'{test_key}':\s*\{{(.*?)\}}"
        m = re.search(pattern, content, re.DOTALL)
        if not m:
            pattern = rf'"{test_key}":\s*\{{(.*?)\}}'
            m = re.search(pattern, content, re.DOTALL)
        if not m:
            raise ValueError(f"Could not find answers for {test_key}")
        
        block = m.group(1)
        test_ans = {}
        for qm in re.finditer(r'["\']?(\d+)["\']?:\s*["\']([A-D])["\']', block):
            test_ans[int(qm.group(1))] = qm.group(2)
        answers[test_key] = test_ans
    return answers

def verify():
    base_dir = os.path.dirname(os.path.dirname(__file__))
    lc_answers_path = os.path.join(base_dir, "data", "lc_answers.ts")
    lc_answers = parse_lc_answers(lc_answers_path)

    tests = [
        ("Test 8", 8, "data/intensive_listening_2024_test8.ts", "2024-8"),
        ("Test 9", 9, "data/intensive_listening_2024_test9.ts", "2024-9"),
        ("Test 10", 10, "data/intensive_listening_2024_test10.ts", "2024-10")
    ]

    total_tests_passed = 0
    total_questions_verified = 0

    for name, tnum, rel_path, ans_key in tests:
        full_path = os.path.join(base_dir, rel_path)
        print(f"\n==========================================")
        print(f"Verifying {name} ({rel_path})...")
        print(f"==========================================")
        assert os.path.exists(full_path), f"File {full_path} not found"
        file_size = os.path.getsize(full_path)
        print(f"File size: {file_size:,} bytes")

        items = parse_ts_data(full_path)
        assert len(items) == 54, f"Expected 54 items, found {len(items)}"
        print(f"✓ Total items: {len(items)} (expected 54)")

        # Check part counts
        p1 = [it for it in items if it["part"] == 1]
        p2 = [it for it in items if it["part"] == 2]
        p3 = [it for it in items if it["part"] == 3]
        p4 = [it for it in items if it["part"] == 4]
        assert len(p1) == 6, f"Part 1 items: {len(p1)} != 6"
        assert len(p2) == 25, f"Part 2 items: {len(p2)} != 25"
        assert len(p3) == 13, f"Part 3 items: {len(p3)} != 13"
        assert len(p4) == 10, f"Part 4 items: {len(p4)} != 10"
        print(f"✓ Part item distribution: P1={len(p1)}, P2={len(p2)}, P3={len(p3)}, P4={len(p4)}")

        # Check audioSrc
        expected_audio = f"/audio/test{tnum}_2024.mp3"
        audio_disk_path = os.path.join(base_dir, "public", f"audio/test{tnum}_2024.mp3")
        assert os.path.exists(audio_disk_path), f"Audio file {audio_disk_path} not found"
        print(f"✓ Audio file exists: {expected_audio} ({os.path.getsize(audio_disk_path):,} bytes)")

        # Verify timestamps and questions
        prev_start = -1.0
        q_count = 0
        seen_qnums = set()

        for it in items:
            assert it["audioSrc"] == expected_audio, f"Unexpected audioSrc {it['audioSrc']}"
            assert it["startTime"] < it["endTime"], f"Invalid timestamps in {it['id']}: {it['startTime']} >= {it['endTime']}"
            assert it["startTime"] >= prev_start, f"Non-monotonic timestamp in {it['id']}: {it['startTime']} < {prev_start}"
            prev_start = it["startTime"]

            # Transcript checks
            assert len(it["transcript"]) > 0, f"Empty transcript in {it['id']}"
            for line in it["transcript"]:
                assert line["text"].strip(), f"Empty text in transcript line {line.get('id')}"
                assert line["vietnamese"].strip(), f"Empty vietnamese in transcript line {line.get('id')}"

            # Vocabulary checks
            assert len(it["vocabulary"]) > 0, f"Empty vocabulary in {it['id']}"
            for v in it["vocabulary"]:
                assert v["word"].strip(), f"Empty word in vocabulary of {it['id']}"
                assert v["meaning"].strip(), f"Empty meaning in vocabulary of {it['id']}"

            # Image checks
            if "image" in it and it["image"]:
                img_path = os.path.join(base_dir, "public", it["image"].lstrip("/"))
                assert os.path.exists(img_path), f"Image not found: {img_path}"
                img_size = os.path.getsize(img_path)
                assert img_size > 1000, f"Image {img_path} unusually small ({img_size} bytes)"

            if "graphicImage" in it and it["graphicImage"]:
                g_path = os.path.join(base_dir, "public", it["graphicImage"].lstrip("/"))
                assert os.path.exists(g_path), f"Graphic image not found: {g_path}"
                g_size = os.path.getsize(g_path)
                assert g_size > 1000, f"Graphic image {g_path} unusually small ({g_size} bytes)"

            # Questions check
            for q in it["questions"]:
                qnum = q["num"]
                assert qnum not in seen_qnums, f"Duplicate question number {qnum} in {it['id']}"
                seen_qnums.add(qnum)
                q_count += 1

                # Correct answer validation
                expected_ans = lc_answers[ans_key].get(qnum)
                assert expected_ans is not None, f"Missing key for Q{qnum} in lc_answers"
                assert q["correctAnswer"] == expected_ans, f"Answer mismatch Q{qnum}: {q['correctAnswer']} != {expected_ans}"

                # Question content
                assert q["vietnameseQuestion"].strip(), f"Missing vietnameseQuestion in Q{qnum}"
                assert q["explanation"].strip(), f"Missing explanation in Q{qnum}"
                
                # Options check
                if it["part"] == 2:
                    assert len(q["options"]) == 3, f"Part 2 Q{qnum} should have 3 options, got {len(q['options'])}"
                else:
                    assert len(q["options"]) == 4, f"Part {it['part']} Q{qnum} should have 4 options, got {len(q['options'])}"

                for opt in q["options"]:
                    assert opt["key"] in ["A", "B", "C", "D"], f"Invalid option key {opt['key']} in Q{qnum}"
                    assert opt["text"].strip(), f"Empty option text for {opt['key']} in Q{qnum}"
                    assert opt["vietnamese"].strip(), f"Empty option vietnamese for {opt['key']} in Q{qnum}"

        assert q_count == 100, f"Expected 100 questions, got {q_count}"
        assert sorted(list(seen_qnums)) == list(range(1, 101)), "Missing or out of bounds question numbers"
        print(f"✓ All 100 questions (Q1-100) verified! 0 answer key mismatches against {ans_key}!")

        # Verify graphic items specific question ranges
        expected_graphic_ranges = ['Câu 62 - 64', 'Câu 65 - 67', 'Câu 68 - 70', 'Câu 95 - 97', 'Câu 98 - 100']
        graphic_ranges_found = [it["questionRange"] for it in items if "graphicImage" in it or (it["part"] in [3, 4] and "image" in it)]
        assert sorted(graphic_ranges_found) == sorted(expected_graphic_ranges), f"Graphic ranges mismatch: {graphic_ranges_found}"
        print(f"✓ Graphic items confirmed for: {graphic_ranges_found}")

        total_tests_passed += 1
        total_questions_verified += q_count

    print(f"\n==========================================")
    print(f"ALL CHECKS PASSED SUCCESSFULLY!")
    print(f"Tests verified: {total_tests_passed} / 3")
    print(f"Total questions verified: {total_questions_verified} / 300")
    print(f"Answer key match rate: 100.0% (300/300)")
    print(f"==========================================")

if __name__ == "__main__":
    verify()
