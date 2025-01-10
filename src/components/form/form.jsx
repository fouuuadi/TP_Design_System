import React, { useState } from "react";
import Input from "../input/input";
import InputPassword from "../inputPassword/inputPassword";
import Button from "../button/button";
import { Link, useNavigate } from "react-router-dom";
import "./form.css";

export default function Formulaire() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hasErrorEmail, setHasErrorEmail] = useState(false);
  const [hasErrorPass, setHasErrorPass] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "admin@admin.fr" && password === "admin") {
      navigate("/profil");
    } else {
      if(email !== "admin@admin.fr"){
        setHasErrorEmail(true);
      }else{
        setHasErrorEmail(false);
      }
      if(password !== "admin"){
        setHasErrorPass(true);
      }else{
        setHasErrorPass(false);
      }
    }
  };

  return (
    <div className="form">
    <div>
    <h1>Login</h1>
    <form action="" onSubmit={handleSubmit} method="post">
      <Input
        name="Email"
        type="Email"
        placeholder="john.doe@gmail.com"
        onChange={(e) => setEmail(e.target.value)}
        hasError={hasErrorEmail}
      ></Input>
      <InputPassword 
      name="Password" 
      type="password" 
      onChange={(e) => setPassword(e.target.value)}
      label="Mot de passe"
      hasError={hasErrorPass}
      ></InputPassword>
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
