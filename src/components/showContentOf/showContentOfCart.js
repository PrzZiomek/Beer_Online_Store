import { pipeline as compose } from '../../pipeline';
import { createDiv, createSpanElem, createText, createImgElem } from "../toManipulateDOM/basisHandlersToManipulateDOM";
import {  createButtonToIncreaseOrder, createButtonToDecreaseOrder } from "./buttonsToChangeOrderQuantity";
import { groupBeersByLabels } from "../groupBeersByLabels/groupBeersByLabels";
import { addToCartAndUpdatePreviev, rmvFromCartAndUpdatePreviev } from "../handlersToShopping/handlersToShopping";
import { createBtnToRemoveGroupOfBeers } from "../toManipulateDOM/handlersToManipulateDOM"
import sumOfGroup from "../addToCartAndOpenPreviev/previevOfCartContent/sumOfGroup";



 export const createElementWithCartContent = (cartContent) => (element) => {
      
       groupBeersByLabels(cartContent).map(group => {

                const wrapperDiv = compose(   
                        createBtnToRemoveGroupOfBeers("remove")("X")(),  
                        createImgElem("")(group[0].image_url),       
                        createSpanElem("beerTitle")(group[0].name),
                        createText("price")(`${group[0].abv} $`),
                        createButtonToIncreaseOrder("")(addToCartAndUpdatePreviev)(group[0]),
                        createSpanElem("amount")(group.length),
                        createButtonToDecreaseOrder("")(rmvFromCartAndUpdatePreviev)(group[0]),
                        createSpanElem("sum")(`${sumOfGroup(group[0].abv, group.length)} $`)
                  )(createDiv("cart-content"))

              element.appendChild(wrapperDiv);
            })

        return element;
  }
