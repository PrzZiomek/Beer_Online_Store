import { ShoppingCart } from '../ShoppingCart/ShoppingCart';
import { dispatchRmvWholeTypeFromCart } from '../handlersToShopping/handlersToShopping';



export const rmvGroupOfBeerAndUpdateViev = (beer) => {
 
    dispatchRmvWholeTypeFromCart(beer);
    ShoppingCart();
}