
import {Maybe} from '../../monads/Maybe/Maybe';


const checkIfThisIsFunction = (fn) => typeof fn === "function" && fn;

const convertIfArgIsNotText = (x = "") => (fn) =>{ 
    const checkedArg = x.constructor === String ? x : String(x);
   return fn(checkedArg) 
}

const convertIfArgIsNotHtmlEl = (elem) => (fn) =>{ 
     const checkedEl = elem instanceof Element || elem instanceof HTMLDocument ? elem : document.createElement("div");
   return fn(checkedEl)      
};




 const createSpanElemFnBefChecking = (cl) => (txtContent) => (element) =>{ 
   const span = compose(
                  setClss(cl),
                  setTextContent(txtContent)
            )(document.createElement("span"));      
    element.appendChild(span);
  return element
}

 const createDivBefChecking = (cl) => { 

  const element = document.createElement("div");
  const elementWithClss =  setClss(cl)(element);
 return elementWithClss;
 }


 const createTitleBefChecking = (cl) => (txtContent) => (element) =>{ 

  const h3 = compose(
          setClss(cl),
          setTextContent(txtContent)
    )(document.createElement("h3"));
      
  element.appendChild(h3);
return element
}


 const createTextBefChecking = (cl) => (txtContent) => (element) =>{ 

  const p = compose(
          setClss(cl),
          setTextContent(txtContent)
    )(document.createElement("p"));
  
    element.appendChild(p);
 return element;
} 

export const createDivWithinElementBefChecking = (cl) => (txtContent) => (element) =>{ 

  const div = compose(
            setTextContent(txtContent)
     )(createDiv(cl));
     
     element.appendChild(div);
 return element;
} 

 const createImgElemBefChecking = (cl) => (alt) => (src) => (element) => {

  const img = compose(
          setClss(cl),
          setSrc(src),
          setAlt(alt),
    )(document.createElement("img"));

  element.appendChild(img);
return element;
}

export const createLinkToBefChecking = (cl) => (txtContent) => (path) => (element) => {

  const link = compose(
          setClss(cl),
          setPath(path),
          setTextContent(txtContent)
    )(document.createElement("a"));

    
  element.appendChild(link);
return element;
}




export const createSpanElem = (cl) => (txtContent) => (element) => 

          Maybe.of(createSpanElemFnBefChecking)
                        .map(checkIfThisIsFunction)
                        .map(convertIfArgIsNotText(cl))  
                        .map(convertIfArgIsNotText(txtContent)) 
                        .map(convertIfArgIsNotHtmlEl(element))                                                                                                                       
                        .valueOf();

               
                        
export const createDiv = (cl) => 

          Maybe.of(createDivBefChecking)
                      .map(checkIfThisIsFunction)
                      .map(convertIfArgIsNotText(cl))  
                      .valueOf();



export const createTitle = (cl) => (txtContent) => (element) =>

        Maybe.of(createTitleBefChecking)
                  .map(checkIfThisIsFunction)
                  .map(convertIfArgIsNotText(cl))  
                  .map(convertIfArgIsNotText(txtContent)) 
                  .map(convertIfArgIsNotHtmlEl(element))                                                                                                                       
                  .valueOf();

                  

export const createText = (cl) => (txtContent) => (element) =>

        Maybe.of(createTextBefChecking)
                  .map(checkIfThisIsFunction)
                  .map(convertIfArgIsNotText(cl))  
                  .map(convertIfArgIsNotText(txtContent)) 
                  .map(convertIfArgIsNotHtmlEl(element))                                                                                                                       
                  .valueOf();



export const createDivWithinElement = (cl) => (txtContent) => (element) =>

        Maybe.of(createDivWithinElementBefChecking)
                  .map(checkIfThisIsFunction)
                  .map(convertIfArgIsNotText(cl))  
                  .map(convertIfArgIsNotText(txtContent)) 
                  .map(convertIfArgIsNotHtmlEl(element))                                                                                                                       
                  .valueOf();



export const createImgElem = (cl) => (alt) => (src) => (element) => 

        Maybe.of(createImgElemBefChecking)
                  .map(checkIfThisIsFunction)
                  .map(convertIfArgIsNotText(cl)) 
                  .map(convertIfArgIsNotText(alt)) 
                  .map(convertIfArgIsNotText(src)) 
                  .map(convertIfArgIsNotHtmlEl(element))                                                                                                                       
                  .valueOf();



export const createLinkTo = (cl) => (txtContent) => (path) => (element) => 

        Maybe.of(createLinkToBefChecking)
                  .map(checkIfThisIsFunction)
                  .map(convertIfArgIsNotText(cl)) 
                  .map(convertIfArgIsNotText(txtContent)) 
                  .map(convertIfArgIsNotText(path)) 
                  .map(convertIfArgIsNotHtmlEl(element))                                                                                                                       
                  .valueOf();

                

