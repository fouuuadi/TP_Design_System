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

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: "example@example.com",
  onChange: (e) => console.log("input changed:", e.target.value),
  hasError: false,
};

export const WithError = Template.bind({});
WithError.args = {
  value: "",
  onChange: (e) => console.log("input changed:", e.target.value),
  hasError: true,
};
