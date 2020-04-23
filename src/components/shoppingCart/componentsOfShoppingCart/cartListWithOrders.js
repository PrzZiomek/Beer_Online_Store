import { pipeline as compose } from '../../../pipeline';
import { createDiv } from "../../toManipulateDOM/basisHandlersToManipulateDOM";
import { createElementWithShoppingCartContent} from "../../showContentOf/createElementWithCartContent/createElementWithShoppingCartContent/createElementWithShoppingCartContent";



export const cartListWithOrders = (cartContent) => (element) => {
      
    const wrapperDiv = compose(            
            createElementWithShoppingCartContent(cartContent)
      )(createDiv("cart-listWithOrders"))

    element.appendChild(wrapperDiv);
 return element;
}