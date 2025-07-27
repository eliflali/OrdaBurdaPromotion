import React, { useEffect } from "react";
import { generateCSSVariables, setTheme } from "./design-system";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Team from "./components/Team";
import Phases from "./components/Phases";
import Footer from "./components/Footer";
import ThemeSwitcher from "./components/ThemeSwitcher";

function App() {
  useEffect(() => {
    // Apply the default theme CSS variables
    const cssVars = generateCSSVariables();
    Object.entries(cssVars).forEach(([property, value]) => {
      document.documentElement.style.setProperty(property, value);
    });
  }, []);

  return (
    <div className="min-h-screen">
      <ThemeSwitcher />
      <Hero />
      <Features />
      <Team />
      <Phases />
      <Footer />
    </div>
  );
}

export default App;
