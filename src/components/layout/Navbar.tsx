"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { CommandPalette } from "@/components/ui/command-palette"
import { ContactDrawer } from "@/components/ui/contact-drawer"
import { MoreHorizontal, Menu } from "lucide-react"
import { ThemeToggle } from "@/components/ui/theme-toggle"

const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Work", path: "/projects" },
    { name: "Blog", path: "/blog" },
]

export function Navbar() {
    const pathname = usePathname()
    const [commandOpen, setCommandOpen] = React.useState(false)
    const [contactOpen, setContactOpen] = React.useState(false)

    return (
        <>
            <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container flex h-14 max-w-screen-2xl items-center justify-between px-4 md:px-8">
                    {/* Desktop Navigation */}
                    <div className="mr-4 hidden md:flex">
                        <Link href="/" className="mr-6 flex items-center space-x-2">
                            <span className="hidden font-bold sm:inline-block">
                                David Portfolio
                            </span>
                        </Link>
                        <nav className="flex items-center gap-6 text-sm">
                            {navItems.map((item) => (
                                <Link
                                    key={item.path}
                                    href={item.path}
                                    className={cn(
                                        "transition-colors hover:text-foreground/80",
                                        pathname === item.path ? "text-foreground" : "text-foreground/60"
                                    )}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Mobile Brand */}
                    <div className="flex md:hidden">
                        <Link href="/" className="flex items-center space-x-2">
                            <span className="font-bold">David</span>
                        </Link>
                    </div>

                    {/* Right Side Actions */}
                    <div className="flex items-center gap-2">
                        {/* Desktop Actions */}
                        <div className="hidden md:flex items-center gap-2">
                            <Button
                                variant="outline"
                                size="sm"
                                className="text-muted-foreground px-2 font-mono text-xs"
                                onClick={() => setCommandOpen(true)}
                            >
                                <span className="mr-1">⌘</span>K
                            </Button>
                            <Button
                                size="sm"
                                onClick={() => setContactOpen(true)}
                            >
                                Let&apos;s Connect
                            </Button>
                            <ThemeToggle />
                        </div>

                        {/* Mobile Menu Button */}
                        <Button
                            variant="ghost"
                            size="sm"
                            className="md:hidden"
                            onClick={() => setCommandOpen(true)}
                        >
                            <Menu className="h-5 w-5" />
                            <span className="sr-only">Toggle menu</span>
                        </Button>
                        <div className="md:hidden">
                            <ThemeToggle />
                        </div>
                    </div>
                </div>
            </header>

            {/* Command Palette */}
            <CommandPalette open={commandOpen} onOpenChange={setCommandOpen} />

            {/* Contact Drawer */}
            <ContactDrawer open={contactOpen} onOpenChange={setContactOpen} />
        </>
    )
}
