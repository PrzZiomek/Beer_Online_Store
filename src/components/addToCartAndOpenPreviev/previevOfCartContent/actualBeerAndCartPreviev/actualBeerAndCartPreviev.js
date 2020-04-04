import { pipeline as compose } from '../../../../pipeline';
import { store } from "../../../../manageState/store";
import { createDiv, createTitle } from "../../../toManipulateDOM/basisHandlersToManipulateDOM";
import { createPrevievOfCartContent } from "./componentsOfCartPreviev/previevOfCartContent";
import { previevOfActualBeer } from "./componentsOfCartPreviev/previevActualBeer";



export const actualBeerAndCartPreviev = () => {

    const page = document.querySelector("body");  
    const cartPrevievModal = createDiv("previevModal");
    const cartContent = store.getState().reducerToCart;
    const beer = store.getState().reducerToCurrentBeer;
    
    const cartPreviev = compose(
            createTitle("statement")("Dodałeś do koszyka!"),
            previevOfActualBeer(beer),
            createPrevievOfCartContent(cartContent)
        )(createDiv("cart-previev")); 

    cartPrevievModal.appendChild(cartPreviev);
  page.appendChild(cartPrevievModal);
}

