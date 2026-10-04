import os

def find_covers(prefix, num_pages):
    sizes = []
    for i in range(1, num_pages + 1):
        filename = f"_raw_materials/pdfs/{prefix}-{i:03d}.jpg"
        if os.path.exists(filename):
            sizes.append((i, os.path.getsize(filename)))
    
    # We expect 10 tests, so we want to find 10 pages that are covers.
    # Usually covers are smaller than normal pages.
    # Let's just print sizes of all pages to see the pattern.
    print(f"--- {prefix} ---")
    for page, size in sizes:
        print(f"Page {page}: {size}")

find_covers('lc_full', 146)
find_covers('rc_full', 300)
