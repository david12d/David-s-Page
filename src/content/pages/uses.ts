export interface Tool {
    name: string
    url: string
    logo: string
    description: string
}

export interface ToolCategory {
    title: string
    tools: Tool[]
}

export const usesPageContent = {
    pageHeading: {
        prefix: "My",
        highlight: "Tools"
    },
    introduction: "The right tools can make all the difference in productivity and workflow. Here's a comprehensive look at the hardware and software I use daily to build products, collaborate with teams, and stay organized.",

    setupSection: {
        heading: "The Setup",
        hardware: {
            name: "MacBook Pro M1 15\" Grey",
            description: "My primary development machine. The M1 chip provides incredible performance for development work, running multiple applications simultaneously, and handling demanding tasks with ease. The 15\" screen gives me plenty of real estate for code, documentation, and design work."
        }
    },

    toolCategories: [
        {
            title: "Productivity & Workflow",
            tools: [
                {
                    name: "Alfred",
                    url: "https://www.alfredapp.com/",
                    logo: "/logos/alfred.svg",
                    description: "My command center for macOS. Alfred replaces Spotlight and adds powerful workflows, clipboard history, and custom actions that save me hours every week."
                },
                {
                    name: "Things 3",
                    url: "https://culturedcode.com/things/",
                    logo: "/logos/things3.svg",
                    description: "My task management system. Beautiful, intuitive, and powerful enough to handle complex projects while staying out of the way for quick captures."
                },
                {
                    name: "Rectangle",
                    url: "https://rectangleapp.com/",
                    logo: "/logos/rectangle.svg",
                    description: "Window management made simple. Keyboard shortcuts to snap windows to different positions and sizes, essential for multitasking on a single screen."
                },
                {
                    name: "1Password",
                    url: "https://1password.com/",
                    logo: "/logos/1password.svg",
                    description: "Security without friction. All my passwords, API keys, and sensitive information securely stored and accessible across devices."
                }
            ]
        },
        {
            title: "Development",
            tools: [
                {
                    name: "VSCode",
                    url: "https://code.visualstudio.com/",
                    logo: "/logos/vscode.svg",
                    description: "My code editor of choice. Extensive extension ecosystem, great Git integration, and excellent TypeScript support make it perfect for modern web development."
                },
                {
                    name: "GitHub",
                    url: "https://github.com/",
                    logo: "/logos/github.svg",
                    description: "Version control and collaboration hub. Where all my code lives, with powerful CI/CD workflows and project management."
                },
                {
                    name: "Vercel",
                    url: "https://vercel.com/",
                    logo: "/logos/vercel.svg",
                    description: "Deployment platform for modern web applications. Seamless integration with Next.js for instant previews and production deployments."
                }
            ]
        },
        {
            title: "Knowledge & Collaboration",
            tools: [
                {
                    name: "Obsidian",
                    url: "https://obsidian.md/",
                    logo: "/logos/obsidian.svg",
                    description: "My second brain. Markdown-based note-taking with powerful linking and graph views for building a personal knowledge base."
                },
                {
                    name: "Google Workspace",
                    url: "https://workspace.google.com/",
                    logo: "/logos/google.svg",
                    description: "Email, calendar, docs, and sheets. The collaboration features are unmatched for team work."
                },
                {
                    name: "Miro",
                    url: "https://miro.com/",
                    logo: "/logos/miro.svg",
                    description: "Digital whiteboarding for brainstorming, planning, and visual collaboration with teams."
                },
                {
                    name: "Antigravity",
                    url: "#", // No public URL for internal tool yet, or use a placeholder
                    logo: "/logos/antigravity.svg",
                    description: "AI-powered coding assistant that helps me write better code faster, debug issues, and explore new technologies."
                }
            ]
        },
        {
            title: "Project Management",
            tools: [
                {
                    name: "Linear",
                    url: "https://linear.app/",
                    logo: "/logos/linear.svg",
                    description: "Issue tracking and project management that's fast, beautiful, and built for modern software teams."
                }
            ]
        },
        {
            title: "AI & Automation",
            tools: [
                {
                    name: "Gemini",
                    url: "https://gemini.google.com/",
                    logo: "/logos/gemini.svg",
                    description: "Google's AI assistant for research, writing assistance, and exploring ideas."
                }
            ]
        },
        {
            title: "Browsers",
            tools: [
                {
                    name: "Firefox",
                    url: "https://www.mozilla.org/firefox/",
                    logo: "/logos/firefox.svg",
                    description: "My primary browser. Privacy-focused, fast, and excellent developer tools."
                }
            ]
        },
        {
            title: "Entertainment",
            tools: [
                {
                    name: "Spotify",
                    url: "https://www.spotify.com/",
                    logo: "/logos/spotify.svg",
                    description: "Music for focus, energy, and relaxation. Curated playlists keep me in the zone during deep work sessions."
                }
            ]
        }
    ],

    whyTheseTools: {
        heading: "Why These Tools?",
        description: "I've chosen each tool intentionally based on:",
        criteria: [
            { label: "Productivity Impact", detail: "Does it save time or improve output quality?" },
            { label: "User Experience", detail: "Is it enjoyable to use daily?" },
            { label: "Integration", detail: "Does it work well with my other tools?" },
            { label: "Reliability", detail: "Can I depend on it for critical work?" }
        ],
        closing: "The best tool is the one you'll actually use. I regularly evaluate my stack and make changes when something isn't serving me well."
    }
}
