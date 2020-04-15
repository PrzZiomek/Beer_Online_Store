import { createWrapperDiv, createDiv, createLinkTo, createText } from "../../toManipulateDOM/basisHandlersToManipulateDOM";
import { createRadioInput } from "../handlersToCreateForm";
import { pipeline as compose } from "../../../pipeline";




export const formAcceptFields = (element) => {

  const wrapper = compose(           
            createRadioInput("")("acceptRegulations"),
            createWrapperDiv("agreementOnRules")(
                createText("")("Akceptuję "),
                createLinkTo("")("regulamin serwisu")("#/regulamin-serwisu"),
                createText("")(" i zapoznałem się z "),
                createLinkTo("")("polityką prywatności")("#/polityka-prywatnosci")
            ),
            createRadioInput("")("acceptSendingNewsletter"),    
            createText("")("Wyrażam zgodę na wysyłanie mi meilowo przez Beers S.A. z siedzibą w Poznaniu wiadomości marketingowych.")      
    )(createDiv("form-acceptFields"))
        
    element.appendChild(wrapper);
 return element
} 