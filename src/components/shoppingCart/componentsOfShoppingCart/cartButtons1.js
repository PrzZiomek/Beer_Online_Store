import { pipeline as compose } from '../../../pipeline';
import { createDiv, createText, createLinkTo } from "../../toManipulateDOM/basisHandlersToManipulateDOM";



export const cartButtons1 = (element) => {
      
    const wrapperDiv = compose(            
            createLinkTo("")("zaloguj się")("#/logowanie"),
            createText("")("lub"),
            createLinkTo("")("zarejestruj się")("#/rejestracja"),
      )(createDiv("cart-buttons1"))

    element.appendChild(wrapperDiv);
 return element;
}
