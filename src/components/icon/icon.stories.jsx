import React, { useState } from "react";
import Icon from "./icon";
import EyeIcon from "../../assets/eye.svg";
import EyeOffIcon from "../../assets/eye-off.svg";
import ErrorIcon from "../../assets/error.svg";

export default {
  title: "Components/Icon",
  component: Icon,
  tags: ["autodocs"],
  argTypes: {
    color: { control: "color" },
    size: { control: "number" },
    onClick: { action: "clicked" },
  },
};

export const Default = (args) => <Icon {...args} />;
Default.args = {
  src: ErrorIcon,
  size: 32,
  color: "inherit",
};
