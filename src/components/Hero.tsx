import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronDown,
  Sparkles,
  Users,
  Bell,
  Mail,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

const gridPatternSvg =
  "data:image/svg+xml,%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cdefs%3E%3Cpattern id='grid' width='20' height='20' patternUnits='userSpaceOnUse'%3E%3Ccircle cx='10' cy='10' r='0.5' fill='white'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url%28%23grid%29'/%3E%3C/svg%3E";

const Hero = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const scrollToNext = () => {
    document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email) {
      setError("E-posta adresi gereklidir");
      return;
    }

    if (!validateEmail(email)) {
      setError("Geçerli bir e-posta adresi giriniz");
      return;
    }

    setIsSubmitting(true);

    try {
      // For Vercel
      const response = await fetch("/api/collect-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setEmail("");
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || "Network response was not ok");
      }
    } catch (error) {
      setError("Bir hata oluştu. Lütfen tekrar deneyin.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-primary-900 via-secondary-500 to-secondary-300">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className={`absolute inset-0 bg-[url('${gridPatternSvg}')] animate-pulse`}
        ></div>
      </div>

      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-secondary-300/20 rounded-full blur-xl animate-float-delayed"></div>
      <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-primary-300/20 rounded-full blur-lg animate-bounce-slow"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center text-white max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Logo */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <motion.h1
              className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-white via-secondary-100 to-white bg-clip-text text-transparent tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="font-afacad lowercase">ordaburda</span>
            </motion.h1>
            <motion.div
              className="flex items-center justify-center gap-2 text-2xl md:text-3xl font-light opacity-95 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Sparkles className="w-8 h-8 text-secondary-200" />
              <span>anı yaşa, hayatı keşfet</span>
              <Users className="w-8 h-8 text-secondary-200" />
            </motion.div>
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-xl md:text-2xl mb-12 opacity-90 leading-relaxed font-light max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Çevrenizdeki heyecan verici etkinlikleri keşfedin, yeni arkadaşlar
            edinin ve unutulmaz anılar yaratın. İlgi alanlarınızı paylaşan
            topluluklara katılın ve ortak deneyimler aracılığıyla anlamlı
            bağlantılar kurun.
          </motion.p>

          {/* Simplified NotifyMe Section */}
          <motion.div
            className="max-w-md mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            {isSubmitted ? (
              <motion.div
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <motion.div
                  className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <CheckCircle className="w-8 h-8 text-white" />
                </motion.div>
                <h2 className="text-2xl font-bold text-white mb-2">
                  Teşekkürler!
                </h2>
                <p className="text-white/90 mb-4">
                  E-posta adresiniz başarıyla kaydedildi.
                </p>
                <motion.button
                  onClick={() => setIsSubmitted(false)}
                  className="text-green-300 hover:text-green-200 font-semibold underline"
                  whileHover={{ scale: 1.05 }}
                >
                  Başka bir e-posta ekle
                </motion.button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-white/60" />
                  </div>
                  <motion.input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="E-posta adresinizi giriniz"
                    className="w-full pl-12 pr-4 py-3 text-base border-2 border-white/20 rounded-xl focus:border-white/40 focus:ring-4 focus:ring-white/10 transition-all duration-300 bg-white/10 backdrop-blur-sm text-white placeholder-white/60"
                    whileFocus={{ scale: 1.02 }}
                    disabled={isSubmitting}
                  />
                  {error && (
                    <motion.div
                      className="absolute -bottom-8 left-0 flex items-center gap-2 text-red-300 text-sm"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <AlertCircle className="w-4 h-4" />
                      {error}
                    </motion.div>
                  )}
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-white/20 to-white/10 text-white font-bold py-3 px-6 rounded-xl hover:from-white/30 hover:to-white/20 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 text-base border border-white/20"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                      Kaydediliyor...
                    </>
                  ) : (
                    <>
                      <Bell className="w-5 h-5" />
                      Beni Bilgilendir
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator - positioned at the very bottom of the section */}
      <motion.div
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.button
          onClick={scrollToNext}
          className="group p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 shadow-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronDown className="w-8 h-8 text-white/80 group-hover:text-white transition-colors" />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
