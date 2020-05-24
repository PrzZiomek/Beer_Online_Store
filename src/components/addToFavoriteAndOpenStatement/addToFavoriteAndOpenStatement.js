import { dispatchAddToFavour } from '../handlersToShopping/handlersToShopping';
import { displayCounterOfBeersInFavorite } from '../FavoriteCart/displayCounterOfBeersInFavorite';
import { openFavoriteStatement } from './openFavoriteStatement';


export const addToFavoriteAndOpenStatement = (beer) => {

    dispatchAddToFavour(beer);
    displayCounterOfBeersInFavorite();
    openFavoriteStatement(beer);
}