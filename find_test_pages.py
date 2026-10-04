import pytesseract
from PIL import Image
import os

def find_tests(prefix, num_pages):
    print(f"--- {prefix} ---")
    tests_found = []
    for i in range(1, num_pages + 1):
        filename = f"_raw_materials/pdfs/{prefix}-{i:03d}.jpg"
        if os.path.exists(filename):
            try:
                # We can crop the top part of the image to speed it up and avoid false positives
                img = Image.open(filename)
                w, h = img.size
                img_crop = img.crop((0, 0, w, int(h * 0.3)))
                text = pytesseract.image_to_string(img_crop).upper()
                if "TEST" in text and ("01" in text or "02" in text or "03" in text or "04" in text or "05" in text or "06" in text or "07" in text or "08" in text or "09" in text or "10" in text or "1" in text or "2" in text):
                    print(f"Possible Cover Page: {i} - {text.replace('\n', ' ').strip()[:50]}")
                    tests_found.append(i)
            except Exception as e:
                pass
    return tests_found

find_tests('lc_full', 146)
find_tests('rc_full', 300)
