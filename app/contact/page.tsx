"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        message: "",
        kvkk: false
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({ ...prev, kvkk: e.target.checked }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const text = `Merhaba, web sitenizden ulaşıyorum.\n\nİsim: ${formData.name}\nTelefon: ${formData.phone}\nE-posta: ${formData.email}\nMesaj: ${formData.message}`;
        const encodedText = encodeURIComponent(text);
        const waUrl = `https://wa.me/905335530000?text=${encodedText}`;

        window.open(waUrl, '_blank');

        setFormData({ name: "", phone: "", email: "", message: "", kvkk: false });
    };

    return (
        <div className="flex flex-col min-h-screen bg-background">
            {/* Hero Section */}
            <section className="bg-primary text-white py-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
                <div className="container-custom relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="font-serif text-4xl md:text-5xl font-bold mb-4"
                    >
                        İletişim
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-300 max-w-2xl mx-auto text-lg"
                    >
                        Randevu almak veya sorularınız için bana ulaşabilirsiniz.
                    </motion.p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-16">

                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="space-y-10"
                        >
                            <div>
                                <h2 className="font-serif text-3xl font-bold text-primary mb-6">Ofis İletişim Bilgileri</h2>
                                <p className="text-gray-600 leading-relaxed">
                                    Görüşmelerimiz Lüleburgaz'daki ofisimde veya online platformlar üzerinden gerçekleştirilmektedir. Randevu için lütfen iletişime geçiniz.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/5 p-3 rounded-full text-primary">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-primary mb-1">Adres</h3>
                                        <p className="text-gray-600">
                                            Yilmaz Mahallesi, Edirne Caddesi<br />
                                            No:32 Kat 3 Daire 6<br />
                                            Lüleburgaz / Kırklareli
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/5 p-3 rounded-full text-primary">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-primary mb-1">Telefon</h3>
                                        <a href="tel:+905335530000" className="text-gray-600 hover:text-secondary transition-colors">
                                            +90 533 553 00 00
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/5 p-3 rounded-full text-primary">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-primary mb-1">E-posta</h3>
                                        <a href="mailto:info@klinikpsikologkaantabakoz.com" className="text-gray-600 hover:text-secondary transition-colors">
                                            info@klinikpsikologkaantabakoz.com
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Map Placeholder */}
                            <div className="h-64 bg-gray-200 rounded-2xl overflow-hidden relative">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3004.38206412497!2d27.3513566!3d41.4091331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b1a5b6ae14b091%3A0x59df442ba065971d!2sEdirne%20Cd.%20No%3A32%2C%2039750%20L%C3%BCleburgaz%2FK%C4%B1rklareli!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen={true}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
                        >
                            <h2 className="font-serif text-2xl font-bold text-primary mb-6">Bize Ulaşın</h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium text-gray-700">İsim Soyisim</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                            placeholder="Adınız"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="phone" className="text-sm font-medium text-gray-700">Telefon</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                            placeholder="05XX XXX XX XX"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-gray-700">E-posta</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                        placeholder="ornek@email.com"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium text-gray-700">Mesajınız</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                                        placeholder="Randevu talebi veya sorunuz..."
                                    />
                                </div>

                                <div className="flex items-start gap-3">
                                    <input
                                        type="checkbox"
                                        id="kvkk"
                                        name="kvkk"
                                        checked={formData.kvkk}
                                        onChange={handleCheckboxChange}
                                        required
                                        className="mt-1 h-4 w-4 text-secondary rounded border-gray-300 focus:ring-secondary"
                                    />
                                    <label htmlFor="kvkk" className="text-xs text-gray-500">
                                        <Link href="/privacy" className="text-primary hover:underline">KVKK Aydınlatma Metni</Link>'ni okudum ve kişisel verilerimin işlenmesini onaylıyorum.
                                    </label>
                                </div>

                                <button
                                    type="submit"
                                    disabled={!formData.kvkk}
                                    className="w-full bg-secondary text-primary hover:bg-primary hover:text-white py-4 rounded-xl font-bold text-lg transition-all shadow-md disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                >
                                    <Send size={18} />
                                    Gönder
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
