import { clearContentOf, createWrapperDiv, createTitle, createLinkTo, createDivWithinElement, createText } from "../toManipulateDOM/basisHandlersToManipulateDOM";
import { createForm, createLabelWithRequired, createTextInput, createEmailInput, createRadioInput, createBtnSendsRegisterFormToValidation, createPasswordInput } from "./handlersToCreateForm";
import { pipeline as compose } from "../../pipeline";
import { infoAboutPassword }  from "./infoAboutPassword.js"



export const RegistrationForm = () => {

    const area = document.querySelector("main");

    clearContentOf(area);
      
        const wrapper = compose(     
                createWrapperDiv("form-header")(
                    createTitle("")("rejestracja"),
                    createLinkTo("")("cofnij")("#/koszyk")
                  ),
                createWrapperDiv("form-textFields")(
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
                  ), 
                createWrapperDiv("form-acceptFields")(
                    createRadioInput("")("acceptRegulations"),
                    createWrapperDiv("agreementOnRules")(
                        createText("")("Akceptuję "),
                        createLinkTo("")("regulamin serwisu")("#/regulamin-serwisu"),
                        createText("")(" i zapoznałem się z "),
                        createLinkTo("")("polityką prywatności")("#/polityka-prywatnosci")
                    ),
                    createRadioInput("")("acceptSendingNewsletter"),    
                    createText("")("Wyrażam zgodę na wysyłanie mi meilowo przez Beers S.A. z siedzibą w Poznaniu wiadomości marketingowych.")      
                 ),
                 createBtnSendsRegisterFormToValidation("")('dokończ rejestrację')
                
          )(createForm("registration-form"))
                
       area.appendChild(wrapper);

       infoAboutPassword()
}