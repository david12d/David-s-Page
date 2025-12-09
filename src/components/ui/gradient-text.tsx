interface GradientTextProps {
    children: React.ReactNode
    className?: string
}

export function GradientText({ children, className = "" }: GradientTextProps) {
    return (
        <span
            className={`inline-block ${className}`}
            style={{
                background: "linear-gradient(90deg, #a855f7, #ec4899, #f59e0b, #ec4899, #a855f7)",
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                animation: "gradient-shift 3s ease infinite"
            }}
        >
            {children}
        </span>
    )
}
