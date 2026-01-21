# Priority Issues List
**Generated:** January 21, 2026  
**Source:** Review of BACKLOG.md and codebase analysis  
**Status:** All issues verified as NOT yet implemented

---

## 🔴 Critical Priority Issues (Week 1)

### Issue 1: Complete About Page Content
**Priority:** Critical  
**Status:** Not Implemented  
**Estimated Effort:** Medium (2-3 days)

**Description:**
The About page route exists but lacks comprehensive content. Need to populate with professional information and interactive sections.

**Missing Components:**
- [ ] "More About Me" hero section with personal introduction
- [ ] Personal photo/avatar
- [ ] "I Travel" section with travel experiences
- [ ] "The Experience" section with detailed work history timeline
- [ ] Fix timeline animation visibility issue (reported bug)
- [ ] Work experience details with bullet points
- [ ] "My Site" navigation cards (Uses, Guestbook)
- [ ] Social links integration
- [ ] Animated timeline visualization
- [ ] Scroll animations and effects

**Acceptance Criteria:**
- Complete professional biography and introduction
- Working timeline with proper animations
- All sections responsive and accessible
- Professional photo/avatar integrated

---

### Issue 2: Create Guestbook Page
**Priority:** Critical  
**Status:** Not Implemented  
**Estimated Effort:** Medium (2-3 days)

**Description:**
Create an interactive guestbook page where visitors can leave messages. This is a key feature mentioned in the backlog and reference site.

**Requirements:**
- [ ] Create `/guestbook` route
- [ ] Design guestbook message card UI
- [ ] Implement message submission form
- [ ] Message display with pagination
- [ ] Timestamp and visitor name display
- [ ] Optional: Message moderation system
- [ ] Responsive design
- [ ] Proper validation and error handling

**Technical Notes:**
- May need backend integration or database
- Consider using form submission service
- Add rate limiting for spam prevention

**Acceptance Criteria:**
- Users can submit and view messages
- Messages display with proper formatting
- Form has validation and error states
- Mobile-responsive layout

---

### Issue 3: Create Bucket List Page
**Priority:** Critical  
**Status:** Not Implemented  
**Estimated Effort:** Small (1 day)

**Description:**
Create a personal bucket list page showcasing goals and aspirations.

**Requirements:**
- [ ] Create `/bucket-list` route
- [ ] Design bucket list item cards
- [ ] Categories for different types of goals
- [ ] Visual indicators for completed vs. pending items
- [ ] Interactive completion toggle (optional)
- [ ] Responsive grid layout
- [ ] Smooth animations

**Content Needed:**
- Personal goals and aspirations
- Travel destinations
- Professional milestones
- Personal achievements

**Acceptance Criteria:**
- Page displays categorized bucket list items
- Clear visual distinction for completed items
- Engaging and personal presentation
- Mobile-responsive

---

### Issue 4: Implement GitHub Stats Integration
**Priority:** Critical  
**Status:** Not Implemented  
**Estimated Effort:** Medium (2 days)

**Description:**
Add "Developer Insights" section on About page with live GitHub statistics using GitHub API.

**Required Stats:**
- [ ] Followers count
- [ ] Total Stars across repositories
- [ ] Public Repos count
- [ ] Total Forks count
- [ ] Optional: Contribution graph
- [ ] Optional: Top languages
- [ ] Optional: Recent activity

**Technical Implementation:**
- [ ] Create GitHub API client service
- [ ] Implement caching to avoid rate limits
- [ ] Design stats display cards
- [ ] Add loading states
- [ ] Error handling for API failures
- [ ] Consider using GitHub GraphQL API

**Acceptance Criteria:**
- Live stats display on About page
- Proper loading and error states
- Respects GitHub API rate limits
- Cached appropriately
- Stats update periodically

---

## 🟡 High Priority Issues (Week 2-3)

### Issue 5: Setup MDX for Blog Content
**Priority:** High  
**Status:** Not Implemented  
**Estimated Effort:** Medium (2-3 days)

**Description:**
Currently blog posts use string-based content. Implement MDX to enable rich formatting, code syntax highlighting, and embedded components.

