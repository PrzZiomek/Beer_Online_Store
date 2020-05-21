import { previevOfActualBeer } from '../AddToCartAndOpenPreviev/previevOfCartContent/actualBeerAndCartPreviev/componentsOfCartPreviev/previevActualBeer';


export const openFavoriteStatement = (beer) => {

    const page = document.querySelector("body");  
    const favorStatementModal = createDiv("favoriteModal");
    //const cartContent = store.getState().reducerToCart;
    //const beer = store.getState().reducerToCurrentBeer;
    
    const cartPreviev = compose(
            createTitle("statement")("Dodałeś do ulubionych!"),
            previevOfActualBeer(beer),
        )(createDiv("actualFavoritePreviev")); 

    favorStatementModal.appendChild(cartPreviev);
  page.appendChild(favorStatementModal);
}