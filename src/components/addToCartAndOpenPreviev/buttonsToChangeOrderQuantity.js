import { setClss, setOnclickFn, setTextContent } from "../toManipulateDOM/handlersToCreateElements";
import { addToCartAndUpdatePreviev, rmvFromCartAndUpdatePreviev } from "../handlersToShopping/handlersToShopping";
import { pipeline as compose } from "../../pipeline";



export const createButtonToIncreaseOrder = (cl) => (beer) => (element) => {

    const btn = compose(
            setClss(cl),
            setTextContent("+"),
            setOnclickFn(addToCartAndUpdatePreviev)(beer)
        )(document.createElement("button"));

    element.appendChild(btn);
  return element;
}




export const createButtonToDecreaseOrder = (cl) => (beer) => (element) => {

    const btn = compose(
            setClss(cl),
            setTextContent("-"),
            setOnclickFn(rmvFromCartAndUpdatePreviev)(beer)
        )(document.createElement("button"));

    element.appendChild(btn);
  return element;
}