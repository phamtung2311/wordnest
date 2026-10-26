import os
import json
import re
import time
import urllib.request
import urllib.parse
from align_all_timestamps import align_test, parse_compound

# Load Answers
with open('data/lc_answers.ts', 'r', encoding='utf-8') as f:
    answers_content = f.read()

LC_ANSWERS = {}
matches = re.findall(r'\"(2023-\d+)\"\s*:\s*\{([^}]+)\}', answers_content)
for k, body in matches:
    t_answers = {}
    for q_m in re.findall(r'\"(\d+)\"\s*:\s*\"([A-D])\"', body):
        t_answers[int(q_m[0])] = q_m[1]
    LC_ANSWERS[k] = t_answers

# Load Vocab Dictionary
with open('data/existing_vocab_dict.json', 'r', encoding='utf-8') as f:
    VOCAB_DB = json.load(f)

# Translation Cache
CACHE_FILE = 'data/translation_cache_2023.json'
TRANSLATION_CACHE = {}
if os.path.exists(CACHE_FILE):
    try:
        with open(CACHE_FILE, 'r', encoding='utf-8') as f:
            TRANSLATION_CACHE = json.load(f)
    except Exception:
        TRANSLATION_CACHE = {}

def save_cache():
    with open(CACHE_FILE, 'w', encoding='utf-8') as f:
        json.dump(TRANSLATION_CACHE, f, ensure_ascii=False, indent=2)

def translate_batch(texts, sl='en', tl='vi'):
    if not texts:
        return []
    cleaned = [t.replace('\n', ' ').strip() for t in texts]
    combined = '\n'.join(cleaned)
    url = f'https://translate.googleapis.com/translate_a/single?client=gtx&sl={sl}&tl={tl}&dt=t&q=' + urllib.parse.quote(combined)
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        with urllib.request.urlopen(req, timeout=15) as resp:
            res = json.loads(resp.read().decode('utf-8'))
            full_res = ''.join([part[0] for part in res[0] if part[0]])
            lines = full_res.split('\n')
            if len(lines) == len(texts):
                return [l.strip() for l in lines]
    except Exception as e:
        print(f"Batch translation error: {e}, falling back to single translation...")

    out = []
    for t in texts:
        try:
            u = f'https://translate.googleapis.com/translate_a/single?client=gtx&sl={sl}&tl={tl}&dt=t&q=' + urllib.parse.quote(t)
            r = urllib.request.Request(u, headers={'User-Agent': 'Mozilla/5.0'})
            with urllib.request.urlopen(r, timeout=10) as single_resp:
                s_data = json.loads(single_resp.read().decode('utf-8'))
                out.append(''.join([part[0] for part in s_data[0] if part[0]]))
        except Exception:
            out.append(t)
        time.sleep(0.04)
    return out

def get_translations_for_list(text_list):
    needed = [t for t in set(text_list) if t and t.strip() and t not in TRANSLATION_CACHE]
    if needed:
        print(f"Translating {len(needed)} new texts in batches...")
        batch_size = 40
        for i in range(0, len(needed), batch_size):
            chunk = needed[i:i+batch_size]
            res = translate_batch(chunk)
            for orig, trans in zip(chunk, res):
                TRANSLATION_CACHE[orig] = trans
            time.sleep(0.05)
        save_cache()
    return {t: TRANSLATION_CACHE.get(t, t) for t in text_list}

STOP_WORDS = set(['what', 'when', 'where', 'which', 'who', 'whom', 'whose', 'why', 'how', 'this', 'that', 'these', 'those', 'have', 'has', 'had', 'will', 'would', 'shall', 'should', 'can', 'could', 'may', 'might', 'must', 'with', 'from', 'your', 'their', 'they', 'them', 'there', 'here', 'some', 'about', 'into', 'over', 'after', 'before', 'between', 'under', 'again', 'further', 'then', 'once', 'all', 'any', 'both', 'each', 'few', 'more', 'most', 'other', 'such', 'no', 'nor', 'not', 'only', 'own', 'same', 'so', 'than', 'too', 'very', 'just', 'should', 'now', 'speaker', 'number', 'please', 'think', 'believe', 'know', 'does', 'did', 'doing'])

