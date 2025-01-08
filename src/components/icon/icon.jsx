import React from "react";
import PropTypes from "prop-types";
import "./icon.css";

const Icon = ({ src, onClick, size = 24 }) => {
  return (
    <img
      src={src}
      onClick={onClick}
      className="icon"
      style={{ width: size, height: size, cursor: onClick ? "pointer" : "default" }}
    />
  );
};

Icon.propTypes = {
  src: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  size: PropTypes.number,
};

Icon.defaultProps = {
  onClick: null,
  size: 24,
};

export default Icon;
