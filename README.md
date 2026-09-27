# Doc Generation Modules

> **A pin-as-submodule doc register and explore hub** - citations up front, one click into a feature glossary and its files.

## Why this exists

Teams bury module docs across folders until nobody can answer "what does this term mean?" or "which files belong to this feature?" Chat answers evaporate. DGM turns that into a **durable, browseable register** you can pin next to a product repo.

## What this project is

**Doc Generation Modules** (DGM, also called DCM) is a small **HTML + vanilla JavaScript** hub for humans and agents. It is for adopters who want an optional submodule with a global citation register and per-feature pages. It is **not** a React app, not a CMS, and not a replacement for your product's own content rules.

**Status at a glance:** scaffold ships a working explore shell, a **hades voice-labs** adopter sample, and a documented click-gating path via [jev-ultrafast](https://github.com/Pukujan/jev-ultrafast). Treat the UI as **gated**, not production-proven, until that gate is green on your machine or CI.

## What you can make or use

- **Global register** - citations with easy links into per-feature pages (`explore/index.html`).
- **Per-feature pages** - human-language glossary of terms, then the associated file list (`explore/features/`).
- **First real sample** - `hades-voice-labs` (RVC register gap, pitch floor, lab scripts) as the template other products copy.
- **Adopter pin guide** - `docs/ADOPTER.md` for submodule / vendor path + overlay JSON.
- **Optional submodule pin** - add this repo beside your product without vendoring your writing rules into it.
- **Agent contract** - `AGENTS.md` plus continuity projections so a fresh session can resume from git.

## How it works

1. Open `explore/index.html` in a local static server (or open the file directly for a quick look).
2. The register lists modules/features with citation anchors.
3. Click a feature (start with **Hades voice labs**) to open its glossary, then its file list.
4. Before trusting navigation, run the **jev-ultrafast click gate** documented in `tests/explore_click_gate.md` (script: `scripts/run_explore_click_gate.py`).

```bash
git submodule add https://github.com/Pukujan/doc-generation-modules.git vendor/doc-generation-modules
# or clone side-by-side and open explore/
python -m http.server 8765 --directory explore
```

## Evidence and boundaries

| Claim | Status | Supports | Limits | Source |
|---|---|---|---|---|
| Explore register lists hades voice-labs + sample features with citation links | shipped | `explore/index.html` + `explore/data/register.json` | Voice-labs sample is template-grade; product ownership stays with hades-v2 | [explore/index.html](explore/index.html) |
| Feature pages show glossary then file list | shipped | `explore/features/hades-voice-labs.html` | Expand per adopter; see `docs/ADOPTER.md` | [voice labs feature](explore/features/hades-voice-labs.html) |
| Click paths are gated with jev-ultrafast | planned gate / local proof | `tests/explore_click_gate.md` + `scripts/run_explore_click_gate.py` | Gate must be run locally/CI with Ultrafast checkout; FE not claimed green without it | [gate doc](tests/explore_click_gate.md) |

**Boundaries:** no React; no secrets in git; do not claim the explore UI works until the ultrafast gate plan has been executed; content/filename policy helpers stay outside this product README.

## Try it

```bash
git clone https://github.com/Pukujan/doc-generation-modules.git
cd doc-generation-modules
python -m http.server 8765 --directory explore
# then open http://127.0.0.1:8765/
# optional: follow tests/explore_click_gate.md with a jev-ultrafast checkout
```

Adopters: start at [docs/ADOPTER.md](docs/ADOPTER.md).

<!-- continuity:task-anchor DGM - product story above; agent rules in AGENTS.md -->
