import { store } from "../../manageState/store";
import { pipeline as compose } from "../../pipeline";
import { clearContentOf, createDiv, createImgElem, createSpanElem, createText } from "../toManipulateDOM/basisHandlersToManipulateDOM";
import { createBtnAddToCart } from "../toManipulateDOM/handlersToManipulateDOM";
import {  createLinkRedirectToDescription } from "./createLinkRedirectToDescription";



export const OfferOnPage = () => {

    const area = document.querySelector("main");
    const beers = store.getState().reducerToResponse.items;

    clearContentOf(area);
      
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



        
        
      
       