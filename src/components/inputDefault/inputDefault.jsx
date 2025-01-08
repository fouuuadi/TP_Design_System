import React from "react";
import PropTypes from "prop-types";
import "./input.css";
import Icon from "../icon/icon";
import ErrorIcon from "../../assets/error.svg";

const InputDefault = ({ value, onChange, isError }) => {
  return (
    <div className={`input-container ${isError ? "error" : ""}`}>
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
      {isError && (
        <p className="input-error">
          <Icon src={ErrorIcon} size={12} className="error-icon" />
          <span>Email incorrect</span>
        </p>
      )}
    </div>
  );
};

InputDefault.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  isError: PropTypes.bool,
};

InputDefault.defaultProps = {
  isError: false,
};

export default InputDefault;
