import { pipeline as compose } from '../../../pipeline';
import { createDiv, createText, createTitle } from "../../toManipulateDOM/basisHandlersToManipulateDOM";



export const loginWindowHeader = (element) => {

    const wrapperDiv = compose(    
                        createTitle("")("beers"),
                        createText("")("zaloguj się"),
                    )(createDiv("loginWindow-header"));

    element.appendChild(wrapperDiv);
  return element
}