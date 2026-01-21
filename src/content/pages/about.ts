import { Cloud, Brain, DollarSign, Users, BarChart3, Briefcase, type LucideIcon } from "lucide-react"

export const aboutPageContent = {
    pageHeading: {
        prefix: "About",
        highlight: "Me"
    },
    introParagraphs: [
        "My journey into the world of technology and business began with a curiosity about how systems work and a desire to make a meaningful impact. Growing up, I was always fascinated by the intersection of technology and business, which led me to pursue a Bachelor of Commerce & IT and later a Masters in Business Administration.",
        "I currently serve as a Senior Consultant at Slalom, where I focus on Technology Strategy, Cloud Transformation, and FinOps. My experience spans Cloud Architecture (AWS, Azure), Data Analytics, BI & AI (PowerBI, Snowflake, Salesforce), and IT Operating Models (ITSM).",
        "In my spare time, I enjoy running, board games, road trips, and the great outdoors, travelling and learning about foreign cultures."
    ],

    servicesSection: {
        heading: "Expertise",
        subHeading: "Services Offered",
        services: [
            {
                title: "Startup Advisory",
                description: "Guidance for early-stage companies on technology, product, and growth strategies.",
                icon: Briefcase,
            },
            {
                title: "Product Advisory",
                description: "Product strategy, roadmap development, and go-to-market planning.",
                icon: Users,
            },
            {
                title: "Technology Strategy",
                description: "Strategic technology planning and roadmap development aligned with business objectives.",
                icon: Briefcase,
            },
            {
                title: "Business Analysis",
                description: "Requirements gathering, process optimization, and stakeholder management.",
                icon: BarChart3,
            },
            {
                title: "FinOps & Cost Optimisation",
                description: "Financial operating models, cost optimization, and cloud financial management.",
                icon: DollarSign,
            },
            {
                title: "Cloud Technologies",
                description: "Cloud architecture, migration strategy, and platform optimization.",
                icon: Cloud,
            },
            {
                title: "AI & Automation",
                description: "AI Use Case Discovery, AI Adoption, AI Strategy Development, AI Automation, AI enabled DevOps/Software Engineering.",
                icon: Brain,
            },
            {
                title: "Data Analytics",
                description: "Data strategy and implementation using PowerBI, Python, SQL, and R.",
                icon: BarChart3,
            },
            {
                title: "Agile Methodologies",
                description: "Agile delivery and transformation using Jira and Confluence.",
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
            "Financial Services",
            "Non-for profit industry",
            "Communications industry"
        ]
    },

    technologiesSection: {
        heading: "Technologies & Certifications",
        subHeadingTechnologies: "Technologies",
        subHeadingCertifications: "Certifications",
        categories: [
            {
                name: "Cloud",
                items: [
                    { name: "AWS", logo: "/logos/aws.svg" },
                    { name: "Azure", logo: "/logos/azure.svg" },
                    { name: "Dynamics 365", logo: "/logos/dynamics365.svg" }
                ]
            },
            {
                name: "Data",
                items: [
                    { name: "PowerBI", logo: "/logos/powerbi.svg" },
                    { name: "Snowflake", logo: "/logos/snowflake.svg" },
                    { name: "Python", logo: "/logos/python.svg" },
                    { name: "R", logo: "" }, // Missing logo
                    { name: "SQL", logo: "" } // Missing logo
                ]
            },
            {
                name: "Integration",
                items: [
                    { name: "Mulesoft", logo: "" }, // Missing logo
                    { name: "AWS API Gateway", logo: "/logos/aws.svg" },
                    { name: "Model Context Protocol", logo: "" } // Missing logo
                ]
            },
            {
                name: "CI/CD",
                items: [
                    { name: "Github Actions", logo: "/logos/github.svg" },
                    { name: "Gitlab", logo: "" } // Missing logo
                ]
            },
            {
                name: "Agile",
                items: [
                    { name: "Jira", logo: "" }, // Missing logo
                    { name: "Confluence", logo: "" }, // Missing logo
                    { name: "Linear", logo: "/logos/linear.svg" }
                ]
            },
            {
                name: "CRM",
                items: [
                    { name: "Salesforce", logo: "/logos/salesforce.svg" },
                    { name: "Microsoft Dynamics", logo: "/logos/dynamics365.svg" }
                ]
            },
            {
                name: "AI",
                items: [
                    { name: "Cursor", logo: "" }, // Missing logo
                    { name: "Github Copilot", logo: "/logos/github.svg" },
                    { name: "Amazon Bedrock", logo: "/logos/aws.svg" },
                    { name: "n8n", logo: "" }, // Missing logo
                    { name: "Relevance AI", logo: "" } // Missing logo
                ]
            }
        ]
    },

    certificationsSection: {
        heading: "Certifications",
        certifications: [
            {
                name: "Salesforce AI Associate",
                year: "2024",
                issuer: "Salesforce"
            },
            {
                name: "AWS Certified Solutions Architect – Professional",
                year: "2024",
                issuer: "Amazon Web Services"
            },
            {
                name: "FinOps Certified Practitioner",
                year: "2023",
                issuer: "FinOps Foundation"
            },
            {
                name: "Salesforce AI Associate",
                year: "2024",
                issuer: "Salesforce"
            },
            {
                name: "Generative AI Fundamentals",
                year: "2023",
                issuer: "Google Cloud"
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
                title: "Co-Founder & Chief Technology Officer",
                company: "Dremedy Medical",
                period: "2023 - Present",
                description: "Leading biomedical device startup developing innovative at-home immune system monitoring solutions for chemotherapy patients. Spearheading technology strategy, product development, and business growth.",
                highlights: [
                    "Won Endeavour Research & Commercialisation Award for innovation in medical technology",
                    "Full-stack solution architecture on Google Cloud Platform (GCP)",
                    "AI & machine learning integration for predictive health analytics",
                    "Business strategy development across go-to-market, intellectual property, and strategic partnerships",
                    "Cross-functional leadership spanning engineering, clinical research, and regulatory compliance"
                ]
            },
            {
                title: "Senior Consultant",
                company: "Slalom",
                period: "2021 - Present",
                description: "Delivering technology strategy, cloud transformation, and FinOps consulting across diverse sectors including government, healthcare, education, and financial services. Contributing to Southeast Asia expansion and Defense ICTPA panel initiatives.",
                highlights: [
                    "Cloud Architecture design and implementation (AWS, Azure, GCP)",
                    "Data Analytics, Business Intelligence & AI solutions (PowerBI, Snowflake, Salesforce)",
                    "IT Service Management (ITSM) and operating model transformation",
                    "FinOps practice leadership and cloud cost optimization strategies",
                    "Executive advisory and C-level stakeholder engagement",
                    "Led successful delivery of government and defense sector projects"
                ]
            },
            {
                title: "Technology Consultant",
                company: "Accenture",
                period: "2020 - 2021",
                description: "Worked on digital transformation initiatives and internal knowledge management systems using human-centered design principles. Gained experience in enterprise technology consulting and agile delivery methodologies.",
                highlights: [
                    "Internal knowledge management platform development",
                    "Human-centered design application for enterprise solutions",
                    "Agile project delivery and stakeholder collaboration",
                    "Cross-functional team coordination and project management"
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
