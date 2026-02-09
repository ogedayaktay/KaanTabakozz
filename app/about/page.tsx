"use client";

import { motion } from "framer-motion";
import { CheckCircle, Award, BookOpen, GraduationCap } from "lucide-react";
import Link from "next/link";

export default function About() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Page Header */}
            <section className="bg-primary text-white py-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
                <div className="container-custom relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="font-serif text-4xl md:text-5xl font-bold mb-4"
                    >
                        Hakkımda
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-300 max-w-2xl mx-auto text-lg"
                    >
                        Mesleki yolculuğum, eğitimim ve terapi yaklaşımım üzerine.
                    </motion.p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20 bg-white">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 gap-16 items-start">
                        {/* Image Side */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="md:sticky md:top-24"
                        >
                            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl relative">
                                <div
                                    className="w-full h-full bg-cover bg-center"
                                    style={{
                                        backgroundImage: "url('/images/kaan-tabakoz.jpg')"
                                    }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                                <div className="absolute bottom-8 left-8 text-white">
                                    <h3 className="font-serif text-2xl font-bold">Kaan Tabaköz</h3>
                                    <p className="text-secondary opacity-90">Klinik Psikolog</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Text Side */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-10"
                        >
                            <div>
                                <h2 className="font-serif text-3xl font-bold text-primary mb-6">
                                    Profesyonel Geçmişim
                                </h2>
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    2019 yılında <strong>İstanbul Kültür Üniversitesi</strong> Psikoloji bölümünden mezun oldum. Lisans bitirme tezimi, "Düzenli fitness yapan bireylerin sosyal görünüş kaygısı, benlik saygısı ve yeme davranışlarının egzersiz bağımlılığı semptom düzeyine etkisi" üzerine Prof. Dr. Önder Kavakçı danışmanlığında tamamladım.
                                </p>
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    2022 yılında <strong>İstanbul Arel Üniversitesi</strong> Klinik Psikoloji Yüksek Lisans programını, "Bipolar bozuklukta mani döneminin bir olgu üzerinden incelenmesi" bitirme projesiyle (Danışman: Dr. Öğr. Üyesi Necmettin Aksoy) tamamlayarak <strong>Uzman Klinik Psikolog</strong> unvanını aldım.
                                </p>
                                <p className="text-gray-600 leading-relaxed">
                                    Meslek hayatıma çeşitli kurumlarda stajyer psikolog olarak başladım. <strong>Bakırköy Prof. Dr. Mazhar Osman Ruh Sağlığı ve Sinir Hastalıkları E.A.H.</strong>'de stajyer klinik psikolog olarak gözlem ve deneyim kazandım. 2023 yılından bu yana kurucusu olduğum psikolojik danışmanlık merkezinde danışan görmekteyim.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-serif text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                                    <BookOpen className="text-secondary" />
                                    Uzmanlık ve Yaklaşım
                                </h3>
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    Terapi süreçlerimde ağırlıklı olarak <strong>Bilişsel Davranışçı Terapi (BDT)</strong> ve <strong>Şema Terapi</strong> ekollerinden yararlanmaktayım. Ayrıca çocuk ve ergenlerle çalışırken Oyun Terapisi ve MOXO d-CPT Dikkat Testi gibi araçları kullanıyorum.
                                </p>
                                <ul className="space-y-4">
                                    {[
                                        "Bilişsel Davranışçı Terapi (Prof. Dr. Hakan Türkçapar)",
                                        "Şema Terapi (Uzm. Dr. Alp Karaosmanoğlu)",
                                        "Oyun Terapisi & Masal Terapisi",
                                        "MOXO d-CPT Dikkat ve Performans Testi"
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                                            <CheckCircle className="text-secondary mt-1 shrink-0" size={18} />
                                            <span className="text-gray-700 font-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-serif text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                                    <Award className="text-secondary" />
                                    Eğitim ve Sertifikalar
                                </h3>
                                <div className="space-y-4">
                                    {[
                                        "Bilişsel Davranışçı Terapi Eğitimi - Prof. Dr. Hakan Türkçapar (2019-2020)",
                                        "Şema Terapi Eğitimi - Uzm. Dr. Alp Karaosmanoğlu (2019)",
                                        "Pedagojik Formasyon - İstanbul Kültür Üniversitesi (2019)",
                                        "Objektif Çocuk Değerlendirme Testleri - Rasyonel Psikoloji Enstitüsü (2019)",
                                        "Oyun Terapisi - Klinik Psikolog Fundem Ece (2023)",
                                        "Masal Terapisi - Klinik Psikolog Meltem Cıbır / Psk. Dan. Tuğçe İnkaya (2023)",
                                        "MOXO d-CPT Dikkat ve Performans Testi - Moxo Türkiye (2019)"
                                    ].map((cert, index) => (
                                        <div key={index} className="flex items-center gap-4 text-gray-700">
                                            <GraduationCap className="text-primary/60 shrink-0" size={20} />
                                            <span>{cert}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="pt-8">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center w-full bg-secondary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-xl"
                                >
                                    Randevu Oluştur
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
