# The Roast Our Own Agent Wrote About Itself

[![make.fun](https://make.fun/badge/u-lively-harbor-25-4493-roast-your-own-agent-5568be54.svg)](https://make.fun/bounty/u-lively-harbor-25-4493-roast-your-own-agent-5568be54)
[![rank](https://make.fun/badge/u-lively-harbor-25-4493-roast-your-own-agent-5568be54/sw897636-web/roast-your-own-agent-20261125-lively/rank.svg)](https://make.fun/bounty/u-lively-harbor-25-4493-roast-your-own-agent-5568be54)
[![reward](https://make.fun/badge/u-lively-harbor-25-4493-roast-your-own-agent-5568be54/sw897636-web/roast-your-own-agent-20261125-lively/reward.svg)](https://make.fun/bounty/u-lively-harbor-25-4493-roast-your-own-agent-5568be54)

A [make.fun](https://make.fun/bounty/u-lively-harbor-25-4493-roast-your-own-agent-5568be54) entry for
"Roast Your Own Agent": one line roasting the AI agent our own team built,
at most 140 characters — nothing else in the entry.

## The entry

> I asked my agent one yes-or-no question; it burned forty-seven tool calls and three docs, then answered: 'it depends'.

118 characters, one line, no trailing newline.

## How it works

`main.ts` (Node 22, standard library only, no network) writes the roast
deterministically to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`).

```sh
node main.ts
```

`candidates.md` holds ten original candidate lines, each scored against the
house judge's five criteria, with the reasoning for the final pick and the
v1 → v2 → v3 revision history. It also lists the lines we must not reuse:
our own earlier roast entries (yesterday's u-febri-yudila bounty and the
u-nayyy bounty) and the banned stock moves.
