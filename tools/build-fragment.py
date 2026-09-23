#!/usr/bin/env python3
"""Derive build/artifact.html from index.html.

The artifact service wraps whatever you give it. A complete document therefore
nests inside another, the inner <head> is discarded, and the page renders BLANK
with no console error. So the mirror must be a FRAGMENT: no doctype, no
<html>/<head>/<body> tags.
"""
import pathlib, re

ROOT = pathlib.Path(__file__).resolve().parent.parent
src = (ROOT / "index.html").read_text(encoding="utf-8")

# The \s and > alternatives matter: a bare `[^>]*` after `<head` also matches
# `<header>`, which would silently delete every header element on the page.
WRAPPERS = re.compile(r"<!doctype[^>]*>|</?(?:html|head|body)(?:\s[^>]*)?>", re.I)

frag = WRAPPERS.sub("", src).strip()

leaked = re.findall(r"<!doctype|</?(?:html|head|body)(?:\s|>)", frag, re.I)
if leaked:
    raise SystemExit(f"REFUSING: wrapper tags survived: {leaked}")

out = ROOT / "build" / "artifact.html"
out.parent.mkdir(exist_ok=True)
out.write_text(frag, encoding="utf-8")
print(f"{out.relative_to(ROOT)}  {len(frag):,} bytes  (starts: {frag[:44]!r})")
print("publish data/ + ksnb-render.js FIRST, then this page on its own —")
print("a page sent in the same call as a large files payload has come back blank.")
