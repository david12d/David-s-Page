"use client"

import { motion } from "framer-motion"
import { GradientText } from "@/components/ui/gradient-text"
import {
    Code2,
    Users,
    Coffee,
    Award,
} from "lucide-react"

const stats = [
    {
        value: "50+",
        label: "Projects Completed",
        icon: Code2
    },
    {
        value: "30+",
        label: "Happy Clients",
        icon: Users
    },
    {
        value: "1000+",
        label: "Cups of Coffee",
        icon: Coffee
    },
    {
        value: "5+",
        label: "Years Experience",
        icon: Award
    },
]

export function SiteStats() {
    return (
        <section className="container mx-auto space-y-8 py-12 px-6 md:px-12 lg:px-24 md:py-24 lg:py-32 max-w-screen-2xl">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
                <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">
                    By the <GradientText>Numbers</GradientText>
                </h2>
                <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                    A snapshot of my journey as a developer.
                </p>
            </div>
            <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] lg:grid-cols-4">
                {stats.map((stat, index) => {
                    const Icon = stat.icon
                    return (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05, y: -4 }}
                            className="flex flex-col items-center justify-center gap-3 rounded-lg border bg-card p-8 shadow-sm transition-all hover:shadow-md hover:border-primary/50"
                        >
                            <Icon className="h-10 w-10 text-primary" />
                            <div className="text-center">
                                <div className="text-4xl font-bold tracking-tight">
                                    {stat.value}
                                </div>
                                <div className="text-sm text-muted-foreground mt-1">
                                    {stat.label}
                                </div>
                            </div>
                        </motion.div>
                    )
                })}
            </div>
        </section>
    )
}
