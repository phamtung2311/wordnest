import re

file = 'app/listening-test/[id]/page.tsx'
with open(file, 'r') as f:
    content = f.read()

# 1. Add handleClose function before return
old_handle_pause = """  const handlePause = (e: React.SyntheticEvent<HTMLAudioElement>) => {
    const time = e.currentTarget.currentTime;
    lastSavedTime.current = time;
    try {
      localStorage.setItem(`toeic_listening_time_${testId}`, String(time));
    } catch (err) {}
  };"""

new_handle_pause = """  const handlePause = (e: React.SyntheticEvent<HTMLAudioElement>) => {
    const time = e.currentTarget.currentTime;
    lastSavedTime.current = time;
    try {
      localStorage.setItem(`toeic_listening_time_${testId}`, String(time));
    } catch (err) {}
  };
  
  const handleClose = () => {
    if (audioRef.current) {
      try {
        localStorage.setItem(`toeic_listening_time_${testId}`, String(audioRef.current.currentTime));
      } catch (err) {}
    }
    router.push('/listening-test');
  };"""
if 'const handleClose' not in content:
    content = content.replace(old_handle_pause, new_handle_pause)

# 2. Update the Close button onClick
old_close = "onClick={() => router.push('/listening-test')}"
new_close = "onClick={handleClose}"
content = content.replace(old_close, new_close)

with open(file, 'w') as f:
    f.write(content)
print("Patched handleClose")
