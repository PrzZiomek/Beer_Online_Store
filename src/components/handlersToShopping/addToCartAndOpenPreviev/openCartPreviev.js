import { store } from "../../../manageState/store";
import { pipeline as compose } from '../../toManipulateDOM/pipeline';
import { clearContentOf, createDiv, createImgElem, createSpanElem, createText, createTitle, createLinkTo, createInternalWrapperDiv } from "../../toManipulateDOM/basisHandlersToManipulateDOM";
import { createButtonToCloseModal } from "../../toManipulateDOM/handlersToManipulateDOM"



export const openCartPreviev = (beer) => {

    const page = document.querySelector("body");  
    const cartContent = store.getState().reducerToCart;
    const cartPrevievModal = createDiv("previev-background");

    const cartPreviev = compose(
            createTitle("statement")("Dodałeś do koszyka!"),
            createInternalWrapperDiv("previev-actualBeer")(compose(  
                createImgElem("")(beer.image_url),
                createTitle("")(beer.name),
                createSpanElem("price")(`${beer.srm} $`),         
                createText("description")(beer.description),
                createButtonToCloseModal("")("kontynuuj zakupy")(cartPrevievModal),
                createLinkTo("")("do kasy")("#/koszyk"),
            )),
            createInternalWrapperDiv("previev-cartContent")(compose(  
                createTitle("")("Twój koszyk"),
                createInternalWrapperDiv("details")(compose(  
                    createText("")("produkt"),
                    createText("")("cena"),
                    createText("")("ilość"),
                    createText("")("wartość"),
                )), 
                createInternalWrapperDiv("recapCosts")(compose(  
                    createText("")("razem"),
                    createSpanElem("sum")(beer.srm),  
                )),                                                            
            ))
        )(createDiv("cart-previev")); 

    console.log(cartContent);   
    cartPrevievModal.appendChild(cartPreviev);
    page.appendChild(cartPrevievModal);
}


/*
createSpanElem("price")(beer.srm),
                createText("")("tagi"),
                createSpanElem("tagline")(beer.tagline),
                createText("")("wyprodukowano"),   
                createSpanElem("date")(beer.first_brewed),
                createText("")("producent"),
                createSpanElem("produced")(beer.contributed_by),    
*/    