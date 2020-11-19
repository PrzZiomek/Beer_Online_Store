import { createLabelWithRequired, createForm, createCheckboxInput, createLabel, createBtn, createRadioInput, createTextInput, createEmailInput, createPasswordInput } from "../../RegistrationForm/handlersToCreateForm";
import { pipeline as compose } from "../../../pipeline";
import { validateAndLogUser } from "../logUser";




export const createLoginForm = (element) => {

    const form = compose(  
              createLabelWithRequired("")("e-mail")("e-mail"),
              createEmailInput("email")("e-mail"),
              createLabelWithRequired("")("password")("hasło"),
              createPasswordInput("password")("password"),
              createCheckboxInput("check")("check")("check"),
              createLabel("")("check")("zapamiętaj mnie"),
              createBtn("")('zaloguj')             
        )(createForm("login-form"))
            
    element.appendChild(form);

   form.onsubmit = validateAndLogUser(form);

  return element;    
}