import { store } from "../../../../manageState/store";
import { createDiv } from "../../../toManipulateDOM/basisHandlersToManipulateDOM";
import { shoppingCartStatementAndPreviev } from "./shoppingCartStatementAndPreviev";


export const actualBeerAndCartPreviev = () => {

    const page = document.querySelector("body");  
    const cartPrevievModal = createDiv("previevModal");
    const cartContent = store.getState().reducerToShopping;
    const currentBeer = store.getState().reducerToCurrentBeer;
    const cartPreviev = shoppingCartStatementAndPreviev(cartContent)(currentBeer);

    cartPrevievModal.appendChild(cartPreviev);
  page.appendChild(cartPrevievModal);
}

