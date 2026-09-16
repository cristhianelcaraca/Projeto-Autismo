import re
import subprocess
from pathlib import Path

ROOT = Path(__file__).resolve().parent
SRC = ROOT / "src"

BOOTSTRAP_DIR = ROOT / "node_modules" / "bootstrap-icons" / "font"
BOOTSTRAP_CSS = BOOTSTRAP_DIR / "bootstrap-icons.css"
BOOTSTRAP_FONT = BOOTSTRAP_DIR / "fonts" / "bootstrap-icons.woff2"

OUTPUT_DIR = ROOT / "public" / "fonts"
OUTPUT_FONT = OUTPUT_DIR / "bootstrap-icons-subset.woff2"

used_icons = set()

# Encontra todos os bi-* realmente utilizados no projeto
for file in SRC.rglob("*"):
    if file.suffix.lower() not in {".js", ".jsx", ".ts", ".tsx"}:
        continue

    text = file.read_text(encoding="utf-8")
    used_icons.update(re.findall(r"\bbi-[a-z0-9-]+\b", text))

# Lê os Unicode correspondentes no CSS oficial
css = BOOTSTRAP_CSS.read_text(encoding="utf-8")

icon_map = {
    f"bi-{name}": codepoint
    for name, codepoint in re.findall(
        r'\.bi-([a-z0-9-]+)::before\s*{\s*content:\s*"\\([0-9a-fA-F]+)"',
        css,
    )
}

missing = sorted(icon for icon in used_icons if icon not in icon_map)

if missing:
    print("ERRO: estes ícones não foram encontrados:")
    for icon in missing:
        print(f"  {icon}")
    raise SystemExit(1)

codepoints = sorted(
    {int(icon_map[icon], 16) for icon in used_icons}
)

unicode_argument = ",".join(
    f"U+{codepoint:04X}" for codepoint in codepoints
)

OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

print(f"Ícones utilizados: {len(used_icons)}")
print(f"Codepoints: {len(codepoints)}")
print("\nA criar fonte reduzida...")

command = [
    "python",
    "-m",
    "fontTools.subset",
    str(BOOTSTRAP_FONT),
    f"--unicodes={unicode_argument}",
    f"--output-file={OUTPUT_FONT}",
    "--flavor=woff2",
    "--layout-features=*",
    "--glyph-names",
    "--symbol-cmap",
    "--legacy-cmap",
    "--notdef-glyph",
    "--notdef-outline",
    "--recommended-glyphs",
]

subprocess.run(command, check=True)

original_size = BOOTSTRAP_FONT.stat().st_size
subset_size = OUTPUT_FONT.stat().st_size

print("\nConcluído.")
print(f"Original: {original_size / 1024:.2f} KB")
print(f"Subset:   {subset_size / 1024:.2f} KB")
print(
    f"Redução:  {(1 - subset_size / original_size) * 100:.1f}%"
)
print(f"\nCriado em:\n{OUTPUT_FONT}")