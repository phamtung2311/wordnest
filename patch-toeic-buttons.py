import re

file = 'app/page.tsx'
with open(file, 'r') as f:
    content = f.read()

content = content.replace(
    'className="rounded-full bg-[#e9f2ed] px-4 py-1.5 hover:bg-[#d5e5db] font-black text-[#213a34]"',
    'className="rounded-full px-4 py-1.5 hover:bg-[#e9f2ed] font-black text-[#213a34]"'
)

with open(file, 'w') as f:
    f.write(content)
print("Patched TOEIC buttons")