def extract_vocab_for_text(text_blob, max_count=4):
    words = re.findall(r'\b[a-zA-Z]{3,}\b', text_blob.lower())
    found = []
    seen = set()
    for w in words:
        if w in VOCAB_DB and w not in seen:
            seen.add(w)
            found.append(VOCAB_DB[w])
            if len(found) >= max_count:
                break

    # Fallback if no matching vocab from DB
    if not found:
        content_words = [w for w in re.findall(r'\b[a-zA-Z]{4,}\b', text_blob.lower()) if w not in STOP_WORDS]
        for w in content_words:
            if w not in seen:
                seen.add(w)
                trans = TRANSLATION_CACHE.get(w)
                if not trans:
                    try:
                        trans = translate_batch([w])[0]
                        TRANSLATION_CACHE[w] = trans
                    except Exception:
                        trans = w
                found.append({
                    "word": w,
                    "meaning": trans,
                    "partOfSpeech": "n/v"
                })
                if len(found) >= 2:
                    break
    return found

def clean_statement_text(txt):
    txt = re.sub(r'^[A-D]\.\s*', '', txt)
    txt = re.sub(r'\s+', ' ', txt).strip()
    return txt

def extract_part1(t, segs, items_meta):
    p1_items = {}
    cur_q = None
    cur_opt = None
    for s in segs:
        if s['start'] > 300: break
        txt = s['text'].strip()
        if 'part 2' in txt.lower() or 'part two' in txt.lower():
            break

        m_q = re.search(r'\b(?:Number|No\.)\s*([1-6]|one|two|three|four|five|six)\b', txt, re.I)
        if m_q:
            w = m_q.group(1).lower()
            num = {'1':1,'2':2,'3':3,'4':4,'5':5,'6':6,'one':1,'two':2,'three':3,'four':4,'five':5,'six':6}[w]
            cur_q = num
            cur_opt = None
            p1_items[cur_q] = {}
            continue

        if cur_q:
            m_opt = re.search(r'\b([A-D])\.\s*(.*)', txt)
            if m_opt:
                cur_opt = m_opt.group(1)
                opt_txt = clean_statement_text(m_opt.group(2))
                p1_items[cur_q][cur_opt] = opt_txt
            elif cur_opt and txt and not re.search(r'go on to|part [12]', txt, re.I):
                p1_items[cur_q][cur_opt] = clean_statement_text(p1_items[cur_q][cur_opt] + ' ' + txt)

    return p1_items

def extract_part2(t, segs):
    p2_items = {}
    cur_q = None
    cur_opt = None

    for s in segs:
        if s['start'] < 250: continue
        txt = s['text'].strip()
        if 'part 3' in txt.lower() or 'part three' in txt.lower() or 'refer to the following' in txt.lower():
            break

        # Check Number X
        m_q = re.search(r'\b(?:Number|No\.)\s*([a-z0-9\s\-]+?)(?:[\.\,\?\!]|$)\s*(.*)', txt, re.I)
        if m_q:
            val = parse_compound(m_q.group(1))
            if val and 7 <= val <= 31:
                cur_q = val
                cur_opt = None
                rest = m_q.group(2).strip()
                p2_items[cur_q] = {'question': rest if rest else '', 'options': {}}
                continue

        # Test 3 Q24 edge case
        if t == 3 and not cur_q == 24 and 625 <= s['start'] <= 630 and 'Why are you cleaning the laboratory' in txt:
            cur_q = 24
            cur_opt = None
            p2_items[cur_q] = {'question': 'Why are you cleaning the laboratory?', 'options': {}}
            continue

        if cur_q:
            # Check options A, B, C
            m_opt = re.search(r'\b([A-C])\.\s*(.*)', txt)
            if m_opt:
                cur_opt = m_opt.group(1)
                opt_txt = clean_statement_text(m_opt.group(2))
                p2_items[cur_q]['options'][cur_opt] = opt_txt
            elif cur_opt:
                if not re.search(r'\b(?:Number|No\.)\b', txt, re.I):
                    p2_items[cur_q]['options'][cur_opt] = clean_statement_text(p2_items[cur_q]['options'][cur_opt] + ' ' + txt)
            else:
                if not re.search(r'\b(?:Number|No\.)\b', txt, re.I):
                    p2_items[cur_q]['question'] = (p2_items[cur_q]['question'] + ' ' + txt).strip()

    # Manual patches for whisper edge cases
    if t == 2:
        p2_items[31]['options']['B'] = "I've been using it for years with the company."
        p2_items[31]['options']['C'] = "I saw that computer at the store."
    if t == 3:
        p2_items[23]['options']['A'] = "The hotel has a fitness club."
        p2_items[23]['options']['B'] = "No. I haven't heard of it."
        p2_items[23]['options']['C'] = "Sure. Let me find the form."
        p2_items[24]['question'] = "Why are you cleaning the laboratory?"
        p2_items[24]['options']['A'] = "Just stack the books against the wall."
        p2_items[24]['options']['B'] = "I will attend if I have to."
        p2_items[24]['options']['C'] = "Haven't you seen the inspection report?"
        p2_items[29]['options']['A'] = "Didn't you see the contract for the work?"
        p2_items[29]['options']['B'] = "I don't know how far it is."
        p2_items[29]['options']['C'] = "We could borrow one for you."
    if t == 9:
        p2_items[22]['question'] = "Call me when your flight arrives so I can come get you."
        p2_items[22]['options']['A'] = "He's at Gate 17."
        p2_items[22]['options']['B'] = "A direct flight from Tokyo."
        p2_items[22]['options']['C'] = "Kofi is picking me up."

    return p2_items

