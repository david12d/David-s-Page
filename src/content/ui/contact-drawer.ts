import { Mail, Github, Linkedin, Twitter, type LucideIcon } from "lucide-react"

export const contactDrawerContent = {
    heading: "Let's Connect",
    intro: {
        heading: "Get in Touch",
        description: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision."
    },
    contactMethods: [
        {
            icon: Mail,
            label: "Email",
            value: "your@email.com",
            href: "mailto:your@email.com"
        },
        {
            icon: Github,
            label: "GitHub",
            value: "@yourusername",
            href: "https://github.com/yourusername"
        },
        {
            icon: Linkedin,
            label: "LinkedIn",
            value: "@yourusername",
            href: "https://linkedin.com/in/yourusername"
        },
        {
            icon: Twitter,
            label: "Twitter",
            value: "@yourusername",
            href: "https://twitter.com/yourusername"
        }
    ] as Array<{ icon: LucideIcon; label: string; value: string; href: string }>,
    footer: {
        buttonLabel: "Book a Call",
        buttonUrl: "https://calendly.com/yourusername"
    },
    accessibility: {
        close: "Close"
    }
}
