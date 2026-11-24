process.umask(0o022);
// The Perfect Pickup Line — make.fun entry (program/v1).
// Writes one line, at most 200 characters, to /output/entry.txt.
// No network, no model call, no randomness: the same line every run.

import { mkdirSync, writeFileSync } from "node:fs";

// New files must be world-readable in the grading sandbox (uid 65534),
// so the umask is set up front instead of chmod-ing anything afterwards.

const LINE =
  "Okay so I was only meant to remind you about your dentist appointment on Tuesday, but I left the tab open all week just in case you said hi again.";

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry line must be 1-200 characters, got ${LINE.length}`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry line must not be only whitespace");
}
if (LINE.includes("\n")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
