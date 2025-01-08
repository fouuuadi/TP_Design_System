import React from "react";
import InputDefault from "./inputDefault";

export default {
  title: "Components/InputDefault",
  component: InputDefault,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

const Template = (args) => <InputDefault {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: "example@example.com",
  onChange: (e) => console.log("Input changed:", e.target.value),
  isError: false,
};

export const WithError = Template.bind({});
WithError.args = {
  value: "",
  onChange: (e) => console.log("Input changed:", e.target.value),
  isError: true,
};
