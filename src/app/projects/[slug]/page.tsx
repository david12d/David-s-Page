import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionItem } from "@/components/ui/accordion"
import { ExternalLink, ArrowLeft } from "lucide-react"
import Link from "next/link"

// Project data - in a real app this would come from a CMS or API
const projects = {
    "ecommerce-platform": {
        title: "E-Commerce Platform",
        description: "A full-featured e-commerce platform built with Next.js, Stripe, and Prisma.",
        longDescription: "A comprehensive e-commerce solution featuring product management, shopping cart, secure payments, and order tracking. Built with modern web technologies for optimal performance and user experience.",
        tags: ["Next.js", "TypeScript", "Stripe", "Prisma"],
        link: "https://example.com",
        sections: {
            features: [
                "Product catalog with search and filtering",
                "Shopping cart with real-time updates",
                "Secure payment processing with Stripe",
                "Order management and tracking",
                "Admin dashboard for inventory management",
                "Responsive design for all devices"
            ],
            architecture: "Built using Next.js 14 with App Router for optimal performance. Data is managed with Prisma ORM connected to PostgreSQL. Payment processing is handled securely through Stripe. The frontend uses Tailwind CSS for styling and Framer Motion for animations.",
            techStack: "Next.js 14, TypeScript, Prisma, PostgreSQL, Stripe, Tailwind CSS, Framer Motion, Vercel"
        }
    },
    "task-management-app": {
        title: "Task Management App",
        description: "A real-time task management application with drag-and-drop functionality.",
        longDescription: "A collaborative task management tool that enables teams to organize work with kanban boards, real-time updates, and seamless drag-and-drop interactions.",
        tags: ["React", "Firebase", "Tailwind CSS"],
        link: "https://example.com",
        sections: {
            features: [
                "Kanban board with drag-and-drop",
                "Real-time collaboration",
                "Task assignment and priorities",
                "File attachments",
                "Comments and activity feed",
                "Mobile responsive interface"
            ],
            architecture: "React application with Firebase Realtime Database for instant synchronization across clients. Authentication handled through Firebase Auth. React DnD library powers the drag-and-drop functionality.",
            techStack: "React, Firebase, Tailwind CSS, React DnD, React Router, Firebase Auth"
        }
    },
    "ai-content-generator": {
        title: "AI Content Generator",
        description: "An AI-powered application that generates blog posts and social media content.",
        longDescription: "Leverage AI to create compelling content for blogs, social media, and marketing campaigns. Features customizable templates, tone adjustment, and multi-platform export.",
        tags: ["OpenAI API", "Next.js", "Vercel AI SDK"],
        link: "https://example.com",
        sections: {
            features: [
                "AI-powered content generation",
                "Multiple content templates",
                "Tone and style customization",
                "SEO optimization suggestions",
                "Multi-platform export (Twitter, LinkedIn, Blog)",
                "Content history and versioning"
            ],
            architecture: "Next.js application using Vercel AI SDK for streaming responses. OpenAI GPT-4 powers the content generation. Server-side API routes handle authentication and rate limiting.",
            techStack: "Next.js, TypeScript, OpenAI API, Vercel AI SDK, TailwindCSS, PostgreSQL"
        }
    },
    "portfolio-website": {
        title: "Portfolio Website",
        description: "My personal portfolio website built with Next.js and Tailwind CSS.",
        longDescription: "A modern, responsive portfolio showcasing my work, skills, and experience. Features smooth animations, dark mode, and optimal performance.",
        tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
        link: "#",
        sections: {
            features: [
                "Responsive design",
                "Dark mode support",
                "Smooth page transitions",
                "SEO optimized",
                "Fast page loads",
                "Accessible design"
            ],
            architecture: "Built with Next.js 14 App Router for optimal performance and SEO. Styled with Tailwind CSS for rapid development. Framer Motion adds smooth, engaging animations throughout.",
            techStack: "Next.js 14, TypeScript, Tailwind CSS, Framer Motion, Vercel"
        }
    }
}

interface ProjectPageProps {
    params: Promise<{
        slug: string
    }>
}

export async function generateStaticParams() {
    return Object.keys(projects).map((slug) => ({
        slug: slug,
    }))
}

export default async function ProjectPage({ params }: ProjectPageProps) {
    const { slug } = await params
    const project = projects[slug as keyof typeof projects]

    if (!project) {
        notFound()
    }

    return (
        <div className="container py-12 md:py-24 max-w-screen-lg">
            {/* Back Button */}
            <Link
                href="/projects"
                className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
            >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
            </Link>

            {/* Header */}
            <div className="space-y-4 mb-8">
                <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
                    {project.title}
                </h1>
                <p className="text-xl text-muted-foreground">
                    {project.longDescription}
                </p>

                {/* Action Button */}
                {project.link !== "#" && (
                    <div className="pt-4">
                        <Button asChild size="lg">
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                Check it out <ExternalLink className="ml-2 h-4 w-4" />
                            </a>
                        </Button>
                    </div>
                )}

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 pt-4">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            <hr className="my-8" />

            {/* Content Sections */}
            <div className="space-y-8">
                <Accordion>
                    <AccordionItem title="Feature Highlights" defaultOpen>
                        <ul className="list-disc list-inside space-y-2">
                            {project.sections.features.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ul>
                    </AccordionItem>

                    <AccordionItem title="Architecture">
                        <p>{project.sections.architecture}</p>
                    </AccordionItem>

                    <AccordionItem title="Tech Stack">
                        <p>{project.sections.techStack}</p>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    )
}
