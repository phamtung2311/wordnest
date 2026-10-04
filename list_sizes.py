import os
def print_sorted_sizes(prefix, num_pages):
    sizes = []
    for i in range(1, num_pages + 1):
        filename = f"_raw_materials/pdfs/{prefix}-{i:03d}.jpg"
        if os.path.exists(filename):
            sizes.append((i, os.path.getsize(filename)))
    sizes.sort(key=lambda x: x[1])
    print(f"--- {prefix} ---")
    print("Smallest 15:")
    for page, size in sizes[:15]:
        print(f"Page {page:03d}: {size}")
    print("Largest 15:")
    for page, size in sizes[-15:]:
        print(f"Page {page:03d}: {size}")

print_sorted_sizes('lc_full', 146)
print_sorted_sizes('rc_full', 300)
