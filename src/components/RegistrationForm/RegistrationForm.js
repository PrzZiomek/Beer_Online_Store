import { clearContentOf, createWrapperDiv, createTitle, createLinkTo, createImgElem, createText } from "../toManipulateDOM/basisHandlersToManipulateDOM";
import { createForm, createLabelWithRequired, createTextInput, createRadioInput, createBtnSendsRegisterFormToValidation, createPasswordInput } from "../toManipulateDOM/handlersToCreateForm";
import { pipeline as compose } from "../../pipeline";



export const RegistrationForm = () => {

    const area = document.querySelector("main");

    clearContentOf(area);
      
        const wrapperDiv = compose(     
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
                    createTextInput("")("e-mail"),
                    createLabelWithRequired("")("haslo")("hasło"),
                    createPasswordInput("")("haslo"),
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
                
       area.appendChild(wrapperDiv);
}