"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"
import { GradientText } from "@/components/ui/gradient-text"
import {
    Card,
    CardContent,
    CardHeader,
} from "@/components/ui/card"
import { testimonialsContent } from "@/content/sections/testimonials"

export function Testimonials() {
    return (
        <section className="container mx-auto space-y-8 py-12 px-6 md:px-12 lg:px-24 md:py-24 lg:py-32 max-w-screen-2xl">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
                <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">
                    {testimonialsContent.heading.prefix && `${testimonialsContent.heading.prefix} `}
                    <GradientText>{testimonialsContent.heading.highlight}</GradientText>
                </h2>
                <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                    {testimonialsContent.description}
                </p>
            </div>
            <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] lg:grid-cols-3">
                {testimonialsContent.testimonials.map((testimonial, index) => (
                    <motion.div
                        key={testimonial.author}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
                        viewport={{ once: true }}
                        whileHover={{ y: -4 }}
                        className="h-full"
                    >
                        <Card className="h-full flex flex-col hover:shadow-lg transition-all hover:border-primary/50">
                            <CardHeader>
                                <Quote className="h-8 w-8 text-primary mb-2" />
                            </CardHeader>
                            <CardContent className="flex-1 flex flex-col justify-between gap-4">
                                <p className="leading-relaxed text-muted-foreground italic">
                                    &quot;{testimonial.quote}&quot;
                                </p>
                                <div>
                                    <p className="font-semibold">{testimonial.author}</p>
                                    <p className="text-sm text-muted-foreground">
                                        {testimonial.role}
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
