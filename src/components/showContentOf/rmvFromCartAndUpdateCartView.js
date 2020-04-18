import { dispatchRmvWholeTypeFromCart} from "../handlersToShopping/handlersToShopping";
import { ShoppingCart } from "../ShoppingCart/ShoppingCart";


export const rmvFromCartAndUpdateCartView = (beer) =>  {

        dispatchRmvWholeTypeFromCart(beer);
        ShoppingCart()
    }