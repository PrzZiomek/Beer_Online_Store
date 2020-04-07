import { store } from "../../manageState/store";
import { pipeline as compose } from '../../pipeline';
import { clearContentOf, createDiv, createImgElem, createSpanElem, createText, createTitle, createLinkTo, createWrapperDiv } from "../toManipulateDOM/basisHandlersToManipulateDOM";
import { descriptionPart } from "./componentsOfShowDescription.js/descriptionPart";
import { descriptionParams } from "./componentsOfShowDescription.js/descriptionParams";


export const ShowDescription = () => {

  const area = document.querySelector("main");
  const beer = store.getState().reducerToCurrentBeer;

  clearContentOf(area);
      
  const mainWrapper = compose(
          descriptionPart(beer),
          descriptionParams(beer),
    )(createDiv("beer-description"));

  area.appendChild(mainWrapper);
};


