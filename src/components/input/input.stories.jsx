import React, { useState } from "react";
import Input from "./input";

export default {
  title: "Components/Input",
  component: Input,
};

const Template = (args) => {
  const [value, setValue] = useState("");
  return (
    <Input
      {...args}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export const Email = Template.bind({});
Email.args = {
  type: "email",
  isError: false,
};

export const Password = Template.bind({});
Password.args = {
  type: "password",
  isError: false,
};

export const EmailWithError = Template.bind({});
EmailWithError.args = {
  type: "email",
  isError: true,
};

export const PasswordWithError = Template.bind({});
PasswordWithError.args = {
  type: "password",
  isError: true,
};
