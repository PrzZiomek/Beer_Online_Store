import { dispatchAddToCart } from "../../../handlersToShopping/handlersToShopping";
import { ShoppingCart } from "../../../ShoppingCart/ShoppingCart";
import { displayCounterOfBeersInCart } from '../../../AddToCartAndOpenPreviev/displayCounterOfBeersInCart';


export const addToCartAndUpdateCartView = (beer) =>  {

        dispatchAddToCart(beer);
        displayCounterOfBeersInCart()
        ShoppingCart()
    }