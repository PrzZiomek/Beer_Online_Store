import { pipeline as compose } from '../../../../pipeline';
import { createDiv, createSpanElem, createText, createImgElem } from "../../../toManipulateDOM/basisHandlersToManipulateDOM";
import {  createButtonToIncreaseOrder, createButtonToDecreaseOrder } from "../../buttonsToChangeOrderQuantity";
import { createBtnToRemoveGroupOfBeersFromCart } from '../../createBtnToRemoveGroupOfBeers/createBtnToRemoveGroupOfBeersFromCart';
import { rmvFromCartAndUpdateCartView } from "./rmvFromCartAndUpdateCartView";
import { addToCartAndUpdateCartView } from "./addToCartAndUpdateCartViev";
import { createLinkRedirectToDescription } from '../../../OfferOnPage/createLinkRedirectToDescription';
import sumOfGroup from "../../../AddToCartAndOpenPreviev/previevOfCartContent/sumOfGroup";



export const createPrevievOfBeerInCart = (group) => 
                compose(   
                    createBtnToRemoveGroupOfBeersFromCart("remove")("X")(group[0]),  
                    createImgElem("")("piwo")(group[0].image_url),       
                    createLinkRedirectToDescription("beerTitle")(group[0].name)(group[0]),
                    createText("price")(`${group[0].abv} $`),
                    createButtonToIncreaseOrder("")(addToCartAndUpdateCartView)(group[0]),
                    createSpanElem("amount")(group.length),
                    createButtonToDecreaseOrder("")(rmvFromCartAndUpdateCartView)(group[0]),
                    createSpanElem("sum")(`${sumOfGroup(group[0].abv, group.length)} $`)
                )(createDiv("shoppingCart-content"))