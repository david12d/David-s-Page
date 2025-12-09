export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  tags: string[]
  content: string
  readTime: string
  image: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: "my-tools-and-setup",
    title: "My Tools and Setup",
    excerpt: "A look at the hardware and software tools I use daily to build products, stay productive, and get things done.",
    date: "2024-12-04",
    tags: ["Productivity", "Tools", "Setup"],
    readTime: "4 min read",
    image: "/blog/my-tools-setup.jpg",
    content: `
# My Tools and Setup

The right tools can make all the difference in productivity and workflow. Here's a comprehensive look at the hardware and software I use daily to build products, collaborate with teams, and stay organized.

## The Setup

### MacBook Pro M1 15" Grey

My primary development machine. The M1 chip provides incredible performance for development work, running multiple applications simultaneously, and handling demanding tasks with ease. The 15" screen gives me plenty of real estate for code, documentation, and design work.

## Software & Tools

I've carefully curated my software stack over the years to optimize for productivity, development efficiency, and seamless collaboration.

### Productivity & Workflow

**Alfred** - My command center for macOS. Alfred replaces Spotlight and adds powerful workflows, clipboard history, and custom actions that save me hours every week.

**Rectangle** - Window management made simple. Keyboard shortcuts to snap windows to different positions and sizes, essential for multitasking on a single screen.

**Things 3** - My task management system. Beautiful, intuitive, and powerful enough to handle complex projects while staying out of the way for quick captures.

**1Password** - Security without friction. All my passwords, API keys, and sensitive information securely stored and accessible across devices.

### Development

**VSCode** - My code editor of choice. Extensive extension ecosystem, great Git integration, and excellent TypeScript support make it perfect for modern web development.

**Antigravity** - AI-powered coding assistant that helps me write better code faster, debug issues, and explore new technologies.

### Knowledge & Collaboration

**Obsidian** - My second brain. Markdown-based note-taking with powerful linking and graph views for building a personal knowledge base.

**Google Workspace** - Email, calendar, docs, and sheets. The collaboration features are unmatched for team work.

**Miro** - Digital whiteboarding for brainstorming, planning, and visual collaboration with teams.

### Project Management

**Linear** - Issue tracking and project management that's fast, beautiful, and built for modern software teams.

### AI & Automation

**Gemini** - Google's AI assistant for research, writing assistance, and exploring ideas.

### Browsers

**Firefox** - My primary browser. Privacy-focused, fast, and excellent developer tools.

### Entertainment

**Spotify** - Music for focus, energy, and relaxation. Curated playlists keep me in the zone during deep work sessions.

## Why These Tools?

I've chosen each tool intentionally based on:

- **Productivity Impact**: Does it save time or improve output quality?
- **User Experience**: Is it enjoyable to use daily?
- **Integration**: Does it work well with my other tools?
- **Reliability**: Can I depend on it for critical work?

The best tool is the one you'll actually use. I regularly evaluate my stack and make changes when something isn't serving me well.

## Continuous Evolution

My setup evolves as new tools emerge and my needs change. I'm always experimenting with new productivity apps, development tools, and workflows to find what works best.

What tools do you swear by? I'd love to hear about your setup!
        `
  },
  {
    slug: "getting-started-with-nextjs",
    title: "Getting Started with Next.js 15",
    excerpt: "Learn how to build modern web applications with the latest version of Next.js, featuring App Router and Server Components.",
    date: "2024-11-15",
    tags: ["Next.js", "React", "Web Development"],
    readTime: "5 min read",
    image: "/blog/nextjs-15.jpg",
    content: `
# Getting Started with Next.js 15

Next.js 15 brings exciting new features and improvements that make building web applications even better. In this post, we'll explore the key features and how to get started.

## What's New in Next.js 15

Next.js 15 introduces several groundbreaking features:

- **Improved App Router**: Better performance and more intuitive API
- **Enhanced Server Components**: Faster server-side rendering
- **Optimized Image Loading**: Better Core Web Vitals scores
- **Streaming Support**: Progressive rendering for better UX

## Setting Up Your First Project

Getting started is simple:

\`\`\`bash
npx create-next-app@latest my-app
cd my-app
npm run dev
\`\`\`

## Server Components vs Client Components

One of the biggest changes is the distinction between Server and Client Components:

\`\`\`tsx
// Server Component (default)
export default function Page() {
  return <h1>Hello from Server</h1>
}

// Client Component
"use client"
export default function InteractiveButton() {
  return <button onClick={() => alert('Hello!')}>Click me</button>
}
\`\`\`

## Conclusion

Next.js 15 is a powerful framework that makes building modern web applications a joy. Give it a try!
        `
  },
  {
    slug: "mastering-typescript",
    title: "Mastering TypeScript for React Development",
    excerpt: "Dive deep into TypeScript features that will level up your React development workflow and catch bugs before they happen.",
    date: "2024-10-28",
    tags: ["TypeScript", "React", "Best Practices"],
    readTime: "8 min read",
    image: "/blog/typescript-react.jpg",
    content: `
# Mastering TypeScript for React Development

TypeScript has become an essential tool for modern React development. Let's explore how to leverage its power effectively.

## Why TypeScript?

TypeScript provides several benefits:

- **Type Safety**: Catch errors at compile time
- **Better IDE Support**: Autocomplete and IntelliSense
- **Refactoring Confidence**: Safe code modifications
- **Documentation**: Types serve as inline documentation

## Essential TypeScript Patterns for React

### Component Props

Always type your component props:

\`\`\`tsx
interface ButtonProps {
  variant: 'primary' | 'secondary'
  onClick: () => void
  children: React.ReactNode
}

export function Button({ variant, onClick, children }: ButtonProps) {
  return (
    <button className={\`btn btn-\${variant}\`} onClick={onClick}>
      {children}
    </button>
  )
}
\`\`\`

### Hooks with TypeScript

Type your custom hooks properly:

\`\`\`tsx
function useToggle(initialValue: boolean = false): [boolean, () => void] {
  const [value, setValue] = useState(initialValue)
  const toggle = () => setValue(v => !v)
  return [value, toggle]
}
\`\`\`

## Advanced Patterns

Use generics for reusable components:

\`\`\`tsx
interface ListProps<T> {
  items: T[]
  renderItem: (item: T) => React.ReactNode
}

function List<T>({ items, renderItem }: ListProps<T>) {
  return <div>{items.map(renderItem)}</div>
}
\`\`\`

## Conclusion

TypeScript transforms how we build React applications, providing safety and better developer experience.
        `
  },
  {
    slug: "building-accessible-web-apps",
    title: "Building Accessible Web Applications",
    excerpt: "Learn essential accessibility principles and practical techniques to make your web applications usable by everyone.",
    date: "2024-10-10",
    tags: ["Accessibility", "Web Development", "Best Practices"],
    readTime: "6 min read",
    image: "/blog/accessibility.jpg",
    content: `
# Building Accessible Web Applications

Web accessibility ensures everyone can use your applications, regardless of their abilities. Let's explore key principles and techniques.

## Why Accessibility Matters

- **Inclusive Design**: Reach a wider audience
- **Legal Requirements**: Comply with regulations (ADA, WCAG)
- **Better UX**: Accessibility improvements benefit all users
- **SEO Benefits**: Better structure helps search engines

## Essential Accessibility Principles

### 1. Semantic HTML

Use the right elements for the job:

\`\`\`html
<!-- Good -->
<button>Click me</button>
<nav>...</nav>
<main>...</main>

<!-- Bad -->
<div onclick="...">Click me</div>
<div class="navigation">...</div>
\`\`\`

### 2. Keyboard Navigation

Ensure all interactive elements are keyboard accessible:

\`\`\`tsx
function Dialog({ isOpen, onClose }: DialogProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [onClose])
  
  return isOpen ? <div role="dialog">...</div> : null
}
\`\`\`

### 3. ARIA Labels

Provide context for screen readers:

\`\`\`tsx
<button aria-label="Close dialog" onClick={onClose}>
  <X className="h-4 w-4" />
</button>
\`\`\`

## Testing for Accessibility

Use these tools:

- **axe DevTools**: Browser extension for accessibility testing
- **WAVE**: Web accessibility evaluation tool
- **Screen Readers**: Test with NVDA, JAWS, or VoiceOver

## Conclusion

Building accessible applications is not just a nice-to-have—it's essential for creating inclusive digital experiences.
        `
  }
]
