import React, { useState } from "react";
import PropTypes from "prop-types";
import Icon from "../icon/icon";
import EyeIcon from "../../assets/eye.svg";
import EyeOffIcon from "../../assets/eye-off.svg";
import "./input.css";

const Input = ({ type, value, onChange, isError }) => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevState) => !prevState);
  };

  const isPasswordType = type === "password";
  const inputType = isPasswordType && isPasswordVisible ? "text" : type;

  return (
    <div className={`input-container ${isError ? "error" : ""}`}>
      <label className="input-label">{type === "email" ? "Email" : "Mot de passe"}</label>
      <div className="input-wrapper">
        <input
          className="input-field"
          type={inputType}
          value={value}
          onChange={onChange}
          placeholder={type === "email" ? "Email" : "Mot de passe"}
        />
        {isPasswordType && (
          <div className="icon-container" onClick={togglePasswordVisibility}>
            <Icon
              src={isPasswordVisible ? EyeOffIcon : EyeIcon}
              size={20}
            />
          </div>
        )}
      </div>
      {isError && (
        <p className="input-error">
          {type === "email" ? "email incorrect" : "mot de passe incorrect"}
        </p>
      )}
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
