import React, { useState } from "react";
import PropTypes from "prop-types";
import Icon from "../icon/icon";
import EyeIcon from "../../assets/eye.svg";
import EyeOffIcon from "../../assets/eye-off.svg";
import ErrorIcon from "../../assets/error.svg";
import "../inputPassword/inputPassword.css";

const InputPassword = ({ value, onChange, hasError, label }) => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevState) => !prevState);
  };

  return (
    <div className={`input-container ${hasError ? "error" : ""}`}>
      <label className="input-label">{label}</label>
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
      {hasError && (
        <p className="input-error">
          <Icon src={ErrorIcon} size={12} className="error-icon" color="red"/>
          <span>Mot de passe incorrect</span>
        </p>
      )}
    </div>
  );
};

InputPassword.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  hasError: PropTypes.bool,
};

InputPassword.defaultProps = {
  hasError: false,
};

export default InputPassword;
