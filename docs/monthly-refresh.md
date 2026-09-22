# Ops-Dashboard — monthly refresh runbook

Canonical. The routine prompt points here; where they disagree, this file wins.

## The chain

    Schedule → Routine → Outlook (M365) → GitHub data files → Pages live
                                                    └→ artifact mirrored after

The GitHub page is never downstream of the artifact. The routine writes JSON
into this repo and Pages serves it. The artifact is a mirror published *after*,
and if the artifact step fails the site is still correct.

## What the routine may write

    data/.last-check          every run, including quiet ones
    data/index.json           only when a new period is published
    data/periods/<id>.json    one file per month, id = YYYY-MM

Nothing else. `index.html` and `ksnb-render.js` are the renderer; they hold no
data and the routine must not touch them.

## Why the split

The page used to be `index.html` plus `ksnb-data-1.js`, `-2.js`, `-3.js`. Files
2 and 3 were not data — they were IIFEs that cloned `window.PERIODS[0]` and
patched fields into the copy. That meant load order was load-bearing, a month's
numbers lived in three places, and the file list grew by one every month. A
chat session cannot reproduce that byte-exactly, which is what pinned the whole
pipeline to one machine.

Now there is one JSON file per month and the renderer is untouched.

## How index.html loads

`index.html` fetches `data/index.json`, assigns the shared globals it carries
(`SERIES`, `MOM`, `MOM_CASH`, `MOM_CASH_NOTE`, `MOM_CALLOUT`) onto `window`,
fetches every period listed in its manifest into `window.PERIODS`, and only
then injects `ksnb-render.js`. That injection order is what the three old
`<script>` tags used to guarantee.

Fetches try `data/` first and fall back to
`https://ttrng3.github.io/Ops-Dashboard/`, so the same file works as the Pages
site, as an artifact, or as a local copy.

## The heartbeat

`data/.last-check` is written on **every** run, even when Outlook has nothing
new. Two reasons:

- It separates "ran, nothing new" from "stopped running". Only `index.json`
  cannot tell those apart, and they need different responses.
- It exercises the write path monthly. A credential that silently expires is
  found by the next heartbeat, not by a missing quarter of data.

`.github/workflows/freshness-check.yml` reads both clocks daily and opens an
issue when either is too old (run > 10d, data > 45d).

## Verifying a run — never fetch the live site

Confirm `main` moved using the commit sha the write returned, and read the file
back. Do **not** `curl` or `WebFetch` https://ttrng3.github.io/ from a routine:
cloud egress rejects it with `CONNECT 403`, and WebFetch then raises a
permission prompt that nobody is there to answer, so the run parks at
`requires_action` with its work already committed. That is exactly how the
2026-09-22 run ended. Pages propagation is not observable from the sandbox —
say so rather than claiming a success you did not see.

## Report, don't fake

If a source cannot be read, keep the prior value, label it on the page, and
name the missing indicator. Never infer a number, never carry one forward
silently. A visibly stale figure is recoverable; an invented one is not.

## Credentials

The routine authenticates through the GitHub MCP tools its cloud session is
given. There is no PAT in this tree and none in Drive is used any more — the
old `gh_ops_pat.txt` path is retired. Never echo, paste or commit a token.

## Checking a build before pushing

`tools/reconcile.py` diffs two `data/` trees and names the authoritative copy
by generation stamp. Run it against the live tree before publishing a rebuild.
