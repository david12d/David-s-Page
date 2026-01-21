"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { CommandPalette } from "@/components/ui/command-palette"
import { ContactDrawer } from "@/components/ui/contact-drawer"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { Menu } from "lucide-react"
import { navbarContent } from "@/content/layout/navbar"

export function Navbar() {
    const pathname = usePathname()
    const [commandOpen, setCommandOpen] = React.useState(false)
    const [contactOpen, setContactOpen] = React.useState(false)

    return (
        <>
            {/* Fixed navbar container */}
            <div className="fixed top-4 left-0 right-0 z-50 px-4 md:px-8">
                <div className="mx-auto max-w-7xl">
                    <div className="flex items-center justify-between gap-4">
                        {/* Logo/Brand - Left Side, Outside Container */}
                        <Link href="/" className="flex-shrink-0">
                            <span className="font-bold font-display text-lg tracking-tight hidden md:inline-block">
                                {navbarContent.brand.full}
                            </span>
                            <span className="font-bold font-display text-lg tracking-tight md:hidden">
                                {navbarContent.brand.short}
                            </span>
                        </Link>

                        {/* Center - Glassmorphism Navigation Container */}
                        <nav className="hidden md:flex flex-1 justify-center">
                            <div className="flex items-center gap-1 rounded-full border border-[#d4c9b5] bg-[#f5f1e8]/50 backdrop-blur-xl px-3 py-2 shadow-lg dark:border-white/10 dark:bg-zinc-900/50">
                                {navbarContent.navItems.map((item) => (
                                    <Link
                                        key={item.path}
                                        href={item.path}
                                        className={cn(
                                            "px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200",
                                            pathname === item.path
                                                ? "bg-[#d4c9b5]/50 text-foreground dark:bg-white/10"
                                                : "text-foreground/60 hover:text-foreground/80 hover:bg-[#d4c9b5]/30 dark:hover:bg-white/5"
                                        )}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                                <Button
                                    size="sm"
                                    className="ml-2 h-8 rounded-full"
                                    onClick={() => setContactOpen(true)}
                                >
                                    {navbarContent.buttons.connect}
                                </Button>
                            </div>
                        </nav>

                        {/* Right Side - Theme Toggle & Command K Button, Outside Container */}
                        <div className="flex items-center gap-2 flex-shrink-0">
                            {/* Theme Toggle Button */}
                            <div className="hidden md:block">
                                <ThemeToggle />
                            </div>

                            {/* Command K Button */}
                            <Button
                                variant="outline"
                                size="icon"
                                className="hidden md:flex h-10 w-10 rounded-full border-[#d4c9b5] bg-[#f5f1e8]/50 backdrop-blur-xl text-muted-foreground hover:bg-[#d4c9b5]/50 dark:border-white/10 dark:bg-zinc-900/50 dark:hover:bg-white/5"
                                onClick={() => setCommandOpen(true)}
                            >
                                <span className="font-mono text-xs">⌘K</span>
                                <span className="sr-only">{navbarContent.buttons.commandPalette}</span>
                            </Button>

                            {/* Mobile Menu Button */}
                            <Button
                                variant="ghost"
                                size="icon"
                                className="md:hidden h-10 w-10"
                                onClick={() => setCommandOpen(true)}
                            >
                                <Menu className="h-5 w-5" />
                                <span className="sr-only">{navbarContent.accessibility.toggleMenu}</span>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Spacer to prevent content from going under fixed navbar */}
            <div className="h-20" />

            {/* Command Palette */}
            <CommandPalette open={commandOpen} onOpenChange={setCommandOpen} />

            {/* Contact Drawer */}
            <ContactDrawer open={contactOpen} onOpenChange={setContactOpen} />
        </>
    )
}

