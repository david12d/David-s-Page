import type { MetadataRoute } from "next"
import { allBlogPosts, allProjects } from "contentlayer/generated"
import { siteConfig } from "@/lib/site-config"

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = siteConfig.siteUrl
    const now = new Date()

    const staticRoutes: MetadataRoute.Sitemap = [
        {
            url: `${baseUrl}/`,
            lastModified: now,
            changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/projects`,
            lastModified: now,
            changeFrequency: "weekly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: now,
            changeFrequency: "weekly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/uses`,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.6,
        },
        {
            url: `${baseUrl}/attribution`,
            lastModified: now,
            changeFrequency: "yearly",
            priority: 0.4,
        },
        {
            url: `${baseUrl}/links`,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.5,
        },
    ]

    const blogRoutes: MetadataRoute.Sitemap = allBlogPosts.map((post) => ({
        url: `${baseUrl}${post.url}`,
        lastModified: new Date(post.date),
        changeFrequency: "monthly",
        priority: 0.6,
    }))

    const projectRoutes: MetadataRoute.Sitemap = allProjects.map((project) => ({
        url: `${baseUrl}${project.url}`,
        lastModified: now,
        changeFrequency: "yearly",
        priority: 0.6,
    }))

    return [...staticRoutes, ...blogRoutes, ...projectRoutes]
}
