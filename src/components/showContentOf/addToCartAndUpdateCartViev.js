import { addToCart } from "../handlersToShopping/handlersToShopping";
import { ShoppingCart } from "../shoppingCart/ShoppingCart";


export const addToCartAndUpdateCartView = (beer) =>  {

        addToCart(beer);
        ShoppingCart()
    }