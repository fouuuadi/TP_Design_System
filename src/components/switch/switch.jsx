import React from "react";
import PropTypes from "prop-types";
import "./switch.css";

const Switch = ({ checked, onChange, label, size }) => {
  return (
    <div className="switch-container">
      {label && <span className="switch-label">{label}</span>}
      <label className={`switch ${size}`}>
        <input type="checkbox" checked={checked} onChange={onChange} />
        <span className="slider"></span>
      </label>
    </div>
  );
};

Switch.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]),
};

Switch.defaultProps = {
  label: null,
  size: "medium",
};

export default Switch;
