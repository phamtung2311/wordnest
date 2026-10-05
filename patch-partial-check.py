import re

def patch_file(file, is_listening):
    with open(file, 'r') as f:
        content = f.read()

    # 1. Update AppState type
    content = content.replace(
        "type AppState = 'playing' | 'confirming' | 'result' | 'reviewing';",
        "type AppState = 'playing' | 'confirming' | 'result' | 'reviewing' | 'partial_reviewing';"
    )

    # 2. Add partialResults state
    if "const [partialResults" not in content:
        content = content.replace(
            "const [results, setResults] = useState<any>(null);",
            "const [results, setResults] = useState<any>(null);\n  const [partialResults, setPartialResults] = useState<{answered: number, correct: number, key: any} | null>(null);"
        )

    # 3. Add handlePartialCheck function
    key_func = "getLcAnswers" if is_listening else "getTestAnswers"
    partial_func = f"""
  const handlePartialCheck = () => {{
    const key = {key_func}(testId);
    let answered = 0;
    let correct = 0;
    for (const [qStr, ans] of Object.entries(answers)) {{
      answered++;
      if (key[qStr] === ans) correct++;
    }}
    setPartialResults({{ answered, correct, key }});
    setAppState('partial_reviewing');
  }};
"""
    if "const handlePartialCheck" not in content:
        content = content.replace(
            "const handlePreSubmit = () => {",
            partial_func + "\n  const handlePreSubmit = () => {"
        )

    # 4. Modify renderBubble
    old_bubble = """  const renderBubble = (q: number, opt: string) => {
    const isSelected = answers[q] === opt;
    
    if (appState === 'reviewing') {
      const isCorrectOption = results?.key[String(q)] === opt;"""
      
    new_bubble = """  const renderBubble = (q: number, opt: string) => {
    const isSelected = answers[q] === opt;
    const isAnswered = !!answers[q];
    
    if (appState === 'reviewing' || (appState === 'partial_reviewing' && isAnswered)) {
      const keyObj = appState === 'reviewing' ? results?.key : partialResults?.key;
      const isCorrectOption = keyObj?.[String(q)] === opt;"""
    content = content.replace(old_bubble, new_bubble)

    # 5. Check row class for partial_reviewing
    old_row_class = """                let rowClass = "bg-white";
                if (isReviewing && isUnanswered) {
                  rowClass = "bg-gray-200 border-gray-300 opacity-80";
                }

                return (
                  <div key={q} className={`flex items-center justify-between px-4 py-2 rounded-xl shadow-sm border border-gray-100 relative ${rowClass}`}>
                    <div className="flex items-center w-10 relative">
                      {isReviewing && isCorrect && <CheckCircle2 className="w-4 h-4 text-green-500 absolute -left-4" />}
                      {isReviewing && isWrong && <XCircle className="w-4 h-4 text-red-500 absolute -left-4" />}"""
                      
    new_row_class = """                const isPartialReviewing = appState === 'partial_reviewing';
                
                let rowClass = "bg-white";
                if (isReviewing && isUnanswered) {
                  rowClass = "bg-gray-200 border-gray-300 opacity-80";
                } else if (isPartialReviewing && !isUnanswered) {
                  rowClass = isCorrect ? "bg-green-50 border-green-100" : "bg-red-50 border-red-100";
                }

                return (
                  <div key={q} className={`flex items-center justify-between px-4 py-2 rounded-xl shadow-sm border border-gray-100 relative ${rowClass}`}>
                    <div className="flex items-center w-10 relative">
                      {(isReviewing || (isPartialReviewing && isAnswered)) && isCorrect && <CheckCircle2 className="w-4 h-4 text-green-500 absolute -left-4" />}
                      {(isReviewing || (isPartialReviewing && isAnswered)) && isWrong && <XCircle className="w-4 h-4 text-red-500 absolute -left-4" />}"""
    content = content.replace(old_row_class, new_row_class)
    
    # 6. Add isAnswered to the mapping loop so `isAnswered` is available there too (wait, in the map it is `isUnanswered = !userAns`)
    # Wait, in the map loop:
    # const isUnanswered = !userAns;
    # So isAnswered is `!!userAns`.
    # Let's fix new_row_class to use `!isUnanswered`.
    new_row_class_fixed = """                const isPartialReviewing = appState === 'partial_reviewing';
                
                let rowClass = "bg-white";
                if (isReviewing && isUnanswered) {
                  rowClass = "bg-gray-200 border-gray-300 opacity-80";
                } else if (isPartialReviewing && !isUnanswered) {
                  rowClass = isCorrect ? "bg-green-50 border-green-100" : "bg-red-50 border-red-100";
                }

                return (
                  <div key={q} className={`flex items-center justify-between px-4 py-2 rounded-xl shadow-sm border border-gray-100 relative ${rowClass}`}>
                    <div className="flex items-center w-10 relative">
                      {(isReviewing || (isPartialReviewing && !isUnanswered)) && isCorrect && <CheckCircle2 className="w-4 h-4 text-green-500 absolute -left-4" />}
                      {(isReviewing || (isPartialReviewing && !isUnanswered)) && isWrong && <XCircle className="w-4 h-4 text-red-500 absolute -left-4" />}"""
    content = content.replace(old_row_class, new_row_class_fixed)

    # 7. But wait, `isCorrect` inside the map needs the key!
    # Currently `const correctAns = results?.key?.[String(q)];`
    # We need to change that to handle partialResults
    old_correct_ans = "const correctAns = results?.key?.[String(q)];"
    new_correct_ans = "const correctAns = (appState === 'partial_reviewing' ? partialResults?.key : results?.key)?.[String(q)];"
    content = content.replace(old_correct_ans, new_correct_ans)
    
    # 8. Update footer buttons
    old_footer_playing = """        {(appState === 'playing' || appState === 'confirming') && (
          <div className="absolute bottom-0 w-full p-4 bg-white border-t border-[#213a34]/10 shrink-0 flex justify-end">
            <button onClick={handlePreSubmit} className="bg-[#f29f77] hover:bg-[#e08b63] text-white font-bold py-3 px-8 rounded-full transition-colors shadow-sm">
              Nộp bài
            </button>
          </div>
        )}"""
    new_footer_playing = """        {(appState === 'playing' || appState === 'confirming') && (
          <div className="absolute bottom-0 w-full p-4 bg-white border-t border-[#213a34]/10 shrink-0 flex justify-end gap-3">
            <button onClick={handlePartialCheck} className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-3 px-6 rounded-full transition-colors shadow-sm">
              Chấm điểm nhanh
            </button>
            <button onClick={handlePreSubmit} className="bg-[#f29f77] hover:bg-[#e08b63] text-white font-bold py-3 px-8 rounded-full transition-colors shadow-sm">
              Nộp bài
            </button>
          </div>
        )}
        
        {appState === 'partial_reviewing' && (
          <div className="absolute bottom-0 w-full p-4 bg-white border-t border-[#213a34]/10 shrink-0 flex justify-between items-center">
            <div className="font-bold text-[#213a34]">
              Đã làm: <span className="text-gray-700">{partialResults?.answered}</span> | Đúng: <span className="text-green-600">{partialResults?.correct}</span>
            </div>
            <button onClick={() => setAppState('playing')} className="bg-[#213a34] hover:bg-[#1a2f2a] text-white font-bold py-3 px-6 rounded-full transition-colors shadow-sm">
              Tiếp tục làm bài
            </button>
          </div>
        )}"""
    content = content.replace(old_footer_playing, new_footer_playing)
    
    # 9. Also update condition for showing the grid
    old_grid_cond = "{(appState === 'playing' || appState === 'reviewing' || appState === 'confirming') && ("
    new_grid_cond = "{(appState === 'playing' || appState === 'reviewing' || appState === 'confirming' || appState === 'partial_reviewing') && ("
    content = content.replace(old_grid_cond, new_grid_cond)

    with open(file, 'w') as f:
        f.write(content)
    print(f"Patched {file}")

patch_file('app/listening-test/[id]/page.tsx', True)
patch_file('app/practice-test/[id]/page.tsx', False)

