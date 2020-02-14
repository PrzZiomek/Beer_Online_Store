import { store } from "../manageState/store";
import { pipeline as compose } from './toManipulateDOM/pipeline';
import { clearContentOf, createDiv, createImgElem, createSpanElem, createText, createTitle, createLinkTo, createInternalWrapperDiv } from "./toManipulateDOM/basisHandlersToManipulateDOM";
import { createBtnAddToFavour, createBtnAddToCart } from "./toManipulateDOM/handlersToManipulateDOM"



export const showDescription = () => {

  const area = document.querySelector("main");

  clearContentOf(area);

  const beer = store.getState().reducerToCurrentValues.beer;
      
      const mainWrapper = compose(
              createInternalWrapperDiv("description-part")(compose(
                  createLinkTo("")("powrót do głównej")("#/"),
                  createTitle("")(beer.name),
                  createImgElem("")(beer.image_url),
                  createSpanElem("description")(beer.description),
                  createBtnAddToFavour("favour-btn")("dodaj do ulubionych")(beer),
                  createBtnAddToCart("cart-btn")("dodaj do koszyka")(beer), 
               )),
              createInternalWrapperDiv("description-params")(compose(                    
                  createText("")("cena"),
                  createSpanElem("price")(beer.srm),
                  createText("")("tagi"),
                  createSpanElem("tagline")(beer.tagline),
                  createText("")("wyprodukowano"),   
                  createSpanElem("date")(beer.first_brewed),
                  createText("")("producent"),
                  createSpanElem("produced")(beer.contributed_by),            
                ))
          )(createDiv("beer-description"));

 area.appendChild(mainWrapper);

};


