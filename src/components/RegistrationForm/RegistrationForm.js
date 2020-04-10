import { createDiv, clearContentOf, createWrapperDiv, createTitle, createLinkTo, createImgElem, createText } from "../toManipulateDOM/basisHandlersToManipulateDOM";
import { createBtnAddToCart } from "../toManipulateDOM/handlersToManipulateDOM";
import { createForm, createLabelWithRequired, createTextInput, createRadioInput } from "../toManipulateDOM/handlersToCreateForm";



export const RegistrationForm = () => {

    const area = document.querySelector("main");

    clearContentOf(area);
      
        const wrapperDiv = compose(     
                createWrapperDiv("form-header")(
                    createTitle("")("rejestracja"),
                    createImgElem("")("../../../graphics/szklanki.jpg")
                  ),
                createWrapperDiv("form-textFields")(
                    createTextInput("")("imie"),
                    createLabelWithRequired("")("imie")("imię"),
                    createTextInput("")("nazwisko"),
                    createLabelWithRequired("")("nazwisko")("nazwisko"),
                  ), 
                createWrapperDiv("form-acceptFields")(
                    createRadioInput("")("acceptRegulations"),
                    createWrapperDiv("agreementOnRules")(
                        createText("")("akceptuję"),
                        createLinkTo("")("regulamin serwisu")("#/regulamin-serwisu"),
                        createText("")(" i zapoznałem się z "),
                        createLinkTo("")("Polityką Prywatności")("#/polityka-prywatnosci")
                    ),
                    createRadioInput("")("acceptSendingNewsletter"),    
                    createText("")("Wyrażam zgodę na wysyłanie mi meilowo przez Beers S.A. z siedzibą w Poznaniu wiadomości marketingowych.")      
                 ),
                
          )(createForm("registration-form"))
                
       area.appendChild(wrapperDiv);
}