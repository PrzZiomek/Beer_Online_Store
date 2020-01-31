import { store } from "../manageState/store";
import { pipeline as compose } from "./toManipulateDOM/pipeline";
import { clearContentOf, createDiv, createImgElem, createLinkRedirectToDescription, createBtnAddToCart, createSpanElem, createText } from "./toManipulateDOM/handlersToManipulateDOM";
 

export const area = document.querySelector("main");




  export const OfferOnPage = () => {

    clearContentOf(area);

      const beers = store.getState().reducerToOffer;

      beers.map(beer => {

        const wrapperDiv = compose(            
                createSpanElem("beerTitle")(beer.name),
                createImgElem("")(beer.image_url),
                createText("price")(`${beer.srm} $`),
                createBtnAddToCart("cartBtn")("koszyk")(beer),
                createLinkRedirectToDescription(beer),
          )(createDiv("beer-label"))
                
       area.appendChild(wrapperDiv);
      });
  };



        
        
      
       