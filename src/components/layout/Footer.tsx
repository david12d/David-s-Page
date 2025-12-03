import { Linkedin } from "lucide-react"
import Link from "next/link"
import { footerContent } from "@/content/layout/footer"

export function Footer() {
    return (
        <footer className="border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container max-w-screen-2xl px-4 md:px-8 py-12 md:py-16">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-12">
                    {/* Left Section - Personal Tagline */}
                    <div className="lg:col-span-4">
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            {footerContent.tagline}
                        </p>
                    </div>

                    {/* Center Section - Navigation Links */}
                    <div className="lg:col-span-5 grid grid-cols-3 gap-8">
                        {/* General */}
                        <div>
                            <h3 className="font-semibold text-sm mb-3">{footerContent.navigationSections.general.heading}</h3>
                            <ul className="space-y-2">
                                {footerContent.navigationSections.general.links.map((link) => (
                                    <li key={link.href}>
                                        <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Specifics */}
                        <div>
                            <h3 className="font-semibold text-sm mb-3">{footerContent.navigationSections.specifics.heading}</h3>
                            <ul className="space-y-2">
                                {footerContent.navigationSections.specifics.links.map((link) => (
                                    <li key={link.href}>
                                        <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* More */}
                        <div>
                            <h3 className="font-semibold text-sm mb-3">{footerContent.navigationSections.more.heading}</h3>
                            <ul className="space-y-2">
                                {footerContent.navigationSections.more.links.map((link) => (
                                    <li key={link.href}>
                                        <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Right Section - Copyright & Social */}
                    <div className="lg:col-span-3 flex flex-col gap-4">
                        <div className="text-sm text-muted-foreground">
                            <p>© {footerContent.copyright.year} <Link href="/" className="hover:text-foreground transition-colors">{footerContent.copyright.name}</Link>. {footerContent.copyright.text}</p>
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center gap-4">
                            <Link
                                href={footerContent.social.linkedin.url}
                                target="_blank"
                                rel="noreferrer"
                                className="text-muted-foreground hover:text-foreground transition-colors"
                            >
                                <Linkedin className="h-5 w-5" />
                                <span className="sr-only">{footerContent.social.linkedin.label}</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
