import { pipeline as compose } from '../../../pipeline';
import { createDiv, createSpanElem, createText, createTitle } from "../../toManipulateDOM/basisHandlersToManipulateDOM";



export const cartHeader = (cartContent) => (element) => {
      
    const wrapperDiv = compose(            
            createTitle("title")("Twój Koszyk"),
            createSpanElem("amount")(`(${cartContent.length})`),
            createText("")("Zarządzaj swoimi zakupami lub złóz zamówienie")
      )(createDiv("cart-header"))

    element.appendChild(wrapperDiv);
 return element;
}