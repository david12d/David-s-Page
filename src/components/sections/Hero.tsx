"use client"

import { motion } from "framer-motion"
import { ArrowRight, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

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
                    Building Digital <br className="hidden sm:inline" />
                    <span className="text-primary">Experiences</span> That Matter
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mx-auto max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8"
                >
                    I&apos;m David, a Full Stack Developer passionate about building accessible,
                    pixel-perfect, and performant web applications.
                </motion.p>
            </div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex gap-4"
            >
                <Button size="lg" asChild>
                    <a href="#projects">
                        View Projects <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                    <a href="/resume.pdf" target="_blank">
                        Download CV <Download className="ml-2 h-4 w-4" />
                    </a>
                </Button>
            </motion.div>
        </section>
    )
}
