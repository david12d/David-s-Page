# Copilot Instructions

## Big picture
- Next.js 16 App Router portfolio with content-driven architecture and MDX via Contentlayer2.
- Routing lives under [src/app](src/app); shared layout composes `Navbar` and `Footer` in [src/app/layout.tsx](src/app/layout.tsx).
- Contentlayer schemas and MDX processing are defined in [contentlayer.config.ts](contentlayer.config.ts).

## Content architecture (critical)
- Two content sources:
  - TypeScript content objects in [src/content](src/content) (e.g., [src/content/sections/hero.ts](src/content/sections/hero.ts)).
  - MDX documents in [content](content) for blog, projects, and pages.
- Contentlayer generates `allBlogPosts` and `allProjects` used by route pages such as [src/app/blog/[slug]/page.tsx](src/app/blog/[slug]/page.tsx) and [src/app/projects/[slug]/page.tsx](src/app/projects/[slug]/page.tsx).
- MDX rendering is centralized in `Mdx` from [src/components/mdx.tsx](src/components/mdx.tsx); update this for global MDX styling/shortcodes.

## Project conventions
- Prefer content updates in [src/content](src/content) or [content](content) over hardcoding in components.
- Use the `@/` path alias for imports (seen across app/components).
- App Router pages commonly export `generateStaticParams()` and `generateMetadata()` alongside the page component (see blog/projects pages).

## Design enforcement (follow existing patterns)
- Typography: keep heading/body scale consistent with existing MDX/component styles (e.g., `Mdx` in [src/components/mdx.tsx](src/components/mdx.tsx) uses h1 4xl, h2 3xl, h3 2xl, body with `leading-7`). Match these sizes when adding new pages or content sections.
- Animations: use Framer Motion for motion patterns when adding interactive sections (see existing section components under [src/components/sections](src/components/sections)). Keep animations subtle and consistent with current transitions.
- Responsive design: follow mobile-first layout patterns (use Tailwind responsive utilities, `container` widths, and padding patterns as seen in blog/projects pages under [src/app](src/app)). Verify layouts at mobile/tablet/desktop breakpoints.

## Dev workflows (commands)
- `npm run dev` — dev server
- `npm run build` — runs `contentlayer2 build` then `next build`
- `npm run lint` — ESLint
- `npm run start` — production server
- Contentlayer also runs on `postinstall` (see [package.json](package.json)).

## Agent workflow (spec-driven, Linear-first)

This is the single source of truth for how agents should operate in this repo. The workflow starts from a Linear task and flows through design, planning, execution, review, and branch cleanup.

### Global artifacts
- **Linear task**: The authoritative unit of work.
- **Global design document**: [docs/plans/global-design.md](docs/plans/global-design.md)
- **Implementation plan**: Created per task under [docs/plans/](docs/plans/)

### Workflow summary
1. Brainstorming → 2. Using Git Worktrees → 3. Writing Plans → 4. Subagent-Driven Development or Executing Plans → 5. Test-Driven Development → 6. Requesting Code Review → 7. Finishing a Development Branch

---

### 1) Brainstorming (Design First)
**Activation:** Before any code is written.

**Required actions:**
- Ask clarifying questions until scope and constraints are clear.
- Explore alternatives and trade-offs.
- Present the design in sections (overview, UX, data, API, edge cases) for validation.
- Record final decisions in the global design document.

**Outputs:**
- Updated [docs/plans/global-design.md](docs/plans/global-design.md) with the approved design section.

---

### 2) Using Git Worktrees (Isolated Workspace)
**Activation:** After design approval.

**Required actions:**
- Create a new branch tied to the Linear task ID.
- Create a worktree under `.worktrees/<branch-name>`.
- Run project setup if needed.
- Verify a clean test baseline (lint/build/tests where applicable).

**Outputs:**
- Isolated worktree with a clean baseline and readiness to change files.

---

### 3) Writing Plans (Task Decomposition)
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

### 4) Subagent-Driven Development or Executing Plans
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

### 5) Test-Driven Development (RED → GREEN → REFACTOR)
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

### 6) Requesting Code Review (Between Tasks)
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

### 7) Finishing a Development Branch
**Activation:** After all tasks complete.

**Required actions:**
- Verify all tests/lint/build.
- Present options: merge, PR, keep, or discard.
- Clean up the worktree and branch if merged or discarded.

**Outputs:**
- Clean repo state and documented completion.

---

### Conventions
- **Branch naming:** `{type}/{linear-id}-{kebab-case-title}`
- **Commits:** Conventional Commits (feat/fix/docs/test/chore/refactor/style/perf)
- **PRs:** Must reference the Linear task in the summary.