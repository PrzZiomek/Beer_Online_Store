import { store } from "../manageState/store";
import { pipeline as compose } from "../pipeline";
import { clearContentOf, createDiv, createImgElem, createSpanElem, createText } from "./toManipulateDOM/basisHandlersToManipulateDOM";
import { createBtnAddToCart, createLinkRedirectToDescription } from "./toManipulateDOM/handlersToManipulateDOM"






  export const OfferOnPage = () => {

    const area = document.querySelector("main");

    clearContentOf(area);

      const beers = store.getState().reducerToResponse.items;
      
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



        
        
      
       