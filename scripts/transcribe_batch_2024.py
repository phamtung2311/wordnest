import json
import time
import subprocess
import os
import numpy as np
from faster_whisper import WhisperModel
import concurrent.futures

def transcribe_test(test_num):
    json_path = f"test{test_num}_2024_segments.json"
    audio_path = f"public/audio/test{test_num}_2024.mp3"
    
    if os.path.exists(json_path) and os.path.getsize(json_path) > 1000:
        print(f"Test {test_num} segments already exist, skipping.")
        return
        
    print(f"=== Starting Test {test_num} transcription ===")
    t0 = time.time()
    cmd = ['ffmpeg', '-i', audio_path, '-f', 's16le', '-ac', '1', '-ar', '16000', '-']
    proc = subprocess.Popen(cmd, stdout=subprocess.PIPE, stderr=subprocess.DEVNULL)
    raw_audio, _ = proc.communicate()
    audio = np.frombuffer(raw_audio, np.int16).flatten().astype(np.float32) / 32768.0
    duration = len(audio) / 16000.0
    print(f"Test {test_num}: Decoded {duration:.1f}s audio in {time.time()-t0:.1f}s")
    
    # Initialize separate model per worker or reuse
    model = WhisperModel('tiny.en', device='cpu', compute_type='int8', cpu_threads=4)
    t1 = time.time()
    segments, info = model.transcribe(
        audio,
        beam_size=3,
        vad_filter=True,
        vad_parameters=dict(min_silence_duration_ms=400)
    )
    all_segs = [{'start': round(s.start, 2), 'end': round(s.end, 2), 'text': s.text.strip()} for s in segments]
    print(f"Test {test_num}: Transcribed in {time.time()-t1:.1f}s, segments: {len(all_segs)}")
    
    with open(json_path, 'w', encoding='utf-8') as f:
        json.dump(all_segs, f, ensure_ascii=False, indent=2)
    print(f"Saved {json_path}")

if __name__ == '__main__':
    # Run 2 tests in parallel using ThreadPoolExecutor or ProcessPoolExecutor
    # ProcessPool is better for CPU-bound tasks in Python
    from concurrent.futures import ProcessPoolExecutor
    
    tests_to_run = [x for x in range(3, 11) if not os.path.exists(f"test{x}_2024_segments.json")]
    print(f"Tests to transcribe: {tests_to_run}")
    
    with ProcessPoolExecutor(max_workers=2) as executor:
        executor.map(transcribe_test, tests_to_run)
    print("All transcriptions completed!")
