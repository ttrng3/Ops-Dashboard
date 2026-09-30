# CLAUDE.md — Ops-Dashboard

OMNI's KSNB budget and cash-flow dashboard, entity **OMNI**. Page title "Dashboard Giám sát Ngân sách & Dòng tiền — KSNB". Live: https://ttrng3.github.io/Ops-Dashboard/

**If you are the scheduled routine:** follow the file your prompt names, `docs/monthly-refresh.md`, the canonical runbook. It outranks this file. This file adds no step to a run.

## Commands
- No email address in `data/` (runbook, "What the routine may write"; must print nothing, exit 1): `grep -rE '[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[a-z]{2,}' data/` (add `-i` to catch an uppercase domain, per `REVIEW.md`)
- Every period in the manifest has a file, and all share one key set (a quick check, not full validation): `python3 -c "import json,os;d=json.load(open('data/index.json'));m=[p['id'] for p in d['periods'] if not os.path.exists('data/periods/%s.json'%p['id'])];assert not m,m;k=[set(json.load(open('data/periods/%s.json'%p['id']))) for p in d['periods']];assert all(x==k[0] for x in k),'keys differ';print(len(k),'periods,',len(k[0]),'keys each')"`
- Build the Cowork preview page, only when `index.html` changed: `python3 tools/build-fragment.py` (writes `build/artifact.html`, which `.gitignore` does not cover: never commit it; never send `index.html` itself to the Cowork preview — Pages does serve it)
- Compare two `data/` trees: `python3 tools/reconcile.py <dir-a> <dir-b>` (exit 0 = same)
- Freshness check, as the daily Action runs it: `python3 .github/scripts/freshness.py`

## Layout
- `index.html` and `ksnb-render.js` are the renderer and hold no data. A refresh never touches them or the stylesheet.
- Data: `data/index.json` (manifest `periods`, shared `globals`, `generatedUtc`), `data/periods/<YYYY-MM>.json` (one file per month), `data/.last-check` (heartbeat, not published).
- `.pages-allow` lists what Pages publishes; `.github/workflows/pages.yml` deploys only that. Every tracked file under a watched area needs a `.pages-allow` line (published, or `!` for known but not published); a new kind of file needs Ty's say-so and that line in its own PR first.
- `archive/status_*.html` is the retired snapshot series; it is not published.
- There is no README. The runbook explains the data model and load order; `REVIEW.md` holds the reviewer's rules.

## Rules
- Changes reach `main` through a PR and Ty's ship. The routine's data writes are the only direct writes.
- The runbook wins over this file and any memory note.
- One routine writes this repo; the older weekly one was retired on 2026-09-25 (runbook, "Cadence"). Do not revive it.
- Never write a Cowork preview URL or artifact id, a folder id, a person's name or email, or a secret into this public repo.
- Entity separation: this is OMNI (Ty, 2026-09-29, `REVIEW.md`). Never bring in another company's data, names or numbers.

## Known mistakes
- The repo is called Ops-Dashboard but the page is the KSNB dashboard: the same thing. A name match once called one of them a duplicate (2026-09-25).
- "Thư mục Drive cục bộ 09 TCKT" in the period notes is a Google Drive folder, not a Mac path (2026-09-25).
- Accounting now delivers some reports to the Drive folder and chat instead of email, so a clean Outlook scan alone does not show that no report was issued (2026-09-16).
- Curling or WebFetching the live site from a routine parked a run at `requires_action` with its work already committed (2026-09-22).
- Two email addresses reached `data/` and had to be scrubbed; they remain in older git history (2026-09-24).
- A period file once dropped easy-to-miss keys (`sources`, `limits`, `legal`, `appendix`); the key-set check above catches that (2026-09-25).
- `ksnb-render.js` colours charts and 12.5 px table numbers from the CSS variable names, so the accents are text-safe inks; renaming a variable breaks the charts (2026-09-24).
- A dead second `:root` block once aliased `--blue` and `--green` to one colour (2026-09-24).
