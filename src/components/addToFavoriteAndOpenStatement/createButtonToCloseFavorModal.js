import { setClss, setOnclickFn, setTextContent } from "../toManipulateDOM/handlersToCreateElements";
import { removePrevievFavorModal } from "../toManipulateDOM/removePrevievFavorModal";
import { pipeline as compose } from "../../pipeline";
//import { displayCounterOfBeersInCart } from "./displayCounterOfBeersInCart";




export const createButtonToCloseFavorModal = (cl) => (txtContent) => (element) => {

   // displayCounterOfBeersInCart()

    const btn = compose(
            setClss(cl),
            setTextContent(txtContent),
            setOnclickFn(removePrevievFavorModal)()
        )(document.createElement("button"));
  
        element.appendChild(btn);
    return element;
  }