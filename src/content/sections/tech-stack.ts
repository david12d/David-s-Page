import {
    Cloud,
    Database,
    Brain,
    DollarSign,
    Code2,
    GitBranch,
    type LucideIcon
} from "lucide-react"

export const techStackContent = {
    heading: {
        prefix: "Tech",
        highlight: "Stack"
    },
    description: "The technologies and platforms I work with to deliver enterprise solutions.",
    technologies: [
        { name: "AWS", icon: Cloud, category: "Cloud" },
        { name: "Azure", icon: Cloud, category: "Cloud" },
        { name: "GCP", icon: Cloud, category: "Cloud" },
        { name: "OpenAI", icon: Brain, category: "AI" },
        { name: "Gemini", icon: Brain, category: "AI" },
        { name: "Salesforce", icon: Database, category: "CRM/ERP" },
        { name: "Dynamics 365", icon: Database, category: "CRM/ERP" },
        { name: "PostgreSQL", icon: Database, category: "Data" },
        { name: "Snowflake", icon: Database, category: "Data" },
        { name: "Python", icon: Code2, category: "Development" },
        { name: "TypeScript", icon: Code2, category: "Development" },
        { name: "React", icon: Code2, category: "Development" },
        { name: "GitHub", icon: GitBranch, category: "DevOps" },
        { name: "Vercel", icon: Cloud, category: "Cloud" },
        { name: "PowerBI", icon: Database, category: "Analytics" },
    ] as Array<{ name: string; icon: LucideIcon; category: string }>
}
