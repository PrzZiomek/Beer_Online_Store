import { store } from "../../manageState/store";
import { setCurrentBeerAction, addToCartAction, addToFavoriteAction, removeFromFavoriteAction, removeFromCartAction, rmvWholeTypeFromCartAction } from "../../manageState/actionCreators";


export const dispatchAddToCart = (beer) => store.dispatch(addToCartAction(beer));

export const dispatchRemoveFromCart = (beer) => store.dispatch(removeFromCartAction(beer));

export const dispatchAddToFavour = (beer) => store.dispatch(addToFavoriteAction(beer));

export const dispatchRemoveFromFavorite = (beer) => store.dispatch(removeFromFavoriteAction(beer));

export const dispatchAddToCurrentBeer = (beer) => store.dispatch(setCurrentBeerAction(beer));

export const dispatchSetCurrentBeer = (beer) =>  store.dispatch(setCurrentBeerAction(beer))

export const dispatchRmvWholeTypeFromCart = (beer) => store.dispatch(rmvWholeTypeFromCartAction(beer));


