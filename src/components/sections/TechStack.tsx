"use client"

import { motion } from "framer-motion"
import {
    Code2,
    Database,
    Cloud,
    GitBranch,
    Box,
    Palette,
    Server,
    Container
} from "lucide-react"

const technologies = [
    { name: "Next.js", icon: Code2 },
    { name: "React", icon: Code2 },
    { name: "TypeScript", icon: Code2 },
    { name: "Tailwind CSS", icon: Palette },
    { name: "Node.js", icon: Server },
    { name: "PostgreSQL", icon: Database },
    { name: "Prisma", icon: Database },
    { name: "Docker", icon: Container },
    { name: "AWS", icon: Cloud },
    { name: "Git", icon: GitBranch },
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
            <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3 lg:grid-cols-5">
                {technologies.map((tech, index) => {
                    const Icon = tech.icon
                    return (
                        <motion.div
                            key={tech.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05, y: -4 }}
                            className="flex flex-col items-center justify-center gap-3 rounded-lg border bg-card p-6 shadow-sm transition-all hover:shadow-md hover:border-primary/50"
                        >
                            <Icon className="h-8 w-8 text-primary" />
                            <span className="text-sm font-semibold">{tech.name}</span>
                        </motion.div>
                    )
                })}
            </div>
        </section>
    )
}
