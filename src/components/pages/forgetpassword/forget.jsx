import formImage from "../../../assets/formimageR.webp";
import InputPassword from "../../inputPassword/inputPassword";
import Button from "../../button/button"
import "../../form/form.css"
import "../login/login.css"


export default function Forget() {
  return (
    <div className="container">
      <div className="imageDiv">
        <img src={formImage} alt="Form image" />
      </div>
      <div className="containerForm">
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
      </div>
    </div>
  );
}
