import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export function Footer() {
    return (
        <footer className="border-t py-6 md:py-0">
            <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row px-4 md:px-8 max-w-screen-2xl">
                <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
                    Built by David. The source code is available on{" "}
                    <a
                        href="#"
                        target="_blank"
                        rel="noreferrer"
                        className="font-medium underline underline-offset-4"
                    >
                        GitHub
                    </a>
                    .
                </p>
                <div className="flex items-center gap-4">
                    <Link href="https://github.com" target="_blank" rel="noreferrer">
                        <Github className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
                        <span className="sr-only">GitHub</span>
                    </Link>
                    <Link href="https://linkedin.com" target="_blank" rel="noreferrer">
                        <Linkedin className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
                        <span className="sr-only">LinkedIn</span>
                    </Link>
                    <Link href="mailto:david@example.com">
                        <Mail className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
                        <span className="sr-only">Email</span>
                    </Link>
                </div>
            </div>
        </footer>
    )
}
