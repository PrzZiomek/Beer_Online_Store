import { pipeline as compose } from '../../pipeline';
import { createDiv } from "../toManipulateDOM/basisHandlersToManipulateDOM";
import { descriptionPart } from "./componentsOfShowDescription.js/descriptionPart";
import { descriptionParams } from "./componentsOfShowDescription.js/descriptionParams";



export const createBeerDescription = (beer) => {

  const area = document.querySelector("main");
      
  const mainWrapper = compose(
          descriptionPart(beer),
          descriptionParams(beer),
    )(createDiv("beer-description"));

  area.appendChild(mainWrapper);
};
