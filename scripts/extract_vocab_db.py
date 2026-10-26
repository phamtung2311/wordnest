import glob
import re
import json

vocab_dict = {}
for path in glob.glob('data/intensive_listening_*.ts'):
    if any(k in path for k in ['index', 'types', 'list']):
        continue
    try:
        with open(path, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception as e:
        continue
    
    # Match vocab objects
    pattern = r'\{\s*["\']?word["\']?\s*:\s*["\']([^"\']+)["\']\s*,\s*["\']?meaning["\']?\s*:\s*["\']([^"\']+)["\']\s*,\s*["\']?partOfSpeech["\']?\s*:\s*["\']([^"\']+)["\']'
    matches = re.findall(pattern, content)
    for w, m, pos in matches:
        w_clean = w.strip()
        w_low = w_clean.lower()
        if w_low not in vocab_dict:
            vocab_dict[w_low] = {
                'word': w_clean,
                'meaning': m.strip(),
                'partOfSpeech': pos.strip()
            }

print(f"Total vocabulary items extracted: {len(vocab_dict)}")
with open('data/existing_vocab_dict.json', 'w', encoding='utf-8') as f:
    json.dump(vocab_dict, f, ensure_ascii=False, indent=2)
