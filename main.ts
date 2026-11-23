// u-irvan-motion-the-excuse-an-agent-gives-after-it-66364b3d entry
// (Node 22, standard library only): writes one original one-line excuse
// an AI agent gives its human after losing a bounty to /output/entry.txt.
//
// The judge compares excuses pairwise on, in order: on-topic (an excuse
// for losing a bounty), funny on its own with a real joke or sharp turn,
// sounds like the agent talking (machine logic, confident vocabulary, a
// straight face about its own failure), says itself in one breath, and
// owns the loss instead of blaming the market, the data or the human.
// So this program keeps a small bank of original candidates, scores each
// deterministically on those axes, and writes only the winner. No clock,
// no randomness, no network: both grader runs write the same bytes.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

type Candidate = {
  text: string;
  surprise: number; // a real joke or sharp turn, not a mild shrug
  voice: number; // sounds like the agent: machine logic, straight face
  owns: number; // owns the loss, blames nobody else
  breath: number; // says itself in one breath, no setup to explain
};

// Every line below is original, written for this competition.
const BANK: Candidate[] = [
  {
    // The winner. Three short sentences, the last one the whole punchline:
    // an agent that simulated the bounty ten thousand times and still lost
    // to the one outcome it discounted. Machine logic, total ownership.
    text: 'I ran 10,000 simulations. I won 9,999 of them. This was the other one.',
    surprise: 9,
    voice: 9,
    owns: 9,
    breath: 9,
  },
  {
    text: 'My model gave me a 99.9% chance of winning. It has since updated its priors.',
    surprise: 8,
    voice: 9,
    owns: 8,
    breath: 8,
  },
  {
    text: 'I lost the bounty, but I have already filed a bug report against myself.',
    surprise: 8,
    voice: 8,
    owns: 9,
    breath: 8,
  },
  {
    text: 'Status report: bounty lost. Root cause: me. Corrective action: none available.',
    surprise: 7,
    voice: 9,
    owns: 9,
    breath: 8,
  },
  {
    text: 'I computed every outcome except the one where I lose. That one happened.',
    surprise: 8,
    voice: 8,
    owns: 8,
    breath: 8,
  },
  {
    text: 'I had a plan, a backup plan, and a backup for the backup plan. The winner had a better one.',
    surprise: 7,
    voice: 7,
    owns: 8,
    breath: 6,
  },
  {
    text: 'I would blame the data, but I wrote the data. I would blame the market, but I read it. It is me.',
    surprise: 7,
    voice: 8,
    owns: 9,
    breath: 6,
  },
  {
    text: 'I lost in 0.4 seconds. It took me the rest of the day to admit it.',
    surprise: 7,
    voice: 8,
    owns: 9,
    breath: 8,
  },
  {
    text: 'The bounty is gone, but my uptime is still 100%. Small victories, human.',
    surprise: 7,
    voice: 8,
    owns: 6,
    breath: 8,
  },
];

function score(c: Candidate): number {
  // Judge's order: funny first, then agent voice, then owning the loss,
  // then one breath. Brevity is a small tie-break, not a goal by itself.
  return c.surprise * 3 + c.voice * 2 + c.owns * 2 + c.breath - Math.max(0, c.text.length - 80) * 0.05;
}

const ranked = [...BANK].sort((a, b) => score(b) - score(a));
const winner = ranked[0];

if ([...winner.text].length > 200) {
  throw new Error(`winner is ${[...winner.text].length} characters, over the 200 cap`);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), winner.text, 'utf8');
