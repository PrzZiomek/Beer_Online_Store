import { pipeline as compose } from '../../../pipeline';
import { createDiv, createSpanElem, createText } from "../../toManipulateDOM/basisHandlersToManipulateDOM";
import { createForm, createLabel, createBtn, createOption, createSelect, createCheckboxInput } from '../../RegistrationForm/handlersToCreateForm';




export const degreeOfColorOption = (element) => {

        const wrapperDiv = compose( 
                    createLabel("")("jasne")("jasne"),
                    createCheckboxInput("filter")("colors")("jasne"),
                    createLabel("")("srednie")("srednie"),
                    createCheckboxInput("filter")("colors")("srednie"),
                    createLabel("")("ciemne")("ciemne"),
                    createCheckboxInput("filter")("colors")("ciemne"),
            )(createDiv("filtersForm-colors"))

    element.appendChild(wrapperDiv);
  return element;
}


// createLabel = (cl) => (to) => (textContent) => (element)
// createCheckboxInput = (cl) => (name) => (value) =>