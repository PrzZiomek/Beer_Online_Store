import { dispatchRemoveFromCart} from "../handlersToShopping/handlersToShopping";
import { ShoppingCart } from "../ShoppingCart/ShoppingCart";


export const rmvFromCartAndUpdateCartView = (beer) =>  {

        dispatchRemoveFromCart(beer);
        ShoppingCart()
    }