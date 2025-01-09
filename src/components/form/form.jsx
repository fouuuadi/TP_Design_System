import React from "react";
import Input from "../input/input";
import InputPassword from "../inputPassword/inputPassword";
import Button from "../button/button";
import { Link } from "react-router-dom";
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
            <Link  className="forgetLink" to="/forget">Did you forget your password ?</Link>
          </div>
        </form>
        </div>
      </div>
  );
}
