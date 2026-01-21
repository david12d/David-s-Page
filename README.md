# David's Portfolio Website

A modern, responsive portfolio website built with Next.js 16, React 19, TypeScript, and Tailwind CSS 4. This project showcases professional work, blog posts, and personal projects with a focus on clean design, smooth animations, and excellent user experience.

## 🚀 Live Demo

Visit the live site: [Coming Soon]

## ✨ Features

### Core Functionality
- **Responsive Design** - Fully responsive across all devices
- **Dark Theme** - Enforced dark mode with carefully crafted color palette
- **Command Palette** - Quick navigation with ⌘K/Ctrl+K keyboard shortcut
- **Contact Drawer** - Easy-to-access contact form
- **Smooth Animations** - Framer Motion powered transitions and effects

### Pages
- **Home** - Hero section, tech stack showcase, featured projects, testimonials
- **About** - Professional background and experience
- **Projects** - Portfolio showcase with detailed case studies
- **Blog** - Technical writing and insights
- **Uses** - Tools and software setup
- **Attribution** - Credits and inspirations

### Technical Highlights
- **Next.js 16** with App Router
- **React 19** with Server Components
- **TypeScript** for type safety
- **Tailwind CSS 4** for styling
- **Framer Motion** for animations
- **Content-driven architecture** - Separated content from components for easy updates

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 16.0.6
- **UI Library**: React 19.2.0
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion 12.23.25
- **Icons**: Lucide React 0.555.0

### UI Components
- **Radix UI** - Accessible component primitives
- **CMDK** - Command palette implementation
- **CVA** - Class variance authority for component variants

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **TypeScript** - Static type checking

## 📁 Project Structure

```
David Portfolio v2/
├── public/                 # Static assets
│   ├── blog/              # Blog post images
│   ├── projects/          # Project images
│   └── tools/             # Tool logos for Uses page
├── src/
│   ├── app/               # Next.js app router pages
│   │   ├── about/
│   │   ├── attribution/
│   │   ├── blog/
│   │   ├── projects/
│   │   └── uses/
│   ├── components/        # React components
│   │   ├── layout/        # Layout components (Navbar, Footer)
│   │   ├── sections/      # Page sections (Hero, TechStack, etc.)
│   │   └── ui/            # Reusable UI components
│   ├── content/           # Content files (separated from components)
│   │   ├── layout/        # Layout content
│   │   ├── pages/         # Page-specific content
│   │   ├── sections/      # Section content
│   │   └── ui/            # UI component content
│   └── lib/               # Utility functions and data
├── BACKLOG.md             # Development backlog and progress tracking
├── GAP_ANALYSIS.md        # Feature parity analysis
└── CHANGELOG.md           # Project changelog
```

## 🎯 Key Architectural Decisions

### Content-Driven Architecture
All static content has been extracted from components into dedicated content files in `src/content/`. This separation provides:
- **Easy Updates**: Change content without touching component logic
- **Type Safety**: TypeScript interfaces for all content
- **Maintainability**: Clear separation of concerns
- **Scalability**: Simple to add new content sections

### Component Organization
- **Layout Components**: Persistent UI elements (Navbar, Footer)
- **Section Components**: Reusable page sections (Hero, TechStack, FeaturedProjects)
- **UI Components**: Atomic design elements (Button, Card, Accordion)

### Styling Approach
- **Tailwind CSS 4**: Utility-first CSS framework
- **Dark Theme Only**: Simplified theme management
- **Responsive Design**: Mobile-first approach
- **Custom Utilities**: Extended Tailwind configuration for project-specific needs

## 🚀 Getting Started

### Prerequisites
- Node.js 20+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/david12d/David-s-Page.git
cd "David Portfolio v2"
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 📝 Content Management

### Updating Content

All content is managed through TypeScript files in `src/content/`:

**Hero Section**: `src/content/sections/hero.ts`
```typescript
export const heroContent = {
  name: "Your Name",
  title: "Your Title",
  // ... more content
}
```

**Projects**: `src/lib/blog-data.ts` and `src/content/sections/featured-projects.ts`

**About Page**: `src/content/pages/about.ts`

**Blog Posts**: `src/lib/blog-data.ts`

### Adding New Projects

1. Add project data to `src/lib/blog-data.ts`
2. Add project image to `public/projects/`
3. Create detail page content in `src/content/sections/featured-projects.ts`

### Adding Blog Posts

1. Add post metadata to `src/lib/blog-data.ts`
2. Add post image to `public/blog/`
3. Create post content in `src/app/blog/[slug]/page.tsx`

## 🎨 Design System

### Colors
- **Primary**: Accent color for interactive elements
- **Background**: Dark theme background
- **Foreground**: Text color
- **Muted**: Secondary text and borders
- **Card**: Component backgrounds

### Typography
- **Headings**: Bold, clear hierarchy
- **Body**: Readable, accessible font sizes
- **Code**: Monospace for technical content

### Spacing
- Consistent spacing scale
- Responsive padding and margins
- Container max-widths for readability

## 📊 Project Status

**Current Progress**: ~40% feature parity with reference design

See [BACKLOG.md](./BACKLOG.md) for detailed progress tracking and [GAP_ANALYSIS.md](./GAP_ANALYSIS.md) for feature comparison.

### Completed Features ✅
- Core navigation and layout
- Home page with hero, tech stack, and featured projects
- Project detail pages with accordions
- Blog listing and detail pages
- About page structure
- Uses page with tools showcase
- Attribution page
- Footer with multi-column layout
- Command palette (⌘K)
- Contact drawer
- Dark theme enforcement
- Responsive design foundation

### In Progress 🚧
- Enhanced animations and transitions
- Blog MDX integration
- GitHub stats integration
- Additional page polish

### Planned Features 📋
- Guestbook page
- Bucket list page
- RSS feed
- Enhanced SEO optimization
- Performance optimization
- Accessibility audit

## 🔄 Development Workflow

This project uses a declarative GitHub-based workflow with issues, feature branches, and pull requests. See [WORKFLOW.md](./WORKFLOW.md) for complete documentation.

**Quick Start:**
```bash
# Start a new task
.agent/scripts/start-task.sh

# Finish and create PR
.agent/scripts/finish-task.sh
```

For full workflow details, see:
- [Development Workflow Guide](./WORKFLOW.md)
- [GitHub Workflow Documentation](./.agent/workflows/github-workflow.md)

## 🤝 Contributing

This is a personal portfolio project, but suggestions and feedback are welcome! Feel free to open an issue or submit a pull request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Design inspiration from [aayushbharti.in](https://aayushbharti.in)
- Built with [Next.js](https://nextjs.org/)
- UI components from [Radix UI](https://www.radix-ui.com/)
- Icons from [Lucide](https://lucide.dev/)

## 📧 Contact

- **Email**: [Your Email]
- **LinkedIn**: [Your LinkedIn]
- **Website**: [Your Website]

---

**Last Updated**: December 4, 2025
