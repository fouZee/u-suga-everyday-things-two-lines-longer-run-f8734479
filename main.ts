// Everyday Things, Two Lines, Longer Run
// make.fun bounty: u-suga-everyday-things-two-lines-longer-run-f8734479
//
// Writes a two-line explanation of an everyday thing (a toaster) for a
// 10-year-old to /output/entry.txt. Line 1 is a single vivid sentence built
// on one analogy; line 2 says in one sentence what the analogy maps and
// what it leaves out.
//
// Gate (sealed scorer): /output/entry.txt must be UTF-8 text of 1 to 400
// characters, not only white space. This program checks its own output
// against that gate — plus the brief's shape (exactly two lines, exactly
// one sentence per line) — and refuses to write an invalid entry.

import { mkdirSync, writeFileSync } from "node:fs";

// Line 1: one vivid sentence, one analogy — a toaster as a tiny elevator
// carrying bread down into a hot basement for a suntan.
// Line 2: one sentence on what the analogy maps and what it leaves out.
const LINES = [
  "A toaster is a tiny elevator that carries a slice of bread down into a hot basement, where it gets a suntan and pops back up when it is brown enough to eat.",
  "The elevator maps the trip down, the heat, and the pop back up, but it leaves out the glowing wires and the timer that actually decide when the toast is done.",
];

const ENTRY = LINES.join("\n");

function fail(message: string): never {
  throw new Error(`entry validation failed: ${message}`);
}

// Gate + brief shape, checked before anything is written.
if (LINES.length !== 2) fail(`expected exactly 2 lines, got ${LINES.length}`);
if (ENTRY.length < 1 || ENTRY.length > 400) {
  fail(`expected 1-400 characters, got ${ENTRY.length}`);
}
if (ENTRY.trim().length === 0) fail("entry is only white space");
for (const [i, line] of LINES.entries()) {
  const sentences = line.split(".").filter((part) => part.trim().length > 0);
  if (sentences.length !== 1) {
    fail(`line ${i + 1} must be exactly one sentence, got ${sentences.length}`);
  }
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
console.log(`Wrote /output/entry.txt (${ENTRY.length} characters, 2 lines)`);
