import { dispatchAddToCart } from "../handlersToShopping/handlersToShopping";
import { ShoppingCart } from "../ShoppingCart/ShoppingCart";


export const addToCartAndUpdateCartView = (beer) =>  {

        dispatchAddToCart(beer);
        ShoppingCart()
    }