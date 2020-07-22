import {  createDivWithinElement, createDiv, createText } from "../../toManipulateDOM/basisHandlersToManipulateDOM";
import { createLabelWithRequired, createTextInput, createEmailInput, createPasswordInput } from "../handlersToCreateForm";
import { pipeline as compose } from "../../../pipeline";




export const formTextFields = (element) => {

  const wrapper = compose(           
            createLabelWithRequired("")("imie")("imię"),
            createTextInput("name")("imie"),
            createLabelWithRequired("")("nazwisko")("nazwisko"),
            createTextInput("surname")("nazwisko"),
            createLabelWithRequired("")("e-mail")("e-mail"),
            createEmailInput("email")("e-mail"),
            createLabelWithRequired("")("haslo")("hasło"),
            createPasswordInput("password")("haslo"),
            createDivWithinElement("withInfo")("hasło musi mieć min. 6 znaków, moze składać się z duzych liter, znaków specjalnych i liczb"),
            createLabelWithRequired("")("haslo2")("powtórz hasło"),
            createPasswordInput("passwordRepeated")("haslo2"), 
            createText("infoAboutAsterix")("* - pola obowiązkowe")
    )(createDiv("form-textFields"))
        
    element.appendChild(wrapper);
 return element

} 