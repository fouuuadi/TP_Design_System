import Formulaire from "../form/form";
import formImage from "../../assets/formimageR.webp";
import "./login.css"


export default function Login() {
  return (
    <div className="container">
      <div className="imageDiv">
        <img src={formImage} alt="Form image" />
      </div>
      <div className="containerForm">
        <Formulaire />
      </div>
    </div>
  );
}
