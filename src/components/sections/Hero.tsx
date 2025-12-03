"use client"

import { motion } from "framer-motion"
import { ArrowRight, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { heroContent } from "@/content/sections/hero"

export function Hero() {
    return (
        <section className="container mx-auto flex min-h-[calc(100vh-3.5rem)] max-w-screen-2xl flex-col items-center justify-center space-y-8 py-24 px-6 md:px-12 lg:px-24 text-center md:py-32">
            <div className="space-y-4">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl"
                >
                    {heroContent.heading.line1} <br className="hidden sm:inline" />
                    <span className="text-primary">{heroContent.heading.line2}</span> {heroContent.heading.highlight}
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mx-auto max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8"
                >
                    {heroContent.description}
                </motion.p>
            </div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex gap-4"
            >
                <Button size="lg" asChild>
                    <a href={heroContent.links.projects}>
                        {heroContent.buttons.viewProjects} <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                    <a href={heroContent.links.resume} target="_blank">
                        {heroContent.buttons.downloadCV} <Download className="ml-2 h-4 w-4" />
                    </a>
                </Button>
            </motion.div>
        </section>
    )
}
