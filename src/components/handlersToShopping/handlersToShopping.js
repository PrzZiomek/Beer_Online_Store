import { store } from "../../manageState/store";
import { setCurrentBeerAction, addToCartAction } from "../../manageState/actionCreators";;




export const addToCart = (beer) => store.dispatch(addToCartAction(beer));

export const removeFromCart = (beer) => console.log("remove");


export const addToFavour = () => console.log("addToFavour");

export const addToCurrentBeer = (beer) => store.dispatch(setCurrentBeerAction(beer));
