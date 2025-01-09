import React from "react";
import PropTypes from "prop-types";
import "./common-input.css";
import Icon from "../icon/icon";
import ErrorIcon from "../../assets/error.svg";

const Input = ({ value, onChange, hasError }) => {
  return (
    <div className={`input-container ${hasError ? "error" : ""}`}>
      <label className="input-label">Email</label>
      <div className="input-wrapper">
        <input
          className="input-field"
          type="email"
          value={value}
          onChange={onChange}
          placeholder="Email"
        />
      </div>
      {hasError && (
        <p className="input-error">
          <Icon src={ErrorIcon} size={12} className="error-icon" color="red"/>
          <span>Email incorrect</span>
        </p>
      )}
    </div>
  );
};

Input.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  hasError: PropTypes.bool,
};

Input.defaultProps = {
  hasError: false,
};

export default Input;
