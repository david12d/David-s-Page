import { siteConfig } from "@/lib/site-config"

interface ArticleSchemaProps {
    title: string
    description: string
    url: string
    datePublished: string
    dateModified?: string
    tags?: string[]
}

export function ArticleSchema({
    title,
    description,
    url,
    datePublished,
    dateModified,
    tags = [],
}: ArticleSchemaProps) {
    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: title,
        description,
        url,
        datePublished,
        dateModified: dateModified ?? datePublished,
        author: {
            "@type": "Person",
            name: siteConfig.author.name,
            url: siteConfig.siteUrl,
        },
        publisher: {
            "@type": "Person",
            name: siteConfig.author.name,
        },
        keywords: tags.join(", "),
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": url,
        },
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
    )
}
