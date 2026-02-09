"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, User, ArrowRight } from "lucide-react";

// Mock Data for Blog Posts
import { blogPosts } from "./data";

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

export default function Blog() {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-primary text-white py-20 relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                <div className="container-custom relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="font-serif text-4xl md:text-5xl font-bold mb-4"
                    >
                        Blog & Yazılar
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-300 max-w-2xl mx-auto text-lg"
                    >
                        Psikoloji, zihinsel sağlık ve iyi oluş üzerine güncel yazılar.
                    </motion.p>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="py-20">
                <div className="container-custom">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {blogPosts.map((post) => (
                            <motion.article
                                key={post.id}
                                variants={itemVariants}
                                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group flex flex-col"
                            >
                                {/* Image */}
                                <div className="relative h-56 overflow-hidden">
                                    <div
                                        className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                        style={{ backgroundImage: `url('${post.image}')` }}
                                    />
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-primary uppercase tracking-wide">
                                        {post.category}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                                        <span className="flex items-center gap-1">
                                            <Calendar size={14} />
                                            {post.date}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <User size={14} />
                                            {post.author}
                                        </span>
                                    </div>

                                    <h2 className="font-serif text-xl font-bold text-primary mb-3 line-clamp-2 group-hover:text-secondary transition-colors">
                                        <Link href={`/blog/${post.id}`}>
                                            {post.title}
                                        </Link>
                                    </h2>

                                    <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                                        {post.excerpt}
                                    </p>

                                    <div className="mt-auto pt-4 border-t border-gray-100">
                                        <Link
                                            href={`/blog/${post.id}`}
                                            className="text-primary font-medium hover:text-secondary transition-colors inline-flex items-center gap-2 text-sm"
                                        >
                                            Devamını Oku <ArrowRight size={16} />
                                        </Link>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
