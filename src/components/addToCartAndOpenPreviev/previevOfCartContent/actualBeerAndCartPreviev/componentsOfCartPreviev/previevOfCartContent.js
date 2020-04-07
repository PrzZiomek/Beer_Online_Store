import { createDiv, createSpanElem, createText, createTitle, createWrapperDiv } from "../../../../toManipulateDOM/basisHandlersToManipulateDOM";
import { beerParamsPreviev  } from "./beerParamsPreviev";
import { pipeline as compose } from '../../../../../pipeline';
import valueOfEntireCart from "../../../valueOfEntireCart";


export const createPrevievOfCartContent = (cartContent) => (element) => {
      
        const wrapperDiv = compose(            
                createTitle("")("Twój koszyk"),
                createWrapperDiv("cartContent-details")( 
                    createText("")("produkt"),
                    createText("")("cena"),
                    createText("")("ilość"),
                    createText("")("wartość"),
                ), 
                createWrapperDiv("cartContent-listWithOrders")( 
                    beerParamsPreviev(cartContent)
                ),  
                createWrapperDiv("cartContent-recapCosts")( 
                    createText("")("razem"),
                    createSpanElem("sum")(`${valueOfEntireCart(cartContent)} $`),  
                )                                                             
            )(createDiv("previev-cartContent"))

    element.appendChild(wrapperDiv);
 return element;
}
