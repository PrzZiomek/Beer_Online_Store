import { addToCurrentBeer, addToFavour, addToCart } from "../handlersToShopping";
import { setClss, setOnclickFn, setPath, setSrc, setTextContent } from "./handlersToCreateElements";
import { pipeline as compose } from "./pipeline";



export const insertDashesToPath = (str) => str.replace(/ /g, "-");





export const clearContentOf = (el) => { while(el.firstChild && el.removeChild(el.firstChild));};



export const createDiv = (cl) => { 
    const element = document.createElement("div");
        if(cl){ element.classList.add(cl) };
   return element;
  } 


export const createSpanElem = (cl) => (txtContent) => (element) =>{ 

    const span = compose(
            setClss(cl),
            setTextContent(txtContent)
      )(document.createElement("span"));
        
      element.appendChild(span);
    return element
  }


export const createTitle = (cl) => (txtContent) => (element) =>{ 

    const h3 = compose(
            setClss(cl),
            setTextContent(txtContent)
      )(document.createElement("h3"));
        
    element.appendChild(h3);
  return element
 }


  export const createText = (cl) => (txtContent) => (element) =>{ 

    const p = compose(
            setClss(cl),
            setTextContent(txtContent)
      )(document.createElement("p"));
    
      element.appendChild(p);
   return element;
  } 



export const createImgElem = (cl) => (src) => (element) => {

    const img = compose(
            setClss(cl),
            setSrc(src),
      )(document.createElement("img"));

    element.appendChild(img);
 return element;
}


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
            setOnclickFn(addToCart)(arg)
      )(document.createElement("button"));

     element.appendChild(btn);
  return element;
}


export const createLinkTo = (cl) => (txtContent) => (path) => (element) => {

    const link = compose(
            setClss(cl),
            setPath(path),
            setTextContent(txtContent)
      )(document.createElement("a"));
       
    element.appendChild(link);
  return element;
}


export const createLinkRedirectToDescription = (beer) => (element) => {

    const link = compose(
            setPath(`#/opis/${insertDashesToPath(beer.name)}`),
            setTextContent("opis"),
            setOnclickFn(addToCurrentBeer)(beer)
     )(document.createElement("a"));
        
    element.appendChild(link);
  return element;
}


export const createWrapperDiv = (cl) => (elements) => (element) => {

    const wrapper = elements(createDiv(cl));
    element.appendChild(wrapper);

  return element;
} 



       