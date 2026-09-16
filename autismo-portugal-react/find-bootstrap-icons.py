import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent
SRC = ROOT / "src"
BOOTSTRAP_CSS = (
    ROOT
    / "node_modules"
    / "bootstrap-icons"
    / "font"
    / "bootstrap-icons.css"
)

# Procura todos os nomes bi-* em JSX/JS
used_icons = set()

for file in SRC.rglob("*"):
    if file.suffix.lower() not in {".js", ".jsx", ".ts", ".tsx"}:
        continue

    text = file.read_text(encoding="utf-8")
    used_icons.update(re.findall(r"\bbi-[a-z0-9-]+\b", text))

# Lê o CSS oficial do Bootstrap Icons para obter os Unicode
css = BOOTSTRAP_CSS.read_text(encoding="utf-8")

icon_map = {
    f"bi-{name}": codepoint
    for name, codepoint in re.findall(
        r"\.bi-([a-z0-9-]+)::before\s*{\s*content:\s*\"\\([0-9a-fA-F]+)\"",
        css,
    )
}

found = []
missing = []

for icon in sorted(used_icons):
    if icon in icon_map:
        found.append((icon, icon_map[icon]))
    else:
        missing.append(icon)

print(f"\nÍcones encontrados no projeto: {len(used_icons)}")
print(f"Ícones mapeados: {len(found)}")
print(f"Ícones sem correspondência: {len(missing)}\n")

for icon, codepoint in found:
    print(f"{icon:<35} U+{codepoint.upper()}")

if missing:
    print("\nSEM CORRESPONDÊNCIA:")
    for icon in missing:
        print(icon)