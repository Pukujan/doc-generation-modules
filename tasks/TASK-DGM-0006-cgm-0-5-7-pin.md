# TASK-DGM-0006 - Cgm 0 5 7 Pin

<!-- continuity:task {"acceptance":["adapter helper_version 0.5.7 and helper_commit c069613ca8b3e02bcf5aba1960160583537f8a3a","EXPECTED_MODULES=8 including human-output-naming","AGENTS.md contains acs_prompt_inject.system_block always-on inject","validate_content_system.py prints VALID","verify_hsw_applied.py exits 0","PR squash-merged linking #13"],"depends_on":[],"goal":"Re-pin content helper to 0.5.7 @ c069613 with always-on HSW system_block; keep EXPECTED_MODULES=8 including hon.","id":"DGM-0006","issue_url":"https://github.com/Pukujan/doc-generation-modules/issues/13","next_action":"push branch, open PR, arm squash auto-merge","owner":"Grok Bot","priority":"high","protocol_version":"0.1.0-draft","schema":"project-continuity.task.v1","status":"active","why":"CGM PR #31 forces always-on HSW for every adopter; DGM still on 0.5.5."} -->

- Status: active
- Owner: Grok Bot
- Priority: high
- Depends on: none (CGM PR #31 already on main)

## Goal

Re-pin content helper to 0.5.7 @ c069613 with always-on HSW system_block; keep EXPECTED_MODULES=8 including hon.

## Why

CGM PR #31 forces always-on HSW for every adopter; DGM still on 0.5.5 (pin != enforcement).

## Allowed files

- `.content-system/system-version.json`
- `.content-system/asset-manifest.json`
- `docs/HELPER_PINS.md`
- `AGENTS.md`
- `explore/data/writing-surfaces.json`
- `.github/workflows/ci.yml`
- `checkpoints/CURRENT.md`
- `tasks/TASK-DGM-0006-cgm-0-5-7-pin.md`

## Human outcome

Agents boot with HSW always on; DGM stays on the current eight-module helper pin without editing CGM.

## Scope and boundaries

- In scope: pin bump, always-on system_block inject, docs/CI/task projection, validate + verify_hsw_applied.
- Out of scope: editing CGM; React; product explore UI changes.
- Dependencies/uncertainty: none once CGM main has #31.

## Acceptance criteria

- [x] Adapter pin SHA exactly `c069613ca8b3e02bcf5aba1960160583537f8a3a`, version 0.5.7, 8 modules including human-output-naming
- [x] Always-on HSW system_block present in AGENTS.md
- [ ] validate prints VALID
- [ ] verify_hsw_applied exits 0
- [ ] Branch + PR linking #13; squash auto-merge armed

## Evidence and sources

- CGM tip: `c069613ca8b3e02bcf5aba1960160583537f8a3a` (PR #31)
- Prior DGM pin: #3 / PR #4 @ 085aeb1

## Related records

- Leaf owning issue: #13 (parent: none)
- Primary writer / branch: Grok Bot / feat/cgm-0.5.7-pin

## Checkpoint log

No checkpoints yet.

## Handoff

Read PROJECT -> CURRENT -> this task -> HELPER_PINS. Checkpoint before stopping.
