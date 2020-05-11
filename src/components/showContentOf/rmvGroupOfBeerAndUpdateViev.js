import { ShoppingCart } from '../ShoppingCart/ShoppingCart';
import { FavoriteCart } from '../FavoriteCart/FavoriteCart';
import { dispatchRmvWholeTypeFromCart, dispatchRmvWholeTypeFromFavoriteCart } from '../handlersToShopping/handlersToShopping';
import { displayCounterOfBeersInCart } from '../AddToCartAndOpenPreviev/displayCounterOfBeersInCart';
import { displayCounterOfBeersInFavorite } from '../FavoriteCart/displayCounterOfBeersInFavorite';


/*
const rmvFromShopOrFavAndUpdateView = (type) => type === "SHOPPING" ?  
[dispatchRmvWholeTypeFromCart, displayCounterOfBeersInCart, ShoppingCart] : 
 type === "FAVORITE" ?
[dispatchRmvWholeTypeFromFavoriteCart, displayCounterOfBeersInFavorite, FavoriteCart] :
 "invalid type";


const removeFromCartAndUpdateView = (fnAsArray) => (beer) => {
    const [dispatch, displayCount, Cart ] = fnAsArray;

}
*/

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

