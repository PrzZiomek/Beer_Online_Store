import { setClss, setTextContent, setName } from "./handlersToCreateElements";
import { createSpanElem } from "./basisHandlersToManipulateDOM";
import { pipeline as compose } from "../../pipeline";



export const createForm = (cl) => { 

    const element = document.createElement("form");
    const elementWithClss =  setClss(cl)(element);
  return elementWithClss;
};


export const createTextInput = (cl) => (name) => (element) => {

    const textInput = compose(
            setClss(cl),
            setName(name),
    )(document.createElement("input"));

  element.appendChild(textInput);
return element;
}



export const createStrongWithAbbrAtr = (abbrTitle) => (element) => {

    const strong = document.createElement("strong");
    const abbr = document.createElement("abbr");
    abbr.title = abbrTitle;
    abbr.textContent = "*";
    strong.appendChild(abbr);
    element.appendChild(strong);

  return element  
}


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