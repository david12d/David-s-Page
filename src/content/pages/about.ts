import { Cloud, Brain, DollarSign, Users, BarChart3, Briefcase, type LucideIcon } from "lucide-react"

export const aboutPageContent = {
    pageHeading: "About Me",
    introParagraphs: [
        "My journey into the world of technology and business began with a curiosity about how systems work and a desire to make a meaningful impact. Growing up, I was always fascinated by the intersection of technology and business, which led me to pursue a Bachelor of Commerce & IT and later a Masters in Business Administration.",
        "I currently serve as a Senior Consultant at Slalom, where I focus on Technology Strategy, Cloud Transformation, and FinOps. My experience spans Cloud Architecture (AWS, Azure), Data Analytics, BI & AI (PowerBI, Snowflake, Salesforce), and IT Operating Models (ITSM).",
        "In my spare time, I enjoy running, board games, road trips, and the great outdoors, travelling and learning about foreign cultures."
    ],

    servicesSection: {
        heading: "Services Offered",
        services: [
            {
                title: "Technology Strategy",
                description: "Strategic technology planning and roadmap development aligned with business objectives",
                icon: Briefcase,
            },
            {
                title: "Cloud Transformation",
                description: "Cloud architecture, migration strategy, and platform optimization across AWS, Azure, and GCP",
                icon: Cloud,
            },
            {
                title: "FinOps",
                description: "Financial operating models, cost optimization, and cloud financial management",
                icon: DollarSign,
            },
            {
                title: "AI & Automation",
                description: "AI use case discovery, strategy development, and automation implementation",
                icon: Brain,
            },
            {
                title: "Business Analysis",
                description: "Requirements gathering, process optimization, and stakeholder management",
                icon: BarChart3,
            },
            {
                title: "Product Advisory",
                description: "Product strategy, roadmap development, and go-to-market planning",
                icon: Users,
            },
        ] as Array<{ title: string; description: string; icon: LucideIcon }>
    },

    industriesSection: {
        heading: "Industries Served",
        industries: [
            "Government and Public Sector",
            "Healthcare",
            "Education",
            "Technology",
            "Financial Services"
        ]
    },

    technologiesSection: {
        heading: "Technologies & Tools",
        categories: [
            {
                name: "Cloud Platforms",
                items: ["AWS", "Azure", "Google Cloud Platform", "Dynamics 365"]
            },
            {
                name: "Data & Analytics",
                items: ["PowerBI", "Snowflake", "Python", "R", "SQL"]
            },
            {
                name: "Integration & DevOps",
                items: ["Mulesoft", "AWS API Gateway", "Model Context Protocol", "GitHub Actions", "GitLab"]
            },
            {
                name: "Agile & Project Management",
                items: ["Jira", "Confluence", "Linear"]
            },
            {
                name: "CRM & ERP",
                items: ["Salesforce", "Microsoft Dynamics"]
            },
            {
                name: "AI & Automation",
                items: ["Voice Agents", "Cursor", "GitHub Copilot", "Amazon Bedrock", "n8n", "Relevance AI"]
            }
        ]
    },

    certificationsSection: {
        heading: "Certifications",
        certifications: [
            {
                name: "AWS Certified Solutions Architect – Professional",
                year: "2024",
                issuer: "Amazon Web Services"
            },
            {
                name: "Salesforce AI Associate",
                year: "2024",
                issuer: "Salesforce"
            },
            {
                name: "FinOps Certified Practitioner",
                year: "2023",
                issuer: "FinOps Foundation"
            },
            {
                name: "AWS Certified SysOps Administrator – Associate",
                year: "2023",
                issuer: "Amazon Web Services"
            },
            {
                name: "Azure AI Fundamentals",
                year: "2023",
                issuer: "Microsoft"
            },
            {
                name: "Generative AI Fundamentals",
                year: "2023",
                issuer: "Google Cloud"
            },
            {
                name: "AWS Certified Solutions Architect – Associate",
                year: "2022",
                issuer: "Amazon Web Services"
            },
            {
                name: "Google Cloud Digital Leader",
                year: "2022",
                issuer: "Google Cloud"
            },
            {
                name: "Leading with Analytics and AI",
                year: "2022",
                issuer: "Northwestern University"
            },
            {
                name: "ICAgile Certified Professional",
                year: "2022",
                issuer: "ICAgile"
            }
        ]
    },

    experienceSection: {
        heading: "Experience",
        timeline: [
            {
                title: "Senior Consultant",
                company: "Slalom",
                period: "Present",
                description: "Technology Strategy, Cloud Transformation, and FinOps consulting across government, healthcare, education, and financial services sectors.",
                highlights: [
                    "Cloud Architecture (AWS, Azure, GCP)",
                    "Data Analytics, BI & AI (PowerBI, Snowflake, Salesforce)",
                    "IT Operating Models (ITSM)",
                    "Executive advisory and stakeholder management"
                ]
            },
            {
                title: "Co-Founder",
                company: "AI Medtech Startup",
                period: "Recent",
                description: "Led biomedical device startup developing at-home immune system monitoring for chemotherapy patients. Won Endeavour Research & Commercialisation Award.",
                highlights: [
                    "Technology & AI strategy development",
                    "Full-stack solution architecture on GCP",
                    "Business strategy across GTM, IP, and partnerships"
                ]
            }
        ]
    },

    educationSection: {
        heading: "Education",
        degrees: [
            {
                degree: "Master of Business Administration (MBA)",
                institution: "University",
                year: "Completed"
            },
            {
                degree: "Bachelor of Commerce & IT",
                institution: "University",
                year: "Completed"
            }
        ]
    }
}
