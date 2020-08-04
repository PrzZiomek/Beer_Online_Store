import { store } from "../../manageState/store";
import { removePrevievCartModal } from "../toManipulateDOM/removeModal/removePrevievCartModal";
import { clearContentOf } from "../toManipulateDOM/basisHandlersToManipulateDOM";
import { createShoppingCart } from "./createShoppingCart";



export const ShoppingCart = () => {

    const area = document.querySelector("main");
    const cartContent = store.getState().reducerToShopping;

    clearContentOf(area);
    removePrevievCartModal();

    createShoppingCart(cartContent)
}

                