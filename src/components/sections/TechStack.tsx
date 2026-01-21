"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { GradientText } from "@/components/ui/gradient-text"
import { techStackContent } from "@/content/sections/tech-stack"

export function TechStack() {
    return (
        <section className="container mx-auto space-y-8 py-12 px-6 md:px-12 lg:px-24 md:py-24 lg:py-32 max-w-screen-2xl">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
                <h2 className="">
                    {techStackContent.heading.prefix}{" "}
                    <GradientText>{techStackContent.heading.highlight}</GradientText>
                </h2>
                <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                    {techStackContent.description}
                </p>
            </div>
            <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3 lg:grid-cols-5">
                {techStackContent.technologies.map((tech, index) => (
                    <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05, y: -4 }}
                        className="flex flex-col items-center justify-center gap-3 rounded-lg border bg-card p-6 shadow-sm transition-all hover:shadow-md hover:border-primary/50"
                    >
                        <div className="relative h-10 w-10">
                            <Image
                                src={tech.logo}
                                alt={tech.name}
                                fill
                                className="object-contain logo-adaptive"
                            />
                        </div>
                        <span className="text-sm font-semibold">{tech.name}</span>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
