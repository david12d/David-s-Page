import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const projects = [
    {
        title: "E-Commerce Platform",
        description:
            "A full-featured e-commerce platform built with Next.js, Stripe, and Prisma.",
        tags: ["Next.js", "TypeScript", "Stripe", "Prisma"],
        link: "#",
    },
    {
        title: "Task Management App",
        description:
            "A real-time task management application with drag-and-drop functionality.",
        tags: ["React", "Firebase", "Tailwind CSS"],
        link: "#",
    },
    {
        title: "AI Content Generator",
        description:
            "An AI-powered application that generates blog posts and social media content.",
        tags: ["OpenAI API", "Next.js", "Vercel AI SDK"],
        link: "#",
    },
    {
        title: "Portfolio Website",
        description:
            "My personal portfolio website built with Next.js and Tailwind CSS.",
        tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
        link: "#",
    },
]

export default function ProjectsPage() {
    return (
        <div className="container py-12 md:py-24 lg:py-32 max-w-screen-2xl">
            <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
                <div className="flex-1 space-y-4">
                    <h1 className="inline-block font-bold text-4xl tracking-tight lg:text-5xl">
                        Projects
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        A collection of projects I&apos;ve worked on.
                    </p>
                </div>
            </div>
            <hr className="my-8" />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                    <Card key={project.title} className="flex flex-col">
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
                                <Link href={project.link}>
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
