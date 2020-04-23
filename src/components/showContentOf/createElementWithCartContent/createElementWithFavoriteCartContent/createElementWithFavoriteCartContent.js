import { pipeline as compose } from '../../../../pipeline';
import { createDiv, createSpanElem, createText, createImgElem } from "../../../toManipulateDOM/basisHandlersToManipulateDOM";
import {  createButtonToIncreaseOrder, createButtonToDecreaseOrder } from "../../buttonsToChangeOrderQuantity";
import { groupBeersByLabels } from "../../../groupBeersByLabels/groupBeersByLabels";
import { createBtnToRemoveGroupOfBeers } from "../../../toManipulateDOM/handlersToManipulateDOM"
import sumOfGroup from "../../../AddToCartAndOpenPreviev/previevOfCartContent/sumOfGroup";
import { addToFavoriteAndUpdateCartView } from "../createElementWithFavoriteCartContent/addToFavoriteAndUpdateCartViev";
import { rmvFromFavoriteAndUpdateCartView } from "../createElementWithFavoriteCartContent/rmvFromFavoriteAndUpdateCartView"




 export const createElementWithFavoriteCartContent = (cartContent) => (element) => {
       
       groupBeersByLabels(cartContent).map(group => {

                const wrapperDiv = compose(   
                        createBtnToRemoveGroupOfBeers("remove")("X")(group[0]),  
                        createImgElem("")(group[0].image_url),       
                        //createSpanElem("beerTitle")(group[0].name),
                        createText("price")(`${group[0].abv} $`),
                        createButtonToIncreaseOrder("")(addToFavoriteAndUpdateCartView)(group[0]),
                        createSpanElem("amount")(group.length),
                        createButtonToDecreaseOrder("")(rmvFromFavoriteAndUpdateCartView)(group[0]),
                        createSpanElem("sum")(`${sumOfGroup(group[0].abv, group.length)} $`)
                  )(createDiv("favoriteCart-content"))

              element.appendChild(wrapperDiv);
            })

        return element;
  }