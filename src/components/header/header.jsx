import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./header.css";

const Header = ({ links }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <h1 className="logo">Profil</h1>
        <button className="hamburger" onClick={toggleMenu}>
          ☰
        </button>
      </div>
      {menuOpen && (
        <nav className="mobile-menu">
          <ul>
            {links.map((link, index) => (
              <li key={index}>
                <Link to={link.to} className="menu-link" onClick={toggleMenu}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

Header.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired, 
    })
  ).isRequired,
};

export default Header;