def extract_part3_dialogues(t, segs, items_meta):
    p3_dialogues = {}
    p3_items = items_meta[31:44]

    for it in p3_items:
        st, et = it['start'], it['end']
        sq = int(it['id'].split('-')[1])
        q_segs = [s for s in segs if s['start'] >= st - 0.5 and s['end'] <= et + 0.5]
        dialogue = []
        in_d = False

        for s in q_segs:
            txt = s['text'].strip()
            # Check intro
            if re.search(r'refer to the following', txt, re.I):
                in_d = True
                # If intro has dialogue text concatenated after it
                m_after = re.search(r'refer to the following [a-z\s\.\,]+?\.\s+(.*)', txt, re.I)
                if m_after and m_after.group(1).strip():
                    dialogue.append(m_after.group(1).strip())
                continue

            # Check question marker
            if re.search(r'\b(?:Number|No\.)\s*(?:\d+|thirty|forty|fifty|sixty|seventy)', txt, re.I):
                in_d = False
                break

            if in_d and txt:
                dialogue.append(txt)

        # Clean dialogue lines
        cleaned_dialogue = []
        for line in dialogue:
            line = re.sub(r'\s+', ' ', line).strip()
            if line:
                cleaned_dialogue.append(line)
        p3_dialogues[sq] = cleaned_dialogue

    return p3_dialogues

def extract_part4_talks(t, segs, items_meta):
    p4_talks = {}
    p4_items = items_meta[44:54]

    for it in p4_items:
        st, et = it['start'], it['end']
        sq = int(it['id'].split('-')[1])
        q_segs = [s for s in segs if s['start'] >= st - 0.5 and s['end'] <= et + 0.5]
        talk = []
        in_t = False

        for s in q_segs:
            txt = s['text'].strip()
            if re.search(r'refer to the following', txt, re.I):
                in_t = True
                m_after = re.search(r'refer to the following [a-z\s\.\,]+?\.\s+(.*)', txt, re.I)
                if m_after and m_after.group(1).strip():
                    talk.append(m_after.group(1).strip())
                continue

            if re.search(r'\b(?:Number|No\.)\s*(?:\d+|seventy|eighty|ninety|one hundred)', txt, re.I):
                in_t = False
                break

            if in_t and txt:
                talk.append(txt)

        cleaned_talk = []
        for line in talk:
            line = re.sub(r'\s+', ' ', line).strip()
            if line:
                cleaned_talk.append(line)
        p4_talks[sq] = cleaned_talk

    # Manual patches for VAD gaps
    if t == 2:
        p4_talks[71] = [
            "Looking for an interesting activity to celebrate the coming of spring?",
            "Winford Gardens offers an escape filled with calm, peace, and quiet just a few miles from the downtown area.",
            "Winford Gardens has acres of outdoor gardens filled with plants you won't typically find anywhere near here.",
            "This weekend we will have an exhibition of Mexican blue palms.",
            "If you have never seen these striking and unique plants, now is your chance."
        ]
    if t == 9:
        p4_talks[71] = [
            "Hello, this is Kelly from Flower Power Florist.",
            "You ordered 30 vases of zinnias for the tables at your restaurant.",
            "You mentioned they were for a special event next week at the restaurant.",
            "I'm sorry, but there's a shortage of zinnias right now. Unfortunately the growers didn't produce enough this season.",
            "I could put together 30 vases of roses instead. Those are usually more expensive, but I can provide them to you for the same prices as the zinnias.",
            "Please let me know if roses would be acceptable. I'll be at the shop until 5 o'clock today."
        ]

    return p4_talks

