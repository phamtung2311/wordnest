import re

def update_selection_page(filepath):
    with open(filepath, 'r') as f:
        content = f.read()
    
    # Add tests2023 array
    if 'tests2023' not in content:
        content = content.replace(
            "const tests2024 = Array.from({ length: 10 }, (_, i) => ({ id: `2024-${i + 1}`, name: `ETS 2024 Đề ${i + 1}` }));",
            "const tests2024 = Array.from({ length: 10 }, (_, i) => ({ id: `2024-${i + 1}`, name: `ETS 2024 Đề ${i + 1}` }));\n  const tests2023 = Array.from({ length: 10 }, (_, i) => ({ id: `2023-${i + 1}`, name: `ETS 2023 Đề ${i + 1}` }));"
        )
    
    # Update getTestName
    if "testId.startsWith('2023-')" not in content:
        content = content.replace(
            "if (testId.startsWith('2024-')) return `ETS 2024 Đề ${testId.replace('2024-', '')}`;",
            "if (testId.startsWith('2024-')) return `ETS 2024 Đề ${testId.replace('2024-', '')}`;\n    if (testId.startsWith('2023-')) return `ETS 2023 Đề ${testId.replace('2023-', '')}`;"
        )

    # Add the grid for 2023
    if 'Bộ đề ETS 2023' not in content:
        # replace the last grid mapping for 2024 to add 2023 below it
        # find the end of 2024 grid
        content = content.replace(
            "tests2024.map((test) =>",
            "tests2024.map((test) =>" # Just to make sure we find it
        )
        
        # We can just append the block before the last </div></div> for the container.
        # But maybe easier to replace with regex.
        # Actually I can just write a quick regex
        block = """
          <h2 className="font-bold text-xl mb-4 text-[#213a34]">Bộ đề ETS 2023</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
            {tests2023.map((test) => (
              <button
                key={test.id}
                onClick={() => router.push(`/%ROUTE%/${test.id}`)}
                className="flex flex-col items-center justify-center bg-[#e9f2ed] hover:bg-[#d5e5db] transition-colors rounded-2xl p-4 border border-[#213a34]/10 group"
              >
                <div className="bg-white p-3 rounded-full mb-3 shadow-sm group-hover:scale-110 transition-transform">
                  <%ICON% className="w-6 h-6 text-[#f29f77]" />
                </div>
                <span className="font-bold text-[#213a34] text-center text-sm">{test.name}</span>
              </button>
            ))}
          </div>
        """
        route = 'practice-test' if 'practice' in filepath else 'listening-test'
        icon = 'FileText' if 'practice' in filepath else 'Headphones'
        block = block.replace('%ROUTE%', route).replace('%ICON%', icon)
        
        # Insert before {history.length > 0 &&
        content = content.replace(
            "{history.length > 0 &&",
            block + "\n        {history.length > 0 &&"
        )
    with open(filepath, 'w') as f:
        f.write(content)

update_selection_page('app/practice-test/page.tsx')
update_selection_page('app/listening-test/page.tsx')

def update_test_page(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    # Helper function for Year extraction
    # We can replace the inline ternary with a function or just a complex regex.
    # Actually, a better approach is to add a helper function at the top of the component!
    # But since it's already using ternary, we can just rewrite it.
    
    # Replace test name title
    content = re.sub(
        r'\{testId.toString\(\)\.startsWith\("2024-"\)\s*\?\s*`ETS 2024 Đề \$\{testId\.toString\(\)\.replace\("2024-", ""\)\}`\s*:\s*`ETS 2026 Đề \$\{testId\}`\}',
        r'{testId.toString().includes("-") ? `ETS ${testId.toString().split("-")[0]} Đề ${testId.toString().split("-")[1]}` : `ETS 2026 Đề ${testId}`}',
        content
    )
    
    # Replace PDF src
    if 'reading2024' in content or 'test${testId}' in content:
        # We can just match the src attribute
        content = re.sub(
            r'src=\{testId\.toString\(\)\.startsWith\("2024-"\)\s*\?\s*`/tests/(reading|listening)2024_\$\{testId\.toString\(\)\.replace\("2024-", ""\)\}\.pdf`\s*:\s*`/tests/(test|listening)\$\{testId\}\.pdf`\}',
            r'src={testId.toString().includes("-") ? `/tests/\1${testId.toString().split("-")[0]}_${testId.toString().split("-")[1]}.pdf` : `/tests/\2${testId}.pdf`}',
            content
        )
        
    # Replace audio src
    if 'audio' in content:
        content = re.sub(
            r'src=\{testId\.toString\(\)\.startsWith\("2024-"\)\s*\?\s*`/audio/test\$\{testId\.toString\(\)\.replace\("2024-", ""\)\}_2024\.mp3`\s*:\s*`/audio/test\$\{testId\}\.mp3`\}',
            r'src={testId.toString().includes("-") ? `/audio/test${testId.toString().split("-")[1]}_${testId.toString().split("-")[0]}.mp3` : `/audio/test${testId}.mp3`}',
            content
        )

    with open(filepath, 'w') as f:
        f.write(content)

update_test_page('app/practice-test/[id]/page.tsx')
update_test_page('app/listening-test/[id]/page.tsx')
