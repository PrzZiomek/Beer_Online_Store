import { pipeline as compose } from '../../pipeline';
import { setClss, setTextContent, setPath, setAlt, } from '../../components/toManipulateDOM/handlersToCreateElements';



 export const createSpanElemFnBefChecking = (cl) => (txtContent) => (element) =>{ 
    const span = compose(
                   setClss(cl),
                   setTextContent(txtContent)
             )(document.createElement("span"));      
     element.appendChild(span);
   return element
 }

 
 export const createDivBefChecking = (cl) => { 
 
   const element = document.createElement("div");
   const elementWithClss =  setClss(cl)(element);
  return elementWithClss;
  }
 

 
  export const createTitleBefChecking = (cl) => (txtContent) => (element) =>{ 
 
   const h3 = compose(
           setClss(cl),
           setTextContent(txtContent)
     )(document.createElement("h3"));
       
   element.appendChild(h3);
 return element
 }
 
 
 export const createTextBefChecking = (cl) => (txtContent) => (element) =>{ 
 
   const p = compose(
           setClss(cl),
           setTextContent(txtContent)
     )(document.createElement("p"));
   
     element.appendChild(p);
  return element;
 } 
 

 export export const createDivWithinElementBefChecking = (cl) => (txtContent) => (element) =>{ 
 
   const div = compose(
             setTextContent(txtContent)
      )(createDiv(cl));
      
      element.appendChild(div);
  return element;
 } 

 
 export const createImgElemBefChecking = (cl) => (alt) => (src) => (element) => {
 
   const img = compose(
           setClss(cl),
           setSrc(src),
           setAlt(alt),
     )(document.createElement("img"));
 
   element.appendChild(img);
 return element;
 }
 

 export export const createLinkToBefChecking = (cl) => (txtContent) => (path) => (element) => {
 
   const link = compose(
           setClss(cl),
           setPath(path),
           setTextContent(txtContent)
     )(document.createElement("a"));
 
     
   element.appendChild(link);
 return element;
 }