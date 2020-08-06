import { groupBeersByLabels } from "../../../groupBeersByLabels/groupBeersByLabels";
import { createPrevievOfBeerInFavor } from './createPrevievOfBeerInFavor';


 export const createElementWithFavoriteCartContent = (cartContent) => (element) => {
       
       groupBeersByLabels(cartContent).map(group => {  
           
            const wrapperDiv = createPrevievOfBeerInFavor(group)
              element.appendChild(wrapperDiv);
        })

    return element;
  }