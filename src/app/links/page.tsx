import Link from "next/link"
import { GradientText } from "@/components/ui/gradient-text"
import { linksPageContent } from "@/content/pages/links"
import { siteConfig } from "@/lib/site-config"

const description = linksPageContent.description

export const metadata = {
    title: "Links",
    description,
    openGraph: {
        title: "Links",
        description,
        url: `${siteConfig.siteUrl}/links`,
    },
    alternates: {
        canonical: `${siteConfig.siteUrl}/links`,
    },
}

export default function LinksPage() {
    return (
        <div className="container mx-auto max-w-screen-2xl py-12 px-6 md:px-12 lg:px-24 md:py-24 lg:py-32">
            <header className="mb-12">
                <h1 className="mb-4">
                    {linksPageContent.heading.prefix}{" "}
                    <GradientText>{linksPageContent.heading.highlight}</GradientText>
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl">
                    {linksPageContent.description}
                </p>
            </header>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {linksPageContent.sections.map((section) => (
                    <div key={section.title} className="rounded-lg border bg-card p-6">
                        <h2 className="mb-4 text-xl font-semibold">{section.title}</h2>
                        <div className="space-y-4">
                            {section.links.map((link) => (
                                (() => {
                                    const isExternal =
                                        link.url.startsWith("http") ||
                                        link.url.startsWith("mailto:")
                                    return (
                                        <Link
                                            key={link.label}
                                            href={link.url}
                                            target={isExternal ? "_blank" : undefined}
                                            rel={isExternal ? "noopener noreferrer" : undefined}
                                            className="block rounded-md border border-transparent p-3 transition-colors hover:border-primary/40 hover:bg-secondary/40"
                                        >
                                            <div className="text-base font-semibold">
                                                {link.label}
                                            </div>
                                            <p className="text-sm text-muted-foreground">
                                                {link.description}
                                            </p>
                                        </Link>
                                    )
                                })()
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
