import os
import re
import time
import glob
import pymupdf
import enchant
from concurrent.futures import ProcessPoolExecutor
from rapidocr_onnxruntime import RapidOCR

d = enchant.Dict('en_US')

def segment_word(word):
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
    text = re.sub(r'([a-z])([A-Z])', r'\1 \2', text)
    text = re.sub(r'(\d+\.)([A-Za-z])', r'\1 \2', text)
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

def process_single_pdf(pdf_path):
    # Check if already has significant text layer
    try:
        check_doc = pymupdf.open(pdf_path)
        sample_words = 0
        for i in range(min(5, len(check_doc))):
            sample_words += len(check_doc[i].get_text('words'))
        check_doc.close()
        if sample_words > 300:
            print(f"[SKIP] {pdf_path} already has text layer ({sample_words} words in first 5 pages)")
            return pdf_path, sample_words, 0
    except Exception as e:
        print(f"[ERR] Error inspecting {pdf_path}: {e}")
        return pdf_path, 0, 0

    backup_path = pdf_path + ".original_bak"
    if not os.path.exists(backup_path):
        import shutil
        shutil.copy2(pdf_path, backup_path)
        print(f"[BACKUP] Saved backup to {backup_path}")

    start_t = time.time()
    print(f"\n[START] Processing: {pdf_path}")
    engine = RapidOCR()
    doc = pymupdf.open(backup_path)
    total_pages = len(doc)
    total_words = 0

    for page_idx in range(total_pages):
        page = doc[page_idx]
        pix = page.get_pixmap(dpi=150)
        result, _ = engine(pix.tobytes('png'))
        if not result:
            continue

        scale_x = page.rect.width / pix.width
        scale_y = page.rect.height / pix.height

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
            page.insert_text(
                pymupdf.Point(x0, baseline_y),
                cleaned,
                fontsize=fontsize,
                render_mode=3
            )
            total_words += len(cleaned.split())

    temp_out = pdf_path + ".tmp.pdf"
    doc.save(temp_out, garbage=3, deflate=True)
    doc.close()
    os.replace(temp_out, pdf_path)
    elapsed = time.time() - start_t
    print(f"[DONE] {pdf_path}: Injected {total_words} words across {total_pages} pages in {elapsed:.1f}s")
    return pdf_path, total_words, elapsed

def get_target_files():
    targets = []
    # 1. ETS 2026: tests 2 to 10 (test1 is already done)
    for i in range(2, 11):
        p = f"public/tests/test{i}.pdf"
        if os.path.exists(p):
            targets.append(p)

    # 2. ETS 2024: reading2024_1.pdf to 10
    for i in range(1, 11):
        p = f"public/tests/reading2024_{i}.pdf"
        if os.path.exists(p):
            targets.append(p)

    # 3. ETS 2023: reading2023_1.pdf to 10
    for i in range(1, 11):
        p = f"public/tests/reading2023_{i}.pdf"
        if os.path.exists(p):
            targets.append(p)

    return targets

if __name__ == '__main__':
    targets = get_target_files()
    print(f"Total target PDFs to process: {len(targets)}")
    for t in targets:
        print(f" - {t}")

    # Use 6 parallel workers to maximize throughput on 20-core CPU safely
    max_workers = 6
    print(f"\nProcessing with {max_workers} parallel workers...")
    
    start_all = time.time()
    with ProcessPoolExecutor(max_workers=max_workers) as executor:
        results = list(executor.map(process_single_pdf, targets))

    print("\n" + "=" * 50)
    print("ALL BATCH OCR PROCESSING COMPLETED!")
    total_injected = sum(r[1] for r in results)
    total_time = time.time() - start_all
    print(f"Processed {len(results)} files, injected {total_injected} words in {total_time:.1f}s")
