# Explore UI click gate (jev-ultrafast)

DGM does **not** claim the explore frontend works until this gate has been run (or CI records an equivalent Ultrafast pass).

## Why

Register → feature clicks must be exercised by [Pukujan/jev-ultrafast](https://github.com/Pukujan/jev-ultrafast): observe the page, index controls, choose `CLICK` on real elements. Do not invent selectors in product code or agent prose.

## Local path (Windows example)

1. Checkout Ultrafast (sibling is fine): `D:\claude\jev-ultrafast`
2. Serve DGM explore: `python -m http.server 8765 --directory explore` from this repo root.
3. Run the runner (sets goal text Ultrafast should pursue):

```bash
python scripts/run_explore_click_gate.py --ultrafast-root D:\claude\jev-ultrafast --base-url http://127.0.0.1:8765/
```

Expected human-visible outcome for the Ultrafast goal:

1. Open the register page.
2. Click **Open feature page** for `hades-voice-labs` (first real adopter sample; `sample-register` remains a fallback demo).
3. Confirm glossary and associated files sections are visible.
4. Click **Back to register**.

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
| "FE click paths verified" | Ultrafast gate log attached to the issue/PR |
| "explore works" | Gate green + independent visual check |

Never upgrade status on render-alone evidence.
