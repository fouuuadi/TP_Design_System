import React from "react";
import Input from "./input";
import "./common-input.css";


export default {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const Default = (args) => <Input {...args} />;
Default.args = {
  value: "",
  onChange: (e) => console.log("Input changed:", e.target.value),
  hasError: false,
  placeholder: "Enter your text",
};

export const WithError = (args) => <Input {...args} />;
WithError.args = {
  value: "",
  onChange: (e) => console.log("Input changed:", e.target.value),
  hasError: true,
  placeholder: "Enter your email",
};

export const WithPredefinedValue = (args) => <Input {...args} />;
WithPredefinedValue.args = {
  value: "example@example.com",
  onChange: (e) => console.log("Input changed:", e.target.value),
  hasError: false,
  placeholder: "Enter your email",
};
