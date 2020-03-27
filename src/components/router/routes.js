import { OfferOnPage } from "../OfferOnPage/OfferOnPage";
import { showDescription } from "../showDescription";
import { shoppingCart } from "../shoppingCart/shoppingCart";





export const routes = () => ({

                "/" : () => OfferOnPage(), 
                "/opis" : () => showDescription(),
                "/koszyk" : () => shoppingCart()
            
            });











