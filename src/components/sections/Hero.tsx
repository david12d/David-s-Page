"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Mail, Linkedin, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GradientText } from "@/components/ui/gradient-text"
import { ContactDrawer } from "@/components/ui/contact-drawer"
import { heroContent } from "@/content/sections/hero"

export function Hero() {
    const [contactDrawerOpen, setContactDrawerOpen] = useState(false)

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
                    <span className="text-primary">{heroContent.heading.line2}</span>{" "}
                    <GradientText>{heroContent.heading.highlight}</GradientText>
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
                <Button variant="outline" size="lg" onClick={() => setContactDrawerOpen(true)}>
                    {heroContent.buttons.getInTouch} <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
            </motion.div>

            {/* Contact Links */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex flex-col items-center gap-4 pt-8"
            >
                <p className="text-sm text-muted-foreground">Get in touch</p>
                <div className="flex gap-6">
                    {heroContent.links.email && (
                        <a
                            href={`mailto:${heroContent.links.email}`}
                            className="text-muted-foreground hover:text-primary transition-colors"
                            aria-label="Email"
                        >
                            <Mail className="h-5 w-5" />
                        </a>
                    )}
                    {heroContent.links.linkedin && (
                        <a
                            href={heroContent.links.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                            aria-label="LinkedIn"
                        >
                            <Linkedin className="h-5 w-5" />
                        </a>
                    )}
                    {heroContent.links.calendly && (
                        <a
                            href={heroContent.links.calendly}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                            aria-label="Schedule a meeting"
                        >
                            <Calendar className="h-5 w-5" />
                        </a>
                    )}
                </div>
            </motion.div>

            <ContactDrawer open={contactDrawerOpen} onOpenChange={setContactDrawerOpen} />
        </section>
    )
}
