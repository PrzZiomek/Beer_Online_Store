import { store } from "../../manageState/store";
import { pipeline as compose } from '../../pipeline';
import { createDiv, clearContentOf } from "../toManipulateDOM/basisHandlersToManipulateDOM";
import { removePrevievCartModal } from "../toManipulateDOM/removePrevievCartModal";
import { cartProgressBar } from "./componentsOfShoppingCart/cartProgressBar";
import { cartHeader } from "./componentsOfShoppingCart/cartHeader";
import { cartColumnTitles } from "./componentsOfShoppingCart/cartColumnTitles";
import { cartRecapCosts } from "./componentsOfShoppingCart/cartRecapCosts";
import { cartButtons1 } from "./componentsOfShoppingCart/cartButtons1";
import { cartButtons2 } from "./componentsOfShoppingCart/cartButtons2";
import { cartListWithOrders } from "./componentsOfShoppingCart/cartListWithOrders";


export const ShoppingCart = () => {

    const area = document.querySelector("main");
    const cartContent = store.getState().reducerToCart;

    clearContentOf(area);
    removePrevievCartModal();

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

                