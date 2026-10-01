#!/usr/bin/env python3
"""Machine half of verification/dashboard.md: is what Pages serves what main says, and is main sound?

Run from an up-to-date checkout of main, on the Mac (never from the routine: runbook, live-site fetches):
  git pull --ff-only && python3 tools/verify_live.py --forbid WORD [WORD ...]

--forbid takes words that must not appear on a served file (another entity's name, a person's name or
handle that leaked before). The runner supplies them so the list can change without a PR; docs may name
the other entity's label. Without them the entity check fails rather than passing unchecked.

Prints one JSON object of verdicts and exits 0 only when every verdict is true.
Personal traces, Drive ids and preview tags are reported by count and file, never by value.
"""
import argparse, datetime as dt, glob, hashlib, html, json, pathlib, re, subprocess, sys, time, unicodedata, urllib.request, urllib.error

ROOT = pathlib.Path(__file__).resolve().parent.parent
LIVE = "https://ttrng3.github.io/Ops-Dashboard/"
# Tracked but never served (.pages-allow); each must exist on main and answer 404 live.
PRIVATE = ["CLAUDE.md", "REVIEW.md", "docs/monthly-refresh.md", "data/.last-check", "tools/build-fragment.py",
           "tools/reconcile.py", "tools/verify_live.py", "verification/dashboard.md", ".github/scripts/freshness.py",
           ".pages-allow"]
# Storage links, full email addresses, and bare handles (a word followed by an at-sign and no domain).
TRACES = re.compile(r"/personal(?=/)|sharepoint\.com|1drv\.ms|"
                    r"[\w.+-]+@[A-Za-z0-9-]+(?:\.[A-Za-z0-9-]+)*\.[A-Za-z]{2,}|\b[a-z][a-z0-9._-]{2,}@(?![\w-])", re.I)
BENIGN = re.compile(r"users\.noreply\.github\.com$|^[A-Z0-9_]+@$")  # GitHub's commit address; @UPPER@ markers
DRIVE_ID = re.compile(r"(?<![A-Za-z0-9_-])(?:1[A-Za-z0-9_-]{32}(?:[A-Za-z0-9_-]{11})?|0B[A-Za-z0-9_-]{26})(?![A-Za-z0-9_-])")
PREVIEW_TAG = re.compile(r"(?<![\w-])\d{10}-[0-9a-f]{4}(?![\w-])")  # a Cowork preview version tag
HEARTBEAT_MAX = 20  # pipeline-wiring's watchdog for this twice-monthly pipeline (cron 0 6 1,15 * *)
DATA_MAX = 45       # MAX_DATA_AGE_DAYS default in .github/scripts/freshness.py


def get(path, tries=2):
    """One retry on a network error or a 5xx: a blip must not read as a mismatch."""
    url = f"{LIVE}{path}?v={int(time.time())}"
    try:
        with urllib.request.urlopen(urllib.request.Request(url, headers={"User-Agent": "verify-live"}), timeout=30) as r:
            return r.status, r.read()
    except urllib.error.HTTPError as e:
        return get(path, tries - 1) if e.code >= 500 and tries > 1 else (e.code, b"")
    except Exception as e:
        return get(path, tries - 1) if tries > 1 else (str(e), b"")


def age_days(stamp):
    """Days since an ISO stamp ('...Z', '+00:00', 3/6-digit fractions); None if unreadable."""
    try:
        t = dt.datetime.fromisoformat(stamp.strip().replace("Z", "+00:00"))
        t = t if t.tzinfo else t.replace(tzinfo=dt.timezone.utc)
        return round((dt.datetime.now(dt.timezone.utc) - t).total_seconds() / 86400, 1)
    except (ValueError, AttributeError):
        return None


def norm(t):
    """Compare as a reader sees it: entities decoded, tags removed, NFC, case-folded."""
    return unicodedata.normalize("NFC", re.sub(r"<[^>]*>", "", html.unescape(str(t or "")))).casefold()


