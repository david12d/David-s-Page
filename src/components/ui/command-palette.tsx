"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { Command } from "cmdk"
import { Search, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { commandPaletteContent } from "@/content/ui/command-palette"

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
                            placeholder={commandPaletteContent.searchPlaceholder}
                            value={search}
                            onValueChange={setSearch}
                            className="flex h-12 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
                        />
                        <button
                            onClick={() => onOpenChange(false)}
                            className="ml-2 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none"
                        >
                            <X className="h-4 w-4" />
                            <span className="sr-only">{commandPaletteContent.accessibility.close}</span>
                        </button>
                    </div>
                    <Command.List className="max-h-[300px] overflow-y-auto overflow-x-hidden p-2">
                        <Command.Empty className="py-6 text-center text-sm text-muted-foreground">
                            {commandPaletteContent.emptyStateMessage}
                        </Command.Empty>
                        <Command.Group heading={commandPaletteContent.groups.navigation.heading}>
                            {commandPaletteContent.groups.navigation.items.map((item) => {
                                const Icon = item.icon
                                return (
                                    <Command.Item
                                        key={item.path}
                                        onSelect={() => handleSelect(() => router.push(item.path))}
                                        className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                                    >
                                        <Icon className="mr-2 h-4 w-4" />
                                        <span>{item.label}</span>
                                    </Command.Item>
                                )
                            })}
                        </Command.Group>
                        <Command.Group heading={commandPaletteContent.groups.actions.heading}>
                            {commandPaletteContent.groups.actions.items.map((item) => {
                                const Icon = item.icon
                                return (
                                    <Command.Item
                                        key={item.url}
                                        onSelect={() => handleSelect(() => window.open(item.url, "_blank"))}
                                        className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                                    >
                                        <Icon className="mr-2 h-4 w-4" />
                                        <span>{item.label}</span>
                                    </Command.Item>
                                )
                            })}
                        </Command.Group>
                        <Command.Group heading={commandPaletteContent.groups.social.heading}>
                            {commandPaletteContent.groups.social.items.map((item) => {
                                const Icon = item.icon
                                return (
                                    <Command.Item
                                        key={item.url}
                                        onSelect={() => handleSelect(() => window.open(item.url, "_blank"))}
                                        className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                                    >
                                        <Icon className="mr-2 h-4 w-4" />
                                        <span>{item.label}</span>
                                    </Command.Item>
                                )
                            })}
                        </Command.Group>
                    </Command.List>
                </Command>
            </div>
        </div>
    )
}
