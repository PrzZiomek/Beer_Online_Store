import { pipeline as compose } from '../../../../pipeline';
import { createDiv, createSpanElem, createText, createImgElem } from "../../../toManipulateDOM/basisHandlersToManipulateDOM";
import {  createButtonToIncreaseOrder, createButtonToDecreaseOrder } from "../../buttonsToChangeOrderQuantity";



export const createBeerNameWithDescription = (beer) => (element) => {
      
    const wrapperDiv = compose(            
             createSpanElem("beerTitle")(beer.name),
             createText("description")(beer.description)
      )(createDiv("nameWithDescr"))

    element.appendChild(wrapperDiv);
 return element;
}
