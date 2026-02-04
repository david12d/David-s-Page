import { usesPageContent } from "@/content/pages/uses"
import { siteConfig } from "@/lib/site-config"
import { UsesPage } from "./UsesPage"

const description = usesPageContent.introduction

export const metadata = {
    title: "Uses",
    description,
    openGraph: {
        title: "Uses",
        description,
        url: `${siteConfig.siteUrl}/uses`,
    },
    alternates: {
        canonical: `${siteConfig.siteUrl}/uses`,
    },
}

export default function Uses() {
    return <UsesPage />
}
