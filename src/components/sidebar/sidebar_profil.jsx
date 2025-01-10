import { useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar_profil.css";

const SidebarProfil = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`sidebar ${darkMode ? "dark-mode" : ""}`}>
      <h2>Account</h2>
      <hr />
      <nav>
        <ul>
          <li>
            <Link to="/" className="linkSidebar">Login</Link>
          </li>
          <li>
            <Link to="/profil" className="linkSidebar">Profile</Link> 
          </li>
          <li>
            <Link to="/forget" className="linkSidebar">Reset Password</Link>
          </li>
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

export default SidebarProfil;
