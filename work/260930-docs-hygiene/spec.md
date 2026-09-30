# Spec

Status: approved by Ty 30/09 ("approve for all eight specs", in chat).

- `.pages-allow` header: the sentence saying every run is a dry run until Pages is set to GitHub Actions is replaced with one saying a run that stages deploys the allowlisted files, even when coverage turns it red; Pages has run from Actions since 2026-09-29 (`gh api repos/ttrng3/Ops-Dashboard/pages` → build_type workflow, checked 30/09). The runbook's run-age threshold says 20d, matching the workflow's MAX_RUN_AGE_DAYS (it said 10d in one place).
- The runbook's routine trigger id and the two Drive folder ids are replaced with "kept in the routine prompt" (checked 30/09: the prompt holds both folder ids, so resolving by id still works).
- Comment and doc text only: no published path, workflow or run step changes. Promise: the next Pages run is green and serves the same files.
