import { addToCart } from "../handlersToShopping/handlersToShopping";
import { ShoppingCart } from "../ShoppingCart/ShoppingCart";


export const addToCartAndUpdateCartView = (beer) =>  {

        addToCart(beer);
        ShoppingCart()
    }