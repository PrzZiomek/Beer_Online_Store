import { pipeline as compose } from '../../pipeline';
import { createDiv, createSpanElem, createText } from "../toManipulateDOM/basisHandlersToManipulateDOM";
import { createForm, createBtn, createOption, createSelect, createCheckboxInput } from '../RegistrationForm/handlersToCreateForm';
import { degreeOfColorOption } from './componentsOfFilters/degreeOfColorOption';


export const createFilterOptions = () => {

        const wrapperDiv = compose( 
                    degreeOfColorOption,
              )(createForm("filterOptions-form"))

        element.appendChild(wrapperDiv);
    return element;
}


