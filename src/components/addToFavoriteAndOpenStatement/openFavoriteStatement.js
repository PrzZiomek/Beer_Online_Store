import { previevOfActualFavorBeer } from './previevOfActualFavorBeer';
import { pipeline as compose } from '../../pipeline';
import { createDiv, createTitle } from "../toManipulateDOM/basisHandlersToManipulateDOM";




export const openFavoriteStatement = (beer) => {

    const page = document.querySelector("body");  
    const favorStatementModal = createDiv("favoriteModal");
    
    const cartPreviev = compose(
            createTitle("statement")("Dodałeś do ulubionych!"),
            previevOfActualFavorBeer(beer),
        )(createDiv("actualFavoritePreviev")); 

    favorStatementModal.appendChild(cartPreviev);
  page.appendChild(favorStatementModal);
}