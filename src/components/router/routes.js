import { OfferOnPage } from "../OfferOnPage/OfferOnPage";
import { BeerDescription } from "../BeerDescription/BeerDescription";
import { ShoppingCart } from "../ShoppingCart/ShoppingCart";





export const routes = () => ({

                "/" : () => OfferOnPage(), 
                "/opis" : () => BeerDescription(),
                "/koszyk" : () => ShoppingCart()
            
            });











