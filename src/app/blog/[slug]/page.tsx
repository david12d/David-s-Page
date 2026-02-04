import { notFound } from "next/navigation"
import { Calendar, Clock, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { allBlogPosts } from "contentlayer/generated"
import { Button } from "@/components/ui/button"
import { Mdx } from "@/components/mdx"
import { siteConfig } from "@/lib/site-config"
import { ArticleSchema } from "@/components/seo/ArticleSchema"
import { ShareBar } from "@/components/blog/ShareBar"

interface PageProps {
    params: Promise<{
        slug: string
    }>
}

export async function generateStaticParams() {
    return allBlogPosts.map((post) => ({
        slug: post.slug,
    }))
}

export async function generateMetadata({ params }: PageProps) {
    const { slug } = await params
    const post = allBlogPosts.find((p) => p.slug === slug)

    if (!post) {
        return {
            title: "Post Not Found",
        }
    }

    const ogImage = post.image ?? siteConfig.defaultOgImage
    const url = `${siteConfig.siteUrl}${post.url}`

    return {
        title: post.title,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: "article",
            url,
            publishedTime: post.date,
            authors: [siteConfig.author.name],
            tags: post.tags,
            images: [
                {
                    url: ogImage,
                    width: 1200,
                    height: 630,
                    alt: post.title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.excerpt,
            images: [ogImage],
        },
        alternates: {
            canonical: url,
        },
    }
}

export default async function BlogPostPage({ params }: PageProps) {
    const { slug } = await params
    const post = allBlogPosts.find((p) => p.slug === slug)

    if (!post) {
        notFound()
    }

    const postUrl = `${siteConfig.siteUrl}${post.url}`

    return (
        <article className="container mx-auto max-w-4xl py-12 px-6 md:px-12 lg:px-24 md:py-24">
            <ArticleSchema
                title={post.title}
                description={post.excerpt}
                url={postUrl}
                datePublished={post.date}
                tags={post.tags}
            />
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
                <ShareBar title={post.title} url={postUrl} />
            </header>

            <Mdx code={post.body.code} />

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
