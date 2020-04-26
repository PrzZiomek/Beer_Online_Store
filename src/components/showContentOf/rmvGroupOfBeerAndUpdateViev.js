import { ShoppingCart } from '../ShoppingCart/ShoppingCart';
import { dispatchRmvWholeTypeFromCart } from '../handlersToShopping/handlersToShopping';
import { displayCounterOfBeersInCart } from '../AddToCartAndOpenPreviev/displayCounterOfBeersInCart';



export const rmvGroupOfBeerAndUpdateViev = (beer) => {
 
    dispatchRmvWholeTypeFromCart(beer);
    displayCounterOfBeersInCart();
    ShoppingCart();
}