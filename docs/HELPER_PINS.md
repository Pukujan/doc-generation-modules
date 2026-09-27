# Helper pins (content + continuity)

This note is for agents and maintainers. The product README stays product-only.

## Content helper (FULL stack)

| Field | Value |
| --- | --- |
| Repository | https://github.com/Pukujan/content-generation-modules |
| Pin version | **0.5.5** |
| Pin SHA | `085aeb174619191f5c2a51a1f0715dd71113e386` |
| EXPECTED_MODULES | **8** — brand-foundation, content-context, writing-direction, human-sounding-writing, **human-output-naming**, visual-direction, image-generation, html-demo |
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
| Generated artifact filenames / asset-manifest paths / committed media basenames | human-output-naming (hon) |

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
