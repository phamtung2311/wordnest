import pymupdf
from PIL import Image
import numpy as np
import os

def crop_box(arr, padding=5, threshold=235):
    h, w = arr.shape
    mask = arr < threshold
    rows = np.any(mask, axis=1)
    cols = np.any(mask, axis=0)
    if not np.any(rows) or not np.any(cols):
        return 0, 0, w, h
    rmin, rmax = np.where(rows)[0][[0, -1]]
    cmin, cmax = np.where(cols)[0][[0, -1]]
    return max(0, cmin - padding), max(0, rmin - padding), min(w, cmax + padding), min(h, rmax + padding)

def crop_graphic_above_text(img_crop):
    arr = np.array(img_crop.convert('L'))
    h, w = arr.shape
    row_has_content = np.any(arr < 235, axis=1)
    
    in_block = False
    block_start = 0
    block_end = h
    gap_count = 0
    
    for r in range(h):
        if row_has_content[r]:
            if not in_block:
                in_block = True
                block_start = r
            gap_count = 0
        else:
            if in_block:
                gap_count += 1
                if gap_count >= 5: # 5 consecutive white rows means graphic ended
                    block_end = r - gap_count
                    break
                    
    graphic_arr = arr[block_start:block_end, :]
    col_has_content = np.any(graphic_arr < 235, axis=0)
    if np.any(col_has_content):
        cmin, cmax = np.where(col_has_content)[0][[0, -1]]
        return img_crop.crop((max(0, cmin - 3), max(0, block_start - 3), min(w, cmax + 4), min(h, block_end + 4)))
    return img_crop

def extract_test_images(test_num):
    out_dir = f"public/images/intensive/test{test_num}_2024"
    os.makedirs(out_dir, exist_ok=True)
    pdf_path = f"public/tests/listening2024_{test_num}.pdf"
    doc = pymupdf.open(pdf_path)
    
    # 1. Part 1 Images: Q1-Q6
    # Page 3 (idx 2): Q1, Q2
    # Page 4 (idx 3): Q3, Q4
    # Page 5 (idx 4): Q5, Q6
    part1_map = [
        (2, 'q1', 'top'), (2, 'q2', 'bot'),
        (3, 'q3', 'top'), (3, 'q4', 'bot'),
        (4, 'q5', 'top'), (4, 'q6', 'bot'),
    ]
    
    for page_idx, q_name, pos in part1_map:
        pix = doc[page_idx].get_pixmap(dpi=150)
        im = Image.frombytes('RGB', [pix.width, pix.height], pix.samples)
        w, h = im.size
        
        if pos == 'top':
            region = im.crop((int(w * 0.15), int(h * 0.05), int(w * 0.85), int(h * 0.45)))
        else:
            region = im.crop((int(w * 0.15), int(h * 0.50), int(w * 0.85), int(h * 0.90)))
            
        arr = np.array(region.convert('L'))
        cmin, rmin, cmax, rmax = crop_box(arr, padding=2)
        cropped = region.crop((cmin, rmin, cmax, rmax))
        out_file = os.path.join(out_dir, f"{q_name}.png")
        cropped.save(out_file)

    # 2. Part 3 Graphics
    # Q62-64: Page 9 (idx 8) top right
    p9 = doc[8].get_pixmap(dpi=150)
    im9 = Image.frombytes('RGB', [p9.width, p9.height], p9.samples)
    w9, h9 = im9.size
    reg_62 = im9.crop((int(w9 * 0.50), int(h9 * 0.05), int(w9 * 0.90), int(h9 * 0.35)))
    c62 = crop_graphic_above_text(reg_62)
    c62.save(os.path.join(out_dir, "q62_64.png"))

    # Q65-67: Page 10 (idx 9) top left
    p10 = doc[9].get_pixmap(dpi=150)
    im10 = Image.frombytes('RGB', [p10.width, p10.height], p10.samples)
    w10, h10 = im10.size
    reg_65 = im10.crop((int(w10 * 0.10), int(h10 * 0.05), int(w10 * 0.48), int(h10 * 0.28)))
    c65 = crop_graphic_above_text(reg_65)
    c65.save(os.path.join(out_dir, "q65_67.png"))

    # Q68-70: Page 10 (idx 9) top right
    reg_68 = im10.crop((int(w10 * 0.52), int(h10 * 0.05), int(w10 * 0.90), int(h10 * 0.35)))
    c68 = crop_graphic_above_text(reg_68)
    c68.save(os.path.join(out_dir, "q68_70.png"))

    # 3. Part 4 Graphics
    # Q95-97: Page 13 (idx 12) top left
    p13 = doc[12].get_pixmap(dpi=150)
    im13 = Image.frombytes('RGB', [p13.width, p13.height], p13.samples)
    w13, h13 = im13.size
    
    reg_95 = im13.crop((int(w13 * 0.08), int(h13 * 0.05), int(w13 * 0.48), int(h13 * 0.28)))
    c95 = crop_graphic_above_text(reg_95)
    c95.save(os.path.join(out_dir, "q95_97.png"))

    # Q98-100: Page 13 (idx 12) top right
    reg_98 = im13.crop((int(w13 * 0.52), int(h13 * 0.05), int(w13 * 0.92), int(h13 * 0.28)))
    c98 = crop_graphic_above_text(reg_98)
    c98.save(os.path.join(out_dir, "q98_100.png"))
    
    print(f"Extracted all 11 images for Test {test_num} into {out_dir}")

if __name__ == '__main__':
    for t in range(2, 11):
        extract_test_images(t)
    print("All tests 2-10 images extracted successfully!")
