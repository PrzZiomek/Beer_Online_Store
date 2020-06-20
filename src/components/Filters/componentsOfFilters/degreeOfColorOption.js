import { pipeline as compose } from '../../../pipeline';
import { createDiv, createSpanElem, createText } from "../../toManipulateDOM/basisHandlersToManipulateDOM";
import { createForm, createLabel, createCheckedCheckboxInput, createBtn, createOption, createSelect, createCheckboxInput } from '../../RegistrationForm/handlersToCreateForm';




export const degreeOfColorOption = (element) => {

        const wrapperDiv = compose( 
                    createLabel("")("wszystkie")("wszystkie"),
                    createCheckedCheckboxInput("filter")("wszystkie")("wszystkie"),
                    createLabel("")("jasne")("jasne"),
                    createCheckboxInput("filter")("colors")("jasne"),
                    createLabel("")("srednie")("średnie"),
                    createCheckboxInput("filter")("colors")("srednie"),
                    createLabel("")("ciemne")("ciemne"),
                    createCheckboxInput("filter")("colors")("ciemne"),
            )(createDiv("filtersForm-colors"))

    element.appendChild(wrapperDiv);
  return element;
}


// createLabel = (cl) => (to) => (textContent) => (element)
// createCheckboxInput = (cl) => (name) => (value) =>