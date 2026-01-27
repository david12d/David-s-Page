---
description: Spec-driven Linear workflow for agents with design-first planning and test-first execution
---

# Spec-Driven Linear Workflow (Agent Edition)

This is the single source of truth for how agents should operate in this repo. The workflow starts from a Linear task and flows through design, planning, execution, review, and branch cleanup.

## Global Artifacts

- **Linear task**: The authoritative unit of work.
- **Global design document**: [docs/plans/global-design.md](docs/plans/global-design.md)
- **Implementation plan**: Created per task under [docs/plans/](docs/plans/)

## Workflow Summary

1. Brainstorming → 2. Using Git Worktrees → 3. Writing Plans → 4. Subagent-Driven Development or Executing Plans → 5. Test-Driven Development → 6. Requesting Code Review → 7. Finishing a Development Branch

---

## 1) Brainstorming (Design First)

**Activation:** Before any code is written.

**Goals:** Refine the rough idea into a validated design.

**Required actions:**
- Ask clarifying questions until scope and constraints are clear.
- Explore alternatives and trade-offs.
- Present the design in sections (overview, UX, data, API, edge cases) for validation.
- Record final decisions in the global design document.

**Outputs:**
- Updated [docs/plans/global-design.md](docs/plans/global-design.md) with the approved design section.

---

## 2) Using Git Worktrees (Isolated Workspace)

**Activation:** After design approval.

**Required actions:**
- Create a new branch tied to the Linear task ID.
- Create a worktree under `.worktrees/<branch-name>`.
- Run project setup if needed.
- Verify a clean test baseline (lint/build/tests where applicable).

**Outputs:**
- Isolated worktree with a clean baseline and readiness to change files.

---

## 3) Writing Plans (Task Decomposition)

**Activation:** With an approved design.

**Required actions:**
- Break work into bite-sized tasks (2–5 minutes each).
- Every task includes:
   - Exact file paths
   - Complete code intent (what to add/change)
   - Verification steps
- Update the Linear issue with subissues or checklist items.

**Outputs:**
- A plan document in [docs/plans/](docs/plans/) for this task.
- Linear task updated with subissues/checklist.

---

## 4) Subagent-Driven Development or Executing Plans

**Activation:** With a plan in place.

**Path A — Subagent-Driven Development:**
- Dispatch a fresh subagent per task.
- Two-stage review per task:
   1. **Spec compliance** (matches design + plan)
   2. **Code quality** (readability, maintainability, style)

**Path B — Executing Plans:**
- Execute tasks in small batches.
- Pause at human checkpoints for validation.

**Outputs:**
- Incremental, reviewable changes aligned to the plan.

---

## 5) Test-Driven Development (RED → GREEN → REFACTOR)

**Activation:** During implementation.

**Required actions:**
- Write a failing test first (RED).
- Run it and confirm failure.
- Write minimal code to pass (GREEN).
- Refactor without behavior changes (REFACTOR).
- If code was written before tests, delete and re-implement with TDD.

**Outputs:**
- Tests that prove behavior and guide changes.

---

## 6) Requesting Code Review (Between Tasks)

**Activation:** After each task or batch.

**Required actions:**
- Review changes against the plan and design.
- Report issues by severity:
   - **Critical**: Blocks progress.
   - **Major**: Must fix before moving on.
   - **Minor**: Fix if time allows.

**Outputs:**
- Review notes and fixes applied before continuing.

---

## 7) Finishing a Development Branch

**Activation:** After all tasks complete.

**Required actions:**
- Verify all tests/lint/build.
- Present options: merge, PR, keep, or discard.
- Clean up the worktree and branch if merged or discarded.

**Outputs:**
- Clean repo state and documented completion.

---

## Conventions

- **Branch naming:** `{type}/{linear-id}-{kebab-case-title}`
- **Commits:** Conventional Commits (feat/fix/docs/test/chore/refactor/style/perf)
- **PRs:** Must reference the Linear task in the summary.
    C --> D[Create Feature Branch]
    D --> E[Make Changes]
    E --> F[Commit with Conventional Format]
    F --> G{More Work?}
    G -->|Yes| H[Run Tests]
    H --> E
    G -->|No| I[Run finish-task.sh]
    I --> J[Push Branch]
    J --> K[Create Pull Request]
    K --> L{Auto-merge?}
    L -->|Yes| M[Merge & Delete Branch]
    L -->|No| N[Manual Review]
    M --> O[Checkout Main]
    N --> O
    O --> P[Task Complete]
```