def generate_test_data(t):
    print(f"\n==========================================")
    print(f"   GENERATING DATA FOR ETS 2023 TEST {t}")
    print(f"==========================================")

    # 1. Aligned intervals
    items_meta = align_test(t)
    with open(f"data/segments_2023/test{t}_segments.json", "r", encoding="utf-8") as f:
        segs = json.load(f)
    with open(f"data/cleaned_ocr_2023/test{t}_questions.json", "r", encoding="utf-8") as f:
        ocr_questions = json.load(f)

    # 2. Extract RAW text
    p1_raw = extract_part1(t, segs, items_meta)
    p2_raw = extract_part2(t, segs)
    p3_raw = extract_part3_dialogues(t, segs, items_meta)
    p4_raw = extract_part4_talks(t, segs, items_meta)

    # 3. Gather all strings to translate
    texts_to_trans = []

    # Part 1 strings
    for q in range(1, 7):
        for k in ['A', 'B', 'C', 'D']:
            stmt = p1_raw.get(q, {}).get(k, '')
            if stmt: texts_to_trans.append(stmt)

    # Part 2 strings
    for q in range(7, 32):
        q_item = p2_raw.get(q, {})
        if q_item.get('question'): texts_to_trans.append(q_item['question'])
        for k in ['A', 'B', 'C']:
            opt = q_item.get('options', {}).get(k, '')
            if opt: texts_to_trans.append(opt)

    # Part 3 strings
    for sq, lines in p3_raw.items():
        texts_to_trans.extend(lines)
    # Part 3 questions & options
    for q in range(32, 71):
        q_str = str(q)
        if q_str in ocr_questions:
            q_info = ocr_questions[q_str]
            texts_to_trans.append(q_info['question'])
            for k in ['A', 'B', 'C', 'D']:
                texts_to_trans.append(q_info['options'].get(k, ''))

    # Part 4 strings
    for sq, lines in p4_raw.items():
        texts_to_trans.extend(lines)
    # Part 4 questions & options
    for q in range(71, 101):
        q_str = str(q)
        if q_str in ocr_questions:
            q_info = ocr_questions[q_str]
            texts_to_trans.append(q_info['question'])
            for k in ['A', 'B', 'C', 'D']:
                texts_to_trans.append(q_info['options'].get(k, ''))

    # 4. Batch translate all strings
    translations = get_translations_for_list(texts_to_trans)

    # 5. Build 54 IntensiveListeningItem objects
    ans_map = LC_ANSWERS[f"2023-{t}"]
    audio_file = f"/audio/test{t}_2023.mp3"
    final_items = []

    # PART 1: Q1 to Q6
    for q in range(1, 7):
        it_meta = items_meta[q-1]
        stmts = p1_raw.get(q, {})
        correct_k = ans_map[q]
        correct_stmt = stmts.get(correct_k, '')
        correct_trans = translations.get(correct_stmt, '')

        transcript_lines = []
        options = []
        for k in ['A', 'B', 'C', 'D']:
            s_text = stmts.get(k, '')
            s_vi = translations.get(s_text, '')
            transcript_lines.append({
                "id": f"p1-{q}-{k.lower()}",
                "speaker": "Speaker",
                "text": f"({k}) {s_text}",
                "vietnamese": f"({k}) {s_vi}"
            })
            options.append({
                "key": k,
                "text": s_text,
                "vietnamese": s_vi
            })

        title_desc = correct_trans.replace('(A)', '').replace('(B)', '').replace('(C)', '').replace('(D)', '').strip()
        if len(title_desc) > 60: title_desc = title_desc[:57] + '...'

        item_obj = {
            "id": f"part1-{q}",
            "part": 1,
            "partTitle": "Part 1: Mô tả hình ảnh",
            "questionRange": f"Câu {q}",
            "title": f"Part 1 - Câu {q}: {title_desc}",
            "audioSrc": audio_file,
            "startTime": it_meta['start'],
            "endTime": it_meta['end'],
            "imageUrl": f"/images/intensive/test{t}_2023/q{q}.png",
            "image": f"/images/intensive/test{t}_2023/q{q}.png",
            "transcript": transcript_lines,
            "questions": [
                {
                    "num": q,
                    "question": "Chọn câu mô tả đúng nhất về bức tranh:",
                    "vietnameseQuestion": "Chọn câu mô tả đúng nhất về bức tranh:",
                    "options": options,
                    "correctAnswer": correct_k,
                    "explanation": f"Đáp án đúng là ({correct_k}): \"{correct_stmt}\" ({correct_trans}) mô tả chính xác hoạt động và cảnh vật trong hình."
                }
            ],
            "vocabulary": extract_vocab_for_text(" ".join(stmts.values()), max_count=4)
        }
        final_items.append(item_obj)

    # PART 2: Q7 to Q31
    for q in range(7, 32):
        it_meta = items_meta[q-1]
        q_data = p2_raw.get(q, {})
        q_text = q_data.get('question', '')
        q_trans = translations.get(q_text, '')
        opts = q_data.get('options', {})
        correct_k = ans_map[q]
        correct_opt = opts.get(correct_k, '')
        correct_opt_trans = translations.get(correct_opt, '')

        transcript_lines = [
            {
                "id": f"p2-{q}-q",
                "speaker": "Speaker 1",
                "text": q_text,
                "vietnamese": q_trans
            }
        ]
        options = []
        for k in ['A', 'B', 'C']:
            opt_text = opts.get(k, '')
            opt_vi = translations.get(opt_text, '')
            transcript_lines.append({
                "id": f"p2-{q}-{k.lower()}",
                "speaker": "Speaker 2",
                "text": f"({k}) {opt_text}",
                "vietnamese": f"({k}) {opt_vi}"
            })
            options.append({
                "key": k,
                "text": opt_text,
                "vietnamese": opt_vi
            })

        title_desc = q_trans.strip()
        if len(title_desc) > 60: title_desc = title_desc[:57] + '...'

        item_obj = {
            "id": f"part2-{q}",
            "part": 2,
            "partTitle": "Part 2: Hỏi & Đáp",
            "questionRange": f"Câu {q}",
            "title": f"Part 2 - Câu {q}: {title_desc}",
            "audioSrc": audio_file,
            "startTime": it_meta['start'],
            "endTime": it_meta['end'],
            "transcript": transcript_lines,
            "questions": [
                {
                    "num": q,
                    "question": q_text,
                    "vietnameseQuestion": q_trans,
                    "options": options,
                    "correctAnswer": correct_k,
                    "explanation": f"Đáp án đúng là ({correct_k}): \"{correct_opt}\" ({correct_opt_trans}) là câu phản hồi hợp lý nhất cho câu \"{q_text}\"."
                }
            ],
            "vocabulary": extract_vocab_for_text(q_text + " " + " ".join(opts.values()), max_count=3)
        }
        final_items.append(item_obj)

    # PART 3: Q32-34 to Q68-70 (13 items)
    p3_ranges = [(32, 34), (35, 37), (38, 40), (41, 43), (44, 46), (47, 49),
                 (50, 52), (53, 55), (56, 58), (59, 61), (62, 64), (65, 67), (68, 70)]

    for idx, (sq, eq) in enumerate(p3_ranges):
        it_meta = items_meta[31 + idx]
        dialogue_lines_raw = p3_raw.get(sq, [])
        speakers = ["Woman", "Man"]

        transcript_lines = []
        full_dialogue_text = []
        for l_idx, l_text in enumerate(dialogue_lines_raw):
            spk = speakers[l_idx % 2]
            l_vi = translations.get(l_text, '')
            transcript_lines.append({
                "id": f"p3-{sq}-{l_idx+1}",
                "speaker": spk,
                "text": l_text,
                "vietnamese": l_vi
            })
            full_dialogue_text.append(l_text)

        # Questions for this dialogue
        questions_list = []
        for q in range(sq, eq + 1):
            q_info = ocr_questions[str(q)]
            q_text = q_info['question']
            q_vi = translations.get(q_text, '')
            correct_k = ans_map[q]
            correct_opt = q_info['options'].get(correct_k, '')
            correct_opt_vi = translations.get(correct_opt, '')

            opts = []
            for k in ['A', 'B', 'C', 'D']:
                o_txt = q_info['options'].get(k, '')
                opts.append({
                    "key": k,
                    "text": o_txt,
                    "vietnamese": translations.get(o_txt, '')
                })

            questions_list.append({
                "num": q,
                "question": q_text,
                "vietnameseQuestion": q_vi,
                "options": opts,
                "correctAnswer": correct_k,
                "explanation": f"Đáp án đúng là ({correct_k}): \"{correct_opt}\" ({correct_opt_vi})."
            })

        first_q_vi = translations.get(ocr_questions[str(sq)]['question'], '')
        title_desc = first_q_vi.replace('?', '').strip()
        if len(title_desc) > 60: title_desc = title_desc[:57] + '...'

        item_obj = {
            "id": f"part3-{sq}-{eq}",
            "part": 3,
            "partTitle": "Part 3: Đoạn hội thoại",
            "questionRange": f"Câu {sq} - {eq}",
            "title": f"Part 3 - Câu {sq} - {eq}: {title_desc}",
            "audioSrc": audio_file,
            "startTime": it_meta['start'],
            "endTime": it_meta['end'],
            "transcript": transcript_lines,
            "questions": questions_list,
            "vocabulary": extract_vocab_for_text(" ".join(full_dialogue_text), max_count=4)
        }

        # Check Graphic Image
        if sq in [62, 65, 68]:
            img_path = f"/images/intensive/test{t}_2023/q{sq}_{eq}.png"
            item_obj["graphicImage"] = img_path

        final_items.append(item_obj)

    # PART 4: Q71-73 to Q98-100 (10 items)
    p4_ranges = [(71, 73), (74, 76), (77, 79), (80, 82), (83, 85),
                 (86, 88), (89, 91), (92, 94), (95, 97), (98, 100)]

    for idx, (sq, eq) in enumerate(p4_ranges):
        it_meta = items_meta[44 + idx]
        talk_lines_raw = p4_raw.get(sq, [])

        transcript_lines = []
        full_talk_text = []
        for l_idx, l_text in enumerate(talk_lines_raw):
            l_vi = translations.get(l_text, '')
            transcript_lines.append({
                "id": f"p4-{sq}-{l_idx+1}",
                "speaker": "Speaker",
                "text": l_text,
                "vietnamese": l_vi
            })
            full_talk_text.append(l_text)

        questions_list = []
        for q in range(sq, eq + 1):
            q_info = ocr_questions[str(q)]
            q_text = q_info['question']
            q_vi = translations.get(q_text, '')
            correct_k = ans_map[q]
            correct_opt = q_info['options'].get(correct_k, '')
            correct_opt_vi = translations.get(correct_opt, '')

            opts = []
            for k in ['A', 'B', 'C', 'D']:
                o_txt = q_info['options'].get(k, '')
                opts.append({
                    "key": k,
                    "text": o_txt,
                    "vietnamese": translations.get(o_txt, '')
                })

            questions_list.append({
                "num": q,
                "question": q_text,
                "vietnameseQuestion": q_vi,
                "options": opts,
                "correctAnswer": correct_k,
                "explanation": f"Đáp án đúng là ({correct_k}): \"{correct_opt}\" ({correct_opt_vi})."
            })

        first_q_vi = translations.get(ocr_questions[str(sq)]['question'], '')
        title_desc = first_q_vi.replace('?', '').strip()
        if len(title_desc) > 60: title_desc = title_desc[:57] + '...'

        item_obj = {
            "id": f"part4-{sq}-{eq}",
            "part": 4,
            "partTitle": "Part 4: Bài nói chuyện",
            "questionRange": f"Câu {sq} - {eq}",
            "title": f"Part 4 - Câu {sq} - {eq}: {title_desc}",
            "audioSrc": audio_file,
            "startTime": it_meta['start'],
            "endTime": it_meta['end'],
            "transcript": transcript_lines,
            "questions": questions_list,
            "vocabulary": extract_vocab_for_text(" ".join(full_talk_text), max_count=4)
        }

        # Check Graphic Image
        if sq in [95, 98]:
            img_path = f"/images/intensive/test{t}_2023/q{sq}_{eq}.png"
            item_obj["graphicImage"] = img_path

        final_items.append(item_obj)

    # 6. Write out TypeScript File
    out_ts = f"data/intensive_listening_2023_test{t}.ts"
    header = f"""// Dữ liệu luyện nghe chi tiết (Intensive Listening) - ETS TOEIC 2023 Test {t}
// Áp dụng kỹ thuật Virtual Timestamp Slicing từ audio gốc /audio/test{t}_2023.mp3
// Transcript song ngữ Anh - Việt, câu hỏi, đáp án và từ vựng trọng tâm

import type {{ IntensiveListeningItem }} from './intensive_listening_types';

export const test{t}_2023_IntensiveData: IntensiveListeningItem[] = """

    footer = f"""

export function getIntensiveItemById(id: string): IntensiveListeningItem | undefined {{
  return test{t}_2023_IntensiveData.find((item) => item.id === id);
}}

export function getItemsByPart(part: 1 | 2 | 3 | 4): IntensiveListeningItem[] {{
  return test{t}_2023_IntensiveData.filter((item) => item.part === part);
}}
"""
    json_body = json.dumps(final_items, ensure_ascii=False, indent=2)
    with open(out_ts, "w", encoding="utf-8") as f:
        f.write(header + json_body + ";" + footer)

    print(f"-> Successfully generated {out_ts} with {len(final_items)} items!")

