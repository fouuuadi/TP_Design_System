import React from "react";
import SidebarProfil from "../../sidebar/sidebar_profil";
import "./profil.css";
import Content from "../../content_profil/content_profil";

const Profil = () => {
  return (
    <div className="profil-page">
      <SidebarProfil />
      <Content />
    </div>
  );
};

export default Profil;
