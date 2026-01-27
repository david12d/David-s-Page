# Development Workflow (Spec-Driven, Linear-First)

This repo uses a single spec-driven workflow that begins with a Linear task and proceeds through design, planning, implementation, review, and branch cleanup.

## Global Artifacts

- **Linear task**: The authoritative unit of work.
- **Global design document**: [docs/plans/global-design.md](docs/plans/global-design.md)
- **Implementation plans**: One per task under [docs/plans/](docs/plans/)

## Workflow Stages

1. **Brainstorming** → refine ideas through questions, explore alternatives, and write the validated design in the global design doc.
2. **Using Git Worktrees** → create a branch + isolated worktree, run setup, verify clean baseline.
3. **Writing Plans** → break work into 2–5 minute tasks with file paths, code intent, and verification; update Linear with subissues.
4. **Subagent-Driven Development or Executing Plans** → run one task per subagent with two-stage review, or execute in small batches with human checkpoints.
5. **Test-Driven Development** → RED-GREEN-REFACTOR; delete code written before tests.
6. **Requesting Code Review** → review against plan with severity levels; critical issues block progress.
7. **Finishing a Development Branch** → verify tests, present merge/PR/keep/discard options, clean up worktree.

## Conventions

- **Branch naming:** `{type}/{linear-id}-{kebab-case-title}`
- **Commits:** Conventional Commits (feat/fix/docs/test/chore/refactor/style/perf)
- **PRs:** Must reference the Linear task in the summary

## Full Spec

See the authoritative workflow spec in [docs/plans/global-design.md](docs/plans/global-design.md) and the detailed operational guide in [.agent/workflows/github-workflow.md](.agent/workflows/github-workflow.md).
