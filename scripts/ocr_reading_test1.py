import os
import re
import time
import pymupdf
import enchant
from rapidocr_onnxruntime import RapidOCR

d = enchant.Dict('en_US')

def segment_word(word):
    # Only try segmenting words that are longer than 4 chars and not recognized by enchant
    if len(word) <= 4 or d.check(word):
        return word
    n = len(word)
    memo = {}
    
    def dp(start):
        if start == n:
            return []
        if start in memo:
            return memo[start]
        for end in range(n, start, -1):
            sub = word[start:end]
            if len(sub) == 1 and sub.lower() not in ('a', 'i'):
                continue
            if d.check(sub) or (sub.isupper() and len(sub) <= 4):
                rest = dp(end)
                if rest is not None:
                    memo[start] = [sub] + rest
                    return memo[start]
        memo[start] = None
        return None

    res = dp(0)
    return ' '.join(res) if res else word

def clean_ocr_text(text):
    if not text:
        return ''
    # Split camelCase: "EnnisPhotography" -> "Ennis Photography"
    text = re.sub(r'([a-z])([A-Z])', r'\1 \2', text)
    # Split number followed by letter: "121.Ennis" -> "121. Ennis"
    text = re.sub(r'(\d+\.)([A-Za-z])', r'\1 \2', text)
    # Normalize common OCR artifacts
    text = text.replace('，', ', ').replace('。', '. ')
    tokens = text.split(' ')
    cleaned = []
    for tok in tokens:
        if not tok:
            continue
        m = re.match(r'^([^a-zA-Z]*)([a-zA-Z]+)([^a-zA-Z]*)$', tok)
        if m:
            prefix, w, suffix = m.groups()
            cleaned.append(prefix + segment_word(w) + suffix)
        else:
            cleaned.append(tok)
    return ' '.join(cleaned)

def process_pdf(input_path, output_path):
    print(f"Starting OCR text layer injection for: {input_path}")
    start_time = time.time()
    
    engine = RapidOCR()
    doc = pymupdf.open(input_path)
    total_pages = len(doc)
    total_words_inserted = 0

    for page_idx in range(total_pages):
        page = doc[page_idx]
        t0 = time.time()
        pix = page.get_pixmap(dpi=150)
        result, _ = engine(pix.tobytes('png'))
        
        if not result:
            print(f"Page {page_idx + 1}/{total_pages}: No text detected ({time.time() - t0:.1f}s)")
            continue

        scale_x = page.rect.width / pix.width
        scale_y = page.rect.height / pix.height
        page_words = 0

        for item in result:
            box, raw_text, score = item
            cleaned = clean_ocr_text(raw_text.strip())
            if not cleaned:
                continue

            x0 = min(pt[0] for pt in box) * scale_x
            y0 = min(pt[1] for pt in box) * scale_y
            x1 = max(pt[0] for pt in box) * scale_x
            y1 = max(pt[1] for pt in box) * scale_y
            w_box = max(1.0, x1 - x0)
            h_box = max(1.0, y1 - y0)

            fontsize = max(6.0, h_box * 0.82)
            tl = pymupdf.get_text_length(cleaned, fontsize=fontsize)
            if tl > 0:
                scale = w_box / tl
                fontsize = min(h_box * 1.15, max(h_box * 0.5, fontsize * scale))
            
            baseline_y = y1 - (h_box - fontsize) * 0.25
            
            # Insert invisible text (render_mode=3)
            page.insert_text(
                pymupdf.Point(x0, baseline_y),
                cleaned,
                fontsize=fontsize,
                render_mode=3
            )
            page_words += len(cleaned.split())

        total_words_inserted += page_words
        print(f"Page {page_idx + 1}/{total_pages}: Injected {page_words} words ({time.time() - t0:.1f}s)")

    # Save with garbage collection and deflate to keep file size optimal
    temp_out = output_path + ".tmp.pdf"
    doc.save(temp_out, garbage=3, deflate=True)
    doc.close()

    os.replace(temp_out, output_path)
    elapsed = time.time() - start_time
    print(f"\nDone! Injected {total_words_inserted} words into {output_path} in {elapsed:.1f}s")

if __name__ == '__main__':
    src = "public/tests/test1.pdf.original_bak"
    dest = "public/tests/test1.pdf"
    process_pdf(src, dest)
