import os
import subprocess
from PIL import Image
import numpy as np

def crop_part1_page(im):
    w, h = im.size
    gray = np.array(im.convert('L'))
    
    # Top photo (Q1/Q3/Q5)
    # Search region: x: 0.16 to 0.84, y: 0.05 to 0.49
    top_region = gray[int(h*0.05):int(h*0.49), int(w*0.16):int(w*0.84)]
    top_mask = top_region < 230
    row_counts = np.sum(top_mask, axis=1)
    col_counts = np.sum(top_mask, axis=0)
    valid_rows = np.where(row_counts > 40)[0]
    valid_cols = np.where(col_counts > 40)[0]
    
    y1_top = int(h*0.05) + valid_rows[0] - 2
    y2_top = int(h*0.05) + valid_rows[-1] + 2
    x1_top = int(w*0.16) + valid_cols[0] - 2
    x2_top = int(w*0.16) + valid_cols[-1] + 2
    
    # Bottom photo (Q2/Q4/Q6)
    # Search region: x: 0.16 to 0.84, y: 0.51 to 0.87 (avoid bottom footer)
    bot_region = gray[int(h*0.51):int(h*0.87), int(w*0.16):int(w*0.84)]
    bot_mask = bot_region < 230
    row_counts = np.sum(bot_mask, axis=1)
    col_counts = np.sum(bot_mask, axis=0)
    valid_rows = np.where(row_counts > 40)[0]
    valid_cols = np.where(col_counts > 40)[0]
    
    y1_bot = int(h*0.51) + valid_rows[0] - 2
    y2_bot = int(h*0.51) + valid_rows[-1] + 2
    x1_bot = int(w*0.16) + valid_cols[0] - 2
    x2_bot = int(w*0.16) + valid_cols[-1] + 2
    
    top_crop = im.crop((max(0, x1_top), max(0, y1_top), min(w, x2_top), min(h, y2_top)))
    bot_crop = im.crop((max(0, x1_bot), max(0, y1_bot), min(w, x2_bot), min(h, y2_bot)))
    return top_crop, bot_crop

def crop_graphic(im, x_min_ratio, y_min_ratio, x_max_ratio, y_max_ratio):
    w, h = im.size
    gray = np.array(im.convert('L'))
    sub = gray[int(h*y_min_ratio):int(h*y_max_ratio), int(w*x_min_ratio):int(w*x_max_ratio)]
    mask = sub < 210
    valid_rows = np.where(np.sum(mask, axis=1) > 15)[0]
    valid_cols = np.where(np.sum(mask, axis=0) > 15)[0]
    if len(valid_rows) == 0 or len(valid_cols) == 0:
        return im.crop((int(w*x_min_ratio), int(h*y_min_ratio), int(w*x_max_ratio), int(h*y_max_ratio)))
    y1 = int(h*y_min_ratio) + valid_rows[0] - 3
    y2 = int(h*y_min_ratio) + valid_rows[-1] + 3
    x1 = int(w*x_min_ratio) + valid_cols[0] - 3
    x2 = int(w*x_min_ratio) + valid_cols[-1] + 3
    return im.crop((max(0, x1), max(0, y1), min(w, x2), min(h, y2)))

def process_test(test_idx):
    pdf_path = f"public/tests/listening2023_{test_idx}.pdf"
    out_dir = f"public/images/intensive/test{test_idx}_2023"
    os.makedirs(out_dir, exist_ok=True)
    temp_dir = f"/tmp/render_t{test_idx}"
    os.makedirs(temp_dir, exist_ok=True)
    
    print(f"[Test {test_idx}] Rendering PDF pages...")
    # Render PDF pages with pdftoppm (150 dpi)
    cmd = ["pdftoppm", "-png", "-r", "150", pdf_path, f"{temp_dir}/p"]
    subprocess.run(cmd, check=True)
    
    # Identify pages
    if test_idx == 1:
        p1_pg = f"{temp_dir}/p-04.png"
        p2_pg = f"{temp_dir}/p-05.png"
        p3_pg = f"{temp_dir}/p-06.png"
        g62_pg = f"{temp_dir}/p-10.png"
        g65_68_pg = f"{temp_dir}/p-11.png"
        g95_98_pg = f"{temp_dir}/p-14.png"
    else:
        p1_pg = f"{temp_dir}/p-01.png"
        p2_pg = f"{temp_dir}/p-02.png"
        p3_pg = f"{temp_dir}/p-03.png"
        g62_pg = f"{temp_dir}/p-07.png"
        g65_68_pg = f"{temp_dir}/p-08.png"
        g95_98_pg = f"{temp_dir}/p-11.png"
        
    # Crop Part 1
    im1 = Image.open(p1_pg)
    q1, q2 = crop_part1_page(im1)
    q1.save(f"{out_dir}/q1.png")
    q2.save(f"{out_dir}/q2.png")
    
    im2 = Image.open(p2_pg)
    q3, q4 = crop_part1_page(im2)
    q3.save(f"{out_dir}/q3.png")
    q4.save(f"{out_dir}/q4.png")
    
    im3 = Image.open(p3_pg)
    q5, q6 = crop_part1_page(im3)
    q5.save(f"{out_dir}/q5.png")
    q6.save(f"{out_dir}/q6.png")
    
    # Crop Graphics
    img62 = Image.open(g62_pg)
    q62 = crop_graphic(img62, 0.50, 0.05, 0.88, 0.26)
    q62.save(f"{out_dir}/q62_64.png")
    
    img65_68 = Image.open(g65_68_pg)
    q65 = crop_graphic(img65_68, 0.15, 0.05, 0.48, 0.28)
    q65.save(f"{out_dir}/q65_67.png")
    
    q68 = crop_graphic(img65_68, 0.50, 0.05, 0.88, 0.28)
    q68.save(f"{out_dir}/q68_70.png")
    
    img95_98 = Image.open(g95_98_pg)
    q95 = crop_graphic(img95_98, 0.15, 0.05, 0.48, 0.28)
    q95.save(f"{out_dir}/q95_97.png")
    
    q98 = crop_graphic(img95_98, 0.50, 0.05, 0.88, 0.28)
    q98.save(f"{out_dir}/q98_100.png")
    
    # Cleanup temp
    subprocess.run(["rm", "-rf", temp_dir])
    print(f"[Test {test_idx}] Cropped 11 images to {out_dir}")

def main():
    for t in range(1, 11):
        process_test(t)
    print("ALL 10 TESTS cropped successfully!")

if __name__ == "__main__":
    main()
