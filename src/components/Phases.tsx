import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CheckCircle, Clock, Zap } from "lucide-react";

const Phases = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const phases = [
    {
      number: 1,
      title: "Temel Altyapı",
      icon: CheckCircle,
      items: [
        "Kimlik Doğrulama & Kullanıcı Profilleri",
        "Temel Etkinlik Oluşturma & Keşif",
        "Sohbet Sistemi Uygulaması",
        "Sosyal Takip Özellikleri",
        "Ayarlar & Tercihler",
      ],
      gradient: "from-primary-600 to-primary-500",
      borderColor: "border-primary-500",
    },
    {
      number: 2,
      title: "Gelişmiş Özellikler",
      icon: Clock,
      items: [
        "Gelişmiş Etkinlik Yönetimi",
        "Etkinlik Kategorileri & Filtreleme",
        "Fotoğraf Yükleme & Kapak Görselleri",
        "Bilet Bilgi Sistemi",
        "Lokasyon Hizmetleri Entegrasyonu",
      ],
      gradient: "from-secondary-500 to-secondary-400",
      borderColor: "border-secondary-500",
    },
    {
      number: 3,
      title: "Topluluk Büyümesi",
      icon: Zap,
      items: [
        "Puanlama & Değerlendirme Sistemi",
        "Anlık Bildirimler",
        "Etkinlik Analitik Paneli",
        "Topluluk Moderasyon Araçları",
        "Gelişmiş Arama & Öneriler",
      ],
      gradient: "from-accent-400 to-secondary-300",
      borderColor: "border-accent-400",
    },
  ];

  return (
    <section
      id="phases"
      className="py-20 bg-gradient-to-b from-accent-100 via-white to-accent-100"
      ref={ref}
    >
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-5xl md:text-6xl font-black text-gray-800 mb-6 relative inline-block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Geliştirme Yol Haritası
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-secondary-500 to-secondary-300 rounded-full"></div>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Topluluğumuzun ihtiyaçlarıyla birlikte büyüyen kapsamlı bir sosyal
            etkinlik platformu oluşturmak için stratejik yaklaşımımız.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {phases.map((phase, index) => {
            const IconComponent = phase.icon;
            return (
              <motion.div
                key={index}
                className={`group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-l-4 ${phase.borderColor} relative overflow-hidden`}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Background gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${phase.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                ></div>

                <div className="relative z-10">
                  {/* Phase header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={`w-12 h-12 rounded-full bg-gradient-to-br ${phase.gradient} flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      {phase.number}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors">
                        {phase.title}
                      </h3>
                    </div>
                  </div>

                  {/* Phase items */}
                  <ul className="space-y-3">
                    {phase.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-start gap-3 text-gray-600 group-hover:text-gray-700 transition-colors"
                      >
                        <div className="w-2 h-2 bg-gradient-to-br from-secondary-500 to-secondary-300 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Timeline connector for desktop */}
        <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 top-1/2 w-full max-w-5xl h-px bg-gradient-to-r from-primary-500 via-secondary-500 to-secondary-300 opacity-20"></div>
      </div>
    </section>
  );
};

export default Phases;
