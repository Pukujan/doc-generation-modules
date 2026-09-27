# TASK-DGM-0005 — File paths in first Ultrafast viewport observe

<!-- continuity:task {"acceptance":["feature header path strip shows hades-voice-lab paths above the fold","compact explore feature CSS","Ultrafast typesafe/jev-1.13 summary saw_file_paths true","gate fails closed without saw_file_paths","PR links #11 with squash auto-merge"],"depends_on":["DGM-0004"],"goal":"Ensure at least one associated file path is visible in the first Ultrafast observe snapshot after opening hades-voice-labs.","id":"DGM-0005","issue_url":"https://github.com/Pukujan/doc-generation-modules/issues/11","next_action":"land PR and arm squash auto-merge; re-run Ultrafast; bump hades-v2 DGM pin","owner":"Grok Bot","priority":"high","protocol_version":"0.1.0-draft","schema":"project-continuity.task.v1","status":"active","why":"Ultrafast run6 saw_files true but saw_file_paths false because snapshot.js only joins viewport-intersecting text and the glossary filled the first screen."} -->

- Status: active
- Owner: Grok Bot
- Priority: high
- Depends on: DGM-0004
- Issue: https://github.com/Pukujan/doc-generation-modules/issues/11
- Branch: `fix/feature-file-paths-viewport`

## Goal

Ensure at least one associated file path is visible in the first Ultrafast observe snapshot after opening hades-voice-labs.

## Why

Ultrafast run6 (`typesafe/jev-1.13`) had `saw_files=true` but `saw_file_paths=false`. `snapshot.js` only joins text nodes intersecting the viewport; the long glossary pushed file paths below the fold.

## Allowed files

- `explore/**`
- `tests/explore_click_gate.md`
- `scripts/run_explore_click_gate.py`
- `checkpoints/CURRENT.md`
- `tasks/TASK-DGM-0005-file-paths-viewport-observe.md`

## Human outcome

Alex can run the explore click gate and get `saw_file_paths: true` on the first feature-page observe without scrolling.

## Scope and boundaries

- In scope: compact CSS; header path strip; shorter sample glossary copy; gate docs requiring `saw_file_paths`.
- Out of scope: React; editing CGM; changing glossary-before-files order in `<main>`.
- Dependencies: hades-v2 pin bump after this merges.

## Acceptance criteria

- [ ] Feature header ships `[data-testid=feature-file-strip]` with at least one `hades-voice-lab/` path.
- [ ] Ultrafast `OPENROUTER_MODEL=typesafe/jev-1.13` summary has `saw_file_paths: true`.
- [ ] Gate script fails closed when `saw_file_paths` is false.
- [ ] PR for #11 merged via squash auto-merge.

## Checkpoint log

- 2026-09-27: issue #11; compact CSS + header path strip; require saw_file_paths.

## Handoff

Read PROJECT → CURRENT → this task → `tests/explore_click_gate.md`. Re-run Ultrafast after merge; bump hades-v2 DGM pin.