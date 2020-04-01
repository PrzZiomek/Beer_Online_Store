import { pipeline as compose } from '../../pipeline';
import { store } from "../../manageState/store";
import { createDiv, createImgElem, createSpanElem, createText, createTitle, createLinkTo, createWrapperDiv } from "../toManipulateDOM/basisHandlersToManipulateDOM";
import { createButtonToCloseModal } from "./createButtonToCloseModal";
import { createPrevievOfCartContent } from "./previevOfCartContent/previevOfCartContent";
import valueOfEntireCart from "./valueOfEntireCart";



export const actualBeerAndCartPreviev = () => {

    const page = document.querySelector("body");  
    const cartPrevievModal = createDiv("previevModal");
    const cartContent = store.getState().reducerToCart;
    const beer = store.getState().reducerToCurrentBeer;
    
    const cartPreviev = compose(
            createTitle("statement")("Dodałeś do koszyka!"),
            createWrapperDiv("previev-actualBeer")(compose(  
                createImgElem("")(beer.image_url),
                createTitle("")(beer.name),
                createSpanElem("price")(`${beer.abv} $`),         
                createText("description")(beer.description),
                createButtonToCloseModal("")("kontynuuj zakupy"),
                createLinkTo("")("do kasy")("#/koszyk"),
            )),
            createWrapperDiv("previev-cartContent")(compose(  
                createTitle("")("Twój koszyk"),
                createWrapperDiv("cartContent-details")(compose(  
                    createText("")("produkt"),
                    createText("")("cena"),
                    createText("")("ilość"),
                    createText("")("wartość"),
                )), 
                createWrapperDiv("cartContent-listWithOrders")(compose(  
                    createPrevievOfCartContent(cartContent)
                )),  
                createWrapperDiv("cartContent-recapCosts")(compose(  
                    createText("")("razem"),
                    createSpanElem("sum")(`${valueOfEntireCart(cartContent)} $`),  
                )),                                                            
            ))
        )(createDiv("cart-previev")); 

    cartPrevievModal.appendChild(cartPreviev);
  page.appendChild(cartPrevievModal);
}

