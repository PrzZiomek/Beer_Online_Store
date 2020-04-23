import {  createDivWithinElement, createDiv } from "../../toManipulateDOM/basisHandlersToManipulateDOM";
import { createLabelWithRequired, createTextInput, createEmailInput, createPasswordInput } from "../handlersToCreateForm";
import { pipeline as compose } from "../../../pipeline";




export const formTextFields = (element) => {

  const wrapper = compose(           
            createLabelWithRequired("")("imie")("imię"),
            createTextInput("")("imie"),
            createLabelWithRequired("")("nazwisko")("nazwisko"),
            createTextInput("")("nazwisko"),
            createLabelWithRequired("")("e-mail")("e-mail"),
            createEmailInput("")("e-mail"),
            createLabelWithRequired("")("haslo")("hasło"),
            createPasswordInput("password")("haslo"),
            createDivWithinElement("withInfo")("hasło musi mieć min. 6 znaków, moze składać się z duzych liter, znaków specjalnych i liczb"),
            createLabelWithRequired("")("haslo2")("powtórz hasło"),
            createPasswordInput("")("haslo2")     
    )(createDiv("form-textFields"))
        
    element.appendChild(wrapper);
 return element

} 