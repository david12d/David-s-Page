import {
    Home,
    FolderKanban,
    FileText,
    User,
    Calendar,
    FileDown,
    Github,
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
                { icon: Calendar, label: "Book a Call", url: "https://calendly.com/yourusername" },
                { icon: FileDown, label: "Resume", url: "/resume.pdf" },
            ] as Array<{ icon: LucideIcon; label: string; url: string }>
        },
        social: {
            heading: "Social",
            items: [
                { icon: Github, label: "GitHub", url: "https://github.com/yourusername" },
                { icon: Linkedin, label: "LinkedIn", url: "https://linkedin.com/in/yourusername" },
                { icon: Mail, label: "Email", url: "mailto:your@email.com" },
            ] as Array<{ icon: LucideIcon; label: string; url: string }>
        }
    }
}
