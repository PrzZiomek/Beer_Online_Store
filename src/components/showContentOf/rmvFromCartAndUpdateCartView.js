import { removeFromCart } from "../handlersToShopping/handlersToShopping";
import { ShoppingCart } from "../ShoppingCart/ShoppingCart";


export const rmvFromCartAndUpdateCartView = (beer) =>  {

        removeFromCart(beer);
        ShoppingCart()
    }