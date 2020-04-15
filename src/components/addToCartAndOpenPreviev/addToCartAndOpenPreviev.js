import { dispatchSetCurrentBeer } from "../handlersToShopping/handlersToShopping";
import { dispatchAddToCart } from "../handlersToShopping/handlersToShopping";
import { actualBeerAndCartPreviev } from "./previevOfCartContent/actualBeerAndCartPreviev/actualBeerAndCartPreviev";






export const addToCartAndOpenPreviev = (beer) => {

    dispatchSetCurrentBeer(beer);
    dispatchAddToCart(beer);
    actualBeerAndCartPreviev()
  
}

