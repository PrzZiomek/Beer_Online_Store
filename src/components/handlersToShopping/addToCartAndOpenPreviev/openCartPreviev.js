import { pipeline as compose } from '../../../pipeline';
import { createDiv, createImgElem, createSpanElem, createText, createTitle, createLinkTo, createWrapperDiv } from "../../toManipulateDOM/basisHandlersToManipulateDOM";
import { createButtonToCloseModal } from "../../toManipulateDOM/handlersToManipulateDOM";
import { createPrevievOfCartContent } from "./previevOfCartContent";



export const actualBeerAndCartPreviev = (beer) => {

    const page = document.querySelector("body");  
    const cartPrevievModal = createDiv("previevModal");

    const cartPreviev = compose(
            createTitle("statement")("Dodałeś do koszyka!"),
            createWrapperDiv("previev-actualBeer")(compose(  
                createImgElem("")(beer.image_url),
                createTitle("")(beer.name),
                createSpanElem("price")(`${beer.ebc} $`),         
                createText("description")(beer.description),
                createButtonToCloseModal("")("kontynuuj zakupy")(page),
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
                    createPrevievOfCartContent
                )),  
                createWrapperDiv("cartContent-recapCosts")(compose(  
                    createText("")("razem"),
                    createSpanElem("sum")(`${beer.ebc} $`),  
                )),                                                            
            ))
        )(createDiv("cart-previev")); 

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