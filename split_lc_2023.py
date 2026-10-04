import subprocess
import os

pdf_path = "bo de 2023/ETS 2023 LC.pdf"
out_dir = "public/tests"

starts = [20, 36, 49, 62, 75, 88, 101, 114, 127, 140]
ends = [33, 46, 59, 72, 85, 98, 111, 124, 137, 150]

for i in range(10):
    start_page = starts[i]
    end_page = ends[i]
    
    out_file = os.path.join(out_dir, f"listening2023_{i+1}.pdf")
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
    print(f"Splitting LC Test {i+1}: {start_page} to {end_page}")
    subprocess.run(cmd, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
print("Done splitting LC 2023")
