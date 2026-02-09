"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Clock, Share2 } from "lucide-react";
import { motion } from "framer-motion";

interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    date: string;
    author: string;
    image: string;
    category: string;
    content: string; // The HTML content string
}

export default function BlogPostClient({ post }: { post: BlogPost }) {
    return (
        <article className="min-h-screen bg-gray-50 pb-20">
            {/* Hero Image */}
            <div className="relative h-[60vh] w-full">
                <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/40" />

                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="container-custom text-center text-white">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="max-w-4xl mx-auto space-y-6"
                        >
                            <span className="inline-block px-4 py-1.5 bg-primary/80 backdrop-blur-sm rounded-full text-sm font-medium">
                                {post.category}
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight">
                                {post.title}
                            </h1>
                            <div className="flex items-center justify-center gap-6 text-sm md:text-base text-gray-200">
                                <span className="flex items-center gap-2">
                                    <Calendar size={18} />
                                    {post.date}
                                </span>
                                <span className="flex items-center gap-2">
                                    <User size={18} />
                                    {post.author}
                                </span>
                                <span className="flex items-center gap-2">
                                    <Clock size={18} />
                                    5 dk okuma
                                </span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            <div className="container-custom relative z-10 -mt-20">
                <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 lg:p-16 max-w-4xl mx-auto">

                    {/* Back Button */}
                    <div className="mb-8">
                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-2 text-gray-500 hover:text-primary transition-colors font-medium"
                        >
                            <ArrowLeft size={20} />
                            Blog'a Dön
                        </Link>
                    </div>

                    {/* Content */}
                    <div
                        className="prose prose-lg prose-headings:font-serif prose-headings:text-primary prose-a:text-primary hover:prose-a:text-secondary max-w-none text-gray-600 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: post.content || '' }}
                    />

                    {/* Footer */}
                    <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-xl font-serif font-bold text-primary">
                                KT
                            </div>
                            <div>
                                <div className="font-bold text-gray-900">{post.author}</div>
                                <div className="text-sm text-gray-500">Uzman Klinik Psikolog</div>
                            </div>
                        </div>

                        <button className="flex items-center gap-2 text-gray-500 hover:text-primary transition-colors">
                            <Share2 size={20} />
                            <span className="font-medium">Yazıyı Paylaş</span>
                        </button>
                    </div>
                </div>
            </div>
        </article>
    );
}
