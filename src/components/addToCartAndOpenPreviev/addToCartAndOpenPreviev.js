import { setCurrentBeer } from "../handlersToShopping/handlersToShopping";
import { addToCart } from "../handlersToShopping/handlersToShopping";
import { actualBeerAndCartPreviev } from "./actualBeerAndCartPreviev";






export const addToCartAndOpenPreviev = (beer) => {

    setCurrentBeer(beer);
    addToCart(beer);
    actualBeerAndCartPreviev()
  
}

