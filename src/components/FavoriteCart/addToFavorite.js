import { dispatchAddToFavour } from '../handlersToShopping/handlersToShopping';
import { displayCounterOfBeersInCart } from './displayCounterOfBeersInFavorite';


export const addToFavorite = (beer) => {

    dispatchAddToFavour(beer);
    displayCounterOfBeersInCart();
   
}