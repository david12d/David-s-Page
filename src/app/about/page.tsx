"use client"

import { motion } from "framer-motion"
import { aboutPageContent } from "@/content/pages/about"

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
        <div className="container mx-auto max-w-screen-2xl py-12 px-6 md:px-12 lg:px-24 md:py-24 lg:py-32">
            {/* Hero Section */}
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-16 md:mb-24"
            >
                <h1 className="mb-6">{aboutPageContent.pageHeading}</h1>
                <div className="space-y-4 text-lg text-muted-foreground max-w-3xl">
                    {aboutPageContent.introParagraphs.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
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
                    {aboutPageContent.servicesSection.heading}
                </motion.h2>
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
                >
                    {aboutPageContent.servicesSection.services.map((service) => {
                        const Icon = service.icon
                        return (
                            <motion.div
                                key={service.title}
                                variants={item}
                                whileHover={{ scale: 1.03, y: -4 }}
                                className="rounded-lg border bg-card p-6 shadow-sm transition-all hover:shadow-md hover:border-primary/50"
                            >
                                <Icon className="h-10 w-10 mb-4 text-primary" />
                                <h3 className="mb-2 text-xl">{service.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {service.description}
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
                    {aboutPageContent.experienceSection.heading}
                </motion.h2>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, amount: 0.1 }}
                    className="space-y-8 max-w-3xl"
                >
                    {aboutPageContent.experienceSection.timeline.map((experience, index) => (
                        <div key={index} className="border-l-2 border-primary/30 pl-6 pb-8 relative">
                            <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-primary" />
                            <h3 className="mb-1">{experience.title}</h3>
                            <p className="text-sm text-muted-foreground mb-2">{experience.period}</p>
                            <p className="text-muted-foreground">
                                {experience.description}
                            </p>
                        </div>
                    ))}
                </motion.div>
            </section>
        </div>
    )
}
