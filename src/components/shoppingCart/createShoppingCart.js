import { pipeline as compose } from '../../pipeline';
import { createDiv } from "../toManipulateDOM/basisHandlersToManipulateDOM";
import { cartProgressBar } from "./componentsOfShoppingCart/cartProgressBar";
import { cartHeader } from "./componentsOfShoppingCart/cartHeader";
import { cartColumnTitles } from "./componentsOfShoppingCart/cartColumnTitles";
import { cartRecapCosts } from "./componentsOfShoppingCart/cartRecapCosts";
import { cartButtons1 } from "./componentsOfShoppingCart/cartButtons1";
import { cartButtons2 } from "./componentsOfShoppingCart/cartButtons2";
import { cartListWithOrders } from "./componentsOfShoppingCart/cartListWithOrders";



export const createShoppingCart = (cartContent) => {

    const area = document.querySelector("main");

    const mainWrapper = compose(
            cartProgressBar,
            cartHeader(cartContent),
            cartColumnTitles, 
            cartListWithOrders(cartContent), 
            cartRecapCosts(cartContent),   
            cartButtons1,              
            cartButtons2
       )(createDiv("shopping-cart"));

  area.appendChild(mainWrapper);
}
