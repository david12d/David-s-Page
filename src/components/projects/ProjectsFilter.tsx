"use client"

import { useMemo } from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface Project {
    slug: string
    title: string
    description: string
    tags: string[]
    url: string
    category: string
}

interface ProjectsFilterProps {
    projects: Project[]
}

export function ProjectsFilter({ projects }: ProjectsFilterProps) {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    const categories = useMemo(() => {
        const unique = Array.from(new Set(projects.map((p) => p.category)))
        return ["All", ...unique]
    }, [projects])

    const selectedCategory = searchParams.get("category")
    const activeCategory =
        selectedCategory && categories.includes(selectedCategory)
            ? selectedCategory
            : "All"

    const filteredProjects =
        activeCategory === "All"
            ? projects
            : projects.filter((project) => project.category === activeCategory)

    const updateCategory = (category: string) => {
        const params = new URLSearchParams(searchParams.toString())
        if (category === "All") {
            params.delete("category")
        } else {
            params.set("category", category)
        }

        const query = params.toString()
        router.push(query ? `${pathname}?${query}` : pathname, { scroll: false })
    }

    return (
        <div className="space-y-8">
            <div className="flex flex-wrap gap-2" role="list">
                {categories.map((category) => {
                    const isActive = category === activeCategory
                    return (
                        <button
                            key={category}
                            type="button"
                            onClick={() => updateCategory(category)}
                            aria-pressed={isActive}
                            className={`inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                                isActive
                                    ? "bg-primary text-primary-foreground"
                                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                            }`}
                        >
                            {category}
                        </button>
                    )
                })}
            </div>

            {filteredProjects.length === 0 ? (
                <div className="rounded-lg border border-dashed p-10 text-center text-muted-foreground">
                    No projects found for this category.
                </div>
            ) : (
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredProjects.map((project) => (
                        <Card key={project.slug} className="flex flex-col">
                            <CardHeader>
                                <CardTitle>{project.title}</CardTitle>
                                <CardDescription className="mt-2">
                                    {project.description}
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="flex-1">
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button asChild className="w-full">
                                    <Link href={project.url}>
                                        View Project{" "}
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    )
}
