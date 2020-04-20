import { pipeline as compose } from '../../pipeline';
import { createDiv, createSpanElem, createText, createTitle } from "../toManipulateDOM/basisHandlersToManipulateDOM";



export const createFavoriteCart = (favoriteContent) => {

    const area = document.querySelector("main");
      
    const mainWrapper = compose(            
            createTitle("title")("Twoja lista Życzeń"),
            createSpanElem("amount")(`(${favoriteContent.length})`),
            createText("")("Zarządzaj swoimi zakupami lub złóz zamówienie")
      )(createDiv("cart-header"))

 area.appendChild(mainWrapper);
}