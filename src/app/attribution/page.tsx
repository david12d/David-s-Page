import { attributionPageContent } from "@/content/pages/attribution"
import { siteConfig } from "@/lib/site-config"
import { AttributionPage } from "./AttributionPage"

const description = attributionPageContent.description

export const metadata = {
    title: "Attribution",
    description,
    openGraph: {
        title: "Attribution",
        description,
        url: `${siteConfig.siteUrl}/attribution`,
    },
    alternates: {
        canonical: `${siteConfig.siteUrl}/attribution`,
    },
}

export default function Attribution() {
    return <AttributionPage />
}
