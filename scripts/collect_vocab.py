import os
import json

vocab_dict = {}

for fname in sorted(os.listdir('data')):
    if not fname.startswith('intensive_listening_') or not fname.endswith('.ts'):
        continue
    if any(k in fname for k in ['index', 'types', '_list.ts']):
        continue
    fpath = os.path.join('data', fname)
    with open(fpath, 'r', encoding='utf-8') as f:
        text = f.read()

    pos = text.find(' = [')
    if pos == -1:
        pos = text.find(' =  [')
    if pos == -1:
        continue
    
    start_idx = pos + text[pos:].find('[')
    end_idx = text.find('\n];')
    if end_idx == -1:
        end_idx = text.rfind(']')
        array_str = text[start_idx:end_idx+1]
    else:
        array_str = text[start_idx:end_idx+2]

    try:
        data = json.loads(array_str)
        count = 0
        for it in data:
            for v in it.get('vocabulary', []):
                w = v.get('word', '').strip()
                if w and w.lower() not in vocab_dict:
                    vocab_dict[w.lower()] = {
                        'word': w,
                        'meaning': v.get('meaning', '').strip(),
                        'partOfSpeech': v.get('partOfSpeech', 'n').strip()
                    }
                    count += 1
        print(f"{fname}: extracted {count} new vocab items (total: {len(vocab_dict)})")
    except Exception as e:
        print(f"{fname} json parse error: {e}")

print(f"\nTotal vocabulary dictionary entries: {len(vocab_dict)}")
with open('data/existing_vocab_dict.json', 'w', encoding='utf-8') as f:
    json.dump(vocab_dict, f, ensure_ascii=False, indent=2)
