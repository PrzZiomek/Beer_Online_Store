import { setClss, setTextContent, setName, setType, setValue, setforAtr, setChecked } from "../toManipulateDOM/handlersToCreateElements";
import { pipeline as compose } from "../../pipeline";



export const createForm = (cl) => { 

    const element = document.createElement("form");
    const elementWithClss =  setClss(cl)(element);
  return elementWithClss;
};


export const createSelect = (cl) => (name) => { 

    const select = compose(
              setClss(cl),
              setName(name),
          )(document.createElement("select"));

 return select;
};


export const createOption = (cl) => (value) => (textContent) => (element) => {

    const textInput = compose(
            setClss(cl),
            setValue(value),
            setTextContent(textContent)
    )(document.createElement("option"));

  element.appendChild(textInput);
 return element;
}


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


export const createCheckboxInput = (cl) => (name) => (value) => (element) => {

    const checkboxInput = compose(
            setClss(cl),
            setName(name),
            setValue(value),
            setType("checkbox")
    )(document.createElement("input"));

  element.appendChild(checkboxInput);
return element;
}


export const createCheckedCheckboxInput = (cl) => (name) => (value) => (element) => {

    const checkboxInput = compose(
            setClss(cl),
            setName(name),
            setValue(value),
            setChecked("true"),
            setType("checkbox")
    )(document.createElement("input"));

  element.appendChild(checkboxInput);
return element;
}


export const createEmailInput = (cl) => (name) => (element) => {

    const passwordInput = compose(
            setClss(cl),
            setName(name),
            setType("email")
    )(document.createElement("input"));

  element.appendChild(passwordInput);
return element;
}


export const createRadioInput = (cl) => (value) => (element) => {

    const radioInput = compose(
            setClss(cl),
            setName(name),
            setValue(value),
            setType("radio")
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


  export const createLabelWithRequired = (cl) => (to) => (textContent) => (element) => {

      const label = compose(
              setClss(cl),
              setforAtr(to),
              setTextContent(textContent),
              createStrongWithAbbrAtr("required")
        )(document.createElement("label"));

    element.appendChild(label);
  return element;
    
  }


  export const createLabel = (cl) => (to) => (textContent) => (element) => {

      const label = compose(
              setClss(cl),
              setforAtr(to),
              setTextContent(textContent),
        )(document.createElement("label"));

    element.appendChild(label);
  return element;
  
}


  export const createBtn = (cl) =>  (textContent) => (element) => {

        const btn = compose(
                setClss(cl),
                setTextContent(textContent),
            )(document.createElement("button"));
      
      element.appendChild(btn);
    return element;
  }