import { dispatchAddToFavour } from "../handlersToShopping/handlersToShopping";
import { addToCartAndOpenPreviev } from "../AddToCartAndOpenPreviev/addToCartAndOpenPreviev";
import { setClss, setOnclickFn, setTextContent } from "./handlersToCreateElements";
import { pipeline as compose } from "../../pipeline";
//import { clearContentOf } from "./basisHandlersToManipulateDOM"



export const insertDashesToPath = (str) => str.replace(/ /g, "-");



export const createBtnAddToFavour = (cl) => (txtContent) => (arg) => (element) => {

    const btn = compose(
            setClss(cl),
            setTextContent(txtContent),
            setOnclickFn(dispatchAddToFavour)(arg)
       )(document.createElement("button"));
        
    element.appendChild(btn);
  return element;
}


export const createBtnAddToCart = (cl) => (txtContent) => (arg) => (element) => {

    const btn = compose(
            setClss(cl),
            setTextContent(txtContent),
            setOnclickFn(addToCartAndOpenPreviev)(arg)
      )(document.createElement("button"));

     element.appendChild(btn);
  return element;
}



export const createBtnToRemoveGroupOfBeers = (cl) => (txtContent) => (arg) => (element) => {

    const btn = compose(
            setClss(cl),
            setTextContent(txtContent),
            setOnclickFn(addToCartAndOpenPreviev)(arg)
      )(document.createElement("button"));

    element.appendChild(btn);
  return element;
}

