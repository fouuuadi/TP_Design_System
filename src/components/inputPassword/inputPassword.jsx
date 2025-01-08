import React, { useState } from "react";
import PropTypes from "prop-types";
import Icon from "../icon/icon";
import EyeIcon from "../../assets/eye.svg";
import EyeOffIcon from "../../assets/eye-off.svg";
import ErrorIcon from "../../assets/error.svg";
import "./input.css";

const InputPassword = ({ value, onChange, isError }) => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevState) => !prevState);
  };

  return (
    <div className={`input-container ${isError ? "error" : ""}`}>
      <label className="input-label">Mot de passe</label>
      <div className="input-wrapper">
        <input
          className="input-field"
          type={isPasswordVisible ? "text" : "password"}
          value={value}
          onChange={onChange}
          placeholder="Mot de passe"
        />
        <div className="icon-container" onClick={togglePasswordVisibility}>
          <Icon src={isPasswordVisible ? EyeOffIcon : EyeIcon} size={20} />
        </div>
      </div>
      {isError && (
        <p className="input-error">
          <Icon src={ErrorIcon} size={12} className="error-icon" />
          <span>Mot de passe incorrect</span>
        </p>
      )}
    </div>
  );
};

InputPassword.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  isError: PropTypes.bool,
};

InputPassword.defaultProps = {
  isError: false,
};

export default InputPassword;
