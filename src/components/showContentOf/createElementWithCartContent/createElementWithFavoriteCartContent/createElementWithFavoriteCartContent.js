import { pipeline as compose } from '../../../../pipeline';
import { createDiv, createSpanElem, createText, createImgElem } from "../../../toManipulateDOM/basisHandlersToManipulateDOM";
import {  createButtonToIncreaseOrder, createButtonToDecreaseOrder } from "../../buttonsToChangeOrderQuantity";
import { groupBeersByLabels } from "../../../groupBeersByLabels/groupBeersByLabels";
import { createBtnToRemoveGroupOfBeers } from "../../../toManipulateDOM/handlersToManipulateDOM"
import sumOfGroup from "../../../AddToCartAndOpenPreviev/previevOfCartContent/sumOfGroup";
import { addToFavoriteAndUpdateCartView } from "../createElementWithFavoriteCartContent/addToFavoriteAndUpdateCartViev";
import { rmvFromFavoriteAndUpdateCartView } from "../createElementWithFavoriteCartContent/rmvFromFavoriteAndUpdateCartView"
import { createBeerNameWithDescription }  from "./createBeerNameWithDescription";



 export const createElementWithFavoriteCartContent = (cartContent) => (element) => {
       
       groupBeersByLabels(cartContent).map(group => {  

            const beer = group[0];
            
                const wrapperDiv = compose(   
                        createBtnToRemoveGroupOfBeers("remove")("X")(beer),  
                        createImgElem("")(beer.image_url),       
                        createBeerNameWithDescription(beer),
                        createText("price")(`${beer.abv} $`),
                        createButtonToIncreaseOrder("")(addToFavoriteAndUpdateCartView)(beer),
                        createSpanElem("amount")(group.length),
                        createButtonToDecreaseOrder("")(rmvFromFavoriteAndUpdateCartView)(beer),
                        createSpanElem("sum")(`${sumOfGroup(beer.abv, group.length)} $`)
                  )(createDiv("favoriteCart-content"))

              element.appendChild(wrapperDiv);
            })

        return element;
  }