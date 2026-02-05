export interface LinkItem {
    label: string
    url: string
    description: string
}

export interface LinkSection {
    title: string
    links: LinkItem[]
}

export const linksPageContent = {
    heading: {
        prefix: "Quick",
        highlight: "Links",
    },
    description:
        "A curated list of places to connect, explore my work, and dive deeper into what I do.",
    sections: [
        {
            title: "Connect",
            links: [
                {
                    label: "Email",
                    url: "mailto:david12ding@gmail.com",
                    description: "Reach out directly for projects, consulting, or collaborations.",
                },
                {
                    label: "LinkedIn",
                    url: "https://www.linkedin.com/in/david-ding-481bbb112/",
                    description: "Professional updates, experience, and networking.",
                },
                {
                    label: "Book a Call",
                    url: "https://calendly.com/david12ding-yrfg/30min",
                    description: "Schedule a 30-minute intro call.",
                },
            ],
        },
        {
            title: "Explore",
            links: [
                {
                    label: "Projects",
                    url: "/projects",
                    description: "Case studies and technology advisory engagements.",
                },
                {
                    label: "Blog",
                    url: "/blog",
                    description: "Insights on cloud, AI, and strategy.",
                },
                {
                    label: "Uses",
                    url: "/uses",
                    description: "Tools, software, and setup details.",
                },
            ],
        },
        {
            title: "More",
            links: [
                {
                    label: "About",
                    url: "/about",
                    description: "Background, services, and experience timeline.",
                },
                {
                    label: "Attribution",
                    url: "/attribution",
                    description: "Credits, inspirations, and acknowledgments.",
                },
            ],
        },
    ] as LinkSection[],
}
