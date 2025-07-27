import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Search,
  Plus,
  MessageCircle,
  UserCheck,
  MapPin,
  Star,
} from "lucide-react";

const Features = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: Search,
      title: "Akıllı Etkinlik Keşfi",
      description:
        "Gelişmiş filtreleme sistemi ile ilgi alanlarınıza en uygun etkinlikleri kolayca bulun. Çevrenizde yeni deneyimler keşfedin veya dünyanın her yerinden online etkinliklere katılın.",
      gradient: "from-primary-500 to-secondary-500",
    },
    {
      icon: Plus,
      title: "Kolay Etkinlik Oluşturma",
      description:
        "Küçük dostluk buluşmalarından büyük organizasyonlara kadar her türlü etkinliği kolayca oluşturun. Katılımcı kapasitesi belirleyin, onay süreçlerini yönetin ve etkinlik detaylarını zahmetsizce paylaşın.",
      gradient: "from-secondary-500 to-accent-400",
    },
    {
      icon: MessageCircle,
      title: "Etkinlik Sohbet Odaları",
      description:
        "Her etkinlik için özel sohbet odaları ile diğer katılımcılarla bağlantı kurun. Etkinlik öncesi, sırası ve sonrasında anlık mesajlaşma ile yeni arkadaşlıklar geliştirin.",
      gradient: "from-accent-400 to-secondary-300",
    },
    {
      icon: UserCheck,
      title: "Akıllı Takip Sistemi",
      description:
        "Favori etkinlik organizatörlerinizi ve ilginizi çeken toplulukları takip edin. Beğendiğiniz ve güvendiğiniz kişilerden gelen yeni etkinlik duyurularından anında haberdar olun.",
      gradient: "from-primary-600 to-primary-400",
    },
    {
      icon: MapPin,
      title: "Esnek Konum Paylaşımı",
      description:
        "Gizliliğiniz için tam adres veya genel bölge arasından seçim yapın. Entegre harita desteği ile hem fiziksel mekanlar hem de online etkinlikler için mükemmel çözüm.",
      gradient: "from-secondary-600 to-secondary-400",
    },
    {
      icon: Star,
      title: "Değerlendirme Sistemi",
      description:
        "Katıldığınız etkinlikleri değerlendirerek deneyimlerinizi toplulukla paylaşın. En iyi etkinlikleri ve güvenilir organizatörleri keşfetmek için topluluk puanlamalarından faydalanın.",
      gradient: "from-accent-500 to-secondary-400",
    },
  ];

  return (
    <section
      id="features"
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
            Güçlü Özellikler
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-secondary-500 to-secondary-300 rounded-full"></div>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Etkinlik keşfinden topluluk oluşturmaya kadar, ordaburda aynı ilgi
            alanlarına sahip insanlarla tanışmanız ve birlikte unutulmaz anılar
            yaratmanız için gereken tüm araçları sunar.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 relative overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Hover gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                ></div>

                {/* Top border animation */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                ></div>

                <div className="relative z-10">
                  <div
                    className={`w-16 h-16 rounded-full bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-gray-900 transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
