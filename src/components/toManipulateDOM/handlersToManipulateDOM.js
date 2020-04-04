import { addToCurrentBeer, addToFavour } from "../handlersToShopping/handlersToShopping";
import { addToCartAndOpenPreviev } from "../addToCartAndOpenPreviev/addToCartAndOpenPreviev";
import { setClss, setOnclickFn, setPath, setTextContent } from "./handlersToCreateElements";
import { pipeline as compose } from "../../pipeline";
import { clearContentOf } from "./basisHandlersToManipulateDOM"



export const insertDashesToPath = (str) => str.replace(/ /g, "-");



export const createBtnAddToFavour = (cl) => (txtContent) => (arg) => (element) => {

    const btn = compose(
            setClss(cl),
            setTextContent(txtContent),
            setOnclickFn(addToFavour)(arg)
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


export const createLinkToShoppingCart =  (element) => {
  
  const area = document.querySelector("main");

  clearContentOf(area);

  const link = compose(
          setClss(""),
          setPath("#/koszyk"),
          setTextContent("do kasy")
    )(document.createElement("a"));
     
  element.appendChild(link);
return element;
}



