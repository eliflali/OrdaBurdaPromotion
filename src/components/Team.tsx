import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Team = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const teamMembers = [
    {
      name: "Elif Lale",
      role: "Geliştirici",
      avatar: "/avatars/elif.png",
    },
    {
      name: "Caner Kurtnazar",
      role: "Geliştirici",
      avatar: "/avatars/caner.png",
    },
    {
      name: "Yusuf Polat",
      role: "UI/UX Tasarımcı",
      avatar: "/avatars/yusuf.png",
    },
  ];

  return (
    <section
      id="team"
      className="py-20 dark-bg text-white relative overflow-hidden sparkle"
      ref={ref}
    >
      {/* Background decorations */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl glow-secondary"></div>
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-primary-300/20 rounded-full blur-xl glow-primary"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-5xl md:text-6xl font-black mb-6 relative inline-block text-glow-secondary"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Ekibi Tanıyın
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-secondary-500 to-accent-500 rounded-full glow-secondary"></div>
          </motion.h2>
          <motion.p
            className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Tutkulu ve deneyimli ekibimiz, sosyal bağlantıları güçlendiren
            yenilikçi çözümler yaratmak için bir araya geldi.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="group bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 text-center hover:bg-white/15 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl glow-primary hover:glow-secondary"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative mb-6">
                <motion.div
                  className="w-24 h-24 mx-auto bg-white/20 backdrop-blur-md rounded-full overflow-hidden border-2 border-white/30 group-hover:scale-110 group-hover:bg-white/25 transition-all duration-300 glow-secondary"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>

              <h3 className="text-2xl font-bold mb-2 group-hover:text-secondary-100 transition-colors text-glow-primary">
                {member.name}
              </h3>

              <p className="text-secondary-100 font-medium mb-4 opacity-90">
                {member.role}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