def generate_list_file():
    print("\nGenerating data/intensive_listening_2023_list.ts...")
    imports = []
    options = []

    for t in range(1, 11):
        imports.append(f"import {{ test{t}_2023_IntensiveData }} from './intensive_listening_2023_test{t}';")
        options.append(f"""  {{
    id: 2023{t},
    title: 'ETS TOEIC 2023 - Test {t}',
    shortTitle: '2023 Test {t}',
    description: 'Đề thi ETS TOEIC 2023 Test {t} - Luyện nghe chi tiết từng câu Part 1-4 với audio, transcript song ngữ và giải thích chi tiết',
    edition: 'ETS 2023',
    badge: "'23 T{t}",
    itemCount: test{t}_2023_IntensiveData.length,
    data: test{t}_2023_IntensiveData,
  }},""")

    content = f"""// Danh sách các đề thi Luyện nghe chi tiết - Bộ đề ETS TOEIC 2023 (Test 1 - Test 10)
import type {{ IntensiveTestOption }} from './intensive_listening_types';
{chr(10).join(imports)}

export const intensiveTests2023: IntensiveTestOption[] = [
{chr(10).join(options)}
];
"""
    with open("data/intensive_listening_2023_list.ts", "w", encoding="utf-8") as f:
        f.write(content)
    print("-> Successfully created data/intensive_listening_2023_list.ts!")

def main():
    t_start = time.time()
    for t in range(1, 11):
        generate_test_data(t)
    generate_list_file()
    print(f"\nALL 10 TESTS GENERATED SUCCESSFULLY in {time.time()-t_start:.1f}s!")

if __name__ == "__main__":
    main()
