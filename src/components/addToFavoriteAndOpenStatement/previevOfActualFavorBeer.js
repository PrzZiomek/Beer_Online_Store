import { pipeline as compose } from '../../pipeline';
import { createDiv, createImgElem, createSpanElem, createText, createTitle, createLinkTo } from "../toManipulateDOM/basisHandlersToManipulateDOM";
import { createButtonToCloseFavorModal } from "./createButtonToCloseFavorModal";



export const previevOfActualFavorBeer = (beer) => (element) => {

    const wrapperDiv = compose(    
            createImgElem("")("piwo")(beer.image_url),
            createTitle("")(beer.name),
            createSpanElem("price")(`${beer.abv} $`),         
            createText("description")(beer.description),
            createButtonToCloseFavorModal("close")("ok"),
            createLinkTo("")("zobacz wszystkie")("#/ulubione"),
        )(createDiv("previevActualFavorBeer"));

    element.appendChild(wrapperDiv);
  return element
}
