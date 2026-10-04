import os
from PIL import Image, ImageStat

def find_covers(prefix, num_pages):
    stats = []
    for i in range(1, num_pages + 1):
        filename = f"_raw_materials/pdfs/{prefix}-{i:03d}.jpg"
        if os.path.exists(filename):
            try:
                img = Image.open(filename).convert('L')
                stat = ImageStat.Stat(img)
                # stat.mean[0] -> mean brightness (0-255)
                # stat.stddev[0] -> standard deviation
                stats.append((i, stat.mean[0], stat.stddev[0]))
            except Exception as e:
                pass
    
    # Sort by stddev (ascending) -> pages with least text
    stats.sort(key=lambda x: x[2])
    print(f"--- {prefix} ---")
    print("Lowest 20 StdDev (Likely Covers):")
    for page, mean, stddev in stats[:20]:
        print(f"Page {page:03d}: Mean={mean:.2f}, StdDev={stddev:.2f}")

find_covers('lc_full', 146)
find_covers('rc_full', 300)
