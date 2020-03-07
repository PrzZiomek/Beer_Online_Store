import { pipeline as compose } from '../../pipeline';
import { createDiv, createSpanElem, createText } from "../toManipulateDOM/basisHandlersToManipulateDOM";
import {  createButtonToIncreaseOrder, createButtonToDecreaseOrder } from "./buttonsToChangeOrderQuantity";
import { groupBeersByLabels } from "./groupBeersByLabels/groupBeersByLabels";
import sumOfGroup from "./sumOfGroup";



 export const createPrevievOfCartContent = (cartContent) => (element) => {
      
       groupBeersByLabels(cartContent).map(group => {

                const wrapperDiv = compose(            
                        createSpanElem("beerTitle")(group[0].name),
                        createText("price")(`${group[0].abv} $`),
                        createButtonToIncreaseOrder("")(group[0]),
                        createSpanElem("amount")(group.length),
                        createButtonToDecreaseOrder("")(group[0]),
                        createSpanElem("sum")(`${sumOfGroup(group[0].abv)(group.length)} $`)
                  )(createDiv("beer-paramsPreviev"))

              element.appendChild(wrapperDiv);
            })

        return element;
  }
