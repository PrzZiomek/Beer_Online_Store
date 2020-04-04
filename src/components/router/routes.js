import { OfferOnPage } from "../OfferOnPage/OfferOnPage";
import { ShowDescription } from "../ShowDescription";
import { ShoppingCart } from "../shoppingCart/ShoppingCart";





export const routes = () => ({

                "/" : () => OfferOnPage(), 
                "/opis" : () => ShowDescription(),
                "/koszyk" : () => ShoppingCart()
            
            });











