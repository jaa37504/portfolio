"""Remove legacy data-name=\"Footer\" blocks from design exports (SiteFooter in DesignFrame replaces them)."""
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1] / "src" / "designs"

pat = re.compile(
    r"\n        <div className=\"bg-\[#(?:fdfcfb|f5f2eb)\] border-\[#e8dfd0\] border-solid border-t-2 h-\[400px\][\s\S]*?data-name=\"Footer\">[\s\S]*?\n        </div>\n      </div>\n    </div>\n  \);",
    re.MULTILINE,
)

for p in sorted(ROOT.glob("Design*.tsx")):
    t = p.read_text(encoding="utf-8")
    if 'data-name="Footer"' not in t:
        continue
    t2, n = pat.subn("\n      </div>\n    </div>\n  );", t, count=1)
    if n:
        p.write_text(t2, encoding="utf-8")
        print("ok", p.name)
    else:
        print("skip", p.name)
