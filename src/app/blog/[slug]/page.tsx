import { notFound } from "next/navigation"
import { Calendar, Clock, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { blogPosts } from "@/lib/blog-data"
import { Button } from "@/components/ui/button"

interface PageProps {
    params: Promise<{
        slug: string
    }>
}

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }))
}

export async function generateMetadata({ params }: PageProps) {
    const { slug } = await params
    const post = blogPosts.find((p) => p.slug === slug)

    if (!post) {
        return {
            title: "Post Not Found",
        }
    }

    return {
        title: `${post.title} | David Portfolio`,
        description: post.excerpt,
    }
}

export default async function BlogPostPage({ params }: PageProps) {
    const { slug } = await params
    const post = blogPosts.find((p) => p.slug === slug)

    if (!post) {
        notFound()
    }

    return (
        <article className="container mx-auto max-w-4xl py-12 px-6 md:px-12 lg:px-24 md:py-24">
            <Link href="/blog" className="inline-block mb-8">
                <Button variant="ghost" size="sm">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Blog
                </Button>
            </Link>

            <header className="mb-8">
                <h1 className="mb-4">{post.title}</h1>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <time dateTime={post.date}>
                            {new Date(post.date).toLocaleDateString('en-US', {
                                month: 'long',
                                day: 'numeric',
                                year: 'numeric'
                            })}
                        </time>
                    </div>
                    <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                    </div>
                </div>
                <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                        <span
                            key={tag}
                            className="inline-flex items-center rounded-md border px-3 py-1 text-sm font-semibold transition-colors border-transparent bg-secondary text-secondary-foreground"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </header>

            <div className="prose prose-neutral dark:prose-invert max-w-none">
                {post.content.split('\n').map((line, index) => {
                    // Simple markdown-like rendering
                    if (line.startsWith('# ')) {
                        return <h1 key={index} className="text-4xl font-bold mt-8 mb-4">{line.substring(2)}</h1>
                    }
                    if (line.startsWith('## ')) {
                        return <h2 key={index} className="text-3xl font-bold mt-8 mb-4">{line.substring(3)}</h2>
                    }
                    if (line.startsWith('### ')) {
                        return <h3 key={index} className="text-2xl font-semibold mt-6 mb-3">{line.substring(4)}</h3>
                    }
                    if (line.startsWith('```')) {
                        const lang = line.substring(3)
                        if (lang) {
                            return <div key={index} className="text-xs text-muted-foreground mt-4">{lang}</div>
                        }
                        return null
                    }
                    if (line.startsWith('- ')) {
                        return (
                            <li key={index} className="ml-6 list-disc text-muted-foreground">
                                {line.substring(2)}
                            </li>
                        )
                    }
                    if (line.trim() === '') {
                        return <div key={index} className="h-4" />
                    }
                    // Check if line contains inline code
                    if (line.includes('`') && !line.startsWith('```')) {
                        const parts = line.split('`')
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
                    return <p key={index} className="mb-4 leading-7 text-muted-foreground">{line}</p>
                })}
            </div>

            <div className="mt-12 pt-8 border-t">
                <Link href="/blog">
                    <Button variant="outline">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to All Posts
                    </Button>
                </Link>
            </div>
        </article>
    )
}
