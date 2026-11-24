import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

// Weirdest Job Title: Blind Judge Showdown
// Entry: a single job title, 60 characters at most, nothing else.
const title = "Senior Penguin Relocation Officer";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "out";
await mkdir(outDir, { recursive: true });

// Gate check: entry must be 1-60 UTF-8 characters, not only whitespace.
if (title.length < 1 || title.length > 60 || title.trim().length === 0) {
  throw new Error(`entry out of gate: ${title.length} characters`);
}
await writeFile(join(outDir, "entry.txt"), title, "utf8");
