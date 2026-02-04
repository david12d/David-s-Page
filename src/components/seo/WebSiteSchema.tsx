import { siteConfig } from "@/lib/site-config"

export function WebSiteSchema() {
    const webSiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: siteConfig.siteName,
        url: siteConfig.siteUrl,
        description: siteConfig.siteDescription,
        author: {
            "@type": "Person",
            name: siteConfig.author.name,
        },
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
        />
    )
}
