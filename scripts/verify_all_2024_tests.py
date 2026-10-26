import json, re, os, sys

def load_lc_answers(test_key):
    with open('data/lc_answers.ts', 'r', encoding='utf-8') as f:
        content = f.read()
    pattern = rf'\"{test_key}\":\s*\{{([^}}]+)\}}'
    m = re.search(pattern, content)
    if not m:
        raise ValueError(f"Could not find {test_key} in data/lc_answers.ts")
    raw = m.group(1)
    answers = {}
    for line in raw.split('\n'):
        lm = re.search(r'\"?(\d+)\"?:\s*[\'\"]([A-D])[\'\"]', line)
        if lm:
            answers[int(lm.group(1))] = lm.group(2)
    return answers

def verify_test(test_num):
    print(f"\n==========================================")
    print(f"VERIFYING ETS TOEIC 2024 TEST {test_num}")
    print(f"==========================================")
    
    file_path = f"data/intensive_listening_2024_test{test_num}.ts"
    export_name = f"test{test_num}_2024_IntensiveData"
    test_key = f"2024-{test_num}"
    
    if not os.path.exists(file_path):
        print(f"FAIL: {file_path} does not exist!")
        return False
        
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
        
    # Check export statement
    export_pattern = rf'export\s+const\s+{export_name}\s*:\s*IntensiveListeningItem\[\]\s*=\s*(\[.*\]);?\s*$'
    m = re.search(export_pattern, content, re.DOTALL)
    if not m:
        print(f"FAIL: Export {export_name} not properly formatted!")
        return False
        
    items = json.loads(m.group(1))
    print(f"✓ Total items: {len(items)} (Expected: 54)")
    assert len(items) == 54, f"Expected 54 items, got {len(items)}"
    
    # Load answer key
    expected_answers = load_lc_answers(test_key)
    print(f"✓ Loaded {len(expected_answers)} answers from data/lc_answers.ts for {test_key}")
    
    # Check parts distribution
    part_counts = {1: 0, 2: 0, 3: 0, 4: 0}
    total_questions = 0
    mismatched_answers = []
    missing_images = []
    invalid_timestamps = []
    missing_fields = []
    
    for item_idx, it in enumerate(items):
        part = it.get('part')
        part_counts[part] = part_counts.get(part, 0) + 1
        
        # Check audioSrc
        expected_audio = f"/audio/test{test_num}_2024.mp3"
        if it.get('audioSrc') != expected_audio:
            missing_fields.append((it['id'], 'audioSrc', it.get('audioSrc')))
            
        # Check timestamps
        st = it.get('startTime')
        et = it.get('endTime')
        if st is None or et is None or st >= et:
            invalid_timestamps.append((it['id'], st, et))
            
        # Check transcript
        trans = it.get('transcript', [])
        if not trans:
            missing_fields.append((it['id'], 'transcript', 'empty'))
            
        # Check vocabulary
        vocab = it.get('vocabulary', [])
        if not vocab:
            missing_fields.append((it['id'], 'vocabulary', 'empty'))
            
        # Check images
        for img_key in ['imageUrl', 'image', 'graphicImage']:
            if img_key in it and it[img_key]:
                rel_path = it[img_key].lstrip('/')
                pub_path = os.path.join('public', rel_path)
                dist_path = os.path.join('dist/client', rel_path)
                if not os.path.exists(pub_path):
                    missing_images.append((it['id'], img_key, pub_path))
                if not os.path.exists(dist_path):
                    missing_images.append((it['id'], img_key, dist_path))
                    
        # Check questions
        questions = it.get('questions', [])
        if not questions:
            missing_fields.append((it['id'], 'questions', 'empty'))
            
        for q in questions:
            total_questions += 1
            q_num = q.get('num')
            ans = q.get('correctAnswer')
            exp = expected_answers.get(q_num)
            
            if ans != exp:
                mismatched_answers.append((q_num, ans, exp))
                
            if not q.get('vietnameseQuestion') or not q.get('explanation'):
                missing_fields.append((it['id'], f'Q{q_num}_explanation_or_viQ', 'missing'))
                
            for opt in q.get('options', []):
                if not opt.get('text') or not opt.get('vietnamese'):
                    missing_fields.append((it['id'], f'Q{q_num}_opt_{opt.get("key")}', 'missing text/vi'))
                    
    print(f"✓ Parts distribution: Part 1={part_counts[1]}, Part 2={part_counts[2]}, Part 3={part_counts[3]}, Part 4={part_counts[4]}")
    assert part_counts == {1: 6, 2: 25, 3: 13, 4: 10}, f"Invalid parts distribution: {part_counts}"
    
    print(f"✓ Total questions: {total_questions} (Expected: 100)")
    assert total_questions == 100, f"Expected 100 questions, got {total_questions}"
    
    print(f"✓ Answer mismatches: {len(mismatched_answers)}")
    if mismatched_answers:
        print(f"FAIL: Mismatched answers: {mismatched_answers}")
        return False
        
    print(f"✓ Missing image files: {len(missing_images)}")
    if missing_images:
        print(f"FAIL: Missing images: {missing_images}")
        return False
        
    print(f"✓ Invalid timestamps: {len(invalid_timestamps)}")
    if invalid_timestamps:
        print(f"FAIL: Invalid timestamps: {invalid_timestamps}")
        return False
        
    print(f"✓ Incomplete fields: {len(missing_fields)}")
    if missing_fields:
        print(f"FAIL: Incomplete fields: {missing_fields}")
        return False
        
    print(f"===> TEST {test_num} PASSED ALL CHECKS 100%! <===")
    return True

if __name__ == '__main__':
    all_ok = True
    for t in [5, 6, 7]:
        ok = verify_test(t)
        if not ok:
            all_ok = False
            
    print("\n" + "="*50)
    if all_ok:
        print("ALL TESTS (5, 6, 7) PASSED 100% VERIFICATION WITH ZERO ERRORS!")
        print("="*50)
        sys.exit(0)
    else:
        print("SOME TESTS FAILED VERIFICATION!")
        print("="*50)
        sys.exit(1)
