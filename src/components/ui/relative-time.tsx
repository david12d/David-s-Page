"use client"

import { formatDistanceToNow } from "date-fns"

interface RelativeTimeProps {
    date: string
}

export function RelativeTime({ date }: RelativeTimeProps) {
    const dateObj = new Date(date)
    const relativeTime = formatDistanceToNow(dateObj, { addSuffix: true })
    const exactDate = dateObj.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    })

    return (
        <time dateTime={date} title={exactDate}>
            {relativeTime}
        </time>
    )
}
