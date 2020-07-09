import { createLabelWithRequired, createForm, createCheckboxInput, createLabel, createBtn, createRadioInput, createTextInput, createEmailInput, createPasswordInput } from "../../RegistrationForm/handlersToCreateForm";
import { pipeline as compose } from "../../../pipeline";




export const createLoginForm = (element) => {

    const wrapper = compose(  
              createLabelWithRequired("")("e-mail")("e-mail"),
              createEmailInput("")("e-mail"),
              createLabelWithRequired("")("password")("hasło"),
              createPasswordInput("")("password"),
              createCheckboxInput("check")("check")("check"),
              createLabel("")("check")("zapamiętaj mnie"),
              createBtn("")('zaloguj')             
        )(createForm("login-form"))
            
 //   wrapper.onsubmit = registrationFormValidator();

    element.appendChild(wrapper);
  return element;    
}