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
        "Zeki filtreleme ile ilgi alanlarınıza uygun etkinlikleri bulun. Yakınınızdaki yeni deneyimleri keşfedin veya dünyanın herhangi bir yerinden online etkinliklere katılın.",
      gradient: "from-primary-500 to-secondary-500",
    },
    {
      icon: Plus,
      title: "Kolay Etkinlik Oluşturma",
      description:
        "Samimi buluşmalardan büyük organizasyonlara kadar her türlü etkinliği oluşturun. Kapasite sınırları belirleyin, onay süreçlerini yönetin ve bilet bilgilerini zahmetsizce paylaşın.",
      gradient: "from-secondary-500 to-accent-400",
    },
    {
      icon: MessageCircle,
      title: "Etkinlik Sohbet Grupları",
      description:
        "Etkinliğe özel sohbet grupları aracılığıyla diğer katılımcılarla bağlantı kurun. Gerçek zamanlı mesajlaşma ile etkinlik öncesi, sırası ve sonrasında ilişkiler geliştirin.",
      gradient: "from-accent-400 to-secondary-300",
    },
    {
      icon: UserCheck,
      title: "Sosyal Takip Sistemi",
      description:
        "Favori etkinlik yaratıcılarınızı ve topluluklarınızı takip edin. Güvendiğiniz ve beğendiğiniz kişi ve organizasyonlardan gelen etkinliklerden haberdar olun.",
      gradient: "from-primary-600 to-primary-400",
    },
    {
      icon: MapPin,
      title: "Lokasyon Zekası",
      description:
        "Gizlilik için kesin konumlar veya yaklaşık alanlar arasından seçim yapın. Entegre harita ile hem fiziksel mekanlar hem de online etkinlikler için destek.",
      gradient: "from-secondary-600 to-secondary-400",
    },
    {
      icon: Star,
      title: "Değerlendirme & Puanlama",
      description:
        "Deneyimlerinizi değerlendirmeler ve puanlamalar aracılığıyla başkalarıyla paylaşın. Topluluğun en iyi etkinlikleri ve en güvenilir organizatörleri keşfetmesine yardımcı olun.",
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
            Etkinlik keşfinden topluluk oluşturmaya kadar, OrdaBurda benzer
            düşünen insanlarla bağlantı kurmanız ve birlikte harika deneyimler
            yaratmanız için ihtiyacınız olan her şeyi sağlar.
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
