import { pipeline as compose } from '../../../pipeline';
import { createDiv, createImgElem, createSpanElem, createTitle, createLinkTo, createWrapperDiv } from "../../toManipulateDOM/basisHandlersToManipulateDOM";
import { createBtnAddToFavour, createBtnAddToCart } from "../../toManipulateDOM/handlersToManipulateDOM"


export const descriptionPart = (beer) => (element) => {

    const wrapperDiv = compose(  
            createLinkTo("")("powrót do głównej")("#/"),
            createTitle("")(beer.name),
            createImgElem("")(beer.image_url),
            createSpanElem("description")(beer.description),
            createBtnAddToFavour("favourBtn")("dodaj do ulubionych")(beer),
            createBtnAddToCart("cartBtn")("dodaj do koszyka")(beer),   
        )(createDiv("description-part"));

    element.appendChild(wrapperDiv);
  return element
}