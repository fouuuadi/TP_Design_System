import React from "react";
import InputPassword from "./inpuForget";
import Button from "../button/button";
import "../form/form.css"

export default function Formulaire() {
  return (
    <div>   
      <div>
        <h1>Réinitialisation</h1>
        <form action="" method="post">
          <InputPassword name="Password" type="password" label={"Nouveau mot de passe"}></InputPassword>
          <InputPassword name="Password" type="password" label={"Confirmation mot de passe"}></InputPassword>
          <div>
            <Button label="Submit"></Button>
          </div>

        </form>
      </div>
    </div>
  );
}
