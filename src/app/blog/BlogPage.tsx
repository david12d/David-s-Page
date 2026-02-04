"use client"

import { useState, useMemo } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Clock } from "lucide-react"
import { allBlogPosts } from "contentlayer/generated"
import { GradientText } from "@/components/ui/gradient-text"
import { RelativeTime } from "@/components/ui/relative-time"
import { blogPageContent } from "@/content/pages/blog"

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
}

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
}

// Sort posts by date, newest first
const sortedPosts = allBlogPosts.sort((a, b) =>
    new Date(b.date).getTime() - new Date(a.date).getTime()
)

// Extract unique tags from all posts
const allTags = Array.from(
    new Set(allBlogPosts.flatMap((post) => post.tags))
).sort()

export function BlogPage() {
    const [selectedTag, setSelectedTag] = useState<string | null>(null)
    const [hasInteracted, setHasInteracted] = useState(false)

    const filteredPosts = useMemo(() => {
        if (!selectedTag) return sortedPosts
        return sortedPosts.filter((post) => post.tags.includes(selectedTag))
    }, [selectedTag])

    const handleTagClick = (tag: string | null) => {
        setHasInteracted(true)
        setSelectedTag(tag === selectedTag ? null : tag)
    }

    return (
        <div className="container mx-auto max-w-screen-2xl py-12 px-6 md:px-12 lg:px-24 md:py-24 lg:py-32">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-12 md:mb-16"
            >
                <h1 className="mb-4">
                    {blogPageContent.heading.prefix && `${blogPageContent.heading.prefix} `}
                    <GradientText>{blogPageContent.heading.highlight}</GradientText>
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl">
                    {blogPageContent.description}
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="mb-8 flex flex-wrap gap-2"
            >
                <button
                    type="button"
                    onClick={() => handleTagClick(null)}
                    aria-pressed={selectedTag === null}
                    className={`inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                        selectedTag === null
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    }`}
                >
                    All
                </button>
                {allTags.map((tag) => (
                    <button
                        key={tag}
                        type="button"
                        onClick={() => handleTagClick(tag)}
                        aria-pressed={selectedTag === tag}
                        className={`inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                            selectedTag === tag
                                ? "bg-primary text-primary-foreground"
                                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                        }`}
                    >
                        {tag}
                    </button>
                ))}
            </motion.div>

            <motion.div
                variants={!hasInteracted ? container : undefined}
                initial={!hasInteracted ? "hidden" : false}
                animate="show"
                className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            >
                {filteredPosts.map((post) => (
                    <motion.article
                        key={post.slug}
                        variants={!hasInteracted ? item : undefined}
                        whileHover={{ y: -4 }}
                        className="group"
                    >
                        <Link href={post.url}>
                            <div className="rounded-lg border bg-card p-6 shadow-sm transition-all hover:shadow-md hover:border-primary/50 h-full flex flex-col">
                                <div className="flex-1">
                                    <h2 className="mb-3 text-2xl font-bold group-hover:text-primary transition-colors">
                                        {post.title}
                                    </h2>
                                    <p className="mb-4 text-muted-foreground line-clamp-3">
                                        {post.excerpt}
                                    </p>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex flex-wrap gap-2">
                                        {post.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors border-transparent bg-secondary text-secondary-foreground"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                        <RelativeTime date={post.date} />
                                        <div className="flex items-center gap-1">
                                            <Clock className="h-4 w-4" />
                                            <span>{post.readTime}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </motion.article>
                ))}
            </motion.div>
        </div>
    )
}
