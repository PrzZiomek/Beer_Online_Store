import { store } from "../../manageState/store";
import { pipeline as compose } from '../../pipeline';
import { createDivWithinElement, createDiv, createSpanElem, createText, createTitle, createLinkTo, createWrapperDiv } from "../toManipulateDOM/basisHandlersToManipulateDOM";
import { createElementWithCartContent } from "../showContentOf/createElementWithCartContent";
import { removePrevievCartModal } from "../toManipulateDOM/removePrevievCartModal";
import valueOfEntireCart  from "../addToCartAndOpenPreviev/valueOfEntireCart";



export const shoppingCart = () => {

    const area = document.querySelector("main");
    const cartContent = store.getState().reducerToCart;

    removePrevievCartModal();

    const mainWrapper = compose(
            createWrapperDiv("cart-progressBar")(
                createDivWithinElement("progressBar-stage")("1"),
                createDivWithinElement("progressBar-stage")("2"),
                createDivWithinElement("progressBar-stage")("3"),
                createDivWithinElement("progressBar-stage")("4"),
            ),
            createWrapperDiv("cart-header")(
                createTitle("title")("Twój Koszyk"),
                createSpanElem("amount")("(12)"),
                createText("")("Zarządzaj swoimi zakupami lub złóz zamówienie")
            ),
            createWrapperDiv("cart-columnTitles")(  
                createText("")("usuń"),
                createText("")("produkt"),
                createText("")("cena"),
                createText("")("ilość"),
                createText("")("wartość"),
            ), 
            createWrapperDiv("cart-listWithOrders")(  
                createElementWithCartContent(cartContent)
            ),  
            createWrapperDiv("cart-recapCosts")(  
                createText("")("razem"),
                createSpanElem("sum")(`${valueOfEntireCart(cartContent)} $`),  
            ),   
            createWrapperDiv("cart-buttons1")(
                createLinkTo("")("zaloguj się")("#/logowanie"),
                createText("")("lub"),
                createLinkTo("")("zarejestruj się")("#/rejestracja"),
            ),               
            createWrapperDiv("cart-buttons2")(
                createLinkTo("")("kontynuuj zakupy")("#/"),            
                createLinkTo("")("następny krok")("#/wybór metody"),
            )
       )(createDiv("shopping-cart"));

  area.appendChild(mainWrapper);
}

                