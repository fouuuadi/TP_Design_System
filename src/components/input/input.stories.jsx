import React from "react";
import Input from "./input";

export default {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

const Template = (args) => {
  return <Input {...args} />;
};

export const Email = Template.bind({});
Email.args = {
  type: "email",
  value: "example@example.com",
  onChange: (e) => console.log("Input changed:", e.target.value),
  isError: false,
};

export const Password = Template.bind({});
Password.args = {
  type: "password",
  value: "password123",
  onChange: (e) => console.log("Input changed:", e.target.value),
  isError: false,
};

export const EmailWithError = Template.bind({});
EmailWithError.args = {
  type: "email",
  value: "",
  onChange: (e) => console.log("Input changed:", e.target.value),
  isError: true,
};

export const PasswordWithError = Template.bind({});
PasswordWithError.args = {
  type: "password",
  value: "",
  onChange: (e) => console.log("Input changed:", e.target.value),
  isError: true,
};
