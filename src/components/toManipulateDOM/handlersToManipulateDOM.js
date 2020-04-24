import { addToCart } from "../showContentOf/createElementWithCartContent/createElementWithFavoriteCartContent/addToCart";
import { addToCartAndOpenPreviev } from "../AddToCartAndOpenPreviev/addToCartAndOpenPreviev";
import { rmvGroupOfBeerAndUpdateViev } from '../showContentOf/rmvGroupOfBeerAndUpdateViev';
import { setClss, setOnclickFn, setTextContent } from "./handlersToCreateElements";
import { addToFavorite } from '../FavoriteCart/addToFavorite';
import { pipeline as compose } from "../../pipeline";
//import { clearContentOf } from "./basisHandlersToManipulateDOM"



export const insertDashesToPath = (str) => str.replace(/ /g, "-");



export const createBtnAddToFavour = (cl) => (txtContent) => (arg) => (element) => {

    const btn = compose(
            setClss(cl),
            setTextContent(txtContent),
            setOnclickFn(addToFavorite)(arg)
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



export const createBtnToRemoveGroupOfBeers = (cl) => (txtContent) => (arg) => (element) => {

    const btn = compose(
            setClss(cl),
            setTextContent(txtContent),
            setOnclickFn(rmvGroupOfBeerAndUpdateViev)(arg)
      )(document.createElement("button"));

    element.appendChild(btn);
  return element;
}

