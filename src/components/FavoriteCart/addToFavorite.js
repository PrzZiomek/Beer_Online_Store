import { dispatchAddToFavour } from '../handlersToShopping/handlersToShopping';
import { displayCounterOfBeersInFavorite } from './displayCounterOfBeersInFavorite';


export const addToFavorite = (beer) => {

    dispatchAddToFavour(beer);
    displayCounterOfBeersInFavorite()
   
}