"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { name: "Anasayfa", href: "/" },
    { name: "Hakkımda", href: "/about" },
    { name: "Hizmetler", href: "/services" },
    { name: "Blog", href: "/blog" },
    { name: "İletişim", href: "/contact" },
];

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();
    const isHome = pathname === "/";

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Always use dark text for consistency and readability
    const textColor = "text-primary";
    const logoSubColor = "text-muted";

    return (
        <header
            className="fixed w-full z-50 transition-all duration-500 bg-white/90 backdrop-blur-md shadow-sm py-4"
        >
            <div className="container-custom flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className={`font-serif text-2xl font-bold ${textColor} transition-colors duration-300 group`}>
                    Klinik Psikolog Kaan Tabaköz
                    <span className={`block text-xs font-sans font-normal ${logoSubColor} transition-colors duration-300 group-hover:text-secondary`}>
                        Özel Sağlık Hizmet Birimi
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`relative font-medium text-sm tracking-wide transition-colors duration-300 ${pathname === link.href
                                ? "text-secondary font-bold"
                                : `${textColor} hover:text-secondary`
                                }`}
                        >
                            {link.name}
                            {pathname === link.href && (
                                <motion.div
                                    layoutId="underline"
                                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-secondary"
                                />
                            )}
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        className="px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 bg-secondary text-primary hover:bg-primary hover:text-white shadow-md hover:shadow-lg"
                    >
                        Randevu Al
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className={`md:hidden ${textColor} transition-colors duration-300`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 overflow-hidden shadow-xl"
                    >
                        <nav className="flex flex-col p-6 gap-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`text-lg font-medium py-3 border-b border-gray-50 transition-colors ${pathname === link.href ? "text-secondary pl-2" : "text-primary hover:pl-2 hover:text-secondary"
                                        }`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                href="/contact"
                                className="bg-secondary text-primary text-center py-4 rounded-xl font-bold mt-4 shadow-lg active:scale-95 transition-transform"
                                onClick={() => setIsOpen(false)}
                            >
                                Randevu Al
                            </Link>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
