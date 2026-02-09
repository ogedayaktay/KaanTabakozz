"use client";

import { motion } from "framer-motion";
import { Brain, Users, HeartHandshake, Globe, CheckCircle, Dices } from "lucide-react";
import Link from "next/link";

const services = [
    {
        id: "individual",
        title: "Yetişkin Bireysel Terapi",
        icon: <Brain className="text-white" size={32} />,
        description: "Bilişsel Davranışçı Terapi (BDT) ve Şema Terapi ekolleriyle; kaygı, depresyon ve ilişkisel sorunlara yönelik yapılandırılmış terapi süreci.",
        topics: [
            "Depresyon ve Kaygı Bozuklukları",
            "Panik Atak ve OKB",
            "Travma Sonrası Stres Bozukluğu",
            "Yeme Bozuklukları",
            "Kişilik Örüntüleri (Şema Terapi)",
            "Duygu Düzenleme Güçlükleri"
        ]
    },
    {
        id: "play-therapy",
        title: "Oyun ve Masal Terapisi",
        icon: <HeartHandshake className="text-white" size={32} />,
        description: "Çocukların iç dünyalarını oyun ve masallar aracılığıyla ifade etmelerini sağlayan, duygusal iyileşmeyi destekleyen terapi yöntemleridir.",
        topics: [
            "Deneyimsel Oyun Terapisi",
            "Bilişsel Davranışçı Oyun Terapisi",
            "Masal Terapisi",
            "Kardeş Kıskançlığı ve Uyum Sorunları",
            "Tuvalet ve Uyku Alışkanlıkları",
            "Boşanma Süreci Etkileri"
        ]
    },
    {
        id: "adolescent",
        title: "Ergen Danışmanlığı",
        icon: <Users className="text-white" size={32} />,
        description: "Gençlerin kimlik oluşumu, akademik stres ve sosyal uyum süreçlerinde karşılaştıkları zorluklarla baş etmelerine yardımcı olan danışmanlık hizmetidir.",
        topics: [
            "Sınav Kaygısı (LGS/YKS)",
            "Akran Zorbalığı ve İlişkiler",
            "Teknoloji Bağımlılığı",
            "Özgüven ve Kimlik Gelişimi",
            "Aile İçi İletişim",
            "Öfke Kontrolü"
        ]
    },
    {
        id: "gambling",
        title: "Kumar ve Bahis Bağımlılığı",
        icon: <Dices className="text-white" size={32} />,
        description: "Kumar oynama bozukluğu; kişinin maddi, sosyal ve ailevi hayatını tehdit eden dürtüsel bir sorundur. BDT ve nüks önleme stratejileriyle çalışılır.",
        topics: [
            "Dürtü Kontrolü ve İstekle Baş Etme",
            "Bilişsel Çarpıtmaların Yeniden Yapılandırılması",
            "Finansal Sınırların Belirlenmesi",
            "Aile İçi Güvenin Yeniden İnşası",
            "Nüks Önleme Planı",
            "Eşlik Eden Psikolojik Sorunlar (Depresyon vb.)"
        ]
    },
    {
        id: "tests",
        title: "Psikolojik Testler",
        icon: <CheckCircle className="text-white" size={32} />,
        description: "Dikkat, performans ve kişilik değerlendirmesine yönelik, bilimsel geçerliliği olan objektif test uygulamaları.",
        topics: [
            "MOXO d-CPT Dikkat Testi",
            "MMPI Kişilik Envanteri",
            "Metropolitan Okul Olgunluğu Testi",
            "AGTE (Gelişim Tarama)",
            "Burdon Dikkat Testi",
            "Beier Cümle Tamamlama"
        ]
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 }
};

export default function Services() {
    return (
        <div className="flex flex-col min-h-screen bg-background">
            {/* Hero Section */}
            <section className="bg-primary text-white py-20 relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
                <div className="container-custom relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="font-serif text-4xl md:text-5xl font-bold mb-4"
                    >
                        Hizmetlerimiz
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-300 max-w-2xl mx-auto text-lg"
                    >
                        İhtiyaçlarınıza özel, bilimsel ve etik temelli terapi çözümleri.
                    </motion.p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20">
                <div className="container-custom">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="grid lg:grid-cols-2 gap-8"
                    >
                        {services.map((service) => (
                            <motion.div
                                key={service.id}
                                id={service.id}
                                variants={itemVariants}
                                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300 group"
                            >
                                <div className="p-8">
                                    <div className="flex items-start gap-6 mb-6">
                                        <div className="bg-gradient-to-br from-primary to-primary/80 p-4 rounded-xl shadow-lg">
                                            {service.icon}
                                        </div>
                                        <div>
                                            <h3 className="font-serif text-2xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
                                                {service.title}
                                            </h3>
                                            <p className="text-gray-600 leading-relaxed text-sm">
                                                {service.description}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="bg-gray-50 rounded-xl p-6">
                                        <h4 className="font-semibold text-primary mb-4 text-sm uppercase tracking-wider">Çalışma Alanları</h4>
                                        <div className="grid sm:grid-cols-2 gap-y-3 gap-x-6">
                                            {service.topics.map((topic, i) => (
                                                <div key={i} className="flex items-start gap-2 text-sm text-gray-700">
                                                    <CheckCircle className="text-secondary shrink-0 mt-0.5" size={16} />
                                                    <span>{topic}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="mt-8 flex justify-end">
                                        <Link
                                            href="/contact"
                                            className="text-primary font-medium hover:text-secondary transition-colors inline-flex items-center gap-2"
                                        >
                                            Randevu Al
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Philosophy Banner */}
            <section className="py-16 bg-gradient-to-r from-primary to-primary/90 text-white">
                <div className="container-custom text-center">
                    <h2 className="font-serif text-3xl font-bold mb-6">Terapi Süreci Nasıl İşler?</h2>
                    <p className="text-gray-300 max-w-3xl mx-auto text-lg mb-8">
                        İlk görüşmede (değerlendirme seansı) şikayetleriniz ve beklentileriniz ele alınır.
                        Sonrasında size en uygun terapi planı oluşturulur ve düzenli seanslarla süreç başlar.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block bg-secondary text-primary hover:bg-white hover:text-primary px-8 py-3 rounded-full font-semibold transition-all shadow-lg"
                    >
                        Hemen Başlayın
                    </Link>
                </div>
            </section>
        </div>
    );
}
