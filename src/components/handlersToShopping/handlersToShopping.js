import { store } from "../../manageState/store";
import { setCurrentBeerAction } from "../../manageState/actionCreators";;






export const addToFavour = () => console.log("addToFavour");

export const addToCurrentBeer = (beer) => store.dispatch(setCurrentBeerAction(beer));
