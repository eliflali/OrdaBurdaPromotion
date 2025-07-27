import React from "react";
import { motion } from "framer-motion";
import { Palette, Sun, Moon, Zap, Sparkles, Flame, Rocket } from "lucide-react";
import { setTheme, generateCSSVariables, themes } from "../design-system";

const ThemeSwitcher = () => {
  const handleThemeChange = (themeName: keyof typeof themes) => {
    setTheme(themeName);

    // Apply the new theme CSS variables
    const cssVars = generateCSSVariables();
    Object.entries(cssVars).forEach(([property, value]) => {
      document.documentElement.style.setProperty(property, value);
    });
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <motion.div
        className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-2"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex gap-2">
          <motion.button
            onClick={() => handleThemeChange("default")}
            className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white hover:scale-110 transition-transform"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            title="Purple-Pink Theme"
          >
            <Palette className="w-5 h-5" />
          </motion.button>

          <motion.button
            onClick={() => handleThemeChange("darkNeon")}
            className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-magenta-500 flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg shadow-cyan-500/50"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            title="Neon Cyber Theme"
          >
            <Sparkles className="w-5 h-5" />
          </motion.button>

          <motion.button
            onClick={() => handleThemeChange("darkCosmic")}
            className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg shadow-purple-500/50"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            title="Cosmic Purple Theme"
          >
            <Moon className="w-5 h-5" />
          </motion.button>

          <motion.button
            onClick={() => handleThemeChange("darkFire")}
            className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg shadow-orange-500/50"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            title="Fire Orange Theme"
          >
            <Flame className="w-5 h-5" />
          </motion.button>

          <motion.button
            onClick={() => handleThemeChange("blueGreen")}
            className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center text-white hover:scale-110 transition-transform"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            title="Blue-Green Theme"
          >
            <Sun className="w-5 h-5" />
          </motion.button>

          <motion.button
            onClick={() => handleThemeChange("tealCyan")}
            className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center text-white hover:scale-110 transition-transform"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            title="Teal-Cyan Theme"
          >
            <Rocket className="w-5 h-5" />
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default ThemeSwitcher;
