import re

def patch_file(file):
    with open(file, 'r') as f:
        content = f.read()
    
    content = content.replace(
        'className="grid grid-cols-2 gap-x-8 gap-y-4 max-w-xl mx-auto pb-20"',
        'className="grid grid-cols-1 gap-y-4 max-w-xs mx-auto pb-20"'
    )
    
    with open(file, 'w') as f:
        f.write(content)
    print(f"Patched {file}")

patch_file('app/listening-test/[id]/page.tsx')
patch_file('app/practice-test/[id]/page.tsx')
