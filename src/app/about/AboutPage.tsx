"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { GradientText } from "@/components/ui/gradient-text"
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

export function AboutPage() {
    return (
        <div className="container mx-auto max-w-screen-2xl py-12 px-6 md:px-12 lg:px-24 md:py-24 lg:py-32">
            {/* Hero Section */}
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-16 md:mb-24"
            >
                <div className="relative w-72 h-72 mx-auto mb-10 rounded-full overflow-hidden border-4 border-background shadow-xl">
                    <Image
                        src={aboutPageContent.profileImage}
                        alt="Profile"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <h1 className="mb-6">
                    {aboutPageContent.pageHeading.prefix}{" "}
                    <GradientText>{aboutPageContent.pageHeading.highlight}</GradientText>
                </h1>
                <div className="space-y-4 text-lg text-muted-foreground max-w-3xl">
                    {aboutPageContent.introParagraphs.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </div>
            </motion.section>

            {/* Expertise Section */}
            <section className="mb-16 md:mb-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mb-8 md:mb-12"
                >
                    <h2 className="mb-2 text-center md:text-left">
                        {aboutPageContent.servicesSection.heading}
                    </h2>
                    <h3 className="text-xl md:text-2xl text-muted-foreground text-center md:text-left">
                        {aboutPageContent.servicesSection.subHeading}
                    </h3>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-16"
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

                {/* Industries Served */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-xl md:text-2xl mb-8 text-center md:text-left">
                        {aboutPageContent.industriesSection.heading}
                    </h3>
                    <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                        {aboutPageContent.industriesSection.industries.map((industry, index) => (
                            <motion.span
                                key={industry}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="px-4 py-2 bg-secondary/50 rounded-full text-sm font-medium border border-border/50"
                            >
                                {industry}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* Technologies & Certifications Section */}
            <section className="mb-16 md:mb-24">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mb-12 text-center md:text-left"
                >
                    {aboutPageContent.technologiesSection.heading}
                </motion.h2>

                {/* Technologies */}
                <div className="space-y-12 mb-20">
                    {aboutPageContent.technologiesSection.categories.map((category, catIndex) => (
                        <div key={category.name}>
                            <h4 className="text-lg font-semibold mb-6 text-muted-foreground border-b pb-2 inline-block">
                                {category.name}
                            </h4>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                                {category.items.map((tech, index) => (
                                    <motion.div
                                        key={tech.name}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4, delay: index * 0.05 + catIndex * 0.1 }}
                                        viewport={{ once: true }}
                                        whileHover={{ scale: 1.05 }}
                                        className="flex flex-col items-center justify-center gap-3 rounded-lg border bg-card p-4 shadow-sm transition-all hover:shadow-md hover:border-primary/50 h-32"
                                    >
                                        {tech.logo ? (
                                            <div className="relative h-10 w-10">
                                                <Image
                                                    src={tech.logo}
                                                    alt={tech.name}
                                                    fill
                                                    className="object-contain"
                                                />
                                            </div>
                                        ) : (
                                            <div className="h-10 w-10 flex items-center justify-center bg-secondary rounded-full text-xs font-bold">
                                                {tech.name.substring(0, 2).toUpperCase()}
                                            </div>
                                        )}
                                        <span className="text-sm font-medium text-center">{tech.name}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Certifications */}
                <div>
                    <h3 className="text-xl md:text-2xl mb-8 text-center md:text-left">
                        {aboutPageContent.certificationsSection.heading}
                    </h3>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {aboutPageContent.certificationsSection.certifications.map((cert, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="flex flex-col justify-between p-6 bg-card border rounded-lg hover:border-primary/50 transition-colors"
                            >
                                <div>
                                    <h4 className="font-semibold mb-2 line-clamp-2" title={cert.name}>{cert.name}</h4>
                                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                                </div>
                                <div className="mt-4 pt-4 border-t border-border/50 text-xs text-muted-foreground flex justify-between items-center">
                                    <span>Issued</span>
                                    <span className="font-medium bg-secondary/50 px-2 py-1 rounded">{cert.year}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
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
