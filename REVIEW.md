# REVIEW.md

What the reviewer agent (`agents/reviewer.md` in claude-config) checks on every PR to this repo. The three passes run in order, each in full. The last section holds this repo's own rules.

This file is never served: it is not in `.pages-allow`.

## Severity
- **Critical:** it will break something live or publish something it must not. A secret or token, personal data by value in a public repo, a newly served path that shouldn't be, a broken deploy, data loss, a gate bypass.
- **High:** wrong behaviour that will show up. A bug on a path that runs, a broken reference, a diff that does something other than what the PR says, a house rule broken in a way Ty would have to undo.
- **Medium:** it's wrong but contained. An edge case that isn't hit yet, a doc that disagrees with the code, a missing test for a changed behaviour.
- **Low:** clarity, naming, a stale comment.

When unsure between two levels, pick the higher one and say why.

## Pass 1: Bugs
- [ ] Logic: off-by-one, inverted condition, wrong variable, an unreachable branch, loop bounds.
- [ ] Edge cases: empty input, a missing file, a first run, a name with spaces or accents, a timezone (Hanoi is UTC+7; cron is UTC).
- [ ] References resolve: every path, heading anchor, script flag, workflow job name and file named in the diff exists in `files/` or in the base.
- [ ] Shell: quoting, `set -e` interactions, `$?` after a pipe, BSD vs GNU flags (the Mac runs BSD tools).
- [ ] Syntax: YAML, JSON, Python (3.9 on the Mac: no `match`, no `X | Y` types), HTML.
- [ ] The diff does what the PR description says, and nothing it doesn't say.

## Pass 2: Security
- [ ] Secrets by pattern: `ghp_`, `github_pat_`, `sk-`, `sk-ant-`, `AKIA`, `xox[bp]-`, private-key headers, `eyJ…` JWTs (a Supabase **service_role** JWT is always Critical), passwords in URLs, `?token=`/`?key=` in a link.
- [ ] Personal data **by value** in a public repo: a name with money, a phone number, an email address, an account number, an ID number. Referring to where the value lives is fine; the value itself isn't.
- [ ] Anything newly published: a path added to `.pages-allow`, or any new file in a repo still on legacy Pages.
- [ ] Workflow permissions widened (`permissions:`, `pull_request_target`, `secrets: inherit`), or a new third-party action not pinned to a sha.
- [ ] Test fixtures build fake secrets at run time; a token-shaped string typed into a file is a finding even if it's fake.

## Pass 3: House rules
- [ ] **Never by value:** a sensitive value is referenced, not quoted, in any file of a public repo, including `work/` docs.
- [ ] **Artifact mirror contract:** no Cowork preview URL and no artifact id in anything public or anything Ty is shown. (A registry row that records an id on the private Drive mount is the exception.)
- [ ] **Entity separation:** OMNI and ECOPM data, names and numbers never cross into each other's repo or page.
- [ ] **One change per `work/` folder:** the PR names its `work/<yymmdd>-<slug>/`; `intent.md` says accepted; `spec.md` says approved; the diff matches the spec's promise, with nothing extra.
- [ ] **`gate/` untouched** while it is frozen (until 2026-10-05).
- [ ] **One PR per merge command:** nothing in the diff merges or batches PRs (`gh pr merge` in a loop, the merge API).
- [ ] **Verify before you assert:** every number in a doc or page has a source named beside it or in its section.

## Repo-specific rules
Rules specific to Ops-Dashboard. This repo has no README; **`docs/monthly-refresh.md` is the runbook and outranks the routine prompt. Every standing ruling in it applies as well; a PR that breaks one is at least High, and Critical where a line below says so.** The review input doesn't carry the runbook, so the rulings that matter most are quoted below rather than only referenced.

- **What a refresh writes.** Only `data/.last-check`, `data/index.json` and `data/periods/<YYYY-MM>.json` (runbook, "What the routine may write"). `index.html` and `ksnb-render.js` are the renderer and hold no data; a refresh that touches either is High.
- **No email address or personal name in `data/`.** The repo is public and the page promises it is anonymised. A mailbox or sender is named by role only, and `grep -rE '[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[a-z]{2,}' data/` must print nothing (runbook, "What the routine may write"). The runbook's pattern only matches a lowercase TLD, so check with `grep -riE` as well. A hit is **Critical**.
- **Load order is load-bearing.** `index.html` assigns the shared globals from `data/index.json`, fetches every period in the manifest, and only then injects `ksnb-render.js` (runbook, "How index.html loads"). A diff that changes that order, or lists a period with no file behind it, is High.
- **One file per month.** A month's numbers live in one `data/periods/<id>.json`. Reintroducing a script that patches another period's fields (the old `ksnb-data-2.js` / `-3.js` pattern, runbook "Why the split") is High.
- **Report, don't fake.** An unreadable figure keeps its prior value, labelled on the page, with the missing indicator named. An inferred number, or a value carried forward without a label, is High (runbook, "Report, don't fake").
- **The heartbeat stays.** `data/.last-check` is written every run and `freshness-check.yml` reads it. A diff that stops writing it or removes the check is High.
- **Never fetch the live site from a routine.** A routine instruction that curls or web-fetches `https://ttrng3.github.io/` is High (runbook, "Verifying a run").
- **No credentials.** No PAT; the old `gh_ops_pat.txt` is retired. A token in any file is **Critical**.
- **One address, one preview.** `https://ttrng3.github.io/Ops-Dashboard/` is the only link. A Cowork preview URL or artifact id anywhere in the repo is **Critical** (the repo is public).
- **Don't widen what is published.** A new path in `.pages-allow`, or a new kind of data in `data/`, is High and needs Ty. (Carried from Omni-TMDV's REVIEW.md; not stated in this repo's own files.)
- **Entity separation.** Inferred, not stated: the runbook's source folder is `08 Omni Service - OMNI/09 TCKT` (runbook, "Cadence"), so this is treated as an OMNI repo. Any ECOPM data (a person's or a client's name, a number, or a file from the ECOPM side) is **Critical**. The entity label itself isn't.
