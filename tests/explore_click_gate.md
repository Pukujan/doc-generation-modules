# Explore UI click gate (jev-ultrafast)

DGM does **not** claim the explore frontend works until this gate has been run (or CI records an equivalent Ultrafast pass).

## Why

Register → feature clicks must be exercised by [Pukujan/jev-ultrafast](https://github.com/Pukujan/jev-ultrafast): observe the page, index controls, choose `CLICK` on real elements. Do not invent selectors in product code or agent prose.

## Local path (Windows example)

1. Checkout Ultrafast (sibling is fine): `D:\claude\jev-ultrafast`
2. Serve DGM explore: `python -m http.server 8765 --directory explore` from this repo root.
3. Run the recorded Ultrafast gate under `jev-ultrafast/artifacts/dgm-hades-voice-labs-*/runN/run_gate.py` (or `scripts/run_explore_click_gate.py` for the plan-only wrapper):

```bash
python scripts/run_explore_click_gate.py --ultrafast-root D:\claude\jev-ultrafast --base-url http://127.0.0.1:8765/
```

Expected human-visible outcome for the Ultrafast goal:

1. Open the register page.
2. Click **Open feature page** for `hades-voice-labs` (first real adopter sample; `sample-register` remains a fallback demo).
3. Confirm glossary and associated files sections are visible, including at least one file path in the **first** observe snapshot (header path strip + Associated files list).
4. Click **Back to register**.

## Pass criteria (summary.json)

| Field | Required |
| --- | --- |
| `final_status` | `done` |
| `visited_feature` | `true` |
| `saw_glossary` | `true` |
| `saw_files` | `true` |
| `saw_file_paths` | `true` (literal `hades-voice-lab/` in viewport observe text) |

`saw_files` alone is not enough: Ultrafast `snapshot.js` only joins text intersecting the viewport, so long glossaries can hide the files section below the fold. Feature pages ship a compact header path strip so paths stay in the first observe.

## CI posture

GitHub Actions in this repo:

- Syntax-checks `explore/*.js` with `node --check`.
- Does **not** run paid OpenRouter Decisions by default.
- Fails the `explore-gate-doc` step if this file or the runner script is missing.

A full Ultrafast browser job can be added later when secrets/`OPENROUTER_API_KEY` and Browser Harness are available on the runner. Until then, local gate runs are the proof path.

## Status language

| Phrase | Allowed when |
| --- | --- |
| "scaffold ships explore shell" | HTML/JS present |
| "FE click paths verified" | Ultrafast gate log attached to the issue/PR with `saw_file_paths: true` |
| "explore works" | Gate green + independent visual check |

Never upgrade status on render-alone evidence.

## Feature-page readiness

Feature pages set `html[data-dgm-ready=true]` and `#glossary-root` / `#files-root` `data-loaded=true` only after glossary and associated-file list items are in the DOM. JSON is loaded synchronously from a non-`defer` script so observe gates do not race an empty `#files-root`. Header text also names **Associated files** early (`[data-testid=feature-sections]`) and ships a compact **Paths:** strip (`[data-testid=feature-file-strip]`) so viewport observes include at least one associated path. When scoring Ultrafast artifacts, require `saw_file_paths` from full observe text (or paths), not only a 240-character snip or the section label alone.