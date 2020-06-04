import { pipeline as compose } from '../../../pipeline';
import { createDiv, createSpanElem, createText } from "../../toManipulateDOM/basisHandlersToManipulateDOM";
import { createForm, createLabel, createBtn, createOption, createSelect, createCheckboxInput } from '../../RegistrationForm/handlersToCreateForm';




export const degreeOfColorOption = (element) => {

        const wrapperDiv = compose( 
                    createLabel("")("jasne")("jasne"),
                    createCheckboxInput("")("colors")("jasne"),
                    createLabel("")("srednie")("średnie"),
                    createCheckboxInput("")("colors")("srednie"),
                    createLabel("")("ciemne")("ciemne"),
                    createCheckboxInput("")("colors")("ciemne"),
            )(createDiv("filters-colors"))

    element.appendChild(wrapperDiv);
  return element;
}


// createLabel = (cl) => (to) => (textContent) => (element)
// createCheckboxInput = (cl) => (name) => (value) =>