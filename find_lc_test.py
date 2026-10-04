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
                img_crop = img.crop((0, 0, w, int(h * 0.2)))
                text = pytesseract.image_to_string(img_crop).upper()
                if "TEST" in text:
                    print(f"Page {i}: {text.replace(chr(10), ' ')}")
            except Exception as e:
                pass

find_tests('lc_full', 146)
