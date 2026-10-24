import json
import os
import sys

sys.path.append(os.path.dirname(__file__))

import data_t3_p1
import data_t3_p2
import data_t3_p3
import data_t3_p4

all_items = (
    data_t3_p1.part1_items
    + data_t3_p2.part2_items
    + data_t3_p3.part3_items
    + data_t3_p4.part4_items
)

print(f"Total Test 3 items: {len(all_items)}")

target_path = os.path.join(os.path.dirname(__file__), "..", "data", "intensive_listening_test3.ts")

json_str = json.dumps(all_items, ensure_ascii=False, indent=2)

ts_content = f"""// Dữ liệu luyện nghe chi tiết (Intensive Listening) - ETS TOEIC 2026 Test 3
// Nguồn Audio: Audio cut ETS 2026 Test 3
// Nguồn Transcript & Lời giải: Cuốn sách TRANSCRIPT2026.pdf

import type {{ IntensiveListeningItem }} from './intensive_listening_test1';

export const test3IntensiveData: IntensiveListeningItem[] = {json_str};

export function getIntensiveItemById(id: string): IntensiveListeningItem | undefined {{
  return test3IntensiveData.find((item) => item.id === id);
}}

export function getItemsByPart(part: 1 | 2 | 3 | 4): IntensiveListeningItem[] {{
  return test3IntensiveData.filter((item) => item.part === part);
}}
"""

with open(target_path, "w", encoding="utf-8") as f:
    f.write(ts_content)

print(f"Successfully generated {target_path} (size: {os.path.getsize(target_path)} bytes)")
