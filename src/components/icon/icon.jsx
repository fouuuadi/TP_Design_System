import React from "react";
import PropTypes from "prop-types";
import "./icon.css";

const Icon = ({ src, onClick, size = 24, color = "black" }) => {
  const colorFilter = {
    black: "invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0%)",
    red: "invert(18%) sepia(82%) saturate(7467%) hue-rotate(0deg) brightness(94%) contrast(105%)",
    blue: "invert(44%) sepia(86%) saturate(3495%) hue-rotate(191deg) brightness(94%) contrast(92%)",
    green: "invert(48%) sepia(94%) saturate(391%) hue-rotate(81deg) brightness(91%) contrast(94%)",
  };

  return (
    <img
      src={src}
      onClick={onClick}
      alt="icon"
      style={{
        width: size,
        height: size,
        cursor: onClick ? "pointer" : "default",
        filter: colorFilter[color] || "none",
      }}
    />
  );
};

Icon.propTypes = {
  src: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  size: PropTypes.number,
  color: PropTypes.oneOf(["black", "red", "blue", "green"]),
};

Icon.defaultProps = {
  onClick: null,
  size: 24,
  color: "black",
};

export default Icon;
