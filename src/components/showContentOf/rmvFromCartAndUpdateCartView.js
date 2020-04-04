import { removeFromCart } from "../handlersToShopping/handlersToShopping";
import { ShoppingCart } from "../shoppingCart/ShoppingCart";


export const rmvFromCartAndUpdateCartView = (beer) =>  {

        removeFromCart(beer);
        ShoppingCart()
    }