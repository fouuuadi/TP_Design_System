import React from "react";
import PropTypes from "prop-types";
import "./icon.css";

const Icon = ({ src, onClick, size = 24, color = "inherit" }) => {
  return (
    <img
      src={src}
      onClick={onClick}
      className="icon"
      style={{
        width: size,
        height: size,
        cursor: onClick ? "pointer" : "default",
        filter: color !== "inherit" ? `drop-shadow(0 0 0 ${color})` : "none",
      }}
      alt="icon"
    />
  );
};

Icon.propTypes = {
  src: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  size: PropTypes.number,
  color: PropTypes.string,
};

Icon.defaultProps = {
  onClick: null,
  size: 24,
  color: "inherit",
};

export default Icon;
