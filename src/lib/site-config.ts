import { heroContent } from "@/content/sections/hero"

export const siteConfig = {
    siteUrl: "https://davidding.com.au",
    siteName: "David Ding",
    siteDescription: heroContent.description,
    defaultOgImage: "/images/og-default.jpg",
    author: {
        name: "David Ding",
        email: "david12ding@gmail.com",
        linkedin: "https://www.linkedin.com/in/david-ding-481bbb112/",
        jobTitle: "Technology & Business Advisor",
    },
} as const
