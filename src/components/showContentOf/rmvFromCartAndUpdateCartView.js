import { removeFromCart } from "../handlersToShopping/handlersToShopping";
import { shoppingCart } from "../shoppingCart/shoppingCart";


export const rmvFromCartAndUpdateCartView = (beer) =>  {

        removeFromCart(beer);
        shoppingCart()
    }