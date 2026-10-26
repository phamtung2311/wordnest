import os
import json
import re

# Load LC Answers
with open('data/lc_answers.ts', 'r', encoding='utf-8') as f:
    answers_content = f.read()

LC_ANSWERS = {}
matches = re.findall(r'\"(2023-\d+)\"\s*:\s*\{([^}]+)\}', answers_content)
for k, body in matches:
    t_answers = {}
    for q_m in re.findall(r'\"(\d+)\"\s*:\s*\"([A-D])\"', body):
        t_answers[int(q_m[0])] = q_m[1]
    LC_ANSWERS[k] = t_answers

def verify_test(t):
    ts_path = f"data/intensive_listening_2023_test{t}.ts"
    assert os.path.exists(ts_path), f"File {ts_path} missing!"

    with open(ts_path, 'r', encoding='utf-8') as f:
        text = f.read()

    pos = text.find(' = [')
    start_idx = pos + text[pos:].find('[')
    end_idx = text.find('\n];')
    array_str = text[start_idx:end_idx+2]
    items = json.loads(array_str)

    assert len(items) == 54, f"Test {t} has {len(items)} items, expected 54"

    # Audio file exists
    audio_path = f"public/audio/test{t}_2023.mp3"
    assert os.path.exists(audio_path), f"Audio file {audio_path} missing!"

    ans_map = LC_ANSWERS[f"2023-{t}"]
    questions_verified = 0

    for idx, it in enumerate(items):
        # Monotonicity
        assert it['startTime'] < it['endTime'], f"T{t} Item {it['id']} invalid time {it['startTime']} >= {it['endTime']}"
        if idx < len(items) - 1:
            next_it = items[idx+1]
            assert it['endTime'] <= next_it['startTime'] + 0.5, f"T{t} Item {it['id']} overlap next"

        # Transcript lines
        assert len(it['transcript']) >= 1, f"T{t} Item {it['id']} empty transcript"
        for l in it['transcript']:
            assert l['text'].strip(), f"T{t} Item {it['id']} empty line text"
            assert l['vietnamese'].strip(), f"T{t} Item {it['id']} empty line translation"

        # Image checks
        if it['part'] == 1:
            img_rel = os.path.join("public", it.get('imageUrl', '').lstrip('/'))
            assert os.path.exists(img_rel), f"T{t} Part 1 image missing: {img_rel}"
        if 'graphicImage' in it:
            g_rel = os.path.join("public", it['graphicImage'].lstrip('/'))
            assert os.path.exists(g_rel), f"T{t} Graphic image missing: {g_rel}"

        # Questions check
        for q in it['questions']:
            q_num = q['num']
            assert q['correctAnswer'] == ans_map[q_num], f"T{t} Q{q_num} answer mismatch: {q['correctAnswer']} vs key {ans_map[q_num]}"
            assert len(q['options']) in [3, 4], f"T{t} Q{q_num} invalid options count: {len(q['options'])}"
            for opt in q['options']:
                assert opt['text'].strip(), f"T{t} Q{q_num} Opt {opt['key']} text empty"
                assert opt['vietnamese'].strip(), f"T{t} Q{q_num} Opt {opt['key']} vietnamese empty"
            assert q.get('explanation'), f"T{t} Q{q_num} explanation missing"
            questions_verified += 1

        # Vocabulary
        assert len(it.get('vocabulary', [])) >= 1, f"T{t} Item {it['id']} vocab empty"

    assert questions_verified == 100, f"T{t} verified {questions_verified} questions, expected 100"
    print(f"Test {t}: 54 items (100 questions) - ALL CHECKS PASSED PERFECTLY!")

def main():
    print("=== STARTING FULL VERIFICATION OF ETS TOEIC 2023 DATA ===")
    for t in range(1, 11):
        verify_test(t)

    # Verify List file
    with open('data/intensive_listening_2023_list.ts') as f:
        list_c = f.read()
    for t in range(1, 11):
        assert f"id: 2023{t}," in list_c, f"List missing 2023{t}"
        assert f"test{t}_2023_IntensiveData" in list_c, f"List missing test{t}_2023_IntensiveData"
    print("\nintensive_listening_2023_list.ts: VERIFIED (IDs 20231 to 202310)")

    # Verify Index file
    with open('data/intensive_listening_index.ts') as f:
        idx_c = f.read()
    assert "intensiveTests2023" in idx_c, "Index missing intensiveTests2023 import"
    assert "...intensiveTests2023," in idx_c, "Index missing ...intensiveTests2023 spread"
    print("intensive_listening_index.ts: VERIFIED (integrated into availableIntensiveTests)")

    print("\n=======================================================")
    print("   ALL 10 TESTS VERIFIED 100% COMPLETE & ERROR-FREE!   ")
    print("=======================================================")

if __name__ == "__main__":
    main()
