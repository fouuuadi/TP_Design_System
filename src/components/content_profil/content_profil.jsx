import React from "react";
import Input from "../input/input";
import Button from "../button/button";
import "./content_profil.css";

const Content = () => {
  return (
    <div className="content">
      <h1>Profile</h1>
      
      <section className="profile-info">
        <Input
            name="Email"
            type="Email"
            placeholder="john.doe@gmail.com"
          >
          </Input>
        <Input
            name="Email"
            type="Email"
            placeholder="john.doe@gmail.com"
          >
          </Input>
          <div>
            <Button label="Save"></Button>
          </div>
      </section>

      <hr />

      <section className="delete-account">
        <h2>Delete my account</h2>
        <p>
          Pour votre information, après avoir appuyé sur le bouton 'Supprimer',
          votre compte sera supprimé et vous serez redirigé vers la page de connexion.
        </p>
        <div>
            <Button label="Delete account"></Button>
          </div>      
        </section>
    </div>
  );
};

export default Content;
