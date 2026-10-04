const fs = require('fs');
const file = 'app/listening-test/[id]/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// 1. In handleSelect, save to localStorage
content = content.replace(
  /const handleSelect = \(q: number, opt: string\) => \{\n\s+if \(appState === 'playing'\) \{\n\s+setAnswers\(prev => \(\{ \.\.\.prev, \[q\]: opt \}\)\);\n\s+\}\n\s+\};/g,
  `const handleSelect = (q: number, opt: string) => {
    if (appState === 'playing') {
      setAnswers(prev => {
        const newAnswers = { ...prev, [q]: opt };
        try {
          localStorage.setItem(\`toeic_listening_progress_\${testId}\`, JSON.stringify(newAnswers));
        } catch (e) {}
        return newAnswers;
      });
    }
  };`
);

// 2. In useEffect, load from localStorage
content = content.replace(
  /useEffect\(\(\) => \{\n\s+setMounted\(true\);\n\s+\}, \[\]\);/g,
  `useEffect(() => {
    setMounted(true);
    try {
      const savedProgress = localStorage.getItem(\`toeic_listening_progress_\${testId}\`);
      if (savedProgress) {
        setAnswers(JSON.parse(savedProgress));
      }
    } catch (e) {}
  }, [testId]);`
);

// 3. In calculateResults, clear localStorage
content = content.replace(
  /setAppState\('result'\);\n\s+try \{/g,
  `setAppState('result');
    
    try {
      localStorage.removeItem(\`toeic_listening_progress_\${testId}\`);
    } catch (e) {}
    
    try {`
);

fs.writeFileSync(file, content);
console.log('Patched listening test [id] page');
