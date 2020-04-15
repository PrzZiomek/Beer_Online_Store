import { createTitle, createLinkTo, createDiv } from "../../toManipulateDOM/basisHandlersToManipulateDOM";
import { pipeline as compose } from "../../../pipeline";




export const formHeader = (element) => {

    const wrapper = compose(           
            createTitle("")("rejestracja"),
            createLinkTo("")("cofnij")("#/koszyk")     
        )(createDiv("form-header"))
        
    element.appendChild(wrapper);
 return element
}