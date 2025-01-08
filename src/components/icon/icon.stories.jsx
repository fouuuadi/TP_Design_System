import React, { useState } from "react";
import Icon from "./icon";
import EyeIcon from "../../assets/eye.svg";
import EyeOffIcon from "../../assets/eye-off.svg";

export default {
  title: "Components/Icon",
  component: Icon,
  tags: ["autodocs"],
};

export const EyeToggle = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible((prevState) => !prevState);
  };

  return (
    <Icon
      src={isVisible ? EyeOffIcon : EyeIcon}
      onClick={toggleVisibility}
      size={32}
    />
  );
};
