import { pipeline as compose } from '../../../../pipeline';
import { createDiv, createSpanElem, createText, createImgElem } from "../../../toManipulateDOM/basisHandlersToManipulateDOM";
import {  createButtonToIncreaseOrder, createButtonToDecreaseOrder } from "../../buttonsToChangeOrderQuantity";
import { groupBeersByLabels } from "../../../groupBeersByLabels/groupBeersByLabels";
import { createBtnToRemoveGroupOfBeersFromCart } from '../../createBtnToRemoveGroupOfBeers/createBtnToRemoveGroupOfBeersFromCart';
import { rmvFromCartAndUpdateCartView } from "./rmvFromCartAndUpdateCartView";
import { addToCartAndUpdateCartView } from "./addToCartAndUpdateCartViev";
import { createLinkRedirectToDescription } from '../../../OfferOnPage/createLinkRedirectToDescription';
import sumOfGroup from "../../../AddToCartAndOpenPreviev/previevOfCartContent/sumOfGroup";



 export const createElementWithShoppingCartContent = (cartContent) => (element) => {
       
       groupBeersByLabels(cartContent).map(group => {
            const beer = group[0];

                const wrapperDiv = compose(   
                        createBtnToRemoveGroupOfBeersFromCart("remove")("X")(beer),  
                        createImgElem("")(beer.image_url),       
                        createLinkRedirectToDescription("beerTitle")(beer.name)(beer),
                        createText("price")(`${beer.abv} $`),
                        createButtonToIncreaseOrder("")(addToCartAndUpdateCartView)(beer),
                        createSpanElem("amount")(group.length),
                        createButtonToDecreaseOrder("")(rmvFromCartAndUpdateCartView)(beer),
                        createSpanElem("sum")(`${sumOfGroup(beer.abv, group.length)} $`)
                  )(createDiv("shoppingCart-content"))

              element.appendChild(wrapperDiv);
            })

        return element;
  }