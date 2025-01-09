import React, { useState } from "react";
import Input from "../input/input";
import InputPassword from "../inputPassword/inputPassword";
import Button from "../button/button";
import { Link, useNavigate } from "react-router-dom";
import "./form.css";

export default function Formulaire() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "admin@admin.fr" && password === "admin") {
      navigate("/profil");
    } else {
      alert("Invalid email or password!");
      console.log(email, password)
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
      ></Input>
      <InputPassword name="Password" type="password" onChange={(e) => setPassword(e.target.value)}></InputPassword>
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
