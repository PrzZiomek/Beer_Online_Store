import { store } from "../manageState/store";
import { setCurrentBeer } from "../manageState/actionCreators";;


export const addToCart = () => console.log("addToCart");
export const addToFavour = () => console.log("addToFavour");
export const addToCurrentBeer = (beer) => store.dispatch(setCurrentBeer(beer));
