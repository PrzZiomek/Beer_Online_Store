import { dispatchAddToCart } from '../../../handlersToShopping/handlersToShopping';
import { displayCounterOfBeersInCart } from '../../../AddToCartAndOpenPreviev/displayCounterOfBeersInCart';



export const addToCart = (beer) => {

    dispatchAddToCart(beer);
    displayCounterOfBeersInCart();
}