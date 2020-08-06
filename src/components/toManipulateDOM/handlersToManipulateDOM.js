import { addToCart } from "../showContentOf/createElementWithCartContent/createElementWithFavoriteCartContent/addToCart";
import { addToCartAndOpenPreviev } from "../AddToCartAndOpenPreviev/addToCartAndOpenPreviev";
import { setClss, setOnclickFn, setTextContent } from "./handlersToCreateElements";
import { addToFavoriteAndOpenStatement } from '../addToFavoriteAndOpenStatement/addToFavoriteAndOpenStatement';
import { pipeline as compose } from "../../pipeline"




export const insertDashesToPath = (str) => str.replace(/ /g, "-");



export const createBtnAddToFavour = (cl) => (txtContent) => (arg) => (element) => {

    const btn = compose(
            setClss(cl),
            setTextContent(txtContent),
            setOnclickFn(addToFavoriteAndOpenStatement)(arg)
       )(document.createElement("button"));
        
    element.appendChild(btn);
  return element;
}


export const createBtnAddToCartAndOpenPreviev = (cl) => (txtContent) => (arg) => (element) => {

    const btn = compose(
            setClss(cl),
            setTextContent(txtContent),
            setOnclickFn(addToCartAndOpenPreviev)(arg)
      )(document.createElement("button"));

     element.appendChild(btn);
  return element;
}



export const createBtnAddToCart = (cl) => (txtContent) => (arg) => (element) => {

  const btn = compose(
          setClss(cl),
          setTextContent(txtContent),
          setOnclickFn(addToCart)(arg)
    )(document.createElement("button"));

   element.appendChild(btn);
return element;
}





