import { setClss, setOnclickFn, setTextContent } from "../toManipulateDOM/handlersToCreateElements";
import { removePrevievCartModal } from "../toManipulateDOM/removeModal/removePrevievCartModal";
import { pipeline as compose } from "../../pipeline";
import { displayCounterOfBeersInCart } from "./displayCounterOfBeersInCart";




export const createButtonToCloseModal = (cl) => (txtContent) => (element) => {

    displayCounterOfBeersInCart()

    const btn = compose(
            setClss(cl),
            setTextContent(txtContent),
            setOnclickFn(removePrevievCartModal)()
        )(document.createElement("button"));
  
        element.appendChild(btn);
    return element;
  }