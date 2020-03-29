import { store } from "../../manageState/store";
import { pipeline as compose } from '../../pipeline';
import { clearContentOf, createDivWithinElement, createDiv, createSpanElem, createText, createTitle, createLinkTo, createWrapperDiv } from "../toManipulateDOM/basisHandlersToManipulateDOM";
import { createPrevievOfCartContent } from "../previevOfCartContent/previevOfCartContent";
import { removePrevievCartModal } from "../toManipulateDOM/removePrevievCartModal";
import valueOfEntireCart  from "../addToCartAndOpenPreviev/valueOfEntireCart";



export const shoppingCart = () => {

    const area = document.querySelector("main");
    const cartContent = store.getState().reducerToCart;

    removePrevievCartModal();
    clearContentOf(area);

    const mainWrapper = compose(
            createWrapperDiv("cart-progressBar")(compose(
                createDivWithinElement("progressBar-stage")("1"),
                createDivWithinElement("progressBar-stage")("2"),
                createDivWithinElement("progressBar-stage")("3"),
                createDivWithinElement("progressBar-stage")("4"),
            )),
            createWrapperDiv("cart-header")(compose(
                createTitle("title")("Twój Koszyk"),
                createSpanElem("amount")("(12)"),
                createText("")("Zarządzaj swoimi zakupami lub złóz zamówienie")
            )),
            createWrapperDiv("cart-columnTitles")(compose(  
                createText("")("produkt"),
                createText("")("cena"),
                createText("")("ilość"),
                createText("")("wartość"),
            )), 
            createWrapperDiv("cart-listWithOrders")(compose(  
                createPrevievOfCartContent(cartContent)
            )),  
            createWrapperDiv("cart-recapCosts")(compose(  
                createText("")("razem"),
                createSpanElem("sum")(`${valueOfEntireCart(cartContent)} $`),  
            )),   
            createWrapperDiv("cart-buttons1")(compose(
                createLinkTo("")("zaloguj się")("#/logowanie"),
                createText("")("lub"),
                createLinkTo("")("zarejestruj się")("#/rejestracja"),
            )),               
            createWrapperDiv("cart-buttons2")(compose(
                createLinkTo("")("kontynuuj zakupy")("#/"),            
                createLinkTo("")("następny krok")("#/wybór metody"),
            ))
       )(createDiv("shopping-cart"));

  area.appendChild(mainWrapper);
}

                