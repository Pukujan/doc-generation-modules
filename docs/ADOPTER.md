# Adopter pin guide

How a product repo (first: **hades-v2**) consumes Doc Generation Modules without vendoring writing rules into DGM.

## Why pin

DGM is an optional **HTML + vanilla JS** explore hub: global citation register → per-feature glossary → associated files. Your product keeps its own docs and domain ownership; this repo stays the shell + templates.

## Pin options

### A. Git submodule (preferred)

```bash
git submodule add https://github.com/Pukujan/doc-generation-modules.git vendor/doc-generation-modules
cd vendor/doc-generation-modules
git checkout <pin-sha>   # record the SHA in your adopter issue/PR
```

Serve the explore hub:

```bash
python -m http.server 8765 --directory vendor/doc-generation-modules/explore
# open http://127.0.0.1:8765/
```

### B. Side-by-side vendor path

Clone next to the product (example layout on a Windows workstation):

```text
<workspace>/
  hades-v2/
  doc-generation-modules/   # pin SHA recorded in docs
```

Open `doc-generation-modules/explore/` the same way. Document the absolute-or-relative path only in private device notes; shared docs should name the repo + SHA, not a machine path.

## Hosting a product doc set

1. **Reuse DGM sample features** when they already describe your product (hades voice labs ships as `explore/features/hades-voice-labs.html` in this repo).
2. **Or overlay adopter-owned data** without forking the shell:
   - Keep using `explore/app.js` / `explore/feature.js` / `explore/styles.css`.
   - Add JSON under your product (see `examples/adopter-register.overlay.json`) and either:
     - contribute a feature page back into DGM when it is a shared template, or
     - copy the two HTML shells and point `window.DGM_FEATURE_DATA` at your JSON id served beside them.
3. Every register card needs: `id`, `title`, `summary`, `href`, and `citations[]` with clickable `label` + `href` (feature page and/or GitHub issues).
4. Every feature JSON needs: `glossary[]` (`term`, `definition`) then `files[]` (`path`, `role`).

## Click gate (required before claiming FE)

Do **not** claim the explore UI works until [jev-ultrafast](https://github.com/Pukujan/jev-ultrafast) exercises the clicks:

```bash
# from DGM root (or via the adopter wrapper that points at the same explore URL)
python scripts/run_explore_click_gate.py \
  --ultrafast-root <path-to-jev-ultrafast> \
  --base-url http://127.0.0.1:8765/
```

Preferred live Ultrafast (when `OPENROUTER_API_KEY` is set):

```bash
cd <jev-ultrafast>
uv run --env-file .env python examples/run.py \
  --url http://127.0.0.1:8765/ \
  --goal 'Open the doc register. Click Open feature page for hades-voice-labs. Confirm glossary and associated files are visible. Click Back to register. Stop when those steps succeeded.'
```

Attach the Ultrafast log or artifact path to the adopter issue/PR. Render-alone evidence is not enough.

## Content and continuity helpers stay outside

- **CGM** (content / filename rules) is pinned separately; do not edit it from DGM or from the adopter for DGM's sake.
- **PCM** continuity bindings belong to each repo that opts in; DGM's `.continuity/` is DGM's own.

## First adopter checklist (hades-v2)

- [ ] Submodule (or documented vendor path) at an explicit DGM SHA
- [ ] Voice labs register/feature reachable (DGM sample and/or hades overlay)
- [ ] Citations into feature pages + hades-v2 #99 / #153 / adopter issue
- [ ] Ultrafast click evidence recorded
- [ ] Product work via issue + PR; no direct `main` product commits

See also: `tests/explore_click_gate.md`, `docs/HELPER_PINS.md`.
