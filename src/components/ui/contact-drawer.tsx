"use client"

import * as React from "react"
import { X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { contactDrawerContent } from "@/content/ui/contact-drawer"

interface ContactDrawerProps {
    open: boolean
    onOpenChange: (open: boolean) => void
}

export function ContactDrawer({ open, onOpenChange }: ContactDrawerProps) {
    React.useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "unset"
        }
        return () => {
            document.body.style.overflow = "unset"
        }
    }, [open])

    return (
        <AnimatePresence>
            {open && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
                        onClick={() => onOpenChange(false)}
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{
                            x: "100%",
                            y: 0
                        }}
                        animate={{
                            x: 0,
                            y: 0
                        }}
                        exit={{
                            x: "100%",
                            y: 0
                        }}
                        transition={{
                            type: "spring",
                            damping: 30,
                            stiffness: 300,
                            mass: 0.8
                        }}
                        className="fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background md:inset-x-auto md:inset-y-0 md:right-0 md:h-full md:w-full md:max-w-md md:rounded-none md:border-l"
                        style={{
                            // Override for mobile - slide from bottom
                            ...(typeof window !== 'undefined' && window.innerWidth < 768 ? {
                                x: 0,
                            } : {})
                        }}
                    >
                        <div className="flex flex-col h-full">
                            {/* Header */}
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1, duration: 0.3 }}
                                className="flex items-center justify-between border-b p-6"
                            >
                                <h2 className="text-2xl font-bold">{contactDrawerContent.heading}</h2>
                                <button
                                    onClick={() => onOpenChange(false)}
                                    className="rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                                >
                                    <X className="h-5 w-5" />
                                    <span className="sr-only">{contactDrawerContent.accessibility.close}</span>
                                </button>
                            </motion.div>

                            {/* Content */}
                            <div className="flex-1 overflow-y-auto p-6">
                                <div className="space-y-6">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.15, duration: 0.3 }}
                                    >
                                        <h3 className="text-lg font-semibold mb-2">{contactDrawerContent.intro.heading}</h3>
                                        <p className="text-muted-foreground mb-4">
                                            {contactDrawerContent.intro.description}
                                        </p>
                                    </motion.div>

                                    {/* Contact Methods */}
                                    <div className="space-y-3">
                                        {contactDrawerContent.contactMethods.map((method, index) => {
                                            const Icon = method.icon
                                            return (
                                                <motion.a
                                                    key={method.href}
                                                    href={method.href}
                                                    target={method.href.startsWith('http') ? "_blank" : undefined}
                                                    rel={method.href.startsWith('http') ? "noopener noreferrer" : undefined}
                                                    initial={{ opacity: 0, x: 20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{
                                                        delay: 0.2 + (index * 0.05),
                                                        duration: 0.3,
                                                        ease: "easeOut"
                                                    }}
                                                    whileHover={{ scale: 1.02 }}
                                                    whileTap={{ scale: 0.98 }}
                                                    className="flex items-center gap-3 p-4 rounded-lg border hover:bg-accent transition-colors"
                                                >
                                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                                                        <Icon className="h-5 w-5 text-primary" />
                                                    </div>
                                                    <div>
                                                        <div className="font-medium">{method.label}</div>
                                                        <div className="text-sm text-muted-foreground">{method.value}</div>
                                                    </div>
                                                </motion.a>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>

                            {/* Footer */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.25, duration: 0.3 }}
                                className="border-t p-6"
                            >
                                <Button
                                    onClick={() => window.open(contactDrawerContent.footer.buttonUrl, "_blank")}
                                    className="w-full"
                                    size="lg"
                                >
                                    {contactDrawerContent.footer.buttonLabel}
                                </Button>
                            </motion.div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}
