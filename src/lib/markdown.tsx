/**
 * Simple markdown renderer for blog content
 * Reduces complexity in blog post pages
 */

import React from "react"

interface MarkdownLineProps {
    line: string
    index: number
}

export function MarkdownLine({ line, index }: MarkdownLineProps) {
    // Empty line
    if (line.trim() === "") {
        return <div key={index} className="h-4" />
    }

    // Headers
    if (line.startsWith("# ")) {
        return <h1 key={index} className="text-4xl font-bold mt-8 mb-4">{line.substring(2)}</h1>
    }
    if (line.startsWith("## ")) {
        return <h2 key={index} className="text-3xl font-bold mt-8 mb-4">{line.substring(3)}</h2>
    }
    if (line.startsWith("### ")) {
        return <h3 key={index} className="text-2xl font-semibold mt-6 mb-3">{line.substring(4)}</h3>
    }

    // Code block markers
    if (line.startsWith("```")) {
        const lang = line.substring(3)
        return lang ? <div key={index} className="text-xs text-muted-foreground mt-4">{lang}</div> : null
    }

    // List items
    if (line.startsWith("- ")) {
        return (
            <li key={index} className="ml-6 list-disc text-muted-foreground">
                {line.substring(2)}
            </li>
        )
    }

    // Inline code
    if (line.includes("`") && !line.startsWith("```")) {
        const parts = line.split("`")
        return (
            <p key={index} className="mb-4 leading-7">
                {parts.map((part, i) =>
                    i % 2 === 0 ? (
                        part
                    ) : (
                        <code key={i} className="px-1.5 py-0.5 rounded bg-muted text-sm font-mono">
                            {part}
                        </code>
                    )
                )}
            </p>
        )
    }

    // Regular paragraph
    return <p key={index} className="mb-4 leading-7 text-muted-foreground">{line}</p>
}

interface MarkdownContentProps {
    content: string
}

export function MarkdownContent({ content }: MarkdownContentProps) {
    return (
        <div className="prose prose-neutral dark:prose-invert max-w-none">
            {content.split("\n").map((line, index) => (
                <MarkdownLine key={index} line={line} index={index} />
            ))}
        </div>
    )
}