**Requirements:**
- [ ] Install and configure @next/mdx or next-mdx-remote
- [ ] Setup MDX content directory structure
- [ ] Implement code syntax highlighting (e.g., Prism or Shiki)
- [ ] Add support for embedded components
- [ ] Create MDX components library (callouts, code blocks, etc.)
- [ ] Implement table of contents generation
- [ ] Add frontmatter parsing for metadata
- [ ] Convert existing 4 blog posts to MDX format

**Technical Considerations:**
- Choose between @next/mdx (build-time) or next-mdx-remote (runtime)
- Configure remark/rehype plugins for enhanced features
- Setup syntax highlighting theme

**Acceptance Criteria:**
- MDX files render with proper formatting
- Code blocks have syntax highlighting
- Images and media embedded properly
- Table of contents works
- Existing posts migrated successfully

---

### Issue 6: Enhance Home Page with Missing Sections
**Priority:** High  
**Status:** Partially Implemented  
**Estimated Effort:** Large (3-4 days)

**Description:**
Add missing sections to home page to match reference site design.

**Missing Sections:**
- [ ] "The Inside Scoop" dynamic section in hero
- [ ] Collaboration badges/tags in hero
- [ ] Animated gradient text effects
- [ ] "Word on the street about me" testimonials enhancement
- [ ] "My Site" section with Uses/Guestbook preview cards
- [ ] About Me preview section
- [ ] Scroll-triggered animations between sections
- [ ] Custom cursor effects (optional)

**Visual Enhancements:**
- [ ] Glassmorphism effects on cards
- [ ] Enhanced hover animations
- [ ] Gradient overlays on images
- [ ] "The Secret Sauce" styling for tech stack

**Acceptance Criteria:**
- All sections present and functional
- Smooth animations and transitions
- Visual polish matches reference design
- Responsive across devices
- Performance not degraded

---

### Issue 7: Enhance Blog Page Features
**Priority:** High  
**Status:** Partially Implemented  
**Estimated Effort:** Medium (2-3 days)

**Description:**
Improve blog page with missing features and enhanced styling.

**Requirements:**
- [ ] Add "The Blog" header with "Handpicked insights from the pensieve" subtitle
- [ ] Implement date with relative time display (e.g., "9 mo ago")
- [ ] Add "Recently released" badge for new posts
- [ ] Display read time estimation on cards
- [ ] Add topic tags (frontend, tools, productivity, etc.)
- [ ] Implement topic filter/navigation
- [ ] Enhanced hover effects on blog cards
- [ ] Add share functionality for posts
- [ ] Implement blog post search (optional)

**Styling Improvements:**
- [ ] Match reference site card design
- [ ] Better typography hierarchy
- [ ] Improved spacing and layout

**Acceptance Criteria:**
- Blog listing matches reference design
- All metadata displays correctly
- Topic filtering works
- Enhanced user experience
- Share buttons functional

---

### Issue 8: Populate Project Content
**Priority:** High  
**Status:** Partially Implemented  
**Estimated Effort:** Medium (2-3 days)

**Description:**
Add actual project content and enhance project pages with missing features.

**Requirements:**
- [ ] Add "FEATURED CASE STUDIES" header with "Curated work" subtitle
- [ ] Add technology badges on project cards
- [ ] Implement gradient overlays on project images
- [ ] Add project categories/filters
- [ ] Create rich media galleries in project details
- [ ] Add video/image carousels
- [ ] Implement live demo links
- [ ] Add GitHub repository links
- [ ] Display project metrics (stars, forks, etc.)

**Content Needed:**
- [ ] At least 5 complete project case studies
- [ ] High-quality project images
- [ ] Detailed project descriptions
- [ ] Technology stack details
- [ ] Project outcomes and metrics

**Acceptance Criteria:**
- Minimum 5 projects with complete details
- Enhanced visual design matches reference
- All links functional
- Responsive image galleries
- Project metrics display correctly

---

## 🟢 Medium Priority Issues (Week 4)

