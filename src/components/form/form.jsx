import React from "react";
import Input from "../input/input";
import InputPassword from "../inputPassword/inputPassword";
import Button from "../button/button";
import "./form.css"

export default function Formulaire() {
  return (
      <div className="form">
        <div>
        <h1>Login</h1>
        <form action="" method="post">
          <Input
            name="Email"
            type="Email"
            placeholder="john.doe@gmail.com"
          ></Input>
          <InputPassword name="Password" type="password"></InputPassword>
          <div>
            <Button label="Login"></Button>
          </div>
          <div className="linkForgetPass">
            <a className="forgetLink" href="/forget">Did you forget your password ?</a>
          </div>
        </form>
        </div>
      </div>
  );
}
