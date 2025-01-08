import React from "react";
import Icon from "./icon";
import ErrorIcon from "../../assets/error.svg";

export default {
  title: "Components/Icon",
  component: Icon,
  argTypes: {
    size: { control: "number" }, // Permet de modifier la taille
    color: {
      control: { type: "select" },
      options: ["black", "red", "blue", "green"], // Options de couleur
    },
    onClick: { action: "clicked" }, // Capture les clics dans l'onglet Actions
  },
};

const Template = (args) => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: ErrorIcon,
  size: 32,
  color: "black",
};

export const RedIcon = Template.bind({});
RedIcon.args = {
  src: ErrorIcon,
  size: 32,
  color: "red",
};

export const BlueIcon = Template.bind({});
BlueIcon.args = {
  src: ErrorIcon,
  size: 32,
  color: "blue",
};
