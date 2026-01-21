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
            staggerChildren: 0.05,
        },
    },
}

const item = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 },
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
                    className="mb-8 text-center md:text-left"
                >
                    {usesPageContent.setupSection.heading}
                </motion.h2>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="rounded-lg border bg-card p-8 shadow-sm max-w-2xl"
                >
                    <h3 className="mb-2 text-2xl">{usesPageContent.setupSection.hardware.name}</h3>
                    <p className="text-muted-foreground">
                        {usesPageContent.setupSection.hardware.description}
                    </p>
                </motion.div>
            </section>

            {/* Software & Tools Section */}
            <section>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mb-12 text-center md:text-left"
                >
                    {usesPageContent.toolsSection.heading}
                </motion.h2>
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-8 md:gap-12"
                >
                    {usesPageContent.toolsSection.tools.map((tool) => (
                        <motion.div
                            key={tool.name}
                            variants={item}
                            whileHover={{ scale: 1.1, y: -4 }}
                            className="flex items-center justify-center"
                        >
                            <Link
                                href={tool.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full aspect-square relative group"
                            >
                                <Image
                                    src={tool.logo}
                                    alt={tool.name}
                                    fill
                                    className="object-contain transition-opacity group-hover:opacity-80 logo-adaptive"
                                />
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </section>
        </div>
    )
}
