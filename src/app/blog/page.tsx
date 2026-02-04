import { blogPageContent } from "@/content/pages/blog"
import { siteConfig } from "@/lib/site-config"
import { BlogPage } from "./BlogPage"

const description = blogPageContent.description

export const metadata = {
    title: "Blog",
    description,
    openGraph: {
        title: "Blog",
        description,
        url: `${siteConfig.siteUrl}/blog`,
    },
    alternates: {
        canonical: `${siteConfig.siteUrl}/blog`,
    },
}

export default function Blog() {
    return <BlogPage />
}
