"use client";

import Link from "next/link";
import { ArrowRight, Brain, Users, HeartHandshake, CheckCircle } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function Home() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Parallax */}
      <section ref={ref} className="relative h-[95vh] flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0 z-0"
          style={{ y: backgroundY }}
        >
          <div className="absolute inset-0 bg-primary/40 z-10" />
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat scale-105"
            style={{
              backgroundImage: "url('/images/hero-bg.jpg')"
            }}
          />
        </motion.div>

        <motion.div
          style={{ y: textY }}
          className="container-custom relative z-20 text-center text-white"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-5xl mx-auto space-y-10"
          >
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight drop-shadow-xl">
              Zihninizdeki Düğümleri <br />
              <span className="text-secondary italic">Birlikte Çözelim.</span>
            </h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative"
            >
              <p className="text-lg md:text-2xl text-gray-100 max-w-3xl mx-auto leading-relaxed font-light drop-shadow-md">
                Psikolog Kaan Tabaköz ile Lüleburgaz'da bilimsel ve etik temelli terapi yöntemleriyle kendinizi yeniden keşfedin.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
            >
              <Link
                href="/contact"
                className="group relative bg-secondary text-primary hover:bg-white hover:text-primary px-10 py-5 rounded-full font-semibold text-lg transition-all duration-300 shadow-2xl hover:shadow-secondary/20 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Randevu Al <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out" />
              </Link>
              <Link
                href="https://wa.me/905335530000"
                target="_blank"
                className="bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 px-10 py-5 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                WhatsApp İletişim
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 animate-bounce"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-white/50 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Intro / Philosophy Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
              className="relative aspect-[3/4] lg:aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl group"
            >
              {/* Placeholder for Portrait */}
              <div
                className="w-full h-full bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"
                style={{
                  backgroundImage: "url('/images/kaan-tabakoz.jpg')"
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-80" />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="absolute bottom-8 left-8 text-white font-serif"
              >
                <div className="w-12 h-1 bg-secondary mb-4 rounded-full" />
                <h3 className="text-3xl font-bold mb-1">Kaan Tabaköz</h3>
                <p className="text-secondary text-lg">Klinik Psikolog</p>
                <p className="text-white/80 text-sm mt-1 font-light tracking-wide">Özel Sağlık Hizmet Birimi</p>
              </motion.div>
            </motion.div>

            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-serif text-5xl font-bold text-primary leading-tight">
                  Anlaşılmak, İyileşmenin <span className="text-secondary relative">
                    İlk Adımıdır.
                    <svg className="absolute w-full h-3 -bottom-1 left-0 text-secondary/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                      <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                    </svg>
                  </span>
                </h2>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="text-gray-600 leading-relaxed text-xl font-light"
              >
                Her bireyin hikayesi kendine özgüdür ve her süreç, kişiye özel bir yaklaşım gerektirir.
                Bilimsel temelli yöntemler (Bilişsel Davranışçı Terapi, Şema Terapi) ile çıktığımız bu yolda,
                sizi yargılamadan dinleyen, anlayan ve size eşlik eden bir rehber olarak yanınızdayım.
              </motion.p>

              <motion.ul
                className="space-y-4 pt-4"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={{
                  show: { transition: { staggerChildren: 0.1 } }
                }}
              >
                {[
                  "Gizlilik ve etik değerlere tam bağlılık",
                  "Bilimsel ve kanıta dayalı terapi yöntemleri",
                  "Yargılayıcı olmayan, güvenli alan",
                  "Kişiye özel terapi planlaması"
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    variants={fadeInUp}
                    className="flex items-center gap-4 text-gray-700 text-lg group"
                  >
                    <div className="bg-primary/5 p-2 rounded-full group-hover:bg-secondary/20 transition-colors">
                      <CheckCircle className="text-secondary" size={20} />
                    </div>
                    <span className="group-hover:text-primary transition-colors">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.div
                className="pt-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <Link
                  href="/about"
                  className="inline-flex items-center gap-3 text-primary font-bold text-lg hover:text-secondary transition-colors group"
                >
                  <span className="border-b-2 border-primary/20 group-hover:border-secondary transition-colors">Hakkımda Daha Fazla</span>
                  <ArrowRight className="group-hover:translate-x-2 transition-transform" size={20} />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Clinic Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-primary mb-4">Klinikten Kareler</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Danışanlarımızın konforu ve gizliliği ön planda tutularak tasarlanmış terapi odalarımız.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { src: "/images/gallery-1.jpg", alt: "Oyun Terapisi Odası" },
              { src: "/images/gallery-2.jpg", alt: "Yetişkin Terapi Odası" },
              { src: "/images/gallery-3.jpg", alt: "Bekleme Alanı" },
              { src: "/images/gallery-4.jpg", alt: "Terapi Odası Detay" },
            ].map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group overflow-hidden rounded-2xl shadow-lg relative aspect-square"
              >
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${img.src}')` }}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Summary Section */}
      <section className="py-32 bg-white relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20" />
        <div className="container-custom relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-20 space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-serif text-5xl font-bold text-primary"
            >
              Uzmanlık Alanlarım
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-600 text-xl font-light"
            >
              Size en uygun desteği sağlayabilmek için farklı terapi yöntemleri ve alanlarında hizmet veriyorum.
            </motion.p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
            className="grid md:grid-cols-3 gap-8"
          >
            {/* Service 1 */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-[2rem] shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-bl-[100%] z-0 translate-x-10 -translate-y-10 group-hover:bg-secondary/10 transition-colors" />
              <div className="relative z-10">
                <div className="bg-primary/5 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Brain className="text-primary group-hover:text-white transition-colors" size={36} />
                </div>
                <h3 className="font-serif text-2xl font-bold text-primary mb-4">Yetişkin Terapisi</h3>
                <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                  Kaygı, depresyon, travma ve ilişkisel sorunlara yönelik BDT ve Şema Terapi odaklı yaklaşım.
                </p>
                <Link href="/services#individual" className="text-secondary font-semibold hover:text-primary transition-colors flex items-center gap-2">
                  Detaylı Bilgi <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>

            {/* Service 2 */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-[2rem] shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-bl-[100%] z-0 translate-x-10 -translate-y-10 group-hover:bg-secondary/10 transition-colors" />
              <div className="relative z-10">
                <div className="bg-primary/5 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <HeartHandshake className="text-primary group-hover:text-white transition-colors" size={36} />
                </div>
                <h3 className="font-serif text-2xl font-bold text-primary mb-4">Oyun ve Masal Terapisi</h3>
                <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                  Çocukların iç dünyalarını oyun ve masallarla ifade etmelerini sağlayan iyileştirici süreç.
                </p>
                <Link href="/services#play-therapy" className="text-secondary font-semibold hover:text-primary transition-colors flex items-center gap-2">
                  Detaylı Bilgi <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>

            {/* Service 3 */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-[2rem] shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-bl-[100%] z-0 translate-x-10 -translate-y-10 group-hover:bg-secondary/10 transition-colors" />
              <div className="relative z-10">
                <div className="bg-primary/5 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Users className="text-primary group-hover:text-white transition-colors" size={36} />
                </div>
                <h3 className="font-serif text-2xl font-bold text-primary mb-4">Ergen Danışmanlığı</h3>
                <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                  Sınav kaygısı, kimlik arayışı, akran zorbalığı ve aile içi çatışmalara yönelik destek.
                </p>
                <Link href="/services#adolescent" className="text-secondary font-semibold hover:text-primary transition-colors flex items-center gap-2">
                  Detaylı Bilgi <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center mt-16"
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-10 py-4 bg-primary text-white rounded-full font-bold hover:bg-white hover:text-primary border-2 border-transparent hover:border-primary transition-all shadow-xl"
            >
              Tüm Hizmetleri Görüntüle
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-primary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-2/3 h-full bg-secondary/10 -skew-x-12 translate-x-1/2 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-secondary/5 skew-x-12 -translate-x-1/3 blur-2xl" />

        <div className="container-custom relative z-10 text-center max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-6xl font-bold mb-8 leading-tight"
          >
            Değişim İçin İlk Adımı Atın
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-200 text-xl md:text-2xl mb-12 leading-relaxed font-light"
          >
            Yaşadığınız zorlukların üstesinden gelmek ve daha tatmin edici bir hayata adım atmak için profesyonel destek alın.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Link
              href="/contact"
              className="bg-secondary text-primary hover:bg-white hover:text-primary px-12 py-5 rounded-full font-bold text-lg transition-all shadow-2xl hover:shadow-white/20 hover:-translate-y-1"
            >
              Online Randevu Al
            </Link>
            <Link
              href="tel:+905535530000"
              className="bg-transparent border-2 border-white/20 hover:bg-white/10 px-12 py-5 rounded-full font-bold text-lg transition-all hover:-translate-y-1"
            >
              Hemen Ara
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
