# TASK-DGM-0003 — Hades Voice Labs Adopter Sample

<!-- continuity:task {"acceptance":["explore register lists hades-voice-labs with citations","feature page glossary+files for voice labs","docs/ADOPTER.md ships pin+overlay instructions","click-gate goal targets hades-voice-labs","PR links #5 with squash auto-merge preferred"],"depends_on":["DGM-0001","DGM-0002"],"goal":"Host a real hades voice-labs doc set in explore and ship adopter pin templates for hades-v2.","id":"DGM-0003","issue_url":"https://github.com/Pukujan/doc-generation-modules/issues/5","next_action":"land PR and arm squash auto-merge; run Ultrafast click gate","owner":"Grok Bot","priority":"high","protocol_version":"0.1.0-draft","schema":"project-continuity.task.v1","status":"active","why":"Owner named hades-v2 as first real DGM adopter for her voice labs docs."} -->

- Status: active
- Owner: Grok Bot
- Priority: high
- Depends on: DGM-0001, DGM-0002

## Goal

Host a real hades voice-labs doc set in explore and ship adopter pin templates for hades-v2.

## Why

Owner named hades-v2 as first real DGM adopter for her voice labs docs.

## Allowed files

- `explore/**`
- `docs/ADOPTER.md`
- `examples/adopter-register.overlay.json`
- `tests/explore_click_gate.md`
- `scripts/run_explore_click_gate.py`
- `README.md`
- `PROJECT.md`
- `checkpoints/CURRENT.md`
- `tasks/TASK-DGM-0003-hades-voice-labs-adopter.md`
- `HANDOFF.md`

## Human outcome

Alex can pin DGM from hades-v2 and browse voice-labs glossary + files with citations, then prove clicks with Ultrafast.

## Scope and boundaries

- In scope: explore sample, adopter docs, gate goal update, continuity projections.
- Out of scope: editing CGM; React; committing unpublished audio; merging hades-voice-lab into DGM src.
- Dependencies: hades-v2 #158 consumes this SHA after merge.

## Acceptance criteria

- [x] Register lists hades-voice-labs with citations
- [x] Feature glossary + associated files
- [x] docs/ADOPTER.md pin guide
- [x] Click-gate targets hades-voice-labs
- [ ] PR + squash auto-merge
- [ ] Ultrafast evidence recorded (on this issue or hades #158)

## Evidence and sources

Voice-labs glossary facts drawn from public `hades-voice-lab/README.md` and hades-v2 issues #99 / #153 / #158. No secrets.

## Reproduction details (only when needed)

Starting revision: origin/main `36cafd0`. Material inputs: public hades-voice-lab README facts; issues #99/#153/#158.

## Related records

- Leaf owning issue: https://github.com/Pukujan/doc-generation-modules/issues/5 (parent: none)
- Downstream: https://github.com/Pukujan/hades-v2/issues/158
- Primary writer: Grok Bot / branch `feat/hades-voice-labs-adopter` / as-of: implementing
- Related PR/CI evidence and push receipt: pending

## Checkpoint log

- 2026-09-27: added hades-voice-labs explore feature, docs/ADOPTER.md, overlay example, click-gate goal update.

## Handoff

Read PROJECT → CURRENT → this task → docs/ADOPTER.md. Checkpoint before stopping.
