import { pipeline as compose } from "../../pipeline";
import { createDiv, createImgElem, createSpanElem, createText } from "../toManipulateDOM/basisHandlersToManipulateDOM";
import { createBtnAddToCart } from "../toManipulateDOM/handlersToManipulateDOM";
import {  createLinkRedirectToDescription } from "./createLinkRedirectToDescription";



export const createOfferOnPage = (beers) => {

    const area = document.querySelector("main");
      
      beers.map(beer => {

            const wrapperDiv = compose(            
                    createSpanElem("beerTitle")(beer.name),
                    createImgElem("")(beer.image_url),
                    createText("price")(`${beer.abv} $`),
                    createBtnAddToCart("cartBtn")("koszyk")(beer),
                    createLinkRedirectToDescription("")(beer),
            )(createDiv("beer-label"))
                
       area.appendChild(wrapperDiv);
   });

};