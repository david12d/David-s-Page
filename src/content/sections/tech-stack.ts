import {
    Code2,
    Database,
    Cloud,
    GitBranch,
    Palette,
    Server,
    Container,
    type LucideIcon
} from "lucide-react"

export const techStackContent = {
    heading: "Tech Stack",
    description: "The technologies I use to build modern applications.",
    technologies: [
        { name: "Next.js", icon: Code2 },
        { name: "React", icon: Code2 },
        { name: "TypeScript", icon: Code2 },
        { name: "Tailwind CSS", icon: Palette },
        { name: "Node.js", icon: Server },
        { name: "PostgreSQL", icon: Database },
        { name: "Prisma", icon: Database },
        { name: "Docker", icon: Container },
        { name: "AWS", icon: Cloud },
        { name: "Git", icon: GitBranch },
    ] as Array<{ name: string; icon: LucideIcon }>
}
