import React from "react";
import PropTypes from "prop-types";
import "./input.css";

//Code fait par Amine Abbes
//input pour email et password

const Input = ({ type, value, onChange, isError }) => {
  const label = type === "email" ? "Email" : "Mot de passe";
  const errorMessage =
    type === "email" ? "Email incorrect" : "Mot de passe incorrect";

  return (
    <div className={`input-container ${isError ? "error" : ""}`}>
      <label className="input-label">{label}</label>
      <input
        className="input-field"
        type={type}
        value={value}
        onChange={onChange}
        placeholder={label}
      />
      {isError && <p className="input-error">{errorMessage}</p>}
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.oneOf(["email", "password"]).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  isError: PropTypes.bool,
};

Input.defaultProps = {
  isError: false,
};

export default Input;
