"use client"

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

export default function BlogPage() {
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
                variants={container}
                initial="hidden"
                animate="show"
                className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            >
                {sortedPosts.map((post) => (
                    <motion.article
                        key={post.slug}
                        variants={item}
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
