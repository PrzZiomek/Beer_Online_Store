import { dispatchAddToFavour } from '../handlersToShopping/handlersToShopping';
import { displayCounterOfBeersInCart } from './displayCounterOfBeersInFavorite';
import { FavoriteCart } from './FavoriteCart';


export const addToFavoriteAndUpdate = (beer) => {

    dispatchAddToFavour(beer);
    displayCounterOfBeersInCart();
    FavoriteCart();
}