import { dispatchRemoveFromCart} from "../../../handlersToShopping/handlersToShopping";
import { ShoppingCart } from "../../../ShoppingCart/ShoppingCart";
import { displayCounterOfBeersInCart } from '../../../AddToCartAndOpenPreviev/displayCounterOfBeersInCart';


export const rmvFromCartAndUpdateCartView = (beer) =>  {

        dispatchRemoveFromCart(beer);
        displayCounterOfBeersInCart();
        ShoppingCart()
    }