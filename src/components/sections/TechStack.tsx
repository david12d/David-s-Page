"use client"

import { motion } from "framer-motion"

const technologies = [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "PostgreSQL",
    "Prisma",
    "Docker",
    "AWS",
    "Git",
]

export function TechStack() {
    return (
        <section className="container space-y-8 py-12 md:py-24 lg:py-32 max-w-screen-2xl">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
                <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">
                    Tech Stack
                </h2>
                <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                    The technologies I use to build modern applications.
                </p>
            </div>
            <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3 lg:grid-cols-4">
                {technologies.map((tech, index) => (
                    <motion.div
                        key={tech}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-center rounded-lg border bg-background p-4 text-center shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                    >
                        <span className="font-semibold">{tech}</span>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
