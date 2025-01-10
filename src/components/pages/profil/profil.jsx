import React from "react";
import SidebarProfil from "../../sidebar/sidebar_profil";
import "./profil.css";
import Content from "../../content_profil/content_profil";
import Header from "../../header/header";

const Profil = () => {
  return (
    <div className="profil-page">
      <Header/>
      <SidebarProfil />
      <Content />
    </div>
  );
};

export default Profil;
