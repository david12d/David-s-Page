"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { Command } from "cmdk"
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
    Search,
    X
} from "lucide-react"
import { cn } from "@/lib/utils"

interface CommandPaletteProps {
    open: boolean
    onOpenChange: (open: boolean) => void
}

export function CommandPalette({ open, onOpenChange }: CommandPaletteProps) {
    const router = useRouter()
    const [search, setSearch] = React.useState("")

    React.useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                onOpenChange(!open)
            }
            if (e.key === "Escape") {
                onOpenChange(false)
            }
        }

        document.addEventListener("keydown", down)
        return () => document.removeEventListener("keydown", down)
    }, [open, onOpenChange])

    const handleSelect = (callback: () => void) => {
        onOpenChange(false)
        callback()
    }

    if (!open) return null

    return (
        <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm animate-in fade-in-0">
            <div className="fixed left-[50%] top-[50%] z-50 w-full max-w-lg translate-x-[-50%] translate-y-[-50%] border bg-background shadow-lg animate-in fade-in-0 zoom-in-95 slide-in-from-left-1/2 slide-in-from-top-[48%] sm:rounded-lg">
                <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
                    <div className="flex items-center border-b px-3">
                        <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
                        <Command.Input
                            placeholder="Type a command or search..."
                            value={search}
                            onValueChange={setSearch}
                            className="flex h-12 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
                        />
                        <button
                            onClick={() => onOpenChange(false)}
                            className="ml-2 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none"
                        >
                            <X className="h-4 w-4" />
                            <span className="sr-only">Close</span>
                        </button>
                    </div>
                    <Command.List className="max-h-[300px] overflow-y-auto overflow-x-hidden p-2">
                        <Command.Empty className="py-6 text-center text-sm text-muted-foreground">
                            No results found.
                        </Command.Empty>
                        <Command.Group heading="Navigation">
                            <Command.Item
                                onSelect={() => handleSelect(() => router.push("/"))}
                                className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                            >
                                <Home className="mr-2 h-4 w-4" />
                                <span>Home</span>
                            </Command.Item>
                            <Command.Item
                                onSelect={() => handleSelect(() => router.push("/projects"))}
                                className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                            >
                                <FolderKanban className="mr-2 h-4 w-4" />
                                <span>Projects</span>
                            </Command.Item>
                            <Command.Item
                                onSelect={() => handleSelect(() => router.push("/blog"))}
                                className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                            >
                                <FileText className="mr-2 h-4 w-4" />
                                <span>Blog</span>
                            </Command.Item>
                            <Command.Item
                                onSelect={() => handleSelect(() => router.push("/about"))}
                                className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                            >
                                <User className="mr-2 h-4 w-4" />
                                <span>About</span>
                            </Command.Item>
                        </Command.Group>
                        <Command.Group heading="Actions">
                            <Command.Item
                                onSelect={() => handleSelect(() => window.open("https://calendly.com/yourusername", "_blank"))}
                                className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                            >
                                <Calendar className="mr-2 h-4 w-4" />
                                <span>Book a Call</span>
                            </Command.Item>
                            <Command.Item
                                onSelect={() => handleSelect(() => window.open("/resume.pdf", "_blank"))}
                                className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                            >
                                <FileDown className="mr-2 h-4 w-4" />
                                <span>Resume</span>
                            </Command.Item>
                        </Command.Group>
                        <Command.Group heading="Social">
                            <Command.Item
                                onSelect={() => handleSelect(() => window.open("https://github.com/yourusername", "_blank"))}
                                className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                            >
                                <Github className="mr-2 h-4 w-4" />
                                <span>GitHub</span>
                            </Command.Item>
                            <Command.Item
                                onSelect={() => handleSelect(() => window.open("https://linkedin.com/in/yourusername", "_blank"))}
                                className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                            >
                                <Linkedin className="mr-2 h-4 w-4" />
                                <span>LinkedIn</span>
                            </Command.Item>
                            <Command.Item
                                onSelect={() => handleSelect(() => window.open("mailto:your@email.com", "_blank"))}
                                className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                            >
                                <Mail className="mr-2 h-4 w-4" />
                                <span>Email</span>
                            </Command.Item>
                        </Command.Group>
                    </Command.List>
                </Command>
            </div>
        </div>
    )
}
