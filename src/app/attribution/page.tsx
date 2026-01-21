"use client"

import { motion } from "framer-motion"
import { attributionPageContent } from "@/content/pages/attribution"
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations"

export default function AttributionPage() {
    return (
        <div className="container mx-auto max-w-screen-2xl py-12 px-6 md:px-12 lg:px-24 md:py-24 lg:py-32">
            {/* Hero Section */}
            <motion.section
                {...fadeInUp}
                transition={{ duration: 0.5 }}
                className="mb-16 md:mb-24"
            >
                <h1 className="mb-2">{attributionPageContent.pageHeading}</h1>
                <p className="text-xl text-muted-foreground mb-8">{attributionPageContent.subheading}</p>
            </motion.section>

            {/* Journey Section */}
            <motion.section
                {...fadeInUp}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-16 md:mb-24"
            >
                <div className="space-y-4 text-lg text-muted-foreground max-w-3xl">
                    {attributionPageContent.journeyParagraphs.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </div>
            </motion.section>

            {/* Inspirations Section */}
            <motion.section
                {...fadeInUp}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mb-16 md:mb-24"
            >
                <p className="text-lg text-muted-foreground mb-6 max-w-3xl">
                    {attributionPageContent.inspirationsHeading}
                </p>
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="show"
                    className="space-y-4 max-w-3xl"
                >
                    {attributionPageContent.inspirations.map((inspiration, index) => (
                        <motion.div
                            key={index}
                            variants={staggerItem}
                            className="rounded-lg border bg-card p-6 shadow-sm transition-all hover:shadow-md hover:border-primary/50"
                        >
                            <h3 className="mb-2 text-xl font-semibold">{inspiration.name}</h3>
                            <p className="text-muted-foreground">{inspiration.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.section>

            {/* Closing Section */}
            <motion.section
                {...fadeInUp}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="max-w-3xl"
            >
                <p className="text-lg text-muted-foreground">{attributionPageContent.closingMessage}</p>
            </motion.section>
        </div>
    )
}
