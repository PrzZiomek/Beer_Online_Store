import { dispatchAddToFavour } from "../../../handlersToShopping/handlersToShopping";
import { FavoriteCart } from "../../../FavoriteCart/FavoriteCart";


export const addToFavoriteAndUpdateCartView = (beer) =>  {

        dispatchAddToFavour(beer);
        FavoriteCart()
    }