import subprocess
import os

pdf_path = "bo de 2024/LC ETS 2024 FULL.pdf"
out_dir = "public/tests"

starts = [20, 35, 49, 64, 79, 94, 108, 123, 136, 150]

for i in range(10):
    start_page = starts[i]
    if i < 9:
        end_page = starts[i+1] - 1
    else:
        end_page = 172 # or whatever the end is
    
    out_file = os.path.join(out_dir, f"listening2024_{i+1}.pdf")
    cmd = [
        "gs",
        "-sDEVICE=pdfwrite",
        "-dNOPAUSE",
        "-dBATCH",
        "-dSAFER",
        f"-dFirstPage={start_page}",
        f"-dLastPage={end_page}",
        f"-sOutputFile={out_file}",
        pdf_path
    ]
    print(f"Splitting Test {i+1}: {start_page} to {end_page}")
    subprocess.run(cmd, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
print("Done splitting LC 2024")
