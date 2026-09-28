# Current Repository Checkpoint

<!-- continuity:current {"active_task":"DGM-0006","active_task_file":"tasks/TASK-DGM-0006-cgm-0-5-7-pin.md","protocol_version":"0.1.0-draft","schema":"project-continuity.current.v1"} -->

This is an as-of projection; live GitHub issues own progression. Link the owning leaf, parent ancestry and dependencies for active work.

## Program state

Phase: re-pin content helper to CGM **0.5.7** and inject always-on HSW system_block.

## Completed

- DGM-0001 (#1 / PR #2) - initial public scaffold merged to main (`0be0527`).
- DGM-0002 (#3 / PR #4) - CGM 0.5.5 @ `085aeb1`, EXPECTED_MODULES=8 + hon (`36cafd0`).
- DGM-0003 (#5 / PR #6) - hades-voice-labs explore feature + ADOPTER.md; #7 BOM strip.
- DGM-0004 (#8 / PR #9+#10) - sync JSON load + static skeleton; Ultrafast saw_files true (`e92363f`).
- DGM-0005 (#11 / PR #12) - header Paths strip + compact layout; saw_file_paths gate (`1a28119`).

## Active

- DGM-0006 (#13) - pin CGM **0.5.7** @ `c069613`; inject always-on HSW system_block; validate + verify_hsw_applied.

## Queued

- Bump hades-v2 vendor/doc-generation-modules pin after this merges.

## Blockers

- None.

## Next atomic action

Land pin PR for #13 with squash auto-merge; then bump hades-v2 vendor pin.
