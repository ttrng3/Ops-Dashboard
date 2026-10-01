# Verification: the KSNB dashboard

## Promise

Every file https://ttrng3.github.io/Ops-Dashboard/ serves (the page, `ksnb-render.js`, `index.json`, every period file) is byte-identical to `main`. The manifest lists well-formed `YYYY-MM` periods, newest first, each with its file, each file carrying its own id and the same key set as the others. The page offers those periods in that order and renders each with its charts and section menu, with no console error and no link to a storage host. The run and the data are fresh. No private file, personal link, email address, account handle, Drive id or Cowork preview tag sits in any served or tracked file, and no word from another entity is served. The Cowork preview carries `main`'s data or the last run's.

## Clean state

```bash
cd ~/Projects/Ops-Dashboard && git checkout main && git pull --ff-only
```
Run on the Mac, never from the routine (a live-site fetch from a routine parked a run, 22/09). Run after a refresh (the routine's cron, `0 6 1,15 * *` UTC = 13:00 Hanoi on the 1st and 15th, per pipeline-wiring's `collect_status.py` on 01/10) or after any merge, once the merge's Pages run is green (`gh run list -w "Pages (allowlist)" -L1`).

## Steps

1. **Repo and live site.** `python3 tools/verify_live.py --forbid <words>` → exit 0 and `"pass": true`. The words come from the runner's own notes (the other entity's name, any person's name or handle that leaked before). They are never written into this repo. Without `--forbid` the entity verdict fails on purpose.
2. **Live page in Chrome.** Open https://ttrng3.github.io/Ops-Dashboard/ and run the script under Invariants. Expected: the period selector lists the manifest's labels in the manifest's order, newest first; choosing each period renders its `asOf` date, at least one chart and the section menu; no link to a storage host.
3. **Console.** Reload, then read errors for `TypeError|ReferenceError|Uncaught|SyntaxError`. Expected: none.
4. **Preview.** Get the preview link from the routine's prompt (`RemoteTrigger get`). Never write it here. Find the last run: `c=$(git log --first-parent --format='%h %s' -- data/index.json | grep -v ' (#[0-9]*)$' | grep -v '^[0-9a-f]* Merge ' | head -1 | cut -d' ' -f1)`. `Artifact list` the preview's files and `Artifact read` `data/index.json` and the newest period file. Expected: the page fragment plus the data files `main` or `$c` holds, nothing else; each file read has the sha256 of `main`'s copy (`shasum -a 256 <path>`) or `$c`'s (`git show $c:<path> | shasum -a 256`). Matching only `$c` means PRs changed data since the run: behind by design until the next run.

## Invariants

Step 1 prints these verdicts, all of which must be true: `periods_well_formed`, `periods_newest_first_unique`, `period_files_match`, `period_keys_equal` (a file once dropped `sources`, `limits`, `legal`, `appendix`, 25/09), `period_ids_inside_match`, `served_equals_main`, `private_not_served`, `heartbeat_fresh` (≤ 20 days, pipeline-wiring's watchdog for this twice-monthly pipeline), `data_fresh` (≤ 45 days, `freshness.py`'s `MAX_DATA_AGE_DAYS` default), `all_tracked_read`, `no_personal_traces`, `no_drive_ids_tracked`, `no_preview_tags_tracked`, `no_forbidden_words`.

Step 2, in the page (no query strings in the fetches: the browser tool blocks them):
```js
window.confirm=()=>true; window.alert=()=>{};
await new Promise(r=>setTimeout(r,2500));
const idx=await fetch('data/index.json').then(r=>r.json());
const sel=document.getElementById('sel'), app=document.getElementById('app');
const labelsMatch=JSON.stringify([...sel.options].map(o=>o.text.trim()))===JSON.stringify(idx.periods.map(p=>p.label));
const per=[];
for(let i=0;i<idx.periods.length;i++){
  sel.value=String(i); sel.dispatchEvent(new Event('change')); await new Promise(r=>setTimeout(r,500));
  const p=await fetch(`data/periods/${idx.periods[i].id}.json`).then(r=>r.json());
  per.push(app.innerText.includes(p.asOf) && document.querySelectorAll('#app svg').length>0 && document.querySelectorAll('#nav a').length>0);
}
sel.value='0'; sel.dispatchEvent(new Event('change'));
JSON.stringify({selector_matches_manifest:labelsMatch, newest_selected_first:[...sel.options][0].text.trim()===idx.periods[0].label,
  every_period_renders:per.every(Boolean),
  no_source_links:!document.querySelector('a[href*="sharepoint"],a[href*="1drv"],a[href*="drive.google"],a[href*="personal/"]')})
```
All of them must be true.

## Adversary

- **A stranger on the public page.** `private_not_served`: CLAUDE.md, REVIEW.md, the runbook, the heartbeat, the three `tools/` scripts, this protocol, one `work/` file and one retired `archive/status_*.html` (both found at run time), `freshness.py` and `.pages-allow` all exist on `main` and answer 404 live. `no_personal_traces`, `no_drive_ids_tracked` and `no_preview_tags_tracked` read every served file live and on `main` and every other tracked text file, because the repo is public (two email addresses reached `data/` once, 24/09). Matches are reported by count and file, never by value.
- **A refresh that drops keys or a period file.** `period_keys_equal`, `period_files_match`, `period_ids_inside_match`.
- **A refresh that misorders or duplicates a period.** `periods_well_formed`, `periods_newest_first_unique`, and in the page `selector_matches_manifest`.
- **A renderer that breaks on one period only.** `every_period_renders` switches through all of them.
- **A routine that stopped running.** `heartbeat_fresh`. **A month never published:** `data_fresh`.
- **Another entity's data.** `no_forbidden_words` on served files, compared as a reader sees them (entities decoded, tags removed).

## Sanctioned substitutes

- The forbidden word list is passed on the command line, so it can change without a PR. It cannot catch a name nobody has listed; a person's name typed as plain words is read by eye.
- The preview cannot be fetched by a script, so step 4 is done by the runner with `Artifact list` and `Artifact read`.

## Evidence

- The JSON from step 1 and the JSON from step 2.
- Screenshots (`save_to_disk: true`): the page with the newest period, and with the oldest.
- For step 4: the preview's file list and the hashes read.

## Not covered

- Whether the figures equal accounting's reports in the Drive folder: the runbook's reconciliation does that, by hand, each run.
- Whether no report was issued when Outlook is quiet: accounting also delivers to the Drive folder and chat (16/09).
- Git history still holds the two email addresses removed on 24/09 (left there as the easier route Ty allowed, 01/10).

## Traps

- The script adds a cache-busting query to every request, so a `served_equals_main` failure straight after a merge means the Pages run has not finished: wait for it to go green, then re-run. Each request retries once on a network error or a 5xx.
- The selector's option values are positions (`0`, `1`, …), not period ids; step 2 compares the visible labels.
- The browser tool refuses fetches with a query string, so step 2 fetches plain paths (01/10).
- "Thư mục Drive cục bộ 09 TCKT" in the notes is a Drive folder name, not a path or an id; the id check looks only for the 33/44-character `1…` form and the 28-character `0B…` form.
