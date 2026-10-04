import re

file = 'app/listening-test/[id]/page.tsx'
with open(file, 'r') as f:
    content = f.read()

# 1. handleSelect
old_select = """  const handleSelect = (q: number, opt: string) => {
    if (appState === 'playing') {
      setAnswers(prev => ({ ...prev, [q]: opt }));
    }
  };"""
new_select = """  const handleSelect = (q: number, opt: string) => {
    if (appState === 'playing') {
      setAnswers(prev => {
        const newAnswers = { ...prev, [q]: opt };
        try {
          localStorage.setItem(`toeic_listening_progress_${testId}`, JSON.stringify(newAnswers));
        } catch (e) {}
        return newAnswers;
      });
    }
  };"""
content = content.replace(old_select, new_select)

# 2. useEffect
old_effect = """  useEffect(() => {
    setMounted(true);
  }, []);"""
new_effect = """  useEffect(() => {
    setMounted(true);
    try {
      const savedProgress = localStorage.getItem(`toeic_listening_progress_${testId}`);
      if (savedProgress) {
        setAnswers(JSON.parse(savedProgress));
      }
    } catch (e) {}
  }, [testId]);"""
content = content.replace(old_effect, new_effect)

# 3. calculateResults
old_calc = """    setAppState('result');
    
    try {"""
new_calc = """    setAppState('result');
    
    try {
      localStorage.removeItem(`toeic_listening_progress_${testId}`);
    } catch (e) {}
    
    try {"""
content = content.replace(old_calc, new_calc)

with open(file, 'w') as f:
    f.write(content)
print("Patched listening test [id]")
