import { pipeline as compose } from '../../../../pipeline';
import { createDiv, createText } from "../../../toManipulateDOM/basisHandlersToManipulateDOM";
import { createLinkRedirectToDescription } from "../../../OfferOnPage/createLinkRedirectToDescription";



export const createBeerNameWithDescription = (beer) => (element) => {

    const wrapperDiv = compose(            
             createLinkRedirectToDescription("beerTitle")(beer.name)(beer),
             createText("description")(beer.description)
      )(createDiv("nameWithDescr"))

    element.appendChild(wrapperDiv);
 return element;
}
