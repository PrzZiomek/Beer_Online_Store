import { dispatchAddToFavour } from '../handlersToShopping/handlersToShopping';
import { displayCounterOfBeersInFavorite } from './displayCounterOfBeersInFavorite';
import { FavoriteCart } from './FavoriteCart';


export const addToFavoriteAndUpdate = (beer) => {

    dispatchAddToFavour(beer);
    displayCounterOfBeersInFavorite();
    FavoriteCart();
}