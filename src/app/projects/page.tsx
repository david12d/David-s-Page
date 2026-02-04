import { Suspense } from "react"
import { GradientText } from "@/components/ui/gradient-text"
import { allProjects } from "contentlayer/generated"
import { siteConfig } from "@/lib/site-config"
import { ProjectsFilter } from "@/components/projects/ProjectsFilter"

export const metadata = {
    title: "Projects",
    description:
        "A portfolio of technology advisory, cloud transformation, and innovation projects across various industries.",
    openGraph: {
        title: "Projects",
        description:
            "A portfolio of technology advisory, cloud transformation, and innovation projects across various industries.",
        url: `${siteConfig.siteUrl}/projects`,
    },
    alternates: {
        canonical: `${siteConfig.siteUrl}/projects`,
    },
}

export default function ProjectsPage() {
    return (
        <div className="container mx-auto py-12 px-6 md:px-12 lg:px-24 md:py-24 lg:py-32 max-w-screen-2xl">
            <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
                <div className="flex-1 space-y-4">
                    <h1 className="">
                        <GradientText>Projects</GradientText>
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        A portfolio of technology advisory, cloud transformation, and innovation projects across various industries.
                    </p>
                </div>
            </div>
            <hr className="my-8" />
            <Suspense fallback={<div className="text-muted-foreground">Loading projects...</div>}>
                <ProjectsFilter projects={allProjects} />
            </Suspense>
        </div>
    )
}
