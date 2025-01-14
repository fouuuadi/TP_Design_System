import React from "react";
import Input from "../input/input";
import Button from "../button/button";
import "./content_profil.css";
import InputPassword from "../inputPassword/inputPassword";
import { Link } from "react-router-dom";

const Content = () => {
  return (
    <main className="content">
      <h1>Profile</h1>
      
      <section className="profile-info">
        <Input
            name="Email"
            type="Email"
            placeholder="john.doe@gmail.com"
          >
          </Input>
        <InputPassword
            label={"Mot de passe"}
            value={"passeword123"}
          >
          </InputPassword>
            <Button label="Save"></Button>
      </section>

      <hr />

      <section className="delete-account">
        <h2>Delete my account</h2>
        <p>
          Pour votre information, après avoir appuyé sur le bouton 'Supprimer',
          votre compte sera supprimé et vous serez redirigé vers la page de connexion.
        </p>
        <Link to='/' className="delete-link"><Button label="Delete account" className='delete-button'></Button></Link>
        </section>
    </main>
  );
};

export default Content;
