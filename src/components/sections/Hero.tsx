"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GradientText } from "@/components/ui/gradient-text"
import { ContactDrawer } from "@/components/ui/contact-drawer"
import { heroContent } from "@/content/sections/hero"

export function Hero() {
    const [contactDrawerOpen, setContactDrawerOpen] = useState(false)

    return (
        <section className="container mx-auto flex min-h-[calc(100vh-3.5rem)] max-w-screen-2xl flex-col items-center justify-center space-y-8 py-24 px-6 md:px-12 lg:px-24 text-center md:py-32">
            <div className="space-y-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="flex justify-center mb-8"
                >
                    <div className="relative w-48 h-48 md:w-60 md:h-60 rounded-full overflow-hidden border-4 border-background shadow-xl">
                        <Image
                            src={heroContent.image}
                            alt="Profile"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </motion.div>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className=""
                >
                    {heroContent.heading.line1} <br className="hidden sm:inline" />
                    <span className="text-primary">{heroContent.heading.line2}</span>{" "}
                    <GradientText>{heroContent.heading.highlight}</GradientText>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mx-auto max-w-[42rem] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
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
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <rect width="20" height="16" x="2" y="4" rx="2" />
                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                            </svg>
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
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                <rect width="4" height="12" x="2" y="9" />
                                <circle cx="4" cy="4" r="2" />
                            </svg>
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
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                                <line x1="16" x2="16" y1="2" y2="6" />
                                <line x1="8" x2="8" y1="2" y2="6" />
                                <line x1="3" x2="21" y1="10" y2="10" />
                            </svg>
                        </a>
                    )}
                </div>
            </motion.div>

            <ContactDrawer open={contactDrawerOpen} onOpenChange={setContactDrawerOpen} />
        </section>
    )
}
