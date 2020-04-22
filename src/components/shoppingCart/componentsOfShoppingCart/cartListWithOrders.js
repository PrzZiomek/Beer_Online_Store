import { pipeline as compose } from '../../../pipeline';
import { createDiv } from "../../toManipulateDOM/basisHandlersToManipulateDOM";
import { createElementWithCartContent } from "../../showContentOf/createElementWithCartContent";



export const cartListWithOrders = (cartContent) => (element) => {
      
    const wrapperDiv = compose(            
            createElementWithCartContent("shoppingCart-content")(cartContent)
      )(createDiv("cart-listWithOrders"))

    element.appendChild(wrapperDiv);
 return element;
}