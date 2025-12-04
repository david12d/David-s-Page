import { Mail, Linkedin, Calendar, type LucideIcon } from "lucide-react"

export const contactDrawerContent = {
    heading: "Let's Connect",
    intro: {
        heading: "Get in Touch",
        description: "I'm always open to discussing new projects, technology strategy, or opportunities to collaborate."
    },
    contactMethods: [
        {
            icon: Mail,
            label: "Email",
            value: "david12ding@gmail.com",
            href: "mailto:david12ding@gmail.com"
        },
        {
            icon: Linkedin,
            label: "LinkedIn",
            value: "David Ding",
            href: "https://www.linkedin.com/in/david-ding-481bbb112/"
        },
        {
            icon: Calendar,
            label: "Schedule a Call",
            value: "Book 30min",
            href: "https://calendly.com/david12ding-yrfg/30min"
        }
    ] as Array<{ icon: LucideIcon; label: string; value: string; href: string }>,
    footer: {
        buttonLabel: "Book a Call",
        buttonUrl: "https://calendly.com/david12ding-yrfg/30min"
    },
    accessibility: {
        close: "Close"
    }
}
