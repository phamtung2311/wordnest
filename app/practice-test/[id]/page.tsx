'use client';

import { useParams, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function PracticeTestPlayPage() {
  const params = useParams();
  const router = useRouter();
  const testId = params.id as string;
  
  // TOEIC Reading tests usually have 100 questions (101 to 200)
  const questions = Array.from({ length: 100 }, (_, i) => 101 + i);
  const options = ['A', 'B', 'C', 'D'];
  
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSelect = (q: number, opt: string) => {
    setAnswers(prev => ({ ...prev, [q]: opt }));
  };

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#f5f0e6]">
      {/* Left Column: PDF Viewer */}
      <div className="flex h-full w-[60%] flex-col bg-gray-600 border-r border-[#213a34]/10 relative">
        {mounted && (
          <iframe 
            src={`/tests/test${testId}.pdf`} 
            className="w-full h-full border-0" 
            title={`Test ${testId} PDF`} 
          />
        )}
      </div>

      {/* Right Column: Answers / Controls */}
      <div className="flex h-full w-[40%] flex-col bg-[#e9f2ed] relative shadow-[-10px_0_15px_-3px_rgba(0,0,0,0.1)]">
        {/* Header */}
        <div className="flex justify-between items-center border-b border-[#213a34]/10 p-6 bg-white shrink-0">
          <div>
            <h2 className="font-display text-2xl font-black text-[#213a34]">Đề {testId}</h2>
            <p className="text-sm text-gray-500 font-bold mt-1">100 câu hỏi (101 - 200)</p>
          </div>
          <button
            onClick={() => router.push('/practice-test')}
            className="rounded-full bg-white border border-gray-300 px-6 py-2.5 font-bold text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Đóng
          </button>
        </div>

        {/* Answer Sheet */}
        <div className="flex-1 overflow-y-auto p-6 scrollbar-thin">
          <div className="grid grid-cols-2 gap-x-8 gap-y-4 max-w-xl mx-auto">
            {questions.map((q) => (
              <div key={q} className="flex items-center justify-between bg-white px-4 py-2 rounded-xl shadow-sm border border-gray-100">
                <span className="font-bold text-[#213a34] w-8">{q}.</span>
                <div className="flex gap-2">
                  {options.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => handleSelect(q, opt)}
                      className={`w-8 h-8 rounded-full font-bold flex items-center justify-center border-2 transition-colors ${
                        answers[q] === opt 
                          ? 'bg-[#213a34] text-white border-[#213a34]' 
                          : 'bg-white text-gray-400 border-gray-200 hover:border-[#f29f77] hover:text-[#f29f77]'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Footer actions */}
        <div className="p-4 bg-white border-t border-[#213a34]/10 shrink-0 flex justify-end">
          <button className="bg-[#f29f77] hover:bg-[#e08b63] text-white font-bold py-3 px-8 rounded-full transition-colors shadow-sm">
            Nộp bài
          </button>
        </div>
      </div>
    </div>
  );
}

