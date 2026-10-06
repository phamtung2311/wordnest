import re

def patch_listening():
    file = 'app/listening-test/[id]/page.tsx'
    with open(file, 'r') as f:
        content = f.read()

    # 1. Update useState
    content = content.replace(
        "const [partialResults, setPartialResults] = useState<{answered: number, correct: number, key: any} | null>(null);",
        "const [partialResults, setPartialResults] = useState<any>(null);"
    )

    # 2. Update handlePartialCheck
    old_func = """  const handlePartialCheck = () => {
    const key = getLcAnswers(testId);
    let answered = 0;
    let correct = 0;
    for (const [qStr, ans] of Object.entries(answers)) {
      answered++;
      if (key[qStr] === ans) correct++;
    }
    setPartialResults({ answered, correct, key });
    setAppState('partial_reviewing');
  };"""
    new_func = """  const handlePartialCheck = () => {
    const key = getLcAnswers(testId);
    let answered = 0;
    let correct = 0;
    let part1 = { correct: 0, total: 6 };
    let part2 = { correct: 0, total: 25 };
    let part3 = { correct: 0, total: 39 };
    let part4 = { correct: 0, total: 30 };

    for (const [qStr, ans] of Object.entries(answers)) {
      answered++;
      const qNum = parseInt(qStr);
      const isCorrect = key[qStr] === ans;
      if (isCorrect) {
        correct++;
        if (qNum <= 6) part1.correct++;
        else if (qNum <= 31) part2.correct++;
        else if (qNum <= 70) part3.correct++;
        else part4.correct++;
      }
    }
    setPartialResults({ answered, correct, part1, part2, part3, part4, key });
    setAppState('partial_reviewing');
  };"""
    content = content.replace(old_func, new_func)

    # 3. Update footer
    old_footer = """        {appState === 'partial_reviewing' && (
          <div className="absolute bottom-0 w-full p-4 bg-white border-t border-[#213a34]/10 shrink-0 flex justify-between items-center">
            <div className="font-bold text-[#213a34]">
              Đã làm: <span className="text-gray-700">{partialResults?.answered}</span> | Đúng: <span className="text-green-600">{partialResults?.correct}</span>
            </div>
            <button onClick={() => setAppState('playing')} className="bg-[#213a34] hover:bg-[#1a2f2a] text-white font-bold py-3 px-6 rounded-full transition-colors shadow-sm">
              Tiếp tục làm bài
            </button>
          </div>
        )}"""
    new_footer = """        {appState === 'partial_reviewing' && (
          <div className="absolute bottom-0 w-full p-4 bg-white border-t border-[#213a34]/10 shrink-0 flex justify-between items-center gap-4">
            <div className="font-bold text-[#213a34] flex gap-3 overflow-x-auto whitespace-nowrap scrollbar-none items-center text-sm md:text-base">
              <div>Đã làm: <span className="text-gray-700">{partialResults?.answered}</span> | Đúng: <span className="text-green-600">{partialResults?.correct}</span></div>
              <div className="h-4 w-px bg-gray-300"></div>
              <div>P1: <span className="text-green-600">{partialResults?.part1?.correct}</span>/6</div>
              <div>P2: <span className="text-green-600">{partialResults?.part2?.correct}</span>/25</div>
              <div>P3: <span className="text-green-600">{partialResults?.part3?.correct}</span>/39</div>
              <div>P4: <span className="text-green-600">{partialResults?.part4?.correct}</span>/30</div>
            </div>
            <button onClick={() => setAppState('playing')} className="bg-[#213a34] hover:bg-[#1a2f2a] text-white font-bold py-3 px-6 rounded-full transition-colors shadow-sm whitespace-nowrap">
              Tiếp tục
            </button>
          </div>
        )}"""
    content = content.replace(old_footer, new_footer)

    with open(file, 'w') as f:
        f.write(content)

def patch_reading():
    file = 'app/practice-test/[id]/page.tsx'
    with open(file, 'r') as f:
        content = f.read()

    # 1. Update useState
    content = content.replace(
        "const [partialResults, setPartialResults] = useState<{answered: number, correct: number, key: any} | null>(null);",
        "const [partialResults, setPartialResults] = useState<any>(null);"
    )

    # 2. Update handlePartialCheck
    old_func = """  const handlePartialCheck = () => {
    const key = getAnswers(testId);
    let answered = 0;
    let correct = 0;
    for (const [qStr, ans] of Object.entries(answers)) {
      answered++;
      if (key[qStr] === ans) correct++;
    }
    setPartialResults({ answered, correct, key });
    setAppState('partial_reviewing');
  };"""
    new_func = """  const handlePartialCheck = () => {
    const key = getAnswers(testId);
    let answered = 0;
    let correct = 0;
    let part5 = { correct: 0, total: 30 };
    let part6 = { correct: 0, total: 16 };
    let part7 = { correct: 0, total: 54 };

    for (const [qStr, ans] of Object.entries(answers)) {
      answered++;
      const qNum = parseInt(qStr);
      const isCorrect = key[qStr] === ans;
      if (isCorrect) {
        correct++;
        if (qNum <= 130) part5.correct++;
        else if (qNum <= 146) part6.correct++;
        else part7.correct++;
      }
    }
    setPartialResults({ answered, correct, part5, part6, part7, key });
    setAppState('partial_reviewing');
  };"""
    content = content.replace(old_func, new_func)

    # 3. Update footer
    old_footer = """        {appState === 'partial_reviewing' && (
          <div className="absolute bottom-0 w-full p-4 bg-white border-t border-[#213a34]/10 shrink-0 flex justify-between items-center">
            <div className="font-bold text-[#213a34]">
              Đã làm: <span className="text-gray-700">{partialResults?.answered}</span> | Đúng: <span className="text-green-600">{partialResults?.correct}</span>
            </div>
            <button onClick={() => setAppState('playing')} className="bg-[#213a34] hover:bg-[#1a2f2a] text-white font-bold py-3 px-6 rounded-full transition-colors shadow-sm">
              Tiếp tục làm bài
            </button>
          </div>
        )}"""
    new_footer = """        {appState === 'partial_reviewing' && (
          <div className="absolute bottom-0 w-full p-4 bg-white border-t border-[#213a34]/10 shrink-0 flex justify-between items-center gap-4">
            <div className="font-bold text-[#213a34] flex gap-3 overflow-x-auto whitespace-nowrap scrollbar-none items-center text-sm md:text-base">
              <div>Đã làm: <span className="text-gray-700">{partialResults?.answered}</span> | Đúng: <span className="text-green-600">{partialResults?.correct}</span></div>
              <div className="h-4 w-px bg-gray-300"></div>
              <div>P5: <span className="text-green-600">{partialResults?.part5?.correct}</span>/30</div>
              <div>P6: <span className="text-green-600">{partialResults?.part6?.correct}</span>/16</div>
              <div>P7: <span className="text-green-600">{partialResults?.part7?.correct}</span>/54</div>
            </div>
            <button onClick={() => setAppState('playing')} className="bg-[#213a34] hover:bg-[#1a2f2a] text-white font-bold py-3 px-6 rounded-full transition-colors shadow-sm whitespace-nowrap">
              Tiếp tục
            </button>
          </div>
        )}"""
    content = content.replace(old_footer, new_footer)

    with open(file, 'w') as f:
        f.write(content)

patch_listening()
patch_reading()
print("Patched stats.")
