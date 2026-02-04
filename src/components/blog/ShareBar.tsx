"use client"

import { useState } from "react"
import { Share2, Link as LinkIcon, Twitter, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ShareBarProps {
    title: string
    url: string
}

export function ShareBar({ title, url }: ShareBarProps) {
    const [copied, setCopied] = useState(false)

    const handleCopy = async () => {
        try {
            if (!navigator?.clipboard) return
            await navigator.clipboard.writeText(url)
            setCopied(true)
            window.setTimeout(() => setCopied(false), 2000)
        } catch {
            setCopied(false)
        }
    }

    const handleShare = async () => {
        if (navigator?.share) {
            try {
                await navigator.share({ title, url })
                return
            } catch {
                // User cancelled or share failed; fallback to copy
            }
        }

        await handleCopy()
    }

    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        title
    )}&url=${encodeURIComponent(url)}`
    const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        url
    )}`

    return (
        <div className="mt-10 flex flex-wrap items-center gap-3 rounded-lg border bg-card px-4 py-3">
            <span className="text-sm font-semibold text-muted-foreground">
                Share this post
            </span>
            <Button type="button" variant="outline" size="sm" onClick={handleShare}>
                <Share2 className="mr-2 h-4 w-4" />
                Share
            </Button>
            <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={handleCopy}
                aria-live="polite"
            >
                <LinkIcon className="mr-2 h-4 w-4" />
                {copied ? "Copied" : "Copy link"}
            </Button>
            <Button asChild variant="outline" size="sm">
                <a
                    href={twitterUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Share on X"
                >
                    <Twitter className="mr-2 h-4 w-4" />
                    X
                </a>
            </Button>
            <Button asChild variant="outline" size="sm">
                <a
                    href={linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Share on LinkedIn"
                >
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn
                </a>
            </Button>
        </div>
    )
}
