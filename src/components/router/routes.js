import { OfferOnPage } from "../OfferOnPage/OfferOnPage";
import { ShowDescription } from "../BeerDescription/ShowDescription";
import { ShoppingCart } from "../ShoppingCart/ShoppingCart";





export const routes = () => ({

                "/" : () => OfferOnPage(), 
                "/opis" : () => ShowDescription(),
                "/koszyk" : () => ShoppingCart()
            
            });











