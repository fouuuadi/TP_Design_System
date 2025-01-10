import React from "react";
import InputPassword from "./inpuForget";
import Button from "../../button/button"
import "../../form/form.css"
import { Link } from "react-router-dom";

export default function Formulaire() {
  return (
    <div>   
      <div>
        <h1>Réinitialisation</h1>
        <form action="" method="post">
          <InputPassword name="Password" type="password" label={"Nouveau mot de passe"}></InputPassword>
          <InputPassword name="Password" type="password" label={"Confirmation mot de passe"}></InputPassword>
          <div>
            <Link to='/'><Button label="Submit"></Button></Link>

          </div>

        </form>
      </div>
    </div>
  );
}
