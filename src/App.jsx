import React, { useState, useEffect } from "react";
import TpDesignSystem from "./components/router/TP_design_system"
import Switch from "./components/switch/switch";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const mainElements = document.querySelectorAll("main");
    const body = document.body;

    if (darkMode) {
      body.style.backgroundColor = "var(--color-darkmode)";
      body.style.color = "var(--color-light)";
      mainElements.forEach((main) => {
        main.style.backgroundColor = "var(--color-darkmode)";
        main.style.color = "var(--color-light)"

        const labels = main.querySelectorAll("label");
        labels.forEach((label) => {
          label.style.color = "var(--color-light)";
        });
        if(document.getElementsByClassName('forgetLink')[0]){
          document.getElementsByClassName('forgetLink')[0].style.color = 'var(--color-light)';
        }
      });
    } else {
      body.style.backgroundColor = "var(--color-light)";
      body.style.color = "var(--color-text-light)";
      mainElements.forEach((main) => {
        main.style.backgroundColor = "var(--color-light)";
        main.style.color = "var(--color-darkmode)"

        const labels = main.querySelectorAll("label");
        labels.forEach((label) => {
          label.style.color = "var(--color-darkmode)";
        });
        if(document.getElementsByClassName('forgetLink')[0]){
          document.getElementsByClassName('forgetLink')[0].style.color = 'var(--color-darkmode)';
        }
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
