import {
    Home,
    FolderKanban,
    FileText,
    User,
    Calendar,
    Linkedin,
    Mail,
    type LucideIcon
} from "lucide-react"

export const commandPaletteContent = {
    searchPlaceholder: "Type a command or search...",
    emptyStateMessage: "No results found.",
    accessibility: {
        close: "Close"
    },
    groups: {
        navigation: {
            heading: "Navigation",
            items: [
                { icon: Home, label: "Home", path: "/" },
                { icon: FolderKanban, label: "Projects", path: "/projects" },
                { icon: FileText, label: "Blog", path: "/blog" },
                { icon: User, label: "About", path: "/about" },
            ] as Array<{ icon: LucideIcon; label: string; path: string }>
        },
        actions: {
            heading: "Actions",
            items: [
                { icon: Calendar, label: "Book a Call", url: "https://calendly.com/david12ding-yrfg/30min" },
            ] as Array<{ icon: LucideIcon; label: string; url: string }>
        },
        social: {
            heading: "Social",
            items: [
                { icon: Linkedin, label: "LinkedIn", url: "https://www.linkedin.com/in/david-ding-481bbb112/" },
                { icon: Mail, label: "Email", url: "mailto:david12ding@gmail.com" },
            ] as Array<{ icon: LucideIcon; label: string; url: string }>
        }
    }
}
