import { siteConfig } from "@/lib/site-config"

export function PersonSchema() {
    const personSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: siteConfig.author.name,
        jobTitle: siteConfig.author.jobTitle,
        description: siteConfig.siteDescription,
        url: siteConfig.siteUrl,
        email: siteConfig.author.email,
        sameAs: [siteConfig.author.linkedin],
        image: `${siteConfig.siteUrl}${siteConfig.defaultOgImage}`,
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
    )
}
