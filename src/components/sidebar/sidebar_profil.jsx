import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar_profil.css";

const SidebarProfil = ({ title, links, defaultDarkMode }) => {
  const [darkMode, setDarkMode] = useState(defaultDarkMode);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

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
        <label>
          Dark mode
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
  title: PropTypes.string, // Titre de la sidebar
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired,
    })
  ), // Liens de navigation
  defaultDarkMode: PropTypes.bool, // Mode sombre par défaut
};

SidebarProfil.defaultProps = {
  title: "Account", // Titre par défaut
  links: [
    { label: "Login", to: "/" },
    { label: "Profile", to: "/profil" },
    { label: "Reset Password", to: "/forget" },
  ], // Liens par défaut
  defaultDarkMode: false, // Mode clair par défaut
};

export default SidebarProfil;
