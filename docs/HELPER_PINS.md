# Helper pins (content + continuity)

This note is for agents and maintainers. The product README stays product-only.

## Content helper (FULL stack)

| Field | Value |
| --- | --- |
| Repository | https://github.com/Pukujan/content-generation-modules |
| Pin version | **0.5.7** |
| Pin SHA | c069613ca8b3e02bcf5aba1960160583537f8a3a |
| EXPECTED_MODULES | **8** — brand-foundation, content-context, writing-direction, human-sounding-writing, **human-output-naming**, visual-direction, image-generation, html-demo |
| Always-on HSW | Paste cs_prompt_inject.system_block from pinned CGM docs/writing-routing.json at agent boot (see AGENTS.md). Confirm with erify_hsw_applied.py. |
| Cross-links | [CGM PR #31](https://github.com/Pukujan/content-generation-modules/pull/31) — do not edit that helper from DGM |

Validate:

`ash
python <CGM>/scripts/validate_content_system.py \
  --root <CGM> \
  --adapter <DGM>/.content-system \
  --project-root <DGM>

python <CGM>/scripts/verify_hsw_applied.py --root <CGM>
`

Done when validate output includes VALID and erify_hsw_applied exits 0.

### Writing router (MUST-load)

| Surface | Module |
| --- | --- |
| README / product entry | writing-direction |
| PR / issue / commit / non-README docs / human-facing HTML | human-sounding-writing (hsw) — **always on** |
| Generated artifact filenames / asset-manifest paths / committed media basenames | human-output-naming (hon) |

## Continuity helper (FULL PCM)

| Field | Value |
| --- | --- |
| Repository | https://github.com/Pukujan/project-continuity-modules |
| Binding | .continuity/config.json (software profile, task prefix DGM) |
| Schemas | schemas/v1/** materialized by continuity init — do not rewrite published PCM blobs |
| Path naming | Follow PCM continuity path naming ([PCM #213](https://github.com/Pukujan/project-continuity-modules/issues/213) / CONTINUITY_PATH_NAMING); pronounceable new paths |
| CI pin example | 412d190e6244ef59279ad5d60f4c7622bfb43e5f (includes path-naming docs) |

`ash
continuity validate --root <DGM>
continuity preflight --root <DGM>   # expect TARGET_VALID
`
