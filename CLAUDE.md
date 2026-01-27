# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

```bash
npm run dev      # Start development server (port 3000)
npm run build    # Build for production (runs contentlayer2 build && next build)
npm run lint     # Run ESLint
npm run start    # Start production server
```

**Important:** The build requires Contentlayer to run first - this is handled automatically by the build script.

## Architecture Overview

This is a **Next.js 16 portfolio website** using the App Router with a content-driven architecture.

### Tech Stack
- **Framework:** Next.js 16 with React 19 Server Components
- **Language:** TypeScript 5 (strict mode)
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion
- **Content:** Contentlayer2 with MDX

### Content System

**Two types of content exist:**

1. **Static data files** (`src/content/`) - TypeScript files exporting typed content objects for sections and pages
2. **MDX documents** (`content/`) - Blog posts and projects processed by Contentlayer

**Contentlayer document types:**
- `BlogPost` - `content/blog/**/*.mdx` - requires title, excerpt, date, tags, readTime
- `Project` - `content/projects/**/*.mdx` - requires title, description, role, category, tags
- `Page` - `content/pages/**/*.mdx` - for custom pages

MDX files use YAML frontmatter. Contentlayer generates types and computes slugs/URLs automatically.

### Key Directories

```
src/
├── app/              # Next.js App Router pages
├── components/
│   ├── layout/       # Navbar, Footer
│   ├── sections/     # Hero, TechStack, FeaturedProjects, Testimonials, SiteStats
│   └── ui/           # Button, Card, CommandPalette, ContactDrawer, etc.
├── content/          # TypeScript content data files
└── lib/              # Utilities
content/              # MDX source files (blog/, projects/, pages/)
public/               # Static assets (images/, blog/, projects/, logos/)
```

### Path Aliases

- `@/*` maps to `./src/*`
- Contentlayer types available from `contentlayer/generated`

## Code Patterns

### Component Pattern
- Use `"use client"` directive for interactive components
- Import content data from `src/content/`
- Use Framer Motion for animations
- Export as named exports

### Styling
- Dark theme only with CSS custom properties in `globals.css`
- Tailwind utilities for responsive design
- Font system: Outfit (body), Instrument Serif (headings), Geist Mono (code)

### Typography Hierarchy
- H1: 4xl-7xl responsive
- H2: 3xl-5xl responsive, bold
- H3: 2xl-3xl responsive
- Body: Base with 1.6+ line-height

## Commit Convention

Uses Conventional Commits format:
```
<type>(<scope>): <subject>
```

Types: `feat`, `fix`, `docs`, `test`, `chore`, `refactor`, `style`, `perf`, `build`, `ci`

Branch naming: `{type}/{issue-number}-{kebab-case-description}`

## Development Workflow (Superpowers Skills)

Use these skills during development:

| Skill | When to Use |
|-------|-------------|
| `/brainstorming` | Before any creative work - new features, components, or behavior changes |
| `/writing-plans` | When you have requirements for a multi-step task |
| `/test-driven-development` | Before writing implementation code |
| `/systematic-debugging` | When encountering bugs, test failures, or unexpected behavior |
| `/verification-before-completion` | Before claiming work is complete or creating PRs |
| `/finishing-a-development-branch` | When implementation is complete and ready to integrate |

**Typical flow:**
1. `/brainstorming` → Explore requirements and design
2. `/writing-plans` → Create implementation plan
3. `/test-driven-development` → Implement with tests
4. `/verification-before-completion` → Verify everything works
5. `/finishing-a-development-branch` → Merge, PR, or cleanup
