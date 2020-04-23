import { pipeline as compose } from '../../pipeline';
import { createDiv, createSpanElem, createText, createTitle } from "../toManipulateDOM/basisHandlersToManipulateDOM";
import { createElementWithFavoriteCartContent } from '../showContentOf/createElementWithCartContent/createElementWithFavoriteCartContent/createElementWithFavoriteCartContent';
import { favoriteCartColumnTitles } from '../showContentOf/cartColumnTitles/favoriteCartColumnTitles';



export const createFavoriteCart = (cartContent) => {

    const area = document.querySelector("main");
      
    const mainWrapper = compose(            
            createTitle("title")("Twoja lista Życzeń"),
            createSpanElem("amount")(`(${cartContent.length})`),
            favoriteCartColumnTitles,
            createElementWithFavoriteCartContent(cartContent),
      )(createDiv("favorite-cart"))

 area.appendChild(mainWrapper);
}