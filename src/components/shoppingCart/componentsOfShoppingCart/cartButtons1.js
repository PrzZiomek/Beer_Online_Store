import { pipeline as compose } from '../../../pipeline';
import { createDiv, createText, createLinkTo } from "../../toManipulateDOM/basisHandlersToManipulateDOM";
import { createBtnToOpenLogin } from '../createBtnToOpenLogin';


export const cartButtons1 = (element) => {
      
    const wrapperDiv = compose(            
            createBtnToOpenLogin("")("zaloguj się"),
            createText("")("lub"),
            createLinkTo("")("zarejestruj się")("#/rejestracja"),
      )(createDiv("cart-buttons1"))

    element.appendChild(wrapperDiv);
 return element;
}
