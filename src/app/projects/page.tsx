import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GradientText } from "@/components/ui/gradient-text"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { allProjects } from "contentlayer/generated"

// Get unique categories from projects
const categories = ["All", ...Array.from(new Set(allProjects.map(p => p.category)))]

export default function ProjectsPage() {
    return (
        <div className="container mx-auto py-12 px-6 md:px-12 lg:px-24 md:py-24 lg:py-32 max-w-screen-2xl">
            <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
                <div className="flex-1 space-y-4">
                    <h1 className="font-bold text-4xl tracking-tight lg:text-5xl">
                        <GradientText>Projects</GradientText>
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        A portfolio of technology advisory, cloud transformation, and innovation projects across various industries.
                    </p>
                </div>
            </div>
            <hr className="my-8" />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {allProjects.map((project) => (
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
                                    View Project <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    )
}
