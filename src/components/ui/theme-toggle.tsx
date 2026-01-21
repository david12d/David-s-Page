"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
    const [isDark, setIsDark] = React.useState(false)
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
        setMounted(true)
        // Check if dark mode was previously set
        const isDarkMode = document.documentElement.classList.contains("dark")
        setIsDark(isDarkMode)
    }, [])

    const toggleTheme = () => {
        const newIsDark = !isDark
        setIsDark(newIsDark)

        if (newIsDark) {
            document.documentElement.classList.add("dark")
            localStorage.setItem("theme", "dark")
        } else {
            document.documentElement.classList.remove("dark")
            localStorage.setItem("theme", "light")
        }
    }

    // Prevent hydration mismatch
    if (!mounted) {
        return (
            <Button
                variant="outline"
                size="icon"
                className="h-10 w-10 rounded-full border-[#d4c9b5] bg-[#e8e0d0]/50 backdrop-blur-xl text-muted-foreground hover:bg-[#d4c9b5]/50 dark:border-white/10 dark:bg-zinc-900/50 dark:hover:bg-white/5"
            >
                <Sun className="h-4 w-4" />
                <span className="sr-only">Toggle theme</span>
            </Button>
        )
    }

    return (
        <Button
            variant="outline"
            size="icon"
            className="h-10 w-10 rounded-full border-[#d4c9b5] bg-[#e8e0d0]/50 backdrop-blur-xl text-muted-foreground hover:bg-[#d4c9b5]/50 dark:border-white/10 dark:bg-zinc-900/50 dark:hover:bg-white/5"
            onClick={toggleTheme}
        >
            {isDark ? (
                <Sun className="h-4 w-4" />
            ) : (
                <Moon className="h-4 w-4" />
            )}
            <span className="sr-only">Toggle theme</span>
        </Button>
    )
}