### Issue 9: Add Testimonials Section Enhancement
**Priority:** Medium  
**Status:** Partially Implemented  
**Estimated Effort:** Small (1 day)

**Description:**
Enhance existing testimonials section with better design and more testimonials.

**Requirements:**
- [ ] Improve testimonial card design
- [ ] Add client photos/avatars
- [ ] Add company logos
- [ ] Implement carousel/slider for multiple testimonials
- [ ] Add rating indicators
- [ ] Enhanced hover effects
- [ ] Add at least 5-6 testimonials

**Content Needed:**
- Client testimonials with attribution
- Professional headshots
- Company information

**Acceptance Criteria:**
- Visually appealing testimonial display
- Minimum 5 testimonials
- Carousel/slider works smoothly
- Mobile responsive

---

### Issue 10: Implement SEO Optimization
**Priority:** Medium  
**Status:** Not Implemented  
**Estimated Effort:** Medium (2 days)

**Description:**
Add comprehensive SEO features for better discoverability.

**Requirements:**
- [ ] Complete meta tags for all pages
- [ ] OpenGraph tags for social sharing
- [ ] Twitter card tags
- [ ] Structured data (JSON-LD) for pages
- [ ] Generate dynamic sitemap.xml
- [ ] Configure robots.txt
- [ ] Add canonical URLs
- [ ] Implement RSS feed for blog

**Technical Implementation:**
- [ ] Use Next.js metadata API
- [ ] Setup next-sitemap package
- [ ] Create RSS feed generator
- [ ] Add schema.org structured data

**Acceptance Criteria:**
- All pages have proper meta tags
- Social sharing previews work
- Sitemap generates correctly
- RSS feed accessible
- SEO audit scores improve

---

### Issue 11: Create Contact Page
**Priority:** Medium  
**Status:** Not Implemented  
**Estimated Effort:** Small (1 day)

**Description:**
Create dedicated contact page (separate from contact drawer).

**Requirements:**
- [ ] Create `/contact` route
- [ ] Contact form with validation
- [ ] Multiple contact methods display
- [ ] Social links
- [ ] Calendly integration
- [ ] Success/error states
- [ ] Form submission handling

**Acceptance Criteria:**
- Dedicated contact page accessible
- Form works with validation
- Multiple contact options clear
- Mobile responsive

---

### Issue 12: Create Links Page
**Priority:** Medium  
**Status:** Not Implemented  
**Estimated Effort:** Small (1 day)

**Description:**
Create a links aggregator page (similar to Linktree).

**Requirements:**
- [ ] Create `/links` route
- [ ] Display all social media links
- [ ] External resource links
- [ ] Portfolio links
- [ ] Newsletter signup (optional)
- [ ] Link analytics (optional)

**Acceptance Criteria:**
- All important links in one place
- Clean, simple design
- Mobile-first approach
- Easy to update

---

## 🔵 Low Priority Issues (Future Enhancements)

### Issue 13: Implement Advanced Visual Effects
**Priority:** Low  
**Status:** Not Implemented  
**Estimated Effort:** Medium (2-3 days)

**Description:**
Add advanced visual effects for enhanced user experience.

**Features:**
- [ ] Glassmorphism effects on cards
- [ ] Custom cursor implementation
- [ ] Scroll progress indicators
- [ ] Page transition effects
- [ ] Loading states and skeleton screens
- [ ] Parallax scrolling effects
- [ ] Advanced micro-interactions

**Acceptance Criteria:**
- Effects enhance UX without hurting performance
- Accessible and doesn't cause motion sickness
- Can be disabled via reduced motion preference

---

### Issue 14: Performance Optimization
**Priority:** Low  
**Status:** Not Implemented  
**Estimated Effort:** Medium (2 days)

**Description:**
Optimize website performance for better Core Web Vitals.

**Tasks:**
- [ ] Optimize images with next/image
- [ ] Implement lazy loading for components
- [ ] Code splitting optimization
- [ ] Bundle size reduction
- [ ] Lighthouse score optimization (target: 90+)
- [ ] Add loading priority hints
- [ ] Optimize font loading
- [ ] Implement service worker for caching

