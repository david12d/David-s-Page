import { Code2, Palette, Zap, Users, type LucideIcon } from "lucide-react"

export const aboutPageContent = {
    pageHeading: "About Me",
    introParagraphs: [
        "Hi! I'm David, a passionate Full Stack Developer with a love for creating beautiful, performant, and accessible web experiences.",
        "With several years of experience in web development, I specialize in building modern applications using cutting-edge technologies like Next.js, React, and TypeScript. I believe in writing clean, maintainable code and following best practices.",
        "When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community."
    ],
    whatIDoSection: {
        heading: "What I Do",
        skills: [
            {
                title: "Frontend Development",
                description: "Building responsive and accessible user interfaces with modern frameworks",
                icon: Code2,
            },
            {
                title: "UI/UX Design",
                description: "Creating beautiful and intuitive user experiences",
                icon: Palette,
            },
            {
                title: "Performance Optimization",
                description: "Ensuring fast load times and smooth interactions",
                icon: Zap,
            },
            {
                title: "Collaboration",
                description: "Working effectively with cross-functional teams",
                icon: Users,
            },
        ] as Array<{ title: string; description: string; icon: LucideIcon }>
    },
    experienceSection: {
        heading: "Experience",
        timeline: [
            {
                title: "Senior Full Stack Developer",
                period: "2022 - Present",
                description: "Leading development of complex web applications using Next.js, TypeScript, and modern cloud technologies."
            },
            {
                title: "Full Stack Developer",
                period: "2020 - 2022",
                description: "Developed and maintained multiple web applications, focusing on performance optimization and user experience."
            },
            {
                title: "Junior Developer",
                period: "2018 - 2020",
                description: "Started my journey in web development, learning modern frameworks and best practices."
            }
        ]
    }
}
