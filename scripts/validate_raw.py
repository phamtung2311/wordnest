import os
import json

for t in [8, 9, 10]:
    with open(f"test{t}_raw_items.json") as f:
        items = json.load(f)
    print(f"=== TEST {t} RAW VALIDATION ===")
    assert len(items) == 54, f"Expected 54 items, got {len(items)}"
    
    parts_count = {1: 0, 2: 0, 3: 0, 4: 0}
    q_count = 0
    for idx, it in enumerate(items):
        p = it["part"]
        parts_count[p] += 1
        st = it["startTime"]
        en = it["endTime"]
        item_id = it["id"]
        assert en > st, f"Item {item_id} invalid time: {st} -> {en}"
        
        if p == 1:
            q_count += 1
            assert len(it["stmts"]) == 4, f"Item {item_id} stmts missing: {it['stmts']}"
            img_path = os.path.join("public", it["image"].lstrip("/"))
            assert os.path.exists(img_path), f"Missing image {img_path}"
        elif p == 2:
            q_count += 1
            assert len(it["stmts"]) == 3, f"Item {item_id} stmts missing: {it['stmts']}"
            assert it["questionText"], f"Item {item_id} missing question text"
        else:
            assert len(it["questions"]) == 3, f"Item {item_id} must have 3 questions"
            q_count += 3
            if "graphicImage" in it:
                g_path = os.path.join("public", it["graphicImage"].lstrip("/"))
                assert os.path.exists(g_path), f"Missing graphic {g_path}"
            for q in it["questions"]:
                qnum = q["num"]
                assert len(q["options"]) == 4, f"Question {qnum} missing options: {q['options']}"
                assert q["correctAnswer"] in ["A", "B", "C", "D"]

    print(f"Parts count: {parts_count}")
    print(f"Total questions: {q_count}")
    print("ALL ASSERTIONS PASSED!")
