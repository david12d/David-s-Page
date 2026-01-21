"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { GradientText } from "@/components/ui/gradient-text"
import { usesPageContent } from "@/content/pages/uses"

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

export default function UsesPage() {
    return (
        <div className="container mx-auto max-w-screen-2xl py-12 px-6 md:px-12 lg:px-24 md:py-24 lg:py-32">
            {/* Hero Section */}
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-16 md:mb-24"
            >
                <h1 className="mb-6">
                    {usesPageContent.pageHeading.prefix}{" "}
                    <GradientText>{usesPageContent.pageHeading.highlight}</GradientText>
                </h1>
                <p className="text-lg text-muted-foreground max-w-3xl">
                    {usesPageContent.introduction}
                </p>
            </motion.section>

            {/* Setup Section */}
            <section className="mb-16 md:mb-24">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mb-8"
                >
                    {usesPageContent.setupSection.heading}
                </motion.h2>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="rounded-lg border bg-card p-8 shadow-sm max-w-3xl"
                >
                    <h3 className="mb-3 text-2xl font-semibold">{usesPageContent.setupSection.hardware.name}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                        {usesPageContent.setupSection.hardware.description}
                    </p>
                </motion.div>
            </section>

            {/* Tool Categories */}
            {usesPageContent.toolCategories.map((category) => (
                <section key={category.title} className="mb-16 md:mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="mb-8"
                    >
                        {category.title}
                    </motion.h2>
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="grid gap-6 md:gap-8"
                    >
                        {category.tools.map((tool) => (
                            <motion.div
                                key={tool.name}
                                variants={item}
                                className="group rounded-lg border bg-card p-6 shadow-sm transition-all hover:shadow-md hover:border-primary/30"
                            >
                                <Link
                                    href={tool.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-start gap-6"
                                >
                                    <div className="relative w-12 h-12 shrink-0">
                                        <Image
                                            src={tool.logo}
                                            alt={tool.name}
                                            fill
                                            className="object-contain logo-adaptive transition-transform group-hover:scale-110"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                                            {tool.name}
                                        </h3>
                                        <p className="text-muted-foreground leading-relaxed">
                                            {tool.description}
                                        </p>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                </section>
            ))}

            {/* Why These Tools Section */}
            <section className="mb-16 md:mb-24">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mb-8"
                >
                    {usesPageContent.whyTheseTools.heading}
                </motion.h2>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="max-w-3xl"
                >
                    <p className="text-lg text-muted-foreground mb-6">
                        {usesPageContent.whyTheseTools.description}
                    </p>
                    <ul className="space-y-4 mb-8">
                        {usesPageContent.whyTheseTools.criteria.map((criterion) => (
                            <li key={criterion.label} className="flex items-start gap-3">
                                <span className="text-primary mt-1">•</span>
                                <div>
                                    <span className="font-semibold">{criterion.label}:</span>{" "}
                                    <span className="text-muted-foreground">{criterion.detail}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <p className="text-muted-foreground leading-relaxed">
                        {usesPageContent.whyTheseTools.closing}
                    </p>
                </motion.div>
            </section>
        </div>
    )
}
