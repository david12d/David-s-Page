"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const navItems = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
]

export function Navbar() {
    const pathname = usePathname()

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 max-w-screen-2xl items-center justify-between px-4 md:px-8">
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
                <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                    {/* Mobile Menu could go here */}
                    <div className="w-full flex-1 md:w-auto md:flex-none">
                    </div>
                </div>
            </div>
        </header>
    )
}
