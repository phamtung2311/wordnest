import glob
import re
import json

pattern = re.compile(r'"word":\s*"([^"]+)",\s*"meaning":\s*"([^"]+)",\s*"partOfSpeech":\s*"([^"]+)"')
vocab_dict = {}

for path in glob.glob("data/intensive_listening_*.ts"):
    if any(k in path for k in ["index", "types", "list"]):
        continue
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()
    for w, m, pos in pattern.findall(content):
        w_low = w.strip().lower()
        if w_low not in vocab_dict:
            vocab_dict[w_low] = {
                "word": w.strip(),
                "meaning": m.strip(),
                "partOfSpeech": pos.strip()
            }

print(f"Total unique vocabulary items: {len(vocab_dict)}")
with open("data/existing_vocab_dict.json", "w", encoding="utf-8") as f:
    json.dump(vocab_dict, f, ensure_ascii=False, indent=2)
