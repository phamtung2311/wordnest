import re

def patch_file(file, type_prefix):
    with open(file, 'r') as f:
        content = f.read()
    
    # 1. Add inProgress state and modify useEffect
    old_use_effect = """  useEffect(() => {
    try {
      const historyStr = localStorage.getItem('toeic_""" + type_prefix + """_history');
      if (historyStr) {
        setHistory(JSON.parse(historyStr));
      }
    } catch (e) {}
  }, []);"""
    new_use_effect = """  const [inProgress, setInProgress] = useState<Record<string, boolean>>({});

  useEffect(() => {
    try {
      const historyStr = localStorage.getItem('toeic_""" + type_prefix + """_history');
      if (historyStr) {
        setHistory(JSON.parse(historyStr));
      }
      
      const progress: Record<string, boolean> = {};
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key?.startsWith('toeic_""" + type_prefix + """_progress_')) {
          const id = key.replace('toeic_""" + type_prefix + """_progress_', '');
          progress[id] = true;
        }
      }
      setInProgress(progress);
    } catch (e) {}
  }, []);"""
    content = content.replace(old_use_effect, new_use_effect)

    # 2. Add relative class
    content = content.replace(
        'className="flex flex-col items-center justify-center bg-[#e9f2ed] hover:bg-[#d5e5db] transition-colors rounded-2xl p-4 border border-[#213a34]/10 group"',
        'className="flex flex-col items-center justify-center bg-[#e9f2ed] hover:bg-[#d5e5db] transition-colors rounded-2xl p-4 border border-[#213a34]/10 group relative"'
    )

    # 3. Add badge
    old_div = '>\n                <div className="bg-white p-3 rounded-full mb-3'
    new_div = """>\n                {inProgress[test.id] && (
                  <span className="absolute -top-2 -right-2 bg-[#f29f77] text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm z-10 border-2 border-white">
                    Đang làm
                  </span>
                )}
                <div className="bg-white p-3 rounded-full mb-3"""
    content = content.replace(old_div, new_div)
    
    with open(file, 'w') as f:
        f.write(content)
    print(f"Patched {file}")

patch_file('app/listening-test/page.tsx', 'listening')
patch_file('app/practice-test/page.tsx', 'reading')
