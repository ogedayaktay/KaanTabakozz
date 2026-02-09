
import { notFound } from "next/navigation";
import { blogPosts } from "../data";
import BlogPostClient from "./BlogPostClient";

// Define params as a Promise in Next.js 15+
type Params = Promise<{ id: string }>;

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        id: post.id,
    }));
}

export default async function BlogPostPage({ params }: { params: Params }) {
    const { id } = await params;
    const post = blogPosts.find((p) => p.id === id);

    if (!post) {
        notFound();
    }

    // Pass non-serializable fields if needed, but post is json-compatible
    return <BlogPostClient post={post} />;
}
