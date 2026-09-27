#!/usr/bin/env python3
"""Documented runner for DGM explore click gating via jev-ultrafast.

Does not claim FE success by itself. Prefer a real Ultrafast Agent run when the
checkout and OPENROUTER_API_KEY are available; otherwise print the exact goal
and exit 2 so CI/humans know the gate still needs an Ultrafast pass.
"""

from __future__ import annotations

import argparse
import os
import sys
from pathlib import Path

GOAL = (
    "Open the doc register. Click the control that opens the sample-register "
    "feature page. Confirm a glossary and an associated files list are visible. "
    "Click back to the register. Stop when those steps succeeded."
)


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "--ultrafast-root",
        type=Path,
        default=Path(os.environ.get("JEV_ULTRAFAST_ROOT", "")),
        help="Checkout of Pukujan/jev-ultrafast (or set JEV_ULTRAFAST_ROOT)",
    )
    parser.add_argument(
        "--base-url",
        default="http://127.0.0.1:8765/",
        help="URL where explore/ is served",
    )
    parser.add_argument(
        "--dry-print",
        action="store_true",
        help="Only print the gate plan (always safe; default when Ultrafast missing)",
    )
    args = parser.parse_args()

    print("DGM explore click gate")
    print(f"base_url: {args.base_url}")
    print(f"goal: {GOAL}")
    print("plan_doc: tests/explore_click_gate.md")

    root = args.ultrafast_root
    if args.dry_print or not root or not root.is_dir():
        print(
            "STATUS: plan-only — Ultrafast checkout not used. "
            "Clone https://github.com/Pukujan/jev-ultrafast and re-run with "
            "--ultrafast-root, or export JEV_ULTRAFAST_ROOT. "
            "Do not claim FE click success yet."
        )
        return 2

    # Optional live path: import Agent if the checkout is on PYTHONPATH.
    sys.path.insert(0, str(root))
    try:
        from jev_ultrafast import Agent  # type: ignore
    except Exception as exc:  # noqa: BLE001 — report import failure honestly
        print(f"STATUS: Ultrafast import failed ({exc}). Gate not executed.")
        return 2

    if not os.environ.get("OPENROUTER_API_KEY"):
        print("STATUS: OPENROUTER_API_KEY missing; refusing to start Ultrafast.")
        return 2

    print("STATUS: starting Ultrafast Agent (live). Record artifacts on the issue.")
    agent = Agent(task=f"Start at {args.base_url}. {GOAL}")
    # Agent API may evolve; keep call minimal and let exceptions surface.
    result = agent.run() if hasattr(agent, "run") else agent
    print(f"STATUS: Ultrafast returned: {result!r}")
    print("Independent check still required (glossary + files visible).")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
