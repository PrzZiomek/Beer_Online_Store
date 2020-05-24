import { actualBeerAndCartPreviev } from "../AddToCartAndOpenPreviev/previevOfCartContent/actualBeerAndCartPreviev/actualBeerAndCartPreviev";
import { dispatchAddToCart, dispatchRemoveFromCart } from "../handlersToShopping/handlersToShopping";
import { removePrevievCartModal } from "../toManipulateDOM/removeModal/removePrevievCartModal";



export const addToCartAndUpdatePreviev = (beer) => {

    removePrevievCartModal();
    dispatchAddToCart(beer);
    actualBeerAndCartPreviev()
}


export const rmvFromCartAndUpdatePreviev = (beer) => {
    
    removePrevievCartModal();
    dispatchRemoveFromCart(beer);
    actualBeerAndCartPreviev()
}