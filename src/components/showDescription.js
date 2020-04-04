import { store } from "../manageState/store";
import { pipeline as compose } from '../pipeline';
import { clearContentOf, createDiv, createImgElem, createSpanElem, createText, createTitle, createLinkTo, createWrapperDiv } from "./toManipulateDOM/basisHandlersToManipulateDOM";
import { createBtnAddToFavour, createBtnAddToCart } from "./toManipulateDOM/handlersToManipulateDOM"




export const ShowDescription = () => {

  const area = document.querySelector("main");

  clearContentOf(area);

  const beer = store.getState().reducerToCurrentBeer;
      
      const mainWrapper = compose(
              createWrapperDiv("description-part")(
                  createLinkTo("")("powrót do głównej")("#/"),
                  createTitle("")(beer.name),
                  createImgElem("")(beer.image_url),
                  createSpanElem("description")(beer.description),
                  createBtnAddToFavour("favourBtn")("dodaj do ulubionych")(beer),
                  createBtnAddToCart("cartBtn")("dodaj do koszyka")(beer), 
               ),
              createWrapperDiv("description-params")(                   
                  createText("")("cena"),
                  createSpanElem("price")(beer.abv),
                  createText("")("tagi"),
                  createSpanElem("tagline")(beer.tagline),
                  createText("")("wyprodukowano"),   
                  createSpanElem("date")(beer.first_brewed),
                  createText("")("producent"),
                  createSpanElem("produced")(beer.contributed_by),            
                )
          )(createDiv("beer-description"));

 area.appendChild(mainWrapper);

};


