import { setClss, setPath, setSrc, setTextContent,  createStrongWithAbbrAtr } from "./handlersToCreateElements";
import { createSpanElem } from "./basisHandlersToManipulateDOM";
import { pipeline as compose } from "../../pipeline";




export const createForm = (cl) => { 

    const element = document.createElement("form");
    const elementWithClss =  setClss(cl)(element);
  return elementWithClss
};


  export const createLabelWithRequired = (cl) => (to) => (spanText) => (element) => {

    const label = compose(
        setClss(cl),
        setforAtr(to),
        setTextContent(txtContent),
        createSpanElem("")(spanText),
        createStrongWithAbbrAtr("required")
    )(document.createElement("label"));

  element.appendChild(label);
 return element;
    
  }