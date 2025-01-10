import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./sidebar_profil.css";

const SidebarProfil = ({ title, links, defaultDarkMode }) => {
  const [darkMode, setDarkMode] = useState(defaultDarkMode);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <div className={`sidebar ${darkMode ? "dark-mode" : ""}`}>
      <h2>{title}</h2>
      <hr />
      <nav>
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <Link to={link.to} className="linkSidebar">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="dark-mode-toggle">
        <span>Dark Mode</span>
        <label className="switch">
          <input
            type="checkbox"
            checked={darkMode}
            onChange={toggleDarkMode}
          />
          <span className="slider"></span>
        </label>
      </div>
    </div>
  );
};

SidebarProfil.propTypes = {
  title: PropTypes.string,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired,
    })
  ),
  defaultDarkMode: PropTypes.bool,
};

SidebarProfil.defaultProps = {
  title: "Account",
  links: [
    { label: "Login", to: "/" },
    { label: "Profile", to: "/profil" },
    { label: "Reset Password", to: "/forget" },
  ],
  defaultDarkMode: false,
};

export default SidebarProfil;
