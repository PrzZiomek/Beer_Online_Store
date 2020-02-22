import { store } from "../../../manageState/store";
import { addToCart } from "../handlersToShopping";
import { actualBeerAndCartPreviev } from "./openCartPreviev";
import { displayCounterOfBeersInCart } from "./displayCounterOfBeersInCart";






export const addToCartAndOpenPreviev = (beer) => {

    addToCart(beer);
    actualBeerAndCartPreviev(beer)
    displayCounterOfBeersInCart()
  
}

