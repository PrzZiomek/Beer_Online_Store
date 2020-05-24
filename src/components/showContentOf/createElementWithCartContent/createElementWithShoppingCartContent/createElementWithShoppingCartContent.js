import { groupBeersByLabels } from "../../../groupBeersByLabels/groupBeersByLabels";
import { createPrevievOfBeerInCart } from './createPrevievOfBeerInCart';



 export const createElementWithShoppingCartContent = (cartContent) => (element) => {
       
       groupBeersByLabels(cartContent).map(group => {

          const wrapperDiv = createPrevievOfBeerInCart(group)
             element.appendChild(wrapperDiv);
        })

    return element;
  }