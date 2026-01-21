"use client";

import { useMDXComponent } from "next-contentlayer2/hooks";

const components = {
    // Custom MDX components can be added here
    h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h1 className="text-4xl font-bold mt-8 mb-4" {...props} />
    ),
    h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h2 className="text-3xl font-bold mt-8 mb-4" {...props} />
    ),
    h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h3 className="text-2xl font-semibold mt-6 mb-3" {...props} />
    ),
    p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
        <p className="mb-4 leading-7 text-muted-foreground" {...props} />
    ),
    ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
        <ul className="list-disc list-inside mb-4 space-y-2" {...props} />
    ),
    ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
        <ol className="list-decimal list-inside mb-4 space-y-2" {...props} />
    ),
    li: (props: React.HTMLAttributes<HTMLLIElement>) => (
        <li className="text-muted-foreground" {...props} />
    ),
    code: (props: React.HTMLAttributes<HTMLElement>) => (
        <code className="px-1.5 py-0.5 rounded bg-muted text-sm font-mono" {...props} />
    ),
    pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
        <pre className="my-4 p-4 rounded-lg bg-[#0d1117] overflow-x-auto" {...props} />
    ),
    strong: (props: React.HTMLAttributes<HTMLElement>) => (
        <strong className="font-semibold text-foreground" {...props} />
    ),
    a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
        <a className="text-primary underline underline-offset-4 hover:text-primary/80" {...props} />
    ),
    blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
        <blockquote className="border-l-4 border-primary pl-4 italic my-4" {...props} />
    ),
    hr: (props: React.HTMLAttributes<HTMLHRElement>) => (
        <hr className="my-8 border-border" {...props} />
    ),
};

interface MdxProps {
    code: string;
}

/* eslint-disable react-hooks/static-components */
export function Mdx({ code }: MdxProps) {
    const Component = useMDXComponent(code);

    return (
        <div className="prose prose-neutral dark:prose-invert max-w-none">
            <Component components={components} />
        </div>
    )
}
/* eslint-enable react-hooks/static-components */
