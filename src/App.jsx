import React, { useState, useEffect } from "react";
import TpDesignSystem from "./components/router/TP_design_system"
import Switch from "./components/switch/switch";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Effet pour appliquer le mode sombre sur le body et toutes les balises <main>
  useEffect(() => {
    const mainElements = document.querySelectorAll("main");
    const body = document.body;

    if (darkMode) {
      body.style.backgroundColor = "var(--color-darkmode)";
      body.style.color = "var(--color-light)";
      mainElements.forEach((main) => {
        main.style.backgroundColor = "var(--color-darkmode)"; // Couleur pour le mode clair
        main.style.color = "var(--color-light)"

        const labels = main.querySelectorAll("label");
        labels.forEach((label) => {
          label.style.color = "var(--color-light)";
        });

      });
    } else {
      body.style.backgroundColor = "var(--color-light)";
      body.style.color = "var(--color-text-light)";
      mainElements.forEach((main) => {
        main.style.backgroundColor = "var(--color-light)"; // Couleur pour le mode sombre
        main.style.color = "var(--color-darkmode)"

        const labels = main.querySelectorAll("label");
        labels.forEach((label) => {
          label.style.color = "var(--color-darkmode)";
        });
      });
    }
  }, [darkMode]);



  return (
    <div className="app-container">
      <TpDesignSystem />
      <Switch
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
            label="Dark Mode"
            size="medium"
          />
    </div>
  );
};

export default App;
