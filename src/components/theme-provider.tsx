"use client"

import * as React from "react"

type Theme = "dark" | "light"

type ThemeProviderProps = {
    children: React.ReactNode
    defaultTheme?: Theme
}

type ThemeProviderState = {
    theme: Theme
    setTheme: (theme: Theme) => void
    toggleTheme: () => void
}

const initialState: ThemeProviderState = {
    theme: "dark",
    setTheme: () => null,
    toggleTheme: () => null,
}

const ThemeProviderContext = React.createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
    children,
    defaultTheme = "dark",
    ...props
}: ThemeProviderProps) {
    // Initialize theme synchronously from localStorage to prevent hydration mismatch
    const [theme, setTheme] = React.useState<Theme>(() => {
        if (typeof window !== "undefined") {
            const storedTheme = localStorage.getItem("theme") as Theme | null
            return storedTheme || defaultTheme
        }
        return defaultTheme
    })

    // Apply theme to document and save to localStorage
    React.useEffect(() => {
        const root = window.document.documentElement
        root.classList.remove("light", "dark")
        root.classList.add(theme)
        localStorage.setItem("theme", theme)
    }, [theme])

    const toggleTheme = React.useCallback(() => {
        setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"))
    }, [])

    const value = React.useMemo(
        () => ({
            theme,
            setTheme,
            toggleTheme,
        }),
        [theme, toggleTheme]
    )

    return (
        <ThemeProviderContext.Provider {...props} value={value}>
            {children}
        </ThemeProviderContext.Provider>
    )
}

export const useTheme = () => {
    const context = React.useContext(ThemeProviderContext)

    if (context === undefined)
        throw new Error("useTheme must be used within a ThemeProvider")

    return context
}
