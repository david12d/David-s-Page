import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import Link from "next/link"

export function Footer() {
    return (
        <footer className="border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container max-w-screen-2xl px-4 md:px-8 py-12 md:py-16">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-12">
                    {/* Left Section - Personal Tagline */}
                    <div className="lg:col-span-4">
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            I&apos;m David - a full-stack developer, freelancer &amp; problem solver.
                            Thanks for checking out my site!
                        </p>
                    </div>

                    {/* Center Section - Navigation Links */}
                    <div className="lg:col-span-5 grid grid-cols-3 gap-8">
                        {/* General */}
                        <div>
                            <h3 className="font-semibold text-sm mb-3">General</h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                                        Projects
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                                        Blog
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Specifics */}
                        <div>
                            <h3 className="font-semibold text-sm mb-3">Specifics</h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link href="/guestbook" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                                        Guest Book
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/bucket-list" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                                        Bucket List
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/uses" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                                        Uses
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/attribution" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                                        Attribution
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* More */}
                        <div>
                            <h3 className="font-semibold text-sm mb-3">More</h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                                        Book a call
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/links" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                                        Links
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/rss" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                                        RSS
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Right Section - Copyright & Social */}
                    <div className="lg:col-span-3 flex flex-col gap-4">
                        <div className="text-sm text-muted-foreground">
                            <p className="mb-2">© 2025 <Link href="/" className="hover:text-foreground transition-colors">David</Link>. All rights reserved</p>
                            <div className="flex flex-wrap gap-3">
                                <Link href="/legal/privacy" className="hover:text-foreground transition-colors">
                                    Privacy Policy
                                </Link>
                                <span className="text-muted-foreground/50">·</span>
                                <Link href="/legal/terms" className="hover:text-foreground transition-colors">
                                    Terms &amp; Conditions
                                </Link>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center gap-4">
                            <Link
                                href="https://linkedin.com/in/yourprofile"
                                target="_blank"
                                rel="noreferrer"
                                className="text-muted-foreground hover:text-foreground transition-colors"
                            >
                                <Linkedin className="h-5 w-5" />
                                <span className="sr-only">LinkedIn</span>
                            </Link>
                            <Link
                                href="https://github.com/yourusername"
                                target="_blank"
                                rel="noreferrer"
                                className="text-muted-foreground hover:text-foreground transition-colors"
                            >
                                <Github className="h-5 w-5" />
                                <span className="sr-only">GitHub</span>
                            </Link>
                            <Link
                                href="https://twitter.com/yourhandle"
                                target="_blank"
                                rel="noreferrer"
                                className="text-muted-foreground hover:text-foreground transition-colors"
                            >
                                <Twitter className="h-5 w-5" />
                                <span className="sr-only">Twitter</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
