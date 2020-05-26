import { pipeline as compose } from '../../../../../pipeline';
import { createDiv, createImgElem, createSpanElem, createText, createTitle, createLinkTo } from "../../../../toManipulateDOM/basisHandlersToManipulateDOM";
import { createButtonToCloseModal } from "../../../createButtonToCloseModal";



export const previevOfActualBeer = (beer) => (element) => {

    const wrapperDiv = compose(    
            createImgElem("")("piwo")(beer.image_url),
            createTitle("")(beer.name),
            createSpanElem("price")(`${beer.abv} $`),         
            createText("description")(beer.description),
            createButtonToCloseModal("")("kontynuuj zakupy"),
            createLinkTo("")("do kasy")("#/koszyk"),
        )(createDiv("previev-actualBeer"));

    element.appendChild(wrapperDiv);
  return element
}
    