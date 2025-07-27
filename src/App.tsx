import React, { useEffect } from "react";
import { generateCSSVariables, setTheme } from "./design-system";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Team from "./components/Team";
import Phases from "./components/Phases";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    // Set the default theme (purple-pink) and apply CSS variables
    setTheme("default");
    const cssVars = generateCSSVariables();
    Object.entries(cssVars).forEach(([property, value]) => {
      document.documentElement.style.setProperty(property, value);
    });
  }, []);

  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <Team />
      <Phases />
      <Footer />
    </div>
  );
}

export default App;
