import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { allProjects } from "contentlayer/generated"
import { Mdx } from "@/components/mdx"

interface ProjectPageProps {
    params: Promise<{
        slug: string
    }>
}

export async function generateStaticParams() {
    return allProjects.map((project) => ({
        slug: project.slug,
    }))
}

export async function generateMetadata({ params }: ProjectPageProps) {
    const { slug } = await params
    const project = allProjects.find((p) => p.slug === slug)

    if (!project) {
        return {
            title: "Project Not Found",
        }
    }

    return {
        title: `${project.title} | David Portfolio`,
        description: project.description,
    }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
    const { slug } = await params
    const project = allProjects.find((p) => p.slug === slug)

    if (!project) {
        notFound()
    }

    return (
        <article className="container mx-auto max-w-4xl py-12 px-6 md:px-12 lg:px-24 md:py-24">
            <Link href="/projects" className="inline-block mb-8">
                <Button variant="ghost" size="sm">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Projects
                </Button>
            </Link>

            <header className="mb-8">
                <h1 className="mb-4">{project.title}</h1>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <span><strong>Role:</strong> {project.role}</span>
                    {project.timeline && (
                        <span><strong>Timeline:</strong> {project.timeline}</span>
                    )}
                    <span><strong>Category:</strong> {project.category}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="inline-flex items-center rounded-md border px-3 py-1 text-sm font-semibold transition-colors border-transparent bg-secondary text-secondary-foreground"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </header>

            <Mdx code={project.body.code} />

            <div className="mt-12 pt-8 border-t">
                <Link href="/projects">
                    <Button variant="outline">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to All Projects
                    </Button>
                </Link>
            </div>
        </article>
    )
}
