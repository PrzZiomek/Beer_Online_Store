import { addToCurrentBeer, addToFavour } from "../handlersToShopping/handlersToShopping";
import { addToCartAndOpenPreviev } from "../addToCartAndOpenPreviev/addToCartAndOpenPreviev";
import { setClss, setOnclickFn, setPath, setTextContent } from "./handlersToCreateElements";
import { pipeline as compose } from "../../pipeline";



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





export const createLinkRedirectToDescription = (cl) => (beer) => (element) => {

    const link = compose(
            setClss(cl),
            setPath(`#/opis/${insertDashesToPath(beer.name)}`),
            setTextContent("opis"),
            setOnclickFn(addToCurrentBeer)(beer)
     )(document.createElement("a"));
        
    element.appendChild(link);
  return element;
}