**Acceptance Criteria:**
- Lighthouse score above 90
- Fast page load times
- Optimized images
- Minimal bundle size

---

### Issue 15: Accessibility Audit and Improvements
**Priority:** Low  
**Status:** Not Implemented  
**Estimated Effort:** Medium (2 days)

**Description:**
Conduct comprehensive accessibility audit and implement improvements.

**Tasks:**
- [ ] WCAG 2.1 AA compliance audit
- [ ] Screen reader testing
- [ ] Keyboard navigation verification
- [ ] Focus management improvements
- [ ] Complete ARIA labels
- [ ] Color contrast verification
- [ ] Alt text for all images
- [ ] Form accessibility
- [ ] Skip links implementation

**Acceptance Criteria:**
- WCAG 2.1 AA compliant
- Passes automated accessibility tests
- Keyboard navigation works throughout
- Screen reader friendly

---

### Issue 16: Implement RSS Feed
**Priority:** Low  
**Status:** Not Implemented  
**Estimated Effort:** Small (1 day)

**Description:**
Create RSS feed for blog posts.

**Requirements:**
- [ ] Generate RSS feed XML
- [ ] Include all blog posts
- [ ] Auto-update on new posts
- [ ] Add RSS link in footer
- [ ] Support Atom format (optional)

**Acceptance Criteria:**
- Valid RSS feed generated
- Updates automatically
- Accessible at /feed.xml or /rss.xml

---

### Issue 17: Add Toast Notifications System
**Priority:** Low  
**Status:** Not Implemented  
**Estimated Effort:** Small (1 day)

**Description:**
Implement toast notification system for user feedback.

**Requirements:**
- [ ] Create toast component
- [ ] Support success/error/info/warning variants
- [ ] Auto-dismiss timer
- [ ] Stack multiple toasts
- [ ] Accessible announcements
- [ ] Animation in/out

**Use Cases:**
- Form submission feedback
- Copy to clipboard confirmations
- Error messages
- General notifications

---

### Issue 18: Enhance Navigation with Animations
**Priority:** Low  
**Status:** Not Implemented  
**Estimated Effort:** Small (1 day)

**Description:**
Add polished animations and transitions to navigation.

**Requirements:**
- [ ] Navigation transition effects
- [ ] Mobile menu animations
- [ ] Hover state refinements
- [ ] Active page indicators
- [ ] Smooth scrolling behavior

**Acceptance Criteria:**
- Smooth, professional animations
- Performance not affected
- Works across devices

---

## Summary Statistics

| Priority | Count | Total Effort Estimate |
|----------|-------|-----------------------|
| 🔴 Critical | 4 issues | 9-11 days |
| 🟡 High | 4 issues | 11-14 days |
| 🟢 Medium | 4 issues | 7 days |
| 🔵 Low | 6 issues | 10-12 days |
| **Total** | **18 issues** | **37-44 days** |

## Verification Status

All issues have been verified against:
- ✅ BACKLOG.md reviewed
- ✅ Codebase explored and analyzed
- ✅ CHANGELOG.md checked for recent implementations
- ✅ Confirmed NOT implemented in current codebase
- ✅ Prioritized based on backlog priority roadmap
- ✅ Aligned with reference site feature parity goals

## Recommended Implementation Order

**Sprint 1 (Week 1):**
- Issue 2: Guestbook Page
- Issue 3: Bucket List Page
- Issue 1: About Page Content (start)

**Sprint 2 (Week 2):**
- Issue 1: About Page Content (complete)
- Issue 4: GitHub Stats Integration
- Issue 5: MDX Setup (start)

**Sprint 3 (Week 3):**
- Issue 5: MDX Setup (complete)
- Issue 7: Blog Enhancements
- Issue 6: Home Page Sections (start)

**Sprint 4 (Week 4):**
- Issue 6: Home Page Sections (complete)
- Issue 8: Project Content
- Issue 10: SEO Optimization

**Future Sprints:**
- Medium and Low priority issues as time permits

---

**Document Version:** 1.0  
**Last Updated:** January 21, 2026  
**Next Review:** After completing Critical Priority issues
