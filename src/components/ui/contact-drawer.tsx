"use client"

import * as React from "react"
import { X, Mail, Github, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

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

    if (!open) return null

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm animate-in fade-in-0"
                onClick={() => onOpenChange(false)}
            />

            {/* Drawer */}
            <div className="fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background animate-in slide-in-from-bottom-full md:inset-x-auto md:inset-y-0 md:right-0 md:h-full md:w-full md:max-w-md md:rounded-none md:border-l md:slide-in-from-right-full">
                <div className="flex flex-col h-full">
                    {/* Header */}
                    <div className="flex items-center justify-between border-b p-6">
                        <h2 className="text-2xl font-bold">Let&apos;s Connect</h2>
                        <button
                            onClick={() => onOpenChange(false)}
                            className="rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                        >
                            <X className="h-5 w-5" />
                            <span className="sr-only">Close</span>
                        </button>
                    </div>

                    {/* Content */}
                    <div className="flex-1 overflow-y-auto p-6">
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-lg font-semibold mb-2">Get in Touch</h3>
                                <p className="text-muted-foreground mb-4">
                                    I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                                </p>
                            </div>

                            {/* Contact Methods */}
                            <div className="space-y-3">
                                <a
                                    href="mailto:your@email.com"
                                    className="flex items-center gap-3 p-4 rounded-lg border hover:bg-accent transition-colors"
                                >
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                                        <Mail className="h-5 w-5 text-primary" />
                                    </div>
                                    <div>
                                        <div className="font-medium">Email</div>
                                        <div className="text-sm text-muted-foreground">your@email.com</div>
                                    </div>
                                </a>

                                <a
                                    href="https://github.com/yourusername"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 p-4 rounded-lg border hover:bg-accent transition-colors"
                                >
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                                        <Github className="h-5 w-5 text-primary" />
                                    </div>
                                    <div>
                                        <div className="font-medium">GitHub</div>
                                        <div className="text-sm text-muted-foreground">@yourusername</div>
                                    </div>
                                </a>

                                <a
                                    href="https://linkedin.com/in/yourusername"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 p-4 rounded-lg border hover:bg-accent transition-colors"
                                >
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                                        <Linkedin className="h-5 w-5 text-primary" />
                                    </div>
                                    <div>
                                        <div className="font-medium">LinkedIn</div>
                                        <div className="text-sm text-muted-foreground">@yourusername</div>
                                    </div>
                                </a>

                                <a
                                    href="https://twitter.com/yourusername"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 p-4 rounded-lg border hover:bg-accent transition-colors"
                                >
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                                        <Twitter className="h-5 w-5 text-primary" />
                                    </div>
                                    <div>
                                        <div className="font-medium">Twitter</div>
                                        <div className="text-sm text-muted-foreground">@yourusername</div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="border-t p-6">
                        <Button
                            onClick={() => window.open("https://calendly.com/yourusername", "_blank")}
                            className="w-full"
                            size="lg"
                        >
                            Book a Call
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}
