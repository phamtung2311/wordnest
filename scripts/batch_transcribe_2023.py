import time
import subprocess
import json
import os
import numpy as np
from concurrent.futures import ProcessPoolExecutor
from faster_whisper import WhisperModel

OUT_DIR = "data/segments_2023"
os.makedirs(OUT_DIR, exist_ok=True)

def transcribe_one_test(test_idx):
    out_file = os.path.join(OUT_DIR, f"test{test_idx}_segments.json")
    if os.path.exists(out_file) and os.path.getsize(out_file) > 1000:
        print(f"[Test {test_idx}] Already transcribed, skipping.")
        return test_idx

    audio_path = f"public/audio/test{test_idx}_2023.mp3"
    print(f"[Test {test_idx}] Starting transcription of {audio_path}...")
    t0 = time.time()
    
    # 1. Decode via ffmpeg
    cmd = [
        "ffmpeg", "-i", audio_path,
        "-f", "s16le", "-ac", "1", "-ar", "16000", "-"
    ]
    proc = subprocess.Popen(cmd, stdout=subprocess.PIPE, stderr=subprocess.DEVNULL)
    raw_audio, _ = proc.communicate()
    audio = np.frombuffer(raw_audio, np.int16).flatten().astype(np.float32) / 32768.0
    duration = len(audio) / 16000.0
    print(f"[Test {test_idx}] Decoded {duration:.1f}s in {time.time()-t0:.1f}s.")

    # 2. Whisper
    model = WhisperModel("tiny.en", device="cpu", compute_type="int8", cpu_threads=4)
    segments, info = model.transcribe(
        audio,
        beam_size=1,
        vad_filter=True,
        vad_parameters=dict(min_silence_duration_ms=400),
    )

    all_segments = []
    for seg in segments:
        all_segments.append({
            "start": round(seg.start, 2),
            "end": round(seg.end, 2),
            "text": seg.text.strip(),
        })

    with open(out_file, "w", encoding="utf-8") as f:
        json.dump(all_segments, f, ensure_ascii=False, indent=2)

    print(f"[Test {test_idx}] Done in {time.time()-t0:.1f}s. Total segments: {len(all_segments)} -> {out_file}")
    return test_idx

def main():
    tests = list(range(2, 11))
    print(f"Starting parallel transcription for tests {tests} with 3 workers...")
    t_start = time.time()
    with ProcessPoolExecutor(max_workers=3) as executor:
        results = list(executor.map(transcribe_one_test, tests))
    print(f"All {len(results)} tests transcribed in {time.time()-t_start:.1f}s!")

if __name__ == "__main__":
    main()
