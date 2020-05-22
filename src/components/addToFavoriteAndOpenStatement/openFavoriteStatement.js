import { previevOfActualFavorBeer } from './previevOfActualFavorBeer';
import { pipeline as compose } from '../../pipeline';
//import { store } from "../../../../manageState/store";
import { createDiv, createTitle } from "../toManipulateDOM/basisHandlersToManipulateDOM";




export const openFavoriteStatement = (beer) => {

    const page = document.querySelector("body");  
    const favorStatementModal = createDiv("favoriteModal");
    //const cartContent = store.getState().reducerToCart;
    //const beer = store.getState().reducerToCurrentBeer;
    
    const cartPreviev = compose(
            createTitle("statement")("Dodałeś do ulubionych!"),
            previevOfActualFavorBeer(beer),
        )(createDiv("actualFavoritePreviev")); 

    favorStatementModal.appendChild(cartPreviev);
  page.appendChild(favorStatementModal);
}