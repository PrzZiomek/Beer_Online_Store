import { pipeline as compose } from '../../../pipeline';
import { createDivWithinElement, createDiv } from "../../toManipulateDOM/basisHandlersToManipulateDOM";



export const cartProgressBar = (element) => {
      
    const wrapperDiv = compose(            
            createDivWithinElement("")("1"),
            createDivWithinElement("")("2"),
            createDivWithinElement("")("3"),
            createDivWithinElement("")("4"),
     )(createDiv("cart-progressBar"))

    element.appendChild(wrapperDiv);
 return element;
}