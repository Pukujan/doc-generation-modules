# Helper pins (content + continuity)

This note is for agents and maintainers. The product README stays product-only.

## Content helper (FULL stack)

| Field | Value |
| --- | --- |
| Repository | https://github.com/Pukujan/content-generation-modules |
| Pin version | **0.5.4** |
| Pin SHA | `c95d73a0ce072a6d7173ce4848621a25cdf1cc7e` (tip of `main` while PR #27 open) |
| EXPECTED_MODULES | **7** — brand-foundation, content-context, writing-direction, human-sounding-writing, visual-direction, image-generation, html-demo |
| Local note | Sibling checkout may already be **0.5.5** with **human-output-naming** (8 modules). Do not pin 0.5.5 until [PR #27](https://github.com/Pukujan/content-generation-modules/pull/27) merges. Then set EXPECTED_MODULES=8 and route filenames through **hon**. |
| Cross-links | [issue #26](https://github.com/Pukujan/content-generation-modules/issues/26), [PR #27](https://github.com/Pukujan/content-generation-modules/pull/27) — do not edit that helper from DGM |

Validate:

```bash
python <CGM>/scripts/validate_content_system.py \
  --root <CGM> \
  --adapter <DGM>/.content-system \
  --project-root <DGM>
```

Done when output includes `VALID`.

### Writing router (MUST-load)

| Surface | Module |
| --- | --- |
| README / product entry | writing-direction |
| PR / issue / commit / non-README docs | human-sounding-writing (hsw) |
| Generated artifact filenames (0.5.5+) | human-output-naming (hon) |

## Continuity helper (FULL PCM)

| Field | Value |
| --- | --- |
| Repository | https://github.com/Pukujan/project-continuity-modules |
| Binding | `.continuity/config.json` (software profile, task prefix `DGM`) |
| Schemas | `schemas/v1/**` materialized by `continuity init` — do not rewrite published PCM blobs |
| Path naming | Follow PCM continuity path naming ([PCM #213](https://github.com/Pukujan/project-continuity-modules/issues/213) / CONTINUITY_PATH_NAMING); pronounceable new paths |
| CI pin example | `412d190e6244ef59279ad5d60f4c7622bfb43e5f` (includes path-naming docs) |

```bash
continuity validate --root <DGM>
continuity preflight --root <DGM>   # expect TARGET_VALID
```
