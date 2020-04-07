import { pipeline as compose } from '../../../pipeline';
import { createText, createDiv, createSpanElem } from "../../toManipulateDOM/basisHandlersToManipulateDOM";
import valueOfEntireCart  from "../../AddToCartAndOpenPreviev/valueOfEntireCart";



export const cartRecapCosts = (cartContent) => (element) => {
      
    const wrapperDiv = compose(            
            createText("")("razem"),
            createSpanElem("sum")(`${valueOfEntireCart(cartContent)} $`),  
      )(createDiv("cart-recapCosts"))

    element.appendChild(wrapperDiv);
 return element;
}
