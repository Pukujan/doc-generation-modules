# TASK-DGM-0004 — Associated-files observe race

<!-- continuity:task {"acceptance":["feature.js loads JSON sync before interactable","html data-dgm-ready and roots data-loaded after fill","early Associated files marker in feature header","Ultrafast typesafe/jev-1.13 summary saw_files true","PR links #8 with squash auto-merge"],"depends_on":["DGM-0003"],"goal":"Eliminate the Associated-files observe race so Ultrafast gates see file lists and the section label reliably.","id":"DGM-0004","issue_url":"https://github.com/Pukujan/doc-generation-modules/issues/8","next_action":"land PR and arm squash auto-merge; re-run Ultrafast; bump hades-v2 DGM pin","owner":"Grok Bot","priority":"high","protocol_version":"0.1.0-draft","schema":"project-continuity.task.v1","status":"active","why":"Ultrafast run4 saw_glossary true but saw_files false due to async fetch race and 240-char text_snip truncation past the Associated files heading."} -->

- Status: active
- Owner: Grok Bot
- Priority: high
- Depends on: DGM-0003
- Issue: https://github.com/Pukujan/doc-generation-modules/issues/8
- Branch: `fix/feature-associated-files-ready`

## Goal

Eliminate the Associated-files observe race so Ultrafast gates see file lists and the section label reliably.

## Why

Ultrafast run4 saw_glossary true but saw_files false due to async fetch race and 240-char text_snip truncation past the Associated files heading.

## Allowed files

- `explore/**`
- `tests/explore_click_gate.md`
- `scripts/run_explore_click_gate.py`
- `checkpoints/CURRENT.md`
- `tasks/TASK-DGM-0004-associated-files-observe-race.md`

## Human outcome

Alex can run the explore click gate and get `saw_files: true` with glossary still visible, without racing empty file lists.

## Scope and boundaries

- In scope: feature.js sync load + readiness attrs; feature HTML early section marker; gate docs; Ultrafast re-run evidence.
- Out of scope: React; changing glossary-before-files product order; inventing click selectors in product code.
- Dependencies: hades-v2 pin bump after this merges.
## Acceptance criteria

- [ ] `explore/feature.js` loads JSON synchronously (or injected payload) and sets readiness attrs only after fill.
- [ ] Feature HTML exposes early Associated files marker and `data-dgm-ready`.
- [ ] Ultrafast `OPENROUTER_MODEL=typesafe/jev-1.13` summary has `saw_files: true`.
- [ ] PR for #8 merged via squash auto-merge.

## Checkpoint log

- 2026-09-27: sync feature JSON load, readiness attrs, early Associated files header marker; issue #8.

## Handoff

Read PROJECT ? CURRENT ? this task ? `tests/explore_click_gate.md`. Re-run Ultrafast after merge; bump hades-v2 DGM pin.
