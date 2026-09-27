# Current Repository Checkpoint

<!-- continuity:current {"active_task":"DGM-0005","active_task_file":"tasks/TASK-DGM-0005-file-paths-viewport-observe.md","protocol_version":"0.1.0-draft","schema":"project-continuity.current.v1"} -->

This is an as-of projection; live GitHub issues own progression. Link the owning leaf, parent ancestry and dependencies for active work.

## Program state

Phase: explore observe reliability — associated file paths visible in first Ultrafast viewport observe.

## Completed

- DGM-0001 (#1 / PR #2) — initial public scaffold merged to main (`0be0527`).
- DGM-0002 (#3 / PR #4) — CGM 0.5.5 @ `085aeb1`, EXPECTED_MODULES=8 + hon (`36cafd0`).
- DGM-0003 (#5 / PR #6) — hades-voice-labs explore feature + ADOPTER.md; #7 BOM strip.
- DGM-0004 (#8 / PR #9+#10) — sync JSON load + static skeleton; Ultrafast `saw_files` true (`e92363f`).

## Active

- DGM-0005 (#11) — header file-path strip + compact layout; require `saw_file_paths` true.

## Queued

- Bump hades-v2 `vendor/doc-generation-modules` pin after this merges.

## Blockers

- None for the product fix; Ultrafast live run needs Browser Harness + OpenRouter on the workstation.

## Next atomic action

Open PR for #11 with squash auto-merge; re-run Ultrafast requiring `saw_file_paths`; then pin the new SHA from hades-v2.