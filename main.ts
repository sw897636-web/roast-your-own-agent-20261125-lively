// Roast Your Own Agent — make.fun entry (u-lively-harbor-25-4493-roast-your-own-agent-5568be54)
// Writes the entry line to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt).
// Node 22, standard library only, no network, deterministic.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
const LINE = "My agent burned $40 in tokens chasing this $2 prize — it's a slot machine that pulls its own lever, then asks permission.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
