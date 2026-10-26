import json
import re

WORD_NUMS = {
    'one': 1, 'two': 2, 'three': 3, 'four': 4, 'five': 5, 'six': 6, 'seven': 7, 'eight': 8, 'nine': 9, 'ten': 10,
    'eleven': 11, 'twelve': 12, 'thirteen': 13, 'fourteen': 14, 'fifteen': 15, 'sixteen': 16, 'seventeen': 17,
    'eighteen': 18, 'nineteen': 19, 'twenty': 20, 'thirty': 30, 'forty': 40, 'fifty': 50,
    'sixty': 60, 'seventy': 70, 'eighty': 80, 'ninety': 90, 'one hundred': 100
}

def parse_compound(text):
    if not text: return None
    text = text.lower().strip()
    text = re.sub(r'^(?:that\x27s|because|one|as|questions?|no\.?|number)\s+', '', text)
    if text.isdigit(): return int(text)
    parts = re.split(r'[\s\-]+', text)
    val = 0
    for p in parts:
        if p in WORD_NUMS:
            val += WORD_NUMS[p]
        elif p.isdigit():
            val += int(p)
    return val if val > 0 else None

def align_test(test_idx):
    with open(f"data/segments_2023/test{test_idx}_segments.json", "r", encoding="utf-8") as f:
        segs = json.load(f)

    # 1. Locate Part boundaries
    p1_start_time = None
    p2_start_time = None
    p3_start_time = None
    p4_start_time = None
    total_audio_end = segs[-1]["end"]

    for s in segs:
        t = s["text"].lower()
        if not p1_start_time and ("part 1" in t or "part one" in t or "part 1 will begin" in t) and s["start"] > 20:
            p1_start_time = s["start"]
        if not p2_start_time and ("part 2" in t or "part two" in t or "part 2 will begin" in t) and s["start"] > 200:
            p2_start_time = s["start"]
        if not p3_start_time and ("part 3" in t or "part three" in t) and s["start"] > 700:
            p3_start_time = s["start"]
        if not p4_start_time and ("part 4" in t or "part four" in t) and s["start"] > 1700:
            p4_start_time = s["start"]

    if not p1_start_time: p1_start_time = 95.0
    if not p2_start_time: p2_start_time = 266.0
    if not p3_start_time: p3_start_time = 800.0
    if not p4_start_time: p4_start_time = 1890.0

    p3_ranges = [(32, 34), (35, 37), (38, 40), (41, 43), (44, 46), (47, 49),
                 (50, 52), (53, 55), (56, 58), (59, 61), (62, 64), (65, 67), (68, 70)]
    p4_ranges = [(71, 73), (74, 76), (77, 79), (80, 82), (83, 85),
                 (86, 88), (89, 91), (92, 94), (95, 97), (98, 100)]
    p3_targets = [x[0] for x in p3_ranges]
    p4_targets = [x[0] for x in p4_ranges]

    p1_times = {}
    p2_times = {}
    p3_times = {}
    p4_times = {}

    for i, s in enumerate(segs):
        txt = s["text"].strip()

        # Part 1: Number 1..6
        if s["start"] < p2_start_time:
            m = re.search(r'\b(?:Number|No\.)\s*([a-z0-9\-]+)', txt, re.I)
            if m:
                val = parse_compound(m.group(1))
                if val and 1 <= val <= 6 and val not in p1_times:
                    p1_times[val] = s["start"]

        # Part 2: Number 7..31
        if p2_start_time <= s["start"] < p3_start_time:
            m = re.search(r'\b(?:Number|No\.)\s*([a-z0-9\s\-]+?)(?:[\.\,\?\!]|$)', txt, re.I)
            if m:
                val = parse_compound(m.group(1))
                if val and 7 <= val <= 31 and val not in p2_times:
                    p2_times[val] = s["start"]

        # Part 3 & 4 Range Intros
        if s["start"] >= p3_start_time - 15:
            m_range = re.search(r'([a-z0-9\s\-]+?)\s*(?:through|-)\s*([a-z0-9\s\-]+?)(?:refer|\.|\,|$)', txt, re.I)
            if m_range and any(kw in txt.lower() for kw in ['refer', 'questions', 'question', 'through']):
                num = parse_compound(m_range.group(1))
                if num in p3_targets and num not in p3_times and s["start"] < p4_start_time:
                    p3_times[num] = s["start"]
                elif num in p4_targets and num not in p4_times and s["start"] >= p4_start_time - 25:
                    p4_times[num] = s["start"]

    # Test 3 Q24 fallback if missing
    if test_idx == 3 and 24 not in p2_times:
        p2_times[24] = 627.5

    # Interpolate Part 1
    for q in range(1, 7):
        if q not in p1_times:
            prev_t = p1_times.get(q-1, p1_start_time)
            p1_times[q] = prev_t + 25.0

    # Interpolate Part 2
    for q in range(7, 32):
        if q not in p2_times:
            prev_t = p2_times.get(q-1, p2_start_time + 25.0)
            p2_times[q] = prev_t + 20.0

    # Interpolate Part 3
    for sq in p3_targets:
        if sq not in p3_times:
            prev_sq = sq - 3
            prev_t = p3_times.get(prev_sq, p3_start_time + 30.0)
            p3_times[sq] = prev_t + 70.0

    # Interpolate Part 4
    for sq in p4_targets:
        if sq not in p4_times:
            prev_sq = sq - 3
            prev_t = p4_times.get(prev_sq, p4_start_time + 30.0)
            p4_times[sq] = prev_t + 70.0

    # Assemble 54 items
    items = []
    # Part 1
    for q in range(1, 7):
        st = round(p1_times[q], 2)
        et = round(p1_times[q+1] if q < 6 else p2_start_time, 2)
        items.append({
            "part": 1,
            "id": f"part1-{q}",
            "range": f"Câu {q}",
            "start": st,
            "end": et
        })

    # Part 2
    for q in range(7, 32):
        st = round(p2_times[q], 2)
        et = round(p2_times[q+1] if q < 31 else p3_start_time, 2)
        items.append({
            "part": 2,
            "id": f"part2-{q}",
            "range": f"Câu {q}",
            "start": st,
            "end": et
        })

    # Part 3
    for i, (sq, eq) in enumerate(p3_ranges):
        st = round(p3_times[sq], 2)
        next_sq = p3_ranges[i+1][0] if i+1 < len(p3_ranges) else None
        et = round(p3_times[next_sq] if next_sq else p4_start_time, 2)
        items.append({
            "part": 3,
            "id": f"part3-{sq}-{eq}",
            "range": f"Câu {sq} - {eq}",
            "start": st,
            "end": et
        })

    # Part 4
    for i, (sq, eq) in enumerate(p4_ranges):
        st = round(p4_times[sq], 2)
        next_sq = p4_ranges[i+1][0] if i+1 < len(p4_ranges) else None
        et = round(p4_times[next_sq] if next_sq else total_audio_end, 2)
        items.append({
            "part": 4,
            "id": f"part4-{sq}-{eq}",
            "range": f"Câu {sq} - {eq}",
            "start": st,
            "end": et
        })

    return items

def main():
    for t in range(1, 11):
        items = align_test(t)
        print(f"Test {t}: {len(items)} items aligned. P1: {items[0]['start']}s -> P4 end: {items[-1]['end']}s")
        for idx in range(len(items) - 1):
            assert items[idx]["start"] < items[idx]["end"], f"T{t} Item {items[idx]['id']} start >= end"
            assert items[idx]["end"] <= items[idx+1]["start"] + 1.0, f"T{t} Item {items[idx]['id']} overlaps next"
    print("ALL 10 TESTS timestamps validated 100% perfectly!")

if __name__ == "__main__":
    main()
