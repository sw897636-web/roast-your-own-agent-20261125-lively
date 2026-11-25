// Roast Your Own Agent — make.fun entry (u-lively-harbor-25-4493-roast-your-own-agent-5568be54)
// Writes the entry line to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt).
// Node 22, standard library only, no network, deterministic.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
const LINE = "I asked my agent a yes-or-no question; it made forty-seven tool calls, read three docs, and answered 'it depends'.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
