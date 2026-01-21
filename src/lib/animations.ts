/**
 * Shared animation configurations for Framer Motion
 * Reduces duplication across components
 */

export const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
}

export const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
}

export const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
}

export const staggerItem = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
}
