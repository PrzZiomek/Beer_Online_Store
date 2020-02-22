import { store } from "../../../manageState/store";
import { pipeline as compose } from '../../../pipeline';
import { createDiv, createSpanElem, createText } from "../../toManipulateDOM/basisHandlersToManipulateDOM";
import {  createButtonToIncreaseOrder, createButtonToDecreaseOrder } from "../../toManipulateDOM/handlersToManipulateDOM";



 export const createPrevievOfCartContent = (element) => {

           const cartContent = store.getState().reducerToCart;
            
            cartContent.map(beer => {

                const wrapperDiv = compose(            
                        createSpanElem("beerTitle")(beer.name),
                        createText("price")(`${beer.ebc} $`),
                        createButtonToIncreaseOrder("")(beer),
                        createSpanElem("amount")(10),
                        createButtonToDecreaseOrder("")(beer),
                        createSpanElem("sum")(`${beer.ebc} $`)
                  )(createDiv("beer-paramsPreviev"))

              element.appendChild(wrapperDiv);
            })

        return element;
  }
