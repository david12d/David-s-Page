# SEO & Meta Tags Implementation Design

**Linear Issue:** PRI-58
**Date:** 2026-01-27
**Status:** Approved

## Overview

Implement comprehensive SEO and meta tags for the David Portfolio v2 site to improve search engine visibility and social sharing appearance.

## Decisions

| Decision | Choice |
|----------|--------|
| Domain | `https://davidding.com.au` |
| OG Images | Single default image for all pages (`/images/og-default.jpg`) |
| Structured Data | Person + WebSite + Article (for blog posts) |
| Robots.txt | Allow all except `/api/*` |

## Architecture

### Central Configuration

**`src/lib/site-config.ts`**

Single source of truth for SEO constants:
- `siteUrl`: `https://davidding.com.au`
- `siteName`: `David Ding`
- `siteDescription`: From hero content
- `defaultOgImage`: `/images/og-default.jpg`
- `author`: name, email, LinkedIn, jobTitle

### Metadata Strategy

**Root Layout (`src/app/layout.tsx`)**
- `metadataBase`: Sets base URL for relative URLs
- `title.template`: `%s | David Ding`
- `openGraph` defaults: type, locale, siteName, images
- `twitter` defaults: card type (`summary_large_image`)
- `robots`: index, follow

**Static Pages**
Each exports metadata with:
- `title`: Page-specific portion (template adds suffix)
- `description`: Unique per page
- `openGraph`: title, description, url
- `alternates.canonical`: Explicit canonical URL

**Dynamic Pages (blog/[slug], projects/[slug])**
Enhanced `generateMetadata` with:
- `openGraph`: title, description, type (`article` for blogs), publishedTime, authors, tags
- `twitter`: card data
- `alternates.canonical`: Specific post/project URL

### Structured Data (JSON-LD)

**Components in `src/components/seo/`:**

1. **PersonSchema.tsx** - Root layout
   - `@type`: Person
   - name, jobTitle, description, url, email
   - sameAs: [LinkedIn URL]
   - image: profile photo

2. **WebSiteSchema.tsx** - Root layout
   - `@type`: WebSite
   - name, url, description
   - author reference

3. **ArticleSchema.tsx** - Blog posts only
   - `@type`: Article
   - headline, description, datePublished, dateModified
   - author reference, keywords

### Sitemap & Robots

**`src/app/sitemap.ts`**
- Static pages with priorities (1.0 home, 0.8 main sections, 0.6 content, 0.4 utility)
- Dynamic pages from Contentlayer (allBlogPosts, allProjects)
- Includes lastModified, changeFrequency

**`src/app/robots.ts`**
```
User-Agent: *
Allow: /
Disallow: /api/

Sitemap: https://davidding.com.au/sitemap.xml
```

## Files

### New Files
```
src/lib/site-config.ts
src/components/seo/PersonSchema.tsx
src/components/seo/WebSiteSchema.tsx
src/components/seo/ArticleSchema.tsx
src/app/sitemap.ts
src/app/robots.ts
```

### Modified Files
```
src/app/layout.tsx
src/app/page.tsx
src/app/about/page.tsx
src/app/blog/page.tsx
src/app/blog/[slug]/page.tsx
src/app/projects/page.tsx
src/app/projects/[slug]/page.tsx
src/app/uses/page.tsx
src/app/attribution/page.tsx
```

### Placeholder Required
- `/public/images/og-default.jpg` (1200x630px recommended)

## Implementation Order

1. Create `site-config.ts` with all constants
2. Create JSON-LD schema components
3. Update root layout with enhanced metadata + schemas
4. Update each static page with metadata
5. Update dynamic pages with enhanced metadata + ArticleSchema
6. Create sitemap.ts
7. Create robots.ts
8. Test with build and verify output
