import React from "react";
import SidebarProfil from "./sidebar_profil";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "Components/SidebarProfil",
  component: SidebarProfil,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  tags: ["autodocs"],
};

const Template = (args) => <SidebarProfil {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Account",
  links: [
    { label: "Login", to: "/" },
    { label: "Profile", to: "/profil" },
    { label: "Reset Password", to: "/forget" },
  ],
  defaultDarkMode: false,
};

export const CustomLinks = Template.bind({});
CustomLinks.args = {
  title: "Custom Sidebar",
  links: [
    { label: "Home", to: "/" },
    { label: "Dashboard", to: "/dashboard" },
    { label: "Settings", to: "/settings" },
  ],
  defaultDarkMode: false,
};

export const DarkMode = Template.bind({});
DarkMode.args = {
  title: "Account",
  links: [
    { label: "Login", to: "/" },
    { label: "Profile", to: "/profil" },
    { label: "Reset Password", to: "/forget" },
  ],
  defaultDarkMode: true,
};
