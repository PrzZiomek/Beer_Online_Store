import { store } from "../../manageState/store";
import { setCurrentBeerAction } from "../../manageState/actionCreators";
import { addToCart } from "../handlersToShopping/handlersToShopping";
import { actualBeerAndCartPreviev } from "./openCartStatement";






export const addToCartAndOpenPreviev = (beer) => {

    store.dispatch(setCurrentBeerAction(beer))
    addToCart(beer);
    actualBeerAndCartPreviev()
  
}

