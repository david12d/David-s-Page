import { aboutPageContent } from "@/content/pages/about"
import { siteConfig } from "@/lib/site-config"
import { AboutPage } from "./AboutPage"

const description = aboutPageContent.introParagraphs[0]

export const metadata = {
    title: "About",
    description,
    openGraph: {
        title: "About",
        description,
        url: `${siteConfig.siteUrl}/about`,
    },
    alternates: {
        canonical: `${siteConfig.siteUrl}/about`,
    },
}

export default function About() {
    return <AboutPage />
}
