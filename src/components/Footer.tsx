import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Heart, Mail, Calendar } from "lucide-react";

const Footer = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <footer
      className="dark-bg text-white py-16 relative overflow-hidden sparkle"
      ref={ref}
    >
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-secondary-300 rounded-full blur-xl glow-secondary"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-primary-300 rounded-full blur-xl glow-primary"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-between gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          {/* Logo and brand */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h3
              className="text-4xl font-black bg-gradient-to-r from-secondary-400 to-secondary-200 bg-clip-text text-transparent mb-3 text-glow-secondary font-afacad lowercase"
              whileHover={{ scale: 1.05 }}
            >
              ordaburda
            </motion.h3>
            <p className="text-secondary-100 text-lg font-light max-w-md">
              Paylaşılan deneyimler aracılığıyla bağlantılar kuruyoruz
            </p>
          </motion.div>

          {/* Features highlight */}
          <motion.div
            className="flex flex-col sm:flex-row gap-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
              className="flex flex-col items-center gap-2"
              whileHover={{ scale: 1.1 }}
            >
              <Calendar className="w-8 h-8 text-secondary-300 glow-secondary" />
              <span className="text-sm text-secondary-100">Etkinlik Keşfi</span>
            </motion.div>
            <motion.div
              className="flex flex-col items-center gap-2"
              whileHover={{ scale: 1.1 }}
            >
              <Heart className="w-8 h-8 text-secondary-300 glow-secondary" />
              <span className="text-sm text-secondary-100">
                Topluluk Bağları
              </span>
            </motion.div>
            <motion.div
              className="flex flex-col items-center gap-2"
              whileHover={{ scale: 1.1 }}
            >
              <Mail className="w-8 h-8 text-secondary-300 glow-secondary" />
              <span className="text-sm text-secondary-100">Anlık İletişim</span>
            </motion.div>
          </motion.div>

          {/* Coming soon badge */}
          <motion.div
            className="text-center lg:text-right"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-gradient-to-r from-secondary-500 to-secondary-400 px-6 py-3 rounded-full text-white font-semibold shadow-lg glow-secondary"
              whileHover={{ scale: 1.05 }}
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.div
                className="w-2 h-2 bg-white rounded-full"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <span>Çok Yakında</span>
            </motion.div>
            <p className="text-secondary-100 text-sm mt-3 opacity-80">
              Lansman için bizi takip edin
            </p>
          </motion.div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          className="border-t border-primary-700 mt-12 pt-8 text-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-primary-200 text-sm">
            © 2025 ordaburda. Tüm hakları saklıdır. | Sosyal etkinlik
            deneyiminizi dönüştürmeye hazırlanın.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
