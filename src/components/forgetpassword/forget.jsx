import Formulaire from "./formFprget";
import formImage from "../../assets/formimageR.webp";
import "../login/login.css"


export default function Forget() {
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
