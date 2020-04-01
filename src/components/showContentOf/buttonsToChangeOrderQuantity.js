import { setClss, setOnclickFn, setTextContent } from "../toManipulateDOM/handlersToCreateElements";
import { pipeline as compose } from "../../pipeline";



export const createButtonToIncreaseOrder = (cl) => (fn) => (beer) => (element) => {

    const btn = compose(
            setClss(cl),
            setTextContent("+"),
            setOnclickFn(fn)(beer)
        )(document.createElement("button"));

    element.appendChild(btn);
  return element;
}




export const createButtonToDecreaseOrder = (cl) => (fn) => (beer) => (element) => {

    const btn = compose(
            setClss(cl),
            setTextContent("-"),
            setOnclickFn(fn)(beer)
        )(document.createElement("button"));

    element.appendChild(btn);
  return element;
}