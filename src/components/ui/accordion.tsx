"use client"

import * as React from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface AccordionItemProps {
    title: string
    children: React.ReactNode
    defaultOpen?: boolean
}

export function AccordionItem({ title, children, defaultOpen = false }: AccordionItemProps) {
    const [isOpen, setIsOpen] = React.useState(defaultOpen)

    return (
        <div className="border rounded-lg overflow-hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex w-full items-center justify-between p-4 text-left font-medium hover:bg-accent transition-colors"
            >
                <span>{title}</span>
                <ChevronDown
                    className={cn(
                        "h-4 w-4 transition-transform duration-200",
                        isOpen && "transform rotate-180"
                    )}
                />
            </button>
            {isOpen && (
                <div className="p-4 pt-0 border-t">
                    <div className="prose prose-sm dark:prose-invert max-w-none">
                        {children}
                    </div>
                </div>
            )}
        </div>
    )
}

interface AccordionProps {
    children: React.ReactNode
    className?: string
}

export function Accordion({ children, className }: AccordionProps) {
    return (
        <div className={cn("space-y-2", className)}>
            {children}
        </div>
    )
}
