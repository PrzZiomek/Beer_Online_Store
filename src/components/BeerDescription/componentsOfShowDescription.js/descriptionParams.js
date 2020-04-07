import { pipeline as compose } from '../../../pipeline';
import { createDiv, createSpanElem, createText } from "../../toManipulateDOM/basisHandlersToManipulateDOM";


export const descriptionParams = (beer) => (element) => {

    const wrapperDiv = compose(  
            createText("")("cena"),
            createSpanElem("price")(beer.abv),
            createText("")("tagi"),
            createSpanElem("tagline")(beer.tagline),
            createText("")("wyprodukowano"),   
            createSpanElem("date")(beer.first_brewed),
            createText("")("producent"),
            createSpanElem("produced")(beer.contributed_by),            
        )(createDiv("description-params"));

    element.appendChild(wrapperDiv);
  return element
}
