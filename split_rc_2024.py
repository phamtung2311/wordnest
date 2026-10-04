import subprocess
import os

pdf_path = "bo de 2024/reading.pdf"
out_dir = "public/tests"

starts = [20, 50, 80, 110, 140, 170, 200, 230, 260, 290]

for i in range(10):
    start_page = starts[i]
    end_page = start_page + 29
    
    out_file = os.path.join(out_dir, f"reading2024_{i+1}.pdf")
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
print("Done splitting RC 2024")
