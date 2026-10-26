import json
import os
import sys

sys.path.append(os.path.dirname(__file__))

import build_2024_t8_p1
import build_2024_t8_p2
import build_2024_t8_p3
import build_2024_t8_p4

all_items = (
    build_2024_t8_p1.part1_items
    + build_2024_t8_p2.part2_items
    + build_2024_t8_p3.part3_items
    + build_2024_t8_p4.part4_items
)

print(f"Total Test 8 items: {len(all_items)}")
assert len(all_items) == 54, f"Expected 54 items, got {len(all_items)}"

target_path = os.path.join(os.path.dirname(__file__), "..", "data", "intensive_listening_2024_test8.ts")

json_str = json.dumps(all_items, ensure_ascii=False, indent=2)

ts_content = f"""// Dữ liệu luyện nghe chi tiết (Intensive Listening) - ETS TOEIC 2024 Test 8
// Áp dụng kỹ thuật Virtual Timestamp Slicing từ audio gốc /audio/test8_2024.mp3
// Transcript, câu hỏi và giải thích chi tiết theo đề thi ETS 2024 Test 8

import type {{ IntensiveListeningItem }} from './intensive_listening_types';

export const test8_2024_IntensiveData: IntensiveListeningItem[] = {json_str};
"""

with open(target_path, "w", encoding="utf-8") as f:
    f.write(ts_content)

print(f"Successfully generated {target_path} (size: {os.path.getsize(target_path)} bytes)")
