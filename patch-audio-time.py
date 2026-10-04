import re

file = 'app/listening-test/[id]/page.tsx'
with open(file, 'r') as f:
    content = f.read()

# 1. Add useRef to imports
if 'useRef' not in content:
    content = content.replace("import { useState, useEffect } from 'react';", "import { useState, useEffect, useRef } from 'react';")

# 2. Add audioRef definition
if 'const audioRef' not in content:
    content = content.replace(
        "const [results, setResults] = useState<any>(null);",
        "const [results, setResults] = useState<any>(null);\n  const audioRef = useRef<HTMLAudioElement>(null);\n  const lastSavedTime = useRef<number>(0);"
    )

# 3. Add restoring time in useEffect
old_use_effect = """      if (savedProgress) {
        setAnswers(JSON.parse(savedProgress));
      }
    } catch (e) {}
  }, [testId]);"""

new_use_effect = """      if (savedProgress) {
        setAnswers(JSON.parse(savedProgress));
      }
      const savedTime = localStorage.getItem(`toeic_listening_time_${testId}`);
      if (savedTime && audioRef.current) {
        audioRef.current.currentTime = Number(savedTime);
      }
    } catch (e) {}
  }, [testId]);
  
  const handleTimeUpdate = (e: React.SyntheticEvent<HTMLAudioElement>) => {
    const time = e.currentTarget.currentTime;
    if (Math.abs(time - lastSavedTime.current) > 2) {
      lastSavedTime.current = time;
      try {
        localStorage.setItem(`toeic_listening_time_${testId}`, String(time));
      } catch (err) {}
    }
  };
  
  const handlePause = (e: React.SyntheticEvent<HTMLAudioElement>) => {
    const time = e.currentTarget.currentTime;
    lastSavedTime.current = time;
    try {
      localStorage.setItem(`toeic_listening_time_${testId}`, String(time));
    } catch (err) {}
  };"""
if 'toeic_listening_time_' not in content:
    content = content.replace(old_use_effect, new_use_effect)

# 4. Clear audio time on submit
old_clear = """      localStorage.removeItem(`toeic_listening_progress_${testId}`);
    } catch (e) {}"""
new_clear = """      localStorage.removeItem(`toeic_listening_progress_${testId}`);
      localStorage.removeItem(`toeic_listening_time_${testId}`);
    } catch (e) {}"""
if 'removeItem(`toeic_listening_time_' not in content:
    content = content.replace(old_clear, new_clear)

# 5. Add ref, onTimeUpdate, onPause to audio tag
old_audio = '<audio controls className="w-full h-10 outline-none">'
new_audio = '<audio ref={audioRef} controls onTimeUpdate={handleTimeUpdate} onPause={handlePause} className="w-full h-10 outline-none">'
content = content.replace(old_audio, new_audio)

with open(file, 'w') as f:
    f.write(content)
print("Patched audio time")
