import { ShoppingCart } from '../ShoppingCart/ShoppingCart';
import { FavoriteCart } from '../FavoriteCart/FavoriteCart';
import { dispatchRmvWholeTypeFromCart, dispatchRmvWholeTypeFromFavoriteCart } from '../handlersToShopping/handlersToShopping';
import { displayCounterOfBeersInCart } from '../AddToCartAndOpenPreviev/displayCounterOfBeersInCart';
import { displayCounterOfBeersInFavorite } from '../FavoriteCart/displayCounterOfBeersInFavorite';


export const rmvGroupFromShoppigCartAndUpdateViev = (beer) => {
 
    dispatchRmvWholeTypeFromCart(beer);
    displayCounterOfBeersInCart();
    ShoppingCart();
}




export const rmvGroupFromFavoriteCartAndUpdateViev = (beer) => {
 
    dispatchRmvWholeTypeFromFavoriteCart(beer);
    displayCounterOfBeersInFavorite();
    FavoriteCart();
}