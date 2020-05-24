import { createLabelWithRequired, createForm, createCheckboxInput, createBtn, createRadioInput, createTextInput, createEmailInput, createPasswordInput } from "../RegistrationForm/handlersToCreateForm";
import { createWrapperDiv, createDiv, createLinkTo, createText, createTitle } from "../toManipulateDOM/basisHandlersToManipulateDOM";
import { pipeline as compose } from "../../pipeline";


export const createLoginForm = (element) => {

    const wrapper = compose(     
            createLabelWithRequired("")("e-mail")("e-mail"),
            createEmailInput("")("e-mail"),
            createLabelWithRequired("")("password")("hasło"),
            createPasswordInput("")("password"),
            createCheckboxInput("check")("check"),
            createText("")("zapamiętaj mnie"),
            createBtn("")('zaloguj')             
        )(createForm("login-form"))
            
   // wrapper.onsubmit = registrationFormValidator();

    element.appendChild(wrapper);
  return element;    
}