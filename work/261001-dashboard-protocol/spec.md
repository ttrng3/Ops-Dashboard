# Spec (awaiting Ty)

Status: awaits Ty's explicit approval of this text.

- `verification/dashboard.md`: promise, clean state, 4 steps (script, live page in Chrome, console, preview), invariants, adversary, sanctioned substitutes, evidence, not covered, traps.
- `tools/verify_live.py` (stdlib only, not served): 14 verdicts as JSON, exit 0 only when all pass: well-formed periods, newest first and unique; a file per period, each with its own id and the shared key set; live equals `main` for every served file; private files (and one retired archive snapshot) exist and 404; heartbeat ≤ 20 days and data ≤ 45 days; every tracked text file read; no personal traces, Drive ids or preview tags in any served or tracked file (by count and file); forbidden words, supplied at run time, absent from served files as a reader sees them.
- No change to the page, renderer, data, `.pages-allow` or runbook.
- Promise: on 01/10 step 1 prints `"pass": true` against the live site and step 2 prints four trues; each drill breakage fails its own verdict and an untouched copy passes.
