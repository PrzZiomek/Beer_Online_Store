import { addToCart } from "../handlersToShopping/handlersToShopping";
import { shoppingCart } from "../shoppingCart/shoppingCart";


export const addToCartAndUpdateCartView = (beer) =>  {

        addToCart(beer);
        shoppingCart()
    }