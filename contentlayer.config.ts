import { defineDocumentType, makeSource } from "contentlayer2/source-files";
import rehypePrettyCode from "rehype-pretty-code";

export const BlogPost = defineDocumentType(() => ({
    name: "BlogPost",
    filePathPattern: "blog/**/*.mdx",
    contentType: "mdx",
    fields: {
        title: { type: "string", required: true },
        excerpt: { type: "string", required: true },
        date: { type: "date", required: true },
        tags: { type: "list", of: { type: "string" }, required: true },
        readTime: { type: "string", required: true },
        image: { type: "string", required: false },
        featured: { type: "boolean", default: false },
    },
    computedFields: {
        slug: {
            type: "string",
            resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ""),
        },
        url: {
            type: "string",
            resolve: (doc) => `/blog/${doc._raw.sourceFileName.replace(/\.mdx$/, "")}`,
        },
    },
}));

export const Project = defineDocumentType(() => ({
    name: "Project",
    filePathPattern: "projects/**/*.mdx",
    contentType: "mdx",
    fields: {
        title: { type: "string", required: true },
        description: { type: "string", required: true },
        role: { type: "string", required: true },
        category: { type: "string", required: true },
        tags: { type: "list", of: { type: "string" }, required: true },
        timeline: { type: "string", required: false },
        featured: { type: "boolean", default: false },
        link: { type: "string", required: false },
    },
    computedFields: {
        slug: {
            type: "string",
            resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ""),
        },
        url: {
            type: "string",
            resolve: (doc) => `/projects/${doc._raw.sourceFileName.replace(/\.mdx$/, "")}`,
        },
    },
}));

export const Page = defineDocumentType(() => ({
    name: "Page",
    filePathPattern: "pages/**/*.mdx",
    contentType: "mdx",
    fields: {
        title: { type: "string", required: true },
        description: { type: "string", required: false },
    },
    computedFields: {
        slug: {
            type: "string",
            resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ""),
        },
    },
}));

export default makeSource({
    contentDirPath: "content",
    documentTypes: [BlogPost, Project, Page],
    mdx: {
        rehypePlugins: [
            [
                rehypePrettyCode,
                {
                    theme: "github-dark",
                    keepBackground: true,
                },
            ],
        ],
    },
});
