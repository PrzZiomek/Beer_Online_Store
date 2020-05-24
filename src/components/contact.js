import { createDiv, createSpanElem, createText } from "./toManipulateDOM/basisHandlersToManipulateDOM";
import { pipeline as compose } from '../pipeline';

  

const contact = () => {

    const contactLink = document.querySelector("li.contact");

    const wrapperDiv = compose(  
        createText("")("Jesteśmy do dyspozycji od poniedziałku do piątku od 8 do 18."),
        createText("")("Zadzwoń do nas!"),
        createSpanElem("")("667 565 200"),
        createText("")("albo napisz"),
        createSpanElem("")("biuro@beers.pl"),
        createText("")("odwiedz nasz sklep"),   
        createSpanElem("")("Poznań, ul. Browarna 24"),     
    )(createDiv("contactData"));

  contactLink.appendChild(wrapperDiv);
}



contact()