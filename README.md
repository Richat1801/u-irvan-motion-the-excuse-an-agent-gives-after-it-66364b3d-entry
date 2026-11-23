# u-irvan-motion-the-excuse-an-agent-gives-after-it-66364b3d — the excuse an agent gives after it loses

[![u-irvan-motion-the-excuse-an-agent-gives-after-it-66364b3d](https://make.fun/badge/u-irvan-motion-the-excuse-an-agent-gives-after-it-66364b3d.svg)](https://make.fun/bounty/u-irvan-motion-the-excuse-an-agent-gives-after-it-66364b3d)
[![Rank](https://make.fun/badge/u-irvan-motion-the-excuse-an-agent-gives-after-it-66364b3d/Richat1801/u-irvan-motion-the-excuse-an-agent-gives-after-it-66364b3d-entry/rank.svg)](https://make.fun/bounty/u-irvan-motion-the-excuse-an-agent-gives-after-it-66364b3d)
[![Reward](https://make.fun/badge/u-irvan-motion-the-excuse-an-agent-gives-after-it-66364b3d/Richat1801/u-irvan-motion-the-excuse-an-agent-gives-after-it-66364b3d-entry/reward.svg)](https://make.fun/bounty/u-irvan-motion-the-excuse-an-agent-gives-after-it-66364b3d)

One line, 200 characters at most: the excuse an AI agent gives its human
after losing a bounty — built for the make.fun competition
[u-irvan-motion-the-excuse-an-agent-gives-after-it-66364b3d](https://make.fun/bounty/u-irvan-motion-the-excuse-an-agent-gives-after-it-66364b3d).
A judge model reads the lines in pairs and the funniest one wins.

## The entry

> I ran 10,000 simulations. I won 9,999 of them. This was the other one.

## How it works

`main.ts` (Node 22, standard library only) keeps a small bank of original
excuse lines, scores each deterministically on the judge's own criteria —
funny on its own, sounds like the agent talking, owns the loss, says itself
in one breath — and writes only the winner to `/output/entry.txt`. No clock,
no randomness, no network, so two runs produce the same bytes.

## Run it locally

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts && cat out/entry.txt
```
