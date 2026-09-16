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

OUTPUT_CSS = (
    ROOT
    / "src"
    / "styles"
    / "bootstrap-icons-subset.css"
)

used_icons = set()

# Encontra todos os Bootstrap Icons usados no projeto
for file in SRC.rglob("*"):
    if file.suffix.lower() not in {".js", ".jsx", ".ts", ".tsx"}:
        continue

    text = file.read_text(encoding="utf-8")
    used_icons.update(re.findall(r"\bbi-[a-z0-9-]+\b", text))

# Lê o CSS oficial do Bootstrap Icons
css = BOOTSTRAP_CSS.read_text(encoding="utf-8")

# Obtém os codepoints Unicode de cada ícone
icon_map = {
    f"bi-{name}": codepoint.lower()
    for name, codepoint in re.findall(
        r'\.bi-([a-z0-9-]+)::before\s*{\s*content:\s*"\\([0-9a-fA-F]+)"',
        css,
    )
}

missing = sorted(
    icon for icon in used_icons
    if icon not in icon_map
)

if missing:
    print("ERRO: ícones sem correspondência:")

    for icon in missing:
        print(icon)

    raise SystemExit(1)

OUTPUT_CSS.parent.mkdir(
    parents=True,
    exist_ok=True
)

lines = [
    "/* Bootstrap Icons subset — generated automatically */",
    "",
    "@font-face {",
    '  font-family: "bootstrap-icons";',
    '  src: url("/fonts/bootstrap-icons-subset.woff2") format("woff2");',
    "  font-style: normal;",
    "  font-weight: normal;",
    "  font-display: block;",
    "}",
    "",
    ".bi::before,",
    '[class^="bi-"]::before,',
    '[class*=" bi-"]::before {',
    "  display: inline-block;",
    '  font-family: "bootstrap-icons" !important;',
    "  font-style: normal;",
    "  font-weight: normal !important;",
    "  font-variant: normal;",
    "  text-transform: none;",
    "  line-height: 1;",
    "  vertical-align: -0.125em;",
    "  -webkit-font-smoothing: antialiased;",
    "  -moz-osx-font-smoothing: grayscale;",
    "}",
    "",
]

for icon in sorted(used_icons):
    codepoint = icon_map[icon]

    lines.append(
        f'.{icon}::before {{ content: "\\{codepoint}"; }}'
    )

OUTPUT_CSS.write_text(
    "\n".join(lines) + "\n",
    encoding="utf-8",
)

print(
    f"CSS criado com {len(used_icons)} ícones."
)

print(
    f"Ficheiro: {OUTPUT_CSS}"
)

print(
    f"Tamanho: {OUTPUT_CSS.stat().st_size / 1024:.2f} KB"
)