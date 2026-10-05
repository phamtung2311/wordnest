import re

file = 'app/page.tsx'
with open(file, 'r') as f:
    content = f.read()

# 1. Ensure useState and useEffect are imported (they already are at the top, but TopBar is at the bottom).
# Let's add the state inside TopBar.
topbar_func_start = """}) {
  const router = useRouter();"""
topbar_func_new = """}) {
  const router = useRouter();
  const [activeHash, setActiveHash] = useState('');

  useEffect(() => {
    setActiveHash(window.location.hash || '#home');
    const handleHashChange = () => setActiveHash(window.location.hash || '#home');
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);"""
if 'const [activeHash, setActiveHash]' not in content:
    content = content.replace(topbar_func_start, topbar_func_new)

# 2. Update the buttons classes
# We will use regex or string replace.
def replace_button_class(label, hash_value):
    global content
    old_btn_pattern = re.compile(r'(<button[^>]+>[\s\n]*' + label + r'[\s\n]*</button>)', re.MULTILINE)
    match = old_btn_pattern.search(content)
    if match:
        btn_str = match.group(1)
        # Find className="..."
        class_match = re.search(r'className="([^"]+)"', btn_str)
        if class_match:
            old_classes = class_match.group(1)
            # Remove hardcoded bg and hover colors that represent active state
            base_classes = old_classes.replace('rounded-full', '').replace('bg-[#f8d467]', '').replace('hover:bg-[#f3c943]', '').replace('hover:bg-[#e9f2ed]', '').strip()
            # Clean up double spaces
            base_classes = ' '.join(base_classes.split())
            
            new_class_attr = f'className={{`rounded-full {base_classes} ${{activeHash === "{hash_value}" ? "bg-[#f8d467] hover:bg-[#f3c943]" : "hover:bg-[#e9f2ed]"}}`}}'
            new_btn_str = btn_str[:class_match.start()] + new_class_attr + btn_str[class_match.end():]
            content = content.replace(btn_str, new_btn_str)

replace_button_class('Trang chủ', '#home')
replace_button_class('Bộ từ', '#library')
replace_button_class('Đời sống', '#life')
replace_button_class('Giới thiệu', '#about')

with open(file, 'w') as f:
    f.write(content)
print("Patched TopBar classes")
