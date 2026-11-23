// main.ts — "Make the Judge Smile" (make.fun, program/v1)
// Writes one line, at most 200 characters, about a small good thing
// that happened today, to <output>/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The line itself: a warung ibu, a second fried egg at 6:12 in the
// morning, and a whispered kindness for a stranger who looked tired.
// Warmth (a gift with no reason), surprise (she noticed), one concrete
// detail (the egg, the time), in its own words.
const LINE =
  "At 6:12 this morning the warung ibu slid a second fried egg onto my rice and whispered, 'Eat, nak — today you looked like someone who needed a small win.'";

// Guard the gate: the sealed scorer only accepts 1-200 characters,
// so refuse to write anything longer instead of shipping an invalid entry.
if ([...LINE].length === 0 || [...LINE].length > 200) {
  throw new Error(`entry line is ${[...LINE].length} characters, must be 1-200`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry line is only whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const path = join(outDir, "entry.txt");
writeFileSync(path, LINE, "utf8");
console.log(`wrote ${path} (${[...LINE].length} characters)`);
