import { setClss, setTextContent, setName, setType, setValue } from "./handlersToCreateElements";
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
            setType("text")
    )(document.createElement("input"));

  element.appendChild(textInput);
 return element;
}

export const createPasswordInput = (cl) => (name) => (element) => {

    const passwordInput = compose(
            setClss(cl),
            setName(name),
            setType("password")
    )(document.createElement("input"));

  element.appendChild(passwordInput);
 return element;
}


export const createRadioInput = (cl) => (value) => (element) => {

  const radioInput = compose(
          setClss(cl),
          setName(name),
          setValue(value)
  )(document.createElement("input"));

element.appendChild(radioInput);
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


  export const createBtnSendsFormToValidation = (cl) => (element) => {

        const btn = compose(
                setClss(cl),
                setTextContent("txtContent"),
                setOnclickFn(addToFavour)(arg)
            )(document.createElement("button"));
      
      element.appendChild(btn);
    return element;
  }