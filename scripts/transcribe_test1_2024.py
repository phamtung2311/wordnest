import json
import time
import subprocess
import numpy as np
from faster_whisper import WhisperModel

print("Loading Whisper model...")
model = WhisperModel("tiny.en", device="cpu", compute_type="int8")

print("Decoding audio via ffmpeg...")
t_start = time.time()
cmd = [
    "ffmpeg", "-i", "public/audio/test1_2024.mp3",
    "-f", "s16le", "-ac", "1", "-ar", "16000", "-"
]
proc = subprocess.Popen(cmd, stdout=subprocess.PIPE, stderr=subprocess.DEVNULL)
raw_audio, _ = proc.communicate()
audio = np.frombuffer(raw_audio, np.int16).flatten().astype(np.float32) / 32768.0
duration = len(audio) / 16000.0
print(f"Decoded {duration:.1f}s of audio in {time.time() - t_start:.1f}s. Audio shape: {audio.shape}")

print("Transcribing...")
t0 = time.time()
segments, info = model.transcribe(
    audio,
    beam_size=3,
    vad_filter=True,
    vad_parameters=dict(min_silence_duration_ms=400),
)

all_segments = []
count = 0
for seg in segments:
    count += 1
    item = {
        "start": round(seg.start, 2),
        "end": round(seg.end, 2),
        "text": seg.text.strip(),
    }
    all_segments.append(item)
    if count % 40 == 0:
        print(f"[{item['start']}s / {duration:.1f}s] {item['text']}")

print(f"Done transcription in {time.time() - t0:.1f}s. Total segments: {len(all_segments)}")

with open("test1_2024_segments.json", "w", encoding="utf-8") as f:
    json.dump(all_segments, f, ensure_ascii=False, indent=2)

print("Saved test1_2024_segments.json successfully.")
