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
import { featuredProjectsContent } from "@/content/sections/featured-projects"

export function FeaturedProjects() {
    return (
        <section id="projects" className="container mx-auto space-y-8 py-12 px-6 md:px-12 lg:px-24 md:py-24 lg:py-32 max-w-screen-2xl">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
                <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">
                    {featuredProjectsContent.heading}
                </h2>
                <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                    {featuredProjectsContent.description}
                </p>
            </div>
            <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] lg:grid-cols-3">
                {featuredProjectsContent.projects.map((project, index) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="group"
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
                                        {featuredProjectsContent.buttons.viewProject} <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    </motion.div>
                ))}
            </div>
            <div className="flex justify-center">
                <Button variant="outline" size="lg" asChild>
                    <Link href="/projects">{featuredProjectsContent.buttons.viewAllProjects}</Link>
                </Button>
            </div>
        </section>
    )
}
