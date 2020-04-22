import { pipeline as compose } from '../../../pipeline';
import { createText, createDiv } from "../../toManipulateDOM/basisHandlersToManipulateDOM";



export const cartColumnTitles = (clss) =>  (element) => {
      
    const wrapperDiv = compose(            
            createText("")("usuń"),
            createText("")("produkt"),
            createText("")("cena"),
            createText("")("ilość"),
            createText("")("wartość"),
     )(createDiv(clss))

    element.appendChild(wrapperDiv);
 return element;
}