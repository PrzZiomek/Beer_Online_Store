import { dispatchRemoveFromFavorite } from "../../../handlersToShopping/handlersToShopping";
import { FavoriteCart } from "../../../FavoriteCart/FavoriteCart";


export const rmvFromFavoriteAndUpdateCartView = (beer) =>  {

        dispatchRemoveFromFavorite(beer);
        FavoriteCart()
    }