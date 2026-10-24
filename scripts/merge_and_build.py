import json
import sys
import os

sys.path.append(os.path.dirname(__file__))

from data_p1 import part1_items
from data_p2 import part2_items
from data_p3 import part3_items
from data_p4 import part4_items

all_items = part1_items + part2_items + part3_items + part4_items
print(f"Total items: {len(all_items)}")

ts_content = f"""// Dữ liệu luyện nghe chi tiết (Intensive Listening) - ETS TOEIC 2026 Test 1
// Nguồn Audio: Audio cut ETS 2026 Test 1
// Nguồn Transcript & Lời giải: Cuốn sách TRANSCRIPT2026.pdf

export interface DialogueLine {{
  id: string;
  speaker?: string;
  text: string;
  vietnamese: string;
}}

export interface QuestionOption {{
  key: 'A' | 'B' | 'C' | 'D';
  text: string;
  vietnamese?: string;
}}

export interface QuestionItem {{
  num: number;
  question: string;
  vietnameseQuestion?: string;
  options: QuestionOption[];
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  explanation?: string;
}}

export interface VocabItem {{
  word: string;
  meaning: string;
  partOfSpeech?: string;
}}

export interface IntensiveListeningItem {{
  id: string;
  part: 1 | 2 | 3 | 4;
  partTitle: string;
  questionRange: string;
  title: string;
  audioSrc: string;
  transcript: DialogueLine[];
  questions: QuestionItem[];
  vocabulary: VocabItem[];
}}

export const test1IntensiveData: IntensiveListeningItem[] = {json.dumps(all_items, ensure_ascii=False, indent=2)};

export function getIntensiveItemById(id: string): IntensiveListeningItem | undefined {{
  return test1IntensiveData.find((item) => item.id === id);
}}

export function getItemsByPart(part: 1 | 2 | 3 | 4): IntensiveListeningItem[] {{
  return test1IntensiveData.filter((item) => item.part === part);
}}
"""

target_path = os.path.join(os.path.dirname(__file__), "..", "data", "intensive_listening_test1.ts")
with open(target_path, "w", encoding="utf-8") as f:
    f.write(ts_content)

print(f"Successfully generated {target_path} with {len(all_items)} items!")
