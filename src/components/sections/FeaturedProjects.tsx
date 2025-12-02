"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

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
]

export function FeaturedProjects() {
    return (
        <section id="projects" className="container space-y-8 py-12 md:py-24 lg:py-32 max-w-screen-2xl">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
                <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">
                    Featured Projects
                </h2>
                <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                    Check out some of my recent work.
                </p>
            </div>
            <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] lg:grid-cols-3">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <Card className="h-full flex flex-col">
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
                    </motion.div>
                ))}
            </div>
            <div className="flex justify-center">
                <Button variant="outline" size="lg" asChild>
                    <Link href="/projects">View All Projects</Link>
                </Button>
            </div>
        </section>
    )
}
