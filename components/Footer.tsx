import Link from "next/link";
import { Mail, MapPin, Phone, Instagram } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-primary text-white pt-16 pb-8">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Brand & Bio */}
                    <div className="space-y-4">
                        <h3 className="font-serif text-2xl font-bold text-secondary">
                            Kaan Tabaköz
                        </h3>
                        <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
                            Lüleburgaz'da bilimsel ve etik temelli terapi yöntemleriyle, zihinsel sağlığınızı güçlendirmek için yanınızdayız.
                        </p>
                        <div className="flex gap-4 pt-2">
                            <a
                                href="https://www.instagram.com/klinikpsk_kaantabakoz/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white/10 p-2 rounded-full hover:bg-secondary hover:text-primary transition-all"
                                aria-label="Instagram"
                            >
                                <Instagram size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-serif text-lg font-semibold mb-6 text-secondary">
                            Hızlı Erişim
                        </h4>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link href="/" className="text-gray-300 hover:text-secondary transition-colors">
                                    Anasayfa
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-gray-300 hover:text-secondary transition-colors">
                                    Hakkımda
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="text-gray-300 hover:text-secondary transition-colors">
                                    Hizmetler
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="text-gray-300 hover:text-secondary transition-colors">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-300 hover:text-secondary transition-colors">
                                    İletişim
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-serif text-lg font-semibold mb-6 text-secondary">
                            İletişim
                        </h4>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin className="text-secondary shrink-0 mt-1" size={18} />
                                <span className="text-gray-300">
                                    Yilmaz Mahallesi, Edirne Caddesi
                                    <br />
                                    No:32 Kat 3 Daire 6
                                    <br />
                                    Lüleburgaz / Kırklareli
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="text-secondary shrink-0" size={18} />
                                <a
                                    href="tel:+905335530000"
                                    className="text-gray-300 hover:text-secondary transition-colors"
                                >
                                    +90 533 553 00 00
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="text-secondary shrink-0" size={18} />
                                <a
                                    href="mailto:psk.kaantabakoz@gmail.com"
                                    className="text-gray-300 hover:text-secondary transition-colors"
                                >
                                    psk.kaantabakoz@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
                    <p>© {currentYear} Kaan Tabaköz. Tüm hakları saklıdır.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <Link href="/privacy" className="hover:text-white transition-colors">
                            Gizlilik Politikası
                        </Link>
                        <Link href="/terms" className="hover:text-white transition-colors">
                            Kullanım Koşulları
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
