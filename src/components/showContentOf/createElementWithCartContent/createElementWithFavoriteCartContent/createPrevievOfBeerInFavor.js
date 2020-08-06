import { pipeline as compose } from '../../../../pipeline';
import { createDiv, createSpanElem, createText, createImgElem } from "../../../toManipulateDOM/basisHandlersToManipulateDOM";
import {  createButtonToIncreaseOrder, createButtonToDecreaseOrder } from "../../buttonsToChangeOrderQuantity";
import { groupBeersByLabels } from "../../../groupBeersByLabels/groupBeersByLabels";
import { createBtnToRemoveGroupOfBeersFromFavorite } from "../../createBtnToRemoveGroupOfBeers/createBtnToRemoveGroupOfBeersFromFavorite"
import sumOfGroup from "../../../AddToCartAndOpenPreviev/previevOfCartContent/sumOfGroup";
import { addToFavoriteAndUpdateCartView } from "./addToFavoriteAndUpdateCartViev";
import { rmvFromFavoriteAndUpdateCartView } from "./rmvFromFavoriteAndUpdateCartView"
import { createBeerNameWithDescription }  from "./createBeerNameWithDescription";
import { createBtnAddToCart } from '../../../toManipulateDOM/handlersToManipulateDOM';



export const createPrevievOfBeerInFavor = (group) => 
            compose(   
                createBtnToRemoveGroupOfBeersFromFavorite("remove")("X")(group[0]),  
                createImgElem("")("piwo")(group[0].image_url),       
                createBeerNameWithDescription(group[0]),
                createText("price")(`${group[0].abv} $`),
                createButtonToIncreaseOrder("")(addToFavoriteAndUpdateCartView)(group[0]),
                createSpanElem("amount")(group.length),
                createButtonToDecreaseOrder("")(rmvFromFavoriteAndUpdateCartView)(group[0]),
                createSpanElem("sum")(`${sumOfGroup(group[0].abv, group.length)} $`),
                createBtnAddToCart("addToCart-btn")("dodaj do koszyka")(group[0])
            )(createDiv("favoriteCart-content"))