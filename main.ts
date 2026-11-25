// Everyday Things, Two Lines, Longer Run
// make.fun bounty: u-suga-everyday-things-two-lines-longer-run-f8734479
//
// Writes a two-line explanation of an everyday thing (a toaster) for a
// 10-year-old to /output/entry.txt. Line 1 is a single vivid sentence built
// on one analogy; line 2 says in one sentence what the analogy maps and
// what it leaves out.
//
// Gate (sealed scorer): /output/entry.txt must be UTF-8 text of 1 to 400
// characters, not only white space.

import { mkdirSync, writeFileSync } from "node:fs";

// Line 1: one vivid sentence, one analogy — a toaster as a tiny lift
// carrying bread down into a hot basement for a suntan.
// Line 2: one sentence on what the analogy maps and what it leaves out.
const ENTRY = [
  "A toaster is a tiny lift that carries a slice of bread down into a hot basement, where it gets a suntan and pops back up when it is brown enough to eat.",
  "The lift maps the trip down, the heat, and the pop back up, but it leaves out the wires and the timer that decide when the toast is done.",
].join("\n");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
console.log(`Wrote /output/entry.txt (${ENTRY.length} characters, 2 lines)`);
