import { OfferOnPage } from "../OfferOnPage/OfferOnPage";
import { BeerDescription } from "../BeerDescription/BeerDescription";
import { ShoppingCart } from "../ShoppingCart/ShoppingCart";
import { RegistrationForm } from "../RegistrationForm/RegistrationForm";




export const routes = () => ({

                "/" : () => OfferOnPage(), 
                "/opis" : () => BeerDescription(),
                "/koszyk" : () => ShoppingCart(),
                "/rejestracja": () => RegistrationForm(),
            });











