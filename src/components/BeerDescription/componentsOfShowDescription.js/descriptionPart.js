import { pipeline as compose } from '../../../pipeline';
import { createDiv, createImgElem, createSpanElem, createTitle, createLinkTo } from "../../toManipulateDOM/basisHandlersToManipulateDOM";
import { createBtnAddToFavour, createBtnAddToCartAndOpenPreviev } from "../../toManipulateDOM/handlersToManipulateDOM"


export const descriptionPart = (beer) => (element) => {

    const wrapperDiv = compose(  
            createLinkTo("")("powrót do głównej")("#/"),
            createTitle("")(beer.name),
            createImgElem("")("piwo")(beer.image_url),
            createSpanElem("description")(beer.description),
            createBtnAddToFavour("favourBtn")("dodaj do ulubionych")(beer),
            createBtnAddToCartAndOpenPreviev("cartBtn")("dodaj do koszyka")(beer),   
        )(createDiv("description-part"));

    element.appendChild(wrapperDiv);
  return element
}