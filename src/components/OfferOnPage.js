import { store } from "../manageState/store";
import { pipeline as compose } from "../pipeline";
import { clearContentOf, createDiv, createImgElem, createSpanElem, createText } from "./toManipulateDOM/basisHandlersToManipulateDOM";
import { createBtnAddToCart, createLinkRedirectToDescription } from "./toManipulateDOM/handlersToManipulateDOM"



  const errorStatement = createDiv("errorStatement");


export const OfferOnPage = () => {

    const area = document.querySelector("main");
    const beers = store.getState().reducerToResponse.items;
    const errorRes = store.getState().reducerToResponse.error;

    clearContentOf(area);

    if(errorRes) area.appendChild(errorStatement);
      
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



        
        
      
       