"use client"

import { motion } from "framer-motion"
import { Code2, Palette, Zap, Users } from "lucide-react"

const skills = [
    {
        title: "Frontend Development",
        description: "Building responsive and accessible user interfaces with modern frameworks",
        icon: Code2,
    },
    {
        title: "UI/UX Design",
        description: "Creating beautiful and intuitive user experiences",
        icon: Palette,
    },
    {
        title: "Performance Optimization",
        description: "Ensuring fast load times and smooth interactions",
        icon: Zap,
    },
    {
        title: "Collaboration",
        description: "Working effectively with cross-functional teams",
        icon: Users,
    },
]

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
}

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
}

export default function AboutPage() {
    return (
        <div className="container max-w-screen-2xl py-12 md:py-24 lg:py-32">
            {/* Hero Section */}
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-16 md:mb-24"
            >
                <h1 className="mb-6">About Me</h1>
                <div className="space-y-4 text-lg text-muted-foreground max-w-3xl">
                    <p>
                        Hi! I&apos;m David, a passionate Full Stack Developer with a love for creating
                        beautiful, performant, and accessible web experiences.
                    </p>
                    <p>
                        With several years of experience in web development, I specialize in building
                        modern applications using cutting-edge technologies like Next.js, React, and TypeScript.
                        I believe in writing clean, maintainable code and following best practices.
                    </p>
                    <p>
                        When I&apos;m not coding, you can find me exploring new technologies, contributing
                        to open-source projects, or sharing knowledge with the developer community.
                    </p>
                </div>
            </motion.section>

            {/* What I Do Section */}
            <section className="mb-16 md:mb-24">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mb-8 text-center md:text-left"
                >
                    What I Do
                </motion.h2>
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
                >
                    {skills.map((skill) => {
                        const Icon = skill.icon
                        return (
                            <motion.div
                                key={skill.title}
                                variants={item}
                                whileHover={{ scale: 1.03, y: -4 }}
                                className="rounded-lg border bg-card p-6 shadow-sm transition-all hover:shadow-md hover:border-primary/50"
                            >
                                <Icon className="h-10 w-10 mb-4 text-primary" />
                                <h3 className="mb-2 text-xl">{skill.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {skill.description}
                                </p>
                            </motion.div>
                        )
                    })}
                </motion.div>
            </section>

            {/* Experience Timeline */}
            <section>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mb-8 text-center md:text-left"
                >
                    Experience
                </motion.h2>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="space-y-8 max-w-3xl"
                >
                    <div className="border-l-2 border-primary/30 pl-6 pb-8 relative">
                        <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-primary" />
                        <h3 className="mb-1">Senior Full Stack Developer</h3>
                        <p className="text-sm text-muted-foreground mb-2">2022 - Present</p>
                        <p className="text-muted-foreground">
                            Leading development of complex web applications using Next.js, TypeScript, and modern cloud technologies.
                        </p>
                    </div>
                    <div className="border-l-2 border-primary/30 pl-6 pb-8 relative">
                        <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-primary" />
                        <h3 className="mb-1">Full Stack Developer</h3>
                        <p className="text-sm text-muted-foreground mb-2">2020 - 2022</p>
                        <p className="text-muted-foreground">
                            Developed and maintained multiple web applications, focusing on performance optimization and user experience.
                        </p>
                    </div>
                    <div className="border-l-2 border-primary/30 pl-6 relative">
                        <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-primary" />
                        <h3 className="mb-1">Junior Developer</h3>
                        <p className="text-sm text-muted-foreground mb-2">2018 - 2020</p>
                        <p className="text-muted-foreground">
                            Started my journey in web development, learning modern frameworks and best practices.
                        </p>
                    </div>
                </motion.div>
            </section>
        </div>
    )
}