def git(*args):
    """Raise on a git failure: an empty answer must never read as "nothing to check"."""
    return subprocess.run(["git", *args], cwd=ROOT, capture_output=True, text=True, check=True).stdout


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--forbid", nargs="*", default=[])
    forbid = [norm(w) for w in ap.parse_args().forbid if w.strip()]
    v, info, live = {}, {}, {}

    try:
        d = json.loads((ROOT / "data/index.json").read_text(encoding="utf-8"))
    except (OSError, ValueError) as e:
        d, info["index_error"] = {}, str(e)
    periods = [p.get("id") for p in d.get("periods", []) if isinstance(p, dict)]
    files = sorted(pathlib.Path(f).stem for f in glob.glob(str(ROOT / "data/periods/*.json")))

    # The manifest lists periods newest first (the page's selector order); ids are YYYY-MM.
    v["periods_well_formed"] = bool(periods) and all(re.fullmatch(r"\d{4}-(0[1-9]|1[0-2])", str(p)) for p in periods)
    v["periods_newest_first_unique"] = periods == sorted(periods, reverse=True) and len(set(periods)) == len(periods)
    v["period_files_match"] = sorted(periods) == files
    try:
        keysets = [set(json.loads((ROOT / f"data/periods/{p}.json").read_text(encoding="utf-8"))) for p in files]
        v["period_keys_equal"] = bool(keysets) and all(k == keysets[0] for k in keysets)  # CLAUDE.md, 2026-09-25
        ids_inside = [json.loads((ROOT / f"data/periods/{p}.json").read_text(encoding="utf-8")).get("id") for p in files]
        v["period_ids_inside_match"] = ids_inside == files
    except (OSError, ValueError, AttributeError):
        v["period_keys_equal"] = v["period_ids_inside_match"] = False

    served = ["index.html", "ksnb-render.js", "data/index.json"] + [f"data/periods/{p}.json" for p in files]
    for p in served:
        st, body = get(p)
        live[p] = body
        info[p] = {"status": st, "live": hashlib.sha256(body).hexdigest()[:12],
                   "main": hashlib.sha256((ROOT / p).read_bytes()).hexdigest()[:12] if (ROOT / p).exists() else None}
    v["served_equals_main"] = all(info[p]["status"] == 200 and info[p]["live"] == info[p]["main"] for p in served)
    info["served_mismatch"] = [p for p in served if info[p]["status"] != 200 or info[p]["live"] != info[p]["main"]]
    for p in served:
        del info[p]

    work = sorted(glob.glob(str(ROOT / "work/*/intent.md")))[:1]          # any one work file, found at run time
    arch = sorted(glob.glob(str(ROOT / "archive/status_*.html")))[:1]    # the retired snapshots stay unpublished
    private = PRIVATE + [str(pathlib.Path(w).relative_to(ROOT)) for w in work + arch]
    info["private_status"] = {p: get(p)[0] for p in private}
    info["private_missing_on_main"] = [p for p in private if not (ROOT / p).exists()] + ([] if work else ["work/*/intent.md"])
    v["private_not_served"] = all(s == 404 for s in info["private_status"].values()) and not info["private_missing_on_main"]

    beat = ((ROOT / "data/.last-check").read_text(encoding="utf-8").split() or [""])[0] if (ROOT / "data/.last-check").exists() else ""
    info["heartbeat_age_days"], info["data_age_days"] = age_days(beat), age_days(str(d.get("generatedUtc", "")))
    # -1 allows clock skew; a stamp further in the future (a wrong year) would otherwise pass forever.
    v["heartbeat_fresh"] = info["heartbeat_age_days"] is not None and -1 <= info["heartbeat_age_days"] <= HEARTBEAT_MAX
    v["data_fresh"] = info["data_age_days"] is not None and -1 <= info["data_age_days"] <= DATA_MAX

    # Served files, live and on main, then every other tracked text file on main (the repo is public).
    texts = {f"live:{p}": b.decode("utf-8", "replace") for p, b in live.items()}
    texts.update({f"main:{p}": (ROOT / p).read_text(encoding="utf-8") for p in served if (ROOT / p).exists()})
    info["unreadable"] = []
    try:
        tracked = [x for x in git("ls-files", "-z").split("\0") if x]
    except subprocess.CalledProcessError:
        tracked = []
    info["tracked_files"] = len(tracked)
    for p in tracked:
        if p in served:
            continue
        try:
            texts[f"main:{p}"] = (ROOT / p).read_text(encoding="utf-8")
        except UnicodeDecodeError:
            pass  # binary file
        except OSError:
            info["unreadable"].append(p)
    v["all_tracked_read"] = bool(tracked) and not info["unreadable"]

    hits = {p: sum(1 for m in TRACES.finditer(t) if not BENIGN.search(m.group(0))) for p, t in texts.items()}
    info["traces"] = {p: n for p, n in hits.items() if n}
    v["no_personal_traces"] = not info["traces"]
    info["drive_ids_tracked"] = {k: len(DRIVE_ID.findall(t)) for k, t in texts.items() if DRIVE_ID.search(t)}
    v["no_drive_ids_tracked"] = not info["drive_ids_tracked"]   # CLAUDE.md: never a folder id in this public repo
    info["preview_tags_tracked"] = {k: len(PREVIEW_TAG.findall(t)) for k, t in texts.items() if PREVIEW_TAG.search(t)}
    v["no_preview_tags_tracked"] = not info["preview_tags_tracked"]
    served_texts = [t for k, t in texts.items() if k.split(":", 1)[1] in served]
    info["forbid_checked"] = len(forbid)
    v["no_forbidden_words"] = bool(forbid) and not any(w in norm(t) for w in forbid for t in served_texts)

    print(json.dumps({"pass": all(v.values()), "verdicts": v, "info": info}, ensure_ascii=False, indent=1))
    sys.exit(0 if all(v.values()) else 1)


if __name__ == "__main__":
    main()
