import { setClss, setPath, setSrc, setTextContent, setAlt } from "./handlersToCreateElements";
import { pipeline as compose } from "../../pipeline";




export const clearContentOf = (el) => { 

  while(el.firstChild && el.removeChild(el.firstChild));

};



export const createDiv = (cl = "") => { 

    const element = document.createElement("div");
    const elementWithClss =  setClss(cl)(element);
  return elementWithClss;
 } 



export const createTitle = (cl = "") => (txtContent) => (element) =>{ 

    const h3 = compose(
            setClss(cl),
            setTextContent(txtContent)
      )(document.createElement("h3"));
        
    element.appendChild(h3);
  return element
 }


  export const createText = (cl = "") => (txtContent) => (element) =>{ 

    const p = compose(
            setClss(cl),
            setTextContent(txtContent)
      )(document.createElement("p"));
    
      element.appendChild(p);
   return element;
  } 


  export const createDivWithinElement = (cl = "") => (txtContent) => (element) =>{ 

    const div = compose(
              setTextContent(txtContent)
       )(createDiv(cl));
       
       element.appendChild(div);
   return element;
 } 


export const createImgElem = (cl = "") => (alt = "") => (src) => (element) => {

    const img = compose(
            setClss(cl),
            setSrc(src),
            setAlt(alt),
      )(document.createElement("img"));

    element.appendChild(img);
 return element;
}



export const createLinkTo = (cl = "") => (txtContent) => (path) => (element) => {

    const link = compose(
            setClss(cl),
            setPath(path),
            setTextContent(txtContent)
      )(document.createElement("a"));

      
    element.appendChild(link);
  return element;
}




export const createWrapperDiv = (cl = "") => (...elements) => (element) => {

  const wrapper = compose(
            ...elements
      )(createDiv(cl));

    element.appendChild(wrapper);
  return element;
} 


export const createSpanElem = (cl = "") => (txtContent) => (element) =>{ 
   const span = compose(
                  setClss(cl),
                  setTextContent(txtContent)
            )(document.createElement("span"));      
    element.appendChild(span);
  return element
}






