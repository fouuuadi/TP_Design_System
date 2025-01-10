import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./sidebar_profil.css";
import Switch from "../switch/switch";

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
    <aside className={`sidebar ${darkMode ? "dark-mode" : ""}`}>
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
    </aside>
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
