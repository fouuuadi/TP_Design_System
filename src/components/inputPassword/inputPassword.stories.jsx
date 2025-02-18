import React from "react";
import InputPassword from "./inputPassword";
import "./inputPassword.css";


export default {
  title: "Components/InputPassword",
  component: InputPassword,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

const Template = (args) => <InputPassword {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: "password123",
  onChange: (e) => console.log("Input changed:", e.target.value),
  hasError: false,
};

export const WithError = Template.bind({});
WithError.args = {
  label: 'Mot de passe',
  value: "",
  onChange: (e) => console.log("Input changed:", e.target.value),
  hasError: true,
};
