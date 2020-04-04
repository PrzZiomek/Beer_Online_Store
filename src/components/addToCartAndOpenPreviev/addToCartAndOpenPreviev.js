import { setCurrentBeer } from "../handlersToShopping/handlersToShopping";
import { addToCart } from "../handlersToShopping/handlersToShopping";
import { actualBeerAndCartPreviev } from "./previevOfCartContent/actualBeerAndCartPreviev/actualBeerAndCartPreviev";






export const addToCartAndOpenPreviev = (beer) => {

    setCurrentBeer(beer);
    addToCart(beer);
    actualBeerAndCartPreviev()
  
}

