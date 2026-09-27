# Current Repository Checkpoint

<!-- continuity:current {"active_task":"DGM-0004","active_task_file":"tasks/TASK-DGM-0004-associated-files-observe-race.md","protocol_version":"0.1.0-draft","schema":"project-continuity.current.v1"} -->

This is an as-of projection; live GitHub issues own progression. Link the owning leaf, parent ancestry and dependencies for active work.

## Program state

Phase: explore observe reliability — Associated files visible to Ultrafast gates without async race / snip truncation.

## Completed

- DGM-0001 (#1 / PR #2) — initial public scaffold merged to main (`0be0527`).
- DGM-0002 (#3 / PR #4) — CGM 0.5.5 @ `085aeb1`, EXPECTED_MODULES=8 + hon (`36cafd0`).
- DGM-0003 (#5 / PR #6) — hades-voice-labs explore feature + ADOPTER.md; #7 BOM strip.

## Active

- DGM-0004 (#8) — sync feature JSON load + readiness; Ultrafast `saw_files` true.

## Queued

- Bump hades-v2 `vendor/doc-generation-modules` pin after this merges.

## Blockers

- None for the product fix; Ultrafast live run needs Browser Harness + OpenRouter on the workstation.

## Next atomic action

Open PR for #8 with squash auto-merge; re-run Ultrafast click gate; then pin the new SHA from hades-v2.